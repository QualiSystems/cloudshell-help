"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[62112],{98737:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var i=l(74848),o=l(28453);const r={sidebar_position:1},s="Configure log4net Appenders for Central Logging",t={id:"install-configure/cloudshell-suite/central-logging/config-log4net",title:"Configure log4net Appenders for Central Logging",description:"This article explains how to set up the log4net appenders for Quali Server and each Execution Server (New Job Scheduling logs are managed via FileBeat and configured separately). The log4net appenders define where to send the json logs collected by FileBeat as well as the log retention policy.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/central-logging/config-log4net.md",sourceDirName:"install-configure/cloudshell-suite/central-logging",slug:"/install-configure/cloudshell-suite/central-logging/config-log4net",permalink:"/2023.3/install-configure/cloudshell-suite/central-logging/config-log4net",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/central-logging/config-log4net.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Central Logging Configuration",permalink:"/2023.3/install-configure/cloudshell-suite/central-logging/"},next:{title:"Configure Elastic Stack for Central Logging",permalink:"/2023.3/install-configure/cloudshell-suite/central-logging/modify-cloudshell"}},c={},a=[{value:"Using the example log4net files",id:"using-the-example-log4net-files",level:2},{value:"Configuring the json appenders on the existing log4net files",id:"configuring-the-json-appenders-on-the-existing-log4net-files",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configure-log4net-appenders-for-central-logging",children:"Configure log4net Appenders for Central Logging"})}),"\n",(0,i.jsx)(n.p,{children:"This article explains how to set up the log4net appenders for Quali Server and each Execution Server (New Job Scheduling logs are managed via FileBeat and configured separately). The log4net appenders define where to send the json logs collected by FileBeat as well as the log retention policy."}),"\n",(0,i.jsxs)(n.p,{children:["There are two log4net configuration files, one for Quali Server and another for each execution server. Starting with 2021.2, example log4net files with the new json appenders are included alongside the existing ",(0,i.jsx)(n.code,{children:"log4net.config"})," files in the Quali Server and Execution Server installation directories. You may use these example files as is. However, if you are using customized ",(0,i.jsx)(n.code,{children:"log4net.config"})," files, you may wish to copy the relevant sections from the example files into the log4net files, as explained in ",(0,i.jsx)(n.a,{href:"/2023.3/install-configure/cloudshell-suite/central-logging/config-log4net#configuring-the-json-appenders-on-the-existing-log4net-files",children:"Configuring the json appenders on the existing log4net files"})," below."]}),"\n",(0,i.jsx)(n.p,{children:"The example files are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"log4net.config.json.example"})," applies to Quali Server. Resides in the Quali Server installation directory (By default: ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"QsExecutionServer.exe.config.jsonlogs.example"})," applies to Execution Servers. Resides in the Execution server installation directory on each execution server (By default: ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\TestShell\\ExecutionServer"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-example-log4net-files",children:"Using the example log4net files"}),"\n",(0,i.jsxs)(n.p,{children:["The example log4net files are already configured properly and do not require any modifications. Feel free to use them if your ",(0,i.jsx)(n.code,{children:"log4net.config"})," files have little to no customizations."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To use the example log4net files:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On the Quali Server machine, do the following","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"\\CloudShell\\Server"})," installation directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Backup the existing ",(0,i.jsx)(n.code,{children:"log4net.config"}),' file by renaming it to "log4net.config-org".']}),"\n",(0,i.jsxs)(n.li,{children:["On the Quali Server machine, rename ",(0,i.jsx)(n.code,{children:"log4net.config.json.example"}),' to "log4net.config".']}),"\n",(0,i.jsxs)(n.li,{children:["Update the new ",(0,i.jsx)(n.code,{children:"log4net.config"})," file with any required customizations from the ",(0,i.jsx)(n.code,{children:"log4net.config-org"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:["Restart ",(0,i.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On each Execution Server machine, do the following:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"\\TestShell\\ExecutionServer"})," installation directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Backup the existing ",(0,i.jsx)(n.code,{children:"QsExecutionServer.exe.config"}),' file by renaming it to "QsExecutionServer.exe.config-org".']}),"\n",(0,i.jsxs)(n.li,{children:["Rename ",(0,i.jsx)(n.code,{children:"QsExecutionServer.exe.config.jsonlogs.example"}),' to "QsExecutionServer.exe.config".']}),"\n",(0,i.jsxs)(n.li,{children:["Update the new ",(0,i.jsx)(n.code,{children:"QsExecutionServer.exe.config"})," file with any required customizations from the ",(0,i.jsx)(n.code,{children:"QsExecutionServer.exe.config-org"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:["Restart ",(0,i.jsx)(n.strong,{children:"TestShell Execution Server"})," service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-json-appenders-on-the-existing-log4net-files",children:"Configuring the json appenders on the existing log4net files"}),"\n",(0,i.jsxs)(n.p,{children:["If your ",(0,i.jsx)(n.code,{children:"log4net.config"})," files are heavily customized, it may be easier to update them with the json appenders and loggers from the example files. Perform the below procedure for Quali Server and each Execution Server in CloudShell."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To configure log4net appenders:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"log4net.config.json.example"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"The file includes several appender sections, one for each json log."}),"\n",(0,i.jsxs)(n.p,{children:["For example, appender section for the ",(0,i.jsx)(n.code,{children:"TeamServer.Service"})," log."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markup",children:'<appender name="RollingJsonFileAppender" type="log4net.Appender.RollingFileAppender">\n    <file value="JsonLogs\\TeamServer.Service.txt" />\n    <appendToFile value="true" />\n    <rollingStyle value="Size" />\n    <maxSizeRollBackups value="10" />\n    <maximumFileSize value="1000KB" />\n    <staticLogFileName value="true" />\n    <layout type="QualiSystems.Infrastructure.Common.Logging.Log4Net.JsonQsLogLayout, QualiSystems.Infrastructure.Common">\n      <appname>QS</appname>\n    </layout>\n  </appender>\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the relevant appender sections into the existing ",(0,i.jsx)(n.code,{children:"log4net.config"})," file in the relevant CloudShell installation directory (",(0,i.jsx)(n.code,{children:"CloudShell\\Server or TestShell\\ExecutionServer"}),")."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For each appender, you can define the retention policy for the log data using the appender's ",(0,i.jsx)(n.strong,{children:"maxSizeRollBackups"})," and ",(0,i.jsx)(n.strong,{children:"maximumFileSize"})," parameters. ",(0,i.jsx)(n.strong,{children:"maxSizeRollBackups"})," defines the maximum number of json files to keep for this log (By default: 10) and ",(0,i.jsx)(n.strong,{children:"maximumFileSize"})," defines the maximum size for each json file (1000 KB). Once all logs are fully populated, log4net replaces the oldest log file with a new one containing new data and then the second oldest and so on."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Next, declare the JSON appenders in the loggers."}),"\n",(0,i.jsxs)(n.p,{children:["For example, declaring ",(0,i.jsx)(n.strong,{children:"RollingJsonFileAppenders"})," ref in the root element:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markup",children:'<appender-ref ref="RollingJsonFileAppender" />\n'})}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markup",children:'<root>\n    <level value="WARN" />\n    <appender-ref ref="RollingFileAppender" />\n    <appender-ref ref="RollingJsonFileAppender" />\n  </root>\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Restart the appropriate service - ",(0,i.jsx)(n.strong,{children:"Quali Server"})," or ",(0,i.jsx)(n.strong,{children:"TestShell Execution Server"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Repeat these steps for the ",(0,i.jsx)(n.code,{children:"QsExecutionServer.exe.jsonlogs.example"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Next, ",(0,i.jsx)(n.a,{href:"/2023.3/install-configure/cloudshell-suite/central-logging/modify-cloudshell",children:"Configure Elastic Stack for Central Logging"}),"."]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>t});var i=l(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);