"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[26960],{10812:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(17624),i=s(4552);const o={sidebar_position:6,sidebar_label:"The Requested page cannot be accessed"},r="The Requested Page Cannot be Accessed because the Related Configuration Data for the Page is Invalid",l={id:"troubleshooting/installation/the-requested-page-cannot-be-accessed",title:"The Requested Page Cannot be Accessed because the Related Configuration Data for the Page is Invalid",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/installation/the-requested-page-cannot-be-accessed.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/the-requested-page-cannot-be-accessed",permalink:"/cloudshell-help/troubleshooting/installation/the-requested-page-cannot-be-accessed",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/installation/the-requested-page-cannot-be-accessed.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"The Requested page cannot be accessed"},sidebar:"tutorialSidebar",previous:{title:"TestShell Database Permissions",permalink:"/cloudshell-help/troubleshooting/installation/testshell-database-permissions"},next:{title:"Load License",permalink:"/cloudshell-help/troubleshooting/installation/load-license"}},a={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"the-requested-page-cannot-be-accessed-because-the-related-configuration-data-for-the-page-is-invalid",children:"The Requested Page Cannot be Accessed because the Related Configuration Data for the Page is Invalid"}),"\n",(0,t.jsx)(n.h2,{id:"error-message",children:"Error Message"}),"\n",(0,t.jsx)(n.admonition,{type:"danger-one-line",children:(0,t.jsx)(n.p,{children:"HTTP Error 500.19 - Internal Server Error: The Requested page cannot be accessed because the related configuration data for the page is invalid."})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"During the process of creating a new website in IIS Manager, an error message is displayed indicating a problem reading the configuration file for the Web server or Web application."}),"\n",(0,t.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To resolve the issue described above, follow these steps:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you receive a HTTP Error 500.19 error message, do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the control panel's ",(0,t.jsx)(n.strong,{children:"Windows Features"})," dialog box, and add ",(0,t.jsx)(n.strong,{children:"Internet Information Services > World Wide Web Services > Application Development Features > ASP.NET 4.6"})," (If ASP.NET 4.6 is missing, select the latest available version)."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you are using IIS 8 with Windows Server 2012 or Windows Server 2012 R2, make sure to install the 'Web Server' role within the server manager."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After selecting the web server role, click ",(0,t.jsx)(n.strong,{children:"Next"})," and in the ",(0,t.jsx)(n.strong,{children:"Role Services"})," section, under ",(0,t.jsx)(n.strong,{children:"Application Development"}),", select ",(0,t.jsx)(n.strong,{children:"ASP.NET 4.5"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This sub-role enables IIS to use the ASP.NET 4.5 for running the CloudShell Portal."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/configure-portal/",children:"Configure the Self-Service Portal"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>r});var t=s(11504);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);