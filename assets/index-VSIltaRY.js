var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function T(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(T(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function T(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function k(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,A=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function j(e){e[xt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return ke.call(Nt,e)?!0:ke.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(Tt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=hi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=hi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ge(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=pe(null),Qi=null,$i=null;function ea(e,t,n){O(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,me(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=pe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?O(Ca,Ca.current):O(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case re:return t=Na(t),f(e,t,n)}if(le(t)||T(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Na(n),p(e,t,n,r)}if(le(n)||T(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Na(r),m(e,t,n,r,i)}if(le(r)||T(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Na(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(T(o)){if(l=T(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===C)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=pe(null),io=pe(0);function ao(e,t){e=Wl,O(io,e),O(ro,t),Wl=e|t.baseLanes}function oo(){O(io,Wl),O(ro,ro.current)}function so(){Wl=io.current,me(ro),me(io)}var co=pe(null),lo=null;function uo(e){var t=e.alternate;O(F,F.current&1),O(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){O(F,F.current),O(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(O(F,F.current),O(co,e),lo===null&&(lo=e)):mo(e)}function mo(){O(F,F.current),O(co,co.current)}function ho(e){me(co),lo===e&&(lo=null),me(F)}var F=pe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){E.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),j(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(k(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=he.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(k(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=he.current,qi(t))Gi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(me(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return O(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=F.current,O(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return k(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(F),null;case 4:return be(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&me(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),be();break;case 26:case 27:case 5:k(t);break;case 4:be();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:me(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&me(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,j(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,j(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?dt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),it(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ne(),10<a)){if(yu(r,t,Jl,!Vl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=et(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,E.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ne()+500,Su(e,t)):Hl=et(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!je();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,at(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ne()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=ui(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=$e(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&A(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&A(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&A(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=$e(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Fe,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case qr:case Jr:case Yr:l=Rn;break;case $r:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),j(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);j(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),j(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,j(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),j(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,j(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),j(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,j(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),j(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,j(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),j(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),v=o(((e,t)=>{t.exports=_()})),y=g(),b=c(u(),1),x=v(),S=(0,b.createContext)(),C=({children:e})=>{let[t,n]=(0,b.useState)(()=>localStorage.getItem(`football_app_lang`)||`en`),[r,i]=(0,b.useState)(()=>localStorage.getItem(`football_app_animations`)||`on`),[a,o]=(0,b.useState)(()=>localStorage.getItem(`football_app_sound`)||`off`);return(0,b.useEffect)(()=>{let e=document.documentElement;e.classList.add(`theme-dark`),e.classList.remove(`theme-light`),localStorage.setItem(`football_app_theme`,`dark`)},[]),(0,b.useEffect)(()=>{let e=document.documentElement;r===`on`?(e.classList.add(`animations-on`),e.classList.remove(`animations-off`)):(e.classList.add(`animations-off`),e.classList.remove(`animations-on`)),localStorage.setItem(`football_app_animations`,r)},[r]),(0,x.jsx)(S.Provider,{value:{language:t,setLanguage:e=>{n(e),localStorage.setItem(`football_app_lang`,e)},theme:`dark`,setTheme:()=>{},animations:r,setAnimations:e=>{i(e)},sound:a,setSound:e=>{o(e),localStorage.setItem(`football_app_sound`,e)},resetSettings:()=>{n(`en`),i(`on`),o(`off`)}},children:e})},w=()=>{let e=(0,b.useContext)(S);if(!e)throw Error(`useApp must be used within an AppProvider`);return e},ee=[{id:`messi`,name:`Lionel Messi`,nickname:`La Pulga`,dob:`1987-06-24`,age:38,nationality:`Argentina`,height:170,weight:72,preferredFoot:`left`,weakFoot:4,primaryPosition:`RW`,secondaryPositions:[`CF`,`CAM`,`F9`],club:`Inter Miami`,league:`MLS`,nationalTeam:`Argentina`,status:`Active`,isGK:!1,physical:{acceleration:91,sprintSpeed:80,agility:95,balance:97,strength:68,stamina:75,jumping:66,reactions:94,endurance:74,physicality:65},technical:{ballControl:96,firstTouch:95,dribbling:97,closeControl:98,shortPassing:94,longPassing:91,vision:95,crossing:85,curve:93,finishing:95,shotPower:86,longShots:93,volleys:88,heading:65,penalties:90,freeKickAccuracy:94,throughBalls:96,skillMoves:90},defensive:{defensiveAwareness:35,interceptions:40,standingTackle:35,slidingTackle:24,marking:30,pressing:55,aggression:44,aerialAbility:38},goalkeeper:{diving:6,reflexes:8,handling:11,positioning:14,kicking:15,distribution:15,communication:10,oneOnOne:8},tacticalProfile:[`playmaker`,`false9`,`insideForward`],playingStyle:[`Possession`,`Dribbler`,`Creative`,`Playmaker`,`Set Piece Specialist`,`Clinical Finisher`]},{id:`ronaldo`,name:`Cristiano Ronaldo`,nickname:`CR7`,dob:`1985-02-05`,age:41,nationality:`Portugal`,height:187,weight:85,preferredFoot:`right`,weakFoot:4,primaryPosition:`ST`,secondaryPositions:[`LW`,`CF`],club:`Al Nassr`,league:`Saudi Pro League`,nationalTeam:`Portugal`,status:`Active`,isGK:!1,physical:{acceleration:82,sprintSpeed:87,agility:80,balance:85,strength:84,stamina:85,jumping:95,reactions:93,endurance:82,physicality:82},technical:{ballControl:88,firstTouch:86,dribbling:84,closeControl:82,shortPassing:80,longPassing:75,vision:82,crossing:78,curve:81,finishing:92,shotPower:94,longShots:88,volleys:87,heading:93,penalties:95,freeKickAccuracy:80,throughBalls:78,skillMoves:85},defensive:{defensiveAwareness:28,interceptions:29,standingTackle:32,slidingTackle:23,marking:25,pressing:45,aggression:65,aerialAbility:90},goalkeeper:{diving:7,reflexes:11,handling:15,positioning:14,kicking:9,distribution:8,communication:11,oneOnOne:12},tacticalProfile:[`poacher`,`advancedForward`,`insideForward`],playingStyle:[`Counter Attack`,`Clinical Finisher`,`Fast Runner`,`Physical`,`Set Piece Specialist`]},{id:`haaland`,name:`Erling Haaland`,nickname:`The Terminator`,dob:`2000-07-21`,age:25,nationality:`Norway`,height:195,weight:94,preferredFoot:`left`,weakFoot:3,primaryPosition:`ST`,secondaryPositions:[`CF`],club:`Manchester City`,league:`Premier League`,nationalTeam:`Norway`,status:`Active`,isGK:!1,physical:{acceleration:88,sprintSpeed:94,agility:76,balance:78,strength:93,stamina:82,jumping:85,reactions:92,endurance:80,physicality:88},technical:{ballControl:82,firstTouch:80,dribbling:78,closeControl:75,shortPassing:74,longPassing:55,vision:72,crossing:60,curve:65,finishing:96,shotPower:94,longShots:84,volleys:88,heading:85,penalties:88,freeKickAccuracy:62,throughBalls:68,skillMoves:65},defensive:{defensiveAwareness:38,interceptions:30,standingTackle:43,slidingTackle:30,marking:32,pressing:78,aggression:85,aerialAbility:84},goalkeeper:{diving:7,reflexes:8,handling:12,positioning:11,kicking:14,distribution:13,communication:9,oneOnOne:12},tacticalProfile:[`poacher`,`targetMan`,`advancedForward`],playingStyle:[`Counter Attack`,`Clinical Finisher`,`Fast Runner`,`Physical`]},{id:`mbappe`,name:`Kylian Mbappé`,nickname:`Donatello`,dob:`1998-12-20`,age:27,nationality:`France`,height:180,weight:75,preferredFoot:`right`,weakFoot:4,primaryPosition:`LW`,secondaryPositions:[`ST`,`CF`,`RW`],club:`Real Madrid`,league:`La Liga`,nationalTeam:`France`,status:`Active`,isGK:!1,physical:{acceleration:97,sprintSpeed:97,agility:92,balance:83,strength:78,stamina:87,jumping:77,reactions:93,endurance:84,physicality:74},technical:{ballControl:91,firstTouch:89,dribbling:93,closeControl:90,shortPassing:84,longPassing:71,vision:83,crossing:80,curve:82,finishing:93,shotPower:90,longShots:82,volleys:84,heading:72,penalties:84,freeKickAccuracy:69,throughBalls:80,skillMoves:90},defensive:{defensiveAwareness:26,interceptions:38,standingTackle:34,slidingTackle:32,marking:24,pressing:60,aggression:64,aerialAbility:40},goalkeeper:{diving:6,reflexes:12,handling:8,positioning:11,kicking:14,distribution:12,communication:10,oneOnOne:11},tacticalProfile:[`insideForward`,`advancedForward`],playingStyle:[`Counter Attack`,`Dribbler`,`Clinical Finisher`,`Fast Runner`]},{id:`salah`,name:`Mohamed Salah`,nickname:`Egyptian King`,dob:`1992-06-15`,age:33,nationality:`Egypt`,height:175,weight:71,preferredFoot:`left`,weakFoot:3,primaryPosition:`RW`,secondaryPositions:[`ST`,`CF`],club:`Liverpool`,league:`Premier League`,nationalTeam:`Egypt`,status:`Active`,isGK:!1,physical:{acceleration:89,sprintSpeed:90,agility:90,balance:91,strength:75,stamina:87,jumping:69,reactions:92,endurance:84,physicality:73},technical:{ballControl:88,firstTouch:86,dribbling:89,closeControl:88,shortPassing:84,longPassing:75,vision:85,crossing:80,curve:84,finishing:91,shotPower:83,longShots:84,volleys:83,heading:59,penalties:86,freeKickAccuracy:69,throughBalls:82,skillMoves:80},defensive:{defensiveAwareness:38,interceptions:45,standingTackle:43,slidingTackle:38,marking:38,pressing:82,aggression:63,aerialAbility:45},goalkeeper:{diving:14,reflexes:14,handling:9,positioning:11,kicking:12,distribution:13,communication:6,oneOnOne:12},tacticalProfile:[`insideForward`,`advancedForward`],playingStyle:[`Counter Attack`,`Possession`,`Dribbler`,`Clinical Finisher`,`Fast Runner`]},{id:`kane`,name:`Harry Kane`,nickname:`Hurricane`,dob:`1993-07-28`,age:32,nationality:`England`,height:188,weight:86,preferredFoot:`right`,weakFoot:5,primaryPosition:`ST`,secondaryPositions:[`CF`,`F9`],club:`Bayern Munich`,league:`Bundesliga`,nationalTeam:`England`,status:`Active`,isGK:!1,physical:{acceleration:68,sprintSpeed:70,agility:72,balance:81,strength:84,stamina:83,jumping:79,reactions:92,endurance:84,physicality:82},technical:{ballControl:86,firstTouch:88,dribbling:81,closeControl:79,shortPassing:85,longPassing:86,vision:89,crossing:80,curve:82,finishing:95,shotPower:92,longShots:87,volleys:88,heading:86,penalties:96,freeKickAccuracy:74,throughBalls:88,skillMoves:70},defensive:{defensiveAwareness:50,interceptions:44,standingTackle:47,slidingTackle:38,marking:46,pressing:72,aggression:80,aerialAbility:80},goalkeeper:{diving:8,reflexes:10,handling:11,positioning:14,kicking:11,distribution:12,communication:12,oneOnOne:10},tacticalProfile:[`false9`,`targetMan`,`completeForward`],playingStyle:[`Possession`,`Clinical Finisher`,`Playmaker`,`Long Pass Specialist`,`Physical`]},{id:`lewandowski`,name:`Robert Lewandowski`,nickname:`Lewy`,dob:`1988-08-21`,age:37,nationality:`Poland`,height:185,weight:81,preferredFoot:`right`,weakFoot:4,primaryPosition:`ST`,secondaryPositions:[`CF`],club:`Barcelona`,league:`La Liga`,nationalTeam:`Poland`,status:`Active`,isGK:!1,physical:{acceleration:75,sprintSpeed:76,agility:77,balance:82,strength:86,stamina:78,jumping:84,reactions:91,endurance:80,physicality:83},technical:{ballControl:87,firstTouch:89,dribbling:80,closeControl:79,shortPassing:78,longPassing:68,vision:80,crossing:70,curve:79,finishing:93,shotPower:89,longShots:83,volleys:88,heading:86,penalties:90,freeKickAccuracy:80,throughBalls:74,skillMoves:75},defensive:{defensiveAwareness:35,interceptions:38,standingTackle:42,slidingTackle:19,marking:32,pressing:70,aggression:80,aerialAbility:84},goalkeeper:{diving:8,reflexes:12,handling:10,positioning:8,kicking:11,distribution:12,communication:8,oneOnOne:10},tacticalProfile:[`poacher`,`targetMan`,`advancedForward`],playingStyle:[`Clinical Finisher`,`Physical`,`Possession`]},{id:`saka`,name:`Bukayo Saka`,nickname:`Starboy`,dob:`2001-09-05`,age:24,nationality:`England`,height:178,weight:68,preferredFoot:`right`,weakFoot:3,primaryPosition:`RW`,secondaryPositions:[`RM`,`LW`],club:`Arsenal`,league:`Premier League`,nationalTeam:`England`,status:`Active`,isGK:!1,physical:{acceleration:86,sprintSpeed:84,agility:89,balance:85,strength:70,stamina:88,jumping:66,reactions:87,endurance:86,physicality:73},technical:{ballControl:88,firstTouch:86,dribbling:90,closeControl:89,shortPassing:85,longPassing:78,vision:87,crossing:86,curve:82,finishing:84,shotPower:82,longShots:80,volleys:74,heading:50,penalties:84,freeKickAccuracy:75,throughBalls:84,skillMoves:80},defensive:{defensiveAwareness:65,interceptions:68,standingTackle:69,slidingTackle:64,marking:60,pressing:88,aggression:70,aerialAbility:52},goalkeeper:{diving:7,reflexes:11,handling:8,positioning:12,kicking:10,distribution:11,communication:10,oneOnOne:11},tacticalProfile:[`insideForward`,`playmaker`,`traditionalWinger`],playingStyle:[`Possession`,`Dribbler`,`Creative`,`Playmaker`,`High Press`]},{id:`vinicius`,name:`Vinícius Júnior`,nickname:`Vini`,dob:`2000-07-12`,age:25,nationality:`Brazil`,height:176,weight:73,preferredFoot:`right`,weakFoot:4,primaryPosition:`LW`,secondaryPositions:[`ST`],club:`Real Madrid`,league:`La Liga`,nationalTeam:`Brazil`,status:`Active`,isGK:!1,physical:{acceleration:96,sprintSpeed:95,agility:94,balance:84,strength:68,stamina:88,jumping:75,reactions:90,endurance:85,physicality:70},technical:{ballControl:91,firstTouch:88,dribbling:95,closeControl:93,shortPassing:83,longPassing:70,vision:84,crossing:81,curve:83,finishing:88,shotPower:82,longShots:79,volleys:80,heading:50,penalties:78,freeKickAccuracy:70,throughBalls:82,skillMoves:90},defensive:{defensiveAwareness:30,interceptions:35,standingTackle:32,slidingTackle:28,marking:25,pressing:75,aggression:72,aerialAbility:45},goalkeeper:{diving:5,reflexes:10,handling:7,positioning:8,kicking:6,distribution:8,communication:8,oneOnOne:9},tacticalProfile:[`insideForward`,`advancedForward`],playingStyle:[`Counter Attack`,`Dribbler`,`Fast Runner`,`Creative`]},{id:`debruyne`,name:`Kevin De Bruyne`,nickname:`KDB`,dob:`1991-06-28`,age:34,nationality:`Belgium`,height:181,weight:75,preferredFoot:`right`,weakFoot:5,primaryPosition:`CAM`,secondaryPositions:[`CM`],club:`Manchester City`,league:`Premier League`,nationalTeam:`Belgium`,status:`Active`,isGK:!1,physical:{acceleration:72,sprintSpeed:74,agility:78,balance:78,strength:74,stamina:88,jumping:63,reactions:91,endurance:86,physicality:76},technical:{ballControl:90,firstTouch:91,dribbling:87,closeControl:85,shortPassing:93,longPassing:94,vision:94,crossing:94,curve:92,finishing:83,shotPower:92,longShots:91,volleys:82,heading:55,penalties:83,freeKickAccuracy:86,throughBalls:95,skillMoves:80},defensive:{defensiveAwareness:62,interceptions:66,standingTackle:70,slidingTackle:53,marking:58,pressing:84,aggression:75,aerialAbility:52},goalkeeper:{diving:15,reflexes:13,handling:5,positioning:10,kicking:13,distribution:14,communication:11,oneOnOne:9},tacticalProfile:[`playmaker`,`advancedForward`,`deepPlaymaker`],playingStyle:[`Possession`,`Creative`,`Crossing Specialist`,`Long Pass Specialist`,`Playmaker`]},{id:`rodri`,name:`Rodrigo Hernández`,nickname:`Rodri`,dob:`1996-06-22`,age:29,nationality:`Spain`,height:191,weight:82,preferredFoot:`right`,weakFoot:4,primaryPosition:`CDM`,secondaryPositions:[`CM`],club:`Manchester City`,league:`Premier League`,nationalTeam:`Spain`,status:`Active`,isGK:!1,physical:{acceleration:66,sprintSpeed:70,agility:72,balance:78,strength:85,stamina:92,jumping:82,reactions:92,endurance:94,physicality:86},technical:{ballControl:88,firstTouch:89,dribbling:79,closeControl:82,shortPassing:92,longPassing:90,vision:84,crossing:71,curve:74,finishing:76,shotPower:86,longShots:84,volleys:72,heading:83,penalties:74,freeKickAccuracy:68,throughBalls:85,skillMoves:70},defensive:{defensiveAwareness:90,interceptions:88,standingTackle:87,slidingTackle:78,marking:88,pressing:88,aggression:80,aerialAbility:82},goalkeeper:{diving:10,reflexes:15,handling:14,positioning:14,kicking:8,distribution:12,communication:11,oneOnOne:12},tacticalProfile:[`ballWinning`,`deepPlaymaker`,`boxToBox`],playingStyle:[`Possession`,`Defensive Leader`,`Long Pass Specialist`,`Playmaker`,`Physical`]},{id:`bellingham`,name:`Jude Bellingham`,nickname:`Hey Jude`,dob:`2003-06-29`,age:22,nationality:`England`,height:186,weight:75,preferredFoot:`right`,weakFoot:4,primaryPosition:`CAM`,secondaryPositions:[`CM`,`CF`],club:`Real Madrid`,league:`La Liga`,nationalTeam:`England`,status:`Active`,isGK:!1,physical:{acceleration:80,sprintSpeed:81,agility:85,balance:83,strength:84,stamina:90,jumping:82,reactions:90,endurance:91,physicality:85},technical:{ballControl:89,firstTouch:87,dribbling:88,closeControl:87,shortPassing:87,longPassing:81,vision:88,crossing:75,curve:78,finishing:86,shotPower:83,longShots:81,volleys:83,heading:84,penalties:80,freeKickAccuracy:70,throughBalls:84,skillMoves:80},defensive:{defensiveAwareness:78,interceptions:80,standingTackle:81,slidingTackle:76,marking:75,pressing:88,aggression:86,aerialAbility:80},goalkeeper:{diving:14,reflexes:8,handling:11,positioning:6,kicking:12,distribution:14,communication:12,oneOnOne:13},tacticalProfile:[`boxToBox`,`advancedForward`,`playmaker`],playingStyle:[`Possession`,`Counter Attack`,`Creative`,`Physical`,`Clinical Finisher`]},{id:`modric`,name:`Luka Modrić`,nickname:`The Maestro`,dob:`1985-09-09`,age:40,nationality:`Croatia`,height:172,weight:66,preferredFoot:`right`,weakFoot:4,primaryPosition:`CM`,secondaryPositions:[`CAM`,`CDM`],club:`Real Madrid`,league:`La Liga`,nationalTeam:`Croatia`,status:`Active`,isGK:!1,physical:{acceleration:70,sprintSpeed:68,agility:88,balance:91,strength:58,stamina:84,jumping:62,reactions:90,endurance:84,physicality:62},technical:{ballControl:92,firstTouch:92,dribbling:87,closeControl:90,shortPassing:91,longPassing:89,vision:91,crossing:85,curve:89,finishing:72,shotPower:79,longShots:82,volleys:76,heading:55,penalties:80,freeKickAccuracy:78,throughBalls:90,skillMoves:80},defensive:{defensiveAwareness:72,interceptions:81,standingTackle:75,slidingTackle:71,marking:70,pressing:80,aggression:62,aerialAbility:52},goalkeeper:{diving:13,reflexes:9,handling:7,positioning:14,kicking:7,distribution:14,communication:6,oneOnOne:11},tacticalProfile:[`playmaker`,`deepPlaymaker`,`boxToBox`],playingStyle:[`Possession`,`Creative`,`Playmaker`,`Long Pass Specialist`]},{id:`rice`,name:`Declan Rice`,nickname:`Decs`,dob:`1999-01-14`,age:27,nationality:`England`,height:188,weight:80,preferredFoot:`right`,weakFoot:3,primaryPosition:`CDM`,secondaryPositions:[`CM`],club:`Arsenal`,league:`Premier League`,nationalTeam:`England`,status:`Active`,isGK:!1,physical:{acceleration:75,sprintSpeed:79,agility:75,balance:78,strength:83,stamina:92,jumping:80,reactions:88,endurance:93,physicality:85},technical:{ballControl:83,firstTouch:82,dribbling:77,closeControl:75,shortPassing:86,longPassing:82,vision:78,crossing:68,curve:70,finishing:65,shotPower:80,longShots:75,volleys:60,heading:82,penalties:68,freeKickAccuracy:65,throughBalls:78,skillMoves:70},defensive:{defensiveAwareness:88,interceptions:89,standingTackle:88,slidingTackle:82,marking:85,pressing:86,aggression:82,aerialAbility:80},goalkeeper:{diving:12,reflexes:8,handling:10,positioning:11,kicking:11,distribution:12,communication:10,oneOnOne:11},tacticalProfile:[`ballWinning`,`boxToBox`],playingStyle:[`High Press`,`Defensive Leader`,`Physical`]},{id:`pedri`,name:`Pedri González`,nickname:`Pedri`,dob:`2002-11-25`,age:23,nationality:`Spain`,height:174,weight:68,preferredFoot:`right`,weakFoot:4,primaryPosition:`CM`,secondaryPositions:[`CAM`],club:`Barcelona`,league:`La Liga`,nationalTeam:`Spain`,status:`Active`,isGK:!1,physical:{acceleration:78,sprintSpeed:72,agility:89,balance:88,strength:60,stamina:86,jumping:55,reactions:88,endurance:85,physicality:62},technical:{ballControl:92,firstTouch:92,dribbling:89,closeControl:91,shortPassing:92,longPassing:85,vision:91,crossing:75,curve:80,finishing:70,shotPower:70,longShots:74,volleys:68,heading:50,penalties:70,freeKickAccuracy:75,throughBalls:92,skillMoves:80},defensive:{defensiveAwareness:70,interceptions:80,standingTackle:73,slidingTackle:66,marking:68,pressing:85,aggression:65,aerialAbility:48},goalkeeper:{diving:8,reflexes:10,handling:8,positioning:10,kicking:12,distribution:13,communication:7,oneOnOne:10},tacticalProfile:[`playmaker`,`boxToBox`],playingStyle:[`Possession`,`Creative`,`Playmaker`]},{id:`vandijk`,name:`Virgil van Dijk`,nickname:`The Wall`,dob:`1991-07-08`,age:34,nationality:`Netherlands`,height:193,weight:92,preferredFoot:`right`,weakFoot:3,primaryPosition:`CB`,secondaryPositions:[],club:`Liverpool`,league:`Premier League`,nationalTeam:`Netherlands`,status:`Active`,isGK:!1,physical:{acceleration:74,sprintSpeed:85,agility:70,balance:75,strength:93,stamina:85,jumping:90,reactions:89,endurance:85,physicality:92},technical:{ballControl:79,firstTouch:78,dribbling:71,closeControl:68,shortPassing:82,longPassing:84,vision:70,crossing:60,curve:60,finishing:60,shotPower:81,longShots:64,volleys:45,heading:90,penalties:62,freeKickAccuracy:70,throughBalls:65,skillMoves:60},defensive:{defensiveAwareness:92,interceptions:90,standingTackle:92,slidingTackle:86,marking:92,pressing:78,aggression:83,aerialAbility:92},goalkeeper:{diving:13,reflexes:10,handling:11,positioning:11,kicking:5,distribution:6,communication:11,oneOnOne:12},tacticalProfile:[`ballWinning`,`targetMan`],playingStyle:[`Possession`,`Defensive Leader`,`Physical`,`Long Pass Specialist`]},{id:`saliba`,name:`William Saliba`,nickname:`Wilf`,dob:`2001-03-24`,age:25,nationality:`France`,height:192,weight:85,preferredFoot:`right`,weakFoot:3,primaryPosition:`CB`,secondaryPositions:[],club:`Arsenal`,league:`Premier League`,nationalTeam:`France`,status:`Active`,isGK:!1,physical:{acceleration:78,sprintSpeed:84,agility:72,balance:74,strength:89,stamina:84,jumping:82,reactions:87,endurance:84,physicality:87},technical:{ballControl:80,firstTouch:81,dribbling:70,closeControl:72,shortPassing:85,longPassing:78,vision:72,crossing:52,curve:55,finishing:42,shotPower:65,longShots:45,volleys:38,heading:84,penalties:50,freeKickAccuracy:42,throughBalls:70,skillMoves:60},defensive:{defensiveAwareness:90,interceptions:88,standingTackle:90,slidingTackle:84,marking:89,pressing:80,aggression:78,aerialAbility:83},goalkeeper:{diving:9,reflexes:10,handling:8,positioning:10,kicking:11,distribution:12,communication:10,oneOnOne:11},tacticalProfile:[`ballWinning`],playingStyle:[`Possession`,`Defensive Leader`,`Physical`]},{id:`alexanderarnold`,name:`Trent Alexander-Arnold`,nickname:`Trent`,dob:`1998-10-07`,age:27,nationality:`England`,height:180,weight:72,preferredFoot:`right`,weakFoot:4,primaryPosition:`RB`,secondaryPositions:[`RWB`,`CM`,`CDM`],club:`Liverpool`,league:`Premier League`,nationalTeam:`England`,status:`Active`,isGK:!1,physical:{acceleration:77,sprintSpeed:80,agility:80,balance:78,strength:68,stamina:87,jumping:66,reactions:85,endurance:84,physicality:72},technical:{ballControl:85,firstTouch:84,dribbling:79,closeControl:78,shortPassing:89,longPassing:93,vision:90,crossing:94,curve:93,finishing:69,shotPower:83,longShots:84,volleys:68,heading:69,penalties:78,freeKickAccuracy:88,throughBalls:91,skillMoves:75},defensive:{defensiveAwareness:72,interceptions:81,standingTackle:79,slidingTackle:76,marking:70,pressing:80,aggression:74,aerialAbility:65},goalkeeper:{diving:14,reflexes:15,handling:8,positioning:12,kicking:10,distribution:14,communication:11,oneOnOne:12},tacticalProfile:[`playmaker`,`deepPlaymaker`],playingStyle:[`Possession`,`Creative`,`Crossing Specialist`,`Long Pass Specialist`,`Set Piece Specialist`]},{id:`theohernandez`,name:`Theo Hernández`,nickname:`Theo`,dob:`1997-10-06`,age:28,nationality:`France`,height:184,weight:81,preferredFoot:`left`,weakFoot:3,primaryPosition:`LB`,secondaryPositions:[`LWB`],club:`AC Milan`,league:`Serie A`,nationalTeam:`France`,status:`Active`,isGK:!1,physical:{acceleration:92,sprintSpeed:93,agility:82,balance:81,strength:84,stamina:90,jumping:72,reactions:84,endurance:88,physicality:84},technical:{ballControl:83,firstTouch:81,dribbling:85,closeControl:82,shortPassing:80,longPassing:74,vision:76,crossing:83,curve:78,finishing:71,shotPower:86,longShots:79,volleys:65,heading:68,penalties:72,freeKickAccuracy:69,throughBalls:74,skillMoves:75},defensive:{defensiveAwareness:76,interceptions:79,standingTackle:80,slidingTackle:81,marking:75,pressing:82,aggression:84,aerialAbility:70},goalkeeper:{diving:8,reflexes:10,handling:11,positioning:14,kicking:14,distribution:12,communication:9,oneOnOne:11},tacticalProfile:[`insideForward`,`boxToBox`],playingStyle:[`Counter Attack`,`Fast Runner`,`Dribbler`,`Physical`]},{id:`alisson`,name:`Alisson Becker`,nickname:`Alisson`,dob:`1992-10-02`,age:33,nationality:`Brazil`,height:193,weight:91,preferredFoot:`right`,weakFoot:3,primaryPosition:`GK`,secondaryPositions:[],club:`Liverpool`,league:`Premier League`,nationalTeam:`Brazil`,status:`Active`,isGK:!0,physical:{acceleration:56,sprintSpeed:50,agility:62,balance:55,strength:78,stamina:45,jumping:82,reactions:89,endurance:40,physicality:80},technical:{ballControl:72,firstTouch:75,dribbling:45,closeControl:40,shortPassing:80,longPassing:84,vision:78,crossing:18,curve:20,finishing:15,shotPower:58,longShots:15,volleys:20,heading:45,penalties:48,freeKickAccuracy:18,throughBalls:55,skillMoves:30},defensive:{defensiveAwareness:18,interceptions:20,standingTackle:19,slidingTackle:14,marking:15,pressing:25,aggression:32,aerialAbility:88},goalkeeper:{diving:86,reflexes:89,handling:85,positioning:90,kicking:84,distribution:88,communication:86,oneOnOne:92},tacticalProfile:[`sweeperKeeper`],playingStyle:[`Possession`,`Defensive Leader`,`Playmaker`,`Long Pass Specialist`]},{id:`neuer`,name:`Manuel Neuer`,nickname:`The Wall`,dob:`1986-03-27`,age:40,nationality:`Germany`,height:193,weight:93,preferredFoot:`right`,weakFoot:4,primaryPosition:`GK`,secondaryPositions:[],club:`Bayern Munich`,league:`Bundesliga`,nationalTeam:`Germany`,status:`Active`,isGK:!0,physical:{acceleration:54,sprintSpeed:56,agility:58,balance:60,strength:82,stamina:50,jumping:78,reactions:88,endurance:42,physicality:82},technical:{ballControl:78,firstTouch:80,dribbling:50,closeControl:45,shortPassing:85,longPassing:88,vision:84,crossing:20,curve:25,finishing:15,shotPower:65,longShots:15,volleys:18,heading:42,penalties:50,freeKickAccuracy:22,throughBalls:65,skillMoves:35},defensive:{defensiveAwareness:22,interceptions:24,standingTackle:20,slidingTackle:15,marking:12,pressing:35,aggression:38,aerialAbility:85},goalkeeper:{diving:85,reflexes:86,handling:82,positioning:88,kicking:90,distribution:91,communication:90,oneOnOne:93},tacticalProfile:[`sweeperKeeper`],playingStyle:[`Possession`,`Defensive Leader`,`Playmaker`,`Long Pass Specialist`]},{id:`donnarumma`,name:`Gianluigi Donnarumma`,nickname:`Gigio`,dob:`1999-02-25`,age:27,nationality:`Italy`,height:196,weight:90,preferredFoot:`right`,weakFoot:3,primaryPosition:`GK`,secondaryPositions:[],club:`Paris Saint-Germain`,league:`Ligue 1`,nationalTeam:`Italy`,status:`Active`,isGK:!0,physical:{acceleration:50,sprintSpeed:52,agility:60,balance:55,strength:80,stamina:42,jumping:80,reactions:85,endurance:40,physicality:78},technical:{ballControl:68,firstTouch:62,dribbling:30,closeControl:28,shortPassing:72,longPassing:70,vision:65,crossing:15,curve:14,finishing:10,shotPower:55,longShots:12,volleys:14,heading:40,penalties:45,freeKickAccuracy:15,throughBalls:45,skillMoves:25},defensive:{defensiveAwareness:15,interceptions:18,standingTackle:15,slidingTackle:12,marking:10,pressing:20,aggression:30,aerialAbility:85},goalkeeper:{diving:88,reflexes:90,handling:81,positioning:85,kicking:75,distribution:78,communication:82,oneOnOne:88},tacticalProfile:[`sweeperKeeper`],playingStyle:[`Defensive Leader`]},{id:`courtois`,name:`Thibaut Courtois`,nickname:`Tibo`,dob:`1992-05-11`,age:34,nationality:`Belgium`,height:200,weight:96,preferredFoot:`left`,weakFoot:3,primaryPosition:`GK`,secondaryPositions:[],club:`Real Madrid`,league:`La Liga`,nationalTeam:`Belgium`,status:`Active`,isGK:!0,physical:{acceleration:48,sprintSpeed:50,agility:61,balance:45,strength:85,stamina:44,jumping:78,reactions:87,endurance:40,physicality:80},technical:{ballControl:65,firstTouch:68,dribbling:30,closeControl:25,shortPassing:75,longPassing:74,vision:68,crossing:14,curve:15,finishing:10,shotPower:50,longShots:12,volleys:12,heading:45,penalties:35,freeKickAccuracy:12,throughBalls:42,skillMoves:20},defensive:{defensiveAwareness:12,interceptions:15,standingTackle:18,slidingTackle:12,marking:10,pressing:18,aggression:28,aerialAbility:90},goalkeeper:{diving:85,reflexes:89,handling:89,positioning:90,kicking:74,distribution:75,communication:85,oneOnOne:90},tacticalProfile:[`sweeperKeeper`],playingStyle:[`Defensive Leader`]},{id:`pele`,name:`Pelé`,nickname:`O Rei (The King)`,dob:`1940-10-23`,age:82,nationality:`Brazil`,height:173,weight:73,preferredFoot:`right`,weakFoot:5,primaryPosition:`ST`,secondaryPositions:[`CF`,`SS`],club:`Santos`,league:`Campeonato Paulista`,nationalTeam:`Brazil`,status:`Retired`,isGK:!1,physical:{acceleration:95,sprintSpeed:93,agility:94,balance:95,strength:78,stamina:88,jumping:94,reactions:95,endurance:86,physicality:78},technical:{ballControl:95,firstTouch:94,dribbling:96,closeControl:94,shortPassing:89,longPassing:82,vision:92,crossing:78,curve:88,finishing:98,shotPower:88,longShots:89,volleys:94,heading:94,penalties:90,freeKickAccuracy:88,throughBalls:86,skillMoves:95},defensive:{defensiveAwareness:40,interceptions:45,standingTackle:48,slidingTackle:30,marking:35,pressing:68,aggression:68,aerialAbility:90},goalkeeper:{diving:9,reflexes:10,handling:14,positioning:11,kicking:10,distribution:12,communication:10,oneOnOne:11},tacticalProfile:[`poacher`,`insideForward`,`completeForward`],playingStyle:[`Possession`,`Dribbler`,`Clinical Finisher`,`Creative`,`Playmaker`]},{id:`maradona`,name:`Diego Maradona`,nickname:`El Pibe de Oro`,dob:`1960-10-30`,age:60,nationality:`Argentina`,height:165,weight:70,preferredFoot:`left`,weakFoot:3,primaryPosition:`CAM`,secondaryPositions:[`SS`,`CF`],club:`Napoli`,league:`Serie A`,nationalTeam:`Argentina`,status:`Retired`,isGK:!1,physical:{acceleration:93,sprintSpeed:85,agility:97,balance:98,strength:74,stamina:80,jumping:72,reactions:93,endurance:78,physicality:75},technical:{ballControl:97,firstTouch:96,dribbling:98,closeControl:98,shortPassing:93,longPassing:89,vision:97,crossing:88,curve:94,finishing:91,shotPower:83,longShots:91,volleys:86,heading:66,penalties:92,freeKickAccuracy:95,throughBalls:96,skillMoves:95},defensive:{defensiveAwareness:35,interceptions:44,standingTackle:38,slidingTackle:26,marking:28,pressing:60,aggression:76,aerialAbility:42},goalkeeper:{diving:5,reflexes:9,handling:12,positioning:11,kicking:10,distribution:14,communication:9,oneOnOne:12},tacticalProfile:[`playmaker`,`false9`,`insideForward`],playingStyle:[`Possession`,`Dribbler`,`Creative`,`Playmaker`,`Set Piece Specialist`]},{id:`maldini`,name:`Paolo Maldini`,nickname:`Il Capitano`,dob:`1968-06-26`,age:57,nationality:`Italy`,height:186,weight:83,preferredFoot:`left`,weakFoot:4,primaryPosition:`CB`,secondaryPositions:[`LB`],club:`AC Milan`,league:`Serie A`,nationalTeam:`Italy`,status:`Retired`,isGK:!1,physical:{acceleration:78,sprintSpeed:82,agility:76,balance:79,strength:85,stamina:87,jumping:85,reactions:93,endurance:86,physicality:85},technical:{ballControl:81,firstTouch:82,dribbling:71,closeControl:74,shortPassing:82,longPassing:78,vision:74,crossing:80,curve:70,finishing:58,shotPower:70,longShots:55,volleys:50,heading:87,penalties:60,freeKickAccuracy:55,throughBalls:69,skillMoves:60},defensive:{defensiveAwareness:96,interceptions:95,standingTackle:95,slidingTackle:96,marking:95,pressing:82,aggression:65,aerialAbility:86},goalkeeper:{diving:8,reflexes:9,handling:14,positioning:11,kicking:10,distribution:8,communication:11,oneOnOne:12},tacticalProfile:[`ballWinning`],playingStyle:[`Possession`,`Defensive Leader`,`Physical`]},{id:`zidane`,name:`Zinedine Zidane`,nickname:`Zizou`,dob:`1972-06-23`,age:53,nationality:`France`,height:185,weight:80,preferredFoot:`right`,weakFoot:5,primaryPosition:`CAM`,secondaryPositions:[`CM`],club:`Real Madrid`,league:`La Liga`,nationalTeam:`France`,status:`Retired`,isGK:!1,physical:{acceleration:75,sprintSpeed:77,agility:86,balance:88,strength:82,stamina:81,jumping:75,reactions:90,endurance:80,physicality:82},technical:{ballControl:97,firstTouch:98,dribbling:93,closeControl:95,shortPassing:92,longPassing:91,vision:95,crossing:83,curve:86,finishing:84,shotPower:86,longShots:87,volleys:92,heading:83,penalties:88,freeKickAccuracy:88,throughBalls:93,skillMoves:90},defensive:{defensiveAwareness:54,interceptions:62,standingTackle:65,slidingTackle:52,marking:50,pressing:72,aggression:80,aerialAbility:70},goalkeeper:{diving:8,reflexes:9,handling:15,positioning:11,kicking:14,distribution:14,communication:10,oneOnOne:12},tacticalProfile:[`playmaker`,`deepPlaymaker`],playingStyle:[`Possession`,`Creative`,`Playmaker`,`Long Pass Specialist`]}],te=[{name:`Marc-André ter Stegen`,age:34,nationality:`Germany`,height:187,weight:85,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Barcelona`,league:`La Liga`,status:`Active`},{name:`Jan Oblak`,age:33,nationality:`Slovenia`,height:188,weight:87,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Atlético Madrid`,league:`La Liga`,status:`Active`},{name:`Mike Maignan`,age:30,nationality:`France`,height:191,weight:89,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`AC Milan`,league:`Serie A`,status:`Active`},{name:`Ederson Moraes`,age:32,nationality:`Brazil`,height:188,weight:86,preferredFoot:`left`,primaryPosition:`GK`,secondaryPositions:[],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Emiliano Martínez`,age:33,nationality:`Argentina`,height:195,weight:90,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Aston Villa`,league:`Premier League`,status:`Active`},{name:`Jordan Pickford`,age:32,nationality:`England`,height:185,weight:82,preferredFoot:`left`,primaryPosition:`GK`,secondaryPositions:[],club:`Everton`,league:`Premier League`,status:`Active`},{name:`Gregor Kobel`,age:28,nationality:`Switzerland`,height:195,weight:88,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Borussia Dortmund`,league:`Bundesliga`,status:`Active`},{name:`Yann Sommer`,age:37,nationality:`Switzerland`,height:183,weight:79,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Nick Pope`,age:34,nationality:`England`,height:198,weight:90,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Newcastle United`,league:`Premier League`,status:`Active`},{name:`David Raya`,age:30,nationality:`Spain`,height:183,weight:80,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Arsenal`,league:`Premier League`,status:`Active`},{name:`Guglielmo Vicario`,age:29,nationality:`Italy`,height:194,weight:83,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Kepa Arrizabalaga`,age:31,nationality:`Spain`,height:186,weight:85,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Diogo Costa`,age:26,nationality:`Portugal`,height:186,weight:82,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`FC Porto`,league:`Liga Portugal`,status:`Active`},{name:`Unai Simón`,age:28,nationality:`Spain`,height:190,weight:88,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Athletic Bilbao`,league:`La Liga`,status:`Active`},{name:`Kevin Trapp`,age:35,nationality:`Germany`,height:189,weight:88,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Eintracht Frankfurt`,league:`Bundesliga`,status:`Active`},{name:`Alex Meret`,age:29,nationality:`Italy`,height:190,weight:82,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Napoli`,league:`Serie A`,status:`Active`},{name:`Kasper Schmeichel`,age:39,nationality:`Denmark`,height:189,weight:88,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Anderlecht`,league:`Belgian Pro League`,status:`Active`},{name:`Peter Schmeichel`,age:62,nationality:`Denmark`,height:193,weight:92,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Manchester United`,league:`Premier League`,status:`Retired`},{name:`Edwin van der Sar`,age:55,nationality:`Netherlands`,height:197,weight:83,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Manchester United`,league:`Premier League`,status:`Retired`},{name:`Oliver Kahn`,age:56,nationality:`Germany`,height:188,weight:91,preferredFoot:`right`,primaryPosition:`GK`,secondaryPositions:[],club:`Bayern Munich`,league:`Bundesliga`,status:`Retired`},{name:`Rúben Dias`,age:29,nationality:`Portugal`,height:187,weight:82,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`John Stones`,age:31,nationality:`England`,height:188,weight:80,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`CDM`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Marquinhos Aoás`,age:31,nationality:`Brazil`,height:183,weight:75,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`RB`],club:`Paris Saint-Germain`,league:`Ligue 1`,status:`Active`},{name:`Thiago Silva`,age:41,nationality:`Brazil`,height:181,weight:79,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Fluminense`,league:`Série A`,status:`Active`},{name:`Ronald Araújo`,age:27,nationality:`Uruguay`,height:188,weight:79,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`RB`],club:`Barcelona`,league:`La Liga`,status:`Active`},{name:`Éder Militão`,age:28,nationality:`Brazil`,height:186,weight:78,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`RB`],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Alessandro Bastoni`,age:26,nationality:`Italy`,height:190,weight:75,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[`LB`],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Antonio Rüdiger`,age:32,nationality:`Germany`,height:190,weight:85,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Cristian Romero`,age:27,nationality:`Argentina`,height:185,weight:79,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`RB`],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Sven Botman`,age:26,nationality:`Netherlands`,height:193,weight:81,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[],club:`Newcastle United`,league:`Premier League`,status:`Active`},{name:`Gabriel Magalhães`,age:28,nationality:`Brazil`,height:190,weight:78,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[],club:`Arsenal`,league:`Premier League`,status:`Active`},{name:`Lisandro Martínez`,age:28,nationality:`Argentina`,height:178,weight:77,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[`LB`,`CDM`],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Kim Min-jae`,age:29,nationality:`South Korea`,height:190,weight:81,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Matthijs de Ligt`,age:26,nationality:`Netherlands`,height:188,weight:89,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Dayot Upamecano`,age:27,nationality:`France`,height:186,weight:83,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Ibrahima Konaté`,age:26,nationality:`France`,height:194,weight:85,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Liverpool`,league:`Premier League`,status:`Active`},{name:`Manuel Akanji`,age:30,nationality:`Switzerland`,height:188,weight:85,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`RB`,`LB`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Nathan Aké`,age:31,nationality:`Netherlands`,height:180,weight:75,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[`LB`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Josko Gvardiol`,age:24,nationality:`Croatia`,height:185,weight:80,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[`LB`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Micky van de Ven`,age:25,nationality:`Netherlands`,height:193,weight:81,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[`LB`],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Gleison Bremer`,age:29,nationality:`Brazil`,height:188,weight:80,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Juventus`,league:`Serie A`,status:`Active`},{name:`Jonathan Tah`,age:30,nationality:`Germany`,height:195,weight:90,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Bayer Leverkusen`,league:`Bundesliga`,status:`Active`},{name:`Edmond Tapsoba`,age:27,nationality:`Burkina Faso`,height:194,weight:85,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Bayer Leverkusen`,league:`Bundesliga`,status:`Active`},{name:`Piero Hincapié`,age:24,nationality:`Ecuador`,height:184,weight:77,preferredFoot:`left`,primaryPosition:`CB`,secondaryPositions:[`LB`],club:`Bayer Leverkusen`,league:`Bundesliga`,status:`Active`},{name:`Mats Hummels`,age:37,nationality:`Germany`,height:191,weight:90,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`AS Roma`,league:`Serie A`,status:`Active`},{name:`Fikayo Tomori`,age:28,nationality:`England`,height:185,weight:79,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`AC Milan`,league:`Serie A`,status:`Active`},{name:`Alessandro Nesta`,age:49,nationality:`Italy`,height:187,weight:79,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`AC Milan`,league:`Serie A`,status:`Retired`},{name:`Fabio Cannavaro`,age:52,nationality:`Italy`,height:176,weight:75,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`Juventus`,league:`Serie A`,status:`Retired`},{name:`Carles Puyol`,age:47,nationality:`Spain`,height:178,weight:80,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`RB`],club:`Barcelona`,league:`La Liga`,status:`Retired`},{name:`Franco Baresi`,age:65,nationality:`Italy`,height:176,weight:70,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[],club:`AC Milan`,league:`Serie A`,status:`Retired`},{name:`Alfonso Davies`,age:25,nationality:`Canada`,height:181,weight:72,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`LWB`,`LM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Andrew Robertson`,age:31,nationality:`Scotland`,height:178,weight:64,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`LWB`],club:`Liverpool`,league:`Premier League`,status:`Active`},{name:`Luke Shaw`,age:30,nationality:`England`,height:181,weight:75,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`CB`],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Ferland Mendy`,age:30,nationality:`France`,height:180,weight:73,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Nuno Mendes`,age:23,nationality:`Portugal`,height:176,weight:70,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`LWB`],club:`Paris Saint-Germain`,league:`Ligue 1`,status:`Active`},{name:`Alejandro Balde`,age:22,nationality:`Spain`,height:175,weight:69,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`LWB`],club:`Barcelona`,league:`La Liga`,status:`Active`},{name:`Destiny Udogie`,age:23,nationality:`Italy`,height:188,weight:73,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`LWB`,`LM`],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Pervis Estupiñán`,age:28,nationality:`Ecuador`,height:175,weight:73,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`LWB`],club:`Brighton & Hove Albion`,league:`Premier League`,status:`Active`},{name:`Federico Dimarco`,age:28,nationality:`Italy`,height:175,weight:75,preferredFoot:`left`,primaryPosition:`LWB`,secondaryPositions:[`LB`,`LM`,`CB`],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Alejandro Grimaldo`,age:30,nationality:`Spain`,height:171,weight:63,preferredFoot:`left`,primaryPosition:`LWB`,secondaryPositions:[`LB`,`LM`],club:`Bayer Leverkusen`,league:`Bundesliga`,status:`Active`},{name:`Roberto Carlos`,age:52,nationality:`Brazil`,height:168,weight:70,preferredFoot:`left`,primaryPosition:`LB`,secondaryPositions:[`LWB`],club:`Real Madrid`,league:`La Liga`,status:`Retired`},{name:`Achraf Hakimi`,age:27,nationality:`Morocco`,height:181,weight:73,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`RWB`,`LB`],club:`Paris Saint-Germain`,league:`Ligue 1`,status:`Active`},{name:`Kyle Walker`,age:35,nationality:`England`,height:183,weight:70,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`CB`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Kieran Trippier`,age:35,nationality:`England`,height:178,weight:71,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`RWB`,`LB`],club:`Newcastle United`,league:`Premier League`,status:`Active`},{name:`Reece James`,age:26,nationality:`England`,height:179,weight:82,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`RWB`,`CB`],club:`Chelsea`,league:`Premier League`,status:`Active`},{name:`Dani Carvajal`,age:34,nationality:`Spain`,height:173,weight:73,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Benjamin Pavard`,age:30,nationality:`France`,height:186,weight:76,preferredFoot:`right`,primaryPosition:`CB`,secondaryPositions:[`RB`],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Denzel Dumfries`,age:29,nationality:`Netherlands`,height:188,weight:80,preferredFoot:`right`,primaryPosition:`RWB`,secondaryPositions:[`RB`,`RM`],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Jeremie Frimpong`,age:25,nationality:`Netherlands`,height:171,weight:63,preferredFoot:`right`,primaryPosition:`RWB`,secondaryPositions:[`RM`,`RW`],club:`Bayer Leverkusen`,league:`Bundesliga`,status:`Active`},{name:`Giovanni Di Lorenzo`,age:32,nationality:`Italy`,height:183,weight:79,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`CB`],club:`Napoli`,league:`Serie A`,status:`Active`},{name:`Pedro Porro`,age:26,nationality:`Spain`,height:173,weight:71,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`RWB`,`RM`],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Cafu Marcos`,age:55,nationality:`Brazil`,height:176,weight:75,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`RWB`],club:`AC Milan`,league:`Serie A`,status:`Retired`},{name:`Philipp Lahm`,age:42,nationality:`Germany`,height:170,weight:66,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`LB`,`CDM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Retired`},{name:`Casemiro Carlos`,age:34,nationality:`Brazil`,height:185,weight:84,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Aurélien Tchouaméni`,age:26,nationality:`France`,height:187,weight:81,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[`CB`,`CM`],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Moisés Caicedo`,age:24,nationality:`Ecuador`,height:178,weight:73,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[`CM`],club:`Chelsea`,league:`Premier League`,status:`Active`},{name:`Bruno Guimarães`,age:28,nationality:`Brazil`,height:182,weight:74,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[`CM`],club:`Newcastle United`,league:`Premier League`,status:`Active`},{name:`Sandro Tonali`,age:26,nationality:`Italy`,height:181,weight:79,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[`CM`],club:`Newcastle United`,league:`Premier League`,status:`Active`},{name:`Manuel Ugarte`,age:25,nationality:`Uruguay`,height:182,weight:77,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Sofyan Amrabat`,age:29,nationality:`Morocco`,height:185,weight:78,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[`CM`],club:`Fenerbahçe`,league:`Süper Lig`,status:`Active`},{name:`Claude Makélélé`,age:53,nationality:`France`,height:174,weight:70,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[],club:`Chelsea`,league:`Premier League`,status:`Retired`},{name:`Gennaro Gattuso`,age:48,nationality:`Italy`,height:177,weight:77,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[],club:`AC Milan`,league:`Serie A`,status:`Retired`},{name:`Frenkie de Jong`,age:28,nationality:`Netherlands`,height:180,weight:74,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`,`CB`],club:`Barcelona`,league:`La Liga`,status:`Active`},{name:`Bernardo Silva`,age:31,nationality:`Portugal`,height:173,weight:64,preferredFoot:`left`,primaryPosition:`CM`,secondaryPositions:[`RM`,`RW`,`CAM`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Federico Valverde`,age:27,nationality:`Uruguay`,height:182,weight:78,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`RM`,`RW`,`CDM`],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Nicolò Barella`,age:29,nationality:`Italy`,height:175,weight:68,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Alexis Mac Allister`,age:27,nationality:`Argentina`,height:176,weight:72,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`,`CAM`],club:`Liverpool`,league:`Premier League`,status:`Active`},{name:`Enzo Fernández`,age:25,nationality:`Argentina`,height:178,weight:77,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`],club:`Chelsea`,league:`Premier League`,status:`Active`},{name:`Martin Ødegaard`,age:27,nationality:`Norway`,height:178,weight:68,preferredFoot:`left`,primaryPosition:`CAM`,secondaryPositions:[`CM`],club:`Arsenal`,league:`Premier League`,status:`Active`},{name:`Toni Kroos`,age:36,nationality:`Germany`,height:183,weight:76,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`],club:`Real Madrid`,league:`La Liga`,status:`Retired`},{name:`Ilkay Gündoğan`,age:35,nationality:`Germany`,height:180,weight:79,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`,`CDM`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Andrea Pirlo`,age:46,nationality:`Italy`,height:177,weight:68,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`],club:`Juventus`,league:`Serie A`,status:`Retired`},{name:`Xavi Hernández`,age:46,nationality:`Spain`,height:170,weight:68,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[],club:`Barcelona`,league:`La Liga`,status:`Retired`},{name:`Andrés Iniesta`,age:41,nationality:`Spain`,height:171,weight:68,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`,`LW`],club:`Vissel Kobe`,league:`J1 League`,status:`Retired`},{name:`Steven Gerrard`,age:45,nationality:`England`,height:183,weight:83,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`,`CDM`,`RM`],club:`Liverpool`,league:`Premier League`,status:`Retired`},{name:`Frank Lampard`,age:47,nationality:`England`,height:184,weight:84,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`],club:`Chelsea`,league:`Premier League`,status:`Retired`},{name:`Paul Scholes`,age:51,nationality:`England`,height:168,weight:70,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`],club:`Manchester United`,league:`Premier League`,status:`Retired`},{name:`Bruno Fernandes`,age:31,nationality:`Portugal`,height:179,weight:69,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`CM`,`RM`],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Jamal Musiala`,age:23,nationality:`Germany`,height:184,weight:72,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`LM`,`LW`,`CM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Florian Wirtz`,age:23,nationality:`Germany`,height:176,weight:70,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`CM`,`LW`,`RW`],club:`Bayer Leverkusen`,league:`Bundesliga`,status:`Active`},{name:`James Maddison`,age:29,nationality:`England`,height:175,weight:73,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`CM`,`LW`],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Dominik Szoboszlai`,age:25,nationality:`Hungary`,height:186,weight:74,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`CM`,`RM`],club:`Liverpool`,league:`Premier League`,status:`Active`},{name:`Kai Havertz`,age:26,nationality:`Germany`,height:193,weight:82,preferredFoot:`left`,primaryPosition:`CF`,secondaryPositions:[`ST`,`CAM`],club:`Arsenal`,league:`Premier League`,status:`Active`},{name:`Antoine Griezmann`,age:35,nationality:`France`,height:176,weight:73,preferredFoot:`left`,primaryPosition:`CF`,secondaryPositions:[`CAM`,`SS`,`ST`],club:`Atlético Madrid`,league:`La Liga`,status:`Active`},{name:`Ronaldinho Gaúcho`,age:46,nationality:`Brazil`,height:181,weight:80,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`LW`,`CF`],club:`Barcelona`,league:`La Liga`,status:`Retired`},{name:`Kaká Ricardo`,age:44,nationality:`Brazil`,height:186,weight:82,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`CF`],club:`AC Milan`,league:`Serie A`,status:`Retired`},{name:`Christian Eriksen`,age:34,nationality:`Denmark`,height:182,weight:76,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Eduardo Camavinga`,age:23,nationality:`France`,height:182,weight:77,preferredFoot:`left`,primaryPosition:`CM`,secondaryPositions:[`CDM`,`LB`],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Douglas Luiz`,age:28,nationality:`Brazil`,height:175,weight:70,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`],club:`Juventus`,league:`Serie A`,status:`Active`},{name:`Hakan Çalhanoğlu`,age:32,nationality:`Turkey`,height:178,weight:72,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`,`CAM`],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Vitinha Ferreira`,age:26,nationality:`Portugal`,height:172,weight:64,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`,`CDM`],club:`Paris Saint-Germain`,league:`Ligue 1`,status:`Active`},{name:`Warren Zaïre-Emery`,age:20,nationality:`France`,height:178,weight:70,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`],club:`Paris Saint-Germain`,league:`Ligue 1`,status:`Active`},{name:`Mikel Merino`,age:29,nationality:`Spain`,height:188,weight:83,preferredFoot:`left`,primaryPosition:`CM`,secondaryPositions:[`CDM`],club:`Arsenal`,league:`Premier League`,status:`Active`},{name:`Martin Zubimendi`,age:27,nationality:`Spain`,height:181,weight:74,preferredFoot:`right`,primaryPosition:`CDM`,secondaryPositions:[`CM`],club:`Real Sociedad`,league:`La Liga`,status:`Active`},{name:`Leon Goretzka`,age:31,nationality:`Germany`,height:189,weight:82,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CDM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Joshua Kimmich`,age:31,nationality:`Germany`,height:177,weight:75,preferredFoot:`right`,primaryPosition:`RB`,secondaryPositions:[`CDM`,`CM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Julian Brandt`,age:29,nationality:`Germany`,height:185,weight:82,preferredFoot:`right`,primaryPosition:`CAM`,secondaryPositions:[`RM`,`LM`,`CM`],club:`Borussia Dortmund`,league:`Bundesliga`,status:`Active`},{name:`Marcel Sabitzer`,age:32,nationality:`Austria`,height:178,weight:77,preferredFoot:`right`,primaryPosition:`CM`,secondaryPositions:[`CAM`,`CDM`],club:`Borussia Dortmund`,league:`Bundesliga`,status:`Active`},{name:`Neymar da Silva Jr`,age:34,nationality:`Brazil`,height:175,weight:68,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`CAM`,`CF`],club:`Al Hilal`,league:`Saudi Pro League`,status:`Active`},{name:`Son Heung-min`,age:33,nationality:`South Korea`,height:183,weight:77,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`ST`,`CF`],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Marcus Rashford`,age:28,nationality:`England`,height:186,weight:70,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`ST`,`CF`],club:`Manchester United`,league:`Premier League`,status:`Active`},{name:`Gabriel Martinelli`,age:24,nationality:`Brazil`,height:178,weight:75,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`LM`],club:`Arsenal`,league:`Premier League`,status:`Active`},{name:`Rafael Leão`,age:26,nationality:`Portugal`,height:188,weight:81,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`ST`],club:`AC Milan`,league:`Serie A`,status:`Active`},{name:`Luis Díaz`,age:29,nationality:`Colombia`,height:180,weight:73,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`LM`],club:`Liverpool`,league:`Premier League`,status:`Active`},{name:`Kingsley Coman`,age:29,nationality:`France`,height:180,weight:76,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`RW`,`LM`,`RM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Jack Grealish`,age:30,nationality:`England`,height:180,weight:81,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`LM`,`CAM`],club:`Manchester City`,league:`Premier League`,status:`Active`},{name:`Khvicha Kvaratskhelia`,age:25,nationality:`Georgia`,height:183,weight:75,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`CAM`,`RW`],club:`Napoli`,league:`Serie A`,status:`Active`},{name:`Kaoru Mitoma`,age:28,nationality:`Japan`,height:178,weight:73,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`LM`],club:`Brighton & Hove Albion`,league:`Premier League`,status:`Active`},{name:`Nico Williams`,age:23,nationality:`Spain`,height:181,weight:70,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`RW`,`LM`],club:`Athletic Bilbao`,league:`La Liga`,status:`Active`},{name:`Bradley Barcola`,age:23,nationality:`France`,height:186,weight:70,preferredFoot:`right`,primaryPosition:`LW`,secondaryPositions:[`RW`],club:`Paris Saint-Germain`,league:`Ligue 1`,status:`Active`},{name:`Thierry Henry`,age:48,nationality:`France`,height:188,weight:83,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`LW`,`CF`],club:`Arsenal`,league:`Premier League`,status:`Retired`},{name:`Rodrygo Goes`,age:25,nationality:`Brazil`,height:174,weight:64,preferredFoot:`right`,primaryPosition:`RW`,secondaryPositions:[`LW`,`ST`],club:`Real Madrid`,league:`La Liga`,status:`Active`},{name:`Ousmane Dembélé`,age:28,nationality:`France`,height:178,weight:67,preferredFoot:`both`,primaryPosition:`RW`,secondaryPositions:[`LW`,`RM`],club:`Paris Saint-Germain`,league:`Ligue 1`,status:`Active`},{name:`Raphinha Dias`,age:29,nationality:`Brazil`,height:176,weight:68,preferredFoot:`left`,primaryPosition:`RW`,secondaryPositions:[`LW`,`CAM`],club:`Barcelona`,league:`La Liga`,status:`Active`},{name:`Serge Gnabry`,age:30,nationality:`Germany`,height:176,weight:77,preferredFoot:`right`,primaryPosition:`RW`,secondaryPositions:[`LW`,`LM`,`RM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Leroy Sané`,age:30,nationality:`Germany`,height:183,weight:80,preferredFoot:`left`,primaryPosition:`RW`,secondaryPositions:[`LW`,`RM`,`LM`],club:`Bayern Munich`,league:`Bundesliga`,status:`Active`},{name:`Dejan Kulusevski`,age:25,nationality:`Sweden`,height:186,weight:75,preferredFoot:`left`,primaryPosition:`RW`,secondaryPositions:[`CAM`,`RM`,`ST`],club:`Tottenham Hotspur`,league:`Premier League`,status:`Active`},{name:`Lamine Yamal`,age:18,nationality:`Spain`,height:178,weight:66,preferredFoot:`left`,primaryPosition:`RW`,secondaryPositions:[`LW`],club:`Barcelona`,league:`La Liga`,status:`Active`},{name:`David Beckham`,age:50,nationality:`England`,height:183,weight:75,preferredFoot:`right`,primaryPosition:`RM`,secondaryPositions:[`CM`],club:`Manchester United`,league:`Premier League`,status:`Retired`},{name:`Lautaro Martínez`,age:28,nationality:`Argentina`,height:174,weight:72,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Victor Osimhen`,age:27,nationality:`Nigeria`,height:185,weight:78,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[],club:`Galatasaray`,league:`Süper Lig`,status:`Active`},{name:`Alexander Isak`,age:26,nationality:`Sweden`,height:192,weight:77,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`,`LW`],club:`Newcastle United`,league:`Premier League`,status:`Active`},{name:`Ollie Watkins`,age:30,nationality:`England`,height:180,weight:70,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`,`LW`],club:`Aston Villa`,league:`Premier League`,status:`Active`},{name:`Darwin Núñez`,age:26,nationality:`Uruguay`,height:187,weight:81,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`LW`],club:`Liverpool`,league:`Premier League`,status:`Active`},{name:`Gabriel Jesus`,age:29,nationality:`Brazil`,height:175,weight:73,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`,`RW`,`LW`],club:`Arsenal`,league:`Premier League`,status:`Active`},{name:`Romelu Lukaku`,age:32,nationality:`Belgium`,height:191,weight:94,preferredFoot:`left`,primaryPosition:`ST`,secondaryPositions:[],club:`Napoli`,league:`Serie A`,status:`Active`},{name:`Alvaro Morata`,age:33,nationality:`Spain`,height:189,weight:85,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[],club:`AC Milan`,league:`Serie A`,status:`Active`},{name:`Julián Álvarez`,age:26,nationality:`Argentina`,height:170,weight:71,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`,`LW`,`CAM`],club:`Atlético Madrid`,league:`La Liga`,status:`Active`},{name:`Victor Boniface`,age:25,nationality:`Nigeria`,height:189,weight:91,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`],club:`Bayer Leverkusen`,league:`Bundesliga`,status:`Active`},{name:`Marcus Thuram`,age:28,nationality:`France`,height:192,weight:90,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`,`LW`],club:`Inter Milan`,league:`Serie A`,status:`Active`},{name:`Ronaldo Nazário`,age:49,nationality:`Brazil`,height:183,weight:82,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`],club:`Real Madrid`,league:`La Liga`,status:`Retired`},{name:`Roberto Baggio`,age:59,nationality:`Italy`,height:174,weight:73,preferredFoot:`right`,primaryPosition:`SS`,secondaryPositions:[`CAM`,`CF`],club:`Juventus`,league:`Serie A`,status:`Retired`},{name:`Alessandro Del Piero`,age:51,nationality:`Italy`,height:174,weight:73,preferredFoot:`right`,primaryPosition:`SS`,secondaryPositions:[`CF`,`LW`,`CAM`],club:`Juventus`,league:`Serie A`,status:`Retired`},{name:`Francesco Totti`,age:49,nationality:`Italy`,height:180,weight:82,preferredFoot:`right`,primaryPosition:`CF`,secondaryPositions:[`SS`,`F9`,`CAM`],club:`AS Roma`,league:`Serie A`,status:`Retired`},{name:`Karim Benzema`,age:38,nationality:`France`,height:185,weight:81,preferredFoot:`right`,primaryPosition:`ST`,secondaryPositions:[`CF`,`F9`],club:`Al Ittihad`,league:`Saudi Pro League`,status:`Active`}],ne={lionelmessi:`158023`,cristianoronaldo:`20801`,erlinghaaland:`239085`,kylianmbappe:`231747`,mohamedsalah:`209331`,kevindebruyne:`192985`,virgilvandijk:`203376`,alissonbecker:`212831`,pele:`243458`,diegomaradona:`190042`,harrykane:`202126`,robertlewandowski:`188545`,judebellingham:`252371`,bukayosaka:`246781`,viniciusjunior:`238794`,lukamodric:`177003`,declanrice:`234396`,pedri:`251852`,williamsaliba:`243630`,trentalexanderarnold:`231226`,theohernandez:`232656`,manuelneuer:`167495`,gianluigidonnarumma:`230621`,thibautcourtois:`192119`,paolomaldini:`250005`,zinedinezidane:`250006`,francescototti:`250010`,sofyanamrabat:`234905`,francobaresi:`250008`,jonathantah:`212626`,carlespuyol:`250007`,gennarogattuso:`250009`,victorboniface:`263595`,ronaldonazario:`243459`},re=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z]/g,``),ie=e=>{let t=ne[re(e.name)];return t?(e.imageUrl=`https://ratings-c-prod.ea.com/ratings/25/player-portraits/${t}.png`,e.imageFallbackUrls=[`https://ratings-c-prod.ea.com/ratings/24/player-portraits/${t}.png`,`https://cdn.futbin.com/content/fifa24/img/players/${t}.png`,`https://cdn.sofifa.net/players/180/165/${t}.png`]):(e.imageUrl=null,e.imageFallbackUrls=[]),e},ae=[`High Press`,`Counter Attack`,`Possession`,`Direct Football`,`Dribbler`,`Creative`,`Clinical Finisher`,`Fast Runner`,`Crossing Specialist`,`Long Pass Specialist`,`Playmaker`,`Physical`,`Defensive Leader`,`Set Piece Specialist`],oe=e=>e[Math.floor(Math.random()*e.length)],T=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,se=(e,t)=>{let n=e.primaryPosition,r=n===`GK`,i=e.preferredFoot===`both`?5:T(3,4),a=e=>e===`high`?T(76,90):e===`medium`?T(60,75):T(30,59),o=`medium`,s=`medium`,c=`medium`;[`CB`,`CDM`].includes(n)?(o=Math.random()<.6?`high`:`medium`,c=`high`,s=`low`):[`LW`,`RW`,`CAM`].includes(n)?(o=`high`,s=`high`,c=`low`):[`ST`,`CF`].includes(n)?(o=`medium`,s=`high`,c=`low`):[`CM`,`LM`,`RM`].includes(n)?(o=`medium`,s=`high`,c=`medium`):[`LB`,`RB`,`LWB`,`RWB`].includes(n)&&(o=`high`,s=`medium`,c=`medium`);let l={},u={},d={},f={};r?(l.acceleration=T(45,62),l.sprintSpeed=T(45,62),l.agility=T(58,80),l.balance=T(50,72),l.strength=T(70,88),l.stamina=T(40,65),l.jumping=T(75,90),l.reactions=T(75,90),l.endurance=T(45,68),l.physicality=T(70,85),u.ballControl=T(55,78),u.firstTouch=T(55,78),u.dribbling=T(25,50),u.closeControl=T(25,48),u.shortPassing=T(60,82),u.longPassing=T(60,85),u.vision=T(55,80),u.crossing=T(10,25),u.curve=T(12,35),u.finishing=T(8,25),u.shotPower=T(40,70),u.longShots=T(8,25),u.volleys=T(8,25),u.heading=T(35,55),u.penalties=T(30,60),u.freeKickAccuracy=T(10,35),u.throughBalls=T(40,70),u.skillMoves=T(20,45),d.defensiveAwareness=T(10,30),d.interceptions=T(10,30),d.standingTackle=T(10,25),d.slidingTackle=T(8,20),d.marking=T(8,22),d.pressing=T(15,38),d.aggression=T(25,55),d.aerialAbility=T(75,90),f.diving=T(72,88),f.reflexes=T(74,91),f.handling=T(70,86),f.positioning=T(72,88),f.kicking=T(65,85),f.distribution=T(68,86),f.communication=T(70,88),f.oneOnOne=T(72,90)):(l.acceleration=a(o===`high`?`high`:`medium`),l.sprintSpeed=a(o===`high`?`high`:`medium`),l.agility=a(o===`high`?`high`:`medium`),l.balance=a(`medium`),l.strength=a(n===`CB`||n===`ST`?`high`:`medium`),l.stamina=a(n===`CDM`||[`LB`,`RB`,`LWB`,`RWB`].includes(n)?`high`:`medium`),l.jumping=a(n===`CB`||n===`ST`?`high`:`medium`),l.reactions=a(`medium`),l.endurance=l.stamina-T(0,5),l.physicality=Math.round((l.strength+l.stamina+l.jumping)/3),u.ballControl=a(s),u.firstTouch=a(s),u.dribbling=a([`LW`,`RW`,`CAM`,`SS`].includes(n)?`high`:s),u.closeControl=u.dribbling-T(0,4),u.shortPassing=a([`CM`,`CAM`,`CDM`,`F9`].includes(n)?`high`:`medium`),u.longPassing=a([`CM`,`CAM`,`CDM`].includes(n)?`high`:`medium`),u.vision=a([`CAM`,`CM`,`F9`].includes(n)?`high`:`medium`),u.crossing=a([`LB`,`RB`,`LWB`,`RWB`,`LM`,`RM`,`LW`,`RW`].includes(n)?`high`:`low`),u.curve=a(`medium`),u.finishing=a([`ST`,`CF`,`SS`,`F9`].includes(n)?`high`:[`LW`,`RW`,`CAM`].includes(n)?`medium`:`low`),u.shotPower=a([`ST`,`CF`,`CAM`].includes(n)?`high`:`medium`),u.longShots=a([`CAM`,`CM`,`LW`,`RW`,`ST`].includes(n)?`high`:`medium`),u.volleys=a(`medium`),u.heading=a([`CB`,`ST`,`CF`].includes(n)?`high`:`low`),u.penalties=a(`medium`),u.freeKickAccuracy=a(`medium`),u.throughBalls=u.shortPassing-T(2,6),u.skillMoves=a([`LW`,`RW`,`CAM`,`SS`].includes(n)?`high`:`medium`),d.defensiveAwareness=a(c),d.interceptions=a(c),d.standingTackle=a(c),d.slidingTackle=d.standingTackle-T(2,8),d.marking=a(c),d.pressing=a([`CB`,`CDM`,`CM`,`LB`,`RB`].includes(n)?`high`:`medium`),d.aggression=a(n===`CB`||n===`CDM`?`high`:`medium`),d.aerialAbility=a(n===`CB`?`high`:`medium`),f.diving=T(5,15),f.reflexes=T(5,15),f.handling=T(5,15),f.positioning=T(5,15),f.kicking=T(5,15),f.distribution=T(5,15),f.communication=T(5,15),f.oneOnOne=T(5,15));let p=[];if(r)p.push(`sweeperKeeper`);else{let e={CB:[`ballWinning`],LB:[`insideForward`,`boxToBox`,`traditionalWinger`],RB:[`insideForward`,`boxToBox`,`traditionalWinger`],LWB:[`traditionalWinger`,`boxToBox`,`insideForward`],RWB:[`traditionalWinger`,`boxToBox`,`insideForward`],CDM:[`ballWinning`,`deepPlaymaker`],CM:[`boxToBox`,`playmaker`,`deepPlaymaker`],CAM:[`playmaker`,`insideForward`],LM:[`traditionalWinger`,`insideForward`,`playmaker`],RM:[`traditionalWinger`,`insideForward`,`playmaker`],LW:[`insideForward`,`traditionalWinger`,`advancedForward`],RW:[`insideForward`,`traditionalWinger`,`advancedForward`],CF:[`false9`,`poacher`,`advancedForward`,`targetMan`],ST:[`poacher`,`targetMan`,`advancedForward`,`completeForward`],SS:[`false9`,`playmaker`,`poacher`],F9:[`false9`,`playmaker`]}[n]||[`boxToBox`];if(p.push(oe(e)),Math.random()<.4&&e.length>1){let t=e.find(e=>e!==p[0]);t&&p.push(t)}}let m=[];if(r)m.push(`Possession`,`Defensive Leader`);else{let e={defensive:[`High Press`,`Physical`,`Defensive Leader`],midfield:[`Possession`,`Creative`,`Playmaker`,`Long Pass Specialist`],winger:[`Counter Attack`,`Dribbler`,`Fast Runner`,`Crossing Specialist`],forward:[`Clinical Finisher`,`Physical`,`Counter Attack`]},t=`midfield`;[`CB`,`CDM`].includes(n)?t=`defensive`:[`LB`,`RB`,`LWB`,`RWB`,`LW`,`RW`,`LM`,`RM`].includes(n)?t=`winger`:[`ST`,`CF`,`SS`,`F9`].includes(n)&&(t=`forward`),m.push(oe(e[t])),m.push(oe(ae.filter(e=>!m.includes(e)))),Math.random()<.5&&m.push(oe(ae.filter(e=>!m.includes(e))))}return{id:`real_${e.name.toLowerCase().replace(/[^a-z]/g,``)}_${t}`,name:e.name,nickname:``,dob:`${new Date().getFullYear()-e.age}-01-01`,age:e.age,nationality:e.nationality,height:e.height,weight:e.weight,preferredFoot:e.preferredFoot,weakFoot:i,primaryPosition:e.primaryPosition,secondaryPositions:e.secondaryPositions,club:e.club,league:e.league,nationalTeam:e.nationality,status:e.status,isGK:r,physical:l,technical:u,defensive:d,goalkeeper:f,tacticalProfile:p,playingStyle:m}},ce=new class{constructor(){this.players=[],this.initialized=!1}initialize(){this.initialized||(this.players=[...ee],te.forEach((e,t)=>{let n=e.name.toLowerCase();this.players.some(e=>e.name.toLowerCase()===n)||this.players.push(se(e,t))}),this.players=this.players.map(e=>ie(e)),this.initialized=!0,console.log(`Real Footballer Database Initialized. Total Real Verified Players: ${this.players.length}`))}getAllPlayers(){return this.initialize(),this.players}getPlayersByPosition(e){return this.initialize(),this.players.filter(t=>t.primaryPosition===e||t.secondaryPositions.includes(e))}addCustomPlayer(e){this.initialize(),this.players.push(e)}},le={GK:[`GK`],CB:[`CB`,`LB`,`RB`,`CDM`],LB:[`LB`,`LWB`,`LM`,`CB`],RB:[`RB`,`RWB`,`RM`,`CB`],LWB:[`LWB`,`LB`,`LM`,`LW`],RWB:[`RWB`,`RB`,`RM`,`RW`],CDM:[`CDM`,`CM`,`CB`],CM:[`CM`,`CDM`,`CAM`],CAM:[`CAM`,`CM`,`SS`,`LM`,`RM`],LM:[`LM`,`LW`,`LWB`,`CM`,`RM`],RM:[`RM`,`RW`,`RWB`,`CM`,`LM`],LW:[`LW`,`RW`,`LM`,`CF`,`ST`],RW:[`RW`,`LW`,`RM`,`CF`,`ST`],CF:[`CF`,`ST`,`SS`,`F9`,`LW`,`RW`],ST:[`ST`,`CF`,`SS`,`F9`],SS:[`SS`,`CF`,`CAM`,`F9`],F9:[`F9`,`CF`,`SS`,`ST`]},E={GK:[`GK`],DEF:[`CB`,`LB`,`RB`,`LWB`,`RWB`],MID:[`CDM`,`CM`,`CAM`,`LM`,`RM`],FWD:[`LW`,`RW`,`CF`,`ST`,`SS`,`F9`]},D={opt1:`Dribbler`,opt2:`Possession`,opt3:`Long Pass Specialist`,opt4:`Crossing Specialist`,opt5:`Clinical Finisher`,opt6:`Physical`,opt7:`Defensive Leader`,opt8:`High Press`,opt9:`Playmaker`,opt10:`Clinical Finisher`,opt11:`Possession`,opt12:`Counter Attack`,opt13:`Dribbler`,opt14:`Fast Runner`,opt15:`Playmaker`,opt16:`Physical`,opt17:`Creative`},ue={possession:`Possession`,counter:`Counter Attack`,highPress:`High Press`,direct:`Direct Football`,wingPlay:`Crossing Specialist`,defensive:`Defensive Leader`},de=e=>E.GK.includes(e)?`GK`:E.DEF.includes(e)?`DEF`:E.MID.includes(e)?`MID`:E.FWD.includes(e)?`FWD`:`MID`,fe=(e,t,n=[])=>{if(e===t)return 100;if(n.includes(e))return 92;let r=le[e]||[];return r.includes(t)?75:n.some(e=>r.includes(e))?65:de(e)===de(t)?40:15},pe=(e,t)=>{let n=Object.keys(e);if(n.length===0)return 0;let r=0;n.forEach(n=>{let i=Number(e[n])||50,a=Number(t[n])||50;r+=(i-a)**2});let i=Math.sqrt(r/n.length);return Math.max(0,100-i)},me=(e=[],t=[])=>{if(e.length===0)return 100;let n=e.map(e=>D[e]).filter(Boolean);if(n.length===0)return 100;let r=0;return n.forEach(e=>{t.includes(e)&&r++}),r/n.length*100},O=(e,t=[],n=[])=>{let r=ue[e.system],i=e.role,a=n.includes(r)?100:30,o=20;if(t.includes(i))o=100;else{let e=i.charAt(0).toUpperCase()+i.slice(1);n.includes(e)&&(o=70)}return a*.4+o*.6},he=(e,t)=>e===t?100:e===`both`||t===`both`?85:25,ge=(e,t,n,r=`en`)=>{let i=[],a=(e,t,n,r)=>{Number(e)>=70&&Number(t)>=70&&i.push({en:n,vi:r})};t.isGK?(a(e.goalkeeper.diving,t.goalkeeper.diving,`shot-stopping diving`,`khả năng bay người cản phá`),a(e.goalkeeper.reflexes,t.goalkeeper.reflexes,`reflexes`,`phản xạ nhanh nhẹn`),a(e.goalkeeper.handling,t.goalkeeper.handling,`ball handling security`,`bắt bóng dính`),a(e.goalkeeper.positioning,t.goalkeeper.positioning,`positioning`,`chọn vị trí tối ưu`),a(e.goalkeeper.distribution,t.goalkeeper.distribution,`distribution & kicking`,`phát bóng tấn công`)):(a(e.technical.shortPassing,t.technical.shortPassing,`short passing`,`chuyền ngắn`),a(e.technical.longPassing,t.technical.longPassing,`long passing range`,`chuyền dài`),a(e.technical.vision,t.technical.vision,`vision & creativity`,`nhãn quan chiến thuật`),a(e.technical.dribbling,t.technical.dribbling,`dribbling ability`,`rê bóng khéo léo`),a(e.technical.ballControl,t.technical.ballControl,`close ball control`,`khả năng giữ bóng`),a(e.technical.finishing,t.technical.finishing,`clinical finishing`,`dứt điểm sắc bén`),a(e.technical.crossing,t.technical.crossing,`crossing accuracy`,`tạt bóng chuẩn xác`),a(e.technical.heading,t.technical.heading,`aerial headers`,`đánh đầu`),a(e.physical.acceleration,t.physical.acceleration,`acceleration`,`bứt tốc nhanh`),a(e.physical.sprintSpeed,t.physical.sprintSpeed,`sprint speed`,`tốc độ bứt phá`),a(e.physical.stamina,t.physical.stamina,`high stamina`,`thể lực bền bỉ`),a(e.physical.strength,t.physical.strength,`strength & physicality`,`tì đè tranh chấp`),a(e.defensive.standingTackle,t.defensive.standingTackle,`tackling prowess`,`tranh cướp bóng`),a(e.defensive.defensiveAwareness,t.defensive.defensiveAwareness,`defensive awareness`,`đọc tình huống phòng ngự`),a(e.defensive.interceptions,t.defensive.interceptions,`interceptions`,`cắt đường chuyền`)),i.length===0&&(t.isGK?(i.push({en:`goalkeeping stability`,vi:`sự ổn định khung gỗ`}),i.push({en:`positional awareness`,vi:`nhạy bén vị trí`})):t.primaryPosition===`CB`?(i.push({en:`defensive solidity`,vi:`sự vững chãi phòng thủ`}),i.push({en:`physical presence`,vi:`thể hình tranh chấp`})):[`CM`,`CDM`,`CAM`].includes(t.primaryPosition)?(i.push({en:`tactical discipline`,vi:`kỷ luật chiến thuật`}),i.push({en:`passing link-up`,vi:`kết nối lối chơi`})):(i.push({en:`attacking threat`,vi:`khả năng uy hiếp tấn công`}),i.push({en:`pace & movement`,vi:`tốc độ di chuyển`})));let o=i.slice(0,3),s=o.map(e=>e.en).join(`, `),c=o.map(e=>e.vi).join(`, `),l=Math.abs(n.physical-100),u=`show minor differences`,d=`có sự tương đồng cao`;l>25?(u=`show moderate differences`,d=`có sự khác biệt vừa phải`):l>45&&(u=`show significant physical divergence`,d=`khác biệt rõ rệt về thể trạng`);let f=n.technical,p=`extremely similar`,m=`rất tương đồng`;return f<75?(p=`moderately aligned`,m=`gần giống nhau`):f<60&&(p=`have visible technical gaps`,m=`có một vài khác biệt kỹ thuật`),r===`en`?`You were matched with ${t.name} because both of you excel in ${s}. Your technical profile is ${p}, while your physical attributes ${u}.`:`Bạn được so khớp với ${t.name} vì cả hai đều nổi bật ở ${c}. Chỉ số kỹ thuật của bạn và cầu thủ này ${m}, trong khi các thông số thể trạng ${d}.`},_e=e=>{let t=performance.now(),n=ce.getAllPlayers(),r=e.basic.primaryPosition===`GK`,i=[];for(let t of n){if(r!==t.isGK)continue;let n=fe(e.basic.primaryPosition,t.primaryPosition,t.secondaryPositions),a=pe(e.physical,t.physical),o=pe(e.technical,t.technical),s=pe(e.defensive,t.defensive),c=r?pe(e.goalkeeper,t.goalkeeper):0,l=O(e.tactics,t.tacticalProfile,t.playingStyle),u=me(e.styles,t.playingStyle),d=he(e.basic.preferredFoot,t.preferredFoot),f=Math.abs(Number(e.basic.height)-t.height),p=Math.max(0,100-f*4),m=Math.abs(Number(e.basic.weight)-t.weight),h=Math.max(0,100-m*3.33),g=Math.abs(Number(e.basic.age)-t.age),_=Math.max(0,100-g*3),v={physical:Math.round(a),technical:Math.round(o),defensive:Math.round(s),tactical:Math.round(l),styles:Math.round(u),demographics:Math.round(p*.6+h*.4),position:Math.round(n),foot:Math.round(d)};r&&(v.goalkeeping=Math.round(c));let y={};y=r?{goalkeeper:1,technical:.3,physical:.5,defensive:.1,tactical:.6,styles:.6,foot:.4,demographics:.15,age:.02,position:.7}:{technical:1,physical:.8,defensive:.5,tactical:.8,styles:.8,foot:.4,demographics:.15,age:.02,position:.7};let b=0,x=0,S=(e,t)=>{b+=e*t,x+=t};r?(S(c,y.goalkeeper),S(o,y.technical),S(a,y.physical),S(s,y.defensive)):(S(o,y.technical),S(a,y.physical),S(s,y.defensive)),S(l,y.tactical),S(u,y.styles),S(d,y.foot),S(p*.6+h*.4,y.demographics),S(_,y.age),S(n,y.position);let C=Number((b/x).toFixed(1)),w=ge(e,t,v,`en`),ee=ge(e,t,v,`vi`);i.push({player:t,overallScore:C,categories:v,explanationEn:w,explanationVi:ee})}i.sort((e,t)=>t.overallScore-e.overallScore);let a=performance.now()-t;return console.log(`Matched profile in ${a.toFixed(2)}ms against ${n.length} players.`),{matches:i,durationMs:a}},ve=(0,b.createContext)(),ye={basic:{name:``,nickname:``,age:``,height:``,weight:``,preferredFoot:`right`,primaryPosition:``},physical:{acceleration:50,sprintSpeed:50,agility:50,balance:50,strength:50,stamina:50,jumping:50,physicality:50,reactions:50,composure:50,endurance:50},technical:{ballControl:50,firstTouch:50,dribbling:50,closeControl:50,shortPassing:50,longPassing:50,vision:50,crossing:50,curve:50,finishing:50,shotPower:50,longShots:50,volleys:50,heading:50,penalty:50,freeKickAccuracy:50,throughBalls:50,weakFootAbility:50,skillMoves:50},defensive:{defensiveAwareness:50,interceptions:50,standingTackle:50,slidingTackle:50,marking:50,pressing:50,aggression:50,aerialAbility:50},goalkeeper:{diving:50,reflexes:50,handling:50,positioning:50,kicking:50,distribution:50,oneOnOne:50,communication:50},styles:[],personality:[],tactics:{system:``,role:``}},be=({children:e})=>{let[t,n]=(0,b.useState)(ye),[r,i]=(0,b.useState)(1),[a,o]=(0,b.useState)(!1),[s,c]=(0,b.useState)({}),[l,u]=(0,b.useState)(!1),[d,f]=(0,b.useState)(null);(0,b.useEffect)(()=>{let e=localStorage.getItem(`football_questionnaire_draft`);if(e)try{let t=JSON.parse(e);t&&t.basic&&t.basic.name&&o(!0)}catch(e){console.error(`Failed to parse draft questionnaire`,e)}},[]),(0,b.useEffect)(()=>{if(!l&&t.basic.name!==``){let e={formData:t,currentStep:r};localStorage.setItem(`football_questionnaire_draft`,JSON.stringify(e))}},[t,r,l]);let p=()=>{let e=localStorage.getItem(`football_questionnaire_draft`);if(e)try{let t=JSON.parse(e);t.formData&&n(t.formData),t.currentStep&&i(t.currentStep),o(!1)}catch(e){console.error(`Error loading saved session`,e)}},m=()=>{localStorage.removeItem(`football_questionnaire_draft`),n(ye),i(1),o(!1),c({})},h=(e,t,r)=>{n(n=>({...n,[e]:{...n[e],[t]:r}})),s[t]&&c(e=>{let n={...e};return delete n[t],n})},g=(e,t)=>{n(n=>{let r=n[e],i=r.includes(t)?r.filter(e=>e!==t):[...r,t];return{...n,[e]:i}}),s[e]&&c(t=>{let n={...t};return delete n[e],n})},_=t.basic.primaryPosition===`GK`,v=e=>{let n={};if(e===1){t.basic.name.trim()||(n.name=!0);let e=parseInt(t.basic.age);(isNaN(e)||e<5||e>99)&&(n.age=!0);let r=parseInt(t.basic.height);(isNaN(r)||r<100||r>250)&&(n.height=!0);let i=parseInt(t.basic.weight);(isNaN(i)||i<30||i>150)&&(n.weight=!0),t.basic.primaryPosition||(n.position=!0)}return e===6&&t.styles.length===0&&(n.styles=!0),e===7&&t.personality.length===0&&(n.personality=!0),e===8&&(t.tactics.system||(n.system=!0),t.tactics.role||(n.role=!0)),c(n),Object.keys(n).length===0};return(0,x.jsx)(ve.Provider,{value:{formData:t,currentStep:r,errors:s,isSavedSessionAvailable:a,isGoalkeeper:_,isSubmitted:l,matchResults:d,updateField:h,toggleArrayItem:g,nextStep:()=>v(r)?(i(r===4&&!_?6:e=>e+1),!0):!1,prevStep:()=>{i(r===6&&!_?4:e=>Math.max(e-1,1))},jumpToStep:e=>{i(e)},loadSavedSession:p,clearSession:m,submitForm:()=>{let e=!0;if(v(1)||(e=!1),v(6)||(e=!1),v(7)||(e=!1),v(8)||(e=!1),e){localStorage.removeItem(`football_questionnaire_draft`),localStorage.setItem(`football_questionnaire_final`,JSON.stringify(t));let e=_e(t);return f(e),localStorage.setItem(`football_questionnaire_results`,JSON.stringify({formData:t,matches:e.matches,durationMs:e.durationMs})),u(!0),!0}return!1},restartQuestionnaire:()=>{n(ye),i(1),u(!1),f(null),c({})},validateStep:v},children:e})},xe=()=>{let e=(0,b.useContext)(ve);if(!e)throw Error(`useQuestionnaire must be used within a QuestionnaireProvider`);return e},k={en:{nav:{logo:`ARENA FIT`,home:`Home`,about:`About`,faq:`FAQ`,settings:`Settings`},hero:{title:`Which Professional Footballer Are You?`,subtitle:`Answer a few questions and discover the real football player whose playing style, physical profile, and football abilities are most similar to yours.`,cta:`Start Matching`},about:{title:`Analyze Your Game`,subtitle:`We use a multi-dimensional matching engine to compare your traits with elite players.`,card1Title:`Physical Profile`,card1Desc:`We evaluate your height, speed, endurance, and strength to match you with players of similar physical attributes.`,card2Title:`Playing Style`,card2Desc:`Whether you are a deep-lying playmaker, a clinical finisher, or a rock-solid defender, we analyze your tactical footprint.`,card3Title:`Technical Ability`,card3Desc:`Dribbling, passing accuracy, defensive awareness, and shooting power are factored into our high-precision matching engine.`},faq:{title:`Frequently Asked Questions`,subtitle:`Got questions? We have answers to help you get ready for the match.`,q1:`How accurate is the matching algorithm?`,a1:`Our algorithm uses real-world statistics from active professional leagues to compare your attributes and style with hundreds of elite footballers, yielding a high-precision match.`,q2:`Can I choose multiple positions?`,a2:`Yes! In the upcoming questionnaire, you will be able to select your preferred positions and specify how you adapt to different roles on the pitch.`,q3:`Is my personal data saved?`,a3:`No, we respect your privacy. All your questionnaire inputs are analyzed in real-time, and your results are not stored on our servers.`,q4:`How long does the assessment take?`,a4:`It takes about 3-5 minutes. The questions cover your physical traits, preferred actions on the pitch, and mental attributes.`},settings:{title:`Settings`,language:`Language`,theme:`Theme`,animations:`Animations`,sound:`Sound Effects`,reset:`Reset Defaults`,dark:`Dark Mode`,light:`Light Mode`,on:`ON`,off:`OFF`},footer:{copyright:`© 2026 Arena Fit. All rights reserved.`,about:`About Us`,privacy:`Privacy Policy`,terms:`Terms of Service`,contact:`Contact Support`},loading:{text:`Preparing Pitch...`},questionnaire:{recoveryTitle:`Resume Scouting Report?`,recoveryDesc:`We found an unfinished scouting report from your last session. Would you like to resume it?`,btnResume:`Resume Draft`,btnStartFresh:`Start Fresh`,step:`Step`,of:`of`,btnPrev:`Previous`,btnNext:`Next Step`,btnSave:`Save & Continue`,btnSubmit:`Find My Football Twin`,validationHeader:`Review needed:`,steps:{step1:`Basic Information`,step2:`Physical Attributes`,step3:`Technical Attributes`,step4:`Defensive Attributes`,step5:`Goalkeeper Attributes`,step6:`Playing Style`,step7:`Personality & Mentality`,step8:`Tactical Preferences`,review:`Review Report`},basic:{name:`Full Name`,namePlaceholder:`Enter your full name`,nickname:`Nickname (Optional)`,nicknamePlaceholder:`e.g., The Magician`,age:`Age`,height:`Height (cm)`,weight:`Weight (kg)`,foot:`Preferred Foot`,footLeft:`Left Foot`,footLeftDesc:`Loves cutting inside or driving crosses on the left flank.`,footRight:`Right Foot`,footRightDesc:`Standard dominant foot. Great for classic wing play or shooting.`,footBoth:`Both Feet`,footBothDesc:`Rare ability. Highly adaptable, passing/shooting with both feet.`,position:`Primary Position Selector`,positionSubtitle:`Select using either the Interactive Pitch or Categories below`,selectedPositionLabel:`Selected Position`,validation:{name:`Please enter your scouting name.`,age:`Age must be between 5 and 99.`,height:`Height must be between 100cm and 250cm.`,weight:`Weight must be between 30kg and 150kg.`,position:`Please select a primary position.`},categories:{goalkeeper:`Goalkeeper`,defenders:`Defenders`,midfielders:`Midfielders`,forwards:`Forwards`},positions:{GK:{name:`Goalkeeper (GK)`,desc:`Protects the net and directs the defense.`},LB:{name:`Left Back (LB)`,desc:`Defends flanks and supports wing transitions.`},CB:{name:`Center Back (CB)`,desc:`Stops central attackers and clears threats.`},RB:{name:`Right Back (RB)`,desc:`Defends flanks and supports wing transitions.`},LWB:{name:`Left Wing Back (LWB)`,desc:`High-endurance flank defender who overlaps to cross.`},RWB:{name:`Right Wing Back (RWB)`,desc:`High-endurance flank defender who overlaps to cross.`},CDM:{name:`Defensive Midfielder (CDM)`,desc:`Shields backline and disrupts opponent build-up.`},CM:{name:`Central Midfielder (CM)`,desc:`Controls midfield tempo, links defense and attack.`},CAM:{name:`Attacking Midfielder (CAM)`,desc:`Creates scoring chances and exploits spaces.`},LM:{name:`Left Midfielder (LM)`,desc:`Drives flank play, provides width and crosses.`},RM:{name:`Right Midfielder (RM)`,desc:`Drives flank play, provides width and crosses.`},LW:{name:`Left Winger (LW)`,desc:`Pacy flank attacker who cuts inside to shoot.`},RW:{name:`Right Winger (RW)`,desc:`Pacy flank attacker who cuts inside to shoot.`},CF:{name:`Center Forward (CF)`,desc:`Primary target, holds up ball and links attack.`},ST:{name:`Striker (ST)`,desc:`Clinical finisher, aims to convert key chances.`},SS:{name:`Second Striker (SS)`,desc:`Supports striker, floats between lines to link play.`},F9:{name:`False 9`,desc:`Drops deep to drag defenders and create space.`}}},physical:{title:`Rate your physical traits (1-100)`,acceleration:`Acceleration`,sprintSpeed:`Sprint Speed`,agility:`Agility`,balance:`Balance`,strength:`Strength`,stamina:`Stamina`,jumping:`Jumping Reach`,physicality:`Physicality`,reactions:`Reactions`,composure:`Composure`,endurance:`Endurance`},technical:{title:`Rate your technical skills (1-100)`,ballControl:`Ball Control`,firstTouch:`First Touch`,dribbling:`Dribbling`,closeControl:`Close Control`,shortPassing:`Short Passing`,longPassing:`Long Passing`,vision:`Vision & Awareness`,crossing:`Crossing`,curve:`Curve`,finishing:`Finishing & Shooting`,shotPower:`Shot Power`,longShots:`Long Shots`,volleys:`Volleys`,heading:`Heading`,penalty:`Penalties`,freeKickAccuracy:`Free Kick Accuracy`,throughBalls:`Through Balls`,weakFootAbility:`Weak Foot Ability`,skillMoves:`Skill Moves Level`},defensive:{title:`Rate your defensive traits (1-100)`,defensiveAwareness:`Defensive Awareness`,interceptions:`Interceptions`,standingTackle:`Standing Tackle`,slidingTackle:`Sliding Tackle`,marking:`Man Marking`,pressing:`Pressing Intensity`,aggression:`Aggression`,aerialAbility:`Aerial Defense`},goalkeeper:{title:`Rate your goalkeeper traits (1-100)`,diving:`Goalkeeper Diving`,reflexes:`Reflexes`,handling:`Handling`,positioning:`Positioning`,kicking:`Kicking`,distribution:`Distribution & Passing`,oneOnOne:`1-v-1 Ability`,communication:`Box Communication`},style:{title:`Select your playing styles (Select multiple)`,validation:`Choose at least one playing style.`,opt1:`I like dribbling through defenders`,opt2:`I like short, quick passing combinations`,opt3:`I like switching play with long passes`,opt4:`I like whipping crosses into the box`,opt5:`I like shooting from long range`,opt6:`I like attacking aerial duels & headers`,opt7:`I like blocking shots & sliding tackles`,opt8:`I like pressing opponents high up the pitch`,opt9:`I like threading through-balls to wingers`,opt10:`I like clinical link-up play & scoring goals`,opt11:`I like dictating the pace & keeping possession`,opt12:`I like launching quick counter-attacks`,opt13:`I like teasing defenders with skill moves`,opt14:`I like making overlapping runs into space`,opt15:`I like dropping deep to control the tempo`,opt16:`I like playing physically to protect the ball`,opt17:`I like taking risks in final third plays`},personality:{title:`Select your mental traits (Select multiple)`,validation:`Choose at least one personality trait.`,calm:`Calm & Collected`,aggressive:`Aggressive & Relentless`,creative:`Creative & Unpredictable`,leader:`Vocal Leader`,hardWorker:`Hard Worker / Workhorse`,teamPlayer:`Team-First Mentality`,selfless:`Selfless / Helper`,confident:`Highly Confident`,clinical:`Clinical & Cold`,intelligent:`Tactically Intelligent`,disciplined:`Disciplined / Structured`,passionate:`Passionate / Energetic`,competitive:`Ultra Competitive`,riskTaker:`Risk Taker`,composedUnderPressure:`Composed Under Pressure`},tactics:{title:`Choose your tactical profile`,system:`Preferred System`,role:`Preferred Role`,validationSystem:`Please select a tactical system.`,validationRole:`Please select a tactical role.`,systems:{possession:`Possession Football (Tiki-Taka)`,counter:`Counter Attack (Direct build-up)`,highPress:`High Press (Gegenpressing)`,balanced:`Balanced (Adaptable structure)`,longBall:`Long Ball (Direct Targetplay)`,direct:`Direct Attack (Fast transition)`,wingPlay:`Wing Play (Overlap & cross)`,defensive:`Defensive Football (Low block)`},roles:{playmaker:`Playmaker (Orchestrates transitions)`,boxToBox:`Box-to-Box (Covers both ends of pitch)`,deepPlaymaker:`Deep-Lying Playmaker (Quarterback)`,ballWinning:`Ball Winning Midfielder (Destroyer)`,insideForward:`Inside Forward (Cuts inside to shoot)`,poacher:`Poacher (Clinical penalty box threat)`,targetMan:`Target Man (Hold up play & headers)`,false9:`False 9 (Drops deep to link play)`,advancedForward:`Advanced Forward (Stretches backline)`,completeForward:`Complete Forward (All-round attacker)`,traditionalWinger:`Traditional Winger (Hugs line & crosses)`,sweeperKeeper:`Sweeper Keeper (Acts as extra defender)`}},review:{title:`Review Scouting Report`,subtitle:`Please double check all statistics and profiles before submitting your dossier.`,edit:`Edit Section`,basicInfo:`Profile Overview`,physicalInfo:`Physical Dossier`,technicalInfo:`Technical Skills`,defensiveInfo:`Defensive Prowess`,gkInfo:`Goalkeeper Record`,stylesInfo:`Selected Action Habits`,mentalInfo:`Mentality Traits`,tacticalInfo:`Tactical Blueprint`}},phase3:{title:`Scouting Analysis Complete!`,subtitle:`The Similarity Engine has matched your profile against 1,200+ professional players.`,infoText:`Below is the matching engine verification dashboard showing your top matches, category breakdowns, and performance profiling.`,btnRestart:`Evaluate Another Player`,dataSummary:`Scouted Profile Dossier`}},vi:{nav:{logo:`ARENA FIT`,home:`Trang chủ`,about:`Giới thiệu`,faq:`Hỏi đáp`,settings:`Cài đặt`},hero:{title:`Bạn Giống Cầu Thủ Bóng Đá Chuyên Nghiệp Nào?`,subtitle:`Trả lời một vài câu hỏi và khám phá cầu thủ bóng đá thực sự có phong cách thi đấu, thể hình và khả năng tương đồng nhất với bạn.`,cta:`Bắt đầu so khớp`},about:{title:`Phân Tích Trận Đấu Của Bạn`,subtitle:`Chúng tôi sử dụng công cụ so khớp đa chiều để so sánh các đặc điểm của bạn với những cầu thủ hàng đầu.`,card1Title:`Thể hình & Thể lực`,card1Desc:`Chúng tôi đánh giá chiều cao, tốc độ, sức bền và sức mạnh của bạn để kết hợp với các cầu thủ có thể trạng tương tự.`,card2Title:`Phong cách thi đấu`,card2Desc:`Cho dù bạn là một tiền vệ kiến thiết lùi sâu, một sát thủ vòng cấm hay một trung vệ thép, chúng tôi đều phân tích dấu chân chiến thuật của bạn.`,card3Title:`Khả năng kỹ thuật`,card3Desc:`Khả năng rê bóng, chuyền bóng chính xác, nhận thức phòng ngự và lực sút đều được đưa vào công cụ so khớp độ chính xác cao.`},faq:{title:`Các Câu Hỏi Thường Gặp`,subtitle:`Bạn có thắc mắc? Chúng tôi có câu trả lời để giúp bạn sẵn sàng ra sân.`,q1:`Thuật toán so khớp chính xác đến mức nào?`,a1:`Thuật toán của chúng tôi sử dụng số liệu thống kê thực tế từ các giải đấu chuyên nghiệp để so sánh các thuộc tính của bạn với hàng trăm cầu thủ ưu tú, mang lại kết quả có độ chính xác cao.`,q2:`Tôi có thể chọn nhiều vị trí không?`,a2:`Có chứ! Trong bảng câu hỏi sắp tới, bạn có thể chọn các vị trí yêu thích và cách bạn thích ứng với các vai trò khác nhau trên sân.`,q3:`Dữ liệu cá nhân của tôi có được lưu lại không?`,a3:`Không, chúng tôi tôn trọng quyền riêng tư của bạn. Tất cả các câu trả lời của bạn được phân tích theo thời gian thực và kết quả không được lưu trữ trên máy chủ.`,q4:`Bài đánh giá mất bao lâu?`,a4:`Chỉ mất khoảng 3 đến 5 phút. Các câu hỏi sẽ bao gồm các đặc điểm thể chất, hành vi trên sân đấu và tinh thần của bạn.`},settings:{title:`Cài đặt`,language:`Ngôn ngữ`,theme:`Giao diện`,animations:`Hiệu ứng`,sound:`Âm thanh`,reset:`Thiết lập lại`,dark:`Chế độ tối`,light:`Chế độ sáng`,on:`BẬT`,off:`TẮT`},footer:{copyright:`© 2026 Arena Fit. Bảo lưu mọi quyền.`,about:`Về chúng tôi`,privacy:`Chính sách bảo mật`,terms:`Điều khoản dịch vụ`,contact:`Liên hệ hỗ trợ`},loading:{text:`Đang Chuẩn Bị Sân Đấu...`},questionnaire:{recoveryTitle:`Tiếp tục trinh sát?`,recoveryDesc:`Chúng tôi tìm thấy một bản nháp báo cáo trinh sát chưa hoàn thành từ phiên trước. Bạn có muốn khôi phục không?`,btnResume:`Khôi phục nháp`,btnStartFresh:`Bắt đầu mới`,step:`Bước`,of:`trên`,btnPrev:`Quay lại`,btnNext:`Tiếp theo`,btnSave:`Lưu & Tiếp tục`,btnSubmit:`Tìm bản sao bóng đá`,validationHeader:`Cần kiểm tra lại:`,steps:{step1:`Thông tin cơ bản`,step2:`Chỉ số thể chất`,step3:`Chỉ số kỹ thuật`,step4:`Chỉ số phòng ngự`,step5:`Chỉ số thủ môn`,step6:`Phong cách chơi`,step7:`Tính cách & Tinh thần`,step8:`Sở thích chiến thuật`,review:`Xem lại báo cáo`},basic:{name:`Họ và tên`,namePlaceholder:`Nhập họ và tên trinh sát`,nickname:`Biệt danh (Tùy chọn)`,nicknamePlaceholder:`Ví dụ: Ảo thuật gia`,age:`Tuổi`,height:`Chiều cao (cm)`,weight:`Cân nặng (kg)`,foot:`Chân thuận`,footLeft:`Chân trái`,footLeftDesc:`Thích cắt bóng vào trung lộ hoặc tạt bóng xoáy từ biên trái.`,footRight:`Chân phải`,footRightDesc:`Chân thuận tiêu chuẩn. Tuyệt vời cho các pha bám biên hoặc dứt điểm.`,footBoth:`Cả hai chân`,footBothDesc:`Phẩm chất hiếm có. Rất linh hoạt, kiến tạo hoặc sút bằng cả hai chân.`,position:`Bộ chọn vị trí thi đấu chính`,positionSubtitle:`Chọn bằng Sơ đồ Sân đấu Tương tác hoặc Danh mục bên dưới`,selectedPositionLabel:`Vị trí đã chọn`,validation:{name:`Vui lòng nhập họ và tên của bạn.`,age:`Tuổi phải nằm trong khoảng từ 5 đến 99.`,height:`Chiều cao phải từ 100cm đến 250cm.`,weight:`Cân nặng phải từ 30kg đến 150kg.`,position:`Vui lòng chọn vị trí thi đấu chính.`},categories:{goalkeeper:`Thủ môn`,defenders:`Hậu vệ`,midfielders:`Tiền vệ`,forwards:`Tiền đạo`},positions:{GK:{name:`Thủ môn (GK)`,desc:`Bảo vệ khung thành và chỉ huy hàng phòng ngự.`},LB:{name:`Hậu vệ trái (LB)`,desc:`Phòng ngự hành lang trái và hỗ trợ lên bóng biên.`},CB:{name:`Trung vệ (CB)`,desc:`Ngăn chặn các đợt tấn công trung lộ và giải nguy.`},RB:{name:`Hậu vệ phải (RB)`,desc:`Phòng ngự hành lang phải và hỗ trợ lên bóng biên.`},LWB:{name:`Hậu vệ cánh trái (LWB)`,desc:`Hậu vệ biên tấn công bền bỉ, dâng cao chồng biên tạt bóng.`},RWB:{name:`Hậu vệ cánh phải (RWB)`,desc:`Hậu vệ biên tấn công bền bỉ, dâng cao chồng biên tạt bóng.`},CDM:{name:`Tiền vệ phòng ngự (CDM)`,desc:`Đánh chặn trước hàng thủ và thu hồi bóng.`},CM:{name:`Tiền vệ trung tâm (CM)`,desc:`Kiểm soát nhịp độ tuyến giữa, liên kết phòng ngự và tấn công.`},CAM:{name:`Tiền vệ tấn công (CAM)`,desc:`Kiến tạo cơ hội ghi bàn và khai thác khoảng trống.`},LM:{name:`Tiền vệ trái (LM)`,desc:`Dẫn dắt các pha tấn công cánh trái, tạo độ rộng đội hình.`},RM:{name:`Tiền vệ phải (RM)`,desc:`Dẫn dắt các pha tấn công cánh phải, tạo độ rộng đội hình.`},LW:{name:`Tiền đạo cánh trái (LW)`,desc:`Tiền đạo cánh tốc độ cao, rê dắt bó vào trung lộ dứt điểm.`},RW:{name:`Tiền đạo cánh phải (RW)`,desc:`Tiền đạo cánh tốc độ cao, rê dắt bó vào trung lộ dứt điểm.`},CF:{name:`Trung phong (CF)`,desc:`Điểm đến của các đợt tấn công, làm tường kết nối lối chơi.`},ST:{name:`Tiền đạo cắm (ST)`,desc:`Sát thủ dứt điểm lạnh lùng, tận dụng tối đa cơ hội ghi bàn.`},SS:{name:`Hộ công (SS)`,desc:`Hỗ trợ tiền đạo cắm, hoạt động tự do giữa các tuyến.`},F9:{name:`Số 9 ảo`,desc:`Lùi sâu kéo dãn trung vệ đối phương tạo khoảng trống tuyến hai.`}}},physical:{title:`Đánh giá các chỉ số thể chất (1-100)`,acceleration:`Tăng tốc`,sprintSpeed:`Tốc độ nước rút`,agility:`Khéo léo`,balance:`Thăng bằng`,strength:`Sức mạnh`,stamina:`Thể lực`,jumping:`Nhảy cao`,physicality:`Tranh chấp`,reactions:`Phản ứng`,composure:`Bình tĩnh`,endurance:`Sức chịu đựng`},technical:{title:`Đánh giá các chỉ số kỹ thuật (1-100)`,ballControl:`Kiểm soát bóng`,firstTouch:`Chạm bóng bước một`,dribbling:`Rê bóng`,closeControl:`Giữ bóng chặt`,shortPassing:`Chuyền ngắn`,longPassing:`Chuyền dài`,vision:`Tầm nhìn chiến thuật`,crossing:`Tạt bóng`,curve:`Độ xoáy`,finishing:`Dứt điểm`,shotPower:`Lực sút`,longShots:`Sút xa`,volleys:`Vô lê`,heading:`Đánh đầu`,penalty:`Đá phạt đền`,freeKickAccuracy:`Đá phạt trực tiếp`,throughBalls:`Chọc khe`,weakFootAbility:`Chân không thuận`,skillMoves:`Kỹ thuật cá nhân`},defensive:{title:`Đánh giá các chỉ số phòng ngự (1-100)`,defensiveAwareness:`Nhận thức phòng ngự`,interceptions:`Cắt bóng`,standingTackle:`Tackle bóng đứng`,slidingTackle:`Xoạc bóng`,marking:`Kèm người`,pressing:`Cường độ áp sát`,aggression:`Quyết đoán`,aerialAbility:`Không chiến phòng thủ`},goalkeeper:{title:`Đánh giá các chỉ số thủ môn (1-100)`,diving:`Bay người cản phá`,reflexes:`Phản xạ`,handling:`Bắt bóng`,positioning:`Chọn vị trí`,kicking:`Phát bóng bằng chân`,distribution:`Phân phối bóng`,oneOnOne:`Đối mặt 1v1`,communication:`Chỉ huy vòng cấm`},style:{title:`Chọn thói quen thi đấu của bạn (Chọn nhiều mục)`,validation:`Vui lòng chọn ít nhất một phong cách chơi.`,opt1:`Tôi thích đi bóng qua hậu vệ đối phương`,opt2:`Tôi thích các pha đập nhả ngắn, nhanh`,opt3:`Tôi thích mở bóng dài sang cánh`,opt4:`Tôi thích tạt bóng chuẩn xác vào vòng cấm`,opt5:`Tôi thích tung ra các cú sút xa`,opt6:`Tôi thích tranh chấp trên không & đánh đầu`,opt7:`Tôi thích cản cú sút & xoạc bóng`,opt8:`Tôi thích áp sát tầm cao phá lối chơi`,opt9:`Tôi thích chọc khe cho cầu thủ chạy cánh`,opt10:`Tôi thích kết nối lối chơi & ghi bàn`,opt11:`Tôi thích giữ nhịp & kiểm soát bóng`,opt12:`Tôi thích thực hiện các pha phản công nhanh`,opt13:`Tôi thích sử dụng các kỹ thuật qua người`,opt14:`Tôi thích di chuyển không bóng đón đường chuyền`,opt15:`Tôi thích lùi sâu điều tiết nhịp độ`,opt16:`Tôi thích dùng thể hình bảo vệ bóng`,opt17:`Tôi thích mạo hiểm kiến tạo ở 1/3 sân đối phương`},personality:{title:`Chọn đặc điểm tinh thần của bạn (Chọn nhiều mục)`,validation:`Vui lòng chọn ít nhất một đặc điểm tinh thần.`,calm:`Điềm tĩnh`,aggressive:`Máu lửa & Quyết liệt`,creative:`Sáng tạo & Đột phá`,leader:`Thủ lĩnh chỉ huy`,hardWorker:`Chăm chỉ / Hoạt động rộng`,teamPlayer:`Vì tập thể`,selfless:`Vị tha / Hỗ trợ đồng đội`,confident:`Tự tin cao`,clinical:`Sát thủ / Lạnh lùng`,intelligent:`Thông minh chiến thuật`,disciplined:`Kỷ luật / Đúng vị trí`,passionate:`Nhiệt huyết / Tràn đầy năng lượng`,competitive:`Khát khao chiến thắng`,riskTaker:`Thích mạo hiểm`,composedUnderPressure:`Bản lĩnh dưới áp lực`},tactics:{title:`Chọn hồ sơ chiến thuật của bạn`,system:`Hệ thống ưa thích`,role:`Vai trò ưa thích`,validationSystem:`Vui lòng chọn một hệ thống chiến thuật.`,validationRole:`Vui lòng chọn một vai trò chiến thuật.`,systems:{possession:`Kiểm soát bóng (Tiki-Taka)`,counter:`Phản công nhanh (Trực diện)`,highPress:`Gegenpressing (Áp sát tầm cao)`,balanced:`Cân bằng (Linh hoạt chiến thuật)`,longBall:`Bóng dài (Tận dụng Targetman)`,direct:`Tấn công nhanh (Chuyển đổi trạng thái)`,wingPlay:`Tấn công biên (Tạt cánh đánh đầu)`,defensive:`Phòng ngự chặt (Low block)`},roles:{playmaker:`Kiến thiết lối chơi (Dẫn dắt tấn công)`,boxToBox:`Tiền vệ con thoi (Bao sân)`,deepPlaymaker:`Kiến thiết lùi sâu (Phát động tấn công)`,ballWinning:`Tiền vệ đánh chặn (Máy quét)`,insideForward:`Tiền đạo cánh bó trong (Cắt vào dứt điểm)`,poacher:`Kẻ săn bàn (Nhạy bén trong vòng cấm)`,targetMan:`Tiền đạo mục tiêu (Tì đè & làm tường)`,false9:`Số 9 ảo (Lùi sâu kết nối lối chơi)`,advancedForward:`Tiền đạo di chuyển rộng (Phá bẫy việt vị)`,completeForward:`Tiền đạo toàn diện (Mọi kỹ năng)`,traditionalWinger:`Cầu thủ chạy cánh thuần túy (Bám biên & tạt)`,sweeperKeeper:`Thủ môn quét (Bọc lót hậu vệ)`}},review:{title:`Xem lại báo cáo trinh sát`,subtitle:`Vui lòng kiểm tra lại tất cả các thông tin và thông số trước khi lưu hồ sơ của bạn.`,edit:`Chỉnh sửa`,basicInfo:`Hồ sơ cá nhân`,physicalInfo:`Chỉ số thể trạng`,technicalInfo:`Kỹ năng kỹ thuật`,defensiveInfo:`Khả năng phòng ngự`,gkInfo:`Kỹ năng thủ môn`,stylesInfo:`Phong cách thi đấu`,mentalInfo:`Phẩm chất tinh thần`,tacticalInfo:`Chiến thuật & Vai trò`}},phase3:{title:`Phân Tích Trình Sát Hoàn Tất!`,subtitle:`Công cụ so khớp đã đối chiếu hồ sơ của bạn với 1.200+ cầu thủ chuyên nghiệp.`,infoText:`Dưới đây là bảng điều khiển xác minh công cụ so khớp hiển thị các cầu thủ tương đồng nhất, chi tiết chỉ số và thời gian xử lý.`,btnRestart:`Trinh sát cầu thủ khác`,dataSummary:`Hồ sơ cầu thủ đã trinh sát`}}},Se=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Ce=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),we=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Te=e=>{let t=we(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ee={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},De=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Oe=(0,b.createContext)({}),ke=()=>(0,b.useContext)(Oe),Ae=(0,b.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ke()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,b.createElement)(`svg`,{ref:c,...Ee,width:t??l??Ee.width,height:t??l??Ee.height,stroke:e??f,strokeWidth:m,className:Se(`lucide`,p,i),...!a&&!De(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,b.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),A=(e,t)=>{let n=(0,b.forwardRef)(({className:n,...r},i)=>(0,b.createElement)(Ae,{ref:i,iconNode:t,className:Se(`lucide-${Ce(Te(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Te(e),n},je=A(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),Me=A(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),Ne=A(`brain`,[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]),Pe=A(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Fe=A(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),Ie=A(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Le=A(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),Re=A(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),ze=A(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Be=A(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),Ve=A(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),He=A(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),Ue=A(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),We=A(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),Ge=A(`file-spreadsheet`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]),Ke=A(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),qe=A(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Je=A(`languages`,[[`path`,{d:`m5 8 6 6`,key:`1wu5hv`}],[`path`,{d:`m4 14 6-6 2-3`,key:`1k1g8d`}],[`path`,{d:`M2 5h12`,key:`or177f`}],[`path`,{d:`M7 2h1`,key:`1t2jsx`}],[`path`,{d:`m22 22-5-10-5 10`,key:`don7ne`}],[`path`,{d:`M14 18h6`,key:`1m8k6r`}]]),Ye=A(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Xe=A(`pen`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),Ze=A(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Qe=A(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),$e=A(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),et=A(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),tt=A(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),nt=A(`sliders-vertical`,[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]]),rt=A(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),it=A(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),at=A(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),ot=A(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),st=A(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),ct=A(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),lt=A(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),ut=A(`volume-x`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`line`,{x1:`22`,x2:`16`,y1:`9`,y2:`15`,key:`1ewh16`}],[`line`,{x1:`16`,x2:`22`,y1:`9`,y2:`15`,key:`5ykzw1`}]]),dt=A(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),ft=A(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function pt({onOpenSettings:e,onNavigate:t}){let{language:n,animations:r}=w(),i=k[n].nav,[a,o]=(0,b.useState)(!1),[s,c]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=()=>{window.scrollY>20?o(!0):o(!1)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let l=(e,n)=>{if(e.preventDefault(),c(!1),t){t(n);return}let i=document.getElementById(n);if(i){let e=i.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:e,behavior:r===`on`?`smooth`:`auto`})}else n===`home`&&window.scrollTo({top:0,behavior:r===`on`?`smooth`:`auto`})};return(0,x.jsxs)(`nav`,{className:`navbar ${a?`scrolled`:``} ${s?`mobile-open`:``}`,children:[(0,x.jsxs)(`div`,{className:`container nav-container`,children:[(0,x.jsxs)(`a`,{href:`#home`,className:`nav-logo`,onClick:e=>l(e,`home`),children:[(0,x.jsx)(`span`,{className:`logo-icon`,children:`⚽`}),(0,x.jsx)(`span`,{className:`logo-text`,children:i.logo})]}),(0,x.jsxs)(`ul`,{className:`nav-links-desktop`,children:[(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:`#home`,onClick:e=>l(e,`home`),children:i.home})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:`#about`,onClick:e=>l(e,`about`),children:i.about})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:`#faq`,onClick:e=>l(e,`faq`),children:i.faq})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(`button`,{className:`icon-btn`,onClick:e,"aria-label":i.settings,title:i.settings,children:(0,x.jsx)($e,{size:20,className:`nav-settings-icon`})})})]}),(0,x.jsxs)(`div`,{className:`nav-controls-mobile`,children:[(0,x.jsx)(`button`,{className:`icon-btn`,onClick:e,"aria-label":i.settings,title:i.settings,children:(0,x.jsx)($e,{size:20})}),(0,x.jsx)(`button`,{className:`icon-btn menu-toggle`,onClick:()=>c(!s),"aria-label":`Toggle Menu`,"aria-expanded":s,children:s?(0,x.jsx)(dt,{size:24}):(0,x.jsx)(Ye,{size:24})})]})]}),(0,x.jsx)(`div`,{className:`nav-drawer-mobile ${s?`open`:``} ${r===`off`?`instant`:``}`,children:(0,x.jsxs)(`ul`,{className:`nav-links-mobile`,children:[(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:`#home`,onClick:e=>l(e,`home`),children:i.home})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:`#about`,onClick:e=>l(e,`about`),children:i.about})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:`#faq`,onClick:e=>l(e,`faq`),children:i.faq})})]})}),(0,x.jsx)(`style`,{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background-color var(--transition-normal), border-color var(--transition-normal), backdrop-filter var(--transition-normal), height var(--transition-normal);
          display: flex;
          align-items: center;
        }
        
        .navbar.scrolled {
          background: var(--glass-bg);
          border-bottom: 1px solid var(--glass-border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          height: 70px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 0.05em;
        }
        
        .logo-icon {
          font-size: 1.6rem;
          filter: drop-shadow(0 0 8px var(--accent-glow-strong));
        }

        .logo-text {
          background: linear-gradient(135deg, var(--text-primary) 50%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 32px;
        }

        .nav-links-desktop a {
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.02em;
          transition: color var(--transition-fast);
          position: relative;
          padding: 8px 0;
        }

        .nav-links-desktop a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width var(--transition-fast);
          border-radius: var(--border-radius-full);
        }

        .nav-links-desktop a:hover {
          color: var(--text-primary);
        }

        .nav-links-desktop a:hover::after {
          width: 100%;
        }

        .icon-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color var(--transition-fast), background-color var(--transition-fast), transform var(--transition-fast);
          border: 1px solid transparent;
        }

        .icon-btn:hover {
          color: var(--accent);
          background-color: var(--accent-glow);
          border-color: rgba(var(--accent-rgb), 0.1);
          transform: scale(1.05);
        }
        
        .icon-btn:active {
          transform: scale(0.95);
        }

        .nav-settings-icon {
          transition: transform 0.5s ease;
        }

        .icon-btn:hover .nav-settings-icon {
          transform: rotate(45deg);
        }

        .nav-controls-mobile {
          display: none;
          align-items: center;
          gap: 8px;
        }

        /* Mobile Menu Drawer */
        .nav-drawer-mobile {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--glass-border);
          padding: 24px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: opacity var(--transition-normal), transform var(--transition-normal), visibility var(--transition-normal);
          z-index: 999;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .nav-drawer-mobile.instant {
          transition: none !important;
        }

        .nav-drawer-mobile.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav-links-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style: none;
          gap: 20px;
        }

        .nav-links-mobile a {
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.2rem;
          padding: 8px 24px;
          width: 100%;
          text-align: center;
          transition: color var(--transition-fast);
        }

        .nav-links-mobile a:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none;
          }
          
          .nav-controls-mobile {
            display: flex;
          }
          
          .navbar.scrolled {
            height: 70px;
          }
          
          .navbar.scrolled + .nav-drawer-mobile {
            top: 70px;
          }
          
          .nav-drawer-mobile {
            top: 80px;
          }
        }
      `})]})}function mt({onStartClick:e}){let{language:t,animations:n}=w(),r=k[t].hero,i=(0,b.useRef)(null),a=(0,b.useRef)(null),[o,s]=(0,b.useState)([]);return(0,b.useEffect)(()=>{if(o.length>0){let e=setTimeout(()=>{s(e=>e.slice(1))},600);return()=>clearTimeout(e)}},[o]),(0,b.useEffect)(()=>{let e=i.current;if(!e)return;let t=e.getContext(`2d`),r,o=e.width=a.current.offsetWidth,s=e.height=a.current.offsetHeight,c=[],l=Math.min(Math.floor(o/30),45),u={x:null,y:null,radius:120},d=t=>{let n=e.getBoundingClientRect();u.x=t.clientX-n.left,u.y=t.clientY-n.top},f=()=>{u.x=null,u.y=null};window.addEventListener(`mousemove`,d),e.addEventListener(`mouseleave`,f);class p{constructor(){this.reset()}reset(){this.x=Math.random()*o,this.y=Math.random()*s,this.size=Math.random()*3+1.5,this.speedX=(Math.random()-.5)*.4,this.speedY=(Math.random()-.5)*.4,this.opacity=Math.random()*.4+.1}update(){if(this.x+=this.speedX,this.y+=this.speedY,(this.x<0||this.x>o)&&(this.speedX*=-1),(this.y<0||this.y>s)&&(this.speedY*=-1),u.x!==null&&u.y!==null){let e=this.x-u.x,t=this.y-u.y,n=Math.sqrt(e*e+t*t);if(n<u.radius){let r=(u.radius-n)/u.radius,i=Math.atan2(t,e);this.x+=Math.cos(i)*r*1.5,this.y+=Math.sin(i)*r*1.5}}}draw(){t.save(),t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2);let e=document.documentElement.classList.contains(`theme-light`)?`5, 150, 105`:`0, 242, 148`;t.fillStyle=`rgba(${e}, ${this.opacity})`,t.shadowBlur=this.size*2,t.shadowColor=`rgba(${e}, 0.5)`,t.fill(),t.restore()}}for(let e=0;e<l;e++)c.push(new p);let m=()=>{a.current&&(o=e.width=a.current.offsetWidth,s=e.height=a.current.offsetHeight)};window.addEventListener(`resize`,m);let h=()=>{t.clearRect(0,0,o,s),t.save();let e=document.documentElement.classList.contains(`theme-light`);t.strokeStyle=e?`rgba(5, 150, 105, 0.05)`:`rgba(0, 242, 148, 0.035)`,t.lineWidth=1.5,t.strokeRect(40,40,o-80,s-80),t.beginPath(),t.arc(o/2,s/2,Math.min(o,s)*.15,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(o/2,40),t.lineTo(o/2,s-40),t.stroke();let i=Math.min(o*.15,150),a=Math.min(s*.35,300);t.strokeRect(40,s/2-a/2,i,a),t.strokeRect(o-40-i,s/2-a/2,i,a),t.restore(),n===`on`&&c.forEach(e=>{e.update(),e.draw()}),r=requestAnimationFrame(h)};return h(),()=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`resize`,m),e.removeEventListener(`mouseleave`,f),cancelAnimationFrame(r)}},[n]),(0,x.jsxs)(`section`,{id:`home`,className:`hero-section`,ref:a,children:[(0,x.jsx)(`canvas`,{ref:i,className:`hero-canvas`}),(0,x.jsx)(`div`,{className:`light-glow glow-primary`}),(0,x.jsx)(`div`,{className:`light-glow glow-secondary`}),(0,x.jsx)(`div`,{className:`container hero-container`,children:(0,x.jsxs)(`div`,{className:`glass-card hero-card slide-up`,children:[(0,x.jsxs)(`div`,{className:`stadium-badge`,children:[(0,x.jsx)(`span`,{className:`stadium-badge-pulse`}),(0,x.jsx)(`span`,{children:`MATCHDAY ONE`})]}),(0,x.jsx)(`h1`,{className:`hero-title`,children:r.title}),(0,x.jsx)(`p`,{className:`hero-subtitle`,children:r.subtitle}),(0,x.jsx)(`div`,{className:`cta-wrapper`,children:(0,x.jsxs)(`button`,{className:`btn-primary start-match-btn`,onClick:t=>{let n=t.currentTarget.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top,a={id:Date.now(),x:r,y:i};s(e=>[...e,a]),e&&e()},"aria-label":`Start Footballer Matching Questionnaire`,children:[(0,x.jsx)(Ze,{size:18,fill:`currentColor`}),(0,x.jsx)(`span`,{children:r.cta}),o.map(e=>(0,x.jsx)(`span`,{className:`ripple`,style:{left:e.x,top:e.y}},e.id))]})})]})}),(0,x.jsx)(`style`,{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 100px;
          padding-bottom: 60px;
          overflow: hidden;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: all;
        }

        /* Lighting Glow Effects */
        .light-glow {
          position: absolute;
          border-radius: var(--border-radius-full);
          filter: blur(100px);
          opacity: 0.15;
          z-index: 2;
          pointer-events: none;
        }
        
        .theme-light .light-glow {
          opacity: 0.08;
        }

        .glow-primary {
          width: 300px;
          height: 300px;
          background: var(--accent);
          top: 15%;
          left: 10%;
        }

        .glow-secondary {
          width: 350px;
          height: 350px;
          background: var(--accent-blue);
          bottom: 20%;
          right: 10%;
        }

        .animations-off .light-glow {
          display: none;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-card {
          width: 100%;
          max-width: 820px;
          padding: 60px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          border-radius: var(--border-radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hero-card:hover {
          transform: translateY(-2px);
        }

        .stadium-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          padding: 6px 16px;
          border-radius: var(--border-radius-full);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent);
        }

        .stadium-badge-pulse {
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .animations-on .stadium-badge-pulse::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--accent);
          border-radius: 50%;
          animation: badgePulse 2s infinite ease-out;
        }

        @keyframes badgePulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(3.5);
            opacity: 0;
          }
        }

        .hero-title {
          line-height: 1.1;
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 70%, var(--accent-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 10px rgba(0,0,0,0.1));
        }

        .hero-subtitle {
          max-width: 620px;
          font-size: clamp(1rem, 1.2vw + 0.8rem, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-wrapper {
          margin-top: 12px;
        }

        .start-match-btn {
          min-width: 220px;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .hero-card {
            padding: 40px 24px;
            gap: 20px;
          }
          
          .glow-primary, .glow-secondary {
            width: 200px;
            height: 200px;
          }
        }
      `})]})}function ht(){let{language:e}=w(),t=k[e].about,n=[{icon:(0,x.jsx)(ft,{size:32}),title:t.card1Title,desc:()=>t.card1Desc,glowClass:`accent-green`},{icon:(0,x.jsx)(nt,{size:32}),title:t.card2Title,desc:()=>t.card2Desc,glowClass:`accent-blue`},{icon:(0,x.jsx)(rt,{size:32}),title:t.card3Title,desc:()=>t.card3Desc,glowClass:`accent-green`}];return(0,x.jsxs)(`section`,{id:`about`,className:`about-section`,children:[(0,x.jsxs)(`div`,{className:`container`,children:[(0,x.jsxs)(`div`,{className:`about-header text-center`,children:[(0,x.jsx)(`h2`,{className:`section-title`,children:t.title}),(0,x.jsx)(`p`,{className:`section-subtitle`,children:t.subtitle})]}),(0,x.jsx)(`div`,{className:`grid-3 card-container`,children:n.map((e,t)=>(0,x.jsxs)(`div`,{className:`glass-card about-card`,children:[(0,x.jsx)(`div`,{className:`card-icon-container ${e.glowClass}`,children:e.icon}),(0,x.jsx)(`h3`,{className:`card-title`,children:e.title}),(0,x.jsx)(`p`,{className:`card-desc`,children:e.desc()})]},t))})]}),(0,x.jsx)(`style`,{children:`
        .about-section {
          padding: 100px 0;
          background-color: var(--bg-secondary);
          position: relative;
          z-index: 5;
        }

        .about-header {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .section-title {
          background: linear-gradient(135deg, var(--text-primary) 60%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          max-width: 540px;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .card-container {
          margin-top: 20px;
        }

        .about-card {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          border-radius: var(--border-radius-md);
          text-align: left;
          height: 100%;
        }

        .about-card:hover {
          transform: translateY(-8px);
        }

        .card-icon-container {
          width: 60px;
          height: 60px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast), filter var(--transition-fast);
        }

        .about-card:hover .card-icon-container {
          transform: scale(1.1) rotate(5deg);
        }

        .card-icon-container.accent-green {
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
          filter: drop-shadow(0 0 10px rgba(var(--accent-rgb), 0.15));
        }

        .card-icon-container.accent-blue {
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.2);
          color: var(--accent-blue);
          filter: drop-shadow(0 0 10px rgba(0, 210, 255, 0.15));
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 70px 0;
          }
          .about-header {
            margin-bottom: 40px;
          }
          .about-card {
            padding: 30px 24px;
          }
        }
      `})]})}function gt(){let{language:e}=w(),t=k[e].faq,[n,r]=(0,b.useState)(null),i=[{q:t.q1,a:t.a1},{q:t.q2,a:t.a2},{q:t.q3,a:t.a3},{q:t.q4,a:t.a4}],a=e=>{r(n===e?null:e)};return(0,x.jsxs)(`section`,{id:`faq`,className:`faq-section`,children:[(0,x.jsxs)(`div`,{className:`container faq-container-inner`,children:[(0,x.jsxs)(`div`,{className:`faq-header text-center`,children:[(0,x.jsx)(`h2`,{className:`section-title`,children:t.title}),(0,x.jsx)(`p`,{className:`section-subtitle`,children:t.subtitle})]}),(0,x.jsx)(`div`,{className:`faq-list`,children:i.map((e,t)=>{let r=n===t;return(0,x.jsxs)(`div`,{className:`glass-card faq-item ${r?`active`:``}`,children:[(0,x.jsxs)(`button`,{className:`faq-header-btn`,onClick:()=>a(t),"aria-expanded":r,"aria-controls":`faq-answer-${t}`,children:[(0,x.jsx)(`span`,{className:`faq-question`,children:e.q}),(0,x.jsx)(Ie,{size:20,className:`faq-icon ${r?`rotate`:``}`})]}),(0,x.jsx)(`div`,{id:`faq-answer-${t}`,className:`faq-answer-container`,style:{maxHeight:r?`200px`:`0px`,opacity:+!!r},role:`region`,"aria-hidden":!r,children:(0,x.jsx)(`p`,{className:`faq-answer`,children:e.a})})]},t)})})]}),(0,x.jsx)(`style`,{children:`
        .faq-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
          z-index: 5;
        }

        .faq-container-inner {
          max-width: 800px !important;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          border-radius: var(--border-radius-md);
          overflow: hidden;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        
        .faq-item.active {
          border-color: rgba(var(--accent-rgb), 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 10px rgba(var(--accent-rgb), 0.05);
        }

        .faq-header-btn {
          width: 100%;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.15rem;
          text-align: left;
          cursor: pointer;
          gap: 20px;
        }

        .faq-question {
          flex: 1;
          transition: color var(--transition-fast);
        }

        .faq-header-btn:hover .faq-question {
          color: var(--accent);
        }

        .faq-icon {
          color: var(--text-muted);
          transition: transform var(--transition-normal), color var(--transition-normal);
          flex-shrink: 0;
        }

        .faq-item.active .faq-icon {
          color: var(--accent);
        }

        .faq-icon.rotate {
          transform: rotate(180deg);
        }

        .faq-answer-container {
          overflow: hidden;
          transition: max-height var(--transition-normal) ease-in-out, opacity var(--transition-normal) ease-in-out;
        }

        .faq-answer {
          padding: 0 24px 24px 24px;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 70px 0;
          }
          .faq-header {
            margin-bottom: 30px;
          }
          .faq-header-btn {
            padding: 20px;
            font-size: 1.05rem;
          }
          .faq-answer {
            padding: 0 20px 20px 20px;
            font-size: 0.95rem;
          }
        }
      `})]})}function _t(){let{language:e,setLanguage:t}=w(),n=k[e].footer;return(0,x.jsxs)(`footer`,{className:`footer-section`,children:[(0,x.jsxs)(`div`,{className:`container footer-container`,children:[(0,x.jsx)(`div`,{className:`footer-left`,children:(0,x.jsx)(`p`,{className:`copyright`,children:n.copyright})}),(0,x.jsxs)(`div`,{className:`footer-links`,children:[(0,x.jsx)(`a`,{href:`#about`,children:n.about}),(0,x.jsx)(`a`,{href:`#privacy`,children:n.privacy}),(0,x.jsx)(`a`,{href:`#terms`,children:n.terms}),(0,x.jsx)(`a`,{href:`#contact`,children:n.contact})]}),(0,x.jsx)(`div`,{className:`footer-right`,children:(0,x.jsxs)(`div`,{className:`footer-lang-selector`,"aria-label":`Language Selector`,children:[(0,x.jsx)(Ke,{size:16,className:`lang-icon`}),(0,x.jsx)(`button`,{className:`lang-option-btn ${e===`en`?`active`:``}`,onClick:()=>t(`en`),"aria-label":`Switch to English`,children:`EN`}),(0,x.jsx)(`span`,{className:`divider`,children:`|`}),(0,x.jsx)(`button`,{className:`lang-option-btn ${e===`vi`?`active`:``}`,onClick:()=>t(`vi`),"aria-label":`Switch to Vietnamese`,children:`VI`})]})})]}),(0,x.jsx)(`style`,{children:`
        .footer-section {
          padding: 40px 0;
          background-color: var(--bg-primary);
          border-top: 1px solid var(--glass-border);
          position: relative;
          z-index: 5;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          align-items: center;
        }

        .copyright {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        .footer-right {
          display: flex;
          align-items: center;
        }

        .footer-lang-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 6px 12px;
          border-radius: var(--border-radius-full);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .lang-icon {
          color: var(--text-muted);
        }

        .lang-option-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-weight: 700;
          transition: color var(--transition-fast);
        }

        .lang-option-btn.active {
          color: var(--accent);
        }

        .lang-option-btn:hover {
          color: var(--text-primary);
        }

        .divider {
          color: var(--glass-border);
          user-select: none;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }
        }
      `})]})}function vt({isOpen:e,onClose:t}){let{language:n,setLanguage:r,animations:i,setAnimations:a,sound:o,setSound:s,resetSettings:c}=w(),l=k[n].settings,u=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let n=n=>{n.key===`Escape`&&e&&t()};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t]),e?(0,x.jsxs)(`div`,{className:`settings-backdrop ${i===`off`?`instant`:``}`,onClick:e=>{u.current&&!u.current.contains(e.target)&&t()},role:`dialog`,"aria-modal":`true`,"aria-labelledby":`settings-title`,children:[(0,x.jsxs)(`div`,{ref:u,className:`settings-drawer ${i===`off`?`instant`:``}`,children:[(0,x.jsxs)(`div`,{className:`drawer-header`,children:[(0,x.jsx)(`h2`,{id:`settings-title`,className:`drawer-title`,children:l.title}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:t,"aria-label":`Close Settings`,children:(0,x.jsx)(dt,{size:20})})]}),(0,x.jsxs)(`div`,{className:`drawer-body`,children:[(0,x.jsxs)(`div`,{className:`setting-group`,children:[(0,x.jsxs)(`div`,{className:`setting-label-row`,children:[(0,x.jsx)(`span`,{className:`setting-icon-tag`,children:(0,x.jsx)(Je,{size:18})}),(0,x.jsx)(`span`,{className:`setting-label`,children:l.language})]}),(0,x.jsxs)(`div`,{className:`segmented-control`,children:[(0,x.jsx)(`button`,{className:`segment-btn ${n===`en`?`active`:``}`,onClick:()=>r(`en`),children:`English`}),(0,x.jsx)(`button`,{className:`segment-btn ${n===`vi`?`active`:``}`,onClick:()=>r(`vi`),children:`Tiếng Việt`})]})]}),(0,x.jsxs)(`div`,{className:`setting-group switch-group`,children:[(0,x.jsxs)(`div`,{className:`setting-label-row`,children:[(0,x.jsx)(`span`,{className:`setting-icon-tag`,children:(0,x.jsx)(rt,{size:18})}),(0,x.jsx)(`span`,{className:`setting-label`,children:l.animations})]}),(0,x.jsxs)(`button`,{className:`toggle-switch ${i===`on`?`checked`:``}`,onClick:()=>a(i===`on`?`off`:`on`),"aria-label":`Toggle Animations`,role:`switch`,"aria-checked":i===`on`,children:[(0,x.jsx)(`span`,{className:`toggle-label-text`,children:i===`on`?l.on:l.off}),(0,x.jsx)(`span`,{className:`toggle-handle`})]})]}),(0,x.jsxs)(`div`,{className:`setting-group switch-group`,children:[(0,x.jsxs)(`div`,{className:`setting-label-row`,children:[(0,x.jsx)(`span`,{className:`setting-icon-tag`,children:o===`on`?(0,x.jsx)(lt,{size:18}):(0,x.jsx)(ut,{size:18})}),(0,x.jsx)(`span`,{className:`setting-label`,children:l.sound})]}),(0,x.jsxs)(`button`,{className:`toggle-switch ${o===`on`?`checked`:``}`,onClick:()=>s(o===`on`?`off`:`on`),"aria-label":`Toggle Sound Effects`,role:`switch`,"aria-checked":o===`on`,children:[(0,x.jsx)(`span`,{className:`toggle-label-text`,children:o===`on`?l.on:l.off}),(0,x.jsx)(`span`,{className:`toggle-handle`})]})]})]}),(0,x.jsx)(`div`,{className:`drawer-footer`,children:(0,x.jsxs)(`button`,{className:`btn-reset`,onClick:c,"aria-label":`Reset settings to default values`,children:[(0,x.jsx)(Qe,{size:16}),(0,x.jsx)(`span`,{children:l.reset})]})})]}),(0,x.jsx)(`style`,{children:`
        .settings-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeInBackdrop 0.4s ease forwards;
        }

        .settings-backdrop.instant {
          animation: none !important;
          backdrop-filter: blur(4px) !important;
        }

        .settings-drawer {
          width: 100%;
          max-width: 420px;
          height: 100%;
          background: var(--glass-bg);
          border-left: 1px solid var(--glass-border);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          animation: slideInDrawer 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .settings-drawer.instant {
          animation: none !important;
          transform: translateX(0) !important;
        }

        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInDrawer {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          padding: 24px;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-title {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .close-btn:hover {
          background: var(--glass-border);
          color: var(--text-primary);
        }

        .drawer-body {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          overflow-y: auto;
        }

        .setting-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .setting-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
        }

        .setting-icon-tag {
          color: var(--accent);
          display: flex;
          align-items: center;
        }

        .setting-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-primary);
        }

        /* Segmented buttons styling */
        .segmented-control {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 4px;
          border-radius: var(--border-radius-sm);
        }

        .segment-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .segment-btn.active {
          background: var(--bg-secondary);
          color: var(--accent);
          border: 1px solid var(--glass-border);
          box-shadow: var(--shadow-sm);
        }

        /* Toggle switch styling */
        .setting-group.switch-group {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .toggle-switch {
          position: relative;
          width: 90px;
          height: 38px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-full);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0 10px;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .toggle-label-text {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-secondary);
          width: 100%;
          text-align: left;
          padding-left: 2px;
          transition: color var(--transition-fast);
        }

        .toggle-handle {
          position: absolute;
          right: 4px;
          top: 3px;
          width: 30px;
          height: 30px;
          background: var(--text-muted);
          border-radius: 50%;
          transition: transform var(--transition-normal), background-color var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }

        .toggle-switch.checked {
          background: rgba(var(--accent-rgb), 0.1);
          border-color: rgba(var(--accent-rgb), 0.3);
        }

        .toggle-switch.checked .toggle-label-text {
          color: var(--accent);
          text-align: right;
          padding-right: 32px;
        }

        .toggle-switch.checked .toggle-handle {
          transform: translateX(-50px);
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .drawer-footer {
          padding: 24px;
          border-top: 1px solid var(--glass-border);
        }

        .btn-reset {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          border: 1px dashed var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: color var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-reset:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background-color: rgba(255, 255, 255, 0.02);
        }
        
        .btn-reset:active {
          transform: scale(0.98);
        }

        @media (max-width: 480px) {
          .settings-drawer {
            max-width: 100%;
          }
        }
      `})]}):null}function yt({onComplete:e}){let{language:t,animations:n}=w(),r=k[t].loading,[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(0);return(0,b.useEffect)(()=>{let t=setInterval(()=>{s(e=>e>=100?(clearInterval(t),100):e+1)},20),n=setTimeout(()=>{a(!0);let t=setTimeout(()=>{e()},500);return()=>clearTimeout(t)},2e3);return()=>{clearInterval(t),clearTimeout(n)}},[e]),(0,x.jsxs)(`div`,{className:`loading-screen ${i?`fade-out-loader`:``} ${n===`off`?`instant`:``}`,children:[(0,x.jsxs)(`div`,{className:`loader-content`,children:[(0,x.jsx)(`div`,{className:`ball-icon-wrapper`,children:(0,x.jsxs)(`svg`,{className:`loader-svg-ball`,viewBox:`0 0 100 100`,width:`80`,height:`80`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,x.jsx)(`circle`,{className:`ball-outer`,cx:`50`,cy:`50`,r:`46`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`}),(0,x.jsx)(`polygon`,{className:`ball-inner-pentagon`,points:`50,38 61,46 57,59 43,59 39,46`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`50`,y1:`38`,x2:`50`,y2:`4`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`61`,y1:`46`,x2:`94`,y2:`35`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`57`,y1:`59`,x2:`77`,y2:`91`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`43`,y1:`59`,x2:`23`,y2:`91`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`39`,y1:`46`,x2:`6`,y2:`35`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`50`,y1:`4`,x2:`77`,y2:`12`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`50`,y1:`4`,x2:`23`,y2:`12`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`94`,y1:`35`,x2:`77`,y2:`12`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`94`,y1:`35`,x2:`90`,y2:`68`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`77`,y1:`91`,x2:`90`,y2:`68`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`77`,y1:`91`,x2:`50`,y2:`96`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`23`,y1:`91`,x2:`50`,y2:`96`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`23`,y1:`91`,x2:`10`,y2:`68`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`6`,y1:`35`,x2:`10`,y2:`68`,stroke:`currentColor`,strokeWidth:`2`}),(0,x.jsx)(`line`,{x1:`6`,y1:`35`,x2:`23`,y2:`12`,stroke:`currentColor`,strokeWidth:`2`})]})}),(0,x.jsx)(`h2`,{className:`loader-title`,children:r.text}),(0,x.jsx)(`div`,{className:`progress-container`,children:(0,x.jsx)(`div`,{className:`progress-bar`,style:{width:`${Math.min(o,100)}%`}})}),(0,x.jsxs)(`div`,{className:`progress-percentage`,children:[Math.round(Math.min(o,100)),`%`]})]}),(0,x.jsx)(`style`,{children:`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .loading-screen.fade-out-loader {
          opacity: 0;
          pointer-events: none;
          transform: scale(1.05);
        }
        .loading-screen.instant {
          transition: none !important;
        }
        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .ball-icon-wrapper {
          color: var(--accent);
          filter: drop-shadow(0 0 15px var(--accent-glow-strong));
        }
        
        /* SVG Animation */
        .loader-svg-ball {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawBall 2s ease-in-out infinite alternate;
        }
        .animations-off .loader-svg-ball {
          stroke-dashoffset: 0 !important;
          animation: none !important;
        }

        .loader-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          text-transform: uppercase;
        }
        
        .progress-container {
          width: 180px;
          height: 3px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-full);
          overflow: hidden;
          position: relative;
        }
        
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-blue) 100%);
          border-radius: var(--border-radius-full);
          transition: width 0.05s linear;
        }
        
        .progress-percentage {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        @keyframes drawBall {
          0% {
            stroke-dashoffset: 400;
            transform: rotate(0deg);
          }
          40% {
            stroke-dashoffset: 0;
            transform: rotate(180deg);
          }
          70% {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
          }
          100% {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
          }
        }
      `})]})}function bt(){let{language:e}=w(),{formData:t,updateField:n,errors:r}=xe(),i=k[e].questionnaire.basic,a=[{id:`goalkeeper`,title:i.categories.goalkeeper,positions:[`GK`]},{id:`defenders`,title:i.categories.defenders,positions:[`LB`,`CB`,`RB`,`LWB`,`RWB`]},{id:`midfielders`,title:i.categories.midfielders,positions:[`CDM`,`CM`,`CAM`,`LM`,`RM`]},{id:`forwards`,title:i.categories.forwards,positions:[`LW`,`RW`,`CF`,`ST`,`SS`,`F9`]}],o={GK:{name:`GK`,bottom:6,left:50},LB:{name:`LB`,bottom:25,left:16},CB:{name:`CB`,bottom:21,left:50},RB:{name:`RB`,bottom:25,left:84},LWB:{name:`LWB`,bottom:35,left:12},RWB:{name:`RWB`,bottom:35,left:88},CDM:{name:`CDM`,bottom:43,left:50},LM:{name:`LM`,bottom:58,left:16},CM:{name:`CM`,bottom:54,left:50},RM:{name:`RM`,bottom:58,left:84},CAM:{name:`CAM`,bottom:67,left:50},LW:{name:`LW`,bottom:81,left:20},RW:{name:`RW`,bottom:81,left:80},CF:{name:`CF`,bottom:88,left:32},F9:{name:`F9`,bottom:80,left:68},SS:{name:`SS`,bottom:74,left:50},ST:{name:`ST`,bottom:90,left:50}},s=e=>{n(`basic`,`primaryPosition`,e)};return(0,x.jsxs)(`div`,{className:`step-basic-container`,children:[(0,x.jsxs)(`div`,{className:`glass-card form-section-card`,children:[(0,x.jsxs)(`h3`,{className:`section-card-title`,children:[(0,x.jsx)(ct,{size:18}),(0,x.jsx)(`span`,{children:e===`en`?`Player Profile Dossier`:`Hồ Sơ Cầu Thủ`})]}),(0,x.jsxs)(`div`,{className:`inputs-grid`,children:[(0,x.jsxs)(`div`,{className:`floating-group ${r.name?`has-error`:``}`,children:[(0,x.jsx)(`input`,{id:`player-name`,type:`text`,className:`floating-input`,placeholder:` `,value:t.basic.name,onChange:e=>n(`basic`,`name`,e.target.value),required:!0}),(0,x.jsxs)(`label`,{className:`floating-label`,htmlFor:`player-name`,children:[i.name,` *`]}),r.name&&(0,x.jsx)(`span`,{className:`error-msg`,children:i.validation.name})]}),(0,x.jsxs)(`div`,{className:`floating-group`,children:[(0,x.jsx)(`input`,{id:`player-nickname`,type:`text`,className:`floating-input`,placeholder:` `,value:t.basic.nickname,onChange:e=>n(`basic`,`nickname`,e.target.value)}),(0,x.jsx)(`label`,{className:`floating-label`,htmlFor:`player-nickname`,children:i.nickname})]})]}),(0,x.jsxs)(`div`,{className:`inputs-row-3`,children:[(0,x.jsxs)(`div`,{className:`floating-group ${r.age?`has-error`:``}`,children:[(0,x.jsx)(`input`,{id:`player-age`,type:`number`,min:`5`,max:`99`,className:`floating-input text-center`,placeholder:` `,value:t.basic.age,onChange:e=>n(`basic`,`age`,e.target.value),required:!0}),(0,x.jsxs)(`label`,{className:`floating-label center-label`,htmlFor:`player-age`,children:[i.age,` *`]}),r.age&&(0,x.jsx)(`span`,{className:`error-msg`,children:i.validation.age})]}),(0,x.jsxs)(`div`,{className:`floating-group ${r.height?`has-error`:``}`,children:[(0,x.jsx)(`input`,{id:`player-height`,type:`number`,min:`100`,max:`250`,className:`floating-input text-center`,placeholder:` `,value:t.basic.height,onChange:e=>n(`basic`,`height`,e.target.value),required:!0}),(0,x.jsxs)(`label`,{className:`floating-label center-label`,htmlFor:`player-height`,children:[i.height,` *`]}),r.height&&(0,x.jsx)(`span`,{className:`error-msg`,children:i.validation.height})]}),(0,x.jsxs)(`div`,{className:`floating-group ${r.weight?`has-error`:``}`,children:[(0,x.jsx)(`input`,{id:`player-weight`,type:`number`,min:`30`,max:`150`,className:`floating-input text-center`,placeholder:` `,value:t.basic.weight,onChange:e=>n(`basic`,`weight`,e.target.value),required:!0}),(0,x.jsxs)(`label`,{className:`floating-label center-label`,htmlFor:`player-weight`,children:[i.weight,` *`]}),r.weight&&(0,x.jsx)(`span`,{className:`error-msg`,children:i.validation.weight})]})]})]}),(0,x.jsxs)(`div`,{className:`glass-card form-section-card`,children:[(0,x.jsxs)(`h3`,{className:`section-card-title`,children:[(0,x.jsx)(je,{size:18}),(0,x.jsx)(`span`,{children:i.foot})]}),(0,x.jsxs)(`div`,{className:`foot-cards-grid`,children:[(0,x.jsxs)(`button`,{type:`button`,className:`glass-card foot-option-card ${t.basic.preferredFoot===`left`?`selected`:``}`,onClick:()=>n(`basic`,`preferredFoot`,`left`),children:[(0,x.jsx)(`div`,{className:`foot-icon-wrap`,children:(0,x.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`foot-svg`,children:[(0,x.jsx)(`circle`,{cx:`20`,cy:`50`,r:`12`,className:`ball-stroke`}),(0,x.jsx)(`path`,{d:`M75,25 C65,30 55,40 50,55 C45,70 50,85 70,80 C85,75 88,50 82,35 Z`,className:`boot-stroke`}),(0,x.jsx)(`path`,{d:`M42,42 L25,48 M45,55 L28,52 M47,68 L32,58`,className:`kick-lines`})]})}),(0,x.jsxs)(`div`,{className:`foot-card-content`,children:[(0,x.jsx)(`span`,{className:`foot-card-title`,children:i.footLeft}),(0,x.jsx)(`p`,{className:`foot-card-desc`,children:i.footLeftDesc})]})]}),(0,x.jsxs)(`button`,{type:`button`,className:`glass-card foot-option-card ${t.basic.preferredFoot===`right`?`selected`:``}`,onClick:()=>n(`basic`,`preferredFoot`,`right`),children:[(0,x.jsx)(`div`,{className:`foot-icon-wrap`,children:(0,x.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`foot-svg`,children:[(0,x.jsx)(`circle`,{cx:`80`,cy:`50`,r:`12`,className:`ball-stroke`}),(0,x.jsx)(`path`,{d:`M25,25 C35,30 45,40 50,55 C55,70 50,85 30,80 C15,75 12,50 18,35 Z`,className:`boot-stroke`}),(0,x.jsx)(`path`,{d:`M58,42 L75,48 M55,55 L72,52 M53,68 L68,58`,className:`kick-lines`})]})}),(0,x.jsxs)(`div`,{className:`foot-card-content`,children:[(0,x.jsx)(`span`,{className:`foot-card-title`,children:i.footRight}),(0,x.jsx)(`p`,{className:`foot-card-desc`,children:i.footRightDesc})]})]}),(0,x.jsxs)(`button`,{type:`button`,className:`glass-card foot-option-card ${t.basic.preferredFoot===`both`?`selected`:``}`,onClick:()=>n(`basic`,`preferredFoot`,`both`),children:[(0,x.jsx)(`div`,{className:`foot-icon-wrap`,children:(0,x.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`foot-svg`,children:[(0,x.jsx)(`circle`,{cx:`50`,cy:`30`,r:`12`,className:`ball-stroke`}),(0,x.jsx)(`path`,{d:`M30,55 C35,60 38,70 30,85 C22,80 18,65 24,55 Z`,className:`boot-stroke`}),(0,x.jsx)(`path`,{d:`M70,55 C65,60 62,70 70,85 C78,80 82,65 76,55 Z`,className:`boot-stroke`}),(0,x.jsx)(`path`,{d:`M38,48 L46,38 M62,48 L54,38`,className:`kick-lines`})]})}),(0,x.jsxs)(`div`,{className:`foot-card-content`,children:[(0,x.jsx)(`span`,{className:`foot-card-title`,children:i.footBoth}),(0,x.jsx)(`p`,{className:`foot-card-desc`,children:i.footBothDesc})]})]})]})]}),(0,x.jsxs)(`div`,{className:`glass-card form-section-card selector-section-card`,children:[(0,x.jsxs)(`div`,{className:`selector-title-row`,children:[(0,x.jsx)(Me,{size:18,className:`selector-icon`}),(0,x.jsxs)(`div`,{className:`selector-title-texts`,children:[(0,x.jsxs)(`h3`,{className:`section-card-title no-margin`,children:[i.position,` *`]}),(0,x.jsx)(`span`,{className:`section-card-subtitle`,children:i.positionSubtitle})]})]}),r.position&&(0,x.jsx)(`div`,{className:`position-error-banner`,children:i.validation.position}),(0,x.jsxs)(`div`,{className:`position-selectors-layout`,children:[(0,x.jsxs)(`div`,{className:`pitch-selector-card glass-card`,children:[(0,x.jsx)(`div`,{className:`pitch-canvas-wrapper`,children:(0,x.jsxs)(`div`,{className:`pitch-field-outline`,children:[(0,x.jsx)(`div`,{className:`pitch-center-circle`}),(0,x.jsx)(`div`,{className:`pitch-center-line`}),(0,x.jsx)(`div`,{className:`pitch-penalty-area top`}),(0,x.jsx)(`div`,{className:`pitch-penalty-area bottom`}),Object.entries(o).map(([e,n])=>{let r=t.basic.primaryPosition===e,a=i.positions[e]?.name||e,o=e;return(0,x.jsxs)(`button`,{type:`button`,className:`pitch-marker ${r?`selected`:``}`,style:{bottom:`${n.bottom}%`,left:`${n.left}%`},onClick:()=>s(e),title:a,"aria-pressed":r,children:[(0,x.jsx)(`span`,{className:`marker-text`,children:o}),r&&(0,x.jsx)(`span`,{className:`marker-pulse`})]},e)})]})}),(0,x.jsxs)(`div`,{className:`pitch-selected-display`,children:[(0,x.jsx)(qe,{size:14,className:`display-info-icon`}),(0,x.jsxs)(`div`,{className:`display-text-wrap`,children:[(0,x.jsxs)(`span`,{className:`display-label`,children:[i.selectedPositionLabel,`:`]}),(0,x.jsx)(`span`,{className:`display-value`,children:t.basic.primaryPosition?i.positions[t.basic.primaryPosition]?.name:e===`en`?`None selected`:`Chưa chọn`})]})]})]}),(0,x.jsx)(`div`,{className:`categories-grid-card`,children:a.map(e=>(0,x.jsxs)(`div`,{className:`category-group-section`,children:[(0,x.jsx)(`h4`,{className:`category-group-header`,children:e.title}),(0,x.jsx)(`div`,{className:`category-cards-grid`,children:e.positions.map(e=>{let n=t.basic.primaryPosition===e,r=i.positions[e]||{name:e,desc:``};return(0,x.jsxs)(`button`,{type:`button`,className:`glass-card position-grid-card ${n?`selected`:``}`,onClick:()=>s(e),"aria-pressed":n,children:[(0,x.jsx)(`div`,{className:`pos-badge`,children:e}),(0,x.jsxs)(`div`,{className:`pos-card-info`,children:[(0,x.jsx)(`span`,{className:`pos-card-name`,children:r.name}),r.desc&&(0,x.jsx)(`p`,{className:`pos-card-desc`,children:r.desc})]})]},e)})})]},e.id))})]})]}),(0,x.jsx)(`style`,{children:`
        .step-basic-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          width: 100%;
          text-align: left;
        }

        .form-section-card {
          padding: 30px;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          gap: 24px;
          background: rgba(12, 15, 23, 0.4);
        }

        .section-card-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 12px;
        }

        .section-card-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .no-margin {
          border-bottom: none !important;
          padding-bottom: 0 !important;
        }

        /* Floating labels group style */
        .floating-group {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .floating-input {
          width: 100%;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 18px 20px 10px 20px;
          border-radius: var(--border-radius-sm);
          font-family: var(--font-body);
          font-size: 1rem;
          height: 56px;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .floating-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 10px var(--accent-glow);
          outline: none;
        }

        /* Floating label transition positioning */
        .floating-label {
          position: absolute;
          left: 20px;
          top: 18px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: transform 0.2s ease, font-size 0.2s ease, color 0.2s ease, top 0.2s ease;
          pointer-events: none;
        }

        /* Float on focus or value present */
        .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
          transform: scale(0.8) translate(-10%, -60%);
          color: var(--accent);
          top: 10px;
        }

        /* Specific center labels alignment (for Age, Height, Weight) */
        .center-label {
          width: 100%;
          left: 0;
          text-align: center;
        }
        
        .floating-input:focus ~ .center-label,
        .floating-input:not(:placeholder-shown) ~ .center-label {
          transform: scale(0.8) translate(0, -60%);
        }

        .inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .inputs-row-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        .text-center {
          text-align: center;
        }

        .error-msg {
          font-size: 0.85rem;
          color: #ff4a4a;
          font-weight: 500;
          margin-top: 4px;
        }

        .floating-group.has-error .floating-input {
          border-color: #ff4a4a !important;
          box-shadow: 0 0 10px rgba(255, 74, 74, 0.15) !important;
        }

        /* Preferred Foot selector cards design */
        .foot-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .foot-option-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: rgba(12, 15, 23, 0.4);
          text-align: center;
          width: 100%;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      color var(--transition-fast);
        }

        .foot-option-card:hover {
          transform: translateY(-4px);
          border-color: rgba(var(--accent-rgb), 0.3);
          color: var(--text-primary);
        }

        .foot-option-card.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .foot-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .foot-option-card:hover .foot-icon-wrap {
          border-color: rgba(var(--accent-rgb), 0.3);
        }

        .foot-option-card.selected .foot-icon-wrap {
          background: rgba(var(--accent-rgb), 0.15);
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.2);
        }

        .foot-svg {
          width: 42px;
          height: 42px;
        }

        /* SVG styling for foot cards */
        .ball-stroke {
          fill: none;
          stroke: var(--text-muted);
          stroke-width: 2;
          stroke-dasharray: 4 2;
        }
        
        .foot-option-card.selected .ball-stroke {
          stroke: var(--accent-blue);
          filter: drop-shadow(0 0 4px rgba(0, 210, 255, 0.4));
        }

        .boot-stroke {
          fill: none;
          stroke: var(--text-secondary);
          stroke-width: 2.5;
        }

        .foot-option-card.selected .boot-stroke {
          stroke: var(--accent);
          filter: drop-shadow(0 0 4px var(--accent-glow));
        }

        .kick-lines {
          fill: none;
          stroke: var(--text-muted);
          stroke-width: 2;
          opacity: 0.5;
        }

        .foot-option-card.selected .kick-lines {
          stroke: var(--accent);
          opacity: 1;
        }

        .foot-card-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .foot-card-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .foot-card-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Double positions selector layouts */
        .selector-title-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 16px;
        }

        .selector-icon {
          color: var(--accent);
          margin-top: 4px;
        }

        .selector-title-texts {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .position-error-banner {
          background: rgba(255, 74, 74, 0.1);
          border: 1px solid rgba(255, 74, 74, 0.3);
          color: #ff4a4a;
          padding: 12px 18px;
          border-radius: var(--border-radius-sm);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .position-selectors-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          width: 100%;
        }

        /* Method 2: Tactical soccer pitch card */
        .pitch-selector-card {
          width: 100%;
          height: 520px;
          background: linear-gradient(180deg, #091a13 0%, #050d0a 100%);
          border: 1px solid rgba(0, 242, 148, 0.2);
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          padding: 16px;
          position: relative;
          box-shadow: var(--shadow-md), 0 0 25px rgba(0, 242, 148, 0.05);
        }

        .theme-light .pitch-selector-card {
          background: linear-gradient(180deg, #e6f4ea 0%, #d4edd9 100%);
          border-color: rgba(5, 150, 105, 0.3);
          box-shadow: var(--shadow-sm);
        }

        .pitch-canvas-wrapper {
          flex: 1;
          width: 100%;
          position: relative;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          overflow: hidden;
        }

        .theme-light .pitch-canvas-wrapper {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-field-outline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
        }

        .theme-light .pitch-field-outline {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-center-line {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.12);
        }

        .theme-light .pitch-center-line {
          background: rgba(5, 150, 105, 0.2);
        }

        .pitch-center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          height: 70px;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .theme-light .pitch-center-circle {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-penalty-area {
          position: absolute;
          left: 50%;
          width: 130px;
          height: 60px;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          transform: translateX(-50%);
        }

        .theme-light .pitch-penalty-area {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-penalty-area.top {
          top: 0;
          border-top: none;
          border-radius: 0 0 12px 12px;
        }

        .pitch-penalty-area.bottom {
          bottom: 0;
          border-bottom: none;
          border-radius: 12px 12px 0 0;
        }

        /* Marker nodes styling */
        .pitch-marker {
          position: absolute;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1.5px solid var(--text-muted);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transform: translate(-50%, 50%);
          z-index: 10;
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      box-shadow var(--transition-fast);
        }

        .pitch-marker:hover {
          border-color: var(--accent);
          background-color: var(--bg-tertiary);
          transform: translate(-50%, 50%) scale(1.15);
        }

        .pitch-marker.selected {
          border-color: var(--accent);
          background: var(--accent);
          color: #07090e;
          font-weight: 800;
          box-shadow: 0 0 12px var(--accent);
        }

        .marker-text {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
        }

        /* Selected pulse circle under marker */
        .marker-pulse {
          position: absolute;
          width: 44px;
          height: 44px;
          border: 1.5px solid var(--accent);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .animations-on .marker-pulse {
          animation: markerPulseGlow 2s infinite ease-out;
        }

        @keyframes markerPulseGlow {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        .pitch-selected-display {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 10px 14px;
          border-radius: var(--border-radius-sm);
        }

        .display-info-icon {
          color: var(--accent-blue);
        }

        .display-text-wrap {
          display: flex;
          gap: 6px;
          font-size: 0.85rem;
        }

        .display-label {
          color: var(--text-muted);
        }

        .display-value {
          font-weight: 700;
          color: var(--accent);
        }

        /* Method 1: Category Position lists */
        .categories-grid-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .category-group-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .category-group-header {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent-blue);
          border-left: 2.5px solid var(--accent-blue);
          padding-left: 8px;
        }

        .category-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }

        .position-grid-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: rgba(12, 15, 23, 0.3);
          text-align: left;
          width: 100%;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      color var(--transition-fast);
        }

        .position-grid-card:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--accent-rgb), 0.25);
          color: var(--text-primary);
        }

        .position-grid-card.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .pos-badge {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color var(--transition-fast);
        }

        .position-grid-card.selected .pos-badge {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(var(--accent-rgb), 0.05);
        }

        .pos-card-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .pos-card-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .pos-card-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        @media (max-width: 1024px) {
          .position-selectors-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .pitch-selector-card {
            max-width: 320px;
            margin: 0 auto;
            height: 480px;
          }
        }

        @media (max-width: 768px) {
          .inputs-grid {
            grid-template-columns: 1fr;
          }
          .foot-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .form-section-card {
            padding: 20px;
          }
        }
      `})]})}function xt({category:e}){let{language:t}=w(),{formData:n,updateField:r}=xe(),i=k[t].questionnaire[e],a={physical:[`acceleration`,`sprintSpeed`,`agility`,`balance`,`strength`,`stamina`,`jumping`,`physicality`,`reactions`,`composure`,`endurance`],technical:[`ballControl`,`firstTouch`,`dribbling`,`closeControl`,`shortPassing`,`longPassing`,`vision`,`crossing`,`curve`,`finishing`,`shotPower`,`longShots`,`volleys`,`heading`,`penalty`,`freeKickAccuracy`,`throughBalls`,`weakFootAbility`,`skillMoves`],defensive:[`defensiveAwareness`,`interceptions`,`standingTackle`,`slidingTackle`,`marking`,`pressing`,`aggression`,`aerialAbility`],goalkeeper:[`diving`,`reflexes`,`handling`,`positioning`,`kicking`,`distribution`,`oneOnOne`,`communication`]}[e]||[],o=e=>e>=85?`rating-elite`:e>=70?`rating-good`:e>=50?`rating-average`:`rating-developing`;return(0,x.jsxs)(`div`,{className:`step-attributes-container`,children:[(0,x.jsx)(`h3`,{className:`attributes-title`,children:i.title}),(0,x.jsx)(`div`,{className:`attributes-grid`,children:a.map(t=>{let a=n[e][t],s=i[t]||t;return(0,x.jsxs)(`div`,{className:`glass-card attribute-slider-card`,children:[(0,x.jsxs)(`div`,{className:`slider-header`,children:[(0,x.jsx)(`span`,{className:`slider-label`,children:s}),(0,x.jsx)(`span`,{className:`slider-value-badge ${o(a)}`,children:a})]}),(0,x.jsxs)(`div`,{className:`slider-wrapper`,children:[(0,x.jsx)(`input`,{type:`range`,min:`1`,max:`100`,value:a,className:`attribute-range-slider`,onChange:n=>r(e,t,parseInt(n.target.value)),"aria-label":s}),(0,x.jsx)(`div`,{className:`slider-track-fill`,style:{width:`${a}%`}})]})]},t)})}),(0,x.jsx)(`style`,{children:`
        .step-attributes-container {
          width: 100%;
          text-align: left;
        }

        .attributes-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .attributes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          width: 100%;
        }

        .attribute-slider-card {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-radius: var(--border-radius-sm);
          position: relative;
          overflow: hidden;
          background: rgba(12, 15, 23, 0.4);
        }

        .slider-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slider-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .slider-value-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          padding: 4px 10px;
          border-radius: var(--border-radius-full);
          min-width: 42px;
          text-align: center;
          border: 1px solid transparent;
        }

        /* Color badges based on values */
        .slider-value-badge.rating-elite {
          background: rgba(0, 242, 148, 0.1);
          border-color: rgba(0, 242, 148, 0.4);
          color: var(--accent);
          box-shadow: 0 0 10px rgba(0, 242, 148, 0.2);
        }

        .slider-value-badge.rating-good {
          background: rgba(0, 210, 255, 0.1);
          border-color: rgba(0, 210, 255, 0.4);
          color: var(--accent-blue);
        }

        .slider-value-badge.rating-average {
          background: rgba(148, 163, 184, 0.1);
          border-color: rgba(148, 163, 184, 0.3);
          color: var(--text-primary);
        }

        .slider-value-badge.rating-developing {
          background: rgba(249, 115, 22, 0.1);
          border-color: rgba(249, 115, 22, 0.3);
          color: #f97316;
        }

        /* Input Slider range customizing */
        .slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 8px;
        }

        .attribute-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-full);
          outline: none;
          cursor: pointer;
          position: relative;
          z-index: 2;
          margin: 0;
        }

        /* Webkit Handle */
        .attribute-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent);
          cursor: pointer;
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .attribute-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: var(--accent-hover);
        }

        /* Mozilla Handle */
        .attribute-range-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent);
          cursor: pointer;
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .attribute-range-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          background: var(--accent-hover);
        }

        .slider-track-fill {
          position: absolute;
          left: 0;
          top: 1px;
          height: 6px;
          background: linear-gradient(90deg, var(--accent-blue) 0%, var(--accent) 100%);
          border-radius: var(--border-radius-full) 0 0 var(--border-radius-full);
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .attributes-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `})]})}function St({category:e}){let{language:t}=w(),{formData:n,toggleArrayItem:r,errors:i}=xe(),a=k[t].questionnaire[e===`styles`?`style`:`personality`],o={styles:[`opt1`,`opt2`,`opt3`,`opt4`,`opt5`,`opt6`,`opt7`,`opt8`,`opt9`,`opt10`,`opt11`,`opt12`,`opt13`,`opt14`,`opt15`,`opt16`,`opt17`],personality:[`calm`,`aggressive`,`creative`,`leader`,`hardWorker`,`teamPlayer`,`selfless`,`confident`,`clinical`,`intelligent`,`disciplined`,`passionate`,`competitive`,`riskTaker`,`composedUnderPressure`]}[e]||[],s=n[e]||[],c=i[e];return(0,x.jsxs)(`div`,{className:`step-selections-container`,children:[(0,x.jsx)(`h3`,{className:`selections-title`,children:a.title}),c&&(0,x.jsx)(`div`,{className:`selection-error-banner`,children:a.validation}),(0,x.jsx)(`div`,{className:`selections-grid`,children:o.map(t=>{let n=a[t]||t,i=s.includes(t);return(0,x.jsxs)(`button`,{type:`button`,className:`glass-card selection-card-btn ${i?`selected`:``}`,onClick:()=>r(e,t),"aria-pressed":i,children:[(0,x.jsx)(`div`,{className:`check-box-indicator`,children:i&&(0,x.jsx)(Pe,{size:14,className:`check-icon`})}),(0,x.jsx)(`span`,{className:`selection-label-text`,children:n})]},t)})}),(0,x.jsx)(`style`,{children:`
        .step-selections-container {
          width: 100%;
          text-align: left;
        }

        .selections-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .selection-error-banner {
          background: rgba(255, 74, 74, 0.1);
          border: 1px solid rgba(255, 74, 74, 0.3);
          color: #ff4a4a;
          padding: 12px 18px;
          border-radius: var(--border-radius-sm);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .selections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          width: 100%;
        }

        .selection-card-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: rgba(12, 15, 23, 0.4);
          text-align: left;
          width: 100%;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      color var(--transition-fast),
                      box-shadow var(--transition-fast);
        }

        .selection-card-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--accent-rgb), 0.3);
          color: var(--text-primary);
        }

        .selection-card-btn.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .check-box-indicator {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1.5px solid var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
          flex-shrink: 0;
        }

        .selection-card-btn:hover .check-box-indicator {
          border-color: var(--accent);
        }

        .selection-card-btn.selected .check-box-indicator {
          background-color: var(--accent);
          border-color: var(--accent);
        }

        .check-icon {
          color: #07090e;
        }

        .selection-label-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 600px) {
          .selections-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `})]})}function Ct(){let{language:e}=w(),{formData:t,updateField:n,errors:r}=xe(),i=k[e].questionnaire.tactics;return(0,x.jsxs)(`div`,{className:`step-tactics-container`,children:[(0,x.jsx)(`h3`,{className:`tactics-step-title`,children:i.title}),(0,x.jsxs)(`div`,{className:`form-field ${r.system?`has-error`:``}`,children:[(0,x.jsx)(`label`,{className:`tactical-field-label`,children:(0,x.jsxs)(`span`,{children:[i.system,` *`]})}),r.system&&(0,x.jsxs)(`span`,{className:`tactical-error-msg`,children:[(0,x.jsx)(et,{size:14}),i.validationSystem]}),(0,x.jsx)(`div`,{className:`tactics-radio-grid`,children:[`possession`,`counter`,`highPress`,`balanced`,`longBall`,`direct`,`wingPlay`,`defensive`].map(e=>{let r=i.systems[e]||e,a=t.tactics.system===e;return(0,x.jsxs)(`button`,{type:`button`,className:`glass-card tactic-btn ${a?`selected`:``}`,onClick:()=>n(`tactics`,`system`,e),"aria-pressed":a,children:[(0,x.jsx)(`div`,{className:`radio-indicator`,children:a&&(0,x.jsx)(`span`,{className:`radio-dot`})}),(0,x.jsx)(`span`,{className:`tactic-btn-label`,children:r})]},e)})})]}),(0,x.jsxs)(`div`,{className:`form-field ${r.role?`has-error`:``}`,children:[(0,x.jsx)(`label`,{className:`tactical-field-label`,children:(0,x.jsxs)(`span`,{children:[i.role,` *`]})}),r.role&&(0,x.jsxs)(`span`,{className:`tactical-error-msg`,children:[(0,x.jsx)(et,{size:14}),i.validationRole]}),(0,x.jsx)(`div`,{className:`tactics-radio-grid`,children:[`playmaker`,`boxToBox`,`deepPlaymaker`,`ballWinning`,`insideForward`,`poacher`,`targetMan`,`false9`,`advancedForward`,`completeForward`,`traditionalWinger`,`sweeperKeeper`].map(e=>{let r=i.roles[e]||e,a=t.tactics.role===e;return(0,x.jsxs)(`button`,{type:`button`,className:`glass-card tactic-btn ${a?`selected`:``}`,onClick:()=>n(`tactics`,`role`,e),"aria-pressed":a,children:[(0,x.jsx)(`div`,{className:`radio-indicator`,children:a&&(0,x.jsx)(`span`,{className:`radio-dot`})}),(0,x.jsx)(`span`,{className:`tactic-btn-label`,children:r})]},e)})})]}),(0,x.jsx)(`style`,{children:`
        .step-tactics-container {
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .tactics-step-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .tactical-field-label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
          border-left: 3px solid var(--accent);
          padding-left: 10px;
          margin-bottom: 4px;
        }

        .tactics-radio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 8px;
        }

        .tactic-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: rgba(12, 15, 23, 0.4);
          text-align: left;
          width: 100%;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      color var(--transition-fast),
                      box-shadow var(--transition-fast);
        }

        .tactic-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--accent-rgb), 0.3);
          color: var(--text-primary);
        }

        .tactic-btn.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .radio-indicator {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color var(--transition-fast);
        }

        .tactic-btn:hover .radio-indicator {
          border-color: var(--accent);
        }

        .tactic-btn.selected .radio-indicator {
          border-color: var(--accent);
        }

        .radio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--accent);
          display: inline-block;
          box-shadow: 0 0 8px var(--accent-glow);
        }

        .tactic-btn-label {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .tactical-error-msg {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #ff4a4a;
          font-weight: 500;
          margin-top: 4px;
        }

        .form-field.has-error .tactic-btn {
          border-color: rgba(255, 74, 74, 0.2);
        }
        
        .form-field.has-error .tactic-btn.selected {
          border-color: var(--accent);
        }

        @media (max-width: 600px) {
          .tactics-radio-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `})]})}var wt=m();function Tt(){let{language:e}=w(),{formData:t,isGoalkeeper:n,validateStep:r}=xe(),i=k[e].questionnaire.review,a=k[e].questionnaire.basic,o=k[e].questionnaire.style,s=k[e].questionnaire.personality,c=k[e].questionnaire.tactics,[l,u]=(0,b.useState)(null),d=e=>(0,x.jsx)(`span`,{className:`review-tag-item`,children:e},e);return(0,x.jsxs)(`div`,{className:`step-review-container`,children:[(0,x.jsxs)(`div`,{className:`review-header`,children:[(0,x.jsx)(`h3`,{className:`review-title`,children:i.title}),(0,x.jsx)(`p`,{className:`review-subtitle`,children:i.subtitle})]}),(0,x.jsxs)(`div`,{className:`review-grid`,children:[(0,x.jsxs)(`div`,{className:`glass-card review-card`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(ct,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.basicInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`basic`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsxs)(`div`,{className:`review-card-body basic-review-details`,children:[(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[a.name,`:`]}),(0,x.jsx)(`span`,{className:`detail-value`,children:t.basic.name})]}),t.basic.nickname&&(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[a.nickname,`:`]}),(0,x.jsxs)(`span`,{className:`detail-value`,children:[`"`,t.basic.nickname,`"`]})]}),(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[a.age,`:`]}),(0,x.jsx)(`span`,{className:`detail-value`,children:t.basic.age})]}),(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[a.height,`:`]}),(0,x.jsxs)(`span`,{className:`detail-value`,children:[t.basic.height,` cm`]})]}),(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[a.weight,`:`]}),(0,x.jsxs)(`span`,{className:`detail-value`,children:[t.basic.weight,` kg`]})]}),(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[a.foot,`:`]}),(0,x.jsx)(`span`,{className:`detail-value`,children:t.basic.preferredFoot===`left`?a.footLeft:t.basic.preferredFoot===`right`?a.footRight:a.footBoth})]}),(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[a.position,`:`]}),(0,x.jsx)(`span`,{className:`detail-value primary-position-highlight`,children:a.positions[t.basic.primaryPosition]?.name||t.basic.primaryPosition})]})]})]}),(0,x.jsxs)(`div`,{className:`glass-card review-card`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(je,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.physicalInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`physical`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsx)(`div`,{className:`review-card-body attributes-scroll-grid`,children:Object.entries(t.physical).map(([t,n])=>(0,x.jsxs)(`div`,{className:`stat-review-row`,children:[(0,x.jsx)(`span`,{className:`stat-name`,children:k[e].questionnaire.physical[t]||t}),(0,x.jsx)(`span`,{className:`stat-val`,children:n})]},t))})]}),(0,x.jsxs)(`div`,{className:`glass-card review-card`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(nt,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.technicalInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`technical`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsx)(`div`,{className:`review-card-body attributes-scroll-grid`,children:Object.entries(t.technical).map(([t,n])=>(0,x.jsxs)(`div`,{className:`stat-review-row`,children:[(0,x.jsx)(`span`,{className:`stat-name`,children:k[e].questionnaire.technical[t]||t}),(0,x.jsx)(`span`,{className:`stat-val`,children:n})]},t))})]}),(0,x.jsxs)(`div`,{className:`glass-card review-card`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(tt,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.defensiveInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`defensive`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsx)(`div`,{className:`review-card-body attributes-scroll-grid`,children:Object.entries(t.defensive).map(([t,n])=>(0,x.jsxs)(`div`,{className:`stat-review-row`,children:[(0,x.jsx)(`span`,{className:`stat-name`,children:k[e].questionnaire.defensive[t]||t}),(0,x.jsx)(`span`,{className:`stat-val`,children:n})]},t))})]}),n&&(0,x.jsxs)(`div`,{className:`glass-card review-card`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(Me,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.gkInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`goalkeeper`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsx)(`div`,{className:`review-card-body attributes-scroll-grid`,children:Object.entries(t.goalkeeper).map(([t,n])=>(0,x.jsxs)(`div`,{className:`stat-review-row`,children:[(0,x.jsx)(`span`,{className:`stat-name`,children:k[e].questionnaire.goalkeeper[t]||t}),(0,x.jsx)(`span`,{className:`stat-val`,children:n})]},t))})]}),(0,x.jsxs)(`div`,{className:`glass-card review-card`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(at,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.tacticalInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`tactics`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsxs)(`div`,{className:`review-card-body basic-review-details`,children:[(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[c.system,`:`]}),(0,x.jsx)(`span`,{className:`detail-value`,children:c.systems[t.tactics.system]||t.tactics.system})]}),(0,x.jsxs)(`div`,{className:`review-detail-row`,children:[(0,x.jsxs)(`span`,{className:`detail-label`,children:[c.role,`:`]}),(0,x.jsx)(`span`,{className:`detail-value primary-position-highlight`,children:c.roles[t.tactics.role]||t.tactics.role})]})]})]}),(0,x.jsxs)(`div`,{className:`glass-card review-card span-2`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(Re,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.stylesInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`styles`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsx)(`div`,{className:`review-card-body tag-review-grid`,children:t.styles.map(e=>d(o[e]||e))})]}),(0,x.jsxs)(`div`,{className:`glass-card review-card span-2`,children:[(0,x.jsxs)(`div`,{className:`review-card-header`,children:[(0,x.jsxs)(`div`,{className:`card-header-label`,children:[(0,x.jsx)(Ne,{size:18,className:`review-card-icon`}),(0,x.jsx)(`span`,{children:i.mentalInfo})]}),(0,x.jsxs)(`button`,{className:`edit-section-btn`,onClick:()=>u(`personality`),children:[(0,x.jsx)(Xe,{size:14}),(0,x.jsx)(`span`,{children:i.edit})]})]}),(0,x.jsx)(`div`,{className:`review-card-body tag-review-grid`,children:t.personality.map(e=>d(s[e]||e))})]})]}),l&&(0,wt.createPortal)((0,x.jsx)(`div`,{className:`section-edit-backdrop`,onClick:()=>u(null),children:(0,x.jsxs)(`div`,{className:`section-edit-modal`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsx)(`h3`,{className:`modal-title`,children:(t=>{switch(t){case`basic`:return e===`en`?`Edit Profile Overview`:`Chỉnh sửa hồ sơ cá nhân`;case`physical`:return e===`en`?`Edit Physical Dossier`:`Chỉnh sửa chỉ số thể trạng`;case`technical`:return e===`en`?`Edit Technical Skills`:`Chỉnh sửa kỹ năng kỹ thuật`;case`defensive`:return e===`en`?`Edit Defensive Prowess`:`Chỉnh sửa khả năng phòng ngự`;case`goalkeeper`:return e===`en`?`Edit Goalkeeper Record`:`Chỉnh sửa kỹ năng thủ môn`;case`styles`:return e===`en`?`Edit Playing Styles`:`Chỉnh sửa phong cách thi đấu`;case`personality`:return e===`en`?`Edit Mentality Traits`:`Chỉnh sửa phẩm chất tinh thần`;case`tactics`:return e===`en`?`Edit Tactical Blueprint`:`Chỉnh sửa chiến thuật & vai trò`;default:return``}})(l)}),(0,x.jsx)(`button`,{className:`modal-close-btn`,onClick:()=>u(null),"aria-label":`Cancel editing`,children:(0,x.jsx)(dt,{size:20})})]}),(0,x.jsx)(`div`,{className:`modal-body`,children:(()=>{switch(l){case`basic`:return(0,x.jsx)(bt,{});case`physical`:return(0,x.jsx)(xt,{category:`physical`});case`technical`:return(0,x.jsx)(xt,{category:`technical`});case`defensive`:return(0,x.jsx)(xt,{category:`defensive`});case`goalkeeper`:return(0,x.jsx)(xt,{category:`goalkeeper`});case`styles`:return(0,x.jsx)(St,{category:`styles`});case`personality`:return(0,x.jsx)(St,{category:`personality`});case`tactics`:return(0,x.jsx)(Ct,{});default:return null}})()}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-modal-cancel`,onClick:()=>u(null),children:e===`en`?`Cancel`:`Hủy bỏ`}),(0,x.jsxs)(`button`,{type:`button`,className:`btn-primary btn-modal-save`,onClick:()=>{let e={basic:1,styles:6,personality:7,tactics:8}[l];e?r(e)&&u(null):u(null)},children:[(0,x.jsx)(Pe,{size:16}),(0,x.jsx)(`span`,{children:e===`en`?`Save Changes`:`Lưu thay đổi`})]})]})]})}),document.body),(0,x.jsx)(`style`,{children:`
        .step-review-container {
          width: 100%;
          text-align: left;
        }

        .review-header {
          margin-bottom: 32px;
        }

        .review-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .review-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          width: 100%;
        }

        @media (min-width: 1025px) {
          .review-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .review-card {
          padding: 24px;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(12, 15, 23, 0.4);
          height: fit-content;
        }

        .review-card.span-2 {
          grid-column: span 2;
        }

        @media (min-width: 1025px) {
          .review-card.span-2 {
            grid-column: span 3;
          }
        }

        .review-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 12px;
        }

        .card-header-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .review-card-icon {
          color: var(--accent);
        }

        .edit-section-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .edit-section-btn:hover {
          color: var(--accent);
        }

        .review-card-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .review-detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          border-bottom: 1px dashed rgba(255,255,255,0.03);
          padding-bottom: 6px;
        }

        .detail-label {
          color: var(--text-secondary);
        }

        .detail-value {
          font-weight: 600;
          color: var(--text-primary);
        }

        .primary-position-highlight {
          color: var(--accent) !important;
          font-weight: 700;
        }

        .capitalize {
          text-transform: capitalize;
        }

        /* Stat Grid Review Scroll */
        .attributes-scroll-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 280px;
          overflow-y: auto;
          padding-right: 8px;
        }

        .stat-review-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 8px 12px;
          border-radius: var(--border-radius-sm);
          font-size: 0.85rem;
        }

        .stat-name {
          color: var(--text-secondary);
          margin-right: 8px;
        }

        .stat-val {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--accent-blue);
        }

        /* Tag Grid review */
        .tag-review-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          flex-direction: row;
        }

        .review-tag-item {
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 6px 12px;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Popup Section Edit Modal */
        .section-edit-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeInBackdrop 0.2s ease-out forwards;
        }

        .section-edit-modal {
          width: 100%;
          max-width: 680px;
          max-height: 85vh;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-lg), 0 0 35px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUpModal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUpModal {
          from {
            transform: translateY(30px) scale(0.98);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: var(--glass-border);
          color: var(--text-primary);
        }

        .modal-body {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
          background: rgba(12, 15, 23, 0.1);
        }

        .modal-body .glass-card {
          background: rgba(255, 255, 255, 0.01) !important;
          border: 1px solid rgba(255, 255, 255, 0.03) !important;
          box-shadow: none !important;
          padding: 20px !important;
          margin-bottom: 16px;
        }

        .modal-footer {
          padding: 20px 24px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          background: rgba(0, 0, 0, 0.2);
        }

        .btn-modal-save {
          min-width: 140px;
        }

        .btn-modal-cancel {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 10px 20px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-modal-cancel:hover {
          border-color: var(--text-muted);
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.02);
        }

        @media (max-width: 768px) {
          .review-grid {
            grid-template-columns: 1fr;
          }
          .review-card.span-2 {
            grid-column: span 1;
          }
          .attributes-scroll-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}var Et={messi:{shirtNumber:10,career:{previousClubs:[`Barcelona`,`Paris Saint-Germain`],yearsActive:`2004 - Present`},stats:{appearances:885,goals:735,assists:355,cleanSheets:0,minutesPlayed:73500,internationalApps:180,internationalGoals:106},achievements:[`1x FIFA World Cup Winner (2022)`,`8x Ballon d'Or Winner`,`4x UEFA Champions League Winner`,`10x La Liga Champion`,`2x Copa América Winner`],biography:[`Lionel Messi is widely regarded as one of the greatest football players of all time. Born in Rosario, Argentina, he moved to Spain at age 13 to join Barcelona's youth academy, La Masia. Over his legendary career at Barcelona, he broke almost every scoring and appearance record in the club's history.`,`His playing style is defined by low center of gravity, extreme close control dribbling, playmaker vision, and clinical finishing. After a two-year stint at Paris Saint-Germain, he joined Inter Miami in the MLS, elevating soccer's profile in North America.`,`Messi cemented his international legacy in 2022 by captaining Argentina to World Cup glory in Qatar, winning the Golden Ball as the tournament's best player.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Lionel_Messi`,clubWebsite:`https://www.intermiamicf.com/`,leagueProfile:`https://www.mlssoccer.com/players/lionel-messi/`}},ronaldo:{shirtNumber:7,career:{previousClubs:[`Sporting CP`,`Manchester United`,`Real Madrid`,`Juventus`],yearsActive:`2002 - Present`},stats:{appearances:1020,goals:760,assists:220,cleanSheets:0,minutesPlayed:88e3,internationalApps:206,internationalGoals:128},achievements:[`5x Ballon d'Or Winner`,`5x UEFA Champions League Winner`,`1x UEFA European Champion (2016)`,`3x Premier League Champion`,`2x La Liga Champion`],biography:[`Cristiano Ronaldo is a Portuguese professional footballer who serves as captain for both Saudi Pro League club Al Nassr and the Portugal national team. Known for his elite work ethic, physical supremacy, and goalscoring records, Ronaldo has dominated football for over two decades.`,`Ronaldo's career took off at Manchester United under Sir Alex Ferguson before joining Real Madrid in 2009 for a world-record fee. In Madrid, he developed a legendary rivalry with Lionel Messi, scoring an astounding 450 goals in 438 appearances.`,`As the highest goalscorer in international men's football history, Ronaldo continues to defy age, showcasing clinical poacher instincts and supreme athletic longevity.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Cristiano_Ronaldo`,clubWebsite:`https://www.alnassr.sa/`,leagueProfile:`https://www.spl.com.sa/en/players/82431/`}},haaland:{shirtNumber:9,career:{previousClubs:[`Bryne`,`Molde`,`Red Bull Salzburg`,`Borussia Dortmund`],yearsActive:`2016 - Present`},stats:{appearances:280,goals:245,assists:48,cleanSheets:0,minutesPlayed:23500,internationalApps:33,internationalGoals:31},achievements:[`1x UEFA Champions League Winner (2023)`,`2x Premier League Champion`,`1x Premier League Golden Boot`,`1x European Golden Shoe`],biography:[`Erling Haaland is a Norwegian striker celebrated for his blistering pace, physical strength, and devastating finishing inside the box. Born to former footballer Alfie Haaland, he rose rapidly through Salzburg and Dortmund before completing a blockbuster move to Manchester City in 2022.`,`In his debut Premier League season, Haaland shattered the single-season scoring record by netting 36 goals, spearheading City's historic continental treble victory.`,`Representing Norway on the international stage, Haaland is already tracking to become the nation's all-time top scorer at a very young age.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Erling_Haaland`,clubWebsite:`https://www.mancity.com/`,leagueProfile:`https://www.premierleague.com/players/65970/Erling-Haaland/overview`}},mbappe:{shirtNumber:9,career:{previousClubs:[`Monaco`,`Paris Saint-Germain`],yearsActive:`2015 - Present`},stats:{appearances:375,goals:290,assists:125,cleanSheets:0,minutesPlayed:31e3,internationalApps:77,internationalGoals:46},achievements:[`1x FIFA World Cup Winner (2018)`,`1x FIFA World Cup Golden Boot (2022)`,`6x Ligue 1 Champion`,`1x UEFA Nations League Winner`],biography:[`Kylian Mbappé is a French forward renowned for his explosive acceleration, dribbling wizardry, and elite clinical finishing. He broke onto the global scene with Monaco in 2016, securing a high-profile transfer to Paris Saint-Germain shortly after.`,`At PSG, Mbappé became the club's all-time top scorer, winning multiple league titles. In 2024, he completed his dream transfer to Spanish giants Real Madrid.`,`Mbappé was instrumental in France's 2018 World Cup triumph, scoring in the final. In 2022, he scored a historic hat-trick in the World Cup final against Argentina, finishing as the tournament's top scorer.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9`,clubWebsite:`https://www.realmadrid.com/`,leagueProfile:`https://www.laliga.com/en-GB/player/mbappe`}},salah:{shirtNumber:11,career:{previousClubs:[`El Mokawloon`,`Basel`,`Chelsea`,`Fiorentina`,`Roma`],yearsActive:`2010 - Present`},stats:{appearances:560,goals:285,assists:140,cleanSheets:0,minutesPlayed:45e3,internationalApps:96,internationalGoals:54},achievements:[`1x UEFA Champions League Winner (2019)`,`1x Premier League Champion`,`3x Premier League Golden Boot Winner`,`2x CAF African Footballer of the Year`],biography:[`Mohamed Salah is an Egyptian winger widely celebrated for his speed, dribbling cuts, and scoring efficiency. After finding success in Switzerland and Italy, his career exploded upon joining Liverpool in 2017.`,`Under Jürgen Klopp, Salah set the record for most goals in a 38-game Premier League season (32 goals) and helped guide the club to UEFA Champions League and Premier League titles.`,`As a national icon, Salah has carried Egypt to Cup of Nations finals and represented his country at the 2018 FIFA World Cup.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Mohamed_Salah`,clubWebsite:`https://www.liverpoolfc.com/`,leagueProfile:`https://www.premierleague.com/players/5110/Mohamed-Salah/overview`}},debruyne:{shirtNumber:17,career:{previousClubs:[`Genk`,`Chelsea`,`Werder Bremen`,`VfL Wolfsburg`],yearsActive:`2008 - Present`},stats:{appearances:605,goals:148,assists:260,cleanSheets:0,minutesPlayed:49e3,internationalApps:99,internationalGoals:26},achievements:[`1x UEFA Champions League Winner (2023)`,`6x Premier League Champion`,`2x PFA Players' Player of the Year`,`1x Bundesliga Player of the Year`],biography:[`Kevin De Bruyne is a Belgian attacking midfielder widely acclaimed as one of the best playmakers of his generation. His crossing range, passing vision, and long-range shooting make him the creative engine of Manchester City.`,`After being underutilized at Chelsea, he starred at Wolfsburg before joining City in 2015. Since then, he has compiled league-leading assist tallies year after year, masterminding Pep Guardiola's dominant midfield structure.`,`De Bruyne is also a pillar of Belgium's 'Golden Generation', leading them to a historic 3rd-place finish at the 2018 World Cup.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Kevin_De_Bruyne`,clubWebsite:`https://www.mancity.com/`,leagueProfile:`https://www.premierleague.com/players/4287/Kevin-De-Bruyne/overview`}},vandijk:{shirtNumber:4,career:{previousClubs:[`Groningen`,`Celtic`,`Southampton`],yearsActive:`2011 - Present`},stats:{appearances:512,goals:48,assists:22,cleanSheets:210,minutesPlayed:45e3,internationalApps:64,internationalGoals:7},achievements:[`1x UEFA Champions League Winner (2019)`,`1x Premier League Champion (2020)`,`1x UEFA Men's Player of the Year`,`1x PFA Players' Player of the Year`],biography:[`Virgil van Dijk is a Dutch central defender known for his physical presence, defensive awareness, leadership, and aerial dominance. His transfer to Liverpool in 2018 transformed the club into a defensive powerhouse.`,`He finished runner-up for the Ballon d'Or in 2019, an exceptional achievement for a defender, following Liverpool's Champions League triumph. He currently captains both Liverpool and the Netherlands national team.`,`Van Dijk's calm reading of the game and recovery speed make him one of the most respected defenders in modern football history.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Virgil_van_Dijk`,clubWebsite:`https://www.liverpoolfc.com/`,leagueProfile:`https://www.premierleague.com/players/10486/Virgil-van-Dijk/overview`}},alisson:{shirtNumber:1,career:{previousClubs:[`Internacional`,`Roma`],yearsActive:`2013 - Present`},stats:{appearances:420,goals:1,assists:3,cleanSheets:195,minutesPlayed:37800,internationalApps:63,internationalGoals:0},achievements:[`1x UEFA Champions League Winner (2019)`,`1x Premier League Champion (2020)`,`1x Copa América Winner (2019)`,`1x The Best FIFA Goalkeeper Winner`],biography:[`Alisson Becker is a Brazilian goalkeeper celebrated for his 1v1 shot-stopping, positioning, sweeping, and distributions. He joined Liverpool from Roma in 2018 for a then-world-record fee for a goalkeeper.`,`Alisson was a foundational pillar alongside Virgil van Dijk in Liverpool's Champions League and Premier League winning campaigns. He holds the rare distinction of scoring a dramatic 95th-minute headed match-winner for Liverpool in 2021.`,`Internationally, he represents Brazil, winning the Copa América in 2019 where he was named the tournament's best goalkeeper.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Alisson`,clubWebsite:`https://www.liverpoolfc.com/`,leagueProfile:`https://www.premierleague.com/players/15152/Alisson/overview`}},pele:{shirtNumber:10,career:{previousClubs:[`Santos`,`New York Cosmos`],yearsActive:`1956 - 1977`},stats:{appearances:730,goals:680,assists:245,cleanSheets:0,minutesPlayed:65e3,internationalApps:92,internationalGoals:77},achievements:[`3x FIFA World Cup Winner (1958, 1962, 1970)`,`FIFA Player of the Century`,`2x Copa Libertadores Winner`,`All-Time Top Scorer for Santos`],biography:[`Pelé, born Edson Arantes do Nascimento, is widely considered the ultimate icon of football. Born in Três Corações, Brazil, he joined Santos at age 15 and the national team at 16, immediately capturing the world's attention with his technical elegance and athletic supremacy.`,`He remains the only player in football history to win three World Cups. His performance in the 1970 World Cup final is remembered as one of the peak artistic displays of footballing genius.`,`Throughout his career, Pelé scored over 1,000 goals (including friendlies) and spent his final playing years popularizing soccer in the United States with the New York Cosmos.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Pel%C3%A9`,clubWebsite:`https://www.santosfc.com.br/`,leagueProfile:`https://www.fifa.com/en/tournaments/mens/worldcup/qatar2022/news/pele-tribute-stats-records`}},maradona:{shirtNumber:10,career:{previousClubs:[`Argentinos Juniors`,`Boca Juniors`,`Barcelona`,`Napoli`,`Sevilla`,`Newell's Old Boys`],yearsActive:`1976 - 1997`},stats:{appearances:490,goals:259,assists:180,cleanSheets:0,minutesPlayed:44e3,internationalApps:91,internationalGoals:34},achievements:[`1x FIFA World Cup Winner (1986)`,`1x FIFA World Cup Golden Ball (1986)`,`2x Serie A Champion (Napoli)`,`1x UEFA Cup Winner`],biography:[`Diego Maradona was an Argentine professional footballer and manager. Renowned for his sublime dribbling, vision, and rebellious spirit, Maradona dominated the footballing landscape of the 1980s.`,`He famously captained Argentina to victory in the 1986 World Cup, scoring the controversial 'Hand of God' goal and the 'Goal of the Century'—dribbling past five English players—in the same match against England.`,`At club level, Maradona became a demigod in Naples, leading Napoli to their first-ever Serie A titles in 1987 and 1990, breaking the dominance of the wealthy northern clubs.`],externalLinks:{wikipedia:`https://en.wikipedia.org/wiki/Diego_Maradona`,clubWebsite:`https://sscnapoli.it/en/`,leagueProfile:`https://www.legaseriea.it/en`}}},j=e=>{let t=Et[e.id.split(`_`)[0]]||{};return{name:e.name,nationality:e.nationality,club:e.club,league:e.league,primaryPosition:e.primaryPosition,secondaryPositions:e.secondaryPositions,preferredFoot:e.preferredFoot,age:e.age,height:e.height,weight:e.weight,isGK:e.isGK,tacticalRole:e.tacticalProfile?.[0]||`Advanced Midfielder`,playingStyle:e.playingStyle||[],shirtNumber:t.shirtNumber||`Unavailable`,career:{previousClubs:t.career?.previousClubs||[`Unavailable`],yearsActive:t.career?.yearsActive||`Unavailable`},stats:t.stats||{appearances:`Unavailable`,goals:`Unavailable`,assists:`Unavailable`,cleanSheets:`Unavailable`,minutesPlayed:`Unavailable`,internationalApps:`Unavailable`,internationalGoals:`Unavailable`},achievements:t.achievements||[`Unavailable`],biography:t.biography||[`${e.name} is a professional footballer who currently plays as a ${e.primaryPosition} for ${e.club} in the ${e.league}.`,`Born in ${e.nationality}, he continues to perform at the high levels required of modern professional leagues. Detailed scouting reports and player history are being updated.`],externalLinks:t.externalLinks||{wikipedia:`https://en.wikipedia.org/wiki/${encodeURIComponent(e.name)}`,clubWebsite:`https://www.google.com/search?q=`+encodeURIComponent(e.club+` official website`),leagueProfile:`https://www.google.com/search?q=`+encodeURIComponent(e.league+` player profiles`)}}},Dt={Argentina:`ar`,Portugal:`pt`,Norway:`no`,France:`fr`,Egypt:`eg`,England:`gb`,Poland:`pl`,Brazil:`br`,Belgium:`be`,Spain:`es`,Netherlands:`nl`,Germany:`de`,Italy:`it`,Croatia:`hr`,Canada:`ca`,Scotland:`gb-sct`,Uruguay:`uy`,"South Korea":`kr`,Ecuador:`ec`,Morocco:`ma`,Slovenia:`si`,Switzerland:`ch`,Austria:`at`,Nigeria:`ng`,Colombia:`co`,Georgia:`ge`,Japan:`jp`,Sweden:`se`,Turkey:`tr`,"Burkina Faso":`bf`,Hungary:`hu`,Slovakia:`sk`};function Ot({imageUrl:e,fallbackUrls:t=[],alt:n,className:r}){let i=[e,...t].filter(Boolean),[a,o]=b.useState(0),[s,c]=b.useState(!1),l=i[a];return!l||s?(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,className:`player-silhouette-svg`,"aria-label":`Silhouette placeholder`,children:(0,x.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z`})}):(0,x.jsx)(`img`,{src:l,alt:n,className:r,onError:()=>{a+1<i.length?o(e=>e+1):c(!0)},loading:`lazy`})}function kt({matchItem:e,idx:t,language:n,formData:r,getFlagUrl:i,getCategoryComparison:a,openPlayerDetails:o}){let s=e.player,c=e.overallScore,l=e.categories,u=n===`en`?e.explanationEn:e.explanationVi,d=a(r,s,`technical`),f=a(r,s,`physical`),p=a(r,s,`defensive`),m=s.isGK?a(r,s,`goalkeeper`):null;return(0,x.jsxs)(`div`,{className:`player-scouting-card-premium clickable-card`,onClick:()=>o(e),title:n===`en`?`Click to view full player details`:`Nhấp để xem chi tiết cầu thủ`,children:[(0,x.jsxs)(`div`,{className:`premium-card-top`,children:[(0,x.jsxs)(`div`,{className:`fut-shield-avatar`,children:[(0,x.jsxs)(`span`,{className:`scout-rank-badge`,children:[`#`,t+1]}),(0,x.jsx)(`div`,{className:`fut-shield-glow`}),(0,x.jsx)(`div`,{className:`fut-shield-inner`,children:(0,x.jsx)(Ot,{imageUrl:s.imageUrl,fallbackUrls:s.imageFallbackUrls,alt:s.name,className:`player-fut-photo`})})]}),(0,x.jsxs)(`div`,{className:`player-meta-info-premium`,children:[(0,x.jsxs)(`div`,{className:`name-and-flag-row`,children:[(0,x.jsx)(`h4`,{className:`premium-player-name`,children:s.name}),(0,x.jsx)(`img`,{src:i(s.nationality),alt:s.nationality,className:`nation-flag`})]}),(0,x.jsxs)(`p`,{className:`premium-player-club-sub`,children:[(0,x.jsx)(`strong`,{children:s.club}),` • `,s.league]}),(0,x.jsxs)(`div`,{className:`player-biography-chips`,children:[(0,x.jsx)(`span`,{className:`bio-chip text-uppercase font-bold`,children:s.primaryPosition}),(0,x.jsxs)(`span`,{className:`bio-chip`,children:[s.age,` y/o`]}),(0,x.jsxs)(`span`,{className:`bio-chip`,children:[s.height,` cm`]}),(0,x.jsx)(`span`,{className:`bio-chip text-capitalize`,children:s.preferredFoot})]})]}),(0,x.jsxs)(`div`,{className:`svg-ring-wrapper`,children:[(0,x.jsxs)(`svg`,{className:`progress-ring`,width:`70`,height:`70`,children:[(0,x.jsx)(`circle`,{className:`progress-ring-bg`,stroke:`rgba(255,255,255,0.04)`,strokeWidth:`4.5`,fill:`transparent`,r:`28`,cx:`35`,cy:`35`}),(0,x.jsx)(`circle`,{className:`progress-ring-fill`,stroke:`var(--accent)`,strokeWidth:`4.5`,fill:`transparent`,r:`28`,cx:`35`,cy:`35`,strokeDasharray:`175.93`,strokeDashoffset:175.93-175.93*c/100,strokeLinecap:`round`})]}),(0,x.jsxs)(`div`,{className:`score-ring-content`,children:[(0,x.jsxs)(`span`,{className:`ring-score-val`,children:[c,`%`]}),(0,x.jsx)(`span`,{className:`ring-score-lbl`,children:n===`en`?`MATCH`:`KHỚP`})]})]})]}),(0,x.jsx)(`div`,{className:`match-explanation-box`,children:(0,x.jsxs)(`p`,{className:`explanation-paragraph`,children:[(0,x.jsx)(rt,{className:`spark-inline-icon`,size:13}),(0,x.jsx)(`span`,{children:u})]})}),(0,x.jsxs)(`div`,{className:`side-by-side-comparison-grid`,children:[(0,x.jsxs)(`div`,{className:`metric-compare-bar`,children:[(0,x.jsx)(`div`,{className:`bar-label`,children:n===`en`?`TECHNICAL SKILLS`:`KỸ NĂNG KỸ THUẬT`}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`You`:`Bạn`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill user-fill`,style:{width:`${d.user}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:d.user})]}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`Player`:`Cầu thủ`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill player-fill`,style:{width:`${d.player}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:d.player})]})]}),(0,x.jsxs)(`div`,{className:`metric-compare-bar`,children:[(0,x.jsx)(`div`,{className:`bar-label`,children:n===`en`?`PHYSICAL RATINGS`:`THÔNG SỐ THỂ CHẤT`}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`You`:`Bạn`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill user-fill`,style:{width:`${f.user}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:f.user})]}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`Player`:`Cầu thủ`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill player-fill`,style:{width:`${f.player}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:f.player})]})]}),!s.isGK&&(0,x.jsxs)(`div`,{className:`metric-compare-bar`,children:[(0,x.jsx)(`div`,{className:`bar-label`,children:n===`en`?`DEFENSIVE PROWESS`:`NĂNG LỰC PHÒNG NGỰ`}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`You`:`Bạn`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill user-fill`,style:{width:`${p.user}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:p.user})]}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`Player`:`Cầu thủ`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill player-fill`,style:{width:`${p.player}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:p.player})]})]}),s.isGK&&m&&(0,x.jsxs)(`div`,{className:`metric-compare-bar`,children:[(0,x.jsx)(`div`,{className:`bar-label`,children:n===`en`?`GOALKEEPING RATING`:`KỸ NĂNG THỦ MÔN`}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`You`:`Bạn`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill user-fill`,style:{width:`${m.user}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:m.user})]}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`Player`:`Cầu thủ`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill player-fill`,style:{width:`${m.player}%`}})}),(0,x.jsx)(`span`,{className:`bar-val`,children:m.player})]})]}),(0,x.jsxs)(`div`,{className:`metric-compare-bar`,children:[(0,x.jsx)(`div`,{className:`bar-label`,children:n===`en`?`TACTICS & STYLE MATCH`:`HỆ THỐNG & PHONG CÁCH`}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`Tactics`:`Chiến thuật`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill user-fill`,style:{width:`${l.tactical}%`}})}),(0,x.jsxs)(`span`,{className:`bar-val`,children:[l.tactical,`%`]})]}),(0,x.jsxs)(`div`,{className:`bar-row`,children:[(0,x.jsx)(`span`,{className:`bar-subject`,children:n===`en`?`Style`:`Lối đá`}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill player-fill`,style:{width:`${l.styles}%`}})}),(0,x.jsxs)(`span`,{className:`bar-val`,children:[l.styles,`%`]})]})]})]})]})}function At(){let{language:e,animations:t}=w(),{formData:n,matchResults:r,restartQuestionnaire:i}=xe(),a=k[e].phase3,o=k[e].questionnaire.basic,s=k[e].questionnaire.tactics,[c,l]=(0,b.useState)(5),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(null),[m,h]=(0,b.useState)({}),[g,_]=(0,b.useState)(!1),v=r?.matches||[],y=r?.durationMs||0,S=v.slice(0,30),C=S.slice(0,c),ee=t=>t==null||t===`Unavailable`?e===`en`?`Unavailable`:`Không khả dụng`:typeof t==`number`?t.toLocaleString():t,te=e=>o.positions[e]?.name||e,ne=e=>`https://flagcdn.com/w40/${(Dt[e]||`un`).toLowerCase()}.png`,re=(e,t,n)=>{let r=Object.keys(e[n]||{});if(r.length===0)return{user:50,player:50};let i=0,a=0;return r.forEach(r=>{i+=Number(e[n][r])||50,a+=Number(t[n][r])||50}),{user:Math.round(i/r.length),player:Math.round(a/r.length)}},ie=t=>{if(t.isGK)return[{label:e===`en`?`DIV`:`BAY NGƯỜI`,val:t.goalkeeper.diving},{label:e===`en`?`REF`:`PHẢN XẠ`,val:t.goalkeeper.reflexes},{label:e===`en`?`HAN`:`BẮT BÓNG`,val:t.goalkeeper.handling},{label:e===`en`?`POS`:`VỊ TRÍ`,val:t.goalkeeper.positioning},{label:e===`en`?`KIC`:`PHÁT BÓNG`,val:t.goalkeeper.kicking},{label:e===`en`?`1v1`:`ĐỐI MẶT`,val:t.goalkeeper.oneOnOne}];let n=Math.round((t.physical.acceleration+t.physical.sprintSpeed)/2),r=Math.round((t.technical.finishing+t.technical.shotPower+t.technical.longShots)/3),i=Math.round((t.technical.shortPassing+t.technical.longPassing+t.technical.vision)/3),a=Math.round((t.technical.dribbling+t.technical.ballControl+t.physical.agility)/3),o=Math.round((t.defensive.standingTackle+t.defensive.interceptions+t.defensive.defensiveAwareness)/3),s=Math.round((t.physical.strength+t.physical.stamina+t.physical.jumping)/3);return[{label:e===`en`?`PAC (Pace)`:`PAC (Tốc độ)`,val:n},{label:e===`en`?`SHO (Shoot)`:`SHO (Dứt điểm)`,val:r},{label:e===`en`?`PAS (Pass)`:`PAS (Chuyền)`,val:i},{label:e===`en`?`DRI (Dribble)`:`DRI (Rê bóng)`,val:a},{label:e===`en`?`DEF (Defend)`:`DEF (Phòng ngự)`,val:o},{label:e===`en`?`PHY (Physical)`:`PHY (Thể chất)`,val:s}]},ae=()=>{d(!0),setTimeout(()=>{l(e=>Math.min(e+5,S.length)),d(!1)},600)},oe=e=>{let t=e.player;if(m[t.id]){p({basic:t,score:e.overallScore,categories:e.categories,details:m[t.id]});return}_(!0),setTimeout(()=>{let n=j(t);h(e=>({...e,[t.id]:n})),p({basic:t,score:e.overallScore,categories:e.categories,details:n}),_(!1)},350)},T=()=>{p(null)};return(0,b.useEffect)(()=>(f?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[f]),(0,b.useEffect)(()=>{let e=e=>{e.key===`Escape`&&T()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,x.jsxs)(`div`,{className:`phase3-placeholder-container ${t===`off`?`instant`:``}`,children:[(0,x.jsx)(`div`,{className:`pitch-background`,children:(0,x.jsxs)(`div`,{className:`pitch-outline`,children:[(0,x.jsx)(`div`,{className:`penalty-area left`}),(0,x.jsx)(`div`,{className:`center-circle`}),(0,x.jsx)(`div`,{className:`penalty-area right`})]})}),(0,x.jsx)(`div`,{className:`container placeholder-content-inner`,children:(0,x.jsxs)(`div`,{className:`glass-card success-card scale-in`,children:[(0,x.jsx)(`div`,{className:`success-badge-wrapper pulse-slow`,children:(0,x.jsx)(ze,{size:62,className:`success-check-icon`})}),(0,x.jsx)(`h2`,{className:`success-title`,children:a.title}),(0,x.jsx)(`p`,{className:`success-subtitle`,children:a.subtitle}),(0,x.jsxs)(`div`,{className:`success-info-box`,children:[(0,x.jsx)(qe,{className:`info-icon`,size:20}),(0,x.jsx)(`p`,{className:`info-text`,children:a.infoText})]}),(0,x.jsxs)(`div`,{className:`profiling-bar`,children:[(0,x.jsxs)(`div`,{className:`profile-metric`,children:[(0,x.jsx)(Ue,{size:15,className:`metric-icon`}),(0,x.jsxs)(`span`,{children:[`DATABASE: `,(0,x.jsx)(`strong`,{children:`150+ Verified Footballers`})]})]}),(0,x.jsxs)(`div`,{className:`profile-metric`,children:[(0,x.jsx)(He,{size:15,className:`metric-icon`}),(0,x.jsxs)(`span`,{children:[`ALGORITHM: `,(0,x.jsx)(`strong`,{children:`Weighted Similarity Vector`})]})]}),(0,x.jsxs)(`div`,{className:`profile-metric`,children:[(0,x.jsx)(Be,{size:15,className:`metric-icon`}),(0,x.jsxs)(`span`,{children:[`LATENCY: `,(0,x.jsxs)(`strong`,{children:[y.toFixed(2),` ms`]})]})]})]}),(0,x.jsxs)(`div`,{className:`dashboard-grid`,children:[(0,x.jsxs)(`div`,{className:`dashboard-col dossier-col`,children:[(0,x.jsxs)(`h3`,{className:`dashboard-col-title`,children:[(0,x.jsx)(Ge,{size:18}),(0,x.jsx)(`span`,{children:a.dataSummary})]}),(0,x.jsxs)(`div`,{className:`scouting-report-card`,children:[(0,x.jsxs)(`div`,{className:`scouting-report-header`,children:[(0,x.jsx)(`div`,{className:`scouting-icon-wrap`,children:(0,x.jsx)(ct,{size:28})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{className:`scout-name`,children:n.basic.name}),(0,x.jsx)(`span`,{className:`scout-badge`,children:e===`en`?`LOCAL DOSSIER`:`HỒ SƠ NỘI BỘ`})]})]}),(0,x.jsxs)(`div`,{className:`scouting-section`,children:[(0,x.jsxs)(`h5`,{className:`section-title-label`,children:[(0,x.jsx)(ct,{size:13}),(0,x.jsx)(`span`,{children:e===`en`?`Personal Details`:`Thông tin cá nhân`})]}),(0,x.jsxs)(`div`,{className:`scout-grid-details`,children:[(0,x.jsxs)(`div`,{className:`scout-grid-item`,children:[(0,x.jsx)(`span`,{className:`scout-label`,children:o.age}),(0,x.jsxs)(`span`,{className:`scout-value`,children:[n.basic.age,` y/o`]})]}),(0,x.jsxs)(`div`,{className:`scout-grid-item`,children:[(0,x.jsx)(`span`,{className:`scout-label`,children:o.height}),(0,x.jsxs)(`span`,{className:`scout-value`,children:[n.basic.height,` cm`]})]}),(0,x.jsxs)(`div`,{className:`scout-grid-item`,children:[(0,x.jsx)(`span`,{className:`scout-label`,children:o.weight}),(0,x.jsxs)(`span`,{className:`scout-value`,children:[n.basic.weight,` kg`]})]}),(0,x.jsxs)(`div`,{className:`scout-grid-item`,children:[(0,x.jsx)(`span`,{className:`scout-label`,children:o.foot}),(0,x.jsx)(`span`,{className:`scout-value val-accent`,children:n.basic.preferredFoot===`left`?o.footLeft:n.basic.preferredFoot===`right`?o.footRight:o.footBoth})]})]})]}),(0,x.jsxs)(`div`,{className:`scouting-section`,children:[(0,x.jsxs)(`h5`,{className:`section-title-label`,children:[(0,x.jsx)(Me,{size:13}),(0,x.jsx)(`span`,{children:e===`en`?`Football Identity`:`Thông tin bóng đá`})]}),(0,x.jsxs)(`div`,{className:`scouting-identity-list`,children:[(0,x.jsxs)(`div`,{className:`identity-row`,children:[(0,x.jsx)(`span`,{className:`scout-label`,children:o.position}),(0,x.jsx)(`span`,{className:`position-chip primary-chip`,children:te(n.basic.primaryPosition)})]}),(0,x.jsxs)(`div`,{className:`identity-row`,children:[(0,x.jsx)(`span`,{className:`scout-label`,children:e===`en`?`System`:`Hệ thống`}),(0,x.jsx)(`span`,{className:`value-chip font-bold`,children:s.systems[n.tactics.system]||n.tactics.system})]}),(0,x.jsxs)(`div`,{className:`identity-row`,children:[(0,x.jsx)(`span`,{className:`scout-label`,children:e===`en`?`Tactical Role`:`Vai trò`}),(0,x.jsx)(`span`,{className:`value-chip blue-chip`,children:s.roles[n.tactics.role]||n.tactics.role})]})]})]}),(0,x.jsxs)(`div`,{className:`scouting-section`,children:[(0,x.jsxs)(`h5`,{className:`section-title-label`,children:[(0,x.jsx)(Ve,{size:13}),(0,x.jsx)(`span`,{children:e===`en`?`Preferred Playing Styles`:`Phong cách chơi bóng`})]}),(0,x.jsx)(`div`,{className:`style-chips-flex`,children:n.styles.length>0?n.styles.map(t=>{let n=k[e].questionnaire.style[t];return(0,x.jsx)(`span`,{className:`style-chip`,children:n},t)}):(0,x.jsx)(`span`,{className:`no-styles-selected`,children:e===`en`?`None selected`:`Không có`})})]})]})]}),(0,x.jsxs)(`div`,{className:`dashboard-col matches-col`,children:[(0,x.jsxs)(`h3`,{className:`dashboard-col-title`,children:[(0,x.jsx)(rt,{size:18,className:`title-glow-icon`}),(0,x.jsx)(`span`,{children:e===`en`?`Similarity Analysis Matches`:`Báo cáo tương đồng chi tiết`})]}),(0,x.jsx)(`div`,{className:`matches-list`,children:C.length>0?C.map((t,r)=>(0,x.jsx)(kt,{matchItem:t,idx:r,language:e,formData:n,getFlagUrl:ne,getCategoryComparison:re,openPlayerDetails:oe},t.player.id)):(0,x.jsx)(`div`,{className:`no-matches-msg`,children:e===`en`?`No matching players found.`:`Không tìm thấy cầu thủ phù hợp.`})}),(0,x.jsx)(`div`,{className:`load-more-wrapper`,children:(0,x.jsx)(`button`,{className:`load-more-premium-btn ${c>=S.length?`disabled`:``} ${u?`loading`:``}`,onClick:ae,disabled:c>=S.length||u,"aria-label":`Load more matched players`,children:u?(0,x.jsx)(`div`,{className:`btn-spinner`}):c>=S.length?(0,x.jsx)(`span`,{children:e===`en`?`All Matches Loaded (Max 30)`:`Đã tải hết cầu thủ (Tối đa 30)`}):(0,x.jsx)(`span`,{children:e===`en`?`Show More Players (${S.length-c} left)`:`Hiển thị thêm cầu thủ (còn ${S.length-c})`})})})]})]}),(0,x.jsx)(`div`,{className:`actions-wrapper`,children:(0,x.jsxs)(`button`,{className:`btn-primary restart-btn`,onClick:i,children:[(0,x.jsx)(Qe,{size:18}),(0,x.jsx)(`span`,{children:a.btnRestart})]})})]})}),g&&(0,wt.createPortal)((0,x.jsx)(`div`,{className:`modal-loading-overlay`,children:(0,x.jsxs)(`div`,{className:`loading-card-glow`,children:[(0,x.jsx)(`div`,{className:`scanner-line`}),(0,x.jsx)(rt,{className:`loading-spin-icon`,size:40}),(0,x.jsx)(`p`,{children:e===`en`?`Syncing scouting database...`:`Đang truy xuất dữ liệu trình sát...`})]})}),document.body),f&&(0,wt.createPortal)((0,x.jsx)(`div`,{className:`player-modal-backdrop`,onClick:T,children:(0,x.jsxs)(`div`,{className:`player-modal-content-wrapper scale-in`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-top-banner`,children:[(0,x.jsx)(`div`,{className:`modal-pitch-lines`}),(0,x.jsx)(`button`,{className:`modal-close-x-btn`,onClick:T,"aria-label":`Close modal`,children:(0,x.jsx)(dt,{size:20})}),(0,x.jsxs)(`div`,{className:`banner-primary-details`,children:[(0,x.jsxs)(`div`,{className:`modal-avatar-fut-card`,children:[(0,x.jsx)(`div`,{className:`card-badge-rating`,children:f.score}),(0,x.jsx)(`div`,{className:`card-badge-pos`,children:f.basic.primaryPosition}),(0,x.jsx)(`div`,{className:`modal-card-glow`}),(0,x.jsx)(`div`,{className:`avatar-card-inner`,children:(0,x.jsx)(Ot,{imageUrl:f.basic.imageUrl,fallbackUrls:f.basic.imageFallbackUrls,alt:f.basic.name,className:`player-modal-fut-photo`})})]}),(0,x.jsxs)(`div`,{className:`banner-text-details`,children:[(0,x.jsxs)(`div`,{className:`modal-name-flag-row`,children:[(0,x.jsx)(`h2`,{className:`modal-player-fullname`,children:f.details.name}),(0,x.jsx)(`img`,{src:ne(f.details.nationality),alt:f.details.nationality,className:`modal-nation-flag-img`})]}),(0,x.jsxs)(`p`,{className:`modal-club-league-subtitle`,children:[(0,x.jsx)(`strong`,{children:f.details.club}),` • `,f.details.league]}),(0,x.jsxs)(`div`,{className:`modal-similarity-percent-overlay`,children:[(0,x.jsx)(`span`,{className:`sim-lbl`,children:e===`en`?`ENGINE MATCH SCORE`:`ĐỘ TƯƠNG ĐỒNG THUẬT TOÁN`}),(0,x.jsxs)(`h3`,{className:`sim-val`,children:[`⭕ `,f.score,`%`]})]})]})]})]}),(0,x.jsxs)(`div`,{className:`modal-scroll-body`,children:[(0,x.jsxs)(`div`,{className:`modal-body-grid`,children:[(0,x.jsxs)(`div`,{className:`modal-body-col col-stats`,children:[(0,x.jsxs)(`div`,{className:`modal-section-card`,children:[(0,x.jsxs)(`h4`,{className:`card-section-title`,children:[(0,x.jsx)(rt,{size:16,className:`title-glow-icon`}),(0,x.jsx)(`span`,{children:e===`en`?`Detailed Similarity Breakdown`:`Chi tiết độ tương đồng`})]}),(0,x.jsxs)(`div`,{className:`similarity-breakdown-list`,children:[(0,x.jsxs)(`div`,{className:`breakdown-item`,children:[(0,x.jsx)(`span`,{className:`breakdown-lbl font-bold`,children:e===`en`?`Overall Match Score`:`Độ khớp tổng thể`}),(0,x.jsx)(`div`,{className:`breakdown-bar-wrap`,children:(0,x.jsx)(`div`,{className:`breakdown-bar-fill overall-fill`,style:{width:`${f.score}%`}})}),(0,x.jsxs)(`span`,{className:`breakdown-val font-bold color-accent`,children:[f.score,`%`]})]}),f.categories.technical!==void 0&&(0,x.jsxs)(`div`,{className:`breakdown-item`,children:[(0,x.jsx)(`span`,{className:`breakdown-lbl`,children:e===`en`?`Technical Similarity`:`Tương đồng kỹ thuật`}),(0,x.jsx)(`div`,{className:`breakdown-bar-wrap`,children:(0,x.jsx)(`div`,{className:`breakdown-bar-fill`,style:{width:`${f.categories.technical}%`}})}),(0,x.jsxs)(`span`,{className:`breakdown-val`,children:[f.categories.technical,`%`]})]}),f.categories.physical!==void 0&&(0,x.jsxs)(`div`,{className:`breakdown-item`,children:[(0,x.jsx)(`span`,{className:`breakdown-lbl`,children:e===`en`?`Physical Similarity`:`Tương đồng thể chất`}),(0,x.jsx)(`div`,{className:`breakdown-bar-wrap`,children:(0,x.jsx)(`div`,{className:`breakdown-bar-fill`,style:{width:`${f.categories.physical}%`}})}),(0,x.jsxs)(`span`,{className:`breakdown-val`,children:[f.categories.physical,`%`]})]}),f.categories.tactical!==void 0&&(0,x.jsxs)(`div`,{className:`breakdown-item`,children:[(0,x.jsx)(`span`,{className:`breakdown-lbl`,children:e===`en`?`Tactical Similarity`:`Tương đồng chiến thuật`}),(0,x.jsx)(`div`,{className:`breakdown-bar-wrap`,children:(0,x.jsx)(`div`,{className:`breakdown-bar-fill`,style:{width:`${f.categories.tactical}%`}})}),(0,x.jsxs)(`span`,{className:`breakdown-val`,children:[f.categories.tactical,`%`]})]}),f.categories.styles!==void 0&&(0,x.jsxs)(`div`,{className:`breakdown-item`,children:[(0,x.jsx)(`span`,{className:`breakdown-lbl`,children:e===`en`?`Style & Mentals`:`Lối chơi & Tâm lý`}),(0,x.jsx)(`div`,{className:`breakdown-bar-wrap`,children:(0,x.jsx)(`div`,{className:`breakdown-bar-fill`,style:{width:`${f.categories.styles}%`}})}),(0,x.jsxs)(`span`,{className:`breakdown-val`,children:[f.categories.styles,`%`]})]}),f.categories.position!==void 0&&(0,x.jsxs)(`div`,{className:`breakdown-item`,children:[(0,x.jsx)(`span`,{className:`breakdown-lbl`,children:e===`en`?`Position Compatibility`:`Độ tương thích vị trí`}),(0,x.jsx)(`div`,{className:`breakdown-bar-wrap`,children:(0,x.jsx)(`div`,{className:`breakdown-bar-fill`,style:{width:`${f.categories.position}%`}})}),(0,x.jsxs)(`span`,{className:`breakdown-val`,children:[f.categories.position,`%`]})]}),f.categories.foot!==void 0&&(0,x.jsxs)(`div`,{className:`breakdown-item`,children:[(0,x.jsx)(`span`,{className:`breakdown-lbl`,children:e===`en`?`Preferred Foot Match`:`Độ khớp chân thuận`}),(0,x.jsx)(`div`,{className:`breakdown-bar-wrap`,children:(0,x.jsx)(`div`,{className:`breakdown-bar-fill`,style:{width:`${f.categories.foot}%`}})}),(0,x.jsxs)(`span`,{className:`breakdown-val`,children:[f.categories.foot,`%`]})]})]})]}),(0,x.jsxs)(`div`,{className:`modal-section-card`,children:[(0,x.jsxs)(`h4`,{className:`card-section-title`,children:[(0,x.jsx)(ot,{size:16}),(0,x.jsx)(`span`,{children:e===`en`?`Scouting Attribute Ratings`:`Xếp hạng chỉ số trình sát`})]}),(0,x.jsx)(`div`,{className:`grouped-ratings-layout`,children:ie(f.basic).map(e=>(0,x.jsxs)(`div`,{className:`grouped-rating-bar-item`,children:[(0,x.jsxs)(`div`,{className:`bar-header-info`,children:[(0,x.jsx)(`span`,{className:`bar-attr-name font-bold`,children:e.label}),(0,x.jsx)(`span`,{className:`bar-attr-score font-bold color-accent`,children:e.val})]}),(0,x.jsx)(`div`,{className:`modal-rating-track`,children:(0,x.jsx)(`div`,{className:`modal-rating-fill ${e.val>=80?`fill-high`:e.val>=60?`fill-medium`:`fill-low`}`,style:{width:`${e.val}%`}})})]},e.label))})]})]}),(0,x.jsxs)(`div`,{className:`modal-body-col col-bio`,children:[(0,x.jsxs)(`div`,{className:`modal-section-card`,children:[(0,x.jsxs)(`h4`,{className:`card-section-title`,children:[(0,x.jsx)(ct,{size:16}),(0,x.jsx)(`span`,{children:e===`en`?`Personal & Career Details`:`Thông tin cá nhân & Sự nghiệp`})]}),(0,x.jsxs)(`div`,{className:`bio-details-scout-list`,children:[(0,x.jsxs)(`div`,{className:`bio-scout-row`,children:[(0,x.jsx)(`span`,{className:`bio-scout-lbl`,children:e===`en`?`Date of Birth`:`Ngày sinh`}),(0,x.jsx)(`span`,{className:`bio-scout-val`,children:f.basic.dob||`Unavailable`})]}),(0,x.jsxs)(`div`,{className:`bio-scout-row`,children:[(0,x.jsx)(`span`,{className:`bio-scout-lbl`,children:e===`en`?`Age`:`Tuổi`}),(0,x.jsx)(`span`,{className:`bio-scout-val`,children:f.details.age})]}),(0,x.jsxs)(`div`,{className:`bio-scout-row`,children:[(0,x.jsx)(`span`,{className:`bio-scout-lbl`,children:e===`en`?`Height / Weight`:`Chiều cao / Cân nặng`}),(0,x.jsxs)(`span`,{className:`bio-scout-val`,children:[f.details.height,` cm / `,f.details.weight,` kg`]})]}),(0,x.jsxs)(`div`,{className:`bio-scout-row`,children:[(0,x.jsx)(`span`,{className:`bio-scout-lbl`,children:e===`en`?`Preferred Foot`:`Chân thuận`}),(0,x.jsx)(`span`,{className:`bio-scout-val text-capitalize color-accent`,children:f.details.preferredFoot})]}),(0,x.jsxs)(`div`,{className:`bio-scout-row`,children:[(0,x.jsx)(`span`,{className:`bio-scout-lbl`,children:e===`en`?`Shirt Number`:`Số áo`}),(0,x.jsx)(`span`,{className:`bio-scout-val font-bold`,children:f.details.shirtNumber===`Unavailable`?e===`en`?`Unavailable`:`Không có`:`#${f.details.shirtNumber}`})]}),(0,x.jsxs)(`div`,{className:`bio-scout-row`,children:[(0,x.jsx)(`span`,{className:`bio-scout-lbl`,children:e===`en`?`Years Active`:`Năm hoạt động`}),(0,x.jsx)(`span`,{className:`bio-scout-val`,children:f.details.career.yearsActive===`Unavailable`?e===`en`?`Unavailable`:`Không có`:f.details.career.yearsActive})]}),(0,x.jsxs)(`div`,{className:`bio-scout-row`,children:[(0,x.jsx)(`span`,{className:`bio-scout-lbl`,children:e===`en`?`Previous Clubs`:`Câu lạc bộ cũ`}),(0,x.jsx)(`span`,{className:`bio-scout-val text-right`,children:f.details.career.previousClubs[0]===`Unavailable`?e===`en`?`Unavailable`:`Không có`:f.details.career.previousClubs.join(`, `)})]})]})]}),(0,x.jsxs)(`div`,{className:`modal-section-card`,children:[(0,x.jsxs)(`h4`,{className:`card-section-title`,children:[(0,x.jsx)(Be,{size:16}),(0,x.jsx)(`span`,{children:e===`en`?`Verified Career Statistics`:`Thống kê sự nghiệp đã xác minh`})]}),(0,x.jsxs)(`div`,{className:`statistics-grid-list`,children:[(0,x.jsxs)(`div`,{className:`stat-grid-box`,children:[(0,x.jsx)(`span`,{className:`stat-box-lbl`,children:e===`en`?`Appearances`:`Số trận`}),(0,x.jsx)(`span`,{className:`stat-box-val`,children:ee(f.details.stats.appearances)})]}),(0,x.jsxs)(`div`,{className:`stat-grid-box`,children:[(0,x.jsx)(`span`,{className:`stat-box-lbl`,children:e===`en`?`Goals`:`Bàn thắng`}),(0,x.jsx)(`span`,{className:`stat-box-val`,children:ee(f.details.stats.goals)})]}),(0,x.jsxs)(`div`,{className:`stat-grid-box`,children:[(0,x.jsx)(`span`,{className:`stat-box-lbl`,children:e===`en`?`Assists`:`Kiến tạo`}),(0,x.jsx)(`span`,{className:`stat-box-val`,children:ee(f.details.stats.assists)})]}),f.basic.isGK&&(0,x.jsxs)(`div`,{className:`stat-grid-box`,children:[(0,x.jsx)(`span`,{className:`stat-box-lbl`,children:e===`en`?`Clean Sheets`:`Giữ sạch lưới`}),(0,x.jsx)(`span`,{className:`stat-box-val`,children:ee(f.details.stats.cleanSheets)})]}),(0,x.jsxs)(`div`,{className:`stat-grid-box`,children:[(0,x.jsx)(`span`,{className:`stat-box-lbl`,children:e===`en`?`Minutes Played`:`Số phút thi đấu`}),(0,x.jsx)(`span`,{className:`stat-box-val`,children:ee(f.details.stats.minutesPlayed)})]}),(0,x.jsxs)(`div`,{className:`stat-grid-box`,children:[(0,x.jsx)(`span`,{className:`stat-box-lbl`,children:e===`en`?`Int. Appearances`:`Trận quốc tế`}),(0,x.jsx)(`span`,{className:`stat-box-val`,children:ee(f.details.stats.internationalApps)})]}),(0,x.jsxs)(`div`,{className:`stat-grid-box`,children:[(0,x.jsx)(`span`,{className:`stat-box-lbl`,children:e===`en`?`Int. Goals`:`Bàn quốc tế`}),(0,x.jsx)(`span`,{className:`stat-box-val`,children:ee(f.details.stats.internationalGoals)})]})]})]}),(0,x.jsxs)(`div`,{className:`modal-section-card`,children:[(0,x.jsxs)(`h4`,{className:`card-section-title`,children:[(0,x.jsx)(it,{size:16,className:`title-glow-icon`}),(0,x.jsx)(`span`,{children:e===`en`?`Major Honours & Achievements`:`Danh hiệu & Thành tích chính`})]}),(0,x.jsx)(`ul`,{className:`achievements-bullet-list`,children:f.details.achievements[0]===`Unavailable`?(0,x.jsx)(`span`,{className:`no-styles-selected`,children:e===`en`?`Unavailable`:`Không có`}):f.details.achievements.map((e,t)=>(0,x.jsxs)(`li`,{className:`achievement-li-item`,children:[(0,x.jsx)(Me,{size:14,className:`ach-bullet-icon`}),(0,x.jsx)(`span`,{children:e})]},t))})]})]})]}),(0,x.jsxs)(`div`,{className:`biography-card-section modal-section-card`,children:[(0,x.jsxs)(`h4`,{className:`card-section-title`,children:[(0,x.jsx)(Ve,{size:16}),(0,x.jsx)(`span`,{children:e===`en`?`Verified Player Biography`:`Tiểu sử cầu thủ đã xác minh`})]}),(0,x.jsx)(`div`,{className:`biography-paragraphs`,children:f.details.biography.map((e,t)=>(0,x.jsx)(`p`,{className:`biography-p`,children:e},t))})]}),(0,x.jsxs)(`div`,{className:`external-sources-section`,children:[(0,x.jsxs)(`h5`,{className:`sources-title-label`,children:[(0,x.jsx)(et,{size:12}),(0,x.jsx)(`span`,{children:e===`en`?`VERIFIED EXTERNAL REFERENCES`:`NGUỒN THAM KHẢO ĐÃ XÁC MINH`})]}),(0,x.jsxs)(`div`,{className:`sources-links-flex`,children:[(0,x.jsxs)(`a`,{href:f.details.externalLinks.wikipedia,target:`_blank`,rel:`noopener noreferrer`,className:`external-source-link`,children:[(0,x.jsx)(`span`,{children:`Wikipedia`}),(0,x.jsx)(We,{size:12})]}),(0,x.jsxs)(`a`,{href:f.details.externalLinks.clubWebsite,target:`_blank`,rel:`noopener noreferrer`,className:`external-source-link`,children:[(0,x.jsx)(`span`,{children:e===`en`?`Official Club Profile`:`Hồ sơ câu lạc bộ`}),(0,x.jsx)(We,{size:12})]}),(0,x.jsxs)(`a`,{href:f.details.externalLinks.leagueProfile,target:`_blank`,rel:`noopener noreferrer`,className:`external-source-link`,children:[(0,x.jsx)(`span`,{children:e===`en`?`League Statistics`:`Thống kê giải đấu`}),(0,x.jsx)(We,{size:12})]})]})]})]})]})}),document.body),(0,x.jsx)(`style`,{children:`
        .phase3-placeholder-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 0 80px 0;
          position: relative;
          z-index: 5;
          overflow: hidden;
          background: radial-gradient(circle at center, #0e1610 0%, #06090c 100%);
        }

        /* Tactical Pitch BG overlay styling */
        .pitch-background {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          pointer-events: none;
          z-index: 1;
        }

        .pitch-outline {
          position: absolute;
          inset: 40px;
          border: 2px solid #fff;
          border-radius: 10px;
        }

        .pitch-outline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #fff;
          transform: translateX(-50%);
        }

        .center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          border: 2px solid #fff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .penalty-area {
          position: absolute;
          top: 50%;
          width: 140px;
          height: 320px;
          border: 2px solid #fff;
          transform: translateY(-50%);
        }

        .penalty-area.left {
          left: 0;
          border-left: none;
        }

        .penalty-area.right {
          right: 0;
          border-right: none;
        }

        .placeholder-content-inner {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 1200px !important;
          z-index: 2;
        }

        .success-card {
          width: 100%;
          max-width: 1100px;
          padding: 55px 45px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          border-radius: var(--border-radius-lg);
          background: rgba(8, 12, 18, 0.65);
          border: 1px solid rgba(var(--accent-rgb), 0.22);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(var(--accent-rgb), 0.08);
          backdrop-filter: blur(20px);
        }

        .success-badge-wrapper {
          color: var(--accent);
          filter: drop-shadow(0 0 20px var(--accent-glow-strong));
          margin-bottom: 2px;
        }

        .success-title {
          font-family: var(--font-heading);
          font-size: 2.35rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary) 50%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .success-subtitle {
          color: var(--text-secondary);
          font-size: 1.15rem;
          max-width: 640px;
          line-height: 1.6;
        }

        .success-info-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(16, 26, 36, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 18px 22px;
          border-radius: var(--border-radius-sm);
          text-align: left;
          width: 100%;
        }

        .info-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
          filter: drop-shadow(0 0 5px rgba(var(--accent-rgb), 0.3));
        }

        .info-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Profiling bar latency metrics */
        .profiling-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 10px 24px;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          color: var(--text-muted);
          width: fit-content;
        }

        .profile-metric {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .metric-icon {
          color: var(--accent);
        }

        /* Dashboard grid */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 36% 64%;
          gap: 36px;
          width: 100%;
          margin-top: 10px;
          text-align: left;
        }

        .dashboard-col {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .dashboard-col-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .title-glow-icon {
          color: var(--accent);
          filter: drop-shadow(0 0 6px rgba(var(--accent-rgb), 0.6));
        }

        /* Dossier styling left card */
        .scouting-report-card {
          background: rgba(14, 20, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--border-radius-md);
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: inset 0 2px 10px rgba(255,255,255,0.01);
        }

        .scouting-report-header {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 16px;
        }

        .scouting-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15) 0%, rgba(var(--accent-rgb), 0.03) 100%);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          filter: drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.2));
        }

        .scout-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .scout-badge {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }

        .scouting-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .section-title-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .scout-grid-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .scout-grid-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          padding: 8px 12px;
        }

        .scout-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .scout-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .val-accent {
          color: var(--accent);
        }

        .scouting-identity-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .identity-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.15);
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.02);
        }

        .position-chip {
          background: var(--accent);
          color: #080c12;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 2px 10px;
          border-radius: 4px;
        }

        .value-chip {
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .blue-chip {
          color: var(--accent-blue);
        }

        .style-chips-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .style-chip {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: var(--text-secondary);
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: var(--border-radius-full);
          transition: background var(--transition-fast);
        }

        .style-chip:hover {
          background: rgba(255,255,255,0.08);
          color: var(--text-primary);
        }

        .no-styles-selected {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: italic;
        }

        /* Matches List styling */
        .matches-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
          max-height: 750px;
          overflow-y: auto;
          padding-right: 8px;
          align-content: start;
        }

        .matches-list::-webkit-scrollbar {
          width: 5px;
        }
        .matches-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .matches-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .matches-list::-webkit-scrollbar-thumb:hover {
          background: var(--accent);
        }

        /* PREMIUM SCOUTING PLAYER CARD */
        .player-scouting-card-premium {
          background: linear-gradient(180deg, rgba(16, 22, 32, 0.5) 0%, rgba(8, 12, 18, 0.5) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--border-radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          height: 480px; /* Fixed height for 100% visual consistency! */
          box-sizing: border-box;
        }

        .player-fut-photo {
          width: 90%;
          height: 90%;
          object-fit: contain;
          transform: translateY(4px);
        }

        .player-modal-fut-photo {
          width: 92%;
          height: 92%;
          object-fit: contain;
          transform: translateY(6px);
        }

        .player-silhouette-svg {
          width: 70%;
          height: 70%;
          color: rgba(255, 255, 255, 0.25);
          transform: translateY(4px);
        }

        /* Similarity breakdown styles */
        .similarity-breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .breakdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.82rem;
        }

        .breakdown-lbl {
          width: 140px;
          color: var(--text-secondary);
        }

        .breakdown-bar-wrap {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          overflow: hidden;
        }

        .breakdown-bar-fill {
          height: 100%;
          background: var(--accent-blue);
          border-radius: 10px;
        }

        .breakdown-bar-fill.overall-fill {
          background: var(--accent);
          box-shadow: 0 0 5px rgba(var(--accent-rgb), 0.3);
        }

        .breakdown-val {
          width: 40px;
          text-align: right;
          color: var(--text-primary);
        }

        .player-scouting-card-premium.clickable-card {
          cursor: pointer;
        }

        .player-scouting-card-premium.clickable-card:hover {
          border-color: rgba(var(--accent-rgb), 0.35);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 15px rgba(var(--accent-rgb), 0.05);
          background: linear-gradient(180deg, rgba(16, 22, 32, 0.6) 0%, rgba(8, 12, 18, 0.6) 100%);
        }

        .player-scouting-card-premium.clickable-card:active {
          transform: translateY(0);
        }

        .premium-card-top {
          display: flex;
          align-items: center;
          gap: 18px;
          position: relative;
          z-index: 2;
        }

        /* FUT Shield Avatar */
        .fut-shield-avatar {
          width: 60px;
          height: 74px;
          position: relative;
          flex-shrink: 0;
        }

        .scout-rank-badge {
          position: absolute;
          top: -8px;
          left: -8px;
          background: var(--accent);
          color: #07090e;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.75rem;
          padding: 2px 7px;
          border-radius: var(--border-radius-full);
          box-shadow: 0 3px 6px rgba(0,0,0,0.4);
          z-index: 5;
        }

        .fut-shield-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent) 0%, transparent 100%);
          opacity: 0.15;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          filter: blur(2px);
        }

        .fut-shield-inner {
          position: absolute;
          inset: 1px;
          background: rgba(20, 28, 40, 0.95);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .player-avatar-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          text-shadow: 0 0 10px rgba(255,255,255,0.2);
        }

        .player-meta-info-premium {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .name-and-flag-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .premium-player-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .nation-flag {
          width: 22px;
          height: 15px;
          object-fit: cover;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .premium-player-club-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .player-biography-chips {
          display: flex;
          gap: 6px;
          margin-top: 4px;
        }

        .bio-chip {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.05);
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* SVG percentage progress ring */
        .svg-ring-wrapper {
          position: relative;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .progress-ring {
          transform: rotate(-90deg);
        }

        .progress-ring-bg {
          stroke: rgba(255, 255, 255, 0.04);
        }

        .progress-ring-fill {
          filter: drop-shadow(0 0 4px rgba(var(--accent-rgb), 0.4));
        }

        .score-ring-content {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          inset: 0;
        }

        .ring-score-val {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.05rem;
          color: var(--accent);
          text-shadow: 0 0 10px var(--accent-glow);
          line-height: 1;
        }

        .ring-score-lbl {
          font-size: 0.6rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          margin-top: 1px;
        }

        /* MATCH EXPLANATION BOX */
        .match-explanation-box {
          background: rgba(var(--accent-rgb), 0.04);
          border-left: 3px solid var(--accent);
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
        }

        .explanation-paragraph {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .explanation-paragraph span {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .spark-inline-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 3px;
          filter: drop-shadow(0 0 3px rgba(var(--accent-rgb), 0.4));
        }

        /* SIDE BY SIDE COMPARISON */
        .side-by-side-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 24px;
          border-top: 1px dashed rgba(255,255,255,0.06);
          padding-top: 16px;
        }

        .metric-compare-bar {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bar-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .bar-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
        }

        .bar-subject {
          width: 48px;
          color: var(--text-secondary);
        }

        .bar-track {
          flex: 1;
          height: 5px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 10px;
        }

        .bar-fill.user-fill {
          background: var(--accent-blue);
        }

        .bar-fill.player-fill {
          background: var(--accent);
        }

        .bar-val {
          font-weight: 700;
          color: var(--text-primary);
          width: 25px;
          text-align: right;
        }

        /* Load More Premium Button */
        .load-more-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 12px;
        }

        .load-more-premium-btn {
          width: 100%;
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12) 0%, rgba(var(--accent-rgb), 0.03) 100%);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          color: var(--accent);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 14px 28px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all var(--transition-fast);
          backdrop-filter: blur(5px);
          letter-spacing: 0.02em;
        }

        .load-more-premium-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.22) 0%, rgba(var(--accent-rgb), 0.08) 100%);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(var(--accent-rgb), 0.15);
          border-color: rgba(var(--accent-rgb), 0.45);
        }

        .load-more-premium-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .load-more-premium-btn.disabled,
        .load-more-premium-btn:disabled {
          background: rgba(255,255,255,0.02);
          border-color: rgba(255,255,255,0.06);
          color: var(--text-muted);
          cursor: not-allowed;
        }

        .btn-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(var(--accent-rgb), 0.2);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        /* Initial clicked player spinner overlay */
        .modal-loading-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(5, 7, 10, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-card-glow {
          background: rgba(14, 20, 30, 0.9);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          border-radius: var(--border-radius-md);
          padding: 35px 50px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .scanner-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          animation: scan 1.8s ease-in-out infinite;
        }

        .loading-spin-icon {
          color: var(--accent);
          animation: pulse 1s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.6));
        }

        .loading-card-glow p {
          font-family: var(--font-heading);
          color: var(--text-secondary);
          font-size: 0.9rem;
          letter-spacing: 0.05em;
        }

        /* PREMIUM PLAYER DETAILS MODAL STYLING */
        .player-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 20px;
        }

        .player-modal-content-wrapper {
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          background: rgba(10, 14, 22, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(var(--accent-rgb), 0.05);
        }

        .modal-top-banner {
          background: linear-gradient(135deg, #0e1d14 0%, #070b0e 100%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 35px 40px;
          position: relative;
        }

        .modal-pitch-lines {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          pointer-events: none;
          background-image: radial-gradient(circle at center, transparent 70%, #fff 71%);
          background-size: 200px 200px;
          background-position: center;
        }

        .modal-close-x-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all var(--transition-fast);
        }

        .modal-close-x-btn:hover {
          background: rgba(255,255,255,0.08);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .banner-primary-details {
          display: flex;
          align-items: center;
          gap: 28px;
          position: relative;
          z-index: 2;
        }

        /* Modal FUT Avatar Card design */
        .modal-avatar-fut-card {
          width: 90px;
          height: 110px;
          background: linear-gradient(180deg, #101c13 0%, #080c10 100%);
          border: 1.5px solid rgba(var(--accent-rgb), 0.35);
          clip-path: polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%);
          position: relative;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        .card-badge-rating {
          position: absolute;
          top: 14px;
          left: 12px;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.95rem;
          color: var(--accent);
          line-height: 1;
        }

        .card-badge-pos {
          position: absolute;
          top: 26px;
          left: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .modal-card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(var(--accent-rgb), 0.25) 0%, transparent 80%);
          pointer-events: none;
        }

        .avatar-card-inner {
          position: absolute;
          inset: 4px;
          background: rgba(14,20,30,0.95);
          clip-path: polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-initials-txt {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.65rem;
          color: var(--text-primary);
          text-shadow: 0 0 12px rgba(var(--accent-rgb), 0.4);
        }

        .banner-text-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-name-flag-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .modal-player-fullname {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .modal-nation-flag-img {
          width: 28px;
          height: 19px;
          object-fit: cover;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .modal-club-league-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .modal-similarity-percent-overlay {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-top: 4px;
        }

        .sim-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .sim-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--accent);
          text-shadow: 0 0 8px rgba(var(--accent-rgb), 0.2);
        }

        /* Modal scrollable content body */
        .modal-scroll-body {
          flex: 1;
          overflow-y: auto;
          padding: 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          background: #080c10;
        }

        .modal-scroll-body::-webkit-scrollbar {
          width: 5px;
        }
        .modal-scroll-body::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .modal-body-col {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .modal-section-card {
          background: rgba(14, 20, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .card-section-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 10px;
        }

        /* Grouped Ratings */
        .grouped-ratings-layout {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .grouped-rating-bar-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bar-header-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
        }

        .bar-attr-name {
          color: var(--text-secondary);
        }

        .bar-attr-score {
          font-weight: 800;
        }

        .color-accent {
          color: var(--accent);
        }

        .modal-rating-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          overflow: hidden;
        }

        .modal-rating-fill {
          height: 100%;
          border-radius: 10px;
          background: var(--accent);
        }

        .modal-rating-fill.fill-high {
          background: var(--accent);
          box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.3);
        }

        .modal-rating-fill.fill-medium {
          background: var(--accent-blue);
        }

        .modal-rating-fill.fill-low {
          background: #e74c3c;
        }

        /* Career statistics boxes */
        .statistics-grid-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .stat-grid-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255,255,255,0.02);
          border-radius: 6px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          text-align: center;
        }

        .stat-box-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .stat-box-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        /* Personal details row list */
        .bio-details-scout-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bio-scout-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.2);
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.02);
          font-size: 0.82rem;
        }

        .bio-scout-lbl {
          color: var(--text-muted);
        }

        .bio-scout-val {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Major Honours & Achievements */
        .achievements-bullet-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .achievement-li-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .ach-bullet-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
          filter: drop-shadow(0 0 2px rgba(var(--accent-rgb), 0.3));
        }

        /* Biography Section */
        .biography-card-section {
          gap: 14px;
        }

        .biography-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .biography-p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          text-indent: 14px;
        }

        /* External Sources references */
        .external-sources-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 20px;
        }

        .sources-title-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sources-links-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .external-source-link {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          font-size: 0.78rem;
          padding: 6px 14px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .external-source-link:hover {
          background: rgba(var(--accent-rgb), 0.08);
          border-color: rgba(var(--accent-rgb), 0.35);
          color: var(--accent);
        }

        /* Animations */
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 992px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .success-card {
            padding: 40px 24px;
          }
          .modal-body-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .success-title {
            font-size: 1.8rem;
          }
          .scout-grid-details {
            grid-template-columns: 1fr;
          }
          .side-by-side-comparison-grid {
            grid-template-columns: 1fr;
          }
          .premium-card-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .svg-ring-wrapper {
            align-self: flex-end;
          }
          .modal-top-banner {
            padding: 24px 20px;
          }
          .banner-primary-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }
          .modal-scroll-body {
            padding: 20px;
          }
          .statistics-grid-list {
            grid-template-columns: repeat(2, 1fr);
          }
          .sources-links-flex {
            flex-direction: column;
          }
        }
      `})]})}function jt(){let{language:e,animations:t}=w(),{currentStep:n,errors:r,isSavedSessionAvailable:i,isSubmitted:a,nextStep:o,prevStep:s,loadSavedSession:c,clearSession:l,submitForm:u}=xe(),d=k[e].questionnaire;if((0,b.useEffect)(()=>{window.scrollTo({top:0,behavior:t===`on`?`smooth`:`auto`})},[n,t]),a)return(0,x.jsx)(At,{});let f=n===9?100:n/8*100;return(0,x.jsxs)(`section`,{id:`questionnaire`,className:`questionnaire-section`,children:[i&&(0,x.jsx)(`div`,{className:`recovery-backdrop ${t===`off`?`instant`:``}`,children:(0,x.jsxs)(`div`,{className:`glass-card recovery-card scale-in`,children:[(0,x.jsx)(st,{size:48,className:`recovery-icon`}),(0,x.jsx)(`h3`,{className:`recovery-title`,children:d.recoveryTitle}),(0,x.jsx)(`p`,{className:`recovery-desc`,children:d.recoveryDesc}),(0,x.jsxs)(`div`,{className:`recovery-actions`,children:[(0,x.jsxs)(`button`,{className:`btn-primary resume-btn`,onClick:c,children:[(0,x.jsx)(ze,{size:16}),(0,x.jsx)(`span`,{children:d.btnResume})]}),(0,x.jsxs)(`button`,{className:`btn-fresh`,onClick:l,children:[(0,x.jsx)(Qe,{size:16}),(0,x.jsx)(`span`,{children:d.btnStartFresh})]})]})]})}),(0,x.jsx)(`div`,{className:`container questionnaire-container-inner ${n===9?`review-layout`:``}`,children:(0,x.jsxs)(`div`,{className:`glass-card questionnaire-card`,children:[(0,x.jsxs)(`div`,{className:`questionnaire-header`,children:[(0,x.jsxs)(`div`,{className:`step-info`,children:[n===9?(0,x.jsx)(`span`,{className:`step-badge review-badge`,children:e===`en`?`DOSSIER REVIEW`:`XEM LẠI BÁO CÁO`}):(0,x.jsxs)(`span`,{className:`step-badge`,children:[d.step,` `,n,` `,d.of,` 8`]}),(0,x.jsx)(`h2`,{className:`step-title-text`,children:(e=>{switch(e){case 1:return d.steps.step1;case 2:return d.steps.step2;case 3:return d.steps.step3;case 4:return d.steps.step4;case 5:return d.steps.step5;case 6:return d.steps.step6;case 7:return d.steps.step7;case 8:return d.steps.step8;case 9:return d.steps.review;default:return``}})(n)})]}),(0,x.jsx)(`div`,{className:`progress-bar-track`,children:(0,x.jsx)(`div`,{className:`progress-bar-fill`,style:{width:`${f}%`}})})]}),Object.keys(r).length>0&&(0,x.jsxs)(`div`,{className:`validation-header-alert`,children:[(0,x.jsx)(st,{size:18}),(0,x.jsxs)(`div`,{className:`alert-content`,children:[(0,x.jsx)(`strong`,{children:d.validationHeader}),(0,x.jsx)(`p`,{children:`Please double-check all required inputs on this page before continuing.`})]})]}),(0,x.jsx)(`div`,{className:`step-content-anim-wrapper fade-in`,children:(()=>{switch(n){case 1:return(0,x.jsx)(bt,{});case 2:return(0,x.jsx)(xt,{category:`physical`});case 3:return(0,x.jsx)(xt,{category:`technical`});case 4:return(0,x.jsx)(xt,{category:`defensive`});case 5:return(0,x.jsx)(xt,{category:`goalkeeper`});case 6:return(0,x.jsx)(St,{category:`styles`});case 7:return(0,x.jsx)(St,{category:`personality`});case 8:return(0,x.jsx)(Ct,{});case 9:return(0,x.jsx)(Tt,{});default:return(0,x.jsx)(bt,{})}})()}),(0,x.jsxs)(`div`,{className:`questionnaire-actions-row`,children:[n>1?(0,x.jsxs)(`button`,{type:`button`,className:`btn-back-nav`,onClick:s,children:[(0,x.jsx)(Fe,{size:18}),(0,x.jsx)(`span`,{children:d.btnPrev})]}):(0,x.jsx)(`div`,{}),n<9?(0,x.jsxs)(`button`,{type:`button`,className:`btn-primary next-nav-btn`,onClick:()=>{o()},children:[(0,x.jsx)(`span`,{children:d.btnNext}),(0,x.jsx)(Le,{size:18})]}):(0,x.jsxs)(`button`,{type:`button`,className:`btn-primary submit-nav-btn`,onClick:()=>{u()},children:[(0,x.jsx)(ze,{size:18}),(0,x.jsx)(`span`,{children:d.btnSubmit})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .questionnaire-section {
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 80px;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          position: relative;
          z-index: 5;
        }

        .questionnaire-container-inner {
          max-width: 900px !important;
          transition: max-width var(--transition-slow);
        }

        .questionnaire-container-inner.review-layout {
          max-width: 1200px !important;
        }

        .questionnaire-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          gap: 36px;
          min-height: 500px;
          border: 1px solid rgba(var(--accent-rgb), 0.1);
        }

        /* Recovery prompt styling */
        .recovery-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .recovery-backdrop.instant {
          transition: none !important;
        }

        .recovery-card {
          width: 100%;
          max-width: 480px;
          padding: 40px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          border-radius: var(--border-radius-md);
          background: rgba(12, 15, 23, 0.7);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          box-shadow: var(--shadow-lg), 0 0 30px rgba(var(--accent-rgb), 0.05);
        }

        .recovery-icon {
          color: var(--accent);
          filter: drop-shadow(0 0 10px var(--accent-glow));
        }

        .recovery-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .recovery-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .recovery-actions {
          display: flex;
          width: 100%;
          gap: 16px;
          margin-top: 8px;
        }

        .resume-btn {
          flex: 1;
        }

        .btn-fresh {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          padding: 12px 20px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-fresh:hover {
          border-color: #ff4a4a;
          color: #ff4a4a;
          background-color: rgba(255, 74, 74, 0.05);
        }

        /* Progress tracker styling */
        .questionnaire-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 24px;
        }

        .step-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }

        .step-badge {
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: var(--border-radius-full);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .step-title-text {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .progress-bar-track {
          width: 100%;
          height: 6px;
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-full);
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-blue) 100%);
          border-radius: var(--border-radius-full);
          transition: width var(--transition-normal);
        }

        /* Validation Alert Banner */
        .validation-header-alert {
          background: rgba(255, 74, 74, 0.08);
          border: 1px solid rgba(255, 74, 74, 0.2);
          color: #ff4a4a;
          padding: 14px 20px;
          border-radius: var(--border-radius-sm);
          display: flex;
          gap: 14px;
          align-items: center;
          text-align: left;
        }

        .alert-content {
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .alert-content strong {
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .alert-content p {
          color: #ff7878;
        }

        /* Step Wrapper */
        .step-content-anim-wrapper {
          min-height: 250px;
        }

        /* Actions row */
        .questionnaire-actions-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--glass-border);
          padding-top: 32px;
          margin-top: 16px;
        }

        .btn-back-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          padding: 12px 24px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-back-nav:hover {
          border-color: var(--text-secondary);
          color: var(--text-primary);
          background-color: rgba(255, 255, 255, 0.02);
        }
        
        .btn-back-nav:active {
          transform: scale(0.98);
        }

        .next-nav-btn, .submit-nav-btn {
          min-width: 160px;
        }

        @media (max-width: 768px) {
          .questionnaire-section {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .questionnaire-card {
            padding: 24px;
            gap: 24px;
          }
          .step-title-text {
            font-size: 1.3rem;
          }
          .btn-back-nav, .next-nav-btn, .submit-nav-btn {
            padding: 10px 18px;
            font-size: 0.95rem;
            min-width: unset;
          }
        }
      `})]})}function Mt(){let{theme:e,animations:t}=w(),{isSubmitted:n}=xe(),[r,i]=(0,b.useState)(!0),[a,o]=(0,b.useState)(!1),[s,c]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{n&&c(!0)},[n]),(0,b.useEffect)(()=>{if(r)return;document.documentElement.classList.add(`theme-transition`);let e=setTimeout(()=>{document.documentElement.classList.remove(`theme-transition`)},500);return()=>clearTimeout(e)},[e,r]),r?(0,x.jsx)(yt,{onComplete:()=>{i(!1)}}):(0,x.jsxs)(`div`,{className:`app-wrapper ${t===`off`?`animations-disabled`:``}`,children:[(0,x.jsx)(pt,{onOpenSettings:()=>{o(!0)},onNavigate:e=>{e===`home`?(c(!1),window.scrollTo({top:0,behavior:t===`on`?`smooth`:`auto`})):(e===`about`||e===`faq`)&&(c(!1),setTimeout(()=>{let n=document.getElementById(e);if(n){let e=n.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:e,behavior:t===`on`?`smooth`:`auto`})}},50))}}),(0,x.jsx)(`main`,{className:`main-content-flow`,children:s?(0,x.jsx)(jt,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(mt,{onStartClick:()=>c(!0)}),(0,x.jsx)(ht,{}),(0,x.jsx)(gt,{})]})}),(0,x.jsx)(_t,{}),(0,x.jsx)(vt,{isOpen:a,onClose:()=>{o(!1)}}),(0,x.jsx)(`style`,{children:`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-primary);
        }

        .main-content-flow {
          flex: 1;
        }

        /* Page reveal transition */
        .main-content-flow {
          animation: pageReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animations-disabled .main-content-flow {
          animation: none !important;
        }

        @keyframes pageReveal {
          from {
            opacity: 0;
            transform: scale(0.99);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `})]})}(0,y.createRoot)(document.getElementById(`root`)).render((0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(C,{children:(0,x.jsx)(be,{children:(0,x.jsx)(Mt,{})})})}));