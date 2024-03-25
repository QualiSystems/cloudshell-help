"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[14334],{90120:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var l=i(17624),s=i(4552);const o={sidebar_position:2},t="Deploy QualiX 4.1 using Docker",r={id:"install-configure/qualix/install-configure/qualix-4.1-using-docker",title:"Deploy QualiX 4.1 using Docker",description:"This process deploys two docker containers, quali\\_hub/qualix\\_guacamole and quali\\_hub/qualix\\_guacd, and the network they will use to communicate with each other.",source:"@site/docs/install-configure/qualix/install-configure/qualix-4.1-using-docker.md",sourceDirName:"install-configure/qualix/install-configure",slug:"/install-configure/qualix/install-configure/qualix-4.1-using-docker",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/qualix-4.1-using-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/install-configure/qualix-4.1-using-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create VM using the OVF Template (vSphere)",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/create-vm-using-ovf"},next:{title:"Deploy QualiX 5.0 and up Using Docker",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/qualix-5.0-using-docker"}},a={},c=[{value:"Additional Options",id:"additional-options",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"deploy-qualix-41-using-docker",children:"Deploy QualiX 4.1 using Docker"}),"\n",(0,l.jsxs)(n.p,{children:["This process deploys two docker containers, ",(0,l.jsx)(n.strong,{children:"quali_hub/qualix_guacamole"})," and ",(0,l.jsx)(n.strong,{children:"quali_hub/qualix_guacd"}),", and the network they will use to communicate with each other."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Docker for Windows"})," is not supported."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"Make sure to have docker together with iptables when running containers on a linux vm"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To deploy QualiX using Docker:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Install Docker Engine, as explained in this ",(0,l.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"docker docs article"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Install Docker Compose, as explained in this ",(0,l.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"docker docs article"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Run the following from the ",(0,l.jsx)(n.code,{children:"/opt/"})," directory:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"sudo wget https://quali-prod-binaries.s3.amazonaws.com/guacamole-quali-install-docker.sh\nsudo chmod +x guacamole-quali-install-docker.sh\nsudo ./guacamole-quali-install-docker.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start the QualiX container stack by running the following from the ",(0,l.jsx)(n.code,{children:"/opt/qualix"})," directory:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"sudo ./start.sh"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To verify that QualiX is up and running, run the following:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"sudo status\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["After deploying QualiX on docker, continue with ",(0,l.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/work/QualiSystems/Documentation/CloudShell/9.3/CloudShell%20Help%20Center/Content/QualiX/Post-Instl-Cnfg.htm#_Post_installation_configuration"}),(0,l.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Post-Instl-Cnfg.htm",children:"Post Installation Configuration"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"additional-options",children:"Additional Options"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To stop QualiX (stops the container stack):"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"sudo stop\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To restart QualiX after boot (inactive docker):"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"sudo systemctl enable docker"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To get the docker logs:"})}),"\n",(0,l.jsxs)(n.p,{children:["See ",(0,l.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Troubleshooting/Collecting-logs.htm#QualiX2",children:"Docker logs (QualiX 4.1 and below)"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To attach the docker container to a shell:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'sudo docker exec -it <container_id>/bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To destroy running containers:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"sudo docker stop guacamole guacd\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"sudo docker rm guacamole guacd\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To start the containers:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"cd /opt/qualix\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"sudo ./start.sh\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>t});var l=i(11504);const s={},o=l.createContext(s);function t(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);