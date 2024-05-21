"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[68808],{71372:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(17624),t=s(4552);const r={sidebar_position:2},o="Best Practices for CloudShell Portal",l={id:"install-configure/cloudshell-suite/configure-products/configure-portal/best-practices",title:"Best Practices for CloudShell Portal",description:"Manage IIS log file storage",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/configure-portal/best-practices.md",sourceDirName:"install-configure/cloudshell-suite/configure-products/configure-portal",slug:"/install-configure/cloudshell-suite/configure-products/configure-portal/best-practices",permalink:"/install-configure/cloudshell-suite/configure-products/configure-portal/best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/configure-portal/best-practices.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Set the Timeout Period for CloudShell Portal",permalink:"/install-configure/cloudshell-suite/configure-products/configure-portal/set-portal-timeout"},next:{title:"Server Connectivity Settings",permalink:"/install-configure/cloudshell-suite/configure-products/server-connectivity-settings"}},c={},a=[{value:"Manage IIS log file storage",id:"manage-iis-log-file-storage",level:2},{value:"Enable dynamic compression on your IIS settings",id:"enable-dynamic-compression-on-your-iis-settings",level:2},{value:"Enhance IIS website security",id:"enhance-iis-website-security",level:2},{value:"Protect against CSRF attacks",id:"protect-against-csrf-attacks",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"best-practices-for-cloudshell-portal",children:"Best Practices for CloudShell Portal"}),"\n",(0,i.jsx)(n.h2,{id:"manage-iis-log-file-storage",children:"Manage IIS log file storage"}),"\n",(0,i.jsxs)(n.p,{children:["There are several things you can do in this regard. For details, see this Microsoft Docs page: ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/iis/manage/provisioning-and-managing-iis/managing-iis-log-file-storage",children:"https://docs.microsoft.com/en-us/iis/manage/provisioning-and-managing-iis/managing-iis-log-file-storage"})]}),"\n",(0,i.jsx)(n.h2,{id:"enable-dynamic-compression-on-your-iis-settings",children:"Enable dynamic compression on your IIS settings"}),"\n",(0,i.jsx)(n.p,{children:"Dynamic compression can provide faster transmission times between IIS and CloudShell Portal by compressing files from CloudShell Portal to the browser (HTML, js, css, tc)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To enable dynamic compression:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install dynamic content compression on your IIS."}),"\n",(0,i.jsxs)(n.p,{children:["Follow the instructions on ",(0,i.jsx)(n.a,{href:"https://www.iis.net/configreference/system.webserver/httpcompression#003",children:"https://www.iis.net/configreference/system.webserver/httpcompression#003"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"c:\\windows\\system32\\inetsrv\\config\\applicationHost.config"})," file and add the following keys:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.code,{children:"<dynamicTypes>"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'<add mimeType="application/xml" enabled="true" />'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'<add mimeType="application/json" enabled="true" />'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.code,{children:"<staticTypes>"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'<add mimeType="application/x-javascript" enabled="true" />'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Next, create the IIS website."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enhance-iis-website-security",children:"Enhance IIS website security"}),"\n",(0,i.jsx)(n.p,{children:"You can enhance your IIS\xa0website's security by only allowing cookies that come from an HTTP source."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To do so:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\Web.config"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'<system.web>\n  ...\n  <httpCookies httpOnlyCookies="true" requireSSL="true" />\n  ...\n</system.web>\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restart the IIS\xa0website."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"protect-against-csrf-attacks",children:"Protect against CSRF attacks"}),"\n",(0,i.jsx)(n.p,{children:"Enhance the security of your IIS website by enabling Cross-Site Request Forgery (CSRF) protection. This feature adds a CSRF token to all requests exchanged between the browser and the portal, ensuring the validity of user requests and safeguarding against CSRF attacks."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To do so:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\customer.config"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the following key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'<add key="VerifyAntiForgeryToken" value="True" />\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restart the IIS\xa0website."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>o});var i=s(11504);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);