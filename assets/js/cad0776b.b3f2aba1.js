"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[95504],{38092:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>n,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=s(17624),t=s(4552);const r={sidebar_position:16},o="Common CloudShell Packages",c={id:"devguide/reference/common-cs-packages",title:"Common CloudShell Packages",description:"This article lists the basic Python packages you would need for shells and scripts. These packages were developed by Quali and are available on public PyPi.",source:"@site/versioned_docs/version-2023.3/devguide/reference/common-cs-packages.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/common-cs-packages",permalink:"/cloudshell-help/devguide/reference/common-cs-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/reference/common-cs-packages.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"AWS Traffic Mirroring",permalink:"/cloudshell-help/devguide/reference/aws-traffic-mirroring"},next:{title:"Migrating Shells to Python 3",permalink:"/cloudshell-help/devguide/reference/migrate-shells-to-py3"}},n={},h=[];function d(e){const l={a:"a",admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h1,{id:"common-cloudshell-packages",children:"Common CloudShell Packages"}),"\n",(0,i.jsx)(l.p,{children:"This article lists the basic Python packages you would need for shells and scripts. These packages were developed by Quali and are available on public PyPi."}),"\n",(0,i.jsx)(l.p,{children:(0,i.jsxs)(l.em,{children:["While there are additional packages for specific needs and capabilities, the packages listed below cover most of the required functionality. For additional information, see\xa0",(0,i.jsx)(l.a,{href:"/cloudshell-help/devguide/reference/quali-shell-framework-py2",children:"Quali\u2019s Shell Framework (Python 2)"})," for Python 2.7.x automation and ",(0,i.jsx)(l.a,{href:"/cloudshell-help/devguide/reference/quali-shell-framework-py3",children:"Quali\u2019s Shell Framework (Python 3)"}),"\xa0if you\u2019re developing in Python 3.x."]})}),"\n",(0,i.jsx)(l.admonition,{title:"Notes:",type:"note",children:(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.em,{children:"cloudshell-orch-core"}),"\xa0is the only package you need for orchestration scripts."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.em,{children:"cloudshell-orch-core"}),"\xa0contains\xa0",(0,i.jsx)(l.em,{children:"cloudshell-automation-api"})]}),"\n",(0,i.jsxs)(l.li,{children:["While\xa0",(0,i.jsx)(l.em,{children:"cloudshell-automation-api"}),"\xa0includes several methods that apply to shells, it provides unnecessary access to CloudShell administrative areas and is therefore not recommended to be used in shells."]}),"\n"]})}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Package"}),(0,i.jsx)(l.th,{children:"Python version"}),(0,i.jsx)(l.th,{children:"Description"}),(0,i.jsx)(l.th,{children:"Links"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"cloudshell-orch-core"}),(0,i.jsx)(l.td,{children:"Python 2/3"}),(0,i.jsxs)(l.td,{children:["Package for writing CloudShell orchestration scripts. For additional information, see\xa0",(0,i.jsx)(l.a,{href:"/cloudshell-help/devguide/develop-orch-scripts/getting-started-with-orch-scripts#best-practices-for-working-with-orchestration-scripts",children:"Best Practices for working with orchestration scripts"}),"."]}),(0,i.jsxs)(l.td,{children:[(0,i.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-orch-core/",children:"PyPi"}),"/",(0,i.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-orch-core",children:"GitHub"})]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"cloudshell-automation-api"}),(0,i.jsx)(l.td,{children:"Python 2/3"}),(0,i.jsx)(l.td,{children:"Package for working with CloudShell Automation API."}),(0,i.jsxs)(l.td,{children:[(0,i.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-automation-api/",children:"PyPi"}),"/",(0,i.jsx)(l.a,{href:"pathname:///api-docs/2023.3/Python-API/",children:"Documentation"})]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"cloudshell-logging"}),(0,i.jsx)(l.td,{children:"Python 2/3"}),(0,i.jsx)(l.td,{children:"Package for creating shell loggers."}),(0,i.jsxs)(l.td,{children:[(0,i.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-logging",children:"PyPi"}),"/",(0,i.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-logging",children:"GitHub"})]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"cloudshell-core"}),(0,i.jsx)(l.td,{children:"Python 2"}),(0,i.jsxs)(l.td,{children:["Legacy logging package (replaced with\xa0",(0,i.jsx)(l.em,{children:"cloudshell-logging"}),"\xa0in version 9.3)."]}),(0,i.jsxs)(l.td,{children:[(0,i.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-core/",children:"PyPi"}),"/",(0,i.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-core",children:"GitHub"})]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"cloudshell-snmp"}),(0,i.jsx)(l.td,{children:"Python 2/3"}),(0,i.jsx)(l.td,{children:"Package for developing shell communication with devices via SNMP."}),(0,i.jsxs)(l.td,{children:[(0,i.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-snmp/",children:"PyPi"}),"/",(0,i.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-snmp",children:"GitHub"})]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"cloudshell-cli"}),(0,i.jsx)(l.td,{children:"Python 2/3"}),(0,i.jsx)(l.td,{children:"Package for developing shell communication with devices via CLI."}),(0,i.jsxs)(l.td,{children:[(0,i.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-cli/",children:"PyPi"}),"/",(0,i.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-cli",children:"GitHub"})]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"cloudshell-shell-core"}),(0,i.jsx)(l.td,{children:"Python 2/3"}),(0,i.jsx)(l.td,{children:"Package containing base shell functionality and interfaces."}),(0,i.jsxs)(l.td,{children:[(0,i.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-shell-core/",children:"PyPi"}),"/",(0,i.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core",children:"GitHub"})]})]})]})]})]})}function a(e={}){const{wrapper:l}={...(0,t.M)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,l,s)=>{s.d(l,{I:()=>c,M:()=>o});var i=s(11504);const t={},r=i.createContext(t);function o(e){const l=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:l},e.children)}}}]);