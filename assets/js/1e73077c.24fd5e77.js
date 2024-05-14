"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[74024],{86004:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(17624),i=s(4552);const o={sidebar_position:4},r="Customizing Configuration Management Settings",l={id:"devguide/develop-config-management-scripts-for-apps/customize-cfg-mng-settings",title:"Customizing Configuration Management Settings",description:"As a CloudShell system administrator, you can modify certain attributes related to configuration management operations.",source:"@site/docs/devguide/develop-config-management-scripts-for-apps/customize-cfg-mng-settings.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/customize-cfg-mng-settings",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/customize-cfg-mng-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-config-management-scripts-for-apps/customize-cfg-mng-settings.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tips and Tricks for Ansible Playbooks",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/tips-and-tricks-for-ansible-playbooks"},next:{title:"Passing Variables From the Setup Script to Configuration Management",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/passing-variables-to-cfg-mng"}},a={},d=[];function c(e){const n={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"customizing-configuration-management-settings",children:"Customizing Configuration Management Settings"}),"\n",(0,t.jsx)(n.p,{children:"As a CloudShell system administrator, you can modify certain attributes related to configuration management operations."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To customize configuration management settings:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["As system administrator, log into ",(0,t.jsx)(n.strong,{children:"Resource Manager Client"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Admin"})," ribbon, click ",(0,t.jsx)(n.strong,{children:"Resource Families"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Resource Families"})," explorer is displayed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Configuration Services"})," service family and then select the appropriate model:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Ansible Configuration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Custom Script Configuration"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The model's ",(0,t.jsx)(n.strong,{children:"Parameters"})," pane is displayed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(27144).c+"",width:"625",height:"370"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select the desired attribute."}),"\n",(0,t.jsx)(n.p,{children:"The following attributes are provided by default:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Ansible Additional Arguments"}),(0,t.jsxs)(n.td,{children:["(For Ansible) Arguments to be passed to the execution of the playbook (",(0,t.jsx)(n.code,{children:"Ansible-playbook"})," command). For example, ",(0,t.jsx)(n.code,{children:"-v"})," will set verbose mode on, ",(0,t.jsx)(n.code,{children:"-f"})," will set the maximum number of VMs to be handled in parallel. Multiple arguments can be given, separated by spaces. For additional information on possible arguments, see the official Ansible documentation.",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"Note:"})," The arguments are defined globally for all Apps using Ansible.",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"Important:"})," To configure Ansible to connect to certified hosts only (Linux VMs with a valid 'known_hosts' key), include the following additional arguments: ",(0,t.jsx)(n.code,{children:"--ssh-extra-args='-o StrictHostKeyChecking=yes'"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Execution Server Selector"}),(0,t.jsx)(n.td,{children:"Enables CloudShell administrators to indicate which Execution Server or group of Execution Servers will be used to perform configuration management operations on App VMs. This is recommended for CloudShell deployments that have different sites or domains."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Supports Ansible"}),(0,t.jsx)(n.td,{children:"(For Ansible) Indicates that an Execution Server has a compatible version of Ansible and can run the Ansible configuration management operations. Enabled by default."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Timeout Minutes"}),(0,t.jsx)(n.td,{children:"Maximum number of minutes allowed for connection to the target machine. App deployment will fail when the timeout period has passed. 20 minutes by default."})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Edit Rules"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Attribute Rules"})," dialog box is displayed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can also specify a ",(0,t.jsx)(n.strong,{children:"Default Value"})," for this attribute."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},27144:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/CustomScriptConfiguration-ee0742cda4e1cac40827e03f3688053c.png"},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>r});var t=s(11504);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);