"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57868],{15268:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=i(17624),r=i(4552);const l={sidebar_position:2},s="Shell Drivers Overview",a={id:"devguide/developing-shells/shell-drivers-overview",title:"Shell Drivers Overview",description:"What are Shells again?",source:"@site/docs/devguide/developing-shells/shell-drivers-overview.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/shell-drivers-overview",permalink:"/cloudshell-help/next/devguide/developing-shells/shell-drivers-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/shell-drivers-overview.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Shell Development",permalink:"/cloudshell-help/next/devguide/developing-shells/getting-started"},next:{title:"The Shell Project Guide",permalink:"/cloudshell-help/next/devguide/developing-shells/the-shell-project-guide"}},o={},d=[{value:"What are Shells again?",id:"what-are-shells-again",level:2},{value:"What are Shell drivers",id:"what-are-shell-drivers",level:2},{value:"How CloudShell manages the Shell drivers",id:"how-cloudshell-manages-the-shell-drivers",level:2},{value:"Python virtual environment",id:"python-virtual-environment",level:2},{value:"The Shell driver instance lifecycle",id:"the-shell-driver-instance-lifecycle",level:2},{value:"Commands Concurrency",id:"commands-concurrency",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"shell-drivers-overview",children:"Shell Drivers Overview"}),"\n",(0,t.jsx)(n.h2,{id:"what-are-shells-again",children:"What are Shells again?"}),"\n",(0,t.jsx)(n.p,{children:"Shells are a way to extend CloudShell by adding support for different types of sandbox elements such as apps, virtual appliances or physical resources. A shell can contain the bare minimum required to be able to model the sandbox element in CloudShell, how categorize it or which unique attributes it possesses. The Shell can also define the interface through which users can orchestrate or configure an app or a resource by executing commands. Example commands would be saving, restoring, restarting, performing health checks, administrative operations or scaling up or down."}),"\n",(0,t.jsx)(n.h2,{id:"what-are-shell-drivers",children:"What are Shell drivers"}),"\n",(0,t.jsx)(n.p,{children:"A Shell driver is an optional component in the Shell project that allows adding commands to Shells. CloudShell creates and manages dedicated instances of the driver to communicate with each physical resource or app. When the user executes a command, either from the Sandbox UI or the API, CloudShell ensures a driver for the target resource or app is currently running, then sends the command to the driver and relays back the response."}),"\n",(0,t.jsxs)(n.p,{children:["The driver can contain multiple files and folders but only one file contains a class which is considered to be the main driver class. This main class defines the Shell commands the driver provides. The default Shellfoundry template will generate the main driver class and place it inside the\xa0",(0,t.jsx)(n.code,{children:"driver.py"}),"\xa0file located in the\xa0",(0,t.jsx)(n.code,{children:"/src"}),"\xa0directory. The generated class name will correspond to the Shell name, which is also the CloudShell convention."]}),"\n",(0,t.jsx)(n.h2,{id:"how-cloudshell-manages-the-shell-drivers",children:"How CloudShell manages the Shell drivers"}),"\n",(0,t.jsx)(n.p,{children:"When the user executes a command for the first time on a deployed app or inventory resource in the Sandbox, CloudShell will initialize a driver object from the Shell driver class. The object will be created in its own isolated process, separate from other object instances of that same driver which may be driving other shell instances - other devices or apps. The Python process will initialize the driver class as a new object and will from that point on communicate with it to handle any commands."}),"\n",(0,t.jsx)(n.p,{children:"Inventory and app shell drivers behave a bit differently in terms of their lifecycle:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"App Shells"}),"\xa0- As apps are deployed in the scope of the sandbox, the app shell driver is also instanced for the deployed app in the sandbox. Each app deployed in a sandbox will have its own driver instance managed by CloudShell. This means that if there are currently twenty active sandboxes and a MySql app has been deployed in each one, twenty shell driver instances will be created, one to talk with each app in the sandbox."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shell Commands",src:i(90751).c+"",width:"624",height:"441"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Inventory Shells"}),"\xa0- For inventory Shells, a dedicated driver is managed per Inventory Shell resource instance. If you take for example a shell for physical switch like the NX-OS shell for Cisco switches, a shell driver instance will be created for each managed Cisco switch in your inventory. In this case, since the switch is a permanent inventory item and not created per sandbox, the driver is also instantiated per device."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shell Commands",src:i(64260).c+"",width:"624",height:"421"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether a deployed app or an inventory component, CloudShell will handle routing commands to the right driver instance. When the user executes a command on a shell instance, CloudShell will first check if a driver instance is already running for the Shell instance, find on which execution server is running, and send the command to that driver to handle. If a driver is not yet running, for that inventory resource or app, a new driver instance will be launched."}),"\n",(0,t.jsx)(n.h2,{id:"python-virtual-environment",children:"Python virtual environment"}),"\n",(0,t.jsxs)(n.p,{children:["The first time a driver instance is created for a specific driver, CloudShell will create a virtual environment for that driver on the execution server machine. All driver instances will then share that virtual environment. As a part of setting up the virtual environment, the execution server will try to install all of the driver dependencies listed in the\xa0",(0,t.jsx)(n.code,{children:"requirements.txt"}),"\xa0file, located in the\xa0src\xa0directory. If a newer version exists for one of the driver requirements, a new virtual environment will be created the next time a driver instance is initialized with the updated packages."]}),"\n",(0,t.jsx)(n.h2,{id:"the-shell-driver-instance-lifecycle",children:"The Shell driver instance lifecycle"}),"\n",(0,t.jsxs)(n.p,{children:["A driver instance is started the first time a command is sent to the resource or deployed app. As a part of the driver initialization the\xa0",(0,t.jsx)(n.em,{children:"initialize"}),"\xa0function of the driver is called. This function is guaranteed to be the first command executed on the driver and no other command is allowed to run until it completes successfully. Once complete, the driver can handle commands normally."]}),"\n",(0,t.jsxs)(n.p,{children:["After a certain duration of inactivity, the CloudShell Server can opt to stop the driver instance until its needed again. When the driver instance is stopped the\xa0",(0,t.jsx)(n.em,{children:"cleanup"}),"\xa0function is first called, allowing any cleanup code to run and prepare the driver for shutdown."]}),"\n",(0,t.jsxs)(n.p,{children:["The\xa0",(0,t.jsx)(n.em,{children:"initialize"}),"\xa0and\xa0",(0,t.jsx)(n.em,{children:"cleanup"}),"\xa0functions have a simple interface. If you generated your Shell project using Shellfoundry they should already be included in the generated\xa0",(0,t.jsx)(n.code,{children:"driver.py"}),"\xa0file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def initialize(self, context):\n    """\n    Initialize the driver session, this function is called every time a new instance of the driver is created\n    This is a good place to load and cache the driver configuration, initiate sessions etc.\n    :param InitCommandContext context: the context the command runs on\n    """\n    pass\n\ndef cleanup(self):\n    """\n    Destroy the driver session, this function is called every time a driver instance is destroyed\n    This is a good place to close any open sessions, finish writing to log files\n    """\n    pass\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The\xa0",(0,t.jsx)(n.em,{children:"initialize"}),"\xa0function is a good place to add code you expect to be called once during the lifecycle of the driver object. You should take into account that the driver is not guaranteed to run forever. The Quali server might choose to stop the driver instance due to inactivity. In general, it is recommended to keep the driver as stateless as possible, this will remove a lot of the complexity of cleanup and state recovery."]}),"\n",(0,t.jsxs)(n.p,{children:["The\xa0",(0,t.jsx)(n.em,{children:"cleanup"}),"\xa0function will be called whenever the driver instance is stopped. You can place any code that persists the current state of the driver, disconnects sessions or stop any external processes here."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shell Commands",src:i(67964).c+"",width:"624",height:"226"})}),"\n",(0,t.jsx)(n.h2,{id:"commands-concurrency",children:"Commands Concurrency"}),"\n",(0,t.jsxs)(n.p,{children:["By default, CloudShell will run Shell drivers in sequential mode. This means that CloudShell will send out commands to the driver one at a time and maintain a queue of pending commands if multiple executions are initiated. However, the shell can be configured to handle commands concurrently as well, in which case it becomes the responsibility of the driver developer to handle the concurrency and introduce mutexes where required. We\u2019ll review that option and how to configure it in the\xa0",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/developing-shells/commands-visibility-and-usability",children:"Commands Visibility and Usability"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Hopefully this section provided a good overview of what shells are and how drivers fit into the picture. How drivers are scoped, what entities they are assigned to and what their basic lifecycle is."})]})}function c(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},64260:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Shell-Drivers-Overview_1_624x421-654eec0d86670b6961b9385945552c32.png"},67964:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Shell-Drivers-Overview_2_624x226-e3d52ffe2a42cf0dc604838f026e39eb.png"},90751:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Shell-Drivers-Overview_624x441-d943e41add3686fdbb13504857ea3a81.png"},4552:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>s});var t=i(11504);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);