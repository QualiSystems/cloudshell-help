"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[84516],{12556:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(17624),n=s(4552);const i={sidebar_position:7},a="Add Abstract Resources",l={id:"portal/blueprints/creating-blueprints/abstract-resources",title:"Add Abstract Resources",description:"This article explains how to create abstract resources.",source:"@site/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/abstract-resources.md",sourceDirName:"portal/blueprints/creating-blueprints",slug:"/portal/blueprints/creating-blueprints/abstract-resources",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/abstract-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/abstract-resources.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Services in Blueprints",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/services"},next:{title:"Labels in Blueprints",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/labels"}},c={},o=[{value:"Creating abstract resources",id:"creating-abstract-resources",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"add-abstract-resources",children:"Add Abstract Resources"}),"\n",(0,r.jsx)(t.p,{children:"This article explains how to create abstract resources."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Abstract resources can be saved as templates, which can be easily added to any blueprint, just like any specific resource. Abstract templates are created and managed by the administrator in the Inventory dashboard, in the Abstract Templates page."})}),"\n",(0,r.jsx)(t.h2,{id:"creating-abstract-resources",children:"Creating abstract resources"}),"\n",(0,r.jsx)(t.p,{children:"You can use abstract resources in your blueprint in the following ways:"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"To add an abstract resource template from the Inventory"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click the ",(0,r.jsx)(t.strong,{children:"Abstract"})," button in the toolbar."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Add Abstract Template"})," pane is displayed, listing all the resource templates in the system."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To find the resource template, use the ",(0,r.jsx)(t.strong,{children:"Families"})," and ",(0,r.jsx)(t.strong,{children:"Models"})," groupings on the left side of the pane and/or search for the resource template by name."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Only families of existing resources are displayed."})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Drag and drop the relevant template to the diagram to add it to the blueprint."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"To create a new abstract resource"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the blueprint diagram, click the ",(0,r.jsx)(t.strong,{children:"Blueprint"})," menu and select the ",(0,r.jsx)(t.strong,{children:"Create Abstract Resource"})," option."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Create Abstract Resource"})," dialog box is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Select the resource family. Only families of existing resources are displayed."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:'Resources that have a "CS_" prefix are based on 2nd Gen Shells.'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(77400).c+"",width:"890",height:"772"})}),"\n",(0,r.jsx)(t.p,{children:"An empty abstract resource definition dialog box is displayed."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Matches"})," section in the top right of the dialog box indicates how many resources satisfy the new abstract resource requirements (at the moment, the only requirement is the selected resource type)."]})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Enter a ",(0,r.jsx)(t.strong,{children:"Name"})," for the abstract resource."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] ["})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["There are three types of resource requirements you can add: ",(0,r.jsx)(t.strong,{children:"Models"})," define the model of the resource, ",(0,r.jsx)(t.strong,{children:"Attributes"})," define attributes of the resource, and ",(0,r.jsx)(t.strong,{children:"Sub-resources"})," are resources within the resource (such as ports). For additional information, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/portal/inventory/managing-abstract-templates/create-abstract-template/abstract-resource-settings#defining-requirements",children:"Defining Requirements"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Special considerations",type:"note",children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"For resources based on a 1st Gen Shell, when creating the abstract resource from an existing resource and no model is selected, the Attributes drop down displays all attributes that are shared among the resource\u2019s family and models."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"For resources based on a 2nd Gen Shell, only the family\u2019s attributes are displayed, as each model\u2019s attributes have a namespace that is unique to that model."}),"\n"]}),"\n"]}),(0,r.jsxs)(t.p,{children:["Therefore, if you want to define an abstract resource based on attributes without limiting it to a specific model, either use family-level attributes or use custom attributes, which can be associated with multiple models. To learn how to create and associate custom attributes with your Shell, see the CloudShell Dev Guide's ",(0,r.jsx)(t.a,{href:"/cloudshell-help/devguide/developing-shells/deploy-to-prod",children:"Deploying to Production"}),"."]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Additional Information"})," inputs are inputs that aren't mandatory. Use these to prompt the user for inputs that drive provisioning or provide general information about the resource. For additional information, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/portal/inventory/managing-abstract-templates/create-abstract-template/abstract-resource-settings#defining-additional-info",children:"Defining Additional Info"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The new abstract resource is displayed in the diagram."}),"\n",(0,r.jsx)(t.p,{children:"Reserving the blueprint will automatically pick a match for it based on resource availability."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"To replace an existing resource with an abstract resource"}),(0,r.jsx)(t.p,{children:"This action changes a specific resource in the diagram into an abstract resource, while retaining the original resource's settings, family, model and attribute values."}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the blueprint diagram, hover over a resource and select the ",(0,r.jsx)(t.strong,{children:"Replace With Abstract"})," option."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(27744).c+"",width:"355",height:"141"})}),"\n",(0,r.jsx)(t.p,{children:"The resource becomes an abstract resource with the same structure and attributes as the resource it replaced."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Consider changing the abstract's settings so as not to limit resource selection. For example, removing unneeded attribute values."})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Edit the abstract resource as necessary - see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/portal/inventory/managing-abstract-templates/create-abstract-template/abstract-resource-settings",children:"Abstract Resource Settings"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Save the abstract resource."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"To duplicate an existing abstract resource or template"}),(0,r.jsx)(t.p,{children:"The quickest way to create a copy or a variation of an existing abstract resource or template is simply to duplicate it."}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the blueprint diagram, hover over an abstract resource and select ",(0,r.jsx)(t.strong,{children:"Duplicate"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The new abstract resource is added to the blueprint with the same settings as the original."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Edit the abstract resource as necessary - see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/portal/inventory/managing-abstract-templates/create-abstract-template/abstract-resource-settings",children:"Abstract Resource Settings"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Save the abstract resource."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/cloudshell-help/portal/blueprints/blueprint-workspace/",children:"Blueprint Workspace"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},77400:(e,t,s)=>{s.d(t,{c:()=>r});const r=s.p+"assets/images/AbstractResTypeSelection-896e154ea639d01289b7a1a6b3d5fdd1.png"},27744:(e,t,s)=>{s.d(t,{c:()=>r});const r=s.p+"assets/images/ReplaceWithAbstract_355x141-9b40755a0c5e98119d221de98291316e.png"},4552:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>a});var r=s(11504);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);