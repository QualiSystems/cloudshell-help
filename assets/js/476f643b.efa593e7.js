"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[75345],{34858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(74848),i=n(28453);const r={sidebar_position:3},o="Running AdHoc Automation Suites",d={id:"portal/job-scheduling/running-automation-suites/run-adhoc-suites",title:"Running AdHoc Automation Suites",description:"Ad-hoc automation suites can be used to define and execute an automation suite on the fly. Ad-hoc suites are intended for one time use and therefore do not have recurrence settings or the capability to publish inputs. The job and test results are saved in the ad-hoc automation suite's execution history, but the ad-hoc suite's settings are not saved and cannot be reused.",source:"@site/versioned_docs/version-2023.3/portal/job-scheduling/running-automation-suites/run-adhoc-suites.md",sourceDirName:"portal/job-scheduling/running-automation-suites",slug:"/portal/job-scheduling/running-automation-suites/run-adhoc-suites",permalink:"/2023.3/portal/job-scheduling/running-automation-suites/run-adhoc-suites",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/job-scheduling/running-automation-suites/run-adhoc-suites.md",tags:[],version:"2023.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Running Custom Automation Suites",permalink:"/2023.3/portal/job-scheduling/running-automation-suites/run-custom-suites"},next:{title:"Extending and Stopping Automation Suite Jobs",permalink:"/2023.3/category/extending-and-stopping-automation-suite-jobs"}},l={},h=[];function c(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"running-adhoc-automation-suites",children:"Running AdHoc Automation Suites"})}),"\n",(0,s.jsx)(t.p,{children:"Ad-hoc automation suites can be used to define and execute an automation suite on the fly. Ad-hoc suites are intended for one time use and therefore do not have recurrence settings or the capability to publish inputs. The job and test results are saved in the ad-hoc automation suite's execution history, but the ad-hoc suite's settings are not saved and cannot be reused."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Regular users who are permitted to access a test can run it as part of an ad-hoc suite. The test is not visible to users who are not permitted to view and run it. For information about adding permitted users to a test, see Adding users and groups to a test."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To add an ad-hoc automation suite:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Executions"})," page, in the ",(0,s.jsx)(t.strong,{children:"AdHoc"})," automation suite's row, click ",(0,s.jsx)(t.strong,{children:"Run"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Name"})," field, enter a name for the suite."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Description"})," field, enter a description for the suite."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To add a job to the suite, click ",(0,s.jsx)(t.img,{src:n(10011).A+"",width:"46",height:"27"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Name"})," field, enter a name for the job."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Description"})," field, enter a description for the job."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Blueprint"})," field, click ",(0,s.jsx)(t.img,{src:n(24467).A+"",width:"19",height:"21"}),". In the ",(0,s.jsx)(t.strong,{children:"Select blueprint"})," pane, select the required blueprint and click ",(0,s.jsx)(t.strong,{children:"Done"}),". Optionally, enter default values for the blueprint's inputs, if it has any."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To add a test to the job, in the ",(0,s.jsx)(t.strong,{children:"Tests"})," field, click ",(0,s.jsx)(t.img,{src:n(14415).A+"",width:"24",height:"19"}),". In the ",(0,s.jsx)(t.strong,{children:"Add a test"})," pane, browse to the required test and click to add it.",(0,s.jsx)(t.br,{}),"\n","Tests are executed sequentially, so to change the order of the tests inside your job, click ",(0,s.jsx)(t.img,{src:n(24467).A+"",width:"19",height:"21"}),", next to the test name click ",(0,s.jsx)(t.img,{src:n(3795).A+"",width:"21",height:"21"})," and drag the test to the required location."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"For each test in the job, enter the duration (in minutes)."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Optionally, enter default values for the test's input fields if it has any. Multiline values are supported for test input string attributes, as explained in ",(0,s.jsx)(t.a,{href:"/2023.3/portal/job-scheduling/manage-automation-suites/add-suites#add-tests-to-a-job",children:"Add tests to a job"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To edit the duration of the job, in the ",(0,s.jsx)(t.strong,{children:"Duration"})," field, click ",(0,s.jsx)(t.img,{src:n(18233).A+"",width:"18",height:"19"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Tab"}),(0,s.jsx)(t.th,{children:"Action to perform"}),(0,s.jsx)(t.th,{children:"Instruction"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Calculated tab"}),(0,s.jsx)(t.td,{children:"Update the job duration buffer"}),(0,s.jsx)(t.td,{children:"In the Set buffer (minutes) field, enter the required value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Specific tab"}),(0,s.jsx)(t.td,{children:"Enter the job duration manually"}),(0,s.jsx)(t.td,{children:"Enter the amount of time required for the job execution."})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To define the job's execution settings, in the required job row, click ",(0,s.jsx)(t.img,{src:n(18233).A+"",width:"18",height:"19"}),"."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Option"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Execution Servers"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Select the execution server(s) that will run the job's tests:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Specific"}),": Select a specific execution server. If needed you can select more than one execution server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Any"}),": The execution server is selected automatically by availability"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Reporting Profile"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Determine what will be written to the execution report:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"None"}),": Test results (passed/ failed/ completed/ error/ terminated) and measurements attributes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Results"}),": Test results (passed/ failed/ completed/ error/ terminated) and measurements attributes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Measurements and Results"}),": Test results (passed/ failed/ completed/ error/ terminated), transformations, text to report, measurement attributes, and captured image"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"All"}),": Every input received by the test and output sent during the test"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Stop On"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Determine when the job will stop:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fail"}),": The job will stop running when a test fails"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Error"}),": The job will stop running when an error occurs or if the test encounters an error."]}),"\n"]})]})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"To add additional jobs to the suite, repeat the last step."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"To define the email notification you wish to receive for the suite, click the Email Notifications field and select one of the following options:\xa0"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Option"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"None"}),(0,s.jsx)("td",{children:"No notification will be sent."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Errors Only"}),(0,s.jsx)("td",{children:"Notifications will be sent if an error occurs while trying to run the suite within the suite. Test failure does not prompt an email notification."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Suite and Errors"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Notifications will be sent:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When the first job in the suite started to run and the last job in the suite completed the run."}),"\n",(0,s.jsx)(t.li,{children:"If an error occurred while trying to run the suite or any of the jobs it consists of."}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"All"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Notifications will be sent:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When the first job in the suite started to run and the last job in the suite completed the run."}),"\n",(0,s.jsx)(t.li,{children:"If an error occurred while trying to run the suite or any of the jobs it consists of."}),"\n",(0,s.jsx)(t.li,{children:"When each job within the suite started running and completed its run."}),"\n"]})]})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To define advanced scheduling options for the suite, in the ",(0,s.jsx)(t.strong,{children:"Advanced"})," field, click ",(0,s.jsx)(t.img,{src:n(22118).A+"",width:"20",height:"18"})," and select a suitable option:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Remove old jobs from queue"}),(0,s.jsx)(t.td,{children:"Define timeout for the suite. Jobs will be automatically removed from the queue upon time-out."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Set specific timeframe"}),(0,s.jsx)(t.td,{children:"Define a specific start and end time for the suite."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"End Sandbox when Job fails"}),(0,s.jsx)(t.td,{children:"Select this option to end sandboxes automatically when the job fails."})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To view or edit the published input fields, in the User Inputs field, click ",(0,s.jsx)(t.img,{src:n(18233).A+"",width:"18",height:"19"})," and edit the required field."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(57457).A+"",width:"992",height:"382"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To delete a job from the suite, in the job\u2019s row, click ",(0,s.jsx)(t.img,{src:n(75340).A+"",width:"21",height:"23"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Run"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The suite is added to the queue and will run as soon as an appropriate execution server and the blueprint's resources (if a blueprint was defined) are available for the duration of the automation suite's jobs."}),"\n",(0,s.jsxs)(t.p,{children:["For details about suite results and reports, see ",(0,s.jsx)(t.a,{href:"/2023.3/portal/job-scheduling/view-tests-job-suite-execution-results",children:"Viewing Test, Job and Suite Execution Results"})," and ",(0,s.jsx)(t.a,{href:"../../../portal/job-scheduling/view-execution-history-and-reports/",children:"Viewing Execution History and Test Reports"}),"."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},57457:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Ad-Hoc-Suites_10_-7101ab7094eb201734c96f4c7d481fbb.png"},75340:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFvSURBVEhL7ZPdS8JQHIb7l4OukgozTcUmJlZTR2aSJOaFKIagBRkuvVAUJLS0UrzIDMOPOd32prISpw5CggIfeG/O4X3OB/xW8AsspfIIAo8e2wHDdsHxvLgqj6xU4Fg8xH04pJywUKdwXWdRb/fF3flMSBulFHxuCvukfRTTkRVqjRqrCtUoazsEDAfW733ziQfR3KvYHjMhbVZzCHtIKJRa6Aa3c7hds+MwY31DA73TD7pYF9tjpp9fuYGRsCD0wgw/FCzTQoflwPe6aDPDfxWAWhg6pQH+otiRICvlWAa0j8T5bR7lzBVs3gjK74PDFpN2EDkmYAvFkYkHYaCCeK61l9K/KI06CNhDNLJf0rcFpUKfRT4ZHE3NcNou79KotQZj+mNpNQaT0QwXfY/CY3F2Ul6otvcQeBI7EqalzQICZyS2tHps7s6LDiryAtmG2JEwLUUfH5U8kokEYvS8JJEu1cGJDSkzpIvzX6TAJ7NfAd/Avj7fAAAAAElFTkSuQmCC"},10011:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAbCAYAAAADDr0pAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJYSURBVFhH7ZhNSBRhGMc3d9NDWIfCEIQOfSh179KhPCRExy7RzaCLdYjADkWH1o00rBbFLqJl9IFGgUVCHyR9QCRFFBF2qGTFr0Z353tmZ5n33/NMBh7mor4uO7CwP1jeZ2b4zTvPO//hjSmqmanvzmViSTUy7O4hX0W1UN2uIZaMDhvZ9w+JhxVLnrJ4sSmLL6HqEi2gDp0WkY7KVPgxq2YtxLd36Wi6Y+HQXQvb0nroMatGpnjFIkeGbNz/5uHReAGH761RK8oSr2jTsJ7agmkZcTCu+JhQfTQP20hQLU6sCzlvxcgSZymWY1qeOviZFZgyBJof24hTjZ9EyYnHaZZrrupo6DGw54aBi69dZDSBOUvg3Cs3GKunWk2njoSsxSpDfMNlDY23TZx57uA8iQ7/8JC1BfQ88PC7F8iffubgwIBJnxeSFqsM8S00k2dfOvg84+N3TmCepD0fKAhAoVn/RWMfp320vnBQe62ExLdSm6TeupimnnYLJEzSgqTpF/znsUlqneQbF3XXS0h8U4eGYw809I1pGPxq4dOUBysv4NCUj03mMfjFQO8HDUeHNGy+En6NZSNDnNNxZ3oBjb1zaLqVRdd7G7OGjwXbR+c7Ewf7Feyn2o70PKWqGnqNZSNDnEm0qahK5QKxUyMW9bqPGZI/8cQKxiuJeFKSNCNLnN/RHDTMSQqgf+ICx5e8x8POWzGyxBlOT5bk5Jwg8dlFcb4pqeHDyBT/L7jvpokLo24QRHv7TPnSjEzxolIWLzaRFY/ivkp1O+UB72TtithOVkN3NvMXUbBNMvwVxv4AAAAASUVORK5CYII="},24467:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAVCAIAAAAra0KGAAAAAXNSR0IArs4c6QAAAQ1JREFUOE9j/P//PwNZgIksXSBNg1nn7+8fvv9G8RkjESH05+nO6b2HPwL1SbkllNjJQAwg6M8vnz5/+fzlD0T1s12HbsAsxq8TaNv8hs7Fd6wS0wy5QVoEeHhhOvG4FupIFhaGP3/4nbJjVU5tfmoV6ywK1YrLTqg2QcPAxmJHeYaP+2Zu/u2F0IbLnwhtJV5/Vk/d/5CB3zs7VpcVJWwx7UTVNnHzhS/83vm5cEfCdaPpJFYbmmtJ0Iaq8/66qcDo5tCKdPuzGrcj4a5FxMq7Q5NbdoESChhg9xtyEMH9+ePOfRK0AY2A23l378Jjn1W1dBTV5SV5UMMfexYmJsVj10kwxWPXRkxewakTAID+lU9ZXYdqAAAAAElFTkSuQmCC"},14415:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAChSURBVEhLY/j379/P/zQCILMHjwW/f//+//3HDzBNLCDJgvsPH/8/durs/4ePn0JFCINRCwiCgbHgx4+f/5+/eAU26OGjJ3B85vyl/3sOHvl/7uJlFHGQuucvX4P1oQOsFly7efv/xu27/69cv4VovHnHnv83bt+FmoAAWC3ABUYjmSAY+hY8fvrs/9kLl/8/ff4CKkIYkGQBOWA4WPDvJwArnPdqX7xmJQAAAABJRU5ErkJggg=="},3795:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABLSURBVDhPY/hPAzBqKPXBqKGo4O79x/9v331IFP70+QtUFyrAMPTFqzf/n794TRT+9v0HVBcqoI/3aeJSmoQpNcCoodQHI9rQ//8BqzrOuTAVS+QAAAAASUVORK5CYII="},18233:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHPSURBVDhP5ZHrb9JgFMb9l1n8YOQO3cg2wybEInwwbJ1bUomX7MM0aNzELDptHF6YwuJg6XQDvIHrYAI/u/aVUJwkJvu2X/Im7Tnnec7bpxc4I86lkVFm+WYSdyjO4y+iNgKHUcf4xuvcKsV6A+PgDfPJKGPuMPObTQ7NXmn7PXu1Bj0xP8iAUY/ahorLFHpnbrCoLhAKj1vvntk0iqoQ8IeR1Jd0hGIQx42OagWW4rb41BOMc1uriGknQxn9IJeQLNHlmTmyWonyTpGsEhVGKdb1uph1Yhs1dFaWZC56xObALGquyLHVhFZzh8Vp0fON44tM8WjoYrZRU+dBJoVXiljhusIxMs/K/SzazX3UmG005ovglq6Q3RVNgW3UaVHTP6C9WCV1stkTYWpumXxFp1qtoOVuEfKZdX+U6/ce8lzb5MCwlH2cGf36xJ2ovdnlm0SKJYknZfwBUQsmeFIelZGFQWFlgUt/cjrteCbwptc4EopBHDdqVde5GpwkvbbN3laO2PSEaSBx7X6Bz7t5FFnm7tt9Me3E+WkmrcOm/fC9REZJmH9I5unXk0KP9nGbbrdrtYf5y6hP5yf6xy1e5d9Rb4vaCP5t9J+ckRH8Bvpm27DBVy7yAAAAAElFTkSuQmCC"},22118:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAAAXNSR0IArs4c6QAAAdhJREFUOE9j/Pr9OwO5gIlcjSB9jNhtfrN7woyLbxi4bDOy3EVwmo9s85/nVy88/wNW+vXrFxD17c1biM6P9x8+wzQDbvOf5/vmTT32iYFbNijU6Meh3dvufQOq5hBX9/NUvL1+x/mPDBJW4elOsqxIZiCc/frorIn7P+EJAhGrqAInKWQFCGeLWkeHqTHj1CysH42qE6iSBUn1jy8f/0K4Emb+8U6qvECv7ls59xTYOV9AoSCKajbY2Xc3d6y6+QWqkYFB3Kw81Y4Xqu7tsdnzt70Ec5iZeThYNP1y/ZWhcmBn//mG0Ank8gvBdAI5wgL8MOv+/v3y9ecXSHSAAViztJmXmYKuEh/UDw+vXoOr+HPl/EOoUhZhSV0tdV1hhGbkRPLj0rIpq+6B5fgVvJxUeP68vnzo4vWPEBHt7FxPSVQ/IyWSH3cuP4VJfnywbf2eVZthOoHCPz69/4GqFepskODbY4t3XP+JLo3g/3y8bPVZtDwEt1nY0FNbgoFBQM+nvCI1Sosdok1Ez6O4IjVOj4uBgc/N05gT1XCUjPH9y0dOHnDg3lxZs/oxAyJj/Pn85ScvDzeaw1CyJFQnKPy1bbUUdLUUFTkg6lkwdQJFcWRJ3H5HlgEA/zGvfOSgTdkAAAAASUVORK5CYII="},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);