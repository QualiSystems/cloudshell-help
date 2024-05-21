"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[40604],{4844:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=i(17624),r=i(4552);const t={sidebar_position:4},l="LDAP Integration",o={id:"admin/cloudshell-identity-management/access-control-and-authentication/ldap-integration",title:"LDAP Integration",description:"The integration of an LDAP server with CloudShell enables LDAP users to log in to CloudShell Portal with their credentials, without having to be imported manually into the Resource Manager users list. The import is done automatically when the user logs in to the portal.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-identity-management/access-control-and-authentication/ldap-integration.md",sourceDirName:"admin/cloudshell-identity-management/access-control-and-authentication",slug:"/admin/cloudshell-identity-management/access-control-and-authentication/ldap-integration",permalink:"/admin/cloudshell-identity-management/access-control-and-authentication/ldap-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-identity-management/access-control-and-authentication/ldap-integration.md",tags:[],version:"2023.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JSON Web Token (JWT) Configuration",permalink:"/admin/cloudshell-identity-management/access-control-and-authentication/json-web-token-jwt-configuration"},next:{title:"CloudShell Manage Dashboard",permalink:"/admin/cloudshell-manage-dashboard"}},d={},a=[{value:"Enabling secure LDAP (LDAPS)",id:"enabling-secure-ldap-ldaps",level:2},{value:"Registering LDAP users in CloudShell",id:"registering-ldap-users-in-cloudshell",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ldap-integration",children:"LDAP Integration"}),"\n",(0,s.jsxs)(n.p,{children:["The integration of an LDAP server with CloudShell enables LDAP users to log in to CloudShell Portal with their credentials, without having to be imported manually into the ",(0,s.jsx)(n.strong,{children:"Resource Manager"})," users list. The import is done automatically when the user logs in to the portal."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["CloudShell provides additional user authentication options, including Active Directory, SSO and JWT. However, if possible, consider using Active Directory for user authentication as it features a simple configuration process. For additional information, see ",(0,s.jsx)(n.a,{href:"/admin/cloudshell-identity-management/access-control-and-authentication/active-directory-integration/",children:"Active Directory Integration"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"enabling-secure-ldap-ldaps",children:"Enabling secure LDAP (LDAPS)"}),"\n",(0,s.jsx)(n.p,{children:"This procedure configures LDAP users to access CloudShell over SSL."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To enable LDAP to run in SSL mode:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Copy the following keys to the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<add key="LDAP.IsLDAPS" value="true"/>\n<add key="LDAP.AuthType" value="1"/>\n<add key="LDAP.Timeout" value="600"/>\n<add key="LDAP.CheckCertificate" value="false"/>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the key values according to your LDAP server configurations:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Key"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'<add key="LDAP.IsLDAPS" value="true"/>'}),(0,s.jsxs)("td",{children:[(0,s.jsx)("strong",{children:"true"})," enables LDAPS mode."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'<add key="LDAP.AuthType" value="1"/>'}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"Determines how to authenticate Active Directory users in CloudShell. Possible values are:"}),(0,s.jsx)("table",{style:{width:"100%",border:"none"},children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsxs)("td",{style:{width:"50%",border:"none"},children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"0"})," - Anonymous"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"1"})," - Basic"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"2"})," - Negotiate"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"3"})," - Ntlm"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"4"})," - Digest"]})]}),(0,s.jsxs)("td",{style:{width:"50%",border:"none"},children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"5"})," - Sicily"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"6"})," - Dpa"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"7"})," - Msn"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"8"})," - External"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"9"})," - Kerberos"]})]})]})})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'<add key="LDAP.Timeout" value="600"/>'}),(0,s.jsx)("td",{children:"Timeout period, in seconds. If the system does not respond within this period, an error is displayed."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'<add key="LDAP.CheckCertificate" value="false"/>'}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Determine whether to validate the given SSL certificate against the local store.",(0,s.jsx)("br",{}),"Default is ",(0,s.jsx)("strong",{children:"false"}),"."]})})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["In addition, you will need to set the ",(0,s.jsx)(n.code,{children:"LDAP.Port"})," key to ",(0,s.jsx)(n.strong,{children:"636"}),". This is covered in the following section."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Proceed to register LDAP users in CloudShell below. If you already registered your LDAP users in CloudShell, restart the ",(0,s.jsx)(n.strong,{children:"Quali Server"})," service to apply the changes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"registering-ldap-users-in-cloudshell",children:"Registering LDAP users in CloudShell"}),"\n",(0,s.jsx)(n.p,{children:"This procedure requires good working knowledge of LDAP servers."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To register LDAP users in CloudShell:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make sure the following key is in the file. If it is missing, add it."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'<add key="ExternalUserPluginClass" value="LdapPlugin"/>'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Copy the following keys to the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<add key="LDAP.Server" value="127.0.0.1"/>\n\x3c!--Port for accessing CloudShell. For secure LDAP, use port 636. For non secure LDAP, the default is 389.--\x3e\n<add key="LDAP.Port" value="389"/>\n<add key="LDAP.Username" value="cn=Manager,dc=maxcrc,dc=com"/>\n<add key="LDAP.Password" value="secret"/>\n\x3c!--Root node for group searching--\x3e\n<add key="LDAP.GroupRootDn" value="dc=maxcrc,dc=com"/>\n\x3c!--Filter for finding group nodes--\x3e\n<add key="LDAP.GroupFilter" value="(&amp;(objectClass=organizationalUnit))"/>\n\x3c!--Root node for user searching--\x3e\n<add key="LDAP.UserRootDn" value="dc=maxcrc,dc=com"/>\n\x3c!--Filter for finding user nodes--\x3e\n<add key="LDAP.UsersFilter" value="(&amp;(objectClass=inetOrgPerson))"/>\n\x3c!--Note \u2013 the below attributes \u201cmail\u201d or \u201cuid\u201d must have values in the LDAP.--\x3e\n\x3c!--Filter template for finding a specific user node by id, where {0} is the user\'s unique id--\x3e\n<add key="LDAP.UserFilter" value="(&amp;(objectClass=inetOrgPerson)(uid={0}))"/>\n\x3c!--Filter template for finding a specific user node by e-mail, where {0} is the user\'s e-mail--\x3e\n<add key="LDAP.UserMailFilter" value="(&amp;(objectClass=inetOrgPerson)(mail={0}))"/>\n\x3c!--LDAP attribute names for various user/group properties--\x3e\n<add key="LDAP.MemberOfGroupAttribute" value="memberOf"/>\n<add key="LDAP.MailAttribute" value="mail"/>\n<add key="LDAP.UserIdAttribute" value="uid"/>\n<add key="LDAP.UsernameAttribute" value="uid"/>\n<add key="LDAP.UserDisplayNameAttribute" value="cn"/>\n<add key="LDAP.GroupDisplayNameAttribute" value="description"/>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the key values according to your LDAP server configurations. For assistance, contact your IT\xa0department or use your preferred LDAP browser utility to verify the object classes used by your LDAP Server."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To enable CloudShell to automatically add the users when they first log in to CloudShell, copy this key to the file:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'<add key="ExternalUserManagement.AutoImportUser" value="True"/>'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When added automatically (at login), users imported from LDAP will be added to the Group that is listed in the ",(0,s.jsx)(n.code,{children:"Registration.AdditionalGroup"})," key. The default group is ",(0,s.jsx)(n.strong,{children:"External Users"})," (Used to be ",(0,s.jsx)(n.strong,{children:"System Administrators"}),"). If you want a different Group, change the value of the key."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For the registration of non-imported users to succeed, the group defined in the ",(0,s.jsx)(n.code,{children:"Registration.AdditionalGroup"})," key must be included in ",(0,s.jsx)(n.strong,{children:"Resource Manager Client"})," and associated with a domain."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restart the ",(0,s.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To prevent users from changing their passwords in CloudShell, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\customer.config"})," file and add this key:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'<add key="ChangePasswordEnabled" value="False"/>'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save the file and restart the ",(0,s.jsx)(n.strong,{children:"CloudShell Portal IIS"})," service."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>l});var s=i(11504);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);