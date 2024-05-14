---
sidebar_position: 12
---

# Static VMs Overview

CloudShell supports modeling VMs which were not deployed by the CloudShell App feature and are not managed as part of the reservation life-cycle processes. This feature allows you to create a resource that represents the VM in CloudShell's inventory and associates it with the cloud provider resource so it will get the cloud provider shell's capabilities like power on, power off, connectivity etc. This is useful if the VM is too complex or time consuming to power on or off, or if the VM is always on and is not added or deleted from the cloud provider as part of the sandbox life cycle. For example, in VMs that maintain a database or a production server.

Unlike with CloudShell App VMs, the out-of-the-box Setup and Teardown processes do not automatically power static VMs on/off or connect/disconnect them. In addition, the **Delete** command that comes with the out-of-the-box cloud provider shells is not available for static VMs as they are not deployed by CloudShell.

In [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations), we have several static VM shells, such as the [vCenter Static VM](../../admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities.md#vcenter-static-vm) shell. You're welcome to use them if they address your needs, or create your own, as explained in the CloudShell Dev Guide's [Shells that Load a Static VM](../../devguide/reference/shells-that-load-static-vm.md).

## Related Topics

- [Resources in Blueprints](../../portal/blueprints/creating-blueprints/resources/)
- [Resources in Sandboxes](../../portal/sandboxes/sandbox-workspace/resources/)
- [Customizing App Deployment Types](../../admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types.md)