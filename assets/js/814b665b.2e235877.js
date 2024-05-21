"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[92936],{97936:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=i(17624),s=i(4552);const l={},a="Managing App Templates",p={id:"admin/cloudshell-manage-dashboard/manage-app-templates/index",title:"Managing App Templates",description:"This article describes the administrative actions needed to configure App templates in CloudShell that are based on a cloud provider resource. For additional information, see Apps Overview.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/index.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/index.md",tags:[],version:"2023.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manage Dashboard Overview",permalink:"/admin/cloudshell-manage-dashboard/manage-dashboard-overview"},next:{title:"Adding a new App Template",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template"}},d={},o=[{value:"Viewing App templates",id:"viewing-app-templates",level:2},{value:"Adding App templates",id:"adding-app-templates",level:2},{value:"Cloning App templates",id:"cloning-app-templates",level:2},{value:"Editing App templates",id:"editing-app-templates",level:2},{value:"Deleting App templates",id:"deleting-app-templates",level:2},{value:"Related Topics",id:"related-topics",level:2}];function r(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"managing-app-templates",children:"Managing App Templates"}),"\n",(0,t.jsxs)(n.p,{children:["This article describes the administrative actions needed to configure App templates in CloudShell that are based on a cloud provider resource. For additional information, see ",(0,t.jsx)(n.a,{href:"/intro/features/apps-overview",children:"Apps Overview"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"viewing-app-templates",children:"Viewing App templates"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Apps"})," page, you can view the App templates you are permitted to access."]}),"\n",(0,t.jsx)(n.p,{children:"To view existing App templates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Manage"})," dashboard, in the left sidebar, click ",(0,t.jsx)(n.strong,{children:"Apps"}),".",(0,t.jsx)(n.br,{}),"\n","The ",(0,t.jsx)(n.strong,{children:"Apps"})," page is displayed, listing the App templates that were previously added to CloudShell."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the toolbar to sort the App templates according to ",(0,t.jsx)(n.strong,{children:"Name"})," or Modified time (last modified App at the top), and to filter them according to a specific ",(0,t.jsx)(n.strong,{children:"Category"})," or ",(0,t.jsx)(n.strong,{children:"Domain"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"adding-app-templates",children:"Adding App templates"}),"\n",(0,t.jsxs)(n.p,{children:["When adding a new App template, you need to configure the settings of the virtual machine and application you want to deploy. To add App templates, at least one cloud provider resource must be defined. To define private cloud provider resources, see ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/",children:"Private Cloud Provider Support in CloudShell"}),", and for public cloud providers, see ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/",children:"Public Cloud Provider Support in CloudShell"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If your CloudShell deployment includes multiple sites, it is recommended to configure the deployment process of the App to be carried out in the domain that is physically closest to the cloud provider. For additional information, see ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"})," or ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Notes for public cloud Apps",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By default, all public cloud Apps of the same type in the same sandbox are deployed within the same subnet and therefore are connected to each other and isolated from other sandboxes. However, using the Subnet service, blueprint designers can set up multiple subnet networks in the sandbox, instead of having one default subnet for all the Apps of the same cloud provider. For details, see ",(0,t.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Public cloud App deployment requires the management network and subnet(s) to be prepared in advance as part of the sandbox Setup process. CloudShell's out-of-the-box Setup process does this. However, the blueprint must include at least one public cloud App to initiate the Setup script's connectivity preparation process for deployment in that public cloud."}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To add a new App template:"})}),"\n",(0,t.jsxs)(n.p,{children:["Follow the instructions ",(0,t.jsx)(n.a,{href:"./manage-app-templates/app-template/adding-app-template",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"cloning-app-templates",children:"Cloning App templates"}),"\n",(0,t.jsx)(n.p,{children:"This section explains how to clone an existing App template in the Apps page. You can use this method, for example, if you want to create an App template that is largely based on an existing one but requires several modifications."}),"\n",(0,t.jsx)(n.p,{children:"To clone an App template:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the Manage dashboard, in the left sidebar, click Apps."}),"\n",(0,t.jsx)(n.p,{children:"The Apps page is displayed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the App template's menu button ",(0,t.jsx)(n.img,{src:i(55240).c+"",width:"34",height:"33"})," and select Clone."]}),"\n",(0,t.jsx)(n.p,{children:"The cloned App template is added to the Apps page under the original App template. For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(4392).c+"",width:"636",height:"206"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"editing-app-templates",children:"Editing App templates"}),"\n",(0,t.jsxs)(n.p,{children:["This option is enabled using the ",(0,t.jsx)(n.code,{children:"RestrictEditToCreatingDomain"})," key."]}),"\n",(0,t.jsx)(n.p,{children:"To edit an App template:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the Manage dashboard, in the left sidebar, click Apps."}),"\n",(0,t.jsx)(n.p,{children:"The Apps page is displayed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click the Name of the App template."}),"\n",(0,t.jsx)(n.p,{children:"Or-"}),"\n",(0,t.jsxs)(n.p,{children:["Click the App template's menu button ",(0,t.jsx)(n.img,{src:i(55240).c+"",width:"34",height:"33"})," and select Edit."]}),"\n",(0,t.jsx)(n.p,{children:"The App template's configuration wizard is displayed in the General page."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the App template\u2019s settings. For more information, see ",(0,t.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/manage-app-templates/#adding-app-templates",children:"Adding App templates"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click Save."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deleting-app-templates",children:"Deleting App templates"}),"\n",(0,t.jsxs)(n.p,{children:["This option is enabled using the ",(0,t.jsx)(n.code,{children:"RestrictEditToCreatingDomain"})," key."]}),"\n",(0,t.jsx)(n.p,{children:"To delete App templates:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the Manage dashboard, in the left sidebar, click Apps."}),"\n",(0,t.jsx)(n.p,{children:"The Apps page is displayed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select the check boxes of the required App templates."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Delete"})," button in the toolbar."]}),"\n",(0,t.jsx)(n.p,{children:"Or-"}),"\n",(0,t.jsxs)(n.p,{children:["Click the App template's menu button ",(0,t.jsx)(n.img,{src:i(55240).c+"",width:"34",height:"33"})," and select Delete."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/manage-dashboard-overview",children:"Manage Dashboard Overview"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../portal/blueprints/creating-blueprints/apps/",children:"Apps in Blueprints"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},4392:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/AppsClone-8c60a6c52b734eccd2c0e3235b93958c.png"},55240:(e,n,i)=>{i.d(n,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAIAAAAzse47AAABMUlEQVR42u3WzUrDQBAH8J2dTeLHURFafQRvggelFPtQIujRmxcv6guI4MWjT6BCT95EbQSNpBSREhUxGzs7Jq0PEAIDIhn2/mNm/gMLvWHqkhdnP5VYOecgfIo1WTnjl4miCBEBQJaJ41jUmBT0+31po2b+HcP5Y1WkE1TJjFZhvp3KCBAYtUJQugRVhTl7MLtd30e117JrDUIh5uTObF0GU8iHHdteJE/LMOePZv/aC1DtrGYrC2SEGMfFg/H+oVwKqjBhorsDnTex3qTGLEvt5vjWbF4EM0YdddL2EvlCQzu9N9tXgY98sGFbTbHdPH/AzbAY2vKcm58WG1pK6msEeY6NZm98oSJMfZ5/9zwrVM3UTDR4NS4TNZgZwiTz03ckK/STzg0igt7bSLSVSf0Al5jMxPZ7SvwAAAAASUVORK5CYII="},4552:(e,n,i)=>{i.d(n,{I:()=>p,M:()=>a});var t=i(11504);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);