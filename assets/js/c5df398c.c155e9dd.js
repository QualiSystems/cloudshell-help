"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30932],{47684:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(17624),s=i(4552);const o={sidebar_position:2},r="Setting Up Execution Servers to Run Commands",l={id:"admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",title:"Setting Up Execution Servers to Run Commands",description:"This article explains how to configure execution servers to run commands in CloudShell. Note that associating execution servers to automation suites is done on the job level, as explained in Add jobs to an automation suite.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md",sourceDirName:"admin/cloudshell-execution-server-configurations",slug:"/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",permalink:"/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Connecting an Execution Server to Quali Server",permalink:"/admin/cloudshell-execution-server-configurations/connecting-an-execution-server-to-quali-server"},next:{title:"Optimizing Execution Provisioning",permalink:"/admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning"}},a={},c=[{value:"Managing execution servers",id:"managing-execution-servers",level:2},{value:"Distributed provisioning",id:"distributed-provisioning",level:2},{value:"Optimizing execution capacity",id:"optimizing-execution-capacity",level:3},{value:"Distributed command execution",id:"distributed-command-execution",level:3},{value:"Resource commands",id:"resource-commands",level:3},{value:"Controlling execution server selection for resource commands",id:"controlling-execution-server-selection-for-resource-commands",level:2},{value:"Controlling execution server selection for App deployments",id:"controlling-execution-server-selection-for-app-deployments",level:2},{value:"Controlling execution server selection for blueprint commands",id:"controlling-execution-server-selection-for-blueprint-commands",level:2},{value:"Configuring the Execution Server to Run as a Process by Default",id:"configuring-the-execution-server-to-run-as-a-process-by-default",level:2},{value:"Working with local tests",id:"working-with-local-tests",level:2},{value:"Configuring Execution Servers to Deploy vCenter Apps",id:"configuring-execution-servers-to-deploy-vcenter-apps",level:2},{value:"Number of execution slots for VM deployments",id:"number-of-execution-slots-for-vm-deployments",level:3},{value:"Deployments from OVF image files",id:"deployments-from-ovf-image-files",level:3},{value:"Configuring Execution Servers to support Python 3 shells and scripts",id:"configuring-execution-servers-to-support-python-3-shells-and-scripts",level:2},{value:"Enabling custom execution servers",id:"enabling-custom-execution-servers",level:2},{value:"Setting the Virtual Environment validity period",id:"setting-the-virtual-environment-validity-period",level:2},{value:"Setting the logging level for Python drivers and scripts running on an Execution Server",id:"setting-the-logging-level-for-python-drivers-and-scripts-running-on-an-execution-server",level:2},{value:"Setting environment variables to be used by Python driver instances",id:"setting-environment-variables-to-be-used-by-python-driver-instances",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"\n",(0,t.jsxs)(n.p,{children:["This article explains how to configure execution servers to run commands in CloudShell. Note that associating execution servers to automation suites is done on the job level, as explained in ",(0,t.jsx)(n.a,{href:"/portal/job-scheduling/manage-automation-suites/add-suites#add-jobs-to-an-automation-suite",children:"Add jobs to an automation suite"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"managing-execution-servers",children:"Managing execution servers"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Execution Servers"})," management pages in the web portal allow you to both manage and troubleshoot your execution servers, providing critical, real time data about the status of your execution servers, command and job executions, and troubleshooting information and options. For additional information, see ",(0,t.jsx)(n.a,{href:"../../admin/manage-dashboard/execution-servers",children:"Managing Execution Servers"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"distributed-provisioning",children:"Distributed provisioning"}),"\n",(0,t.jsx)(n.p,{children:"To allow for more flexibility and control, CloudShell uses execution servers to manage the executions of jobs and commands. Each CloudShell execution server has a job and command capacity, which can be modified as needed. CloudShell execution servers do not require a license, allowing for multiple execution servers to be used in CloudShell. For example, you can install several execution servers to distribute execution tasks and use execution servers that are physically closest to geographically distributed sites to minimize latency/avoid firewall issues."}),"\n",(0,t.jsx)(n.p,{children:"Execution servers can be installed in Windows and Linux environments."}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:"Blueprint orchestration can be configured to run on one execution server, while the blueprint's orchestration can trigger resource commands that run on a completely different execution server. In this case, the orchestration will wait for the resource command(s) to finish. This kind of design decouples the resource level connectivity requirements from the orchestration."})}),"\n",(0,t.jsx)(n.h3,{id:"optimizing-execution-capacity",children:"Optimizing execution capacity"}),"\n",(0,t.jsxs)(n.p,{children:["For detailed information, see ",(0,t.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning",children:"Optimizing Execution Provisioning"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"distributed-command-execution",children:"Distributed command execution"}),"\n",(0,t.jsxs)(n.p,{children:['Multiple execution servers can be deployed in order to scale out the provisioning and resource command tasks. By default, blueprint and resource commands are distributed between the execution servers according to their capacity. It is possible, however, to specify more explicit rules to control the execution server selection for commands, as explained in the "execution server selection" sections below. For additional information, see ',(0,t.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning",children:"Optimizing Execution Provisioning"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"resource-commands",children:"Resource commands"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"In this section, the term resource denotes resource, service or App."})}),"\n",(0,t.jsx)(n.p,{children:"When a resource command is executed, the system first checks whether a driver for that resource is already active on one of the execution servers. If it is, the command is automatically sent to that driver to be queued and handled. In case no driver is currently active, the resource driver is started on an available execution server."}),"\n",(0,t.jsx)(n.h2,{id:"controlling-execution-server-selection-for-resource-commands",children:"Controlling execution server selection for resource commands"}),"\n",(0,t.jsx)(n.p,{children:"Attributes can be used to match resource commands to the right execution server based on geographical location of the server and resource, execution server capabilities or other concerns. In a multi-site deployment, for example, there is an advantage in ensuring that overseas lab resources are only controlled by an on-premise execution server. This will help reduce the network latency and improve performance."}),"\n",(0,t.jsxs)(n.p,{children:["For additional information, see ",(0,t.jsx)(n.a,{href:"/portal/inventory/managing-resources/associate-resources-to-es",children:"Associating Resources to Specific Execution Servers"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"controlling-execution-server-selection-for-app-deployments",children:"Controlling execution server selection for App deployments"}),"\n",(0,t.jsx)(n.p,{children:"To learn how to do this, see the appropriate article:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For private cloud Apps, see ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For public cloud Apps, see ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"controlling-execution-server-selection-for-blueprint-commands",children:"Controlling execution server selection for blueprint commands"}),"\n",(0,t.jsx)(n.p,{children:"Blueprint driver commands are also distributed between the execution servers based on availability and capacity. In order to restrict blueprint commands to a specific group of execution servers, a configuration key needs to be added specifying the relevant selector attribute value."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a selector attribute and assign it to an execution server, as explained in ",(0,t.jsx)(n.a,{href:"/portal/inventory/managing-resources/associate-resources-to-es",children:"Associating Resources to Specific Execution Servers"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Specify an attribute value for blueprint commands.\xa0Add the following configuration key to the Quali server ",(0,t.jsx)(n.code,{children:"customer.config"})," file: ",(0,t.jsx)(n.code,{children:"EnvironmentCommandsESRestrictions"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The value should be the attribute name and value given the syntax ",(0,t.jsx)(n.code,{children:"Name=Value"}),". For example:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(46744).c+"",width:"565",height:"28"})}),"\n",(0,t.jsx)(n.h2,{id:"configuring-the-execution-server-to-run-as-a-process-by-default",children:"Configuring the Execution Server to Run as a Process by Default"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/install-configure/cloudshell-suite/configure-products/config-execution-server-process",children:"Configure the Execution Server to Run as a Process by Default"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"working-with-local-tests",children:"Working with local tests"}),"\n",(0,t.jsxs)(n.p,{children:["If you are using a source control tool and wish to configure CloudShell to work with your local tests, see ",(0,t.jsx)(n.a,{href:"../setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/",children:"Source Control: Using Local Tests in Automation Suites"})," or contact Quali support or your Customer Success representative."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-execution-servers-to-deploy-vcenter-apps",children:"Configuring Execution Servers to Deploy vCenter Apps"}),"\n",(0,t.jsx)(n.h3,{id:"number-of-execution-slots-for-vm-deployments",children:"Number of execution slots for VM deployments"}),"\n",(0,t.jsx)(n.p,{children:"Take the following considerations into account when setting the number of Execution Server command slots for the deployment of Apps."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"App deployment"}),(0,t.jsx)(n.th,{children:"Number of command slots required"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Apps deployed manually"})}),(0,t.jsx)(n.td,{children:"3 slots per App"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Apps deployed automatically by CloudShell setup"})}),(0,t.jsxs)(n.td,{children:["2n + 1 (n = total number of Apps to be deployed at the same time)",(0,t.jsx)("br",{}),"For example, deploying 5 Apps requires at least 11 execution slots."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"deployments-from-ovf-image-files",children:"Deployments from OVF image files"}),"\n",(0,t.jsx)(n.p,{children:"The following configurations should be performed on each execution server machine that will be used by the vCenter resource to deploy VMs from OVF image files during App deployments."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure access to vCenter OVF image file path"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the OVF tool"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-execution-servers-to-support-python-3-shells-and-scripts",children:"Configuring Execution Servers to support Python 3 shells and scripts"}),"\n",(0,t.jsx)(n.p,{children:"Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s). Without this installation, CloudShell will not create the Python virtual environment for the shell or script's execution on the Execution Server."}),"\n",(0,t.jsx)(n.h2,{id:"enabling-custom-execution-servers",children:"Enabling custom execution servers"}),"\n",(0,t.jsx)(n.p,{children:"You can enable or disable the use of your own custom-built execution server. This feature is enabled by default."}),"\n",(0,t.jsx)(n.p,{children:"To enable custom execution servers:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\customer.config"})," file, and add the following key:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<add key="EnableCustomServerTypes" value="True"/>'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"CloudShell Portal IIS"})," service."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-the-virtual-environment-validity-period",children:"Setting the Virtual Environment validity period"}),"\n",(0,t.jsx)(n.p,{children:"CloudShell virtual environments (venv) are used to isolate Python driver and script executions on the Execution Server, and include all the dependencies required by the execution. Since dependencies may change, the Execution Server has the capability to reinstall/upgrade the venv dependencies on each subsequent execution of a script or driver that has a live venv. However, doing this is time-consuming, even if the requirements are already met."}),"\n",(0,t.jsxs)(n.p,{children:["It is therefore important to limit the number of times venvs are updated by the Execution Servers. This is done using the ",(0,t.jsx)(n.code,{children:"VirtualEnvironmentLifetimeDurationInMinutes"})," configuration key, which sets the global validity period, in minutes, for venvs. During this timeframe, on subsequent executions of the venv's driver or script, the Execution Server will not attempt to update the venv as long as the validity period has not expired."]}),"\n",(0,t.jsx)(n.p,{children:"The default value is 480 minutes."}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the Execution Server restarts and there are existing virtual environments in place, the Execution Server will update the venv and reset the validity period."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This key applies to online and offline modes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Venvs are used for resource drivers, resource scripts and orchestration scripts."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Since old venvs may still be in use, they are not deleted until the next CloudShell update or Execution Server restart."}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To Setting the Virtual Environment validity period:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file, and add the following key:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<add key="VirtualEnvironmentLifetimeDurationInMinutes" value="480"/>'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the desired value."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-the-logging-level-for-python-drivers-and-scripts-running-on-an-execution-server",children:"Setting the logging level for Python drivers and scripts running on an Execution Server"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to set the logging level for automation processes running on a specific Execution Server or Python driver (for drivers, see CloudShell Dev Guide's ",(0,t.jsx)(n.a,{href:"/devguide/developing-shells/tips-and-tricks-for-shells",children:"Tips and Tricks for Shells"})," article). The logging levels are: DEBUG, INFO, WARN and ERROR.Only messages that are greater than the specified log level are saved to the logs."]}),"\n",(0,t.jsxs)(n.p,{children:["Logs are organized in different files according to resource and sandbox. The folder location will be relative to the driver in the virtual environment location at: ",(0,t.jsx)(n.code,{children:"%venv%\\[drivername]\\Lib\\site-packages\\cloudshell\\Logs"})," (e.g. C:\\ProgramData\\QualiSystems\\venv\\Deployment_Orchestrator_5_2\\Lib\\site-packages\\cloudshell\\Logs). Under windows, ",(0,t.jsx)(n.code,{children:"[venv]"})," will be located at ",(0,t.jsx)(n.code,{children:"%programdata%\\qualisystems\\venv"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To set the logging level for Python drivers and scripts:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\TestShell\\ExecutionServer\\customer.config"})," file, and add the following key:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<add key="DefaultPythonEnvrionmentVariables" value="LOG_LEVEL=<log-level>"/>'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<log-level>"})," with the desired level."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<add key="DefaultPythonEnvrionmentVariables" value="LOG_LEVEL=DEBUG"/>'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"TestShell Execution Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-environment-variables-to-be-used-by-python-driver-instances",children:"Setting environment variables to be used by Python driver instances"}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"DefaultPythonEnvrionmentVariables"})," key, you can define environment variables to be used by the driver. The environment variable is defined on the Execution Server and will be used by the appropriate driver instances that are running on that Execution Server."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To set environment variables for Python driver instances:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\TestShell\\ExecutionServer\\customer.config"})," file, and add the following key:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<add key="DefaultPythonEnvrionmentVariables" value="<variable-pairs>"/>'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Replace each ",(0,t.jsx)(n.code,{children:"<variable-pairs>"})," with a semicolon (;) separated list of the appropriate variable name-value pairs."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<add key="DefaultPythonEnvrionmentVariables" value="name1=value1;name2=value2,"/>'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"TestShell Execution Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"What happens if the Execution Server is offline while I run the update process?"})}),"\n",(0,t.jsx)(n.p,{children:"The execution server will still change to a state of Waiting for update and once it gets back online, it will start the update process first, and only then it will get jobs to run."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"What happens if I (or someone else) start another update process before the previous one is done?"})}),"\n",(0,t.jsx)(n.p,{children:"You cannot start another process until the update on the QualiServer is done."}),"\n",(0,t.jsx)(n.p,{children:"Once its done, and the system is updating or waiting to update the execution servers, you can start another update process and even provide different blueprint parameters."}),"\n",(0,t.jsx)(n.p,{children:"Idle stations that were already updated by the previous process and stations that are currently updating will start the update again. Each station that is in a Waiting for update state will remain in that state and will execute the batch file with the new parameters when it becomes idle"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"If the batch files fails, how can I check what happened?"})}),"\n",(0,t.jsx)(n.p,{children:"On each machine, you define the batch file to launch and a folder in which we save the outputs from these batch files. If your batch files outputs any information about the process, then you'll be able to see it in these files and check what might have gone wrong. If the process stopped on TestShell Studio, you can check the logs of the portal for other relevant details. If it failed on the execution server, check the logs of it to see if there is more information."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},46744:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Management_2_3_565x28-ffc8e2db5cafcf8ed13ed0c57c40c79c.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>r});var t=i(11504);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);