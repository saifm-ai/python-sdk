"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[863],{4725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(5893),i=t(1151);const r={},s="API Tokens",a={id:"getting-started/api-tokens",title:"API Tokens",description:"About API Tokens",source:"@site/docs/getting-started/1-api-tokens.md",sourceDirName:"getting-started",slug:"/getting-started/api-tokens",permalink:"/python-sdk/docs/getting-started/api-tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/getting-started/1-api-tokens.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/python-sdk/docs/getting-started/"},next:{title:"Writing Queries",permalink:"/python-sdk/docs/getting-started/writing-queries"}},l={},d=[{value:"About API Tokens",id:"about-api-tokens",level:2},{value:"Handling API Tokens",id:"handling-api-tokens",level:2},{value:"Using API Tokens with the SDK",id:"using-api-tokens-with-the-sdk",level:2},{value:"Creating and Revoking API Tokens",id:"creating-and-revoking-api-tokens",level:2},{value:"Creating API Tokens",id:"creating-api-tokens",level:3},{value:"Viewing and Revoking API Tokens",id:"viewing-and-revoking-api-tokens",level:3},{value:"To revoke an API token",id:"to-revoke-an-api-token",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"api-tokens",children:"API Tokens"}),"\n",(0,o.jsx)(n.h2,{id:"about-api-tokens",children:"About API Tokens"}),"\n",(0,o.jsx)(n.p,{children:'To use the Groundlight SDK or API, you need a security token which we call an "API Token." These authenticate you to Groundlight and authorize your code to use services in your account.'}),"\n",(0,o.jsxs)(n.p,{children:["API tokens look like ",(0,o.jsx)(n.code,{children:"api_2GdXMflhJ..."})," and consist of a ksuid (a kind of sortable UUID) followed by a secret string."]}),"\n",(0,o.jsx)(n.h2,{id:"handling-api-tokens",children:"Handling API Tokens"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"You should treat API tokens like passwords."})," Never check them directly into your code or share them. Please use best security practices with your API tokens, because if anybody gets your API token, they have nearly full control over your Groundlight account."]}),"\n",(0,o.jsx)(n.p,{children:"Here are some best practices for handling API tokens:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Store API tokens in a secure location, such as an encrypted vault."}),"\n",(0,o.jsx)(n.li,{children:"Use environment variables to store API tokens, rather than hardcoding them in your application."}),"\n",(0,o.jsx)(n.li,{children:"Limit the number of people who have access to API tokens."}),"\n",(0,o.jsx)(n.li,{children:"Rotate API tokens regularly and revoke old ones when they are no longer needed."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"using-api-tokens-with-the-sdk",children:"Using API Tokens with the SDK"}),"\n",(0,o.jsx)(n.p,{children:"There are a couple of ways the SDK can find your API token:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Environment variable (recommended): As a best practice, we recommend storing API tokens in the environment variable ",(0,o.jsx)(n.code,{children:"GROUNDLIGHT_API_TOKEN"}),". This helps avoid accidentally committing the token to your code repository.  The SDK will automatically look for the API token there, so you don't have to put it in your code at all."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from groundlight import Groundlight\n\n# looks for API token in environment variable GROUNDLIGHT_API_TOKEN\ngl = Groundlight()\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Constructor argument: Alternatively, you can pass the API token directly to the Groundlight constructor. However, be cautious not to commit this code to your repository."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"from groundlight import Groundlight\n\ntoken = get_token_from_secure_location()\ngl = Groundlight(api_token=token)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"creating-and-revoking-api-tokens",children:"Creating and Revoking API Tokens"}),"\n",(0,o.jsxs)(n.p,{children:["You can manage your API tokens from the Groundlight website at ",(0,o.jsx)(n.a,{href:"https://app.groundlight.ai/reef/my-account/api-tokens",children:"https://app.groundlight.ai/reef/my-account/api-tokens"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"creating-api-tokens",children:"Creating API Tokens"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Log in to your Groundlight account and navigate to the API tokens page."}),"\n",(0,o.jsx)(n.li,{children:'Click the "Create New API Token" button.'}),"\n",(0,o.jsx)(n.li,{children:"Give the new token a descriptive name, so you can easily identify it later."}),"\n",(0,o.jsx)(n.li,{children:'Click "Create Token."'}),"\n",(0,o.jsx)(n.li,{children:"Copy the generated token and store it securely, as you won't be able to see it again. Groundlight does not store a copy of your API tokens."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"viewing-and-revoking-api-tokens",children:"Viewing and Revoking API Tokens"}),"\n",(0,o.jsx)(n.p,{children:"On the API tokens page, you can see a list of your current tokens, along with the following information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Token Name: The descriptive name you assigned when creating the token"}),"\n",(0,o.jsx)(n.li,{children:"Snippet (prefix): A short, unique identifier for each token"}),"\n",(0,o.jsx)(n.li,{children:"Last used: The date and time the token was last used"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"to-revoke-an-api-token",children:"To revoke an API token"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Locate the token you want to revoke in the list."}),"\n",(0,o.jsx)(n.li,{children:'Click the "Delete" button next to the token.'}),"\n",(0,o.jsx)(n.li,{children:"Confirm that you want to revoke the token."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Note: Revoking an API token will immediately invalidate it and prevent any applications using it from accessing your Groundlight account. Be sure to update your applications with a new token before revoking an old one."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);