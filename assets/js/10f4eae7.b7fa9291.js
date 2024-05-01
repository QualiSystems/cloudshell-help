"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[79988],{6584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(17624),r=t(4552);const s={sidebar_position:2},o="Configure Python Drivers and Scripts to Run in HTTPS Mode",c={id:"install-configure/cloudshell-suite/secure-communication/config-secured-python-drivers",title:"Configure Python Drivers and Scripts to Run in HTTPS Mode",description:"The feature allows secure communication (https) between any Python driver/script that uses CloudShell Automation API and Quali Server.",source:"@site/docs/install-configure/cloudshell-suite/secure-communication/config-secured-python-drivers.md",sourceDirName:"install-configure/cloudshell-suite/secure-communication",slug:"/install-configure/cloudshell-suite/secure-communication/config-secured-python-drivers",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-python-drivers",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/secure-communication/config-secured-python-drivers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure CloudShell Portal to Work in HTTPS Mode",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-portal"},next:{title:"Configure PyPi Server to Work in Secure Mode",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-pypi"}},l={},a=[{value:"Bind a new certificate to the Quali Server port",id:"bind-a-new-certificate-to-the-quali-server-port",level:2},{value:"Creating a mock certificate",id:"creating-a-mock-certificate",level:3},{value:"Binding the certificate to the Quali Server port",id:"binding-the-certificate-to-the-quali-server-port",level:3},{value:"Enable HTTPS mode on Quali Server",id:"enable-https-mode-on-quali-server",level:2},{value:"Enable HTTPS mode on Linux Execution Servers",id:"enable-https-mode-on-linux-execution-servers",level:2},{value:"Set python drivers and scripts to create an HTTPS session",id:"set-python-drivers-and-scripts-to-create-an-https-session",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-python-drivers-and-scripts-to-run-in-https-mode",children:"Configure Python Drivers and Scripts to Run in HTTPS Mode"}),"\n",(0,i.jsx)(n.p,{children:"The feature allows secure communication (https) between any Python driver/script that uses CloudShell Automation API and Quali Server."}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,i.jsx)(n.p,{children:"Once HTTPS mode is enabled, Quali Server will only respond to HTTPS\xa0communication when using XML RPC or TCL."})}),"\n",(0,i.jsx)(n.p,{children:"This is a three-step process:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Creating",children:"Bind a new certificate to the Quali Server port"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Enable",children:"Enable HTTPS mode on Quali Server"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Enable2",children:"Enable HTTPS mode on Linux Execution Servers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Set",children:"Set python drivers and scripts to create an HTTPS session"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bind-a-new-certificate-to-the-quali-server-port",children:"Bind a new certificate to the Quali Server port"}),"\n",(0,i.jsx)(n.p,{children:"To bind a new certificate, first obtain the certificate and then bind it to the Quali Server port."}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-mock-certificate",children:"Creating a mock certificate"}),"\n",(0,i.jsxs)(n.p,{children:["If you don't have a certificate, use the below procedure to create a mock certificate. If you already have a certificate, skip this section and continue with ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/secure-md-Python.htm#Binding",children:"Binding the certificate to the Quali Server port"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To create a mock certificate:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"On the Quali Server machine, open command-prompt as administrator."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run this command to create a base certificate:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"makecert.exe -sk RootCA -sky signature -pe -n CN=<Quali-Server-hostname/IP> -r -sr LocalMachine -ss Root MyCA.cer\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run this command to create a client certificate based on the base certificate:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"makecert.exe -sk server -sky exchange -pe -n CN=<Quali-Server-hostname/IP> -ir LocalMachine -is Root -ic MyCA.cer -sr LocalMachine -ss My MyCA2.cer\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the location of the ",(0,i.jsx)(n.code,{children:"makecert.exe"})," file to the path environment variables (system):"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(54868).c+"",width:"696",height:"670"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"binding-the-certificate-to-the-quali-server-port",children:"Binding the certificate to the Quali Server port"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To bind the certificate to the Quali Server port:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the Quali Server machine, in the ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Certificates"})," folder, double-click the ",(0,i.jsx)(n.code,{children:"MyCA2.cer"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Details"})," tab, scroll down and select ",(0,i.jsx)(n.strong,{children:"Thumbprint"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Copy the entire hex value to notepad."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remove any spaces and copy the updated hex value."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open command-prompt as administrator and run the following command with the updated value:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"netsh http add sslcert ipport=0.0.0.0:8029 certhash=PASTE_THE_HEX_VALUE_HERE appid={1b1e7a9d-1af7-4922-88b9-8220e09cc071}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enable-https-mode-on-quali-server",children:"Enable HTTPS mode on Quali Server"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file, and add the following key:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'<add key="ResourceManagerAPIHostAddress" value="https://localhost:{0}/ResourceManagerApiService"/>'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"{0} will be populated by CloudShell."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Restart the ",(0,i.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enable-https-mode-on-linux-execution-servers",children:"Enable HTTPS mode on Linux Execution Servers"}),"\n",(0,i.jsx)(n.p,{children:"If you are using any Execution Servers on Linux machines, do the following to allow those Execution Servers to use HTTPS\xa0without a certificate:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Set the QS_PYTHON_SETUP_TEARDOWN_DRIVER_IGNORE_SSL_ERRORS environment variable with the value "true" on the Execution Server machines.'}),"\n",(0,i.jsx)(n.p,{children:"This will disable SSL errors."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"set-python-drivers-and-scripts-to-create-an-https-session",children:"Set python drivers and scripts to create an HTTPS session"}),"\n",(0,i.jsx)(n.p,{children:"To use the CloudShell Automation API with a server configured to work in HTTPS, the client should create a session with a matching connection method."}),"\n",(0,i.jsx)(n.p,{children:"For example, instead of using this method, which was used before CloudShell 8.2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"session = api.CloudShellAPISession(context.connectivity.server_address, context.reservation.domain, token_id=context.connectivity.admin_auth_token)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Use this method in your drivers and scripts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'session = api.CloudShellAPISession(context.connectivity.server_address, context.reservation.domain, token_id=context.connectivity.admin_auth_token,  cloudshell_api_scheme="https")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,i.jsx)(n.code,{children:"cloudshell_scripts_helpers.get_api_session()"})," out-of-the-box script helper that uses the orchestration script context from the Execution Server and connects with the suitable method."]}),"\n",(0,i.jsxs)(n.p,{children:["To know the correct API scheme (HTTP or HTTPS), we extended the driver context and orchestration script context to include the ",(0,i.jsx)(n.code,{children:"tsAPIScheme"})," property. This propery is placed in the connectivity info JSON and will be populated by the Execution Server according to the server configuration method."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},54868:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/HttpsModePathVar-a6fcd7cb6dca29d42e947c5af7f05b24.png"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var i=t(11504);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);