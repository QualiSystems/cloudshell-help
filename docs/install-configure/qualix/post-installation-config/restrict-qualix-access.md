---
sidebar_position: 7
---

# Restrict QualiX Access to Specific CloudShell Portals

Perform these steps to specify the CloudShell Portal machines that can access QualiX. This applies to CloudShell deployments where some of the portal machines reside in a different network and for security reasons, we don’t want them to access QualiX.

**To specify the CloudShell Portal hosts that can use QualiX:**

1. SSH to Qualix server.
2. Run the following command:
    
    `edit /opt/qualix/.guacamole/guacamole.properties`
    
3. Remove the following line:
    
    ```javascript
    qualix-allow-auth-from: 0.0.0.0
    ```
    
4. To specify the IPs of the CloudShell Portal machines that can access QualiX, add the following line to the file:
    
    ```javascript
    qualix-allow-auth-from: <CloudShell-Portal-ip1>,<CloudShell-Portal-ip2>
    ```
    
5. Save and close file.
6. Restart the **Qualix\-tomcat** service:
    
    ```javascript
    systemctl restart qualix-tomcat.service
    ```