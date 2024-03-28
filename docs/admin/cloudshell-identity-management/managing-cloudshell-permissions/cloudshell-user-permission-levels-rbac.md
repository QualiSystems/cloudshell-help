---
sidebar_position: 1
---
# CloudShell User Permission Levels (RBAC)

<p>This article lists the different actions each user type can perform in CloudShell. In the tables below, supported actions are indicated in <span style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>green</span> while unsupported actions are <span style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>red</span>.</p>


For more information about group roles and access levels, see [Managing CloudShell Groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-Grp.htm).
:::note
In the tables below, "View Only access" indicates the permissible actions for users who are members of a group that is defined as **View Only** in the domain. For more information, see [Associating groups with a domain](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-Grp.htm#Associat).
:::
## Blueprints

The following table shows which actions are available for each CloudShell user type in a blueprint.

The permissible actions in a blueprint for users other than the blueprint owner are determined by a combination of the user type, group's role (regular, domain, external), and the group's access level (whether the group is defined as View Only in the current domain).
:::note
For brevity, the "Edit" action indicates the user type can create, edit and delete the element.
:::
\* indicates that the action is available to the blueprint owner

\*\* indicates that the option can be hidden from non-admin users with the `BlockPackageExportForNonAdmins` key

\*\*\* If the `<add key="OnlyAllowNewEnvironmentsFromTemplates" value="true"/>` key is defined on the server , users can only create blueprints from a template but not from scratch (empty blueprints). However, if there are no templates assigned to the domain, users of that domain cannot create new blueprints. For details, see [The + Create Blueprint Link is Missing From the Blueprint Catalog](https://help.quali.com/Online%20Help/0.0/Portal/Content/Troubleshooting/Create-blueprint-link-is%20missing.htm).

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System Administrator user</th>
      <th>Domain administrator user</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External</th>
      <th>Extended external</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**View the list of blueprints**</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
    </tr>
    <tr>
      <td>**View the blueprint diagram**</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
    </tr>
    <tr>
      <td>**Create blueprints**</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v ***</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v ***</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v ***</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v ***</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
    </tr>
    <tr>
      <td>**Edit blueprints**</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x *</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x *</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
    </tr>
    <tr>
      <td>**Reserve blueprints**</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
    </tr>
    <tr>
      <td>**Export blueprint packages**</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v **</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'black' }}>v **</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black' }}>x</td>
    </tr>
  </tbody>
</table>

## Sandboxes

The permissible actions in a sandbox are determined by a combination of the user type, group's role (regular, domain, external), and the group's access level (whether the group is defined as View Only in the current domain), and the current sandbox status.

### Permissible actions according to user type

The following table shows which actions are available for each CloudShell user type in a sandbox (applies to sandbox consumers that are neither Owner nor Permitted User in the sandbox). Note that sandboxes of other users in the domain can be hidden from regular users using the `ShowOtherUserInDomainReservations` key.

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System Administrator user</th>
      <th>Domain administrator user</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View the list of sandboxes</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View the sandbox diagram</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit the sandbox (form)</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Extend the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>End the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Delete the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Terminate the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Execute commands</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Interact with the sandbox during setup</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Launch applications</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Save sandbox as blueprint</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Save the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>

### Permissible actions for Owner/Permitted User

The following table shows which actions are available for the sandbox's owner or permitted users (users that were added by the sandbox owner to the sandbox as **Permitted Users**).

<table>
  <thead>
    <tr>
      <th>Sandbox actions</th>
      <th>Owner</th>
      <th>Permitted - regular</th>
      <th>Permitted - view only</th>
      <th>Permitted - external</th>
      <th>Permitted - extended external</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View the list of sandboxes</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View the sandbox diagram</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit the sandbox (form)</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Extend the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>End the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Delete the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Terminate the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Execute commands</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Interact with the sandbox during setup</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Launch applications</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Save sandbox as blueprint</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Save the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
  </tbody>
</table>

### Permissible actions according to sandbox status

The following table shows the available actions in a sandbox for each sandbox status.

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>Pending</th>
      <th>Setup</th>
      <th>Active</th>
      <th>Teardown</th>
      <th>Completed</th>
      <th>Overtime</th>
      <th>Saving</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View the list of sandboxes</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View the sandbox diagram</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit the sandbox (form)</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Extend the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>End the sandbox</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Delete the sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Terminate the sandbox</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Execute commands</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Interact with the sandbox during setup</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Launch applications</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Save the sandbox</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>

## Saved Sandboxes

The following table shows which actions are available for each CloudShell user type in a saved sandbox.

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System admin</th>
      <th>Domain admin</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External user</th>
      <th>Extended external user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Restore a saved sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Delete a saved sandbox</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View my saved sandboxes</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View list of all saved sandboxes</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>

## Job Scheduling dashboard

The following table shows which actions are available for each CloudShell user type in the **Job Scheduling** dashboard. Note that admins can allow regular users to edit and create suite templates using the `AllowRegularUsersToEditSnQ` key.
:::note
For brevity, the "Edit" action indicates the user type can create, edit and delete the element.
:::
<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System Administrator user</th>
      <th>Domain administrator user</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External/extended user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit suite template</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Customize suite template</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View execution reports</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Run suite template execution</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Extend suite template execution</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Stop suite template execution</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>AdHoc suite</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>

## Inventory dashboard

The following table shows which actions are available for each CloudShell user type in the Inventory dashboard.
:::note
For brevity, the "Edit" action indicates the user type can create, edit and delete the element.
:::
<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System Administrator user</th>
      <th>Domain administrator user</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External/extended user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View resources</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit resources</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Reserve resources</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Search within resources</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View abstract resource templates</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit abstract resource templates</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View services</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>

## Insight dashboard

If Sisense is configured to work with SSO from CloudShell, the first time a CloudShell user (any user role) logs in to **Insight**, a user is created in Sisense with **Viewer** permissions (CloudShell user must have an email). For designer or admin privileges, customize the user’s role in Sisense or contact [Quali Support](https://support.quali.com/).

For information about Sisense user permissions, see [Sisense Documentation](https://documentation.sisense.com/).

## Manage dashboard

The following table shows which actions are available for each CloudShell user type in the **Manage** dashboard. This only applies to system administrators and domain administrators as other user types cannot access this dashboard. Note that system admins can allow domain admins to manage drivers using the `HideDriversTabInManage` key.
:::note
For brevity, the "Edit" action indicates the user type can both view and edit the element.
:::
\*\* indicates that the user type can only access the element in their own domain.

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System Administrator user</th>
      <th>Domain administrator user</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External/extended user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Apps</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v **</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Categories</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Shells (See [Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Prmsn.htm?Highlight=CloudShell%20User%20Permission%20Levels%20(RBAC)#Shells) below)</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>View Licensing</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Domains</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v **</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Execution Servers</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit JavaScript Extension</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Blueprint Templates</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Scripts</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v **</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Edit Drivers</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v **</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>

## Shells

The following tables show which Shell management actions are available for each CloudShell user type.

### 1st Gen Shells

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System Administrator user</th>
      <th>Domain administrator user</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External/extended user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Import</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Modify (Resource Manager Client)</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>

### 2nd Gen Shells

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>System Administrator user</th>
      <th>Domain administrator user</th>
      <th>Regular user</th>
      <th>View-only access</th>
      <th>External/extended user</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Import</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Add custom attributes</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Upgrade</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Download from CloudShell</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold' }}>Delete</td>
      <td style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)' }}>v</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
      <td style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>x</td>
    </tr>
  </tbody>
</table>
