"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[96200],{52220:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(17624),n=t(4552);const i={sidebar_position:10},o="Resource Scripts",c={id:"devguide/reference/resource-scripts",title:"Resource Scripts",description:"Resource scripts allow you to add automation to specific sandbox components. These scripts are intended to add simple functionality, or to be used for testing and debugging activities. Note that in order to add automation to a shell, the best practice is to use the component\u2019s driver.",source:"@site/versioned_docs/version-2023.3/devguide/reference/resource-scripts.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/resource-scripts",permalink:"/devguide/reference/resource-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/reference/resource-scripts.md",tags:[],version:"2023.3",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Short Development Videos",permalink:"/devguide/reference/short-dev-videos"},next:{title:"Custom Routing for Azure Apps",permalink:"/devguide/reference/custom-routing-for-azure-apps"}},l={},a=[{value:"Using the script_helper",id:"using-the-script_helper",level:2},{value:"Accessing the sandbox component",id:"accessing-the-sandbox-component",level:2},{value:"Using API from the resource script",id:"using-api-from-the-resource-script",level:2},{value:"Getting reservation context details",id:"getting-reservation-context-details",level:2},{value:"Returning outputs from a resource script",id:"returning-outputs-from-a-resource-script",level:2},{value:"Associating a resource script to a CloudShell resource",id:"associating-a-resource-script-to-a-cloudshell-resource",level:2},{value:"Example",id:"example",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"resource-scripts",children:"Resource Scripts"}),"\n",(0,r.jsx)(s.p,{children:"Resource scripts allow you to add automation to specific sandbox components. These scripts are intended to add simple functionality, or to be used for testing and debugging activities. Note that in order to add automation to a shell, the best practice is to use the component\u2019s driver."}),"\n",(0,r.jsx)("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/OZ9MRzZOd0E",title:"Creating CloudShell resource scripts",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,r.jsx)(s.h2,{id:"using-the-script_helper",children:"Using the script_helper"}),"\n",(0,r.jsx)(s.p,{children:"Resource scripts get information from the sandbox component using the script_helper."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To use the script helper:"})}),"\n",(0,r.jsxs)(s.p,{children:["Import the\xa0",(0,r.jsx)(s.em,{children:"cloudshell-automation-api"}),"\xa0Python package and add it to your script, as illustrated in the example below. Note that the package is automatically imported when your sandbox starts. In this example, the following code gets an object that contains all of the sandbox\u2019s information:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"import cloudshell.helpers.scripts.cloudshell_scripts_helpers as script_help\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To execute this code from within CloudShell, you will also need to include a\xa0",(0,r.jsx)(s.em,{children:"requirements.txt"}),"\xa0file with your script, and rename the resource script to\xa0",(0,r.jsx)(s.code,{children:"__main__.py"}),". The\xa0",(0,r.jsx)(s.code,{children:"__main__.py"}),"\xa0file is used as the script\u2019s entry point, when the script is a package containing multiple files. Finally, zip the two files together, upload the zip package to CloudShell Portal\u2019s\xa0",(0,r.jsx)(s.strong,{children:"Manage>Scripts>Resource"}),"\xa0page and make sure to specify the\xa0",(0,r.jsx)(s.strong,{children:"Models"}),"\xa0of the resources this script applies to, as explained in ",(0,r.jsx)(s.a,{href:"/devguide/reference/resource-scripts",children:"Associating a resource script to a CloudShell resource"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["If you want to write your own packages and use them in your script, make sure to place them in the local PyPi Server repository on the Quali Server machine. For details, see ",(0,r.jsx)(s.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"To facilitate writing and debugging activities, it is recommended to use advanced IDEs such as PyCharm, which provide autocomplete functionality, as illustrated below."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Resource information",src:t(97080).c+"",width:"624",height:"158"})}),"\n",(0,r.jsx)(s.h2,{id:"accessing-the-sandbox-component",children:"Accessing the sandbox component"}),"\n",(0,r.jsxs)(s.p,{children:["Use the\xa0",(0,r.jsx)(s.em,{children:"get_resource_context"}),"\xa0method to access and use the sandbox component in your resource script."]}),"\n",(0,r.jsx)(s.p,{children:"For example, let\u2019s assume we want to get metadata information from the component, such as name and address:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"resource_name = script_help.get_resource_context_details().name\nresource_address = script_help.get_resource_context_details().address\n"})}),"\n",(0,r.jsx)(s.p,{children:"Or to get information from attributes on the component:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:'For global attributes, use the attributes element. For example, "Region\u201d and "Execution Server Selector\u201d:'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'resource_region = script_help.get_resource_context_details().attributes.Region\nresource_ess = script_help.get_resource_context_details().attributes["Execution Server Selector"]\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:'For namespaced attributes (i.e. attributes that exist on a 2nd Gen shell only), provide the full attribute name, including the namespace. For example, "Vendor\u201d and "OS Version\u201d:'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"resource_vendor = script_help.get_resource_context_details().attributes['CS_Switch.Vendor']\nresource_os_version = script_help.get_resource_context_details().attributes['CS_Switch.OS Version']\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"using-api-from-the-resource-script",children:"Using API from the resource script"}),"\n",(0,r.jsx)(s.p,{children:"To use the API, create a session variable that uses the helper\u2019s get_api_session method:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"session = script_help.get_api_session()\n"})}),"\n",(0,r.jsx)(s.h2,{id:"getting-reservation-context-details",children:"Getting reservation context details"}),"\n",(0,r.jsxs)(s.p,{children:["The\xa0",(0,r.jsx)(s.em,{children:"get_reservation_context_details"}),"\xa0helper provides the reservation context."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"get_reservation_context_from_resource_scripts",src:t(40368).c+"",width:"624",height:"179"})}),"\n",(0,r.jsx)(s.p,{children:"To get this object, include this line in your script:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"from cloudshell.helpers.scripts.cloudshell_scripts_helpers import get_reservation_context_details\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Note that starting with CloudShell 9.2, you can also get the CloudShell user who ran the command using the\xa0",(0,r.jsx)(s.em,{children:"get_reservation_context_details"}),"\xa0helper."]}),"\n",(0,r.jsx)(s.p,{children:"For example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"user = get_reservation_context_details().running_user\n"})}),"\n",(0,r.jsx)(s.h2,{id:"returning-outputs-from-a-resource-script",children:"Returning outputs from a resource script"}),"\n",(0,r.jsxs)(s.p,{children:["In order to return outputs, use\xa0",(0,r.jsx)(s.code,{children:"print"}),". This applies to flat scripts and methods nested within resource scripts."]}),"\n",(0,r.jsxs)(s.p,{children:["The script standard output is returned as the command result. However, if an exception is raised, or if a non-zero process result code is returned, the execution will be considered a failure. As a side note, in CloudShell, the output of a script is displayed in the\xa0",(0,r.jsx)(s.strong,{children:"Output"}),"\xa0console in the sandbox workspace, so whatever you print in your script will find its way there."]}),"\n",(0,r.jsx)(s.p,{children:"For example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"import cloudshell.helpers.scripts.cloudshell_scripts_helpers as script_help\n\n\ndef print_output():\n    resource_address = script_help.get_resource_context_details().address\n    print(resource_address)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"associating-a-resource-script-to-a-cloudshell-resource",children:"Associating a resource script to a CloudShell resource"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Place the Python script(s) and requirements.txt files in a folder."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"From within the folder, select the two files and zip."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In CloudShell Portal\u2019s\xa0",(0,r.jsx)(s.strong,{children:"Scripts"}),"\xa0management page, open the\xa0",(0,r.jsx)(s.strong,{children:"Resource Scripts"}),"\xa0page and add the zip file."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Edit"}),"\xa0the script and from the\xa0",(0,r.jsx)(s.strong,{children:"Models"}),"\xa0drop-down list, select the models of the resources and services."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Resource information",src:t(48980).c+"",width:"604",height:"614"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Click\xa0",(0,r.jsx)(s.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"In this example, we use the CloudShell Automation API to get the resource\u2019s vendor and OS version:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"requirements.txt"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"cloudshell-automation-api>=9.3,<2020.1\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"__main__.py"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"import cloudshell.helpers.scripts.cloudshell_scripts_helpers as script_help\n\n\nsession = script_help.get_api_session()\n\nresource_vendor = script_help.get_resource_context_details().attributes['CS_Switch.Vendor']\nresource_os_version = script_help.get_resource_context_details().attributes['CS_Switch.OS Version']\n\nsession.WriteMessageToReservationOutput(\n    reservationId=script_help.get_reservation_context_details().id,\n    message='the resource vendor is {}'.format(resource_vendor)\n)\n\nsession.WriteMessageToReservationOutput(\n    reservationId=script_help.get_reservation_context_details().id,\n    message='the resource OS version is {}'.format(resource_os_version)\n)\n"})})]})}function h(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},40368:(e,s,t)=>{t.d(s,{c:()=>r});const r=t.p+"assets/images/Resource-Scripts_1_624x179-667f09c7aec137346e473b04911e0578.png"},48980:(e,s,t)=>{t.d(s,{c:()=>r});const r=t.p+"assets/images/Resource-Scripts_2_604x614-b2b0b39e6fc79cf2504085b0ab83ffc5.png"},97080:(e,s,t)=>{t.d(s,{c:()=>r});const r=t.p+"assets/images/Resource-Scripts_624x158-71443e71b25fc7470fd6717895c0067a.png"},4552:(e,s,t)=>{t.d(s,{I:()=>c,M:()=>o});var r=t(11504);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);