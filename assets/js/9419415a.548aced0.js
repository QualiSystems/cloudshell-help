"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[23873],{27586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453);const l={sidebar_position:6},r="Configuring Deployment Paths",o={id:"devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths",title:"Configuring Deployment Paths",description:"In this article, we\u2019ll learn how to set up the App\u2019s deployment paths.",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths",permalink:"/2023.3/devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/configure-the-deployment-paths.md",tags:[],version:"2023.3",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Removing the Address Field",permalink:"/2023.3/devguide/develop-custom-cloud-provider-shells/remove-the-address-field"},next:{title:"Controlling App Deployment Orchestration",permalink:"/2023.3/devguide/develop-custom-cloud-provider-shells/controlling-app-deployment-orch"}},a={},d=[{value:"Setting up the deployment type and image",id:"setting-up-the-deployment-type-and-image",level:2},{value:"Adding attributes",id:"adding-attributes",level:2},{value:"Setting attributes as read only in the blueprint",id:"setting-attributes-as-read-only-in-the-blueprint",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"configuring-deployment-paths",children:"Configuring Deployment Paths"})}),"\n",(0,i.jsx)(t.p,{children:"In this article, we\u2019ll learn how to set up the App\u2019s deployment paths."}),"\n",(0,i.jsxs)(t.p,{children:["The shell\u2019s deployment paths are defined in the shell project\u2019s\xa0",(0,i.jsx)(t.strong,{children:"Deployments"}),"\xa0folder. The folder includes a\xa0",(0,i.jsx)(t.strong,{children:"deployment-path.yaml"}),"\xa0file, which represents a single deployment path. You can create multiple deployment paths for your shell by creating additional copies of the file and modifying their settings."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that since Cloud Provider is a 2nd Gen shell, the deployment paths are not available in Resource Manager Client\u2019s\xa0",(0,i.jsx)(t.strong,{children:"Resource Families"}),"\xa0explorer."]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-the-deployment-type-and-image",children:"Setting up the deployment type and image"}),"\n",(0,i.jsx)(t.p,{children:"Let\u2019s start by configuring a new deployment path."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the\xa0",(0,i.jsx)(t.strong,{children:"Deployments"}),"\xa0folder, rename the\xa0",(0,i.jsx)(t.strong,{children:"deployment-path.yaml"}),'\xa0to the name of the deployment option. For example, "my-deployment-path.yaml\u201d.']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Open the yaml and locate the following line:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"vendor.resource.MyDeploymentPath:"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Replace "MyDeploymentPath\u201d with the new display name of the deployment path (spaces are supported). For example: "My Test Path\u201d.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"vendor.resource.My Test Path:"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Install the shell on CloudShell and in the\xa0",(0,i.jsx)(t.strong,{children:"Manage>Apps"}),"\xa0page, create an App template. You should be able to see the new deployment option in the\xa0",(0,i.jsx)(t.strong,{children:"Select Deployment Type"}),"\xa0area:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Resource information",src:n(10453).A+"",width:"624",height:"380"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We can also change the icon of the deployment path by placing the new image file in the\xa0",(0,i.jsx)(t.strong,{children:"Deployments"}),"\xa0folder and replacing\xa0",(0,i.jsx)(t.strong,{children:"shell-icon.png"}),"\xa0in the yaml's\xa0",(0,i.jsx)(t.code,{children:"artifacts:"}),"\xa0section with the new file name."]}),"\n",(0,i.jsx)(t.p,{children:'For example, setting image file "my-icon.png\u201d:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"artifacts:\n  icon:\n    file: my-icon.png\n    type: tosca.artifacts.File\n"})}),"\n",(0,i.jsx)(t.h2,{id:"adding-attributes",children:"Adding attributes"}),"\n",(0,i.jsx)(t.p,{children:"Next, add the required attributes."}),"\n",(0,i.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You cannot modify an attribute's type and name, nor any attributes that are associated with the shell\u2019s family as this will affect other shells that use this family."}),"\n",(0,i.jsxs)(t.li,{children:["CloudShell allows upgrading shells with old/deprecated attributes. For details, see ",(0,i.jsx)(t.a,{href:"/2023.3/devguide/developing-shells/override-old-shell-attributes",children:"Overriding Old/Deprecated Shell Attributes"}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(t.p,{children:["Place the cursor at the end of the\xa0",(0,i.jsx)(t.code,{children:"derived_from:"}),"\xa0line and press the\xa0",(0,i.jsx)(t.strong,{children:"[Enter]"}),'\xa0key. Type "properties:\u201d and press\xa0',(0,i.jsx)(t.strong,{children:"[Enter]"}),"\xa0again. Press the\xa0",(0,i.jsx)(t.strong,{children:"[Tab]"}),"\xa0key and add the attribute.\xa0",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:'To make the attribute visible to the user in CloudShell, make sure to include the "tags: [user_input]\u201d line.'})}),'\xa0For example, adding a string attribute called "My attribute\u201d:']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"node_types:\n \n  vendor.resource.My Test Path:\n    derived_from: cloudshell.nodes.CustomDeploymentOption\n    properties:\n      My attribute:\n        type: string\n        tags: [user_input]       # supported types are: string, integer, float, boolean, cloudshell.datatypes.Password\n"})}),"\n",(0,i.jsx)(t.p,{children:"The deployment path should look something like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Resource information",src:n(81438).A+"",width:"624",height:"444"})}),"\n",(0,i.jsxs)(t.p,{children:["Same as with attributes in the\xa0",(0,i.jsx)(t.strong,{children:"shell-definition.yaml"}),", you can also specify additional details, like default value, description and possible values (",(0,i.jsx)(t.code,{children:"constraints"}),"\xa0property). For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:'My attribute:\n  type: string\n  default: value 1\n  description: "This is my my attribute."\n  constraints: value 1, value 2, value 3\n  tags: [user_input]\n'})}),"\n",(0,i.jsx)(t.h2,{id:"setting-attributes-as-read-only-in-the-blueprint",children:"Setting attributes as read only in the blueprint"}),"\n",(0,i.jsxs)(t.p,{children:["In some cases, you may want a specific deployment attribute to be unavailable for editing from the blueprint, possibly because it defines critical VM properties, like the image ID. If this is the case, you can set the attribute to only be editable by the admin in the App template. To do so, add the\xa0",(0,i.jsx)(t.code,{children:"editable_only_in_app_template"}),"\xa0rule to the attribute. For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:'My attribute:\n  type: string\n  default: value 1\n  description: "This is my attribute."\n  constraints: value 1, value 2, value 3\n  tags: [user_input, editable_only_in_app_template]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Note that the ",(0,i.jsx)(t.code,{children:"editable_only_in_app_template"})," rule only blocks admins from editing the attribute value in the blueprint but not in the sandbox, where the attribute is available for editing by design. Regular users cannot edit the attribute in blueprints and sandboxes."]}),"\n",(0,i.jsx)(t.p,{children:"The attribute will be read only in the blueprint."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},81438:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Configuring-Deployment-Paths_1_624x444-8edf68d7276dc9ea32adec249ab5d745.png"},10453:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Configuring-Deployment-Paths_624x380-c38333e9a10daedd41080a0f0e4eb500.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);