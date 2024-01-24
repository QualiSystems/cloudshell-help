"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[7252],{8620:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=s(5893),r=s(1151);const l={sidebar_position:2},i="What's New in Version 2023.2",a={id:"release-notes/whats-new",title:"What's New in Version 2023.2",description:"In this article:",source:"@site/docs/release-notes/whats-new.md",sourceDirName:"release-notes",slug:"/release-notes/whats-new",permalink:"/cloudshell-help/next/release-notes/whats-new",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/release-notes/whats-new.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General Announcements",permalink:"/cloudshell-help/next/release-notes/general-announcments"},next:{title:"Bugs Fixed",permalink:"/cloudshell-help/next/release-notes/bug-fixes"}},o={},d=[{value:"Version 1.1 updates",id:"version-11-updates",level:2},{value:"QualiX 5.0",id:"qualix-50",level:3},{value:"Features and enhancements",id:"features-and-enhancements",level:2},{value:"HTTPSsupport for Training Portal",id:"httpssupport-for-training-portal",level:3},{value:"Allow shell update to override old/deprecated attributes",id:"allow-shell-update-to-override-olddeprecated-attributes",level:3},{value:"Support for MongoDB 6.0.4",id:"support-for-mongodb-604",level:3},{value:"Security enhancements and 3rd-party tool upgrades",id:"security-enhancements-and-3rd-party-tool-upgrades",level:2},{value:"New and updated API methods",id:"new-and-updated-api-methods",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"whats-new-in-version-20232",children:"What's New in Version 2023.2"}),"\n",(0,t.jsx)(n.p,{children:"In this article:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#Version",children:"Version 1.1 updates"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#Features",children:"Features and enhancements"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#Security",children:"Security enhancements and 3rd-party tool upgrades"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#New",children:"New and updated API methods"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"version-11-updates",children:"Version 1.1 updates"}),"\n",(0,t.jsx)(n.h3,{id:"qualix-50",children:"QualiX 5.0"}),"\n",(0,t.jsxs)(n.p,{children:["We're happy to announce the release of QualiX 5.0. Based on ",(0,t.jsx)(n.a,{href:"https://guacamole.apache.org/releases/1.5.3/",children:"Apache Guacamole 1.5.3"}),", this new version of QualiX includes a streamlined QualiX-over-Docker deployment process that allows you to automate SSL and advanced post-deployment configurations as part of the installation process, and updated RDP/SSH/VNC/Telnet dependencies. Upgrade procedures for existing QualiX over Docker/OVAinstallatoins are available."]}),"\n",(0,t.jsx)(n.p,{children:"For details, see Deploy QualiX 5.0 and up Using Docker."}),"\n",(0,t.jsx)(n.h2,{id:"features-and-enhancements",children:"Features and enhancements"}),"\n",(0,t.jsx)(n.p,{children:"This release includes the following features and enhancements."}),"\n",(0,t.jsx)(n.h3,{id:"httpssupport-for-training-portal",children:"HTTPSsupport for Training Portal"}),"\n",(0,t.jsx)(n.p,{children:"For enhanced security, the CloudShell Training Portal can be configured to run over HTTPS. For details, see Setting up Training Portal Using the Installer (Over the Shoulder)."}),"\n",(0,t.jsx)(n.h3,{id:"allow-shell-update-to-override-olddeprecated-attributes",children:"Allow shell update to override old/deprecated attributes"}),"\n",(0,t.jsxs)(n.p,{children:["It is now possible to configure shells to automatically remove old deprecated attributes whenever the CloudShell admin updates the shell in the ",(0,t.jsx)(n.strong,{children:"Manage > Shells"})," page. For details, see Overriding Old/Deprecated Shell Attributes."]}),"\n",(0,t.jsx)(n.h3,{id:"support-for-mongodb-604",children:"Support for MongoDB 6.0.4"}),"\n",(0,t.jsx)(n.p,{children:"CloudShell's setup process provides a MongoDB 6.0.4 installer for new customers, while existing customers will need to upgrade their MongoDB installation manually, as explained in How to Upgrade MongoDB From 4.2 to 6.0."}),"\n",(0,t.jsx)(n.h2,{id:"security-enhancements-and-3rd-party-tool-upgrades",children:"Security enhancements and 3rd-party tool upgrades"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Implemented support for MongoDB 6.0.4. New CloudShell installations come with version 6.0.4 installed by default, while existing CloudShell customers can upgrade to version 6.0.4 when upgrading to CloudShell 2023.2."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We\u2019ve updated the version of RabbitMQ (3.11.10) & Erlang (25.2.3)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ElasticSearch has been upgraded to 7.17.5"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"new-and-updated-api-methods",children:"New and updated API methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"New CloudShell Administration REST API for managing CloudShell domains, groups, users, license pools, and more. For details, see CloudShell Administration REST API."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"New APIs supporting organizing resources in blueprints and sandboxes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"GetResourcesLabelsInTopology"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"GetResourcesLabelsInReservation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Added new methods to WebAPI endpoint and client for Cloudshell Automation API including:"}),"\n",(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"EndReservation"}),(0,t.jsx)("p",{children:"CreateImmediateTopologyReservation"}),(0,t.jsx)("p",{children:"CreateTopologyReservation"}),(0,t.jsx)("p",{children:"GetUserDetails"}),(0,t.jsx)("p",{children:"GetTopologyDetails"}),(0,t.jsx)("p",{children:"FindResources"}),(0,t.jsx)("p",{children:"GetResourceAvailabilityInTimeRange"})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"ConfigureAppsV2"}),(0,t.jsx)("p",{children:"GetReservationStatus"}),(0,t.jsx)("p",{children:"GetCurrentReservations"}),(0,t.jsx)("p",{children:"GetDomainDetails"}),(0,t.jsx)("p",{children:"UpdateReservationDescription"}),(0,t.jsx)("p",{children:"AddResourcesToReservation"}),(0,t.jsx)("p",{children:"UpdateReservationGlobalInputs"})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"GetScheduledReservations"}),(0,t.jsx)("p",{children:"GetResourceLiveStatus"}),(0,t.jsx)("p",{children:"ExportFamiliesAndModels"}),(0,t.jsx)("p",{children:"DeleteReservation"}),(0,t.jsx)("p",{children:"GetServerDateAndTime"}),(0,t.jsx)("p",{children:"UpdateResourceDescription"}),(0,t.jsx)("p",{children:"UpdateResourceAddress"})]})]})})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);