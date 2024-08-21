"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[51719],{38474:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var i=s(74848),l=s(28453);const r={sidebar_position:3},o="Quali\u2019s Shell Framework (Python 2)",t={id:"devguide/reference/quali-shell-framework-py2",title:"Quali\u2019s Shell Framework (Python 2)",description:"In this article, we will familiarize ourselves with the CloudShell shell framework and learn how to leverage it to develop and customize commands in shells based on Python 2. Note that this applies to 1st Gen and 2nd Gen shells.",source:"@site/versioned_docs/version-2024.1/devguide/reference/quali-shell-framework-py2.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/quali-shell-framework-py2",permalink:"/devguide/reference/quali-shell-framework-py2",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/devguide/reference/quali-shell-framework-py2.md",tags:[],version:"2024.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Shellfoundry",permalink:"/devguide/reference/shellfoundry"},next:{title:"Quali\u2019s Shell Framework (Python 3)",permalink:"/devguide/reference/quali-shell-framework-py3"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Python package structure",id:"python-package-structure",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Key Entities",id:"key-entities",level:2},{value:"Communication Handlers",id:"communication-handlers",level:2},{value:"CLI Handler",id:"cli-handler",level:3},{value:"SNMP Handler",id:"snmp-handler",level:3},{value:"Runners",id:"runners",level:2},{value:"Flows",id:"flows",level:2},{value:"Command Templates",id:"command-templates",level:2},{value:"Command Actions",id:"command-actions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"qualis-shell-framework-python-2",children:"Quali\u2019s Shell Framework (Python 2)"})}),"\n",(0,i.jsx)(n.p,{children:"In this article, we will familiarize ourselves with the CloudShell shell framework and learn how to leverage it to develop and customize commands in shells based on Python 2. Note that this applies to 1st Gen and 2nd Gen shells."}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:'Every CloudShell shell consists of a data model and a driver. The driver is written in python and can have Python package dependencies. Quali\u2019s officially released shells use a common set of Python packages developed by Quali, which contain most of the logic of Quali shells, while the driver itself (the ".py\u201d file inside the shell) is the thin layer that defines the interface with CloudShell along with the driver\u2019s Python requirements.'}),"\n",(0,i.jsxs)(n.p,{children:["Quali\u2019s official shells have a granularity level of Vendor and OS. This means that each official shell supports all devices of a specific vendor and OS. The exact functionality that is exposed by the shell is defined in the relevant\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-standards/tree/master/Documentation",children:"shell standard"}),". The structure of the Python packages reflects this granularity \u2013 for example, any logic that is common to all networking devices resides in ",(0,i.jsx)(n.em,{children:"cloudshell-networking"}),", while any Cisco-specific logic resides in ",(0,i.jsx)(n.em,{children:"cloudshell-networking-cisco"}),", and any Cisco IOS-specific logic resides in ",(0,i.jsx)(n.em,{children:"cloudshell-networking-cisco-ios"}),". It is possible to use Quali\u2019s shell framework when creating your own shells or customizing existing ones."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that using the framework is optional. To work with one or more of Quali framework\u2019s Python packages, you need to list them in your shell project\u2019s ",(0,i.jsx)(n.code,{children:"requirements.txt"})," file. Then, you can either write the code, which uses the packages, directly in the shell\u2019s driver or create your own Python packages and add them to the shell\u2019s requirements file. You can also load such custom Python packages into your local\xa0",(0,i.jsx)(n.code,{children:"PyPi server repository"}),"\xa0on the Quali Server machine to make them available to your entire CloudShell deployment - for details on how to load custom packages, see ",(0,i.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note-one-line",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"}),"\xa0We don\u2019t recommend to modify Quali Python packages as CloudShell may overwrite them if a newer package that has the same file name is published on the public PyPi repository. Alternatively, you\u2019re welcome to create your own packages, using our Python packages as a reference."]})}),"\n",(0,i.jsx)(n.h2,{id:"python-package-structure",children:"Python package structure"}),"\n",(0,i.jsx)(n.p,{children:"The following diagram shows the Python classes used by the shell commands and their dependencies:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Python Package Structure Diagram",src:s(37826).A+"",width:"624",height:"435"})}),"\n",(0,i.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.p,{children:"The architecture of a Quali Python shell comprises four inter-dependent elements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#runners",children:"Runners"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#flows",children:"Flows"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#command-templates",children:"Command Templates"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#command-actions",children:"Command Actions"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Runners execute Flows and process user inputs, and also define CLI and/or SNMP handlers, which are used in the Flows. Flows sequentially execute a number of Command Actions, while each Command Action runs a specific Command Template."}),"\n",(0,i.jsxs)(n.p,{children:["An additional element that is used by the runners is the communication handler, which allows you to communicate with the device. For details, see ",(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#communication-handlers",children:"Communication Handlers"}),". \u2003"]}),"\n",(0,i.jsx)(n.h2,{id:"key-entities",children:"Key Entities"}),"\n",(0,i.jsx)(n.p,{children:"There are several objects that must be initialized in the Python driver, to allow you to work with Quali\u2019s infrastructure:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Communication Handlers"}),"\xa0\u2013 These entities handle the communication between the shell and the device. The most common handlers are cli (",(0,i.jsx)(n.code,{children:"cloudshell-cli"}),") and snmp (",(0,i.jsx)(n.code,{children:"cloudshell-snmp"}),"). These handlers must be initialized whenever calling a shell command, and passed to the runners."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cli"}),"\xa0- A Python package that resides in the driver and is used to create the cli handler. This package provides an easy abstraction interface for CLI access and communication (Telnet, TCP, SSH etc.) for network devices. The CLI class instance is provided by\xa0",(0,i.jsx)(n.code,{children:"cloudshell.cli.cli"}),". It must be created when the driver is initializing, since it allows the shell to designate a single session pool for all of the shell\u2019s commands. You are welcome to use the\xa0",(0,i.jsx)(n.em,{children:"_get_cli\xa0helper"})," from\xa0",(0,i.jsx)(n.em,{children:"driver_helper"}),"\xa0mentioned above.\xa0",(0,i.jsx)(n.em,{children:"_get_cli"}),"\xa0allows you to define the session pool\u2019s size and idle timeout."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"api"}),"\xa0is an instance of the\xa0",(0,i.jsx)(n.em,{children:"cloudshell-automation-API"}),"\u2019s\xa0",(0,i.jsx)(n.em,{children:"CloudShellAPISession"}),"\xa0class. It must be created on every command execution. This class has a helper named\xa0",(0,i.jsx)(n.em,{children:"_get_api"}),", which is also provided by the\xa0",(0,i.jsx)(n.em,{children:"driver_helper"}),"\xa0mentioned above."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"logger"}),"\xa0is a logger object from\xa0",(0,i.jsx)(n.em,{children:"cloudshell-core"}),". It is recommended to use the\xa0",(0,i.jsx)(n.em,{children:"driver_helper"}),"\u2019s ",(0,i.jsx)(n.em,{children:"get_logger_with_thread_id"}),"\xa0function."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"resource config"}),"\xa0\u2013 Python implementation of the relevant Quali standard, which defines the shell\u2019s attributes and default values. For example, a\xa0",(0,i.jsx)(n.em,{children:"GenericNetworkingResource"}),"\xa0class that contains all attributes required by the networking standard. It can be easily created using the\xa0",(0,i.jsx)(n.code,{children:"create_networking_resource_from_context"}),"\xa0method from\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/standards/networking/configuration_attributes_structure.py",children:"cloudshell.devices.standards.networking.configuration_attributes_structure"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that there is a helper method for each of these objects. For detailed information about each helper method, see\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/driver_helper.py",children:"cloudshell.devices.driver_helper"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For reference, see this\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/Cisco-NXOS-Switch-Shell-2G/blob/dev/src/driver.py",children:"example"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"communication-handlers",children:"Communication Handlers"}),"\n",(0,i.jsx)(n.p,{children:"The most common ways to communicate with the device are via:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"CLI \u2013 cloudshell-cli"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SNMP \u2013 cloudshell-snmp"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These handlers need to be initialized and passed to the runners."}),"\n",(0,i.jsx)(n.h3,{id:"cli-handler",children:"CLI Handler"}),"\n",(0,i.jsxs)(n.p,{children:["The CLI handler includes all the typical CloudShell CLI attributes you would need in order to communicate and work with a device modeled in CloudShell. For example, it knows how to retrieve the device\u2019s username and password, create a session, determine what kind of session to initiate, etc. For reference, see\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_cli_handler.py",children:"cisco_cli_handler.py"}),"\xa0and\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/cli/cisco_command_modes.py",children:"cisco_command_modes.py"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["There is a nice guide on how to use\xa0",(0,i.jsx)(n.em,{children:"cloudshell-cli"}),"\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-cli/blob/dev/README.md",children:"here"}),". However, to simplify the usage of the CloudShell CLI, we implemented a\xa0",(0,i.jsx)(n.em,{children:"CliHandlerImpl"}),"\xa0base class located\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/cli_handler_impl.py",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In the child class, you only need to implement these methods and properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"enable_mode"}),"\xa0\u2013 is a property that returns the\xa0",(0,i.jsx)(n.em,{children:"CommandMode"}),"\xa0class, which enables you to use the\xa0",(0,i.jsx)(n.strong,{children:"Enable"}),"\xa0mode, a mode that grants you root admin access to a Linux device.\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_command_modes.py#L46",children:"Example"}),". For details and implementation examples of\xa0",(0,i.jsx)(n.em,{children:"CommandMode"}),", click\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-cli/blob/dev/README.md",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"config_mode"}),"\xa0\u2013 is a property that returns the\xa0",(0,i.jsx)(n.em,{children:"CommandMode"}),"\xa0class, which enables you to use the\xa0",(0,i.jsx)(n.strong,{children:"Configuration"}),"\xa0mode, which allows you to configure the device\u2019s settings.\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_command_modes.py#L83",children:"Example"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"on_session_start"}),"\xa0\u2013 is a method that contains the commands you want to automatically execute at the start of each session.\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_cli_handler.py#L80",children:"Example"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example: Cli handler that requires the parameters\xa0",(0,i.jsx)(n.code,{children:"cli"}),",\xa0",(0,i.jsx)(n.code,{children:"resource_config"}),",\xa0",(0,i.jsx)(n.code,{children:"logger"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"api"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CLI Handler Code Example",src:s(48963).A+"",width:"538",height:"83"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the first parameter,\xa0",(0,i.jsx)(n.code,{children:"cli"}),", needs a CLI instance from\xa0",(0,i.jsx)(n.em,{children:"cloudshell.cli.cli"}),"\xa0to be initiated. For details about these parameters, see the\xa0",(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#key-entities",children:"Key Entities"}),"\xa0section."]}),"\n",(0,i.jsx)(n.h3,{id:"snmp-handler",children:"SNMP Handler"}),"\n",(0,i.jsx)(n.p,{children:"The SNMP handler provides SNMP communication with the device. Like the CLI handler, the main responsibilities of the SNMP handler are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Initialize\xa0",(0,i.jsx)(n.em,{children:"QualiSnmp"}),". It does this by extracting and preparing the\xa0",(0,i.jsx)(n.em,{children:"QualiSnmp"}),"\xa0parameters provided by the resource driver\u2019s context"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Analyze Enable and Disable SNMP attributes from the command context"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Trigger the appropriate flow. To initialize the\xa0",(0,i.jsx)(n.code,{children:"SNMPHandler"}),"\xa0object, you need to pass the following objects:\xa0",(0,i.jsx)(n.code,{children:"resource_config"}),",\xa0",(0,i.jsx)(n.code,{children:"logger"}),",\xa0",(0,i.jsx)(n.code,{children:"api"}),". To use the handler, you must implement the following properties in your child class:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"_create_enable_flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"_create_disable_flow"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For reference, see\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/snmp/cisco_snmp_handler.py",children:"cisco_snmp_handler"}),". For more information, see the\xa0",(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#flows",children:"Flows"}),"\xa0section. \u2003"]}),"\n",(0,i.jsx)(n.h2,{id:"runners",children:"Runners"}),"\n",(0,i.jsx)(n.p,{children:"This is an abstract class that includes generic implementations for preparing and validating the required parameters. For example, when running the Save command in CloudShell Portal, the runner must validate the folder path provided by the sandbox end-user. Typically, the shell extracts the data for the required parameters from the resource command\u2019s context and user inputs."}),"\n",(0,i.jsxs)(n.p,{children:["The necessary interfaces are already implemented in the base Runners. However, you can implement your own base runner, e.g.\xa0",(0,i.jsx)(n.em,{children:"ConnectivityRunner"}),"\xa0implements the\xa0",(0,i.jsx)(n.em,{children:"ConnectivityOperationsInterface"}),"\xa0interface. The runner\u2019s interfaces contain commands that are triggered by the resource driver."]}),"\n",(0,i.jsxs)(n.p,{children:["Overall, we have six Runners, all base classes and their interfaces are located in\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/tree/dev/cloudshell/devices/runners",children:"cloudshell-networking-devices"}),":"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["All runners except for Autoload Runner require the cli-handler parameter to be passed to the runner while it is being initialized. For example, see\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L86-L87",children:"this"}),"."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/connectivity_runner.py",children:"Connectivity Runner"}),"\xa0\u2013 Uses multithread logic to speed up the VLAN configuration on the device, especially when the resource needs to undergo a huge request that involves multiple, concurrently run actions. To initialize this runner, you have to provide the logger and cli_handler objects (described in\xa0",(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#key-entities",children:"Key Entities"}),"). Use the\xa0",(0,i.jsx)(n.code,{children:"apply_connectivity_changes"}),"\xa0method to start. The following properties have to be implemented:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"add_vlan_flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"remove_vlan_flow"}),"\n",(0,i.jsxs)(n.p,{children:["For reference, see this\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/runners/cisco_connectivity_runner.py",children:"example"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/configuration_runner.py",children:"Configuration Runner"}),"\xa0\u2013 Prepares and validates the provided path for the\xa0",(0,i.jsx)(n.code,{children:"save"}),",\xa0",(0,i.jsx)(n.code,{children:"restore"}),",\xa0",(0,i.jsx)(n.code,{children:"orchestration save"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"orchestration restore"}),"\xa0commands. To initialize this runner, you have to pass the\xa0",(0,i.jsx)(n.em,{children:"logger"}),",\xa0",(0,i.jsx)(n.em,{children:"resource_config"}),",\xa0",(0,i.jsx)(n.em,{children:"cli_handler"}),"\xa0and\xa0",(0,i.jsx)(n.em,{children:"api"}),"\xa0objects (described in Key Entities). The following properties have to be implemented:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"save_flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"restore_flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"file_system \u2013 a default filesystem value, see example below."}),"\n",(0,i.jsxs)(n.p,{children:["For reference, see this\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/runners/cisco_configuration_runner.py",children:"example"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/firmware_runner.py",children:"Firmware Runner"}),"\xa0\u2013 This runner serves as a Configuration Runner, and also validates the firmware\u2019s file path. To initialize this runner, you need to pass the\xa0",(0,i.jsx)(n.em,{children:"logger"}),"\xa0and\xa0",(0,i.jsx)(n.em,{children:"cli_handler"}),"\xa0objects. The following property has to be implemented:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"load_firmware_flow"})}),"\n",(0,i.jsxs)(n.p,{children:["For reference see this ",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/runners/cisco_firmware_runner.py",children:"example"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/run_command_runner.py",children:"Run Command Runner"}),"\xa0\u2013 As you can see from the name, this Runner handles the\xa0",(0,i.jsx)(n.code,{children:"Run Custom Command"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"Run Custom Config Command"}),"\xa0driver methods, and doesn\u2019t require anything else to implement. However, if you want to customize the\xa0",(0,i.jsx)(n.code,{children:"run_command_flow"}),"\xa0property, you are welcome to override it. To initialize this runner, just pass the\xa0",(0,i.jsx)(n.em,{children:"logger"}),"\xa0and\xa0",(0,i.jsx)(n.em,{children:"cli_handler"}),"\xa0objects."]}),"\n",(0,i.jsxs)(n.p,{children:["For reference, see this\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L79-L87",children:"example"}),"\xa0on how to create the run command runner."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/state_runner.py",children:"State Runner"}),"\xa0\u2013 This runner is very similar to the Run Custom Command Runner as it doesn\u2019t require any additional implementations. It contains implementations for the\xa0",(0,i.jsx)(n.code,{children:"Health Check"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"Shutdown"}),"\xa0commands. To initialize this runner, you need to pass the\xa0",(0,i.jsx)(n.em,{children:"logger"}),",\xa0",(0,i.jsx)(n.em,{children:"api"}),",\xa0",(0,i.jsx)(n.em,{children:"cli_handler"}),"\xa0and\xa0",(0,i.jsx)(n.em,{children:"resource_config"}),"\xa0objects mentioned in\xa0",(0,i.jsx)(n.a,{href:"/devguide/reference/quali-shell-framework-py2#key-entities",children:"Key Entities"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For reference, see this\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L371-L379",children:"example"}),"\xa0on how to create the state runner."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/autoload_runner.py",children:"Autoload Runner"}),"\xa0\u2013 Discovers the device\u2019s hardware structure and general details, such as the firmware version and model. This runner requires the\xa0",(0,i.jsx)(n.em,{children:"autoload_flow"}),"\xa0property to be implemented."]}),"\n",(0,i.jsxs)(n.p,{children:["To initialize this runner, just pass the ",(0,i.jsx)(n.code,{children:"resource_config"})," and ",(0,i.jsx)(n.code,{children:"snmp_handler"})," objects. For reference, see this\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L60-L65",children:"example"}),"\xa0on how to create the autoload runner."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"flows",children:"Flows"}),"\n",(0,i.jsxs)(n.p,{children:["Flow is an organized sequence of Command Actions. All the base Flows are located in the\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/flows/action_flows.py",children:"cloudshell-networking-devices"}),"\xa0Python package. They are based on the\xa0",(0,i.jsx)(n.em,{children:"BaseFlow"}),"\xa0interface located in the same place."]}),"\n",(0,i.jsx)(n.p,{children:"Most shells include the following flows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save Configuration Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restore Configuration Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add Vlan Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remove Vlan Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load Firmware Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run Command Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shutdown Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enable Snmp Flow"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Disable Snmp Flow"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that\xa0",(0,i.jsx)(n.em,{children:"Run Command Flow"}),"\xa0doesn\u2019t require you to implement the\xa0",(0,i.jsx)(n.code,{children:"execute_flow"}),"\xa0method as it\u2019s already implemented there. The only difference between the\xa0Run Command Flow\xa0and the rest is a set of parameters. ",(0,i.jsx)(n.em,{children:"Run Command Flow"})," has a generic approach to all devices, and doesn\u2019t require any specific implementation."]}),"\n",(0,i.jsxs)(n.p,{children:["For reference, see these\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/tree/5.2.16/cloudshell/networking/cisco/flows",children:"files"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"command-templates",children:"Command Templates"}),"\n",(0,i.jsxs)(n.p,{children:["A Command Template is a constant object of the\xa0",(0,i.jsx)(n.em,{children:"CommandTemplate"}),"\xa0class, which is located in\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template.py",children:"cloudshell-cli"}),". It contains three elements:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"command"}),"\xa0\u2013 A command you want to send to the device. Supports formatting parameters. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"copy {src} {dst} [vrf {vrf}]\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"action map"}),'\xa0\u2013 A dictionary of regex patterns (as keys) and lambda functions (as values). To illustrate this, when you get a "(yes/no)\u201d prompt, you can send an appropriate command by specifying the required lambda function. For example:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"r'\\(y/n\\)': lambda session, logger: session.send_line('y', logger)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"error map"}),"\xa0\u2013 Similar to action map but for errors. It is a dictionary of regexp pattern and error message test pairs. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'r"[Ii]nvalid\\s*([Ii]nput|[Cc]ommand ":  "Override mode is not supported\u201d\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\xa0\xa0\xa0\xa0\xa0For reference, see this command template\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/command_templates/configuration.py",children:"file"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"command-actions",children:"Command Actions"}),"\n",(0,i.jsxs)(n.p,{children:["Command Action is a method or function (depending on your implementation) that runs one or more Command Templates. The\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template_executor.py",children:"CommandTemplateExecutor"}),"\xa0is provided for running command templates. For reference, see this\xa0",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/command_actions/add_remove_vlan_actions.py",children:"example"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example, if we want to execute the CONFIGURE_VLAN command template:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'CONFIGURE_VLAN = CommandTemplate("vlan {vlan_id}", error_map=OrderedDict({"%.*\\.": "Error creating vlan")}))\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We need to (1) pass the\xa0",(0,i.jsx)(n.code,{children:"session"}),"\xa0object, command template and action/error maps to the\xa0",(0,i.jsx)(n.em,{children:"CommandTemplateExecutor"}),", and (2)\xa0",(0,i.jsx)(n.code,{children:"vlan_id"}),"\xa0to the\xa0",(0,i.jsx)(n.code,{children:"execute_command"}),"\xa0method. As illustrated below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"CommandTemplateExecutor(session, CONFIGURE_VLAN, action_map=action_map, error_map=error_map).execute_command(vlan_id=vlan_id)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},48963:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Quali-s-Shell-Framework-Python_1_538x83-161123275fbebc6e07e8fd66e63a1909.png"},37826:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Quali-s-Shell-Framework-Python_624x435-7e80b0b1e86e66f1c58e3072e5cfb922.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var i=s(96540);const l={},r=i.createContext(l);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);