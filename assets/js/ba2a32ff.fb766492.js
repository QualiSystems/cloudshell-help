"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[39824],{75556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(17624),i=r(4552);const s={sidebar_position:1},o="Exporting a Blueprint Package",a={id:"portal/blueprints/creating-blueprints/export-blueprints/export-a-package",title:"Exporting a Blueprint Package",description:"This topic describes how to export resources, blueprints and their dependencies as a package.",source:"@site/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/export-blueprints/export-a-package.md",sourceDirName:"portal/blueprints/creating-blueprints/export-blueprints",slug:"/portal/blueprints/creating-blueprints/export-blueprints/export-a-package",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/export-blueprints/export-a-package",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/export-blueprints/export-a-package.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Export Blueprint Packages and Configurations",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/export-blueprints"},next:{title:"Exporting Diagrams and Connections",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/export-blueprints/export-diagram"}},l={},d=[{value:"The exported package",id:"the-exported-package",level:2},{value:"Additional information",id:"additional-information",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"exporting-a-blueprint-package",children:"Exporting a Blueprint Package"}),"\n",(0,n.jsx)(t.p,{children:"This topic describes how to export resources, blueprints and their dependencies as a package."}),"\n",(0,n.jsx)(t.p,{children:"When exporting a blueprint package, the shells associated with the resources within the blueprint are not imported."}),"\n",(0,n.jsx)(t.p,{children:"Examples of the use of export and import of packages are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Backup of a blueprint with all of its dependencies kept as archive copies which is then available to be restored when needed."}),"\n",(0,n.jsx)(t.li,{children:"As a means of providing solutions to other users, by exporting a package from one user or database and importing it into another user or database."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To export a blueprint package:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"In CloudShell Portal, select the required blueprint."}),"\n",(0,n.jsxs)(t.li,{children:["In the diagram, click the\xa0",(0,n.jsx)(t.strong,{children:"Blueprint"})," menu\xa0and ",(0,n.jsx)(t.strong,{children:"Export Blueprint Package"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Save the package zip file in the required location."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"the-exported-package",children:"The exported package"}),"\n",(0,n.jsx)(t.p,{children:"A package is a zip file that contains folders and files that are needed to fully recreate the same contents that were exported."}),"\n",(0,n.jsx)(t.p,{children:"The contents of each folder or file of a blueprint package are described in the following table:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Folder/File"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"App Templates folder"}),(0,n.jsxs)(t.td,{children:["Contains App definition XMLs and images of the App templates.",(0,n.jsx)("br",{}),"In order for the App to work, the cloud provider resource must exist in CloudShell."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Categories folder"}),(0,n.jsxs)(t.td,{children:["Contains the ",(0,n.jsx)(t.code,{children:"categories.xml"})," file and images of the categories, if images were assigned to the categories."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DataModel folder"}),(0,n.jsx)(t.td,{children:"Contains information about the data model (families, models, attributes, resource structure, respository asset, and family/model images) for each resource, service and App in the blueprint."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Drivers folder(1st Gen shells only)"}),(0,n.jsxs)(t.td,{children:["Contains resource drivers for each resource in the blueprint that has an assigned driver.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Resource drivers are supported for backwards compatibility only."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Scripts folder"}),(0,n.jsx)(t.td,{children:"Contains a Python script file for each resource in the blueprint that has an assigned script."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Repository assets (referenced in DataModel xml)"}),(0,n.jsx)(t.td,{children:"Configuration Management (sh/ps1) script or Ansible playbook attached to the blueprint's components."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resources folder"}),(0,n.jsxs)(t.td,{children:["Contains XML files for each resource, service and App in the blueprint. The XML contains partial information about the resource, according to the usage in the blueprint. For example, if only 2 ports of a blade are in use, the export contains the whole blade and ports but other blades that are not in the blueprint are not exported.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Shells are not included in the blueprint package - see ",(0,n.jsx)(t.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/export-blueprints/export-a-package#additional-information",children:"Additional information"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topologies folder"}),(0,n.jsx)(t.td,{children:"Contains an XML file with the blueprint's properties, diagram layout (including x-y coordinates of each element), resource connection routes, and image file (if the blueprint has an image assigned to it). It also contains inventory resources associated with the blueprint, such as physical resources and cloud provider resources [used by the blueprint's Apps] and their share level in the blueprint. The share levels of the resources are included in the export, as defined in the blueprint."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topology Drivers folder(1stGen shells only)"}),(0,n.jsx)(t.td,{children:"Contains the blueprint driver's dll file, if the blueprint has a driver assigned to it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Topology Scripts folder"}),(0,n.jsx)(t.td,{children:"Contains ZIP files of the blueprint's scripts, if the blueprint has scripts assigned to it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"metadata.xml"})," file"]}),(0,n.jsx)(t.td,{children:"This file contains information about the export time, server version and package type that is used by the server in the import process."})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The only folders included in the export are those that were part of the exported blueprint."})}),"\n",(0,n.jsx)(t.h2,{id:"additional-information",children:"Additional information"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Abstract resources are included in the blueprint package."}),"\n",(0,n.jsx)(t.li,{children:"L1/Patch panel drivers are not exported or imported."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.em,{children:["Shells are not included with the package. Therefore, if you do not have the correct shell versions installed, make sure to install them before importing the package. For details, see ",(0,n.jsx)(t.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-shells#importing-shells",children:"Importing Shells"})]}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Access credentials to App configuration management scripts and playbooks are included (hashed)."}),"\n",(0,n.jsx)(t.li,{children:"Labels are not included in blueprint packages."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,r)=>{r.d(t,{I:()=>a,M:()=>o});var n=r(11504);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);