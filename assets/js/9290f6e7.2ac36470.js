"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[96836],{28084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=t(17624),o=t(4552);const a={},r="CloudShell's OOB Orchestration",i={id:"devguide/develop-orch-scripts/cs-oob-orch/index",title:"CloudShell's OOB Orchestration",description:"Every CloudShell installation includes out of the box workflows. These reflect some common workflows we see across many of our customers that we\u2019ve decided to integrate as default behavior. The OOB setup and teardown processes handle App deployment and startup, connectivity, App discovery and installation. The OOB Save and Restore processes are used for saving the sandbox state and restoring it as a new sandbox.",source:"@site/docs/devguide/develop-orch-scripts/cs-oob-orch/index.md",sourceDirName:"devguide/develop-orch-scripts/cs-oob-orch",slug:"/devguide/develop-orch-scripts/cs-oob-orch/",permalink:"/cloudshell-help/next/devguide/develop-orch-scripts/cs-oob-orch/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-orch-scripts/cs-oob-orch/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Orchestration Script Recipes",permalink:"/cloudshell-help/next/devguide/develop-orch-scripts/common-orch-script-recipes"},next:{title:"Customize Guest OS vCenter Command Implementation",permalink:"/cloudshell-help/next/devguide/develop-orch-scripts/cs-oob-orch/customize-guest-os-vcenter-command"}},l={},d=[{value:"Setup and Teardown Orchestration",id:"setup-and-teardown-orchestration",level:2},{value:"Extending the OOB Setup Orchestration Scripts",id:"extending-the-oob-setup-orchestration-scripts",level:3},{value:"Extending the OOB Teardown Orchestration Scripts",id:"extending-the-oob-teardown-orchestration-scripts",level:3},{value:"Save and Restore Orchestration",id:"save-and-restore-orchestration",level:2},{value:"Extending the OOB Save Orchestration Script",id:"extending-the-oob-save-orchestration-script",level:3},{value:"Extending the OOB Restore Orchestration Script",id:"extending-the-oob-restore-orchestration-script",level:3},{value:"Save/Restore Physical Resource Configurations Examples",id:"saverestore-physical-resource-configurations-examples",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cloudshells-oob-orchestration",children:"CloudShell's OOB Orchestration"}),"\n",(0,s.jsx)(n.p,{children:"Every CloudShell installation includes out of the box workflows. These reflect some common workflows we see across many of our customers that we\u2019ve decided to integrate as default behavior. The OOB setup and teardown processes handle App deployment and startup, connectivity, App discovery and installation. The OOB Save and Restore processes are used for saving the sandbox state and restoring it as a new sandbox."}),"\n",(0,s.jsx)(n.h2,{id:"setup-and-teardown-orchestration",children:"Setup and Teardown Orchestration"}),"\n",(0,s.jsx)(n.p,{children:"The following diagram describes the OOB setup and teardown flow:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Setup Workflow",src:t(67704).c+"",width:"1424",height:"518"})}),"\n",(0,s.jsxs)(n.p,{children:["These OOB setup and teardown scripts can be found in the ",(0,s.jsx)(n.strong,{children:"Scripts \u2013 Blueprint"})," management page. You can review their source code in the\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-orch-sandbox/tree/v8.1/SandboxOrchestration/environment_scripts",children:"cloudshell-orch-sandbox repository"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The default setup and teardown logic is provided in a Python package called ",(0,s.jsx)(n.em,{children:"cloudshell-orch-core"}),". The default blueprint template includes a reference to the ",(0,s.jsx)(n.em,{children:"cloudshell-orch-core"})," package using the ",(0,s.jsx)(n.code,{children:"requirements.txt"})," mechanism, which is supported for orchestration scripts."]}),"\n",(0,s.jsx)(n.p,{children:"Here is the implementation of the OOB setup script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\n\n\nsandbox = Sandbox()\n\nDefaultSetupWorkflow().register(sandbox)\n\nsandbox.execute_setup()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, to use the default orchestration logic, we instantiated the\xa0",(0,s.jsx)(n.em,{children:"DefaultSetupWorkflow"}),"\xa0class and registered the sandbox to use the default behavior. Sandbox setup is divided into 4 stages: preparation, provisioning, connectivity and configuration. It\u2019s possible to disable the default implementation of each stage (except for preparation, which is mandatory) by setting ",(0,s.jsx)(n.strong,{children:"enable_stageName=False"}),", as illustrated in this example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"DefaultSetupWorkflow().register(Sandbox, enable_connectivity=False)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The OOB setup and teardown scripts can easily be customized or extended. Click\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-orch-sandbox/blob/develop/Samples/Setup/ordered_configuration_example.py",children:"here"}),"\xa0for an example on how to customize the app configuration order in the setup stage, or see\xa0",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-orch-sandbox/tree/develop/Samples",children:"other samples"}),"\xa0to learn how to extend the OOB orchestration scripts."]}),"\n",(0,s.jsx)(n.h3,{id:"extending-the-oob-setup-orchestration-scripts",children:"Extending the OOB Setup Orchestration Scripts"}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/vjGi4xGSQo4",title:"Customizing CloudShell Setup Orchestration",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(n.p,{children:"Setup script logic is divided into 4 stages \u2013 Preparation, Provisioning, Connectivity and Configuration. Each Setup stage has a specific logic functionality."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Preparation"}),"\xa0is empty in the default Setup script. This is the place to enter any code that logically has to be executed before Setup logic is initiated."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Provisioning"}),"\xa0deploys and discovers all apps."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Connectivity"}),"\xa0connects all layer 1/layer 2/subnet connections, powers on and refreshes IPs on deployed apps."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Configuration"}),"\xa0applies any additional configuration on deployed apps"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note that the OOB setup already includes some default logic in each of the stages as depicted in the diagram at the top of this page. However, the OOB setup can easily be extended using the following extension methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"add_to_preparation"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"on_preparation_ended"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"add_to_provisioning"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"on_provisioning_ended"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"add_to_connectivity"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"on_connectivity_ended"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"add_to_configuration"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"on_configuration_ended"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each stage has an interim\xa0",(0,s.jsx)(n.strong,{children:"on__[stage]_ended"}),"\xa0step which allows the execution of any code that has to run between stages. Note that all the functions you add to a stage (using\xa0",(0,s.jsx)(n.strong,{children:"add_to_configuration"}),", for example) run in parallel, while\xa0",(0,s.jsx)(n.strong,{children:"on__[stage]_ended"}),"\xa0functions run sequentially."]}),"\n",(0,s.jsxs)(n.p,{children:["You can extend the OOB setup and teardown scripts by adding additional steps, or controlling the order of execution. In this section we will focus on the setup script, for examples about how to extend the teardown, see\xa0",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/CloudShell-OOB-Orch.htm?tocpath=The%20CloudShell%20DevGuide%7CDeveloping%20Orchestration%20Scripts%7CCloudShell%27s%20OOB%20Orchestration%7C_____0#OOB-Teardown-scripts",children:"Extending the OOB Teardown Orchestration Scripts"}),"\xa0below. An example for extending the OOB Setup script can be calling additional commands to validate Apps or resource states, launching additional orchestration, or controlling the order in which the sandbox is provisioned."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a copy of the appropriate script, (see below for extension options), and upload the updated version separately into CloudShell Portal as a ",(0,s.jsx)(n.strong,{children:"Setup"})," script. DO NOT remove any step in the setup workflow. However, you can add your own steps or change the order of execution."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make sure to give your extended script a more specific name than simply 'setup'. The name \u2018teardown\u2019 is a reserved name, which may cause unexpected behavior during the setup operation."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can extend the Setup script to implement the required logic in one of the setup stages: preparation, provisioning, connectivity and configuration or as a post stage for validation. Make sure to add a ",(0,s.jsx)(n.code,{children:"requirements.txt"})," file that will include the ",(0,s.jsx)(n.em,{children:"cloudshell-orch-core"})," package. For example, adding some logic to the configuration stage can be made in the following way:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\n\n\nSandbox = Sandbox()\n\nDefaultSetupWorkflow().register(Sandbox)\n\nsandbox.workflow.add_to_configuration(my_custom_login, components)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Each of the following methods gets a custom function and list of components to use in the function. For example, executing some custom logic to validate resource configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\n\n\ndef custom_function(sandbox, components):\n    pass\n\nsandbox = Sandbox()\n\nDefaultSetupWorkflow().register(sandbox)\n\nresources = sandbox.components.get_resources_by_model('Generic Resource Model')\n\nsandbox.workflow.on_configuration_ended(custom_function, resources)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that all methods of the OOB setup logic in the same stage are executed in parallel. The custom function should get arrays of the sandbox and its components as inputs. It\u2019s recommended to use this function template as a starting point:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from cloudshell.workflow.orchestration.sandbox import Sandbox\n\ndef custom_func(sandbox, components):\n    """\n    :param Sandbox sandbox:\n    :return:\n    """\n    pass\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here is an implementation example of custom configuration logic for a 3 tier application where each type of App is configured consecutively while passing some global inputs and configuration parameters between the Apps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\n\ndef main():\n    sandbox = Sandbox()\n    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                           message='Starting to execute the cool stuff!')\n    DefaultSetupWorkflow().register(sandbox, enable_configuration=False)  # Disable OOB configuration\n    sandbox.workflow.add_to_configuration(function=configure_apps,\n                                          components=sandbox.components.apps)\n    sandbox.execute_setup()\n\ndef configure_apps(sandbox, components):\n    \"\"\"\n    :param Sandbox sandbox:\n    :return:\n    \"\"\"\n    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                           message='configure_apps started')\n    build_id = sandbox.global_inputs['build_id']\n\n    # Configure databases\n    databases = sandbox.components.get_apps_by_name_contains('Database')\n    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                           message='Configuring Databases')\n    for app in databases:\n        sandbox.apps_configuration.set_config_param(app=app,\n\t\t\t\t\t             alias='config alias',\n                                                    key='build_id',\n                                                    value=build_id)\n        sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                               message='Database configured with build_id {0}'.format(str(build_id)))\n    sandbox.apps_configuration.apply_apps_configurations(databases)\n    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                           message='Finished to configure databases')\n\n    # Configure Application Servers\n    app_servers = sandbox.components.get_apps_by_name_contains('Application')\n\n    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                           message='Configuring Application Servers')\n\n    database = sandbox.components.get_apps_by_name_contains('Database')[0].deployed_app.FullAddress\n\n    for app_server in app_servers:\n        sandbox.apps_configuration.set_config_param(app=app_server,\n\t\t\t\t\t             alias='config alias',\n                                                    key='build_id',\n                                                    value=build_id)\n        sandbox.apps_configuration.set_config_param(app=app_server,\n\t\t\t\t\t             alias='config alias',\n                                                    key='DB_address',\n                                                    value=database)\n        sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                               message='Application Server configured with build_id {0} , and DB address {1}'\n                                                               .format(str(build_id), str(database)))\n\n    sandbox.apps_configuration.apply_apps_configurations(app_servers)\n    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                           message='Finished to configure Application Servers')\n\n    # Configure web servers\n    application_server_address = sandbox.components.get_apps_by_name_contains('Application')[0].deployed_app.FullAddress\n\n    web_servers = sandbox.components.get_apps_by_name_contains('Web')\n\n    for app in web_servers:\n        sandbox.apps_configuration.set_config_param(app=app,\n\t\t\t\t\t             alias='config alias',\n                                                    key='Application Server',\n                                                    value=application_server_address)\n        sandbox.apps_configuration.set_config_param(app=app,\n\t\t\t\t\t             alias='config alias',\n                                                    key='build_id',\n                                                    value=build_id)\n        sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                               message='Web Server configured with build_id {0}, and Application Server address {1}'\n                                                               .format(str(build_id), str(application_server_address)))\n\n\n    sandbox.apps_configuration.apply_apps_configurations(web_servers)\n    sandbox.automation_api.WriteMessageToReservationOutput(reservationId=sandbox.id,\n                                                           message='Finished to configure Web Servers')\n\nmain()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is another implementation that shows a scenario where some physical devices need to be loaded while few applications are deployed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\n\n\ndef load_firmware_sequential(sandbox, components):\n    \"\"\"\n    :param Sandbox sandbox:\n    :param components:\n    :return:\n    \"\"\"\n    for component in components:\n        sandbox.automation_api.ExecuteCommand(reservationId=sandbox.id,\n                                              targetName=component.Name,\n                                              targetType='Resource',\n                                              commandName='load_configuration')\n\n\nsandbox = Sandbox()\nDefaultSetupWorkflow().register(sandbox)\n\nchassis = sandbox.components.get_resources_by_model('Generic Chassis Model')\nsandbox.workflow.add_to_provisioning(function=load_firmware_sequential,\n                                     components=chassis)\n\nsandbox.execute_setup()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"extending-the-oob-teardown-orchestration-scripts",children:"Extending the OOB Teardown Orchestration Scripts"}),"\n",(0,s.jsxs)(n.p,{children:["You can extend the OOB Teardown script to execute custom steps prior to the out-of-the-box teardown orchestration, or to execute custom steps in parallel to the OOB teardown. This is done using the following extension methods, which are included in the workflow property in the\xa0",(0,s.jsx)(n.strong,{children:"Sandbox"}),"\xa0class:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"add_to_teardown"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"before_teardown_started"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each of the above methods gets a custom function and list of components to use in the function. All steps configured using the ",(0,s.jsx)(n.strong,{children:"before_teardown_started"})," method will be executed in a sequential manner, and all steps configured using the ",(0,s.jsx)(n.strong,{children:"add_to_teardown"})," method will be executed in parallel."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of how to execute a command on a resource prior to the default teardown orchestration, note that a ",(0,s.jsx)(n.code,{children:"requirements.txt"})," file containing cloudshell-orch-core should be attached to the script:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.teardown.default_teardown_orchestrator import DefaultTeardownWorkflow\n\n\ndef execute_resource_cleanup(sandbox, components):\n    """\n    :param Sandbox sandbox:\n    :param components:\n    :return:\n    """\n    for component in components:\n        sandbox.automation_api.ExecuteCommand(reservationId=sandbox.id,\n                                              targetName=component.Name,\n                                              targetType=\'Resource\',\n                                              commandName=\'cleanup\')\n\nsandbox = Sandbox()\n\nDefaultTeardownWorkflow().register(sandbox)\n\nchassis = sandbox.components.get_resources_by_model("Generic Chassis Model")\nsandbox.workflow.before_teardown_started(execute_resource_cleanup, chassis)\n\nsandbox.execute_teardown()\n'})}),"\n",(0,s.jsx)(n.p,{children:"Make sure to follow these steps when implementing a custom teardown orchestration:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a copy of the appropriate script, (see below for extension options), and upload the updated version separately into CloudShell Portal as a ",(0,s.jsx)(n.strong,{children:"Teardown"})," script. DO NOT remove steps from the teardown workflow. However, you can add your own steps or change the order of execution."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make sure to give your extended script a more specific name than simply 'teardown'. The name \u2018teardown\u2019 is a reserved name, which may cause unexpected behavior during the teardown operation."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"save-and-restore-orchestration",children:"Save and Restore Orchestration"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["These orchestration scripts apply to customers who have purchased the ",(0,s.jsx)(n.strong,{children:"Save and Restore"})," paid add-on. Contact your account manager to obtain a license."]})})}),"\n",(0,s.jsxs)(n.p,{children:["Save and Restore scripts are provided to support the capability to save and restore sandboxes. Save and Restore reside in a Python package called\xa0",(0,s.jsx)(n.em,{children:"cloudshell-orch-core"}),". The OOB default blueprint template includes these orchestration scripts and a reference to the\xa0",(0,s.jsx)(n.em,{children:"cloudshell-orch-core"}),"\xa0package (required by these scripts) using the ",(0,s.jsx)(n.code,{children:"requirements.txt"})," mechanism. Here is the implementation of the OOB Save script:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\n\nsandbox = Sandbox()\n\nsandbox.execute_save()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By running the\xa0",(0,s.jsx)(n.strong,{children:"execute_save"}),"\xa0method on a sandbox, the script will call a server logic that will create a saved sandbox. For details about the saving process, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Sv-Rstr-Ovrvw.htm",children:"Sandbox Save and Restore Overview"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"extending-the-oob-save-orchestration-script",children:"Extending the OOB Save Orchestration Script"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Out of the box, the Save orchestration script only creates the saved sandbox, returns concrete resources to abstract if required, creates a clone of deployed Apps and creates an App in that saved sandbox that points to this clone. For details, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Sv.htm#Save2",children:"Sandbox save logic"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"You can extend the OOB Save script to execute custom steps before or after the default sandbox save process takes place."}),"\n",(0,s.jsx)(n.p,{children:"To do this, simply add your custom code before or after the line that executes the Save operation. For example, a Save orchestration script that sends a simple notification email when the Save operation completes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from cloudshell.workflow.orchestration.sandbox import Sandbox\nimport smtplib\n\n\nsandbox = Sandbox()\n\nsandbox.execute_save()\n\n# code for sending email notification:\nserver = smtplib.SMTP(\'smtp.gmail.com\', 587)\n\nserver.ehlo()\nserver.starttls()\nserver.ehlo()\n\n#Next, log in to the server\nserver.login("<sender_username>", "<sender_password>")\n\n#Send the mail\nmsg = "Sandbox was saved successfully"\nserver.sendmail("<sender_email>", "<target_email>", msg)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"extending-the-oob-restore-orchestration-script",children:"Extending the OOB Restore Orchestration Script"}),"\n",(0,s.jsxs)(n.p,{children:["You can also extend the OOB Restore script to execute custom functionality at any point during the default sandbox restore process. The Restore script is a part of the sandbox setup process, and actually replaces the setup. Out of the box, the setup and restore logic are identical. However, if you customized the Setup script and you want the same customized script to be launched when restoring a sandbox, you should customize the Restore script as well, as the Restore script is the one that is being launched in a restored sandbox\u2019s setup phase. It is also possible to customize the Restore script to have a different logic than the Setup script, to create a logic that is relevant only for restored sandboxes. For detailed explanations on how to extend the script\u2019s stages and use its extension methods, see the\xa0",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/CloudShell-OOB-Orch.htm?tocpath=The%20CloudShell%20DevGuide%7CDeveloping%20Orchestration%20Scripts%7CCloudShell%27s%20OOB%20Orchestration%7C_____0#Setup",children:"Setup and Teardown Orchestration"}),"\xa0section above. For deails about the OOB Restore script's operations, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Rstr.htm",children:"Restore a Saved Sandbox"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["CloudShell does not support executing the Setup command directly via the Restore script using APIs, such as ",(0,s.jsx)(n.strong,{children:"ExecuteEnvironmentCommand"})," or ",(0,s.jsx)(n.strong,{children:"EnqueueEnvironmentCommand"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["For example, a Restore script that writes a message to the\xa0",(0,s.jsx)(n.strong,{children:"Output"}),"\xa0console before the Restore workflow operation (to extend the workflow operation itself, use the extension methods in the\xa0",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/CloudShell-OOB-Orch.htm?tocpath=The%20CloudShell%20DevGuide%7CDeveloping%20Orchestration%20Scripts%7CCloudShell%27s%20OOB%20Orchestration%7C_____0#Extendin",children:"Extending the OOB Setup Orchestration Scripts"}),"\xa0section above):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\n\n\nsandbox = Sandbox()\n\ndef func(sandbox, components):\n    sandbox.automation_api.WriteMessageToReservationOutput(sandbox.id, "my custom message")\n\nDefaultSetupWorkflow().register(sandbox)\n\nsandbox.workflow.add_to_configuration(func, None)\n\nsandbox.execute_restore()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, to use the default orchestration logic, we instantiated the ",(0,s.jsx)(n.em,{children:"DefaultSetupWorkflow"})," class and registered the sandbox to use the default Setup orchestration behavior. Sandbox setup is divided into 4 stages: preparation, provisioning, connectivity and configuration. It\u2019s possible to disable the default implementation of each stage by setting ",(0,s.jsx)(n.strong,{children:"enable_stageName=False"}),", as illustrated in this example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"DefaultSetupWorkflow().register(sandbox, enable_connectivity=False)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"saverestore-physical-resource-configurations-examples",children:"Save/Restore Physical Resource Configurations Examples"}),"\n",(0,s.jsx)(n.p,{children:"In many cases, the sandbox's resources include configurations that apply to that sandbox specifically. Since physical resource configurations are not addressed in the out-of-the-box Save and Restore orchestration scripts, we will have to customize them as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save script that:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Creates a loop that runs ",(0,s.jsx)(n.code,{children:"save"})," or ",(0,s.jsx)(n.code,{children:"orchestration_save"})," on each physical resource in the sandbox."]}),"\n",(0,s.jsx)(n.li,{children:"Gets each physical resource\u2019s configurations (artifact names)."}),"\n",(0,s.jsx)(n.li,{children:"Sets the \u201cresource-artifact name\u201d key pairs in the sandbox data."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restore script that uses this sandbox data to restore each resource to its saved configuration."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the below examples, we used shell save/restore functions instead of ",(0,s.jsx)(n.code,{children:"orchestration_save"}),"/",(0,s.jsx)(n.code,{children:"orchestration_restore"})," for two reasons:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Visual effect: ",(0,s.jsx)(n.code,{children:"orchestration_save"}),"/",(0,s.jsx)(n.code,{children:"orchestration_restore"})," are hidden functions. While they are running, there is no indication that anything is happening on the screen, while with shell save/restore functions, the user can see all physical resources spinning in the sandbox diagram and knows the action is taking place."]}),"\n",(0,s.jsxs)(n.li,{children:["Easy testing/debugging: While ",(0,s.jsx)(n.code,{children:"orchestration_save"}),"/",(0,s.jsx)(n.code,{children:"orchestration_restore"})," encapsulates functionality and data very nicely, and the json data is helpful, it's easier to test with save/restore of a demo version shell which simply passes on restore and returns a valid string on save."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For a more in-depth look, click ",(0,s.jsx)(n.a,{href:"https://help.quali.com/help%20versions/attachments/save-restore-physical-resources/",children:"here"})," to download the script packages."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Save script (bundled with and called by orchestration_save):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import InputNameValue\nfrom cloudshell.api.cloudshell_api import SandboxDataKeyValue\n\n\ndef execute_save(self)\n    \"\"\"\n    :return: bool True for pass, False for fail\n    \"\"\"\n    inputs = list()\n    inputs.append(InputNameValue(Name='folder_path', Value=self.backup_path))\n    inputs.append(InputNameValue(Name='configuration_type', Value=self.config_type))\n    inputs.append(InputNameValue(Name='vrf_management_name', Value=self.vrf_management))\n\n    try:\n        response = self.api_session.ExecuteCommand(reservationId=self.sandbox_id,\n                                                   targetName=self.resource_name,\n                                                   targetType='Resource',\n                                                   commandName='save',\n                                                   commandInputs=inputs)\n        saved_artifact_info = response.Output\n        saved_file = self.backup_path + saved_artifact_info\n        # save the entire full path into sandbox data for restore to use, instead of relying on the\n        # Backup Location of the resource which may change between this save and later restore\n        d = SandboxDataKeyValue(Key=self.resource_name, Value=saved_file)\n        self.api_session.SetSandboxData(self.sandbox_id, [d])\n        message = 'Successfully saved {} config to {}'.format(self.resource_name, saved_artifact_info)\n        message = '<div style=\"color: green; font-weight:bold\">' + message + '</div>'\n        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)\n\n    except Exception as ex:\n        message = '{}: {}'.format(type(ex).__name__, ex.message)\n        message = '<div style=\"color:red;font-weight:bold\">' + message + '</div>'\n        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)\n        return False\n\n    return True\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Restore script (bundled with and called by orchestration_restore):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import InputNameValue\n\n\ndef execute_restore(self):\n    \"\"\"\n    :return: bool True for pass, False for fail\n    \"\"\"\n    inputs = list()\n    inputs.append(InputNameValue(Name='path', Value=self.config_file_path))\n    inputs.append(InputNameValue(Name='configuration_type', Value=self.config_type))\n    inputs.append(InputNameValue(Name='restore_method', Value=self.restore_method))\n    inputs.append(InputNameValue(Name='vrf_management_name', Value=self.vrf_management))\n\n    try:\n        self.api_session.ExecuteCommand(reservationId=self.sandbox_id,\n                                        targetName=self.resource_name,\n                                        targetType='Resource',\n                                        commandName='restore',\n                                        commandInputs=inputs)\n\n        message = 'Successfully restored base config of {}'.format(self.resource_name)\n        message = '<div style=\"color: green; font-weight:bold\">' + message + '</div>'\n        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)\n\n        if self.action in ['setup', 'restore']:\n            self.api_session.SetResourceLiveStatus(self.resource_name, \"Online\", \"Active\")\n\n        elif self.action == 'teardown':\n            self.api_session.SetResourceLiveStatus(self.resource_name, \"Offline\", \"Restored to base config\")\n\n    except Exception as ex:\n        message = '{}: {}'.format(type(ex).__name__, ex.message)\n        message = '<div style=\"color:red;font-weight:bold\">' + message + '</div>'\n        self.api_session.WriteMessageToReservationOutput(self.sandbox_id, message)\n\n        if self.action  in ['setup', 'restore']:\n            self.api_session.SetResourceLiveStatus(self.resource_name, \"Error\", \"Failed to restore to base config\")\n\n        return False\n\n    return True\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},67704:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/CloudShell-s-OOB-Orchestration-cd834c560af240348b6b99d211b80c25.png"},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>r});var s=t(11504);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);