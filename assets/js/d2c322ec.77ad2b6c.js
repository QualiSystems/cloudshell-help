"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[82712],{65200:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=n(17624),t=n(4552);const l={},s="The CloudShell DevGuide",r={id:"devguide/index",title:"The CloudShell DevGuide",description:"Welcome! In the following pages you will learn all you need to know to become an expert CloudShell developer. The guide is intended both for developers taking their first steps with the platform and seasoned CloudShell developers.",source:"@site/versioned_docs/version-2024.1/devguide/index.md",sourceDirName:"devguide",slug:"/devguide/",permalink:"/devguide/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/devguide/index.md",tags:[],version:"2024.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:'Shell update error: "Failed to update shell"',permalink:"/troubleshooting/shells/shell-update-error"},next:{title:"Setting up the Development Environment",permalink:"/devguide/setting-up-dev-env"}},d={},a=[{value:"How this guide is organized",id:"how-this-guide-is-organized",level:2},{value:"Where to go next",id:"where-to-go-next",level:2}];function h(e){const o={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"the-cloudshell-devguide",children:"The CloudShell DevGuide"}),"\n",(0,i.jsx)(o.p,{children:"Welcome! In the following pages you will learn all you need to know to become an expert CloudShell developer. The guide is intended both for developers taking their first steps with the platform and seasoned CloudShell developers."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.em,{children:(0,i.jsxs)(o.strong,{children:["Before developing shells and scripts, please familiarize yourself with CloudShell by taking ",(0,i.jsx)(o.a,{href:"http://courses.quali.com/",children:"Quali U courses"}),". These courses also include installation instructions for the CloudShell SDK package that deploys a developer edition of CloudShell on which you can perform your training and development activities."]})})}),"\n",(0,i.jsx)(o.h2,{id:"how-this-guide-is-organized",children:"How this guide is organized"}),"\n",(0,i.jsx)(o.p,{children:"The CloudShell developer guide is comprised of several distinct content areas. Each one describes a different branch of development or possible integration options with CloudShell. Each area of the guide is independent of the others and includes its own \u2018getting started\u2019 tutorials, examples, instructional videos and articles. You don\u2019t have to follow a specific order so feel free to explore the areas that are relevant to your development. The areas of the DevGuide are:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsxs)(o.strong,{children:[(0,i.jsx)(o.a,{href:"/devguide/developing-shells/",children:"Developing Shells"}),": Extending CloudShell support for your lab devices"]})}),"\n",(0,i.jsx)(o.p,{children:"Developers can extend CloudShell\u2019s capabilities to provide additional functionality for Apps or physical devices by creating Shells. This includes better modeling for these components as well as custom commands that can be used in the sandbox to integrate the component in CloudShell. This area of the guide covers the end-to-end flow of creating new Shells and importing them into CloudShell."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsxs)(o.strong,{children:[(0,i.jsx)(o.a,{href:"/devguide/develop-orch-scripts/",children:"Developing Orchestration Scripts"}),": Implementing sandbox workflows"]})}),"\n",(0,i.jsx)(o.p,{children:"Orchestration scripts are a feature in CloudShell that enables the implementation of sandbox workflows. CloudShell has built-in flows for setup and teardown, which deploy and tear down Apps, resources and connections between components in the sandbox without having to add additional code. Users can extend or fork these scripts, as well as implement additional workflows for save/restore operations, scaling, or more use case-specific workflows for anything from performance testing to failover simulation or traffic generation."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsxs)(o.strong,{children:[(0,i.jsx)(o.a,{href:"/devguide/develop-config-management-scripts-for-apps/",children:"Developing Configuration Management Scripts for Apps"}),": Developing configuration scripts for App VMs"]})}),"\n",(0,i.jsx)(o.p,{children:"Configuration management extends CloudShell Apps by allowing the running of scripts, which install applications on virtual machines (VMs) deployed in the sandbox or run post-deployment configuration. This configuration can be executed as part of the sandbox setup, or later on in a live sandbox. Configuration management operations can be performed using custom scripts or Ansible playbooks."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsxs)(o.strong,{children:[(0,i.jsx)(o.a,{href:"./devguide/develop-custom-cloud-provider-shells",children:"Developing Custom Cloud Provider Shells"}),": Implementing support for cloud providers"]})}),"\n",(0,i.jsx)(o.p,{children:"CloudShell 9.0 provides support for the Cloud Provider shell, which enables you to integrate CloudShell with the cloud provider of your choice. CloudShell provides out-of-the-box support for cloud providers AWS EC2, Microsoft Azure and VMware vCenter. However, to deploy VMs on other cloud providers, such as Kubernetes or Oracle Cloud, or create a modified version of one of our out-of-the-box cloud providers, you will need to create a shell that allows this to happen."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:(0,i.jsx)(o.a,{href:"/devguide/available-cs-api/",children:"Available CloudShell APIs"})})}),"\n",(0,i.jsx)(o.p,{children:"This chapter describes the different APIs CloudShell offers, the uses for each as well as useful links and implementation examples."}),"\n",(0,i.jsx)(o.p,{children:"In addition, this area examines how CloudShell can be used in conjunction with other DevOps tools and within the DevOps pipeline. This includes CloudShell\u2019s APIs as well as existing Open Source projects for integrating CloudShell with other products."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"where-to-go-next",children:"Where to go next"}),"\n",(0,i.jsxs)(o.p,{children:["The\xa0",(0,i.jsx)(o.a,{href:"devguide/setting-up-dev-env",children:"Setting up the Development Environment"}),"\xa0section contains important information for tooling and infrastructure you should install before starting development."]}),"\n",(0,i.jsx)(o.p,{children:"You can then proceed to any one of the development areas described above."})]})}function c(e={}){const{wrapper:o}={...(0,t.M)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,o,n)=>{n.d(o,{I:()=>r,M:()=>s});var i=n(11504);const t={},l=i.createContext(t);function s(e){const o=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:o},e.children)}}}]);