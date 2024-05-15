"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[67796],{80728:(e,o,l)=>{l.r(o),l.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var t=l(17624),r=l(4552);const n={sidebar_position:8},d="The Cloud Provider Interface",s={id:"devguide/develop-custom-cloud-provider-shells/the-cloud-provider-interface",title:"The Cloud Provider Interface",description:"The rest of this chapter is dedicated to implementing the cloud provider driver that will be called by the server when interaction with the cloud provider is needed. This includes setting up communication between CloudShell and the cloud provider of choice, implementing the driver commands required from the resource, such as Deploy App, Power On and Refresh IP, and setting the resource\u2019s live status icon (for example, \u201conline\u201d and \u201coffline\u201d).",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/the-cloud-provider-interface.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/the-cloud-provider-interface",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/the-cloud-provider-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/the-cloud-provider-interface.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Controlling App Deployment Orchestration",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/controlling-app-deployment-orch"},next:{title:"Resource Discovery",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/resource-discovery"}},i={},c=[];function h(e){const o={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"the-cloud-provider-interface",children:"The Cloud Provider Interface"}),"\n",(0,t.jsx)(o.p,{children:"The rest of this chapter is dedicated to implementing the cloud provider driver that will be called by the server when interaction with the cloud provider is needed. This includes setting up communication between CloudShell and the cloud provider of choice, implementing the driver commands required from the resource, such as Deploy App, Power On and Refresh IP, and setting the resource\u2019s live status icon (for example, \u201conline\u201d and \u201coffline\u201d)."}),"\n",(0,t.jsx)(o.p,{children:"The articles are:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/resource-discovery",children:"Resource Discovery"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/app-deployment",children:"App Deployment"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/power-off-and-delete-vm",children:"Power off and Delete VM"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/l2-network-connectivity",children:"L2 Network Connectivity"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/l3-network-connectivity",children:"L3 Network Connectivity"})}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["For illustration purposes, we will use a mock shell called HeavenlyCloud, which demonstrates the use and implementation of a custom cloud provider. We\u2019ve created two versions of the shell,\xa0",(0,t.jsx)(o.strong,{children:"L2HeavenlyCloudShell"}),"\xa0for L2 clouds\xa0",(0,t.jsx)(o.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example",children:"(download here)"}),"\xa0and\xa0",(0,t.jsx)(o.strong,{children:"L3HeavenlyCloudShell"}),"\xa0for L3 clouds\xa0",(0,t.jsx)(o.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example",children:"(download here)"}),". The difference between the two is in the networking connectivity implementation."]}),"\n",(0,t.jsx)(o.p,{children:"To see how the HeavenlyCloud cloud provider works, let\u2019s create a resource using the HeavenlyCloud shell in CloudShell Portal. First, download the appropriate mock shell .zip file from GitHub and extract it to your computer."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Shell Commands",src:l(66608).c+"",width:"624",height:"375"})}),"\n",(0,t.jsx)(o.p,{children:"Install the shell on CloudShell by running this command-line from the extracted shell project folder:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.code,{children:"shellfoundry install"})}),"\n",(0,t.jsxs)(o.p,{children:["In CloudShell Portal, open the\xa0",(0,t.jsx)(o.strong,{children:"Inventory"}),"\xa0dashboard and create a resource from the\xa0",(0,t.jsx)(o.strong,{children:"HeavenlyCloud"}),"\xa0shell."]}),"\n",(0,t.jsxs)(o.p,{children:["In the\xa0",(0,t.jsx)(o.strong,{children:"Manage>Apps"}),"\xa0page, create a new App template. Note that two new deployment types have been added, HeavenlyCloudAngelDeployment and HeavenlyCloudManDeployment. Select a deployment type and carry on setting the App template."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Shell Commands",src:l(19312).c+"",width:"624",height:"380"})}),"\n",(0,t.jsxs)(o.p,{children:["In the\xa0",(0,t.jsx)(o.strong,{children:"Deployment Paths"}),"\xa0page of the dialog box, make sure to select the new HeavenlyCloud cloud provider resource you created."]}),"\n",(0,t.jsxs)(o.p,{children:["Next, let\u2019s implement the\xa0",(0,t.jsx)(o.em,{children:"get_inventory"}),"\xa0function, which discovers and validates the resource against the cloud provider of choice."]})]})}function a(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19312:(e,o,l)=>{l.d(o,{c:()=>t});const t=l.p+"assets/images/The-Cloud-Provider-Interface_1_624x380-289d582442a382a4ed40e2890747a6ca.png"},66608:(e,o,l)=>{l.d(o,{c:()=>t});const t=l.p+"assets/images/The-Cloud-Provider-Interface_624x375-ef796a0c45d4a59aeecfb6ea58b357e1.png"},4552:(e,o,l)=>{l.d(o,{I:()=>s,M:()=>d});var t=l(11504);const r={},n=t.createContext(r);function d(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);