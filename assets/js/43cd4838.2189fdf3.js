"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[8184],{5146:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=i(4848),t=i(8453);const a={},l="Core Concepts",o={id:"core-concepts",title:"Core Concepts",description:"Understanding the core concepts of Applitools Eyes will help you make the most of its powerful visual testing capabilities in your Playwright tests. This section covers the fundamental principles and features that enable Applitools to provide reliable, efficient, and intelligent visual testing.",source:"@site/docs/core-concepts.md",sourceDirName:".",slug:"/core-concepts",permalink:"/applitools-playwright-docs/docs/core-concepts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Integration with Playwright",permalink:"/applitools-playwright-docs/docs/integration-with-playwright"},next:{title:"Advanced Usage",permalink:"/applitools-playwright-docs/docs/advanced-usage"}},r={},c=[{value:"Applitools Visual AI and advanced match levels",id:"applitools-visual-ai-and-advanced-match-levels",level:2},{value:"Advanced image comparison algorithms",id:"advanced-image-comparison-algorithms",level:3},{value:"Superiority over pixel-to-pixel matching",id:"superiority-over-pixel-to-pixel-matching",level:3},{value:"Baseline images and management",id:"baseline-images-and-management",level:2},{value:"Automatic baseline management",id:"automatic-baseline-management",level:3},{value:"Baseline creation and updating",id:"baseline-creation-and-updating",level:3},{value:"Preventing baseline collisions with test naming strategies",id:"preventing-baseline-collisions-with-test-naming-strategies",level:3},{value:"Customizing test names",id:"customizing-test-names",level:4},{value:"Match levels for tailored comparisons",id:"match-levels-for-tailored-comparisons",level:2},{value:"Available match levels",id:"available-match-levels",level:3},{value:"Choosing the appropriate match level",id:"choosing-the-appropriate-match-level",level:3},{value:"Setting match levels",id:"setting-match-levels",level:3},{value:"Exception handling",id:"exception-handling",level:2},{value:"Default behavior",id:"default-behavior",level:3},{value:"Configuring <code>failTestsOnDiff</code>",id:"configuring-failtestsondiff",level:3},{value:"Console output",id:"console-output",level:3},{value:"Test and batch naming",id:"test-and-batch-naming",level:2},{value:"Test naming",id:"test-naming",level:3},{value:"Customizing test names",id:"customizing-test-names-1",level:4},{value:"Batch naming",id:"batch-naming",level:3},{value:"Default batch naming",id:"default-batch-naming",level:4},{value:"Customizing batch names",id:"customizing-batch-names",level:4},{value:"Branching and merging",id:"branching-and-merging",level:2},{value:"Pull request workflow and baseline management",id:"pull-request-workflow-and-baseline-management",level:3},{value:"Handling a pull request with visual differences",id:"handling-a-pull-request-with-visual-differences",level:4},{value:"Applitools configuration in Playwright",id:"applitools-configuration-in-playwright",level:2},{value:"Configuration settings",id:"configuration-settings",level:3},{value:"<code>eyesConfig</code>",id:"eyesconfig",level:3},{value:"Overriding settings per test",id:"overriding-settings-per-test",level:3},{value:"Complete configuration example",id:"complete-configuration-example",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"core-concepts",children:"Core Concepts"})}),"\n",(0,s.jsx)(n.p,{children:"Understanding the core concepts of Applitools Eyes will help you make the most of its powerful visual testing capabilities in your Playwright tests. This section covers the fundamental principles and features that enable Applitools to provide reliable, efficient, and intelligent visual testing."}),"\n",(0,s.jsx)(n.h2,{id:"applitools-visual-ai-and-advanced-match-levels",children:"Applitools Visual AI and advanced match levels"}),"\n",(0,s.jsx)(n.p,{children:"Traditional visual testing tools often rely on pixel-to-pixel comparisons, which can result in numerous false positives due to minor rendering differences. These can be caused by factors such as anti-aliasing, font smoothing, or subtle layout shifts, making tests brittle and time-consuming to maintain. Such methods struggle to scale and require constant adjustment of diff thresholds, which are difficult to configure and maintain reliably."}),"\n",(0,s.jsx)(n.h3,{id:"advanced-image-comparison-algorithms",children:"Advanced image comparison algorithms"}),"\n",(0,s.jsx)(n.p,{children:"Applitools Visual AI overcomes these challenges by utilizing advanced image comparison algorithms that have been developed and refined over more than a decade. These algorithms simulate human vision, allowing Applitools Eyes to detect only meaningful visual differences that could impact the user experience. The key match levels provided by Applitools are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Strict (Default)"}),": Detects any meaningful differences that are visible to the human eye. Ideal for static pages where any change is significant."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Layout"}),": Ignores content changes but detects shifts in layout or structure. Useful for pages with dynamic content or responsive designs, and for localization testing where content varies but layout should remain consistent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ignore Colors"}),": Ignores color differences but detects changes in content and layout. Helpful when color variations are expected or irrelevant, such as in applications with theming support."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content"}),": Ignores styling and layout differences but detects changes in text content. Suitable for applications where text content is critical, but style and layout may vary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic (New!)"}),": Designed to handle dynamic content gracefully by automatically detecting and suppressing diffs due to dynamic data such as emails, dates, credit card numbers, etc."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These match levels can be applied to entire pages or mixed and matched on different regions of the page, giving you granular control over your visual comparisons."}),"\n",(0,s.jsx)(n.h3,{id:"superiority-over-pixel-to-pixel-matching",children:"Superiority over pixel-to-pixel matching"}),"\n",(0,s.jsx)(n.p,{children:"By leveraging Visual AI and these advanced match levels, Applitools Eyes addresses the limitations of traditional pixel-to-pixel comparison:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reduced false positives"}),": By ignoring insignificant differences that are invisible to the human eye, Visual AI minimizes unnecessary test failures caused by minor rendering variations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhanced test stability"}),": Tests are less brittle and more resilient to changes in rendering environments, making them stable across different browsers, devices, and operating systems."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Improved scalability"}),": There's no need to configure diff thresholds or constantly adjust your tests to account for environmental differences, allowing your test suite to scale efficiently."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient maintenance"}),": Visual AI reduces the maintenance burden by eliminating flakiness, and when intentional changes occur, you can approve them once in the Applitools Dashboard, propagating the acceptance across all relevant tests and checkpoints."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contextual understanding"}),": Applitools Eyes understands the content and structure of your application's UI, focusing on perceptible changes that a human user would notice, rather than pixel-level differences."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By adopting Applitools Visual AI, you can trust that your visual tests are highlighting real issues that could affect your users, allowing you to focus on delivering a high-quality user experience without being bogged down by false positives or maintenance overhead."}),"\n",(0,s.jsx)(n.h2,{id:"baseline-images-and-management",children:"Baseline images and management"}),"\n",(0,s.jsx)(n.p,{children:"A core concept in Applitools Eyes is the use of baselines, which represent the expected visual appearance of your application at specific points in time."}),"\n",(0,s.jsx)(n.h3,{id:"automatic-baseline-management",children:"Automatic baseline management"}),"\n",(0,s.jsx)(n.p,{children:"When you run tests with Applitools Eyes, the SDK automatically detects the baseline signature based on factors such as the application name, test name, browser, operating system, viewport size, and branch. This ensures that the correct baseline is used for each specific test scenario."}),"\n",(0,s.jsx)(n.p,{children:"The baseline management features include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Baseline fallback behavior"}),": If an exact baseline match isn't found for a particular environment, Applitools can intelligently fall back to the most appropriate baseline, ensuring continuity in your testing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Alignment with checkpoint images"}),": Applitools automatically detects new or missing checkpoints, aligning them with the appropriate baselines and highlighting any discrepancies."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"baseline-creation-and-updating",children:"Baseline creation and updating"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"First run (baseline creation)"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When you run a test for the first time, Applitools Eyes captures baseline images for each visual checkpoint."}),"\n",(0,s.jsx)(n.li,{children:"These baselines are stored securely in the Applitools cloud, eliminating the need to manage image files locally or within your code repository."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Subsequent runs (visual comparison)"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In subsequent test runs, Applitools Eyes captures new screenshots and compares them to the existing baselines."}),"\n",(0,s.jsx)(n.li,{children:"If differences are detected, they are highlighted in the test results for review."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Updating baselines"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If changes are intentional (e.g., a UI redesign), you can accept the new images in the Applitools Dashboard."}),"\n",(0,s.jsx)(n.li,{children:"Accepted images become the new baselines for future comparisons."}),"\n",(0,s.jsx)(n.li,{children:"Automated test maintenance allows you to accept changes once and propagate them across all relevant tests, devices, and browsers, saving time and effort."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By automatically managing baselines, Applitools Eyes simplifies the maintenance of your visual tests, ensuring accurate comparisons without the overhead of manual baseline management."}),"\n",(0,s.jsx)(n.h3,{id:"preventing-baseline-collisions-with-test-naming-strategies",children:"Preventing baseline collisions with test naming strategies"}),"\n",(0,s.jsx)(n.p,{children:"To ensure that each test has its own unique baseline, Applitools Eyes uses a combination of the test name and application name. The SDK automatically includes context such as the full test path in Playwright, which helps prevent collisions when tests have the same name in different suites or contexts."}),"\n",(0,s.jsx)(n.h4,{id:"customizing-test-names",children:"Customizing test names"}),"\n",(0,s.jsx)(n.p,{children:"You can customize test names to suit your organizational needs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"useFullTestName"})," flag to control how test names are generated."]}),"\n",(0,s.jsx)(n.li,{children:"Specify custom names directly in your tests or configuration."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// playwright.config.ts\nuse: {\n  eyesConfig: {\n    testName: (testInfo: TestInfo) => `My test ${testInfo.title}`\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"By carefully managing test names and leveraging the SDK's automatic baseline signature detection, you can maintain organized baselines and avoid unintended overlaps."}),"\n",(0,s.jsx)(n.h2,{id:"match-levels-for-tailored-comparisons",children:"Match levels for tailored comparisons"}),"\n",(0,s.jsx)(n.p,{children:"Match levels determine how strictly Applitools Eyes compares new screenshots to the baselines, allowing you to balance between catching important differences and ignoring insignificant changes."}),"\n",(0,s.jsx)(n.h3,{id:"available-match-levels",children:"Available match levels"}),"\n",(0,s.jsx)(n.p,{children:"As previously mentioned, Applitools offers several match levels:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Strict (Default)"}),": Detects any meaningful differences that are visible to the human eye. Ideal for static pages where any change is significant."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Layout"}),": Ignores content changes but detects shifts in layout or structure. Useful for testing highly dynamic pages and localization, where content varies but layout should remain consistent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ignore Colors"}),": Ignores color differences but detects changes in content and layout. Helpful when color variations are expected or irrelevant, such as in applications with theming support."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content"}),": Ignores styling and layout differences but detects changes in text content. Suitable for applications where text content is critical, but style and layout may vary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic (New!)"}),": Designed to handle dynamic content gracefully by automatically detecting and suppressing diffs due to dynamic data such as emails, dates, credit card numbers, etc."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These match levels can be applied to entire pages or mixed and matched on different regions of the page, giving you granular control over your visual comparisons."}),"\n",(0,s.jsx)(n.h3,{id:"choosing-the-appropriate-match-level",children:"Choosing the appropriate match level"}),"\n",(0,s.jsx)(n.p,{children:"Selecting the right match level depends on the nature of your application and the specific page or component you're testing."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic content"}),": Use ",(0,s.jsx)(n.strong,{children:"Layout"})," or ",(0,s.jsx)(n.strong,{children:"Content"})," match levels to avoid false positives due to changing text or images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Brand consistency"}),": Use ",(0,s.jsx)(n.strong,{children:"Strict"})," match level to ensure that styling and branding elements remain consistent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Theming support"}),": Use ",(0,s.jsx)(n.strong,{children:"Ignore Colors"})," if your application supports different themes or color schemes."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"setting-match-levels",children:"Setting match levels"}),"\n",(0,s.jsx)(n.p,{children:"You can set the match level globally in your configuration or override it per test or per checkpoint."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Global setting example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// playwright.config.ts\nuse: {\n  eyesConfig: {\n    matchLevel: 'Dynamic',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Per Test Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"test('Dynamic content test', async ({ page, eyes }) => {\n  await page.goto('https://example.com/dynamic');\n\n  // Visual check with specific match level\n  await eyes.check('Homepage', {\n    fully: true,\n    matchLevel: 'Dynamic',\n  });\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"By choosing the appropriate match level, you can effectively manage dynamic content and focus on the changes that matter most."}),"\n",(0,s.jsx)(n.h2,{id:"exception-handling",children:"Exception handling"}),"\n",(0,s.jsx)(n.h3,{id:"default-behavior",children:"Default behavior"}),"\n",(0,s.jsxs)(n.p,{children:["By default, Applitools Eyes does ",(0,s.jsx)(n.strong,{children:"not throw exceptions"})," when visual differences are detected. This allows your tests to continue running, and you can review any visual discrepancies in the Applitools Dashboard."]}),"\n",(0,s.jsxs)(n.h3,{id:"configuring-failtestsondiff",children:["Configuring ",(0,s.jsx)(n.code,{children:"failTestsOnDiff"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you prefer your tests to fail when visual differences are detected, you can configure the ",(0,s.jsx)(n.code,{children:"failTestsOnDiff"})," setting."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Available options:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"false"})," (Default): Tests do not fail on visual differences."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'afterEach'"}),": Throws an exception after each test that has visual differences."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'afterAll'"}),": Throws an exception after all tests have run if any visual differences are detected."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// playwright.config.ts\nuse: {\n  eyesConfig: {\n    failTestsOnDiff: 'afterEach',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"console-output",children:"Console output"}),"\n",(0,s.jsx)(n.p,{children:"Regardless of the exception handling configuration, Applitools Eyes provides detailed console output for any visual differences detected during the tests. This ensures you are immediately aware of any issues."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example console output:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Visual differences detected in test 'My first visual test':\n- View the differences here: [Applitools Dashboard Link]\n"})}),"\n",(0,s.jsx)(n.p,{children:"By configuring exception handling according to your workflow, you can balance between continuous test execution and immediate failure on visual discrepancies."}),"\n",(0,s.jsx)(n.h2,{id:"test-and-batch-naming",children:"Test and batch naming"}),"\n",(0,s.jsx)(n.p,{children:"Proper naming of tests and batches helps you organize and manage your visual tests effectively."}),"\n",(0,s.jsx)(n.h3,{id:"test-naming",children:"Test naming"}),"\n",(0,s.jsxs)(n.p,{children:["By default, Applitools Eyes uses the full test path in Playwright as the test name. This includes any ",(0,s.jsx)(n.code,{children:"describe"})," blocks and the test title."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example test name:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Login Tests > Successful Login"})}),"\n",(0,s.jsx)(n.h4,{id:"customizing-test-names-1",children:"Customizing test names"}),"\n",(0,s.jsxs)(n.p,{children:["You can customize test names by setting the ",(0,s.jsx)(n.code,{children:"testName"})," option in your test or by adjusting the ",(0,s.jsx)(n.code,{children:"useFullTestName"})," flag in your configuration."]}),"\n",(0,s.jsx)(n.h3,{id:"batch-naming",children:"Batch naming"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"batch"})," groups related tests together, making it easier to manage and review results in the Applitools Dashboard."]}),"\n",(0,s.jsx)(n.h4,{id:"default-batch-naming",children:"Default batch naming"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"In source control"}),": ",(0,s.jsx)(n.code,{children:"${appName} - ${gitSha} - ${branch}"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outside source control"}),": ",(0,s.jsx)(n.code,{children:"${appName}"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"customizing-batch-names",children:"Customizing batch names"}),"\n",(0,s.jsx)(n.p,{children:"You can specify a custom batch name in your configuration or per test run."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Configuration example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// playwright.config.ts\nuse: {\n  eyesConfig: {\n    batch: { name: 'Release 1.0 Tests' },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"By organizing tests into batches and using meaningful names, you can efficiently navigate and analyze your visual test results."}),"\n",(0,s.jsx)(n.h2,{id:"branching-and-merging",children:"Branching and merging"}),"\n",(0,s.jsx)(n.p,{children:"Applitools supports branching and merging to align with your development workflow, facilitating collaboration and maintaining consistency across your application."}),"\n",(0,s.jsx)(n.h3,{id:"pull-request-workflow-and-baseline-management",children:"Pull request workflow and baseline management"}),"\n",(0,s.jsx)(n.p,{children:"When working with feature branches and pull requests, Applitools Eyes facilitates an effective workflow:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Branch-specific baselines"}),": Each branch can maintain its own set of baselines, allowing you to develop and test features in isolation without impacting the main baseline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Baseline continuity"}),": When you create a new branch, Applitools automatically creates a copy of the baseline from the parent branch. This ensures consistency and reduces the need to re-establish baselines."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Automatic merging"}),": Upon merging a feature branch into the main branch, Applitools can automatically merge the baselines, integrating any accepted changes from the feature branch into the main baseline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conflict resolution"}),": If there are conflicting changes in the baselines (e.g., the same element was modified differently in both branches), Applitools provides tools to resolve these conflicts, allowing you to choose which changes to keep."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"handling-a-pull-request-with-visual-differences",children:"Handling a pull request with visual differences"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Develop on a feature branch"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new branch in your version control system."}),"\n",(0,s.jsx)(n.li,{children:"Applitools Eyes automatically uses this branch name to manage baselines."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Run your visual tests"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Any visual changes are compared against the baseline for the branch."}),"\n",(0,s.jsx)(n.li,{children:"Review and accept intentional changes in the Applitools Dashboard."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create a pull request"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Applitools can integrate with your CI/CD pipeline to run tests on pull requests."}),"\n",(0,s.jsx)(n.li,{children:"Visual test results can be linked in the pull request for reviewers to assess."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Review and resolve conflicts"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If there are conflicts between the feature branch and the main branch baselines, use the Applitools Dashboard to resolve them."}),"\n",(0,s.jsx)(n.li,{children:"Decide whether to accept changes from the feature branch, main branch, or a combination."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Merge the pull request"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Baselines are merged according to your resolutions."}),"\n",(0,s.jsx)(n.li,{children:"The main branch baseline is updated to include the accepted changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By supporting branching and merging workflows, Applitools Eyes ensures that your visual tests align with your development processes, facilitating collaboration and maintaining consistency across your application."}),"\n",(0,s.jsx)(n.h2,{id:"applitools-configuration-in-playwright",children:"Applitools configuration in Playwright"}),"\n",(0,s.jsx)(n.p,{children:"Applitools Eyes integrates with Playwright's configuration system, allowing you to customize settings globally or per test."}),"\n",(0,s.jsx)(n.h3,{id:"configuration-settings",children:"Configuration settings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Global Settings"}),": Use ",(0,s.jsx)(n.code,{children:"eyesConfig"})," in ",(0,s.jsx)(n.code,{children:"playwright.config.ts"})," to apply settings across all tests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Per Test Settings"}),": Override settings within individual tests as needed."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"eyesconfig",children:(0,s.jsx)(n.code,{children:"eyesConfig"})}),"\n",(0,s.jsx)(n.p,{children:"All available configuration options, apply to the test runners and to individual tests or checkpoints."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Available options:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"matchLevel"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"failTestsOnDiff"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"appName"})}),"\n",(0,s.jsxs)(n.li,{children:["full list in the ",(0,s.jsx)(n.a,{href:"/applitools-playwright-docs/docs/api/overview",children:"API section"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// playwright.config.ts\nexport default defineConfig<EyesFixture>({\n  use: {\n    eyesConfig: {\n      appName: 'My App',\n      failTestsOnDiff: 'afterEach',\n      sendDom: true,\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"overriding-settings-per-test",children:"Overriding settings per test"}),"\n",(0,s.jsx)(n.p,{children:"You can override any setting within a test using the options parameter."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"test('Custom settings test', async ({ page, eyes }) => {\n  await page.goto('https://example.com');\n\n  await eyes.check('Homepage', {\n    fully: true,\n    matchLevel: 'Strict',\n    ignoreRegions: [page.locator('.dynamic-content')],\n    useDom: false,\n  });\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"complete-configuration-example",children:"Complete configuration example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// playwright.config.ts\nexport default defineConfig<EyesFixture>({\n  // Other Playwright configurations\n  use: {\n    eyesConfig: {\n      failTestsOnDiff: 'afterEach',\n      batch: { name: 'Release 1.0 Tests' },\n      testName: (testInfo: TestInfo) => `My test ${testInfo.title}`,\n\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"By utilizing these configuration options, you can tailor Applitools Eyes to fit your testing needs and workflows."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);