"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[46336],{70276:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(17624),o=i(4552);const t={sidebar_position:5},r="Configure Quali API to Work in HTTPS Mode",l={id:"install-configure/cloudshell-suite/secure-communication/config-secured-quali-api",title:"Configure Quali API to Work in HTTPS Mode",description:"This article explains how to configure Quali API to run over HTTPS.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/secure-communication/config-secured-quali-api.md",sourceDirName:"install-configure/cloudshell-suite/secure-communication",slug:"/install-configure/cloudshell-suite/secure-communication/config-secured-quali-api",permalink:"/cloudshell-help/install-configure/cloudshell-suite/secure-communication/config-secured-quali-api",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/secure-communication/config-secured-quali-api.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Configure Sandbox API to Work in HTTPS Mode",permalink:"/cloudshell-help/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api"},next:{title:"CloudShell Installation Validation Procedure",permalink:"/cloudshell-help/install-configure/cloudshell-suite/cs-installation-validation"}},c={},a=[];function u(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-quali-api-to-work-in-https-mode",children:"Configure Quali API to Work in HTTPS Mode"}),"\n",(0,s.jsx)(n.p,{children:"This article explains how to configure Quali API to run over HTTPS."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure Quali API over HTTPS:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Quali Server machine, open the Server installation directory's ",(0,s.jsx)(n.code,{children:"customer.config"})," file (usually at ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the following keys:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'<add key="QualiApi.Address" value="https://{Quali Server Address}"/>'})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"{Quali Server Address}"})," is the Quali Server's hosname or IP"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restart ",(0,s.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you don\u2019t have an SSL certificate on the Quali Server, create a self-signed certificate for port 9000 using this PowerShell script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:'if(-not [string]::IsNullOrEmpty($Env:UserDnsDomain)) {\n$Subject = "${Env:ComputerName}.${Env:UserDnsDomain}"\n}\nelse {\n$Subject = $Env:ComputerName\n}\n$certificate = New-SelfSignedCertificate -DnsName $Subject -CertStoreLocation "cert:\\LocalMachine\\My"\n$thumb = $certificate.GetCertHashString()\n& netsh http add sslcert ipport=0.0.0.0:9000 certhash=$thumb appid=`{1b1e7a9d-1af7-4922-88b9-8220e09cc072`}\n'})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>r});var s=i(11504);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);