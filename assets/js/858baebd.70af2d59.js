"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25004],{74932:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=s(17624),t=s(4552);const l={sidebar_position:39},r="Edit license pool",d={id:"api-guide/cs-admin-rest-api/edit-license-pool",title:"Edit license pool",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/edit-license-pool.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/edit-license-pool",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-license-pool",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/edit-license-pool.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,sidebarPosition:39,frontMatter:{sidebar_position:39},sidebar:"tutorialSidebar",previous:{title:"Create license pool",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-license-pool"},next:{title:"Delete license pool",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-license-pool"}},o={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"edit-license-pool",children:"Edit license pool"}),"\n",(0,n.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Edit a license pool's details.."}),"\n",(0,n.jsx)(i.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"http://{Admin API IP}:{port#}/api/v1/licensepools/{id}"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Description/Comments"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"id"}),(0,n.jsxs)(i.td,{children:["(string) License pool's id. Can be retrieved via ",(0,n.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-license-pools",children:"Get all license pools"}),"."]})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"PUT"})}),"\n",(0,n.jsx)(i.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(i.p,{children:"Example header format:"}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Request body"}),(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Description/Comments"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Name"}),(0,n.jsx)(i.td,{children:"(bool) License pool name."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsx)(i.td,{children:"(string) License pool's password"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"MaxConcurrentReservation"}),(0,n.jsx)(i.td,{children:"(int) Maximum number of licenses (sandbox reservations) allowed by the license pool."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Domains"}),(0,n.jsx)(i.td,{children:"(string) List of domain ids to add the license pool to."})]})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Request example"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:'{\n    "Name": "Test license pool",\n    "Description": "license pool for testing",\n    "MaxConcurrentReservation": 3,\n    "Domains": ["985c3306-fad7-4e85-a4e3-c44876149657"]\n}\n'})})]}),"\n",(0,n.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Response code"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},4552:(e,i,s)=>{s.d(i,{I:()=>d,M:()=>r});var n=s(11504);const t={},l=n.createContext(t);function r(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);