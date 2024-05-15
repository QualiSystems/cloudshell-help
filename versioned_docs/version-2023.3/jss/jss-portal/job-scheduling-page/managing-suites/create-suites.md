---
sidebar_position: 1
---

# Creating Suites

A suite must have at least one job that has a test, but you can have several jobs, each with different tests. Each job is associated to a CloudShell blueprint, which is reserved when the job is executed. Tests are run sequentially in the order they were added to the job.

**To create a suite:**

1. In the **Job Scheduling** dashboard, click **Space** in the top left corner and select the CloudShell domain.
2. Click **\+ Add New Suite**.
3. Enter the suite’s **Name** (50 characters max) and optionally a **Description**.
4. By default, suites are executed on demand by the user or automation process. To run on a recurring schedule, expand **Advanced Scheduling** and set the time interval in Cron syntax.
   <details>
   <summary>Cron example</summary>
    
    For example:
    
    ![](/Images/JSS/JssAdvancedSchedulingCron_476x259.png)
    
    The suite will be triggered as follows:
    
    ![](/Images/JSS/JssCrontagGuru_497x174.png)
    </details>
    
5. Add a job:
    1. Click **\+ Add Job**.
    2. Enter the job’s **Name** (50 characters max), **Duration** (in minutes) and **Description** (optional). The job’s duration comprises the estimated duration of each of the job's tests, with buffer and provisioning estimates (if the blueprint includes setup/teardown commands).
    3. Click the Blueprint ![](/Images/JSS/JssAddButton.png) button and select a blueprint. The suite’s execution will create a sandbox based on this blueprint for this job and run the tests on the sandbox environment.
        
        :::note
        Persistent blueprints as well as blueprints that require approval are unavailable for the New Job Scheduling.
        :::
        
        :::info Important
        The New Job Scheduling exposes only global inputs for blueprints. If your blueprint requires other types of inputs that don’t have a default value, the job execution will fail. To prevent this from happening, make sure those inputs have default values.
        :::
        
    4. If the blueprint has inputs, the **Blueprint Inputs** section is displayed. Expand the section and specify the values as appropriate. Global inputs, abstract requirements, additional info and service inputs are supported.
        
        For example, blueprint containing a global input:
        
        ![](/Images/JSS/JssBlueprintInputs.png)
        
6. Add tests to the job:
    1. Click the **Tests** ![](/Images/JSS/JssAddButton.png) button.
        
        :::note Notes        
        - To learn how to use the sandbox's details in Robot tests, see the [Using the sandbox's details in a test](#using-the-sandboxs-details-in-a-test) section below.
        - We also have Community grade libraries that allow you to use CloudShell Automation and Quali API to connect to CloudShell and run commands from your Robot tests. For details, see our [JSS-Robot-Test-Samples](https://github.com/QualiSystemsLab/JSS-Robot-Test-Samples) GitHub repo.
        :::
        
    2. In the **Add a Test** pane on the right, search for a suitable test, click the test’s name and set the test’s **Duration** (in minutes).
    3. In the **Additional CMD Parameters** field, optionally specify parameters to pass to the test's execution. The parameters must be in Robot [test execution command line format](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html).
        
        For example:
        
        ```javascript
        -D 'My doc'  -v my_var:120 -v my_var2:10
        ```
        
        :::tip
        To use variables from an external file in the test, declare the variables python file in the test itself.
        
        For example:
        
        ```python
        *** Settings *** 
        | Variables | variables_file.py
        ```
        :::
        
    4. Repeat to add additional tests.
        
        :::note Notes
        - The best practice is to set each robot suite (single robot test file) to run a single test. Setting a robot suite to run multiple tests is supported. However, if one of the tests fails, the New Job Scheduling will not be able to identify which test failed.
        - However, if you wish to add multiple tests to the job, make sure all of the tests' dependencies are included in the `requirements.txt` file that will be used when executing the first test in the job. For details, see [Setting Up a Test Repository](../../../../install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo.md).
        :::

7. Add additional jobs, as appropriate.
8. Click **Create**. The suite is displayed in the **Job Scheduling** dashboard.
    
    :::note
    If the suite is not created, it’s probably because you didn’t specify some mandatory details. Scroll up and fill in the details marked in red. For example:
    
    ![](/Images/JSS/JssCreateSuiteTemplate.png)
    :::
    

## Using the sandbox's details in a test

This section explains how to configure your Robot Framework tests to use details from the sandbox.

This is achieved using the **sandbox** object, which CloudShell passes automatically to the tests as a variable. The object includes details about the sandbox, such as sandbox id, end time, components (resources, Apps, services), connections and inputs.

### Sandbox object example

```javascript
"sandbox": {
    "id": "uuid",
    "end_time": "datetime (iso 8601)",
    "teardown_time": "datetime (iso 8601)",
    "global_inputs": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "additional_inputs": [
      {
        "name": "string",
        "value": "string",
        "resource_name": "string"
      }
    ],
    "abstract_requirements": [
      {
        "name": "string",
        "value": "string",
        "resource_name": "string",
        "type": "string"
      }
    ],
    "service_inputs": [
      {
        "name": "string",
        "value": "string",
        "resource_name": "string"
      }
    ],
    "resources": [
      {
        "name": "string",
        "address": "string",
        "full_address": "string",
        "family": "string",
        "model": "string",
        "blueprint_alias": "string",
        "connected_to": "string"
      }
    ]
  }
```

### Connectivity context that is passed into tests

```javascript
{
    "connectivity":
        "server_address: .. ,
        "cloudshell_api_port: .. ,
        "cloudshell_api_scheme: .. ,
        "quali_api_port: .. ,
        "admin_auth_token: .. ,
        "use_webapi_endpoint: .. ,
}
```

### Usage examples

Robot test that uses the sandbox's id, global input and value:

```python
*** Settings ***
Library    Collections

*** Test Cases ***
Print sandbox id and 1st global input
    print sandbox id ${sandbox.id}
    print 1st global input ${sandbox.global_inputs}

*** Keywords ***
    print sandbox id
    [Arguments] ${id}
    Log To Console ${id}
    print 1st global input
    [Arguments] ${global_inputs}
    ${num} = Get From List ${global_inputs} 0
    Log To Console  ${num.value}
```