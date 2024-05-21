"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[60352],{90844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=t(17624),s=t(4552);const l={},i="Enable HTTPS Connection Between QualiX and CloudShell Portal",r={id:"install-configure/qualix/post-installation-config/enable-https/index",title:"Enable HTTPS Connection Between QualiX and CloudShell Portal",description:"This section explains how to configure secure remote connections to devices and VMs from CloudShell sandboxes.",source:"@site/versioned_docs/version-2023.3/install-configure/qualix/post-installation-config/enable-https/index.md",sourceDirName:"install-configure/qualix/post-installation-config/enable-https",slug:"/install-configure/qualix/post-installation-config/enable-https/",permalink:"/install-configure/qualix/post-installation-config/enable-https/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/qualix/post-installation-config/enable-https/index.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure VM Web Console Access to vCenter App VMs (QualiX)",permalink:"/install-configure/qualix/post-installation-config/configure-vm-web-console"},next:{title:"Configure SSL Certificate on QualiX 4.1 Docker Container",permalink:"/install-configure/qualix/post-installation-config/enable-https/configure-ssl-cert"}},a={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"enable-https-connection-between-qualix-and-cloudshell-portal",children:"Enable HTTPS Connection Between QualiX and CloudShell Portal"}),"\n",(0,o.jsx)(n.p,{children:"This section explains how to configure secure remote connections to devices and VMs from CloudShell sandboxes."}),"\n",(0,o.jsxs)(n.admonition,{title:"Notes",type:"note",children:[(0,o.jsxs)(n.p,{children:["In order to connect to a device or VM from CloudShell Portal, the resource of the element must include the ",(0,o.jsx)(n.strong,{children:"User"})," and ",(0,o.jsx)(n.strong,{children:"Password"})," attributes. To learn how to add the attributes to a resource, see ",(0,o.jsx)(n.a,{href:"/install-configure/qualix/prepare-and-reserve-blueprint",children:"Prepare and Reserve Blueprint"}),"."]}),(0,o.jsxs)(n.p,{children:["To connect using a service, the service must include an ",(0,o.jsx)(n.strong,{children:"Address"}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To enable SSL connection to sandbox elements:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Make sure to perform the procedure in ",(0,o.jsx)(n.a,{href:"/install-configure/qualix/post-installation-config/configure-remote-access",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In Quali Server, open the following file in a text editor:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"C:\\ProgramData\\QualiSystems\\Settings\\Global\\ServerUniversalSettings.xml"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Scroll down to the ",(0,o.jsx)(n.code,{children:'<ConfigurationSection name="LinkApplications">'})," tag."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"pattern"})," element of each remote access terminal line, do the following:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To secure connections between the web browser and CloudShell Portal, replace ",(0,o.jsx)(n.code,{children:'pattern="http'})," with ",(0,o.jsx)(n.code,{children:'pattern="https'}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To hide the password from CloudShell end-users, replace ",(0,o.jsx)(n.code,{children:"password={Password}"})," with ",(0,o.jsx)(n.code,{children:"password=secure"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Note that starting with QualiX 3.0, connections between CloudShell Portal and the QualiX Server are secure by default (",(0,o.jsx)(n.code,{children:"qualixType=https"}),")."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'<key name="SSH" pattern="https://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password=secure" icon-key="SSH" />\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"qtoken"})," & ",(0,o.jsx)(n.code,{children:"qid"})," keys are automatically filled out by the server and are related to CloudShell security enhancements. You do not need to configure anything related to these keys."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Restart the ",(0,o.jsx)(n.strong,{children:"Quali Server"})," service to apply the changes."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["(Optional) To change the SSL certificate, see ",(0,o.jsx)(n.a,{href:"https://tomcat.apache.org/tomcat-8.0-doc/ssl-howto.html",children:"https://tomcat.apache.org/tomcat-8.0-doc/ssl-howto.html"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>i});var o=t(11504);const s={},l=o.createContext(s);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);