"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[79520],{85200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(17624),i=t(4552);const o={},r="Subnet Connectivity",l={id:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index",title:"Subnet Connectivity",description:"In CloudShell 9.1, subnets are supported out-of-the-box for AWS EC2 and Azure.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity",slug:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Define the Resource Connections of the Switch or Patch Panel",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel"},next:{title:"Subnet Connectivity - Points to Consider",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider"}},c={},d=[{value:"How CloudShell creates subnet networks",id:"how-cloudshell-creates-subnet-networks",level:2},{value:"Associate the Subnet service family to the domain categories",id:"associate-the-subnet-service-family-to-the-domain-categories",level:2},{value:"Customize the Subnet service model",id:"customize-the-subnet-service-model",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"subnet-connectivity",children:"Subnet Connectivity"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"In CloudShell 9.1, subnets are supported out-of-the-box for AWS EC2 and Azure."})}),"\n",(0,s.jsxs)(n.p,{children:["This article explains how to configure CloudShell's ",(0,s.jsx)(n.strong,{children:"Subnet"})," service to enable the creation of multiple subnets in a single sandbox."]}),"\n",(0,s.jsx)(n.p,{children:"During the sandbox's setup, CloudShell creates the subnets in the public cloud and during App deployment, each App's VM is connected to the appropriate subnets. Subnet-based connectivity supports connections involving public cloud Apps (peer-to-peer and many-to-many)."}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["By default, CloudShell creates a subnet for every sandbox that has public cloud Apps. If additional subnets are required, the blueprint designer can add ",(0,s.jsx)(n.strong,{children:"Subnet"})," services to the blueprint and/or create peer-to-peer connections between AWS/Azure Apps. Note that if additional subnets are used, the default subnet will not be created in the sandbox."]}),"\n",(0,s.jsx)(n.li,{children:"CloudShell creates the necessary route tables in AWS/Azure."}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:"To use subnets in CloudShell, the system administrator needs to perform the following configurations:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/#associate-the-subnet-service-family-to-the-domain-categories",children:"Associate the Subnet service family to the domain categories"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/#customize-the-subnet-service-model",children:"Customize the Subnet service model"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-cloudshell-creates-subnet-networks",children:"How CloudShell creates subnet networks"}),"\n",(0,s.jsx)(n.p,{children:"When a sandbox is deployed, CloudShell uses the cloud provider resource of the Apps to create the defined subnets. If no subnets are specified, a single default subnet is created for the sandbox's Apps. However, if the sandbox's blueprint includes Subnet services and/or peer-to-peer connections between Apps, CloudShell will create a dedicated subnet for each, allocating the service's defined IPs for the duration of the sandbox. Note that for each peer-to-peer connection, CloudShell will create a 16 IP subnet."}),"\n",(0,s.jsx)(n.h2,{id:"associate-the-subnet-service-family-to-the-domain-categories",children:"Associate the Subnet service family to the domain categories"}),"\n",(0,s.jsxs)(n.p,{children:["To expose the Subnet service in the ",(0,s.jsx)(n.strong,{children:"Apps / Services"})," catalog of a specific domain, you must associate the service family to each desirable domain's service category. For information about creating service categories for domains, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/configuring-services#creating-a-service-catalog-category",children:"Creating a service catalog category"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To associate the Subnet service to the domain category:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["As system administrator, log into ",(0,s.jsx)(n.strong,{children:"Resource Manager Client"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Admin"})," ribbon, click ",(0,s.jsx)(n.strong,{children:"Resource Families"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Resource Families"})," explorer is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Virtual Network"})," service family."]}),"\n",(0,s.jsxs)(n.p,{children:["The family's ",(0,s.jsx)(n.strong,{children:"Parameters"})," pane is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Categories"})," tab."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Select Category"})," dialog box is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the domain category. To select multiple categories, press the ",(0,s.jsx)(n.strong,{children:"[Shift]"})," key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"customize-the-subnet-service-model",children:"Customize the Subnet service model"}),"\n",(0,s.jsxs)(n.p,{children:["This section explains how to customize the default settings of the Subnet service and control which settings can be changed by the user in the blueprint diagram. To learn how to add a subnet to a blueprint and set the service's attribute values, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/services",children:"Services in Blueprints"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To customize a Subnet preset's attributes:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Resource Families"})," explorer, open the ",(0,s.jsx)(n.strong,{children:"Virtual Network"})," service family and click the Subnet service model. Alternatively, copy the service model to customize a separate preset."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Parameters"})," pane is displayed to the right of the ",(0,s.jsx)(n.strong,{children:"Resource Families"})," explorer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Attributes"})," tab and configure the required attributes:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Allocated CIDR"}),(0,s.jsx)(n.td,{children:"(Read only attribute) This attribute stores the CIDR allocated to the subnet by the sandbox. The allocated CIDR is based on the service's Subnet Size."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Public"}),(0,s.jsx)(n.td,{children:"Determines if the subnet is connected to the internet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"QnQ"}),(0,s.jsxs)(n.td,{children:["Sets the Subnet connection to be in QinQ mode. Default is ",(0,s.jsx)(n.strong,{children:"False"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Subnet Id"}),(0,s.jsx)(n.td,{children:"Read only attribute that displays the allocated subnet ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Subnet Size"}),(0,s.jsxs)(n.td,{children:["Defines the possible sizes of this subnet (block size of the subnet CIDR). Possible values: 16, 32, 64, 128 (corresponding to block sizes of /28, /27, /26 and /25). The maximum VPC IP range is 256 IPs (/24), and cannot be changed in CloudShell 8.2.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," Since each cloud provider has a few IPs in each subnet reserved for networking services, the actual number of Apps that can be added to a subnet is lower than the number set in the subnet size attribute. Currently in AWS, 5 IPs are reserved."]})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider",children:"Subnet Connectivity - Points to Consider"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/",children:"AWS Integration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/",children:"Microsoft Azure Integration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Managing App Templates"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/intro/features/services",children:"Services Overview"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/intro/features/apps-overview",children:"Apps Overview"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/",children:"Virtual Network Connectivity"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/connect-resources-and-apps",children:"Connect Resources and Apps"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var s=t(11504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);