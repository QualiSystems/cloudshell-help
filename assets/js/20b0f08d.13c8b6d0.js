"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[46956],{14036:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var d=l(17624),r=l(4552);const i={sidebar_position:15},t="Registration, Passwords, Emails, and Licenses",n={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/registration-passwords-emails-and-licenses",title:"Registration, Passwords, Emails, and Licenses",description:"Enable registration",source:"@site/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/registration-passwords-emails-and-licenses.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/registration-passwords-emails-and-licenses",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/registration-passwords-emails-and-licenses",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/registration-passwords-emails-and-licenses.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"PyPi Server",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/pypi-server"},next:{title:"Sandboxes",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/sandboxes"}},o={},c=[{value:"Enable registration",id:"enable-registration",level:2},{value:"Set email address for a system administrator level user",id:"set-email-address-for-a-system-administrator-level-user",level:2},{value:"Configure registered user permissions",id:"configure-registered-user-permissions",level:2},{value:"Configure registered user permissions",id:"configure-registered-user-permissions-1",level:2},{value:"Configure the default role when a user is registered",id:"configure-the-default-role-when-a-user-is-registered",level:2},{value:"Enable password reset",id:"enable-password-reset",level:2},{value:"Hide the &quot;Change Password&quot; option from the user menu",id:"hide-the-change-password-option-from-the-user-menu",level:2},{value:"Enable delaying failed login attempts/brute-force protection",id:"enable-delaying-failed-login-attemptsbrute-force-protection",level:2},{value:"Change the default idle time for releasing the license",id:"change-the-default-idle-time-for-releasing-the-license",level:2},{value:"Change the email validation pattern",id:"change-the-email-validation-pattern",level:2},{value:"Include a link to the sandbox in notification emails",id:"include-a-link-to-the-sandbox-in-notification-emails",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"registration-passwords-emails-and-licenses",children:"Registration, Passwords, Emails, and Licenses"}),"\n",(0,d.jsx)(s.h2,{id:"enable-registration",children:"Enable registration"}),"\n",(0,d.jsx)(s.p,{children:"Enable registration (Requires also setting the Registration.AdminEmail key, as explained below) (Registration.Enabled)"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="Registration.Enabled" value="True"/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"True/False"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"False"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Portal"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"set-email-address-for-a-system-administrator-level-user",children:"Set email address for a system administrator level user"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:'<add key="Registration.AdminEmail" value="admin@company.com"/>'})}),(0,d.jsxs)(s.p,{children:["Where ",(0,d.jsx)(s.code,{children:"admin@company.com"})," is the email address of a ",(0,d.jsx)(s.strong,{children:"Resource Manager Client"})," system administrator"]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"Email address, separated by semi-colons (;)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"N/A"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Server"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"configure-registered-user-permissions",children:"Configure registered user permissions"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="Registration.DefaultDomain" value=""/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"Default domain"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"N/A"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Server"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"configure-registered-user-permissions-1",children:"Configure registered user permissions"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="Registration.AdditionalGroup" value=""/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"Text"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"External Users"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Server"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"configure-the-default-role-when-a-user-is-registered",children:"Configure the default role when a user is registered"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="Registration.DefaultRole" value="Regular"/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"Text"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"Regular"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Portal"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.1 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"enable-password-reset",children:"Enable password reset"}),"\n",(0,d.jsxs)(s.p,{children:["This also requires configuring the SMTP mail. See ",(0,d.jsx)(s.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#enabling-password-reset",children:"Enabling password reset"}),"."]}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="ResetPassword.Enabled" value="True"/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"True/False"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"False"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Portal"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"hide-the-change-password-option-from-the-user-menu",children:'Hide the "Change Password" option from the user menu'}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="ChangePasswordEnabled" value="False"/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"True/False"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"True"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Portal"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.0 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"enable-delaying-failed-login-attemptsbrute-force-protection",children:"Enable delaying failed login attempts/brute-force protection"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="DelayFailedLoginsAttempts" value="True"/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"True/False"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"False"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Server"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"2023.3 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"change-the-default-idle-time-for-releasing-the-license",children:"Change the default idle time for releasing the license"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsx)("td",{children:(0,d.jsx)(s.code,{children:'<add key="IdleLicenseReleaseWatchdog.IdleTimeInMinutes" value="65"/>'})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"Numeric (in minutes)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Portal / CloudShell Authoring / TestShell Studio installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"65"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"TestShell Studio/TestShell Runner/CloudShell Authoring"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"6.3 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"change-the-email-validation-pattern",children:"Change the email validation pattern"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:'<add key="EmailValidationPattern" value=""/>'})}),(0,d.jsxs)(s.p,{children:['Where the email address strings can include any character in any language or symbol (separated by "@" and "."). For example, to limit the email address to a particular company, set value="[^\\s@]',(0,d.jsx)(s.a,{href:"mailto:+@company.com",children:"+@company.com"}),'"']})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"Text, email address string"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Portal installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsxs)("td",{children:["Email address format (",(0,d.jsx)(s.em,{children:"@"}),".*)"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Portal"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"7.0 and above"})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"include-a-link-to-the-sandbox-in-notification-emails",children:"Include a link to the sandbox in notification emails"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Key"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:'<add key="PortalAddressLinkForEmails" value="protocol://Portal:PortalPort"/>'})}),(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Parameter details"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"protocol"})}),(0,d.jsx)(s.td,{children:"http or https if CloudShell Portal is set to use SSL"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"PublicServerName"})}),(0,d.jsx)(s.td,{children:"The DNS name or IP address of the CloudShell Portal virtual front"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"PortalPort"})}),(0,d.jsx)(s.td,{children:"The port which CloudShell Portal is using (If the port is 80 or 443, remove this parameter and the colon from the key value)."})]})]})]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Possible values"}),(0,d.jsx)("td",{children:"Text, email address string"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Where to add/change"}),(0,d.jsxs)("td",{children:[(0,d.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Default value"}),(0,d.jsx)("td",{children:"N/A"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Affected CloudShell Component"}),(0,d.jsx)("td",{children:"CloudShell Portal"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Version"}),(0,d.jsx)("td",{children:"7.0 and above"})]})]})})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},4552:(e,s,l)=>{l.d(s,{I:()=>n,M:()=>t});var d=l(11504);const r={},i=d.createContext(r);function t(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);