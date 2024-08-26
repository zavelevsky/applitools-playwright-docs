"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[4610],{4592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(4848),a=t(8453);const i={},o="Examples and Tutorials",r={id:"examples-and-tutorials",title:"Examples and Tutorials",description:"This guide provides a collection of practical examples and step-by-step tutorials to help you effectively use Applitools Eyes with Playwright. These examples cover various scenarios and use cases to enhance your understanding and implementation of visual testing.",source:"@site/docs/examples-and-tutorials.md",sourceDirName:".",slug:"/examples-and-tutorials",permalink:"/applitools-playwright-docs/docs/examples-and-tutorials",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Migrating to Applitools Eyes",permalink:"/applitools-playwright-docs/docs/migration"},next:{title:"Community and Resources",permalink:"/applitools-playwright-docs/docs/community-and-resources"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Basic Visual Test",id:"basic-visual-test",level:2},{value:"Testing a Login Flow",id:"testing-a-login-flow",level:2},{value:"Responsive Design Testing",id:"responsive-design-testing",level:2},{value:"Handling Dynamic Content",id:"handling-dynamic-content",level:2},{value:"Cross-Browser Testing with Ultrafast Grid",id:"cross-browser-testing-with-ultrafast-grid",level:2},{value:"Component Testing",id:"component-testing",level:2},{value:"Visual Test-Driven Development (TDD)",id:"visual-test-driven-development-tdd",level:2},{value:"Advanced Configuration and Customization",id:"advanced-configuration-and-customization",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"examples-and-tutorials",children:"Examples and Tutorials"})}),"\n",(0,s.jsx)(n.p,{children:"This guide provides a collection of practical examples and step-by-step tutorials to help you effectively use Applitools Eyes with Playwright. These examples cover various scenarios and use cases to enhance your understanding and implementation of visual testing."}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#basic-visual-test",children:"Basic Visual Test"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#testing-a-login-flow",children:"Testing a Login Flow"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#responsive-design-testing",children:"Responsive Design Testing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#handling-dynamic-content",children:"Handling Dynamic Content"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cross-browser-testing-with-ultrafast-grid",children:"Cross-Browser Testing with Ultrafast Grid"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#component-testing",children:"Component Testing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#visual-test-driven-development-tdd",children:"Visual Test-Driven Development (TDD)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#advanced-configuration-and-customization",children:"Advanced Configuration and Customization"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-visual-test",children:"Basic Visual Test"}),"\n",(0,s.jsx)(n.p,{children:"Let's start with a basic example of how to perform a visual test using Applitools Eyes and Playwright."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst { Eyes, Target } = require('@applitools/eyes-playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  const eyes = new Eyes();\n\n  try {\n    await eyes.open(page, 'My App', 'Homepage Test');\n\n    await page.goto('https://example.com');\n\n    await eyes.check('Full Page', Target.window().fully());\n\n    await eyes.close();\n  } finally {\n    await eyes.abort();\n    await browser.close();\n  }\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This script:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Launches a browser and creates a new page"}),"\n",(0,s.jsx)(n.li,{children:"Initializes Applitools Eyes"}),"\n",(0,s.jsx)(n.li,{children:"Opens the Eyes test"}),"\n",(0,s.jsx)(n.li,{children:"Navigates to a website"}),"\n",(0,s.jsx)(n.li,{children:"Performs a full-page check"}),"\n",(0,s.jsx)(n.li,{children:"Closes the Eyes test"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testing-a-login-flow",children:"Testing a Login Flow"}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates how to visually test a login flow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst { Eyes, Target } = require('@applitools/eyes-playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  const eyes = new Eyes();\n\n  try {\n    await eyes.open(page, 'My App', 'Login Flow Test');\n\n    await page.goto('https://example.com/login');\n    await eyes.check('Login Page', Target.window().fully());\n\n    await page.fill('#username', 'testuser');\n    await page.fill('#password', 'password123');\n    await eyes.check('Filled Login Form', Target.window().fully());\n\n    await page.click('#login-button');\n    await page.waitForNavigation();\n    await eyes.check('After Login', Target.window().fully());\n\n    await eyes.close();\n  } finally {\n    await eyes.abort();\n    await browser.close();\n  }\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This script tests the visual appearance of:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The initial login page"}),"\n",(0,s.jsx)(n.li,{children:"The login form after filling in credentials"}),"\n",(0,s.jsx)(n.li,{children:"The page after successful login"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"responsive-design-testing",children:"Responsive Design Testing"}),"\n",(0,s.jsx)(n.p,{children:"To test responsive design across different viewport sizes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst { Eyes, Target } = require('@applitools/eyes-playwright');\n\nconst viewports = [\n  { width: 1200, height: 800 },\n  { width: 768, height: 1024 },\n  { width: 375, height: 667 },\n];\n\n(async () => {\n  const browser = await chromium.launch();\n  const eyes = new Eyes();\n\n  try {\n    await eyes.open(browser, 'My App', 'Responsive Design Test');\n\n    for (const viewport of viewports) {\n      const page = await browser.newPage();\n      await page.setViewportSize(viewport);\n      await page.goto('https://example.com');\n      await eyes.check(\n        `Viewport ${viewport.width}x${viewport.height}`,\n        Target.window().fully()\n      );\n      await page.close();\n    }\n\n    await eyes.close();\n  } finally {\n    await eyes.abort();\n    await browser.close();\n  }\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This script tests the website's appearance across different viewport sizes, simulating various devices."}),"\n",(0,s.jsx)(n.h2,{id:"handling-dynamic-content",children:"Handling Dynamic Content"}),"\n",(0,s.jsx)(n.p,{children:"When dealing with dynamic content, you can use ignore regions or layout regions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst { Eyes, Target } = require('@applitools/eyes-playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  const eyes = new Eyes();\n\n  try {\n    await eyes.open(page, 'My App', 'Dynamic Content Test');\n\n    await page.goto('https://example.com/dynamic');\n\n    await eyes.check(\n      'Dynamic Page',\n      Target.window()\n        .fully()\n        .ignoreRegions('#changing-ad')\n        .layout('#user-generated-content')\n    );\n\n    await eyes.close();\n  } finally {\n    await eyes.abort();\n    await browser.close();\n  }\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This example ignores a changing ad and uses layout matching for user-generated content."}),"\n",(0,s.jsx)(n.h2,{id:"cross-browser-testing-with-ultrafast-grid",children:"Cross-Browser Testing with Ultrafast Grid"}),"\n",(0,s.jsx)(n.p,{children:"To perform cross-browser testing using Applitools Ultrafast Grid:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const {\n  Eyes,\n  Target,\n  VisualGridRunner,\n  BrowserType,\n  DeviceName,\n} = require('@applitools/eyes-playwright');\n\n(async () => {\n  const runner = new VisualGridRunner({ testConcurrency: 5 });\n  const eyes = new Eyes(runner);\n\n  const configuration = eyes.getConfiguration();\n  configuration.addBrowser({\n    width: 1200,\n    height: 800,\n    name: BrowserType.CHROME,\n  });\n  configuration.addBrowser({\n    width: 1200,\n    height: 800,\n    name: BrowserType.FIREFOX,\n  });\n  configuration.addBrowser({\n    width: 1200,\n    height: 800,\n    name: BrowserType.SAFARI,\n  });\n  configuration.addBrowser({\n    width: 1200,\n    height: 800,\n    name: BrowserType.EDGE_CHROMIUM,\n  });\n  configuration.addDevice(DeviceName.iPhone_X);\n  eyes.setConfiguration(configuration);\n\n  try {\n    await eyes.open('My App', 'Cross-Browser Test');\n\n    // Replace this with your actual test steps\n    await eyes.check('Cross-Browser', Target.window().fully());\n\n    await eyes.close();\n  } finally {\n    await eyes.abort();\n    const results = await runner.getAllTestResults();\n    console.log(results);\n  }\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This script runs the visual test across multiple browsers and devices using the Ultrafast Grid."}),"\n",(0,s.jsx)(n.h2,{id:"component-testing",children:"Component Testing"}),"\n",(0,s.jsx)(n.p,{children:"For testing individual components:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst { Eyes, Target } = require('@applitools/eyes-playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  const eyes = new Eyes();\n\n  try {\n    await eyes.open(page, 'My App', 'Component Test');\n\n    await page.goto('https://example.com');\n\n    await eyes.check('Header', Target.region('#header'));\n    await eyes.check('Navigation Menu', Target.region('#nav-menu'));\n    await eyes.check('Footer', Target.region('#footer'));\n\n    await eyes.close();\n  } finally {\n    await eyes.abort();\n    await browser.close();\n  }\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates how to test individual components of a page."}),"\n",(0,s.jsx)(n.h2,{id:"visual-test-driven-development-tdd",children:"Visual Test-Driven Development (TDD)"}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of how to implement visual TDD:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst { Eyes, Target } = require('@applitools/eyes-playwright');\n\ndescribe('Button Component', () => {\n  let browser, page, eyes;\n\n  beforeAll(async () => {\n    browser = await chromium.launch();\n    page = await browser.newPage();\n    eyes = new Eyes();\n  });\n\n  afterAll(async () => {\n    await browser.close();\n  });\n\n  it('should have correct appearance', async () => {\n    await eyes.open(page, 'My App', 'Button Test');\n\n    await page.setContent(`\n      <button id=\"test-button\" style=\"padding: 10px; background-color: blue; color: white;\">\n        Click me\n      </button>\n    `);\n\n    await eyes.check('Default Button', Target.region('#test-button'));\n\n    await page.hover('#test-button');\n    await eyes.check('Hovered Button', Target.region('#test-button'));\n\n    await eyes.close();\n  });\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"This script demonstrates a visual TDD approach for a button component, checking its appearance in different states."}),"\n",(0,s.jsx)(n.h2,{id:"advanced-configuration-and-customization",children:"Advanced Configuration and Customization"}),"\n",(0,s.jsx)(n.p,{children:"For advanced users, here's an example with custom configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst {\n  Eyes,\n  Target,\n  ClassicRunner,\n  Configuration,\n  BatchInfo,\n} = require('@applitools/eyes-playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n\n  const runner = new ClassicRunner();\n  const eyes = new Eyes(runner);\n\n  const configuration = new Configuration();\n  configuration.setAppName('My App');\n  configuration.setTestName('Advanced Config Test');\n  configuration.setBatch(new BatchInfo('My Batch'));\n  configuration.setForceFullPageScreenshot(true);\n  configuration.setStitchMode('CSS');\n  configuration.setMatchTimeout(0);\n  eyes.setConfiguration(configuration);\n\n  try {\n    await eyes.open(page);\n\n    await page.goto('https://example.com');\n\n    await eyes.check(\n      'Full Page',\n      Target.window()\n        .fully()\n        .layoutBreakpoints(true)\n        .useDom(true)\n        .enablePatterns(true)\n    );\n\n    await eyes.close();\n  } finally {\n    await eyes.abort();\n    const results = await runner.getAllTestResults();\n    console.log(results);\n    await browser.close();\n  }\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates advanced configuration options and customization of the check method."}),"\n",(0,s.jsx)(n.p,{children:"These examples and tutorials should provide a solid foundation for using Applitools Eyes with Playwright. Remember to adapt these examples to your specific use cases and requirements."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);