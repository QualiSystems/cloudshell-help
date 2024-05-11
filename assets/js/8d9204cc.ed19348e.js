"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6212],{82460:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=s(17624),t=s(4552);const o={sidebar_position:2},l="Ansible Playbook Examples",r={id:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples",title:"Ansible Playbook Examples",description:"Examples",source:"@site/docs/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure Execution Server for Ansible",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/configure-es-for-ansible"},next:{title:"Test Ansible Playbooks on the Linux Execution Server",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/test-ansible-on-linux-es"}},i={},p=[{value:"Examples",id:"examples",level:2},{value:"Hello World",id:"hello-world",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Inventory Groups",id:"inventory-groups",level:3},{value:"Privilege escalation",id:"privilege-escalation",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ansible-playbook-examples",children:"Ansible Playbook Examples"}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"We\u2019ve put together some basic playbook examples to help you get started. If you are new to Ansible development, feel free to test them out."}),"\n",(0,a.jsx)(n.h3,{id:"hello-world",children:"Hello World"}),"\n",(0,a.jsx)(n.p,{children:"A basic playbook that prints \u201cHello World\u201d, just to make sure we\u2019re communicating with the VM, and are able to run the playbook. When run as part of an App\u2019s deployment in CloudShell, the message will be displayed in the sandbox diagram\u2019s\xa0Output\xa0window."}),"\n",(0,a.jsx)(n.p,{children:"For example, the\xa0site.yml\xa0file may look something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'---\n- hosts: all\n  tasks:\n  - name: Print Hello World\n    debug: msg="Hello World"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.p,{children:"A playbook that prints the parameter defined in an App template or API call (see below). Such playbooks are useful for debugging and making sure parameter variables are set with the correct values. Note that the parameters are stored as environment variables on the App instance in the sandbox."}),"\n",(0,a.jsx)(n.p,{children:"The\xa0site.yml\xa0file will look something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"---\n- hosts: all\n  vars: \n  - msg: \"{{P1|default('No Message')}}\"\n  tasks:\n  - name: Print P1\n    debug: var=msg\n"})}),"\n",(0,a.jsx)(n.p,{children:"Parameter defined in the App template:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Discovery Dialog",src:s(50076).c+"",width:"624",height:"164"})}),"\n",(0,a.jsxs)(n.p,{children:["Parameter defined in the\xa0",(0,a.jsx)(n.code,{children:"ConfigureApps"}),"\xa0API method (Python file):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import *\n \nsession = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\nsession.ConfigureApps(\n    reservationId='dfb2df41-334e-4630-8bc6-ec846eb072d6',\n    appConfigurations=[AppConfiguration('LinuxVmApp_9cb2-72d6', [ConfigParam('P1', 'Hello World From Here!')])],\n    printOutput=True\n)\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Since this script uses parameters defined on the App template, it will not work when run manually outside of CloudShell. For this to work, you will need to edit the Python code as follows:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the CloudShell settings passed to the\xa0",(0,a.jsx)(n.code,{children:"session"}),"\xa0variable, if needed."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Specify the ID of an active sandbox (in the\xa0",(0,a.jsx)(n.code,{children:"reservationId"}),"\xa0field of the Python code)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Replace \u2018LinuxVmApp_9cb2-72d6\u2019 with the App\u2019s name."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"inventory-groups",children:"Inventory Groups"}),"\n",(0,a.jsx)(n.p,{children:"In some cases, a playbook contains plays that target many different VMs that require configuration. In order to have the playbook run only the plays that are relevant to a specific VM, or to a group of hosts (VMs) that your VM belongs to, you can use the\xa0Inventory Groups\xa0field in the App template. In this field, specify the groups that your VM belongs to (more than one group can be provided). Use semicolons \u201c;\u201d to separate multiple groups."}),"\n",(0,a.jsx)(n.p,{children:"For example , specifying groups \u201cservers/http\u201d and servers/sql\u201d:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Discovery Dialog",src:s(46564).c+"",width:"575",height:"46"})}),"\n",(0,a.jsxs)(n.p,{children:["This example shows how these groups entered in the App\u2019s\xa0",(0,a.jsx)(n.strong,{children:"Configuration Management"}),"\xa0page should be written in the Ansible\xa0hosts\xa0file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"hosts\n[servers:children]\nhttp\nsql\n \n[http]\n192.168.1.2\n \n[sql]\n192.168.1.12\n"})}),"\n",(0,a.jsx)(n.h3,{id:"privilege-escalation",children:"Privilege escalation"}),"\n",(0,a.jsx)(n.p,{children:"Now let\u2019s say you want Ansible to dynamically get the user and password from the App when running a task on a particular App\u2019s VM. This is useful if the VM credentials on the App are not strong enough for the task you wish to run. To achieve this, you will need to add the following two parameters to your App\u2019s\xa0Configuration Management\xa0tab:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ansible_become_user"}),"\xa0- the user with the stronger permissions (probably a root user)"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ansible_become_pass"}),"\xa0- the password to that user"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Discovery Dialog",src:s(90060).c+"",width:"548",height:"133"})}),"\n",(0,a.jsx)(n.p,{children:"And modify the\xa0site.yml\xa0file to get the relevant VM\u2019s user and password from these parameters for each task:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'---\n- hosts: all\n  tasks:    \n    - name: Get sudoers file content\n      become: yes\n      become_method: su\n      command: cat /etc/sudoers\n      register: cmd_var\n \n    - name: Print output\n      debug: msg= "{{ cmd_var.stdout }}"\n'})})]})}function A(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},46564:(e,n,s)=>{s.d(n,{c:()=>a});const a="data:image/png;base64,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"},90060:(e,n,s)=>{s.d(n,{c:()=>a});const a="data:image/png;base64,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"},50076:(e,n,s)=>{s.d(n,{c:()=>a});const a=s.p+"assets/images/Custom-Scripts_2_624x164-3d58583ee5e2ebeb904abec274851df3.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>l});var a=s(11504);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);