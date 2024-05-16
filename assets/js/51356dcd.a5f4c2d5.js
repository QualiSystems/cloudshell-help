"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[53672],{70580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(17624),r=t(4552);const s={sidebar_position:10},o="Check Blueprint",l={id:"portal/blueprints/creating-blueprints/check-blueprint",title:"Check Blueprint",description:"This action runs a quick check to see if there is a possible solution to the blueprint's connectivity and abstract resource requirements. It only checks if a possible solution exists and not if the solution is currently available.",source:"@site/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/check-blueprint.md",sourceDirName:"portal/blueprints/creating-blueprints",slug:"/portal/blueprints/creating-blueprints/check-blueprint",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/check-blueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/check-blueprint.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Connections Legend",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/add-connectivity/connections-legend"},next:{title:"Check Blueprint Routes",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/check-blueprint-routes"}},c={},a=[];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"check-blueprint",children:"Check Blueprint"}),"\n",(0,i.jsx)(n.p,{children:"This action runs a quick check to see if there is a possible solution to the blueprint's connectivity and abstract resource requirements. It only checks if a possible solution exists and not if the solution is currently available."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you are checking a highly complex blueprint, you may want to run a more thorough check of your blueprint's connectivity routes, as explained in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/check-blueprint-routes",children:"Check Blueprint Routes"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To check if a solution exists for a blueprint:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.strong,{children:"Blueprint"})," menu, select ",(0,i.jsx)(n.strong,{children:"Check Blueprint"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'A "Blueprint is valid" indication message is displayed.'}),"\n",(0,i.jsx)(n.p,{children:'However, if any of the blueprint\'s routes cannot be resolved, a "Blueprint is invalid" indication message is displayed. For example, a connection between Router 1>Port 1 and Router 2>Port 1 cannot be resolved:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(27788).c+"",width:"401",height:"53"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},27788:(e,n,t)=>{t.d(n,{c:()=>i});const i="data:image/png;base64,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"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);