# CloudShell Identity Management

Users can be created within CloudShell, or imported from an active directory or LDAP server. In addition, CloudShell allows integration with an SSO solution to allow your users to access CloudShell from your company's home page.

CloudShell user permissions are determined by the role (e.g. domain admin, regular user) assigned to the user's group, while access to the system's existing blueprints, sandboxes, resources and Apps is provided through the user's domain. Groups are associated to domains, thereby providing domain access to the group's users. A user can be associated to multiple groups, each with a different role and associated to a different domain, essentially enabling the same user, for example, to log in as a regular user in "Domain A" and as a domain admin in "Domain B".

:::note
Additional permissions like creating CloudShell blueprints and extending external user permissions require the use of configuration keys.
:::

## Related Topics

    - [Managing Users](../../admin/cloudshell-identity-management/managing-users/index.md)
    - [Managing CloudShell Permissions](../../admin/cloudshell-identity-management/managing-cloudshell-permissions/index.md)
    - [Access Control and Authentication](../../admin/cloudshell-identity-management/access-control-and-authentication/index.md)