"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[73552],{23284:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=r(17624),s=r(4552);const t={sidebar_position:15},o="AWS Traffic Mirroring",a={id:"devguide/reference/aws-traffic-mirroring",title:"AWS Traffic Mirroring",description:"This article explains how to copy network traffic running through a deployed AWS App to another App. For additional information about traffic mirroring, see AWS Documentation.",source:"@site/docs/devguide/reference/aws-traffic-mirroring.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/aws-traffic-mirroring",permalink:"/cloudshell-help/next/devguide/reference/aws-traffic-mirroring",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/reference/aws-traffic-mirroring.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Intellisense in Shells and Scripts (using Docstrings)",permalink:"/cloudshell-help/next/devguide/reference/intellisense-in-shells-and-scripts"},next:{title:"Common CloudShell Packages",permalink:"/cloudshell-help/next/devguide/reference/common-cs-packages"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Command interface",id:"command-interface",level:2},{value:"CreateTrafficMirroring",id:"createtrafficmirroring",level:3},{value:"RemoveTrafficMirroring",id:"removetrafficmirroring",level:3},{value:"Examples",id:"examples",level:2},{value:"Using\xa0reservationId\xa0to get NICs",id:"usingreservationidto-get-nics",level:3},{value:"CreateTrafficMirroring",id:"createtrafficmirroring-1",level:3},{value:"RemoveTrafficMirroring",id:"removetrafficmirroring-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"aws-traffic-mirroring",children:"AWS Traffic Mirroring"}),"\n",(0,i.jsx)(n.p,{children:"This article explains how to copy network traffic running through a deployed AWS App to another App. For additional information about traffic mirroring, see AWS Documentation."}),"\n",(0,i.jsx)(n.p,{children:"This is done by calling two hidden commands on the AWS cloud provider via the CloudShell Automation API:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CreateTrafficMirroring"}),": Deploys traffic mirror sessions, traffic targets and filters, and associates them with the sandbox VPC"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"RemoveTrafficMirroring"}),": Tears down traffic mirroring sessions and related AWS resources."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Source EC2 instance must be a Nitro-based instance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Target EC2 instance must have UDP port 4789 opened for traffic from the source instance. You can do this via the\xa0Set ",(0,i.jsx)(n.code,{children:"AppSecurityGroups"}),"\xa0API method, setting the target instance to accept all sandbox traffic or using the\xa0",(0,i.jsx)(n.strong,{children:"Inbound Ports"}),"\xa0attribute on the App template."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Source and target NICs are required for the\xa0",(0,i.jsx)(n.code,{children:"CreateTrafficMirroring"}),"\xa0call. Starting with\xa0",(0,i.jsx)(n.em,{children:"cloudshell-cp-aws"}),"\xa0versions 2.4.3.x, NIC has been added to VM Details, to facilitate calling the resource command."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A source network interface may be tapped up to 3 sessions."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A target may have open sessions with up to 10 different sources (some dedicated instance types can have more)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For details, see this AWS Documentation page:\xa0",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html",children:"Traffic Mirroring Limits and Considerations"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"command-interface",children:"Command interface"}),"\n",(0,i.jsx)(n.p,{children:"Mandatory parameters are indicated."}),"\n",(0,i.jsx)(n.h3,{id:"createtrafficmirroring",children:"CreateTrafficMirroring"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DriverRequest"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Actions"}),": List containing the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"actionId"}),": (Str)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"}),": (Mandatory, Str) Must be \u201cCreateTrafficMirroring\u201d"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"actionParams"}),": List containing the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"}),": (Mandatory, Str) Must be \u201cCreateTrafficMirroringParams\u201d"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"sourceNicId"}),": (Mandatory, Str) Network interface ID of the source EC2 instance"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"targetNicId"}),": (Mandatory, Str) Network interface ID of the target EC2 instance (the traffic mirror target)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"sessionNumber"}),": (Str) Traffic mirror session number that determines the order in which sessions are evaluated when an interface is used by multiple sessions (smallest number takes priority). Every traffic mirror session requires one. If left empty, CloudShell will allocate a number."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"filterRules"}),": List of the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"}),": (Mandatory, Str) Must be \u201cTrafficFilterRule\u201d"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"direction"}),": (Mandatory, Str) Defines the traffic direction on the source NIC. Valid values are\xa0",(0,i.jsx)(n.strong,{children:"ingress"}),"\xa0(inbound) and\xa0",(0,i.jsx)(n.strong,{children:"egress"}),"\xa0(outbound)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"sourcePortRange"}),": (Type) Port range (",(0,i.jsx)(n.strong,{children:"fromPort"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"toPort"}),") of the source EC2 instance (from which the traffic is sent)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"destinationPortRange"}),": (Type) Port range (",(0,i.jsx)(n.strong,{children:"fromPort"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"toPort"}),") of the target EC2 instance (to which the traffic is sent)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"protocol"}),": (Mandatory, Str) Port protocol (tcp, udp, etc.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"sourceCidr"}),": (Str) CIDR of the source EC2 instance (from which the traffic is sent)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"destinationCidr"}),": (Str) CIDR of the target EC2 instance (to which the traffic is sent)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"removetrafficmirroring",children:"RemoveTrafficMirroring"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DriverRequest"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Actions"}),": List containing the following:"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"actionId"}),": (Str)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"}),": (Mandatory, Str) Must be \u201cRemoveTrafficMirroring\u201d"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"targetNicId"}),": (Mandatory, Str) Network interface ID of the target EC2 instance (the traffic mirror target)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"sessionId"}),": (Mandatory, Str) Traffic mirror session ID (this ID is automatically assigned by AWS and returned in the\xa0",(0,i.jsx)(n.em,{children:"CreateTrafficMirroring"}),"\xa0output)."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure to include both the\xa0",(0,i.jsx)(n.code,{children:"sessionId"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"TargetNicId"}),"\xa0parameters, but provide a value only for one of them, as illustrated in the\xa0",(0,i.jsx)(n.a,{href:"https://devguide.quali.com/reference/2020.1.0/aws-traffic-mirroring.html#removetrafficmirroring-1",children:"RemoveTrafficMirroring"}),"\xa0example."]}),"\n",(0,i.jsxs)(n.li,{children:["You cannot use the\xa0",(0,i.jsx)(n.code,{children:"sourceNic"}),"\xa0parameter to remove traffic mirroring sessions."]}),"\n"]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"usingreservationidto-get-nics",children:"Using\xa0reservationId\xa0to get NICs"}),"\n",(0,i.jsx)(n.p,{children:"If the EC2 instance has a single NIC:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"reservation = session.GetReservationDetails('b9818bde-fc86-49f2-beae-74e238a3ad07').ReservationDescription\n\nresource_interface = next(next(p.Value for p in r.VmDetails.NetworkData[0].AdditionalData if p.Name=='nic') for r in reservation.Resources if 'resource_name' in r.Name)\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the EC2 instance has more than one NICs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from cloudshell.api.cloudshell_api import CloudShellAPISession\n\n\nsession = CloudShellAPISession(\'localhost\', "admin", "admin", "Global")\nreservation = session.GetReservationDetails(\'b9818bde-fc86-49f2-beae-74e238a3ad07\').ReservationDescription\n\nfor resource in reservation.Resources:\n    if resource.VmDetails and len(resource.VmDetails.NetworkData)>0:\n        for network_data in resource.VmDetails.NetworkData:\n            for additional_data in network_data.AdditionalData:\n                if additional_data.Name=="nic":\n                    nic = additional_data.Value\n'})}),"\n",(0,i.jsx)(n.h3,{id:"createtrafficmirroring-1",children:"CreateTrafficMirroring"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import cloudshell.api.cloudshell_api as api\n\n\nsession = api.CloudShellAPISession(\'localhost\', \'admin\', \'admin\', \'Global\')\n\nresult = session.ExecuteCommand(reservationId=\'9a8e81ac-5dd1-483a-9937-c17e477f455d\',\n                                targetName=\'AWS\',\n                                targetType=\'Resource\',\n                                commandName=\'CreateTrafficMirroring\',\n                                commandInputs=[api.InputNameValue(Name=\'request\', Value=\'\'\'\n                                {\n                                     "driverRequest": {\n                                                         "actions": [\n                                                                         {\n                                                                             "actionId": "41f206a1-a6c0-4603-90f7-6492cd0fb00d",\n                                                                             "type": "CreateTrafficMirroring",\n                                                                             "actionParams": {"type": "CreateTrafficMirroringParams",\n                                                                                              "sourceNicId": "eni-008322622e675cd80",\n                                                                                              "targetNicId": "eni-05fc8d0b34b762305",\n                                                                                              "sessionNumber": "5",\n                                                                                              "filterRules": [{"type": "TrafficFilterRule",\n                                                                                                               "direction": "ingress",\n                                                                                                               "protocol": "tcp",\n                                                                                                               "sourcePortRange": {"type": "PortRange", "fromPort": "50000", "toPort": "65535"},\n                                                                                                               "sourceCidr": "192.168.0.124/24"\n                                                                                                             }]\n                                                                                              }\n                                                                         }\n                                                                     ]\n                                                      }\n                                }\n                                \'\'\')]\n                                )\nprint result.Output\n'})}),"\n",(0,i.jsx)(n.h3,{id:"removetrafficmirroring-1",children:"RemoveTrafficMirroring"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cloudshell.api.cloudshell_api as api\n\nsession = api.CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\n\nresult = session.ExecuteCommand(reservationId='514d18dc-cd6c-4725-ac60-9e281d0b8e27',\n                                targetName='AWS',\n                                targetType='Resource',\n                                commandName='RemoveTrafficMirroring',\n                                commandInputs=[api.InputNameValue(Name='request', Value='''\n                                         {\n                                             \"driverRequest\": {\n                                                                 \"actions\": [\n                                                                                 {\n                                                                                     \"actionId\": \"514d18dc-cd6c-4725-ac60-9e281d0b8e27\",\n                                                                                     \"type\": \"RemoveTrafficMirroring\",\n                                                                                     \"sessionId\": \"\",\n                                                                                     \"targetNicId\": \"eni-08e44d9a954444e3f\"\n                                                                                 }\n                                                                             ]\n                                                               }\n                                         }\n                                         ''')]\n                                )\nprint result.Output\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>o});var i=r(11504);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);