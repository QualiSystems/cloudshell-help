---
sidebar_position: 4
---

# Editing Apps in a Sandbox

The `EditAppsInReservation` API enables you to programmatically modify an App in a sandbox. Generally, the classic flow is to call this API using CloudShell Automation API during the **Preparation** phase of the setup script (before the **Provisioning** phase that deploys the Apps).

:::note Notes for EditAppsInReservation:
- Applies to undeployed Apps in the sandbox.
- Supported in CloudShell Automation API and TestShell API.
- All attributes in the deployment path must be specified with the desired values. Attribute values that are omitted in the API command will have empty values. In other words, your automation needs to read the existing values, copy them into the API request and modify the desired attributes as appropriate (see the example below).
- This API method does not support Configuration Management modifications, but you can use the Automation API's `ConfigureApps` method to update parameter values.
:::
## How it works

`EditAppsInReservation` accepts two parameters: reservation id and an "app details" object.

"app details" defines the modified App.

- In python, you define the App's details as part of your script, as shown in the next section.
- In TestShell API, you build the json in a text editor and copy it into a variable, which you define in the **TestShell API** step's `EditAppsInReservation` command. This json object mirrors the structure of the CloudShell Automation API object.

## The app details json

The json has several sections:

- App's general details like name, new name and description
- **AppDetails** section containing the App Resource attributes (User, Password, etc.), deployed App shell (**ModelName** parameter), **Driver** parameter is used for Apps based on 1<sup>st</sup> Gen cloud provider shells
- **DefaultDeployment** section defines the App's deployment path to use as well as the deployment attributes. As mentioned in the notes, all deployment path attributes must be specified, even ones you do not want to change.

```javascript
[
  {
    "Name": "vcenter test",
    "NewName": "new name test",
    "Description": "my description",
    "AppDetails": {
      "Attributes": [
        {
          "Name": "User",
          "Value": "Testshell Test User"
        }
      ],
      "Driver": null,
      "ModelName": "Generic App Model"
    },
    "DefaultDeployment": {
      "Name": "vcenter 110 - 2G - VMware vCenter Cloud Provider 2G.vCenter VM From Linked Clone 2G",
      "Deployment": {
        "Attributes": [
          {
            "Name": "VMware vCenter Cloud Provider 2G.vCenter VM From Linked Clone 2G.CPU",
            "Value": "6"
          }
        ]
      }
    }
  }
]
```

## Custom setup script example

Here's a [custom setup script](https://github.com/QualiSystemsLab/cloudshell-api-script-samples/tree/master/generic-orchestration-samples/setup/setup_edit_app_sample) from our community that demonstrates how to use this API.

This script has 3 files:

- `edit_apps.py` has two functions:
    - **edit\_target\_app\_in\_sandbox** modifies specific deployment attributes in a specific App in the sandbox.
    - **edit\_apps\_in\_sandbox** is a wrapper for the setup orchestration.
        
- `__main__.py` is the entry point to the setup script.
- `requirements.txt`

**edit\_apps.py:**

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.api.cloudshell_api import CloudShellAPISession, ApiEditAppRequest, AppDetails, DefaultDeployment, Deployment, \
    NameValuePair


def edit_target_app_in_sandbox(app_name, new_app_name, api, sb_id, target_deployment_attrs):
    """
    Function to replace specific deployment attributes on a specific app
    the target deployment attrs ignores namespacing and case sensitivity.
    This will work for the hdd and cpu attrs - [("hdd", "3"), ("cpu", "5")]
    :param str app_name:
    :param str new_app_name:
    :param CloudShellAPISession api:
    :param str sb_id:
    :param list target_deployment_attrs: example [("hdd", "3"), ("cpu", "5")]
    :return:
    """

    # guard clause
    if not target_deployment_attrs:
        return

    # find target app to modify
    apps = api.GetReservationDetails(sb_id, disableCache=True).ReservationDescription.Apps
    if not apps:
        return
    target_app_search = [app for app in apps if app.Name == app_name]
    if not target_app_search:
        return
    target_app = target_app_search[0]

    # copy over logical resource attributes
    new_resource_attrs = []
    for curr_attr in target_app.LogicalResource.Attributes:
        new_resource_attrs.append(NameValuePair(curr_attr.Name, curr_attr.Value))

    default_deployment = [x for x in target_app.DeploymentPaths if x.IsDefault][0]

    # copy over all deployment attributes, modify target attributes
    new_deployment_attrs_map = {}
    for curr_attr in default_deployment.DeploymentService.Attributes:
        for update_attr_name, update_attr_value in target_deployment_attrs:
            if curr_attr.Name.lower().endswith(update_attr_name.lower()):
                new_deployment_attrs_map[curr_attr.Name] = update_attr_value
                break

        if curr_attr.Name not in new_deployment_attrs_map:
            new_deployment_attrs_map[curr_attr.Name] = curr_attr.Value

    # build out app edit request
    new_deployment_attrs_list = [NameValuePair(x[0], x[1]) for x in new_deployment_attrs_map.items()]
    new_deployment = Deployment(new_deployment_attrs_list)
    app_details = AppDetails(ModelName=target_app.LogicalResource.Model,
                             Attributes=new_resource_attrs,
                             Driver=target_app.LogicalResource.Driver)
    new_default_deployment = DefaultDeployment(Name=default_deployment.Name, Deployment=new_deployment)
    app_edit_requests = [ApiEditAppRequest(Name=app_name,
                                           NewName=new_app_name,
                                           Description="",
                                           AppDetails=app_details,
                                           DefaultDeployment=new_default_deployment)]
    api.EditAppsInReservation(reservationId=sb_id, editAppsRequests=app_edit_requests)


def edit_apps_in_sandbox(sandbox, components):
    """
    :param Sandbox sandbox:
    :param components:
    :return:
    """
    api = sandbox.automation_api
    sb_id = sandbox.id
    APP_NAME = "TEST"
    NEW_NAME = "NATTI"
    target_deployment_attrs = [("hdd", "3"), ("cpu", "5")]

    edit_target_app_in_sandbox(app_name=APP_NAME,
                               new_app_name=NEW_NAME,
                               api=api,
                               sb_id=sb_id,
                               target_deployment_attrs=target_deployment_attrs)
```

**\_\_main\_\_.py:**

```python
from cloudshell.workflow.orchestration.sandbox import Sandbox
from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow
from edit_apps import edit_apps_in_sandbox

sandbox = Sandbox()

DefaultSetupWorkflow().register(sandbox)
sandbox.workflow.add_to_preparation(edit_apps_in_sandbox)

sandbox.execute_setup()
```

**requirements.txt:**

```javascript
cloudshell-orch-core>=3.4.0.0,<3.5.0.0
```
