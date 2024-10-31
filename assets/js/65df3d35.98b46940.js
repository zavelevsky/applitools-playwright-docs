"use strict";(self.webpackChunkapplitools_playwright_docs=self.webpackChunkapplitools_playwright_docs||[]).push([[8559],{7635:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(4848),t=n(8453);const o={},r="API Overview",l={id:"api/overview",title:"API Overview",description:"Welcome to the API reference for integrating Applitools Eyes with Playwright. This section provides detailed information on configuring Applitools Eyes within your Playwright tests and utilizing its powerful visual testing capabilities.",source:"@site/docs/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/applitools-playwright-docs/docs/api/overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",next:{title:"Configuration Options",permalink:"/applitools-playwright-docs/docs/api/common-configuration"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"API Sections",id:"api-sections",level:2},{value:"Basic Example",id:"basic-example",level:2},{value:"Overriding Settings in Tests",id:"overriding-settings-in-tests",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"api-overview",children:"API Overview"})}),"\n",(0,s.jsx)(i.p,{children:"Welcome to the API reference for integrating Applitools Eyes with Playwright. This section provides detailed information on configuring Applitools Eyes within your Playwright tests and utilizing its powerful visual testing capabilities."}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"Integrating Applitools Eyes with Playwright involves two main steps:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Configuration"}),": Update your ",(0,s.jsx)(i.code,{children:"playwright.config.ts"})," file to include Applitools Eyes settings under ",(0,s.jsx)(i.code,{children:"eyesConfig"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Writing Tests"}),": Import ",(0,s.jsx)(i.code,{children:"test"})," from ",(0,s.jsx)(i.code,{children:"@applitools/eyes-playwright"})," and use the ",(0,s.jsx)(i.code,{children:"eyes"})," object within your tests to perform visual checkpoints using the ",(0,s.jsx)(i.code,{children:"eyes.check"})," method."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," Additionally, Applitools Eyes supports Playwright's native visual assertion methods. If you import ",(0,s.jsx)(i.code,{children:"expect"})," from ",(0,s.jsx)(i.code,{children:"@applitools/eyes-playwright"}),", your existing tests using ",(0,s.jsx)(i.code,{children:"expect(page).toHaveScreenshot()"})," will work seamlessly with Applitools Eyes. However, it is recommended to use ",(0,s.jsx)(i.code,{children:"eyes.check"})," for more advanced visual testing features."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"api-sections",children:"API Sections"}),"\n",(0,s.jsx)(i.p,{children:"The API reference is divided into the following sections:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Configuration Options"}),": A comprehensive list of all available configuration options for Applitools Eyes."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:["Using ",(0,s.jsx)(i.code,{children:"eyes.check"})," in Tests"]}),": Detailed usage of the ",(0,s.jsx)(i.code,{children:"eyes.check"})," method, including parameters and examples."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Defining Regions with Selectors and Locators"}),": How to specify different types of regions when calling ",(0,s.jsx)(i.code,{children:"eyes.check"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsxs)(i.p,{children:["To configure Applitools Eyes in your Playwright project, you need to update your ",(0,s.jsx)(i.code,{children:"playwright.config.ts"})," file. The configuration options are set under the ",(0,s.jsx)(i.code,{children:"eyesConfig"})," property within the ",(0,s.jsx)(i.code,{children:"use"})," section."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"// playwright.config.ts\nimport { defineConfig } from '@playwright/test';\nimport { EyesFixture } from '@applitools/eyes-playwright';\n\nexport default defineConfig<EyesFixture>({\n  // Other Playwright configurations...\n  reporter: '@applitools/eyes-playwright/reporter',\n  use: {\n    eyesConfig: {\n      apiKey: 'YOUR_API_KEY',\n      appName: 'My App',\n      matchLevel: 'Strict',\n      // Runner type: 'ufg' for Ultrafast Grid, 'classic' for Classic runner\n      type: 'ufg',\n      batch: { name: 'Regression Tests' },\n      // Additional configuration options...\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note"}),": All configuration options are optional. If an option is not specified, a default value is used. Default behaviors are provided in the option descriptions in the next sections."]}),"\n",(0,s.jsx)(i.h2,{id:"overriding-settings-in-tests",children:"Overriding Settings in Tests"}),"\n",(0,s.jsxs)(i.p,{children:["You can override global ",(0,s.jsx)(i.code,{children:"eyesConfig"})," settings for individual tests or test suites using ",(0,s.jsx)(i.code,{children:"test.use()"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"import { test } from '@applitools/eyes-playwright';\n\ntest.use({\n  eyesConfig: {\n    // Override settings for specific tests\n    matchTimeout: 5000,\n    ignoreCaret: false,\n    logConfig: {\n      level: 'debug',\n    },\n  },\n});\n\ntest('Visual test with overridden settings', async ({ page, eyes }) => {\n  // Test code...\n});\n"})})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var s=n(6540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);