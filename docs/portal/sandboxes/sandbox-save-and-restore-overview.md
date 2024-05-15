---
sidebar_position: 5
---

# Sandbox Save and Restore Overview

This article introduces the **Save and Restore** paid add-on, which enables you to save an active sandbox and later restore the saved sandbox to work on.

This feature only supports sandboxes with virtual vCenter/OpenStack components, physical resources and CloudShell services. Persistent sandboxes and sandboxes that include Apps based on other cloud service providers are not yet supported.

The **Save and Restore** add-on is part of the Sandbox Lifecycle initiative, which will be expanded in the future to include additional flows and use cases.

## What is a saved sandbox?

When saving an active sandbox, CloudShell creates a complete copy of the sandbox and its components. CloudShell services and resources are copied as is. If the sandbox contains deployed vCenter/OpenStack Apps, CloudShell creates (in the vCenter or OpenStack server), all the artifacts that will be required to restore the VMs. The saved sandbox is an independent copy of the original sandbox, and can be restored to multiple sandboxes. When deleting a saved sandbox, CloudShell deletes (from the vCenter or OpenStack server) all artifacts related to that saved sandbox and only then deletes the saved sandbox artifacts from CloudShell.

For example, if you finished working on a sandbox, and would like to continue working on it later on, you can save the sandbox and return to it without losing any of your work.

In addition, if you are working on a sandbox and would like to create a backup before committing a major change, you can save the sandbox, continue working and restore the backup when needed.

## Restore and delete saved sandboxes

From the **My Saved Sandboxes** dashboard, you can view your saved sandboxes, and restore and delete a saved sandbox.

## Save and restore license

Since **Save and Restore** is a CloudShell paid add-on, you are required to purchase a dedicated license (SaveRestore) to benefit from these capabilities. Please contact your account manager for details.

## Recommended workflow

1. Enable Save and Restore in a blueprint. See [Define the Blueprint's Properties](../blueprints/creating-blueprints/blueprint-properties.md).
2. [Reserve a blueprint from the Catalog](../blueprints/blueprint-catalog.md#reserve-a-blueprint-from-the-catalog)
3. [Save a Sandbox](./sandbox-workspace/save-sandbox.md)
4. Manage saved sandboxes in the [Saved Sandboxes Dashboard](./saved-sandboxes/index.md)
    1. [Restore a Saved Sandbox](./saved-sandboxes/restore-saved-sandbox.md)
    2. [Delete a Saved Sandbox](./saved-sandboxes/delete-saved-sandbox.md)

## Configuration and administration process

This feature does not require any specific configuration other than obtaining a license from your account manager.

You can customize and manage certain aspects of the save and restore flow. For example, the admin can define the max saved sandboxes per user and configure certain aspects of the saving action in vCenter. The save and restore action logic is defined in orchestration scripts, similar to setup and teardown. These scripts can be customized according to your needs.

## Related Topics

- [Save Sandbox Configurations](../../admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations.md)
- [Extending save and restore blueprint scripts](../../admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations.md#extending-save-and-restore-blueprint-scripts)