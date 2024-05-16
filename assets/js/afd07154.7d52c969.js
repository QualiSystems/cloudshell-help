"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[80308],{5872:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=s(17624),n=s(4552);const l={sidebar_position:3},i="Setting Up Source Control for TestShell Tests",r={id:"admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/setting-up-source-control-for-testshell-tests",title:"Setting Up Source Control for TestShell Tests",description:"This article discusses the configuration steps for adding and managing tests using a source control solution. These procedures apply to tests executed by TestShell Studio and Runner. For executing local tests in Job Scheduling automation suites, see Enabling Automation Suites to Use Local Tests.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/setting-up-source-control-for-testshell-tests.md",sourceDirName:"admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites",slug:"/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/setting-up-source-control-for-testshell-tests",permalink:"/cloudshell-help/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/setting-up-source-control-for-testshell-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/setting-up-source-control-for-testshell-tests.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Enabling Automation Suites to Use Local Tests",permalink:"/cloudshell-help/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests"},next:{title:"Inventory Operations",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/"}},a={},c=[{value:"Adding test folders to source control",id:"adding-test-folders-to-source-control",level:2},{value:"Migrating existing assets to the designated Assets folder",id:"migrating-existing-assets-to-the-designated-assets-folder",level:2},{value:"Using tests that are managed in source control",id:"using-tests-that-are-managed-in-source-control",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"setting-up-source-control-for-testshell-tests",children:"Setting Up Source Control for TestShell Tests"}),"\n",(0,o.jsxs)(t.p,{children:["This article discusses the configuration steps for adding and managing tests using a source control solution. These procedures apply to tests executed by TestShell Studio and Runner. For executing local tests in Job Scheduling automation suites, see ",(0,o.jsx)(t.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests",children:"Enabling Automation Suites to Use Local Tests"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"The application is oblivious to source control, so all source control-related actions including Commit, Get Latest and conflict management are handled in your source control solution."})}),"\n",(0,o.jsx)(t.h2,{id:"adding-test-folders-to-source-control",children:"Adding test folders to source control"}),"\n",(0,o.jsx)(t.p,{children:"To manage your tests using a source control solution, add the folders of your local tests and dependencies as repositories."}),"\n",(0,o.jsx)(t.p,{children:"There are three TestShell elements you need to add to source control:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Tests"}),": Your local tests and custom tools"]}),"\n",(0,o.jsxs)(t.p,{children:["The default folder is ",(0,o.jsx)(t.code,{children:"C:\\Users\\Administrator\\Documents\\TestShell Files"}),", and also includes custom tools."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Assets"}),": Local dependencies and packages that are used by your tests. There is no centralized default folder for assets."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Pointers"}),": .tsdll files that link each asset to the tests that use it."]}),"\n",(0,o.jsxs)(t.p,{children:["The default folder is ",(0,o.jsx)(t.code,{children:"C:\\ProgramData\\QualiSystems\\Resources"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["If you want to change the folder locations for the tests or assets folders, use the ",(0,o.jsx)(t.code,{children:"TestShellServerLocalTestsPath"})," and ",(0,o.jsx)(t.code,{children:"AssetsPath"})," keys."]})}),"\n",(0,o.jsx)(t.h2,{id:"migrating-existing-assets-to-the-designated-assets-folder",children:"Migrating existing assets to the designated Assets folder"}),"\n",(0,o.jsx)(t.p,{children:"(Migration applies to existing customers only) As assets may be stored in different places, to add them to source control, you need to first copy the local assets to the source-controlled folder, and redirect each local asset's path to this folder."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"To migrate existing assets to the designated Assets folder:"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Copy the local assets to the new folder."}),"\n",(0,o.jsxs)(t.li,{children:["In TestShell Studio, in the ",(0,o.jsx)(t.strong,{children:"Assets"})," explorer, double click each local asset and update the ",(0,o.jsx)(t.strong,{children:"Path"})," (Do not delete the asset's filename)."]}),"\n",(0,o.jsx)(t.li,{children:"Save your changes."}),"\n",(0,o.jsx)(t.li,{children:"Commit the updates to source control."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"using-tests-that-are-managed-in-source-control",children:"Using tests that are managed in source control"}),"\n",(0,o.jsx)(t.p,{children:"This workflow outlines the basic process for adding, updating or using source-controlled tests. The terminology may change, depending on the source control solution."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Get latest version of the tests to ensure you are using the current version of the test and related files (If more people are working on the same repository)."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Add, update or run tests in TestShell."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"If you added or updated a test, Add, Commit and Push the tests to source control."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Make sure to include a meaningful description for each commit as it may be difficult to compare different versions of a test due to the complexity of the local test files."})})]})}function u(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>i});var o=s(11504);const n={},l=o.createContext(n);function i(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);