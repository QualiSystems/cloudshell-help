"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[40848],{92304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(17624),l=n(4552);const i={sidebar_position:13},a="Shells that Load a Static VM",o={id:"devguide/reference/shells-that-load-static-vm",title:"Shells that Load a Static VM",description:"In this article, we will learn how to customize a shell template to load a static VM into CloudShell. A static VM is a VM whose lifecycle is not managed through CloudShell sandboxes. For example, a VM that provides critical services or data, like a database, switch or bridge. For additional information, see Static VMs Overview.",source:"@site/versioned_docs/version-2023.3/devguide/reference/shells-that-load-static-vm.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/shells-that-load-static-vm",permalink:"/cloudshell-help/devguide/reference/shells-that-load-static-vm",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/reference/shells-that-load-static-vm.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Custom Sandbox Metadata",permalink:"/cloudshell-help/devguide/reference/custom-sandbox-metadata"},next:{title:"Intellisense in Shells and Scripts (using Docstrings)",permalink:"/cloudshell-help/devguide/reference/intellisense-in-shells-and-scripts"}},r={},d=[{value:"Advanced: Prompting the user for inputs in the Resource Discovery page",id:"advanced-prompting-the-user-for-inputs-in-the-resource-discovery-page",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"shells-that-load-a-static-vm",children:"Shells that Load a Static VM"}),"\n",(0,s.jsxs)(t.p,{children:["In this article, we will learn how to customize a shell template to load a static VM into CloudShell. A static VM is a VM whose lifecycle is not managed through CloudShell sandboxes. For example, a VM that provides critical services or data, like a database, switch or bridge. For additional information, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/intro/features/static-vms",children:"Static VMs Overview"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Static VMs are viewed as resources by CloudShell. The only difference between a static VM resource and a regular resource is that the static VM needs to find the VM in the cloud provider and create a link between the CloudShell resource and the cloud provider resource, thus giving it the cloud provider shell\u2019s capabilities. This is done by modifying the shell\u2019s\xa0",(0,s.jsx)(t.strong,{children:"get_inventory"}),"\xa0command to load the VM\u2019s details into CloudShell, using a CloudShell cloud provider resource to access the cloud provider server."]}),"\n",(0,s.jsxs)(t.p,{children:["Let\u2019s start by creating a new shell project. Static VMs can only be modeled in shells of type \u2018Application\u2019, so we\u2019ll use the\xa0",(0,s.jsx)(t.code,{children:"deployed_app"}),"\xa0shell template. In command-line, navigate to the folder in which you want to create the shell project and run the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"shellfoundry new my-static-vm --template gen2/deployed-app\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the shell\u2019s driver, we\u2019ll need to import the\xa0",(0,s.jsx)(t.code,{children:"ApiVMDetails"}),"\xa0class and the\xa0",(0,s.jsx)(t.code,{children:"jsonpickle"}),"\xa0package:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from cloudshell.shell.core.driver_context import ApiVmDetails, ApiVmCustomParam\nimport jsonpickle\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"You can remove ApiVmCustomParam from the import if you don\u2019t plan on setting custom parameters directly in the driver."})}),"\n",(0,s.jsxs)(t.p,{children:["Note that\xa0",(0,s.jsx)(t.code,{children:"ApiVMDetails"}),"\xa0is included in the\xa0",(0,s.jsx)(t.strong,{children:"cloudshell-shell-core"}),"\xa0package version 3.1.x and\xa0",(0,s.jsx)(t.strong,{children:"jsonpickle"}),"\xa0is not included in the Python standard library, so we\u2019ll need to add them both to the\xa0",(0,s.jsx)(t.strong,{children:"requirement.txt"}),"\xa0file as well:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"cloudshell-shell-core>=3.1.0,<3.2.0\njsonpickle==1.1.0\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As we said before, to load a static VM, the shell needs to return the\xa0",(0,s.jsx)(t.strong,{children:"ApiVmDetails"}),"\xa0in the\xa0",(0,s.jsx)(t.strong,{children:"get_inventory"}),"\xa0command\u2019s response. Here\u2019s an example implementation for loading a vCenter VM as a static VM:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def get_inventory(self, context):\n    \"\"\"\n    Will locate vm in vcenter and fill its uuid\n    :type context: cloudshell.shell.core.context.ResourceCommandContext\n    \"\"\"\n    # get stuff from my cloud provider\n    # ...\n    uuid = '42415d31-bc19-d317-2319-b52s55e8b542' # unique identifier of the VM\n    my_clp_name = 'vCenter resource' # cloudshell cloud provider resource name\n\n    vm_details = ApiVmDetails()\n\n    vm_details.UID = uuid\n    vm_details.CloudProviderName = my_clp_name\n\n    param1 = ApiVmCustomParam() # remove the \"param1\" lines if no custom params\n    param1.Name = 'param1'\n    param1.Value = 'value1'\n    vm_details.VmCustomParams = [param1]\n    str_vm_details = jsonpickle.encode(vm_details, unpicklable=False)\n\n    # return vm_details\n    autoload_atts = [AutoLoadAttribute('', 'VmDetails', str_vm_details)]\n    return AutoLoadDetails([], autoload_atts)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Make sure you pass the right details to the\xa0",(0,s.jsx)(t.strong,{children:"get_inventory"}),"\xa0command. Generally speaking, these are the CloudShell cloud provider resource (",(0,s.jsx)(t.code,{children:"my_clp_name"}),"\xa0variable) that will run the process and the VM\u2019s identification details (",(0,s.jsx)(t.code,{children:"uuid"}),"\xa0variable in our case). Note that for other cloud providers, different details may need to be passed in order to uniquely identify the VM. For example, a similar implementation for Azure might need the VM name and the resource group name."]}),"\n",(0,s.jsx)(t.p,{children:"Install the shell on CloudShell by running the following command-line from the shell project\u2019s root folder:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"shellfoundry install\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When creating the resource in CloudShell Portal\u2019s\xa0",(0,s.jsx)(t.strong,{children:"Inventory"}),"\xa0dashboard, specify \u201cna\u201d as the\xa0",(0,s.jsx)(t.strong,{children:"Address"}),"\xa0if you don\u2019t know the VM\u2019s address or if the VM has a dynamic one:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Shell Commands",src:n(18964).c+"",width:"624",height:"410"})}),"\n",(0,s.jsx)(t.p,{children:"In the CloudShell sandbox, the static VM will look like any other resource, with the correct live status icon (\u2018online\u2019 in this case):"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Shell Commands",src:n(24360).c+"",width:"268",height:"124"})}),"\n",(0,s.jsx)(t.h2,{id:"advanced-prompting-the-user-for-inputs-in-the-resource-discovery-page",children:"Advanced: Prompting the user for inputs in the Resource Discovery page"}),"\n",(0,s.jsx)(t.p,{children:"If you want to allow the admin to provide the details during resource discovery, you will need to dynamically pull them from the context. For illustration purposes, we will set an attribute called \u201cvCenter Name\u201d that will define the vCenter cloud provider resource to be used to load and power on/off the VM."}),"\n",(0,s.jsxs)(t.p,{children:["First, in the\xa0",(0,s.jsx)(t.code,{children:"shell-definition.yaml"}),", add the attribute as a discovery attribute. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"node_types:\n\n  vendor.resource.MyStaticVm:\n    derived_from: cloudshell.nodes.DeployedApp\n    properties:\n      vCenter Name:\n        type: string\n        tags: [setting, configuration]\n    capabilities:\n      auto_discovery_capability:\n        type: cloudshell.capabilities.AutoDiscovery\n        properties:\n          vCenter Name:\n            type: string\n            tags: [setting, configuration]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now, let\u2019s generate the shell\u2019s data model by running the following command-line from the shell\u2019s root folder:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"shellfoundry generate\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The data model file is created in the shell project\u2019s\xa0",(0,s.jsx)(t.strong,{children:"src"}),"\xa0folder and lists the shell\u2019s attributes and functions, including those that come with the shell\u2019s standard and custom ones, like our\xa0",(0,s.jsx)(t.strong,{children:"vCenter Name"}),"\xa0attribute."]}),"\n",(0,s.jsx)(t.p,{children:"In the driver, replace the following line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"my_clp_name = 'my_clp_resource_name'\n"})}),"\n",(0,s.jsx)(t.p,{children:"With this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"my_clp_name = context.resource.attributes['MyStaticVm.vCenter Name']\n"})}),"\n",(0,s.jsx)(t.p,{children:"And install the shell on CloudShell:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"shellfoundry install\n"})}),"\n",(0,s.jsx)(t.p,{children:"The resource\u2019s discovery page will look something like this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Shell Commands",src:n(23176).c+"",width:"624",height:"427"})})]})}function h(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},24360:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Shells-that-Load-a-Static_1_268x124-9245ac4983e273363536865ab249a897.png"},23176:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Shells-that-Load-a-Static_2_624x427-57702c0a9b4ecdce2277d2271461c31e.png"},18964:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Shells-that-Load-a-Static_624x410-5ffca3ce958ab22d201937f84b628f9b.png"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var s=n(11504);const l={},i=s.createContext(l);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);