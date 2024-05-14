"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[40752],{2524:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=n(17624),r=n(4552);const s={sidebar_position:2},o="Importing users into CloudShell from an active directory",l={id:"admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/importing-users-into-cloudshell-from-an-active-directory",title:"Importing users into CloudShell from an active directory",description:"The following procedures explain how to import users from your active directory into CloudShell. To enable user import, the ActiveDirectory.Domain configuration key needs to be set - see Configuring CloudShell to import user definitions from an active directory.",source:"@site/docs/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/importing-users-into-cloudshell-from-an-active-directory.md",sourceDirName:"admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration",slug:"/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/importing-users-into-cloudshell-from-an-active-directory",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/importing-users-into-cloudshell-from-an-active-directory",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/importing-users-into-cloudshell-from-an-active-directory.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuring CloudShell to Automatically Import Active Directory Users on First Login",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/configuring-cloudshell-to-automatically-import-active-directory-users-on-first-login"},next:{title:"SAML Authentication Configuration (SSO / SLO)",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/"}},c={},d=[{value:"Importing users from an active directory group",id:"importing-users-from-an-active-directory-group",level:2},{value:"Importing active directory users from a file",id:"importing-active-directory-users-from-a-file",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"importing-users-into-cloudshell-from-an-active-directory",children:"Importing users into CloudShell from an active directory"}),"\n",(0,t.jsxs)(i.p,{children:["The following procedures explain how to import users from your active directory into CloudShell. To enable user import, the ",(0,t.jsx)(i.code,{children:"ActiveDirectory.Domain"})," configuration key needs to be set - see ",(0,t.jsx)(i.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#configuring-cloudshell-to-import-user-definitions-from-an-active-directory",children:"Configuring CloudShell to import user definitions from an active directory"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Once imported and associated to the relevant CloudShell groups and domains, imported users log into CloudShell using their active directory username and password, and the desired CloudShell domain. In addition, the password of an imported user can only be changed from the active directory itself."}),"\n",(0,t.jsxs)(i.p,{children:["In ",(0,t.jsx)(i.strong,{children:"Resource Manager Client"}),", in the ",(0,t.jsx)(i.strong,{children:"Users"})," tab, imported users have the ",(0,t.jsx)(i.strong,{children:"Imported"}),' check box selected (illustrated for user "Mika-y" in the image below).']}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(51892).c+"",width:"575",height:"284"})}),"\n",(0,t.jsx)(i.h2,{id:"importing-users-from-an-active-directory-group",children:"Importing users from an active directory group"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"To import users from a specific active directory group"}),":"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Log in to ",(0,t.jsx)(i.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.strong,{children:"Admin"})," ribbon, click ",(0,t.jsx)(i.strong,{children:"Users"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click the ",(0,t.jsx)(i.strong,{children:"Import Users"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.strong,{children:"Import Users"})," dialog box, select the ",(0,t.jsx)(i.strong,{children:"Group"})," option."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(28932).c+"",width:"491",height:"468"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"Refresh"})," to get a full list of groups that exist in the current domain."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Select the required group from the ",(0,t.jsx)(i.strong,{children:"Group"})," drop down list or leave ",(0,t.jsx)(i.strong,{children:"All Groups"})," to get all users in the active directory."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"Run Query"})," to get the list of users."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Select the users to import. Press the ",(0,t.jsx)(i.strong,{children:"[CTRL]+[A]"})," keys to select all users in the list or press the ",(0,t.jsx)(i.strong,{children:"[CTRL]"})," key to select specific users."]}),"\n",(0,t.jsxs)(i.admonition,{title:"Active Directory users are added as follows:",type:"note",children:[(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"AD First Name field maps to the CloudShell Username (in user list and auto-import dialog)"}),"\n",(0,t.jsx)(i.li,{children:"AD Display Name field maps to the CloudShell Display Name (in auto-import dialog)"}),"\n",(0,t.jsx)(i.li,{children:"AD Pre-win2000 field (SamAccountName) maps to Cloudshell Username."}),"\n"]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"More..."}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(51068).c+"",width:"448",height:"586"})})]})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"importing-active-directory-users-from-a-file",children:"Importing active directory users from a file"}),"\n",(0,t.jsx)(i.p,{children:"You can also import users from an external text file. The file must contain a list of valid email addresses in the active directory, separated with a comma or semicolon."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"To import users from a file"}),":"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Log in to ",(0,t.jsx)(i.strong,{children:"Resource Manager Client"})," as administrator."]}),"\n",(0,t.jsxs)(i.li,{children:["In the ",(0,t.jsx)(i.strong,{children:"Admin"})," ribbon, click ",(0,t.jsx)(i.strong,{children:"Users"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Click the ",(0,t.jsx)(i.strong,{children:"Import Users"})," button."]}),"\n",(0,t.jsxs)(i.li,{children:["In the ",(0,t.jsx)(i.strong,{children:"Import Users"})," dialog box, select the ",(0,t.jsx)(i.strong,{children:"Import from file"})," option."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(56856).c+"",width:"511",height:"416"})}),"\n",(0,t.jsxs)(i.ol,{start:"5",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"Browse"})," and select the txt file. The email addresses must be comma or semicolon-separated. For example: ",(0,t.jsx)(i.a,{href:"mailto:jane.d@company.com",children:"jane.d@company.com"}),",",(0,t.jsx)(i.a,{href:"mailto:john.j@company.com",children:"john.j@company.com"}),",",(0,t.jsx)(i.a,{href:"mailto:steve.b@company.com",children:"steve.b@company.com"}),",",(0,t.jsx)(i.a,{href:"mailto:deb.h@company.com",children:"deb.h@company.com"})]}),"\n",(0,t.jsx)(i.p,{children:"The file contents are displayed in the text box."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click the ",(0,t.jsx)(i.strong,{children:"Run Query"})," button to get the list of users from the loaded file."]}),"\n",(0,t.jsx)(i.p,{children:"The users are listed in the dialog box. Nonexistent users in the file are not listed."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Select the users to import: Press the ",(0,t.jsx)(i.strong,{children:"[CTRL]+[A]"})," keys to select all users in the list or press the ",(0,t.jsx)(i.strong,{children:"[CTRL]"})," key to select specific users."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"OK"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The users are added to the ",(0,t.jsx)(i.strong,{children:"Users Management"})," list from the current domain."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},56856:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/ImportUsersFromFile_511x416-6dd3755c79b87dece183e9f5f728b067.png"},28932:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/ImportUsersFromGroup_491x468-9fcdb344ec0792086873d552c1e7cbc3.png"},51068:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/SamAccountName-d418bd56f525c31455ac3992cd676359.png"},51892:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/UsersTabCheckboxes-d3ab2933e5179879f7118be4c0014442.png"},4552:(e,i,n)=>{n.d(i,{I:()=>l,M:()=>o});var t=n(11504);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);