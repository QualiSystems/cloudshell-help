"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[46680],{10400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=n(17624),s=n(4552);const i={sidebar_position:1},l="Adding a new App Template",d={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template",title:"Adding a new App Template",description:"When adding a new App template, you need to configure the settings of the virtual machine and application you want to deploy. To add App templates, at least one cloud provider resource must be defined. To define private cloud provider resources, see Private Cloud Provider Support in CloudShell, and for public cloud providers, see Public Cloud Provider Support in CloudShell.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing App Templates",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/"},next:{title:"AWS EC2 Instance",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/aws-ec2-dp-attributes"}},r={},o=[];function p(e){const t={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"adding-a-new-app-template",children:"Adding a new App Template"}),"\n",(0,a.jsxs)(t.p,{children:["When adding a new App template, you need to configure the settings of the virtual machine and application you want to deploy. To add App templates, at least one cloud provider resource must be defined. To define private cloud provider resources, see ",(0,a.jsx)(t.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/",children:"Private Cloud Provider Support in CloudShell"}),", and for public cloud providers, see ",(0,a.jsx)(t.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/",children:"Public Cloud Provider Support in CloudShell"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If your CloudShell deployment includes multiple sites, it is recommended to configure the deployment process of the App to be carried out in the domain that is physically closest to the cloud provider. For additional information, see ",(0,a.jsx)(t.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"})," or ",(0,a.jsx)(t.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"}),"."]}),"\n",(0,a.jsx)(t.admonition,{title:"Notes for public cloud Apps",type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["By default, all public cloud Apps of the same type in the same sandbox are deployed within the same subnet and therefore are connected to each other and isolated from other sandboxes. However, using the Subnet service, blueprint designers can set up multiple subnet networks in the sandbox, instead of having one default subnet for all the Apps of the same cloud provider. For details, see ",(0,a.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Public cloud App deployment requires the management network and subnet(s) to be prepared in advance as part of the sandbox Setup process. CloudShell's out-of-the-box Setup process does this. However, the blueprint must include at least one public cloud App to initiate the Setup script's connectivity preparation process for deployment in that public cloud."}),"\n"]})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click\xa0",(0,a.jsx)(t.strong,{children:"+ Add"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Create New App"})," wizard is displayed."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(38028).c+"",width:"802",height:"491"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["From the ",(0,a.jsx)(t.strong,{children:"Select Deployment Type"}),' pane, select the desired deployment type. For example, "',(0,a.jsx)(t.strong,{children:"vCenter VM From Template"}),'" deploys a vCenter virtual machine from a template while "',(0,a.jsx)(t.strong,{children:"AWS EC2 Instance"}),'" deploys an AWS EC2 instance from an AMI image.']}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Enter a ",(0,a.jsx)(t.strong,{children:"Name"})," for the App template."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"The App template's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] ["})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.strong,{children:"Create"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The App template is created and the ",(0,a.jsx)(t.strong,{children:"App"})," wizard's ",(0,a.jsx)(t.strong,{children:"General"})," page is displayed."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(74412).c+"",width:"802",height:"571"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"General"})," page, define the App template's display settings and category."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsxs)("thead",{children:[(0,a.jsx)("th",{children:"Field"}),(0,a.jsx)("th",{children:"Required"}),(0,a.jsx)("th",{children:"Description"})]}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Name"}),(0,a.jsx)("td",{children:"Required"}),(0,a.jsx)("td",{children:"App name that is displayed in the catalog."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Description"}),(0,a.jsx)("td",{children:"Optional"}),(0,a.jsx)("td",{children:"Description of the App."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Icon"}),(0,a.jsx)("td",{children:"Optional"}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"Add an image to the catalog definition. The recommended size for the image is 190x120 pixels (image size is limited to 400x400 pixels or 200 KB)."})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Categories"}),(0,a.jsx)("td",{children:"Optional"}),(0,a.jsxs)("td",{children:[(0,a.jsxs)("p",{children:["Service categories are a method to classify Apps. The Apps are displayed in the ",(0,a.jsx)(t.strong,{children:"Add App / Service"})," side pane in the blueprint and sandbox diagram, arranged in categories. Only users who are permitted to view the category can access the App. Apps without a category are not displayed."]}),(0,a.jsxs)("p",{children:["By default, the ",(0,a.jsx)(t.strong,{children:"Applications"})," category is selected."]}),(0,a.jsx)("p",{children:"Select a category from the dropdown list. You can select additional categories. Examples of categories are: applications, networking and VLAN."}),(0,a.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The category must be associated with the domain in which the required cloud provider resides. For information about domain categories, see ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/managing-categories#managing-domain-categories",children:"Managing domain categories"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["It is recommended to use up to a 2-level hierarchy when organizing the ",(0,a.jsx)(t.strong,{children:"Add App / Service"})," catalog (i.e. root and sub-category)."]}),"\n",(0,a.jsxs)(t.li,{children:["In the ",(0,a.jsx)(t.strong,{children:"Add App / Service"})," side pane, Apps are displayed in the root category only. This includes services associated to sub-categories."]}),"\n"]})})]})]})]})]}),"\n",(0,a.jsxs)(t.ol,{start:"6",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the left pane, click ",(0,a.jsx)(t.strong,{children:"Deployment Paths"})," and configure the App template's deployment path."]}),"\n",(0,a.jsx)(t.p,{children:"A deployment path consists of (1) the selected deployment type (the method to be used to deploy the VM, for example, from a vCenter VM template or AWS AMI image, (2) the VM\u2019s settings such as storage size, CPU and image file, and (3) the CloudShell cloud provider resource that enables CloudShell to access the cloud provider and deploy the VM on it."}),"\n",(0,a.jsxs)(t.p,{children:["Note the deployment path's name (highlighted in the image below). The path's name is dynamic and consists of the selected ",(0,a.jsx)(t.strong,{children:"Cloud Provider"})," resource and ",(0,a.jsx)(t.strong,{children:"Deployment"})," type. You can change the name of the path by clicking the field."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(45296).c+"",width:"802",height:"571"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["From the ",(0,a.jsx)(t.strong,{children:"Deployment"})," drop down list, select the deployment type."]}),"\n",(0,a.jsx)(t.p,{children:"The selected deployment type's attributes are displayed."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Deployment types related to 2",(0,a.jsx)("sup",{children:"nd"}),' Gen cloud provider shells include "2G" in the title (for example: "vCenter VM From Template 2G").']})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter the required information based on the selected deployment path:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["For AWS EC2 Instance attributes - ",(0,a.jsx)(t.a,{href:"./deployment-path/aws-ec2-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For Azure VM From Custom Image attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For Azure VM From Marketplace attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-marketplace-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For Azure VM From Gallery Image 2nd Gen attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-galery-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For OpenStack Deploy Glance Image 2G attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/openstack-glance-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For vCenter Clone VM From VM attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-vm-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For vCenter Deploy VM From Linked Clone attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-link-clone-vm-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For vCenter VM From Image attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-image-dp-attributes",children:"Read here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For vCenter VM From Template attributes - ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-template-dp-attributes",children:"Read here"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["To add additional deployment paths to the App template, click the ",(0,a.jsx)(t.strong,{children:"Add New Deployment Path"})," link at the bottom of the wizard and fill in the required information."]}),"\n",(0,a.jsx)(t.p,{children:"Note that for Apps with multiple deployment paths, the user who adds the App to the blueprint or sandbox diagram will be prompted to select the suitable deployment path to use out of the deployment paths that are based on cloud provider resources in that user\u2019s domain."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(74240).c+"",width:"802",height:"208"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the left pane, click ",(0,a.jsx)(t.strong,{children:"Configuration Management"})," and configure the application to be installed on the VM."]}),"\n",(0,a.jsxs)(t.p,{children:["Read about the different options ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/configuration-management",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the left pane, click ",(0,a.jsx)(t.strong,{children:"App Resource"})," to optionally set the VM's operating system user credentials (for example, to connect to the VM via RDP or SSH). You can also change the deployed App's Shell."]}),"\n",(0,a.jsxs)(t.p,{children:["Read about the different options ",(0,a.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/app-resource",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click\xa0",(0,a.jsx)(t.strong,{children:"Done"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The new App template is displayed in the Apps page."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},74240:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/AppsNumberOfDeploymentTypes-d1127e1ea2541fad066615ba6f29d629.png"},45296:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/AppDeploymentPathsPage-82e948b6ca49518a4f24c3bf2056224e.png"},74412:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/AppGeneralPage-447ff7c91490c0e29172244ea811d140.png"},38028:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/CreateNewApp-beb2aaa6eb27e19feaba7df4f1ba638f.png"},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>l});var a=n(11504);const s={},i=a.createContext(s);function l(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);