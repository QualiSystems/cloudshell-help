"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[94594],{98725:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=i(74848),n=i(28453);const o={},r="Test Discovery Service",l={id:"install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/index",title:"Test Discovery Service",description:"Test Discovery Service is responsible for communicating with the customer's external test repository and does the following:",source:"@site/versioned_docs/version-2024.1/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/index.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/index.md",tags:[],version:"2024.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Log Levels for New Job Scheduling Services",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/change-log-level"},next:{title:"Configure the Test Discovery Service",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service"}},c={},a=[{value:"Extensibility",id:"extensibility",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"test-discovery-service",children:"Test Discovery Service"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Test Discovery Service"})," is responsible for communicating with the customer's external test repository and does the following:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Discovers the structure and properties of each test in the (Git) test repository and arranges the tests per domains using the ",(0,t.jsx)(s.code,{children:".cs_domains"})," file associated with the test."]}),"\n",(0,t.jsxs)(s.li,{children:["Sends the tests to the new New Job Scheduling for future use at pre-defined intervals. This way, the end-user only sees the tests in their domain (when launching the suite, Job Scheduling will look for an available slot on a ",(0,t.jsx)(s.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/",children:"Test Execution Service"})," that both supports the test's framework and is in the test's domain)."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"A single Test Discovery Service is responsible for handling a specific remote test repository (also a single test type), so integrating with multiple repositories requires several Test Discovery Services."}),"\n",(0,t.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Test Discovery Service doesn't need to be associated to a domain. For each test, it checks which domain it applies to using the ",(0,t.jsx)(s.code,{children:".cs_domains"})," file in the test\u2019s online repository and passes this information to the New Job Scheduling, which assigns the execution of the test to an available Test Execution Service in the test\u2019s domain."]}),"\n",(0,t.jsx)(s.li,{children:"Only tests that will be discovered by the new New Job Scheduling will be presented in the Job Scheduling Portal and supported by the system."}),"\n",(0,t.jsx)(s.li,{children:"The New Job Scheduling currently supports the use of a pre-defined interval, but we are considering adding support for a webhook."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"extensibility",children:"Extensibility"}),"\n",(0,t.jsx)(s.p,{children:"Test Discovery Service is a generic implementation that can be extended on demand to support other types of tests, inputs and source-control systems. For more information, please contact Quali Customer Success."}),"\n",(0,t.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture",children:"New Job Scheduling Architecture"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service",children:"Configure the Test Discovery Service"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api-guide/new-jss-rest-api/get-test-discovery-services",children:"Get Test Discovery Services"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains",children:"Associating Tests to Different Domains"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var t=i(96540);const n={},o=t.createContext(n);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);