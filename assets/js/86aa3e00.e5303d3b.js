"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[605],{9121:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var t=i(5893),s=i(1151);const o={},l="Installing on Linux",r={id:"installation/linux",title:"Installing on Linux",description:"This guide will help you install the Groundlight SDK on Linux. The Groundlight SDK requires Python 3.7 or higher.",source:"@site/docs/installation/1-linux.md",sourceDirName:"installation",slug:"/installation/linux",permalink:"/python-sdk/docs/installation/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/installation/1-linux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/python-sdk/docs/installation/"},next:{title:"Installing on macOS",permalink:"/python-sdk/docs/installation/macos"}},a={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Installation",id:"basic-installation",level:2},{value:"Installing Groundlight SDK",id:"installing-groundlight-sdk",level:3},{value:"Checking Groundlight SDK Version",id:"checking-groundlight-sdk-version",level:3},{value:"Upgrading Groundlight SDK",id:"upgrading-groundlight-sdk",level:3},{value:"Getting the right Python Version",id:"getting-the-right-python-version",level:2},{value:"Upgrading Python on Linux",id:"upgrading-python-on-linux",level:3},{value:"Special note about Ubuntu 18.04",id:"special-note-about-ubuntu-1804",level:3},{value:"Ready to go!",id:"ready-to-go",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"installing-on-linux",children:"Installing on Linux"}),"\n",(0,t.jsx)(e.p,{children:"This guide will help you install the Groundlight SDK on Linux. The Groundlight SDK requires Python 3.7 or higher."}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(e.p,{children:"Ensure that you have the following installed on your system:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Python 3.7 or higher"}),"\n",(0,t.jsx)(e.li,{children:"pip (Python package installer)"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"basic-installation",children:"Basic Installation"}),"\n",(0,t.jsx)(e.p,{children:"Assuming you have Python 3.7 or higher installed on your system, you can proceed with the following steps to install or upgrade the Groundlight SDK:"}),"\n",(0,t.jsx)(e.h3,{id:"installing-groundlight-sdk",children:"Installing Groundlight SDK"}),"\n",(0,t.jsx)(e.p,{children:"To install the Groundlight SDK using pip, run the following command in your terminal:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install groundlight\n"})}),"\n",(0,t.jsxs)(e.p,{children:["If you're also using ",(0,t.jsx)(e.code,{children:"python2"})," on your system, you might need to use ",(0,t.jsx)(e.code,{children:"pip3"})," instead:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip3 install groundlight\n"})}),"\n",(0,t.jsx)(e.p,{children:"The Groundlight SDK is now installed and ready for use."}),"\n",(0,t.jsx)(e.h3,{id:"checking-groundlight-sdk-version",children:"Checking Groundlight SDK Version"}),"\n",(0,t.jsx)(e.p,{children:"To check if the Groundlight SDK is installed and to display its version, you can use the following Python one-liner:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'python -c "import groundlight; print(groundlight.__version__)"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"upgrading-groundlight-sdk",children:"Upgrading Groundlight SDK"}),"\n",(0,t.jsx)(e.p,{children:"If you need to upgrade the Groundlight SDK to the latest version, use the following pip command:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install --upgrade groundlight\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Or, if you're using ",(0,t.jsx)(e.code,{children:"pip3"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip3 install --upgrade groundlight\n"})}),"\n",(0,t.jsx)(e.p,{children:'After upgrading, you can use the Python one-liner mentioned in the "Checking Groundlight SDK Version" section to verify that the latest version is now installed.'}),"\n",(0,t.jsx)(e.h2,{id:"getting-the-right-python-version",children:"Getting the right Python Version"}),"\n",(0,t.jsx)(e.p,{children:"To check your installed Python version, open a terminal and run:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"python --version\n"})}),"\n",(0,t.jsx)(e.p,{children:'If you see a version number starting with "3.7" or higher (e.g., "3.7.5" or "3.9.0"), you\'re good to go. If not, you might need to upgrade Python on your system.'}),"\n",(0,t.jsx)(e.h3,{id:"upgrading-python-on-linux",children:"Upgrading Python on Linux"}),"\n",(0,t.jsx)(e.p,{children:"Use your distribution's package manager to install the latest Python version:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"For Ubuntu or Debian-based systems:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt install python3\n"})}),"\n",(0,t.jsx)(e.p,{children:"(For Ubuntu 18.04 see note below.)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"For Fedora-based systems:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo dnf install python3\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"For Arch Linux:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S python\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["After upgrading, verify the Python version by running ",(0,t.jsx)(e.code,{children:"python --version"})," or ",(0,t.jsx)(e.code,{children:"python3 --version"}),", as described earlier."]}),"\n",(0,t.jsx)(e.h3,{id:"special-note-about-ubuntu-1804",children:"Special note about Ubuntu 18.04"}),"\n",(0,t.jsx)(e.p,{children:"Ubuntu 18.04 still uses python 3.6 by default, which is end-of-life. We generally recommend using python 3.10. If you know how to install py3.10, please go ahead. But the easiest version of python 3 to use with Ubuntu 18.04 is python 3.8, which can be installed as follows without adding any extra repositories:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# Prepare Ubuntu to install things\nsudo apt-get update\n# Install the basics\nsudo apt-get install -y python3.8 python3.8-distutils curl\n# Configure `python3` to run python3.8 by default\nsudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 10\n# Download and install pip3.8\ncurl https://bootstrap.pypa.io/get-pip.py > /tmp/get-pip.py\nsudo python3.8 /tmp/get-pip.py\n# Configure `pip3` to run pip3.8\nsudo update-alternatives --install /usr/bin/pip3 pip3 $(which pip3.8) 10\n# Now we can install Groundlight!\npip3 install groundlight\n"})}),"\n",(0,t.jsx)(e.h2,{id:"ready-to-go",children:"Ready to go!"}),"\n",(0,t.jsxs)(e.p,{children:["You're now ready to start using the Groundlight SDK in your projects. For more information on using the SDK, refer to the ",(0,t.jsx)(e.a,{href:"/docs/getting-started/api-tokens",children:"API Tokens"})," and ",(0,t.jsx)(e.a,{href:"/docs/building-applications",children:"Building Applications"})," documentation pages."]})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>l});var t=i(7294);const s={},o=t.createContext(s);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);