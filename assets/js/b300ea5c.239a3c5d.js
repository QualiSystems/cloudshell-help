"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[78576],{97504:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=n(17624),i=n(4552);const l={sidebar_position:5},t="Customizing App Deployment Types",d={id:"admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types",title:"Customizing App Deployment Types",description:"As a CloudShell system administrator, you can publish and configure the settings of certain App creation and orchestration processes.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell",slug:"/admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Add a Kubernetes App Template",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template"},next:{title:"CloudShell Administration",permalink:"/cloudshell-help/admin/"}},o={},a=[{value:"Publishing App parameters",id:"publishing-app-parameters",level:2},{value:"Publishing App parameters for 1<sup>st</sup> Gen shells",id:"publishing-app-parameters-for-1st-gen-shells",level:3},{value:"Publishing App parameters for 2<sup>nd</sup> Gen shells",id:"publishing-app-parameters-for-2nd-gen-shells",level:3},{value:"Modifying App parameter defaults",id:"modifying-app-parameter-defaults",level:2},{value:"Modifying App parameter defaults for 1<sup>st</sup> Gen shells",id:"modifying-app-parameter-defaults-for-1st-gen-shells",level:3},{value:"Modifying App parameter defaults for 2<sup>nd</sup> Gen shells",id:"modifying-app-parameter-defaults-for-2nd-gen-shells",level:3},{value:"App parameters",id:"app-parameters",level:2},{value:"App creation parameters",id:"app-creation-parameters",level:3},{value:"vCenter parameters:",id:"vcenter-parameters",level:4},{value:"AWS EC2 parameters:",id:"aws-ec2-parameters",level:4},{value:"Azure parameters:",id:"azure-parameters",level:4},{value:"OpenStack parameters:",id:"openstack-parameters",level:4},{value:"App orchestration parameters",id:"app-orchestration-parameters",level:3},{value:"General parameters (used by all deployment types):",id:"general-parameters-used-by-all-deployment-types",level:4},{value:"vCenter parameters:",id:"vcenter-parameters-1",level:4},{value:"AWS EC2 parameters:",id:"aws-ec2-parameters-1",level:4},{value:"Azure parameters:",id:"azure-parameters-1",level:4},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"customizing-app-deployment-types",children:"Customizing App Deployment Types"}),"\n",(0,r.jsx)(s.p,{children:"As a CloudShell system administrator, you can publish and configure the settings of certain App creation and orchestration processes."}),"\n",(0,r.jsx)(s.h2,{id:"publishing-app-parameters",children:"Publishing App parameters"}),"\n",(0,r.jsxs)(s.p,{children:["This section explains how to set App creation and orchestration parameters as user inputs, so that when creating an App in the ",(0,r.jsx)(s.strong,{children:"Manage"})," dashboard, the App designer will be able to set the inputs' values."]}),"\n",(0,r.jsxs)(s.h3,{id:"publishing-app-parameters-for-1st-gen-shells",children:["Publishing App parameters for 1",(0,r.jsx)("sup",{children:"st"})," Gen shells"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["To publish App creation and/or orchestration parameters in 1",(0,r.jsx)("sup",{children:"st"})," Gen shells:"]})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["As system administrator, log into ",(0,r.jsx)(s.strong,{children:"Resource Manager Client"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,r.jsx)(s.strong,{children:"Resource Families"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Resource Families"})," explorer is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Click the ",(0,r.jsx)(s.strong,{children:"Deployment Options"})," service family."]}),"\n",(0,r.jsxs)(s.p,{children:["The family's ",(0,r.jsx)(s.strong,{children:"Parameters"})," pane is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Click the model of the required deployment type:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"AWS EC2 Instance"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Azure VM From Custom Image"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Azure VM From Marketplace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter Clone VM From VM"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter Deploy VM From Linked Clone"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter VM From Image"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter VM From Template"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The model's ",(0,r.jsx)(s.strong,{children:"Parameters"})," page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["From the ",(0,r.jsx)(s.strong,{children:"Attributes"})," tab, select one of the following attributes and click ",(0,r.jsx)(s.strong,{children:"Edit Rules"}),". For parameter descriptions, see ",(0,r.jsx)(s.a,{href:"#app-parameters",children:"App parameters"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Attribute Rules"})," dialog box is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Select the ",(0,r.jsx)(s.strong,{children:"User Input"})," check box."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Click ",(0,r.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Repeat to publish additional attributes."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"publishing-app-parameters-for-2nd-gen-shells",children:["Publishing App parameters for 2",(0,r.jsx)("sup",{children:"nd"})," Gen shells"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["To publish App creation and/or orchestration parameters in 1",(0,r.jsx)("sup",{children:"st"})," Gen shells:"]})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Extend the shell, as explained in ",(0,r.jsx)(s.a,{href:"/cloudshell-help/devguide/reference/shellfoundry#customizing-a-2nd-gen-shell",children:"Customizing a 2nd Gen Shell"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Extract the shell's project folder to your local computer."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Open the project folder in your preferred IDE."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["From the shell's ",(0,r.jsx)(s.code,{children:"deployments"})," folder, open the ",(0,r.jsx)(s.code,{children:"deployment-path.yaml"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"This file lists the attributes available for each deployment type."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(89572).c+"",width:"728",height:"311"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["To publish an attribute, make sure the attribute has the ",(0,r.jsx)(s.strong,{children:"user_input"})," tag."]}),"\n",(0,r.jsx)(s.p,{children:"For example:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(43060).c+"",width:"723",height:"122"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Save the file and import/update the shell into CloudShell."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"modifying-app-parameter-defaults",children:"Modifying App parameter defaults"}),"\n",(0,r.jsxs)(s.p,{children:["This section explains how to modify the default settings of certain App creation and orchestration parameters that are used when creating Apps in the ",(0,r.jsx)(s.strong,{children:"Manage"})," dashboard."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["These parameters are used by CloudShell's ",(0,r.jsx)(s.strong,{children:"Setup"})," and ",(0,r.jsx)(s.strong,{children:"Teardown"})," scripts. For additional information, see ",(0,r.jsx)(s.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/configure-orchestration",children:"Configure Blueprint Orchestration"}),"."]})}),"\n",(0,r.jsxs)(s.h3,{id:"modifying-app-parameter-defaults-for-1st-gen-shells",children:["Modifying App parameter defaults for 1",(0,r.jsx)("sup",{children:"st"})," Gen shells"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["To modify App parameter defaults (1",(0,r.jsx)("sup",{children:"st"})," Gen):"]})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"As system administrator, log into Resource Manager Client."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,r.jsx)(s.strong,{children:"Resource Families"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Resource Families"})," explorer is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Click the ",(0,r.jsx)(s.strong,{children:"Deployment Options"})," service family."]}),"\n",(0,r.jsxs)(s.p,{children:["The family's ",(0,r.jsx)(s.strong,{children:"Parameters"})," pane is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Click the model of the required deployment type:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"AWS EC2 Instance"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Azure VM From Custom Image"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Azure VM From Marketplace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter Clone VM From VM"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter Deploy VM From Linked Clone"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter VM From Image"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"vCenter VM From Template"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The model's ",(0,r.jsx)(s.strong,{children:"Parameters"})," page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["From the ",(0,r.jsx)(s.strong,{children:"Attributes"})," tab, select one of the following attributes and click ",(0,r.jsx)(s.strong,{children:"Edit Rules"}),". For parameter descriptions, see ",(0,r.jsx)(s.a,{href:"#app-parameters",children:"App parameters"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Attribute Rules"})," dialog box is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Enter the ",(0,r.jsx)(s.strong,{children:"Default Value"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Select the ",(0,r.jsx)(s.strong,{children:"User Input"})," check box."]}),"\n",(0,r.jsxs)(s.p,{children:["To prevent App designers from seeing this input, make sure the ",(0,r.jsx)(s.strong,{children:"User Input"})," check box is cleared."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Click ",(0,r.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Repeat to edit additional attributes."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"modifying-app-parameter-defaults-for-2nd-gen-shells",children:["Modifying App parameter defaults for 2",(0,r.jsx)("sup",{children:"nd"})," Gen shells"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["To modify App parameter defaults (2",(0,r.jsx)("sup",{children:"nd"})," Gen):"]})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Extend the shell, as explained in ",(0,r.jsx)(s.a,{href:"/cloudshell-help/devguide/reference/shellfoundry#customizing-a-2nd-gen-shell",children:"Customizing a 2nd Gen Shell"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Extract the shell's project folder to your local computer."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Open the project folder in your preferred IDE."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the shell's ",(0,r.jsx)(s.code,{children:"deployments"})," folder, open ",(0,r.jsx)(s.code,{children:"deployment-path.yaml"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"The deployment type attributes are displayed"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Set a ",(0,r.jsx)(s.strong,{children:"default"})," value for the desired attributes."]}),"\n",(0,r.jsx)(s.p,{children:"For example:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(72676).c+"",width:"731",height:"141"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Save the file and import/update the shell in CloudShell."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"app-parameters",children:"App parameters"}),"\n",(0,r.jsx)(s.h3,{id:"app-creation-parameters",children:"App creation parameters"}),"\n",(0,r.jsx)(s.h4,{id:"vcenter-parameters",children:"vCenter parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"IP Regex"}),": Regular expressions that define which IP address ranges to allocate for the deployed VM's primary IP address."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Promiscuous Mode"}),": If enabled, the port groups on the virtual switch will be configured to allow all incoming traffic."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Refresh IP\xa0Timeout"}),": Timeout for waiting while obtaining IP address (in seconds)"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"VM Cluster"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"VM Location"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"VM Resource Pool"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"VM Storage"})}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"aws-ec2-parameters",children:"AWS EC2 parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Root Volume Name"}),': The available device names for the volume. Depending on the block device driver of the selected AMI\'s kernel, the device may be attached with a different name than what you specify. If left empty, the default defined in the AMI is used. For example: "/dev/xvda".']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Storage IOPS"}),': The default number of I/O operations per second that the root volume can support. For example "240". This parameter is used only for storage of type io1, in which you can provision up to 30 IOPS per GiB. If set to zero, the default defined in the image is used.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Storage Size"}),': The root volume size. For example "30". The value must be greater or equal to the size of the root snapshot used. If set to zero, the default defined in the image is used.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Storage Type"}),": The type of the storage volume. In AWS, there are several EBS Volume types that can be used: ",(0,r.jsx)(s.strong,{children:"gp2"})," and ",(0,r.jsx)(s.strong,{children:"io1"})," for SSD, ",(0,r.jsx)(s.strong,{children:"st1"})," and ",(0,r.jsx)(s.strong,{children:"sc1"})," for HDD or the standard type, which is the old generation EBS volume type. If ",(0,r.jsx)(s.strong,{children:"Auto"})," is selected, the storage type defined in the image is used."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"azure-parameters",children:"Azure parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Image Version"}),": The version of the VM image. For example: 16.04.201606270"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Extension Script Timeout"}),": Timeout, in minutes, for the execution of extension scripts during App deployment"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"openstack-parameters",children:"OpenStack parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Floating IP Subnet Id"}),": UUID of the external network to use for floating IPs"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"app-orchestration-parameters",children:"App orchestration parameters"}),"\n",(0,r.jsx)(s.h4,{id:"general-parameters-used-by-all-deployment-types",children:"General parameters (used by all deployment types):"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Autoload"}),": Determines if the Autoload process runs for Apps deployed manually or during the setup of the sandbox. Default is ",(0,r.jsx)(s.strong,{children:"True"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Wait For IP"}),": Determines if the App deployment process waits for the VM to get an IP. Default is ",(0,r.jsx)(s.strong,{children:"True"}),".","\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["The default wait time is 10 minutes. On vCenter App deployment paths, this can be changed by specifying the number of seconds to wait in the ",(0,r.jsx)(s.strong,{children:"Refresh IP Timeout"})," attribute."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"vcenter-parameters-1",children:"vCenter parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Auto Power On"}),": Enables the automatic power on of an app, following its deployment during sandbox Setup. Default is ",(0,r.jsx)(s.strong,{children:"True"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Auto Power Off"}),": Determines if the App's VM powers off automatically during the sandbox teardown. Default is ",(0,r.jsx)(s.strong,{children:"True"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Auto Delete"}),": Determines if the App's VM is deleted automatically during the sandbox teardown. Default is ",(0,r.jsx)(s.strong,{children:"True"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"aws-ec2-parameters-1",children:"AWS EC2 parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Wait for Credentials"}),": Enables the retrieval of credentials from a Windows machine. Note that if this parameter is enabled and the credentials are not retrieved within 15 minutes, the deployment will fail. Default is ",(0,r.jsx)(s.strong,{children:"True"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Wait for Status Check"}),": If enabled, the App's deployment will end successfully only after the instance status check has passed. The status check includes network connectivity, physical host status, system status and more. Default is ",(0,r.jsx)(s.strong,{children:"False"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"azure-parameters-1",children:"Azure parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Autogenerated Name"}),": ",(0,r.jsx)(s.strong,{children:"True"})," enables CloudShell to autogenerate the deployed App's name. Set to ",(0,r.jsx)(s.strong,{children:"False"})," to use the App's name instead. (Default is ",(0,r.jsx)(s.strong,{children:"True"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource",children:"Add an AWS EC2 Cloud Provider Resource"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource",children:"Add an Azure Cloud Provider Resource"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource",children:"Add VMware vCenter Cloud Provider Resource"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"../../devguide/develop-custom-cloud-provider-shells/",children:"Developing Custom Cloud Provider Shells"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},72676:(e,s,n)=>{n.d(s,{c:()=>r});const r=n.p+"assets/images/DeploymentTypeAttributeDefaults-4aa0bdf083f593d30dc8967874641729.png"},43060:(e,s,n)=>{n.d(s,{c:()=>r});const r=n.p+"assets/images/DeploymentTypeAttributePublishing-e34b192663a074a5116fca5fc192540c.png"},89572:(e,s,n)=>{n.d(s,{c:()=>r});const r=n.p+"assets/images/DeploymentTypeAttributes-4cec2b2d9c5a20a43e8501075770fe47.png"},4552:(e,s,n)=>{n.d(s,{I:()=>d,M:()=>t});var r=n(11504);const i={},l=r.createContext(i);function t(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);