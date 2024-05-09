"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30612],{34636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(17624),s=n(4552);const r={sidebar_position:6},i="How Shells Get Information from CloudShell",a={id:"devguide/developing-shells/how-shells-get-info-from-cs",title:"How Shells Get Information from CloudShell",description:"A typical Shell driver will first get crucial information from the sandbox and then use that information to access the device it controls. Some common information would be the address of the resource or App, attributes such as username and password, and information from other sandbox settings or components.",source:"@site/docs/devguide/developing-shells/how-shells-get-info-from-cs.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/how-shells-get-info-from-cs",permalink:"/cloudshell-help/next/devguide/developing-shells/how-shells-get-info-from-cs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/developing-shells/how-shells-get-info-from-cs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Managing the Shell\u2019s Data Model",permalink:"/cloudshell-help/next/devguide/developing-shells/managing-the-shell-data-mode"},next:{title:"Commands Visibility and Usability",permalink:"/cloudshell-help/next/devguide/developing-shells/commands-visibility-and-usability"}},l={},c=[{value:"CloudShell Shell Core",id:"cloudshell-shell-core",level:2},{value:"The ResourceContextDetails object",id:"the-resourcecontextdetails-object",level:2},{value:"Connectivity",id:"connectivity",level:3},{value:"Resource Context",id:"resource-context",level:3},{value:"Connectors information",id:"connectors-information",level:3},{value:"Sandbox information",id:"sandbox-information",level:3},{value:"Additional information for apps and VMs",id:"additional-information-for-apps-and-vms",level:3},{value:"Custom sandbox metadata",id:"custom-sandbox-metadata",level:3},{value:"Custom Attributes and the Shell\u2019s data model",id:"custom-attributes-and-the-shells-data-model",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-shells-get-information-from-cloudshell",children:"How Shells Get Information from CloudShell"}),"\n",(0,o.jsx)(t.p,{children:"A typical Shell driver will first get crucial information from the sandbox and then use that information to access the device it controls. Some common information would be the address of the resource or App, attributes such as username and password, and information from other sandbox settings or components."}),"\n",(0,o.jsx)(t.p,{children:"To provide easy access to such common information, each driver function has access to a special context object parameter, which is created by CloudShell for each driver command\u2019s execution."}),"\n",(0,o.jsxs)(t.p,{children:["If you\u2019ve generated the default driver template, you may have noticed that the pre-generated functions already have some docstring code-hint annotation. This allows some IDEs like PyCharm to provide autocomplete for the class properties and make it a lot easier to use. For details, see\xa0",(0,o.jsx)(t.a,{href:"/cloudshell-help/next/devguide/reference/intellisense-in-shells-and-scripts#docstrings-in-shells",children:"Docstrings in shells"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"cloudshell-shell-core",children:"CloudShell Shell Core"}),"\n",(0,o.jsxs)(t.p,{children:["The classes used for the command context parameters as well as other CloudShell interface classes are provided in the\xa0",(0,o.jsx)(t.em,{children:"cloudshell-shell-core"})," package, which is imported in the sample driver class. The term\xa0",(0,o.jsx)(t.strong,{children:"Resource"}),"\xa0may be a confusing one for the context object. In the CloudShell platform there are really two types of resources: a\xa0",(0,o.jsx)(t.strong,{children:"deployed App"}),"\xa0is a resource that is deployed and lives inside the sandbox, whereas a\xa0",(0,o.jsx)(t.strong,{children:"physical"}),"\xa0resource, or as it\u2019s sometimes called\xa0",(0,o.jsx)(t.strong,{children:"inventory_resource"}),", is a type of resource that lives in the CloudShell inventory and is pulled into blueprints and sandboxes. Let\u2019s take a look at the\xa0",(0,o.jsx)(t.strong,{children:"ResourceCommandContext"}),"\xa0class to understand more about the information it provides:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'class ResourceCommandContext:\n    def __init__(self, connectivity, resource, reservation, connectors):\n        self.connectivity = connectivity                # Connectivity details that can help connect to the APIs\n        """:type : ConnectivityContext"""\n        self.resource = resource                        # The details of the resource using the driver\n        """:type : ResourceContextDetails"""\n        self.reservation = reservation                  # The details of the reservation\n        """:type : ReservationContextDetails"""\n        self.connectors = connectors                    # The list of visual connectors and routes that are connected to the resource (the resource will be considered as the source end point)\n        """:type : list[Connector]"""\n'})}),"\n",(0,o.jsx)(t.h2,{id:"the-resourcecontextdetails-object",children:"The ResourceContextDetails object"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Context Object",src:n(42756).c+"",width:"575",height:"266"})}),"\n",(0,o.jsx)(t.h3,{id:"connectivity",children:"Connectivity"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.strong,{children:"connectivity"}),"\xa0property contains information about how to connect to CloudShell, such as server address, ports, and so on. It also contains a token which can be used to log in to CloudShell API. As we\u2019ll discuss later, it is generally recommended to use the CloudShell API as little as possible in your Shell, with the exception of a few operations, which we\u2019ll cover later in ",(0,o.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/driver-deep-dive",children:"Driver Deep Dive"})," and ",(0,o.jsx)(t.a,{href:"/cloudshell-help/next/devguide/developing-shells/common-driver-recipes",children:"Common Driver Recipes"}),". So while the connectivity information is readily available on the context, in most cases you should not have to use it."]}),"\n",(0,o.jsx)(t.h3,{id:"resource-context",children:"Resource Context"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.strong,{children:"resource"}),"\xa0property contains most of the information we\u2019ll need about the App or resource to which the Shell driver is assigned. This is the key piece of information any driver will need in order to implement commands that work with the device/App. Let\u2019s examine the\xa0",(0,o.jsx)(t.strong,{children:"ResourceContextDetails"}),"\xa0class properties:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"context.resource.id  # (str) The identifier of the resource / service / app - consistent value that can't be changed / renamed by the user\ncontext.resource.name   # The name of the resource/app\ncontext.resource.fullname   # The full name of the resource, including any parent resources (relevant to inventory resources only)\ncontext.resource.type   # (Service, App, Resource) The type can be either a Service, an App (which means a deployed App) or a Resource\ncontext.resource.address   # The IP address of the resource / app\ncontext.resource.model   # The resource/app model\ncontext.resource.family = None  # The resource/app family or type classification\ncontext.resource.description = None  # The resource/app description\ncontext.resource.app_context = None # Information about the deployed app and app request to be discussed below\n"})}),"\n",(0,o.jsx)(t.p,{children:"There is a lot of useful information in this object. Of special importance is the name of the resource, the address and the model. These provide the most basic details about the resource or App, and are required in order to communicate with it."}),"\n",(0,o.jsx)(t.h3,{id:"connectors-information",children:"Connectors information"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.strong,{children:"connectors"}),"\xa0property provides information about the resource or App\u2019s connectors (visual or network connectors) in the sandbox. The property maps to a list of Connector objects, each provides information about the source and target resource, as well as the connector\u2019s attributes:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'for connector in context.connectors:\n    connector.source  # The name of the source resource (end point)\n    """:type : str"""\n    connector.target  # The name of the target resource (end point)\n    """:type : str"""\n    connector.target_family   # The family of the target resource\n    """:type : str"""\n    connector.target_model   # The model of the target resource\n    """:type : str"""\n    connector.target_type   # The type of the target resource  (Service, App, Resource)\n    """:type : str"""\n    connector.target_attributes   # A dictionary with the target resource attributes (name, value)\n    """:type : dict[str,str]"""\n    connector.direction   # The direction of the connection: Uni, Bi\n    """:type : str"""\n    connector.alias  # The connection alias\n    """:type : str"""\n    connector.attributes   # The dictionary that includes the connection attributes (name, value)\n    """:type : dict[str,str]"""\n    connector.connection_type   # The type of the connection: Route, Visual Connector, Physical\n    """:type : str"""\n'})}),"\n",(0,o.jsx)(t.h3,{id:"sandbox-information",children:"Sandbox information"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.strong,{children:"reservation"}),"\xa0property contains information about the sandbox in which the command is running:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'context.reservation.reservation_id\n""":type : str"""\n# The unique identifier of the sandbox reservation\ncontext.reservation.environment_name \n""":type : str"""\n# The name of the blueprint\ncontext.reservation.environment_path\n""":type : str"""\n# The full path of the blueprint\ncontext.reservation.domain\n""":type : str"""\n# The sandbox reservation CloudShell Domain       \ncontext.reservation.description\n# The sandbox reservation description\n""":type : str"""\ncontext.reservation.owner_user \n# the owner of the reservation\n""":type : str"""\ncontext.reservation.owner_email\n# the email of the owner of the reservation\n""":type : str"""\ncontext.reservation.saved_sandbox_name\n# the name of the saved sandbox\n""":type : str"""\ncontext.reservation.saved_sandbox_id\n# the reservation id of the restored sandbox\n""":type : str"""\ncontext.reservation.running_user\n# the CloudShell user that executed the command\n""":type : str"""\n'})}),"\n",(0,o.jsx)(t.h3,{id:"additional-information-for-apps-and-vms",children:"Additional information for apps and VMs"}),"\n",(0,o.jsxs)(t.p,{children:["The\xa0",(0,o.jsx)(t.strong,{children:"resource"}),"\xa0property of the context object also contains the\xa0",(0,o.jsx)(t.strong,{children:"app_context"}),"\xa0property, which is relevant to deployed App and virtual machine drivers only. The\xa0",(0,o.jsx)(t.strong,{children:"app_context"}),"\xa0object has two separate JSON string properties nested under it: (1) the\xa0",(0,o.jsx)(t.strong,{children:"app_request_json"}),"\xa0property is a JSON string containing information about the app template which was requested in the blueprint, while (2) the\xa0",(0,o.jsx)(t.strong,{children:"deployed_app_json"}),"\xa0JSON contains information about the deployed application and where it\u2019s running."]}),"\n",(0,o.jsx)(t.p,{children:"You can find JSON schema definitions of these two JSON objects here:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/dev/cloudshell/shell/core/schemas/app_request.json",children:"App Request JSON Schema"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/QualiSystems/cloudshell-shell-core/blob/dev/cloudshell/shell/core/schemas/deployed_app.json",children:"Deployed App JSON Schema"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"custom-sandbox-metadata",children:"Custom sandbox metadata"}),"\n",(0,o.jsxs)(t.p,{children:["Starting with CloudShell 9.2, it is possible to store and retrieve custom key-value data from the sandbox. For details, see\xa0",(0,o.jsx)(t.a,{href:"/cloudshell-help/next/devguide/reference/custom-sandbox-metadata",children:"Custom Sandbox Metadata"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"custom-attributes-and-the-shells-data-model",children:"Custom Attributes and the Shell\u2019s data model"}),"\n",(0,o.jsxs)(t.p,{children:["In many cases, the Shell has specific information that is stored in attributes. For example, user credentials that are needed in order to connect to the resource. These attributes are part of the Shell\u2019s data model. Their value can be easily retrieved by converting the\xa0",(0,o.jsx)(t.strong,{children:"ResourceCommandContext"}),"\xa0to an instance of the generated Shell\u2019s data model."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from data_model import *\n\n\nclass DataModelExampleDriver (ResourceDriverInterface):\n\n    def custom_command(self, context):\n      resource = DataModelExample.create_from_context(context)\n      resource.vendor = 'specify the shell vendor'\n      resource.model = 'specify the shell model'\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In this example, you can see that the code imports the generated Shell\u2019s data_model, and then uses the\xa0",(0,o.jsx)(t.strong,{children:"create_from_context"}),"\xa0function to convert the context parameter into an instance of\xa0",(0,o.jsx)(t.strong,{children:"DataModelExample"}),", which is the Shell data model structure. Then, the code retrieves the attribute values by using properties such as\xa0",(0,o.jsx)(t.strong,{children:"resource.vendor"}),"\xa0and\xa0",(0,o.jsx)(t.strong,{children:"resource.model"}),". The properties of the Shell\u2019s model will match the data model definition in the\xa0",(0,o.jsx)(t.code,{children:"shell-definition.yaml"}),"\xa0file."]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},42756:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/Shells-Getting-Information-9e4289776517ea6222f47527a387e65d.png"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>i});var o=n(11504);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);