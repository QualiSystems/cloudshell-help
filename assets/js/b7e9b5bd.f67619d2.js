"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[21548],{10484:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(17624),r=n(4552);const s={sidebar_position:3},t="Managing Public Cloud Apps in Domains",l={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",title:"Managing Public Cloud Apps in Domains",description:"The procedures in this article apply to Apps hosted on a public cloud provider, like AWS EC2 or Azure. For private cloud Apps like vCenter, see Managing Private Cloud Apps in Domains.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using Multiple Azure Regions in CloudShell",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/using-multiple-azure-regions-in-cloudshell"},next:{title:"Private Cloud Provider Support in CloudShell",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/"}},d={},c=[{value:"Set the execution server&#39;s selector attribute",id:"set-the-execution-servers-selector-attribute",level:2},{value:"Create a cloud provider resource in the required domain",id:"create-a-cloud-provider-resource-in-the-required-domain",level:2},{value:"Configure the Execution Server to support Ansible operations",id:"configure-the-execution-server-to-support-ansible-operations",level:2},{value:"Associate the public cloud App to the domain",id:"associate-the-public-cloud-app-to-the-domain",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const i={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.em,{children:["The procedures in this article apply to Apps hosted on a public cloud provider, like AWS EC2 or Azure. For private cloud Apps like vCenter, see ",(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"."]})}),"\n",(0,o.jsx)(i.p,{children:"CloudShell does not support the deployment of public cloud Apps on different cloud regions in the same sandbox. It is therefore required to include (in a blueprint or sandbox) only Apps with an active deployment path that is associated to a single cloud provider resource. A warning is displayed if this design guideline is not kept."}),"\n",(0,o.jsxs)(i.p,{children:["In this process, you will configure the App's deployments to be carried out by the execution server(s) installed on the public cloud provider's region. This is done by associating the cloud provider and App to the domain, and associating the appropriate execution server to the cloud provider resource and to the shell that defines the deployed App. Technically, this requires specifying a value in the execution server's ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," attribute, and setting that value in the cloud provider resource and deployed App shell. ",(0,o.jsx)(i.em,{children:"Note that resource association to a domain makes sure that users use cloud providers allocated to their domains, while assigning the Execution Server Selector ensures that the actual drivers will run next to the cloud provider to reduce latency and improve performance."})]}),"\n",(0,o.jsxs)(i.p,{children:["CloudShell supports two public cloud providers out-of-the-box, AWS EC2 and Azure. In AWS EC2, we use two execution servers: ",(0,o.jsx)(i.strong,{children:"es-shells"})," deploys the instances on AWS and therefore needs to be associated to the cloud provider resource, and ",(0,o.jsx)(i.strong,{children:"es-commands"})," runs scripts and commands on the AWS instances and needs to be associated to the shell of the deployed Apps. In Azure, since the authentication mechanism works a bit differently, we use one execution server called ",(0,o.jsx)(i.strong,{children:"Execution-Server-VM"})," that needs to be associated to both the cloud provider resource and deployed App shell."]}),"\n",(0,o.jsx)(i.p,{children:"For illustration purposes, we will configure an AWS App in this article."}),"\n",(0,o.jsx)(i.p,{children:"This is a five step process:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"Decide which CloudShell domain to associate to the public cloud region"}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains#set-the-execution-servers-selector-attribute",children:"Set the execution server's selector attribute"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains#create-a-cloud-provider-resource-in-the-required-domain",children:"Create a cloud provider resource in the required domain"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains#configure-the-execution-server-to-support-ansible-operations",children:"Configure the Execution Server to support Ansible operations"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains#associate-the-public-cloud-app-to-the-domain",children:"Associate the public cloud App to the domain"})}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{type:"important",children:(0,o.jsxs)(i.p,{children:["Before you begin, make sure CloudShell has been configured on the required public cloud region. See ",(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/",children:"AWS Integration"})," or ",(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/",children:"Microsoft Azure Integration"}),"."]})}),"\n",(0,o.jsx)(i.h2,{id:"set-the-execution-servers-selector-attribute",children:"Set the execution server's selector attribute"}),"\n",(0,o.jsxs)(i.p,{children:["This procedure explains how to prepare the execution server to deploy the Apps. The ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," attribute must have the ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," rule enabled."]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"To associate an execution server to the domain:"})}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In CloudShell Portal, click ",(0,o.jsx)(i.strong,{children:"Manage"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.strong,{children:"Manage"})," dashboard is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In the left sidebar, click ",(0,o.jsx)(i.strong,{children:"Execution Servers"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In the left pane, under ",(0,o.jsx)(i.strong,{children:"Execution Servers"}),", click ",(0,o.jsx)(i.strong,{children:"Servers"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"The execution server list is displayed."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Click the name of the appropriate execution server. Note that this execution server is installed on the cloud provider itself."}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.strong,{children:"Attributes"})," dialog box is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Select the ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," check box and specify a value. For example, ES1:"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:n(70592).c+"",width:"602",height:"241"})}),"\n",(0,o.jsxs)(i.p,{children:["For AWS EC2 Apps, perform these steps twice, once for the ",(0,o.jsx)(i.strong,{children:"es-shells"})," execution server and again for the ",(0,o.jsx)(i.strong,{children:"es-commands"}),' execution. Specify a different value on each execution server. For illustration purposes, we\'ll set "ES1" as the value on ',(0,o.jsx)(i.strong,{children:"es-shells"}),' and "ES2" as the value on ',(0,o.jsx)(i.strong,{children:"es-commands"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Click ",(0,o.jsx)(i.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Repeat these steps to associate additional execution servers to the domain."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"create-a-cloud-provider-resource-in-the-required-domain",children:"Create a cloud provider resource in the required domain"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"To set the cloud provider resource to the domain:"})}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"As system administrator, log in to CloudShell and select the required domain."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Create the cloud provider resource, as explained in ",(0,o.jsx)(i.a,{href:"/cloudshell-help/next/portal/inventory/managing-resources/adding-inventory-resources/adding-aws-cp",children:"Adding AWS EC2 Cloud Provider Resource"})," and ",(0,o.jsx)(i.a,{href:"/cloudshell-help/next/portal/inventory/managing-resources/adding-inventory-resources/adding-azure-cp",children:"Adding Microsoft Azure Cloud Provider Resource"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In the ",(0,o.jsx)(i.strong,{children:"Region"})," attribute, enter the public cloud's region that is relevant for the current domain."]}),"\n",(0,o.jsxs)(i.p,{children:["For example, AWS EC2 resource with a ",(0,o.jsx)(i.strong,{children:"Region"})," selected:"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:n(57556).c+"",width:"802",height:"283"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In the ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," attribute, specify the value you set in the Execution Server Selector attribute on the appropriate execution server (",(0,o.jsx)(i.strong,{children:"es-shells"}),' for AWS ES2 - "ES1" in our case).']}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Complete the resource creation process."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"configure-the-execution-server-to-support-ansible-operations",children:"Configure the Execution Server to support Ansible operations"}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"This section is only required for Ansible configuration management."})}),"\n",(0,o.jsxs)(i.p,{children:["To use Ansible to install and configure applications on Apps, the system administrator needs to perform several configurations on the Linux-based Execution Server that will be used to run the Ansible operations on the App's deployed VMs. For additional information, see ",(0,o.jsx)(i.a,{href:"../../../devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/",children:"Ansible Playbook Development for Apps"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"associate-the-public-cloud-app-to-the-domain",children:"Associate the public cloud App to the domain"}),"\n",(0,o.jsx)(i.p,{children:"To make the App available to members of specific domains, in the App template, select the cloud provider resource with the required region and associate the domain categories to the App."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"To associate an App to a domain:"})}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In the ",(0,o.jsx)(i.strong,{children:"Manage"})," dashboard, in the left sidebar, click ",(0,o.jsx)(i.strong,{children:"Apps"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.strong,{children:"Apps"})," page is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Create a new App or edit an existing one, as explained in ",(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Managing App Templates"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"The App's configuration wizard is displayed."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["To make the App available to members of this domain, from the ",(0,o.jsx)(i.strong,{children:"Categories"})," dropdown list, select the categories associated to the domain. For details about creating domain categories, see ",(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-categories#managing-domain-categories",children:"Managing domain categories"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"For example, Testing NY:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:n(58348).c+"",width:"722",height:"387"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["If this is a new App, in the ",(0,o.jsx)(i.strong,{children:"Deployment Paths"})," page, create a deployment path for the cloud provider. Make sure to select the cloud provider resource you created in the required CloudShell domain."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In the ",(0,o.jsx)(i.strong,{children:"App Resource"})," page, in the ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," attribute, specify the value you set in the ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," attribute on the appropriate Execution Server. For AWS EC2 Apps that have a custom shell driver, specify the value on the ",(0,o.jsx)(i.strong,{children:"es-commands"}),' Execution Server ("ES2" in our case).']}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:["If the ",(0,o.jsx)(i.strong,{children:"Execution Server Selector"})," attribute is missing, ask the system administrator to associate it with the deployed App's resource model in ",(0,o.jsx)(i.strong,{children:"Resource Manager Client"}),". By default, the ",(0,o.jsx)(i.strong,{children:"Generic App Model"})," model is used."]})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:n(15200).c+"",width:"802",height:"233"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Click ",(0,o.jsx)(i.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-dashboard-overview",children:"Manage Dashboard Overview"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Managing App Templates"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/next/intro/features/apps-overview",children:"Apps Overview"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},70592:(e,i,n)=>{n.d(i,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAADxCAIAAACcfY65AAAjL0lEQVR42u3dC1hUZcLA8ZfLEIJcVARKTUXDSybRomZYmnnJy6K7uGmrmEEGBZgIC7opFVIqiRRIQgYZWFLpU1ppKotRGamsrn6YQoqSotxSQCFiuHxnhtsgIwIiI8P/9+zXM3POmTPvjHzz9z1zDup8vG1bdVVVtRCiWkEAANA16OjoKP9P6Ojq6sTFx7ssWKDpIQEAoDHxW7fqxH744fOLFml6JAAAaMyHW7bovP/++4sXL9b0SAAA0JjNmzfrRL733ssvvaTpkQAAoDHvbdqkEx4R4e3lpemRAACgMREbN+qEvfPO0lde0fRIAADQmHfefVdnQ1iYz9Klmh4JAAAaI80MdUI3bFjm46PpkQAAcLtKSv8wNurWhgdKM0NyCADQBhUVlbv2HHho+AMPDOqvdoO8/N9TjhyfNulxAwPZDavIIQBAe+TlXzn481G7h4baDOh7w6qc3IKfDv9v5IO2g23ub/pAcggA0CpS9g4eOvaXhx8ccP999QuzL+cdSj3+8EPDmmayBjkEAGib7Mu5h1JPjHrkoX59rKW7Fy5ePnw0zcH+wf797rvZQ8gh0AaXvvRZdXZelO8YmRD536zwjc5QWTnVw/1cVOMly3eNSXUKSqy5Z9BnrPe/XxpvLXJ3B4WKl0Kmi/o9GJgOnu3vt2CYkbRq8cU5u14crnzEL9HOqWMDxcq6PSgNdt/0kghTeWrbhZvXTOp+NjHq3W3J2XLpWZ5/5bkZg4w0/V4BmnEhO+fI0bRHHUaWyyuOHj9Zn8abIYdA6/22y/+rQquSBzz8xxrXLatrW2+hdsnxOKdDDjV5K/lx03NHRn3i43C1IYebhE/gDEvp77R7/N+Se0c6GTTN4Y6FI2+8nd/wwFpSpz8QPitm3y8ThSmh/udnbHp2qJ6m3y5AQ87/lv3f//0i3Rg7yu6+ey2b35gcAq12ekvQ6ckrrHaEX1/oO9m8dmHrcnh01CdLbpLD9cI7bNpt5DD8yqIVrnZmmn6TAM379WzW//2SoSN0HMc+YmnRs/mNySHQSmWpoaElrq+O73Fqm3/G+JBZtV9F3DqH9Yc6LccHrnFzMFdzsFSI+2a/Eeg6Qt3BUvU5bDhYOiMwzt1OiMr81J3bv/whq9zS4Rm3OQ6Wt3o5gJY6nZF5Kj1TCmFhYfHJU2eecHTo1dO8me3JIdA6Jcmhz4Yfr71jPScy0qmf8mbLZ4cXdgb55M7Z/uLw3Kazw8qsrX4f9VgROOFU6LPp01o/O1RRmBrhf8Qh/KWxhpp+y4AOJ/Xv18yscY/+xaKXIoGn0s+mnzk/3nFUD3PTmz2EHAKtUrQ/6JPu/rWNOR23/KdRa12HKW63PIciL9E/TPiumSTU5zDcwCf0mbJtz66X+65f6GAqcpM3Lf1yQEjYNGV3m82hNHNdcvyxELex5soc+iSPfNd3vGmLXxygFU6czDiXdfHxsX/p2aPhW4O0U2fOnvttwrhRZqYmah9FDoHWyN7j+VnvMB8Hg5q7Gdue+/aBzUsUd1uRw98T/QMLPcLnGO9tcrBUZjR0tt9r8wYbi9LM3R+FfpxyoUxmfL+DR4DiTFSlmx4svfHMUtPB071fcX2ELxHRtRw7cepCds4TjzmYm92YveP/dzrr4uUnx402MTFu+kByCADQEleuFv106H9PODqYqgue5OjxU/kFv099alzTVeQQANCFXC8p7W6s5npccggAADkEAIAcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAgyCEAAIIcAgAg6nP43Y/HND0SAAA0ZsI4e3IIAOjqyCEAAOQQAAByCACAIIcAAAhyCACAIIcAAAhyCACAIIcAAAhyCACAIIcAAAhyCACAIIcAAAhyCACAuN0c/iNw+7zBuUm+npH5NQu8w+Mm92m63aX9WwofWzTcuMmKkrRtz+aN3zXxvoZF8tILR3eHhuzKVNyZFhz37KBz2559bY8QbpE7xver36yy9GrGT7Eb45JzhPjr8m2LBpzd4rHyq/rVio1F0kJPsbbRzutcuMkqxfJI4bBwufuk4VbK4ZYXX0pJCA3dm6+ZPx8AQIe4rRy6ro+bfb8Q+SkrPTedaLxq9htRrgPPxy5c++WND6oLVWTdAk8pS+YnamPWe+Q8txX/GH79x7WLw35pmsOeaTW3e4+c9az3fAeD4zHPvZncXA7rn6XpNo2eV4ViyweuH9q2JiQxc9B49xeenWFbkrLGd02qpv+sAAB3zG3k0HrhO+Hjy5N/sZo44Gy4d1Byo5VtzaGkt29k6PjKZKclMTfPoYJiJiqUm7VrDpuMfE7Ix05WaZueW5Oi6T8sAMCd0vYcjvQJDbbPj124a1Dk8pGXlLM0Fbebw/JkJ5/mcmgzfcmKRXblyeGekcfbN4dWbqs3T++d+dVHa7ak5Gr6jwcA0DHanMPhKzYtH3pRUUFFFx2Kts4P+kxl9e0dLH0g96vlS7fkN/fdoRDlvyVHr4vZ3/x3h7fIYePvDrNrpqR2rsEvzB5mJkqKLvz2a0rSzq1JWZr+YwIA3FltzeFE34887zsR5Bt6vO6o6edu/p83rG9lDhtlqSRt16uvbVd7Kk3DwdJBTsEr5wwtTA7yiTnRvt8dKlmNmDZ71qiR/fv36yUrOZsY6h/HV4cAoMXamMNngmMWDJM1WnRuj5Pftvp7bT5YavOP5W/OG15+aNNzISnNf3dotSR083j5fuflEXcgh/VqxlN3ag8AQDu1LYdOIR/PMUjyXRpTd/nBvMDtf5ftX7IqOqd2QQecStOQw/G+Hy2xu7pbZTx2SzYHOpR8tXDplrpnaXEOFWfolKumXXUMAADt1JYcKk82ke33XB6RU79Mcfplj9SGKdRt5FDllNGb59BqxBxvX6eRVccj3EL3i+HeYb6Te13av+WDiKQsG4c5C16c5iD7NXbF2i/rR9jiHDp4rl0+0Tw3eWf0Z3tOiOGzF7otGGN+sfa7TACAdmpDDnt7h4dKuVq8JEb1xEvFNYjdGi5AvJ0cKo7EDsz6zDdoa05zp9KU5P2yP2ZtbM13etaTfJfNchhgZqwnRKW8JOeX/XGhsapf97XkVJray/B7j1+08Jnxw/uZKo4Gl5fkn07aHsFZpgCg1fglbQAAkEMAAMghAACCHAIAIMghAACCHAIAIMghAACCHAIAIMghAACCHAIAIMghAACCHAIAIMghAACCHAIAIMghAACiPoce7u6aHgkAABoTFR1NDgEAXR05BACAHAIAQA4BABDkEAAAQQ610h9lf0r/LS+vqK6u1vRYAHQ+Ojo6Bgb63Qzv0fRAOhQ51DbXr5ca3GMg3TA16a6rq6vp4QDofKqqqoqvXS//s7x7dyNNj6XjkENtk19Q2LePtXRDT48WAmijysqqi9k5vS3MNT2QjkMOtU1e/tUB/ftoehQAOr3zWdmWvXtoehQdhxxqG3IIoF2QQ3RudyKHOpGi2lPTLwxAxyKH6NzIIYB2QQ7RuZFDAO2CHKJzI4cA2gU5ROdGDgE0Lysrq2fPniYmJs1vRg5b7dq1a6dPny4uLla71tTUdOjQobd839FeVHP4SZyYf63xahNxeaGwFqIwTfj9JGLkQuiK6VZi/dNimPJy25Rd4rELyi37iWqn2geRQ0BrnM3MjI+Ls7SyenHxYn19/Wa2JIetduTIEQsLi3vvvVft2suXLxcUFIwaNUrTr7SruDGH5g1Vq1eWLiYmCbepws1GiD/F7m/EjCKR+ZwYWHfhviKKghwC2ub8+fNbtmypuW1mbu6zdGlzG5PD1kpMTHR0dLxhoTQZj46Odnd379+//8GDBydNmtSwruC7QJ+EjIb7E1ZtGX1sWZTwDlkwWLorPxn/aoTMI2qePNYlbF/DZjauYf5TLErP70uI+Pxwdpmsz1hn70UTBhiJk1s8DjlEuY6o3fu+N2KFp6uIXBl7ptGQpgREzbwUslG4Bk2xEEJlP/bT3T2m2SrmRumxLjFixZuuw2W144wUXq9NsKzfRemFfVti4lNy5DIj2xleAc42xlJ+9oUsic9seJqnfBJmXq5/gTITm5lLvebayg5HLTvw0LoAx9rfeFT4fZh35vT4RaLpa3z4aP0OZca2kwJ8Z9m25tcktSSHitpVierZdff/FH4fiHunCt/BKhuQQ0C7ZGZmxsXFSTf09PUrKyqMunf39/NrZnty2Gp79uwZO3as6pLS0tJVq1ZJk0IjI6PVq1f/+uuv06ZNa1jdNDNSA39J8I43WxU8rc/lPb5vF7mum/egoRSnY2Pi5z2oslnhwY3eSUPWLp/cRyYK03as/dFmtYd9hpoc+iuSJ0lLmJdqn7BoSM06KV01OWzYj648+7vo1T+NCFoljUd6xo0HLCasWu9sq6dmnBkJy7aa+K962lom5Nnfhm019whwNK3fp/oXeGl/4MoLM99zHX0mweVbmyi/0caKLYoPrHs9+28bFtiqeY2qO8z+JmT5hcmxHvayFv9xtCSHhT+LHifEN38X0y3U74QcAlqmoYUyWaVc3svCwv3FFw0MDJp5CDlstZ07dz766KOqS95+++309HTphpPSzz//PGvWrIbV6nIoNfTY5tf3DfewT4o65/S6u52Rcq52QyqK960OKXk++G996xaUyeWGstbn0KDxfqSHvFPiJt2VnvFwD+ezxwy9gp62aDpOaRr6o32Uu13d/UrpJ0vcIof14+mRudV798B1Xo4mQhQdXL0iZ+57zrbiFjm8yXvVnOa/O/z4H+Kf0r6qRNIuMT9bDOwh5vcTzqOFdePfXE8Ogc5r7969Y8aMMTdv+HWjNd8Xirp5Ya9evdzd3ZtvoSCHbVCTQ2lG+Omnn86dO3fXrl2JiYnS8ocfftjLy0u6oSaHKgdLbV2Caz/6S49FeEUfdnCPetleOYVKb3Qg8SmfhEW9GqWuzslW51DcsJ+6PSjjtGX0Mb/tlq/6TxFNUpR7eMPahMKHnKY+MWL0QAuZXu0+VQ6WKo/oisazw7eLFyinm9Lk8ot+wQGORtJDgksXhs+2VvcahzSaHX4bsq5wTvg8m5b/cbRkdlirSCSdELuzxMfXxPxHxPoxDWvIIdBJfb17d+rhw9IN/4AAo27dhKJqWVs+/FDUt7AF88Ia5LDVpByOHDly/fr1v/32m4WFRUFBgbSwX79+//rXv4yMFN96tWx2KH06H17nE5s23DXCb7TybzVNZ04FHZHD+Hm2vyT47rYJWlS6oek4K+WFFzOPpe7/4j/yma/5TLG6yeywofcWT/r9WznZFeLiniUJvdb42Rx8Y2P54tdn3qf2NTbuq4VjQJCLfWtOy21FDusUponpycJttnCru0CDHAKd0Vdff/3f1FRdff2qigodHZ3ly5cXFxdHRkaKumOkllZWixcvljV7Qmk9cthqNbPD2NjYn376qWZJt27d/P39pSLW3G3hwdLD7wUcsPMflxJy9Il13qPbfLA05wu/OON/+0/pqbzXooOlxQfWhRTOrzlYWvOM0mBeP2bjmH3IrNE4lUdHa5SkRHucmRDvMuQWB0sLDq5bkf5khOtoQ8XYvl6xvYfbiL0xcvc1k5XpucXB0rwDG33THdv9u0Np+U9DxEaV6eCb0v+/PCleHV57lxwCndGFCxdiYmJEXfx0lP/iaXVVVc28sGevXi95eMhkLf04IYetVv/dYX0RPT097e3t6zdoSQ5Ljscv+dJ6zcrJlle/Cwy88Lf1LvZGLT2VpuT7MO/kETUL81JiA3f1W1UbmxadSpN3OD440WZl7ak0dc8oTVX94tP6Ooc2jFOqZlSes8fcwaaisvjk5xtiTTxCZ1i39LtD5frsb17f8L0wn7Fs1ROmyk3v/HeH6nJ47gfxWLoInSD+OVgIuTj2g5ieLmLmiel1P/nkEOikLufkvP/++4oEKosoLamZLJqamXl5erbkGGk9cthqqqfSSEW0sLBwcmr0Adz8d4eKCy022x8KiDGovdBCZH/5emD+nPDFsk9bdqGFqCw9+WV0xLfphWUyY9sJXp7O9j3rHnSTHN78QouGOOX9J8T3x9GhN7nQoo/DvAD30ZZ6N7nQoqFhihnt1QXBcwcq1xYdXO11eNxGnyfNarZOV3uhRUMOr3wX+FaR67pZA+pmpbXHdYXydTV6olotvAw/54QI/q/YUSpydMVEM/HqFDFRJejkEOi8Ll2+/MEHH1RVVkqTwmohpBb2trRc/MILrWqhIIdtkJSUJCXQyspK7drc3NyCgoKJEydq+pV2FfySNgC5eXnSHLGyokK6LbXwxcWLW36MtB45bLWsrKyzZ89eu3ZN7VoTE5NBgwb1799f06+0qyCHACQ5ublRmzYZGRkt9fExaH0LBTlsg7KyspKSkurqarVrdXR0jI2NDQ0NNf1KuwpyCKBdkEN0buQQQLsgh+jc7kQOAXRB5BCdW35BYd8+1tINPT3d294ZgC6qsrLqYnZObwvz299VZ0EOtc3166W6ymtvzc3N9PX1bnt/ALqciorKwsKiqqqq7t1b8+/pdHLkUAvl51+R/lt87br006zpsQDofKS/UpuadO/du+ft76oTIYcAAJBDAADIIQAAghwCACDIIQAAghwCACDaJYeXL1/W9KsAAEDce++9bX4ss0MAAMghAADkEAAAQQ4BABDkEAAAQQ4BABDkUCvl5OQUFRXxz1lAs3R1dc3MzKytrTU9EKBFyKG2kVoohbBnz576+vqaHgu6tIqKiitXrkhRpIjoFMihtklPT7exsTE0NKz5R4ABTZH+WlZWVpaZmTlkyBBNjwW4NXKobU6dOjVixAiZTKajpOnhoIuqVpLL5WlpacOGDdP0cIBbI4faRsrhyJEj9fX1aSE0S8phRUXFiRMnyCE6BXKobaQc2tnZ8cUh7gZSDo8fP04O0SmQQ21DDnH3IIfoRMihtiGHuHuQQ3Qi5FDbkEPcPcghOhFyqG3IIe4e5BCdSDvk8Nq1a6dPny4uLla71tTUdOjQoSYmJpp+pV2F2hymffBM0L6m204N/MxthKYHDC1GDtGJtEMOjxw5YmFhcbN/g/jy5csFBQWjRo3S9CvtKpqfHebtWen14+Mb35xqqelxoisgh+hE2iGHiYmJjo6OzWxw8ODBSZMmqSwoPb8vIeLzw9llMmPbSQG+s2yNxMktHoccolxrpyoF+96IFZ7+UyzSY13Camc1MiPbGV4BzjbGQu1CIa6kbY2M3ZtRKkxsxi1ydR9tIS3L2xeyJD6zZtO651J5eC0b1zD/0dk7NkR/l3FNLrtvtMcyV0erG19F9jev+2bNin/ZXlY7xu8C/Q+PC5EGqbybljAv1T5h0RBRemHflpj4lBy5ytikYWwUrkFTLFTH02ess/eiCQOMGtbWP5fKZkpP+Sj23DKty2H+3pWeh4Y8a370ix8tX/jQrWSNytq8va96/TBuY/A0xb2Ss3tjNsb9mC2X9Rm30Mtt6iDjNv/AoOsgh+hE2iGHe/bsGTt2bDMbpKSkTJs2reH+mR1uH5sG/XtyH5mQX9y/OsFsmd/o7Jvm8NiY+HkPSssqc74OfjPPOcJ1hLqFwzK3LosqX7TS1d5UFKVvfSum/Lk3XYfLVEuT/U3I8guTYz1qe9YoQtcOrwtIf3KNy2gzIYqORb+d+eQbzrZ6Kq+hUtr/tjQjo6nLfZ40qxmjlMMd54a7RPiNNhcNOcxIWLbVxH/V09bSi8v+NmyruUeAo6lqDmuftLL05CdvfXqff9BTpmpzeMOSlmt9DmPEgrBgpz5N1qrkUNps6Y6BfmFu9sZ534cHRAuPmCVjDG/zZw/ajxyiE2mHHO7cufPRRx9tZoOff/551qxZDfelcqSMSFhc96VVpRB6zcwO68rXEInf1Szsm+jy3ZDY+qlbWoLL94q7V1W7IgUsUni9NsGy0d7qVr0j9wqe3HAIUTmqBhk7fI/YB/TeHm3oseoJ07q9Fdn3Ppjn+Lq7nVF9DqUX8qN9lLtdo/3cJIchewf7LxtrpOkc/vB4ZPDU3k3XNuQwY+vzK3/3+PiVMcq3Ny3mmSCx8jO3kW3+kUFXQQ7RiWgih5UFBze+E1s8ZO4kx4cdbCyVH7G3zmHzs0NRd6yydge15ROqs8NvQ9YVzgmfZ1OzSePklGYkhK07ZjZlxuQxdkMGmN3wCuSHo17NmBiywOrg6rWlrmsm96l/iqVGH76eOXPNvAfP1A0g9/CGtQmFDzlNfWLE6IEWMr1Gz9XoKKitc6g0Rda75cFSxbHclpfxDuRQSDdifm20n6nkEC1ADtGJaCKHSvKiCxnHj379RXL5zH+vesridr87TLtpDhu6YuEYEORiX3eKq5oZWFlOxrHTB/bsOvmA+xqXIQ1fjpUdi1iWOfU9Z1tRfGDdhhKX12fep/IU/wkJzp8TPuJwwwAq5YUXM4+l7v/iP/KZr/lMsVI3OxSiJCXWN3NC1Hybu352qMhhwrDgDxfYtvmHBF0TOUQnopHZocpxyNLDG7wyp8bOE41ymPOFX5zxv/2n9Gx0sLSOuoW/JDQ6WJqxwy3RJqrxwdK8Axt90x3Vf3eoOqTKC58GbOuhePbaBYXfh3lsTq9/KuMZ/jHSFLP+0Gtlzhcr42Tj792aM1qRQ5VdlaREe5yZEO8yRG0O1U5hRdOxtVI75vArf69DT9YdLD3v8v7KieZt/ilBl0QO0YloIIdSXTbkz1o228ZcTxSm7Vj9semyNZONvw/zTh6xdrni/Jq8lNjAXf1WKY5JtjiHlaqn0mR+ER571fm1G06lae67w4wdvon9AhaPtpQJee7BDSvTn4xwHV17qog0IwwpnB/8t77Ke0UHV6/ImRvhbHtVZW9ndix567u8J7wSFt17YF1UnrPH3MGmorL45OcbYk08QmdYq81hfZ6v3jU5FGcTXlyR9tew4L/2EXkHw1e++6Pl88pTaXL2rvTdYfly8BJHS1GYsXfnxRHPTezT5p8YdBnkEJ2IRg6Wqlxo0dfedanyqobK0pNfRkd8m16ouPpigpens71ictbiHIqbXmjR0JUr3wW+VeS6btaAxt/n1Ty68HjdhRZmQ2YucZ9ra1S720v7fSPEsprvCxXkh99blvZEhKu1alzlJ+NfXV3pdsOFFn0c5gW4j7bUU3+hRf3LvOGyiikBUTMvdeSFFio5FCXndoUHfXqsRBjbOrmMOBGV1uRCC2FoPuKpl5YssDfXa9mA0IWRQ3Qi7ZDDpKQkCwsLKysrtWtzc3MLCgomTpyo6VfaVfBL2nD3IIfoRNohh1lZWWfPnr127ZratSYmJoMGDerfv7+mX2lXQQ5x9yCH6ETaIYdlZWUlJSXV1dVq1+ro6BgbGxsacs12ByGHuHuQQ3Qi/IsW2oYc4u5BDtGJkENtQw5x9yCH6ETIobYhh7h7kEN0IuRQ25BD3D3IIToRcqht0tPThw4damhoqKOjo+mxoEurrq4uKys7ffr0kCEtvWoW0CByqG1ycnKkj6G+ffsaGBhQRGiK9ENYXl5+8eJF6YfQ2tpa08MBbo0caiGpiEVFRVVVVZoeCLo0XV1dMzMzWojOghwCAEAOAQAghwAACHIIAIAghwAACHIIAIAghwAACHIIAIAghwAACHIIAIAghwAACHIIAIAghwAACHIIAIAghwAACHIIAICoz+EsJydNjwQAAI3ZuWsXs0MAQFfHwVIAAMghAADkEAAAQQ4BABDkEAAAQQ4BABDkEAAAQQ4BABDkEIAWq66u1vQQNENHR6eZtbwtapFDAFooPq1q5fdVBX9oehwdzqKbCHpcx+VBnRo3rNXT0zMwMGi+ClpJ+hvAn3/+WVFRofZtqUEOAWih/u9VdMEW1ujVTZxdXC2VT1dX94ZV3bp164ItrCEVsbi4WO3bUoMcAtA20gdf9w2Vmh6FJl3xqtTX15c+91XjJ70txsbGmh6aJl29erXp21KPHALQNuTwd88K6XNfmgmRQ1VXrlxp+rbUI4cAtA05LHhZLpPJyOENfv/996ZvSz1yCEDbkENyqBY5BNC1kENyqBY5BNC1kENyqBY5BNC1kENty+FvKdH7xXS3sf1ubzfkEEDXcidy6Otisn5A3WdolSi8UhHzQ5lfWpWmX6t6dzSHV49uj9iyJzVbLgzNRj4+x9VlvM2djuzxOKcgEbxj4cjb2w05BNC13LEcVsesvv6CEAMHGARPveefPatjdlx/IUPTr1adO5fDkuNxL685PyPolWdszYQ8P3lTUETerMg3Jlnp3cnXQw4BoA3udA6VZN/4dJt+vdxmc9k5IaY/bRxjp2dtIERF9bHjZc675edqHmJeGXlNz7Of4sO38HL5/A/KdisfPH2S0ca/6A+Uti+vSvpv2VOJFe072juWwzOxzwdlukQETzSrXVCWGjr/gx5rolxtpVSe+Sz8g89SL5ULWb9xz/q+OEkxa8xL9H/p18lvDEgJ3Z5aLIyHTXttxZyhylFcPbotNDLxRKHcwHz4bL8lC4YZKZZWFqXGvxv67ZkSYTT06ZdWuNj10COHANAmHZJD8c+5Jh8Prgp9s8RvjNHVKfqXT/wxY2fl2FlGMSN1j/1w/bHvqmqOr5468cf8nXLxuHHSBL1zR64/8m2VaNi+avo/um0cKj75+Pr8zPYc7Z3KoaJtyY9Frp5t3XRdaXKId5Txkg887IzFpS9XLv90SOC2RYOVD4nLner7jptdD9Xlv+3y9Pnf2BC/BYOMRF5K6Mr9Q4MDZ1jKT8QsCzo3PeyNaf1KsrauWZXy6NrIWfeRQwBoi47Jofhr9+qHhbSkcLGpr2HFUxGlSYql+ju8jf5eIbfZ9MffpYdYV/q9XRqqWG7wn38ZPpJT1iO+fH2j7bv9skom/lc8/Kv2HO2dzOFP4zdJ3brFhrm7gxb/8NjmNZOsGj+kfnlujNvK4pe2+zgY1D5CXiLNHUVq0PPbh4aFPnN/452QQwBog47NYfnAus41bKmsoFCfQyHdmGjYaOentCKHJWeTYz/clnyqtPaNsF148xzapa7w3f9Y6Dt/7d1oF4rsJTZaUrMTcggAbdCxB0vl9m3IYWG5zuayO/cOaOBgaVlq6KLwExOVB0X1bjk7bCaH+b4f+o43FU2Wk0MAaKUOPpXGsw0HS7tXvBBWGnPH3gENnEpj3ih7mQm+S49Pa9XB0vIymUF5StDzH/UNjnId1vhpySEAtEFHX2iheirN9G4xf9FrOJVGXQ4HjjU6Okn/6uky58/LxcOG68foJkWXvtmuo+3oCy2CJ1kVK0rWY8UGbwejq8e3R0QlpprPaSaHViqn0pTnpEQE1pxKU3ri/YCg3yaH+DvZGMtzj21PFnOecZCRQwBoi464DL+4IuZAw2X4N73QQl0OheqFFtKuCuQrP/8j8kp7jrbjLsOf/IK3i13NRYe5UhvfT7lQaTR0tp+H6SdLk0ZtXj/tpjlUvdCiz9jnX3luxqDGF1rIZcb3OyzwUi4nhwDQBvySNm37JW3thBwC6FrIITlUixwC6FrIITlUixwC6FrIITlUixwC6FrIITlUixwC6FrIITlUixwC6FrIITlUixwC6Fqkz/0BmyoL/tD0ODSkl2F1hlulvr5+0xwaGRmpLUFXUFVVVVhY2PRtqUcOAWgb6XM/Lq1q1Q/Vv3e9IkotfG1s5YIHdaTPfV1d3RtyKJXgnnvu6YJFlFpYWloql8ubvi31yCEALSR9/FVWVkr/rVbS9HA6jo6S9IkvlU/6L29LS96WGuQQgBaqVqHpsXQ0HRW8LS15W2qQQwBaqwt+6Ndo/nAob4ta5BAAAHIIAAA5BABA1ORwQ1iY+4svanokAABoTPT77+uEvfNOuUQur5T+pzwBV9OjAgDgjtPR0dHT1dWTyQyk/xkY/D/MCWKc3064jQAAAABJRU5ErkJggg=="},58348:(e,i,n)=>{n.d(i,{c:()=>o});const o=n.p+"assets/images/ExecutionServerAppTemplate1-fbc54e451175f6f6e40ff49dfed25672.png"},57556:(e,i,n)=>{n.d(i,{c:()=>o});const o=n.p+"assets/images/ExecutionServerAppTemplate3-583a80d914fb9cd3af64d94ed7ea2975.png"},15200:(e,i,n)=>{n.d(i,{c:()=>o});const o=n.p+"assets/images/ExecutionServerSelectorAWSAppTemplate-26a8a1cd84ee071ec5a984d2b7bda9ba.png"},4552:(e,i,n)=>{n.d(i,{I:()=>l,M:()=>t});var o=n(11504);const r={},s=o.createContext(r);function t(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);