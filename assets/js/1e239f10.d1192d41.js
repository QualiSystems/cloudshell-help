"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[73018],{91456:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var l=n(74848),i=n(28453);const o={sidebar_position:2},r="Collecting Logs",t={id:"troubleshooting/troubleshooting-overview/collecting-logs",title:"Collecting Logs",description:"This topic will guide you on how to troubleshoot CloudShell execution errors. CloudShell saves details of execution activity in different logs, according to automation piece and execution server type (Windows or Linux).",source:"@site/versioned_docs/version-2024.1/troubleshooting/troubleshooting-overview/collecting-logs.md",sourceDirName:"troubleshooting/troubleshooting-overview",slug:"/troubleshooting/troubleshooting-overview/collecting-logs",permalink:"/troubleshooting/troubleshooting-overview/collecting-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/troubleshooting/troubleshooting-overview/collecting-logs.md",tags:[],version:"2024.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What\u2019s in this Guide",permalink:"/troubleshooting/troubleshooting-overview/whats-in-this-guide"},next:{title:"Useful Tools and Utilities",permalink:"/troubleshooting/troubleshooting-overview/useful-tools-and-utilities"}},c={},d=[{value:"CloudShell system logs",id:"cloudshell-system-logs",level:2},{value:"QualiX logs",id:"qualix-logs",level:2},{value:"Collecting QualiX logs",id:"collecting-qualix-logs",level:3},{value:"Connection request logs",id:"connection-request-logs",level:3},{value:"Guacamole service logs",id:"guacamole-service-logs",level:3},{value:"Docker logs (QualiX 4.1 and below)",id:"docker-logs-qualix-41-and-below",level:3},{value:"Docker logs (QualiX 5.0 and above)",id:"docker-logs-qualix-50-and-above",level:3},{value:"Linux execution server logs",id:"linux-execution-server-logs",level:2},{value:"Linux execution server logs (Docker)",id:"linux-execution-server-logs-docker",level:2},{value:"Windows execution server logs",id:"windows-execution-server-logs",level:2},{value:"Shell/script execution logs",id:"shellscript-execution-logs",level:2},{value:"Shell execution logs",id:"shell-execution-logs",level:3},{value:"Orchestration script execution logs",id:"orchestration-script-execution-logs",level:3},{value:"Virtual environment logs",id:"virtual-environment-logs",level:3},{value:"L1 shell execution logs",id:"l1-shell-execution-logs",level:2},{value:"New Job Scheduling Logs",id:"new-job-scheduling-logs",level:2},{value:"QAC logs",id:"qac-logs",level:2}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"collecting-logs",children:"Collecting Logs"})}),"\n",(0,l.jsx)(s.p,{children:"This topic will guide you on how to troubleshoot CloudShell execution errors. CloudShell saves details of execution activity in different logs, according to automation piece and execution server type (Windows or Linux)."}),"\n",(0,l.jsx)(s.p,{children:"If you are a user or an Admin, you can use these logs to troubleshoot your issue. In some cases, if you have approached Quali Customer Support for assistance, they may ask for these logs to analyze the circumstances that led up to the error."}),"\n",(0,l.jsxs)(s.p,{children:["We also recommend that you use the system messages displayed in CloudShell Portal, for example, the ",(0,l.jsx)(s.strong,{children:"Activity Details Window"}),", which presents detailed information pertaining to a specific error or message in the activity feed, including the event's logging information and (for command execution errors) the execution server on which the command is supposed to run. For more information on all CloudShell system messages, see the CloudShell help topic ",(0,l.jsx)(s.a,{href:"../../portal/sandboxes/sandbox-workspace/system-messages",children:"Viewing System Messages"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"cloudshell-system-logs",children:"CloudShell system logs"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"CloudShell Monitor"})," is a tool that collects CloudShell logs and data from the machine it is running on. It delivers a snapshot of the situation immediately prior to when the logs were extracted."]}),"\n",(0,l.jsxs)(s.p,{children:["We suggest that you watch this short video demonstrating how to collect and save system log files using ",(0,l.jsx)(s.strong,{children:"CloudShell Monitor"}),":"]}),"\n",(0,l.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/zZRbfOgrOb4",title:"Collecting CloudShell logs",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To collect the system logs, perform the following steps:"})}),"\n",(0,l.jsx)(s.p,{children:"You will need the logs from the Quali Server machine and the relevant client machine (Studio, Execution Server, CloudShell Portal, etc.)."}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["On the appropriate machine, open ",(0,l.jsx)(s.strong,{children:"CloudShell Monitor"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Click ",(0,l.jsx)(s.strong,{children:"Save Logs"})," and from the drop-down list, select ",(0,l.jsx)(s.strong,{children:"Save Logs and Windows Events"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"A zip file containing the log files is downloaded to your computer."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Save the zip file."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Open a support ticket at ",(0,l.jsx)(s.a,{href:"https://support.quali.com/",children:"https://support.quali.com/"})," and attach the zip file to your ticket."]}),"\n",(0,l.jsxs)(s.admonition,{type:"note",children:[(0,l.jsxs)(s.p,{children:["If the zip file is too large to attach to your support ticket (greater than 20 MB), you will receive a ",(0,l.jsx)(s.strong,{children:"Payload is Too Large"})," message in the top right corner of your screen. If this is the case, do the following:"]}),(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Log on to the ",(0,l.jsx)(s.a,{href:"https://ftp.quali.com/",children:"QualiSystems FTP"})," site.",(0,l.jsx)(s.br,{}),"\n","If you do not have the required credentials, contact customer support."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Save the zip file on QualiSystems FTP.",(0,l.jsx)(s.br,{}),"\n","The file is saved in your account's FTP folder."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["In the ticket, state that you uploaded the log files to QualiSystems FTP.",(0,l.jsx)(s.br,{}),"\n","A Quali support representative will review the logs and contact you."]}),"\n"]}),"\n"]})]}),"\n",(0,l.jsx)(s.p,{children:"The zip file contains the following files, depending on the CloudShell component:"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Log name"}),(0,l.jsx)(s.th,{children:"Type"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"EventLogs"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"RemoteTeamServer"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"SetupLogs"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Monitor"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Authoring"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Configuration"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell License Server"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Remote Runner"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Resource Management Client"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Runtime"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Sandbox API"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Sandbox API Gateway"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"CloudShell Server Proxy"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Quali Server"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"TestShell Execution Server"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"TestShell QSMQ Server"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"TestShell Studio"}),(0,l.jsx)(s.td,{children:"File folder"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"RunningProcesses.txt"}),(0,l.jsx)(s.td,{children:"Text Document"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"SystemInfo.exe.txt"}),(0,l.jsx)(s.td,{children:"Text Document"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"SystemInformation.txt"}),(0,l.jsx)(s.td,{children:"Text Document"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"QualisystemsRegistry.txt"}),(0,l.jsx)(s.td,{children:"Text Document"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"InstallInfo.txt"}),(0,l.jsx)(s.td,{children:"Text Document"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"cs_usage_data.zip"}),(0,l.jsx)(s.td,{children:"ZIP package"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"qualix-logs",children:"QualiX logs"}),"\n",(0,l.jsx)(s.h3,{id:"collecting-qualix-logs",children:"Collecting QualiX logs"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Open ",(0,l.jsx)(s.a,{href:"https://support.quali.com/hc/en-us/articles/360037650694",children:"Quali's QualiX Download Page"}),', search the page for "utilities", and click the ',(0,l.jsx)(s.strong,{children:"Utilities"})," link of the appropriate QualiX version."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Extract the files to your local directory."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Edit the ",(0,l.jsx)(s.code,{children:"GetQualiXInfo.ps1"})," file and set the Username and Password to the QualiX machine."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Save the file and run the ",(0,l.jsx)(s.code,{children:"GetQualiXInfo.ps1"})," file with Windows PowerShell."]}),"\n",(0,l.jsx)(s.p,{children:"The script connects to QualiX using SSH and extracts the logs from the QualiX machine."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"When prompted, enter the IP\xa0address of the QualiX machine."}),"\n",(0,l.jsx)(s.p,{children:"The command returns the QualiX logs."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Transfer the files from the Linux machine to your local machine."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Open a support ticket and attach the files to your ticket."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"connection-request-logs",children:"Connection request logs"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To get the connection request logs for all services (QualiX over vSphere/Docker):"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"SSH to the QualiX Server/Docker host and access the log here:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"/var/log/nginx/access.log\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"guacamole-service-logs",children:"Guacamole service logs"}),"\n",(0,l.jsxs)(s.p,{children:["For details about the Guacamole services, see ",(0,l.jsx)(s.a,{href:"/install-configure/qualix/high-level-setup-process",children:"QualiX High-level Setup Process"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"To get the following logs, SSH to QualiX Server and run the appropriate command."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To get the Qualix-tomcat service application logs:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"journalctl -u qualix-tomcat\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To get the Qualix-guacd service application logs:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"journalctl -u qualix-guacd\n"})}),"\n",(0,l.jsx)(s.h3,{id:"docker-logs-qualix-41-and-below",children:"Docker logs (QualiX 4.1 and below)"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To set the log level for the Docker logs:"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"SSH to the Docker host and run:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"sudo GUACD_LOG_LEVEL=debug\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To get the docker logs for a specific container:"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"SSH to the Docker host and run:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"sudo docker logs -f <container_id>\n"})}),"\n",(0,l.jsxs)(s.p,{children:["To get the container ids, run ",(0,l.jsx)(s.code,{children:"sudo docker ps -a"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To get the logs for the guacamole/guacd services running in Docker:"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"SSH to the Docker host."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"If containers are running, destroy them:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"sudo docker stop guacamole guacd && docker rm guacamole guacd\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Edit /opt/qualix/docker-compose.yml and set:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"sudo GUACD_LOG_LEVEL=debug\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Start the containers:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"cd /opt/qualix && ./start.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"View the logs:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"sudo docker logs guacamole\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"sudo docker logs guacd\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"docker-logs-qualix-50-and-above",children:"Docker logs (QualiX 5.0 and above)"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Get logs of guacamole:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"docker logs -f qualix-guacamole\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Get logs for guacd:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"docker logs -f qualix-guacd\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Get logs for wmks-proxy:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"docker logs -f qualix-wmks-proxy\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Get logs for nginx:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-javascript",children:"docker logs -f qualix-nginx\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"linux-execution-server-logs",children:"Linux execution server logs"}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"If you are using a Windows machine to extract logs from the Linux execution server, we recommend using an SCP client to connect via SSH to the Linux execution server to browse though the logs. You can also transfer the files to a Windows machine in order to send them, if needed."})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To extract logs if you are using Linux execution server on a Virtual Appliance (VA):"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"General execution server logs: ~/ExecutionServer/Logs"}),"\n",(0,l.jsx)(s.li,{children:"Shell execution logs: /var/log/qualiSystems/"}),"\n",(0,l.jsx)(s.li,{children:"Orchestration script execution logs: ./usr/share/QualiSystems/logs"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To extract logs if you are using Linux ES on CloudFormation (AWS) or CloudShell Template (Azure):"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"./opt/ExecutionServer/Logs"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"/var/log/qualiSystems/"})}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"linux-execution-server-logs-docker",children:"Linux execution server logs (Docker)"}),"\n",(0,l.jsxs)(s.p,{children:["If you set up an Execution Server using Docker, see ",(0,l.jsx)(s.a,{href:"/install-configure/linux-virtual-appliance/installation-procedure/create-es-from-docker#steps-to-collect-and-share-logs-on-linux-using-docker",children:"Steps to Collect and Share Logs on Linux Using Docker"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"windows-execution-server-logs",children:"Windows execution server logs"}),"\n",(0,l.jsxs)(s.p,{children:["When a Windows-based execution server runs a Python command, either shell-based or an orchestration script, the execution server's logs will be saved here: ",(0,l.jsx)(s.code,{children:"C:\\ProgramData\\QualiSystems\\logs"}),"."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Shell execution logs (resource discovery and inventory commands): ",(0,l.jsx)(s.code,{children:"C:\\ProgramData\\QualiSystems\\logs\\inventory"})]}),"\n",(0,l.jsxs)(s.p,{children:["Note that older logging packages are sometimes logged to ",(0,l.jsx)(s.code,{children:"C:\\ProgramData\\QualiSystems\\logs\\Autoload"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Latest shell/cloud provider execution logs: ",(0,l.jsx)(s.code,{children:"C:\\ProgramData\\QualiSystems\\logs\\<reservation-id>\\<driver name>"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Latest orchestration script logs: ",(0,l.jsx)(s.code,{children:"C:\\ProgramData\\QualiSystems\\logs\\<reservationid>"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"shellscript-execution-logs",children:"Shell/script execution logs"}),"\n",(0,l.jsx)(s.h3,{id:"shell-execution-logs",children:"Shell execution logs"}),"\n",(0,l.jsxs)(s.p,{children:["Shell execution logs reside on the Execution Server running the shell at ",(0,l.jsx)(s.code,{children:"%ProgramData%\\Qualisystems\\logs\\<<reservation\\_id>>\\<<shell name>>\\*.logs"})," folder in a dedicated sub-folder with the reservation ID as the name."]}),"\n",(0,l.jsx)(s.p,{children:"For example:"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(31709).A+"",width:"554",height:"66"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To customize the shell\u2019s logging policy, enable debug logging:"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["See ",(0,l.jsx)(s.a,{href:"/devguide/developing-shells/tips-and-tricks-for-shells#logging-in-shells",children:"Logging in shells"}),"."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To change the log level:"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["Navigate to ",(0,l.jsx)(s.code,{children:"C:\\ProgramData\\QualiSystems\\venv\\<shell-name>\\Lib\\site-packages\\cloudshell\\core\\logger\\qs_config.ini"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:["Change ",(0,l.jsx)(s.code,{children:"LOG_LEVEL='INFO'"})," as appropriate. For example, ",(0,l.jsx)(s.code,{children:"LOG_LEVEL='DEBUG'"}),"."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"orchestration-script-execution-logs",children:"Orchestration script execution logs"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Orchestration script logs"})," reside on the Execution Server running the script at ",(0,l.jsx)(s.code,{children:"%programdata%\\QualiSystems\\logs<reservationid>"})," folder in a dedicated sub-folder with the reservation ID as the name."]}),"\n",(0,l.jsx)(s.p,{children:"For example:"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(22167).A+"",width:"558",height:"108"})}),"\n",(0,l.jsxs)(s.p,{children:["Setting up and retrieving script logs is detailed in ",(0,l.jsx)(s.a,{href:"/devguide/develop-orch-scripts/script-deep-dive#logging-in-orchestration-scripts",children:"Logging in orchestration scripts"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"virtual-environment-logs",children:"Virtual environment logs"}),"\n",(0,l.jsx)(s.p,{children:"The virtual environment creation process is as follows:"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(31580).A+"",width:"722",height:"188"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Shell/script package installations"})," logged at InstallRequirements.txt file: ",(0,l.jsx)(s.code,{children:"~\\QualiSystems\\TestShell\\ExecutionServer\\Logs\\QsPythonDriverHost\\"})]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"\\QualiSystems\\TestShell\\ExecutionServer\\Logs\\QsPythonDriverHost\\"})}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"If the virtual environment fails to build"}),", CloudShell will create a log record in the ",(0,l.jsx)(s.code,{children:"ExecutionServer\\Logs"})," file (",(0,l.jsx)(s.code,{children:"~\\QualiSystems\\TestShell\\ExecutionServer\\Logs\\QsRuntimeService.txt"}),"). But in some cases you might want to enable DEBUG logs to get more details."]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"l1-shell-execution-logs",children:"L1 shell execution logs"}),"\n",(0,l.jsx)(s.p,{children:"Look here for the L1 shell execution logs on the Quali Server machine:"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"~QualiSystems\\CloudShell\\Server\\Logs\\<L1 shell name>"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"new-job-scheduling-logs",children:"New Job Scheduling Logs"}),"\n",(0,l.jsxs)(s.p,{children:["CloudShells logs events related to the New Job Scheduling's Kubernetes services. For details, see ",(0,l.jsx)(s.a,{href:"/jss/new-jss-logs",children:"New Job Scheduling Service Logs"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"qac-logs",children:"QAC logs"}),"\n",(0,l.jsx)(s.p,{children:"QAC does the following:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Scheduler of jobs in the original Job Scheduling: Determines whether a job can be executed within a given time range and when a blueprint can be resolved (for jobs that have an attached blueprint)"}),"\n",(0,l.jsxs)(s.li,{children:["Determines the next available time slot (available time slots are proposed in the ",(0,l.jsx)(s.strong,{children:"Resolve Conflicts"})," window that is displayed when reserving a blueprint with resource conflicts)"]}),"\n"]}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsxs)(s.p,{children:["QAC logs are disabled by default. Once enabled, future QAC logs will be included in the ",(0,l.jsx)(s.a,{href:"#cloudshell-system-logs",children:"CloudShell system logs"})," ZIP file."]})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To enable QAC logs:"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Edit the file ",(0,l.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\log4net.config"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Remove ",(0,l.jsx)(s.code,{children:"<--"})," and ",(0,l.jsx)(s.code,{children:"--\x3e"})," at the beginning and end of the qacLogs section:"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(2321).A+"",width:"773",height:"636"})}),"\n",(0,l.jsx)(s.p,{children:"So it look as follows:"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(19611).A+"",width:"772",height:"633"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Restart the ",(0,l.jsx)(s.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},22167:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/Scripts-Deep-Dive-538f6a8e8af64fa9eed764622d3187d4.png"},31709:(e,s,n)=>{n.d(s,{A:()=>l});const l="data:image/png;base64,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"},2321:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/QACSection-f0e7a2f114e9234ce39571f0421381e3.png"},19611:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/QACUncommented-962b9eb551446a7b372b32c4aa537c2a.png"},31580:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/venv-creation-flow_722x188-a5391bdc1d53138044a1164c64c73c6c.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>t});var l=n(96540);const i={},o=l.createContext(i);function r(e){const s=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(o.Provider,{value:s},e.children)}}}]);