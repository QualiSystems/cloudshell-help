---
sidebar_position: 4
---

# LDAP Integration

The integration of an LDAP server with CloudShell enables LDAP users to log in to CloudShell Portal with their credentials, without having to be imported manually into the **Resource Manager** users list. The import is done automatically when the user logs in to the portal.
:::tip
CloudShell provides additional user authentication options, including Active Directory, SSO and JWT. However, if possible, consider using Active Directory for user authentication as it features a simple configuration process. For additional information, see [Active Directory Integration](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/AD-Intg.htm).
:::

## Enabling secure LDAP (LDAPS)

This procedure configures LDAP users to access CloudShell over SSL.

**To enable LDAP to run in SSL mode:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
2. Copy the following keys to the file:
    
    ```javascript
    <add key="LDAP.IsLDAPS" value="true"/>
    <add key="LDAP.AuthType" value="1"/>
    <add key="LDAP.Timeout" value="600"/>
    <add key="LDAP.CheckCertificate" value="false"/>
    ```
    
3. Set the key values according to your LDAP server configurations:
    
    <table>
        <thead>
            <tr>
                <th>Key</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>&lt;add key="LDAP.IsLDAPS" value="true"/&gt;</td>
                <td><strong>true</strong> enables LDAPS mode.</td>
            </tr>
            <tr>
                <td>&lt;add key="LDAP.AuthType" value="1"/&gt;</td>
                <td>
                    Determines how to authenticate Active Directory users in CloudShell. Possible values are:
                    <table style={{ width: '100%', border: 'none' }}>
                        <tbody>
                            <tr style={{ border: 'none' }}>
                                <td style={{ width: '50%', border: 'none' }}>
                                    <p>**0** - Anonymous</p>
                                    <p>**1** - Basic</p>
                                    <p>**2** - Negotiate</p>
                                    <p>**3** - Ntlm</p>
                                    <p>**4** - Digest</p>
                                </td>
                                <td style={{ width: '50%', border: 'none' }}>
                                    <p>**5** - Sicily</p>
                                    <p>**6** - Dpa</p>
                                    <p>**7** - Msn</p>
                                    <p>**8** - External</p>
                                    <p>**9** - Kerberos</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>&lt;add key="LDAP.Timeout" value="600"/&gt;</td>
                <td>Timeout period, in seconds. If the system does not respond within this period, an error is displayed.</td>
            </tr>
            <tr>
                <td>&lt;add key="LDAP.CheckCertificate" value="false"/&gt;</td>
                <td>
                    Determine whether to validate the given SSL certificate against the local store.<br/>Default is <strong>false</strong>.
                </td>
            </tr>
        </tbody>
    </table>

    :::important
    In addition, you will need to set the `LDAP.Port` key to **636**. This is covered in the following section.
    :::
4. Save the file.
5. Proceed to register LDAP users in CloudShell below. If you already registered your LDAP users in CloudShell, restart the **Quali Server** service to apply the changes.

## Registering LDAP users in CloudShell

This procedure requires good working knowledge of LDAP servers.

**To register LDAP users in CloudShell:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file.
2. Make sure the following key is in the file. If it is missing, add it.
    
    `<add key="ExternalUserPluginClass" value="LdapPlugin"/>`
    
3. Copy the following keys to the file:
    
    ```javascript
    <add key="LDAP.Server" value="127.0.0.1"/>
    <!--Port for accessing CloudShell. For secure LDAP, use port 636. For non secure LDAP, the default is 389.-->
    <add key="LDAP.Port" value="389"/>
    <add key="LDAP.Username" value="cn=Manager,dc=maxcrc,dc=com"/>
    <add key="LDAP.Password" value="secret"/>
    <!--Root node for group searching-->
    <add key="LDAP.GroupRootDn" value="dc=maxcrc,dc=com"/>
    <!--Filter for finding group nodes-->
    <add key="LDAP.GroupFilter" value="(&amp;(objectClass=organizationalUnit))"/>
    <!--Root node for user searching-->
    <add key="LDAP.UserRootDn" value="dc=maxcrc,dc=com"/>
    <!--Filter for finding user nodes-->
    <add key="LDAP.UsersFilter" value="(&amp;(objectClass=inetOrgPerson))"/>
    <!--Note – the below attributes “mail” or “uid” must have values in the LDAP.-->
    <!--Filter template for finding a specific user node by id, where {0} is the user's unique id-->
    <add key="LDAP.UserFilter" value="(&amp;(objectClass=inetOrgPerson)(uid={0}))"/>
    <!--Filter template for finding a specific user node by e-mail, where {0} is the user's e-mail-->
    <add key="LDAP.UserMailFilter" value="(&amp;(objectClass=inetOrgPerson)(mail={0}))"/>
    <!--LDAP attribute names for various user/group properties-->
    <add key="LDAP.MemberOfGroupAttribute" value="memberOf"/>
    <add key="LDAP.MailAttribute" value="mail"/>
    <add key="LDAP.UserIdAttribute" value="uid"/>
    <add key="LDAP.UsernameAttribute" value="uid"/>
    <add key="LDAP.UserDisplayNameAttribute" value="cn"/>
    <add key="LDAP.GroupDisplayNameAttribute" value="description"/>
    ```
    
4. Set the key values according to your LDAP server configurations. For assistance, contact your IT department or use your preferred LDAP browser utility to verify the object classes used by your LDAP Server.
    
5. To enable CloudShell to automatically add the users when they first log in to CloudShell, copy this key to the file:
    
    `<add key="ExternalUserManagement.AutoImportUser" value="True"/>`
    
6. When added automatically (at login), users imported from LDAP will be added to the Group that is listed in the `Registration.AdditionalGroup` key. The default group is **External Users** (Used to be **System Administrators**). If you want a different Group, change the value of the key.
    :::note
    For the registration of non-imported users to succeed, the group defined in the `Registration.AdditionalGroup` key must be included in **Resource Manager Client** and associated with a domain.
    :::
7. Save the file.
8. Restart the **Quali Server** service.
9. To prevent users from changing their passwords in CloudShell, do the following:
    
    1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file and add this key:
        
        `<add key="ChangePasswordEnabled" value="False"/>`
        
    2. Save the file and restart the **CloudShell Portal IIS** service.
