"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[19808],{96424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=s(17624),o=s(4552);const t={sidebar_position:5},a="Tips and Tricks for Ansible Playbooks",r={id:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/tips-and-tricks-for-ansible-playbooks",title:"Tips and Tricks for Ansible Playbooks",description:"Please take the following under consideration when developing your playbook:",source:"@site/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/tips-and-tricks-for-ansible-playbooks.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/tips-and-tricks-for-ansible-playbooks",permalink:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/tips-and-tricks-for-ansible-playbooks",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/tips-and-tricks-for-ansible-playbooks.md",tags:[],version:"2023.3",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Add the Playbook to an App",permalink:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app"},next:{title:"Customizing Configuration Management Settings",permalink:"/devguide/develop-config-management-scripts-for-apps/customize-cfg-mng-settings"}},l={},d=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tips-and-tricks-for-ansible-playbooks",children:"Tips and Tricks for Ansible Playbooks"}),"\n",(0,i.jsx)(n.p,{children:"Please take the following under consideration when developing your playbook:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make sure the Execution Server can access the script\u2019s raw URL."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When setting the VM user\u2019s credentials in the App, make sure you provide the credentials of a user that has the necessary permissions to successfully execute all the playbook\u2019s tasks."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"There's no need to include a hosts file in the playbook ZIP. At runtime, the Execution Server does the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Creates a dedicated hosts file, listing any groups specified in the App's ",(0,i.jsx)(n.strong,{children:"Inventory Groups"})," field along with the App's IP."]}),"\n",(0,i.jsx)(n.li,{children:"Packages the playbook ZIP with the new hosts file."}),"\n",(0,i.jsx)(n.li,{children:"Sends the playbook package to the Ansible Server."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the App\u2019s VM takes a long time to fully load, you may want to adjust the maximum time for the machine to respond, by setting the\xa0",(0,i.jsx)(n.strong,{children:"Timeout Minutes"}),"\xa0attribute on the\xa0",(0,i.jsx)(n.strong,{children:"Custom Script Configuration"}),"\xa0resource model (in Resource Manager Client\u2019s\xa0",(0,i.jsx)(n.strong,{children:"Resource Families"}),"\xa0explorer)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use the\xa0",(0,i.jsx)(n.strong,{children:"Ansible Additional Arguments"}),"\xa0attribute to specify more parameters that should run along with the\xa0",(0,i.jsx)(n.code,{children:"ansible-playbook"}),"\xa0command (e.g.\xa0",(0,i.jsx)(n.code,{children:"-vvv"}),"\xa0for easier debugging). The attribute resides in Resource Manager Client>",(0,i.jsx)(n.strong,{children:"Resource Families"}),"\xa0explorer>",(0,i.jsx)(n.strong,{children:"Configuration Services"}),". For details about supported arguments, see the official Ansible\xa0",(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/2.4/ansible-playbook.html",children:"documentation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To use an Ansible playbook on a Windows VM, make sure WinRM is configured and loaded automatically to allow the playbook to communicate with that VM. A script for this is provided in\xa0",(0,i.jsx)(n.a,{href:"/devguide/enable-winrm-on-win-vm-for-cfg-mng",children:"Enable WinRM on Windows VMs to Support Configuration Management"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Error \"Failed to connect to the host via ssh: Warning: Permanently added '192.168.11.12' (RSA) to the list of known hosts.\":"}),"\n",(0,i.jsxs)(n.p,{children:["When you first start using Ansible, by default, it has host verification enabled. This might result in warnings about ssh verification issue. You can disable it by setting a key (in the Ansible config file) or an environment variable: ",(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/inventory_guide/connection_details.html#managing-host-key-checking",children:"https://docs.ansible.com/ansible/latest/inventory_guide/connection_details.html#managing-host-key-checking"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>a});var i=s(11504);const o={},t=i.createContext(o);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);