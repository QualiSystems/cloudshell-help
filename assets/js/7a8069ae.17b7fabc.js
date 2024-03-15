"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[96712],{78052:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=s(17624),i=s(4552);const o={sidebar_position:5},l="Customize Remote Access Terminals",r={id:"install-configure/qualix/post-installation-config/customize-remote-access",title:"Customize Remote Access Terminals",description:"You can both customize the default access terminals, and add and customize your own access terminals in order to access your devices remotely from CloudShell Portal. You can also control which access terminals are available for which sets of equipment, and more.",source:"@site/docs/install-configure/qualix/post-installation-config/customize-remote-access.md",sourceDirName:"install-configure/qualix/post-installation-config",slug:"/install-configure/qualix/post-installation-config/customize-remote-access",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/customize-remote-access",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/post-installation-config/customize-remote-access.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/config-jks-cert"},next:{title:"Set a Static IP for the QualiX VM",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/set-static-ip-for-qualix"}},c={},a=[{value:"Adding new remote access terminals",id:"adding-new-remote-access-terminals",level:2},{value:"Customizing access terminals based on specific equipment",id:"customizing-access-terminals-based-on-specific-equipment",level:2},{value:"Customizing the look and feel of the remote access links",id:"customizing-the-look-and-feel-of-the-remote-access-links",level:2},{value:"RDP:",id:"rdp",level:3},{value:"SSH:",id:"ssh",level:3},{value:"VNC:",id:"vnc",level:3},{value:"Setting the QualiX remote connection browser&#39;s title",id:"setting-the-qualix-remote-connection-browsers-title",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"customize-remote-access-terminals",children:"Customize Remote Access Terminals"}),"\n",(0,t.jsx)(n.p,{children:"You can both customize the default access terminals, and add and customize your own access terminals in order to access your devices remotely from CloudShell Portal. You can also control which access terminals are available for which sets of equipment, and more."}),"\n",(0,t.jsx)(n.h2,{id:"adding-new-remote-access-terminals",children:"Adding new remote access terminals"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To add new remote access terminals:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"C:\\ProgramData\\QualiSystems\\Settings\\Global\\ServerUniversalSettings.xml"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under the ",(0,t.jsx)(n.code,{children:'<ConfigurationSection name="LinkApplications">'})," tag, add the new remote access terminals."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, to grant access to a webpage of a device, copy one of the default access terminals (for example, RDP/Telnet as shown in the ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm#Step4"}),(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"}),"), and simply change the settings described in the following steps."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Perform the following steps in the line of the appropriate remote access terminals:"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change the entire ",(0,t.jsx)(n.code,{children:"pattern"})," value to be the URL of the desired webpage."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change the ",(0,t.jsx)(n.code,{children:"name"})," to be the name you want to display for the remote access terminal in CloudShell Portal (for example ",(0,t.jsx)(n.code,{children:"company site"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["For example: ",(0,t.jsx)(n.code,{children:'<key name="Company site" pattern="``http://quali.com``" icon-key="Web" />'})]}),"\n",(0,t.jsxs)(n.p,{children:["The specified link (in this case ",(0,t.jsx)(n.code,{children:"Web"}),") is displayed in the ",(0,t.jsx)(n.strong,{children:"More Options"})," list in CloudShell Portal (together with the predefined links to the default access terminals):"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(3252).c+"",width:"170",height:"216"})}),"\n",(0,t.jsx)(n.p,{children:"When you click the (\u201cWeb\u201d) link in an active sandbox, the desired URL (quali.com for example) is displayed."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"customizing-access-terminals-based-on-specific-equipment",children:"Customizing access terminals based on specific equipment"}),"\n",(0,t.jsx)(n.p,{children:"This section explains how to create an access terminal to a specific resource, service or App (component). This is done by setting, in the remote access terminal's connection string, the name of an attribute that is on the component so that when connecting to the device, the attribute value on the resource will be used."}),"\n",(0,t.jsx)(n.p,{children:"Furthermore, only components that have all of the connection string's attributes will include its access terminal."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To customize access terminals according to particular sets of equipment:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Quali server, open the following file in a text editor ",(0,t.jsx)(n.code,{children:"C:\\ProgramData\\QualiSystems\\Settings\\Global\\ServerUniversalSettings.xml"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Embed attributes in the connection string in order to make it flexible according to the device from which you are trying to open an access terminal."}),"\n",(0,t.jsxs)(n.p,{children:["You may embed any attribute inside the connection string in order to make it dynamic and based on the device from which you need the access. Any attribute you have existing in ",(0,t.jsx)(n.strong,{children:"CloudShell Resource Manager Client"})," may be referenced inside the connection string by placing it inside curly brackets {}."]}),"\n",(0,t.jsx)(n.p,{children:"For example, you can edit:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<key name="Web" pattern="``http://quali.com``" icon-key="Web" />'})}),"\n",(0,t.jsx)(n.p,{children:"with dynamic attributes like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'<key name="Web" pattern={web_URL_attribute} icon-key="Web" />'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"Resource Manager Client"}),", create and attach your custom attribute to the resource models/families for which you would like to use the customized connection string."]}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsx)(n.p,{children:"To customize the common access terminals to specific sets of equipment, do the following:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For each access to the device, create a unique set of attributes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"{access type} User (for example, SSH User)"}),"\n",(0,t.jsx)(n.li,{children:"{access type} Password (for examle, SSH Password)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Attach the attributes to the specific resource models for which you would like to have this access option."}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Return to the ",(0,t.jsx)(n.code,{children:"ServerUniversalSettings.xml"})," file, and add the attributes in {} inside the matching connection string."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, attributes ",(0,t.jsx)(n.strong,{children:"SSH User"})," and ",(0,t.jsx)(n.strong,{children:"SSH Password"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<key name="SSH" pattern="https://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={SSH User}&amp;password={SSH Password}" icon-key="SSH" />\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Keep the original ",(0,t.jsx)(n.code,{children:"User"})," and ",(0,t.jsx)(n.code,{children:"Password"})," attributes in a resource model if you need some server-side operations on it (connecting routes/auto load, etc.)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"Quali Server"})," service to apply the changes."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"customizing-the-look-and-feel-of-the-remote-access-links",children:"Customizing the look and feel of the remote access links"}),"\n",(0,t.jsx)(n.p,{children:"The below customization options are available. Simply add them to the remote access terminal line like any other parameter (qtoken, port, username, etc.) in the format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"&amp;<param-name>=<value>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rdp",children:"RDP:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"color-depth"})," - The color depth to request, in bits-per-pixel. This parameter is optional default value is 16. If specified, this must be either 8, 16, or 24."]}),"\n",(0,t.jsx)(n.h3,{id:"ssh",children:"SSH:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"font-name"}),': Default value is "monospace".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"font-size"}),": Default value is 12"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"color-scheme"}),": The color scheme to use for the terminal emulator used by SSH connections. This parameter accepts four special values as the color scheme parameter:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"black-white"}),": Black text over a white background."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"gray-black"}),": Gray text over a black background. This is the default color scheme."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"green-black"}),": Green text over a black background."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"white-black"}),": White text over a black background."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"scrollback"}),": The maximum number of rows to allow within the terminal scrollback buffer. This parameter is optional. If not specified, the scrollback buffer will be limited to a maximum of 1000 rows."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"server-alive-interval"}),': By default, the SSH client does not send "keepalive" requests to the server. This parameter allows you to configure the interval (in seconds) at which the client connection sends "keepalive" packets to the server. The default is 0, which disables sending the packets. The minimum value is 2.']}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vnc",children:"VNC:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"color-depth"}),": If not specified dictated by the VNC server. The color depth to request, in bits-per-pixel. This parameter is optional. If specified, this must be either 8, 16, 24, or 32."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-the-qualix-remote-connection-browsers-title",children:"Setting the QualiX remote connection browser's title"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["This article does not apply to remote access terminals based on the new ",(0,t.jsx)(n.strong,{children:"vCenter Console Proxy"})," service."]})}),"\n",(0,t.jsx)(n.p,{children:"It is possible to customize the title of the browser tab that opens when clicking the remote access link."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To set the caption of the browser tab:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"title"})," tag to specify a CloudShell string attribute on the resource."]}),"\n",(0,t.jsx)(n.p,{children:"The attribute's value will be used as the browser tab's title."}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.strong,{children:"Tag Title"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<key name="SSH" pattern="https://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={SSH User}&amp;password={SSH Password}&amp;title={Tag Title}" icon-key="SSH" />\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart the ",(0,t.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n",(0,t.jsx)(n.p,{children:'This is how the title should look (assuming the attribute\'s value on the resource is "new title"):'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(70304).c+"",width:"447",height:"44"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3252:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Customizing-remote-access-7356633efbf1ac8c0692e4ff1ec58792.png"},70304:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/QualiXTabTitle-02755abaaad3b45b4befb73ddb9a3b27.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>l});var t=s(11504);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);