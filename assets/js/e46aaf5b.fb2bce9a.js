"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[77680],{7160:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(17624),r=i(4552);const s={sidebar_position:2},t="PyPi Server - Managing Python Shell and Script Dependencies",l={id:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",title:"PyPi Server - Managing Python Shell and Script Dependencies",description:"CloudShell manages driver and script dependencies using PyPi Server. PyPi Server is a process that is installed with CloudShell on the Quali Server computer.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md",sourceDirName:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments",slug:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",permalink:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What are Python Virtual Environments?",permalink:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments"},next:{title:"Using a Proxy to Download Python Packages from Public PyPi",permalink:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi"}},a={},d=[{value:"Automatic online mode",id:"automatic-online-mode",level:2},{value:"Blocking PyPi Server from downloading packages from public PyPi",id:"blocking-pypi-server-from-downloading-packages-from-public-pypi",level:3},{value:"Manual offline mode",id:"manual-offline-mode",level:2},{value:"Loading packages to your PyPi Server repository",id:"loading-packages-to-your-pypi-server-repository",level:2},{value:"Special considerations",id:"special-considerations",level:3},{value:"Manually uploading the dependencies to the local PyPi Server repository",id:"manually-uploading-the-dependencies-to-the-local-pypi-server-repository",level:3},{value:"Loading a package using command-line",id:"loading-a-package-using-command-line",level:3},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"pypi-server---managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"}),"\n",(0,o.jsxs)(n.p,{children:["CloudShell manages driver and script dependencies using ",(0,o.jsx)(n.strong,{children:"PyPi Server"}),". PyPi Server is a process that is installed with CloudShell on the ",(0,o.jsx)(n.strong,{children:"Quali Server"})," computer."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you are upgrading to CloudShell 8.3 and above, make sure to migrate your offline and locally developed Python packages to the PyPi Server repository. For additional information, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/migrate-python-dependencies",children:"Migrate Python Dependencies to PyPi Server"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["The PyPi server allows easy and organized development of Python packages for local use. A developer can remotely upload their own local Python packages to the local PyPi server, making them available to all the Execution Servers, without having to expose these packages in a public repository (such as public PyPi) or a testing repository (such as a local TestPy). For details, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"As illustrated below, the following takes place when a Python script or driver is launched:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The execution server contacts the PyPi Server to get the required package versions."}),"\n",(0,o.jsxs)(n.li,{children:["If copies of the packages, with the right versions, reside in the local PyPi Server repository, the Execution Server will download them. However, if the repository contains packages that don't have the right versions (as defined in the shell or script's ",(0,o.jsx)(n.code,{children:"requirements.txt"})," file - see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/devguide/developing-shells/driver-deep-dive#referencing-other-packages",children:"Referencing other packages"}),"), the operation will fail."]}),"\n",(0,o.jsx)(n.li,{children:"If the packages are missing from the local PyPi Server repository, the Execution Server will search and download the packages from public PyPi."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(38164).c+"",width:"673",height:"332"})}),"\n",(0,o.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To configure PyPi Server behind a proxy to allow the Execution Servers to reach PyPi Server, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi",children:"Using a Proxy to Download Python Packages from Public PyPi"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To configure PyPi Server behind a reverse proxy for secure communication between the PyPi Server and the Execution Servers, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/secure-communication/config-secured-pypi",children:"Configuring PyPi Server to Work in Secure Mode"}),"."]}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:"The following configuration modes are available for Python driver and script dependencies:"}),"\n",(0,o.jsx)(n.h2,{id:"automatic-online-mode",children:"Automatic online mode"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The PyPi Server and Execution Servers must have access to the Internet in order for CloudShell to work in this mode."})}),"\n",(0,o.jsx)(n.p,{children:"This is the default mode. When a Python driver or script that has dependencies is running, the execution server running the driver or script automatically creates a new virtual environment for the driver or script's instance and PyPi Server sends the dependencies (i.e. links to download the dependencies) to the execution server, which downloads the missing dependencies and loads all the required dependencies to the virtual environment."}),"\n",(0,o.jsxs)(n.p,{children:["If any of the dependencies are not in the local repository, PyPi Server searches for them online in public PyPi and sends links to their online locations for download to the local PyPi server. ",(0,o.jsx)(n.em,{children:"To learn how to block PyPi Server from downloading certain packages in online mode, see the section below."})]}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["Packages you add to the local PyPi Server repository will constrict all Python scripts and drivers that use any version of these packages to use the specific versions residing in the repository (if they require a different version, the execution will result in error). Therefore, for packages that are published in the public PyPi repository, the best practice is to specify the package versions in the ",(0,o.jsx)(n.code,{children:"requirements.txt"})," instead of adding them to the local repository."]})}),"\n",(0,o.jsx)(n.h3,{id:"blocking-pypi-server-from-downloading-packages-from-public-pypi",children:"Blocking PyPi Server from downloading packages from public PyPi"}),"\n",(0,o.jsx)(n.p,{children:"If you have internet access but want to block PyPi Server from downloading packages that reside in the public PyPi repository, place all the Python dependencies in your local PyPi Server repository, including the dependencies of Shells you are using and any other dependencies required by custom scripts and drivers you have in CloudShell."}),"\n",(0,o.jsx)(n.p,{children:'However, we do not recommend to place CloudShell dependencies in the repository (packages that come out-of-the-box with CloudShell and packages that are released by Quali\'s Shells team), as this will force your scripts and drivers to use those package versions even if newer ones are in public PyPi (as explained in the note above). Therefore, we recommend to leave out any CloudShell dependencies (packages that include "cloudshell" in their name) to make sure you get backwards-compatible CloudShell fixes and updates we publish from time to time on public PyPi.'}),"\n",(0,o.jsx)(n.h2,{id:"manual-offline-mode",children:"Manual offline mode"}),"\n",(0,o.jsx)(n.p,{children:"This mode is used when access to the Internet is unavailable for Quali Server and the execution servers. To make dependencies available in offline mode, the admin needs to download the dependencies and place them in the local PyPi Server repository residing on the Quali Server machine when installing or upgrading CloudShell."}),"\n",(0,o.jsxs)(n.p,{children:["For additional information, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"loading-packages-to-your-pypi-server-repository",children:"Loading packages to your PyPi Server repository"}),"\n",(0,o.jsx)(n.p,{children:"This procedure explains how to place specific packages in the local PyPi Server repository. This is required if Quali Server is in offline mode and cannot download packages from public PyPi and is useful for development and testing of drivers and scripts that require the use of packages, which are not published in the public PyPI Python repository."}),"\n",(0,o.jsxs)(n.p,{children:["There are two ways to load packages to your PyPi Server repository, you can ",(0,o.jsx)(n.strong,{children:"manually extract"})," the dependencies packages to the repository or ",(0,o.jsx)(n.strong,{children:"use command-line"})," to load specific packages, as explained below."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This applies to both online and offline CloudShell deployments."})}),"\n",(0,o.jsx)(n.h3,{id:"special-considerations",children:"Special considerations"}),"\n",(0,o.jsxs)(n.p,{children:["Packages you add to the local PyPi Server repository will constrict all Python scripts and drivers that use any version of these packages to use the specific versions residing in the repository (if they require a different version, the execution will result in error). Therefore, for packages that are published in the public PyPi repository, the best practice is to specify the package versions in the ",(0,o.jsx)(n.code,{children:"requirements.txt"})," instead of adding them to the local repository."]}),"\n",(0,o.jsxs)(n.p,{children:["If you are upgrading from version 8.2 or below, you will need to add many packages at once, for example, when migrating to the PyPi Server method for managing Python packages. If this is the case, copy the Python dependencies residing in the dependencies folder(s) defined by the ",(0,o.jsx)(n.code,{children:"<PythonOfflineRepositoryPath>"})," key to the new PyPi Server repository. You can also manually copy the packages to the new location if you have access to the Quali Server machine."]}),"\n",(0,o.jsx)(n.h3,{id:"manually-uploading-the-dependencies-to-the-local-pypi-server-repository",children:"Manually uploading the dependencies to the local PyPi Server repository"}),"\n",(0,o.jsx)(n.p,{children:"You can manually copy the dependency packages to the new location if you have access to the Quali Server machine."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To manually upload the dependencies:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Copy the ZIP packages to the Quali Server computer."}),"\n",(0,o.jsxs)(n.p,{children:["You can download the dependencies from the shell's ",(0,o.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For custom shells and scripts that are not available in the Community, you can download the dependencies listed in the ",(0,o.jsx)(n.code,{children:"requirements.txt"})," file using the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"pip download -r requirements.txt\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"For custom shells, make sure to install dependencies that match the operating system of the Execution Server (Windows/Linux)."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If multiple dependencies are zipped up together - extract the bundle to the local PyPi Server repository DON\u2019T extract the actual packages."}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(90036).c+"",width:"633",height:"90"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, the local PyPi Server repository is at: ",(0,o.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Pypi Server Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"loading-a-package-using-command-line",children:"Loading a package using command-line"}),"\n",(0,o.jsx)(n.p,{children:'For this method, you need the access credentials to the PyPi Server repository, which were defined when running the Quali Server configuration wizard. If you do not have them, contact your IT\xa0administrator. By default, the username and password are "pypiadmin".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To load a package using command-line:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Unzip the package. Make sure the package contains a ",(0,o.jsx)(n.code,{children:"setup.py"})," file."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the unzipped package, create a file named ",(0,o.jsx)(n.strong,{children:".pypirc"})," with the following data (common practice when working with Python packages and uploading them to PyPi):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"[distutils]\nindex-servers =\n  pypiserver\n\n[pypiserver]\nrepository=http://<CloudShell server hostname/ip>:<pypi server port (default is 8036)>\nusername=<pypi server username>\npassword=<pypi server password>\n"})}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"[distutils]\nindex-servers =\n  pypiserver\n\n[pypiserver]\nrepository=http://192.168.54.37:8036\nusername=pypiadmin\npassword=pypiadmin\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Open command-line from the unzipped package folder location and upload using the suitable option: ",(0,o.jsx)(n.strong,{children:"Setup"})," or ",(0,o.jsx)(n.strong,{children:"Twine"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To upload using Setup:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"set HOME=<unzipped package folder path>\npython setup.py sdist upload -r pypiserver\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To upload using Twine:"})}),"\n",(0,o.jsxs)(n.p,{children:["(If the dist folder is missing from the package, run ",(0,o.jsx)(n.code,{children:"python setup.py sdist"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"pip install twine\npython -m twine upload dist/* --config-file .pypirc -r pypiserver\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The package is uploaded to the local PyPi Server repository."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./updating-python-dependencies-for-shells-drivers-and-scripts",children:"Updating Python Dependencies for Shells, Drivers and Scripts"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},38164:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/PyPiServer-flow_673x332-de13d49f0807e471c144dbf2c37fc014.png"},90036:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/extracting-dependencies_633x90-da77dfb6701f7ffbfb59c18a391b4aec.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var o=i(11504);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);