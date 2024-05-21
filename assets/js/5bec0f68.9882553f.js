"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[99940],{34528:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=s(17624),i=s(4552);const n={sidebar_position:4},o="Update Resource Attributes",l={id:"portal/blueprints/creating-blueprints/resources/update-resource-attr",title:"Update Resource Attributes",description:"You can prepare or assign, from within the blueprint workspace, resource attributes that have the Setting rule attached to them. For example, to define values that you will want to use later on in the sandbox for a specific scenario.",source:"@site/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/resources/update-resource-attr.md",sourceDirName:"portal/blueprints/creating-blueprints/resources",slug:"/portal/blueprints/creating-blueprints/resources/update-resource-attr",permalink:"/portal/blueprints/creating-blueprints/resources/update-resource-attr",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/resources/update-resource-attr.md",tags:[],version:"2023.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Remove Resources",permalink:"/portal/blueprints/creating-blueprints/resources/remove-resources"},next:{title:"Configure Sub-resources",permalink:"/portal/blueprints/creating-blueprints/resources/configure-sub-resources"}},a={},u=[{value:"Related Topics",id:"related-topics",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"update-resource-attributes",children:"Update Resource Attributes"}),"\n",(0,r.jsxs)(t.p,{children:["You can prepare or assign, from within the blueprint workspace, resource attributes that have the ",(0,r.jsx)(t.strong,{children:"Setting"})," rule attached to them. For example, to define values that you will want to use later on in the sandbox for a specific scenario."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Points to consider:"})," CloudShell does not automatically set the new values on the resource, as it does when you set custom resource attribute values in the sandbox."]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You need to first apply the changes using the ",(0,r.jsx)(t.a,{href:"pathname:///api-docs/2023.3/Python-API/cloudshell.api.html?highlight=activatetopology#cloudshell.api.cloudshell_api.CloudShellAPISession.ActivateTopology",children:"Activate-topology"})," API,\xa0which can be added to the setup flow. Please take into account that this API will also trigger the connection of all the L1 routes."]}),"\n",(0,r.jsxs)(t.li,{children:["Alternatively, you can read the updated values from the blueprint's information using the ",(0,r.jsx)(t.a,{href:"pathname:///api-docs/2023.3/Python-API/cloudshell.api.html?highlight=gettopologydetails#cloudshell.api.cloudshell_api.CloudShellAPISession.GetTopologyDetails",children:"GetTopologyDetails"})," API, and either use it to set the values on the resource or just use it as part of the scripts."]}),"\n"]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"To modify resource attributes:"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.strong,{children:"Diagram"})," view, hover over the resource. From the ",(0,r.jsx)(t.strong,{children:"Actions"})," menu, select the ",(0,r.jsx)(t.strong,{children:"Attributes"})," option."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Resource Attributes"})," pane is displayed."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(61536).c+"",width:"686",height:"451"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["You can edit attributes that are not set to read-only by clicking the\xa0",(0,r.jsx)(t.img,{src:s(90916).c+"",width:"27",height:"32"}),"\xa0button next to it."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/portal/blueprints/blueprint-workspace/",children:"Blueprint Workspace"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},90916:(e,t,s)=>{s.d(t,{c:()=>r});const r="data:image/png;base64,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"},61536:(e,t,s)=>{s.d(t,{c:()=>r});const r=s.p+"assets/images/Updating-resource-attributes-3552edb4c88d2d3cf0b514fbaa73d957.png"},4552:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>o});var r=s(11504);const i={},n=r.createContext(i);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);