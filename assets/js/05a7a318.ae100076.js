"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[626],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="\u2699 Processors",p={unversionedId:"processors",id:"processors",title:"\u2699 Processors",description:"Processors add additional features to your notes before sending it to Anki.",source:"@site/docs/41-processors.md",sourceDirName:".",slug:"/processors",permalink:"/ObsidianAnkiBridge/processors",editUrl:"https://github.com/JeppeKlitgaard/ObsidianAnkiBridge/tree/master/docs/docs/41-processors.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Blueprints",permalink:"/ObsidianAnkiBridge/blueprints"},next:{title:"\ud83d\udcc3 Notes",permalink:"/ObsidianAnkiBridge/notes"}},d=[{value:"Preprocessors",id:"preprocessors",children:[],level:2},{value:"Postprocessors",id:"postprocessors",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-processors"},"\u2699 Processors"),(0,a.kt)("p",null,"Processors add additional features to your notes before sending it to Anki."),(0,a.kt)("p",null,"Without them, you would just see the raw markdown text in your Anki notes!"),(0,a.kt)("p",null,"You don't need to concern yourself too much with these \u2013 just enable the ones\nthat you think you need."),(0,a.kt)("p",null,"Those interested can read more below."),(0,a.kt)("p",null,"The available processors are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Processor"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Functionality"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Debug"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pre"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"post")),(0,a.kt)("td",{parentName:"tr",align:null},"Outputs additional debugging information into the console")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Math"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pre")),(0,a.kt)("td",{parentName:"tr",align:null},"Turns Latex math equations into the required format for Anki")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Link"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"post")),(0,a.kt)("td",{parentName:"tr",align:null},"Turns Obsidian links into the proper URI-formatted links needed to access notes from Anki")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Media"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"post")),(0,a.kt)("td",{parentName:"tr",align:null},"Fetches and uploads media content (image, audio, and video) to Anki")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloze"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"post")),(0,a.kt)("td",{parentName:"tr",align:null},"Turns elements for which is has been configured into cloze deletion in Anki")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LinkToSource"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"post")),(0,a.kt)("td",{parentName:"tr",align:null},"Adds a link to the Anki note that takes the user back to the source file in Obsidian")))),(0,a.kt)("h2",{id:"preprocessors"},"Preprocessors"),(0,a.kt)("p",null,"Preprocessors are run sequentially on the raw Markdown text before the Markdown\nis converted into HTML using Obsidian's own Markdown renderer."),(0,a.kt)("h2",{id:"postprocessors"},"Postprocessors"),(0,a.kt)("p",null,"Postprocessors on the other hand are run sequentially on the HTML DOM tree\nafter the text has been rendered into HTML by the Obsidian renderer."),(0,a.kt)("p",null,"The final HTML tree is converted into a string and sent to Anki."))}c.isMDXComponent=!0}}]);