"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[78472],{16048:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=i(17624),s=i(4552);const l={sidebar_position:1},r="Modifying the elasticsearch.yml configuration File",c={id:"install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-elasticsearch-config-file",title:"Modifying the elasticsearch.yml configuration File",description:"To modify the elasticsearch.yml configuration file:",source:"@site/docs/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-elasticsearch-config-file.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server/configure-the-app-server",slug:"/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-elasticsearch-config-file",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-elasticsearch-config-file",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-elasticsearch-config-file.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuring the Application Server",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/"},next:{title:"Locating the Cluster Name",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/locating-the-cluster-name"}},o={},a=[];function u(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"modifying-the-elasticsearchyml-configuration-file",children:"Modifying the elasticsearch.yml configuration File"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To modify the elasticsearch.yml configuration file:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Save the extracted ",(0,t.jsx)(n.code,{children:"elasticsearch.yml"}),' file under the name "',(0,t.jsx)(n.strong,{children:"elasticsearch.yml.old"}),'". Keep this file as a backup.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Save the ",(0,t.jsx)(n.code,{children:"elasticsearch.yml"})," file in ",(0,t.jsx)(n.code,{children:"~\\Server\\QuickSearch\\config"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"elasticsearch.yml"})," file in a text editor."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the cluster section, modify the value of ",(0,t.jsx)(n.strong,{children:"cluster.name"})," to your cluster name. Use a unique name to distinguish between CloudShell environments in your network. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"############################## Cluster ###############################\n\n# Cluster name identifies your cluster for auto-discovery. If you're running multiple clusters on the same network, make sure you're using unique names.    \n#\n\ncluster.name: QS-CS-Local10.qualisystems.local\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>r});var t=i(11504);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);