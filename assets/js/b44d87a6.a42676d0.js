"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[73160],{56244:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var o=t(17624),s=t(4552);const n={sidebar_position:2},r="Creating the Cloud Provider Shell",i={id:"devguide/develop-custom-cloud-provider-shells/create-cp-shell",title:"Creating the Cloud Provider Shell",description:"Before you start, make sure to set up your machine for shell development and implementations, as explained in\xa0Getting Started with Cloud Provider Development.",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/create-cp-shell.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/create-cp-shell",permalink:"/devguide/develop-custom-cloud-provider-shells/create-cp-shell",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/create-cp-shell.md",tags:[],version:"2023.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Cloud Provider Development",permalink:"/devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev"},next:{title:"The Cloud Provider Shell Model",permalink:"/devguide/develop-custom-cloud-provider-shells/the-cp-shell-mode"}},d={},h=[{value:"Creating the cloud provider shell",id:"creating-the-cloud-provider-shell-1",level:2},{value:"Setting the shell\u2019s metadata and image",id:"setting-the-shells-metadata-and-image",level:2}];function a(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.h1,{id:"creating-the-cloud-provider-shell",children:"Creating the Cloud Provider Shell"}),"\n",(0,o.jsxs)(l.p,{children:["Before you start, make sure to set up your machine for shell development and implementations, as explained in\xa0",(0,o.jsx)(l.a,{href:"/devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev",children:"Getting Started with Cloud Provider Development"}),"."]}),"\n",(0,o.jsx)(l.h2,{id:"creating-the-cloud-provider-shell-1",children:"Creating the cloud provider shell"}),"\n",(0,o.jsx)(l.p,{children:"The first step is to create the Cloud Provider shell. As with other shells, this is done using the shellfoundry command-line tool to create and install the shell on CloudShell."}),"\n",(0,o.jsxs)(l.p,{children:["Since the Cloud Provider shell only works with CloudShell 9.0 and above, make sure to associate shellfoundry with a CloudShell 9.0 (or later) installation by running the\xa0",(0,o.jsx)(l.code,{children:"shellfoundry config"}),"\xa0command in command-line. For example, associating shellfoundry to CloudShell Server 192.168.85.13:"]}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.code,{children:"shellfoundry config host 192.168.85.13"})}),"\n",(0,o.jsx)(l.p,{children:"Navigate to the folder that will contain the Cloud Provider shell and create the shell. For example, creating a shell called CLPShell:"}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.code,{children:"shellfoundry new clp-shell --template gen2/cloud-provider"})}),"\n",(0,o.jsx)(l.p,{children:"The shell is created in the folder."}),"\n",(0,o.jsxs)(l.p,{children:["Note that the shell project comprises the same files and folders as any other shell, with one exception, the Cloud Provider shell also includes a\xa0",(0,o.jsx)(l.strong,{children:"Deployments"}),"\xa0folder, which contains the deployment paths for the Cloud Provider\u2019s App templates. More on this in\xa0",(0,o.jsx)(l.a,{href:"/devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths",children:"Configuring Deployment Paths"}),". For details about the shell project structure, see\xa0",(0,o.jsx)(l.a,{href:"/devguide/developing-shells/the-shell-project-guide",children:"The Shell Project Guide"}),"."]}),"\n",(0,o.jsx)(l.p,{children:"Let\u2019s make sure the shell was imported into CloudShell. In command-line, navigate to the shell\u2019s root folder and run:"}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.code,{children:"shellfoundry install"})}),"\n",(0,o.jsxs)(l.p,{children:["In CloudShell Portal, open the\xa0",(0,o.jsx)(l.strong,{children:"Manage>Shells"}),"\xa0page to see the Cloud Provider shell."]}),"\n",(0,o.jsx)(l.h2,{id:"setting-the-shells-metadata-and-image",children:"Setting the shell\u2019s metadata and image"}),"\n",(0,o.jsx)(l.p,{children:"Now that we have created the Cloud Provider, we need to set its general details, including the Cloud Provider\u2019s author, version and image."}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.strong,{children:"template_name"}),"\xa0is the Cloud Provider name that is displayed to the CloudShell administrator in CloudShell Portal\u2019s\xa0Shells\xa0management page."]}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.strong,{children:"template_author"}),"\xa0is the Cloud Provider developer\u2019s name. By default, the template author is the author defined in the\xa0shellfoundry config\xa0command."]}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.strong,{children:"template_version"}),"\xa0defines the version number of the Cloud Provider. When extending Cloud Providers, make sure you update the version number. It is also best practice to version any code/project you write according to semantic versioning, to avoid breaking changes. This also allows us to better support customers that will encounter issues with their Cloud Providers."]}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.strong,{children:"template_icon"}),": The Cloud Provider includes a default image. This image is displayed on the Cloud Provider\u2019s resources in CloudShell Portal, and resides in the Cloud Provider shell\u2019s root folder. To change the image, simply replace the image in the file."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(l.p,{children:"Install the Cloud Provider shell again. This will replace the old version of the shell with the new one."})]})}function c(e={}){const{wrapper:l}={...(0,s.M)(),...e.components};return l?(0,o.jsx)(l,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},4552:(e,l,t)=>{t.d(l,{I:()=>i,M:()=>r});var o=t(11504);const s={},n=o.createContext(s);function r(e){const l=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:l},e.children)}}}]);