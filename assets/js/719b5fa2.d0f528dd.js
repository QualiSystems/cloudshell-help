"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[68536],{85964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(17624),i=n(4552);const r={sidebar_position:1},o="Add Your Script to an App",a={id:"devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/add-script-to-app",title:"Add Your Script to an App",description:"Now that we have tested and debugged our script, the next step is to add it to an App template. For details, see Adding App templates.",source:"@site/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/add-script-to-app.md",sourceDirName:"devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps",slug:"/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/add-script-to-app",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/add-script-to-app",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/add-script-to-app.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Custom Script Development for Apps",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/"},next:{title:"Tips and Tricks for Custom Scripts",permalink:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/tips-and-tricks-for-custom-scripts"}},p={},d=[];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"add-your-script-to-an-app",children:"Add Your Script to an App"}),"\n",(0,s.jsxs)(t.p,{children:["Now that we have tested and debugged our script, the next step is to add it to an App template. For details, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/#adding-app-templates",children:"Adding App templates"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In CloudShell Portal, open the\xa0",(0,s.jsx)(t.strong,{children:"Manage>Apps"}),"\xa0page."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Edit or create an App."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open the\xa0",(0,s.jsx)(t.strong,{children:"Configuration Management"}),"\xa0tab."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["From the\xa0",(0,s.jsx)(t.strong,{children:"Select Tool"}),"\xa0drop-down list, select\xa0",(0,s.jsx)(t.strong,{children:"Script"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the appropriate\xa0",(0,s.jsx)(t.strong,{children:"Connection Method"}),", depending on the VM\u2019s operating system. Select\xa0",(0,s.jsx)(t.strong,{children:"Windows Remote Management"}),"\xa0for Windows machines, or\xa0",(0,s.jsx)(t.strong,{children:"SSH"}),"\xa0for Linux."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Specify the script\u2019s\xa0",(0,s.jsx)(t.strong,{children:"URL"}),". Make sure you specify the raw version of the URL (GitHub, GitLab and BitBucket are supported)."]}),"\n",(0,s.jsxs)(t.p,{children:["If the selected\xa0",(0,s.jsx)(t.strong,{children:"Connection Method"}),"\xa0is WinRM, the script file should have a .ps1 extension. Similarly, if\xa0",(0,s.jsx)(t.strong,{children:"SSH"}),"\xa0is selected, the script file extension can be either .sh or .bash."]}),"\n",(0,s.jsxs)(t.p,{children:["If the URL is protected by Basic Authentication, specify the\xa0",(0,s.jsx)(t.strong,{children:"Username"}),"\xa0and\xa0",(0,s.jsx)(t.strong,{children:"Password"}),", or ",(0,s.jsx)(t.strong,{children:"Token"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["If the URL is private (HTTPS), the VM will need to have a valid SSL certificate. To disable the certificate check, open ",(0,s.jsx)(t.strong,{children:"Resource Manager Client>Resource Families>Configuration Services"})," (",(0,s.jsx)(t.strong,{children:"Ansible Configuration"})," or ",(0,s.jsx)(t.strong,{children:"Custom Script Configuration"}),") and set the ",(0,s.jsx)(t.strong,{children:"Verify Certificate"})," attribute to ",(0,s.jsx)(t.strong,{children:"False"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To pass parameters to the script (as environment variables), click\xa0",(0,s.jsx)(t.strong,{children:"Add Parameter"}),"\xa0and enter each parameter\u2019s name and value."]}),"\n",(0,s.jsx)(t.p,{children:"You can add parameters to the App template in the following ways:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Provide the value as part of the App template, making it the default value for every instance of this App template"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Specify a static value in the App in the blueprint"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Specify a dynamic value in the App in the blueprint, linking the parameter to one of the blueprint\u2019s Global Inputs. To do so, just enter the global input\u2019s name in curly brackets as the parameter value, or click the \u201cplus\u201d button to select an available Global Input."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Pass a value using the API, as illustrated in ",(0,s.jsx)(t.a,{href:"/cloudshell-help/devguide/develop-config-management-scripts-for-apps/custom-script-dev-for-apps/#parameters",children:"Parameters"}),". This will replace any value provided in the App template or in the blueprint"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Discovery Dialog",src:n(82428).c+"",width:"624",height:"444"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open the\xa0",(0,s.jsx)(t.strong,{children:"App Resource"}),"\xa0tab, and enter the VM\u2019s access credentials."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Discovery Dialog",src:n(37624).c+"",width:"624",height:"444"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click\xa0",(0,s.jsx)(t.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},82428:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Config-manage-Adding-Your_4_624x444-8e44753533eef44cb506a8a629374403.png"},37624:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Config-manage-Adding-Your_5_624x444-bb954e82ef45891b753c6d53d7dca588.png"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>o});var s=n(11504);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);