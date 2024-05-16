"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[99140],{18284:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(17624),n=s(4552);const i={sidebar_position:12},l="Define the Blueprint's Properties",o={id:"portal/blueprints/creating-blueprints/blueprint-properties",title:"Define the Blueprint's Properties",description:"This section explains how to set the blueprint's properties, including name and description, image to be displayed in the Blueprint Catalog, the default duration for sandboxes based on this blueprint, owner and orchestration processes.",source:"@site/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/blueprint-properties.md",sourceDirName:"portal/blueprints/creating-blueprints",slug:"/portal/blueprints/creating-blueprints/blueprint-properties",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/blueprint-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/blueprint-properties.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Check Blueprint Routes",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/check-blueprint-routes"},next:{title:"Create Blueprint Commands",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/create-blueprint-commands"}},a={},d=[];function h(e){const t={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"define-the-blueprints-properties",children:"Define the Blueprint's Properties"}),"\n",(0,r.jsx)(t.p,{children:"This section explains how to set the blueprint's properties, including name and description, image to be displayed in the Blueprint Catalog, the default duration for sandboxes based on this blueprint, owner and orchestration processes."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"To define the blueprint's properties:"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["From the ",(0,r.jsx)(t.strong,{children:"Blueprint"})," menu, select ",(0,r.jsx)(t.strong,{children:"Properties"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Edit Blueprint"})," page is displayed, in the ",(0,r.jsx)(t.strong,{children:"General"})," tab."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Edit the blueprint's properties, as follows:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Image"}),(0,r.jsxs)(t.td,{children:["The blueprint's image displayed in the ",(0,r.jsx)(t.strong,{children:"Blueprint Catalog"}),". The recommended size for the image is 190x120 pixels (image size is limited to 400x400 pixels or 200 KB)."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Name"}),(0,r.jsx)(t.td,{children:"The blueprint's name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Created"}),(0,r.jsx)(t.td,{children:"(Read only) The blueprint's creation and last modification times."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Owner"}),(0,r.jsx)(t.td,{children:"The blueprint's owner. Only users in the blueprint\u2019s domain that aren\u2019t external can be set as blueprint owner."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Permitted Editors"}),(0,r.jsxs)(t.td,{children:["The blueprint's permitted editors. You can only add users with permissions to create/edit blueprints (regular users, domain admins and admins). These users can access the blueprint even if it is private. ",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Notes:"})," ",(0,r.jsx)("br",{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Permitted users cannot change the blueprint's owner."}),(0,r.jsx)("li",{children:"Non-admin permitted users cannot delete the blueprint."})]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"The blueprint's description."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Delete"}),(0,r.jsx)(t.td,{children:"Deletes the blueprint."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default Duration"}),(0,r.jsx)(t.td,{children:"The default duration for new sandboxes. By default, the sandbox duration is 2 hours."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Set Max Duration"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.strong,{children:"Set Max Duration"})," check box enables you to set the maximum duration for the active sandbox. For example, to prevent users from over-using any valuable resources the sandbox may contain. ",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," If there is a maximum duration set for the user, the shorter duration prevails."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Drivers / Scripts"}),(0,r.jsxs)(t.td,{children:["Select the ",(0,r.jsx)(t.strong,{children:"Python Setup &\xa0Teardown"})," driver (if you are not using the out-of-the-box setup and teardown scripts). Select scripts to be added to the blueprint. For additional information, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/configure-orchestration",children:"Configure Blueprint Orchestration"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Categories"}),(0,r.jsxs)(t.td,{children:["Select the blueprint categories in which the blueprint is displayed. Once a category is selected, select the relevant sub-category, if there is one. For additional information, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-categories",children:"Managing Categories"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Save Sandbox"}),(0,r.jsxs)(t.td,{children:["(Unavailable for persistent blueprints) This area applies to the ",(0,r.jsx)(t.strong,{children:"Save and Restore"})," add-on.",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"Enable Sandbox Save:"})," Make sure this check box is selected if you want to allow end-users to save sandboxes created from this blueprint. If the check box is enabled, the ",(0,r.jsx)(t.strong,{children:"Save the Sandbox"})," button is displayed in the active sandbox and you will be able to save the sandbox. For additional information, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/save-sandbox",children:"Save a Sandbox"}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"Use abstract template save behavior"}),": Determine how the blueprint's abstract resources will behave in the saved sandbox. Options are:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"Use abstract template save behavior"}),":(Default) Use the save behavior defined on each abstract resource in the blueprint."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"Return all resources to abstract"}),": Revert all selected resources back to their abstract states."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"Keep resolution for all resources"}),": Save the selected resources as is. In other words, do not revert them back to abstract."]})]})]})]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Persistent Sandbox"}),(0,r.jsxs)(t.td,{children:["Select the ",(0,r.jsx)(t.strong,{children:"Enabling the checkbox will allow this blueprint to be reserved either as a persistent sandbox with no end time, or as a regular sandbox"})," checkbox to allow this blueprint to be deployed either as a regular time-limited sandbox or as a persistent sandbox with no end time. Persistent blueprints are used for deploying continuous environments with no end time. For details, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/intro/features/persistent-sandboxes",children:"Persistent Sandboxes Overview"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Requires Approval"}),(0,r.jsxs)(t.td,{children:["Select ",(0,r.jsx)(t.strong,{children:"Require users to request approval"})," to require launch approval from the blueprint's approval team, which comprises the blueprint owner and admins by design, but can also include a selected user group in the domain. This is useful for high cost sandboxes or those containing sensitive information.",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(t.strong,{children:"When request is approved or rejected, notify the requester"})}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"When new approval request created, notify the blueprint owner"})," activates approval request notification emails for the owner."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"When new approval request created, notify users with group"})," allows you to add a user group to the domain's approval team. The team members will get a notification email whenever an end-user requests approval to reserve a blueprint, prompting them to ",(0,r.jsx)(t.strong,{children:"Approve"})," or ",(0,r.jsx)(t.strong,{children:"Reject"})," the request."]})]}),(0,r.jsx)(t.strong,{children:"Note:"})," If you do not plan on using the Approval Request feature, you can hide its elements from your users. This is done by disabling the ",(0,r.jsx)(t.code,{children:"EnableApprovals"})," configuration key."]})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Click Update."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>l});var r=s(11504);const n={},i=r.createContext(n);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);