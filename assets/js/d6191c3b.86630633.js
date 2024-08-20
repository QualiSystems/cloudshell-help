"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[64184],{83188:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=i(17624),t=i(4552);const r={sidebar_position:16},n="Common CloudShell Packages",o={id:"devguide/reference/common-cs-packages",title:"Common CloudShell Packages",description:"This article lists the basic Python packages you would need for shells and scripts. These packages were developed by Quali and are available on public PyPi.",source:"@site/versioned_docs/version-2024.1/devguide/reference/common-cs-packages.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/common-cs-packages",permalink:"/devguide/reference/common-cs-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/devguide/reference/common-cs-packages.md",tags:[],version:"2024.1",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"AWS Traffic Mirroring",permalink:"/devguide/reference/aws-traffic-mirroring"},next:{title:"Migrating Shells to Python 3",permalink:"/devguide/reference/migrate-shells-to-py3"}},c={},d=[];function h(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"common-cloudshell-packages",children:"Common CloudShell Packages"}),"\n",(0,l.jsx)(s.p,{children:"This article lists the basic Python packages you would need for shells and scripts. These packages were developed by Quali and are available on public PyPi."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsxs)(s.em,{children:["While there are additional packages for specific needs and capabilities, the packages listed below cover most of the required functionality. For additional information, see\xa0",(0,l.jsx)(s.a,{href:"/devguide/reference/quali-shell-framework-py2",children:"Quali\u2019s Shell Framework (Python 2)"})," for Python 2.7.x automation and ",(0,l.jsx)(s.a,{href:"/devguide/reference/quali-shell-framework-py3",children:"Quali\u2019s Shell Framework (Python 3)"}),"\xa0if you\u2019re developing in Python 3.x."]})}),"\n",(0,l.jsx)(s.admonition,{title:"Notes:",type:"note",children:(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.em,{children:"cloudshell-orch-core"}),"\xa0is the only package you need for orchestration scripts."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.em,{children:"cloudshell-orch-core"}),"\xa0contains\xa0",(0,l.jsx)(s.em,{children:"cloudshell-automation-api"})]}),"\n",(0,l.jsxs)(s.li,{children:["While\xa0",(0,l.jsx)(s.em,{children:"cloudshell-automation-api"}),"\xa0includes several methods that apply to shells, it provides unnecessary access to CloudShell administrative areas and is therefore not recommended to be used in shells."]}),"\n"]})}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Package"}),(0,l.jsx)(s.th,{children:"Python version"}),(0,l.jsx)(s.th,{children:"Description"}),(0,l.jsx)(s.th,{children:"Links"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cloudshell-orch-core"}),(0,l.jsx)(s.td,{children:"Python 2/3"}),(0,l.jsxs)(s.td,{children:["Package for writing CloudShell orchestration scripts. For additional information, see\xa0",(0,l.jsx)(s.a,{href:"/devguide/develop-orch-scripts/getting-started-with-orch-scripts#best-practices-for-working-with-orchestration-scripts",children:"Best Practices for working with orchestration scripts"}),"."]}),(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.a,{href:"https://pypi.org/project/cloudshell-orch-core/",children:"PyPi"}),"/",(0,l.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-orch-core",children:"GitHub"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cloudshell-automation-api"}),(0,l.jsx)(s.td,{children:"Python 2/3"}),(0,l.jsx)(s.td,{children:"Package for working with CloudShell Automation API."}),(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.a,{href:"https://pypi.org/project/cloudshell-automation-api/",children:"PyPi"}),"/",(0,l.jsx)(s.a,{href:"pathname:///api-docs/2024.1/Python-API/",children:"Documentation"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cloudshell-logging"}),(0,l.jsx)(s.td,{children:"Python 2/3"}),(0,l.jsx)(s.td,{children:"Package for creating shell loggers."}),(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.a,{href:"https://pypi.org/project/cloudshell-logging",children:"PyPi"}),"/",(0,l.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-logging",children:"GitHub"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cloudshell-core"}),(0,l.jsx)(s.td,{children:"Python 2"}),(0,l.jsxs)(s.td,{children:["Legacy logging package (replaced with\xa0",(0,l.jsx)(s.em,{children:"cloudshell-logging"}),"\xa0in version 9.3)."]}),(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.a,{href:"https://pypi.org/project/cloudshell-core/",children:"PyPi"}),"/",(0,l.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-core",children:"GitHub"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cloudshell-snmp"}),(0,l.jsx)(s.td,{children:"Python 2/3"}),(0,l.jsx)(s.td,{children:"Package for developing shell communication with devices via SNMP."}),(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.a,{href:"https://pypi.org/project/cloudshell-snmp/",children:"PyPi"}),"/",(0,l.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-snmp",children:"GitHub"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cloudshell-cli"}),(0,l.jsx)(s.td,{children:"Python 2/3"}),(0,l.jsx)(s.td,{children:"Package for developing shell communication with devices via CLI."}),(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.a,{href:"https://pypi.org/project/cloudshell-cli/",children:"PyPi"}),"/",(0,l.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-cli",children:"GitHub"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cloudshell-shell-core"}),(0,l.jsx)(s.td,{children:"Python 2/3"}),(0,l.jsx)(s.td,{children:"Package containing base shell functionality and interfaces."}),(0,l.jsxs)(s.td,{children:[(0,l.jsx)(s.a,{href:"https://pypi.org/project/cloudshell-shell-core/",children:"PyPi"}),"/",(0,l.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core",children:"GitHub"})]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>o,M:()=>n});var l=i(11504);const t={},r=l.createContext(t);function n(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);