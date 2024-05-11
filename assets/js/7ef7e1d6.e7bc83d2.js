"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[28856],{80784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(17624),i=t(4552);const o={sidebar_position:1},s="OpenStack Configuration Requirements",l={id:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-configuration-requirements",title:"OpenStack Configuration Requirements",description:"To enable CloudShell to deploy and manage the lifecycle of OpenStack instances, the following configurations and settings are required:",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-configuration-requirements.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-configuration-requirements",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-configuration-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-configuration-requirements.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"OpenStack Integration and Configuration",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/"},next:{title:"Add OpenStack Cloud Provider Resource",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-openstack-cloud-provider-resource"}},d={},a=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"openstack-configuration-requirements",children:"OpenStack Configuration Requirements"}),"\n",(0,r.jsx)(n.p,{children:"To enable CloudShell to deploy and manage the lifecycle of OpenStack instances, the following configurations and settings are required:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Requirement"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"OpenStack user"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Permissions required from the user specified in the OpenStack cloud provider resource:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"User should be admin on the project to enable the use of provider networks"}),"\n",(0,r.jsx)(n.li,{children:"Create instances"}),"\n",(0,r.jsx)(n.li,{children:"Create a network"}),"\n",(0,r.jsx)(n.li,{children:"Create a subnet"}),"\n",(0,r.jsx)(n.li,{children:"Access to images used for deployment"}),"\n"]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Quotas"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"The following quotas should be provided:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Number of Cores and Number of Instances: Important to set the same value for these quotas."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Neutron number of networks and ports: It is recommended to specify the maximum number of quotas."}),"\n",(0,r.jsx)(n.p,{children:"Typically, about 3-4 ports are required per instance and hence the port quota should be sufficient. Also, note that for each instance, a port on the CloudShell Management network utilizes ports from this quota."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'To use Server groups, you may need to increase the "server group members" quota. Note that a very high value for this quota along with an "anti-affinity" policy would mean so many different hosts should be available.'}),"\n"]}),"\n"]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Management Network"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"A network needs to be created to store instances deployed by CloudShell Apps:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Assign a subnet to the network."}),"\n",(0,r.jsxs)(n.li,{children:["Make sure the network is not ",(0,r.jsx)(n.strong,{children:"external"}),". Every instance will have a network port on the management network."]}),"\n",(0,r.jsxs)(n.li,{children:["Set the network's ",(0,r.jsx)(n.strong,{children:"shared"})," flag to ",(0,r.jsx)(n.strong,{children:"True"}),". The network will be shared by instances (that are deployed across different sandboxes and potentially different tenants/projects."]}),"\n",(0,r.jsx)(n.li,{children:"Make sure QualiX Server has a floating IP and is part of this network so that it can be accessed from external networks."}),"\n"]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Floating IP subnet network"}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The subnet network must be ",(0,r.jsx)(n.strong,{children:"external"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"The network should be \u201cflat\u201d \u2013 no need for segmentation."}),"\n",(0,r.jsx)(n.li,{children:"The network must be connected to a router."}),"\n",(0,r.jsx)(n.li,{children:"The floating IP is saved on the deployed app in the Public IP attribute"}),"\n"]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Supported releases"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"CloudShell supports the following OpenStack releases:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ocata"}),"\n",(0,r.jsx)(n.li,{children:"Pike"}),"\n",(0,r.jsx)(n.li,{children:"Queens"}),"\n",(0,r.jsx)(n.li,{children:"Rocky"}),"\n",(0,r.jsx)(n.li,{children:"Stein"}),"\n",(0,r.jsx)(n.li,{children:"Train"}),"\n",(0,r.jsx)(n.li,{children:"Ussuri"}),"\n",(0,r.jsx)(n.li,{children:"Victoria"}),"\n",(0,r.jsx)(n.li,{children:"Wallaby"}),"\n"]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Supported API versions"}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Nova API - Version 2 (tested and used features of base v2.0 - additional features supported by sub-releases 2.X are not used)"}),"\n",(0,r.jsx)(n.li,{children:"Neutron API - Version 2"}),"\n",(0,r.jsx)(n.li,{children:"Keystone API - Version 3"}),"\n"]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Provider networks"}),(0,r.jsxs)("td",{children:["OpenStack provider networks are shared across all projects in your OpenStack installation. Therefore, to avoid ID collisions, make sure the VLAN services that will be used for OpenStack VM connectivity do not have overlapping allocation ranges for the same pool name. For information about setting up VLAN services, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",children:"VLAN Connectivity"}),"."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Security Group"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"To enable remote connections to OpenStack instances from CloudShell Portal (via QualiX), the following ports should be open on the project's Default Security Group:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ICMP Open - (Required unless a policy prevents ICMP)"}),"\n",(0,r.jsx)(n.li,{children:"TCP Port 22 for SSH"}),"\n",(0,r.jsx)(n.li,{children:"TCP port 80/443 if running a web-server (Required if running web services that require external access)"}),"\n",(0,r.jsx)(n.li,{children:"TCP Port 3389 for RDP On Windows"}),"\n"]}),(0,r.jsx)(n.p,{children:"In addition, the QualiX Server VM must be assigned to the Project Security Group."}),(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["It is recommended to explicitly set the ",(0,r.jsx)(n.code,{children:"Remote"})," property of the rules created in the Project Security Group. If CIDR is set, use the CloudShell management network's CIDR, for example: 172.16.1.0/24. If a security group is set, use the CloudShell management security group."]})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The Project Security Group will be used for all OpenStack instances created by CloudShell."})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Default Security Group"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"To enable OpenStack instances to receive a floating IP, a default security group must be defined in the OpenStack project to be used by the cloud provider resource."}),(0,r.jsxs)(n.p,{children:["The default security group will be associated to all OpenStack instances that are deployed by Apps that use this cloud provider and have the ",(0,r.jsx)(n.strong,{children:"Add Floating IP"})," attribute set to ",(0,r.jsx)(n.strong,{children:"True"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VLAN Trunking"}),(0,r.jsxs)("td",{children:["(Applies to OpenStack Cloud Provider Shell version 1.2.0 and up) To allow CloudShell to create a new interface on the deployed App's VM for every VLAN service, make sure VLAN Trunking is enabled. For details, see this official OpenStack documentation page: ",(0,r.jsx)(n.a,{href:"https://docs.openstack.org/neutron/pike/admin/config-trunking.html",children:"https://docs.openstack.org/neutron/pike/admin/config-trunking.html"}),"."]})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var r=t(11504);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);