"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[5493],{786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const s={},l="Integration with Playwright",o={id:"integration-with-playwright",title:"Integration with Playwright",description:"This guide explains how to integrate Applitools Eyes seamlessly with your Playwright tests. We'll cover the setup process, basic usage, and best practices for combining visual testing with your existing Playwright automation.",source:"@site/docs/integration-with-playwright.md",sourceDirName:".",slug:"/integration-with-playwright",permalink:"/applitools-playwright-docs/docs/integration-with-playwright",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/applitools-playwright-docs/docs/core-concepts"},next:{title:"Advanced Usage",permalink:"/applitools-playwright-docs/docs/advanced-usage"}},r={},c=[{value:"Setting Up Applitools Eyes in Your Playwright Project",id:"setting-up-applitools-eyes-in-your-playwright-project",level:2},{value:"Installation",id:"installation",level:3},{value:"Importing and Initializing",id:"importing-and-initializing",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Advanced Integration Techniques",id:"advanced-integration-techniques",level:2},{value:"Using Playwright&#39;s Page Object Model",id:"using-playwrights-page-object-model",level:3},{value:"Handling Dynamic Content",id:"handling-dynamic-content",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Combining Functional and Visual Tests",id:"combining-functional-and-visual-tests",level:2}];function g(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"integration-with-playwright",children:"Integration with Playwright"})}),"\n",(0,i.jsx)(n.p,{children:"This guide explains how to integrate Applitools Eyes seamlessly with your Playwright tests. We'll cover the setup process, basic usage, and best practices for combining visual testing with your existing Playwright automation."}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-applitools-eyes-in-your-playwright-project",children:"Setting Up Applitools Eyes in Your Playwright Project"}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"First, install the Applitools Eyes SDK for Playwright:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install @applitools/eyes-playwright\n"})}),"\n",(0,i.jsx)(n.h3,{id:"importing-and-initializing",children:"Importing and Initializing"}),"\n",(0,i.jsx)(n.p,{children:"In your test file, import the necessary modules and initialize the Eyes object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import { test } from '@playwright/test';\nimport { Eyes, Target } from '@applitools/eyes-playwright';\n\ntest.describe('My First Visual Test Suite', () => {\n  let eyes;\n\n  test.beforeEach(async () => {\n    eyes = new Eyes();\n    // Set your API key here if not using environment variables\n    // eyes.setApiKey('YOUR_API_KEY');\n  });\n\n  // Your test cases will go here\n\n  test.afterEach(async () => {\n    await eyes.close();\n  });\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.p,{children:"Here's a basic example of how to add visual checks to your Playwright test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"test('Homepage visual test', async ({ page }) => {\n  await eyes.open(page, 'My Application', 'Homepage Test');\n\n  await page.goto('https://my-application.com');\n\n  await eyes.check('Full Page', Target.window().fully());\n\n  await page.click('#login-button');\n\n  await eyes.check('Login Form', Target.region('#login-form'));\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"advanced-integration-techniques",children:"Advanced Integration Techniques"}),"\n",(0,i.jsx)(n.h3,{id:"using-playwrights-page-object-model",children:"Using Playwright's Page Object Model"}),"\n",(0,i.jsx)(n.p,{children:"You can integrate Applitools checks into your Page Object Model:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"class HomePage {\n  constructor(page, eyes) {\n    this.page = page;\n    this.eyes = eyes;\n  }\n\n  async navigate() {\n    await this.page.goto('https://my-application.com');\n    await this.eyes.check('Home Page', Target.window().fully());\n  }\n\n  async clickLoginButton() {\n    await this.page.click('#login-button');\n    await this.eyes.check('Login Button Clicked', Target.window().fully());\n  }\n}\n\ntest('Using Page Object Model', async ({ page }) => {\n  await eyes.open(page, 'My Application', 'POM Test');\n\n  const homePage = new HomePage(page, eyes);\n  await homePage.navigate();\n  await homePage.clickLoginButton();\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"handling-dynamic-content",children:"Handling Dynamic Content"}),"\n",(0,i.jsx)(n.p,{children:"For pages with dynamic content, you can use ignore regions or match levels:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await eyes.check(\n  'Dynamic Page',\n  Target.window().fully().ignoreRegion('#dynamic-content').layout()\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Consistent Viewport Sizes"}),": Set consistent viewport sizes for your tests to ensure reproducibility."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await page.setViewportSize({ width: 1280, height: 720 });\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Meaningful Test Names"}),": Use descriptive names for your tests and check points to make debugging easier."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Batching Related Tests"}),": Group related tests into batches for easier management."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"eyes.setBatch({\n  id: 'My batch name',\n  name: 'My batch',\n});\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Error Handling"}),": Always use try-finally blocks to ensure Eyes is properly closed, even if an error occurs."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"try {\n  // Your test code here\n} finally {\n  await eyes.abort();\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Parallel Execution"}),": Leverage Playwright's parallel execution capabilities with Applitools' Visual Grid for faster test runs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"combining-functional-and-visual-tests",children:"Combining Functional and Visual Tests"}),"\n",(0,i.jsx)(n.p,{children:"You can combine functional assertions with visual checks in the same test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"test('Login functionality and visuals', async ({ page }) => {\n  await eyes.open(page, 'My Application', 'Login Test');\n\n  await page.goto('https://my-application.com/login');\n  await eyes.check('Login Page', Target.window().fully());\n\n  await page.fill('#username', 'testuser');\n  await page.fill('#password', 'password123');\n  await page.click('#submit-button');\n\n  // Functional assertion\n  await expect(page.locator('.welcome-message')).toHaveText(\n    'Welcome, testuser!'\n  );\n\n  // Visual check\n  await eyes.check('After Login', Target.window().fully());\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"By following these integration techniques and best practices, you can create robust, efficient tests that combine Playwright's powerful automation capabilities with Applitools' advanced visual testing features."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);