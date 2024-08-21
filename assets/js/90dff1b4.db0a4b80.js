"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[33403],{48986:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const t={sidebar_position:1},s="Customizing the Language File",a={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-the-language-file",title:"Customizing the Language File",description:"Language files are used to support various languages and locales.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-the-language-file.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-the-language-file",permalink:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-the-language-file",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-the-language-file.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CloudShell Configuration Options",permalink:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/"},next:{title:"Managing CloudShell Portal Tours",permalink:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/managing-cloudshell-portal-tours"}},r={},d=[{value:"Retitling CloudShell Portal GUI elements",id:"retitling-cloudshell-portal-gui-elements",level:2},{value:"Localizing CloudShell Portal",id:"localizing-cloudshell-portal",level:2}];function c(e){const l={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.header,{children:(0,o.jsx)(l.h1,{id:"customizing-the-language-file",children:"Customizing the Language File"})}),"\n",(0,o.jsx)(l.p,{children:"Language files are used to support various languages and locales."}),"\n",(0,o.jsx)(l.admonition,{type:"note",children:(0,o.jsxs)(l.p,{children:["Another way to customize CloudShell Portal is to change its design elements, such as the background color and logo. For more information, see ",(0,o.jsx)(l.a,{href:"/2023.3/admin/setting-up-cloudshell/cloudshell-configuration-options/rebranding-cloudshell-portal-white-labeling",children:"Rebranding CloudShell Portal (White Labeling)"}),"."]})}),"\n",(0,o.jsx)(l.h2,{id:"retitling-cloudshell-portal-gui-elements",children:"Retitling CloudShell Portal GUI elements"}),"\n",(0,o.jsxs)(l.p,{children:["This procedure explains how to change the display text of GUI elements in CloudShell Portal. If you want to use text in a different language, see ",(0,o.jsx)(l.a,{href:"#localizing-cloudshell-portal",children:"Localizing CloudShell Portal"}),"."]}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.strong,{children:"To retitle the captions of specific GUI elements in CloudShell Portal:"})}),"\n",(0,o.jsxs)(l.ol,{children:["\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:["Go to the ",(0,o.jsx)(l.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\Localization\\CloudShell"})," folder, and add a new file named ",(0,o.jsx)(l.code,{children:"LanguagePortal.Override.xml"})," if it is missing."]}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:["Go to the ",(0,o.jsx)(l.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\Localization"})," folder, open ",(0,o.jsx)(l.code,{children:"LanguagePortal.xml"})," (the regular portal language file), and copy any key into the new file, and override its value."]}),"\n",(0,o.jsxs)(l.p,{children:["If you would like to change a large number of keys it is possible to copy the complete content of ",(0,o.jsx)(l.code,{children:"LanguagePortal.xml"})," into ",(0,o.jsx)(l.code,{children:"LanguagePortal.Override.xml"})," and then edit only the necessary values in ",(0,o.jsx)(l.code,{children:"LanguagePortal.Override.xml"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsx)(l.p,{children:"Be sure to preserve any XML hierarchy in the original file."}),"\n",(0,o.jsx)(l.admonition,{type:"important",children:(0,o.jsxs)(l.p,{children:["CloudShell upgrade will override the ",(0,o.jsx)(l.code,{children:"LanguagePortal.Override.xml"})," file, so please make sure to keep a copy of your latest language file somewhere safe."]})}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:["To apply, restart the ",(0,o.jsx)(l.strong,{children:"CloudShell Portal IIS"})," service or open CloudShell Configuration and perform the ",(0,o.jsx)(l.strong,{children:"CloudShell Portal"})," configuration."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(l.h2,{id:"localizing-cloudshell-portal",children:"Localizing CloudShell Portal"}),"\n",(0,o.jsx)(l.p,{children:"This procedure explains how to retitle certain GUI elements in CloudShell Portal to a different language."}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.strong,{children:"To localize CloudShell Portal:"})}),"\n",(0,o.jsxs)(l.ol,{children:["\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:["Go to the ",(0,o.jsx)(l.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\Localization"})," folder."]}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:["Create a copy of the ",(0,o.jsx)(l.code,{children:"LanguagePortal.xml"})," file and add the language code before the file extension. For a list of supported file codes, click ",(0,o.jsx)(l.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(58124).A+"",children:"here"}),"."]}),"\n",(0,o.jsx)(l.p,{children:"For example, changing GUI elements to be in Danish:"}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.img,{src:n(11296).A+"",width:"818",height:"232"})}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsx)(l.p,{children:"Edit the necessary values in the new file."}),"\n"]}),"\n",(0,o.jsxs)(l.li,{children:["\n",(0,o.jsxs)(l.p,{children:["Restart the ",(0,o.jsx)(l.strong,{children:"CloudShell Portal IIS"})," service or open CloudShell Configuration and perform the ",(0,o.jsx)(l.strong,{children:"CloudShell Portal"})," configuration."]}),"\n",(0,o.jsxs)(l.p,{children:["Users can now change the language in CloudShell Portal. For additional information, see ",(0,o.jsx)(l.a,{href:"/2023.3/portal/overview/change-language",children:"Changing the Language in CloudShell Portal"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:l}={...(0,i.R)(),...e.components};return l?(0,o.jsx)(l,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},58124:(e,l,n)=>{n.d(l,{A:()=>o});const o=n.p+"assets/files/Locales-9ca3de1538a8c914eaa3aee5a68a2811.pdf"},11296:(e,l,n)=>{n.d(l,{A:()=>o});const o=n.p+"assets/images/LanguageFileChangeLanguage-502633cc770d36553493cd3d1290c700.png"},28453:(e,l,n)=>{n.d(l,{R:()=>s,x:()=>a});var o=n(96540);const i={},t=o.createContext(i);function s(e){const l=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:l},e.children)}}}]);