---
sidebar_position: 9
---

# Add an App to a Blueprint

**Description**: Add an app to an existing blueprint.

**Signature**: `add_app(topology_name, topology_app)`

**Parameters**:

<table>
<thead>
    <tr>
        <th>Name</th>
        <th>Direction</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>`topology_name`</td>
        <td>In</td>
        <td>Yes</td>
        <td>The name of the blueprint</td>
    </tr>
    <tr>
        <td>`topology_app`</td>
        <td>In</td>
        <td>Yes</td>
        <td>
Python object (TopologyApp) that defines the properties of the desired App to add
:::note Notes
<ul>
<li>
To set the App's properties, you can initialize the TopologyApp object and set the App's properties as they appear in CloudShell Portal's Apps management page, or load (into your API code) a blueprint package that contains the desired App to get the App’s context.
</li>
<li>
To specify the App's image, enter the full path to the image. For example:
```js
apps[0].appResource.imagePath = "C:\\temp\\Pictures\\app-image.jpg"
```
</li>
</ul>
:::
        </td>
    </tr>
</tbody>
</table>

**Sample**:

```javascript
packageEditor.add_app('TestTopology', topologyAppPythonObject)
```