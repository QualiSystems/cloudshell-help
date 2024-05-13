"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[75424],{69192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var i=s(17624),o=s(4552);const l={sidebar_position:2},t="Test Ansible Playbooks on the Linux Execution Server",a={id:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/test-ansible-on-linux-es",title:"Test Ansible Playbooks on the Linux Execution Server",description:"Before running the playbook in an App, it is recommended to test it manually. To do that, follow these steps:",source:"@site/docs/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/test-ansible-on-linux-es.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/test-ansible-on-linux-es",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/test-ansible-on-linux-es",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/test-ansible-on-linux-es.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ansible Playbook Examples",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples"},next:{title:"Add the Playbook to an App",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app"}},d={},r=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"test-ansible-playbooks-on-the-linux-execution-server",children:"Test Ansible Playbooks on the Linux Execution Server"}),"\n",(0,i.jsx)(n.p,{children:"Before running the playbook in an App, it is recommended to test it manually. To do that, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On a Linux Execution Server machine, access the\xa0",(0,i.jsx)(n.code,{children:"/etc/ansible/ansible.cfg"}),"\xa0file and uncomment the line:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"host_key_checking = False"})}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["At runtime, the Ansible driver creates a local ",(0,i.jsx)(n.code,{children:"ansible.cfg"})," file and adds the above key."]}),"\n",(0,i.jsxs)(n.li,{children:["In addition, this local ",(0,i.jsx)(n.code,{children:"ansible.cfg"})," takes priority over all other config files. See this ",(0,i.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/reference_appendices/config.html#the-configuration-file",children:"Ansible documentation page"})," for details about Ansible config file hierarchies."]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a folder that will be the root of your test. This folder will contain the Ansible playbook as well as any additional folders and files required by the playbook."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add an inventory file with hosts and their groups (optional) for testing."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Discovery Dialog",src:s(9396).c+"",width:"484",height:"265"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add one or more playbook files."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you plan on using several playbook files in the App, make sure the main one is named\xa0",(0,i.jsx)(n.em,{children:"site.yml"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Discovery Dialog",src:s(14136).c+"",width:"484",height:"265"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(Optional) Add a \u201croles\u201d folder."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Discovery Dialog",src:s(59996).c+"",width:"624",height:"319"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(Optional) Populate it with the desired roles."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Discovery Dialog",src:s(80176).c+"",width:"624",height:"319"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Test the playbook by running\xa0",(0,i.jsx)(n.code,{children:"ansible-playbook \u2013i <InventoryFile> <MainPlaybookFile.yml>"}),". For some sample playbooks, see\xa0",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples",children:"Ansible Playbook Examples"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Discovery Dialog",src:s(17316).c+"",width:"624",height:"813"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once you are done developing your playbook, zip the playbook files along with the\xa0roles\xa0folder, upload it to a repository, and set the URL in the App template, as explained in\xa0",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app",children:"Add the Playbook to an App"}),"."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9396:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Ansible_10-3cf66cd385c94c5d23a6b8553b337182.png"},14136:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Ansible_11_484x265-7ea13b2710ddfcadb1ec3d4c0b15fab3.png"},59996:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Ansible_12_624x319-e51ac78b33fee63f70027611cee366d4.png"},80176:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Ansible_13_624x319-220430bfe83249ffff298117d605d193.png"},17316:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Ansible_14_624x813-2babc03568b5d2cda26c991564dbd5db.png"},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>t});var i=s(11504);const o={},l=i.createContext(o);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);