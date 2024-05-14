"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[44556],{28348:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(17624),t=i(4552);const o={sidebar_position:1},l="SSO to Insight Workflow",r={id:"install-configure/cs-insight-bi/insight-sso/sso-to-insight-workflow",title:"SSO to Insight Workflow",description:"In Sisense, the SSO option must be enabled. Thereafter:",source:"@site/docs/install-configure/cs-insight-bi/insight-sso/sso-to-insight-workflow.md",sourceDirName:"install-configure/cs-insight-bi/insight-sso",slug:"/install-configure/cs-insight-bi/insight-sso/sso-to-insight-workflow",permalink:"/cloudshell-help/next/install-configure/cs-insight-bi/insight-sso/sso-to-insight-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cs-insight-bi/insight-sso/sso-to-insight-workflow.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Single Sign On (SSO) to Insight",permalink:"/cloudshell-help/next/install-configure/cs-insight-bi/insight-sso/"},next:{title:"Configure Sisense to Work with SSO",permalink:"/cloudshell-help/next/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense"}},h={},c=[];function a(e){const s={admonition:"admonition",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"sso-to-insight-workflow",children:"SSO to Insight Workflow"}),"\n",(0,n.jsx)(s.p,{children:"In Sisense, the SSO option must be enabled. Thereafter:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"When a user accesses a Sisense dashboard, Sisense requests CloudShell to provide the user\u2019s credentials (identity)."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"CloudShell returns the user's email address (user emails are mandatory for Sisense SSO)."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The flow of information between CloudShell Portal and Sisense is depicted in the following diagram:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"SSO1.png",src:i(36532).c+"",width:"520",height:"343"})}),"\n",(0,n.jsx)(s.p,{children:"Authenticating the user\u2019s SSO profile:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If the user's SSO profile is already defined in Sisense, the user is immediately authenticated."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"If this is a first time login and the user is not yet defined in Sisense, Sisense first creates the user\u2019s SSO profile and then proceeds to authenticate the user."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"The Sisense license limits the number of user profiles. The creation process might therefore result in an error if the maximum available user profiles is reached."})}),"\n",(0,n.jsx)(s.p,{children:"The authentication steps between CloudShell and Sisense is depicted in the following flowchart:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"SSO2.png",src:i(54008).c+"",width:"280",height:"299"})})]})}function d(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},54008:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/SSO-Workflow_1_280x299-592ca1593020a72ece8740e60c5dd907.png"},36532:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/SSO-Workflow_520x343-3111085c209c8a175a2989d8b511429e.png"},4552:(e,s,i)=>{i.d(s,{I:()=>r,M:()=>l});var n=i(11504);const t={},o=n.createContext(t);function l(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);