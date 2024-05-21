"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[58384],{21692:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(17624),n=i(4552);const r={sidebar_position:2},l="Attributes",a={id:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes",title:"Attributes",description:"Attributes allow you to add information about resources, Apps, and services. This may include information intended for the user and/or data to be used by the shell, such as the firmware version of the physical device or cloud provider to be used for App deployments. CloudShell components inherit the attributes defined in their family and model. For example, a router resource has the Port attribute defined in that router's model.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells",slug:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Defining the Resource Data Model",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model"},next:{title:"Importing/Exporting Resource Family Updates",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/importingexporting-resource-family-updates"}},o={},d=[{value:"Creating an Attribute",id:"creating-an-attribute",level:2},{value:"Attribute Types and Values",id:"attribute-types-and-values",level:3},{value:"Defining attribute rules",id:"defining-attribute-rules",level:2},{value:"Displaying attributes in BI",id:"displaying-attributes-in-bi",level:3},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsx)(t.p,{children:"Attributes allow you to add information about resources, Apps, and services. This may include information intended for the user and/or data to be used by the shell, such as the firmware version of the physical device or cloud provider to be used for App deployments. CloudShell components inherit the attributes defined in their family and model. For example, a router resource has the Port attribute defined in that router's model."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Components based on 2nd Gen Shells inherit their settings from their Shells. For additional information, see ",(0,s.jsx)(t.a,{href:"../../../../intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"creating-an-attribute",children:"Creating an Attribute"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To create an attribute:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Admin"})," ribbon."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Configuration"})," section, click ",(0,s.jsx)(t.strong,{children:"Attributes"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The attributes list is displayed."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To add a new attribute, in the toolbar, click ",(0,s.jsx)(t.strong,{children:"Add"}),".",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.img,{src:i(42508).c+"",width:"424",height:"439"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Enter the following information:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Attribute"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Name"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Enter the attribute name. The name field is mandatory."}),(0,s.jsx)(t.p,{children:"Attribute name must begin with a letter and can contain alpha numeric characters, spaces and underscores."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Attribute Type"}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Select the attribute type from the drop down list. There are five types of attributes: ",(0,s.jsx)(t.strong,{children:"String"}),", ",(0,s.jsx)(t.strong,{children:"Password"}),", ",(0,s.jsx)(t.strong,{children:"Numeric"}),", ",(0,s.jsx)(t.strong,{children:"Boolean"})," (Yes/No), and ",(0,s.jsx)(t.strong,{children:"Lookup"}),". For additional information, see ",(0,s.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes#attribute-types-and-values",children:"Attribute Types and Values"})," below."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Read-only"}),(0,s.jsx)("td",{children:"Select this check box to prevent this attribute from being edited by the user."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Description"}),(0,s.jsx)("td",{children:"Enter a description of the attribute. Add keywords to help identify the attribute and to use as search criteria."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Properties"}),(0,s.jsx)("td",{children:"Enter the required property values. Specify attribute values and default values. Each attribute has its own set of attributes"})]})]})]}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"attribute-types-and-values",children:"Attribute Types and Values"}),"\n",(0,s.jsx)(t.p,{children:"There are five types of attributes: Boolean, Numeric, Password, String and Lookup."}),"\n",(0,s.jsx)(t.p,{children:"The following table explains how to configure each attribute type:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Attribute Type"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Valid Values"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"String"}),(0,s.jsxs)("td",{children:["In the ",(0,s.jsx)(t.strong,{children:"Default Value"})," field, specify the initial attribute value and clear the ",(0,s.jsx)(t.strong,{children:"Read-only"})," check box."]}),(0,s.jsx)("td",{children:"alphanumeric characters"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Password"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Default Value"})," field, specify the initial attribute value and clear the ",(0,s.jsx)(t.strong,{children:"Read-only"})," check box."]}),(0,s.jsx)(t.p,{children:"Password text is displayed as hidden characters in functions."})]}),(0,s.jsx)("td",{children:"alphanumeric characters"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Numeric"}),(0,s.jsxs)("td",{children:["In the ",(0,s.jsx)(t.strong,{children:"Default Value"})," field, specify the initial attribute value and clear the ",(0,s.jsx)(t.strong,{children:"Read-only"})," check box."]}),(0,s.jsx)("td",{children:"numbers"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Boolean"}),(0,s.jsxs)("td",{children:["In the ",(0,s.jsx)(t.strong,{children:"Default Value"})," field, specify the initial attribute value and clear the ",(0,s.jsx)(t.strong,{children:"Read-only"})," check box."]}),(0,s.jsx)("td",{children:"True/False"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Lookup"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Add lookup value"})," icon to specify a list of values."]}),(0,s.jsxs)(t.p,{children:["To add lookup values, click the ",(0,s.jsx)(t.strong,{children:"Add lookup value"})," button in the ",(0,s.jsx)(t.strong,{children:"Properties"})," area."]}),(0,s.jsxs)(t.p,{children:["It is possible to add only ",(0,s.jsx)(t.strong,{children:"String"})," lookup values."]}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The first added value automatically becomes the default. To specify a different value as the default, click it and select ",(0,s.jsx)(t.strong,{children:"Set Default"}),".\n",(0,s.jsx)(t.img,{src:i(85301).c+"",width:"424",height:"439"})]})})]}),(0,s.jsx)("td",{children:"list of values"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["By default, all attributes are of type ",(0,s.jsx)(t.strong,{children:"String"}),". To change the type, select another type from the ",(0,s.jsx)(t.strong,{children:"Attribute Type"})," dropdown list."]})}),"\n",(0,s.jsx)(t.h2,{id:"defining-attribute-rules",children:"Defining attribute rules"}),"\n",(0,s.jsx)(t.p,{children:"Attribute rules allow administrators to define different behaviors for attributes in the application."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To assign rules to an attribute"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Admin"})," ribbon."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Configuration"})," section, click ",(0,s.jsx)(t.strong,{children:"Attributes"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The attributes list is displayed."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select an attribute from the list and click the toolbar's ",(0,s.jsx)(t.strong,{children:"Rules"})," button."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Set Attribute Rules"})," dialog box is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select the required rules."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(20572).c+"",width:"329",height:"441"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following table details the attribute rules:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Rule"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Configuration"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Displays the attribute in the resource's ",(0,s.jsx)(t.strong,{children:"Configuration"})," tab in ",(0,s.jsx)(t.strong,{children:"Resource Manager Client"}),", for resources associated with the family or model."]}),(0,s.jsx)(t.p,{children:"Configuration attributes are visible only to admins."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Setting"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Enables any user that can view the resource to view and/or edit the attribute's value. In addition, attributes with this rule are displayed as filters in the search window in CloudShell Portal (both in the ",(0,s.jsx)(t.strong,{children:"Add Resources"})," pane and ",(0,s.jsx)(t.strong,{children:"Inventory"})," page)."]}),(0,s.jsxs)(t.p,{children:["Displays the attribute in the Resource Manager Client's ",(0,s.jsx)(t.strong,{children:"Settings"})," tab and in CloudShell Portal. For example, in the Attribute drop down list of the Advanced Search (if the attribute has a value), and in the blueprint/sandbox diagram's ",(0,s.jsx)(t.strong,{children:"Attributes"})," pane for resources associated with the family or model."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Displayed In Diagram"}),(0,s.jsxs)("td",{children:["Displays the attribute on the resource box in the blueprint and sandbox diagrams in CloudShell Portal and in the domain tab's ",(0,s.jsx)(t.strong,{children:"Diagram"})," page in Resource Manager Client. By default only the resource name, address and model are visible in the diagram."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Link Configurations"}),(0,s.jsxs)("td",{children:["(Applies to L1 routes) Displays the attribute in the ",(0,s.jsx)(t.strong,{children:"Inventory"})," tab of the ",(0,s.jsx)(t.strong,{children:"Resource Connections"})," dialog box and in the ",(0,s.jsx)(t.strong,{children:"Connection Properties"})," side pane. This enables users to specify a specific attribute value (such as Speed) that will apply only to this specific route when it is connected in a sandbox. For details, see ",(0,s.jsx)(t.a,{href:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req",children:"Configure Physical Network Connectivity Requirements"}),"."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Variable Capability"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Defines an attribute with a number of potential values which should be taken into account when searching for a possible route."}),(0,s.jsx)(t.p,{children:"The final value is ultimately set by the system."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Constant Capability"}),(0,s.jsx)("td",{children:"Defines an attribute that has a specific value which should be taken into account when searching for a possible route."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Displayed in route creation"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Displays the attribute as an additional column in the ",(0,s.jsx)(t.strong,{children:"Resource Connections"})," dialog box. You can use\xa0",(0,s.jsx)(t.strong,{children:"Displayed in route creation"})," attributes to ensure that all ports in a route have the same protocol type and speed."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(91516).c+"",width:"575",height:"420"})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Available For Abstract Resources"}),(0,s.jsxs)("td",{children:["Only attributes with the ",(0,s.jsx)(t.strong,{children:"Available For Abstract Resource"})," rule are available as possible requirements or additional information when creating or editing abstract resources."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Displayed In Search Filters"}),(0,s.jsx)("td",{children:"Enables CloudShell users to search CloudShell elements by specific attribute values."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Execution Server Selector"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Enables admins to limit the execution of a resource or App to a specific execution server (or group of execution servers) instead of just using the first available execution server. For more information, see ",(0,s.jsx)(t.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]}),(0,s.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the Execution Server Selector attribute is missing from the execution server's details page, make sure the attribute has the ",(0,s.jsx)(t.strong,{children:"Execution Server Selector"})," rule attached to it, in Resource Manager Client's ",(0,s.jsx)(t.strong,{children:"Attributes"})," tab."]}),"\n",(0,s.jsx)(t.li,{children:"Attributes with this rule are displayed in the Inventory dashboard's resource discovery form."}),"\n",(0,s.jsxs)(t.li,{children:["This does not apply to job suites as they provide the option of associating specific execution servers to the execution of the job. For more information, see ",(0,s.jsx)(t.a,{href:"/portal/job-scheduling/manage-automation-suites/add-suites#add-jobs-to-an-automation-suite",children:"Add jobs to an automation suite"}),"."]}),"\n"]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Monitor Modifications"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Enables admins to monitor the value of a specific ",(0,s.jsx)(t.strong,{children:"Numeric"})," attribute/s in real time."]}),(0,s.jsxs)(t.p,{children:["This requires setting the ",(0,s.jsx)(t.code,{children:"MonitorTaggedAttributes"})," configuration key."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Admin Only"}),(0,s.jsx)("td",{children:"Enables only CloudShell admins (domain admins and system admins) to edit the attribute's values in CloudShell Portal. The attribute is still visible to other users, but they may not be able to edit them."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Displayed in Insight"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Enables displaying attributes in CloudShell Insight BI, enable filtering dashboards data according to attribute values."}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes#displaying-attributes-in-bi",children:"Displaying attributes in BI"}),"."]})]})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colspan:"2",style:{backgroundColor:"lightblue",color:"black"},children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Important:"})," The ",(0,s.jsx)(t.strong,{children:"Editable After Run"})," rules below apply to TestShell Studio and TestShell Runner but are associated to attributes in Resource Manager Client. Once configured, you must associate the attributes to test modules in either Studio or Runner, and enable the privileged user (depending on the rule that is used) to change the attribute's value, either from TestShell Studio or Resource Manager Client, after the test is executed."]})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Editable After Run (System Administrators)"}),(0,s.jsx)("td",{children:"Enables system administrators to edit the attribute's value."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Editable After Run (Everyone)"}),(0,s.jsx)("td",{children:"Enables any TestShell user to edit the attribute's value."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"displaying-attributes-in-bi",children:"Displaying attributes in BI"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To display attributes in CloudShell Insight BI, and to enable filtering of dashboards data according to attribute values:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"Set Attribute Rules"})," dialog box, select the rule ",(0,s.jsx)(t.strong,{children:"Displayed in Insight"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:['Attribute named "model" will be automatically assigned with the rule ',(0,s.jsx)(t.strong,{children:"Displayed in Insight"}),"."]})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["After setting the attribute rule in Resource Manager, the attribute will be added to the insight database (Table: ResourceAttributesValuesSummary). To use it in BI dashboards you need to rebuild the elastic cube, as explained in ",(0,s.jsx)(t.a,{href:"/install-configure/cs-insight-bi/install-insight/insight-configuration/build-elasticube",children:"Build the Insight ElastiCube"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"For performance reasons, the Insight database adds new attributes once every 24 hours, so you need to wait 24 hours before completing the next steps"})}),"\n",(0,s.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#associating-an-attribute-to-a-family-or-model",children:"Associating an attribute to a family or model"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#restricting-values-for-an-associated-attribute",children:"Restricting values for an associated attribute"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#configuring-attribute-inheritance-settings",children:"Configuring attribute inheritance settings"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model#configuring-associated-attribute-rules",children:"Configuring associated attribute rules"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},42508:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/Add-Attribute-b0d49737311f5b16bed846469ac335f5.png"},85301:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/AttribTypesandVal-704a7058fbeabf901ddc9ab1513f9c50.png"},91516:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/DefAttribRules_2-07e07fc76e31c49069378134b42036ea.png"},20572:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/St_Atrbt_Rules-1f0e65c231bb2082bf12c5d366a4cf35.png"},4552:(e,t,i)=>{i.d(t,{I:()=>a,M:()=>l});var s=i(11504);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);