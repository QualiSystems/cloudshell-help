"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[55236],{98808:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(17624),s=o(4552);const r={sidebar_position:7},l="Controlling App Deployment Orchestration",i={id:"devguide/develop-custom-cloud-provider-shells/controlling-app-deployment-orch",title:"Controlling App Deployment Orchestration",description:"In this article, we\u2019ll learn how to customize the App\u2019s behavior during the sandbox\u2019s out-of-the-box Setup process. This article does not apply to Teardown, which by design powers off and deletes the App VMs from the cloud provider.",source:"@site/docs/devguide/develop-custom-cloud-provider-shells/controlling-app-deployment-orch.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/controlling-app-deployment-orch",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/controlling-app-deployment-orch",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-custom-cloud-provider-shells/controlling-app-deployment-orch.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Configuring Deployment Paths",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths"},next:{title:"The Cloud Provider Interface",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/the-cloud-provider-interface"}},d={},p=[];function c(e){const t={h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"controlling-app-deployment-orchestration",children:"Controlling App Deployment Orchestration"}),"\n",(0,n.jsx)(t.p,{children:"In this article, we\u2019ll learn how to customize the App\u2019s behavior during the sandbox\u2019s out-of-the-box Setup process. This article does not apply to Teardown, which by design powers off and deletes the App VMs from the cloud provider."}),"\n",(0,n.jsx)(t.p,{children:"Customizing the App\u2019s orchestration is done through the use of attributes, which are included with the App."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Auto Power On"}),"\xa0powers on the VM at setup. Note that this attributes will affect the live status icon, so setting \u201cAuto Power On = False\u201d will result in the App not being powered on in the sandbox, and the App will have an offline live status icon."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Autoload"}),"\xa0discovers the deployed App. This includes attribute values and the VM\u2019s structure, if the VM represents a virtual device that has a resource structure like blades and ports. For example, vRouters and vSwitches."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Wait for IP"}),"\xa0determines if CloudShell will refresh the VM\u2019s IP after it is powered on. The decision depends on the cloud provider\u2019s deployment behavior. In other words, does the cloud provider refresh the IP after the VM is powered on (for example VMware vCenter), or is the IP immediately available once the VM is created (like on AWS EC2)."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>i,M:()=>l});var n=o(11504);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);