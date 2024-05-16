"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30548],{6380:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>t,toc:()=>r});var o=i(17624),a=i(4552);const n={sidebar_position:4},l="Associating Automation to Domains",t={id:"admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains",title:"Associating Automation to Domains",description:"CloudShell supports multi-tenancy for CloudShell components (scripts, resources, services, and Apps), allowing users in other domains to also use them. However, in the Global domain, you can manage all components regardless of their association to any particular domain.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains.md",sourceDirName:"admin/cloudshell-manage-dashboard/managing-automation",slug:"/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-automation/associating-automation-to-domains.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Managing Drivers",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-automation/managing-drivers"},next:{title:"CloudShell Execution Server Configurations",permalink:"/cloudshell-help/admin/cloudshell-execution-server-configurations"}},d={},r=[{value:"Scripts in multiple domains",id:"scripts-in-multiple-domains",level:2},{value:"Resources in multiple domains",id:"resources-in-multiple-domains",level:2},{value:"Services and Apps in multiple domains",id:"services-and-apps-in-multiple-domains",level:2},{value:"Services",id:"services",level:3},{value:"Apps",id:"apps",level:3}];function c(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"associating-automation-to-domains",children:"Associating Automation to Domains"}),"\n",(0,o.jsx)(s.p,{children:"CloudShell supports multi-tenancy for CloudShell components (scripts, resources, services, and Apps), allowing users in other domains to also use them. However, in the Global domain, you can manage all components regardless of their association to any particular domain."}),"\n",(0,o.jsx)(s.h2,{id:"scripts-in-multiple-domains",children:"Scripts in multiple domains"}),"\n",(0,o.jsx)(s.p,{children:"When you add a script, it is associated to the domain you are currently in."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"To expose a script to all domains, add the script to the Global domain."}),"\n",(0,o.jsx)(s.li,{children:"If you added a script it to a blueprint or resource that has additional domains, the script will be accessible in those domains as well."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"resources-in-multiple-domains",children:"Resources in multiple domains"}),"\n",(0,o.jsx)(s.p,{children:"To enable users of a specific domain to access and use a resource, you must associate that resource to the domain."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"If you add a resource to a blueprint that is associated with multiple domains, the resource will be accessible in those domains as well."}),"\n",(0,o.jsxs)(s.li,{children:["You can add a resource directly to an additional domain through Resource Manager. See ",(0,o.jsx)(s.a,{href:"/cloudshell-help/admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain#adding-resources-to-a-domain",children:"Adding resources to a domain"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"services-and-apps-in-multiple-domains",children:"Services and Apps in multiple domains"}),"\n",(0,o.jsx)(s.h3,{id:"services",children:"Services"}),"\n",(0,o.jsx)(s.p,{children:"When you import a service shell, most shells are automatically assigned a default service category which is associated with the Global domain. For custom shells, this may not be true."}),"\n",(0,o.jsx)(s.p,{children:"To expose a service to users of a non-Global domain, either associate the service to a category that is assigned to that domain or associate the service's category to that domain."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["For 1st gen service shells: modify the category(s) in the shell project\u2019s configuration files to add a new category(s). See the CloudShell Dev Guide's ",(0,o.jsx)(s.a,{href:"/cloudshell-help/devguide/reference/migrate-shells-to-py3",children:"Migrating Shells to Python 3"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["For 2nd gen service shells: See the CloudShell Dev Guide's ",(0,o.jsx)(s.a,{href:"/cloudshell-help/devguide/developing-shells/customize-shells#associating-categories-to-a-service-shell",children:"Associating categories to a service shell"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"apps",children:"Apps"}),"\n",(0,o.jsxs)(s.p,{children:["By default, all Apps are associated with the ",(0,o.jsx)(s.strong,{children:"Applications"})," category, which exposes those Apps in the Global domain.To expose an App in a non-Global domain, associate the App to a category in that domain. However, you also need to associate the App's deployment to that domain. To learn how to do this, see ",(0,o.jsx)(s.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"})," or ",(0,o.jsx)(s.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,a.M)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>t,M:()=>l});var o=i(11504);const a={},n=o.createContext(a);function l(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);