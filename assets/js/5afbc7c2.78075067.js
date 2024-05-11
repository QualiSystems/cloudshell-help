"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[68048],{6852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var s=t(17624),o=t(4552);const a={sidebar_position:4},i="Add the Playbook to an App",l={id:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app",title:"Add the Playbook to an App",description:"Now that we have tested and debugged our playbook, the next step is to add it to an App template. For details, see Adding App templates.",source:"@site/docs/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/add-playbook-to-app.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Test Ansible Playbooks on the Linux Execution Server",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/test-ansible-on-linux-es"},next:{title:"Tips and Tricks for Ansible Playbooks",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/tips-and-tricks-for-ansible-playbooks"}},r={},p=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"add-the-playbook-to-an-app",children:"Add the Playbook to an App"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have tested and debugged our playbook, the next step is to add it to an App template. For details, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/#adding-app-templates",children:"Adding App templates"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The playbook runs once during the ",(0,s.jsx)(n.strong,{children:"Setup"})," phase for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs. This is done both to improve performance and support cross-server logic where multiple applications need to be installed and configured in a certain way."]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In CloudShell Portal, open the\xa0",(0,s.jsx)(n.strong,{children:"Manage>Apps"}),"\xa0page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Edit or create an App."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the\xa0",(0,s.jsx)(n.strong,{children:"Configuration Management"}),"\xa0tab."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the\xa0",(0,s.jsx)(n.strong,{children:"Select Tool"}),"\xa0drop-down list, select\xa0",(0,s.jsx)(n.strong,{children:"Ansible"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the\xa0",(0,s.jsx)(n.strong,{children:"Connection"}),"\xa0Method, depending on the VM\u2019s operating system. Select\xa0",(0,s.jsx)(n.strong,{children:"Windows Remote Management"}),"\xa0for Windows machines, or\xa0",(0,s.jsx)(n.strong,{children:"SSH"}),"\xa0for Linux."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Specify the URL to the playbook YAML or ZIP file. Make sure you specify the raw version of the URL (GitHub, GitLab and BitBucket are supported). For example: ",(0,s.jsx)(n.code,{children:"https://raw.githubusercontent.com/QualiSystemsLab/private-repo-zip-download/master/README.zip"})]}),"\n",(0,s.jsxs)(n.p,{children:["The playbook can be a yaml file for a single playbook or a zip file containing several playbooks. For simple tasks, a single yaml file should be enough, but for more complex configuration logic, and for using roles, a zip file may be required (for a sample zip file, click\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/app-starter-pack/blob/dev/Playbooks/wordpress-rhel7.zip",children:"here"}),"). The zip file must contain a least one yaml (if there are several yaml files, the main one must be named\xa0site.yaml). In order to use roles, include in the zip a folder named\xa0roles, and add the roles to it."]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open ",(0,s.jsx)(n.strong,{children:"Resource Manager Client>Resource Families>Configuration Services (Ansible Configuration or Custom Script Configuration)"})," and set the ",(0,s.jsx)(n.strong,{children:"Verify Certificate"})," attribute to ",(0,s.jsx)(n.strong,{children:"False"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the URL is protected, specify the\xa0",(0,s.jsx)(n.strong,{children:"Username"}),"\xa0and\xa0",(0,s.jsx)(n.strong,{children:"Password"}),", or ",(0,s.jsx)(n.strong,{children:"Token"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the\xa0",(0,s.jsx)(n.strong,{children:"Inventory Groups"}),"\xa0field, specify the inventory groups, separated by semicolons \u201c;\u201d. For details, see the\xa0",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples#inventory-groups",children:"Inventory Groups"}),"\xa0example."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To add parameters to the playbook, click\xa0",(0,s.jsx)(n.strong,{children:"Add Parameter"}),", and enter each parameter\u2019s name and value. Repeat for additional parameters."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note that the parameters are added to the App template."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Discovery Dialog",src:t(37044).c+"",width:"624",height:"444"})}),"\n",(0,s.jsx)(n.p,{children:"You can add parameters to the App template in the following ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Provide the value as part of the App template, making it the default value for every instance of this App template."}),"\n",(0,s.jsx)(n.li,{children:"Specify a static value in the App in the blueprint."}),"\n",(0,s.jsx)(n.li,{children:"Specify a dynamic value in the App in the blueprint, linking the parameter to one of the blueprint\u2019s Global Inputs. To do so, just enter the global input\u2019s name in curly brackets as the parameter value, or click the \u201cplus\u201d button to select an available Global Input."}),"\n",(0,s.jsxs)(n.li,{children:["Pass a value using the API, as illustrated in this\xa0",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples#parameters",children:"Parameters"}),". This will replace any value provided in the App template or in the blueprint."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the\xa0",(0,s.jsx)(n.strong,{children:"App Resource"}),"\xa0tab, and enter the VM\u2019s access credentials."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Discovery Dialog",src:t(37624).c+"",width:"624",height:"444"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click\xa0",(0,s.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},37044:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Adding-the-Playbook-to-an_2_624x444-f08a16b0782c98eb637e96ae3d1a0caa.png"},37624:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Config-manage-Adding-Your_5_624x444-bb954e82ef45891b753c6d53d7dca588.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var s=t(11504);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);