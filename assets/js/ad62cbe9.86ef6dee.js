"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30548],{6380:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=s(17624),o=s(4552);const n={sidebar_position:4},t="Associating Automation to Domains",l={id:"admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains",title:"Associating Automation to Domains",description:"CloudShell supports multi-tenancy for CloudShell components (scripts, resources, services, and Apps), allowing users in other domains to also use them. However, in the Global domain, you can manage all components regardless of their association to any particular domain.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains.md",sourceDirName:"admin/cloudshell-manage-dashboard/managing-automation",slug:"/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains",permalink:"/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Managing Drivers",permalink:"/admin/cloudshell-manage-dashboard/managing-automation/managing-drivers"},next:{title:"CloudShell Execution Server Configurations",permalink:"/admin/cloudshell-execution-server-configurations"}},r={},d=[{value:"Scripts in multiple domains",id:"scripts-in-multiple-domains",level:2},{value:"Resources in multiple domains",id:"resources-in-multiple-domains",level:2},{value:"Services and Apps in multiple domains",id:"services-and-apps-in-multiple-domains",level:2},{value:"Services",id:"services",level:3},{value:"Apps",id:"apps",level:3}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"associating-automation-to-domains",children:"Associating Automation to Domains"}),"\n",(0,a.jsx)(i.p,{children:"CloudShell supports multi-tenancy for CloudShell components (scripts, resources, services, and Apps), allowing users in other domains to also use them. However, in the Global domain, you can manage all components regardless of their association to any particular domain."}),"\n",(0,a.jsx)(i.h2,{id:"scripts-in-multiple-domains",children:"Scripts in multiple domains"}),"\n",(0,a.jsx)(i.p,{children:"When you add a script, it is associated to the domain you are currently in."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"To expose a script to all domains, add the script to the Global domain."}),"\n",(0,a.jsx)(i.li,{children:"If you added a script it to a blueprint or resource that has additional domains, the script will be accessible in those domains as well."}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"resources-in-multiple-domains",children:"Resources in multiple domains"}),"\n",(0,a.jsx)(i.p,{children:"To enable users of a specific domain to access and use a resource, you must associate that resource to the domain."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"If you add a resource to a blueprint that is associated with multiple domains, the resource will be accessible in those domains as well."}),"\n",(0,a.jsxs)(i.li,{children:["You can add a resource directly to an additional domain through Resource Manager. See ",(0,a.jsx)(i.a,{href:"/admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain#adding-resources-to-a-domain",children:"Adding resources to a domain"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"services-and-apps-in-multiple-domains",children:"Services and Apps in multiple domains"}),"\n",(0,a.jsx)(i.h3,{id:"services",children:"Services"}),"\n",(0,a.jsx)(i.p,{children:"When you import a service shell, most shells are automatically assigned a default service category which is associated with the Global domain. For custom shells, this may not be true."}),"\n",(0,a.jsx)(i.p,{children:"To expose a service to users of a non-Global domain, either associate the service to a category that is assigned to that domain or associate the service's category to that domain."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["For 1st gen service shells: modify the category(s) in the shell project\u2019s configuration files to add a new category(s). See the CloudShell Dev Guide's ",(0,a.jsx)(i.a,{href:"/devguide/reference/migrate-shells-to-py3",children:"Migrating Shells to Python 3"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["For 2nd gen service shells: See the CloudShell Dev Guide's ",(0,a.jsx)(i.a,{href:"/devguide/developing-shells/customize-shells#associating-categories-to-a-service-shell",children:"Associating categories to a service shell"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"apps",children:"Apps"}),"\n",(0,a.jsxs)(i.p,{children:["By default, all Apps are associated with the ",(0,a.jsx)(i.strong,{children:"Applications"})," category, which exposes those Apps in the Global domain.To expose an App in a non-Global domain, associate the App to a category in that domain. However, you also need to associate the App's deployment to that domain. To learn how to do this, see ",(0,a.jsx)(i.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"})," or ",(0,a.jsx)(i.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4552:(e,i,s)=>{s.d(i,{I:()=>l,M:()=>t});var a=s(11504);const o={},n=a.createContext(o);function t(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);