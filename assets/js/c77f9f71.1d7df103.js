"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[32432],{64588:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(17624),t=i(4552);const r={sidebar_position:2},d="Blueprints",l={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints",title:"Blueprints",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Login",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login"},next:{title:"Blueprint Identifier",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-identifier"}},o={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"blueprints",children:"Blueprints"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Gets a list of all the public blueprints associated with the user's domain. Returns blueprint details related to the user's domain and permissions, such as the blueprint GUID and the actions that can be performed on each blueprint."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:'In CloudShell Portal, make sure to set the blueprints to "Public" as the API does not work with private blueprints.'})}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/blueprints"})}),"\n",(0,s.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsxs)(n.p,{children:["Example header format for the ",(0,s.jsx)(n.code,{children:"blueprints"})," method:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"blueprints"})," method returns a list of all the blueprints associated with the user's domain and permissions and the actions that can be performed on the individual blueprints:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'   }{\n      "name":"WebApi",\n      "id":"c6abccb6-71eb-423b-b754-477c11d6bc2a",\n      "description":null,\n      "availability":"Not Available",\n      "categories":[\n         \n      ],\n      "estimated_setup_duration":"PT25M""_links":{\n         "self":{\n            "href":"/blueprints/c6abccb6-71eb-423b-b754-477c11d6bc2a",\n            "method":"GET",\n            "name":"get a blueprint\'s details",\n            "templated":true\n         },\n         "all":{\n            "href":"/blueprints",\n            "method":"GET",\n            "name":"get available blueprints according to the user domain"\n         },\n         "create_sandbox":{\n            "href":"/blueprints/c6abccb6-71eb-423b-b754-477c11d6bc2a/start",\n            "method":"POST",\n            "name":"create a sandbox from the blueprint",\n            "templated":true\n         }\n      }\n   }\n]\n'})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Response summary"}),(0,s.jsxs)(n.p,{children:["The response output properties of the ",(0,s.jsx)(n.code,{children:"blueprints"})," method are described in the following table."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Sub Property"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The name of the blueprint. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"id"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The ID of the blueprint. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["A short description about the blueprint. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"availability"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The availability of the blueprint. ",(0,s.jsx)("br",{})," Possible values:\xa0Available Now, Not Available. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"categories"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The categories assigned to the blueprint. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"estimated_setup_duration"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"The estimated setup duration of the sandbox. The estimated duration's value is specified in ISO 8601 format."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_links"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"The actions that can be performed on the blueprints in the user's domain:"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"self"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get the blueprint's details via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"all"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get all available blueprints according to the user's domain via a ",(0,s.jsx)(n.code,{children:"GET"})," request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"create_sandbox"})}),(0,s.jsxs)(n.td,{children:["Provides a link to create a sandbox from the blueprint via a ",(0,s.jsx)(n.code,{children:"POST"})," request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>d});var s=i(11504);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);