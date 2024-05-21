"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[87416],{70940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var i=t(17624),s=t(4552);const o={sidebar_position:6},d="Comparison Between Cloudshell's Job Scheduling Offerings",l={id:"jss/comparison-with-1st-gen-job-scheduling",title:"Comparison Between Cloudshell's Job Scheduling Offerings",description:"This article lists special considerations, known issues and limitations with the New Job Scheduling, and provides a comparison between the two Job Scheduling offerings.",source:"@site/versioned_docs/version-2023.3/jss/comparison-with-1st-gen-job-scheduling.md",sourceDirName:"jss",slug:"/jss/comparison-with-1st-gen-job-scheduling",permalink:"/jss/comparison-with-1st-gen-job-scheduling",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/jss/comparison-with-1st-gen-job-scheduling.md",tags:[],version:"2023.3",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Job Scheduling Data",permalink:"/jss/job-scheduling-data"},next:{title:"CloudShell Administration",permalink:"/category/cloudshell-administration"}},a={},r=[];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"comparison-between-cloudshells-job-scheduling-offerings",children:"Comparison Between Cloudshell's Job Scheduling Offerings"}),"\n",(0,i.jsx)(n.p,{children:"This article lists special considerations, known issues and limitations with the New Job Scheduling, and provides a comparison between the two Job Scheduling offerings."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'For brevity, the term "Job Scheduling (1st Gen)" denotes the original Job Scheduling which is accessed via CloudShell Portal.'})}),"\n",(0,i.jsxs)(n.p,{children:["For a comparison of the APIs\xa0provided for the new and original Job Scheduling, see ",(0,i.jsx)(n.a,{href:"/api-guide/new-jss-rest-api/api-support-for-jss-and-js",children:"API Support for New Job Scheduling and Job Scheduling (1st Gen)"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\xa0"}),(0,i.jsx)(n.th,{children:"New Job Scheduling"}),(0,i.jsx)(n.th,{children:"Job Scheduling (1st Gen)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"General"}),(0,i.jsx)(n.td,{children:"Kubernetes-based, supports different testing frameworks (Robot is supported out-of-the-box), capable of hundreds of concurrent executions, uses an external web portal and has a dedicated RESTful API and live documentation page."}),(0,i.jsx)(n.td,{children:"Supports TestShell Studio test, provided as a dashboard within CloudShell Portal and uses CloudShell's RESTful Quali API."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Email notifications"}),(0,i.jsx)(n.td,{children:"Planned"}),(0,i.jsx)(n.td,{children:"Available"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Behavior in Maintenance Window"}),(0,i.jsx)(n.td,{children:"Only admins can log into Job scheduling Portal and execute suites during the Maintenance Window. Suites that were set to run automatically would be executed even if their start time is within the Maintenance Window."}),(0,i.jsxs)(n.td,{children:["Only admins can log into CloudShell Portal and execute suites. Suites that were set to run automatically would only be executed if the start time is outside the Maintenance Window. For details, see ",(0,i.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/maintenance-window",children:"Maintenance Window"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Licensing"}),(0,i.jsx)(n.td,{children:"New Job Scheduling is a paid add-on."}),(0,i.jsx)(n.td,{children:"1st Gen Job Scheduling is a paid add-on."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>d});var i=t(11504);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);