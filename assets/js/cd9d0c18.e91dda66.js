"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[567],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,y=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2304:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={},u="\ud83e\udd16 Auto-Sync",s={unversionedId:"advanced-usage/auto-sync",id:"advanced-usage/auto-sync",title:"\ud83e\udd16 Auto-Sync",description:"You can set up auto-sync by binding the AnkiBridge: Sync active file with Anki (Silent)",source:"@site/docs/15-advanced-usage/10-auto-sync.md",sourceDirName:"15-advanced-usage",slug:"/advanced-usage/auto-sync",permalink:"/ObsidianAnkiBridge/advanced-usage/auto-sync",editUrl:"https://github.com/JeppeKlitgaard/ObsidianAnkiBridge/tree/master/docs/docs/15-advanced-usage/10-auto-sync.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddae Basic Usage",permalink:"/ObsidianAnkiBridge/basic-usage"},next:{title:"\u2728 Features",permalink:"/ObsidianAnkiBridge/features"}},p=[],l={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-auto-sync"},"\ud83e\udd16 Auto-Sync"),(0,i.kt)("p",null,"You can set up auto-sync by binding the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnkiBridge: Sync active file with Anki (Silent)"),"\ncommand to ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL + S"),"."),(0,i.kt)("p",null,"If you want to set up multiple things to happen when saving (i.e. also saving the document),\nyou can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/phibr0/obsidian-macros"},"Macros")," plugin"))}d.isMDXComponent=!0}}]);