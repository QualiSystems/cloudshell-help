"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[71096],{39900:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=n(17624),r=n(4552);const t={sidebar_position:1},l="Configure the Test Discovery Service",c={id:"install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service",title:"Configure the Test Discovery Service",description:"Test Discovery Service configuration is done using Environment Variables.",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/config-test-discovery-service.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Discovery Service",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/"},next:{title:"Test Execution Service",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/"}},o={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"configure-the-test-discovery-service",children:"Configure the Test Discovery Service"}),"\n",(0,i.jsx)(s.p,{children:"Test Discovery Service configuration is done using Environment Variables."}),"\n",(0,i.jsx)(s.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Variables must be accessible to the Test Discovery Service"}),"\n",(0,i.jsx)(s.li,{children:'Variable names must start with "DS_" followed by the variable name.'}),"\n",(0,i.jsx)(s.li,{children:"Variable names must be in upper case letters."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"DS_SERVER_NAME"})}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"General parameters:"})}),"\n",(0,i.jsx)(s.p,{children:"Used for registration with the New Job Scheduling:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SERVICE_ADDRESS"}),": (String) The IP\xa0address or DNS name of the machine on which the Test Discovery Service is installed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SERVICE_NAME"}),": (String) The Test Discovery Service's name. For example: Robot Discovery Service."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SERVICE_DESCRIPTION"}),": (String) The Test Discovery Service's description. For example: Discovery Service for Robot tests."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SERVICE_TEST_TYPE_NAME"}),": (String) Type of tests to be discovered by this Test Discovery Service. For example: robot."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SERVICE_REPOSITORY_URL"}),": (String) Online test repository's URL."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SERVICE_REPOSITORY_NAME"}),": (String)"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Branch/tag parameters:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SERVICE_REPOSITORY_REF"}),": (String) Indicates the name of the branch / tag that should be used for test discovery. For example, master."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Python callable parameters:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_VCS_ADAPTER_FACTORY"}),": (String) This parameter is used to import a Python callable that receives a config instance as an argument and returns an instance of type ",(0,i.jsx)(s.code,{children:"testdiscoveryservice.VersionControlSystemAdapter"}),". The string should be in the following format: ",(0,i.jsx)(s.code,{children:"module.submodule:attribute"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_VCS_TEST_INPUT_PARSER_FACTORY"}),": (String) This parameter used to import a Python callable that receives a config instance as an argument and returns an instance of type ",(0,i.jsx)(s.code,{children:"testdiscoveryservice.VersionControlTestInputsParser"}),". The string should be in the following format: ",(0,i.jsx)(s.code,{children:"module.submodule:attribute"}),". For example: testdiscoveryservice.vcs.inputs_parser",":VersionControlTestInputsParser","."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Registration parameters:"})}),"\n",(0,i.jsx)(s.p,{children:"The following parameters are used to build the URL that will be used to access the New Job Scheduling's API methods (for example, to register the service and report test results):"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SCHEDULING_SERVICE_API_SCHEMA"}),": (String). Usually ",(0,i.jsx)(s.strong,{children:"http"})," or ",(0,i.jsx)(s.strong,{children:"https"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SCHEDULING_SERVICE_API_HOST"}),": (String) IP address or DNS name of the machine on which the Job Scheduling Service is installed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SCHEDULING_SERVICE_API_PORT"}),": (Integer) For example: 5001."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_SCHEDULING_SERVICE_API_CLIENT_TIMEOUT"}),": (Float) REST API client timeout. For example: 5."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Test Repository Sampling parameters:"})}),"\n",(0,i.jsxs)(s.p,{children:["For the following parameters, you can use these regular expressions to determine when to sample the online test repository for changes (similar to how the ",(0,i.jsx)(s.a,{href:"https://apscheduler.readthedocs.io/en/stable/modules/triggers/cron.html#module-apscheduler.triggers.cron",children:"UNIX cron scheduler"})," works):"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:['"day" applies to the parameter ',(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_DAY_PATTERN"})," only."]})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Regex"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"*"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Fire on every value"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"*/a"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Fire every a values, starting from the minimum"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"a-b"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Fire on any value within the a-b range (a must be smaller than b)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"a-b/c"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Fire every c values within the a-b range"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"xth y"})}),(0,i.jsx)(s.td,{children:"day"}),(0,i.jsx)(s.td,{children:"Fire on the x -th occurrence of weekday y within the month"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"last x"})}),(0,i.jsx)(s.td,{children:"day"}),(0,i.jsx)(s.td,{children:"Fire on the last occurrence of weekday x within the month"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"last"})}),(0,i.jsx)(s.td,{children:"day"}),(0,i.jsx)(s.td,{children:"Fire on the last day within the month"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"x,y,z"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Fire on any matching expression; can combine any number of any of the above expressions"})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_YEAR_PATTERN"}),": (String) For example: '*'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_MONTH_PATTERN"}),": (String) For example: '*'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_DAY_PATTERN"})," ``: (String) For example: '*'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_WEEK_PATTERN"}),": (String) For example: '*'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_DAY_OF_WEEK_PATTERN"}),": (String) For example: '*'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_HOUR_PATTERN"}),": (String) For example: '*'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_MINUTE_PATTERN"}),": (String) For example: '*'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_DISCOVER_TESTS_CRON_SECOND_PATTERN"}),": (String) For example: '*/15'."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Test Identification parameters:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_TEST_FILE_PATTERN"}),": A regex pattern to be evaluated against the full path of the file to test which files in the repository are considered to be tests. For example: '\\\\.robot$'."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DS_CLOUDSHELL_DOMAIN_FILE_PATTERN"}),": A regex pattern to be evaluated against the full path of the file to test which files in the repository are files that contain a CloudShell domain definition. For example: '\\\\.cs_domains$'."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Miscellaneous parameters:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"DS_REGISTRATION_RETRY INTERVAL"}),": (Float) Number of seconds between unsuccessful attempts to register the Test Discovery Service with the job scheduling API. For example: 1."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"DS_KEEP_ALIVE_INTERVAL"}),": (Float) Number of seconds to wait between calling Job Scheduling API keep alive. For example, 10."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"DS_DATABASE_RELATIVE_PATH"}),": (String) The path is relative to the root folder. For example: '.db.json'."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>c,M:()=>l});var i=n(11504);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);