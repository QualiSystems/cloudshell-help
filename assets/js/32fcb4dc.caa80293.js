"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[97776],{6080:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(17624),o=i(4552);const s={sidebar_position:3},l="JSON Web Token (JWT) Configuration",r={id:"admin/cloudshell-identity-management/access-control-and-authentication/json-web-token-jwt-configuration",title:"JSON Web Token (JWT) Configuration",description:"JWT configuration is available for Premium accounts only. Using JWT Authentication in order to log into CloudShell requires advanced customization of the login requests, as well as on the CloudShell side. Please consult with your Technical Account Manager prior to such customization.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-identity-management/access-control-and-authentication/json-web-token-jwt-configuration.md",sourceDirName:"admin/cloudshell-identity-management/access-control-and-authentication",slug:"/admin/cloudshell-identity-management/access-control-and-authentication/json-web-token-jwt-configuration",permalink:"/cloudshell-help/admin/cloudshell-identity-management/access-control-and-authentication/json-web-token-jwt-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-identity-management/access-control-and-authentication/json-web-token-jwt-configuration.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuring Single Logout (SLO)",permalink:"/cloudshell-help/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo"},next:{title:"LDAP Integration",permalink:"/cloudshell-help/admin/cloudshell-identity-management/access-control-and-authentication/ldap-integration"}},a={},d=[{value:"Configuring JWT Authentication",id:"configuring-jwt-authentication",level:2},{value:"Enabling JWT\xa0authentication for CloudShell Portal",id:"enabling-jwtauthentication-for-cloudshell-portal",level:2},{value:"Defining the user&#39;s access permissions in CloudShell",id:"defining-the-users-access-permissions-in-cloudshell",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json-web-token-jwt-configuration",children:"JSON Web Token (JWT) Configuration"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"JWT configuration is available for Premium accounts only. Using JWT Authentication in order to log into CloudShell requires advanced customization of the login requests, as well as on the CloudShell side. Please consult with your Technical Account Manager prior to such customization."})}),"\n",(0,t.jsx)(n.p,{children:"JWT is an access control and authentication method that enables you to access several services through a single login page, prompting you to enter your credentials only once. You can use JWT to enable your users to access CloudShell through your homepage."}),"\n",(0,t.jsx)(n.h2,{id:"configuring-jwt-authentication",children:"Configuring JWT Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["To integrate JWT\xa0authentication with CloudShell, make sure JWT\xa0is installed and configured on your web app. For additional information, see ",(0,t.jsx)(n.a,{href:"https://jwt.io/",children:"JWT\xa0documentation"}),". Using JWT, an online Service Provider (SP) - CloudShell in our case - can contact a separate online Identity Provider (IdP), the customer's web app for example, to authenticate users who are trying to access secure content."]}),"\n",(0,t.jsx)(n.p,{children:"The following figure shows the typical use case addressed by JWT, where the principal (user) tries to access CloudShell. CloudShell redirects to the customer's login page, prompting the user to log in. Successful login grants the user access to CloudShell and the user is redirected back into CloudShell Portal, along with a JWT token. In subsequent logins, the user will automatically be granted access to CloudShell Portal as long as this token exists and is valid."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(38344).c+"",width:"874",height:"575"})}),"\n",(0,t.jsx)(n.h2,{id:"enabling-jwtauthentication-for-cloudshell-portal",children:"Enabling JWT\xa0authentication for CloudShell Portal"}),"\n",(0,t.jsx)(n.p,{children:"In order to enable your users to access CloudShell using JWT authentication, CloudShell needs to obtain certain details about the user from the cookie created by your login page."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To enable JWT\xa0authentication for CloudShell Portal:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\customer.config"})," file, and add the following keys:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration key"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="CustomAbsoluteLoginPage" value="http://<customer-login-page" />'}),(0,t.jsxs)(n.td,{children:["The URL to the customer's login page. The user will be redirected to this page for login authentication.",(0,t.jsx)("br",{}),'For example: "',(0,t.jsx)(n.a,{href:"http://localhost:7658/home/login",children:"http://localhost:7658/home/login"}),'"']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="JWT.CoockieName" value="CustomerJwtCookie" />'}),(0,t.jsx)(n.td,{children:"Name of the cookie created by the customer's login page"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="JWT.SecretCode" value="qiU32MA8ECYtjUtj4m007BYQNNlf90xTu_d-y2ik7MOIyKQ8drUBskw5G756t_6V" />'}),(0,t.jsx)(n.td,{children:"The customer's verification code. CloudShell uses this code to verify the customer's identity."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="JWT.UsernameField" value="displayName" />'}),(0,t.jsx)(n.td,{children:"The field containing the user's name in the cookie."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="JWT.EmailField" value="accountID" />'}),(0,t.jsx)(n.td,{children:"The field containing the user's email in the cookie."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="CustomAbsoluteLogoutPage" value="http://[server]/AuthServices/Logout"/>'}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"[server]"})," is the IdP server's IP or DNS. The URL to the customer's logout page. This page will be displayed when the user logs out of CloudShell."]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can map ",(0,t.jsx)(n.strong,{children:"JWT.UsernameField"})," and ",(0,t.jsx)(n.strong,{children:"JWT.EmailField"})," to fields in a ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\jwt_payload_mapping.config.json"})," claims file. For example:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:i(73144).c+"",width:"260",height:"120"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"CloudShell Portal IIS"})," service."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Next, follow the steps in the below procedure to define the user's access permissions in CloudShell."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"defining-the-users-access-permissions-in-cloudshell",children:"Defining the user's access permissions in CloudShell"}),"\n",(0,t.jsx)(n.p,{children:"When the user logs in to your web app, a CloudShell user is created. This user is created only once, and will be used to allow your application's user to access CloudShell on all future logins. This user is allowed to access a predefined CloudShell domain containing blueprints, resources and other assets that have been prepared in advance for the user. The configuration keys below set the login mode to be used and the CloudShell domain, the user's group and the group's role."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To define the user's access permissions in CloudShell:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file, and add the following key:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<add key="Authentication.ExternalLoginMode" value="Header" />'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Specify the user's settings in CloudShell."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration key"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="Registration.DefaultDomain" value="Global" />'}),(0,t.jsx)(n.td,{children:"The CloudShell domain which the user will be able to access"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="Registration.AdditionalGroup" value="NewUsers" />'}),(0,t.jsx)(n.td,{children:"The group associated to the specified domain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'<add key="Registration.DefaultRole" value="Regular" />'}),(0,t.jsx)(n.td,{children:"The group's role"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"You can change the user's permissions in the future, as appropriate."})]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n",(0,t.jsx)(n.p,{children:"Your users should now be able to access CloudShell with their own accounts."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38344:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/JWT-worfklow-3ebcbfaeee57c3fef2dd059c903a3701.png"},73144:(e,n,i)=>{i.d(n,{c:()=>t});const t="data:image/png;base64,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"},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>l});var t=i(11504);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);