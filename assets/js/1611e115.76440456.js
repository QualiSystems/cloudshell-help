"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[10344],{98492:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=i(17624),t=i(4552);const r={sidebar_position:3},s="Managing Private Cloud Apps in Domains",l={id:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",title:"Managing Private Cloud Apps in Domains",description:"The procedures in this article apply to Apps hosted on a private cloud provider, like vCenter or OpenStack. For public cloud Apps like AWS EC2 or Azure, see Managing Public Cloud Apps in Domains.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell",slug:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add a vCenter App Template",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template"},next:{title:"Kubernetes Integration",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/"}},d={},a=[{value:"Create a cloud provider resource set to the domain",id:"create-a-cloud-provider-resource-set-to-the-domain",level:2},{value:"Configure the Execution Server to support Ansible operations",id:"configure-the-execution-server-to-support-ansible-operations",level:2},{value:"Associate the Execution Server Selector attribute to the deployed App&#39;s family",id:"associate-the-execution-server-selector-attribute-to-the-deployed-apps-family",level:2},{value:"Associate the execution servers to the domain",id:"associate-the-execution-servers-to-the-domain",level:2},{value:"Associate the App&#39;s deployment to the domain",id:"associate-the-apps-deployment-to-the-domain",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["The procedures in this article apply to Apps hosted on a private cloud provider, like vCenter or OpenStack. For public cloud Apps like AWS EC2 or Azure, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"In order to improve performance and stability in CloudShell deployments that include multiple geographically distributed sites, administrators need to configure the deployment process of the App to be carried out in the domain of the cloud provider (i.e. configure the App to be deployed using the execution server closest to the lab in which the cloud provider resides)."}),"\n",(0,o.jsxs)(n.p,{children:["This is done by associating the App and cloud provider to the domain, to make sure domain users use the Apps and cloud providers allocated to their domain, and setting the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute on the execution server, cloud provider resource and App, and giving it the same value on these elements to ensure the actual drivers will run physically near the cloud provider."]}),"\n",(0,o.jsx)(n.p,{children:"This is a five-step process:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains#create-a-cloud-provider-resource-set-to-the-domain",children:"Create a cloud provider resource set to the domain"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains#configure-the-execution-server-to-support-ansible-operations",children:"Configure the Execution Server to support Ansible operations"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains#associate-the-execution-server-selector-attribute-to-the-deployed-apps-family",children:"Associate the Execution Server Selector attribute to the deployed App's family"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains#associate-the-execution-servers-to-the-domain",children:"Associate the execution servers to the domain"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains#associate-the-apps-deployment-to-the-domain",children:"Associate the App's deployment to the domain"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-cloud-provider-resource-set-to-the-domain",children:"Create a cloud provider resource set to the domain"}),"\n",(0,o.jsxs)(n.p,{children:["When creating the cloud provider resource, you need to specify the required domain in the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"A cloud provider resource should be set to one domain only. For multiple domains, create additional cloud provider resources."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To set the cloud provider resource to the domain:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"As administrator in the required CloudShell domain, create the cloud provider resource."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Resource Discovery Information"})," page, in the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"}),' attribute, specify the name of the domain. For example, "London".']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(71736).c+"",width:"802",height:"715"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Complete the resource creation process."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-execution-server-to-support-ansible-operations",children:"Configure the Execution Server to support Ansible operations"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This section is only required for Ansible configuration management."})}),"\n",(0,o.jsxs)(n.p,{children:["To use Ansible to install and configure applications on Apps, the system administrator needs to perform several configurations on the Linux-based Execution Server that will be used to run the Ansible operations on the App's deployed VMs. For additional information, see ",(0,o.jsx)(n.a,{href:"../../../devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps/",children:"Ansible Playbook Development for Apps"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"associate-the-execution-server-selector-attribute-to-the-deployed-apps-family",children:"Associate the Execution Server Selector attribute to the deployed App's family"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To associate the Execution Server Selector attribute to the deployed App's family:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Associate the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute to the deployed App's family. For example, ",(0,o.jsx)(n.strong,{children:"Generic App Family"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["After you associate the attribute to the deployed App's family, make sure the ",(0,o.jsx)(n.strong,{children:"Attributes"})," list of the family displays the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute. For example:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(65664).c+"",width:"580",height:"363"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"associate-the-execution-servers-to-the-domain",children:"Associate the execution servers to the domain"}),"\n",(0,o.jsxs)(n.p,{children:["This procedure explains how to associate, to the domain, the execution servers to be used to deploy Apps on the cloud provider to the domain (usually the execution servers that are physically closest to location of the cloud provider.) The ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute must have the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," rule enabled."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To associate an execution server to the domain:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In CloudShell Portal, click ",(0,o.jsx)(n.strong,{children:"Manage"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Manage"})," dashboard is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the left sidebar, click ",(0,o.jsx)(n.strong,{children:"Execution Servers"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the left pane, under ",(0,o.jsx)(n.strong,{children:"Execution Servers"}),", click ",(0,o.jsx)(n.strong,{children:"Servers"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The execution server list is displayed."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click the name of a server."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Attributes"})," dialog box is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Select the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," check box and enter the name of the domain. For example, London:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(75640).c+"",width:"602",height:"261"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Repeat these steps to associate additional execution servers to the domain."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"associate-the-apps-deployment-to-the-domain",children:"Associate the App's deployment to the domain"}),"\n",(0,o.jsx)(n.p,{children:"To configure the App to be deployed in a specific domain, you need to associate the App's family to the domain, as well as the domain category to make it available to members of that domain. This domain both includes the App's cloud provider and is closest to the execution servers that will deploy the App."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To associate an App's deployment to a domain:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Manage"})," dashboard, in the left sidebar, click ",(0,o.jsx)(n.strong,{children:"Apps"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Apps"})," page is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a new App or edit an existing one, as explained in ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Managing App Templates"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The App's configuration wizard is displayed."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To make the App available to members of this domain, from the ",(0,o.jsx)(n.strong,{children:"Categories"})," dropdown list, select the categories associated to the domain. For details about creating domain categories, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-categories#managing-domain-categories",children:"Managing domain categories"}),"."]}),"\n",(0,o.jsx)(n.p,{children:'For example, "London":'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(97752).c+"",width:"722",height:"382"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If this is a new App, in the ",(0,o.jsx)(n.strong,{children:"Deployment Paths"})," page, create a deployment path for the cloud provider. Make sure to select the cloud provider resource you created in the required CloudShell domain."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"App Resource"})," page, in the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute, specify the value you specified in the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"}),' attribute of the cloud provider resource. For example, "London":']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(75764).c+"",width:"722",height:"220"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-dashboard-overview",children:"Manage Dashboard Overview"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Managing App Templates"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/intro/features/apps-overview",children:"Apps Overview"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},75640:(e,n,i)=>{i.d(n,{c:()=>o});const o="data:image/png;base64,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"},65664:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/DeployedAppParameters-85a5f4ee96bb0ba28a6f2a5c57953d1c.png"},75764:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/ExecutionServerAppTemplate4-e6d89a30508c44983f98a85964680b3a.png"},97752:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/ExecutionServerAppTemplate5-45a3d08d3eef86ef044f718deacdebfd.png"},71736:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/ExecutionServerSelectorNewResource-fd93529c67a6fc5215c0c4ed924d9930.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>s});var o=i(11504);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);