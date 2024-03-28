"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[70494],{23428:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=n(17624),o=n(4552);const i={sidebar_position:1},l="CloudShell Users and Groups Overview",t={id:"admin/cloudshell-identity-management/managing-users/cloudshell-users-and-groups-overview",title:"CloudShell Users and Groups Overview",description:"User permissions in CloudShell are based on the user's group memberships. The System Administrator grants user permissions by adding users to groups.",source:"@site/docs/admin/cloudshell-identity-management/managing-users/cloudshell-users-and-groups-overview.md",sourceDirName:"admin/cloudshell-identity-management/managing-users",slug:"/admin/cloudshell-identity-management/managing-users/cloudshell-users-and-groups-overview",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/cloudshell-users-and-groups-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-identity-management/managing-users/cloudshell-users-and-groups-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing Users",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/"},next:{title:"Managing CloudShell Users",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users"}},a={},d=[];function u(e){const s={admonition:"admonition",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"cloudshell-users-and-groups-overview",children:"CloudShell Users and Groups Overview"}),"\n",(0,r.jsx)(s.p,{children:"User permissions in CloudShell are based on the user's group memberships. The System Administrator grants user permissions by adding users to groups."}),"\n",(0,r.jsx)(s.p,{children:"Each group in the system is assigned with a group role. The group role defines the permissions for all the users added to the group."}),"\n",(0,r.jsx)(s.p,{children:"The available group roles are:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"System admins"}),"\n",(0,r.jsx)(s.li,{children:"Domain admins"}),"\n",(0,r.jsx)(s.li,{children:"Regular users \u2013 default role for new group."}),"\n",(0,r.jsx)(s.li,{children:"External users"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The group with System admins role is created by the system, the group role can not be changed. only one group can hold the System admins role. the group contains the admin user."}),"\n",(0,r.jsx)(s.p,{children:"Any user can be added or removed from the group, with the exception of the admin user. The admin user is added by default and cannot be removed from the group."}),"\n",(0,r.jsx)(s.p,{children:"All group roles, except for the system administrator, can be changed at any time."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To allow a user to perform admin operations:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Specify the user as a system administrator when creating the user, or use the ",(0,r.jsx)(s.strong,{children:"Groups"})," tab to add the user to the System Administrators group."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To prevent users from performing admin operations:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Create one or more groups, assign a role other than admins to these groups and add CloudShell users to these groups.","\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"User and group settings are common to all CloudShell applications."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Adding CloudShell users"})}),"\n",(0,r.jsx)(s.p,{children:"There are various ways to create CloudShell users:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Add users manually"}),"\n",(0,r.jsx)(s.li,{children:"Import users from the Active directory, a CSV file, or a list"}),"\n",(0,r.jsx)(s.li,{children:"Build a driver to import users from a CSV file and automatically add them to groups"}),"\n",(0,r.jsx)(s.li,{children:"Using TestShell API"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>t,M:()=>l});var r=n(11504);const o={},i=r.createContext(o);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);