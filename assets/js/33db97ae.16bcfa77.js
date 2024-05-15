"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[37664],{23172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(17624),o=t(4552);const i={sidebar_position:2},r="Cost Management of AWS EC2 Instances",a={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances",title:"Cost Management of AWS EC2 Instances",description:"To assist with your AWS EC2 cost management activities, AWS EC2 resources that are created by CloudShell Apps include the following tags: Blueprint, CreatedBy, Domain, Name, Owner, and ReservationId.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure the Qualix Server for AWS EC2",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-the-qualix-server-for-aws-ec2"},next:{title:"Managing AWS EC2 Execution Servers",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers"}},l={},c=[{value:"Creating budgets",id:"creating-budgets",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cost-management-of-aws-ec2-instances",children:"Cost Management of AWS EC2 Instances"}),"\n",(0,s.jsxs)(n.p,{children:["To assist with your AWS EC2 cost management activities, AWS EC2 resources that are created by CloudShell Apps include the following tags: ",(0,s.jsx)(n.strong,{children:"Blueprint"}),", ",(0,s.jsx)(n.strong,{children:"CreatedBy"}),", ",(0,s.jsx)(n.strong,{children:"Domain"}),", ",(0,s.jsx)(n.strong,{children:"Name"}),", ",(0,s.jsx)(n.strong,{children:"Owner"}),", and ",(0,s.jsx)(n.strong,{children:"ReservationId"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"note",children:(0,s.jsx)(n.p,{children:"These tags should not be altered as this may cause unexpected behavior and inaccurate AWS budget reports."})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(60708).c+"",width:"934",height:"342"})}),"\n",(0,s.jsx)(n.h2,{id:"creating-budgets",children:"Creating budgets"}),"\n",(0,s.jsx)(n.p,{children:"Budgets are your way to manage your CloudShell AWS costs. Here are a few examples of how to use CloudShell tags in your budget:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For a general budget, select the ",(0,s.jsx)(n.strong,{children:"CreatedBy"})," tag with the ",(0,s.jsx)(n.strong,{children:"CloudShell"})," value, and specify an amount."]}),"\n",(0,s.jsxs)(n.li,{children:["To limit specific users, select the ",(0,s.jsx)(n.strong,{children:"Owner"})," tag and specify the owner for whom to create a budget."]}),"\n",(0,s.jsxs)(n.li,{children:["To limit the number of times a blueprint can be reserved, select the ",(0,s.jsx)(n.strong,{children:"Blueprint"})," tag and select a specific blueprint."]}),"\n",(0,s.jsxs)(n.li,{children:["To limit the number of AWS instances that can be created per domain, select the ",(0,s.jsx)(n.strong,{children:"Domain"})," tag and select a certain domain."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For additional information on creating a budget, see ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/289",children:"CloudShell AWS Cost Management"})," on our Community forum."]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},60708:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/AWSTags-f795a9e1013cf866c9a5919e5ab30867.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(11504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);