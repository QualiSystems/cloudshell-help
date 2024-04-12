# Configuring Single Sign-On (SSO)

## SSO Overview

*SSO/SLO configuration is available with CloudShell Premium Tier.*

Single sign-on is an access control and authentication method that enables you to access several services through a single login page, prompting you to enter you credentials only once. You can use SSO to enable your users to access CloudShell through your homepage.

Single sign on to the CloudShell Portal is done using the SAML protocol. This configuration relies on a third-party identity provider (IdP) for authentication and authorization, using Security Assertion Markup Language (SAML).

SAML SSO for CloudShell is implemented through Saml2 (previously known as Kentor AuthServices), an open-source library that adds SAML2 support to ASP.NET and IIS websites, integrating with various identity providers.

## Configuring SAML Single Sign-On (SSO)

You can configure Security Assertion Markup Language (SAML) single sign-on (SSO) to allow secure web domains to exchange user authentication and authorization data (such as username and password). Using SAML, an online Service Provider (SP) can contact a separate online Identity Provider (IdP) to authenticate users who are trying to access secure content.

The following figure shows the typical use case addressed by SAML, where the principal (user) requests a service from the Service Provider. The Service Provider requests and obtains an identity assertion from the Identity Provider. On the basis of this assertion, the Service Provider can make an access control decision, in other words it can decide whether to perform some service for the connected principal (user).
:::note
CloudShell supports SAML v2.0. If you encounter an error, please contact your SAML administrator.
:::
![](/Images/Admin-Guide/Setting-Up-CloudShell/SAML-workflow.png)

**To configure SAML SSO for CloudShell Portal:**

1. [Set up an Identity Provider (IdP)](#set-up-an-identity-provider-idp).
    :::note
    When setting up and managing the Identity provider, make sure to configure the IdP to recognize CloudShell Portal as a service provider.
    :::
2. [Install a certificate on a local machine](#install-a-certificate-on-a-local-machine).
3. [Configure CloudShell to work with SAML SSO](#configure-cloudshell-to-work-with-saml-sso).

### Set up an Identity Provider (IdP)

When setting up an Identity Provider, make sure you do the following:

1. Configure a SAML 2.0 app with the required users.
    :::note Notes:
    When creating users in the IdP, the users must have the following attributes in order to be authenticated (see the `kentor.config` example to see how they are used):
    
    - `userName`: with the user name;
    - `emailAddress`: with the email address;
    - `timezoneName`: with the values from the **Time zone name** column in [MSDN's Time Zone IDs](https://msdn.microsoft.com/en-us/library/gg154758.aspx)
    - `RelayState`: with the URL of the location to be directed to after sign-on
    - (Optional) `Domain`: with the CloudShell domain name to log the user into (if the user's group is associated with more than one domain). To change the name of the `Domain` attribute, see [SAML Single Sign On (SSO)](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfg-Ky-Rpstr.htm#SAML%C2%A0Sin).
        
        - When a user logs into CloudShell for the first time or if the specified CloudShell domain does not exist, they will be logged in randomly to one of the domains they can access.
        - The user will be logged into the domain they were last logged into if either the user does not have permission to access this domain, or no domain attribute was created in the IdP for that user.
    - Plus any other attributes according to which users should be mapped into groups in the sso\_group\_rules.config.json file
    :::
2. In the ACS URL field, add the following URL: `http://[server]/AuthServices/ACS`
    
    `[Server]` should be replaced with the address or name of the machine on which the CloudShell Portal client is installed.
    <details>
    <summary>
    To see a sample configuration using Okta, click here...
    </summary>
    1. Log in to your Okta organization as a user with administrative privileges. If you don’t have an Okta organization, you can create a free [Okta Developer Edition organization](https://developer.okta.com/signup/).
    2. Click **Admin**.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaAdminButton_58x30.png).
        
    3. Click the **Add Applications** shortcut.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaAddApplicationsShortcut_118x16.png).
        
    4. Click **Create New App**.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaCreateNewAppButton_125x27.png).
        
    5. In the dialog that opens, select the **SAML 2.0** option, then click **Create**.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaCreateNewApplicationIntegrationPage_447x255.png)
        
    6. In step 1 - **General Settings**, enter **Example SAML Application** in the **App name** field, then click **Next**.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaGeneralSettings_456x286.png)
        
    7. In step 2 - **Configure SAML**, section A **SAML Settings**, paste the logout page URL in the **Single sign on URL** and **Audience URI (SP Entity ID)** fields.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaSAMLSettings_468x303.png)
        
    8. In the **Attribute Statements** section, add the following two attribute statements:
        
        - **emailAddress: user.email**
        - **userName: user.login**
            
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaAttributeStatements_463x156.png)
        
    9. Click **Next**.
    10. In step 3 - **Feedback**, select **I'm a software vendor. I'd like to integrate my app with Okta** then click **Finish**.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaFeedback_434x204.png)
        
    11. The **Sign On** section of your newly created “Example SAML Application” application is displayed. Right-click the **Identity Provider metadata** link, select copy and save it somewhere you'll remember.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaSignOn_434x406.png)
        
    12. Right-click the **Assignments** section of the “Example SAML Application” application and select **Open Link In New Tab** (so that you can come back to the “Sign On” section later).
    13. In the new tab that opens, click **Assign** button and select **Assign to People**.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaAssignments_231x139.png)
        
    14. In the **Assign Example SAML Application to People** dialog box, type your username into the search box and click the **Assign** button next to your username.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaAssignUser_303x81.png)
        
    15. Verify your user's attributes and select **Save and Go Back**.
        
        ![](/Images/Admin-Guide/SLO-configuration/OktaVerifyUser.png)
        
    16. Click **Done**.
    </details>
3. Download the X.509 Certificate acquired from the IdP. Make sure the file type is `.cer`.
4. Copy the Identity Provider Single Sign-On URL and save it for later.
5. Copy the Issuer URL and save it for later.

### Install a certificate on a local machine

While setting-up an IdP, you are required to download a certificate file used for communication with the IdP. For increased security, install certificates on your local machine.

**To install a certificate:**

1. After downloading the `.cer` file to your local directory, double-click to open it.
2. In the **Security Warning** window, click **Open**.
3. In the **Certificates** window, click **Install Certificate**.
    
    The **Certificates Import Wizard** displays.
    
4. In the **Store Location** section, select **Local Machine** and click **Next**.
5. Select the certificate store in which you want to install your certificate, and click **Next**.
6. Click **Finish** to import the certificate.

### Configure CloudShell to work with SAML SSO

Configuration includes defining user groups and enabling the use of SAML SSO in CloudShell.

Users created in the IdP can use their defined **User Name** and **Email** attributes to log in to CloudShell Portal. If they are not pre-existing CloudShell users, they are automatically mapped to a group in CloudShell, according to the group rules defined in a dedicated `sso_group_rules.config.json` file.
:::note
By default, users that are added to CloudShell via SSO are also added to the **External Users** group. However, you can change this via the `Registration.AdditionalGroup` configuration key.
:::
For information about creating users, see [Managing CloudShell Users](../../../../../admin/cloudshell-identity-management/managing-users/managing-cloudshell-users.md).

**To define user groups for SAML SSO:**

1. Make sure the required user groups already exist in CloudShell and are added to a domain.
2. Create a JSON file with the groups and their constraints per your needs, and save it under the name `sso_group_rules.config.json` in the root folder of the CloudShell Portal installation directory.
3. Alternatively, you can download the [sample JSON file](https://qualisystems.hosted-by-files.com/Onlinehelpresources/SSO/sso_group_rules.config.json) and use it as a template for the construction of a static predefined group.  
    
    :::note Points to consider:
    - Users are associated to a group if their attributes match all the constraints defined for that group. Users can be associated to more than one group.
    - By default, group associations are created when registering the user. However, admins can set CloudShell to update the group associations whenever the user logs into CloudShell. For details, see [Enabling CloudShell to auto-update group associations on user login](#enabling-cloudshell-to-auto-update-group-associations-on-user-login).
    - Optionally, you can use regular expressions in the `sso_group_rules.config.json` file you created to define dynamic groups that are conditioned by the values of the SAML parameters. Once regular expressions are enabled, with the `EnableRegex` element, the constraints' values are recognized as regular expressions.
    :::
    :::note Notes for setting up SSO login to a CloudShell API:
    - If you're setting up SSO login to a CloudShell API, place the file under the Server installation directory (usually at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\`).
    - Users are created according to the email and **preferred\_username** claim. If there is no **preferred\_username**, the username will be the email.
    :::
    **Example: A group defined using regular expressions:**
    
    ```javascript
    {
       "Groups":[
          {
             "EnableRegex":true,
             "GroupName":"{group_name}",
             "Constraints":[
                {
                   "Attribute":"TargetGroup",
                   "Value":"^(?<group_name>.*)$"
                }
                {
                   "Attribute":"Location",
                   "Value":"*"
                }
             ]
          }
       ]
    
    }
    ```
    
    **Example: Adding all new SSO users to a specific group:**
    
    *The attribute you use is an attribute that comes back from the IdP, so it doesn't matter which one you choose. If the value is set to \*, it will match any user and assign them to the NewUsers group.*
    
    ```javascript
    {
       "Groups":[
          {
             "GroupName":"NewUsers",
             "Constraints":[
                {
                   "Attribute":"userName",
                   "Value":"*"
                }
             ]
          }
       ]
    }
    ```
    :::note
    The asterisk in `Value="*"` is recognized as a regular expression, even if regular expressions are not enabled.
    :::
4. Save your JSON file under the name `sso_group_rules.config.json` (make sure the name is an exact match).

**To enable SAML SSO:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="Authentication.ExternalLoginMode" value="Header" />`
    
2. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, add the following keys and set the required values:
    - `<add key="CustomAbsoluteLoginPage" value="http://[server]/AuthServices/SignIn"/>` (Used to redirect the user to a specified URL whenever the user browses the CloudShell Portal's login page. The \[Server\] should be replaced with the address or name of the machine on which the CloudShell Portal client is installed.)
    - `<add key="CustomAbsoluteLogoutPage" value="http://[server]/AuthServices/Logout"/>` (\[server\] is the IdP server's IP or DNS (for some IdPs, you may need to specify the CloudShell Portal instead). Used to redirect users after logging out of CloudShell Portal.)
3. Add the `kentor.config` file, based on our [sample file](https://qualisystems.hosted-by-files.com/Onlinehelpresources/SSO/kentor.config), to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal` folder.

The `kentor.config` file contains all the Authentication requirements, for example, the location of the certificate store and requested attributes for the IdP response.

#### Sample file requirements
<details>
<summary>
Expand for a description of the requirements in the sample file:
</summary>
| Requirement | Description |
| --- | --- |
| **\<kentor.authServices\>** | |
| entityId | The name the service provider will use for itself when sending messages. In this case, it is the CloudShell Portal location on your local machine with the addition of /**AuthServices**. |
| returnUrl | The URL that you want users to be redirected to once the authentication is complete. This is typically the start page of the application, or a special signed in start page. |
| **\<metadata\>** | |
| requestedAttributes | List of attributes to be included in the assertions generated by the identity provider. The **requestedAttributes** section SHOULD NEVER be changed. |
| **\<identityProviders\>** | |
| entityId | The name that the IdP will use for itself when sending responses. Here you must enter the Issuer URL you retrieved from the IdP. |
| signOnUrl | The URL to the sign-in page of the IdP, to which CloudShell Portal will redirect users in order to sign in. |
| allowUnsolicitedAuthnResponse | This enables the IdP to initiate sign on where there was no prior authentication request. |
| binding | The binding that the services provider should use when sending requests to the identity provider. |
| **\<signingCertificate\>** | |
| storeLocation | The location of the certificate store to search for the certificate you installed. |
| storeName | Name of the certificate store to search for the certificate.<br/>**Note**: If you stored the certificate in the Personal store, enter "My" as value. For more information see MSDN's [StoreName Enumeration](https://msdn.microsoft.com/en-us/library/system.security.cryptography.x509certificates.storename(v=vs.110).aspx) page. |
| findValue | A search term to use to find the certificate. The value will be searched for in the field specified by the **x509FindType** attribute. The required information can be found in the installed certificate details in the certificate store. |
| x509FindType | The field according to which the certificate will be searched, as defined by the value in the **findValue** attribute. You can find more information about this in MSDN's [X509FindType Enumeration](https://msdn.microsoft.com/en-us/library/system.security.cryptography.x509certificates.x509findtype.aspx) page. |
</details>
:::note Notes:
- The sample file shows only the minimum requirements.
- You may also save the certificate file and use the key `<signingCertificate fileName="~/App_Data/Kentor.AuthServices.StubIdp.cer" />` with your certificate file path.
:::
4. Edit the file according to the additional information required by your IdP.
    
    For more details on the file and its elements, see the [Saml2 Configuration documentation](https://github.com/Sustainsys/Saml2/blob/master/docs/configuration.rst).
    
5. Restart **Quali Server** and **CloudShell Portal IIS** services.
6. Open your browser and navigate to your portal.
    
    You are redirected to the IdP’s login page instead of CloudShell Portal.
    :::note
    When trying to access the login page, if you receive a "Missing BASE64 Value" error message, make sure you have configured all the required application details correctly in the IdP.
    :::
7. Enter the user name and password you gave the user via the IdP, and you will be referred directly to the Portal's home.
:::tip
You can use the SSO Tester utility to test your SSO configuration. For additional information, see [SSO Tester](../../../../../admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/sso-tester.md).
:::
## Enabling CloudShell to auto-update group associations on user login

By default, group associations are created when registering the user. However, by enabling the `ReevaluateSSOUserAssociationUponLogin` configuration key, CloudShell will update the group associations whenever the user logs into CloudShell.

**To enable group associations on login:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="ReevaluateSSOUserAssociationUponLogin" value="true"/>`
    
2. Restart the **CloudShell Server** service.
    

## Enabling direct access to CloudShell Portal

Users with CloudShell credentials can access CloudShell Portal directly, not via the SSO login page. By default this is disabled.

**To enable direct access to CloudShell Portal:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="BypassCustomLogin" value="true"/>`
    
2. Restart the **CloudShell Portal IIS** service.
    
3. Log in to CloudShell Portal using this URL format: **https://\<CloudShell Portal\>/Account/Login?nocustom=nocustom**.
    
    For example: "`https://192.173.45.80/Account/Login?nocustom=nocustom`"
    
    You are directed to the CloudShell Portal login page
    
4. If you encounter an error, in IIS Manager, in the **Advanced Settings** window of the CloudShell Portal site's application pool, set **Load User Profile** to **True**.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/SsoLoadUserProfile_408x508.png)
    

## Disabling SSO

**To disable SSO:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and take out the following key:
    
    `<add key="CustomAbsoluteLoginPage" value="http://[server]/AuthServices/SignIn"/>`
    
2. Restart the **CloudShell Portal IIS** service.