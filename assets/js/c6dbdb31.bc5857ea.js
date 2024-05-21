"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3272],{1559:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(17624),t=s(4552);const r={sidebar_position:3},a="Script Commands Visibility and Usability",o={id:"devguide/develop-orch-scripts/script-commands-visibility-and-usability",title:"Script Commands Visibility and Usability",description:"You can control many aspects of how the orchestration commands appear and behave in CloudShell by editing the script from the Scripts management page.",source:"@site/versioned_docs/version-2023.3/devguide/develop-orch-scripts/script-commands-visibility-and-usability.md",sourceDirName:"devguide/develop-orch-scripts",slug:"/devguide/develop-orch-scripts/script-commands-visibility-and-usability",permalink:"/devguide/develop-orch-scripts/script-commands-visibility-and-usability",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/develop-orch-scripts/script-commands-visibility-and-usability.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How Orchestration Scripts Get Information from CloudShell",permalink:"/devguide/develop-orch-scripts/how-orch-script-get-info-from-cs"},next:{title:"Script Deep Dive",permalink:"/devguide/develop-orch-scripts/script-deep-dive"}},l={},d=[{value:"Setting display name, descriptions and category",id:"setting-display-name-descriptions-and-category",level:2},{value:"Adding parameters",id:"adding-parameters",level:2},{value:"Test the new look and feel",id:"test-the-new-look-and-feel",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"script-commands-visibility-and-usability",children:"Script Commands Visibility and Usability"}),"\n",(0,i.jsx)(n.p,{children:"You can control many aspects of how the orchestration commands appear and behave in CloudShell by editing the script from the Scripts management page."}),"\n",(0,i.jsx)(n.p,{children:"To demonstrate these capabilities, we\u2019ll create a simple script, which we\u2019ll later customize. The script essentially prints out the parameters it receives and then sets the status of the sandbox to \u2018Downloading\u2019."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new Python file and name it ",(0,i.jsx)(n.code,{children:"customization_test.py"}),". Add the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from cloudshell.workflow.orchestration.sandbox import Sandbox\nimport cloudshell.helpers.scripts.cloudshell_dev_helpers as dev_helpers\n\n\ndef print_parameters_values(sandbox):\n    """\n    :param Sandbox sandbox:\n    :return:\n    """\n    print sandbox.get_user_param(\'first_param\')\n    print sandbox.get_user_param(\'second_param\')\n\ndef change_reservation_status_to_online(sandbox):\n    """\n    :param Sandbox sandbox:\n    :return:\n    """\n    sandbox.automation_api.SetReservationLiveStatus(sandbox.id, "Downloading")\n\ndef main():\n    dev_helpers.attach_to_cloudshell()\n    sandbox = Sandbox()\n    print_parameters_values(sandbox)\n    change_reservation_status_to_online(sandbox)\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can get the Sandbox id by using\xa0",(0,i.jsx)(n.strong,{children:"sandbox.id"}),". The Sandbox name is also available via the\xa0",(0,i.jsx)(n.strong,{children:"sandbox.name"}),"\xa0property."]})}),"\n",(0,i.jsxs)(n.p,{children:["Since this script has imports, you\u2019ll need a\xa0",(0,i.jsx)(n.code,{children:"requirements.txt"}),"\xa0file and a\xa0",(0,i.jsx)(n.em,{children:"main.py"}),"\xa0function. For details, see\xa0",(0,i.jsx)(n.a,{href:"/devguide/develop-orch-scripts/script-deep-dive",children:"Script Deep Dive"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In CloudShell Portal, open the\xa0",(0,i.jsx)(n.strong,{children:"Manage"}),"\xa0dashboard."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the\xa0",(0,i.jsx)(n.em,{children:"Scripts"}),"\xa0sub section and select\xa0",(0,i.jsx)(n.strong,{children:"Blueprint"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Scripts Management Page",src:s(7404).c+"",width:"624",height:"376"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the script into CloudShell by dragging the script into the\xa0",(0,i.jsx)(n.strong,{children:"Scripts \u2013 Blueprint"}),"\xa0page or add the ",(0,i.jsx)(n.code,{children:"customization_test.py"})," script."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To customize the script, click the\xa0",(0,i.jsx)(n.strong,{children:"Edit"}),"\xa0button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Scripts Management Page",src:s(76208).c+"",width:"601",height:"613"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-display-name-descriptions-and-category",children:"Setting display name, descriptions and category"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You can set the script\u2019s display name or alias by editing the\xa0",(0,i.jsx)(n.strong,{children:"Alias"}),"\xa0field in the edit form. Note that if you try to execute this script as a command from the API, you\u2019ll still need to reference it by its name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Script Type"}),"\xa0allows you to set the script as an orchestration script that CloudShell will run accordingly."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use the\xa0",(0,i.jsx)(n.strong,{children:"Type"}),"\xa0field to select the python version of the script. When the script is executed, CloudShell will create a virtual environment using the selected Python version."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Visibility"}),"\xa0controls who can access this command in CloudShell. Options are\xa0",(0,i.jsx)(n.strong,{children:"Everyone"}),"\xa0or\xa0",(0,i.jsx)(n.strong,{children:"Admin Only"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The\xa0",(0,i.jsx)(n.strong,{children:"Description"}),"\xa0is also easy to set via the edit form. Enter any text here, it will be displayed as a reference under the script name in the commands pane. This does not apply to orchestration scripts."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Categories help improve usability by grouping commands with a similar role or domain under a folder in the sandbox\u2019s command pane. This grouping is for visual purposes only and does not affect API calls. For this example, let\u2019s set the category name to \u2018Customization\u2019."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-parameters",children:"Adding parameters"}),"\n",(0,i.jsx)(n.p,{children:"Our script expects two parameters, but CloudShell has no way of knowing that. We need to add these parameters in this same form."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the\xa0",(0,i.jsx)(n.strong,{children:"Add Parameter"}),"\xa0link at the bottom of the form."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the\xa0",(0,i.jsx)(n.strong,{children:"Name"}),"\xa0as \u2018first_param\u2019 and the\xa0",(0,i.jsx)(n.strong,{children:"Default Value"}),"\xa0as \u2018None\u2019. Note that if the command parameters don\u2019t have default values, they will become mandatory and the user won\u2019t be able to execute the command without filling in values for them."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Then, enter a meaningful\xa0",(0,i.jsx)(n.strong,{children:"Description"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Repeat the process, this time for the second param, which the script expects to be named \u201csecond_param\u201d."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test-the-new-look-and-feel",children:"Test the new look and feel"}),"\n",(0,i.jsx)(n.p,{children:"To test the script, we need to add it to a blueprint."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In CloudShell Portal, click\xa0",(0,i.jsx)(n.strong,{children:"Blueprints"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The\xa0",(0,i.jsx)(n.strong,{children:"Blueprint Catalog"}),"\xa0is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a new blueprint or select an existing one."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the blueprint\u2019s\xa0",(0,i.jsx)(n.strong,{children:"Properties"}),"\xa0page, associate the script with the blueprint."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Reserve the blueprint and open the\xa0",(0,i.jsx)(n.strong,{children:"Commands"}),"\xa0pane in the sandbox."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Scripts Management Page",src:s(81012).c+"",width:"624",height:"208"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},81012:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Script-commands-Visibility_1_624x208-1acadd180c78b17a29e867d4044e9836.png"},76208:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Script-commands-Visibility_601x613-f281f1d1fb8623829bf46ded0f26504d.png"},7404:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Scripts-Getting-Started_624x376-1e16c36648f5ea8df8d978c691491b22.png"},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>a});var i=s(11504);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);