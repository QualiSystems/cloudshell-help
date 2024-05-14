"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[83484],{50672:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(17624),l=s(4552);const r={sidebar_position:19},i="Sandbox List View",o={id:"portal/sandboxes/sandbox-workspace/sandbox-list-view",title:"Sandbox List View",description:"List view displays a flat hierarchy of the sandbox's elements. Unlike in Diagram view, List view enables you to see all elements in the sandbox, including sub-resources, such as blades and ports.",source:"@site/docs/portal/sandboxes/sandbox-workspace/sandbox-list-view.md",sourceDirName:"portal/sandboxes/sandbox-workspace",slug:"/portal/sandboxes/sandbox-workspace/sandbox-list-view",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/sandbox-list-view",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/sandboxes/sandbox-workspace/sandbox-list-view.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Extend and End Sandboxes",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/extend-and-end-sandbox"},next:{title:"Sandbox Save and Restore Overview",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-save-and-restore-overview"}},c={},d=[{value:"Searching the list",id:"searching-the-list",level:2},{value:"Sorting and filtering the list",id:"sorting-and-filtering-the-list",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sandbox-list-view",children:"Sandbox List View"}),"\n",(0,t.jsx)(n.p,{children:"List view displays a flat hierarchy of the sandbox's elements. Unlike in Diagram view, List view enables you to see all elements in the sandbox, including sub-resources, such as blades and ports."}),"\n",(0,t.jsx)(n.p,{children:"Here, you can filter and sort the sandbox's elements, view their general and connection details, and search for specific elements on the list."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The default view mode can be changed using the ",(0,t.jsx)(n.code,{children:"ShowListViewByDefault"})," key."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(36736).c+"",width:"624",height:"275"})}),"\n",(0,t.jsx)(n.p,{children:"By default, List view includes the following columns:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Column"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"The full name of the component. For sub-resources, the full name contains the resource name and the path starting with the root resource. For example: Switch 1\\Blade 2\\Port 34"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:["The type of component. Possible values: ",(0,t.jsx)(n.strong,{children:"Resource"}),", ",(0,t.jsx)(n.strong,{children:"Service"}),", or ",(0,t.jsx)(n.strong,{children:"Application"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"The IP address of the component. For sub-resources, this is the absolute address of the sub-resource, for example 1.2.3.4/1/7."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"The resource model."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"The components to which this component is connected."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"The values of the component's attributes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsxs)(n.td,{children:["Indicates if the element can be shared with other sandboxes at the same time. Possible values: ",(0,t.jsx)(n.strong,{children:"Shared"}),", ",(0,t.jsx)(n.strong,{children:"Unshared"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"Actions menu."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The last column includes the Actions menu. For reserved resources, this column also displays the resource's live status indication."}),"\n",(0,t.jsx)(n.p,{children:"You can rearrange the columns by dragging a column to the desired location. The left-most column's content is displayed in bold font."}),"\n",(0,t.jsx)(n.p,{children:"The Actions menu enables you to perform actions on a specific resource, App or service in the list."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To perform an action on an element in the sandbox:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the row's ",(0,t.jsx)(n.img,{src:s(55240).c+"",width:"34",height:"33"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the appropriate action:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Share/unshare reserved resources"}),": Configure elements in the sandbox to be available or unavailable for other sandboxes by choosing to share or unshare them. For more information, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/resources/share-reserved-resources",children:"Share Reserved Resources"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Telnet/SSH/RDP"}),": Connect remotely to a resource via RDP, SSH, or Telnet from CloudShell. For more information, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/resources/connect-remotely-with-qualix",children:"Connect Remotely to Devices with QualiX (RDP, SSH, Telnet)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Remove"})," to remove the selected resource or App from the sandbox."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"searching-the-list",children:"Searching the list"}),"\n",(0,t.jsx)(n.p,{children:"You can search for specific resources, sub-resource and Apps on the list."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To search the list:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Search in list"})," field, enter a word, number or phrase."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The list displays the matching elements."}),"\n",(0,t.jsx)(n.h2,{id:"sorting-and-filtering-the-list",children:"Sorting and filtering the list"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Column Settings"})," menu enables you to sort the list and filter the elements according to a specific word, number or phrase, as well as to show or hide columns."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(92332).c+"",width:"247",height:"121"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To sort the list according to a certain column:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Click a column to sort the list in ascending or descending order."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To hide columns:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the column's ",(0,t.jsx)(n.img,{src:s(68920).c+"",width:"26",height:"29"})," button and select the Columns option."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unselect the columns you want to hide."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Full Name"})," column cannot be hidden."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To filter items on the list:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the column's ",(0,t.jsx)(n.img,{src:s(68920).c+"",width:"26",height:"29"})," button and select the Filter option."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the filter criteria. You can set up to two criteria."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(25005).c+"",width:"166",height:"217"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Elements that match the filter criteria are displayed."})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},68920:(e,n,s)=>{s.d(n,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAdCAIAAAFMKtu3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACwSURBVDhPzZNBDoMwDAR5ex/RK3eeVsGhHwjd1OsIcFqZWG0YcXCsZWNjM6zKY15OH3I03J6MhE2UUmKo7N4u7D3ffsChLVw1ZanXb/nQp36cwn90lqyz87Wc8WP4FZcOhQX87uOEhwcloKtS0WEYsXkwVHr1UcWli82tGXhlO9wOmGtCHGjHXJhOdrKNdiEPdKoOC4vS7Noe6GTnxNvstUfh5Dd28scx14Q4ZLt5eQFAPpvd4+GfgwAAAABJRU5ErkJggg=="},92332:(e,n,s)=>{s.d(n,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAAB5CAIAAABqVCCsAAAbL0lEQVR42u2dC0ATx9qGdxMItIBa0CrUClUERWg9WrVQe6RWURTwAnokKkJFsEi4BESIQLiGawAJ0gNqAS/QvwKtoBVQKbZeWluqPQgVREWqAi2gCAgJJPvPJiSEmwYBMcm8tbA7O/tld3jy7TuTzQ769OlTZIDq6urAT01NTQRKKNgm0isUUi6hYJtIryDlkgq2ifQKUi6pYJtIryDlkgq2ifQKUs5X429xkcf+hxg4+zobTx68ity1iQwJUo7rnx9iPDJqwILujpDgTzUGrSNvbSJLgpTzBXO5TAtSLqlgm0ivIOWSCraJ9Go4lFckfbonR7S2aN/R1ZdYHGr0anWwVp3pUjA/gVzrbx31K75VZa6lbyB1KanAp6cAyPrgD64G433Cg2uEjqWt2N+x3v5rsi6+0iw8Z5W51oFhrovVB5aICkDJrugEsgGpuX9D6VZn+3gc/IPz1iKn6DAbXRLC6V8AJbGGn8srknxqyQK0cbavLU4m67ZdCglpc41ejRT4ZM6IxlFuq0j1KV6aTK4VFrzWGmHvs604MukaR9UqkH+izcJGaKvODokjUZOtSP1Llt4QtdOlSI9m8mEr1YK+DVWRale8ONl1vipoyJAby6PJnP4FuuPdaFKkkVGO/0WTVH3tmyPzdMNc+RlJ+LeqznYpMJAWykeWy9uKk4p1nWbkpZNcnQzEKEcQzrU4/2b76MXX+pX4IpG9lIe0OYnnB4Fqs13ywPpi1SELoCTXCClHOBVJ/qnVnOW+CVbTxC7WgziWRftyRHtJo4Zsk+aCuEvzqVbqN5JSESfX+eJv9Z7GEqNcUAIoFzbL3D0ZyTYzxFpO2FDNFQWZmXkVyFInKnk+3m4DCqAk1UgpB0kmzzF7WjJ1MW4Um/tlpIEF0quh2qQ+z8U2/k/+oqJl/Gnq/Lbh5PL6PJ84Vd/o5chQDdVj/Xq3DCiAeqFGTrk4yFJL+cs7FoBpsYHAJQP3kapKpc4oHoYvB81pdml5kdO0vg2Fd3Sa7cOsZpBAp9MjTzfBqS2ybwF1Pux/Sqyxp1waxlhevvdZm+dzyUDYFQRsppJAL8VfOKLCd23TxMdYBCVi7QQuhXkzDrvO6N9Q025kRoak//qYJArSvwBKYsHxcr7gZ58yLUi5pIJtIr2ClEsq2CbSK0i5pIJtIr2ClEsq2CbSK0i5pIJtIr2ClEsq2CbSK/miHMOwW7dujfdRQI255syZg6KoaBX95ZdfBlZSVVXt7Ozs7u4e76MdTQHEuVyugoLC4sWLx/tYoMZQ165dA+gSiUQR6Cj424/3Ub0iAcTBW7e8vBxSLtsClM+bN09ZWRmALiiRI8rB+7u9vb2yshJSLtsClOvr66uoqIDrtqBEvihvbW29ffs2pFy2BSifPXu2mpoapHw4epTvxUS8mJZa430KUJIIUj58ytllTLJD1n1E2zYt08tIabzPAuqFkl/KwWkKKK+urh4O5Y/yKTbBVzn8ZZIxPZsFE/prL0C5rq6ugHLBMAuk/DkSpnGRiJq2h7P7J3Ruw4VwT7/8ahVDq/AQf5N3h3dgt4+sO6J5InLNqH6fs/tWnOcth8T1b6EjjyV9gpQPN5fz9/37jHtod3DiukGhafzeM7jdl7VpKrfxnPcBNIK+Qllh8DhN31Iz3oujzheLzLubxki7x15ADdkwOkTeiPe8Zxe/QWPkkaRXkPLRp/zZ+VC/Jvv4TdMJhJ7NdRfC3Omnqkkf7E1O3qLffpoSc2fqnT8VJ5Vml4Kt5MO/9YJ+Ky2ucSu5Iab0k/1r30Z47PKknTuP3lZc5Jp+cOvMrqqv97jE3uDMsgz9kv6phiDsQ23zmMgQk6Z4j0INrCDpV83/xKZ4mbzZUOSzmfbL1B3rjO7qusRb/gNyuf2Bf5d4fln33p9fH6+d63s81WYG58aX21y/avjIx0m1doG/11wFyc5f2gQpH33KeTxew89ZiVnnn2ltcN9tNZNQ4kutdT2ydXrrtbCdFbZZG256JmqEBi6dSBiYy68fZGKfe/3rcU7QtcXB698FFWInhTKWNRyzy1503Ory5myDI/4mCtfjtpesSFuY6VGDh63I3l4y55hJ8boLS//PfdGT7ymRCvTwN+I8Hjgf2q7dXOAV2kETUf6jexDXL9H6LTyCeba5KGC07TnLbB9Iuaxp7CgXCTiWfaGtNJoS/cR0FvUDDHv8rUeyVsyueq8T+vGeAKn+lHdcD//M8VsOHrRr/r6ilE1Tu2rOHsm8/A+mu3TTls+4yW6VIm8NjoFiEfgzD1/Blu4v3PFXeM1W3JnwLYo/Et4TWeBYeinPAC89h/j4lFv67ANmhe63QcBJCL4qOCSZFKR89Cmv/srhzOwk909UkJYSumfDrkStJPd74rm8zCNDRPlRrTjPJT07dl+LYjylBK54EyzfyqCUr2TNydlwbskxjwUKxUHeiPueu3ty8NTLvRHn+AOey/3rPeM2T0F53G6eYgWrx3/zsQ6bxPRtdAd9g/o8ShQ3aFDK9Vkwl8u6xjCXd9aciqfHfFfOVV/iFh9vO4fUz5eLEiewxba7ynefTVw5mQB8ztWoAMwlFDgZPMitNPc/VhwwuRfg63e2mvD+rpTDn88V+PI/MMOtUQc9FquKh7XtPChOedyqlhNeOxPKpmxzNGnQ2B5hPoBy9/Q5cZ5TfgrZHZD3cIK+NukDerbPHEi5jGkklCON+ZRghM6ynDy83V5DsdmIkhK7lOlcZpFurz/eRzNGgpS/FOWyotYrDBvv3CaS4cagWJqp9L9nhxCkXK4plxONnPIy5ocOWT3LJA1DCz8GzVQaPvOGlMuPRoXyVL2CHouK3+SRY5qdbv36cw4plx+NMuV4t2x1ldNvXkZg+VEJgxaUe5OjYeaVQrfWURKVtKkCH9iT8htL04NpqVdxa+gV5GWJ1xKPKFxG8ilWZQtd76cnGbKuUPRqcoK9WEX3ORrGromxZH2wE7sy09stCY9jy4j1MnmxxYSUy49Gl3L2o8Jg8kWzfIapGruMRQ7i0NK9FiKlTHuGJjOHrFFC+zTHOI9lqdVayiSnG6axVuHwFpllC4rsg5Ag/M6nIShfna6TAsKpIexSxqcMJRa+jO9VaJpJ0y6h2Jw2ywRxwNWEXGqdH2Sq9oLjhpTLj0bXlyOIhkXsiSC8sw6KI3SyM611EBGqpjcB5QuzY/lpnS+Q+a2qnK7wM7/gMmD/m9fCoSgXXiNK8bK8FLE7XvFdy2wv00yU+l5NnidIufxotH15DsXqisUPzFVswFrw1d5axnS8SmtlYWpqav7VNiNrqpfrKp2qPm5HGKnu+ZQPgnHfdxqC2KYNj/LpBpByWdaDijHy5X2L+6n1CpMcoRGbb1E1erlckvwtLki5/GjMKGeXMW2Az+Yb6dbKsiYdI526TOsgThDL3kgNdBUdvDn0fHuNPr6cwqb9QFuohPuYMttCmola4xWGs1udfT/KcV/O0krBA4G3i30J7suLhHFA36CsCjEyeuEgD6RcfjTalINVE6ZOZjrw4+yafGYQEx9R0V7mxGDgIyGPChm0CFBC6h0bGWSMBd8z2DmiqFXNjM5YmJtOCu9Lee+ACtI7fCOMg0g6ZA8plx+NnHJp1Ygob84PikTcoy3fGu+zgJJEkPJhUI4KGwZtPEuP6XKPspJtyjFZ+ZIopBxSPqQg5VKvsaOcwGu4GO8ee+bum/MsPfwClkh8twMIG7gp8HdAl9q8tQFM50VjdZMgVhEbct+Bbv6CrzxDyqVeY0f5k2LXA+2+dMvpvKbzYSmIz74VysTBA7acpZzUTnQ0QEVhA05qhXzxQXfb7e/Dwklu6atH+34gCfnuqQwpl3aNHeVtPwXHNDsEWb0reo7ww0shUWF5d5TmO8Yl28xsKfCLuzP1Tj1XvfTMb2DruoO/CkAXUQ6WOb9ERDQ7BZq2fBdo99V11NA5jWEzq/PPg/uo6YI4G2aRxMNav/cYXECY39e8Y84IpC5XLqR8U6NXdirjHwPf+BgbLbShJHhTzLVpG8w/+Gv27kDtNMC6/5q6I77fT0YK025oWAWl71ryZkdFEojf8JHPZtVaQ6q3HlGSVpECQcrHwrFw6n/NTc8pfKa1weFzqxnI5WjanR0H7DQ7ria5/mmZZllBY03cH2KsOmQuR4RJ175xd4Fu2m4T7pXI/V1OQewopqp/hEl9JuXcvANb2wRh3248TY8nuqy5HNewK2aTds03jhfnHl7/gJLQvS947ds3krddX/bNfx77B/C3Pj3vE9+1T0T5V1vOfpy6d84zPMJexqyzDrn6ib7zla4fcjj/7xN7IeVSr5egnIC0/MHatT/nbm8RUdMy9mun+SqD1geOJSKm1dVbmclnl4j9873vkSlBzg0haTPDqfqE51EuyOXkKnPqdzzBVpDyt6oWZ2WXtKCzPtyw/d+qRaLKCN/8bIvuuaXiQ59CDyRIEFnwEpvuuwlWBW8eEeWpftVbGOsnoDfBwuZI3W988dXJ2D+nacfAEULKpV4vl8tBz7Jo/7oDP+NzchBQ4iLv7/zX9J+F5k6WQ/HMg8AAYE8vH/B7YBOtdWLfPfFcXs5nSEB59jTWzn8J4w/w5bMvOlyYm4S/i7o6uaTqYw6nFx/wnYtdZoa3fL5/4iF+Lp/2d27AgTdALk9t2Q06A6AmpqD0tMBNnPJtjQFR/K2N33scRAMGpXxrmAHM5bKml3YsPE75l19sL7hLeMcm/UuXeeKz1QjEZT8oPuifcqaMq77ELjKhn4EGvvy0kHLgg733/Lnt5EHBJOjiYyzmXjFfLHsb67gLfHl6adf0NRHAbXdfwePUkObZM1I3GioJwtaqmrnFB654p0UwsKO8wDUq3O6tYoo45Tvfu4f7+5tam+0WPdJw8JmePpBysID8GEZnfPdggv67CkYux30h5VKvEX32WZ8fnoQ4hllOHe+zGG2xOYgSiVN6yKPss2T7meN9NKMlSDm8j6VXbdcYLv65T0iGq31jXZbKzlf6IeWQctkXpBxSLvuClEPKZV+Qcki57GsQyts4vPE+qlchEeV19+9AymVbgHJN7VmQcki5LAtSjlM+3scCNeaClN+Bz2ORbV27BnM5pFzWBSmHlMu+IOWQctkXpFwyyhuFT8QzphfQkeBBl2VhAhbZFKQcUi77gpRDymVfkHJIuewLUj4WlD9/YozGkqAijSDycB7QC9VfjYXMIi0nstGLJmPgC1I++pSzSxnkklX4037ZNTnemTqxtIVK/WJl6LCG9RhqqP7i/0FK9SzosUGrXvjQGkj56FNexiRXWQtm4egRyO1uznGlHD0LRmyQKUlAuaYQ9h7qESalSIOUn1S6MDyFXBVMyWoypZ9g4JPSpNbo3czKeGTkl55ircMuYzk4Z1SRFlJTEvlPDZZPif4giOpCKiv2+UkdUj4WlFNqdoib9Mp06xy9dJqJWk2mfaoWi9pKG5xycplFJlm/jGXJ1GClkzVKgmitrizjq5Rgjh/LWqOUSb5ilmNbQ4lTYzBMH2WSTxtlyu8FobHPZCek5yd1SPkryOW92Jcx7atsY0kRQ+Ryfi2RoRHsBijvU02vpjA182ITomdMtl2lA3M5XzjlDL8hm2PklJexjD/PFr6Y+jwLaqjfJ5rDCTBOeoW+3LqMPFguL6REIHTmKiWQpEvM8iWk3KzEusgEn3mvhEZjU1mr5HVY5xU7FkD5Id3TiYLnS9adcbP7dtnRw9avP+evYIylVa1nyo1BfblR6xWms3fWI+Mdlm0csxRJczkwMt6001UkQ1dWir2RfOfyV9f77EM50pS/16LK/qrXPLBcV8IMCM4r56ivoCb4W2sriUraVOdt9O1J+Y3Xj4aEHLnaTDK08qC7rsWvOeUJi9Jnn41ZizMjXEbOeqyrWOBaeyzJIP6y8+yaU2Heqefvc9SNneJjNunhs9re/nqvz5d4HJvQGMpHw5jVFo6XS6Ne8UiiOOXsunPBjj+afR2Kz2qbsiOY45NGWYBcT3CImxZ7bIvGTwHL8z46FbNWq/V3puNRo+QEM+SM25ZzK48mWGq2lrJ2BSP+JymGSkNQbp6p899kD3xW2+tRy+OUEvFlfK+ipRl+M350szuz8jCIU5e/1+53q1z6JxLPagspl3mNri9HEHWLsKP0TwDxN5nLonWOHrXWRvjLh/VyE0wrAOULToZt6J3VFmToasfLFEN8pemM28bbOy56LByK8mrHX/k1S1nGqbq5Kea9rgjEMa/YcsnrIyXBsrDm8wQplx+Nti//1m3Lzxano8w4ANkwsVltlwTmJlhqtFZeOHIo/czVtnkbXT1cP9Op6uN2et4MlvXPp1zcFPUeg9g7DUFsDo025VDSrDHz5UJkB530oPVnpmOURti3FtWjl8slyd/igpTLj8aMcnYZa0swEgB8OT6rbXmTzjydupNbgjn+iVsN1dhVWS772L7f2qv38eVuHJ9irwVKAPctN7fk7jNRa7rC3ONev70f5bgvT9X8b7QdPqsta9dF3JefF8YBfYObVYih0QsHeSDl8qPRphysLoubkZG2jj+rbVJYHD6ior3MPiQcHwmpK2IGRIASUu/YyCBjLGDPs2G74863qq6gBy7IySSF96UcH6k7uc899ZcmRH2l60H6Oh2xOIiGwRrfwH2mkHIokeBnn5By2RekHD6PRS4EKYe5XMYFczmkXPYFKYeUy74g5ZBy2RekHFIu+4KUD/M+lucI3sryugpSLmEuZ5cxyQ5Z94euoG2bluklv/d7v9aSX8rBmXI6Ozjsjuqqyo9NjEWlPISLIgQU489Vi+HTkvN/Y10YVhtjTs5tndJRW0/QIhAxIhF78rjtrUmTse5F1l8FfK5H1HhzIoJ08XhPCIQp+G5PHiGTtLjI43ZEdUK7YpPKU1VERQkhIpyHGDoVVVBA+kyIy0XAJtD2oBDlCn7h/0Tz36ASnRXUQMkv5QAeTmengPKlYpRj+BYU7c8WF+Fx2wikBxGfLs9A35nYivEwHhfTenPCX09UNhZm0LQ0FFH+3m0tSG3WzG3Zk5B/uGrvKS2wO7e+MrLNJ2zt5ZwAhRX+H6uTWu/x1KYTwdsHIyA8FPzA31E8DOWiqKLwVXnC1xZSDhHvK/g8FonUQ3lnR/XtPpQPUbsL4XV183gdPN6jmN07Cqu6OjEOG+tG2O7Zf+zWU+Ah7YBHtIvHRiYo1hwOvLs9bCXncSt3wsRJPOQvrGsSSbHpkNc9W+aHrTleZ94/uG22IgHpJvCeKfBICJeEoDyMwEUVCHg675WQcoj4AMHnsUgkHoaARA5AF1A+ECRMmEX5OZqHG3kesYuLsJUa/qZ5r/zx1Nu1728svLRbp23CG6o8hEMAKZkHrIYCseowvcJkv+V7JBKx5RnGfZgb8scSn5XNuUENdv/+YWXE5c5ONdf/KzLvCmL4FNx6sJF6zltb4/oZasls7Ejz7hsfTiX8622CEG3oWAYXfB6LRBJRfptPOWFABQyvghtzVAA6LmCX2bx2Qnf3z/4rQk9/sv8iw2Cy8jS8FoahPbW6kfK0mZQC9fa6zs5nrieu7+bGeNc6xVpVx7nd25a46VnezoKZyTvmlmfZnNI57rtc5S7NuX5vCnp024NPD9u9r9xzdJDy5ws+j0UigZNld3awAeX83udglGMYbplRREg5n/suAkeR+/S855rQko/8LyQun4IpivPH5SLE8jDv6i1RljOJioRnbS1v3k/wvu8WvaaK6d60lblGocjl+DsxHnq3EpcfyCBVtjU85hJ3/XZz2zHnq+tTNmqjwhcXHib05YPqFT+PRVoFPDCgvBNQXllpIu5YxHywkPIecRGMi3STANb1p53Wh/66wL/oS8spgHxCbx1OF4JUuLn+nZi6Ap8hGM/Kf0R4N7gEm91K8uyyZSxT/4kaP5keMKv6kNOFpV/56KggyOO6N1RbEvfW7kgwU+MgBODMiX0OokcQdDGN1LHIz9zNzW0dWFdnVWWlsXEv5f3IFhegvBvpUkJIXX/ne69l/GQceP6AuXrfuh2cJ90Pj9KKZrCc1wvC1VRkJ9W+G2A+h7GrMOrQ5r/LmKH/uW9+LuGDpwEhO38sV9Q02xvlaFFy3Pud9ZSP9d5V6RlC7D1QsWUIulDD7X3K7wzlgHK0u6PyVhWgXFTOw3go3hKDAMVFeF0IRxlRbm/MC1kVdcE06HzwykmqCJ9EHg8f5UZF9gXkdHxcUHBdxARjJ138LE0QuBAMQXl9h1SgJNdwRxLlmnKkq6Oqsg/lgqGVoSjnYhxStzJSV+j4xTf64Uzn+ZMm4Ft4GMbFUAIAl4j0OPxuYIr44cA/LkCbALqnXP4qyjclgt14BJQgOqDeXi7UqApS3sF3LCaS7MIDfUusWxFVQppLLj78+P1ZiiqKCAlkbB6Xy+OhRHwwBh9PxC0PykX5eZrfY+XwMMFnQPhPkMGJwl5SdyePSMLfHvjFgKtAIPR2dKE7GT1ByjsqQe9zcMoHGd0A0KJ4tn7699MJE1UwRYA1QTAcw8M/L0X5twTwKRdxCijvxvB9BLcNoKjwtgE8XDeCKgzWvYQDK6Mpeaecy+GPJOKOhX/WGHDXhOfsgvF4BDzj9qmD4bmcSyAQ8U19d+j5LQIWRV6GXUzg43sj8f8nDDuOvEqux1ietHd0sdm3K2+ZGC/hkwRyMg9DxOjpByQmQq138wB8MbGag4V5ScjFgvIjEImKww4kr5J3yp+1t9fXPZqjr6ekpKRAgNlRNiXvlLe0tDx8+JCkqIDfY8j/b/BcO+hHM1jfDeig5QN2ewmz3T8g/lpETC4+vBstaen0+HLBqhxR3vqso72D8xRXC/9WFOC6eWgfWHuXhN4aFfAsBA8bfj9xNPqUKILCvqlkIhIVVFRUJk6aBH7KKeWdXbz2trbOzk4ul9tz/hAeGRJgmUgkKisrq6iqgp9gWVA+XMrLmB86ZPUskzQMLfwYNNMXfuT6Gkjwjbj2LozD4YAFkMV7zn8UYjedp21OKAULG2ML98wZsLn5f1kJ4Rm/P0EmLdwVHGQ9izSMrT16XBC4JWZ6wgWnuaIizv8OOFVapG+aVZG6ipIHChbuPcpYrT7e7Ty+wkdtCQSQwkkkksiUIy9Feaqe8Gu9j/IpNjmm2enWrz/nAsrZGBHwPSaXr6bT+9bd3nHJ06BfeV2uawziE7FxhlJrxXFPap3Lqb0Leu+laz0X4HDTOs1zvhpS/52H/W27PluFlS7R1wZe4Fin/LxH9BT31ouh3k27UjZOE6yWxy8/MvtknIUGAgWuzyhgHRW7TP8/YGxjp20J7AoAAAAASUVORK5CYII="},25005:(e,n,s)=>{s.d(n,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAADZCAIAAAAlntw0AAAPQElEQVR42u2df1Ca5x3AX2OEkoTGlbSduKV0S3FpZXajbaK3naTd1LvF3Dqya2VrxK6DLIXOinOGphW3BLucJG2wXbHZBdMW/wndLXhtZNeW7Fpt2nBnDu0qy24smyQzktpBhrxq3Au8KBAaiRr58f1+/tH38eV9v+/zeb/PA8n35ck5ffo0gUAih1IuFApTHQayTNjtdlQOC1QODlQODlQODlQODlQODlQODlQODlQODlQODlQOjsTKA592P7mrfSBwS9kvXnpBcteKFTkLPb5Dp3TV6qvX3aDwF394h0njqdCIblSAaUgi5VOfHnj0rS2HG761ZmLA8CvHQy8+NvHi0//YcfBhzoJPM2ZRdvH0KsGNuoyI+uu/Ba7nFZGrmO9qbvTVLo6EWe56o9Z8Z4eqjB1pGDi4851cZs/rHxc80m5Qla36zzv7nt5tObvq2/WGQ5IiZ7jXmDa13CMziXl2nXKsVl+5LtKj1RVWSWs/tVFz5LSCYXpKfsBOCBvoV1o5DEuHXbjPIHG2Krs9opY3tNQr3b0qyTMnSf5W7aFIBjoSnUU22OqqlTmr6rqpPUpbTsicz1gZayxd/dyaYKDhC/D2qtqYGq2ITano5LarC/o1jeoeJyMUA9kROuz5iHn6NOzh6DiZYY9V9FWc4Hd2OPlOc5dbsNtoEPOIQHjvULwKb2vUfmmoPvHAPjP6icXU+ceBFQ/94tmfbvoSpfyR97/XtVMw/pby+ZUt+1gH6v8tf/WxO7x9WqlTbK7xaFtJZQtD39hNiHari63KQZGe6ogoUQR93w8bxWa+UV1G2DTqgELP7ZI4tpokRQ59tY6jN0o4VLNXERQgdmw1S7j0Zsh5oC/BWfjm2Ox26CS2CoNS4LUo2xgt9G1HeG1qPaNFLaB+rGtRc8wSE8+gLvOYJGaBqcKaSDm/JyZO+jhRWU4dXVfJtuskfRVmJc+mUbqlRklBn6bRo5i72lTLvR7lNFMTZzpl75QdbSAO0gP7QPCXPcS+rjsPNNwb6oNOTrta0K/pZFcTvYGtRTYnX9Bv52ulRUQi5Q7dfaGEDELlPN3f62ZHwoi6Mbu509JHssuqa8VCetD12q4+C6mLVx6brPRLqdtFR8jKrF0cjUrgpcYHVfegLyaEOOW8rpg4aXtXDez0L3yXpVXeZvWQoZEmE5V/bmt+blTxOzGXkfP37sfNdx1uZuijle/N18VkubRozKJttTJr2lWcbnWHnSObu9wo5Vy9SjhslPYIqJ9sIhAgmMxZw7HKS+3KVt9uvZg7bJRYhSYlfbAEZ5lTLXfVGKq5X6A86Lyx2ydUaIOxKg8wWrSV1NBd1zOX5XqxTWRWCtzm0PDA74mJk4gEEL6KeOWETmyroMIk6VEpcrWplpu8coK4dOr1ZzUvn7qUW/LDVm3Tg7c7YrL84LapmLmc6hGXWdLJMVDT5bCx2sw/pi6L9FJkanToJXVO2Qm9yDM767VrRJ7EyiMzKcmpaDmireRGwrr6LLP3TK9yWyvf0CeyJlZOBOxaiSN4d1LielXbnzlJlNdW+7ylh6r7G0M7usxyaZuDWyvmO/mKuQjCcdIRBOiraCFbY7PcYayTd7h41Iv7eVKTuCB+v7QCP5eDA5WDA5WDA5WDA5WDA5WDA5WDA5WDA5WDI4Fym82W6qiyH5FIlKpTJ1aewoAgkNoeRuUpAJWDA5WDA5WDI62Vz8x89qenjEUHn964colPPGbTWDkaSZr9X/LyAFV5bLHQDS5+Ti8yQ3nR9FDHz3529G959yuML/3ka3RleyCmDpRw6OvkXe7SBilxXqhTFcRXiEWVgWpE0fVhkYq4YOGYcDCq/LSIed0XlFrcFuX21n4ytpFR2nJMX82da8gM5bdZGtrzf6st/89rO47db2wKJ31svarivDyytcUuPh2vXOaJKQMt7U+U5UybWumWGSW82bK6VHXMQrlK+lXCM0X5xinX238wfXBxZsN3frzjQfr5ldh61SNEZ6Tu7D5rxVXKFeyYMtDEyudyny6eLcu0PI+TnkB4pii/8vuH/7zptfpvr3xX0zhdf+j761YQwSyPrgN10VuzWd6rbCNadJVMe7C43FJhjSkDvUp5qESVnfFZHmRWekLhmaJ84/m/PNu8++2zK775c8PhxzfGzuV0HSjDpnlK3eMuLRec5MpOqwTePp28sdtdWlvtIysMCiKmDLTcEaM8UqKq5NgyeS6PEJJuFyYUnubKFwQ9sIP8/DWL26K3C5WJhKNygGSfcmQeUDk4UDk4UDk40lF5qvsk+0kv5Uh2g8rBkVj56OjoxYsXJyYmUh0esnBuuummW2+99bbbbotrT6Cc8u31evPz8/Py8lIdNrJwJicnx8fH2Wx2nPUEyoeGhgoLC1ksVm5ubqrDRhbO9PS03+8fGRm55557otsTKKeaiouLGQxGTs6Cv+EPST0zMzMkSQ4ODsbN2omVl5SUrFy51KVPyLIzNTV15swZVA4IVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA4OVA6OZJUPDQ3xeLzVq1enOmBksVy+fNnlcs3/6MLo6KjP5ysoKGCxWKmOGVk4fr/f7XYn9YASgY8hZgXX8Rgikt2gcnCgcnCgcnCgcnBk5DdC4XeULYbM+963NA8v/UHl4EDl4EDl4EDl4EhO+bCxurPApKtkpzpcApUvmqSUDxs13S5SqNBec+m6ZVrdDpUvkmSUDxt1npqa8zp7uTq0JJbSymFYOvq5Ne0GVRmbcPeqJM/0c2vFfCdfsSjlSS0sh8oXSRLKHXodKVMJPWZNf6lGzHXoqq0ik0rotSjbGC36skF6mauxXlUruXuRWZ7EwnKofJHMqzxg126RvxmWULz7uFHsiYzf4YF8br2zpRnY511YDpUvkvmUU8bbvEqNKPjGbdioHKzQ87tjlIsG1WqPQi/mUq7aiJYlmMvnWVgOlS+SeZQH+rStpFIrCr9VDzoXyVy6aOXV7NDyeA5urUx4nlOrXYq3b9dcWA6VL5I0/Vx+jYXl0iG8jCZNlV+DNA8v/UHl4EDl4EDl4EDl4MBCKHBguSM4UDk4UDk4UDk4MvLtWxaQXisb46egG006rl+Oym8oqBwcqBwcqBwcaa58zBKpbVtaxmwaK0cjWfLjZgJQlcced5mK4NODDFEecOjr5F1OhrDBcEhSxAz/MRCqe7MT4UYitIu7tEFKnBfqVAURqfQh+OGdSf5W7SGNiIhS7tDdV9dN/SxtOaEXDmoa1T1x58kYkqrEzxDllL8DbK1W5DZJegQmOjmHjWIz36guI2wadUChOC+PbG2xi0/HK5d5NEq31Cgp6NM0ehRRxdAh6Cxn2uiqeG+fVuoUm6VFqeqYhZJEJX6GKBcEXL2dppMegl8qqankhbMvkp1Bao4cITojpa/3WSuuUq5gW1rlbVYPGc7mxMrncp96USenXV2WaXmeRCV+hign9GJrmVElJGxqdaBBXxmadIeN0h6BXiVkE4EAwXTRW7NZ3hssbNdVMu06ia3CUmEV2ypMSgFJDQneBFkud9UYqtkZn+VB5qnEzxDlArctPMcWK/QGqSB2Lg9Oz+0aEcOmeUrd4y4tF5zkyk6rBN4+nbyx211aW+0jKwwKwlgn73DxasX8fp7UVO6IUT7Wq9zWyjf0KTm2TJ7LI1yzEj/dlS8AemAH+flrlmtU4qNyeGSfcmQeUDk4UDk4UDk40lF5qvsk+0kv5Uh2g8rBgcrBgcvpZC3XsZwO5dvr9ebn5+fl5aU6bGThTE5Ojo+PJ7Vo1tDQUGFhIYvFys3NTXXYyMKZnp72+/0jIyPzL41HNRUXFzMYjJycnFSHjSycmZkZkiQHBwdxzVNA4DK34EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EDl4EhW+dDQEI/HW716daoDRhbL5cuXXS7X/I8ujI6O+ny+goICFouV6piRheP3+91ud1IPKBH4GGJWcB2PISLZDSoHByoHByoHByoHByoHByoHRwLlF8YDD7zxr5HPr8z74isrJ1Md//XxFXbeBz/hrb+ZEdc+MTFx5swZv9+f6gCXGBaLVVJSQn1Aj25MoPyrHX/7dw6byEvin95y5r8t0gvSz83xjezixzV/+OGHhYWF+fn5qY5viRkfH3e73Zs2bYpuTKA8V+u8su72pA6ZccopPnPPNN0T12az2bJ1aqMEx315KCoPgspRefaAylE5Kg+BypdcOfO9HatEkQWwPnUGiDtWvHLUN1F1807vf7/1wfL2wTIpJ88e29PU+fFnjI3i5/YqHiDef/7dW5q3372810qkVDnTdfS/dbGtv/zB2p2+zzeeXPXXHcE74MXl6YNlUU4OHHji/QdfVty7hjx3fM+x9XulF/aY1u9XgFVOOyaCyicJPvMbVFtgsv7NyaqtrCp2zoR3srnHR5SvbWbP5DOu1B/1GZawD5ZF+ScdT5zddnjb+tmGSyeaQsqp5G+qf+kMUfLkC/u3byDCW+TXK5/b3/ydCx1NJwjfuwxFj2zpbo00GNgptUev7JxTPpflF6rWGleRm98kpT9iV3nGX1mztpn83+Y/T/5zCVUQy6a86Zxkf9Utsw20coZpx/ENLzcEx/nfkLLnGJ1NFyQvb//yR8/vuSTbv970xCdVh6kbYSlJwyyfU05tvsBdEd5j3P0/DXFT6K9L2gFEirOc6NjypJluEr/Uu+3c8/UH3vtskiDu/7WZUh53nywFaa2cyvJXGBOi44HxgpU879S95WszV/kXzeUM064Td++nmgmSJBhnO3a8/+Bh2d0klfM+GSTloWHfH8h5e/rt0FxOBKZeedf7aUkGK599x+5bc79s/97tG3yxc3lw9t7b/MAl0676V8+tr9m24aP1ksMbjmeR8nQCP5ejcgKVo/JsApWjclQeArry7K6KKcjxuncVxTWfOnWKy+VmZVXMyMjI5s2boxsTKHdenPpu97kx39S8R8y42rfbV+e99yhvIydB7dvAwED2PYOXbO0bkt2gcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnCgcnDQylMdBrKs/B8OtuCO2p9V1gAAAABJRU5ErkJggg=="},36736:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/SandboxListView_624x275-e3c33d27e74217fbd7d6f50f95f520ee.png"},55240:(e,n,s)=>{s.d(n,{c:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAIAAAAzse47AAABMUlEQVR42u3WzUrDQBAH8J2dTeLHURFafQRvggelFPtQIujRmxcv6guI4MWjT6BCT95EbQSNpBSREhUxGzs7Jq0PEAIDIhn2/mNm/gMLvWHqkhdnP5VYOecgfIo1WTnjl4miCBEBQJaJ41jUmBT0+31po2b+HcP5Y1WkE1TJjFZhvp3KCBAYtUJQugRVhTl7MLtd30e117JrDUIh5uTObF0GU8iHHdteJE/LMOePZv/aC1DtrGYrC2SEGMfFg/H+oVwKqjBhorsDnTex3qTGLEvt5vjWbF4EM0YdddL2EvlCQzu9N9tXgY98sGFbTbHdPH/AzbAY2vKcm58WG1pK6msEeY6NZm98oSJMfZ5/9zwrVM3UTDR4NS4TNZgZwiTz03ckK/STzg0igt7bSLSVSf0Al5jMxPZ7SvwAAAAASUVORK5CYII="},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>i});var t=s(11504);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);