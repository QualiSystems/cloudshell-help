---
sidebar_position: 1
---

# Add a Family

**Description**: Add a new family to the package.

When importing the package into CloudShell, if the family doesn’t exist, it will be created. Otherwise it will be modified.

**Signature**: `add_family(family_name, description, categories, connectable, admin_only, shared_by_default, service_family, searchable)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `family_name` | In | Yes | The name of the family that you want to create or modify |
| `description` | In | No | A short description of the family |
| `categories` | In | No | In case this family represents a family of services, specify the category for the family to be |
| `connectable` | In | Yes | Specify if the resources / services from this family can be connected to other resources / services |
| `admin_only` | In | Yes | Specify if the resources / services from this family can only be viewed by admins |
| `shared_by_default` | In | Yes | Specify if the resources / services from this family are shared with other users by default |
| `service_family` | In | Yes | Specify if this family represents a family of services |
| `searchable` | In | Yes | Specify if resources from this family appear in search results |


**Sample**:
```javascript
`packageEditor.add_family("Family1",'This is a test',[],True,True,False,False,False)`

`packageEditor.add_family("ServiceFamily1",'This is a test',[‘Cat1’,’Cat2/Sub1’], False, False,False,True,False)`
```