"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[83348],{53676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(17624),a=t(4552);const s={sidebar_position:7},r="Commands Visibility and Usability",o={id:"devguide/developing-shells/commands-visibility-and-usability",title:"Commands Visibility and Usability",description:"The Shell driver commands are accessible to CloudShell users via the portal as well as to orchestration scripts running on the sandbox. In this section we\u2019ll explore the different ways in which these commands can be customized in their appearance and behavior. The following customization options will be reviewed:",source:"@site/versioned_docs/version-2023.3/devguide/developing-shells/commands-visibility-and-usability.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/commands-visibility-and-usability",permalink:"/devguide/developing-shells/commands-visibility-and-usability",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/developing-shells/commands-visibility-and-usability.md",tags:[],version:"2023.3",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How Shells Get Information from CloudShell",permalink:"/devguide/developing-shells/how-shells-get-info-from-cs"},next:{title:"Driver Deep Dive",permalink:"/devguide/developing-shells/driver-deep-dive"}},l={},d=[{value:"Setting up",id:"setting-up",level:2},{value:"Changing the shell\u2019s Python version",id:"changing-the-shells-python-version",level:2},{value:"Changing the function\u2019s display name and description",id:"changing-the-functions-display-name-and-description",level:2},{value:"Setting \u201cadmin only\u201d functions",id:"setting-admin-only-functions",level:2},{value:"Optional parameters and default values",id:"optional-parameters-and-default-values",level:2},{value:"Restricting input to a specific set of possible values",id:"restricting-input-to-a-specific-set-of-possible-values",level:2},{value:"Adding categories",id:"adding-categories",level:2},{value:"Orchestration only commands (hidden commands)",id:"orchestration-only-commands-hidden-commands",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"commands-visibility-and-usability",children:"Commands Visibility and Usability"}),"\n",(0,i.jsx)(n.p,{children:"The Shell driver commands are accessible to CloudShell users via the portal as well as to orchestration scripts running on the sandbox. In this section we\u2019ll explore the different ways in which these commands can be customized in their appearance and behavior. The following customization options will be reviewed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#changing-the-shells-python-version",children:"Changing the shell\u2019s Python version"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#changing-the-functions-display-name-and-description",children:"Changing the function\u2019s display name and description"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#setting-admin-only-functions",children:"Setting \u201cadmin only\u201d functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#optional-parameters-and-default-values",children:"Optional parameters and default values"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#restricting-input-to-a-specific-set-of-possible-values",children:"Restricting input to a specific set of possible values"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#adding-categories",children:"Adding categories"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#orchestration-only-commands-hidden-commands",children:"Orchestration only commands (hidden commands)"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you haven\u2019t done some already it is recommended to go through the\xa0",(0,i.jsx)(n.a,{href:"/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),"\xa0tutorial before continuing to get a better understanding of the overall process of creating and using a shell. We also assume you\u2019ve gone through the steps described in the\xa0",(0,i.jsx)(n.a,{href:"/devguide/setting-up-dev-env",children:"Setting up the Development Environment"}),"\xa0section of this guide."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up",children:"Setting up"}),"\n",(0,i.jsxs)(n.p,{children:["We\u2019ll start by creating a new shell that we\u2019ll use in this example. In the\xa0",(0,i.jsx)(n.a,{href:"/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),"\xa0tutorial we used the Shellfoundry CLI tool to generate a working shell to get started quickly. In this section we\u2019ll also be using the Shellfoundry to create an example shell, only this time we\u2019ll use a different project template. The\xa0",(0,i.jsx)(n.em,{children:"resource-clean"}),"\xa0template is similar to the default template we\u2019ve used previously only it doesn\u2019t contain any example driver functions. This will make it easier for us to really go through the experience of starting from a clean slate."]}),"\n",(0,i.jsx)(n.p,{children:"From the command line, navigate to a folder under which you\u2019ll want the new shell to be created and type in the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"shellfoundry new customization-example\ncd customization_example\n"})}),"\n",(0,i.jsx)(n.p,{children:"A new project with an empty driver is created."}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s start by creating a function we can experiment on. Open the driver file. The file is named\xa0",(0,i.jsx)(n.code,{children:"driver.py"}),"\xa0and is located in the\xa0",(0,i.jsx)(n.code,{children:"src"}),"\xa0folder of the shell project. Add the following function to the shell driver class and save it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def user_facing_function(self, context, some_parameter, some_other_parameter):\n    """\n    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext\n    :type some_parameter: str\n    :type some_other_parameter: str\n    """\n    return "Thank you for calling this function."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We\u2019ve now created a shell with a single command. Similar to the flow covered in the\xa0",(0,i.jsx)(n.a,{href:"/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"})," tutorial, the next steps would be to create a resource instance of this shell in CloudShell and add it to a sandbox so we can experiment with it. You should refer to the\xa0",(0,i.jsx)(n.a,{href:"/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"})," tutorial for any question on how to accomplish the three steps below:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install the shell by running the following from the shell directory:\xa0",(0,i.jsx)(n.code,{children:"shellfoundry install"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a resource instance from the CloudShell inventory."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new sandbox and drag the resource instance into it. Open the ",(0,i.jsx)(n.strong,{children:"Commands"})," pane."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["At this point the ",(0,i.jsx)(n.strong,{children:"Commands"})," pane should look something like this:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(51892).c+"",width:"624",height:"263"})}),"\n",(0,i.jsx)(n.p,{children:"As you can see, we didn\u2019t need to specify any additional details to get our Python functions to be visible as shell commands in the CloudShell sandbox, however the commands appear if a very \u2018code\u2019 like manner so our next step would be making them a bit more presentable."}),"\n",(0,i.jsxs)(n.p,{children:["The information on how to display the driver functions in CloudShell is stored in the\xa0",(0,i.jsx)(n.code,{children:"drivermetadata.xml"}),"\xa0file located in the driver's\xa0",(0,i.jsx)(n.code,{children:"/src"}),"\xa0directory."]}),"\n",(0,i.jsx)(n.h2,{id:"changing-the-shells-python-version",children:"Changing the shell\u2019s Python version"}),"\n",(0,i.jsxs)(n.p,{children:["To change the shell\u2019s default Python version, open the\xa0",(0,i.jsx)(n.code,{children:"drivermetadata.xml"}),"\xa0file and in the\xa0Driver\xa0line, add the\xa0",(0,i.jsx)(n.code,{children:"PythonVersion"}),"\xa0property with the new version (2, 3). For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CloudService2Driver" Name="CloudService2Driver" Version="1.0.0" PythonVersion="3">\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Shells without the ",(0,i.jsx)(n.code,{children:"PythonVersion"})," property are considered Python 2."]})}),"\n",(0,i.jsx)(n.h2,{id:"changing-the-functions-display-name-and-description",children:"Changing the function\u2019s display name and description"}),"\n",(0,i.jsxs)(n.p,{children:["For the first round of customizations, we\u2019ll work on the user facing function and improve the naming of the command and its parameters as they appear to the user in CloudShell. Open the\xa0",(0,i.jsx)(n.code,{children:"drivermetadata.xml"}),"\xa0file and add the following text to it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">\n    <Layout>\n        <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function">\n        </Command>\n    </Layout>\n</Driver>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Each\xa0",(0,i.jsx)(n.em,{children:"Command"}),"\xa0element in the xml above customizes a single Python function specified by the\xa0",(0,i.jsx)(n.strong,{children:"Name"}),"\xa0attribute. The\xa0",(0,i.jsx)(n.strong,{children:"DisplayName"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"Description"}),"\xa0attributes determines the name of the command as it appears to the user and the description appearing next to it, respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["Reinstall the Shell in CloudShell by running the following command-line and check the\xa0",(0,i.jsx)(n.strong,{children:"Resource Commands"}),"\xa0panel again."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"shellfoundry install\n"})}),"\n",(0,i.jsx)(n.p,{children:"The shell commands should now look like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(29908).c+"",width:"624",height:"378"})}),"\n",(0,i.jsxs)(n.p,{children:["Please note that changing the display name of a function will affect only how its visually rendered in the UI. Code trying to execute this command using the CloudShell API will need to still refer to it by the command\xa0",(0,i.jsx)(n.em,{children:"name"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-admin-only-functions",children:"Setting \u201cadmin only\u201d functions"}),"\n",(0,i.jsxs)(n.p,{children:["It is also possible to set certain functions to only be accessible to admins. This is done using the\xa0",(0,i.jsx)(n.strong,{children:"Visibility"}),"\xa0attribute, which determines which user types can see the command in the blueprint or sandbox. Options are\xa0",(0,i.jsx)(n.strong,{children:"AdminOnly"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"Everyone"}),". By default, all commands are accessible to everyone."]}),"\n",(0,i.jsxs)(n.p,{children:["In the\xa0",(0,i.jsx)(n.code,{children:"drivermetadata.xml"}),"\xa0file, add the\xa0",(0,i.jsx)(n.code,{children:'Visibility="AdminOnly"'}),"\xa0attribute to the command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">\n    <Layout>\n        <Command Description="This command is for the user" DisplayName="Admin-only Command" Name="user_facing_function" Visibility="AdminOnly">\n        </Command>\n    </Layout>\n</Driver>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"optional-parameters-and-default-values",children:"Optional parameters and default values"}),"\n",(0,i.jsx)(n.p,{children:"For each of the command parameters, we may want to specify whether that parameter is mandatory for the user to supply, and whether there should be a default value in case the user didn\u2019t enter any value."}),"\n",(0,i.jsxs)(n.p,{children:["In the following example, we will make the first parameter mandatory by setting the\xa0",(0,i.jsx)(n.strong,{children:"Mandatory"}),"\xa0attribute to ",(0,i.jsx)(n.strong,{children:"True"}),". Users will be required to enter a value for parameters before being able to run the command. The second parameter is optional but now has a default value which we will set using the ",(0,i.jsx)(n.strong,{children:"DefaultValue"})," attribute:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">\n    <Layout>\n        <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >\n            <Parameters>\n                    <Parameter Name="some_parameter" Mandatory = "True"\n                               DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>\n                    <Parameter Name="some_other_parameter" Mandatory = "False"\n                               DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="None"/>\n                </Parameters>\n        </Command>\n\n    </Layout>\n</Driver>\n'})}),"\n",(0,i.jsx)(n.p,{children:"Re-installing the shell will update the commands pane accordingly:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(67832).c+"",width:"624",height:"240"})}),"\n",(0,i.jsx)(n.h2,{id:"restricting-input-to-a-specific-set-of-possible-values",children:"Restricting input to a specific set of possible values"}),"\n",(0,i.jsx)(n.p,{children:"For certain parameters, you might want the user to select between a pre-determined set of values, rather than leave the inputs as a free text entry. To set that up, you need to add that information to the parameter XML:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">\n    <Layout>\n        <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >\n            <Parameters>\n                    <Parameter Name="some_parameter" Mandatory = "True"\n                               DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>\n                    <Parameter Name="some_other_parameter" Type="Lookup" Mandatory = "False" AllowedValues="Yes,No"\n                               DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="Yes"/>\n                </Parameters>\n        </Command>\n\n    </Layout>\n</Driver>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the xml above, we\u2019ve specified that the second parameter must be selected out of a specific set of possible values. We did that by adding the\xa0",(0,i.jsx)(n.strong,{children:"Type"}),"\xa0attribute to the parameter element and setting it as\xa0",(0,i.jsx)(n.em,{children:"Lookup"}),". To define the possible values, we\u2019ve added the\xa0",(0,i.jsx)(n.strong,{children:"AllowedValues"}),"\xa0attribute, which sets the possible values for this parameter, represented as a comma separated list. In this case, the possible values are\xa0",(0,i.jsx)(n.strong,{children:"Yes"}),"\xa0and\xa0",(0,i.jsx)(n.strong,{children:"No"}),". We\u2019ve also changed the default value to conform to the possible options."]}),"\n",(0,i.jsxs)(n.p,{children:["After re-installing the shell, the ",(0,i.jsx)(n.strong,{children:"Commands"})," pane now reflects the parameter new value restriction:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(18324).c+"",width:"624",height:"225"})}),"\n",(0,i.jsx)(n.h2,{id:"adding-categories",children:"Adding categories"}),"\n",(0,i.jsxs)(n.p,{children:["As you add more commands to the resource, it can be useful to visually group them into categories and improve the usability of the commands panel. These categories will appear as folders which the user can navigate. To demonstrate this capability, let\u2019s first add additional commands to the shell. Open the\xa0",(0,i.jsx)(n.code,{children:"driver.py"}),"\xa0file located in the\xa0",(0,i.jsx)(n.code,{children:"/src"}),"\xa0directory and add the following two functions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def backup(self, context):\n    """\n    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext\n    """\n    return "Backing up..."\n\ndef restore(self, context):\n    """\n    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext\n    """\n    return "Restoring..."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Grouping together commands under a category is pretty strait forward: Simply add a\xa0",(0,i.jsx)(n.em,{children:"Category"}),"\xa0element and nest the relevant commands under it. In this case, we\u2019ve added a category called\xa0",(0,i.jsx)(n.em,{children:"Operate"}),"\xa0for the previous operation we\u2019ve implemented and a category named\xa0",(0,i.jsx)(n.em,{children:"Management"}),"\xa0for the new save and restore functions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">\n    <Layout>\n        <Category Name="Operate">\n            <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >\n                <Parameters>\n                        <Parameter Name="some_parameter" Mandatory = "True"\n                                   DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>\n                        <Parameter Name="some_other_parameter" Type="Lookup" Mandatory = "False" AllowedValues="Yes,No"\n                                   DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="Yes"/>\n                    </Parameters>\n            </Command>\n        </Category>\n\n        <Category Name="Management">\n            <Command Description="Backs up the current device state" DisplayName="Backup" Name="backup" />\n            <Command Description="Restores the last saved device state" DisplayName="Restore" Name="restore" />\n        </Category>\n\n    </Layout>\n</Driver>\n'})}),"\n",(0,i.jsx)(n.p,{children:"After re-installing the shell we get the following command panel layout:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(73423).c+"",width:"624",height:"291"})}),"\n",(0,i.jsx)(n.h2,{id:"orchestration-only-commands-hidden-commands",children:"Orchestration only commands (hidden commands)"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes, you may wish to create commands that are intended to be used as a part of an orchestration flow, for example to be called during setup, but want these commands to be inaccessible to users [hidden] from the UI. For example, a command that is called during a sandbox\u2019s Setup process. To support this use case, CloudShell supports a special category, the\xa0",(0,i.jsx)(n.em,{children:"Hidden Commands"}),"\xa0category, which allows you to omit commands from the web portal UI while allowing them to be invoked via the API."]}),"\n",(0,i.jsxs)(n.p,{children:["To demonstrate this capability, let\u2019s first add a new function to our driver class in the\xa0",(0,i.jsx)(n.code,{children:"driver.py"}),"\xa0file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def api_only_function(self, context):\n    """\n    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext\n    """\n    return "You didn\'t see this on the web interface..."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Next, let\u2019s add the special category to the\xa0",(0,i.jsx)(n.code,{children:"drivermetadata.xml"}),"\xa0file and nest that command under it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CustomizationExampleDriver" Name="CustomizationExampleDriver" Version="1.0.0">\n    <Layout>\n        <Category Name="Operate">\n            <Command Description="This command is for the user" DisplayName="User Command" Name="user_facing_function" >\n                <Parameters>\n                        <Parameter Name="some_parameter" Mandatory = "True"\n                                   DisplayName="Some Mandatory Parameter" Description="More info here about the parameter"/>\n                        <Parameter Name="some_other_parameter" Type="Lookup" Mandatory = "False" AllowedValues="Yes,No"\n                                   DisplayName="Some Optional Parameter" Description="More info here about the parameter" DefaultValue="Yes"/>\n                    </Parameters>\n            </Command>\n        </Category>\n\n        <Category Name="Management">\n            <Command Description="Backs up the current device state" DisplayName="Backup" Name="backup" />\n            <Command Description="Restores the last saved device state" DisplayName="Restore" Name="restore" />\n        </Category>\n\n        <Category Name="Hidden Commands">\n            <Command Description="An API only function" DisplayName="Run me VIA API" Name="api_only_function" />\n        </Category>\n    </Layout>\n</Driver>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After re-installing the shell you\u2019ll see the new function doesn\u2019t appear in the ",(0,i.jsx)(n.strong,{children:"Commands"})," pane:\xa0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(31764).c+"",width:"624",height:"436"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the\xa0",(0,i.jsx)(n.strong,{children:"Visibility"}),"\xa0attribute we discussed earlier in this article does not apply to commands in this category and will be ignored."]}),"\n",(0,i.jsx)(n.p,{children:"However, if you query the list of commands on the shell via the API, you\u2019ll be able to see it as well as invoke it:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(97168).c+"",width:"624",height:"160"})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"In this section we reviewed different ways in which its possible to customize the appearance and behavior of commands and command parameters from the user\u2019s perspective. If you have feedback or additional suggestions for features and improvements be sure to post them on our idea box. We\u2019re always looking for new ideas!"})]})}function c(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},29908:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Commands-Visibility-and-Usability_1_624x378-6076ebdaaf0db85b62d29f711e3f0511.png"},67832:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Commands-Visibility-and-Usability_2_624x240-a5213a5074c39f15fecc839a9c79b962.png"},18324:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Commands-Visibility-and-Usability_3_624x225-d82640d82f9ba68986c222f70efe1783.png"},73423:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Commands-Visibility-and-Usability_4_624x291-f70763afc3f7d00bf19a026615864499.png"},31764:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Commands-Visibility-and-Usability_5_624x436-6bcd6cba2e212980efe4a410ccadd1aa.png"},51892:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Commands-Visibility-and-Usability_624x263-44a4dd2c901189e771648881f7f9779a.png"},97168:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Commands-Visibility-and-Usability_6_624x160-6f93cf875c18cb946b9c4506accafd4a.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var i=t(11504);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);