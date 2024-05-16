"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[55412],{85704:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=l(17624),i=l(4552);const o={sidebar_position:6},s='Resizing the value box of "text" global inputs',a={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs",title:'Resizing the value box of "text" global inputs',description:"This is useful for global inputs that include json values.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs",permalink:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Rebranding CloudShell Portal (White Labeling)",permalink:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/rebranding-cloudshell-portal-white-labeling"},next:{title:"Customizing Email Notification Templates",permalink:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates"}},r={},u=[];function d(e){const t={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"resizing-the-value-box-of-text-global-inputs",children:'Resizing the value box of "text" global inputs'}),"\n",(0,n.jsx)(t.p,{children:"This is useful for global inputs that include json values."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To resize the global input value box:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Edit the appropriate ",(0,n.jsx)(t.code,{children:"customer_override.css"})," file."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add the following code block:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"#globalParametersView > ul > li > div:nth-child(1) > div.global-value.cell > div.qs-editable-input > div.qs-inputContainer > textarea\n{\n  max-height: 200px !important; /* change the max height */\n  min-height: 70px !important; /* change the default height */\n  width: 450px !important;  /* make it wider */\n  left: -85px !important;  /* if you make it wider you should also move the box to the left */\n}\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Save the file."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Restart the browser and open CloudShell Portal."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,t,l)=>{l.d(t,{I:()=>a,M:()=>s});var n=l(11504);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);