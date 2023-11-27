"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[100],{8636:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var t=i(5893),o=i(1151);const s={},l="Installing on macOS",r={id:"installation/macos",title:"Installing on macOS",description:"This guide will help you install the Groundlight SDK on macOS. The Groundlight SDK requires Python 3.7 or higher.",source:"@site/docs/installation/2-macos.md",sourceDirName:"installation",slug:"/installation/macos",permalink:"/python-sdk/docs/installation/macos",draft:!1,unlisted:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/installation/2-macos.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing on Linux",permalink:"/python-sdk/docs/installation/linux"},next:{title:"Installing on Windows",permalink:"/python-sdk/docs/installation/windows"}},a={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Installation",id:"basic-installation",level:2},{value:"Installing Groundlight SDK",id:"installing-groundlight-sdk",level:3},{value:"Checking Groundlight SDK Version",id:"checking-groundlight-sdk-version",level:3},{value:"Upgrading Groundlight SDK",id:"upgrading-groundlight-sdk",level:3},{value:"Getting the right Python Version",id:"getting-the-right-python-version",level:2},{value:"Upgrading Python on MacOS",id:"upgrading-python-on-macos",level:3},{value:"Ready to go!",id:"ready-to-go",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"installing-on-macos",children:"Installing on macOS"}),"\n",(0,t.jsx)(e.p,{children:"This guide will help you install the Groundlight SDK on macOS. The Groundlight SDK requires Python 3.7 or higher."}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(e.p,{children:"Ensure that you have the following installed on your system:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Python 3.7 or higher"}),"\n",(0,t.jsx)(e.li,{children:"pip (Python package installer)"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"basic-installation",children:"Basic Installation"}),"\n",(0,t.jsx)(e.p,{children:"Assuming you have Python 3.7 or higher installed on your system, you can proceed with the following steps to install or upgrade the Groundlight SDK:"}),"\n",(0,t.jsx)(e.h3,{id:"installing-groundlight-sdk",children:"Installing Groundlight SDK"}),"\n",(0,t.jsx)(e.p,{children:"To install the Groundlight SDK using pip, run the following command in your terminal:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install groundlight\n"})}),"\n",(0,t.jsxs)(e.p,{children:["If you're also using ",(0,t.jsx)(e.code,{children:"python2"})," on your system, you might need to use ",(0,t.jsx)(e.code,{children:"pip3"})," instead:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip3 install groundlight\n"})}),"\n",(0,t.jsx)(e.p,{children:"The Groundlight SDK is now installed and ready for use."}),"\n",(0,t.jsx)(e.h3,{id:"checking-groundlight-sdk-version",children:"Checking Groundlight SDK Version"}),"\n",(0,t.jsx)(e.p,{children:"To check if the Groundlight SDK is installed and to display its version, you can use the following Python one-liner:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'python -c "import groundlight; print(groundlight.__version__)"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"upgrading-groundlight-sdk",children:"Upgrading Groundlight SDK"}),"\n",(0,t.jsx)(e.p,{children:"If you need to upgrade the Groundlight SDK to the latest version, use the following pip command:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install --upgrade groundlight\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Or, if you're using ",(0,t.jsx)(e.code,{children:"pip3"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip3 install --upgrade groundlight\n"})}),"\n",(0,t.jsx)(e.p,{children:'After upgrading, you can use the Python one-liner mentioned in the "Checking Groundlight SDK Version" section to verify that the latest version is now installed.'}),"\n",(0,t.jsx)(e.h2,{id:"getting-the-right-python-version",children:"Getting the right Python Version"}),"\n",(0,t.jsx)(e.p,{children:"To check your installed Python version, open a terminal and run:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"python --version\n"})}),"\n",(0,t.jsx)(e.p,{children:'If you see a version number starting with "3.7" or higher (e.g., "3.7.5" or "3.9.0"), you\'re good to go. If not, you might need to upgrade Python on your system.'}),"\n",(0,t.jsx)(e.h3,{id:"upgrading-python-on-macos",children:"Upgrading Python on MacOS"}),"\n",(0,t.jsxs)(e.p,{children:["Download the latest Python installer from the ",(0,t.jsx)(e.a,{href:"https://www.python.org/downloads/mac-osx/",children:"official Python website"})," and run it, or use ",(0,t.jsx)(e.a,{href:"https://brew.sh/",children:"Homebrew"})," to install Python:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"brew install python\n"})}),"\n",(0,t.jsxs)(e.p,{children:["After upgrading, verify the Python version by running ",(0,t.jsx)(e.code,{children:"python --version"})," or ",(0,t.jsx)(e.code,{children:"python3 --version"}),", as described earlier."]}),"\n",(0,t.jsx)(e.h2,{id:"ready-to-go",children:"Ready to go!"}),"\n",(0,t.jsxs)(e.p,{children:["You're now ready to start using the Groundlight SDK in your projects. For more information on using the SDK, refer to the ",(0,t.jsx)(e.a,{href:"/docs/getting-started/api-tokens",children:"API Tokens"})," and ",(0,t.jsx)(e.a,{href:"/docs/building-applications",children:"Building Applications"})," documentation pages."]})]})}function c(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>l});var t=i(7294);const o={},s=t.createContext(o);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);