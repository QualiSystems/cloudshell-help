"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[43752],{9972:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(17624),t=s(4552);const i={sidebar_position:8},o="Save Sandbox Configurations",a={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations",title:"Save Sandbox Configurations",description:"The CloudShell Save and Restore paid add-on has a number of administrative elements that are important to the proper usage of this feature.",source:"@site/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Customizing Email Notification Templates",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates"},next:{title:"Customizing the Start Page in Resource Manager Client",permalink:"/cloudshell-help/next/category/customizing-the-start-page-in-resource-manager-client"}},l={},d=[{value:"Save and restore license",id:"save-and-restore-license",level:2},{value:"Set the maximum number of saved sandboxes for a particular user",id:"set-the-maximum-number-of-saved-sandboxes-for-a-particular-user",level:2},{value:"Set the default maximum number of saved sandboxes for CloudShell users",id:"set-the-default-maximum-number-of-saved-sandboxes-for-cloudshell-users",level:2},{value:"Enable save in a blueprint",id:"enable-save-in-a-blueprint",level:2},{value:"vCenter/OpenStack advanced saving configurations",id:"vcenteropenstack-advanced-saving-configurations",level:2},{value:"Extending save and restore blueprint scripts",id:"extending-save-and-restore-blueprint-scripts",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"save-sandbox-configurations",children:"Save Sandbox Configurations"}),"\n",(0,r.jsxs)(n.p,{children:["The CloudShell ",(0,r.jsx)(n.strong,{children:"Save and Restore"})," paid add-on has a number of administrative elements that are important to the proper usage of this feature."]}),"\n",(0,r.jsx)(n.h2,{id:"save-and-restore-license",children:"Save and restore license"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Save and Restore"})," is a paid add-on. For details, contact your account manager."]}),"\n",(0,r.jsx)(n.h2,{id:"set-the-maximum-number-of-saved-sandboxes-for-a-particular-user",children:"Set the maximum number of saved sandboxes for a particular user"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To set the maximum number of saved sandboxes for a particular user:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users#adding-new-users-manually",children:"Adding new users manually"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"- or"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.strong,{children:"UpdateUserLimitations"})," method in the CloudShell Automation API. For more information visit the ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-api-overview",children:"CloudShell API Overview"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"set-the-default-maximum-number-of-saved-sandboxes-for-cloudshell-users",children:"Set the default maximum number of saved sandboxes for CloudShell users"}),"\n",(0,r.jsxs)(n.p,{children:["By default, users are allowed to save as many sandboxes as they require. This is done using the ",(0,r.jsx)(n.code,{children:"DefaultUserMaxSavedSandboxes"})," key. This key applies only to new users or users created in a CloudShell version prior to 9.0 that are migrated for the first time. The default value is empty (unlimited)."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Admins can override the default for specific users in ",(0,r.jsx)(n.strong,{children:"Resource Manager Client"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To set the default maximum number of saved sandboxes:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the ",(0,r.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file, add the following key and set the value:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'<add key="DefaultUserMaxSavedSandboxes" value="2"/>'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Restart the ",(0,r.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations",children:"Advanced CloudShell Customizations"})," for additional information on the ",(0,r.jsx)(n.code,{children:"DefaultUserMaxSavedSandboxes"})," configuration key."]}),"\n",(0,r.jsx)(n.h2,{id:"enable-save-in-a-blueprint",children:"Enable save in a blueprint"}),"\n",(0,r.jsxs)(n.p,{children:["You can only save a sandbox if its blueprint has the ",(0,r.jsx)(n.strong,{children:"Enable Sandbox Save"})," check box enabled."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To save a sandbox and later restore it, you must configure certain blueprint properties (General page):"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Save Sandbox"})," area, ensure that the ",(0,r.jsx)(n.strong,{children:"Enable Sandbox Save"})," is checked."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Scripts"})," area, ensure that ",(0,r.jsx)(n.strong,{children:"Default Sandbox Save"})," and ",(0,r.jsx)(n.strong,{children:"Default Sandbox Restore"})," scripts are included in the blueprint properties."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/configure-orchestration#add-save-and-restore-orchestration-scripts",children:"Add save and restore orchestration scripts"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"vcenteropenstack-advanced-saving-configurations",children:"vCenter/OpenStack advanced saving configurations"}),"\n",(0,r.jsxs)(n.p,{children:["Several ",(0,r.jsx)(n.strong,{children:"Snapshot management"})," permissions are required on the role of the vCenter user defined in the cloud provider resource (See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type",children:"Required vCenter User Permissions per Deployment Type"}),"). For OpenStack, the save process is a bit different as the shell creates a snapshot of the App and it'll be located in the Image section in the OpenStack web portal."]}),"\n",(0,r.jsx)(n.p,{children:"The following configurations can be made on vCenter cloud provider resources or App templates. Configurations made on an App template will override the vCenter cloud provider resource configuration and the settings will apply only to that specific App."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Behavior during save"}),": The VM's state while the sandbox is being saved. Options are ",(0,r.jsx)(n.strong,{children:"Remain Powered On"})," (default) and ",(0,r.jsx)(n.strong,{children:"Power Off"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Saved Sandbox Storage"}),": During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource",children:"Add VMware vCenter Cloud Provider Resource"})," and ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/#adding-app-templates",children:"Adding App templates"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"extending-save-and-restore-blueprint-scripts",children:"Extending save and restore blueprint scripts"}),"\n",(0,r.jsxs)(n.p,{children:["See the CloudShell Dev Guide's ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-orch-scripts/cs-oob-orch/#save-and-restore-orchestration",children:"Save and Restore Orchestration"})," to learn more about how to extend save and restore blueprint scripts."]})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>o});var r=s(11504);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);