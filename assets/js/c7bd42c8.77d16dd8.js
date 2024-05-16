"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[27972],{83284:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(17624),s=i(4552);const o={sidebar_position:1},t="Configure Execution Server for Ansible",l={id:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/configure-es-for-ansible",title:"Configure Execution Server for Ansible",description:"The first thing you need to do is set up an Execution Server that can execute Ansible configuration management. For this you will need a Linux Execution Server with the following utilities and configurations:",source:"@site/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/configure-es-for-ansible.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/configure-es-for-ansible",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/configure-es-for-ansible",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/configure-es-for-ansible.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ansible Playbook Development for Apps",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps"},next:{title:"Ansible Playbook Examples",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/ansible-playbook-examples"}},a={},c=[{value:"Indicate Execution Servers that run Ansible",id:"indicate-execution-servers-that-run-ansible",level:2},{value:"Perform additional configurations on the Execution Server machine",id:"perform-additional-configurations-on-the-execution-server-machine",level:2},{value:"Next...",id:"next",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-execution-server-for-ansible",children:"Configure Execution Server for Ansible"}),"\n",(0,r.jsx)(n.p,{children:"The first thing you need to do is set up an Execution Server that can execute Ansible configuration management. For this you will need a Linux Execution Server with the following utilities and configurations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Execution Server installed on Linux machine, with the\xa0ansible\xa0attribute enabled. See ",(0,r.jsx)(n.a,{href:"../../../install-configure/linux-virtual-appliance/",children:"Linux Execution Server Installation and Configuration"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Python 3.7 (Python 3.9.x is provided out of the box with the ",(0,r.jsx)(n.strong,{children:"Linux Execution Server"})," virtual appliance or script)"]}),"\n",(0,r.jsx)(n.li,{children:"Ansible 2.9.27"}),"\n",(0,r.jsx)(n.li,{children:"pywinrm 0.4.2"}),"\n",(0,r.jsx)(n.li,{children:"CentOS sshpass"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"indicate-execution-servers-that-run-ansible",children:"Indicate Execution Servers that run Ansible"}),"\n",(0,r.jsx)(n.p,{children:"This section explains how to indicate that the Execution Server installation has Ansible installed and therefore can support Ansible operations on Apps."}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Quali Server must be running when configuring the Execution Server."}),"\n"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To configure an Execution Server using CloudShell Portal:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the Execution Server machine, log in to CloudShell Portal as administrator."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Manage"})," dashboard, click ",(0,r.jsx)(n.strong,{children:"Execution Servers"})," and then select ",(0,r.jsx)(n.strong,{children:"Servers"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Servers"})," page, click the Execution Server's name."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Attributes"})," window pops up."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(36072).c+"",width:"542",height:"276"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Supports Ansible"})," check box to use this Execution Server for Ansible configuration management."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you have several Execution Servers that support Ansible but want to use this one, see the following section:"}),"\n",(0,r.jsxs)(n.p,{children:["This is recommended for geographically distributed deployments where you want a local Execution Server to perform operations on cloud providers that are physically nearest that Execution Server. For more information, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"})," or ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To set a specific Execution Server for Ansible configuration management:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select the attribute and specify a value."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Specify the same value on the ",(0,r.jsx)(n.strong,{children:"Execution Server Selector"})," attrribute in the cloud provider resource and/or in the ",(0,r.jsx)(n.strong,{children:"Resource Manager Client > Configuration Services > Ansible Configuration"})," service model."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, CloudShell will use the Execution Server defined in the cloud provider resource. If it is not available, CloudShell will use the Execution Server defined in the ",(0,r.jsx)(n.strong,{children:"Ansible Configuration"})," model. Execution Servers specified on the deployed App shell/resource are not used for configuration management."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You can also configure the designated Ansible Execution Server to perform additional operations, such as running shells or commands."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To configure an Execution Server via command-line:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the Execution Server machine, run command-line as administrator."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"/root/ExecutionServer"})," folder (or ",(0,r.jsx)(n.code,{children:"opt/ExecutionServer"})," for Linux machines on Azure or AWS)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command with your details:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"mono QsExecutionServerConsoleConfig.exe /s:localhost /u:admin /p:admin /esn:my_es /ansible /a:\"{'Execution Server Selector':'CloudShell domain'}\" ***\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/s"}),(0,r.jsx)(n.td,{children:"Quali Server IP address or hostname"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/u"}),(0,r.jsx)(n.td,{children:"CloudShell admin to connect to CloudShell server"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/p"}),(0,r.jsx)(n.td,{children:"CloudShell admin's password"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/esn"}),(0,r.jsx)(n.td,{children:"Execution Server name to register with CloudShell"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/ansible"}),(0,r.jsx)(n.td,{children:"Parameter indicating to Ansible configuration management that this Execution Server supports Ansible operations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/a"}),(0,r.jsxs)(n.td,{children:["Additional attributes to set on the Execution Server. For example, passing to that option the value ",(0,r.jsx)(n.code,{children:"{'attributeName1':'attributeValue1', 'attributeName2':'attribauteValue2'}"})," adds two attributes and their values.",(0,r.jsx)("br",{}),"Note that the attributes must have the ",(0,r.jsx)(n.strong,{children:"Execution Server Selector"})," rule."]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the Execution Server VM does not have an internet connection, make sure the ",(0,r.jsx)(n.code,{children:"OfflinePackageRepository"})," zip file is extracted to the local PyPi Server repository. For details, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Quali Server must be running when configuring the Execution Server."}),"\n",(0,r.jsxs)(n.li,{children:["Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: ",(0,r.jsx)(n.code,{children:'"admin1234!"'})]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"perform-additional-configurations-on-the-execution-server-machine",children:"Perform additional configurations on the Execution Server machine"}),"\n",(0,r.jsx)(n.p,{children:"To run Ansible configuration management on this Execution Server, several additional configurations are needed."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To configure the Execution Server to run Ansible:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install Ansible as globally available command line utility."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"python3 -m pip install ansible\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"To install in an offline environment:",type:"note",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the offline dependencies from ",(0,r.jsx)(n.a,{href:"https://help.quali.com/help%20versions/attachments/PY39-linux-ansible-reqs-2.14.0.zip",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Place them in the Quali Server offline repository:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Pypi Server Repository"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"python3 -m pip install ansible --index-url=http://<QUALI_SERVER_IP>:8036/simple --trusted-host <QUALI_SERVER_IP>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Replace <QUALI_SERVER_IP> with the IP of the machine containing the offline packages."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"index-url"})," tells pip to download from local repo rather than public pypi, and ",(0,r.jsx)(n.strong,{children:"trusted-host"})," says you can trust this local server"]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify install by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"ansible --version\n"})}),"\n",(0,r.jsx)(n.p,{children:"![](../../Images/Linux2/ansible status.png)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install ",(0,r.jsx)(n.strong,{children:"pywinrm"})," into same python environment as global Ansible. This library is required by Ansible to connect to Windows Apps."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"python3 -m pip install pywinrm\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsx)(n.strong,{children:"CentOS sshpass"})," module to allow password authentication to Apps."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"yum install sshpass\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next",children:"Next..."}),"\n",(0,r.jsxs)(n.p,{children:["Make sure to ",(0,r.jsx)(n.a,{href:"/cloudshell-help/devguide/enable-winrm-on-win-vm-for-cfg-mng",children:"Enable WinRM on Windows VMs to Support Configuration Management"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},36072:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/AnsibleAttributesPane-3fc84badf48b3c4edb36784760877809.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var r=i(11504);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);