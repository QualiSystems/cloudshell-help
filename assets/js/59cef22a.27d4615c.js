"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[17458],{61749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=n(74848),i=n(28453);const d={sidebar_position:13},r="Sandbox Activity",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-activity",title:"Sandbox Activity",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-activity.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-activity",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-activity",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-activity.md",tags:[],version:"2023.3",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Component Command Start",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start"},next:{title:"Sandbox Output",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-output"}},c={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"sandbox-activity",children:"Sandbox Activity"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets the content of CloudShell Portal's Activity Feed for a particular sandbox. This displays information about actions performed in the sandbox by the user and automation process."}),"\n",(0,s.jsxs)(t.p,{children:["The maximum number of entries in the response is configured by the administrator. If this number of entries is exceeded, the response will include multiple pages. For more information, see ",(0,s.jsx)(t.a,{href:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#setting-the-response-page-size-for-the-sandbox-api-live-documentation-pages",children:"Setting the response page size for the Sandbox API live documentation pages"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/activity?tail=100&from_event_id"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"URL Parameters"}),(0,s.jsx)(t.th,{children:"Description/Comments"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sandbox_identifier"})}),(0,s.jsxs)(t.td,{children:["Can be retrieved via ",(0,s.jsx)(t.a,{href:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,s.jsx)(t.a,{href:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]})})]}),"\n",(0,s.jsx)(t.p,{children:"You may add the following optional parameters to the end of the method's URL to filter the number of events. For example - displaying the last 100 errors:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Query Parameters"}),(0,s.jsx)(t.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"error_only"})}),(0,s.jsxs)(t.td,{children:['Returns only "error" type events. ',(0,s.jsx)(t.code,{children:"(bool)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"since"})}),(0,s.jsxs)(t.td,{children:["Time from which to return all events. Time must be specified in ISO 8601 format (for example PT23H).",(0,s.jsx)(t.code,{children:"(string)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tail"})}),(0,s.jsxs)(t.td,{children:["Last number of events to return. ",(0,s.jsx)(t.code,{children:"(integer)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"from_event_id"})}),(0,s.jsxs)(t.td,{children:["ID of the first event in the response page to display, which is returned in the ",(0,s.jsx)(t.code,{children:"next_event_id"})," property of the response. ",(0,s.jsx)(t.code,{children:"(string)"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET"})}),"\n",(0,s.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsxs)(t.p,{children:["Example header format for the ",(0,s.jsx)(t.code,{children:"sandbox activity"})," method:"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Content-Type: application/json"})}),(0,s.jsx)(t.p,{children:"By default, the method's response includes all the events that occurred during the sandbox's lifecycle."})]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"sandbox activity"})," method returns the events from the Activity Feed of a particular sandbox. The response includes :"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'{\n   "num_returned_events":"20",\n   "more_pages":"false",\n   "next_event_id":"99434",\n   "events":[\n      {\n         "id":"82159835-2d95-46a9-95ec-9251963d203d",\n         "event_type":"success",\n         "event_text":"Sandbox \'MyBlueprint\' has started",\n         "output":"Null",\n         "time":"2017-01-15T09:51:17Z"\n\t  "execution_server": null\n      },\n      {\n         "id":"79549eaf-7f1a-4180-a88b-e7da27e5075b",\n         "event_type":"success",\n         "event_text":"\'Deploy\' resource command on \'vCenter VM From...\' started",\n         "output":"Null",\n         "time":"2017-01-15T09:51:17Z"\n\t  "execution_server": "WIN-ES-NY"\n      }\n   ]\n}\n'})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response summary"}),(0,s.jsxs)(t.p,{children:["The response output properties of the ",(0,s.jsx)(t.code,{children:"sandbox activity"})," method are described in the following table."]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Sub Property"}),(0,s.jsx)(t.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number_of_returned_events"})}),(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsxs)(t.td,{children:["The number of events in the Activity Feed that match the filter criteria in the request. ",(0,s.jsx)(t.code,{children:"(integer)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"more_pages"})}),(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsxs)(t.td,{children:["(Relevant if the response includes multiple pages) ",(0,s.jsx)(t.code,{children:"true"})," indicates that there are additional events that are not displayed in this response page ",(0,s.jsx)(t.code,{children:"(bool)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"next_event_id"})}),(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsxs)(t.td,{children:["(Relevant if the response includes multiple pages) The ID of the first event on the next page of the response. ",(0,s.jsx)(t.code,{children:"(integer)"})," ",(0,s.jsx)("br",{})," Note: To get the next page, run the method again with this value in the ",(0,s.jsx)(t.code,{children:"from_event_id"})," input parameter."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"events"})}),(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsxs)(t.td,{children:["The details of the Activity Feed events ",(0,s.jsx)(t.code,{children:"(array)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsxs)(t.td,{children:["The ID of the event ",(0,s.jsx)(t.code,{children:"(string)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"event_type"})}),(0,s.jsxs)(t.td,{children:['The type of event ("success"/"error") ',(0,s.jsx)(t.code,{children:"(string)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"event_text"})}),(0,s.jsxs)(t.td,{children:["The text displayed in the Activity Feed for the event ",(0,s.jsx)(t.code,{children:"(string)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"output"})}),(0,s.jsxs)(t.td,{children:["(Events related to command execution) Text displayed as output of the command ",(0,s.jsx)(t.code,{children:"(string)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\xa0"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"time"})}),(0,s.jsxs)(t.td,{children:["The time in which the Activity Feed event was logged ",(0,s.jsx)(t.code,{children:"(string)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"execution_server"})}),(0,s.jsxs)(t.td,{children:["Name of the execution server that executed the command. ",(0,s.jsx)(t.code,{children:"(string)"})]})]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);