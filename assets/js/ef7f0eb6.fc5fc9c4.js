"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[14334],{90120:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=l(17624),i=l(4552);const o={sidebar_position:2},t="Deploy QualiX 4.1 using Docker",a={id:"install-configure/qualix/install-configure/qualix-4.1-using-docker",title:"Deploy QualiX 4.1 using Docker",description:"This process deploys two docker containers, quali\\_hub/qualix\\_guacamole and quali\\_hub/qualix\\_guacd, and the network they will use to communicate with each other.",source:"@site/docs/install-configure/qualix/install-configure/qualix-4.1-using-docker.md",sourceDirName:"install-configure/qualix/install-configure",slug:"/install-configure/qualix/install-configure/qualix-4.1-using-docker",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/qualix-4.1-using-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/install-configure/qualix-4.1-using-docker.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create VM using the OVF Template (vSphere)",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/create-vm-using-ovf"},next:{title:"Deploy QualiX 5.0 and up Using Docker",permalink:"/cloudshell-help/next/install-configure/qualix/install-configure/qualix-5.0-using-docker"}},r={},c=[{value:"Additional Options",id:"additional-options",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-qualix-41-using-docker",children:"Deploy QualiX 4.1 using Docker"}),"\n",(0,s.jsxs)(n.p,{children:["This process deploys two docker containers, ",(0,s.jsx)(n.strong,{children:"quali_hub/qualix_guacamole"})," and ",(0,s.jsx)(n.strong,{children:"quali_hub/qualix_guacd"}),", and the network they will use to communicate with each other."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Docker for Windows"})," is not supported."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Make sure to have docker together with iptables when running containers on a linux vm"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To deploy QualiX using Docker:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install Docker Engine, as explained in this ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"docker docs article"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install Docker Compose, as explained in this ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"docker docs article"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following from the ",(0,s.jsx)(n.code,{children:"/opt/"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo wget https://quali-prod-binaries.s3.amazonaws.com/guacamole-quali-install-docker.sh\nsudo chmod +x guacamole-quali-install-docker.sh\nsudo ./guacamole-quali-install-docker.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start the QualiX container stack by running the following from the ",(0,s.jsx)(n.code,{children:"/opt/qualix"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ./start.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To verify that QualiX is up and running, run the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo status\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After deploying QualiX on docker, continue with ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/work/QualiSystems/Documentation/CloudShell/9.3/CloudShell%20Help%20Center/Content/QualiX/Post-Instl-Cnfg.htm#_Post_installation_configuration"}),(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Post-Instl-Cnfg.htm",children:"Post Installation Configuration"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"additional-options",children:"Additional Options"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To stop QualiX (stops the container stack):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo stop\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To restart QualiX after boot (inactive docker):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable docker\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To get the docker logs:"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Troubleshooting/Collecting-logs.htm#QualiX2",children:"Docker logs (QualiX 4.1 and below)"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To attach the docker container to a shell:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo docker exec -it <container_id>/bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To destroy running containers:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker stop guacamole guacd\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo docker rm guacamole guacd\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To start the containers:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /opt/qualix\n\nsudo ./start.sh\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,l)=>{l.d(n,{I:()=>a,M:()=>t});var s=l(11504);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);