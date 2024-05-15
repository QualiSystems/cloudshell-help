---
sidebar_position: 10
---

# VM is not Powered on at the Start of a Reservation

## Description

When starting the sandbox, the setup orchestration doesn't automatically power on the VM.

## Possible Causes

- Your VM is a static VM.
    
    You can load a VM that exists in a vCenter Server (i.e. a static VM) into CloudShell, allowing CloudShell users to interact with it. Static VMs behave differently from Apps, whose VMs are deployed and powered on by CloudShell. Static VMs are always online because they are commonly used as shared resources and therefore CloudShell's default setup script does not deploy and power them on automatically when the sandbox is reserved. However, if the static VM is powered off, you will need to manually power it on in the sandbox.
    
- Your sandbox's blueprint is not configured to deploy App VMs.

## Solution

**To power on a static VM:**

1. In the sandbox, hover over the static VM and select **Commands** from the context menu.
2. In the **Commands** pane, click **Deploy**.

**To configure your blueprint to deploy App VMs:**

- Configure your **Setup** script to deploy Apps, see [Use scripts to set up and tear down blueprints](../../portal/blueprints/creating-blueprints/configure-orchestration.md#use-scripts-to-set-up-and-tear-down-blueprints)

## Related Topics

[Static VMs Overview](../../intro/features/static-vms.md)
