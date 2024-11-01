"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[5493],{786:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=s(4848),i=s(8453);const a={},o="Integration with Playwright",l={id:"integration-with-playwright",title:"Integration with Playwright",description:"In this section, we'll explore how to seamlessly integrate Applitools Eyes into your Playwright tests. You'll learn how to use the SDK within your tests, customize configurations, and work with Page Object Models (POMs) to enhance your visual testing strategy.",source:"@site/docs/integration-with-playwright.md",sourceDirName:".",slug:"/integration-with-playwright",permalink:"/applitools-playwright-docs/docs/integration-with-playwright",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/applitools-playwright-docs/docs/introduction"},next:{title:"Core Concepts",permalink:"/applitools-playwright-docs/docs/core-concepts"}},r={},c=[{value:"Using the SDK with Playwright tests",id:"using-the-sdk-with-playwright-tests",level:2},{value:"Importing Applitools modules",id:"importing-applitools-modules",level:3},{value:"Accessing the <code>eyes</code> object",id:"accessing-the-eyes-object",level:4},{value:"Visual checkpoints",id:"visual-checkpoints",level:3},{value:"Using <code>eyes.check()</code>",id:"using-eyescheck",level:4},{value:"Best practices",id:"best-practices",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:2},{value:"Overriding default behaviors",id:"overriding-default-behaviors",level:3},{value:"Examples of global settings",id:"examples-of-global-settings",level:4},{value:"Enhanced HTML report",id:"enhanced-html-report",level:2},{value:"Setup and run the report",id:"setup-and-run-the-report",level:3},{value:"Review visual test results",id:"review-visual-test-results",level:3},{value:"Working with Page Object Models (POMs)",id:"working-with-page-object-models-poms",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"integration-with-playwright",children:"Integration with Playwright"})}),"\n",(0,n.jsx)(t.p,{children:"In this section, we'll explore how to seamlessly integrate Applitools Eyes into your Playwright tests. You'll learn how to use the SDK within your tests, customize configurations, and work with Page Object Models (POMs) to enhance your visual testing strategy."}),"\n",(0,n.jsx)(t.h2,{id:"using-the-sdk-with-playwright-tests",children:"Using the SDK with Playwright tests"}),"\n",(0,n.jsx)(t.h3,{id:"importing-applitools-modules",children:"Importing Applitools modules"}),"\n",(0,n.jsxs)(t.p,{children:["To access Applitools features, import ",(0,n.jsx)(t.code,{children:"test"})," from ",(0,n.jsx)(t.code,{children:"@applitools/eyes-playwright"})," in your test files:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { test } from '@applitools/eyes-playwright';\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This replaces the default Playwright ",(0,n.jsx)(t.code,{children:"test"})," function with Applitools-enhanced version that supports visual testing."]}),"\n",(0,n.jsxs)(t.h4,{id:"accessing-the-eyes-object",children:["Accessing the ",(0,n.jsx)(t.code,{children:"eyes"})," object"]}),"\n",(0,n.jsxs)(t.p,{children:["The extended ",(0,n.jsx)(t.code,{children:"test"})," object provides access to the ",(0,n.jsx)(t.code,{children:"eyes"})," object within your test, enabling direct use of Applitools methods:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"test('Visual test using eyes.check()', async ({ page, eyes }) => {\n  await page.goto('https://example.com');\n\n  // Visual checkpoint of the full page using the `Strict` match level\n  await eyes.check('Homepage', {\n    fully: true,\n    matchLevel: 'Strict',\n  });\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"visual-checkpoints",children:"Visual checkpoints"}),"\n",(0,n.jsxs)(t.h4,{id:"using-eyescheck",children:["Using ",(0,n.jsx)(t.code,{children:"eyes.check()"})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"eyes.check()"})," method allows you to capture visual checkpoints with more explicit control. You can specify parameters such as the checkpoint name, match level, and regions to ignore."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"test('Visual test using eyes.check()', async ({ page, eyes }) => {\n  await page.goto('https://example.com');\n\n  // Visual checkpoint with custom settings\n  await eyes.check('Homepage', {\n    // Capture the full page\n    fully: true,\n    // Set match level\n    matchLevel: 'Strict',\n    // Ignore dynamic content\n    ignoreRegions: [page.locator('.dynamic-content')],\n  });\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Descriptive checkpoint names"}),": Provide meaningful names to your ",(0,n.jsx)(t.code,{children:"eyes.check()"})," calls for easy identification in the Applitools Dashboard."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Use contextual settings"}),": Adjust settings like ",(0,n.jsx)(t.code,{children:"matchLevel"})," and ",(0,n.jsx)(t.code,{children:"ignoreRegions"})," based on the specific content being tested."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Use textual assertions only when necessary"}),": Use ",(0,n.jsx)(t.code,{children:"eyes.check()"})," to assert appearance and every functionality that has a visual aspect, thus reducing your test code by 80%. Leave only those textual assertions needed to validate certain dynamic aspects that require programmatic evaluation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Encapsulate Visual Checks"}),": Keep visual checkpoints within relevant page object methods or custom fixtures for better organization."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,n.jsx)(t.p,{children:"You can pass various options both capture methods in order to customize the behavior:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"fully"})}),": Capture the full page when set to ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"region"})}),": Define a specific region or element to capture."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"matchLevel"})}),": Set the match level, which determines the way by which Eyes compares the checkpoint image with the baseline image. 'Strict' is the recommended value."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"ignoreRegions"})}),": Specify regions to ignore during comparison."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"floatingRegions"})}),": Define floating regions for containers of elements that may move."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"IgnoreDisplacements"})}),": suppresses differences caused by elements shifting positions."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example: Capturing a specific element"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"test('Element visual test using eyes.check()', async ({ page, eyes }) => {\n  await page.goto('https://example.com');\n\n  const navbar = page.locator('.navbar');\n\n  // Visual checkpoint of a specific element\n  await eyes.check('Navbar', {\n    region: navbar,\n    matchLevel: 'Layout',\n  });\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"overriding-default-behaviors",children:"Overriding default behaviors"}),"\n",(0,n.jsxs)(t.p,{children:["You can adjust global settings in your ",(0,n.jsx)(t.code,{children:"playwright.config.ts"})," file using ",(0,n.jsx)(t.code,{children:"eyesConfig"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// playwright.config.ts\nimport { EyesFixture } from '@applitools/eyes-playwright;\nexport default defineConfig<EyesFixture> ({\n  use: {\n    eyesConfig: {\n      appName: 'My App',\n      failTestsOnDiff: 'afterEach', // Options: 'afterEach', 'afterAll', false\n    },\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h4,{id:"examples-of-global-settings",children:"Examples of global settings"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"apiKey"}),": Default Applitools API key for all tests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"appName"}),": Default application name to use."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"batch"}),": Sets the BatchInfo for grouping tests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"failTestsOnDiff"}),": Controls when to throw exceptions on visual differences."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"enhanced-html-report",children:"Enhanced HTML report"}),"\n",(0,n.jsx)(t.h3,{id:"setup-and-run-the-report",children:"Setup and run the report"}),"\n",(0,n.jsxs)(t.p,{children:["When integrating Applitools Eyes into your Playwright tests, Playwright's HTML report is enhanced with visual test results. Go to ",(0,n.jsx)(t.code,{children:"playwright.config.ts"})," file and add the following settings:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// playwright.config.ts\nreporter: '@applitools/eyes-playwright/reporter',\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Note: The CLI setup may have already made this change for you."})}),"\n",(0,n.jsx)(t.p,{children:"After running your tests, you can view the test results in the enhanced HTML report. To open the report, run:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright show-report\n"})}),"\n",(0,n.jsx)(t.p,{children:"This custom report will display the visual test outcomes and can serve as a lightweight alternative to the Applitools Dashboard, easily shareable and always available and up to date with the latest batch resolution."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"report main page",src:s(4837).A+"",width:"1980",height:"1338"})}),"\n",(0,n.jsx)(t.h3,{id:"review-visual-test-results",children:"Review visual test results"}),"\n",(0,n.jsx)(t.p,{children:"The enhanced report offers several helpful options to view and address visual test results, accepting intentional changes, rejecting detecting issues, and eventually saving the checkpoints as the expected baseline."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"report diffs",src:s(7568).A+"",width:"1974",height:"1800"})}),"\n",(0,n.jsx)(t.h2,{id:"working-with-page-object-models-poms",children:"Working with Page Object Models (POMs)"}),"\n",(0,n.jsxs)(t.p,{children:["Integrating ",(0,n.jsx)(t.code,{children:"eyes"})," within your Page Object Models helps maintain clean and organized test code."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// page-objects/LoginPage.js\nclass LoginPage {\n  constructor(eyes, page) {\n    this.eyes = eyes;\n    this.page = page;\n    this.usernameInput = page.locator('#username');\n    this.passwordInput = page.locator('#password');\n    this.loginButton = page.locator('#login');\n  }\n\n  async navigate() {\n    await this.page.goto('https://example.com/login');\n  }\n\n  async login(username, password) {\n    await this.usernameInput.fill(username);\n    await this.passwordInput.fill(password);\n    await this.loginButton.click();\n  }\n\n  async verifyLoginPage() {\n    await this.eyes.check('Login Page', {\n      fully: true,\n    });\n  }\n}\n\nmodule.exports = { LoginPage };\n"})}),"\n",(0,n.jsx)(t.p,{children:"Usage in the test:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// tests/login.test.js\nimport { test } from '@applitools/eyes-playwright';\nconst { LoginPage } = require('../page-objects/LoginPage');\n\ntest('Login page visual test using eyes.check()', async ({ page, eyes }) => {\n  const loginPage = new LoginPage(eyes, page);\n  await loginPage.navigate();\n\n  // Visual checkpoint within the page object\n  await loginPage.verifyLoginPage();\n});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4837:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/report-main-page-da58932a4dbead1d1af7417f4202a913.png"},7568:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/report-visual-diff-370d379922e1a0705259959ecf8102b6.png"},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);