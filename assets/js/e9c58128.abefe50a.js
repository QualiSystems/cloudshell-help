"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[23472],{34120:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(17624),o=i(4552);const t={sidebar_position:3},l="SSO Login to CloudShell APIs",r={id:"devguide/available-cs-api/sso-login-to-cs-api",title:"SSO Login to CloudShell APIs",description:"This article explains how to use CloudShell APIs via SSO. This option provides user access to our APIs directly from your identity provider (IdP) using an authentication token.",source:"@site/versioned_docs/version-2023.3/devguide/available-cs-api/sso-login-to-cs-api.md",sourceDirName:"devguide/available-cs-api",slug:"/devguide/available-cs-api/sso-login-to-cs-api",permalink:"/devguide/available-cs-api/sso-login-to-cs-api",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/available-cs-api/sso-login-to-cs-api.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Editing Apps in a Sandbox",permalink:"/devguide/available-cs-api/useful-cs-api-examples/edit-app-in-sandbox"},next:{title:"Reference",permalink:"/category/reference"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"API authentication token creation flow",id:"api-authentication-token-creation-flow",level:2},{value:"Login request example",id:"login-request-example",level:2},{value:"API call using an API authentication token",id:"api-call-using-an-api-authentication-token",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sso-login-to-cloudshell-apis",children:"SSO Login to CloudShell APIs"}),"\n",(0,s.jsx)(n.p,{children:"This article explains how to use CloudShell APIs via SSO. This option provides user access to our APIs directly from your identity provider (IdP) using an authentication token."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"SSO login is not supported for New Job Scheduling API."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IDPUserInfoUrl"})," Server configuration key."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"More..."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To set the IDPUserInfoUrl:"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the Server ",(0,s.jsx)(n.code,{children:"customer.config"})," file (usually at ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the following in a new line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<add key="IDPUserInfoUrl" value="<url of userinfo endpoint>"/>\n'})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<add key="IDPUserInfoUrl" value="http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/userinfo/>"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restart the ",(0,s.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['IdP user profile that contains an email address ("email" claim and value). To register new users, see the ',(0,s.jsx)(n.a,{href:"/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/#to-define-user-groups-for-saml-sso",children:"To define user groups for SAML SSO:"})," section."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["JWT token generated in your IdP. Note that the authorization token is valid for 5 hours by default, but the validity period can be extended using the ",(0,s.jsx)(n.code,{children:"AuthToken.ExpirationSpanMinutes"})," configuration key."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"api-authentication-token-creation-flow",children:"API authentication token creation flow"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(75380).c+"",width:"817",height:"252"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User sends to Quali Server a login request containing the JWT token and CloudShell domain name."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Quali Server validates the JWT token against the user's IdP."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The IdP returns to Quali Server the user's details in a UserInfo object."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(1843).c+"",width:"336",height:"141"})}),"\n",(0,s.jsx)(n.p,{children:"Quali Server uses the IdP user's email address to identify an existing CloudShell user or create a new one to be used in the authentication token."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Quali Server sends the user a response containing the authentication token."}),"\n",(0,s.jsxs)(n.p,{children:["If the API calls time out, consider extending the request timeout period for API POST requests over SSO using the ",(0,s.jsx)(n.code,{children:"IDPRequestTimeout"})," configuration key."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"More..."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To extend the timeout period for API POST\xa0requests over SSO:"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the Server ",(0,s.jsx)(n.code,{children:"customer.config"})," file (usually at ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the following in a new line and set the desired period, in seconds (default is 10):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<add key="IDPRequestTimeout" value="10"/>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restart the ",(0,s.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"login-request-example",children:"Login request example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(67692).c+"",width:"1284",height:"640"})}),"\n",(0,s.jsx)(n.h2,{id:"api-call-using-an-api-authentication-token",children:"API call using an API authentication token"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from cloudshell.api.cloudshell_api import CloudShellAPISession\n\napi = CloudShellAPISession(host="localhost", token_id="eyJhbGciOiJSUzI....zHMyOeJYu-0xodJ_yghhbg", domain="Global")\n\nresult = api.AddTopologiesToDomain(topologyNames=["CloudShell Sandbox Template"],domainName="Domain A")\nprint(f\'{result}\')\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},67692:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/ApiSsoFlow1-baff9d727c67b7febf75325aee3c40e2.png"},1843:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/ApiSsoFlow2-eeea03f13d8423a0ee8abe54ad847db9.png"},75380:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/SsoApiFlow_817x252-f9798ef695b613d7bc301fb77eeba777.png"},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>l});var s=i(11504);const o={},t=s.createContext(o);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);