"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[93600],{30560:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=s(17624),r=s(4552);const i={sidebar_position:9},o="Auto-discovery for Inventory Shells",l={id:"devguide/developing-shells/auto-discovery-for-inventory-shells",title:"Auto-discovery for Inventory Shells",description:"Automated discovery makes it easy to import physical inventory devices into CloudShell by using automation to read their internal structure and attributes.",source:"@site/docs/devguide/developing-shells/auto-discovery-for-inventory-shells.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/auto-discovery-for-inventory-shells",permalink:"/cloudshell-help/next/devguide/developing-shells/auto-discovery-for-inventory-shells",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/auto-discovery-for-inventory-shells.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Driver Deep Dive",permalink:"/cloudshell-help/next/devguide/developing-shells/driver-deep-dive"},next:{title:"Debugging Shell Driver Commands",permalink:"/cloudshell-help/next/devguide/developing-shells/debug-shell-driver-commands"}},d={},a=[{value:"Inventory Shells in CloudShell",id:"inventory-shells-in-cloudshell",level:2},{value:"The Auto-discovery process",id:"the-auto-discovery-process",level:2},{value:"Update Auto-discovery in the shell-definition.yaml file",id:"update-auto-discovery-in-the-shell-definitionyaml-file",level:3},{value:"Add mandatory attributes to the Auto-discovery process",id:"add-mandatory-attributes-to-the-auto-discovery-process",level:3},{value:"Implement the get_inventory function",id:"implement-the-get_inventory-function",level:3},{value:"Add validations",id:"add-validations",level:3},{value:"Create a resource with the template",id:"create-a-resource-with-the-template",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"auto-discovery-for-inventory-shells",children:"Auto-discovery for Inventory Shells"}),"\n",(0,n.jsx)(t.p,{children:"Automated discovery makes it easy to import physical inventory devices into CloudShell by using automation to read their internal structure and attributes."}),"\n",(0,n.jsx)(t.h2,{id:"inventory-shells-in-cloudshell",children:"Inventory Shells in CloudShell"}),"\n",(0,n.jsxs)(t.p,{children:["Shells for physical devices are defined with a certain internal structure which can be found in their CloudShell Standard. For example, a basic physical resource can have Resource Port sub-resources, whereas a Switch can have blades and port channels according to the\xa0",(0,n.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/networking_standard.md",children:"Networking Shell Standard"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"the-auto-discovery-process",children:"The Auto-discovery process"}),"\n",(0,n.jsx)(t.p,{children:"Auto-discovery is triggered when creating resources for Shells that support it. When the administrator creates a resource in CloudShell Portal, CloudShell prompts the administrator to fill out mandatory attributes and then launches the Auto-discovery process, querying the physical device and describing its internal structure and attributes to CloudShell."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To implement the Auto-discovery process in a Shell:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Optionally update Auto-discovery attributes"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Implement the ",(0,n.jsx)(t.em,{children:"get_inventory"})," function"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add validations"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To test your code, create a resource with the template"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"update-auto-discovery-in-the-shell-definitionyaml-file",children:"Update Auto-discovery in the shell-definition.yaml file"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"shell-definition.yaml"})," file includes a basic Auto-discovery template."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"  capabilities:\n    auto_discovery_capability:\n      type: cloudshell.capabilities.AutoDiscovery\n      properties:\n        enable_auto_discovery:\n          type: boolean\n          default: true\n        auto_discovery_description:\n          type: string\n          default: <my custom discovery description>\n        inventory_description:\n          type: string\n          default: <my custom inventory discovery description>\n"})}),"\n",(0,n.jsx)(t.p,{children:"The Auto-discovery process is described as a TOSCA capability with the following properties. Feel free to optionally modify them."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"enable_auto_discovery"}),"\xa0- This property defines whether the Auto-discovery process is automatically triggered when creating a new resource."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"auto_discovery_description"}),"\xa0- This description is presented to the user before the Auto-discovery process begins."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"inventory_description"}),"\xa0- This is the description of the Shell template. It is presented to the user when creating a new resource."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"add-mandatory-attributes-to-the-auto-discovery-process",children:"Add mandatory attributes to the Auto-discovery process"}),"\n",(0,n.jsx)(t.p,{children:"In many Auto-discovery implementations, we need to ask the administrator for information before communicating with the physical device, for example, to provide the administrator\u2019s credentials. If we add custom attributes to the Auto-discovery definition of the Shell, CloudShell will prompt the administrator to fill out these attributes before running the discovery. This ensures that the information will be available for the discovery process to use."}),"\n",(0,n.jsxs)(t.p,{children:["In the context of this example, we\u2019ll add 3 properties to the Auto-discovery process:\xa0",(0,n.jsx)(t.strong,{children:"User"}),",\xa0",(0,n.jsx)(t.strong,{children:"Password"}),"\xa0and\xa0",(0,n.jsx)(t.strong,{children:"my_custom_attribute"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.strong,{children:"User"}),"\xa0and\xa0",(0,n.jsx)(t.strong,{children:"Password"}),"\xa0attributes are defined in the standard, so we only need to add them to the\xa0",(0,n.jsx)(t.em,{children:"auto_discovery_capability"}),"\xa0section. However,\xa0",(0,n.jsx)(t.strong,{children:"my_custom_attribute"}),"\xa0is a specific attribute that we want to add to this Shell, so we need to add the attribute to both the properties section and the\xa0",(0,n.jsx)(t.em,{children:"auto_discovery_capability"}),"\xa0section."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"vendor.ImplementingDiscovery:\n  derived_from: cloudshell.nodes.Switch\n  properties:\n    my_custom_attribute:\n      type: string          # optional values: string, integer, float, boolean, cloudshell.datatypes.Password\n  capabilities:\n    auto_discovery_capability:\n      type: cloudshell.capabilities.AutoDiscovery\n      properties:\n        enable_auto_discovery:\n          type: boolean\n          default: true\n        auto_discovery_description:\n          type: string\n          default: Describe the auto discovery\n        inventory_description:\n          type: string\n          default: Describe the resource shell template\n        User:\n          type: string\n        Password:\n          type: cloudshell.datatypes.Password\n        my_custom_attribute:\n          type: string\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(34368).c+"",width:"624",height:"471"})}),"\n",(0,n.jsx)(t.h3,{id:"implement-the-get_inventory-function",children:"Implement the get_inventory function"}),"\n",(0,n.jsxs)(t.p,{children:["The goal of the\xa0",(0,n.jsx)(t.em,{children:"get_inventory"}),"\xa0function in the Shell\u2019s driver is to query the device and return a list of sub-resources and attribute values back to CloudShell. After querying the device, the function should return a specific result to CloudShell to allow creating the right resources. This process is called\xa0",(0,n.jsx)(t.em,{children:"discovery"}),"\xa0in CloudShell Portal, and\xa0",(0,n.jsx)(t.em,{children:"autoload"}),"\xa0in Resource Manager Client."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To implement the get_inventory function:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run the\xa0",(0,n.jsx)(t.code,{children:"shellfoundry generate"}),"\xa0command to generate the Shell\u2019s data model. For more information about the Shell\u2019s data model, see ",(0,n.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/managing-the-shell-data-mode",children:"Managing the Shell\u2019s Data Model"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Uncomment the following import in the shell's ",(0,n.jsx)(t.code,{children:"driver.py"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"from data_model import *\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This is an example of a ",(0,n.jsx)(t.em,{children:"get_inventory"}),"\xa0implementation:"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/2nd%20gen%20shells%20-%20implementing_discovery/src/driver.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,n.jsx)(t.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,n.jsxs)(t.p,{children:["2nd%20gen%20shells%20-%20implementing_discovery/src/driver.py ",(0,n.jsx)(t.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/2nd%20gen%20shells%20-%20implementing_discovery/src/driver.py",children:"view"})," ",(0,n.jsx)(t.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/2nd%20gen%20shells%20-%20implementing_discovery/src/driver.py",children:"raw"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"def get_inventory(self, context):\n    \"\"\"\n    Discovers the resource structure and attributes.\n    :param AutoLoadCommandContext context: the context the command runs on\n    :return Attribute and sub-resource information for the Shell resource you can return an AutoLoadDetails object\n    :rtype: AutoLoadDetails\n    \"\"\"\n\n    resource = ImplementingDiscovery.create_from_context(context)\n    resource.vendor = 'specify the shell vendor'\n    resource.model = 'specify the shell model'\n\n    chassis1 = GenericChassis('Chassis 1')\n    chassis1.model = 'WS-X4232-GB-RJ'\n    chassis1.serial_number = 'JAE053002JD'\n    resource.add_sub_resource('1', chassis1)\n\n    module1 = GenericModule('Module 1')\n    module1.model = 'WS-X5561-GB-AB'\n    module1.serial_number = 'TGA053972JD'\n    chassis1.add_sub_resource('1', module1)\n\n    port1 = GenericPort('Port 1')\n    port1.mac_address = 'fe80::e10c:f055:f7f1:bb7t16'\n    port1.ipv4_address = '192.168.10.7'\n    module1.add_sub_resource('1', port1)\n\n    return resource.create_autoload_details()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This\xa0",(0,n.jsx)(t.em,{children:"get_inventory"}),"\xa0code creates an instance of the root resource by calling the\xa0",(0,n.jsx)(t.em,{children:"create_from_context"}),"\xa0function. In this particular example, we\u2019re autoloading the root\u2019s sub-resources and their attributes, and populating the Vendor and Model attribute values on the root resource."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that\xa0",(0,n.jsx)(t.em,{children:"get_inventory"}),"\xa0only creates the sub-resources and configures their attributes as the root resource already exists at this stage. Autoload can also update the attribute values on the root level."]}),"\n",(0,n.jsxs)(t.p,{children:["This sample creates\xa0",(0,n.jsx)(t.em,{children:"GenericChassis"}),",\xa0",(0,n.jsx)(t.em,{children:"GenericModule"}),"\xa0and\xa0",(0,n.jsx)(t.em,{children:"GenericPort"}),"\xa0resource models and uses the\xa0",(0,n.jsx)(t.em,{children:"add_sub_resource"}),"\xa0function to build the resource hierarchy."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To create the port:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a new\xa0",(0,n.jsx)(t.em,{children:"GenericPort"}),"\xa0instance."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Provide a unique name for the port."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add it as a sub resource of a specific module: a. Call the\xa0",(0,n.jsx)(t.em,{children:"add_sub_resource"}),"\xa0function on the module. b. Provide both the\xa0",(0,n.jsx)(t.em,{children:"relative_address"}),"\xa0of the port and the instance that represents the port."]}),"\n",(0,n.jsxs)(t.p,{children:["To return the information back to CloudShell, we need to use a specific data structure that represents the result of the discovery. The data structure is created automatically by calling the\xa0",(0,n.jsx)(t.em,{children:"create_autoload_details()"}),"\xa0function."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"add-validations",children:"Add validations"}),"\n",(0,n.jsx)(t.p,{children:"A common enhancement for discovery functions that greatly improves the usability of the Auto-discovery process is to validate the information provided by the administrator. For example, trying to log in with the address and credentials and reporting back any error, or checking the text for illegal characters."}),"\n",(0,n.jsxs)(t.p,{children:["Any exceptions raised in the\xa0",(0,n.jsx)(t.em,{children:"get_inventory"}),"\xa0flow will display an error message to help the administrator correct their input and try again"]}),"\n",(0,n.jsx)(t.h3,{id:"create-a-resource-with-the-template",children:"Create a resource with the template"}),"\n",(0,n.jsx)(t.p,{children:"To test the code, let\u2019s create a resource based on the Shell template."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To create a resource with the template:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Import the Shell template using ShellFoundry."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Open CloudShell Portal\u2019s\xa0",(0,n.jsx)(t.strong,{children:"Inventory"}),"\xa0dashboard and click the\xa0",(0,n.jsx)(t.strong,{children:"Add New"}),"\xa0button. A dialog box is displayed, prompting you to select the template and enter a resource name."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the\xa0",(0,n.jsx)(t.strong,{children:"ImplementingDiscovery"}),"\xa0template, enter a name for the resource, and click\xa0",(0,n.jsx)(t.strong,{children:"Create"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.strong,{children:"Resource"}),"\xa0dialog box is displayed."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(26436).c+"",width:"624",height:"428"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Enter the\xa0",(0,n.jsx)(t.strong,{children:"Username"}),"\xa0and\xa0",(0,n.jsx)(t.strong,{children:"Password"}),"\xa0and click\xa0",(0,n.jsx)(t.strong,{children:"Start discovery"}),". The\xa0",(0,n.jsx)(t.em,{children:"get_inventory"}),"\xa0function creates the entire device structure and a system message pops up to indicate the discovery process completed successfully."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To validate, enter the name of the new resource in the\xa0",(0,n.jsx)(t.strong,{children:"Inventory"}),"\xa0search field. You should see a list of sub-resources with the discovered attributes:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(19300).c+"",width:"624",height:"195"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},26436:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/Auto-discovery-for-Inventory_1_624x428-74d6653be3c8682496beac44e9dc76da.png"},19300:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/Auto-discovery-for-Inventory_2_624x195-0d7ecc7f1907e4bdc16fcb0cc01a2bd0.png"},34368:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/Auto-discovery-for-Inventory_624x471-bd04dda8b5a598f16ae8970819f704b7.png"},4552:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>o});var n=s(11504);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);