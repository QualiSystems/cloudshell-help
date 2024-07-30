---
sidebar_position: 4
---

# Script Deep Dive

In this section we’ll take a more in-depth view at scripts and learn how they can be used most effectively for CloudShell orchestration.

## How CloudShell handles scripts

CloudShell executes a Python script by creating a temporary virtual environment for the script’s execution, downloading all required packages from the script’s requirements.txt file and executing the script using the Execution Server python engine.

To send information to the script, CloudShell sets environment variables in the scope of the script process. These environment variables include information about the sandbox reservation, as well as the script’s parameters. The script standard output is returned as the command result. If an exception is raised, or if a non-zero process result code is returned, the execution will be considered a failure.

## Using requirements.txt with CloudShell orchestration scripts

It’s now possible to attach a requirements.txt file to make sure your script will have all dependencies installed on the virtual environment before the script’s execution starts. For details about the *cloudshell-orch-core* package, see this [Getting Started with Orchestration Scripts](./getting-started-with-orch-scripts.md) section.

**To use the requirements.txt:**

- Archive this file with the orchestration script in one ZIP file. It will then be possible to upload this ZIP file to CloudShell using the CloudShell Portal.
    

## Using a main function and packaging multiple files

As scripts become more complex, instead of structuring them as one big function, it is advisable to create a main function and separate the rest of the logic into different functions. Python requires some boilerplate code in addition to the main function to make this work. Here is an example code demonstrating how to use main functions with scripts:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
import os


def print_keys():
    for key in os.environ:
        print key + " : " + os.environ[key]

def print_app_names(sandbox):
    """
    :param Sandbox sandbox:
    :return:
    """
    reservation_details = sandbox.automation_api.GetReservationDetails(sandbox.id).ReservationDescription
    for app in reservation_details.Apps:
        print app.Name

def main():
    sandbox = Sandbox()
    print_keys()
    print_app_names(sandbox)
 
if __name__ == "__main__":
    main()
```

Depending on the complexity of the script, it may be wise to also separate the code into multiple files. To do that, we can take advantage of Python’s ability to support executing .zip archives containing multiple scripts. The only requirement is that one of the files is named `__main__.py`, which is how the entry point of the Python process is determined.

## Setup and teardown scripts

Setup and teardown are special types of orchestration scripts. There are two things that make them special:

- They can’t have any inputs as they are launched automatically
    
- New blueprints come with CloudShell's default Setup and Teardown scripts and default durations for each.
    
**To set a script as a teardown or setup script:**

1. In the **Scripts - Blueprint** management page, edit the script.
    
2. From the script’s *Script Type* dropdown list, select *Setup* or *Teardown*, as appropriate. The script will take on that special behavior. Note that the script can only run as part of the sandbox Setup or Teardown process. In addition, you won’t be able to add any inputs to it.
    

## Getting the script’s Python version

To get the script’s Python version (2.7.x/3.x), use the following:

```python
import sys

print ("You are using Python: " + str(sys.version_info[0]))
```

## Logging in orchestration scripts

**To implement logging in your orchestration script:**

- Use Sandbox.logger, which is based on the CloudShell standard logging format. The logger lists all the data that is needed for debugging the script, including the Sandbox id, function names, error level, time stamp and more.
    
    ```python
    from cloudshell.workflow.orchestration.sandbox import Sandbox
    
    
    Sandbox = Sandbox()
    
    resource_name = 'My_Resource'
    
    try:
        Sandbox.automation_api.IncludeResource(resource_name)
    
    except:
        Sandbox.logger.error('Failed to include resource {0}'.format(resource_name))
    ```
    
    Orchestration script logs are saved on the execution server’s `%programdata%\QualiSystems\logs\<reservationid>` folder in a dedicated sub-folder with the reservation ID as the name. For example:
    
    ![Log Structure](/Images/Devguide-orchestration-scripts/Scripts-Deep-Dive_558x109.png)
    

## Debugging scripts

CloudShell includes some helper functions to make it easier to debug a script by running it on real sandbox reservation data. The helper functions allow the script to be "attached” to a CloudShell sandbox, by filling in all of the script’s environment variables so that the same information is available to it as if it were launched by CloudShell.

**To attach a script to a CloudShell sandbox:**

1. Create a sandbox reservation.
    
2. In the script’s project folder, create a Python script. We’ll use this script as our debugger.
    
3. Paste the following code into the script:
    
    ```python
    from cloudshell.helpers.scripts.cloudshell_dev_helpers import attach_to_cloudshell_as
    
    attach_to_cloudshell_as('CLOUDSHELL_USER', 'CLOUDSHELL_PWD', 'DOMAIN', 'RESERVATION_ID', 'SERVER_ADDRESS')
    ```
    
4. To debug a specific function in your script, you will need to call the function from the debugger script.
    
    For example, calling the *connect\_layer1\_routes* function from a script called *Setup\_Script*:
    
    ```python
    from cloudshell.helpers.scripts.cloudshell_dev_helpers import attach_to_cloudshell_as
    
    attach_to_cloudshell_as('admin', 'admin', 'Global', 'c425c01c-2cc6-4a3a-bb45-d357be6c294f', '192.168.42.125')
    
    from Setup_Script import connect_layer1_routes
    
    connect_layer1_routes()
    ```
    
5. Set the relevant details and debug the new script.
    
    You can add additional functions to the script, from the same file or other ones in the project folder.
    
    As you write more complex orchestration scripts, you may want to separate the code to multiple files. To do that, we can take advantage of Python’s ability to support executing .zip archives containing multiple scripts. The only requirement, is that one of the files is named *`__main__.py`*, which is how the entry point of the Python process is determined.
    

## Referencing other packages

1. Create a Sandbox reservation.
    
2. Add the following code and fill in the required data for the function parameters.
    
    ```python
    import cloudshell.helpers.scripts.cloudshell_dev_helpers as dev_helpers
    
    						
    dev_helpers.attach_to_cloudshell_as(user="CLOUDSHELL_USER", password="CLOUDSHELL_PWD", domain="DOMAIN",
                                        reservation_id="RESERVATION_ID", server_address="ADDRESS", command_parameters={"NAME":"VALUE"})
    ```
    

Note that if we include the above code in the example script we provided earlier, we’ll be able to run it locally as well as from the CloudShell Sandbox. The **attach\_to\_cloudshell\_as** function will populate all of the blueprint data as CloudShell would, so from the code’s perspective, it doesn’t make a different where it is being run from. Furthermore, the code will ignore the special **attach\_to\_cloudshell\_as** function if you run it from CloudShell so that there is no adverse effect to leaving the statement there.

However, using this strategy will expose your CloudShell credentials in the code. To avoid this, we recommend you use a similar function which takes the same information from a file. Make sure to add that file to the .gitignore list so that it doesn’t get on source control. The following code will have the same effect as the lines above, but will look for the information in a JSON file named quali\_config.json, which should be in the project root.

```python
import cloudshell.helpers.scripts.cloudshell_dev_helpers as dev_helpers

dev_helpers.attach_to_cloudshell()
```

The `quali_config.json` should have the following structure:

```javascript
{
    "user" : "USER",
    "password" : "PASSWORD",
    "domain" : "DOMAIN",
    "server_address" : "SERVER_ADDRESS",
    "cloudshell_api_port" :"CLOUDSHELL_API_PORT",
    "reservation_id" : "reservation_id",
    "command_parameters" : { "PARAM_NAME" : "PARAM_VALUE"    }
}
```
