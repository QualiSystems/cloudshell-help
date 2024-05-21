"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[87666],{45436:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=i(17624),r=i(4552);const s={sidebar_position:3},t="Configure PyPi Server to Work in Secure Mode",c={id:"install-configure/cloudshell-suite/secure-communication/config-secured-pypi",title:"Configure PyPi Server to Work in Secure Mode",description:"This article explains how to configure PyPi Server behind a reverse proxy for secure communication (SSL) between PyPi Server and the Execution Servers.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/secure-communication/config-secured-pypi.md",sourceDirName:"install-configure/cloudshell-suite/secure-communication",slug:"/install-configure/cloudshell-suite/secure-communication/config-secured-pypi",permalink:"/install-configure/cloudshell-suite/secure-communication/config-secured-pypi",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/secure-communication/config-secured-pypi.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure Python Drivers and Scripts to Run in HTTPS Mode",permalink:"/install-configure/cloudshell-suite/secure-communication/config-secured-python-drivers"},next:{title:"Configure Sandbox API to Work in HTTPS Mode",permalink:"/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api"}},l={},a=[{value:"How PyPi Server works",id:"how-pypi-server-works",level:2},{value:"Configuring the ngnix process",id:"configuring-the-ngnix-process",level:2},{value:"Verification",id:"verification",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure-pypi-server-to-work-in-secure-mode",children:"Configure PyPi Server to Work in Secure Mode"}),"\n",(0,o.jsx)(n.p,{children:"This article explains how to configure PyPi Server behind a reverse proxy for secure communication (SSL) between PyPi Server and the Execution Servers."}),"\n",(0,o.jsxs)(n.p,{children:["Note that this article provides the recommended configuration using ",(0,o.jsx)(n.strong,{children:"nginx"})," on a Windows machine, but such configurations can also be achieved using a different OS like Linux or using a separate machine."]}),"\n",(0,o.jsx)(n.h2,{id:"how-pypi-server-works",children:"How PyPi Server works"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"PyPi Server"})," is an independent Python process, which runs on the Python environment of the ",(0,o.jsx)(n.strong,{children:"Quali Server"})," machine. It is managed by the Quali Server process. Therefore, the below configuration procedure should be done on the machine where the Quali Server is running, and while it\u2019s running, to ensure PyPi Server is up as well."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-ngnix-process",children:"Configuring the ngnix process"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"In this example, we are using nginx-1.12.2 as this was the latest suitable Windows version at the time of writing this article."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["On the Quali Server machine, create a containing folder for the nginx files and folders you will download. For example: ",(0,o.jsx)(n.code,{children:"C:\\nginx\\nginx-1.12.2"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Download and extract nginx to the folder."}),"\n",(0,o.jsxs)(n.p,{children:["The folder should contain the ",(0,o.jsx)(n.code,{children:"nginx.exe"})," file and some other folders with config files and related docs."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Make sure you have a certificate pair for SSL connection - a file for the key and a file for the certificate (they can be PEM files). For illustration purposes, we\u2019ll use the names \u201cMyKey.pem\u201d and \u201cMyCert.crt\u201d."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a new folder, ",(0,o.jsx)(n.code,{children:"C:\\nginx\\nginx-1.12.2\\pypi-config"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a new file called ",(0,o.jsx)(n.code,{children:"pypiConfig.conf"})," and save it with this content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"events {\n       worker_connections 768;\n   }\nhttp {\n   upstream adam {\n   server 127.0.0.1:8036;\n }\n server {\n     listen 443 ssl;\n     ssl_certificate           C:/MyCert1.crt;\n     ssl_certificate_key       C:/MyKey1.pem;\n     ssl_session_timeout  5m;\n     ssl_protocols  SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n     ssl_ciphers HIGH:!ADH:!MD5;\n     ssl_prefer_server_ciphers on;\n }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"There are many more options that can be done with an nginx configuration, but this is the basic configuration."}),"\n",(0,o.jsxs)(n.p,{children:["Note that \u201c8036\u201d is the default port for communication between PyPi Server and CloudShell. If you change this value using the ",(0,o.jsx)(n.code,{children:"PypiServerPort"})," key, you must set the same value here."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"To activate nginx, run the following in command-line:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"C:\\nginx\\nginx-1.12-2\\nginx.exe -c .\\pypi-config\\pypiConfig.conf\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,o.jsxs)(n.p,{children:["To verify the configuration is working, open ",(0,o.jsx)(n.code,{children:"https://localhost"})," in your browser and see that you get the PyPi Server welcome page."]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The page in ",(0,o.jsx)(n.code,{children:"https://localhost"})," still indicates that the connection is not secured. To correct this, add the certificate to the local certificate bank on the machine."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If the certificates are not valid, try to create them using ",(0,o.jsx)(n.code,{children:"openssl"})," and not ",(0,o.jsx)(n.code,{children:"MakeCrt"}),", and use them as \u201cPEM\u201d files."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you get an error when starting the nginx, check your indentation in the ",(0,o.jsx)(n.code,{children:"pypiConfig.conf"})," file. You can also verify the configuration file by running the following in command-line:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"nginx.exe -t -c .\\pypi-config\\pypiConfig.conf\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi",children:"Using a Proxy to Download Python Packages from Public PyPi"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>t});var o=i(11504);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);