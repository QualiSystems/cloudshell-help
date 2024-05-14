"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[28628],{6744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>A,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=s(17624),i=s(4552);const t={sidebar_position:8},r="Run Commands",a={id:"portal/sandboxes/sandbox-workspace/run-commands",title:"Run Commands",description:"This article explains how to run, track and troubleshoot resource and blueprint commands in a sandbox. To use commands in a sandbox, add the appropriate resources and orchestration scripts to the blueprint in CloudShell. CloudShell supports the following commands:",source:"@site/docs/portal/sandboxes/sandbox-workspace/run-commands.md",sourceDirName:"portal/sandboxes/sandbox-workspace",slug:"/portal/sandboxes/sandbox-workspace/run-commands",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/run-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/sandboxes/sandbox-workspace/run-commands.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Connect Resources and Apps",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/connect-resources-and-apps"},next:{title:"Update Sandbox Properties",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/update-sandbox-properties"}},c={},d=[{value:"Blueprint commands",id:"blueprint-commands",level:2},{value:"Resource commands",id:"resource-commands",level:2},{value:"Viewing command output information",id:"viewing-command-output-information",level:2},{value:"Stopping commands during execution",id:"stopping-commands-during-execution",level:2},{value:"Error reporting",id:"error-reporting",level:2},{value:"Related Topics",id:"related-topics",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"run-commands",children:"Run Commands"}),"\n",(0,o.jsx)(n.p,{children:"This article explains how to run, track and troubleshoot resource and blueprint commands in a sandbox. To use commands in a sandbox, add the appropriate resources and orchestration scripts to the blueprint in CloudShell. CloudShell supports the following commands:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CloudShell Authoring .NET drivers (attached to blueprint)"}),"\n",(0,o.jsx)(n.li,{children:"Python scripts or ZIP files (attached to blueprint/resources)"}),"\n",(0,o.jsx)(n.li,{children:"Configuration Management bash/PowerShell scripts or Ansible playbooks (attached to resource)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For additional information about commands and scripts, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/intro/Term",children:"CloudShell Terminology"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In this article:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#blueprint-commands",children:"Blueprint commands"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#resource-commands",children:"Resource commands"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#viewing-command-output-information",children:"Viewing command output information"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#stopping-commands-during-execution",children:"Stopping commands during execution"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#error-reporting",children:"Error reporting"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"blueprint-commands",children:"Blueprint commands"}),"\n",(0,o.jsx)(n.p,{children:"Blueprint commands can be used to orchestrate sandbox-level operations."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To run a blueprint command:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the sandbox toolbar, click ",(0,o.jsx)(n.strong,{children:"Commands"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Blueprint Commands"})," pane is displayed."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(80604).c+"",width:"337",height:"393"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Optionally, if the command has inputs, in the command row click ",(0,o.jsx)(n.img,{src:s(74692).c+"",width:"19",height:"22"}),"."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Enter the required inputs."}),"\n",(0,o.jsxs)(n.li,{children:["To run the command, click ",(0,o.jsx)(n.strong,{children:"Run"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To run a command with no inputs, click the command's ",(0,o.jsx)(n.img,{src:s(44616).c+"",width:"29",height:"29"})," button."]}),"\n",(0,o.jsx)(n.p,{children:"An indication message is displayed in the sandbox workspace to notify that the command was called."}),"\n",(0,o.jsxs)(n.p,{children:["When the command completes, the completed status is displayed.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.img,{src:s(13744).c+"",width:"333",height:"43"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"resource-commands",children:"Resource commands"}),"\n",(0,o.jsx)(n.p,{children:"In addition to sandbox-level orchestration, individual resources, Apps and services can also contain automation operations that can be executed from the sandbox workspace."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Deployed Apps provide default power commands. For additional information, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/apps/run-app-commands",children:"Apps in Sandboxes"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To access the Commands pane:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Hover over the resource, App or service and select the ",(0,o.jsx)(n.strong,{children:"Commands"})," option from the context menu."]}),"\n",(0,o.jsx)(n.p,{children:"![](/Images/CloudShell-Portal/Lab-Management/Reservations/Running Commands_2_335x137.png)"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Commands"})," side pane is displayed, listing the resource commands."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click the\xa0",(0,o.jsx)(n.img,{src:s(74456).c+"",width:"25",height:"25"}),"\xa0button to launch the command immediately. If the command has inputs, click the\xa0",(0,o.jsx)(n.img,{src:s(41736).c+"",width:"21",height:"22"}),"\xa0button, specify the input values and click ",(0,o.jsx)(n.strong,{children:"Run"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"When the command completes, the completed status is displayed."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(80604).c+"",width:"337",height:"393"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Removing a resource does not stop the resource\u2019s running or queued commands. In this case, the command will fail and an indication message will be displayed in the feeds."})}),"\n",(0,o.jsx)(n.h2,{id:"viewing-command-output-information",children:"Viewing command output information"}),"\n",(0,o.jsxs)(n.p,{children:["For additional information, see ",(0,o.jsx)(n.a,{href:"../../../portal/sandboxes/sandbox-workspace/system-messages",children:"Viewing System Messages"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"stopping-commands-during-execution",children:"Stopping commands during execution"}),"\n",(0,o.jsx)(n.p,{children:"All users can stop blueprint script commands during execution. Orchestration commands, such as Setup and Teardown cannot be stopped once they start running."}),"\n",(0,o.jsx)(n.p,{children:"Users can stop resource /App commands only if the shell's developer enabled the option to do so."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To stop a resource or App command's execution:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Resource Commands"})," or ",(0,o.jsx)(n.strong,{children:"App Commands"})," pane, click the ",(0,o.jsx)(n.strong,{children:"Stop"}),"\xa0",(0,o.jsx)(n.img,{src:s(95088).c+"",width:"21",height:"20"})," button on the command execution you want to stop."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(93228).c+"",width:"330",height:"226"})}),"\n",(0,o.jsxs)(n.p,{children:["The command's execution stops running. If you are an admin, the ",(0,o.jsx)(n.strong,{children:"Stop"})," button changes to ",(0,o.jsx)(n.strong,{children:"Terminate"})," ",(0,o.jsx)(n.img,{src:s(1004).c+"",width:"20",height:"20"}),". Unlike ",(0,o.jsx)(n.strong,{children:"Stop"}),", which gracefully shuts down the command, ",(0,o.jsx)(n.strong,{children:"Terminate"})," will immediately cancel the command's execution."]}),"\n",(0,o.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Terminating running commands may cause unexpected behavior. For example, terminating a Teardown command execution on a sandbox with Azure VMs may prevent CloudShell from deleting the sandbox's resource group and VMs from the cloud provider."}),"\n",(0,o.jsx)(n.li,{children:"In some cases, terminating a driver's instance in one sandbox may apply to other sandboxes if the resource is shared and is being used in different sandboxes, or in a scenario where concurrent commands are running on the resource."}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To stop a blueprint command's execution:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Blueprint Commands"})," pane, click the ",(0,o.jsx)(n.strong,{children:"Stop"}),"\xa0",(0,o.jsx)(n.img,{src:s(74607).c+"",width:"26",height:"24"})," button on the command execution you want to stop."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(39956).c+"",width:"337",height:"197"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If errors occur when attempting to stop a command or a test during execution, please contact Quali Support at: ",(0,o.jsx)(n.a,{href:"https://support.quali.com/",children:"support.quali.com"}),". Quali Support can assist you in testing your network and in adjusting your configuration to help solve these issues."]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"error-reporting",children:"Error reporting"}),"\n",(0,o.jsxs)(n.p,{children:["Exceptions are thrown for failed commands that are unexpectedly terminated. When an exception occurs, CloudShell displays an error notification message to the end user - see ",(0,o.jsx)(n.a,{href:"../../../portal/sandboxes/sandbox-workspace/system-messages",children:"Viewing System Messages"}),". CloudShell logs detail the causes of the exception."]}),"\n",(0,o.jsx)(n.p,{children:"You may want to consider using Python exception handling capabilities to when CloudShell generates control error notifications (to limit notifications for specific exceptions)."}),"\n",(0,o.jsxs)(n.p,{children:["The stack trace error log is located in: ",(0,o.jsx)(n.code,{children:"...ExecutionServer\\Logs\\QsPythonDriverHost_*.log"})]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../../sandboxes/workspace/apps",children:"Apps in Sandboxes"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/",children:"Creating Blueprints"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/create-blueprint-commands",children:"Create Blueprint Commands"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/configure-orchestration",children:"Configure Blueprint Orchestration"})}),"\n"]})]})}function A(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},39956:(e,n,s)=>{s.d(n,{c:()=>o});const o=s.p+"assets/images/Blueprint-Scripts-Pane-Stop-0169306d462bbda1ab9fc104334fdebc.png"},80604:(e,n,s)=>{s.d(n,{c:()=>o});const o=s.p+"assets/images/Blueprint-Scripts-Pane-c7b0d9aa7622ce0fbedf54fe3755d072.png"},93228:(e,n,s)=>{s.d(n,{c:()=>o});const o=s.p+"assets/images/ResourceCommandsPaneStop-b6bb802206e707d5d75cc128d38b7775.png"},44616:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO7SURBVEhL7ZZLaBVnFMdzTXzEKgHFRahY04WIYsVsXEgVii5dCBVstxbqyoVIEcFnEqM1PqoQtSqmWmtV2oJVEa0ufAXfFjXxERVrG63R9GbmTubOvTPz7/98ydyMc+fO3Ijgxj/8IY858/u+851zvinBO9B7aE5ZB9DSLi4+dbDmvIUvf+3GzH0GZvxgYPYBAwtPmPjpVhbtugMzCzhub2CECkJtwv5Kuth9I4M5Bw1MatQxar2GspoulKyglyeRWNmFD+o1VG3W8enuFBafMrk4G7oVTQ6FZgiU4LmHu1H5rYbS1YQQULKKlp/9lr+J+f9hdV2o3q7ju0sWksxOIeVBJT0n2rIYz52pHQUhceYCBhL+9VGzIDgPevpxFtXfp3p296YmuGKdhm/+MPFvKh/8GvQ5H5i5L4VBtT2BoS/shz/cpLEmLLgBbg6ayrjY0GxhgAREAQudbZh5PLP2Grj9gkXik4LKQu502BizWUNCqjPsBbSkvGqLjhEsrmLBg5m1unNp1XqeFFR2KWkoi3lROb30TBr159MYyfYpCrwsidk/G3jwqo+qoO26i69+N3tSG+GhhGy9bKk+PNySwcTGVE+6Q57Nmf//eKuO31o5OXqloG2dDmY08QUxK/egno49yOIznll5LXcd8rwyY4awhbawdz0p6N2XDqq3sS/DgnwOQi0baP7bxuccIlFZKl2RRC3P1ZOCtnY4mCLDICTA7yBU9LLbVeNvgBRggUyV8lxXnw1A7/OQp+5iekMC/A5CH/3nYMExE8PXhj+vzBiZ1w3NAejTLhfzfmGKCqzUsweVtF5ptzHnkIHhHPiRtcBCqtyoY/+tjAKKFDRpumi4mEZZTCUOpdddSOPIvSwm70hhcERKc2ZqpzcZuMZFelJQGQ6X/rFRviYkyOeBtFTrR7zKYlul1wkW0aKTJrPTNwsVVCQFMf+IidK41cftzG8u7BN2xcmHfT0qykHlSrvDKp7Aho8bEsW6guddw6rtzr4+8XNQT003M6jcwOIoMn2hZjZkTkv/PmSFB5UH7WRR1ZyzMHqTjkR/UumZMUPqNMz60VCDI+ybKQ8q6jBc7LyewSSeRyLsxYVMoNxA8znH/3xu592jnkKhIvlOauE9KJWnrjJ+iKmUB3cvv/PelFE3bU9KXQRR30eiglCRhHayqq+yxxqvWviCn5/Sn1UbNYxt0DCOt4e00JLTJo5z+D/m+cngiFMk1C+5zp4kHX4F2Lj2zFYLuckUygh9wePwtWGsioa+PQH/A5Spf6VEBPxbAAAAAElFTkSuQmCC"},74456:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGTSURBVEhL7ZXbkoIwDIb3/R/TWeRYTlKggGTzR5yBUrTMOHvld4MJSf80bfCH/oGvyCm8RIZhoLyo6BoldAlCecKG34eXIsMw8mIlKVVQ02jqeyO+3hix4cd780bsUKTreq44Jd12dL/Pi3cL/Fp3Eof4I5wiwzhSylUa49cOxCEeeS6cIuh3o/Vi+YF45LnYiaDnUZLRNE2L58E4TjTP7rYBxMdpJvk2O5Gyqqm+NZsF8TvkvpfV7bCFiEEe8m12InGiqOu3h4gF4lRxlZO0JC9rGq2dAuQh32YnEsYpV2sW6wFEEhbBE/vDboqKxVhw3VZcZeTbeO/kKYJr2+iWkkzJ9YbvScdz5LWTgltR1Y4z4QpvPIA4F4jYs4MY5BU+Z2LkdqlNG7BAkuZS6dFgyu3iPOTb7EQAPhWods16Zy4QjzwXThGZ+Cw/N/Ecf2riQcvfoohno7UOdw38eI8ZQvwRhyIAFeKaqpzb17RiY/LxhA0/3r/b8UuRJ/J/wgsGYUyX35CCayz2R/5PPsVX5AREf8+gqKIl79pRAAAAAElFTkSuQmCC"},41736:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC+SURBVEhL7ZJtC8IgFIX7//8werHN1hbFnG40l7qTDoNgoA7qS/V884AP53pd4QN8kdSMIxjnMMb4JE6SNKcnVOcrlNI+DZM0/q2XoMcSZXWB1nFx8pv2Uk6NcyuPNV60qLtSIBnFgRZWrHw6Z5F0dEtrONYbAiE6n85JljphbYVbkqFmTfA3JEknIbPCfQ7RdtM5RFTqrtdMYEcoeGDkV6JSbcekRWmFbbThk6SmchiShY7kRS3hL30/Py0FHrztKpO8R0rAAAAAAElFTkSuQmCC"},13744:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,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"},95088:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHkSURBVDhPrZPNUtswFIX9gt10z7abbvsgnWHXVaervggzpQXSISWG4OD8YIId4sT/lmT7VFcWnrgmTMz0zNyNpPvp3KsrI+YVXgxWyiiQMY6iKEGqqgpCFEhzrvbUmRdyO9BIHkxyAa5B+0QXMHlBJM9Szi6jBa2BXCUcKqoiyqTzHU4DJWCUMZQ9gM8SRYFtwhrHDdSP0qZ3bxHjQoEb6DaV9pNMb79NVF8gGeRWQddhurePF4PLTlyNbvRuW2nOlEEjzAv4YbwX+u79USc+fPykd9vK5fitwwRGkAkEcaKXu+oDLcsSrh/AILthnOrlrvpAScunTQ3dhJFe6qoPlJw63rou333y/09P8xz3roTSQ80cd+/Qfz7+0omv377r3ba2smLH82HQXM0ePASvtOAQUaVLdwV3E9VzugoSDM1xrz//r4QQGNvzek4JSn2dLJZYOA+q2X3FOce1dadKb34UhR/nMC0bj56njx4mcmjdTXE7c+rvLlkNlMLbxhj8MWHP5uDy8GuiVjHGYI4tXE+mDbADJesEHknHQ/MG0/kCa3+jkglCrUnTDK63wsSeYjAcwZIOqcpdTgv6HHTrvezP6NbG+eUVfpxd4OT0F05+nuH0/LeqZmwv8OiH6j3a+RX+AqGsKjlmelSnAAAAAElFTkSuQmCC"},74607:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJDSURBVEhLtZRbb9pAEIXzB/vS9/7UKlJLo1ZJ2hCScL8ZDBjf72aNOZlZbFRqjJKYHmmE8O7ON2d3Z68CscO58DcZ/CRFlAiIdItstwOLf/l/SN95nOedWl9EJUguzJO/RRuxpfnVwBJIOohTxJsUu7z6t4pdRrTulMMjUAFJxPshhXgdF+lRnr9hBxB/9GJBk8SHIYV4PZ8pw0ogWUGUIMvqQQpxHjeM4SV0dgWI3ThBgoTcXFJxsoFNeQ8gl9zYfpgPX1amG0hXEmQFZDGoBlmWjU+fv1TGOTleIF1d8bbpjo84TvKhsuqAwijG2vb3oJXpYLutbsw6IM6r6vYetNCts1e6DojzzlbGHqSuzf/qSFnqe9BcM2kvo3yorDqggC6ZUjiakyPDtPOhsuqAtLVB+a38jAwHynyZD5XF+8yVVcU5DSczaJa37yPdDTFSVAThZZvW830MpnPqU+qj4mWYLDQo6gLbLMun1RNfgtF0Js/n8DLw9mnUVP2xAt0w6UGsB+Nil9oaPc5Hu8UMCSpcTekadodjWLbzYRg74WI7g5G8BEevNwe74r0czZZ46Q1kRe+FpWkKdbnCc3eAiarBDjcy9xHoX9hju4sOAV3Py9Ocl0270O710er0ShCOI1ARPIl766k7xO2fR/xutjChg3VdT1bNToUQcBwXo/EU9w9N3D208NIfy3fNiUQp50kQB7szvEjemjYluGs+ofHzFtffb/D12w9cN27Q+HWH++YzOsMpZvS6mH4s15Xz7fAKvNcq5H1aXrkAAAAASUVORK5CYII="},1004:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIISURBVDhPpZLNbtNAFIUjQAIJCVjyApV4AXbskRBs2COx5El4Ax4AsaellYqALlgAEi0/QikhTRMnaRInbuLYseMZ/x/mjk1MarsN5UjXsj1zv7lz7q3M/Rj/HhEcUwFXd8AH22B6Vf6jtXMBXeU54q0bwPpF4OUF4NVVBLuPMXd5OdD2xIleCDeIIA6HG8Zgfgg23kO8eU2AKsDBU8CbJO/rl+A1nuWBBLK5jygSlCJ9up8ATgJFxG/WloEzHsATVZyqt2ulQGxcyYCWhAVp1in6/iQDvLsFfLi7+I7e30mA8prMTTPOkG8C2zcTyN8VblwWHX+dACcWQxiWeFak6a7w8h6wdV2Cgp3b4MoL0UQfFcsNoZt2unNZDx4+yoWmjdPVTHOHwXA8aV3FZD4cxtOlZa0K9IMAmmEnQCKXNWNVYBzHGIyNDPi/FYZhiJ6mZ8DhcX4TaVXgzLKhTswESMN80OrKss+r/lCTkyKBNINU7qikyrNE46b0VNC0SCA9qNON9hFcd8XhTkXeHSodDPWZhC2AFKOpha8/9sF5cYOK1Gp3ofRHi+qWgHT1oTC2Wj9Ef6AiELNVpqlh4Ge9geZRdtUc8E+Qub+aHXz8/AU1kaRPDTBRtWXbaHd74v8evlVr8ponYRQ5IAVtHM8cdNRj1JUu9hsKas02WsJ8soY8L8qb+zF+A5oiu9wURotiAAAAAElFTkSuQmCC"},74692:(e,n,s)=>{s.d(n,{c:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADhSURBVDhP7ZLNCoJAGEV7//cI2giWiPbrIiJoEVFmRZGaVGTSJhP/bw7McmwUWno2A3eYw/B9t4U/0sjqw5TFcQLX9ZDlOU2qwZS9fR/KYALTtJHXEDJl5LntXCGIMpzirErpzMiPLNtBV1JxPJ2Rpim9KYe7gNv9AbGnYLlaI0kSmrLhygi+/0G7I2C7O9CEDVcWBAFkZYSxNkUYRTRl81PmeS/0hxpm80VRl5im5ZTKXPcJtajHRjcqDZ/AlJGeiZIC3dgXooymfJiyMAxhWhdkWXURgbuAOjSy+vxRBnwB/N9yiQItzBIAAAAASUVORK5CYII="},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>r});var o=s(11504);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);