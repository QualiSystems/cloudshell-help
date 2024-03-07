"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3896],{92948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(17624),s=t(4552);const l={sidebar_position:5},r="Configure Single Sign-on (SSO) for the New Job Scheduling",o={id:"install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-sso",title:"Configure Single Sign-on (SSO) for the New Job Scheduling",description:"SSO is configured using SAML 2.0, which relies on a 3rd party identity provider (IdP) for user authentication and authorization.",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-sso.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/admin-actions",slug:"/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-sso",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-sso",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-sso.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Configure the New Job Scheduling to Run in HTTPS",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-https"},next:{title:"Change Log Levels for New Job Scheduling Services",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/change-log-level"}},d={},c=[];function a(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-single-sign-on-sso-for-the-new-job-scheduling",children:"Configure Single Sign-on (SSO) for the New Job Scheduling"}),"\n",(0,i.jsxs)(n.p,{children:["SSO is configured using SAML 2.0, which relies on a 3",(0,i.jsx)("sup",{children:"rd"})," party identity provider (IdP) for user authentication and authorization."]}),"\n",(0,i.jsx)(n.p,{children:"The user SSO login process is as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A user from your organization attempts to log in to the New Job Scheduling Portal."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The user is redirected to your organization\u2019s IdP login page."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The user logs in using their corporate account."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Upon successful authentication, the user is redirected back to the New Job Scheduling Portal with role-based access to the appropriate domains, as defined in your organization\u2019s SSO integration with CloudShell. (Recommended. Without CloudShell SSO, a CloudShell user must be created for each SSO user prior to SSO login)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Best practices:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-https.htm",children:"Configure the New Job Scheduling to Run in HTTPS"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfg-SSO.htm",children:"Configuring Single Sign-On (SSO)"})," (Recommended. Without CloudShell SSO, a CloudShell user must be created for each SSO user prior to SSO login)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To enable SSO for the New Job Scheduling:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If CloudShell SSO is configured, make sure each user has logged into CloudShell Portal at least once in order to create a user identity."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure a SAML 2.0 app with the required users. Users must have the following attribute:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute Name"}),(0,i.jsx)(n.th,{children:"Attribute Value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sub"}),(0,i.jsx)(n.td,{children:"user.login"})]})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(48340).c+"",width:"572",height:"115"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set your organization\u2019s IdP details in the customer.values.yaml file."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"jobSchedulingService"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AppSettings__CustomAbsoluteLoginPage"}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:"/AuthServices/SignIn"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"identityService"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Saml2Settings__SPEntityId"}),(0,i.jsx)(n.td,{children:'Customer\'s domain url with "/saml2" suffix'}),(0,i.jsx)(n.td,{children:"\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Saml2Settings__IPEntityId"}),(0,i.jsx)(n.td,{children:"Customer IdP entity ID"}),(0,i.jsx)(n.td,{children:"\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Saml2Settings__IPMetadataLocation"}),(0,i.jsx)(n.td,{children:"Path to the SAML Metadata - contains ssl certificate between IdP and Identity service provider"}),(0,i.jsx)(n.td,{children:"\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Saml2Settings__ReturnUrl"}),(0,i.jsx)(n.td,{children:"Customer's domain url"}),(0,i.jsx)(n.td,{children:"\xa0"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"identity-service:\n  enabled: true\n  identityService:\n    image:\n      tag: 1.0.2.1\n      pullSecret: cloudshell-secret\n    env:\n      AppSettings__CloudShell__Host: 192.168.124.4\n    Saml2Settings__SPEntityId: https://domain-name/Saml2\n    Saml2Settings__IPEntityId: http://www.okta.com/exkej8i2rswZxrlsq8k1\n    Saml2Settings__IPMetadataLocation: https://dev-36234681.okta.com/app/exkej8i2tetZxruff5d6/sso/saml/metadata\n\t  Saml2Settings__ReturnUrl: https://domain-name\n\njob-scheduling-service:\n  enabled: true\n  jobSchedulingService:\n    image:\n      tag: 1.0.2.1\n      pullSecret: cloudshell-acr\n    env:\n      QualiPortal__Host: 192.168.124.4\n      ## CloudShell Portal Port\n      QualiPortal__Port: 80\n      CloudShell__Host: 192.168.124.4\n    AppSettings__CustomAbsoluteLoginPage: /AuthServices/SignIn\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Redeploy the helm chart."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example - IdP Settings using Okta:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(94476).c+"",width:"572",height:"217"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},48340:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/JssSsoSamlAttributeStatements-53f7953a64fef6b0cc01708cbbd62cb1.png"},94476:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/JssSsoSamlSettings-bbc55d369c5e526acb040baa32053b72.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var i=t(11504);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);