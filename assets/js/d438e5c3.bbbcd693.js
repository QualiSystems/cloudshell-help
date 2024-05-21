"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[54012],{42604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(17624),s=t(4552);const l={sidebar_position:1},r="Create VM using the OVF Template (vSphere)",o={id:"install-configure/qualix/install-configure/create-vm-using-ovf",title:"Create VM using the OVF Template (vSphere)",description:"Use the following steps to use vSphere to deploy the QualiX template and create a VM.",source:"@site/versioned_docs/version-2023.3/install-configure/qualix/install-configure/create-vm-using-ovf.md",sourceDirName:"install-configure/qualix/install-configure",slug:"/install-configure/qualix/install-configure/create-vm-using-ovf",permalink:"/install-configure/qualix/install-configure/create-vm-using-ovf",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/qualix/install-configure/create-vm-using-ovf.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation and Configuration",permalink:"/install-configure/qualix/install-configure"},next:{title:"Deploy QualiX 4.1 using Docker",permalink:"/install-configure/qualix/install-configure/qualix-4.1-using-docker"}},a={},c=[];function h(e){const n={a:"a",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-vm-using-the-ovf-template-vsphere",children:"Create VM using the OVF Template (vSphere)"}),"\n",(0,i.jsx)(n.p,{children:"Use the following steps to use vSphere to deploy the QualiX template and create a VM."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To create a VM by deploying the OVF template:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In your local machine, login to vSphere with administrator credentials."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"File > Deploy OVF Template"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Deploy OVF Template"})," window, click ",(0,i.jsx)(n.strong,{children:"Browse"}),". Navigate to the directory where the installation files are located."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Deploy from a file or URL"})," field, navigate to and then select the required OVF file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Next"}),". View the summary of the OVF template. If the displayed details are correct, click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"End User License Agreement"})," page is displayed with the details of license agreements that are associated with the software that is installed in the OVF template."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Accept the license agreements to deploy the OVF template. If no license agreements are associated with the installed software, this screen does not appear. Click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enter the name for the deployed OVF template. The length of the name can be up to 80 characters long and should be unique within the VM folder. Names are case sensitive."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the folder location within the inventory for the virtual appliance. Click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Specify ",(0,i.jsx)(n.strong,{children:"Thin Provision"}),". Click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When the deployment has completed, click ",(0,i.jsx)(n.strong,{children:"Power On"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Right-click the VM and select ",(0,i.jsx)(n.strong,{children:"Open Console"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the VM console window, check the ",(0,i.jsx)(n.strong,{children:"Settings Screen"})," to make sure that it uploaded without errors."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After installing the QualiX VM, continue with ",(0,i.jsx)(n.a,{href:"/install-configure/qualix/post-installation-config/",children:"Post Installation Configuration"}),"."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var i=t(11504);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);