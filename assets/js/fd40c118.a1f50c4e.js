"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3952],{74943:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(17624),r=n(4552);const i={sidebar_position:30},d="Create user",a={id:"api-guide/cs-admin-rest-api/create-user",title:"Create user",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/create-user.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/create-user",permalink:"/api-guide/cs-admin-rest-api/create-user",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/create-user.md",tags:[],version:"2023.3",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Get user by ID",permalink:"/api-guide/cs-admin-rest-api/get-user-by-id"},next:{title:"Edit user",permalink:"/api-guide/cs-admin-rest-api/edit-user"}},o={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"create-user",children:"Create user"}),"\n",(0,t.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Creates a new user in CloudShell."}),"\n",(0,t.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/users"})}),"\n",(0,t.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"POST"})}),"\n",(0,t.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(s.p,{children:"Example header format:"}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Username"}),(0,t.jsx)(s.td,{children:"(bool) Username."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Password"}),(0,t.jsx)(s.td,{children:"(string) User's password"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Email"}),(0,t.jsx)(s.td,{children:"(string) User's email address."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"IsActive"}),(0,t.jsxs)(s.td,{children:["(bool) ",(0,t.jsx)(s.strong,{children:"true"})," creates an active user."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"IsAdmin"}),(0,t.jsxs)(s.td,{children:["(bool) ",(0,t.jsx)(s.strong,{children:"true"})," creates a system administrator."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"GroupIds"}),(0,t.jsx)(s.td,{children:"(string) Comma-separated list of group ids to add the user to."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TimeZoneInfold"}),(0,t.jsx)(s.td,{children:"(string) User's time zone."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MaxReservationDuration"}),(0,t.jsx)(s.td,{children:'(int) (Optional) Maximum allowed sandbox duration for the user (in minutes). Specify "-1" to use the default.'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MaxConcurrentReservations"}),(0,t.jsx)(s.td,{children:'(int) (Optional) Maximum number of sandboxes the user can own at any time. Specify "-1" to use the default.'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MaxScheduledSandboxes"}),(0,t.jsx)(s.td,{children:'(int) (Optional) Maximum number of scheduled (planned/future) sandboxes the user can have at any time. Specify "-1" to use the default.'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MaxOwnedBlueprints"}),(0,t.jsxs)(s.td,{children:['(int) (Optional) Maximum number of blueprints the user can own at any given time. Specify "-1" to use the default (unlimited) ',(0,t.jsx)(s.em,{children:"This setting applies to admins, domain admins and regular users only."})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MaxSavedSandboxes"}),(0,t.jsxs)(s.td,{children:["(int) (Optional) Maximum number of saved sandboxes the user can have at any time. Unlimited by default. ",(0,t.jsx)(s.em,{children:"Applies to customers using the Save and Restore add-on."}),' Specify "-1" to use the default.']})]})]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'{\n  "Username": "john m",\n  "Password": "1234",\n  "Email": "john@example.com",\n  "IsActive": true,\n  "IsAdmin": true,\n  "GroupIds": [\n    1\n  ],\n  "TimeZoneInfoId": "Israel Standard Time",\n  "MaxReservationDuration": 1,\n  "MaxConcurrentReservations": 2,\n  "MaxScheduledSandboxes": 2,\n  "MaxOwnedBlueprints": 2,\n  "MaxSavedSandboxes": 0\n}\n'})})]}),"\n",(0,t.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'{\n    "Id": 14\n}\n'})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"201 Created\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>d});var t=n(11504);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);