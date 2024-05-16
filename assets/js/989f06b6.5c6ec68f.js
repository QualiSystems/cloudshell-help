"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[93688],{51604:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var n=o(17624),t=o(4552);const r={sidebar_position:5},i="Common Orchestration Script Recipes",a={id:"devguide/develop-orch-scripts/common-orch-script-recipes",title:"Common Orchestration Script Recipes",description:"In this section, we\u2019ll provide a few handy examples of common script operations. The intention is to grow this into a good source to copy paste common code from. All of the examples are available in the DevGuide Examples repository under the orchestrationscripts_examples folder.",source:"@site/versioned_docs/version-2023.3/devguide/develop-orch-scripts/common-orch-script-recipes.md",sourceDirName:"devguide/develop-orch-scripts",slug:"/devguide/develop-orch-scripts/common-orch-script-recipes",permalink:"/cloudshell-help/devguide/develop-orch-scripts/common-orch-script-recipes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-orch-scripts/common-orch-script-recipes.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Script Deep Dive",permalink:"/cloudshell-help/devguide/develop-orch-scripts/script-deep-dive"},next:{title:"CloudShell's OOB Orchestration",permalink:"/cloudshell-help/devguide/develop-orch-scripts/cs-oob-orch/"}},c={},p=[{value:"Executing commands on sandbox resources",id:"executing-commands-on-sandbox-resources",level:2},{value:"Configuring Apps in a Sandbox",id:"configuring-apps-in-a-sandbox",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"common-orchestration-script-recipes",children:"Common Orchestration Script Recipes"}),"\n",(0,n.jsxs)(s.p,{children:["In this section, we\u2019ll provide a few handy examples of common script operations. The intention is to grow this into a good source to copy paste common code from. All of the examples are available in the ",(0,n.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples",children:"DevGuide Examples"})," repository under the ",(0,n.jsx)(s.code,{children:"orchestration_scripts_examples"})," folder."]}),"\n",(0,n.jsx)(s.h2,{id:"executing-commands-on-sandbox-resources",children:"Executing commands on sandbox resources"}),"\n",(0,n.jsx)(s.p,{children:"The following script attempts to execute a command only on resources that support it. If a resource does not support the command, the script will simply ignore it and move on to the next resource."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/orchestration_scripts_examples/try_execute_commands/try_execute_commands.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,n.jsx)(s.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,n.jsxs)(s.p,{children:["orchestration_scripts_examples/try_execute_commands/try_execute_commands.py ",(0,n.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/orchestration_scripts_examples/try_execute_commands/try_execute_commands.py",children:"view"})," ",(0,n.jsx)(s.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/orchestration_scripts_examples/try_execute_commands/try_execute_commands.py",children:"raw"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'def try_execute_command_on_resources(session, reservation_id, command_name, command_inputs=[]):\n\n    """\n    This function will try to execute a command on all app resources that support it\n    :param CloudShellAPISession session: CloudShell API Session\n    :param str reservation_id: The reservation Id to run the commands on\n    :param str command_name: The command to try and execute\n    :param list[InputNameValue] command_inputs: Inputs parameters for the command\n    :return: The aggregated results of the successful calls\n    :rtype: dict[str,str]\n    """\n\n    results = {}\n\n    for resource in session.GetReservationDetails(reservation_id).ReservationDescription.Resources:\n        try:\n            result = session.ExecuteCommand(reservation_id, resource.Name, "Resource", command_name, command_inputs)\n            results[resource.Name] = result.Output\n\n        except CloudShellAPIError as exc:\n            # Ignore the error if the command doesn\'t exist on the resource or its not assigned a driver\n            if exc.code not in (NO_DRIVER_ERR,DRIVER_FUNCTION_ERROR):\n                raise\n\n    return results\n'})}),"\n",(0,n.jsx)(s.h2,{id:"configuring-apps-in-a-sandbox",children:"Configuring Apps in a Sandbox"}),"\n",(0,n.jsxs)(s.p,{children:["App configuration in a sandbox, initiated either by setup orchestration or a dedicated orchestration script, can be performed in parallel or ordered by custom logic using the ",(0,n.jsx)(s.strong,{children:"app_configuration"})," methods."]}),"\n",(0,n.jsx)(s.p,{children:"In the following example, we will configure all the \u2018web servers\u2019 Apps after configuring the \u2018application server\u2019 App. Also, to enable connection between the deployed Apps, we will pass the application server\u2019s address to the web servers configuration:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\n\nsandbox = Sandbox()\n\n## configure Application server\napplication_server = sandbox.components.get_apps_by_name_contains('application server')[0]\n\nsandbox.apps_configuration.apply_apps_configurations(application_server)\n\napplication_server_address = sandbox.components.get_apps_by_name_contains('application server')[0].deployed_app.FullAddress\n\nfor server in web_servers:\n    ## set application server as app param (application_server_address is pre-configured on the app)\n    sandbox.apps_configuration.set_config_param(server, 'script alias', 'application_server_address', application_server_address)\n\n## configure web servers\nsandbox.apps_configuration.apply_apps_configurations(web_servers)\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Make sure to add a ",(0,n.jsx)(s.code,{children:"requirements.txt"})," file that will include the ",(0,n.jsx)(s.em,{children:"cloudshell-orch-core"})," package to use this example."]}),"\n",(0,n.jsxs)(s.p,{children:["Note the code in the components helper\u2019s method to get the correct Apps from the sandbox and the usage in the App object rather than the name of the App for other methods like\xa0",(0,n.jsx)(s.strong,{children:"apps_configuration.set_config_param"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Configuration of a sandbox\u2019s Apps can be streamlined by using the OOB setup logic, as explained in ",(0,n.jsx)(s.a,{href:"/cloudshell-help/devguide/develop-orch-scripts/cs-oob-orch/#extending-the-oob-setup-orchestration-scripts",children:"Extending the OOB Setup Orchestration Scripts"}),"."]})]})}function l(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,s,o)=>{o.d(s,{I:()=>a,M:()=>i});var n=o(11504);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);