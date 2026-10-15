import { ClientEnv } from "./ClientEnv";

export function localAccountApiUrl(path: string): string {
  const origin =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? window.location.origin
      : (ClientEnv.siteOrigin() ?? window.location.origin);
  return `${origin}/w0/api/local${path}`;
}
