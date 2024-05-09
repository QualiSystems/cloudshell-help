"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[60960],{35260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(17624),l=n(4552);const i={sidebar_position:4},a="Modeling Shells with TOSCA",r={id:"devguide/developing-shells/modeling-shells-with-tosca",title:"Modeling Shells with TOSCA",description:"By defining how a Shell is modeled in CloudShell, we can control how it\u2019s represented in CloudShell. If you\u2019ve gone through the steps of the\xa0Getting Started with Shell Development\xa0tutorial, you may have noticed that with little effort we\u2019ve already managed to model a new type of entity.",source:"@site/docs/devguide/developing-shells/modeling-shells-with-tosca.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/modeling-shells-with-tosca",permalink:"/cloudshell-help/next/devguide/developing-shells/modeling-shells-with-tosca",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/modeling-shells-with-tosca.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"The Shell Project Guide",permalink:"/cloudshell-help/next/devguide/developing-shells/the-shell-project-guide"},next:{title:"Managing the Shell\u2019s Data Model",permalink:"/cloudshell-help/next/devguide/developing-shells/managing-the-shell-data-mode"}},o={},d=[{value:"Setting the Standard",id:"setting-the-standard",level:2},{value:"TOSCA Modeling",id:"tosca-modeling",level:2},{value:"The Standard Data Model",id:"the-standard-data-model",level:2},{value:"Extending the Data model",id:"extending-the-data-model",level:2},{value:"Edit the Shell metadata",id:"edit-the-shell-metadata",level:3},{value:"Add a custom attribute to the Shell",id:"add-a-custom-attribute-to-the-shell",level:3},{value:"Determine the usage of custom Shell attributes",id:"determine-the-usage-of-custom-shell-attributes",level:3},{value:"Customize the Shell\u2019s Image",id:"customize-the-shells-image",level:3},{value:"Optional Shell Capabilities",id:"optional-shell-capabilities",level:3}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"modeling-shells-with-tosca",children:"Modeling Shells with TOSCA"}),"\n",(0,s.jsxs)(t.p,{children:["By defining how a Shell is modeled in CloudShell, we can control how it\u2019s represented in CloudShell. If you\u2019ve gone through the steps of the\xa0",(0,s.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),"\xa0tutorial, you may have noticed that with little effort we\u2019ve already managed to model a new type of entity."]}),"\n",(0,s.jsx)(t.p,{children:"In this section, we\u2019ll take a more in-depth look at how we can customize how Shell resources or deployed Apps are presented and behave in CloudShell."}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/fJIQvjR5_RA",title:"Modeling Shells",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(t.h2,{id:"setting-the-standard",children:"Setting the Standard"}),"\n",(0,s.jsx)(t.p,{children:"The first thing to do is to classify the Shell according to one of the CloudShell standards. CloudShell has a growing number of standards, which make it easier to create a new Shell."}),"\n",(0,s.jsx)(t.p,{children:"To give a few examples:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/deployed_app_standard.md",children:"Deployed App Shell Standard"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/compute_standard.md",children:"Compute Shell Standard"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/networking_standard.md",children:"Networking Shell Standard"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/firewall_standard.md",children:"Firewall Shell Standard"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/Custom%20Service%20Shell%20Standard.md",children:"Custom Service Shell Standard"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Regarding the ",(0,s.jsx)(t.strong,{children:"Layer 1 Shell"})," template, please note that this is a special kind of shell with its own template and mechanism, and works differently from 1st and 2nd Gen shells. For more information, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/next/devguide/reference/l1-switch-shells",children:"L1 Switch Shells"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To get a list of the possible templates:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Run the following command in your Command Line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"shellfoundry list\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For this example, we\u2019ll use the\xa0",(0,s.jsx)(t.em,{children:"gen2/resource"}),"\xa0template, which is an implementation of the Shell\u2019s basic standard, a generic standard for any standalone Shell."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To create a new Shell from the template:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Run the following command in your Command Line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"shellfoundry new custom-data-model --template gen2/resource\ncd custom-data-model\n"})}),"\n",(0,s.jsx)(t.p,{children:"In previous examples we generated a Shell package that can be installed in CloudShell. This time, we\u2019ll take a look at some of the important settings of the Shell\u2019s model and demonstrate how it can be customized."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"tosca-modeling",children:"TOSCA Modeling"}),"\n",(0,s.jsxs)(t.p,{children:["CloudShell\u2019s 2nd Gen Shells are modeled with TOSCA, an open standard for designing and modeling cloud-based services. To develop a Shell, there is no need for an in depth understanding of TOSCA. We will introduce all the important concepts for Shell development in this topic. If you are interested in learning more about TOSCA, you can read the\xa0",(0,s.jsx)(t.a,{href:"http://docs.oasis-open.org/tosca/TOSCA-Simple-Profile-YAML/v1.0/csprd01/TOSCA-Simple-Profile-YAML-v1.0-csprd01.html",children:"TOSCA YAML Specification"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Shells created using Shellfoundry include the\xa0",(0,s.jsx)(t.code,{children:"shell-definition.yaml"}),"\xa0file, which holds the Shell model specifications in TOSCA format. Let\u2019s review the structure of this file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"tosca_definitions_version: tosca_simple_yaml_1_0\n\nimports:\n  - cloudshell_standard: cloudshell_resource_standard_1_0_0.yaml\n\nnode_types:\n  vendor.switch.CustomDataModel:\n    derived_from: cloudshell.nodes.GenericResource\n    ...\n    ...\n    ...\n"})}),"\n",(0,s.jsx)(t.p,{children:"This file uses a YAML format and includes several key elements:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The first line indicates the TOSCA version. At this point CloudShell supports version 1.0."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"imports"}),"\xa0section indicates the CloudShell standard that is used. It already points to the standard of the ShellFoundry template that was used to create the Shell."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"node_types"}),"\xa0section is the most important part. The Shell is modeled as a new TOSCA node that derives from the\xa0",(0,s.jsx)(t.em,{children:"cloudshell.nodes.GenericResource"}),"\xa0node. This parent node is defined in the imported CloudShell standard file and lists all the configurations that were defined in the standard."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In the following sections, we will describe how to edit the\xa0",(0,s.jsx)(t.code,{children:"shell-definition.yaml"}),"\xa0file and customize the Shell\u2019s data model."]}),"\n",(0,s.jsx)(t.h2,{id:"the-standard-data-model",children:"The Standard Data Model"}),"\n",(0,s.jsx)(t.p,{children:"First, let\u2019s understand which definitions the Shell inherits from the standard. The standard is not vendor-, device- or App-specific, but a general description of how Shells created from the same standard should integrate with CloudShell."}),"\n",(0,s.jsx)(t.p,{children:"The standard defines the following elements:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Data model structure"}),"\xa0- Shells can be modeled using a hierarchy of building blocks. We often call the Shell itself the \u2018root\u2019, and under it we have \u2018sub-resource\u2019. In this generic Shell example, the data model structure includes ports and power ports. If we use a switch template instead, the structure will include switch-specific elements such as chassis, modules, port groups and networking ports."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Attributes"}),"\xa0- Attributes are used to store persistent information about the Shell. This information is presented to the user in CloudShell Portal and can be used in automation processes. Attributes are defined for all levels of the Shell\u2019s hierarchy. For example, the root level has generic information like \u2018vendor\u2019, \u2018model\u2019, \u2018user\u2019 and \u2018password\u2019, and the sub-resource level may have attributes such as \u2018port speed\u2019 and \u2018port description\u2019."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Link to one of CloudShell standard families"}),"\xa0- CloudShell families typically represent broad categories or roles of resources, such as Switch, Router, Compute Server and Database."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Driver interface"}),"\xa0\u2013 A Python class with the common functions that the Shell driver may have. For example:\xa0",(0,s.jsx)(t.em,{children:"init"}),",\xa0",(0,s.jsx)(t.em,{children:"save"}),",\xa0",(0,s.jsx)(t.em,{children:"restore"}),"\xa0etc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To see all the details of the Resource Standard used in this example, go to:\xa0",(0,s.jsx)(t.a,{href:"https://github.com/QualiSystems/resource-shell-standard-clean/blob/master/spec/shell_resource_standard.md",children:"Resource Standard Documentation"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Note that each ShellFoundry template uses its own standard and has its own documentation."}),"\n",(0,s.jsx)(t.h2,{id:"extending-the-data-model",children:"Extending the Data model"}),"\n",(0,s.jsxs)(t.p,{children:["Let\u2019s review the complete structure of the\xa0",(0,s.jsx)(t.code,{children:"shell-definition.yaml"}),"\xa0file and see which settings can be customized:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"tosca_definitions_version: tosca_simple_yaml_1_0\n\nmetadata:\n  template_name: CustomDataModel\n  template_author: Anonymous\n  template_version: 0.1.0\n  template_icon: shell-icon.png\n\ndescription: >\n  TOSCA based resource shell\n\nimports:\n  - cloudshell_standard: cloudshell_resource_standard_1_0_0.yaml\n\nnode_types:\n  vendor.switch.CustomDataModel:\n    derived_from: cloudshell.nodes.GenericResource\n    #properties:\n    #  property_name:\n    #    type: string          # optional values: string, integer, float, boolean, cloudshell.datatypes.Password\n    #    default: fast\n    #    description: Some attribute description\n    #    constraints:\n    #      - valid_values: [fast, slow]\n    artifacts:\n      icon:\n        file: shell-icon.png\n        type: tosca.artifacts.File\n      driver:\n        file: CustomDataModelDriver.zip\n        type: tosca.artifacts.File\n    capabilities:\n      auto_discovery_capability:\n        type: cloudshell.capabilities.AutoDiscovery\n        properties:       \n          enable_auto_discovery:\n            type: boolean\n            default: true\n          auto_discovery_description:\n            type: string\n            default: Describe the auto discovery\n          inventory_description:\n            type: string\n            default: Describe the resource shell template\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To extend the data model:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Edit the Shell metadata"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add a custom attribute to the Shell"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Determine the usage of custom Shell attributes"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Customize the Shell\u2019s Image"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add Shell Capabilities"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-shell-metadata",children:"Edit the Shell metadata"}),"\n",(0,s.jsx)(t.p,{children:"The TOSCA metadata element describes important information that needs to be updated."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"metadata:\n  template_name: CustomDataModel\n  template_author: Anonymous\n  template_version: 0.1.0\n  template_icon: shell-icon.png\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"template_name"}),"\xa0is the Shell name that is displayed to the CloudShell administrator in CloudShell Portal\u2019s\xa0",(0,s.jsx)(t.strong,{children:"Manage"}),"\xa0page."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"template_author"}),"\xa0is the developer\u2019s name. It is recommended to edit this field."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"template_version"}),"\xa0defines the version number of the Shell."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"template_icon"}),"\xa0is the image that is displayed on the shell\u2019s resources in CloudShell Portal."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"add-a-custom-attribute-to-the-shell",children:"Add a custom attribute to the Shell"}),"\n",(0,s.jsx)(t.p,{children:"In certain situations, we might want to extend the Shell by adding our own custom attributes. There are several common use cases for adding an attribute:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Saving administrative information, such as custom permission groups, categories and contact person."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Saving additional information about the device. This information can be loaded or used by the driver."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["An example of adding a custom attribute is already included in the\xa0",(0,s.jsx)(t.code,{children:"shell-definition.yaml"}),"\xa0file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"properties:\n  my_property:\n    type: string         \n    default: fast\n    description: Some attribute description\n    constraints:\n      - valid_values: [fast, slow]\n"})}),"\n",(0,s.jsx)(t.p,{children:"The format is aligned with the TOSCA representation:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"my_property"}),": The name of the attribute. Replace\xa0",(0,s.jsx)(t.em,{children:"my_property"}),"\xa0with the name of your custom attribute. Attribute name must begin with a letter and can contain alpha numeric characters, spaces and underscores."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"type"}),": This is a mandatory definition. Specify the data type of the attribute:\xa0",(0,s.jsx)(t.em,{children:"string"}),",\xa0",(0,s.jsx)(t.em,{children:"integer"}),",\xa0",(0,s.jsx)(t.em,{children:"float"}),",\xa0",(0,s.jsx)(t.em,{children:"boolean"}),"\xa0or\xa0",(0,s.jsx)(t.em,{children:"cloudshell.datatypes.Password"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"default"}),": The default value of the attribute. If you don\u2019t specify a default value, CloudShell will use the default value according to the data type: empty string for string attributes, \u20180\u2019 for integers, and false for boolean attributes. Wrap the value in single quotes if it contains one of the following characters:\xa0:, {, }, [, ], ,, &, *, #, ?, |, -, < >, =, !, %, @, `, and use double quotes if your value contains a backslash \u201c\\\u201d to avoid escaping it."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"description"}),": A short explanation that will be displayed in CloudShell Portal next to the attribute."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"valid_values"}),": In TOSCA, properties may have several constraints, CloudShell currently only supports\xa0valid_values. This definition holds a comma-separated list of values that the attribute may have. Please note that CloudShell enforces this constraint only when creating a new resource or changing existing resources. If you remove a value from a list that is already in use, some resources may still have the old value."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["By modifying the\xa0",(0,s.jsx)(t.em,{children:"properties"}),"\xa0section, you can add your own custom attributes."]}),"\n",(0,s.jsx)(t.p,{children:"Let\u2019s see how CloudShell presents the Shell inside a sandbox."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To see the attributes in CloudShell:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Add the following attribute to the\xa0",(0,s.jsx)(t.code,{children:"shell-definition.yaml"}),"\xa0file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"properties:\n  my_attribute:     \n    type: string\n    description: Some attribute description\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After you add the attribute, make sure that the YAML format is kept valid. You can use online tools such as\xa0",(0,s.jsx)(t.a,{href:"http://www.yamllint.com/",children:"yamllint"}),"\xa0to validate the format."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Re-install the Shell by running the following command from your Command Line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"shellfoundry install\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the\xa0",(0,s.jsx)(t.strong,{children:"Sandbox"}),"\xa0workspace, hover over the Shell resource and select\xa0",(0,s.jsx)(t.strong,{children:"Attributes"}),". The\xa0",(0,s.jsx)(t.strong,{children:"Resource Attributes"}),"\xa0pane is displayed, listing the attributes which are visible to end users on the web."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Shell Image",src:n(69104).c+"",width:"624",height:"296"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"determine-the-usage-of-custom-shell-attributes",children:"Determine the usage of custom Shell attributes"}),"\n",(0,s.jsxs)(t.p,{children:["In CloudShell, an attribute may have multiple rules that control the attribute\u2019s visibility and behavior. These rules are specified in the tags definition. By default, all attributes are declared with the\xa0",(0,s.jsx)(t.em,{children:"setting"}),"\xa0and\xa0",(0,s.jsx)(t.em,{children:"configuration"}),"\xa0tags, which are not visible in the template. We can override the default value as you can see in the example below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"properties:\n  Att1:\n    type: string         \n    default: fast\n    tags: [setting, configuration, search_filter]\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The available tags are:"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"setting"}),": This tag indicates that this attribute is a setting that can be controlled from the sandbox or defined in the blueprint by end users. Without this tag, the attribute is assigned to the resource but does not appear in the attributes pane."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"configuration"}),": This tag indicates that this attribute is a resource configuration. CloudShell enables administrators to control the value of this attribute from Resource Manager Client but not from CloudShell Portal."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"search_filter"}),"\xa0(Inventory Resources): Users will be able to filter based on that attribute in CloudShell Portal. It\u2019s recommended to allow the filtering of attributes, which are both constrained by a limited set of values and often used to filter resources. Omitting this tag is relevant for attributes with unique values such as serial number or\xa0",(0,s.jsx)(t.em,{children:"uniqueid"}),", since this tag enables filtering."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"abstract_filter"}),"\xa0(Inventory Resources): This attribute can be added to an abstract resource template."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"include_in_insight"}),": This attribute\u2019s value is saved in Insight and can be used to later create BI data for the resources linked to it."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"readonly_to_users"}),": Only administrators and domain administrators in CloudShell Portal will be able to modify this attribute. Users will be able to see the attribute but not modify it."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"display_in_diagram"}),": This attribute will be displayed on the component itself (in the blueprint/sandbox diagram) when using the larger icon size in the diagram."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"connection_attribute"}),": This attribute will be displayed in the\xa0",(0,s.jsx)(t.strong,{children:"Inventory"}),"\xa0tab of the\xa0",(0,s.jsx)(t.strong,{children:"Resource Connections"}),"\xa0dialog box. This enables users to specify a specific attribute value (such as Speed) that will apply only to this specific route when it is connected in a sandbox."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"read_only"}),": This attribute will be read only and users will not be able to modify it from CloudShell Portal.",(0,s.jsx)(t.br,{}),"\n","Note that in CloudShell 9.2 and above, admins can change the values on read only attributes that were added to the resource discovery form (in the\xa0",(0,s.jsx)(t.strong,{children:"Inventory dashboard"}),"). Furthermore, the discovery process will use these updated values as is without running validations on them."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"It is recommended to only use the tags you need. Adding all attributes as search filters, for example, would cause a lot of UI clutter."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"customize-the-shells-image",children:"Customize the Shell\u2019s Image"}),"\n",(0,s.jsx)(t.p,{children:"The Shell\u2019s image is defined in the artifacts section, and is displayed directly on the Shell resources."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To change the image:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add your own image file to the Shell project and change the file name in the artifacts section:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"artifacts:\n  icon:\n    file: shell-icon.png\n    type: tosca.artifacts.File\n  driver:\n    file: CustomDataModelDriver.zip\n    type: tosca.artifacts.File\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"optional-shell-capabilities",children:"Optional Shell Capabilities"}),"\n",(0,s.jsx)(t.p,{children:"The Shell supports two capabilities that can be enabled, assuming the Shell\u2019s driver supports them: auto discovery and concurrent execution of commands."}),"\n",(0,s.jsxs)(t.p,{children:["The implementation of these capabilities is covered in detail in\xa0",(0,s.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/auto-discovery-for-inventory-shells",children:"Auto-discovery for Inventory Shells"}),"\xa0and the Driver Deep Dive article\u2019s\xa0",(0,s.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/driver-deep-dive#drivers-and-concurrency",children:"Drivers and concurrency"}),"\xa0section."]})]})}function c(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69104:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Modeling-Shells-with-TOSCA_624x296-d519aa7aacd353075f1555f80f7cfacb.png"},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var s=n(11504);const l={},i=s.createContext(l);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);