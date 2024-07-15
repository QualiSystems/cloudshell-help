"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[92200],{35916:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(17624),t=n(4552);const r={sidebar_position:10},o="Discovering Inventory using SNMP",l={id:"devguide/developing-shells/discover-inv-using-snmp",title:"Discovering Inventory using SNMP",description:"A common way to query inventory resources is using SNMP. Quali has created its own SNMP package,\xa0cloudshell-snmp, which uses\xa0PySNMP\xa0under the hoods.",source:"@site/versioned_docs/version-2023.3/devguide/developing-shells/discover-inv-using-snmp.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/discover-inv-using-snmp",permalink:"/devguide/developing-shells/discover-inv-using-snmp",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/developing-shells/discover-inv-using-snmp.md",tags:[],version:"2023.3",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Debugging Shell Driver Commands",permalink:"/devguide/developing-shells/debug-shell-driver-commands"},next:{title:"Deploying to Production",permalink:"/devguide/developing-shells/deploy-to-prod"}},a={},c=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Supporting custom vendor MIBs",id:"supporting-custom-vendor-mibs",level:2},{value:"Compiling and downloading the vendor MIBs",id:"compiling-and-downloading-the-vendor-mibs",level:3},{value:"Including the compiled MIBs in your Shell project",id:"including-the-compiled-mibs-in-your-shell-project",level:3},{value:"Converting the MIB data to get_inventory results",id:"converting-the-mib-data-to-get_inventory-results",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"discovering-inventory-using-snmp",children:"Discovering Inventory using SNMP"}),"\n",(0,i.jsxs)(s.p,{children:["A common way to query inventory resources is using SNMP. Quali has created its own SNMP package,\xa0",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-snmp",children:"cloudshell-snmp"}),", which uses\xa0",(0,i.jsx)(s.a,{href:"https://pypi.org/project/pysnmp/",children:"PySNMP"}),"\xa0under the hoods."]}),"\n",(0,i.jsxs)(s.p,{children:["The\xa0",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-snmp",children:"cloudshell-snmp"}),"\xa0package comes bundled with common SNMP MIBs which are pretty generic across most devices. You can find the full list of MIBs that are provided as a part of the ",(0,i.jsx)(s.em,{children:"cloudshell-snmp"})," package in the\xa0",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-snmp/tree/dev/cloudshell/snmp/mibs",children:"package repository"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Here\u2019s a short explanation of the MIBs typically used in discovery:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'IF-MIB: In this MIB we are using the table called "ifTable\u201d, which contains information about the ports like interface full address (e.g. GigabitEthrnet0/0/1), the type of the port, speed etc.'}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Entity-MIB: Contains information about Chassis, modules, ports and describes the structure of the entities. It also contains the physical index of each entity, using the index we can then map between port to its associated interface."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"IP-MIB: Contains the IP (IPV6 or IPV4) address of each port."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SNMPv2-MIB: Contains information about the serial number of the device, system description etc."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Etherlike-Mib: Used by CloudShell Shells typically to get the duplex value of interfaces."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,i.jsxs)(s.p,{children:["snmp_example/snmp_generic_discovery/snmp_basic_usage.py ",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py",children:"view"})," ",(0,i.jsx)(s.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py",children:"raw"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"def retrieving_snmp_properties(self, ip, community_string):\n\n    logger = get_qs_logger()\n\n    snmp_service = QualiSnmp(ip=ip, snmp_version='2',\n                          snmp_community=community_string,\n                          logger=logger)\n\n    return snmp_service.get_property('SNMPv2-MIB', 'sysName', 0)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["In the above example, we initialize the QualiSnmp module which requires at least the device IP and the community string. We then use the\xa0",(0,i.jsx)(s.strong,{children:"get_property"}),"\xa0function to get the value of the\xa0",(0,i.jsx)(s.strong,{children:"sysName"}),"\xa0property using one of the MIBs which are included with ",(0,i.jsx)(s.em,{children:"cloudshell-snmp"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,i.jsxs)(s.p,{children:["snmp_example/snmp_generic_discovery/snmp_basic_usage.py ",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py",children:"view"})," ",(0,i.jsx)(s.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/snmp_example/snmp_generic_discovery/snmp_basic_usage.py",children:"raw"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"def retrieving_snmp_table(self, ip):\n    logger = get_qs_logger()\n\n    snmp_service = QualiSnmp(ip=ip, snmp_version='2',\n                             snmp_community=\"Community String\",\n                             logger=logger)\n\n    if_table = snmp_service.get_table('IF-MIB', 'ifDescr')\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Here we used the same class to retrieve the entire IF table. The\xa0",(0,i.jsx)(s.strong,{children:"get_table"}),"\xa0function returns a Quali object which inherits from Python\u2019s\xa0",(0,i.jsx)(s.strong,{children:"ordered_dictionary"}),"\xa0with additional handy sorting and filtering functions to get the table\u2019s rows and columns."]}),"\n",(0,i.jsxs)(s.p,{children:["Since the SNMP parameters are included as attributes in the\xa0",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/compute_standard.md",children:"Resource Standard"}),"\xa0they can be easily retrieved by the driver when implementing the\xa0",(0,i.jsx)(s.strong,{children:"get_inventory"}),"\xa0function:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"def get_inventory(self, context):\n    snmp_version = context.resource.attributes['SNMP Version']\n    community_string = context.resource.attributes['SNMP Read Community']\n"})}),"\n",(0,i.jsx)(s.h2,{id:"supporting-custom-vendor-mibs",children:"Supporting custom vendor MIBs"}),"\n",(0,i.jsx)(s.h3,{id:"compiling-and-downloading-the-vendor-mibs",children:"Compiling and downloading the vendor MIBs"}),"\n",(0,i.jsxs)(s.p,{children:["Some vendors will use their own custom MIBs which you\u2019ll want to include in the discovery. For example, this CISCO site provides access to some common MIBs you can download:\xa0",(0,i.jsx)(s.a,{href:"http://tools.cisco.com/ITDIT/MIBS/MainServlet?ReleaseSel=3&PlatformSel=236&fsSel=368",children:"http://tools.cisco.com/ITDIT/MIBS/MainServlet?ReleaseSel=3&PlatformSel=236&fsSel=368"}),". Other vendors have their own MIBs download links."]}),"\n",(0,i.jsxs)(s.p,{children:["To compile the MIBs we recommend using the\xa0",(0,i.jsx)(s.a,{href:"https://github.com/etingof/pysmi/blob/master/scripts/mibdump.py",children:"mibdump.py"}),"\xa0script which is part of the\xa0",(0,i.jsx)(s.a,{href:"https://pypi.org/project/pysmi/",children:"PySMI"}),"\xa0SNMP libraries and tools. The\xa0",(0,i.jsx)(s.strong,{children:"mibdump.py"}),"\xa0script supports both compiling MIB sources you\u2019ve downloaded locally as well as using remote MIB sources. For example, the\xa0",(0,i.jsx)(s.a,{href:"http://mibs.snmplabs.com/asn1/",children:"snmplabs"}),"\xa0repository provides a wealth of publicly available MIBs. Notice, if you are trying to compile MIB sources you\u2019ve downloaded locally, you should be sure to download all of the dependencies to the same folder (e.g. IF-MIB depends on SNMPV2-MIB). However, you can specify more than one MIB source, so you can include both your local MIB sources and remote repositories."]}),"\n",(0,i.jsxs)(s.p,{children:["The following example will compile the IF-MIB source from the\xa0",(0,i.jsx)(s.strong,{children:"snmplabs"}),"\xa0repository:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"python mibdump.py --mib-source=http://mibs.snmplabs.com/asn1/@mib@ IF-MIB\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If you\u2019re a Linux user, you can take advantage of the\xa0",(0,i.jsx)(s.a,{href:"http://linux.die.net/man/1/smidump",children:"smidump package"}),". This package is available as an RPM/APT package for various Linux distros. The\xa0",(0,i.jsx)(s.strong,{children:"smidump"}),"\xa0package is somewhat easier to use with a clear syntax. For example, to use the\xa0",(0,i.jsx)(s.strong,{children:"smidump"}),"\xa0package to compile the IF-MIB to Python, simply run these two lines from the terminal:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"smidump -f smiv2 -k IF-MIB.mib  > if-mib.txt\nsmidump -f python -k if-mib.txt | libsmi2pysnmp > if-mib.py\n"})}),"\n",(0,i.jsx)(s.h3,{id:"including-the-compiled-mibs-in-your-shell-project",children:"Including the compiled MIBs in your Shell project"}),"\n",(0,i.jsx)(s.p,{children:"After downloading the MIB files using either the Linux or Windows option, you\u2019ll need to include them in your shell driver project, save the MIBs Python files in a sub-package folder and add the following code to your Shell:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"snmp_service = QualiSnmp(ip=ip, snmp_version=snmp_params.snmp_version,\n                         snmp_community=snmp_params.snmp_read_community,\n                         logger=logger)\nsnmp_service.load_mib('IF-MIB')\n"})}),"\n",(0,i.jsx)(s.p,{children:"After loading the MIB, you\u2019ll be able to use it like any of the MIBs included in cloudshell-snmp and retrieve properties and tables."}),"\n",(0,i.jsx)(s.h3,{id:"converting-the-mib-data-to-get_inventory-results",children:"Converting the MIB data to get_inventory results"}),"\n",(0,i.jsxs)(s.p,{children:["In order to successfully load the internal structure and attributes of a resource, the\xa0",(0,i.jsx)(s.strong,{children:"get_inventory"}),"\xa0function need to return lists of\xa0",(0,i.jsx)(s.strong,{children:"AutoLoadResource"}),"\xa0and\xa0",(0,i.jsx)(s.strong,{children:"AutoLoadAttribute"}),"\xa0objects."]}),"\n",(0,i.jsxs)(s.p,{children:["The following driver implements basic discovery using generic MIBs only and converts the result to the objects required by\xa0",(0,i.jsx)(s.strong,{children:"get_inventory"}),". To view the full source click the \u2018view\u2019 or \u2018raw\u2019 links above the code snippet. The code can be used as a reference for creating similar procedures:"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/generic_snmp_discovery.py",children:"This Github Sample"}),"\xa0is by\xa0",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems",children:"QualiSystems"})]}),"\n",(0,i.jsxs)(s.p,{children:["snmp_example/snmp_generic_discovery/generic_snmp_discovery.py ",(0,i.jsx)(s.a,{href:"https://github.com/QualiSystems/devguide_examples/blob/master/snmp_example/snmp_generic_discovery/generic_snmp_discovery.py",children:"view"})," ",(0,i.jsx)(s.a,{href:"https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/snmp_example/snmp_generic_discovery/generic_snmp_discovery.py",children:"raw"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'def __init__(self, snmp_version, snmp_read_community,\n                 snmp_v3_user = None,\n                 snmp_v3_password = None,\n                 snmp_v3_privatekey=None):\n\n        self.snmp_version = snmp_version\n        self.snmp_read_community=snmp_read_community\n        self.snmp_v3_user=snmp_v3_user\n        self.snmp_v3_password=snmp_v3_password\n        self.snmp_v3_privatekey=snmp_v3_privatekey\n\n\nclass GenericSNMPDiscovery:\n\n    def discover(self, ip, model, vendor, snmp_params):\n        """\n        :param str ip: The device IP address\n        :param str model: The device model in CloudShell\n        :param str vendor: The device vendor\n        :param SNMPParams snmp_params: The device vendor\n        :return: The loaded resources and attributes\n        :rtype: AutoLoadDetails\n        """\n\n        logger = get_qs_logger()\n\n        self.snmp = QualiSnmp(ip=ip, snmp_version=snmp_params.snmp_version,\n                              snmp_user=snmp_params.snmp_v3_user,\n                              snmp_password=snmp_params.snmp_v3_password,\n                              snmp_community=snmp_params.snmp_read_community,\n'})}),"\n",(0,i.jsxs)(s.p,{children:["To use this module, simply initialize an instance of\xa0",(0,i.jsx)(s.strong,{children:"GenericSNMPDiscovery"}),"\xa0and call the\xa0",(0,i.jsx)(s.strong,{children:"discover"}),"\xa0method:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"def get_inventory(self, context):\n   snmp_version = context.resource.attributes['SNMP Version']\n   community_string = context.resource.attributes['SNMP Read Community']\n   snmp_params = SNMPParams(snmp_version=snmp_version,snmp_read_community=snmp_community)\n   GenericSNMPDiscovery().discover(device_ip,\"Cisco 5k Switch\", \"Cisco\",snmp_params )\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>l,M:()=>o});var i=n(11504);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);