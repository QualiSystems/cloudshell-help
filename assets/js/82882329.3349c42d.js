"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[58033],{31440:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var r=i(17624),d=i(4552);const n={sidebar_position:11},a="Add or Update Attributes",s={id:"api-guide/packaging-api/update-the-data-model/add-or-update-attributes",title:"Add or Update Attributes",description:"Description: Add a new attribute to the data model, or modify an existing attribute.",source:"@site/docs/api-guide/packaging-api/update-the-data-model/add-or-update-attributes.md",sourceDirName:"api-guide/packaging-api/update-the-data-model",slug:"/api-guide/packaging-api/update-the-data-model/add-or-update-attributes",permalink:"/cloudshell-help/next/api-guide/packaging-api/update-the-data-model/add-or-update-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/packaging-api/update-the-data-model/add-or-update-attributes.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Remove a Resource Driver from a Model",permalink:"/cloudshell-help/next/api-guide/packaging-api/update-the-data-model/remove-rsrc-driver-from-model"},next:{title:"Quali API",permalink:"/cloudshell-help/next/api-guide/quali-api"}},l={},o=[];function c(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"add-or-update-attributes",children:"Add or Update Attributes"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Description"}),": Add a new attribute to the data model, or modify an existing attribute."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Signature"}),": ",(0,r.jsx)(t.code,{children:"add_or_update_attribute(attribute_name, default_value, description, attribute_type, lookup_values, rules)"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Direction"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"attribute_name"})}),(0,r.jsx)(t.td,{children:"In"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"The name of the attribute that you want to add or modify"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"default_value"})}),(0,r.jsx)(t.td,{children:"In"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The default value that you want to assign to the attribute in case it is left empty when used"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"description"})}),(0,r.jsx)(t.td,{children:"In"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"A short description for the attribute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"attribute_type"})}),(0,r.jsx)(t.td,{children:"In"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"One of the following values: DateTime, Numeric, String, Boolean, Lookup, Password"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lookup_values"})}),(0,r.jsx)(t.td,{children:"In"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"If the attribute type is Lookup, specify the list of allowed values"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"rules"})}),(0,r.jsx)(t.td,{children:"In"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsxs)(t.td,{children:["Specify 0 or more capabilities for the attribute, available values: ",(0,r.jsx)("li",{children:" Editable After Run (System Administrators) "})," ",(0,r.jsx)("li",{children:" Editable After Run (Everyone) "})," ",(0,r.jsx)("li",{children:" Configuration "})," ",(0,r.jsx)("li",{children:" Setting "})," ",(0,r.jsx)("li",{children:" Display In Diagram "})," ",(0,r.jsx)("li",{children:" Link Configurations "})," ",(0,r.jsx)("li",{children:" Variable Capability "})," ",(0,r.jsx)("li",{children:" Constant Capability "})," ",(0,r.jsx)("li",{children:" Displayed In Route Creation "})," ",(0,r.jsx)("li",{children:" Available For Abstract Resources "})," ",(0,r.jsx)("li",{children:" Displayed In Search Filters "})," ",(0,r.jsx)("li",{children:" Execution Server Selector "})," ",(0,r.jsx)("li",{children:" Monitor Modifications "})," ",(0,r.jsx)("li",{children:" Admin Only  "})]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Sample"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"`packageEditor.add_or_update_attribute('AttString','','String Attribute','String','','')`\n\n`packageEditor.add_or_update_attribute('AttLookup','A','Lookup Attribute','Lookup',['A','B','C'],'')`\n\n`packageEditor.add_or_update_attribute('AttString','AAA','String Attribute1','String','',['Editable After Run (System Administrators)','Editable After Run (Everyone)','Configuration','Setting','Displayed In Diagram','Link Configurations','Variable Capability','Constant Capability','Displayed In Route Creation','Available For Abstract Resources','Displayed In Search Filters','Execution Server Selector','Monitor Modifications','Admin Only','Editable After Run'])`\n"})})]})}function u(e={}){const{wrapper:t}={...(0,d.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,t,i)=>{i.d(t,{I:()=>s,M:()=>a});var r=i(11504);const d={},n=r.createContext(d);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);