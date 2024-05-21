"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[27001],{55020:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(17624),o=t(4552);const i={sidebar_position:2},r="Tips and Tricks for Custom Scripts",a={id:"devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/tips-and-tricks-for-custom-scripts",title:"Tips and Tricks for Custom Scripts",description:"Please take the following under consideration when developing your script:",source:"@site/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/tips-and-tricks-for-custom-scripts.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/tips-and-tricks-for-custom-scripts",permalink:"/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/tips-and-tricks-for-custom-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/tips-and-tricks-for-custom-scripts.md",tags:[],version:"2023.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Add Your Script to an App",permalink:"/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/add-script-to-app"},next:{title:"Ansible Playbook Development for Apps",permalink:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps"}},p={},c=[];function d(e){const s={a:"a",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"tips-and-tricks-for-custom-scripts",children:"Tips and Tricks for Custom Scripts"}),"\n",(0,n.jsx)(s.p,{children:"Please take the following under consideration when developing your script:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Make sure the Execution Server can access the script\u2019s raw URL."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["If the VM is loaded with a user that does not have the necessary permissions but you have a stronger user, pass that user to the App as a parameter to use it in the script as an environment variable (see the\xa0\xa0",(0,n.jsx)(s.a,{href:"/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/#parameters",children:"Parameters"})," example)."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["If the App\u2019s VM takes a long time to fully load, you may want to adjust the maximum time for the machine to respond by setting the\xa0",(0,n.jsx)(s.strong,{children:"Timeout Minutes"}),"\xa0attribute on the\xa0",(0,n.jsx)(s.strong,{children:"Custom Script Configuration"}),"\xa0resource model (in Resource Manager Client\u2019s\xa0",(0,n.jsx)(s.strong,{children:"Resource Families"}),"\xa0explorer)."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["To use a bash or sh script on a Windows VM, make sure WinRM is configured and loaded automatically to allow the custom script to communicate with that VM. A script for this is provided in\xa0",(0,n.jsx)(s.a,{href:"/devguide/enable-winrm-on-win-vm-for-cfg-mng",children:"Enable WinRM on Windows VMs to Support Configuration Management"}),"."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>a,M:()=>r});var n=t(11504);const o={},i=n.createContext(o);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);