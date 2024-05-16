"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[48380],{28824:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=t(17624),o=t(4552);const i={},r="Custom Script Development for Apps",l={id:"devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/index",title:"Custom Script Development for Apps",description:"This article will take you through the development process of a custom script for CloudShell App deployment. CloudShell supports PowerShell scripts for Windows VMs, and bash or sh scripts for Linux VMs. When developing your script, we recommend you first simulate/debug it by running it manually on a similar machine.",source:"@site/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/index.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Configuration Management Development",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/getting-started-with-cfg-mng-dev"},next:{title:"Add Your Script to an App",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/add-script-to-app"}},p={},a=[{value:"Examples",id:"examples",level:2},{value:"Hello World",id:"hello-world",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Linux privilege escalation",id:"linux-privilege-escalation",level:3}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"custom-script-development-for-apps",children:"Custom Script Development for Apps"}),"\n",(0,n.jsx)(s.p,{children:"This article will take you through the development process of a custom script for CloudShell App deployment. CloudShell supports PowerShell scripts for Windows VMs, and bash or sh scripts for Linux VMs. When developing your script, we recommend you first simulate/debug it by running it manually on a similar machine."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Here are several examples of custom scripts to help you get started. If you are new to script development, feel free to test them out."}),"\n",(0,n.jsx)(s.h3,{id:"hello-world",children:"Hello World"}),"\n",(0,n.jsxs)(s.p,{children:["A basic script, just to make sure we\u2019re communicating with the VM and are able to run a script. When run with an App, the output should be shown in the sandbox diagram\u2019s\xa0",(0,n.jsx)(s.strong,{children:"Output"}),"\xa0window."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"Windows / Linux\necho \u201cHello World\u201c\n"})}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:"A basic script that prints out the parameter defined in an App template or API call (see below). This is useful for debugging the script and making sure the parameter is received with the correct value. Note that the parameters are stored as environment variables on the App instance in the sandbox."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"Windows\necho $env:P1\nLinux\necho $P1\n"})}),"\n",(0,n.jsx)(s.p,{children:"Specified in the App template:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Discovery Dialog",src:t(50076).c+"",width:"624",height:"164"})}),"\n",(0,n.jsx)(s.p,{children:"Specified in the ConfigureApps API method:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"Python\nfrom cloudshell.api.cloudshell_api import *\n \nsession = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\nsession.ConfigureApps(\n    reservationId='dfb2df41-334e-4630-8bc6-ec846eb072d6',\n    appConfigurations=[AppConfiguration('LinuxVmApp_9cb2-72d6', [ConfigParam('P1', 'Hello World From Here!')])],\n    printOutput=True\n)\n"})}),"\n",(0,n.jsxs)(s.admonition,{title:"Notes",type:"note",children:[(0,n.jsx)(s.p,{children:"Since this script uses parameters defined on the App template, it will not work when run manually outside of CloudShell. For this to work, you will need to edit the Python code as follows:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Update the CloudShell settings passed to the\xa0",(0,n.jsx)(s.code,{children:"session"}),"\xa0variable, if needed."]}),"\n",(0,n.jsxs)(s.li,{children:["Specify the ID of an active sandbox (in the\xa0",(0,n.jsx)(s.code,{children:"reservationId"}),"\xa0field of the Python code)."]}),"\n",(0,n.jsx)(s.li,{children:"Replace \u2018LinuxVmApp_9cb2-72d6\u2019 with the App\u2019s name."}),"\n"]})]}),"\n",(0,n.jsx)(s.h3,{id:"linux-privilege-escalation",children:"Linux privilege escalation"}),"\n",(0,n.jsx)(s.p,{children:"If the deployed App resource is set with the credentials of a \u201cregular\u201d user, you may specify the root credentials in the parameters (see the Parameters example above), to use them in the script."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"Linux\necho $pass | su $user \u2013c \u2018ls /root\u2019\nor\nLinux\nsu - $user <<Block\n$pass\nls /root\nBlock\n"})})]})}function c(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50076:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/Custom-Scripts_2_624x164-3d58583ee5e2ebeb904abec274851df3.png"},4552:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>r});var n=t(11504);const o={},i=n.createContext(o);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);