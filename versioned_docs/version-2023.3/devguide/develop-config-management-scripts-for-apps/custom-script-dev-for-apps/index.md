# Custom Script Development for Apps

This article will take you through the development process of a custom script for CloudShell App deployment. CloudShell supports PowerShell scripts for Windows VMs, and bash or sh scripts for Linux VMs. When developing your script, we recommend you first simulate/debug it by running it manually on a similar machine.

## Examples

Here are several examples of custom scripts to help you get started. If you are new to script development, feel free to test them out.

### Hello World

A basic script, just to make sure we’re communicating with the VM and are able to run a script. When run with an App, the output should be shown in the sandbox diagram’s **Output** window.

```css
Windows / Linux
echo “Hello World“
```

### Parameters

A basic script that prints out the parameter defined in an App template or API call (see below). This is useful for debugging the script and making sure the parameter is received with the correct value. Note that the parameters are stored as environment variables on the App instance in the sandbox.

```css
Windows
echo $env:P1
Linux
echo $P1
```

Specified in the App template:

![Discovery Dialog](/Images/Devguide-configuration-management/Custom-Scripts_2_624x164.png)

Specified in the ConfigureApps API method:

```python
Python
from cloudshell.api.cloudshell_api import *
 
session = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')
session.ConfigureApps(
    reservationId='dfb2df41-334e-4630-8bc6-ec846eb072d6',
    appConfigurations=[AppConfiguration('LinuxVmApp_9cb2-72d6', [ConfigParam('P1', 'Hello World From Here!')])],
    printOutput=True
)
```

:::note Notes
Since this script uses parameters defined on the App template, it will not work when run manually outside of CloudShell. For this to work, you will need to edit the Python code as follows:

- Update the CloudShell settings passed to the `session` variable, if needed.
- Specify the ID of an active sandbox (in the `reservationId` field of the Python code).
- Replace ‘LinuxVmApp\_9cb2-72d6’ with the App’s name.
:::
### Linux privilege escalation

If the deployed App resource is set with the credentials of a “regular” user, you may specify the root credentials in the parameters (see the Parameters example above), to use them in the script.

```css
Linux
echo $pass | su $user –c ‘ls /root’
or
Linux
su - $user <<Block
$pass
ls /root
Block
```