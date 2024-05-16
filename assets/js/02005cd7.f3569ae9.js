"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57664],{74872:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var s=l(17624),i=l(4552);const t={sidebar_position:4},d="Managing Shells",r={id:"admin/cloudshell-manage-dashboard/managing-shells",title:"Managing Shells",description:"The procedures in this article apply to 2nd Gen Shells, unless stated otherwise. For information about 1st Gen Shells, contact CloudShell Support.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-shells.md",sourceDirName:"admin/cloudshell-manage-dashboard",slug:"/admin/cloudshell-manage-dashboard/managing-shells",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-shells",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-shells.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Managing Categories",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-categories"},next:{title:"Licensing",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/licensing"}},o={},h=[{value:"Viewing Shells",id:"viewing-shells",level:2},{value:"Importing Shells",id:"importing-shells",level:2},{value:"Adding custom attributes to a Shell",id:"adding-custom-attributes-to-a-shell",level:2},{value:"Updating Shells",id:"updating-shells",level:2},{value:"Downloading Shells from CloudShell",id:"downloading-shells-from-cloudshell",level:2},{value:"Deleting Shells",id:"deleting-shells",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"managing-shells",children:"Managing Shells"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The procedures in this article apply to 2nd Gen Shells, unless stated otherwise. For information about 1st Gen Shells, contact CloudShell Support."})}),"\n",(0,s.jsxs)(n.p,{children:["This article explains how to add, update and remove Shells from CloudShell. Note that Shell management operations are performed by system administrators in the ",(0,s.jsx)(n.strong,{children:"Global"})," domain. For additional information, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/intro/features/shells",children:"Shells Overview"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"viewing-shells",children:"Viewing Shells"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Shells"})," page is only displayed for system administrators in the ",(0,s.jsx)(n.strong,{children:"Global"})," domain."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To view Shells:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["As system administrator, access the ",(0,s.jsx)(n.strong,{children:"Global"})," domain."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Manage"})," dashboard, in the left sidebar, click ",(0,s.jsx)(n.strong,{children:"Shells"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Shells"})," page is displayed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can use the toolbar to only display official Quali shells, sort the Shells according to ",(0,s.jsx)(n.strong,{children:"Name"})," or date of modification, and filter them according to Shell ",(0,s.jsx)(n.strong,{children:"Type"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"importing-shells",children:"Importing Shells"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["A shell update is not reversible(in other words, you cannot downgrade to an earlier shell version). Therefore, update the template version in the shell's ",(0,s.jsx)(n.code,{children:"shell-definition.yaml"})," ONLY when something in the data model changes (new attributes added to ",(0,s.jsx)(n.code,{children:"shell-definition.yaml"}),'). Any changes in just the driver or underlying packages you can keep the template version number the same and then freely "roll back" to a previous version if the shell presents unexpected behavior.']})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To import a new Shell into CloudShell:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the ",(0,s.jsx)(n.strong,{children:"Add Shells"})," drop-down list, select the appropriate option:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get From Community"})," to download a compatible Shell from ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"})," page. After you download the Shell, Click ",(0,s.jsx)(n.strong,{children:"Add Shells>Add From File"})," to import the Shell into CloudShell."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add From File"})," if you already have the Shell ZIP file and want to import it into CloudShell","\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To import a 1st Gen Shell, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/import-package",children:"Import a Blueprint Package into CloudShell"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The Shell is displayed in the ",(0,s.jsx)(n.strong,{children:"Shells"})," page and can be used by domain administrators in all CloudShell domains to create new inventory resources, as explained in ",(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/inventory/managing-resources/adding-inventory-resources/",children:"Adding Inventory Resources"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you are planning on running CloudShell in offline mode, and the Shell has dependencies, make sure to update the dependencies repository - see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts",children:"Updating Python Dependencies for Shells, Drivers and Scripts"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s)."}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"adding-custom-attributes-to-a-shell",children:"Adding custom attributes to a Shell"}),"\n",(0,s.jsx)(n.p,{children:"This section explains how to add an attribute from the pool of global attributes to the Shell and set the attribute's defaults. Note that this capability applies to the Shell's root model and sub-models."}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This capability applies to attributes that already exist in CloudShell. If the attribute you want to add is missing, make sure to add it in Resource Manager Client's ",(0,s.jsx)(n.strong,{children:"Attributes"})," tab."]}),"\n",(0,s.jsx)(n.li,{children:'Custom attributes that are added to already-installed service shells are defined as "user input". As such, when adding the service into the blueprint/sandbox diagram, these attributes are displayed in the service\'s details form.\xa0In addition, when upgrading CloudShell to 9.1 or a later version, CloudShell will set all custom service attributes as user input.'}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To add a custom attribute to a Shell:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the Shell's row or menu button ",(0,s.jsx)(n.img,{src:l(62672).c+"",width:"28",height:"27"})," and select ",(0,s.jsx)(n.strong,{children:"Details/Edit"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Details/Edit Resource"})," dialog box is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Add Custom Attribute"})," link at the bottom."]}),"\n",(0,s.jsx)(n.p,{children:"A New Attribute is added to the list of attributes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Attribute Name"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Model Name"})," that will contain the attribute."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optionally specify a ",(0,s.jsx)(n.strong,{children:"Default Value"})," (Mandatory for Lookup and Numeric attributes)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["(For Lookup attributes) Use the ",(0,s.jsx)(n.strong,{children:"Restricted Values"})," field to optionally determine the attribute's possible values in this resource."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"To link the attribute\u2019s possible values to the global attribute, remove all restricted values. This way, any updates made to the global attribute in Resource Manager Client are automatically applied to the shell\u2019s attribute."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"updating-shells",children:"Updating Shells"}),"\n",(0,s.jsx)(n.p,{children:"Shell update overrides that existing Shell's settings with the new Shell."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["A shell update is not reversible(in other words, you cannot downgrade to an earlier shell version). Therefore, update the template version in the shell's ",(0,s.jsx)(n.code,{children:"shell-definition.yaml"})," ONLY when something in the data model changes (new attributes added to ",(0,s.jsx)(n.code,{children:"shell-definition.yaml"}),'). Any changes in just the driver or underlying packages you can keep the template version number the same and then freely "roll back" to a previous version if the shell presents unexpected behavior.']})}),"\n",(0,s.jsx)(n.admonition,{title:"Points to consider",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can only update Shells with a compatible version."}),"\n",(0,s.jsx)(n.li,{children:"Updating an uncertified Shell may cause backward compatibility issues."}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To update a Shell:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the Shell's menu button ",(0,s.jsx)(n.img,{src:l(91220).c+"",width:"27",height:"26"})," and select ",(0,s.jsx)(n.strong,{children:"Update"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A dialog box is displayed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the dialog box, navigate to the updated Shell's ZIP file, select it and click ",(0,s.jsx)(n.strong,{children:"Open"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you are planning on running CloudShell in offline mode, and the Shell has dependencies, make sure to update the dependencies repository - see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts",children:"Updating Python Dependencies for Shells, Drivers and Scripts"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"downloading-shells-from-cloudshell",children:"Downloading Shells from CloudShell"}),"\n",(0,s.jsxs)(n.p,{children:["CloudShell enables you to download Shells from the Shells page. This can be useful if you or a developer in your organization wants to make changes or updates to a specific Shell, as explained in the CloudShell Dev Guide's ",(0,s.jsx)(n.a,{href:"/cloudshell-help/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),". You can then update the existing Shell in CloudShell with the updated one."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To download a Shell from CloudShell:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the Shell's menu button ",(0,s.jsx)(n.img,{src:l(49876).c+"",width:"26",height:"24"})," and select ",(0,s.jsx)(n.strong,{children:"Download"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'Depending on your web browser, a dialog box prompting you to save the Shell\'s ZIP file or a "downloading" indication is displayed.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deleting-shells",children:"Deleting Shells"}),"\n",(0,s.jsx)(n.p,{children:"Shells that have inventory resources cannot be deleted."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To delete a 1st Gen Shell, you must use the ",(0,s.jsx)(n.code,{children:"DeleteResourceTemplate"})," method in the ",(0,s.jsx)(n.a,{href:"/cloudshell-help/api-guide/shell-dev-blueprint-design-api/testshell-api",children:"TestShell API"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To delete Shells:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the Shell's menu button ",(0,s.jsx)(n.img,{src:l(58344).c+"",width:"29",height:"28"})," and select ",(0,s.jsx)(n.strong,{children:"Remove"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If the Shell cannot be deleted, an error message is displayed, prompting you to download a CSV file."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(44584).c+"",width:"400",height:"53"})}),"\n",(0,s.jsx)(n.p,{children:"The file lists the Shell's dependencies that need to be removed before deleting the Shell, and contains the following details:"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Entity Name"}),(0,s.jsx)("td",{children:"Names of the elements in CloudShell"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Entity Type"}),(0,s.jsx)("td",{children:"Type of elements (Resource, Service, App, Abstract Resource, Abstract Template)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Blueprint Names"}),(0,s.jsx)("td",{children:"Names of the blueprints containing the elements"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Blueprint Template Names"}),(0,s.jsx)("td",{children:"Names of the blueprint templates containing the elements"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Sandbox Names"}),(0,s.jsx)("td",{children:"Names of sandboxes containing the elements"})]})]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/inventory/managing-resources/adding-inventory-resources/",children:"Adding Inventory Resources"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},49876:(e,n,l)=>{l.d(n,{c:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEPSURBVEhL7ZS7SgNBFIanjg9gl3fyFXyLVJJADATBB7CTWAhpNRJNqhAUK7GYlTW6O5fd7I6X3cqAxe8kWoURkiGnS/ExMOfAx7lwWJiVeAonCIKADM45WCQkhBCQUpIRxzGY1hpJkpDDXJ8UbEUL9B+u2H94iWKV4EX8vlq7c5bxEh30DXaPCrQGBpJS1Lg2qB4XaA9zCFuVK2cZL9G8bTxK8SpXn5WXqHOXYb/7hvP7DIKydbVLg8phibqdFWnrRjxdVDUOUtpluHiYonljcPU4pRXVegY7rQJ1u32krTsZ59g7e8fpbU5b0fwaKMs6Z8hL5MNW5A2LTGmHmjqDm0IpBRaW35h8zkh5/vjCD6Ev7ovKjYSLAAAAAElFTkSuQmCC"},91220:(e,n,l)=>{l.d(n,{c:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE3SURBVEhL7ZKxSgNBEIb3FazEJxBE9AksfBNfwAcRtFLTxdYmjYUKWhgQUgQsjOa4eGcul929vQtH9iRVsPidu3RyxbFkuhQfu7DLfMzML4LZAqNwDN/3WfE8DyKKJeI4ZieKIgilFJIkYUdrDVH3wMVGthacZJpQulz66l73pw4nmT8x6LxluO1n8CLTWOgke/5IsX9tsX1e4GGQVl3W/fuPk6w7THF8M8dhy1ZiVpmk4kG8Yqqa781J1v8yOL3LcdLJ0fMNb2dPNLrdS4utswL378xjHI4N2r0MrdcZBt+URk5ZOKVEfqbUYYYR7Y03+iQ6oCTuXBR45I7+C0X/qD3H3pWt9scqK4tPJEGxbyoqcZK5spGtBaFNWvvAgYjyBVTCL5RSQgQ/vwiLJUJLlCcHZW27xB+KpQr558q4FwAAAABJRU5ErkJggg=="},62672:(e,n,l)=>{l.d(n,{c:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFUSURBVEhL7ZS7SgNBFIYHrOwtfAlfwrcQwU58ATvBQiWNgiJYWKWxEUELEWJEFCGINobE3MxmL+7sLbMxWUgTEX5n0fJYOOxOleJjivMzH3Nm5rCuGKNjmGi327nTbDbBTIfDtm04jpM7lmWBcc7h+74WPM8Dowp5MhVmjrLQS/F+Vqr+F8pCh/vovQewXR9ciqkMhbKwcCswvzfC2kWMVysgMxTKwp0bgbndEVbPY9RNDcK7RojDhz4uqxFM2VYqQ6EsrLRCFB8jlOshLB3CjZLAzHaC5dMBqj0NLT2472PhaIj1K4GGjkfzYgQo1UI8vcmvIb8IlaFQFp48R1iS7dyXJ+04dIZCWbh5LTBbSLByFqOm4w6PK30sFj+wVRZo6bjDdI6mIy3lP/NUWajKVJg5jAchWcgLZg3G4EFEFrPGdV2wbvIFY/QpmfyueSH3H07wDfMM0OyAn/SkAAAAAElFTkSuQmCC"},58344:(e,n,l)=>{l.d(n,{c:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFXSURBVEhL7Za7TsMwFIb9ADAz8BawwcBjAE8Bj8BWBoTEBBKwIQErnSjqgEBIXCQuRSGlaZoSJ07atE2HLhXSz3FmDzRVztThk6zY0ufj/9iKaCQj1J0WbNtmwbIsCLct4XkeG67rQkgpEYYhG0EQQJgmimYmLZSppIHh23/ILZVBiLYk/BA+jSfZQG7p47fCdjnBxkUPN59RtgnTOhO5pZVahOWjAeZ3U5w9xfihqk3rTOSW3n1F2KQqV08GKL/F8DmkOs9aU+HVUXApV55M6wpbVwnWqVp91LqZTOtM5JZek2iJMp0rDfkyfaejPbjtYKfSxYOteCrVmVotldGkTFmuTJXu5tppH4v7KS5fqHs5pPpBWDnuY2EvxfkzU6YflOnhfQelapc6melF0gQk0vdz0od/KmleZtJCEVLFxomiyH5B3d4IXGIt9H0fojH8hZOOGRnjDx9GnfpFdiNaAAAAAElFTkSuQmCC"},44584:(e,n,l)=>{l.d(n,{c:()=>s});const s="data:image/png;base64,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"},4552:(e,n,l)=>{l.d(n,{I:()=>r,M:()=>d});var s=l(11504);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);