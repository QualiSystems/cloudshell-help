---
sidebar_position: 20
---

# Single Sign On (SSO)

## SSO – Change the login page in case the user logs out
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="CustomAbsoluteLoginPage" value="http://anyurl"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## SSO – Enable or disable SSO
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Authentication.ExternalLoginMode" value="None"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Token, Header, None</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Token</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## SSO – Enable or disable using Token mode
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Authentication.ExternalLoginMode" value="Token"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Token, Header, None</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Token</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## SSO – Configure token encryption using Rijndael symmetric encryption key (32 bytes)
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Authentication.ExternalLoginKey" value="xxxx"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Any multiple of 32 bits</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>As set in the QsTeamServer.exe.config file in the Quali Server installation directory</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## SSO – Configure token encryption using Rijndael symmetric encryption key IV (16 bytes)
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Authentication.ExternalLoginIV" value="yyy"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Any multiple of 16 bits</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>As set in the QsTeamServer.exe.config file in the Quali Server installation directory</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Header mode – used when the username is added to one of the HTTP headers
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Authentication.ExternalLoginMode" value="Header"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Any username that is added to one of the HTTP headers</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Token</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>

## SAML Single Sign On (SSO)

*SSO/SLO configuration is available with CloudShell Premium Tier.*

For step-by-step instructions on how to use these configuration keys, see [Configuring SAML Single Sign-On (SSO)](../../../cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/index.md#configuring-samlsingle-sign-on-sso).
:::note
CloudShell supports SAML v2.0. If you encounter an error, please contact your SAML administrator.
:::
## SAML SSO – Enable SAML SSO authentication
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SamlSSOAuthenticationEnabled" value="true" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Configure the Assertion Consumer Service URL
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SamlAssertionConsumerServiceUrl" value="http://localhost:60433/Saml/Consume" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>URL string with the address of the CloudShell Portal (including server IP address and port number)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Configure the URL of the Identity Provider
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SamlIdpTargetUrl" value="http://stubidp.kentor.se/" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>URL of the Identity Provide (IdP)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Configure the address of the login page (CustomAbsoluteLoginPage)
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="CustomAbsoluteLoginPage" value="http://localhost:60433/Saml/Index" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text, URL string with the address of the CloudShell Portal (including server IP address and port number)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Configure the deflate/inflate compression when processing SAML requests
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SamlDeflateInflate" value="false" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Configure the name of the certificate key file (.pfx file) to sign the SAML request with
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SamlIssuerCert" value="HuaweiCA.pfx;roveafuna" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text, if the certificate is locked with a password use a semicolon and provide the password (as shown in the above example)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Configure the HTTP method to use when issuing the SAML request to the Identity Provider
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SamlRequestMethod" value="GET" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Get, Post, Redirect</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Redirect (which does not check for browser compatibility)</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Redirect the user to a specified URL whenever the user browses the SAML consumer endpoint without a response
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SamlEmptyResponseRedirectUrl" value="http://developer.huawei.com/cn/ict/" />`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>URL string or Null</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>NULL (which means the user will not be redirected and ultimately will get an error message saying the response is empty)</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Redirect the user to a specified URL whenever the user browses the CloudShell Portal login page
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="CustomAbsoluteLoginPage" value="http://developer.huawei.com/cn/ict/"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>URL string (In SAML and SSO context, this key is usually used to hide the login page and redirect incoming users to the SAML endpoint. Some environments (like Huawei) use it to redirect users when they log off of the portal back to their landing page.)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Redirect the user to a specified URL whenever the user browses the CloudShell Portal logout page
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="CustomAbsoluteLogoutPage" value="http://[server]/AuthServices/Logout"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>URL string , where [server] is the IdP server's IP or DNS</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Enable direct access to CloudShell Portal
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="add key="BypassCustomLogin" value="true"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>7.1 and above</td>
		</tr>
	</tbody>
</table>
## SAML SSO – Change the name of the Domain attribute which defines the CloudShell domain to associate the user to
:::note
This attribute may be added when setting up users in an IdP, to log a user into a specific domain if a user belongs to more than one domain. For more information, see [Set up an Identity Provider (IdP)](../../../cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/index.md#set-up-an-identity-provider-idp).
:::
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SsoDomainAssertionName" value="MyDomainAttribute"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Domain</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.2 and above</td>
		</tr>
	</tbody>
</table>
