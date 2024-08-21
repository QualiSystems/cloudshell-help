"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[20011],{57314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(74848),s=t(28453);const o={sidebar_position:7},i="Mapping Connections using App Sub-resources",l={id:"devguide/reference/map-connections-using-app-sub-resources",title:"Mapping Connections using App Sub-resources",description:"CloudShell allows developers to map connections between sub-resources residing on deployed Apps. This applies to scenarios where you want to map the port connections between virtual devices residing in App VMs. For example, to map the connection between port 1 residing on a virtual switch and port 2 residing on another virtual switch.",source:"@site/versioned_docs/version-2024.1/devguide/reference/map-connections-using-app-sub-resources.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/map-connections-using-app-sub-resources",permalink:"/devguide/reference/map-connections-using-app-sub-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/devguide/reference/map-connections-using-app-sub-resources.md",tags:[],version:"2024.1",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Categories in 1st Gen Service Shells",permalink:"/devguide/reference/categories-in-1st-gen-service-shells"},next:{title:"L1 Switch Shells",permalink:"/devguide/reference/l1-switch-shells"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Configuring the App",id:"configuring-the-app",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mapping-connections-using-app-sub-resources",children:"Mapping Connections using App Sub-resources"})}),"\n",(0,r.jsx)(n.p,{children:"CloudShell allows developers to map connections between sub-resources residing on deployed Apps. This applies to scenarios where you want to map the port connections between virtual devices residing in App VMs. For example, to map the connection between port 1 residing on a virtual switch and port 2 residing on another virtual switch."}),"\n",(0,r.jsxs)(n.p,{children:["The port mapping is done during the deployment of the App. This requires creating a shell and specifying the port\u2019s vNIC name in an attribute on the\xa0",(0,r.jsx)(n.code,{children:"Get_Inventory"}),"\xa0command of the deployed App\u2019s shell driver, and associating that shell to the desired App. Then, to map that App\u2019s vNIC, the blueprint designer will need to specify the vNIC name on the App."]}),"\n",(0,r.jsx)(n.p,{children:"This is supported for vCenter, OpenStack and AWS EC2 Apps."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"In this procedure, we will guide you on how to enable sub-resource mapping between Apps."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the driver of the App\u2019s cloud provider from CloudShell Portal\u2019s\xa0",(0,r.jsx)(n.strong,{children:"Manage>Drivers>Resource"}),"\xa0page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit the\xa0",(0,r.jsx)(n.code,{children:"driver.py"}),"\xa0file in your preferred editor."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the\xa0",(0,r.jsx)(n.code,{children:"get_inventory"}),"\xa0command to include the sub-resources you want to support and the vNIC names."]}),"\n",(0,r.jsx)(n.p,{children:'For example, 2 sub-resources with vNIC names "Port 1\u201d and "Port 2\u201d:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def get_inventory(self, context):\n        \"\"\"\n        :type context: models.QualiDriverModels.AutoLoadCommandContext\n\n        \"\"\"\n        sub_resources = [AutoLoadResource(model='Generic Ethernet Port', name='Port 1', relative_address='port1'),\n                         AutoLoadResource(model='Generic Ethernet Port', name='Port 2', relative_address='port2')]\n\n        attributes = [AutoLoadAttribute('port1', 'Requested vNIC Name', '0'), AutoLoadAttribute('port2', 'Requested vNIC Name', '1')]\n\n        result = AutoLoadDetails(sub_resources, attributes)\n\n        return result\n        #return AutoLoadDetails([],[])\n"})}),"\n",(0,r.jsx)(n.p,{children:'Note that for AWS EC2 Apps, the vNICs must be sequential and start with "0\u201d. For example, 0, 1, 2.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a shell model for the App in\xa0Resource Manager Client>Resource Families>Generic App Family."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create an attribute called\xa0Requested vNIC Name\xa0and add it to the new shell."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Associate the port model defined in the command to the new shell in\xa0Resource Manager Client>Resource Structure."}),"\n",(0,r.jsx)(n.p,{children:"In the above example, we used a port model called Generic Ethernet Port."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the driver to CloudShell Portal\u2019s\xa0Manage>Drivers>Resource\xa0page and associate the new shell model."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-the-app",children:"Configuring the App"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In CloudShell Portal\u2019s\xa0",(0,r.jsx)(n.strong,{children:"Manage>Apps"}),"\xa0page, create or edit an App template."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the App\u2019s\xa0App Resource\xa0page, select the shell you created."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the App to a blueprint."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a connector from this App to another endpoint in the blueprint."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Edit the connector line and in the\xa0Requested Source vNIC Name\xa0attribute, enter the vNIC name to use."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The vNIC name must be defined in the driver\u2019s\xa0",(0,r.jsx)(n.code,{children:"get_inventory"}),'\xa0command. In our case, "Port 1\u201d or "Port 2\u201d.']})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);