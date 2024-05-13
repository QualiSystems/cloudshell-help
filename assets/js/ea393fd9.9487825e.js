"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[63120],{48912:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=s(17624),r=s(4552);const i={sidebar_position:1},l="Python Coding Standards",d={id:"devguide/reference/python-coding-standards",title:"Python Coding Standards",description:"In this article we will describe the coding style for all scripts and drivers. Adhering to the same coding style makes our code more readable, easier to understand for other teams and easier to maintain.",source:"@site/docs/devguide/reference/python-coding-standards.md",sourceDirName:"devguide/reference",slug:"/devguide/reference/python-coding-standards",permalink:"/cloudshell-help/next/devguide/reference/python-coding-standards",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/reference/python-coding-standards.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/cloudshell-help/next/category/reference"},next:{title:"Shellfoundry",permalink:"/cloudshell-help/next/devguide/reference/shellfoundry"}},o={},a=[{value:"Sphinx documentation example",id:"sphinx-documentation-example",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"python-coding-standards",children:"Python Coding Standards"}),"\n",(0,t.jsxs)(n.p,{children:["In this article we will describe the coding style for all scripts and drivers. Adhering to the same coding style makes our code more readable, easier to understand for other teams and easier to maintain.",(0,t.jsx)(n.br,{}),"\n","Quali Python Standard derives from\xa0",(0,t.jsx)(n.a,{href:"https://www.python.org/dev/peps/pep-0008/",children:"PEP 0008 \u2013 Style Guide for Python Code"}),"\xa0and extends it with a few clarifications:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"4 spaces are used for indentation"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Class names should use the CapWords convention"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use one leading underscore only for non-public methods and instance variables."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Function names should be lowercase, with words separated by underscores as necessary, started with a strong action verb (started with lower case)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Variables should be lower_case_with_underscores. Avoid single character variable names"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Module names - lower_case_with_underscores."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Constants - UPPER_CASE_WITH_UNDERSCORES"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Inline comments should start with # and a leading space"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Code should be documented with doc string according to Sphynx. For details guideline see:\xa0",(0,t.jsx)(n.a,{href:"http://www.sphinx-doc.org/",children:"Spinx Guideline"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sphinx-documentation-example",children:"Sphinx documentation example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def Deploy(self, context, Name=None):\n\n    """\n    Deploys app from template\n    :type context: cloudshell.shell.core.driver_context.ResourceCommandContext\n    :param context: The CloudShell execution context for the command\n    :type Name: str\n    :param Name: Name of the app to Deploy\n    :rtype: str\n    :return The VM details JSON of the deployed VM\n    """\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unit tests should be located under similar location as the class they test, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vcenter_shell\n|-- tests\n|    +-- test_commands\n|          +-- test_virtual_switch_to_machine_connector.py\n+-- vcenter_shell\n     +-- commands\n          +-- virtual_switch_to_machine_connector.py\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.python.org/dev/peps/pep-0020/",children:"PEP 20 \u2013 The Zen of Python"}),"\xa0is a set of sentences that express the spirit behind Python."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"We would like to emphasize the following:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Beautiful is better than ugly."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Explicit is better than implicit."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Simple is better than complex."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Readability counts."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Errors should never pass silently."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unless explicitly silenced."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>l});var t=s(11504);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);