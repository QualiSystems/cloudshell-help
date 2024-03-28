---
sidebar_position: 4
---

# Managing CloudShell Groups

## Adding groups

There are various ways to define CloudShell groups:

- Create groups manually by adding new groups via the **Groups** tab.
- Build a driver to import groups from a file and automatically specify the domain access for each group.
- Use TestShell APIs.

**To add a new group manually:**

1. Click the **Admin** tab's **Groups** icon.

    ![](/Images/Admin-Guide/User-Management/GroupsButton.png)

2. In the **Groups** tab, click the **New** button in the **Groups** list pane toolbar.

    [![](/Images/Admin-Guide/User-Management/GroupsTabUsersTabAddButton_thumb_0_48.png)](https://help.quali.com/Online%20Help/0.0/Portal/Content/Images/Admin%20Guide/User%20Management/GroupsTabUsersTabAddButton.png)

3. In the **New Group** window, enter the name and description, and select a role for the new group.
    
    - **Domain admins** can access all domain assets, create inventory resources and apps, and perform administrative tasks in the domain via CloudShell Portal's **Manage** dashboard.
    - **Regular users** are the default role for new groups. Regular users can access and use public blueprints in their domain and become owners of blueprints, which allows them to modify the blueprint’s properties and elements.
    - **External users** are very limited users that can view blueprints but not use them. They can view and export public blueprint diagrams but cannot create or modify blueprints and sandboxes. Using the `ExternalUserHasExtendedPermissions` configuration key, external user permissions can be extended to allow them to see blueprint resource structures and commands and reserve blueprints.
    :::note
    System administrators are defined per user in the user's profile. For additional information, see [Managing CloudShell Users](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-Usr.htm).
    :::
  
    ![](/Images/Admin-Guide/User-Management/NewGroupWindow1.png)  
    :::note
    To edit an existing group's details, in the Groups tab, double click the desired group  
    :::
4. Click **OK** to add the new group.

## Adding users to groups

The System Administrator grants user permissions by adding users to groups.

Users can be added to several groups.

**To add users to a group:**

1. Select the target group from the list in left pane.
2. Select the **Users** tab.  

    [![](/Images/Admin-Guide/User-Management/GroupsTabGroupListNamesPane_thumb_0_48.png)](https://help.quali.com/Online%20Help/0.0/Portal/Content/Images/Admin%20Guide/User%20Management/GroupsTabGroupListNamesPane.png)

3. Click the **Add** button to open the **Users Selection** window.

    [![](/Images/Admin-Guide/User-Management/UsersSelectionWindow1_thumb_0_48.png)](https://help.quali.com/Online%20Help/0.0/Portal/Content/Images/Admin%20Guide/User%20Management/UsersSelectionWindow1.png)

4. Select users from the list and click **OK** to add them to the group.
    
    Multi-selection is supported.
    
    Use the Search field to search for specific users.
    

## Removing users from a group

**To remove a user from the group:**

- Select the user in **Users** list and click the **Remove** button.
    
    [![](/Images/Admin-Guide/User-Management/GroupsTabUsersTabRemoveButt_thumb_0_48.png)](https://help.quali.com/Online%20Help/0.0/Portal/Content/Images/Admin%20Guide/User%20Management/GroupsTabUsersTabRemoveButt.png)
    

## Associating groups with a domain

Associating a group with a specific domain provides users of that group with access to all resources and blueprints associated with that domain.

Groups can be added to multiple domains:

- Group access to a domain can be either active or view only.
- Group access to a domain is specific to that domain.
- Group access to a domain can be configured via the group's **Domains** tab or via the domain's **Groups** tab.

Here are some options for setting up view only domains:

- Assign a group to an active domain where users can reserve resources and perform resource operations. Add the group to all the other domains - or to the Global domain - on a view-only basis.
- Allocate groups to domains to support current work-flow processes. Limit user access to lab equipment by selectively add groups to domains on a view-only basis.
- Associate all groups with the global domain, allowing all users full access to the entire lab.
:::note
A user can be a member of multiple groups and thus have multiple roles and permissions. If a user has more than one role in a domain, the user’s permissions in the domain are determined according to the most privileged role.
:::
**To associate groups with a domain:**

1. Click the **Admin** tab's **Domains** icon to open the **Domains Explorer** window.
    
    ![](/Images/Admin-Guide/User-Management/DomainsButton.png)
    

2. In the **Domains Explorer**, double-click a domain or right-click a domain and choose **Open** from the context menu to open the domain's tab.
3. Click the **Groups** tab.
4. Click the **Add** button to select the groups.
5. In the **Groups Selection** window, select the groups that you wish to associate with the domain.
6. Specify the permissions level for each selected group. Check the **View Only** checkbox if you wish to grant view-only access to that group.
7. Click **OK** to add the selected groups.

## Removing groups from a domain

**To remove groups from the domain**:

1. Click the **Admin** tab's **Domains** icon to open the **Domains Explorer** window.
    
    ![](/Images/Admin-Guide/User-Management/DomainsButton.png)
    

2. In the **Domains Explorer**, double-click a domain or right-click a domain and choose **Open** from the context menu to open the domain's tab.
3. Open the **Properties** page from the **Page** drop down.
4. Click the **Groups** tab.
5. Select the groups that you wish to remove and click the **Delete** button.
