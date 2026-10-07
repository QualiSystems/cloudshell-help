---
sidebar_position: 4
---

# Deploy QualiX Using Docker Compose

From QualiX 5.1.1.538 you can deploy QualiX with standard Docker Compose: you download a small set of files, keep your settings in one `.env` file, and run `docker compose`. No installation script is needed, and upgrades never touch your settings, certificates, or keys.

Each release on the [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/360037650694) provides:

- `qualix-compose-<version>.tar.gz`: `docker-compose.yml`, `nginx.conf`, `.env.example`, and a README.
- `qualix-images-<version>.tar.gz` (optional): all the images, for hosts without internet access.

The images are also on Docker Hub as `qualihub/qualix_guacamole`, `qualihub/qualix_guacd`, and `qualihub/qualix_wmks_proxy`, tagged by version.

## Prerequisites

- A Linux host with Docker Engine and the Docker Compose plugin. To check, run `docker compose version`.
- Ports 80 and 443 free on the host. To use other ports, set `QUALIX_HTTP_PORT` and `QUALIX_HTTPS_PORT` in `.env`.

## Install QualiX

1. Download `qualix-compose-<version>.tar.gz` from the [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/360037650694) and extract it:

    ```bash
    mkdir -p /opt/qualix-compose && cd /opt/qualix-compose
    tar xzf qualix-compose-<version>.tar.gz --strip-components=1
    ```

2. Create your settings file, and edit it as needed. Every setting is described in the file.

    ```bash
    cp .env.example .env
    ```

3. To use your own certificate, save it as `certs/qualix.crt` and its key as `certs/qualix.key`. If you skip this step, QualiX creates a self-signed certificate. You can replace it later and run `docker compose restart nginx`.

4. Start QualiX:

    ```bash
    docker compose up -d
    ```

QualiX is available at `https://<host>/remote`.

On first start, QualiX creates whatever is missing in `certs/`: the self-signed certificate and the QualiX key pair (`certs/key_pair/`). It never overwrites existing files.

### VMware console (WMKS) connections

To also run the WMKS proxy, add this line to `.env`, then run `docker compose up -d`:

```bash
COMPOSE_PROFILES=wmks
```

## Upgrade QualiX

1. Download `qualix-compose-<version>.tar.gz` for the new version.
2. Replace `docker-compose.yml` and `nginx.conf` with the new copies. Keep `.env` and `certs/`.

    ```bash
    cd /opt/qualix-compose
    tar xzf qualix-compose-<version>.tar.gz --strip-components=1 \
      qualix-compose-<version>/docker-compose.yml qualix-compose-<version>/nginx.conf
    ```

3. Pull the new images and restart:

    ```bash
    docker compose pull && docker compose up -d
    ```

:::tip
To move to a specific version without replacing files, set `QUALIX_VERSION=<version>` in `.env`, then run `docker compose pull && docker compose up -d`.
:::

## Install on a host without internet access

Copy both files to the host, load the images, then install as above:

```bash
docker load -i qualix-images-<version>.tar.gz
```

To upgrade, load the new release's image file and replace `docker-compose.yml` and `nginx.conf`, then run `docker compose up -d`.

## Move an existing Docker deployment to Docker Compose

If QualiX is installed in `/opt/qualix` with the installation script, move it over with the same key pair, certificate, and settings, so CloudShell and your users see no change:

```bash
qualix_stop
mkdir -p /opt/qualix-compose/certs && cd /opt/qualix-compose
tar xzf qualix-compose-<version>.tar.gz --strip-components=1
cp -a /opt/qualix/.certs/key_pair certs/
cp /opt/qualix/.certs/qualix_nginx.crt certs/qualix.crt
cp /opt/qualix/.certs/qualix_nginx.key certs/qualix.key
cp /opt/qualix/.qualix.env .env
docker compose up -d
```

- If you set `NGINX_SSL_CERT_EXT` and `NGINX_SSL_KEY_EXT` in `.qualix.env`, copy those files instead.
- If you started QualiX with the WMKS proxy (`-w`), add `COMPOSE_PROFILES=wmks` to `.env`.

When QualiX works, you can delete `/opt/qualix` and the `qualix_start`, `qualix_stop`, and `qualix_status` links in `/usr/local/bin`.

## Configuration

All the options in [QualiX Configuration for Version 5.0 and up](../post-installation-config/qualix-config-for-5-and-up.md) go in `.env`. Apply a change with `docker compose up -d`.

The options that point to files on the host (`NGINX_SSL_CERT_EXT`, `NGINX_SSL_KEY_EXT`, `JKS_KEYSTORE_FILE_EXT`) are not used here. Put your certificate in `certs/` instead.

## Everyday commands

Run these from the QualiX folder (for example, `/opt/qualix-compose`):

| Task | Command |
|---|---|
| Status | `docker compose ps` |
| Logs | `docker compose logs -f guacamole` (also `guacd`, `nginx`, `wmks-proxy`) |
| Stop | `docker compose down` |
| Start, or apply `.env` changes | `docker compose up -d` |
