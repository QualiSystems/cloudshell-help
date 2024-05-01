"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[71226],{25068:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>n,metadata:()=>o,toc:()=>h});var s=t(17624),i=t(4552);const n={sidebar_position:16},r="Common CloudShell Packages",o={id:"devguide/reference/common-cs-packages",title:"Common CloudShell Packages",description:"This article lists the basic Python packages you would need for shells and scripts. These packages were developed by Quali and are available on public PyPi.",source:"@site/docs/devguide/reference/common-cs-packages.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/common-cs-packages",permalink:"/cloudshell-help/next/devguide/reference/common-cs-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/reference/common-cs-packages.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"AWS Traffic Mirroring",permalink:"/cloudshell-help/next/devguide/reference/aws-traffic-mirroring"},next:{title:"Migrating Shells to Python 3",permalink:"/cloudshell-help/next/devguide/reference/migrate-shells-to-py3"}},c={},h=[];function d(e){const l={a:"a",admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"common-cloudshell-packages",children:"Common CloudShell Packages"}),"\n",(0,s.jsx)(l.p,{children:"This article lists the basic Python packages you would need for shells and scripts. These packages were developed by Quali and are available on public PyPi."}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsxs)(l.em,{children:["While there are additional packages for specific needs and capabilities, the packages listed below cover most of the required functionality. For additional information, see\xa0",(0,s.jsx)(l.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/Quali-Shell-Framework-2.htm",children:"Quali\u2019s Shell Framework (Python 2)"})," for Python 2.7.x automation and ",(0,s.jsx)(l.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/Quali-Shell-Framework-3.htm",children:"Quali\u2019s Shell Framework (Python 3)"}),"\xa0if you\u2019re developing in Python 3.x."]})}),"\n",(0,s.jsx)(l.admonition,{title:"Notes:",type:"note",children:(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.em,{children:"cloudshell-orch-core"}),"\xa0is the only package you need for orchestration scripts."]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.em,{children:"cloudshell-orch-core"}),"\xa0contains\xa0",(0,s.jsx)(l.em,{children:"cloudshell-automation-api"})]}),"\n",(0,s.jsxs)(l.li,{children:["While\xa0",(0,s.jsx)(l.em,{children:"cloudshell-automation-api"}),"\xa0includes several methods that apply to shells, it provides unnecessary access to CloudShell administrative areas and is therefore not recommended to be used in shells."]}),"\n"]})}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Package"}),(0,s.jsx)(l.th,{children:"Python version"}),(0,s.jsx)(l.th,{children:"Description"}),(0,s.jsx)(l.th,{children:"Links"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"cloudshell-orch-core"}),(0,s.jsx)(l.td,{children:"Python 2/3"}),(0,s.jsxs)(l.td,{children:["Package for writing CloudShell orchestration scripts. For additional information, see\xa0",(0,s.jsx)(l.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/Getting-Started.htm#Best",children:"Best Practices for working with orchestration scripts"}),"."]}),(0,s.jsxs)(l.td,{children:[(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-orch-core/",children:"PyPi"}),"/",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-orch-core",children:"GitHub"})]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"cloudshell-automation-api"}),(0,s.jsx)(l.td,{children:"Python 2/3"}),(0,s.jsx)(l.td,{children:"Package for working with CloudShell Automation API."}),(0,s.jsxs)(l.td,{children:[(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-automation-api/",children:"PyPi"}),"/",(0,s.jsx)(l.a,{href:"https://help.quali.com/Online%20Help/0.0/Python-API/",children:"Documentation"})]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"cloudshell-logging"}),(0,s.jsx)(l.td,{children:"Python 2/3"}),(0,s.jsx)(l.td,{children:"Package for creating shell loggers."}),(0,s.jsxs)(l.td,{children:[(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-logging",children:"PyPi"}),"/",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-logging",children:"GitHub"})]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"cloudshell-core"}),(0,s.jsx)(l.td,{children:"Python 2"}),(0,s.jsxs)(l.td,{children:["Legacy logging package (replaced with\xa0",(0,s.jsx)(l.em,{children:"cloudshell-logging"}),"\xa0in version 9.3)."]}),(0,s.jsxs)(l.td,{children:[(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-core/",children:"PyPi"}),"/",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-core",children:"GitHub"})]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"cloudshell-snmp"}),(0,s.jsx)(l.td,{children:"Python 2/3"}),(0,s.jsx)(l.td,{children:"Package for developing shell communication with devices via SNMP."}),(0,s.jsxs)(l.td,{children:[(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-snmp/",children:"PyPi"}),"/",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-snmp",children:"GitHub"})]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"cloudshell-cli"}),(0,s.jsx)(l.td,{children:"Python 2/3"}),(0,s.jsx)(l.td,{children:"Package for developing shell communication with devices via CLI."}),(0,s.jsxs)(l.td,{children:[(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-cli/",children:"PyPi"}),"/",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-cli",children:"GitHub"})]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"cloudshell-shell-core"}),(0,s.jsx)(l.td,{children:"Python 2/3"}),(0,s.jsx)(l.td,{children:"Package containing base shell functionality and interfaces."}),(0,s.jsxs)(l.td,{children:[(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-shell-core/",children:"PyPi"}),"/",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core",children:"GitHub"})]})]})]})]})]})}function a(e={}){const{wrapper:l}={...(0,i.M)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,l,t)=>{t.d(l,{I:()=>o,M:()=>r});var s=t(11504);const i={},n=s.createContext(i);function r(e){const l=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:l},e.children)}}}]);