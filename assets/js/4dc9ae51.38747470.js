"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[77884],{91260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(17624),l=t(4552);const r={sidebar_position:13},i="L3 Network Connectivity",o={id:"devguide/develop-custom-cloud-provider-shells/l3-network-connectivity",title:"L3 Network Connectivity",description:"In this article, we\u2019ll learn how to implement L3 network connectivity. Cloudshell recognizes a cloud provider shell as an L3 networking cloud provider if the method\xa0PrepareSandboxInfra\xa0exists in the shell driver. If the method doesn\u2019t exist, CloudShell considers the shell as an L2 networking shell.",source:"@site/docs/devguide/develop-custom-cloud-provider-shells/l3-network-connectivity.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/l3-network-connectivity",permalink:"/next/devguide/develop-custom-cloud-provider-shells/l3-network-connectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-custom-cloud-provider-shells/l3-network-connectivity.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"L2 Network Connectivity",permalink:"/next/devguide/develop-custom-cloud-provider-shells/l2-network-connectivity"},next:{title:"Available CloudShell APIs",permalink:"/next/devguide/available-cs-api/"}},c={},d=[{value:"PrepareSandboxInfra method",id:"preparesandboxinfra-method",level:2},{value:"Called when",id:"called-when",level:3},{value:"Error handling",id:"error-handling",level:3},{value:"Signature",id:"signature",level:3},{value:"Inputs",id:"inputs",level:3},{value:"PrepareSandboxInfra method implementation",id:"preparesandboxinfra-method-implementation",level:3},{value:"Deploy method with L3 connectivity",id:"deploy-method-with-l3-connectivity",level:2},{value:"L3 Deploy method implementation",id:"l3-deploy-method-implementation",level:3},{value:"CleanupSandboxInfra",id:"cleanupsandboxinfra",level:2},{value:"Called When",id:"called-when-1",level:3},{value:"Error handling",id:"error-handling-1",level:3},{value:"Signature",id:"signature-1",level:3},{value:"Inputs",id:"inputs-1",level:3},{value:"CleanupSandboxInfra method implementation",id:"cleanupsandboxinfra-method-implementation",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"l3-network-connectivity",children:"L3 Network Connectivity"}),"\n",(0,s.jsxs)(n.p,{children:["In this article, we\u2019ll learn how to implement L3 network connectivity. Cloudshell recognizes a cloud provider shell as an L3 networking cloud provider if the method\xa0",(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0exists in the shell driver. If the method doesn\u2019t exist, CloudShell considers the shell as an L2 networking shell."]}),"\n",(0,s.jsx)(n.p,{children:"To add support for L3 subnet connectivity in a custom cloud provider, we\u2019ll need to implement 3 methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0is used to prepare the infrastructure required for a sandbox operating with L3 connectivity."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0should be extended to support\xa0",(0,s.jsx)(n.em,{children:"connectToSubnet"}),"\xa0action requests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"CleanupSandboxInfra"}),"\xa0cleans any sandbox-level entities created in the cloud provider, usually entities created by the\xa0",(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0command. This is the last command to be called in the orchestration flow."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"preparesandboxinfra-method",children:"PrepareSandboxInfra method"}),"\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0method is the 1st method to be called in the sandbox setup. It creates the required infrastructure for the sandbox. The network address space of the sandbox is allocated automatically by CloudShell and represented using CIDR notation and provided in the actions request."]}),"\n",(0,s.jsx)(n.p,{children:"It must support these three action types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"prepareCloudInfra"})}),"\n",(0,s.jsx)(n.p,{children:"When handling this action, you need to create/allocate the requested CIDR to the sandbox in your cloud provider. This is also the place to create/allocate cloud resource that will be used by the entire sandbox. For example, an AWS shell might create an S3 bucket that will be used by the entire sandbox, and a shared Security Group, which will be attached to all AWS VM instances, to allow inbound traffic from specific QualiX and Execution Server VM instances for secure connectivity to the VMs and configuration management."}),"\n",(0,s.jsx)(n.p,{children:"Generally this is the 1st action you should handle before proceeding to other actions. There is always one instance of this type of action."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"prepareSubnet"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"prepareSubnet"}),"\xa0gets one or more actions from this type. When handling this action, you need to create/allocate a subnet for each action according to the CIDR and\xa0",(0,s.jsx)(n.strong,{children:"Subnet"}),"\xa0service attributes in the blueprint. A subnet can be declared as public or private by the blueprint designer. A subnet is considered private if it is not accessible from outside the sandbox, and is considered public if it is possible to access the subnet from outside the sandbox. As a general best practice, it is recommended to allow outbound traffic from private subnets to elements outside of the sandbox."]}),"\n",(0,s.jsxs)(n.p,{children:["CloudShell sends a\xa0",(0,s.jsx)(n.em,{children:"prepareSubnet"}),"\xa0action for each\xa0",(0,s.jsx)(n.strong,{children:"Subnet"}),"\xa0service in the blueprint. If there are no\xa0",(0,s.jsx)(n.strong,{children:"Subnet"}),"\xa0services in the blueprint, CloudShell will create a single subnet for the sandbox, by sending a\xa0",(0,s.jsx)(n.em,{children:"prepareSubnet"}),'\xa0action with the default values. In a "single subnet\u201d scenario, it is assumed that the sandbox components are all located in the same default subnet. Note that the driver still needs to create/allocate a subnet in "single subnet\u201d mode.']}),"\n",(0,s.jsxs)(n.p,{children:["The result for this action must include a\xa0",(0,s.jsx)(n.em,{children:"subnetId"}),'\xa0property. This must be an id that can be used to uniquely identify the subnet in the cloud provider. The "subnet id\u201d will be passed as part of\xa0',(0,s.jsx)(n.em,{children:"connectToSubnet"}),"\xa0actions in the\xa0",(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0method and should be used to identify the subnets that the App wants to connect to."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"createKey"})}),"\n",(0,s.jsxs)(n.p,{children:["There is always one instance of this type of action. This action type has no metadata. To handle this action, you return an ssh key that will be used by CloudShell to connect to Linux VMs in the sandbox. If you don\u2019t want to use ssh keys, you can simply ignore this action without returning any\xa0",(0,s.jsx)(n.em,{children:"createKeys"}),"\xa0action results."]}),"\n",(0,s.jsxs)(n.p,{children:["Cloudshell stores the ssh key securely and if the deployed App has an empty password attribute or no password attribute, it will try to authenticate with the VM using the value in the\xa0",(0,s.jsx)(n.strong,{children:"Username"}),"\xa0attribute and the ssh key when using QualiX to ssh to a deployed App."]}),"\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0method is responsible to create the VM with the sandbox ssh key that was generated in the\xa0",(0,s.jsx)(n.em,{children:"prepareSandboxInfra"}),"\xa0method. Cloudshell does not pass the ssh key to the\xa0",(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0method and it\u2019s the responsibility of the shell developer to store this ssh key in a secure place that is accessible during the\xa0",(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0method. An example for this implementation for an aws shell is to use an S3 bucket that is used only by the sandbox."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0can be called multiple times in a sandbox. Setup can be called multiple times in the sandbox, and every time setup is called, the\xa0",(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),'\xa0method will be called again. So your implementation needs to support this use case and take under consideration that the cloud resource might already exist. It\u2019s recommended to follow the "get or create\u201d pattern when implementing this method.']})}),"\n",(0,s.jsx)(n.h3,{id:"called-when",children:"Called when"}),"\n",(0,s.jsx)(n.p,{children:"This command is called for L3 Networking type implementations in the beginning of the orchestration flow (preparation stage), even before\xa0Deploy\xa0is called."}),"\n",(0,s.jsx)(n.h3,{id:"error-handling",children:"Error handling"}),"\n",(0,s.jsx)(n.p,{children:'If failure occurs, return a "success false\u201d action result.'}),"\n",(0,s.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def PrepareSandboxInfra(self, context, request, cancellation_context)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"context"}),":\xa0",(0,s.jsx)(n.em,{children:"context"}),"\xa0is a\xa0",(0,s.jsx)(n.em,{children:"ResourceCommandContext"}),"\xa0object that contains:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["resource - resource configuration settings entered when creating the Cloud Provider resource in the\xa0",(0,s.jsx)(n.strong,{children:"Inventory"}),"\xa0dashboard"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"reservation - current reservation details"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"connectors \u2013 details of any visual connectors between the Cloud Provider App and other endpoints in the sandbox."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,s.jsxs)(n.p,{children:["cloudshell/shell/core/driver_context.py ",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class ResourceCommandContext:\n    def __init__(self, connectivity, resource, reservation, connectors):\n        self.connectivity = connectivity  # Connectivity details that can help connect to the APIs\n        """:type : ConnectivityContext"""\n        self.resource = resource  # The details of the resource using the driver\n        """:type : ResourceContextDetails"""\n        self.reservation = reservation  # The details of the reservation\n        """:type : ReservationContextDetails"""\n        self.connectors = connectors  # The list of visual connectors and routes that are connected to the resource (the resource will be considered as the source end point)\n        """:type : list[Connector]"""\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s a code sample that extracts the cloud provider data from the\xa0context:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cloud_provider_resource = HeavenlyCloudsShell.create_from_context(context)"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request"})}),"\n",(0,s.jsx)(n.p,{children:"JSON string that contains the requested actions."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cancelation context"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,s.jsxs)(n.p,{children:["cloudshell/shell/core/driver_context.py ",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def __init__(self):\n    self.is_cancelled = False\n    """:type : bool"""\n'})}),"\n",(0,s.jsx)(n.h3,{id:"preparesandboxinfra-method-implementation",children:"PrepareSandboxInfra method implementation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L91",children:"Retrieve the cloud provider resource connection credentials"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/driver.py#L248-L258",children:"Retrieve requested actions (1 PrepareCloudInfra, 1 CreateKeys, >=1 PrepareSubnet)"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L429-L443",children:"Handle\xa0PrepareCloudInfra"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L447-L456",children:"Optionally, handle\xa0CreateKeys"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L460-L471",children:"Handle the\xa0PrepareSubnet\xa0action(s)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L475",children:"Return the action results"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/driver.py#L260-L269",children:"Return the driver\u2019s response"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-method-with-l3-connectivity",children:"Deploy method with L3 connectivity"}),"\n",(0,s.jsxs)(n.p,{children:["When working with L3 connectivity, the subnets and shared sandbox resources are created in the\xa0",(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0method. The\xa0",(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0method is executed only after\xa0",(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0completes successfully.\xa0",(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0can receive 0 or more\xa0",(0,s.jsx)(n.em,{children:"connectToSubnet"}),"\xa0actions in addition to the single\xa0",(0,s.jsx)(n.em,{children:"deployApp"}),"\xa0action. The\xa0",(0,s.jsx)(n.em,{children:"connectToSubnet"}),"\xa0actions tell the VM that we are creating the subnets that the VM should be connected to. The\xa0",(0,s.jsx)(n.strong,{children:"subnetId"}),"\xa0property in the\xa0",(0,s.jsx)(n.em,{children:"connectToSubnet"}),"\xa0action should be used to uniquely identify the subnet in the cloud provider."]}),"\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.em,{children:"connectToSubnet"}),"\xa0action contains a special property called\xa0",(0,s.jsx)(n.strong,{children:"vnicName"}),". When this property contains a value, it means that the blueprint designer specified a request from the cloud provider shell to create a connection on a specific network interface. For example, if the\xa0",(0,s.jsx)(n.strong,{children:"vnicName"}),"\xa0value is 1, we need to create the network interface for the relevant subnet from the action on eth1."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),"\xa0In case the shell supports ssh key authentications for linux vms it\u2019s the responsibility of the deploy method implementation to get the ssh key created during prepareSandboxInfra. Cloudshell will not send the ssh key to the deploy method in the request."]}),"\n",(0,s.jsx)(n.h3,{id:"l3-deploy-method-implementation",children:"L3 Deploy method implementation"}),"\n",(0,s.jsxs)(n.p,{children:["In L3, the\xa0",(0,s.jsx)(n.em,{children:"Deploy"}),"\xa0method should perform the following steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/a9a14e87570fdc52d9994950e161b104c62401fb/src/driver.py#L91",children:"Retrieve the cloud provider resource connection credentials"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/driver.py#L92-L95",children:"Retrieve the\xa0Deploy\xa0action"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/driver.py#L97-L98",children:"Retrieve\xa0CononectToSubnetActions"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/driver.py#L100-L117",children:"Call the\xa0Deploy\xa0logic of the selected deployment type"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/6f62a52ca2a66b8f37bf4d2364c92ec8dc89c383/src/heavenly_cloud_service_wrapper.py#L118",children:"(Steps 4-a to -4-e are performed by the\xa0Deploy\xa0logic) Generate a unique App name"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/f26b3b5d92da04ecfac1238aa8334ba86a89a301/src/sdk/heavenly_cloud_service.py#L105-L123",children:"Create the network configuration plan to use when calling the cloud provider SDK VM instance deploy"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L136-L142",children:"Create the VM instance using the deployment path attributes and network plan"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If\xa0Deploy\xa0succeeds, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L146-L147",children:"Collect the VM\u2019s details (operating system, specifications, networking information)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L165-L169",children:"Create\xa0ConnectToSubnet\xa0results"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/heavenly_cloud_service_wrapper.py#L173",children:"Return results"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/47e55422d3ef155fc6d126ee75be5d85be909496/src/driver.py#L122",children:"Return the driver\u2019s response"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cleanupsandboxinfra",children:"CleanupSandboxInfra"}),"\n",(0,s.jsxs)(n.p,{children:["This method is responsible for cleaning any sandbox-level entities created in the cloud provider, usually entities created in the\xa0",(0,s.jsx)(n.em,{children:"PrepareSandboxInfra"}),"\xa0command."]}),"\n",(0,s.jsx)(n.h3,{id:"called-when-1",children:"Called When"}),"\n",(0,s.jsx)(n.p,{children:"This method is the last method to be called during the sandbox\u2019s teardown (before the sandbox is completed)."}),"\n",(0,s.jsx)(n.h3,{id:"error-handling-1",children:"Error handling"}),"\n",(0,s.jsx)(n.p,{children:'If a failure occurs, return a "success false\u201d action result.'}),"\n",(0,s.jsx)(n.h3,{id:"signature-1",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def CleanupSandboxInfra(self, context, request):\n"})}),"\n",(0,s.jsx)(n.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"context"}),":\xa0",(0,s.jsx)(n.em,{children:"context"}),"\xa0is a\xa0",(0,s.jsx)(n.em,{children:"ResourceCommandContext"}),"\xa0object that contains:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["resource - resource configuration settings entered when creating the Cloud Provider resource in the\xa0",(0,s.jsx)(n.strong,{children:"Inventory"}),"\xa0dashboard"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"reservation - current reservation details"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"connectors \u2013 details of any visual connectors between the Cloud Provider App and other endpoints in the sandbox."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,s.jsxs)(n.p,{children:["cloudshell/shell/core/driver_context.py ",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class ResourceCommandContext:\n    def __init__(self, connectivity, resource, reservation, connectors):\n        self.connectivity = connectivity  # Connectivity details that can help connect to the APIs\n        """:type : ConnectivityContext"""\n        self.resource = resource  # The details of the resource using the driver\n        """:type : ResourceContextDetails"""\n        self.reservation = reservation  # The details of the reservation\n        """:type : ReservationContextDetails"""\n        self.connectors = connectors  # The list of visual connectors and routes that are connected to the resource (the resource will be considered as the source end point)\n        """:type : list[Connector]"""\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request"})}),"\n",(0,s.jsxs)(n.p,{children:["JSON string contains single\xa0",(0,s.jsx)(n.em,{children:"CleanupSandboxInfra"}),"\xa0action."]}),"\n",(0,s.jsx)(n.h3,{id:"cleanupsandboxinfra-method-implementation",children:"CleanupSandboxInfra method implementation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/driver.py#L284",children:"Retrieve the cloud provider resource connection credentials"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/driver.py#L286-L290",children:"Retrieve the\xa0CleanupSandboxInfra\xa0action"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["*\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/heavenly_cloud_service_wrapper.py#L477-L479",children:"Clean the sandbox-created infrastructure resources and return a success result"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L3-Cloud-Provider-Shell-Example/blob/4666a14a0634e82a01692a60a3da1314cd4d863c/src/driver.py#L296",children:"Return result"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>i});var s=t(11504);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);