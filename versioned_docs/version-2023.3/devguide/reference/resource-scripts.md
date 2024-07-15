---
sidebar_position: 10
---

# Resource Scripts

Resource scripts allow you to add automation to specific sandbox components. These scripts are intended to add simple functionality, or to be used for testing and debugging activities. Note that in order to add automation to a shell, the best practice is to use the component’s driver.

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/OZ9MRzZOd0E" title="Creating CloudShell resource scripts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Using the script_helper

Resource scripts get information from the sandbox component using the script\_helper.

**To use the script helper:**

Import the *cloudshell-automation-api* Python package and add it to your script, as illustrated in the example below. Note that the package is automatically imported when your sandbox starts. In this example, the following code gets an object that contains all of the sandbox’s information:

```python
import cloudshell.helpers.scripts.cloudshell_scripts_helpers as script_help
```

To execute this code from within CloudShell, you will also need to include a *requirements.txt* file with your script, and rename the resource script to `__main__.py`. The `__main__.py` file is used as the script’s entry point, when the script is a package containing multiple files. Finally, zip the two files together, upload the zip package to CloudShell Portal’s **Manage>Scripts>Resource** page and make sure to specify the **Models** of the resources this script applies to, as explained in [Associating a resource script to a CloudShell resource](./resource-scripts.md).

If you want to write your own packages and use them in your script, make sure to place them in the local PyPi Server repository on the Quali Server machine. For details, see [PyPi Server - Managing Python Shell and Script Dependencies](../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md).

To facilitate writing and debugging activities, it is recommended to use advanced IDEs such as PyCharm, which provide autocomplete functionality, as illustrated below.

![Resource information](/Images/Devguide-reference/Resource-Scripts_624x158.png)

## Accessing the sandbox component

Use the *get\_resource\_context* method to access and use the sandbox component in your resource script.

For example, let’s assume we want to get metadata information from the component, such as name and address:

```python
resource_name = script_help.get_resource_context_details().name
resource_address = script_help.get_resource_context_details().address
```

Or to get information from attributes on the component:

- For global attributes, use the attributes element. For example, "Region” and "Execution Server Selector”:
    
    ```python
    resource_region = script_help.get_resource_context_details().attributes.Region
    resource_ess = script_help.get_resource_context_details().attributes["Execution Server Selector"]
    ```
    
- For namespaced attributes (i.e. attributes that exist on a 2nd Gen shell only), provide the full attribute name, including the namespace. For example, "Vendor” and "OS Version”:
    
    ```python
    resource_vendor = script_help.get_resource_context_details().attributes['CS_Switch.Vendor']
    resource_os_version = script_help.get_resource_context_details().attributes['CS_Switch.OS Version']
    ```
    

## Using API from the resource script

To use the API, create a session variable that uses the helper’s get\_api\_session method:

```python
session = script_help.get_api_session()
```

## Getting reservation context details

The *get\_reservation\_context\_details* helper provides the reservation context.

![get_reservation_context_from_resource_scripts](/Images/Devguide-reference/Resource-Scripts_1_624x179.png)

To get this object, include this line in your script:

```python
from cloudshell.helpers.scripts.cloudshell_scripts_helpers import get_reservation_context_details
```

Note that starting with CloudShell 9.2, you can also get the CloudShell user who ran the command using the *get\_reservation\_context\_details* helper.

For example:

```python
user = get_reservation_context_details().running_user
```

## Returning outputs from a resource script

In order to return outputs, use `print`. This applies to flat scripts and methods nested within resource scripts.

The script standard output is returned as the command result. However, if an exception is raised, or if a non-zero process result code is returned, the execution will be considered a failure. As a side note, in CloudShell, the output of a script is displayed in the **Output** console in the sandbox workspace, so whatever you print in your script will find its way there.

For example:

```python
import cloudshell.helpers.scripts.cloudshell_scripts_helpers as script_help


def print_output():
    resource_address = script_help.get_resource_context_details().address
    print(resource_address)
```

## Associating a resource script to a CloudShell resource

1. Place the Python script(s) and requirements.txt files in a folder.
    
2. From within the folder, select the two files and zip.
    
3. In CloudShell Portal’s **Scripts** management page, open the **Resource Scripts** page and add the zip file.
    
4. **Edit** the script and from the **Models** drop-down list, select the models of the resources and services.
    
    ![Resource information](/Images/Devguide-reference/Resource-Scripts_2_604x614.png)
    
5. Click **Save**.
    

## Example

In this example, we use the CloudShell Automation API to get the resource’s vendor and OS version:

**requirements.txt**

```python
cloudshell-automation-api>=9.3,<2020.1
```

**\_\_main\_\_.py**

```python
import cloudshell.helpers.scripts.cloudshell_scripts_helpers as script_help


session = script_help.get_api_session()

resource_vendor = script_help.get_resource_context_details().attributes['CS_Switch.Vendor']
resource_os_version = script_help.get_resource_context_details().attributes['CS_Switch.OS Version']

session.WriteMessageToReservationOutput(
    reservationId=script_help.get_reservation_context_details().id,
    message='the resource vendor is {}'.format(resource_vendor)
)

session.WriteMessageToReservationOutput(
    reservationId=script_help.get_reservation_context_details().id,
    message='the resource OS version is {}'.format(resource_os_version)
)
```
