---
sidebar_position: 8
---

# Save Sandbox Configurations

The CloudShell **Save and Restore** paid add-on has a number of administrative elements that are important to the proper usage of this feature.

## Save and restore license

**Save and Restore** is a paid add-on. For details, contact your account manager.

## Set the maximum number of saved sandboxes for a particular user

**To set the maximum number of saved sandboxes for a particular user:**

- See [Adding new users manually](../../cloudshell-identity-management/managing-users/managing-cloudshell-users.md#adding-new-users-manually).
    
    \- or
    
- Use the **UpdateUserLimitations** method in the CloudShell Automation API. For more information visit the [CloudShell API Overview](../../../api-guide/cs-api-overview.md).

## Set the default maximum number of saved sandboxes for CloudShell users

By default, users are allowed to save as many sandboxes as they require. This is done using the `DefaultUserMaxSavedSandboxes` key. This key applies only to new users or users created in a CloudShell version prior to 9.0 that are migrated for the first time. The default value is empty (unlimited).
:::note
Admins can override the default for specific users in **Resource Manager Client**.
:::
**To set the default maximum number of saved sandboxes:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, add the following key and set the value:
    
    `<add key="DefaultUserMaxSavedSandboxes" value="2"/>`
    
2. Save the file.
3. Restart the **Quali Server** service.

See [Advanced CloudShell Customizations](./advanced-cloudshell-customizations.md) for additional information on the `DefaultUserMaxSavedSandboxes` configuration key.

## Enable save in a blueprint

You can only save a sandbox if its blueprint has the **Enable Sandbox Save** check box enabled.

**To save a sandbox and later restore it, you must configure certain blueprint properties (General page):**

- In the **Save Sandbox** area, ensure that the **Enable Sandbox Save** is checked.
- In the **Scripts** area, ensure that **Default Sandbox Save** and **Default Sandbox Restore** scripts are included in the blueprint properties.

For more information, see [Add save and restore orchestration scripts](../../../portal/blueprints/creating-blueprints/blueprint-properties/configure-orchestration.md#add-save-and-restore-orchestration-scripts).

## vCenter/OpenStack advanced saving configurations

Several **Snapshot management** permissions are required on the role of the vCenter user defined in the cloud provider resource (See [Required vCenter User Permissions per Deployment Type](../../supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type.md)). For OpenStack, the save process is a bit different as the shell creates a snapshot of the App and it'll be located in the Image section in the OpenStack web portal.

The following configurations can be made on vCenter cloud provider resources or App templates. Configurations made on an App template will override the vCenter cloud provider resource configuration and the settings will apply only to that specific App.

- **Behavior during save**: The VM's state while the sandbox is being saved. Options are **Remain Powered On** (default) and **Power Off**.
- **Saved Sandbox Storage**: During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox.

For more information see [Add VMware vCenter Cloud Provider Resource](../../supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource.md) and [Adding App templates](../../cloudshell-manage-dashboard/manage-app-templates/index.md#adding-app-templates).

## Extending save and restore blueprint scripts

See the CloudShell Dev Guide's [Save and Restore Orchestration](../../../devguide/develop-orch-scripts/cs-oob-orch/index.md#save-and-restore-orchestration) to learn more about how to extend save and restore blueprint scripts.
