"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[15228],{73064:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(17624),n=t(4552);const s={sidebar_position:9},l="Resource Discovery",i={id:"devguide/develop-custom-cloud-provider-shells/resource-discovery",title:"Resource Discovery",description:"The\xa0get\\_inventory\xa0command \u201cdiscovers\u201d the resource in CloudShell, or in other words, validates the values of the cloud provider attributes that were entered by the user. It is executed when creating the resource in CloudShell, and can be manually run later on, for example, if you change some of the resource\u2019s attribute values.",source:"@site/docs/devguide/develop-custom-cloud-provider-shells/resource-discovery.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/resource-discovery",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/resource-discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-custom-cloud-provider-shells/resource-discovery.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"The Cloud Provider Interface",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/the-cloud-provider-interface"},next:{title:"App Deployment",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/app-deployment"}},c={},d=[{value:"Signature",id:"signature",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Return value",id:"return-value",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"get_inventory method implementation example",id:"get_inventory-method-implementation-example",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"resource-discovery",children:"Resource Discovery"}),"\n",(0,o.jsxs)(r.p,{children:["The\xa0",(0,o.jsx)(r.em,{children:"get_inventory"}),"\xa0command \u201cdiscovers\u201d the resource in CloudShell, or in other words, validates the values of the cloud provider attributes that were entered by the user. It is executed when creating the resource in CloudShell, and can be manually run later on, for example, if you change some of the resource\u2019s attribute values."]}),"\n",(0,o.jsxs)(r.p,{children:["For example, in a vCenter cloud provider,\xa0",(0,o.jsx)(r.em,{children:"get_inventory"}),"\xa0would check the value provided in the\xa0",(0,o.jsx)(r.strong,{children:"Default DataCenter"}),"\xa0attribute to validate that such a datacenter exists in the vCenter Server."]}),"\n",(0,o.jsx)(r.p,{children:"In addition, this is the place to assign values to optional attributes that were not given a value by the CloudShell admin."}),"\n",(0,o.jsx)(r.h2,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"def get_inventory(self, context)\n"})}),"\n",(0,o.jsx)(r.h2,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"context"}),":\xa0",(0,o.jsx)(r.em,{children:"context"}),"\xa0is an\xa0",(0,o.jsx)(r.em,{children:"AutoLoadCommandContext"}),"\xa0object that contains:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"connectivity - CloudShell server connectivity data for authentication with CloudShell Automation API"}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["resource - resource configuration settings entered by the user when creating the new resource in the\xa0",(0,o.jsx)(r.strong,{children:"Inventory"}),"\xa0dashboard"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(r.p,{children:["cloudshell/shell/core/driver_context.py ",(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:'def __init__(self, connectivity, resource):\n    self.connectivity = connectivity  # Connectivity details that can help connect to the APIs\n    """:type : ConnectivityContext"""\n    self.resource = resource  # The details of the resource using the driver\n    """:type : ResourceContextDetails"""\n'})}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["The convention for specifying\xa0",(0,o.jsx)(r.em,{children:"context.resource.attributes"}),"\xa0keys in the driver files(s) is:\xa0",(0,o.jsx)(r.code,{children:"my_shell_name.attribute_name"}),"."]})}),"\n",(0,o.jsx)(r.h2,{id:"return-value",children:"Return value"}),"\n",(0,o.jsxs)(r.p,{children:["The\xa0",(0,o.jsx)(r.em,{children:"AutoLoadDetails"}),"\xa0class that represents details discovered by the\xa0",(0,o.jsx)(r.em,{children:"get_inventory"}),"\xa0function."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(r.p,{children:["cloudshell/shell/core/driver_context.py ",(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"view"})," ",(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/QualiSystems/cloudshell-shell-core/36009fdec45134ae38cb9273328b7686be66e553/cloudshell/shell/core/driver_context.py",children:"raw"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:'def __init__(self, resources, attributes):\n    self.resources = resources  # the list of resources (root and sub) that were discovered\n    """:type : list[AutoLoadResource]"""\n    self.attributes = attributes  # the list of attributes for the resources\n    """:type : list[AutoLoadAttribute]"""\n'})}),"\n",(0,o.jsx)(r.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,o.jsx)(r.p,{children:"If one of the validations failed, an error indication will be displayed in CloudShell and the resource will be marked as excluded."}),"\n",(0,o.jsx)(r.h2,{id:"get_inventory-method-implementation-example",children:"get_inventory method implementation example"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(r.p,{children:["src/driver.py ",(0,o.jsx)(r.a,{href:"https://github.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/blob/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py",children:"view"})," ",(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/QualiSystems/Custom-L2-Cloud-Provider-Shell-Example/865f356f4aec14e170cd9e5f30b575c48f2dc865/src/driver.py",children:"raw"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"def get_inventory(self, context):\n  ## uncomment - if there is nothing to validate\n      # return AutoLoadDetails([], [])\n      # read from context\n      cloud_provider_resource = L2HeavenlyCloudShell.create_from_context(context)\n      with LoggingSessionContext(context) as logger, ErrorHandlingContext(logger):\n          self._log(logger, 'get_inventory_context_json', context)\n          # validating\n          if cloud_provider_resource.name == 'evil':\n              raise ValueError('evil cannot use heaven ')\n          if cloud_provider_resource.region == 'sun':\n              raise ValueError('invalid region, sorry cannot deploy instances on the sun')\n          # using your cloud provider sdk\n          if not HeavenlyCloudService.can_connect(cloud_provider_resource.user, cloud_provider_resource.password,\n                                                   context.resource.address):  # TODO add address to resource (gal shellfoundry team)\n              raise ValueError('could not connect using given credentials')\n          # discovering - using your prefered custom cloud service you can discover and then update values\n          if not cloud_provider_resource.heaven_cloud_color:\n              cloud_provider_resource.heaven_cloud_color = HeavenlyCloudService.get_prefered_cloud_color()\n          return cloud_provider_resource.create_autoload_details()\n"})})]})}function a(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4552:(e,r,t)=>{t.d(r,{I:()=>i,M:()=>l});var o=t(11504);const n={},s=o.createContext(n);function l(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);