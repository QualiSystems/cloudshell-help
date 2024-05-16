"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[68940],{43396:(e,l,o)=>{o.r(l),o.d(l,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=o(17624),n=o(4552);const i={sidebar_position:1},r="Getting Started with Cloud Provider Development",s={id:"devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev",title:"Getting Started with Cloud Provider Development",description:"In this chapter, we\u2019ll learn how to create a Cloud Provider shell. The goal is to demonstrate the end-to-end cycle, from generating a new shell project to implementing the cloud provider interface and automation processes, as well as testing the shell in CloudShell.",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developing Custom Cloud Provider Shells",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells"},next:{title:"Creating the Cloud Provider Shell",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/create-cp-shell"}},d={},a=[{value:"What is a Cloud Provider shell?",id:"what-is-a-cloud-provider-shell",level:2},{value:"How is a Cloud Provider shell created?",id:"how-is-a-cloud-provider-shell-created",level:2},{value:"Supported versions - CloudShell v9.0 and up",id:"supported-versions---cloudshell-v90-and-up",level:2},{value:"Prerequisites",id:"prerequisites",level:2}];function h(e){const l={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"getting-started-with-cloud-provider-development",children:"Getting Started with Cloud Provider Development"}),"\n",(0,t.jsx)(l.p,{children:"In this chapter, we\u2019ll learn how to create a Cloud Provider shell. The goal is to demonstrate the end-to-end cycle, from generating a new shell project to implementing the cloud provider interface and automation processes, as well as testing the shell in CloudShell."}),"\n",(0,t.jsx)(l.h2,{id:"what-is-a-cloud-provider-shell",children:"What is a Cloud Provider shell?"}),"\n",(0,t.jsx)(l.p,{children:"The Cloud Provider shell standard is a project used to define a new cloud provider in CloudShell. The Cloud Provider shell is used to extend the system, allowing deployment of applications to an additional L2 or L3 cloud. The Cloud Provider Standard may also be used to implement deployment of applications as part of deployment containers."}),"\n",(0,t.jsx)(l.p,{children:"A Cloud Provider shell may include more than one deployment type, allowing a variety of options to base the virtual instance on (for example, selecting the image from the marketplace or loading a custom one)."}),"\n",(0,t.jsx)(l.h2,{id:"how-is-a-cloud-provider-shell-created",children:"How is a Cloud Provider shell created?"}),"\n",(0,t.jsx)(l.p,{children:"The basic creation and implementation process is as follows:"}),"\n",(0,t.jsxs)(l.ol,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"Create a new Cloud Provider shell."}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"Set up the Cloud Provider interface. In other words, implement the cloud provider driver that will be called by the server when interaction with the cloud provider is needed."}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["If the shell requires the use of Python dependencies, which aren\u2019t available in the public PyPi repository, add them to the local PyPi Server repository. See ",(0,t.jsx)(l.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"Debug the shell."}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"Install the shell on CloudShell."}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"In CloudShell, create a resource based on the new shell and make sure it works."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"Before developing your shell, please watch the following video to determine whether you need to create a new shell or customize an existing one:"}),"\n",(0,t.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/a8yEgOG7-bI",title:"Creating or Extending Shells",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,t.jsx)(l.h2,{id:"supported-versions---cloudshell-v90-and-up",children:"Supported versions - CloudShell v9.0 and up"}),"\n",(0,t.jsxs)(l.p,{children:["As of version 9.0, CloudShell supports the ability to define custom cloud providers (using the\xa0",(0,t.jsx)(l.code,{children:"cloud_provider"}),"\xa0shell template), as well as the out-of-the-box cloud providers VMware vCenter, AWS EC2 and Microsoft Azure. Note that the out-of-the-box cloud provider shells cannot be modified."]}),"\n",(0,t.jsx)(l.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.a,{href:"http://info.quali.com/cloudshell-developer-edition-download",children:"Get CloudShell"}),": Download the latest CloudShell SDK and run it on your machine."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.a,{href:"https://www.python.org/downloads/",children:"Python"}),": Make sure the appropriate Python version - 2.7.x and/or 3.x - (latest recommended) is installed on your machine.",(0,t.jsx)(l.br,{}),"\n","Starting with CloudShell 9.3, CloudShell comes with out-of-the-box support for Python 3 for shells."]}),"\n",(0,t.jsx)(l.p,{children:"Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s)."}),"\n",(0,t.jsxs)(l.admonition,{type:"tip",children:[(0,t.jsx)(l.p,{children:"CloudShell components such as Quali Server and the execution servers come with their own Python installation folders. Making changes to these folders may cause unexpected behavior in CloudShell. Therefore, if you plan on doing dev work on a machine that has CloudShell components installed, we recommend doing one of the following:"}),(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["Configuring dedicated virtual environments for your projects out of these base installations. To do this in PyCharm, see ",(0,t.jsx)(l.a,{href:"https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html",children:"https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html"}),". To do this via CLI, see ",(0,t.jsx)(l.a,{href:"https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv",children:"https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv"}),"."]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"https://www.python.org/downloads/",children:"Downloading separate installers"})," for Python 2.7.18 and 3.9.9 and using these as global installations (by setting the installation folders in the machine\u2019s PATH system variable) for any dev work being done."]}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"IDE/Text Editor"}),":\xa0Your preferred IDE editor. We recommend using PyCharm (which offers a free community edition) because of the tooling we\u2019ve already created for that IDE, including a CloudShell developer plugin."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"Shellfoundry:\xa0Shellfoundry"})," is our CLI tool that allows you to quickly and easily generate and distribute Shells. Make sure to install it on your machine. See\xa0",(0,t.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/getting-started",children:"Installing or Updating Shellfoundry"}),"\xa0for details."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:l}={...(0,n.M)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,l,o)=>{o.d(l,{I:()=>s,M:()=>r});var t=o(11504);const n={},i=t.createContext(n);function r(e){const l=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:l},e.children)}}}]);