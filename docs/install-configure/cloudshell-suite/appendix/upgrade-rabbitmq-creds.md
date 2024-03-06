---
sidebar_position: 6
---

# Update the RabbitMQ Credentials on Quali Server

This article explains how to change the RabbitMQ user's credentials and register the new credentials with Quali Server. *If you are using the New Job Scheduling, perform the steps in [Update the RabbitMQ Credentials in Kubernetes Environment](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-update-default-rabbitmq-credentials.htm) instead.*

CloudShell configures a default user on RabbitMQ with user/password: quali/qualipassword. However, for security purposes, we strongly recommend changing this default user or at least its password.

**To update the default RabbitMQ user's password:**

1. Change the user's password in RabbitMQ. For details, see this official RabbitMQ help article: [https://www.rabbitmq.com/access-control.html](https://www.rabbitmq.com/access-control.html).
2. Set the new password in the Quali Server configuration wizard's [Administrative tasks](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/admn-cnfgr-stgs.htm#Administ) screen or in the `Customer.yaml` file:
    1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\SandboxService\Customer.yaml` file.
    2. Set the new password in the **rabbit** section:
        
        ```css
        rabbit:
          general:
            default_password: <new-password>
        ```
        
    3. Save the file.
3. Set the new password in the **Rabbit Service**:
    1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\SandboxService\RabbitMQ\rabbitmq_server\etc\RabbitMQ\RabbitMQ.conf` file.
    2. Set the new password:
        
        ```css
        default_pass = <new-password>
        ```
        
4. Set the new password on the Quali Server.
    1. On the Quali Server machine, open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
    2. Add the following key:
        
        `<add key="RabbitPassword" value="<new-password>"/>`
        
    3. Save the file and restart the **Quali Server** service.