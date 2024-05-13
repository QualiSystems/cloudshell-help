"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[27184],{97448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(17624),i=t(4552);const s={sidebar_position:5},r="Enable WinRM on Windows VMs to Support Configuration Management",l={id:"devguide/enable-winrm-on-win-vm-for-cfg-mng",title:"Enable WinRM on Windows VMs to Support Configuration Management",description:"To allow the Execution Server to run configuration management on a Windows VM, you need to configure the Windows Remote Management (WinRM) service on the App's cloud provider VM. The configuration needs to be included in the VM's image or VM template. However, if the image doesn't include this configuration, you can specify a script that performs this configuration on the deployed VM, as explained below.",source:"@site/docs/devguide/enable-winrm-on-win-vm-for-cfg-mng.md",sourceDirName:"devguide",slug:"/devguide/enable-winrm-on-win-vm-for-cfg-mng",permalink:"/cloudshell-help/next/devguide/enable-winrm-on-win-vm-for-cfg-mng",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/enable-winrm-on-win-vm-for-cfg-mng.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Passing Variables From the Setup Script to Configuration Management",permalink:"/cloudshell-help/next/devguide/develop-config-management-scripts-for-apps/passing-variables-to-cfg-mng"},next:{title:"Developing Custom Cloud Provider Shells",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells"}},a={},c=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"enable-winrm-on-windows-vms-to-support-configuration-management",children:"Enable WinRM on Windows VMs to Support Configuration Management"}),"\n",(0,o.jsx)(n.p,{children:"To allow the Execution Server to run configuration management on a Windows VM, you need to configure the Windows Remote Management (WinRM) service on the App's cloud provider VM. The configuration needs to be included in the VM's image or VM template. However, if the image doesn't include this configuration, you can specify a script that performs this configuration on the deployed VM, as explained below."}),"\n",(0,o.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The below procedure explains how to configure WinRM over HTTP. If you want to configure WinRM to run over HTTPS, visit this ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/troubleshoot/windows-client/system-management-components/configure-winrm-for-https",children:"Microsoft Docs article"}),". WinRM over HTTPS only applies to custom scripts at this time. If WinRM is configured to run over HTTPS, the execution server will first try to run the custom script over HTTPS and then fall back to HTTP if HTTPS is unsuccessful. To prevent the fallback, set the ",(0,o.jsx)(n.strong,{children:"winrm_transport"})," parameter to ",(0,o.jsx)(n.strong,{children:"ssl"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["In CloudShell 8.0, we provide App Starter Packs that deploy Azure Windows VMs with this configuration. For details, contact ",(0,o.jsx)(n.a,{href:"http://support.quali.com/",children:"Quali Support"}),"."]}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To configure the connection:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the Windows VM, start the ",(0,o.jsx)(n.strong,{children:"Windows Remote Management"})," service and set the ",(0,o.jsx)(n.strong,{children:"Startup type"})," to ",(0,o.jsx)(n.strong,{children:"Automatic"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run command-line as administrator."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run each of the following commands separately (you may need to acknowledge the running of some of these commands in the process):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"winrm quickconfig\nwinrm set winrm/config/service '@{AllowUnencrypted=\"true\"}'\nwinrm set winrm/config/service/Auth '@{Basic=\"true\"}'\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"If you encounter an error message stating that these commands are invalid, consider trying the commands without the single quotes."})})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If the VM is not part of a domain, you need to make sure the deployed VM's newly created network is private. If the network is public, the firewall will not allow WinRM connections through."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open the Windows ",(0,o.jsx)(n.strong,{children:"Local Security Policy"})," window (secpol.msc in Command-Line) ",(0,o.jsx)(n.strong,{children:"> Network List Manager Policies > Unidentified Networks"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.strong,{children:"Location type"})," to ",(0,o.jsx)(n.strong,{children:"Private"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/#adding-app-templates",children:"Adding App templates"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var o=t(11504);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);