"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[51288],{7676:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var s=n(17624),t=n(4552);const o={sidebar_position:7},a="Email Notifications Overview",d={id:"intro/features/email-notifications",title:"Email Notifications Overview",description:"CloudShell admins can configure CloudShell to send notification emails at different stages during the lifecycle of CloudShell sandboxes and/or automation suites. To use email notifications, perform SMTP mail configuration and set the appropriate sandbox lifecycle key(s) and/or automation suite notification.",source:"@site/versioned_docs/version-2023.3/intro/features/email-notifications.md",sourceDirName:"intro/features",slug:"/intro/features/email-notifications",permalink:"/cloudshell-help/intro/features/email-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/intro/features/email-notifications.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Connectivity Overview",permalink:"/cloudshell-help/intro/features/connectivity"},next:{title:"Persistent Sandboxes Overview",permalink:"/cloudshell-help/intro/features/persistent-sandboxes"}},l={},r=[{value:"Automation suite notifications",id:"automation-suite-notifications",level:2},{value:"Sandbox lifecycle notifications",id:"sandbox-lifecycle-notifications",level:2},{value:"Sandbox notification defaults",id:"sandbox-notification-defaults",level:3},{value:"Admin override keys",id:"admin-override-keys",level:3},{value:"Additional sandbox notifications",id:"additional-sandbox-notifications",level:3},{value:"Email notifications for all sandbox events to specific email addresses",id:"email-notifications-for-all-sandbox-events-to-specific-email-addresses",level:3},{value:"Customizing email notifications",id:"customizing-email-notifications",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"email-notifications-overview",children:"Email Notifications Overview"}),"\n",(0,s.jsxs)(i.p,{children:["CloudShell admins can configure CloudShell to send notification emails at different stages during the lifecycle of CloudShell sandboxes and/or automation suites. To use email notifications, perform ",(0,s.jsx)(i.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/admin-config-settings#smtp-mail-configuration",children:"SMTP mail configuration"})," and set the appropriate sandbox lifecycle key(s) and/or automation suite notification."]}),"\n",(0,s.jsx)(i.p,{children:"For example, a sandbox termination notification:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(35748).c+"",width:"1243",height:"583"})}),"\n",(0,s.jsx)(i.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"CloudShell sends notification emails to the email defined in the CloudShell user's profile."}),"\n",(0,s.jsx)(i.li,{children:"The time stamp on the emails is in the time zone of the recipient. In the event of multiple recipients in different time zones, CloudShell will send a different email to each time zone's recipients."}),"\n"]})}),"\n",(0,s.jsx)(i.h2,{id:"automation-suite-notifications",children:"Automation suite notifications"}),"\n",(0,s.jsxs)(i.p,{children:["Suite notifications are configured per suite, in the ",(0,s.jsx)(i.strong,{children:"Email Notifications"})," drop-down list. The recipient is the user that executed the automation suite. For additional information, see ",(0,s.jsx)(i.a,{href:"/cloudshell-help/portal/job-scheduling/manage-automation-suites/add-suites",children:"Add a new automation suite"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"sandbox-lifecycle-notifications",children:"Sandbox lifecycle notifications"}),"\n",(0,s.jsxs)(i.p,{children:["Sandbox lifecycle notifications include notifications for the different sandbox lifecycle events including ",(0,s.jsx)(i.strong,{children:"On start"}),", ",(0,s.jsx)(i.strong,{children:"On setup complete"})," (active) and ",(0,s.jsx)(i.strong,{children:"On end"}),", and calendar invites for future reservations or extended sandboxes."]}),"\n",(0,s.jsxs)(i.p,{children:["These notifications are set using the configuration keys listed in the following sections. To set any of these configuration keys, copy the appropriate key from this article to the ",(0,s.jsx)(i.code,{children:"\\QualiSystems\\CloudShell\\Server\\customer.config"})," file and restart the Quali Server service."]}),"\n",(0,s.jsx)(i.h3,{id:"sandbox-notification-defaults",children:"Sandbox notification defaults"}),"\n",(0,s.jsxs)(i.p,{children:["These keys define the email notification defaults for new sandboxes. The recipient of each notification is mentioned below, but you can configure CloudShell to also send these notifications to admins and specific email addresses, as explained in the ",(0,s.jsx)(i.a,{href:"#admin-override-keys",children:"Admin override keys"})," section below."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"On start"})," (when the sandbox is reserved):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.SendNotificationOnStart" value="True"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"On setup completion"})," (when the sandbox's setup phase completes, provided in CloudShell 9.3):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.SendNotificationOnSetupComplete" value="True"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Time to Teardown"})," (when teardown is scheduled to start): For details about this notification, see the Admin override keys section below."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Before end"})," (x minutes before the sandbox's teardown phase starts):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.NotificationMinutesBeforeEnd" value="10"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"On end"})," (when the sandbox ends):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.SendNotificationOnEnd" value="True"/>'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Note that the sandbox end-user can change the defaults in the ",(0,s.jsx)(i.strong,{children:"Email Notifications"})," section of the sandbox's ",(0,s.jsx)(i.strong,{children:"Reserve"}),", ",(0,s.jsx)(i.strong,{children:"Restore"})," or ",(0,s.jsx)(i.strong,{children:"Update"})," forms."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(86e3).c+"",width:"668",height:"227"})}),"\n",(0,s.jsx)(i.h3,{id:"admin-override-keys",children:"Admin override keys"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Email notifications for all sandbox events to admins/domain admins:"})}),"\n",(0,s.jsx)(i.p,{children:"These keys determine if the admin/domain admin receives an email notification for notifications that were enabled in sandboxes by the users who launched them."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.NotifySystemAdmins" value="True"/>'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.NotifyDomainAdmins" value="True"/>'})}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["To disable admin notifications for sandbox events, set the ",(0,s.jsx)(i.code,{children:"ReservationEmail.Notify"})," key(s) as well as the appropriate ",(0,s.jsx)(i.code,{children:"ReservationEmail.Override"})," keys to ",(0,s.jsx)(i.strong,{children:"False"}),". For details, see ",(0,s.jsx)(i.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#disabling-admin-email-notifications",children:"Disabling admin email notifications"}),"."]})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Email notifications for specific sandbox events:"})}),"\n",(0,s.jsx)(i.p,{children:"These keys determine if the admins receive a notification for specific sandbox events regardless if these notifications were enabled/disabled in a specific sandbox."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"On Start"})," (when the sandbox is reserved):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.OverrideSendNotificationOnStart" value="True"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"On setup complete"})," (when the sandbox's setup phase completes, provided in CloudShell 9.3):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.OverrideSendNotificationOnSetupComplete" value="True"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Before end"})," (x minutes before the sandbox is scheduled to end):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.OverrideSendNotificationBeforeEnd" value="True"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Time to Teardown"})," (when teardown is scheduled to start, sent at the start of the sandbox; recipients are the admins and domain admins):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.SendNotificationBeforeEnd" value="True"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"On end"})," (when the sandbox ends):"]}),"\n",(0,s.jsxs)(i.p,{children:["Key: ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.OverrideSendNotificationOnEnd" value="True"/>'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"additional-sandbox-notifications",children:"Additional sandbox notifications"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Send calendar invite for future sandboxes"})," (recipient is the owner of the sandbox):"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'<add key="SendEmailForFutureReservations" value="True"/>'})}),"\n",(0,s.jsxs)(i.p,{children:["Note that the sandbox end-user can also manually create a calendar invite, as explained in ",(0,s.jsx)(i.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/create-cal-event-for-sandbox",children:"Create a Calendar Event for a Sandbox"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Disable calendar invites for extended/cancelled sandboxes"})," (recipient is the admin): By default, CloudShell sends an email notification whenever the user extends a sandbox or cancels a future sandbox. To disable this behavior, set these keys:"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.SendNotificationOnReschedule" value="False"/>'})," and ",(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.OverrideSendNotificationOnRescheduled" value="False"/>'})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"New permitted user notification"})," (recipients are the permitted users): When adding permitted users to an active sandbox, those users will receive both a notification email informing them of the addition and any other email notifications defined in the sandbox. The notification is only sent if the sandbox has any notifications enabled. This behavior is provided out-of-the-box in CloudShell 9.3."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"email-notifications-for-all-sandbox-events-to-specific-email-addresses",children:"Email notifications for all sandbox events to specific email addresses"}),"\n",(0,s.jsx)(i.p,{children:"This key enables CloudShell to send sandbox event notifications to a list of email addresses (comma-separated)."}),"\n",(0,s.jsx)(i.p,{children:"For example:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'<add key="ReservationEmail.RecipientsToNotify" value="john.s@company.com;mate.b@company.com"/>'})}),"\n",(0,s.jsx)(i.h2,{id:"customizing-email-notifications",children:"Customizing email notifications"}),"\n",(0,s.jsxs)(i.p,{children:["CloudShell email notifications are based on HTML templates, which can be customized as appropriate. For details, see ",(0,s.jsx)(i.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates",children:"Customizing Email Notification Templates"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#registration-passwords-emails-and-licenses",children:"Registration, passwords, emails, and licenses"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},35748:(e,i,n)=>{n.d(i,{c:()=>s});const s=n.p+"assets/images/EmailNotificationExample-8657d044bbcfd38d96e61ea203720530.png"},86e3:(e,i,n)=>{n.d(i,{c:()=>s});const s=n.p+"assets/images/ReservePaneEmailNotificaions-7011e5966ed51074941ce7776b0a7eb7.png"},4552:(e,i,n)=>{n.d(i,{I:()=>d,M:()=>a});var s=n(11504);const t={},o=s.createContext(t);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);