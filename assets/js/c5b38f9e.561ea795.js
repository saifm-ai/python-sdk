"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?o.createElement(g,i(i({ref:t},k),{},{components:n})):o.createElement(g,i({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={},i="API Tokens",l={unversionedId:"getting-started/api-tokens",id:"getting-started/api-tokens",title:"API Tokens",description:"About API Tokens",source:"@site/docs/getting-started/1-api-tokens.md",sourceDirName:"getting-started",slug:"/getting-started/api-tokens",permalink:"/python-sdk/docs/getting-started/api-tokens",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/getting-started/1-api-tokens.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/python-sdk/docs/getting-started/"},next:{title:"Writing Queries",permalink:"/python-sdk/docs/getting-started/writing-queries"}},s={},u=[{value:"About API Tokens",id:"about-api-tokens",level:2},{value:"Handling API Tokens",id:"handling-api-tokens",level:2},{value:"Using API Tokens with the SDK",id:"using-api-tokens-with-the-sdk",level:2},{value:"Creating and Revoking API Tokens",id:"creating-and-revoking-api-tokens",level:2},{value:"Creating API Tokens",id:"creating-api-tokens",level:3},{value:"Viewing and Revoking API Tokens",id:"viewing-and-revoking-api-tokens",level:3},{value:"To revoke an API token",id:"to-revoke-an-api-token",level:3}],k={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-tokens"},"API Tokens"),(0,r.kt)("h2",{id:"about-api-tokens"},"About API Tokens"),(0,r.kt)("p",null,'To use the Groundlight SDK or API, you need a security token which we call an "API Token." These authenticate you to Groundlight and authorize your code to use services in your account.'),(0,r.kt)("p",null,"API tokens look like ",(0,r.kt)("inlineCode",{parentName:"p"},"api_2GdXMflhJ...")," and consist of a ksuid (a kind of sortable UUID) followed by a secret string."),(0,r.kt)("h2",{id:"handling-api-tokens"},"Handling API Tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You should treat API tokens like passwords.")," Never check them directly into your code or share them. Please use best security practices with your API tokens, because if anybody gets your API token, they have nearly full control over your Groundlight account."),(0,r.kt)("p",null,"Here are some best practices for handling API tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Store API tokens in a secure location, such as an encrypted vault."),(0,r.kt)("li",{parentName:"ul"},"Use environment variables to store API tokens, rather than hardcoding them in your application."),(0,r.kt)("li",{parentName:"ul"},"Limit the number of people who have access to API tokens."),(0,r.kt)("li",{parentName:"ul"},"Rotate API tokens regularly and revoke old ones when they are no longer needed.")),(0,r.kt)("h2",{id:"using-api-tokens-with-the-sdk"},"Using API Tokens with the SDK"),(0,r.kt)("p",null,"There are a couple of ways the SDK can find your API token:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Environment variable (recommended): As a best practice, we recommend storing API tokens in the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"GROUNDLIGHT_API_TOKEN"),". This helps avoid accidentally committing the token to your code repository.  The SDK will automatically look for the API token there, so you don't have to put it in your code at all.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from groundlight import Groundlight\n\n# looks for API token in environment variable GROUNDLIGHT_API_TOKEN\ngl = Groundlight()\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Constructor argument: Alternatively, you can pass the API token directly to the Groundlight constructor. However, be cautious not to commit this code to your repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"from groundlight import Groundlight\n\ntoken = get_token_from_secure_location()\ngl = Groundlight(api_token=token)\n")),(0,r.kt)("h2",{id:"creating-and-revoking-api-tokens"},"Creating and Revoking API Tokens"),(0,r.kt)("p",null,"You can manage your API tokens from the Groundlight website at ",(0,r.kt)("a",{parentName:"p",href:"https://app.groundlight.ai/reef/my-account/api-tokens"},"https://app.groundlight.ai/reef/my-account/api-tokens"),"."),(0,r.kt)("h3",{id:"creating-api-tokens"},"Creating API Tokens"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to your Groundlight account and navigate to the API tokens page."),(0,r.kt)("li",{parentName:"ol"},'Click the "Create New API Token" button.'),(0,r.kt)("li",{parentName:"ol"},"Give the new token a descriptive name, so you can easily identify it later."),(0,r.kt)("li",{parentName:"ol"},'Click "Create Token."'),(0,r.kt)("li",{parentName:"ol"},"Copy the generated token and store it securely, as you won't be able to see it again. Groundlight does not store a copy of your API tokens.")),(0,r.kt)("h3",{id:"viewing-and-revoking-api-tokens"},"Viewing and Revoking API Tokens"),(0,r.kt)("p",null,"On the API tokens page, you can see a list of your current tokens, along with the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Token Name: The descriptive name you assigned when creating the token"),(0,r.kt)("li",{parentName:"ul"},"Snippet (prefix): A short, unique identifier for each token"),(0,r.kt)("li",{parentName:"ul"},"Last used: The date and time the token was last used")),(0,r.kt)("h3",{id:"to-revoke-an-api-token"},"To revoke an API token"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Locate the token you want to revoke in the list."),(0,r.kt)("li",{parentName:"ol"},'Click the "Delete" button next to the token.'),(0,r.kt)("li",{parentName:"ol"},"Confirm that you want to revoke the token.")),(0,r.kt)("p",null,"Note: Revoking an API token will immediately invalidate it and prevent any applications using it from accessing your Groundlight account. Be sure to update your applications with a new token before revoking an old one."))}c.isMDXComponent=!0}}]);