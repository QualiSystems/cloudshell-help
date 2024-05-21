"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[92916],{66268:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=n(17624),t=n(4552);const r={sidebar_position:4},o="Behavior Changes and Removed Capabilities",d={id:"release-notes/behavior-change",title:"Behavior Changes and Removed Capabilities",description:"Behavior Changes",source:"@site/versioned_docs/version-2023.3/release-notes/behavior-change.md",sourceDirName:"release-notes",slug:"/release-notes/behavior-change",permalink:"/release-notes/behavior-change",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/release-notes/behavior-change.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bugs Fixed",permalink:"/release-notes/bug-fixes"},next:{title:"Known Limitations",permalink:"/release-notes/known-limitations"}},l={},a=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"behavior-changes-and-removed-capabilities",children:"Behavior Changes and Removed Capabilities"}),"\n",(0,i.jsx)(s.h2,{id:"behavior-changes",children:"Behavior Changes"}),"\n",(0,i.jsx)(s.p,{children:"The following list includes changes in behavior introduced into CloudShell by version:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Capability"}),(0,i.jsx)(s.th,{children:"Change Description"}),(0,i.jsx)(s.th,{children:"Changed in Release"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Erlang version"}),(0,i.jsxs)(s.td,{children:["To accomodate the upgraded RabbitMQ version (3.12.0) explained in ",(0,i.jsx)(s.a,{href:"#breaking-changes",children:"Breaking Changes"}),", Erlang will be upgraded to newer version 25.2.3. This version is the maximum supported Erlang for RabbitMq 3.12.0. Environment variables will be updated accordingly to suite the new Erlang version."]}),(0,i.jsx)(s.td,{children:"2023.2 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Python versions"}),(0,i.jsxs)(s.td,{children:["In 2022.1, we updated CloudShell's Python versions as follows: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"2.7.10 to 2.7.18"}),(0,i.jsx)("li",{children:"3.7.1 to 3.9.9"})]})," This may cause unexpected behavior if your automation is constrained to use specific Python versions."]}),(0,i.jsx)(s.td,{children:"2022.1 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"API tokens"}),(0,i.jsxs)(s.td,{children:["To increase security and to allow time-based token access to the system, CloudShell 2022.1 generates a time-based token for our product APIs. In previous versions, only some of the APIs used such a system. By default, the token validity period is 5 hours. Notes: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"For security reasons, we recommend upgrading to the latest version of CloudShell."}),(0,i.jsx)("li",{children:" Existing automation code utilizing Quali API may need to be updated to regenerate a token whenever an existing token expires."})]})]}),(0,i.jsx)(s.td,{children:"2022.1 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Reserve form"}),(0,i.jsx)(s.td,{children:"The Blueprint Name field in the Reserve form is no longer editable."}),(0,i.jsx)(s.td,{children:"2022.1 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"New Job Scheduling"}),(0,i.jsxs)(s.td,{children:["In this CloudShell version, the Test Execution Servers use Robot Framework 4.0. As such, tests using an older version of the framework might not work as expected. For details, see this ",(0,i.jsx)(s.a,{href:"https://github.com/robotframework/robotframework/blob/master/doc/releasenotes/rf-4.0.rst#backwards-incompatible-changes",children:"section"})," in the Robot Framework 4.0 release notes."]}),(0,i.jsx)(s.td,{children:"2022.1 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Updated BI dashboards"}),(0,i.jsx)(s.td,{children:"The following out-of-the-box dashboards will be replaced by the new 2021.2 GA version (customized out-of-the-box dashboards will be left as is): Blueprints, Inventory, Sandboxes, Users, and Utilization. Viewer access is provided out-of-the-box, allowing CloudShell users to view and use the dashboards. Initial configuration, as well as the ability to add/customize dashboards and use legacy versions requires privileged access. For details, contact your Quali Account Manager."}),(0,i.jsx)(s.td,{children:"2021.2 GA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"New Job Scheduling"}),(0,i.jsxs)(s.td,{children:["For security reasons, the Mongo deployment is no longer accessible outside the Kubernetes cluster and as a result does not get an external IP. However, external access can easily be configured using the ",(0,i.jsx)(s.code,{children:"externalAccess"})," tag n the mongodb section of the customer-values-yaml. For details, see Upgrade Considerations for New Job Scheduling."]}),(0,i.jsx)(s.td,{children:"2021.2 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"New Job Scheduling"}),(0,i.jsxs)(s.td,{children:["Before upgrading from an earlier version, make sure to run the following on the Kubernetes client machine: ",(0,i.jsx)("pre",{children:"kubectl delete secret cloudshell-acr -n cloudshell"})]}),(0,i.jsx)(s.td,{children:"2021.2 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"New Job Scheduling"}),(0,i.jsx)(s.td,{children:"Job Scheduling Service needs to be restarted after 2021.2 EA upgrade. This only applies to 2021.2 EA version and will be fixed for the GA."}),(0,i.jsx)(s.td,{children:"2021.2 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Blocking the option to link license pool to global domain"}),(0,i.jsx)(s.td,{children:"When a user tries to attach a license pool to the Global domain they will now get a message stating that pools can't be associated with the global domain. This does not apply to existing associations of license pools with Global domain."}),(0,i.jsx)(s.td,{children:"2021.2 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Periods no longer supported in abstract resource names"}),(0,i.jsx)(s.td,{children:"Abstract resource names no longer support '.' (period) characters. Furthermore, importing blueprints will replace periods with underscores '_' in abstract resource names."}),(0,i.jsx)(s.td,{children:"2020.2"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"New CloudShell installation prerequisites"}),(0,i.jsxs)(s.td,{children:["As of version 2020.2 we are moving some of our Sandbox related data to be managed and stored in Mongo DB instead of SQL Server. This allows CloudShell to drastically improve its performance, allowing hundreds of Sandbox reservation per minute. ",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[" 2 new prerequisites are installed on Quali Sever: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" MongoDB "}),(0,i.jsx)("li",{children:" RabbitMQ "})]})]}),(0,i.jsxs)("li",{children:[" Quali Server's Installation Wizard and ",(0,i.jsx)(s.strong,{children:"QsConfig"})," have gone through some changes. "]})]})," New screens and some updated to existing screens have been added to the flow."]}),(0,i.jsx)(s.td,{children:"2020.2 GA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"DB optimizations clean-ups"}),(0,i.jsx)(s.td,{children:"Data expiration is defined by default to be saved indefinitely. Admins can now define the time to keep sandbox event log data via the SandboxLogAndOutputSaveDuration configuration key."}),(0,i.jsx)(s.td,{children:"2020.2 GA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'"In Use" Sandbox overtime'}),(0,i.jsxs)(s.td,{children:["When using Job Scheduling, sandboxes will now end once all tests in the job are completed or the sandbox reaches its defined duration (the earlier of the two). This applies also to sandboxes that include L1 switches or use an ",(0,i.jsx)(s.em,{children:"ActivateTopology"})," APImethod."]}),(0,i.jsx)(s.td,{children:"9.3 GA Patch 5"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,i.jsx)(s.p,{children:"The following list includes capabilities that have been removed from CloudShell and the version number in which the change was introduced."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Capability"}),(0,i.jsx)(s.th,{children:"Change Description"}),(0,i.jsx)(s.th,{children:"Changed in Release"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RabbitMQ upgrade and new location"}),(0,i.jsxs)(s.td,{children:["The embedded RabbitMQ will be upgraded to version 3.12.0 and relocated from \u2026\\Cloudshell\\Server\\SandboxService\\RabbitMq\\rabbitmq_server\\ to \u2026\\Cloudsell\\Server\\Rabbit. ",(0,i.jsx)("br",{})," Any custom settings like password must be manually relocated to the new destination files. Previous versions of RabbitMQ can be uninistalled."]}),(0,i.jsx)(s.td,{children:"2023.2 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Partial search in sandboxes dashboard"}),(0,i.jsxs)(s.td,{children:["The ",(0,i.jsx)(s.strong,{children:"Sandboxes"})," dashboard does not support searching by partial sandbox id."]}),(0,i.jsx)(s.td,{children:"2021.2 EA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Blueprint Build Type - Deprecation"}),(0,i.jsxs)(s.td,{children:["It is no longer possible to reserve blueprints of type ",(0,i.jsx)(s.em,{children:"Build"}),"."]}),(0,i.jsx)(s.td,{children:"2020.2 GA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Licensing"}),(0,i.jsxs)(s.td,{children:["As of version 9.3, customers that have a Team Tier license will not be able to:  ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" 1.  Have more than 50 concurrent licenses "}),(0,i.jsx)("li",{children:" 2.  Use white labeling "}),(0,i.jsx)("li",{children:" 3.  SSO to the system "})]})]}),(0,i.jsx)(s.td,{children:"9.3 GA"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Licensing"}),(0,i.jsx)(s.td,{children:"Customers that will not have a job scheduling add-on license will not see the job scheduling tab in the portal, and will not be able to start jobs using API calls."}),(0,i.jsx)(s.td,{children:"9.3 GA"})]})]})]})]})}function c(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>d,M:()=>o});var i=n(11504);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);