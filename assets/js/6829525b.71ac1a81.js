"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Installing on Arduino",l={unversionedId:"installation/arduino",id:"installation/arduino",title:"Installing on Arduino",description:"The Arduino platform is significantly different from the other platforms listed, and as a result, it cannot use the Groundlight SDK directly since it doesn't support standard Python. However, you can still use Groundlight's services with Arduino devices by following an alternative approach.",source:"@site/docs/installation/6-arduino.md",sourceDirName:"installation",slug:"/installation/arduino",permalink:"/python-sdk/docs/installation/arduino",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/installation/6-arduino.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing on NVIDIA Jetson",permalink:"/python-sdk/docs/installation/nvidia-jetson"},next:{title:"Optional libraries",permalink:"/python-sdk/docs/installation/optional-libraries"}},s={},u=[{value:"Additional Arduino Resources",id:"additional-arduino-resources",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-on-arduino"},"Installing on Arduino"),(0,o.kt)("p",null,"The Arduino platform is significantly different from the other platforms listed, and as a result, it cannot use the Groundlight SDK directly since it doesn't support standard Python. However, you can still use Groundlight's services with Arduino devices by following an alternative approach."),(0,o.kt)("p",null,"We have created a dedicated example repository that demonstrates how to use Groundlight with an ESP32-CAM module, which is compatible with Arduino IDE. The repository contains a complete end-to-end example, including integration with the Groundlight services. This example is written in C code and directly calls the Groundlight API by making HTTPS requests."),(0,o.kt)("p",null,"To get started, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/groundlight/esp32cam"},"GitHub repository")," and follow the instructions provided in the README file. This example will guide you through setting up your Arduino-compatible device to work with Groundlight's services, even though the standard SDK isn't directly applicable to the Arduino platform."),(0,o.kt)("p",null,"Keep in mind that this example is specifically tailored for the ESP32-CAM module and works well with M5Stack ESP32 Camera, ESP32CAM, and likely others. You may need to verify and update the pinouts for other Arduino-compatible devices. Some hardware devices are more reliable than others, and the software makes regular attempts to reboot as necessary, which often gets things going again."),(0,o.kt)("p",null,"If you need assistance or have questions about integrating Groundlight with Arduino, please consider opening an issue on the GitHub repository or reaching out to our ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@groundlight.ai"},"support team"),"."),(0,o.kt)("h2",{id:"additional-arduino-resources"},"Additional Arduino Resources"),(0,o.kt)("p",null,"To learn more about Arduino and expand your knowledge, you can explore the following resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino Official Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playground.arduino.cc/"},"Arduino Playground")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.arduino.cc/"},"Arduino Forum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.esp32.com/"},"ESP32 Community Forum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/"},"Adafruit Learning System"))),(0,o.kt)("p",null,"These resources provide extensive documentation, tutorials, and community support for Arduino enthusiasts and developers."))}c.isMDXComponent=!0}}]);