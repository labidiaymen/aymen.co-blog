(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,n=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(d,"canUseDOM",s),d}}},9230:function(e,t,r){"use strict";r.d(t,{L:function(){return m},M:function(){return T},P:function(){return w},S:function(){return M},_:function(){return s},a:function(){return i},b:function(){return l},g:function(){return u},h:function(){return c}});var n=r(7294),a=(r(4811),r(3384)),o=r.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function l(e,t,r,n,a){return void 0===a&&(a={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function u(e,t,r,n,a,o,s,c){var l={};o&&(l.backgroundColor=o,"fixed"===r?(l.width=n,l.height=a,l.backgroundColor=o,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);var u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}var d,p=["children"],f=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(f,i({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],g=function(e){var t=e.src,r=e.srcSet,a=e.loading,o=e.alt,c=void 0===o?"":o,l=e.shouldLoad,u=s(e,h);return n.createElement("img",i({},u,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:c}))},b=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,o=e.shouldLoad,c=void 0===o||o,l=s(e,y),u=l.sizes||(null==t?void 0:t.sizes),d=n.createElement(g,i({},l,t,{sizes:u,shouldLoad:c}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,sizes:u})})),d):d};g.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,r=s(e,v);return t?n.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(d=b.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var T=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=b.propTypes;var E,C,k=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:o().object.isRequired,alt:k},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],A=new Set,L=function(e){var t=e.as,a=void 0===t?"div":t,o=e.image,l=e.style,u=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,m=e.onLoad,h=e.onError,y=s(e,x),g=o.width,b=o.height,v=o.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(g,b,v),T=w.style,k=w.className,O=s(w,S),L=(0,n.useRef)(),j=(0,n.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);p&&(d=p);var P=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,g,b);return(0,n.useEffect)((function(){E||(E=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=L.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void A.add(j)):C&&A.has(j)?void 0:(E.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;L.current.innerHTML=n(i({isLoading:!0,isLoaded:A.has(j),image:o},y)),A.has(j)||(e=requestAnimationFrame((function(){L.current&&(t=a(L.current,j,A,l,f,m,h))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,n.useLayoutEffect)((function(){A.has(j)&&C&&(L.current.innerHTML=C(i({isLoading:A.has(j),isLoaded:A.has(j),image:o},y)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,n.createElement)(a,i({},O,{style:i({},T,l,{backgroundColor:u}),className:k+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(L,e):null}));j.propTypes=O,j.displayName="GatsbyImage";var P,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],N=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),R={src:o().string.isRequired,alt:k,width:N,height:N,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(P=j,function(e){var t=e.src,r=e.__imageData,a=e.__error,o=s(e,I);return a&&console.warn(a),r?n.createElement(P,i({image:r},o)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=R},4199:function(e,t,r){"use strict";var n=r(7029);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},3384:function(e,t,r){e.exports=r(4199)()},7029:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8568:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=r(9230),o=r(1597),i=function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex flex-row menu-header menu-bloc"},n.createElement("div",{className:"basis-1/4"},n.createElement(o.Link,{to:"/"},n.createElement(a.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",height:33,quality:95,alt:"Profile picture",__imageData:r(3227)}))),n.createElement("div",null,n.createElement("ul",{className:"flex flex-wrap mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium menu-list"},n.createElement("li",null,n.createElement(o.Link,{to:"/",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Home"))),n.createElement("li",null,n.createElement(o.Link,{to:"/javascript",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Blog"))),n.createElement("li",null,n.createElement(o.Link,{to:"/projects",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Projects")),n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"})),n.createElement("li",null,n.createElement(o.Link,{to:"/events",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Events")),n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"})),n.createElement("li",null,n.createElement(o.Link,{to:"/thoughts",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Thoughts")),n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"})),n.createElement("li",null,n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"},"Speaking")),n.createElement("li",null,n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"},"About"))))))},s=function(e){var t,r=e.location,a=e.children,o="/"===r.pathname;return t=n.createElement(i,null),n.createElement("div",{className:"global-wrapper","data-is-root-path":o},n.createElement("header",{className:"global-header"},t),n.createElement("main",null,a),n.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,a,o,i,s=r(7294),c=r(5697),l=r.n(c),u=r(4839),d=r.n(u),p=r(2993),f=r.n(p),m=r(6494),h=r.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",k="innerHTML",O="itemprop",x="name",S="property",A="rel",L="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",_="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,v.TITLE),r=Q(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,I);return t||n||void 0},Z=function(e){return Q(e,R)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||r===A&&"canonical"===e[r].toLowerCase()||c===A&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==k&&s!==T&&s!==O||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],c=h()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;ce(v.BODY,n),ce(v.HTML,a),se(d,p);var f={baseTag:le(v.BASE,r),linkTags:le(v.LINK,o),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,s),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=f[e].oldTags)})),t&&t(),c(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(z):r.getAttribute(z)!==i.join(",")&&r.setAttribute(z,i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(z,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,a=de(r,n),[s.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case g:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===k||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(g,a,n),link:pe(v.LINK,o,n),meta:pe(v.META,i,n),noscript:pe(v.NOSCRIPT,s,n),script:pe(v.SCRIPT,c,n),style:pe(v.STYLE,l,n),title:pe(v.TITLE,{title:d,titleAttributes:p},n)}},me=d()((function(e){return{baseTag:G([E,j],e),bodyAttributes:$(y,e),defer:Q(e,N),encode:Q(e,_),htmlAttributes:$(g,e),linkTags:J(v.LINK,[A,E],e),metaTags:J(v.META,[x,w,C,S,O],e),noscriptTags:J(v.NOSCRIPT,[k],e),onChangeClientState:Z(e),scriptTags:J(v.SCRIPT,[L,k],e),styleTags:J(v.STYLE,[T],e),title:K(e),titleAttributes:$(b,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),fe)((function(){return null})),he=(a=me,i=o=function(e){function t(){return F(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return B({},a,((t={})[n.type]=i,t.titleAttributes=B({},o),t));case v.BODY:return B({},a,{bodyAttributes:B({},o)});case v.HTML:return B({},a,{htmlAttributes:B({},o)})}return B({},a,((r={})[n.type]=B({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(W(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=B({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(a,n)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=r(1597),ge=function(e){var t,r,n,a=e.description,o=e.lang,i=e.meta,c=e.title,l=(0,ye.useStaticQuery)("2841359383").site,u=a||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return s.createElement(he,{htmlAttributes:{lang:o},title:c,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i)})};ge.defaultProps={lang:"en",meta:[],description:""};var be=ge},3227:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/775723a96003cddb08c6d757e61c93da/09c57/profile-pic.png","srcSet":"/static/775723a96003cddb08c6d757e61c93da/09c57/profile-pic.png 81w,\\n/static/775723a96003cddb08c6d757e61c93da/66fe9/profile-pic.png 162w","sizes":"81px"},"sources":[{"srcSet":"/static/775723a96003cddb08c6d757e61c93da/3a80b/profile-pic.avif 81w,\\n/static/775723a96003cddb08c6d757e61c93da/d8231/profile-pic.avif 162w","type":"image/avif","sizes":"81px"},{"srcSet":"/static/775723a96003cddb08c6d757e61c93da/af3b7/profile-pic.webp 81w,\\n/static/775723a96003cddb08c6d757e61c93da/32ac6/profile-pic.webp 162w","type":"image/webp","sizes":"81px"}]},"width":81,"height":33}')}}]);
//# sourceMappingURL=commons-892d2294017755a7f8f1.js.map