"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8188],{10552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(17624),i=t(4552);const r={sidebar_position:3},o="Quickstart Guide - Creating Sandboxes",a={id:"quick-start/create-sandbox",title:"Quickstart Guide - Creating Sandboxes",description:"In this guide, we\u2019ll focus on creating a sandbox. The end-user's main goal is to solve their business need. To help illustrate this point, consider the following two scenarios:",source:"@site/versioned_docs/version-2023.3/quick-start/create-sandbox.md",sourceDirName:"quick-start",slug:"/quick-start/create-sandbox",permalink:"/quick-start/create-sandbox",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/quick-start/create-sandbox.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quickstart Guide - CloudShell Installation and Initial Setup",permalink:"/quick-start/install-and-setup"},next:{title:"CloudShell Portal",permalink:"/category/cloudshell-portal"}},l={},c=[{value:"Basic flow",id:"basic-flow",level:2},{value:"Browse the Blueprint Catalog",id:"browse-the-blueprint-catalog",level:2},{value:"Reserve a blueprint",id:"reserve-a-blueprint",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quickstart-guide---creating-sandboxes",children:"Quickstart Guide - Creating Sandboxes"}),"\n",(0,s.jsx)(n.p,{children:"In this guide, we\u2019ll focus on creating a sandbox. The end-user's main goal is to solve their business need. To help illustrate this point, consider the following two scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The end user is a software tester who wants to run validations on the latest build of their product. So this tester needs an environment that has the product of that particular build installed, along with any configurations and 3",(0,s.jsx)("sup",{children:"rd"})," party software they might need, like a testing tool to be used for running the tests and some OS\xa0configurations that are needed to mimic a production environment."]}),"\n",(0,s.jsx)(n.li,{children:"The end user is a sales representative who wants to demo their company's product to a potential client. So the sales rep needs an environment on which the product is installed with some mock data. The environment could comprise vCenter VMs on which the client and server are installed, connected to a DB server with mock data."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Target audience: Sandbox end users"}),"\n",(0,s.jsx)(n.h2,{id:"basic-flow",children:"Basic flow"}),"\n",(0,s.jsx)(n.p,{children:"Using CloudShell, setting up the test environment is simple:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Browse the Blueprint Catalog."}),"\n",(0,s.jsx)(n.li,{children:"Reserve a blueprint."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"browse-the-blueprint-catalog",children:"Browse the Blueprint Catalog"}),"\n",(0,s.jsx)(n.p,{children:"The Blueprint Catalog displays all your blueprints as well as any public blueprints in the current domain. This is where users browse for their desired blueprint and reserve it."}),"\n",(0,s.jsx)(n.p,{children:"To open the Blueprint Catalog:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log into CloudShell Portal and switch to the desired domain."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(79568).c+"",width:"681",height:"70"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click the Blueprints menu to display the self-service Blueprint Catalog."}),"\n",(0,s.jsx)(n.p,{children:"Tip: To see only your blueprints, select the Owned by me filter on the left."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(24224).c+"",width:"540",height:"281"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Browse the Blueprint Catalog."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Feel free to click a blueprint\u2019s tile to look inside."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Look at the blueprint\u2019s instructions. They should provide additional details about the blueprint and how to use it."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reserve-a-blueprint",children:"Reserve a blueprint"}),"\n",(0,s.jsx)(n.p,{children:"By reserving a blueprint, you create a live instance (or sandbox) of the blueprint\u2019s environment. The reservation process allocates the ports that are involved in the resource connections and if they are defined as unshared, no one else can use them while the sandbox is active."}),"\n",(0,s.jsx)(n.p,{children:"To reserve a blueprint:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Blueprint Catalog or workspace, click Reserve."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(74272).c+"",width:"520",height:"263"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Reserve dialog box, you can optionally modify the reservation details."}),"\n",(0,s.jsxs)(n.p,{children:["For example, change the duration of the sandbox or schedule it to run in the future, or click the Advanced Form (",(0,s.jsx)(n.img,{src:t(44456).c+"",width:"20",height:"19"}),") to add permitted users so others can see and use the sandbox even if it\u2019s private, and more."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Reserve to start the sandbox."}),"\n",(0,s.jsx)(n.p,{children:"The setup process should take a few minutes. During this time, CloudShell will provision the required resources, allocate the ports and create the connections between the resources. The sandbox\u2019s state changes to Active, notifying you that it\u2019s ready for use."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(57112).c+"",width:"622",height:"332"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can now use the sandbox. For example, connect to a device or application that was deployed in the sandbox, run commands by hovering over a resource and clicking the Commands button, check the Output console for sandbox messages and indications, and more."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"Resources catalog"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you can\u2019t find the resources you are looking for in the Add Resource catalog, use the advanced search or expand the resource folders in the catalog. If you still can\u2019t find the resources, check the Inventory dashboard as the resources may be excluded. If that\u2019s the case, contact the administrator."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Reserve form"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When reserving the blueprint, the conflict resolution dialog box may be displayed if any of your resources or ports are currently being used in other sandboxes AND are defined as unshared. If this happens, the dialog box will propose alternative timeslots in which the blueprint\u2019s resources are all available. If you\u2019re the blueprint designer, you could replace one of the conflicting resources with an available one."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Setup process"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the setup process encounters any errors, click the Activity button to review the reservation\u2019s log for errors and consult the administrator."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},57112:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ActiveSandbox-40b5032ddf77609a29585d7392b7375a.png"},44456:(e,n,t)=>{t.d(n,{c:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGASURBVDhP1ZLZUsJAEEX9Phf2RUhYZA0hIGsKQXaqUIxLoSiW24PfpOJv4Adcp8eySkiClPDiw3ma7jPTc3tjOv3AjiOwNv6h0OWLISYVkJBLC4mnCvAFJVicwZl+nTCZLmM0fsLpxRgnZyNDNMbVzQPUahd2zx627aKxkA6U3AGGo3tIShmBSBrBiDJDKJJBKJpBfzBEo328nFBjr/MKCWxaBdjcYd70RZjXbdkENDoDJhzohZPJu05I4+6KSS7Il+t8NLXaQanSghBO8bpm10TY6fZMhVZXiAcgZyscSVH5y6nWVPjy+mYqpHGz+RqKagsFtYlcqQ4/S3ah0OgPv4UWZwiRRI6tSJETZevk9sdWE5JIyqg89QRbKY8Q/5vQK7KUbX6eKIedEbzZzoRmKc8L5f0Kbu+e0eufo05NBpDs8voRh82jxUJCDKdRa/bR6mlodzW0jGBndbbUcbnIN2Gh0Mr+jW51/ALVkOxnL6ETEnTjMsz3EYbCVVizMIBPwZxGZ+ntMn0AAAAASUVORK5CYII="},24224:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/BlueprintCatalog-52778f5621f6825586de9d54bd609952.png"},74272:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ReserveForm-5325f9fc2be9136c7ce129700aea6c18.png"},79568:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/SelectDomain-c81585bdd926a730b4e1b19046723938.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var s=t(11504);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);