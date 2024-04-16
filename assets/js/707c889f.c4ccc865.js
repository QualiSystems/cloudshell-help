"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[76120],{60944:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var s=i(17624),n=i(4552);const o={sidebar_position:8},l="Associating JIRA Issues with Test Executions",c={id:"portal/job-scheduling/associate-jira-issues-with-test-executions",title:"Associating JIRA Issues with Test Executions",description:"This feature requires JIRA Integration with CloudShell.",source:"@site/docs/portal/job-scheduling/associate-jira-issues-with-test-executions.md",sourceDirName:"portal/job-scheduling",slug:"/portal/job-scheduling/associate-jira-issues-with-test-executions",permalink:"/cloudshell-help/next/portal/job-scheduling/associate-jira-issues-with-test-executions",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/job-scheduling/associate-jira-issues-with-test-executions.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Setting the Test Execution Report Template for Automation Suite Tests",permalink:"/cloudshell-help/next/portal/job-scheduling/view-execution-history/view-test-reports/setting-test-execution-report-template"},next:{title:"CloudShell API Guide",permalink:"/cloudshell-help/next/api-guide"}},a={},r=[{value:"Creating and associating JIRA defects to a test execution",id:"creating-and-associating-jira-defects-to-a-test-execution",level:2},{value:"Viewing a test execution&#39;s JIRA defects",id:"viewing-a-test-executions-jira-defects",level:2},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"associating-jira-issues-with-test-executions",children:"Associating JIRA Issues with Test Executions"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["This feature requires ",(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Jira-Intg.htm",children:"JIRA Integration with CloudShell"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"This article explains how to associate a CloudShell test's execution with a JIRA issue. This includes associating a test execution with an existing Jira issue or creating a new JIRA bug on-the-fly for a test execution. This is useful if you want to use your JIRA platform to manage the troubleshooting process of failed CloudShell tests."}),"\n",(0,s.jsx)(t.h2,{id:"creating-and-associating-jira-defects-to-a-test-execution",children:"Creating and associating JIRA defects to a test execution"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To create or associate a JIRA defect to a test execution:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In CloudShell Portal, switch to the domain that has the JIRA project ID as the name."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Job Scheduling"})," dashboard, in the ",(0,s.jsx)(t.strong,{children:"Execution"})," page, expand the automation suite."]}),"\n",(0,s.jsx)(t.p,{children:'For example, a "Traffic Test Suite" automation suite containing two executions:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(58116).c+"",width:"1170",height:"412"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click the suitable automation suite execution."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click a job to display the job's test executions."}),"\n",(0,s.jsx)(t.p,{children:'For example, a "Traffic Test Job" containing two test executions:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(36052).c+"",width:"1166",height:"629"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Perform the appropriate procedure:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To create a new Jira bug for the test execution:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.img,{src:i(65112).c+"",width:"14",height:"14"})," button next to the suitable test execution."]}),"\n",(0,s.jsx)(t.p,{children:"Jira opens in a new browser tab, displaying the new bug with general details relating to the CloudShell automation suite. This includes the job and test, CloudShell user, a link to the sandbox ID (if the job had one), and links to the test execution's job and execution report in the bug's description."}),"\n",(0,s.jsx)(t.admonition,{title:"Important",type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"You will need to first log into JIRA if you do not have an open Jira session or if your CloudShell user does not exist in JIRA. If this happens, contact your administrator or log in if you have the credentials."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"As the JIRA site will open in a browser tab, make sure your browser is set to allow pop ups from this site."})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Furthermore, if your CloudShell user is missing from JIRA, CloudShell will not be able to fill in the ",(0,s.jsx)(t.strong,{children:"Reporter"})," field in the JIRA bug."]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Optionally, fill in additional details and create the bug."}),"\n",(0,s.jsx)(t.p,{children:"The bug is added to JIRA and associated to the test execution."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Optionally, fill in additional details and create the bug."}),"\n",(0,s.jsx)(t.p,{children:"The bug is added to JIRA and associated to the test execution."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Repeat to create additional JIRA bugs for this test execution."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To associate an existing JIRA issue to the test execution:"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.img,{src:i(75236).c+"",width:"18",height:"17"})," button next to the suitable test execution."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Linked Issues"})," dialog box that is displayed, enter the issue's ID and click ",(0,s.jsx)(t.strong,{children:"Link"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(60864).c+"",width:"316",height:"337"})}),"\n",(0,s.jsx)(t.p,{children:"The JIRA issue is associated to the test execution."}),"\n",(0,s.jsx)(t.p,{children:"Note: The JIRA issue now includes links to the test execution's job and execution report, and the CloudShell test execution includes a link back to the JIRA issue."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Repeat to associate additional JIRA issues to this test execution."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"viewing-a-test-executions-jira-defects",children:"Viewing a test execution's JIRA defects"}),"\n",(0,s.jsx)(t.p,{children:"To view the JIRA defects that are associated to a test execution:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the Job Scheduling dashboard, in the Execution page, expand the automation suite."}),"\n",(0,s.jsx)(t.p,{children:'For example, a "Traffic Test Suite" automation suite containing two executions:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(58116).c+"",width:"1170",height:"412"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click the suitable automation suite execution."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click a job to display the job's test executions."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.img,{src:i(75236).c+"",width:"18",height:"17"})," button next to the suitable test execution."]}),"\n",(0,s.jsx)(t.p,{children:"The Linked Issues window is displayed, listing the defects that are associated to the test execution."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cloudshell-help/next/portal/job-scheduling/view-execution-history/",children:"Viewing Execution History"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cloudshell-help/next/portal/job-scheduling/view-execution-history/view-test-reports/",children:"Viewing Test Reports"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65112:(e,t,i)=>{i.d(t,{c:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVDhPbVKxTgJREHyFkvgh1BbwB0R6LSwoaCk1gdrEQmIjQmEIho5GG0MghNiY2JEgWBiNElT0QLgjyKGAHHfceLsCojDJJvtmdva93TuBBRi+vUE+PIQcDkNvNsfsX8wZtZcXPHu9KCwvo7C0hCePh7n/mDPeORxsuBKCg/I7p3Os/kLoioJmPI5Rt8tEwWabmqZmiyNolQrUdBrmYGAZWy2eZVitolcsQvL7cbu6On3qjd0OaXubtW4+DyUahalpEOZwiMbBAWo7O6jt7sI0DBZG/T4HdSeONCkQgJpK8e0841ephAeXC7osM0mo7+9DjkTGJ7BW3tiA0enwmY3UmbrNgkyzRgLVUC1BNI+PUVxZQXl9nYkJFhlLa2tcS56fG3s9VHw+FiegJdC2Z/G6tQVT1znn5byfnuJxcxOdbJZJwsfFBT4vL8cnsFZyu6FmMtZNI4hBuYx6MMidaPj+9TXn3VyOgxr3rU9B2tf9Pep7e/wbinYyic75OXelwWkuJRZD6+SEQzk6QiMUmi6FvrkmSRCGqvKME1ABdW4lEmifnXE+MRGMdtt6kY5vDcugjWBcUtkAAAAASUVORK5CYII="},36052:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/JiraDefectsInJobSchedulingDashboard-c685ceadb5227bc7a2382824caa6efc6.png"},58116:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/JiraExpandAutomationSuite-ef4c6adf7b22ec6e136938c9d427eb75.png"},75236:(e,t,i)=>{i.d(t,{c:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAIAAABfOGuuAAABOElEQVR42pWTwbFDYBSFnwqiA9JAJipgJnsTG9skHdhaYWnFzlJ0oAQqSFRAB6EC+eKf8V6EjHcX5l7O+e+557+kvu9/VkdRFGVZep4nrae1bZskSRiGcRz/g+b7fpZlruvati09Ho/L5cJJXwibzQaOpmnkaZqez2cpiiJZlsm+tzIMg6l0XWc8Son5jCHu93vXdZ8ERVGAooi8qqrdbvdGQ8Zsn8PhYJomU4BsmuZ6vb7RluThG+g8z5FzPB6nInn1KfJ0OkFgeMdx9vs9sCltqRtuoV9VVWHMWktGY2DO0JYsGS9AxC8N0Qy2ZlFAIupFu91uqLcsi4LR8YDnX6hYXxL8ZF0w9kUTOyla8wGp3IxwiLsKgqCua2ykVIcQZ01XGSjNt9ste+QPMat//g/Ih0DPRPAYT6QRyo/uat0xAAAAAElFTkSuQmCC"},60864:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/JiraViewLinkedDefectsWindow_316x337-75c2ca4434d91090040036247bd5d9c5.png"},4552:(e,t,i)=>{i.d(t,{I:()=>c,M:()=>l});var s=i(11504);const n={},o=s.createContext(n);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);