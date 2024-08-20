"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[99892],{64512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=t(17624),r=t(4552);const a={sidebar_position:3},s="Get Blueprint Details as XML",o={id:"api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions/get-blueprint-details-as-xml",title:"Get Blueprint Details as XML",description:"Description: Retrieve the blueprint details of the specified blueprint as an xml.",source:"@site/versioned_docs/version-2024.1/api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions/get-blueprint-details-as-xml.md",sourceDirName:"api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions",slug:"/api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions/get-blueprint-details-as-xml",permalink:"/api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions/get-blueprint-details-as-xml",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions/get-blueprint-details-as-xml.md",tags:[],version:"2024.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Load (a Blueprint Package for Modification)",permalink:"/api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions/load"},next:{title:"Get Topology Names",permalink:"/api-guide/packaging-api/creat-and-load-blueprint-pkg/packaging-functions/get-topology-names"}},l={},u=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"get-blueprint-details-as-xml",children:"Get Blueprint Details as XML"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"})," Retrieve the blueprint details of the specified blueprint as an xml."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Signature:"})," ",(0,i.jsx)(n.code,{children:"get_topology_xml(topology_name)"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"topology_name"})}),(0,i.jsx)(n.td,{children:"In"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The name of the blueprint that you want to retrieve."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Out"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"XML representation of all the blueprint details."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Sample:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'packageEditor.get_topology_xml(\'environment1\')\noutput: \'\n<TopologyInfo>\n   \\n  \n   <Details Name="environment1" Alias="environment1" Public="false" DefaultStartTime="2015-11-04T16:46:33.0000000" DefaultDuration="8342794" DefaultUserName="User1">\n      \\n    \n      <Instructions>These are my instructions.</Instructions>\n      \\n    \n      <Categories></Categories>\n      \\n    \n      <Diagram Zoom="1"></Diagram>\n      \\n  \n   </Details>\n   \\n  \n   <Resources>\n      \\n    \n      <Resource PositionX="205" PositionY="139" Name="Chassis1" Shared="true">\n         \\n      \n         <SubResources>\n            \\n        \n            <Resource Name="Blade1" Shared="true">\n               \\n          \n               <SubResources>\n                  \\n            \n                  <Resource Name="Port1" Shared="true"></Resource>\n                  \\n            \n                  <Resource Name="Port2" Shared="true"></Resource>\n                  \\n          \n               </SubResources>\n               \\n        \n            </Resource>\n            \\n      \n         </SubResources>\n         \\n    \n      </Resource>\n      \\n    \n      <Resource PositionX="873" PositionY="133" Name="Chassis2" Shared="true">\n         \\n      \n         <SubResources>\n            \\n        \n            <Resource Name="Blade1" Shared="true">\n               \\n          \n               <SubResources>\n                  \\n            \n                  <Resource Name="Port2" Shared="true"></Resource>\n                  \\n            \n                  <Resource Name="Port1" Shared="true"></Resource>\n                  \\n          \n               </SubResources>\n               \\n        \n            </Resource>\n            \\n      \n         </SubResources>\n         \\n    \n      </Resource>\n      \\n  \n   </Resources>\n   \\n  \n   <Services>\n      \\n    \n      <Service PositionX="228" PositionY="302" Alias="ServiceA" ServiceName="Service"></Service>\n      \\n    \n      <Service PositionX="740" PositionY="306" Alias="ServiceB" ServiceName="Service"></Service>\n      \\n  \n   </Services>\n   \\n  \n   <Routes>\n      \\n    \n      <Route Alias="ABC" Source="Chassis1/Blade1/Port1" Target="Chassis2/Blade1/Port1" MaxHops="2" Direction="Bi" Shared="true">\n         \\n      \n         <Attributes>\n            \\n        \n            <Attribute Name="Attribute String" Value="Hello" Target="All"></Attribute>\n            \\n        \n            <Attribute Name="Attribute Password" Value="0yGbF/81FFbwyV6uJfWVbQ==" Target="All"></Attribute>\n            \\n        \n            <Attribute Name="Attribute Numeric" Value="666" Target="All"></Attribute>\n            \\n        \n            <Attribute Name="Attribute Lookup" Value="A" Target="All"></Attribute>\n            \\n        \n            <Attribute Name="Attribute Boolean" Value="True" Target="All"></Attribute>\n            \\n      \n         </Attributes>\n         \\n    \n      </Route>\n      \\n  \n   </Routes>\n   \\n\n</TopologyInfo>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>s});var i=t(11504);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);