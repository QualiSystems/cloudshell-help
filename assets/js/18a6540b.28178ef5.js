"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6386],{3192:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var l=t(17624),n=t(4552);const d={sidebar_position:20},i="Single Sign On (SSO)",r={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/single-sign-on-sso",title:"Single Sign On (SSO)",description:"SSO \u2013 Change the login page in case the user logs out",source:"@site/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/single-sign-on-sso.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/single-sign-on-sso",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/single-sign-on-sso",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/single-sign-on-sso.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/search"},next:{title:"TestShell Studio",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/testshell-studio"}},o={},h=[{value:"SSO \u2013 Change the login page in case the user logs out",id:"sso--change-the-login-page-in-case-the-user-logs-out",level:2},{value:"SSO \u2013 Enable or disable SSO",id:"sso--enable-or-disable-sso",level:2},{value:"SSO \u2013 Enable or disable using Token mode",id:"sso--enable-or-disable-using-token-mode",level:2},{value:"SSO \u2013 Configure token encryption using Rijndael symmetric encryption key (32 bytes)",id:"sso--configure-token-encryption-using-rijndael-symmetric-encryption-key-32-bytes",level:2},{value:"SSO \u2013 Configure token encryption using Rijndael symmetric encryption key IV (16 bytes)",id:"sso--configure-token-encryption-using-rijndael-symmetric-encryption-key-iv-16-bytes",level:2},{value:"Header mode \u2013 used when the username is added to one of the HTTP headers",id:"header-mode--used-when-the-username-is-added-to-one-of-the-http-headers",level:2},{value:"SAML SSO \u2013 Enable SAML SSO authentication",id:"saml-sso--enable-saml-sso-authentication",level:2},{value:"SAML SSO \u2013 Configure the Assertion Consumer Service URL",id:"saml-sso--configure-the-assertion-consumer-service-url",level:2},{value:"SAML SSO \u2013 Configure the URL of the Identity Provider",id:"saml-sso--configure-the-url-of-the-identity-provider",level:2},{value:"SAML SSO \u2013 Configure the address of the login page (CustomAbsoluteLoginPage)",id:"saml-sso--configure-the-address-of-the-login-page-customabsoluteloginpage",level:2},{value:"SAML SSO \u2013 Configure the deflate/inflate compression when processing SAML requests",id:"saml-sso--configure-the-deflateinflate-compression-when-processing-saml-requests",level:2},{value:"SAML SSO \u2013 Configure the name of the certificate key file (.pfx file) to sign the SAML request with",id:"saml-sso--configure-the-name-of-the-certificate-key-file-pfx-file-to-sign-the-saml-request-with",level:2},{value:"SAML SSO \u2013 Configure the HTTP method to use when issuing the SAML request ot the Identity Provider",id:"saml-sso--configure-the-http-method-to-use-when-issuing-the-saml-request-ot-the-identity-provider",level:2},{value:"SAML SSO \u2013 Redirect the user to a specified URL whenever the user browses the SAML consumer endpoint without a response",id:"saml-sso--redirect-the-user-to-a-specified-url-whenever-the-user-browses-the-saml-consumer-endpoint-without-a-response",level:2},{value:"SAML SSO \u2013 Redirect the user to a specified URL whenever the user browses the CloudShell Portal login page",id:"saml-sso--redirect-the-user-to-a-specified-url-whenever-the-user-browses-the-cloudshell-portal-login-page",level:2},{value:"SAML SSO \u2013 Redirect the user to a specified URL whenever the user browses the CloudShell Portal logout page",id:"saml-sso--redirect-the-user-to-a-specified-url-whenever-the-user-browses-the-cloudshell-portal-logout-page",level:2},{value:"SAML SSO \u2013 Enable direct access to CloudShell Portal",id:"saml-sso--enable-direct-access-to-cloudshell-portal",level:2},{value:"SAML SSO \u2013 Change the name of the Domain attribute which defines the CloudShell domain to associate the user to",id:"saml-sso--change-the-name-of-the-domain-attribute-which-defines-the-cloudshell-domain-to-associate-the-user-to",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",...(0,n.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"single-sign-on-sso",children:"Single Sign On (SSO)"}),"\n",(0,l.jsx)(s.h2,{id:"sso--change-the-login-page-in-case-the-user-logs-out",children:"SSO \u2013 Change the login page in case the user logs out"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="CustomAbsoluteLoginPage" value="http://anyurl"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Text"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"N/A"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"sso--enable-or-disable-sso",children:"SSO \u2013 Enable or disable SSO"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="Authentication.ExternalLoginMode" value="None"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Token, Header, None"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"Token"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"sso--enable-or-disable-using-token-mode",children:"SSO \u2013 Enable or disable using Token mode"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="Authentication.ExternalLoginMode" value="Token"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Token, Header, None"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"Token"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"sso--configure-token-encryption-using-rijndael-symmetric-encryption-key-32-bytes",children:"SSO \u2013 Configure token encryption using Rijndael symmetric encryption key (32 bytes)"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="Authentication.ExternalLoginKey" value="xxxx"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Any multiple of 32 bits"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"As set in the QsTeamServer.exe.config file in the Quali Server installation directory"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"sso--configure-token-encryption-using-rijndael-symmetric-encryption-key-iv-16-bytes",children:"SSO \u2013 Configure token encryption using Rijndael symmetric encryption key IV (16 bytes)"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="Authentication.ExternalLoginIV" value="yyy"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Any multiple of 16 bits"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"As set in the QsTeamServer.exe.config file in the Quali Server installation directory"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"header-mode--used-when-the-username-is-added-to-one-of-the-http-headers",children:"Header mode \u2013 used when the username is added to one of the HTTP headers"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="Authentication.ExternalLoginMode" value="Header"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Any username that is added to one of the HTTP headers"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"Token"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,l.jsx)(s.h1,{id:"saml-single-sign-on-sso",children:"SAML Single Sign On (SSO)"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.em,{children:"SSO/SLO configuration is available with CloudShell Premium Tier."})}),"\n",(0,l.jsxs)(s.p,{children:["For step-by-step instructions on how to use these configuration keys, see ",(0,l.jsx)(s.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/#configuring-saml-single-sign-on-sso",children:"Configuring SAML\xa0Single Sign-On (SSO)"}),"."]}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"CloudShell supports SAML v2.0. If you encounter an error, please contact your SAML administrator."})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--enable-saml-sso-authentication",children:"SAML SSO \u2013 Enable SAML SSO authentication"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SamlSSOAuthenticationEnabled" value="true" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"True/False"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"False"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--configure-the-assertion-consumer-service-url",children:"SAML SSO \u2013 Configure the Assertion Consumer Service URL"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SamlAssertionConsumerServiceUrl" value="http://localhost:60433/Saml/Consume" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"URL string with the address of the CloudShell Portal (including server IP address and port number)"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"N/A"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--configure-the-url-of-the-identity-provider",children:"SAML SSO \u2013 Configure the URL of the Identity Provider"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SamlIdpTargetUrl" value="http://stubidp.kentor.se/" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"URL of the Identity Provide (IdP)"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"N/A"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--configure-the-address-of-the-login-page-customabsoluteloginpage",children:"SAML SSO \u2013 Configure the address of the login page (CustomAbsoluteLoginPage)"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="CustomAbsoluteLoginPage" value="http://localhost:60433/Saml/Index" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Text, URL string with the address of the CloudShell Portal (including server IP address and port number)"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"N/A"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--configure-the-deflateinflate-compression-when-processing-saml-requests",children:"SAML SSO \u2013 Configure the deflate/inflate compression when processing SAML requests"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SamlDeflateInflate" value="false" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"True/False"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"True"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--configure-the-name-of-the-certificate-key-file-pfx-file-to-sign-the-saml-request-with",children:"SAML SSO \u2013 Configure the name of the certificate key file (.pfx file) to sign the SAML request with"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SamlIssuerCert" value="HuaweiCA.pfx;roveafuna" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Text, if the certificate is locked with a password use a semicolon and provide the password (as shown in the above example)"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"N/A"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--configure-the-http-method-to-use-when-issuing-the-saml-request-ot-the-identity-provider",children:"SAML SSO \u2013 Configure the HTTP method to use when issuing the SAML request ot the Identity Provider"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SamlRequestMethod" value="GET" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Get, Post, Redirect"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"Redirect (which does not check for browser compatibility)"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--redirect-the-user-to-a-specified-url-whenever-the-user-browses-the-saml-consumer-endpoint-without-a-response",children:"SAML SSO \u2013 Redirect the user to a specified URL whenever the user browses the SAML consumer endpoint without a response"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SamlEmptyResponseRedirectUrl" value="http://developer.huawei.com/cn/ict/" />'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"URL string or Null"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"NULL (which means the user will not be redirected and ultimately will get an error message saying the response is empty)"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--redirect-the-user-to-a-specified-url-whenever-the-user-browses-the-cloudshell-portal-login-page",children:"SAML SSO \u2013 Redirect the user to a specified URL whenever the user browses the CloudShell Portal login page"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="CustomAbsoluteLoginPage" value="http://developer.huawei.com/cn/ict/"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"URL string (In SAML and SSO context, this key is usually used to hide the login page and redirect incoming users to the SAML endpoint. Some environments (like Huawei) use it to redirect users when they log off of the portal back to their landing page.)"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"N/A"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--redirect-the-user-to-a-specified-url-whenever-the-user-browses-the-cloudshell-portal-logout-page",children:"SAML SSO \u2013 Redirect the user to a specified URL whenever the user browses the CloudShell Portal logout page"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="CustomAbsoluteLogoutPage" value="http://[server]/AuthServices/Logout"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"URL string , where [server] is the IdP server's IP or DNS"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"N/A"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"6.4 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--enable-direct-access-to-cloudshell-portal",children:"SAML SSO \u2013 Enable direct access to CloudShell Portal"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="add key="BypassCustomLogin" value="true"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"True/False"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"False"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"7.1 and above"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"saml-sso--change-the-name-of-the-domain-attribute-which-defines-the-cloudshell-domain-to-associate-the-user-to",children:"SAML SSO \u2013 Change the name of the Domain attribute which defines the CloudShell domain to associate the user to"}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsxs)(s.p,{children:["This attribute may be added when setting up users in an IdP, to log a user into a specific domain if a user belongs to more than one domain. For more information, see ",(0,l.jsx)(s.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/#set-up-an-identity-provider-idp",children:"Set up an Identity Provider (IdP)"}),"."]})}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Key"}),(0,l.jsx)("td",{children:(0,l.jsx)(s.code,{children:'<add key="SsoDomainAssertionName" value="MyDomainAttribute"/>'})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Possible values"}),(0,l.jsx)("td",{children:"Text"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Where to add/change"}),(0,l.jsxs)("td",{children:[(0,l.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Default value"}),(0,l.jsx)("td",{children:"Domain"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Affected CloudShell Component"}),(0,l.jsx)("td",{children:"CloudShell Portal"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Version"}),(0,l.jsx)("td",{children:"8.2 and above"})]})]})})]})}function a(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>r,M:()=>i});var l=t(11504);const n={},d=l.createContext(n);function i(e){const s=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(d.Provider,{value:s},e.children)}}}]);