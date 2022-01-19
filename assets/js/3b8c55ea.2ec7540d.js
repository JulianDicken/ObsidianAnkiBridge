"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return t?i.createElement(k,r(r({ref:n},p),{},{components:t})):i.createElement(k,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9803:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var i=t(7462),a=t(3366),l=(t(7294),t(3905)),r=["components"],o={sidebar_position:2},s="Installation",d={unversionedId:"installation",id:"installation",title:"Installation",description:"To get set up with AnkiBridge you will need to do the following:",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ObsidianAnkiBridge/installation",editUrl:"https://github.com/JeppeKlitgaard/ObsidianAnkiBridge/tree/master/docs/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AnkiBridge Introduction",permalink:"/ObsidianAnkiBridge/"},next:{title:"Demonstration",permalink:"/ObsidianAnkiBridge/demonstration"}},p=[{value:"Plugin installation",id:"plugin-installation",children:[{value:"Method 1: Community Plugins (recommended)",id:"method-1-community-plugins-recommended",children:[],level:3},{value:"Method 2: BRAT",id:"method-2-brat",children:[],level:3},{value:"Method 3: Manual Installation",id:"method-3-manual-installation",children:[],level:3}],level:2},{value:"Installing AnkiConnect",id:"installing-ankiconnect",children:[{value:"AnkiConnect Configuration",id:"ankiconnect-configuration",children:[],level:3}],level:2}],u={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To get set up with ",(0,l.kt)("strong",{parentName:"p"},"AnkiBridge")," you will need to do the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install the ",(0,l.kt)("strong",{parentName:"li"},"Obsididan")," plugin via ",(0,l.kt)("strong",{parentName:"li"},"one")," of the three methods described in ",(0,l.kt)("a",{parentName:"li",href:"#plugin-installation"},"Plugin Installation")," below"),(0,l.kt)("li",{parentName:"ol"},"Install the ",(0,l.kt)("strong",{parentName:"li"},"AnkiConnect")," plugin in ",(0,l.kt)("strong",{parentName:"li"},"Anki")," and set it up as described in ",(0,l.kt)("a",{parentName:"li",href:"#installing-ankiconnect"},"Installing AnkiConnect"))),(0,l.kt)("h2",{id:"plugin-installation"},"Plugin installation"),(0,l.kt)("h3",{id:"method-1-community-plugins-recommended"},"Method 1: Community Plugins (recommended)"),(0,l.kt)("p",null,"Install this plugin via the Obsidian Community Plugin interface"),(0,l.kt)("p",null,"You can activate this plugin within Obsidian by doing the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open Settings > Third-party plugin"),(0,l.kt)("li",{parentName:"ol"},"Make sure Safe mode is off"),(0,l.kt)("li",{parentName:"ol"},"Click Browse community plugins"),(0,l.kt)("li",{parentName:"ol"},'Search for "',(0,l.kt)("strong",{parentName:"li"},"AnkiBridge"),'"'),(0,l.kt)("li",{parentName:"ol"},"Click Install"),(0,l.kt)("li",{parentName:"ol"},"Once installed, close the community plugins window and activate the newly installed plugin")),(0,l.kt)("h3",{id:"method-2-brat"},"Method 2: BRAT"),(0,l.kt)("p",null,"If you have ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/TfTHacker/obsidian42-brat"},"Obsidian BRAT")," plugin installed you can install AnkiBridge by doing the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"Command Palette")),(0,l.kt)("li",{parentName:"ol"},"Select the ",(0,l.kt)("inlineCode",{parentName:"li"},"Obsidian42 - BRAT: Add a beta plugin for testing")," command"),(0,l.kt)("li",{parentName:"ol"},"Paste in ",(0,l.kt)("inlineCode",{parentName:"li"},"JeppeKlitgaard/ObsidianAnkiBridge")," into the text field"),(0,l.kt)("li",{parentName:"ol"},"Press ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Plugin")),(0,l.kt)("li",{parentName:"ol"},"Activate the plugin now found under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Settings \u2192 Community Plugins")," menu")),(0,l.kt)("h3",{id:"method-3-manual-installation"},"Method 3: Manual Installation"),(0,l.kt)("p",null,"Alternatively you can do a manual installation:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the latest ",(0,l.kt)("inlineCode",{parentName:"li"},"ObsidianAnkiBridge-X.Y.Z.zip")," from GitHub releases."),(0,l.kt)("li",{parentName:"ol"},"Create a new folder named ",(0,l.kt)("inlineCode",{parentName:"li"},"ObsidianAnkiBridge")),(0,l.kt)("li",{parentName:"ol"},"Extract the files within the zip file into ",(0,l.kt)("inlineCode",{parentName:"li"},"ObsidianAnkiBridge")," folder"),(0,l.kt)("li",{parentName:"ol"},"Place the folder in your .obsidian/plugins directory"),(0,l.kt)("li",{parentName:"ol"},"Reload plugins (the easiest way is just restarting Obsidian)"),(0,l.kt)("li",{parentName:"ol"},"Activate the plugin as normal.")),(0,l.kt)("h2",{id:"installing-ankiconnect"},"Installing AnkiConnect"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://ankiweb.net/shared/info/2055492159"},"AnkiConnect")," on Anki")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Tools > Add-ons -> Get Add-ons...")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Paste the code ",(0,l.kt)("strong",{parentName:"p"},"2055492159")," > Ok")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the plugin > Config > Paste the configuration below"))),(0,l.kt)("h3",{id:"ankiconnect-configuration"},"AnkiConnect Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apiKey": null,\n    "apiLogPath": null,\n    "webBindAddress": "127.0.0.1",\n    "webBindPort": 8765,\n    "webCorsOrigin": "http://localhost",\n    "webCorsOriginList": [\n        "http://localhost",\n        "app://obsidian.md"\n    ]\n}\n')))}c.isMDXComponent=!0}}]);