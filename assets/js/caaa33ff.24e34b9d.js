"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[51308],{45996:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=i(17624),o=i(4552);const t={sidebar_position:3},s="Configure PyPi Server to Work in Secure Mode",c={id:"install-configure/cloudshell-suite/secure-communication/config-secured-pypi",title:"Configure PyPi Server to Work in Secure Mode",description:"This article explains how to configure PyPi Server behind a reverse proxy for secure communication (SSL) between PyPi Server and the Execution Servers.",source:"@site/docs/install-configure/cloudshell-suite/secure-communication/config-secured-pypi.md",sourceDirName:"install-configure/cloudshell-suite/secure-communication",slug:"/install-configure/cloudshell-suite/secure-communication/config-secured-pypi",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-pypi",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/secure-communication/config-secured-pypi.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure Python Drivers and Scripts to Run in HTTPS Mode",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-python-drivers"},next:{title:"Configure Sandbox API to Work in HTTPS Mode",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api"}},l={},a=[{value:"How PyPi Server works",id:"how-pypi-server-works",level:2},{value:"Configuring the ngnix process",id:"configuring-the-ngnix-process",level:2},{value:"Verification",id:"verification",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-pypi-server-to-work-in-secure-mode",children:"Configure PyPi Server to Work in Secure Mode"}),"\n",(0,r.jsx)(n.p,{children:"This article explains how to configure PyPi Server behind a reverse proxy for secure communication (SSL) between PyPi Server and the Execution Servers."}),"\n",(0,r.jsxs)(n.p,{children:["Note that this article provides the recommended configuration using ",(0,r.jsx)(n.strong,{children:"nginx"})," on a Windows machine, but such configurations can also be achieved using a different OS like Linux or using a separate machine."]}),"\n",(0,r.jsx)(n.h2,{id:"how-pypi-server-works",children:"How PyPi Server works"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PyPi Server"})," is an independent Python process, which runs on the Python environment of the ",(0,r.jsx)(n.strong,{children:"Quali Server"})," machine. It is managed by the Quali Server process. Therefore, the below configuration procedure should be done on the machine where the Quali Server is running, and while it\u2019s running, to ensure PyPi Server is up as well."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-the-ngnix-process",children:"Configuring the ngnix process"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"In this example, we are using nginx-1.12.2 as this was the latest suitable Windows version at the time of writing this article."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On the Quali Server machine, create a containing folder for the nginx files and folders you will download. For example: ",(0,r.jsx)(n.code,{children:"C:\\nginx\\nginx-1.12.2"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download and extract nginx to the folder."}),"\n",(0,r.jsxs)(n.p,{children:["The folder should contain the ",(0,r.jsx)(n.code,{children:"nginx.exe"})," file and some other folders with config files and related docs."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Make sure you have a certificate pair for SSL connection - a file for the key and a file for the certificate (they can be PEM files). For illustration purposes, we\u2019ll use the names \u201cMyKey.pem\u201d and \u201cMyCert.crt\u201d."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a new folder, ",(0,r.jsx)(n.code,{children:"C:\\nginx\\nginx-1.12.2\\pypi-config"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a new file called ",(0,r.jsx)(n.code,{children:"pypiConfig.conf"})," and save it with this content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"events {\n       worker_connections 768;\n   }\nhttp {\n   upstream adam {\n   server 127.0.0.1:8036;\n }\n server {\n     listen 443 ssl;\n     ssl_certificate           C:/MyCert1.crt;\n     ssl_certificate_key       C:/MyKey1.pem;\n     ssl_session_timeout  5m;\n     ssl_protocols  SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n     ssl_ciphers HIGH:!ADH:!MD5;\n     ssl_prefer_server_ciphers on;\n }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"There are many more options that can be done with an nginx configuration, but this is the basic configuration."}),"\n",(0,r.jsxs)(n.p,{children:["Note that \u201c8036\u201d is the default port for communication between PyPi Server and CloudShell. If you change this value using the ",(0,r.jsx)(n.code,{children:"PypiServerPort"})," key, you must set the same value here."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To activate nginx, run the following in command-line:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"C:\\nginx\\nginx-1.12-2\\nginx.exe -c .\\pypi-config\\pypiConfig.conf\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,r.jsxs)(n.p,{children:["To verify the configuration is working, open ",(0,r.jsx)(n.code,{children:"https://localhost"})," in your browser and see that you get the PyPi Server welcome page."]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The page in ",(0,r.jsx)(n.code,{children:"https://localhost"})," still indicates that the connection is not secured. To correct this, add the certificate to the local certificate bank on the machine."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the certificates are not valid, try to create them using ",(0,r.jsx)(n.code,{children:"openssl"})," and not ",(0,r.jsx)(n.code,{children:"MakeCrt"}),", and use them as \u201cPEM\u201d files."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you get an error when starting the nginx, check your indentation in the ",(0,r.jsx)(n.code,{children:"pypiConfig.conf"})," file. You can also verify the configuration file by running the following in command-line:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"nginx.exe -t -c .\\pypi-config\\pypiConfig.conf\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Pyth-Cnfg-Mds.htm",children:"PyPi Server - Managing Python Shell and Script Dependencies"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/PyPi-Srvr-Proxy.htm",children:"Using a Proxy to Download Python Packages from Public PyPi"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>s});var r=i(11504);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);