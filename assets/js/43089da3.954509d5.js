"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[18064],{15432:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(17624),t=s(4552);const r={},o="Blueprint Workspace",a={id:"portal/blueprints/blueprint-workspace/index",title:"Blueprint Workspace",description:"The workspace enables you to create and configure your blueprint. This includes adding available resources, Apps, services and connectivity requirements, and configuring their settings for the blueprint. You can also view or update the blueprint's properties (depending on your permissions).",source:"@site/docs/portal/blueprints/blueprint-workspace/index.md",sourceDirName:"portal/blueprints/blueprint-workspace",slug:"/portal/blueprints/blueprint-workspace/",permalink:"/cloudshell-help/next/portal/blueprints/blueprint-workspace/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/blueprints/blueprint-workspace/index.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Opening Blueprints",permalink:"/cloudshell-help/next/portal/blueprints/opening-blueprints"},next:{title:"Blueprint List View",permalink:"/cloudshell-help/next/portal/blueprints/blueprint-workspace/blueprint-list-view"}},l={},d=[{value:"Navigating the blueprint workspace",id:"navigating-the-blueprint-workspace",level:2},{value:"Blueprint Diagram view",id:"blueprint-diagram-view",level:3},{value:"Blueprint List view",id:"blueprint-list-view",level:3},{value:"Reserve a blueprint from the blueprint workspace",id:"reserve-a-blueprint-from-the-blueprint-workspace",level:2},{value:"Request approval to reserve a blueprint",id:"request-approval-to-reserve-a-blueprint",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"blueprint-workspace",children:"Blueprint Workspace"}),"\n",(0,i.jsx)(n.p,{children:"The workspace enables you to create and configure your blueprint. This includes adding available resources, Apps, services and connectivity requirements, and configuring their settings for the blueprint. You can also view or update the blueprint's properties (depending on your permissions)."}),"\n",(0,i.jsx)(n.h2,{id:"navigating-the-blueprint-workspace",children:"Navigating the blueprint workspace"}),"\n",(0,i.jsx)(n.p,{children:"In the image below, hover over an area or option to learn more about it, or use the table that follows."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(13220).c+"",width:"1627",height:"933"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"The workspace's areas are arranged as follows:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The canvas displays the different resources, services and Apps in the blueprint and enables you to perform different actions on the blueprint and its elements. |"}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Blueprint"})," menu enables you to view the blueprint's properties, save the blueprint as a template and export it as a package. |"]}),"\n",(0,i.jsx)(n.li,{children:"The blueprint's display name. Click the name to change. |"}),"\n",(0,i.jsx)(n.li,{children:"The blueprint's current privacy setting. Click the button to change. |"}),"\n",(0,i.jsx)(n.li,{children:"Click to reserve the blueprint. Other users in this domain can see and access public blueprints while private blueprints are accessible only to you and the blueprint's permitted users, if you defined any."}),"\n"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'This option is not available in blueprints defined as "view-only."'})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"The workspace view mode. Diagram view provides a graphical representation of the blueprint. List view displays the blueprint's elements in a list. You can filter the list using the search field and sort the list by clicking the desired column name."}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Resource"}),", ",(0,i.jsx)(n.strong,{children:"App / Service"}),", or ",(0,i.jsx)(n.strong,{children:"Abstract"})," button to add the suitable resource to your blueprint."]}),"\n",(0,i.jsxs)(n.li,{children:["Review the blueprint\u2019s instructions. This option is available only if the blueprint has instructions. See ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/review-sandbox-instructions",children:"Review Sandbox Instructions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Review the blueprint's commands. CloudShell's blueprint template includes preconfigured setup and teardown commands. See ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/run-commands#blueprint-commands",children:"Blueprint commands"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Show the diagram in a mini-map on the workspace. You can drag the map to change the view in the workspace."}),"\n",(0,i.jsx)(n.li,{children:"Zoom in or out of the workspace."}),"\n",(0,i.jsx)(n.li,{children:"Enter the zoom percentage. Default is 100%."}),"\n",(0,i.jsxs)(n.li,{children:["Displays all the blueprint workspace tools and options in a pane.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Displays the ",(0,i.jsx)(n.strong,{children:"Add Resource"})," pane, where you can search for resources in the inventory and add them to the blueprint."]}),"\n",(0,i.jsxs)(n.li,{children:["Displays the ",(0,i.jsx)(n.strong,{children:"Add App/Service"})," pane, where you can search for apps or services in the inventory and add them to the blueprint."]}),"\n",(0,i.jsxs)(n.li,{children:["Displays the ",(0,i.jsx)(n.strong,{children:"Add Abstract Resource"})," pane, where you can search for abstract resources in the inventory and add them to the blueprint."]}),"\n",(0,i.jsx)(n.li,{children:"Displays the Instruction sidebar that is fully customizable and explains the concepts and usage of the blueprint to the end user."}),"\n",(0,i.jsx)(n.li,{children:"Displays the blueprint commands attached to resources. Commands can be used to orchestrate sandbox-level operations."}),"\n",(0,i.jsx)(n.li,{children:"Displays a mini-map of the diagram on the workspace. You can drag the map to change the view in the workspace."}),"\n",(0,i.jsxs)(n.li,{children:["Displays the ",(0,i.jsx)(n.strong,{children:"Connections Legend"}),", showing the different connection types."]}),"\n",(0,i.jsx)(n.li,{children:"Options to change the size of the icons in the workspace."}),"\n",(0,i.jsx)(n.li,{children:"Position elements in the diagram to the closest intersection of the grid."}),"\n",(0,i.jsx)(n.li,{children:"Use these options to arrange the elements in the diagram."}),"\n",(0,i.jsx)(n.li,{children:"Save the current diagram layout as the default for this blueprint."}),"\n",(0,i.jsx)(n.li,{children:"Reverts to the previous snapshot of the diagram layout that was previously saved. Note: Saving the layout of a sandbox will not affect the original blueprint. Saving a new layout for a blueprint will not affect any existing sandboxes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Displays labels that are currently being used in the diagram. See ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/labels",children:"Labels in Blueprints"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"blueprint-diagram-view",children:"Blueprint Diagram view"}),"\n",(0,i.jsx)(n.p,{children:"Diagram view is the default view for the blueprint. It enables you to add and arrange elements in your blueprint, such as resources and Apps, define connectivity requirements between these elements, and set the blueprint's properties, including description, image, blueprint categories, orchestration, instructions and inputs."}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.strong,{children:"Diagram"})," view you can also view blueprint and resource commands."]}),"\n",(0,i.jsx)(n.p,{children:":::tip:\nTo move or delete multiple elements at once, hold down the [Ctrl] key, select the elements and perform the suitable action.\n:::"}),"\n",(0,i.jsx)(n.h3,{id:"blueprint-list-view",children:"Blueprint List view"}),"\n",(0,i.jsx)(n.p,{children:"List view displays the blueprint's elements and their sub-resources in a list."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/blueprint-workspace/blueprint-list-view",children:"Blueprint List View"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"reserve-a-blueprint-from-the-blueprint-workspace",children:"Reserve a blueprint from the blueprint workspace"}),"\n",(0,i.jsx)(n.p,{children:"When reserving a blueprint, you can define certain properties of the sandbox and may need to provide information for resource provisioning and automation processes."}),"\n",(0,i.jsxs)(n.p,{children:["If there's a resource or scheduling conflict, CloudShell will offer available time slots for the sandbox. For additional information about sandboxes and reservation conflicts, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/creating-sandboxes",children:"Creating Sandboxes"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Blueprints of type \u2018view\u2019 cannot be reserved."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To create an immediate or future sandbox:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Blueprint Catalog, on the required blueprint tile, click Reserve. Alternatively, in the blueprint workspace, click the Reserve button."}),"\n",(0,i.jsxs)(n.p,{children:["The Reserve dialog box is displayed.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:s(63984).c+"",width:"704",height:"337"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The timezone for the sandbox is indicated in the title of the Reserve dialog box."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the blueprint is defined as a persistent blueprint, select the Sandbox Type you want to deploy:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(85052).c+"",width:"702",height:"390"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Regular Sandbox to spin up a time-limited sandbox"}),"\n",(0,i.jsxs)(n.li,{children:["Persistent Sandbox to deploy a persistent sandbox with no end time. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/intro/features/persistent-sandboxes",children:"Persistent Sandboxes Overview"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Schedule field, you can set the required sandbox duration or specify the explicit start and/or end time. Use the Calendar button to set future dates."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Most of the scheduling options are disabled for persistent blueprints."}),"\n",(0,i.jsx)(n.li,{children:"For non-persistent sandboxes, if a maximum duration was set for the sandbox, the user will not be able to reserve for a duration beyond this setting."}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["(Unavailable for persistent blueprints) To have this sandbox repeat in a series, click Add Recurrence. If this option is missing, the admin needs to enable it using the ",(0,i.jsx)(n.code,{children:"EnableRecurringReservation"})," key."]}),"\n",(0,i.jsx)(n.p,{children:"The Recurrence page is displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(4984).c+"",width:"702",height:"568"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"To have the sandbox repeat on specific days, click the Pattern field and either select the days or select Daily to have the sandbox repeat on all days of the week."}),"\n",(0,i.jsx)(n.li,{children:"In the Range field, define the period in which the sandbox will repeat."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally, change the Name of the sandbox. By default, the new sandbox name is the blueprint name."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The sandbox\u2019s name has a limit of 60 characters."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Blueprint field, you can see the blueprint on which the sandbox is based."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To specify additional options, click the\xa0",(0,i.jsx)(n.strong,{children:"Advanced Form"})," ",(0,i.jsx)(n.img,{src:s(73739).c+"",width:"28",height:"30"})," button."]}),"\n",(0,i.jsx)(n.p,{children:"The\xa0advanced form\xa0enables you to configure the email notifications, permissions and other options."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(38684).c+"",width:"702",height:"721"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally, enter a Description. Otherwise, the description of the sandbox will default to the blueprint description."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To define an owner for the sandbox, click the Owner and select the required user. By default, the user who initiated the scheduling action is set as the sandbox owner."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Instead of changing the owner of the sandbox, you can permit additional users to use the sandbox. Click the Permitted Users section and select the users you wish to add."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To prevent users from ending the sandbox before its scheduled end time, enable Termination Protection. This option ensures your sandbox isn't ended accidentally or prematurely. And when you are ready to manually end the sandbox, disable the option in the sandbox's properties window and then end it."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You can configure CloudShell to send email notifications to the owner of the sandbox and permitted users."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This capability requires the administrator to activate the email notifications feature using the ",(0,i.jsx)(n.code,{children:"ReservationEmail"})," configuration keys."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Email Notifications"})," field."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Email Notifications"})," area expands."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(86e3).c+"",width:"668",height:"227"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure the email notification settings."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"On start"})," - Sends notification as the sandbox starts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"On setup complete"})," - Sends notification when the sandbox setup completes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Before end"})," - (Unavailable for persistent blueprints) Sends notification before the Teardown process begins. The exact time is decided by the user.","\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["By default, it is not possible to launch a sandbox that has a shorter duration than the Before end period. However, your admin can enable this capability using the ",(0,i.jsx)(n.code,{children:"ReservationEmail.VerifyNotificationBeforeEndLongerThanDuration"})," configuration key."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"On end"})," - Sends when the sandbox ends."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the blueprint has inputs (global inputs, published abstract resource or service inputs), you will be asked to provide them."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To expand the value area, click and drag down the icon in the bottom right corner of the frame.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:s(67276).c+"",width:"702",height:"271"})]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Reserve"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The sandbox is being reserved."}),"\n",(0,i.jsxs)(n.p,{children:["If you are reserving a blueprint that has the ",(0,i.jsx)(n.strong,{children:"Default Sandbox Setup"})," script, the script runs, and an indication next to the sandbox state informs you of its progress."]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Setup process details"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(38421).c+"",width:"566",height:"182"})}),(0,i.jsxs)(n.p,{children:["Note that during the Setup process, the sandbox is locked in CloudShell Portal and cannot be modified - see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#unlocking-sandboxes-for-use-during-the-setup-process",children:"Unlocking sandboxes for use during the Setup process"}),"."]}),(0,i.jsx)(n.p,{children:"The default setup process has 4 stages:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Preparation"})," - Prepare network connections for the sandbox's Apps and any additional custom preparations."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This stage is not used by default, but can be used for custom code executions that need to run before the setup process."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Provisioning"})," - This is the main stage of the setup process. In this stage, CloudShell locks unshared resources for the duration of the sandbox, deploys the sandbox's Apps and prepares App connectivity in the respective cloud providers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Connectivity"})," - CloudShell creates the physical and virtual network connections for the sandbox's resources and Apps, and powers on the App VMs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configuration"})," - If any of the sandbox's Apps have configuration management operations that need to be run, CloudShell runs them in this stage."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["If any resource is unavailable for the scheduled time slot, the Conflicts dialog box is displayed, proposing an alternative time slot, as described in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/creating-sandboxes#dealing-with-conflicts",children:"Dealing with conflicts"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The new sandbox is displayed in ",(0,i.jsx)(n.strong,{children:"Diagram"})," view with a blue Sandbox label at the top of the canvas and a green Active icon in the toolbar:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(44604).c+"",width:"1057",height:"128"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For persistent blueprints, the blue ",(0,i.jsx)(n.strong,{children:"Sandbox"})," label is replaced with a ",(0,i.jsx)(n.strong,{children:"Persistent Environment"})," label."]})}),"\n",(0,i.jsxs)(n.p,{children:["If you have a license for the Save and Restore paid add-on, you will see a Save Sandbox button. For more information, see the ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-save-and-restore-overview",children:"Sandbox Save and Restore Overview"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-approval-to-reserve-a-blueprint",children:"Request approval to reserve a blueprint"}),"\n",(0,i.jsxs)(n.p,{children:["Some blueprints require a moderator's approval. This usually applies to high-cost blueprints or those using critical infrastructure. Such blueprints have a ",(0,i.jsx)(n.strong,{children:"Request"})," button instead of the traditional ",(0,i.jsx)(n.strong,{children:"Reserve"})," one. For details, see ",(0,i.jsx)(n.a,{href:"../../intro/features/blueprint-approval-policy",children:"Blueprint Approval Policy"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Admins and blueprint owners have full permissions on their blueprints and can therefore reserve their approval blueprints without going through the approval process."})}),"\n",(0,i.jsx)(n.p,{children:"To request approval:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Blueprint Catalog"}),", click the blueprint's ",(0,i.jsx)(n.strong,{children:"Request"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(57740).c+"",width:"604",height:"463"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Request Approval"})," dialog box is displayed."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(26556).c+"",width:"632",height:"595"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in the details. The ",(0,i.jsx)(n.strong,{children:"Approval Validity"})," period defines the time frame in which you plan to create the sandbox, and the ",(0,i.jsx)(n.strong,{children:"Max Sandbox Duration"})," defines the maximum period of the sandbox to be created. Enable ",(0,i.jsx)(n.strong,{children:"Unlimited Request"})," to set a validity period with no end time."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once the request is approved, you will be able to start the sandbox at any time within the period as long as the sandbox also ends within the alloted time frame."}),"\n",(0,i.jsx)(n.li,{children:"The approval applies to a single sandbox reservation. In other words, you cannot start the sandbox, end it and start a new one on the same approval."}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Optionally enter ",(0,i.jsx)(n.strong,{children:"Notes"})," relating to the request."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the blueprint has published inputs, specify their values."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Request Approval"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"An approval request is logged in the Approval Requests page, and a notification email is sent to the blueprint's approvers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(52668).c+"",width:"1213",height:"289"})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},26556:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ApprovalRequestForm-07dfd99e7c018a6a578af2091c660671.png"},52668:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ApprovalRequestsPage-97e1a352bcc084ed9feb701a9c99ff02.png"},13220:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/BlueprintWorkspace-984b4b10dd7da96f1b4ac159c83a9e57.png"},57740:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/RequestApprovalButton-e5a4d7a678efbfcc65a4dcf276733961.png"},63984:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ReserveBlueprint-ba9eca8d1a9ac5b700b989dd5790acd5.png"},85052:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ReservePersistent-6443522a1e73574920c4fc829b228050.png"},44604:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ActiveSandbox-d87e0c96c667c968ba0a6db24a9cd2f3.png"},73739:(e,n,s)=>{s.d(n,{c:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAIAAACwp+nIAAAAAXNSR0IArs4c6QAAAghJREFUSEvtVktLAlEU7s6MpYmWFlqYQUE+UgsKezhGm2jXpn3/MtpEaZHRw3xQqx4ILaKl9jAbnZk+HRhHZ65KtImSg8jcc79zznfO+Uaytb3T99Mf5qcB63h/HJT1B+dVWkVRqtVq+O7R6vQxBgQStfuiKE56PYGAD7i9dI/j2ELh8fbugeO4Nv8maLVaDYUC/GoU6IbxtTclSYZPLn9zcZnt7ze1gWqDELnhmr7K3z8U9PE1LIkez/gavyzLsmFN7YwQQiqVz2LxtVSiGk7L7x/wpLFkRDMB/QTGsozelCPCUBERqZ1jNTgo3txYHx0dkSRJeYjU3t7ed/f28bNzJ6mgJpPpIHGivwyuMXWdQalriibY7TaHY1hrQ0N2WnO0YaigSGcuMrsWX+FjS4rF+eXFhXnsRdcpppaP6UskUyqhKq1m88D3y8cKTE9NRsKBcMivWCTs981MY+y7ZkotH5edTseY2+V2qebGMMhy9/KpoFjtTPb6MJlKHp8qljhKnV9kWJb9TqaQKUH4FAShkRSKbRqe4DlOITqEPq1aQanNBn18LPr09FwsvXTQFEyV1TronfBAUC7TOb2gtKhUJByM80tobleVAi58srnrs/NMJ1D4WSwWm83ay3grW1suf2Bx9crSzBR+gJMoambYHMBBW/RHLd2HE8swvZsh4v8r+vf8Q/kCk7kjDDDlI7IAAAAASUVORK5CYII="},67276:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/InputBoxExpand-55f8fdaa4b2ebf9f1ad2269e3e6659e0.png"},4984:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/RecurrenceWindow1-4101b3fbe4c9926e141463e2455e0756.png"},38684:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ReserveBlueprintPane-078f14363ee3ec10e8def221ab5df292.png"},86e3:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ReservePaneEmailNotificaions-7011e5966ed51074941ce7776b0a7eb7.png"},38421:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/SetupStageConfiguration-928549b80291243c465518c734f1179e.png"},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>o});var i=s(11504);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);