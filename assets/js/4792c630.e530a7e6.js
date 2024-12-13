"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[20431],{81037:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=o(74848),i=o(28453);const s={sidebar_position:2},r="Managing CloudShell Portal Tours",l={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/managing-cloudshell-portal-tours",title:"Managing CloudShell Portal Tours",description:"CloudShell Portal includes some basic out-of the-box web tour (tutorial)\xa0templates (for the Blueprint Catalog, blueprint workspace, and Sandboxes dashboard). These web tours can be used as is, or customized as required. You can also create your own new custom tours. The component used for the tour is the 3rd party Bootstrap tour API. Once a tour is configured, you can manually launch it via the Tutorials menu in CloudShell Portal.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/managing-cloudshell-portal-tours.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/managing-cloudshell-portal-tours",permalink:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/managing-cloudshell-portal-tours",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/managing-cloudshell-portal-tours.md",tags:[],version:"2023.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Customizing the Language File",permalink:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-the-language-file"},next:{title:"Advanced CloudShell Customizations",permalink:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations"}},a={},d=[{value:"Special considerations",id:"special-considerations",level:2},{value:"Creating tours",id:"creating-tours",level:2},{value:"Disabling tours",id:"disabling-tours",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"managing-cloudshell-portal-tours",children:"Managing CloudShell Portal Tours"})}),"\n",(0,t.jsxs)(n.p,{children:["CloudShell Portal includes some basic out-of the-box web tour (tutorial)\xa0templates (for the ",(0,t.jsx)(n.strong,{children:"Blueprint Catalog"}),", blueprint workspace, and ",(0,t.jsx)(n.strong,{children:"Sandboxes"})," dashboard). These web tours can be used as is, or customized as required. You can also create your own new custom tours. The component used for the tour is the 3rd party ",(0,t.jsx)(n.a,{href:"http://bootstraptour.com/api/",children:"Bootstrap tour API"}),". Once a tour is configured, you can manually launch it via the ",(0,t.jsx)(n.strong,{children:"Tutorials"})," menu in CloudShell Portal."]}),"\n",(0,t.jsxs)(n.p,{children:["The tours configuration is defined in the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\tours.config"})," file."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Do not modify the ",(0,t.jsx)(n.code,{children:"tours.config"})," file directly. You should instead copy the ",(0,t.jsx)(n.code,{children:"tours.config"})," file (with its XML structure) into a new file named ",(0,t.jsx)(n.code,{children:"customertours.config"})," and make modifications in the new customized file. This will prevent overriding your changes when you upgrade CloudShell versions."]})}),"\n",(0,t.jsx)(n.p,{children:"Each tour has the following definitions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<?xml version="1.0" encoding="UTF-8"?>\n<webtours>\n   <tours>\n      <add file="EnvironmentCatalogTour" title="The Blueprints Catalog" description="This tutorial will take you through the Blueprints Catalog" urlRegEx="/RM/Topology(\\?.*)?$" autostart="false" />\n      <add file="EnvironmentDiagramTour" title="The Blueprint Workspace" description="This tutorial will introduce you to the Blueprint Workspace" urlRegEx="/Diagram/Index/(.*\\?)diagramType=Topology" autostart="false" />\n      <add file="ReservationDashboardTour" title="The Sandboxes Dashboard" description="This tutorial will introduce you to the Sandboxes Dashboard" urlRegEx="/RM/Reservation/List(\\?.*)?$|/RM/Reservation/Timeline(\\?.*)?$" autostart="true" />\n   </tours>\n</webtours>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"special-considerations",children:"Special considerations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The file should be the JavaScript file name located in the folder ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\Scripts\\lib\\tours"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The auto-start is per user per browser (per unique CloudShell URL). It is possible to have more than one tour per CloudShell\xa0webpage, but only one tour should be defined as auto-start enabled (",(0,t.jsx)(n.code,{children:'autostart="true"'}),") for that URL. The ",(0,t.jsx)(n.code,{children:"autostart"})," key is optional."]}),"\n",(0,t.jsxs)(n.li,{children:["The visibility selector allows to show a tour based on a CSS selector in a page. This may be useful when you wish to add a tour for a specific sandbox, blueprint, and so on. The ",(0,t.jsx)(n.code,{children:"visibility-selector"})," key is optional."]}),"\n",(0,t.jsxs)(n.li,{children:["There is no need to restart QualiServer/IIS when updating the ",(0,t.jsx)(n.code,{children:"tours.config"})," file."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-tours",children:"Creating tours"}),"\n",(0,t.jsx)(n.p,{children:"This procedure explains the steps required for creating custom CloudShell Portal tours."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To create CloudShell Portal tours:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Manually create the new configuration file. Go to ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\"}),", copy and paste the ",(0,t.jsx)(n.code,{children:"tours.config"})," file into the same folder, and rename it to ",(0,t.jsx)(n.code,{children:"customertours.config"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"customertours.config"})," file should contain the same XML structure as the original ",(0,t.jsx)(n.code,{children:"tours.config"})," file. However, you need to replace all instances of ",(0,t.jsx)(n.code,{children:"<webtours>"})," with ",(0,t.jsx)(n.code,{children:"<customertours>"}),", as shown in the following sample template:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<?xml version="1.0" encoding="UTF-8"?>\n<customertours>\n   <tours>\n      <add file="EnvironmentCatalogTour" title="The Blueprints Catalog" description="This tutorial will take you through the Blueprints Catalog" urlRegEx="/RM/Topology(\\?.*)?$" autostart="false" />\n   </tours>\n</customertours>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add/update/remove steps from your tour using the 3rd party ",(0,t.jsx)(n.a,{href:"http://bootstraptour.com/",children:"Bootstrap tour"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once the new tour template is created, you can manage the web tours exactly as in the original ",(0,t.jsx)(n.code,{children:"tours.config"})," file. The tours should be uploaded to CloudShell Portal in the same way."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The new ",(0,t.jsx)(n.code,{children:"customertours.config"})," file will not be deleted during CloudShell upgrades, and the customer tours settings will remain intact."]}),"\n",(0,t.jsx)(n.h2,{id:"disabling-tours",children:"Disabling tours"}),"\n",(0,t.jsxs)(n.p,{children:["To disable a tour, you can either remove it from the ",(0,t.jsx)(n.code,{children:"tours.config"})," file or comment it out to hide it but save the tour's definition."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To disable a tour:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\"})," and open the ",(0,t.jsx)(n.code,{children:"tours.config"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"The file has the following three tours by default."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(8307).A+"",width:"618",height:"129"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Comment out the lines of the tours you want to hide. For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(74812).A+"",width:"616",height:"134"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart CloudShell Portal and log in."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Tutorials"})," menu is no longer visible in the CloudShell Portal pages of the disabled tours."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8307:(e,n,o)=>{o.d(n,{A:()=>t});const t="data:image/png;base64,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"},74812:(e,n,o)=>{o.d(n,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);