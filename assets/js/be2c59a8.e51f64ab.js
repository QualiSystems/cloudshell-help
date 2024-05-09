"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[54628],{75352:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var n=l(17624),i=l(4552);const s={sidebar_position:11},o="Deploying to Production",r={id:"devguide/developing-shells/deploy-to-prod",title:"Deploying to Production",description:"In this section we\u2019ll discuss the procedure of packaging and readying a Shell for deployment in a production environment. This diagram, that we\u2019ve visited before, illustrates the development flow for Shells:",source:"@site/docs/devguide/developing-shells/deploy-to-prod.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/deploy-to-prod",permalink:"/cloudshell-help/next/devguide/developing-shells/deploy-to-prod",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/deploy-to-prod.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Discovering Inventory using SNMP",permalink:"/cloudshell-help/next/devguide/developing-shells/discover-inv-using-snmp"},next:{title:"Customizing Shells",permalink:"/cloudshell-help/next/devguide/developing-shells/customize-shells"}},d={},a=[{value:"Creating a distributable package",id:"creating-a-distributable-package",level:2},{value:"Adding custom attributes to the Shell",id:"adding-custom-attributes-to-the-shell",level:2},{value:"Using CloudShell Portal",id:"using-cloudshell-portal",level:3},{value:"Using API",id:"using-api",level:3},{value:"Enabling Shell commands to run in offline mode",id:"enabling-shell-commands-to-run-in-offline-mode",level:2},{value:"Deploying to the production CloudShell Server",id:"deploying-to-the-production-cloudshell-server",level:2},{value:"Share status",id:"share-status",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deploying-to-production",children:"Deploying to Production"}),"\n",(0,n.jsx)(t.p,{children:"In this section we\u2019ll discuss the procedure of packaging and readying a Shell for deployment in a production environment. This diagram, that we\u2019ve visited before, illustrates the development flow for Shells:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:l(28404).c+"",width:"624",height:"482"})}),"\n",(0,n.jsx)(t.p,{children:"We\u2019ll be concentrating on the last two phases in the above diagram - creating a distributable package and deploying it to the production server."}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-distributable-package",children:"Creating a distributable package"}),"\n",(0,n.jsx)(t.p,{children:"To create a distributable package which can be imported to CloudShell, run the following from Command Line, make sure you are in the root directory of the Shell project:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"shellfoundry pack\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will create two artifacts in the \u2018dist\u2019 sub-folder of the Shell project:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A zip file archive called\xa0",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"<shellname>.zip"})}),"\xa0- This is the Shell distributable package"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A folder named\xa0",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"offline_requirements"})}),"\xa0- The Python packages required by the Shell. This folder should be used with any offline execution servers, i.e. execution servers where pip will not be able to reach the internet to download the packages specified in ",(0,n.jsx)(t.code,{children:"requirements.txt"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"adding-custom-attributes-to-the-shell",children:"Adding custom attributes to the Shell"}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will explain how to add an existing attribute to a specific shell. You can do this using CloudShell Portal and the API."}),"\n",(0,n.jsx)(t.p,{children:"CloudShell distinguishes between two types of attributes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Attributes related to your CloudShell deployment, like Execution Server Selector"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Attributes related to the device or shell, like Firmware Version or Port Speed"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In this section, we will explain how to add deployment-related attributes (attributes that already exist in CloudShell). When upgrading the Shell, these custom attributes and their association with the Shell will not be overwritten. For details about adding shell or device-specific attributes, see\xa0",(0,n.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/customize-shells#customizing-a-shells-attributes",children:"Customizing a shell\u2019s attributes"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Note that deployment-related attributes are added to the shell by the CloudShell system administrator while attributes related to a device are added to the shell by the shell\u2019s developer."}),"\n",(0,n.jsx)(t.h3,{id:"using-cloudshell-portal",children:"Using CloudShell Portal"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the Shell\u2019s menu button and select\xa0",(0,n.jsx)(t.strong,{children:"Details/Edit"}),". The Details/Edit Resource dialog box is displayed."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the\xa0",(0,n.jsx)(t.strong,{children:"Add Custom Attribute"}),"\xa0link at the bottom. A New Attribute is added to the list of attributes."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the\xa0",(0,n.jsx)(t.strong,{children:"Attribute Name"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the\xa0",(0,n.jsx)(t.strong,{children:"Model Name"}),"\xa0that will contain the attribute."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Optionally specify a\xa0",(0,n.jsx)(t.strong,{children:"Default Value"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["(For Lookup attributes) Use the\xa0",(0,n.jsx)(t.strong,{children:"Restricted Values"}),"\xa0field to optionally determine the attribute\u2019s possible values in this resource."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"using-api",children:"Using API"}),"\n",(0,n.jsxs)(t.p,{children:["Using the API, you can add attributes to your Shell and customize their defaults for this Shell. This is done using the\xa0",(0,n.jsx)(t.code,{children:"SetCustomShellAttribute"}),"\xa0API method, available in the TestShell XML RPC and CloudShell Automation API."]}),"\n",(0,n.jsx)(t.p,{children:"The required inputs are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"modelName"})," = The Shell\u2019s model [the Shell name; case-sensitive]"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"attributeName"})," = The attribute\u2019s name [case-sensitive]"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"defaultValue"})," = The default value"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"restrictedValues"})," = [optional] Comma-separated list of possible values"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In this example, we are adding an Execution Server Selector attribute named \u201cDomain_ESS\u201d to a Shell named \u201cExampleShell\u201d with \u201cTest NY\u201d as the default value:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:l(59452).c+"",width:"624",height:"304"})}),"\n",(0,n.jsx)(t.h2,{id:"enabling-shell-commands-to-run-in-offline-mode",children:"Enabling Shell commands to run in offline mode"}),"\n",(0,n.jsxs)(t.p,{children:["Before deploying to the production environment, it\u2019s important to make sure that Quali Server and the Execution Servers can access the Python packages and files required to run the Shell commands. If these machines have an internet connection, CloudShell will automatically download the required dependencies from the public PyPi repository. However, if your CloudShell deployment is configured to run offline or your automation needs to use dependencies that are not in the public PyPi repository, you will have to manually add these dependencies to the local PyPi repository on the Quali Server machine. To do so, if you have access to the local PyPi repository, simply copy the contents of the\xa0",(0,n.jsx)(t.code,{children:"offline_requirements"}),"\xa0folder to your local PyPi Server repository. If you don\u2019t have access to the repository, you can remotely load the packages using command-line, as explained in this CloudShell Help\xa0",(0,n.jsx)(t.a,{href:"http://help.quali.com/Online%20Help/8.3/Portal/Content/Admn/Pyth-Cnfg-Mds.htm#Loading",children:"article"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"deploying-to-the-production-cloudshell-server",children:"Deploying to the production CloudShell Server"}),"\n",(0,n.jsx)(t.admonition,{type:"danger-one-line",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," A shell update is not reversible(in other words, you cannot downgrade to an earlier shell version). Therefore, update the template version in the shell's ",(0,n.jsx)(t.code,{children:"shell-definition.yaml"})," ONLY when something in the data model changes (new attributes added to ",(0,n.jsx)(t.code,{children:"shell-definition.yaml"}),'). Any changes in just the driver or underlying packages you can keep the template version number the same and then freely "roll back" to a previous version if the shell presents unexpected behavior.']})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To deploy the Shell to the production CloudShell server:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Log in as an administrator."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Import the shell into CloudShell. You can use the\xa0",(0,n.jsx)(t.code,{children:"shellfoundry install"}),"\xa0command-line, or import the package manually."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To manually import a 2nd Gen shell, in the\xa0",(0,n.jsx)(t.strong,{children:"Manage"}),"\xa0dashboard, open the\xa0",(0,n.jsx)(t.strong,{children:"Shells"}),"\xa0page and click\xa0",(0,n.jsx)(t.strong,{children:"Import"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["For 1st Gen shells, open the\xa0",(0,n.jsx)(t.strong,{children:"Admin"}),"\xa0menu located at the top of the page, and select\xa0",(0,n.jsx)(t.strong,{children:"Import Package"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the Shell zip file created earlier and click\xa0",(0,n.jsx)(t.strong,{children:"Open"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Simple String Result",src:l(94028).c+"",width:"620",height:"296"})}),"\n",(0,n.jsx)(t.p,{children:"Your Shell should now be ready for use in the production environment."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"share-status",children:"Share status"}),"\n",(0,n.jsxs)(t.p,{children:["Each of the shell\u2019s resource levels is defined in the shell standard as a resource family and has a share status. The share status determines whether a specific resource or sub-resource of a particular family can be used in different sandboxes at the same time. A family\u2019s share status is determined by the Locked By Default rule, which when set to True defines the family as unshared. More about family properties can be found in this CloudShell Help\xa0",(0,n.jsx)(t.a,{href:"http://help.quali.com/Online%20Help/8.3/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm#Creating?Highlight=locked%20by%20default",children:"article"}),". To find out the share status of a specific family in your shell, have a look at the shell\u2019s standard. For example, the Shell Resource Standard\u2019s\xa0",(0,n.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/shell_resource_standard.md#data-model-structure",children:"Data Model Structure"}),"\xa0section indicates its families\u2019 settings."]})]})}function c(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94028:(e,t,l)=>{l.d(t,{c:()=>n});const n=l.p+"assets/images/Deploying-to-Production_1_620x296-a549c2d6f5344852cb6e9b404a8d871c.png"},59452:(e,t,l)=>{l.d(t,{c:()=>n});const n=l.p+"assets/images/Deploying-to-Production_624x304-9c7ec20ea5128841ad323d5317fddb0d.png"},28404:(e,t,l)=>{l.d(t,{c:()=>n});const n=l.p+"assets/images/Shells-Getting-Started_5_624x482-f495b8292b4989152f6d1e0a3b96a71e.png"},4552:(e,t,l)=>{l.d(t,{I:()=>r,M:()=>o});var n=l(11504);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);