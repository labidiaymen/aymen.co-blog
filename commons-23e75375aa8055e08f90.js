(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!i(e[s],o[s]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",c),d}}},9230:function(e,t,r){"use strict";r.d(t,{G:function(){return P},L:function(){return g},M:function(){return E},P:function(){return T},S:function(){return q},_:function(){return c},a:function(){return o},b:function(){return u},c:function(){return l},g:function(){return d},h:function(){return s}});var n=r(7294),a=(r(4811),r(3384)),i=r.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var l=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,i,c,s){var l={};i&&(l.backgroundColor=i,"fixed"===r?(l.width=n,l.height=a,l.backgroundColor=i,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),c&&(l.objectFit=c),s&&(l.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}var p,f=["children"],m=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,r=c(e,f);return n.createElement(n.Fragment,null,n.createElement(m,o({},r)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,r=e.srcSet,a=e.loading,i=e.alt,s=void 0===i?"":i,l=e.shouldLoad,u=c(e,y);return n.createElement("img",o({},u,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:s}))},v=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,l=c(e,h),u=l.sizes||(null==t?void 0:t.sizes),d=n.createElement(b,o({},l,t,{sizes:u,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};b.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],T=function(e){var t=e.fallback,r=c(e,w);return t?n.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};T.displayName="Placeholder",T.propTypes={fallback:a.string,sources:null==(p=v.propTypes)?void 0:p.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(v,o({},e)),n.createElement("noscript",null,n.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,x,k=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:k},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],L=new Set,j=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,l=e.style,u=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,m=e.onLoad,g=e.onError,y=c(e,O),h=i.width,b=i.height,v=i.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(h,b,v),T=w.style,E=w.className,k=c(w,A),S=(0,n.useRef)(),j=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var P=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,h,b);return(0,n.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=S.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void L.add(j)):x&&L.has(j)?void 0:(C.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;S.current.innerHTML=n(o({isLoading:!0,isLoaded:L.has(j),image:i},y)),L.has(j)||(e=requestAnimationFrame((function(){S.current&&(t=a(S.current,j,L,l,f,m,g))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){L.has(j)&&x&&(S.current.innerHTML=x(o({isLoading:L.has(j),isLoaded:L.has(j),image:i},y)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(a,o({},k,{style:o({},T,l,{backgroundColor:u}),className:E+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},P=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));P.propTypes=S,P.displayName="GatsbyImage";var I,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],_=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:k,width:_,height:_,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(I=P,function(e){var t=e.src,r=e.__imageData,a=e.__error,i=c(e,N);return a&&console.warn(a),r?n.createElement(I,o({image:r},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=M},4199:function(e,t,r){"use strict";var n=r(7029);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},3384:function(e,t,r){e.exports=r(4199)()},7029:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8568:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=r(9230),i=r(1597),o=function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex flex-row menu-header menu-bloc"},n.createElement("div",{className:"basis-1/4 self-center"},n.createElement(i.Link,{to:"/"},n.createElement(a.S,{className:"hidden md:block",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",height:33,quality:95,alt:"Profile picture",__imageData:r(3227)}),n.createElement(a.S,{className:"md:hidden ",layout:"fixed",formats:["auto","webp","avif"],src:"../images/logo-aymen-labidi-smile.png",height:53,quality:95,alt:"Profile picture",__imageData:r(5129)}))),n.createElement("div",null,n.createElement("ul",{className:"flex flex-wrap mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium menu-list"},n.createElement("li",null,n.createElement(i.Link,{to:"/",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Home"))),n.createElement("li",null,n.createElement(i.Link,{to:"/javascript",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Blog"))),n.createElement("li",null,n.createElement(i.Link,{to:"/projects",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Projects")),n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"})),n.createElement("li",null,n.createElement(i.Link,{to:"/events",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Events")),n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"})),n.createElement("li",null,n.createElement(i.Link,{to:"/thoughts",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"Thoughts")),n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"})),n.createElement("li",null,n.createElement(i.Link,{to:"/pages/about/",className:"block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"},n.createElement("span",null,"About")),n.createElement("a",{className:"block py-2 pr-4 pl-3 text-gray-700 md:hover:font-extrabold md:border-0  md:p-0 dark:text-gray-400  md:dark:hover:bg-transparent dark:border-gray-700"}))))))},c=function(e){var t,r=e.location,a=e.children,i="/"===r.pathname;return t=n.createElement(o,null),n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement("header",{className:"global-header"},t),n.createElement("main",null,a),n.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,a,i,o,c=r(7294),s=r(5697),l=r.n(s),u=r(4839),d=r.n(u),p=r(2993),f=r.n(p),m=r(6494),g=r.n(m),y="bodyAttributes",h="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",x="innerHTML",k="itemprop",S="name",O="property",A="rel",L="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",_="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,v.TITLE),r=Q(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,I);return t||n||void 0},G=function(e){return Q(e,R)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||r===A&&"canonical"===e[r].toLowerCase()||s===A&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==x&&c!==T&&c!==k||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=g()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;se(v.BODY,n),se(v.HTML,a),ce(d,p);var f={baseTag:le(v.BASE,r),linkTags:le(v.LINK,i),metaTags:le(v.META,o),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=f[e].oldTags)})),t&&t(),s(e,m,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(v.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute(z):r.getAttribute(z)!==o.join(",")&&r.setAttribute(z,o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(z,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,a=de(r,n),[c.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case h:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===x||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===x||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(h,a,n),link:pe(v.LINK,i,n),meta:pe(v.META,o,n),noscript:pe(v.NOSCRIPT,c,n),script:pe(v.SCRIPT,s,n),style:pe(v.STYLE,l,n),title:pe(v.TITLE,{title:d,titleAttributes:p},n)}},me=d()((function(e){return{baseTag:$([E,j],e),bodyAttributes:Z(y,e),defer:Q(e,N),encode:Q(e,_),htmlAttributes:Z(h,e),linkTags:J(v.LINK,[A,E],e),metaTags:J(v.META,[S,w,C,O,k],e),noscriptTags:J(v.NOSCRIPT,[x],e),onChangeClientState:G(e),scriptTags:J(v.SCRIPT,[L,x],e),styleTags:J(v.STYLE,[T],e),title:K(e),titleAttributes:Z(b,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),fe)((function(){return null})),ge=(a=me,o=i=function(e){function t(){return B(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return U({},a,((t={})[n.type]=o,t.titleAttributes=U({},i),t));case v.BODY:return U({},a,{bodyAttributes:U({},i)});case v.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(W(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind;var ye=r(1597),he=function(e){var t,r,n,a=e.description,i=e.lang,o=e.meta,s=e.title,l=(0,ye.useStaticQuery)("2841359383").site,u=a||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ge,{htmlAttributes:{lang:i},title:s,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o)})};he.defaultProps={lang:"en",meta:[],description:""};var be=he},5129:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d1146ccf71a720f45f3f33001eccd4f1/d9eda/logo-aymen-labidi-smile.png","srcSet":"/static/d1146ccf71a720f45f3f33001eccd4f1/d9eda/logo-aymen-labidi-smile.png 50w,\\n/static/d1146ccf71a720f45f3f33001eccd4f1/a4cab/logo-aymen-labidi-smile.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/d1146ccf71a720f45f3f33001eccd4f1/c584f/logo-aymen-labidi-smile.avif 50w,\\n/static/d1146ccf71a720f45f3f33001eccd4f1/3096a/logo-aymen-labidi-smile.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/d1146ccf71a720f45f3f33001eccd4f1/c3b2a/logo-aymen-labidi-smile.webp 50w,\\n/static/d1146ccf71a720f45f3f33001eccd4f1/8307e/logo-aymen-labidi-smile.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":53}')},3227:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/775723a96003cddb08c6d757e61c93da/09c57/profile-pic.png","srcSet":"/static/775723a96003cddb08c6d757e61c93da/09c57/profile-pic.png 81w,\\n/static/775723a96003cddb08c6d757e61c93da/66fe9/profile-pic.png 162w","sizes":"81px"},"sources":[{"srcSet":"/static/775723a96003cddb08c6d757e61c93da/3a80b/profile-pic.avif 81w,\\n/static/775723a96003cddb08c6d757e61c93da/d8231/profile-pic.avif 162w","type":"image/avif","sizes":"81px"},{"srcSet":"/static/775723a96003cddb08c6d757e61c93da/af3b7/profile-pic.webp 81w,\\n/static/775723a96003cddb08c6d757e61c93da/32ac6/profile-pic.webp 162w","type":"image/webp","sizes":"81px"}]},"width":81,"height":33}')}}]);
//# sourceMappingURL=commons-23e75375aa8055e08f90.js.map