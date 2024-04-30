---
sidebar_position: 11
---

# VM is not Powered off at the End of a Reservation

## Description

The VM is not automatically powered off by CloudShell at the end of the sandbox.

## Possible Causes

- Your VM is a static VM.
    
    You can load a VM that exists in a vCenter Server (i.e. a static VM) into CloudShell, allowing CloudShell users to interact with it. Static VMs behave differently from Apps, whose VMs are deployed and torn down by CloudShell. Static VMs are always online because they are commonly used as shared resources and therefore CloudShell's default teardown script does not tear them down automatically when the sandbox ends.
    
- Your blueprint's teardown operation is not configured correctly.
- Your sandbox's teardown operation was not executed correctly. For example, teardown execution was stopped prematurely or didn't start due to a bad network connection, power outage or an issue with the execution server responsible for running the teardown operation.

## Solution

**To power off a static VM:**

If the VM does not need to be online at all times, use an App whose VM lifecycles are managed by CloudShell, or modify the teardown script to power off the Static VM.

:::note
To support this modification, the generic vCenter Static VM shell includes the **Auto Power Off** attribute. This attribute is not used in this shell so you will need to implement it. See [CloudShell's OOB Orchestration](../../devguide/develop-orch-scripts/cs-oob-orch/index.md).
:::

**To ensure that blueprint teardown operations are configured correctly, in the blueprint's Properties, verify the following:**

- The correct teardown script is associated with the blueprint.
    
    If the blueprint is using a custom teardown script, make sure it is configured to power off the App's VMs.
    
- The **Estimated teardown duration** property is not set to 0 minutes.

**To troubleshoot teardown execution issues:**

- Check the sandbox's [Activity Feed Pane](../../portal/sandboxes/sandbox-workspace/system-messages/activity-feed-pane.md) for teardown execution issues and fix accordingly.
    

## Related Topics

- [Static VMs Overview](../../intro/features/static-vms.md)
