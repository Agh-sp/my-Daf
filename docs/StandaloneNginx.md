# Standalone Nginx deployment

Use this configuration when the Node master and workers run directly on the
host, with the master listening on port `3000` and workers on ports `3001+`.
It is not for a Docker deployment whose container already runs Nginx.

The current `middleeastdefense.ir` bootstrap advertises two workers. The
included [Nginx site configuration](../deploy/nginx/middleeastdefense.conf)
therefore routes worker `0` to port `3001` and worker `1` to port `3002`.
Keep those entries in sync with the server's `NUM_WORKERS`.

## Install

After pulling the project on the server, run the installer from the repository
root:

```sh
sudo bash deploy/nginx/install-middleeastdefense.sh
```

The installer refuses to continue unless the TLS certificate exists and ports
3000, 3001, and 3002 are listening. It installs the config under
`/etc/nginx/conf.d/000-middleeastdefense.conf`, validates it with `nginx -t`,
then reloads Nginx. If validation fails, it restores the previous project
config. It also refuses to proceed if another file in `conf.d` declares this
domain. On Ubuntu, `conf.d` is loaded before `sites-enabled`; if `nginx -t`
still warns about duplicate names, inspect and disable the old matching site
blocks so the configuration is unambiguous:

```sh
sudo nginx -T 2>&1 | grep -n -E 'server_name .*middleeastdefense\.ir'
```

## Verify

The websocket endpoint must complete an HTTP `101 Switching Protocols`
handshake rather than return the website HTML. Verify the master and worker
health first, then test `/w0/chat` with a WebSocket client and inspect the
Nginx error log if the upgrade still fails.

If `/api/health` is unavailable or the installer reports a missing listener,
start/fix the game master and workers first; changing Nginx cannot start the
application processes.

This config only handles requests to the game site. The account API is a
separate service at `api.middleeastdefense.ir`; its certificate and upstream
must be fixed/configured independently.
