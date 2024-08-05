---
sidebar_position: 1
---

# Configuring CloudShell to Automatically Import Active Directory Users on First Login

This article explains how to configure CloudShell to automatically import users from an active directory (or LDAP) when they log in to CloudShell for the first time, and associate the imported users to the appropriate group. Note that the passwords of imported users are managed by the directory service provider itself.

**To configure CloudShell to auto-import users on first login:**

1. Make sure Quali Server is running using a Microsoft login account with access to the appropriate active directory domain.
    :::note
    The account is displayed in the **Windows Windows Services** window, in the **Properties** of the Quali Server service, in the **Log On** tab.
    :::
2. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following keys:
    
    | Key | Description |
    | --- | --- |
    | ActiveDirectory.Domain | This key sets the active directory domain containing the users you want to allow into CloudShell. Specify the active directory domain as the value. For example, setting an active directory domain called "Router\_UK":<br/>\<add key="ActiveDirectory.Domain" value="Router\_UK"/\><br/>**Prerequisite:** The computer that will be used to import the users must be in your corporate domain. |
    | ExternalUserManagement.AutoImportUser | Add this key to enable CloudShell to automatically import users from an active directory or LDAP when they log in to CloudShell for the first time.<br/>\<add key="ExternalUserManagement.AutoImportUser" value="True"/\> |
    | Registration.AdditionalGroup | When added automatically (at login), users imported from an active directory or LDAP will be added to the Group that is defined in this key.<br/>For example, setting the "Regular Users" group for imported users:<br/>\<add key="Registration.AdditionalGroup" value="Regular Users"/><br/>The default group is **External Users**.<br/>**Important:** The Group must be associated with a domain. |
    
3. Save the file.
4. Restart the **Quali Server** service.
