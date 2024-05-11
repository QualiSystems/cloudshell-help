"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[70536],{87496:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=n(17624),i=n(4552);const o={sidebar_position:3},l="REST API Page",r={id:"jss/jss-portal/jss-rest-api",title:"REST API Page",description:"CloudShell Job Scheduling includes a RESTful API that enables you to automate your test execution activity. Feel free to use the live documentation page to try it out yourself and get familiarized with the different methods. To use the live documentation page, in the Job Scheduling Portal, click REST API.",source:"@site/docs/jss/jss-portal/jss-rest-api.md",sourceDirName:"jss/jss-portal",slug:"/jss/jss-portal/jss-rest-api",permalink:"/cloudshell-help/next/jss/jss-portal/jss-rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/jss/jss-portal/jss-rest-api.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Associating Jira Issues to Test Executions",permalink:"/cloudshell-help/next/jss/jss-portal/job-scheduling-page/jira-issues"},next:{title:"Job Scheduling Servers Page",permalink:"/cloudshell-help/next/jss/jss-portal/job-scheduling-servers/"}},c={},a=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"rest-api-page",children:"REST API Page"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"CloudShell Job Scheduling"})," includes a RESTful API that enables you to automate your test execution activity. Feel free to use the live documentation page to try it out yourself and get familiarized with the different methods. To use the live documentation page, in the Job Scheduling Portal, click REST API."]}),"\n",(0,t.jsxs)(s.p,{children:["Generally speaking, to run API methods in the live documentation page, you need to (1) expand the appropriate section (Account, Suite Executions, etc.) and select the API method to run. Then, click ",(0,t.jsx)(s.strong,{children:"Try it out"}),", specify the required details and click ",(0,t.jsx)(s.strong,{children:"Execute"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"To get started, you need to first obtain an accessToken and pass it to the REST API live documentation page to authorize your future REST API calls."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To obtain an accessToken:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the Job Scheduling Portal, click ",(0,t.jsx)(s.strong,{children:"REST API"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The live documentation page opens in a new tab."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(7984).c+"",width:"991",height:"605"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the Job Scheduling Portal, click the ",(0,t.jsx)(s.strong,{children:"REST API"})," tab to open the live documentation page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Expand the ",(0,t.jsx)(s.strong,{children:"Account"})," section, click the ",(0,t.jsx)(s.strong,{children:"/api/Account/login"})," method and then click the blue ",(0,t.jsx)(s.strong,{children:"Try it out"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Specify your CloudShell username and password and click ",(0,t.jsx)(s.strong,{children:"Execute"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The response should look something like this, including the authorization accessToken:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(99243).c+"",width:"446",height:"165"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To pass the accessToken to the live documentation page:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Authorize"})," button at the top of the live documentation page or the grey lock icon to the right of any API method."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(31964).c+"",width:"528",height:"103"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Value"})," field, specify ",(0,t.jsx)(s.strong,{children:"Bearer <accessToken>"}),'. For example: "Bearer m__qK-cjl8lvedWbBtJ0PRzkVvbwrmPIq5opAM9cKt0".']}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(33772).c+"",width:"535",height:"352"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Value"})," field, specify ",(0,t.jsx)(s.strong,{children:"Bearer <accessToken>"}),'. For example: "Bearer m__qK-cjl8lvedWbBtJ0PRzkVvbwrmPIq5opAM9cKt0".']}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Authorize"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"accessToken"})," is sent with every new request to the server as an authorization header to validate the user."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["If the access token's validity period expires, refresh it by specifying the ",(0,t.jsx)(s.strong,{children:"refreshToken"})," in the ",(0,t.jsx)(s.strong,{children:"Account"})," section's ",(0,t.jsx)(s.strong,{children:"/api/Token/refresh"})," method."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/new-jss-rest-api/",children:"New Job Scheduling REST API"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/new-jss-rest-api/jss-api-login",children:"New Job Scheduling API Login"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},31964:(e,s,n)=>{n.d(s,{c:()=>t});const t=n.p+"assets/images/JssAuthorizeLockIcon_528x103-13cd8a7ddacf9d2ebde23abf30b8214d.png"},33772:(e,s,n)=>{n.d(s,{c:()=>t});const t=n.p+"assets/images/JssAvailableAuthorizations_535x352-75bc091de9caeaf5bf361d1a9b0e7dc7.png"},7984:(e,s,n)=>{n.d(s,{c:()=>t});const t=n.p+"assets/images/JssLiveDocumentationPage-ae029c430fa292aa80b8534a0389421e.png"},99243:(e,s,n)=>{n.d(s,{c:()=>t});const t=n.p+"assets/images/JssLoginResponse-648e7b7f07415eeb6496714deb4ffeca.png"},4552:(e,s,n)=>{n.d(s,{I:()=>r,M:()=>l});var t=n(11504);const i={},o=t.createContext(i);function l(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);