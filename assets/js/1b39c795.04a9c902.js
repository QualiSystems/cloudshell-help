"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[78800],{95408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(17624),a=n(4552);const i={sidebar_position:4},r="Editing Apps in a Sandbox",o={id:"devguide/available-cs-api/useful-cs-api-examples/edit-app-in-sandbox",title:"Editing Apps in a Sandbox",description:"The EditAppsInReservation API enables you to programmatically modify an App in a sandbox. Generally, the classic flow is to call this API using CloudShell Automation API during the Preparation phase of the setup script (before the Provisioning phase that deploys the Apps).",source:"@site/versioned_docs/version-2023.3/devguide/available-cs-api/useful-cs-api-examples/edit-app-in-sandbox.md",sourceDirName:"devguide/available-cs-api/useful-cs-api-examples",slug:"/devguide/available-cs-api/useful-cs-api-examples/edit-app-in-sandbox",permalink:"/cloudshell-help/devguide/available-cs-api/useful-cs-api-examples/edit-app-in-sandbox",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/available-cs-api/useful-cs-api-examples/edit-app-in-sandbox.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Finding Blueprints Containing a Specific Resource, Service or App",permalink:"/cloudshell-help/devguide/available-cs-api/useful-cs-api-examples/find-blueprints-with-rsrc-serv-or-app"},next:{title:"SSO Login to CloudShell APIs",permalink:"/cloudshell-help/devguide/available-cs-api/sso-login-to-cs-api"}},p={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"The app details json",id:"the-app-details-json",level:2},{value:"Custom setup script example",id:"custom-setup-script-example",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"editing-apps-in-a-sandbox",children:"Editing Apps in a Sandbox"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"EditAppsInReservation"})," API enables you to programmatically modify an App in a sandbox. Generally, the classic flow is to call this API using CloudShell Automation API during the ",(0,s.jsx)(t.strong,{children:"Preparation"})," phase of the setup script (before the ",(0,s.jsx)(t.strong,{children:"Provisioning"})," phase that deploys the Apps)."]}),"\n",(0,s.jsx)(t.admonition,{title:"Notes for EditAppsInReservation:",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Applies to undeployed Apps in the sandbox."}),"\n",(0,s.jsx)(t.li,{children:"Supported in CloudShell Automation API and TestShell API."}),"\n",(0,s.jsx)(t.li,{children:"All attributes in the deployment path must be specified with the desired values. Attribute values that are omitted in the API command will have empty values. In other words, your automation needs to read the existing values, copy them into the API request and modify the desired attributes as appropriate (see the example below)."}),"\n",(0,s.jsxs)(t.li,{children:["This API method does not support Configuration Management modifications, but you can use the Automation API's ",(0,s.jsx)(t.code,{children:"ConfigureApps"})," method to update parameter values."]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"EditAppsInReservation"}),' accepts two parameters: reservation id and an "app details" object.']}),"\n",(0,s.jsx)(t.p,{children:'"app details" defines the modified App.'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"In python, you define the App's details as part of your script, as shown in the next section."}),"\n",(0,s.jsxs)(t.li,{children:["In TestShell API, you build the json in a text editor and copy it into a variable, which you define in the ",(0,s.jsx)(t.strong,{children:"TestShell API"})," step's ",(0,s.jsx)(t.code,{children:"EditAppsInReservation"})," command. This json object mirrors the structure of the CloudShell Automation API object."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"the-app-details-json",children:"The app details json"}),"\n",(0,s.jsx)(t.p,{children:"The json has several sections:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"App's general details like name, new name and description"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"AppDetails"})," section containing the App Resource attributes (User, Password, etc.), deployed App shell (",(0,s.jsx)(t.strong,{children:"ModelName"})," parameter), ",(0,s.jsx)(t.strong,{children:"Driver"})," parameter is used for Apps based on 1",(0,s.jsx)("sup",{children:"st"})," Gen cloud provider shells"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"DefaultDeployment"})," section defines the App's deployment path to use as well as the deployment attributes. As mentioned in the notes, all deployment path attributes must be specified, even ones you do not want to change."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'[\n  {\n    "Name": "vcenter test",\n    "NewName": "new name test",\n    "Description": "my description",\n    "AppDetails": {\n      "Attributes": [\n        {\n          "Name": "User",\n          "Value": "Testshell Test User"\n        }\n      ],\n      "Driver": null,\n      "ModelName": "Generic App Model"\n    },\n    "DefaultDeployment": {\n      "Name": "vcenter 110 - 2G - VMware vCenter Cloud Provider 2G.vCenter VM From Linked Clone 2G",\n      "Deployment": {\n        "Attributes": [\n          {\n            "Name": "VMware vCenter Cloud Provider 2G.vCenter VM From Linked Clone 2G.CPU",\n            "Value": "6"\n          }\n        ]\n      }\n    }\n  }\n]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"custom-setup-script-example",children:"Custom setup script example"}),"\n",(0,s.jsxs)(t.p,{children:["Here's a ",(0,s.jsx)(t.a,{href:"https://github.com/QualiSystemsLab/cloudshell-api-script-samples/tree/master/generic-orchestration-samples/setup/setup_edit_app_sample",children:"custom setup script"})," from our community that demonstrates how to use this API."]}),"\n",(0,s.jsx)(t.p,{children:"This script has 3 files:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"edit_apps.py"})," has two functions:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"edit_target_app_in_sandbox"})," modifies specific deployment attributes in a specific App in the sandbox."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"edit_apps_in_sandbox"})," is a wrapper for the setup orchestration."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"__main__.py"})," is the entry point to the setup script."]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"requirements.txt"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"edit_apps.py:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.api.cloudshell_api import CloudShellAPISession, ApiEditAppRequest, AppDetails, DefaultDeployment, Deployment, \\\n    NameValuePair\n\n\ndef edit_target_app_in_sandbox(app_name, new_app_name, api, sb_id, target_deployment_attrs):\n    """\n    Function to replace specific deployment attributes on a specific app\n    the target deployment attrs ignores namespacing and case sensitivity.\n    This will work for the hdd and cpu attrs - [("hdd", "3"), ("cpu", "5")]\n    :param str app_name:\n    :param str new_app_name:\n    :param CloudShellAPISession api:\n    :param str sb_id:\n    :param list target_deployment_attrs: example [("hdd", "3"), ("cpu", "5")]\n    :return:\n    """\n\n    # guard clause\n    if not target_deployment_attrs:\n        return\n\n    # find target app to modify\n    apps = api.GetReservationDetails(sb_id, disableCache=True).ReservationDescription.Apps\n    if not apps:\n        return\n    target_app_search = [app for app in apps if app.Name == app_name]\n    if not target_app_search:\n        return\n    target_app = target_app_search[0]\n\n    # copy over logical resource attributes\n    new_resource_attrs = []\n    for curr_attr in target_app.LogicalResource.Attributes:\n        new_resource_attrs.append(NameValuePair(curr_attr.Name, curr_attr.Value))\n\n    default_deployment = [x for x in target_app.DeploymentPaths if x.IsDefault][0]\n\n    # copy over all deployment attributes, modify target attributes\n    new_deployment_attrs_map = {}\n    for curr_attr in default_deployment.DeploymentService.Attributes:\n        for update_attr_name, update_attr_value in target_deployment_attrs:\n            if curr_attr.Name.lower().endswith(update_attr_name.lower()):\n                new_deployment_attrs_map[curr_attr.Name] = update_attr_value\n                break\n\n        if curr_attr.Name not in new_deployment_attrs_map:\n            new_deployment_attrs_map[curr_attr.Name] = curr_attr.Value\n\n    # build out app edit request\n    new_deployment_attrs_list = [NameValuePair(x[0], x[1]) for x in new_deployment_attrs_map.items()]\n    new_deployment = Deployment(new_deployment_attrs_list)\n    app_details = AppDetails(ModelName=target_app.LogicalResource.Model,\n                             Attributes=new_resource_attrs,\n                             Driver=target_app.LogicalResource.Driver)\n    new_default_deployment = DefaultDeployment(Name=default_deployment.Name, Deployment=new_deployment)\n    app_edit_requests = [ApiEditAppRequest(Name=app_name,\n                                           NewName=new_app_name,\n                                           Description="",\n                                           AppDetails=app_details,\n                                           DefaultDeployment=new_default_deployment)]\n    api.EditAppsInReservation(reservationId=sb_id, editAppsRequests=app_edit_requests)\n\n\ndef edit_apps_in_sandbox(sandbox, components):\n    """\n    :param Sandbox sandbox:\n    :param components:\n    :return:\n    """\n    api = sandbox.automation_api\n    sb_id = sandbox.id\n    APP_NAME = "TEST"\n    NEW_NAME = "NATTI"\n    target_deployment_attrs = [("hdd", "3"), ("cpu", "5")]\n\n    edit_target_app_in_sandbox(app_name=APP_NAME,\n                               new_app_name=NEW_NAME,\n                               api=api,\n                               sb_id=sb_id,\n                               target_deployment_attrs=target_deployment_attrs)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"__main__.py:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from cloudshell.workflow.orchestration.sandbox import Sandbox\nfrom cloudshell.workflow.orchestration.setup.default_setup_orchestrator import DefaultSetupWorkflow\nfrom edit_apps import edit_apps_in_sandbox\n\nsandbox = Sandbox()\n\nDefaultSetupWorkflow().register(sandbox)\nsandbox.workflow.add_to_preparation(edit_apps_in_sandbox)\n\nsandbox.execute_setup()\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"requirements.txt:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"cloudshell-orch-core>=3.4.0.0,<3.5.0.0\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var s=n(11504);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);