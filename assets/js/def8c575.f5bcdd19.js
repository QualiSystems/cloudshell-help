"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[60172],{51452:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=n(17624),t=n(4552);const i={sidebar_position:31},d="Edit user",a={id:"api-guide/cs-admin-rest-api/edit-user",title:"Edit user",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/edit-user.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/edit-user",permalink:"/api-guide/cs-admin-rest-api/edit-user",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/edit-user.md",tags:[],version:"2023.3",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"Create user",permalink:"/api-guide/cs-admin-rest-api/create-user"},next:{title:"Delete user",permalink:"/api-guide/cs-admin-rest-api/delete-user"}},l={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"edit-user",children:"Edit user"}),"\n",(0,r.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Edit a user's details.."}),"\n",(0,r.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/users/{id}"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description/Comments"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsxs)(s.td,{children:["(string) User's id. Can be retrieved via ",(0,r.jsx)(s.a,{href:"/api-guide/cs-admin-rest-api/get-all-users",children:"Get all users"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"PUT"})}),"\n",(0,r.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(s.p,{children:"Example header format:"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Request body"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Username"}),(0,r.jsxs)(s.td,{children:["(bool) Username. ",(0,r.jsx)(s.em,{children:"Username cannot be modified."})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Password"}),(0,r.jsx)(s.td,{children:"(string) User's password"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Email"}),(0,r.jsx)(s.td,{children:"(string) User's email address."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IsActive"}),(0,r.jsxs)(s.td,{children:["(bool) ",(0,r.jsx)(s.strong,{children:"true"})," creates an active user."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IsAdmin"}),(0,r.jsxs)(s.td,{children:["(bool) ",(0,r.jsx)(s.strong,{children:"true"})," creates a system administrator."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"GroupIds"}),(0,r.jsx)(s.td,{children:"(string) Comma-separated list of group ids to add the user to."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TimeZoneInfold"}),(0,r.jsx)(s.td,{children:"(string) User's time zone."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MaxReservationDuration"}),(0,r.jsx)(s.td,{children:"(int) Maximum allowed sandbox duration for the user (in days)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MaxConcurrentReservations"}),(0,r.jsx)(s.td,{children:"(int) Maximum number of sandboxes the user can own at any time.."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MaxScheduledSandboxes"}),(0,r.jsx)(s.td,{children:"(int) Maximum number of scheduled (planned/future) sandboxes the user can have at any time."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MaxOwnedBlueprints"}),(0,r.jsxs)(s.td,{children:["(int) Set the maximum of blueprints the user can own at any given time. Unlimited by default. ",(0,r.jsx)(s.em,{children:"This setting applies to admins, domain admins and regular users only."})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MaxSavedSandboxes"}),(0,r.jsxs)(s.td,{children:["(int) Maximum number of saved sandboxes the user can have at any time. Unlimited by default. ",(0,r.jsx)(s.em,{children:"Applies to customers using the Save and Restore add-on."})]})]})]})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Request example"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'{\n    "Username": "john m",\n    "Password": "a",\n    "Email": "user99@example.com",\n    "IsActive": true,\n    "IsAdmin": true,\n    "GroupIds": [-1],\n    "TimeZoneInfoId": "Israel Standard Time",\n    "MaxReservationDuration": -1,\n    "MaxConcurrentReservations": -1,\n    "MaxScheduledSandboxes": -1,\n    "MaxOwnedBlueprints": -1,\n    "MaxSavedSandboxes": -1\n}\n'})})]}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>d});var r=n(11504);const t={},i=r.createContext(t);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);