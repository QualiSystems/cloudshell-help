"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[83344],{31324:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(17624),l=s(4552);const i={sidebar_position:2},r="Enabling Automation Suites to Use Local Tests",o={id:"admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests",title:"Enabling Automation Suites to Use Local Tests",description:"As administrator, you can enable test automation developers to add tests from their local tests folder to jobs in their automation suites. This requires a source control system that will manage the TestShell tests and make them available to CloudShell. To learn how to do this, follow the configuration steps below, or contact your Technical Account Manager.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests.md",sourceDirName:"admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites",slug:"/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests",permalink:"/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TestShell Integration with GitLab",permalink:"/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/testshell-integration-with-gitlab"},next:{title:"Setting Up Source Control for TestShell Tests",permalink:"/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/setting-up-source-control-for-testshell-tests"}},a={},c=[{value:"Configure CloudShell Portal",id:"configure-cloudshell-portal",level:2},{value:"Configure Quali Server",id:"configure-quali-server",level:2},{value:"Configure each Execution Server that will support local tests",id:"configure-each-execution-server-that-will-support-local-tests",level:2},{value:"Enable the use of Local Assets",id:"enable-the-use-of-local-assets",level:2},{value:"Batch scripts",id:"batch-scripts",level:2},{value:"Example for validating git pull and passing / failing based on ErrorLevel after git pull:",id:"example-for-validating-git-pull-and-passing--failing-based-on-errorlevel-after-git-pull",level:3},{value:"Example for an Execution Server that is not running any git commands and just needs to pass to avoid being excluded:",id:"example-for-an-execution-server-that-is-not-running-any-git-commands-and-just-needs-to-pass-to-avoid-being-excluded",level:3},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"enabling-automation-suites-to-use-local-tests",children:"Enabling Automation Suites to Use Local Tests"}),"\n",(0,n.jsx)(t.p,{children:"As administrator, you can enable test automation developers to add tests from their local tests folder to jobs in their automation suites. This requires a source control system that will manage the TestShell tests and make them available to CloudShell. To learn how to do this, follow the configuration steps below, or contact your Technical Account Manager."}),"\n",(0,n.jsx)(t.p,{children:"By default, when creating new CloudShell automation suites, the user can only select shared tests (shared tests and assets are stored in the MS SQL database)."}),"\n",(0,n.jsx)(t.p,{children:"First, let\u2019s try to understand the general flow for working with local tests:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Each test developer creates and saves tests on their local machine. The developer's local tests folder should be mapped to a source control repository, which stores all the tests."}),"\n",(0,n.jsx)(t.li,{children:"A test developer creates or updates a test and pushes the updates to the source control."}),"\n",(0,n.jsx)(t.li,{children:"An admin can then execute an update process to make sure that all the execution server have the latest version of the tests, and that CloudShell Portal displays the latest version as well (changes might include new tests, new functions, new inputs, etc)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now that we understand the general concept, let's drill down to the technical part:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard's ",(0,n.jsx)(t.strong,{children:"Update local tests"})," button (available for admins only) runs a batch script file. This file pulls the latest version from the repository to the Quali Server machine (the files on the Quali Server are used for listing only) and allows CloudShell Portal to show which tests exists/get inputs/etc."]}),"\n",(0,n.jsx)(t.admonition,{title:"Important",type:"warning",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Update local tests"})," applies to ALL execution servers in your CloudShell deployment. As such, when running ",(0,n.jsx)(t.strong,{children:"Update local tests"}),", execution servers that do not have a batch file configured will go into \u201cWaiting for update\u201d mode and become excluded. For details on how to add a passing script, see ",(0,n.jsx)(t.a,{href:"#batch-scripts",children:"Batch scripts"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Update local tests"}),' only applies to included execution servers. Therefore, if your execution servers are excluded, ensure that the batch script passes with "exit code 0" and include them, as explained in ',(0,n.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page#includingexcluding-execution-servers",children:"Including/excluding execution servers"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Once the batch file completes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For each execution server, if the execution server state is idle (not running any test), the execution server launches a batch file that pulls the latest test versions to the execution server. If the execution server is not idle, the batch file will run when it completes its current executions."}),"\n",(0,n.jsx)(t.li,{children:"During this update, the execution server does not run any new job until the batch file ends successfully."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This diagram illustrates the full process:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(35540).c+"",width:"1026",height:"713"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This only applies to tests residing in the source control repository, so before you start, make sure the local tests folder on the Quali Server is on source control."})}),"\n",(0,n.jsx)(t.p,{children:"For this to work, you need to do the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"#configure-cloudshell-portal",children:"Configure CloudShell Portal"}),": Enable CloudShell Portal to browse the local tests folder"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"#configure-quali-server",children:"Configure Quali Server"}),": Set the local tests folder and batch script that will retrieve the local tests from the source control repository"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"#configure-each-execution-server-that-will-support-local-tests",children:"Configure each Execution Server that will support local tests"}),": Set the folder that will store the tests from the source control repository"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"#enable-the-use-of-local-assets",children:"Enable the use of Local Assets"}),": Enable the tests to use local assets if any tests require the use of local TestShell assets"]}),"\n",(0,n.jsxs)(t.p,{children:["Once enabled, CloudShell admins can run the ",(0,n.jsx)(t.strong,{children:"Update Local Tests"})," batch script from the ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard to retrieve the local tests from the source control repository."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configure-cloudshell-portal",children:"Configure CloudShell Portal"}),"\n",(0,n.jsxs)(t.p,{children:["On the CloudShell Portal, enable admins to browse the local tests folder and set any environment parameters you\u2019d like to pass to the ",(0,n.jsx)(t.strong,{children:"Update Local Tests"})," process."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To configure CloudShell Portal:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Open the Portal installation directory (",(0,n.jsx)(t.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal"})," by default) and edit the ",(0,n.jsx)(t.code,{children:"customer.config"})," file."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add the following key:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="EnableLocalTestBrowsing" value="true"/>'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To insert environment variables into the Update local tests process, add the following key and set the environment parameters, separated by commas:"}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentUserParameters" value="Get_UserName,Get_Password,Custom_Input"/>'})}),"\n",(0,n.jsxs)(t.p,{children:["Whenever the admin runs the ",(0,n.jsx)(t.strong,{children:"Update local tests"})," process, the ",(0,n.jsx)(t.strong,{children:"User Blueprint Parameters"})," page will be displayed, prompting the admin to set the custom parameters to be used by the Upgrade local tests process."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(19188).c+"",width:"448",height:"445"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Values of arguments that have the word \u201cpassword\u201d in the name are displayed as asterisks."})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Restart the ",(0,n.jsx)(t.strong,{children:"CloudShell Portal IIS"})," service."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configure-quali-server",children:"Configure Quali Server"}),"\n",(0,n.jsx)(t.p,{children:"On the Quali Server machine, the automation developer needs to add the new test from the repository to the Quali Server."}),"\n",(0,n.jsx)(t.p,{children:"To configure Quali Server:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On the Quali Server machine, open the Server installation directory (",(0,n.jsx)(t.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server"})," by default) and edit the ",(0,n.jsx)(t.code,{children:"customer.config"})," file."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Copy the following keys and specify the values:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="TestShellServerLocalTestsPath" value="<local-tests-path>"/>'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFilePath" value="<batch-file-path>"/>'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFileOutPutPath" value="<batch-file-output-path>"/>'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"TestShellServerLocalTestsPath"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set the local tests folder on the Quali Server that contains the tests to be used. The contents of this folder will be displayed when the test automation developer browses local tests in the ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard."]}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="TestShellServerLocalTestsPath" value="C:\\Local Tests\\Tests"/>'})}),(0,n.jsxs)(t.p,{children:["The folder must be different from the one in use for saved Studio tests (",(0,n.jsx)(t.code,{children:"~\\Documents\\TestShell Files\\Tests"})," by default)."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"LocalEnvironmentGetBatchFilePath"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set the path to the batch script that will update the tests from source control when the admin initiates the ",(0,n.jsx)(t.strong,{children:"Update local tests"})," process. For details, see ",(0,n.jsx)(t.a,{href:"#batch-scripts",children:"Batch scripts"}),"."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Although the Quali Server doesn't run the tests, it needs to expose the latest test versions when adding tests to the automation suite."})}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFilePath" value="c:\\ScriptsFolder\\ScriptName.bat"/>'})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"LocalEnvironmentGetBatchFileOutPutPath"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set the path to the file that will contain the log files and outputs of the ",(0,n.jsx)(t.strong,{children:"Update local tests"})," process. CloudShell will overwritethe log file every time the admin initiates the process."]}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFileOutPutPath" value="C:\\Batch Script\\Logs\\BatchFileOutputLog.txt"/>'})})]})]})]})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Save and close the file."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Restart the ",(0,n.jsx)(t.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configure-each-execution-server-that-will-support-local-tests",children:"Configure each Execution Server that will support local tests"}),"\n",(0,n.jsx)(t.p,{children:"On each execution server machine, the developer/admin adds the new test from the repository to the execution server."}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["Prior to running the ",(0,n.jsx)(t.strong,{children:"Update local tests"})," process, make sure every execution server has a batch file in the specified folder, as the update process will run on all the execution servers in CloudShell and exclude execution servers with a bad or missing batch file. For details, see ",(0,n.jsx)(t.a,{href:"#batch-scripts",children:"Batch scripts"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To configure an execution server:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On each execution server, open the execution server's installation folder (",(0,n.jsx)(t.code,{children:"C:\\Program Files (x86)\\QualiSystems\\TestShell\\ExecutionServer"})," by default) and edit the ",(0,n.jsx)(t.code,{children:"customer.config"})," file."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Copy the following keys and specify the values:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="TestShellFilesPath" value="<local-tests-path>"/>'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalQsAppDataPath" value="<appdata-folder-path>"/>'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFilePath" value="<batch-file-path>"/>'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFileOutPutPath" value="<batch-file-output-path>"/>'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"TestShellFilesPath"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Set the path to the folder that will contain the local tests retrieved from the source control repository"}),(0,n.jsxs)(t.p,{children:["(",(0,n.jsx)(t.code,{children:"~\\Documents\\TestShell Files\\Tests"})," by default)."]}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="TestShellFilesPath" value="C:\\Users\\Administrator\\Documents\\TestShell Files"/>'})}),(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["Do not include the local tests folder. For example, if the local tests folder is ",(0,n.jsx)(t.code,{children:"~\\Documents\\TestShell Files\\Tests"}),", specify ",(0,n.jsx)(t.code,{children:"~\\Documents\\TestShell Files"}),"."]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"LocalQsAppDataPath"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set the path to your QualiSystems ",(0,n.jsx)(t.code,{children:"AppData"})," folder (",(0,n.jsx)(t.code,{children:"C:\\ProgramData\\QualiSystems\\WS_User\\AppData"})," by default)."]}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalQsAppDataPath" value="%PROGRAMDATA%\\QualiSystems\\WS_User\\AppData"/>'})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"LocalEnvironmentGetBatchFilePath"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set the path to the batch file that will update the tests from source control during the ",(0,n.jsx)(t.strong,{children:"Update local tests"})," process. For details, see ",(0,n.jsx)(t.a,{href:"#batch-scripts",children:"Batch scripts"}),"."]}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFilePath" value="c:\\ScriptsFolder\\ScriptName.bat"/>'})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"LocalEnvironmentGetBatchFileOutPutPath"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set the path to the file that will contain the log files and outputs of the ",(0,n.jsx)(t.strong,{children:"Update local tests"})," process. CloudShell will overwrite the log file every time the admin initiates the process."]}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="LocalEnvironmentGetBatchFileOutPutPath" value="C:\\OutputsOnExecutionServer\\BatchFileOutputLog.txt"/>'})})]})]})]})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Save and close the file."}),"\n",(0,n.jsxs)(t.li,{children:["Restart the ",(0,n.jsx)(t.strong,{children:"TestShell Execution Server"})," service."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"enable-the-use-of-local-assets",children:"Enable the use of Local Assets"}),"\n",(0,n.jsx)(t.p,{children:"Like tests, assets can be local or shared. By default, \u2018local tests\u2019 support the use of \u2018shared assets\u2019. However, support for local assets needs to be configured to allow local tests to use them."}),"\n",(0,n.jsxs)(t.p,{children:["Local assets are composed of two files: the actual asset file that can be located anywhere on your computer, and a metadata file that points to the asset file. By default, the metadata files are located at ",(0,n.jsx)(t.code,{children:"C:\\ProgramData\\QualiSystems\\Resources"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This folder contains the assets' folder tree that can be seen in the ",(0,n.jsx)(t.strong,{children:"Asset"})," explorer in TestShell Studio."]}),"\n",(0,n.jsx)(t.p,{children:"In order to use a local asset, the asset's metadata file AND the asset's actual file need to be in the same path on each appropriate execution server as they are on your local machine."}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"Perform the following procedure on all execution servers you plan on using for test execution."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To use assets in your execution servers:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the folder ",(0,n.jsx)(t.code,{children:"C:\\TestShell Files"}),", create a new folder named: ",(0,n.jsx)(t.strong,{children:"Assets Manager"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"Assets Manager"})," folder, create the following two folders:"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Assets References"}),": Contains links that TestShell creates between assets and tests (i.e. which asset is being used by which tests)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Actual Files"}),": Contains the asset files"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Edit the ",(0,n.jsx)(t.code,{children:"customer.config"})," file (",(0,n.jsx)(t.code,{children:"C:\\Program Files (x86)\\QualiSystems\\TestShell\\Studio"})," by default)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add the following key:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'<add key="AssetsPath" value=" C:\\TestShell Files\\Assets Manager\\Assets References"/>'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Update the source control with the ",(0,n.jsx)(t.code,{children:"Asset Manager"})," folder content."]}),"\n",(0,n.jsxs)(t.p,{children:["Before importing a new asset into TestShell Studio, place the actual asset file (DLL\\EXE) in the ",(0,n.jsx)(t.code,{children:"Actual Files"})," directory and then import the new asset from TestShell Studio."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Next, make sure the assets exist on each execution server. The asset folder path must be exactly the same as defined in the developer machine"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On all execution servers, make sure the batch file retrieves the latest of the ",(0,n.jsx)(t.strong,{children:"Asset Manager"})," folder."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For more information, contact you Customer Success representative."}),"\n",(0,n.jsx)(t.h2,{id:"batch-scripts",children:"Batch scripts"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["In the Server installation directory, there is a sub-folder called ",(0,n.jsx)(t.code,{children:"Local Sync Batch Samples"})," where you can find a sample script for TFS. Do not point to this file as this is a sample folder that might be overwritten in future versions."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The script file can be a simple file like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"cd %LOCAL_TESTS_PATH%"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"git pull https://%GIT_USER%:%GIT_PASSWORD%@github.com/%GIT_USER%/%GIT_REPO%"})}),"\n",(0,n.jsxs)(t.p,{children:["Where GIT_USER, GIT_PASSWORD and GIT_REPO are parameters defined in the ",(0,n.jsx)(t.code,{children:"LocalEnvironmentUserParameters Portal"})," configuration key."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"It is possible to pass or fail the batch script with the following exit codes:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Pass"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Exit 0"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Failed"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Exit -1"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"example-for-validating-git-pull-and-passing--failing-based-on-errorlevel-after-git-pull",children:"Example for validating git pull and passing / failing based on ErrorLevel after git pull:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"REM change directory to TEST path configured in customer.config"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"cd %LOCAL_TESTS_PATH%"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"REM going to the parent directory in order to perform git operations"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"cd.."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"REM Displaying input params from user (optional to use these params in git commands)"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"echo param 1: %Param1%"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"echo param 2: %Param2%"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"REM: pulling updated code to Repo"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"git pull"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"REM validating error code of git pull command"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"if %ERRORLEVEL% EQU 0 goto passed"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:":passed"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"REM command passed"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"exit 0"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"REM command failed"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"exit -1"})}),"\n",(0,n.jsx)(t.h3,{id:"example-for-an-execution-server-that-is-not-running-any-git-commands-and-just-needs-to-pass-to-avoid-being-excluded",children:"Example for an Execution Server that is not running any git commands and just needs to pass to avoid being excluded:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"exit 0"})}),"\n",(0,n.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/portal/job-scheduling/job-scheduling-dashboard",children:"Job Scheduling Dashboard"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19188:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/JobSchedulingUpdateLocalTests-70b771c427ac50c911b66cd17038f2a2.png"},35540:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/UpdateLocalTestsFlow-53e35e0e69d1348c8ab798b184e42ba9.png"},4552:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>r});var n=s(11504);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);