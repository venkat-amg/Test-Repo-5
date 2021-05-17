(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(95)),i={id:"faq",title:"FAQ",sidebar_position:4},l={unversionedId:"guides/faq",id:"guides/faq",isDocsHomePage:!1,title:"FAQ",description:"Upgrade Flutter Channel",source:"@site/docs/guides/faq.md",sourceDirName:"guides",slug:"/guides/faq",permalink:"/docs/guides/faq",editUrl:"https://github.com/leoafarias/fvm/edit/master/doc/docs/guides/faq.md",version:"current",sidebarPosition:4,frontMatter:{id:"faq",title:"FAQ",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Project Flavors",permalink:"/docs/guides/project_flavors"},next:{title:"Custom Flutter Version",permalink:"/docs/advanced/custom_version"}},s=[{value:"Upgrade Flutter Channel",id:"upgrade-flutter-channel",children:[]},{value:"Monorepo support",id:"monorepo-support",children:[]},{value:"Cannot install latest version of FVM",id:"cannot-install-latest-version-of-fvm",children:[]},{value:"Commands run twice on Windows",id:"commands-run-twice-on-windows",children:[]},{value:"Invalid kernel binary or invalid sdk hash when running FVM",id:"invalid-kernel-binary-or-invalid-sdk-hash-when-running-fvm",children:[]},{value:"Environment variables order for Windows in PATH",id:"environment-variables-order-for-windows-in-path",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"upgrade-flutter-channel"},"Upgrade Flutter Channel"),Object(o.b)("p",null,"As described in our ",Object(o.b)("a",{parentName:"p",href:"../getting_started/overview/#principles"},"Principles")," FVM does not override standard Flutter behavior. Therefore to upgrade a channel you will have to use standard ",Object(o.b)("inlineCode",{parentName:"p"},"flutter upgrade"),". You can find more about it in the ",Object(o.b)("a",{parentName:"p",href:"/docs/guides/running_flutter"},"Running Flutter")," section."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"monorepo-support"},"Monorepo support"),Object(o.b)("p",null,"Suppose you have a nested package(s) that you want to share the same Flutter version. You can set up the FVM config at the root of the monorepo."),Object(o.b)("p",null,"FVM will do an ancestor look-up to find the config and use it as the default."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"cannot-install-latest-version-of-fvm"},"Cannot install latest version of FVM"),Object(o.b)("p",null,"When running ",Object(o.b)("inlineCode",{parentName:"p"},"pub global activate fvm"),", pub will grab the latest FVM version that is compatible with the installed dart-sdk. Upgrade to the latest version of the Dart, and run the command again. Go to ",Object(o.b)("a",{parentName:"p",href:"https://dart.dev/get-dart"},"https://dart.dev/get-dart")," for more information."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"commands-run-twice-on-windows"},"Commands run twice on Windows"),Object(o.b)("p",null,"This happens due to a pub issue ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dart-lang/pub/issues/2934"},"https://github.com/dart-lang/pub/issues/2934"),". To avoid this issue from happening make sure you PATH is in the following order. ",Object(o.b)("a",{parentName:"p",href:"#environment-variables-order-for-windows-in-path"},"Please read the following"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"invalid-kernel-binary-or-invalid-sdk-hash-when-running-fvm"},"Invalid kernel binary or invalid sdk hash when running FVM"),Object(o.b)("p",null,"There are a few reasons this can happen. However it means that the FVM snapshot is not compatible with the Dart version that is installed."),Object(o.b)("p",null,"Please do the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On Windows make sure your env variables are in the following order as described ",Object(o.b)("a",{parentName:"li",href:"#environment-variables-order-for-windows-in-path"},"here"),"."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"dart pub cache repair"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"environment-variables-order-for-windows-in-path"},"Environment variables order for Windows in PATH"),Object(o.b)("p",null,"Flutter comes with Dart embedded. Because of that you can find some conflicts when running standalone Dart and Flutter together. Here is a suggestion of what we found to be the correct order of dependencies to avoid issues."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Pub Cache for global packages"),Object(o.b)("li",{parentName:"ol"},"Dart SDK (if installed outside of Flutter)"),Object(o.b)("li",{parentName:"ol"},"Flutter SDK")),Object(o.b)("p",null,"It should look like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"C:\\Users\\<user>\\AppData\\Roaming\\Pub\\Cache\\bin\nC:\\src\\flutter\\bin\\cache\\dart-sdk\\bin\nC:\\src\\flutter\\bin\n")))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);