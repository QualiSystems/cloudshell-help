---
sidebar_position: 6
---

# Change Log Levels for New Job Scheduling Services

It is possible to change the log level for each New Job Scheduling component. The default log levels are detailed in [New Job Scheduling Service Logs](../../../../jss/new-jss-logs.md).

**To change the New Job Scheduling Log Levels:**

1. Open the `customer.values.yaml` file.
2. Modify the log levels, as appropriate.
    
    - For the Job Scheduling Service :
        
        ```javascript
        LogSettings__ConsoleLogLevel: Debug
        ```
        
    - For the Sandbox Service:
        
        ```javascript
        SBS__HYDRA__JOB_LOGGING__ROOT__LEVEL: DEBUG
        ```
        
    - For the Test Discovery Service:
        
        ```javascript
        DS_LOGLEVEL: Debug
        ```
        
    - For the Test Execution Service:
        
        ```javascript
        TES_LOGLEVEL: Debug
        ```
        
3. Save the file.
4. Redeploy the CloudShell helm chart.