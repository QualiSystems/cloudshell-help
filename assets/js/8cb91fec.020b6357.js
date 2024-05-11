"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[63276],{88988:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=i(17624),s=i(4552);const l={sidebar_position:16},r="Add User Inputs",o={id:"portal/blueprints/creating-blueprints/add-user-inputs",title:"Add User Inputs",description:"Blueprint inputs appear to the user as a form they will need to fill out prior to using a blueprint. The image below provides an example of what this form looks like:",source:"@site/docs/portal/blueprints/creating-blueprints/add-user-inputs.md",sourceDirName:"portal/blueprints/creating-blueprints",slug:"/portal/blueprints/creating-blueprints/add-user-inputs",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/add-user-inputs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/blueprints/creating-blueprints/add-user-inputs.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Add Instructions",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/add-instructions"},next:{title:"Set the Blueprint's Privacy (Public / Private)",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/set-blueprint-privacy"}},a={},d=[{value:"Defining blueprint user inputs",id:"defining-blueprint-user-inputs",level:2},{value:"Global inputs",id:"global-inputs",level:2},{value:"Resource requirements and additional info",id:"resource-requirements-and-additional-info",level:2},{value:"Grouping together resource requirements and information",id:"grouping-together-resource-requirements-and-information",level:2},{value:"Adding description and default values for blueprint inputs",id:"adding-description-and-default-values-for-blueprint-inputs",level:2},{value:"Linking published attributes to global attributes",id:"linking-published-attributes-to-global-attributes",level:2}];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"add-user-inputs",children:"Add User Inputs"}),"\n",(0,n.jsx)(t.p,{children:"Blueprint inputs appear to the user as a form they will need to fill out prior to using a blueprint. The image below provides an example of what this form looks like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(44936).c+"",width:"703",height:"514"})}),"\n",(0,n.jsx)(t.h2,{id:"defining-blueprint-user-inputs",children:"Defining blueprint user inputs"}),"\n",(0,n.jsx)(t.p,{children:"Blueprint inputs can be used for resource selection (if the blueprint contains abstract resource requirements), as additional information to drive the provisioning, or as general information to be collected from the user."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To edit a blueprint\u2019s inputs:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["From the ",(0,n.jsx)(t.strong,{children:"Blueprint"})," menu, click ",(0,n.jsx)(t.strong,{children:"Properties"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Edit Blueprint"})," page is displayed."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Inputs"})," button in the page header."]}),"\n",(0,n.jsx)(t.p,{children:"The inputs area is displayed."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(90184).c+"",width:"1231",height:"535"})}),"\n",(0,n.jsx)(t.h2,{id:"global-inputs",children:"Global inputs"}),"\n",(0,n.jsx)(t.p,{children:"Global inputs are a simple way to request information from the user when they reserve the blueprint. You can create a global input of one of three types: Text, Numeric, Lookup or Password. It is possible to type a comma separated list. In that case, the user will get a dropdown list and will only be able to choose one of the possible values."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Text"})," inputs accepts any textual input from the user."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A\xa0",(0,n.jsx)(t.strong,{children:"Numeric"})," input restricts the user to enter a number. The number has to be a whole number (not a fracture)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A\xa0",(0,n.jsx)(t.strong,{children:"Lookup"})," input is linked to one ore more lookup attributes defined in the system."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Lookup"})," type."]}),"\n",(0,n.jsxs)(t.li,{children:["Select a Lookup attribute from the ",(0,n.jsx)(t.strong,{children:"[Select Attribute]"})," drop-down list."]}),"\n",(0,n.jsxs)(t.li,{children:["Select the ",(0,n.jsx)(t.strong,{children:"Bind global input to attribute values"})," checkbox if you want to ensure that only the lookup attribute's values are used. Leaving this checkbox unselected enables blueprint designers to modify the values presented by the global input."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Changes made to the attribute's values are automatically applied to the global input."}),"\n",(0,n.jsx)(t.li,{children:"Setup scripts that use global inputs with empty spaces before or after the input value may sometimes fail."}),"\n",(0,n.jsx)(t.li,{children:"When a single Lookup attribute is linked, all of the attribute's values are available for selection from the input. However, when linked to multiple Lookup attributes, the input will only contain values that are both published (on the abstract resource or service) and shared by all linked attributes."}),"\n"]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"Password"})," input accepts a freetext password value. The value is displayed as a masked value (*****). This type of global input cannot be linked to other inputs. Note that the value can be decrypted using the CloudShell Automation API's ",(0,n.jsx)(t.a,{href:"pathname:///api-docs/2023.3/Python-API/cloudshell.api.html?highlight=decryptpassword#cloudshell.api.cloudshell_api.CloudShellAPISession.DecryptPassword",children:"DecryptPassword"})," method."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Tip for admins",type:"tip",children:(0,n.jsxs)(t.p,{children:["It is possible to resize the global text boxes of the global inputs. For details, see ",(0,n.jsx)(t.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/resizing-the-value-box-of-text-global-inputs",children:'Resizing the value box of "text" global inputs'}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"resource-requirements-and-additional-info",children:"Resource requirements and additional info"}),"\n",(0,n.jsxs)(t.p,{children:["Some blueprint inputs are directly related to resource requirements and information that are defined as user inputs. These inputs are displayed in the right hand section of this page. If you have abstract resource templates in your blueprint, and those templates have inputs, they will be listed here. For additional information about setting inputs for blueprint resources, see ",(0,n.jsx)(t.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/abstract-resources",children:"Add Abstract Resources"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"grouping-together-resource-requirements-and-information",children:"Grouping together resource requirements and information"}),"\n",(0,n.jsx)(t.p,{children:"As the blueprint accumulates more required user inputs, it may become necessary to group some of them together into a single entry. One example would be if there are numerous switches in the blueprint, which all have their model set as an input. In some scenarios, the blueprint designer might want the user to feed in just one value 'Switch model' and have that value affect all relevant resources. To do so, use the 'Link inputs' icon displayed next to each resource requirement or information input."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(73516).c+"",width:"1279",height:"335"})}),"\n",(0,n.jsx)(t.p,{children:"After clicking the 'link attribute' button you will be able to choose whether to link to an existing global attribute or create a new one. Once the attribute is linked, you will see the global input appearing as a tag on the input you've linked. Once an input is linked to a global input it will no longer appear to users reserving the blueprint and will be set only via the input it is linked to."}),"\n",(0,n.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you're linking a Lookup attribute, you cannot bind the two together. As a result, blueprint designers will be able to modify the global input's values. When you create the attribute ahead of time, you can bind it to the attribute values, which disables the modification option. For details, see the Lookup input's description in the ",(0,n.jsx)(t.a,{href:"#global-inputs",children:"Global inputs"})," section above."]}),"\n",(0,n.jsx)(t.li,{children:"Abstract resource attributes with partial or search conditions, which use a non-equals action, cannot be linked to global inputs."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"adding-description-and-default-values-for-blueprint-inputs",children:"Adding description and default values for blueprint inputs"}),"\n",(0,n.jsxs)(t.p,{children:["For each input defined for the blueprint, it is possible to set a default value, which will be displayed to the user reserving the blueprint. To include a description for each input, click the add description button and enter the description in the text area that will appear inside the input box. The description is provided as a tooltip in the blueprint's ",(0,n.jsx)(t.strong,{children:"Reserve"})," form."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"A default value of [] is not supported."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(73600).c+"",width:"499",height:"101"})}),"\n",(0,n.jsx)(t.h2,{id:"linking-published-attributes-to-global-attributes",children:"Linking published attributes to global attributes"}),"\n",(0,n.jsx)(t.p,{children:"You can link a published attribute to a global attribute. When the value of the global attribute is specified, all the individual attributes are populated with the same value, eliminating the need to open each one and specifying the values for each individual attribute separately."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To link a published attribute to a global attribute:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open the blueprint's inputs page."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"If you want to link a lookup attribute and disable the option of modifying the linked attribute's, create a global input at this time."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the row of the attribute that you want to publish, click the ",(0,n.jsx)(t.strong,{children:"Link Inputs"})," button ",(0,n.jsx)(t.img,{src:i(76596).c+"",width:"27",height:"24"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(74088).c+"",width:"589",height:"44"})}),"\n",(0,n.jsx)(t.p,{children:"You are prompted to select the global input that must be linked to the selected published attribute."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(64856).c+"",width:"554",height:"82"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the required global input. If it does not exist, specify the name of the global input in the ",(0,n.jsx)(t.strong,{children:"Enter Global Input Name"})," field."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(27021).c+"",width:"554",height:"65"})}),"\n",(0,n.jsx)(t.p,{children:"You can optionally modify the global input using the following fields:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Attribute value"}),(0,n.jsx)(t.td,{children:"Value that is applied to all the published attributes that are linked to this Global Input."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Delete Global Input"}),(0,n.jsx)(t.td,{children:"Delete the selected Global Input."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Edit Global Input Description"}),(0,n.jsx)(t.td,{children:"Modify the text that describes the selected Global Input."})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Update"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Blueprint Catalog"})," is displayed."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},90184:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/BlueprintInputsPane-744950d58e6964b714e9774286ca1292.png"},73516:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/BlueprintInputsPaneLinkInputs-27b17e1c3074ff92babf30ca05058ec0.png"},73600:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/EnvironmentInputDescription_499x101-b2fe5e3088e7cea0cca54102ccbc5733.png"},44936:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/ReservePane_NEW-0b6be01739fef82817e9a3711b7514ae.png"},76596:(e,t,i)=>{i.d(t,{c:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIrSURBVEhL7ZT/TxJhHMf7n+uHvogrFMQTBA/oggQ1yUKLZpjpnGGKIWWpIWqoIDrmQJQph5vA8e6ex2erw+6ExtrafG232z733PPa5/N8Ps+tTCaDf8WNrCX8HzJJknCYzWFtfROv377HQuQLModZVCoVtuIqfy2LbfyA0foYd/XdsDj7oTNaoO/hEQpHUKvV2ColTcskqYbd1D50Xb1wDY6gUDhlX4CBkTG0ydKzosgiSpqWZXNHcA+9gD8wgaKo3DR/fAKTTUAgOMUiSpqWkRJVq1V6ZvWQjOxPh+AbfcMiShqSkUOPb23D0f8Mj7g++gz7A0gfKP9N7Kbot5lQmEWUXCsjGcx/+ox7HRwEr482Rji6DLPDjQ6zXT6/NF2XSh+g0+IAx7sglko0Vo+mjJRraXmFdtrLQJBm+G1tHbmjvHx2ebwan8TK9zi2k3t42G2DodeJ5N4++/sqmrK5xSgedJoRnJqlIlEswePz042nP8wjFt9CaCECU5+ALnkM6staj6qMDCwpk/f5KItcQprAJnhxp92I2zoDfVsFj2q7/46qbDOxI2fVg+jXVRZRQsq1GttAYieJi4syi2qjKiObtBks+Li4xCK/OD4p0FmbmJ5lkcZQlZ2eFWF74pWvJCftNEmer3L5cgTaTVbw7kHkZWkzaDYImRs9x9M7j1xNTs8w7sul5V0DTYsImjJC6fwcY+PvwNldNJuZuT8PbCNcK2slN7IWAPwEGLmrysIqKv0AAAAASUVORK5CYII="},64856:(e,t,i)=>{i.d(t,{c:()=>n});const n="data:image/png;base64,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"},74088:(e,t,i)=>{i.d(t,{c:()=>n});const n="data:image/png;base64,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"},27021:(e,t,i)=>{i.d(t,{c:()=>n});const n="data:image/png;base64,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"},4552:(e,t,i)=>{i.d(t,{I:()=>o,M:()=>r});var n=i(11504);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);