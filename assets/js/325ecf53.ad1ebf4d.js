"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[45],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(m,o(o({ref:t},g),{},{components:a})):r.createElement(m,o({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},o="Getting Started",l={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",title:"Getting Started",description:"Computer Vision powered by Natural Language",source:"@site/docs/getting-started/getting-started.mdx",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/python-sdk/docs/getting-started/",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/getting-started/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"API Tokens",permalink:"/python-sdk/docs/getting-started/api-tokens"}},s={},p=[{value:"Computer Vision powered by Natural Language",id:"computer-vision-powered-by-natural-language",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Escalation Technology",id:"escalation-technology",level:3},{value:"Building a simple visual application",id:"building-a-simple-visual-application",level:2}],g={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("h2",{id:"computer-vision-powered-by-natural-language"},"Computer Vision powered by Natural Language"),(0,n.kt)("p",null,"Build a working computer vision system in just a few lines of python:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from groundlight import Groundlight\n\ngl = Groundlight()\ndet = gl.get_or_create_detector(name="doorway", query="Is the doorway open?")\nimg = "./docs/static/img/doorway.jpg"  # Image can be a file or a Python object\nimage_query = gl.submit_image_query(detector=det, image=img)\nprint(f"The answer is {image_query.result}")\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'Note: The SDK is currently in "beta" phase. Interfaces are subject to change in future versions. We will follow ',(0,n.kt)("a",{parentName:"em",href:"https://semver.org/"},"semver")," semantics for breaking changes.")),(0,n.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"Your images are first analyzed by machine learning (ML) models which are automatically trained on your data. If those models have high enough ",(0,n.kt)("a",{parentName:"p",href:"docs/building-applications/managing-confidence"},"confidence"),", that's your answer. But if the models are unsure, then the images are progressively escalated to more resource-intensive analysis methods up to real-time human review. So what you get is a computer vision system that starts working right away without even needing to first gather and label a dataset. At first it will operate with high latency, because people need to review the image queries. But over time, the ML systems will learn and improve so queries come back faster with higher confidence."),(0,n.kt)("h3",{id:"escalation-technology"},"Escalation Technology"),(0,n.kt)("p",null,"Groundlight's Escalation Technology combines the power of generative AI using our Visual LLM, along with the speed of edge computing, and the reliability of real-time human oversight."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"diagram showing escalation technology",src:a(7354).Z,width:"600",height:"338"})),(0,n.kt)("h2",{id:"building-a-simple-visual-application"},"Building a simple visual application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"groundlight")," SDK. Requires python version 3.7 or higher. See ",(0,n.kt)("a",{parentName:"p",href:"#Prerequisites"},"prerequisites"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install groundlight\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://app.groundlight.ai/reef/my-account/api-tokens"},"groundlight web\napp")," to create an ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/api-tokens"},"API token"),". You will\nneed to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"GROUNDLIGHT_API_TOKEN")," environment variable to access the API."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"export GROUNDLIGHT_API_TOKEN=api_2GdXMflhJi6L_example\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a python script."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="ask.py"',title:'"ask.py"'},'from groundlight import Groundlight\n\ngl = Groundlight()\ndet = gl.get_or_create_detector(name="doorway", query="Is the doorway open?")\nimg = "./docs/static/img/doorway.jpg"  # Image can be a file or a Python object\nimage_query = gl.submit_image_query(detector=det, image=img)\nprint(f"The answer is {image_query.result}")\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run it!"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python ask.py\n")))))}u.isMDXComponent=!0},7354:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/escalation_diagram-05fa7abe4f95261f01a79faf002e0925.jpg"}}]);