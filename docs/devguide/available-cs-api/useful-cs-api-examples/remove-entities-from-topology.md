---
sidebar_position: 8
---

# Removing Entities from a Topology

The `RemoveEntitiesFromTopology` API enables you to programmatically remove elements from a topology (blueprint), including services and abstract resources. This is useful when you want to automate cleanup or restructuring of a blueprint's contents from outside CloudShell, for example as part of a maintenance script that trims obsolete services or abstract resources from a set of blueprints.

:::note Notes for RemoveEntitiesFromTopology:
- The topology is identified by its **name**, and the entities to remove are identified by their **ids**.
- Removing an entity also removes anything associated with it in the blueprint diagram, such as the routes and connectors attached to it.
- When you remove a root abstract resource, its child abstract resources are removed along with it.
:::

## How it works

`RemoveEntitiesFromTopology` accepts two parameters:

- `topologyName` (string) - the name of the topology (blueprint) to remove entities from.
- `entityIds` (list of strings) - the ids of the entities to remove. Each id is the entity's unique identifier within the topology.

You can mix entity types in a single call - for example, remove one or more services together with one or more abstract resources in the same request.

To build the `entityIds` list, you first need to obtain the ids of the entities you want to remove. You can get these from the blueprint's details when you query it through the API.

## Python example

The following script starts an API session, finds the ids of the entities to remove from a blueprint, and calls `RemoveEntitiesFromTopology`.

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

# add credentials
user = "admin"
password = "admin"
server = "localhost"
domain = "Global"

# start session
api = CloudShellAPISession(host=server, username=user, password=password, domain=domain)

topology_name = "MyTopology"

# the ids of the service and abstract resource entities to remove from the blueprint
entity_ids = [
    "3f2504e0-4f89-41d3-9a0c-0305e82c3301",
    "9a0c0305-e82c-4f89-41d3-3f2504e04f89",
]

# remove the entities from the topology
api.RemoveEntitiesFromTopology(topologyName=topology_name, entityIds=entity_ids)
```
