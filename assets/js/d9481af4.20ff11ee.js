"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69300],{79320:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var l=o(17624),d=o(4552);const s={sidebar_position:3},n="The Cloud Provider Shell Model",i={id:"devguide/develop-custom-cloud-provider-shells/the-cp-shell-mode",title:"The Cloud Provider Shell Model",description:"In this article, we\u2019ll learn about the Cloud Provider shell\u2019s model.",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/the-cp-shell-mode.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/the-cp-shell-mode",permalink:"/devguide/develop-custom-cloud-provider-shells/the-cp-shell-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/the-cp-shell-mode.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating the Cloud Provider Shell",permalink:"/devguide/develop-custom-cloud-provider-shells/create-cp-shell"},next:{title:"Extending the Shell's Data Model",permalink:"/devguide/develop-custom-cloud-provider-shells/extend-the-shell-data-model"}},r={},h=[];function a(e){const t={a:"a",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"the-cloud-provider-shell-model",children:"The Cloud Provider Shell Model"}),"\n",(0,l.jsx)(t.p,{children:"In this article, we\u2019ll learn about the Cloud Provider shell\u2019s model."}),"\n",(0,l.jsxs)(t.p,{children:["The\xa0",(0,l.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/cloud_provider_standard.md",children:"Cloud Provider Standard"}),"\xa0defines two elements: the Cloud Provider shell and the Deployment Type service. The Cloud Provider shell is responsible for accessing the cloud provider and executing the App\u2019s automation commands (like deploy VM, power on, power off, refresh IP). And the deployment type service shell sets the deployment path on the App template, including the VM\u2019s definition. The service contains the attributes of the deployment type, but has no driver since the automation commands are defined in the Cloud Provider shell\u2019s driver."]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"The cloud provider model extension includes the attributes that control the behavior of the cloud provider as a whole. For example the region name and default values for elements created in the cloud."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["The deployment type extension needs to include the attributes that are needed for every deployment method in this cloud. You can set these attributes to be visible in the\xa0",(0,l.jsx)(t.strong,{children:"Deployment Paths"}),"\xa0tab of the App template dialog box (we\u2019ll learn how to do this later on this chapter)."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The Cloud Provider shell is created using the\xa0gen2/cloud-provider\xa0shellfoundry template. The project folder includes a shell-definition.yaml file for the cloud provider model definition, and a skeleton of the cloud provider model. Inside the\xa0",(0,l.jsx)(t.strong,{children:"Deployments"}),"\xa0folder, there is a deployment-path.yaml file for the deployment type model. If more than one deployment type is needed, additional yaml files may be added to this folder."]}),"\n",(0,l.jsx)(t.p,{children:"The association between the cloud provider and its relevant deployment types is implicit."})]})}function c(e={}){const{wrapper:t}={...(0,d.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>i,M:()=>n});var l=o(11504);const d={},s=l.createContext(d);function n(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);