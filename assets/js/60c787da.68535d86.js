"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[87072],{38396:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var d=s(17624),i=s(4552);const t={sidebar_position:6},o="Sandboxes",r={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandboxes",title:"Sandboxes",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandboxes.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandboxes",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandboxes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandboxes.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Sandbox Identifier",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandbox-identifier"},next:{title:"Sandbox Stop",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandbox-stop"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"sandboxes",children:"Sandboxes"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Gets a list of all the running and pending sandboxes (regular and persistent sandboxes) associated with the user's domain, as well as each sandbox's details, including the sandbox ID and the available actions that can be performed on it. It can also show completed sandboxes\xa0related to the user's domain."}),"\n",(0,d.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v1/sandboxes"})}),"\n",(0,d.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET"})}),"\n",(0,d.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,d.jsx)("summary",{children:"Headers"}),"\n",(0,d.jsxs)(n.p,{children:["Example header format for the ",(0,d.jsx)(n.code,{children:"sandboxes"})," method:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["To also include completed sandboxes in the response, add the parameter ",(0,d.jsx)(n.code,{children:"show_historic"})," to the request URL:\nThe default value for this parameter is ",(0,d.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,d.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"sandboxes"})," method returns a list of all the sandboxes and the actions that can be performed on each sandbox."]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'[\n   {\n      "name":"Test Blprnt2",\n      "id":"11491c80-6f79-4e9c-b592-78242c6dc698",\n      "description":"This is a list of sandboxes in this user domain",\n      "state":"Ready",\n      "blueprint":{\n         "name":"Test Blprnt2""id":"2f4c972b-5c64-4b08-bae4-73408d7b171d"\n      }"_links":{\n         "self":{\n            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698",\n            "method":"GET""</code><MadCap":"conditionalText MadCap":"conditions=""REST-API.REST API&#160;V1"">""name":"get a sandbox\' details",\n            "templated":"true</code></MadCap":"conditionalText><code class=""language-javascript"">"\n         },\n         "</code><MadCap":"conditionalText MadCap":"conditions=""REST-API.REST API&#160;V2"">""components":{\n            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698/components",\n            "method":"GET""</code></MadCap":"conditionalText>"\n         },\n         "stop":{\n            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698/stop",\n            "method":"POST""</code><MadCap":"conditionalText MadCap":"conditions=""REST-API.REST API&#160;V1"">""name":"stop a sandbox",\n            "templated":"true</code></MadCap":"conditionalText>"\n         },\n         "all":{\n            "href":"/sandboxes",\n            "method":"GET""</code></pre><pre xml":"space=""preserve"">""name":"get all sandboxes"\n         }\n      }\n   }\n]\n'})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response summary"}),(0,d.jsxs)(n.p,{children:["The response output properties of the ",(0,d.jsx)(n.code,{children:"sandboxes"})," method are described in the following table."]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Sub Property"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The name of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The ID of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"description"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["A text description of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"state"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"blueprint"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The details of the sandbox's blueprint ",(0,d.jsx)(n.code,{children:"(Array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The name of the blueprint ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsxs)(n.td,{children:["The id of the blueprint ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_links"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"The actions that can be performed on a sandbox in the user's domain:"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"self"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get a specific sandbox's details per specified sandbox ID via a ",(0,d.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"stop"})}),(0,d.jsxs)(n.td,{children:["Provides a link to end an active sandbox per specified sandbox\xa0ID via a ",(0,d.jsx)(n.code,{children:"POST"})," request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"all"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get all available sandboxes according to the user's domain via a ",(0,d.jsx)(n.code,{children:"GET"})," request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>o});var d=s(11504);const i={},t=d.createContext(i);function o(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);