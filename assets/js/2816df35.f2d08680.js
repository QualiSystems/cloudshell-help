"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[11564],{11876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(17624),s=t(4552);const r={sidebar_position:4},o="Script Deep Dive",l={id:"devguide/develop-orch-scripts/script-deep-dive",title:"Script Deep Dive",description:"In this section we\u2019ll take a more in-depth view at scripts and learn how they can be used most effectively for CloudShell orchestration.",source:"@site/versioned_docs/version-2023.3/devguide/develop-orch-scripts/script-deep-dive.md",sourceDirName:"devguide/develop-orch-scripts",slug:"/devguide/develop-orch-scripts/script-deep-dive",permalink:"/devguide/develop-orch-scripts/script-deep-dive",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-orch-scripts/script-deep-dive.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Script Commands Visibility and Usability",permalink:"/devguide/develop-orch-scripts/script-commands-visibility-and-usability"},next:{title:"Common Orchestration Script Recipes",permalink:"/devguide/develop-orch-scripts/common-orch-script-recipes"}},a={},c=[{value:"How CloudShell handles scripts",id:"how-cloudshell-handles-scripts",level:2},{value:"Using requirements.txt with CloudShell orchestration scripts",id:"using-requirementstxt-with-cloudshell-orchestration-scripts",level:2},{value:"Using a main function and packaging multiple files",id:"using-a-main-function-and-packaging-multiple-files",level:2},{value:"Setup and teardown scripts",id:"setup-and-teardown-scripts",level:2},{value:"Getting the script\u2019s Python version",id:"getting-the-scripts-python-version",level:2},{value:"Logging in orchestration scripts",id:"logging-in-orchestration-scripts",level:2},{value:"Debugging scripts",id:"debugging-scripts",level:2},{value:"Referencing other packages",id:"referencing-other-packages",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"script-deep-dive",children:"Script Deep Dive"}),"\n",(0,i.jsx)(n.p,{children:"In this section we\u2019ll take a more in-depth view at scripts and learn how they can be used most effectively for CloudShell orchestration."}),"\n",(0,i.jsx)(n.h2,{id:"how-cloudshell-handles-scripts",children:"How CloudShell handles scripts"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell executes a Python script by creating a temporary virtual environment for the script\u2019s execution, downloading all required packages from the script\u2019s requirements.txt file and executing the script using the Execution Server python engine."}),"\n",(0,i.jsx)(n.p,{children:"To send information to the script, CloudShell sets environment variables in the scope of the script process. These environment variables include information about the sandbox reservation, as well as the script\u2019s parameters. The script standard output is returned as the command result. If an exception is raised, or if a non-zero process result code is returned, the execution will be considered a failure."}),"\n",(0,i.jsx)(n.h2,{id:"using-requirementstxt-with-cloudshell-orchestration-scripts",children:"Using requirements.txt with CloudShell orchestration scripts"}),"\n",(0,i.jsxs)(n.p,{children:["It\u2019s now possible to attach a requirements.txt file to make sure your script will have all dependencies installed on the virtual environment before the script\u2019s execution starts. For details about the\xa0",(0,i.jsx)(n.em,{children:"cloudshell-orch-core"}),"\xa0package, see this\xa0",(0,i.jsx)(n.a,{href:"/devguide/develop-orch-scripts/getting-started-with-orch-scripts",children:"Getting Started with Orchestration Scripts"}),"\xa0section."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To use the requirements.txt:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Archive this file with the orchestration script in one ZIP file. It will then be possible to upload this ZIP file to CloudShell using the CloudShell Portal."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-a-main-function-and-packaging-multiple-files",children:"Using a main function and packaging multiple files"}),"\n",(0,i.jsx)(n.p,{children:"As scripts become more complex, instead of structuring them as one big function, it is advisable to create a main function and separate the rest of the logic into different functions. Python requires some boilerplate code in addition to the main function to make this work. Here is an example code demonstrating how to use main functions with scripts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from cloudshell.workflow.orchestration.sandbox import Sandbox\nimport os\n\n\ndef print_keys():\n    for key in os.environ:\n        print key + " : " + os.environ[key]\n\ndef print_app_names(sandbox):\n    """\n    :param Sandbox sandbox:\n    :return:\n    """\n    reservation_details = sandbox.automation_api.GetReservationDetails(sandbox.id).ReservationDescription\n    for app in reservation_details.Apps:\n        print app.Name\n\ndef main():\n    sandbox = Sandbox()\n    print_keys()\n    print_app_names(sandbox)\n \nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Depending on the complexity of the script, it may be wise to also separate the code into multiple files. To do that, we can take advantage of Python\u2019s ability to support executing .zip archives containing multiple scripts. The only requirement is that one of the files is named\xa0",(0,i.jsx)(n.code,{children:"__main__.py"}),", which is how the entry point of the Python process is determined."]}),"\n",(0,i.jsx)(n.h2,{id:"setup-and-teardown-scripts",children:"Setup and teardown scripts"}),"\n",(0,i.jsx)(n.p,{children:"Setup and teardown are special types of orchestration scripts. There are two things that make them special:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"They can\u2019t have any inputs as they are launched automatically"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"New blueprints come with CloudShell's default Setup and Teardown scripts and default durations for each."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To set a script as a teardown or setup script:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the\xa0",(0,i.jsx)(n.strong,{children:"Scripts - Blueprint"}),"\xa0management page, edit the script."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the script\u2019s\xa0",(0,i.jsx)(n.em,{children:"Script Type"}),"\xa0dropdown list, select\xa0",(0,i.jsx)(n.em,{children:"Setup"}),"\xa0or\xa0",(0,i.jsx)(n.em,{children:"Teardown"}),", as appropriate. The script will take on that special behavior. Note that the script can only run as part of the sandbox Setup or Teardown process. In addition, you won\u2019t be able to add any inputs to it."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-the-scripts-python-version",children:"Getting the script\u2019s Python version"}),"\n",(0,i.jsx)(n.p,{children:"To get the script\u2019s Python version (2.7.x/3.x), use the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import sys\n\nprint ("You are using Python: " + str(sys.version_info[0]))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"logging-in-orchestration-scripts",children:"Logging in orchestration scripts"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To implement logging in your orchestration script:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use Sandbox.logger, which is based on the CloudShell standard logging format. The logger lists all the data that is needed for debugging the script, including the Sandbox id, function names, error level, time stamp and more."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\n\nSandbox = Sandbox()\n\nresource_name = 'My_Resource'\n\ntry:\n    Sandbox.automation_api.IncludeResource(resource_name)\n\nexcept:\n    Sandbox.logger.error('Failed to include resource {0}'.format(resource_name))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Orchestration script logs are saved on the execution server\u2019s\xa0",(0,i.jsx)(n.code,{children:"%programdata%\\QualiSystems\\logs\\<reservationid>"}),"\xa0folder in a dedicated sub-folder with the reservation ID as the name. For example:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Log Structure",src:t(42672).c+"",width:"558",height:"109"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"debugging-scripts",children:"Debugging scripts"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell includes some helper functions to make it easier to debug a script by running it on real sandbox reservation data. The helper functions allow the script to be \u201cattached\u201d to a CloudShell sandbox, by filling in all of the script\u2019s environment variables so that the same information is available to it as if it were launched by CloudShell."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To attach a script to a CloudShell sandbox:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a sandbox reservation."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the script\u2019s project folder, create a Python script. We\u2019ll use this script as our debugger."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Paste the following code into the script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from cloudshell.helpers.scripts.cloudshell_dev_helpers import attach_to_cloudshell_as\n\nattach_to_cloudshell_as('CLOUDSHELL_USER', 'CLOUDSHELL_PWD', 'DOMAIN', 'RESERVATION_ID', 'SERVER_ADDRESS')\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To debug a specific function in your script, you will need to call the function from the debugger script."}),"\n",(0,i.jsxs)(n.p,{children:["For example, calling the\xa0",(0,i.jsx)(n.em,{children:"connect_layer1_routes"}),"\xa0function from a script called\xa0",(0,i.jsx)(n.em,{children:"Setup_Script"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from cloudshell.helpers.scripts.cloudshell_dev_helpers import attach_to_cloudshell_as\n\nattach_to_cloudshell_as('admin', 'admin', 'Global', 'c425c01c-2cc6-4a3a-bb45-d357be6c294f', '192.168.42.125')\n\nfrom Setup_Script import connect_layer1_routes\n\nconnect_layer1_routes()\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the relevant details and debug the new script."}),"\n",(0,i.jsx)(n.p,{children:"You can add additional functions to the script, from the same file or other ones in the project folder."}),"\n",(0,i.jsxs)(n.p,{children:["As you write more complex orchestration scripts, you may want to separate the code to multiple files. To do that, we can take advantage of Python\u2019s ability to support executing\xa0.zip\xa0archives containing multiple scripts. The only requirement, is that one of the files is named\xa0",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"__main__.py"})}),", which is how the entry point of the Python process is determined."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"referencing-other-packages",children:"Referencing other packages"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a Sandbox reservation."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the following code and fill in the required data for the function parameters."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import cloudshell.helpers.scripts.cloudshell_dev_helpers as dev_helpers\n\n\t\t\t\t\t\t\ndev_helpers.attach_to_cloudshell_as(user="CLOUDSHELL_USER", password="CLOUDSHELL_PWD", domain="DOMAIN",\n                                    reservation_id="RESERVATION_ID", server_address="ADDRESS", command_parameters={"NAME":"VALUE"})\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that if we include the above code in the example script we provided earlier, we\u2019ll be able to run it locally as well as from the CloudShell Sandbox. The ",(0,i.jsx)(n.strong,{children:"attach_to_cloudshell_as"})," function will populate all of the blueprint data as CloudShell would, so from the code\u2019s perspective, it doesn\u2019t make a different where it is being run from. Furthermore, the code will ignore the special ",(0,i.jsx)(n.strong,{children:"attach_to_cloudshell_as"})," function if you run it from CloudShell so that there is no adverse effect to leaving the statement there."]}),"\n",(0,i.jsx)(n.p,{children:"However, using this strategy will expose your CloudShell credentials in the code. To avoid this, we recommend you use a similar function which takes the same information from a file. Make sure to add that file to the .gitignore list so that it doesn\u2019t get on source control. The following code will have the same effect as the lines above, but will look for the information in a JSON file named quali_config.json, which should be in the project root."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cloudshell.helpers.scripts.cloudshell_dev_helpers as dev_helpers\n\ndev_helpers.attach_to_cloudshell()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The\xa0",(0,i.jsx)(n.code,{children:"quali_config.json"}),"\xa0should have the following structure:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n    "user" : "USER",\n    "password" : "PASSWORD",\n    "domain" : "DOMAIN",\n    "server_address" : "SERVER_ADDRESS",\n    "cloudshell_api_port" :"CLOUDSHELL_API_PORT",\n    "reservation_id" : "reservation_id",\n    "command_parameters" : { "PARAM_NAME" : "PARAM_VALUE"    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},42672:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Scripts-Deep-Dive_558x109-f07b08cd8831ac32daaef6505a736ec2.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);