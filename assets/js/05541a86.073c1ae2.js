"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[67704],{7148:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=n(17624),t=n(4552);const r={sidebar_position:1},l="L1 Switches",o={id:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches",title:"L1 Switches",description:"CloudShell includes dedicated specialized features for working with L1 switches. These are implemented using CloudShell Shells. To learn how to use L1 switches in CloudShell Portal, see L1 switches in CloudShell Portal.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connectivity-control",slug:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Connectivity Control",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/"},next:{title:"Patch Panels",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels"}},c={},h=[{value:"Why update an L1 switch?",id:"why-update-an-l1-switch",level:2},{value:"Verify user privileges",id:"verify-user-privileges",level:2},{value:"Import an L1 shell to CloudShell",id:"import-an-l1-shell-to-cloudshell",level:2},{value:"Create the L1 switch resource",id:"create-the-l1-switch-resource",level:2},{value:"Update the L1 switch firmware",id:"update-the-l1-switch-firmware",level:2},{value:"Sync between the L1 switch and CloudShell",id:"sync-between-the-l1-switch-and-cloudshell",level:2},{value:"Define the resource connections of the L1 switch",id:"define-the-resource-connections-of-the-l1-switch",level:2},{value:"Configure L1 switch runtime",id:"configure-l1-switch-runtime",level:2},{value:"Set the timeout period for L1 drivers",id:"set-the-timeout-period-for-l1-drivers",level:2},{value:"L1 switches in CloudShell Portal",id:"l1-switches-in-cloudshell-portal",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"l1-switches",children:"L1 Switches"}),"\n",(0,i.jsxs)(s.p,{children:["CloudShell includes dedicated specialized features for working with L1 switches. These are implemented using CloudShell Shells. To learn how to use L1 switches in CloudShell Portal, see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#l1-switches-in-cloudshell-portal",children:"L1 switches in CloudShell Portal"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"This article explains how to update an L1 switch with a new shell. For details specific to a particular L1 switch, see the documentation set included with the switch's shell."}),"\n",(0,i.jsx)(s.h2,{id:"why-update-an-l1-switch",children:"Why update an L1 switch?"}),"\n",(0,i.jsx)(s.p,{children:"Every major CloudShell release includes updated resource configurations for the different L1 switches. After upgrading to a new L1 version, you should import the updated shells for that device in your lab. The shell includes the family, model, attributes, and driver."}),"\n",(0,i.jsx)(s.p,{children:"The steps for updating an L1 switch are as follows:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#import-an-l1-shell-to-cloudshell",children:"Import an L1 shell to CloudShell"})," using the instructions in this article."]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#create-the-l1-switch-resource",children:"Create the L1 switch resource"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#update-the-l1-switch-firmware",children:"Update the L1 switch firmware"}),", if needed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#sync-between-the-l1-switch-and-cloudshell",children:"Sync between the L1 switch and CloudShell"})," to load the switch's blades, ports, and settings."]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#define-the-resource-connections-of-the-l1-switch",children:"Define the resource connections of the L1 switch"})}),"\n",(0,i.jsxs)(s.li,{children:["(Optional) ",(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#configure-l1-switch-runtime",children:"Configure L1 switch runtime"})," and replace any incompatible mappings."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#set-the-timeout-period-for-l1-drivers",children:"Set the timeout period for L1 drivers"}),", if needed."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"verify-user-privileges",children:"Verify user privileges"}),"\n",(0,i.jsx)(s.p,{children:"To deploy an L1 shell, make sure you have the following permissions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["User with Administrator privileges for ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"})]}),"\n",(0,i.jsx)(s.li,{children:"Username and password for the L1 switch"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"import-an-l1-shell-to-cloudshell",children:"Import an L1 shell to CloudShell"}),"\n",(0,i.jsx)(s.p,{children:"An updated shell may add new options, while rendering others obsolete. Check the release notes for instructions on managing changed functionality."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"To support physical endpoints, make sure your physical switches and routers use shells compatible with your version of CloudShell."})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To import an L1 Shell:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Download the shell to a temporary location. See ",(0,i.jsx)(s.a,{href:"https://github.com/orgs/QualiSystems/repositories",children:"Quali Repositories"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Before you import, open the zip file and verify that it includes an ",(0,i.jsx)(s.code,{children:"install_driver.bat"})," file."]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Copy the shell to the Quali Server\u2019s ",(0,i.jsx)(s.code,{children:"\\Drivers"})," installation folder."]}),"\n",(0,i.jsxs)(s.p,{children:["If the folder is missing, create it in the Server installation directory. By default: ",(0,i.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Drivers"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Extract the shell\u2019s zip file here. Make sure the ",(0,i.jsx)(s.code,{children:".exe"})," and ",(0,i.jsx)(s.code,{children:".json"})," files are located directly under the ",(0,i.jsx)(s.code,{children:"\\Drivers"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In command-line, navigate to the extracted folder and run the ",(0,i.jsx)(s.code,{children:"install_driver.bat"})," file."]}),"\n",(0,i.jsxs)(s.p,{children:["When the process completes, return to the Drivers folder and make sure you see an ",(0,i.jsx)(s.code,{children:".exe"})," file for the shell."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Make sure the L1 shell's ",(0,i.jsx)(s.code,{children:".exe"})," file is unblocked."]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Right-click the file and select ",(0,i.jsx)(s.strong,{children:"Properties"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["If you see an ",(0,i.jsx)(s.strong,{children:"Unblock"})," option, select it and click ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"}),", open the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, and click ",(0,i.jsx)(s.strong,{children:"Resource Families"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Resource Families"})," explorer, right-click the root and select ",(0,i.jsx)(s.strong,{children:"Import"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(37996).c+"",width:"574",height:"332"})}),"\n",(0,i.jsxs)(s.ol,{start:"8",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Navigate to the shell\u2019s download folder, open the data model folder, select the ...",(0,i.jsx)(s.code,{children:"ResourceConfiguration.xml"})," file and click ",(0,i.jsx)(s.strong,{children:"Open"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the confirmation window, click ",(0,i.jsx)(s.strong,{children:"OK"}),".\xa0"]}),"\n",(0,i.jsx)(s.p,{children:"The driver, families and resource models of the L1 switch are added to CloudShell."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Optionally refresh the ",(0,i.jsx)(s.strong,{children:"Resource Families"})," explorer to see the new L1 switch families and models."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"There is no need to restart Quali Server to complete this procedure."})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["If you are upgrading an existing Layer 1 shell, stop all existing processes of this shell that have the same name as the shell's ",(0,i.jsx)(s.code,{children:".exe"})," files included in the shell\u2019s downloaded folder."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"create-the-l1-switch-resource",children:"Create the L1 switch resource"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To create an L1 switch resource:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"}),", open ",(0,i.jsx)(s.strong,{children:"Resource Explorer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Add a new ",(0,i.jsx)(s.strong,{children:"Folder"})," that will house the L1 switch resources."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Right-click the folder and select ",(0,i.jsx)(s.strong,{children:"New>Resource"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"New Resource"})," dialog box is displayed."]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Enter a ",(0,i.jsx)(s.strong,{children:"Name"})," for the resource."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] ["})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Enter the device's ",(0,i.jsx)(s.strong,{children:"Address"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"If you are creating a resource for an OnPath switch on Horizon, make sure the address includes the Horizon server's address and the name of the OnPath. For example, \"192.168.10.214?Horizon=OnPath1\" where 192.168.10.214 is the Horizon server's address and OnPath1 is the name of the OnPath."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Select the switch's ",(0,i.jsx)(s.strong,{children:"Family"}),", ",(0,i.jsx)(s.strong,{children:"Model"})," and ",(0,i.jsx)(s.strong,{children:"Driver"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["The updated Family, Model and Drivers are added when you import the shell to ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"}),". The driver contains the device's relevant commands, enables connectivity, and enables you to autoload/syncronize the switch with the updated settings. More about autoload and synchronizations in ",(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#sync-between-the-l1-switch-and-cloudshell",children:"Sync between the L1 switch and CloudShell"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.strong,{children:"Resource Explorer"}),", right-click the new resource and select ",(0,i.jsx)(s.strong,{children:"Configuration"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The resource's ",(0,i.jsx)(s.strong,{children:"Configuration"})," tab is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Enter the switch's ",(0,i.jsx)(s.strong,{children:"User"})," and ",(0,i.jsx)(s.strong,{children:"Password"})," access credentials."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"update-the-l1-switch-firmware",children:"Update the L1 switch firmware"}),"\n",(0,i.jsx)(s.p,{children:"Drivers are designed to work with a limited range of firmware. Updating a driver may require you to update the L1 switch's firmware as well, and vice-versa. Make sure a compatible driver is available before updating the L1 switch's firmware."}),"\n",(0,i.jsx)(s.h2,{id:"sync-between-the-l1-switch-and-cloudshell",children:"Sync between the L1 switch and CloudShell"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To sync between the L1 switch and CloudShell:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["If you are configuring an L1 switch for the first time or if the device's structure has changed, use the ",(0,i.jsx)(s.strong,{children:"Auto Load"})," operation to create the resource structure of the resource in CloudShell, along with the switch's settings."]}),"\n",(0,i.jsxs)(s.p,{children:["If the resource was previously autoloaded, ",(0,i.jsx)(s.strong,{children:"Auto Load"})," will update the resource's structure and attributes to match the switch. This includes creating missing sub resources, removing sub resources that are missing from the device, replacing sub resources that are using the wrong model with the correct ones, and also copying mappings and attributes from the switch."]}),"\n",(0,i.jsxs)(s.p,{children:["Additional options include ",(0,i.jsx)(s.strong,{children:"Sync From"})," and ",(0,i.jsx)(s.strong,{children:"Sync To"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.strong,{children:"Sync From"})," operation updates the attributes of the CloudShell resource but does not override the resource structure like the ",(0,i.jsx)(s.strong,{children:"Auto Load"})," operation. ",(0,i.jsx)(s.strong,{children:"Sync From"})," updates attributes such as software version, switch address, port names and alarm states with the existing settings of the switch."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.strong,{children:"Sync To"})," operation enables you to update the physical device's settings with the settings defined in the CloudShell resource. To change the values of specific attributes on the physical device, in the ",(0,i.jsx)(s.strong,{children:"Settings"})," document of the resource, edit the attribute values and click ",(0,i.jsx)(s.strong,{children:"Activate"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Sync From"})," and ",(0,i.jsx)(s.strong,{children:"Sync To"})," can also be performed on a specific sub-resource, such as a blade or a port, while ",(0,i.jsx)(s.strong,{children:"Auto Load"})," applies to the entire resource structure. For additional information about these operations, see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/inventory-drivers-and-utilities",children:"Inventory Drivers and Utilities"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Set port attributes."}),"\n",(0,i.jsx)(s.p,{children:"The resource configuration for a switch model includes default attributes and value sets for each type of switch."}),"\n",(0,i.jsx)(s.p,{children:"Significant attributes for using the switch in a blueprint route include:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Protocol"})," - a read-write attribute allows users to determine the protocol to be used by the port"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Protocol Type"})," - used to mark a port as Ethernet or Fibre channel"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Speed"})," - a read-write attribute that determines the transmission speed or rate for the port"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Admin users can modify the switch attributes and values in CloudShell and apply the new values to the device, but in most cases, an L1 switch allows a list of permitted protocols and speeds for its ports."}),"\n",(0,i.jsx)(s.p,{children:"Typically, the L1 switch is set as a shared resource that is available to multiple users while the L1 switch ports are set as exclusive per sandbox. If the protocol type and speed attributes are associated with the switch ports, each user can specify which connectivity settings to use for the selected ports."}),"\n",(0,i.jsx)(s.p,{children:"If protocol type and speed are not specified, the route uses the default protocol type and speed for the switch."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Next, if you need to make adjustments to the port mappings (for example, to replace incompatible mappings), manually modify the ports and mappings and apply the changes to the device."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"define-the-resource-connections-of-the-l1-switch",children:"Define the resource connections of the L1 switch"}),"\n",(0,i.jsxs)(s.p,{children:["For detailed information on how to do this, see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",children:"Define the Resource Connections of the Switch or Patch Panel"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"configure-l1-switch-runtime",children:"Configure L1 switch runtime"}),"\n",(0,i.jsx)(s.p,{children:"Switch runtime behavior is determined by a combination of settings in the driver's runtime configuration file and the values set for the port attributes. Each driver includes a runtime configuration that stores login information, logging preferences, and default actions to perform."}),"\n",(0,i.jsxs)(s.p,{children:["It is possible to have different runtime configuration settings for each driver. However, if you have multiple switches using the same driver, they will share the runtime configuration settings. Runtime settings between the Host tags will override the default runtime settings for a specific switch. For an example ",(0,i.jsx)(s.code,{children:"RuntimeConfig.xml"})," file:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<?xml version="1.0" encoding="UTF-8" ?>'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"<Runtime_Configuration>"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<Host Address="Default">'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<Attribute Name="VERBOSE" Step="INFORM" Value="5" />'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<Attribute Name="::CommonDriver_CTRL::Address" Step="INIT" Value="192.168.41.198" />'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<Attribute Name="::CommonDriver_CTRL::User" Step="INIT" Value="admin" />'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<Attribute Name="::CommonDriver_CTRL::Password" Step="INIT" Value="pxc***" />'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"</Host>"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<Host Address="192.168.42.240">'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<Attribute Name="VERBOSE" Step="INFORM" Value="5" />'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"</Host>"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"</Runtime_Configuration>"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"To change logging preferences"}),":"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Navigate to the Shell\u2019s server folder, select the ... ",(0,i.jsx)(s.code,{children:"RuntimeConfig.xml"})," file and click ",(0,i.jsx)(s.strong,{children:"Open"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Edit the ",(0,i.jsx)(s.code,{children:"VERBOSE"})," key for each host."]}),"\n",(0,i.jsx)(s.p,{children:"Verbose values range from 1, which documents only critical errors, to 7, which documents every action the driver takes. High verbosity creates large log files and can affect the time taken to resolve switch commands."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Save the file."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"set-the-timeout-period-for-l1-drivers",children:"Set the timeout period for L1 drivers"}),"\n",(0,i.jsxs)(s.p,{children:["CloudShell manages the execution of L1 resource commands using a dedicated process for each L1 driver on the ",(0,i.jsx)(s.strong,{children:"Quali Server"})," machine. The process is named after the driver and is created when running the first command of an L1 driver in the sandbox, after restarting ",(0,i.jsx)(s.strong,{children:"Quali Server"})," or if the driver's previous process was terminated during the sandbox's lifecycle."]}),"\n",(0,i.jsx)(s.p,{children:'However, some drivers, especially Python-based drivers, may require a longer startup time than the default 2 seconds timeout period defined in CloudShell. If the driver does not respond within the defined period, the following error message is displayed: "No response received from agent".'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To set a different timeout period for L1 drivers:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Open the ",(0,i.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file, add the following key, and set the value in seconds:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<add key="L1DriverProcessStartupTime" value="3"/>'})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Restart the ",(0,i.jsx)(s.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"l1-switches-in-cloudshell-portal",children:"L1 switches in CloudShell Portal"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:'This section applies to both patch panels and L1 switches. For brevity, the term "L1 device" is used for both.'})}),"\n",(0,i.jsx)(s.p,{children:"When you reserve a blueprint that has resources with connectivity requirements, CloudShell will resolve those connections using the L1 device resource(s) you configured."}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsxs)(s.p,{children:["You can see an L1 device's resolved connections in real time in the ",(0,i.jsx)(s.strong,{children:"Resource Explorer"}),". Right-click the L1 device resource and select ",(0,i.jsx)(s.strong,{children:"Settings"}),". In the L1 resource's ",(0,i.jsx)(s.strong,{children:"Settings"})," tab, click the ",(0,i.jsx)(s.strong,{children:"Mappings"}),' button. For example, a switch that connects the "Router2" and "Router1" resources to each other:']}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(26072).c+"",width:"847",height:"186"})})]}),"\n",(0,i.jsxs)(s.p,{children:["CloudShell Portal also enables you to reserve specific blades/ports for the duration of the sandbox. You can either drag the L1 resource into the sandbox (its default is shared) and then use the ",(0,i.jsx)(s.strong,{children:"Add sub resources"})," option to add some ports to the diagram (this will allocate the ports exclusively to sandboxes based on this blueprint), or you can use the ",(0,i.jsx)(s.strong,{children:"Unshare"})," option on the L1 device resource itself to get exclusive access to the entire resource for that sandbox."]}),"\n",(0,i.jsxs)(s.p,{children:["To learn how to add sub-resources and unshare a resource, see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/resources/configure-sub-resources",children:"Configure Sub-resources"})," and ",(0,i.jsx)(s.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/resources/share-reserved-resources",children:"Share Reserved Resources"}),"."]})]})}function a(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},37996:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/Imprt-34ccccfa8192e884054aa596b1c40b7a.png"},26072:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/SwitchMappings-7183aa87ba6e215a9cf3b9b0a8c8116c.png"},4552:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>l});var i=n(11504);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);