"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[70288],{54084:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=n(17624),i=n(4552);const r={sidebar_position:2},l="Managing Assets",o={id:"admin/cloudshell-manage-dashboard/managing-automation/managing-assets",title:"Managing Assets",description:"Assets overview",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-automation/managing-assets.md",sourceDirName:"admin/cloudshell-manage-dashboard/managing-automation",slug:"/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-automation/managing-assets.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Automation Overview",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-automation/automation-overview"},next:{title:"Managing Drivers",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-automation/managing-drivers"}},d={},a=[{value:"Assets overview",id:"assets-overview",level:2},{value:"Out-of-the-box orchestration scripts",id:"out-of-the-box-orchestration-scripts",level:3},{value:"Viewing scripts",id:"viewing-scripts",level:2},{value:"Adding scripts",id:"adding-scripts",level:2},{value:"Editing scripts",id:"editing-scripts",level:2},{value:"Downloading scripts",id:"downloading-scripts",level:2},{value:"Deleting scripts",id:"deleting-scripts",level:2},{value:"Requirements, script dependencies, virtual environments",id:"requirements-script-dependencies-virtual-environments",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"managing-assets",children:"Managing Assets"}),"\n",(0,t.jsx)(s.h2,{id:"assets-overview",children:"Assets overview"}),"\n",(0,t.jsx)(s.p,{children:"An asset is a script that runs automation in CloudShell sandboxes. CloudShell supports two types of scripts:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Python scripts"})," that run on the resource/App/bluperint level: A script is a single command on the blueprint or resource/App level. You can add many scripts to your blueprint or resources. CloudShell runs the scripts, which actually are processed in an external environment such as Python, which then returns the results to CloudShell."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Sandbox environment automation and enhanced orchestration is available with CloudShell Premium Tier."})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Repository Assets"})," are Configuration Management scripts (bash/PowerShell) or Ansible playbooks that run on resources. For Configuration Management that runs on deployed Apps, see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template",children:"Adding App templates"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:'For brevity, the term "script" denotes both Python scripts and repository assets, unless indicated otherwise.'})}),"\n",(0,t.jsx)(s.h3,{id:"out-of-the-box-orchestration-scripts",children:"Out-of-the-box orchestration scripts"}),"\n",(0,t.jsxs)(s.p,{children:["CloudShell provides the following orchestration scripts out-of-the-box. These scripts are included in the ",(0,t.jsx)(s.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates#cloudshell-sandbox-template",children:"CloudShell Sandbox Template"}),"\xa0but can also be added and removed from blueprints as appropriate."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Default Sandbox Setup"}),"\n",(0,t.jsx)(s.li,{children:"Default Sandbox Teardown"}),"\n",(0,t.jsx)(s.li,{children:"Default Sandbox Save"}),"\n",(0,t.jsx)(s.li,{children:"Default Sandbox Restore"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To learn how to develop scripts for CloudShell, see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/devguide/develop-orch-scripts/getting-started-with-orch-scripts",children:"Getting Started with Orchestration Scripts"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"viewing-scripts",children:"Viewing scripts"}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Manage"})," dashboard, you can view a repository of the blueprint and resource scripts that were uploaded in your domain. You can filter, sort, and search the repository for scripts."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Global admins can see all scripts in CloudShell, including scripts that were added to other domains, while domain admins can only see scripts that were added to the domain they're currently in."})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To view existing blueprint and resource scripts:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Manage"})," dashboard, from the left sidebar, select ",(0,t.jsx)(s.strong,{children:"Assets > Blueprint"}),", or ",(0,t.jsx)(s.strong,{children:"Assets > Resource"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The respective script catalog opens, displaying the blueprint or resource scripts/assets that were previously added to CloudShell, and related details, including: ",(0,t.jsx)(s.strong,{children:"Name"}),", ",(0,t.jsx)(s.strong,{children:"Type"}),", ",(0,t.jsx)(s.strong,{children:"Version"}),", ",(0,t.jsx)(s.strong,{children:"Blueprints"})," or resource ",(0,t.jsx)(s.strong,{children:"Models"}),", ",(0,t.jsx)(s.strong,{children:"Type"}),", ",(0,t.jsx)(s.strong,{children:"Domains"}),", and ",(0,t.jsx)(s.strong,{children:"Modified"})," by date and time."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Clicking ",(0,t.jsx)(s.strong,{children:"Manage >\xa0Assets"})," opens the ",(0,t.jsx)(s.strong,{children:"Script/Blueprint"})," catalog by default."]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To filter the list by domain, from the ",(0,t.jsx)(s.strong,{children:"Domain"})," dropdown list, select ",(0,t.jsx)(s.strong,{children:"All\xa0Domains"})," or a particular domain."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To sort the list, from the ",(0,t.jsx)(s.strong,{children:"Sort By"})," dropdown list, select ",(0,t.jsx)(s.strong,{children:"Modified"})," to sort the list by date and time in chronological order, or select ",(0,t.jsx)(s.strong,{children:"Name"})," to sort the list by script name in alphabetical order."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To search for particular scripts, type the relevant text in the search box ",(0,t.jsx)(s.img,{src:n(15216).c+"",width:"114",height:"27"})," at the top of the left sidebar. For example, you can search by name, type, model, or owner."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"adding-scripts",children:"Adding scripts"}),"\n",(0,t.jsx)(s.p,{children:"Scripts give you the flexibility to customize a blueprint and make extra features available, for example, adding specialized commands that can be run in a sandbox. You can add commands through Python scripts and upload them to CloudShell Portal to be used when configuring blueprint orchestration, including PY, PYC, and ZIP files containing several Python files."}),"\n",(0,t.jsx)(s.p,{children:"Use the steps in the following procedure to add blueprint and resource scripts to the CloudShell Portal."}),"\n",(0,t.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The script is added to the domain you are currently in. To expose the script to all domains, add the script in the Global domain"}),"\n",(0,t.jsxs)(s.li,{children:["By default, new scripts are added into CloudShell as Python 3 scripts. Therefore, if you're adding a Python 2 script, make sure to change the script's ",(0,t.jsx)(s.strong,{children:"Type"}),", as explained in ",(0,t.jsx)(s.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-automation/managing-assets#editing-scripts",children:"Editing scripts"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To add blueprint and resource scripts:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Manage"})," dashboard, from the left sidebar, select ",(0,t.jsx)(s.strong,{children:"Assets >\xa0Blueprint"})," or ",(0,t.jsx)(s.strong,{children:"Assets >\xa0Resource"})," to open the respective script catalog."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Repository assets only apply to resource-level components."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the toolbar, click ",(0,t.jsx)(s.strong,{children:"+ Add Python Script"})," to add a Python script or ",(0,t.jsx)(s.strong,{children:"+ Add Repository Asset"})," to add a Configuration Management script/playbook."]}),"\n",(0,t.jsx)(s.p,{children:"A dialog box is displayed, prompting you to select a script to upload."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Browse and select a script file to upload to CloudShell, and click ",(0,t.jsx)(s.strong,{children:"Open"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Uploading Completed"})," message is displayed at the top of the script catalog, indicating the upload status. When completed, the ",(0,t.jsx)(s.strong,{children:"Edit"})," button is displayed on the right. For more information, see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-automation/managing-assets#editing-scripts",children:"Editing scripts"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"editing-scripts",children:"Editing scripts"}),"\n",(0,t.jsx)(s.p,{children:"This section explains how to edit a Python script or repository asset's default parameters."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Global admins can edit any script in CloudShell while domain admins can only edit scripts that were added to the domain they are currently in."})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To edit Python scripts:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Manage"})," dashboard, from the left pane, select ",(0,t.jsx)(s.strong,{children:"Assets >\xa0Blueprint"})," or ",(0,t.jsx)(s.strong,{children:"Assets >\xa0Resource"})," to open the respective script catalog."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Name"})," of the script you want to edit."]}),"\n",(0,t.jsx)(s.p,{children:"Or-"}),"\n",(0,t.jsxs)(s.p,{children:["Click the script's More actions button ",(0,t.jsx)(s.img,{src:n(46967).c+"",width:"22",height:"20"})," and select ",(0,t.jsx)(s.strong,{children:"Edit"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Edit Script"})," dialog box for the respective blueprint or resource script is displayed."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Edit the relevant fields, as described in the following table:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Field"}),(0,t.jsx)("th",{children:"Description"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Script File"}),(0,t.jsxs)("td",{children:["The script file. To replace the current script file with another one, browse to the location where the required PY or PYC file is located, select the file, and click ",(0,t.jsx)(s.strong,{children:"Open"}),"."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Name"}),(0,t.jsx)("td",{children:"The name of the script. Edit as required."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Script Type"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"From the dropdown list, select an option:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Default"}),"\n",(0,t.jsx)(s.li,{children:"Setup"}),"\n",(0,t.jsx)(s.li,{children:"Teardown"}),"\n",(0,t.jsx)(s.li,{children:"Save"}),"\n",(0,t.jsx)(s.li,{children:"Restore"}),"\n"]}),(0,t.jsxs)(s.p,{children:["If you select ",(0,t.jsx)(s.strong,{children:"Setup"}),", ",(0,t.jsx)(s.strong,{children:"Teardown"}),", ",(0,t.jsx)(s.strong,{children:"Save"}),", or ",(0,t.jsx)(s.strong,{children:"Restore"}),", you cannot specify Category, Alias or parameters for the script."]}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"This field is relevant for blueprint scripts only."})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Version"}),(0,t.jsx)("td",{children:"Type the script version number. Remember to increment the number the next time you upload a new version of the script."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Visibility"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(s.p,{children:["(Hidden for blueprint scripts that have a Script Type defined) Determines who can see the script in the diagram's ",(0,t.jsx)(s.strong,{children:"Commands"})," pane:"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Admin Only"}),": Only domain admins and system admins"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Everyone"}),": (Default) All user types"]}),"\n"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Type"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(s.p,{children:["Select the Python version of the script. Options are ",(0,t.jsx)(s.strong,{children:"Python 2"})," or ",(0,t.jsx)(s.strong,{children:"Python 3"}),"."]}),(0,t.jsxs)(s.p,{children:["The default setting is Python 3, but the CloudShell admin can change it via the ",(0,t.jsx)(s.code,{children:"DefaultPythonVersion"})," configuration key."]}),(0,t.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"This does not affect existing scripts, whose Python version remains as is."}),"\n",(0,t.jsx)(s.li,{children:"Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s)."}),"\n"]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Description"}),(0,t.jsx)("td",{children:"Type the relevant text to clearly describe the script."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Models"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"(Relevant for resource scripts)\xa0From the dropdown list, select the relevant resource models associated with the resource script."}),(0,t.jsxs)(s.p,{children:["Associate App installation scripts to the relevant ",(0,t.jsx)(s.strong,{children:"Installation Options"})," model(s)."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Blueprints"}),(0,t.jsx)("td",{children:"(Relevant for blueprint scripts) Lists the blueprints that use the script. This field is only visible if the script is included in any blueprints."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Category"}),(0,t.jsxs)("td",{children:["Type the category name. In an active sandbox, in the ",(0,t.jsx)(s.strong,{children:"Blueprint Commands"})," pane, the scripts are arranged according to these categories."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Alias"}),(0,t.jsxs)("td",{children:["The alias for the script. Edit as required. In an active sandbox, in the ",(0,t.jsx)(s.strong,{children:"Blueprint Commands"})," pane, the scripts appear under this alias."]})]})]})]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To add additional parameters to the script, click the ",(0,t.jsx)(s.strong,{children:"Add Parameter"})," link at the bottom of the dialog box, and type the ",(0,t.jsx)(s.strong,{children:"Name"}),", ",(0,t.jsx)(s.strong,{children:"Default Value"}),", and ",(0,t.jsx)(s.strong,{children:"Description"})," of the parameter. Make sure you add parameters that are relevant for your script."]}),"\n",(0,t.jsx)(s.p,{children:"These parameters will be available for editing when running the script in an active sandbox."}),"\n",(0,t.jsxs)(s.p,{children:["To edit and delete the script parameters, click the adjacent ",(0,t.jsx)(s.strong,{children:"Edit"})," or ",(0,t.jsx)(s.strong,{children:"Delete"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Apply"})," to apply the changes and keep the window open."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Save"})," to save the changes and close the window."]}),"\n",(0,t.jsx)(s.p,{children:"The updated details of the edited script are displayed in the relevant blueprint or resource script catalog."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To edit repository assets:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Manage"})," dashboard, from the left pane, select ",(0,t.jsx)(s.strong,{children:"Assets >\xa0Resource"})," to open the Resource Assets catalog."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Name"})," of the repository asset you want to edit."]}),"\n",(0,t.jsx)(s.p,{children:"Or-"}),"\n",(0,t.jsxs)(s.p,{children:["Click the asset's More actions button ",(0,t.jsx)(s.img,{src:n(46967).c+"",width:"22",height:"20"})," and select ",(0,t.jsx)(s.strong,{children:"Edit"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Edit Script"})," dialog box is displayed."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Edit the relevant fields, as described in the following table:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Field"}),(0,t.jsx)("th",{children:"Description"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Name"}),(0,t.jsx)("td",{children:"The name of the asset. Edit as required."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Visibility"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(s.p,{children:["Determines who can see the asset in the diagram's ",(0,t.jsx)(s.strong,{children:"Commands"})," pane:"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Admin Only"}),": Only domain admins and system admins"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Everyone"}),": (Default) All user types"]}),"\n"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Description"}),(0,t.jsx)("td",{children:"Type the relevant text to clearly describe the asset."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Select Tool"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"Select the resource's installation and configuration tool."}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Script"}),": Select the custom script to run (PowerShell, bash or sh)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Ansible"}),": (Intended for customers who are already using Ansible) Select the Ansible playbook to run."]}),"\n"]}),(0,t.jsx)(s.p,{children:"Depending on the selection, additional options may become available."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Connection Method"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"The method to use to connect to the resource."}),(0,t.jsx)(s.p,{children:"Select:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"SSH"})," if the resource has a Linux OS"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Windows Remote Management"})," if the resource has a Windows OS"]}),"\n"]}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["To run configuration management on a Windows machine, the machine must have WinRM enabled. For details, see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/devguide/enable-winrm-on-win-vm-for-cfg-mng",children:"Enable WinRM on Windows VMs to Support Configuration Management"}),"."]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"URL"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"Details of the Ansible playbook or custom script. Unlike for Apps, resources support only one Configuration Management script or playbook."}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"URL"}),": Raw URL of the Ansible playbook or ZIP file, or custom script on the online repository (GitHub, GitLab and BitBucket are supported). URL must be accessible to the Execution Servers."]}),"\n"]}),(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)(s.p,{children:"The URL can accept parameters defined on the App, enabling you to test new versions of scripts without affecting consumer-ready versions. For example, you can have an App everyone is using, but if you want to test a version you're developing, simply change the value of the URL parameter in the test blueprint."}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"To use parameters, specify the parameter name in curly brackets (for example: {branch})."}),"\n",(0,t.jsx)(s.li,{children:"If the App has this parameter, CloudShell will replace the {branch} with its value during execution."}),"\n",(0,t.jsx)(s.li,{children:"If the parameter is missing, CloudShell will replace {branch} with emptystring."}),"\n",(0,t.jsx)(s.li,{children:"If you are using a global input, customers would be well advised to set a default value on the global input"}),"\n"]})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(s.p,{children:"For GitHub, specify the raw URL. For example:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"https://raw.githubusercontent.com/.../site.yml\n"})})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(s.p,{children:"For GitLab, specify the API endpoint in the format:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"https://gitlab.com/api/v4/projects/{Project ID}/repository/files/testsharding%2Eyml/raw?ref=master\n"})}),(0,t.jsx)(s.p,{children:"Where:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Each special character that the file contains has to be encoded. In the example above - \u201c%2E\u201d is an encoded point (\u201c.\u201d)"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The ref value is the branch name (master for this example)"}),"\n"]}),"\n"]})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(s.p,{children:"For BitBucket Data Center (on premise), use the following URL format:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"http://{datacenter server IP}/rest/api/1.0/projects/{projectKey}/repos/{repository name}/raw/testsharding.yml\n"})})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(s.p,{children:"For BitBucket Cloud, use one of the following:"})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"For source code files, specify the API endpoint:"}),"\n"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"https://api.bitbucket.org/2.0/repositories/{username}/{repository name}/src/{GUID- the Commit hash string} /testsharding.yml\n"})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'For download files (files residing in the repository\'s "Downloads" folder), specify this endpoint:'}),"\n"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"https://api.bitbucket.org/2.0/repositories/{username}/{repository name}/downloads/site.yml\n"})})]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"User/Password"}),(0,t.jsx)("td",{children:"(For private repositories) Access credentials or token to the script/playbook's online repository."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Token"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"(For private repositories) Access token to the script/playbook's online repository."}),(0,t.jsx)(s.p,{children:"For GitHub and GitLab, specify the API token. For BitBucket Data Center, specify the personal access token."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Inventory Groups"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"(For Ansible) Specify the host groups for the Configuration Management to be installed, separated by semicolons (;), thus allowing plays that target these groups to run on the resource."}),(0,t.jsxs)(s.p,{children:["For example: ",(0,t.jsx)(s.code,{children:"Servers/AppServers;Servers/DBServers"})]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Models"}),(0,t.jsx)("td",{children:"From the dropdown list, select the relevant resource models associated with the asset."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Category"}),(0,t.jsxs)("td",{children:["Type the category name. In an active sandbox, in the ",(0,t.jsx)(s.strong,{children:"Resource Commands"})," pane, the resource is arranged according to these categories."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Alias"}),(0,t.jsxs)("td",{children:["The alias for the repository asset. Edit as required. In an active sandbox, in the ",(0,t.jsx)(s.strong,{children:"Resource Commands"})," pane, the asset appears under this alias."]})]})]})]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To add additional parameters to the asset, click the ",(0,t.jsx)(s.strong,{children:"Add Parameter"})," link at the bottom of the dialog box, and type the ",(0,t.jsx)(s.strong,{children:"Name"}),", ",(0,t.jsx)(s.strong,{children:"Default Value"}),", and ",(0,t.jsx)(s.strong,{children:"Description"})," of the parameter. Make sure you add parameters that are relevant for your asset."]}),"\n",(0,t.jsx)(s.p,{children:"These parameters will be available for editing when running the asset in an active sandbox."}),"\n",(0,t.jsxs)(s.p,{children:["To edit and delete the asset parameters, click the adjacent ",(0,t.jsx)(s.strong,{children:"Edit"})," or ",(0,t.jsx)(s.strong,{children:"Delete"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Apply"})," to apply the changes and keep the window open."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Save"})," to save the changes and close the window."]}),"\n",(0,t.jsx)(s.p,{children:"The details of the update asset are displayed in the Resource Assets catalog."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"downloading-scripts",children:"Downloading scripts"}),"\n",(0,t.jsx)(s.p,{children:"You can download uploaded scripts to save them in your system."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Global admins can download any script in CloudShell while domain admins can only download scripts that were added to the domain they are currently in."})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To download blueprint and resource scripts:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Manage"})," dashboard, from the left pane, select ",(0,t.jsx)(s.strong,{children:"Assets >\xa0Blueprint"})," or ",(0,t.jsx)(s.strong,{children:"Assets > Resource"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The respective blueprint or resource script catalog is displayed."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click the script's More actions button ",(0,t.jsx)(s.img,{src:n(91220).c+"",width:"27",height:"26"})," and select ",(0,t.jsx)(s.strong,{children:"Download"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"A dialog box is displayed, prompting you to open or save the file."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"deleting-scripts",children:"Deleting scripts"}),"\n",(0,t.jsx)(s.p,{children:"You can delete scripts you no longer require."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Global admins can delete any script in CloudShell while domain admins can only delete scripts that were added to the domain they are currently in."})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To delete scripts:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Manage"})," dashboard, from the left pane, select ",(0,t.jsx)(s.strong,{children:"Assets >\xa0Blueprint"})," or ",(0,t.jsx)(s.strong,{children:"Assets > Resource"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The respective blueprint or resource script catalog is displayed."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Select the check boxes next to the relevant scripts that you want to delete."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the toolbar, click the ",(0,t.jsx)(s.strong,{children:"Delete Selected"})," button."]}),"\n",(0,t.jsx)(s.p,{children:"Or-"}),"\n",(0,t.jsxs)(s.p,{children:["Click the script's More actions button ",(0,t.jsx)(s.img,{src:n(91220).c+"",width:"27",height:"26"})," and select ",(0,t.jsx)(s.strong,{children:"Remove"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"A message is displayed, prompting you to confirm the deletion."}),"\n",(0,t.jsx)(s.p,{children:"The selected scripts are removed from the respective blueprint or resource script catalog."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"requirements-script-dependencies-virtual-environments",children:"Requirements, script dependencies, virtual environments"}),"\n",(0,t.jsxs)(s.p,{children:["Each Python script's dependencies are listed in the ",(0,t.jsx)(s.code,{children:"requirements.txt"})," file that is included in the zip file that contains the script. The dependencies are installed on the execution server by the pip installation when CloudShell prepares the Python virtual environment for the script. To use offline execution servers, the admin will need to perform several additional configurations."]}),"\n",(0,t.jsxs)(s.p,{children:["For additional information, see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments",children:"What are Python Virtual Environments?"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/",children:"Creating Blueprints"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/create-blueprint-commands",children:"Create Blueprint Commands"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/configure-orchestration",children:"Configure Blueprint Orchestration"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/run-commands",children:"Run Commands"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/apps/run-app-commands",children:"Run App Commands"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates#cloudshell-sandbox-template",children:"CloudShell Sandbox Template"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},46967:(e,s,n)=>{n.d(s,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADYSURBVDhP3ZM9CsJAEEZzAb2AJ/BmYmelN9BGbLyCvRi08AfSCSIqGCHJhohkNz8mwRTa2HyaLsg2i9No8aoHj2GG0ViYwXEYbNsmw7IsaL7vIwgCUjjn0GSCgj8PiwIhd58ohdd2iMk+gnOR+zJK4cY4RaWbY36MpL6MUlg/xBgYV5heKPVllMKjTYz2NMHOJQ4336uo9nIsqFexZSGWZgRGfbyWnqLWz7E6EU/cmSWoD28wqMPFc/A3xaPIfBmlsAo/GPajRCq+QQgBzc2f8LIHzoR46R0vsohLvLzWzA8AAAAASUVORK5CYII="},91220:(e,s,n)=>{n.d(s,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE3SURBVEhL7ZKxSgNBEIb3FazEJxBE9AksfBNfwAcRtFLTxdYmjYUKWhgQUgQsjOa4eGcul929vQtH9iRVsPidu3RyxbFkuhQfu7DLfMzML4LZAqNwDN/3WfE8DyKKJeI4ZieKIgilFJIkYUdrDVH3wMVGthacZJpQulz66l73pw4nmT8x6LxluO1n8CLTWOgke/5IsX9tsX1e4GGQVl3W/fuPk6w7THF8M8dhy1ZiVpmk4kG8Yqqa781J1v8yOL3LcdLJ0fMNb2dPNLrdS4utswL378xjHI4N2r0MrdcZBt+URk5ZOKVEfqbUYYYR7Y03+iQ6oCTuXBR45I7+C0X/qD3H3pWt9scqK4tPJEGxbyoqcZK5spGtBaFNWvvAgYjyBVTCL5RSQgQ/vwiLJUJLlCcHZW27xB+KpQr558q4FwAAAABJRU5ErkJggg=="},15216:(e,s,n)=>{n.d(s,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAbCAYAAACgJtvvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUQSURBVGhD7ZeHU1NZFIf3r9zZHQcddQUsO+yK7gKySxFC702kF2nSQgkkARJCCVVAl6Z0RXpNSELzt/ccEgckFB13wr5538ybybt579yb+91z7s0PkJEEskiJIIuUCLJIiSCLlAiySIkgi5QITkV++gSsrm3A2DsEZX0LKmu1aGxux8j4JKxWm/0pmauEU5Hb22bUNeqh0hgwMzfPUien36NOrYe+rUeIFqZdwNT0HJ5l5NvvXMfHj4soLCp32Tw4w6nINmM/VFoDTOYde8sRSytrUKpaODMvw8bGJtKe58HnSQi8/wxATn4Jt53FzOx7BCti7HenGR4Zx5OAMPvdaZZXVpHyLEf0FYjHvkGIjEnB+vrZ/X0rU9OzHPtKi6TBlSs16BsYPjXQ/YMD6ERGanWd9pbzUUTEI7eghMvxtsmE0nIlr2SL1YrKahXM9oVSp9JA22zAh/kFJKdlcxu9U9/QhPDoJOQVlmFra/uEyNGxd0hMycDOjoXvCbVWh7jEdNG2IxahWWRvHl/E+NsJpKbnIiYhDV3d/dxGMUteVrOU3IJSUXnWuT0xJRP5os86lRYmkxk1dWpERCejQIyd+iORisgEFJdWISo2BY2iX1fjNCMra7R4NTRySuTBwSH07T0s8yIou9xu3sfE5LS9BRgZfQu/v8NE6TYhNCIB6/bsjE14hvTMApZz/fav3C9NXlBIDFZEFaDPSamZn0WSgODQGLTo2/l9B3pDJ/7we4rJqRleJAdi4REU45b7b2jr6MbQm2G433uE2bkPqK5pEBmczXIixIIpKavm539280SrwcjjUNY28vgoVmV1PYsnkRSj09jLfd32+B2Li8v8rqtwKpKykQ43JtPJ0rosJoT2zoVLDNoh8jiUFf6BEReKtNlsiIhJxj/DY/w9QSWZRN7z8uHsyMgqxP7+kSgHOxYLDG1GzhKFiE/PrKyusfAfr91BZs4Lvn7xfAhjdx9nG8mhNv/AcC79BEmaF/sgERWbemIctIiOl1Yag69/qIh3lOWuwqlIm20PtUJYbYNO/KAlMUFWPvQo65uhuWRZdYgcG39nb6GMHL9URlpEfyHhcVhb3+DvHTgycuj1sIij4BJ9HqFh8UhIzkCjRsd79JdQDOqbslelbnYuMi5V/IYJ/uzgyz2SxnQlRRJ0Uu3oeoUalQ5VdU1o0hvR0tqFl9VqtLb3YkvIuAiaJNqjzGLPImm0D9EeSfdPFbEYFZLpc0Bw5AmRVMbyxLMZ2YVc9sZEJutaOz6LtIqMTUrNwouSCntPwOHhIQqLK5CTVyzGti0Wg0XEzEd80nMW8ZObB5d2ikf9UNZfv/WA91XK2khRAZyJzBbxKGspPr3f2zf4/xJJ0IRabbt88Njb2xcZYENrRy/KqhqhaenkSTkPei8rtwieDx7jzt2H4vIWZa6NJ0Bv6ICHaPf2CYR/QPgJkcSaOHjQQqB7H/8QTIu/HscPOzSZ127cRU/fAN8Tm5tb4kCTw6WT9q2g0GgsLCyxBHWTHve9fDlebEI6lpdXYWjv4r3zkU8QL7C4pHTxO/dOiFxYXOLyetPdi/umbeUska2irNMCJahcFxZVcD9+fykwMPiG2/8rzhXpDNvuLtpFplJm0v/M3d09+zcXQyUxPCqRS6vM9+WrRRK0avsHhzHwepRPsl/DrlgIMt+fbxIpc/WQRUoEWaREkEVKBFmkRJBFSgRZpESQRUoEWaQkAP4FytKpX5W1Z1kAAAAASUVORK5CYII="},4552:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>l});var t=n(11504);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);