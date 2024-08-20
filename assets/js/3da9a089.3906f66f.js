"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69528],{89900:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=r(17624),i=r(4552);const t={sidebar_position:10},o="Configure the Execution Server to Run as a Process by Default",c={id:"install-configure/cloudshell-suite/configure-products/config-execution-server-process",title:"Configure the Execution Server to Run as a Process by Default",description:"By default, the Execution Server currently runs as a service, which may be convenient in many cases. However, there are some technical limitations when running the Execution Server as a service, for example, the following features cannot be used:",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/config-execution-server-process.md",sourceDirName:"install-configure/cloudshell-suite/configure-products",slug:"/install-configure/cloudshell-suite/configure-products/config-execution-server-process",permalink:"/2023.3/install-configure/cloudshell-suite/configure-products/config-execution-server-process",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/config-execution-server-process.md",tags:[],version:"2023.3",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Configure the Execution Server",permalink:"/2023.3/install-configure/cloudshell-suite/configure-products/config-execution-server"},next:{title:"Configure CloudShell Sandbox API",permalink:"/2023.3/install-configure/cloudshell-suite/configure-products/config-sandbox-api"}},l={},a=[{value:"Running the Execution Server as a Process",id:"running-the-execution-server-as-a-process",level:2},{value:"Reverting the Execution Server back to a service",id:"reverting-the-execution-server-back-to-a-service",level:2}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-the-execution-server-to-run-as-a-process-by-default",children:"Configure the Execution Server to Run as a Process by Default"}),"\n",(0,s.jsx)(n.p,{children:"By default, the Execution Server currently runs as a service, which may be convenient in many cases. However, there are some technical limitations when running the Execution Server as a service, for example, the following features cannot be used:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GUI automation (Ranorex)"}),"\n",(0,s.jsxs)(n.li,{children:["Writing to Excel through the Filesystem library prior to Library version 5.1.1",(0,s.jsxs)(n.a,{href:"http://portal.qualisystems.com/entries/50010383?TestShell%20Suite/TestShell%20Suite%20Tool%20Libraries/FileSystem%205.1.1.284/FileSystem%205.1.1.rar",children:[(0,s.jsx)(n.br,{}),"\n"]})]}),"\n",(0,s.jsx)(n.li,{children:"Libraries that must launch a GUI, for example: IxNetwork"}),"\n",(0,s.jsx)(n.li,{children:"Studio Function - Capture Image"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In contrast, there may be instances where it is preferred to run the Execution Server as a process. However, running the Execution Server as a process requires a user to be logged in to the machine. The machine can be locked but an active user session must be in progress."}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you need to change the configuration, uninstall the Execution Server, ignore any error that appears and click ",(0,s.jsx)(n.strong,{children:"OK"})," to proceed, and install the Execution Server with the new configuration. Then, if desired, configure the Execution Server to run as a process again."]}),"\n",(0,s.jsx)(n.li,{children:"If you are performing an upgrade, you will need to perform the below procedure again after upgrading CloudShell."}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"running-the-execution-server-as-a-process",children:"Running the Execution Server as a Process"}),"\n",(0,s.jsx)(n.p,{children:"The following procedure explains the steps required to convert the default Execution Server service to a process."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To run the Execution Server as a process by default:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Start"})," and then run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"Services.msc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Stop the ",(0,s.jsx)(n.strong,{children:"TestShell Execution Server"})," service."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.strong,{children:"CMD"})," (as administrator)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Delete the existing service by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'sc delete "TestShell Execution Server"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a text file containing the following command, with the quotation marks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'"C:\\Program Files (x86)\\QualiSystems\\TestShell\\ExecutionServer\\QsExecutionServer.exe" tray\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save the file as a batch file named ",(0,s.jsx)(n.code,{children:"TestShell Execution Server.bat"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To have any Windows user on the machine configure the Execution Server as a process at login, add the batch file to the Windows Startup folder:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"C:\\\\ProgramData\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\StartUp"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can designate a Windows user to log in for the Execution Server and save the batch file to that user's Startup folder:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"%appdata%\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\Startup"})}),"\n",(0,s.jsx)(n.p,{children:"Windows will launch the script automatically whenever the Windows user logs in. The Execution Server process is indicated by a system tray icon:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(90332).c+"",width:"310",height:"134"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reverting-the-execution-server-back-to-a-service",children:"Reverting the Execution Server back to a service"}),"\n",(0,s.jsx)(n.p,{children:"Use this procedure to convert an Execution Server that is set to run as a process back to a service."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To revert the Execution Server to a service:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Remove the batch file from the Windows Startup folder:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"C:\\\\ProgramData\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\StartUp"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Exit the system tray process by right-clicking the process and selecting ",(0,s.jsx)(n.strong,{children:"Exit"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(90332).c+"",width:"310",height:"134"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.strong,{children:"CMD"})," as administrator and run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'sc create "TestShell Execution Server" binpath="c:\\Program Files (x86)\\QualiSystems\\TestShell\\ExecutionServer\\QsExecutionServer.exe"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"TestShell Execution Server"})," service is created."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the ",(0,s.jsx)(n.strong,{children:"Execution Server"})," configuration wizard to start the Execution Server."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},90332:(e,n,r)=>{r.d(n,{c:()=>s});const s=r.p+"assets/images/CloudShellExecutionServerTrayIcon-225d9d08d98c8530a6436f8a539e5a93.png"},4552:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>o});var s=r(11504);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);