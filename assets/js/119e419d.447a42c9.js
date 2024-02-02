"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[957],{93243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(85893),i=n(11151);const s={},o="Traffic Generators Overview",a={id:"intro/features/traffic-gens/index",title:"Traffic Generators Overview",description:'CloudShell\'s traffic generator shells enable you to conduct traffic test activities from the sandbox. For traffic libraries in TestShell Studio, see "CloudShell Libraries" on page\xa01.',source:"@site/docs/intro/features/traffic-gens/index.md",sourceDirName:"intro/features/traffic-gens",slug:"/intro/features/traffic-gens/",permalink:"/cloudshell-help/next/intro/features/traffic-gens/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/intro/features/traffic-gens/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration Management Overview",permalink:"/cloudshell-help/next/intro/features/Configuration-Management"},next:{title:"Using Traffic Generator Ports as Abstract Resources",permalink:"/cloudshell-help/next/intro/features/traffic-gens/Traffic-Gens-Abst"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Our Traffic Generator Shells",id:"our-traffic-generator-shells",level:2},{value:"How to set up a traffic generator in CloudShell",id:"how-to-set-up-a-traffic-generator-in-cloudshell",level:2},{value:"How to use traffic generators in CloudShell",id:"how-to-use-traffic-generators-in-cloudshell",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"traffic-generators-overview",children:"Traffic Generators Overview"}),"\n",(0,r.jsx)(t.p,{children:'CloudShell\'s traffic generator shells enable you to conduct traffic test activities from the sandbox. For traffic libraries in TestShell Studio, see "CloudShell Libraries" on page\xa01.'}),"\n",(0,r.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(t.p,{children:"In CloudShell, a traffic generator is typically modeled using a chassis/blade resource, which represents the traffic generator device and ports, and a controller service that runs the commands on the chassis, such as Load Configuration File, Start Traffic and Get Statistics. Chassis and controllers are each modeled by a dedicated shell. The separation of these two elements into different shells enables you to accurately model your real-life architecture. For example, they support scenarios where the chassis and controller are located on different machines or on the same one, provided as physical devices or software installed on VMs, and configurations that mix and match different controllers and chassis of the same manufacturer."}),"\n",(0,r.jsx)(t.p,{children:"The following image illustrates a controller service that runs traffic from a traffic generator chassis to a router, via a layer 2 switch:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(70424).Z+"",width:"1236",height:"467"})}),"\n",(0,r.jsx)(t.h2,{id:"our-traffic-generator-shells",children:"Our Traffic Generator Shells"}),"\n",(0,r.jsx)(t.p,{children:"While we still support the use of 1st Gen shells, we highly recommend using the 2nd Gen version of the traffic generators you want to use."}),"\n",(0,r.jsxs)(t.p,{children:["Our existing traffic generator shells can be downloaded from ",(0,r.jsx)(t.a,{href:"https://github.com/orgs/QualiSystems/repositories",children:"Quali Repositories"})," and have different levels - Certified, Preview & Community grade. Can't find the Shell you're looking for? You can extend an existing Shell, create a new Shell based on one of our ",(0,r.jsx)(t.a,{href:"https://community.quali.com/repos/type/Standard.html",children:"Shell standards"}),", or suggest a new standard in our ",(0,r.jsx)(t.a,{href:"https://community.quali.com/spaces/11/index.html",children:"Idea Box"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-set-up-a-traffic-generator-in-cloudshell",children:"How to set up a traffic generator in CloudShell"}),"\n",(0,r.jsx)(t.p,{children:"This procedure provides an end-to-end flow from importing a traffic generator chassis and controller into CloudShell, creating the chassis resource and controller service, and adding them to a blueprint."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Import the traffic generator chassis shell into CloudShell."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In the appropriate domain, create a chassis resource with the details of your chassis device or VM (if your chassis is provided as a virtual appliance)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Import the traffic generator controller shell into CloudShell."}),"\n",(0,r.jsx)(t.p,{children:"Since the controller is a service, if you're not planning on working in the Global domain, you will need to expose the service to the appropriate domain. This is done by associating the service to a service category that is assigned to the domain. If your controller is a 1st Gen shell, in Resource Manager Client, open the Resource Families explorer, click the service family and associate the service category. For 2nd Gen service shells, assign the shell's service category to the appropriate domain in the Manage dashboard."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a blueprint in the domain."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add the controller service, chassis ports that will be used in the traffic test, and any additional resources/Apps as appropriate."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create the connectivity requirements between the different endpoints."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Associate the chassis ports to the port configurations specified in the controller's configuration file, as explained in the following section, under Load Configuration."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use-traffic-generators-in-cloudshell",children:"How to use traffic generators in CloudShell"}),"\n",(0,r.jsx)(t.p,{children:"The following workflow highlights a typical traffic test. For additional commands and use cases, see the readme file that comes with your traffic generator shell."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In the sandbox, open the controller's commands pane."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run these commands in the following order:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run Load Configuration to load the configuration file prepared by your admin to the controller. The configuration file includes the settings according to which the traffic test will be run. For example, packet size, number of packets to send in parallel, interval at which to send packet batches, etc."}),"\n",(0,r.jsx)(t.p,{children:"Points to consider:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The file must be accessible to the execution server that will run the traffic test."}),"\n",(0,r.jsx)(t.li,{children:"The configuration file provides a unique name for each port on the chassis. Therefore, in order to assign a port on the configuration file to a port on the chassis, you must specify the file's defined port name on the port in CloudShell. To do so, drag the port resource into the diagram from the Add Resource catalog, open its Resource Structure pane, click the port's drop-down list and select Attributes, and in the Logical Name field, specify the port's name."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:'Since traffic operations may take longer than the default 10 minute idle timeout period set for shell drivers, once you run the first command on the traffic generator controller, the controller will remain in a "running" state (indicated by the turning wheel on the controller service) until the reservation ends or the shell driver process is manually terminated.'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run Start Traffic to generate and send the traffic to the DUT according to the settings provided in the configuration file."}),"\n",(0,r.jsx)(t.p,{children:"Set the Blocking input to decide how to run the traffic test (True to run synchronously or False to run asynchronously). In synchronous mode, CloudShell waits for the traffic test to complete before allowing additional traffic commands to run, and in asynchronous mode, you can run additional commands while the traffic test is running."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run Stop Traffic to stop sending traffic from the traffic generator."}),"\n",(0,r.jsx)(t.p,{children:"This does not terminate the controller's shell driver process, so if the Start Traffic command is running in synchronous mode, all subsequent commands will still have to wait for the traffic test to complete."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run Get Statistics. This command returns the traffic test's statistics in JSON or CSV format."}),"\n",(0,r.jsx)(t.p,{children:"Set the command's inputs:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"View Name: Type of statistics to return. For example, Port Statistics, Traffic Item Statistics, Flow Statistics, etc. The types available may differ depending on the traffic generator."}),"\n",(0,r.jsx)(t.li,{children:"Output Type (Enum): JSON or CSV. JSON prints the statistics to the reservation's output, which is useful for API calls that can then use the output, while CSV attaches a CSV file with the test's statistics to the sandbox."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},70424:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/TrafficGeneratorsArchitecture-26cada66b600ac0bbf9bb76ad2c49b64.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);