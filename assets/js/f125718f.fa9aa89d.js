"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41968],{64676:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=o(17624),n=o(4552);const i={sidebar_position:12},t='vCenter Resource Discovery Error: "Discovery failed for resource"',l={id:"troubleshooting/cloudshell-portal/vcenter-resource-discovery-error-discovery-failed-for-resource",title:'vCenter Resource Discovery Error: "Discovery failed for resource"',description:"Error message",source:"@site/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/vcenter-resource-discovery-error-discovery-failed-for-resource.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/vcenter-resource-discovery-error-discovery-failed-for-resource",permalink:"/troubleshooting/cloudshell-portal/vcenter-resource-discovery-error-discovery-failed-for-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/vcenter-resource-discovery-error-discovery-failed-for-resource.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"VM is not Powered off at the End of a Reservation",permalink:"/troubleshooting/cloudshell-portal/vm-is-not-powered-off-at-the-end-of-a-reservation"},next:{title:"Reserving blueprints fails on nonexistent resource conflicts",permalink:"/troubleshooting/cloudshell-portal/reserving-blueprints-fails-on-nonexistent-resource-conflicts"}},c={},d=[{value:"Error message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function u(e){const r={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",p:"p",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"vcenter-resource-discovery-error-discovery-failed-for-resource",children:'vCenter Resource Discovery Error: "Discovery failed for resource"'}),"\n",(0,s.jsx)(r.h2,{id:"error-message",children:"Error message"}),"\n",(0,s.jsx)(r.p,{children:'For vCenter cloud provider resource called "Quali vCenter1":'}),"\n",(0,s.jsx)(r.admonition,{type:"danger-one-line",children:(0,s.jsxs)(r.p,{children:["Discovery failed for resource 'Quali vCenter1': 'get_inventory' command failed with 'Exception' error.",(0,s.jsx)(r.br,{}),"\n","Description: vCenter permissions for configured resource(s) are invalid. The resource is now excluded. To include the resource, navigate to the Inventory page."]})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"The user defined on the vCenter cloud provider resource doesn't have the required permissions on the vCenter root level."}),"\n",(0,s.jsx)(r.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,s.jsx)(r.p,{children:"In many situations, the permissions / role are defined on the datacenter or cluster level and this is not sufficient. The user designated for this operation must be granted the required permissions on the root level of the vCenter server."}),"\n",(0,s.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(r.p,{children:["You will need to ensure the user permissions are defined on the vCenter root level. For detailed instructions on how to do this, see ",(0,s.jsx)(r.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type",children:"Required vCenter User Permissions per Deployment Type"}),"."]})]})}function a(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,r,o)=>{o.d(r,{I:()=>l,M:()=>t});var s=o(11504);const n={},i=s.createContext(n);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);