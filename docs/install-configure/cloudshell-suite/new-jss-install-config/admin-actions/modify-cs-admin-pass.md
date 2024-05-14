---
sidebar_position: 1
---

# Modify the CloudShell Admin Password

*For details about changing the Quali Server service's running user, see* [Changing the Running User on the Quali Server Service](../../configure-products/change-service-user.md).

If you need to change the CloudShell system administrator password, you must register the new password with the New Job Scheduling. If you don’t do this, you will not be able to access the Job Scheduling Portal and REST API with this user.
:::note
This procedure only applies to deployments that use the New Job Scheduling. In CloudShell deployments without the New Job Scheduling, the password update is automatic.
:::
:::tip
This procedure assumes you are storing your passwords in plain text. However, you can use a Kubernetes secret instead, to safeguard your passwords as well as other sensitive data on the Kubernetes cluster. For details, see [Customize the Deployment Configuration Parameters](../high-level-install-flow/customize-deployment/customize-deployment-config-params.md).
:::
**To register the new admin password with the New Job Scheduling:**

1. Run the Quali Server configuration wizard and set the new password. For details, see [Admin Configuration Settings](../../configure-products/admin-config-settings.md).
2. Open the `~\Server\SndboxService\Customer.yaml` file, and set the password:
    
    ```css
    quali_server:
        host: 'localhost'
        port: 8029
        password: <new-admin-password>
    ```
    
3. Include the following parameters in the `customer.values.yaml` file with the new password:
    
    ```css
    identity-service:
      identityService:
        env:
          AppSettings__CloudShell__Password: <new-admin-password>
    job-scheduling-service:
      jobSchedulingService:
        env:
          CloudShell__Password: <new-admin-password>
    sandbox-service:
      sandboxService:
        env:
          SBS__QUALI_SERVER__PASSWORD: <new-admin-password>
    ```
    
4. Save the file.
5. Redeploy the CloudShell helm chart.