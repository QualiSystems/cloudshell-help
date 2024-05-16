"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[13860],{51972:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=t(17624),r=t(4552);const n={sidebar_position:16},d="Get Test Discovery Services",c={id:"api-guide/new-jss-rest-api/get-test-discovery-services",title:"Get Test Discovery Services",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-test-discovery-services.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/get-test-discovery-services",permalink:"/api-guide/new-jss-rest-api/get-test-discovery-services",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-test-discovery-services.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Delete Test Discovery Service",permalink:"/api-guide/new-jss-rest-api/delete-test-discovery-service"},next:{title:"Delete Test Execution Service",permalink:"/api-guide/new-jss-rest-api/delete-test-execution-service"}},o={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const s={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"get-test-discovery-services",children:"Get Test Discovery Services"}),"\n",(0,i.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Gets all registered Test Discovery Services, including each server's details (server id, address, name, etc.)."}),"\n",(0,i.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"http://{Job Scheduling API IP}:{port#}/api/DiscoveryServer"})}),"\n",(0,i.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"GET"})}),"\n",(0,i.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(s.p,{children:"Example header format:"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'[\n  {\n    "id": "df80242a-0372-46f7-b2cb-6766cd343c4b",\n    "address": "test-discovery-service-svc",\n    "name": "Robot Discovery Service",\n    "description": "Robot Discovery Service",\n    "testTypeName": "robot",\n    "isOnline": true,\n    "repository": {\n      "url": "",\n      "displayName": "ROBOT Tests"\n    }\n  }\n]\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Response summary"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"id"}),(0,i.jsx)(s.td,{children:"Test Discovery Service id. (guid)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"Test Discovery Service address. (string)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"name"}),(0,i.jsx)(s.td,{children:"Test Discovery Service name. (string)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"description"}),(0,i.jsx)(s.td,{children:"Test Discovery Service description, if defined. (string)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"testTypeName"}),(0,i.jsxs)(s.td,{children:["Test Discovery Service's supported test type. (string)",(0,i.jsx)("br",{}),"For example, Robot."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isOnline"}),(0,i.jsx)(s.td,{children:"Whether the Test Discovery Service is currently online. (bool)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"repository"}),(0,i.jsxs)(s.td,{children:["Details of the online test repository associated to this Test Discovery Server.",(0,i.jsx)("br",{}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(s.strong,{children:"url"}),": Online test repository URL. (string)"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(s.strong,{children:"displayName"}),": Name of the online test repository. (string)"]})]})]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>c,M:()=>d});var i=t(11504);const r={},n=i.createContext(r);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);