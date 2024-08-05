---
sidebar_position: 2
---

# Deploy QualiX 4.1 using Docker

This process deploys two docker containers, **quali\_hub/qualix\_guacamole** and **quali\_hub/qualix\_guacd**, and the network they will use to communicate with each other.

**Docker for Windows** is not supported.
:::note
Make sure to have docker together with iptables when running containers on a linux vm
:::
**To deploy QualiX using Docker:**

1. Install Docker Engine, as explained in this [docker docs article](https://docs.docker.com/install/).
2. Install Docker Compose, as explained in this [docker docs article](https://docs.docker.com/compose/install/).
3. Run the following from the `/opt/` directory:
    
    ```bash
    sudo wget https://quali-prod-binaries.s3.amazonaws.com/guacamole-quali-install-docker.sh
    sudo chmod +x guacamole-quali-install-docker.sh
    sudo ./guacamole-quali-install-docker.sh
    ```
    
4. Start the QualiX container stack by running the following from the `/opt/qualix` directory:
    
    ```bash
    sudo ./start.sh
    ```
    
5. To verify that QualiX is up and running, run the following:
    
    ```bash
    sudo status
    ```
    
6. After deploying QualiX on docker, continue with [Post Installation Configuration](../post-installation-config/index.md).

## Additional Options

**To stop QualiX (stops the container stack):**

```bash
sudo stop
```

**To restart QualiX after boot (inactive docker):**

```bash
sudo systemctl enable docker
```

**To get the docker logs:**

See [Docker logs (QualiX 4.1 and below)](../../../troubleshooting/troubleshooting-overview/collecting-logs.md#docker-logs-qualix-41-and-below).

**To attach the docker container to a shell:**

```bash
sudo docker exec -it <container_id>/bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"
```

**To destroy running containers:**

```bash
sudo docker stop guacamole guacd
```

```bash
sudo docker rm guacamole guacd
```

**To start the containers:**

```bash
cd /opt/qualix

sudo ./start.sh
```
