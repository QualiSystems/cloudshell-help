"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[62224],{80152:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=n(17624),i=n(4552);const o={sidebar_position:4},t="Quali\u2019s Shell Framework (Python 3)",r={id:"devguide/reference/quali-shell-framework-py3",title:"Quali\u2019s Shell Framework (Python 3)",description:"In this article, we will familiarize ourselves with the CloudShell shell framework and learn how to leverage it to develop and customize commands in shells based on Python 3. Note that this applies to 1st Gen and 2nd Gen shells.",source:"@site/docs/devguide/reference/quali-shell-framework-py3.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/quali-shell-framework-py3",permalink:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/reference/quali-shell-framework-py3.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quali\u2019s Shell Framework (Python 2)",permalink:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py2"},next:{title:"Migrating 1st Gen Shells to 2nd Gen",permalink:"/cloudshell-help/next/devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Python package structure",id:"python-package-structure",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Key Entities",id:"key-entities",level:2},{value:"Communication Handlers",id:"communication-handlers",level:2},{value:"CLI Configurator",id:"cli-configurator",level:3},{value:"SNMP Configurator",id:"snmp-configurator",level:3},{value:"Flows",id:"flows",level:2},{value:"Command Templates",id:"command-templates",level:2},{value:"Command Actions",id:"command-actions",level:2}];function h(e){const l={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"qualis-shell-framework-python-3",children:"Quali\u2019s Shell Framework (Python 3)"}),"\n",(0,s.jsx)(l.p,{children:"In this article, we will familiarize ourselves with the CloudShell shell framework and learn how to leverage it to develop and customize commands in shells based on Python 3. Note that this applies to 1st Gen and 2nd Gen shells."}),"\n",(0,s.jsx)(l.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(l.p,{children:"Every CloudShell shell consists of a data model and a driver. The driver is written in Python and can have Python package dependencies. Quali\u2019s officially released shells use a common set of Python packages developed by Quali, which contain most of the logic of Quali shells, while the driver itself (the \u201c.py\u201d file inside the shell) is the thin layer that defines the interface with CloudShell along with the driver\u2019s Python requirements."}),"\n",(0,s.jsxs)(l.p,{children:["Quali\u2019s official shells have a granularity level of Vendor and OS. This means that each official shell supports all devices of a specific vendor and OS. The exact functionality that is exposed by the shell is defined in the relevant\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-standards/tree/master/Documentation",children:"shell standard"}),". The structure of the Python packages reflects this granularity \u2013 for example, any logic that is common to all shells resides in cloudshell-shell-flows, while any Cisco-specific logic resides in cloudshell-networking-cisco, and any Cisco NXOS-specific logic resides in cloudshell-networking-cisco-nxos. It is possible to use Quali\u2019s shell framework when creating your own shells or customizing existing ones."]}),"\n",(0,s.jsx)(l.p,{children:"Note that using the framework is optional."}),"\n",(0,s.jsxs)(l.p,{children:["To work with one or more of Quali framework\u2019s Python packages, you need to list them in your shell project\u2019s requirements.txt file. Then, you can either write the code that uses the packages directly in the shell\u2019s driver or create your own Python packages and add them to the shell\u2019s requirements file. You can also load such custom Python packages into your local\xa0PyPi server repository\xa0on the Quali Server machine to make them available to your entire CloudShell deployment - for details on how to load custom packages, see ",(0,s.jsx)(l.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"}),"."]}),"\n",(0,s.jsx)(l.admonition,{type:"note-one-line",children:(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"Important:"}),"\xa0We don\u2019t recommend modifying Quali Python packages as CloudShell will overwrite them if a newer package that has the same file name is published on the public PyPi repository. Alternatively, you\u2019re welcome to create your own packages, using our Python packages as a reference."]})}),"\n",(0,s.jsx)(l.h2,{id:"python-package-structure",children:"Python package structure"}),"\n",(0,s.jsx)(l.p,{children:"The following diagram shows the Python classes used by the shell commands and their dependencies:"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{alt:"Python Package Structure Diagram",src:n(72008).c+"",width:"624",height:"429"})}),"\n",(0,s.jsx)(l.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(l.p,{children:"The architecture of a Quali Python shell comprises three inter-dependent elements:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#flows",children:"Flows"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#command-templates",children:"Command Templates"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#command-actions",children:"Command Actions"})}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Flows sequentially execute several Command Actions, while each Command Action runs a specific Command Template."}),"\n",(0,s.jsxs)(l.p,{children:["An additional element that is used by the flows is the communication handler, which allows you to communicate with the device. For details, see ",(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#communication-handlers",children:"Communication Handlers"}),". \u2003"]}),"\n",(0,s.jsx)(l.h2,{id:"key-entities",children:"Key Entities"}),"\n",(0,s.jsx)(l.p,{children:"There are several objects that must be initialized in the Python driver, to allow you to work with Quali\u2019s infrastructure:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"Communication Handlers"}),"\xa0\u2013 These entities handle the communication between the shell and the device. The most common handlers are cli (",(0,s.jsx)(l.code,{children:"cloudshell-cli"}),") and snmp (",(0,s.jsx)(l.code,{children:"cloudshell-snmp"}),"). These handlers must be initialized whenever calling a shell command and passed to the flows."]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"cli"}),"\xa0- A Python package that resides in the driver and is used to create the CLI configurator. This package provides an easy abstraction interface for CLI access and communication (Telnet, TCP, SSH etc.) for network devices. The CLI class instance is provided by\xa0",(0,s.jsx)(l.code,{children:"cloudshell.cli.cli"}),". It must be created when the driver is initializing, since it allows the shell to designate a single session pool for the shell\u2019s commands. You are welcome to use the\xa0",(0,s.jsx)(l.em,{children:"_get_cli"}),"\xa0helper from\xa0",(0,s.jsx)(l.em,{children:"driver_helper"}),"\xa0mentioned above.\xa0",(0,s.jsx)(l.em,{children:"_get_cli"}),"\xa0allows you to define the session pool\u2019s size and idle timeout."]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"api"}),"\xa0is an instance of the\xa0",(0,s.jsx)(l.em,{children:"cloudshell-automation-API"}),"\u2019s\xa0",(0,s.jsx)(l.em,{children:"CloudShellAPISession"}),"\xa0class. It must be created on every command execution. This class has a helper named\xa0",(0,s.jsx)(l.em,{children:"_get_api"}),", which is also provided by the\xa0",(0,s.jsx)(l.em,{children:"driver_helper"}),"\xa0mentioned above."]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"logger"}),"\xa0is a logger object residing in the\xa0",(0,s.jsx)(l.em,{children:"cloudshell-logging"}),"\xa0package. It is recommended to use it in your methods as follows:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-python",children:'from cloudshell.shell.core.session.logging_session import LoggingSessionContext\n\n\ndef print_hello_world_to_logger(context)\n    with LoggingSessionContext(context) as logger:\n        logger.info("Hello World")\n'})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"resource config"}),"\xa0\u2013 Python implementation of the relevant Quali standard, which defines the shell\u2019s attributes and default values. For example, a\xa0",(0,s.jsx)(l.em,{children:"NetworkingResourceConfig"}),"\xa0class that contains all the attributes required by the networking standard. It can be easily created using the\xa0",(0,s.jsx)(l.code,{children:"NetworkingResourceConfig.from_context"}),"\xa0method, which is provided with the\xa0",(0,s.jsx)(l.a,{href:"https://pypi.org/project/cloudshell-shell-networking-standard/",children:"cloudshell-shell-networking-standard"}),"\xa0Python package."]}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/Cisco-IOS-Switch-Shell-2G/blob/dev/src/driver.py",children:"example"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"communication-handlers",children:"Communication Handlers"}),"\n",(0,s.jsx)(l.p,{children:"The most common ways to communicate with the device are via:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"CLI \u2013 cloudshell-cli"}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"SNMP \u2013 cloudshell-snmp"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"These handlers need to be initialized and passed to the flows."}),"\n",(0,s.jsx)(l.h3,{id:"cli-configurator",children:"CLI Configurator"}),"\n",(0,s.jsxs)(l.p,{children:["The CLI configurator resides in the cloudshell-cli Python package and includes all the typical CloudShell CLI attributes you would need in order to communicate and work with a device modeled in CloudShell. For example, it knows how to retrieve the device\u2019s username and password, create a session, determine what kind of session to initiate, etc. For reference, see\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/cli/cisco_cli_handler.py",children:"cisco_cli_handler.py"}),"\xa0and\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/cli/cisco_command_modes.py",children:"cisco_command_modes.py"}),"."]}),"\n",(0,s.jsxs)(l.p,{children:["There is a nice guide on how to use\xa0",(0,s.jsx)(l.em,{children:"cloudshell-cli"}),"\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-cli/blob/dev/README.md",children:"here"}),". To simplify the usage of CloudShell CLI with shells, we added a\xa0",(0,s.jsx)(l.em,{children:"CliServiceConfigurator"}),"\xa0base class that allows you to quickly set up communication with the device."]}),"\n",(0,s.jsxs)(l.p,{children:["To work with CloudShell CLI from the shell driver, you need to create a\xa0",(0,s.jsx)(l.em,{children:"CommandMode"}),"\xa0and initialize the\xa0",(0,s.jsx)(l.em,{children:"CliServiceConfigurator"}),"."]}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"Example:"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-python",children:'command_mode = CommandMode(".*")\nwith CliServiceConfigurator(resource_config=resource_config, logger=logger).get_cli_service(command_mode) as cli_service:\n    cli_service.send_command("")\n'})}),"\n",(0,s.jsx)(l.h3,{id:"snmp-configurator",children:"SNMP Configurator"}),"\n",(0,s.jsx)(l.p,{children:"The SNMP configurator provides SNMP communication with the device and resides in the cloudshell-snmp Python package. It includes two classes for working with SNMP:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"SnmpConfigurator"}),"\xa0is used for basic SNMP initialization"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"EnableDisableSnmpConfigurator"}),"\xa0allows you to implement Enable and Disable SNMP flows, which manage SNMP sessions on the device"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Like the CLI configurator, the main responsibilities of the SNMP configurator are:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Initialize\xa0",(0,s.jsx)(l.em,{children:"Snmp"}),". It does this by extracting and preparing the\xa0",(0,s.jsx)(l.em,{children:"Snmp"}),"\xa0parameters provided by the resource driver\u2019s context"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Analyze Enable and Disable SNMP attributes from the command context"}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Trigger the appropriate flow.",(0,s.jsx)(l.br,{}),"\n","To initialize the\xa0",(0,s.jsx)(l.code,{children:"SNMPConfigurator"}),"\xa0object, you need to pass the following objects:\xa0",(0,s.jsx)(l.code,{children:"resource_config"}),"\xa0and\xa0",(0,s.jsx)(l.code,{children:"logger"}),". To use the SNMP configurator, you must implement the following properties in your child class:"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"_create_enable_flow"}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"_create_disable_flow"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/snmp/cisco_snmp_handler.py",children:"cisco_snmp_handler"}),". For more information, see the\xa0",(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#flows",children:"Flows"}),"\xa0section. \u2003"]}),"\n",(0,s.jsx)(l.h2,{id:"flows",children:"Flows"}),"\n",(0,s.jsxs)(l.p,{children:["A flow is an organized sequence of Command Actions. Each flow has interfaces, which contain commands that are triggered by the resource driver. All the base flows are located in the\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-flows/tree/dev/cloudshell/shell/flows",children:"cloudshell-shell-flows"}),"\xa0Python package, except for the connectivity flow which is detailed below. They are based on the\xa0BaseFlow\xa0interfaces, which are also located in the corresponding packages (",(0,s.jsx)(l.em,{children:"cloudshell-shell-flows"}),"\xa0or\xa0",(0,s.jsx)(l.em,{children:"cloudshel-shell-connectivity-flow"}),")."]}),"\n",(0,s.jsx)(l.p,{children:"This is an abstract class that includes generic implementations for preparing and validating the required parameters. For example, when running the Save command in CloudShell Portal, the flow must validate the folder path provided by the sandbox end-user."}),"\n",(0,s.jsx)(l.p,{children:"The necessary interfaces are already implemented in the base flows."}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-connectivity-flow/blob/dev/cloudshell/shell/flows/connectivity/basic_flow.py",children:"Connectivity Flow"}),"\xa0\u2013 Uses multithread logic to speed up the VLAN configuration on the device, especially when the resource needs to undergo a huge request that involves multiple, concurrently run actions. Note that unlike the rest of the flows, this flow resides in the\xa0",(0,s.jsx)(l.em,{children:"cloudshell-shell-connectivity-flow"}),"\xa0package. To initialize this flow, you have to provide the\xa0",(0,s.jsx)(l.em,{children:"logger"}),"\xa0and\xa0",(0,s.jsx)(l.em,{children:"cli_handler"}),"\xa0objects (described in\xa0",(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#key-entities",children:"Key Entities"}),"). Use the\xa0",(0,s.jsx)(l.code,{children:"apply_connectivity_changes"}),"\xa0method to start. The following methods must be implemented:"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"_add_vlan_flow"}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"_remove_vlan_flow"}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_connectivity_flow.py",children:"example"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/configuration/basic_flow.py",children:"Configuration Flow"}),"\xa0\u2013 Prepares and validates the provided path for the\xa0",(0,s.jsx)(l.code,{children:"save"}),",\xa0",(0,s.jsx)(l.code,{children:"restore"}),",\xa0",(0,s.jsx)(l.code,{children:"orchestration save"}),"\xa0and\xa0",(0,s.jsx)(l.code,{children:"orchestration restore"}),"\xa0commands. To initialize this flow, you have to pass the\xa0",(0,s.jsx)(l.em,{children:"logger"}),",\xa0",(0,s.jsx)(l.em,{children:"resource_config"}),",\xa0",(0,s.jsx)(l.em,{children:"cli_handler"}),"\xa0and\xa0",(0,s.jsx)(l.em,{children:"api"}),"\xa0objects (described in\xa0",(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#key-entities",children:"Key Entities"}),"). The following methods must be implemented:"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.em,{children:"_save_flow"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.em,{children:"_restore_flow"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.em,{children:"_file_system"}),"\xa0\u2013 a default filesystem value, see example below."]}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_configuration_flow.py",children:"example"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/firmware/basic_flow.py",children:"Firmware Flow"}),"\xa0\u2013 This flow serves as a configuration flow and also validates the firmware\u2019s file path. To initialize this flow, you need to pass the\xa0",(0,s.jsx)(l.em,{children:"logger"}),"\xa0object. The following method must be implemented:"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"_load_firmware_flow"}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_load_firmware_flow.py",children:"example"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/command/basic_flow.py",children:"Run Command Flow"}),"\xa0\u2013 As you can see from the name, this flow handles the\xa0",(0,s.jsx)(l.code,{children:"Run Custom Command"}),"\xa0and\xa0",(0,s.jsx)(l.code,{children:"Run Custom Config Command"}),"\xa0driver methods and doesn\u2019t require anything else to implement. However, if you want to customize the\xa0",(0,s.jsx)(l.code,{children:"run_command_flow"}),"\xa0property, you are welcome to override it. To initialize this flow, just pass the\xa0",(0,s.jsx)(l.em,{children:"logger"}),"\xa0and\xa0",(0,s.jsx)(l.em,{children:"cli_handler"}),"\xa0objects."]}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_run_command_flow.py",children:"example"}),"\xa0on how to create the run command flow."]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/state/basic_flow.py",children:"State Flow"}),"\xa0\u2013 This flow is very similar to the Run Custom Command flow as it doesn\u2019t require any additional implementations. It contains implementations for the\xa0",(0,s.jsx)(l.code,{children:"Health Check"}),"\xa0and\xa0",(0,s.jsx)(l.code,{children:"Shutdown"}),"\xa0commands. To initialize this flow, you need to pass the\xa0",(0,s.jsx)(l.em,{children:"logger"}),",\xa0",(0,s.jsx)(l.em,{children:"api"}),",\xa0",(0,s.jsx)(l.em,{children:"cli_handler"}),"\xa0and\xa0",(0,s.jsx)(l.em,{children:"resource_config"}),"\xa0objects mentioned in\xa0",(0,s.jsx)(l.a,{href:"/cloudshell-help/next/devguide/reference/quali-shell-framework-py3#key-entities",children:"Key Entities"}),"."]}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_state_flow.py",children:"example"}),"\xa0on how to create the state flow."]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/autoload/basic_flow.py",children:"Autoload Flow"}),"\xa0\u2013 Discovers the device\u2019s hardware structure and general details, such as the firmware version and model. This flow requires the\xa0",(0,s.jsx)(l.em,{children:"autoload_flow"}),"\xa0method to be implemented. To initialize this flow, just pass the\xa0",(0,s.jsx)(l.em,{children:"logger"}),"\xa0object. The following method must be implemented:"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"_autoload_flow"}),"\n",(0,s.jsxs)(l.p,{children:["For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_autoload_flow.py",children:"example"}),"\xa0on how to create the autoload flow."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"command-templates",children:"Command Templates"}),"\n",(0,s.jsxs)(l.p,{children:["A Command Template is a constant object of the\xa0",(0,s.jsx)(l.em,{children:"CommandTemplate"}),"\xa0class, which is located in\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template.py",children:"cloudshell-cli"}),". It contains three elements:"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"command"}),"\xa0\u2013 A command you want to send to the device. Supports formatting parameters. For example:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:"copy {src} {dst} [vrf {vrf}]\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"action map"}),"\xa0\u2013 A dictionary of regex patterns (as keys) and lambda functions (as values). To illustrate this, when you get a \u201c(yes/no)\u201d prompt, you can send an appropriate command by specifying the required lambda function. For example:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:"r'\\(y/n\\)': lambda session, logger: session.send_line('y', logger)\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.strong,{children:"error map"}),"\xa0\u2013 Similar to action map but for errors. It is a dictionary of regexp pattern and error message test pairs. For example:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:'r"[Ii]nvalid\\s*([Ii]nput|[Cc]ommand ":  \u201cOverride mode is not supported\u201d\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["\xa0\xa0\xa0\xa0\xa0For reference, see this command template\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/command_templates/configuration.py",children:"file"}),"."]}),"\n",(0,s.jsx)(l.h2,{id:"command-actions",children:"Command Actions"}),"\n",(0,s.jsxs)(l.p,{children:["Command Action is a method or function (depending on your implementation) that runs one or more Command Templates. The\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template_executor.py",children:"CommandTemplateExecutor"}),"\xa0is provided for running command templates. For reference, see this\xa0",(0,s.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/command_actions/add_remove_vlan_actions.py",children:"example"}),"."]}),"\n",(0,s.jsx)(l.p,{children:"For example, if we want to execute the CONFIGURE_VLAN command template:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:'CONFIGURE_VLAN = CommandTemplate("vlan {vlan_id}", error_map=OrderedDict({"%.*\\.": "Error creating vlan")}))\n'})}),"\n",(0,s.jsxs)(l.p,{children:["We need to (1) pass the\xa0session\xa0object, command template and action/error maps to the\xa0",(0,s.jsx)(l.em,{children:"CommandTemplateExecutor"}),", and (2)\xa0",(0,s.jsx)(l.code,{children:"vlan_id"}),"\xa0to the\xa0",(0,s.jsx)(l.code,{children:"execute_command"}),"\xa0method. As illustrated below:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:"CommandTemplateExecutor(session, CONFIGURE_VLAN, action_map=action_map, error_map=error_map).execute_command(vlan_id=vlan_id)\n"})})]})}function d(e={}){const{wrapper:l}={...(0,i.M)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},72008:(e,l,n)=>{n.d(l,{c:()=>s});const s=n.p+"assets/images/Quali-s-Shell-Framework-Python_1_624x429-306d4c3fe13018c7d6d35e5bb3a346d4.jpg"},4552:(e,l,n)=>{n.d(l,{I:()=>r,M:()=>t});var s=n(11504);const i={},o=s.createContext(i);function t(e){const l=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:l},e.children)}}}]);