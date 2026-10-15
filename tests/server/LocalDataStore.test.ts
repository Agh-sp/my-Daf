import { mkdtempSync, rmSync } from "fs";
import { tmpdir } from "os";
import path from "path";
import { afterEach, describe, expect, it } from "vitest";
import { LocalDataStore } from "../../src/server/LocalDataStore";

describe("LocalDataStore", () => {
  let directory: string | undefined;
  let store: LocalDataStore | undefined;

  afterEach(() => {
    store?.close();
    store = undefined;
    if (directory) rmSync(directory, { recursive: true, force: true });
    directory = undefined;
  });

  function createStore() {
    directory = mkdtempSync(path.join(tmpdir(), "openfront-local-data-"));
    store = new LocalDataStore(directory);
    return store;
  }

  it("persists accounts, phone numbers, bans, and product data on disk", () => {
    const db = createStore();
    const account = db.createAccount({
      username: "A13",
      phone: "09123456789",
      passwordSalt: "ab".repeat(16),
      passwordHash: "cd".repeat(32),
    });
    expect(
      db.setAccountTemporaryBan(account.id, Date.now() + 60_000),
    ).toMatchObject({
      banned: false,
      warningCount: 0,
    });
    expect(db.warnAccount(account.id, "Be respectful")).toMatchObject({
      warningCount: 1,
    });
    expect(db.setAccountBanned(account.id, true)?.banned).toBe(true);
    db.createProduct({
      name: "Starter pack",
      description: "A local product",
      price: 250_000,
      currency: "تومان",
      paymentUrl: "https://payments.example.test/order/1",
      active: true,
      image: { bytes: Buffer.from("product-image"), mime: "image/png" },
    });

    db.close();
    store = new LocalDataStore(directory);
    expect(store.getAccount(account.id)).toMatchObject({
      id: account.id,
      username: "A13",
      phone: "09123456789",
      banned: true,
      warningCount: 1,
    });
    expect(store.listProducts(true)).toMatchObject([
      {
        name: "Starter pack",
        price: 250_000,
        currency: "تومان",
        imageMime: "image/png",
        paymentUrl: "https://payments.example.test/order/1",
      },
    ]);
  });

  it("persists reports and exports every account and product", () => {
    const db = createStore();
    const account = db.createAccount({
      username: "A13",
      phone: null,
      passwordSalt: "ab".repeat(16),
      passwordHash: "cd".repeat(32),
    });
    const category = db.createCategory("Packs");
    const product = db.createProduct({
      name: "Product",
      description: "",
      price: 1,
      currency: "USD",
      categoryId: category.id,
      active: true,
    });
    const inventoryItem = db.grantInventoryItem(
      account.id,
      product.id,
      "TestAdmin",
    );
    if (!inventoryItem) throw new Error("Expected granted inventory item");
    db.appendAdminLog({
      timestamp: new Date(10).toISOString(),
      level: "info",
      message: "local account signed in",
      metadata: { accountId: account.id },
    });
    db.saveReports([
      {
        id: "game:report-1",
        workerId: 0,
        createdAt: 10,
        reported: { username: "A13" },
      },
    ]);

    expect(db.listReports(0)).toMatchObject([
      { id: "game:report-1", reported: { username: "A13" } },
    ]);
    expect(db.listReports(1)).toEqual([]);
    expect(db.exportData()).toMatchObject({
      accounts: [{ username: "A13", warningCount: 0 }],
      products: [{ name: "Product" }],
      categories: [{ name: "Packs" }],
      accountCredentials: [
        {
          accountId: account.id,
          passwordSalt: "ab".repeat(16),
          passwordHash: "cd".repeat(32),
        },
      ],
      inventory: [{ id: inventoryItem.id, name: "Product" }],
      logs: [{ message: "local account signed in" }],
    });
  });

  it("normalizes usernames for uniqueness and removes uploaded images", () => {
    const db = createStore();
    db.createAccount({
      username: "A13",
      phone: null,
      passwordSalt: "ab".repeat(16),
      passwordHash: "cd".repeat(32),
    });
    expect(() =>
      db.createAccount({
        username: "a13",
        phone: null,
        passwordSalt: "ef".repeat(16),
        passwordHash: "12".repeat(32),
      }),
    ).toThrow(/UNIQUE constraint/);

    const product = db.createProduct({
      name: "Product",
      description: "",
      price: 1,
      currency: "USD",
      active: true,
      image: { bytes: Buffer.from("image"), mime: "image/webp" },
    });
    expect(db.getProductImage(product.id)?.bytes).toEqual(Buffer.from("image"));
    expect(db.deleteProduct(product.id)).toBe(true);
    expect(db.getProductImage(product.id)).toBeNull();
  });
});
