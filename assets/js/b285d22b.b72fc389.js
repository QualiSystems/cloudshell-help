"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[4376],{64293:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=o(74848),r=o(28453);const s={sidebar_position:3},t="Using a Proxy to Download Python Packages from Public PyPi",l={id:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi",title:"Using a Proxy to Download Python Packages from Public PyPi",description:"If the CloudShell Server resides on your internal network, you may need to set up an outbound proxy server to allow it to access Public PyPi for downloading Python packages required by your scripts and shells.",source:"@site/versioned_docs/version-2024.1/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi.md",sourceDirName:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments",slug:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi",permalink:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi.md",tags:[],version:"2024.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PyPi Server - Managing Python Shell and Script Dependencies",permalink:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies"},next:{title:"Configuring CloudShell to Execute Python Commands in Offline Mode",permalink:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode"}},a={},c=[{value:"Using configuration file",id:"using-configuration-file",level:2},{value:"Using environment variables",id:"using-environment-variables",level:2},{value:"Points to consider",id:"points-to-consider",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"using-a-proxy-to-download-python-packages-from-public-pypi",children:"Using a Proxy to Download Python Packages from Public PyPi"})}),"\n",(0,i.jsxs)(n.p,{children:["If the CloudShell Server resides on your internal network, you may need to set up an outbound proxy server to allow it to access ",(0,i.jsx)(n.a,{href:"https://pypi.org/",children:"Public PyPi"})," for downloading Python packages required by your scripts and shells."]}),"\n",(0,i.jsx)(n.p,{children:"There are different ways to do this, and we'll cover using a configuration file or environment variables."}),"\n",(0,i.jsx)(n.h2,{id:"using-configuration-file",children:"Using configuration file"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the Execution Server machine, create a file called ",(0,i.jsx)(n.code,{children:"pip.ini"})," under ",(0,i.jsx)(n.code,{children:"C:\\programdata\\pip\\"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"pip.ini"})," specify the proxy server's address as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"[global]\nproxy = http://[username:password@]proxyserver:port\n"})}),"\n",(0,i.jsx)(n.p,{children:"No need to specify the port if it's 80 for HTTP or 443 for HTTPS."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The process may differ if you're on a Linux Execution Server. For details, see the pip official documentation: ",(0,i.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/user_guide/#using-a-proxy-server",children:"https://pip.pypa.io/en/stable/user_guide/#using-a-proxy-server"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"using-environment-variables",children:"Using environment variables"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Depending on the proxy's communication protocol, create an environment variable on the Execution Server machine:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"http_proxy"})," or ",(0,i.jsx)(n.code,{children:"https_proxy variables"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the variable's address in the format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"http://[username:password@]proxyserver:port\n"})}),"\n",(0,i.jsx)(n.p,{children:"No need to specify the port if it's 80 for HTTP or 443 for HTTPS."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"points-to-consider",children:"Points to consider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the proxy, sometimes not all internet access is allowed. In such cases, make sure at least these 2 addresses are allowed (both are over HTTPS and therefore use port 443):"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pypi.org/",children:"https://pypi.org"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://files.pythonhosted.org/",children:"https://files.pythonhosted.org"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When setting the proxy to use, the Execution Server will also try to reach out to the Quali Server (where the local PyPi Server is installed) using this proxy information, so if the proxy needs to allow access to the Quali Server machine, this is something you might want to consider adding to the proxy."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you cannot add the Quali Server to the proxy, one option is to use the environment variables, and only set the ",(0,i.jsx)(n.code,{children:"https_proxy"})," variable, which will be used to access the online Python repositories. However, this will not be used for HTTP access to the local PyPi Server on Quali Server."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that only using the ",(0,i.jsx)(n.code,{children:"https_proxy"})," variable will not work if the local PyPi Server is also secured and uses HTTPS. In this case, you need to either apply the changes to the proxy as mentioned in the note above, or use the offline mode (i.e. copy all packages to the local PyPi repository)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/install-configure/cloudshell-suite/secure-communication/config-secured-pypi",children:"Configuring PyPi Server to Work in Secure Mode"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var i=o(96540);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);