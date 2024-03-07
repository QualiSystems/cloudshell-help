---
sidebar_position: 2
---

# Update the RabbitMQ Credentials in Kubernetes Environment

This article explains how to change the RabbitMQ user's credentials and register the new credentials with CloudShell's Kubernetes services. *If you are not using the New Job Schedulings, perform the steps in [Update the RabbitMQ Credentials on Quali Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/update-default-rabbitmq-credentials.htm) instead*.

CloudShell configures a default user on RabbitMQ with user/password: quali/qualipassword. However, for security purposes, we strongly recommend changing the default user's password.

**To update the default RabbitMQ user's password:**

1. Change the user's password in RabbitMQ. For details, see this official RabbitMQ help article: [https://www.rabbitmq.com/access-control.html](https://www.rabbitmq.com/access-control.html).
2. Open the `customer.values.yaml` file.
3. Set the new credentials in the **rabbitmq** section:
    
    ```css
    rabbitmq:
      enabled: true
      auth:
        username: quali
        password: <new-password>
    ```
    
4. Specify the updated credentials in the following sections of the file:
    
    **Job Scheduling Service:**
    
    ```css
    job-scheduling-service:
      jobSchedulingService:
        env:
          ConsumptionServiceSettings__Host__UserName: quali
          ConsumptionServiceSettings__Host__Password: <new-password>
    ```
    
    **Sandbox Service:**
    
    ```css
    sandbox-service:
      sandboxService:
        env:
          SBS__RABBIT__GENERAL__DEFAULT_USERNAME: quali
          SBS__RABBIT__GENERAL__DEFAULT_PASSWORD: <new-password>
    ```
    
5. Save the file and redeploy the Helm chart.
6. Set the RabbitMQ user's new password on the Quali Server.
    1. On the Quali Server machine, open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
    2. Add the following key:
        
        `<add key="RabbitPassword" value="<new-password>"/>`
        
    3. Save the file and restart the **Quali Server** service.