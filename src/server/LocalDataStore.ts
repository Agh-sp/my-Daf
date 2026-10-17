import { randomUUID, timingSafeEqual } from "crypto";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { DatabaseSync } from "node:sqlite";
import path from "path";

export type LocalAccount = {
  id: string;
  username: string;
  phone: string | null;
  banned: boolean;
  bannedUntil: number | null;
  warningCount: number;
  inventoryCount: number;
  createdAt: number;
  updatedAt: number;
};

export type LocalAccountCredentials = LocalAccount & {
  passwordSalt: string;
  passwordHash: string;
};

export type LocalProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  paymentUrl: string | null;
  categoryId: string | null;
  categoryName: string | null;
  imageMime: string | null;
  active: boolean;
  createdAt: number;
  updatedAt: number;
};

export type LocalProductCategory = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
};

export type LocalInventoryItem = {
  id: string;
  accountId: string;
  productId: string | null;
  name: string;
  description: string;
  grantedBy: string;
  createdAt: number;
};

type AccountRow = {
  id: string;
  username: string;
  phone: string | null;
  password_salt: string;
  password_hash: string;
  banned: number;
  banned_until: number | null;
  warning_count: number;
  inventory_count: number;
  created_at: number;
  updated_at: number;
};

type PhoneVerificationRow = {
  purpose: "login" | "register";
  code_hash: string | null;
  expires_at: number;
  attempts: number;
};

export class LocalPhoneAlreadyExistsError extends Error {
  constructor() {
    super("Phone number already exists");
    this.name = "LocalPhoneAlreadyExistsError";
  }
}

type ProductRow = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  payment_url: string | null;
  category_id: string | null;
  category_name: string | null;
  image_path: string | null;
  image_mime: string | null;
  active: number;
  created_at: number;
  updated_at: number;
};

export class LocalDataStore {
  private readonly db: DatabaseSync;
  private readonly imageDirectory: string;

  constructor(dataDirectory = process.env.ADMIN_DATA_DIR ?? ".admin-data") {
    const directory = path.resolve(dataDirectory);
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    this.imageDirectory = path.join(directory, "product-images");
    mkdirSync(this.imageDirectory, { recursive: true, mode: 0o700 });
    this.db = new DatabaseSync(path.join(directory, "app.sqlite"));
    this.db.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA busy_timeout = 5000;
      PRAGMA foreign_keys = ON;
      CREATE TABLE IF NOT EXISTS local_accounts (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL,
        username_normalized TEXT NOT NULL UNIQUE,
        phone TEXT,
        password_salt TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        banned INTEGER NOT NULL DEFAULT 0 CHECK (banned IN (0, 1)),
        banned_until INTEGER,
        warning_count INTEGER NOT NULL DEFAULT 0,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS local_phone_verifications (
        mobile TEXT PRIMARY KEY,
        purpose TEXT NOT NULL CHECK (purpose IN ('login', 'register')),
        code_hash TEXT,
        expires_at INTEGER NOT NULL,
        attempts INTEGER NOT NULL DEFAULT 0,
        sent_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS local_products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL CHECK (price >= 0),
        currency TEXT NOT NULL,
        payment_url TEXT,
        category_id TEXT REFERENCES local_product_categories(id) ON DELETE SET NULL,
        image_path TEXT,
        image_mime TEXT,
        active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS local_account_warnings (
        id TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES local_accounts(id) ON DELETE CASCADE,
        message TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS admin_reports (
        id TEXT PRIMARY KEY,
        report_json TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS local_product_categories (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS local_inventory (
        id TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES local_accounts(id) ON DELETE CASCADE,
        product_id TEXT REFERENCES local_products(id) ON DELETE SET NULL,
        product_name TEXT NOT NULL,
        product_description TEXT NOT NULL,
        granted_by TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS admin_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp TEXT NOT NULL,
        level TEXT NOT NULL,
        message TEXT NOT NULL,
        metadata TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS admin_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at INTEGER NOT NULL
      );
    `);
    this.ensureColumn("local_accounts", "banned_until", "INTEGER");
    this.ensureColumn(
      "local_accounts",
      "warning_count",
      "INTEGER NOT NULL DEFAULT 0",
    );
    this.ensureColumn("local_products", "payment_url", "TEXT");
    this.ensureColumn(
      "local_products",
      "category_id",
      "TEXT REFERENCES local_product_categories(id) ON DELETE SET NULL",
    );
  }

  close(): void {
    this.db.close();
  }

  createAccount(input: {
    username: string;
    phone: string | null;
    passwordSalt: string;
    passwordHash: string;
  }): LocalAccount {
    const id = randomUUID();
    const now = Date.now();
    this.db
      .prepare(
        `INSERT INTO local_accounts
          (id, username, username_normalized, phone, password_salt,
           password_hash, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        id,
        input.username,
        normalizeUsername(input.username),
        input.phone,
        input.passwordSalt,
        input.passwordHash,
        now,
        now,
      );
    return this.getAccount(id)!;
  }

  getAccount(id: string): LocalAccount | null {
    const row = this.db
      .prepare(
        `SELECT a.*, (SELECT COUNT(*) FROM local_inventory i WHERE i.account_id = a.id) AS inventory_count
         FROM local_accounts a WHERE a.id = ?`,
      )
      .get(id) as AccountRow | undefined;
    return row ? accountFromRow(row) : null;
  }

  findAccountByUsername(username: string): LocalAccountCredentials | null {
    const row = this.db
      .prepare(
        `SELECT a.*, (SELECT COUNT(*) FROM local_inventory i WHERE i.account_id = a.id) AS inventory_count
         FROM local_accounts a WHERE a.username_normalized = ?`,
      )
      .get(normalizeUsername(username)) as AccountRow | undefined;
    if (!row) return null;
    return {
      ...accountFromRow(row),
      passwordSalt: row.password_salt,
      passwordHash: row.password_hash,
    };
  }

  findAccountsByPhone(mobile: string): LocalAccountCredentials[] {
    const variants = [
      mobile,
      `0${mobile}`,
      `98${mobile}`,
      `+98${mobile}`,
      `0098${mobile}`,
    ];
    const rows = this.db
      .prepare(
        `SELECT a.*, (SELECT COUNT(*) FROM local_inventory i WHERE i.account_id = a.id) AS inventory_count
         FROM local_accounts a WHERE a.phone IN (?, ?, ?, ?, ?)`,
      )
      .all(...variants) as AccountRow[];
    return rows.map((row) => ({
      ...accountFromRow(row),
      passwordSalt: row.password_salt,
      passwordHash: row.password_hash,
    }));
  }

  createPhoneAccount(input: {
    mobile: string;
    username: string;
    passwordSalt: string;
    passwordHash: string;
  }): LocalAccount {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      if (this.findAccountsByPhone(input.mobile).length > 0) {
        throw new LocalPhoneAlreadyExistsError();
      }
      const account = this.createAccount({
        username: input.username,
        phone: input.mobile,
        passwordSalt: input.passwordSalt,
        passwordHash: input.passwordHash,
      });
      this.db.exec("COMMIT");
      return account;
    } catch (error) {
      this.db.exec("ROLLBACK");
      throw error;
    }
  }

  reservePhoneVerification(
    mobile: string,
    purpose: "login" | "register",
    now: number,
    cooldownMs: number,
    expiresAt: number,
  ): boolean {
    this.db
      .prepare("DELETE FROM local_phone_verifications WHERE sent_at < ?")
      .run(now - 24 * 60 * 60 * 1000);
    const result = this.db
      .prepare(
        `INSERT INTO local_phone_verifications
           (mobile, purpose, code_hash, expires_at, attempts, sent_at)
         VALUES (?, ?, NULL, ?, 0, ?)
         ON CONFLICT(mobile) DO UPDATE SET
           purpose = excluded.purpose,
           code_hash = NULL,
           expires_at = excluded.expires_at,
           attempts = 0,
           sent_at = excluded.sent_at
         WHERE local_phone_verifications.sent_at <= ?`,
      )
      .run(mobile, purpose, expiresAt, now, now - cooldownMs);
    return Number(result.changes) > 0;
  }

  completePhoneVerification(
    mobile: string,
    purpose: "login" | "register",
    codeHash: string,
  ): void {
    this.db
      .prepare(
        `UPDATE local_phone_verifications
         SET code_hash = ?
         WHERE mobile = ? AND purpose = ?`,
      )
      .run(codeHash, mobile, purpose);
  }

  consumePhoneVerification(
    mobile: string,
    purpose: "login" | "register",
    codeHash: string,
    now: number,
    maxAttempts: number,
  ): boolean {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const row = this.db
        .prepare(
          `SELECT purpose, code_hash, expires_at, attempts
           FROM local_phone_verifications WHERE mobile = ?`,
        )
        .get(mobile) as PhoneVerificationRow | undefined;
      if (!row || row.purpose !== purpose) {
        this.db.exec("COMMIT");
        return false;
      }
      if (
        row.expires_at <= now ||
        row.attempts >= maxAttempts ||
        row.code_hash === null
      ) {
        this.db
          .prepare("DELETE FROM local_phone_verifications WHERE mobile = ?")
          .run(mobile);
        this.db.exec("COMMIT");
        return false;
      }

      const expected = Buffer.from(row.code_hash, "hex");
      const provided = Buffer.from(codeHash, "hex");
      const matches =
        expected.length === provided.length &&
        timingSafeEqual(expected, provided);
      if (!matches) {
        this.db
          .prepare(
            `UPDATE local_phone_verifications
             SET attempts = attempts + 1 WHERE mobile = ?`,
          )
          .run(mobile);
        this.db.exec("COMMIT");
        return false;
      }

      this.db
        .prepare("DELETE FROM local_phone_verifications WHERE mobile = ?")
        .run(mobile);
      this.db.exec("COMMIT");
      return true;
    } catch (error) {
      this.db.exec("ROLLBACK");
      throw error;
    }
  }

  listAccounts(): LocalAccount[] {
    return (
      this.db
        .prepare(
          `SELECT a.*, (SELECT COUNT(*) FROM local_inventory i WHERE i.account_id = a.id) AS inventory_count
           FROM local_accounts a ORDER BY a.created_at DESC`,
        )
        .all() as AccountRow[]
    ).map(accountFromRow);
  }

  getMaintenanceMode(): boolean {
    const row = this.db
      .prepare("SELECT value FROM admin_settings WHERE key = ?")
      .get("maintenance_mode") as { value: string } | undefined;
    return row?.value === "true";
  }

  setMaintenanceMode(enabled: boolean): void {
    this.db
      .prepare(
        `INSERT INTO admin_settings (key, value, updated_at)
         VALUES (?, ?, ?)
         ON CONFLICT(key) DO UPDATE SET
           value = excluded.value,
           updated_at = excluded.updated_at`,
      )
      .run("maintenance_mode", String(enabled), Date.now());
  }

  updateAccount(
    id: string,
    input: {
      username: string;
      phone: string | null;
      passwordSalt?: string;
      passwordHash?: string;
    },
  ): LocalAccount | null {
    const now = Date.now();
    const result = this.db
      .prepare(
        `UPDATE local_accounts SET
          username = ?, username_normalized = ?, phone = ?,
          password_salt = COALESCE(?, password_salt),
          password_hash = COALESCE(?, password_hash),
          updated_at = ?
         WHERE id = ?`,
      )
      .run(
        input.username,
        normalizeUsername(input.username),
        input.phone,
        input.passwordSalt ?? null,
        input.passwordHash ?? null,
        now,
        id,
      );
    return Number(result.changes) > 0 ? this.getAccount(id) : null;
  }

  setAccountBanned(id: string, banned: boolean): LocalAccount | null {
    const result = this.db
      .prepare(
        `UPDATE local_accounts SET banned = ?, banned_until = NULL, updated_at = ?
         WHERE id = ?`,
      )
      .run(banned ? 1 : 0, Date.now(), id);
    return Number(result.changes) > 0 ? this.getAccount(id) : null;
  }

  setAccountTemporaryBan(
    id: string,
    bannedUntil: number | null,
  ): LocalAccount | null {
    const result = this.db
      .prepare(
        `UPDATE local_accounts SET banned_until = ?, updated_at = ? WHERE id = ?`,
      )
      .run(bannedUntil, Date.now(), id);
    return Number(result.changes) > 0 ? this.getAccount(id) : null;
  }

  warnAccount(id: string, message: string): LocalAccount | null {
    const account = this.getAccount(id);
    if (!account) return null;
    const now = Date.now();
    this.db
      .prepare(
        "INSERT INTO local_account_warnings (id, account_id, message, created_at) VALUES (?, ?, ?, ?)",
      )
      .run(randomUUID(), id, message, now);
    this.db
      .prepare(
        "UPDATE local_accounts SET warning_count = warning_count + 1, updated_at = ? WHERE id = ?",
      )
      .run(now, id);
    return this.getAccount(id);
  }

  saveReports(
    reports: readonly {
      id: string;
      createdAt: number;
      [key: string]: unknown;
    }[],
  ): void {
    const insert = this.db.prepare(
      `INSERT INTO admin_reports (id, report_json, created_at) VALUES (?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET report_json = excluded.report_json`,
    );
    for (const report of reports) {
      insert.run(report.id, JSON.stringify(report), report.createdAt);
    }
  }

  listReports(
    workerId?: number,
  ): { id: string; createdAt: number; [key: string]: unknown }[] {
    return (
      this.db
        .prepare(
          "SELECT report_json FROM admin_reports ORDER BY created_at DESC",
        )
        .all() as { report_json: string }[]
    )
      .map(
        ({ report_json }) =>
          JSON.parse(report_json) as {
            id: string;
            createdAt: number;
            [key: string]: unknown;
          },
      )
      .filter(
        (report) => workerId === undefined || report.workerId === workerId,
      );
  }

  exportData(): {
    accounts: LocalAccount[];
    accountCredentials: {
      accountId: string;
      passwordSalt: string;
      passwordHash: string;
    }[];
    products: LocalProduct[];
    categories: LocalProductCategory[];
    inventory: LocalInventoryItem[];
    reports: ReturnType<LocalDataStore["listReports"]>;
    logs: ReturnType<LocalDataStore["listAdminLogs"]>;
    warnings: {
      id: string;
      accountId: string;
      message: string;
      createdAt: number;
    }[];
    productImages: { productId: string; mime: string; base64: string }[];
    settings: { key: string; value: string; updatedAt: number }[];
  } {
    const warnings = this.db
      .prepare(
        "SELECT id, account_id, message, created_at FROM local_account_warnings ORDER BY created_at DESC",
      )
      .all() as {
      id: string;
      account_id: string;
      message: string;
      created_at: number;
    }[];
    return {
      accounts: this.listAccounts(),
      accountCredentials: (
        this.db
          .prepare(
            "SELECT id, password_salt, password_hash FROM local_accounts",
          )
          .all() as {
          id: string;
          password_salt: string;
          password_hash: string;
        }[]
      ).map((row) => ({
        accountId: row.id,
        passwordSalt: row.password_salt,
        passwordHash: row.password_hash,
      })),
      products: this.listProducts(),
      categories: this.listCategories(),
      inventory: this.listAccounts().flatMap((account) =>
        this.listAccountInventory(account.id),
      ),
      reports: this.listReports(),
      logs: this.listAdminLogs(100_000),
      warnings: warnings.map((row) => ({
        id: row.id,
        accountId: row.account_id,
        message: row.message,
        createdAt: row.created_at,
      })),
      productImages: this.listProducts().flatMap((product) => {
        const image = this.getProductImage(product.id);
        return image
          ? [
              {
                productId: product.id,
                mime: image.mime,
                base64: image.bytes.toString("base64"),
              },
            ]
          : [];
      }),
      settings: this.db
        .prepare(
          "SELECT key, value, updated_at FROM admin_settings ORDER BY key",
        )
        .all()
        .map((row) => {
          const setting = row as {
            key: string;
            value: string;
            updated_at: number;
          };
          return {
            key: setting.key,
            value: setting.value,
            updatedAt: setting.updated_at,
          };
        }),
    };
  }

  createCategory(name: string): LocalProductCategory {
    const id = randomUUID();
    const now = Date.now();
    this.db
      .prepare(
        "INSERT INTO local_product_categories (id, name, created_at, updated_at) VALUES (?, ?, ?, ?)",
      )
      .run(id, name, now, now);
    return this.getCategory(id)!;
  }

  listCategories(): LocalProductCategory[] {
    return (
      this.db
        .prepare(
          "SELECT id, name, created_at, updated_at FROM local_product_categories ORDER BY name COLLATE NOCASE",
        )
        .all() as {
        id: string;
        name: string;
        created_at: number;
        updated_at: number;
      }[]
    ).map((row) => ({
      id: row.id,
      name: row.name,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  }

  getCategory(id: string): LocalProductCategory | null {
    const row = this.db
      .prepare(
        "SELECT id, name, created_at, updated_at FROM local_product_categories WHERE id = ?",
      )
      .get(id) as
      | { id: string; name: string; created_at: number; updated_at: number }
      | undefined;
    return row
      ? {
          id: row.id,
          name: row.name,
          createdAt: row.created_at,
          updatedAt: row.updated_at,
        }
      : null;
  }

  updateCategory(id: string, name: string): LocalProductCategory | null {
    const result = this.db
      .prepare(
        "UPDATE local_product_categories SET name = ?, updated_at = ? WHERE id = ?",
      )
      .run(name, Date.now(), id);
    return Number(result.changes) > 0 ? this.getCategory(id) : null;
  }

  deleteCategory(id: string): boolean {
    return (
      Number(
        this.db
          .prepare("DELETE FROM local_product_categories WHERE id = ?")
          .run(id).changes,
      ) > 0
    );
  }

  grantInventoryItem(
    accountId: string,
    productId: string,
    grantedBy: string,
  ): LocalInventoryItem | null {
    const product = this.getProduct(productId);
    if (!product) return null;
    const itemId = randomUUID();
    const createdAt = Date.now();
    this.db
      .prepare(
        `INSERT INTO local_inventory
          (id, account_id, product_id, product_name, product_description, granted_by, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        itemId,
        accountId,
        product.id,
        product.name,
        product.description,
        grantedBy,
        createdAt,
      );
    return this.listAccountInventory(accountId).find(
      (item) => item.id === itemId,
    )!;
  }

  listAccountInventory(accountId: string): LocalInventoryItem[] {
    return (
      this.db
        .prepare(
          `SELECT id, account_id, product_id, product_name, product_description, granted_by, created_at
           FROM local_inventory WHERE account_id = ? ORDER BY created_at DESC`,
        )
        .all(accountId) as {
        id: string;
        account_id: string;
        product_id: string | null;
        product_name: string;
        product_description: string;
        granted_by: string;
        created_at: number;
      }[]
    ).map((row) => ({
      id: row.id,
      accountId: row.account_id,
      productId: row.product_id,
      name: row.product_name,
      description: row.product_description,
      grantedBy: row.granted_by,
      createdAt: row.created_at,
    }));
  }

  appendAdminLog(entry: {
    timestamp: string;
    level: string;
    message: string;
    metadata: Record<string, unknown>;
  }): void {
    const result = this.db
      .prepare(
        "INSERT INTO admin_logs (timestamp, level, message, metadata) VALUES (?, ?, ?, ?)",
      )
      .run(
        entry.timestamp,
        entry.level,
        entry.message,
        JSON.stringify(entry.metadata),
      );
    if (Number(result.lastInsertRowid) % 1000 === 0) {
      this.db
        .prepare(
          `DELETE FROM admin_logs WHERE id <= (
            SELECT id FROM admin_logs ORDER BY id DESC LIMIT 1 OFFSET 99999
          )`,
        )
        .run();
    }
  }

  listAdminLogs(limit: number): {
    timestamp: string;
    level: string;
    message: string;
    metadata: Record<string, unknown>;
  }[] {
    return (
      this.db
        .prepare(
          "SELECT timestamp, level, message, metadata FROM admin_logs ORDER BY id DESC LIMIT ?",
        )
        .all(limit) as {
        timestamp: string;
        level: string;
        message: string;
        metadata: string;
      }[]
    ).map((row) => ({
      ...row,
      metadata: JSON.parse(row.metadata) as Record<string, unknown>,
    }));
  }

  deleteAccount(id: string): boolean {
    return (
      Number(
        this.db.prepare("DELETE FROM local_accounts WHERE id = ?").run(id)
          .changes,
      ) > 0
    );
  }

  createProduct(input: {
    name: string;
    description: string;
    price: number;
    currency: string;
    paymentUrl?: string | null;
    categoryId?: string | null;
    active: boolean;
    image?: { bytes: Buffer; mime: string };
  }): LocalProduct {
    const id = randomUUID();
    const imagePath = input.image
      ? this.saveProductImage(id, input.image.bytes)
      : null;
    const now = Date.now();
    try {
      this.db
        .prepare(
          `INSERT INTO local_products
            (id, name, description, price, currency, payment_url, category_id, image_path,
             image_mime, active, created_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          id,
          input.name,
          input.description,
          input.price,
          input.currency,
          input.paymentUrl ?? null,
          input.categoryId ?? null,
          imagePath,
          input.image?.mime ?? null,
          input.active ? 1 : 0,
          now,
          now,
        );
    } catch (error) {
      if (imagePath) rmSync(imagePath, { force: true });
      throw error;
    }
    return this.getProduct(id)!;
  }

  listProducts(activeOnly = false): LocalProduct[] {
    const rows = this.db
      .prepare(
        `SELECT p.*, c.name AS category_name
         FROM local_products p
         LEFT JOIN local_product_categories c ON c.id = p.category_id
         ${activeOnly ? "WHERE p.active = 1" : ""}
         ORDER BY p.created_at DESC`,
      )
      .all() as ProductRow[];
    return rows.map(productFromRow);
  }

  getProduct(id: string): LocalProduct | null {
    const row = this.db
      .prepare(
        `SELECT p.*, c.name AS category_name FROM local_products p
         LEFT JOIN local_product_categories c ON c.id = p.category_id
         WHERE p.id = ?`,
      )
      .get(id) as ProductRow | undefined;
    return row ? productFromRow(row) : null;
  }

  getProductImage(id: string): { bytes: Buffer; mime: string } | null {
    const row = this.db
      .prepare("SELECT image_path, image_mime FROM local_products WHERE id = ?")
      .get(id) as
      | { image_path: string | null; image_mime: string | null }
      | undefined;
    if (!row?.image_path || !row.image_mime) return null;
    return {
      bytes: readFileSync(row.image_path),
      mime: row.image_mime,
    };
  }

  updateProduct(
    id: string,
    input: {
      name: string;
      description: string;
      price: number;
      currency: string;
      paymentUrl?: string | null;
      categoryId?: string | null;
      active: boolean;
      image?: { bytes: Buffer; mime: string } | null;
    },
  ): LocalProduct | null {
    const existing = this.db
      .prepare("SELECT * FROM local_products WHERE id = ?")
      .get(id) as ProductRow | undefined;
    if (!existing) return null;
    const paymentUrl =
      input.paymentUrl === undefined ? existing.payment_url : input.paymentUrl;
    const categoryId =
      input.categoryId === undefined ? existing.category_id : input.categoryId;
    let imagePath = existing.image_path;
    let imageMime = existing.image_mime;
    if (input.image !== undefined) {
      imagePath = input.image
        ? this.saveProductImage(id, input.image.bytes)
        : null;
      imageMime = input.image?.mime ?? null;
    }
    this.db
      .prepare(
        `UPDATE local_products SET
          name = ?, description = ?, price = ?, currency = ?, payment_url = ?, category_id = ?,
          image_path = ?, image_mime = ?, active = ?, updated_at = ?
         WHERE id = ?`,
      )
      .run(
        input.name,
        input.description,
        input.price,
        input.currency,
        paymentUrl,
        categoryId,
        imagePath,
        imageMime,
        input.active ? 1 : 0,
        Date.now(),
        id,
      );
    if (input.image !== undefined && existing.image_path) {
      rmSync(existing.image_path, { force: true });
    }
    return this.getProduct(id);
  }

  deleteProduct(id: string): boolean {
    const existing = this.db
      .prepare("SELECT image_path FROM local_products WHERE id = ?")
      .get(id) as { image_path: string | null } | undefined;
    if (!existing) return false;
    this.db.prepare("DELETE FROM local_products WHERE id = ?").run(id);
    if (existing.image_path) rmSync(existing.image_path, { force: true });
    return true;
  }

  private saveProductImage(id: string, bytes: Buffer): string {
    const target = path.join(this.imageDirectory, `${id}-${randomUUID()}.img`);
    writeFileSync(target, bytes, { mode: 0o600 });
    return target;
  }

  private ensureColumn(
    table: string,
    column: string,
    definition: string,
  ): void {
    const columns = this.db.prepare(`PRAGMA table_info(${table})`).all() as {
      name: string;
    }[];
    if (!columns.some((existing) => existing.name === column)) {
      this.db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
    }
  }
}

let defaultStore: LocalDataStore | null = null;

export function getLocalDataStore(): LocalDataStore {
  defaultStore ??= new LocalDataStore();
  return defaultStore;
}

export function normalizeUsername(username: string): string {
  return username.trim().normalize("NFKC").toLocaleLowerCase("en-US");
}

function accountFromRow(row: AccountRow): LocalAccount {
  return {
    id: row.id,
    username: row.username,
    phone: row.phone,
    banned: row.banned === 1,
    bannedUntil: row.banned_until,
    warningCount: row.warning_count,
    inventoryCount: row.inventory_count,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function productFromRow(row: ProductRow): LocalProduct {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    price: row.price,
    currency: row.currency,
    paymentUrl: row.payment_url,
    categoryId: row.category_id,
    categoryName: row.category_name,
    imageMime: row.image_mime,
    active: row.active === 1,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
