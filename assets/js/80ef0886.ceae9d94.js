"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[43864],{34356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=t(17624),i=t(4552);const s={sidebar_position:8},a="Blueprint Templates",r={id:"admin/cloudshell-manage-dashboard/blueprint-templates",title:"Blueprint Templates",description:"About blueprint templates",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/blueprint-templates.md",sourceDirName:"admin/cloudshell-manage-dashboard",slug:"/admin/cloudshell-manage-dashboard/blueprint-templates",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/blueprint-templates.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Maintenance Window",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/maintenance-window"},next:{title:"JavaScript Extensions",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/javascript-extensions"}},o={},d=[{value:"About blueprint templates",id:"about-blueprint-templates",level:2},{value:"CloudShell Sandbox Template",id:"cloudshell-sandbox-template",level:2},{value:"Managing blueprint templates",id:"managing-blueprint-templates",level:2},{value:"Creating a new blueprint template",id:"creating-a-new-blueprint-template",level:3},{value:"Associating a blueprint template with a domain",id:"associating-a-blueprint-template-with-a-domain",level:3},{value:"Editing a blueprint template",id:"editing-a-blueprint-template",level:3},{value:"Saving an existing blueprint as a blueprint template",id:"saving-an-existing-blueprint-as-a-blueprint-template",level:3},{value:"Allowing users to create new empty blueprints",id:"allowing-users-to-create-new-empty-blueprints",level:3},{value:"Filtering the display of the blueprint templates list",id:"filtering-the-display-of-the-blueprint-templates-list",level:3},{value:"Deleting blueprint templates",id:"deleting-blueprint-templates",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"blueprint-templates",children:"Blueprint Templates"}),"\n",(0,l.jsx)(n.h2,{id:"about-blueprint-templates",children:"About blueprint templates"}),"\n",(0,l.jsx)(n.p,{children:"Blueprint templates enable your organization to define a uniform standard for new blueprints. A blueprint template consists of a predefined set of elements (resources, connections, inputs, properties etc.). Users can repeatedly create new blueprints based on existing templates, in a quick and easy way, effortlessly maintaining the organization\u2019s standard."}),"\n",(0,l.jsx)(n.p,{children:"Blueprint templates can be viewed and created by system and domain administrators. Domain administrators can view and create templates for their permitted domains only."}),"\n",(0,l.jsxs)(n.p,{children:["CloudShell includes a default out-of-the-box blueprint template, ",(0,l.jsx)(n.strong,{children:"CloudShell Sandbox Template"}),", on which all new blueprints are based. You can create additional blueprint templates, according to your needs. For more information, see ",(0,l.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates#creating-a-new-blueprint-template",children:"Creating a new blueprint template"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["You can enable users to create empty blueprints that are not based on a template and do not include orchestration scripts. For more information, see ",(0,l.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates#allowing-users-to-create-new-empty-blueprints",children:"Allowing users to create new empty blueprints"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"cloudshell-sandbox-template",children:"CloudShell Sandbox Template"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"CloudShell Sandbox Template"})," is provided out-of-the-box by CloudShell and is configured to run CloudShell's ",(0,l.jsx)(n.strong,{children:"Default Sandbox Setup"}),", ",(0,l.jsx)(n.strong,{children:"Default Sandbox Teardown"}),", ",(0,l.jsx)(n.strong,{children:"Default Sandbox Restore"}),", and ",(0,l.jsx)(n.strong,{children:"Default Sandbox Save"})," scripts during the sandbox lifecycle. ",(0,l.jsx)(n.strong,{children:"Save and Restore"})," is a paid add-on that requires a license."]}),"\n",(0,l.jsx)(n.p,{children:"The CloudShell Sandbox Template performs the following important operations as part of the sandbox lifecycle:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Deploy and tear down Apps and their VMs from the cloud provider"}),"\n",(0,l.jsx)(n.li,{children:"Enable the use of Apps based on public clouds (like AWS EC2 and Azure) by running connectivity procedures that set up the cloud network and subnet for the sandbox"}),"\n",(0,l.jsx)(n.li,{children:"Connect and disconnect virtual network and physical connectivity routes (L1 and L2 ) between resources and/or Apps"}),"\n",(0,l.jsxs)(n.li,{children:["Enable the save and restore functionality, which is part of the ",(0,l.jsx)(n.strong,{children:"Save and Restore"})," paid add-on"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Starting with CloudShell 2022.1, the out-of-the-box ",(0,l.jsx)(n.strong,{children:"CloudShell Sandbox Template"})," includes orchestration scripts that support the deployment of Apps with multiple configuration management scripts/playbooks. If you're upgrading from an older CloudShell version, your existing blueprints will continue using the old orchestration scripts while new blueprints will be created with the new template and therefore will have the new script versions."]})}),"\n",(0,l.jsx)(n.h2,{id:"managing-blueprint-templates",children:"Managing blueprint templates"}),"\n",(0,l.jsx)(n.h3,{id:"creating-a-new-blueprint-template",children:"Creating a new blueprint template"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"To create a blueprint template"}),":"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Open the\xa0",(0,l.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n",(0,l.jsxs)(n.li,{children:["In the page navigation bar, click\xa0",(0,l.jsx)(n.strong,{children:"Blueprint Templates"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["In the toolbar, click the\xa0",(0,l.jsx)(n.strong,{children:"+ Add New"}),"\xa0button.\xa0",(0,l.jsx)(n.br,{}),"\n","The\xa0",(0,l.jsx)(n.strong,{children:"Add New Template"}),"\xa0dialog box is displayed."]}),"\n",(0,l.jsxs)(n.li,{children:["Enter the required information in the new blueprint template.\xa0","\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["To expose the template to all domains, select the ",(0,l.jsx)(n.strong,{children:"Global"})," domain."]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Click\xa0",(0,l.jsx)(n.strong,{children:"Save"}),".\xa0",(0,l.jsx)(n.br,{}),"\n","The new blueprint template is displayed in the\xa0",(0,l.jsx)(n.strong,{children:"Templates"})," list."]}),"\n",(0,l.jsxs)(n.li,{children:["Use the ",(0,l.jsx)(n.strong,{children:"Diagram"})," and ",(0,l.jsx)(n.strong,{children:"Blueprint"})," links to set up the template's canvas and properties, same as with a regular blueprint."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"associating-a-blueprint-template-with-a-domain",children:"Associating a blueprint template with a domain"}),"\n",(0,l.jsx)(n.p,{children:"Users can only see and use blueprint templates that are either global or are associated with their domain."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To associate a blueprint with a domain:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the\xa0",(0,l.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the page navigation bar, click\xa0",(0,l.jsx)(n.strong,{children:"Blueprint Templates"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click the template's name."}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Edit Template"})," dialog box is displayed."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.strong,{children:"Domains"})," drop-down list, select the required domain and click ",(0,l.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"editing-a-blueprint-template",children:"Editing a blueprint template"}),"\n",(0,l.jsx)(n.admonition,{type:"important",children:(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"CloudShell Sandbox Template"})," is provided by default and is updated by CloudShell from time to time. DO NOT edit this template."]})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To edit a blueprint template's general settings:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the\xa0",(0,l.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the page navigation bar, click\xa0",(0,l.jsx)(n.strong,{children:"Blueprint Templates"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the\xa0name of the blueprint template. Alternatively, click the blueprint template's More Actions button ",(0,l.jsx)(n.img,{src:t(55240).c+"",width:"34",height:"33"})," and select ",(0,l.jsx)(n.strong,{children:"Edit"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Edit Template"})," dialog box is displayed."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Edit the settings as appropriate."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To update the elements of the blueprint template:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the\xa0",(0,l.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the page navigation bar, click\xa0",(0,l.jsx)(n.strong,{children:"Blueprint Templates"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the relevant template row, click the\xa0",(0,l.jsx)(n.strong,{children:"Diagram"})," link."]}),"\n",(0,l.jsx)(n.p,{children:"The diagram of the blueprint template is displayed."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Update the blueprint template."}),"\n",(0,l.jsx)(n.p,{children:"The changes you perform are saved automatically."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To update the properties of the blueprint template:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the\xa0",(0,l.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the page navigation bar, click\xa0",(0,l.jsx)(n.strong,{children:"Blueprint Templates"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the relevant template row, click the\xa0",(0,l.jsx)(n.strong,{children:"Properties"})," link."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Properties"})," page of the blueprint template is displayed."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Update the properties and click\xa0",(0,l.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["All non-administrator users can now create blueprints from the templates(s) you created. For step-by-step instructions on how to create a blueprint from a template, see the help topic:\xa0",(0,l.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/create-blueprint#creating-a-blueprint-from-a-template",children:"Creating a blueprint from a template"}),"."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"The owner of the blueprint template is the administrator who created the template."})}),"\n",(0,l.jsx)(n.h3,{id:"saving-an-existing-blueprint-as-a-blueprint-template",children:"Saving an existing blueprint as a blueprint template"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"To create a template from an existing blueprint"}),":"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.strong,{children:"Blueprints Catalog"}),", open the blueprint."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the\xa0",(0,l.jsx)(n.strong,{children:"Blueprint"}),"\xa0menu."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select ",(0,l.jsx)(n.strong,{children:"Save as a Template"}),".\xa0"]}),"\n",(0,l.jsx)(n.p,{children:"A new blueprint template is created and the diagram of the template opens for editing."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Rename the template."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Update the blueprint template\u2019s components as required. Update the blueprint template\u2019s components as required."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Changes you perform on the diagram of the template are saved automatically.\xa0",(0,l.jsx)(n.br,{}),"\n","For administrators, the blueprint template is listed in the\xa0",(0,l.jsx)(n.strong,{children:"Manage"})," dashboard in the\xa0",(0,l.jsx)(n.strong,{children:"Blueprint Templates"})," page.\xa0",(0,l.jsx)(n.br,{}),"\n","For users, the blueprint template is now available for creating a new blueprint based on the new template."]}),"\n",(0,l.jsxs)(n.p,{children:["All non-administrator users can now create blueprints from the templates(s) you created. For step-by-step instructions on how to create a blueprint from a template, see the help topic:\xa0",(0,l.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/create-blueprint#creating-a-blueprint-from-a-template",children:"Creating a blueprint from a template"}),"."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"The owner of the blueprint template is the administrator who created the template."})}),"\n",(0,l.jsx)(n.h3,{id:"allowing-users-to-create-new-empty-blueprints",children:"Allowing users to create new empty blueprints"}),"\n",(0,l.jsxs)(n.p,{children:["By default, when creating a new blueprint, it will be based on the CloudShell Sandbox Template. If multiple templates were defined, users must select a template on which to base the blueprint. However, the Admin can enable users to create blueprints that are not based on a template. For more information, see ",(0,l.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#enabling-the-creation-of-empty-blueprints",children:"Enabling the creation of empty blueprints"})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"Changes to the configuration file affect the entire system."})}),"\n",(0,l.jsx)(n.h3,{id:"filtering-the-display-of-the-blueprint-templates-list",children:"Filtering the display of the blueprint templates list"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To filter the display of the blueprint templates list by domain:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["In the toolbar, click the ",(0,l.jsx)(n.strong,{children:"Domain"})," drop-down list and select the required domain."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"deleting-blueprint-templates",children:"Deleting blueprint templates"}),"\n",(0,l.jsx)(n.p,{children:"This section explains how to delete blueprint templates from CloudShell."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["It is not possible to delete the ",(0,l.jsx)(n.strong,{children:"CloudShell Sandbox Template"})," that comes out of the box with CloudShell. If you no longer need it, edit the template and disassociate it from any domains."]})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To delete blueprint templates:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Open the\xa0",(0,l.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n",(0,l.jsxs)(n.li,{children:["In the page navigation bar, click\xa0",(0,l.jsx)(n.strong,{children:"Blueprint Templates"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Select the check box next to the template(s) to delete."}),"\n",(0,l.jsxs)(n.li,{children:["In the toolbar, click\xa0",(0,l.jsx)(n.img,{src:t(77816).c+"",width:"29",height:"26"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},55240:(e,n,t)=>{t.d(n,{c:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAIAAAAzse47AAABMUlEQVR42u3WzUrDQBAH8J2dTeLHURFafQRvggelFPtQIujRmxcv6guI4MWjT6BCT95EbQSNpBSREhUxGzs7Jq0PEAIDIhn2/mNm/gMLvWHqkhdnP5VYOecgfIo1WTnjl4miCBEBQJaJ41jUmBT0+31po2b+HcP5Y1WkE1TJjFZhvp3KCBAYtUJQugRVhTl7MLtd30e117JrDUIh5uTObF0GU8iHHdteJE/LMOePZv/aC1DtrGYrC2SEGMfFg/H+oVwKqjBhorsDnTex3qTGLEvt5vjWbF4EM0YdddL2EvlCQzu9N9tXgY98sGFbTbHdPH/AzbAY2vKcm58WG1pK6msEeY6NZm98oSJMfZ5/9zwrVM3UTDR4NS4TNZgZwiTz03ckK/STzg0igt7bSLSVSf0Al5jMxPZ7SvwAAAAASUVORK5CYII="},77816:(e,n,t)=>{t.d(n,{c:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAIAAADE9MDgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABiSURBVEhLY/j6/Tst0Ki5EDRw5voGxaIhNAVYEVHm4uHiQljMhbuLSISmHYLoaC5VEE5z4W6Bk7VNnchcCAMXGjUXgkbNhaCBMxcrotRc/AhNCzKiu7kUolFzIYg25n7/DgCNtIpEnIcXiAAAAABJRU5ErkJggg=="},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var l=t(11504);const i={},s=l.createContext(i);function a(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);