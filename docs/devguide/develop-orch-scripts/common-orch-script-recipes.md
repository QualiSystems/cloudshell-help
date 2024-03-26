---
sidebar_position: 5
---

# Common Orchestration Script Recipes

In this section, we’ll provide a few handy examples of common script operations. The intention is to grow this into a good source to copy paste common code from. All of the examples are available in the [DevGuide Examples](https://github.com/QualiSystems/devguide_examples) repository under the `orchestration_scripts_examples` folder.

## Executing commands on sandbox resources

The following script attempts to execute a command only on resources that support it. If a resource does not support the command, the script will simply ignore it and move on to the next resource.

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/orchestration_scripts_examples/try_execute_commands/try_execute_commands.py) is by [QualiSystems](https://github.com/QualiSystems)

orchestration\_scripts\_examples/try\_execute\_commands/try\_execute\_commands.py [view](https://github.com/QualiSystems/devguide_examples/blob/master/orchestration_scripts_examples/try_execute_commands/try_execute_commands.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/orchestration_scripts_examples/try_execute_commands/try_execute_commands.py)

```python
def try_execute_command_on_resources(session, reservation_id, command_name, command_inputs=[]):

    """
    This function will try to execute a command on all app resources that support it
    :param CloudShellAPISession session: CloudShell API Session
    :param str reservation_id: The reservation Id to run the commands on
    :param str command_name: The command to try and execute
    :param list[InputNameValue] command_inputs: Inputs parameters for the command
    :return: The aggregated results of the successful calls
    :rtype: dict[str,str]
    """

    results = {}

    for resource in session.GetReservationDetails(reservation_id).ReservationDescription.Resources:
        try:
            result = session.ExecuteCommand(reservation_id, resource.Name, "Resource", command_name, command_inputs)
            results[resource.Name] = result.Output

        except CloudShellAPIError as exc:
            # Ignore the error if the command doesn't exist on the resource or its not assigned a driver
            if exc.code not in (NO_DRIVER_ERR,DRIVER_FUNCTION_ERROR):
                raise

    return results
```

## Configuring Apps in a Sandbox

App configuration in a sandbox, initiated either by setup orchestration or a dedicated orchestration script, can be performed in parallel or ordered by custom logic using the **app\_configuration** methods.

In the following example, we will configure all the ‘web servers’ Apps after configuring the ‘application server’ App. Also, to enable connection between the deployed Apps, we will pass the application server’s address to the web servers configuration:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox


sandbox = Sandbox()

## configure Application server
application_server = sandbox.components.get_apps_by_name_contains('application server')[0]

sandbox.apps_configuration.apply_apps_configurations(application_server)

application_server_address = sandbox.components.get_apps_by_name_contains('application server')[0].deployed_app.FullAddress

for server in web_servers:
    ## set application server as app param (application_server_address is pre-configured on the app)
    sandbox.apps_configuration.set_config_param(server, 'script alias', 'application_server_address', application_server_address)

## configure web servers
sandbox.apps_configuration.apply_apps_configurations(web_servers)
```

Make sure to add a `requirements.txt` file that will include the *cloudshell-orch-core* package to use this example.

Note the code in the components helper’s method to get the correct Apps from the sandbox and the usage in the App object rather than the name of the App for other methods like **apps\_configuration.set\_config\_param**.

Configuration of a sandbox’s Apps can be streamlined by using the OOB setup logic, as explained in [Extending the OOB Setup Orchestration Scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/CloudShell-OOB-Orch.htm#Extendin).
