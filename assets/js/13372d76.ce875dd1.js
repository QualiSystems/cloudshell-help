"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[15152],{54200:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=s(17624),l=s(4552);const o={sidebar_position:1},t="Using License Pools",d={id:"admin/setting-up-cloudshell/setting-up-license-pools/using-license-pools",title:"Using License Pools",description:"About License Pools",source:"@site/docs/admin/setting-up-cloudshell/setting-up-license-pools/using-license-pools.md",sourceDirName:"admin/setting-up-cloudshell/setting-up-license-pools",slug:"/admin/setting-up-cloudshell/setting-up-license-pools/using-license-pools",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/setting-up-license-pools/using-license-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/setting-up-license-pools/using-license-pools.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setting Up License Pools",permalink:"/cloudshell-help/next/category/setting-up-license-pools"},next:{title:"CloudShell Configuration Options",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/"}},c={},r=[{value:"About License Pools",id:"about-license-pools",level:2},{value:"Managing License Pools",id:"managing-license-pools",level:2},{value:"Creating license pools",id:"creating-license-pools",level:3},{value:"Deleting license pools",id:"deleting-license-pools",level:3},{value:"Editing license pools",id:"editing-license-pools",level:3},{value:"Validating Licenses",id:"validating-licenses",level:2},{value:"User Notifications",id:"user-notifications",level:3}];function a(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"using-license-pools",children:"Using License Pools"}),"\n",(0,i.jsx)(n.h2,{id:"about-license-pools",children:"About License Pools"}),"\n",(0,i.jsx)(n.p,{children:"A license pool defines the maximum number of active concurrent sandboxes that can be created by users and domain administrators in the domain. License pools are defined by the system administrator and the same pool can be assigned to multiple domains. The domain's license pool limit does not apply to the system administrator."}),"\n",(0,i.jsx)(n.p,{children:"The License Pools in the system are:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Pool Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Global License Pool"}),(0,i.jsx)(n.td,{children:"Holds the total amount of concurrent active sandboxes allowed in the system. The size of the Global License Pool cannot be modified."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"License Pool"}),(0,i.jsx)(n.td,{children:"Holds the number of concurrent sandboxes that can be created in the domain that is using this pool."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The Global License Pool is added, by default, to all new domains. When migrating from an earlier version, the global license pool is added to all domains."})}),"\n",(0,i.jsx)(n.p,{children:"A License pool can be assigned to multiple domains."}),"\n",(0,i.jsx)(n.h2,{id:"managing-license-pools",children:"Managing License Pools"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Every domain must have a license pool."})}),"\n",(0,i.jsx)(n.h3,{id:"creating-license-pools",children:"Creating license pools"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To create a new license pool:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Manager"}),", click the\xa0",(0,i.jsx)(n.strong,{children:"Admin"})," tab and then click\xa0",(0,i.jsx)(n.img,{src:s(38376).c+"",width:"24",height:"34"}),"\xa0",(0,i.jsx)(n.strong,{children:"License Pools"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The\xa0",(0,i.jsx)(n.strong,{children:"License Pools"})," page is displayed, listing the maximum number of licenses that are available and the number of used licenses."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click\xa0",(0,i.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enter the required information in the following fields:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Name"}),(0,i.jsx)(n.td,{children:"Mandatory"}),(0,i.jsx)(n.td,{children:"The name of the license pool."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Optional"}),(0,i.jsx)(n.td,{children:"A meaningful description of the license pool."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number of Licenses"}),(0,i.jsx)(n.td,{children:"Mandatory"}),(0,i.jsxs)(n.td,{children:["The number of permitted concurrent sandboxes. The value must be at least 1 and the highest amount is the number that is set by the concurrent sandbox license.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," The permitted number of sandboxes is the license pool limit plus 1. For example, if the license pool is set to 3 licenses, the domain's users can have up to 3 concurrent sandboxes."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Domains"}),(0,i.jsx)(n.td,{children:"Optional"}),(0,i.jsxs)(n.td,{children:["Licenses can be assigned from the pool to, or removed from, existing domains. Multiple selections are supported. A license pool can be assigned to a single domain or multiple domains. You can also assign a pool to a domain from the ",(0,i.jsx)(n.strong,{children:"Properties"}),"\xa0page of the selected domain."]})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click\xa0",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The details of the license pool are displayed in the\xa0",(0,i.jsx)(n.strong,{children:"License Pools"}),"\xa0page and the number of used licenses is updated accordingly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deleting-license-pools",children:"Deleting license pools"}),"\n",(0,i.jsx)(n.p,{children:"Before deleting a license pool, make sure it is not assigned to any domains."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To delete a license pool:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the\xa0",(0,i.jsx)(n.strong,{children:"License Pools"}),"\xa0page, select the required license pool."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click\xa0",(0,i.jsx)(n.strong,{children:"Delete"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A confirmation message informs you that the specified license pool will be deleted and that domains that used that license pool will now be linked to the global pool."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click\xa0",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The details in the ",(0,i.jsx)(n.strong,{children:"License Pools"})," page and the number of used licenses is updated accordingly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"editing-license-pools",children:"Editing license pools"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To edit the details of a license pool:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the\xa0",(0,i.jsx)(n.strong,{children:"License Pools"}),"\xa0page, double click the license pool or select it and click\xa0",(0,i.jsx)(n.strong,{children:"Edit"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Edit the required fields in the ",(0,i.jsx)(n.strong,{children:"New License Pool"})," window."]}),"\n",(0,i.jsxs)(n.li,{children:["Click\xa0",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"validating-licenses",children:"Validating Licenses"}),"\n",(0,i.jsx)(n.p,{children:"A license pool is a subset of the global license pool. The validation is done both for license pool size and global pool size."}),"\n",(0,i.jsx)(n.p,{children:"The size of the license pool is strictly maintained. When the license pool limit is reached, any new sandbox is rejected."}),"\n",(0,i.jsx)(n.h3,{id:"user-notifications",children:"User Notifications"}),"\n",(0,i.jsx)(n.p,{children:"When the permitted concurrent active sandboxes amount is exceeded, the following notifications are issued:"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"When the domain license pool limit is reached"})}),(0,i.jsx)("td",{children:"The license sandbox owner is notified by way of a warning message. An external user receives a general message. Notification email messages are also sent automatically to the user, domain administrator and system administrator."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"When using the global license pool and the maximum number of licenses is reached"})}),(0,i.jsx)("td",{children:"If the sandbox owner is a domain administrator or system administrator, he is notified by a warning message popup. In addition a notification email is sent automatically to the system administrator."})]})]})})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},38376:(e,n,s)=>{s.d(n,{c:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAYAAABFlhkzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQESURBVEhLvZVtTFtVGMcXwje+oIkZ+0Ika6Jhvo0PMrMpIyjWwWTMkCUmzWaYOus2cdFEI7qY6IqyQaRiU3BgGbSly1g0WQbRLBORtmuhLaXrG31v6aUtbSml/WLy99y78FJ3b+Oq7MMvPff8n/P87u097dmRzWaxneQVZDIZpNPpvNA1bGvX4RRYrVaoNVpE46m8hMNh1vXrcAqcDieocIQ12wSw22yYN8+zZPfgFthdoKgYa7bJX6CiCRiMBpbsHpwCGxGEQhEkVrN5CVNUgQKrHW5/CInECjfJLDzBAgXGOQtsTh/84Sg3S1HYFgIwzBQgmDWaYbS44PaGuQmEYbI6CxOY52wYmxnGdaMCC+RdGN1zGDNcZnAGKJg9JDfIob2rK0ygmdWgSbkbb449hwAVxbhFhUZFOWEX7AEXNAvTOKx4HL1/flaYQHL7K9QPl6Ff30le6ComrNeZ6zqCj/IgGAkSwW68cXUPdKZp1h409wkWE0EEIg7wlXvQoHwGk7cnoVXfwU+/S1EtKyPsxJRuEsYZE/qmL+KFoV04f+tdxFYiWE2ncnrR5AiSqSTqlU9jH2m0d+ARKM0ypMjfQcjvxai2j5nbO1AKvV2LRb+bzLtw/OdGVA0+iv1XeJDNSnKa0+QIpPoe8PpKwZOWoma4Cr4lJzMfjYdQM1IFXj/JSP7eTQGymTUmk2h78MSPO5ns2cFyuCL2jX40m4JMFhf+OA+xtgtq7yRWVuM5hYNk9zz2QynKpWXQ+7Sb2VoagZgPqvlRfDnVjpu2X3LW7ciSn/u/I41DijqINWKWjJsHEGSxnFhGOpVmzbh4IEEhPAwBOfK2ESJIkMH2kSNQjcqZz1HFCJKxpY35/wKr4JOPzuHuvAlvt74F/qv1kA/L8MrLdfhe/B1ajh7FyZOtaDsjxNBAH2prD8Js1OGD00KmxkLWbe3JKjhHBD3dXXA4bMik4th/YB+Ki4tRUVGBpgY+UyOR9DJZ5ZM8GO6oUVRUxNRclvZu9KPJEVQ+VYnm5iYIyd1YLWa8xuej9mANlCNDeOnFA/j804/RcuQwU0sLur8Robr6eWjUUzgrPMXUmAy6jX40D/clbwesgktdF1FSUoIzZ4X3ZevEyS5rfaeVNdsKq6DjgggryxQUZLumkzE0H3kdX7S3k7MhghPHBWhsOITFQBCCEwKMymU4dqyFydh6cQq+7fgaYnEP3j99ClTID6X8CsZvjDNbMuj3oO3DNgiIrL9fAhW5EbY+NHmfgB53X+rCrV8n0NkpgkGvxjXVNfw2cQMdIhHzBAs2C66qFJgzkDPiH31oWAUxKsjs8fVrt9NKvhIPM+d12RnWyDgc9DJHp8/lyFm/FVbB/0cCfwNPmmgOvqTrCwAAAABJRU5ErkJggg=="},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>t});var i=s(11504);const l={},o=i.createContext(l);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);