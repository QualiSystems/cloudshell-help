"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[37228],{33320:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(17624),t=i(4552);const r={sidebar_position:9},s="Configure the Qualix Server for AWS EC2",l={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-the-qualix-server-for-aws-ec2",title:"Configure the Qualix Server for AWS EC2",description:"Follow these guidelines when setting up QualiX in-browser connections in your AWS integration.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-the-qualix-server-for-aws-ec2.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-the-qualix-server-for-aws-ec2",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-the-qualix-server-for-aws-ec2",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-the-qualix-server-for-aws-ec2.md",tags:[],version:"2023.3",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Add an AWS EC2 App Template",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template"},next:{title:"Cost Management of AWS EC2 Instances",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances"}},a={},d=[{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure-the-qualix-server-for-aws-ec2",children:"Configure the Qualix Server for AWS EC2"}),"\n",(0,o.jsx)(n.p,{children:"Follow these guidelines when setting up QualiX in-browser connections in your AWS integration."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["To connect to App instances without QualiX, you will need to access the keypair location defined in the AWS EC2 cloud provider resource and download the key-pair ",(0,o.jsx)(n.code,{children:".pem"})," file from the bucket bearing the reservation ID."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If the only QualiX server in your CloudShell deployment is the one in the Management VPC in AWS, refer to the ",(0,o.jsx)(n.a,{href:"/install-configure/qualix/",children:"QualiX Installation and Configuration"})," on how to configure it, and for the server address, use the ",(0,o.jsx)(n.strong,{children:"QualixInstanceEIP"})," output from the ",(0,o.jsx)(n.strong,{children:"CloudFormation"})," process - see ",(0,o.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/",children:"Create a Management VPC and Networks using CloudFormation"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If there are more QualiX servers in your CloudShell deployments, do the following for each relevant server:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Install QualiX version 2.3 or above."}),"\n",(0,o.jsxs)(n.li,{children:["Use an attribute to hold the QualiX Server address, and customize the ",(0,o.jsx)(n.code,{children:"ServerUniversalSettings.xml"})," file on the Quali Server machine to have Quali Server take the QualiX Server address from this attribute."]}),"\n",(0,o.jsxs)(n.li,{children:["Add this attribute to the ",(0,o.jsx)(n.strong,{children:"Generic App Model"})," and set its value in all AWS templates defined in the App catalog for this region. Each App must have in this attribute the address of the QualiX Server in the Management VPC of its region."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["If you selected an internal deployment of the Management VPC, the QualiX Server does not have a Public IP and is accessible only by the network that is connected via VPN to the Management VPC, which is the network you defined in the ",(0,o.jsx)(n.strong,{children:"On Premise CIDR"})," input parameter when you created the Management VPC. If you need more networks to access the QualiX Server, which enables end users to access the AWS EC2 Apps in the sandboxes, configure the ",(0,o.jsx)(n.strong,{children:"Management VPC Routing Table"})," via the AWS Console and add those networks."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/portal/sandboxes/sandbox-workspace/resources/connect-remotely-with-qualix",children:"Connect Remotely to Devices with QualiX (RDP, SSH, Telnet)"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>s});var o=i(11504);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);