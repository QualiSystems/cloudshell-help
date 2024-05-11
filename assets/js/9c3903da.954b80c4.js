"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[77304],{89188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(17624),i=t(4552);const r={sidebar_position:10},s="Debugging Shell Driver Commands",l={id:"devguide/developing-shells/debug-shell-driver-commands",title:"Debugging Shell Driver Commands",description:"While developing the Shell driver, you\u2019ll probably need to debug it in order to troubleshoot issues or get actual results from the app/device to understand how the code behaves.",source:"@site/docs/devguide/developing-shells/debug-shell-driver-commands.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/debug-shell-driver-commands",permalink:"/cloudshell-help/next/devguide/developing-shells/debug-shell-driver-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/debug-shell-driver-commands.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Auto-discovery for Inventory Shells",permalink:"/cloudshell-help/next/devguide/developing-shells/auto-discovery-for-inventory-shells"},next:{title:"Discovering Inventory using SNMP",permalink:"/cloudshell-help/next/devguide/developing-shells/discover-inv-using-snmp"}},a={},d=[{value:"Debugging a 2nd Gen Shell",id:"debugging-a-2nd-gen-shell",level:2},{value:"Setting up",id:"setting-up",level:3},{value:"Preparing your environment",id:"preparing-your-environment",level:3},{value:"Debugging the shell",id:"debugging-the-shell",level:3},{value:"Using the mock debugger",id:"using-the-mock-debugger",level:4},{value:"Using an API token",id:"using-an-api-token",level:4},{value:"Debugging a 1st Gen Shell",id:"debugging-a-1st-gen-shell",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up",id:"setting-up-1",level:3},{value:"Preparing your environment",id:"preparing-your-environment-1",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Testing out debugging",id:"testing-out-debugging",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"debugging-shell-driver-commands",children:"Debugging Shell Driver Commands"}),"\n",(0,o.jsx)(n.p,{children:"While developing the Shell driver, you\u2019ll probably need to debug it in order to troubleshoot issues or get actual results from the app/device to understand how the code behaves."}),"\n",(0,o.jsx)(n.h2,{id:"debugging-a-2nd-gen-shell",children:"Debugging a 2nd Gen Shell"}),"\n",(0,o.jsxs)(n.p,{children:["To debug our shell, we\u2019ll use the\xa0",(0,o.jsx)(n.a,{href:"https://pypi.org/project/mock/",children:"mock"}),"\xa0Python open source package."]}),"\n",(0,o.jsx)(n.p,{children:"The mock package allows us to simulate the use of CloudShell and therefore is also useful for debugging early stage shells which are not yet ready to be installed on CloudShell. For example, you have not yet developed critical shell components, like communication with the device and auto-discovery, or you\u2019re still developing the component or command you want to test, but are not sure what information the command will need."}),"\n",(0,o.jsx)(n.h3,{id:"setting-up",children:"Setting up"}),"\n",(0,o.jsx)(n.p,{children:"Create a new 2nd Gen shell project using Shellfoundry by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"shellfoundry new mock-debug-shell --template gen2/resource\n"})}),"\n",(0,o.jsx)(n.h3,{id:"preparing-your-environment",children:"Preparing your environment"}),"\n",(0,o.jsx)(n.p,{children:"When running a shell command from within CloudShell, the CloudShell execution server creates a virtual environment for the shell and downloads the required Python dependencies automatically. However, since we will run the debug outside of CloudShell, you will also need to update your project\u2019s runtime with the shell\u2019s dependencies. We recommend creating a new virtual environment for the project, and then downloading the shell\u2019s dependencies into the virtual environment."}),"\n",(0,o.jsxs)(n.p,{children:["If you\u2019re using the PyCharm application, open the shell project folder, click\xa0",(0,o.jsx)(n.strong,{children:"Settings>Tools>Python Integrated Tools"}),"\xa0and in the\xa0",(0,o.jsx)(n.strong,{children:"Package requirements file"}),"\xa0field, specify the shell\u2019s\xa0",(0,o.jsx)(n.code,{children:"requirements.txt"}),'. For example: "C:\\My Shells\\debugging-example\\src\\requirements.txt".']}),"\n",(0,o.jsx)(n.h3,{id:"debugging-the-shell",children:"Debugging the shell"}),"\n",(0,o.jsx)(n.p,{children:"In this section, we'll discuss two ways to debug a shell:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Using the mock debugger"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Using an API token"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"using-the-mock-debugger",children:"Using the mock debugger"}),"\n",(0,o.jsx)(n.p,{children:"Add the following mock code to the shell, and specify some details, like reservation ID, resource address and name, and any attributes required for resource discovery (for example, User, Password and SNMP Read Community.)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'if __name__ == "__main__":\n    import mock\n    from cloudshell.shell.core.driver_context import CancellationContext\n\n\n    shell_name = "DebuggingExample"\n\n    cancellation_context = mock.create_autospec(CancellationContext)\n    context = mock.create_autospec(ResourceCommandContext)\n    context.resource = mock.MagicMock()\n    context.reservation = mock.MagicMock()\n    context.connectivity = mock.MagicMock()\n    context.reservation.reservation_id = "<RESERVATION_ID>"\n    context.resource.address = "<RESOURCE_ADDRESS>"\n    context.resource.name = "<RESOURCE_NAME>"\n    context.resource.attributes = dict()\n    context.resource.attributes["{}.User".format(shell_name)] = "<USER>"\n    context.resource.attributes["{}.Password".format(shell_name)] = "<PASSWORD>"\n    context.resource.attributes["{}.SNMP Read Community".format(shell_name)] = "<READ_COMMUNITY_STRING>"\n\n    driver = DebuggingExampleDriver()\n\n    # print driver.run_custom_command(context, custom_command="sh run", cancellation_context=cancellation_context)\n    driver.initialize(context)\n    result = driver.get_inventory(context)\n\n    print "done"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Specify the attributes or commands you want to debug (",(0,o.jsx)(n.code,{children:"result ="}),"\xa0line) and add your break points. For example:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(12380).c+"",width:"624",height:"295"})}),"\n",(0,o.jsx)(n.p,{children:"And debug the shell. When debugging, the mock code will run instead of the shell\u2019s default initialization commands and will call the commands you want to test. When shell development is finished, you can leave the mock code in the shell as CloudShell will ignore it."}),"\n",(0,o.jsx)(n.p,{children:"For a step-by-step tutorial, see our instructional video on debugging with the mock package:"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/Lt5BhmUZR1o",title:"Adding API Commands to a Shell",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,o.jsx)(n.h4,{id:"using-an-api-token",children:"Using an API token"}),"\n",(0,o.jsx)(n.p,{children:"The below example gets the token from the context. Use it for driver commands/scripts running in CloudShell:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"session = CloudShellAPISession(host=context.connectivity.server_address,\ntoken_id=context.connectivity.admin_auth_token,\ndomain=context.reservation.domain)\n"})}),"\n",(0,o.jsx)(n.p,{children:"It is also possible to run your unitests using an authentication token, which provides the driver command with the required context objects from CloudShell. For example, injecting the authentication token into the connectivity object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from cloudshell.api.cloudshell_api import CloudShellAPISession\n\n\nhost="localhost"\nusername="admin"\npassword="admin"\ndomain="Global"\n\npythonApi = CloudShellAPISession(host, username, password, domain)\nprint(pythonApi)\n\nauthToken = pythonApi.authentication.xmlrpc_token # Use "pythonApi.token_id" with cloudshell-automation-api version 2020.1.0.178672 and below\nprint(authToken)\nconnectivity.admin_auth_token = authToken\n'})}),"\n",(0,o.jsx)(n.h2,{id:"debugging-a-1st-gen-shell",children:"Debugging a 1st Gen Shell"}),"\n",(0,o.jsx)(n.p,{children:"In order to help with this process, we will use CloudShell\u2019s Pycharm plugin, which provides debugging capabilities that you can use to attach to the driver process and debug it step by step."}),"\n",(0,o.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install\xa0",(0,o.jsx)(n.a,{href:"https://www.jetbrains.com/pycharm/",children:"JetBrains PyCharm"}),"\xa0and\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystemsLab/CloudShell-PyCharm-Plugin",children:"CloudShell\u2019s Pycharm plugin"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Have a CloudShell SDK developer edition set up. Have an execution server running on the same machine as your IDE."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"setting-up-1",children:"Setting up"}),"\n",(0,o.jsx)(n.p,{children:"To test the debugging capabilities, create a new Shell project using ShellFoundry by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"shellfoundry new debugging_example\ncd debugging_example\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then create an instance of the DebuggingExample resource and add it to a sandbox so we can use it for testing. These steps are identical to the ones demonstrated in ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),", which you can use a reference."]}),"\n",(0,o.jsx)(n.h3,{id:"preparing-your-environment-1",children:"Preparing your environment"}),"\n",(0,o.jsxs)(n.p,{children:["As part of the generated shell project, a\xa0",(0,o.jsx)(n.code,{children:"deployment.xml"}),"\xa0file has been automatically created. This file contains the mappings required for the PyCharm plugin to know where the source code is, what is the main driver class, what are the CloudShell credentials etc. Much of that information was automatically configured when we created the project using ShellFoundry."]}),"\n",(0,o.jsx)(n.p,{children:"There are a few things you do need to configure in order to use the plugin, mainly the CloudShell development server address and credentials. Fill in the following information in the XML file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'\x3c!-- The address of the Quali server on which to deploy, mandatory --\x3e\n<serverRootAddress>serverlocation</serverRootAddress>\n\n\x3c!-- The port of the Quali server on which to deploy, defaults to "8029" --\x3e\n<port>8029</port>\n\x3c!-- The server admin username, password and domain to use when deploying --\x3e\n<username>user</username>\n<password>password</password>\n<domain>domain</domain>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsxs)(n.p,{children:["One of the problems with debugging Python code is that some IDEs such as PyCharm require the script file code the Python is running to be the same file in the same location as the file open in your IDE. When CloudShell is running the driver code it actually runs the version of the code that\u2019s been uploaded to CloudShell on the execution server virtual environment. To solve this issue, you can set the\xa0",(0,o.jsx)(n.em,{children:"runFromLocalProject"}),"\xa0attribute of the\xa0",(0,o.jsx)(n.em,{children:"<Driver>"}),"\xa0element to \u2018true\u2019. This will change how CloudShell behaves and cause it to run the same file in your IDE instead. Please be aware that this is a development only setting and should not be used on your production environment."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'\x3c!-- The drivers to update, holds one or more drivers --\x3e\n<drivers>\n   \x3c!-- runFromLocalProject - Decides whether to run the driver from the current project directory for debugging purposes, defaults to "false" --\x3e\n   \x3c!-- waitForDebugger - When `runFromLocalProject` is enabled, decides whether to wait for a debugger to attach before running any Python driver code, defaults to "false" --\x3e\n   \x3c!-- sourceRootFolder - The folder to refer to as the project source root (if specified, the folder will be zipped and deployed instead of the whole project), defaults to the root project folder --\x3e\n    <driver runFromLocalProject="true" waitForDebugger="false" sourceRootFolder="src">\n        \x3c!-- A list of paths to the driver\'s files or folders relative to the project\'s root.\nmay be a path to a directory, in which case all the files and folders under the directory are added into the driver\'s zip file.\nif the <sources> element is not specified, all the files under the project are added to the driver\'s zip file --\x3e\n        <sources>\n             <source>src</source>\n        </sources>\n        \x3c!-- the driver name of the driver to update --\x3e\n        <targetName>ModelExampleDriver</targetName>\n    </driver>\n</drivers>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Once you\u2019ve set the\xa0",(0,o.jsx)(n.em,{children:"runFromLocalProject"}),"\xa0attribute to true you\u2019ll be able to use the IDE\u2019s ",(0,o.jsx)(n.strong,{children:"Attach to Process"})," feature to debug your code, set breakpoints etc."]}),"\n",(0,o.jsxs)(n.p,{children:["One additional issue you may run into is that by the time you\u2019re attaching to the Python process the command is already past the point you need to debug. In other words, the Python function doesn\u2019t \u2018wait\u2019 for you to attach it. This can become critical if you need to debug the driver \u2018initialize\u2019 function or some basic setup code. To help solve that problem, there is another attribute you can choose to set called \u2018waitForDebugger\u2019. Setting that attribute to true will actually cause the driver to pause after its been launched, before even running the\xa0",(0,o.jsx)(n.em,{children:"initialize"}),"\xa0function, and wait for a debugger to attach to it."]}),"\n",(0,o.jsx)(n.h3,{id:"testing-out-debugging",children:"Testing out debugging"}),"\n",(0,o.jsxs)(n.p,{children:["First, make sure you set both ",(0,o.jsx)(n.strong,{children:"waitForDebugger"})," and ",(0,o.jsx)(n.strong,{children:"runFromLocalProject"})," to ",(0,o.jsx)(n.strong,{children:"true"})," in the\xa0",(0,o.jsx)(n.code,{children:"deployment.xml"}),"\xa0file. Then, add some code to the initialize as well as to some of the sample functions in the sample driver in our project. Once you\u2019re done, click on the \u2018CloudShell\u2019 icon to deploy the driver in debug mode:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(30696).c+"",width:"624",height:"184"})}),"\n",(0,o.jsx)(n.p,{children:"You can now run the function in CloudShell. You\u2019ll notice it seems to be \u2018stuck\u2019 but what\u2019s really happening behind the scenes is that the Python process is waiting for a debugger to attach to it in order to proceed."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(7244).c+"",width:"624",height:"300"})}),"\n",(0,o.jsxs)(n.p,{children:["Now set up a breakpoint in the initialize or in one of the other functions and run ",(0,o.jsx)(n.strong,{children:"Run"})," or ",(0,o.jsx)(n.strong,{children:"Attach to local process"})," (in PyCharm). Select the right Python process based on the path of the virtual environment, which will contain the driver name. Your IDE should transition to debug mode and you should be able to step over/into functions and access runtime data."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(90141).c+"",width:"624",height:"153"})})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},30696:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Debugging-Shell-Driver-Commands_1_624x184-80f2cf2c51f4493f0fe8715e77a2d3aa.png"},7244:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Debugging-Shell-Driver-Commands_2_624x300-ef7359ada21de0e92f2468fdeede566d.png"},90141:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Debugging-Shell-Driver-Commands_3_624x153-c1ea967e44a73eb3ba0c5a22aec7f586.png"},12380:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Debugging-Shell-Driver-Commands_624x295-6b0324805d9575af703133283657449c.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var o=t(11504);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);