"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[28048],{69372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(17624),i=t(4552);const s={sidebar_position:7},l="Load License",r={id:"troubleshooting/installation/load-license",title:"Load License",description:"Error Message",source:"@site/docs/troubleshooting/installation/load-license.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/load-license",permalink:"/cloudshell-help/next/troubleshooting/installation/load-license",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/installation/load-license.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"The Requested page cannot be accessed",permalink:"/cloudshell-help/next/troubleshooting/installation/the-requested-page-cannot-be-accessed"},next:{title:"'Unexpected error' when installing Quali Server",permalink:"/cloudshell-help/next/troubleshooting/installation/unexpected-error-when-installing-quali-server"}},a={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"load-license",children:"Load License"}),"\n",(0,o.jsx)(n.h2,{id:"error-message",children:"Error Message"}),"\n",(0,o.jsxs)(n.admonition,{type:"danger-one-line",children:[(0,o.jsx)(n.p,{children:"Some of the features in the license file were loaded successfully."}),(0,o.jsx)(n.p,{children:"However the following errors occurred:"}),(0,o.jsx)(n.p,{children:'Error[0xc800100d]" Feature "UNKNOWN" cannot run anymore because the license expiration date has reached. Check your machine\'s date, then contact your software source.'}),(0,o.jsx)(n.p,{children:'Error[93]: The given license code is already added to the "Unknown" license server.'})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"When running the CloudShell License Server Configuration Wizard, the above error may appear when you load a license and already have a valid license or multiple licenses loaded into the same License Manager. In this case, the latest license to be loaded will be used. When it expires, CloudShell will check if the next one in line is valid and use that one, etc."}),"\n",(0,o.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.p,{children:"This is a known issue and you can ignore the error message. Your license will be loaded successfully."})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var o=t(11504);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);