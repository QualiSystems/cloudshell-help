"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[77800],{94032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=n(17624),s=n(4552);const i={sidebar_position:8},o="Associating Resources to Specific Execution Servers",c={id:"portal/inventory/managing-resources/associate-resources-to-es",title:"Associating Resources to Specific Execution Servers",description:"For details about associating Apps or blueprints to execution servers, see Setting Up Execution Servers to Run Commands.",source:"@site/docs/portal/inventory/managing-resources/associate-resources-to-es.md",sourceDirName:"portal/inventory/managing-resources",slug:"/portal/inventory/managing-resources/associate-resources-to-es",permalink:"/cloudshell-help/next/portal/inventory/managing-resources/associate-resources-to-es",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/inventory/managing-resources/associate-resources-to-es.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Editing Resources from the Inventory Dashboard",permalink:"/cloudshell-help/next/portal/inventory/managing-resources/editing-resources-from-inventory-dashboard"},next:{title:"Deleting Resources from the Inventory",permalink:"/cloudshell-help/next/portal/inventory/managing-resources/deleting-resources-from-inventory"}},l={},a=[{value:"Creating Execution Server Selector attributes",id:"creating-execution-server-selector-attributes",level:2},{value:"Adding the Execution Server Selector attributes to resources",id:"adding-the-execution-server-selector-attributes-to-resources",level:2},{value:"Related Topics",id:"related-topics",level:2}];function A(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"associating-resources-to-specific-execution-servers",children:"Associating Resources to Specific Execution Servers"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["For details about associating Apps or blueprints to execution servers, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"This article explains how to link a resource to a specific execution server or group of execution servers. This is especially useful in deployments that include multiple geographically-distributed sites, to ensure that distant lab resources are handled by an on premise execution server, to reduce latency and improve performance."}),"\n",(0,r.jsxs)(t.p,{children:["This is done by setting the same value on the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," attribute on the resource and on the suitable execution server(s)."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Resources based on 2nd Gen Shells include the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," attribute. If you don't see the attribute in the cloud provider resource's ",(0,r.jsx)(t.strong,{children:"Discovery"})," page, make sure it has the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," rule - for details, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes#defining-attribute-rules",children:"Defining attribute rules"}),'. Alternatively, you can create a dedicated "Execution Server Selector" attribute and associate it to your Amazon AWS shell.']})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"To associate a resource to an execution server:"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Set the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," value on the execution server."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Open the ",(0,r.jsx)(t.strong,{children:"Manage"})," dashboard's ",(0,r.jsx)(t.strong,{children:"Execution Servers>Servers"})," page."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(29904).c+"",width:"931",height:"498"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Click the suitable execution server."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Attributes"})," dialog box is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Specify the resource's domain in the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"}),' attribute. For example: "London".']}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(75640).c+"",width:"602",height:"261"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Set the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," value on the resource."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Inventory"})," dashboard, in the ",(0,r.jsx)(t.strong,{children:"Resources"})," tab, make sure the resource is not currently reserved."]}),"\n",(0,r.jsxs)(t.li,{children:["Click the resource's menu button ",(0,r.jsx)(t.img,{src:n(62672).c+"",width:"28",height:"27"})," and select ",(0,r.jsx)(t.strong,{children:"Discovery"}),". If ",(0,r.jsx)(t.strong,{children:"Discovery"})," is unavailable, click ",(0,r.jsx)(t.strong,{children:"Edit"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," attribute, specify the same value you set on the execution server and rediscover the resource."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"When running a command on the resource, CloudShell will use this execution server. If additional execution servers have the same attribute value, CloudShell will select the first available one."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"In some scenarios, you may want to specify additional criteria for execution server selection. For example, an execution server in India that is running on a Windows OS. To achieve this, make sure the resource has these two selector attributes (for example, 'Lab Location' and 'OS'), with 'India' and 'Windows' as their values and at least one execution server with these two attributes selected and with the same values."}),"\n",(0,r.jsxs)(t.li,{children:["In CloudShell, you will need to create the attributes with the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," rule and then add the attributes to the shell, as explained in the following sections."]}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"creating-execution-server-selector-attributes",children:"Creating Execution Server Selector attributes"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In ",(0,r.jsx)(t.strong,{children:"Resource Manager Client"}),", open the ",(0,r.jsx)(t.strong,{children:"Attributes"})," tab."]}),"\n",(0,r.jsxs)(t.li,{children:["Create the new attribute. The attribute can be of any type except ",(0,r.jsx)(t.strong,{children:"Password"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Attach the ",(0,r.jsx)(t.strong,{children:"Execution Server Selector"})," rule to the attribute.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{src:n(29972).c+"",width:"827",height:"583"})]}),"\n",(0,r.jsx)(t.li,{children:"Save your changes."}),"\n",(0,r.jsx)(t.li,{children:"Repeat steps a-d to add additional linking attributes."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-execution-server-selector-attributes-to-resources",children:"Adding the Execution Server Selector attributes to resources"}),"\n",(0,r.jsx)(t.p,{children:"In order to use the Execution Server Selector attribute you created, you must first add the attribute to the resource's shell."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To add attributes to a 2nd Gen shell, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-shells#adding-custom-attributes-to-a-shell",children:"Adding custom attributes to a Shell"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"To add attributes to a 1st Gen shell:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In ",(0,r.jsx)(t.strong,{children:"Resource Manager Client"}),", open the ",(0,r.jsx)(t.strong,{children:"Resource Families"})," explorer."]}),"\n",(0,r.jsx)(t.li,{children:"Add the attributes to the relevant models/families."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/cloudshell-help/next/portal/inventory/inventory-dashboard",children:"Inventory Dashboard"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},75640:(e,t,n)=>{n.d(t,{c:()=>r});const r="data:image/png;base64,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"},62672:(e,t,n)=>{n.d(t,{c:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFUSURBVEhL7ZS7SgNBFIYHrOwtfAlfwrcQwU58ATvBQiWNgiJYWKWxEUELEWJEFCGINobE3MxmL+7sLbMxWUgTEX5n0fJYOOxOleJjivMzH3Nm5rCuGKNjmGi327nTbDbBTIfDtm04jpM7lmWBcc7h+74WPM8Dowp5MhVmjrLQS/F+Vqr+F8pCh/vovQewXR9ciqkMhbKwcCswvzfC2kWMVysgMxTKwp0bgbndEVbPY9RNDcK7RojDhz4uqxFM2VYqQ6EsrLRCFB8jlOshLB3CjZLAzHaC5dMBqj0NLT2472PhaIj1K4GGjkfzYgQo1UI8vcmvIb8IlaFQFp48R1iS7dyXJ+04dIZCWbh5LTBbSLByFqOm4w6PK30sFj+wVRZo6bjDdI6mIy3lP/NUWajKVJg5jAchWcgLZg3G4EFEFrPGdV2wbvIFY/QpmfyueSH3H07wDfMM0OyAn/SkAAAAAElFTkSuQmCC"},29972:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/Management_2-449c7a9ce63e2475d3e09d9333e3c340.png"},29904:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/Management_2_1-0dfb3cbe27aaa9a93370d3ba702d6935.png"},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>o});var r=n(11504);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);