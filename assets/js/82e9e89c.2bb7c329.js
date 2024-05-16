"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25128],{69444:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(17624),t=i(4552);const l={sidebar_position:7},r="Customizing Email Notification Templates",o={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates",title:"Customizing Email Notification Templates",description:"CloudShell email notifications are based on HTML templates, which can be customized as appropriate.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates",permalink:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:'Resizing the value box of "text" global inputs',permalink:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs"},next:{title:"Save Sandbox Configurations",permalink:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations"}},a={},d=[{value:"Email templates",id:"email-templates",level:2},{value:"Job templates:",id:"job-templates",level:3},{value:"Reservation templates:",id:"reservation-templates",level:3},{value:"License templates:",id:"license-templates",level:3},{value:"Available variables",id:"available-variables",level:2},{value:"Reservation variables:",id:"reservation-variables",level:3},{value:"Job variables:",id:"job-variables",level:3},{value:"License variables:",id:"license-variables",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"customizing-email-notification-templates",children:"Customizing Email Notification Templates"}),"\n",(0,s.jsx)(n.p,{children:"CloudShell email notifications are based on HTML templates, which can be customized as appropriate."}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"note",children:(0,s.jsx)(n.p,{children:"Make backup copies of any templates you want to customize just in case you need to revert back. Upgrading CloudShell will override any custom templates you have so make sure to keep backups."})}),"\n",(0,s.jsxs)(n.p,{children:["These templates reside on the Quali Server machine at ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\EmailTemplates"})," and use a combination of text and CloudShell variables that pass information from CloudShell."]}),"\n",(0,s.jsx)(n.p,{children:'For example, the "Sandbox Ending" email template:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(24168).c+"",width:"960",height:"563"})}),"\n",(0,s.jsx)(n.p,{children:'The "Sandbox Ending" email notification:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(35748).c+"",width:"1243",height:"583"})}),"\n",(0,s.jsx)(n.h2,{id:"email-templates",children:"Email templates"}),"\n",(0,s.jsx)(n.h3,{id:"job-templates",children:"Job templates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JobExecutionEnded"}),": Emailed when a job's execution has finished."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JobExecutionEnding"}),": Emailed when a job's blueprint reaches overtime."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JobExecutionStarted"}),": Emailed when a job's execution starts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JobSuiteEnded"}),": Emailed when all of a suite's jobs have finished their execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JobSuiteStarted"}),": Emailed when a suite's execution starts."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reservation-templates",children:"Reservation templates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MultipleServersAreUsingTheDatabase"}),": When Quali Server detects that another Quali Server is already using the Quali SQL database, CloudShell sends this email and disables itself to prevent data consistency issues."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PermittedUserAddedToReservation"}),": Emailed to users when they are added as permitted users to an a sandbox."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationCanceled"}),": Emailed when the sandbox is canceled."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationEnded"}),": Emailed when the sandbox is torn down. Corresponds to the On end email notification defined on the sandbox."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationEnding"}),": Emailed before a sandbox begins teardown. Corresponds to the Before end email notification defined on the sandbox."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationPending"}),": Emailed when a future sandbox is reserved."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationRescheduled"}),": Emailed when a sandbox's duration has been modified."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationSetupCompleted"}),": Emailed when a sandbox's setup phase completes. Corresponds to the On setup complete email notification defined on the sandbox."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationStarted"}),": Emailed when a sandbox is reserved. Corresponds to the On start email notification defined on the sandbox."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"license-templates",children:"License templates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LicenseExtendedReservationLimitExceeded"}),": Emailed to users when their reservation request is rejected because they have reached their concurrent reservations limit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LicensePoolLimitExceeded"}),": Emailed to users when their reservation request is rejected because the domain's concurrent reservations limit has been reached."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LicenseReservationLimitExceeded"}),": Emailed to users who have reached their concurrent reservations limit."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"available-variables",children:"Available variables"}),"\n",(0,s.jsx)(n.h3,{id:"reservation-variables",children:"Reservation variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Now"}),": Time at which the email notification was sent."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationName"}),": Sandbox name."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationStartTime"}),": Time at which the sandbox was reserved."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TimeZone"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationMainTopology"}),": Blueprint on which the sandbox is based."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationLink / ReservationLinkHelp"}),": Used in the link to the sandbox workspace. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<a href="{{ReservationLink}}">{{ReservationLinkHelp}}</a>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationOwner"}),": Owner of the reservation. Reservation creator by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationId"}),": Sandbox ID"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationEndTimeWithTimeZoneOrPersistent"}),': Planned end time. "No end time" is displayed for persistent sandboxes.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationDescription"}),": Sandbox description."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationResources"}),": Details of the sandbox's resources."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationNumberOfResources"}),": Number of resources in the sandbox."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ReservationConflicts"}),": Resource conflicts that occurred when reserving the sandbox."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"job-variables",children:"Job variables:"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"For some of these variables, the information provided depends on the type of execution - job or suite."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SuiteName"}),": Automation suite name."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"JobName"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"StartDate"}),": Job/suite execution start date, depending on the notification."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EndDate"}),": Job/suite execution end date, depending on the notification."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),": Job/suite execution result, depending on the notification."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Owner"}),": Owner of the job or suite."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TriggeredBy"}),": Indicates how the Automation Suite was triggered: Manual (\u201cUser\u201d), API or Scheduled."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TopologyName"}),": Blueprint attached to the job."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TotalNumberOfTests"}),": Number of tests in the job."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"State"}),": Job's completion state."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),": Job/suite execution result. For details, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/job-scheduling/view-tests-job-suite-execution-results",children:"Viewing Test, Job and Suite Execution Results"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"FailureReason"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"JobSuitePage"}),": Link to the suite's execution page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"JobPageLink"}),": Used to build the link to the job''s execution page. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'To view job progress <a href="{{JobPageLink}}">click here</a>\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"license-variables",children:"License variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MessageTitle"}),': Title of the email notification. For example: "Reservations Limit Exceeded".']}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"ReservationOwner"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"ReservationName"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LimitExceededDate"}),": Date at which the concurrent reservation limit was reached."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LimitExceededTime"}),": Time at which the concurrent reservation limit was reached."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"TimeZone"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Domain"}),": Domain in which the limit was reached."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LicensePoolName"}),": Name of the domain's license pool, which indicates the domain's number of allowed concurrent reservations."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},35748:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/EmailNotificationExample-8657d044bbcfd38d96e61ea203720530.png"},24168:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/EmailNotificationTemplate-97ffcc4992c68020c3b8450dd0bb2e78.png"},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>r});var s=i(11504);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);