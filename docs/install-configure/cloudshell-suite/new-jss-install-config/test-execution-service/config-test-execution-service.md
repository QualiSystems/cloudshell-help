---
sidebar_position: 1
---

# Configure the Test Execution Service

Test Execution Service configuration is done using Environment Variables.

### Syntax

- Variables must be accessible to the Test Execution Service.
- Variable names must start with "TES\_" followed by the variable name.
- Variable names must be in upper case letters.

### Example

`TES_SERVER_DESCRIPTION`

## Parameters

**General parameters:**

- `TES_SERVER_NAME`: (String) The Test Execution Service's display name. For example: Quali Test Execution Service.
- `TES_SERVER_DESCRIPTION`: (String) The Test Execution Service description. For example: Quali Test Execution Service for running Robot tests.
- `TES_CAPACITY`: (Integer) The maximum number of tests that can run concurrently on this Test Execution Service.

**Binding host parameters:**

The next two parameters are used to indicate the binding address for the API web server:

- `TES_SERVER_BINDING_HOST`: (String) IP address to which the Test Execution Service is listening. This host must be accessible to the Job Scheduling Service.
- `TES_SERVER_BINDING_PORT`: (Integer) Port for the binding host. For example, 8250.

**Registration parameters:**

The following three parameters are used to build the URL that will be registered with the New Job Scheduling, and will be used by the scheduling service to start test executions:

- `TES_API_SCHEMA`: (String) Usually **http** or **https**.
- `TES_API_HOST`: (String) For example: localhost.
- `TES_API_PORT`: (Integer) For example, 8250.

The following three parameters are used to build the URL that will be used to access the New Job Scheduling's API methods (for example, to register the service and report test results):

- `TES_SCHEDULING_SERVICE_API_SCHEMA`: (String) Usually **http** or **https**.
    
- `TES_SCHEDULING_SERVICE_API_HOST`: (String) IP address or DNS name of the machine on which the Job Scheduling Service is installed.
    
- `TES_SCHEDULING_SERVICE_API_PORT`: (Integer) For example, 5001.
    

**Test reporting parameters:**

- `TES_RESULT_RETRY_MAX_RETRIES`: (Integer) Number of attempts to set the test result in the Job Scheduling Service. For example, 5.
    :::note
    This value is used only if no sandbox is linked with the test execution.
    :::

**Miscellaneous parameters:**

- `TES_KEEP_ALIVE_INTERVAL`: (Float) Number of seconds to wait between calling Job Scheduling API keep alive. For example, 10.
- `TES_PROCESS_QUEUE_POOL_INTERVAL`: (Float) Number of seconds that the worker process that run tests will wait between tasks pooling. For example, a value of "0.2" indicates that the interval time will increase by a factor of 2 with each passing interval.
- `TES_WORKER_PROCESS_JOIN_TIMEOUT`: (Float) In seconds. For example, 15.