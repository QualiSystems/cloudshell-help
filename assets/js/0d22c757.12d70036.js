"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[24384],{11396:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var o=s(17624),r=s(4552);const d={sidebar_position:5},n="Removing the Address Field",i={id:"devguide/develop-custom-cloud-provider-shells/remove-the-address-field",title:"Removing the Address Field",description:"For some cloud providers, like AWS EC2 and Azure, the\xa0Address\xa0field is irrelevant. If this is the case, you can easily remove the field from the shell by setting the\xa0hide_address\xa0property in the shell-definition.yaml. In the\xa0capabilities\xa0section, under\xa0properties, uncomment the property and set it to\xa0true:",source:"@site/docs/devguide/develop-custom-cloud-provider-shells/remove-the-address-field.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/remove-the-address-field",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/remove-the-address-field",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-custom-cloud-provider-shells/remove-the-address-field.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Extending the Shell's Data Model",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/extend-the-shell-data-model"},next:{title:"Configuring Deployment Paths",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths"}},l={},c=[];function u(e){const t={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"removing-the-address-field",children:"Removing the Address Field"}),"\n",(0,o.jsxs)(t.p,{children:["For some cloud providers, like AWS EC2 and Azure, the\xa0",(0,o.jsx)(t.strong,{children:"Address"}),"\xa0field is irrelevant. If this is the case, you can easily remove the field from the shell by setting the\xa0",(0,o.jsx)(t.strong,{children:"hide_address"}),"\xa0property in the shell-definition.yaml. In the\xa0",(0,o.jsx)(t.code,{children:"capabilities"}),"\xa0section, under\xa0",(0,o.jsx)(t.code,{children:"properties"}),", uncomment the property and set it to\xa0",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"true"})}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"node_types:\n vendor.resource.ClpShell:\n    derived_from: cloudshell.nodes.CustomCloudProvider\n    properties:\n      my discovery attribute:\n        type: string\n    capabilities:\n      concurrent_execution:\n        type: cloudshell.capabilities.SupportConcurrentCommands\n      auto_discovery_capability:\n        type: cloudshell.capabilities.AutoDiscovery\n        properties:\n          my discovery attribute:\n            type: string\n          VLAN Type:\n            type: string\n          enable_auto_discovery:\n            type: boolean\n            default: true\n          auto_discovery_description:\n            type: string\n            default: Describe the auto discovery\n          inventory_description:\n            type: string\n            default: Describe the resource shell template\n#          hide_address:\n#            type: string\n#            default: false\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>i,M:()=>n});var o=s(11504);const r={},d=o.createContext(r);function n(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);