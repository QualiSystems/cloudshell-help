"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6356],{2668:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>t});var l=n(17624),s=n(4552);const r={},d="CloudShell Administration REST API",a={id:"api-guide/cs-admin-rest-api/index",title:"CloudShell Administration REST API",description:"This API enables developers to perform CloudShell administration tasks. This includes managing CloudShell users, groups, domains, license pools, associating resources and blueprints to other domains, and more.",source:"@site/docs/api-guide/cs-admin-rest-api/index.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/index.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CloudShell API Overview",permalink:"/cloudshell-help/next/api-guide/cs-api-overview"},next:{title:"How to use",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/cs-admin-rest-api-usage"}},o={},t=[];function c(e){const i={a:"a",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"cloudshell-administration-rest-api",children:"CloudShell Administration REST API"}),"\n",(0,l.jsx)(i.p,{children:"This API enables developers to perform CloudShell administration tasks. This includes managing CloudShell users, groups, domains, license pools, associating resources and blueprints to other domains, and more."}),"\n",(0,l.jsx)(i.p,{children:"The following Administration APIs are available:"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Login:"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-admin-api-token",children:"Get Administration API token"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Domains:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage CloudShell domains."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-domain",children:"Create domain"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-by-id",children:"Get domain by ID"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-domain",children:"Edit domain"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-domain",children:"Delete domain"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"DomainBlueprints:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage a domain's blueprints."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-blueprints",children:"Get domain's blueprints"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-blueprints-to-domain",children:"Add blueprints to domain"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-blueprint-from-domain",children:"Remove blueprints from domain"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"DomainGroups:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage a domain's group associations."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"./get-domain-group",children:"Get domain's groups"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-groups-to-domain",children:"Add groups to domain"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-groups-from-domain",children:"Remove groups from domain"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"DomainResources:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage a domain's resources."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-resources",children:"Get domain's resources"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-resource-to-domain",children:"Add resources to domain"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-resource-from-domain",children:"Remove resources from domain"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Groups:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage CloudShell groups."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-group",children:"Create group"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-by-id",children:"Get group by ID"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-group",children:"Edit group"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-group",children:"Delete group"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"GroupDomains:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage a group's domain associations."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-domains",children:"Get group's domains"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-domains-to-group",children:"Add domains to group"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-domains-from-group",children:"Remove domains from group"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"GroupUsers:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage a group's users."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-users",children:"Get group's users"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-users-to-group",children:"Add users to group"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-users-from-group",children:"Remove users from group"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Users:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage CloudShell users."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-users",children:"Get all users"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-user-by-id",children:"Get user by ID"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-user",children:"Create user"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-user",children:"Edit user"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-user",children:"Delete user"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"IdentityManagement:"})}),"\n",(0,l.jsx)(i.p,{children:"Get and import users from your active directory or LDAP."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-external-groups",children:"Get all external groups"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-users-from-an-external-group",children:"Get users from an external group"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/import-external-users",children:"Import external users"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"LicensePools:"})}),"\n",(0,l.jsx)(i.p,{children:"Manage CloudShell license pools."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-license-pools",children:"Get all license pools"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-license-pool-by-id",children:"Get license pool by ID"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-license-pool",children:"Create license pool"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-license-pool",children:"Edit license pool"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-license-pool",children:"Delete license pool"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>a,M:()=>d});var l=n(11504);const s={},r=l.createContext(s);function d(e){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:i},e.children)}}}]);