"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[77464],{93540:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=n(17624),r=n(4552);const t={sidebar_position:2},l="Managing CloudShell Users",o={id:"admin/cloudshell-identity-management/managing-users/managing-cloudshell-users",title:"Managing CloudShell Users",description:"The following user management options are performed in the Users tab in the Resource Manager. To access the Users tab, in the Admin ribbon, click the Users button.",source:"@site/docs/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users.md",sourceDirName:"admin/cloudshell-identity-management/managing-users",slug:"/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CloudShell Users and Groups Overview",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/cloudshell-users-and-groups-overview"},next:{title:"Updating User Settings",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/updating-user-settings"}},d={},a=[{value:"Adding new users manually",id:"adding-new-users-manually",level:2},{value:"Importing users into CloudShell from an active directory",id:"importing-users-into-cloudshell-from-an-active-directory",level:2},{value:"Importing users from an active directory group",id:"importing-users-from-an-active-directory-group",level:3},{value:"Importing active directory users from a file",id:"importing-active-directory-users-from-a-file",level:3},{value:"Enabling CloudShell to automatically import Active Directory users when they first log in",id:"enabling-cloudshell-to-automatically-import-active-directory-users-when-they-first-log-in",level:3},{value:"Updating user settings",id:"updating-user-settings",level:2},{value:"Changing a user&#39;s password",id:"changing-a-users-password",level:2},{value:"Deleting users",id:"deleting-users",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"managing-cloudshell-users",children:"Managing CloudShell Users"}),"\n",(0,i.jsxs)(s.p,{children:["The following user management options are performed in the ",(0,i.jsx)(s.strong,{children:"Users"})," tab in the Resource Manager. To access the ",(0,i.jsx)(s.strong,{children:"Users"})," tab, in the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, click the ",(0,i.jsx)(s.strong,{children:"Users"})," button."]}),"\n",(0,i.jsx)(s.h2,{id:"adding-new-users-manually",children:"Adding new users manually"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To add a new user manually:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Log in to ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,i.jsx)(s.strong,{children:"Users"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"New"}),". The ",(0,i.jsx)(s.strong,{children:"New User"})," dialog box is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Fill in the settings:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Username"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Password"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Email"}),": user's email that will receive email notifications and messages from other users regarding sandboxes."]}),"\n",(0,i.jsx)(s.admonition,{title:"Notes:",type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The user can change their email in CloudShell Portal."}),"\n",(0,i.jsxs)(s.li,{children:["To enable email notifications, ",(0,i.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/admin-config-settings#smtp-mail-configuration",children:"SMTP mail configuration"})," is required."]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Administrator"}),": Select to grant the user System Administrator permissions."]}),"\n",(0,i.jsxs)(s.p,{children:["System administrators are the most privileged users in CloudShell. They can access and modify all assets in their domain(s), including private blueprints, create inventory resources and Apps, perform administrative tasks in CloudShell, like managing users, groups and domains, modifying resource families and models, creating and configuring resources in ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"}),", and viewing CloudShell activity logs and utilization reports. Other, less privileged user types are defined by their group's role - see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/managing-cloudshell-groups",children:"Managing CloudShell Groups"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Active"}),": Clear to add the user as an inactive user. This will prevent the user from accessing and using CloudShell but keep the user profile in the system."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Reservation Duration limit"}),": Select the maximum allowed sandbox duration for the user. The default is 1 day, which can be changed using the ",(0,i.jsx)(s.code,{children:"DefaultUserMaxReservationDuration"})," configuration key."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Max Concurrent Reservations"}),": Set the maximum number of sandboxes the user can own at any time."]}),"\n",(0,i.jsxs)(s.p,{children:["The default is 10 scheduled sandboxes for new users, which can be changed using the ",(0,i.jsx)(s.code,{children:"DefaultUserMaxConcurrentReservations"})," configuration key."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Max Scheduled Sandboxes"}),": Set the maximum number of scheduled (planned/future) sandboxes the user can have at any time."]}),"\n",(0,i.jsxs)(s.p,{children:['By default, new users are allowed to have up to 10 scheduled sandboxes while users migrated from a pre-9.3 Patch 2 CloudShell version (via upgrade) have an empty value (unlimited). Value "0" means the user can only start immediate reservations (no scheduled). Admins can change the default using the ',(0,i.jsx)(s.code,{children:"DefaultUserMaxScheduledSandboxes"})," configuration key."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Max Owned Blueprints"}),": (Applies to admins, domain admins and regular users only) Set the maximum of blueprints the user can own at any given time. Unlimited by default."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Max Saved Sandboxes"}),": (Applies to customers using the ",(0,i.jsx)(s.strong,{children:"Save and Restore"})," add-on) Set the maximum number of saved sandboxes the user can have at any time."]}),"\n",(0,i.jsxs)(s.p,{children:["This overrides the default, which is unlimited, and can be changed using the ",(0,i.jsx)(s.code,{children:"DefaultUserMaxSavedSandboxes"})," configuration key."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"importing-users-into-cloudshell-from-an-active-directory",children:"Importing users into CloudShell from an active directory"}),"\n",(0,i.jsxs)(s.p,{children:["The following procedures explain how to import users from your active directory into CloudShell. To enable user import, the ",(0,i.jsx)(s.code,{children:"ActiveDirectory.Domain"})," configuration key needs to be set - see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#configuring-cloudshell-to-import-user-definitions-from-an-active-directory",children:"Configuring CloudShell to import user definitions from an active directory"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Once imported and associated to the relevant CloudShell groups and domains, imported users log into CloudShell using their active directory username and password, and the desired CloudShell domain. In addition, the password of an imported user can only be changed from the active directory itself."}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"}),", in the ",(0,i.jsx)(s.strong,{children:"Users"})," tab, imported users have the ",(0,i.jsx)(s.strong,{children:"Imported"}),' check box selected (illustrated for user "Mika-y" in the image below).']}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(51892).c+"",width:"575",height:"284"})}),"\n",(0,i.jsx)(s.h3,{id:"importing-users-from-an-active-directory-group",children:"Importing users from an active directory group"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"To import users from a specific active directory group"}),":"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Log in to ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,i.jsx)(s.strong,{children:"Users"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Import Users"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Import Users"})," dialog box, select the ",(0,i.jsx)(s.strong,{children:"Group"})," option."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(28932).c+"",width:"491",height:"468"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"Refresh"})," to get a full list of groups that exist in the current domain."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Select the required group from the ",(0,i.jsx)(s.strong,{children:"Group"})," drop down list or leave ",(0,i.jsx)(s.strong,{children:"All Groups"})," to get all users in the active directory."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"Run Query"})," to get the list of users."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Select the users to import. Press the ",(0,i.jsx)(s.strong,{children:"[CTRL]+[A]"})," keys to select all users in the list or press the ",(0,i.jsx)(s.strong,{children:"[CTRL]"})," key to select specific users."]}),"\n",(0,i.jsx)(s.admonition,{title:"Active Directory users are added as follows:",type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"AD First Name field maps to the CloudShell Username (in user list and auto-import dialog)"}),"\n",(0,i.jsx)(s.li,{children:"AD Display Name field maps to the CloudShell Display Name (in auto-import dialog)"}),"\n",(0,i.jsxs)(s.li,{children:["AD Pre-win2000 field (SamAccountName) maps to Cloudshell Username.\n",(0,i.jsx)(s.img,{src:n(51068).c+"",width:"448",height:"586"})]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"importing-active-directory-users-from-a-file",children:"Importing active directory users from a file"}),"\n",(0,i.jsx)(s.p,{children:"You can also import users from an external text file. The file must contain a list of valid email addresses in the active directory, separated with a comma or semicolon."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"To import users from a file"}),":"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Log in to ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,i.jsx)(s.strong,{children:"Users"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Import Users"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Import Users"})," dialog box, select the ",(0,i.jsx)(s.strong,{children:"Import from file"})," option."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(78788).c+"",width:"610",height:"446"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"Browse"})," and select the txt file. The email addresses must be comma or semicolon-separated. For example: ",(0,i.jsx)(s.code,{children:"jane.d@company.com,john.j@company.com,steve.b@company.com,deb.h@company.com"})]}),"\n",(0,i.jsx)(s.p,{children:"The file contents are displayed in the text box."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Run Query"})," button to get the list of users from the loaded file."]}),"\n",(0,i.jsx)(s.p,{children:"The users are listed in the dialog box. Nonexistent users in the file are not listed."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Select the users to import: Press the ",(0,i.jsx)(s.strong,{children:"[CTRL]+[A]"})," keys to select all users in the list or press the ",(0,i.jsx)(s.strong,{children:"[CTRL]"})," key to select specific users."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The users are added to the ",(0,i.jsx)(s.strong,{children:"Users Management"})," list from the current domain."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"enabling-cloudshell-to-automatically-import-active-directory-users-when-they-first-log-in",children:"Enabling CloudShell to automatically import Active Directory users when they first log in"}),"\n",(0,i.jsxs)(s.p,{children:["For additional information, see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#configuring-cloudshell-to-automatically-import-users-from-an-external-system-at-login",children:"Configuring CloudShell to automatically import users from an external system at login"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"updating-user-settings",children:"Updating user settings"}),"\n",(0,i.jsxs)(s.p,{children:["This section explains how to edit a user's settings. The user's name cannot be edited. To edit a user's password, see ",(0,i.jsx)(s.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users#changing-a-users-password",children:"Changing a user's password"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To edit a user's settings:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Log in to ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n",(0,i.jsxs)(s.li,{children:["In the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,i.jsx)(s.strong,{children:"Users"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Select a user from the list and click ",(0,i.jsx)(s.strong,{children:"Edit"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["If this user was imported from an Active Directory of a Windows Domain, the ",(0,i.jsx)(s.strong,{children:"Imported"})," check box is selected and the ",(0,i.jsx)(s.strong,{children:"Email"})," field is disabled."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.strong,{children:"Edit User"})," window also displays all of the user's group memberships."]}),"\n",(0,i.jsxs)(s.li,{children:["Perform the required changes and click ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"changing-a-users-password",children:"Changing a user's password"}),"\n",(0,i.jsx)(s.p,{children:"Imported user passwords are managed from the active directory itself."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"To change a user's password"}),":"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Log in to ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n",(0,i.jsxs)(s.li,{children:["In the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,i.jsx)(s.strong,{children:"Users"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Select a user from the list and click ",(0,i.jsx)(s.strong,{children:"Change Password"})," ."]}),"\n",(0,i.jsxs)(s.li,{children:["Enter the new password in the ",(0,i.jsx)(s.strong,{children:"Password"})," and ",(0,i.jsx)(s.strong,{children:"Confirm"})," fields."]}),"\n",(0,i.jsxs)(s.li,{children:["Click ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"deleting-users",children:"Deleting users"}),"\n",(0,i.jsxs)(s.p,{children:["Before deleting a user, you must either deactivate the user (by unselecting the ",(0,i.jsx)(s.strong,{children:"Active"})," check box in the user's profile) or delete all sandboxes (current, historic, future) that are associated with this user."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"To see a user's associated sandboxes, open the Sandboxes dashboard in CloudShell Portal, preferably in the Global domain, select the correct time range and then filter the sandboxes by entering the username in the Search sandboxes field."})}),"\n",(0,i.jsx)(s.admonition,{type:"important",children:(0,i.jsx)(s.p,{children:"Deleting the sandboxes affects BI data (such as resource utilization and blueprint consumption), while deactivating the user keeps the BI data consistent."})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To delete an existing user:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Log in to ",(0,i.jsx)(s.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n",(0,i.jsxs)(s.li,{children:["In the ",(0,i.jsx)(s.strong,{children:"Admin"})," ribbon, click ",(0,i.jsx)(s.strong,{children:"Users"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Select the user that you wish to remove from the list and click ",(0,i.jsx)(s.strong,{children:"Delete"}),". To select multiple users, press the ",(0,i.jsx)(s.strong,{children:"[CTRL]"})," key and select the users."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},78788:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/ImportUsersFromFile-3dfcb4d11166f71025990aa87583c2ec.png"},28932:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/ImportUsersFromGroup_491x468-9fcdb344ec0792086873d552c1e7cbc3.png"},51068:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/SamAccountName-d418bd56f525c31455ac3992cd676359.png"},51892:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/UsersTabCheckboxes-d3ab2933e5179879f7118be4c0014442.png"},4552:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>l});var i=n(11504);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);