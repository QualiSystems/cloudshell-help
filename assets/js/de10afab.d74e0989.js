"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[16488],{78840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(17624),i=t(4552);const r={sidebar_position:1},o="Quickstart Guide - Creating and Reserving Blueprints",c={id:"quick-start/creating-reserving",title:"Quickstart Guide - Creating and Reserving Blueprints",description:"In this guide, we\u2019ll focus on creating blueprints that model physical devices for L1 network/hardware testing purposes.",source:"@site/docs/quick-start/creating-reserving.md",sourceDirName:"quick-start",slug:"/quick-start/creating-reserving",permalink:"/cloudshell-help/next/quick-start/creating-reserving",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/quick-start/creating-reserving.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CloudShell Quickstart Guides",permalink:"/cloudshell-help/next/category/cloudshell-quickstart-guides"},next:{title:"Quickstart Guide - CloudShell Installation and Initial Setup",permalink:"/cloudshell-help/next/quick-start/install-and-setup"}},l={},a=[{value:"Basic flow",id:"basic-flow",level:2},{value:"Create a blueprint",id:"create-a-blueprint",level:2},{value:"Add resources to the blueprint",id:"add-resources-to-the-blueprint",level:2},{value:"Set up connectivity",id:"set-up-connectivity",level:2},{value:"Define the blueprint&#39;s properties",id:"define-the-blueprints-properties",level:2},{value:"Orchestration scripts",id:"orchestration-scripts",level:3}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quickstart-guide---creating-and-reserving-blueprints",children:"Quickstart Guide - Creating and Reserving Blueprints"}),"\n",(0,s.jsx)(n.p,{children:"In this guide, we\u2019ll focus on creating blueprints that model physical devices for L1 network/hardware testing purposes."}),"\n",(0,s.jsx)(n.p,{children:"Target audience: Blueprint designers"}),"\n",(0,s.jsx)(n.h2,{id:"basic-flow",children:"Basic flow"}),"\n",(0,s.jsx)(n.p,{children:"Using CloudShell, setting up the test environment is simple:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a blueprint."}),"\n",(0,s.jsx)(n.li,{children:"Add resources and model L1 connections."}),"\n",(0,s.jsx)(n.li,{children:"Define the blueprint's properties."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-blueprint",children:"Create a blueprint"}),"\n",(0,s.jsx)(n.p,{children:"A blueprint is an offline container of the environment you would like to spin up. It contains the environment\u2019s components and network connections, as well as any required automation scripts. The use of blueprints allows you to repeatedly launch the same pristine environment."}),"\n",(0,s.jsx)(n.p,{children:"To create a blueprint:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Blueprint Catalog, click the Create Blueprint link in the top left corner."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the blueprint\u2019s workspace, specify a name for the blueprint and click the check mark when you\u2019re done."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(76788).c+"",width:"530",height:"241"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you want other members of your domain to also see and use this blueprint, click the Lock button in the blue banner to unlock privacy."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(28456).c+"",width:"395",height:"112"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next, let\u2019s add resources and their network connections."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"add-resources-to-the-blueprint",children:"Add resources to the blueprint"}),"\n",(0,s.jsx)(n.p,{children:"Resources are our way of calling your devices in CloudShell. Each resource models a specific device in your lab, like a router, switch, DUT or bridge, and allows you to control that device or perform operations on it, from within CloudShell."}),"\n",(0,s.jsx)(n.p,{children:"Don\u2019t worry, the CloudShell admin already set those up for you. All you need to do is drag the ones you need into your blueprint and set up their network connections."}),"\n",(0,s.jsx)(n.p,{children:"To add resources to the blueprint."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the blueprint workspace, click Resources."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(29328).c+"",width:"373",height:"124"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"From the Add Resource catalog, drag the resources you need into the canvas."}),"\n",(0,s.jsx)(n.p,{children:"Our catalog has two resources, DUT and Traffic Generator, but you can use the free text search field or Advanced search to fine tune your search if you have a lot of resources."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(44876).c+"",width:"517",height:"327"})}),"\n",(0,s.jsx)(n.p,{children:"Each new blueprint includes CloudShell's out-of-the-box orchestration scripts that set up and tear down the environment. The Setup script provisions the resources to the sandbox, resolves reservation conflicts, deploys App VMs and establishes connections between the sandbox's endpoints. The Teardown script is activated when the sandbox starts its teardown process and is responsible for releasing the resources, removing connections and deletes App VMs and related infrastructure from their cloud provider."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"set-up-connectivity",children:"Set up connectivity"}),"\n",(0,s.jsx)(n.p,{children:"CloudShell also allows you to model the actual network connections between the blueprint\u2019s devices. When you reserve the blueprint, CloudShell will create the connections for you."}),"\n",(0,s.jsx)(n.p,{children:"To set up connectivity between 2 resources:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Hover over a resource and select the Create Connection option."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(22772).c+"",width:"510",height:"299"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Then, click the other resource."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Resource Connections dialog box, from the Connection Type dropdown list, select Route (Logical) to create a L1 connection or Connector for a L2 connection."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(19220).c+"",width:"571",height:"339"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select a port on the source resource and one on the target and click Add. Repeat this step to add additional connection routes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Save."}),"\n",(0,s.jsx)(n.p,{children:"Physical routes are represented by black dotted lines between the resources, as illustrated in the image below."}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If a connection route is purple, that\u2019s because you defined a Connector type of a connection. This is used for L2 connections and will fail unless you have an L2 resource orvCenter dvSwitch connecting the endpoints. Edit the route connection to open the Resource Connections dialog box, click the Inventory tab in the dialog box, delete the connections and create new ones."}),"\n",(0,s.jsx)(n.li,{children:"If you defined an L1 connection in the blueprint but the connection line is orange, that\u2019s because there\u2019s no L1 switch resource connecting the endpoints. Notify the administrator."}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(49812).c+"",width:"515",height:"369"})}),"\n",(0,s.jsx)(n.p,{children:"At this point, they\u2019re just connection requirements. When the sandbox starts, CloudShell will activate the connections, replacing the dotted lines with solid ones."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The blueprint is now ready for use. Next, let\u2019s learn how to reserve a blueprint so we can run our test."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"define-the-blueprints-properties",children:"Define the blueprint's properties"}),"\n",(0,s.jsx)(n.h3,{id:"orchestration-scripts",children:"Orchestration scripts"}),"\n",(0,s.jsxs)(n.p,{children:["CloudShell provides out-of-the-box setup and teardown orchestration scripts which are attached to every new blueprint, but you\u2019re welcome to create your own custom scripts, as explained in ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-orch-scripts/getting-started-with-orch-scripts#creating-and-using-orchestration-scripts-in-cloudshell",children:"Creating and using orchestration scripts in CloudShell"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The out-of-the-box scripts do the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CloudShell Sandbox Setup: Make sure sandbox resource are available (conflict resolution), reserve resources, deploy Apps on their defined cloud providers and establish connections"}),"\n",(0,s.jsx)(n.li,{children:"CloudShell Sandbox Teardown: Release resources, tear down Apps (delete deployed VMs and related infrastructure from the cloud provider) and remove connections."}),"\n",(0,s.jsx)(n.li,{children:"Save/Restore: Used to save the memory, state and configurations of sandboxes and later on restore them back"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},22772:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/CreateConnection-81ba7f504f73e87a79f4a586720a45fe.png"},76788:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/NewBlueprint-dcfccaf0f477b5c622012565c2c56fd1.png"},28456:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/PrivateBlueprint-4d4ad2c9ae860997fac6471a789f2d45.png"},44876:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ResourceCatalog-0674200c01f39765b65c4afd7cca9df9.png"},29328:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ResourceCatalogButton-75528dfab57ca34988faa2d0e19b622b.png"},49812:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ResourceConnectionRequirement-703f563e5e357958f8aa00bd6d8ecbd2.png"},19220:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ResourceConnectionsDialogBox-b9548172a76142c4586058ae9d29f46f.png"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var s=t(11504);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);