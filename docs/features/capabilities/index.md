---
title: Managing Capability Sets in CloudShell
sidebar_label: Capability Sets
---

## Understanding Capability Sets in CloudShell

In Quali's CloudShell environment, user permissions are traditionally governed by roles assigned to user groups, such as system admins, domain admins, regular users, and external users. Each role comes with predefined permissions within specific domains.

### Role-Based Permissions

By default, roles dictate what actions users can perform within CloudShell. These permissions include accessing settings, managing execution servers, handling categories, viewing sandbox data, managing users and permissions, modifying resources and services within blueprints and sandboxes, and more.

### Introducing Capability Sets

However, to provide more granular control over permissions, CloudShell introduces Capability Sets. These sets allow administrators to define specific capabilities that either **ALLOW** or **DENY** actions beyond what roles permit. This flexibility enables organizations to tailor access rights precisely to their operational needs.

### Managing Capability Sets

Capability Sets can be managed through both the CloudShell API and the CloudShell Portal. In the portal, administrators navigate to **MANAGE > Permissions** to create new capability sets. Here, they can associate specific capabilities with these sets, specifying whether each capability is allowed or denied.

### Associating Capability Sets with User Groups

Administrators can then associate these Capability Sets with user groups. If multiple Capability Sets apply to a user group, the system prioritizes the most permissive settings for each capability.

### Example Capabilities

- **VIEW SETTINGS**: Access to the Manage page in CloudShell Portal.
- **VIEW EXECUTION SERVERS**: Access to Manage/Execution Servers.
- **VIEW_CATEGORIES**: Access to Manage/Categories.
- **VIEW_SANDBOX_DATA**: Access to sandbox data in CloudShell Portal.
- **MANAGE_USERS_PERMISSIONS**: Ability to manage Capability Sets and Roles.
- **ADD_REMOVE_BLUEPRINT_RESOURCE**: Add or remove resources from blueprints.
- **ADD_REMOVE_SANDBOX_RESOURCE**: Add or remove resources from sandboxes.
- **ADD_REMOVE_BLUEPRINT_ABSTRACT_RESOURCE**: Modify abstract resources in blueprints.
- **ADD_REMOVE_SANDBOX_ABSTRACT_RESOURCE**: Modify abstract resources in sandboxes.
- **ADD_REMOVE_BLUEPRINT_SERVICE**: Add or remove services from blueprints.
- **ADD_REMOVE_SANDBOX_SERVICE**: Add or remove services from sandboxes.
- **UPDATE_WORK_ORDER**: Make changes to work orders.
- **VIEW_WORK_ORDER**: View work orders within sandboxes.
- **UNSOLVE_SANDBOX_ABSTRACT**: Modify abstract matches in sandboxes.

## Conclusion

Capability Sets in CloudShell provide a powerful tool for fine-tuning user permissions, ensuring that organizations can manage access rights precisely according to their operational requirements. By allowing specific overrides to role-based permissions, Capability Sets empower administrators to tailor operations to their organization's needs.
