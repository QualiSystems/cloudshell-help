---
sidebar_position: 1
---

# CloudShell Automation API

The **CloudShell Automation API** package is the recommended way to automate CloudShell from Python scripts and drivers, for example, to get more information or perform more operations using CloudShell.

The CloudShell Automation API package is installed in the Python environment installation directory upon pip installation, in the following file location in your local directory: `...\python\2.7.18\Lib\site-packages\cloudshell\`.

The CloudShell Automation API package includes the following API modules for use with Python scripts and drivers:

- **cloudshell\_api.py**: allows you to use the CloudShell API from Python.
- **common\_cloudshell\_api.py**: is a helper file required to run methods from **cloudshell\_api.py**.
- **cloudshell\_scripts\_helpers.py**: provides a convenient way to initialize the CloudShell API and get blueprint variables in your script.
- **cloudshell\_dev\_helpers.py**: allows developers to run and debug their code on their local machine as if their scripts are running in CloudShell.

The CloudShell Automation API reference documentation comes in two versions:

The Python package [API guide](pathname:///api-docs/latest/Python-API/) includes additional information like class structure and return objects and is intended for experienced Python developers, while the [TestShell API Python Reference Guide](pathname:///api-docs/latest/TestShell-API/TestShell%20Python%20API.html) is intended for developers who are newer to Python, as it features an easy to understand format and code examples.

:::note
CloudShell Automation API uses UTC timezone by default, but you can change to a different timezone using the [CloudShellAPISession](pathname:///api-docs/latest/Python-API/cloudshell.api.html#cloudshell.api.cloudshell_api.CloudShellAPISession).
:::

For information about installing Python and pip, and for further information about using Python scripts and drivers, see [The CloudShell DevGuide](../../devguide/index.md).

## New API Methods

### UndeployApps *(Added in CloudShell 2024.1)*

The `UndeployApps` method removes an App's deployed instance from the cloud provider while keeping the CloudShell resource intact. This is useful in bulk deletion scenarios where you want to batch delete-instance commands on the cloud provider side rather than tearing down each App individually.

**Method signature:**

```python
session.UndeployApps(reservationId, appNames)
```

| Parameter | Description |
| --- | --- |
| `reservationId` | The ID of the sandbox containing the Apps. `(string)` |
| `appNames` | A list of App names to undeploy. `(list of strings)` |

:::note
After calling `UndeployApps`, the App resources remain in the sandbox in an "undeployed" state and can be re-deployed later if needed.
:::

### RemoveEntitiesFromTopology *(Added in CloudShell 2025.1)*

The `RemoveEntitiesFromTopology` method programmatically removes services and abstract resources from a topology (blueprint). This enables automation of blueprint management workflows.

**Method signature:**

```python
session.RemoveEntitiesFromTopology(topologyFullPath, entityNames)
```

| Parameter | Description |
| --- | --- |
| `topologyFullPath` | The full path of the topology/blueprint. `(string)` |
| `entityNames` | A list of entity names (services or abstract resources) to remove from the topology. `(list of strings)` |

:::note
This method only removes services and abstract resources. Physical resources connected to the blueprint must be removed using other methods.
:::