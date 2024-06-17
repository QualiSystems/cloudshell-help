"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[80856],{28040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(17624),s=t(4552);const a={sidebar_position:7},d="Maintenance Window",o={id:"admin/cloudshell-manage-dashboard/maintenance-window",title:"Maintenance Window",description:"About the maintenance window",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/maintenance-window.md",sourceDirName:"admin/cloudshell-manage-dashboard",slug:"/admin/cloudshell-manage-dashboard/maintenance-window",permalink:"/admin/cloudshell-manage-dashboard/maintenance-window",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/maintenance-window.md",tags:[],version:"2023.3",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Execution Servers - Commands Queue Page",permalink:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-commands-queue-page"},next:{title:"Blueprint Templates",permalink:"/admin/cloudshell-manage-dashboard/blueprint-templates"}},r={},l=[{value:"About the maintenance window",id:"about-the-maintenance-window",level:2},{value:"Setting a maintenance window",id:"setting-a-maintenance-window",level:2},{value:"Navigating the maintenance window",id:"navigating-the-maintenance-window",level:2},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"maintenance-window",children:"Maintenance Window"}),"\n",(0,i.jsx)(n.h2,{id:"about-the-maintenance-window",children:"About the maintenance window"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Maintenance Window"})," allows system admins to schedule and notify users of an immediate or upcoming system-wide maintenance. For example, to perform an upgrade or any other preventive maintenance that could cause disruption of service. During the maintenance window, only system administrators and domain administrators can log in to CloudShell, schedule and work in sandboxes, and launch jobs."]}),"\n",(0,i.jsx)(n.p,{children:"The maintenance window is system-wide and applies to all domains."}),"\n",(0,i.jsxs)(n.p,{children:["If a non-admin user attempts to log in during this period, they will get a canned message. If they are logged in when the maintenance window starts, they will be logged-out and redirected to the login page and presented with the ",(0,i.jsx)(n.strong,{children:"Message on Login"})," message."]}),"\n",(0,i.jsx)(n.p,{children:"Additional points to consider when a maintenance window is defined:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sandboxes scheduled before the maintenance window will run as usual even if they overlap with the maintenance window. Admin users can view all sandboxes scheduled for the maintenance window duration, by clicking the ",(0,i.jsx)(n.strong,{children:"Go to Sandboxes"})," button. See the ",(0,i.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/maintenance-window#navigating-the-maintenance-window",children:"Navigating the maintenance window"})," section."]}),"\n",(0,i.jsx)(n.li,{children:"If a regular user reserves or restores a sandbox that starts or ends outside the maintenance window, the sandbox will be reserved or restored as usual. Users are warned that they will not have access to the sandbox during the maintenance period."}),"\n",(0,i.jsx)(n.li,{children:"Admins can run automation suites during the maintenance window."}),"\n",(0,i.jsx)(n.li,{children:"Reserving a recurring sandbox is blocked if all the occurrences start or end during the maintenance window. Otherwise, the sandbox will start as usual."}),"\n",(0,i.jsx)(n.li,{children:"You cannot change the timeslot of a reservation that falls within the maintenance window."}),"\n",(0,i.jsx)(n.li,{children:"Automation suite jobs moved to the scheduled queue after the maintenance window was created will run as usual unless they overlap the maintenance window. If this occurs, they will run after the maintenance window."}),"\n",(0,i.jsx)(n.li,{children:"Automation suite jobs that were set to run automatically before the maintenance window was created or during the period in which the maintenance window was extended will fail if they overlap with the maintenance window."}),"\n",(0,i.jsx)(n.li,{children:"API: non-admin users cannot create a new session during a maintenance window. If they are in the middle of a session, the session will not be terminated, but they will be logged out on the session timeout."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-a-maintenance-window",children:"Setting a maintenance window"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Maintenence Window"})," page is only displayed for system administrators in the ",(0,i.jsx)(n.strong,{children:"Global"})," domain."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To set a maintenance window:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["As system administrator, access the ",(0,i.jsx)(n.strong,{children:"Global"})," domain."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the page navigation bar, click ",(0,i.jsx)(n.strong,{children:"Maintenance Window"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Add New Maintenance Window"})," button."]}),"\n",(0,i.jsx)(n.p,{children:"The maintenance window is created."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enter the required information in the dialog box, as explained below."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"navigating-the-maintenance-window",children:"Navigating the maintenance window"}),"\n",(0,i.jsxs)(n.p,{children:["In the image below, hover over an area or option to learn more about it, or use the table that follows. You can edit any of the messages presented in the ",(0,i.jsx)(n.strong,{children:"Maintenance Window"}),". Click ",(0,i.jsx)(n.strong,{children:"Save"})," to apply your changes."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(15680).c+"",width:"624",height:"501"})}),"\n",(0,i.jsx)(n.p,{children:"The maintenance window's areas are arranged as follows:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\xa0"}),(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Add New Maintenance Window"}),(0,i.jsx)(n.td,{children:"Click this button to define a maintenance window. You can have only one active maintenance window at any time."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Status"}),(0,i.jsxs)(n.td,{children:["A maintenance window can be:",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"NEW"})," - new maintenance window which was not saved yet"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"ACTIVE"})," - maintenance window has started but has not ended"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"PLANNED"})," - maintenance window is scheduled to start at a future time"]})]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Schedule"}),(0,i.jsxs)(n.td,{children:["Define the maintenance period. You can start the maintenance window now or at a future time, and set the duration.",(0,i.jsx)("br",{}),"You can extend or stop a maintenance window by editing this section."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Go to Sandboxes"}),(0,i.jsx)(n.td,{children:"Click this button to show the sandboxes that are scheduled to run during the maintenance timeframe. Feel free to inform the sandbox owners that they will not have access to these sandboxes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"Show Notification"}),(0,i.jsxs)(n.td,{children:["Define how long before the maintenance window's start time to show the ",(0,i.jsx)(n.strong,{children:"Notification message"}),".",(0,i.jsx)("br",{}),"If you do not configure this setting, CloudShell Portal will not notify users prior to the beginning of the maintenance window."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"Notification Message"}),(0,i.jsxs)(n.td,{children:["The message shown to all users for the period defined in ",(0,i.jsx)(n.strong,{children:"Show notification"})," prior to the maintenance window start time.",(0,i.jsx)("br",{}),"The notification is shown in the upper right hand corner of the screen as follows during the defined period:",(0,i.jsx)("br",{}),(0,i.jsx)(n.img,{src:t(68397).c+"",width:"735",height:"268"}),(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," During the maintenance window, the contents of the tooltip change to the ",(0,i.jsx)(n.strong,{children:"Message on login"}),", and are visible only to system and domain admins."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"Message on Login"}),(0,i.jsx)(n.td,{children:"The message shown to all users who try to log in to CloudShell Portal during the maintenance window. For system and domain admin users, CloudShell Portal also shows this message during the maintenance period."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"Error on Reserve"}),(0,i.jsx)(n.td,{children:"The message shown to non-admin users who try in advance to create a sandbox that starts or ends within the maintenance window."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"Warning on Reserve"}),(0,i.jsxs)(n.td,{children:["The message shown to non-admin users who try in advance to create a sandbox that starts and ends outside the maintenance window. The user is presented with the option to either ",(0,i.jsx)(n.strong,{children:"Continue"})," or ",(0,i.jsx)(n.strong,{children:"Cancel"}),". If they select to continue, the sandbox will be created and remain active during the maintenance period, but it will be inaccessible.",(0,i.jsx)("br",{}),"In the API, there is no warning, and the action is allowed."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"Delete button"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"PLANNED"})," or ",(0,i.jsx)(n.strong,{children:"NEW"})," state: deletes the maintenance window"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"ACTIVE"})," state: ends and deletes the maintenance window"]})]})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/manage-dashboard-overview",children:"Manage Dashboard Overview"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},15680:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/MaintenanceWindow_624x501-f930d679fdcebc69e3adec8bbcdf5215.png"},68397:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/NotificationMessage-e32b85e437b6cc62c4f41af47163981e.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>d});var i=t(11504);const s={},a=i.createContext(s);function d(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);