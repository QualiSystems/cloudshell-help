"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[80336],{99224:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=l(17624),t=l(4552);const i={sidebar_position:17},o="Migrating Shells to Python 3",r={id:"devguide/reference/migrate-shells-to-py3",title:"Migrating Shells to Python 3",description:"In this article, we\u2019ll explain the general process for upgrading a Python 2-based shell to Python 3.",source:"@site/versioned_docs/version-2023.3/devguide/reference/migrate-shells-to-py3.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/migrate-shells-to-py3",permalink:"/devguide/reference/migrate-shells-to-py3",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/reference/migrate-shells-to-py3.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Common CloudShell Packages",permalink:"/devguide/reference/common-cs-packages"},next:{title:"CloudShell 2023.3 Release Notes",permalink:"/release-notes/"}},d={},c=[];function a(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"migrating-shells-to-python-3",children:"Migrating Shells to Python 3"}),"\n",(0,s.jsx)(n.p,{children:"In this article, we\u2019ll explain the general process for upgrading a Python 2-based shell to Python 3."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Quali is currently working on updating all Quali-certified Python 2 shells to Python 3, so if you need a Python 3 version of a Quali-certified shell, please contact your Technical Account Manager."})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the\xa0shelldefinition.yaml\xa0file and promote the shell version. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"template_version: 2.0.0\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the\xa0",(0,s.jsx)(n.code,{children:"drivermetadata.xml"}),'\xa0file and add the\xa0PythonVersion="3"\xa0tag:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CloudService2Driver" Name="CloudService2Driver" Version="1.0.0" PythonVersion="3">\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the\xa0",(0,s.jsx)(n.code,{children:"requirements.txt"}),"\xa0file:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.em,{children:"cloudshell-core"})," with ",(0,s.jsx)(n.em,{children:"cloudshell-logging"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Update the rest of the CloudShell packages to the latest versions."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In every ",(0,s.jsx)(n.code,{children:".py"})," file in the project:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update the code syntax to Python 3 format."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update the import of\xa0",(0,s.jsx)(n.em,{children:"cloudshell-core"}),"\xa0to\xa0",(0,s.jsx)(n.em,{children:"cloudshell-logging"}),"\xa0(no need to update the code)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.logging.qs_logger import get_qs_logger\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make sure all non-CloudShell packages support Python 3."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pack and install the shell on CloudShell."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,l)=>{l.d(n,{I:()=>r,M:()=>o});var s=l(11504);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);