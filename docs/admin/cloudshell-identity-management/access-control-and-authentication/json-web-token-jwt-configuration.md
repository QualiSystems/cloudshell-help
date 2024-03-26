---
sidebar_position: 3
---

# JSON Web Token (JWT) Configuration

*JWT configuration is available for Premium accounts only. Using JWT Authentication in order to log into CloudShell requires advanced customization of the login requests, as well as on the CloudShell side. Please consult with your Technical Account Manager prior to such customization.*

JWT is an access control and authentication method that enables you to access several services through a single login page, prompting you to enter your credentials only once. You can use JWT to enable your users to access CloudShell through your homepage.

## Configuring JWT Authentication

To integrate JWT authentication with CloudShell, make sure JWT is installed and configured on your web app. For additional information, see [JWT documentation](https://jwt.io/). Using JWT, an online Service Provider (SP) - CloudShell in our case - can contact a separate online Identity Provider (IdP), the customer's web app for example, to authenticate users who are trying to access secure content.

The following figure shows the typical use case addressed by JWT, where the principal (user) tries to access CloudShell. CloudShell redirects to the customer's login page, prompting the user to log in. Successful login grants the user access to CloudShell and the user is redirected back into CloudShell Portal, along with a JWT token. In subsequent logins, the user will automatically be granted access to CloudShell Portal as long as this token exists and is valid.

![](/Images/Admin-Guide/Setting-Up-CloudShell/JWT-worfklow.png)

## Enabling JWT authentication for CloudShell Portal

In order to enable your users to access CloudShell using JWT authentication, CloudShell needs to obtain certain details about the user from the cookie created by your login page.

**To enable JWT authentication for CloudShell Portal:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following keys:
    
    | Configuration key | Description |
    | --- | --- |
    | \<add key="CustomAbsoluteLoginPage" value="http://\<customer-login-page" /\> | The URL to the customer's login page. The user will be redirected to this page for login authentication.<br/>For example: "http://localhost:7658/home/login" |
    | \<add key="JWT.CoockieName" value="CustomerJwtCookie" /\> | Name of the cookie created by the customer's login page |
    | \<add key="JWT.SecretCode" value="qiU32MA8ECYtjUtj4m007BYQNNlf90xTu\_d-y2ik7MOIyKQ8drUBskw5G756t\_6V" /\> | The customer's verification code. CloudShell uses this code to verify the customer's identity. |
    | \<add key="JWT.UsernameField" value="displayName" /\> | The field containing the user's name in the cookie. |
    | \<add key="JWT.EmailField" value="accountID" /\> | The field containing the user's email in the cookie. |
    | \<add key="CustomAbsoluteLogoutPage" value="http://\[server\]/AuthServices/Logout"/\> | **\[server\]** is the IdP server's IP or DNS. The URL to the customer's logout page. This page will be displayed when the user logs out of CloudShell. |
    
    :::note
    You can map **JWT.UsernameField** and **JWT.EmailField** to fields in a `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\jwt_payload_mapping.config.json` claims file. For example:  
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/jwt_payload_file.png)
    :::
2. Restart the **CloudShell Portal IIS** service.
3. Next, follow the steps in the below procedure to define the user's access permissions in CloudShell.

## Defining the user's access permissions in CloudShell

When the user logs in to your web app, a CloudShell user is created. This user is created only once, and will be used to allow your application's user to access CloudShell on all future logins. This user is allowed to access a predefined CloudShell domain containing blueprints, resources and other assets that have been prepared in advance for the user. The configuration keys below set the login mode to be used and the CloudShell domain, the user's group and the group's role.

**To define the user's access permissions in CloudShell:**

1. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="Authentication.ExternalLoginMode" value="Header" />`
    
2. Specify the user's settings in CloudShell.
    
    | Configuration key | Description |
    | --- | --- |
    | \<add key="Registration.DefaultDomain" value="Global" /\> | The CloudShell domain which the user will be able to access |
    | \<add key="Registration.AdditionalGroup" value="NewUsers" /\> | The group associated to the specified domain |
    | \<add key="Registration.DefaultRole" value="Regular" /\> | The group's role |
:::note    
You can change the user's permissions in the future, as appropriate.
:::
4. Restart the **Quali Server** service.
    
    Your users should now be able to access CloudShell with their own accounts.
