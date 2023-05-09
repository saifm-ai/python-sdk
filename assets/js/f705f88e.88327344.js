"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},l="Installing on NVIDIA Jetson",a={unversionedId:"installation/nvidia-jetson",id:"installation/nvidia-jetson",title:"Installing on NVIDIA Jetson",description:"This guide will help you install the Groundlight SDK on NVIDIA Jetson devices. The Groundlight SDK requires Python 3.7 or higher.",source:"@site/docs/installation/5-nvidia-jetson.md",sourceDirName:"installation",slug:"/installation/nvidia-jetson",permalink:"/python-sdk/docs/installation/nvidia-jetson",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/installation/5-nvidia-jetson.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing on Raspberry Pi",permalink:"/python-sdk/docs/installation/raspberry-pi"},next:{title:"Installing on Arduino",permalink:"/python-sdk/docs/installation/arduino"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Installation",id:"basic-installation",level:2},{value:"Installing Groundlight SDK",id:"installing-groundlight-sdk",level:3},{value:"Using RTSP Streams",id:"using-rtsp-streams",level:2},{value:"Sample application",id:"sample-application",level:2},{value:"Ready to go!",id:"ready-to-go",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-on-nvidia-jetson"},"Installing on NVIDIA Jetson"),(0,i.kt)("p",null,"This guide will help you install the Groundlight SDK on NVIDIA Jetson devices. The Groundlight SDK requires Python 3.7 or higher."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Ensure that you have the following installed on your NVIDIA Jetson:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python 3.7 or higher"),(0,i.kt)("li",{parentName:"ul"},"pip (Python package installer)")),(0,i.kt)("h2",{id:"basic-installation"},"Basic Installation"),(0,i.kt)("p",null,"Assuming you have Python 3.7 or higher installed on your NVIDIA Jetson, you can proceed with the following steps to install or upgrade the Groundlight SDK:"),(0,i.kt)("h3",{id:"installing-groundlight-sdk"},"Installing Groundlight SDK"),(0,i.kt)("p",null,"To install the Groundlight SDK using pip, run the following command in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install groundlight\n")),(0,i.kt)("p",null,"An ARM-compatible version will automatically get installed. The Groundlight SDK is now installed and ready for use."),(0,i.kt)("h2",{id:"using-rtsp-streams"},"Using RTSP Streams"),(0,i.kt)("p",null,"If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," installed on your NVIDIA Jetson, you can even just run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run groundlight/stream\n")),(0,i.kt)("p",null,"as we publish an ARM version of our streaming application to Docker Hub."),(0,i.kt)("h2",{id:"sample-application"},"Sample application"),(0,i.kt)("p",null,"For a complete end-to-end example of running on an NVIDIA Jetson, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/groundlight/raspberry-pi-door-lock"},"this GitHub repo"),"."),(0,i.kt)("h2",{id:"ready-to-go"},"Ready to go!"),(0,i.kt)("p",null,"You're now ready to start using the Groundlight SDK in your projects. For more information on using the SDK, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/api-tokens"},"API Tokens")," and [Building Applications"))}c.isMDXComponent=!0}}]);