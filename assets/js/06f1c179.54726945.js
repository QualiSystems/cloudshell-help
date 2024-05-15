"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[85516],{84220:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=s(17624),n=s(4552);const l={sidebar_position:4},o="Extending the Shell's Data Model",r={id:"devguide/develop-custom-cloud-provider-shells/extend-the-shell-data-model",title:"Extending the Shell's Data Model",description:"In this article, we will learn how to add attributes to our shell. For information about modifying or deleting attributes from the shell, scroll down to the bottom of this article.",source:"@site/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/extend-the-shell-data-model.md",sourceDirName:"devguide/develop-custom-cloud-provider-shells",slug:"/devguide/develop-custom-cloud-provider-shells/extend-the-shell-data-model",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/extend-the-shell-data-model",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-custom-cloud-provider-shells/extend-the-shell-data-model.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"The Cloud Provider Shell Model",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/the-cp-shell-mode"},next:{title:"Removing the Address Field",permalink:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/remove-the-address-field"}},d={},a=[{value:"Adding an attribute to the shell",id:"adding-an-attribute-to-the-shell",level:2},{value:"Modifying an attribute on a shell",id:"modifying-an-attribute-on-a-shell",level:2},{value:"Deleting an attribute from a shell",id:"deleting-an-attribute-from-a-shell",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"extending-the-shells-data-model",children:"Extending the Shell's Data Model"}),"\n",(0,i.jsx)(t.p,{children:"In this article, we will learn how to add attributes to our shell. For information about modifying or deleting attributes from the shell, scroll down to the bottom of this article."}),"\n",(0,i.jsx)(t.p,{children:"Attributes can be added to the cloud provider shell or to the deployment path on the App template. Attributes on the shell are for general authentication/authorization purposes and for setting general configurations for the cloud provider integration, while attributes on the deployment path are typically settings that apply to the App\u2019s VM. For example, Region applies to the cloud provider shell and Image ID applies to the deployment path. We will cover deployment path attributes in the next article."}),"\n",(0,i.jsxs)(t.p,{children:["CloudShell allows upgrading shells with old/deprecated attributes. For details, see ",(0,i.jsx)(t.a,{href:"/cloudshell-help/devguide/developing-shells/override-old-shell-attributes",children:"Overriding Old/Deprecated Shell Attributes"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-an-attribute-to-the-shell",children:"Adding an attribute to the shell"}),"\n",(0,i.jsxs)(t.p,{children:["Adding attributes to the shell is done in the shell\u2019s\xa0",(0,i.jsx)(t.strong,{children:"shell-definition.yaml"}),"\xa0file."]}),"\n",(0,i.jsxs)(t.p,{children:["Let\u2019s start by adding the\xa0",(0,i.jsx)(t.strong,{children:"VLAN Type"}),"\xa0attribute from the standard. Attributes that are included on the shell\u2019s standard, like this attribute, need to be added to the\xa0",(0,i.jsx)(t.code,{children:"capabilities"}),"\xa0section, under\xa0",(0,i.jsx)(t.code,{children:"properties"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"node_types:\n vendor.resource.ClpShell:\n    derived_from: cloudshell.nodes.CustomCloudProvider\n    capabilities:\n      concurrent_execution:\n        type: cloudshell.capabilities.SupportConcurrentCommands\n      auto_discovery_capability:\n        type: cloudshell.capabilities.AutoDiscovery\n        properties:\n          VLAN Type:\n            type: string       # supported types are: string, integer, float, boolean, cloudshell.datatypes.Password\n"})}),"\n",(0,i.jsx)(t.p,{children:"Let\u2019s see how it looks on CloudShell. Install the shell:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"shellfoundry install"})}),"\n",(0,i.jsxs)(t.p,{children:["Log in to CloudShell Portal, and open the required domain to enable the Apps based on this cloud provider resource to be usable in this domain. In the\xa0",(0,i.jsx)(t.strong,{children:"Inventory"}),"\xa0dashboard, create a resource from the shell."]}),"\n",(0,i.jsxs)(t.p,{children:["The attribute is displayed in the resource\u2019s\xa0",(0,i.jsx)(t.strong,{children:"Validation & Discovery"}),"\xa0page:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Resource information",src:s(34280).c+"",width:"624",height:"427"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that since the\xa0",(0,i.jsx)(t.strong,{children:"VLAN Type"})," attribute is defined on the family, the attribute\u2019s settings (possible values in this case) are inherited from the standard itself. The attribute\u2019s name and type are required, but you can also set the attribute\u2019s default value, description, and\xa0rules\xa0(",(0,i.jsx)(t.code,{children:"tags"}),"\xa0property). For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:'properties:\n  VLAN Type:\n    type: string\n    default: VLAN\n    description: "Select the VLAN type to use - VLAN or VXLAN"\n    tags: [setting, configuration]      # supported tags are: configuration, setting, search_filter, abstract_filter, include_in_insight, readonly_to_users, display_in_diagram, connection_attribute, read_only\n'})}),"\n",(0,i.jsxs)(t.p,{children:["However, if the attribute is not included in the shell\u2019s family, you will need to set it both in the\xa0",(0,i.jsx)(t.code,{children:"properties:"}),"\xa0section, and in the\xa0",(0,i.jsx)(t.code,{children:"capabilities:"}),"\xa0section\u2019s\xa0",(0,i.jsx)(t.code,{children:"properties"}),". We\u2019ll add an attribute called \u201cmy discovery attribute\u201d."]}),"\n",(0,i.jsxs)(t.p,{children:["First we\u2019ll add it to the\xa0",(0,i.jsx)(t.code,{children:"capabilities"}),"\xa0section:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"node_types:\n vendor.resource.ClpShell:\n    derived_from: cloudshell.nodes.CustomCloudProvider\n      capabilities:\n        concurrent_execution:\n          type: cloudshell.capabilities.SupportConcurrentCommands\n        auto_discovery_capability:\n          type: cloudshell.capabilities.AutoDiscovery\n          properties:\n            my discovery attribute:\n              type: string\n"})}),"\n",(0,i.jsxs)(t.p,{children:["And then we\u2019ll add it to the\xa0",(0,i.jsx)(t.code,{children:"properties:"}),"\xa0section as well (note that this section is missing, so you\u2019ll need to add it directly under the\xa0",(0,i.jsx)(t.code,{children:"derived_from:"}),"\xa0line:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"node_types:\n vendor.resource.MyCustomClp1:\n    derived_from: cloudshell.nodes.CustomCloudProvider\n    properties:\n      my discovery attribute:\n          type: string\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Install the shell and return to CloudShell Portal, in the\xa0",(0,i.jsx)(t.strong,{children:"Inventory"}),"\xa0dashboard, click the resource\u2019s more actions button and select\xa0",(0,i.jsx)(t.strong,{children:"Discover"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Resource information",src:s(92936).c+"",width:"624",height:"274"})}),"\n",(0,i.jsxs)(t.p,{children:["The resource\u2019s\xa0",(0,i.jsx)(t.strong,{children:"Validation & Discovery"}),"\xa0page is displayed, showing the new discovery attribute we created."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Resource information",src:s(67584).c+"",width:"624",height:"427"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also set additional settings. Since this attribute is not included in the family, you can also set possible values (",(0,i.jsx)(t.code,{children:"constraints"}),"\xa0property)."]}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:'properties:\n  my discovery attribute:\n    type: string\n    default: value 3\n    description: "This is my discovery attribute."\n    constraints: [value 1, value 2, value 3]\n    tags: [setting, configuration]\n'})}),"\n",(0,i.jsx)(t.h2,{id:"modifying-an-attribute-on-a-shell",children:"Modifying an attribute on a shell"}),"\n",(0,i.jsxs)(t.p,{children:["You cannot modify an attribute's ",(0,i.jsx)(t.strong,{children:"type"})," and ",(0,i.jsx)(t.strong,{children:"name"}),", nor any attributes that are associated with the shell\u2019s family as this will affect other shells that use this family. To find the attributes defined in the shell\u2019s standard, see the\xa0",(0,i.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/tree/master/Documentation",children:"documentation page"}),"\xa0of your shell\u2019s standard."]}),"\n",(0,i.jsx)(t.h2,{id:"deleting-an-attribute-from-a-shell",children:"Deleting an attribute from a shell"}),"\n",(0,i.jsx)(t.p,{children:"Deleting any of the shell\u2019s default attributes (those that come with the standard) is not supported. It is also not possible to customize a 2nd Gen shell\u2019s data model (families and models) and its structure, which is as defined in the Cloud Provider Shell Standard."})]})}function c(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},92936:(e,t,s)=>{s.d(t,{c:()=>i});const i=s.p+"assets/images/Extending-the-Shell-s-Data_1_624x274-801048b4f4575225135a4b0e88a8916b.png"},67584:(e,t,s)=>{s.d(t,{c:()=>i});const i=s.p+"assets/images/Extending-the-Shell-s-Data_2_624x427-fc4b555ad74905ca78deadeda8ad9444.png"},34280:(e,t,s)=>{s.d(t,{c:()=>i});const i=s.p+"assets/images/Extending-the-Shell-s-Data_624x427-2038462615f959577ccbd953f5f0d7e9.png"},4552:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>o});var i=s(11504);const n={},l=i.createContext(n);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);