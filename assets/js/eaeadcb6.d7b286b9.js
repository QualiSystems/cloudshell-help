"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[71396],{92196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(17624),r=n(4552);const i={sidebar_position:8,sidebar_label:"vCenter VM From Image",hide_table_of_contents:!0},o="vCenter VM From Image Deployment Path Attributes",d={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-image-dp-attributes",title:"vCenter VM From Image Deployment Path Attributes",description:"The following attributes would be used to define the vCenter VM From Image:",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-image-dp-attributes.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-image-dp-attributes",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-image-dp-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-image-dp-attributes.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"vCenter VM From Image",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"vCenter Deploy VM From Linked Clone",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-link-clone-vm-dp-attributes"},next:{title:"vCenter VM From Template",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/vcenter-clone-template-dp-attributes"}},l={},a=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"vcenter-vm-from-image-deployment-path-attributes",children:"vCenter VM From Image Deployment Path Attributes"}),"\n",(0,s.jsx)(t.p,{children:"The following attributes would be used to define the vCenter VM From Image:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Attribute"}),(0,s.jsx)("th",{children:"vCenter shell version"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Cloud Provider"}),(0,s.jsx)("td",{children:"All"}),(0,s.jsx)("td",{children:"Name of the vCenter cloud provider resource to be used"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"vCenter Image"}),(0,s.jsx)("td",{children:"All"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Full path to the vCenter OVF image file, relative to the datacenter. For example: ",(0,s.jsx)(t.code,{children:"My-OVF-Images/Image.ovf"})]}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Path must be accessible to all execution servers. OVF tool must be installed on all execution servers."})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"vCenter Name"}),(0,s.jsx)("td",{children:"All"}),(0,s.jsx)("td",{children:"Name of the vCenter resource to be used"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"vCenter Image Arguments"}),(0,s.jsx)("td",{children:"All"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"(Optional) vCenter-specific arguments to use when deploying the virtual machine."}),(0,s.jsx)(t.p,{children:"Example for OVF:"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"--allowExtraConfig --prop:Hostname=ASAvtest --prop:HARole=Standalone --prop:SSHEnable=True --prop:DHCP=True --net:Management0-0='Office LAN 41' --net:GigabitEthernet0-0='VLAN_access_101'"})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Behavior During Save"}),(0,s.jsx)("td",{children:"All"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["(Applies to the ",(0,s.jsx)(t.strong,{children:"Save and Restore"})," paid add-on) The VM's state while the sandbox is being saved. Options are ",(0,s.jsx)(t.strong,{children:"Remain Powered On"})," and ",(0,s.jsx)(t.strong,{children:"Power Off"}),"."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Inherit"}),": (Default) Uses the setting defined on the vCenter cloud provider resource"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Remain Powered On"}),": The VM will remain powered on during the saving state."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Power Off"}),": If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save."]}),"\n"]}),(0,s.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The value configured here overrides the configuration in the vCenter cloud provider resource, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource",children:"Add VMware vCenter Cloud Provider Resource"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save."}),"\n"]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Saved Sandbox Storage"}),(0,s.jsx)("td",{children:"All"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["(Applies to the ",(0,s.jsx)(t.strong,{children:"Save and Restore"})," paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See ",(0,s.jsx)(t.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/save-sandbox",children:"Save a Sandbox"})," for more information."]}),(0,s.jsxs)(t.p,{children:["For storage purposes, these VM clones can be stored in a different data storage than the one configured in the ",(0,s.jsx)(t.strong,{children:"VM\xa0Storage"})," attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1."]}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The value configured here overrides the configuration in the vCenter cloud provider resource, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource",children:"Add VMware vCenter Cloud Provider Resource"}),"."]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Customization Spec"}),(0,s.jsxs)("td",{children:["2",(0,s.jsx)("sup",{children:"nd"})," Gen only"]}),(0,s.jsx)("td",{children:"Name of the vSphere VM Customization Specification to apply to the App's VM."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Hostname"}),(0,s.jsxs)("td",{children:["2",(0,s.jsx)("sup",{children:"nd"})," Gen only"]}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"(Only applies to Windows and Linux VMs) The hostname to set on the VM."}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.strong,{children:"Customization Spec"})," is specified, the value specified in the ",(0,s.jsx)(t.strong,{children:"Hostname"})," attribute will be used. If ",(0,s.jsx)(t.strong,{children:"Customization Spec"})," is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a password in the App resource page"]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Private IP"}),(0,s.jsxs)("td",{children:["2",(0,s.jsx)("sup",{children:"nd"})," Gen only"]}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:'(Only applies to Windows and Linux VMs) The private static IP to set on the first vNIC of the VM. If there\'s a default gateway, specify it after the private IP. For example: "192.168.4.124:80.114.1.87" where 80.114.1.87 is the default gateway'}),(0,s.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'If there is no gateway, the .1 IP of the same subnet will be used as the gateway. So, for private IP "192.168.4.124", gateway "192.168.4.1" will be used.'}),"\n",(0,s.jsx)(t.li,{children:'It is also possible to provide a subnet mask here. For example: "192.168.4.124/24:80.114.1.87"'}),"\n",(0,s.jsxs)(t.li,{children:["If ",(0,s.jsx)(t.strong,{children:"Customization Spec"})," is specified, the value specified in the ",(0,s.jsx)(t.strong,{children:"Private IP"})," attribute will be used."]}),"\n",(0,s.jsxs)(t.li,{children:["If ",(0,s.jsx)(t.strong,{children:"Customization Spec"})," is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a ",(0,s.jsx)(t.strong,{children:"Password"})," in the ",(0,s.jsx)(t.strong,{children:"App resource"})," page."]}),"\n",(0,s.jsxs)(t.li,{children:["If ",(0,s.jsx)(t.strong,{children:"Customization Spec"})," is specified, the value specified in the ",(0,s.jsx)(t.strong,{children:"Private IP"})," attribute will be used. If ",(0,s.jsx)(t.strong,{children:"Customization Spec"})," is not specified, a new one will be created for the VM. For Windows VMs, make sure to specify a ",(0,s.jsx)(t.strong,{children:"Password"})," in the ",(0,s.jsx)(t.strong,{children:"App resource"})," page."]}),"\n"]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"CPU"}),(0,s.jsxs)("td",{children:["2",(0,s.jsx)("sup",{children:"nd"})," Gen only"]}),(0,s.jsx)("td",{children:"Number of CPU core s to configure on the VM."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"RAM"}),(0,s.jsxs)("td",{children:["2",(0,s.jsx)("sup",{children:"nd"})," Gen only"]}),(0,s.jsx)("td",{children:"Amount of RAM (GB) to configure on the VM."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"HDD"}),(0,s.jsxs)("td",{children:["2",(0,s.jsx)("sup",{children:"nd"})," Gen only"]}),(0,s.jsx)("td",{children:"Allows to add/edit hard disk size to the VM. The syntax is semi-colon separated disk pairs 'Hard Disk Label: Disk Size (GB)'. For example: 'Hard Disk 1:100;Hard Disk 2:200'. Short-hand format is also valid: '1:100;2:200'."})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>o});var s=n(11504);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);