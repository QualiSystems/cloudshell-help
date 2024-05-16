"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69904],{17212:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=t(17624),a=t(4552);const i={sidebar_position:4},l="Setting up the App Resource",r={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/app-resource",title:"Setting up the App Resource",description:"When adding or editing an App, click App Resource in the left page, to optionally set the VM's operating system user credentials (for example, to connect to the VM via RDP or SSH). You can also change the deployed App's Shell.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/app-resource.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/app-resource",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/app-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/app-resource.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"App Configuraion Management Settings",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/configuration-management"},next:{title:"Managing Categories",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-categories"}},o={},d=[];function c(e){const s={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"setting-up-the-app-resource",children:"Setting up the App Resource"}),"\n",(0,n.jsxs)(s.p,{children:["When adding or editing an App, click ",(0,n.jsx)(s.strong,{children:"App Resource"})," in the left page, to optionally set the VM's operating system user credentials (for example, to connect to the VM via RDP or SSH). You can also change the deployed App's Shell."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(69284).c+"",width:"722",height:"390"})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["To help sandbox end-users connect to the VM, it is recommended to include the ",(0,n.jsx)(s.strong,{children:"User"})," and ",(0,n.jsx)(s.strong,{children:"Password"})," in the blueprint's instructions. For additional information, see ",(0,n.jsx)(s.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/add-instructions",children:"Add Instructions"}),"."]})}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Attribute"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Shell"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("p",{children:'The Shell on which the App\'s VMs are based. When an App is deployed in a sandbox, it changes into a "deployed App resource", which is based on the selected Shell. By default, the "Generic App Model" Shell is used.'}),(0,n.jsx)("p",{children:(0,n.jsx)(s.p,{children:"Deployed Apps include a default set of commands such as Power On and Refresh IP, and the VM's User and Password attributes, as explained below."})}),(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Changing the Shell might cause additional fields to become visible and you may need to enter further information."})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"User"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:["User defined in the App's image. The ",(0,n.jsx)(s.strong,{children:"User/Password"})," credentials are used by QualiX to create in-browser connections to the VM from within the sandbox."]}),(0,n.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"For AWS instances,make sure to set the User of a user that already exists on the Amazon machine image. For custom images, the image owner should know the credentials, while community/marketplace images have the image's credentials listed in their documentation."}),"\n",(0,n.jsxs)(s.li,{children:["Azure VM username and password restrictions apply. For details, see ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/faq",children:"Frequently asked question about Windows Virtual Machines"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"For Azure Marketplace images, CloudShell will create a user on the VM based on the User/Password credentials you specify."}),"\n",(0,n.jsx)(s.li,{children:"For Azure Marketplace VMs, if the user is not set, CloudShell will set adminuser as the default user name."}),"\n"]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Password"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"VM user's password."}),(0,n.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"For AWS Marketplace images, leave the Password empty. The AWS shell generates a new key-pair for each sandbox, which QualiX will use to establish the in-browser connection."}),"\n",(0,n.jsxs)(s.li,{children:["For Azure Marketplace images:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If the password is not set, only the user name will be required. For Linux VMs, CloudShell will create an SSH key-pair to enable a secure connection."}),"\n",(0,n.jsx)(s.li,{children:"If the password is set, it will be displayed as asterisks (******) in the blueprint or sandbox."}),"\n"]}),"\n"]}),"\n"]})})]})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,a.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},69284:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/AppResource-914db8e4f76415cff1b1a50045caddb1.png"},4552:(e,s,t)=>{t.d(s,{I:()=>r,M:()=>l});var n=t(11504);const a={},i=n.createContext(a);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);