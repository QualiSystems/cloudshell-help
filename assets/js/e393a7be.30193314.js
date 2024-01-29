"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[1937],{430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(5893),n=r(1151);const o={sidebar_position:2},i="Using Traffic Generator Ports as Abstract Resources",a={id:"intro/features/traffic-gens/Traffic-Gens-Abst",title:"Using Traffic Generator Ports as Abstract Resources",description:"A traffic generator test configuration defines a test framework that\u2019s mapped to specific ports. However, when using CloudShell abstract resources to dynamically reserve your traffic generator ports from a pool of available resources, the reserved ports may be different from reservation to reservation. Therefore, to ensure that the test configuration file will properly use the reserved ports, we'll assign a Logical Name to each traffic port. Then, when running the test, CloudShell will use the port\u2019s logical name to identify and map the physical port to the ports defined in the test configuration.",source:"@site/docs/intro/features/traffic-gens/Traffic-Gens-Abst.md",sourceDirName:"intro/features/traffic-gens",slug:"/intro/features/traffic-gens/Traffic-Gens-Abst",permalink:"/cloudshell-help/next/intro/features/traffic-gens/Traffic-Gens-Abst",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/intro/features/traffic-gens/Traffic-Gens-Abst.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Traffic Generators Overview",permalink:"/cloudshell-help/next/intro/features/traffic-gens/"},next:{title:"CloudShell Quickstart Guides",permalink:"/cloudshell-help/next/category/cloudshell-quickstart-guides"}},c={},l=[{value:"Option 1: Configure CloudShell to set the logical names on the ports during reservation setup (using additional info)",id:"option-1-configure-cloudshell-to-set-the-logical-names-on-the-ports-during-reservation-setup-using-additional-info",level:2},{value:"Option 2: Pre-configure the logical names on the port resources and configure the abstract resources to select the resources that have the desired logical names (using requirements)",id:"option-2-pre-configure-the-logical-names-on-the-port-resources-and-configure-the-abstract-resources-to-select-the-resources-that-have-the-desired-logical-names-using-requirements",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"using-traffic-generator-ports-as-abstract-resources",children:"Using Traffic Generator Ports as Abstract Resources"}),"\n",(0,s.jsx)(t.p,{children:"A traffic generator test configuration defines a test framework that\u2019s mapped to specific ports. However, when using CloudShell abstract resources to dynamically reserve your traffic generator ports from a pool of available resources, the reserved ports may be different from reservation to reservation. Therefore, to ensure that the test configuration file will properly use the reserved ports, we'll assign a Logical Name to each traffic port. Then, when running the test, CloudShell will use the port\u2019s logical name to identify and map the physical port to the ports defined in the test configuration."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"We highly recommend using the same logical names for all blueprints and test configurations. In these examples, we will use \u2018Port A\u2019 and \u2018Port B\u2019 as the port logical names. Other examples are: Tx/Rx, Port1/ Port2"})}),"\n",(0,s.jsx)(t.p,{children:"The following options exist:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#option-1-configure-cloudshell-to-set-the-logical-names-on-the-ports-during-reservation-setup-using-additional-info",children:"Option 1: Configure CloudShell to set the logical names on the ports during reservation setup (using additional info)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#option-2-pre-configure-the-logical-names-on-the-port-resources-and-configure-the-abstract-resources-to-select-the-resources-that-have-the-desired-logical-names-using-requirements",children:"Option 2: Pre-configure the logical names on the port resources and configure the abstract resources to select the resources that have the desired logical names (using requirements)"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"option-1-configure-cloudshell-to-set-the-logical-names-on-the-ports-during-reservation-setup-using-additional-info",children:"Option 1: Configure CloudShell to set the logical names on the ports during reservation setup (using additional info)"}),"\n",(0,s.jsx)(t.p,{children:"This option applies to scenarios where you have different ports that are not specifically configured for the test at hand. In this case, you don\u2019t care which ports you use as long as they\u2019re available, so you set the logical name as additional info on the abstract resource. This provides the greatest control since you don\u2019t specify the logical name of the port as a requirement, which can limit your search for a port. Instead you set the logical name once you get an available port using a custom script."}),"\n",(0,s.jsx)(t.p,{children:"To configure CloudShell to set the logical names on the ports during reservation setup:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the appropriate domain, open the Inventory dashboard and in the Abstract Templates page, create an abstract resource template for the traffic generator chassis resource."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create the port abstracts."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"On each port abstract, open the Additional Info tab and use the Logical Name attribute to set the logical name according to how the port is referred to in the test configuration you load."}),"\n",(0,s.jsx)(t.p,{children:'For example, setting "p2" as the logical name for Port 2:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(1514).Z+"",width:"904",height:"660"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click Save Changes."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a blueprint and add the abstract templatefrom the Add Abstract Template catalog."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add to the blueprint a custom setup script that takes the value from the port\u2019s Additional Info and sets the value of the Logical Name attribute on the port."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Reserve the blueprint."}),"\n",(0,s.jsx)(t.p,{children:"The Logical Name is set on the port resource. You can now load a test configuration that uses these logical names."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"option-2-pre-configure-the-logical-names-on-the-port-resources-and-configure-the-abstract-resources-to-select-the-resources-that-have-the-desired-logical-names-using-requirements",children:"Option 2: Pre-configure the logical names on the port resources and configure the abstract resources to select the resources that have the desired logical names (using requirements)"}),"\n",(0,s.jsx)(t.p,{children:"This method limits your search to only those ports that have already been defined with a specific logical name."}),"\n",(0,s.jsx)(t.p,{children:"Unlike option 1, in this scenario, your ports were pre-configured to perform specific tasks. So here each of the traffic generator\u2019s ports has a logical name configured and you explicitly state the ports you want to use, using requirements, and since the logical name has been configured ahead of time, you don\u2019t need a custom script to do the assigning."}),"\n",(0,s.jsx)(t.p,{children:"To configure the abstract resources to select the resources that already have the desired logical names:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Set the Logical Name on all the traffic generator chassis resource\u2019s ports."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the Inventory dashboard, click Advanced search."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(7782).Z+"",width:"942",height:"244"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Search for the resource."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"For each selected port, click the port\u2019s More Info button and select Edit. For example:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(7555).Z+"",width:"1205",height:"734"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Make sure the Logical Name attribute is set according to how the port is referred to in the test configuration you load."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(8240).Z+"",width:"801",height:"549"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click Save."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Repeat steps b-e for each additional port."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the Inventory dashboard's Abstract Templates page, create an abstract resource template for the traffic generator chassis resource."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the template's Requirements page, add the required port abstracts."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a blueprint and add the abstract template from the Add Abstract Template catalog."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Reserve the blueprint."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1514:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/TGAbstractAddAttribute-d4f93208cba253b5f39cfcb337f2ac99.png"},7782:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/TGAbstractAdvancedSearch-22a81588015220f85d3e9d9dd4439d0f.png"},8240:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/TGAbstractLogicalName-bb7f2e37e9d661d79cdd645c939667c3.png"},7555:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/TGAbstractMoreInfoButton-d2aeb83e52c1c3858c4ffdeb08702031.png"},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var s=r(7294);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);