"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[65066],{49116:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(74848),s=n(28453);const o={sidebar_position:12},i="Custom Sandbox Metadata",d={id:"devguide/reference/custom-sandbox-metadata",title:"Custom Sandbox Metadata",description:"It is possible to store information for later use in the sandbox using the API. This feature is related to this\xa0idea.",source:"@site/versioned_docs/version-2023.3/devguide/reference/custom-sandbox-metadata.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/custom-sandbox-metadata",permalink:"/2023.3/devguide/reference/custom-sandbox-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/reference/custom-sandbox-metadata.md",tags:[],version:"2023.3",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Custom Routing for Azure Apps",permalink:"/2023.3/devguide/reference/custom-routing-for-azure-apps"},next:{title:"Shells that Load a Static VM",permalink:"/2023.3/devguide/reference/shells-that-load-static-vm"}},r={},l=[{value:"End-to-end example: Managing registration keys for AWS services",id:"end-to-end-example-managing-registration-keys-for-aws-services",level:2},{value:"Using custom sandbox data in JSON format",id:"using-custom-sandbox-data-in-json-format",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"custom-sandbox-metadata",children:"Custom Sandbox Metadata"})}),"\n",(0,t.jsxs)(a.p,{children:["It is possible to store information for later use in the sandbox using the API. This feature is related to this\xa0",(0,t.jsx)(a.a,{href:"https://community.quali.com/idea/655/storing-reservation-specific-information-for-later",children:"idea"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"This capability can be used to store sandbox-specific information that is required for your orchestration processes and shells, like user details, unique IDs returned from 3rd party systems, or data created during the setup process that is needed for teardown."}),"\n",(0,t.jsxs)(a.p,{children:["The data is stored as key-value pairs in a container in the sandbox. The data is managed via CloudShell Automation API and starting with CloudShell 2021.2, can be viewed by admins in the sandbox workspace, as explained in ",(0,t.jsx)(a.a,{href:"/2023.3/portal/sandboxes/sandbox-workspace/view-sandbox-metadata",children:"View Sandbox Metadata"}),". Note that we don\u2019t impose any limitations on the data and its format, and the data isn\u2019t stored encrypted. Sandbox data can be modified or cleared in both Active and Pending sandboxes, while for Completed sandboxes, the data is kept but cannot be modified."]}),"\n",(0,t.jsx)(a.p,{children:"The following API methods are provided:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:"SetSandboxData"}),": sets the key-value pairs in the custom data container."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:"GetSandboxData"}),": retrieves custom data from the sandbox"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:"ClearSandboxData"}),": clears the custom data container"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Only sysadmins and domain admins can get/set/clear the sandbox data."})}),"\n",(0,t.jsx)(a.p,{children:"So let\u2019s start by setting two key-value pairs: Key1 and Key2:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import CloudShellAPISession, SandboxDataKeyValue\n\nsession = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\n\nres_id = 'f45905f5-1b67-431b-a813-6a4873966245'\n\ndata1 = SandboxDataKeyValue('Key1', 'Value1')\ndata2 = SandboxDataKeyValue('Key2', 'Value2')\n\nall_data = [data1, data2]\n\nsession.SetSandboxData(res_id, all_data)\n"})}),"\n",(0,t.jsx)(a.p,{children:"Now that we have some custom data in the sandbox, let\u2019s learn how to retrieve it:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import CloudShellAPISession\n\nsession = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\n\nres_id = 'f45905f5-1b67-431b-a813-6a4873966245'\n\ndata = session.GetSandboxData(res_id)\n\nfor keyValue in data.SandboxDataKeyValues:\n    print keyValue.Key + \" :: \" + keyValue.Value\n"})}),"\n",(0,t.jsx)(a.p,{children:"And finally, let\u2019s learn how to remove the data we stored on the container:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import CloudShellAPISession\n\nsession = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\n\nres_id = 'de035c9c-75b0-4eca-b797-698b0f26675f'\n\nsession.ClearSandboxData(res_id)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"end-to-end-example-managing-registration-keys-for-aws-services",children:"End-to-end example: Managing registration keys for AWS services"}),"\n",(0,t.jsxs)(a.p,{children:["In this example, we\u2019ll use a customized setup script to store an authentication key for an AWS CDN service on the sandbox and a customized teardown script that will unregister the CDN service and then clear the metadata from the sandbox. In this example, we assume that a CloudShell service called\xa0",(0,t.jsx)(a.strong,{children:"CDN Service"}),"\xa0is used to perform the actual registration to Amazon."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Custom setup script that registers an Amazon CDN service:"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\nfrom cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.api.cloudshell_api import SandboxDataKeyValue\n\n\ndef set_registration_keys(sandbox, components=None):\n    \"\"\"\n    orchestration stage functions MUST have (sandbox, components) signature\n    :param Sandbox sandbox:\n    :return:\n    \"\"\"\n    api = sandbox.automation_api\n    res_id = sandbox.id\n\n    # register to CDN service using a CloudShell service component\n    service_key_value = api.ExecuteCommand(reservationId=res_id,\n                       targetName='CDN Service',\n                       targetType='Service',\n                       commandName='register_cdn').Output\n\n    # store key in sandbox metadata\n    registration_data = SandboxDataKeyValue('cdn_key', service_key_value)\n    all_data = [registration_data]\n    api.SetSandboxData(res_id, all_data)\n\nsandbox = Sandbox()\nDefaultSetupWorkflow().register(sandbox)\nsandbox.workflow.on_configuration_ended(set_registration_keys, None)\nsandbox.execute_setup()\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Custom teardown script that unregisters the CDN service and clears the sandbox metadata:"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.teardown.default_teardown_orchestrator import DefaultTeardownWorkflow\nfrom cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.api.cloudshell_api import InputNameValue\n\n\ndef unregister_cdn(sandbox, components=None):\n    \"\"\"\n    Functions passed into orchestration stage MUST have (sandbox, components) signature\n    :param Sandbox sandbox:\n    :return:\n    \"\"\"\n    api = sandbox.automation_api\n    res_id = sandbox.id\n    api.ClearSandboxData(res_id)\n\n    # get sandbox metadata list\n    sandbox_data = api.GetSandboxData(reservationId=res_id).SandboxDataKeyValues\n\n    # filter for 'cdn_key' value\n    cdn_key_value = [data for data in sandbox_data if data.Key == 'cdn_key'][0].Value\n\n    # unregister cdn service\n    command_inputs = [InputNameValue(Name='cdn_service_key', Value=cdn_key_value)]\n    api.ExecuteCommand(reservationId=res_id,\n                       targetName='CDN Service',\n                       targetType='Service',\n                       commandName='unregister_cdn',\n                       commandInputs=command_inputs)\n\n    # clear sandbox metadata\n    api.ClearSandboxData(reservationId=res_id)\n\n\nsandbox = Sandbox()\nDefaultTeardownWorkflow().register(sandbox)\nsandbox.workflow.before_teardown_started(unregister_cdn, None)\nsandbox.execute_teardown()\n"})}),"\n",(0,t.jsx)(a.h2,{id:"using-custom-sandbox-data-in-json-format",children:"Using custom sandbox data in JSON format"}),"\n",(0,t.jsx)(a.p,{children:"JSON is a very common data format so we figured we\u2019d include some code samples."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Storing custom sandbox data in JSON format:"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import CloudShellAPISession, SandboxDataKeyValue\nimport json\n\nsession = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\n\nres_id = 'f45905f5-1b67-431b-a813-6a4873966245'\n\nwith open(\"C:\\Json Examples\\jsonExample1.json\", \"r\") as myfile:\n    data_file = myfile.read()\n\nwith open(\"C:\\Json Examples\\jsonExample2.json\", \"r\") as myfile:\n    data_file2 = myfile.read()\n\nbig_data = SandboxDataKeyValue('jsonExample1', data_file)\nbig_data2 = SandboxDataKeyValue('jsonExample2', data_file2)\n\nall_data = [big_data, big_data2]\n\nsession.SetSandboxData(res_id, all_data)\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Retrieving custom sandbox data in JSON format:"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from cloudshell.api.cloudshell_api import CloudShellAPISession\nimport json\n\n\n# method to Get the sandbox data by key\ndef GetSandboxDataValueByKey(sandboxData, key):\n    value = [attr.Value for attr in sandboxData.SandboxDataKeyValues if attr.Key == key]\n    if value.__len__() >= 1:\n        return value[0]\n\n# creating a cloudshell session\nsession = CloudShellAPISession('localhost', 'admin', 'admin', 'Global')\n\nsandbox_id = 'f45905f5-1b67-431b-a813-6a4873966245'\n\n# using the session to get all the sandbox data from a specific sandbobx\nsandbox_data = session.GetSandboxData(sandbox_id)\nkey = 'jsonExample1'\n\n# getting a specific value from the sandbox data using a key\nwanted_value = GetSandboxDataValueByKey(sandbox_data, key)\n\n# formatting the value as json\nwanted_value_as_json = json.loads(wanted_value)\n\n# manipulating the json - getting to specific info inside the json\nspecific_inner_value = wanted_value_as_json['widget']['image']\n\n# printing the value as string\nprint json.dumps(specific_inner_value)\n"})})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>d});var t=n(96540);const s={},o=t.createContext(s);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);