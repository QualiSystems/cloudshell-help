"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[70692],{10512:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=i(17624),s=i(4552);const o={sidebar_position:3},t="Managing the Azure Execution Server",l={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server",title:"Managing the Azure Execution Server",description:'The deployment process of the CloudShell Template deploys a VM on the Azure region called ExecutionServer-VM and in it installs an Execution Server called "Azure-" (for example, "Azure-East US").',source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cost Management of Microsoft Azure Resources",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources"},next:{title:"Azure Known Limitations",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/azure-known-limitations"}},c={},d=[{value:"Support",id:"support",level:2},{value:"Accessing the Execution Server VM",id:"accessing-the-execution-server-vm",level:2},{value:"Connecting the Execution Server to Quali Server",id:"connecting-the-execution-server-to-quali-server",level:2},{value:"Execution Server logs",id:"execution-server-logs",level:2},{value:"Performing maintenance operations on an Execution Server",id:"performing-maintenance-operations-on-an-execution-server",level:2},{value:"Installing a new Execution Server",id:"installing-a-new-execution-server",level:2},{value:"Upgrading an existing Execution Server",id:"upgrading-an-existing-execution-server",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"managing-the-azure-execution-server",children:"Managing the Azure Execution Server"}),"\n",(0,r.jsxs)(n.p,{children:["The deployment process of the CloudShell Template deploys a VM on the Azure region called ",(0,r.jsx)(n.strong,{children:"ExecutionServer-VM"}),' and in it installs an Execution Server called "',(0,r.jsx)(n.code,{children:"Azure-<region>"}),'" (for example, "Azure-East US").']}),"\n",(0,r.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Execution Server is installed on a Centos 7 VM (CentOS 7.2 and up)."}),"\n",(0,r.jsx)(n.li,{children:"The Execution Server comes with Python 2.7 and 3 installed and configured out of the box."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-execution-server-vm",children:"Accessing the Execution Server VM"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use the ",(0,r.jsx)(n.strong,{children:"Admin Username"})," and ",(0,r.jsx)(n.strong,{children:"Admin Password"})," defined in the CloudShell Template that was deployed on the Azure region."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"connecting-the-execution-server-to-quali-server",children:"Connecting the Execution Server to Quali Server"}),"\n",(0,r.jsx)(n.p,{children:"This procedure is required if Quali Server is also installed on Azure."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Log in to the Execution Server machine and follow the instructions in ",(0,r.jsx)(n.a,{href:"/install-configure/linux-virtual-appliance/post-installation/configure/",children:"Configure the Linux Execution Server"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"execution-server-logs",children:"Execution Server logs"}),"\n",(0,r.jsx)(n.p,{children:"Execution Server logs reside at:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/opt/ExecutionServer/logs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/var/log/qualisystems/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performing-maintenance-operations-on-an-execution-server",children:"Performing maintenance operations on an Execution Server"}),"\n",(0,r.jsxs)(n.p,{children:["Do the following if you need to perform any maintenance operations on the Execution Server, such as updating the Execution Server version of setting ",(0,r.jsx)(n.code,{children:"customer.config"})," keys:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop the Execution Server service by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop es\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Perform the maintenance operations."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the Execution Server service by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start es\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-a-new-execution-server",children:"Installing a new Execution Server"}),"\n",(0,r.jsx)(n.p,{children:"Follow this procedure to install a new Execution Server from scratch. To upgrade an existing Execution server, scroll down to the next section."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["From ",(0,r.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center?flash_digest=3f2ece71dadb98bf640f295d5812eb5e8aedb9a7",children:"Quali\u2019s Download Center"}),", download the ",(0,r.jsx)(n.strong,{children:"Linux Execution Server"})," installation script to your local machine."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In Azure Marketplace, create a ",(0,r.jsx)(n.strong,{children:"CentOS"})," VM (CentOS 7.2 and up)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Advanced"})," tab, click ",(0,r.jsx)(n.strong,{children:"Select an extension to install"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(95852).c+"",width:"700",height:"381"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Install an Extension"})," page, search for and click ",(0,r.jsx)(n.strong,{children:"Custom Script For Linux"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(55540).c+"",width:"598",height:"439"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Configure Custom Script For Linux Extension"})," page, set the params:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Script files"}),": Browse to the ",(0,r.jsx)(n.strong,{children:"Linux Execution Server"})," installation script file you downloaded. Follow the instructions to create a storage account and upload the script as a blob to the storage account. Then, repeat the above step and select the storage account > container > script."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(60088).c+"",width:"637",height:"392"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Command"}),": Paste the below line, and set the CloudShell Server and admin credentials."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo sh cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo sh cloudshell_es_install_script.sh 192.168.52.47 admin admin es-EastUS\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see ",(0,r.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Quali Server must be running when configuring the Execution Server."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: ",(0,r.jsx)(n.code,{children:'"admin1234!"'})]}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(43308).c+"",width:"732",height:"499"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Finish creating the VM."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"upgrading-an-existing-execution-server",children:"Upgrading an existing Execution Server"}),"\n",(0,r.jsx)(n.p,{children:"There are two ways to upgrade the Azure Execution Server:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Upgrade to a GA version (by running a custom script on the Execution Server VM)"}),"\n",(0,r.jsx)(n.li,{children:"Upgrade to a non-GA patch version (by replacing configuration DLLs)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To upgrade to a GA version:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SSH to the VM."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop the Execution Server service by running the following command:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"sudo systemctl stop es"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following script (set the appropriate values):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl [InstallScript] --output cloudshell_es_install_script.sh --retry 20 -s -S\nchmod +rwx ./cloudshell_es_install_script.sh\nsed -i -e 's/\\r$//' ./cloudshell_es_install_script.sh\n./cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl https://s3.amazonaws.com/quali-prod-binaries/8.3-168734/ES/cloudshell_es_install_script.sh --output cloudshell_es_install_script.sh --retry 20 -s -S\nchmod +rwx ./cloudshell_es_install_script.sh\nsed -i -e 's/\\r$//' ./cloudshell_es_install_script.sh\n./cloudshell_es_install_script.sh 192.168.42.132 admin admin es-shells\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see ",(0,r.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Quali Server must be running when configuring the Execution Server."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: ",(0,r.jsx)(n.code,{children:'"admin1234!"'})]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the Execution Server service by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start es\n"})}),"\n",(0,r.jsx)(n.p,{children:"Tip: The Execution Server service name was changed from qa_execution_server to es in version 8.3."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To upgrade to a patch version:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open the CloudShell patch package."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.code,{children:"~\\CloudShell <version>\\Data\\ExecutionServer\\Qualisystems\\TestShell\\ExecutionServer"})," folder. For example: ",(0,r.jsx)(n.img,{src:i(65440).c+"",width:"927",height:"340"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select all contents in the folder and create a tar archive."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the tar file to the ",(0,r.jsx)(n.code,{children:"/temp"})," folder in the ",(0,r.jsx)(n.strong,{children:"ExecutionServer-VM"})," VM."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SSH to the VM."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop the Execution Server service by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop es\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Extract the tar file to ",(0,r.jsx)(n.code,{children:"/opt/ExecutionServer"}),", overriding any existing files."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the Execution Server service by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start es\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},43308:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/AzureConfigureCustomScript-8daaec6b56fca96bb7ddad688c7466f9.png"},95852:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/AzureSelectExtension-5beb4f7ba15b0448494a968cadd514d4.png"},60088:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/AzureStorageAccount-3dd4165acbd8b89ef816319a9717296f.png"},55540:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/AzureVMExtensionScript-111e5810ebe8dd5d83c32e34ef6ad70b.png"},65440:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/CloudShellPackageForCloudProviders-084d3fcd72f21268b00b3f07e3630f82.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var r=i(11504);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);