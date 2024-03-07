---
sidebar_position: 1
---

# Configure the Test Discovery Service

Test Discovery Service configuration is done using Environment Variables.

### Syntax

- Variables must be accessible to the Test Discovery Service
- Variable names must start with "DS\_" followed by the variable name.
- Variable names must be in upper case letters.

### Example

`DS_SERVER_NAME`

## Parameters

**General parameters:**

Used for registration with the New Job Scheduling:

- `DS_SERVICE_ADDRESS`: (String) The IP address or DNS name of the machine on which the Test Discovery Service is installed.
- `DS_SERVICE_NAME`: (String) The Test Discovery Service's name. For example: Robot Discovery Service.
- `DS_SERVICE_DESCRIPTION`: (String) The Test Discovery Service's description. For example: Discovery Service for Robot tests.
- `DS_SERVICE_TEST_TYPE_NAME`: (String) Type of tests to be discovered by this Test Discovery Service. For example: robot.
- `DS_SERVICE_REPOSITORY_URL`: (String) Online test repository's URL.
- `DS_SERVICE_REPOSITORY_NAME`: (String)

**Branch/tag parameters:**

- `DS_SERVICE_REPOSITORY_REF`: (String) Indicates the name of the branch / tag that should be used for test discovery. For example, master.

**Python callable parameters:**

- `DS_VCS_ADAPTER_FACTORY`: (String) This parameter is used to import a Python callable that receives a config instance as an argument and returns an instance of type `testdiscoveryservice.VersionControlSystemAdapter`. The string should be in the following format: `module.submodule:attribute`.
- `DS_VCS_TEST_INPUT_PARSER_FACTORY`: (String) This parameter used to import a Python callable that receives a config instance as an argument and returns an instance of type `testdiscoveryservice.VersionControlTestInputsParser`. The string should be in the following format: `module.submodule:attribute`. For example: testdiscoveryservice.vcs.inputs\_parser:VersionControlTestInputsParser.
    

**Registration parameters:**

The following parameters are used to build the URL that will be used to access the New Job Scheduling's API methods (for example, to register the service and report test results):

- `DS_SCHEDULING_SERVICE_API_SCHEMA`: (String). Usually **http** or **https**.
- `DS_SCHEDULING_SERVICE_API_HOST`: (String) IP address or DNS name of the machine on which the Job Scheduling Service is installed.
- `DS_SCHEDULING_SERVICE_API_PORT`: (Integer) For example: 5001.
- `DS_SCHEDULING_SERVICE_API_CLIENT_TIMEOUT`: (Float) REST API client timeout. For example: 5.

**Test Repository Sampling parameters:**

For the following parameters, you can use these regular expressions to determine when to sample the online test repository for changes (similar to how the [UNIX cron scheduler](https://apscheduler.readthedocs.io/en/stable/modules/triggers/cron.html#module-apscheduler.triggers.cron) works):
:::note
"day" applies to the parameter `DS_DISCOVER_TESTS_CRON_DAY_PATTERN` only.
:::
| Regex | | Description |
|---|---|---|
| **\*** |  | Fire on every value |
| **\*/a** |  | Fire every a values, starting from the minimum |
| **a-b** |  | Fire on any value within the a-b range (a must be smaller than b) |
| **a-b/c** |  | Fire every c values within the a-b range |
| **xth y** | day | Fire on the x -th occurrence of weekday y within the month |
| **last x** | day | Fire on the last occurrence of weekday x within the month |
| **last** | day | Fire on the last day within the month |
| **x,y,z** |  | Fire on any matching expression; can combine any number of any of the above expressions |

- `DS_DISCOVER_TESTS_CRON_YEAR_PATTERN`: (String) For example: '\*'.
- `DS_DISCOVER_TESTS_CRON_MONTH_PATTERN`: (String) For example: '\*'.
- `DS_DISCOVER_TESTS_CRON_DAY_PATTERN` ``: (String) For example: '\*'.
- `DS_DISCOVER_TESTS_CRON_WEEK_PATTERN`: (String) For example: '\*'.
- `DS_DISCOVER_TESTS_CRON_DAY_OF_WEEK_PATTERN`: (String) For example: '\*'.
- `DS_DISCOVER_TESTS_CRON_HOUR_PATTERN`: (String) For example: '\*'.
- `DS_DISCOVER_TESTS_CRON_MINUTE_PATTERN`: (String) For example: '\*'.
- `DS_DISCOVER_TESTS_CRON_SECOND_PATTERN`: (String) For example: '\*/15'.
    

**Test Identification parameters:**

- `DS_TEST_FILE_PATTERN`: A regex pattern to be evaluated against the full path of the file to test which files in the repository are considered to be tests. For example: '\\\\.robot$'.
- `DS_CLOUDSHELL_DOMAIN_FILE_PATTERN`: A regex pattern to be evaluated against the full path of the file to test which files in the repository are files that contain a CloudShell domain definition. For example: '\\\\.cs\_domains$'.

**Miscellaneous parameters:**

- `DS_REGISTRATION_RETRY INTERVAL`: (Float) Number of seconds between unsuccessful attempts to register the Test Discovery Service with the job scheduling API. For example: 1.
    
- `DS_KEEP_ALIVE_INTERVAL`: (Float) Number of seconds to wait between calling Job Scheduling API keep alive. For example, 10.
- `DS_DATABASE_RELATIVE_PATH`: (String) The path is relative to the root folder. For example: '.db.json'.