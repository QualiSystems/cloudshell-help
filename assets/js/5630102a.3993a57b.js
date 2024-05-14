"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[7612],{74192:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=l(17624),d=l(4552);const n={sidebar_position:17},r="Scheduling and Queuing",i={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/scheduling-and-queuing",title:"Scheduling and Queuing",description:"Job Scheduling is available as an add-on. For details, contact your account manager.",source:"@site/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/scheduling-and-queuing.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/scheduling-and-queuing",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/scheduling-and-queuing",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/scheduling-and-queuing.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Sandboxes",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/sandboxes"},next:{title:"Scheduling Commands",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/scheduling-commands"}},o={},c=[{value:"Set allowed job overtime before termination",id:"set-allowed-job-overtime-before-termination",level:2},{value:"Set number of recently completed jobs to display in the scheduler",id:"set-number-of-recently-completed-jobs-to-display-in-the-scheduler",level:2},{value:"Set the default job time buffer for extra time for tests, per job",id:"set-the-default-job-time-buffer-for-extra-time-for-tests-per-job",level:2},{value:"Lock a test for editing",id:"lock-a-test-for-editing",level:2},{value:"Admin unlock permission",id:"admin-unlock-permission",level:2},{value:"Set the default severity level for suite notification emails",id:"set-the-default-severity-level-for-suite-notification-emails",level:2},{value:"Set the report template to use for tests executed in the Job Scheduling dashboard",id:"set-the-report-template-to-use-for-tests-executed-in-the-job-scheduling-dashboard",level:2},{value:"Set the maximum number of steps for test reports",id:"set-the-maximum-number-of-steps-for-test-reports",level:2},{value:"Set the default Reporting Profile for automation suite jobs",id:"set-the-default-reporting-profile-for-automation-suite-jobs",level:2},{value:"Enable non-admin users to edit and create suite templates",id:"enable-non-admin-users-to-edit-and-create-suite-templates",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,d.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"scheduling-and-queuing",children:"Scheduling and Queuing"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Job Scheduling"})})," ",(0,s.jsx)(t.em,{children:"is available as an add-on. For details, contact your account manager."})]}),"\n",(0,s.jsxs)(t.p,{children:["For local tests configurations, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands#working-with-local-tests",children:"Working with local tests"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"set-allowed-job-overtime-before-termination",children:"Set allowed job overtime before termination"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="ExecutionJobDurationOvertimePercentage" value="20"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"Numeric (in percentage)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"10"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"set-number-of-recently-completed-jobs-to-display-in-the-scheduler",children:"Set number of recently completed jobs to display in the scheduler"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="NumberOfEndedExecutionJobSetsToDislpay" value="4"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"Numeric"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"2"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"set-the-default-job-time-buffer-for-extra-time-for-tests-per-job",children:"Set the default job time buffer for extra time for tests, per job"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="DefaultCaluclationBufferInMinutes" value="10"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"Numeric (in minutes)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"10"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"6.1 and above"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"lock-a-test-for-editing",children:"Lock a test for editing"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="EnableTestShellStudioAccessControl" value="True"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"True/False"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"False"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"7.1 and above"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"admin-unlock-permission",children:"Admin unlock permission"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="EnableAccessControlAdministration" value="False"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"True/False"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," TestShell Studio installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"False"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"TestShell Studio"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"7.1 and above"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"set-the-default-severity-level-for-suite-notification-emails",children:"Set the default severity level for suite notification emails"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="SuiteEmailNotificationDefaultSeverityLevel" value="ErrorsOnly"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"None, ErrorsOnly, SuiteAndErrors, All"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"ErrorsOnly"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"7.1 and above"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"set-the-report-template-to-use-for-tests-executed-in-the-job-scheduling-dashboard",children:"Set the report template to use for tests executed in the Job Scheduling dashboard"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"To set the default execution report template for tests that were executed in Remote Runner, see Specifying the default report template."})}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="DefaultReportTemplate" value="Test Steps"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"Test Results, Test Steps, Detailed Report, Failure Report"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"Test Results"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"Before 7.0"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"set-the-maximum-number-of-steps-for-test-reports",children:"Set the maximum number of steps for test reports"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="MaxReportStepCount" value="10000"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"Numeric"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Portal/TestShell installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"10000"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal, TestShell Studio and Runner"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"Before 7.0"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"set-the-default-reporting-profile-for-automation-suite-jobs",children:"Set the default Reporting Profile for automation suite jobs"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="LoggingProfile" value="Results"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Results, Measurements and Results, All, None"}),(0,s.jsxs)(t.p,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#setting-the-default-reporting-profile-for-automation-suite-jobs",children:"Setting the default Reporting Profile for automation suite jobs"}),"."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"Results"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"Before 7.0"})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"enable-non-admin-users-to-edit-and-create-suite-templates",children:"Enable non-admin users to edit and create suite templates"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Key"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:'<add key="AllowRegularUsersToEditSnQ" value="True"/>'})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Possible values"}),(0,s.jsx)("td",{children:"True/False"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Where to add/change"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Default value"}),(0,s.jsx)("td",{children:"False"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Affected CloudShell Component"}),(0,s.jsx)("td",{children:"CloudShell Portal"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Version"}),(0,s.jsx)("td",{children:"6.3 and above"})]})]})})]})}function a(e={}){const{wrapper:t}={...(0,d.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,t,l)=>{l.d(t,{I:()=>i,M:()=>r});var s=l(11504);const d={},n=s.createContext(d);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);