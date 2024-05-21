"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[43912],{46332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(17624),i=t(4552);const a={sidebar_position:5},r="Passing Variables From the Setup Script to Configuration Management",o={id:"devguide/develop-config-management-scripts-for-apps/passing-variables-to-cfg-mng",title:"Passing Variables From the Setup Script to Configuration Management",description:"A common use case for configuration management scripts is to inject environment data during the sandbox's setup phase. This is done using a custom setup script that prepares the data and passes it to predefined or dynamically-created variables on the App's configuration management.",source:"@site/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/passing-variables-to-cfg-mng.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/passing-variables-to-cfg-mng",permalink:"/devguide/develop-config-management-scripts-for-apps/passing-variables-to-cfg-mng",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/passing-variables-to-cfg-mng.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Customizing Configuration Management Settings",permalink:"/devguide/develop-config-management-scripts-for-apps/customize-cfg-mng-settings"},next:{title:"Enable WinRM on Windows VMs to Support Configuration Management",permalink:"/devguide/enable-winrm-on-win-vm-for-cfg-mng"}},l={},c=[{value:"Related Topics",id:"related-topics",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"passing-variables-from-the-setup-script-to-configuration-management",children:"Passing Variables From the Setup Script to Configuration Management"}),"\n",(0,s.jsx)(n.p,{children:"A common use case for configuration management scripts is to inject environment data during the sandbox's setup phase. This is done using a custom setup script that prepares the data and passes it to predefined or dynamically-created variables on the App's configuration management."}),"\n",(0,s.jsxs)(n.p,{children:["For illustration purposes, the following ",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystemsLab/cloudshell-api-script-samples/tree/master/generic-orchestration-samples/setup/setup_set_user_mail_on_apps",children:"setup script"}),' gets the sandbox owner\'s email from their CloudShell user profile and passes it to a dynamically-created parameter called "USER_MAIL" on target Apps that have an "Update Mail" attribute.']}),"\n",(0,s.jsx)(n.p,{children:"The main files in the script are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__main__.py"}),": Entry point to the script. Note that the file includes an ",(0,s.jsx)(n.code,{children:"enable_configuration=False"})," flag, which disables the default out-of-the-box ",(0,s.jsx)(n.strong,{children:"Configuration"})," step to allow our custom code to run instead."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"configure_apps.py"}),": Custom orchestration function that replaces the out-of-the-box Configuration step in the sandbox's setup phase"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To use the script:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.strong,{children:"Resource Manager Client > Resource Families"})," explorer, do the following:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create an Update Mail attribute (Boolean, default: ",(0,s.jsx)(n.strong,{children:"False"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Set the attribute on the ",(0,s.jsx)(n.strong,{children:"Generic App Family"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Upload the script to CloudShell."}),"\n",(0,s.jsx)(n.li,{children:"Create a blueprint and replace the out-of-the-box Setup script."}),"\n",(0,s.jsx)(n.li,{children:"Add the suitable Apps to the blueprint."}),"\n",(0,s.jsxs)(n.li,{children:["Set the attribute to ",(0,s.jsx)(n.strong,{children:"True"})," in the blueprint Apps."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",children:"Managing Assets"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Managing App Templates"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/portal/blueprints/creating-blueprints/create-blueprint",children:"Create a Blueprint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/portal/blueprints/creating-blueprints/configure-orchestration",children:"Configure Blueprint Orchestration"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var s=t(11504);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);