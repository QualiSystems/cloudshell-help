"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[36524],{80060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(17624),i=n(4552);const r={sidebar_position:3},o="(Optional) Removing Message at Startup",l={id:"install-configure/qualix/appendix/remove-message-at-startup",title:"(Optional) Removing Message at Startup",description:"Perform these steps to remove a message stating that the VM is looking for a floppy drive at startup. These steps remove the floppy drive from the BIOS of the VM.",source:"@site/docs/install-configure/qualix/appendix/remove-message-at-startup.md",sourceDirName:"install-configure/qualix/appendix",slug:"/install-configure/qualix/appendix/remove-message-at-startup",permalink:"/cloudshell-help/next/install-configure/qualix/appendix/remove-message-at-startup",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/appendix/remove-message-at-startup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting QualiX to UTC\xa0Time",permalink:"/cloudshell-help/next/install-configure/qualix/appendix/setting-qualix-to-utc-time"},next:{title:"Working with QualiX VM",permalink:"/cloudshell-help/next/install-configure/qualix/appendix/work-with-qualix-vm/"}},a={},c=[];function h(e){const t={admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"optional-removing-message-at-startup",children:"(Optional) Removing Message at Startup"}),"\n",(0,s.jsx)(t.p,{children:"Perform these steps to remove a message stating that the VM is looking for a floppy drive at startup. These steps remove the floppy drive from the BIOS of the VM."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The functionality of the VM is not affected whether these steps are performed or not."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To modify the VM settings:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the desktop, open the VMware vSphere client."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Right-click the VM in the vSphere client and select ",(0,s.jsx)(t.strong,{children:"Edit Settings"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Options"})," tab, select ",(0,s.jsx)(t.strong,{children:"Boot options"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Force BIOS Setup"})," area, select the option ",(0,s.jsx)(t.strong,{children:"The next time the virtual machine boots, force entry into the BIOS setup screen."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(26132).c+"",width:"489",height:"436"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Restart the VM."}),"\n",(0,s.jsxs)(t.p,{children:["On the restart of the VM, the ",(0,s.jsx)(t.strong,{children:"BIOS Setup Utility"})," is displayed."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4824).c+"",width:"443",height:"329"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Main"})," tab, change the value of the default ",(0,s.jsx)(t.strong,{children:"Legacy Diskette A"})," to ",(0,s.jsx)(t.strong,{children:"Disabled"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the ",(0,s.jsx)(t.strong,{children:"Boot"})," tab."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(61552).c+"",width:"443",height:"329"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Modify the order that devices are set to boot. Move ",(0,s.jsx)(t.strong,{children:"Hard Drive"})," to the first position above ",(0,s.jsx)(t.strong,{children:"Removable Devices"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Press ",(0,s.jsx)(t.strong,{children:"F10"})," to save and then exit the ",(0,s.jsx)(t.strong,{children:"Setup Utility"}),"."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},26132:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Optional-Removing-message-635675362568261ab45a743a8a05f3ba.png"},4824:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Optional-Removing-message_1-6155a81c183939c58263ab80c7b94385.png"},61552:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Optional-Removing-message_2-e79711cff75bf7c70563bf48981cfeaa.png"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>o});var s=n(11504);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);