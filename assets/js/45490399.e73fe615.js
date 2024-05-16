"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[74748],{79016:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(17624),t=s(4552);const i={sidebar_position:3,hide_table_of_contents:!0},o="Adding VMWare vCenter Cloud Provider Resource",d={id:"portal/inventory/managing-resources/adding-inventory-resources/adding-vcenter-cp",title:"Adding VMWare vCenter Cloud Provider Resource",description:"This article explains how to configure a vCenter cloud provider resource. The VMware vCenter cloud provider enables the deployment of virtual machines from vCenter templates, images, clones (existing vCenter VMs) and linked clones (snapshots of existing vCenter VMs). Each deployment type includes the required settings, attributes, and commands. For a video tutorial on how to set up the resource, watch the video at the bottom of the article.",source:"@site/versioned_docs/version-2023.3/portal/inventory/managing-resources/adding-inventory-resources/adding-vcenter-cp.md",sourceDirName:"portal/inventory/managing-resources/adding-inventory-resources",slug:"/portal/inventory/managing-resources/adding-inventory-resources/adding-vcenter-cp",permalink:"/cloudshell-help/portal/inventory/managing-resources/adding-inventory-resources/adding-vcenter-cp",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/inventory/managing-resources/adding-inventory-resources/adding-vcenter-cp.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Adding Microsoft Azure Cloud Provider Resource",permalink:"/cloudshell-help/portal/inventory/managing-resources/adding-inventory-resources/adding-azure-cp"},next:{title:"Reserving Resources from the Inventory",permalink:"/cloudshell-help/portal/inventory/managing-resources/reserving-from-inventory"}},l={},a=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"adding-vmware-vcenter-cloud-provider-resource",children:"Adding VMWare vCenter Cloud Provider Resource"}),"\n",(0,r.jsx)(n.p,{children:"This article explains how to configure a vCenter cloud provider resource. The VMware vCenter cloud provider enables the deployment of virtual machines from vCenter templates, images, clones (existing vCenter VMs) and linked clones (snapshots of existing vCenter VMs). Each deployment type includes the required settings, attributes, and commands. For a video tutorial on how to set up the resource, watch the video at the bottom of the article."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We strongly recommend using the 2",(0,r.jsx)("sup",{children:"nd"})," Gen version of the shell, which provides significant enhancements and capabilities, and is tamper-resistant from within CloudShell, ensuring your Azure cloud provider resources and Apps are in pristine condition. Useful articles: ",(0,r.jsx)(n.a,{href:"/cloudshell-help/devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell#replacing-the-1st-gen-shell-with-a-2nd-gen-version",children:"Replacing the 1st Gen shell with a 2nd Gen version"}),", ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities",children:"Cloud Provider Shells - Features and Capabilities Per Release"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"vCenter elements created by CloudShell should not be altered as this may cause unexpected behavior."}),"\n",(0,r.jsx)(n.li,{children:"The supported versions are vSphere 5.5 - 6.5, 6.7, 7."}),"\n"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To add a vCenter cloud provider resource:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the CloudShell domain in which this resource will reside. This will enable the Apps based on this cloud provider resource to be usable in this domain."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Inventory"})," dashboard, in the ",(0,r.jsx)(n.strong,{children:"Resources"})," tab, click the folder in which you want to create the resource."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"+ Add New"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Create New Resource"})," dialog box, select the ",(0,r.jsx)(n.strong,{children:"vCenter"})," cloud provider template. To use the vCenter 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell, select ",(0,r.jsx)(n.strong,{children:"VMware vCenter Cloud Provider 2G"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter a ",(0,r.jsx)(n.strong,{children:"Name"})," for the vCenter resource."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: ",(0,r.jsx)(n.code,{children:"| . - _ ] ["})]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter the ",(0,r.jsx)(n.strong,{children:"IP\xa0Address"})," of the vCenter server that will be used to deploy the virtual machines."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Resource"})," dialog box is displayed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(1824).c+"",width:"802",height:"648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['Enter the required information. Unless specified differently, paths are relative to the datacenter so for example, to specify VM storage "datastore cluster" that is under datacenter "QualiSB", enter "datastore cluster" in the ',(0,r.jsx)(n.strong,{children:"VM Storage"})," field. For guidance on finding each element in your vCenter server, see ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(9408).c+"",children:"vCenter cheetsheet for versions 5.5-6.5"})," or ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(41450).c+"",children:"vCenter cheetsheet for version 6.7 and above"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"All vCenter elements must be located under the same data center."})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Attribute"}),(0,r.jsx)("th",{children:"Supporting shell version"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Address"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"IP address of the vCenter server"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"User"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"User on the vCenter server."}),(0,r.jsxs)(n.p,{children:["The user must be assigned to the root level of the vCenter server with the necessary permissions. For details, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type",children:"Required vCenter User Permissions per Deployment Type"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Password"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"vCenter user's password"}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Password must not include a # character."})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Default Datacenter"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Datacenter within the vCenter that will be used for virtual machine deployment. All other settings of this vCenter resource should refer to entities associated with this datacenter."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VM Storage"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"vCenter storage in which the VMs will be created. The storage can be either a datastore or a datastore cluster. For example: datastore1"}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Note: To use a specific datastore that resides inside a cluster, specify the cluster name and the datastore name. For example: clustername/storage1"})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Holding Network"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Default network to be used for the VM\u2019s vNICs when disconnecting them from another network. A distributed port group can also be specified."}),(0,r.jsxs)(n.p,{children:["Specify a network under the specified ",(0,r.jsx)(n.strong,{children:"dvSwitch"}),". Do not include the dvSwitch name in the path."]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Only VNICs in this holding network will be used when connecting Apps based on this cloud provider resource in the sandbox."})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VM Location"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["Folder in the vSphere datacenter (defined in the ",(0,r.jsx)(n.strong,{children:"VM Storage"})," attribute) in which the VM will be created. Default is ",(0,r.jsx)(n.strong,{children:"Qualisystems"}),"."]}),(0,r.jsxs)(n.p,{children:["From CloudShell version 9.0, two folders are created within this folder, as needed: ",(0,r.jsx)(n.code,{children:"Deployed Apps"})," and ",(0,r.jsx)(n.code,{children:"Saved Sandboxes"}),". The ",(0,r.jsx)(n.code,{children:"Deployed Apps"})," folder holds the deployed VM Apps and, if you have saved a sandbox as part of the ",(0,r.jsx)(n.strong,{children:"Save and Restore"})," paid add-on, the ",(0,r.jsx)(n.code,{children:"Saved Sandboxes"})," folder is created to hold the VM artifacts created when a user saves a sandbox."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Default dvSwitch"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"(Optional if connectivity is not required) Default vCenter dvSwitch to be used when configuring virtual machine connectivity. Using the vCenter 2nd Gen shell, vSwitch is also supported."}),(0,r.jsx)(n.admonition,{title:"Important",type:"info",children:(0,r.jsx)(n.p,{children:"CloudShell needs to create port groups in the dvSwitch in order to use Apps. Therefore, make sure you have an appropriate VMWare license that provides this capability."})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VM Cluster"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"vCenter cluster or host to use when deploying a virtual machine. To specify a host instead of a cluster, use: Cluster Name/Host IP."}),(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the cluster is in ",(0,r.jsx)(n.strong,{children:"Under Maintenance"})," mode, the deployment may fail."]}),"\n",(0,r.jsx)(n.li,{children:"Discovery of the resource will fail if your vCenter server has a datastore cluster folder with the same name as the specified VM\xa0cluster."}),"\n"]})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VM Resource Pool"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Resource pool in which the virtual machine is created. Specify a resource pool under the specified ",(0,r.jsx)(n.strong,{children:"VM Cluster"}),". Do not include the ",(0,r.jsx)(n.strong,{children:"VM Cluster"})," name in the path. Leave this field empty if you specified a specific host name in the ",(0,r.jsx)(n.strong,{children:"VM Cluster"})," field or if you don't want to use a resource pool."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Shutdown Method"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Shutdown method to be used when powering off the VM. Options are Hard and Soft."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Hard"}),": (Default - starting with vCenter shell 4.2.0) Shuts down the virtual machine without shutting down any running applications"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Soft"}),": Shuts down all running applications on the virtual machine before shutting down the virtual machine."]}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Soft"})," shutdowns require VMware Tools to be installed on the VM."]})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Execution Server Selector"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["(Optional) This attribute points to a pre-defined group of execution servers (grouped by a common ",(0,r.jsx)(n.strong,{children:"Execution Server Selector"})," value). To make the association, enter the same value you specified on the execution server."]}),(0,r.jsxs)(n.p,{children:["For additional information on managing App deployments per domains, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"."]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["App deployment requires a minimum number of slots to be available. See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands#number-of-execution-slots-for-vm-deployments",children:"Number of execution slots for VM deployments"}),"."]})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"OVF Tool Path"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"(Relevant when deploying vCenter VM from an image) Path to the OVF tool installation. Use the same path for all execution servers."}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This path must be accessible to all execution servers that will be used to deploy Apps."})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Reserved Networks"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"(Optional) Comma-separated list of reserved networks. vNICs configured to these networks will not be used for VM connectivity."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Behavior During Save (optional)"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["(Applies to the ",(0,r.jsx)(n.strong,{children:"Save and Restore"})," paid add-on) The VM's state while the sandbox is being saved. Options are ",(0,r.jsx)(n.strong,{children:"Remain Powered On"})," and ",(0,r.jsx)(n.strong,{children:"Power Off"}),"."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inherit"}),": (Default) Uses the setting defined on the vCenter cloud provider resource"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Remain Powered On"}),": The VM will remain powered on during the saving state."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Power Off"}),": If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save."]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save."})}),(0,r.jsxs)(n.p,{children:["If this field is left empty, the default value is ",(0,r.jsx)(n.strong,{children:"Remain Powered On"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Saved Sandbox Storage"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["(Applies to the ",(0,r.jsx)(n.strong,{children:"Save and Restore"})," paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/save-sandbox",children:"Save a Sandbox"})," for more information."]}),(0,r.jsxs)(n.p,{children:["For storage purposes, these VM clones can be stored in a different data storage than the one configured in the ",(0,r.jsx)(n.strong,{children:"VM\xa0Storage"})," attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1."]}),(0,r.jsxs)(n.p,{children:["If this field is left empty, the default is the value configured in ",(0,r.jsx)(n.strong,{children:"VM\xa0Storage"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Promiscuous Mode"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"(Optional) Configures the port groups on the virtual switch to allow all incoming traffic. This setting is enabled by default."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Enable Tags"}),(0,r.jsxs)("td",{children:["2",(0,r.jsx)("sup",{children:"nd"})," Gen"]}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"(Applies to vCenter 6.5 and above) If enabled, vSphere tags will be added to new vSphere inventory objects created by the Shell - folders, networks, VMs, etc."})})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Start Discovery"})," to validate the vCenter settings."]}),"\n",(0,r.jsx)(n.p,{children:"When the discovery process completes, a confirmation message is displayed. The resource is displayed in the Inventory dashboard in CloudShell Portal and in Resource Manager."}),"\n",(0,r.jsxs)(n.p,{children:["Apps can now be added using the vCenter resource. For additional information, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template",children:"Adding App templates"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To customize the App deployment types and publish App orchestration parameters, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types",children:"Customizing App Deployment Types"}),"."]}),"\n",(0,r.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/3j7OXk7Zp9A",title:"Creating or Extending Shells",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9408:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/files/VCenter_5.5_6.5_Cloud_Provider_Resource_Configuration_Cheetsheet-9317fbb69919dcb5161be4d8229a570d.pdf"},41450:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/files/VCenter_6.7_Cloud_Provider_Resource_Configuration_Cheetsheet-9cabb160a40cfa6a0c019e7e2511cd01.pdf"},1824:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/AppsResourceDiscoveryInformation-094553d703d6dd7435987be3a55223db.png"},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>o});var r=s(11504);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);