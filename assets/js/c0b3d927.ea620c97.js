"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6004],{81939:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var n=r(17624),i=r(4552);const o={sidebar_position:16},t="Remove resources from domain",d={id:"api-guide/cs-admin-rest-api/remove-resource-from-domain",title:"Remove resources from domain",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-resource-from-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/remove-resource-from-domain",permalink:"/api-guide/cs-admin-rest-api/remove-resource-from-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-resource-from-domain.md",tags:[],version:"2023.3",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Add resources to domain",permalink:"/api-guide/cs-admin-rest-api/add-resource-to-domain"},next:{title:"Get all groups",permalink:"/api-guide/cs-admin-rest-api/get-all-groups"}},c={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"remove-resources-from-domain",children:"Remove resources from domain"}),"\n",(0,n.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Removes resources/sub-resources from domain by id."}),"\n",(0,n.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/resources"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ID"}),(0,n.jsxs)(s.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,n.jsx)(s.a,{href:"/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"DELETE"})}),"\n",(0,n.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(s.p,{children:"Example header format:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Request body"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Id"}),(0,n.jsxs)(s.td,{children:["(string) Resource id (not ParentId). Can be retrieved via ",(0,n.jsx)(s.a,{href:"/api-guide/cs-admin-rest-api/get-domain-resources",children:"Get domain's resources"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RemoveAssocations"}),(0,n.jsxs)(s.td,{children:["(bool) Unbooks the resource in the domain. Default is ",(0,n.jsx)(s.strong,{children:"true"}),"."]})]})]})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Request example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n\n  "Resources": [\n    {\n      "Id": "<resource id>",\n      "RemoveAssociations": false\n    },\n    {\n      "Id": "<resource id>",\n      "RemoveAssociations": false\n    }\n  ]\n}\n'})})]}),"\n",(0,n.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Request example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Response code"}),(0,n.jsx)(s.p,{children:"200 OK"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>d,M:()=>t});var n=r(11504);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);