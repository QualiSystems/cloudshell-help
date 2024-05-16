"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[84252],{48900:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=o(17624),s=o(4552);const l={sidebar_position:3},n="Low Disk Space Due to Unusually Large ResourceUtilizationLog Table",r={id:"troubleshooting/insight/low-disk-space-due-to-unusually-large-resourceutilizationlog-table",title:"Low Disk Space Due to Unusually Large ResourceUtilizationLog Table",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/insight/low-disk-space-due-to-unusually-large-resourceutilizationlog-table.md",sourceDirName:"troubleshooting/insight",slug:"/troubleshooting/insight/low-disk-space-due-to-unusually-large-resourceutilizationlog-table",permalink:"/cloudshell-help/troubleshooting/insight/low-disk-space-due-to-unusually-large-resourceutilizationlog-table",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/insight/low-disk-space-due-to-unusually-large-resourceutilizationlog-table.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:'Insight dashboard error: "redirected you too many times."',permalink:"/cloudshell-help/troubleshooting/insight/insight-dashboard-error-redirected-you-too-many-times"},next:{title:"How to Migrate Sisense to a New Server",permalink:"/cloudshell-help/troubleshooting/insight/how-to-migrate-sisense-to-a-new-server"}},a={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"low-disk-space-due-to-unusually-large-resourceutilizationlog-table",children:"Low Disk Space Due to Unusually Large ResourceUtilizationLog Table"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/cloudshell-help/install-configure/cs-insight-bi/cs-insight-bi-elasticube-tables/elasticube-tables#resource-utilization-log",children:"Resource utilization log"})," is a table used for analytics, typically by CloudShell Insight. It helps you understand how much of your inventory resources are being used over time. Quali Server has a daily job that adds records to ResourceUtilizationLog. New data is appended to ResourceUtilizationLog, if it is later than the latest EntryDate in ResourceUtilizationLog."]}),"\n",(0,i.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(t.p,{children:"The best policy for trimming the database is to leave at least one entry in the log, latest as possible. This will ensure that the whole table does not get repopulated when the daily job runs."}),"\n",(0,i.jsx)(t.p,{children:"If you are using CloudShell Insight, you may want to leave 1-2 years in the log (or as needed). Otherwise, trim it down completely except for the latest row as ordered by EntryDate desc, as Insight db is typically only used for analytics."}),"\n",(0,i.jsx)(t.p,{children:"Regardless of the size of the table, you should back up the DB before trimming the database, if possible."}),"\n",(0,i.jsxs)(t.p,{children:["For details, see ",(0,i.jsx)(t.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming",children:"Database Trimming"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>r,M:()=>n});var i=o(11504);const s={},l=i.createContext(s);function n(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);