"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[91516],{11400:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=i(17624),r=i(4552);const n={sidebar_position:1},s="Configuring CloudShell to Automatically Import Active Directory Users on First Login",l={id:"admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/configuring-cloudshell-to-automatically-import-active-directory-users-on-first-login",title:"Configuring CloudShell to Automatically Import Active Directory Users on First Login",description:"This article explains how to configure CloudShell to automatically import users from an active directory (or LDAP) when they log in to CloudShell for the first time, and associate the imported users to the appropriate group. Note that the passwords of imported users are managed by the directory service provider itself.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/configuring-cloudshell-to-automatically-import-active-directory-users-on-first-login.md",sourceDirName:"admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration",slug:"/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/configuring-cloudshell-to-automatically-import-active-directory-users-on-first-login",permalink:"/cloudshell-help/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/configuring-cloudshell-to-automatically-import-active-directory-users-on-first-login",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/configuring-cloudshell-to-automatically-import-active-directory-users-on-first-login.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Active Directory Integration",permalink:"/cloudshell-help/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/"},next:{title:"Importing users into CloudShell from an active directory",permalink:"/cloudshell-help/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/importing-users-into-cloudshell-from-an-active-directory"}},a={},c=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"configuring-cloudshell-to-automatically-import-active-directory-users-on-first-login",children:"Configuring CloudShell to Automatically Import Active Directory Users on First Login"}),"\n",(0,o.jsx)(t.p,{children:"This article explains how to configure CloudShell to automatically import users from an active directory (or LDAP) when they log in to CloudShell for the first time, and associate the imported users to the appropriate group. Note that the passwords of imported users are managed by the directory service provider itself."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"To configure CloudShell to auto-import users on first login:"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Make sure Quali Server is running using a Microsoft login account with access to the appropriate active directory domain."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The account is displayed in the ",(0,o.jsx)(t.strong,{children:"Windows Windows Services"})," window, in the ",(0,o.jsx)(t.strong,{children:"Properties"})," of the Quali Server service, in the ",(0,o.jsx)(t.strong,{children:"Log On"})," tab."]})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Open the ",(0,o.jsx)(t.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file, and add the following keys:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Key"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ActiveDirectory.Domain"}),(0,o.jsxs)(t.td,{children:['This key sets the active directory domain containing the users you want to allow into CloudShell. Specify the active directory domain as the value. For example, setting an active directory domain called "Router_UK":',(0,o.jsx)("br",{}),'<add key="ActiveDirectory.Domain" value="Router_UK"/>',(0,o.jsx)("br",{}),(0,o.jsx)(t.strong,{children:"Prerequisite:"})," The computer that will be used to import the users must be in your corporate domain."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ExternalUserManagement.AutoImportUser"}),(0,o.jsxs)(t.td,{children:["Add this key to enable CloudShell to automatically import users from an active directory or LDAP when they log in to CloudShell for the first time.",(0,o.jsx)("br",{}),'<add key="ExternalUserManagement.AutoImportUser" value="True"/>']})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Registration.AdditionalGroup"}),(0,o.jsxs)(t.td,{children:["When added automatically (at login), users imported from an active directory or LDAP will be added to the Group that is defined in this key.",(0,o.jsx)("br",{}),'For example, setting the "Regular Users" group for imported users:',(0,o.jsx)("br",{}),'<add key="Registration.AdditionalGroup" value="Regular Users"/>',(0,o.jsx)("br",{}),"The default group is ",(0,o.jsx)(t.strong,{children:"External Users"}),".",(0,o.jsx)("br",{}),(0,o.jsx)(t.strong,{children:"Important:"})," The Group must be associated with a domain."]})]})]})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Save the file."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Restart the ",(0,o.jsx)(t.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>s});var o=i(11504);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);