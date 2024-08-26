"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[4813],{5412:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=s(4848),a=s(8453);const t={},l="Root Cause Analysis",r={id:"guides/root-cause-analysis",title:"Root Cause Analysis",description:"When visual discrepancies are detected in your tests, it's crucial to quickly identify the root cause. This guide will show you how to leverage Applitools Eyes and Playwright to perform effective root cause analysis.",source:"@site/docs/guides/root-cause-analysis.md",sourceDirName:"guides",slug:"/guides/root-cause-analysis",permalink:"/applitools-playwright-docs/docs/guides/root-cause-analysis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Visual Testing in Code Reviews",permalink:"/applitools-playwright-docs/docs/guides/code-reviews"},next:{title:"Troubleshooting",permalink:"/applitools-playwright-docs/docs/troubleshooting"}},o={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Understanding Root Cause Analysis in Visual Testing",id:"understanding-root-cause-analysis-in-visual-testing",level:2},{value:"Leveraging Applitools&#39; AI-powered Insights",id:"leveraging-applitools-ai-powered-insights",level:2},{value:"Using Playwright&#39;s Tracing for Detailed Analysis",id:"using-playwrights-tracing-for-detailed-analysis",level:2},{value:"Analyzing DOM Changes",id:"analyzing-dom-changes",level:2},{value:"Investigating CSS and Style Changes",id:"investigating-css-and-style-changes",level:2},{value:"Handling Dynamic Content",id:"handling-dynamic-content",level:2},{value:"Collaborative Root Cause Analysis",id:"collaborative-root-cause-analysis",level:2},{value:"Best Practices for Efficient Root Cause Analysis",id:"best-practices-for-efficient-root-cause-analysis",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"root-cause-analysis",children:"Root Cause Analysis"})}),"\n",(0,i.jsx)(n.p,{children:"When visual discrepancies are detected in your tests, it's crucial to quickly identify the root cause. This guide will show you how to leverage Applitools Eyes and Playwright to perform effective root cause analysis."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#understanding-root-cause-analysis-in-visual-testing",children:"Understanding Root Cause Analysis in Visual Testing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#leveraging-applitools-ai-powered-insights",children:"Leveraging Applitools' AI-powered Insights"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#using-playwrights-tracing-for-detailed-analysis",children:"Using Playwright's Tracing for Detailed Analysis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#analyzing-dom-changes",children:"Analyzing DOM Changes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#investigating-css-and-style-changes",children:"Investigating CSS and Style Changes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#handling-dynamic-content",children:"Handling Dynamic Content"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#collaborative-root-cause-analysis",children:"Collaborative Root Cause Analysis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#best-practices-for-efficient-root-cause-analysis",children:"Best Practices for Efficient Root Cause Analysis"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"understanding-root-cause-analysis-in-visual-testing",children:"Understanding Root Cause Analysis in Visual Testing"}),"\n",(0,i.jsx)(n.p,{children:"Root cause analysis in visual testing involves:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identifying the exact elements that have changed"}),"\n",(0,i.jsx)(n.li,{children:"Understanding why these changes occurred"}),"\n",(0,i.jsx)(n.li,{children:"Determining if the changes are intentional or bugs"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"leveraging-applitools-ai-powered-insights",children:"Leveraging Applitools' AI-powered Insights"}),"\n",(0,i.jsx)(n.p,{children:"Applitools provides AI-powered insights to help identify the root cause of visual differences:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Use the Applitools dashboard to view test results"}),"\n",(0,i.jsx)(n.li,{children:"Examine the highlighted areas of difference"}),"\n",(0,i.jsx)(n.li,{children:'Utilize the "Root Cause Analysis" feature for AI-powered insights'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Enable root cause analysis in your test\nawait eyes.check('Homepage', Target.window().fully().useDom(true));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-playwrights-tracing-for-detailed-analysis",children:"Using Playwright's Tracing for Detailed Analysis"}),"\n",(0,i.jsx)(n.p,{children:"Playwright's tracing feature can provide valuable insights into test execution:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const { chromium } = require('playwright');\nconst { Eyes, Target } = require('@applitools/eyes-playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const context = await browser.newContext();\n\n  // Start tracing\n  await context.tracing.start({ screenshots: true, snapshots: true });\n\n  const page = await context.newPage();\n  const eyes = new Eyes();\n\n  try {\n    await eyes.open(page, 'My App', 'Root Cause Analysis Test');\n    await page.goto('https://example.com');\n    await eyes.check('Homepage', Target.window().fully());\n    await eyes.close();\n  } catch (error) {\n    console.error('Test failed:', error);\n  } finally {\n    // Stop tracing and save it\n    await context.tracing.stop({ path: 'trace.zip' });\n    await browser.close();\n  }\n})();\n"})}),"\n",(0,i.jsx)(n.p,{children:"Analyze the trace file using Playwright Trace Viewer for a step-by-step breakdown of the test execution."}),"\n",(0,i.jsx)(n.h2,{id:"analyzing-dom-changes",children:"Analyzing DOM Changes"}),"\n",(0,i.jsx)(n.p,{children:"Applitools can detect and highlight DOM changes that may cause visual differences:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await eyes.check('Check with DOM', Target.window().fully().useDom(true));\n"})}),"\n",(0,i.jsx)(n.p,{children:"Review the Applitools dashboard to see highlighted DOM changes and their impact on the visual appearance."}),"\n",(0,i.jsx)(n.h2,{id:"investigating-css-and-style-changes",children:"Investigating CSS and Style Changes"}),"\n",(0,i.jsx)(n.p,{children:"To catch CSS-related issues:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Use Applitools' layout matching:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await eyes.check('Layout Check', Target.window().fully().layout());\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Implement custom scripts to capture and compare CSS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await eyes.check(\n  'CSS Check',\n  Target.window()\n    .fully()\n    .scriptHook((driver) => {\n      return driver.executeScript(`\n    return Array.from(document.styleSheets)\n      .flatMap(sheet => Array.from(sheet.cssRules))\n      .map(rule => rule.cssText)\n      .join('\\\\n');\n  `);\n    })\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"handling-dynamic-content",children:"Handling Dynamic Content"}),"\n",(0,i.jsx)(n.p,{children:"For pages with dynamic content:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Use ignore regions for areas that change frequently:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await eyes.check(\n  'Dynamic Content Page',\n  Target.window().fully().ignoreRegions('#dynamic-content-area')\n);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Implement custom scripts to stabilize dynamic content before visual comparison:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await page.evaluate(() => {\n  const dynamicElement = document.querySelector('#dynamic-timestamp');\n  if (dynamicElement) dynamicElement.textContent = 'TIMESTAMP PLACEHOLDER';\n});\nawait eyes.check('Stabilized Page', Target.window().fully());\n"})}),"\n",(0,i.jsx)(n.h2,{id:"collaborative-root-cause-analysis",children:"Collaborative Root Cause Analysis"}),"\n",(0,i.jsx)(n.p,{children:"Leverage Applitools' collaboration features for team-based analysis:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Use the dashboard's annotation tools to highlight and discuss specific areas"}),"\n",(0,i.jsx)(n.li,{children:"Share test results and insights with team members"}),"\n",(0,i.jsx)(n.li,{children:"Integrate with issue tracking systems for seamless workflow"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Add custom properties to aid in collaboration\nawait eyes.addProperty('Jira Ticket', 'PROJ-123');\nawait eyes.addProperty('Developer', 'johndoe');\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices-for-efficient-root-cause-analysis",children:"Best Practices for Efficient Root Cause Analysis"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Detailed Test Naming"}),": Use descriptive names for tests and checkpoints"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await eyes.check(\n  'Homepage - Above the Fold Content',\n  Target.region('#hero-section')\n);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Consistent Test Data"}),": Ensure tests use consistent, predictable data to minimize false positives"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Incremental Testing"}),": Run visual tests for each significant change to isolate issues"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Environment Consistency"}),": Ensure test environments closely match production"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Version Control Integration"}),": Link visual test results to specific commits or pull requests"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const batchInfo = new BatchInfo('PR Check');\nbatchInfo.setNotifyOnCompletion(true);\neyes.setBatch(batchInfo);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Regular Baseline Updates"}),": Keep baselines up-to-date to avoid noise in root cause analysis"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Leverage AI Insights"}),": Make use of Applitools' AI-powered insights for faster issue identification"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Comprehensive Logging"}),": Implement detailed logging in your tests to provide context for visual changes"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log(`Testing page: ${await page.title()}`);\nawait eyes.check(\n  'Page Title: ' + (await page.title()),\n  Target.window().fully()\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"By following these practices and leveraging the tools provided by Applitools Eyes and Playwright, you can perform efficient and effective root cause analysis, quickly identifying and resolving issues in your visual tests."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(6540);const a={},t=i.createContext(a);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);