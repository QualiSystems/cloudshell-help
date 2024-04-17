"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[820],{76252:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(17624),t=r(4552);const i={sidebar_position:3},o="Add a Kubernetes Cloud Provider Resource",l={id:"admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-cloud-provider-resource",title:"Add a Kubernetes Cloud Provider Resource",description:"The Kubernetes Cloud Provider 2nd Gen shell enables the deployment of Kubernetes instances on a Kubernetes cluster.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-cloud-provider-resource.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/kubernetes-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-cloud-provider-resource",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-cloud-provider-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-cloud-provider-resource.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Prerequisites",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/kubernetes-prerequisites"},next:{title:"Add a Kubernetes App Template",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template"}},d={},c=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"add-a-kubernetes-cloud-provider-resource",children:"Add a Kubernetes Cloud Provider Resource"}),"\n",(0,s.jsx)(n.p,{children:"The Kubernetes Cloud Provider 2nd Gen shell enables the deployment of Kubernetes instances on a Kubernetes cluster."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To add a Kubernetes resource:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to CloudShell Portal as administrator."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Import the Kubernetes shell into CloudShell. For details, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Shells.htm#Adding",children:"Importing Shells"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(2488).c+"",width:"584",height:"290"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Inventory"})," dashboard, in the ",(0,s.jsx)(n.strong,{children:"Resources"})," tab, click the folder in which you want to create the resource."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"+ Add New"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Create New Resource"})," dialog box, select the ",(0,s.jsx)(n.strong,{children:"Kubernetes Cloud Provider Shell 2G"})," cloud provider template."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter a ",(0,s.jsx)(n.strong,{children:"Name"})," for the Kubernetes resource.\xa0\xa0"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] ["})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Resource"})," dialog box is displayed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(35328).c+"",width:"802",height:"549"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter the required information."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Attribute"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Config File Path"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["Full path to a standalone kubernetes ",(0,s.jsx)(n.code,{children:"config"})," file containing all the relevant information for authentication. The file must reside on the Execution Server machine. To generate a portable config file, as Kubernetes administrator, run this command from your Kubernetes client:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:" kubectl config view --flatten\n"})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"AWS CP Resource Name"}),(0,s.jsx)("td",{children:"(Optional - EKS only) The CloudShell resource name for the AWS Cloud Provider Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"External Service Type"}),(0,s.jsx)("td",{children:"The service type the shell will create for external services. LoadBalancer type should be used when the Kubernetes cluster is hosted on a supported public cloud provider like AWS and Azure. Use NodePort when the cluster is self-hosted."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Execution Server Selector"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["(Optional) This attribute points to a pre-defined group of execution servers (grouped by a common ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"})," value). To make the association, enter the same value you specified on the execution server."]}),(0,s.jsx)(n.admonition,{title:"Tip:",type:"important",children:(0,s.jsxs)(n.p,{children:["The Execution Server Selector attribute does not come with the shell out-of-the-box. If you want to use it, add it to the shell in the ",(0,s.jsx)(n.strong,{children:"Manage>Shells"})," page and make sure the attribute has the ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"})," rule, in Resource Manager Client's ",(0,s.jsx)(n.strong,{children:"Attributes"})," tab."]})})]})]})]})]}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Start Discovery"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When the discovery process completes, a confirmation message is displayed. The cloud provider resource is displayed in the Inventory dashboard in CloudShell Portal and in Resource Manager Client."}),"\n",(0,s.jsxs)(n.p,{children:["To customize the App deployment types and publish App orchestration parameters, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfg-App-Dply-Types.htm",children:"Customizing App Deployment Types"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/K8s-App.htm",children:"Add a Kubernetes App Template"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2488:(e,n,r)=>{r.d(n,{c:()=>s});const s=r.p+"assets/images/KubernetesDownloadShell-e986127176ce960c31f950233a74a140.png"},35328:(e,n,r)=>{r.d(n,{c:()=>s});const s=r.p+"assets/images/KubernetesResourceDiscovery-cec8b158d6bf0b5165f48dbabb50b9dc.png"},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var s=r(11504);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);