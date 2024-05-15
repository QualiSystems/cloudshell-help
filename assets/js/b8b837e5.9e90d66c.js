"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30249],{27696:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=o(17624),s=o(4552);const i={sidebar_position:2},a="Performing Actions on Resources in the Sandbox",r={id:"devguide/available-cs-api/useful-cs-api-examples/peform-actions-on-rsrc-in-sandbox",title:"Performing Actions on Resources in the Sandbox",description:"Adding resources, connecting L1 routes and setting live status",source:"@site/versioned_docs/version-2023.3/devguide/available-cs-api/useful-cs-api-examples/peform-actions-on-rsrc-in-sandbox.md",sourceDirName:"devguide/available-cs-api/useful-cs-api-examples",slug:"/devguide/available-cs-api/useful-cs-api-examples/peform-actions-on-rsrc-in-sandbox",permalink:"/cloudshell-help/devguide/available-cs-api/useful-cs-api-examples/peform-actions-on-rsrc-in-sandbox",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/available-cs-api/useful-cs-api-examples/peform-actions-on-rsrc-in-sandbox.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Starting an API Session Outside of CloudShell",permalink:"/cloudshell-help/devguide/available-cs-api/useful-cs-api-examples/start-api-outside-cs"},next:{title:"Finding Blueprints Containing a Specific Resource, Service or App",permalink:"/cloudshell-help/devguide/available-cs-api/useful-cs-api-examples/find-blueprints-with-rsrc-serv-or-app"}},c={},l=[{value:"Adding resources, connecting L1 routes and setting live status",id:"adding-resources-connecting-l1-routes-and-setting-live-status",level:2},{value:"Connecting L2 routes",id:"connecting-l2-routes",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"performing-actions-on-resources-in-the-sandbox",children:"Performing Actions on Resources in the Sandbox"}),"\n",(0,t.jsx)(n.h2,{id:"adding-resources-connecting-l1-routes-and-setting-live-status",children:"Adding resources, connecting L1 routes and setting live status"}),"\n",(0,t.jsx)(n.p,{children:"This script adds resources to the sandbox, creates L1 resource connections and sets the \u2018online\u2019 live status icon on the resources."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import time\n \n \ndefexecute():\n    from cloudshell.workflow.orchestration.sandbox import Sandbox\n    Sandbox = Sandbox()\n    Reservation_Id = Sandbox.reservationContextDetails.id\n \n    Resource_List =['PUT Mock','PUT Mock/Port 1','Traffic Mock','Traffic Mock/Port 1']\n \n    time.sleep(3)\n \n    # add resources\n    Sandbox.automation_api.AddResourcesToReservation(reservationId=Reservation_Id, resourcesFullPath=Resource_List)\n    time.sleep(1)\n    print\"\"\n    Sandbox.automation_api.WriteMessageToReservationOutput(Reservation_Id,\"resources added to sandbox\")\n \n    time.sleep(3)\n    # set resource live status\n    Sandbox.automation_api.SetResourceLiveStatus('PUT Mock','Online',\"Active\")\n    Sandbox.automation_api.SetResourceLiveStatus('Traffic Mock','Online',\"Active\")\n \n    time.sleep(1)\n    Sandbox.automation_api.WriteMessageToReservationOutput(Reservation_Id,\"resources are online\")\n \n    time.sleep(3)\n    # connect L1 routes\n    Sandbox.automation_api.CreateRouteInReservation(reservationId=Reservation_Id,\n                                                    sourceResourceFullPath='PUT Mock/Port 1',\n                                                    targetResourceFullPath='Traffic Mock/Port 1',\n                                                    mappingType='bi', routeAlias='API-created route')\n \n    time.sleep(1)\n    Sandbox.automation_api.WriteMessageToReservationOutput(Reservation_Id,\"resources connected\")\n"})}),"\n",(0,t.jsx)(n.h2,{id:"connecting-l2-routes",children:"Connecting L2 routes"}),"\n",(0,t.jsx)(n.p,{children:"While connecting L1 routes is done via the CreateRouteInReservation API (example above), L2 \u201cConnector\u201d routes are established using the SetConnectorRequest API."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import time\n \n \ndef execute_L2():\n    from cloudshell.api.cloudshell_api import SetConnectorRequest\n    from cloudshell.workflow.orchestration.sandbox import Sandbox\n    Sandbox = Sandbox()\n    Reservation_Id = Sandbox.reservationContextDetails.id\n \n    time.sleep(3)\n    connector_request = SetConnectorRequest('PUT Mock/Port 1', 'Traffic Mock/Port 1', 'bi', 'API-created route')\n    sandbox.automation_api.SetConnectorsInReservation(reservationId=reservation_id, connectors=[connector_request])\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>a});var t=o(11504);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);