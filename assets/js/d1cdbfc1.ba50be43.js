"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25948],{55868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(17624),l=n(4552);const r={sidebar_position:11},s="Power off and Delete VM",i={id:"devguide/develop-custom-cloud-provider-shells/power-off-and-delete-vm",title:"Power off and Delete VM",description:"In this article, we\u2019ll learn how to implement the PowerOff and DeleteInstance commands, which shut down and delete the VM from the cloud provider, respectively.",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/power-off-and-delete-vm.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/power-off-and-delete-vm",permalink:"/devguide/develop-custom-cloud-provider-shells/power-off-and-delete-vm",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/power-off-and-delete-vm.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"App Deployment",permalink:"/devguide/develop-custom-cloud-provider-shells/app-deployment"},next:{title:"L2 Network Connectivity",permalink:"/devguide/develop-custom-cloud-provider-shells/l2-network-connectivity"}},c={},d=[{value:"PowerOff method",id:"poweroff-method",level:2},{value:"Signature",id:"signature",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Ports",id:"ports",level:4},{value:"Error handling",id:"error-handling",level:3},{value:"PowerOff method implementation",id:"poweroff-method-implementation",level:3},{value:"PowerOff implementation example",id:"poweroff-implementation-example",level:3},{value:"Return value",id:"return-value",level:3},{value:"DeleteInstance method",id:"deleteinstance-method",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Inputs",id:"inputs-1",level:3},{value:"Ports",id:"ports-1",level:4},{value:"DeleteInstance method implementation",id:"deleteinstance-method-implementation",level:3},{value:"DeleteInstance implementation example",id:"deleteinstance-implementation-example",level:3},{value:"Return value",id:"return-value-1",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"power-off-and-delete-vm",children:"Power off and Delete VM"}),"\n",(0,o.jsx)(t.p,{children:"In this article, we\u2019ll learn how to implement the PowerOff and DeleteInstance commands, which shut down and delete the VM from the cloud provider, respectively."}),"\n",(0,o.jsx)(t.h2,{id:"poweroff-method",children:"PowerOff method"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.em,{children:"PowerOff"}),"\xa0method shuts down (or powers off) the VM instance. It is run automatically as part of the sandbox\u2019s teardown, and can also be run manually by the sandbox end-user from the deployed App\u2019s commands pane. When\xa0",(0,o.jsx)(t.em,{children:"PowerOff"}),"\xa0completes, the green \u2018online\u2019 live status icon is replaced with a grey one on the App resource, indicating it is offline."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"}),"\xa0CloudShell sets the resource state to \u2018offline\u2019 if\xa0",(0,o.jsx)(t.em,{children:"PowerOff"}),"\xa0completed successfully."]}),"\n",(0,o.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"def PowerOff(self, context, ports)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"context"}),":\xa0",(0,o.jsx)(t.em,{children:"context"}),"\xa0is a\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180",children:"ResourceRemoteCommandContext"}),"\xa0object that contains:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["resource - resource configuration settings entered by the user when creating the Cloud Provider resource in the\xa0",(0,o.jsx)(t.strong,{children:"Inventory"}),"\xa0dashboard"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"remote_reservation \u2013 reservation details"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["remote_endpoints - will contain a single\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L38-L64",children:"ResourceContextDetails"}),"\xa0object which provides data for the operation."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(t.p,{children:["cloudshell/shell/core/driver_context.py ",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,o.jsx)(t.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'def __init__(self, connectivity, resource, remote_reservation, remote_endpoints):\n    self.connectivity = connectivity  # Connectivity details that can help connect to the APIs\n    """:type : ConnectivityContext"""\n    self.resource = resource  # The details of the resource using the driver\n    """:type : ResourceContextDetails"""\n    self.remote_reservation = remote_reservation  # The details of the remote reservation\n    """:type : ReservationContextDetails"""\n    self.remote_endpoints = remote_endpoints\n    """:type : list[ResourceContextDetails]"""\n'})}),"\n",(0,o.jsx)(t.h4,{id:"ports",children:"Ports"}),"\n",(0,o.jsx)(t.p,{children:"Legacy argument. Irrelevant for custom cloud providers."}),"\n",(0,o.jsx)(t.h3,{id:"error-handling",children:"Error handling"}),"\n",(0,o.jsxs)(t.p,{children:["If an error occurs during the\xa0",(0,o.jsx)(t.em,{children:"PowerOff"}),"\xa0operation, the command should raise an exception."]}),"\n",(0,o.jsx)(t.h3,{id:"poweroff-method-implementation",children:"PowerOff method implementation"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.em,{children:"PowerOff"}),"\xa0method should perform the following steps:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Retrieve the cloud provider resource\u2019s connection credentials"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Convert context deployed_app_json string to object"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Power off the deployed App resource"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"poweroff-implementation-example",children:"PowerOff implementation example"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(t.p,{children:["cloudshell/shell/core/driver_context.py ",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,o.jsx)(t.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"def PowerOff(self, context, ports):\n      \"\"\"\n      Will power off the compute resource\n      :param ResourceRemoteCommandContext context:\n      :param ports:\n      \"\"\"\n      with LoggingSessionContext(context) as logger, ErrorHandlingContext(logger):\n          self._log(logger, 'power_off_context', context)\n          self._log(logger, 'power_off_ports', ports)\n          cloud_provider_resource = L2HeavenlyCloudShell.create_from_context(context)\n          resource_ep =  context.remote_endpoints[0]\n          deployed_app_dict = json.loads(resource_ep.app_context.deployed_app_json)\n          vm_uid = deployed_app_dict['vmdetails']['uid']\n          HeavenlyCloudServiceWrapper.power_off(cloud_provider_resource, vm_uid)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"return-value",children:"Return value"}),"\n",(0,o.jsx)(t.p,{children:"None"}),"\n",(0,o.jsx)(t.h2,{id:"deleteinstance-method",children:"DeleteInstance method"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.em,{children:"DeleteInstance"}),"\xa0method powers off the VM, deletes the VM from the cloud provider and removes the App from the sandbox. It is run when removing the deployed App from the sandbox or during the sandbox\u2019s teardown."]}),"\n",(0,o.jsx)(t.h3,{id:"signature-1",children:"Signature"}),"\n",(0,o.jsx)(t.p,{children:"def DeleteInstance(self, context, ports)"}),"\n",(0,o.jsx)(t.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"context"}),":\xa0",(0,o.jsx)(t.em,{children:"context"}),"\xa0is a\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180",children:"ResourceRemoteCommandContext"}),"\xa0object that contains:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["resource - resource configuration settings entered by the user when creating the Cloud Provider resource in the\xa0",(0,o.jsx)(t.strong,{children:"Inventory"}),"\xa0dashboard"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"remote_reservation \u2013 reservation details"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["remote_endpoints- will contain a single\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py#L171-L180",children:"ResourceContextDetails"}),"\xa0object which provides data for the operation."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(t.p,{children:["cloudshell/shell/core/driver_context.py ",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,o.jsx)(t.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'def __init__(self, connectivity, resource, remote_reservation, remote_endpoints):\n    self.connectivity = connectivity  # Connectivity details that can help connect to the APIs\n    """:type : ConnectivityContext"""\n    self.resource = resource  # The details of the resource using the driver\n    """:type : ResourceContextDetails"""\n    self.remote_reservation = remote_reservation  # The details of the remote reservation\n    """:type : ReservationContextDetails"""\n    self.remote_endpoints = remote_endpoints\n    """:type : list[ResourceContextDetails]"""\n'})}),"\n",(0,o.jsx)(t.h4,{id:"ports-1",children:"Ports"}),"\n",(0,o.jsx)(t.p,{children:"Legacy argument. Obsolete for custom cloud providers."}),"\n",(0,o.jsx)(t.h3,{id:"deleteinstance-method-implementation",children:"DeleteInstance method implementation"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.em,{children:"DeleteInstance"}),"\xa0method should perform the following steps:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Retrieve the cloud provider resource\u2019s connection credentials."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Convert the\xa0",(0,o.jsx)(t.em,{children:"deployed_app_json"}),"\xa0context string to object."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Delete the VM instance from the cloud provider."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"deleteinstance-implementation-example",children:"DeleteInstance implementation example"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(t.p,{children:["src/driver.py ",(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py",children:"view"})," ",(0,o.jsx)(t.a,{href:"https://raw.githubusercontent.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/ea88bab874c42d69508ba5b2542e867c5b375d5f/src/driver.py",children:"raw"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"def DeleteInstance(self, context, ports):\n      \"\"\"\n      Will delete the compute resource\n      :param ResourceRemoteCommandContext context:\n      :param ports:\n      \"\"\"\n      with LoggingSessionContext(context) as logger, ErrorHandlingContext(logger):\n          self._log(logger, 'DeleteInstance_context', context)\n          self._log(logger, 'DeleteInstance_ports', ports)\n          cloud_provider_resource = L2HeavenlyCloudShell.create_from_context(context)\n          resource_ep =  context.remote_endpoints[0]\n          deployed_app_dict = json.loads(resource_ep.app_context.deployed_app_json)\n          vm_uid = deployed_app_dict['vmdetails']['uid']\n          HeavenlyCloudServiceWrapper.delete_instance(cloud_provider_resource, vm_uid)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"return-value-1",children:"Return value"}),"\n",(0,o.jsx)(t.p,{children:"None"})]})}function a(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>s});var o=n(11504);const l={},r=o.createContext(l);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);