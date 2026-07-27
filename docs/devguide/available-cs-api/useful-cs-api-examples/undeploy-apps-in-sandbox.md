---
sidebar_position: 7
---

# Undeploying Apps While Keeping the Resource

The `UndeployApps` API removes a deployed App from the cloud provider (it destroys the virtual machine) while **keeping the App's CloudShell resource** in place. This is different from deleting an App, which both destroys the VM on the cloud provider *and* removes the resource from CloudShell.

The main use case is **bulk teardown**. When you need to clean up many deployed Apps, you can call `UndeployApps` first to destroy all the cloud-provider VMs in one request, and only then remove the CloudShell resources. Batching the cloud-provider deletes up front means the subsequent resource delete has much less work to do per resource, so it runs faster and more reliably.

:::note Notes for UndeployApps:
- Applies to deployed Apps. Only deployed App resources (Apps that have a VM on the cloud provider) are acted on; other resources passed in are ignored.
- The App's CloudShell resource is **not** removed. Only the cloud-provider VM is destroyed and its VM reference cleared.
- Supported in CloudShell Automation API and TestShell API.
- This is a potentially long-running call. The API client sets a two-hour operation timeout for it, so it is safe to pass many Apps in a single request.
:::

## How it works

`UndeployApps` accepts a single parameter:

- **resourcesFullPath** (`string[]`, mandatory) - a list of resource names. You can also include the full path from the root to the resource before the resource name, separated by slashes, for example `FolderName/ResourceName`.

There is no reservation id parameter - the resources are identified by name or full path.

For each resource in the list that is a deployed App, CloudShell runs the App's **Destroy** operation on the cloud provider and then clears the VM reference from the resource. The CloudShell resource itself remains, so anything that references it (routes, connectors, attributes) stays intact.

If one or more Apps fail to be destroyed on the cloud provider, the call fails and reports the names of the Apps that could not be removed.

### Contrast with deleting Apps

- `UndeployApps` - destroys the cloud-provider VM and clears its VM reference. **The resource is kept.**
- Deleting an App (for example, via the delete flow that removes the resource from the inventory) - destroys the cloud-provider VM **and** removes the resource from CloudShell.

Use `UndeployApps` when you want to release cloud infrastructure but keep the CloudShell resource, or as the fast first pass in a bulk teardown before you delete the resources themselves.

## Python CloudShell Automation API example

The following example starts an API session, finds the deployed Apps you want to tear down, and undeploys them in a single bulk call. Because `UndeployApps` only clears the cloud-provider VMs, a real teardown flow would follow it with `DeleteResources` to remove the CloudShell resources.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

# start session
user = "admin"
password = "admin"
server = "localhost"
domain = "Global"
api = CloudShellAPISession(host=server, username=user, password=password, domain=domain)

# the deployed Apps you want to remove from the cloud provider.
# each item is a resource name, optionally prefixed with its folder path.
apps_to_undeploy = [
    "Web Server 1",
    "Web Server 2",
    "MyFolder/DB Server 1",
]

# bulk pass 1: destroy all the cloud-provider VMs, keep the CloudShell resources
api.UndeployApps(resourcesFullPath=apps_to_undeploy)

# bulk pass 2 (optional): now delete the (already-undeployed) resources from CloudShell.
# because the VMs are already gone, this pass is faster and more reliable.
api.DeleteResources(resourcesFullPath=apps_to_undeploy)
```

If you only want to release the cloud infrastructure and keep the resources in CloudShell, omit the second `DeleteResources` call.
