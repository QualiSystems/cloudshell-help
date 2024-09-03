---
sidebar_position: 4
---

# Create Execution Server On Any Linux VM Using Docker

**Prerequisites:**

- Docker installed on any Docker supported Linux VM: https://docs.docker.com/engine/install/
- Quali Server 2024.1 or later

:::important
In the docker run command, we use "--name ExecutionServer" for the container name in order to provide additional commands for gathering logs and other optional steps. 
:::

## Online Steps to Install Execution Server Using Docker

1. Install Docker on your Linux Server machine
2. Enable Docker Ipv6 support:
    1. **Create** a file /etc/docker/daemon.json:
        ```javascript
        sudo touch /etc/docker/daemon.json
        ```
    2. **Edit** the file:
        ```javascript
        sudo nano /etc/docker/daemon.json
        ```
    3. **Add** to it (you can use any valid IPv6 CIDR):
        ```javascript
        {
        "ipv6": true,
        "fixed-cidr-v6": "2001:db8:1::/64"
        }
        ```
    4. **Save** it
3. Restart the Docker Service: 
```javascript
sudo systemctl restart docker
```
4. Create an empty file named customer.config:
```javascript
touch ~/customer.config
```
5. Run the latest version of Execution Server using Docker Hub: 
```javascript
sudo docker run -d --name ExecutionServer --restart unless-stopped -p 5093:5093 -e PARAMS="IP Address,Username,Password,Name for ExectionServer" -v ~/customer.config:/opt/ExecutionServer/customer.config qualihub/executionserver
```
    :::warning
    Inside PARAMS="" you need to specify your Cloudshell server IP, Cloudshell Admin username, password, desirable name for the Execution Server. Example: -e PARAMS="192.168.25.4,admin,admin,ES-Docker"
    :::
:::info
- If you want to specify the version, you can edit the end of the command to include the version number. Example: qualihub/executionserver:2024.1 
- See what versions are available here: https://hub.docker.com/r/qualihub/executionserver/tags
:::

6. Verify the new Execution Server is Online in CloudShell Portal > Manage > Execution Servers > Servers
7. **(Optional)** After the first run, if you don't want your admin password to be available as an Env
variable inside the container, you can:
    1. Verify that your customer.config file is filled with data from the first run.
    ```javascript
    sudo cat customer.config
    ```
    2. Stop the existing container
    ```javascript
    sudo docker stop ExecutionServer
    ```
    3. Delete the existing container
    ```javascript
    sudo docker rm ExecutionServer
    ```
    4. Run a new container with the command: 
    ```javascript
    sudo docker run -d --name ExecutionServer --restart unless-stopped -p 5093:5093 -v ~/customer.config:/opt/ExecutionServer/customer.config qualihub/executionserver
    ```
    5. In this case, all necessary information will be provided by the customer.config file. Be
aware that this should be the same file that you used for the first run!

## Offline Steps to Install Execution Server Using Docker

1. Install Docker on your Linux Server machine
2. Enable Docker Ipv6 support:
    1. **Create** a file /etc/docker/daemon.json:
        ```javascript
        sudo touch /etc/docker/daemon.json
        ```
    2. **Edit** the file:
        ```javascript
        sudo nano /etc/docker/daemon.json
        ```
    3. **Add** to it (you can use any valid ipv6 cidr):
        ```javascript
        {
        "ipv6": true,
        "fixed-cidr-v6": "2001:db8:1::/64"
        }
        ```
    4. **Save** it
3. Restart the Docker Service: 
```javascript
sudo systemctl restart docker
```
4. Download **Execution Server on Docker** for your CloudShell Version from our [Download Center](https://support.quali.com/hc/en-us/articles/231613247-CloudShell-Download-Center)
5. Transfer the .tar file to your Linux Server machine
6. Load ES Docker Image: 
```javascript
sudo docker load < es-2024-1.tar
```
7. Create an empty file named customer.config:
```javascript
touch ~/customer.config
```
8. Run a Docker Container from the image with the command: 
```javascript
sudo docker run -d --name ExecutionServer --restart unless-stopped -p 5093:5093 -e PARAMS="IP Address,Username,Password,Name for ExectionServer" -v ~/customer.config:/opt/ExecutionServer/customer.config quali/es-server:2024.1
```
    :::warning
    Inside PARAMS="" you need to specify your Cloudshell server IP, Cloudshell Admin username, password, desirable name for the Execution Server. Example: -e PARAMS="192.168.25.4,admin,admin,ES-Docker"
    :::

9. Verify the new Execution Server is Online in CloudShell Portal > Manage > Execution Servers > Servers
10. **(Optional)** After the first run, if you don't want your admin password to be available as an Env
variable inside the container, you can:
    1. Verify that your customer.config file is filled with data from the first run.
    ```javascript
    sudo cat customer.config
    ```
    2. Stop the existing container
    ```javascript
    sudo docker stop ExecutionServer
    ```
    3. Delete the existing container
    ```javascript
    sudo docker rm ExecutionServer
    ```
    4. Run a new container with the command: 
    ```javascript
    sudo docker run -d --name ExecutionServer --restart unless-stopped -p 5093:5093 -v ~/customer.config:/opt/ExecutionServer/customer.config qualihub/executionserver
    ```
    5. In this case, all necessary information will be provided by the customer.config file. Be
aware that this should be the same file that you used for the first run!

## Steps to Collect and Share Logs on Linux Using Docker

:::note
- Since log files are located in the docker container, the commands below will copy the logs out of the container then create an archive file for each log directory
- Only step 1 and 2 are usually needed but if requested by support or R&D, please include the venv logs from step 3
:::

1. Create an archive file from `/opt/ExecutionServer/Logs/` with the command below:
```javascript
current_date=$(date +%Y-%m-%d) && mkdir ~/${current_date}-Logs && sudo docker exec ExecutionServer find /opt/ExecutionServer/Logs/ -mindepth 1 -maxdepth 1 -type d -name "*" -mtime -7 -print0 | sudo xargs -0 -I {} docker cp ExecutionServer:{} ~/${current_date}-Logs && tar -czvf ${current_date}-Logs.tar.gz ${current_date}-Logs && sudo rm -rf ~/${current_date}-Logs
```

2. Create an archive file from `/var/log/qualisystems/` with the command below:
```javascript
current_date=$(date +%Y-%m-%d) && mkdir ~/${current_date}-qualisystems && sudo docker exec ExecutionServer find /var/log/qualisystems/ -mindepth 1 -maxdepth 1 -type d -name "*" -mtime -7 -print0 | sudo xargs -0 -I {} docker cp ExecutionServer:{} ~/${current_date}-qualisystems && tar -czvf ${current_date}-qualisystems.tar.gz ${current_date}-qualisystems && sudo rm -rf ~/${current_date}-qualisystems
```

3. **(Optional, only needed if specifically requested for Shell issues)** Create an archive file from `/usr/share/QualiSystems/venv/` with the command below:
```javascript
current_date=$(date +%Y-%m-%d) && mkdir ~/${current_date}-venv && sudo docker exec ExecutionServer find /usr/share/QualiSystems/venv/ -mindepth 1 -maxdepth 1 -type d -mtime -7 -print0 | sudo xargs -0 -I {} docker cp ExecutionServer:{} ~/${current_date}-venv && tar -czvf ${current_date}-venv.tar.gz ${current_date}-venv && sudo rm -rf ~/${current_date}-venv
```

4. Transfer your newly created archived files named *-Logs, *-qualisystems, and *-venv from your home directory and share them to whom it may concern
:::note
If you're using a Windows machine to extract logs from the Linux execution server, we recommend using an SCP client to connect via SSH to the Linux execution server to browse though the logs. You can also transfer the files to a Windows machine in order to send them, if needed.
:::
