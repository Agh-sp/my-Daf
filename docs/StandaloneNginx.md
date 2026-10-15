# Standalone Nginx deployment

Use this configuration when the Node master and workers run directly on the
host, with the master listening on port `3000` and workers on ports `3001+`.
It is not for a Docker deployment whose container already runs Nginx.

The current `middleeastdefense.ir` bootstrap advertises two workers. The
included [Nginx site configuration](../deploy/nginx/middleeastdefense.conf)
therefore routes worker `0` to port `3001` and worker `1` to port `3002`.
Keep those entries in sync with the server's `NUM_WORKERS`.

## Install

First inspect the active configuration and identify any existing server blocks
for this domain. Disable the old duplicate site blocks before enabling this
one; do not leave two enabled `server_name middleeastdefense.ir` blocks.

```sh
sudo nginx -T 2>&1 | grep -n -E 'server_name .*middleeastdefense\.ir'
sudo ss -ltnp | grep -E ':3000|:3001|:3002'
sudo test -r /etc/letsencrypt/live/middleeastdefense.ir/fullchain.pem
sudo test -r /etc/letsencrypt/live/middleeastdefense.ir/privkey.pem
```

Once the checks confirm the application ports and certificate are present,
back up and replace the old site with the repository configuration:

```sh
sudo cp /etc/nginx/sites-available/middleeastdefense \
  /etc/nginx/sites-available/middleeastdefense.backup
sudo cp deploy/nginx/middleeastdefense.conf \
  /etc/nginx/sites-available/middleeastdefense
sudo nginx -t
sudo systemctl reload nginx
```

If the existing site file has a different name, use that path for the backup
and replacement. Keep a way to restore the backup if `nginx -t` fails; reload
Nginx only after the test succeeds.

## Verify

The websocket endpoint must complete an HTTP `101 Switching Protocols`
handshake rather than return the website HTML. Verify the master and worker
health first, then test `/w0/chat` with a WebSocket client and inspect the
Nginx error log if the upgrade still fails.

This config only handles requests to the game site. The account API is a
separate service at `api.middleeastdefense.ir`; its certificate and upstream
must be fixed/configured independently.
