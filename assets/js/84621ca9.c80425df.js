"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[81264],{75836:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=s(17624),A=s(4552);const r={sidebar_position:4},o="Managing CloudShell Groups",t={id:"admin/cloudshell-identity-management/managing-users/managing-cloudshell-groups",title:"Managing CloudShell Groups",description:"Adding groups",source:"@site/docs/admin/cloudshell-identity-management/managing-users/managing-cloudshell-groups.md",sourceDirName:"admin/cloudshell-identity-management/managing-users",slug:"/admin/cloudshell-identity-management/managing-users/managing-cloudshell-groups",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/managing-cloudshell-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-identity-management/managing-users/managing-cloudshell-groups.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Updating User Settings",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/updating-user-settings"},next:{title:"CloudShell Domains",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/cloudshell-domains/"}},l={},d=[{value:"Adding groups",id:"adding-groups",level:2},{value:"Adding users to groups",id:"adding-users-to-groups",level:2},{value:"Removing users from a group",id:"removing-users-from-a-group",level:2},{value:"Associating groups with a domain",id:"associating-groups-with-a-domain",level:2},{value:"Removing groups from a domain",id:"removing-groups-from-a-domain",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,A.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"managing-cloudshell-groups",children:"Managing CloudShell Groups"}),"\n",(0,i.jsx)(n.h2,{id:"adding-groups",children:"Adding groups"}),"\n",(0,i.jsx)(n.p,{children:"There are various ways to define CloudShell groups:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create groups manually by adding new groups via the ",(0,i.jsx)(n.strong,{children:"Groups"})," tab."]}),"\n",(0,i.jsx)(n.li,{children:"Build a driver to import groups from a file and automatically specify the domain access for each group."}),"\n",(0,i.jsx)(n.li,{children:"Use TestShell APIs."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add a new group manually:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," tab's ",(0,i.jsx)(n.strong,{children:"Groups"})," icon."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(74760).c+"",width:"575",height:"143"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Groups"})," tab, click the ",(0,i.jsx)(n.strong,{children:"New"})," button in the ",(0,i.jsx)(n.strong,{children:"Groups"})," list pane toolbar."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(87984).c+"",width:"647",height:"427"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"New Group"})," window, enter the name and description, and select a role for the new group."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Domain admins"})," can access all domain assets, create inventory resources and apps, and perform administrative tasks in the domain via CloudShell Portal's ",(0,i.jsx)(n.strong,{children:"Manage"})," dashboard."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Regular users"})," are the default role for new groups. Regular users can access and use public blueprints in their domain and become owners of blueprints, which allows them to modify the blueprint\u2019s properties and elements."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"External users"})," are very limited users that can view blueprints but not use them. They can view and export public blueprint diagrams but cannot create or modify blueprints and sandboxes. Using the ",(0,i.jsx)(n.code,{children:"ExternalUserHasExtendedPermissions"})," configuration key, external user permissions can be extended to allow them to see blueprint resource structures and commands and reserve blueprints."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["System administrators are defined per user in the user's profile. For additional information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/managing-users/managing-cloudshell-users",children:"Managing CloudShell Users"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(43824).c+"",width:"387",height:"194"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"To edit an existing group's details, in the Groups tab, double click the desired group"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"})," to add the new group."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-users-to-groups",children:"Adding users to groups"}),"\n",(0,i.jsx)(n.p,{children:"The System Administrator grants user permissions by adding users to groups."}),"\n",(0,i.jsx)(n.p,{children:"Users can be added to several groups."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add users to a group:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the target group from the list in left pane."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Users"})," tab."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(96108).c+"",width:"575",height:"458"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Add"})," button to open the ",(0,i.jsx)(n.strong,{children:"Users Selection"})," window."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(80576).c+"",width:"575",height:"376"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select users from the list and click ",(0,i.jsx)(n.strong,{children:"OK"})," to add them to the group."]}),"\n",(0,i.jsx)(n.p,{children:"Multi-selection is supported."}),"\n",(0,i.jsx)(n.p,{children:"Use the Search field to search for specific users."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"removing-users-from-a-group",children:"Removing users from a group"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To remove a user from the group:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the user in ",(0,i.jsx)(n.strong,{children:"Users"})," list and click the ",(0,i.jsx)(n.strong,{children:"Remove"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(76828).c+"",width:"575",height:"485"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"associating-groups-with-a-domain",children:"Associating groups with a domain"}),"\n",(0,i.jsx)(n.p,{children:"Associating a group with a specific domain provides users of that group with access to all resources and blueprints associated with that domain."}),"\n",(0,i.jsx)(n.p,{children:"Groups can be added to multiple domains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Group access to a domain can be either active or view only."}),"\n",(0,i.jsx)(n.li,{children:"Group access to a domain is specific to that domain."}),"\n",(0,i.jsxs)(n.li,{children:["Group access to a domain can be configured via the group's ",(0,i.jsx)(n.strong,{children:"Domains"})," tab or via the domain's ",(0,i.jsx)(n.strong,{children:"Groups"})," tab."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here are some options for setting up view only domains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assign a group to an active domain where users can reserve resources and perform resource operations. Add the group to all the other domains - or to the Global domain - on a view-only basis."}),"\n",(0,i.jsx)(n.li,{children:"Allocate groups to domains to support current work-flow processes. Limit user access to lab equipment by selectively add groups to domains on a view-only basis."}),"\n",(0,i.jsx)(n.li,{children:"Associate all groups with the global domain, allowing all users full access to the entire lab."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"A user can be a member of multiple groups and thus have multiple roles and permissions. If a user has more than one role in a domain, the user\u2019s permissions in the domain are determined according to the most privileged role."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To associate groups with a domain:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," tab's ",(0,i.jsx)(n.strong,{children:"Domains"})," icon to open the ",(0,i.jsx)(n.strong,{children:"Domains Explorer"})," window."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(86744).c+"",width:"575",height:"143"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Domains Explorer"}),", double-click a domain or right-click a domain and choose ",(0,i.jsx)(n.strong,{children:"Open"})," from the context menu to open the domain's tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Groups"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Add"})," button to select the groups."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Groups Selection"})," window, select the groups that you wish to associate with the domain."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Specify the permissions level for each selected group. Check the ",(0,i.jsx)(n.strong,{children:"View Only"})," checkbox if you wish to grant view-only access to that group."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"})," to add the selected groups."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"removing-groups-from-a-domain",children:"Removing groups from a domain"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"To remove groups from the domain"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Admin"})," tab's ",(0,i.jsx)(n.strong,{children:"Domains"})," icon to open the ",(0,i.jsx)(n.strong,{children:"Domains Explorer"})," window."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(86744).c+"",width:"575",height:"143"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Domains Explorer"}),", double-click a domain or right-click a domain and choose ",(0,i.jsx)(n.strong,{children:"Open"})," from the context menu to open the domain's tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"Properties"})," page from the ",(0,i.jsx)(n.strong,{children:"Page"})," drop down."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Groups"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the groups that you wish to remove and click the ",(0,i.jsx)(n.strong,{children:"Delete"})," button."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,A.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},86744:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/DomainsButton-d9e3a2f29b026275f18933aca45d070c.png"},74760:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/GroupsButton-c3ddb9c36c88b6cd7160e3120cfc7d32.png"},96108:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/GroupsTabGroupListNamesPane-dbb345d41a599795645ad8e664d6d87f.png"},87984:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/GroupsTabUsersTabAddButton-a69ef8e4d522c311119a9200073ea2b0.png"},76828:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/GroupsTabUsersTabRemoveButt-d07550e7bdc07989597abe6b047b4ab4.png"},43824:(e,n,s)=>{s.d(n,{c:()=>i});const i="data:image/png;base64,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"},80576:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/UsersSelectionWindow1-a27a9a291a9d8676e20d141c458fbbc3.png"},4552:(e,n,s)=>{s.d(n,{I:()=>t,M:()=>o});var i=s(11504);const A={},r=i.createContext(A);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);