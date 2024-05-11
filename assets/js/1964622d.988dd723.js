"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[65208],{78084:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(17624),o=s(4552);const i={sidebar_position:2},r="How Orchestration Scripts Get Information from CloudShell",a={id:"devguide/develop-orch-scripts/how-orch-script-get-info-from-cs",title:"How Orchestration Scripts Get Information from CloudShell",description:"Information about the sandbox on which your script is running and its components is available in your script as an environment variable. The standard way to get the information is using the\xa0Sandbox\xa0object.",source:"@site/docs/devguide/develop-orch-scripts/how-orch-script-get-info-from-cs.md",sourceDirName:"devguide/develop-orch-scripts",slug:"/devguide/develop-orch-scripts/how-orch-script-get-info-from-cs",permalink:"/cloudshell-help/next/devguide/develop-orch-scripts/how-orch-script-get-info-from-cs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/develop-orch-scripts/how-orch-script-get-info-from-cs.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Orchestration Scripts",permalink:"/cloudshell-help/next/devguide/develop-orch-scripts/getting-started-with-orch-scripts"},next:{title:"Script Commands Visibility and Usability",permalink:"/cloudshell-help/next/devguide/develop-orch-scripts/script-commands-visibility-and-usability"}},d={},c=[{value:"Accessing the sandbox components",id:"accessing-the-sandbox-components",level:2},{value:"Accessing the sandbox\u2019s user inputs",id:"accessing-the-sandboxs-user-inputs",level:2},{value:"Getting script input parameters",id:"getting-script-input-parameters",level:2},{value:"Using the API to get sandbox information",id:"using-the-api-to-get-sandbox-information",level:2},{value:"Getting general sandbox information (ReservationDescription object)",id:"getting-general-sandbox-information-reservationdescription-object",level:2},{value:"Getting the sandbox&#39;s current status",id:"getting-the-sandboxs-current-status",level:2},{value:"Getting custom sandbox metadata",id:"getting-custom-sandbox-metadata",level:2},{value:"Getting saved sandbox information",id:"getting-saved-sandbox-information",level:2},{value:"Getting the user context",id:"getting-the-user-context",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-orchestration-scripts-get-information-from-cloudshell",children:"How Orchestration Scripts Get Information from CloudShell"}),"\n",(0,t.jsxs)(n.p,{children:["Information about the sandbox on which your script is running and its components is available in your script as an environment variable. The standard way to get the information is using the\xa0",(0,t.jsx)(n.strong,{children:"Sandbox"}),"\xa0object."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["To use the ",(0,t.jsx)(n.em,{children:"Sandbox"})," object:"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Import the ",(0,t.jsx)(n.em,{children:"cloudshell-orch-core"})," Python package and add it to your script, as illustrated in the example below. Note that the package is automatically imported when your sandbox starts. In this example, the following code gets an object that contains all of the sandbox\u2019s information:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\n\nsandbox = Sandbox()\n\nreservation_context_details = sandbox.reservationContextDetails\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that to execute this code, you will need to include a ",(0,t.jsx)(n.code,{children:"requirements.txt"})," file in your script, see\xa0",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-orch-scripts/script-deep-dive",children:"Script Deep Dive"}),"\xa0for more details."]}),"\n",(0,t.jsx)(n.p,{children:"To facilitate writing and debugging activities, it is recommended to use advanced IDEs such as PyCharm, which provide autocomplete functionality, as illustrated below."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sandbox information",src:s(25e3).c+"",width:"624",height:"204"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that if you plan on using methods in your script, and want the IDE to autocomplete the\xa0",(0,t.jsx)(n.em,{children:"sandbox"}),"\xa0object\u2019s class properties from within the method, you will need to include a docstring referencing the object. For details, see\xa0",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/reference/intellisense-in-shells-and-scripts#docstrings-in-orchestration-scripts",children:"Docstrings in orchestration scripts"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-the-sandbox-components",children:"Accessing the sandbox components"}),"\n",(0,t.jsxs)(n.p,{children:["Use the\xa0",(0,t.jsx)(n.strong,{children:"Sandbox"}),"\xa0class to access and use the components of a sandbox in your orchestration scripts to implement custom logic."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, let\u2019s assume we want to get the names of the resources and Apps in a sandbox. To do so, we will use\xa0",(0,t.jsx)(n.strong,{children:"sandbox.component"}),". The following code will iterate over the resources and Apps in the sandbox and print out their names:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\nsandbox = Sandbox()\n\nfor resource_name, resource in sandbox.components.resources.iteritems():\n    print 'Found resource: {0}, with address: {0}'.format(resource_name, resource.FullAddress)\n\nfor app_name, app in sandbox.components.apps.iteritems():\n    print app_name\n"})}),"\n",(0,t.jsx)(n.p,{children:"The components in the sandbox are stored in a dictionary object, from which a specific resource can be retrieved using a simple syntax. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"sandbox = Sandbox()\n\nresource_details = sandbox.components.resources['my_resource']\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It\u2019s also possible to get the sandbox components using helpers methods located under ",(0,t.jsx)(n.strong,{children:"sandbox.component"})," such as ",(0,t.jsx)(n.strong,{children:"get_resources_by_model, get_apps_by_name_contains"})," and others. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"sandbox = Sandbox()\n\nservices = sandbox.components.get_services_by_alias('my-service-alias')\nfor service in services:\n    print service.Alias\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To refresh the components information at any time during the sandbox\u2019s lifecycle, use the\xa0",(0,t.jsx)(n.strong,{children:"sandbox.components.refresh_components"}),"\xa0method."]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-the-sandboxs-user-inputs",children:"Accessing the sandbox\u2019s user inputs"}),"\n",(0,t.jsx)(n.p,{children:"User inputs provided by the user when they reserved the blueprint can be accessed by your script, as contextual information. This data is stored in several environment variables based on the input type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Global inputs"}),"\xa0- These inputs are a part of the reservation form and can represent general data you wish to collect from the user for your automation. They can also be used to group together multiple other inputs as one data entry. You can access these using the GLOBALINPUTS environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resource requirements"}),"\xa0- These are inputs related to abstract resources. An abstract resource in CloudShell allows you to declare a generic spec or criteria for a resource rather than explicitly using a specific one. When customizing such an abstract resource, you can choose to make some of its properties available for the user to select, so as to make it more flexible. For example, for a physical device, instead of specifying the model in the blueprint, you can set the model as a parameter with a dropdown list for the user to select from when reserving it. Resource requirements are accessed using the RESOURCEREQUIREMENTS environment variable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resource additional info"}),"\xa0- When customizing an abstract resource, you can also choose to add some parameters to the resource that are not requirements but rather instructions on what to do with it. An example would be specifying an OS version to install on it. In this case, this parameter is not used to select the resource but rather to operate on the selected resource in the active sandbox. Additional info parameters are accessed using the RESOURCEADDITIONALINFO environment variable."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As with sandboxes, we can use some helper modules to get the resource information in Python using the same object we used to get the reservation\u2019s details:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"sandbox = Sandbox()\n\nglobal_value = sandbox.global_inputs['input name']\nrequirement_value = sandbox.requirement_inputs['resource1']['input_name']\nadditiona_info_value = sandbox.additional_info_inputs['resource1']['input_name']\n"})}),"\n",(0,t.jsx)(n.h2,{id:"getting-script-input-parameters",children:"Getting script input parameters"}),"\n",(0,t.jsxs)(n.p,{children:["You can add input parameters to a script when adding or editing a script in CloudShell Portal's ",(0,t.jsx)(n.strong,{children:"Manage>Scripts"})," page. The input parameter values are also provided automatically to your script. CloudShell sets up an environment variable with the same name as the parameter."]}),"\n",(0,t.jsx)(n.p,{children:"This means that if your script looks like this, with a parameter called \u2018Param1\u2019 defined:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sandbox information",src:s(46972).c+"",width:"601",height:"703"})}),"\n",(0,t.jsx)(n.p,{children:"You\u2019ll be able to access it using an environment variable by that name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import os\n\nos.environ['PARAM1']\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also use the Sandbox class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\nsandbox = Sandbox()\n\nsandbox.get_user_param('Param1')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that when using the\xa0",(0,t.jsx)(n.em,{children:"get_user_param"}),"\xa0helper function, the input name is case insensitive since the function will uppercase it."]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-api-to-get-sandbox-information",children:"Using the API to get sandbox information"}),"\n",(0,t.jsx)(n.p,{children:"A common use case for a script is to get a list of the different Apps and resources in the sandbox, to be able to call additional commands or API functions on them. To get that information, we can use the CloudShellAPI."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To start a CloudShell API session:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Obtain the Quali Server\u2019s connectivity details. These details are also available as an environment variable in your script called \u2018qualiConnectivityContext\u2019. As with the sandbox information, you can use the Sandbox class to quickly get the connectivity information in a more convenient object form and initialize a CloudShellAPISession object by calling\xa0",(0,t.jsx)(n.strong,{children:"sandbox.connectivityContextDetails"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a CloudShell API session object. Since initializing a CloudShell API session object is a very common operation, you can use the\xa0",(0,t.jsx)(n.strong,{children:"Sandbox"}),"\xa0class to directly create an object. The\xa0",(0,t.jsx)(n.strong,{children:"Sandbox"}),"\xa0class will handle the passing of all of the required connectivity information for you. The\xa0",(0,t.jsx)(n.strong,{children:"Sandbox"}),"\xa0class provides a shortcut which makes accessing the CloudShell API from your script much easier. Simply use the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\nsession = sandbox.automation_api\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"sandbox.automation_api"}),"\xa0is a CloudShell API session object. You can use the IDE\u2019s autocomplete capabilities to explore the available functions:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sandbox information",src:s(14332).c+"",width:"624",height:"129"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-general-sandbox-information-reservationdescription-object",children:"Getting general sandbox information (ReservationDescription object)"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"reservation_description"})," object is one of the most important objects for getting information about the sandbox. It includes the sandbox's general details (name, description, owner, start/end times, etc.), conflicts, components (resources, services and Apps), connectors, blueprint information, reservation live status, etc."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(80220).c+"",width:"790",height:"166"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.strong,{children:"sandbox.reservation_description"})," provides information from the sandbox's creation. As such, it does not include updates performed after the sandbox was created. Such updates can be retrieved using the ",(0,t.jsx)(n.strong,{children:"GetReservationDetails"})," API:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\n\nsandbox = Sandbox()\n\nreservation_id = sandbox.id\n\nreservation_description = sandbox.automation_api.GetReservationDetails(reservation_id).reservation_description\n"})}),"\n",(0,t.jsx)(n.h2,{id:"getting-the-sandboxs-current-status",children:"Getting the sandbox's current status"}),"\n",(0,t.jsx)(n.p,{children:"It is possible to get the sandbox's current phase via API. This is especially useful if you want to create workflows that perform actions at certain points during the sandbox's lifecycle."}),"\n",(0,t.jsxs)(n.p,{children:["This is done by calling the ",(0,t.jsx)(n.code,{children:"GetReservationStatus"})," API and requires obtaining two details from the sandbox - ",(0,t.jsx)(n.strong,{children:"Status"})," and ",(0,t.jsx)(n.strong,{children:"ProvisioningStatus"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Status"})," provides the reservation status. Possible responses are (for details, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/#sandbox-state",children:"Sandbox state"}),"):"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Status"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pending"}),(0,t.jsx)(n.td,{children:"Scheduled to start in the future"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Started"}),(0,t.jsx)(n.td,{children:"Sandbox is currently running"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"In Use"}),(0,t.jsx)(n.td,{children:'Sandbox is running and has "in use" resources'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Completed"}),(0,t.jsx)(n.td,{children:"Sandbox has ended"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Overtime"}),(0,t.jsx)(n.td,{children:'Sandbox is in Overtime mode (i.e. sandbox has reached its scheduled end time but has "in use" resource)'})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ProvisioningStatus"})," provides the sandbox's current phase. Possible responses are:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"ProvisioningStatus"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Not Run"}),(0,t.jsx)(n.td,{children:"Sandbox is scheduled to run in the future"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Setup"}),(0,t.jsx)(n.td,{children:"Sandbox is running Setup"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Ready"}),(0,t.jsx)(n.td,{children:'Sandbox is "Active" (without errors)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Teardown"}),(0,t.jsx)(n.td,{children:"Sandbox is in Teardown state"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Error"}),(0,t.jsx)(n.td,{children:'Sandbox is "Active with Error"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BeforeSetup"}),(0,t.jsx)(n.td,{children:"Sandbox is running, but Setup hasn't started"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsxs)(n.p,{children:["Querying for ",(0,t.jsx)(n.code,{children:"Status=Error"})," and ",(0,t.jsx)(n.code,{children:"ProvisioningStatus=Completed"}),' returns "Completed (With Error)" sandboxes, while querying for ',(0,t.jsx)(n.code,{children:"Status=Started"})," and ",(0,t.jsx)(n.code,{children:"ProvisioningStatus=Completed"}),' returns "Active (With Error)" sandboxes.']}),"\n",(0,t.jsx)(n.p,{children:'Running a custom "health check" operation on the environment once the sandbox is active:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\nimport post_setup_configurations as configs\n\n\nsandbox = Sandbox()\n\nreservation_id = sandbox.reservationContextDetails.id\napi = sandbox.automation_api\nresult = api.GetReservationStatus(reservation_id)\n\nif result.ReservationSlimStatus.Status == 'Started' and result.ReservationSlimStatus.ProvisioningStatus == 'Ready':\n    configs.run_health_check\n"})}),"\n",(0,t.jsx)(n.h2,{id:"getting-custom-sandbox-metadata",children:"Getting custom sandbox metadata"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to store and retrieve custom key-value data from the sandbox. For details, see\xa0",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/reference/custom-sandbox-metadata",children:"Custom Sandbox Metadata"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-saved-sandbox-information",children:"Getting saved sandbox information"}),"\n",(0,t.jsxs)(n.p,{children:["Starting with CloudShell 9.0, the\xa0",(0,t.jsx)(n.em,{children:"cloudshell-orch-core"}),"\xa0Python package includes a new class called\xa0",(0,t.jsx)(n.em,{children:"reservationLifecycleDetails"}),", which allows you to get the following details about your sandbox: saved sandbox name and description, and the current sandbox user name."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sandbox information",src:s(42300).c+"",width:"624",height:"111"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that depending on the sandbox, the information may be partial. For example, if the sandbox is not a saved sandbox, the saved sandbox name and description will be missing. For details about our OOB saved sandbox orchestration scripts, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/develop-orch-scripts/cs-oob-orch/",children:"CloudShell's OOB Orchestration"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-the-user-context",children:"Getting the user context"}),"\n",(0,t.jsxs)(n.p,{children:["CloudShell also allows you to get the CloudShell user who ran the blueprint/orchestration command in the\xa0",(0,t.jsx)(n.strong,{children:"Sandbox"}),"\xa0class."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\n\n\nsandbox = Sandbox()\n\nuser = sandbox.reservationContextDetails.running_user\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},46972:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Scripts-Getting-Information_1_601x703-f15e8155b413de5f18ab9172b72b7c3a.png"},14332:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Scripts-Getting-Information_2_624x129-fe7da3ab1e4987b925b5f8b2d0d6018c.png"},42300:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Scripts-Getting-Information_3_624x111-fa53118b40cf5edf8672ef408cc4909f.png"},80220:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Scripts-Getting-Information_4-bc5af53fbef52dac767e1e2a4ba5608b.png"},25e3:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Scripts-Getting-Information_624x204-8b624fef4f4a1572f3234b2c9f13d9db.png"},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>r});var t=s(11504);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);