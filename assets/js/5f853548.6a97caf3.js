"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[40636],{30880:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(17624),t=i(4552);const s={sidebar_position:9},o="Import User Definitions from an Active Directory (Optional)",r={id:"install-configure/cloudshell-suite/complete-install/install-cloudshell/import-users-from-ad",title:"Import User Definitions from an Active Directory (Optional)",description:"This article describes how to import user definitions from an active directory. Perform these steps after completing the CloudShell installation.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/complete-install/install-cloudshell/import-users-from-ad.md",sourceDirName:"install-configure/cloudshell-suite/complete-install/install-cloudshell",slug:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/import-users-from-ad",permalink:"/cloudshell-help/install-configure/cloudshell-suite/complete-install/install-cloudshell/import-users-from-ad",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/complete-install/install-cloudshell/import-users-from-ad.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Install Products",permalink:"/cloudshell-help/install-configure/cloudshell-suite/complete-install/install-cloudshell/install-products"},next:{title:"CloudShell Watcher Data Overview",permalink:"/cloudshell-help/install-configure/cloudshell-suite/complete-install/install-cloudshell/cloudshell-watcher-data-overview"}},c={},d=[{value:"Add a key to the customer.config file",id:"add-a-key-to-the-customerconfig-file",level:2},{value:"Import new users into CloudShell",id:"import-new-users-into-cloudshell",level:2},{value:"Enable CloudShell to automatically import users when they first log in to CloudShell",id:"enable-cloudshell-to-automatically-import-users-when-they-first-log-in-to-cloudshell",level:2}];function h(e){const l={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"import-user-definitions-from-an-active-directory-optional",children:"Import User Definitions from an Active Directory (Optional)"}),"\n",(0,n.jsx)(l.p,{children:"This article describes how to import user definitions from an active directory. Perform these steps after completing the CloudShell installation."}),"\n",(0,n.jsx)(l.h2,{id:"add-a-key-to-the-customerconfig-file",children:"Add a key to the customer.config file"}),"\n",(0,n.jsxs)(l.p,{children:["Use the following steps to add the required key to the ",(0,n.jsx)(l.strong,{children:"customer.config"})," file and modify it to the required domain name."]}),"\n",(0,n.jsx)(l.admonition,{type:"note",children:(0,n.jsx)(l.p,{children:"Before importing user definitions from the active directory, ensure that the logon user of the server is in the same domain as the Active Directory."})}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"To add the required key to the customer.config file and then modify the key:"})}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"In the machine where CloudShell is installed, navigate to CloudShell installation folder, for example:"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["Open the ",(0,n.jsx)(l.strong,{children:"customer.config"})," file in a text editor."]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:i(97752).c+"",width:"565",height:"182"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["Add the following line to the ",(0,n.jsx)(l.strong,{children:"customer.config"})," file."]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.code,{children:'<add key="ActiveDirectory.Domain" value="QUALISYSTEMS"/>'})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:'Modify the new key by changing the value field from "QUALISYSTEMS" to that of your domain, for example:'}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.code,{children:'value="MYDOMAIN"'})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["Save the modified ",(0,n.jsx)(l.strong,{children:"customer.config"})," file."]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["Restart the ",(0,n.jsx)(l.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"import-new-users-into-cloudshell",children:"Import new users into CloudShell"}),"\n",(0,n.jsxs)(l.p,{children:["You can manage the user's setttings in ",(0,n.jsx)(l.strong,{children:"Resource Management Client"})," except for the username and password, which are provided by the Active Directory service provider."]}),"\n",(0,n.jsx)(l.admonition,{type:"note",children:(0,n.jsx)(l.p,{children:"Before importing user definitions from the active directory, the logon user of the server must be in the same domain as the Active Directory."})}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"To import new users into CloudShell:"})}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsx)(l.li,{children:"Open the CloudShell Resource Management Client."}),"\n",(0,n.jsxs)(l.li,{children:["From the Quali Community's ",(0,n.jsx)(l.a,{href:"http://www.quali.com/community/training/",children:"Docs & Training"})," page, open the ",(0,n.jsx)(l.strong,{children:"CloudShell Resource Manager Online Help."})]}),"\n",(0,n.jsxs)(l.li,{children:["Follow the steps described in ",(0,n.jsx)(l.a,{href:"/cloudshell-help/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users#importing-users-into-cloudshell-from-an-active-directory",children:"Importing users into CloudShell from an active directory"}),"."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"enable-cloudshell-to-automatically-import-users-when-they-first-log-in-to-cloudshell",children:"Enable CloudShell to automatically import users when they first log in to CloudShell"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"To enable CloudShell to automatically import users at first login:"})}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["In the machine where CloudShell is installed, open the ",(0,n.jsx)(l.strong,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file, and add the following key:"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.code,{children:'<add key="ExternalUserManagement.AutoImportUser" value="True"/>'})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["Save the ",(0,n.jsx)(l.strong,{children:"customer.config"})," file."]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["Restart the ",(0,n.jsx)(l.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:l}={...(0,t.M)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},97752:(e,l,i)=>{i.d(l,{c:()=>n});const n=i.p+"assets/images/Check-for-CloudShell-required_33-0582d5a84edec7e044b442b195392547.png"},4552:(e,l,i)=>{i.d(l,{I:()=>r,M:()=>o});var n=i(11504);const t={},s=n.createContext(t);function o(e){const l=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:l},e.children)}}}]);