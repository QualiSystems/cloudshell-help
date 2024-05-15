"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3400],{16204:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var n=o(17624),i=o(4552);const t={sidebar_position:11},s='"Error: A bulk write operation resulted in one or more errors"',l={id:"troubleshooting/installation/error-a-bulk-write-operation-resulted-in-one-or-more-errors",title:'"Error: A bulk write operation resulted in one or more errors"',description:"Error message",source:"@site/versioned_docs/version-2023.3/troubleshooting/installation/error-a-bulk-write-operation-resulted-in-one-or-more-errors.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/error-a-bulk-write-operation-resulted-in-one-or-more-errors",permalink:"/cloudshell-help/troubleshooting/installation/error-a-bulk-write-operation-resulted-in-one-or-more-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/installation/error-a-bulk-write-operation-resulted-in-one-or-more-errors.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:'Quali Server Configuration Wizard Fails in "Search Engine health check" Stage',permalink:"/cloudshell-help/troubleshooting/installation/quali-server-configuration-wizard-fails-in-search-engine-health-check-stage"},next:{title:"Older 3rd-party Installations Causing CloudShell Installation to Fail",permalink:"/cloudshell-help/troubleshooting/installation/older-3rd-party-installations-causing-cloudshell-installation-to-fail"}},a={},u=[{value:"Error message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const r={admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"error-a-bulk-write-operation-resulted-in-one-or-more-errors",children:'"Error: A bulk write operation resulted in one or more errors"'}),"\n",(0,n.jsx)(r.h2,{id:"error-message",children:"Error message"}),"\n",(0,n.jsx)(r.p,{children:'Error message containing "A bulk write operation resulted in one or more errors.". For example:'}),"\n",(0,n.jsx)(r.admonition,{type:"danger-one-line",children:(0,n.jsx)(r.p,{children:"ERROR QualiSystems.Infrastructure.NHibernate.Transactions - Transaction commit failed with the following error A bulk write operation resulted in one or more errors."})}),"\n",(0,n.jsx)(r.admonition,{type:"danger-one-line",children:(0,n.jsx)(r.p,{children:"Trying to rollback. - MongoDB.Driver.MongoBulkWriteException`1[MongoDB.Bson.BsonDocument]: A bulk write operation resulted in one or more errors."})}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"When migrating the Quali DB from one Quali Server to another, the a above errors may occur."}),"\n",(0,n.jsx)(r.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,n.jsx)(r.p,{children:"During migration, CloudShell detected a scenario where the MongoDB had records that were related to reservation that did not exist in the newly migrated Quali SQL DB. This usually happens because there is a gap between pulling database dumps."}),"\n",(0,n.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"To resolve this issue:"})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Move the Mongo DB in the new Quali Server environment."}),"\n",(0,n.jsx)(r.li,{children:"Move the SQL\xa0Server - Quali DB."}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,r,o)=>{o.d(r,{I:()=>l,M:()=>s});var n=o(11504);const i={},t=n.createContext(i);function s(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);