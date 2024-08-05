---
sidebar_position: 3
---

# Deploy QualiX 5.0 and up Using Docker

This article explains how to deploy/upgrade QualiX version 5.0 and up.

Note that there are two versions of the deployment script:

- `deploy-qualix-docker-5.0.1.506.sh` installs both the required containers and QualiX on a clean machine.

- `guacamole-quali-install-docker-5.0.1.506.sh` install Qualix startup scripts and requires Docker to be installed on the machine as a prerequisite

## Deployment and Upgrade

There are three ways to deploy Qualix 5.0 (and up):

- [Deploy on a clean VM](#deploy-on-a-clean-vm)
- [Upgrade QualiX on an existing OVA VM](#upgrade-qualix-on-an-existing-ovavm)
- [Upgrade QualiX on an existing Docker machine](#upgrade-qualix-on-an-existing-docker-machine)

### Prerequisites

- OS: Ubuntu (20.04, 22.04), Centos or RHEL (need subscription)

### Deploy on a clean VM

**To deploy QualiX on a clean VM:**

1. Download the latest version of the `deploy-qualix-docker.sh` deployment file from [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/360037650694).
2. Install QualiX.
    
    ```javascript
    wget h <qualix deployment script path>
     chmod +x <qualix deployment script>
     <qualix deployment script>
    ```
    
    Where **\<qualix deployment script path\>** is the full path to the script, and **\<qualix deployment script\>** is the script's filename and extension.
    
    For example:
    
    ```javascript
    wget https://quali-prod-binaries.s3.amazonaws.com/deploy-qualix-docker-5.0.1.506.sh
    chmod +x deploy-qualix-docker-5.0.1.506.sh
    deploy-qualix-docker-5.0.1.506.sh
    ```
    
3. Set [QualiX Configuration for Version 5.0 and up](../post-installation-config/qualix-config-for-5-and-up.md).
    
4. Start QualiX.
    
    ```javascript
    qualix_start
    ```
    
5. [Run QualiX](#run-qualix).

### Upgrade QualiX on an existing OVA VM

1. Stop and disable the **qualix\-tomcat**, **qualix\-guacd**, **qualix\-wmks-proxy**, and **nginx** services.
    
    ```javascript
    systemctl stop qualix-tomcat; systemctl disable qualix-tomcat
    ```
    
    ```javascript
    systemctl stop qualix-guacd; systemctl disable qualix-guacd
    ```
    
    ```javascript
    systemctl stop qualix-wmks-proxy; systemctl disable qualix-wmks-proxy
    ```
    
    ```javascript
    systemctl stopnginx; systemctl disable nginx
    ```
    
2. Install QualiX.
    
    ```javascript
    wget h <qualix deployment script path>
     chmod +x <qualix deployment script>
     <qualix deployment script>
    ```
    
    Where **\<qualix deployment script path\>** is the full path to the script, and **\<qualix deployment script\>** is the script's filename and extension.
    
    For example:
    
    ```javascript
    wget https://quali-prod-binaries.s3.amazonaws.com/deploy-qualix-docker-5.0.1.506.sh
    chmod +x deploy-qualix-docker-5.0.1.506.sh
    deploy-qualix-docker-5.0.1.506.sh
    ```
    
3. [Run QualiX](#run-qualix).

### Upgrade QualiX on an existing Docker machine

1. Stop QualiX.
    
    ```javascript
    qualix_stop
    ```   
2. Back up and uninstall the existing QualiX installation.
    
    ```javascript
    mv /opt/qualix /opt/qualix_bcp
    ```  
3. Install QualiX.
    
    ```javascript
    wget h <guacamole-quali-install script path>
     chmod +x <guacamole-quali-install script>
     <guacamole-quali-install script>
    ```
    
    Where **\<guacamole-quali-install script path\>** is the full path to the script, and **\<guacamole-quali-install script\>** is the script's filename and extension.
    
    For example:
    
    ```javascript
    wget https://quali-prod-binaries.s3.amazonaws.com/guacamole-quali-install-docker-5.0.1.506.sh
    chmod +x guacamole-quali-install-docker-5.0.1.506.sh
    guacamole-quali-install-docker-5.0.1.506.sh
    ```
    
4. Start Qualix.
    
    ```javascript
    qualix_start
    ```
    
5. [Run QualiX](#run-qualix).

## Run QualiX

Once QualiX deployment/upgrade completes, enable the appropriate services.

**Available services**

- **\-g** enables guacamole, which allows users to use RDP/SSH/VNC/TELNET protocols for remote connections.
- **\-w** enables wmks-proxy which allows users to connect to VMs using Vcenter Console.
- **\-n** enables nginx services for enhanced security. Enabled automatically when running wmks-proxy. Aggregates the above services to a single entry point, handles security headers and SSL Options for connections, provides additional security and logging capabilities.
- **\-v** prints version information and quits.
    

**Available combinations**

1. **Guacamole Service + Nginx Service** - Enable Guacamole Service. Allows users to handle security capabilities with Nginx Proxy. This is the default combination.
2. **Guacamole Service + WMKS-Proxy Service + Nginx Proxy** - Enable Guacamole and WMKS-Proxy services with a single entry point. Handle security capabilities with Nginx Proxy.
3. **WMKS-Proxy Service + Nginx Proxy** - Enable WMKS-Proxy service only, WMKS-Proxy can only work with enabled Nginx.
4. **Guacamole Service** - Enable Guacamole service only. Nginx Proxy service is not used. This option could be useful when use the service in a cluster. For example, AWS or Azure.

:::note Notes
- Options 1 - 3 from the above list use Nginx Proxy service, which requires SSL options to be configured. For details, see [Nginx proxy service options](../post-installation-config/qualix-config-for-5-and-up.md#nginx-proxy-service-options).
- Option 4 uses the Guacamole service only. To configure SSL options for Guacamole, see [JKS Keystore options, SSL settings for Guacamole Tomcat](../post-installation-config/qualix-config-for-5-and-up.md#jks-keystore-options-ssl-settings-for-guacamole-tomcat).
:::
Example

```javascript
qualix_start -g -n -w
```

## Additional Options

- Check the status of the QualiX containers:
    
    ```javascript
    qualix_status
    ```
    

## Docker logs

See [Docker logs (QualiX 5.0 and above)](../../../troubleshooting/troubleshooting-overview/collecting-logs.md#docker-logs-qualix-50-and-above).