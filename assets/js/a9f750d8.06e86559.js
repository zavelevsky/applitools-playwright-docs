"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[8199],{983:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),t=n(8453);const r={},l="Applitools Dashboard",a={id:"applitools-dashboard",title:"Applitools Dashboard",description:"The Applitools Dashboard is a powerful web-based tool that allows you to view, analyze, and manage your visual test results. It provides an intuitive interface for reviewing visual differences, updating baselines, collaborating with team members, and gaining insights into your application's UI across different versions and environments.",source:"@site/docs/applitools-dashboard.md",sourceDirName:".",slug:"/applitools-dashboard",permalink:"/applitools-playwright-docs/docs/applitools-dashboard",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Advanced Usage",permalink:"/applitools-playwright-docs/docs/advanced-usage"},next:{title:"CI/CD Integration",permalink:"/applitools-playwright-docs/docs/ci-cd-integration"}},o={},c=[{value:"Accessing the Applitools Dashboard",id:"accessing-the-applitools-dashboard",level:2},{value:"Step 1: Log in",id:"step-1-log-in",level:3},{value:"Step 2: Acquiring your Applitools API key",id:"step-2-acquiring-your-applitools-api-key",level:3},{value:"How to obtain your API key:",id:"how-to-obtain-your-api-key",level:4},{value:"Navigating the dashboard interface",id:"navigating-the-dashboard-interface",level:2},{value:"Test results page",id:"test-results-page",level:3},{value:"Batch details",id:"batch-details",level:3},{value:"Test details and steps",id:"test-details-and-steps",level:3},{value:"Analyzing test results and visual differences",id:"analyzing-test-results-and-visual-differences",level:2},{value:"Viewing visual diffs",id:"viewing-visual-diffs",level:3},{value:"Interpreting differences",id:"interpreting-differences",level:3},{value:"Root cause analysis",id:"root-cause-analysis",level:3},{value:"Managing baselines and approving changes",id:"managing-baselines-and-approving-changes",level:2},{value:"Accepting or rejecting changes",id:"accepting-or-rejecting-changes",level:3},{value:"How to accept changes:",id:"how-to-accept-changes",level:4},{value:"How to reject changes:",id:"how-to-reject-changes",level:4},{value:"Saving decisions",id:"saving-decisions",level:3},{value:"Collaborating with your team",id:"collaborating-with-your-team",level:2},{value:"Sharing test results",id:"sharing-test-results",level:3},{value:"Adding remarks and bugs",id:"adding-remarks-and-bugs",level:3},{value:"Integrations",id:"integrations",level:3},{value:"Utilizing advanced features",id:"utilizing-advanced-features",level:2},{value:"Batch management",id:"batch-management",level:3},{value:"Test configuration overrides",id:"test-configuration-overrides",level:3},{value:"Accessibility testing",id:"accessibility-testing",level:3},{value:"Insights and analytics",id:"insights-and-analytics",level:3},{value:"Best practices",id:"best-practices",level:2}];function d(e){const s={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"applitools-dashboard",children:"Applitools Dashboard"})}),"\n",(0,i.jsx)(s.p,{children:"The Applitools Dashboard is a powerful web-based tool that allows you to view, analyze, and manage your visual test results. It provides an intuitive interface for reviewing visual differences, updating baselines, collaborating with team members, and gaining insights into your application's UI across different versions and environments."}),"\n",(0,i.jsx)(s.p,{children:"In this section, we'll explore how to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Access the Applitools dashboard"}),"\n",(0,i.jsx)(s.li,{children:"Acquire your Applitools API key"}),"\n",(0,i.jsx)(s.li,{children:"Navigate and understand the dashboard interface"}),"\n",(0,i.jsx)(s.li,{children:"Analyze test results and visual differences"}),"\n",(0,i.jsx)(s.li,{children:"Manage baselines and approve changes"}),"\n",(0,i.jsx)(s.li,{children:"Collaborate with your team"}),"\n",(0,i.jsx)(s.li,{children:"Utilize advanced features like root cause analysis"}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"accessing-the-applitools-dashboard",children:"Accessing the Applitools Dashboard"}),"\n",(0,i.jsx)(s.h3,{id:"step-1-log-in",children:"Step 1: Log in"}),"\n",(0,i.jsx)(s.p,{children:"To access the dashboard:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Navigate to the ",(0,i.jsx)(s.a,{href:"https://eyes.applitools.com/",children:"Applitools Dashboard"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Log in with your Applitools account credentials.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.em,{children:"If you don't have an account yet, you can sign up for a free account."})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"step-2-acquiring-your-applitools-api-key",children:"Step 2: Acquiring your Applitools API key"}),"\n",(0,i.jsx)(s.p,{children:"Your API key is essential for connecting your tests to the Applitools Eyes cloud service."}),"\n",(0,i.jsx)(s.h4,{id:"how-to-obtain-your-api-key",children:"How to obtain your API key:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Once logged in, click on your account name or avatar in the top-right corner."}),"\n",(0,i.jsxs)(s.li,{children:["Select ",(0,i.jsx)(s.strong,{children:'"My API Key"'})," from the dropdown menu.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"My API Key Location"}),"]"]})]}),"\n",(0,i.jsxs)(s.li,{children:["Copy the displayed API key.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Copy API Key"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Use this API key in your project by setting it as an environment variable or entering it when prompted during the CLI setup."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"export APPLITOOLS_API_KEY='your_api_key_here'\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"navigating-the-dashboard-interface",children:"Navigating the dashboard interface"}),"\n",(0,i.jsx)(s.p,{children:"The Applitools Dashboard consists of several key components:"}),"\n",(0,i.jsx)(s.h3,{id:"test-results-page",children:"Test results page"}),"\n",(0,i.jsxs)(s.p,{children:["After logging in, you'll see the ",(0,i.jsx)(s.strong,{children:"Test Results"})," page, which lists all your recent test runs."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Batch List"}),": A list of test batches, grouped by batch name."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Filter and Search"}),": Tools to filter tests by date, application name, batch name, or status.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Test Results Page Overview"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"batch-details",children:"Batch details"}),"\n",(0,i.jsxs)(s.p,{children:["Clicking on a batch opens the ",(0,i.jsx)(s.strong,{children:"Batch Details"})," view, showing individual tests within that batch."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Test List"}),": A list of tests with their statuses (Passed, Unresolved, Failed)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Batch Information"}),": Details like batch name, start time, and duration.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Batch Details View"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"test-details-and-steps",children:"Test details and steps"}),"\n",(0,i.jsxs)(s.p,{children:["Selecting a test displays the ",(0,i.jsx)(s.strong,{children:"Test Details"}),", where you can view each step and its comparison results."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Step List"}),": Screenshots captured at each visual checkpoint."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Baseline and Checkpoint Images"}),": Side-by-side comparison of the baseline and the new screenshot."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Differences Overlay"}),": Highlighted areas where visual differences were detected.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Test Details and Steps"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"analyzing-test-results-and-visual-differences",children:"Analyzing test results and visual differences"}),"\n",(0,i.jsx)(s.h3,{id:"viewing-visual-diffs",children:"Viewing visual diffs"}),"\n",(0,i.jsx)(s.p,{children:"For steps with visual differences:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Click on the step to open the comparison view."}),"\n",(0,i.jsxs)(s.li,{children:["Use the toolbar to switch between different comparison modes:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Side-by-Side"}),": Displays baseline and checkpoint images next to each other."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Toggle"}),": Quickly switch between images to spot changes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Visual Comparison Modes"}),"]"]})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"interpreting-differences",children:"Interpreting differences"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Highlighted Areas"}),": Differences are marked with colored overlays."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Ignore Regions"}),": Areas you specified to ignore are indicated."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"root-cause-analysis",children:"Root cause analysis"}),"\n",(0,i.jsxs)(s.p,{children:["For advanced debugging, use the ",(0,i.jsx)(s.strong,{children:"Root Cause Analysis"})," feature:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Click on the ",(0,i.jsx)(s.strong,{children:'"Root Cause"'})," button (represented by a brackets icon)."]}),"\n",(0,i.jsx)(s.li,{children:"View differences in the underlying DOM and CSS."}),"\n",(0,i.jsxs)(s.li,{children:["Identify specific code changes that led to visual differences.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Root Cause Analysis View"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"managing-baselines-and-approving-changes",children:"Managing baselines and approving changes"}),"\n",(0,i.jsx)(s.h3,{id:"accepting-or-rejecting-changes",children:"Accepting or rejecting changes"}),"\n",(0,i.jsx)(s.p,{children:"For each test step with differences:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Accept (Approve)"}),": Confirms the changes are intentional, updating the baseline."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Reject"}),": Marks the differences as unintended, indicating a potential bug.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Accept or Reject Changes Buttons"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"how-to-accept-changes",children:"How to accept changes:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Click the ",(0,i.jsx)(s.strong,{children:'"Thumbs Up"'})," icon to accept the changes."]}),"\n",(0,i.jsx)(s.li,{children:"Optionally, add a remark explaining the acceptance."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"how-to-reject-changes",children:"How to reject changes:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Click the ",(0,i.jsx)(s.strong,{children:'"Thumbs Down"'})," icon to reject the changes."]}),"\n",(0,i.jsx)(s.li,{children:"Optionally, add a bug detailing the issue."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"saving-decisions",children:"Saving decisions"}),"\n",(0,i.jsx)(s.p,{children:"After reviewing all differences:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Click on the ",(0,i.jsx)(s.strong,{children:'"Save"'})," button to apply your decisions."]}),"\n",(0,i.jsxs)(s.li,{children:["The baseline images will be updated accordingly for future test runs.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Save Decisions Button"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"collaborating-with-your-team",children:"Collaborating with your team"}),"\n",(0,i.jsx)(s.h3,{id:"sharing-test-results",children:"Sharing test results"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Direct Links"}),": Share URLs to specific tests or steps with team members."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"adding-remarks-and-bugs",children:"Adding remarks and bugs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Remarks"}),": Add remarks on specific steps or differences to communicate with your team."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Bugs"}),": Use tools to highlight areas of concern on the screenshots.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Remarks and Bugs Interface"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"integrations",children:"Integrations"}),"\n",(0,i.jsx)(s.p,{children:"Applitools integrates with various tools to enhance collaboration:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Jira"}),": Create Jira issues directly from the dashboard."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Slack"}),": Receive notifications and updates in Slack channels."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"GitHub/GitLab"}),": Link test results to pull requests."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"utilizing-advanced-features",children:"Utilizing advanced features"}),"\n",(0,i.jsx)(s.h3,{id:"batch-management",children:"Batch management"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Batch grouping"}),": Organize tests into batches for better management."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Batch comparison"}),": Compare entire batches to identify differences across test runs.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Batch Management Interface"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"test-configuration-overrides",children:"Test configuration overrides"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Modify test configurations directly from the dashboard for subsequent runs."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"accessibility-testing",children:"Accessibility testing"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Leverage Applitools to perform accessibility checks alongside visual testing."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"insights-and-analytics",children:"Insights and analytics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Access metrics and trends over time."}),"\n",(0,i.jsxs)(s.li,{children:["Identify patterns in test failures or UI changes.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Placeholder for Screenshot: [",(0,i.jsx)(s.strong,{children:"Insights and Analytics Dashboard"}),"]"]})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Regular reviews"}),": Schedule periodic reviews of test results to maintain baseline accuracy."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Collaborative workflow"}),": Encourage team members to participate in reviewing and approving changes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Baseline maintenance"}),": Update baselines thoughtfully to prevent masking unintended changes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Use descriptive names"}),": Name your tests and batches meaningfully to simplify navigation."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var i=n(6540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);