#!/usr/bin/env bash
set -euo pipefail

DOMAIN="middleeastdefense.ir"
SOURCE="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)/middleeastdefense.conf"
DEST_DIR="/etc/nginx/conf.d"
DEST="${DEST_DIR}/000-middleeastdefense.conf"
CERT="/etc/letsencrypt/live/${DOMAIN}"

if [[ "${EUID}" -ne 0 ]]; then
    echo "Run this script with sudo: sudo bash $0" >&2
    exit 1
fi

if [[ ! -r "$SOURCE" ]]; then
    echo "Nginx site config not found: $SOURCE" >&2
    exit 1
fi

for file in "${CERT}/fullchain.pem" "${CERT}/privkey.pem"; do
    if [[ ! -r "$file" ]]; then
        echo "TLS certificate file is missing or unreadable: $file" >&2
        exit 1
    fi
done

if ! command -v ss >/dev/null 2>&1; then
    echo "The 'ss' command is required to verify the game server ports." >&2
    exit 1
fi

for port in 3000 3001 3002; do
    if ! ss -ltnH | awk -v port=":${port}" '$4 ~ (port "$") { found = 1 } END { exit !found }'; then
        echo "Nothing is listening on TCP port ${port}; start the game master and both workers before installing Nginx routes." >&2
        exit 1
    fi
done

if [[ ! -x "$(command -v nginx || true)" ]] || ! command -v systemctl >/dev/null 2>&1; then
    echo "Nginx and systemd are required on this server." >&2
    exit 1
fi

mkdir -p "$DEST_DIR"

while IFS= read -r file; do
    [[ "$file" == "$DEST" ]] && continue
    echo "Conflicting Nginx config found in conf.d: $file" >&2
    echo "Resolve that duplicate server_name before installing this site config." >&2
    exit 1
done < <(grep -RIlE 'server_name[^;]*(^|[[:space:]])(www\.)?middleeastdefense\.ir([[:space:]]|;)' "$DEST_DIR" 2>/dev/null || true)

if ! grep -qE 'include[[:space:]]+/etc/nginx/conf\.d/\*\.conf;' /etc/nginx/nginx.conf; then
    echo "/etc/nginx/nginx.conf does not include /etc/nginx/conf.d/*.conf; cannot install the site config safely." >&2
    exit 1
fi

conf_d_line="$(grep -nE 'include[[:space:]]+/etc/nginx/conf\.d/\*\.conf;' /etc/nginx/nginx.conf | head -n 1 | cut -d: -f1)"
sites_line="$(grep -nE 'include[[:space:]]+/etc/nginx/sites-enabled/\*;' /etc/nginx/nginx.conf | head -n 1 | cut -d: -f1 || true)"
if [[ -n "$sites_line" && "$conf_d_line" -gt "$sites_line" ]]; then
    echo "Nginx loads sites-enabled before conf.d; resolve duplicate server blocks before installing." >&2
    exit 1
fi

backup=""
if [[ -e "$DEST" ]]; then
    backup="${DEST}.backup.$(date +%Y%m%d%H%M%S)"
    cp -a "$DEST" "$backup"
    echo "Backed up previous project config to $backup"
fi

install -m 0644 "$SOURCE" "$DEST"
if ! nginx -t; then
    if [[ -n "$backup" ]]; then
        cp -a "$backup" "$DEST"
    else
        rm -f "$DEST"
    fi
    echo "Nginx validation failed; restored the previous config." >&2
    exit 1
fi

systemctl reload nginx
if ! systemctl is-active --quiet nginx; then
    echo "Nginx is not active after reload; inspect: systemctl status nginx --no-pager" >&2
    exit 1
fi

echo "Nginx routing installed. Check /w0/chat for an HTTP 101 WebSocket handshake."
