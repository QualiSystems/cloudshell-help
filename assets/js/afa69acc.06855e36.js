"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[70984],{37800:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=i(17624),s=i(4552);const l={sidebar_position:2},o="Configuring Single Logout (SLO)",r={id:"admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo",title:"Configuring Single Logout (SLO)",description:"SSO/SLO configuration is available with CloudShell Premium Tier.",source:"@site/docs/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo.md",sourceDirName:"admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo",slug:"/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SSO Tester",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/sso-tester"},next:{title:"JSON Web Token (JWT) Configuration",permalink:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/json-web-token-jwt-configuration"}},c={},d=[{value:"Creating an SSL certificate",id:"creating-an-ssl-certificate",level:2},{value:"Configuring SAML SLO on each CloudShell Portal",id:"configuring-saml-slo-on-each-cloudshell-portal",level:2},{value:"Configuring SAML SLO for CloudShell Portal in SSL mode",id:"configuring-saml-slo-for-cloudshell-portal-in-ssl-mode",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuring-single-logout-slo",children:"Configuring Single Logout (SLO)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"SSO/SLO configuration is available with CloudShell Premium Tier."})}),"\n",(0,t.jsx)(n.p,{children:"Single logout (SLO) invalidates CloudShell single sign-on (SSO) sessions and redirects the logging out user to their defined logout page. If your CloudShell deployment includes multiple domains, where each domain uses a different logout page, each one of your users will be redirected to their respective logout page."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"SLO must be used in conjunction with SSO."})}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-ssl-certificate",children:"Creating an SSL certificate"}),"\n",(0,t.jsx)(n.p,{children:"The first step is to create an SSL certificate, which you will need to install on all CloudShell Portal machines."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To create an SSL certificate:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In your personal store, create an SSL certificate with a private key."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If CloudShell Portal is not installed on the Quali Server machine, copy the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Certificates\\makecert.exe"})," file from the Quali Server machine to the Portal machine"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an SSL certificate:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'cd "makecert.exe containing folder"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'makecert.exe -n "CN=My Company Development Root CA,O=My Company, OU=Development,L=Quali,S=NY,C=US" -pe -ss My -sr LocalMachine -sky exchange -m 120 -a sha1 -len 2048 -r\n'})}),"\n",(0,t.jsx)(n.p,{children:'Where "My Company Development Root CA" is the name of the certificate'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Export the certificate to all CloudShell Portal machines."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the Start menu, search for the ",(0,t.jsx)(n.strong,{children:"Manage Computer Certificates"})," app and locate the certificate you created in the previous step."]}),"\n",(0,t.jsx)(n.p,{children:'The certificate should have the same name you gave it in the command. In our example: "My Company Development Root CA".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right-click the certificate and select ",(0,t.jsx)(n.strong,{children:"Export>All Tasks>Export"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(93412).c+"",width:"494",height:"230"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Certificate Export Wizard"}),", select ",(0,t.jsx)(n.strong,{children:"Yes, export the private key"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(59647).c+"",width:"287",height:"69"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Specify the ",(0,t.jsx)(n.strong,{children:"Password"})," to allow exporting the certificate."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),", specify the file name. and complete the wizard."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Import the certificate to the personal store on all CloudShell Portal machines."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Export the certificate for the service provider."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Certificate Export Wizard"}),", select ",(0,t.jsx)(n.strong,{children:"No, do not export the private key"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(40040).c+"",width:"287",height:"69"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"DER encoded binary X.509 (.CER)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(42428).c+"",width:"376",height:"111"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Specify the file name and location of the ",(0,t.jsx)(n.code,{children:".cer"})," certificate and complete the wizard."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Import the generated public key to the service provider. Okta example:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Okta, from the ",(0,t.jsx)(n.strong,{children:"Applications"})," menu, select the app you created for SSO.."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"General"})," tab, edit the SAML settings."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"SAML Settings"}),", click ",(0,t.jsx)(n.strong,{children:"Edit."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Proceed to ",(0,t.jsx)(n.strong,{children:"SAML Settings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Show Advanced Settings"}),", and set the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Signature Certificate"}),": Upload the public certificate."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Enable Single Logout"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Single Logout URL"}),": Specify the URL."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SP Issuer"}),": Specify the SP issuer URL."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(22904).c+"",width:"695",height:"228"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In some cases, you may also need to import the generated certificate to the trusted certificates folder in CloudShell Portal. Right-click the ",(0,t.jsx)(n.strong,{children:"Trusted Root Certification>Certificates"})," folder and select ",(0,t.jsx)(n.strong,{children:"All Tasks>Import"}),"."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-saml-slo-on-each-cloudshell-portal",children:"Configuring SAML SLO on each CloudShell Portal"}),"\n",(0,t.jsx)(n.p,{children:"Perform the following procedure on each CloudShell Portal machine."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To configure SAML SLO for CloudShell Portal:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure SSO is configured. For details, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configure-sso/",children:"Configuring Single Sign-On (SSO)"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Disable the ",(0,t.jsx)(n.code,{children:"requireSsl"})," flag by adding the following code to the ",(0,t.jsx)(n.code,{children:"web.config"})," file."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"requireSsl"})," flag only applies to websites that do not use HTTPS. If HTTPS is used, perform the steps in the ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/access-control-and-authentication/saml-authentication-configuration-sso-slo/configuring-single-logout-slo#configuring-saml-slo-for-cloudshell-portal-in-ssl-mode",children:"Configuring SAML SLO for CloudShell Portal in SSL mode"})," section and carry on with the configuration process."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<?xml version="1.0" encoding="UTF-8"?>\n<system.identityModel.services>\n   <federationConfiguration>\n      <cookieHandler requireSsl="false" name="CloudShellAuthFederation" />\n   </federationConfiguration>\n</system.identityModel.services>\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"web.config"})," file is overridden during a CloudShell patch or version upgrade. Therefore, make sure to keep a backup copy of the file, and after upgrade, replace the file's ",(0,t.jsx)(n.code,{children:"<system.identityModel.services>"})," section with the one in the backup version."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Kentor.config"})," file, do the following:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"<kentor.authServices"})," section, set the following properties (if the section is missing, add it)."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entityId"}),': CloudShell Portal (service provider). IP\xa0address or DNS name, and port if CloudShell Portal is note using the default (8080). For example: "',(0,t.jsx)(n.code,{children:"http://192.168.20.134:85/AuthServices"}),'"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"returnUrl"}),": Logout page URL"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<?xml version="1.0" encoding="utf-8"?>\n<kentor.authServices entityId="http://192.168.30.27:6060/AuthServices"\n        returnUrl="http://192.168.30.27:6060/">\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under the ",(0,t.jsx)(n.code,{children:"<identityProviders>"})," section, set the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entityId"}),": Identity provider issuer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"logoutUrl"}),": Identity provider SLO URL"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:' <identityProviders>\n    <add entityId="http://www.okta.com/exkdmzexSOj8bXgBB355"\n    signOnUrl="https://quali-john.okta.com/app/qualiorg672652_john_1/exkdmzexSOj8bXgBB355/sso/saml"\n    logoutUrl="https://quali-john.okta.com/app/qualiorg672652_john_1/exkdmzexSOj8bXgBB355/slo/saml"\n allowUnsolicitedAuthnResponse="true"\n binding="HttpPost">\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Kentor.config"})," file, add a section that will point to the newly created certificate. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<serviceCertificates>\n   \x3c!--add fileName="V:\\Users\\john.d\\my-certificate.pfx" />--\x3e\n   <add storeName="My" storeLocation="LocalMachine" findValue="54nb76caaa0018v67dd8h217jc7h1i9" x509FindType="FindBySerialNumber" use="Signing" />\n</serviceCertificates>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Configure your identity provider. This typically includes setting the SLO logout page URL, CloudShell Portal issuer (for example: "',(0,t.jsx)(n.code,{children:"http://192.168.20.134/AuthServices"}),'") and .cer certificate file.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To configure the identity provider on Okta:"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart ",(0,t.jsx)(n.strong,{children:"Quali Server"})," and ",(0,t.jsx)(n.strong,{children:"CloudShell Portal IIS"})," services."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to CloudShell Portal with your Idp user."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log out of CloudShell Portal."}),"\n",(0,t.jsx)(n.p,{children:"You are redirected to the defined logout page."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-saml-slo-for-cloudshell-portal-in-ssl-mode",children:"Configuring SAML SLO for CloudShell Portal in SSL mode"}),"\n",(0,t.jsx)(n.p,{children:"If CloudShell Portal is running in SSL mode (HTTPS), you will need to perform several additional configurations to enable SLO."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To configure SAML SLO to work in HTTPS:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['In your identity provider, update all SLO logout URLs to be in https mode. For example: "',(0,t.jsx)(n.code,{children:"https://192.168.30.27/AuthServices/Acs"}),'".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Kentor.config"})," file, in the ",(0,t.jsx)(n.code,{children:"<kentor.authservices"})," section, update the ",(0,t.jsx)(n.code,{children:"entityId"})," and ",(0,t.jsx)(n.code,{children:"returnUrl"})," URLs to be in https mode. For example:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(70404).c+"",width:"522",height:"85"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart the CloudShell Portal web site in IIS\xa0Manager."}),"\n",(0,t.jsx)(n.p,{children:'If you get a "Keyset does not exist" error message, it means that your IIS user is unable to access the private key. Grant the user read access and try again.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(40372).c+"",width:"455",height:"271"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\customer.config"})," file and set the ",(0,t.jsx)(n.code,{children:"CustomAbsoluteLoginPage"})," and ",(0,t.jsx)(n.code,{children:"CustomAbsoluteLogoutPage"})," to be in https mode. For example:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(30272).c+"",width:"943",height:"40"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"web.config"})," file, remove the ",(0,t.jsx)(n.code,{children:"requireSsl"}),' key or change its value to "true", since the default is to use SSL cookies:']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(88920).c+"",width:"820",height:"119"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},70404:(e,n,i)=>{i.d(n,{c:()=>t});const t="data:image/png;base64,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"},40372:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/SLOHTTPSAddIISUserPermission-766f5f2de8c2d031ea768a60265d3949.png"},30272:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/SLOHTTPSCustomerConfig-d830a1e4d5d3e76b22c02a58cd19b574.png"},88920:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/SLOHTTPSWebConfig-fbfb92400682ae5fab243cfc640ad790.png"},22904:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/OktaSLOConfig-cbe0a489a0f384318e157311490e4014.png"},93412:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/SAMLExportCertificate-03eb0a02a2118ec7892e32e2f98548d7.png"},40040:(e,n,i)=>{i.d(n,{c:()=>t});const t="data:image/png;base64,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"},59647:(e,n,i)=>{i.d(n,{c:()=>t});const t="data:image/png;base64,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"},42428:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/SAMLSaveCertificateFormat_376x111-0f6697f2b2199d02bf5834ef41be2c89.png"},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>o});var t=i(11504);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);