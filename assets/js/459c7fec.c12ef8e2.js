"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[10608],{94624:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>A,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=s(17624),r=s(4552);const i={sidebar_position:11},l="Check Blueprint Routes",o={id:"portal/blueprints/creating-blueprints/check-blueprint-routes",title:"Check Blueprint Routes",description:"This action detects problematic L1 routes that contain an abstract resource endpoint in the blueprint.",source:"@site/docs/portal/blueprints/creating-blueprints/check-blueprint-routes.md",sourceDirName:"portal/blueprints/creating-blueprints",slug:"/portal/blueprints/creating-blueprints/check-blueprint-routes",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/check-blueprint-routes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/blueprints/creating-blueprints/check-blueprint-routes.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Check Blueprint",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/check-blueprint"},next:{title:"Define the Blueprint's Properties",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/blueprint-properties"}},A={},a=[];function u(e){const t={code:"code",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"check-blueprint-routes",children:"Check Blueprint Routes"}),"\n",(0,n.jsx)(t.p,{children:"This action detects problematic L1 routes that contain an abstract resource endpoint in the blueprint."}),"\n",(0,n.jsxs)(t.p,{children:["Unlike the existing ",(0,n.jsx)(t.strong,{children:"Check Blueprint"}),' option, this action runs a "deep check" that may take some time to complete and is especially useful for highly complex blueprints containing tens or hundreds of routes. It only checks if a possible solution exists and not if the solution is currently available.']}),"\n",(0,n.jsxs)(t.p,{children:["This option is enabled using the ",(0,n.jsx)(t.code,{children:"DetectFailedRoutes"})," key."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To check a blueprint's routes:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["From the ",(0,n.jsx)(t.strong,{children:"Blueprint"})," menu, select ",(0,n.jsx)(t.strong,{children:"Check Blueprint Routes"}),"."]}),"\n",(0,n.jsx)(t.p,{children:'An "operation in progress" indication message is displayed.'}),"\n",(0,n.jsx)(t.p,{children:"If any abstract routes cannot be resolved, an error message is displayed, listing each problematic route's alias (if it exists) and source and target endpoints (resource/port). For example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(25812).c+"",width:"400",height:"110"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},25812:(e,t,s)=>{s.d(t,{c:()=>n});const n="data:image/png;base64,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"},4552:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>l});var n=s(11504);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);