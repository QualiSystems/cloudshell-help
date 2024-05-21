"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56e3],{44308:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(17624),n=s(4552);const r={sidebar_position:8},d="Get suite templates",l={id:"api-guide/new-jss-rest-api/get-suite-templates",title:"Get suite templates",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-suite-templates.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/get-suite-templates",permalink:"/api-guide/new-jss-rest-api/get-suite-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-suite-templates.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Stop job execution",permalink:"/api-guide/new-jss-rest-api/stop-job-execution"},next:{title:"Delete suite template",permalink:"/api-guide/new-jss-rest-api/delete-suite-template"}},a={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"get-suite-templates",children:"Get suite templates"}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets a basic summary of all suite templates in a specific domain."}),"\n",(0,i.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteTemplate/Summary"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description/Comments"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"space_name"}),(0,i.jsx)(t.td,{children:"CloudShell domain in which the suite was executed. (string)"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET"})}),"\n",(0,i.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(t.p,{children:"Example header format:"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'[\n  {\n    "id": "b25d72e0-4f44-4b62-949c-02596196b157",\n    "name": "Hardware Network Test",\n    "description": "",\n    "ownerName": "admin",\n    "ownerUsername": "admin",\n    "createdDate": "2020-10-28T10:30:19.122Z",\n    "modifiedDate": "2020-10-28T11:10:07.78Z"\n  }\n]\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response summary"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description/Comments"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsx)(t.td,{children:"Suite template id. (guid)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"Suite template name. (string)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"description"}),(0,i.jsx)(t.td,{children:"Suite template description, if defined. (string)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ownerName"}),(0,i.jsx)(t.td,{children:"First and last name of the CloudShell user who owns the suite. (string)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ownerUserName"}),(0,i.jsx)(t.td,{children:"CloudShell username who owns the suite. (string)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"createdDate"}),(0,i.jsx)(t.td,{children:"Suite template creation time. (ISO 8601 Date/Time format)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"modifiedDate"}),(0,i.jsx)(t.td,{children:"Last modification time of suite template. (ISO 8601 Date/Time format)"})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>d});var i=s(11504);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);