"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[32012],{12788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(17624),o=t(4552);const r={sidebar_position:14},i="PyPi Server",d={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/pypi-server",title:"PyPi Server",description:"Set the online computer's name and port",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/pypi-server.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/pypi-server",permalink:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/pypi-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/pypi-server.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Online Help",permalink:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/online-help"},next:{title:"Registration, Passwords, Emails, and Licenses",permalink:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/registration-passwords-emails-and-licenses"}},l={},c=[{value:"Set the online computer&#39;s name and port",id:"set-the-online-computers-name-and-port",level:2},{value:"Define the online computer as a trusted host",id:"define-the-online-computer-as-a-trusted-host",level:2},{value:"Set a secondary online python packages repository",id:"set-a-secondary-online-python-packages-repository",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pypi-server",children:"PyPi Server"}),"\n",(0,s.jsx)(n.h2,{id:"set-the-online-computers-name-and-port",children:"Set the online computer's name and port"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This applies to CloudShell deployments using PyPi Server to retrieve and serve Python dependencies from a dedicated online computer."})}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:'<add key="RequirementsRepository" value="http://<hostname|IP>:<port>"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"hostname or IP address and port"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"customer.config"})," CloudShell Execution Server installation directories"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"N/A"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"Execution Server"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"8.2 and above"})]})]})}),"\n",(0,s.jsx)(n.h2,{id:"define-the-online-computer-as-a-trusted-host",children:"Define the online computer as a trusted host"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This applies to CloudShell deployments using PyPi Server to retrieve and serve Python dependencies from a dedicated online computer."})}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:'<add key="RequirementsTrustedHost" value="http://<hostname|IP>:<port>"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsxs)("td",{children:["hostname or IP address specified in the ",(0,s.jsx)(n.code,{children:"RequirementsRepository"})," configuration key"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"customer.config"})," CloudShell Execution Server installation directories"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"N/A"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"Execution Server"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"8.2 and above"})]})]})}),"\n",(0,s.jsx)(n.h2,{id:"set-a-secondary-online-python-packages-repository",children:"Set a secondary online python packages repository"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Make sure to set this key on all execution servers."})}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:'<add key="RequirementsExtraRepository" value="http://<hostname|IP>:<port>"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"hostname or IP address and port. For example:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'<add key="RequirementsExtraRepository" value=https://testpypi.python.org/simple//>'})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"customer.config"})," CloudShell Execution Server installation directories"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"N/A"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"Execution Server"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"8.2 and above"})]})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>i});var s=t(11504);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);