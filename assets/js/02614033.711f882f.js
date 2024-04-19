"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[67072],{41280:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=s(17624),r=s(4552);const l={sidebar_position:3},t="Managing AWS EC2 Execution Servers",o={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers",title:"Managing AWS EC2 Execution Servers",description:"The CloudShell CloudFormation process installs two Execution Servers on the AWS EC2 region - es-shells and es-commands.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cost Management of AWS EC2 Instances",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances"},next:{title:"Microsoft Azure Integration and Configuration",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/"}},c={},a=[{value:"Support",id:"support",level:2},{value:"Accessing the Execution Server instances",id:"accessing-the-execution-server-instances",level:2},{value:"Connecting the Execution Server to Quali Server",id:"connecting-the-execution-server-to-quali-server",level:2},{value:"Execution Server logs",id:"execution-server-logs",level:2},{value:"Performing maintenance operations on an Execution Server",id:"performing-maintenance-operations-on-an-execution-server",level:2},{value:"Installing a new Execution Server",id:"installing-a-new-execution-server",level:2},{value:"Upgrading an existing Execution Server",id:"upgrading-an-existing-execution-server",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"managing-aws-ec2-execution-servers",children:"Managing AWS EC2 Execution Servers"}),"\n",(0,i.jsxs)(n.p,{children:["The CloudShell CloudFormation process installs two Execution Servers on the AWS EC2 region - ",(0,i.jsx)(n.strong,{children:"es-shells"})," and ",(0,i.jsx)(n.strong,{children:"es-commands"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Execution Servers are installed on Centos 7 instances (CentOS 7.2 and up)."}),"\n",(0,i.jsx)(n.li,{children:"The Execution Servers come with Python 2.7 and 3 installed and configured out of the box."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"accessing-the-execution-server-instances",children:"Accessing the Execution Server instances"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use username \u201ccentos\u201d and the key used during the CloudFormation deployment."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connecting-the-execution-server-to-quali-server",children:"Connecting the Execution Server to Quali Server"}),"\n",(0,i.jsx)(n.p,{children:"This procedure is required if Quali Server is also installed on AWS."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to the Execution Server machine and follow the instructions in ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Cnfg-Exec-Srv.htm",children:"Configure the Linux Execution Server"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"execution-server-logs",children:"Execution Server logs"}),"\n",(0,i.jsx)(n.p,{children:"Execution Server logs reside at:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/opt/ExecutionServer/logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/var/log/qualisystems/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"performing-maintenance-operations-on-an-execution-server",children:"Performing maintenance operations on an Execution Server"}),"\n",(0,i.jsxs)(n.p,{children:["Do the following if you need to perform any maintenance operations on the Execution Server, such as updating the Execution Server version of setting ",(0,i.jsx)(n.code,{children:"customer.config"})," keys:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stop the Execution Server service by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sudo systemctl stop es\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Perform the maintenance operations."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start the Execution Server service by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sudo systemctl start es\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-a-new-execution-server",children:"Installing a new Execution Server"}),"\n",(0,i.jsx)(n.p,{children:"Follow this procedure to install a new Execution Server from scratch. To upgrade an existing Execution server, scroll down to the next section."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From ",(0,i.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center?flash_digest=3f2ece71dadb98bf640f295d5812eb5e8aedb9a7",children:"Quali\u2019s Download Center"}),", download the ",(0,i.jsx)(n.strong,{children:"Linux Execution Server"})," installation script to your local machine."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"EC2 Dashboard"}),", launch an instance, select the latest ",(0,i.jsx)(n.strong,{children:"CentOS 7"})," instance type."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Choose an Instance Type"})," page is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["At the bottom of the page, click ",(0,i.jsx)(n.strong,{children:"Next: Configure Instance Details"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Advanced Details"})," area, select ",(0,i.jsx)(n.strong,{children:"As text"})," and paste the ",(0,i.jsx)(n.strong,{children:"Linux Execution Server"})," installation script's contents."]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"curl [InstallScript] --output cloudshell_es_install_script.sh --retry 20 -s \u2013S\nchmod +rwx ./cloudshell_es_install_script.sh\nsed -i -e 's/\\r$//' ./cloudshell_es_install_script.sh\n./cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update the CloudShell Server and administrator credentials."}),"\n",(0,i.jsx)(n.p,{children:"For example (script for CloudShell 9.0):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"curl https://s3.amazonaws.com/quali-prod-binaries/9.0.0-180/ES/cloudshell_es_install_script.sh --output cloudshell_es_install_script.sh --retry 20 -s \u2013S\nchmod +rwx ./cloudshell_es_install_script.sh\nsed -i -e 's/\\r$//' ./cloudshell_es_install_script.sh\n./cloudshell_es_install_script.sh 192.168.42.132 admin admin es-shells\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm#Add2",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Quali Server must be running when configuring the Execution Server."}),"\n",(0,i.jsxs)(n.li,{children:["Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: ",(0,i.jsx)(n.code,{children:'"admin1234!"'})]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Launch the instance."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"upgrading-an-existing-execution-server",children:"Upgrading an existing Execution Server"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to upgrade an AWS Execution Server:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Upgrade to a GA version (by spinning up a new instance and installing the Linux Execution Server installation script installation script that installs the updated Execution Server)"}),"\n",(0,i.jsx)(n.li,{children:"Upgrade to a non-GA patch version (by replacing configuration DLLs)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To upgrade to a GA version:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SSH to the VM."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stop the Execution Server service by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sudo systemctl stop es\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the following script (set the appropriate values):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"curl [InstallScript] --output cloudshell_es_install_script.sh --retry 20 -s -S\nchmod +rwx ./cloudshell_es_install_script.sh\nsed -i -e 's/\\r$//' ./cloudshell_es_install_script.sh\n./cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"curl https://s3.amazonaws.com/quali-prod-binaries/8.3-168734/ES/cloudshell_es_install_script.sh --output cloudshell_es_install_script.sh --retry 20 -s -S\nchmod +rwx ./cloudshell_es_install_script.sh\nsed -i -e 's/\\r$//' ./cloudshell_es_install_script.sh\n./cloudshell_es_install_script.sh 192.168.42.132 admin admin es-shells\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm#Add2",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Quali Server must be running when configuring the Execution Server."}),"\n",(0,i.jsxs)(n.li,{children:["Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: ",(0,i.jsx)(n.code,{children:'"admin1234!"'})]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start the Execution Server service by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sudo systemctl start es\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Tip:",type:"important",children:(0,i.jsxs)(n.p,{children:["The Execution Server service name was changed from ",(0,i.jsx)(n.strong,{children:"qa_execution_server"})," to ",(0,i.jsx)(n.strong,{children:"es"})," in version 8.3."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To upgrade to a patch version:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open the CloudShell patch package."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.code,{children:"~\\CloudShell <version>\\Data\\ExecutionServer\\Qualisystems\\TestShell\\ExecutionServer"})," folder. For example:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(65440).c+"",width:"927",height:"340"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select all contents in the folder and create a tar archive."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the tar file to the ",(0,i.jsx)(n.code,{children:"/temp"})," folder in the ",(0,i.jsx)(n.strong,{children:"Execution Server"})," instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SSH to the instance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stop the Execution Server service by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sudo systemctl stop es\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Extract the tar file to ",(0,i.jsx)(n.code,{children:"/opt/ExecutionServer"}),", overriding any existing files."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start the Execution Server service by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sudo systemctl start es\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65440:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/CloudShellPackageForCloudProviders-084d3fcd72f21268b00b3f07e3630f82.png"},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>t});var i=s(11504);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);