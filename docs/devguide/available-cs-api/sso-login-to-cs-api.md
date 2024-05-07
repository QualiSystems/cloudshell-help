---
sidebar_position: 3
---

# SSO Login to CloudShell APIs

This article explains how to use CloudShell APIs via SSO. This option provides user access to our APIs directly from your identity provider (IdP) using an authentication token.
:::note
SSO login is not supported for New Job Scheduling API.
:::

## Prerequisites

- **IDPUserInfoUrl** Server configuration key. 
    <details>
    <summary>More...</summary>
    
    **To set the IDPUserInfoUrl:**
    
    1. Open the Server `customer.config` file (usually at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config`)
    2. Add the following in a new line:
        
        ```javascript
        <add key="IDPUserInfoUrl" value="<url of userinfo endpoint>"/>
        ```
        
        For example:
        
        ```javascript
        <add key="IDPUserInfoUrl" value="http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/userinfo/>"
        ```
        
    3. Save the file.
        
    4. Restart the **Quali Server** service.
    </details>   
    
- IdP user profile that contains an email address ("email" claim and value). To register new users, see the [To define user groups for SAML SSO:](../../admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/index.md#to-define-user-groups-for-saml-sso) section.
- JWT token generated in your IdP. Note that the authorization token is valid for 5 hours by default, but the validity period can be extended using the `AuthToken.ExpirationSpanMinutes` configuration key.

## API authentication token creation flow

![](/Images/Devguide-reference/SsoApiFlow_817x252.png)

1. User sends to Quali Server a login request containing the JWT token and CloudShell domain name.
2. Quali Server validates the JWT token against the user's IdP.
3. The IdP returns to Quali Server the user's details in a UserInfo object.
    
    For example:
    
    ![](/Images/Devguide-reference/ApiSsoFlow2.png)
    
    Quali Server uses the IdP user's email address to identify an existing CloudShell user or create a new one to be used in the authentication token.
    
4. Quali Server sends the user a response containing the authentication token.
    
    If the API calls time out, consider extending the request timeout period for API POST requests over SSO using the `IDPRequestTimeout` configuration key. 
    <details>
    <summary>More...</summary>
    
    **To extend the timeout period for API POST requests over SSO:**
    
    1. Open the Server `customer.config` file (usually at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config`)
    2. Add the following in a new line and set the desired period, in seconds (default is 10):
        
        ```javascript
        <add key="IDPRequestTimeout" value="10"/>
        ```
        
    3. Save the file.
        
    4. Restart the **Quali Server** service.
    </details>
    

## Login request example

![](/Images/Devguide-reference/ApiSsoFlow1.png)

## API call using an API authentication token

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

api = CloudShellAPISession(host="localhost", token_id="eyJhbGciOiJSUzI....zHMyOeJYu-0xodJ_yghhbg", domain="Global")

result = api.AddTopologiesToDomain(topologyNames=["CloudShell Sandbox Template"],domainName="Domain A")
print(f'{result}')
```
