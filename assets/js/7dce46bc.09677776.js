"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[19368],{47340:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(17624),l=s(4552);const r={},t="Best Practices for CloudShell Production Environment",o={id:"install-configure/cloudshell-suite/appendix/best-practices-cs-prod/index",title:"Best Practices for CloudShell Production Environment",description:"This article discusses an assortment of best practices and recommendations for CloudShell production environments. In this article:",source:"@site/docs/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/index.md",sourceDirName:"install-configure/cloudshell-suite/appendix/best-practices-cs-prod",slug:"/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/index.md",tags:[],version:"current",lastUpdatedAt:171572335e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Appendix",permalink:"/cloudshell-help/next/category/appendix"},next:{title:"Database Trimming",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming"}},a={},c=[{value:"CloudShell Deployments",id:"cloudshell-deployments",level:2},{value:"CloudShell Portal",id:"cloudshell-portal",level:2},{value:"CloudShell Server",id:"cloudshell-server",level:2},{value:"Easy logging integration",id:"easy-logging-integration",level:2},{value:"Execution Servers",id:"execution-servers",level:2},{value:"IIS",id:"iis",level:2},{value:"MongoDB",id:"mongodb",level:2},{value:"New Job Scheduling",id:"new-job-scheduling",level:2},{value:"Pypi Server",id:"pypi-server",level:2},{value:"QualiX",id:"qualix",level:2},{value:"SQL Server",id:"sql-server",level:2},{value:"Sisense",id:"sisense",level:2},{value:"Additional points to consider",id:"additional-points-to-consider",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"best-practices-for-cloudshell-production-environment",children:"Best Practices for CloudShell Production Environment"}),"\n",(0,i.jsx)(n.p,{children:"This article discusses an assortment of best practices and recommendations for CloudShell production environments. In this article:"}),"\n",(0,i.jsx)(n.h2,{id:"cloudshell-deployments",children:"CloudShell Deployments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Start small and grow as you go: It is possible to install CloudShell suite components on a single machine and later redistribute different components to different servers as appropriate."}),"\n",(0,i.jsx)(n.li,{children:"Back up all custom configuration files to a central location whenever a change is made, including the customer.config, webconfig.xml and language override files."}),"\n",(0,i.jsx)(n.li,{children:"For high workloads, we may recommend certain CloudShell configurations. Contact your Technical Account Manager for guidance."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cloudshell-portal",children:"CloudShell Portal"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/configure-portal/best-practices",children:"Best Practices for CloudShell Portal"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cloudshell-server",children:"CloudShell Server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Do not use Windows client versions for CloudShell Server machines (Quali Server, Portal, Execution Servers, DB). For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cs-system-requirements/min-requirements-for-cs",children:"Minimum Requirements for CloudShell Servers and Clients"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"L1 resource automation is managed by Quali Server, unlike shells and scripts which are handled by the Execution Servers. So, make sure Quali Server has access to your Layer 1 devices."}),"\n",(0,i.jsxs)(n.li,{children:["If you're using CloudShell's RabbitMQ, change its default user's credentials, as explained in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/upgrade-rabbitmq-creds",children:"Update the RabbitMQ Credentials on Quali Server"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"easy-logging-integration",children:"Easy logging integration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use Elasti Stack (Filebeat) for additional logging and log visualization capabilities. For details, see ",(0,i.jsx)(n.a,{href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html",children:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"execution-servers",children:"Execution Servers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Execution Servers must have access to the respective non-L1 devices and cloud providers."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Execution Server redundancy: it is recommended to provision different parts of your lab to specific Execution Servers both for security purposes and performance. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The CloudShell admin's credentials are specified in plain text on the execution server. To increase security, remove the following line from the Linux execution server's process file at /etc/systemd/system/es.service:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ExecStartPre=/usr/bin/mono /opt/ExecutionServer/QsExecutionServerConsoleConfig.exe /s:<server ip> /u:<username> /p:<password> /esn:<es name> \u2026\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This line enables running the execution server's configuration every time the service is started. Moving forward, you will need to run the execution server's ",(0,i.jsx)(n.code,{children:"QsExecutionServerConsoleConfig"})," manually whenever any credentials change (for example, the Quali Server hostname). For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/linux-virtual-appliance/post-installation/configure/",children:"Configure the Linux Execution Server"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"iis",children:"IIS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use full IIS and not IIS Express."}),"\n",(0,i.jsx)(n.li,{children:"Do not turn off logging."}),"\n",(0,i.jsx)(n.li,{children:"Use HTTPS with a signed certificate."}),"\n",(0,i.jsx)(n.li,{children:"Set the value of the ASP Threads Per Processor Limit property: The default value is 25. The maximum recommended value is 100."}),"\n",(0,i.jsxs)(n.li,{children:["Enable IIS HTTP compression, as explained in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/configure-portal/best-practices#enable-dynamic-compression-on-your-iis-settings",children:"Enable dynamic compression on your IIS settings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mongodb",children:"MongoDB"}),"\n",(0,i.jsxs)(n.p,{children:["Use password protection, as illustrated in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/config-mongodb-connection",children:"Configure the MongoDB Database Connection"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For data trimming best practices, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming",children:"Database Trimming"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"new-job-scheduling",children:"New Job Scheduling"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set Kubernetes-based CloudShell services to use static IPs. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip",children:"Set the Mongo, Rabbit and Sandbox Services to Use Static IPs"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["It is recommended to use Kubernetes secrets to store sensitive information like user details and passwords instead of plain text. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params",children:"Customize the Deployment Configuration Parameters"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you're using the CloudShell-deployed RabbitMQ, change its default user's credentials, as explained in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/update-k8s-env",children:"Update the RabbitMQ Credentials in Kubernetes Environment"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pypi-server",children:"Pypi Server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set a password on the PyPi Server repository (in the Quali Server configuration wizard) to avoid breaking shell and script executions. Python package versions in the Quali Server\u2019s pypi server repository will constrict sandbox automation to use those packages, even if a newer version exists on public PyPi."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"qualix",children:"QualiX"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/post-installation-config/enable-https/configure-ssl-cert",children:"Configure SSL Certificate on QualiX 4.1 Docker Container"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sql-server",children:"SQL Server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use Full MSSQL in an AlwaysOn availability group configuration and not SQL Express."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Perform a daily backup of your CloudShell databases. For details, see ",(0,i.jsx)(n.a,{href:"../../../install-configure/cloudshell-suite/backup-restore",children:"Back Up and Restore CloudShell"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use backup compression"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use RAID 10 configuration for user binaries, data, log files, and TempDB for best performance and availability."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Allocate the right memory for MSSQL."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(59940).c+"",width:"688",height:"624"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Avoid using the SA account. Use Windows Authorization instead."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Do not compress files/databases."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create an SQL Server Database Alert for all events with a severity of 19 [fatal] and higher. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/sql/relational-databases/performance-monitor/create-a-sql-server-database-alert?view=sql-server-ver15",children:"https://docs.microsoft.com/en-us/sql/relational-databases/performance-monitor/create-a-sql-server-database-alert?view=sql-server-ver15"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For SQL Server Standard Edition hosted on a VM: SQL Server Standard Editions are limited to four sockets, or 24 physical cores, whichever is lower. So if you are using a VM, make sure that it is set to a maximum of 4 sockets, and '2 or more' cores per socket."}),"\n",(0,i.jsx)(n.p,{children:"Not following these suggestions may result in performance issues. For example, if the VM is set to use 8 sockets and 1 core per socket, since SQL Standard Edition only supports 4 sockets, only 50% of CPU is utilized."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sisense",children:"Sisense"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Schedule the daily ElastiCube build to start after it syncs with the CloudShell Insight DB. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cs-insight-bi/install-insight/synchronization",children:"Synchronization"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-points-to-consider",children:"Additional points to consider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key management:"})," CloudShell admin configuration keys provide many customization options. Applying keys requires restarting certain CloudShell services. During this time, certain CloudShell functionality may be unavailable. We therefore recommend to set a ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/maintenance-window",children:"Maintenance Window"})," in which to set the keys. For details about configuration keys, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations",children:"Advanced CloudShell Customizations"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Before migrating to your Production environment, make sure to test the staging environment against actual resources/Apps and traffic."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},59940:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/MsSqlServerPropertiesMemory-4bcc8c6c567da3f35032909fb2c85ac0.png"},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>t});var i=s(11504);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);