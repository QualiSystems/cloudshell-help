"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[53992],{71700:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=s(17624),t=s(4552);const r={sidebar_position:14},i="Common Driver Recipes",a={id:"devguide/developing-shells/common-driver-recipes",title:"Common Driver Recipes",description:"In this section we\u2019ll provide a few handy examples of common driver operations.",source:"@site/versioned_docs/version-2023.3/devguide/developing-shells/common-driver-recipes.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/common-driver-recipes",permalink:"/cloudshell-help/devguide/developing-shells/common-driver-recipes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/developing-shells/common-driver-recipes.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Overriding Old/Deprecated Shell Attributes",permalink:"/cloudshell-help/devguide/developing-shells/override-old-shell-attributes"},next:{title:"Tips and Tricks for Shells",permalink:"/cloudshell-help/devguide/developing-shells/tips-and-tricks-for-shells"}},c={},d=[{value:"Decrypting a password attribute",id:"decrypting-a-password-attribute",level:2},{value:"Updating the resource live status",id:"updating-the-resource-live-status",level:2},{value:"Sending a message to the sandbox console",id:"sending-a-message-to-the-sandbox-console",level:2},{value:"Sending commands to a networking device",id:"sending-commands-to-a-networking-device",level:2},{value:"Mapping connections using App sub-resources",id:"mapping-connections-using-app-sub-resources",level:2},{value:"Defining a connected command (which runs on another resource)",id:"defining-a-connected-command-which-runs-on-another-resource",level:2},{value:"Example - power commands on a PDU shell:",id:"example---power-commands-on-a-pdu-shell",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"common-driver-recipes",children:"Common Driver Recipes"}),"\n",(0,o.jsx)(n.p,{children:"In this section we\u2019ll provide a few handy examples of common driver operations."}),"\n",(0,o.jsxs)(n.p,{children:["The intention is to grow this into a good source to copy paste common code from. Most of the examples are available in the\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/devguide_examples",children:"DevGuide Examples"}),"\xa0repository under the\xa0",(0,o.jsx)(n.code,{children:"common_driver_recipes"}),"\xa0folder."]}),"\n",(0,o.jsx)(n.h2,{id:"decrypting-a-password-attribute",children:"Decrypting a password attribute"}),"\n",(0,o.jsx)(n.p,{children:"The password for logging into the device/app will be passed as an encrypted value to the driver as a part of the context object. In order to be able to use it to log in you\u2019ll most likely need to decrypt it. To do that, you can use the CloudShellAPI function\xa0DecryptPassword."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DecryptPassword"})," is for decrypting password-type attributes, and can only be executed by CloudShell admins."]})}),"\n",(0,o.jsx)(n.p,{children:"See the code below for an example:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"adding_examples/common_driver_recipes/src/driver.py"})," ",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py",children:"view"})," ",(0,o.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py",children:"raw"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def decrypt_password(self, context):\n    """\n    A simple example function\n    :param ResourceCommandContext context: the context the command runs on\n    """\n    session = CloudShellAPISession(host=context.connectivity.server_address,\n                                   token_id=context.connectivity.admin_auth_token,\n                                   domain=context.reservation.domain)\n\n    password = session.DecryptPassword(context.resource.attributes[\'Password\']).Value\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Note that in Python 3 shells, you no longer need to decrypt passwords as this is done out of the box by the\xa0",(0,o.jsx)(n.a,{href:"https://pypi.org/project/cloudshell-shell-networking-standard/",children:"cloudshell-shell-networking-standard"}),"\xa0Python package."]}),"\n",(0,o.jsx)(n.h2,{id:"updating-the-resource-live-status",children:"Updating the resource live status"}),"\n",(0,o.jsx)(n.p,{children:"The resource live status can be used to indicate the current state of the resource on the diagram. CloudShell comes with a pre-built collection of statuses you can use, and this collection of icons can also be extended if needed."}),"\n",(0,o.jsx)(n.p,{children:"The following code will update the resource live status from offline to online:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"adding_examples/common_driver_recipes/src/driver.py"})," ",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py",children:"view"})," ",(0,o.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py",children:"raw"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def update_resource_status(self, context):\n    """\n    A simple example function\n    :param ResourceCommandContext context: the context the command runs on\n    """\n    session = CloudShellAPISession(host=context.connectivity.server_address,\n                                   token_id=context.connectivity.admin_auth_token,\n                                   domain=context.reservation.domain)\n\n    session.SetResourceLiveStatus(context.resource.name, "Offline" )\n    for i in range(0,10):\n        session.SetResourceLiveStatus(context.resource.name, "Progress {status}".format(status=str(i*10)))\n\n    session.SetResourceLiveStatus(context.resource.name, "Online" )\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The full list of statuses can be found in the\xa0ServerUniversalSettings.xml\xa0file which you can find on the Quali Server machine under the ",(0,o.jsx)(n.code,{children:"%programdata%\\QualiSystems\\Settings\\Global"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<ResourcesLiveStatus>\n    <key name="Online">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\online.png</key>\n    <key name="Stopped">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\online.png</key>\n    <key name="Offline">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\offline.png</key>\n    <key name="Error">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\error.png</key>\n    <key name="Progress 0">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress0.png</key>\n    <key name="Progress 10">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress10.png</key>\n    <key name="Progress 20">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress20.png</key>\n    <key name="Progress 30">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress30.png</key>\n    <key name="Progress 40">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress40.png</key>\n    <key name="Progress 50">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress50.png</key>\n    <key name="Progress 60">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress60.png</key>\n    <key name="Progress 70">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress70.png</key>\n    <key name="Progress 80">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress80.png</key>\n    <key name="Progress 90">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress90.png</key>\n    <key name="Progress 100">C:\\ProgramData\\QualiSystems\\Portal\\Content\\Images\\progress100.png</key>\n  </ResourcesLiveStatus>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"sending-a-message-to-the-sandbox-console",children:"Sending a message to the sandbox console"}),"\n",(0,o.jsx)(n.p,{children:"Another way to update the sandbox regarding an operation progress is to use the\xa0WriteMessageToReservationOutput\xa0function to display a message in the Sandbox console pane. We can easily modify the previous code to do that instead:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/common_driver_recipes/src/driver.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"common_driver_recipes/src/driver.py"})," ",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/common_driver_recipes/src/driver.py",children:"view"})," ",(0,o.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/common_driver_recipes/src/driver.py",children:"raw"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def update_resource_status_to_console(self, context):\n    """\n    A simple example function\n    :param ResourceCommandContext context: the context the command runs on\n    """\n    session = CloudShellAPISession(host=context.connectivity.server_address,\n                                   token_id=context.connectivity.admin_auth_token,\n                                   domain=context.reservation.domain)\n\n    session.WriteMessageToReservationOutput(context.reservation.reservation_id, "Starting operation")\n    for i in range(0, 10):\n        session.WriteMessageToReservationOutput(context.reservation.reservation_id, "Progress at {status}%".format(status=str(i * 10)))\n\n    session.WriteMessageToReservationOutput(context.reservation.reservation_id, "Done - service online")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"sending-commands-to-a-networking-device",children:"Sending commands to a networking device"}),"\n",(0,o.jsxs)(n.p,{children:["When adding a new command that requires communication with a networking device, such as a switch or router, you need to open a session to the device. An easy way to do that is by leveraging Quali\u2019s shell framework (cloudshell-cli\xa0package). The framework can provide a session from a session pool via Telnet, SSH or TCP, based on the configuration saved in the\xa0",(0,o.jsx)(n.strong,{children:"CLI Connection Type"}),"\xa0attribute on the root resource."]}),"\n",(0,o.jsx)(n.p,{children:"See the code below for an example:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/QualiSystemsLab/Extended-Cisco-NXOS-Shell/blob/master/Ext_Cisco_NXOS_Shell_Package/Resource%20Drivers%20-%20Python/Generic%20Cisco%20NXOS%20Driver%20Version3%20Extended/cisco_nxos_resource_driver.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystemsLab",children:"QualiSystemsLab"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"cisco_nxos_resource_driver.py"})," ",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystemsLab/Extended-Cisco-NXOS-Shell/blob/master/Ext_Cisco_NXOS_Shell_Package/Resource%20Drivers%20-%20Python/Generic%20Cisco%20NXOS%20Driver%20Version3%20Extended/cisco_nxos_resource_driver.py",children:"view"})," ",(0,o.jsx)(n.a,{href:"https://raw.githubusercontent.com/QualiSystemsLab/Extended-Cisco-NXOS-Shell/master/Ext_Cisco_NXOS_Shell_Package/Resource%20Drivers%20-%20Python/Generic%20Cisco%20NXOS%20Driver%20Version3%20Extended/cisco_nxos_resource_driver.py",children:"raw"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def some_command(self, context, command)\n      logger = get_logger_with_thread_id(context)\n      api = get_api(context)\n      resource_config = create_networking_resource_from_context(shell_name=self.SHELL_NAME,\n                                                                supported_os=self.SUPPORTED_OS,\n                                                                context=context)\n      cli_handler = CliHandler(self._cli, resource_config, logger, api)\n      with cli_handler.get_cli_service(cli_handler.enable_mode) as session:\n          session.send_command("some command")\n          with session.enter_mode(cli_handler.config_mode) as config_session:\n              config_session.send_command("some config command")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"mapping-connections-using-app-sub-resources",children:"Mapping connections using App sub-resources"}),"\n",(0,o.jsxs)(n.p,{children:["Developers can map connections between sub-resources residing on deployed Apps. This applies to scenarios where you want to map the port connections between virtual devices residing in App VMs. For example, to map the connection between port 1 residing on a virtual switch and port 2 residing on another virtual switch. For details, see\xa0",(0,o.jsx)(n.a,{href:"/cloudshell-help/devguide/reference/map-connections-using-app-sub-resources",children:"Mapping Connections using App Sub-resources"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"defining-a-connected-command-which-runs-on-another-resource",children:"Defining a connected command (which runs on another resource)"}),"\n",(0,o.jsx)(n.p,{children:"In some scenarios, a command that runs on a specific resource logically requires the use of a different resource. These types of commands are called connected commands. They are executed on a resource in CloudShell Portal but in reality run on the connected resource (for example, a power switch) that performs the action."}),"\n",(0,o.jsx)(n.p,{children:"There are two types of connected commands:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Power commands"}),": Let\u2019s say you have a target resource that is controlled by a power switch (PDU). When you run a\xa0",(0,o.jsx)(n.strong,{children:"Power On"}),"\xa0command on the target resource, the user may think the command is running on that resource but it actually runs on the PDU that is connected to the resource."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Generic resource commands"}),": A remote command is similar to a power command but is not limited to power commands only. For example, you could have a command, which modifies a target resource\u2019s settings, but is actually running on the server that performs the modifications."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To create a connected command, you need to use a shell based on a standard that supports connected commands, currently, only\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/pdu_standard.md",children:"PDU"}),"\xa0for power commands and the\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/Generic%20Resource%20with%20Connected%20Commands.md",children:"Generic Resource with Connected Commands"}),". These commands need to be defined in two places, in the\xa0drivermetadata.xml\xa0and in the\xa0driver.py\xa0file."]}),"\n",(0,o.jsx)(n.p,{children:"In the driver\u2019s\xa0drivermetadata.xml, you define which commands are connected, as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'For power commands, the command must include the\xa0Tags="power"\xa0flag and the driver must include all three power commands (Power On, Power Off and Power Cycle):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.MyPduShellDriver" Name="MyPduShellDriver" Version="1.0.0">\n    <Layout>\n        <Category Name="Hidden Commands">\n            <Command Description="" DisplayName="Orchestration Save" Name="orchestration_save" />\n            <Command Description="" DisplayName="Orchestration Restore" Name="orchestration_restore" />\n        </Category>\n        <Command Name="PowerOn" DisplayName="Power On" Tags="power" Description="Power on device">\n        </Command>\n        <Command Name="PowerOff" DisplayName="Power Off" Tags="power" Description="Power off device">\n        </Command>\n        <Command Name="PowerCycle" DisplayName="Power Cycle" Tags="power" Description="Power off, then power on device">\n            <Parameters>\n                <Parameter Name="delay" DisplayName="Delay" Type="String" Mandatory="False" DefaultValue="0"/>\n            </Parameters>\n        </Command>\n    </Layout>\n</Driver>\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'For generic connected commands, you must use a shell that is based on a supporting standard and include the\xa0Tags="remote_connectivity"\xa0flag on the command:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.MyRemoteResourceDriver" Name="MyRemoteResourceDriver" Version="1.0.0">\n    <Layout>\n         <Category Name="Hidden Commands">\n            <Command Description="" DisplayName="Orchestration Save" Name="orchestration_save" />\n            <Command Description="" DisplayName="Orchestration Restore" Name="orchestration_restore" />\n        </Category>\n        <Command Name="MyConnectedCommand" Description="" DisplayName="My Connected Commmand" Tags="remote_connectivity">\n        </Command>\n        <Command Name="MyCommand" Description="" DisplayName="My Commmand">\n        </Command>\n    </Layout>\n</Driver>\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["And finally, in the\xa0",(0,o.jsx)(n.code,{children:"driver.py"}),"\xa0file, define the connected commands. In this case, PowerOn, PowerOff and PowerCycle:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def PowerOn(self, context, ports):\n    """\n    :type context: cloudshell.shell.core.driver_context.ResourceRemoteCommandContext\n    """\n    Pass\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To enable intellisense, on the\xa0",(0,o.jsx)(n.code,{children:"driver.py"}),", include the\xa0ResourceRemoteCommandContext\xa0context in the command\u2019s definition, as shown above."]}),"\n",(0,o.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Connected command definitions must include a\xa0ports\xa0parameter. You don\u2019t need to actually use it in your command. Just make sure it\u2019s included as it allows the connected command to run on multiple resources at the same time."}),"\n",(0,o.jsx)(n.li,{children:"Power commands only apply to unshared resources while generic resource commands can run on both shared and unshared resources."}),"\n",(0,o.jsx)(n.li,{children:"In CloudShell, the resource containing the connected command and the target resource must be directly connected to each other. If you have a switch resource in between, the connected command will not show on the target resource."}),"\n",(0,o.jsx)(n.li,{children:"You can use the CloudShell Automation API\u2019s\xa0ExecuteResourceConnectedCommand\xa0and \u201cpower management\u201d commands to add connected commands to other shells."}),"\n"]})}),"\n",(0,o.jsx)(n.h3,{id:"example---power-commands-on-a-pdu-shell",children:"Example - power commands on a PDU shell:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SetPortState"}),"\xa0should be a driver helper function that implements the specific logic of how to change the state of the power port state in a specific PDU."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import cloudshell.api.cloudshell_api as api\n\n\ndef PowerOn(self, context, ports):\n    """\n    :type context: drivercontext.ResourceRemoteCommandContext\n    """\n    api = self.__initApiSession__(context)\n    output = \'\'\n    for i in range(len(ports)):\n        self.SetPortState(context, ports[i].split(\'/\')[-1], "Online")  # Split the port number from its full address\n        api.SetResourceLiveStatus(context.remote_endpoints[i].fullname, "Online", "The Resource is powered on")\n        output += "Powered On {0}\\n".format(context.remote_endpoints[i].fullname)\n    return output\n\ndef PowerOff(self, context, ports):\n    api = self.__initApiSession__(context)\n    output = \'\'\n    for i in range(len(ports)):\n        self.SetPortState(context, ports[i].split(\'/\')[-1], "Offline")  # Split the port number from its full address\n        api.SetResourceLiveStatus(context.remote_endpoints[i].fullname, "Offline", "The Resource is powered off")\n        output += "Powered Off {0}\\n".format(context.remote_endpoints[i].fullname)\n    return output\n\ndef PowerCycle(self, context, ports, delay):\n    self.PowerOff(context, ports)\n    sleep(int(delay))\n    self.PowerOn(context, ports)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For reference, see the\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/shellfoundry-tosca-pdu-template",children:"PDU shell template"}),"\xa0or\xa0",(0,o.jsx)(n.a,{href:"https://github.com/QualiSystems/shellfoundry-tosca-resource_with_connected_commands-template",children:"Generic resource with connected commands shell template"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>i});var o=s(11504);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);