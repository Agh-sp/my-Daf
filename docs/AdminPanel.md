# Admin panel

The game-server admin panel is served at `/panelad`. Each game worker exposes
the same authenticated admin API, and the browser queries every configured
worker.

## Available controls

- **Overview and Games** show live worker health, running games and connected
  players. The online count includes active game connections only, not website
  visitors or empty lobbies. The memory card shows host RAM in use / total, not
  the sum of each Node.js worker's process memory.
- **Reports** combines global-chat reports with player reports filed during
  active games. Reports are written to SQLite as they are submitted and remain
  available after a worker restart.
- **Accounts** creates local username/password accounts, shows their optional
  phone numbers, allows edits/deletion, records warnings, and enforces permanent
  or timed bans on login and game joins. Products can be manually granted to a
  local account and are saved in that account's server-side inventory. Passwords
  are scrypt-hashed; plaintext passwords are never stored.
- **Products** manages a local product catalog with name, description, integer
  price, currency, an optional HTTPS payment link, visibility, and an optional
  PNG/JPEG/WebP image (up to 3 MB). Administrators can create, rename, and
  delete product categories. The Store displays only this server-managed
  catalog; legacy cosmetics, subscription and bundle tabs are not shown there.
  Players see active products, category filters, and payment links. Saved
  categories remain visible even when no active products are available. The
  link opens an external payment page; this catalog does not verify payment or
  automatically fulfill purchases.
- **Inventory** shows products manually granted to the signed-in local account.
  These are delivered products, not equipable game cosmetics.
- **Export / backup** downloads a JSON snapshot of local accounts, password
  salts and hashes, products and image bytes, categories, inventory, warnings,
  reports, and retained application logs. It is not an import/restore tool.
  Treat the file as sensitive and store it securely.
- **Bans** continues to display game bans not associated with local accounts.
  Local account bans are managed in Accounts and are enforced for this
  deployment only.
- Accounts, products, categories, inventory, reports, warnings, bans, uploaded
  images, and application logs are stored on disk under `.admin-data/` (or
  `ADMIN_DATA_DIR`) using SQLite and local image files. Keep that directory
  persistent and back it up; do not commit it to Git. The service account must
  be able to write to the data directory.
- **Server logs** displays persisted application logs from the database
  (retained up to 100,000 entries) and redacts credential-like fields and
  bearer/JWT strings. Public chat messages are logged for moderation; private
  whispers are not. On Linux, set `ADMIN_SYSTEMD_UNIT` to the exact application
  `.service` name to read the last 200 journald entries. The service account
  must have journal read access (for example, narrowly granted membership in
  the `systemd-journal` group). Linux journal logs are not available in Windows
  development. The panel does not expose arbitrary shell commands or PM2 logs.
- **Maintenance mode** requires confirmation, ends current games on each
  worker, and rejects new games until the administrator disables the mode.
  The mode itself is held in process memory and resets when workers restart.

Admin credentials are provided to each game worker with
`ADMIN_PANEL_USERNAME`, `ADMIN_PANEL_PASSWORD_HASH`, and
`ADMIN_PANEL_SESSION_SECRET`. Password hashes use the `scrypt$<salt hex>$<hash
hex>` format; the session secret must be at least 32 characters.

Local account tokens require `LOCAL_AUTH_SECRET` with at least 32 random
characters. Create the first account from the admin panel's Accounts tab.
There is no public signup or SMS verification flow. Admin-created accounts
sign in in the site's account modal using their username and password.
If a valid local account receives a sign-in service unavailable error, check
that this secret is set in the PM2 process environment on every worker, then
restart the workers. Keep the secret stable and private; changing it expires
existing local-account sessions but does not change account passwords.

## Remaining external services

The local username/password accounts, product catalog, and manually granted
inventory described above are managed by this game server and do not depend on
the external account API. The Store reads only its local product catalog.
OAuth/social sign-in and other game integrations may still contact the
closed-source API service described in [Architecture](./Architecture.md).
Local products are only a catalog with external payment links; automatic
payment verification and fulfillment require a supported payment provider and
a verified server-side webhook, which this panel does not currently implement.
