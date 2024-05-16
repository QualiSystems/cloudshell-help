"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[63420],{164:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=t(17624),i=t(4552);const o={sidebar_position:0,title:"How to use"},a="CloudShell Administration REST API Usage",d={id:"api-guide/cs-admin-rest-api/cs-admin-rest-api-usage",title:"How to use",description:"1. To use the API's methods, you must pass an authentication token. To obtain the token, execute the login method with a CloudShell system admin's credentials:",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/cs-admin-rest-api-usage.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/cs-admin-rest-api-usage",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/cs-admin-rest-api-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/cs-admin-rest-api-usage.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:0,frontMatter:{sidebar_position:0,title:"How to use"},sidebar:"tutorialSidebar",previous:{title:"CloudShell Administration REST API",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/"},next:{title:"API Response Codes",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/cs-admin-rest-api-response-code"}},r={},l=[];function c(e){const s={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"cloudshell-administration-rest-api-usage",children:"CloudShell Administration REST API Usage"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"To use the API's methods, you must pass an authentication token. To obtain the token, execute the login method with a CloudShell system admin's credentials:"}),"\n",(0,n.jsxs)(s.p,{children:["PUT ",(0,n.jsx)(s.code,{children:"http://<CloudShell Server>:<CloudShell Server port>/Api/Auth/Login"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n    "Username": "admin",\n    "Password": "admin",\n    "Token": null,\n    "Domain": "Global"\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"For example:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(48784).c+"",width:"639",height:"433"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"And feed the token you got in the response into the API requests as a Bearer Token:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(34300).c+"",width:"993",height:"268"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},34300:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/RM-API-bearer-token-33790ac2f81fe037cc1e747a1fa29d72.png"},48784:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/RM-API-login-e1dfe67f9b45e45308f8007e40b6e6c9.png"},4552:(e,s,t)=>{t.d(s,{I:()=>d,M:()=>a});var n=t(11504);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);