---
sidebar_position: 9
---

# Cannot Connect via SSH to Ubuntu 22.04 Machines With Private Key

## Description

Connecting to an Ubuntu 22.04 VM with a private key using the SSH direct access link may fail.

## Solution

**To resolve this issue:**

1. Login to Ubuntu 22.04 machine.
    
2. Edit /etc/ssh/sshd\_config.
    
3. Add the following line to the end of the config file:
    
    ```javascript
    PubkeyAcceptedKeyTypes +ssh-rsa
    ```
    
4. Restart ssh server:
    
    ```javascript
    systemctl restart ssh
    ```
    

Or run this command:

```javascript
sudo echo -e "PubkeyAcceptedKeyTypes +ssh-rsa\nHostKeyAlgorithms +ssh-rsa" >> /etc/ssh/sshd_config&&systemctl restart ssh
```

**To deploy an Ubuntu-22.04 AWS EC2 App:**

1. Create the script with the below content and place it in an S3 bucket or make it accessible from the deployed App's VM.
    
    ```javascript
    #!/bin/bash
    ```
    
    ```javascript
    sudo echo -e "PubkeyAcceptedKeyTypes +ssh-rsa\nHostKeyAlgorithms +ssh-rsa" >> /etc/ssh/sshd_config&&systemctl restart ssh
    ```
    
2. In the App's **Deployment Paths** page, specify a link to the script in the **USER DATA URL** attribute.
