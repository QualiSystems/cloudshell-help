"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41144],{70432:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(17624),t=s(4552);const r={sidebar_position:1},l="Defining the Resource Data Model",o={id:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model",title:"Defining the Resource Data Model",description:"This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see Shells Overview.",source:"@site/docs/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells",slug:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Resource Data Modeling (for 1st Gen Shells)",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/"},next:{title:"Attributes",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes"}},a={},d=[{value:"Introduction to data modeling",id:"introduction-to-data-modeling",level:2},{value:"Steps to defining your data model",id:"steps-to-defining-your-data-model",level:3},{value:"Creating a resource family",id:"creating-a-resource-family",level:2},{value:"Creating a resource model",id:"creating-a-resource-model",level:2},{value:"Associating a driver to a resource model",id:"associating-a-driver-to-a-resource-model",level:2},{value:"Associating an attribute to a family or model",id:"associating-an-attribute-to-a-family-or-model",level:2},{value:"Configuring associated attribute rules",id:"configuring-associated-attribute-rules",level:2},{value:"Setting new default value for an attribute instance",id:"setting-new-default-value-for-an-attribute-instance",level:3},{value:"Restricting values for an associated attribute",id:"restricting-values-for-an-associated-attribute",level:3},{value:"Configuring attribute inheritance settings",id:"configuring-attribute-inheritance-settings",level:3},{value:"Duplicating an existing data model",id:"duplicating-an-existing-data-model",level:2},{value:"Define the resource structure",id:"define-the-resource-structure",level:2},{value:"Relate topics",id:"relate-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"defining-the-resource-data-model",children:"Defining the Resource Data Model"}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"introduction-to-data-modeling",children:"Introduction to data modeling"}),"\n",(0,i.jsx)(n.p,{children:"Every resource in the resource repository inherits a collection of properties and behaviors from the data model on which it is based."}),"\n",(0,i.jsx)(n.p,{children:"For example, the resource data model describes which attributes and drivers to associate with each type of resource. Initial, default and runtime attribute values are determined by the parent family and model."}),"\n",(0,i.jsx)(n.p,{children:"Even if you choose to set up the resource data model and populate the resource repository automatically, it's important to understand the process in case you choose to customize the default settings and values. If you assign new attributes or modify the attribute values of a resource family or model, the updated properties will be applied to both new and existing resources."}),"\n",(0,i.jsx)(n.p,{children:"Defining the resource data model affects the whole system, including how resources are searched for, how abstract resources are created, how they are saved in the database and more."}),"\n",(0,i.jsx)(n.p,{children:"The data model and attributes should be standardized across the company therefore should get a proper design and review procedure prior to deployment."}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to define the resource data model: importing or manually creating them. In practice, defining the data model usually requires a mix of both methods."}),"\n",(0,i.jsxs)(n.p,{children:["Importing data modeling populates Resource Manager with pre-defined resource families, models and structures. You can import updated definitions by launching the configuration wizard, or by importing xml configuration files via the Resource Families tree. For additional information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/importingexporting-resource-family-updates",children:"Importing/Exporting Resource Family Updates"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can use these configuration files to add new resource families, associated models, attributes and their complete structure, or to update existing family and model definitions for the current resource structure."}),"\n",(0,i.jsx)(n.p,{children:"Importing data modeling is a good starting point for setting up your resource data model, as it sets up common resource data models and configurations."}),"\n",(0,i.jsx)(n.p,{children:"However, it was not designed to cover every possible device brand and version. If you need additional resource data models, you can add them manually. You may want to customize the default properties for imported resource families and models. The available options are extensive."}),"\n",(0,i.jsx)(n.p,{children:"When you add a new resource family manually, in addition to defining its properties, you'll need to add associated models and structure manually. You can add new resource models to an existing resource family, or to one that you create."}),"\n",(0,i.jsx)(n.h3,{id:"steps-to-defining-your-data-model",children:"Steps to defining your data model"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#creating-a-resource-family",children:"Creating a resource family"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#creating-a-resource-model",children:"Creating a resource model"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#associating-a-driver-to-a-resource-model",children:"Associating a driver to a resource model"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#associating-an-attribute-to-a-family-or-model",children:"Associating an attribute to a family or model"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#define-the-resource-structure",children:"Define the resource structure"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-resource-family",children:"Creating a resource family"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," ribbon."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Configuration"})," section, click ",(0,i.jsx)(n.strong,{children:"Resource Families"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Right-click the root and select ",(0,i.jsx)(n.strong,{children:"New > Resource Family"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(47760).c+"",width:"582",height:"285"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Name"})," field is mandatory. The ",(0,i.jsx)(n.strong,{children:"Description"})," field is optional. Resource family names can include any combination of alpha numeric characters, including spaces, hyphens, periods, pipes, and square brackets."]})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Image"})," button and select ",(0,i.jsx)(n.strong,{children:"Set Image"})," to browse for an icon for the new resource family."]}),"\n",(0,i.jsx)(n.p,{children:"The icon will be displayed on the resource, Execution instance diagram, and Lab Monitor, for every family resource. The maximum allowed image size is 240 KB. It is recommended to use 32x32 pixel icons."}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"important",children:(0,i.jsx)(n.p,{children:"It is recommended to add the relevant images to your data model so that users creating complex blueprints in CloudShell Portal will easily identify the resources."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the required properties for resources of this family:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Property"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Connectable"}),(0,i.jsx)("td",{children:"When selected, resources from this family can be connected to other resources. For example, a traffic generator port is usually connectable, while the parent chassis and blades are not"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Locked By Default"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"When selected, resources from this family are unshared by default, and therefore cannot be used in different sandboxes at the same time."}),(0,i.jsx)(n.p,{children:"For example, you can choose to share a server resource to allow it to serve multiple sandboxes at the same time, while a port is typically used exclusively and therefore should be locked by default."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To override the setting for a specific resource, edit the resource's default share level in the ",(0,i.jsx)(n.strong,{children:"Inventory"})," dashboard. For more details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/inventory/managing-resources/editing-resources-from-inventory-dashboard",children:"Editing Resources from the Inventory Dashboard"}),"."]})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Acts As Group"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Tells CloudShell to reserve all sub-resources of a resource whose family is defined to act as a group, along with the resource itself. For example, when attempting to reserve a port within a blade that is defined to act as a group, the blade resource and all the blade\u2019s ports will be reserved as well."}),(0,i.jsx)(n.p,{children:"This option is typically used to create a pair of neighboring ports."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Acts As Group"})," is only defined when creating a new family."]})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Admin Only"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["Hides this family's resources from all non-admin users. Admins can change this setting for a resource in CloudShell Portal - see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/inventory/managing-resources/editing-resources-from-inventory-dashboard",children:"Editing Resources from the Inventory Dashboard"}),"."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You can only define a sub-resource as admin only, if the root family was defined as admin only."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Searchable"}),(0,i.jsx)("td",{children:"Displays this family in advanced resource search results."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Service Template"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["If you are creating a family for services or apps, select the type of service that will be included in this category. Select the ",(0,i.jsx)(n.strong,{children:"Service Template"})," check box. From the ",(0,i.jsx)(n.strong,{children:"Type"})," drop-down list that is displayed, select the type of service:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Regular"}),": This is a regular service, not an app"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deployment"}),": Relevant for apps. This service deploys the app's virtual machine on the selected cloud provider."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Installation"}),": Relevant for apps. This service installs the application on the virtual machine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Orchestration"}),": Relevant for apps. This is a built-in service that manages the execution of the app's services. Contact support before working with this type of service."]}),"\n"]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Type"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Type"})," check box enables you to classify resources within this family into a category to help end-users search for this resource in the CloudShell Portal."]}),(0,i.jsx)(n.p,{children:"The categories are:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Resource"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Application"})}),"\n"]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Allow Remote Connection"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["Enables users to remotely connect to resources of this family from the sandbox and the ",(0,i.jsx)(n.strong,{children:"Inventory"})," dashboard. The option is enabled by default."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["When importing packages into CloudShell or upgrading from CloudShell 8.0 or earlier, the option is enabled by default for root resource families only. To enable for sub-resource families, select the check box in the family's ",(0,i.jsx)(n.strong,{children:"Parameters"})," page."]})})]})]})]})]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The new resource family is added to the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-resource-model",children:"Creating a resource model"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," ribbon."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Configuration"})," section, click ",(0,i.jsx)(n.strong,{children:"Resource Families"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer, select the relevant family."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Right-click the family name and select ",(0,i.jsx)(n.strong,{children:"Add > New > Resource Model"}),".",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:s(75488).c+"",width:"352",height:"228"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter a ",(0,i.jsx)(n.strong,{children:"Name"})," and optionally enter a ",(0,i.jsx)(n.strong,{children:"Description"})," for your model."]}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"important",children:(0,i.jsx)(n.p,{children:"It is recommended to start with the device vendor and complete with the device model"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Image"})," button and browse for an icon to represent the model. The maximum allowed image size is 240 KB. It is recommended to use 32x32 pixel icons."]}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"important",children:(0,i.jsx)(n.p,{children:"It is recommended to add the relevant images to your data model so that users creating complex blueprints in CloudShell Portal, will easily identify the resources."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The new model is added under the relevant family."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"associating-a-driver-to-a-resource-model",children:"Associating a driver to a resource model"}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Drivers"})," management page is only visible if you set the HideDriversTabInManage key. This tab is only relevant when developing 1st\xa0Gen Shells. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/general#show-the-drivers-management-page",children:"Customer Configuration Keys Repository"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"This procedure explains how to associate a driver that exists in CloudShell to a resource model. Drivers provide commands that can be run on resources."}),"\n",(0,i.jsxs)(n.p,{children:["Drivers are added to CloudShell in the CloudShell Portal's ",(0,i.jsx)(n.strong,{children:"Manage"})," dashboard,\xa0as explained in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-drivers#adding-drivers",children:"Adding drivers"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To associate a driver to a resource model:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," ribbon."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Configuration"})," section, click ",(0,i.jsx)(n.strong,{children:"Resource Families"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer, select the relevant resource model."]}),"\n",(0,i.jsxs)(n.p,{children:["The resource model's ",(0,i.jsx)(n.strong,{children:"Parameters"})," page tab is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Drivers"})," sub-tab, click ",(0,i.jsx)(n.strong,{children:"Add/Remove From Bank"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Select Drivers"})," dialog box is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.strong,{children:"Available Drivers"})," pane, select the driver you want to associate and click ",(0,i.jsx)(n.img,{src:s(152).c+"",width:"45",height:"30"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Optionally, select the ",(0,i.jsx)(n.strong,{children:"Supports Concurrent Commands"})," check box to enable multiple commands to run on the model's resources at the same time."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To use this driver, you will need to associate it to the resource(s) you create in the ",(0,i.jsx)(n.strong,{children:"Resource Explorer"}),". You can also associate a driver to a resource model in the ",(0,i.jsx)(n.strong,{children:"Manage"})," dashboard. For additional information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-drivers#editing-drivers",children:"Editing drivers"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"associating-an-attribute-to-a-family-or-model",children:"Associating an attribute to a family or model"}),"\n",(0,i.jsxs)(n.p,{children:["For information on how to create attributes, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes",children:"Attributes"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To associate an attribute with a resource family or model:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer, select the required family/model."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Parameters"})," pane is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Parameters"})," pane, in the ",(0,i.jsx)(n.strong,{children:"Attributes"})," tab, click ",(0,i.jsx)(n.strong,{children:"Add/Remove From Bank"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Family Attributes"})," window, in the ",(0,i.jsx)(n.strong,{children:"Available Attributes"})," pane, select the required attributes."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["To add an attribute, in the ",(0,i.jsx)(n.strong,{children:"Available Attributes"})," pane, click ",(0,i.jsx)(n.img,{src:s(152).c+"",width:"45",height:"30"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["To remove attributes, in the ",(0,i.jsx)(n.strong,{children:"Selected Attributes"})," pane, click ",(0,i.jsx)(n.img,{src:s(37852).c+"",width:"43",height:"28"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you don't see the attribute in the resource's ",(0,i.jsx)(n.strong,{children:"Configuration/Settings"})," tabs, make sure that the attribute has the ",(0,i.jsx)(n.strong,{children:"Configuration/Settings"})," rules selected."]})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-associated-attribute-rules",children:"Configuring associated attribute rules"}),"\n",(0,i.jsx)(n.p,{children:"After associating an attribute with a family or model, you can modify the rules associated with that instance of the attribute. The settings that you specify for an attribute instance will affect all child resources of the selected family or model, but will not affect the attribute's source settings."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To edit attribute rules for an attribute instance:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," tab's ",(0,i.jsx)(n.strong,{children:"Resource Families"})," icon to open the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer."]}),"\n",(0,i.jsxs)(n.li,{children:["Select a resource family or model from the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," tree. Any attributes associated with the selected family or model will be displayed in the ",(0,i.jsx)(n.strong,{children:"Attributes"})," pane on the right."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the attribute that you wish to configure, and click the ",(0,i.jsx)(n.strong,{children:"Edit Rules"})," button."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To edit rules for an attribute that is associated with a resource family:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select a resource family and click the toolbar's ",(0,i.jsx)(n.strong,{children:"Edit Rules"})," button."]}),"\n",(0,i.jsxs)(n.p,{children:["The Attributes ",(0,i.jsx)(n.strong,{children:"Rules"})," window contains three tabs: ",(0,i.jsx)(n.strong,{children:"Attributes Details"}),", ",(0,i.jsx)(n.strong,{children:"Value Constraints"}),", and ",(0,i.jsx)(n.strong,{children:"Inheritance Rules"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"setting-new-default-value-for-an-attribute-instance",children:"Setting new default value for an attribute instance"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To modify the attribute's default value:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Attribute Details"})," tab."]}),"\n",(0,i.jsx)(n.p,{children:"The attribute name, type, and description are global settings and cannot be changed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"restricting-values-for-an-associated-attribute",children:"Restricting values for an associated attribute"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To define a set of valid attribute values for this specific family or model:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Value Constraints"})," tab. By default, no constraints are set"]}),"\n",(0,i.jsxs)(n.li,{children:["To add constraints, check the ",(0,i.jsx)(n.strong,{children:"Restricted Values"})," option.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"String"})," or ",(0,i.jsx)(n.strong,{children:"Numeric"})," type attributes, enter the list of valid values for the attribute instance, separated by a comma"]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Lookup"})," type attributes, check each value that you wish to associate with the attribute"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Value constraints cannot be set for ",(0,i.jsx)(n.strong,{children:"Password"})," or ",(0,i.jsx)(n.strong,{children:"Boolean"})," type attributes."]})}),"\n",(0,i.jsx)(n.h3,{id:"configuring-attribute-inheritance-settings",children:"Configuring attribute inheritance settings"}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"note",children:(0,i.jsxs)(n.p,{children:["The attribute inheritance feature will be deprecated in an upcoming release. Please do not use this setting.For additional information, contact ",(0,i.jsx)(n.a,{href:"https://register.quali.com/",children:"Quali Support"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To specify inheritance settings for this instance of the attribute:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Inheritance Rules"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Default"})," rule: Not inherited to disable inheritance.",(0,i.jsx)(n.br,{}),"\n","In this case, the attribute will apply to the selected family or model, but not to any resources of this type."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Not overridable"})," to enable inheritance but to disable modifications to the attribute settings.",(0,i.jsx)(n.br,{}),"\n","This attribute will be added to any child resources for the selected family or model with the current values and rules"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Inherited"}),", ",(0,i.jsx)(n.strong,{children:"overridable"})," to enable inheritance and property modifications."]}),"\n",(0,i.jsx)(n.p,{children:"Child resources of the selected family or model can modify attribute values and settings."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Attributes inherited by a child resource cannot be removed from a family or model. You can however modify the default and restricted values of inherited attributes in a child resource. If you choose to modify the default or restricted values of an inherited attribute, the inheritance connection between the child resource and the parent family or model will be lost. Future changes to the family will no longer automatically apply to the modified child. Inherited attribute values that have been modified are marked with an asterisk"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"duplicating-an-existing-data-model",children:"Duplicating an existing data model"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," ribbon."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Configuration"})," section, click ",(0,i.jsx)(n.strong,{children:"Resource Families"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To duplicate an existing family along with the models included in it:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," tree, select the family you wish to duplicate."]}),"\n",(0,i.jsxs)(n.li,{children:["Right-click the family name and select ",(0,i.jsx)(n.strong,{children:"Copy"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Right-click the root of the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," tree and select ",(0,i.jsx)(n.strong,{children:"Paste"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A new family and all its models is added to the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," tree."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To duplicate a model:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," tree, select the model that you wish to duplicate."]}),"\n",(0,i.jsxs)(n.li,{children:["Right-click the model name and select ",(0,i.jsx)(n.strong,{children:"Copy"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Select the family of the model you just copied."}),"\n",(0,i.jsxs)(n.li,{children:["Right-click the family's name and select ",(0,i.jsx)(n.strong,{children:"Paste"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You can only duplicate a model within the same family."})}),"\n",(0,i.jsxs)(n.p,{children:["A duplicate model, under a new name is added to the same family in the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," tree."]}),"\n",(0,i.jsx)(n.h2,{id:"define-the-resource-structure",children:"Define the resource structure"}),"\n",(0,i.jsxs)(n.p,{children:["If the device you are modeling has sub-resources, such as ports or jacks, you can associate your resource model with the models of those sub-resources. This will enable you to add sub-resources, which use the associated models, to the actual resource you will create. For more information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure",children:"Defining the Resource Structure"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"relate-topics",children:"Relate topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/importingexporting-resource-family-updates",children:"Importing/Exporting Resource Family Updates"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},37852:(e,n,s)=>{s.d(n,{c:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAcCAYAAAD4IkbVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMGSURBVFhH7ZfbTxNBFIf3H9QYE/HBRGJiYiQ+GBMuQYwGlAQFo0KpETAFxWIKbbhIAYOGi5XaioVit9vLbi+2paX3bm9A+3Nn5YnuAy3F9oFJvped2Z1vzpw5nVJFAKlMDl9+MuhSzKOpT4kb3WNofDJaM8j8Tb1KPBiawdIPGgk+i2KxCIrP5aHd2EGrbBLPP2jRMzqLx8MadA2pawaZv0cxg5fKRbTL1VCv/EI0yYOyeUN4NDKLYc0yOI8P0VgMsVi85hCP3eAe3s2tomVwEkbGDWrF5MDNbgXsrAv5fF5IivpphcND2ASvxs5hzH7bBrUo5MTlNhlYtweFQuFoWP00m5PDlfZBaFZNoBb0FlxofgXW5a5LWUaQbbgvP5etejuXPav2X2TJtwjkl+c07cxlD4X6GAqFEAgETl27JWWdVZJNp9NgWRYGgwEMwyCbzR71VNakZbnKZclW8zwPr9eLzc1N6HQ6WK1WJBKJUwdAUtbBuXBwcCBuYbns7++LUdRoNNBqtQgGg5LjyoUslHGwpbJ2lhO3LJfLlQ15z+12w2g0Qq/Xw2Qywe/3i89Jzkq9cxJIEKx253HZftidrLiVmUymIkiuplIpMV/X19dFaY7jkEwmJcefFNrmKJW1CeEmHyYTVgJZKIHkKakCZrMZNE0jEolIjj8pFsZeKkvCHRPukPF4vCoQabJ4qb5yKJG9SGSFcIfD4apBIir1vBzIN3bo47It/aCFFZBTTIp5PWGmGTR0HJO1WG3iCa43ti1WXO14/U92UZC91DogyDJiUa83tn/TQhocyZK/4Nc7R4QD5hA7Sb10uVx1gdfrEXf82sMhTK9tgTKzfrQOTkG1pBNlAz4vfF53zQn88SAY8GP6qx53+pRY23KAivMZTCwbcPfFBOSqJcg+ajGgnK85sgkt3kx9RvOACm/ndAiEE6AKwiXEtxfD2MIG2uRqNPWO49bT9zXn9rNx3OtXQfHpO9y7UeGuUABFbjZEOJ3LI5pMYy/OC6TqAB6RBI90Ni/6AcBfJSkKZ5JE4cIAAAAASUVORK5CYII="},47760:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/New-Resource-Family-5e187b2f05d9af742f02120caf14c23a.png"},75488:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Resource-Model-4d5f9a298c230bbf55994d9d746a801c.png"},152:(e,n,s)=>{s.d(n,{c:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAeCAYAAAC49JeZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM8SURBVFhH7ZjtT1JRHMf5G83e9MZqvXDrXSvtYWXZXLOy2XzIAuZylpoPbITMpbIkJYxQRJ5EBgmCwOWZy4OXh2/nHNE1xU0x47b52z6Dy86553N+98c9514JKlEul7ErFMBn80hmckjyOST4bF2hDiniQp2EQhHliiuTpsJcIo0ZvRXdnzR4KFWipW8Sd+pMa/8U2mRKvB7XQGtysolQVwkB6WwOo3MG3Hz5Ac+HVOiQK9A2MEEYryuP307g2aACXcPTaOmfxMyylWVeUiyVoLO4cbt3HNKpeewEg8hneQi5jCjYJS4cF0Hv6BeS/QmsOr2Q0FqRf17Cre4RxGMRFAoCqxsxRalUxJptE1fa3kGlW4dkl0jTmrnRIUc6GScNSpWmIgpSwysWBy7d64NycY1IC0V0jc2j6YkUvMilG+5eSJ9zXEj/q7iQPhSZTAaJRALFYrHyy1+K85T2+/0wGo3Y2tpCOp0mY+1vcc4Y5ymdy+Xgdruh1Wqh0+ng8/mY/FlLjk6+qvTVdinSiRhZxgtskFqgZZHP5xGLxWAymaBSqdhnKpViA1frc1JW1o+RTsUjEASBDU7layGbzSISicDlckGtVmNpaYlseLgznZPuh4xme3XpRJRjg9LLfFpohpPJJJxOJzQaDRYWFlht0wnwPF+1z2n4abah4fDeY086zGqQDnJa6GQ9Hg/7I9IsB8kWl56L3lEo1fqcnDQMazayYeo/Kh2PhNktqxZolmkt08zuH1MOt6uFJMGwZqkuHeOCiEajbHAxEY9H8cN0jHQ0vINwOCw6OC6M5dX1o9LXnkrBBQOsFsVGKBSEfqWqtAyhgB/b29tsZRMTAYLeaP5Dmjxu9Ux+RXPne4SCfvi8XnarEhM+n5dk2ozLD94QafPeg+3InAG3e8Zg29hkDbxe2viXKPASaT+5+hr9Cq53DGLWYIeELpGrTh/uDyjwangaZvsGHGSBsDk2YCPf642dJNLq2ETnkAqPZEpY3YG9N0yZ3C7U3y1ofjGMpnYZGsnK09DaS5bN+tNI6ripXc7eNi2aXeCJ68G7PHpgdHqh+GZi5fJxVhxQF4XWBKsngLxQYK4H0v9PAL8Btt0+W8muDxIAAAAASUVORK5CYII="},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>l});var i=s(11504);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);