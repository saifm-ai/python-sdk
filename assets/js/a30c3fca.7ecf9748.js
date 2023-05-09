"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,u=g["".concat(l,".").concat(d)]||g[d]||m[d]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Grabbing Images",s={unversionedId:"building-applications/grabbing-images",id:"building-applications/grabbing-images",title:"Grabbing Images",description:"Groundlight's SDK accepts images in many popular formats, including PIL, OpenCV, and numpy arrays.",source:"@site/docs/building-applications/1-grabbing-images.md",sourceDirName:"building-applications",slug:"/building-applications/grabbing-images",permalink:"/python-sdk/docs/building-applications/grabbing-images",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/building-applications/1-grabbing-images.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building Applications",permalink:"/python-sdk/docs/building-applications/"},next:{title:"Working with Detectors",permalink:"/python-sdk/docs/building-applications/working-with-detectors"}},l={},p=[{value:"PIL",id:"pil",level:2},{value:"OpenCV",id:"opencv",level:2},{value:"Numpy",id:"numpy",level:2},{value:"Channel order: BGR vs RGB",id:"channel-order-bgr-vs-rgb",level:3},{value:"Framegrab",id:"framegrab",level:2}],c={toc:p},g="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(g,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grabbing-images"},"Grabbing Images"),(0,a.kt)("p",null,"Groundlight's SDK accepts images in many popular formats, including PIL, OpenCV, and numpy arrays.  "),(0,a.kt)("h2",{id:"pil"},"PIL"),(0,a.kt)("p",null,"The Groundlight SDK can accept PIL images directly in ",(0,a.kt)("inlineCode",{parentName:"p"},"submit_image_query"),".  Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from groundlight import Groundlight\nfrom PIL import Image\n\ngl = Groundlight()\ndet = gl.get_or_create_detector(name="path-clear", query="Is the path clear?")\npil_img = Image.open("./docs/static/img/doorway.jpg")\ngl.submit_image_query(det, pil_img)\n')),(0,a.kt)("h2",{id:"opencv"},"OpenCV"),(0,a.kt)("p",null,"OpenCV is a popular image processing library, with many utilities for working with images.\nOpenCV images are stored as numpy arrays.  (Note they are stored in BGR order, not RGB order, but as of Groundlight SDK v0.8 this is the expected order.)\nOpenCV's images can be send directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"submit_image_query")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"import cv2\n\ncam = cv2.VideoCapture(0)  # Initialize camera (0 is the default index)\n\n_, frame = cam.read()  # Capture one frame\ngl.submit_image_query(detector, frame)  # Send the frame to Groundlight\ncap.release()  # Release the camera\n")),(0,a.kt)("h2",{id:"numpy"},"Numpy"),(0,a.kt)("p",null,"The Groundlight SDK can accept images as ",(0,a.kt)("inlineCode",{parentName:"p"},"numpy")," arrays. They should be in the standard HWN format in BGR color order, matching OpenCV standards.\nPixel values should be from 0-255 (not 0.0-1.0 as floats). So ",(0,a.kt)("inlineCode",{parentName:"p"},"uint8")," data type is preferable since it saves memory."),(0,a.kt)("p",null,"Here's sample code to create an 800x600 random image in numpy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"import numpy as np\n\nnp_img = np.random.uniform(low=0, high=255, size=(600, 800, 3)).astype(np.uint8)\n# Note: channel order is interpretted as BGR not RGB\ngl.submit_image_query(detector, np_img)\n")),(0,a.kt)("h3",{id:"channel-order-bgr-vs-rgb"},"Channel order: BGR vs RGB"),(0,a.kt)("p",null,"Groundlight expects images in BGR order, because this is standard for OpenCV, which uses numpy arrays as image storage.\n(OpenCV uses BGR because it was originally developed decades ago for compatibility with the BGR color format used by many cameras and image processing hardware at the time of its creation.)\nMost other image libraries use RGB order, so if you are using images as numpy arrays which did not originate from OpenCV you likely need to reverse the channel order before sending the images to Groundlight.\nNote this change was made in v0.8 of the Groundlight SDK - in previous versions, RGB order was expected.  "),(0,a.kt)("p",null,"If you have an RGB array, you must reverse the channel order before sending it to Groundlight, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"# Convert numpy image in RGB channel order to BGR order\nbgr_img = rgb_img[:, :, ::-1]\n")),(0,a.kt)("p",null,"The difference can be surprisingly subtle when red and blue get swapped.  Often images just look a little off, but sometimes they look very wrong."),(0,a.kt)("p",null,"Here's an example of a natural-scene image where you might think the color balance is just off:\n",(0,a.kt)("img",{alt:"Correct color order",src:n(2e3).Z,width:"800",height:"600"}),"\n",(0,a.kt)("img",{alt:"Swapped color channels",src:n(9337).Z,width:"800",height:"600"})),(0,a.kt)("p",null,"In industrial settings, the difference can be almost impossible to detect without prior knowledge of the scene:\n",(0,a.kt)("img",{alt:"Correct color order",src:n(6033).Z,width:"1418",height:"979"}),"\n",(0,a.kt)("img",{alt:"Swapped color channels",src:n(2239).Z,width:"1418",height:"979"})),(0,a.kt)("h2",{id:"framegrab"},"Framegrab"),(0,a.kt)("p",null,"For a unified interface to many different kinds of image sources, see the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/framegrab/"},"framegrab library"),".\nFramegrab is still an early work in progress, but has many useful features for working with cameras and other image sources.  Framegrab provides a single interface for many different kinds of image sources, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB cameras"),(0,a.kt)("li",{parentName:"ul"},"IP cameras"),(0,a.kt)("li",{parentName:"ul"},"Video files"),(0,a.kt)("li",{parentName:"ul"},"Image files")))}m.isMDXComponent=!0},2239:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cnc-gripper-bgr-3f62a203a84000db8dffb8b542aa8706.jpg"},6033:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cnc-gripper-4e667290978a62db9edcb5859e42da1b.jpg"},9337:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/michonne-bgr-b7e5ce1b0ea7a8fad1386bb13f0b13cb.jpg"},2e3:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/michonne-d62a9f110b7dab2a04b1dca75c5cf39c.jpg"}}]);