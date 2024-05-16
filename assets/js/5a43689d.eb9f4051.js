"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[64204],{26600:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(17624),t=s(4552);const r={sidebar_position:1},l="Configure the Test Execution Service",c={id:"install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/config-test-execution-service",title:"Configure the Test Execution Service",description:"Test Execution Service configuration is done using Environment Variables.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/config-test-execution-service.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-execution-service",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/config-test-execution-service",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/config-test-execution-service",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/config-test-execution-service.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Execution Service",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/"},next:{title:"Test Execution Services Management",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/"}},o={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-the-test-execution-service",children:"Configure the Test Execution Service"}),"\n",(0,i.jsx)(n.p,{children:"Test Execution Service configuration is done using Environment Variables."}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Variables must be accessible to the Test Execution Service."}),"\n",(0,i.jsx)(n.li,{children:'Variable names must start with "TES_" followed by the variable name.'}),"\n",(0,i.jsx)(n.li,{children:"Variable names must be in upper case letters."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"TES_SERVER_DESCRIPTION"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"General parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_SERVER_NAME"}),": (String) The Test Execution Service's display name. For example: Quali Test Execution Service."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_SERVER_DESCRIPTION"}),": (String) The Test Execution Service description. For example: Quali Test Execution Service for running Robot tests."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_CAPACITY"}),": (Integer) The maximum number of tests that can run concurrently on this Test Execution Service."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Binding host parameters:"})}),"\n",(0,i.jsx)(n.p,{children:"The next two parameters are used to indicate the binding address for the API web server:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_SERVER_BINDING_HOST"}),": (String) IP address to which the Test Execution Service is listening. This host must be accessible to the Job Scheduling Service."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_SERVER_BINDING_PORT"}),": (Integer) Port for the binding host. For example, 8250."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Registration parameters:"})}),"\n",(0,i.jsx)(n.p,{children:"The following three parameters are used to build the URL that will be registered with the New Job Scheduling, and will be used by the scheduling service to start test executions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_API_SCHEMA"}),": (String) Usually ",(0,i.jsx)(n.strong,{children:"http"})," or ",(0,i.jsx)(n.strong,{children:"https"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_API_HOST"}),": (String) For example: localhost."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_API_PORT"}),": (Integer) For example, 8250."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following three parameters are used to build the URL that will be used to access the New Job Scheduling's API methods (for example, to register the service and report test results):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TES_SCHEDULING_SERVICE_API_SCHEMA"}),": (String) Usually ",(0,i.jsx)(n.strong,{children:"http"})," or ",(0,i.jsx)(n.strong,{children:"https"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TES_SCHEDULING_SERVICE_API_HOST"}),": (String) IP address or DNS name of the machine on which the Job Scheduling Service is installed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TES_SCHEDULING_SERVICE_API_PORT"}),": (Integer) For example, 5001."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Test reporting parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_RESULT_RETRY_MAX_RETRIES"}),": (Integer) Number of attempts to set the test result in the Job Scheduling Service. For example, 5.","\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This value is used only if no sandbox is linked with the test execution."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Miscellaneous parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_KEEP_ALIVE_INTERVAL"}),": (Float) Number of seconds to wait between calling Job Scheduling API keep alive. For example, 10."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_PROCESS_QUEUE_POOL_INTERVAL"}),': (Float) Number of seconds that the worker process that run tests will wait between tasks pooling. For example, a value of "0.2" indicates that the interval time will increase by a factor of 2 with each passing interval.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TES_WORKER_PROCESS_JOIN_TIMEOUT"}),": (Float) In seconds. For example, 15."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>l});var i=s(11504);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);