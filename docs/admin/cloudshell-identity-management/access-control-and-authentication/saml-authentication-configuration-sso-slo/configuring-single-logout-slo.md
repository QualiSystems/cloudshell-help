---
sidebar_position: 2
---

# Configuring Single Logout (SLO)

*SSO/SLO configuration is available with CloudShell Premium Tier.*

Single logout (SLO) invalidates CloudShell single sign-on (SSO) sessions and redirects the logging out user to their defined logout page. If your CloudShell deployment includes multiple domains, where each domain uses a different logout page, each one of your users will be redirected to their respective logout page.
:::note
SLO must be used in conjunction with SSO.
:::

## Creating an SSL certificate

The first step is to create an SSL certificate, which you will need to install on all CloudShell Portal machines.

**To create an SSL certificate:**

1. In your personal store, create an SSL certificate with a private key.
    
    1. If CloudShell Portal is not installed on the Quali Server machine, copy the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Certificates\makecert.exe` file from the Quali Server machine to the Portal machine
    2. Create an SSL certificate:
        
        ```javascript
        cd "makecert.exe containing folder"
        ```
        
        ```javascript
        makecert.exe -n "CN=My Company Development Root CA,O=My Company, OU=Development,L=Quali,S=NY,C=US" -pe -ss My -sr LocalMachine -sky exchange -m 120 -a sha1 -len 2048 -r
        ```
        
        Where "My Company Development Root CA" is the name of the certificate
        
2. Export the certificate to all CloudShell Portal machines.
    
    1. From the Start menu, search for the **Manage Computer Certificates** app and locate the certificate you created in the previous step.
        
        The certificate should have the same name you gave it in the command. In our example: "My Company Development Root CA".
        
    2. Right-click the certificate and select **Export>All Tasks>Export**.
        
        ![](/Images/Admin-Guide/Setting-Up-CloudShell/SAMLExportCertificate.png)
        
    3. In the **Certificate Export Wizard**, select **Yes, export the private key**.
        
        ![](/Images/Admin-Guide/Setting-Up-CloudShell/SAMLExportWithPrivate.png)
        
    4. Click **Next**.
    5. Specify the **Password** to allow exporting the certificate.
    6. Click **Next**, specify the file name. and complete the wizard.
    7. Import the certificate to the personal store on all CloudShell Portal machines.
3. Export the certificate for the service provider.
    
    1. In the **Certificate Export Wizard**, select **No, do not export the private key**.
        
        ![](/Images/Admin-Guide/Setting-Up-CloudShell/SAMLExportCertificateWithoutPrivateKey.png)
        
    2. Select **DER encoded binary X.509 (.CER)**.
        
        ![](/Images/Admin-Guide/Setting-Up-CloudShell/SAMLSaveCertificateFormat_376x111.png)
        
    3. Specify the file name and location of the `.cer` certificate and complete the wizard.
    4. Import the generated public key to the service provider. Okta example:
        
        1. In Okta, from the **Applications** menu, select the app you created for SSO..
        2. In the **General** tab, edit the SAML settings.
        3. Under **SAML Settings**, click **Edit.**
        4. Proceed to **SAML Settings**.
        5. Select **Show Advanced Settings**, and set the following:
            
            - **Signature Certificate**: Upload the public certificate.
            - **Enable Single Logout**
            - **Single Logout URL**: Specify the URL.
            - **SP Issuer**: Specify the SP issuer URL.
            
            ![](/Images/Admin-Guide/Setting-Up-CloudShell/OktaSLOConfig.png)
            
        :::note
        In some cases, you may also need to import the generated certificate to the trusted certificates folder in CloudShell Portal. Right-click the **Trusted Root Certification>Certificates** folder and select **All Tasks>Import**.
        :::

## Configuring SAML SLO on each CloudShell Portal

Perform the following procedure on each CloudShell Portal machine.

**To configure SAML SLO for CloudShell Portal:**

1. Make sure SSO is configured. For details, see [Configuring Single Sign-On (SSO)](../../../../admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/index.md).
2. Disable the `requireSsl` flag by adding the following code to the `web.config` file.
    :::note
    The `requireSsl` flag only applies to websites that do not use HTTPS. If HTTPS is used, perform the steps in the [Configuring SAML SLO for CloudShell Portal in SSL mode](../../../../admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo.md#configuring-saml-slo-for-cloudshell-portal-in-ssl-mode) section and carry on with the configuration process.
    :::
    ```javascript
    <?xml version="1.0" encoding="UTF-8"?>
    <system.identityModel.services>
       <federationConfiguration>
          <cookieHandler requireSsl="false" name="CloudShellAuthFederation" />
       </federationConfiguration>
    </system.identityModel.services>
    ```
    :::important
    The `web.config` file is overridden during a CloudShell patch or version upgrade. Therefore, make sure to keep a backup copy of the file, and after upgrade, replace the file's `<system.identityModel.services>` section with the one in the backup version.
    :::
3. In the `Kentor.config` file, do the following:
    
    1. In the `<kentor.authServices` section, set the following properties (if the section is missing, add it).
        
        - `entityId`: CloudShell Portal (service provider). IP address or DNS name, and port if CloudShell Portal is note using the default (8080). For example: "http://192.168.20.134:85/AuthServices"
        - `returnUrl`: Logout page URL
        
        For example:
        
        ```javascript
        <?xml version="1.0" encoding="utf-8"?>
        <kentor.authServices entityId="http://192.168.30.27:6060/AuthServices"
                returnUrl="http://192.168.30.27:6060/">
        ```
        
    2. Under the `<identityProviders>` section, set the following:
        
        - `entityId`: Identity provider issuer
        - `logoutUrl`: Identity provider SLO URL
        
        For example:
        
        ```javascript
         <identityProviders>
            <add entityId="http://www.okta.com/exkdmzexSOj8bXgBB355"
            signOnUrl="https://quali-john.okta.com/app/qualiorg672652_john_1/exkdmzexSOj8bXgBB355/sso/saml"
            logoutUrl="https://quali-john.okta.com/app/qualiorg672652_john_1/exkdmzexSOj8bXgBB355/slo/saml"
         allowUnsolicitedAuthnResponse="true"
         binding="HttpPost">
        ```
        
    3. In the `Kentor.config` file, add a section that will point to the newly created certificate. For example:
        
        ```javascript
        <serviceCertificates>
           <!--add fileName="V:\Users\john.d\my-certificate.pfx" />-->
           <add storeName="My" storeLocation="LocalMachine" findValue="54nb76caaa0018v67dd8h217jc7h1i9" x509FindType="FindBySerialNumber" use="Signing" />
        </serviceCertificates>
        ```
        
4. Configure your identity provider. This typically includes setting the SLO logout page URL, CloudShell Portal issuer (for example: "http://192.168.20.134/AuthServices") and .cer certificate file.
    
    **To configure the identity provider on Okta:**
    

1. Restart **Quali Server** and **CloudShell Portal IIS** services.
2. Log in to CloudShell Portal with your Idp user.
3. Log out of CloudShell Portal.
    
    You are redirected to the defined logout page.
    

## Configuring SAML SLO for CloudShell Portal in SSL mode

If CloudShell Portal is running in SSL mode (HTTPS), you will need to perform several additional configurations to enable SLO.

**To configure SAML SLO to work in HTTPS:**

1. In your identity provider, update all SLO logout URLs to be in https mode. For example: "https://192.168.30.27/AuthServices/Acs".
2. In the `Kentor.config` file, in the `<kentor.authservices` section, update the `entityId` and `returnUrl` URLs to be in https mode. For example:
    
    ![](/Images/Admin-Guide/SLO-configuration/Kentor.AutServices.HTTPSMode.png)
    
3. Restart the CloudShell Portal web site in IIS Manager.
    
    If you get a "Keyset does not exist" error message, it means that your IIS user is unable to access the private key. Grant the user read access and try again.
    
    ![](/Images/Admin-Guide/SLO-configuration/SLOHTTPSAddIISUserPermission.png)
    
4. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file and set the `CustomAbsoluteLoginPage` and `CustomAbsoluteLogoutPage` to be in https mode. For example:
    
    ![](/Images/Admin-Guide/SLO-configuration/SLOHTTPSCustomerConfig.png)
    
5. In the `web.config` file, remove the `requireSsl` key or change its value to "true", since the default is to use SSL cookies:
    
    ![](/Images/Admin-Guide/SLO-configuration/SLOHTTPSWebConfig.png)
