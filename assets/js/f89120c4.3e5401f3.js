"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[5992],{79348:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=t(17624),n=t(4552);const o={sidebar_position:1},i="Setting Up a Test Repository",r={id:"install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo",title:"Setting Up a Test Repository",description:"Please take the following under consideration when setting up a test repository:",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-repository-config",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Repository Configuration",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config"},next:{title:"Associating Tests to Different Domains",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains"}},l={},a=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const A={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.h1,{id:"setting-up-a-test-repository",children:"Setting Up a Test Repository"}),"\n",(0,s.jsx)(A.p,{children:"Please take the following under consideration when setting up a test repository:"}),"\n",(0,s.jsxs)(A.ul,{children:["\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsx)(A.p,{children:"The test repository is a folder residing in an online Git repository (GitHub, GitLab or BitBucket). The test repository may contain subfolders, which have tests. When setting up a job, the suite designer is able to add tests from any folder within the defined test repository."}),"\n"]}),"\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsx)(A.p,{children:"Private (password-protected) and public test repositories are supported."}),"\n"]}),"\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsx)(A.p,{children:'In the New Job Scheduling, the term "test" is equivalent to a Robot suite (i.e. a single Robot file)'}),"\n"]}),"\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsx)(A.p,{children:"Only Robot Framework tests are supported."}),"\n"]}),"\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsx)(A.p,{children:"The New Job Scheduling does not currently support defining variables in external Python files."}),"\n"]}),"\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsx)(A.p,{children:"Test parameters of type string scalar are supported and can be modified when adding the tests to the job."}),"\n"]}),"\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsxs)(A.p,{children:["Tests are associated to domains via a ",(0,s.jsx)(A.code,{children:".cs_domains"})," configuration file. For details, see ",(0,s.jsx)(A.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains",children:"Associating Tests to Different Domains"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(A.li,{children:["\n",(0,s.jsxs)(A.p,{children:["Test requirements must be defined in a ",(0,s.jsx)(A.code,{children:"requirements.txt"})," file that resides in or above the folder containing the Robot tests."]}),"\n",(0,s.jsx)(A.p,{children:"The following line must be included in the file, along with the rest of the tests' dependencies:"}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-css",children:"robotframework == 3.2.2\n"})}),"\n",(0,s.jsx)(A.p,{children:"To use Robot Framework 4.x, use the following line instead:"}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-css",children:"robotframework == 4.1.3\n"})}),"\n",(0,s.jsxs)(A.p,{children:["Same as for shell and script virtual environments, virtual environments for jobs also use a ",(0,s.jsx)(A.code,{children:"requirements.txt"})," file. When running the first test of a job, the test execution server creates the virtual environment and installs the dependencies listed in the ",(0,s.jsx)(A.code,{children:"requirements.txt"})," file that is closest to that test for all of the tests in the job. In other words, the test execution server first looks for the ",(0,s.jsx)(A.code,{children:"requirements.txt"})," file in the test's folder, then checks the parent folder and moves up the folder hierarchy until it finds a ",(0,s.jsx)(A.code,{children:"requirements.txt"})," file. If the file cannot be found, the job's execution will fail. In addition, if a test in the job needs a package or dependency that is missing from the ",(0,s.jsx)(A.code,{children:"requirements.txt"})," file, that test's execution will fail."]}),"\n",(0,s.jsxs)(A.p,{children:["It is therefore important to properly design your test repository and the ",(0,s.jsx)(A.code,{children:"requirements.txt"})," files to be used. For example, you could set up a test repository that has two main folders, each containing a different ",(0,s.jsx)(A.code,{children:"requirements.txt"})," file for the tests within that main folder and its subfolders. Furthermore, when you set up a job, make sure to only select tests from the same main test folder."]}),"\n",(0,s.jsx)(A.p,{children:"For example:"}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{src:t(13268).c+"",width:"682",height:"254"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(A.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(A.ul,{children:["\n",(0,s.jsx)(A.li,{children:(0,s.jsx)(A.a,{href:"/cloudshell-help/jss/jss-portal/job-scheduling-page/managing-suites/create-suites",children:"Creating Suites"})}),"\n",(0,s.jsx)(A.li,{children:(0,s.jsx)(A.a,{href:"/cloudshell-help/jss/jss-portal/job-scheduling-servers/test-repositories",children:"Test Repositories Dashboard"})}),"\n"]})]})}function f(e={}){const{wrapper:A}={...(0,n.M)(),...e.components};return A?(0,s.jsx)(A,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},13268:(e,A,t)=>{t.d(A,{c:()=>s});const s="data:image/png;base64,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"},4552:(e,A,t)=>{t.d(A,{I:()=>r,M:()=>i});var s=t(11504);const n={},o=s.createContext(n);function i(e){const A=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function r(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:A},e.children)}}}]);