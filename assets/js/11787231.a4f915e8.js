"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6504],{79048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(17624),o=t(4552);const r={sidebar_position:12},l="L2 Network Connectivity",i={id:"devguide/develop-custom-cloud-provider-shells/l2-network-connectivity",title:"L2 Network Connectivity",description:"Now that we\u2019ve set up the cloud provider shell\u2019s automation, let\u2019s learn how to implement network connectivity. CloudShell supports two networking modes, L2 for VLAN-level management and L3 for subnet-level management. This article discusses layer 2 connectivity. If you\u2019re developing an L3 cloud provider, skip to the next article.",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/l2-network-connectivity.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/l2-network-connectivity",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/l2-network-connectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/l2-network-connectivity.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Power off and Delete VM",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/power-off-and-delete-vm"},next:{title:"L3 Network Connectivity",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/l3-network-connectivity"}},c={},d=[{value:"ApplyConnectivityChanges method",id:"applyconnectivitychanges-method",level:2},{value:"Called when",id:"called-when",level:3},{value:"Error handling",id:"error-handling",level:3},{value:"Signature",id:"signature",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Handle Request",id:"handle-request",level:4},{value:"Method result",id:"method-result",level:4},{value:"ApplyConnectivityChanges method implementation",id:"applyconnectivitychanges-method-implementation",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"l2-network-connectivity",children:"L2 Network Connectivity"}),"\n",(0,s.jsx)(n.p,{children:"Now that we\u2019ve set up the cloud provider shell\u2019s automation, let\u2019s learn how to implement network connectivity. CloudShell supports two networking modes, L2 for VLAN-level management and L3 for subnet-level management. This article discusses layer 2 connectivity. If you\u2019re developing an L3 cloud provider, skip to the next article."}),"\n",(0,s.jsx)(n.h2,{id:"applyconnectivitychanges-method",children:"ApplyConnectivityChanges method"}),"\n",(0,s.jsxs)(n.p,{children:["To add support for L2 VLAN connectivity in a custom cloud provider, we need to implement the\xa0",(0,s.jsx)(n.em,{children:"ApplyConnectivityChanges"}),"\xa0method. This method is used to connect the VMs in the sandbox to the network elements."]}),"\n",(0,s.jsx)(n.p,{children:"The VLAN IDs are allocated by Quali Server, according to the settings of the VLAN service. These IDs are sent to the command as parameters. The implementation of this method needs to be able to support Access mode, Trunk mode, VLAN and VXLAN ranges, if supported by your cloud provider. Additionally, the implementation needs to support a range of VLAN IDs."}),"\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.em,{children:"ApplyConnectivityChanges"}),"\xa0method can receive a list of actions of type\xa0",(0,s.jsx)(n.strong,{children:"setVlan"}),"\xa0or\xa0",(0,s.jsx)(n.strong,{children:"removeVlan"}),". The method receives an action for each connection that needs to be created or disconnected. In case of P2P connections, the method receives two requests, one for each App."]}),"\n",(0,s.jsx)(n.p,{children:"Like other methods, this method needs to return an action result in the response per connection. If the method\u2019s execution fails, CloudShell needs to indicate the failure in the returned action or raise an exception."}),"\n",(0,s.jsx)(n.h3,{id:"called-when",children:"Called when"}),"\n",(0,s.jsx)(n.p,{children:"It is run automatically when reserving the sandbox, as part of CloudShell\u2019s default sandbox setup script, and is also called in an active sandbox when a deployed App is connected or disconnected from a VLAN service or from another deployed App in a P2P connection."}),"\n",(0,s.jsx)(n.h3,{id:"error-handling",children:"Error handling"}),"\n",(0,s.jsxs)(n.p,{children:["If\xa0",(0,s.jsx)(n.em,{children:"ApplyConnectivityChanges"}),"\xa0fails, CloudShell needs to indicate the failure in the returned action or raise an exception."]}),"\n",(0,s.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def ApplyConnectivityChanges(self, context, request):\n"})}),"\n",(0,s.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"context"}),":\xa0",(0,s.jsx)(n.em,{children:"context"}),"\xa0is a\xa0",(0,s.jsx)(n.em,{children:"ResourceCommandContext"}),"\xa0object that contains:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["resource - resource configuration settings entered when creating the Cloud Provider resource in the\xa0",(0,s.jsx)(n.strong,{children:"Inventory"}),"\xa0dashboard"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"reservation - current reservation details"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"connectors \u2013 details of any visual connectors between the Cloud Provider App and other endppoints in the sandbox."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,s.jsxs)(n.p,{children:["cloudshell/shell/core/driver_context.py ",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class ResourceCommandContext:\n    def __init__(self, connectivity, resource, reservation, connectors):\n        self.connectivity = connectivity  # Connectivity details that can help connect to the APIs\n        """:type : ConnectivityContext"""\n        self.resource = resource  # The details of the resource using the driver\n        """:type : ResourceContextDetails"""\n        self.reservation = reservation  # The details of the reservation\n        """:type : ReservationContextDetails"""\n        self.connectors = connectors  # The list of visual connectors and routes that are connected to the resource (the resource will be considered as the source end point)\n        """:type : list[Connector]"""\n'})}),"\n",(0,s.jsx)(n.h4,{id:"handle-request",children:"Handle Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"setVlan action request:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The requested VLAN mode is indicated in a property called\xa0mode\xa0under\xa0",(0,s.jsx)(n.em,{children:"connectionParams"}),". The VLAN id array can receive many VLAN id permutations. Please refer to the online help for all support permutations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the cloud provider supports VXLAN or both VLAN and VXLAN, it is required to expose a discoverable attribute on the cloud provider\u2019s\xa0",(0,s.jsx)(n.strong,{children:"VLAN Type"}),"\xa0call. The default value is\xa0",(0,s.jsx)(n.strong,{children:"VLAN"}),"\xa0and cloudshell permits VLAN ids in the 2-4096 range. If the\xa0",(0,s.jsx)(n.strong,{children:"VLAN Type"}),"\xa0attribute is set to\xa0",(0,s.jsx)(n.strong,{children:"VXLAN"}),", CloudShell will permit VLAN ids to be allocated in the 2-16,000,000 range."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"customAttributes"}),"\xa0is a list of special attributes for a specific action. The\xa0",(0,s.jsx)(n.em,{children:"setVlan"}),"\xa0action can get a custom attribute called\xa0",(0,s.jsx)(n.strong,{children:"Vnic Name"}),". When this attribute exists, we can use it in custom logic that will allocate a specific VNIC to the App\u2019s VM. For example, the\xa0",(0,s.jsx)(n.strong,{children:"Vnic Name"}),"\xa0value is 1 and the cloud provider shell needs to create the VLAN connection on eth1.\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/ac94224fd2368aaa9b589bcdfd30e449a53c90ce/src/heavenly_cloud_service_wrapper.py#L299",children:"Code example"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"removeVlan action request:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.em,{children:"actionTarget"}),"\xa0property is an object that indicates on which compute resource we need to apply the\xa0",(0,s.jsx)(n.em,{children:"removeVlan"}),"\xa0action request."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The target resource might have more than one network interface so to determine on which interface to perform the\xa0",(0,s.jsx)(n.em,{children:"removeVlan"}),"\xa0action, you need to find the\xa0",(0,s.jsx)(n.em,{children:"interface"}),"\xa0attribute value. The\xa0",(0,s.jsx)(n.em,{children:"removeVlan"}),"\xa0request contains an array of all connector attributes. The unique identifier of the network interface to disconnect is the value of the\xa0Interface\xa0attribute."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"method-result",children:"Method result"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"setVlan action result:"})}),"\n",(0,s.jsxs)(n.p,{children:["If the action is successful, you need to set\xa0",(0,s.jsx)(n.em,{children:"updatedInterface"}),"\xa0property. The value of this property is set on an attribute on the relevant connector. Each connector in CloudShell has a source and a target component. Cloudshell automatically determines if the action result is for source or target of the connector and sets this value on the appropriate attribute -\xa0",(0,s.jsx)(n.strong,{children:"Source Interface"}),"\xa0or\xa0",(0,s.jsx)(n.strong,{children:"Target Interface"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/e5a7fffbda4e661b58dc30f9e6355981dfc0bb86/src/heavenly_cloud_service_wrapper.py#L300-L302",children:"Code example"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"removeVlan action result:"})}),"\n",(0,s.jsx)(n.p,{children:"You only need to indicate if the action is successful or not."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/e5a7fffbda4e661b58dc30f9e6355981dfc0bb86/src/heavenly_cloud_service_wrapper.py#L340-L344",children:"Code example"})}),"\n",(0,s.jsx)(n.h2,{id:"applyconnectivitychanges-method-implementation",children:"ApplyConnectivityChanges method implementation"}),"\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.em,{children:"ApplyConnectivityChanges"}),"\xa0method should perform the following steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L229",children:"Retrieve cloud provider resource connection credentials"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L230",children:"Retrieve actions from request"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L232-L234",children:"Handle Remove Vlan actions"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L371",children:"Retrieve requested interface to disconnect"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L372",children:"Retrieve requested VM id to disconnect"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L373",children:"Disconnect"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L375",children:"Return the result"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/driver.py#L236-L237",children:"Handle\xa0setVlan\xa0actions"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L320-L324",children:"Retrieve VLAN parameters (VNIC name, VLAN mode, VLAN id)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/e5a7fffbda4e661b58dc30f9e6355981dfc0bb86/src/heavenly_cloud_service_wrapper.py#L300",children:"Connect"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/7bd55725d8e8dbd741270f5d082f05062c1d1fab/src/heavenly_cloud_service_wrapper.py#L325",children:"Add a new interface id to the result"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/625d52ae7740cf3d77e529f6b0b0f8d05df472b2/src/driver.py#L239",children:"Return the appropriate result"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>l});var s=t(11504);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);