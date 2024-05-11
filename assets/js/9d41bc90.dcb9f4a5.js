"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[1412],{26080:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>h,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=n(17624),s=n(4552);const i={sidebar_position:3},o="The Shell Project Guide",r={id:"devguide/developing-shells/the-shell-project-guide",title:"The Shell Project Guide",description:"CloudShell\u2019s 2nd generation Shells are based on the Topology and Orchestration Specification for Cloud Applications (TOSCA) industry standard and use yaml files. To develop a Shell for CloudShell there is no need to dive deep into the details of TOSCA. We made it all simple. However, if you do wish to learn more about TOSCA, follow\xa0this list of references.",source:"@site/docs/devguide/developing-shells/the-shell-project-guide.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/the-shell-project-guide",permalink:"/cloudshell-help/next/devguide/developing-shells/the-shell-project-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/the-shell-project-guide.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Shell Drivers Overview",permalink:"/cloudshell-help/next/devguide/developing-shells/shell-drivers-overview"},next:{title:"Modeling Shells with TOSCA",permalink:"/cloudshell-help/next/devguide/developing-shells/modeling-shells-with-tosca"}},h={},d=[{value:"The Shell project\u2019s root folder",id:"the-shell-projects-root-folder",level:2}];function c(e){const l={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"the-shell-project-guide",children:"The Shell Project Guide"}),"\n",(0,t.jsxs)(l.p,{children:["CloudShell\u2019s 2nd generation Shells are based on the Topology and Orchestration Specification for Cloud Applications (TOSCA) industry standard and use yaml files. To develop a Shell for CloudShell there is no need to dive deep into the details of TOSCA. We made it all simple. However, if you do wish to learn more about TOSCA, follow\xa0",(0,t.jsx)(l.a,{href:"http://docs.oasis-open.org/tosca/TOSCA-Simple-Profile-YAML/v1.0/TOSCA-Simple-Profile-YAML-v1.0.html",children:"this list of references"}),"."]}),"\n",(0,t.jsx)(l.p,{children:"When starting a new Shell, the first thing we\u2019ll want to do is generate the Shell project files and directory structure. Thankfully, this happens automatically when we use the ShellFoundry CLI tool."}),"\n",(0,t.jsx)(l.p,{children:"In this section, we\u2019ll look into the generated files and structure, and their different roles. At this stage, we\u2019ll only take a bird\u2019s eye view of the different files and folders, and what they are used for. In the following sections, we\u2019ll delve deeper into the specific options and format of each file and learn how to customize the Shell\u2019s driver and definition ."}),"\n",(0,t.jsxs)(l.p,{children:["Let\u2019s begin by generating a new Shell project. If you\u2019ve previously completed the ",(0,t.jsx)(l.a,{href:"/cloudshell-help/next/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),"\xa0tutorial, you should have a reference project. If you haven\u2019t completed the initial tutorial, it\u2019s recommended to do so now. Otherwise, just run the following in your Command Line:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-python",children:"shellfoundry new linux-server-shell\ncd linux-server-shell\n"})}),"\n",(0,t.jsxs)(l.p,{children:["This will create a new\xa0",(0,t.jsx)(l.em,{children:"linux_server_shell"}),"\xa0folder using the default Shell template and generate some scaffolding for it. Notice that the generated project is already a valid Shell. From this point on, you can further customize it or develop its driver commands, but all of the basic components are there already. We recommend that you use this as a baseline and continue to incrementally add functionality on top of the generated Shell."]}),"\n",(0,t.jsx)(l.h2,{id:"the-shell-projects-root-folder",children:"The Shell project\u2019s root folder"}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.img,{alt:"Directory Structure",src:n(81564).c+"",width:"246",height:"229"})}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"dist"}),"\xa0folder: Contains the Shell package that is created by running the\xa0",(0,t.jsx)(l.em,{children:"shellfoundry install"}),"\xa0or\xa0",(0,t.jsx)(l.em,{children:"shellfoundry pack"}),"\xa0commands."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"docs"}),"\xa0and\xa0",(0,t.jsx)(l.em,{children:"tests"}),"\xa0folders: Placeholders to place Shell documentation and Shell tests. Some tests are already automatically generated in the\xa0",(0,t.jsx)(l.em,{children:"tests"}),"\xa0folder."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"src"}),"\xa0folder: Contains the Shell\u2019s Python driver source files:"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"driver.py"}),": The main driver file. This file contains the functions that will be published as CloudShell commands. By default, the\xa0",(0,t.jsx)(l.em,{children:"driver.py"}),"\xa0file contains a single Python class named\xa0",(0,t.jsx)(l.em,{children:"Driver"}),". You\u2019ll see that it already contains some functions."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"drivermetadata.xml"}),": Contains metadata related to the display and behavior of the driver functions as CloudShell commands."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"requirements.txt"}),": A pip requirements file used for setting up the driver\u2019s virtual environment . Any dependency of the Shell driver needs to be in this file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"TOSCA-Metadata"}),"\xa0folder: Contains a TOSCA standard file. Its content is filled out by Quali and requires no additional updates on your part."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:".gitignore.txt"}),"\xa0file: Standard Git repository file that specifies files which are not managed by source control."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"deployment.xml"}),"\xa0file: Contains the debugging specifications. For more information, see\xa0",(0,t.jsx)(l.a,{href:"/cloudshell-help/next/devguide/developing-shells/debug-shell-driver-commands",children:"Debugging Shell Driver Commands"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"shell-definition.yaml"}),"\xa0file: Contains the information needed for importing the Shell\u2019s data model, which defines how the Shell resources are presented in CloudShell. This file is automatically generated by ShellFoundry according to the selected ShellFoundry template."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"shell-icon.png"}),"\xa0file: Default icon that will appear for the Shell in CloudShell Portal."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["The\xa0",(0,t.jsx)(l.strong,{children:"test_requirements.txt"}),"\xa0file: Contains all Python requirements for running the Shell\u2019s tests."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:l}={...(0,s.M)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},81564:(e,l,n)=>{n.d(l,{c:()=>t});const t="data:image/png;base64,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"},4552:(e,l,n)=>{n.d(l,{I:()=>r,M:()=>o});var t=n(11504);const s={},i=t.createContext(s);function o(e){const l=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:l},e.children)}}}]);