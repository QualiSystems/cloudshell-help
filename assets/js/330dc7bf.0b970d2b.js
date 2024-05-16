"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[7824],{45284:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(17624),o=n(4552);const i={sidebar_position:1},t="Auto Load Fails",l={id:"troubleshooting/resource-manager/auto-load-fails",title:"Auto Load Fails",description:"Error Messages",source:"@site/versioned_docs/version-2023.3/troubleshooting/resource-manager/auto-load-fails.md",sourceDirName:"troubleshooting/resource-manager",slug:"/troubleshooting/resource-manager/auto-load-fails",permalink:"/cloudshell-help/troubleshooting/resource-manager/auto-load-fails",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/resource-manager/auto-load-fails.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reserving blueprints fails on nonexistent resource conflicts",permalink:"/cloudshell-help/troubleshooting/cloudshell-portal/reserving-blueprints-fails-on-nonexistent-resource-conflicts"},next:{title:'ElastiCube Table Build Error: "key already exists in the collection"',permalink:"/cloudshell-help/troubleshooting/insight/elasticube-table-build-error-key-already-exists-in-the-collection"}},a={},c=[{value:"Error Messages",id:"error-messages",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"auto-load-fails",children:"Auto Load Fails"}),"\n",(0,s.jsx)(r.h2,{id:"error-messages",children:"Error Messages"}),"\n",(0,s.jsx)(r.p,{children:"Autoloading a L1 resource:"}),"\n",(0,s.jsxs)(r.admonition,{type:"danger-one-line",children:[(0,s.jsx)(r.p,{children:"Application Warning"}),(0,s.jsx)(r.p,{children:"An error occurred trying to execute a command on a resource at this address: xx.x.xxx.xx."}),(0,s.jsx)(r.p,{children:"The error was: There was an error talking to the server: System.Net.Sockets.SocketException (0x80004005): No connection could be made because the target machine actively refused it 127.0.0.1:4008"}),(0,s.jsx)(r.p,{children:"at System.NetSockets.TcpClient.connect(String hostname, Int32 port)"}),(0,s.jsx)(r.p,{children:"at QualiSystems.ResourceManagement.Service.APIService.TclDriverTcpClient.SendMessage(String message, String responseTerminationString, Func '1 isDriverAvailable,Int32 timeout, Int32 receivingDataTimeout)"})]}),"\n",(0,s.jsx)(r.p,{children:"Autoloading a 1st or 2nd Gen resource:"}),"\n",(0,s.jsxs)(r.admonition,{type:"danger-one-line",children:[(0,s.jsx)(r.p,{children:"Synchronization conflicts"}),(0,s.jsx)(r.p,{children:"The operation completed with the following errors:"}),(0,s.jsx)(r.p,{children:"* Resource 'cisco switch resource' synchronization failed due to a driver error:"}),(0,s.jsx)(r.p,{children:"'get_inventory' command failed with 'SessionManagerException' error."}),(0,s.jsx)(r.p,{children:"Description: ('SessionManagerImpl', 'Failed to create new session for type SSH, TELNET, CONSOLE_SSH, CONSOLE_TELNET, see logs for details')."})]}),"\n",(0,s.jsxs)(r.admonition,{type:"danger-one-line",children:[(0,s.jsx)(r.p,{children:"Synchronization conflicts"}),(0,s.jsx)(r.p,{children:"The operation completed with the following errors:"}),(0,s.jsx)(r.p,{children:"* Resource 'aaa router test' synchronization failed due to a driver error:"}),(0,s.jsx)(r.p,{children:"'get_inventory' command failed with 'PySnmpError' error."}),(0,s.jsx)(r.p,{children:"Description: Bad IPv4/UDP transport address xxx.xxx.xxx.x @161: [Errno 11001] getaddrinfo failed."})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"In Resource Manager, when autoloading a resource fails, the above error messages may appear."}),"\n",(0,s.jsx)(r.p,{children:"All the error messages described in this article stem from the same possible cause."}),"\n",(0,s.jsx)(r.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,s.jsx)(r.p,{children:"The resource's IP address includes blank spaces either before or after the address."}),"\n",(0,s.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"To resolve the issue described above, follow this step:"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["In Resource Manager Client, update the resource's IP address so that there are no blank spaces either before, after, or within the address. See ",(0,s.jsx)(r.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager#updating-resource-details",children:"Updating resource details"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Rerun Autoload."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches",children:"L1 Switches"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,o.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>l,M:()=>t});var s=n(11504);const o={},i=s.createContext(o);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);