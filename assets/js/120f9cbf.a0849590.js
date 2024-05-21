"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[87392],{56988:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var d=n(17624),i=n(4552);const t={sidebar_position:6},r="Sandboxes",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",title:"Sandboxes",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Blueprint Start Persistent",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start-persistent"},next:{title:"Sandbox Identifier",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-identifier"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"sandboxes",children:"Sandboxes"}),"\n",(0,d.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(s.p,{children:"Gets a list of all the running and pending sandboxes (regular and persistent sandboxes) associated with the user's domain, as well as each sandbox's details, including the sandbox ID and the available actions that can be performed on it. It can also show completed sandboxes\xa0related to the user's domain."}),"\n",(0,d.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes"})}),"\n",(0,d.jsx)(s.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"GET"})}),"\n",(0,d.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Headers"}),(0,d.jsxs)(s.p,{children:["Example header format for the ",(0,d.jsx)(s.code,{children:"sandboxes"})," method:"]}),(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"Content-Type: application/json"})}),(0,d.jsx)(s.admonition,{type:"note",children:(0,d.jsxs)(s.p,{children:["To also include completed sandboxes in the response, add the parameter ",(0,d.jsx)(s.code,{children:"show_historic"})," to the request URL:\n",(0,d.jsx)(s.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes?show_historic=true"}),"\nThe default value for this parameter is ",(0,d.jsx)(s.code,{children:"false"}),"."]})})]}),"\n",(0,d.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.code,{children:"sandboxes"})," method returns a list of all the sandboxes and the actions that can be performed on each sandbox."]}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:'[\n   {\n      "name":"Test Blprnt2",\n      "id":"11491c80-6f79-4e9c-b592-78242c6dc698",\n      "description":"This is a list of sandboxes in this user domain",\n      "state":"Ready",\n      "blueprint":{\n         "name":"Test Blprnt2""id":"2f4c972b-5c64-4b08-bae4-73408d7b171d"\n      }"_links":{\n         "self":{\n            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698",\n            "method":"GET""</code><MadCap":"conditionalText MadCap":"conditions=""REST-API.REST API&#160;V1"">""name":"get a sandbox\' details",\n            "templated":"true</code></MadCap":"conditionalText><code class=""language-javascript"">"\n         },\n         "</code><MadCap":"conditionalText MadCap":"conditions=""REST-API.REST API&#160;V2"">""components":{\n            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698/components",\n            "method":"GET""</code></MadCap":"conditionalText>"\n         },\n         "stop":{\n            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698/stop",\n            "method":"POST""</code><MadCap":"conditionalText MadCap":"conditions=""REST-API.REST API&#160;V1"">""name":"stop a sandbox",\n            "templated":"true</code></MadCap":"conditionalText>"\n         },\n         "all":{\n            "href":"/sandboxes",\n            "method":"GET""</code></pre><pre xml":"space=""preserve"">""name":"get all sandboxes"\n         }\n      }\n   }\n]\n'})})]}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Response summary"}),(0,d.jsxs)(s.p,{children:["The response output properties of the ",(0,d.jsx)(s.code,{children:"sandboxes"})," method are described in the following table."]}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Property"}),(0,d.jsx)(s.th,{children:"Sub Property"}),(0,d.jsx)(s.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"name"})}),(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsxs)(s.td,{children:["The name of the sandbox. ",(0,d.jsx)(s.code,{children:"(string)"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"id"})}),(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsxs)(s.td,{children:["The ID of the sandbox. ",(0,d.jsx)(s.code,{children:"(string)"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"description"})}),(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsxs)(s.td,{children:["A text description of the sandbox. ",(0,d.jsx)(s.code,{children:"(string)"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"state"})}),(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsxs)(s.td,{children:["The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. ",(0,d.jsx)(s.code,{children:"(string)"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"blueprint"})}),(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsxs)(s.td,{children:["The details of the sandbox's blueprint ",(0,d.jsx)(s.code,{children:"(Array)"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"name"})}),(0,d.jsxs)(s.td,{children:["The name of the blueprint ",(0,d.jsx)(s.code,{children:"(string)"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"id"})}),(0,d.jsxs)(s.td,{children:["The id of the blueprint ",(0,d.jsx)(s.code,{children:"(string)"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"_links"})}),(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsx)(s.td,{children:"The actions that can be performed on a sandbox in the user's domain:"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"self"})}),(0,d.jsxs)(s.td,{children:["Provides a link to get a specific sandbox's details per specified sandbox ID via a ",(0,d.jsx)(s.code,{children:"GET"}),"\xa0request."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"components"})}),(0,d.jsxs)(s.td,{children:["Provides a link to get all components in a sandbox per specified sandbox ID, via a ",(0,d.jsx)(s.code,{children:"GET"}),"\xa0request."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"stop"})}),(0,d.jsxs)(s.td,{children:["Provides a link to end an active sandbox per specified sandbox\xa0ID via a ",(0,d.jsx)(s.code,{children:"POST"})," request."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\xa0"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"all"})}),(0,d.jsxs)(s.td,{children:["Provides a link to get all available sandboxes according to the user's domain via a ",(0,d.jsx)(s.code,{children:"GET"})," request."]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>r});var d=n(11504);const i={},t=d.createContext(i);function r(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);