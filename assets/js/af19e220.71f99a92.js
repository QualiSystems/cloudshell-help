"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[23504],{81044:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=s(17624),i=s(4552);const o={sidebar_position:4},d="Run App Commands",r={id:"portal/sandboxes/sandbox-workspace/apps/run-app-commands",title:"Run App Commands",description:"These commands are available for VMs deployed by CloudShell (Apps) and for static VM resources that were added to the CloudShell inventory.",source:"@site/docs/portal/sandboxes/sandbox-workspace/apps/run-app-commands.md",sourceDirName:"portal/sandboxes/sandbox-workspace/apps",slug:"/portal/sandboxes/sandbox-workspace/apps/run-app-commands",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/apps/run-app-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/sandboxes/sandbox-workspace/apps/run-app-commands.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Edit an App's Details in the Sandbox",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/apps/edit-app-in-sandbox"},next:{title:"Activity Feed for an App in the sandbox",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/apps/activity-feed-for-app"}},l={},a=[{value:"Related Topics",id:"related-topics",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-app-commands",children:"Run App Commands"}),"\n",(0,t.jsx)(n.p,{children:"These commands are available for VMs deployed by CloudShell (Apps) and for static VM resources that were added to the CloudShell inventory."}),"\n",(0,t.jsxs)(n.p,{children:["You start by deploying the App. This can be done manually as explained below or automatically via the out-of-the-box ",(0,t.jsx)(n.strong,{children:"Default Sandbox Setup"})," script, deploys all Apps in the sandbox as part of the Setup process. Once the App is deployed, additional automation commands are provided by the App's shell - see the ",(0,t.jsx)(n.strong,{children:"App Resource"})," step in ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template",children:"Adding App templates"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Note: Some commands, like Refresh IP, do not apply to static VMs."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To run an App command:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In a sandbox diagram, select the required App."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Hover over the App. From the context menu, select ",(0,t.jsx)(n.strong,{children:"Commands"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The\xa0",(0,t.jsx)(n.strong,{children:"Application Commands"})," pane is displayed, listing the commands available for this App."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Deploy"})," command."]}),"\n",(0,t.jsx)(n.p,{children:"![](/Images/CloudShell-Portal/Lab-Management/Working with Apps/Working with Apps_5_New.png)"}),"\n",(0,t.jsxs)(n.p,{children:['The App deploys the VM and installs the specified application in it. When App deployment completes, an "active" live status icon (',(0,t.jsx)(n.img,{src:s(38904).c+"",width:"10",height:"10"}),") is displayed on the App and additional commands become available."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For vCenter Apps, the VM is deployed under the vCenter folder defined in the App's vCenter cloud provider resource, under the ",(0,t.jsx)(n.code,{children:"Deployed Apps"})," folder, in a dedicated folder named as the sandbox ID."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:['If App deployment fails, an "error" live status icon is displayed on the App. Hover over the icon to see the error\'s description.',(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:s(41976).c+"",width:"232",height:"88"})]})}),"\n",(0,t.jsx)(n.p,{children:"The following Day 2 commands are provided by default for deployed Apps:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Command"}),(0,t.jsx)("th",{children:"Deployed App"}),(0,t.jsx)("th",{children:"Description"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Console"}),(0,t.jsx)("td",{children:"OpenStack 2G"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Prints the OpenStack console URL\xa0to the sandbox's Output console. Use this URL to view the instance OS."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To open the instance's OpenStack console:"})}),(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:["Run the ",(0,t.jsx)(n.strong,{children:"Console"})," command."]}),(0,t.jsx)("li",{children:"When the command's execution completes, open the Output console."}),(0,t.jsx)("li",{children:"Use the URL to see the web console in a new browser tab."}),(0,t.jsx)("li",{children:"Log in with the credentials to the OpenStack instance."})]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Customize Guest OS"}),(0,t.jsx)("td",{children:"VMware vCenter 2G"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Runs vCenter's Run Guest OS\xa0command on the VM before the VM powers on."}),(0,t.jsx)(n.p,{children:"This is a hidden command that needs to be executed using the CloudShell Automation API, as part of the sandbox's setup orchestration for example."}),(0,t.jsx)(n.p,{children:"Example scenarios include:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Running several customization specs on the same VM by running this command consecutively for each customization spec, followed by a power cycle (Power Off and then Power On)"}),"\n",(0,t.jsx)(n.li,{children:"Having a custom setup script that reserves the VM's MAC addresses from the IP management system (IPMS) and then runs the Customize Guest OS to assign the reserved IP addresses to the VM's network interfaces."}),"\n"]}),(0,t.jsxs)(n.p,{children:["For details, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/vCenter-customize-guest-os.htm",children:"Customize Guest OS vCenter Command Implementation"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Get Snapshots"}),(0,t.jsx)("td",{children:"VMware vCenter"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(n.p,{children:["Displays a list of the App's snapshots. To see the list, click the command execution\u2019s ",(0,t.jsx)(n.strong,{children:"Show command output"})," button."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(91696).c+"",width:"339",height:"125"})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Get VM Web Console"}),(0,t.jsx)("td",{children:"VMware vCenter 2G"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(n.p,{children:["Open the VM\u2019s web console directly from the deployed App. This can be done with or without QualiX (by specifying the credentials of a vCenter user that has at least the Virtual Machine console user role). For details on configuring QualiX support, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-vCenter-Console.htm",children:"Configure VM Web Console Access to vCenter App VMs (QualiX)"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To open the VM's web console:"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the Get VM Web Console command."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When the command's execution completes, open the Output console."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click the URL to open the web console in a new browser tab."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(47252).c+"",width:"551",height:"248"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in with your vCenter credentials."}),"\n"]}),"\n"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Power Off"}),(0,t.jsx)("td",{children:"All"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Shuts down the App's virtual machine but does not remove it from the sandbox."}),(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Apps are designed to be used in the context of a sandbox. Therefore, when the sandbox ends, you must ensure the deployed Apps are deleted and their virtual machines powered off and removed from the cloud provider. CloudShell's out-of-the-box ",(0,t.jsx)(n.strong,{children:"Default Sandbox Teardown"})," orchestration script does this during the ",(0,t.jsx)(n.strong,{children:"Teardown"})," process of the sandbox. For additional information, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe",children:"CloudShell Sandbox Template"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Deleting a deployed App from the sandbox will power off the App's VM and delete the VM from the cloud provider. For additional information, see the ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Run-Cmnds.htm?tocpath=CloudShell%20Portal%7CSandboxes%7CSandbox%20Workspace%7CApps%7C_____4#Removing",children:"Run App Commands"})," below."]}),"\n"]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Power On"}),(0,t.jsx)("td",{children:"All"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Deploys the App (deploys the virtual machine and installs the specified application)."}),(0,t.jsx)(n.p,{children:"Once deployed, the App changes to a resource modeled after the Shell specified for the App, and receives the IP address of the deployed virtual machine."}),(0,t.jsx)(n.p,{children:'Note that this command is not available for Azure deployed Apps that were deployed in another sandbox. Power On is only available in the "master" sandbox.'})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Reconfigure VM"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"VMware vCenter 2G"}),(0,t.jsx)(n.p,{children:"Microsoft Azure 2G"})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Allows scaling up/down the VM's technical specifications."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To reconfigure:"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Power Off"})," the VM."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Power off is not required when reconfiguring CPU and RAM on vCenter Apps based on vCenter 2G shell version 3.4.0 and up."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Reconfigure VM"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Specify the new settings (see the tooltips for additional details):"}),"\n",(0,t.jsx)(n.p,{children:"For vCenter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CPU"}),": Number of CPU cores"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RAM"}),": Memory in GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HDD"}),": Disk size in GB. Semicolon-separated list of disk number",":size",' pairs. For example: "1:60;2:40"']}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HDD disk size of a deployed App cannot be scaled down."}),"\n",(0,t.jsx)(n.li,{children:"HDD disk size cannot be modified for deployed Apps that have a snapshot."}),"\n",(0,t.jsx)(n.li,{children:'For Apps deployed from linked clones, the original image\'s HDD disk sizes cannot be changed, but it is possible to add additional disk sizes. In other words, if the image has disks 1 and 2, you can add disk 3. For example: "3:25".'}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"For Azure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VM Size"}),': Microsoft Azure VM Size. For example: "Standard_A1_v2"']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OS\xa0Disk Size"}),": OS\xa0disk size, in GB"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OS Disk Type"}),": OS disk type (HDD / SSD)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Disks"}),": Add/edit disk size by their name (HDD by default). The syntax is: ",(0,t.jsx)(n.code,{children:"disk_name:disk_size,disk_type"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Supported disk types are"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Standard HDD"})," (default)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Standard SSD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Premium SSD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Ultra SSD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Standard SSD (zone-redundant storage)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Premium SSD (zone-redundant storage)"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"disk1:10;disk2:20,Premium SSD;disk3:20,Standard SSD (zone-redundant storage)"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Disk size of a deployed App cannot be scaled down."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click Run."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Power On the VM."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reconfigure VM does not automatically update the App's VM details. To do so, open the App's VM Details pane and click the Refresh button."}),"\n"]}),"\n"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Refresh IP"}),(0,t.jsx)("td",{children:"All"}),(0,t.jsx)("td",{children:"Releases and renews the VM's IP address to troubleshoot network connection issues."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Remove Snapshot"}),(0,t.jsx)("td",{children:"VMware vCenter 2G"}),(0,t.jsxs)("td",{children:["Removes a snapshot from the App's VM. Optionally set the ",(0,t.jsx)(n.strong,{children:"remove_child"})," parameter to ",(0,t.jsx)(n.strong,{children:"Yes"})," to remove all child snapshots under the snapshot to be deleted."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Rerun Configuration Management"}),(0,t.jsx)("td",{children:"All"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"Re-executes the App's configuration management. The App's configuration management inputs are presented as command inputs with the values that were set before the App's deployment. You can change the values before running the command."}),(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This command is available only for Apps that support re-running configuration management (see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm#Adding",children:"Adding App templates"})," for details)."]}),"\n",(0,t.jsx)(n.li,{children:"Configuration management commands cannot be cancelled or stopped."}),"\n",(0,t.jsx)(n.li,{children:"The configuration management inputs can be retrieved via the GetResourceCommands CloudShell Automation API for Apps that allow rerunning configuration management from the sandbox."}),"\n"]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Restore Snapshot"}),(0,t.jsx)("td",{children:"VMware vCenter"}),(0,t.jsx)("td",{children:"Reverts the App's VM to a previously saved snapshot."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Save Snapshot"}),(0,t.jsx)("td",{children:"VMware vCenter"}),(0,t.jsxs)("td",{children:["Creates a snapshot of the App's VM, saving the state of the VM's hard disc, including software and configurations. To also save the VM's RAM memory, including open windows and running processes, set ",(0,t.jsx)(n.strong,{children:"Save Memory"})," to ",(0,t.jsx)(n.strong,{children:"Yes"}),". Snapshots are available for use on the deployed App in the same sandbox only."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Save to Template"}),(0,t.jsx)("td",{children:"VMware vCenter"}),(0,t.jsx)("td",{children:"Update the App template with the current settings of the App. Set Save Memory to Yes if you wish to include the App's current state in the snapshot."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../../../portal/sandboxes/workspace/apps",children:"Apps in Sandboxes"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},38904:(e,n,s)=>{s.d(n,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVChTY/j6/ft/EL7yZNf/yfsd/nfvMvzfvFXx/5zD/v/vvjwJlgNhsMI913r+V28U+l+8hhkDg+TACkEm4VIEwyA1DCArsEkiY5AaBpB7sEkiY5CNxCskxmpQaIA9g00SGZ95sBoSPFsu1mJVAMJrzuYhwhGEQYELsgIkCXITiA0yCSL//T8AyYv9h5E1140AAAAASUVORK5CYII="},41976:(e,n,s)=>{s.d(n,{c:()=>t});const t="data:image/png;base64,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"},91696:(e,n,s)=>{s.d(n,{c:()=>t});const t="data:image/png;base64,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"},47252:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/GetVMWebConsole-ef6e7935b90bf707312a1dba925d3812.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>d});var t=s(11504);const i={},o=t.createContext(i);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);