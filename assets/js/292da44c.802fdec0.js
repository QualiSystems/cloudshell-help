"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[5736],{34012:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var i=n(17624),r=n(4552);const a={sidebar_position:3},l="Configuring the SQL Database Server Cluster (AlwaysOn)",t={id:"install-configure/ha-installation/installation-procedure/configure-sql-db-server-cluster",title:"Configuring the SQL Database Server Cluster (AlwaysOn)",description:"The SQL server database clustering uses the AlwaysOn Availability Group solution.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/installation-procedure/configure-sql-db-server-cluster.md",sourceDirName:"install-configure/ha-installation/installation-procedure",slug:"/install-configure/ha-installation/installation-procedure/configure-sql-db-server-cluster",permalink:"/install-configure/ha-installation/installation-procedure/configure-sql-db-server-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/installation-procedure/configure-sql-db-server-cluster.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Alternative License Server Solution",permalink:"/install-configure/ha-installation/installation-procedure/install-and-configure-license-server/alternative-solution"},next:{title:"Configure MongoDB in HA Mode (Cluster)",permalink:"/install-configure/ha-installation/installation-procedure/configure-mongodb-in-ha-mode"}},o={},c=[{value:"Setting up and configuring an instance of SQL Server to Support AlwaysOn Availability Groups",id:"setting-up-and-configuring-an-instance-of-sql-server-to-support-alwayson-availability-groups",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring SQL Server AlwaysOn availability group",id:"configuring-sql-server-alwayson-availability-group",level:2}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"configuring-the-sql-database-server-cluster-alwayson",children:"Configuring the SQL Database Server Cluster (AlwaysOn)"}),"\n",(0,i.jsxs)(s.p,{children:["The SQL server database clustering uses the ",(0,i.jsx)(s.strong,{children:"AlwaysOn Availability Group"})," solution."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"AlwaysOn Availability Groups"})," feature is a high-availability and disaster-recovery solution that provides an enterprise-level alternative to database mirroring. AlwaysOn Availability Groups maximizes the availability of a set of user databases for an enterprise. An availability group supports a failover environment for a discrete set of user databases, known as availability databases that fail over together. An availability group supports a set of read-write primary databases and one to four sets of corresponding secondary databases. Optionally, secondary databases can be made available for read-only access and/or some backup operations."]}),"\n",(0,i.jsxs)(s.p,{children:["An availability group fails over at the level of an availability replica. Failovers are not caused by database issues, such as, a database becoming suspect due to a loss of a data file, deletion of a database, or corruption of a transaction log. For more information about AlwaysOn Availability Groups, see ",(0,i.jsx)(s.a,{href:"https://msdn.microsoft.com/en-us/library/hh510230(v=sql.110).aspx",children:"https://msdn.microsoft.com/en-us/library/hh510230(v=sql.110).aspx"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"note-one-line",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," ",(0,i.jsx)(s.strong,{children:"AlwaysOn Availability Groups"})," is a Microsoft feature."]})}),"\n",(0,i.jsx)(s.p,{children:"The supported versions of MS SQL Server are:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"SQL Server 2012 Enterprise Edition"}),"\n",(0,i.jsx)(s.li,{children:"SQL Server 2014 Enterprise Edition"}),"\n",(0,i.jsx)(s.li,{children:"SQL Server 2016 Standard Edition"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"setting-up-and-configuring-an-instance-of-sql-server-to-support-alwayson-availability-groups",children:"Setting up and configuring an instance of SQL Server to Support AlwaysOn Availability Groups"}),"\n",(0,i.jsxs)(s.p,{children:["For more information about AlwaysOn Availability Groups, see ",(0,i.jsx)(s.a,{href:"https://msdn.microsoft.com/en-us/library/gg509118(v=sql.110).aspx",children:"https://msdn.microsoft.com/en-us/library/gg509118(v=sql.110).aspx"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,i.jsx)(s.p,{children:"Set-up nodes with Windows Server Failover Clustering (WSFC)"}),"\n",(0,i.jsx)(s.h2,{id:"configuring-sql-server-alwayson-availability-group",children:"Configuring SQL Server AlwaysOn availability group"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To configure the SQL Server AlwaysOn availability group:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Open SQL Server on one of the nodes."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Connect to all SQL servers that should be part of the SQL cluster."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Choose ",(0,i.jsx)(s.strong,{children:"View > Registered Servers"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(16252).c+"",width:"304",height:"114"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Add the required servers to a new group."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(66812).c+"",width:"247",height:"141"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Right-click on a server and click ",(0,i.jsx)(s.strong,{children:"SQL Server Configuration Manager"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(320).c+"",width:"363",height:"301"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.strong,{children:"SQL Server Services"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(30424).c+"",width:"469",height:"129"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Right-click the SQL Server instance and select ",(0,i.jsx)(s.strong,{children:"Properties"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(37192).c+"",width:"465",height:"277"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Open the ",(0,i.jsx)(s.strong,{children:"AlwaysOn High Availability"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Check the ",(0,i.jsx)(s.strong,{children:"Enable AlwaysOn Availability Groups"})," check-box."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(21008).c+"",width:"432",height:"213"})}),"\n",(0,i.jsx)(s.admonition,{type:"note-one-line",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," If there is no cluster name, make sure to install Windows failover cluster and configure a cluster first."]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Right-click the SQL Server instance and click ",(0,i.jsx)(s.strong,{children:"Restart"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(93668).c+"",width:"469",height:"200"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Enable ",(0,i.jsx)(s.strong,{children:"AlwaysOn"})," for each of the DB cluster nodes."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Repeat steps 5-10 for each SQL server presented in the MSSQL registered servers pane."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(41412).c+"",width:"248",height:"160"})}),"\n",(0,i.jsxs)(s.p,{children:["The cluster is now configured for ",(0,i.jsx)(s.strong,{children:"AlwaysOn"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},16252:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/AlwaysOn-Availability-Groups-bb388566cdb35f84fde1e835e7d060cc.png"},66812:(e,s,n)=>{n.d(s,{c:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAACNCAIAAADkV3ujAAAAAXNSR0IArs4c6QAAGpZJREFUeF7tXQl4FFW2rmYTXDAKb/ChKISwZcIbJIgatkGHJSBOYEKURYMLHSJoEnEhCG/GDzRKnpIoPqRlZoigzkQGUD5AwNFBICrSgXnkdYQkyPJkQAMJCWTpTrreufdWV3d1VVff6rW6+5b1Yaf61Dnn/vev06du3VPXMGbGixzHtba1fPvBo/CBbQyB6EOgQ/Q1ibWIIeCGgDvLef7A/BuSDY59/m6eHjK+etNdNzzyZrWGU+iVgyT2zV0/v3uFw9sVO/lgmdbkJxPWGwKKsTzxjSOH+UazfXPa+vSV9NQxJMz9rnHjswkGt0YqsjMgQMB1NTKd29GAvT3S7/s9AdHKlEQbAqoZy8TxT3Invq/RcZtrfjg8vN8A7CBcY89Ocr/AdOw6cy10CKiyfM+X64dPmtYfeYOzEZLJCImBeOSutzeRREKM2Tx/5s1xQtozf/cBY/ec9Zxl8Z0jDIsOyFWRs+YveoRoVjE0cs0pd2DgOixfPXvNWdfjbhpc9D9y17hkMQdDqc64TVUyi1J/XBvC0qHQ8TKwlhRZjhl5Q3KH7eP5fXMHGAzQ8cY7d88S0hju92vO4iOrh21GqcKH3O71bk7tKVk8tBi+gv29SaNNDcVPcjgLWjNargqfajk66BW+cXkqd1CTIYMBlG+dtXk6eEvoq6p/46Glaeu3HyTO7tq+7cmlcxJkFiX+SBrCfigCy73QafOYl9uP5I0o+VJIymtOHSXBGKifvu3w8TMcHBme98JE5GjCoqwn3Rzu329ESc5db59RaIdcFRJKnJXaB/1fqyFIVAy3P7sPkvK8o+kjENHV9UPsx42Ci2HrMey/urxKQ0LXR8ySvwh4zFggzf3w1RMQth0W0shNHtrXjFY3i29DIca/JIZYqby6Kg2GRLXY20RHnPaoAWL/C7hR1WvWHU0fCz9TWINneS8N8Rd9dn5oEFDLyyFID1v6EhoZ7N93GLfNhfEcOlK+ehUe0wDGuGcs2PcBT2888Wri0ROSpFlBlWtDNRrid28iA5dwJ7B9s2XEoNu96IdfntRJ3OaSVZsHvrwI/3rILcqAV25IaPqHWQkEAmosx5GPW/zEB9XcKNORPG4pSn/RvugASojROCPKYWZzk9wyFnEMe+BSRCYQnp4p3H2iE6WqXFsh/1bdEDexbyXJo7pPhzuB756+XV0/pvXYWdy29UPHT8GBXF3erSGBAJzpCAMCBv+f8KNB6zt/eLlhGeEN2xgCekMgAE/4dxWtFget9dY85g9DABDwkeWuI+JTS9J2/GOO406OocoQ0B0CAchYdNcm5hBDQIqAj7GcwcgQiCAEnLH81fzsCPKbucoQoEeAxXJ6rJhkpCKgHMuHtL3hZ4MqOy32UwM7nSEQKAQ8srx3UobPNs5VlDKW+4weOzHgCLCMJeCQMoW6Q4A2ln/3TVmXDjZ5xRk87jxfx0+a9GvXlnmN5bWfDSbyPSd/HxpILvz0s6KhS5evVNX88ODk+0LjBrMSFgSoWA4Uv21gEvjX7frrunbr2rnLNfC5tbW16cpVe7sdPpcWFy5atlxsgArLCb9nPPd5m62Vb7NtfyeNkusX6xvb2+C/dlsb/NMO/xBz8Ccc/tUQUjDkcQOWz3ogRf71Ox/sef+jzfeOTGZEDwv/QmOUKmNpuVrX67ZbYO8ed0OXazobDHbYu3btfHPPuJ69boadxlfgN+zp+QfSX9xH5Hl7+xTjXyc/tpF8pa4EqD3rgbvnPJiSOX3sYzN+/cTM+x9Lvz9zxn2Pp08Amn9TXkHjg6LMK8vyvj5k/vSzL3zWwE7UOQJULIc2NFd/aK3733ZrPc+3Az05e5u9+SfrhUONlR+c/zJfvZFNlWsFfufjijjY7EIkxly3/2aO6f6H3wGZz4oVuH5g919ADKgM+dKaP28pfPfD37/5x7w/FD2x+JWHsl8yW2pOnTl38OtDb7zzJ9+wfmnlajgRiO7b6ews/SNAy/K2yyestUes9ZXWxlPN//pH47GihrKcywcXX/7n2qtnhRozldaOH/2ri/sXCiEcLhLYMNH59jZysHzHwptuUIPLDmkKz2c/Ov3Z+Q8vy3181fKcd1flb3p7xdCB8Q/99v4Xc56gwXrJBgvZQZh8sPzU5dFZ6bDTnM5kIhQBKpa32azQPAOa2iWdW4tnaMN/QED19ncf/gLsQHTCdYjfsNsxxQ9tyTR/akxK6DHwdmWaj570MIjZIJbbubXvb11ZVLJwySpQ8OePPln1zoanXyoYHN+XHn1bn8GwE3n40PU/xi6cgwv72Ba9CFCxvLWpheMNciJjyqPDtjYcntU33n790KeuGzy37uu8uv3obXVff/TQN6Vzhg3uBRS32WzW1lYVBXDDaef5+XPSXnz60aKVz7fb+bnpD+ZkZb7x8hIa46Lmzme/h538ST5fQZcw26IZASqWtzQ3AwaSMA5/8JBhk4MGm837Wxz4divXdpW3XenWZ1y3O6YeeD8N+A074rfV2trS0ox/MdSIbufe+2Db62tKcpcXwtDOps2fvly4Zu5TLwDjKbvotXmJZAd58mHZ7MS6FsqzmVikIkDF8lbMcpdNJDgaQDdwvK3NC8/4thYeU9xubbC3NvC2RuA3KIRhQNggigPFr7gZkUEKbJ730G/zsh4t/M/nIEfKSHtgae5Tf3rrtXbnray2boAoDhSvbeY7demq7UwmHVEIULHc2mrFQVuksjOsk09e83KgOOK3rZGzNaLPtgZCcTGKA8WvqrIcRhLtdm7DXz/5r//e8MyyAmA8JCqwrzh176tn76XE3PXuU6R4bTNH/WNAaYeJ6QsBKpZjfpPnnoToOILDBk8+UerivdwTB/LLPCI6fEBBnSQqYhQHikPyr7Khhz92fvbvHnzGmFn4hxchY4FLC/6tbWr6uamJHlRy9ylS/Ocmrh5YbmNZCz2EkSdJyXI0KgKDf4TcrtkJD3elCvel7kDwNshSULrCWy/brXVAd3K72WRFiQqheJPazScaYwGWkx0GIfts7dL3k2tg3OVMw+WzDeiXgXIjd5wkUQGK/3SVM39bedZ22/j03D0W228WCU+sKLUxsYhAgJblJHQThpMA7mge1Z3fl181QbpCUnMOYnlbM4niV1ucFLecGTNikEfQ0DP9dq5XYVrvN6bDaAv3r3PcuXPA+DMNDUB0SqzJ7ebCGXDHyV9sRkn5FXzfDMezJ98+JuF6Sj1MLLIQoGV5cyvcZMqGCzHDW6xd1Nt87ZBs2PeX9zhQ0Q/uO+1A9PZmcrtJovjhqjFA8fEL3lOfvIXGUmqqYEcsP3cOiA5JC2QssNOADlNWYC/5eM+n2/fs37v3+MG9teV72y2fw7mnz1+pqL50uLKWRg+TiTgEqGZrbd347sCeR23XD/5F37u7xfXu0Ppj289HLv9fha3x/IVLrby94xeVw15evUJsvMpsLXjaD2J3/+IvVacvAMW/OjYG/gR+ewWu7PA/x94zTEXs9eI/Ll74uCeByqofYFaW4reQq0AUB4rDvuPAmc/XjPPqDBOILASoWA5NAqJXnXRvWhdrtbVLwtX6H10pDkJeZ94C17/dV07Jb2L1q2/KvzMfVQdXheUqJ7rl4ozlkcVgGm9pWU6jiyaWa9LDhBkCAUGANi8PiDGmhCEQFgRYdXNYYGdGQ4oAex9LSOFmxsKCAMtYwgI7MxpSBJyx/IF7+4XUMjPGEAgVAhKWL1+SEyq7zA5DIHQIsIwldFgzS+FCIIix/Pz5yq519TVNx07XNN9Rb4Hi4Z5xqHzhjv7dbr11zC23DAlXm5ndWEOg4x1D0IJv7fa2gX1uGjf6nkC1v77y69OXvquz/dT/2qH9et0aP3lkcnLyv3e4BT7DwYqjx5ta/qd37+RAmWN6GAIqCAQrY6nZvwFoDVvckC6wEw/IZzg4I2O02cTeDMGYGSIEgsXy05CcmE0c50ZlM2eG3WQ2Z3lu364sg3MbVVztKxKgx4+zFaxKHMvapcWv6uJRAXZGi/WYlw0WyyERRxRHnAaiC+RGvDdnmdG/6oE8pagKvZuI53cm5Q4weCRUwHnslQ6iY/y6VK/CLgIJOQf5gzkJWk5hsoFDgIrlmzxvfnhCk7GkrqsqSjFt0xQ3/XCJnRqdCFCxHJo+TmlTgYSGwlSIJkzNcNDcmTGg6A5/TTFxZRDrSbCXfuvQXQWpAtrE3EUmhpIJsgm/GbIDqsnVqOJiIcNypkcODfg7clj82cEfPJ8iekEFDhOiQ4CW5XTagiuVuk5IY4ymlcXV8NdOI4dTCJw9SL8lnpTlruRK4KSqIi43k2T47mK7CnOTdhK9WM2urAGlGSRf2smBGWmT8EXlckUgE5Y0LGwsyy3EvzmgQVBZwpXCrYlsUzxFxWhwUY0F7RHB8pRE8t5mIQ5DCFfaFL5NKSrByXBCzjJjmaVKScmAxBTTFJcwfKKC/D7ANsXkOEc0J+blYlqeUvQ8ztBT04xcxQm4KKpPVDiOIbMKniqdomY0FngY3DZqYPl06RZcv0Tt1TtKy5IGAlUhDZjC4agLqbrMuPq3iHr4FLkYui/kS7hMZ8bCGYXY7gjvIWlpWIyGpGU6MKKB5Vulm5/O0yXu5NcfB84qSxmJ6Yj3MuPK35aV7sApBzrFmAZaPCgBqsOlg0JxAqxGgPIh31sHGhy5S3XxSuWfHTft/hv13d2YOFMDy0OIh5j+rkyscozZpT4PyTVKJTItSUIshyzBcfep8C34m5JkQUHaIF4qcjHH3SiILEPZDRrVIXYk6bfQeNExldHv1HU7jaYp6OxMLkMpY5EDqW40hMBHqSmqeSwwkAhDLHIE9u3bN3fuXEVkTKas5GRzMgfP8PE/KHQLA+ckipvMyevWHY5SVB3NggRpgGWZxrH1KMckHM2jjeVAaPmm4jA8xjebYccPhBzZCf4TdvSV0UgX5sIBSqBswviNkGUFSiPT4xMCVLHcJ80czEn88cf9MCGxFp6DikxPToaZicNGTIuPj/dNre7PQgE8V7hzgHtKbQ9Jdd+6iHQwiCyPSDyY09GIAG3GEo1tZ22KFQQYy2Olp2O5nYzlsdz7sdJ2xvJY6elYbqe+7j63lBa7dsaMDPZOgVgmZ8DarqNYDhS/b+hIKJbDe7cZ/bu5kd5bowNYVKGkSnlqrzenfPveOfvXZdKwb6rYWRxaqFZH2xfHDm0pPYD35i01aDUtIDrZ17psYfDYOc0LZoslnghqWQcacHdMxEXlUsJkyjC0OlpMBjdjgakBnoCSTw0AKkMUl8rjp6bCo1Pn/K4lH9/02muvyTRDsIV5LwEpPJOpCqBuL9RhswICf20FPZZrLTJyNJFMenGZACN8AfMF6KYzEnmXn36X8lH3ciDvyQieGCYUYoi9oKBmVFYWlB6NGjXKpVpVTH88yru65pg+6d7XSAtWjoUV2uWaZUlLk3a5FUxpqIYKPOPCoTHoLPe9UbIQDpTHDDefP3+eTq2zbAcmpVcIxRKShIA8f1eqM3KzACJVGaVorqKDkopVRWUViVCcdPDgMqNYrbprm8mIpjuqyEtnATiKRpyFdcJEYKIchBXb5QkSWcGUe3kUHZaRLKUjll+4SF7bIgRwx2cRXWcIb6JbLgvXTuBp5bCJ5UJ4rjmeZOuyqVchCYK44AJdLZjoSLm8qiglYyrWDLFfoPmubRW4nEhd3tUZR4UStgdVf+LmUK7YLo8slBVMuZVHRTJ9KX0PBct9KTJyz0pcE3Tu4sWLlM2jEvNSZyTVkZBT4nyrgEqBD8xkr4BqDCikqBCID3ooCoJQRQWurAv85iiYUiiPCrwxXWkMBcspi4zq6+sFaNxzFYHi5DAkLZcv0y3wiWtwhNdcoLodHNfxSwEk1UDqVUjEp13Fjvoh9FuAcgpvBT5ghystLCwlxRlgl7IKiRR6qL7USLFdHIRosbZ1m0uNkqxgCjfIWR6lKz4Gx5lQsFyL5/iOE5NZcpZ4GB1P9pyxuNXyoBocSDBwuRCMzZH0F/oXv8xILAZSrjOSep060CKcgeqO8DiOtwIfRHOTKUnImLzLOwyiULuTI15DiXWFUKHt6o+HdsHNADltG+ea57gXTLmXR2npn8iUDfpIIn2RUUFBQf7EHjhYO0ntpLxQbYReILpi54WzZ89GJuAh9jp0I6Ahbpgmc0FnuSdv5OPlwHJIRerq6lpbWy9dulRbWws5TGNjo9VqlSu5cOGCpnbGqjBjOer54LI8Vrmln3YzlqO+0Fterh9+RIcnMMwfkIfBkY0GY3lk9x/zngYBxnIalJhMZCPAWB7Z/ce8p0GAsZwGJSYT2QhEyRgLKzKKbBoG2ftoiOV+FxkRjF0mswpveg5g8VGQu5GpV0UgGmK5euGcY6ojgiE7O1sZDfw+LHhbvzAFtrq4uConJ1XTYLMmYcbKkCKgU5aHtsjIU3mOJuJqEg5pHzNj+s1YQldkJL7d3CMdFMtwXCtu3Bc5ckl/yOxCaaUP411oEejQ3qkddnsHPrR2g2nNhyIjR3mOBrckFTduixxRlwVpsMdEfUdAv7Gcvk0BKDKSLSDk3bpKxQ19WZB3M0wiAAjomuUhKjJyWWxRA6JeKm4oyoI0GGOifiGga5aHqsgI1YRC/YGzPgfGWCRvXPFUhuOh4oa2LMivnmMn0yOga5bTN0N4rQU6waciI1Sh76gqwgsCTZUsQC5cBpIyHNmCRM5FjryWEWlpGJP1HwFDSsZzoAUqFR68O375Er28l1DTSkasyMh/HkS3Bv2y3BPurMgouhkZjNbplOXBaCrTGbMIRE1eHrM9yBruHQHGcu8YMYlIR4CxPNJ7kPnvHQGWl3Nc2+X6KktN0zGX9XcRcPDml9NxiT2Sh43rr7ButXdomYRuEOjY55doUfv29vZBt900bvQ9unEsdI6Yj7x/9PvTcTd35nr3njatd3LyNFh4uv+1Q+v+rSMcPHZwz+mak0N+GYvIhK4PgmyJZSwogsPqAMBs2HAER1vckC7kCKykXvv3jUHuBaY+uAgwlmN8zSa8hrrrc1N4ix0cNJlNWcHtAS/a/a9XkmpAj2xVXzUa1tYGyThjOQGWLH1BdiB3FmfKMgPF4bPblIEg9UMo1OIJ8ZIXhYbCqh5sMJZ77wUtK7x41xY+CTyLcl1a+BwIm2XGcin0OC3PMhuzko0mzpjFJcPuyNWVOsm5KkoxrPuD33HuddUeNwGv8g67gVojKWxkC5thxnIp9GbOhGhNXi3tLDrKMo1Q6iLn+j4lXKnwYnwvq/bIVjWiXeUngGskhY1t4TLMWC5Bfl/cIPHt6XljN+FRF5y2mzkFokNNUApeM4gsW0RE3WqI3AO3bFUjdXnRuwCvkRQuvoXHLmO55PbyeP1xEsGB64MHD867Lk/MV2gXYHSrIcJ/4k26EJzY3Vrl1XmiaY2k8FAuDFYZy52ZCSG3+C98AKIXPlxIiO6+PgYK4AOTynILcVURWrbIpfs8rtojX9UIn+V9lZ8ArpEUBpqF2SRjuXsHiGxuaGiA72BhDGWKo/NS1+0UlvLJ5DKEjMXLqj2yVY1oV/kJ3BpJYaZcGMyzeSwwMj7CiBiKAjbEYxgkJ/1w2Hh4X82+xX9fTOa3GJON64zrPHcRe+tQGOhLaZLFcgSUOCIu3Gxi8OCxJ6a48O3s+2dTYsrE9IYAYzkHAyn4AT+J4clGx7iKyQRHBZJDFGczE/XGXXp/WMaCYzmhOf4krJ3rAuGmvE1wG0qPKZPUGwKI5TDKZbPZdFXDrzeYmD8RjYDh3pmL21uvAtGnpQzRz5sqdI4p7RLpOm8Gdu/GG2+MBDf98tEwIu0ZQ3trU8OlhyaPilGWa68VYiz3i3QhP7lj9563WluaIJYPHXgHqxWirBUig+jRsXXt2jU6GqLSig439uh1bfeb4d1oUd9UTw1ktUJR3/UdDJ27derUCYge9U1Va6B+a4X25sZNXHvSn85xaoBPZPNToz/ehOXcDrB1vOY64HpYzOvGaAzUCp1cWz21Hm8fJ+Yv8O/K0U2/0TmCngrFcrpCg1KU1ArFZ2dPIM3tP2gkTbujR4Y9+5T2pdZaoZNrJwo5wFpHauE4FBeXu1eRKG4CXuUdSpyCrprdTxfTEk/mOa7m+KHEhPjoIbHXljCWSyHSViu0N3d4fuLHKAl4l9u6gWja+5ZwqL6+SIidriaAlMO3Ti8nqQMS8CIvnuu0VV9eYJlJUmuZNo6bUCSkJfM2FCqmJXtzZ1oKnlFwzStZIlaAsVzSddpqhU5WW0YKfInPfn6emA5sEDiIDrgH7t1bD817PtslkEL6oCIvege2uHlTCTeRsUPHa0C5TBu6zMg95kzhqpO0D3lTOKh8j6sDEctdescZywNdKxSfvQeF9gVANJSx4D/FwK3QMVrl1fsWaDyTw78u5QXuyTd8t4B7tz7WKA6AMZYDCM7bS221QvEJiYfy38LJ98m1ha6xE6gLLLNUy4YA4ydNH6mQSXiUFzkNtrgNO0iij4zhuC7XBin3yEH9kQyEeekFgVIjya8IfSyMdEnGcvce1FIrNKHo43kbZqL8YAE3XchYHHd/kLErcQr4DAN5w8m4NQr2XuRF9yYUoXQcn4YSe5Lzy7RNeKaAw9oXHE+UxnKU8hBfY2/InM289aVWSGkeC7A1IjPeWJitxWI5ComsVijScxJ1/xnLWa1QdDMctY5lLDiWa6wVYjNvI+vKYCz3pb8Yy31BLXznMJaHD3tmOVQIsLw8VEgzO+FDQEex/Pz5yrKv9ohQ1NZbLl7s26PHKaPau37ChxyzHDkI6IjlW0qLYX0fGXTmgoKL+fn5kQMp81R3COg8Y0ED2YP6X1sg2/BaKIqby7vsyVvzA7/J1/rBLzuULdeDXQmWE4FvlopGx8scI3RNIn2xfEvpAenevKW0GcDPz5+Yn99D3Cf2+Nvrr3+u0CmIVgMsy4RXKfMl3A78Qlq6zc91qlJSKlZKryp4/34ZnWn9SCmB4HxbNM9XJZ7QAKle2qUvls/I6Ka4C2u4iatbcVxLS4sMwurizNyknS7vCU/IycGv0A/NlpTEle5w+fHYtc0EyyiGxnZQrVRZylISBxAToYU0UM36fxjxKzP8446+AAAAAElFTkSuQmCC"},30424:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/AlwaysOn-Availability-Groups_2_469x129-6a11cbfdd6a1ec70eda7ca9beb12d7d7.png"},320:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/AlwaysOn-Availability-Groups_363x301-fa557ea44784a740516660260907b4e9.jpg"},37192:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/AlwaysOn-Availability-Groups_3_465x277-5e5d45acd69e4801ec3c3202ef70a761.png"},21008:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/AlwaysOn-Availability-Groups_4_432x213-644f8ffb7fb4ecbbe7de1c3e0ebb268b.png"},93668:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/AlwaysOn-Availability-Groups_5-c3cda1fa992bc26a6a47f5c9de852af8.png"},41412:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/AlwaysOn-Availability-Groups_6-2700fb2efe601f207f18a034466834e2.png"},4552:(e,s,n)=>{n.d(s,{I:()=>t,M:()=>l});var i=n(11504);const r={},a=i.createContext(r);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);