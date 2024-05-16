"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[96728],{45220:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=i(17624),l=i(4552);const r={sidebar_position:6,sidebar_label:"Categories in 1st Gen Service Shells"},t="Categories in 1st Gen Service Shells",c={id:"devguide/reference/categories-in-1st-gen-service-shells",title:"Categories in 1st Gen Service Shells",description:"This article explains how to associate service categories to a service Shell. CloudShell exposes services to CloudShell users via service categories, which are associated to the CloudShell domains in which the services are required. The service categories of a specific domain constitute that domain\u2019s services catalog. By default, each service Shell template is associated to a category in the Global domain.",source:"@site/versioned_docs/version-2023.3/devguide/reference/categories-in-1st-gen-service-shells.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/categories-in-1st-gen-service-shells",permalink:"/cloudshell-help/devguide/reference/categories-in-1st-gen-service-shells",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/reference/categories-in-1st-gen-service-shells.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Categories in 1st Gen Service Shells"},sidebar:"tutorialSidebar",previous:{title:"Migrating 1st Gen Shells to 2nd Gen",permalink:"/cloudshell-help/devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell"},next:{title:"Mapping Connections using App Sub-resources",permalink:"/cloudshell-help/devguide/reference/map-connections-using-app-sub-resources"}},o={},a=[];function d(e){const s={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"categories-in-1st-gen-service-shells",children:"Categories in 1st Gen Service Shells"}),"\n",(0,n.jsx)(s.p,{children:"This article explains how to associate service categories to a service Shell. CloudShell exposes services to CloudShell users via service categories, which are associated to the CloudShell domains in which the services are required. The service categories of a specific domain constitute that domain\u2019s services catalog. By default, each service Shell template is associated to a category in the Global domain."}),"\n",(0,n.jsx)(s.p,{children:"There are two ways to associate service Shells to categories:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Add the desired categories to the service\u2019s family in Resource Manager Client"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Define the association in the service Shell\u2019s data model"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In this article, we\u2019ll learn how to associate categories via the Shell\u2019s data model."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"To associate a category to a service Shell:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Make sure you are running Shellfoundry with the Global admin user. Run\xa0",(0,n.jsx)(s.code,{children:"shellfoundry config"}),"\xa0to see which user you are using."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Create a new Shell from a template using\xa0",(0,n.jsx)(s.code,{children:"shellfoundry new"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Open the Shell\u2019s root folder."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Edit the categories in the\xa0",(0,n.jsx)(s.code,{children:"datamodel.xml"}),"\xa0and\xa0",(0,n.jsx)(s.code,{children:"category.xml"}),"\xa0files."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["To edit the ",(0,n.jsx)(s.code,{children:"datamodel.xml"}),":"]})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["In the\xa0",(0,n.jsx)(s.code,{children:"/datamodel"}),"\xa0folder, edit the\xa0",(0,n.jsx)(s.code,{children:"datamodel.xml"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Under\xa0",(0,n.jsx)(s.code,{children:"<Categories>"}),", create a duplicate of the commented\xa0",(0,n.jsx)(s.code,{children:"<Category>"}),"\xa0line."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Change the category name as appropriate."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Uncomment the line."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Repeat to add additional categories."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Save the file."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["To edit the ",(0,n.jsx)(s.code,{children:"categories.xml"})," (required if the categories do not exist in CloudShell):"]})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["In the\xa0",(0,n.jsx)(s.code,{children:"/categories"}),"\xa0folder, edit the\xa0",(0,n.jsx)(s.code,{children:"categories.xml"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Under\xa0",(0,n.jsx)(s.code,{children:"<Categories>"}),", create a copy of the lines that start with the\xa0",(0,n.jsx)(s.code,{children:"\x3c!--<Category Name"}),"\xa0line and end with\xa0",(0,n.jsx)(s.code,{children:"</Category>--\x3e"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"For example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'\x3c!--<Category Name="" Catalog="Service">\n    <ChildCategories />\n  </Category>--\x3e\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Specify the category name. Optionally specify child categories, which are nested under parent categories."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Save the file."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>c,M:()=>t});var n=i(11504);const l={},r=n.createContext(l);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);