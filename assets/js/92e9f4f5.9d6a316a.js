"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[49772],{77644:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(17624),t=n(4552);const l={sidebar_position:2},a="Quickstart Guide - CloudShell Installation and Initial Setup",r={id:"quick-start/install-and-setup",title:"Quickstart Guide - CloudShell Installation and Initial Setup",description:"In this guide, we\u2019ll focus on installing CloudShell, setting up users and domains and populating the inventory.",source:"@site/versioned_docs/version-2023.3/quick-start/install-and-setup.md",sourceDirName:"quick-start",slug:"/quick-start/install-and-setup",permalink:"/quick-start/install-and-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/quick-start/install-and-setup.md",tags:[],version:"2023.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quickstart Guide - Creating and Reserving Blueprints",permalink:"/quick-start/creating-reserving"},next:{title:"Quickstart Guide - Creating Sandboxes",permalink:"/quick-start/create-sandbox"}},o={},d=[{value:"Basic flow",id:"basic-flow",level:2},{value:"Install CloudShell",id:"install-cloudshell",level:2},{value:"Optionally set up users, groups and domains",id:"optionally-set-up-users-groups-and-domains",level:2},{value:"Related Topics",id:"related-topics",level:3},{value:"Create Resources and Apps",id:"create-resources-and-apps",level:2},{value:"Related Topics",id:"related-topics-1",level:3},{value:"Check components",id:"check-components",level:2}];function h(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"quickstart-guide---cloudshell-installation-and-initial-setup",children:"Quickstart Guide - CloudShell Installation and Initial Setup"}),"\n",(0,i.jsx)(s.p,{children:"In this guide, we\u2019ll focus on installing CloudShell, setting up users and domains and populating the inventory."}),"\n",(0,i.jsx)(s.p,{children:"Target audience: Admins"}),"\n",(0,i.jsx)(s.h2,{id:"basic-flow",children:"Basic flow"}),"\n",(0,i.jsx)(s.p,{children:"Using CloudShell, setting up the test environment is simple:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Install CloudShell."}),"\n",(0,i.jsx)(s.li,{children:"Set up users, groups and domains."}),"\n",(0,i.jsx)(s.li,{children:"Create resources, services and Apps."}),"\n",(0,i.jsx)(s.li,{children:"Check your work."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"install-cloudshell",children:"Install CloudShell"}),"\n",(0,i.jsx)(s.p,{children:"CloudShell suite contains several basic components and optional add-ons that provide additional capabilities."}),"\n",(0,i.jsx)(s.p,{children:"The basic components are:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"CloudShell Portal: CloudShell's web portal that allows end users to reserve blueprints on demand from a self-service catalog, and enables admins and designers to administer CloudShell and create blueprints."}),"\n",(0,i.jsx)(s.li,{children:"Quali Server: Processes requests, manages and shares data/resources with CloudShell clients (Portal, APIs, etc.) from the CloudShell databases (MySQL, MongoDB)."}),"\n",(0,i.jsx)(s.li,{children:"Execution Server: CloudShell component that executes commands and tests. Multiple execution servers can be installed for distributed provisioning."}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Make sure the machine(s) that will host CloudShell comply with our ",(0,i.jsx)(s.a,{href:"/install-configure/cs-system-requirements/",children:"CloudShell System Requirements"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"CloudShell\u2019s servers and clients can coexist on the same machine, but for load/performance reasons, you might want to consider installing high-load components such as Quali Server, CloudShell Portal and the Execution Servers on dedicated machines."})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Install and configure CloudShell suite. For details, see ",(0,i.jsx)(s.a,{href:"/install-configure/cloudshell-suite/cloudshell-suite-overview/",children:"CloudShell Suite Installation Overview"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["You can also install CloudShell in a ",(0,i.jsx)(s.a,{href:"/install-configure/cloudshell-suite/cloudshell-suite-overview/high-availability",children:"High\xa0Availability"})," configuration."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["We highly recommend using CloudShell\u2019s Insight, our BI platform. Insight is provided free of charge with out-of-the-box resource utilization and activity dashboards, but can be customized as a paid add-on. For details, see ",(0,i.jsx)(s.a,{href:"/install-configure/cs-insight-bi/",children:"CloudShell Insight BI"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["You might also want to install and configure ",(0,i.jsx)(s.a,{href:"/install-configure/qualix/qualix-overview/",children:"QualiX Overview"}),", to allow your sandbox end-users to remotely connect to the sandbox\u2019s devices and VMs from the browser, without needing the machine\u2019s credentials nor an RDP or SSH client."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"optionally-set-up-users-groups-and-domains",children:"Optionally set up users, groups and domains"}),"\n",(0,i.jsx)(s.p,{children:"Depending on your organization, you might want to set up domains for your different teams or sites. A domain is basically a space that includes the resources, Apps and blueprints that apply to a specific team, project or geographically-distributed site in your organization, and the users that belong to that team or site."}),"\n",(0,i.jsx)(s.p,{children:'Groups are the link that connects users to a domain. Each group has a role, which is delegated to that group\u2019s members in the domain. As such, you could have a single user with different roles in different domains. That user could be a "regular user\u201d in one domain but a "domain admin\u201d in another.'}),"\n",(0,i.jsx)(s.p,{children:"This diagram illustrates how users, groups and domains work together:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(3976).c+"",width:"623",height:"300"})}),"\n",(0,i.jsx)(s.h3,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/admin/cloudshell-identity-management/cloudshell-domains/adding-domains",children:"Adding Domains"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/admin/cloudshell-identity-management/managing-users/managing-cloudshell-groups",children:"Managing CloudShell Groups"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users",children:"Managing CloudShell Users"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"create-resources-and-apps",children:"Create Resources and Apps"}),"\n",(0,i.jsx)(s.p,{children:"Now's a good time to start populating your inventory with resources, Apps and services, which the blueprint designers can later add to their blueprints. For details on how to create these components, see the related topics section that follows."}),"\n",(0,i.jsxs)(s.p,{children:["Each one of these components is based on a shell, which is a plugin that defines how the component will behave in the sandbox. A shell models a specific component, so if we want to create a Juniper switch, we\u2019ll need a Juniper switch shell and to deploy or load a Google Cloud VM, we\u2019ll need a shell that can do that. To quickly see how CloudShell works, we recommend using our ",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/putshell/dist/Putshell.zip",children:"PUT"}),"\xa0and ",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/trafficshell/dist/Trafficshell.zip",children:"Traffic Generator"})," mock shells."]}),"\n",(0,i.jsx)(s.p,{children:"CloudShell supports 4 types of components:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Resource models an actual physical or virtual device. It could be a layer 2 Cisco switch or some existing virtual appliance on the cloud that you\u2019d like to load into CloudShell. Feel free to use our ",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/putshell/dist/Putshell.zip",children:"PUT Shell Mock"})," and ",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/trafficshell/dist/Trafficshell.zip",children:"Traffic Shell Mock"})," resources."]}),"\n",(0,i.jsx)(s.li,{children:"App is the definition of virtual application to be deployed as part of the sandbox. It defines the VM to be deployed and configuration management script or playbook that will install the application(s) on top of the VM. Apps live in the context of a sandbox and when the sandbox ends, CloudShell\u2019s teardown script will also delete the VM from the cloud."}),"\n",(0,i.jsx)(s.li,{children:"Service is a sandbox component that injects some code into the sandbox. It could be used to register to a cloud-based service like a traffic generator on Azure."}),"\n",(0,i.jsx)(s.li,{children:"Abstract resource is a component that includes the settings you need from a specific resource. When the blueprint is reserved, CloudShell finds a matching resource in the CloudShell inventory and puts it in the blueprint instead of the abstract. Abstract resources provide the blueprint with additional flexibility and can also be used in combination with other resources."}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Quali has a vibrant ",(0,i.jsx)(s.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"developer\u2019s community"})," that is continuously developing new shells. Please browse it to see if we already have the shell you need. If we don\u2019t, feel free to create or extend an existing shell, or propose a shell in our ",(0,i.jsx)(s.a,{href:"https://community.quali.com/ideabox",children:"Idea box"}),"."]})}),"\n",(0,i.jsx)(s.h3,{id:"related-topics-1",children:"Related Topics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/intro/features/shells",children:"Shells Overview"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/intro/features/resources",children:"Resources Overview"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/intro/features/apps-overview",children:"Apps Overview"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/intro/features/services",children:"Services Overview"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/intro/features/abstract-resources",children:"Abstract Resources Overview"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell",children:"Migrating 1st Gen Shells to 2nd Gen"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"check-components",children:"Check components"}),"\n",(0,i.jsx)(s.p,{children:"Now that you've set up your domains, inventory and Apps, it's time to make sure everything's in working order:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Make sure the users you created can connect to their domains and have the appropriate permissions. For example, domain admins should have access to the Manage dashboard and be able to create/edit resources in the Inventory dashboard."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Make sure the domains include the right components:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Log into a domain as a regular user."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Create a blueprint."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Open the Resource and Service/App catalogs and make sure the appropriate resources are available."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If any resources are missing, make sure you created them in the right domain."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Apps are exposed to domains via a service category that is attached to the Apps. Make sure the service category is associated to the right domain(s)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Add some resources/Apps to the blueprint and reserve."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Make sure the sandbox 's setup process completes successfully."}),"\n",(0,i.jsx)(s.p,{children:"When the sandbox is active, its resources should appear reserved in the Inventory dashboard and the Apps should be deployed."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3976:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/UsersGroupsDomain-b42459e333e3b7dd734055a42148000e.png"},4552:(e,s,n)=>{n.d(s,{I:()=>r,M:()=>a});var i=n(11504);const t={},l=i.createContext(t);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);