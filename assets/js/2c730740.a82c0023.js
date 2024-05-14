"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[90304],{46492:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>t});var l=i(17624),s=i(4552);const a={sidebar_position:3},r="Deploy QualiX 5.0 and up Using Docker",o={id:"install-configure/qualix/install-configure/qualix-5.0-using-docker",title:"Deploy QualiX 5.0 and up Using Docker",description:"This article explains how to deploy/upgrade QualiX version 5.0 and up.",source:"@site/docs/install-configure/qualix/install-configure/qualix-5.0-using-docker.md",sourceDirName:"install-configure/qualix/install-configure",slug:"/install-configure/qualix/install-configure/qualix-5.0-using-docker",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/qualix-5.0-using-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/install-configure/qualix-5.0-using-docker.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploy QualiX 4.1 using Docker",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/qualix-4.1-using-docker"},next:{title:"Log into the QualiX Server VM",permalink:"/cloudshell-help/next/install-configure/qualix/log-into-qualix"}},c={},t=[{value:"Deployment and Upgrade",id:"deployment-and-upgrade",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy on a clean VM",id:"deploy-on-a-clean-vm",level:3},{value:"Upgrade QualiX on an existing OVA\xa0VM",id:"upgrade-qualix-on-an-existing-ovavm",level:3},{value:"Upgrade QualiX on an existing Docker machine",id:"upgrade-qualix-on-an-existing-docker-machine",level:3},{value:"Run QualiX",id:"run-qualix",level:2},{value:"Additional Options",id:"additional-options",level:2},{value:"Docker logs",id:"docker-logs",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"deploy-qualix-50-and-up-using-docker",children:"Deploy QualiX 5.0 and up Using Docker"}),"\n",(0,l.jsx)(n.p,{children:"This article explains how to deploy/upgrade QualiX version 5.0 and up."}),"\n",(0,l.jsx)(n.p,{children:"Note that there are two versions of the deployment script:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"deploy-qualix-docker-5.0.1.506.sh"})," installs both the required containers and QualiX on a clean machine."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"guacamole-quali-install-docker-5.0.1.506.sh"})," install Qualix startup scripts and requires Docker to be installed on the machine as a prerequisite"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"deployment-and-upgrade",children:"Deployment and Upgrade"}),"\n",(0,l.jsx)(n.p,{children:"There are three ways to deploy Qualix 5.0 (and up):"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#deploy-on-a-clean-vm",children:"Deploy on a clean VM"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#upgrade-qualix-on-an-existing-ovavm",children:"Upgrade QualiX on an existing OVA\xa0VM"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#upgrade-qualix-on-an-existing-docker-machine",children:"Upgrade QualiX on an existing Docker machine"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"OS: Ubuntu (20.04, 22.04), Centos or RHEL (need subscription)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"deploy-on-a-clean-vm",children:"Deploy on a clean VM"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To deploy QualiX on a clean VM:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Download the latest version of the ",(0,l.jsx)(n.code,{children:"deploy-qualix-docker.sh"})," deployment file from ",(0,l.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/360037650694",children:"CloudShell Download Center"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Install QualiX."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget h <qualix deployment script path>\n chmod +x <qualix deployment script>\n <qualix deployment script>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Where ",(0,l.jsx)(n.strong,{children:"<qualix deployment script path>"})," is the full path to the script, and ",(0,l.jsx)(n.strong,{children:"<qualix deployment script>"})," is the script's filename and extension."]}),"\n",(0,l.jsx)(n.p,{children:"For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget https://quali-prod-binaries.s3.amazonaws.com/deploy-qualix-docker-5.0.1.506.sh\nchmod +x deploy-qualix-docker-5.0.1.506.sh\ndeploy-qualix-docker-5.0.1.506.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/post-installation-config/qualix-config-for-5-and-up",children:"QualiX Configuration for Version 5.0 and up"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start QualiX."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"qualix_start\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"#run-qualix",children:"Run QualiX"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"upgrade-qualix-on-an-existing-ovavm",children:"Upgrade QualiX on an existing OVA\xa0VM"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Stop and disable the ",(0,l.jsx)(n.strong,{children:"qualix-tomcat"}),", ",(0,l.jsx)(n.strong,{children:"qualix-guacd"}),", ",(0,l.jsx)(n.strong,{children:"qualix-wmks-proxy"}),", and ",(0,l.jsx)(n.strong,{children:"nginx"})," services."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"systemctl stop qualix-tomcat; systemctl disable qualix-tomcat\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"systemctl stop qualix-guacd; systemctl disable qualix-guacd\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"systemctl stop qualix-wmks-proxy; systemctl disable qualix-wmks-proxy\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"systemctl stopnginx; systemctl disable nginx\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Install QualiX."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget h <qualix deployment script path>\n chmod +x <qualix deployment script>\n <qualix deployment script>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Where ",(0,l.jsx)(n.strong,{children:"<qualix deployment script path>"})," is the full path to the script, and ",(0,l.jsx)(n.strong,{children:"<qualix deployment script>"})," is the script's filename and extension."]}),"\n",(0,l.jsx)(n.p,{children:"For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget https://quali-prod-binaries.s3.amazonaws.com/deploy-qualix-docker-5.0.1.506.sh\nchmod +x deploy-qualix-docker-5.0.1.506.sh\ndeploy-qualix-docker-5.0.1.506.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"#run-qualix",children:"Run QualiX"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"upgrade-qualix-on-an-existing-docker-machine",children:"Upgrade QualiX on an existing Docker machine"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Stop QualiX."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"qualix_stop\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Back up and uninstall the existing QualiX installation."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"mv /opt/qualix /opt/qualix_bcp\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Install QualiX."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget h <guacamole-quali-install script path>\n chmod +x <guacamole-quali-install script>\n <guacamole-quali-install script>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Where ",(0,l.jsx)(n.strong,{children:"<guacamole-quali-install script path>"})," is the full path to the script, and ",(0,l.jsx)(n.strong,{children:"<guacamole-quali-install script>"})," is the script's filename and extension."]}),"\n",(0,l.jsx)(n.p,{children:"For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget https://quali-prod-binaries.s3.amazonaws.com/guacamole-quali-install-docker-5.0.1.506.sh\nchmod +x guacamole-quali-install-docker-5.0.1.506.sh\nguacamole-quali-install-docker-5.0.1.506.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start Qualix."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"qualix_start\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"#run-qualix",children:"Run QualiX"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"run-qualix",children:"Run QualiX"}),"\n",(0,l.jsx)(n.p,{children:"Once QualiX deployment/upgrade completes, enable the appropriate services."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Available services"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-g"})," enables guacamole, which allows users to use RDP/SSH/VNC/TELNET protocols for remote connections."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-w"})," enables wmks-proxy which allows users to connect to VMs using Vcenter Console."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-n"})," enables nginx services for enhanced security. Enabled automatically when running wmks-proxy. Aggregates the above services to a single entry point, handles security headers and SSL Options for connections, provides additional security and logging capabilities."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-v"})," prints version information and quits."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Available combinations"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Guacamole Service + Nginx Service"})," - Enable Guacamole Service. Allows users to handle security capabilities with Nginx Proxy. This is the default combination."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Guacamole Service + WMKS-Proxy Service + Nginx Proxy"})," - Enable Guacamole and WMKS-Proxy services with a single entry point. Handle security capabilities with Nginx Proxy."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"WMKS-Proxy Service + Nginx Proxy"})," - Enable WMKS-Proxy service only, WMKS-Proxy can only work with enabled Nginx."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Guacamole Service"})," - Enable Guacamole service only. Nginx Proxy service is not used. This option could be useful when use the service in a cluster. For example, AWS or Azure."]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Options 1 - 3 from the above list use Nginx Proxy service, which requires SSL options to be configured. For details, see ",(0,l.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/post-installation-config/qualix-config-for-5-and-up#nginx-proxy-service-options",children:"Nginx proxy service options"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Option 4 uses the Guacamole service only. To configure SSL options for Guacamole, see ",(0,l.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/post-installation-config/qualix-config-for-5-and-up#jks-keystore-options-ssl-settings-for-guacamole-tomcat",children:"JKS Keystore options, SSL settings for Guacamole Tomcat"}),"."]}),"\n"]})}),"\n",(0,l.jsx)(n.p,{children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"qualix_start -g -n -w\n"})}),"\n",(0,l.jsx)(n.h2,{id:"additional-options",children:"Additional Options"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Check the status of the QualiX containers:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"qualix_status\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"docker-logs",children:"Docker logs"}),"\n",(0,l.jsxs)(n.p,{children:["See ",(0,l.jsx)(n.a,{href:"/cloudshell-help/next/troubleshooting/troubleshooting-overview/collecting-logs#docker-logs-qualix-50-and-above",children:"Docker logs (QualiX 5.0 and above)"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>r});var l=i(11504);const s={},a=l.createContext(s);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);