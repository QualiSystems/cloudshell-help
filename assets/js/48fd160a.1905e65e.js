"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[27100],{13144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(17624),i=n(4552);const s={sidebar_position:2},l="Annotated Start Page Example",o={id:"admin/setting-up-cloudshell/customizing-the-start-page-in-resource-manager-client/annotated-start-page-example",title:"Annotated Start Page Example",description:"Example code will be used to show a Get Started tab",source:"@site/docs/admin/setting-up-cloudshell/customizing-the-start-page-in-resource-manager-client/annotated-start-page-example.md",sourceDirName:"admin/setting-up-cloudshell/customizing-the-start-page-in-resource-manager-client",slug:"/admin/setting-up-cloudshell/customizing-the-start-page-in-resource-manager-client/annotated-start-page-example",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/customizing-the-start-page-in-resource-manager-client/annotated-start-page-example",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/customizing-the-start-page-in-resource-manager-client/annotated-start-page-example.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About the Start Page in Resource Manager Client",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/customizing-the-start-page-in-resource-manager-client/about-the-start-page-in-resource-manager-client"},next:{title:"Source Control: Using Local Tests in Automation Suites",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/"}},r={},c=[{value:"Example code will be used to show a Get Started tab",id:"example-code-will-be-used-to-show-a-get-started-tab",level:2},{value:"Explanation",id:"explanation",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"annotated-start-page-example",children:"Annotated Start Page Example"}),"\n",(0,a.jsx)(t.h2,{id:"example-code-will-be-used-to-show-a-get-started-tab",children:"Example code will be used to show a Get Started tab"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Tab Title="Get Started" Source="\\\\sharedDrive\\StartPage\\studio-getstarted.xml">\n   <Subject Title="Studio">\n      <Topic Title="Studio in action" Description="See how simple it is to use CloudShell studio for your first tests." Image="default.png">\n         <SubTopic Title="My first test">\n            <Link Type="Test" Title="Open sample" Target="CloudShell\\Test\\Local\\ My first test" />\n            <Link Type="Video" Title="Watch video" Target="http://www.youtube.com/watch?v=aFsAmnh8uug" />\n         </SubTopic>\n      </Topic>\n   </Subject>\n</Tab>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"explanation",children:"Explanation"}),"\n",(0,a.jsx)(t.p,{children:"First it will try to get the content of the tab from the provided source."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<Tab Title="Get Started" Source="\\\\sharedDrive\\StartPage\\studio-getstarted.xml">\n'})}),"\n",(0,a.jsx)(t.p,{children:"If it is not available it will use the fall back code (Studio subject)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<Subject Title="Studio">\n\u2026\n</Subject>\n'})}),"\n",(0,a.jsx)(t.p,{children:"If it is not available it will use the fall back code."}),"\n",(0,a.jsx)(t.p,{children:"In this case, the fall back has one subject (Studio)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<Subject Title="Studio">\n\u2026\n</Subject>\n'})}),"\n",(0,a.jsx)(t.p,{children:'And that subject has just one topic: ("Studio in action") with a description and an image file.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<Topic Title="Studio in action" Description="See how simple it is to use CloudShell studio for your first tests." Image="default.png">\n\u2026\n</Topic>\n'})}),"\n",(0,a.jsx)(t.p,{children:"In this topic there is only one sub topic, and this sub topic has two links: one for a test and one for a video."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<SubTopic Title="My first test">\n<Link Type="Test" Title="Open sample" Target="CloudShell\\Test\\Local\\ My first test"/>\n<Link Type="Video" Title="Watch video" Target="http://www.youtube.com/watch?v=aFsAmnh8uug"/>\n</SubTopic>\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>l});var a=n(11504);const i={},s=a.createContext(i);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);