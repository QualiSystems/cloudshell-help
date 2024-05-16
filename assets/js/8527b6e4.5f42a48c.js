"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57736],{90684:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>A});var r=s(17624),i=s(4552);const t={sidebar_position:2},l="Setting up Training Portal Using Docker (Over the Shoulder)",a={id:"install-configure/qualix/training-portal/setting-up-using-docker",title:"Setting up Training Portal Using Docker (Over the Shoulder)",description:"Prerequisites",source:"@site/versioned_docs/version-2023.3/install-configure/qualix/training-portal/setting-up-using-docker.md",sourceDirName:"install-configure/qualix/training-portal",slug:"/install-configure/qualix/training-portal/setting-up-using-docker",permalink:"/cloudshell-help/install-configure/qualix/training-portal/setting-up-using-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/qualix/training-portal/setting-up-using-docker.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting up Training Portal Using the Installer (Over the Shoulder)",permalink:"/cloudshell-help/install-configure/qualix/training-portal/setting-up-using-installer"},next:{title:"Welcome to your training session!",permalink:"/cloudshell-help/install-configure/qualix/training-portal/welcome-to-your-training-session"}},o={},A=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Setting up a new training session",id:"setting-up-a-new-training-session",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setting-up-training-portal-using-docker-over-the-shoulder",children:"Setting up Training Portal Using Docker (Over the Shoulder)"}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Docker installed and running"}),"\n",(0,r.jsx)(n.li,{children:"NodeJS 14"}),"\n",(0,r.jsx)(n.li,{children:"Internet connection"}),"\n",(0,r.jsx)(n.li,{children:"CloudShell 2020.1 GA or higher"}),"\n",(0,r.jsx)(n.li,{children:"QualiX 3.2 or higher"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To install the Training Portal:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On the docker machine, run the following from the ",(0,r.jsx)(n.code,{children:"/opt/"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'sudo docker run -d -p <TrainingPortalPort>:3001 -e QS_SANDBOX_API="http://<SandboxAPI>:<SandboxAPIPort>" --name CloudShell-Training-Portal qualihub/training-portal:<ImageTag>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<TrainingPortalPort>"})," is the Training Portal's port (Docker machine hostname/IP address is not required)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<SandboxAPI>"})," is the sandbox API hostname or IP address"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<SandboxAPIPort>"})," is the Sandbox API's port"]}),"\n",(0,r.jsxs)(n.li,{children:["The latest ",(0,r.jsx)(n.strong,{children:"<ImageTag>"})," can be found in ",(0,r.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247",children:"CloudShell Download Center"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you specify the ",(0,r.jsx)(n.code,{children:"<TrainingPortalPort>"}),", ",(0,r.jsx)(n.code,{children:"<SandboxAPIAddress>"})," and ",(0,r.jsx)(n.code,{children:"<SandboxAPIPort>"})]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'sudo docker run -d -p 5027:3001 -e QS_SANDBOX_API="http://192.168.85.24:82" --name CloudShell-Training-Portal qualihub/training-portal:0.1.0.6\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If prompted, provide the admin password and press ",(0,r.jsx)(n.strong,{children:"[Enter]"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The container id is displayed. For example:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(15980).c+"",width:"1029",height:"170"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To verify the installation, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"sudo docker logs CloudShell-Training-Portal\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(23152).c+"",width:"1029",height:"162"})}),"\n",(0,r.jsxs)(n.p,{children:["At this point, you should be able to access the Training Portal at ",(0,r.jsx)(n.strong,{children:"<Docker-Machine>:<TrainingPortalPort>"})," (For example: 192.168.85.28:5027)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(46240).c+"",width:"670",height:"342"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"In the this procedure, you will set up the over the shoulder links."}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsx)(n.p,{children:'An "over the shoulder" connection requires an existing "full access" session to the device (VM or physical). In other words, if the "full access" user does not have an active remote connection session to the device, the "over the shoulder" connection will fail.'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To configure Training Portal links:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the Quali Server machine, open the following file in a text editor:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"C:\\ProgramData\\QualiSystems\\Settings\\Global\\ServerUniversalSettings.xml"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do the following under the ",(0,r.jsx)(n.code,{children:'<ConfigurationSection name="LinkApplications">'})," tag:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the appropriate Full link(s):"}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["Make sure to use these links and not the ones in ",(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/qualix/post-installation-config/configure-remote-access",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SSH Full link:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'<key name="SSH - Full" pattern="http://<QualiX IP>/remote/#/client/c/ssh{qid}?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password={Password}" icon-key="SSH" />\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"RDP Full link:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'<key name="RDP - Full" pattern="http://<QualiX IP>/remote/#/client/c/rdp{qid}?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the appropriate Read only or Full access link from the sections below:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Read only links:"})}),"\n",(0,r.jsx)(n.p,{children:'In "read only" mode, the user can only view the session but not move elements or click buttons and links on the connected device.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'<key name="SSH - Readonly" pattern="http://<Qualix IP>/remote/#/client/c/ssh{qid}sharedr?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password={Password}&amp;shared=true&amp;readonly=true" icon-key="SSH" />\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'<key name="RDP - Readonly" pattern="http://<Qualix IP>/remote/#/client/c/rdp{qid}sharedr?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true&amp;shared=true&amp;readonly=true" icon-key="RDP" />\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Read/Write access links:"})}),"\n",(0,r.jsx)(n.p,{children:"A full access connection grants the user full permissions on the device or VM's OS. However, since this is a shared link, it can only access existing connections but not create them."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'<key name="SSH - Read&Write" pattern="http://<Qualix IP>/remote/#/client/c/ssh{qid}sharedr?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password={Password}&amp;shared=true&amp;readonly=false" icon-key="SSH" />\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'<key name="RDP - Read&Write" pattern="http://<Qualix IP>/remote/#/client/c/rdp{qid}shared?qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true&amp;shared=true&amp;readonly=false" icon-key="RDP"/>\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In each link, replace ",(0,r.jsx)(n.code,{children:"<QualiX IP>"})," with the QualiX Server hostname or IP address."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Restart the ",(0,r.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In Resource Manager Client, create a user for the trainee with access to the appropriate domain."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-a-new-training-session",children:"Setting up a new training session"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In REST API, create an access token for the training session:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open the Training Porta's live documentation page:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"http://[CloudShellPortalAddress]:82/api/explore/#/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the user's domain."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Expand the ",(0,r.jsx)(n.strong,{children:"POST /token"})," API method."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(2172).c+"",width:"499",height:"248"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click inside the ",(0,r.jsx)(n.strong,{children:"Model Schema"})," area to load the request body."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(46e3).c+"",width:"961",height:"471"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"body"})," area, replace ",(0,r.jsx)(n.strong,{children:"user.name"})," with the trainee's CloudShell user name (do not remove the quotes)."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(44600).c+"",width:"962",height:"465"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Try it out!"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'A Response Code of "200" indicates success.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the access token from the ",(0,r.jsx)(n.strong,{children:"Response Body"}),", without the quotes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Build the training portal link:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"http://<TrainingPortaUrl>:<TrainingPortalPort>/<SandboxId>?access=<AccessToken>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<TrainingPortalUrl>"})," is the Training Portal's URL"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<TrainingPortalPort>"})," is the Training Portal's port"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<SandboxId>"})," is the sandbox ID (taken from the sandbox's URL)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"<AccessToken>"})," is the access token you copied from the POST /token API's ",(0,r.jsx)(n.strong,{children:"Response Body"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"http://192.168.85.28:5027/645b57f6-9ea3-4968-aa92-900bf3ee5be8?access=NEapY8Cnqk6JYPNAt7il5w2\n"})}),"\n",(0,r.jsx)(n.p,{children:"The trainee uses this link to work in the sandbox."}),"\n",(0,r.jsx)(n.p,{children:"Over-the-shoulder users access the trainee's QualiX session from the sandbox, via the resource or App's remote access links."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/qualix/training-portal/welcome-to-your-training-session",children:"Welcome to your training session!"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},15980:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/TrainingPortalDockerOutput-fec8f3d6a6013ade474002da7d43ea5e.png"},46240:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/TrainingPortalDockerPortal-8edf841176eca1e96fb88a91a659a938.png"},23152:(e,n,s)=>{s.d(n,{c:()=>r});const r="data:image/png;base64,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"},46e3:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/TrainingPortalModelSchema-3a5c93e29e940c381c0f11e6b675f6b7.png"},44600:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/TrainingPortalRequestBody-db626cfadc4b97f89ab2603f432881db.png"},2172:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/TrainingPortalRestApi_499x248-0ce0e8033b7a71e5431a148f9cfcca2a.png"},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>l});var r=s(11504);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);