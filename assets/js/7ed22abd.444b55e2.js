"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[90048],{21716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>o});var d=r(17624),i=r(4552);const s={sidebar_position:7},c="Add a Resource Script to a Model",n={id:"api-guide/packaging-api/update-the-data-model/add-rsrc-script-to-model",title:"Add a Resource Script to a Model",description:"Description: Add a resource script to a specific model.",source:"@site/docs/api-guide/packaging-api/update-the-data-model/add-rsrc-script-to-model.md",sourceDirName:"api-guide/packaging-api/update-the-data-model",slug:"/api-guide/packaging-api/update-the-data-model/add-rsrc-script-to-model",permalink:"/cloudshell-help/next/api-guide/packaging-api/update-the-data-model/add-rsrc-script-to-model",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/packaging-api/update-the-data-model/add-rsrc-script-to-model.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Remove a Parent Model",permalink:"/cloudshell-help/next/api-guide/packaging-api/update-the-data-model/remove-parent-model"},next:{title:"Remove a Resource Script from a Model",permalink:"/cloudshell-help/next/api-guide/packaging-api/update-the-data-model/remove-rsrc-script-from-model"}},a={},o=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"add-a-resource-script-to-a-model",children:"Add a Resource Script to a Model"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Description"}),": Add a resource script to a specific model."]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Signature"}),": ",(0,d.jsx)(t.code,{children:"add_script_to_model(model_name, script_name, script_file_path, version, script_alias, parameters, category)"})]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Direction"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"model_name"})}),(0,d.jsx)(t.td,{children:"In"}),(0,d.jsx)(t.td,{children:"Yes"}),(0,d.jsx)(t.td,{children:"Specify the model name you want the driver to be connected to"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"script_name"})}),(0,d.jsx)(t.td,{children:"In"}),(0,d.jsx)(t.td,{children:"Yes"}),(0,d.jsx)(t.td,{children:"Specify the name of the resource script you want to add"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"script_file_path"})}),(0,d.jsx)(t.td,{children:"In"}),(0,d.jsx)(t.td,{children:"Yes"}),(0,d.jsx)(t.td,{children:"To replace the current script file with another one, specify the full path to the script file (including file name). py files and zip packages are supported."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"version"})}),(0,d.jsx)(t.td,{children:"In"}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Set a version number for the script"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"script_alias"})}),(0,d.jsx)(t.td,{children:"In"}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Specify an alias for the service"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"parameters"})}),(0,d.jsx)(t.td,{children:"In"}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Specify a list of inputs required by the script. For example: [\u201ckey1, value1\u201d, \u201ckey2, value2\u201d]"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"category"})}),(0,d.jsx)(t.td,{children:"In"}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Script's category. The script will be arranged under this category in the resource/App/service's Commands pane"})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Sample"}),":"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-javascript",children:"`add_script_to_model('Generic Chassis Model','Debugging script' ,'C:\\\\Work\\\\Scripts\\\\Resource-Service\\\\resource_debugging_script_v1.4.zip', '', 'Generic Resources', [], 'Infra')`\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,t,r)=>{r.d(t,{I:()=>n,M:()=>c});var d=r(11504);const i={},s=d.createContext(i);function c(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);