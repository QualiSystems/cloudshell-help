"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[10720],{86740:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var r=n(17624),i=n(4552);const l={sidebar_position:8},o="Unable to Locate a Resource",t={id:"troubleshooting/cloudshell-portal/unable-to-locate-a-resource",title:"Unable to Locate a Resource",description:"Error Message",source:"@site/docs/troubleshooting/cloudshell-portal/unable-to-locate-a-resource.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/unable-to-locate-a-resource",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/unable-to-locate-a-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/cloudshell-portal/unable-to-locate-a-resource.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Unable to Add Resources",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/unable-to-add-resources"},next:{title:"Empty Resource/App Catalogs",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/empty-resourceapp-catalogs"}},c={},a=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solutions",id:"solutions",level:2},{value:"Resource is not associated to the user&#39;s domain",id:"resource-is-not-associated-to-the-users-domain",level:3},{value:"Resource is unsearchable",id:"resource-is-unsearchable",level:3},{value:"Resource is only visible to admins",id:"resource-is-only-visible-to-admins",level:3},{value:"Resource is &quot;Excluded&quot;",id:"resource-is-excluded",level:3},{value:"Search engine is not in sync with the database",id:"search-engine-is-not-in-sync-with-the-database",level:3},{value:"Quali database is corrupted",id:"quali-database-is-corrupted",level:3}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"unable-to-locate-a-resource",children:"Unable to Locate a Resource"}),"\n",(0,r.jsx)(s.h2,{id:"error-message",children:"Error Message"}),"\n",(0,r.jsx)(s.admonition,{type:"danger-one-line",children:(0,r.jsx)(s.p,{children:"No resource matches your search"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"When searching in CloudShell Portal for a resource to add to a blueprint or sandbox, the user cannot locate the resource."}),"\n",(0,r.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Resource is not associated to the user's domain"}),"\n",(0,r.jsxs)(s.li,{children:["Resource has been marked as ",(0,r.jsx)(s.strong,{children:"Excluded"})]}),"\n",(0,r.jsxs)(s.li,{children:["Resource family is not set as ",(0,r.jsx)(s.strong,{children:"Searchable"})]}),"\n",(0,r.jsxs)(s.li,{children:["Resource family visibility is set to ",(0,r.jsx)(s.strong,{children:"Admin only"})]}),"\n",(0,r.jsx)(s.li,{children:"Search engine is not in sync with the database"}),"\n",(0,r.jsx)(s.li,{children:"There's a corruption in the Quali database (rare)"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"solutions",children:"Solutions"}),"\n",(0,r.jsx)(s.h3,{id:"resource-is-not-associated-to-the-users-domain",children:"Resource is not associated to the user's domain"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To associate a resource with your domain:"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Check if the resource is associated to the user's domain.","\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["In Resource Manager, click the ",(0,r.jsx)(s.strong,{children:"Resource Explorer"})," pane."]}),"\n",(0,r.jsxs)(s.li,{children:["In ",(0,r.jsx)(s.strong,{children:"Settings"})," click the ",(0,r.jsx)(s.strong,{children:"Domains"})," tab."]}),"\n",(0,r.jsx)(s.li,{children:"Verify that the user's domain is included in the list of domains."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["If not, add the resource to the user's domain, see ",(0,r.jsx)(s.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain#adding-resources-to-a-domain",children:"Adding resources to a domain"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"resource-is-unsearchable",children:"Resource is unsearchable"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To set a resource family as Searchable:"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Check if the resource family is set as ",(0,r.jsx)(s.strong,{children:"Searchable"}),".","\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["In Resource Manager, click the Admin button and select ",(0,r.jsx)(s.strong,{children:"Resource Families"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Choose the relevant ",(0,r.jsx)(s.strong,{children:"Resource Family"})," and in the ",(0,r.jsx)(s.strong,{children:"Parameters"})," section, verify that the ",(0,r.jsx)(s.strong,{children:"Searchable"})," check box has been selected."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["If not, select the ",(0,r.jsx)(s.strong,{children:"Searchable"})," check box."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"resource-is-only-visible-to-admins",children:"Resource is only visible to admins"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To set a resource family as Visible:"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Check if the resource's ",(0,r.jsx)(s.strong,{children:"Visibility"})," is set to ",(0,r.jsx)(s.strong,{children:"Admin only"})," in the ",(0,r.jsx)(s.strong,{children:"Inventory"})," dashboard."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["Admins can override the resource family setting for specific resources using the ",(0,r.jsx)(s.strong,{children:"Inventory"})," dashboard, see ",(0,r.jsx)(s.a,{href:"/cloudshell-help/next/portal/inventory/managing-resources/editing-resources-from-inventory-dashboard",children:"Editing Resources from the Inventory Dashboard"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Check if the resource family is set as visible."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["In Resource Manager, click the ",(0,r.jsx)(s.strong,{children:"Admin"})," button and select ",(0,r.jsx)(s.strong,{children:"Resource Families"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Choose the relevant ",(0,r.jsx)(s.strong,{children:"Resource Family"})," and in the ",(0,r.jsx)(s.strong,{children:"Parameters"})," section, verify that the ",(0,r.jsx)(s.strong,{children:"Admin only"})," check box has been de-selected."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["If not, unselect the ",(0,r.jsx)(s.strong,{children:"Admin only"})," check box."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"resource-is-excluded",children:'Resource is "Excluded"'}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To mark a resource as Included:"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Open CloudShell Portal."}),"\n",(0,r.jsxs)(s.li,{children:["Check if the resource is marked as ",(0,r.jsx)(s.strong,{children:"Excluded"}),", see ",(0,r.jsx)(s.a,{href:"/cloudshell-help/next/portal/inventory/managing-resources/include-exclude-resources",children:"Including/Excluding Inventory Resources"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["If the resource is marked as ",(0,r.jsx)(s.strong,{children:"Excluded"}),", change the marking to ",(0,r.jsx)(s.strong,{children:"Include"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"search-engine-is-not-in-sync-with-the-database",children:"Search engine is not in sync with the database"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To sync the search engine with the database, reset the resource indexing in one of two ways:"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Using CloudShell Montior:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Open CloudShell Monitor."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Select the ",(0,r.jsx)(s.strong,{children:"Quali Server"})," component."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the right pane, click the ",(0,r.jsx)(s.strong,{children:"Search"})," tab."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Ensure that ",(0,r.jsx)(s.strong,{children:"Service status"})," and ",(0,r.jsx)(s.strong,{children:"Engine status"})," are ",(0,r.jsx)(s.strong,{children:"Online"})," and click the ",(0,r.jsx)(s.strong,{children:"Start"})," button to refresh."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(79628).c+"",width:"1056",height:"698"})}),"\n",(0,r.jsxs)(s.p,{children:["When refresh has finished, the status will change to ",(0,r.jsx)(s.strong,{children:"Completed"})," and the number of refreshed resources is inidicated."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Using CloudShell configuration:"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"This method restarts the service and should not be used if other users require the service to be active."})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Open CloudShell Configuration wizard."}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"Quali Server"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["In the ",(0,r.jsx)(s.strong,{children:"Administrative tasks"})," window, click ",(0,r.jsx)(s.strong,{children:"Search Service"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["In the ",(0,r.jsx)(s.strong,{children:"Search Service"})," dialog box, click ",(0,r.jsx)(s.strong,{children:"OK"})," to confirm that you would like to re-index the search service. the re-indexing process includes a restart of the service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"quali-database-is-corrupted",children:"Quali database is corrupted"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To fix database corruptions:"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Run ",(0,r.jsx)(s.strong,{children:"DBCC CHECKDB"})," on the Quali db to check the database. For details, see this SQL Docs help page: ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-checkdb-transact-sql?view=sql-server-ver15",children:"DBCC CHECKDB (Transact-SQL)"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"If any corruptions are detected, work with your IT/DB admininstrator to fix those issues accordingly."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79628:(e,s,n)=>{n.d(s,{c:()=>r});const r=n.p+"assets/images/LogMonitor-QualiServer-0d5f71ce0ba66eb8168087875ac62624.png"},4552:(e,s,n)=>{n.d(s,{I:()=>t,M:()=>o});var r=n(11504);const i={},l=r.createContext(i);function o(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);