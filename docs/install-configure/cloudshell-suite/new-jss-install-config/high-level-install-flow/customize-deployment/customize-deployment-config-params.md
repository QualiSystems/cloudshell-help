---
sidebar_position: 1
---

# Customize the Deployment Configuration Parameters

**To customize the deployment parameters:**

1. Download the official CloudShell Helm chart package that corresponds to your CloudShell version from [Quali’s Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center).
2. Download this example parameter file: [sample.customer.values.yaml.zip](https://help.quali.com/help%20versions/attachments/sample.customer.values.yaml.zip) and extract it to the folder containing the `CloudShell.tgz` package.
    :::note
    This parameter file configures the New Job Scheduling infrastructure deployment with the necessary values to connect to your CloudShell environment.
    :::
3. Customize the following mandatory parameters inside the `customer.values.yaml` (parameter descriptions in the [Configuration parameters](./customize-deployment-config-params.md) section that follows):
    
    ```css
    cloudshell-core:
      identity-service:
        identityService:
          env:
            AppSettings__CloudShell__Host
            AppSettings__CloudShell__Password
      
      job-scheduling-service:
        jobSchedulingService:
          env:
            QualiPortal__Host
            QualiPortal__Port
            QualiPortal__Scheme
            CloudShell__Host
            CloudShell__Scheme
            CloudShell__Password
      
      sandbox-service:
        sandboxService:
          env:
            SBS__QUALI_SERVER__HOST
            SBS__QUALI_SERVER__PASSWORD
      
    robot-test-execution-service:
        env:
          TES_SERVER_DESCRIPTION
    ```
    
4. (Optional) You can use Kubernetes secret values for any of the above parameters instead of plaintext values.
    
    For example,
    
    Use the following configuration:
    
    ```css
    identity-service:
      identityService:
        secret_env:
          - name: AppSettings__CloudShell__Password
    	 secretname: <kubernetes_secret_name>
    	 secretkey: <kubernetes_secret_key>
    ```
    
    For the following Kubernetes secret:
    
    ```css
    apiVersion: v1
    kind: Secret
    metadata:
      name: cloudshell-password
    data:
      password: SXR6aWtra2s=
    ```
    
    For details about Kubernetes secrets, see the official Kubernetes [documentation](https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets).
    
5. Next,
    

## Configuration parameters

The following configuration parameters are available for you.

### job-scheduling-service section

| Parameter | Description | Default value |
|---|---|---|
| **MongoDB settings** | | |
| `MainDbSettings__ConnectionString` | Job Scheduling Service's MongoDB connection string.<br/>Format: `mongodb://<hostname>:<port>/?connectTimeoutMS=300000`<br/>Where `<hostname>` is the hostname or IP address and `<port>` is the MongoDB port (27018 by default) |  |
| `MainDbSettings__SuiteExecutionsDataRetentionInDays` | Time, in days, to keep suite execution history. Suite executions that occurred before the defined period will be removed from the database. | 30 |
| `TestExecutionReportDbSettings__ConnectionString` | Set a different DB to use for the test execution reports. By default, the reports are saved to the Job Scheduling Service DB. |  |
| `TestExecutionReportDbSettings__SuiteExecutionsDataRetentionInDays` | Time, in days, to keep test execution reports. Suite executions that occurred before the defined period will be excluded from the reports. | 30 |
| `SuiteExecutionSettings__ValidateJobDataBeforeRun` | Set to **true** to check that the job's tests and blueprint exist before execution. | false |
| **RabbitMQ service settings** | | |
| Configure this section if you want to use a different RabbitMQ service from the one that is installed with the Job Scheduling Service. | | |
| `ConsumptionServiceSettings__Host__Address` | Hostname or IP address of the RabbitMQ machine. For example: host.docker.internal |  |
| `ConsumptionServiceSettings__Host__UserName` | RabbitMQ user<br/>**Note:** This user must be the same as the running user on the Quali Server service. For details, see Changing the Running User on the Quali Server Service. |  |
| `ConsumptionServiceSettings__Host__Password` | RabbitMQ user's password |  |
| `ConsumptionServiceSettings__Host__Port` | RabbitMQ machine | 5671 |
| **Quali Server settings** |  |  |
| `CloudShell__Host` | Hostname or IP address. |  |
| `CloudShell__Port` | Port used by Job Scheduling Service to access Quali Server. |  |
| `CloudShell__Username` | CloudShell admin user |  |
| `CloudShell__Password` | CloudShell admin password |  |
| `CloudShell__Scheme` | Protocol for communication between Job Scheduling Service and Quali Server (**http/https**). | http |
| **Identity Server settings** |  |  |
| `IdentityServer__Host` | Hostname or IP address. |  |
| `IdentityServer__Port` | Port used by Job Scheduling Service to access Quali Server. |  |
| `IdentityServer__Scheme` | Protocol for communication with Quali Server (**http/https**). | http |
| **CloudShell Portal settings** |  |  |
| `QualiPortal__Host` | Hostname or IP address. |  |
| `QualiPortal__Port` | Port used by Job Scheduling Service to access CloudShell Portal. |  |
| `QualiPortal__Scheme` | Protocol for communication with Quali Server (**http/https**). | http |

### identity-service section

| Parameter | Description | Default value |
|---|---|---|
| **Identity Service settings** |  |  |
| `AppSettings__IdentityServer__Host` | Hostname or IP address. |  |
| `AppSettings__IdentityServer__Port` | Port used by Job Scheduling Service to access Identity Service. | 5000 |
| `AppSettings__IdentityServer__Scheme` | Protocol for communication between Job Scheduling Service and Identity Service (**http/https**). | http |
| `AppSettings__IdentityServer__ConnectionStrings` | Identity Service's MongoDB connection string.<br/>Format: `mongodb://<hostname>:<port>/`<br/>Where `<hostname>` is the hostname or IP address and `<port>` is the MongoDB port (27019 by default) |  |
| **Quali Server details** |  |  |
| `AppSettings__CloudShell__Username` | CloudShell admin user |  |
| `AppSettings__CloudShell__Password` | CloudShell admin password |  |
| `AppSettings__CloudShell__Space` | CloudShell domain to be used. | Global |
| `AppSettings__CloudShell__Host` | Hostname or IP address. |  |
| `AppSettings__CloudShell__Port` | Port used by Job Scheduling Service to access Quali Server. | 9000 |
| `AppSettings__CloudShell__Scheme` | Protocol for communication between Job Scheduling Service and Quali Server (**http/https**). | http |