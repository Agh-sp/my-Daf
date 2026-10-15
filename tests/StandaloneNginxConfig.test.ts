import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { describe, expect, it } from "vitest";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const config = fs.readFileSync(
  path.resolve(__dirname, "../deploy/nginx/middleeastdefense.conf"),
  "utf8",
);

describe("standalone Nginx site config", () => {
  it("routes worker WebSockets to the worker ports with upgrade headers", () => {
    expect(config).toContain(
      "location ~ ^/w(?<openfront_worker>[0-9]+)(?<openfront_path>/.*)?$",
    );
    expect(config).toContain(
      "proxy_pass http://127.0.0.1:$openfront_worker_port$openfront_path$is_args$args;",
    );
    expect(config).toContain("proxy_set_header Upgrade $http_upgrade;");
    expect(config).toContain(
      "proxy_set_header Connection $openfront_connection_upgrade;",
    );
    expect(config).toContain("0       3001;");
    expect(config).toContain("1       3002;");
  });

  it("sends create-game requests to the worker upstream, not the app shell", () => {
    expect(config).toContain("location = /api/create_game");
    expect(config).toContain("proxy_pass http://middleeastdefense_workers;");
  });
});
