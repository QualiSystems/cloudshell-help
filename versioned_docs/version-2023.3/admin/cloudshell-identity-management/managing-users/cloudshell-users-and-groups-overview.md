---
sidebar_position: 1
---

# CloudShell Users and Groups Overview

User permissions in CloudShell are based on the user's group memberships. The System Administrator grants user permissions by adding users to groups.

Each group in the system is assigned with a group role. The group role defines the permissions for all the users added to the group.

The available group roles are:

- System admins
- Domain admins
- Regular users – default role for new group.
- External users

The group with System admins role is created by the system, the group role can not be changed. only one group can hold the System admins role. the group contains the admin user.

Any user can be added or removed from the group, with the exception of the admin user. The admin user is added by default and cannot be removed from the group.

All group roles, except for the system administrator, can be changed at any time.

**To allow a user to perform admin operations:**

- Specify the user as a system administrator when creating the user, or use the **Groups** tab to add the user to the System Administrators group.

**To prevent users from performing admin operations:**

- Create one or more groups, assign a role other than admins to these groups and add CloudShell users to these groups.
    :::note
    User and group settings are common to all CloudShell applications.
    :::

**Adding CloudShell users**

There are various ways to create CloudShell users:

1. Add users manually
2. Import users from the Active directory, a CSV file, or a list
3. Build a driver to import users from a CSV file and automatically add them to groups
4. Using TestShell API
