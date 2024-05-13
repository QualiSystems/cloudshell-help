"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3128],{27968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=t(17624),o=t(4552);const r={sidebar_position:11},i="Custom Routing for Azure Apps",a={id:"devguide/reference/custom-routing-for-azure-apps",title:"Custom Routing for Azure Apps",description:"In this article, we\u2019ll learn how to set up custom routing for Azure VMs deployed in the sandbox.",source:"@site/docs/devguide/reference/custom-routing-for-azure-apps.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/custom-routing-for-azure-apps",permalink:"/cloudshell-help/next/devguide/reference/custom-routing-for-azure-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/reference/custom-routing-for-azure-apps.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Resource Scripts",permalink:"/cloudshell-help/next/devguide/reference/resource-scripts"},next:{title:"Custom Sandbox Metadata",permalink:"/cloudshell-help/next/devguide/reference/custom-sandbox-metadata"}},l={},u=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"custom-routing-for-azure-apps",children:"Custom Routing for Azure Apps"}),"\n",(0,s.jsx)(n.p,{children:"In this article, we\u2019ll learn how to set up custom routing for Azure VMs deployed in the sandbox."}),"\n",(0,s.jsx)(n.p,{children:"CloudShell supports the creation of custom routes in Azure sandboxes, allowing you to force communication from any subnet(s) to go through any specific IP(s). For example, to have traffic go through a firewall or VPN connection."}),"\n",(0,s.jsx)(n.p,{children:"To do this, you need to use a blueprint or custom setup script that will tell the Azure cloud provider resource to define the custom routing (using the resource\u2019s CreateRouteTable hidden command)."}),"\n",(0,s.jsx)(n.p,{children:"The custom routing needs to be supplied in JSON format. Let\u2019s create a JSON file and add the following code, which routes incoming communications from CIDR \u201c10.0.1.0/28\u201d to a VM that has the address \u201c10.0.1.15\u201d."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  "route_tables": [\n    {\n      "name": "myRouteTable1",\n      "subnets": [\n        "subnetId1",\n        "subnetId2"\n      ],\n      "routes": [\n        {\n          "name": "myRoute1",\n          "address_prefix": "10.0.1.0/28",\n          "next_hop_type": "VirtualAppliance",\n          "next_hop_address": "10.0.1.15"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Next, let\u2019s define the custom routing."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"route_tables"}),": (list)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"}),": Provide a display name for the route table."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"subnets"}),": Specify a comma-separated list of the subnet IDs of the source VMs. This will affect all VMs that have a NIC in that subnet. Note that for VMs connected to more than one subnet, you will need to specify all connected subnets to ensure that all communication from such VMs use the custom routing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"routes"}),": The route\u2019s settings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"}),": Provide a display name for the route."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"address_prefix"}),": Specify the target CIDR. Communication to an address in this CIDR will be diverted to our route."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"next_hop_type"}),": Specify \u201cVirtualAppliance\u201d as the value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"next_hop_address"}),": The IP that the traffic will be directed to. For example, to connect VM 1 to VM 2 through VM 5, set VM 5 as the next_hop."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To set additional hops, duplicate the routes section and edit the\xa0next_hop_address. For example, setting the traffic to hop through 10.0.1.15 and then through 10.23.1.25:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n    "route_tables": [\n        {\n            "name": "myRouteTable1",\n            "subnets": [\n                "subnetId1",\n                "subnetId2"\n            ],\n            "routes": [\n                {\n                    "name": "myRoute1",\n                    "address_prefix": "10.0.1.0/28",\n                    "next_hop_type": "VirtualAppliance",\n                    "next_hop_address": "10.0.1.15"\n                }\n            ]\n        },\n        {\n            "name": "myRouteTable2",\n            "subnets": [\n                "subnetId3",\n                "subnetId4"\n            ],\n            "routes": [\n                {\n                    "name": "myRoute2",\n                    "address_prefix": "10.0.1.0/28",\n                    "next_hop_type": "VirtualAppliance",\n                    "next_hop_address": "10.0.1.15"\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Lastly, make sure your script calls the JSON file. Here\u2019s an example script that uses our first JSON example (in this example, we embedded the JSON code in the script):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from cloudshell.api.cloudshell_api import InputNameValue\nfrom cloudshell.workflow.orchestration.sandbox import Sandbox\nimport json\n\nAZURE_CLOUD_PROVIDER_NAME = \'Azure resource name\'\n\nrequest_obj = {\n    "route_tables": [\n        {\n            "name": "myRouteTable1",\n            "subnets": ["subnetId1", "subnetId2"],\n            "routes": [{\n                "name": "myRoute1",\n                "address_prefix": "10.0.1.0/28",  # cidr\n                "next_hop_type": "VirtualAppliance",\n                "next_hop_address": "10.0.1.15"\n            }]\n        },\n        {\n            "name": "myRouteTable2",\n            "subnets": ["subnetId3", "subnetId4"],\n            "routes": [{\n                "name": "myRoute2",\n                "address_prefix": "10.0.1.0/28",  # cidr\n                "next_hop_type": "VirtualAppliance",\n                "next_hop_address": "10.0.1.15",\n            }]\n        }\n    ]\n}\n\nrequest_json = json.dumps(request_obj)\n\nsandbox = Sandbox()\nreservation_id = sandbox.id\nsession = sandbox.automation_api\n\nsession.ExecuteCommand(reservationId=reservation_id,\n                       targetName="Azure resource",\n                       targetType="Resource",\n                       commandName="CreateRouteTables",\n                       commandInputs=[InputNameValue("request", request_json)],\n                       printOutput=False)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Add the script as a blueprint script to CloudShell and attach it to your blueprint. If this is a setup script, set the script\u2019s\xa0",(0,s.jsx)(n.strong,{children:"Script Type"}),"\xa0to\xa0",(0,s.jsx)(n.strong,{children:"Setup"}),"\xa0to ensure that CloudShell will execute it automatically when a user reserves the blueprint. For additional information, see CloudShell help\u2019s\xa0",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/9.3/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Blprnt-Orchs.htm",children:"Configure Blueprint Orchestration"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can have only one setup script attached to a blueprint and this will be the default for Azure that provisions and configures the resources. By overriding this script with another of type setup, you will potentially lose this functionality. Alternatively, you could create your own Setup script, which is based on the out-of-the-box one and includes the custom routing code - see\xa0",(0,s.jsx)(n.a,{href:"https://devguide.quali.com/orchestration/2020.1.0/the-oob-orchestration.html",children:"CloudShell\u2019s OOB Orchestration"})]})}),"\n",(0,s.jsx)(n.p,{children:"Future sandboxes based on this blueprint will use the defined custom routing for Azure VMs in the specified IPs/subnets."})]})}function c(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>i});var s=t(11504);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);