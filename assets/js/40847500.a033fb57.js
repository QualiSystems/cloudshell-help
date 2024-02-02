"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[901],{78262:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(85893),t=r(11151);const i={},o="Adding Inventory Resources",l={id:"portal/inventory/managing-resources/adding-inventory-resources/index",title:"Adding Inventory Resources",description:"In the Inventory dashboard, administrators can add resources based on Shell packages and cloud provider resources for App deployments.",source:"@site/docs/portal/inventory/managing-resources/adding-inventory-resources/index.md",sourceDirName:"portal/inventory/managing-resources/adding-inventory-resources",slug:"/portal/inventory/managing-resources/adding-inventory-resources/",permalink:"/cloudshell-help/next/portal/inventory/managing-resources/adding-inventory-resources/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/inventory/managing-resources/adding-inventory-resources/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Managing Resources in the Inventory",permalink:"/cloudshell-help/next/category/managing-resources-in-the-inventory"},next:{title:"Adding AWS EC2 Cloud Provider Resource",permalink:"/cloudshell-help/next/portal/inventory/managing-resources/adding-inventory-resources/adding-aws-cp"}},a={},d=[{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"adding-inventory-resources",children:"Adding Inventory Resources"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Inventory"})," dashboard, administrators can add resources based on Shell packages and cloud provider resources for App deployments."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to add resources that are based on a Shell, the administrator needs to first import that Shell's package into CloudShell Portal. The Shells are preconfigured with the required settings, attributes, and automation. For additional information, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Shells.htm",children:"Shells Overview"}),"."]}),"\n",(0,s.jsx)(n.p,{children:":::notes Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CloudShell administrators can download the required Shell package from ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/repositories",children:"Quali Repositories"})," and import it into CloudShell Portal. For details, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Shells.htm",children:"Managing Shells"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you are populating your CloudShell inventory for the first time, we recommend to use the ",(0,s.jsx)(n.strong,{children:"CloudShell Autodiscovery"})," tool, which allows you to load multiple resources at the same time. For additional information, see the tool's ",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-autodiscovery/blob/master/README.md",children:"readme"}),".\n:::"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To add a resource using a Shell:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Inventory"})," dashboard, in the ",(0,s.jsx)(n.strong,{children:"Resources"})," tab, click the folder in which you want to create the resource."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"+ Add New"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Add New Resource"})," dialog box, select the required Shell from the list."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter the required information. Type the ",(0,s.jsx)(n.strong,{children:"Name"})," and ",(0,s.jsx)(n.strong,{children:"IP\xa0Address"})," of the resource."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] ["})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You may be prompted at this point to start the discovery process (if there is a discovery option for this particular resource)."}),"\n",(0,s.jsx)(n.p,{children:"A new dialog box is displayed for the discovery process."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The required inputs vary per driver."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter the required information (for example, ",(0,s.jsx)(n.strong,{children:"Password"})," and ",(0,s.jsx)(n.strong,{children:"User"})," name), and click ",(0,s.jsx)(n.strong,{children:"Start Discovery"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A message is displayed, confirming that the discovery process has started. The discovery process validates the resource's settings against the actual device, and loads the device's resource structure (if exists) and settings into the resource."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["During the discovery process, the resource is excluded from use. In the Inventory list, the resource is marked by status icons with tooltips, indicating that the resource is excluded from use (!) and that the discovery process is in progress (",(0,s.jsx)(n.img,{src:r(25273).Z+"",width:"10",height:"10"})," indicates the resource is offline during discovery). When the discovery process has completed, the status icons change accordingly, and the resource becomes available for use."]})}),"\n",(0,s.jsx)(n.p,{children:"When the discovery process has completed, a confirmation message is displayed."}),"\n",(0,s.jsx)(n.p,{children:"CloudShell adds the new resource using the Shell\u2019s settings, attributes, and driver."}),"\n",(0,s.jsxs)(n.p,{children:["The resource is displayed in the ",(0,s.jsx)(n.strong,{children:"Inventory"})," list in CloudShell Portal and in Resource Manager."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../inventory-dashboard",children:"Inventory Dashboard"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Traffic-Gens.htm",children:"Traffic Generators Overview"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Edit-Rsrc-in-Invnt.htm",children:"Editing Resources from the Inventory Dashboard"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Dscvr-Rsrc-in-Invnt.htm",children:"Discovering Inventory Resources"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},25273:(e,n,r)=>{r.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAj0lEQVR4nHXQsQqGIBTF8dNxE3F0cwmhrc33f4DoAQJpaWvzEo7aEN9HIP3X33LPHVprAGqt53nmnJVSzjlrLQAAQ2tNRNZ1va4Lv7z38zyTZK11WZa3ATiOY9s2ANz3vZSCrpRSKYUi0tuTiPDLnvg/ss9ay3Ectda9hRC01iQZYzTGvM17P00Tnt34fssNXDBFCQwZDxkAAAAASUVORK5CYII="},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(67294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);