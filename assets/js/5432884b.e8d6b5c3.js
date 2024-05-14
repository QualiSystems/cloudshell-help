"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[34086],{36908:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var t=l(17624),i=l(4552);const o={sidebar_position:1},s="Setting up the Development Environment",d={id:"devguide/setting-up-dev-env",title:"Setting up the Development Environment",description:"In this section we\u2019ll go over the recommended steps for setting up a development environment for developing CloudShell Shells and orchestration scripts.",source:"@site/docs/devguide/setting-up-dev-env.md",sourceDirName:"devguide",slug:"/devguide/setting-up-dev-env",permalink:"/cloudshell-help/next/devguide/setting-up-dev-env",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/setting-up-dev-env.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"The CloudShell DevGuide",permalink:"/cloudshell-help/next/devguide/"},next:{title:"Developing Shells",permalink:"/cloudshell-help/next/devguide/developing-shells/"}},h={},r=[{value:"Get the latest Python 3.9.x",id:"get-the-latest-python-39x",level:2},{value:"Pick and install an IDE",id:"pick-and-install-an-ide",level:2},{value:"Install Git",id:"install-git",level:2},{value:"Install ShellFoundry (for Shells development)",id:"install-shellfoundry-for-shells-development",level:2},{value:"Install and setup the CloudShell SDK",id:"install-and-setup-the-cloudshell-sdk",level:2},{value:"(Optional) Install the CloudShell PyCharm plugin (PyCharm)",id:"optional-install-the-cloudshell-pycharm-plugin-pycharm",level:2},{value:"Where to next?",id:"where-to-next",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setting-up-the-development-environment",children:"Setting up the Development Environment"}),"\n",(0,t.jsx)(n.p,{children:"In this section we\u2019ll go over the recommended steps for setting up a development environment for developing CloudShell Shells and orchestration scripts."}),"\n",(0,t.jsx)(n.h2,{id:"get-the-latest-python-39x",children:"Get the latest Python 3.9.x"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Python",src:l(30716).c+"",width:"400",height:"135"})}),"\n",(0,t.jsxs)(n.p,{children:["Download and install the latest version of Python 3.9.x from the\xa0",(0,t.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"official website"}),". We also recommend installing pip (even though technically its included in the latest versions of Python): pip 21.2.4 and up for Python 3.7 and pip 19.2.3 for Python 2.7.18. Python 2.7.x is supported for older shells. Follow the instructions on this website:\xa0",(0,t.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/installing/",children:"https://pip.pypa.io/en/stable/installing/"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"CloudShell components such as Quali Server and the execution servers come with their own Python installation folders. Making changes to these folders may cause unexpected behavior in CloudShell. Therefore, if you plan on doing dev work on a machine that has CloudShell components installed, we recommend doing one of the following:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Configuring dedicated virtual environments for your projects out of these base installations. To do this in PyCharm, see ",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html",children:"https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html"}),". To do this via CLI, see ",(0,t.jsx)(n.a,{href:"https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv",children:"https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Downloading separate installers"})," for Python 2.7.18 and 3.9.9 and using these as global installations (by setting the installation folders in the machine\u2019s PATH system variable) for any dev work being done."]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"pick-and-install-an-ide",children:"Pick and install an IDE"}),"\n",(0,t.jsx)(n.p,{children:"In the scope of this guide we\u2019ll discuss developing shells and scripts using standard Python, which means that there are many great options for an IDE. Some free IDEs to consider:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Microsoft Visual Studio Code"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/pycharm/",children:"JetBrains PyCharm"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://atom.io/",children:"GitHub Atom"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.sublimetext.com/",children:"Sublime Text"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These are all great IDEs. At this point we recommend using PyCharm simply because you\u2019ll be able to use Quali\u2019s developer plugin developed for that IDE in the community. This plugin is not a must but will make your life a little easier by automating some steps required to upload your driver or set it up for debugging."}),"\n",(0,t.jsx)(n.h2,{id:"install-git",children:"Install Git"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Git",src:l(63800).c+"",width:"200",height:"84"})}),"\n",(0,t.jsxs)(n.p,{children:["Some CloudShell developer tools require Git to be installed.",(0,t.jsx)(n.br,{}),"\n","Follow the installation instructions on the\xa0",(0,t.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"official website"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"install-shellfoundry-for-shells-development",children:"Install ShellFoundry (for Shells development)"}),"\n",(0,t.jsxs)(n.p,{children:["To shorten the Shell development cycle and reduce much of the boilerplate of setting up new shell projects we recommend installing the\xa0",(0,t.jsx)(n.a,{href:"https://github.com/QualiSystems/shellfoundry",children:"Shellfoundry"}),"\xa0package. To install Shellfoundry, simply open a new command line window and type in the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"python -m pip install shellfoundry\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For additional information, see\xa0",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/reference/shellfoundry",children:"Shellfoundry"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"install-and-setup-the-cloudshell-sdk",children:"Install and setup the CloudShell SDK"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CloudShell",src:l(91812).c+"",width:"300",height:"69"})}),"\n",(0,t.jsxs)(n.p,{children:["To deploy, test and debug your automation you\u2019ll need to have a working CloudShell SDK. The CloudShell SDK is free for developers and can be downloaded from our\xa0",(0,t.jsx)(n.a,{href:"https://info.quali.com/cloudshell-developer-edition-download",children:"community website"}),". Follow the instructions on the\xa0",(0,t.jsx)(n.a,{href:"http://info.quali.com/cloudshell-developer-edition-download",children:"download page"}),"\xa0to get a local development installation of CloudShell up and running. Please make sure you use an SDK version that matches your CloudShell production version for which you are developing Shells and Orchestration."]}),"\n",(0,t.jsx)(n.h2,{id:"optional-install-the-cloudshell-pycharm-plugin-pycharm",children:"(Optional) Install the CloudShell PyCharm plugin (PyCharm)"}),"\n",(0,t.jsxs)(n.p,{children:["If you\u2019ve selected to use PyCharm as your IDE, you can take advantage of the community contributed CloudShell plugin. Follow the installation instructions on the\xa0",(0,t.jsx)(n.a,{href:"https://github.com/QualiSystemsLab/CloudShell-PyCharm-Plugin",children:"project repo"}),". From the\xa0",(0,t.jsx)(n.em,{children:"Step-by-step installation guide"}),"\xa0section perform steps 1-6 only. Don\u2019t continue to configure the plugin usage further yet, we\u2019ll get to that part later in this guide."]}),"\n",(0,t.jsx)(n.h2,{id:"where-to-next",children:"Where to next?"}),"\n",(0,t.jsx)(n.p,{children:"This guide contains three main areas depending on the type of development or integration you wish to do with CloudShell:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/developing-shells/",children:"Developing Shells"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-orch-scripts/",children:"Developing Orchestration Scripts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/",children:"Developing Configuration Management Scripts for Apps"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../devguide/develop-custom-cloud-provider-shells/",children:"Developing Custom Cloud Provider Shells"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/available-cs-api/",children:"Available CloudShell APIs"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},30716:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/Intro-Setting-up-the-Development-adcc2d609616d57dec5d9fd24dfe5cd0.png"},63800:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/Intro-Setting-up-the-Development_1-4281d123462c0e26e98a90af754606f6.png"},91812:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/Intro-Setting-up-the-Development_2-f166c0461f5567d66c71b73846767dd7.png"},4552:(e,n,l)=>{l.d(n,{I:()=>d,M:()=>s});var t=l(11504);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);