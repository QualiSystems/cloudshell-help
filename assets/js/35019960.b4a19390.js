"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[88448],{14192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var l=s(17624),i=s(4552);const r={sidebar_position:2},o="How to Upgrade MongoDB From 4.2 to 6.0",d={id:"install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/how-to-upgrade-4.2-6",title:"How to Upgrade MongoDB From 4.2 to 6.0",description:"Following security risks in MongoDB 4.2, it was about time to update the version used by Cloudshell.",source:"@site/docs/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/how-to-upgrade-4.2-6.md",sourceDirName:"install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type",slug:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/how-to-upgrade-4.2-6",permalink:"/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/how-to-upgrade-4.2-6",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/how-to-upgrade-4.2-6.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Best Practices for MongoDB",permalink:"/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb"},next:{title:"Set the MongoDB Connection Strings",permalink:"/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/set-the-mongodb-connection-string"}},t={},c=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the files",id:"getting-the-files",level:2},{value:"Upgrade from 4.2 to 4.4",id:"upgrade-from-42-to-44",level:2},{value:"Upgrade from 4.4 to 5.0",id:"upgrade-from-44-to-50",level:2},{value:"Upgrade from 5.0 to 6.0",id:"upgrade-from-50-to-60",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"how-to-upgrade-mongodb-from-42-to-60",children:"How to Upgrade MongoDB From 4.2 to 6.0"}),"\n",(0,l.jsx)(n.p,{children:"Following security risks in MongoDB 4.2, it was about time to update the version used by Cloudshell."}),"\n",(0,l.jsx)(n.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,l.jsx)(n.p,{children:"The below instructions are for Cloudshell default installation with a standalone MongoDB installation only."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["MongoDB does not support Windows Server 2012. For details, see ",(0,l.jsx)(n.a,{href:"/next/install-configure/cs-system-requirements/min-requirements-for-cs",children:"Windows OS requirements"}),"."]})}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"RDP connection to Cloudshell server"}),"\n",(0,l.jsx)(n.li,{children:"Cloudshell services down time"}),"\n",(0,l.jsx)(n.li,{children:"Internet access to download all relevant files (can be done in a dedicated server and copied to Cloudshell server)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"getting-the-files",children:"Getting the files"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Obtain the following MongoDB official files and place them in a temporary folder (referred to as "Downloads\u201d in this guide) on the Cloudshell server:'}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.22.zip",children:"mongodb-windows-x86_64-4.4.22.zip"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.18.zip",children:"mongodb-windows-x86_64-5.0.18.zip"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.6.zip",children:"mongodb-windows-x86_64-6.0.6.zip"})}),"\n",(0,l.jsxs)(n.li,{children:["MongoDB shell: ",(0,l.jsx)(n.a,{href:"https://downloads.mongodb.com/compass/mongosh-1.9.0-win32-x64.zip",children:"mongosh-1.9.0-win32-x64.zip"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Enter the Cloudshell server and extract all files."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"upgrade-from-42-to-44",children:"Upgrade from 4.2 to 4.4"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the MongoDB shell."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Navigate to ",(0,l.jsx)(n.code,{children:"Downloads\\mongosh-1.9.0-win32-x64\\bin"})]}),"\n",(0,l.jsxs)(n.li,{children:["Double click the ",(0,l.jsx)(n.code,{children:"mongosh.exe"})," executable."]}),"\n",(0,l.jsx)(n.li,{children:'Follow the instructions to connect to "localhost\u201d (press enter).'}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Validate dependencies by running in the shell:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })\n// Expected response: { version: '4.2' }, ok: 1\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Get reservation count for reference after upgrade:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Switch to the Quali database:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"use Quali\ndb.Reservation.countDocuments()\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open ",(0,l.jsx)(n.strong,{children:"Task Manager > Services"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Stop the ",(0,l.jsx)(n.strong,{children:"Quali Server"})," process."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Shut down MongoDB by running:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"use admin\ndb.shutdownServer()\n// Expected response: MongoNetworkError: connection 3 to 127.0.0.1:27017 closed\n// Then close the shell window\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Navigate to the downloaded 4.4 bin folder in File Explorer:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"Downloads\\mongodb-win32-x86_64-windows-4.4.22\\bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"In a separate File Explorer window, open the MongoDB installation's bin folder:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete the mongod.exe file from C:\\Program Files\\MongoDB\\Server\\4.2\\bin."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Copy the new mongod.exe file from the 4.4\\bin folder to C:\\Program Files\\MongoDB\\Server\\4.2\\bin."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open ",(0,l.jsx)(n.strong,{children:"Task Manager > Services"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start the ",(0,l.jsx)(n.strong,{children:"MongoDB"})," service."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start the ",(0,l.jsx)(n.strong,{children:"MongoDB"})," shell and validate the version:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.version()\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["(Optional) Start the ",(0,l.jsx)(n.strong,{children:"Quali Server"})," process and check sandboxes."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Stop ",(0,l.jsx)(n.strong,{children:"Quali Server"})," (if running)."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Update MongoDB capabilities:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'db.adminCommand({ setFeatureCompatibilityVersion: "4.4" })\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"upgrade-from-44-to-50",children:"Upgrade from 4.4 to 5.0"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the MongoDB shell."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Navigate to ",(0,l.jsx)(n.code,{children:"Downloads\\mongosh-1.9.0-win32-x64\\bin"})]}),"\n",(0,l.jsxs)(n.li,{children:["Double click the ",(0,l.jsx)(n.code,{children:"mongosh.exe"})," executable."]}),"\n",(0,l.jsx)(n.li,{children:'Follow the instructions to connect to "localhost\u201d (press enter).'}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Validate dependencies by running in the shell:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })\n// Expected response: { version: '4.4' }, ok: 1\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open ",(0,l.jsx)(n.strong,{children:"Task Manager > Services"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Stop the ",(0,l.jsx)(n.strong,{children:"Quali Server"})," process."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Shut down MongoDB by running:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"use admin\ndb.shutdownServer()\n// response should look like: MongoNetworkError: connection 5 to 127.0.0.1:27017 closed\n// close the shell window\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Enter the downloaded 5.0 bin folder in File Explorer:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"Downloads\\mongodb-win32-x86_64-windows-5.0.18\\bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"In a different File Explorer, open the bin folder of MongoDB installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete the mongod.exe file in C:\\Program Files\\MongoDB\\Server\\4.2\\bin."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Copy the new mongod.exe file from the 5.0.18\\bin folder to C:\\Program Files\\MongoDB\\Server\\4.2\\bin."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open ",(0,l.jsx)(n.strong,{children:"Task Manager > Services"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start the ",(0,l.jsx)(n.strong,{children:"MongoDB"})," service."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start the ",(0,l.jsx)(n.strong,{children:"MongoDB"})," shell."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Validate version:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.version()\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Validate reservations are still there:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"use Quali\ndb.Reservation.countDocuments()\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["(Optional) Start the ",(0,l.jsx)(n.strong,{children:"Quali Server"})," process and enter the ",(0,l.jsx)(n.strong,{children:"Sandboxes"})," dashboard in CloudShell Portal."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Stop ",(0,l.jsx)(n.strong,{children:"Quali Server"})," (if running)."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Update MongoDB capabilities:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'db.adminCommand({ setFeatureCompatibilityVersion: "5.0" })\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"upgrade-from-50-to-60",children:"Upgrade from 5.0 to 6.0"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the MongoDB shell."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Navigate to ",(0,l.jsx)(n.code,{children:"Downloads\\mongosh-1.9.0-win32-x64\\bin"})]}),"\n",(0,l.jsxs)(n.li,{children:["Double click the ",(0,l.jsx)(n.code,{children:"mongosh.exe"})," executable."]}),"\n",(0,l.jsx)(n.li,{children:'Follow the instructions to connect to "localhost\u201d (press enter).'}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Validate dependencies by running in the shell:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.adminCommand( { getParameter: 1, featureCompatibilityVersion: 1 } )\n// Expected response: { version: '5.0' }, ok: 1\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open ",(0,l.jsx)(n.strong,{children:"Task Manager > Services"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Stop the ",(0,l.jsx)(n.strong,{children:"Quali Server"})," process (if running)."]}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"From this step, there are differences from previous upgrade flows."})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Shut down ",(0,l.jsx)(n.strong,{children:"mongoDB"})," by running:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Run","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.adminCommand( { shutdown: 1 } )\n// response should look like: MongoNetworkError: connection 5 to 127.0.0.1:27017 closed\n// close the shell window\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Ensure that the 5.0-series binaries are in your System PATH. To confirm your binary version, run the following command:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Open command line window."}),"\n",(0,l.jsxs)(n.li,{children:["Run","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"mongod --version\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["If 'mongod' is not recognized, add the bin folder to the system path:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Open ",(0,l.jsx)(n.strong,{children:"Environment Variables"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Under ",(0,l.jsx)(n.strong,{children:"System Variables"}),", locate and select the ",(0,l.jsx)(n.strong,{children:"Path"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"Edit"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"New"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Enter ",(0,l.jsx)(n.code,{children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"OK"})," in all windows."]}),"\n",(0,l.jsx)(n.li,{children:"Open a new command line window and retest."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Enter the downloaded 6.0 bin folder in File Explorer:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"Downloads\\mongodb-win32-x86_64-windows-6.0.6\\bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"In a different file explorer, open the bin folder of mongoDB installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Delete the ",(0,l.jsx)(n.code,{children:"mongod.exe"})," file from ",(0,l.jsx)(n.code,{children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Copy the new ",(0,l.jsx)(n.code,{children:"mongod.exe"})," file from the ",(0,l.jsx)(n.code,{children:"6.0.6\\bin"})," folder to ",(0,l.jsx)(n.code,{children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open ",(0,l.jsx)(n.strong,{children:"Task Manager > Services"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start the ",(0,l.jsx)(n.strong,{children:"MongoDB"})," service."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start the ",(0,l.jsx)(n.strong,{children:"MongoDB"})," shell."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Validate version:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.version()\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Validate reservations are still there:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"use Quali\ndb.Reservation.countDocuments()\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["(Optional) Start ",(0,l.jsx)(n.strong,{children:"Quali Server"})," and enter the ",(0,l.jsx)(n.strong,{children:"Sandboxes"})," dashboard in CloudShell Portal."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Stop ",(0,l.jsx)(n.strong,{children:"Quali Server"})," (if running)."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Update ",(0,l.jsx)(n.strong,{children:"MongoDB"})," capabilities:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'db.adminCommand( { setFeatureCompatibilityVersion: "6.0" } )\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/",children:"Select the Database Type"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb",children:"Best Practices for MongoDB"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>o});var l=s(11504);const i={},r=l.createContext(i);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);