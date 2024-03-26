---
sidebar_position: 2
---

# How Orchestration Scripts Get Information from CloudShell

Information about the sandbox on which your script is running and its components is available in your script as an environment variable. The standard way to get the information is using the **Sandbox** object.

**To use the *Sandbox* object:**

- Import the *cloudshell\-orch-core* Python package and add it to your script, as illustrated in the example below. Note that the package is automatically imported when your sandbox starts. In this example, the following code gets an object that contains all of the sandbox’s information:
    

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox


sandbox = Sandbox()

reservation_context_details = sandbox.reservationContextDetails
```

Note that to execute this code, you will need to include a `requirements.txt` file in your script, see [Script Deep Dive](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/Scripts-Deep-Dive.htm) for more details.

To facilitate writing and debugging activities, it is recommended to use advanced IDEs such as PyCharm, which provide autocomplete functionality, as illustrated below.

![Sandbox information](/Images/Devguide-orchestration-scripts/Scripts-Getting-Information_624x204.png)

Note that if you plan on using methods in your script, and want the IDE to autocomplete the *sandbox* object’s class properties from within the method, you will need to include a docstring referencing the object. For details, see [Docstrings in orchestration scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/Intellisense.htm#Docstrin).

## Accessing the sandbox components

Use the **Sandbox** class to access and use the components of a sandbox in your orchestration scripts to implement custom logic.

For example, let’s assume we want to get the names of the resources and Apps in a sandbox. To do so, we will use **sandbox.component**. The following code will iterate over the resources and Apps in the sandbox and print out their names:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox

sandbox = Sandbox()

for resource_name, resource in sandbox.components.resources.iteritems():
    print 'Found resource: {0}, with address: {0}'.format(resource_name, resource.FullAddress)

for app_name, app in sandbox.components.apps.iteritems():
    print app_name
```

The components in the sandbox are stored in a dictionary object, from which a specific resource can be retrieved using a simple syntax. For example:

```python
sandbox = Sandbox()

resource_details = sandbox.components.resources['my_resource']
```

It’s also possible to get the sandbox components using helpers methods located under **sandbox.component** such as **get\_resources\_by\_model, get\_apps\_by\_name\_contains** and others. For example:

```python
sandbox = Sandbox()

services = sandbox.components.get_services_by_alias('my-service-alias')
for service in services:
    print service.Alias
```

To refresh the components information at any time during the sandbox’s lifecycle, use the **sandbox.components.refresh\_components** method.

## Accessing the sandbox’s user inputs

User inputs provided by the user when they reserved the blueprint can be accessed by your script, as contextual information. This data is stored in several environment variables based on the input type:

- **Global inputs** - These inputs are a part of the reservation form and can represent general data you wish to collect from the user for your automation. They can also be used to group together multiple other inputs as one data entry. You can access these using the GLOBALINPUTS environment variable.
    
- **Resource requirements** - These are inputs related to abstract resources. An abstract resource in CloudShell allows you to declare a generic spec or criteria for a resource rather than explicitly using a specific one. When customizing such an abstract resource, you can choose to make some of its properties available for the user to select, so as to make it more flexible. For example, for a physical device, instead of specifying the model in the blueprint, you can set the model as a parameter with a dropdown list for the user to select from when reserving it. Resource requirements are accessed using the RESOURCEREQUIREMENTS environment variable.
    
- **Resource additional info** - When customizing an abstract resource, you can also choose to add some parameters to the resource that are not requirements but rather instructions on what to do with it. An example would be specifying an OS version to install on it. In this case, this parameter is not used to select the resource but rather to operate on the selected resource in the active sandbox. Additional info parameters are accessed using the RESOURCEADDITIONALINFO environment variable.
    

As with sandboxes, we can use some helper modules to get the resource information in Python using the same object we used to get the reservation’s details:

```python
sandbox = Sandbox()

global_value = sandbox.global_inputs['input name']
requirement_value = sandbox.requirement_inputs['resource1']['input_name']
additiona_info_value = sandbox.additional_info_inputs['resource1']['input_name']
```

## Getting script input parameters

You can add input parameters to a script when adding or editing a script in CloudShell Portal's **Manage>Scripts** page. The input parameter values are also provided automatically to your script. CloudShell sets up an environment variable with the same name as the parameter.

This means that if your script looks like this, with a parameter called ‘Param1’ defined:

![Sandbox information](/Images/Devguide-orchestration-scripts/Scripts-Getting-Information_1_601x703.png)

You’ll be able to access it using an environment variable by that name:

```python
import os

os.environ['PARAM1']
```

You can also use the Sandbox class:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox

sandbox = Sandbox()

sandbox.get_user_param('Param1')
```

Note that when using the *get\_user\_param* helper function, the input name is case insensitive since the function will uppercase it.

## Using the API to get sandbox information

A common use case for a script is to get a list of the different Apps and resources in the sandbox, to be able to call additional commands or API functions on them. To get that information, we can use the CloudShellAPI.

**To start a CloudShell API session:**

1. Obtain the Quali Server’s connectivity details. These details are also available as an environment variable in your script called ‘qualiConnectivityContext’. As with the sandbox information, you can use the Sandbox class to quickly get the connectivity information in a more convenient object form and initialize a CloudShellAPISession object by calling **sandbox.connectivityContextDetails**.
    
2. Create a CloudShell API session object. Since initializing a CloudShell API session object is a very common operation, you can use the **Sandbox** class to directly create an object. The **Sandbox** class will handle the passing of all of the required connectivity information for you. The **Sandbox** class provides a shortcut which makes accessing the CloudShell API from your script much easier. Simply use the following code:
    
    ```python
    from cloudshell.workflow.orchestration.sandbox import Sandbox
    
    session = sandbox.automation_api
    ```
    
    **sandbox.automation\_api** is a CloudShell API session object. You can use the IDE’s autocomplete capabilities to explore the available functions:
    
    ![Sandbox information](/Images/Devguide-orchestration-scripts/Scripts-Getting-Information_2_624x129.png)
    

## Getting general sandbox information (ReservationDescription object)

The **reservation\_description** object is one of the most important objects for getting information about the sandbox. It includes the sandbox's general details (name, description, owner, start/end times, etc.), conflicts, components (resources, services and Apps), connectors, blueprint information, reservation live status, etc.

![](/Images/Devguide-orchestration-scripts/Scripts-Getting-Information_4.png)

Note that **sandbox.reservation\_description** provides information from the sandbox's creation. As such, it does not include updates performed after the sandbox was created. Such updates can be retrieved using the **GetReservationDetails** API:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox


sandbox = Sandbox()

reservation_id = sandbox.id

reservation_description = sandbox.automation_api.GetReservationDetails(reservation_id).reservation_description
```

## Getting the sandbox's current status

It is possible to get the sandbox's current phase via API. This is especially useful if you want to create workflows that perform actions at certain points during the sandbox's lifecycle.

This is done by calling the `GetReservationStatus` API and requires obtaining two details from the sandbox - **Status** and **ProvisioningStatus**:

- **Status** provides the reservation status. Possible responses are (for details, see [Sandbox state](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Brws-Wrkspc.htm#Reservation)):
    
    | Status | Description |
    | --- | --- |
    | Pending | Scheduled to start in the future |
    | Started | Sandbox is currently running |
    | In Use | Sandbox is running and has "in use" resources |
    | Completed | Sandbox has ended |
    | Overtime | Sandbox is in Overtime mode (i.e. sandbox has reached its scheduled end time but has "in use" resource) |
    
- **ProvisioningStatus** provides the sandbox's current phase. Possible responses are:
    
    | ProvisioningStatus | Description |
    | --- | --- |
    | Not Run | Sandbox is scheduled to run in the future |
    | Setup | Sandbox is running Setup |
    | Ready | Sandbox is "Active" (without errors) |
    | Teardown | Sandbox is in Teardown state |
    | Error | Sandbox is "Active with Error" |
    | BeforeSetup | Sandbox is running, but Setup hasn't started |
    

**Examples:**

Querying for `Status=Error` and `ProvisioningStatus=Completed` returns "Completed (With Error)" sandboxes, while querying for `Status=Started` and `ProvisioningStatus=Completed` returns "Active (With Error)" sandboxes.

Running a custom "health check" operation on the environment once the sandbox is active:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
import post_setup_configurations as configs


sandbox = Sandbox()

reservation_id = sandbox.reservationContextDetails.id
api = sandbox.automation_api
result = api.GetReservationStatus(reservation_id)

if result.ReservationSlimStatus.Status == 'Started' and result.ReservationSlimStatus.ProvisioningStatus == 'Ready':
    configs.run_health_check
```

## Getting custom sandbox metadata

It is possible to store and retrieve custom key-value data from the sandbox. For details, see [Custom Sandbox Metadata](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/Custom-Sandbox-Metadata.htm).

## Getting saved sandbox information

Starting with CloudShell 9.0, the *cloudshell\-orch-core* Python package includes a new class called *reservationLifecycleDetails*, which allows you to get the following details about your sandbox: saved sandbox name and description, and the current sandbox user name.

![Sandbox information](/Images/Devguide-orchestration-scripts/Scripts-Getting-Information_3_624x111.png)

Note that depending on the sandbox, the information may be partial. For example, if the sandbox is not a saved sandbox, the saved sandbox name and description will be missing. For details about our OOB saved sandbox orchestration scripts, see [CloudShell's OOB Orchestration](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/CloudShell-OOB-Orch.htm).

## Getting the user context

CloudShell also allows you to get the CloudShell user who ran the blueprint/orchestration command in the **Sandbox** class.

For example:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox


sandbox = Sandbox()

user = sandbox.reservationContextDetails.running_user
```
