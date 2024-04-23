"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[1132],{80492:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(17624),i=s(4552);const r={sidebar_position:4},o="Add a Kubernetes App Template",l={id:"admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template",title:"Add a Kubernetes App Template",description:"The App template defines the settings and configurations of the VM to be deployed in the sandbox as well as the application(s) to be installed on that VM.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/kubernetes-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Add a Kubernetes Cloud Provider Resource",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-cloud-provider-resource"},next:{title:"Customizing App Deployment Types",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types"}},a={},d=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"add-a-kubernetes-app-template",children:"Add a Kubernetes App Template"}),"\n",(0,t.jsx)(n.p,{children:"The App template defines the settings and configurations of the VM to be deployed in the sandbox as well as the application(s) to be installed on that VM."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"CloudShell does not manage Kubernetes App connectivity at this time. This can be done using the external and internal ports defined in the App."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To add a new Kubernetes App template:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click\xa0",(0,t.jsx)(n.strong,{children:"+ Add"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Create New App"})," wizard is displayed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(98440).c+"",width:"802",height:"489"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.strong,{children:"Select Deployment Type"})," pane, select ",(0,t.jsx)(n.strong,{children:"Kubernetes Service"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter a ",(0,t.jsx)(n.strong,{children:"Name"})," for the App template."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The App template's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] ["})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The App template is created and the ",(0,t.jsx)(n.strong,{children:"App"})," wizard's ",(0,t.jsx)(n.strong,{children:"General"})," page is displayed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"General"})," page, define the App template's display settings and category."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Field"}),(0,t.jsx)("th",{children:"Required"}),(0,t.jsx)("th",{children:"Description"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Name"}),(0,t.jsx)("td",{children:"Required"}),(0,t.jsx)("td",{children:"App name that is displayed in the catalog."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Description"}),(0,t.jsx)("td",{children:"Optional"}),(0,t.jsx)("td",{children:"Description of the App."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Icon"}),(0,t.jsx)("td",{children:"Optional"}),(0,t.jsx)("td",{children:"Add an image to the catalog definition. The recommended size for the image is 190x120 pixels (image size is limited to 400x400 pixels or 200 KB)."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Categories"}),(0,t.jsx)("td",{children:"Optional"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(n.p,{children:["Service categories are a method to classify Apps. The Apps are displayed in the ",(0,t.jsx)(n.strong,{children:"Add App / Service"})," side pane in the blueprint and sandbox diagram, arranged in categories. Only users who are permitted to view the category can access the App. Apps without a category are not displayed."]}),(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.strong,{children:"Applications"})," category is selected."]}),(0,t.jsx)(n.p,{children:"Select a category from the dropdown list. You can select additional categories. Examples of categories are: applications, networking and VLAN."}),(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The category must be associated with the domain in which the required cloud provider resides. For information about domain categories, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Blprnt-Ctlg-Ctgs.htm#Managing2",children:"Managing domain categories"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"It is recommended to use up to a 2-level hierarchy when organizing the Add App / Service catalog (i.e. root and sub-category)."}),"\n",(0,t.jsx)(n.li,{children:"In the Add App / Service side pane, Apps are displayed in the root category only. This includes services associated to sub-categories."}),"\n"]})})]})]})]})]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the left pane, click ",(0,t.jsx)(n.strong,{children:"Deployment Paths"})," and configure the App template's deployment path."]}),"\n",(0,t.jsx)(n.p,{children:"A deployment path defines (1) the VM\u2019s settings such as storage size, CPU and image file, and (2) the CloudShell cloud provider resource that enables CloudShell to access the cloud provider and deploy the VM on it."}),"\n",(0,t.jsxs)(n.p,{children:["Note the deployment path's name (highlighted in the image below). The path's name is dynamic and consists of the selected ",(0,t.jsx)(n.strong,{children:"Cloud Provider"})," resource and ",(0,t.jsx)(n.strong,{children:"Deployment type"}),". You can change the name of the path by clicking the field."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(84292).c+"",width:"802",height:"571"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.strong,{children:"Deployment"})," drop down list, select the deployment type."]}),"\n",(0,t.jsx)(n.p,{children:"The selected deployment type's attributes are displayed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fill in the details."}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"Kubernetes Service"})," attributes:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cloud Provider"}),(0,t.jsx)(n.td,{children:"Name of the Kubernetes cloud provider resource to be used"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Image Name"}),(0,t.jsxs)(n.td,{children:['The name of the container image to use for creating the container. For example, "nginx".',(0,t.jsx)("br",{}),"Image must exist in the image repository used by the cluster."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Image Tag"}),(0,t.jsx)(n.td,{children:'(Optional) The container image tag (usually represents the image version). For example, "latest".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Internal Ports"}),(0,t.jsx)(n.td,{children:'(Optional) The ports required by the application for internal communications. For example, "27,332,13009"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"External Ports"}),(0,t.jsx)(n.td,{children:"The ports required by the application for external communications (outside the cluster)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Replicas"}),(0,t.jsxs)(n.td,{children:['The number of container instances that will be deployed. Default is "1".',(0,t.jsx)("br",{}),"CloudShell waits 120 seconds for all replicas to be in READY state."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Start Commands"}),(0,t.jsx)(n.td,{children:"(Optional) Replace the default start command for executing the container."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Environment Variables"}),(0,t.jsx)(n.td,{children:"(Optional) Comma separated list of 'key=value' environment variables that will be defined in the container."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU Request"}),(0,t.jsx)(n.td,{children:"(Optional) The requested CPU for each container. Fractional requests are also allowed. For example '0.5'. Optional unless any resource request or limit is specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RAM Request"}),(0,t.jsx)(n.td,{children:"(Optional) The requested RAM for each container. Memory is measured in bytes. Memory is expressed as a plain integer or as a fixed-point integer using one of these suffixes - E, P, T, G, M, K. You can also use the power-of-two equivalents - Ei, Pi, Ti, Gi, Mi, Ki. For example, '256M'."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU Limit"}),(0,t.jsx)(n.td,{children:"(Optional) The CPU limit for each container. Fractional limits are also allowed. For example '0.5'."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RAM Limit"}),(0,t.jsx)(n.td,{children:"(Optional) The RAM limit for each container. Memory is measured in bytes. Memory is expressed as a plain integer or as a fixed-point integer using one of these suffixes - E, P, T, G, M, K. You can also use the power-of-two equivalents - Ei, Pi, Ti, Gi, Mi, Ki. For example, '256M'."})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To add additional deployment paths to the App template, click the ",(0,t.jsx)(n.strong,{children:"Add New Deployment Path"})," link at the bottom of the wizard and fill in the required information."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the left pane, click ",(0,t.jsx)(n.strong,{children:"Configuration Management"})," and configure the application to be installed on the VM."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1872).c+"",width:"803",height:"573"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To learn how to develop custom scripts and Ansible playbooks, including examples, and set up support for the desired configuration management tool, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Developing-Config-Management.htm",children:"Developing Configuration Management Scripts for Apps"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To run configuration management on an Azure App, make sure the App's VM size is Basic_A2 or larger."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For configuration management operations, CloudShell uses an available Execution Server (for Ansible, it's a Linux Execution Server that has the ",(0,t.jsx)(n.strong,{children:"Supports Ansible"})," flag)."]}),"\n",(0,t.jsxs)(n.p,{children:["If the cloud provider resource has an ",(0,t.jsx)(n.strong,{children:"Execution Server Selector"})," configured, it will use that selector. If the selector is empty, CloudShell will use the selector defined in the appropriate ",(0,t.jsx)(n.strong,{children:"Resource Manager Client > Configuration Services"})," model (",(0,t.jsx)(n.strong,{children:"Ansible Configuration"})," or ",(0,t.jsx)(n.strong,{children:"Custom Script Configuration"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execution Server selectors specified on the deployed App shell/resource are not used to execute configuration management operations."}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Define the script or playbook to install."}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Attribute"}),(0,t.jsx)("th",{children:"Description"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Select Tool"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Select the application's installation and configuration tool."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"None"}),": Do not use any Configuration Management option. Use this option if, for example, the image or template already contains the application to install."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Script"}),": Select the custom script to run (PowerShell, bash or sh)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ansible"}),": (Intended for customers who are already using Ansible) Select the Ansible playbook to run.","\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The playbook runs once during the ",(0,t.jsx)(n.strong,{children:"Setup"})," phase for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs. This is done both to improve performance and support cross-server logic where multiple applications need to be installed and configured in a certain way."]})}),"\n","Note that the playbook runs once for all of the sandbox's Apps that use that playbook, after CloudShell has finished deploying their VMs."]}),"\n"]}),(0,t.jsx)(n.p,{children:"Depending on the selection, additional options may become available."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Connection Method"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"The method to use to connect to the VM."}),(0,t.jsx)(n.p,{children:"Select:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SSH"})," if the VM has a Linux OS"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows Remote Management"})," if the VM has a Windows OS"]}),"\n"]}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["To run configuration management on a Windows VM, the VM must have WinRM enabled. For details, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Cnfg-WinRM-for-CM.htm",children:"Enable WinRM on Windows VMs to Support Configuration Management"}),"."]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Playbook / Script Location"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Details of the Ansible playbook or custom script."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": Raw URL of the Ansible playbook or ZIP file, or custom script on the online repository (GitHub, GitLab and BitBucket are supported). URL must be accessible to the Execution Servers."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"The URL can accept parameters defined on the App, enabling you to test new versions of scripts without affecting consumer-ready versions. For example, you can have an App everyone is using, but if you want to test a version you're developing, simply change the value of the URL parameter in the test blueprint."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To use parameters, specify the parameter name in curly brackets (for example: ",(0,t.jsx)(n.strong,{children:"{branch}"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["If the App has this parameter, CloudShell will replace the ",(0,t.jsx)(n.strong,{children:"{branch}"})," with its value during execution."]}),"\n",(0,t.jsxs)(n.li,{children:["If the parameter is missing, CloudShell will replace ",(0,t.jsx)(n.strong,{children:"{branch}"})," with emptystring."]}),"\n",(0,t.jsx)(n.li,{children:"If you are using a global input, customers would be well advised to set a default value on the global input"}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For GitHub, specify the raw URL. For example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"https://raw.githubusercontent.com/.../site.yml\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For GitLab, specify the API endpoint in the format:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"https://gitlab.com/api/v4/projects/{Project ID}/repository/files/testsharding%2Eyml/raw?ref=master\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Each special character that the file contains has to be encoded. In the example above - \u201c%2E\u201d is an encoded point (\u201c.\u201d)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The ref value is the branch name (master for this example)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For BitBucket Data Center (on premise), use the following URL format:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"http://{datacenter server IP}/rest/api/1.0/projects/{projectKey}/repos/{repository name}/raw/testsharding.yml\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For BitBucket Cloud, use one of the following:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For source code files, specify the API endpoint:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/src/{GUID- the Commit hash string}/testsharding.yml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'For download files (files residing in the repository\'s "Downloads" folder), specify this endpoint:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"https://api.bitbucket.org/2.0/repositories/{workspace}/{repository name}/downloads/site.yml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open Resource ",(0,t.jsx)(n.strong,{children:"Manager Client>Resource Families>Configuration Services"})," (",(0,t.jsx)(n.strong,{children:"Ansible Configuration"})," or ",(0,t.jsx)(n.strong,{children:"Custom Script Configuration"}),") and set the ",(0,t.jsx)(n.strong,{children:"Verify Certificate"})," attribute to ",(0,t.jsx)(n.strong,{children:"False"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"User/Password"}),": (For private repositories) Access credentials or token to the script/playbook's online repository."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Token"}),": (For private repositories) Access token to the script/playbook's online repository."]}),"\n",(0,t.jsxs)(n.p,{children:["For GitHub and GitLab, specify the API token. For BitBucket Cloud, set the repo's \"App Password\" in the App template's ",(0,t.jsx)(n.strong,{children:"Password"})," field. For BitBucket Data Center, specify the personal access token."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"For Custom Script configurations"}),": In SSH mode, only bash and sh scripts are allowed. In WinRM mode, only PowerShell scripts are allowed. WinRM over HTTPS only applies to custom scripts at this time. If WinRM is configured to run over HTTPS, the execution server will first try to run the custom script over HTTPS and then fall back to HTTP if HTTPS is unsuccessful. To prevent the fallback, set the ",(0,t.jsx)(n.strong,{children:"winrm_transport"})," parameter to ",(0,t.jsx)(n.strong,{children:"ssl"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"For Ansible configurations"}),": The Ansible playbook must be a YML or YAML file. To specify multiple playbooks or a hierarchy of an Ansible project, you can specify multiple Ansible playbooks or a ZIP package. For example: ",(0,t.jsx)(n.code,{children:"https://raw.githubusercontent.com/QualiSystemsLab/private-repo-zip-download/master/README.zip"})]}),"\n",(0,t.jsxs)(n.li,{children:["If a ZIP containing 2 or more playbooks is specified, CloudShell will use the playbook file titled ",(0,t.jsx)(n.code,{children:"site.yml"})," or ",(0,t.jsx)(n.code,{children:"site.yaml"}),". If the file is missing, the App's deployment will fail."]}),"\n"]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Inventory Groups"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"(For Ansible) Specify the host groups for the application to be installed, separated by semicolons (;). The newly deployed VM will be associated to these groups, thus allowing plays that target these groups to run on the VM."}),(0,t.jsxs)(n.p,{children:["For example: ",(0,t.jsx)(n.code,{children:"Servers/AppServers;Servers/DBServers"})]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Parameters"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Parameters to be passed to the Ansible playbook or custom script. Specify the parameters and their default values."}),(0,t.jsx)(n.p,{children:"In the blueprint or sandbox diagram, privileged users can also set the parameter to receive the value that is specified for a global input when reserving a sandbox containing the App. This is done by selecting the global input when editing the App in the blueprint or sandbox diagram. For example, a global input that specifies the build number of a product to be tested or which components of a product to install."}),(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["(For Ansible) To customize the port to be used to communicate with the VM, add the ",(0,t.jsx)(n.code,{children:"Ansible_port"})," parameter. Default: ",(0,t.jsx)(n.code,{children:"SSH"})," / ",(0,t.jsx)(n.code,{children:"Port: 22"})," / ",(0,t.jsx)(n.code,{children:"WinRM: 5985"}),"."]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Additional Arguments"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(n.p,{children:["(For Ansible) Define arguments to be passed to the execution of the playbook (",(0,t.jsx)(n.code,{children:"Ansible-playbook"})," command). For example, ",(0,t.jsx)(n.code,{children:"-v"})," will set verbose mode on while ",(0,t.jsx)(n.code,{children:"-f"})," will set the maximum number of VMs to be handled in parallel. Multiple arguments can be given, separated by spaces. For additional information on possible arguments, see the official Ansible documentation."]}),(0,t.jsxs)(n.p,{children:["The arguments must be specified in ",(0,t.jsx)(n.strong,{children:"Resource Manager Client > Configuration Services"})," family > ",(0,t.jsx)(n.strong,{children:"Ansible Configuration"})," model > ",(0,t.jsx)(n.strong,{children:"Ansible Additional Arguments"})," attribute."]}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The arguments are defined globally for all Apps using Ansible."})}),(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["To configure Ansible to connect to certified hosts only (Linux VMs with a valid 'known_hosts' key), include the following additional arguments: ",(0,t.jsx)(n.code,{children:"--ssh-extra-args='-o StrictHostKeyChecking=yes'"})]})})]})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To enable the end-user to rerun the App's configuration management on the deployed App in the sandbox, select ",(0,t.jsx)(n.strong,{children:"Allow rerunning configuration management for resources deployed from the App"}),". Once the App's deployment completes, a ",(0,t.jsx)(n.strong,{children:"Rerun Configuration Management"})," command is included in the deployed App's ",(0,t.jsx)(n.strong,{children:"Application Commands"})," pane. For details, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Run-Cmnds.htm",children:"Run App Commands"}),". This is useful for rolling back the App's VM to its original state."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To enable blueprint and sandbox owners to modify the App's Configuration Management details, select ",(0,t.jsx)(n.strong,{children:"Allow blueprint/sandbox owners to modify the App's Configuration Management"}),". The following details can be modified: playbook/script, authentication details, inventory groups, and parameters. Note that the modifications only apply to the blueprint or sandbox of the instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optionally click the ",(0,t.jsx)(n.strong,{children:"Add New Script/Playbook"})," link at the bottom right to add additional custom scripts/Ansible playbooks to the App. The scripts will run in their display order, from top to bottom. You can drag scripts up or down to rearrange."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To change the script's alias, click the script's name and change as appropriate."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(58732).c+"",width:"804",height:"315"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the left pane, click ",(0,t.jsx)(n.strong,{children:"App Resource"})," to optionally set the VM's operating system user credentials (for example, to connect to the VM via RDP or SSH). You can also change the deployed App's Shell."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(69284).c+"",width:"722",height:"390"})}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["To help sandbox end-users connect to the VM, it is recommended to include the User and Password in the blueprint's instructions. For additional information, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Instr.htm",children:"Add Instructions"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Attribute"}),(0,t.jsx)("th",{children:"Description"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Shell"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:'The Shell on which the App\'s VMs are based. When an App is deployed in a sandbox, it changes into a "deployed App resource", which is based on the selected Shell. By default, the "Generic App Model" Shell is used.'}),(0,t.jsxs)(n.p,{children:["Deployed Apps include a default set of commands such as Power On and Refresh IP, and the VM's ",(0,t.jsx)(n.strong,{children:"User"})," and ",(0,t.jsx)(n.strong,{children:"Password"})," attributes, as explained below."]}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Changing the Shell might cause additional fields to become visible and you may need to enter further information."})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"User"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(n.p,{children:["User defined in the App's image. The ",(0,t.jsx)(n.strong,{children:"User/Password"})," credentials are used by QualiX to create in-browser connections to the VM from within the sandbox."]}),(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For AWS instances,make sure to set the ",(0,t.jsx)(n.strong,{children:"User"})," of a user that already exists on the Amazon machine image. For custom images, the image owner should know the credentials, while community/marketplace images have the image's credentials listed in their documentation."]}),"\n",(0,t.jsxs)(n.li,{children:["Azure VM username and password restrictions apply. For details, see ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/faq",children:"Frequently asked question about Windows Virtual Machines"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For Azure Marketplace images, CloudShell will create a user on the VM based on the ",(0,t.jsx)(n.strong,{children:"User/Password"})," credentials you specify."]}),"\n",(0,t.jsxs)(n.li,{children:["For Azure Marketplace VMs, if the user is not set, CloudShell will set ",(0,t.jsx)(n.strong,{children:"adminuser"})," as the default user name."]}),"\n"]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Password"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"VM user's password."}),(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For AWS Marketplace images, leave the ",(0,t.jsx)(n.strong,{children:"Password"})," empty. The AWS shell generates a new key-pair for each sandbox, which QualiX will use to establish the in-browser connection."]}),"\n",(0,t.jsxs)(n.li,{children:["For Azure Marketplace images:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the password is not set, only the user name will be required. For Linux VMs, CloudShell will create an SSH key-pair to enable a secure connection."}),"\n",(0,t.jsx)(n.li,{children:"If the password is set, it will be displayed as asterisks (******) in the blueprint or sandbox."}),"\n"]}),"\n"]}),"\n"]})})]})]})]})]}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsxs)(n.li,{children:["Click\xa0",(0,t.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The new App template is displayed in the ",(0,t.jsx)(n.strong,{children:"Apps"})," page."]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},84292:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/KubernetesDeploymentType-e9178c2e7b5822d73b8875a5048ec101.png"},98440:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/KubernetesNewApp-941da1607028cfb26bd0a6991d798972.png"},69284:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/AppResource-914db8e4f76415cff1b1a50045caddb1.png"},1872:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/ConfigurationManagement-c062f8444207c45efc5d0faeb418cc99.png"},58732:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/RenameConfigManageScript-d4a736c75b198050f3aa8289b15522a4.png"},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>o});var t=s(11504);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);