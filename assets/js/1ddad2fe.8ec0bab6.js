"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[36220],{21960:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(17624),i=s(4552);const t={sidebar_position:1},o="Adding and Configuring Resources in Resource Manager",c={id:"admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager",title:"Adding and Configuring Resources in Resource Manager",description:"This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see Shells Overview.",source:"@site/docs/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources",slug:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Adding and Configuring Resources",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/"},next:{title:"Associating a Driver with a Resource",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/associating-a-driver-with-a-resource"}},l={},d=[{value:"Adding resources to Resource Manager",id:"adding-resources-to-resource-manager",level:2},{value:"Adding sub resources to a resource",id:"adding-sub-resources-to-a-resource",level:2},{value:"Configuring sub-resources",id:"configuring-sub-resources",level:2},{value:"Updating resource details",id:"updating-resource-details",level:2},{value:"Updating attribute values",id:"updating-attribute-values",level:2},{value:"Defining resource connections",id:"defining-resource-connections",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"adding-and-configuring-resources-in-resource-manager",children:"Adding and Configuring Resources in Resource Manager"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"This article explains how to manually create resources in Resource Manager, including sub-resources (such as ports), connections, attributes, and resource settings."}),"\n",(0,r.jsxs)(n.p,{children:["Drivers, groups and domains must be associated to the resources separately. For additional information, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/associating-a-driver-with-a-resource",children:"Associating a Driver with a Resource"})," and ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain",children:"Adding/Removing Resources from a Domain"})," ."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["It is recommended to add resources based on 2nd Gen Shells via the CloudShell Portal, to enjoy the full range of CloudShell capabilities. For additional information, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"adding-resources-to-resource-manager",children:"Adding resources to Resource Manager"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To create a new resource:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane, right-click the folder where you want to add the new resource and select ",(0,r.jsx)(n.strong,{children:"New\xa0> Resource"}),"\xa0from the context menu."]}),"\n",(0,r.jsx)(n.p,{children:"Or -"}),"\n",(0,r.jsxs)(n.p,{children:["In the toolbar,\xa0click the down arrow of the folder\xa0button and select\xa0",(0,r.jsx)(n.strong,{children:"Resource"}),"\xa0from the context menu."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(21848).c+"",width:"210",height:"242"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the\xa0",(0,r.jsx)(n.strong,{children:"New Resource"}),"\xa0dialog box, enter the resource name."]}),"\n",(0,r.jsxs)(n.p,{children:["Note: The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] [",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:s(73076).c+"",width:"352",height:"230"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fill in the address. Make sure there are no spaces before or after the address."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the resource Family, Model, and Driver from the dropdown lists and click\xa0",(0,r.jsx)(n.strong,{children:"OK"})," to add the new resource to the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"adding-sub-resources-to-a-resource",children:"Adding sub resources to a resource"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To add sub-resources to a resource:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane, right-click the resource and select\xa0",(0,r.jsx)(n.strong,{children:"Configuration"}),"\xa0from the context menu."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Configuration"})," tab is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Right-click the resource in the\xa0",(0,r.jsx)(n.strong,{children:"Internal Resources"}),"\xa0explorer, and select\xa0",(0,r.jsx)(n.strong,{children:"New"})," from the context menu."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"New Resource"}),"\xa0dialog box, enter the resource name."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] [",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:s(73076).c+"",width:"352",height:"230"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fill in the address."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the resource Family, Model, and Driver from the dropdown lists and click\xa0",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Press\xa0",(0,r.jsx)(n.strong,{children:"Ctrl + S"}),"\xa0to save the changes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"When you select a sub-resource in the Internal Resources Explorer, the Parameters and Details sections update to display resource details for the selected sub-resource."})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-sub-resources",children:"Configuring sub-resources"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To configure a resource"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane, right-click a resource and select ",(0,r.jsx)(n.strong,{children:"Configuration"})," from the context menu."]}),"\n",(0,r.jsx)(n.p,{children:"The Configuration tab is displayed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the\xa0",(0,r.jsx)(n.strong,{children:"Parameters"})," section of the resource's Configuration tab, you can update the resource name, description, and address."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also select which driver to associate with the resource.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:s(48360).c+"",width:"575",height:"566"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The list of available drivers for a resource is defined by the inheritance settings of the parent model or resource family."}),"\n",(0,r.jsxs)(n.li,{children:["Select the\xa0",(0,r.jsx)(n.strong,{children:"Details"})," tab to modify any\xa0overridable\xa0attribute values."]}),"\n",(0,r.jsxs)(n.li,{children:["Select the\xa0",(0,r.jsx)(n.strong,{children:"Domains"})," tab to modify resource allocation settings."]}),"\n",(0,r.jsxs)(n.li,{children:["The\xa0",(0,r.jsx)(n.strong,{children:"Groups"})," tab displays which groups are associated with the resource, and the access level for each group."]}),"\n",(0,r.jsxs)(n.li,{children:["In the\xa0",(0,r.jsx)(n.strong,{children:"Resources\xa0Explorer"})," pane, you can add, edit, and remove internal resources. Additional actions are available from the resource's Settings and Configuration tabs from which you can exclude, include and sync/autoload the device's structure."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"updating-resource-details",children:"Updating resource details"}),"\n",(0,r.jsx)(n.p,{children:"You can update the following details: resource name, description and address, attribute details, domains, sub resources, and internal mappings."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To update resource details"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane, right-click the resource and select\xa0",(0,r.jsx)(n.strong,{children:"Configuration"})," from the context menu."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Configuration"})," page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Make the necessary changes in the ",(0,r.jsx)(n.strong,{children:"Configuration"})," and ",(0,r.jsx)(n.strong,{children:"Settings"})," tabs."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"updating-attribute-values",children:"Updating attribute values"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To update an attribute's values"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane, right-click the resource and select ",(0,r.jsx)(n.strong,{children:"Configuration"})," from the context menu."]}),"\n",(0,r.jsx)(n.p,{children:"The Configuration tab is displayed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the\xa0",(0,r.jsx)(n.strong,{children:"Details"})," tab."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(82480).c+"",width:"575",height:"566"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Specify the attribute's values."}),"\n",(0,r.jsxs)(n.li,{children:["Press\xa0",(0,r.jsx)(n.strong,{children:"Ctrl + S"}),"\xa0to save the changes."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Some attribute values will be read-only, depending on the inheritance and override rules that you defined for the resource family and model."})}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,r.jsxs)(n.p,{children:["The attribute inheritance feature will be deprecated in an upcoming release. Please do not use this setting. For additional information, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#configuring-attribute-inheritance-settings",children:"Configuring attribute inheritance settings"})," or contact ",(0,r.jsx)(n.a,{href:"https://register.quali.com/",children:"Quali Support"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"You cannot update attribute values for active resources when they are being shared."}),"\n",(0,r.jsx)(n.h2,{id:"defining-resource-connections",children:"Defining resource connections"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To define physical connections (usually cables) between resource ports"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane, right-click the resource and select\xa0",(0,r.jsx)(n.strong,{children:"Configuration"}),"\xa0from the context menu."]}),"\n",(0,r.jsx)(n.p,{children:"The Configuration tab is displayed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the\xa0",(0,r.jsx)(n.strong,{children:"Connections"})," button at the bottom of the\xa0Configuration\xa0tab."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(74060).c+"",width:"575",height:"35"})}),"\n",(0,r.jsxs)(n.p,{children:["The\xa0",(0,r.jsx)(n.strong,{children:"Connections"})," page lists all of the ports for the selected resource."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(76256).c+"",width:"575",height:"393"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The\xa0",(0,r.jsx)(n.strong,{children:"Path"})," column displays the full path of a specific port."]}),"\n",(0,r.jsxs)(n.li,{children:["The\xa0",(0,r.jsx)(n.strong,{children:"Name"})," column displays the name of the port."]}),"\n",(0,r.jsxs)(n.li,{children:["The\xa0",(0,r.jsx)(n.strong,{children:"Connected To"})," column contains the full path of the target port to which the source port is connected."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"Connection Weight"}),"\xa0value is taken into account during abstract blueprint resolution."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To create a new connection between ports"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Connections"})," page, hover over the ",(0,r.jsx)(n.strong,{children:"Connected To"}),"\xa0cell of the relevant port, and click the\xa0",(0,r.jsx)(n.strong,{children:"Ellipsis"})," icon to open the\xa0",(0,r.jsx)(n.strong,{children:"Direction"})," menu."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(72176).c+"",width:"575",height:"393"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In the\xa0",(0,r.jsx)(n.strong,{children:"Resource connection"})," dialog box, select the Family and specific ",(0,r.jsx)(n.strong,{children:"Resource Parent"})," from the top dropdown lists."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(93608).c+"",width:"575",height:"352"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select the connecting port from the list."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click\xa0",(0,r.jsx)(n.strong,{children:"OK"})," to add the connection."]}),"\n",(0,r.jsxs)(n.p,{children:["The relevant ports are displayed on the bottom grid in the\xa0",(0,r.jsx)(n.strong,{children:"Connected To"}),"\xa0column."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To remove existing connections"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the\xa0",(0,r.jsx)(n.strong,{children:"Connections"})," page, select the required ports and click\xa0",(0,r.jsx)(n.strong,{children:"Clear Selected"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To apply the changes"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the Home ribbon,\xa0click the ",(0,r.jsx)(n.strong,{children:"Save"})," button."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You cannot update connections for resources with conflicting active sandboxes."})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},21848:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/Inven-Opers-d17d7093a4124f560c534c9fdd1df0f7.png"},73076:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/Inven-Opers_1-75bbb3f2958f594ad773b237814b028c.png"},74060:(e,n,s)=>{s.d(n,{c:()=>r});const r="data:image/png;base64,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"},76256:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/Inven-Opers_12-9cabe77d1b87e6304b0df2632ebdfee1.png"},72176:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/Inven-Opers_13-1318254867a4b75a05b252dd91966d91.png"},93608:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/Inven-Opers_14-bae8d9730d1aec76f731d1d2fc924eac.png"},48360:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/Inven-Opers_5_New-d1b5e4bc07a5be3d94c5bcf06b72ff83.png"},82480:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/Inven-Opers_9_New-411a5f78e0fad0ec9749e93a4ce68f71.png"},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>o});var r=s(11504);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);