"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[1946],{2034:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(4848),t=i(8453);const r={},l="Conducting Code Reviews with Visual Test Results",a={id:"guides/code-reviews",title:"Conducting Code Reviews with Visual Test Results",description:"Incorporating visual test results into your code review process can significantly enhance the quality and reliability of your application's user interface. This guide explains how to effectively use Applitools Eyes visual test results during code reviews, boosting confidence in UI changes and streamlining collaboration between developers and reviewers.",source:"@site/docs/guides/code-reviews.md",sourceDirName:"guides",slug:"/guides/code-reviews",permalink:"/applitools-playwright-docs/docs/guides/code-reviews",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Maintaining Visual Tests Over Time",permalink:"/applitools-playwright-docs/docs/guides/maintaining-tests"},next:{title:"Examples and Tutorials",permalink:"/applitools-playwright-docs/docs/examples-and-tutorials"}},o={},d=[{value:"The benefits of visual test results in code reviews",id:"the-benefits-of-visual-test-results-in-code-reviews",level:2},{value:"Integrating visual tests into the code review workflow",id:"integrating-visual-tests-into-the-code-review-workflow",level:2},{value:"1. Developer&#39;s role",id:"1-developers-role",level:3},{value:"Running visual tests before requesting code review",id:"running-visual-tests-before-requesting-code-review",level:4},{value:"Approving expected diffs",id:"approving-expected-diffs",level:4},{value:"Updating baselines",id:"updating-baselines",level:4},{value:"2. Automated CI pipeline",id:"2-automated-ci-pipeline",level:3},{value:"Running visual tests in CI",id:"running-visual-tests-in-ci",level:4},{value:"Providing test results in the PR",id:"providing-test-results-in-the-pr",level:4},{value:"3. Reviewer&#39;s role",id:"3-reviewers-role",level:3},{value:"Accessing visual test results",id:"accessing-visual-test-results",level:4},{value:"Validating approved changes",id:"validating-approved-changes",level:4},{value:"Assessing unapproved diffs",id:"assessing-unapproved-diffs",level:4},{value:"4. Merging and baseline updates",id:"4-merging-and-baseline-updates",level:3},{value:"Merging the PR",id:"merging-the-pr",level:4},{value:"Baseline merging",id:"baseline-merging",level:4},{value:"Best practices for effective code reviews with visual tests",id:"best-practices-for-effective-code-reviews-with-visual-tests",level:2},{value:"Communicate clearly",id:"communicate-clearly",level:3},{value:"Establish review guidelines",id:"establish-review-guidelines",level:3},{value:"Use collaboration tools",id:"use-collaboration-tools",level:3},{value:"Automate where possible",id:"automate-where-possible",level:3}];function c(e){const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"conducting-code-reviews-with-visual-test-results",children:"Conducting Code Reviews with Visual Test Results"})}),"\n",(0,n.jsx)(s.p,{children:"Incorporating visual test results into your code review process can significantly enhance the quality and reliability of your application's user interface. This guide explains how to effectively use Applitools Eyes visual test results during code reviews, boosting confidence in UI changes and streamlining collaboration between developers and reviewers."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"the-benefits-of-visual-test-results-in-code-reviews",children:"The benefits of visual test results in code reviews"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Increased confidence"}),": Visual tests confirm that UI changes are intentional and that no unexpected regressions have occurred."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Early detection"}),": Catch visual defects before they reach production, reducing the cost and effort of fixing issues later."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Improved communication"}),": Visual diffs provide clear, tangible evidence of changes, facilitating better discussions between team members."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Efficient reviews"}),": Quickly assess the impact of code changes on the UI without manually running the application."]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"integrating-visual-tests-into-the-code-review-workflow",children:"Integrating visual tests into the code review workflow"}),"\n",(0,n.jsx)(s.h3,{id:"1-developers-role",children:"1. Developer's role"}),"\n",(0,n.jsx)(s.h4,{id:"running-visual-tests-before-requesting-code-review",children:"Running visual tests before requesting code review"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Review test results"}),": Use the Applitools Dashboard to examine any visual differences detected."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"approving-expected-diffs",children:"Approving expected diffs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Intentional changes"}),": If the visual differences align with the intended UI updates, approve them in the Applitools Dashboard.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Add remarks"}),": Provide context or explanations for the changes in the dashboard remarks."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Unintentional changes"}),": If unexpected differences are found, fix the code or update the tests to prevent unintended changes."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"updating-baselines",children:"Updating baselines"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"After approval"}),": Once changes are approved, the baselines are updated to reflect the new UI state."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Branch management"}),": Ensure that baselines are correctly managed for feature branches to prevent conflicts."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"2-automated-ci-pipeline",children:"2. Automated CI pipeline"}),"\n",(0,n.jsx)(s.h4,{id:"running-visual-tests-in-ci",children:"Running visual tests in CI"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Consistency"}),": The CI environment replicates tests to ensure consistency across different machines."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Integration with Applitools"}),": Visual tests run as part of the CI process, and results are sent to the Applitools Dashboard."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"providing-test-results-in-the-pr",children:"Providing test results in the PR"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Status checks"}),": Configure your CI system to report the status of visual tests in the PR."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Links to dashboard"}),": Include direct links to the relevant test results in the Applitools Dashboard for easy access."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"3-reviewers-role",children:"3. Reviewer's role"}),"\n",(0,n.jsx)(s.h4,{id:"accessing-visual-test-results",children:"Accessing visual test results"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Dashboard links"}),": Use the provided links in the PR to access the visual test results."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Reviewing diffs"}),": Examine the visual differences between the baseline and the new screenshots."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"validating-approved-changes",children:"Validating approved changes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Agreement"}),": Ensure that the approved changes align with the expected UI updates and design specifications."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Feedback"}),": If discrepancies are found, communicate with the developer for clarification or request changes."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"assessing-unapproved-diffs",children:"Assessing unapproved diffs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Unresolved differences"}),": If any visual differences are not yet approved, discuss with the developer to determine if they are intentional."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Rejection"}),": If necessary, reject unintended changes in the dashboard to prompt further action."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"4-merging-and-baseline-updates",children:"4. Merging and baseline updates"}),"\n",(0,n.jsx)(s.h4,{id:"merging-the-pr",children:"Merging the PR"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Approval"}),": Once the code and visual changes are reviewed and approved, merge the PR into the main branch."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"CI integration"}),": The CI pipeline runs again to ensure all tests pass in the main branch environment."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"baseline-merging",children:"Baseline merging"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Automatic baseline updates"}),": Applitools Eyes automatically merges baselines from feature branches into the main branch upon merging the PR."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Consistency across branches"}),": This ensures that future tests run against the updated baselines, maintaining consistency."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"best-practices-for-effective-code-reviews-with-visual-tests",children:"Best practices for effective code reviews with visual tests"}),"\n",(0,n.jsx)(s.h3,{id:"communicate-clearly",children:"Communicate clearly"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Remarks and issues"}),": Use the Applitools Dashboard to add annotations on visual diffs for better understanding."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Provide context"}),": Explain the purpose of UI changes in the PR description."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"establish-review-guidelines",children:"Establish review guidelines"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Define expectations"}),": Set criteria for acceptable visual changes."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Consistency with design"}),": Ensure changes align with design guidelines and branding."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"use-collaboration-tools",children:"Use collaboration tools"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Integrations"}),": Utilize integrations with tools like Slack or Jira to streamline communication."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Shared access"}),": Ensure all team members have access to the Applitools Dashboard."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"automate-where-possible",children:"Automate where possible"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"CI/CD pipelines"}),": Automate visual tests to run on every PR and provide immediate feedback."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Notifications"}),": Set up alerts for test failures or unresolved differences."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>a});var n=i(6540);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);