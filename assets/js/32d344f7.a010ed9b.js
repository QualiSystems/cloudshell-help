"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[79484],{11576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(17624),i=n(4552);const r={sidebar_position:1},o="Getting Started with Orchestration Scripts",l={id:"devguide/develop-orch-scripts/getting-started-with-orch-scripts",title:"Getting Started with Orchestration Scripts",description:"Orchestration scripts can enable automating sandbox workflows. You can use orchestration scripts to create setup and teardown procedures as well as other custom workflows that can be made available in the sandbox. Examples include saving and restoring state, starting test traffic, running failover scenarios and more.\xa0Please note that sandbox environment automation and enhanced orchestration is available with CloudShell Premium Tier.",source:"@site/versioned_docs/version-2023.3/devguide/develop-orch-scripts/getting-started-with-orch-scripts.md",sourceDirName:"devguide/develop-orch-scripts",slug:"/devguide/develop-orch-scripts/getting-started-with-orch-scripts",permalink:"/2023.3/devguide/develop-orch-scripts/getting-started-with-orch-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-orch-scripts/getting-started-with-orch-scripts.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developing Orchestration Scripts",permalink:"/2023.3/devguide/develop-orch-scripts/"},next:{title:"How Orchestration Scripts Get Information from CloudShell",permalink:"/2023.3/devguide/develop-orch-scripts/how-orch-script-get-info-from-cs"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating and using orchestration scripts in CloudShell",id:"creating-and-using-orchestration-scripts-in-cloudshell",level:2},{value:"Creating a simple blueprint script",id:"creating-a-simple-blueprint-script",level:2},{value:"Uploading the orchestration script to CloudShell",id:"uploading-the-orchestration-script-to-cloudshell",level:2},{value:"Attaching the script to a blueprint",id:"attaching-the-script-to-a-blueprint",level:2},{value:"Executing the script in the sandbox",id:"executing-the-script-in-the-sandbox",level:2},{value:"Best Practices for working with orchestration scripts",id:"best-practices-for-working-with-orchestration-scripts",level:2},{value:"Setting the default Python version for new orchestration scripts",id:"setting-the-default-python-version-for-new-orchestration-scripts",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-started-with-orchestration-scripts",children:"Getting Started with Orchestration Scripts"}),"\n",(0,s.jsxs)(t.p,{children:["Orchestration scripts can enable automating sandbox workflows. You can use orchestration scripts to create setup and teardown procedures as well as other custom workflows that can be made available in the sandbox. Examples include saving and restoring state, starting test traffic, running failover scenarios and more.\xa0",(0,s.jsx)(t.em,{children:"Please note that sandbox environment automation and enhanced orchestration is available with CloudShell Premium Tier."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsxs)(t.strong,{children:["Before developing scripts, please familiarize yourself with CloudShell by taking ",(0,s.jsx)(t.a,{href:"http://courses.quali.com/",children:"Quali U courses"}),". These courses also include installation instructions for the CloudShell SDK package that deploys a developer edition of CloudShell on which you can perform your training and development activities."]})})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"http://info.quali.com/cloudshell-developer-edition-download",children:"Get CloudShell"}),": Download the latest CloudShell SDK VM and deploy it."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.python.org/downloads/",children:"Python"}),": Make sure the appropriate Python version - 2.7.x and/or 3.x - (latest recommended) is installed on your machine.",(0,s.jsx)(t.br,{}),"\n","Starting with CloudShell 9.2, CloudShell comes with out-of-the-box support for python 3 for orchestration scripts."]}),"\n",(0,s.jsx)(t.p,{children:"Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s)."}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"CloudShell components such as Quali Server and the execution servers come with their own Python installation folders. Making changes to these folders may cause unexpected behavior in CloudShell. Therefore, if you plan on doing dev work on a machine that has CloudShell components installed, we recommend doing one of the following:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Configuring dedicated virtual environments for your projects out of these base installations. To do this in PyCharm, see ",(0,s.jsx)(t.a,{href:"https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html",children:"https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html"}),". To do this via CLI, see ",(0,s.jsx)(t.a,{href:"https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv",children:"https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.python.org/downloads/",children:"Downloading separate installers"})," for Python 2.7.18 and 3.9.9 and using these as global installations (by setting the installation folders in the machine\u2019s PATH system variable) for any dev work being done."]}),"\n"]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"IDE/Text Editor:"}),"\xa0Your preferred IDE editor. We recommend using PyCharm (which offers a free community edition) because of the tooling we\u2019ve already created for that IDE, including a CloudShell developer plugin."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-and-using-orchestration-scripts-in-cloudshell",children:"Creating and using orchestration scripts in CloudShell"}),"\n",(0,s.jsx)(t.p,{children:"This procedure shows the basic steps for creating and using orchestration scripts in CloudShell."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a Python script. You can create a single python script, or a more complex orchestration that uses dependencies, as explained in ",(0,s.jsx)(t.a,{href:"/2023.3/devguide/develop-orch-scripts/script-deep-dive",children:"Script Deep Dive"}),"\xa0."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["It is highly recommended to extend CloudShell's out-of-the-box orchestration scripts as they already contain important orchestration capabilities you'd like to preserve. To do so, log in to CloudShell Portal as Global administrator, in the ",(0,s.jsx)(t.strong,{children:"Manage>Assets>Blueprint"})," page, download the desired script, make the necessary changes and save the script under a new name."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If the script requires the use of Python dependencies, which aren\u2019t available in the public PyPi repository, add them to the local PyPi Server. See ",(0,s.jsx)(t.a,{href:"/2023.3/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts",children:"Updating Python Dependencies for Shells, Drivers and Scripts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Save the script (if it's a single file) or zip the package if it comprises multiple files."}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsx)(t.p,{children:"Make sure the script's name is not the same as any of the out-of-the-box scripts."})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Upload the script to CloudShell. When uploading the script, you can set it as a setup or teardown script, to have it run automatically in the sandbox, or leave it as a manually launched orchestration script."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Attach the script to the blueprint. If it\u2019s a setup or teardown script, remove the blueprint\u2019s existing script first."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-simple-blueprint-script",children:"Creating a simple blueprint script"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In your preferred IDE create a new Python file."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"For now we\u2019ll want to keep its functionality very basic. So add some Python code to print \u2018Hello CloudShell\u2019."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"print 'hello CloudShell'\n"})}),"\n",(0,s.jsx)(t.p,{children:"As a side note, in CloudShell the output of a script is displayed in the output widget in the sandbox workspace, so whatever you print in your script will find its way there."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Save the file and give it any name, for example \u2018hello.py\u2019."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"uploading-the-orchestration-script-to-cloudshell",children:"Uploading the orchestration script to CloudShell"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In CloudShell Portal, open the\xa0",(0,s.jsx)(t.strong,{children:"Manage"}),"\xa0dashboard."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar, click\xa0",(0,s.jsx)(t.strong,{children:"Assets"}),"\xa0and select the\xa0",(0,s.jsx)(t.strong,{children:"Blueprint"}),"\xa0option. The page should be similar to this:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Scripts Management Page",src:n(7404).c+"",width:"624",height:"376"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the\xa0",(0,s.jsx)(t.strong,{children:"Add Python Script"}),"\xa0button and browse for the script."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Once the script is uploaded, click\xa0",(0,s.jsx)(t.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"For now, just provide a name for the script (the script\u2019s file name is the default) and select the script\u2019s Python version."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Scripts Management Page",src:n(72221).c+"",width:"601",height:"613"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["And click\xa0",(0,s.jsx)(t.strong,{children:"Save"}),"\xa0to seal the deal."]}),"\n",(0,s.jsx)(t.p,{children:"Your script is now in CloudShell, all we need now is a blueprint where it can work its magic."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"attaching-the-script-to-a-blueprint",children:"Attaching the script to a blueprint"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open the\xa0",(0,s.jsx)(t.strong,{children:"Blueprints"}),"\xa0dashboard and click\xa0",(0,s.jsx)(t.strong,{children:"Add New"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"A new blueprint will be created and you\u2019ll be taken to the blueprint\u2019s workspace."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Take a second to name your blueprint. You can do that by clicking the name next to the pencil icon."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The last stop is the ",(0,s.jsx)(t.strong,{children:"Properties"})," page. This is where we\u2019ll connect our new script. Click the\xa0",(0,s.jsx)(t.strong,{children:"Blueprint"}),"\xa0drop down menu and select\xa0",(0,s.jsx)(t.strong,{children:"Properties"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the\xa0",(0,s.jsx)(t.strong,{children:"Add Script"}),"\xa0button to assign our new script to the blueprint and then click ",(0,s.jsx)(t.strong,{children:"Update"})," at the bottom of the page."]}),"\n",(0,s.jsx)(t.p,{children:"That\u2019s it! Our script is ready to be used. However, in order to run it, we\u2019ll need to make our blueprint go live by creating a sandbox."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the\xa0",(0,s.jsx)(t.strong,{children:"Reserve"}),"\xa0button to create a sandbox from the blueprint. Next, let\u2019s run the script."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"executing-the-script-in-the-sandbox",children:"Executing the script in the sandbox"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the\xa0",(0,s.jsx)(t.strong,{children:"Commands"}),"\xa0button on the toolbar to open the\xa0Blueprint Commands\xa0side-pane."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the\xa0",(0,s.jsx)(t.strong,{children:"Run"}),"\xa0icon next to the command to launch it!"]}),"\n",(0,s.jsxs)(t.p,{children:["If the command executed successfully you should see a check mark next to the command name and the\xa0",(0,s.jsx)(t.strong,{children:"Output"}),"\xa0pane will display the command output."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Scripts Management Page",src:n(73396).c+"",width:"624",height:"356"})}),"\n",(0,s.jsx)(t.p,{children:"In the scope of this simple tutorial, we\u2019ve seen how to link a trivial Python script with a CloudShell blueprint. We\u2019ll look into more concrete examples and nuances in later sections of the guide."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"best-practices-for-working-with-orchestration-scripts",children:"Best Practices for working with orchestration scripts"}),"\n",(0,s.jsxs)(t.p,{children:["When developing orchestration scripts, we recommend to download the latest default setup or teardown script from CloudShell Portal\u2019s\xa0",(0,s.jsx)(t.strong,{children:"Manage>Assets"}),"\xa0page, make a copy and modify the contents. This will ensure you are using the right packages and structure."]}),"\n",(0,s.jsxs)(t.p,{children:["If you wish to develop an orchestration script from scratch or develop a script for a different CloudShell version, you will need to import the\xa0",(0,s.jsx)(t.em,{children:"cloudshell-orch-core"}),"\xa0package, which provides the basic features and capabilities needed for CloudShell orchestration scripts. Use this table to decide which version to use:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"CloudShell version"}),(0,s.jsx)(t.th,{children:"cloudshell-orch-core version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"8.3 GA"}),(0,s.jsx)(t.td,{children:">=1.7.5.0,<1.7.6.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9.0 GA"}),(0,s.jsx)(t.td,{children:">=2.0.0.0,<2.1.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9.1 GA"}),(0,s.jsx)(t.td,{children:">=2.1.0.0,<2.2.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9.2 GA"}),(0,s.jsx)(t.td,{children:">=3.0.0.0,<3.1.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9.3 GA"}),(0,s.jsx)(t.td,{children:">=3.2.0.0,<3.3.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2020.1"}),(0,s.jsx)(t.td,{children:">=3.2.0.0,<3.3.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2020.2"}),(0,s.jsx)(t.td,{children:">=3.4.0.0,<3.5.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2021.1"}),(0,s.jsx)(t.td,{children:">=3.4.0.0,<3.5.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2021.2"}),(0,s.jsx)(t.td,{children:">=3.4.0.0,<3.5.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2022.1"}),(0,s.jsx)(t.td,{children:">=4.0.0.0,<4.1.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2022.2"}),(0,s.jsx)(t.td,{children:">=4.2.0.0,<4.3.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2023.1"}),(0,s.jsx)(t.td,{children:">=4.2.0.0,<4.3.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2023.2"}),(0,s.jsx)(t.td,{children:">=4.3.0.0,<4.4.0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2023.3"}),(0,s.jsx)(t.td,{children:">=4.4.0.0,<4.5.0.0"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["To set a range for a package, add a line to the script's ",(0,s.jsx)(t.code,{children:"requirements.txt"})," that states the minimum and maximum versions. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"cloudshell-orch-core>=3.2.0.0,<3.3.0.0\n"})}),"\n",(0,s.jsx)(t.p,{children:'To set a specific version of the package, use "==". For example:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"cloudshell-orch-core==3.2.0.169\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For details about the ",(0,s.jsx)(t.code,{children:"requirements.txt"})," file, see\xa0",(0,s.jsx)(t.a,{href:"/2023.3/devguide/develop-orch-scripts/script-deep-dive",children:"Script Deep Dive"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"setting-the-default-python-version-for-new-orchestration-scripts",children:"Setting the default Python version for new orchestration scripts"}),"\n",(0,s.jsxs)(t.p,{children:["Starting with CloudShell 9.2, the\xa0",(0,s.jsx)(t.code,{children:"DefaultPythonVersion"}),"\xa0admin key allows you to control the Python version in which all new orchestration scripts are created. For details, see ",(0,s.jsx)(t.a,{href:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations",children:"Advanced CloudShell Customizations"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Note that this key also applies to new shells."})]})}function a(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},72221:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Scripts-Getting-Started_1_601x613-b7466bc858456ef42b58702741056a4d.png"},73396:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Scripts-Getting-Started_2_624x356-4b2763c2bac58beac3cd19dd1fa2377b.png"},7404:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Scripts-Getting-Started_624x376-1e16c36648f5ea8df8d978c691491b22.png"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>o});var s=n(11504);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);