"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[19716],{86748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(17624),r=s(4552);const i={sidebar_position:14},l="Configure Blueprint Orchestration",o={id:"portal/blueprints/creating-blueprints/configure-orchestration",title:"Configure Blueprint Orchestration",description:"Sandbox environment automation and enhanced orchestration is available with CloudShell Premium Tier.",source:"@site/docs/portal/blueprints/creating-blueprints/configure-orchestration.md",sourceDirName:"portal/blueprints/creating-blueprints",slug:"/portal/blueprints/creating-blueprints/configure-orchestration",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/configure-orchestration",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/blueprints/creating-blueprints/configure-orchestration.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Create Blueprint Commands",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/create-blueprint-commands"},next:{title:"Add Instructions",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/add-instructions"}},d={},a=[{value:"Add blueprint scripts",id:"add-blueprint-scripts",level:2},{value:"Use scripts to set up and tear down blueprints",id:"use-scripts-to-set-up-and-tear-down-blueprints",level:2},{value:"Add Setup and Teardown scripts",id:"add-setup-and-teardown-scripts",level:2},{value:"Add save and restore orchestration scripts",id:"add-save-and-restore-orchestration-scripts",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-blueprint-orchestration",children:"Configure Blueprint Orchestration"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Sandbox environment automation and enhanced orchestration is available with CloudShell Premium Tier."})}),"\n",(0,t.jsxs)(n.p,{children:["This section explains how to configure the blueprint (orchestration) commands that will run on the sandbox and should be used when working on a blueprint that is not based on the default ",(0,t.jsx)(n.strong,{children:"CloudShell Sandbox Template"}),", which provides common setup, teardown, save, and restore orchestration commands. For resource automation, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",children:"Managing Assets"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"add-blueprint-scripts",children:"Add blueprint scripts"}),"\n",(0,t.jsxs)(n.p,{children:["You can add Python scripts that contain orchestration commands. However, the blueprint scripts first need to be added to CloudShell - see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-assets#adding-scripts",children:"Adding scripts"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To add blueprint scripts:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.strong,{children:"Blueprint"})," menu, select ",(0,t.jsx)(n.strong,{children:"Properties"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Scripts"})," area, click ",(0,t.jsx)(n.strong,{children:"Add Scripts"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the scripts you want to add and click ",(0,t.jsx)(n.strong,{children:"Done"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The scripts are listed in the ",(0,t.jsx)(n.strong,{children:"Scripts"})," area."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To apply the changes, click ",(0,t.jsx)(n.strong,{children:"Update"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The properties page closes and the diagram workspace is displayed."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"use-scripts-to-set-up-and-tear-down-blueprints",children:"Use scripts to set up and tear down blueprints"}),"\n",(0,t.jsxs)(n.p,{children:["CloudShell provides ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/blueprint-templates#cloudshell-sandbox-template",children:"CloudShell Sandbox Template"}),", an out-of-the-box template, which includes common setup and teardown orchestration. If you have an existing blueprint or you created a new blueprint not based on the out-of-the-box template, you can add out-of-the-box orchestration to your blueprint in the blueprint properties page."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also create your own scripts that will setup and teardown a sandbox or customize the out-of-the-box scripts. For more information, see CloudShell Dev Guide's ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-orch-scripts/getting-started-with-orch-scripts",children:"Getting Started with Orchestration Scripts"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To add set up and teardown scripts to a blueprint:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Manage"})," dashboard, upload the orchestration script (as described above). (For more details about adding and editing scripts, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",children:"Managing Assets"}),".)"]}),"\n",(0,t.jsxs)(n.li,{children:["In\xa0the ",(0,t.jsx)(n.strong,{children:"Edit Script"})," dialog box for the required script, set the ",(0,t.jsx)(n.strong,{children:"Script Type"})," to be ",(0,t.jsx)(n.strong,{children:"Setup"})," or ",(0,t.jsx)(n.strong,{children:"Teardown"})," and save."]}),"\n",(0,t.jsx)(n.li,{children:"Open the blueprint's properties page."}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) Select a ",(0,t.jsx)(n.strong,{children:"Driver"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add Scripts"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the required ",(0,t.jsx)(n.strong,{children:"Setup"})," or ",(0,t.jsx)(n.strong,{children:"Teardown scripts"})," and save it to the blueprint."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"add-setup-and-teardown-scripts",children:"Add Setup and Teardown scripts"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To add Setup and Teardown scripts to the blueprint:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.strong,{children:"Blueprint"})," menu, select ",(0,t.jsx)(n.strong,{children:"Properties"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) Select the appropriate ",(0,t.jsx)(n.strong,{children:"Driver"}),". By default, no driver is needed to run the default orchestration scripts."]}),"\n",(0,t.jsx)(n.p,{children:"The default driver included in the out-of-the box CloudShell Sandbox Template is used for running sandbox orchestration scripts setup, teardown, save and restore."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the orchestration scripts, which are explained in the following section."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you're using ",(0,t.jsx)(n.strong,{children:"Setup"})," and ",(0,t.jsx)(n.strong,{children:"Teardown"})," scripts in the blueprint, define their durations:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Estimated setup duration"})," section, use the Up/Down arrows to define the setup duration."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Estimated teardown duration"})," section, use the Up/Down arrows to define the teardown duration."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Setting either of these values to a duration of '0' hours and minutes will disable the ",(0,t.jsx)(n.strong,{children:"Setup"})," and ",(0,t.jsx)(n.strong,{children:"Teardown"})," script's execution."]}),"\n",(0,t.jsx)(n.li,{children:"The Setup phase is included in the sendbox's duration while Teardown is scheduled to start when the sandbox duration ends."}),"\n",(0,t.jsx)(n.li,{children:"The estimated Setup duration will allow the Setup process to run as long as it needs to."}),"\n",(0,t.jsx)(n.li,{children:"If the Teardown process takes longer than the Teardown's defined duration, it will be cancelled in both regular and Job Scheduling sandboxes. This is the designed behavior in order to ensure that any sandboxes scheduled ahead will start on time. The Teardown duration defined in the blueprint should be longer so it will allow the Teardown script to complete in time."}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To apply the changes, click ",(0,t.jsx)(n.strong,{children:"Update"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The properties page closes and the diagram workspace is displayed."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"add-save-and-restore-orchestration-scripts",children:"Add save and restore orchestration scripts"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/blueprint-templates#cloudshell-sandbox-template",children:"CloudShell Sandbox Template"})," is provided out-of-the-box and includes save and restore orchestration. If you have a new or existing blueprint that is not based on the out-of-the-box template, you can add out-of-the-box orchestration to your blueprint in the blueprint's ",(0,t.jsx)(n.strong,{children:"Properties"})," page. For additional customizations related to the ",(0,t.jsx)(n.strong,{children:"Save and Restore"})," add-on, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations",children:"Save Sandbox Configurations"})]}),"\n",(0,t.jsxs)(n.p,{children:["Developers can also customize the out-of-the-box ",(0,t.jsx)(n.strong,{children:"Save and Restore"})," scripts that save and restore sandboxes. For more information, see the CloudShell Dev Guide's ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-orch-scripts/getting-started-with-orch-scripts",children:"Getting Started with Orchestration Scripts"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To add save and restore orchestration scripts:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.strong,{children:"Blueprint"})," menu, select ",(0,t.jsx)(n.strong,{children:"Properties"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) Select the appropriate ",(0,t.jsx)(n.strong,{children:"Driver"}),". By default, no driver is needed to run the default orchestration scripts."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Save Sandbox"})," area, make sure the ",(0,t.jsx)(n.strong,{children:"Enable Sandbox Save"})," check box is enabled."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Scripts"})," area, click ",(0,t.jsx)(n.strong,{children:"Add Scripts"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Save"})," and ",(0,t.jsx)(n.strong,{children:"Restore"})," scripts you want to add and click ",(0,t.jsx)(n.strong,{children:"Done"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The scripts are listed in the ",(0,t.jsx)(n.strong,{children:"Scripts"})," area."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To apply the changes, click ",(0,t.jsx)(n.strong,{children:"Update"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The properties page closes and the diagram workspace is displayed."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/create-blueprint-commands",children:"Create Blueprint Commands"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/blueprint-templates#cloudshell-sandbox-template",children:"CloudShell Sandbox Template"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",children:"Managing Assets"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/custom-routing-for-azure-in-sandboxes",children:"Custom Routing for Azure in Sandboxes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-drivers",children:"Managing Drivers"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/run-commands",children:"Run Commands"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>l});var t=s(11504);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);