"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[51884],{52460:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=i(17624),o=i(4552);const a={sidebar_position:1},n="Starting an API Session Outside of CloudShell",l={id:"devguide/available-cs-api/useful-cs-api-examples/start-api-outside-cs",title:"Starting an API Session Outside of CloudShell",description:"This script starts an API session from your IDE. This is useful for performing admin tasks outside of the scope of the blueprint or sandbox.",source:"@site/docs/devguide/available-cs-api/useful-cs-api-examples/start-api-outside-cs.md",sourceDirName:"devguide/available-cs-api/useful-cs-api-examples",slug:"/devguide/available-cs-api/useful-cs-api-examples/start-api-outside-cs",permalink:"/cloudshell-help/next/devguide/available-cs-api/useful-cs-api-examples/start-api-outside-cs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/available-cs-api/useful-cs-api-examples/start-api-outside-cs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Useful CloudShell Automation API Code Examples",permalink:"/cloudshell-help/next/category/useful-cloudshell-automation-api-code-examples"},next:{title:"Performing Actions on Resources in the Sandbox",permalink:"/cloudshell-help/next/devguide/available-cs-api/useful-cs-api-examples/peform-actions-on-rsrc-in-sandbox"}},r={},u=[];function d(e){const s={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"starting-an-api-session-outside-of-cloudshell",children:"Starting an API Session Outside of CloudShell"}),"\n",(0,t.jsx)(s.p,{children:"This script starts an API session from your IDE. This is useful for performing admin tasks outside of the scope of the blueprint or sandbox."}),"\n",(0,t.jsx)(s.p,{children:"As this requires the use of the CloudShell Automation API package, make sure to first install the package. From command-line, run\xa0pip install cloudshell-automation-api."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'from cloudshell.api.cloudshell_api import CloudShellAPISession\n \n# add credentials\nuser = "admin"\npassword = "admin"\nserver = "localhost"\ndomain = "Global"\n \n# start session\napi = CloudShellAPISession(host=server, username=user, password=password, domain=domain)\n \n# find resources of target model\nres_details = api.FindResources(resourceModel="Putshell")\n'})})]})}function c(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>l,M:()=>n});var t=i(11504);const o={},a=t.createContext(o);function n(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);