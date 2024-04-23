"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25168],{30615:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=n(17624),t=n(4552);const o={sidebar_position:2},l="Associating Tests to Different Domains",r={id:"install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains",title:"Associating Tests to Different Domains",description:"Associating a test to a domain allows the users to split their repositories to groups of interest, allowing business and organization segregation. This helps one organization to have multiple, disconnected groups working with the same system.",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-repository-config",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Test Repository",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo"},next:{title:"Central Logging Configuration",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/central-logging/"}},c={},a=[];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"associating-tests-to-different-domains",children:"Associating Tests to Different Domains"}),"\n",(0,i.jsx)(s.p,{children:"Associating a test to a domain allows the users to split their repositories to groups of interest, allowing business and organization segregation. This helps one organization to have multiple, disconnected groups working with the same system."}),"\n",(0,i.jsxs)(s.p,{children:["In the repository, by default, the tests are associated with all domains. To change that, in the online test repository, add a ",(0,i.jsx)(s.code,{children:".cs_domains"})," file to the relevant parent directory with a list of the domains."]}),"\n",(0,i.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:".cs_domains"})," file applies to the tests in the directory containing the file and to its sub-directories."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:".cs_domains"})," file overrides any domain associations defined in a parent directory."]}),"\n",(0,i.jsx)(s.li,{children:"If the domains list is empty, the domains file will be ignored."}),"\n"]})}),"\n",(0,i.jsx)(s.p,{children:"To illustrate how this works, consider the following example:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Directory A"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".cs_domains"})," - Domain 2"]}),"\n",(0,i.jsx)(s.li,{children:"Test 2"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Directory B"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".cs_domains"})," - Domain 1"]}),"\n",(0,i.jsx)(s.li,{children:"Test 5"}),"\n",(0,i.jsx)(s.li,{children:"Test 7"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Directory C"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Test 1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["In the above hierarchy, Directory A is associated to Domain 2. Directory B has a ",(0,i.jsx)(s.code,{children:".cs_domains"})," file, which overrides Directory A's domain association, while Directory C doesn't have a ",(0,i.jsx)(s.code,{children:".cs_domains"})," file and therefore inherits the domain associations from Directory B."]}),"\n",(0,i.jsx)(s.p,{children:"So, a user in Domain 1 will see the following when adding tests to a suite:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Directory A"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Directory B"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Test 5"}),"\n",(0,i.jsx)(s.li,{children:"Test 7"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Directory C"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Test 1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["To set up the ",(0,i.jsx)(s.code,{children:".cs_domains"})," file:"]})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'Create a file named ".cs_domains".'}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Open the file and set the suitable domains in JSON format."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'For example, associating "domainX" and "domainY":'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'{"domains": ["domainX", "domainY"]}'})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Associating all domains:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'{"domains": ["*"]}'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Save the file and upload it to the suitable directories in the online repository."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>r,M:()=>l});var i=n(11504);const t={},o=i.createContext(t);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);