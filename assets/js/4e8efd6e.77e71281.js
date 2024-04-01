"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[95960],{69960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(17624),s=t(4552);const o={sidebar_position:3,hide_table_of_contents:!0},r="App Configuraion Management Settings",a={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/configuration-management",title:"App Configuraion Management Settings",description:"When adding or editing an App, click Configuration Management and configure the application to be installed on the VM",source:"@site/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/configuration-management.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/configuration-management",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/configuration-management",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/configuration-management.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"vCenter VM From Template",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-template-dp-attributes"},next:{title:"Setting up the App Resource",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/app-resource"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"app-configuraion-management-settings",children:"App Configuraion Management Settings"}),"\n",(0,i.jsxs)(n.p,{children:["When adding or editing an App, click ",(0,i.jsx)(n.strong,{children:"Configuration Management"})," and configure the application to be installed on the VM"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(1872).c+"",width:"803",height:"573"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To learn how to develop custom scripts and Ansible playbooks, including examples, and set up support for the desired configuration management tool, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Developing-Config-Management.htm",children:"Developing Configuration Management Scripts for Apps"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To run configuration management on an Azure App, make sure the App's VM size is Basic_A2 or larger."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For configuration management operations, CloudShell uses an available Execution Server (for Ansible, it's a Linux Execution Server that has the ",(0,i.jsx)(n.strong,{children:"Supports Ansible"})," flag)."]}),"\n",(0,i.jsxs)(n.p,{children:["If the cloud provider resource has an ",(0,i.jsx)(n.strong,{children:"Execution Server Selector"})," configured, it will use that selector. If the selector is empty, CloudShell will use the selector defined in the appropriate ",(0,i.jsx)(n.strong,{children:"Resource Manager Client >Configuration Services"})," model (",(0,i.jsx)(n.strong,{children:"Ansible Configuration"})," or ",(0,i.jsx)(n.strong,{children:"Custom Script Configuration"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Execution Server selectors specified on the deployed App shell/resource are not used to execute configuration management operations."}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Define the script or playbook to install."}),"\n"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Attribute"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Select Tool"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Select the application's installation and configuration tool."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"None"}),": Do not use any Configuration Management option. Use this option if, for example, the image or template already contains the application to install."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Script"}),": Select the custom script to run (PowerShell, bash or sh)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ansible"}),": (Intended for customers who are already using Ansible) Select the Ansible playbook to run."]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The playbook runs once during the Setup phase for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs. This is done both to improve performance and support cross-server logic where multiple applications need to be installed and configured in a certain way."})}),(0,i.jsx)(n.p,{children:"Depending on the selection, additional options may become available."})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Connection Method"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"The method to use to connect to the VM."}),(0,i.jsx)(n.p,{children:"Select:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SSH"})," if the VM has a Linux OS"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Windows Remote Management"})," if the VM has a Windows OS"]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To run configuration management on a Windows VM, the VM must have WinRM enabled. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Cnfg-WinRM-for-CM.htm",children:"Enable WinRM on Windows VMs to Support Configuration Management"}),"."]})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Playbook / Script Location"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Details of the Ansible playbook or custom script."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"URL: Raw URL of the Ansible playbook or ZIP file, or custom script on the online repository (GitHub, GitLab and BitBucket are supported). URL must be accessible to the Execution Servers."}),"\n"]}),(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"The URL can accept parameters defined on the App, enabling you to test new versions of scripts without affecting consumer-ready versions. For example, you can have an App everyone is using, but if you want to test a version you're developing, simply change the value of the URL parameter in the test blueprint."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To use parameters, specify the parameter name in curly brackets (for example: ",(0,i.jsx)(n.code,{children:"{branch}"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["If the App has this parameter, CloudShell will replace the ",(0,i.jsx)(n.code,{children:"{branch}"})," with its value during execution."]}),"\n",(0,i.jsxs)(n.li,{children:["If the parameter is missing, CloudShell will replace ",(0,i.jsx)(n.code,{children:"{branch}"})," with emptystring."]}),"\n",(0,i.jsx)(n.li,{children:"If you are using a global input, customers would be well advised to set a default value on the global input"}),"\n"]})]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For GitHub, specify the raw URL. For example:"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"https://raw.githubusercontent.com/.../site.yml\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For GitLab, specify the API endpoint in the format:"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"https://gitlab.com/api/v4/projects/{Project ID}/repository/files/testsharding%2Eyml/raw?ref=master\n"})}),(0,i.jsx)(n.p,{children:"Where:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Each special character that the file contains has to be encoded. In the example above - \u201c%2E\u201d is an encoded point (\u201c.\u201d)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The ref value is the branch name (master for this example)"}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For BitBucket Data Center (on premise), use the following URL format:"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"http://{datacenter server IP}/rest/api/1.0/projects/{projectKey}/repos/{repository name}/raw/testsharding.yml\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For BitBucket Cloud, use one of the following:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For source code files, specify the API endpoint:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/src/{GUID- the Commit hash string}/testsharding.yml\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'For download files (files residing in the repository\'s "Downloads" folder), specify this endpoint:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/downloads/site.yml\n"})}),"\n"]}),"\n"]}),(0,i.jsx)(n.admonition,{title:"Important",type:"note",children:(0,i.jsxs)(n.p,{children:["If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open Resource Manager Client>Resource Families>Configuration Services (Ansible Configuration or Custom Script Configuration) and set the ",(0,i.jsx)(n.strong,{children:"Verify Certificate"})," attribute to ",(0,i.jsx)(n.strong,{children:"False"}),"."]})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"User/Password: (For private repositories) Access credentials or token to the script/playbook's online repository."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Token: (For private repositories) Access token to the script/playbook's online repository."}),"\n",(0,i.jsx)(n.p,{children:"For GitHub and GitLab, specify the API token. For BitBucket Cloud, set the repo's \"App Password\" in the App template's Password field. For BitBucket Data Center, specify the personal access token."}),"\n"]}),"\n"]}),(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For Custom Script configurations: In SSH mode, only bash and sh scripts are allowed. In WinRM mode, only PowerShell scripts are allowed. WinRM over HTTPS only applies to custom scripts at this time. If WinRM is configured to run over HTTPS, the execution server will first try to run the custom script over HTTPS and then fall back to HTTP if HTTPS is unsuccessful. To prevent the fallback, set the winrm_transport parameter to ssl."}),"\n",(0,i.jsxs)(n.li,{children:["For Ansible configurations: The Ansible playbook must be a YML or YAML file. To specify multiple playbooks or a hierarchy of an Ansible project, you can specify multiple Ansible playbooks or a ZIP package. For example: ",(0,i.jsx)(n.code,{children:"https://raw.githubusercontent.com/QualiSystemsLab/private-repo-zip-download/master/README.zip"})]}),"\n",(0,i.jsx)(n.li,{children:"If a ZIP containing 2 or more playbooks is specified, CloudShell will use the playbook file titled site.yml or site.yaml. If the file is missing, the App's deployment will fail."}),"\n"]})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Inventory Groups"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"(For Ansible) Specify the host groups for the application to be installed, separated by semicolons (;). The newly deployed VM will be associated to these groups, thus allowing plays that target these groups to run on the VM."}),(0,i.jsxs)(n.p,{children:["For example: ",(0,i.jsx)(n.code,{children:"Servers/AppServers;Servers/DBServers"})]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Parameters"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Parameters to be passed to the Ansible playbook or custom script. Specify the parameters and their default values."}),(0,i.jsx)(n.p,{children:"In the blueprint or sandbox diagram, privileged users can also set the parameter to receive the value that is specified for a global input when reserving a sandbox containing the App. This is done by selecting the global input when editing the App in the blueprint or sandbox diagram. For example, a global input that specifies the build number of a product to be tested or which components of a product to install."}),(0,i.jsxs)(n.p,{children:["(For Ansible) To customize the port to be used to communicate with the VM, add the ",(0,i.jsx)(n.code,{children:"Ansible_port"})," parameter. Default: ",(0,i.jsx)(n.code,{children:"SSH"})," / ",(0,i.jsx)(n.code,{children:"Port: 22"})," / ",(0,i.jsx)(n.code,{children:"WinRM: 5985"}),"."]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Additional Arguments"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["(For Ansible) Define arguments to be passed to the execution of the playbook (",(0,i.jsx)(n.code,{children:"Ansible-playbook"})," command). For example, ",(0,i.jsx)(n.code,{children:"-v"})," will set verbose mode on while ",(0,i.jsx)(n.code,{children:"-f"})," will set the maximum number of VMs to be handled in parallel. Multiple arguments can be given, separated by spaces. For additional information on possible arguments, see the official Ansible documentation."]}),(0,i.jsx)(n.p,{children:"The arguments must be specified in Resource Manager Client > Configuration Services family > Ansible Configuration model > Ansible Additional Arguments attribute."}),(0,i.jsx)(n.p,{children:"Note: The arguments are defined globally for all Apps using Ansible."}),(0,i.jsxs)(n.p,{children:["Important: To configure Ansible to connect to certified hosts only (Linux VMs with a valid 'known_hosts' key), include the following additional arguments: ",(0,i.jsx)(n.code,{children:"--ssh-extra-args='-o StrictHostKeyChecking=yes'"})]})]})]})]})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To enable the end-user to rerun the App's configuration management on the deployed App in the sandbox, select ",(0,i.jsx)(n.strong,{children:"Allow rerunning configuration management for resources deployed from the App"}),". Once the App's deployment completes, a Rerun Configuration Management command is included in the deployed App's Application Commands pane. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Run-Cmnds.htm",children:"Run App Commands"}),". This is useful for rolling back the App's VM to its original state."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To enable blueprint and sandbox owners to modify the App's Configuration Management details, select Allow blueprint/sandbox owners to modify the App's Configuration Management. The following details can be modified: playbook/script, authentication details, inventory groups, and parameters. Note that the modifications only apply to the blueprint or sandbox of the instance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally click the Add New Script/Playbook link at the bottom right to add additional custom scripts/Ansible playbooks to the App. The scripts will run in their display order, from top to bottom. You can drag scripts up or down to rearrange."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To change the script's alias, click the script's name and change as appropriate."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(58732).c+"",width:"804",height:"315"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1872:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ConfigurationManagement-c062f8444207c45efc5d0faeb418cc99.png"},58732:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/RenameConfigManageScript-d4a736c75b198050f3aa8289b15522a4.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);