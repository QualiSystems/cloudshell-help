"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8e3],{46832:(i,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var t=s(17624),n=s(4552);const o={sidebar_position:14},c="Intellisense in Shells and Scripts (using Docstrings)",r={id:"devguide/reference/intellisense-in-shells-and-scripts",title:"Intellisense in Shells and Scripts (using Docstrings)",description:"In this article, we\u2019ll learn how to allow the IDE to recognize the CloudShell elements we want to use. This way, whenever we type in these elements in our methods, the IDE will provide useful code editing features, including code completion, parameter info and member lists.",source:"@site/docs/devguide/reference/intellisense-in-shells-and-scripts.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/intellisense-in-shells-and-scripts",permalink:"/next/devguide/reference/intellisense-in-shells-and-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/reference/intellisense-in-shells-and-scripts.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Shells that Load a Static VM",permalink:"/next/devguide/reference/shells-that-load-static-vm"},next:{title:"AWS Traffic Mirroring",permalink:"/next/devguide/reference/aws-traffic-mirroring"}},l={},h=[{value:"Docstrings in shells",id:"docstrings-in-shells",level:2},{value:"Docstrings in orchestration scripts",id:"docstrings-in-orchestration-scripts",level:2},{value:"Docstrings in resource scripts",id:"docstrings-in-resource-scripts",level:2}];function a(i){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.M)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"intellisense-in-shells-and-scripts-using-docstrings",children:"Intellisense in Shells and Scripts (using Docstrings)"}),"\n",(0,t.jsx)(e.p,{children:"In this article, we\u2019ll learn how to allow the IDE to recognize the CloudShell elements we want to use. This way, whenever we type in these elements in our methods, the IDE will provide useful code editing features, including code completion, parameter info and member lists."}),"\n",(0,t.jsxs)(e.p,{children:["This is done by including Python documentation strings in our methods. Python documentation strings (or docstrings) allow you to associate documentation with Python modules, functions, classes and methods. For additional information about docstrings, check out this\xa0",(0,t.jsx)(e.a,{href:"https://docs.python.org/3/tutorial/controlflow.html#documentation-strings",children:"Python documentation page"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"To make use of intellisense, we recommend to use an IDE that supports such capabilities, such as PyCharm."})}),"\n",(0,t.jsx)(e.h2,{id:"docstrings-in-shells",children:"Docstrings in shells"}),"\n",(0,t.jsx)(e.p,{children:"Let\u2019s start by creating a shell:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"shellfoundry new docstrings-test\n"})}),"\n",(0,t.jsx)(e.p,{children:"Since we created our shell from a shell template, in this case the generic resource template, we already have docstrings defined for the out of the box method:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings",src:s(60912).c+"",width:"624",height:"275"})}),"\n",(0,t.jsxs)(e.p,{children:["The initialize command\u2019s docstring defines the\xa0",(0,t.jsx)(e.strong,{children:"InitCommandContext"}),"\xa0object. Therefore, if we want to use this context in the method, intellisense will recognize the object and display its contents:"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-context",src:s(988).c+"",width:"624",height:"179"})}),"\n",(0,t.jsxs)(e.p,{children:["Note that if you create your own methods in the driver, you will need to manually create the docstrings and fill in the parameter types. First, create a method that uses the shell\u2019s\xa0",(0,t.jsx)(e.strong,{children:"context"}),"\xa0object and type six quotes in the method. Note that in Pycharm, when you type in three quotes, the IDE will add an additional three automatically. Make sure the cursor is in the middle (3 quotes before and 3 after) and press the\xa0",(0,t.jsx)(e.strong,{children:"[Enter]"}),"\xa0key. The docstrings section is created, listing the method\u2019s referenced parameters (in our case,\xa0",(0,t.jsx)(e.strong,{children:"context"}),"):"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-manual-2",src:s(56132).c+"",width:"624",height:"98"})}),"\n",(0,t.jsx)(e.p,{children:'At this point, intellisense still doesn\u2019t recognize the object, as context can be any one of the driver\u2019s imported "context\u201d objects:'}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-context-2",src:s(82768).c+"",width:"624",height:"66"})}),"\n",(0,t.jsxs)(e.p,{children:["So, let\u2019s fill in the object\u2019s type (in our case,\xa0",(0,t.jsx)(e.strong,{children:"ResourceCommandContext"}),") and optionally provide an informative description:"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-manual-3",src:s(14528).c+"",width:"624",height:"96"})}),"\n",(0,t.jsxs)(e.p,{children:['Now when you write "context\u201d in the method, intellisense will identify it as a\xa0',(0,t.jsx)(e.strong,{children:"ResourceCommandContext"}),"\xa0object and display the appropriate information:"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-manual-4",src:s(39596).c+"",width:"624",height:"219"})}),"\n",(0,t.jsx)(e.p,{children:"Note that the type doesn\u2019t have to be a class. It can also be a string or integer and it\u2019s a good practice to define your method\u2019s parameters this way. For example, if you\u2019d like to define a custom parameter that is a string, you\u2019d write something like this:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-manual-5",src:s(95768).c+"",width:"624",height:"93"})}),"\n",(0,t.jsx)(e.h2,{id:"docstrings-in-orchestration-scripts",children:"Docstrings in orchestration scripts"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"sandbox"}),"\xa0is the main object we use in CloudShell blueprint and orchestration scripts. The\xa0sandbox\xa0object is provided with the\xa0",(0,t.jsx)(e.em,{children:"cloudshell-orch-core"}),"\xa0python package so include it in your\xa0",(0,t.jsx)(e.code,{children:"requirements.txt"}),"\xa0file, import the\xa0",(0,t.jsx)(e.strong,{children:"sandbox"}),"\xa0object into the\xa0",(0,t.jsx)(e.code,{children:"main.py"})," file, and set the docstring in your method as follows:"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-orchestration-scripts",src:s(5728).c+"",width:"624",height:"348"})}),"\n",(0,t.jsx)(e.h2,{id:"docstrings-in-resource-scripts",children:"Docstrings in resource scripts"}),"\n",(0,t.jsxs)(e.p,{children:["In CloudShell resource scripts, we mainly use the\xa0",(0,t.jsx)(e.strong,{children:"cloudshell_script_helpers"}),"\xa0object. Since\xa0",(0,t.jsx)(e.strong,{children:"cloudshell_script_helpers"}),"\xa0is a module of functions and variables, you can access its contents directly from your method without having to create a docstring. The object is provided with the\xa0",(0,t.jsx)(e.em,{children:"cloudshell-automation-api"}),"\xa0python package so include it in your\xa0",(0,t.jsx)(e.code,{children:"requirements.txt"}),'\xa0file and import the object as "script_help\u201d into the\xa0',(0,t.jsx)(e.code,{children:"main.py"})," file and you\u2019re good to go."]}),"\n",(0,t.jsx)(e.p,{children:"For example:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"docstrings-resource-scripts",src:s(34592).c+"",width:"624",height:"260"})})]})}function d(i={}){const{wrapper:e}={...(0,n.M)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(a,{...i})}):a(i)}},988:(i,e,s)=>{s.d(e,{c:()=>t});const t=s.p+"assets/images/Intellisense-in-Shells-and_1_624x179-c2f457e1e85238b277464aa22e802808.png"},56132:(i,e,s)=>{s.d(e,{c:()=>t});const t="data:image/png;base64,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"},82768:(i,e,s)=>{s.d(e,{c:()=>t});const t=s.p+"assets/images/Intellisense-in-Shells-and_3_624x66-4d4c6f8151f3db24888a820d9bed410b.png"},14528:(i,e,s)=>{s.d(e,{c:()=>t});const t=s.p+"assets/images/Intellisense-in-Shells-and_4_624x96-cf0d0f92c54f9d07e03021e67ee8097b.png"},39596:(i,e,s)=>{s.d(e,{c:()=>t});const t=s.p+"assets/images/Intellisense-in-Shells-and_5_624x219-69727b4b21004135a294cacf1a17641f.png"},60912:(i,e,s)=>{s.d(e,{c:()=>t});const t=s.p+"assets/images/Intellisense-in-Shells-and_624x275-24da0d74193c7214febc866070c88831.png"},95768:(i,e,s)=>{s.d(e,{c:()=>t});const t="data:image/png;base64,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T2FoJwynzDtwRERE1H7a5w6czwOrGoSiHD93eF0IVQ3Eh02YKS+ckhiXZagZXYwZiPRp8PmPA0sO+5vzIo2/merrhiSOZfQaiA6YiA2aCBdVeCwFUfG4sW/QciFYbTw+z0yL84hoU/MhRPI+EY1PrY+IiIioTbRFwHk0FzxB949O9h6/B46IiIionbVFwKWmIsjMxX50ei7Qcn1ERERE7aStP8RARERERM9jwBERERF1GAYcERERUYdpq4BzSBK8lgey++zrOxzOk7GnvtLD4XLCJ8acTn7NBxEREb162irgnKqK2oMcTPvsuC5DQ+/9DIKmfDrmtUPou5+G6uenRomIiOjV01YBJwc0lHZjUE6+363BHQ6hdDUMr+9szJeyUFo14HKf35+IiIjoVdBed+BCKoyycvo3TRtcET9COd/pn79q8NgagknPuTEiIiKiVwU/xEBERETUYRhwRERERB2GAUdERETUYdoi4BTFg7GxHLLZMDRNwexsBZalwTD8zce6rsK2Q5icLMLv96JSsTE4mIbHc/bJVCIiIqJXRVsE3PR0CeVyHOPjBczPV5HJmJibqzZ983hqqoR8PiK2VzA8nEVPT6IZfa2OR0RERHSZvXDAORwOSJLUctvfqnGnTZIcIghl6LrSPHbjrlzjblvjsab54PW6mnMac2VZap678bjV8YiIiIgusxcOOCIiIiL6cTDgiIiIiDoMA46IiIiowzDgiIiIiDoMA46IiIiowzDgiIiIiDoMA46IiIioo3Tj/wECMkVYUc5l9wAAAABJRU5ErkJggg=="},5728:(i,e,s)=>{s.d(e,{c:()=>t});const t=s.p+"assets/images/Intellisense-in-Shells-and_7_624x348-dd4c2e91ea5f7bd67958e1e8642bfa8e.png"},34592:(i,e,s)=>{s.d(e,{c:()=>t});const t=s.p+"assets/images/Intellisense-in-Shells-and_8_624x260-1566bafbc7214e6e7beb88fb18cb3ea6.png"},4552:(i,e,s)=>{s.d(e,{I:()=>r,M:()=>c});var t=s(11504);const n={},o=t.createContext(n);function c(i){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function r(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(n):i.components||n:c(i.components),t.createElement(o.Provider,{value:e},i.children)}}}]);