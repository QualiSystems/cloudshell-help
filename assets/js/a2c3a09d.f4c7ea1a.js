"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[10392],{5136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(17624),s=n(4552);const o={sidebar_position:5,sidebar_label:"OpenStack Deploy Glance Image 2G",hide_table_of_contents:!0},l="OpenStack Deploy Glance Image 2G Deployment Path Attributes",i={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/openstack-glance-dp-attributes",title:"OpenStack Deploy Glance Image 2G Deployment Path Attributes",description:"The following attributes would be used to define the OpenStack Deploy Glance Image 2nd Gen:",source:"@site/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/openstack-glance-dp-attributes.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/openstack-glance-dp-attributes",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/openstack-glance-dp-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/openstack-glance-dp-attributes.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"OpenStack Deploy Glance Image 2G",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Azure VM From Gallery Image 2G",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-galery-dp-attributes"},next:{title:"vCenter Clone VM From VM",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-vm-dp-attributes"}},r={},d=[];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"openstack-deploy-glance-image-2g-deployment-path-attributes",children:"OpenStack Deploy Glance Image 2G Deployment Path Attributes"}),"\n",(0,a.jsx)(t.p,{children:"The following attributes would be used to define the OpenStack Deploy Glance Image 2nd Gen:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsxs)("thead",{children:[(0,a.jsx)("th",{children:"Attribute"}),(0,a.jsx)("th",{children:"Description"})]}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Cloud Provider"}),(0,a.jsx)("td",{children:"Name of the OpenStack cloud provider resource to be used"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Image ID"}),(0,a.jsxs)("td",{children:["UUID of the image to be used to create the App's Openstack instance. Can be found on Portal in ",(0,a.jsx)(t.strong,{children:"Compute>Images"}),">select the image>",(0,a.jsx)(t.strong,{children:"ID"})," value."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Instance Flavor"}),(0,a.jsxs)("td",{children:[(0,a.jsx)(t.p,{children:'(Optional) OpenStack instance Flavor. The instance flavor determines the CPU, memory and networking capacity of the instance. For example: "m1.tiny" or "m1.xlarge".'}),(0,a.jsxs)(t.p,{children:["Can be found on Portal in ",(0,a.jsx)(t.strong,{children:"Compute"}),">",(0,a.jsx)(t.strong,{children:"Flavors"}),">select the flavor>",(0,a.jsx)(t.strong,{children:"Flavor Name"}),"."]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Add Floating IP"}),(0,a.jsxs)("td",{children:[(0,a.jsxs)(t.p,{children:["Set to ",(0,a.jsx)(t.strong,{children:"True"})," to use a static (public) IP address to communicate with the instance from outside the virtual network. Default value is ",(0,a.jsx)(t.strong,{children:"False"}),"."]}),(0,a.jsx)(t.p,{children:"In most cases the floating IP address is associated with the instance until the instance is stopped or terminated, after which the floating IP is no longer available. You can reserve a floating IP in OpenStack to ensure that the IP is available to your subscription at any time."})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Affinity Group ID"}),(0,a.jsxs)("td",{children:[(0,a.jsx)(t.p,{children:'(Optional) UUID of the affinity group ("nova server-group") to which the instance will be associated. Affinity groups determine on which compute nodes to place instances.'}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"To support the deployment of 'all' OpenStack instances using the same hypervisor, affinity groups with the 'affinity' policy are used."})})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Availability Zone"}),(0,a.jsx)("td",{children:"(Optional) Name of the availability zone to which the instance will be associated. Availability zones are used to group network nodes to enhance the availability of network resources."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Floating IP Subnet ID"}),(0,a.jsx)("td",{children:"UUID of the subnet to use for Floating IPs."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Auto UDEV"}),(0,a.jsxs)("td",{children:["Enable Linux udev rules to allow new interfaces to be recognized by the OS automatically. When using Windows machines, this attribute should be set to ",(0,a.jsx)(t.strong,{children:"False"}),"."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"User Data"}),(0,a.jsxs)("td",{children:["Custom user data to pass to the deployed App instance. For example, some metadata or post-installation script. For details, see this official OpenStack documentation page: ",(0,a.jsx)(t.a,{href:"https://docs.openstack.org/nova/rocky/user/user-data.html",children:"https://docs.openstack.org/nova/rocky/user/user-data.html"}),"."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Inbound Ports"}),(0,a.jsx)("td",{children:(0,a.jsxs)(t.p,{children:["Semi-colon spearated list of CIDRs, ports and protocols on which to open inbound traffic from outside of the sandbox.",(0,a.jsx)(t.br,{}),"\n","The syntax is ",(0,a.jsx)(t.code,{children:"[cidr:][protocol:]port-or-port-range"}),". For example: ",(0,a.jsx)(t.code,{children:"0.0.0.0/0:tcp:80;443;udp:200-220"}),".",(0,a.jsx)(t.br,{}),"\n",'Default CIDR is "0.0.0.0/0". Default protocol is "tcp".']})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Private IP"}),(0,a.jsx)("td",{children:"The IP will be set for the management interface. The IP should be inside the management network ranges. OpenStack doesn't allow to use the same IP address for different instances."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>l});var a=n(11504);const s={},o=a.createContext(s);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);