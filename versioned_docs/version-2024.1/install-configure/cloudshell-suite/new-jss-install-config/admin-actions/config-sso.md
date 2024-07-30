---
sidebar_position: 5
---

# Configure Single Sign-on (SSO) for the New Job Scheduling

SSO is configured using SAML 2.0, which relies on a 3<sup>rd</sup> party identity provider (IdP) for user authentication and authorization.

The user SSO login process is as follows:

1. A user from your organization attempts to log in to the New Job Scheduling Portal.
    
2. The user is redirected to your organization’s IdP login page.
    
3. The user logs in using their corporate account.
    
4. Upon successful authentication, the user is redirected back to the New Job Scheduling Portal with role-based access to the appropriate domains, as defined in your organization’s SSO integration with CloudShell. (Recommended. Without CloudShell SSO, a CloudShell user must be created for each SSO user prior to SSO login)
    

**Best practices:**

- [Configure the New Job Scheduling to Run in HTTPS](./config-https.md)
    
- [Configuring Single Sign-On (SSO)](../../../../admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/index.md) (Recommended. Without CloudShell SSO, a CloudShell user must be created for each SSO user prior to SSO login)
    

**To enable SSO for the New Job Scheduling:**

1. If CloudShell SSO is configured, make sure each user has logged into CloudShell Portal at least once in order to create a user identity.
    

2. Configure a SAML 2.0 app with the required users. Users must have the following attribute:
    
    | Attribute Name | Attribute Value |
    | --- | --- |
    | sub | user.login |
    
    ![](/Images/IG2/JssSsoSamlAttributeStatements.png)
    
3. Set your organization’s IdP details in the customer.values.yaml file.
    
    | Parameter | Description | Default value |
    | --- | --- | --- |
    | **jobSchedulingService** |
    | AppSettings\_\_CustomAbsoluteLoginPage |   | /AuthServices/SignIn |
    | identityService |
    | Saml2Settings\_\_SPEntityId | Customer's domain url with "/saml2" suffix |   |
    | Saml2Settings\_\_IPEntityId | Customer IdP entity ID |   |
    | Saml2Settings\_\_IPMetadataLocation | Path to the SAML Metadata - contains ssl certificate between IdP and Identity service provider |   |
    | Saml2Settings\_\_ReturnUrl | Customer's domain url |   |
    
    For example:
    
    ```css
    identity-service:
      enabled: true
      identityService:
        image:
          tag: 1.0.2.1
          pullSecret: cloudshell-secret
        env:
          AppSettings__CloudShell__Host: 192.168.124.4
        Saml2Settings__SPEntityId: https://domain-name/Saml2
        Saml2Settings__IPEntityId: http://www.okta.com/exkej8i2rswZxrlsq8k1
        Saml2Settings__IPMetadataLocation: https://dev-36234681.okta.com/app/exkej8i2tetZxruff5d6/sso/saml/metadata
    	  Saml2Settings__ReturnUrl: https://domain-name
    
    job-scheduling-service:
      enabled: true
      jobSchedulingService:
        image:
          tag: 1.0.2.1
          pullSecret: cloudshell-acr
        env:
          QualiPortal__Host: 192.168.124.4
          ## CloudShell Portal Port
          QualiPortal__Port: 80
          CloudShell__Host: 192.168.124.4
        AppSettings__CustomAbsoluteLoginPage: /AuthServices/SignIn
    ```
    
4. Redeploy the helm chart.
    

Example - IdP Settings using Okta:

![](/Images/IG2/JssSsoSamlSettings.png)