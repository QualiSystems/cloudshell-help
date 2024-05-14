"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[55730],{81736:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=i(17624),l=i(4552);const s={sidebar_position:13},r="Overriding Old/Deprecated Shell Attributes",o={id:"devguide/developing-shells/override-old-shell-attributes",title:"Overriding Old/Deprecated Shell Attributes",description:"By default, CloudShell does not allow updating a shell if the newer version is missing attributes that exist on the old version. However, you can remove this limitation to allow the update of an old shell containing attributes that have been deprecated or are no longer in use.",source:"@site/docs/devguide/developing-shells/override-old-shell-attributes.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/override-old-shell-attributes",permalink:"/cloudshell-help/next/devguide/developing-shells/override-old-shell-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/override-old-shell-attributes.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Customizing Shells",permalink:"/cloudshell-help/next/devguide/developing-shells/customize-shells"},next:{title:"Common Driver Recipes",permalink:"/cloudshell-help/next/devguide/developing-shells/common-driver-recipes"}},d={},a=[{value:"Allowing overriding attributes on the shell&#39;s root",id:"allowing-overriding-attributes-on-the-shells-root",level:2},{value:"Allow overriding attributes on a sub-resource",id:"allow-overriding-attributes-on-a-sub-resource",level:2},{value:"Points to consider",id:"points-to-consider",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overriding-olddeprecated-shell-attributes",children:"Overriding Old/Deprecated Shell Attributes"}),"\n",(0,n.jsx)(t.p,{children:"By default, CloudShell does not allow updating a shell if the newer version is missing attributes that exist on the old version. However, you can remove this limitation to allow the update of an old shell containing attributes that have been deprecated or are no longer in use."}),"\n",(0,n.jsx)(t.h2,{id:"allowing-overriding-attributes-on-the-shells-root",children:"Allowing overriding attributes on the shell's root"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.code,{children:"shell-definition.yaml"})," in your preferred IDE:"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add the ",(0,n.jsx)(t.code,{children:"capability_types"})," code block to the root level of the file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"capability_types:\n  cloudshell.capabilities.DeprecateProperties:\n    derived_from: tosca.capabilities.Root\n    properties:\n      allow_deprecate_properties:\n        type: boolean\n        default: true\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(64072).c+"",width:"614",height:"644"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add the following under the ",(0,n.jsx)(t.code,{children:"node_types"})," > ",(0,n.jsx)(t.code,{children:"vendor"})," > ",(0,n.jsx)(t.code,{children:"capabilities"})," section:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"deprecate_properties:\n        type: cloudshell.capabilities.DeprecateProperties\n        properties:\n          allow_deprecate_properties:\n            type: boolean\n            default: true\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(26588).c+"",width:"511",height:"302"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Import the shell:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"shellfoundry install\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"allow-overriding-attributes-on-a-sub-resource",children:"Allow overriding attributes on a sub-resource"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.code,{children:"shell-definition.yaml"})," in your preferred IDE."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Make sure you have performed the steps in ",(0,n.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/override-old-shell-attributes#allowing-overriding-attributes-on-the-shells-root",children:"Allowing overriding attributes on the shell's root"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Under the node_types section, create a vendor section for the sub-resource with the following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"derived_from: cloudshell.networking.nodes.GenericPort\ncapabilities:\n  deprecate_properties:\n    type: cloudshell.capabilities.DeprecateProperties\n    properties:\n      allow_deprecate_properties:\n        type: boolean\n        default: true\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(28712).c+"",width:"545",height:"340"})}),"\n",(0,n.jsx)(t.admonition,{type:"note-one-line",children:(0,n.jsx)(t.p,{children:'Make sure to change "GenericPort" if needed.'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Import the shell:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"shellfoundry install\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"points-to-consider",children:"Points to consider"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Abstract templates are not updated when a published attribute is removed and must be removed in CloudShell Portal's ",(0,n.jsx)(t.strong,{children:"Inventory > Abstract Templates"})," page."]}),"\n",(0,n.jsx)(t.p,{children:"Abstract templates containing deleted published attributes are indicated with a yellow triangle:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(35324).c+"",width:"1045",height:"260"})}),"\n",(0,n.jsx)(t.p,{children:"When editing the abstract template, the bad attributes have a fine red frame:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(87376).c+"",width:"1235",height:"409"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"When several attributes are removed and the properties are used in abstract resources in blueprints, each time the shell is imported into CloudShell, only one attribute will be listed with a list of the blueprints that need to be edited."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},35324:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/Abstract-template-error-544c6ef1a68dc73da2e74fa567b36b81.png"},26588:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/Override-Shell-Attributes-Snippet-2-a4d04bf5f526a469a73915d9f0ccd3cd.png"},28712:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/Override-Shell-Attributes-Snippet-3-174ce0db841ef454c6a8e07e3817e031.png"},64072:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/Override-Shell-Attributes-Snippet-9cee03b7f3c99b16f3e5a5b9d499073f.png"},87376:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/abstract-template-error-2-d834c89d6f0e94683fdedfd47f8d68b6.png"},4552:(e,t,i)=>{i.d(t,{I:()=>o,M:()=>r});var n=i(11504);const l={},s=n.createContext(l);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);