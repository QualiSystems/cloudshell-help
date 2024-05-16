"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[93224],{32008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=t(17624),i=t(4552);const s={sidebar_position:4},l="Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate",r={id:"install-configure/qualix/post-installation-config/config-jks-cert",title:"Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate",description:"This section explains how to configure secure remote connections to devices and VMs from CloudShell sandboxes using Java KeyStore.",source:"@site/versioned_docs/version-2023.3/install-configure/qualix/post-installation-config/config-jks-cert.md",sourceDirName:"install-configure/qualix/post-installation-config",slug:"/install-configure/qualix/post-installation-config/config-jks-cert",permalink:"/cloudshell-help/install-configure/qualix/post-installation-config/config-jks-cert",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/qualix/post-installation-config/config-jks-cert.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configure SSL Certificate on QualiX 4.1 Docker Container",permalink:"/cloudshell-help/install-configure/qualix/post-installation-config/enable-https/configure-ssl-cert"},next:{title:"Customize Remote Access Terminals",permalink:"/cloudshell-help/install-configure/qualix/post-installation-config/customize-remote-access"}},c={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"enable-qualix-docker-deployment-to-work-with-trusted-java-keystore-certificate",children:"Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate"}),"\n",(0,o.jsx)(n.p,{children:"This section explains how to configure secure remote connections to devices and VMs from CloudShell sandboxes using Java KeyStore."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To enable Java Keystore connection to sandbox elements:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"SSH to the docker server."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy the jks certificate file to the ",(0,o.jsx)(n.strong,{children:"guacamole"})," container, use the ",(0,o.jsx)(n.code,{children:"docker cp"})," command. Place the file in ",(0,o.jsx)(n.code,{children:"/home/guacamole/tomcat"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Enter to the container, "docker exec -ti guacamole bash"'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Edit the ",(0,o.jsx)(n.code,{children:"/home/guacamole/tomcat/server.xml"})," file."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Find the following line:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'"<Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol" maxThreads="150" SSLEnabled="true" scheme="https" secure="true" keystoreFile="/home/guacamole/tomcat/.keystore" keystorePass="123123" clientAuth="false" sslProtocol="TLS" />"\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['Replace highlighted "keystoreFile" ',(0,o.jsx)(n.code,{children:"/home/guacamole/tomcat/.keystore"}),' with new file path, and keystorePass="',(0,o.jsx)(n.strong,{children:"123123"}),'" with the proper password. Remove keystorePass="',(0,o.jsx)(n.strong,{children:"123123"}),'" if not used.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Exit from the container and run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"docker restart guacamole\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Test the certificate."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"To save the configuration:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"docker commit guacamole guacamole_trust\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Edit the ",(0,o.jsx)(n.code,{children:"docker-compose.yml"}),' file and replace "image: qualihub/qualix_guacamole:${TAG_GUACAMOLE}" with "image: guacamole_trust"']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run stop/start.sh and keep the configuration."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var o=t(11504);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);