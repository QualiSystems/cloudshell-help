"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[37025],{17835:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=i(74848),t=i(28453);const o={sidebar_position:3},l="Upgrade the Production Environment",a={id:"install-configure/cloudshell-suite/upgrade-procedure/upgrade-production",title:"Upgrade the Production Environment",description:"When upgrading the production environment, the working procedures from the validation upgrade are repeated, see Upgrade the Validation Environment.",source:"@site/versioned_docs/version-2024.1/install-configure/cloudshell-suite/upgrade-procedure/upgrade-production.md",sourceDirName:"install-configure/cloudshell-suite/upgrade-procedure",slug:"/install-configure/cloudshell-suite/upgrade-procedure/upgrade-production",permalink:"/install-configure/cloudshell-suite/upgrade-procedure/upgrade-production",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cloudshell-suite/upgrade-procedure/upgrade-production.md",tags:[],version:"2024.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Upgrade the Validation Environment",permalink:"/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging"},next:{title:"Migrate Python Dependencies to PyPi Server",permalink:"/install-configure/cloudshell-suite/upgrade-procedure/migrate-python-dependencies"}},d={},s=[{value:"What you need for this stage",id:"what-you-need-for-this-stage",level:2},{value:"CloudShell installation files",id:"cloudshell-installation-files",level:3},{value:"3rd party installation files",id:"3rd-party-installation-files",level:3},{value:"Prepare the production environment",id:"prepare-the-production-environment",level:3},{value:"Acquire a permanent license",id:"acquire-a-permanent-license",level:3},{value:"Production environment upgrade procedure",id:"production-environment-upgrade-procedure",level:2},{value:"Related Topics",id:"related-topics",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upgrade-the-production-environment",children:"Upgrade the Production Environment"})}),"\n",(0,r.jsxs)(n.p,{children:["When upgrading the production environment, the working procedures from the validation upgrade are repeated, see ",(0,r.jsx)(n.a,{href:"/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging",children:"Upgrade the Validation Environment"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"what-you-need-for-this-stage",children:"What you need for this stage"}),"\n",(0,r.jsx)(n.h3,{id:"cloudshell-installation-files",children:"CloudShell installation files"}),"\n",(0,r.jsx)(n.p,{children:"You need the installation package for the CloudShell implementation, and the installation package for the current implementation."}),"\n",(0,r.jsxs)(n.p,{children:["You can get the latest CloudShell version from your ftp account at ",(0,r.jsx)(n.a,{href:"ftp://ftp.qualisystems.com/",children:"ftp.qualisystems.com"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To download the installation files for an earlier version of CloudShell, go to the ",(0,r.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613287",children:"Quali Download Center"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"3rd-party-installation-files",children:"3rd party installation files"}),"\n",(0,r.jsx)(n.p,{children:"Get the installation files of the 3rd party tools being used with CloudShell on your production environment, for example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Traffic Generator GUI application (Ixia, Spirent, and so on)"}),"\n",(0,r.jsx)(n.li,{children:"Ranorex 5.1.3 to 8.3.2 (last verified in CloudShell 9.3) \u2013 Older versions of Ranorex must be upgraded to continue using the GUI tools."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"prepare-the-production-environment",children:"Prepare the production environment"}),"\n",(0,r.jsx)(n.p,{children:"All users should be logged off from the production machine, and the work on this machine should be suspended until the procedure is completed."}),"\n",(0,r.jsx)(n.h3,{id:"acquire-a-permanent-license",children:"Acquire a permanent license"}),"\n",(0,r.jsxs)(n.p,{children:["To activate CloudShell on the validation environment, you need a license. For more information, see ",(0,r.jsx)(n.a,{href:"/install-configure/cloudshell-suite/configure-products/select-a-license",children:"Select a CloudShell License"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To acquire a permanent license:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Run the CloudShell installer or the fingerprint application and get the fingerprint information of your machines."}),"\n",(0,r.jsxs)(n.li,{children:["Send a license request with this information to Quali Customer Support through the ",(0,r.jsx)(n.a,{href:"https://support.quali.com/",children:"Quali Support Center"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"production-environment-upgrade-procedure",children:"Production environment upgrade procedure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run the setup.exe provided in your CloudShell installation package, select the Custom / Upgrade procedure and upgrade your CloudShell components the same way you upgraded the validation environment."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging",children:"Upgrade the Validation Environment"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/",children:"Best Practices for CloudShell Production Environment"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(96540);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);