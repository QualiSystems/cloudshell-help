"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[29740],{64188:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(17624),r=i(4552);const o={sidebar_position:5},t="QualiX Connection Error: Missing Required Permissions/Invalid link \u2013 Access denied",l={id:"troubleshooting/qualix/qualix-connection-error-missing-required-permissionsinvalid-link-access-denied",title:"QualiX Connection Error: Missing Required Permissions/Invalid link \u2013 Access denied",description:"Error Messages",source:"@site/versioned_docs/version-2023.3/troubleshooting/qualix/qualix-connection-error-missing-required-permissionsinvalid-link-access-denied.md",sourceDirName:"troubleshooting/qualix",slug:"/troubleshooting/qualix/qualix-connection-error-missing-required-permissionsinvalid-link-access-denied",permalink:"/troubleshooting/qualix/qualix-connection-error-missing-required-permissionsinvalid-link-access-denied",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/qualix/qualix-connection-error-missing-required-permissionsinvalid-link-access-denied.md",tags:[],version:"2023.3",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"QualiX Connection Error: Remote Desktop Server",permalink:"/troubleshooting/qualix/qualix-connection-error-remote-desktop-server"},next:{title:"QualiX: Remote Connection Attempt Opens CloudShell Login Page",permalink:"/troubleshooting/qualix/qualix-remote-connection-attempt-opens-cloudshell-login-page"}},a={},d=[{value:"Error Messages",id:"error-messages",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Syncing Quali Server and QualiX to the same Network Time Protocol",id:"syncing-quali-server-and-qualix-to-the-same-network-time-protocol",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"qualix-connection-error-missing-required-permissionsinvalid-link--access-denied",children:"QualiX Connection Error: Missing Required Permissions/Invalid link \u2013 Access denied"}),"\n",(0,s.jsx)(n.h2,{id:"error-messages",children:"Error Messages"}),"\n",(0,s.jsx)(n.admonition,{type:"danger-one-line",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CONNECTION ERROR You do not have permission to access this connection because you are not logged in. Please log in and try again."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Invalid link \u2013 Access denied"}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"There is a difference between the time set on the QualiX machine and the time set on Quali Server."}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To resolve the issue described above, do one of the following:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Set QualiX to UTC time."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"-or-"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Set both machines against the same Network Time Protocol server."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To set QualiX to UTC\xa0time (manually, without NTP):"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the ",(0,s.jsx)(n.strong,{children:"SetQualiXTimeZone"})," utility: Open ",(0,s.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/360037650694",children:"Quali's QualiX Download Page"}),', search the page for "utilities", and click the ',(0,s.jsx)(n.strong,{children:"Utilities"})," link of the appropriate QualiX version:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(99588).c+"",width:"707",height:"518"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Extract the files to your local directory."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"SetQualiXTimeZone.ps1"})," file and set the username and password to the QualiX machine:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(97988).c+"",width:"908",height:"266"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save the file and run the ",(0,s.jsx)(n.code,{children:"SetQualiXTimeZone.ps1"})," file with Windows PowerShell."]}),"\n",(0,s.jsx)(n.p,{children:"If you get an error message that running scripts is disabled on your system, run the following command and try again:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Set-ExecutionPolicy RemoteSigned -Scope CurrentUser\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When prompted, enter the IP address of the QualiX machine."}),"\n",(0,s.jsx)(n.p,{children:"The command returns the current time and date on the QualiX machine and Quali Server."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the QualiX machine's time is different from the time on Quali Server, when prompted, enter the UTC time that is set on the Quali Server machine, in ",(0,s.jsx)(n.code,{children:"HH:mm"})," format."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(96472).c+"",width:"600",height:"93"})}),"\n",(0,s.jsx)(n.p,{children:"The QualiX machine's time is updated."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"syncing-quali-server-and-qualix-to-the-same-network-time-protocol",children:"Syncing Quali Server and QualiX to the same Network Time Protocol"}),"\n",(0,s.jsx)(n.p,{children:"In certain cases, the Quali Server, QualiX and CloudShell Portal machines might be synchronized to different Network Time Protocol (NTP) servers, which may cause slight time differences."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To set both machines against the same Network Time Protocol server:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Perform the steps at ",(0,s.jsx)(n.a,{href:"http://support.ntp.org/bin/view/Support/WindowsTimeService",children:"http://support.ntp.org/bin/view/Support/WindowsTimeService"})," to resolve this issue."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},96472:(e,n,i)=>{i.d(n,{c:()=>s});const s="data:image/png;base64,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"},99588:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/SetUTCTimeUtilityLocation-4c0577c98fac3dc4d040382e9328c0f0.png"},97988:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/SetqualiXTimeZoneSetCreds-d025c0535ee9a4e2fab2197e8f648baf.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var s=i(11504);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);