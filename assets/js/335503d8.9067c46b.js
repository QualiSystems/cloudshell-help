"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[95836],{56124:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>A,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=i(17624),r=i(4552);const s={sidebar_position:1},t="License Server Installation",o={id:"install-configure/ha-installation/installation-procedure/install-and-configure-license-server/license-server-installation",title:"License Server Installation",description:"To install the License Server:",source:"@site/docs/install-configure/ha-installation/installation-procedure/install-and-configure-license-server/license-server-installation.md",sourceDirName:"install-configure/ha-installation/installation-procedure/install-and-configure-license-server",slug:"/install-configure/ha-installation/installation-procedure/install-and-configure-license-server/license-server-installation",permalink:"/cloudshell-help/next/install-configure/ha-installation/installation-procedure/install-and-configure-license-server/license-server-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/installation-procedure/install-and-configure-license-server/license-server-installation.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install and Configure the License Server",permalink:"/cloudshell-help/next/category/install-and-configure-the-license-server"},next:{title:"Configuring CloudShell Components to the License Server Role Address",permalink:"/cloudshell-help/next/install-configure/ha-installation/installation-procedure/install-and-configure-license-server/configure-cs-components-to-license-server-role"}},A={},c=[{value:"Preparing the nodes",id:"preparing-the-nodes",level:2},{value:"Configuring each node with License Server",id:"configuring-each-node-with-license-server",level:2},{value:"Create a Configuration Role for WSFC",id:"create-a-configuration-role-for-wsfc",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"license-server-installation",children:"License Server Installation"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To install the License Server:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Follow the License Server installation procedure in ",(0,l.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/select-a-license",children:"Select a CloudShell License"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"preparing-the-nodes",children:"Preparing the nodes"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Run the following on each Quali Server node:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Unblock-file C:\\Quali\\QualiHa\\QualiServer\\Functions.ps1"}),"\n",(0,l.jsx)(n.li,{children:"Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServer.ps1"}),"\n",(0,l.jsx)(n.li,{children:"Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServerCommonFunctions.ps1"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To enable PowerShell commands, add ",(0,l.jsx)(n.strong,{children:"Dword Enable"})," in registry key:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows Script Host\\Settings"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"configuring-each-node-with-license-server",children:"Configuring each node with License Server"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To configure each node in the system:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Install License Server on each node."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Configure the License Server. Use ",(0,l.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/select-a-license",children:"CloudShell Suite Installation and Configuration"})," for more information about License Server Installation."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Apply the license."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"create-a-configuration-role-for-wsfc",children:"Create a Configuration Role for WSFC"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To create a configuration role:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open ",(0,l.jsx)(n.strong,{children:"Windows Failover Cluster Manager"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(31348).c+"",width:"161",height:"116"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Right-click ",(0,l.jsx)(n.strong,{children:"Roles"})," and select ",(0,l.jsx)(n.strong,{children:"Configure Role"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Next"}),", select the ",(0,l.jsx)(n.strong,{children:"Generic Script"})," option, then click ",(0,l.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Enter the path to the ",(0,l.jsx)(n.code,{children:"LicenseServer.vbs"})," file."]}),"\n",(0,l.jsxs)(n.p,{children:["(for example: ",(0,l.jsx)(n.code,{children:"c:\\Quali\\LicenseServer.vbs"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Enter a name for the role and click ",(0,l.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Next"})," to complete the wizard."]}),"\n",(0,l.jsx)(n.p,{children:"This creates a new role that starts to run cluster events."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(85272).c+"",width:"478",height:"40"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},85272:(e,n,i)=>{i.d(n,{c:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd4AAAAoCAIAAADfQAwkAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsUBjDA/WgAADfxJREFUeF7tXXtUVNUaPweUl5eWZqBlNx4ygqusUUnW1XulEPDFpM69KyG1GjXoeRPELHpZtsgHQd37R0IC4s1wedfVrqDiCKyi7lK6eEOtBTLDSzMfaCEB8hg499vnnBnOnHnLDM4w35alw+Hb3/72b3/fb+/97X2Q3rNnT3V19bp162bPnk1hQQQQAUQAEXACBDycwAY0ARFABBABREAPAaRmdAhEABFABJwOAaRmpxsSNAgRQAQQAaRm9AFEABFABJwOAaRmpxsSNAgRQAQQAaRm9AFEABFABJwOAaRmpxsSNAgRQAQQAVp3r7msZQLCgQggAogAIuAMCOhRc2J0iDPYhDYgAogAIuDmCGBCw80dALuPCCACzoiAbavmn36sMtOJ4PCZmjH+zthLtMkSAqq62taGuiuXWtt/vQ6y4yfcM3lKUNC06ZLpUktV8eeIACJgfwRspuY/zptH0RRN02AL/D04OAgfPDw8ampOd3R0PBAxy8N7vP3NRI0OQ+DXG9dq/lNx9WLjvfdNvn/KlICAAGiqra3tp0uXLv98ZdLvp0bOWzBhYqDD2kfFiAAiYAQB2xIaDBSK/QP/UuRvIGUo8Lm/v3/u3LkXzn8/2HMTkXYVBICXq5Rf9nf9kpS0cvWqVYsWLYqMjJw1a1ZMTIx8xQq5fDn8CARAzFV6hHYiAqMDAduoGdbIInbWodDV1VVVVaXp72+p+68hNExT9oq47BaW0EemkBYDPMLYr4xye7Yr1GxG/8h3+TaAhfXyWKp/5conJRKJn58fbINu/HLj+o3rGk0/zLgB9wTEx8WOpTQgdhvKR1kVpjyZG27yNYLO7DhPHmUDZL47TFOO3JZRs1L+67QxvEukHrUvnrZRM7toZhrq1a9teo8BluaYmi1lR6uCg0IjwsOtsc/RtMUwR9+M2i+rHlC3Daqqs+qSUr6y76wgzSq/RpTz+rfnjOSsYw3C1shAfhnyGAsXxkMSg8tQNbY2LqucJ/96vrqlsRdKf6+np+ejj84GMRAW6rRyfrLGDJeQAV6WJFG7dYO+uT42friDbk0U2OTJphRa05BLjIKzGdm6K+o55jAhgWsNGT8+Yd8loG3UrNFo2ts78vO/+HD7W0DHBfn/zv/sUH7eIUhx7PxoS17u3vETJnDZZ/OFDk07dCItmKUDh5Tm+jppYgx7FZC01Zb3mOPaComYXlvf4pBuOFYpnPuR/PL99wMvw2g2tqrXfLt43ATfe6aOf6luZfPF5t6evp7eXm9vLxADYbE1dpqfnJ84GEZVuL02ozpX50V0bJ562A5sVRTY4slWKXSsT7mX9qDnqxtylhCSocMWyGfXqdR27L9t1DwwMODv/zvF2qQ3Nn8A6+dnFU8o1i1TrF8Gnzdt3LIhLeWuu/xBxqJ9umiERUGGftpBsBybU9DEcJIFqXqpiZZP53CbiBWfqqAtURXSeohMRqWn7tJDypjm5Iw4TjNpS6tK2y5vmM4MTjj5a1H3SPBEBOuZkSxcpBsxzyJAIyIA9zHg3M/Hxwd4uelC4+pvFvtPHgez7K0bvcDOm1oVTa3qzs7Omzc7QAyEzRk1jPnJBQiluaSE4md6EQjWuKs5x2O32IZRMNSKUU/Wjxo2RrSeDAqF3waAK6oKU9LP1aYPf5k/Al5J0giT9LJGsDKdJgh2nQ3C52zyITkjnsst6GIZVPGfdbUqN44VJiEFzfExq3siidp4lq0mkhG0NRTmDKOuOHh6uiTMjhDZRs1crjksLDjzwwz2KJDkN8gHhtmR9e6U+ybDB2tWzdoOqAvjE6hiNu1wrZRKiipoAjfSJSISS1JyCB/UpquXalMTJHVwNO8dKWwtIVNBvbOT9Ty9KuDrNC1RKM/LDobrhoosfIxorg3LJZp3r64pOU54vPX4/nOrtyhC1KaF86JZk2IDPbkxlkTVv6pMDaKgSvp0ti/l79euTzs21EcD8+w4fsNRBffkuFQGzKarjixhOuiOhm6i0JPqbuvxu8tna/sG2CdBATHuUp3Jws1PzTm6EwV+9jWYWQ3nWlOS+pPuiKZ3zXR0KONMWNUadzXpeODAM0hLhlEwdDRi3JP1o6awCRySeLJWIf+t1hVVitysGbDFUaY6cJ86HEfU1gWCK3y+OOEkG+zFz7HcVJb37iN5JNg/ordAsPPIMMwx4XOyWjpbG7arHyrmr/kfF8sXlPt/eGrL2lDB1vxsunoJkQFt9YRJoLlNEftIcxVbzySnHWMN4J9oDWgUyRCj+LaG9uIXcldtY3YkL7AHClodNlMzS8TU3qIjRXtKiwpLCgsOF+YfLvjsUNbOvPKKymPHyi5evNjfy0a4xUIWI1lcf2h6SWbbdwqqpKS2JjOKsJ4kCqb6/ZXgdlJeRqtPEibdvT7QU35cBpmKaFAiqtLMKZSsPcHmgoulmUDxhmJEM78Uin4lizpYApFWeZDKeGUxZVaYaNfu5VXXzmdIdyvhkEzQl6CFiTN+qOcXmSbMs4jNiAnAVArUrFxdc/gv3wob3TGp6OPgz+EwENLNxo0xMj8ZE9SfWQ3n2qHVuHgOJss9brYbIp0Rw8VEQySVobPHuJ/ou6tFXzKIAj02MerJoqgJHfJk3mqtYxNX/PxL8T7vTmNosv3mklJGuzsJjXiIyEmmPlLABnvCwauECrljN0lanfA5WS09zFec//JOmsQyLGOZ1yGWKYqvklLMPCwemlItnz4Qn/gQxCwxQMuwnAGCJ7yMoC2uI7B+j/vXSqW9Zz7bqBkWUNyh3+o1i9c8veTpZ5Y+86zs6WcTQsPujo2Lins8fmncUvky+blTyp6u9tt1gPW6wxY1kDW4nbiEcZz7agMsirn0gl4VkWdTC5Y/yeeCTWsm28b9lRXCfatFM/gJQLF5/YEjujWy0U6bNe92YRp+PXivBO4vw61HOPDr6YGscq9Q59gxY7y9vf18feELxEBY3KLh/GTUJvHMajjXaquJJAWcNfzODksD5x7slG9QrPETa2SsMHDIk60Q1omw2TaXLVPXKjUQ7BtU0yHYYdUcnU2+VeekCZ/rzT0hsgSaxLKO5bkqqtwkRxxtOYiXYbxso2aOl9Wqprfe3Ka7m3G+QXX3xInwv76euFTyes0LGlrz2Nw/nfnuK8vewObR8th7WWy6bU4hJZNxi1A+dWuQ2IUfwK6ZTSdFZ8OKtbbJoAqMH0lG6+6yVHx5ALwT2jKtGZbYMXIqMymdksvIps+ssLhfEDCwMBH0hWRFHooI4uQMVNn5rohllE1KwPt+8F7Jb52dHC/39RFqHhxgBrrJQS7hZSjjxvn6+YEYCJtSRDbdluenYRh6p6uyHZRmRvH3fNhbE+nnjA2ukfWpRV8yiALu2IMrxj1ZFDWw/xMV7bm0niveaRgttw8nFme1U2BT/Q8k2D/m8sXzP6rPmFnbpJ0d2fyv4LkAAfZEjt6WtJHhYtlMIST+Gsc/JPsBMSt6wg6xWEagkClPiXv7kTx7r5e5Fmyj5ptwJPRbZ1HRga1bN0Na4x97j+4tKlWWfTVLOvNI/aG3T71a2V365pmX1JcavCENLXYXQX42ZT/7wzCFElLMbPoiEJLO1WtDIUesfUJuv+WSrYqohKTmvE9B0kMSGF4i32dYBXY9wS98t5tK4HPBcOeJYGdBM9n6UZGyhSSRzyb4LJkxZBVJsCgrwiCjV8f2JfZgYnk22UmJ+8j2yIF3RSz7vp4EvIcN7/tduXwZ1syEmnt753jP72y61XWhZ+aVaC8vLx9fH19fX1hWgxgIm1PPz0+CyypN9YS8hlMEnDUcNXapC3kMVTEFO2vWV7eEFXNpYoEDm3JXyzKGUTBEKBY8mY0aIztLae0nrKm8K5JDWog+e18htQuyAiU0vfiDfTO3cfnM7d8/CD8K2ZDzHg1PJIHTSlZAsPPI0KGpwuciBEjmwYOPZbM2TlXs2lm/ijS3ADIS2YuB1gVPGGIAJZYRKqw6mj9IkeSq8FaCvVCx7UXt0n1/W6dQNDa27N37T2BneGPbg/ZQnjixNEF25sLpzNNvXBrfKPN+KtprScf1jmlRi+xlJepxEAInDhdruttjYh5nE87kas0YNo/BFc2Apruru6xMOcZvfNwTSUIb4OxOnkLlaNcL5JQ1Ply9eSBZFRX7Tg2RlEbOoBJzcqlUrRhfxdQTw+dwuNqcI+fWp0ShCxxkOWiYbFIrGhqb6jqPMKyL/5zCZDtmQeo83TRjiW3UfOCzbS+/+CJ5PYH/Q3t40KdOnZJMC5/kf+9fK5/5puf43x/8YtakqJLy0j8s1Atml4DD3YzkXtSG9/3gvRIgZUhSwUrZz8fXy9u7r6+vvb395MnqPsZzfvzyO/trNMgbH0eWq9k7pFjMI4DUPDo8xDZqLsh5y7DbsOGVSKYtjItvvqHu8bg1+4E5l3++2tbRFxQ+c3RgNLp74bS/3oikdAMTDvDoR2ZUQ77LEQc5o3t4sXeuioBt1Gyql7d++6X+zEkvhgm4O+Bq+3X/ifcFh0shZeuqqLif3fhLQd1vzLHHTo2AfajZqbuIxiECiAAi4GoI2HZDw9V6h/YiAogAIuCSCOB/2+qSw4ZGIwKIwOhGYIia4Z2R0d1V7B0igAggAq6CACY0XGWk0E5EABFwIwSQmt1osLGriAAi4CoIIDW7ykihnYgAIuBGCCA1u9FgY1cRAUTAVRBAanaVkUI7EQFEwI0QQGp2o8HGriICiICrIIDU7CojhXYiAoiAGyGA1OxGg41dRQQQAVdBAKnZVUYK7UQEEAE3QuD/MuFt1aWlb4sAAAAASUVORK5CYII="},31348:(e,n,i)=>{i.d(n,{c:()=>l});const l="data:image/jpeg;base64,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"},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>t});var l=i(11504);const r={},s=l.createContext(r);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);