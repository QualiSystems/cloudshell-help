"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[83528],{10460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=t(17624),i=t(4552);const s={sidebar_position:4},r="OpenStack Known Limitations",l={id:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-known-limitations",title:"OpenStack Known Limitations",description:"Take the following under consideration when setting up OpenStack App deployment in CloudShell.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-known-limitations.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-known-limitations",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-known-limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-known-limitations.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Add an OpenStack App Template",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-an-openstack-app-template"},next:{title:"VMware vCenter Integration and Configuration",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/"}},d={},a=[];function p(e){const n={h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"openstack-known-limitations",children:"OpenStack Known Limitations"}),"\n",(0,o.jsx)(n.p,{children:"Take the following under consideration when setting up OpenStack App deployment in CloudShell."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OpenStack networking model"}),": OpenStack networking is not a Pure L2 model where ports are attached to switches and VLANs. This is more of an L2/L3 hybrid where each L2 network (broadcast domain) is also associated with an L3 Subnet. In CloudShell, this model is implemented using segmentation ID as VLAN or VxLAN."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Access/Trunk VLANs"}),": Currently, only ",(0,o.jsx)(n.strong,{children:"Access"})," mode is supported. In other words, end hosts are not VLAN-aware. VLAN trunking support is not present right now."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Attaching VLAN to vNIC"}),": Support for selecting a VLAN to attach to a vNIC does not exist right now due to limitations with the hybrid L2/L3 model."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VM access using keypairs"}),": Currently, username/password access to OpenStack instances is supported. Keypairs are currently not supported."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Hotplug interfaces"}),": CloudShell uses udev rules for auto detecting interfaces on the deployed OpenStack instances. Therefore, make sure the instance image has udev support and 'cloud-init' installed and enabled. Note that most of the standard cloud images have built-in udev support."]}),"\n",(0,o.jsx)(n.p,{children:"To use ubuntu images, the 'GNOME NetworkManager' service must be disabled."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"App network CIDRs"}),": In CloudShell's implementation, support for /24 CIDRs is provided. This might limit the number of supported hosts on a subnet to 255."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var o=t(11504);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);