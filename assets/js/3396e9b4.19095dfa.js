"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[17136],{93972:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var l=s(17624),o=s(4552);const i={sidebar_position:15},t="Tips and Tricks for Shells",r={id:"devguide/developing-shells/tips-and-tricks-for-shells",title:"Tips and Tricks for Shells",description:"Managing the CloudShell session",source:"@site/versioned_docs/version-2023.3/devguide/developing-shells/tips-and-tricks-for-shells.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/tips-and-tricks-for-shells",permalink:"/cloudshell-help/devguide/developing-shells/tips-and-tricks-for-shells",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/developing-shells/tips-and-tricks-for-shells.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Common Driver Recipes",permalink:"/cloudshell-help/devguide/developing-shells/common-driver-recipes"},next:{title:"Sharing a Shell with the Community",permalink:"/cloudshell-help/devguide/developing-shells/share-shell-with-comminity"}},c={},a=[{value:"Managing the CloudShell session",id:"managing-the-cloudshell-session",level:2},{value:"Logging in shells",id:"logging-in-shells",level:2},{value:"Where can I see the execution logs?",id:"where-can-i-see-the-execution-logs",level:3},{value:"How do I customize my shell or script\u2019s logging policy?",id:"how-do-i-customize-my-shell-or-scripts-logging-policy",level:3},{value:"Nested scopes",id:"nested-scopes",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"tips-and-tricks-for-shells",children:"Tips and Tricks for Shells"}),"\n",(0,l.jsx)(n.h2,{id:"managing-the-cloudshell-session",children:"Managing the CloudShell session"}),"\n",(0,l.jsx)(n.p,{children:"Creating an instance of CloudShellAPISession can be expensive. Each time such an object is created a new login request is made, which can impact the performance of the driver/script. In theory it would be better to create the session once per command and then pass it in a convenient way to any internal function called in the execution flow."}),"\n",(0,l.jsxs)(n.p,{children:["For Shell drivers, the ",(0,l.jsx)(n.em,{children:"cloudshell-shell-core"})," contains a convenient object to manage this scope. We pass this helper the\xa0",(0,l.jsx)(n.strong,{children:"context"}),"\xa0parameter of the driver command:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from cloudshell.shell.core.session.cloudshell_session import CloudShellSessionContext\nwith CloudShellSessionContext(context) as session:\n         perform_validations(session)\n         do_some_logic(session)\n         do_some_more_logic(session)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"logging-in-shells",children:"Logging in shells"}),"\n",(0,l.jsxs)(n.p,{children:["Any logging package can be used with CloudShell. Quali has a customized logging solution, which is thread and process safe. This package also organizes logs in different files according to resource and sandboxes. The Quali logging module is defined in the\xa0",(0,l.jsx)(n.em,{children:"cloudshell_logging"}),"\xa0package."]}),"\n",(0,l.jsx)(n.h3,{id:"where-can-i-see-the-execution-logs",children:"Where can I see the execution logs?"}),"\n",(0,l.jsxs)(n.p,{children:["All logs are saved on the Execution Server where the script or driver is running (except for L1 shell logs, which reside on the Quali Server). For exact locations, see ",(0,l.jsx)(n.a,{href:"/cloudshell-help/troubleshooting/troubleshooting-overview/collecting-logs",children:"Collecting Logs"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Log Structure",src:s(57276).c+"",width:"553",height:"66"})}),"\n",(0,l.jsx)(n.h3,{id:"how-do-i-customize-my-shell-or-scripts-logging-policy",children:"How do I customize my shell or script\u2019s logging policy?"}),"\n",(0,l.jsxs)(n.p,{children:["The simplest way to get a hold of a logger object is to use the\xa0",(0,l.jsx)(n.strong,{children:"get_qs_logger"}),"\xa0module:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from cloudshell.logging.qs_logger import get_qs_logger\nlogger = get_qs_logger(log_file_prefix=file_prefix,log_category=reservation_id,log_group=resource_name)\nlogger.info("log something")\n'})}),"\n",(0,l.jsx)(n.p,{children:"For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'def some_command(self, context):\n    """\n\n    :param ResourceCommandContext context:\n    :return:\n    """\n    logger = get_qs_logger(log_file_prefix=\'CloudShell Sandbox Orchestration\',\n                           log_category=context.reservation.reservation_id,\n                           log_group=context.resource.name)\n    logger.info("this is a log in the command")\n    return "done"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For the default logger, the\xa0",(0,l.jsx)(n.strong,{children:"log_category"}),"\xa0parameter defines the folder under which logs will be grouped whereas the\xa0",(0,l.jsx)(n.strong,{children:"log_group"}),"\xa0defines the file. The CloudShell convention is to create a folder for each reservation id and a file for each resource name. For orchestration scripts, the file name is the environment name."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Log Structure",src:s(33856).c+"",width:"394",height:"176"})}),"\n",(0,l.jsx)(n.p,{children:"You can then use the regular logging level syntax to write messages as a part of the driver package or script flow:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'logger.debug("debug message")\nlogger.info("info message")\nlogger.warn("warning message"\nlogger.error("error message")\n'})}),"\n",(0,l.jsx)(n.p,{children:"Only messages that are greater than the log level currently set for the driver will be saved to file. For example, if the log level is \u201cinfo\u201d, only log levels \u201cwarning\u201d and \u201cerror\u201d apply."}),"\n",(0,l.jsx)(n.p,{children:"Typically, changing the log level to a more verbose value would be done only in order to debug an issue, as writing too much to the logs can be expensive. You can change the logging level on the ES or driver level."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To change the log level on the driver level:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Edit the ",(0,l.jsx)(n.code,{children:"qs_config.ini"})," file, which is located at:"]}),"\n",(0,l.jsx)(n.p,{children:"Windows locations:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"[venv]\\[shell-name]\\Lib\\site-packages\\cloudshell\\core\\logger\\qs_config.ini"})}),"\n",(0,l.jsx)(n.p,{children:"or"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"[venv]\\[shell-name]\\Lib\\site-packages\\cloudshell\\logging\\qs_config.ini"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Linux location:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"/usr/share/QualiSystems/venv/<shell-name>/lib/python3.7/site-packages/cloudshell/logging/qs_config.ini"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Change the log level value."}),"\n",(0,l.jsx)(n.p,{children:"For example, changing the log level to \u201cWARNING\u201d:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"[Logging]\n;Possible Log Log Levels: DEBUGs, INFO, WARNING, ERROR, CRITICAL\nLOG_LEVEL='WARNING'\n;Possible Log Priorities: ENV, CONFIG\n;ENV - get log level from environment variable specified in the Execution Server's customer.config\n;CONFIG - get log level from current configuration file\nLOG_PRIORITY='ENV'\nLOG_FORMAT= '%(asctime)s [%(levelname)s]: %(name)s %(module)s - %(funcName)-20s %(message)s'\nTIME_FORMAT= '%d-%b-%Y--%H-%M-%S'\nWINDOWS_LOG_PATH='{ALLUSERSPROFILE}\\QualiSystems\\logs'\nUNIX_LOG_PATH='/var/log/qualisystems'\nDEFAULT_LOG_PATH='../../Logs'\n"})}),"\n",(0,l.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"This change only applies to that virtual environment, so if you upgrade the shell or the script, CloudShell will create a new virtual environment that uses the default values."}),"\n",(0,l.jsxs)(n.li,{children:["In newer releases of the logging library, we added the ",(0,l.jsx)(n.code,{children:"LOG_PRIORITY"}),' variable, as illustrated in the above example. The default log level "priority" is defined in the Execution Server environment variable (',(0,l.jsx)(n.code,{children:"ENV"})," value), but you can change the value to ",(0,l.jsx)(n.code,{children:"CONFIG"})," to take the log level from the current configuration file."]}),"\n"]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Restart the Execution Server and rerun the shell command."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To enable debug logging and collecting logs:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["In the ",(0,l.jsx)(n.code,{children:"qs_config.ini"})," mentioned above, change ",(0,l.jsx)(n.strong,{children:"LOG_LEVEL"})," from INFO to DEBUG."]}),"\n",(0,l.jsx)(n.li,{children:"Restart the Execution Server and rerun the shell command."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To change the log level for the entire ES, without editing any files:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the following key to the Execution Server's ",(0,l.jsx)(n.code,{children:"customer.config"}),"\xa0(change \u2018DEBUG\u2019 to the log level you wish to set):"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'<add key="DefaultPythonEnvrionmentVariables" value="LOG_LEVEL=DEBUG"/>\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Restart the Execution Server and rerun the shell command."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Similar to the CloudShell API session, it\u2019s recommended to create a logger once per command and then pass it to any internal classes that require it. As with the CloudShell API we\u2019ve added some helpers in the\xa0",(0,l.jsx)(n.em,{children:"cloudshell-shell-core"}),"\xa0package which can reduce some of the repetition around creating a logger and create a more explicit scope for it:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"with LoggingSessionContext(command_context) as logger:\n    do_something(logger)\n    do something_else(logger)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Another repetitive task is to remember to log any exception raised during the driver execution. Here too,\xa0",(0,l.jsx)(n.em,{children:"cloudshell-shell-core"}),"\xa0provides a handy scope:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"with ErrorHandlingContext(logger):\n    will_get_automatically_logged_on_exception()\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Using this scope any exception raised within the\xa0",(0,l.jsx)(n.strong,{children:"ErrorHandlingContext"}),"\xa0will be logged, even if no code remembered to explicitly call the logger."]}),"\n",(0,l.jsxs)(n.p,{children:["In addition, you can use this attribute to pass environment variables to shell drivers/scripts running on a specific Execution Server. For additional information about orchestration script logging, see\xa0",(0,l.jsx)(n.a,{href:"/cloudshell-help/devguide/develop-orch-scripts/script-deep-dive",children:"Script Deep Dive"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"nested-scopes",children:"Nested scopes"}),"\n",(0,l.jsx)(n.p,{children:"Finally, nesting the three helpers mentioned in this article makes a lot of sense as they\u2019re not mutually exclusive. This syntax will also work well:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"def driver_command(self, command_context, request):\n    with LoggingSessionContext(command_context) as logger:\n        with ErrorHandlingContext(logger):\n            with CloudShellSessionContext(command_context) as session:\n                do_the_logic(session, logger)\n"})}),"\n",(0,l.jsx)(n.p,{children:"If the heavily nested code seems problematic its always possible to create a module that accepts the function to run as an input and applies these scopes behind the scenes."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"def do_with_session_and_logging(self, command_context, function):\n    with LoggingSessionContext(command_context) as logger:\n        with ErrorHandlingContext(logger):\n            with CloudShellSessionContext(command_context) as session:\n                function(session, logger)\n\ndef driver_command(self, command_context, request):\n    do_with_session_and_logging(command_context,\n                                lambda session, logger: do_the_logic(session, logger))\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},33856:(e,n,s)=>{s.d(n,{c:()=>l});const l=s.p+"assets/images/Shells-Tips-and-Tricks_1-2adff4067118269d347b0e8f2f088831.png"},57276:(e,n,s)=>{s.d(n,{c:()=>l});const l=s.p+"assets/images/Shells-Tips-and-Tricks_553x66-100a53edf1b36f3c9db4e4221ac35960.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>t});var l=s(11504);const o={},i=l.createContext(o);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);