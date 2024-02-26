"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[9208],{9308:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(17624),l=i(4552);const a={sidebar_position:2},r="Upgrade the Validation Environment",o={id:"install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging",title:"Upgrade the Validation Environment",description:"The purpose of installing the CloudShell upgrade on a standalone environment is to ensure that the new version functions correctly under your organization-specific environment.",source:"@site/docs/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging.md",sourceDirName:"install-configure/cloudshell-suite/upgrade-procedure",slug:"/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Upgrade Preparation",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep"},next:{title:"Upgrade the Production Environment",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/upgrade-procedure/upgrade-production"}},s={},d=[{value:"What you need for this stage",id:"what-you-need-for-this-stage",level:2},{value:"CloudShell installation files",id:"cloudshell-installation-files",level:3},{value:"3rd party installation files",id:"3rd-party-installation-files",level:3},{value:"Database management application",id:"database-management-application",level:3},{value:"Standalone environment for validation",id:"standalone-environment-for-validation",level:3},{value:"Temporary license",id:"temporary-license",level:3},{value:"Validation Environment Upgrade Procedure",id:"validation-environment-upgrade-procedure",level:2}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrade-the-validation-environment",children:"Upgrade the Validation Environment"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of installing the CloudShell upgrade on a standalone environment is to ensure that the new version functions correctly under your organization-specific environment."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Quali recommends that you validate the organization-specific environment before upgrading CloudShell."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The validation stage checks for:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Environment-specific installation errors"}),"\n",(0,t.jsx)(n.li,{children:"Environment-specific compatibility issues"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this article:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm?TocPath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____2#What",children:"What you need for this stage"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm?TocPath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____2#Validati",children:"Validation Environment Upgrade Procedure"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-you-need-for-this-stage",children:"What you need for this stage"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm?TocPath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____2#CloudShe",children:"CloudShell installation files"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm?TocPath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____2#3rd",children:"3rd party installation files"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm?TocPath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____2#Database",children:"Database management application"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm?TocPath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____2#Standalo",children:"Standalone environment for validation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-valid-env.htm?TocPath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CUpgrade%20Procedure%7C_____2#Temporar",children:"Temporary license"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cloudshell-installation-files",children:"CloudShell installation files"}),"\n",(0,t.jsx)(n.p,{children:"You need the installation package for the CloudShell implementation, and the installation package for the current implementation."}),"\n",(0,t.jsxs)(n.p,{children:["You can get the latest CloudShell version from your ftp account at ",(0,t.jsx)(n.a,{href:"ftp://ftp.qualisystems.com/",children:"ftp.qualisystems.com"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To download the installation files for an earlier version of CloudShell, go to the ",(0,t.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613287",children:"Quali Download Center"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"3rd-party-installation-files",children:"3rd party installation files"}),"\n",(0,t.jsx)(n.p,{children:"Get the installation files of the 3rd party tools being used with CloudShell on your production environment, for example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Traffic Generator GUI application (Ixia, Spirent, and so on)"}),"\n",(0,t.jsx)(n.li,{children:"Ranorex 5.1.3 to 8.3.2 (last verified in CloudShell 9.3) \u2013 Older versions of Ranorex must be upgraded to continue using the GUI tools."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"database-management-application",children:"Database management application"}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SQLPlus"}),"\n",(0,t.jsx)(n.li,{children:"SQL Management Studio"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"standalone-environment-for-validation",children:"Standalone environment for validation"}),"\n",(0,t.jsx)(n.p,{children:"Ideally, the validation environment is identical to your production environment."}),"\n",(0,t.jsx)(n.p,{children:"Some guidelines:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Consider using virtual machines and/or terminal server if your production is a virtualized one."}),"\n",(0,t.jsx)(n.li,{children:"Aim to use the same hardware sets, same OS versions, same database brand and version, and so on. The purpose is to be able to find all environment-related issues using this environment. You need at least two machines: one for the Quali Server and one for the client applications."}),"\n",(0,t.jsx)(n.li,{children:"Make sure that the different devices that are being used by CloudShell are available for your validation stage. That includes traffic generators, L1 switches, other switches, and so on."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If a device is being used by the production environment, it cannot be used in the standalone environment at the same time \u2013 this is extremely important when dealing with L1 switches."})}),"\n",(0,t.jsx)(n.h3,{id:"temporary-license",children:"Temporary license"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"To activate CloudShell on the validation environment, you need a license."}),"\n",(0,t.jsx)(n.li,{children:"Run the CloudShell installer or the fingerprint application and get the fingerprint information of your machines."}),"\n",(0,t.jsxs)(n.li,{children:["Send a license request with this information to Quali Customer Support through the ",(0,t.jsx)(n.a,{href:"https://qualisystemscom.zendesk.com/agent/dashboard",children:"Quali Support Center"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"validation-environment-upgrade-procedure",children:"Validation Environment Upgrade Procedure"}),"\n",(0,t.jsx)(n.p,{children:"Perform a full backup of CloudShell\u2019s database from the production environment and save the backup files for later use."}),"\n",(0,t.jsx)(n.p,{children:"The files are used to copy the production database information to the standalone environment as a backup for the production database in case a rollback is required."}),"\n",(0,t.jsx)(n.p,{children:"In a virtualized environment, consider creating an image of the Quali Server and client machines for a quick and easy rollback in case it is needed."}),"\n",(0,t.jsx)(n.p,{children:"In the validation environment:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Follow the Installation Guide and install the same CloudShell version that is currently installed on your production environment."}),"\n",(0,t.jsx)(n.li,{children:"Install the 3rd party applications (Traffic Generator GUI applications, Ranorex, and so on)."}),"\n",(0,t.jsx)(n.li,{children:"Install a database management application."}),"\n",(0,t.jsx)(n.li,{children:"Restore the production environment database files."}),"\n",(0,t.jsx)(n.li,{children:"Activate CloudShell and verify that all applications are functional."}),"\n",(0,t.jsxs)(n.li,{children:["In Resource Manager, perform the following steps:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Verify that all resources exist in the Resource Explorer."}),"\n",(0,t.jsx)(n.li,{children:"Verify that you can create, edit, and delete sandboxes and activate blueprints."}),"\n",(0,t.jsx)(n.li,{children:"Verify that resources can launch commands and applications."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Make sure your validation environment is ready before continuing to the next step."})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you are using an L1 switch in your environment, stop usage of any L1 switches that are shared with the production environment."}),"\n",(0,t.jsx)(n.p,{children:"An L1 switch can be controlled only by a single Quali Server at any time. Since the L1 switch is usually a shared resource between the production and validation environments, it is required to stop the usage of the L1 switch on the production environment, before using it in the validation environment. That includes closing all Resource Manager Client applications and any driver projects that use the TestShell API library."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the ",(0,t.jsx)(n.strong,{children:"setup.exe"})," file to perform the upgrade."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Proceed to ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Upgrade%20Procedure/upgrd-prod-env.htm",children:"Upgrade the Production Environment"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>r});var t=i(11504);const l={},a=t.createContext(l);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);