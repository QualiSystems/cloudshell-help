"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[42744],{56:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=s(17624),n=s(4552);const o={},l="Test Discovery Service",r={id:"install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/index",title:"Test Discovery Service",description:"Test Discovery Service is responsible for communicating with the customer's external test repository and does the following:",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/index.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/index.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Log Levels for New Job Scheduling Services",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/change-log-level"},next:{title:"Configure the Test Discovery Service",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service"}},c={},a=[{value:"Extensibility",id:"extensibility",level:2},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"test-discovery-service",children:"Test Discovery Service"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Test Discovery Service"})," is responsible for communicating with the customer's external test repository and does the following:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Discovers the structure and properties of each test in the (Git) test repository and arranges the tests per domains using the ",(0,i.jsx)(t.code,{children:".cs_domains"})," file associated with the test."]}),"\n",(0,i.jsxs)(t.li,{children:["Sends the tests to the new New Job Scheduling for future use at pre-defined intervals. This way, the end-user only sees the tests in their domain (when launching the suite, Job Scheduling will look for an available slot on a ",(0,i.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tes.htm",children:"Test Execution Service"})," that both supports the test's framework and is in the test's domain)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A single Test Discovery Service is responsible for handling a specific remote test repository (also a single test type), so integrating with multiple repositories requires several Test Discovery Services."}),"\n",(0,i.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Test Discovery Service doesn't need to be associated to a domain. For each test, it checks which domain it applies to using the ",(0,i.jsx)(t.code,{children:".cs_domains"})," file in the test\u2019s online repository and passes this information to the New Job Scheduling, which assigns the execution of the test to an available Test Execution Service in the test\u2019s domain."]}),"\n",(0,i.jsx)(t.li,{children:"Only tests that will be discovered by the new New Job Scheduling will be presented in the Job Scheduling Portal and supported by the system."}),"\n",(0,i.jsx)(t.li,{children:"The New Job Scheduling currently supports the use of a pre-defined interval, but we are considering adding support for a webhook."}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"extensibility",children:"Extensibility"}),"\n",(0,i.jsx)(t.p,{children:"Test Discovery Service is a generic implementation that can be extended on demand to support other types of tests, inputs and source-control systems. For more information, please contact Quali Customer Success."}),"\n",(0,i.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-architecture.htm",children:"New Job Scheduling Architecture"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-tds-config.htm",children:"Configure the Test Discovery Service"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-tds.htm",children:"Get Test Discovery Services"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-associate-tests-to-domain.htm",children:"Associating Tests to Different Domains"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>l});var i=s(11504);const n={},o=i.createContext(n);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);