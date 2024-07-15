"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[14452],{86588:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(17624),o=s(4552);const i={sidebar_position:1},l="TestShell Integration with GitLab",a={id:"admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/testshell-integration-with-gitlab",title:"TestShell Integration with GitLab",description:"This article guides you on how to configure GitLab as the source control solution for your local tests and assets for automation suites executed in the Job Scheduling dashboard. Since local tests are accessible only to the client on which they were created, using a source control solution, these tests can be shared with other clients as well. In this article we will focus on GitLab as the source control solution. For other solutions, see Source Control: Using Local Tests in Automation Suites.",source:"@site/docs/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/testshell-integration-with-gitlab.md",sourceDirName:"admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites",slug:"/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/testshell-integration-with-gitlab",permalink:"/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/testshell-integration-with-gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/testshell-integration-with-gitlab.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Source Control: Using Local Tests in Automation Suites",permalink:"/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/"},next:{title:"Enabling Automation Suites to Use Local Tests",permalink:"/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests"}},r={},c=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"testshell-integration-with-gitlab",children:"TestShell Integration with GitLab"}),"\n",(0,n.jsxs)(t.p,{children:["This article guides you on how to configure GitLab as the source control solution for your local tests and assets for automation suites executed in the ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard. Since local tests are accessible only to the client on which they were created, using a source control solution, these tests can be shared with other clients as well. In this article we will focus on GitLab as the source control solution. For other solutions, see ",(0,n.jsx)(t.a,{href:"/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/",children:"Source Control: Using Local Tests in Automation Suites"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This integration provides test users with the latest version of the desired test(s) and assets and also allows test developers to push updates to GitLab. In this process, you will link your CloudShell clients (CloudShell Portal, TestShell Studio and Runner) and Execution Server(s) to a specific GitLab repository, which will contain the tests and assets, and make them available to these clients."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:'For brevity, the terms "Portal\u201d, "Studio\u201d and "Runner\u201d are used to denote "CloudShell Portal\u201d, "TestShell Studio\u201d and "TestShell Runner\u201d, respectively.'})}),"\n",(0,n.jsx)(t.p,{children:"For this to work, you need to follow these basic steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Consolidate the Tests and Assets folders under a single parent folder"}),"\n",(0,n.jsx)(t.li,{children:"Install GitLab server on a Linux machine to have a local GitLab repository server"}),"\n",(0,n.jsx)(t.li,{children:"Install Git on each TestShell machine to allow Git interaction"}),"\n",(0,n.jsx)(t.li,{children:"Add files from the base Studio machine: Add the Tests and Assets folders to create the repository"}),"\n",(0,n.jsx)(t.li,{children:"Clone the GitLab repository on each relevant client machine to create a local copy of the repository on each client (Studio, Runner and Portal)"}),"\n",(0,n.jsx)(t.li,{children:"Configure Quali Server: Set the local Tests and Assets folders and create a batch script that will pull the local tests from the GitLab repository"}),"\n",(0,n.jsx)(t.li,{children:"Configure Execution Servers to access the GitLab repository: Set the folder that will store the tests and assets, create a batch script that will pull the local tests from the GitLab repository"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To set up GitLab source control for your tests:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"On the base machine (where you will create the repository), create a folder that will contain the managed files."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Copy and place the Tests and Assets folders in this parent folder. The default paths are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Assets \u2013 ",(0,n.jsx)(t.code,{children:"C:\\ProgramData\\QualiSystems\\Resources"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Tests \u2013 ",(0,n.jsx)(t.code,{children:"C:\\Users\\<UserName>\\Documents\\TestShell Files\\Tests"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On your Studio and Runner client machines, go to the ",(0,n.jsx)(t.code,{children:"C:\\Program Files (x86)\\QualiSystems\\TestShell\\Studio\\customer.config"})," file, and set\xa0the local Assets and parent folders (make sure the paths are accessible to all users):"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="AssetsPath" value="C:\\<parent-folder>\\Assets"/>'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="TestShellFilesPath" value="C:\\<parent-folder"/>'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Install GitLab server on a Linux machine to allow you to have an on premise Git repository."}),"\n",(0,n.jsxs)(t.p,{children:["You can download GitLab at ",(0,n.jsx)(t.a,{href:"https://about.gitlab.com/",children:"https://about.gitlab.com/"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Log in to the GitLab portal and create a new Project. The project should have the same name as the Tests and Assets parent folder."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Install Git on the Quali Server, and each appropriate Execution Server, Studio and Runner, machine to allow you to perform Git operations on any of the clients (Pull/Push). You can download git at ",(0,n.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"https://git-scm.com/downloads"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you are not familiar with Git, please use this simplified commands manual ",(0,n.jsx)(t.a,{href:"http://rogerdudler.github.io/git-guide/",children:"http://rogerdudler.github.io/git-guide/"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add the Test and Assets parent folder from the base machine to the GitLab repository. You can use the manuals or review the sample here (the below commands upload the local Tests and Assets to the GitLab repository):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'C:\\> cd c:\\TestShell\\TestEnv\nC:\\TestShell\\TestEnv\\> git init\nC:\\TestShell\\TestEnv\\> git remote add origin http://<GitLab server address>/root/<project name>.git\nC:\\TestShell\\TestEnv\\> git add .\nC:\\TestShell\\TestEnv\\> git commit -m "<First Tests and Assets creation>"\nC:\\TestShell\\TestEnv\\> git Push -u origin master\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Clone the GitLab repository on the relevant Studio, Runner and Execution Server machines so it will have a local copy of the Tests and Assets."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"C:\\> cd c:\\TestShell\nC:\\TestShell\\> git clone http://<GitLab server address>/root/<project name>.git\n"})}),"\n",(0,n.jsx)(t.p,{children:"Note that you need to configure each machine to work with the parent folder path, as explained in the beginning of this procedure."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests#configure-quali-server",children:"Configure Quali Server"})," to work with local tests and assets."]}),"\n",(0,n.jsxs)(t.p,{children:["This requires setting a batch file that automates the Git Pull request using the ",(0,n.jsx)(t.strong,{children:"Update Local Tests"})," process (executed from Portal\u2019s ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard). You\u2019re welcome to use the following code in the ",(0,n.jsx)(t.strong,{children:"Update Local Tests"})," batch file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"cd %LOCAL_TESTS_PATH%\nREM going to the parent directory\ncd..\ngit pull\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For details and additional batch script examples, see ",(0,n.jsx)(t.a,{href:"/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests#batch-scripts",children:"Batch scripts"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To use source controlled tests in CloudShell Portal job suites, enable the relevant execution servers to access the repository, as explained in ",(0,n.jsx)(t.a,{href:"/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests#configure-each-execution-server-that-will-support-local-tests",children:"Configure each Execution Server that will support local tests"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To verify, update local files on each client, and make sure that client uses the updated tests."}),"\n",(0,n.jsx)(t.p,{children:"This concludes the integration process."}),"\n",(0,n.jsxs)(t.p,{children:["Before running local tests in Studio or Runner, or in automation suites in Portal, CloudShell users will need to pull the latest local tests and assets from the GitLab repository. In Portal, this is done by running the ",(0,n.jsx)(t.strong,{children:"Update Local Tests"})," batch script in the ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard, and in Studio or Runner, by manually performing a pull request from the Tests and Assets parent folder."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>a,M:()=>l});var n=s(11504);const o={},i=n.createContext(o);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);