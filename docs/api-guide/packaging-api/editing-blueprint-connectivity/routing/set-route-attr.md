---
sidebar_position: 4
---

# Set a Route's Attributes

**Description**: Set the value for an attribute on the route's L1 ports. The attribute is specified by the route’s alias and attribute name. Note that this action sets the attribute value on the actual L1 resource ports.

**Signature**: `set_route_attribute(topology_name, route_alias, attribute_name, target, attribute_value)`

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
        <td>`route_alias`</td>
        <td>In</td>
        <td>Yes</td>
        <td>Specify the route’s alias.</td>
    </tr>
    <tr>
        <td>`attribute_name`</td>
        <td>In</td>
        <td>Yes</td>
        <td>Specify the attribute name that you want to add / update, only attributes that have the rule **Link Configurations** can be used as route attributes</td>
    </tr>
    <tr>
        <td>`target`</td>
        <td>In</td>
        <td>Yes</td>
        <td>
Specify on which resources to apply the attribute changes:
<ul>
<li>
**Source** refers to the L1 resource connected to the source endpoint of the route
</li>
<li>
**Target** refers to the L1 resource connected to the target endpoint of the route
</li>
<li>
**All** encompasses all of the route's L1 resources
</li>
</ul>
        </td>
    </tr>
    <tr>
        <td>`attribute_value`</td>
        <td>In</td>
        <td>Yes</td>
        <td>Specify the value to set on the attribute</td>
    </tr>
</tbody>
</table>

**Sample**:

```javascript
packageEditor.set_route_attribute(‘environment1’, 'alias', 'type', 'All', 'auto connection')
```