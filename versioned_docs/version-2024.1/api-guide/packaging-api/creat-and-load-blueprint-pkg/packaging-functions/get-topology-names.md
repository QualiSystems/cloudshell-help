---
sidebar_position: 4
---

# Get Topology Names

**Description:** Retrieve the list of blueprint names in the loaded package. The returned names are used in other functions as the blueprint identifiers.

**Signature:** `get_topology_names()`

**Parameters:**

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
|  | Out |  | The list of blueprints that exist in the loaded package. |

**Sample:**

```javascript
`packageEditor.get_topology_names()`
```

```javascript
`output: ['TestEnvironment1']`
```
