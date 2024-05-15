# CloudShell's OOB Orchestration

Every CloudShell installation includes out of the box workflows. These reflect some common workflows we see across many of our customers that we’ve decided to integrate as default behavior. The OOB setup and teardown processes handle App deployment and startup, connectivity, App discovery and installation. The OOB Save and Restore processes are used for saving the sandbox state and restoring it as a new sandbox.

## Setup and Teardown Orchestration

The following diagram describes the OOB setup and teardown flow:

![Setup Workflow](/Images/Devguide-orchestration-scripts/CloudShell-s-OOB-Orchestration.png)

These OOB setup and teardown scripts can be found in the **Scripts – Blueprint** management page. You can review their source code in the [cloudshell-orch-sandbox repository](https://github.com/QualiSystems/cloudshell-orch-sandbox/tree/v8.1/SandboxOrchestration/environment_scripts).

The default setup and teardown logic is provided in a Python package called *cloudshell-orch-core*. The default blueprint template includes a reference to the *cloudshell-orch-core* package using the `requirements.txt` mechanism, which is supported for orchestration scripts.

Here is the implementation of the OOB setup script:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow


sandbox = Sandbox()

DefaultSetupWorkflow().register(sandbox)

sandbox.execute_setup()
```

As you can see, to use the default orchestration logic, we instantiated the *DefaultSetupWorkflow* class and registered the sandbox to use the default behavior. Sandbox setup is divided into 4 stages: preparation, provisioning, connectivity and configuration. It’s possible to disable the default implementation of each stage (except for preparation, which is mandatory) by setting **enable\_stageName=False**, as illustrated in this example:

```python
DefaultSetupWorkflow().register(Sandbox, enable_connectivity=False)
```

The OOB setup and teardown scripts can easily be customized or extended. Click [here](https://github.com/QualiSystems/cloudshell-orch-sandbox/blob/develop/Samples/Setup/ordered_configuration_example.py) for an example on how to customize the app configuration order in the setup stage, or see [other samples](https://github.com/QualiSystems/cloudshell-orch-sandbox/tree/develop/Samples) to learn how to extend the OOB orchestration scripts.

### Extending the OOB Setup Orchestration Scripts

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/vjGi4xGSQo4" title="Customizing CloudShell Setup Orchestration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Setup script logic is divided into 4 stages – Preparation, Provisioning, Connectivity and Configuration. Each Setup stage has a specific logic functionality.

- **Preparation** is empty in the default Setup script. This is the place to enter any code that logically has to be executed before Setup logic is initiated.
    
- **Provisioning** deploys and discovers all apps.
    
- **Connectivity** connects all layer 1/layer 2/subnet connections, powers on and refreshes IPs on deployed apps.
    
- **Configuration** applies any additional configuration on deployed apps
    
Note that the OOB setup already includes some default logic in each of the stages as depicted in the diagram at the top of this page. However, the OOB setup can easily be extended using the following extension methods:

- add\_to\_preparation
    
- on\_preparation\_ended
    
- add\_to\_provisioning
    
- on\_provisioning\_ended
    
- add\_to\_connectivity
    
- on\_connectivity\_ended
    
- add\_to\_configuration
    
- on\_configuration\_ended
    

Each stage has an interim **on\_\_\[stage\]\_ended** step which allows the execution of any code that has to run between stages. Note that all the functions you add to a stage (using **add\_to\_configuration**, for example) run in parallel, while **on\_\_\[stage\]\_ended** functions run sequentially.

You can extend the OOB setup and teardown scripts by adding additional steps, or controlling the order of execution. In this section we will focus on the setup script, for examples about how to extend the teardown, see [Extending the OOB Teardown Orchestration Scripts](#extending-the-oob-teardown-orchestration-scripts) below. An example for extending the OOB Setup script can be calling additional commands to validate Apps or resource states, launching additional orchestration, or controlling the order in which the sandbox is provisioned.

1. Create a copy of the appropriate script, (see below for extension options), and upload the updated version separately into CloudShell Portal as a **Setup** script. DO NOT remove any step in the setup workflow. However, you can add your own steps or change the order of execution.
    
2. Make sure to give your extended script a more specific name than simply 'setup'. The name ‘teardown’ is a reserved name, which may cause unexpected behavior during the setup operation.
    

You can extend the Setup script to implement the required logic in one of the setup stages: preparation, provisioning, connectivity and configuration or as a post stage for validation. Make sure to add a `requirements.txt` file that will include the *cloudshell-orch-core* package. For example, adding some logic to the configuration stage can be made in the following way:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow


Sandbox = Sandbox()

DefaultSetupWorkflow().register(Sandbox)

sandbox.workflow.add_to_configuration(my_custom_login, components)
```

Each of the following methods gets a custom function and list of components to use in the function. For example, executing some custom logic to validate resource configuration:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow


def custom_function(sandbox, components):
    pass

sandbox = Sandbox()

DefaultSetupWorkflow().register(sandbox)

resources = sandbox.components.get_resources_by_model('Generic Resource Model')

sandbox.workflow.on_configuration_ended(custom_function, resources)
```

Note that all methods of the OOB setup logic in the same stage are executed in parallel. The custom function should get arrays of the sandbox and its components as inputs. It’s recommended to use this function template as a starting point:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox

def custom_func(sandbox, components):
    """
    :param Sandbox sandbox:
    :return:
    """
    pass
```

Here is an implementation example of custom configuration logic for a 3 tier application where each type of App is configured consecutively while passing some global inputs and configuration parameters between the Apps:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow

def main():
    sandbox = Sandbox()
    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                           message='Starting to execute the cool stuff!')
    DefaultSetupWorkflow().register(sandbox, enable_configuration=False)  # Disable OOB configuration
    sandbox.workflow.add_to_configuration(function=configure_apps,
                                          components=sandbox.components.apps)
    sandbox.execute_setup()

def configure_apps(sandbox, components):
    """
    :param Sandbox sandbox:
    :return:
    """
    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                           message='configure_apps started')
    build_id = sandbox.global_inputs['build_id']

    # Configure databases
    databases = sandbox.components.get_apps_by_name_contains('Database')
    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                           message='Configuring Databases')
    for app in databases:
        sandbox.apps_configuration.set_config_param(app=app,
					             alias='config alias',
                                                    key='build_id',
                                                    value=build_id)
        sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                               message='Database configured with build_id {0}'.format(str(build_id)))
    sandbox.apps_configuration.apply_apps_configurations(databases)
    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                           message='Finished to configure databases')

    # Configure Application Servers
    app_servers = sandbox.components.get_apps_by_name_contains('Application')

    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                           message='Configuring Application Servers')

    database = sandbox.components.get_apps_by_name_contains('Database')[0].deployed_app.FullAddress

    for app_server in app_servers:
        sandbox.apps_configuration.set_config_param(app=app_server,
					             alias='config alias',
                                                    key='build_id',
                                                    value=build_id)
        sandbox.apps_configuration.set_config_param(app=app_server,
					             alias='config alias',
                                                    key='DB_address',
                                                    value=database)
        sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                               message='Application Server configured with build_id {0} , and DB address {1}'
                                                               .format(str(build_id), str(database)))

    sandbox.apps_configuration.apply_apps_configurations(app_servers)
    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                           message='Finished to configure Application Servers')

    # Configure web servers
    application_server_address = sandbox.components.get_apps_by_name_contains('Application')[0].deployed_app.FullAddress

    web_servers = sandbox.components.get_apps_by_name_contains('Web')

    for app in web_servers:
        sandbox.apps_configuration.set_config_param(app=app,
					             alias='config alias',
                                                    key='Application Server',
                                                    value=application_server_address)
        sandbox.apps_configuration.set_config_param(app=app,
					             alias='config alias',
                                                    key='build_id',
                                                    value=build_id)
        sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                               message='Web Server configured with build_id {0}, and Application Server address {1}'
                                                               .format(str(build_id), str(application_server_address)))


    sandbox.apps_configuration.apply_apps_configurations(web_servers)
    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,
                                                           message='Finished to configure Web Servers')

main()
```

Here is another implementation that shows a scenario where some physical devices need to be loaded while few applications are deployed:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow


def load_firmware_sequential(sandbox, components):
    """
    :param Sandbox sandbox:
    :param components:
    :return:
    """
    for component in components:
        sandbox.automation_api.ExecuteCommand(reservationId=sandbox.id,
                                              targetName=component.Name,
                                              targetType='Resource',
                                              commandName='load_configuration')


sandbox = Sandbox()
DefaultSetupWorkflow().register(sandbox)

chassis = sandbox.components.get_resources_by_model('Generic Chassis Model')
sandbox.workflow.add_to_provisioning(function=load_firmware_sequential,
                                     components=chassis)

sandbox.execute_setup()
```

### Extending the OOB Teardown Orchestration Scripts

You can extend the OOB Teardown script to execute custom steps prior to the out-of-the-box teardown orchestration, or to execute custom steps in parallel to the OOB teardown. This is done using the following extension methods, which are included in the workflow property in the **Sandbox** class:

- add\_to\_teardown
    
- before\_teardown\_started
    
Each of the above methods gets a custom function and list of components to use in the function. All steps configured using the **before\_teardown\_started** method will be executed in a sequential manner, and all steps configured using the **add\_to\_teardown** method will be executed in parallel.

Here is an example of how to execute a command on a resource prior to the default teardown orchestration, note that a `requirements.txt` file containing cloudshell-orch-core should be attached to the script:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.teardown.default_teardown_orchestrator import DefaultTeardownWorkflow


def execute_resource_cleanup(sandbox, components):
    """
    :param Sandbox sandbox:
    :param components:
    :return:
    """
    for component in components:
        sandbox.automation_api.ExecuteCommand(reservationId=sandbox.id,
                                              targetName=component.Name,
                                              targetType='Resource',
                                              commandName='cleanup')

sandbox = Sandbox()

DefaultTeardownWorkflow().register(sandbox)

chassis = sandbox.components.get_resources_by_model("Generic Chassis Model")
sandbox.workflow.before_teardown_started(execute_resource_cleanup, chassis)

sandbox.execute_teardown()
```

Make sure to follow these steps when implementing a custom teardown orchestration:

1. Create a copy of the appropriate script, (see below for extension options), and upload the updated version separately into CloudShell Portal as a **Teardown** script. DO NOT remove steps from the teardown workflow. However, you can add your own steps or change the order of execution.
    
2. Make sure to give your extended script a more specific name than simply 'teardown'. The name ‘teardown’ is a reserved name, which may cause unexpected behavior during the teardown operation.
    

## Save and Restore Orchestration
:::note
*These orchestration scripts apply to customers who have purchased the **Save and Restore** paid add-on. Contact your account manager to obtain a license.*
:::
Save and Restore scripts are provided to support the capability to save and restore sandboxes. Save and Restore reside in a Python package called *cloudshell-orch-core*. The OOB default blueprint template includes these orchestration scripts and a reference to the *cloudshell-orch-core* package (required by these scripts) using the `requirements.txt` mechanism. Here is the implementation of the OOB Save script:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox


sandbox = Sandbox()

sandbox.execute_save()
```

By running the **execute\_save** method on a sandbox, the script will call a server logic that will create a saved sandbox. For details about the saving process, see [Sandbox Save and Restore Overview](../../../portal/sandboxes/sandbox-save-and-restore-overview.md).

### Extending the OOB Save Orchestration Script

*Out of the box, the Save orchestration script only creates the saved sandbox, returns concrete resources to abstract if required, creates a clone of deployed Apps and creates an App in that saved sandbox that points to this clone. For details, see [Sandbox save logic](../../../portal/sandboxes/sandbox-workspace/save-sandbox.md).*

You can extend the OOB Save script to execute custom steps before or after the default sandbox save process takes place.

To do this, simply add your custom code before or after the line that executes the Save operation. For example, a Save orchestration script that sends a simple notification email when the Save operation completes:

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
import smtplib


sandbox = Sandbox()

sandbox.execute_save()

# code for sending email notification:
server = smtplib.SMTP('smtp.gmail.com', 587)

server.ehlo()
server.starttls()
server.ehlo()

#Next, log in to the server
server.login("<sender_username>", "<sender_password>")

#Send the mail
msg = "Sandbox was saved successfully"
server.sendmail("<sender_email>", "<target_email>", msg)
```

### Extending the OOB Restore Orchestration Script

You can also extend the OOB Restore script to execute custom functionality at any point during the default sandbox restore process. The Restore script is a part of the sandbox setup process, and actually replaces the setup. Out of the box, the setup and restore logic are identical. However, if you customized the Setup script and you want the same customized script to be launched when restoring a sandbox, you should customize the Restore script as well, as the Restore script is the one that is being launched in a restored sandbox’s setup phase. It is also possible to customize the Restore script to have a different logic than the Setup script, to create a logic that is relevant only for restored sandboxes. For detailed explanations on how to extend the script’s stages and use its extension methods, see the [Setup and Teardown Orchestration](../cs-oob-orch/index.md#setup-and-teardown-orchestration) section above. For deails about the OOB Restore script's operations, see [Restore a Saved Sandbox](../../../portal/sandboxes/saved-sandboxes/restore-saved-sandbox.md).
:::note
CloudShell does not support executing the Setup command directly via the Restore script using APIs, such as **ExecuteEnvironmentCommand** or **EnqueueEnvironmentCommand**.
:::
For example, a Restore script that writes a message to the **Output** console before the Restore workflow operation (to extend the workflow operation itself, use the extension methods in the [Extending the OOB Setup Orchestration Scripts](#extending-the-oob-setup-orchestration-scripts) section above):

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow


sandbox = Sandbox()

def func(sandbox, components):
    sandbox.automation_api.WriteMessageToReservationOutput(sandbox.id, "my custom message")

DefaultSetupWorkflow().register(sandbox)

sandbox.workflow.add_to_configuration(func, None)

sandbox.execute_restore()
```

As you can see, to use the default orchestration logic, we instantiated the *DefaultSetupWorkflow* class and registered the sandbox to use the default Setup orchestration behavior. Sandbox setup is divided into 4 stages: preparation, provisioning, connectivity and configuration. It’s possible to disable the default implementation of each stage by setting **enable\_stageName=False**, as illustrated in this example:

```python
DefaultSetupWorkflow().register(sandbox, enable_connectivity=False)
```

### Save/Restore Physical Resource Configurations Examples

In many cases, the sandbox's resources include configurations that apply to that sandbox specifically. Since physical resource configurations are not addressed in the out-of-the-box Save and Restore orchestration scripts, we will have to customize them as follows:

- Save script that:
    
    1. Creates a loop that runs `save` or `orchestration_save` on each physical resource in the sandbox.
    2. Gets each physical resource’s configurations (artifact names).
    3. Sets the “resource-artifact name” key pairs in the sandbox data.

- Restore script that uses this sandbox data to restore each resource to its saved configuration.

In the below examples, we used shell save/restore functions instead of `orchestration_save`/`orchestration_restore` for two reasons:

- Visual effect: `orchestration_save`/`orchestration_restore` are hidden functions. While they are running, there is no indication that anything is happening on the screen, while with shell save/restore functions, the user can see all physical resources spinning in the sandbox diagram and knows the action is taking place.
- Easy testing/debugging: While `orchestration_save`/`orchestration_restore` encapsulates functionality and data very nicely, and the json data is helpful, it's easier to test with save/restore of a demo version shell which simply passes on restore and returns a valid string on save.
:::tip
For a more in-depth look, click [here](/attachments/save-restore-physical-resources.zip) to download the script packages.
:::
**Save script (bundled with and called by orchestration\_save):**

```python
from cloudshell.api.cloudshell_api import InputNameValue
from cloudshell.api.cloudshell_api import SandboxDataKeyValue


def execute_save(self)
    """
    :return: bool True for pass, False for fail
    """
    inputs = list()
    inputs.append(InputNameValue(Name='folder_path', Value=self.backup_path))
    inputs.append(InputNameValue(Name='configuration_type', Value=self.config_type))
    inputs.append(InputNameValue(Name='vrf_management_name', Value=self.vrf_management))

    try:
        response = self.api_session.ExecuteCommand(reservationId=self.sandbox_id,
                                                   targetName=self.resource_name,
                                                   targetType='Resource',
                                                   commandName='save',
                                                   commandInputs=inputs)
        saved_artifact_info = response.Output
        saved_file = self.backup_path + saved_artifact_info
        # save the entire full path into sandbox data for restore to use, instead of relying on the
        # Backup Location of the resource which may change between this save and later restore
        d = SandboxDataKeyValue(Key=self.resource_name, Value=saved_file)
        self.api_session.SetSandboxData(self.sandbox_id, [d])
        message = 'Successfully saved {} config to {}'.format(self.resource_name, saved_artifact_info)
        message = '<div style="color: green; font-weight:bold">' + message + '</div>'
        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)

    except Exception as ex:
        message = '{}: {}'.format(type(ex).__name__, ex.message)
        message = '<div style="color:red;font-weight:bold">' + message + '</div>'
        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)
        return False

    return True
```

**Restore script (bundled with and called by orchestration\_restore):**

```python
from cloudshell.api.cloudshell_api import InputNameValue


def execute_restore(self):
    """
    :return: bool True for pass, False for fail
    """
    inputs = list()
    inputs.append(InputNameValue(Name='path', Value=self.config_file_path))
    inputs.append(InputNameValue(Name='configuration_type', Value=self.config_type))
    inputs.append(InputNameValue(Name='restore_method', Value=self.restore_method))
    inputs.append(InputNameValue(Name='vrf_management_name', Value=self.vrf_management))

    try:
        self.api_session.ExecuteCommand(reservationId=self.sandbox_id,
                                        targetName=self.resource_name,
                                        targetType='Resource',
                                        commandName='restore',
                                        commandInputs=inputs)

        message = 'Successfully restored base config of {}'.format(self.resource_name)
        message = '<div style="color: green; font-weight:bold">' + message + '</div>'
        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)

        if self.action in ['setup', 'restore']:
            self.api_session.SetResourceLiveStatus(self.resource_name, "Online", "Active")

        elif self.action == 'teardown':
            self.api_session.SetResourceLiveStatus(self.resource_name, "Offline", "Restored to base config")

    except Exception as ex:
        message = '{}: {}'.format(type(ex).__name__, ex.message)
        message = '<div style="color:red;font-weight:bold">' + message + '</div>'
        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)

        if self.action  in ['setup', 'restore']:
            self.api_session.SetResourceLiveStatus(self.resource_name, "Error", "Failed to restore to base config")

        return False

    return True
```