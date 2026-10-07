(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ry(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Hd={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx;function lE(){if(nx)return yl;nx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return yl.Fragment=t,yl.jsx=i,yl.jsxs=i,yl}var ix;function cE(){return ix||(ix=1,Hd.exports=lE()),Hd.exports}var b=cE(),Gd={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function uE(){if(ax)return ye;ax=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),S=Symbol.iterator;function T(G){return G===null||typeof G!="object"?null:(G=S&&G[S]||G["@@iterator"],typeof G=="function"?G:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function O(G,vt,Ot){this.props=G,this.context=vt,this.refs=y,this.updater=Ot||L}O.prototype.isReactComponent={},O.prototype.setState=function(G,vt){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,vt,"setState")},O.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function D(){}D.prototype=O.prototype;function C(G,vt,Ot){this.props=G,this.context=vt,this.refs=y,this.updater=Ot||L}var z=C.prototype=new D;z.constructor=C,M(z,O.prototype),z.isPureReactComponent=!0;var N=Array.isArray;function U(){}var E={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function B(G,vt,Ot){var tt=Ot.ref;return{$$typeof:r,type:G,key:vt,ref:tt!==void 0?tt:null,props:Ot}}function F(G,vt){return B(G.type,vt,G.props)}function W(G){return typeof G=="object"&&G!==null&&G.$$typeof===r}function it(G){var vt={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(Ot){return vt[Ot]})}var J=/\/+/g;function $(G,vt){return typeof G=="object"&&G!==null&&G.key!=null?it(""+G.key):vt.toString(36)}function j(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(U,U):(G.status="pending",G.then(function(vt){G.status==="pending"&&(G.status="fulfilled",G.value=vt)},function(vt){G.status==="pending"&&(G.status="rejected",G.reason=vt)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function k(G,vt,Ot,tt,ot){var Mt=typeof G;(Mt==="undefined"||Mt==="boolean")&&(G=null);var Pt=!1;if(G===null)Pt=!0;else switch(Mt){case"bigint":case"string":case"number":Pt=!0;break;case"object":switch(G.$$typeof){case r:case t:Pt=!0;break;case _:return Pt=G._init,k(Pt(G._payload),vt,Ot,tt,ot)}}if(Pt)return ot=ot(G),Pt=tt===""?"."+$(G,0):tt,N(ot)?(Ot="",Pt!=null&&(Ot=Pt.replace(J,"$&/")+"/"),k(ot,vt,Ot,"",function(de){return de})):ot!=null&&(W(ot)&&(ot=F(ot,Ot+(ot.key==null||G&&G.key===ot.key?"":(""+ot.key).replace(J,"$&/")+"/")+Pt)),vt.push(ot)),1;Pt=0;var _t=tt===""?".":tt+":";if(N(G))for(var Nt=0;Nt<G.length;Nt++)tt=G[Nt],Mt=_t+$(tt,Nt),Pt+=k(tt,vt,Ot,Mt,ot);else if(Nt=T(G),typeof Nt=="function")for(G=Nt.call(G),Nt=0;!(tt=G.next()).done;)tt=tt.value,Mt=_t+$(tt,Nt++),Pt+=k(tt,vt,Ot,Mt,ot);else if(Mt==="object"){if(typeof G.then=="function")return k(j(G),vt,Ot,tt,ot);throw vt=String(G),Error("Objects are not valid as a React child (found: "+(vt==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":vt)+"). If you meant to render a collection of children, use an array instead.")}return Pt}function X(G,vt,Ot){if(G==null)return G;var tt=[],ot=0;return k(G,tt,"","",function(Mt){return vt.call(Ot,Mt,ot++)}),tt}function Q(G){if(G._status===-1){var vt=G._result,Ot=vt();Ot.then(function(tt){(G._status===0||G._status===-1)&&(G._status=1,G._result=tt,Ot.status===void 0&&(Ot.status="fulfilled",Ot.value=tt))},function(tt){(G._status===0||G._status===-1)&&(G._status=2,G._result=tt,Ot.status===void 0&&(Ot.status="rejected",Ot.reason=tt))}),G._status===-1&&(G._status=0,G._result=Ot)}if(G._status===1)return G._result.default;throw G._result}var Y=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var vt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(vt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function ct(G){var vt=E.T,Ot={};Ot.types=vt!==null?vt.types:null,E.T=Ot;try{var tt=G(),ot=E.S;ot!==null&&ot(Ot,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(U,Y)}catch(Mt){Y(Mt)}finally{vt!==null&&Ot.types!==null&&(vt.types=Ot.types),E.T=vt}}function Lt(G){var vt=E.T;if(vt!==null){var Ot=vt.types;Ot===null?vt.types=[G]:Ot.indexOf(G)===-1&&Ot.push(G)}else ct(Lt.bind(null,G))}var Gt={map:X,forEach:function(G,vt,Ot){X(G,function(){vt.apply(this,arguments)},Ot)},count:function(G){var vt=0;return X(G,function(){vt++}),vt},toArray:function(G){return X(G,function(vt){return vt})||[]},only:function(G){if(!W(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return ye.Activity=g,ye.Children=Gt,ye.Component=O,ye.Fragment=i,ye.Profiler=l,ye.PureComponent=C,ye.StrictMode=s,ye.Suspense=p,ye.ViewTransition=v,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,ye.__COMPILER_RUNTIME={__proto__:null,c:function(G){return E.H.useMemoCache(G)}},ye.addTransitionType=Lt,ye.cache=function(G){return function(){return G.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(G,vt,Ot){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var tt=M({},G.props),ot=G.key;if(vt!=null)for(Mt in vt.key!==void 0&&(ot=""+vt.key),vt)!P.call(vt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&vt.ref===void 0||(tt[Mt]=vt[Mt]);var Mt=arguments.length-2;if(Mt===1)tt.children=Ot;else if(1<Mt){for(var Pt=Array(Mt),_t=0;_t<Mt;_t++)Pt[_t]=arguments[_t+2];tt.children=Pt}return B(G.type,ot,tt)},ye.createContext=function(G){return G={$$typeof:h,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:c,_context:G},G},ye.createElement=function(G,vt,Ot){var tt,ot={},Mt=null;if(vt!=null)for(tt in vt.key!==void 0&&(Mt=""+vt.key),vt)P.call(vt,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ot[tt]=vt[tt]);var Pt=arguments.length-2;if(Pt===1)ot.children=Ot;else if(1<Pt){for(var _t=Array(Pt),Nt=0;Nt<Pt;Nt++)_t[Nt]=arguments[Nt+2];ot.children=_t}if(G&&G.defaultProps)for(tt in Pt=G.defaultProps,Pt)ot[tt]===void 0&&(ot[tt]=Pt[tt]);return B(G,Mt,ot)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(G){return{$$typeof:d,render:G}},ye.isValidElement=W,ye.lazy=function(G){return{$$typeof:_,_payload:{_status:-1,_result:G},_init:Q}},ye.memo=function(G,vt){return{$$typeof:m,type:G,compare:vt===void 0?null:vt}},ye.startTransition=ct,ye.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},ye.use=function(G){return E.H.use(G)},ye.useActionState=function(G,vt,Ot){return E.H.useActionState(G,vt,Ot)},ye.useCallback=function(G,vt){return E.H.useCallback(G,vt)},ye.useContext=function(G){return E.H.useContext(G)},ye.useDebugValue=function(){},ye.useDeferredValue=function(G,vt){return E.H.useDeferredValue(G,vt)},ye.useEffect=function(G,vt){return E.H.useEffect(G,vt)},ye.useEffectEvent=function(G){return E.H.useEffectEvent(G)},ye.useId=function(){return E.H.useId()},ye.useImperativeHandle=function(G,vt,Ot){return E.H.useImperativeHandle(G,vt,Ot)},ye.useInsertionEffect=function(G,vt){return E.H.useInsertionEffect(G,vt)},ye.useLayoutEffect=function(G,vt){return E.H.useLayoutEffect(G,vt)},ye.useMemo=function(G,vt){return E.H.useMemo(G,vt)},ye.useOptimistic=function(G,vt){return E.H.useOptimistic(G,vt)},ye.useReducer=function(G,vt,Ot){return E.H.useReducer(G,vt,Ot)},ye.useRef=function(G){return E.H.useRef(G)},ye.useState=function(G){return E.H.useState(G)},ye.useSyncExternalStore=function(G,vt,Ot){return E.H.useSyncExternalStore(G,vt,Ot)},ye.useTransition=function(){return E.H.useTransition()},ye.version="19.3.0",ye}var sx;function Em(){return sx||(sx=1,Gd.exports=uE()),Gd.exports}var se=Em();const fE=Ry(se);var Vd={exports:{}},Sl={},kd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx;function hE(){return rx||(rx=1,(function(r){function t(j,k){var X=j.length;j.push(k);t:for(;0<X;){var Q=X-1>>>1,Y=j[Q];if(0<l(Y,k))j[Q]=k,j[X]=Y,X=Q;else break t}}function i(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var k=j[0],X=j.pop();if(X!==k){j[0]=X;t:for(var Q=0,Y=j.length,ct=Y>>>1;Q<ct;){var Lt=2*(Q+1)-1,Gt=j[Lt],G=Lt+1,vt=j[G];if(0>l(Gt,X))G<Y&&0>l(vt,Gt)?(j[Q]=vt,j[G]=X,Q=G):(j[Q]=Gt,j[Lt]=X,Q=Lt);else if(G<Y&&0>l(vt,X))j[Q]=vt,j[G]=X,Q=G;else break t}}return k}function l(j,k){var X=j.sortIndex-k.sortIndex;return X!==0?X:j.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,g=null,v=3,S=!1,T=!1,L=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(j){for(var k=i(m);k!==null;){if(k.callback===null)s(m);else if(k.startTime<=j)s(m),k.sortIndex=k.expirationTime,t(p,k);else break;k=i(m)}}function z(j){if(L=!1,C(j),!T)if(i(p)!==null)T=!0,N||(N=!0,W());else{var k=i(m);k!==null&&$(z,k.startTime-j)}}var N=!1,U=-1,E=5,P=-1;function B(){return M?!0:!(r.unstable_now()-P<E)}function F(){if(M=!1,N){var j=r.unstable_now();P=j;var k=!0;try{t:{T=!1,L&&(L=!1,O(U),U=-1),S=!0;var X=v;try{e:{for(C(j),g=i(p);g!==null&&!(g.expirationTime>j&&B());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,v=g.priorityLevel;var Y=Q(g.expirationTime<=j);if(j=r.unstable_now(),typeof Y=="function"){g.callback=Y,C(j),k=!0;break e}g===i(p)&&s(p),C(j)}else s(p);g=i(p)}if(g!==null)k=!0;else{var ct=i(m);ct!==null&&$(z,ct.startTime-j),k=!1}}break t}finally{g=null,v=X,S=!1}k=void 0}}finally{k?W():N=!1}}}var W;if(typeof D=="function")W=function(){D(F)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,J=it.port2;it.port1.onmessage=F,W=function(){J.postMessage(null)}}else W=function(){y(F,0)};function $(j,k){U=y(function(){j(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(j){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var X=v;v=k;try{return j()}finally{v=X}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(j,k){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=v;v=j;try{return k()}finally{v=X}},r.unstable_scheduleCallback=function(j,k,X){var Q=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Q+X:Q):X=Q,j){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=X+Y,j={id:_++,callback:k,priorityLevel:j,startTime:X,expirationTime:Y,sortIndex:-1},X>Q?(j.sortIndex=X,t(m,j),i(p)===null&&j===i(m)&&(L?(O(U),U=-1):L=!0,$(z,X-Q))):(j.sortIndex=Y,t(p,j),T||S||(T=!0,N||(N=!0,W()))),j},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(j){var k=v;return function(){var X=v;v=k;try{return j.apply(this,arguments)}finally{v=X}}}})(Xd)),Xd}var ox;function dE(){return ox||(ox=1,kd.exports=hE()),kd.exports}var qd={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function pE(){if(lx)return Gn;lx=1;var r=Em();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:_,containerInfo:g,implementation:v}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.browser=function(_){return{$$typeof:c,_reason:_}},Gn.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(_,g,null,v)},Gn.flushSync=function(_){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=g,s.p=v,s.d.f()}},Gn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},Gn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Gn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:L}):v==="script"&&s.d.X(_,{crossOrigin:S,integrity:T,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Gn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},Gn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin);s.d.L(_,v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Gn.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},Gn.requestFormReset=function(_){s.d.r(_)},Gn.unstable_batchedUpdates=function(_,g){return _(g)},Gn.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},Gn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Gn.version="19.3.0",Gn}var cx;function mE(){if(cx)return qd.exports;cx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qd.exports=pE(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function gE(){if(ux)return Sl;ux=1;var r=dE(),t=Em(),i=mE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,w=u.child;w;){if(w===a){x=!0,a=u,o=f;break}if(w===o){x=!0,o=u,a=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===a){x=!0,a=f,o=u;break}if(w===o){x=!0,o=f,a=u;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,o,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,o,u,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=v(e);return a===null||L(n,e,a.child,{foundSelf:!1}),n}function L(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&L(e,n,a.child,o))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,O=null;function D(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function C(e,n,a){return e===a?(O=e,!1):e===n?(O!==null&&(y=e),!0):!1}function z(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function N(e,n,a){for(var o=0,u=e;u;u=a(u))o++;u=0;for(var f=n;f;f=a(f))u++;for(;0<o-u;)e=a(e),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var U=Object.assign,E=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),$=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),Lt=Symbol.for("react.legacy_hidden"),Gt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.for("react.view_transition"),vt=Symbol.for("react.recoverable"),Ot=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=Ot&&e[Ot]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case it:return"Profiler";case W:return"StrictMode";case k:return"Suspense";case X:return"SuspenseList";case ct:return"Activity";case G:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case $:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case j:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:Mt(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return Mt(e(n))}catch{}}return null}var Pt=Array.isArray,_t=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Nt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},xt=[],St=-1;function Dt(e){return{current:e}}function Rt(e){0>St||(e.current=xt[St],xt[St]=null,St--)}function Ct(e,n){St++,xt[St]=e.current,e.current=n}var ne=Dt(null),$t=Dt(null),le=Dt(null),fe=Dt(null);function V(e,n){switch(Ct(le,n),Ct($t,e),Ct(ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?f_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=f_(n),e=h_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Rt(ne),Ct(ne,e)}function Se(){Rt(ne),Rt($t),Rt(le)}function ge(e){var n=e.memoizedState;n!==null&&(Qr._currentValue=n.memoizedState,Ct(fe,e)),n=ne.current;var a=h_(n,e.type);n!==a&&(Ct($t,e),Ct(ne,a))}function I(e){$t.current===e&&(Rt(ne),Rt($t)),fe.current===e&&(Rt(fe),Qr._currentValue=de)}var A,rt;function ut(e){if(A===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+A+e+rt}var gt=!1;function Ut(e,n){if(!e||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(Xt){var nt=Xt}Reflect.construct(e,[],At)}else{try{At.call()}catch(Xt){nt=Xt}At=!1;try{var dt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),At=!0,new e}finally{At&&(dt!==void 0?Object.defineProperty(e.prototype,"props",dt):delete e.prototype.props)}}}else{try{throw Error()}catch(Xt){nt=Xt}(At=e())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(Xt){if(Xt&&nt&&typeof Xt.stack=="string")return[Xt.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var H=x.split(`
`),st=w.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===st.length)for(o=H.length-1,u=st.length-1;1<=o&&0<=u&&H[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==st[u]){var pt=`
`+H[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function It(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ut(e.type,!1);case 11:return Ut(e.type.render,!1);case 1:return Ut(e.type,!0);case 31:return ut("Activity");case 30:return ut("ViewTransition");default:return""}}function yt(e){try{var n="",a=null;do n+=It(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Et=Object.prototype.hasOwnProperty,Bt=r.unstable_scheduleCallback,ce=r.unstable_cancelCallback,qt=r.unstable_shouldYield,Vt=r.unstable_requestPaint,Jt=r.unstable_now,he=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,et=r.unstable_UserBlockingPriority,Ft=r.unstable_NormalPriority,bt=r.unstable_LowPriority,Ht=r.unstable_IdlePriority,jt=r.log,wt=r.unstable_setDisableYieldValue,ie=null,Wt=null;function Ce(e){if(typeof jt=="function"&&wt(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(ie,e)}catch{}}var xe=Math.clz32?Math.clz32:mr,kn=Math.log,Zn=Math.LN2;function mr(e){return e>>>=0,e===0?32:31-(kn(e)/Zn|0)|0}var Ta=256,Aa=262144,Fi=4194304;function Xe(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cn(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=Xe(o):(x&=w,x!==0?u=Xe(x):a||(a=w&~e,a!==0&&(u=Xe(a))))):(w=o&~f,w!==0?u=Xe(w):x!==0?u=Xe(x):a||(a=o&~e,a!==0&&(u=Xe(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Kn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xn(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-xe(a),u=1<<o;n|=e[o],a&=~u}return n}function Hi(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ta(){var e=Fi;return Fi<<=1,(Fi&62914560)===0&&(Fi=4194304),e}function Ca(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ea(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yl(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,H=e.expirationTimes,st=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-xe(a),At=1<<pt;w[pt]=0,H[pt]=-1;var nt=st[pt];if(nt!==null)for(st[pt]=null,pt=0;pt<nt.length;pt++){var dt=nt[pt];dt!==null&&(dt.lane&=-536870913)}a&=~At}o!==0&&Os(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Os(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-xe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ro(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-xe(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function wo(e,n){var a=n&-n;return a=(a&42)!==0?1:No(a),(a&(e.suspendedLanes|n))!==0?0:a}function No(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Do(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zl(){var e=Nt.p;return e!==0?e:(e=window.event,e===void 0?32:Z_(e.type))}function Kl(e,n){var a=Nt.p;try{return Nt.p=e,n()}finally{Nt.p=a}}var Ci=Math.random().toString(36).slice(2),R="__reactFiber$"+Ci,Z="__reactProps$"+Ci,mt="__reactContainer$"+Ci,ft="__reactEvents$"+Ci,ht="__reactListeners$"+Ci,Yt="__reactHandles$"+Ci,Qt="__reactResources$"+Ci,kt="__reactMarker$"+Ci,ae="__reactLoad$"+Ci;function re(e){delete e[R],delete e[Z],delete e[ht],delete e[Yt]}function _e(e){var n;if(n=e[R])return n;for(var a=e.parentNode;a;){if(n=a[mt]||a[R]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=w_(e);e!==null;){if(a=e[R])return a;e=w_(e)}return n}e=a,a=e.parentNode}return null}function Me(e){if(e=e[R]||e[mt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function te(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Oe(e){var n=e[Qt];return n||(n=e[Qt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(e){e[kt]=!0}function nn(e){e[ae]=void 0}var We=new Set,An={};function Zt(e,n){mn(e,n),mn(e+"Capture",n)}function mn(e,n){for(An[e]=n,e=0;e<n.length;e++)We.add(n[e])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jn={},di={};function na(e){return Et.call(di,e)?!0:Et.call(Jn,e)?!1:He.test(e)?di[e]=!0:(Jn[e]=!0,!1)}var Ne=!1;function qe(){var e=Ne;return Ne=!1,e}function rn(e,n,a){if(na(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function pi(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ie(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ra(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jl(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gf(e){if(!e._valueTracker){var n=Ra(e)?"checked":"value";e._valueTracker=Jl(e,n,""+e[n])}}function $m(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ra(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var wM=/[\n"\\]/g;function Ri(e){return e.replace(wM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vf(e,n,a,o,u,f,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+gn(n)):e.value!==""+gn(n)&&(e.value=""+gn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?_f(e,gn(e.value)):_f(e,gn(n)):a!=null?_f(e,gn(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+gn(w):e.removeAttribute("name")}function t0(e,n,a,o,u,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){gf(e);return}a=a!=null?""+gn(a):"",n=n!=null?""+gn(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),gf(e)}function _f(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function gr(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+gn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function e0(e,n,a){if(n!=null&&(n=""+gn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+gn(a):""}function n0(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Pt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=gn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),gf(e)}function vr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var NM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function i0(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||NM.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function a0(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",Ne=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(i0(e,u,o),Ne=!0)}else for(var f in n)n.hasOwnProperty(f)&&i0(e,f,n[f])}function xf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var DM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),LM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(e){return LM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ia(){}var yf=null;function Sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,xr=null;function s0(e){var n=Me(e);if(n&&(e=n.stateNode)){var a=e[Z]||null;t:switch(e=n.stateNode,n.type){case"input":if(vf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ri(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Z]||null;if(!u)throw Error(s(90));vf(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&$m(o)}break t;case"textarea":e0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gr(e,!!a.multiple,n,!1)}}}var Mf=!1;function r0(e,n,a){if(Mf)return e(n,a);Mf=!0;try{var o=e(n);return o}finally{if(Mf=!1,(_r!==null||xr!==null)&&(Qc(),_r&&(n=_r,e=xr,xr=_r=null,s0(n),e)))for(n=0;n<e.length;n++)s0(e[n])}}function Lo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Z]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=!1;if(wa)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{bf=!1}var $a=null,Ef=null,$l=null;function o0(){if($l)return $l;var e,n=Ef,a=n.length,o,u="value"in $a?$a.value:$a.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return $l=u.slice(e,1<o?1-o:void 0)}function tc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ec(){return!0}function l0(){return!1}function Qn(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ec:l0,this.isPropagationStopped=l0,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Qn(ts),Oo=U({},ts,{view:0,detail:0}),UM=Qn(Oo),Tf,Af,Po,ic=U({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Tf=e.screenX-Po.screenX,Af=e.screenY-Po.screenY):Af=Tf=0,Po=e),Tf)},movementY:function(e){return"movementY"in e?e.movementY:Af}}),c0=Qn(ic),OM=U({},ic,{dataTransfer:0}),PM=Qn(OM),zM=U({},Oo,{relatedTarget:0}),Cf=Qn(zM),IM=U({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),BM=Qn(IM),FM=U({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),HM=Qn(FM),GM=U({},ts,{data:0}),u0=Qn(GM),VM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qM(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=XM[e])?!!n[e]:!1}function Rf(){return qM}var jM=U({},Oo,{key:function(e){if(e.key){var n=VM[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(e){return e.type==="keypress"?tc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WM=Qn(jM),YM=U({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=Qn(YM),ZM=U({},ts,{submitter:0}),KM=Qn(ZM),JM=U({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),QM=Qn(JM),$M=U({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=Qn($M),e1=U({},ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n1=Qn(e1),i1=U({},ts,{newState:0,oldState:0,source:0}),a1=Qn(i1),s1=[9,13,27,32],wf=wa&&"CompositionEvent"in window,zo=null;wa&&"documentMode"in document&&(zo=document.documentMode);var r1=wa&&"TextEvent"in window&&!zo,h0=wa&&(!wf||zo&&8<zo&&11>=zo),d0=" ",p0=!1;function m0(e,n){switch(e){case"keyup":return s1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function o1(e,n){switch(e){case"compositionend":return g0(n);case"keypress":return n.which!==32?null:(p0=!0,d0);case"textInput":return e=n.data,e===d0&&p0?null:e;default:return null}}function l1(e,n){if(yr)return e==="compositionend"||!wf&&m0(e,n)?(e=o0(),$l=Ef=$a=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return h0&&n.locale!=="ko"?null:n.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!c1[e.type]:n==="textarea"}function _0(e,n,a,o){_r?xr?xr.push(o):xr=[o]:_r=o,n=au(n,"onChange"),0<n.length&&(a=new nc("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Io=null,Bo=null;function u1(e){s_(e,0)}function ac(e){var n=te(e);if($m(n))return e}function x0(e,n){if(e==="change")return n}var y0=!1;if(wa){var Nf;if(wa){var Df="oninput"in document;if(!Df){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),Df=typeof S0.oninput=="function"}Nf=Df}else Nf=!1;y0=Nf&&(!document.documentMode||9<document.documentMode)}function M0(){Io&&(Io.detachEvent("onpropertychange",b0),Bo=Io=null)}function b0(e){if(e.propertyName==="value"&&ac(Bo)){var n=[];_0(n,Bo,e,Sf(e)),r0(u1,n)}}function f1(e,n,a){e==="focusin"?(M0(),Io=n,Bo=a,Io.attachEvent("onpropertychange",b0)):e==="focusout"&&M0()}function h1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ac(Bo)}function d1(e,n){if(e==="click")return ac(n)}function p1(e,n){if(e==="input"||e==="change")return ac(n)}function m1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mi=typeof Object.is=="function"?Object.is:m1;function Fo(e,n){if(mi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Et.call(n,u)||!mi(e[u],n[u]))return!1}return!0}function Lf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function E0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function T0(e,n){var a=E0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=E0(a)}}function A0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?A0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function C0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Lf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Lf(e.document)}return n}function Uf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var g1=wa&&"documentMode"in document&&11>=document.documentMode,Sr=null,Of=null,Ho=null,Pf=!1;function R0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pf||Sr==null||Sr!==Lf(o)||(o=Sr,"selectionStart"in o&&Uf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&Fo(Ho,o)||(Ho=o,o=au(Of,"onSelect"),0<o.length&&(n=new nc("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Sr)))}function Ps(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Mr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},zf={},w0={};wa&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function zs(e){if(zf[e])return zf[e];if(!Mr[e])return e;var n=Mr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in w0)return zf[e]=n[a];return e}var N0=zs("animationend"),D0=zs("animationiteration"),L0=zs("animationstart"),v1=zs("transitionrun"),_1=zs("transitionstart"),x1=zs("transitioncancel"),U0=zs("transitionend"),O0=new Map,If="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");If.push("scrollEnd");function Gi(e,n){O0.set(e,n),Zt(n,[e])}var y1=0;function Na(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=qi.identifierPrefix;var a=y1++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function P0(e){if(e==null||typeof e=="string")return e;var n=null,a=Vr;if(a!==null)for(var o=0;o<a.length;o++){var u=e[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Da(e,n){return e=P0(e),n=P0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wi=[],br=0,Bf=0;function rc(){for(var e=br,n=Bf=br=0;n<e;){var a=wi[n];wi[n++]=null;var o=wi[n];wi[n++]=null;var u=wi[n];wi[n++]=null;var f=wi[n];if(wi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&z0(a,u,f)}}function oc(e,n,a,o){wi[br++]=e,wi[br++]=n,wi[br++]=a,wi[br++]=o,Bf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ff(e,n,a,o){return oc(e,n,a,o),lc(e)}function Is(e,n){return oc(e,null,null,n),lc(e)}function z0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-xe(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function lc(e){if(50<ll)throw ll=0,Jc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Er={};function S1(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,o){return new S1(e,n,a,o)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function La(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function I0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cc(e,n,a,o,u,f){var x=0;if(o=e,typeof o=="function")Hf(o)&&(x=1);else if(typeof o=="string")x=Zb(e,a,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case ct:return e=si(31,a,n,u),e.elementType=ct,e.lanes=f,e;case F:return Bs(a.children,u,f,n);case W:x=8,u|=24;break;case it:return e=si(12,a,n,u|2),e.elementType=it,e.lanes=f,e;case k:return e=si(13,a,n,u),e.elementType=k,e.lanes=f,e;case X:return e=si(19,a,n,u),e.elementType=X,e.lanes=f,e;case Lt:case G:return e=u|32,e=si(30,a,n,e),e.elementType=G,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case $:x=10;break t;case J:x=9;break t;case j:x=11;break t;case Q:x=14;break t;case Y:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=si(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Bs(e,n,a,o){return e=si(7,e,o,n),e.lanes=a,e}function Gf(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function B0(e){var n=si(18,null,null,0);return n.stateNode=e,n}function Vf(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var F0=new WeakMap;function Ni(e,n){if(typeof e=="object"&&e!==null){var a=F0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:yt(n)},F0.set(e,n),n)}return{value:e,source:n,stack:yt(n)}}var Tr=[],Ar=0,uc=null,Go=0,Di=[],Li=0,es=null,aa=1,sa="";function Ua(e,n){Tr[Ar++]=Go,Tr[Ar++]=uc,uc=e,Go=n}function H0(e,n,a){Di[Li++]=aa,Di[Li++]=sa,Di[Li++]=es,es=e;var o=aa;e=sa;var u=32-xe(o)-1;o&=~(1<<u),a+=1;var f=32-xe(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,aa=1<<32-xe(n)+u|a<<u|o,sa=f+e}else aa=1<<f|a<<u|o,sa=e}function fc(e){e.return!==null&&(Ua(e,1),H0(e,1,0))}function kf(e){for(;e===uc;)uc=Tr[--Ar],Tr[Ar]=null,Go=Tr[--Ar],Tr[Ar]=null;for(;e===es;)es=Di[--Li],Di[Li]=null,sa=Di[--Li],Di[Li]=null,aa=Di[--Li],Di[Li]=null}function G0(e,n){Di[Li++]=aa,Di[Li++]=sa,Di[Li++]=es,aa=n.id,sa=n.overflow,es=e}var Ln=null,on=null,De=!1,ns=null,Ui=!1,Xf=Error(s(519));function is(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Ni(n,e)),Xf}function V0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[R]=e,n[Z]=o,a){case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":case"embed":ze("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)ze(ul[a],n);break;case"source":ze("error",n);break;case"img":case"image":case"link":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"input":ze("invalid",n),t0(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ze("invalid",n);break;case"textarea":ze("invalid",n),n0(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||c_(n.textContent,a)?(o.popover!=null&&(ze("beforetoggle",n),ze("toggle",n)),o.onScroll!=null&&ze("scroll",n),o.onScrollEnd!=null&&ze("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||is(e,!0)}function hc(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Ln=Ln.return}}function Cr(e){if(e!==Ln)return!1;if(!De)return hc(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yd(e.type,e.memoizedProps)),a=!a),a&&on&&is(e),hc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=R_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=R_(e)}else n===27?(n=on,xs(e.type)?(e=wd,wd=null,on=e):on=n):on=Ln?Pi(e.stateNode.nextSibling):null;return!0}function Fs(){on=Ln=null,De=!1}function qf(){var e=ns;return e!==null&&(li===null?li=e:li.push.apply(li,e),ns=null),e}function Vo(e){ns===null?ns=[e]:ns.push(e)}var jf=Dt(null),Hs=null,Oa=null;function as(e,n,a){Ct(jf,n._currentValue),n._currentValue=a}function Pa(e){e._currentValue=jf.current,Rt(jf)}function dc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Wf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=u;for(var H=0;H<n.length;H++)if(w.context===n[H]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),dc(f.return,a,e),o||(x=null);break t}f=w.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),dc(x,a,e),x=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,x=u.alternate,x!==null&&(x.lanes|=a),dc(u.return,a,e),x=u.child,x=x!==null?x.sibling:null):x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Gs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=u.type;mi(u.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(u===fe.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Qr):e=[Qr])}u=u.return}return e!==null&&Wf(n,e,a,o),n.flags|=262144,e!==null}function pc(e){for(e=e.firstContext;e!==null;){if(!mi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){Hs=e,Oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return k0(Hs,e)}function mc(e,n){return Hs===null&&Vs(e),k0(e,n)}function k0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oa===null){if(e===null)throw Error(s(308));Oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Oa=Oa.next=n;return a}var M1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},b1=r.unstable_scheduleCallback,E1=r.unstable_NormalPriority,yn={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new M1,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&b1(E1,function(){e.controller.abort()})}function X0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var Xo=null;function T1(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var qo=null,Zf=0,ks=0,Rr=null;function A1(e,n){if(qo===null){var a=qo=[];Zf=0,ks=fd(),Rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zf++,n.then(q0,q0),n}function q0(){if(--Zf===0&&(Xo=null,qo!==null)){Rr!==null&&(Rr.status="fulfilled");var e=qo;qo=null,ks=0,Rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function C1(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var j0=_t.S;_t.S=function(e,n){if(Bv=Jt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&A1(e,n),Xo!==null)for(var a=jr;a!==null;)X0(a,Xo),a=a.next;if(a=e.types,a!==null){for(var o=jr;o!==null;)X0(o,a),o=o.next;if(ks!==0){o=Xo,o===null&&(o=Xo=[]);for(var u=0;u<a.length;u++){var f=a[u];o.indexOf(f)===-1&&o.push(f)}}}j0!==null&&j0(e,n)};var Xs=Dt(null);function Kf(){var e=Xs.current;return e!==null?e:sn.pooledCache}function gc(e,n){n===null?Ct(Xs,Xs.current):Ct(Xs,n.pool)}function W0(){var e=Kf();return e===null?null:{parent:yn._currentValue,pool:e}}var wr=Error(s(460)),Jf=Error(s(474)),vc=Error(s(542)),_c={then:function(){}};function Y0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Z0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,J0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ia,ia);else{if(e=sn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,J0(e),e}throw js=n,wr}}function qs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(js=a,wr):a}}var js=null;function K0(){if(js===null)throw Error(s(459));var e=js;return js=null,e}function J0(e){if(e===wr||e===vc)throw Error(s(483))}var Nr=null,jo=0;function xc(e){var n=jo;return jo+=1,Nr===null&&(Nr=[]),Z0(Nr,e,n)}function ss(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yc(e,n){throw n.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Q0(e){function n(at,K){if(e){var lt=at.deletions;lt===null?(at.deletions=[K],at.flags|=16):lt.push(K)}}function a(at,K){if(!e)return null;for(;K!==null;)n(at,K),K=K.sibling;return null}function o(at){for(var K=new Map;at!==null;)at.key===null?K.set(at.index,at):K.set(at.key,at),at=at.sibling;return K}function u(at,K){return at=La(at,K),at.index=0,at.sibling=null,at}function f(at,K,lt){return at.index=lt,e?(lt=at.alternate,lt!==null?(lt=lt.index,lt<K?(at.flags|=2,K):lt):(at.flags|=134217730,K)):(at.flags|=1048576,K)}function x(at){return e&&at.alternate===null&&(at.flags|=134217730),at}function w(at,K,lt,Tt){return K===null||K.tag!==6?(K=Gf(lt,at.mode,Tt),K.return=at,K):(K=u(K,lt),K.return=at,K)}function H(at,K,lt,Tt){var ee=lt.type;return ee===F?(at=pt(at,K,lt.props.children,Tt,lt.key),ss(at,lt),at):K!==null&&(K.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Y&&qs(ee)===K.type)?(K=u(K,lt.props),ss(K,lt),K.return=at,K):(K=cc(lt.type,lt.key,lt.props,null,at.mode,Tt),ss(K,lt),K.return=at,K)}function st(at,K,lt,Tt){return K===null||K.tag!==4||K.stateNode.containerInfo!==lt.containerInfo||K.stateNode.implementation!==lt.implementation?(K=Vf(lt,at.mode,Tt),K.return=at,K):(K=u(K,lt.children||[]),K.return=at,K)}function pt(at,K,lt,Tt,ee){return K===null||K.tag!==7?(K=Bs(lt,at.mode,Tt,ee),K.return=at,K):(K=u(K,lt),K.return=at,K)}function At(at,K,lt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Gf(""+K,at.mode,lt),K.return=at,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case P:return lt=cc(K.type,K.key,K.props,null,at.mode,lt),ss(lt,K),lt.return=at,lt;case B:return K=Vf(K,at.mode,lt),K.return=at,K;case Y:return K=qs(K),At(at,K,lt)}if(Pt(K)||tt(K))return K=Bs(K,at.mode,lt,null),K.return=at,K;if(typeof K.then=="function")return At(at,xc(K),lt);if(K.$$typeof===$)return At(at,mc(at,K),lt);yc(at,K)}return null}function nt(at,K,lt,Tt){var ee=K!==null?K.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return ee!==null?null:w(at,K,""+lt,Tt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case P:return lt.key===ee?H(at,K,lt,Tt):null;case B:return lt.key===ee?st(at,K,lt,Tt):null;case Y:return lt=qs(lt),nt(at,K,lt,Tt)}if(Pt(lt)||tt(lt))return ee!==null?null:pt(at,K,lt,Tt,null);if(typeof lt.then=="function")return nt(at,K,xc(lt),Tt);if(lt.$$typeof===$)return nt(at,K,mc(at,lt),Tt);yc(at,lt)}return null}function dt(at,K,lt,Tt,ee){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return at=at.get(lt)||null,w(K,at,""+Tt,ee);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case P:return at=at.get(Tt.key===null?lt:Tt.key)||null,H(K,at,Tt,ee);case B:return at=at.get(Tt.key===null?lt:Tt.key)||null,st(K,at,Tt,ee);case Y:return Tt=qs(Tt),dt(at,K,lt,Tt,ee)}if(Pt(Tt)||tt(Tt))return at=at.get(lt)||null,pt(K,at,Tt,ee,null);if(typeof Tt.then=="function")return dt(at,K,lt,xc(Tt),ee);if(Tt.$$typeof===$)return dt(at,K,lt,mc(K,Tt),ee);yc(K,Tt)}return null}function Xt(at,K,lt,Tt){for(var ee=null,Fe=null,ue=K,pe=K=0,bn=null;ue!==null&&pe<lt.length;pe++){ue.index>pe?(bn=ue,ue=null):bn=ue.sibling;var Ve=nt(at,ue,lt[pe],Tt);if(Ve===null){ue===null&&(ue=bn);break}e&&ue&&Ve.alternate===null&&n(at,ue),K=f(Ve,K,pe),Fe===null?ee=Ve:Fe.sibling=Ve,Fe=Ve,ue=bn}if(pe===lt.length)return a(at,ue),De&&Ua(at,pe),ee;if(ue===null){for(;pe<lt.length;pe++)ue=At(at,lt[pe],Tt),ue!==null&&(K=f(ue,K,pe),Fe===null?ee=ue:Fe.sibling=ue,Fe=ue);return De&&Ua(at,pe),ee}for(ue=o(ue);pe<lt.length;pe++)bn=dt(ue,at,pe,lt[pe],Tt),bn!==null&&(e&&(Ve=bn.alternate,Ve!==null&&ue.delete(Ve.key===null?pe:Ve.key)),K=f(bn,K,pe),Fe===null?ee=bn:Fe.sibling=bn,Fe=bn);return e&&ue.forEach(function(Es){return n(at,Es)}),De&&Ua(at,pe),ee}function oe(at,K,lt,Tt){if(lt==null)throw Error(s(151));for(var ee=null,Fe=null,ue=K,pe=K=0,bn=null,Ve=lt.next();ue!==null&&!Ve.done;pe++,Ve=lt.next()){ue.index>pe?(bn=ue,ue=null):bn=ue.sibling;var Es=nt(at,ue,Ve.value,Tt);if(Es===null){ue===null&&(ue=bn);break}e&&ue&&Es.alternate===null&&n(at,ue),K=f(Es,K,pe),Fe===null?ee=Es:Fe.sibling=Es,Fe=Es,ue=bn}if(Ve.done)return a(at,ue),De&&Ua(at,pe),ee;if(ue===null){for(;!Ve.done;pe++,Ve=lt.next())Ve=At(at,Ve.value,Tt),Ve!==null&&(K=f(Ve,K,pe),Fe===null?ee=Ve:Fe.sibling=Ve,Fe=Ve);return De&&Ua(at,pe),ee}for(ue=o(ue);!Ve.done;pe++,Ve=lt.next())Ve=dt(ue,at,pe,Ve.value,Tt),Ve!==null&&(e&&(bn=Ve.alternate,bn!==null&&ue.delete(bn.key===null?pe:bn.key)),K=f(Ve,K,pe),Fe===null?ee=Ve:Fe.sibling=Ve,Fe=Ve);return e&&ue.forEach(function(oE){return n(at,oE)}),De&&Ua(at,pe),ee}function Ae(at,K,lt,Tt){if(typeof lt=="object"&&lt!==null&&lt.type===F&&lt.key===null&&lt.props.ref===void 0&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case P:t:{for(var ee=lt.key;K!==null;){if(K.key===ee){if(ee=lt.type,ee===F){if(K.tag===7){a(at,K.sibling),Tt=u(K,lt.props.children),ss(Tt,lt),Tt.return=at,at=Tt;break t}}else if(K.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Y&&qs(ee)===K.type){a(at,K.sibling),Tt=u(K,lt.props),ss(Tt,lt),Tt.return=at,at=Tt;break t}a(at,K);break}else n(at,K);K=K.sibling}lt.type===F?(Tt=Bs(lt.props.children,at.mode,Tt,lt.key),ss(Tt,lt),Tt.return=at,at=Tt):(Tt=cc(lt.type,lt.key,lt.props,null,at.mode,Tt),ss(Tt,lt),Tt.return=at,at=Tt)}return x(at);case B:t:{for(ee=lt.key;K!==null;){if(K.key===ee)if(K.tag===4&&K.stateNode.containerInfo===lt.containerInfo&&K.stateNode.implementation===lt.implementation){a(at,K.sibling),Tt=u(K,lt.children||[]),Tt.return=at,at=Tt;break t}else{a(at,K);break}else n(at,K);K=K.sibling}Tt=Vf(lt,at.mode,Tt),Tt.return=at,at=Tt}return x(at);case Y:return lt=qs(lt),Ae(at,K,lt,Tt)}if(Pt(lt))return Xt(at,K,lt,Tt);if(tt(lt)){if(ee=tt(lt),typeof ee!="function")throw Error(s(150));return lt=ee.call(lt),oe(at,K,lt,Tt)}if(typeof lt.then=="function")return Ae(at,K,xc(lt),Tt);if(lt.$$typeof===$)return Ae(at,K,mc(at,lt),Tt);yc(at,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,K!==null&&K.tag===6?(a(at,K.sibling),Tt=u(K,lt),Tt.return=at,at=Tt):(a(at,K),Tt=Gf(lt,at.mode,Tt),Tt.return=at,at=Tt),x(at)):a(at,K)}return function(at,K,lt,Tt){try{jo=0;var ee=Ae(at,K,lt,Tt);return Nr=null,ee}catch(ue){if(ue===wr||ue===vc)throw ue;var Fe=si(29,ue,null,at.mode);return Fe.lanes=Tt,Fe.return=at,Fe}finally{}}}var Ws=Q0(!0),$0=Q0(!1),rs=!1;function Qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function os(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ls(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=lc(e),z0(e,null,a),n}return oc(e,o,n,a),lc(e)}function Wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ro(e,a)}}function th(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var eh=!1;function Yo(){if(eh){var e=Rr;if(e!==null)throw e}}function Zo(e,n,a,o){eh=!1;var u=e.updateQueue;rs=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var H=w,st=H.next;H.next=null,x===null?f=st:x.next=st,x=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,w=pt.lastBaseUpdate,w!==x&&(w===null?pt.firstBaseUpdate=st:w.next=st,pt.lastBaseUpdate=H))}if(f!==null){var At=u.baseState;x=0,pt=st=H=null,w=f;do{var nt=w.lane&-536870913,dt=nt!==w.lane;if(dt?(Be&nt)===nt:(o&nt)===nt){nt!==0&&nt===ks&&(eh=!0),pt!==null&&(pt=pt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Xt=e,oe=w;nt=n;var Ae=a;switch(oe.tag){case 1:if(Xt=oe.payload,typeof Xt=="function"){At=Xt.call(Ae,At,nt);break t}At=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=oe.payload,nt=typeof Xt=="function"?Xt.call(Ae,At,nt):Xt,nt==null)break t;At=U({},At,nt);break t;case 2:rs=!0}}nt=w.callback,nt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[nt]:dt.push(nt))}else dt={lane:nt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pt===null?(st=pt=dt,H=At):pt=pt.next=dt,x|=nt;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;dt=w,w=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);pt===null&&(H=At),u.baseState=H,u.firstBaseUpdate=st,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),ms|=x,e.lanes=x,e.memoizedState=At}}function tg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function eg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tg(a[e],n)}var cs=Dt(null),Sc=Dt(0);function ng(e,n){e=Ha,Ct(Sc,e),Ct(cs,n),Ha=e|n.baseLanes}function nh(){Ct(Sc,Ha),Ct(cs,cs.current)}function ih(){Ha=Sc.current,Rt(cs),Rt(Sc)}var In=Dt(null),qn=null;function us(e){var n=e.alternate;Ct(Bn,Bn.current&1),Ct(In,e),qn===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(qn=e)}function ah(e){Ct(Bn,Bn.current),Ct(In,e),qn===null&&(qn=e)}function ig(e){e.tag===22?(Ct(Bn,Bn.current),Ct(In,e),qn===null&&(qn=e)):fs()}function fs(){Ct(Bn,Bn.current),Ct(In,In.current)}function gi(e){Rt(In),qn===e&&(qn=null),Rt(Bn)}var Bn=Dt(0);function Ko(e,n){Ct(In,In.current),Ct(Bn,n)}function sh(e){Rt(Bn),Rt(In),qn===e&&(qn=null)}function Mc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cd(a)||Rd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var za=0,Te=null,an=null,Sn=null,bc=!1,Dr=!1,Ys=!1,Ec=0,Jo=0,Lr=null,R1=0;function vn(){throw Error(s(321))}function rh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!mi(e[a],n[a]))return!1;return!0}function oh(e,n,a,o,u,f){return za=f,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=e===null||e.memoizedState===null?Hg:Gg,Ys=!1,f=a(o,u),Ys=!1,Dr&&(f=sg(n,a,o,u)),ag(e),f}function ag(e){_t.H=Dc;var n=an!==null&&an.next!==null;if(za=0,Sn=an=Te=null,bc=!1,Jo=0,Lr=null,n)throw Error(s(300));e===null||Mn||(e=e.dependencies,e!==null&&pc(e)&&(Mn=!0))}function sg(e,n,a,o){Te=e;var u=0;do{if(Dr&&(Lr=null),Jo=0,Dr=!1,25<=u)throw Error(s(301));if(u+=1,Sn=an=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}_t.H=z1,f=n(a,o)}while(Dr);return f}function w1(){var e=_t.H,n=e.useState()[0];return n=typeof n.then=="function"?Qo(n):n,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(Te.flags|=1024),n}function lh(){var e=Ec!==0;return Ec=0,e}function ch(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uh(e){if(bc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bc=!1}za=0,Sn=an=Te=null,Dr=!1,Jo=Ec=0,Lr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?Te.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function xn(){if(an===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var n=Sn===null?Te.memoizedState:Sn.next;if(n!==null)Sn=n,an=e;else{if(e===null)throw Te.alternate===null?Error(s(467)):Error(s(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},Sn===null?Te.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function Tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var n=Jo;return Jo+=1,Lr===null&&(Lr=[]),e=Z0(Lr,e,n),n=Te,(Sn===null?n.memoizedState:Sn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?Hg:Gg),e}function Ac(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===vt)return;if(e.$$typeof===$)return zn(e)}throw Error(s(438,String(e)))}function fh(e){var n=null,a=Te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Te.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tc(),Te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Gt;return n.index++,a}function Ia(e,n){return typeof n=="function"?n(e):n}function Cc(e){var n=xn();return hh(n,an,e)}function hh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var w=x=null,H=null,st=n,pt=!1;do{var At=st.lane&-536870913;if(At!==st.lane?(Be&At)===At:(za&At)===At){var nt=st.revertLane;if(nt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),At===ks&&(pt=!0);else if((za&nt)===nt){st=st.next,nt===ks&&(pt=!0);continue}else At={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(w=H=At,x=f):H=H.next=At,Te.lanes|=nt,ms|=nt;At=st.action,Ys&&a(f,At),f=st.hasEagerState?st.eagerState:a(f,At)}else nt={lane:At,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(w=H=nt,x=f):H=H.next=nt,Te.lanes|=At,ms|=At;st=st.next}while(st!==null&&st!==n);if(H===null?x=f:H.next=w,!mi(f,e.memoizedState)&&(Mn=!0,pt&&(a=Rr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function dh(e){var n=xn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);mi(f,n.memoizedState)||(Mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function rg(e,n,a){var o=Te,u=xn(),f=De;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!mi((an||u).memoizedState,a);if(x&&(u.memoizedState=a,Mn=!0),u=u.queue,gh(cg.bind(null,o,u,e),[e]),e=u.getSnapshot!==n||x||Sn!==null&&(Sn.memoizedState.tag&1)!==0,Ur(e?9:8,{destroy:void 0},lg.bind(null,o,u,a,n),null),e){if(o.flags|=2048,sn===null)throw Error(s(349));f||(za&127)!==0||og(o,n,a)}return a}function og(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Te.updateQueue,n===null?(n=Tc(),Te.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function lg(e,n,a,o){n.value=a,n.getSnapshot=o,ug(n)&&fg(e)}function cg(e,n,a){return a(function(){ug(n)&&fg(e)})}function ug(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!mi(e,a)}catch{return!0}}function fg(e){var n=Is(e,2);n!==null&&ci(n,e,2)}function ph(e){var n=$n();if(typeof e=="function"){var a=e;if(e=a(),Ys){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:e},n}function hg(e,n,a,o){return e.baseState=a,hh(e,an,typeof o=="function"?o:Ia)}function N1(e,n,a,o,u){if(Nc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};_t.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,dg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=_t.T,x={};x.types=f!==null?f.types:null,_t.T=x;try{var w=a(u,o),H=_t.S;H!==null&&H(x,w),pg(e,n,w)}catch(st){mh(e,n,st)}finally{f!==null&&x.types!==null&&(f.types=x.types),_t.T=f}}else try{f=a(u,o),pg(e,n,f)}catch(st){mh(e,n,st)}}function pg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mg(e,n,o)},function(o){return mh(e,n,o)}):mg(e,n,a)}function mg(e,n,a){n.status="fulfilled",n.value=a,gg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dg(e,a)))}function mh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gg(n),n=n.next;while(n!==o)}e.action=null}function gg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vg(e,n){return n}function _g(e,n){if(De){var a=sn.formState;if(a!==null){t:{var o=Te;if(De){if(on){e:{for(var u=on,f=Ui;u.nodeType!==8;){if(!f){u=null;break e}if(u=Pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){on=Pi(u.nextSibling),o=u.data==="F!";break t}}is(o)}o=!1}o&&(n=a[0])}}return a=$n(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vg,lastRenderedState:n},a.queue=o,a=Ig.bind(null,Te,o),o.dispatch=a,o=ph(!1),f=Sh.bind(null,Te,!1,o.queue),o=$n(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=N1.bind(null,Te,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function xg(e){var n=xn();return yg(n,an,e)}function yg(e,n,a){if(n=hh(e,n,vg)[0],e=Cc(Ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Qo(n)}catch(x){throw x===wr?vc:x}else o=n;n=xn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Te.flags|=2048,Ur(9,{destroy:void 0},D1.bind(null,u,a),null)),[o,f,e]}function D1(e,n){e.action=n}function Sg(e){var n=xn(),a=an;if(a!==null)return yg(n,a,e);xn(),n=n.memoizedState,a=xn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ur(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Te.updateQueue,n===null&&(n=Tc(),Te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Mg(){return xn().memoizedState}function Rc(e,n,a,o){var u=$n();Te.flags|=e,u.memoizedState=Ur(1|n,{destroy:void 0},a,o===void 0?null:o)}function wc(e,n,a,o){var u=xn();o=o===void 0?null:o;var f=u.memoizedState.inst;an!==null&&o!==null&&rh(o,an.memoizedState.deps)?u.memoizedState=Ur(n,f,a,o):(Te.flags|=e,u.memoizedState=Ur(1|n,f,a,o))}function bg(e,n){Rc(8390656,8,e,n)}function gh(e,n){wc(2048,8,e,n)}function L1(e){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=Tc(),Te.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Eg(e){var n=xn().memoizedState;return L1({ref:n,nextImpl:e}),function(){if((je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Tg(e,n){return wc(4,2,e,n)}function Ag(e,n){return wc(4,4,e,n)}function Cg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rg(e,n,a){a=a!=null?a.concat([e]):null,wc(4,4,Cg.bind(null,n,e),a)}function vh(){}function wg(e,n){var a=xn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Ng(e,n){var a=xn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rh(n,o[1]))return o[0];if(o=e(),Ys){Ce(!0);try{e()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function _h(e,n,a){return a===void 0||(za&1073741824)!==0&&(Be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Hv(),Te.lanes|=e,ms|=e,a)}function Dg(e,n,a,o){return mi(a,n)?a:cs.current!==null?(e=_h(e,a,o),mi(e,n)||(Mn=!0),e):(za&106)===0||(za&1073741824)!==0&&(Be&261930)===0?(Mn=!0,e.memoizedState=a):(e=Hv(),Te.lanes|=e,ms|=e,n)}function Lg(e,n,a,o,u){var f=Nt.p;Nt.p=f!==0&&8>f?f:8;var x=_t.T,w={};w.types=x!==null?x.types:null,_t.T=w,Sh(e,!1,n,a);try{var H=u(),st=_t.S;if(st!==null&&st(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=C1(H,o);$o(e,n,pt,yi(e))}else $o(e,n,o,yi(e))}catch(At){$o(e,n,{then:function(){},status:"rejected",reason:At},yi())}finally{Nt.p=f,x!==null&&w.types!==null&&(x.types=w.types),_t.T=x}}function U1(){}function xh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Ug(e).queue;Lg(e,u,n,de,a===null?U1:function(){return Og(e),a(o)})}function Ug(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:de},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Og(e){var n=Ug(e);n.next===null&&(n=e.alternate.memoizedState),$o(e,n.next.queue,{},yi())}function yh(){return zn(Qr)}function Pg(){return xn().memoizedState}function zg(){return xn().memoizedState}function O1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=yi();e=os(a);var o=ls(n,e,a);o!==null&&(ci(o,n,a),Wo(o,n,a)),n={cache:Yf()},e.payload=n;return}n=n.return}}function P1(e,n,a){var o=yi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nc(e)?Bg(n,a):(a=Ff(e,n,a,o),a!==null&&(ci(a,e,o),Fg(a,n,o)))}function Ig(e,n,a){var o=yi();$o(e,n,a,o)}function $o(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Bg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,w=f(x,a);if(u.hasEagerState=!0,u.eagerState=w,mi(w,x))return oc(e,n,u,0),sn===null&&rc(),!1}catch{}finally{}if(a=Ff(e,n,u,o),a!==null)return ci(a,e,o),Fg(a,n,o),!0}return!1}function Sh(e,n,a,o){if(o={lane:2,revertLane:fd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Nc(e)){if(n)throw Error(s(479))}else n=Ff(e,a,o,2),n!==null&&ci(n,e,2)}function Nc(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function Bg(e,n){Dr=bc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Fg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ro(e,a)}}var Dc={readContext:zn,use:Ac,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn,useEffectEvent:vn},Hg={readContext:zn,use:Ac,useCallback:function(e,n){return $n().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:bg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rc(4194308,4,Cg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rc(4194308,4,e,n)},useInsertionEffect:function(e,n){Rc(4,2,e,n)},useMemo:function(e,n){var a=$n();n=n===void 0?null:n;var o=e();if(Ys){Ce(!0);try{e()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=$n();if(a!==void 0){var u=a(n);if(Ys){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=P1.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var n=$n();return e={current:e},n.memoizedState=e},useState:function(e){e=ph(e);var n=e.queue,a=Ig.bind(null,Te,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:vh,useDeferredValue:function(e,n){var a=$n();return _h(a,e,n)},useTransition:function(){var e=ph(!1);return e=Lg.bind(null,Te,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Te,u=$n();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Be&127)!==0||og(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,bg(cg.bind(null,o,f,e),[e]),o.flags|=2048,Ur(9,{destroy:void 0},lg.bind(null,o,f,a,n),null),a},useId:function(){var e=$n(),n=sn.identifierPrefix;if(De){var a=sa,o=aa;a=(o&~(1<<32-xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=R1++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yh,useFormState:_g,useActionState:_g,useOptimistic:function(e){var n=$n();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sh.bind(null,Te,!0,a),a.dispatch=n,[e,n]},useMemoCache:fh,useCacheRefresh:function(){return $n().memoizedState=O1.bind(null,Te)},useEffectEvent:function(e){var n=$n(),a={impl:e};return n.memoizedState=a,function(){if((je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Gg={readContext:zn,use:Ac,useCallback:wg,useContext:zn,useEffect:gh,useImperativeHandle:Rg,useInsertionEffect:Tg,useLayoutEffect:Ag,useMemo:Ng,useReducer:Cc,useRef:Mg,useState:function(){return Cc(Ia)},useDebugValue:vh,useDeferredValue:function(e,n){var a=xn();return Dg(a,an.memoizedState,e,n)},useTransition:function(){var e=Cc(Ia)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:rg,useId:Pg,useHostTransitionStatus:yh,useFormState:xg,useActionState:xg,useOptimistic:function(e,n){var a=xn();return hg(a,an,e,n)},useMemoCache:fh,useCacheRefresh:zg,useEffectEvent:Eg},z1={readContext:zn,use:Ac,useCallback:wg,useContext:zn,useEffect:gh,useImperativeHandle:Rg,useInsertionEffect:Tg,useLayoutEffect:Ag,useMemo:Ng,useReducer:dh,useRef:Mg,useState:function(){return dh(Ia)},useDebugValue:vh,useDeferredValue:function(e,n){var a=xn();return an===null?_h(a,e,n):Dg(a,an.memoizedState,e,n)},useTransition:function(){var e=dh(Ia)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:rg,useId:Pg,useHostTransitionStatus:yh,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,n){var a=xn();return an!==null?hg(a,an,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fh,useCacheRefresh:zg,useEffectEvent:Eg};function Mh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:U({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=yi(),u=os(o);u.payload=n,a!=null&&(u.callback=a),n=ls(e,u,o),n!==null&&(ci(n,e,o),Wo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=yi(),u=os(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ls(e,u,o),n!==null&&(ci(n,e,o),Wo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=yi(),o=os(a);o.tag=2,n!=null&&(o.callback=n),n=ls(e,o,a),n!==null&&(ci(n,e,a),Wo(n,e,a))}};function Vg(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!Fo(a,o)||!Fo(u,f):!0}function kg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&bh.enqueueReplaceState(n,n.state,null)}function Zs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=U({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Xg(e){sc(e)}function qg(e){console.error(e)}function jg(e){sc(e)}function Lc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Eh(e,n,a){return a=os(a),a.tag=3,a.payload={element:null},a.callback=function(){Lc(e,n)},a}function Yg(e){return e=os(e),e.tag=3,e}function Zg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Wg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Wg(n,a,o),typeof u!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function I1(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,u,!0),a=In.current,a!==null){switch(a.tag){case 31:case 13:case 19:return qn===null?$c():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===_c?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ld(e,o,u)),!1;case 22:return a.flags|=65536,o===_c?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ld(e,o,u)),!1}throw Error(s(435,a.tag))}return ld(e,o,u),$c(),!1}if(De)return n=In.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xf&&(e=Error(s(422),{cause:o}),Vo(Ni(e,a)))):(o!==Xf&&(n=Error(s(423),{cause:o}),Vo(Ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ni(o,a),u=Eh(e.stateNode,o,u),th(e,u),_n!==4&&(_n=2)),!1;var f=Error(s(520),{cause:o});if(f=Ni(f,a),ol===null?ol=[f]:ol.push(f),_n!==4&&(_n=2),n===null)return!0;o=Ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Eh(a.stateNode,o,e),th(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gs===null||!gs.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Yg(u),Zg(u,e,a,o),th(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Th=Error(s(461)),Mn=!1;function Cn(e,n,a,o){n.child=e===null?$0(n,null,a,o):Ws(n,e.child,a,o)}function Kg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var w in o)w!=="ref"&&(x[w]=o[w])}else x=o;return Vs(n),o=oh(e,n,a,x,f,u),w=lh(),e!==null&&!Mn?(ch(e,n,u),Ba(e,n,u)):(De&&w&&fc(n),n.flags|=1,Cn(e,n,o,u),n.child)}function Jg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Hf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Qg(e,n,f,o,u)):(e=cc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uh(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(x,o)&&e.ref===n.ref)return Ba(e,n,u)}return n.flags|=1,e=La(f,o),e.ref=n.ref,e.return=n,n.child=e}function Qg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Fo(f,o)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=o=f,Uh(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,Ba(e,n,u)}return Ah(e,n,a,o,u)}function $g(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return tv(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gc(n,f!==null?f.cachePool:null),f!==null?ng(n,f):nh(),ig(n);else return o=n.lanes=536870912,tv(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(gc(n,f.cachePool),ng(n,f),fs(),n.memoizedState=null):(e!==null&&gc(n,null),nh(),fs());return Cn(e,n,u,a),n.child}function tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tv(e,n,a,o,u){var f=Kf();return f=f===null?null:{parent:yn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gc(n,null),nh(),ig(n),e!==null&&Gs(e,n,o,!0),n.childLanes=u,null}function Uc(e,n){return n=Oc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ev(e,n,a){return Ws(n,e.child,null,a),e=Uc(n,n.pendingProps),e.flags|=2,gi(n),n.memoizedState=null,e}function B1(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(De){if(o.mode==="hidden")return e=Uc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},tl(null,e);if(ah(n),(e=on)?(e=C_(e,Ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:es!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=B0(e),a.return=n,n.child=a,Ln=n,on=null)):e=null,e===null)throw is(n);return n.lanes=536870912,null}return Uc(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(ah(n),u)if(n.flags&256)n.flags&=-257,n=ev(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Mn||Gs(e,n,a,!1),u=(a&e.childLanes)!==0,Mn||u){if(cs.current===null){if(o=sn,o!==null&&(x=wo(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Is(e,x),ci(o,e,x),Th;$c()}n=ev(e,n,a)}else e=f.treeContext,on=Pi(x.nextSibling),Ln=n,De=!0,ns=null,Ui=!1,e!==null&&G0(n,e),n=Uc(n,o),n.flags|=134221824;return n}return e=La(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Or(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ah(e,n,a,o,u){return Vs(n),a=oh(e,n,a,o,void 0,u),o=lh(),e!==null&&!Mn?(ch(e,n,u),Ba(e,n,u)):(De&&o&&fc(n),n.flags|=1,Cn(e,n,a,u),n.child)}function nv(e,n,a,o,u,f){return Vs(n),n.updateQueue=null,a=sg(n,o,a,u),ag(e),o=lh(),e!==null&&!Mn?(ch(e,n,f),Ba(e,n,f)):(De&&o&&fc(n),n.flags|=1,Cn(e,n,a,f),n.child)}function iv(e,n,a,o,u){if(Vs(n),n.stateNode===null){var f=Er,x=a.contextType;typeof x=="object"&&x!==null&&(f=zn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Qf(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?zn(x):Er,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Mh(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&bh.enqueueReplaceState(f,f.state,null),Zo(n,o,f,u),Yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,H=Zs(a,w);f.props=H;var st=f.context,pt=a.contextType;x=Er,typeof pt=="object"&&pt!==null&&(x=zn(pt));var At=a.getDerivedStateFromProps;pt=typeof At=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||st!==x)&&kg(n,f,o,x),rs=!1;var nt=n.memoizedState;f.state=nt,Zo(n,o,f,u),Yo(),st=n.memoizedState,w||nt!==st||rs?(typeof At=="function"&&(Mh(n,a,At,o),st=n.memoizedState),(H=rs||Vg(n,a,H,o,nt,st,x))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=x,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$f(e,n),x=n.memoizedProps,pt=Zs(a,x),f.props=pt,At=n.pendingProps,nt=f.context,st=a.contextType,H=Er,typeof st=="object"&&st!==null&&(H=zn(st)),w=a.getDerivedStateFromProps,(st=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==At||nt!==H)&&kg(n,f,o,H),rs=!1,nt=n.memoizedState,f.state=nt,Zo(n,o,f,u),Yo();var dt=n.memoizedState;x!==At||nt!==dt||rs||e!==null&&e.dependencies!==null&&pc(e.dependencies)?(typeof w=="function"&&(Mh(n,a,w,o),dt=n.memoizedState),(pt=rs||Vg(n,a,pt,o,nt,dt,H)||e!==null&&e.dependencies!==null&&pc(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,dt,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,dt,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),f.props=o,f.state=dt,f.context=H,o=pt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Or(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ws(n,e.child,null,u),n.child=Ws(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ba(e,n,u),e}function av(e,n,a,o){return Fs(),n.flags|=256,Cn(e,n,a,o),n.child}var Ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rh(e){return{baseLanes:e,cachePool:W0()}}function wh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=xi),e}function sv(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Bn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(u?us(n):fs(),(e=on)?(e=C_(e,Ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:es!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=B0(e),a.return=n,n.child=a,Ln=n,on=null)):e=null,e===null)throw is(n);return Rd(e)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?(fs(),u=n.mode,f=Oc({mode:"hidden",children:f},u),o=Bs(o,u,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=Rh(a),o.childLanes=wh(e,x,a),n.memoizedState=Ch,tl(null,o)):(us(n),Nh(n,f))}var w=e.memoizedState;if(w!==null){var H=w.dehydrated;if(H!==null)return F1(e,n,f,x,o,H,w,a)}return u?(fs(),u=o.fallback,f=n.mode,w=e.child,H=w.sibling,o=La(w,{mode:"hidden",children:o.children}),o.subtreeFlags=w.subtreeFlags&1206910976,H!==null?u=La(H,u):(u=Bs(u,f,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,tl(null,o),o=n.child,u=e.child.memoizedState,u===null?u=Rh(a):(f=u.cachePool,f!==null?(w=yn._currentValue,f=f.parent!==w?{parent:w,pool:w}:f):f=W0(),u={baseLanes:u.baseLanes|a,cachePool:f}),o.memoizedState=u,o.childLanes=wh(e,x,a),n.memoizedState=Ch,tl(e.child,o)):(us(n),a=e.child,e=a.sibling,a=La(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Nh(e,n){return n=Oc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Oc(e,n){return e=si(22,e,null,n),e.lanes=0,e}function Pc(e,n,a){return Ws(n,e.child,null,a),e=Nh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function F1(e,n,a,o,u,f,x,w){if(a)return n.flags&256?(us(n),n.flags&=-257,Pc(e,n,w)):n.memoizedState!==null?(fs(),n.child=e.child,n.flags|=128,null):(fs(),f=u.fallback,x=n.mode,u=Oc({mode:"visible",children:u.children},x),f=Bs(f,x,w,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Ws(n,e.child,null,w),u=n.child,u.memoizedState=Rh(w),u.childLanes=wh(e,o,w),n.memoizedState=Ch,tl(null,u));if(us(n),Rd(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var H=o.dgst;return o=H,o!==""&&(u=Error(s(419)),u.stack="",u.digest=o,Vo({value:u,source:null,stack:null})),Pc(e,n,w)}if(Mn||Gs(e,n,w,!1),o=(w&e.childLanes)!==0,Mn||o){if(cs.current!==null)return Pc(e,n,w);if(o=sn,o!==null&&(u=wo(o,w),u!==0&&u!==x.retryLane))throw x.retryLane=u,Is(e,u),ci(o,e,u),Th;return Cd(f)||$c(),Pc(e,n,w)}return Cd(f)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,on=Pi(f.nextSibling),Ln=n,De=!0,ns=null,Ui=!1,e!==null&&G0(n,e),n=Nh(n,u.children),n.flags|=134221824,n)}function rv(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),dc(e.return,n,a)}function ov(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Mc(a)===null&&(n=e),e=e.sibling}return n}function zc(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function Dh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Lh(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=Bn.current;if(n.flags&128)return Ko(n,x),null;var w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,Ko(n,x),u==="backwards"&&e!==null?(Dh(e),Cn(e,n,o,a),Dh(e)):Cn(e,n,o,a),o=De?Go:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rv(e,a,n);else if(e.tag===19)rv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=ov(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Dh(n)),zc(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Mc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}zc(n,!0,a,null,f,o);break;case"together":zc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=ov(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),zc(n,!1,u,a,f,o)}return n.child}function lv(e,n,a){var o=n.pendingProps;return as(n,n.type,o.value),Cn(e,n,o.children,a),n.child}function Ba(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ms|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=La(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=La(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pc(e)))}function H1(e,n,a){switch(n.tag){case 3:V(n,n.stateNode.containerInfo),as(n,yn,e.memoizedState.cache),Fs();break;case 27:case 5:ge(n);break;case 4:V(n,n.stateNode.containerInfo);break;case 10:as(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ah(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return us(n),n.flags|=128,null;o=Gs(e,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?sv(e,n,a):(us(n),e=Ba(e,n,a),e!==null?e.sibling:null)}us(n);break;case 19:if(n.flags&128)return Lh(e,n,a);if(u=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Gs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Lh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ko(n,Bn.current),o)break;return null;case 22:return n.lanes=0,$g(e,n,a,n.pendingProps);case 24:as(n,yn,e.memoizedState.cache)}return Ba(e,n,a)}function cv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!Uh(e,a)&&(n.flags&128)===0)return Mn=!1,H1(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,De&&(n.flags&1048576)!==0&&H0(n,Go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=qs(n.elementType),n.type=e,typeof e=="function")Hf(e)?(o=Zs(e,o),n.tag=1,n=iv(null,n,e,o,a)):(n.tag=0,n=Ah(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===j){n.tag=11,n=Kg(null,n,e,o,a);break t}else if(u===Q){n.tag=14,n=Jg(null,n,e,o,a);break t}else if(u===$){n.tag=10,n.type=e,n=lv(null,n,a);break t}}throw n=Mt(e)||e,Error(s(306,n,""))}}return n;case 0:return Ah(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Zs(o,n.pendingProps),iv(e,n,o,u,a);case 3:t:{if(V(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$f(e,n),Zo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,as(n,yn,o),o!==f.cache&&Wf(n,[yn],a,!0),Yo(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=av(e,n,o,a);break t}else if(o!==u){u=Ni(Error(s(424)),n),Vo(u),n=av(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(on=Pi(e.firstChild),Ln=n,De=!0,ns=null,Ui=!0,a=$0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Fs(),o===u){n=Ba(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return Or(e,n),e===null?(a=O_(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(n.stateNode=d_(n.type,n.pendingProps,le.current,n)):n.memoizedState=O_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ge(n),e===null&&De&&(o=n.stateNode=N_(n.type,n.pendingProps,le.current),Ln=n,Ui=!0,u=on,xs(n.type)?(wd=u,on=Pi(o.firstChild)):on=u),Cn(e,n,n.pendingProps.children,a),Or(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((u=o=on)&&(o=Ob(o,n.type,n.pendingProps,Ui),o!==null?(n.stateNode=o,Ln=n,on=Pi(o.firstChild),Ui=!1,u=!0):u=!1),u||is(n)),ge(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,yd(u,f)?o=null:x!==null&&yd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=oh(e,n,w1,null,null,a),Qr._currentValue=u),Or(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&De&&((e=a=on)&&(a=Pb(a,n.pendingProps,Ui),a!==null?(n.stateNode=a,Ln=n,on=null,e=!0):e=!1),e||is(n)),null;case 13:return sv(e,n,a);case 4:return V(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ws(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return Kg(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Or(e,n),Cn(e,n,o,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return lv(e,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,Vs(n),u=zn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return Jg(e,n,n.type,n.pendingProps,a);case 15:return Qg(e,n,n.type,n.pendingProps,a);case 19:return Lh(e,n,a);case 31:return B1(e,n,a);case 22:return $g(e,n,a,n.pendingProps);case 24:return Vs(n),o=zn(yn),e===null?(u=Kf(),u===null&&(u=sn,f=Yf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Qf(n),as(n,yn,u)):((e.lanes&a)!==0&&($f(e,n),Zo(n,null,null,a),Yo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),as(n,yn,o)):(o=f.cache,as(n,yn,o),o!==u.cache&&Wf(n,[yn],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:De&&fc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Or(e,n),Cn(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Fa(e){e.flags|=4}function Oh(e,n,a,o,u){var f;if((f=(e.mode&32)!==0)&&(f=a===null?B_(n,o):B_(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Xv())e.flags|=8192;else throw js=_c,Jf}else e.flags&=-16777217}function uv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F_(n))if(Xv())e.flags|=8192;else throw js=_c,Jf}function Ic(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ta():536870912,e.lanes|=n,Fr|=n)}function el(e,n){if(!De)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function ln(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function G1(e,n,a){var o=n.pendingProps;switch(kf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Pa(yn),Se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Cr(n)?Fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qf())),ln(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Fa(n),f!==null?(ln(n),uv(n,f)):(ln(n),Oh(n,u,null,o,a))):f?f!==e.memoizedState?(Fa(n),ln(n),uv(n,f)):(ln(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Fa(n),ln(n),Oh(n,u,e,o,a)),null;case 27:if(I(n),a=le.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}e=ne.current,Cr(n)?V0(n):(e=N_(u,o,a),n.stateNode=e,Fa(n))}return ln(n),n.subtreeFlags&=-33554433,null;case 5:if(I(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}if(f=ne.current,Cr(n))V0(n);else{var x=hl(le.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[R]=n,f[Z]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Hn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Fa(n)}}return ln(n),n.subtreeFlags&=-33554433,Oh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=le.current,Cr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[R]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||c_(e.nodeValue,a)),e||is(n,!0)}else e=hl(e).createTextNode(o),e[R]=n,n.stateNode=e}return ln(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Cr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[R]=n}else Fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),e=!1}else a=qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ln(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Cr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[R]=n}else Fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),u=!1}else u=qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ic(n,n.updateQueue),ln(n),null);case 4:return Se(),e===null&&md(n.stateNode.containerInfo),n.flags|=67108864,ln(n),null;case 10:return Pa(n.type),ln(n),null;case 19:if(sh(n),o=n.memoizedState,o===null)return ln(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)el(o,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Mc(e),f!==null){for(n.flags|=128,el(o,!1),e=f.updateQueue,n.updateQueue=e,Ic(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)I0(a,e),a=a.sibling;return Ko(n,Bn.current&1|2),De&&Ua(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Jt()>Zc&&(n.flags|=128,u=!0,el(o,!1),n.lanes=4194304)}else{if(!u)if(e=Mc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ic(n,e),el(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!De)return ln(n),null}else 2*Jt()-o.renderingStartTime>Zc&&a!==536870912&&(n.flags|=128,u=!0,el(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){e=o.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Jt(),e.sibling=null,f=Bn.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||De?Ko(n,f):(a=f,Ct(In,n),Ct(Bn,a),qn===null&&(qn=n)),De&&Ua(n,o.treeForkCount),e}return ln(n),null;case 22:case 23:return gi(n),ih(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&Ic(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Rt(Xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pa(yn),ln(n),null;case 25:return null;case 30:return n.flags|=33554432,ln(n),null}throw Error(s(156,n.tag))}function V1(e,n){switch(kf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Pa(yn),Se(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return I(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(s(340));Fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return sh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Se(),null;case 10:return Pa(n.type),null;case 22:case 23:return gi(n),ih(),e!==null&&Rt(Xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Pa(yn),null;case 25:return null;default:return null}}function fv(e,n){switch(kf(n),n.tag){case 3:Pa(yn),Se();break;case 26:case 27:case 5:I(n);break;case 4:Se();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:sh(n);break;case 10:Pa(n.type);break;case 22:case 23:gi(n),ih(),e!==null&&Rt(Xs);break;case 24:Pa(yn)}}function nl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(w){Qe(n,n.return,w)}}function hs(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,u=n;var H=a,st=w;try{st()}catch(pt){Qe(u,H,pt)}}}o=o.next}while(o!==f)}}catch(pt){Qe(n,n.return,pt)}}function hv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{eg(n,a)}catch(o){Qe(e,e.return,o)}}}function dv(e,n,a){a.props=Zs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Qe(e,n,o)}}function ra(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var u=e.stateNode,f=Na(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=y_(f)),o=u.ref;break;case 7:if(e.stateNode===null){var x=new Si(e);g(e.child,!1,Lb,x,void 0,void 0),e.stateNode=x}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(w){Qe(e,n,w)}}function Fn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Qe(e,n,u)}else a.current=null}function Bc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)A_(e.stateNode,n[a])}function pv(e){for(var n=e.return;n!==null&&(zh(n)&&A_(e.stateNode,n.stateNode),!Ph(n));)n=n.return}function il(e){for(var n=e.return;n!==null&&(zh(n)&&Ub(e.stateNode,n.stateNode),!Ph(n));)n=n.return}function Ph(e){return e.tag===5||e.tag===3||e.tag===27}function zh(e){return e&&e.tag===7&&e.stateNode!==null}function Ih(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Qe(e,e.return,u)}}function Bh(e,n,a){try{var o=e.stateNode;pb(o,e.type,a,n),o[Z]=n}catch(u){Qe(e,e.return,u)}}function mv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xs(e.type)||e.tag===4}function Fh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||mv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hh(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia)),Bc(e,o),Ne=!0;else if(u!==4&&(u===27&&(Bc(e,o),o=null,xs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Hh(e,n,a,o),e=e.sibling;e!==null;)Hh(e,n,a,o),e=e.sibling}function Fc(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Bc(e,o),Ne=!0;else if(u!==4&&(u===27&&(Bc(e,o),o=null,xs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Fc(e,n,a,o),e=e.sibling;e!==null;)Fc(e,n,a,o),e=e.sibling}function gv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,o,a),n[R]=e,n[Z]=a}catch(f){Qe(e,e.return,f)}}var Hc=!1,vi=null;function vv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Hc=!0)}var oa=null;function _v(){var e=oa;return oa=null,e}var ri=0;function Pr(e,n,a,o,u){return ri=0,xv(e.child,n,a,o,u)}function xv(e,n,a,o,u){for(var f=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(o!==null){var w=bd(x);o.push(w),w.view&&(f=!0)}else f||bd(x).view&&(f=!0);Hc=!0,__(x,ri===0?n:n+"_"+ri,a),ri++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||xv(e.child,n,a,o,u)&&(f=!0));e=e.sibling}return f}function la(e,n){for(;e!==null;)e.tag===5?x_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||la(e.child,n)),e=e.sibling}function Gc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=Da(n.default,n.share),n!=="none"&&(Pr(e,a,n,null,!1)||la(e.child,!1))}e=e.sibling}}function Gh(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,u=Na(o,a),f=Da(o.default,a.paired?o.share:o.enter);f!=="none"?Pr(e,u,f,null,!1)?(Gc(e),a.paired||n||kr(e,o.onEnter)):la(e.child,!1):Gc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Gh(e,n),e=e.sibling;else Gc(e)}function Vh(e){if(vi!==null&&vi.size!==0){var n=vi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=Da(a.default,a.share);if(f!=="none"&&(Pr(e,o,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,kr(e,a.onShare)):la(e.child,!1)),n.delete(o),n.size===0)break}}}Vh(e)}e=e.sibling}}}function kh(e){if(e.tag===30){var n=e.memoizedProps,a=Na(n,e.stateNode),o=vi!==null?vi.get(a):void 0,u=Da(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(Pr(e,a,u,null,!1)?o!==void 0?(u=e.stateNode,o.paired=u,u.paired=o,vi.delete(a),kr(e,n.onShare)):kr(e,n.onExit):la(e.child,!1)),vi!==null&&Vh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)kh(e),e=e.sibling;else vi!==null&&Vh(e)}function yv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Na(n,e.stateNode);n=Da(n.default,n.update),e.flags&=-5,n!=="none"&&Pr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&yv(e);e=e.sibling}}function Xh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,la(e.child,!1))}Xh(e)}e=e.sibling}}function Vc(e){if(e.tag===30)e.stateNode.paired=null,la(e.child,!1),Xh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vc(e),e=e.sibling;else Xh(e)}function Sv(e){for(e=e.child;e!==null;)e.tag===30?la(e.child,!1):(e.subtreeFlags&33554432)!==0&&Sv(e),e=e.sibling}function qh(e,n,a,o,u,f,x){for(var w=!1;n!==null;){if(n.tag===5){var H=n.stateNode;if(f!==null&&ri<f.length){var st=f[ri],pt=bd(H);(st.view||pt.view)&&(w=!0);var At;if(At=(e.flags&4)===0)if(pt.clip)At=!0;else{At=st.rect;var nt=pt.rect;At=At.y!==nt.y||At.x!==nt.x||At.height!==nt.height||At.width!==nt.width}At&&(e.flags|=4),pt.abs?pt=!st.abs:(st=st.rect,pt=pt.rect,pt=st.height!==pt.height||st.width!==pt.width),pt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&__(H,ri===0?a:a+"_"+ri,u),w&&(e.flags&4)!==0||(oa===null&&(oa=[]),oa.push(H,ri===0?o:o+"_"+ri,n.memoizedProps)),ri++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:qh(e,n.child,a,o,u,f,x)&&(w=!0));n=n.sibling}return w}function Mv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,u=Na(a,o),f=Da(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,o=e;var w=e.child;ri=0,u=qh(o,w,u,u,f,x,!1),(e.flags&4)!==0&&u&&kr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Mv(e);e=e.sibling}}var Un=!1,Ye=!1,ca=!1,jh=!1,bv=typeof WeakSet=="function"?WeakSet:Set,On=null,ua=!1,al=!1,kc=!1,Wh=!1;function k1(e,n,a){if(e=e.containerInfo,_d=$r,e=C0(e),Uf(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break t}var w=0,H=-1,st=-1,pt=0,At=0,nt=e,dt=null;e:for(;;){for(var Xt;nt!==o||f!==0&&nt.nodeType!==3||(H=w+f),nt!==x||u!==0&&nt.nodeType!==3||(st=w+u),nt.nodeType===3&&(w+=nt.nodeValue.length),(Xt=nt.firstChild)!==null;)dt=nt,nt=Xt;for(;;){if(nt===e)break e;if(dt===o&&++pt===f&&(H=w),dt===x&&++At===u&&(st=w),(Xt=nt.nextSibling)!==null)break;nt=dt,dt=nt.parentNode}nt=Xt}o=H===-1||st===-1?null:{start:H,end:st}}else o=null}o=o||{start:0,end:0}}else o=null;for(xd={focusedElem:e,selectionRange:o},$r=!1,a=(a&335544064)===a,On=n,n=a?9270:1024;On!==null;){if(e=On,a&&(o=e.deletions,o!==null))for(f=0;f<o.length;f++)a&&kh(o[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&vv(e),Xc(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&kh(o),Xc(a);continue}else if(o!==null&&o.memoizedState!==null){a&&vv(e),Xc(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,On=o):(a&&yv(e),Xc(a))}}vi=null}function Xc(e){for(;On!==null;){var n=On,a=e,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var x=Zs(n.type,u);a=f.getSnapshotBeforeUpdate(x,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(w){Qe(n,n.return,w)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)Ad(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Ad(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=Na(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=Da(u.default,u.update),u!=="none"&&Pr(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,On=o;break}On=n.return}}function Ev(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),o&4&&nl(5,a);break;case 1:if(fa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Qe(a,a.return,x)}else{var u=Zs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Qe(a,a.return,x)}}o&64&&hv(a),o&512&&ra(a,a.return);break;case 3:if(fa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{eg(e,n)}catch(x){Qe(a,a.return,x)}}break;case 27:n===null&&o&4&&gv(a);case 26:case 5:fa(e,a),n===null&&o&4&&Ih(a),o&512&&ra(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),o&4&&Rv(e,a);break;case 13:fa(e,a),o&4&&wv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eb.bind(null,a),zb(e,a))));break;case 22:if(o=a.memoizedState!==null||Un,!o){var f=n!==null&&n.memoizedState!==null||Ye;n=Un,u=Ye,Un=o,(Ye=f)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Xi(e,a,o)):fa(e,a),Un=n,Ye=u}break;case 30:fa(e,a),o&512&&ra(a,a.return);break;case 7:o&512&&ra(a,a.return);default:fa(e,a)}}function Yh(e,n){for(e=e.child;e!==null;)Tv(e,n),e=e.sibling}function Tv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(H){Qe(e,e.return,H)}Zh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ne=!0}catch(H){Qe(e,e.return,H)}break;case 18:try{var w=e.stateNode;n?v_(w,!0):v_(e.stateNode,!1)}catch(H){Qe(e,e.return,H)}break;case 22:case 23:e.memoizedState===null&&Yh(e,n);break;default:Yh(e,n)}}function Zh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,o=n;switch(a.tag){case 4:Tv(a,o);break t;case 22:a.memoizedState===null&&Zh(a,o);break t;default:Zh(a,o)}}e=e.sibling}}function Av(e){var n=e.alternate;n!==null&&(e.alternate=null,Av(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&re(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,oi=!1;function Vi(e,n,a){for(a=a.child;a!==null;)Cv(e,n,a),a=a.sibling}function Cv(e,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 26:Ye||Fn(a,n),Vi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ye&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||Fn(a,n),il(a);var o=fn,u=oi;xs(a.type)&&(fn=a.stateNode,oi=!1),Vi(e,n,a),D_(a.stateNode,a.type,a.memoizedProps),fn=o,oi=u;break;case 5:Ye||Fn(a,n),il(a);case 6:if(a.tag===6&&il(a),o=fn,u=oi,fn=null,Vi(e,n,a),fn=o,oi=u,fn!==null)if(oi)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode),Ne=!0}catch(f){Qe(a,n,f)}else try{fn.removeChild(a.stateNode),Ne=!0}catch(f){Qe(a,n,f)}break;case 18:fn!==null&&(oi?(e=fn,g_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),to(e)):g_(fn,a.stateNode));break;case 4:o=fn,u=oi,fn=a.stateNode.containerInfo,oi=!0,Vi(e,n,a),fn=o,oi=u;break;case 0:case 11:case 14:case 15:hs(2,a,n),Ye||hs(4,a,n),Vi(e,n,a);break;case 1:Ye||(Fn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dv(a,n,o)),Vi(e,n,a);break;case 21:Vi(e,n,a);break;case 22:Ye=(o=Ye)||a.memoizedState!==null,Vi(e,n,a),Ye=o;break;case 30:Fn(a,n),Vi(e,n,a);break;case 7:Ye||Fn(a,n),Vi(e,n,a);break;default:Vi(e,n,a)}}function Rv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{to(e)}catch(a){Qe(n,n.return,a)}}}function wv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(a){Qe(n,n.return,a)}}function X1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bv),n;default:throw Error(s(435,e.tag))}}function qc(e,n){var a=X1(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=nb.bind(null,e,o);o.then(u,u)}})}function ti(e,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],x=e,w=n,H=w;t:for(;H!==null;){switch(H.tag){case 27:if(xs(H.type)){fn=H.stateNode,oi=!1;break t}break;case 5:fn=H.stateNode,oi=!1;break t;case 3:case 4:fn=H.stateNode.containerInfo,oi=!0;break t}H=H.return}if(fn===null)throw Error(s(160));Cv(x,w,f),fn=null,oi=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nv(n,e,a),n=n.sibling}var ki=null;function Nv(e,n,a){var o=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var x=o[f];x.ref.impl=x.nextImpl}ti(n,e,a),ei(e),u&4&&(hs(3,e,e.return),nl(3,e),hs(5,e,e.return));break;case 1:ti(n,e,a),ei(e),u&512&&(Ye||o===null||Fn(o,o.return)),u&64&&Un&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=ki,ti(n,e,a),ei(e),u&512&&(Ye||o===null||Fn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(Un)e.stateNode=d_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[kt]||o[R]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),Hn(o,n,a),o[R]=e,we(o),n=o;break t;case"link":if(f=I_("link","href",u).get(n+(a.href||""))){for(x=0;x<f.length;x++)if(o=f[x],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(x,1);break e}}o=u.createElement(n),Hn(o,n,a),u.head.appendChild(o);break;case"meta":if(f=I_("meta","content",u).get(n+(a.content||""))){for(x=0;x<f.length;x++)if(o=f[x],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(x,1);break e}}o=u.createElement(n),Hn(o,n,a),u.head.appendChild(o);break;default:throw Error(s(468,n))}o[R]=e,we(o),n=o}e.stateNode=n}else Un||Ud(f,e.type,e.stateNode);else e.stateNode=z_(f,a,e.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||Ye||n.parentNode.removeChild(n)):u.count--,a===null?Un||Ud(f,e.type,e.stateNode):z_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Bh(e,e.memoizedProps,o.memoizedProps);break;case 27:ti(n,e,a),ei(e),u&512&&(Ye||o===null||Fn(o,o.return)),o!==null&&u&4&&Bh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(f=ca,ca=!1,ti(n,e,a),ca=f,ei(e),u&512&&(Ye||o===null||Fn(o,o.return)),e.flags&32){n=e.stateNode;try{vr(n,""),Ne=!0}catch(pt){Qe(e,e.return,pt)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Bh(e,n,o!==null?o.memoizedProps:n)),u&1024&&(jh=!0);break;case 6:if(ti(n,e,a),ei(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Ne=!0}catch(pt){Qe(e,e.return,pt)}}break;case 3:if(Ne=!1,ru=null,f=ki,ki=dl(n.containerInfo),ti(n,e,a),ki=f,ei(e),u&4&&o!==null&&o.memoizedState.isDehydrated)try{to(n.containerInfo)}catch(pt){Qe(e,e.return,pt)}jh&&(jh=!1,Dv(e)),Ne=!1;break;case 4:u=ca,ca=Un,o=qe(),f=ki,ki=dl(e.stateNode.containerInfo),ti(n,e,a),ei(e),ki=f,Ne&&al&&(kc=!0),Ne=o,ca=u;break;case 12:ti(n,e,a),ei(e);break;case 31:ti(n,e,a),ei(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qc(e,n)));break;case 13:ti(n,e,a),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Yc=Jt()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qc(e,n)));break;case 22:f=e.memoizedState!==null,x=o!==null&&o.memoizedState!==null;var w=Un,H=Ye,st=ca;Un=w||f,ca=st||f,Ye=H||x,ti(n,e,a),Ye=H,ca=st,Un=w,ei(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||x||Un||Ye||(n=x||Ye,a=Un,o=Ye,Un=f||Un,Ye=n,ds(e,2),Un=a,Ye=o),!f&&ca||Yh(e,f)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,qc(e,a))));break;case 19:ti(n,e,a),ei(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qc(e,n)));break;case 30:u&512&&(Ye||o===null||Fn(o,o.return)),u=qe(),f=al,x=(a&335544064)===a,w=e.memoizedProps,al=x&&Da(w.default,w.update)!=="none",ti(n,e,a),ei(e),x&&o!==null&&Ne&&(e.flags|=4),al=f,Ne=u;break;case 21:break;case 7:u&512&&(Ye||o===null||Fn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:ti(n,e,a),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(mv(o)){a=o;break}o=o.return}o=null;for(var u=e.return;u!==null;){if(zh(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(Ph(u))break;u=u.return}var x=o;if(a==null)throw Error(s(160));switch(a.tag){case 27:var w=a.stateNode,H=Fh(e);Fc(e,H,w,x);break;case 5:var st=a.stateNode;a.flags&32&&(vr(st,""),a.flags&=-33);var pt=Fh(e);Fc(e,pt,st,x);break;case 3:case 4:var At=a.stateNode.containerInfo,nt=Fh(e);Hh(e,nt,At,x);break;default:throw Error(s(161))}}catch(dt){Qe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,$r=!0,n.reset(),$r=!1),e=e.sibling}}function zr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Lv(n,e),n=n.sibling;else Mv(n)}function Lv(e,n){var a=e.alternate;if(a===null)Gh(e,!1);else switch(e.tag){case 3:if(Wh=ua=!1,_v(),zr(n,e),!ua&&!kc){if(e=oa,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var u=e[o+1];x_(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Wh=!0}oa=null;break;case 5:zr(n,e);break;case 4:o=ua,ua=!1,zr(n,e),ua&&(kc=!0),ua=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Gh(e,!1):zr(n,e));break;case 30:o=ua,u=_v(),ua=!1,zr(n,e),ua&&(e.flags|=4);var f=e.memoizedProps,x=e.stateNode;n=Na(f,x),x=Na(a.memoizedProps,x);var w=Da(f.default,f.update);w==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ri=0,n=qh(e,a,n,x,w,f,!0),ri!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(kr(e,e.memoizedProps.onUpdate),oa=u):u!==null&&(u.push.apply(u,oa),oa=u),ua=(e.flags&32)!==0?!0:o;break;default:zr(n,e)}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ev(e,n.alternate,n),n=n.sibling}function ds(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:hs(4,a,a.return),ds(a,o);break;case 1:Fn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&dv(a,a.return,u),ds(a,o);break;case 27:(o&2)!==0&&D_(a.stateNode,a.type,a.memoizedProps);case 5:Fn(a,a.return),a.tag!==5&&a.tag!==27||il(a),ds(a,o);break;case 6:il(a);break;case 26:Fn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ye||u.parentNode.removeChild(u),ds(a,o);break;case 22:a.memoizedState===null&&ds(a,o);break;case 30:Fn(a,a.return),ds(a,o);break;case 7:Fn(a,a.return);default:ds(a,o)}e=e.sibling}}function Xi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags,w=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Xi(u,f,a),nl(4,f);break;case 1:if(Xi(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(pt){Qe(o,o.return,pt)}if(o=f,u=o.updateQueue,u!==null){var H=o.stateNode;try{var st=u.shared.hiddenCallbacks;if(st!==null)for(u.shared.hiddenCallbacks=null,u=0;u<st.length;u++)tg(st[u],H)}catch(pt){Qe(o,o.return,pt)}}w&&x&64&&hv(f),ra(f,f.return);break;case 27:(a&2)!==0&&gv(f);case 5:f.tag!==5&&f.tag!==27||pv(f),Xi(u,f,a),w&&o===null&&x&4&&Ih(f),ra(f,f.return);break;case 6:pv(f);break;case 26:H=f.stateNode,f.memoizedState!==null||H===null||Un||Ud(dl(H.ownerDocument),f.type,H),Xi(u,f,a),w&&o===null&&x&4&&Ih(f),ra(f,f.return);break;case 12:Xi(u,f,a);break;case 31:Xi(u,f,a),w&&x&4&&Rv(u,f);break;case 13:Xi(u,f,a),w&&x&4&&wv(u,f);break;case 22:f.memoizedState===null&&Xi(u,f,a),ra(f,f.return);break;case 30:Xi(u,f,a),ra(f,f.return);break;case 7:ra(f,f.return);default:Xi(u,f,a)}n=n.sibling}}function Kh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function Jh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ko(e))}function Oi(e,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Uv(e,n,a,o),n=n.sibling;else u&&Sv(n)}function Uv(e,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Vc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n,a,o),f&2048&&nl(9,n);break;case 1:Oi(e,n,a,o);break;case 3:Oi(e,n,a,o),u&&Wh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&ko(f)));break;case 12:if(f&2048){Oi(e,n,a,o),f=n.stateNode;try{var x=n.memoizedProps,w=x.id,H=x.onPostCommit;typeof H=="function"&&H(w,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(st){Qe(n,n.return,st)}}else Oi(e,n,a,o);break;case 31:Oi(e,n,a,o);break;case 13:Oi(e,n,a,o);break;case 23:break;case 22:x=n.stateNode,w=n.alternate,n.memoizedState!==null?(u&&w!==null&&w.memoizedState===null&&Vc(w),x._visibility&2?Oi(e,n,a,o):sl(e,n)):(u&&w!==null&&w.memoizedState!==null&&Vc(n),x._visibility&2?Oi(e,n,a,o):(x._visibility|=2,Ir(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Kh(w,n);break;case 24:Oi(e,n,a,o),f&2048&&Jh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(la(f.child,!0),la(n.child,!0))),Oi(e,n,a,o);break;default:Oi(e,n,a,o)}}function Ir(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,w=a,H=o,st=x.flags;switch(x.tag){case 0:case 11:case 15:Ir(f,x,w,H,u),nl(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?Ir(f,x,w,H,u):sl(f,x):(pt._visibility|=2,Ir(f,x,w,H,u)),u&&st&2048&&Kh(x.alternate,x);break;case 24:Ir(f,x,w,H,u),u&&st&2048&&Jh(x.alternate,x);break;default:Ir(f,x,w,H,u)}n=n.sibling}}function sl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:sl(a,o),u&2048&&Kh(o.alternate,o);break;case 24:sl(a,o),u&2048&&Jh(o.alternate,o);break;default:sl(a,o)}n=n.sibling}}var Ks=8192;function Js(e,n,a){if(e.subtreeFlags&Ks)for(e=e.child;e!==null;)Ov(e,n,a),e=e.sibling}function Ov(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&Ks&&(e.memoizedState!==null?Kb(a,ki,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&G_(a,e)));break;case 5:Js(e,n,a),e.flags&Ks&&(e=e.stateNode,(n&335544128)===n&&G_(a,e));break;case 3:case 4:var o=ki;ki=dl(e.stateNode.containerInfo),Js(e,n,a),ki=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ks,Ks=16777216,Js(e,n,a),Ks=o):Js(e,n,a));break;case 30:if((e.flags&Ks)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var u=e.stateNode;u.paired=null,vi===null&&(vi=new Map),vi.set(o,u)}Js(e,n,a);break;default:Js(e,n,a)}}function Pv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Iv(o,e)}Pv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zv(e),e=e.sibling}function zv(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&hs(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jc(e)):rl(e);break;default:rl(e)}}function jc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Iv(o,e)}Pv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:hs(8,n,n.return),jc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jc(n));break;default:jc(n)}e=e.sibling}}function Iv(e,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:hs(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ko(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else t:for(a=e;On!==null;){o=On;var u=o.sibling,f=o.return;if(Av(o),o===a){On=null;break t}if(u!==null){u.return=f,On=u;break t}On=f}}}var q1={getCacheForType:function(e){var n=zn(yn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zn(yn).controller.signal}},j1=typeof WeakMap=="function"?WeakMap:Map,je=0,sn=null,Pe=null,Be=0,Je=0,_i=null,ps=!1,Br=!1,Qh=!1,Ha=0,_n=0,ms=0,Qs=0,Wc=0,xi=0,Fr=0,ol=null,li=null,$h=!1,Yc=0,Bv=0,Zc=1/0,Kc=null,gs=null,hn=0,qi=null,$s=null,ha=0,td=0,ed=null,Fv=null,Hr=null,Gr=null,Vr=null,ll=0,Jc=null;function yi(){return(je&2)!==0&&Be!==0?Be&-Be:_t.T!==null?fd():Zl()}function Hv(){if(xi===0)if((Be&536870912)===0||De){var e=Aa;Aa<<=1,(Aa&3932160)===0&&(Aa=262144),xi=e}else xi=536870912;return e=In.current,e!==null&&(e.flags|=32),xi}function kr(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=y_(Na(e.memoizedProps,a))),Gr===null&&(Gr=[]),Gr.push(n.bind(null,o))}}function ci(e,n,a){(e===sn&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),vs(e,Be,xi,!1)),ea(e,a),((je&2)===0||e!==sn)&&(e===sn&&((je&2)===0&&(Qs|=a),_n===4&&vs(e,Be,xi,!1)),da(e))}function Gv(e,n,a){if((je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Kn(e,n),u=o?Z1(e,n):id(e,n,!0),f=o;do{if(u===0){Br&&!o&&vs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!W1(a)){u=id(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var w=e;u=ol;var H=w.current.memoizedState.isDehydrated;if(H&&(Xr(w,x).flags|=256),x=id(w,x,!1),x!==2&&x!==6){if(Qh&&!H){w.errorRecoveryDisabledLanes|=f,Qs|=f,u=4;break t}f=li,li=u,f!==null&&(li===null?li=f:li.push.apply(li,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Xr(e,0),vs(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:vs(o,n,xi,!ps);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yc+300-Jt(),10<u)){if(vs(o,n,xi,!ps),cn(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=Md(Vv.bind(null,o,a,li,Kc,$h,n,xi,Qs,Fr,ps,f,"Throttled",-0,0),u);break t}Vv(o,a,li,Kc,$h,n,xi,Qs,Fr,ps,f,null,-0,0)}}break}while(!0);da(e)}function Vv(e,n,a,o,u,f,x,w,H,st,pt,At,nt,dt){e.timeoutHandle=-1;var Xt=n.subtreeFlags,oe=(f&335544064)===f;if(At=null,(oe||Xt&8192||(Xt&16785408)===16785408)&&(At={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},vi=null,Ov(n,f,At),oe&&(Xt=At,oe=e.containerInfo,oe=(oe.nodeType===9?oe:oe.ownerDocument).__reactViewTransition,oe!=null&&(Xt.count++,Xt.waitingForViewTransition=!0,Xt=gl.bind(Xt),oe.finished.then(Xt,Xt))),Xt=(f&62914560)===f?Yc-Jt():(f&4194048)===f?Bv-Jt():0,Xt=Jb(At,Xt),Xt!==null)){ha=f,e.cancelPendingCommit=Xt(Kv.bind(null,e,n,f,a,o,u,x,w,H,st,pt,At,null,nt,dt)),vs(e,f,x,!st);return}Kv(e,n,f,a,o,u,x,w,H,st,pt,At)}function W1(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!mi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vs(e,n,a,o){n=Xn(e,n),n&=~Wc,n&=~Qs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-xe(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&Os(e,a,n)}function Qc(){return(je&6)===0?(cl(0),!1):!0}function nd(){if(Pe!==null){if(Je===0)var e=Pe.return;else e=Pe,Oa=Hs=null,uh(e),Nr=null,jo=0,e=Pe;for(;e!==null;)fv(e.alternate,e),e=e.return;Pe=null}}function Xr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,vb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,nd(),sn=e,Pe=a=La(e.current,null),Be=n,Je=0,_i=null,ps=!1,Br=Kn(e,n),Qh=!1,Fr=xi=Wc=Qs=ms=_n=0,li=ol=null,$h=!1,Ha=Xn(e,n),rc(),a}function kv(e,n){Te=null,_t.H=Dc,n===wr||n===vc?(n=K0(),Je=3):n===Jf?(n=K0(),Je=4):Je=n===Th?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_i=n,Pe===null&&(_n=1,Lc(e,Ni(n,e.current)))}function Xv(){var e=In.current;return e===null?!0:(Be&4194048)===Be?qn===null:(Be&62914560)===Be||(Be&536870912)!==0?e===qn:!1}function qv(){var e=_t.H;return _t.H=Dc,e===null?Dc:e}function jv(){var e=_t.A;return _t.A=q1,e}function $c(){_n=4,ps||(Be&4194048)!==Be&&In.current!==null||(Br=!0),(ms&134217727)===0&&(Qs&134217727)===0||sn===null||vs(sn,Be,xi,!1)}function id(e,n,a){var o=je;je|=2;var u=qv(),f=jv();(sn!==e||Be!==n)&&(Kc=null,Xr(e,n)),n=!1;var x=_n;t:do try{if(Je!==0&&Pe!==null){var w=Pe,H=_i;switch(Je){case 8:nd(),x=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(n=!0);var st=Je;if(Je=0,_i=null,qr(e,w,H,st),a&&Br){x=0;break t}break;default:st=Je,Je=0,_i=null,qr(e,w,H,st)}}Y1(),x=_n;break}catch(pt){kv(e,pt)}while(!0);return n&&e.shellSuspendCounter++,Oa=Hs=null,je=o,_t.H=u,_t.A=f,Pe===null&&(sn=null,Be=0,rc()),x}function Y1(){for(;Pe!==null;)Wv(Pe)}function Z1(e,n){var a=je;je|=2;var o=qv(),u=jv();sn!==e||Be!==n?(Kc=null,Zc=Jt()+500,Xr(e,n)):Br=Kn(e,n);t:do try{if(Je!==0&&Pe!==null){n=Pe;var f=_i;e:switch(Je){case 1:Je=0,_i=null,qr(e,n,f,1);break;case 2:case 9:if(Y0(f)){Je=0,_i=null,Yv(n);break}n=function(){Je!==2&&Je!==9||sn!==e||(Je=7),da(e)},f.then(n,n);break t;case 3:Je=7;break t;case 4:Je=5;break t;case 7:Y0(f)?(Je=0,_i=null,Yv(n)):(Je=0,_i=null,qr(e,n,f,7));break;case 5:var x=null;switch(Pe.tag){case 26:x=Pe.memoizedState;case 5:case 27:var w=Pe;if(x?F_(x):w.stateNode.complete){Je=0,_i=null;var H=w.sibling;if(H!==null)Pe=H;else{var st=w.return;st!==null?(Pe=st,tu(st)):Pe=null}break e}}Je=0,_i=null,qr(e,n,f,5);break;case 6:Je=0,_i=null,qr(e,n,f,6);break;case 8:nd(),_n=6;break t;default:throw Error(s(462))}}K1();break}catch(pt){kv(e,pt)}while(!0);return Oa=Hs=null,_t.H=o,_t.A=u,je=a,Pe!==null?0:(sn=null,Be=0,rc(),_n)}function K1(){for(;Pe!==null&&!qt();)Wv(Pe)}function Wv(e){var n=cv(e.alternate,e,Ha);e.memoizedProps=e.pendingProps,n===null?tu(e):Pe=n}function Yv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=nv(a,n,n.pendingProps,n.type,void 0,Be);break;case 11:n=nv(a,n,n.pendingProps,n.type.render,n.ref,Be);break;case 5:uh(n);var o=n;o===Ln&&(De?(hc(o),o.tag===5&&o.stateNode!=null&&(on=o.stateNode)):(hc(o),De=!0));default:fv(a,n),n=Pe=I0(n,Ha),n=cv(a,n,Ha)}e.memoizedProps=e.pendingProps,n===null?tu(e):Pe=n}function qr(e,n,a,o){Oa=Hs=null,uh(n),Nr=null,jo=0;var u=n.return;try{if(I1(e,u,n,a,Be)){_n=1,Lc(e,Ni(a,e.current)),Pe=null;return}}catch(f){if(u!==null)throw Pe=u,f;_n=1,Lc(e,Ni(a,e.current)),Pe=null;return}n.flags&32768?(De||o===1?e=!0:Br||(Be&536870912)!==0?e=!1:(ps=e=!0,(o===2||o===9||o===3||o===6)&&(o=In.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zv(n,e)):tu(n)}function tu(e){var n=e;do{if((n.flags&32768)!==0){Zv(n,ps);return}e=n.return;var a=G1(n.alternate,n,Ha);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);_n===0&&(_n=5)}function Zv(e,n){do{var a=V1(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);_n=6,Pe=null}function Kv(e,n,a,o,u,f,x,w,H,st,pt,At){e.cancelPendingCommit=null;do eu();while(hn!==0);if((je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===sn&&(Pe=sn=null,Be=0),$s=n,qi=e,ha=a,ed=u,Fv=o,J1(e,n,a,x,w,H,At)}}function J1(e,n,a,o,u,f,x){var w=n.lanes|n.childLanes;if(td=w,w|=Bf,Yl(e,a,w,o,u,f),Gr=null,(a&335544064)===a?(Vr=T1(e),o=10262):(Vr=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,ib(Ft,function(){return od(),null})):(e.callbackNode=null,e.callbackPriority=0),Hc=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=_t.T,_t.T=null,u=Nt.p,Nt.p=2,f=je,je|=4;try{k1(e,n,a)}finally{je=f,Nt.p=u,_t.T=o}}hn=1,Hc?Hr=bb(x,e.containerInfo,Vr,ad,sd,$1,rd,od,Q1):(ad(),sd(),rd())}function Q1(e){if(hn!==0){var n=qi.onRecoverableError;n(e,{componentStack:null})}}function $1(){hn===3&&(hn=0,Lv($s,qi),hn=4)}function ad(){if(hn===1){hn=0;var e=qi,n=$s,a=ha,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=_t.T,_t.T=null;var u=Nt.p;Nt.p=2;var f=je;je|=4;try{al=kc=!1,Nv(n,e,a),a=xd;var x=C0(e.containerInfo),w=a.focusedElem,H=a.selectionRange;if(x!==w&&w&&w.ownerDocument&&A0(w.ownerDocument.documentElement,w)){if(H!==null&&Uf(w)){var st=H.start,pt=H.end;if(pt===void 0&&(pt=st),"selectionStart"in w)w.selectionStart=st,w.selectionEnd=Math.min(pt,w.value.length);else{var At=w.ownerDocument||document,nt=At&&At.defaultView||window;if(nt.getSelection){var dt=nt.getSelection(),Xt=w.textContent.length,oe=Math.min(H.start,Xt),Ae=H.end===void 0?oe:Math.min(H.end,Xt);!dt.extend&&oe>Ae&&(x=Ae,Ae=oe,oe=x);var at=T0(w,oe),K=T0(w,Ae);if(at&&K&&(dt.rangeCount!==1||dt.anchorNode!==at.node||dt.anchorOffset!==at.offset||dt.focusNode!==K.node||dt.focusOffset!==K.offset)){var lt=At.createRange();lt.setStart(at.node,at.offset),dt.removeAllRanges(),oe>Ae?(dt.addRange(lt),dt.extend(K.node,K.offset)):(lt.setEnd(K.node,K.offset),dt.addRange(lt))}}}}for(At=[],dt=w;dt=dt.parentNode;)dt.nodeType===1&&At.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<At.length;w++){var Tt=At[w];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}$r=!!_d,xd=_d=null}finally{je=f,Nt.p=u,_t.T=o}}e.current=n,hn=2}}function sd(){if(hn===2){hn=0;var e=qi,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var o=Nt.p;Nt.p=2;var u=je;je|=4;try{Ev(e,n.alternate,n)}finally{je=u,Nt.p=o,_t.T=a}}hn=3}}function rd(){if(hn===4||hn===3){hn=0;var e=Hr;Hr=null,Vt();var n=qi,a=$s,o=ha,u=Fv,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?hn=5:(hn=0,$s=qi=null,Jv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(gs=null),Do(o),a=a.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(ie,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=_t.T,f=Nt.p,Nt.p=2,_t.T=null;try{for(var x=n.onRecoverableError,w=0;w<u.length;w++){var H=u[w];x(H.value,{componentStack:H.stack})}}finally{_t.T=a,Nt.p=f}}if(u=Gr,x=Vr,Vr=null,u!==null&&(Gr=null,x===null&&(x=[]),e!==null))for(H=0;H<u.length;H++)a=(0,u[H])(x),a!==void 0&&e.finished.finally(a);(ha&3)!==0&&eu(),da(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===Jc?ll++:(ll=0,Jc=n):(ll=0,Jc=null),cl(0)}}function Jv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ko(n)))}function eu(){return Hr!==null&&(Hr.skipTransition(),Hr=null),ad(),sd(),rd(),od()}function od(){if(hn!==5)return!1;var e=qi,n=td;td=0;var a=Do(ha),o=_t.T,u=Nt.p;try{Nt.p=32>a?32:a,_t.T=null,a=ed,ed=null;var f=qi,x=ha;if(hn=0,$s=qi=null,ha=0,(je&6)!==0)throw Error(s(331));var w=je;if(je|=4,zv(f.current),Uv(f,f.current,x,a),je=w,cl(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(ie,f)}catch{}return!0}finally{Nt.p=u,_t.T=o,Jv(e,n)}}function Qv(e,n,a){n=Ni(a,n),n=Eh(e.stateNode,n,2),e=ls(e,n,2),e!==null&&(ea(e,2),da(e))}function Qe(e,n,a){if(e.tag===3)Qv(e,e,a);else for(;n!==null;){if(n.tag===3){Qv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(gs===null||!gs.has(o))){e=Ni(a,e),a=Yg(2),o=ls(n,a,2),o!==null&&(Zg(a,o,n,e),ea(o,2),da(o));break}}n=n.return}}function ld(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new j1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Qh=!0,u.add(a),e=tb.bind(null,e,n,a),n.then(e,e))}function tb(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,sn===e&&(Be&a)===a&&((_n===4||_n===3&&(Be&62914560)===Be&&300>Jt()-Yc)&&(je&2)===0?Xr(e,0):Wc|=a,Fr===Be&&(Fr=0)),da(e)}function $v(e,n){n===0&&(n=ta()),e=Is(e,n),e!==null&&(ea(e,n),da(e))}function eb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),$v(e,a)}function nb(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),$v(e,a)}function ib(e,n){return Bt(e,n)}var jr=null,Wr=null,cd=!1,nu=!1,ud=!1,_s=0;function da(e){e!==Wr&&e.next===null&&(Wr===null?jr=Wr=e:Wr=Wr.next=e),nu=!0,cd||(cd=!0,sb())}function cl(e,n){if(!ud&&nu){ud=!0;do for(var a=!1,o=jr;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-xe(42|e)+1)-1,f&=u&~(x&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,i_(o,f))}else f=Be,f=cn(o,o===sn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Kn(o,f)||(a=!0,i_(o,f));o=o.next}while(a);ud=!1}}function ab(){t_()}function t_(){nu=cd=!1;var e=0;_s!==0&&gb()&&(e=_s);for(var n=Jt(),a=null,o=jr;o!==null;){var u=o.next,f=e_(o,n);f===0?(o.next=null,a===null?jr=u:a.next=u,u===null&&(Wr=a)):(a=o,(e!==0||(f&3)!==0)&&(nu=!0)),o=u}hn!==0&&hn!==5||cl(e),_s!==0&&(_s=0)}function e_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-xe(f),w=1<<x,H=u[x];H===-1?((w&a)===0||(w&o)!==0)&&(u[x]=Hi(w,n)):H<=n&&(e.expiredLanes|=w),f&=~w}if(n=sn,a=Be,a=cn(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ce(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kn(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ce(o),Do(a)){case 2:case 8:a=et;break;case 32:a=Ft;break;case 268435456:a=Ht;break;default:a=Ft}return o=n_.bind(null,e),a=Bt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ce(o),e.callbackPriority=2,e.callbackNode=null,2}function n_(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(eu()&&e.callbackNode!==a)return null;var o=Be;return o=cn(e,e===sn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Gv(e,o,n),e_(e,Jt()),e.callbackNode!=null&&e.callbackNode===a?n_.bind(null,e):null)}function i_(e,n){if(eu())return null;Gv(e,n,!0)}function sb(){_b(function(){(je&6)!==0?Bt(ve,ab):t_()})}function fd(){if(_s===0){var e=ks;e===0&&(e=Ta,Ta<<=1,(Ta&261888)===0&&(Ta=256)),_s=e}return _s}function a_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ql(e)}function rb(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=a_((u[Z]||null).action),x=o.submitter;x&&(n=(n=x[Z]||null)?a_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var w=new nc("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_s!==0){var H=new FormData(u,x);xh(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(w.preventDefault(),H=new FormData(u,x),xh(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var hd=0;hd<If.length;hd++){var dd=If[hd],ob=dd.toLowerCase(),lb=dd[0].toUpperCase()+dd.slice(1);Gi(ob,"on"+lb)}Gi(N0,"onAnimationEnd"),Gi(D0,"onAnimationIteration"),Gi(L0,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(v1,"onTransitionRun"),Gi(_1,"onTransitionStart"),Gi(x1,"onTransitionCancel"),Gi(U0,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function s_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var w=o[x],H=w.instance,st=w.currentTarget;if(w=w.listener,H!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=st;try{f(u)}catch(pt){sc(pt)}u.currentTarget=null,f=H}else for(x=0;x<o.length;x++){if(w=o[x],H=w.instance,st=w.currentTarget,w=w.listener,H!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=st;try{f(u)}catch(pt){sc(pt)}u.currentTarget=null,f=H}}}}function ze(e,n){var a=n[ft];a===void 0&&(a=n[ft]=new Set);var o=e+"__bubble";a.has(o)||(r_(n,e,2,!1),a.add(o))}function pd(e,n,a){var o=0;n&&(o|=4),r_(a,e,o,n)}var iu="_reactListening"+Math.random().toString(36).slice(2);function md(e){if(!e[iu]){e[iu]=!0,We.forEach(function(a){a!=="selectionchange"&&(cb.has(a)||pd(a,!1,e),pd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[iu]||(n[iu]=!0,pd("selectionchange",!1,n))}}function r_(e,n,a,o){switch(Z_(n)){case 2:var u=eE;break;case 8:u=nE;break;default:u=Pd}a=u.bind(null,n,a,e),u=void 0,!bf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function gd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var w=o.stateNode.containerInfo;if(w===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;w!==null;){if(x=_e(w),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=f=x;continue t}w=w.parentNode}}o=o.return}r0(function(){var st=f,pt=Sf(a),At=[];t:{var nt=O0.get(e);if(nt!==void 0){var dt=nc,Xt=e;switch(e){case"keypress":if(tc(a)===0)break t;case"keydown":case"keyup":dt=WM;break;case"focusin":Xt="focus",dt=Cf;break;case"focusout":Xt="blur",dt=Cf;break;case"beforeblur":case"afterblur":dt=Cf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=c0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=PM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=QM;break;case N0:case D0:case L0:dt=BM;break;case U0:dt=t1;break;case"scroll":case"scrollend":dt=UM;break;case"wheel":dt=n1;break;case"copy":case"cut":case"paste":dt=HM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=f0;break;case"submit":dt=KM;break;case"toggle":case"beforetoggle":dt=a1}var oe=(n&4)!==0,Ae=!oe&&(e==="scroll"||e==="scrollend"),at=oe?nt!==null?nt+"Capture":null:nt;oe=[];for(var K=st,lt;K!==null;){var Tt=K;if(lt=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||lt===null||at===null||(Tt=Lo(K,at),Tt!=null&&oe.push(fl(K,Tt,lt))),Ae)break;K=K.return}0<oe.length&&(nt=new dt(nt,Xt,null,a,pt),At.push({event:nt,listeners:oe}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",nt=e==="mouseout"||e==="pointerout",dt&&a!==yf&&(Xt=a.relatedTarget||a.fromElement)&&(_e(Xt)||Xt[mt]))break t;(nt||dt)&&(Xt=pt.window===pt?pt:(dt=pt.ownerDocument)?dt.defaultView||dt.parentWindow:window,nt?(dt=a.relatedTarget||a.toElement,nt=st,dt=dt?_e(dt):null,dt!==null&&(Ae=c(dt),oe=dt.tag,dt!==Ae||oe!==5&&oe!==27&&oe!==6)&&(dt=null)):(nt=null,dt=st),nt!==dt&&(oe=c0,Tt="onMouseLeave",at="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(oe=f0,Tt="onPointerLeave",at="onPointerEnter",K="pointer"),Ae=nt==null?Xt:te(nt),lt=dt==null?Xt:te(dt),Xt=new oe(Tt,K+"leave",nt,a,pt),Xt.target=Ae,Xt.relatedTarget=lt,Tt=null,_e(pt)===st&&(oe=new oe(at,K+"enter",dt,a,pt),oe.target=lt,oe.relatedTarget=Ae,Tt=oe),Ae=Tt,oe=nt&&dt?N(nt,dt,ub):null,nt!==null&&o_(At,Xt,nt,oe,!1),dt!==null&&Ae!==null&&o_(At,Ae,dt,oe,!0)))}t:{if(nt=st?te(st):window,dt=nt.nodeName&&nt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&nt.type==="file")var ee=x0;else if(v0(nt))if(y0)ee=p1;else{ee=h1;var Fe=f1}else dt=nt.nodeName,!dt||dt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?st&&xf(st.elementType)&&(ee=x0):ee=d1;if(ee&&(ee=ee(e,st))){_0(At,ee,a,pt);break t}Fe&&Fe(e,nt,st)}switch(Fe=st?te(st):window,e){case"focusin":(v0(Fe)||Fe.contentEditable==="true")&&(Sr=Fe,Of=st,Ho=null);break;case"focusout":Ho=Of=Sr=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,R0(At,a,pt);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":R0(At,a,pt)}var ue;if(wf)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else yr?m0(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(h0&&a.locale!=="ko"&&(yr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&yr&&(ue=o0()):($a=pt,Ef="value"in $a?$a.value:$a.textContent,yr=!0)),Fe=au(st,pe),0<Fe.length&&(pe=new u0(pe,e,null,a,pt),At.push({event:pe,listeners:Fe}),ue?pe.data=ue:(ue=g0(a),ue!==null&&(pe.data=ue)))),(ue=r1?o1(e,a):l1(e,a))&&(pe=au(st,"onBeforeInput"),0<pe.length&&(Fe=new u0("onBeforeInput","beforeinput",null,a,pt),At.push({event:Fe,listeners:pe}),Fe.data=ue)),rb(At,e,st,a,pt)}s_(At,n)})}function fl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function au(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Lo(e,a),u!=null&&o.unshift(fl(e,u,f)),u=Lo(e,n),u!=null&&o.push(fl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ub(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o_(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var w=a,H=w.alternate,st=w.stateNode;if(w=w.tag,H!==null&&H===o)break;w!==5&&w!==26&&w!==27||st===null||(H=st,u?(st=Lo(a,f),st!=null&&x.unshift(fl(a,st,H))):u||(st=Lo(a,f),st!=null&&x.push(fl(a,st,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var fb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function l_(e){return(typeof e=="string"?e:""+e).replace(fb,`
`).replace(hb,"")}function c_(e,n){return n=l_(n),l_(e)===n}function $e(e,n,a,o,u,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||vr(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&vr(e,""+o);else return;break;case"className":pi(e,"class",o);break;case"tabIndex":pi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(e,a,o);break;case"style":a0(e,o,f);return;case"data":if(n!=="object"){pi(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ql(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&$e(e,n,"name",u.name,u,null),$e(e,n,"formEncType",u.formEncType,u,null),$e(e,n,"formMethod",u.formMethod,u,null),$e(e,n,"formTarget",u.formTarget,u,null)):($e(e,n,"encType",u.encType,u,null),$e(e,n,"method",u.method,u,null),$e(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ql(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ia);return;case"onScroll":o!=null&&ze("scroll",e);return;case"onScrollEnd":o!=null&&ze("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ql(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ze("beforetoggle",e),ze("toggle",e),rn(e,"popover",o);break;case"xlinkActuate":Ie(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ie(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ie(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ie(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ie(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ie(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ie(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ie(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ie(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":rn(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=DM.get(a)||a,rn(e,a,o);else return}Ne=!0}function vd(e,n,a,o,u,f){switch(a){case"style":a0(e,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")vr(e,o);else if(typeof o=="number"||typeof o=="bigint")vr(e,""+o);else return;break;case"onScroll":o!=null&&ze("scroll",e);return;case"onScrollEnd":o!=null&&ze("scrollend",e);return;case"onClick":o!=null&&(e.onclick=ia);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!An.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=e[Z]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,o,u);break t}Ne=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):rn(e,a,o)}return}Ne=!0}function Hn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$e(e,n,f,x,a,null)}}u&&$e(e,n,"srcSet",a.srcSet,a,null),o&&$e(e,n,"src",a.src,a,null);return;case"input":ze("invalid",e);var w=f=x=u=null,H=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":x=pt;break;case"checked":H=pt;break;case"defaultChecked":st=pt;break;case"value":f=pt;break;case"defaultValue":w=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:$e(e,n,o,pt,a,null)}}t0(e,f,w,H,st,x,u,!1);return;case"select":ze("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":o=w;default:$e(e,n,u,w,a,null)}n=f,a=x,e.multiple=!!o,n!=null?gr(e,!!o,n,!1):a!=null&&gr(e,!!o,a,!0);return;case"textarea":ze("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":o=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:$e(e,n,x,w,a,null)}n0(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:$e(e,n,H,o,a,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(o=0;o<ul.length;o++)ze(ul[o],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$e(e,n,st,o,a,null)}return;default:if(xf(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&vd(e,n,pt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&$e(e,n,w,o,a,null))}var db={};function pb(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,w=null,H=null,st=null,pt=null;for(dt in a){var At=a[dt];if(a.hasOwnProperty(dt)&&At!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":H=At;default:o.hasOwnProperty(dt)||$e(e,n,dt,null,o,At)}}for(var nt in o){var dt=o[nt];if(At=a[nt],o.hasOwnProperty(nt)&&(dt!=null||At!=null))switch(nt){case"type":dt!==At&&(Ne=!0),f=dt;break;case"name":dt!==At&&(Ne=!0),u=dt;break;case"checked":dt!==At&&(Ne=!0),st=dt;break;case"defaultChecked":dt!==At&&(Ne=!0),pt=dt;break;case"value":dt!==At&&(Ne=!0),x=dt;break;case"defaultValue":dt!==At&&(Ne=!0),w=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==At&&$e(e,n,nt,dt,o,At)}}vf(e,x,w,H,st,pt,f,u);return;case"select":dt=x=w=nt=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":dt=H;default:o.hasOwnProperty(f)||$e(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":f!==H&&(Ne=!0),nt=f;break;case"defaultValue":f!==H&&(Ne=!0),w=f;break;case"multiple":f!==H&&(Ne=!0),x=f;default:f!==H&&$e(e,n,u,f,o,H)}n=w,a=x,o=dt,nt!=null?gr(e,!!a,nt,!1):!!o!=!!a&&(n!=null?gr(e,!!a,n,!0):gr(e,!!a,a?[]:"",!1));return;case"textarea":dt=nt=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:$e(e,n,w,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":u!==f&&(Ne=!0),nt=u;break;case"defaultValue":u!==f&&(Ne=!0),dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&$e(e,n,x,u,o,f)}e0(e,nt,dt);return;case"option":for(var Xt in a)if(nt=a[Xt],a.hasOwnProperty(Xt)&&nt!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:$e(e,n,Xt,null,o,nt)}for(H in o)if(nt=o[H],dt=a[H],o.hasOwnProperty(H)&&nt!==dt&&(nt!=null||dt!=null))switch(H){case"selected":nt!==dt&&(Ne=!0),e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:$e(e,n,H,nt,o,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)nt=a[oe],a.hasOwnProperty(oe)&&nt!=null&&!o.hasOwnProperty(oe)&&$e(e,n,oe,null,o,nt);for(st in o)if(nt=o[st],dt=a[st],o.hasOwnProperty(st)&&nt!==dt&&(nt!=null||dt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:$e(e,n,st,nt,o,dt)}return;default:if(xf(n)){for(var Ae in a)nt=a[Ae],a.hasOwnProperty(Ae)&&nt!==void 0&&!o.hasOwnProperty(Ae)&&vd(e,n,Ae,void 0,o,nt);for(pt in o)nt=o[pt],dt=a[pt],!o.hasOwnProperty(pt)||nt===dt||nt===void 0&&dt===void 0||vd(e,n,pt,nt,o,dt);return}}for(var at in a)nt=a[at],a.hasOwnProperty(at)&&nt!=null&&!o.hasOwnProperty(at)&&$e(e,n,at,null,o,nt);for(At in o)nt=o[At],dt=a[At],!o.hasOwnProperty(At)||nt===dt||nt==null&&dt==null||$e(e,n,At,nt,o,dt)}function u_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,w=u.duration;if(f&&w&&u_(x)){for(x=0,w=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],st=H.startTime;if(st>w)break;var pt=H.transferSize,At=H.initiatorType;pt&&u_(At)&&(H=H.responseEnd,x+=pt*(H<w?1:(w-st)/(H-st)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _d=null,xd=null;function hl(e){return e.nodeType===9?e:e.ownerDocument}function f_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function d_(e,n,a,o){return a=hl(a).createElement(e),a[R]=o,a[Z]=n,Hn(a,e,n),we(a),a}function yd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sd=null;function gb(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var Md=typeof setTimeout=="function"?setTimeout:void 0,vb=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,m_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Md,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(e){return p_.resolve(null).then(e).catch(xb)}:Md;function xb(e){setTimeout(function(){throw e})}function xs(e){return e==="head"}function g_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),to(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Nd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Nd(a);for(var f=a.firstChild;f;){var x=f.nextSibling,w=f.nodeName;f[kt]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Nd(e.ownerDocument.body);a=u}while(a);to(n)}function v_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function __(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function x_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function yb(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function bd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return yb(n,a,e)}function Sb(e){return e.documentElement.clientHeight}function Mb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function bb(e,n,a,o,u,f,x,w,H){var st=n.nodeType===9?n:n.ownerDocument;try{var pt=st.startViewTransition({update:function(){var nt=st.defaultView,dt=nt.navigation&&nt.navigation.transition,Xt=st.fonts.status;o();var oe=[];if(Xt==="loaded"&&(Sb(st),st.fonts.status==="loading"&&oe.push(st.fonts.ready)),Xt=oe.length,e!==null)for(var Ae=e.suspenseyImages,at=0,K=0;K<Ae.length;K++){var lt=Ae[K];if(!lt.complete){var Tt=lt.getBoundingClientRect();if(0<Tt.bottom&&0<Tt.right&&Tt.top<nt.innerHeight&&Tt.left<nt.innerWidth){if(at+=H_(lt),at>ou){oe.length=Xt;break}lt=new Promise(Mb.bind(lt)),oe.push(lt)}}}if(0<oe.length)return nt=Promise.race([Promise.all(oe),new Promise(function(ee){return setTimeout(ee,500)})]).then(u,u),(dt?Promise.allSettled([dt.finished,nt]):nt).then(f,f);if(u(),dt)return dt.finished.then(f,f);f()},types:a});st.__reactViewTransition=pt;var At=[];return pt.ready.then(function(){for(var nt=st.documentElement.getAnimations({subtree:!0}),dt=0;dt<nt.length;dt++){var Xt=nt[dt],oe=Xt.effect,Ae=oe.pseudoElement;if(Ae!=null&&Ae.startsWith("::view-transition")){At.push(Xt),Xt=oe.getKeyframes();for(var at=Ae=void 0,K=!0,lt=0;lt<Xt.length;lt++){var Tt=Xt[lt],ee=Tt.width;if(Ae===void 0)Ae=ee;else if(Ae!==ee){K=!1;break}if(ee=Tt.height,at===void 0)at=ee;else if(at!==ee){K=!1;break}delete Tt.width,delete Tt.height,Tt.transform==="none"&&delete Tt.transform}K&&Ae!==void 0&&at!==void 0&&(oe.setKeyframes(Xt),K=getComputedStyle(oe.target,oe.pseudoElement),K.width!==Ae||K.height!==at)&&(K=Xt[0],K.width=Ae,K.height=at,K=Xt[Xt.length-1],K.width=Ae,K.height=at,oe.setKeyframes(Xt))}}x()},function(nt){st.__reactViewTransition===pt&&(st.__reactViewTransition=null);try{if(typeof nt=="object"&&nt!==null)switch(nt.name){case"InvalidStateError":(nt.message==="View transition was skipped because document visibility state is hidden."||nt.message==="Skipping view transition because document visibility state has become hidden."||nt.message==="Skipping view transition because viewport size changed."||nt.message==="Transition was aborted because of invalid state")&&(nt=null)}nt!==null&&H(nt)}finally{o(),u(),x()}}),pt.finished.finally(function(){for(var nt=0;nt<At.length;nt++)At[nt].cancel();st.__reactViewTransition===pt&&(st.__reactViewTransition=null),w()}),pt}catch{return o(),u(),x(),null}}function tr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}tr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:U({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},tr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&o.push(a[u])}return o},tr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function y_(e){return{name:e,group:new tr("group",e),imagePair:new tr("image-pair",e),old:new tr("old",e),new:new tr("new",e)}}function Si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Si.prototype.addEventListener=function(e,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(M_(f,e,n,a)===-1){var x=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(H){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,H):n.handleEvent(H)}),o!==null&&(u=x.removeEventListener.bind(x,e,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=Yr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:u}),g(this._fragmentFiber.child,!1,Eb,e,w,o)}this._eventListeners=f}};function Eb(e,n,a,o){return M(e).addEventListener(n,a,o),!1}Si.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=M_(o,e,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var f=u.cleanup;u=Yr(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,Tb,e,a,u),o.splice(n,1),f!==null&&f()}};function Tb(e,n,a,o){return M(e).removeEventListener(n,a,o),!1}function Yr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function S_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function M_(e,n,a,o){if(e.length===0)return-1;o=S_(o);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===a&&S_(f.optionsOrUseCapture)===o)return u}return-1}Si.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];o.addEventListener(f.type,f.attachedListener,Yr(f.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(u=0;u<a.length;u++)f=a[u],o.removeEventListener(f.type,f.attachedListener,Yr(f.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},Si.prototype.focus=function(e){g(this._fragmentFiber.child,!0,b_,e,void 0,void 0)};function b_(e,n){return e.tag===6?!1:(e=M(e),Ib(e,n))}Si.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Ed,n,void 0,void 0);for(var a=n.length-1;0<=a&&!b_(n[a],e);a--);};function Ed(e,n){return n.push(e),!1}Si.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=M(e),e=hl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,Ab,e,void 0,void 0))};function Ab(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,Cb,e,void 0,void 0)};function Cb(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}Si.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,Rb,e,void 0,void 0);for(var a=n=0;a<ji.length;a++){var o=ji[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):ji[n++]=o}ji.length=n}};function Rb(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var ji=[],Td=!1;function wb(e,n,a){ji.push({fragmentInstance:e,observer:n,instance:a}),Td||(Td=!0,Bb(function(){Td=!1;var o=ji;ji=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}Si.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,Nb,e,void 0,void 0),e};function Nb(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}Si.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},Si.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Ed,a,void 0,void 0);var o=M(n);if(a.length===0){if(a=o,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),w=u.compareDocumentPosition(e),H=x&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=o&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||f&&u===e||H||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Db(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Db(e,n,a,o,u){var f=_e(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=N(a,f,z),n===null?n=!1:(g(n,!0,D,f,a),f=y,y=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=N(o,f,z),n===null?n=!1:(g(n,!0,C,f,o),f=y,O=y=null,n=f!==null)),n):!1}function E_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Ed,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=T(this._fragmentFiber);if(o=a?o[1]||o[0]||v(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=M(o),E_(e,a);return}if(o=M(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=M(u),E_(u,a)):M(u).scrollIntoView(e),o+=a?-1:1}};function Lb(e,n){return e=M(e),T_(e,n),!1}function T_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function A_(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.addEventListener(u.type,u.attachedListener,Yr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var x=0,w=0;w<ji.length;w++){var H=ji[w];(H.fragmentInstance!==n||H.observer!==f||H.instance!==e)&&(ji[x++]=H)}ji.length=x,f.observe(e)}),T_(e,n))}function Ub(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.removeEventListener(u.type,u.attachedListener,Yr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?wb(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Ad(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ad(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ob(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[kt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Pi(e.nextSibling),e===null)break}return null}function Pb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pi(e.nextSibling),e===null))return null;return e}function C_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pi(e.nextSibling),e===null))return null;return e}function Cd(e){return e.data==="$?"||e.data==="$~"}function Rd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wd=null;function R_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function w_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ib(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function Bb(e){m_(function(){m_(function(n){return e(n)})})}function N_(e,n,a){switch(n=hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function D_(e,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&$e(e,n,o,null,db,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ia&&(e.onclick=null),re(e)}function Nd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);re(e)}var zi=new Map,L_=new Set;function dl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ga=Nt.d;Nt.d={f:Fb,r:Hb,D:Gb,C:Vb,L:kb,m:Xb,X:jb,S:qb,M:Wb};function Fb(){var e=Ga.f(),n=Qc();return e||n}function Hb(e){var n=Me(e);n!==null&&n.tag===5&&n.type==="form"?Og(n):Ga.r(e)}var Zr=typeof document>"u"?null:document;function U_(e,n,a){var o=Zr;if(o&&typeof n=="string"&&n){var u=Ri(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),L_.has(u)||(L_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Hn(n,"link",e),we(n),o.head.appendChild(n)))}}function Gb(e){Ga.D(e),U_("dns-prefetch",e,null)}function Vb(e,n){Ga.C(e,n),U_("preconnect",e,n)}function kb(e,n,a){Ga.L(e,n,a);var o=Zr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ri(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ri(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ri(a.imageSizes)+'"]')):u+='[href="'+Ri(e)+'"]';var f=u;switch(n){case"style":f=Kr(e);break;case"script":f=Jr(e)}if(!(zi.has(f)||(e=U({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),zi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(pl(f))||n==="script"&&o.querySelector(ml(f))))){var x=o.createElement("link");Hn(x,"link",e),n==="style"&&(x[ae]=!0,x.onload=x.onerror=function(){nn(x)}),we(x),o.head.appendChild(x)}}}function Xb(e,n){Ga.m(e,n);var a=Zr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ri(o)+'"][href="'+Ri(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(e)}if(!zi.has(f)&&(e=U({rel:"modulepreload",href:e},n),zi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(f)))return}o=a.createElement("link"),Hn(o,"link",e),we(o),a.head.appendChild(o)}}}function qb(e,n,a){Ga.S(e,n,a);var o=Zr;if(o&&e){var u=Oe(o).hoistableStyles,f=Kr(e);n=n||"default";var x=u.get(f);if(!x){var w={loading:0,preload:null};if(x=o.querySelector(pl(f)))w.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":n},a),(a=zi.get(f))&&Dd(e,a);var H=x=o.createElement("link");we(H),Hn(H,"link",e),H._p=new Promise(function(st,pt){H.onload=st,H.onerror=pt}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,su(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:w},u.set(f,x)}}}function jb(e,n){Ga.X(e,n);var a=Zr;if(a&&e){var o=Oe(a).hoistableScripts,u=Jr(e),f=o.get(u);f||(f=a.querySelector(ml(u)),f||(e=U({src:e,async:!0},n),(n=zi.get(u))&&Ld(e,n),f=a.createElement("script"),we(f),Hn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Wb(e,n){Ga.M(e,n);var a=Zr;if(a&&e){var o=Oe(a).hoistableScripts,u=Jr(e),f=o.get(u);f||(f=a.querySelector(ml(u)),f||(e=U({src:e,async:!0,type:"module"},n),(n=zi.get(u))&&Ld(e,n),f=a.createElement("script"),we(f),Hn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function O_(e,n,a,o){var u=(u=le.current)?dl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Kr(a.href),n=Oe(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kr(a.href);var f=Oe(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(pl(e)))?f._p||(x.instance=f,x.state.loading=5):(f=zi.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zi.set(e,f)),Yb(u,e,f,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Jr(a),n=Oe(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Kr(e){return'href="'+Ri(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function P_(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function Yb(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ae]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[ae]=!0,n.onload=n.onerror=nn.bind(null,n),Hn(n,"link",a),we(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Jr(e){return'[src="'+Ri(e)+'"]'}function ml(e){return"script[async]"+e}function z_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ri(a.href)+'"]');if(o)return n.instance=o,we(o),o;var u=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),we(o),Hn(o,"style",u),su(o,a.precedence,e),n.instance=o;case"stylesheet":u=Kr(a.href);var f=e.querySelector(pl(u));if(f)return n.state.loading|=4,n.instance=f,we(f),f;o=P_(a),(u=zi.get(u))&&Dd(o,u),f=(e.ownerDocument||e).createElement("link"),we(f);var x=f;return x._p=new Promise(function(w,H){x.onload=w,x.onerror=H}),Hn(f,"link",o),n.state.loading|=4,su(f,a.precedence,e),n.instance=f;case"script":return f=Jr(a.src),(u=e.querySelector(ml(f)))?(n.instance=u,we(u),u):(o=a,(u=zi.get(f))&&(o=U({},a),Ld(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),we(u),Hn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,su(o,a.precedence,e));return n.instance}function su(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var w=o[x];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Dd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ld(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ru=null;function I_(e,n,a){if(ru===null){var o=new Map,u=ru=new Map;u.set(a,o)}else u=ru,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[kt]||f[R]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var w=o.get(x);w?w.push(f):o.set(x,[f])}}return o}function Ud(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function F_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function H_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function G_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=H_(n),e.suspenseyImages.push(n)),e=Qb.bind(e),n.decode().then(e,e))}function Kb(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Kr(o.href),f=n.querySelector(pl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=gl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,we(f);return}f=n.ownerDocument||n,o=P_(o),(u=zi.get(u))&&Dd(o,u),f=f.createElement("link"),we(f);var x=f;x._p=new Promise(function(w,H){x.onload=w,x.onerror=H}),Hn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ou=0;function Jb(e,n){return e.stylesheets&&e.count===0&&cu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ou===0&&(ou=62500*mb());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ou?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function V_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)cu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function gl(){this.count--,V_(this)}function Qb(){this.imgCount--,V_(this)}var lu=null;function cu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lu=new Map,n.forEach($b,e),lu=null,gl.call(e))}function $b(e,n){if(!(n.state.loading&4)){var a=lu.get(e);if(a)var o=a.get(null);else{a=new Map,lu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=gl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Qr={$$typeof:$,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function tE(e,n,a,o,u,f,x,w,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ca(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.hiddenUpdates=Ca(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.transitionTypes=null,this.incompleteTransitions=new Map}function k_(e,n,a,o,u,f,x,w,H,st,pt,At){return e=new tE(e,n,a,x,H,st,pt,At,w),n=1,f===!0&&(n|=24),f=si(3,null,null,n),e.current=f,f.stateNode=e,n=Yf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Qf(f),e}function X_(e){return e?(e=Er,e):Er}function q_(e,n,a,o,u,f){u=X_(u),o.context===null?o.context=u:o.pendingContext=u,o=os(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ls(e,o,n),a!==null&&(ci(a,e,n),Wo(a,e,n))}function j_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Od(e,n){j_(e,n),(e=e.alternate)&&j_(e,n)}function W_(e){if(e.tag===13||e.tag===31){var n=Is(e,67108864);n!==null&&ci(n,e,67108864),Od(e,67108864)}}function Y_(e){if(e.tag===13||e.tag===31){var n=yi();n=No(n);var a=Is(e,n);a!==null&&ci(a,e,n),Od(e,n)}}var $r=!0;function eE(e,n,a,o){var u=_t.T;_t.T=null;var f=Nt.p;try{Nt.p=2,Pd(e,n,a,o)}finally{Nt.p=f,_t.T=u}}function nE(e,n,a,o){var u=_t.T;_t.T=null;var f=Nt.p;try{Nt.p=8,Pd(e,n,a,o)}finally{Nt.p=f,_t.T=u}}function Pd(e,n,a,o){if($r){var u=zd(o);if(u===null)gd(e,n,o,uu,a),K_(e,o);else if(aE(u,e,n,a,o))o.stopPropagation();else if(K_(e,o),n&4&&-1<iE.indexOf(e)){for(;u!==null;){var f=Me(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Xe(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var H=1<<31-xe(x);w.entanglements[1]|=H,x&=~H}da(f),(je&6)===0&&(Zc=Jt()+500,cl(0))}}break;case 31:case 13:w=Is(f,2),w!==null&&ci(w,f,2),Qc(),Od(f,2)}if(f=zd(o),f===null&&gd(e,n,o,uu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else gd(e,n,o,null,a)}}function zd(e){return e=Sf(e),Id(e)}var uu=null;function Id(e){if(uu=null,e=_e(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uu=e,null}function Z_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(he()){case ve:return 2;case et:return 8;case Ft:case bt:return 32;case Ht:return 268435456;default:return 32}default:return 32}}var Bd=!1,ys=null,Ss=null,Ms=null,vl=new Map,_l=new Map,bs=[],iE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(e,n){switch(e){case"focusin":case"focusout":ys=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(n.pointerId)}}function xl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Me(n),n!==null&&W_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function aE(e,n,a,o,u){switch(n){case"focusin":return ys=xl(ys,e,n,a,o,u),!0;case"dragenter":return Ss=xl(Ss,e,n,a,o,u),!0;case"mouseover":return Ms=xl(Ms,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return vl.set(f,xl(vl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,_l.set(f,xl(_l.get(f)||null,e,n,a,o,u)),!0}return!1}function J_(e){var n=_e(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Kl(e.priority,function(){Y_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Kl(e.priority,function(){Y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=zd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yf=o,a.target.dispatchEvent(o),yf=null}else return n=Me(a),n!==null&&W_(n),e.blockedOn=a,!1;n.shift()}return!0}function Q_(e,n,a){fu(e)&&a.delete(n)}function sE(){Bd=!1,ys!==null&&fu(ys)&&(ys=null),Ss!==null&&fu(Ss)&&(Ss=null),Ms!==null&&fu(Ms)&&(Ms=null),vl.forEach(Q_),_l.forEach(Q_)}function hu(e,n){e.blockedOn===n&&(e.blockedOn=null,Bd||(Bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sE)))}var du=null;function $_(e){du!==e&&(du=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===e&&(du=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Id(o||a)===null)continue;break}var f=Me(a);f!==null&&(e.splice(n,3),n-=3,xh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function to(e){function n(H){return hu(H,e)}ys!==null&&hu(ys,e),Ss!==null&&hu(Ss,e),Ms!==null&&hu(Ms,e),vl.forEach(n),_l.forEach(n);for(var a=0;a<bs.length;a++){var o=bs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<bs.length&&(a=bs[0],a.blockedOn===null);)J_(a),a.blockedOn===null&&bs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Z]||null;if(typeof f=="function")x||$_(a);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Z]||null)w=x.formAction;else if(Id(u)!==null)continue}else w=x.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),$_(a)}}}function tx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Fd(e){this._internalRoot=e}pu.prototype.render=Fd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=yi();q_(a,o,e,n,null,null)},pu.prototype.unmount=Fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;q_(e.current,2,null,e,null,null),Qc(),n[mt]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<bs.length&&n!==0&&n<bs[a].priority;a++);bs.splice(a,0,e),a===0&&J_(e)}};var ex=t.version;if(ex!=="19.3.0")throw Error(s(527,ex,"19.3.0"));Nt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var rE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{ie=mu.inject(rE),Wt=mu}catch{}}return Sl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Xg,f=qg,x=jg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=k_(e,1,!1,null,null,a,o,null,u,f,x,tx),e[mt]=n.current,md(e),new Fd(n)},Sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Xg,x=qg,w=jg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=k_(e,1,!0,n,a??null,o,u,H,f,x,w,tx),n.context=X_(null),a=n.current,o=yi(),o=No(o),u=os(o),u.callback=null,ls(a,u,o),a=o,n.current.lanes=a,ea(n,a),da(n),e[mt]=n.current,md(e),new pu(n)},Sl.version="19.3.0",Sl}var fx;function vE(){if(fx)return Vd.exports;fx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Vd.exports=gE(),Vd.exports}var _E=vE();const xE=Ry(_E);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function SE(r,t,i=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:yE(r),size:24,node:t,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=r=>{let t="",i=!1;for(const s of r){if(s==="-"||s==="_"||s<=" "){i=t.length>0;continue}t.length===0?t+=s.toLowerCase():t+=i?s.toUpperCase():s,i=!1}return t};/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=r=>{const t=ME(r);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function jd(r){return r!=null}function EE(r,t={}){var v,S;const i=t.attributeNames??{},s=T=>i[T]??T,l=r.size??r.width??er.width,c=r.size??r.height??er.height,h=((v=r.aliases)==null?void 0:v.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],d=[...r.name?[`lucide-${r.name}`]:[],...h],p=((S=t.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=t.includeDefaultClasses===!1?Np(...p):Np("lucide",...d,...p),_=t.absoluteStrokeWidth?Number(t.strokeWidth??er["stroke-width"])*Number(r.size??r.width??er.width)/Number(t.size??t.width??er.width):t.strokeWidth??er["stroke-width"];return["svg",{...Object.entries(er).reduce((T,[L,M])=>(T[s(L)]=M,T),{}),..."color"in t&&t.color&&{[s("stroke")]:t.color},..."size"in t&&jd(t.size)&&{[s("width")]:t.size,[s("height")]:t.size},..."width"in t&&jd(t.width)&&{[s("width")]:t.width},..."height"in t&&jd(t.height)&&{[s("height")]:t.height},[s("stroke-width")]:_,...m&&{[s("class")]:m},[s("viewBox")]:`0 0 ${l} ${c}`,...t.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},r.node.map(T=>{const[L,M,y]=T,O=t.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...M}:M;return y?[L,O,y]:[L,O]})]}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function TE(r,t={}){return EE(r,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},CE=se.createContext({}),RE=()=>se.useContext(CE),wE=se.forwardRef(({color:r,size:t,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:c,nonScalingStroke:h,className:d="",children:p,iconNode:m=[],icon:_={node:m,aliases:[],size:24},...g},v)=>{const{size:S=24,strokeWidth:T=2,absoluteStrokeWidth:L=!1,nonScalingStroke:M=!1,color:y="currentColor",className:O=""}=RE()??{},D=!!p||AE(g),[C,z,N=[]]=TE(_,{color:r??y,width:i??t??S,height:s??t??S,strokeWidth:l??T,absoluteStrokeWidth:c??L,nonScalingStroke:h??M,className:Np(O,d),hasA11yProp:D,attributes:g});return se.createElement(C,{ref:v,...z},[...N.map(([U,E])=>se.createElement(U,E)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ee(r,t=[],i=[]){const s=typeof r=="string"?SE(r,t,i):r,l=se.forwardRef(({className:c,...h},d)=>se.createElement(wE,{ref:d,icon:s,className:c,...h}));return s.name&&(l.displayName=bE(s.name)),l}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};wy.node;const Ny=Ee(wy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy={name:"battery",size:24,node:[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]};Dy.node;const NE=Ee(Dy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};Ly.node;const Uy=Ee(Ly);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Oy.node;const hx=Ee(Oy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Py.node;const Tm=Ee(Py);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};zy.node;const DE=Ee(zy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Iy.node;const LE=Ee(Iy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};By.node;const UE=Ee(By);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};Fy.node;const Hy=Ee(Fy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Gy.node;const OE=Ee(Gy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Vy.node;const PE=Ee(Vy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};ky.node;const zE=Ee(ky);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Xy.node;const IE=Ee(Xy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};qy.node;const BE=Ee(qy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy={name:"ellipsis-vertical",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],aliases:["more-vertical"]};jy.node;const FE=Ee(jy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Wy.node;const Yy=Ee(Wy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Zy.node;const HE=Ee(Zy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Ky.node;const GE=Ee(Ky);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};Jy.node;const Qy=Ee(Jy);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};$y.node;const VE=Ee($y);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};tS.node;const eS=Ee(tS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};nS.node;const kE=Ee(nS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};iS.node;const XE=Ee(iS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};aS.node;const qE=Ee(aS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};sS.node;const rS=Ee(sS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};oS.node;const jE=Ee(oS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};lS.node;const WE=Ee(lS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};cS.node;const dx=Ee(cS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};uS.node;const fS=Ee(uS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS={name:"scan",size:24,node:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]};hS.node;const YE=Ee(hS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};dS.node;const ZE=Ee(dS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};pS.node;const mS=Ee(pS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};gS.node;const KE=Ee(gS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};vS.node;const JE=Ee(vS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S={name:"square",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]};_S.node;const QE=Ee(_S);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};xS.node;const yS=Ee(xS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};SS.node;const MS=Ee(SS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS={name:"thermometer",size:24,node:[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]};bS.node;const $E=Ee(bS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};ES.node;const tT=Ee(ES);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};TS.node;const eT=Ee(TS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};AS.node;const CS=Ee(AS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};RS.node;const nT=Ee(RS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};wS.node;const Am=Ee(wS);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};NS.node;const DS=Ee(NS);function iT({activeView:r,setActiveView:t,alertCount:i,onOpenRobotModal:s,robotInfo:l,theme:c,onToggleTheme:h}){const d=[{id:"dashboard",label:"Dashboard",icon:Qy},{id:"map",label:"Map",icon:XE},{id:"camera",label:"Camera",icon:CS},{id:"analytics",label:"Analytics",icon:Ny},{id:"alerts",label:"Alerts",icon:Uy,badge:i},{id:"settings",label:"Settings",icon:ZE}];return b.jsxs("aside",{className:"sidebar",children:[b.jsxs("div",{className:"sidebar-top",children:[b.jsx("div",{className:"brand-logo",onClick:s,title:"Mining Robot Controller",children:b.jsx("img",{src:"/assets/robot_avatar.jpg",alt:"Robot Mascot",className:"brand-avatar-img"})}),b.jsx("nav",{className:"sidebar-nav",children:d.map(p=>{const m=p.icon,_=r===p.id;return b.jsxs("button",{className:`nav-item ${_?"active":""}`,onClick:()=>t(p.id),title:p.label,children:[b.jsxs("div",{className:"nav-icon-wrapper",children:[b.jsx(m,{size:20}),p.badge>0&&b.jsx("span",{className:"alert-nav-badge",children:p.badge})]}),b.jsx("span",{className:"nav-label",children:p.label})]},p.id)})})]}),b.jsxs("div",{className:"sidebar-bottom",children:[b.jsx("button",{className:"sidebar-theme-toggle-btn",onClick:h,title:c==="dark"?"Switch to White / Light Theme":"Switch to Cyber Dark Theme",children:c==="dark"?b.jsx(yS,{size:18}):b.jsx(rS,{size:18})}),b.jsxs("div",{className:"robot-status-card",onClick:s,title:"View Robot Specs",children:[b.jsxs("div",{className:"robot-card-icon",children:[b.jsx("img",{src:"/assets/robot_avatar.jpg",alt:"Mining Bot Badge"}),b.jsx("span",{className:"online-indicator-dot"})]}),b.jsxs("div",{className:"robot-card-info",children:[b.jsx("div",{className:"robot-card-title",children:l.name||"Mining Bot"}),b.jsx("div",{className:"robot-card-ver",children:l.version||"v1.0.0"})]})]})]})]})}function aT({status:r,liveSim:t,onToggleSim:i,onSelectPreset:s,onFileUpload:l,onOpenJsonDrawer:c,theme:h,onToggleTheme:d}){const[p,m]=se.useState(!1),_=se.useRef(null),g=se.useRef(null);se.useEffect(()=>{function S(T){g.current&&!g.current.contains(T.target)&&m(!1)}return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]);const v=S=>{const T=S.target.files[0];T&&(l(T),S.target.value="")};return b.jsxs("header",{className:"dashboard-header",children:[b.jsxs("div",{className:"header-left",children:[b.jsx("h1",{className:"header-title",children:"Mining Robot"}),b.jsx("p",{className:"header-subtitle",children:"Smart Mining Dashboard"})]}),b.jsxs("div",{className:"header-right",children:[b.jsxs("div",{className:"header-actions",children:[b.jsxs("div",{className:"preset-dropdown-container",ref:g,children:[b.jsxs("button",{className:"action-btn preset-btn",onClick:()=>m(!p),title:"Select JSON Preset Scenario",children:[b.jsx(HE,{size:15}),b.jsx("span",{children:"Sample JSON Scenarios"}),b.jsx(DE,{size:14})]}),p&&b.jsxs("div",{className:"preset-dropdown-menu",children:[b.jsxs("button",{className:"preset-option",onClick:()=>{s("normal"),m(!1)},children:[b.jsx("span",{className:"preset-tag green",children:"Nominal"}),b.jsx("strong",{children:"1. Normal Patrol"}),b.jsx("small",{children:"CH4: 1.2 ppm | Battery: 78% | Nominal"})]}),b.jsxs("button",{className:"preset-option",onClick:()=>{s("gas"),m(!1)},children:[b.jsx("span",{className:"preset-tag red",children:"Hazard"}),b.jsx("strong",{children:"2. Gas Leak Hazard"}),b.jsx("small",{children:"CH4: 4.2 ppm spike | Toxic CO alert"})]}),b.jsxs("button",{className:"preset-option",onClick:()=>{s("obstacle"),m(!1)},children:[b.jsx("span",{className:"preset-tag orange",children:"Warning"}),b.jsx("strong",{children:"3. Obstacle Proximity"}),b.jsx("small",{children:"LiDAR warning | Pillar B proximity"})]}),b.jsxs("button",{className:"preset-option",onClick:()=>{s("battery"),m(!1)},children:[b.jsx("span",{className:"preset-tag red",children:"Critical"}),b.jsx("strong",{children:"4. Low Battery Emergency"}),b.jsx("small",{children:"Battery: 14% | Return to base dock"})]}),b.jsxs("button",{className:"preset-option",onClick:()=>{s("replay"),m(!1)},children:[b.jsx("span",{className:"preset-tag blue",children:"Replay"}),b.jsx("strong",{children:"5. Mission Log Replay"}),b.jsx("small",{children:"Animated multi-frame tunnel traversal"})]})]})]}),b.jsxs("label",{className:"action-btn upload-json-btn",title:"Upload your robot's JSON telemetry file",children:[b.jsx("input",{type:"file",ref:_,accept:".json,application/json",onChange:v,style:{display:"none"}}),b.jsx(eT,{size:15}),b.jsx("span",{children:"Import JSON"})]}),b.jsxs("button",{className:"action-btn json-drawer-btn",onClick:c,title:"View & Edit Live JSON Stream",children:[b.jsx(Hy,{size:15}),b.jsx("span",{children:"JSON Live"})]}),b.jsxs("button",{className:`action-btn sim-toggle-btn ${t?"active":""}`,onClick:i,title:"Toggle autonomous live simulation ticks",children:[b.jsx("span",{className:"pulse-dot"}),b.jsx("span",{children:t?"Live Sim: ON":"Live Sim: PAUSED"})]}),b.jsx("button",{className:"action-btn theme-toggle-btn",onClick:d,title:h==="dark"?"Switch to White / Light Theme":"Switch to Cyber Dark Theme",children:h==="dark"?b.jsxs(b.Fragment,{children:[b.jsx(yS,{size:15,className:"theme-toggle-icon sun"}),b.jsx("span",{children:"Light Mode"})]}):b.jsxs(b.Fragment,{children:[b.jsx(rS,{size:15,className:"theme-toggle-icon moon"}),b.jsx("span",{children:"Dark Mode"})]})})]}),b.jsxs("div",{className:`status-pill ${r==="warning"?"warning":r==="offline"?"offline":"online"}`,children:[b.jsx("span",{className:"status-dot"}),b.jsx("span",{className:"status-text",children:r==="warning"?"Warning":r==="offline"?"Offline":"Online"})]}),b.jsx("button",{className:"more-menu-btn",onClick:c,title:"Dashboard Settings & JSON Hub",children:b.jsx(FE,{size:18})})]})]})}function sT({mapData:r,position:t,theme:i="dark",onShowToast:s}){const l=se.useRef(null),[c,h]=se.useState({zoom:1,panX:0,panY:0}),[d,p]=se.useState(!1),m=se.useRef({x:0,y:0}),_=i==="light";se.useEffect(()=>{var $,j;const O=l.current;if(!O)return;const D=O.getContext("2d"),C=window.devicePixelRatio||1,z=O.getBoundingClientRect();O.width=z.width*C,O.height=z.height*C,D.scale(C,C);const N=z.width,U=z.height;D.fillStyle=_?"#f8fafc":"#090e18",D.fillRect(0,0,N,U),D.save(),D.translate(N/2+c.panX,U/2+c.panY),D.scale(c.zoom,c.zoom),D.translate(-N/2,-U/2);const E=N/100,P=U/80;D.strokeStyle=_?"rgba(148, 163, 184, 0.45)":"rgba(30, 58, 138, 0.28)",D.lineWidth=1;const B=25;for(let k=0;k<N;k+=B)D.beginPath(),D.moveTo(k,0),D.lineTo(k,U),D.stroke();for(let k=0;k<U;k+=B)D.beginPath(),D.moveTo(0,k),D.lineTo(N,k),D.stroke();if(Array.isArray(r==null?void 0:r.obstacles)&&r.obstacles.forEach(k=>{const X=k.x*E,Q=k.y*P,Y=(k.width||8)*E,ct=(k.height||18)*P;D.shadowColor=_?"rgba(220, 38, 38, 0.25)":"rgba(239, 68, 68, 0.5)",D.shadowBlur=8,D.fillStyle=_?"#dc2626":"#ef4444";const Lt=3;D.beginPath(),D.moveTo(X+Lt,Q),D.lineTo(X+Y-Lt,Q),D.quadraticCurveTo(X+Y,Q,X+Y,Q+Lt),D.lineTo(X+Y,Q+ct-Lt),D.quadraticCurveTo(X+Y,Q+ct,X+Y-Lt,Q+ct),D.lineTo(X+Lt,Q+ct),D.quadraticCurveTo(X,Q+ct,X,Q+ct-Lt),D.lineTo(X,Q+Lt),D.quadraticCurveTo(X,Q,X+Lt,Q),D.closePath(),D.fill(),D.shadowBlur=0,D.strokeStyle=_?"#b91c1c":"#f87171",D.lineWidth=1,D.stroke()}),Array.isArray(r==null?void 0:r.path)&&r.path.length>1){D.save(),D.shadowColor=_?"rgba(37, 99, 235, 0.3)":"rgba(59, 130, 246, 0.6)",D.shadowBlur=6,D.strokeStyle=_?"#2563eb":"#38bdf8",D.lineWidth=2.5,D.setLineDash([5,5]),D.beginPath();const k=r.path[0];D.moveTo(k.x*E,k.y*P);for(let X=1;X<r.path.length;X++){const Q=r.path[X];D.lineTo(Q.x*E,Q.y*P)}D.stroke(),D.restore()}const F=((($=r==null?void 0:r.robot)==null?void 0:$.x)??52)*E,W=(((j=r==null?void 0:r.robot)==null?void 0:j.y)??38)*P,it=14+Math.sin(Date.now()/250)*4;D.beginPath(),D.arc(F,W,it,0,Math.PI*2),D.fillStyle=_?"rgba(2, 132, 199, 0.15)":"rgba(56, 189, 248, 0.2)",D.fill(),D.beginPath(),D.arc(F,W,11,0,Math.PI*2),D.fillStyle=_?"rgba(37, 99, 235, 0.35)":"rgba(59, 130, 246, 0.45)",D.shadowColor=_?"#0284c7":"#38bdf8",D.shadowBlur=10,D.fill(),D.beginPath(),D.arc(F,W,7,0,Math.PI*2),D.fillStyle=_?"#0284c7":"#38bdf8",D.shadowBlur=8,D.fill(),D.shadowBlur=0;const J=((t==null?void 0:t.heading)??84)*Math.PI/180;D.beginPath(),D.moveTo(F,W),D.lineTo(F+Math.cos(J)*14,W+Math.sin(J)*14),D.strokeStyle="#ffffff",D.lineWidth=2.5,D.stroke(),D.restore()},[r,t,c,_]);const g=O=>{p(!0),m.current={x:O.clientX-c.panX,y:O.clientY-c.panY}},v=O=>{d&&h(D=>({...D,panX:O.clientX-m.current.x,panY:O.clientY-m.current.y}))},S=()=>p(!1),T=O=>{O.preventDefault();const D=O.deltaY<0?1.1:.9;h(C=>({...C,zoom:Math.max(.5,Math.min(3,C.zoom*D))}))},L=()=>h(O=>({...O,zoom:Math.min(3,O.zoom*1.2)})),M=()=>h(O=>({...O,zoom:Math.max(.5,O.zoom/1.2)})),y=()=>{h({zoom:1,panX:0,panY:0}),s==null||s("Map centered on Mining Robot")};return b.jsxs("section",{className:"card map-card",children:[b.jsxs("div",{className:"card-header",children:[b.jsxs("div",{className:"card-title-group",children:[b.jsx(kE,{size:18,className:"card-header-icon"}),b.jsx("h2",{className:"card-title",children:"2D Map"})]}),b.jsx("div",{className:"card-header-right",children:b.jsxs("span",{className:"live-pill",children:[b.jsx("span",{className:"live-dot"})," Live"]})})]}),b.jsxs("div",{className:"map-viewport-wrapper",onMouseDown:g,onMouseMove:v,onMouseUp:S,onWheel:T,children:[b.jsx("canvas",{ref:l,id:"mining-map-canvas"}),b.jsxs("div",{className:"map-hud-overlay",children:[b.jsx("span",{className:"coord-label",children:"X:"})," ",b.jsxs("strong",{children:[Number((t==null?void 0:t.x)??52.4).toFixed(1),"m"]}),b.jsx("span",{className:"coord-label",children:"Y:"})," ",b.jsxs("strong",{children:[Number((t==null?void 0:t.y)??38.6).toFixed(1),"m"]}),b.jsx("span",{className:"coord-label",children:"Heading:"})," ",b.jsxs("strong",{children:[Math.round((t==null?void 0:t.heading)??84),"°"]}),b.jsx("span",{className:"coord-label",children:"Zone:"})," ",b.jsx("span",{children:(t==null?void 0:t.zone)??"Sector 4"})]}),b.jsxs("div",{className:"map-controls",children:[b.jsx("button",{className:"map-ctrl-btn",onClick:L,title:"Zoom In",children:"+"}),b.jsx("button",{className:"map-ctrl-btn",onClick:M,title:"Zoom Out",children:"−"}),b.jsx("button",{className:"map-ctrl-btn",onClick:y,title:"Center on Robot",children:b.jsx(MS,{size:16})})]}),b.jsxs("div",{className:"map-legend",children:[b.jsxs("div",{className:"legend-item",children:[b.jsx("span",{className:"legend-symbol robot-dot"}),b.jsx("span",{className:"legend-text",children:"Robot"})]}),b.jsxs("div",{className:"legend-item",children:[b.jsx("span",{className:"legend-symbol path-dash"}),b.jsx("span",{className:"legend-text",children:"Path"})]}),b.jsxs("div",{className:"legend-item",children:[b.jsx("span",{className:"legend-symbol obstacle-box"}),b.jsx("span",{className:"legend-text",children:"Obstacle"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cm="186",yo={ROTATE:0,DOLLY:1,PAN:2},go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rT=0,px=1,oT=2,ju=1,LS=2,Nl=3,ur=0,ii=1,va=2,Ka=0,Ul=1,Dp=2,mx=3,gx=4,lT=5,mo=100,cT=101,uT=102,fT=103,hT=104,dT=200,pT=201,mT=202,gT=203,US=204,OS=205,vT=206,_T=207,xT=208,yT=209,ST=210,MT=211,bT=212,ET=213,TT=214,Lp=0,Up=1,Op=2,Il=3,Pp=4,zp=5,Ip=6,Bp=7,PS=0,AT=1,CT=2,ya=0,zS=1,IS=2,BS=3,FS=4,HS=5,GS=6,VS=7,kS=300,fr=301,bo=302,Wd=303,Yd=304,ff=306,Fp=1e3,Za=1001,Hp=1002,Vn=1003,RT=1004,gu=1005,Yn=1006,Zd=1007,lr=1008,Ai=1009,XS=1010,qS=1011,Bl=1012,Rm=1013,Sa=1014,_a=1015,Ma=1016,wm=1017,Nm=1018,Fl=1020,jS=35902,WS=35899,YS=1021,ZS=1022,Ji=1023,Qa=1026,cr=1027,KS=1028,Dm=1029,hr=1030,Lm=1031,Um=1033,Wu=33776,Yu=33777,Zu=33778,Ku=33779,Gp=35840,Vp=35841,kp=35842,Xp=35843,qp=36196,jp=37492,Wp=37496,Yp=37488,Zp=37489,$u=37490,Kp=37491,Jp=37808,Qp=37809,$p=37810,tm=37811,em=37812,nm=37813,im=37814,am=37815,sm=37816,rm=37817,om=37818,lm=37819,cm=37820,um=37821,fm=36492,hm=36494,dm=36495,pm=36283,mm=36284,tf=36285,gm=36286,wT=3200,vm=0,NT=1,Ns="",Bi="srgb",ef="srgb-linear",nf="linear",tn="srgb",Kd=7680,DT=519,LT=512,UT=513,OT=514,Om=515,PT=516,zT=517,Pm=518,IT=519,BT=35044,vx="300 es",xa=2e3,Hl=2001;function FT(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function af(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function HT(){const r=af("canvas");return r.style.display="block",r}const _x={};function xx(...r){const t="THREE."+r.shift();console.log(t,...r)}function JS(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function me(...r){r=JS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function ke(...r){r=JS(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function So(...r){const t=r.join(" ");t in _x||(_x[t]=!0,me(...r))}function GT(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const VT={[Lp]:Up,[Op]:Ip,[Pp]:Bp,[Il]:zp,[Up]:Lp,[Ip]:Op,[Bp]:Pp,[zp]:Il};class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,sf=180/Math.PI;function Ao(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]+"-"+jn[t&255]+jn[t>>8&255]+"-"+jn[t>>16&15|64]+jn[t>>24&255]+"-"+jn[i&63|128]+jn[i>>8&255]+"-"+jn[i>>16&255]+jn[i>>24&255]+jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]).toLowerCase()}function Le(r,t,i){return Math.max(t,Math.min(i,r))}function kT(r,t){return(r%t+t)%t}function Jd(r,t,i){return(1-i)*r+i*t}function Ml(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const XT={DEG2RAD:Ju},Ym=class Ym{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ym.prototype.isVector2=!0;let zt=Ym;class Ds{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],g=s[l+3],v=c[h+0],S=c[h+1],T=c[h+2],L=c[h+3];if(g!==L||p!==v||m!==S||_!==T){let M=p*v+m*S+_*T+g*L;M<0&&(v=-v,S=-S,T=-T,L=-L,M=-M);let y=1-d;if(M<.9995){const O=Math.acos(M),D=Math.sin(O);y=Math.sin(y*O)/D,d=Math.sin(d*O)/D,p=p*y+v*d,m=m*y+S*d,_=_*y+T*d,g=g*y+L*d}else{p=p*y+v*d,m=m*y+S*d,_=_*y+T*d,g=g*y+L*d;const O=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=O,m*=O,_*=O,g*=O}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],g=c[h],v=c[h+1],S=c[h+2],T=c[h+3];return t[i]=d*T+_*g+p*S-m*v,t[i+1]=p*T+_*v+m*g-d*S,t[i+2]=m*T+_*S+d*v-p*g,t[i+3]=_*T-d*g-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),g=d(c/2),v=p(s/2),S=p(l/2),T=p(c/2);switch(h){case"XYZ":this._x=v*_*g+m*S*T,this._y=m*S*g-v*_*T,this._z=m*_*T+v*S*g,this._w=m*_*g-v*S*T;break;case"YXZ":this._x=v*_*g+m*S*T,this._y=m*S*g-v*_*T,this._z=m*_*T-v*S*g,this._w=m*_*g+v*S*T;break;case"ZXY":this._x=v*_*g-m*S*T,this._y=m*S*g+v*_*T,this._z=m*_*T+v*S*g,this._w=m*_*g-v*S*T;break;case"ZYX":this._x=v*_*g-m*S*T,this._y=m*S*g+v*_*T,this._z=m*_*T-v*S*g,this._w=m*_*g+v*S*T;break;case"YZX":this._x=v*_*g+m*S*T,this._y=m*S*g+v*_*T,this._z=m*_*T-v*S*g,this._w=m*_*g-v*S*T;break;case"XZY":this._x=v*_*g-m*S*T,this._y=m*S*g-v*_*T,this._z=m*_*T+v*S*g,this._w=m*_*g+v*S*T;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],g=i[10],v=s+d+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-s*m,this._z=c*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zm=class Zm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(yx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(yx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+p*m+h*g-d*_,this.y=s+p*_+d*m-c*g,this.z=l+p*g+c*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qd.copy(this).projectOnVector(t),this.sub(Qd)}reflect(t){return this.sub(Qd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Le(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zm.prototype.isVector3=!0;let q=Zm;const Qd=new q,yx=new Ds,Km=class Km{constructor(t,i,s,l,c,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m)}set(t,i,s,l,c,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],g=s[7],v=s[2],S=s[5],T=s[8],L=l[0],M=l[3],y=l[6],O=l[1],D=l[4],C=l[7],z=l[2],N=l[5],U=l[8];return c[0]=h*L+d*O+p*z,c[3]=h*M+d*D+p*N,c[6]=h*y+d*C+p*U,c[1]=m*L+_*O+g*z,c[4]=m*M+_*D+g*N,c[7]=m*y+_*C+g*U,c[2]=v*L+S*O+T*z,c[5]=v*M+S*D+T*N,c[8]=v*y+S*C+T*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-s*c*_+s*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=_*h-d*m,v=d*p-_*c,S=m*c-h*p,T=i*g+s*v+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/T;return t[0]=g*L,t[1]=(l*m-_*s)*L,t[2]=(d*s-l*h)*L,t[3]=v*L,t[4]=(_*i-l*p)*L,t[5]=(l*c-d*i)*L,t[6]=S*L,t[7]=(s*p-m*i)*L,t[8]=(h*i-s*c)*L,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($d.makeScale(t,i)),this}rotate(t){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($d.makeRotation(-t)),this}translate(t,i){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($d.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Km.prototype.isMatrix3=!0;let be=Km;const $d=new be,Sx=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qT(){const r={enabled:!0,workingColorSpace:ef,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===tn&&(l.r=Ja(l.r),l.g=Ja(l.g),l.b=Ja(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===tn&&(l.r=Mo(l.r),l.g=Mo(l.g),l.b=Mo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ns?nf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return So("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return So("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ef]:{primaries:t,whitePoint:s,transfer:nf,toXYZ:Sx,fromXYZ:Mx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:t,whitePoint:s,transfer:tn,toXYZ:Sx,fromXYZ:Mx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),r}const Ge=qT();function Ja(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let eo;class jT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{eo===void 0&&(eo=af("canvas")),eo.width=t.width,eo.height=t.height;const l=eo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=eo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=af("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ja(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ja(i[s]/255)*255):i[s]=Ja(i[s]);return{data:i,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WT=0;class zm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=Ao(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(tp(l[h].image)):c.push(tp(l[h]))}else c=tp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function tp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}let YT=0;const ep=new q;class ai extends Us{constructor(t=ai.DEFAULT_IMAGE,i=ai.DEFAULT_MAPPING,s=Za,l=Za,c=Yn,h=lr,d=Ji,p=Ai,m=ai.DEFAULT_ANISOTROPY,_=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=Ao(),this.name="",this.source=new zm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ep).x}get height(){return this.source.getSize(ep).y}get depth(){return this.source.getSize(ep).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fp:t.x=t.x-Math.floor(t.x);break;case Za:t.x=t.x<0?0:1;break;case Hp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fp:t.y=t.y-Math.floor(t.y);break;case Za:t.y=t.y<0?0:1;break;case Hp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=kS;ai.DEFAULT_ANISOTROPY=1;const Jm=class Jm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],g=p[8],v=p[1],S=p[5],T=p[9],L=p[2],M=p[6],y=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-L)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+L)<.1&&Math.abs(T+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,C=(S+1)/2,z=(y+1)/2,N=(_+v)/4,U=(g+L)/4,E=(T+M)/4;return D>C&&D>z?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=N/s,c=U/s):C>z?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=N/l,c=E/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=U/c,l=E/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-T)*(M-T)+(g-L)*(g-L)+(v-_)*(v-_));return Math.abs(O)<.001&&(O=1),this.x=(M-T)/O,this.y=(g-L)/O,this.z=(v-_)/O,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Le(this.x,t.x,i.x),this.y=Le(this.y,t.y,i.y),this.z=Le(this.z,t.z,i.z),this.w=Le(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Le(this.x,t,i),this.y=Le(this.y,t,i),this.z=Le(this.z,t,i),this.w=Le(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jm.prototype.isVector4=!0;let dn=Jm;class ZT extends Us{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new dn(0,0,t,i),this.scissorTest=!1,this.viewport=new dn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ai(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new zm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends ZT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class QS extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class KT extends ai{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const uf=class uf{constructor(t,i,s,l,c,h,d,p,m,_,g,v,S,T,L,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m,_,g,v,S,T,L,M)}set(t,i,s,l,c,h,d,p,m,_,g,v,S,T,L,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=p,y[2]=m,y[6]=_,y[10]=g,y[14]=v,y[3]=S,y[7]=T,y[11]=L,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/no.setFromMatrixColumn(t,0).length(),c=1/no.setFromMatrixColumn(t,1).length(),h=1/no.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=h*_,S=h*g,T=d*_,L=d*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=S+T*m,i[5]=v-L*m,i[9]=-d*p,i[2]=L-v*m,i[6]=T+S*m,i[10]=h*p}else if(t.order==="YXZ"){const v=p*_,S=p*g,T=m*_,L=m*g;i[0]=v+L*d,i[4]=T*d-S,i[8]=h*m,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-T,i[6]=L+v*d,i[10]=h*p}else if(t.order==="ZXY"){const v=p*_,S=p*g,T=m*_,L=m*g;i[0]=v-L*d,i[4]=-h*g,i[8]=T+S*d,i[1]=S+T*d,i[5]=h*_,i[9]=L-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const v=h*_,S=h*g,T=d*_,L=d*g;i[0]=p*_,i[4]=T*m-S,i[8]=v*m+L,i[1]=p*g,i[5]=L*m+v,i[9]=S*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const v=h*p,S=h*m,T=d*p,L=d*m;i[0]=p*_,i[4]=L-v*g,i[8]=T*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*g+T,i[10]=v-L*g}else if(t.order==="XZY"){const v=h*p,S=h*m,T=d*p,L=d*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=v*g+L,i[5]=h*_,i[9]=S*g-T,i[2]=T*g-S,i[6]=d*_,i[10]=L*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JT,t,QT)}lookAt(t,i,s){const l=this.elements;return Mi.subVectors(t,i),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Ts.crossVectors(s,Mi),Ts.lengthSq()===0&&(Math.abs(s.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Ts.crossVectors(s,Mi)),Ts.normalize(),vu.crossVectors(Mi,Ts),l[0]=Ts.x,l[4]=vu.x,l[8]=Mi.x,l[1]=Ts.y,l[5]=vu.y,l[9]=Mi.y,l[2]=Ts.z,l[6]=vu.z,l[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],g=s[5],v=s[9],S=s[13],T=s[2],L=s[6],M=s[10],y=s[14],O=s[3],D=s[7],C=s[11],z=s[15],N=l[0],U=l[4],E=l[8],P=l[12],B=l[1],F=l[5],W=l[9],it=l[13],J=l[2],$=l[6],j=l[10],k=l[14],X=l[3],Q=l[7],Y=l[11],ct=l[15];return c[0]=h*N+d*B+p*J+m*X,c[4]=h*U+d*F+p*$+m*Q,c[8]=h*E+d*W+p*j+m*Y,c[12]=h*P+d*it+p*k+m*ct,c[1]=_*N+g*B+v*J+S*X,c[5]=_*U+g*F+v*$+S*Q,c[9]=_*E+g*W+v*j+S*Y,c[13]=_*P+g*it+v*k+S*ct,c[2]=T*N+L*B+M*J+y*X,c[6]=T*U+L*F+M*$+y*Q,c[10]=T*E+L*W+M*j+y*Y,c[14]=T*P+L*it+M*k+y*ct,c[3]=O*N+D*B+C*J+z*X,c[7]=O*U+D*F+C*$+z*Q,c[11]=O*E+D*W+C*j+z*Y,c[15]=O*P+D*it+C*k+z*ct,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],g=t[6],v=t[10],S=t[14],T=t[3],L=t[7],M=t[11],y=t[15],O=p*S-m*v,D=d*S-m*g,C=d*v-p*g,z=h*S-m*_,N=h*v-p*_,U=h*g-d*_;return i*(L*O-M*D+y*C)-s*(T*O-M*z+y*N)+l*(T*D-L*z+y*U)-c*(T*C-L*N+M*U)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],h=t[5],d=t[9],p=t[2],m=t[6],_=t[10];return i*(h*_-d*m)-s*(c*_-d*p)+l*(c*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=t[9],v=t[10],S=t[11],T=t[12],L=t[13],M=t[14],y=t[15],O=i*d-s*h,D=i*p-l*h,C=i*m-c*h,z=s*p-l*d,N=s*m-c*d,U=l*m-c*p,E=_*L-g*T,P=_*M-v*T,B=_*y-S*T,F=g*M-v*L,W=g*y-S*L,it=v*y-S*M,J=O*it-D*W+C*F+z*B-N*P+U*E;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/J;return t[0]=(d*it-p*W+m*F)*$,t[1]=(l*W-s*it-c*F)*$,t[2]=(L*U-M*N+y*z)*$,t[3]=(v*N-g*U-S*z)*$,t[4]=(p*B-h*it-m*P)*$,t[5]=(i*it-l*B+c*P)*$,t[6]=(M*C-T*U-y*D)*$,t[7]=(_*U-v*C+S*D)*$,t[8]=(h*W-d*B+m*E)*$,t[9]=(s*B-i*W-c*E)*$,t[10]=(T*N-L*C+y*O)*$,t[11]=(g*C-_*N-S*O)*$,t[12]=(d*P-h*F-p*E)*$,t[13]=(i*F-s*P+l*E)*$,t[14]=(L*D-T*z-M*O)*$,t[15]=(_*z-g*D+v*O)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,p=t.z,m=c*h,_=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,g=d+d,v=c*m,S=c*_,T=c*g,L=h*_,M=h*g,y=d*g,O=p*m,D=p*_,C=p*g,z=s.x,N=s.y,U=s.z;return l[0]=(1-(L+y))*z,l[1]=(S+C)*z,l[2]=(T-D)*z,l[3]=0,l[4]=(S-C)*N,l[5]=(1-(v+y))*N,l[6]=(M+O)*N,l[7]=0,l[8]=(T+D)*U,l[9]=(M-O)*U,l[10]=(1-(v+L))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=no.set(l[0],l[1],l[2]).length();const d=no.set(l[4],l[5],l[6]).length(),p=no.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Wi.copy(this);const m=1/h,_=1/d,g=1/p;return Wi.elements[0]*=m,Wi.elements[1]*=m,Wi.elements[2]*=m,Wi.elements[4]*=_,Wi.elements[5]*=_,Wi.elements[6]*=_,Wi.elements[8]*=g,Wi.elements[9]*=g,Wi.elements[10]*=g,i.setFromRotationMatrix(Wi),s.x=h,s.y=d,s.z=p,this}makePerspective(t,i,s,l,c,h,d=xa,p=!1){const m=this.elements,_=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let T,L;if(p)T=c/(h-c),L=h*c/(h-c);else if(d===xa)T=-(h+c)/(h-c),L=-2*h*c/(h-c);else if(d===Hl)T=-h/(h-c),L=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=L,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=xa,p=!1){const m=this.elements,_=2/(i-t),g=2/(s-l),v=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,L;if(p)T=1/(h-c),L=h/(h-c);else if(d===xa)T=-2/(h-c),L=-(h+c)/(h-c);else if(d===Hl)T=-1/(h-c),L=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=L,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};uf.prototype.isMatrix4=!0;let un=uf;const no=new q,Wi=new un,JT=new q(0,0,0),QT=new q(1,1,1),Ts=new q,vu=new q,Mi=new q,bx=new un,Ex=new Ds;class Ls{constructor(t=0,i=0,s=0,l=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],g=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Le(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Le(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Le(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ex.setFromEuler(this),this.setFromQuaternion(Ex,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class $S{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $T=0;const Tx=new q,io=new Ds,Va=new un,_u=new q,bl=new q,t2=new q,e2=new Ds,Ax=new q(1,0,0),Cx=new q(0,1,0),Rx=new q(0,0,1),wx={type:"added"},n2={type:"removed"},ao={type:"childadded",child:null},np={type:"childremoved",child:null};class Tn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new q,i=new Ls,s=new Ds,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new be}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $S,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(Ax,t)}rotateY(t){return this.rotateOnAxis(Cx,t)}rotateZ(t){return this.rotateOnAxis(Rx,t)}translateOnAxis(t,i){return Tx.copy(t).applyQuaternion(this.quaternion),this.position.add(Tx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ax,t)}translateY(t){return this.translateOnAxis(Cx,t)}translateZ(t){return this.translateOnAxis(Rx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?_u.copy(t):_u.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Va.lookAt(bl,_u,this.up):Va.lookAt(_u,bl,this.up),this.quaternion.setFromRotationMatrix(Va),l&&(Va.extractRotation(l.matrixWorld),io.setFromRotationMatrix(Va),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wx),ao.child=t,this.dispatchEvent(ao),ao.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(n2),np.child=t,this.dispatchEvent(np),np.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Va.multiply(t.parent.matrixWorld)),t.applyMatrix4(Va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wx),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,t,t2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,d=c.length;h<d;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),g=h(t.shapes),v=h(t.skeletons),S=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tn.DEFAULT_UP=new q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ya extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i2={type:"move"};class ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const L of t.hand.values()){const M=i.getJointPose(L,s),y=this._getHandJoint(m,L);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,T=.005;m.inputState.pinching&&v>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(i2)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ya;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const tM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},xu={h:0,s:0,l:0};function ap(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ue{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ge.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ge.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ge.workingColorSpace){if(t=kT(t,1),i=Le(i,0,1),s=Le(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=ap(h,c,t+1/3),this.g=ap(h,c,t),this.b=ap(h,c,t-1/3)}return Ge.colorSpaceToWorking(this,l),this}setStyle(t,i=Bi){function s(c){c!==void 0&&parseFloat(c)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Bi){const s=tM[t.toLowerCase()];return s!==void 0?this.setHex(s,i):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bi){return Ge.workingToColorSpace(Wn.copy(this),t),Math.round(Le(Wn.r*255,0,255))*65536+Math.round(Le(Wn.g*255,0,255))*256+Math.round(Le(Wn.b*255,0,255))}getHexString(t=Bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ge.workingColorSpace){Ge.workingToColorSpace(Wn.copy(this),i);const s=Wn.r,l=Wn.g,c=Wn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=_<=.5?g/(h+d):g/(2-h-d),h){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ge.workingColorSpace){return Ge.workingToColorSpace(Wn.copy(this),i),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=Bi){Ge.workingToColorSpace(Wn.copy(this),t);const i=Wn.r,s=Wn.g,l=Wn.b;return t!==Bi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(As),this.setHSL(As.h+t,As.s+i,As.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(As),t.getHSL(xu);const s=Jd(As.h,xu.h,i),l=Jd(As.s,xu.s,i),c=Jd(As.l,xu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ue;Ue.NAMES=tM;class Im{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(t),this.density=i}clone(){return new Im(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class a2 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ls,this.environmentIntensity=1,this.environmentRotation=new Ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Yi=new q,ka=new q,sp=new q,Xa=new q,so=new q,ro=new q,Nx=new q,rp=new q,op=new q,lp=new q,cp=new dn,up=new dn,fp=new dn;class Ki{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Yi.subVectors(t,i),l.cross(Yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Yi.subVectors(l,i),ka.subVectors(s,i),sp.subVectors(t,i);const h=Yi.dot(Yi),d=Yi.dot(ka),p=Yi.dot(sp),m=ka.dot(ka),_=ka.dot(sp),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,S=(m*p-d*_)*v,T=(h*_-d*p)*v;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(t,i,s,l,c,h,d,p){return this.getBarycoord(t,i,s,l,Xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Xa.x),p.addScaledVector(h,Xa.y),p.addScaledVector(d,Xa.z),p)}static getInterpolatedAttribute(t,i,s,l,c,h){return cp.setScalar(0),up.setScalar(0),fp.setScalar(0),cp.fromBufferAttribute(t,i),up.fromBufferAttribute(t,s),fp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(cp,c.x),h.addScaledVector(up,c.y),h.addScaledVector(fp,c.z),h}static isFrontFacing(t,i,s,l){return Yi.subVectors(s,i),ka.subVectors(t,i),Yi.cross(ka).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),Yi.cross(ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ki.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;so.subVectors(l,s),ro.subVectors(c,s),rp.subVectors(t,s);const p=so.dot(rp),m=ro.dot(rp);if(p<=0&&m<=0)return i.copy(s);op.subVectors(t,l);const _=so.dot(op),g=ro.dot(op);if(_>=0&&g<=_)return i.copy(l);const v=p*g-_*m;if(v<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(so,h);lp.subVectors(t,c);const S=so.dot(lp),T=ro.dot(lp);if(T>=0&&S<=T)return i.copy(c);const L=S*m-p*T;if(L<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(s).addScaledVector(ro,d);const M=_*T-S*g;if(M<=0&&g-_>=0&&S-T>=0)return Nx.subVectors(c,l),d=(g-_)/(g-_+(S-T)),i.copy(l).addScaledVector(Nx,d);const y=1/(M+L+v);return h=L*y,d=v*y,i.copy(s).addScaledVector(so,h).addScaledVector(ro,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ql{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Zi):Zi.fromBufferAttribute(c,h),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yu.copy(s.boundingBox)),yu.applyMatrix4(t.matrixWorld),this.union(yu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),Su.subVectors(this.max,El),oo.subVectors(t.a,El),lo.subVectors(t.b,El),co.subVectors(t.c,El),Cs.subVectors(lo,oo),Rs.subVectors(co,lo),nr.subVectors(oo,co);let i=[0,-Cs.z,Cs.y,0,-Rs.z,Rs.y,0,-nr.z,nr.y,Cs.z,0,-Cs.x,Rs.z,0,-Rs.x,nr.z,0,-nr.x,-Cs.y,Cs.x,0,-Rs.y,Rs.x,0,-nr.y,nr.x,0];return!hp(i,oo,lo,co,Su)||(i=[1,0,0,0,1,0,0,0,1],!hp(i,oo,lo,co,Su))?!1:(Mu.crossVectors(Cs,Rs),i=[Mu.x,Mu.y,Mu.z],hp(i,oo,lo,co,Su))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qa=[new q,new q,new q,new q,new q,new q,new q,new q],Zi=new q,yu=new ql,oo=new q,lo=new q,co=new q,Cs=new q,Rs=new q,nr=new q,El=new q,Su=new q,Mu=new q,ir=new q;function hp(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ir.fromArray(r,c);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),p=t.dot(ir),m=i.dot(ir),_=s.dot(ir);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const En=new q,bu=new zt;let s2=0;class $i extends Us{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s2++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=BT,this.updateRanges=[],this.gpuType=_a,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bu.fromBufferAttribute(this,i),bu.applyMatrix3(t),this.setXY(i,bu.x,bu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(t),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)En.fromBufferAttribute(this,i),En.transformDirection(t),this.setXYZ(i,En.x,En.y,En.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ml(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ui(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ml(i,this.array)),i}setX(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ml(i,this.array)),i}setY(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ml(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ml(i,this.array)),i}setW(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ui(i,this.array),s=ui(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ui(i,this.array),s=ui(s,this.array),l=ui(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ui(i,this.array),s=ui(s,this.array),l=ui(l,this.array),c=ui(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class eM extends $i{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class nM extends $i{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ke extends $i{constructor(t,i,s){super(new Float32Array(t),i,s)}}const r2=new ql,Tl=new q,dp=new q;class jl{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):r2.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tl.subVectors(t,this.center);const i=Tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Tl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tl.copy(t.center).add(dp)),this.expandByPoint(Tl.copy(t.center).sub(dp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let o2=0;const Ii=new un,pp=new Tn,uo=new q,bi=new ql,Al=new ql,Pn=new q;class Dn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(FT(t)?nM:eM)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new be().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,i,s){return Ii.makeTranslation(t,i,s),this.applyMatrix4(Ii),this}scale(t,i,s){return Ii.makeScale(t,i,s),this.applyMatrix4(Ii),this}lookAt(t){return pp.lookAt(t),pp.updateMatrix(),this.applyMatrix4(pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ke(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];bi.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Al.setFromBufferAttribute(d),this.morphTargetsRelative?(Pn.addVectors(bi.min,Al.min),bi.expandByPoint(Pn),Pn.addVectors(bi.max,Al.max),bi.expandByPoint(Pn)):(bi.expandByPoint(Al.min),bi.expandByPoint(Al.max))}bi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Pn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Pn.fromBufferAttribute(d,m),p&&(uo.fromBufferAttribute(t,m),Pn.add(uo)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new $i(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let E=0;E<s.count;E++)d[E]=new q,p[E]=new q;const m=new q,_=new q,g=new q,v=new zt,S=new zt,T=new zt,L=new q,M=new q;function y(E,P,B){m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,P),g.fromBufferAttribute(s,B),v.fromBufferAttribute(c,E),S.fromBufferAttribute(c,P),T.fromBufferAttribute(c,B),_.sub(m),g.sub(m),S.sub(v),T.sub(v);const F=1/(S.x*T.y-T.x*S.y);isFinite(F)&&(L.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(F),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(F),d[E].add(L),d[P].add(L),d[B].add(L),p[E].add(M),p[P].add(M),p[B].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let E=0,P=O.length;E<P;++E){const B=O[E],F=B.start,W=B.count;for(let it=F,J=F+W;it<J;it+=3)y(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const D=new q,C=new q,z=new q,N=new q;function U(E){z.fromBufferAttribute(l,E),N.copy(z);const P=d[E];D.copy(P),D.sub(z.multiplyScalar(z.dot(P))).normalize(),C.crossVectors(N,P);const F=C.dot(p[E])<0?-1:1;h.setXYZW(E,D.x,D.y,D.z,F)}for(let E=0,P=O.length;E<P;++E){const B=O[E],F=B.start,W=B.count;for(let it=F,J=F+W;it<J;it+=3)U(t.getX(it+0)),U(t.getX(it+1)),U(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new $i(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new q,c=new q,h=new q,d=new q,p=new q,m=new q,_=new q,g=new q;if(t)for(let v=0,S=t.count;v<S;v+=3){const T=t.getX(v+0),L=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,L),m.fromBufferAttribute(s,M),d.add(_),p.add(_),m.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(L,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Pn.fromBufferAttribute(t,i),Pn.normalize(),t.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,g=d.normalized,v=new m.constructor(p.length*_);let S=0,T=0;for(let L=0,M=p.length;L<M;L++){d.isInterleavedBufferAttribute?S=p[L]*d.data.stride+d.offset:S=p[L]*_;for(let y=0;y<_;y++)v[T++]=m[S++]}return new $i(v,_,g)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,g=m.length;_<g;_++){const v=m[_],S=t(v,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,v=m.length;g<v;g++){const S=m[g];_.push(S.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],g=c[m];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new q,l2=new q,c2=new be;class Wa{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=mp.subVectors(s,i).cross(l2.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(mp),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||c2.getNormalMatrix(t),l=this.coplanarPoint(mp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let u2=0;class pr extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=Ul,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=US,this.blendDst=OS,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=DT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kd,this.stencilZFail=Kd,this.stencilZPass=Kd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new Wa().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new zt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ja=new q,gp=new q,Eu=new q,Tu=new q;class hf{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ja)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ja.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ja.copy(this.origin).addScaledVector(this.direction,i),ja.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){gp.copy(t).add(i).multiplyScalar(.5),Eu.copy(i).sub(t).normalize(),Tu.copy(this.origin).sub(gp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Eu),d=Tu.dot(this.direction),p=-Tu.dot(Eu),m=Tu.lengthSq(),_=Math.abs(1-h*h);let g,v,S,T;if(_>0)if(g=h*p-d,v=h*d-p,T=c*_,g>=0)if(v>=-T)if(v<=T){const L=1/_;g*=L,v*=L,S=g*(g+h*v+2*d)+v*(h*g+v+2*p)+m}else v=c,g=Math.max(0,-(h*v+d)),S=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(h*v+d)),S=-g*g+v*(v+2*p)+m;else v<=-T?(g=Math.max(0,-(-h*c+d)),v=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+m):v<=T?(g=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(g=Math.max(0,-(h*c+d)),v=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+m);else v=h>0?-c:c,g=Math.max(0,-(h*v+d)),S=-g*g+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(gp).addScaledVector(Eu,v),S}intersectSphere(t,i){if(t.radius<0)return null;ja.subVectors(t.center,this.origin);const s=ja.dot(this.direction),l=ja.dot(ja)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),_>=0?(c=(t.min.y-v.y)*_,h=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,h=(t.min.y-v.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(d=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ja)!==null}intersectTriangle(t,i,s,l,c){const h=this.origin,d=this.direction,p=d.x,m=d.y,_=d.z,g=t.x-h.x,v=t.y-h.y,S=t.z-h.z,T=i.x-h.x,L=i.y-h.y,M=i.z-h.z,y=s.x-h.x,O=s.y-h.y,D=s.z-h.z,C=Math.abs(p),z=Math.abs(m),N=Math.abs(_);let U,E,P,B,F,W,it,J,$,j,k,X;if(C>=z&&C>=N?(P=p,W=g,$=T,X=y,p>=0?(U=m,E=_,B=v,F=S,it=L,J=M,j=O,k=D):(U=_,E=m,B=S,F=v,it=M,J=L,j=D,k=O)):z>=N?(P=m,W=v,$=L,X=O,m>=0?(U=_,E=p,B=S,F=g,it=M,J=T,j=D,k=y):(U=p,E=_,B=g,F=S,it=T,J=M,j=y,k=D)):(P=_,W=S,$=M,X=D,_>=0?(U=p,E=m,B=g,F=v,it=T,J=L,j=y,k=O):(U=m,E=p,B=v,F=g,it=L,J=T,j=O,k=y)),P===0)return null;const Q=U/P,Y=E/P,ct=1/P,Lt=B-Q*W,Gt=F-Y*W,G=it-Q*$,vt=J-Y*$,Ot=j-Q*X,tt=k-Y*X,ot=Ot*vt-tt*G,Mt=Lt*tt-Gt*Ot,Pt=G*Gt-vt*Lt;if(l){if(ot<0||Mt<0||Pt<0)return null}else if((ot<0||Mt<0||Pt<0)&&(ot>0||Mt>0||Pt>0))return null;const _t=ot+Mt+Pt;if(_t===0)return null;const Nt=ct*(ot*W+Mt*$+Pt*X);return(_t>0?Nt<0:Nt>0)?null:this.at(Nt/_t,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class or extends pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.combine=PS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dx=new un,ar=new hf,Au=new jl,Lx=new q,Cu=new q,Ru=new q,wu=new q,vp=new q,Nu=new q,Ux=new q,Du=new q;class Ze extends Tn{constructor(t=new Dn,i=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],g=c[p];_!==0&&(vp.fromBufferAttribute(g,t),h?Nu.addScaledVector(vp,_):Nu.addScaledVector(vp.sub(i),_))}i.add(Nu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Au.copy(s.boundingSphere),Au.applyMatrix4(c),ar.copy(t.ray).recast(t.near),!(Au.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Au,Lx)===null||ar.origin.distanceToSquared(Lx)>(t.far-t.near)**2))&&(Dx.copy(c).invert(),ar.copy(t.ray).applyMatrix4(Dx),!(s.boundingBox!==null&&ar.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ar)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,L=v.length;T<L;T++){const M=v[T],y=h[M.materialIndex],O=Math.max(M.start,S.start),D=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,z=D;C<z;C+=3){const N=d.getX(C),U=d.getX(C+1),E=d.getX(C+2);l=Lu(this,y,t,s,m,_,g,N,U,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),L=Math.min(d.count,S.start+S.count);for(let M=T,y=L;M<y;M+=3){const O=d.getX(M),D=d.getX(M+1),C=d.getX(M+2);l=Lu(this,h,t,s,m,_,g,O,D,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,L=v.length;T<L;T++){const M=v[T],y=h[M.materialIndex],O=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,z=D;C<z;C+=3){const N=C,U=C+1,E=C+2;l=Lu(this,y,t,s,m,_,g,N,U,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),L=Math.min(p.count,S.start+S.count);for(let M=T,y=L;M<y;M+=3){const O=M,D=M+1,C=M+2;l=Lu(this,h,t,s,m,_,g,O,D,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function f2(r,t,i,s,l,c,h,d){let p;if(t.side===ii?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,t.side===ur,d),p===null)return null;Du.copy(d),Du.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Du);return m<i.near||m>i.far?null:{distance:m,point:Du.clone(),object:r}}function Lu(r,t,i,s,l,c,h,d,p,m){r.getVertexPosition(d,Cu),r.getVertexPosition(p,Ru),r.getVertexPosition(m,wu);const _=f2(r,t,i,s,Cu,Ru,wu,Ux);if(_){const g=new q;Ki.getBarycoord(Ux,Cu,Ru,wu,g),l&&(_.uv=Ki.getInterpolatedAttribute(l,d,p,m,g,new zt)),c&&(_.uv1=Ki.getInterpolatedAttribute(c,d,p,m,g,new zt)),h&&(_.normal=Ki.getInterpolatedAttribute(h,d,p,m,g,new q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new q,materialIndex:0};Ki.getNormal(Cu,Ru,wu,v.normal),_.face=v,_.barycoord=g}return _}class h2 extends ai{constructor(t=null,i=1,s=1,l,c,h,d,p,m=Vn,_=Vn,g,v){super(null,h,d,p,m,_,l,c,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sr=new jl,d2=new zt(.5,.5),Uu=new q;class Bm{constructor(t=new Wa,i=new Wa,s=new Wa,l=new Wa,c=new Wa,h=new Wa){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=xa,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],p=c[2],m=c[3],_=c[4],g=c[5],v=c[6],S=c[7],T=c[8],L=c[9],M=c[10],y=c[11],O=c[12],D=c[13],C=c[14],z=c[15];if(l[0].setComponents(m-h,S-_,y-T,z-O).normalize(),l[1].setComponents(m+h,S+_,y+T,z+O).normalize(),l[2].setComponents(m+d,S+g,y+L,z+D).normalize(),l[3].setComponents(m-d,S-g,y-L,z-D).normalize(),s)l[4].setComponents(p,v,M,C).normalize(),l[5].setComponents(m-p,S-v,y-M,z-C).normalize();else if(l[4].setComponents(m-p,S-v,y-M,z-C).normalize(),i===xa)l[5].setComponents(m+p,S+v,y+M,z+C).normalize();else if(i===Hl)l[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);const i=d2.distanceTo(t.center);return sr.radius=.7071067811865476+i,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uu.x=l.normal.x>0?t.max.x:t.min.x,Uu.y=l.normal.y>0?t.max.y:t.min.y,Uu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iM extends pr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rf=new q,of=new q,Ox=new un,Cl=new hf,Ou=new jl,_p=new q,Px=new q;class p2 extends Tn{constructor(t=new Dn,i=new iM){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)rf.fromBufferAttribute(i,l-1),of.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=rf.distanceTo(of);t.setAttribute("lineDistance",new Ke(s,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ou.copy(s.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=c,t.ray.intersectsSphere(Ou)===!1)return;Ox.copy(l).invert(),Cl.copy(t.ray).applyMatrix4(Ox);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=s.index,v=s.attributes.position;if(_!==null){const S=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let L=S,M=T-1;L<M;L+=m){const y=_.getX(L),O=_.getX(L+1),D=Pu(this,t,Cl,p,y,O,L);D&&i.push(D)}if(this.isLineLoop){const L=_.getX(T-1),M=_.getX(S),y=Pu(this,t,Cl,p,L,M,T-1);y&&i.push(y)}}else{const S=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let L=S,M=T-1;L<M;L+=m){const y=Pu(this,t,Cl,p,L,L+1,L);y&&i.push(y)}if(this.isLineLoop){const L=Pu(this,t,Cl,p,T-1,S,T-1);L&&i.push(L)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Pu(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(rf.fromBufferAttribute(d,l),of.fromBufferAttribute(d,c),i.distanceSqToSegment(rf,of,_p,Px)>s)return;_p.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(_p);if(!(m<t.near||m>t.far))return{distance:m,point:Px.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const zx=new q,Ix=new q;class m2 extends p2{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)zx.fromBufferAttribute(i,l),Ix.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+zx.distanceTo(Ix);t.setAttribute("lineDistance",new Ke(s,1))}else me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aM extends pr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bx=new un,_m=new hf,zu=new jl,Iu=new q;class g2 extends Tn{constructor(t=new Dn,i=new aM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zu.copy(s.boundingSphere),zu.applyMatrix4(l),zu.radius+=c,t.ray.intersectsSphere(zu)===!1)return;Bx.copy(l).invert(),_m.copy(t.ray).applyMatrix4(Bx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,g=s.attributes.position;if(m!==null){const v=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let T=v,L=S;T<L;T++){const M=m.getX(T);Iu.fromBufferAttribute(g,M),Fx(Iu,M,p,l,t,i,this)}}else{const v=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let T=v,L=S;T<L;T++)Iu.fromBufferAttribute(g,T),Fx(Iu,T,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fx(r,t,i,s,l,c,h){const d=_m.distanceSqToPoint(r);if(d<i){const p=new q;_m.closestPointToPoint(r,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class sM extends ai{constructor(t=[],i=fr,s,l,c,h,d,p,m,_){super(t,i,s,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gl extends ai{constructor(t,i,s=Sa,l,c,h,d=Vn,p=Vn,m,_=Qa,g=1){if(_!==Qa&&_!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,c,h,d,p,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class v2 extends Gl{constructor(t,i=Sa,s=fr,l,c,h=Vn,d=Vn,p,m=Qa){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rM extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ti extends Dn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],g=[];let v=0,S=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(g,2));function T(L,M,y,O,D,C,z,N,U,E,P){const B=C/U,F=z/E,W=C/2,it=z/2,J=N/2,$=U+1,j=E+1;let k=0,X=0;const Q=new q;for(let Y=0;Y<j;Y++){const ct=Y*F-it;for(let Lt=0;Lt<$;Lt++){const Gt=Lt*B-W;Q[L]=Gt*O,Q[M]=ct*D,Q[y]=J,m.push(Q.x,Q.y,Q.z),Q[L]=0,Q[M]=0,Q[y]=N>0?1:-1,_.push(Q.x,Q.y,Q.z),g.push(Lt/U),g.push(1-Y/E),k+=1}}for(let Y=0;Y<E;Y++)for(let ct=0;ct<U;ct++){const Lt=v+ct+$*Y,Gt=v+ct+$*(Y+1),G=v+(ct+1)+$*(Y+1),vt=v+(ct+1)+$*Y;p.push(Lt,Gt,vt),p.push(Gt,G,vt),X+=6}d.addGroup(S,X,P),S+=X,v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ol extends Dn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],v=[],S=[];let T=0;const L=[],M=s/2;let y=0;O(),h===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(S,2));function O(){const C=new q,z=new q;let N=0;const U=(i-t)/s;for(let E=0;E<=c;E++){const P=[],B=E/c,F=B*(i-t)+t;for(let W=0;W<=l;W++){const it=W/l,J=it*p+d,$=Math.sin(J),j=Math.cos(J);z.x=F*$,z.y=-B*s+M,z.z=F*j,g.push(z.x,z.y,z.z),C.set($,U,j).normalize(),v.push(C.x,C.y,C.z),S.push(it,1-B),P.push(T++)}L.push(P)}for(let E=0;E<l;E++)for(let P=0;P<c;P++){const B=L[P][E],F=L[P+1][E],W=L[P+1][E+1],it=L[P][E+1];(t>0||P!==0)&&(_.push(B,F,it),N+=3),(i>0||P!==c-1)&&(_.push(F,W,it),N+=3)}m.addGroup(y,N,0),y+=N}function D(C){const z=T,N=new zt,U=new q;let E=0;const P=C===!0?t:i,B=C===!0?1:-1;for(let W=1;W<=l;W++)g.push(0,M*B,0),v.push(0,B,0),S.push(.5,.5),T++;const F=T;for(let W=0;W<=l;W++){const J=W/l*p+d,$=Math.cos(J),j=Math.sin(J);U.x=P*j,U.y=M*B,U.z=P*$,g.push(U.x,U.y,U.z),v.push(0,B,0),N.x=$*.5+.5,N.y=j*.5*B+.5,S.push(N.x,N.y),T++}for(let W=0;W<l;W++){const it=z+W,J=F+W;C===!0?_.push(J,J+1,it):_.push(J+1,J,it),E+=3}m.addGroup(y,E,C===!0?1:2),y+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fm extends Dn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),m(s),_(),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(c.slice(),3)),this.setAttribute("uv",new Ke(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(O){const D=new q,C=new q,z=new q;for(let N=0;N<i.length;N+=3)S(i[N+0],D),S(i[N+1],C),S(i[N+2],z),p(D,C,z,O)}function p(O,D,C,z){const N=z+1,U=[];for(let E=0;E<=N;E++){U[E]=[];const P=O.clone().lerp(C,E/N),B=D.clone().lerp(C,E/N),F=N-E;for(let W=0;W<=F;W++)W===0&&E===N?U[E][W]=P:U[E][W]=P.clone().lerp(B,W/F)}for(let E=0;E<N;E++)for(let P=0;P<2*(N-E)-1;P++){const B=Math.floor(P/2);P%2===0?(v(U[E][B+1]),v(U[E+1][B]),v(U[E][B])):(v(U[E][B+1]),v(U[E+1][B+1]),v(U[E+1][B]))}}function m(O){const D=new q;for(let C=0;C<c.length;C+=3)D.x=c[C+0],D.y=c[C+1],D.z=c[C+2],D.normalize().multiplyScalar(O),c[C+0]=D.x,c[C+1]=D.y,c[C+2]=D.z}function _(){const O=new q;for(let D=0;D<c.length;D+=3){O.x=c[D+0],O.y=c[D+1],O.z=c[D+2];const C=M(O)/2/Math.PI+.5,z=y(O)/Math.PI+.5;h.push(C,1-z)}T(),g()}function g(){for(let O=0;O<h.length;O+=6){const D=h[O+0],C=h[O+2],z=h[O+4],N=Math.max(D,C,z),U=Math.min(D,C,z);N>.9&&U<.1&&(D<.2&&(h[O+0]+=1),C<.2&&(h[O+2]+=1),z<.2&&(h[O+4]+=1))}}function v(O){c.push(O.x,O.y,O.z)}function S(O,D){const C=O*3;D.x=t[C+0],D.y=t[C+1],D.z=t[C+2]}function T(){const O=new q,D=new q,C=new q,z=new q,N=new zt,U=new zt,E=new zt;for(let P=0,B=0;P<c.length;P+=9,B+=6){O.set(c[P+0],c[P+1],c[P+2]),D.set(c[P+3],c[P+4],c[P+5]),C.set(c[P+6],c[P+7],c[P+8]),N.set(h[B+0],h[B+1]),U.set(h[B+2],h[B+3]),E.set(h[B+4],h[B+5]),z.copy(O).add(D).add(C).divideScalar(3);const F=M(z);L(N,B+0,O,F),L(U,B+2,D,F),L(E,B+4,C,F)}}function L(O,D,C,z){z<0&&O.x===1&&(h[D]=O.x-1),C.x===0&&C.z===0&&(h[D]=z/2/Math.PI+.5)}function M(O){return Math.atan2(O.z,-O.x)}function y(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fm(t.vertices,t.indices,t.radius,t.detail)}}class Hm extends Fm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,h,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Hm(t.radius,t.detail)}}class Ea{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(c-1);const _=s[l],v=s[l+1]-_,S=(h-_)/v;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new zt:new q);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new q,l=[],c=[],h=[],d=new q,p=new un;for(let S=0;S<=t;S++){const T=S/t;l[S]=this.getTangentAt(T,new q)}c[0]=new q,h[0]=new q;let m=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),v=Math.abs(l[0].z);_<=m&&(m=_,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),v<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Le(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,T))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Le(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let T=1;T<=t;T++)c[T].applyMatrix4(p.makeRotationAxis(l[T],S*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gm extends Ea{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new zt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*_-S*g+this.aX,m=v*g+S*_+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _2 extends Gm{constructor(t,i,s,l,c,h){super(t,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Vm(){let r=0,t=0,i=0,s=0;function l(c,h,d,p){r=c,t=d,i=-3*c+3*h-2*d-p,s=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,_,g){let v=(h-c)/m-(d-c)/(m+_)+(d-h)/_,S=(d-h)/_-(p-h)/(_+g)+(p-d)/g;v*=_,S*=_,l(h,d,v,S)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const Hx=new q,Gx=new q,xp=new Vm,yp=new Vm,Sp=new Vm;class xm extends Ea{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new q){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,_;this.closed||d>0?m=l[(d-1)%c]:(Gx.subVectors(l[0],l[1]).add(l[0]),m=Gx);const g=l[d%c],v=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Hx.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Hx),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(g),S),L=Math.pow(g.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(_),S);L<1e-4&&(L=1),T<1e-4&&(T=L),M<1e-4&&(M=L),xp.initNonuniformCatmullRom(m.x,g.x,v.x,_.x,T,L,M),yp.initNonuniformCatmullRom(m.y,g.y,v.y,_.y,T,L,M),Sp.initNonuniformCatmullRom(m.z,g.z,v.z,_.z,T,L,M)}else this.curveType==="catmullrom"&&(xp.initCatmullRom(m.x,g.x,v.x,_.x,this.tension),yp.initCatmullRom(m.y,g.y,v.y,_.y,this.tension),Sp.initCatmullRom(m.z,g.z,v.z,_.z,this.tension));return s.set(xp.calc(p),yp.calc(p),Sp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vx(r,t,i,s,l){const c=(s-t)*.5,h=(l-i)*.5,d=r*r,p=r*d;return(2*i-2*s+c+h)*p+(-3*i+3*s-2*c-h)*d+c*r+i}function x2(r,t){const i=1-r;return i*i*t}function y2(r,t){return 2*(1-r)*r*t}function S2(r,t){return r*r*t}function Pl(r,t,i,s){return x2(r,t)+y2(r,i)+S2(r,s)}function M2(r,t){const i=1-r;return i*i*i*t}function b2(r,t){const i=1-r;return 3*i*i*r*t}function E2(r,t){return 3*(1-r)*r*r*t}function T2(r,t){return r*r*r*t}function zl(r,t,i,s,l){return M2(r,t)+b2(r,i)+E2(r,s)+T2(r,l)}class oM extends Ea{constructor(t=new zt,i=new zt,s=new zt,l=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new zt){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(zl(t,l.x,c.x,h.x,d.x),zl(t,l.y,c.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A2 extends Ea{constructor(t=new q,i=new q,s=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new q){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(zl(t,l.x,c.x,h.x,d.x),zl(t,l.y,c.y,h.y,d.y),zl(t,l.z,c.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lM extends Ea{constructor(t=new zt,i=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new zt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new zt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C2 extends Ea{constructor(t=new q,i=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new q){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cM extends Ea{constructor(t=new zt,i=new zt,s=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new zt){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Pl(t,l.x,c.x,h.x),Pl(t,l.y,c.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uM extends Ea{constructor(t=new q,i=new q,s=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new q){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Pl(t,l.x,c.x,h.x),Pl(t,l.y,c.y,h.y),Pl(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fM extends Ea{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new zt){const s=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],m=l[h],_=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return s.set(Vx(d,p.x,m.x,_.x,g.x),Vx(d,p.y,m.y,_.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new zt().fromArray(l))}return this}}var lf=Object.freeze({__proto__:null,ArcCurve:_2,CatmullRomCurve3:xm,CubicBezierCurve:oM,CubicBezierCurve3:A2,EllipseCurve:Gm,LineCurve:lM,LineCurve3:C2,QuadraticBezierCurve:cM,QuadraticBezierCurve3:uM,SplineCurve:fM});class R2 extends Ea{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lf[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const h=l[c]-s,d=this.curves[c],p=d.getLength(),m=p===0?0:1-h/p;return d.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,p=h.getPoints(d);for(let m=0;m<p.length;m++){const _=p[m];s&&s.equals(_)||(i.push(_),s=_)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new lf[l.type]().fromJSON(l))}return this}}class kx extends R2{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new lM(this.currentPoint.clone(),new zt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new cM(this.currentPoint.clone(),new zt(t,i),new zt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,h){const d=new oM(this.currentPoint.clone(),new zt(t,i),new zt(s,l),new zt(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new fM(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,c,h),this}absarc(t,i,s,l,c,h){return this.absellipse(t,i,s,s,l,c,h),this}ellipse(t,i,s,l,c,h,d,p){const m=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(t+m,i+_,s,l,c,h,d,p),this}absellipse(t,i,s,l,c,h,d,p){const m=new Gm(t,i,s,l,c,h,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const _=m.getPoint(1);return this.currentPoint.copy(_),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hM extends kx{constructor(t){super(t),this.uuid=Ao(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new kx().fromJSON(l))}return this}}function w2(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=dM(r,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,p,m;if(s&&(c=O2(r,t,c,i)),r.length>80*i){d=r[0],p=r[1];let _=d,g=p;for(let v=i;v<l;v+=i){const S=r[v],T=r[v+1];S<d&&(d=S),T<p&&(p=T),S>_&&(_=S),T>g&&(g=T)}m=Math.max(_-d,g-p),m=m!==0?32767/m:0}return Vl(c,h,i,d,p,m,0),h}function dM(r,t,i,s,l){let c;if(l===q2(r,t,i,s)>0)for(let h=t;h<i;h+=s)c=Xx(h/s|0,r[h],r[h+1],c);else for(let h=i-s;h>=t;h-=s)c=Xx(h/s|0,r[h],r[h+1],c);return c&&Eo(c,c.next)&&(Xl(c),c=c.next),c}function dr(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Eo(i,i.next)||pn(i.prev,i,i.next)===0)){if(Xl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Vl(r,t,i,s,l,c,h){if(!r)return;!h&&c&&F2(r,s,l,c);let d=r;for(;r.prev!==r.next;){const p=r.prev,m=r.next;if(c?D2(r,s,l,c):N2(r)){t.push(p.i,r.i,m.i),Xl(r),r=m.next,d=m.next;continue}if(r=m,r===d){h?h===1?(r=L2(dr(r),t),Vl(r,t,i,s,l,c,2)):h===2&&U2(r,t,i,s,l,c):Vl(dr(r),t,i,s,l,c,1);break}}}function N2(r){const t=r.prev,i=r,s=r.next;if(pn(t,i,s)>=0)return!1;const l=t.x,c=i.x,h=s.x,d=t.y,p=i.y,m=s.y,_=Math.min(l,c,h),g=Math.min(d,p,m),v=Math.max(l,c,h),S=Math.max(d,p,m);let T=s.next;for(;T!==t;){if(T.x>=_&&T.x<=v&&T.y>=g&&T.y<=S&&Dl(l,d,c,p,h,m,T.x,T.y)&&pn(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function D2(r,t,i,s){const l=r.prev,c=r,h=r.next;if(pn(l,c,h)>=0)return!1;const d=l.x,p=c.x,m=h.x,_=l.y,g=c.y,v=h.y,S=Math.min(d,p,m),T=Math.min(_,g,v),L=Math.max(d,p,m),M=Math.max(_,g,v),y=ym(S,T,t,i,s),O=ym(L,M,t,i,s);let D=r.prevZ,C=r.nextZ;for(;D&&D.z>=y&&C&&C.z<=O;){if(D.x>=S&&D.x<=L&&D.y>=T&&D.y<=M&&D!==l&&D!==h&&Dl(d,_,p,g,m,v,D.x,D.y)&&pn(D.prev,D,D.next)>=0||(D=D.prevZ,C.x>=S&&C.x<=L&&C.y>=T&&C.y<=M&&C!==l&&C!==h&&Dl(d,_,p,g,m,v,C.x,C.y)&&pn(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;D&&D.z>=y;){if(D.x>=S&&D.x<=L&&D.y>=T&&D.y<=M&&D!==l&&D!==h&&Dl(d,_,p,g,m,v,D.x,D.y)&&pn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;C&&C.z<=O;){if(C.x>=S&&C.x<=L&&C.y>=T&&C.y<=M&&C!==l&&C!==h&&Dl(d,_,p,g,m,v,C.x,C.y)&&pn(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function L2(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Eo(s,l)&&mM(s,i,i.next,l)&&kl(s,l)&&kl(l,s)&&(t.push(s.i,i.i,l.i),Xl(i),Xl(i.next),i=r=l),i=i.next}while(i!==r);return dr(i)}function U2(r,t,i,s,l,c){let h=r;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&V2(h,d)){let p=gM(h,d);h=dr(h,h.next),p=dr(p,p.next),Vl(h,t,i,s,l,c,0),Vl(p,t,i,s,l,c,0);return}d=d.next}h=h.next}while(h!==r)}function O2(r,t,i,s){const l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c]*s,p=c<h-1?t[c+1]*s:r.length,m=dM(r,d,p,s,!1);m===m.next&&(m.steiner=!0),l.push(G2(m))}l.sort(P2);for(let c=0;c<l.length;c++)i=z2(l[c],i);return i}function P2(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function z2(r,t){const i=I2(r,t);if(!i)return t;const s=gM(i,r);return dr(s,s.next),dr(i,i.next)}function I2(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,h;if(Eo(r,i))return i;do{if(Eo(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>c&&(c=g,h=i.x<i.next.x?i:i.next,g===s))return h}i=i.next}while(i!==t);if(!h)return null;const d=h,p=h.x,m=h.y;let _=1/0;i=h;do{if(s>=i.x&&i.x>=p&&s!==i.x&&pM(l<m?s:c,l,p,m,l<m?c:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);kl(i,r)&&(g<_||g===_&&(i.x>h.x||i.x===h.x&&B2(h,i)))&&(h=i,_=g)}i=i.next}while(i!==d);return h}function B2(r,t){return pn(r.prev,r,t.prev)<0&&pn(t.next,r,r.next)<0}function F2(r,t,i,s){let l=r;do l.z===0&&(l.z=ym(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,H2(l)}function H2(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let h=s,d=0;for(let m=0;m<i&&(d++,h=h.nextZ,!!h);m++);let p=i;for(;d>0||p>0&&h;)d!==0&&(p===0||!h||s.z<=h.z)?(l=s,s=s.nextZ,d--):(l=h,h=h.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=h}c.nextZ=null,i*=2}while(t>1);return r}function ym(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function G2(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function pM(r,t,i,s,l,c,h,d){return(l-h)*(t-d)>=(r-h)*(c-d)&&(r-h)*(s-d)>=(i-h)*(t-d)&&(i-h)*(c-d)>=(l-h)*(s-d)}function Dl(r,t,i,s,l,c,h,d){return!(r===h&&t===d)&&pM(r,t,i,s,l,c,h,d)}function V2(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!k2(r,t)&&(kl(r,t)&&kl(t,r)&&X2(r,t)&&(pn(r.prev,r,t.prev)||pn(r,t.prev,t))||Eo(r,t)&&pn(r.prev,r,r.next)>0&&pn(t.prev,t,t.next)>0)}function pn(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Eo(r,t){return r.x===t.x&&r.y===t.y}function mM(r,t,i,s){const l=Fu(pn(r,t,i)),c=Fu(pn(r,t,s)),h=Fu(pn(i,s,r)),d=Fu(pn(i,s,t));return!!(l!==c&&h!==d||l===0&&Bu(r,i,t)||c===0&&Bu(r,s,t)||h===0&&Bu(i,r,s)||d===0&&Bu(i,t,s))}function Bu(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Fu(r){return r>0?1:r<0?-1:0}function k2(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&mM(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function kl(r,t){return pn(r.prev,r,r.next)<0?pn(r,t,r.next)>=0&&pn(r,r.prev,t)>=0:pn(r,t,r.prev)<0||pn(r,r.next,t)<0}function X2(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function gM(r,t){const i=Sm(r.i,r.x,r.y),s=Sm(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function Xx(r,t,i,s){const l=Sm(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function Xl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sm(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function q2(r,t,i,s){let l=0;for(let c=t,h=i-s;c<i;c+=s)l+=(r[h]-r[c])*(r[c+1]+r[h+1]),h=c;return l}class j2{static triangulate(t,i,s=2){return w2(t,i,s)}}class vo{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return vo.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];qx(t),jx(s,t);let h=t.length;i.forEach(qx);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,jx(s,i[p]);const d=j2.triangulate(s,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function qx(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function jx(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class km extends Dn{constructor(t=new hM([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];h(m)}this.setAttribute("position",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2)),this.computeVertexNormals();function h(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,_=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let v=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,T=i.bevelSize!==void 0?i.bevelSize:S-.1,L=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const y=i.extrudePath,O=i.UVGenerator!==void 0?i.UVGenerator:W2;let D,C=!1,z,N,U,E;if(y){D=y.getSpacedPoints(_),C=!0,v=!1;const xt=y.isCatmullRomCurve3?y.closed:!1;z=y.computeFrenetFrames(_,xt),N=new q,U=new q,E=new q}v||(M=0,S=0,T=0,L=0);const P=d.extractPoints(m);let B=P.shape;const F=P.holes;if(!vo.isClockWise(B)){B=B.reverse();for(let xt=0,St=F.length;xt<St;xt++){const Dt=F[xt];vo.isClockWise(Dt)&&(F[xt]=Dt.reverse())}}function it(xt){const Dt=10000000000000001e-36;let Rt=xt[0];for(let Ct=1;Ct<=xt.length;Ct++){const ne=Ct%xt.length,$t=xt[ne],le=$t.x-Rt.x,fe=$t.y-Rt.y,V=le*le+fe*fe,Se=Math.max(Math.abs($t.x),Math.abs($t.y),Math.abs(Rt.x),Math.abs(Rt.y)),ge=Dt*Se*Se;if(V<=ge){xt.splice(ne,1),Ct--;continue}Rt=$t}}it(B),F.forEach(it);const J=F.length,$=B;for(let xt=0;xt<J;xt++){const St=F[xt];B=B.concat(St)}function j(xt,St,Dt){return St||ke("ExtrudeGeometry: vec does not exist"),xt.clone().addScaledVector(St,Dt)}const k=B.length;function X(xt,St,Dt){let Rt,Ct,ne;const $t=xt.x-St.x,le=xt.y-St.y,fe=Dt.x-xt.x,V=Dt.y-xt.y,Se=$t*$t+le*le,ge=$t*V-le*fe;if(Math.abs(ge)>Number.EPSILON){const I=Math.sqrt(Se),A=Math.sqrt(fe*fe+V*V),rt=St.x-le/I,ut=St.y+$t/I,gt=Dt.x-V/A,Ut=Dt.y+fe/A,It=((gt-rt)*V-(Ut-ut)*fe)/($t*V-le*fe);Rt=rt+$t*It-xt.x,Ct=ut+le*It-xt.y;const yt=Rt*Rt+Ct*Ct;if(yt<=2)return new zt(Rt,Ct);ne=Math.sqrt(yt/2)}else{let I=!1;$t>Number.EPSILON?fe>Number.EPSILON&&(I=!0):$t<-Number.EPSILON?fe<-Number.EPSILON&&(I=!0):Math.sign(le)===Math.sign(V)&&(I=!0),I?(Rt=-le,Ct=$t,ne=Math.sqrt(Se)):(Rt=$t,Ct=le,ne=Math.sqrt(Se/2))}return new zt(Rt/ne,Ct/ne)}const Q=[];for(let xt=0,St=$.length,Dt=St-1,Rt=xt+1;xt<St;xt++,Dt++,Rt++)Dt===St&&(Dt=0),Rt===St&&(Rt=0),Q[xt]=X($[xt],$[Dt],$[Rt]);const Y=[];let ct,Lt=Q.concat();for(let xt=0,St=J;xt<St;xt++){const Dt=F[xt];ct=[];for(let Rt=0,Ct=Dt.length,ne=Ct-1,$t=Rt+1;Rt<Ct;Rt++,ne++,$t++)ne===Ct&&(ne=0),$t===Ct&&($t=0),ct[Rt]=X(Dt[Rt],Dt[ne],Dt[$t]);Y.push(ct),Lt=Lt.concat(ct)}let Gt;if(M===0)Gt=vo.triangulateShape($,F);else{const xt=[],St=[];for(let Dt=0;Dt<M;Dt++){const Rt=Dt/M,Ct=S*Math.cos(Rt*Math.PI/2),ne=T*Math.sin(Rt*Math.PI/2)+L;for(let $t=0,le=$.length;$t<le;$t++){const fe=j($[$t],Q[$t],ne);Mt(fe.x,fe.y,-Ct),Rt===0&&xt.push(fe)}for(let $t=0,le=J;$t<le;$t++){const fe=F[$t];ct=Y[$t];const V=[];for(let Se=0,ge=fe.length;Se<ge;Se++){const I=j(fe[Se],ct[Se],ne);Mt(I.x,I.y,-Ct),Rt===0&&V.push(I)}Rt===0&&St.push(V)}}Gt=vo.triangulateShape(xt,St)}const G=Gt.length,vt=T+L;for(let xt=0;xt<k;xt++){const St=v?j(B[xt],Lt[xt],vt):B[xt];C?(U.copy(z.normals[0]).multiplyScalar(St.x),N.copy(z.binormals[0]).multiplyScalar(St.y),E.copy(D[0]).add(U).add(N),Mt(E.x,E.y,E.z)):Mt(St.x,St.y,0)}for(let xt=1;xt<=_;xt++)for(let St=0;St<k;St++){const Dt=v?j(B[St],Lt[St],vt):B[St];C?(U.copy(z.normals[xt]).multiplyScalar(Dt.x),N.copy(z.binormals[xt]).multiplyScalar(Dt.y),E.copy(D[xt]).add(U).add(N),Mt(E.x,E.y,E.z)):Mt(Dt.x,Dt.y,g/_*xt)}for(let xt=M-1;xt>=0;xt--){const St=xt/M,Dt=S*Math.cos(St*Math.PI/2),Rt=T*Math.sin(St*Math.PI/2)+L;for(let Ct=0,ne=$.length;Ct<ne;Ct++){const $t=j($[Ct],Q[Ct],Rt);Mt($t.x,$t.y,g+Dt)}for(let Ct=0,ne=F.length;Ct<ne;Ct++){const $t=F[Ct];ct=Y[Ct];for(let le=0,fe=$t.length;le<fe;le++){const V=j($t[le],ct[le],Rt);C?Mt(V.x,V.y+D[_-1].y,D[_-1].x+Dt):Mt(V.x,V.y,g+Dt)}}}Ot(),tt();function Ot(){const xt=l.length/3;if(v){let St=0,Dt=k*St;for(let Rt=0;Rt<G;Rt++){const Ct=Gt[Rt];Pt(Ct[2]+Dt,Ct[1]+Dt,Ct[0]+Dt)}St=_+M*2,Dt=k*St;for(let Rt=0;Rt<G;Rt++){const Ct=Gt[Rt];Pt(Ct[0]+Dt,Ct[1]+Dt,Ct[2]+Dt)}}else{for(let St=0;St<G;St++){const Dt=Gt[St];Pt(Dt[2],Dt[1],Dt[0])}for(let St=0;St<G;St++){const Dt=Gt[St];Pt(Dt[0]+k*_,Dt[1]+k*_,Dt[2]+k*_)}}s.addGroup(xt,l.length/3-xt,0)}function tt(){const xt=l.length/3;let St=0;ot($,St),St+=$.length;for(let Dt=0,Rt=F.length;Dt<Rt;Dt++){const Ct=F[Dt];ot(Ct,St),St+=Ct.length}s.addGroup(xt,l.length/3-xt,1)}function ot(xt,St){let Dt=xt.length;for(;--Dt>=0;){const Rt=Dt;let Ct=Dt-1;Ct<0&&(Ct=xt.length-1);for(let ne=0,$t=_+M*2;ne<$t;ne++){const le=k*ne,fe=k*(ne+1),V=St+Rt+le,Se=St+Ct+le,ge=St+Ct+fe,I=St+Rt+fe;_t(V,Se,ge,I)}}}function Mt(xt,St,Dt){p.push(xt),p.push(St),p.push(Dt)}function Pt(xt,St,Dt){Nt(xt),Nt(St),Nt(Dt);const Rt=l.length/3,Ct=O.generateTopUV(s,l,Rt-3,Rt-2,Rt-1);de(Ct[0]),de(Ct[1]),de(Ct[2])}function _t(xt,St,Dt,Rt){Nt(xt),Nt(St),Nt(Rt),Nt(St),Nt(Dt),Nt(Rt);const Ct=l.length/3,ne=O.generateSideWallUV(s,l,Ct-6,Ct-3,Ct-2,Ct-1);de(ne[0]),de(ne[1]),de(ne[3]),de(ne[1]),de(ne[2]),de(ne[3])}function Nt(xt){l.push(p[xt*3+0]),l.push(p[xt*3+1]),l.push(p[xt*3+2])}function de(xt){c.push(xt.x),c.push(xt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return Y2(i,s,t)}static fromJSON(t,i){const s=[];for(let c=0,h=t.shapes.length;c<h;c++){const d=i[t.shapes[c]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new lf[l.type]().fromJSON(l)),new km(s,t.options)}}const W2={generateTopUV:function(r,t,i,s,l){const c=t[i*3],h=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],_=t[l*3+1];return[new zt(c,h),new zt(d,p),new zt(m,_)]},generateSideWallUV:function(r,t,i,s,l,c){const h=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],_=t[s*3+1],g=t[s*3+2],v=t[l*3],S=t[l*3+1],T=t[l*3+2],L=t[c*3],M=t[c*3+1],y=t[c*3+2];return Math.abs(d-_)<Math.abs(h-m)?[new zt(h,1-p),new zt(m,1-g),new zt(v,1-T),new zt(L,1-y)]:[new zt(d,1-p),new zt(_,1-g),new zt(S,1-T),new zt(M,1-y)]}};function Y2(r,t,i){if(i.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];i.shapes.push(c.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Wl extends Dn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,g=t/d,v=i/p,S=[],T=[],L=[],M=[];for(let y=0;y<_;y++){const O=y*v-h;for(let D=0;D<m;D++){const C=D*g-c;T.push(C,-O,0),L.push(0,0,1),M.push(D/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let O=0;O<d;O++){const D=O+m*y,C=O+m*(y+1),z=O+1+m*(y+1),N=O+1+m*y;S.push(D,C,N),S.push(C,z,N)}this.setIndex(S),this.setAttribute("position",new Ke(T,3)),this.setAttribute("normal",new Ke(L,3)),this.setAttribute("uv",new Ke(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xm extends Dn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],_=[];let g=t;const v=(i-t)/l,S=new q,T=new zt;for(let L=0;L<=l;L++){for(let M=0;M<=s;M++){const y=c+M/s*h;S.x=g*Math.cos(y),S.y=g*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),T.x=(S.x/i+1)/2,T.y=(S.y/i+1)/2,_.push(T.x,T.y)}g+=v}for(let L=0;L<l;L++){const M=L*(s+1);for(let y=0;y<s;y++){const O=y+M,D=O,C=O+s+1,z=O+s+2,N=O+1;d.push(D,C,N),d.push(C,z,N)}}this.setIndex(d),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(m,3)),this.setAttribute("uv",new Ke(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _o extends Dn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const _=[],g=new q,v=new q,S=[],T=[],L=[],M=[];for(let y=0;y<=s;y++){const O=[],D=y/s,C=h+D*d,z=t*Math.cos(C),N=Math.sqrt(t*t-z*z);let U=0;y===0&&h===0?U=.5/i:y===s&&p===Math.PI&&(U=-.5/i);for(let E=0;E<=i;E++){const P=E/i,B=l+P*c;g.x=-N*Math.cos(B),g.y=z,g.z=N*Math.sin(B),T.push(g.x,g.y,g.z),v.copy(g).normalize(),L.push(v.x,v.y,v.z),M.push(P+U,1-D),O.push(m++)}_.push(O)}for(let y=0;y<s;y++)for(let O=0;O<i;O++){const D=_[y][O+1],C=_[y][O],z=_[y+1][O],N=_[y+1][O+1];(y!==0||h>0)&&S.push(D,C,N),(y!==s-1||p<Math.PI)&&S.push(C,z,N)}this.setIndex(S),this.setAttribute("position",new Ke(T,3)),this.setAttribute("normal",new Ke(L,3)),this.setAttribute("uv",new Ke(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cf extends Dn{constructor(t=new uM(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new q,p=new q,m=new zt;let _=new q;const g=[],v=[],S=[],T=[];L(),this.setIndex(T),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(S,2));function L(){for(let D=0;D<i;D++)M(D);M(c===!1?i:0),O(),y()}function M(D){_=t.getPointAt(D/i,_);const C=h.normals[D],z=h.binormals[D];for(let N=0;N<=l;N++){const U=N/l*Math.PI*2,E=Math.sin(U),P=-Math.cos(U);p.x=P*C.x+E*z.x,p.y=P*C.y+E*z.y,p.z=P*C.z+E*z.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=_.x+s*p.x,d.y=_.y+s*p.y,d.z=_.z+s*p.z,g.push(d.x,d.y,d.z)}}function y(){for(let D=1;D<=i;D++)for(let C=1;C<=l;C++){const z=(l+1)*(D-1)+(C-1),N=(l+1)*D+(C-1),U=(l+1)*D+C,E=(l+1)*(D-1)+C;T.push(z,N,E),T.push(N,U,E)}}function O(){for(let D=0;D<=i;D++)for(let C=0;C<=l;C++)m.x=D/i,m.y=C/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new cf(new lf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function To(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(Wx(l))l.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Wx(l[0])){const c=[];for(let h=0,d=l.length;h<d;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ni(r){const t={};for(let i=0;i<r.length;i++){const s=To(r[i]);for(const l in s)t[l]=s[l]}return t}function Wx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Z2(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function vM(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const K2={clone:To,merge:ni};var J2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ba extends pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J2,this.fragmentShader=Q2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=To(t.uniforms),this.uniformsGroups=Z2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Ue().setHex(l.value);break;case"v2":this.uniforms[s].value=new zt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new q().fromArray(l.value);break;case"v4":this.uniforms[s].value=new dn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new be().fromArray(l.value);break;case"m4":this.uniforms[s].value=new un().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class $2 extends ba{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ei extends pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vm,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tA extends pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eA extends pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class df extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Mp=new un,Yx=new q,Zx=new q;class qm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bm,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Yx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yx),Zx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Zx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){Mp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(Mp,t.coordinateSystem,t.reversedDepth);const c=this._frameExtents,h=l?l.z/c.x:1,d=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;t.coordinateSystem===Hl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(Mp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hu=new q,Gu=new Ds,pa=new q;class _M extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hu,Gu,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,pa.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Hu,Gu,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,pa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ws=new q,Kx=new zt,Jx=new zt;class hi extends _M{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=sf*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-t/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ws.x,ws.y).multiplyScalar(-t/ws.z)}getViewSize(t,i){return this.getViewBounds(t,Kx,Jx),i.subVectors(Jx,Kx)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ju*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class nA extends qm{constructor(){super(new hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=sf*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Qx extends df{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new nA}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class iA extends qm{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class $x extends df{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new iA}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class jm extends _M{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class aA extends qm{constructor(){super(new jm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sA extends df{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new aA}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class rA extends df{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const fo=-90,ho=1;class oA extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(fo,ho,t,i);l.layers=this.layers,this.add(l);const c=new hi(fo,ho,t,i);c.layers=this.layers,this.add(c);const h=new hi(fo,ho,t,i);h.layers=this.layers,this.add(h);const d=new hi(fo,ho,t,i);d.layers=this.layers,this.add(d);const p=new hi(fo,ho,t,i);p.layers=this.layers,this.add(p);const m=new hi(fo,ho,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===xa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Hl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const L=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=L,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(g,v,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class lA extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class cA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,me("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class ty{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Le(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qm=class Qm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Qm.prototype.isMatrix2=!0;let ey=Qm;class uA extends m2{constructor(t=10,i=10,s=4473924,l=8947848){s=new Ue(s),l=new Ue(l);const c=i/2,h=t/i,d=t/2,p=[],m=[];for(let v=0,S=0,T=-d;v<=i;v++,T+=h){p.push(-d,0,T,d,0,T),p.push(T,0,-d,T,0,d);const L=v===c?s:l;L.toArray(m,S),S+=3,L.toArray(m,S),S+=3,L.toArray(m,S),S+=3,L.toArray(m,S),S+=3}const _=new Dn;_.setAttribute("position",new Ke(p,3)),_.setAttribute("color",new Ke(m,3));const g=new iM({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class fA extends Us{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ny(r,t,i,s){const l=hA(s);switch(i){case YS:return r*t;case KS:return r*t/l.components*l.byteLength;case Dm:return r*t/l.components*l.byteLength;case hr:return r*t*2/l.components*l.byteLength;case Lm:return r*t*2/l.components*l.byteLength;case ZS:return r*t*3/l.components*l.byteLength;case Ji:return r*t*4/l.components*l.byteLength;case Um:return r*t*4/l.components*l.byteLength;case Wu:case Yu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zu:case Ku:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vp:case Xp:return Math.max(r,16)*Math.max(t,8)/4;case Gp:case kp:return Math.max(r,8)*Math.max(t,8)/2;case qp:case jp:case Yp:case Zp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wp:case $u:case Kp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case $p:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case tm:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case em:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case nm:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case im:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case am:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case sm:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case rm:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case om:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case lm:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case cm:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case um:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fm:case hm:case dm:return Math.ceil(r/4)*Math.ceil(t/4)*16;case pm:case mm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case tf:case gm:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hA(r){switch(r){case Ai:case XS:return{byteLength:1,components:1};case Bl:case qS:case Ma:return{byteLength:2,components:1};case wm:case Nm:return{byteLength:2,components:4};case Sa:case Rm:case _a:return{byteLength:4,components:1};case jS:case WS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cm}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xM(){let r=null,t=!1,i=null,s=null;function l(c,h){s=r.requestAnimationFrame(l),i(c,h)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function dA(r){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,g=m.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const _=p.array,g=p.updateRanges;if(r.bindBuffer(m,d),g.length===0)r.bufferSubData(m,0,_);else{g.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<g.length;S++){const T=g[v],L=g[S];L.start<=T.start+T.count+1?T.count=Math.max(T.count,L.start+L.count-T.start):(++v,g[v]=L)}g.length=v+1;for(let S=0,T=g.length;S<T;S++){const L=g[S];r.bufferSubData(m,L.start*_.BYTES_PER_ELEMENT,_,L.start,L.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var pA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_A=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,HA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XA="gl_FragColor = linearToOutputTexel( gl_FragColor );",qA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$A=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,r3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,o3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,v3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,J3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:pA,alphahash_pars_fragment:mA,alphamap_fragment:gA,alphamap_pars_fragment:vA,alphatest_fragment:_A,alphatest_pars_fragment:xA,aomap_fragment:yA,aomap_pars_fragment:SA,batching_pars_vertex:MA,batching_vertex:bA,begin_vertex:EA,beginnormal_vertex:TA,bsdfs:AA,iridescence_fragment:CA,bumpmap_pars_fragment:RA,clipping_planes_fragment:wA,clipping_planes_pars_fragment:NA,clipping_planes_pars_vertex:DA,clipping_planes_vertex:LA,color_fragment:UA,color_pars_fragment:OA,color_pars_vertex:PA,color_vertex:zA,common:IA,cube_uv_reflection_fragment:BA,defaultnormal_vertex:FA,displacementmap_pars_vertex:HA,displacementmap_vertex:GA,emissivemap_fragment:VA,emissivemap_pars_fragment:kA,colorspace_fragment:XA,colorspace_pars_fragment:qA,envmap_fragment:jA,envmap_common_pars_fragment:WA,envmap_pars_fragment:YA,envmap_pars_vertex:ZA,envmap_physical_pars_fragment:r3,envmap_vertex:KA,fog_vertex:JA,fog_pars_vertex:QA,fog_fragment:$A,fog_pars_fragment:t3,gradientmap_pars_fragment:e3,lightmap_pars_fragment:n3,lights_lambert_fragment:i3,lights_lambert_pars_fragment:a3,lights_pars_begin:s3,lights_toon_fragment:o3,lights_toon_pars_fragment:l3,lights_phong_fragment:c3,lights_phong_pars_fragment:u3,lights_physical_fragment:f3,lights_physical_pars_fragment:h3,lights_fragment_begin:d3,lights_fragment_maps:p3,lights_fragment_end:m3,lightprobes_pars_fragment:g3,logdepthbuf_fragment:v3,logdepthbuf_pars_fragment:_3,logdepthbuf_pars_vertex:x3,logdepthbuf_vertex:y3,map_fragment:S3,map_pars_fragment:M3,map_particle_fragment:b3,map_particle_pars_fragment:E3,metalnessmap_fragment:T3,metalnessmap_pars_fragment:A3,morphinstance_vertex:C3,morphcolor_vertex:R3,morphnormal_vertex:w3,morphtarget_pars_vertex:N3,morphtarget_vertex:D3,normal_fragment_begin:L3,normal_fragment_maps:U3,normal_pars_fragment:O3,normal_pars_vertex:P3,normal_vertex:z3,normalmap_pars_fragment:I3,clearcoat_normal_fragment_begin:B3,clearcoat_normal_fragment_maps:F3,clearcoat_pars_fragment:H3,iridescence_pars_fragment:G3,opaque_fragment:V3,packing:k3,premultiplied_alpha_fragment:X3,project_vertex:q3,dithering_fragment:j3,dithering_pars_fragment:W3,roughnessmap_fragment:Y3,roughnessmap_pars_fragment:Z3,shadowmap_pars_fragment:K3,shadowmap_pars_vertex:J3,shadowmap_vertex:Q3,shadowmask_pars_fragment:$3,skinbase_vertex:tC,skinning_pars_vertex:eC,skinning_vertex:nC,skinnormal_vertex:iC,specularmap_fragment:aC,specularmap_pars_fragment:sC,tonemapping_fragment:rC,tonemapping_pars_fragment:oC,transmission_fragment:lC,transmission_pars_fragment:cC,uv_pars_fragment:uC,uv_pars_vertex:fC,uv_vertex:hC,worldpos_vertex:dC,background_vert:pC,background_frag:mC,backgroundCube_vert:gC,backgroundCube_frag:vC,cube_vert:_C,cube_frag:xC,depth_vert:yC,depth_frag:SC,distance_vert:MC,distance_frag:bC,equirect_vert:EC,equirect_frag:TC,linedashed_vert:AC,linedashed_frag:CC,meshbasic_vert:RC,meshbasic_frag:wC,meshlambert_vert:NC,meshlambert_frag:DC,meshmatcap_vert:LC,meshmatcap_frag:UC,meshnormal_vert:OC,meshnormal_frag:PC,meshphong_vert:zC,meshphong_frag:IC,meshphysical_vert:BC,meshphysical_frag:FC,meshtoon_vert:HC,meshtoon_frag:GC,points_vert:VC,points_frag:kC,shadow_vert:XC,shadow_frag:qC,sprite_vert:jC,sprite_frag:WC},Kt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},ga={basic:{uniforms:ni([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ni([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ni([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ni([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ni([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ni([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ni([Kt.points,Kt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ni([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ni([Kt.common,Kt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ni([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ni([Kt.sprite,Kt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:ni([Kt.common,Kt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:ni([Kt.lights,Kt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};ga.physical={uniforms:ni([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Vu={r:0,b:0,g:0},YC=new un,yM=new be;yM.set(-1,0,0,0,1,0,0,0,1);function ZC(r,t,i,s,l,c){const h=new Ue(0);let d=l===!0?0:1,p,m,_=null,g=0,v=null;function S(O){let D=O.isScene===!0?O.background:null;if(D&&D.isTexture){const C=O.backgroundBlurriness>0;D=t.get(D,C)}return D}function T(O){let D=!1;const C=S(O);C===null?M(h,d):C&&C.isColor&&(M(C,1),D=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function L(O,D){const C=S(D);C&&(C.isCubeTexture||C.mapping===ff)?(m===void 0&&(m=new Ze(new Ti(1,1,1),new ba({name:"BackgroundCubeMaterial",uniforms:To(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(YC.makeRotationFromEuler(D.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(yM),m.material.toneMapped=Ge.getTransfer(C.colorSpace)!==tn,(_!==C||g!==C.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,_=C,g=C.version,v=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ze(new Wl(2,2),new ba({name:"BackgroundMaterial",uniforms:To(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ge.getTransfer(C.colorSpace)!==tn,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||g!==C.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,g=C.version,v=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function M(O,D){O.getRGB(Vu,vM(r)),i.buffers.color.setClear(Vu.r,Vu.g,Vu.b,D,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),d=D,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,M(h,d)},render:T,addToRenderList:L,dispose:y}}function KC(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,h=!1;function d(F,W,it,J,$){let j=!1;const k=g(F,J,it,W);c!==k&&(c=k,m(c.object)),j=S(F,J,it,$),j&&T(F,J,it,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,C(F,W,it,J),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function p(){return r.createVertexArray()}function m(F){return r.bindVertexArray(F)}function _(F){return r.deleteVertexArray(F)}function g(F,W,it,J){const $=J.wireframe===!0;let j=s[W.id];j===void 0&&(j={},s[W.id]=j);const k=F.isInstancedMesh===!0?F.id:0;let X=j[k];X===void 0&&(X={},j[k]=X);let Q=X[it.id];Q===void 0&&(Q={},X[it.id]=Q);let Y=Q[$];return Y===void 0&&(Y=v(p()),Q[$]=Y),Y}function v(F){const W=[],it=[],J=[];for(let $=0;$<i;$++)W[$]=0,it[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:it,attributeDivisors:J,object:F,attributes:{},index:null}}function S(F,W,it,J){const $=c.attributes,j=W.attributes;let k=0;const X=it.getAttributes();for(const Q in X)if(X[Q].location>=0){const ct=$[Q];let Lt=j[Q];if(Lt===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(Lt=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(Lt=F.instanceColor)),ct===void 0||ct.attribute!==Lt||Lt&&ct.data!==Lt.data)return!0;k++}return c.attributesNum!==k||c.index!==J}function T(F,W,it,J){const $={},j=W.attributes;let k=0;const X=it.getAttributes();for(const Q in X)if(X[Q].location>=0){let ct=j[Q];ct===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ct=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ct=F.instanceColor));const Lt={};Lt.attribute=ct,ct&&ct.data&&(Lt.data=ct.data),$[Q]=Lt,k++}c.attributes=$,c.attributesNum=k,c.index=J}function L(){const F=c.newAttributes;for(let W=0,it=F.length;W<it;W++)F[W]=0}function M(F){y(F,0)}function y(F,W){const it=c.newAttributes,J=c.enabledAttributes,$=c.attributeDivisors;it[F]=1,J[F]===0&&(r.enableVertexAttribArray(F),J[F]=1),$[F]!==W&&(r.vertexAttribDivisor(F,W),$[F]=W)}function O(){const F=c.newAttributes,W=c.enabledAttributes;for(let it=0,J=W.length;it<J;it++)W[it]!==F[it]&&(r.disableVertexAttribArray(it),W[it]=0)}function D(F,W,it,J,$,j,k){k===!0?r.vertexAttribIPointer(F,W,it,$,j):r.vertexAttribPointer(F,W,it,J,$,j)}function C(F,W,it,J){L();const $=J.attributes,j=it.getAttributes(),k=W.defaultAttributeValues;for(const X in j){const Q=j[X];if(Q.location>=0){let Y=$[X];if(Y===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),Y!==void 0){const ct=Y.normalized,Lt=Y.itemSize,Gt=t.get(Y);if(Gt===void 0)continue;const G=Gt.buffer,vt=Gt.type,Ot=Gt.bytesPerElement,tt=vt===r.INT||vt===r.UNSIGNED_INT||Y.gpuType===Rm;if(Y.isInterleavedBufferAttribute){const ot=Y.data,Mt=ot.stride,Pt=Y.offset;if(ot.isInstancedInterleavedBuffer){for(let _t=0;_t<Q.locationSize;_t++)y(Q.location+_t,ot.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let _t=0;_t<Q.locationSize;_t++)M(Q.location+_t);r.bindBuffer(r.ARRAY_BUFFER,G);for(let _t=0;_t<Q.locationSize;_t++)D(Q.location+_t,Lt/Q.locationSize,vt,ct,Mt*Ot,(Pt+Lt/Q.locationSize*_t)*Ot,tt)}else{if(Y.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)y(Q.location+ot,Y.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ot=0;ot<Q.locationSize;ot++)M(Q.location+ot);r.bindBuffer(r.ARRAY_BUFFER,G);for(let ot=0;ot<Q.locationSize;ot++)D(Q.location+ot,Lt/Q.locationSize,vt,ct,Lt*Ot,Lt/Q.locationSize*ot*Ot,tt)}}else if(k!==void 0){const ct=k[X];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(Q.location,ct);break;case 3:r.vertexAttrib3fv(Q.location,ct);break;case 4:r.vertexAttrib4fv(Q.location,ct);break;default:r.vertexAttrib1fv(Q.location,ct)}}}}O()}function z(){P();for(const F in s){const W=s[F];for(const it in W){const J=W[it];for(const $ in J){const j=J[$];for(const k in j)_(j[k].object),delete j[k];delete J[$]}}delete s[F]}}function N(F){if(s[F.id]===void 0)return;const W=s[F.id];for(const it in W){const J=W[it];for(const $ in J){const j=J[$];for(const k in j)_(j[k].object),delete j[k];delete J[$]}}delete s[F.id]}function U(F){for(const W in s){const it=s[W];for(const J in it){const $=it[J];if($[F.id]===void 0)continue;const j=$[F.id];for(const k in j)_(j[k].object),delete j[k];delete $[F.id]}}}function E(F){for(const W in s){const it=s[W],J=F.isInstancedMesh===!0?F.id:0,$=it[J];if($!==void 0){for(const j in $){const k=$[j];for(const X in k)_(k[X].object),delete k[X];delete $[j]}delete it[J],Object.keys(it).length===0&&delete s[W]}}}function P(){B(),h=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:P,resetDefaultState:B,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:L,enableAttribute:M,disableUnusedAttributes:O}}function JC(r,t,i){let s;function l(p){s=p}function c(p,m){r.drawArrays(s,p,m),i.update(m,s,1)}function h(p,m,_){_!==0&&(r.drawArraysInstanced(s,p,m,_),i.update(m,s,_))}function d(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let v=0;for(let S=0;S<_;S++)v+=m[S];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function QC(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==Ji&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const E=U===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Ai&&U!==_a&&!E&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function p(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(me("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:L,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:C,maxSamples:z,samples:N}}function $C(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Wa,d=new be,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||l;return l=v,s=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,S){const T=g.clippingPlanes,L=g.clipIntersection,M=g.clipShadows,y=r.get(g);if(!l||T===null||T.length===0||c&&!M)c?_(null):m();else{const O=c?0:s,D=O*4;let C=y.clippingState||null;p.value=C,C=_(T,v,D,S);for(let z=0;z!==D;++z)C[z]=i[z];y.clippingState=C,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,v,S,T){const L=g!==null?g.length:0;let M=null;if(L!==0){if(M=p.value,T!==!0||M===null){const y=S+L*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<y)&&(M=new Float32Array(y));for(let D=0,C=S;D!==L;++D,C+=4)h.copy(g[D]).applyMatrix4(O,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=L,t.numIntersection=0,M}}const xo=4,tR=6,eR=20,nR=256,Rl=new jm,iy=new Ue;let bp=null,Ep=0,Tp=0,Ap=!1;const iR=new q,rr=new q;class ay{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=iR}=c;bp=this._renderer.getRenderTarget(),Ep=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ry(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bp,Ep,Tp),this._renderer.xr.enabled=Ap,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===fr||t.mapping===bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bp=this._renderer.getRenderTarget(),Ep=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ma,format:Ji,colorSpace:ef,depthBuffer:!1},l=sy(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sy(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=aR(c)),this._blurMaterial=rR(c,t,i),this._ggxMaterial=sR(c,t,i)}return l}_compileMaterial(t){const i=new Ze(new Dn,t);this._renderer.compile(i,Rl)}_sceneToCubeUV(t,i,s,l,c){const p=new hi(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(iy),g.toneMapping=ya,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new Ti,new or({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,M=L.material;let y=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,y=!0):(M.color.copy(iy),y=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[D],c.y,c.z)):C===1?(p.up.set(0,0,m[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[D],c.z)):(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[D]));const z=this._cubeSize;po(l,C*z,D>2?z:0,z,z),g.setRenderTarget(l),y&&g.render(L,p),g.render(t,p)}g.toneMapping=S,g.autoClear=v,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===fr||t.mapping===bo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=oy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ry());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;po(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Rl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const p=h.uniforms,m=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-_*_),v=m*1.25,S=g*v,{_lodMax:T}=this,L=this._sizeLods[s],M=3*L*(s>T-xo?s-T+xo:0),y=4*(this._cubeSize-L);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=T-i,po(c,M,y,3*L,2*L),l.setRenderTarget(c),l.render(d,Rl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-s,po(t,M,y,3*L,2*L),l.setRenderTarget(t),l.render(d,Rl)}_blur(t,i,s,l){const c=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,c,i,s,h),this._blurPass(c,t,s,s,h)}_blurPass(t,i,s,l,c){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-s;const _=this._sizeLods[l],g=3*_*(l>this._lodMax-xo?l-this._lodMax+xo:0),v=4*(this._cubeSize-_);po(i,g,v,3*_,2*_),h.setRenderTarget(i),h.render(p,Rl)}}function aR(r){const t=[],i=[];let s=r;const l=r-xo+1+tR;for(let c=0;c<l;c++){const h=Math.pow(2,s);t.push(h);const d=1/(h-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,S=3,T=new Float32Array(S*v*g),L=new Float32Array(S*v*g);for(let y=0;y<g;y++){const O=y%3*2/3-1,D=y>2?0:-1,C=[O,D,0,O+2/3,D,0,O+2/3,D+1,0,O,D,0,O+2/3,D+1,0,O,D+1,0];T.set(C,S*v*y);for(let z=0;z<v;z++){const N=_[z*2]*2-1,U=_[z*2+1]*2-1;y===0?rr.set(1,U,N):y===1?rr.set(-N,1,-U):y===2?rr.set(-N,U,1):y===3?rr.set(-1,U,-N):y===4?rr.set(-N,-1,U):rr.set(N,U,-1),rr.toArray(L,(y*v+z)*S)}}const M=new Dn;M.setAttribute("position",new $i(T,S)),M.setAttribute("outputDirection",new $i(L,S)),i.push(new Ze(M,null)),s>xo&&s--}return{lodMeshes:i,sizeLods:t}}function sy(r,t,i){const s=new Qi(r,t,i);return s.texture.mapping=ff,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function po(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function sR(r,t,i){return new ba({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function rR(r,t,i){return new ba({name:"SphericalGaussianBlur",defines:{SAMPLES:eR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function ry(){return new ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function oy(){return new ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function pf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class SM extends Qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new sM(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ti(5,5,5),c=new ba({name:"CubemapFromEquirect",uniforms:To(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:Ka});c.uniforms.tEquirect.value=i;const h=new Ze(l,c),d=i.minFilter;return i.minFilter===lr&&(i.minFilter=Yn),new oA(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function oR(r){let t=new WeakMap,i=new WeakMap,s=null;function l(v,S=!1){return v==null?null:S?h(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===Wd||S===Yd)if(t.has(v)){const T=t.get(v).texture;return d(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const L=new SM(T.height);return L.fromEquirectangularTexture(r,v),t.set(v,L),v.addEventListener("dispose",m),d(L.texture,v.mapping)}else return null}}return v}function h(v){if(v&&v.isTexture){const S=v.mapping,T=S===Wd||S===Yd,L=S===fr||S===bo;if(T||L){let M=i.get(v);const y=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new ay(r)),M=T?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const O=v.image;return T&&O&&O.height>0||L&&O&&p(O)?(s===null&&(s=new ay(r)),M=T?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",_),M.texture):null}}}return v}function d(v,S){return S===Wd?v.mapping=fr:S===Yd&&(v.mapping=bo),v}function p(v){let S=0;const T=6;for(let L=0;L<T;L++)v[L]!==void 0&&S++;return S===T}function m(v){const S=v.target;S.removeEventListener("dispose",m);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function _(v){const S=v.target;S.removeEventListener("dispose",_);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function lR(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&So("WebGLRenderer: "+s+" extension not supported."),l}}}function cR(r,t,i,s){const l={},c=new WeakMap;function h(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",h),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER)}function m(g){const v=[],S=g.index,T=g.attributes.position;let L=0;if(T===void 0)return;if(S!==null){const O=S.array;L=S.version;for(let D=0,C=O.length;D<C;D+=3){const z=O[D+0],N=O[D+1],U=O[D+2];v.push(z,N,N,U,U,z)}}else{const O=T.array;L=T.version;for(let D=0,C=O.length/3-1;D<C;D+=3){const z=D+0,N=D+1,U=D+2;v.push(z,N,N,U,U,z)}}const M=new(T.count>=65535?nM:eM)(v,1);M.version=L;const y=c.get(g);y&&t.remove(y),c.set(g,M)}function _(g){const v=c.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function uR(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function p(g,v){r.drawElements(s,v,c,g*h),i.update(v,s,1)}function m(g,v,S){S!==0&&(r.drawElementsInstanced(s,v,c,g*h,S),i.update(v,s,S))}function _(g,v,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,g,0,S);let L=0;for(let M=0;M<S;M++)L+=v[M];i.update(L,s,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function fR(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:ke("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function hR(r,t,i){const s=new WeakMap,l=new dn;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(d);if(v===void 0||v.count!==g){let B=function(){E.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var S=B;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,L=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),L===!0&&(C=2),M===!0&&(C=3);let z=d.attributes.position.count*C,N=1;z>t.maxTextureSize&&(N=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const U=new Float32Array(z*N*4*g),E=new QS(U,z,N,g);E.type=_a,E.needsUpdate=!0;const P=C*4;for(let F=0;F<g;F++){const W=y[F],it=O[F],J=D[F],$=z*N*4*F;for(let j=0;j<W.count;j++){const k=j*P;T===!0&&(l.fromBufferAttribute(W,j),U[$+k+0]=l.x,U[$+k+1]=l.y,U[$+k+2]=l.z,U[$+k+3]=0),L===!0&&(l.fromBufferAttribute(it,j),U[$+k+4]=l.x,U[$+k+5]=l.y,U[$+k+6]=l.z,U[$+k+7]=0),M===!0&&(l.fromBufferAttribute(J,j),U[$+k+8]=l.x,U[$+k+9]=l.y,U[$+k+10]=l.z,U[$+k+11]=J.itemSize===4?l.w:1)}}v={count:g,texture:E,size:new zt(z,N)},s.set(d,v),d.addEventListener("dispose",B)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const L=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",L),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function dR(r,t,i,s,l){let c=new WeakMap;function h(m){const _=l.render.frame,g=m.geometry,v=t.get(m,g);if(c.get(v)!==_&&(t.update(v),c.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return v}function d(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const pR={[zS]:"LINEAR_TONE_MAPPING",[IS]:"REINHARD_TONE_MAPPING",[BS]:"CINEON_TONE_MAPPING",[FS]:"ACES_FILMIC_TONE_MAPPING",[GS]:"AGX_TONE_MAPPING",[VS]:"NEUTRAL_TONE_MAPPING",[HS]:"CUSTOM_TONE_MAPPING"};function mR(r,t,i,s,l,c){const h=new Qi(t,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new Dn;m.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ke([0,2,0,0,2,0],2));const _=new $2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Ze(m,_),v=new jm(-1,1,1,-1,0,1);let S=null,T=null,L=!1,M,y=null,O=[],D=!1;this.setSize=function(C,z){h.setSize(C,z),d!==null&&d.setSize(C,z),p!==null&&p.setSize(C,z);for(let N=0;N<O.length;N++){const U=O[N];U.setSize&&U.setSize(C,z)}},this.setEffects=function(C){O=C,D=O.length>0&&O[0].isRenderPass===!0;const z=h.width,N=h.height;O.length>0&&d===null&&(d=new Qi(z,N,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new Qi(z,N,{type:Ma,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<O.length;U++){const E=O[U];E.setSize&&E.setSize(z,N)}},this.begin=function(C,z){if(L||C.toneMapping===ya&&O.length===0)return!1;if(y=z,z!==null){const N=z.width,U=z.height;(h.width!==N||h.height!==U)&&this.setSize(N,U)}return D===!1&&C.setRenderTarget(h),M=C.toneMapping,C.toneMapping=ya,!0},this.hasRenderPass=function(){return D},this.end=function(C,z){C.toneMapping=M,L=!0;let N=h,U=d;for(let E=0;E<O.length;E++){const P=O[E];P.enabled!==!1&&(P.render(C,U,N,z),P.needsSwap!==!1&&(N=U,U=U===d?p:d))}if(S!==C.outputColorSpace||T!==C.toneMapping){S=C.outputColorSpace,T=C.toneMapping,_.defines={},Ge.getTransfer(S)===tn&&(_.defines.SRGB_TRANSFER="");const E=pR[T];E&&(_.defines[E]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(y),C.render(g,v),y=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const MM=new ai,Mm=new Gl(1,1),bM=new QS,EM=new KT,TM=new sM,ly=[],cy=[],uy=new Float32Array(16),fy=new Float32Array(9),hy=new Float32Array(4);function Co(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=ly[l];if(c===void 0&&(c=new Float32Array(l),ly[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function wn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Nn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function mf(r,t){let i=cy[t];i===void 0&&(i=new Int32Array(t),cy[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function gR(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function vR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2fv(this.addr,t),Nn(i,t)}}function _R(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(wn(i,t))return;r.uniform3fv(this.addr,t),Nn(i,t)}}function xR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4fv(this.addr,t),Nn(i,t)}}function yR(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Nn(i,t)}else{if(wn(i,s))return;hy.set(s),r.uniformMatrix2fv(this.addr,!1,hy),Nn(i,s)}}function SR(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Nn(i,t)}else{if(wn(i,s))return;fy.set(s),r.uniformMatrix3fv(this.addr,!1,fy),Nn(i,s)}}function MR(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(wn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Nn(i,t)}else{if(wn(i,s))return;uy.set(s),r.uniformMatrix4fv(this.addr,!1,uy),Nn(i,s)}}function bR(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function ER(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2iv(this.addr,t),Nn(i,t)}}function TR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;r.uniform3iv(this.addr,t),Nn(i,t)}}function AR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4iv(this.addr,t),Nn(i,t)}}function CR(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function RR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;r.uniform2uiv(this.addr,t),Nn(i,t)}}function wR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;r.uniform3uiv(this.addr,t),Nn(i,t)}}function NR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;r.uniform4uiv(this.addr,t),Nn(i,t)}}function DR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Mm.compareFunction=i.isReversedDepthBuffer()?Pm:Om,c=Mm):c=MM,i.setTexture2D(t||c,l)}function LR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||EM,l)}function UR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||TM,l)}function OR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||bM,l)}function PR(r){switch(r){case 5126:return gR;case 35664:return vR;case 35665:return _R;case 35666:return xR;case 35674:return yR;case 35675:return SR;case 35676:return MR;case 5124:case 35670:return bR;case 35667:case 35671:return ER;case 35668:case 35672:return TR;case 35669:case 35673:return AR;case 5125:return CR;case 36294:return RR;case 36295:return wR;case 36296:return NR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return UR;case 36289:case 36303:case 36311:case 36292:return OR}}function zR(r,t){r.uniform1fv(this.addr,t)}function IR(r,t){const i=Co(t,this.size,2);r.uniform2fv(this.addr,i)}function BR(r,t){const i=Co(t,this.size,3);r.uniform3fv(this.addr,i)}function FR(r,t){const i=Co(t,this.size,4);r.uniform4fv(this.addr,i)}function HR(r,t){const i=Co(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function GR(r,t){const i=Co(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function VR(r,t){const i=Co(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function kR(r,t){r.uniform1iv(this.addr,t)}function XR(r,t){r.uniform2iv(this.addr,t)}function qR(r,t){r.uniform3iv(this.addr,t)}function jR(r,t){r.uniform4iv(this.addr,t)}function WR(r,t){r.uniform1uiv(this.addr,t)}function YR(r,t){r.uniform2uiv(this.addr,t)}function ZR(r,t){r.uniform3uiv(this.addr,t)}function KR(r,t){r.uniform4uiv(this.addr,t)}function JR(r,t,i){const s=this.cache,l=t.length,c=mf(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Mm:h=MM;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function QR(r,t,i){const s=this.cache,l=t.length,c=mf(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||EM,c[h])}function $R(r,t,i){const s=this.cache,l=t.length,c=mf(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||TM,c[h])}function tw(r,t,i){const s=this.cache,l=t.length,c=mf(i,l);wn(s,c)||(r.uniform1iv(this.addr,c),Nn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||bM,c[h])}function ew(r){switch(r){case 5126:return zR;case 35664:return IR;case 35665:return BR;case 35666:return FR;case 35674:return HR;case 35675:return GR;case 35676:return VR;case 5124:case 35670:return kR;case 35667:case 35671:return XR;case 35668:case 35672:return qR;case 35669:case 35673:return jR;case 5125:return WR;case 36294:return YR;case 36295:return ZR;case 36296:return KR;case 35678:case 36198:case 36298:case 36306:case 35682:return JR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return tw}}class nw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=PR(i.type)}}class iw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ew(i.type)}}class aw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Cp=/(\w+)(\])?(\[|\.)?/g;function dy(r,t){r.seq.push(t),r.map[t.id]=t}function sw(r,t,i){const s=r.name,l=s.length;for(Cp.lastIndex=0;;){const c=Cp.exec(s),h=Cp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){dy(i,m===void 0?new nw(d,r,t):new iw(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new aw(d),dy(i,g)),i=g}}}class Qu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);sw(d,p,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function py(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const rw=37297;let ow=0;function lw(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const my=new be;function cw(r){Ge._getMatrix(my,Ge.workingColorSpace,r);const t=`mat3( ${my.elements.map(i=>i.toFixed(4))} )`;switch(Ge.getTransfer(r)){case nf:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gy(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+lw(r.getShaderSource(t),d)}else return c}function uw(r,t){const i=cw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const fw={[zS]:"Linear",[IS]:"Reinhard",[BS]:"Cineon",[FS]:"ACESFilmic",[GS]:"AgX",[VS]:"Neutral",[HS]:"Custom"};function hw(r,t){const i=fw[t];return i===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ku=new q;function dw(){Ge.getLuminanceCoefficients(ku);const r=ku.x.toFixed(4),t=ku.y.toFixed(4),i=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function mw(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gw(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Ll(r){return r!==""}function vy(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _y(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(r){return r.replace(vw,xw)}const _w=new Map;function xw(r,t){let i=Re[t];if(i===void 0){const s=_w.get(t);if(s!==void 0)i=Re[s],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bm(i)}const yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xy(r){return r.replace(yw,Sw)}function Sw(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yy(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Mw={[ju]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function bw(r){return Mw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ew={[fr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[ff]:"ENVMAP_TYPE_CUBE_UV"};function Tw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Ew[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Aw={[bo]:"ENVMAP_MODE_REFRACTION"};function Cw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Aw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Rw={[PS]:"ENVMAP_BLENDING_MULTIPLY",[AT]:"ENVMAP_BLENDING_MIX",[CT]:"ENVMAP_BLENDING_ADD"};function ww(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Rw[r.combine]||"ENVMAP_BLENDING_NONE"}function Nw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Dw(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=bw(i),m=Tw(i),_=Cw(i),g=ww(i),v=Nw(i),S=pw(i),T=mw(c),L=l.createProgram();let M,y,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ll).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ll).join(`
`),y.length>0&&(y+=`
`)):(M=[yy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),y=[yy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ya?"#define TONE_MAPPING":"",i.toneMapping!==ya?Re.tonemapping_pars_fragment:"",i.toneMapping!==ya?hw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,uw("linearToOutputTexel",i.outputColorSpace),dw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ll).join(`
`)),h=bm(h),h=vy(h,i),h=_y(h,i),d=bm(d),d=vy(d,i),d=_y(d,i),h=xy(h),d=xy(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=O+M+h,C=O+y+d,z=py(l,l.VERTEX_SHADER,D),N=py(l,l.FRAGMENT_SHADER,C);l.attachShader(L,z),l.attachShader(L,N),i.index0AttributeName!==void 0?l.bindAttribLocation(L,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function U(F){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(L)||"",it=l.getShaderInfoLog(z)||"",J=l.getShaderInfoLog(N)||"",$=W.trim(),j=it.trim(),k=J.trim();let X=!0,Q=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,L,z,N);else{const Y=gy(l,z,"vertex"),ct=gy(l,N,"fragment");ke("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+$+`
`+Y+`
`+ct)}else $!==""?me("WebGLProgram: Program Info Log:",$):(j===""||k==="")&&(Q=!1);Q&&(F.diagnostics={runnable:X,programLog:$,vertexShader:{log:j,prefix:M},fragmentShader:{log:k,prefix:y}})}l.deleteShader(z),l.deleteShader(N),E=new Qu(l,L),P=gw(l,L)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let B=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=l.getProgramParameter(L,rw)),B},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ow++,this.cacheKey=t,this.usedTimes=1,this.program=L,this.vertexShader=z,this.fragmentShader=N,this}let Lw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Ow(t),i.set(t,s)),s}}class Ow{constructor(t){this.id=Lw++,this.code=t,this.usedTimes=0}}function Pw(r){return r===hr||r===$u||r===tf}function zw(r,t,i,s,l,c){const h=new $S,d=new Uw,p=new Set,m=[],_=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return p.add(E),E===0?"uv":`uv${E}`}function L(E,P,B,F,W,it){const J=F.fog,$=W.geometry,j=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,k=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=t.get(E.envMap||j,k),Q=X&&X.mapping===ff?X.image.height:null,Y=S[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&me("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Lt=ct!==void 0?ct.length:0;let Gt=0;$.morphAttributes.position!==void 0&&(Gt=1),$.morphAttributes.normal!==void 0&&(Gt=2),$.morphAttributes.color!==void 0&&(Gt=3);let G,vt,Ot,tt;if(Y){const Ce=ga[Y];G=Ce.vertexShader,vt=Ce.fragmentShader}else{G=E.vertexShader,vt=E.fragmentShader;const Ce=d.getVertexShaderStage(E),xe=d.getFragmentShaderStage(E);d.update(E,Ce,xe),Ot=Ce.id,tt=xe.id}const ot=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Pt=W.isInstancedMesh===!0,_t=W.isBatchedMesh===!0,Nt=!!E.map,de=!!E.matcap,xt=!!X,St=!!E.aoMap,Dt=!!E.lightMap,Rt=!!E.bumpMap&&E.wireframe===!1,Ct=!!E.normalMap,ne=!!E.displacementMap,$t=!!E.emissiveMap,le=!!E.metalnessMap,fe=!!E.roughnessMap,V=E.anisotropy>0,Se=E.clearcoat>0,ge=E.dispersion>0,I=E.retroreflectivity>0,A=E.iridescence>0,rt=E.sheen>0,ut=E.transmission>0,gt=V&&!!E.anisotropyMap,Ut=Se&&!!E.clearcoatMap,It=Se&&!!E.clearcoatNormalMap,yt=Se&&!!E.clearcoatRoughnessMap,Et=A&&!!E.iridescenceMap,Bt=A&&!!E.iridescenceThicknessMap,ce=rt&&!!E.sheenColorMap,qt=rt&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Jt=!!E.specularColorMap,he=!!E.specularIntensityMap,ve=ut&&!!E.transmissionMap,et=ut&&!!E.thicknessMap,Ft=!!E.gradientMap,bt=!!E.alphaMap,Ht=E.alphaTest>0,jt=!!E.alphaHash,wt=!!E.extensions;let ie=ya;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Wt={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:vt,defines:E.defines,customVertexShaderID:Ot,customFragmentShaderID:tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:_t,batchingColor:_t&&W._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&W.instanceColor!==null,instancingMorph:Pt&&W.morphTexture!==null,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Nt,matcap:de,envMap:xt,envMapMode:xt&&X.mapping,envMapCubeUVHeight:Q,aoMap:St,lightMap:Dt,bumpMap:Rt,normalMap:Ct,displacementMap:ne,emissiveMap:$t,normalMapObjectSpace:Ct&&E.normalMapType===NT,normalMapTangentSpace:Ct&&E.normalMapType===vm,packedNormalMap:Ct&&E.normalMapType===vm&&Pw(E.normalMap.format),metalnessMap:le,roughnessMap:fe,anisotropy:V,anisotropyMap:gt,clearcoat:Se,clearcoatMap:Ut,clearcoatNormalMap:It,clearcoatRoughnessMap:yt,dispersion:ge,retroreflection:I,iridescence:A,iridescenceMap:Et,iridescenceThicknessMap:Bt,sheen:rt,sheenColorMap:ce,sheenRoughnessMap:qt,specularMap:Vt,specularColorMap:Jt,specularIntensityMap:he,transmission:ut,transmissionMap:ve,thicknessMap:et,gradientMap:Ft,opaque:E.transparent===!1&&E.blending===Ul&&E.alphaToCoverage===!1,alphaMap:bt,alphaTest:Ht,alphaHash:jt,combine:E.combine,mapUv:Nt&&T(E.map.channel),aoMapUv:St&&T(E.aoMap.channel),lightMapUv:Dt&&T(E.lightMap.channel),bumpMapUv:Rt&&T(E.bumpMap.channel),normalMapUv:Ct&&T(E.normalMap.channel),displacementMapUv:ne&&T(E.displacementMap.channel),emissiveMapUv:$t&&T(E.emissiveMap.channel),metalnessMapUv:le&&T(E.metalnessMap.channel),roughnessMapUv:fe&&T(E.roughnessMap.channel),anisotropyMapUv:gt&&T(E.anisotropyMap.channel),clearcoatMapUv:Ut&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:It&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:qt&&T(E.sheenRoughnessMap.channel),specularMapUv:Vt&&T(E.specularMap.channel),specularColorMapUv:Jt&&T(E.specularColorMap.channel),specularIntensityMapUv:he&&T(E.specularIntensityMap.channel),transmissionMapUv:ve&&T(E.transmissionMap.channel),thicknessMapUv:et&&T(E.thicknessMap.channel),alphaMapUv:bt&&T(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ct||V),vertexNormals:!!$.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(Nt||bt),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||$.attributes.normal===void 0&&Ct===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Mt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Gt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:Nt&&E.map.isVideoTexture===!0&&Ge.getTransfer(E.map.colorSpace)===tn,decodeVideoTextureEmissive:$t&&E.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(E.emissiveMap.colorSpace)===tn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===va,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:wt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&E.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Wt.vertexUv1s=p.has(1),Wt.vertexUv2s=p.has(2),Wt.vertexUv3s=p.has(3),p.clear(),Wt}function M(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)P.push(B),P.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(y(P,E),O(P,E),P.push(r.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function y(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numSunLights),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numSunLightShadows),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function O(E,P){h.disableAll(),P.instancing&&h.enable(0),P.instancingColor&&h.enable(1),P.instancingMorph&&h.enable(2),P.matcap&&h.enable(3),P.envMap&&h.enable(4),P.normalMapObjectSpace&&h.enable(5),P.normalMapTangentSpace&&h.enable(6),P.clearcoat&&h.enable(7),P.iridescence&&h.enable(8),P.alphaTest&&h.enable(9),P.vertexColors&&h.enable(10),P.vertexAlphas&&h.enable(11),P.vertexUv1s&&h.enable(12),P.vertexUv2s&&h.enable(13),P.vertexUv3s&&h.enable(14),P.vertexTangents&&h.enable(15),P.anisotropy&&h.enable(16),P.alphaHash&&h.enable(17),P.batching&&h.enable(18),P.dispersion&&h.enable(19),P.retroreflection&&h.enable(24),P.batchingColor&&h.enable(20),P.gradientMap&&h.enable(21),P.packedNormalMap&&h.enable(22),P.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.reversedDepthBuffer&&h.enable(4),P.skinning&&h.enable(5),P.morphTargets&&h.enable(6),P.morphNormals&&h.enable(7),P.morphColors&&h.enable(8),P.premultipliedAlpha&&h.enable(9),P.shadowMapEnabled&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),P.decodeVideoTextureEmissive&&h.enable(20),P.alphaToCoverage&&h.enable(21),P.numLightProbeGrids>0&&h.enable(22),P.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function D(E){const P=S[E.type];let B;if(P){const F=ga[P];B=K2.clone(F.uniforms)}else B=E.uniforms;return B}function C(E,P){let B=_.get(P);return B!==void 0?++B.usedTimes:(B=new Dw(r,P,E,l),m.push(B),_.set(P,B)),B}function z(E){if(--E.usedTimes===0){const P=m.indexOf(E);m[P]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function N(E){d.remove(E)}function U(){d.dispose()}return{getParameters:L,getProgramCacheKey:M,getUniforms:D,acquireProgram:C,releaseProgram:z,releaseShaderCache:N,programs:m,dispose:U}}function Iw(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function Bw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Sy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function My(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,T,L,M,y){let O=r[t];return O===void 0?(O={id:v.id,object:v,geometry:S,material:T,materialVariant:h(v),groupOrder:L,renderOrder:v.renderOrder,z:M,group:y},r[t]=O):(O.id=v.id,O.object=v,O.geometry=S,O.material=T,O.materialVariant=h(v),O.groupOrder=L,O.renderOrder=v.renderOrder,O.z=M,O.group=y),t++,O}function p(v,S,T,L,M,y,O){O.reversedDepth===!0&&(M=-M);const D=d(v,S,T,L,M,y);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function m(v,S,T,L,M,y){const O=d(v,S,T,L,M,y);T.transmission>0?s.unshift(O):T.transparent===!0?l.unshift(O):i.unshift(O)}function _(v,S){i.length>1&&i.sort(v||Bw),s.length>1&&s.sort(S||Sy),l.length>1&&l.sort(S||Sy)}function g(){for(let v=t,S=r.length;v<S;v++){const T=r[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:g,sort:_}}function Fw(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new My,r.set(s,[h])):l>=c.length?(h=new My,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function Hw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new q,color:new Ue};break;case"SpotLight":i={position:new q,direction:new q,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function Gw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let Vw=0;function kw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Xw(r){const t=new Hw,i=Gw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new q);const l=new q,c=new un,h=new un;function d(m){let _=0,g=0,v=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let S=0,T=0,L=0,M=0,y=0,O=0,D=0,C=0,z=0,N=0,U=0,E=0,P=0,B=0;m.sort(kw);for(let W=0,it=m.length;W<it;W++){const J=m[W],$=J.color,j=J.intensity,k=J.distance;let X=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===hr?X=J.shadow.map.texture:X=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)_+=$.r*j,g+=$.g*j,v+=$.b*j;else if(J.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(J.sh.coefficients[Q],j);B++}else if(J.isSunLight){const Q=t.get(J);if(Q.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const Y=J.shadow,ct=i.get(J);ct.shadowIntensity=Y.intensity,ct.shadowBias=Y.bias,ct.shadowNormalBias=Y.normalBias,ct.shadowRadius=Y.radius,ct.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),s.sunShadow[T]=ct,s.sunShadowMap[T]=X;const Lt=Y.getViewportCount();for(let Gt=0;Gt<Lt;Gt++)s.sunShadowMatrix[L+Gt]=Y.getMatrix(Gt),s.sunShadowCascade[L+Gt]=Y._cascadeData[Gt];L+=Lt,T++}s.sun[S]=Q,S++}else if(J.isDirectionalLight){const Q=t.get(J);if(Q.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const Y=J.shadow,ct=i.get(J);ct.shadowIntensity=Y.intensity,ct.shadowBias=Y.bias,ct.shadowNormalBias=Y.normalBias,ct.shadowRadius=Y.radius,ct.shadowMapSize=Y.mapSize,s.directionalShadow[M]=ct,s.directionalShadowMap[M]=X,s.directionalShadowMatrix[M]=J.shadow.matrix,z++}s.directional[M]=Q,M++}else if(J.isSpotLight){const Q=t.get(J);Q.position.setFromMatrixPosition(J.matrixWorld),Q.color.copy($).multiplyScalar(j),Q.distance=k,Q.coneCos=Math.cos(J.angle),Q.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),Q.decay=J.decay,s.spot[O]=Q;const Y=J.shadow;if(J.map&&(s.spotLightMap[E]=J.map,E++,Y.updateMatrices(J),J.castShadow&&P++),s.spotLightMatrix[O]=Y.matrix,J.castShadow){const ct=i.get(J);ct.shadowIntensity=Y.intensity,ct.shadowBias=Y.bias,ct.shadowNormalBias=Y.normalBias,ct.shadowRadius=Y.radius,ct.shadowMapSize=Y.mapSize,s.spotShadow[O]=ct,s.spotShadowMap[O]=X,U++}O++}else if(J.isRectAreaLight){const Q=t.get(J);Q.color.copy($).multiplyScalar(j),Q.halfWidth.set(J.width*.5,0,0),Q.halfHeight.set(0,J.height*.5,0),s.rectArea[D]=Q,D++}else if(J.isPointLight){const Q=t.get(J);if(Q.color.copy(J.color).multiplyScalar(J.intensity),Q.distance=J.distance,Q.decay=J.decay,J.castShadow){const Y=J.shadow,ct=i.get(J);ct.shadowIntensity=Y.intensity,ct.shadowBias=Y.bias,ct.shadowNormalBias=Y.normalBias,ct.shadowRadius=Y.radius,ct.shadowMapSize=Y.mapSize,ct.shadowCameraNear=Y.camera.near,ct.shadowCameraFar=Y.camera.far,s.pointShadow[y]=ct,s.pointShadowMap[y]=X,s.pointShadowMatrix[y]=J.shadow.matrix,N++}s.point[y]=Q,y++}else if(J.isHemisphereLight){const Q=t.get(J);Q.skyColor.copy(J.color).multiplyScalar(j),Q.groundColor.copy(J.groundColor).multiplyScalar(j),s.hemi[C]=Q,C++}}D>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Kt.LTC_FLOAT_1,s.rectAreaLTC2=Kt.LTC_FLOAT_2):(s.rectAreaLTC1=Kt.LTC_HALF_1,s.rectAreaLTC2=Kt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const F=s.hash;(F.sunLength!==S||F.directionalLength!==M||F.pointLength!==y||F.spotLength!==O||F.rectAreaLength!==D||F.hemiLength!==C||F.numSunShadows!==T||F.numDirectionalShadows!==z||F.numPointShadows!==N||F.numSpotShadows!==U||F.numSpotMaps!==E||F.numLightProbes!==B)&&(s.sun.length=S,s.directional.length=M,s.spot.length=O,s.rectArea.length=D,s.point.length=y,s.hemi.length=C,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=L,s.sunShadowCascade.length=L,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.directionalShadowMatrix.length=z,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.spotLightMatrix.length=U+E-P,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=B,F.sunLength=S,F.directionalLength=M,F.pointLength=y,F.spotLength=O,F.rectAreaLength=D,F.hemiLength=C,F.numSunShadows=T,F.numDirectionalShadows=z,F.numPointShadows=N,F.numSpotShadows=U,F.numSpotMaps=E,F.numLightProbes=B,s.version=Vw++)}function p(m,_){let g=0,v=0,S=0,T=0,L=0,M=0;const y=_.matrixWorldInverse;for(let O=0,D=m.length;O<D;O++){const C=m[O];if(C.isSunLight){const z=s.sun[g];z.direction.setFromMatrixPosition(C.matrixWorld),z.direction.transformDirection(y),g++}else if(C.isDirectionalLight){const z=s.directional[v];z.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),v++}else if(C.isSpotLight){const z=s.spot[T];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),T++}else if(C.isRectAreaLight){const z=s.rectArea[L];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(y),h.identity(),c.copy(C.matrixWorld),c.premultiply(y),h.extractRotation(c),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),L++}else if(C.isPointLight){const z=s.point[S];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(y),S++}else if(C.isHemisphereLight){const z=s.hemi[M];z.direction.setFromMatrixPosition(C.matrixWorld),z.direction.transformDirection(y),M++}}}return{setup:d,setupView:p,state:s}}function by(r){const t=new Xw(r),i=[],s=[],l=[];function c(v){g.camera=v,i.length=0,s.length=0,l.length=0}function h(v){i.push(v)}function d(v){s.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function _(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:m,setupLightsView:_,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function qw(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new by(r),t.set(l,[d])):c>=h.length?(d=new by(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yw=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Zw=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Ey=new un,wl=new q,Rp=new q;function Kw(r,t,i){let s=new Bm;const l=new zt,c=new zt,h=new dn,d=new tA,p=new eA,m={},_=i.maxTextureSize,g={[ur]:ii,[ii]:ur,[va]:va},v=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:jw,fragmentShader:Ww}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Dn;T.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Ze(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let y=this.type;this.render=function(N,U,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===LS&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ju);const P=r.getRenderTarget(),B=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Ka),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const it=y!==this.type;it&&U.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach($=>$.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,$=N.length;J<$;J++){const j=N[J],k=j.shadow;if(k===void 0){me("WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const X=k.getFrameExtents();l.multiply(X),c.copy(k.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/X.x),l.x=c.x*X.x,k.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/X.y),l.y=c.y*X.y,k.mapSize.y=c.y));const Q=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Q,k.map===null||it===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Nl){if(j.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Qi(l.x,l.y,{format:hr,type:Ma,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),k.map.texture.name=j.name+".shadowMap",k.map.depthTexture=new Gl(l.x,l.y,_a),k.map.depthTexture.name=j.name+".shadowMapDepth",k.map.depthTexture.format=Qa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn}else j.isPointLight?(k.map=new SM(l.x),k.map.depthTexture=new v2(l.x,Sa)):(k.map=new Qi(l.x,l.y),k.map.depthTexture=new Gl(l.x,l.y,Sa)),k.map.depthTexture.name=j.name+".shadowMap",k.map.depthTexture.format=Qa,this.type===ju?(k.map.depthTexture.compareFunction=Q?Pm:Om,k.map.depthTexture.minFilter=Yn,k.map.depthTexture.magFilter=Yn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==l.x||k.map.height!==l.y)&&k.map.setSize(l.x,l.y);const Y=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();j.isPointLight!==!0&&k.updateMatrices(j,E);for(let ct=0;ct<Y;ct++){const Lt=k.getCamera(ct);if(j.isPointLight){const Gt=k.camera,G=k.matrix,vt=j.distance||Gt.far;vt!==Gt.far&&(Gt.far=vt,Gt.updateProjectionMatrix()),wl.setFromMatrixPosition(j.matrixWorld),Gt.position.copy(wl),Rp.copy(Gt.position),Rp.add(Yw[ct]),Gt.up.copy(Zw[ct]),Gt.lookAt(Rp),Gt.updateMatrixWorld(),G.makeTranslation(-wl.x,-wl.y,-wl.z),Ey.multiplyMatrices(Gt.projectionMatrix,Gt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ey,Gt.coordinateSystem,Gt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ct),r.clear();else{ct===0&&(r.setRenderTarget(k.map),r.clear());const Gt=k.getViewport(ct);h.set(c.x*Gt.x,c.y*Gt.y,c.x*Gt.z,c.y*Gt.w),W.viewport(h)}s=k.getFrustum(ct),C(U,E,Lt,j,this.type)}k.isPointLightShadow!==!0&&this.type===Nl&&O(k,E),k.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(P,B,F)};function O(N,U){const E=t.update(L);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null?N.mapPass=new Qi(l.x,l.y,{format:hr,type:Ma}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value.set(N.map.width,N.map.height),v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(U,null,E,v,L,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value.set(N.map.width,N.map.height),S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(U,null,E,S,L,null)}function D(N,U,E,P){let B=null;const F=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)B=F;else if(B=E.isPointLight===!0?p:d,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=B.uuid,it=U.uuid;let J=m[W];J===void 0&&(J={},m[W]=J);let $=J[it];$===void 0&&($=B.clone(),J[it]=$,U.addEventListener("dispose",z)),B=$}if(B.visible=U.visible,B.wireframe=U.wireframe,P===Nl?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:g[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const W=r.properties.get(B);W.light=E}return B}function C(N,U,E,P,B){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&B===Nl)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const it=t.update(N),J=N.material;if(Array.isArray(J)){const $=it.groups;for(let j=0,k=$.length;j<k;j++){const X=$[j],Q=J[X.materialIndex];if(Q&&Q.visible){const Y=D(N,Q,P,B);N.onBeforeShadow(r,N,U,E,it,Y,X),r.renderBufferDirect(E,null,it,Y,N,X),N.onAfterShadow(r,N,U,E,it,Y,X)}}}else if(J.visible){const $=D(N,J,P,B);N.onBeforeShadow(r,N,U,E,it,$,null),r.renderBufferDirect(E,null,it,$,N,null),N.onAfterShadow(r,N,U,E,it,$,null)}}const W=N.children;for(let it=0,J=W.length;it<J;it++)C(W[it],U,E,P,B)}function z(N){N.target.removeEventListener("dispose",z);for(const E in m){const P=m[E],B=N.target.uuid;B in P&&(P[B].dispose(),delete P[B])}}}function Jw(r,t){function i(){let et=!1;const Ft=new dn;let bt=null;const Ht=new dn(0,0,0,0);return{setMask:function(jt){bt!==jt&&!et&&(r.colorMask(jt,jt,jt,jt),bt=jt)},setLocked:function(jt){et=jt},setClear:function(jt,wt,ie,Wt,Ce){Ce===!0&&(jt*=Wt,wt*=Wt,ie*=Wt),Ft.set(jt,wt,ie,Wt),Ht.equals(Ft)===!1&&(r.clearColor(jt,wt,ie,Wt),Ht.copy(Ft))},reset:function(){et=!1,bt=null,Ht.set(-1,0,0,0)}}}function s(){let et=!1,Ft=!1,bt=null,Ht=null,jt=null;return{setReversed:function(wt){if(Ft!==wt){const ie=t.get("EXT_clip_control");wt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ft=wt;const Wt=jt;jt=null,this.setClear(Wt)}},getReversed:function(){return Ft},setTest:function(wt){wt?ot(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(wt){bt!==wt&&!et&&(r.depthMask(wt),bt=wt)},setFunc:function(wt){if(Ft&&(wt=VT[wt]),Ht!==wt){switch(wt){case Lp:r.depthFunc(r.NEVER);break;case Up:r.depthFunc(r.ALWAYS);break;case Op:r.depthFunc(r.LESS);break;case Il:r.depthFunc(r.LEQUAL);break;case Pp:r.depthFunc(r.EQUAL);break;case zp:r.depthFunc(r.GEQUAL);break;case Ip:r.depthFunc(r.GREATER);break;case Bp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=wt}},setLocked:function(wt){et=wt},setClear:function(wt){jt!==wt&&(jt=wt,Ft&&(wt=1-wt),r.clearDepth(wt))},reset:function(){et=!1,bt=null,Ht=null,jt=null,Ft=!1}}}function l(){let et=!1,Ft=null,bt=null,Ht=null,jt=null,wt=null,ie=null,Wt=null,Ce=null;return{setTest:function(xe){et||(xe?ot(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(xe){Ft!==xe&&!et&&(r.stencilMask(xe),Ft=xe)},setFunc:function(xe,kn,Zn){(bt!==xe||Ht!==kn||jt!==Zn)&&(r.stencilFunc(xe,kn,Zn),bt=xe,Ht=kn,jt=Zn)},setOp:function(xe,kn,Zn){(wt!==xe||ie!==kn||Wt!==Zn)&&(r.stencilOp(xe,kn,Zn),wt=xe,ie=kn,Wt=Zn)},setLocked:function(xe){et=xe},setClear:function(xe){Ce!==xe&&(r.clearStencil(xe),Ce=xe)},reset:function(){et=!1,Ft=null,bt=null,Ht=null,jt=null,wt=null,ie=null,Wt=null,Ce=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},g={},v={},S=new WeakMap,T=[],L=null,M=!1,y=null,O=null,D=null,C=null,z=null,N=null,U=null,E=new Ue(0,0,0),P=0,B=!1,F=null,W=null,it=null,J=null,$=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=X>=2);let Y=null,ct={};const Lt=r.getParameter(r.SCISSOR_BOX),Gt=r.getParameter(r.VIEWPORT),G=new dn().fromArray(Lt),vt=new dn().fromArray(Gt);function Ot(et,Ft,bt,Ht){const jt=new Uint8Array(4),wt=r.createTexture();r.bindTexture(et,wt),r.texParameteri(et,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(et,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<bt;ie++)et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,jt):r.texImage2D(Ft+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,jt);return wt}const tt={};tt[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ot(r.DEPTH_TEST),h.setFunc(Il),Rt(!1),Ct(px),ot(r.CULL_FACE),St(Ka);function ot(et){_[et]!==!0&&(r.enable(et),_[et]=!0)}function Mt(et){_[et]!==!1&&(r.disable(et),_[et]=!1)}function Pt(et,Ft){return v[et]!==Ft?(r.bindFramebuffer(et,Ft),v[et]=Ft,et===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ft),et===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function _t(et,Ft){let bt=T,Ht=!1;if(et){bt=S.get(Ft),bt===void 0&&(bt=[],S.set(Ft,bt));const jt=et.textures;if(bt.length!==jt.length||bt[0]!==r.COLOR_ATTACHMENT0){for(let wt=0,ie=jt.length;wt<ie;wt++)bt[wt]=r.COLOR_ATTACHMENT0+wt;bt.length=jt.length,Ht=!0}}else bt[0]!==r.BACK&&(bt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(bt)}function Nt(et){return L!==et?(r.useProgram(et),L=et,!0):!1}const de={[mo]:r.FUNC_ADD,[cT]:r.FUNC_SUBTRACT,[uT]:r.FUNC_REVERSE_SUBTRACT};de[fT]=r.MIN,de[hT]=r.MAX;const xt={[dT]:r.ZERO,[pT]:r.ONE,[mT]:r.SRC_COLOR,[US]:r.SRC_ALPHA,[ST]:r.SRC_ALPHA_SATURATE,[xT]:r.DST_COLOR,[vT]:r.DST_ALPHA,[gT]:r.ONE_MINUS_SRC_COLOR,[OS]:r.ONE_MINUS_SRC_ALPHA,[yT]:r.ONE_MINUS_DST_COLOR,[_T]:r.ONE_MINUS_DST_ALPHA,[MT]:r.CONSTANT_COLOR,[bT]:r.ONE_MINUS_CONSTANT_COLOR,[ET]:r.CONSTANT_ALPHA,[TT]:r.ONE_MINUS_CONSTANT_ALPHA};function St(et,Ft,bt,Ht,jt,wt,ie,Wt,Ce,xe){if(et===Ka){M===!0&&(Mt(r.BLEND),M=!1);return}if(M===!1&&(ot(r.BLEND),M=!0),et!==lT){if(et!==y||xe!==B){if((O!==mo||z!==mo)&&(r.blendEquation(r.FUNC_ADD),O=mo,z=mo),xe)switch(et){case Ul:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dp:r.blendFunc(r.ONE,r.ONE);break;case mx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ke("WebGLState: Invalid blending: ",et);break}else switch(et){case Ul:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mx:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gx:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",et);break}D=null,C=null,N=null,U=null,E.set(0,0,0),P=0,y=et,B=xe}return}jt=jt||Ft,wt=wt||bt,ie=ie||Ht,(Ft!==O||jt!==z)&&(r.blendEquationSeparate(de[Ft],de[jt]),O=Ft,z=jt),(bt!==D||Ht!==C||wt!==N||ie!==U)&&(r.blendFuncSeparate(xt[bt],xt[Ht],xt[wt],xt[ie]),D=bt,C=Ht,N=wt,U=ie),(Wt.equals(E)===!1||Ce!==P)&&(r.blendColor(Wt.r,Wt.g,Wt.b,Ce),E.copy(Wt),P=Ce),y=et,B=!1}function Dt(et,Ft){et.side===va?Mt(r.CULL_FACE):ot(r.CULL_FACE);let bt=et.side===ii;Ft&&(bt=!bt),Rt(bt),et.blending===Ul&&et.transparent===!1?St(Ka):St(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),h.setFunc(et.depthFunc),h.setTest(et.depthTest),h.setMask(et.depthWrite),c.setMask(et.colorWrite);const Ht=et.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(et.stencilWriteMask),d.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),d.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),$t(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(et){F!==et&&(et?r.frontFace(r.CW):r.frontFace(r.CCW),F=et)}function Ct(et){et!==rT?(ot(r.CULL_FACE),et!==W&&(et===px?r.cullFace(r.BACK):et===oT?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),W=et}function ne(et){et!==it&&(k&&r.lineWidth(et),it=et)}function $t(et,Ft,bt){et?(ot(r.POLYGON_OFFSET_FILL),(J!==Ft||$!==bt)&&(J=Ft,$=bt,h.getReversed()&&(Ft=-Ft),r.polygonOffset(Ft,bt))):Mt(r.POLYGON_OFFSET_FILL)}function le(et){et?ot(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function fe(et){et===void 0&&(et=r.TEXTURE0+j-1),Y!==et&&(r.activeTexture(et),Y=et)}function V(et,Ft,bt){bt===void 0&&(Y===null?bt=r.TEXTURE0+j-1:bt=Y);let Ht=ct[bt];Ht===void 0&&(Ht={type:void 0,texture:void 0},ct[bt]=Ht),(Ht.type!==et||Ht.texture!==Ft)&&(Y!==bt&&(r.activeTexture(bt),Y=bt),r.bindTexture(et,Ft||tt[et]),Ht.type=et,Ht.texture=Ft)}function Se(){const et=ct[Y];et!==void 0&&et.type!==void 0&&(r.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function ge(){try{r.compressedTexImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function A(){try{r.texSubImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function rt(){try{r.texSubImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function gt(){try{r.compressedTexSubImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function Ut(){try{r.texStorage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function It(){try{r.texStorage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function yt(){try{r.texImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function Et(){try{r.texImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function Bt(et){return g[et]!==void 0?g[et]:r.getParameter(et)}function ce(et,Ft){g[et]!==Ft&&(r.pixelStorei(et,Ft),g[et]=Ft)}function qt(et){G.equals(et)===!1&&(r.scissor(et.x,et.y,et.z,et.w),G.copy(et))}function Vt(et){vt.equals(et)===!1&&(r.viewport(et.x,et.y,et.z,et.w),vt.copy(et))}function Jt(et,Ft){let bt=m.get(Ft);bt===void 0&&(bt=new WeakMap,m.set(Ft,bt));let Ht=bt.get(et);Ht===void 0&&(Ht=r.getUniformBlockIndex(Ft,et.name),bt.set(et,Ht))}function he(et,Ft){const Ht=m.get(Ft).get(et);p.get(Ft)!==Ht&&(r.uniformBlockBinding(Ft,Ht,et.__bindingPointIndex),p.set(Ft,Ht))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},g={},Y=null,ct={},v={},S=new WeakMap,T=[],L=null,M=!1,y=null,O=null,D=null,C=null,z=null,N=null,U=null,E=new Ue(0,0,0),P=0,B=!1,F=null,W=null,it=null,J=null,$=null,G.set(0,0,r.canvas.width,r.canvas.height),vt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ot,disable:Mt,bindFramebuffer:Pt,drawBuffers:_t,useProgram:Nt,setBlending:St,setMaterial:Dt,setFlipSided:Rt,setCullFace:Ct,setLineWidth:ne,setPolygonOffset:$t,setScissorTest:le,activeTexture:fe,bindTexture:V,unbindTexture:Se,compressedTexImage2D:ge,compressedTexImage3D:I,texImage2D:yt,texImage3D:Et,pixelStorei:ce,getParameter:Bt,updateUBOMapping:Jt,uniformBlockBinding:he,texStorage2D:Ut,texStorage3D:It,texSubImage2D:A,texSubImage3D:rt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:qt,viewport:Vt,reset:ve}}function Qw(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new zt,_=new WeakMap,g=new Set;let v;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(I,A){return T?new OffscreenCanvas(I,A):af("canvas")}function M(I,A,rt){let ut=1;const gt=ge(I);if((gt.width>rt||gt.height>rt)&&(ut=rt/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ut=Math.floor(ut*gt.width),It=Math.floor(ut*gt.height);v===void 0&&(v=L(Ut,It));const yt=A?L(Ut,It):v;return yt.width=Ut,yt.height=It,yt.getContext("2d").drawImage(I,0,0,Ut,It),me("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Ut+"x"+It+")."),yt}else return"data"in I&&me("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),I;return I}function y(I){return I.generateMipmaps}function O(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(I,A,rt,ut,gt,Ut=!1){if(I!==null){if(r[I]!==void 0)return r[I];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let It;ut&&(It=t.get("EXT_texture_norm16"),It||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let yt=A;if(A===r.RED&&(rt===r.FLOAT&&(yt=r.R32F),rt===r.HALF_FLOAT&&(yt=r.R16F),rt===r.UNSIGNED_BYTE&&(yt=r.R8),rt===r.UNSIGNED_SHORT&&It&&(yt=It.R16_EXT),rt===r.SHORT&&It&&(yt=It.R16_SNORM_EXT)),A===r.RED_INTEGER&&(rt===r.UNSIGNED_BYTE&&(yt=r.R8UI),rt===r.UNSIGNED_SHORT&&(yt=r.R16UI),rt===r.UNSIGNED_INT&&(yt=r.R32UI),rt===r.BYTE&&(yt=r.R8I),rt===r.SHORT&&(yt=r.R16I),rt===r.INT&&(yt=r.R32I)),A===r.RG&&(rt===r.FLOAT&&(yt=r.RG32F),rt===r.HALF_FLOAT&&(yt=r.RG16F),rt===r.UNSIGNED_BYTE&&(yt=r.RG8),rt===r.UNSIGNED_SHORT&&It&&(yt=It.RG16_EXT),rt===r.SHORT&&It&&(yt=It.RG16_SNORM_EXT)),A===r.RG_INTEGER&&(rt===r.UNSIGNED_BYTE&&(yt=r.RG8UI),rt===r.UNSIGNED_SHORT&&(yt=r.RG16UI),rt===r.UNSIGNED_INT&&(yt=r.RG32UI),rt===r.BYTE&&(yt=r.RG8I),rt===r.SHORT&&(yt=r.RG16I),rt===r.INT&&(yt=r.RG32I)),A===r.RGB_INTEGER&&(rt===r.UNSIGNED_BYTE&&(yt=r.RGB8UI),rt===r.UNSIGNED_SHORT&&(yt=r.RGB16UI),rt===r.UNSIGNED_INT&&(yt=r.RGB32UI),rt===r.BYTE&&(yt=r.RGB8I),rt===r.SHORT&&(yt=r.RGB16I),rt===r.INT&&(yt=r.RGB32I)),A===r.RGBA_INTEGER&&(rt===r.UNSIGNED_BYTE&&(yt=r.RGBA8UI),rt===r.UNSIGNED_SHORT&&(yt=r.RGBA16UI),rt===r.UNSIGNED_INT&&(yt=r.RGBA32UI),rt===r.BYTE&&(yt=r.RGBA8I),rt===r.SHORT&&(yt=r.RGBA16I),rt===r.INT&&(yt=r.RGBA32I)),A===r.RGB&&(rt===r.UNSIGNED_SHORT&&It&&(yt=It.RGB16_EXT),rt===r.SHORT&&It&&(yt=It.RGB16_SNORM_EXT),rt===r.UNSIGNED_INT_5_9_9_9_REV&&(yt=r.RGB9_E5),rt===r.UNSIGNED_INT_10F_11F_11F_REV&&(yt=r.R11F_G11F_B10F)),A===r.RGBA){const Et=Ut?nf:Ge.getTransfer(gt);rt===r.FLOAT&&(yt=r.RGBA32F),rt===r.HALF_FLOAT&&(yt=r.RGBA16F),rt===r.UNSIGNED_BYTE&&(yt=Et===tn?r.SRGB8_ALPHA8:r.RGBA8),rt===r.UNSIGNED_SHORT&&It&&(yt=It.RGBA16_EXT),rt===r.SHORT&&It&&(yt=It.RGBA16_SNORM_EXT),rt===r.UNSIGNED_SHORT_4_4_4_4&&(yt=r.RGBA4),rt===r.UNSIGNED_SHORT_5_5_5_1&&(yt=r.RGB5_A1)}return(yt===r.R16F||yt===r.R32F||yt===r.RG16F||yt===r.RG32F||yt===r.RGBA16F||yt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function z(I,A){let rt;return I?A===null||A===Sa||A===Fl?rt=r.DEPTH24_STENCIL8:A===_a?rt=r.DEPTH32F_STENCIL8:A===Bl&&(rt=r.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Sa||A===Fl?rt=r.DEPTH_COMPONENT24:A===_a?rt=r.DEPTH_COMPONENT32F:A===Bl&&(rt=r.DEPTH_COMPONENT16),rt}function N(I,A){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Vn&&I.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function U(I){const A=I.target;A.removeEventListener("dispose",U),P(A),A.isVideoTexture&&_.delete(A),A.isHTMLTexture&&g.delete(A)}function E(I){const A=I.target;A.removeEventListener("dispose",E),F(A)}function P(I){const A=s.get(I);if(A.__webglInit===void 0)return;const rt=I.source,ut=S.get(rt);if(ut){const gt=ut[A.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&B(I),Object.keys(ut).length===0&&S.delete(rt)}s.remove(I)}function B(I){const A=s.get(I);r.deleteTexture(A.__webglTexture);const rt=I.source,ut=S.get(rt);delete ut[A.__cacheKey],h.memory.textures--}function F(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(A.__webglFramebuffer[ut]))for(let gt=0;gt<A.__webglFramebuffer[ut].length;gt++)r.deleteFramebuffer(A.__webglFramebuffer[ut][gt]);else r.deleteFramebuffer(A.__webglFramebuffer[ut]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[ut])}else{if(Array.isArray(A.__webglFramebuffer))for(let ut=0;ut<A.__webglFramebuffer.length;ut++)r.deleteFramebuffer(A.__webglFramebuffer[ut]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ut=0;ut<A.__webglColorRenderbuffer.length;ut++)A.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[ut]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const rt=I.textures;for(let ut=0,gt=rt.length;ut<gt;ut++){const Ut=s.get(rt[ut]);Ut.__webglTexture&&(r.deleteTexture(Ut.__webglTexture),h.memory.textures--),s.remove(rt[ut])}s.remove(I)}let W=0;function it(){W=0}function J(){return W}function $(I){W=I}function j(){const I=W;return I>=l.maxTextures&&me("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+l.maxTextures),W+=1,I}function k(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function X(I,A){const rt=s.get(I);if(I.isVideoTexture&&V(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&rt.__version!==I.version){const ut=I.image;if(ut===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(rt,I,A);return}}else I.isExternalTexture&&(rt.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,rt.__webglTexture,r.TEXTURE0+A)}function Q(I,A){const rt=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&rt.__version!==I.version){Mt(rt,I,A);return}else I.isExternalTexture&&(rt.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,rt.__webglTexture,r.TEXTURE0+A)}function Y(I,A){const rt=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&rt.__version!==I.version){Mt(rt,I,A);return}i.bindTexture(r.TEXTURE_3D,rt.__webglTexture,r.TEXTURE0+A)}function ct(I,A){const rt=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&rt.__version!==I.version){Pt(rt,I,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture,r.TEXTURE0+A)}const Lt={[Fp]:r.REPEAT,[Za]:r.CLAMP_TO_EDGE,[Hp]:r.MIRRORED_REPEAT},Gt={[Vn]:r.NEAREST,[RT]:r.NEAREST_MIPMAP_NEAREST,[gu]:r.NEAREST_MIPMAP_LINEAR,[Yn]:r.LINEAR,[Zd]:r.LINEAR_MIPMAP_NEAREST,[lr]:r.LINEAR_MIPMAP_LINEAR},G={[LT]:r.NEVER,[IT]:r.ALWAYS,[UT]:r.LESS,[Om]:r.LEQUAL,[OT]:r.EQUAL,[Pm]:r.GEQUAL,[PT]:r.GREATER,[zT]:r.NOTEQUAL};function vt(I,A){if(A.type===_a&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===Zd||A.magFilter===gu||A.magFilter===lr||A.minFilter===Yn||A.minFilter===Zd||A.minFilter===gu||A.minFilter===lr)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Lt[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Lt[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Lt[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Gt[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Gt[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,G[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Vn||A.minFilter!==gu&&A.minFilter!==lr||A.type===_a&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Ot(I,A){let rt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",U));const ut=A.source;let gt=S.get(ut);gt===void 0&&(gt={},S.set(ut,gt));const Ut=k(A);if(Ut!==I.__cacheKey){gt[Ut]===void 0&&(gt[Ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,rt=!0),gt[Ut].usedTimes++;const It=gt[I.__cacheKey];It!==void 0&&(gt[I.__cacheKey].usedTimes--,It.usedTimes===0&&B(A)),I.__cacheKey=Ut,I.__webglTexture=gt[Ut].texture}return rt}function tt(I,A,rt){return Math.floor(Math.floor(I/rt)/A)}function ot(I,A,rt,ut){const Ut=I.updateRanges;if(Ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,rt,ut,A.data);else{Ut.sort((ce,qt)=>ce.start-qt.start);let It=0;for(let ce=1;ce<Ut.length;ce++){const qt=Ut[It],Vt=Ut[ce],Jt=qt.start+qt.count,he=tt(Vt.start,A.width,4),ve=tt(qt.start,A.width,4);Vt.start<=Jt+1&&he===ve&&tt(Vt.start+Vt.count-1,A.width,4)===he?qt.count=Math.max(qt.count,Vt.start+Vt.count-qt.start):(++It,Ut[It]=Vt)}Ut.length=It+1;const yt=i.getParameter(r.UNPACK_ROW_LENGTH),Et=i.getParameter(r.UNPACK_SKIP_PIXELS),Bt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let ce=0,qt=Ut.length;ce<qt;ce++){const Vt=Ut[ce],Jt=Math.floor(Vt.start/4),he=Math.ceil(Vt.count/4),ve=Jt%A.width,et=Math.floor(Jt/A.width),Ft=he,bt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(r.UNPACK_SKIP_ROWS,et),i.texSubImage2D(r.TEXTURE_2D,0,ve,et,Ft,bt,rt,ut,A.data)}I.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,yt),i.pixelStorei(r.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(r.UNPACK_SKIP_ROWS,Bt)}}function Mt(I,A,rt){let ut=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ut=r.TEXTURE_3D);const gt=Ot(I,A),Ut=A.source;i.bindTexture(ut,I.__webglTexture,r.TEXTURE0+rt);const It=s.get(Ut);if(Ut.version!==It.__version||gt===!0){if(i.activeTexture(r.TEXTURE0+rt),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const bt=Ge.getPrimaries(Ge.workingColorSpace),Ht=A.colorSpace===Ns?null:Ge.getPrimaries(A.colorSpace),jt=A.colorSpace===Ns||bt===Ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}i.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment);let Et=M(A.image,!1,l.maxTextureSize);Et=Se(A,Et);const Bt=c.convert(A.format,A.colorSpace),ce=c.convert(A.type);let qt=C(A.internalFormat,Bt,ce,A.normalized,A.colorSpace,A.isVideoTexture);vt(ut,A);let Vt;const Jt=A.mipmaps,he=A.isVideoTexture!==!0,ve=It.__version===void 0||gt===!0,et=Ut.dataReady,Ft=N(A,Et);if(A.isDepthTexture)qt=z(A.format===cr,A.type),ve&&(he?i.texStorage2D(r.TEXTURE_2D,1,qt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,qt,Et.width,Et.height,0,Bt,ce,null));else if(A.isDataTexture)if(Jt.length>0){he&&ve&&i.texStorage2D(r.TEXTURE_2D,Ft,qt,Jt[0].width,Jt[0].height);for(let bt=0,Ht=Jt.length;bt<Ht;bt++)Vt=Jt[bt],he?et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Vt.width,Vt.height,Bt,ce,Vt.data):i.texImage2D(r.TEXTURE_2D,bt,qt,Vt.width,Vt.height,0,Bt,ce,Vt.data);A.generateMipmaps=!1}else he?(ve&&i.texStorage2D(r.TEXTURE_2D,Ft,qt,Et.width,Et.height),et&&ot(A,Et,Bt,ce)):i.texImage2D(r.TEXTURE_2D,0,qt,Et.width,Et.height,0,Bt,ce,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){he&&ve&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,qt,Jt[0].width,Jt[0].height,Et.depth);for(let bt=0,Ht=Jt.length;bt<Ht;bt++)if(Vt=Jt[bt],A.format!==Ji)if(Bt!==null)if(he){if(et)if(A.layerUpdates.size>0){const jt=ny(Vt.width,Vt.height,A.format,A.type);for(const wt of A.layerUpdates){const ie=Vt.data.subarray(wt*jt/Vt.data.BYTES_PER_ELEMENT,(wt+1)*jt/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,wt,Vt.width,Vt.height,1,Bt,ie)}}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Vt.width,Vt.height,Et.depth,Bt,Vt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,qt,Vt.width,Vt.height,Et.depth,0,Vt.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?et&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Vt.width,Vt.height,Et.depth,Bt,ce,Vt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,qt,Vt.width,Vt.height,Et.depth,0,Bt,ce,Vt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{he&&ve&&i.texStorage2D(r.TEXTURE_2D,Ft,qt,Jt[0].width,Jt[0].height);for(let bt=0,Ht=Jt.length;bt<Ht;bt++)Vt=Jt[bt],A.format!==Ji?Bt!==null?he?et&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Vt.width,Vt.height,Bt,Vt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,qt,Vt.width,Vt.height,0,Vt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Vt.width,Vt.height,Bt,ce,Vt.data):i.texImage2D(r.TEXTURE_2D,bt,qt,Vt.width,Vt.height,0,Bt,ce,Vt.data)}else if(A.isDataArrayTexture)if(he){if(ve&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,qt,Et.width,Et.height,Et.depth),et)if(A.layerUpdates.size>0){const bt=ny(Et.width,Et.height,A.format,A.type);for(const Ht of A.layerUpdates){const jt=Et.data.subarray(Ht*bt/Et.data.BYTES_PER_ELEMENT,(Ht+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ht,Et.width,Et.height,1,Bt,ce,jt)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Bt,ce,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,qt,Et.width,Et.height,Et.depth,0,Bt,ce,Et.data);else if(A.isData3DTexture)he?(ve&&i.texStorage3D(r.TEXTURE_3D,Ft,qt,Et.width,Et.height,Et.depth),et&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Bt,ce,Et.data)):i.texImage3D(r.TEXTURE_3D,0,qt,Et.width,Et.height,Et.depth,0,Bt,ce,Et.data);else if(A.isFramebufferTexture){if(ve)if(he)i.texStorage2D(r.TEXTURE_2D,Ft,qt,Et.width,Et.height);else{let bt=Et.width,Ht=Et.height;for(let jt=0;jt<Ft;jt++)i.texImage2D(r.TEXTURE_2D,jt,qt,bt,Ht,0,Bt,ce,null),bt>>=1,Ht>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in r){const bt=r.canvas;if(bt.hasAttribute("layoutsubtree")||bt.setAttribute("layoutsubtree","true"),Et.parentNode!==bt){bt.appendChild(Et),g.add(A),bt.onpaint=Ht=>{const jt=Ht.changedElements;for(const wt of g)jt.includes(wt.image)&&(wt.needsUpdate=!0)},bt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Et);else{const jt=r.RGBA,wt=r.RGBA,ie=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,jt,wt,ie,Et)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(he&&ve){const bt=ge(Jt[0]);i.texStorage2D(r.TEXTURE_2D,Ft,qt,bt.width,bt.height)}for(let bt=0,Ht=Jt.length;bt<Ht;bt++)Vt=Jt[bt],he?et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Bt,ce,Vt):i.texImage2D(r.TEXTURE_2D,bt,qt,Bt,ce,Vt);A.generateMipmaps=!1}else if(he){if(ve){const bt=ge(Et);i.texStorage2D(r.TEXTURE_2D,Ft,qt,bt.width,bt.height)}et&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,ce,Et)}else i.texImage2D(r.TEXTURE_2D,0,qt,Bt,ce,Et);y(A)&&O(ut),It.__version=Ut.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Pt(I,A,rt){if(A.image.length!==6)return;const ut=Ot(I,A),gt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+rt);const Ut=s.get(gt);if(gt.version!==Ut.__version||ut===!0){i.activeTexture(r.TEXTURE0+rt);const It=Ge.getPrimaries(Ge.workingColorSpace),yt=A.colorSpace===Ns?null:Ge.getPrimaries(A.colorSpace),Et=A.colorSpace===Ns||It===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Bt=A.isCompressedTexture||A.image[0].isCompressedTexture,ce=A.image[0]&&A.image[0].isDataTexture,qt=[];for(let wt=0;wt<6;wt++)!Bt&&!ce?qt[wt]=M(A.image[wt],!0,l.maxCubemapSize):qt[wt]=ce?A.image[wt].image:A.image[wt],qt[wt]=Se(A,qt[wt]);const Vt=qt[0],Jt=c.convert(A.format,A.colorSpace),he=c.convert(A.type),ve=C(A.internalFormat,Jt,he,A.normalized,A.colorSpace),et=A.isVideoTexture!==!0,Ft=Ut.__version===void 0||ut===!0,bt=gt.dataReady;let Ht=N(A,Vt);vt(r.TEXTURE_CUBE_MAP,A);let jt;if(Bt){et&&Ft&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ve,Vt.width,Vt.height);for(let wt=0;wt<6;wt++){jt=qt[wt].mipmaps;for(let ie=0;ie<jt.length;ie++){const Wt=jt[ie];A.format!==Ji?Jt!==null?et?bt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,0,0,Wt.width,Wt.height,Jt,Wt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,ve,Wt.width,Wt.height,0,Wt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,0,0,Wt.width,Wt.height,Jt,he,Wt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,ve,Wt.width,Wt.height,0,Jt,he,Wt.data)}}}else{if(jt=A.mipmaps,et&&Ft){jt.length>0&&Ht++;const wt=ge(qt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ve,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(ce){et?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,qt[wt].width,qt[wt].height,Jt,he,qt[wt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ve,qt[wt].width,qt[wt].height,0,Jt,he,qt[wt].data);for(let ie=0;ie<jt.length;ie++){const Ce=jt[ie].image[wt].image;et?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,0,0,Ce.width,Ce.height,Jt,he,Ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,ve,Ce.width,Ce.height,0,Jt,he,Ce.data)}}else{et?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Jt,he,qt[wt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ve,Jt,he,qt[wt]);for(let ie=0;ie<jt.length;ie++){const Wt=jt[ie];et?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,0,0,Jt,he,Wt.image[wt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,ve,Jt,he,Wt.image[wt])}}}y(A)&&O(r.TEXTURE_CUBE_MAP),Ut.__version=gt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function _t(I,A,rt,ut,gt,Ut){const It=c.convert(rt.format,rt.colorSpace),yt=c.convert(rt.type),Et=C(rt.internalFormat,It,yt,rt.normalized,rt.colorSpace),Bt=s.get(A),ce=s.get(rt);if(ce.__renderTarget=A,!Bt.__hasExternalTextures){const qt=Math.max(1,A.width>>Ut),Vt=Math.max(1,A.height>>Ut);gt===r.TEXTURE_3D||gt===r.TEXTURE_2D_ARRAY?i.texImage3D(gt,Ut,Et,qt,Vt,A.depth,0,It,yt,null):i.texImage2D(gt,Ut,Et,qt,Vt,0,It,yt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),fe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,gt,ce.__webglTexture,0,le(A)):(gt===r.TEXTURE_2D||gt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,gt,ce.__webglTexture,Ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(I,A,rt){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){const ut=A.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,Ut=z(A.stencilBuffer,gt),It=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le(A),Ut,A.width,A.height):rt?r.renderbufferStorageMultisample(r.RENDERBUFFER,le(A),Ut,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ut,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,It,r.RENDERBUFFER,I)}else{const ut=A.textures;for(let gt=0;gt<ut.length;gt++){const Ut=ut[gt],It=c.convert(Ut.format,Ut.colorSpace),yt=c.convert(Ut.type),Et=C(Ut.internalFormat,It,yt,Ut.normalized,Ut.colorSpace);fe(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le(A),Et,A.width,A.height):rt?r.renderbufferStorageMultisample(r.RENDERBUFFER,le(A),Et,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Et,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(I,A,rt){const ut=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=s.get(A.depthTexture);if(gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ut){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,A.depthTexture.addEventListener("dispose",U)),gt.__webglTexture===void 0){gt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),vt(r.TEXTURE_CUBE_MAP,A.depthTexture);const Bt=c.convert(A.depthTexture.format),ce=c.convert(A.depthTexture.type);let qt;A.depthTexture.format===Qa?qt=r.DEPTH_COMPONENT24:A.depthTexture.format===cr&&(qt=r.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,qt,A.width,A.height,0,Bt,ce,null)}}else X(A.depthTexture,0);const Ut=gt.__webglTexture,It=le(A),yt=ut?r.TEXTURE_CUBE_MAP_POSITIVE_X+rt:r.TEXTURE_2D,Et=A.depthTexture.format===cr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Qa)fe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,yt,Ut,0,It):r.framebufferTexture2D(r.FRAMEBUFFER,Et,yt,Ut,0);else if(A.depthTexture.format===cr)fe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,yt,Ut,0,It):r.framebufferTexture2D(r.FRAMEBUFFER,Et,yt,Ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(I){const A=s.get(I),rt=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ut=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ut){const gt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),A.__depthDisposeCallback=gt}A.__boundDepthTexture=ut}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(rt)for(let ut=0;ut<6;ut++)de(A.__webglFramebuffer[ut],I,ut);else{const ut=I.texture.mipmaps;ut&&ut.length>0?de(A.__webglFramebuffer[0],I,0):de(A.__webglFramebuffer,I,0)}else if(rt){A.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ut]),A.__webglDepthbuffer[ut]===void 0)A.__webglDepthbuffer[ut]=r.createRenderbuffer(),Nt(A.__webglDepthbuffer[ut],I,!1);else{const gt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=A.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,Ut)}}else{const ut=I.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Nt(A.__webglDepthbuffer,I,!1);else{const gt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,Ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function St(I,A,rt){const ut=s.get(I);A!==void 0&&_t(ut.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),rt!==void 0&&xt(I)}function Dt(I){const A=I.texture,rt=s.get(I),ut=s.get(A);I.addEventListener("dispose",E);const gt=I.textures,Ut=I.isWebGLCubeRenderTarget===!0,It=gt.length>1;if(It||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=A.version,h.memory.textures++),Ut){rt.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[yt]=[];for(let Et=0;Et<A.mipmaps.length;Et++)rt.__webglFramebuffer[yt][Et]=r.createFramebuffer()}else rt.__webglFramebuffer[yt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let yt=0;yt<A.mipmaps.length;yt++)rt.__webglFramebuffer[yt]=r.createFramebuffer()}else rt.__webglFramebuffer=r.createFramebuffer();if(It)for(let yt=0,Et=gt.length;yt<Et;yt++){const Bt=s.get(gt[yt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=r.createTexture(),h.memory.textures++)}if(I.samples>0&&fe(I)===!1){rt.__webglMultisampledFramebuffer=r.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let yt=0;yt<gt.length;yt++){const Et=gt[yt];rt.__webglColorRenderbuffer[yt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,rt.__webglColorRenderbuffer[yt]);const Bt=c.convert(Et.format,Et.colorSpace),ce=c.convert(Et.type),qt=C(Et.internalFormat,Bt,ce,Et.normalized,Et.colorSpace,I.isXRRenderTarget===!0),Vt=le(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,qt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,rt.__webglColorRenderbuffer[yt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(rt.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(rt.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ut){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(r.TEXTURE_CUBE_MAP,A);for(let yt=0;yt<6;yt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Et=0;Et<A.mipmaps.length;Et++)_t(rt.__webglFramebuffer[yt][Et],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Et);else _t(rt.__webglFramebuffer[yt],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);y(A)&&O(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let yt=0,Et=gt.length;yt<Et;yt++){const Bt=gt[yt],ce=s.get(Bt);let qt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(qt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(qt,ce.__webglTexture),vt(qt,Bt),_t(rt.__webglFramebuffer,I,Bt,r.COLOR_ATTACHMENT0+yt,qt,0),y(Bt)&&O(qt)}i.unbindTexture()}else{let yt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(yt,ut.__webglTexture),vt(yt,A),A.mipmaps&&A.mipmaps.length>0)for(let Et=0;Et<A.mipmaps.length;Et++)_t(rt.__webglFramebuffer[Et],I,A,r.COLOR_ATTACHMENT0,yt,Et);else _t(rt.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,yt,0);y(A)&&O(yt),i.unbindTexture()}I.depthBuffer&&xt(I)}function Rt(I){const A=I.textures;for(let rt=0,ut=A.length;rt<ut;rt++){const gt=A[rt];if(y(gt)){const Ut=D(I),It=s.get(gt).__webglTexture;i.bindTexture(Ut,It),O(Ut),i.unbindTexture()}}}const Ct=[],ne=[];function $t(I){if(I.samples>0){if(fe(I)===!1){const A=I.textures,rt=I.width,ut=I.height;let gt=r.COLOR_BUFFER_BIT;const Ut=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=s.get(I),yt=A.length>1;if(yt)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Et=I.texture.mipmaps;Et&&Et.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(gt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(gt|=r.STENCIL_BUFFER_BIT)),yt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,It.__webglColorRenderbuffer[Bt]);const ce=s.get(A[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ce,0)}r.blitFramebuffer(0,0,rt,ut,0,0,rt,ut,gt,r.NEAREST),p===!0&&(Ct.length=0,ne.length=0,Ct.push(r.COLOR_ATTACHMENT0+Bt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ct.push(Ut),ne.push(Ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),yt)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,It.__webglColorRenderbuffer[Bt]);const ce=s.get(A[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,ce,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){const A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function le(I){return Math.min(l.maxSamples,I.samples)}function fe(I){const A=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function V(I){const A=h.render.frame;_.get(I)!==A&&(_.set(I,A),I.update())}function Se(I,A){const rt=I.colorSpace,ut=I.format,gt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||rt!==ef&&rt!==Ns&&(Ge.getTransfer(rt)===tn?(ut!==Ji||gt!==Ai)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",rt)),A}function ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=j,this.resetTextureUnits=it,this.getTextureUnits=J,this.setTextureUnits=$,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=Y,this.setTextureCube=ct,this.rebindTextures=St,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $w(r,t){function i(s,l=Ns){let c;const h=Ge.getTransfer(l);if(s===Ai)return r.UNSIGNED_BYTE;if(s===wm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Nm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jS)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===WS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===XS)return r.BYTE;if(s===qS)return r.SHORT;if(s===Bl)return r.UNSIGNED_SHORT;if(s===Rm)return r.INT;if(s===Sa)return r.UNSIGNED_INT;if(s===_a)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===YS)return r.ALPHA;if(s===ZS)return r.RGB;if(s===Ji)return r.RGBA;if(s===Qa)return r.DEPTH_COMPONENT;if(s===cr)return r.DEPTH_STENCIL;if(s===KS)return r.RED;if(s===Dm)return r.RED_INTEGER;if(s===hr)return r.RG;if(s===Lm)return r.RG_INTEGER;if(s===Um)return r.RGBA_INTEGER;if(s===Wu||s===Yu||s===Zu||s===Ku)if(h===tn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ku)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gp||s===Vp||s===kp||s===Xp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Gp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qp||s===jp||s===Wp||s===Yp||s===Zp||s===$u||s===Kp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qp||s===jp)return h===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Wp)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yp)return c.COMPRESSED_R11_EAC;if(s===Zp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===$u)return c.COMPRESSED_RG11_EAC;if(s===Kp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Jp||s===Qp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm||s===cm||s===um)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Jp)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qp)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$p)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tm)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===em)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nm)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===im)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===am)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sm)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rm)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===om)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lm)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cm)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===um)return h===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fm||s===hm||s===dm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===fm)return h===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pm||s===mm||s===tf||s===gm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===pm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===mm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const tN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new rM(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ba({vertexShader:tN,fragmentShader:eN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ze(new Wl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iN extends Us{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,g=null,v=null,S=null,T=null;const L=typeof XRWebGLBinding<"u",M=new nN,y={},O=i.getContextAttributes();let D=null,C=null;const z=[],N=[],U=new zt;let E=null,P=null;const B=new hi;B.viewport=new dn;const F=new hi;F.viewport=new dn;const W=[B,F],it=new lA;let J=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ot=z[tt];return ot===void 0&&(ot=new ip,z[tt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(tt){let ot=z[tt];return ot===void 0&&(ot=new ip,z[tt]=ot),ot.getGripSpace()},this.getHand=function(tt){let ot=z[tt];return ot===void 0&&(ot=new ip,z[tt]=ot),ot.getHandSpace()};function j(tt){const ot=N.indexOf(tt.inputSource);if(ot===-1)return;const Mt=z[ot];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,m||h),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function k(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",X);for(let tt=0;tt<z.length;tt++){const ot=N[tt];ot!==null&&(N[tt]=null,z[tt].disconnect(ot))}J=null,$=null,M.reset();for(const tt in y)delete y[tt];if(t.setRenderTarget(D),S=null,v=null,g=null,l=null,C=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(U.width,U.height,!1),P!==null){const tt=P.camera;tt.fov=P.fov,tt.zoom=P.zoom,tt.updateProjectionMatrix(),P=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(tt){m=tt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&L&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",k),l.addEventListener("inputsourceschange",X),O.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(U),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Pt=null,_t=null;O.depth&&(_t=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=O.stencil?cr:Qa,Pt=O.stencil?Fl:Sa);const Nt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Nt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Qi(v.textureWidth,v.textureHeight,{format:Ji,type:Ai,depthTexture:new Gl(v.textureWidth,v.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Qi(S.framebufferWidth,S.framebufferHeight,{format:Ji,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function X(tt){for(let ot=0;ot<tt.removed.length;ot++){const Mt=tt.removed[ot],Pt=N.indexOf(Mt);Pt>=0&&(N[Pt]=null,z[Pt].disconnect(Mt))}for(let ot=0;ot<tt.added.length;ot++){const Mt=tt.added[ot];let Pt=N.indexOf(Mt);if(Pt===-1){for(let Nt=0;Nt<z.length;Nt++)if(Nt>=N.length){N.push(Mt),Pt=Nt;break}else if(N[Nt]===null){N[Nt]=Mt,Pt=Nt;break}if(Pt===-1)break}const _t=z[Pt];_t&&_t.connect(Mt)}}const Q=new q,Y=new q;function ct(tt,ot,Mt){Q.setFromMatrixPosition(ot.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const Pt=Q.distanceTo(Y),_t=ot.projectionMatrix.elements,Nt=Mt.projectionMatrix.elements,de=_t[14]/(_t[10]-1),xt=_t[14]/(_t[10]+1),St=(_t[9]+1)/_t[5],Dt=(_t[9]-1)/_t[5],Rt=(_t[8]-1)/_t[0],Ct=(Nt[8]+1)/Nt[0],ne=de*Rt,$t=de*Ct,le=Pt/(-Rt+Ct),fe=le*-Rt;if(ot.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(fe),tt.translateZ(le),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),_t[10]===-1)tt.projectionMatrix.copy(ot.projectionMatrix),tt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const V=de+le,Se=xt+le,ge=ne-fe,I=$t+(Pt-fe),A=St*xt/Se*V,rt=Dt*xt/Se*V;tt.projectionMatrix.makePerspective(ge,I,A,rt,V,Se),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Lt(tt,ot){ot===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ot.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let ot=tt.near,Mt=tt.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),it.near=F.near=B.near=ot,it.far=F.far=B.far=Mt,(J!==it.near||$!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),J=it.near,$=it.far),it.layers.mask=tt.layers.mask|6,B.layers.mask=it.layers.mask&-5,F.layers.mask=it.layers.mask&-3;const Pt=tt.parent,_t=it.cameras;Lt(it,Pt);for(let Nt=0;Nt<_t.length;Nt++)Lt(_t[Nt],Pt);_t.length===2?ct(it,B,F):it.projectionMatrix.copy(B.projectionMatrix),P===null&&tt.isPerspectiveCamera&&(P={camera:tt,fov:tt.fov,zoom:tt.zoom}),Gt(tt,it,Pt)};function Gt(tt,ot,Mt){Mt===null?tt.matrix.copy(ot.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ot.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ot.projectionMatrix),tt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=sf*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(tt){p=tt,v!==null&&(v.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(it)},this.getCameraTexture=function(tt){return y[tt]};let G=null;function vt(tt,ot){if(_=ot.getViewerPose(m||h),T=ot,_!==null){const Mt=_.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Pt=!1;Mt.length!==it.cameras.length&&(it.cameras.length=0,Pt=!0);for(let xt=0;xt<Mt.length;xt++){const St=Mt[xt];let Dt=null;if(S!==null)Dt=S.getViewport(St);else{const Ct=g.getViewSubImage(v,St);Dt=Ct.viewport,xt===0&&(t.setRenderTargetTextures(C,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(C))}let Rt=W[xt];Rt===void 0&&(Rt=new hi,Rt.layers.enable(xt),Rt.viewport=new dn,W[xt]=Rt),Rt.matrix.fromArray(St.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(St.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),xt===0&&(it.matrix.copy(Rt.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Pt===!0&&it.cameras.push(Rt)}const _t=l.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){g=s.getBinding();const xt=g.getDepthInformation(Mt[0]);xt&&xt.isValid&&xt.texture&&M.init(xt,l.renderState)}if(_t&&_t.includes("camera-access")&&L){t.state.unbindTexture(),g=s.getBinding();for(let xt=0;xt<Mt.length;xt++){const St=Mt[xt].camera;if(St){let Dt=y[St];Dt||(Dt=new rM,y[St]=Dt);const Rt=g.getCameraImage(St);Dt.sourceTexture=Rt}}}}for(let Mt=0;Mt<z.length;Mt++){const Pt=N[Mt],_t=z[Mt];Pt!==null&&_t!==void 0&&_t.update(Pt,ot,m||h)}G&&G(tt,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),T=null}const Ot=new xM;Ot.setAnimationLoop(vt),this.setAnimationLoop=function(tt){G=tt},this.dispose=function(){}}}const aN=new un,AM=new be;AM.set(-1,0,0,0,1,0,0,0,1);function sN(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,vM(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,O,D,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),g(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,C)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),L(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,O,D):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ii&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ii&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const O=t.get(y),D=O.envMap,C=O.envMapRotation;D&&(M.envMap.value=D,M.envMapRotation.value.setFromMatrix4(aN.makeRotationFromEuler(C)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(AM),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,O,D){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*O,M.scale.value=D*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,O){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function L(M,y){const O=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function rN(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,z){const N=z.program;s.uniformBlockBinding(C,N)}function m(C,z){let N=l[C.id];N===void 0&&(M(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",O));const U=z.program;s.updateUBOMapping(C,U);const E=t.render.frame;c[C.id]!==E&&(v(C),c[C.id]=E)}function _(C){const z=g();C.__bindingPointIndex=z;const N=r.createBuffer(),U=C.__size,E=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,U,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,z,N),N}function g(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const z=l[C.id],N=C.uniforms,U=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,z);for(let E=0,P=N.length;E<P;E++){const B=N[E];if(Array.isArray(B))for(let F=0,W=B.length;F<W;F++)S(B[F],E,F,U);else S(B,E,0,U)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,z,N,U){if(L(C,z,N,U)===!0){const E=C.__offset,P=C.value;if(Array.isArray(P)){let B=0;for(let F=0;F<P.length;F++){const W=P[F],it=y(W);T(W,C.__data,B),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(B+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(P,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,C.__data)}}function T(C,z,N){typeof C=="number"||typeof C=="boolean"?z[0]=C:C.isMatrix3?(z[0]=C.elements[0],z[1]=C.elements[1],z[2]=C.elements[2],z[3]=0,z[4]=C.elements[3],z[5]=C.elements[4],z[6]=C.elements[5],z[7]=0,z[8]=C.elements[6],z[9]=C.elements[7],z[10]=C.elements[8],z[11]=0):ArrayBuffer.isView(C)?z.set(new C.constructor(C.buffer,C.byteOffset,z.length)):C.toArray(z,N)}function L(C,z,N,U){const E=C.value,P=z+"_"+N;if(U[P]===void 0)return typeof E=="number"||typeof E=="boolean"?U[P]=E:ArrayBuffer.isView(E)?U[P]=E.slice():U[P]=E.clone(),!0;{const B=U[P];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return U[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function M(C){const z=C.uniforms;let N=0;const U=16;for(let P=0,B=z.length;P<B;P++){const F=Array.isArray(z[P])?z[P]:[z[P]];for(let W=0,it=F.length;W<it;W++){const J=F[W],$=Array.isArray(J.value)?J.value:[J.value];for(let j=0,k=$.length;j<k;j++){const X=$[j],Q=y(X),Y=N%U,ct=Y%Q.boundary,Lt=Y+ct;N+=ct,Lt!==0&&U-Lt<Q.storage&&(N+=U-Lt),J.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=Q.storage}}}const E=N%U;return E>0&&(N+=U-E),C.__size=N,C.__cache={},this}function y(C){const z={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(z.boundary=4,z.storage=4):C.isVector2?(z.boundary=8,z.storage=8):C.isVector3||C.isColor?(z.boundary=16,z.storage=12):C.isVector4?(z.boundary=16,z.storage=16):C.isMatrix3?(z.boundary=48,z.storage=48):C.isMatrix4?(z.boundary=64,z.storage=64):C.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(z.boundary=16,z.storage=C.byteLength):me("WebGLRenderer: Unsupported uniform value type.",C),z}function O(C){const z=C.target;z.removeEventListener("dispose",O);const N=h.indexOf(z.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function D(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:p,update:m,dispose:D}}const oN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ma=null;function lN(){return ma===null&&(ma=new h2(oN,16,16,hr,Ma),ma.name="DFG_LUT",ma.minFilter=Yn,ma.magFilter=Yn,ma.wrapS=Za,ma.wrapT=Za,ma.generateMipmaps=!1,ma.needsUpdate=!0),ma}class cN{constructor(t={}){const{canvas:i=HT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Ai}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const L=S,M=new Set([Um,Lm,Dm]),y=new Set([Ai,Sa,Bl,Fl,wm,Nm]),O=new Uint32Array(4),D=new Int32Array(4),C=new q;let z=null,N=null;const U=[],E=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let F=!1,W=null,it=null,J=null,$=null;this._outputColorSpace=Bi;let j=0,k=0,X=null,Q=-1,Y=null;const ct=new dn,Lt=new dn;let Gt=null;const G=new Ue(0);let vt=0,Ot=i.width,tt=i.height,ot=1,Mt=null,Pt=null;const _t=new dn(0,0,Ot,tt),Nt=new dn(0,0,Ot,tt);let de=!1;const xt=new Bm;let St=!1,Dt=!1;const Rt=new un,Ct=new q,ne=new dn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function fe(){return X===null?ot:1}let V=s;function Se(R,Z){return i.getContext(R,Z)}let ge,I,A,rt,ut,gt,Ut,It,yt,Et,Bt,ce,qt,Vt,Jt,he,ve,et,Ft,bt,Ht,jt,wt;try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cm}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",kn,!1),V===null){const Z="webgl2";if(V=Se(Z,R),V===null)throw Se(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(R){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",kn,!1),ke("WebGLRenderer: "+R.message),R}function ie(){ge=new lR(V),ge.init(),Ht=new $w(V,ge),I=new QC(V,ge,t,Ht),A=new Jw(V,ge),I.reversedDepthBuffer&&v&&A.buffers.depth.setReversed(!0),it=V.createFramebuffer(),J=V.createFramebuffer(),$=V.createFramebuffer(),rt=new fR(V),ut=new Iw,gt=new Qw(V,ge,A,ut,I,Ht,rt),Ut=new oR(B),It=new dA(V),jt=new KC(V,It),yt=new cR(V,It,rt,jt),Et=new dR(V,yt,It,jt,rt),et=new hR(V,I,gt),Jt=new $C(ut),Bt=new zw(B,Ut,ge,I,jt,Jt),ce=new sN(B,ut),qt=new Fw,Vt=new qw(ge),ve=new ZC(B,Ut,A,Et,T,p),he=new Kw(B,Et,I),wt=new rN(V,rt,I,A),Ft=new JC(V,ge,rt),bt=new uR(V,ge,rt),rt.programs=Bt.programs,B.capabilities=I,B.extensions=ge,B.properties=ut,B.renderLists=qt,B.shadowMap=he,B.state=A,B.info=rt}L!==Ai&&(P=new mR(L,i.width,i.height,d,l,c));const Wt=new iN(B,V);this.xr=Wt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(R){R!==void 0&&(ot=R,this.setSize(Ot,tt,!1))},this.getSize=function(R){return R.set(Ot,tt)},this.setSize=function(R,Z,mt=!0){if(Wt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=R,tt=Z,i.width=Math.floor(R*ot),i.height=Math.floor(Z*ot),mt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(Ot*ot,tt*ot).floor()},this.setDrawingBufferSize=function(R,Z,mt){Ot=R,tt=Z,ot=mt,i.width=Math.floor(R*mt),i.height=Math.floor(Z*mt),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(L===Ai){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ct)},this.getViewport=function(R){return R.copy(_t)},this.setViewport=function(R,Z,mt,ft){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,Z,mt,ft),A.viewport(ct.copy(_t).multiplyScalar(ot).round())},this.getScissor=function(R){return R.copy(Nt)},this.setScissor=function(R,Z,mt,ft){R.isVector4?Nt.set(R.x,R.y,R.z,R.w):Nt.set(R,Z,mt,ft),A.scissor(Lt.copy(Nt).multiplyScalar(ot).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(R){A.setScissorTest(de=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){Pt=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,mt=!0){let ft=0;if(R){let ht=!1;if(X!==null){const Yt=X.texture.format;ht=M.has(Yt)}if(ht){const Yt=X.texture.type,Qt=y.has(Yt),kt=ve.getClearColor(),ae=ve.getClearAlpha(),re=kt.r,_e=kt.g,Me=kt.b;Qt?(O[0]=re,O[1]=_e,O[2]=Me,O[3]=ae,V.clearBufferuiv(V.COLOR,0,O)):(D[0]=re,D[1]=_e,D[2]=Me,D[3]=ae,V.clearBufferiv(V.COLOR,0,D))}else ft|=V.COLOR_BUFFER_BIT}Z&&(ft|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),mt&&(ft|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft!==0&&V.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",kn,!1),ve.dispose(),qt.dispose(),Vt.dispose(),ut.dispose(),Ut.dispose(),Et.dispose(),jt.dispose(),wt.dispose(),Bt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",cn),Wt.removeEventListener("sessionend",Kn),Xn.stop()};function Ce(R){R.preventDefault(),xx("WebGLRenderer: Context Lost."),F=!0}function xe(){xx("WebGLRenderer: Context Restored."),F=!1;const R=rt.autoReset,Z=he.enabled,mt=he.autoUpdate,ft=he.needsUpdate,ht=he.type;ie(),rt.autoReset=R,he.enabled=Z,he.autoUpdate=mt,he.needsUpdate=ft,he.type=ht}function kn(R){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Zn(R){const Z=R.target;Z.removeEventListener("dispose",Zn),mr(Z)}function mr(R){Ta(R),ut.remove(R)}function Ta(R){const Z=ut.get(R).programs;Z!==void 0&&(Z.forEach(function(mt){Bt.releaseProgram(mt)}),R.isShaderMaterial&&Bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,mt,ft,ht,Yt){Z===null&&(Z=$t);const Qt=ht.isMesh&&ht.matrixWorld.determinantAffine()<0,kt=Do(R,Z,mt,ft,ht);A.setMaterial(ft,Qt);let ae=mt.index,re=1;if(ft.wireframe===!0){if(ae=yt.getWireframeAttribute(mt),ae===void 0)return;re=2}const _e=mt.drawRange,Me=mt.attributes.position;let te=_e.start*re,Oe=(_e.start+_e.count)*re;Yt!==null&&(te=Math.max(te,Yt.start*re),Oe=Math.min(Oe,(Yt.start+Yt.count)*re)),ae!==null?(te=Math.max(te,0),Oe=Math.min(Oe,ae.count)):Me!=null&&(te=Math.max(te,0),Oe=Math.min(Oe,Me.count));const we=Oe-te;if(we<0||we===1/0)return;jt.setup(ht,ft,kt,mt,ae);let nn,We=Ft;if(ae!==null&&(nn=It.get(ae),We=bt,We.setIndex(nn)),ht.isMesh)ft.wireframe===!0?(A.setLineWidth(ft.wireframeLinewidth*fe()),We.setMode(V.LINES)):We.setMode(V.TRIANGLES);else if(ht.isLine){let An=ft.linewidth;An===void 0&&(An=1),A.setLineWidth(An*fe()),ht.isLineSegments?We.setMode(V.LINES):ht.isLineLoop?We.setMode(V.LINE_LOOP):We.setMode(V.LINE_STRIP)}else ht.isPoints?We.setMode(V.POINTS):ht.isSprite&&We.setMode(V.TRIANGLES);if(ht.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))We.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{const An=ht._multiDrawStarts,Zt=ht._multiDrawCounts,mn=ht._multiDrawCount,He=ae?It.get(ae).bytesPerElement:1,Jn=ut.get(ft).currentProgram.getUniforms();for(let di=0;di<mn;di++)Jn.setValue(V,"_gl_DrawID",di),We.render(An[di]/He,Zt[di])}else if(ht.isInstancedMesh)We.renderInstances(te,we,ht.count);else if(mt.isInstancedBufferGeometry){const An=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Zt=Math.min(mt.instanceCount,An);We.renderInstances(te,we,Zt)}else We.render(te,we)};function Aa(R,Z,mt,ft){W!==null&&R.isNodeMaterial&&W.setObject(ft,R),St===!0&&Jt.setState(R,mt,!1),R.transparent===!0&&R.side===va&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,Os(R,Z,ft),R.side=ur,R.needsUpdate=!0,Os(R,Z,ft),R.side=va):Os(R,Z,ft)}this.compile=function(R,Z,mt=null){mt===null&&(mt=R),W!==null&&W.renderStart(R,Z,mt),N=Vt.get(mt),N.init(Z),E.push(N),mt.traverseVisible(function(ht){ht.isLight&&ht.layers.test(Z.layers)&&(N.pushLight(ht),ht.castShadow&&N.pushShadow(ht))}),R!==mt&&R.traverseVisible(function(ht){ht.isLight&&ht.layers.test(Z.layers)&&(N.pushLight(ht),ht.castShadow&&N.pushShadow(ht))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),Dt=this.localClippingEnabled,St=Jt.init(this.clippingPlanes,Dt),St===!0&&Jt.setGlobalState(this.clippingPlanes,Z),W!==null&&he.render(N.state.shadowsArray,mt,Z);const ft=new Set;return R.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;const Yt=ht.material;if(Yt)if(Array.isArray(Yt))for(let Qt=0;Qt<Yt.length;Qt++){const kt=Yt[Qt];Aa(kt,mt,Z,ht),ft.add(kt)}else Aa(Yt,mt,Z,ht),ft.add(Yt)}),N=E.pop(),W!==null&&W.renderEnd(),ft},this.compileAsync=function(R,Z,mt=null){const ft=this.compile(R,Z,mt);return new Promise(ht=>{function Yt(){if(ft.forEach(function(Qt){const ae=ut.get(Qt).currentProgram;(ae===void 0||ae.isReady())&&ft.delete(Qt)}),ft.size===0){ht(R);return}setTimeout(Yt,10)}ge.get("KHR_parallel_shader_compile")!==null?Yt():setTimeout(Yt,10)})};let Fi=null;function Xe(R){Fi&&Fi(R)}function cn(){Xn.stop()}function Kn(){Xn.start()}const Xn=new xM;Xn.setAnimationLoop(Xe),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(R){Fi=R,Wt.setAnimationLoop(R),R===null?Xn.stop():Xn.start()},Wt.addEventListener("sessionstart",cn),Wt.addEventListener("sessionend",Kn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;W!==null&&W.renderStart(R,Z);const mt=Wt.enabled===!0&&Wt.isPresenting===!0,ft=P!==null&&(X===null||mt)&&P.begin(B,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(Z),Z=Wt.getCamera()),R.isScene===!0&&R.onBeforeRender(B,R,Z,X),N=Vt.get(R,E.length),N.init(Z),N.state.textureUnits=gt.getTextureUnits(),E.push(N),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),xt.setFromProjectionMatrix(Rt,xa,Z.reversedDepth),Dt=this.localClippingEnabled,St=Jt.init(this.clippingPlanes,Dt),z=qt.get(R,U.length),z.init(),U.push(z),Wt.enabled===!0&&Wt.isPresenting===!0){const Qt=B.xr.getDepthSensingMesh();Qt!==null&&Hi(Qt,Z,-1/0,B.sortObjects)}Hi(R,Z,0,B.sortObjects),z.finish(),W!==null&&W.updateLights(N.state.lightsArray),B.sortObjects===!0&&z.sort(Mt,Pt),le=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,le&&ve.addToRenderList(z,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&Jt.beginShadows();const ht=N.state.shadowsArray;if(he.render(ht,R,Z),St===!0&&Jt.endShadows(),(ft&&P.hasRenderPass())===!1){const Qt=z.opaque,kt=z.transmissive;if(N.setupLights(),Z.isArrayCamera){const ae=Z.cameras;if(kt.length>0)for(let re=0,_e=ae.length;re<_e;re++){const Me=ae[re];Ca(Qt,kt,R,Me)}le&&ve.render(R);for(let re=0,_e=ae.length;re<_e;re++){const Me=ae[re];ta(z,R,Me,Me.viewport)}}else kt.length>0&&Ca(Qt,kt,R,Z),le&&ve.render(R),ta(z,R,Z)}X!==null&&k===0&&(gt.updateMultisampleRenderTarget(X),gt.updateRenderTargetMipmap(X)),ft&&P.end(B),R.isScene===!0&&R.onAfterRender(B,R,Z),jt.resetDefaultState(),Q=-1,Y=null,E.pop(),E.length>0?(N=E[E.length-1],gt.setTextureUnits(N.state.textureUnits),St===!0&&Jt.setGlobalState(B.clippingPlanes,N.state.camera)):N=null,U.pop(),U.length>0?z=U[U.length-1]:z=null,W!==null&&W.renderEnd()};function Hi(R,Z,mt,ft){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)mt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(xt)){ft&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Rt);const Qt=Et.update(R),kt=R.material;kt.visible&&z.push(R,Qt,kt,mt,ne.z,null,Z)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(xt))){const Qt=Et.update(R),kt=R.material;if(ft&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(Qt.boundingSphere===null&&Qt.computeBoundingSphere(),ne.copy(Qt.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(Rt)),Array.isArray(kt)){const ae=Qt.groups;for(let re=0,_e=ae.length;re<_e;re++){const Me=ae[re],te=kt[Me.materialIndex];te&&te.visible&&z.push(R,Qt,te,mt,ne.z,Me,Z)}}else kt.visible&&z.push(R,Qt,kt,mt,ne.z,null,Z)}}const Yt=R.children;for(let Qt=0,kt=Yt.length;Qt<kt;Qt++)Hi(Yt[Qt],Z,mt,ft)}function ta(R,Z,mt,ft){const{opaque:ht,transmissive:Yt,transparent:Qt}=R;N.setupLightsView(mt),St===!0&&Jt.setGlobalState(B.clippingPlanes,mt),ft&&A.viewport(ct.copy(ft)),ht.length>0&&ea(ht,Z,mt),Yt.length>0&&ea(Yt,Z,mt),Qt.length>0&&ea(Qt,Z,mt),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Ca(R,Z,mt,ft){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ft.id]===void 0){const te=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ft.id]=new Qi(1,1,{generateMipmaps:!0,type:te?Ma:Ai,minFilter:lr,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const Yt=N.state.transmissionRenderTarget[ft.id],Qt=ft.viewport||ct;Yt.setSize(Qt.z*B.transmissionResolutionScale,Qt.w*B.transmissionResolutionScale);const kt=B.getRenderTarget(),ae=B.getActiveCubeFace(),re=B.getActiveMipmapLevel();B.setRenderTarget(Yt),B.getClearColor(G),vt=B.getClearAlpha(),vt<1&&B.setClearColor(16777215,.5),B.clear(),le&&ve.render(mt);const _e=B.toneMapping;B.toneMapping=ya;const Me=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),N.setupLightsView(ft),St===!0&&Jt.setGlobalState(B.clippingPlanes,ft),ea(R,mt,ft),gt.updateMultisampleRenderTarget(Yt),gt.updateRenderTargetMipmap(Yt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Oe=0,we=Z.length;Oe<we;Oe++){const nn=Z[Oe],{object:We,geometry:An,material:Zt,group:mn}=nn;if(Zt.side===va&&We.layers.test(ft.layers)){const He=Zt.side;Zt.side=ii,Zt.needsUpdate=!0,Yl(We,mt,ft,An,Zt,mn),Zt.side=He,Zt.needsUpdate=!0,te=!0}}te===!0&&(gt.updateMultisampleRenderTarget(Yt),gt.updateRenderTargetMipmap(Yt))}B.setRenderTarget(kt,ae,re),B.setClearColor(G,vt),Me!==void 0&&(ft.viewport=Me),B.toneMapping=_e}function ea(R,Z,mt){const ft=Z.isScene===!0?Z.overrideMaterial:null;for(let ht=0,Yt=R.length;ht<Yt;ht++){const Qt=R[ht],{object:kt,geometry:ae,group:re}=Qt;let _e=Qt.material;_e.allowOverride===!0&&ft!==null&&(_e=ft),kt.layers.test(mt.layers)&&Yl(kt,Z,mt,ae,_e,re)}}function Yl(R,Z,mt,ft,ht,Yt){W!==null&&ht.isNodeMaterial&&W.setObject(R,ht),R.onBeforeRender(B,Z,mt,ft,ht,Yt),R.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ht.onBeforeRender(B,Z,mt,ft,R,Yt),ht.transparent===!0&&ht.side===va&&ht.forceSinglePass===!1?(ht.side=ii,ht.needsUpdate=!0,B.renderBufferDirect(mt,Z,ft,ht,R,Yt),ht.side=ur,ht.needsUpdate=!0,B.renderBufferDirect(mt,Z,ft,ht,R,Yt),ht.side=va):B.renderBufferDirect(mt,Z,ft,ht,R,Yt),R.onAfterRender(B,Z,mt,ft,ht,Yt)}function Os(R,Z,mt){Z.isScene!==!0&&(Z=$t);const ft=ut.get(R),ht=N.state.lights,Yt=N.state.shadowsArray,Qt=ht.state.version,kt=Bt.getParameters(R,ht.state,Yt,Z,mt,N.state.lightProbeGridArray),ae=Bt.getProgramCacheKey(kt);let re=ft.programs;ft.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ft.fog=Z.fog;const _e=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ft.envMap=Ut.get(R.envMap||ft.environment,_e),ft.envMapRotation=ft.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",Zn),re=new Map,ft.programs=re);let Me=re.get(ae);if(Me!==void 0){if(ft.currentProgram===Me&&ft.lightsStateVersion===Qt)return wo(R,kt),Me}else kt.uniforms=Bt.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,mt,kt),R.onBeforeCompile(kt,B),Me=Bt.acquireProgram(kt,ae),re.set(ae,Me),ft.uniforms=kt.uniforms;const te=ft.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Jt.uniform),wo(R,kt),ft.needsLights=Kl(R),ft.lightsStateVersion=Qt,ft.needsLights&&(te.ambientLightColor.value=ht.state.ambient,te.lightProbe.value=ht.state.probe,te.sunLights.value=ht.state.sun,te.sunLightShadows.value=ht.state.sunShadow,te.directionalLights.value=ht.state.directional,te.directionalLightShadows.value=ht.state.directionalShadow,te.spotLights.value=ht.state.spot,te.spotLightShadows.value=ht.state.spotShadow,te.rectAreaLights.value=ht.state.rectArea,te.ltc_1.value=ht.state.rectAreaLTC1,te.ltc_2.value=ht.state.rectAreaLTC2,te.pointLights.value=ht.state.point,te.pointLightShadows.value=ht.state.pointShadow,te.hemisphereLights.value=ht.state.hemi,te.sunShadowMatrix.value=ht.state.sunShadowMatrix,te.sunShadowCascade.value=ht.state.sunShadowCascade,te.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,te.spotLightMatrix.value=ht.state.spotLightMatrix,te.spotLightMap.value=ht.state.spotLightMap,te.pointShadowMatrix.value=ht.state.pointShadowMatrix),ft.lightProbeGrid=N.state.lightProbeGridArray.length>0,ft.currentProgram=Me,ft.uniformsList=null,Me}function Ro(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Qu.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function wo(R,Z){const mt=ut.get(R);mt.outputColorSpace=Z.outputColorSpace,mt.batching=Z.batching,mt.batchingColor=Z.batchingColor,mt.instancing=Z.instancing,mt.instancingColor=Z.instancingColor,mt.instancingMorph=Z.instancingMorph,mt.skinning=Z.skinning,mt.morphTargets=Z.morphTargets,mt.morphNormals=Z.morphNormals,mt.morphColors=Z.morphColors,mt.morphTargetsCount=Z.morphTargetsCount,mt.numClippingPlanes=Z.numClippingPlanes,mt.numIntersection=Z.numClipIntersection,mt.vertexAlphas=Z.vertexAlphas,mt.vertexTangents=Z.vertexTangents,mt.toneMapping=Z.toneMapping}function No(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(Z.matrixWorld);for(let mt=0,ft=R.length;mt<ft;mt++){const ht=R[mt];if(ht.texture!==null&&ht.boundingBox.containsPoint(C))return ht}return null}function Do(R,Z,mt,ft,ht){Z.isScene!==!0&&(Z=$t),gt.resetTextureUnits();const Yt=Z.fog,Qt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial?Z.environment:null,kt=X===null?B.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ge.workingColorSpace,ae=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial&&!ft.envMap||ft.isMeshPhongMaterial&&!ft.envMap,re=Ut.get(ft.envMap||Qt,ae),_e=ft.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,Me=!!mt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),te=!!mt.morphAttributes.position,Oe=!!mt.morphAttributes.normal,we=!!mt.morphAttributes.color;let nn=ya;ft.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(nn=B.toneMapping);const We=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,An=We!==void 0?We.length:0,Zt=ut.get(ft),mn=N.state.lights;if(St===!0&&(Dt===!0||R!==Y)){const Ie=R===Y&&ft.id===Q;Jt.setState(ft,R,Ie)}let He=!1;ft.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==mn.state.version||Zt.outputColorSpace!==kt||ht.isBatchedMesh&&Zt.batching===!1||!ht.isBatchedMesh&&Zt.batching===!0||ht.isBatchedMesh&&Zt.batchingColor===!0&&ht._colorsTexture===null||ht.isBatchedMesh&&Zt.batchingColor===!1&&ht._colorsTexture!==null||ht.isInstancedMesh&&Zt.instancing===!1||!ht.isInstancedMesh&&Zt.instancing===!0||ht.isSkinnedMesh&&Zt.skinning===!1||!ht.isSkinnedMesh&&Zt.skinning===!0||ht.isInstancedMesh&&Zt.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&Zt.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&Zt.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&Zt.instancingMorph===!1&&ht.morphTexture!==null||Zt.envMap!==re||ft.fog===!0&&Zt.fog!==Yt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Jt.numPlanes||Zt.numIntersection!==Jt.numIntersection)||Zt.vertexAlphas!==_e||Zt.vertexTangents!==Me||Zt.morphTargets!==te||Zt.morphNormals!==Oe||Zt.morphColors!==we||Zt.toneMapping!==nn||Zt.morphTargetsCount!==An||!!Zt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,Zt.__version=ft.version);let Jn=Zt.currentProgram;He===!0&&(Jn=Os(ft,Z,ht),W&&ft.isNodeMaterial&&W.onUpdateProgram(ft,Jn,Zt));let di=!1,na=!1,Ne=!1;const qe=Jn.getUniforms(),rn=Zt.uniforms;if(A.useProgram(Jn.program)&&(di=!0,na=!0,Ne=!0),ft.id!==Q&&(Q=ft.id,na=!0),Zt.needsLights){const Ie=No(N.state.lightProbeGridArray,ht);Zt.lightProbeGrid!==Ie&&(Zt.lightProbeGrid=Ie,na=!0)}if(di||Y!==R){A.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),qe.setValue(V,"projectionMatrix",R.projectionMatrix),qe.setValue(V,"viewMatrix",R.matrixWorldInverse);const gn=qe.map.cameraPosition;gn!==void 0&&gn.setValue(V,Ct.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&qe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&qe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,na=!0,Ne=!0)}if(Zt.needsLights&&(mn.state.sunShadowMap.length>0&&qe.setValue(V,"sunShadowMap",mn.state.sunShadowMap,gt),mn.state.directionalShadowMap.length>0&&qe.setValue(V,"directionalShadowMap",mn.state.directionalShadowMap,gt),mn.state.spotShadowMap.length>0&&qe.setValue(V,"spotShadowMap",mn.state.spotShadowMap,gt),mn.state.pointShadowMap.length>0&&qe.setValue(V,"pointShadowMap",mn.state.pointShadowMap,gt)),ht.isSkinnedMesh){qe.setOptional(V,ht,"bindMatrix"),qe.setOptional(V,ht,"bindMatrixInverse");const Ie=ht.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),qe.setValue(V,"boneTexture",Ie.boneTexture,gt))}ht.isBatchedMesh&&(qe.setOptional(V,ht,"batchingTexture"),qe.setValue(V,"batchingTexture",ht._matricesTexture,gt),qe.setOptional(V,ht,"batchingIdTexture"),qe.setValue(V,"batchingIdTexture",ht._indirectTexture,gt),qe.setOptional(V,ht,"batchingColorTexture"),ht._colorsTexture!==null&&qe.setValue(V,"batchingColorTexture",ht._colorsTexture,gt));const pi=mt.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&et.update(ht,mt,Jn),(na||Zt.receiveShadow!==ht.receiveShadow)&&(Zt.receiveShadow=ht.receiveShadow,qe.setValue(V,"receiveShadow",ht.receiveShadow)),(ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial)&&ft.envMap===null&&Z.environment!==null&&(rn.envMapIntensity.value=Z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=lN()),na){if(qe.setValue(V,"toneMappingExposure",B.toneMappingExposure),Zt.needsLights&&Zl(rn,Ne),Yt&&ft.fog===!0&&ce.refreshFogUniforms(rn,Yt),ce.refreshMaterialUniforms(rn,ft,ot,tt,N.state.transmissionRenderTarget[R.id]),Zt.needsLights&&Zt.lightProbeGrid){const Ie=Zt.lightProbeGrid;rn.probesSH.value=Ie.texture,rn.probesMin.value.copy(Ie.boundingBox.min),rn.probesMax.value.copy(Ie.boundingBox.max),rn.probesResolution.value.copy(Ie.resolution)}Qu.upload(V,Ro(Zt),rn,gt)}if(ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Qu.upload(V,Ro(Zt),rn,gt),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&qe.setValue(V,"center",ht.center),qe.setValue(V,"modelViewMatrix",ht.modelViewMatrix),qe.setValue(V,"normalMatrix",ht.normalMatrix),qe.setValue(V,"modelMatrix",ht.matrixWorld),ft.uniformsGroups!==void 0){const Ie=ft.uniformsGroups;for(let gn=0,Ra=Ie.length;gn<Ra;gn++){const Jl=Ie[gn];wt.update(Jl,Jn),wt.bind(Jl,Jn)}}return Jn}function Zl(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.sunLights.needsUpdate=Z,R.sunLightShadows.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Kl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Z,mt){const ft=ut.get(R);ft.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),ut.get(R.texture).__webglTexture=Z,ut.get(R.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:mt,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const mt=ut.get(R);mt.__webglFramebuffer=Z,mt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,mt=0){X=R,j=Z,k=mt;let ft=null,ht=!1,Yt=!1;if(R){const kt=ut.get(R);if(kt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(V.FRAMEBUFFER,kt.__webglFramebuffer),ct.copy(R.viewport),Lt.copy(R.scissor),Gt=R.scissorTest,A.viewport(ct),A.scissor(Lt),A.setScissorTest(Gt),Q=-1;return}else if(kt.__webglFramebuffer===void 0)gt.setupRenderTarget(R);else if(kt.__hasExternalTextures)gt.rebindTextures(R,ut.get(R.texture).__webglTexture,ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const _e=R.depthTexture;if(kt.__boundDepthTexture!==_e){if(_e!==null&&ut.has(_e)&&(R.width!==_e.image.width||R.height!==_e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(R)}}const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Yt=!0);const re=ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[Z])?ft=re[Z][mt]:ft=re[Z],ht=!0):R.samples>0&&gt.useMultisampledRTT(R)===!1?ft=ut.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?ft=re[mt]:ft=re,ct.copy(R.viewport),Lt.copy(R.scissor),Gt=R.scissorTest}else ct.copy(_t).multiplyScalar(ot).floor(),Lt.copy(Nt).multiplyScalar(ot).floor(),Gt=de;if(mt!==0&&(ft=it),A.bindFramebuffer(V.FRAMEBUFFER,ft)&&A.drawBuffers(R,ft),A.viewport(ct),A.scissor(Lt),A.setScissorTest(Gt),ht){const kt=ut.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,kt.__webglTexture,mt)}else if(Yt){const kt=Z;for(let ae=0;ae<R.textures.length;ae++){const re=ut.get(R.textures[ae]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ae,re.__webglTexture,mt,kt)}}else if(R!==null&&mt!==0){const kt=ut.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,kt.__webglTexture,mt)}Q=-1};function Ci(R){const Z=ut.get(R);return(Z.__readFormat!==R.format||Z.__readType!==R.type)&&(Z.__readFormat=R.format,Z.__readType=R.type,Z.__formatReadable=I.textureFormatReadable(R.format),Z.__typeReadable=I.textureTypeReadable(R.type)),Z}this.readRenderTargetPixels=function(R,Z,mt,ft,ht,Yt,Qt,kt=0){if(!(R&&R.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qt!==void 0&&(ae=ae[Qt]),ae){A.bindFramebuffer(V.FRAMEBUFFER,ae);try{const re=R.textures[kt],_e=re.format,Me=re.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt);const te=Ci(re);if(te.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ft&&mt>=0&&mt<=R.height-ht&&V.readPixels(Z,mt,ft,ht,Ht.convert(_e),Ht.convert(Me),Yt)}finally{const re=X!==null?ut.get(X).__webglFramebuffer:null;A.bindFramebuffer(V.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,Z,mt,ft,ht,Yt,Qt,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qt!==void 0&&(ae=ae[Qt]),ae)if(Z>=0&&Z<=R.width-ft&&mt>=0&&mt<=R.height-ht){A.bindFramebuffer(V.FRAMEBUFFER,ae);const re=R.textures[kt],_e=re.format,Me=re.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt);const te=Ci(re);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.bufferData(V.PIXEL_PACK_BUFFER,Yt.byteLength,V.STREAM_READ),V.readPixels(Z,mt,ft,ht,Ht.convert(_e),Ht.convert(Me),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const we=X!==null?ut.get(X).__webglFramebuffer:null;A.bindFramebuffer(V.FRAMEBUFFER,we);const nn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await GT(V,nn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Yt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Oe),V.deleteSync(nn),Yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,mt=0){const ft=Math.pow(2,-mt),ht=Math.floor(R.image.width*ft),Yt=Math.floor(R.image.height*ft),Qt=Z!==null?Z.x:0,kt=Z!==null?Z.y:0;gt.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,mt,0,0,Qt,kt,ht,Yt),A.unbindTexture()},this.copyTextureToTexture=function(R,Z,mt=null,ft=null,ht=0,Yt=0){let Qt,kt,ae,re,_e,Me,te,Oe,we;const nn=R.isCompressedTexture?R.mipmaps[Yt]:R.image;if(mt!==null)Qt=mt.max.x-mt.min.x,kt=mt.max.y-mt.min.y,ae=mt.isBox3?mt.max.z-mt.min.z:1,re=mt.min.x,_e=mt.min.y,Me=mt.isBox3?mt.min.z:0;else{const rn=Math.pow(2,-ht);Qt=Math.floor(nn.width*rn),kt=Math.floor(nn.height*rn),R.isDataArrayTexture?ae=nn.depth:R.isData3DTexture?ae=Math.floor(nn.depth*rn):ae=1,re=0,_e=0,Me=0}ft!==null?(te=ft.x,Oe=ft.y,we=ft.z):(te=0,Oe=0,we=0);const We=Ht.convert(Z.format),An=Ht.convert(Z.type);let Zt;Z.isData3DTexture?(gt.setTexture3D(Z,0),Zt=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(gt.setTexture2DArray(Z,0),Zt=V.TEXTURE_2D_ARRAY):(gt.setTexture2D(Z,0),Zt=V.TEXTURE_2D),A.activeTexture(V.TEXTURE0),A.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),A.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),A.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const mn=A.getParameter(V.UNPACK_ROW_LENGTH),He=A.getParameter(V.UNPACK_IMAGE_HEIGHT),Jn=A.getParameter(V.UNPACK_SKIP_PIXELS),di=A.getParameter(V.UNPACK_SKIP_ROWS),na=A.getParameter(V.UNPACK_SKIP_IMAGES);A.pixelStorei(V.UNPACK_ROW_LENGTH,nn.width),A.pixelStorei(V.UNPACK_IMAGE_HEIGHT,nn.height),A.pixelStorei(V.UNPACK_SKIP_PIXELS,re),A.pixelStorei(V.UNPACK_SKIP_ROWS,_e),A.pixelStorei(V.UNPACK_SKIP_IMAGES,Me);const Ne=R.isDataArrayTexture||R.isData3DTexture,qe=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const rn=ut.get(R),pi=ut.get(Z),Ie=ut.get(rn.__renderTarget),gn=ut.get(pi.__renderTarget);A.bindFramebuffer(V.READ_FRAMEBUFFER,Ie.__webglFramebuffer),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let Ra=0;Ra<ae;Ra++)Ne&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ut.get(R).__webglTexture,ht,Me+Ra),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ut.get(Z).__webglTexture,Yt,we+Ra)),V.blitFramebuffer(re,_e,Qt,kt,te,Oe,Qt,kt,V.DEPTH_BUFFER_BIT,V.NEAREST);A.bindFramebuffer(V.READ_FRAMEBUFFER,null),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ht!==0||R.isRenderTargetTexture||ut.has(R)){const rn=ut.get(R),pi=ut.get(Z);A.bindFramebuffer(V.READ_FRAMEBUFFER,J),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,$);for(let Ie=0;Ie<ae;Ie++)Ne?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,ht,Me+Ie):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,ht),qe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pi.__webglTexture,Yt,we+Ie):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pi.__webglTexture,Yt),ht!==0?V.blitFramebuffer(re,_e,Qt,kt,te,Oe,Qt,kt,V.COLOR_BUFFER_BIT,V.NEAREST):qe?V.copyTexSubImage3D(Zt,Yt,te,Oe,we+Ie,re,_e,Qt,kt):V.copyTexSubImage2D(Zt,Yt,te,Oe,re,_e,Qt,kt);A.bindFramebuffer(V.READ_FRAMEBUFFER,null),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else qe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Zt,Yt,te,Oe,we,Qt,kt,ae,We,An,nn.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Zt,Yt,te,Oe,we,Qt,kt,ae,We,nn.data):V.texSubImage3D(Zt,Yt,te,Oe,we,Qt,kt,ae,We,An,nn):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Yt,te,Oe,Qt,kt,We,An,nn.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Yt,te,Oe,nn.width,nn.height,We,nn.data):V.texSubImage2D(V.TEXTURE_2D,Yt,te,Oe,Qt,kt,We,An,nn);A.pixelStorei(V.UNPACK_ROW_LENGTH,mn),A.pixelStorei(V.UNPACK_IMAGE_HEIGHT,He),A.pixelStorei(V.UNPACK_SKIP_PIXELS,Jn),A.pixelStorei(V.UNPACK_SKIP_ROWS,di),A.pixelStorei(V.UNPACK_SKIP_IMAGES,na),Yt===0&&Z.generateMipmaps&&V.generateMipmap(Zt),A.unbindTexture()},this.initRenderTarget=function(R){ut.get(R).__webglFramebuffer===void 0&&gt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?gt.setTextureCube(R,0):R.isData3DTexture?gt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?gt.setTexture2DArray(R,0):gt.setTexture2D(R,0),A.unbindTexture()},this.resetState=function(){j=0,k=0,X=null,A.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ge._getUnpackColorSpace()}}const Ty={type:"change"},Wm={type:"start"},CM={type:"end"},Xu=new hf,Ay=new Wa,uN=Math.cos(70*XT.DEG2RAD),Rn=new q,fi=2*Math.PI,en={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wp=1e-6;class fN extends fA{constructor(t,i=null){super(t,i),this.state=en.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yo.ROTATE,MIDDLE:yo.DOLLY,RIGHT:yo.PAN},this.touches={ONE:go.ROTATE,TWO:go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Ds,this._lastTargetPosition=new q,this._quat=new Ds().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ty,this._sphericalDelta=new ty,this._scale=1,this._panOffset=new q,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new q,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dN.bind(this),this._onPointerDown=hN.bind(this),this._onPointerUp=pN.bind(this),this._onContextMenu=SN.bind(this),this._onMouseWheel=vN.bind(this),this._onKeyDown=_N.bind(this),this._onTouchStart=xN.bind(this),this._onTouchMove=yN.bind(this),this._onMouseDown=mN.bind(this),this._onMouseMove=gN.bind(this),this._interceptControlDown=MN.bind(this),this._interceptControlUp=bN.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=en.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ty),this.update(),this.state=en.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Rn.copy(i).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===en.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=fi:s>Math.PI&&(s-=fi),l<-Math.PI?l+=fi:l>Math.PI&&(l-=fi),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Rn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new q(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Xu.origin.copy(this.object.position),Xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xu.direction))<uN?this.object.lookAt(this.target):(Ay.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xu.intersectPlane(Ay,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>wp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wp||this._lastTargetPosition.distanceToSquared(this.target)>wp?(this.dispatchEvent(Ty),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fi/60*this.autoRotateSpeed*t:fi/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Rn.setFromMatrixColumn(i,0),Rn.multiplyScalar(-t),this._panOffset.add(Rn)}_panUp(t,i){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(i,1):(Rn.setFromMatrixColumn(i,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(t),this._panOffset.add(Rn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Rn.copy(l).sub(this.target);let c=Rn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/i.clientHeight),this._rotateUp(fi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/i.clientHeight),this._rotateUp(fi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new zt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function hN(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function dN(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function pN(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(CM),this.state=en.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function mN(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=en.DOLLY;break;case yo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=en.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=en.ROTATE}break;case yo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=en.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=en.PAN}break;default:this.state=en.NONE}this.state!==en.NONE&&this.dispatchEvent(Wm)}function gN(r){switch(this.state){case en.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case en.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case en.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function vN(r){this.enabled===!1||this.enableZoom===!1||this.state!==en.NONE||(r.preventDefault(),this.dispatchEvent(Wm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(CM))}function _N(r){this.enabled!==!1&&this._handleKeyDown(r)}function xN(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case go.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=en.TOUCH_ROTATE;break;case go.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=en.TOUCH_PAN;break;default:this.state=en.NONE}break;case 2:switch(this.touches.TWO){case go.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=en.TOUCH_DOLLY_PAN;break;case go.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=en.TOUCH_DOLLY_ROTATE;break;default:this.state=en.NONE}break;default:this.state=en.NONE}this.state!==en.NONE&&this.dispatchEvent(Wm)}function yN(r){switch(this._trackPointer(r),this.state){case en.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case en.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case en.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case en.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=en.NONE}}function SN(r){this.enabled!==!1&&r.preventDefault()}function MN(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bN(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EN({mapData:r,position:t,theme:i="dark",onShowToast:s}){const l=se.useRef(null),c=se.useRef(null),[h,d]=se.useState("orbit"),[p,m]=se.useState(!0),[_,g]=se.useState(!1),[v,S]=se.useState(!0),[T,L]=se.useState(!1),M=se.useRef({renderer:null,scene:null,camera:null,controls:null,robotGroup:null,lidarPoints:null,pathLine:null,obstaclesGroup:null,gasCloudGroup:null,spotlightL:null,spotlightR:null,animFrameId:null,tunnelMesh:null,archMeshes:[],railsGroup:null}),y=i==="light";se.useEffect(()=>{const N=l.current;if(!N)return;const U=N.clientWidth||480,E=N.clientHeight||280,P=new a2,B=y?14870768:461588;P.background=new Ue(B),P.fog=new Im(B,.009);const F=new hi(48,U/E,.5,500);F.position.set(20,28,42);const W=new cN({canvas:c.current,antialias:!0,powerPreference:"high-performance"});W.setSize(U,E),W.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),W.shadowMap.enabled=!0,W.shadowMap.type=LS;const it=new fN(F,W.domElement);it.enableDamping=!0,it.dampingFactor=.06,it.maxPolarAngle=Math.PI/2-.04,it.minDistance=6,it.maxDistance=140,it.target.set(0,2,0);const J=new rA(y?16777215:1976635,y?1.4:.85);P.add(J);const $=new sA(y?16317180:3718648,y?1.2:.45);$.position.set(30,45,20),$.castShadow=!0,$.shadow.mapSize.width=1024,$.shadow.mapSize.height=1024,P.add($);const j=120,k=36,X=16,Q=new Wl(k,j,32,64),Y=new Ei({color:y?13358561:988970,roughness:.85,metalness:.15,wireframe:_}),ct=new Ze(Q,Y);ct.rotation.x=-Math.PI/2,ct.receiveShadow=!0,P.add(ct);const Lt=new uA(120,40,y?2450411:3718648,y?9741240:1976635);Lt.position.y=.02,P.add(Lt);const Gt=new hM;Gt.moveTo(-k/2,0),Gt.lineTo(-k/2,X*.55),Gt.quadraticCurveTo(0,X*1.35,k/2,X*.55),Gt.lineTo(k/2,0);const G={depth:j,bevelEnabled:!1},vt=new km(Gt,G),Ot=new Ei({color:y?14870768:659229,roughness:.9,metalness:.1,side:ii,wireframe:_}),tt=new Ze(vt,Ot);tt.position.set(0,0,-j/2),P.add(tt);const ot=[],Mt=9;for(let Xe=0;Xe<Mt;Xe++){const cn=-j/2+Xe*j/(Mt-1),Kn=new xm([new q(-k/2+.3,0,cn),new q(-k/2+.3,X*.5,cn),new q(0,X*1.15,cn),new q(k/2-.3,X*.5,cn),new q(k/2-.3,0,cn)]),Xn=new cf(Kn,24,.45,8,!1),Hi=new Ei({color:y?6583435:16096779,metalness:.8,roughness:.3}),ta=new Ze(Xn,Hi);P.add(ta),ot.push(ta);const Ca=new $x(y?3900150:16096779,y?.4:.8,14);Ca.position.set(0,X*1.1,cn),P.add(Ca)}const Pt=new Ya,_t=new Ei({color:y?4674921:9741240,metalness:.9,roughness:.2}),Nt=new Ze(new Ti(.35,.3,j),_t);Nt.position.set(-2.5,.15,0);const de=new Ze(new Ti(.35,.3,j),_t);de.position.set(2.5,.15,0),Pt.add(Nt,de);const xt=new Ei({color:y?7877903:4140574,roughness:.95});for(let Xe=-j/2;Xe<j/2;Xe+=2.2){const cn=new Ze(new Ti(6.5,.18,.8),xt);cn.position.set(0,.08,Xe),Pt.add(cn)}P.add(Pt);const St=new Ya,Dt=new Ti(3.6,1.4,4.8),Rt=new Ei({color:y?1976635:1981066,metalness:.6,roughness:.4}),Ct=new Ze(Dt,Rt);Ct.position.y=1.3,Ct.castShadow=!0,St.add(Ct);const ne=new Ti(3.8,.3,4.2),$t=new Ei({color:y?165063:3718648,metalness:.8,roughness:.2}),le=new Ze(ne,$t);le.position.y=2.1,St.add(le);const fe=new Ei({color:988970,roughness:.9}),V=new Ze(new Ti(.9,1.5,5.2),fe);V.position.set(-2.2,.75,0),V.castShadow=!0;const Se=new Ze(new Ti(.9,1.5,5.2),fe);Se.position.set(2.2,.75,0),Se.castShadow=!0,St.add(V,Se);const ge=new Ol(.5,.6,.8,16),I=new Ei({color:1120295,metalness:.9,roughness:.1}),A=new Ze(ge,I);A.position.set(0,2.6,.5),St.add(A);const rt=new Ol(.4,.4,.15,16),ut=new or({color:y?165063:3718648}),gt=new Ze(rt,ut);gt.position.set(0,3,.5),St.add(gt);const Ut=new Qx(16775149,4.5,38,Math.PI/5,.45);Ut.position.set(-1.3,1.7,2.5),Ut.target.position.set(-1.3,.2,22),Ut.castShadow=!0,St.add(Ut),St.add(Ut.target);const It=new Qx(16775149,4.5,38,Math.PI/5,.45);It.position.set(1.3,1.7,2.5),It.target.position.set(1.3,.2,22),It.castShadow=!0,St.add(It),St.add(It.target);const yt=new or({color:16707722}),Et=new Ze(new _o(.22,12,12),yt);Et.position.set(-1.3,1.6,2.4);const Bt=new Ze(new _o(.22,12,12),yt);Bt.position.set(1.3,1.6,2.4),St.add(Et,Bt);const ce=new Ti(3.6,.5,.4),qt=new Ei({color:16096779,roughness:.5}),Vt=new Ze(ce,qt);Vt.position.set(0,.9,2.5),St.add(Vt);const Jt=new Ol(.08,.08,1.8,8),he=new Ei({color:6583435}),ve=new Ze(Jt,he);ve.position.set(-1.4,3,-1.8),St.add(ve);const et=new _o(.22,12,12),Ft=new or({color:y?1483594:2278750}),bt=new Ze(et,Ft);bt.position.set(-1.4,3.9,-1.8),St.add(bt),P.add(St);const Ht=2200,jt=new Dn,wt=new Float32Array(Ht*3),ie=new Float32Array(Ht*3);for(let Xe=0;Xe<Ht;Xe++){const cn=Math.random()*Math.PI*2,Kn=6+Math.random()*(k/2-6),Xn=(Math.random()-.5)*j,Hi=Math.max(.2,Math.min(X,Math.sin(cn)*(X*.7)+3)),ta=Math.cos(cn)*Kn;wt[Xe*3]=ta,wt[Xe*3+1]=Hi,wt[Xe*3+2]=Xn,ie[Xe*3]=y?.1:.22,ie[Xe*3+1]=y?.45:.75,ie[Xe*3+2]=y?.85:.98}jt.setAttribute("position",new $i(wt,3)),jt.setAttribute("color",new $i(ie,3));const Wt=new aM({size:.35,vertexColors:!0,transparent:!0,opacity:.75,blending:Dp}),Ce=new g2(jt,Wt);P.add(Ce);const xe=new Ya;P.add(xe);const kn=new Ya;P.add(kn);const Zn=new Ya;P.add(Zn),M.current={renderer:W,scene:P,camera:F,controls:it,robotGroup:St,lidarPoints:Ce,pathGroup:kn,obstaclesGroup:xe,gasCloudGroup:Zn,spotlightL:Ut,spotlightR:It,animFrameId:null,tunnelMesh:tt,archMeshes:ot,railsGroup:Pt,lidarDisc:gt};let mr=new cA;const Ta=()=>{const Xe=mr.getDelta(),cn=mr.getElapsedTime();if(gt&&(gt.rotation.y+=Xe*12),Ce&&p&&(Ce.rotation.y=Math.sin(cn*.4)*.05),it&&(it.autoRotate=T,it.autoRotateSpeed=1.2,it.update()),h==="chase"&&St){const Kn=new q(0,5,-12);Kn.applyQuaternion(St.quaternion);const Xn=St.position.clone().add(Kn);F.position.lerp(Xn,.08);const Hi=St.position.clone().add(new q(0,2,8));F.lookAt(Hi)}W.render(P,F),M.current.animFrameId=requestAnimationFrame(Ta)};Ta();const Aa=()=>{if(!N||!W||!F)return;const Xe=N.clientWidth,cn=N.clientHeight;F.aspect=Xe/cn,F.updateProjectionMatrix(),W.setSize(Xe,cn)},Fi=new ResizeObserver(Aa);return Fi.observe(N),()=>{M.current.animFrameId&&cancelAnimationFrame(M.current.animFrameId),Fi.disconnect(),W.dispose(),it.dispose()}},[y]),se.useEffect(()=>{const{tunnelMesh:N,spotlightL:U,spotlightR:E,lidarPoints:P}=M.current;N&&(N.material.wireframe=_),U&&E&&(U.intensity=v?y?2.5:4.5:0,E.intensity=v?y?2.5:4.5:0),P&&(P.visible=p)},[_,v,p,y]),se.useEffect(()=>{var J,$;const{robotGroup:N,controls:U}=M.current;if(!N)return;const E=(t==null?void 0:t.x)??((J=r==null?void 0:r.robot)==null?void 0:J.x)??52.4,P=(t==null?void 0:t.y)??(($=r==null?void 0:r.robot)==null?void 0:$.y)??38.6,B=(t==null?void 0:t.heading)??84,F=(E-50)/50*14,W=(P-40)/40*45;N.position.set(F,0,W);const it=B*Math.PI/180;N.rotation.y=-it+Math.PI/2,h==="orbit"&&U&&U.target.lerp(new q(F,1.5,W),.1)},[t,r,h]),se.useEffect(()=>{const{scene:N,obstaclesGroup:U}=M.current;if(!(!N||!U)){for(;U.children.length>0;){const E=U.children[0];U.remove(E),E.geometry&&E.geometry.dispose(),E.material&&E.material.dispose()}Array.isArray(r==null?void 0:r.obstacles)&&r.obstacles.forEach(E=>{const P=(E.x-50)/50*14,B=(E.y-40)/40*45,F=Math.max(2.5,(E.width||8)/100*28),W=4.2,it=Math.max(3,(E.height||18)/80*40),J=new Hm(Math.min(F,it)*.7,1),$=new Ei({color:y?12131356:14427686,roughness:.8,metalness:.2}),j=new Ze(J,$);j.position.set(P,W*.5,B),j.castShadow=!0,j.receiveShadow=!0,U.add(j);const k=new Xm(F*.6,F*.75,24),X=new or({color:15680580,side:va,transparent:!0,opacity:.65}),Q=new Ze(k,X);Q.rotation.x=-Math.PI/2,Q.position.set(P,.05,B),U.add(Q);const Y=new $x(15680580,y?.6:1.2,12);Y.position.set(P,W+.5,B),U.add(Y)})}},[r==null?void 0:r.obstacles,y]),se.useEffect(()=>{const{pathGroup:N}=M.current;if(N){for(;N.children.length>0;){const U=N.children[0];N.remove(U),U.geometry&&U.geometry.dispose(),U.material&&U.material.dispose()}if(Array.isArray(r==null?void 0:r.path)&&r.path.length>1){const U=r.path.map(W=>{const it=(W.x-50)/50*14,J=(W.y-40)/40*45;return new q(it,.25,J)}),E=new xm(U),P=new cf(E,48,.22,8,!1),B=new Ei({color:y?2450411:3718648,emissive:y?1920728:165063,emissiveIntensity:.6,roughness:.2}),F=new Ze(P,B);N.add(F),U.forEach(W=>{const it=new Ze(new _o(.35,12,12),new or({color:y?1920728:6333946}));it.position.copy(W),N.add(it)})}}},[r==null?void 0:r.path,y]);const O=se.useCallback(N=>{const{camera:U,controls:E,robotGroup:P}=M.current;if(!U||!E)return;d(N);const B=(P==null?void 0:P.position.x)||0,F=(P==null?void 0:P.position.z)||0;N==="orbit"?(E.target.set(B,1.5,F),U.position.set(B+18,22,F+28),s==null||s("3D View: Free Orbit Cam (Click & Drag)")):N==="chase"?(E.target.set(B,2,F+10),s==null||s("3D View: Third-Person Rover Chase Cam")):N==="iso"?(E.target.set(B,1,F),U.position.set(B+32,38,F+32),s==null||s("3D View: Tactical Isometric Mine Perspective")):N==="top"&&(E.target.set(B,0,F),U.position.set(B,55,F+.1),s==null||s("3D View: Top-Down 3D Spatial Scan")),E.update()},[s]),D=()=>{O("orbit"),s==null||s("3D Camera locked to Mining Robot")},C=()=>{const{camera:N,controls:U}=M.current;if(!N||!U)return;N.position.lerp(U.target,1-.85),U.update()},z=()=>{const{camera:N,controls:U}=M.current;if(!N||!U)return;const E=N.position.clone().sub(U.target).normalize();N.position.addScaledVector(E,4.5),U.update()};return b.jsxs("section",{className:"card map-card map3d-card",children:[b.jsxs("div",{className:"card-header",children:[b.jsxs("div",{className:"card-title-group",children:[b.jsx(hx,{size:18,className:"card-header-icon"}),b.jsx("h2",{className:"card-title",children:"3D Map Section"}),b.jsx("span",{className:"badge-3d",children:"WebGL 3D Twin"})]}),b.jsxs("div",{className:"card-header-right",children:[b.jsxs("div",{className:"cam-mode-toolbar",children:[b.jsxs("button",{className:`cam-mode-btn ${h==="orbit"?"active":""}`,onClick:()=>O("orbit"),title:"Free Orbit Camera (Rotate & Tilt)",children:[b.jsx(OE,{size:13}),b.jsx("span",{children:"Orbit"})]}),b.jsxs("button",{className:`cam-mode-btn ${h==="chase"?"active":""}`,onClick:()=>O("chase"),title:"Third-Person Chase Camera (Follows Robot)",children:[b.jsx(Yy,{size:13}),b.jsx("span",{children:"Chase"})]}),b.jsxs("button",{className:`cam-mode-btn ${h==="iso"?"active":""}`,onClick:()=>O("iso"),title:"Tactical Isometric 3D View",children:[b.jsx(hx,{size:13}),b.jsx("span",{children:"Iso"})]}),b.jsxs("button",{className:`cam-mode-btn ${h==="top"?"active":""}`,onClick:()=>O("top"),title:"Top-Down 3D Spatial View",children:[b.jsx(YE,{size:13}),b.jsx("span",{children:"Top"})]})]}),b.jsxs("span",{className:"live-pill",children:[b.jsx("span",{className:"live-dot"})," Live 3D"]})]})]}),b.jsxs("div",{className:"map-viewport-wrapper map3d-viewport",ref:l,children:[b.jsx("canvas",{ref:c,id:"mining-map-3d-canvas"}),b.jsxs("div",{className:"map-hud-overlay map3d-hud",children:[b.jsx("span",{className:"coord-label",children:"X:"})," ",b.jsxs("strong",{children:[Number((t==null?void 0:t.x)??52.4).toFixed(1),"m"]}),b.jsx("span",{className:"coord-label",children:"Y:"})," ",b.jsxs("strong",{children:[Number((t==null?void 0:t.y)??38.6).toFixed(1),"m"]}),b.jsx("span",{className:"coord-label",children:"Depth:"})," ",b.jsx("strong",{children:"-480m"}),b.jsx("span",{className:"coord-label",children:"Heading:"})," ",b.jsxs("strong",{children:[Math.round((t==null?void 0:t.heading)??84),"°"]}),b.jsx("span",{className:"coord-label",children:"Shaft:"})," ",b.jsx("span",{children:(t==null?void 0:t.zone)??"Sector 4 - Deep Shaft B"})]}),b.jsxs("div",{className:"map3d-quick-toggles",children:[b.jsxs("button",{className:`map3d-quick-btn ${p?"active":""}`,onClick:()=>m(!p),title:"Toggle LiDAR Point Cloud Particles",children:[b.jsx(JE,{size:14}),b.jsx("span",{children:"LiDAR"})]}),b.jsxs("button",{className:`map3d-quick-btn ${v?"active":""}`,onClick:()=>S(!v),title:"Toggle Robot High-Beam Headlights",children:[b.jsx(DS,{size:14}),b.jsx("span",{children:"Lights"})]}),b.jsxs("button",{className:`map3d-quick-btn ${_?"active":""}`,onClick:()=>g(!_),title:"Toggle Rock Tunnel Wireframe Mesh",children:[b.jsx(eS,{size:14}),b.jsx("span",{children:"Mesh"})]}),b.jsxs("button",{className:`map3d-quick-btn ${T?"active":""}`,onClick:()=>L(!T),title:"Toggle 360° Auto-Orbit Inspection",children:[b.jsx(fS,{size:14}),b.jsx("span",{children:"Auto"})]})]}),b.jsxs("div",{className:"map-controls",children:[b.jsx("button",{className:"map-ctrl-btn",onClick:C,title:"Zoom In 3D Scene",children:"+"}),b.jsx("button",{className:"map-ctrl-btn",onClick:z,title:"Zoom Out 3D Scene",children:"−"}),b.jsx("button",{className:"map-ctrl-btn",onClick:D,title:"Center Camera on Robot",children:b.jsx(MS,{size:16})})]}),b.jsxs("div",{className:"map-legend map3d-legend",children:[b.jsxs("div",{className:"legend-item",children:[b.jsx("span",{className:"legend-symbol robot-dot"}),b.jsx("span",{className:"legend-text",children:"3D Rover"})]}),b.jsxs("div",{className:"legend-item",children:[b.jsx("span",{className:"legend-symbol path-dash"}),b.jsx("span",{className:"legend-text",children:"3D Path"})]}),b.jsxs("div",{className:"legend-item",children:[b.jsx("span",{className:"legend-symbol obstacle-box"}),b.jsx("span",{className:"legend-text",children:"Rock Hazard"})]}),b.jsxs("div",{className:"legend-item",children:[b.jsx("span",{className:"legend-symbol lidar-dot"}),b.jsx("span",{className:"legend-text",children:"LiDAR Cloud"})]})]})]})]})}function TN({cameraData:r,depth:t,speed:i,onShowToast:s}){const[l,c]=se.useState((r==null?void 0:r.currentCam)||"front"),[h,d]=se.useState((r==null?void 0:r.nightVision)||!1),[p,m]=se.useState((r==null?void 0:r.feedAvailable)!==!1),[_,g]=se.useState(""),[v,S]=se.useState(null),T=se.useRef(null),L=se.useRef(null);se.useEffect(()=>{m((r==null?void 0:r.feedAvailable)!==!1),(r==null?void 0:r.nightVision)!==void 0&&d(r.nightVision),r!=null&&r.currentCam&&c(r.currentCam)},[r]),se.useEffect(()=>{const z=setInterval(()=>{g(new Date().toTimeString().split(" ")[0])},1e3);return()=>clearInterval(z)},[]),se.useEffect(()=>{var z;return l==="webcam"?(z=navigator.mediaDevices)==null||z.getUserMedia({video:!0}).then(N=>{S(N),T.current&&(T.current.srcObject=N)}).catch(N=>{console.warn("Webcam access error:",N),s==null||s("Webcam unavailable: switching to rover front camera"),c("front")}):v&&(v.getTracks().forEach(N=>N.stop()),S(null)),()=>{v&&v.getTracks().forEach(N=>N.stop())}},[l]);const M=()=>{c(l==="front"?"cockpit":l==="cockpit"?"webcam":"front")},y=()=>{d(!h),s==null||s(h?"Night Vision IR: DISABLED":"Night Vision IR: ENABLED")},O=()=>{var z,N,U;document.fullscreenElement?(U=document.exitFullscreen)==null||U.call(document):(N=(z=L.current)==null?void 0:z.requestFullscreen)==null||N.call(z)},D=()=>{m(!0),s==null||s("Camera feed reconnected!")},C=()=>{m(!p),p&&(s==null||s("Simulating camera feed unavailable"))};return b.jsxs("section",{className:"card camera-card",children:[b.jsxs("div",{className:"card-header",children:[b.jsxs("div",{className:"card-title-group",children:[b.jsx(CS,{size:18,className:"card-header-icon"}),b.jsx("h2",{className:"card-title",children:"Live Camera"})]}),b.jsx("div",{className:"card-header-right",children:b.jsxs("div",{className:"cam-tools",children:[b.jsxs("button",{className:"cam-tool-btn",onClick:M,title:"Switch Camera View",children:[b.jsx(fS,{size:13}),b.jsx("span",{children:l==="front"?"Front IR":l==="cockpit"?"Cockpit":"Webcam"})]}),b.jsx("button",{className:"cam-tool-btn",onClick:y,title:"Toggle Night Vision",children:b.jsx(Yy,{size:13})}),b.jsx("button",{className:"cam-tool-btn",onClick:C,title:"Simulate Feed Unavailable",children:b.jsx(dx,{size:13})}),b.jsx("button",{className:"cam-tool-btn",onClick:O,title:"Fullscreen Camera",children:b.jsx(qE,{size:14})})]})})]}),b.jsxs("div",{ref:L,className:`camera-viewport-wrapper ${h?"night-vision":""}`,children:[b.jsx("video",{ref:T,autoPlay:!0,playsInline:!0,muted:!0,className:`camera-video-elem ${l!=="webcam"?"hidden":""}`}),b.jsx("img",{src:l==="cockpit"?"/assets/mining_tunnel_cockpit.jpg":"/assets/mining_tunnel.jpg",alt:"Live Mining Shaft Feed",className:`camera-feed-img ${l==="webcam"?"hidden":""}`}),b.jsx("div",{className:"camera-lens-overlay"}),b.jsxs("div",{className:"cam-hud-overlay",children:[b.jsxs("div",{className:"cam-hud-top",children:[b.jsxs("div",{className:"cam-rec-indicator",children:[b.jsx("span",{className:"rec-dot"})," [REC] LIVE"]}),b.jsxs("div",{className:"cam-hud-stats",children:[b.jsxs("span",{children:["DEPTH: ",t??-480,"M"]}),b.jsx("span",{children:_||"11:00:00"})]})]}),b.jsx("div",{className:"cam-hud-center",children:b.jsx("div",{className:"cam-crosshair"})}),b.jsxs("div",{className:"cam-hud-bottom",children:[b.jsxs("div",{className:"cam-heading-compass",children:["ROVER-AM08 | SPEED ",i??1.2," KM/H"]}),b.jsx("div",{className:"cam-fov-status",children:"ILLUMINATION: 100%"})]})]}),!p&&b.jsx("div",{className:"camera-unavailable-overlay",children:b.jsxs("div",{className:"unavailable-box",children:[b.jsx("h3",{className:"unavailable-title",children:"Feed unavailable"}),b.jsxs("button",{className:"retry-btn",onClick:D,children:[b.jsx(dx,{size:15}),b.jsx("span",{children:"Retry"})]})]})})]})]})}function AN({data:r,strokeColor:t,fillColor:i}){const s=se.useRef(null);return se.useEffect(()=>{const l=s.current;if(!l||!r||r.length<2)return;const c=l.getContext("2d"),h=window.devicePixelRatio||1,d=l.getBoundingClientRect();l.width=d.width*h,l.height=d.height*h,c.scale(h,h);const p=d.width,m=d.height;c.clearRect(0,0,p,m);const _=Math.min(...r)*.92,v=(Math.max(...r)*1.08||1)-_||1,S=p/(r.length-1),T=r.map((M,y)=>({x:y*S,y:m-(M-_)/v*(m-8)-4}));c.beginPath(),c.moveTo(T[0].x,T[0].y);for(let M=0;M<T.length-1;M++){const y=(T[M].x+T[M+1].x)/2,O=(T[M].y+T[M+1].y)/2;c.quadraticCurveTo(T[M].x,T[M].y,y,O)}c.lineTo(T[T.length-1].x,T[T.length-1].y),c.strokeStyle=t,c.lineWidth=2.2,c.lineCap="round",c.stroke(),c.lineTo(p,m),c.lineTo(0,m),c.closePath();const L=c.createLinearGradient(0,0,0,m);L.addColorStop(0,i),L.addColorStop(1,"rgba(0, 0, 0, 0)"),c.fillStyle=L,c.fill()},[r,t,i]),b.jsx("canvas",{ref:s,className:"sensor-sparkline"})}const qu=[{id:"mq4",alias:"ch4",chip:"MQ-4",chipType:"purple",name:"Methane (CH4)",shortFormula:"CH4",category:"gas",formula:"Combustible / Natural Gas / CNG",desc:"Explosive firedamp gas detector",unit:"ppm",precision:2,color:"#a855f7",fillColor:"rgba(168, 85, 247, 0.22)",glowClass:"purple-glow",cardClass:"mq4-card",icon:GE,threshold:2.5,criticalThreshold:4,safeText:"< 2.5 ppm",pin:"ADC0 (A0)",specs:{type:"Solid State Semiconductor (SnO2)",range:"300 – 10,000 ppm CH4",responseTime:"< 10 sec rapid catalytic",voltage:"5.0V ± 0.1V DC (150mA)",heaterPower:"≤ 900 mW",standard:"MSHA 30 CFR § 75.323 (Max 1.0% / 10,000 ppm)",baseline:"Rs/R0 = 4.4 clean air reference"}},{id:"mq7",alias:"co",chip:"MQ-7",chipType:"orange",name:"Carbon Monoxide",shortFormula:"CO",category:"gas",formula:"Toxic Whitedamp (CO)",desc:"Incomplete combustion & smoldering coal",unit:"ppm",precision:0,color:"#f97316",fillColor:"rgba(249, 115, 22, 0.22)",glowClass:"orange-glow",cardClass:"mq7-card",icon:tT,threshold:25,criticalThreshold:40,safeText:"< 25 ppm",pin:"ADC1 (A1)",specs:{type:"Micro-hotplate Metal Oxide (SnO2)",range:"10 – 1,000 ppm CO",responseTime:"< 60 sec high/low heat cycle",voltage:"5.0V (High) / 1.4V (Low) alternating",heaterPower:"≤ 350 mW avg",standard:"OSHA PEL: 50 ppm | ACGIH TLV: 25 ppm",baseline:"Rs/R0 = 7.2 clean air reference"}},{id:"mq135",chip:"MQ-135",chipType:"cyan",name:"Air Quality / NH3",shortFormula:"AQI/NH3",category:"gas",formula:"NH3 / NOx / Benzene / Smoke",desc:"Toxic blasting fumes & diesel exhaust",unit:"ppm",precision:1,color:"#06b6d4",fillColor:"rgba(6, 182, 212, 0.22)",glowClass:"cyan-glow",cardClass:"mq135-card",icon:nT,threshold:50,criticalThreshold:80,safeText:"< 50 ppm",pin:"ADC2 (A2)",specs:{type:"Broad-Spectrum Metal Oxide Semiconductor",range:"10 – 1,000 ppm Multi-gas",responseTime:"< 10 sec",voltage:"5.0V ± 0.1V DC (160mA)",heaterPower:"≤ 800 mW",standard:"NIOSH REL: 25 ppm NH3 | EPA Ambient Standard",baseline:"Rs/R0 = 3.6 clean air reference"}},{id:"mq136",chip:"MQ-136",chipType:"rose",name:"Hydrogen Sulfide",shortFormula:"H2S",category:"gas",formula:"H2S / Sour Gas / SO2",desc:"Deadly toxic stinkdamp sewer hazard",unit:"ppm",precision:2,color:"#f43f5e",fillColor:"rgba(244, 63, 94, 0.22)",glowClass:"rose-glow",cardClass:"mq136-card",icon:Ny,threshold:5,criticalThreshold:10,safeText:"< 5.0 ppm",pin:"ADC3 (A3)",specs:{type:"High Sensitivity SnO2 Semiconductor",range:"1 – 200 ppm H2S",responseTime:"< 20 sec rapid sniff",voltage:"5.0V ± 0.1V DC",heaterPower:"≤ 850 mW",standard:"MSHA: 5.0 ppm Action Ceiling | OSHA: 20 ppm max",baseline:"Rs/R0 = 2.1 calibrated baseline"}},{id:"dht22_temp",alias:"temperature",chip:"DHT22",chipType:"blue",name:"DHT22 Temperature",shortFormula:"Temp",category:"climate",formula:"Thermal State (°C)",desc:"Subterranean ambient temperature",unit:"°C",precision:1,color:"#38bdf8",fillColor:"rgba(56, 189, 248, 0.22)",glowClass:"blue-glow",cardClass:"dht22-temp-card",icon:$E,threshold:45,criticalThreshold:55,safeText:"15 – 35 °C",pin:"GPIO 4 (1-Wire)",specs:{type:"NTC Thermistor / Calibrated AM2302",range:"-40.0°C to +80.0°C (±0.5°C accuracy)",responseTime:"2.0 sec reading cycle",voltage:"3.3V – 5.5V DC",heaterPower:"Ultra-low 1.5 mA max active",standard:"Mine Safety & Health Admin Thermal Comfort Code",baseline:"Factory calibrated 16-bit internal ADC"}},{id:"dht22_humidity",alias:"humidity",chip:"DHT22",chipType:"teal",name:"DHT22 Humidity",shortFormula:"% RH",category:"climate",formula:"Relative Humidity (% RH)",desc:"Shaft aquifer & borehole moisture",unit:"% RH",precision:1,color:"#0ea5e9",fillColor:"rgba(14, 165, 233, 0.22)",glowClass:"teal-glow",cardClass:"dht22-hum-card",icon:BE,threshold:85,criticalThreshold:95,safeText:"40 – 80 %",pin:"GPIO 4 (1-Wire)",specs:{type:"Polymer Capacitor Relative Humidity Sensor",range:"0 – 100% RH (±2% RH precision)",responseTime:"2.0 sec reading cycle",voltage:"3.3V – 5.5V DC",heaterPower:"1.0 – 1.5 mA active",standard:"Explosive Atmosphere Dew Point Standard",baseline:"Single-bus digital protocol"}},{id:"o2",chip:"ME2-O2",chipType:"emerald",name:"Atmospheric O2",shortFormula:"O2",category:"climate",formula:"Oxygen (% Vol)",desc:"Crew life support & asphyxiation safety",unit:"% Vol",precision:1,color:"#10b981",fillColor:"rgba(16, 185, 129, 0.22)",glowClass:"emerald-glow",cardClass:"o2-card",icon:mS,isLowerThreshold:!0,threshold:19.5,criticalThreshold:16,safeText:"19.5 – 23.5 %",pin:"I2C 0x48",specs:{type:"Electrochemical Fuel Cell O2 Sensor",range:"0 – 25% Vol O2 (0.1% resolution)",responseTime:"< 15 sec (T90)",voltage:"3.3V via ADS1115 Differential Amp",heaterPower:"Zero power self-generating galvanic cell",standard:"MSHA § 75.321: Min 19.5% O2 in working faces",baseline:"Span calibrated at 20.9% sea-level air"}},{id:"pm25",chip:"GP2Y1010",chipType:"amber",name:"Particulate Dust",shortFormula:"PM2.5",category:"climate",formula:"Respirable Dust (PM2.5)",desc:"Coal dust explosion & silica monitoring",unit:"µg/m³",precision:0,color:"#eab308",fillColor:"rgba(234, 179, 8, 0.22)",glowClass:"amber-glow",cardClass:"pm25-card",icon:eS,threshold:100,criticalThreshold:150,safeText:"< 50 µg/m³",pin:"UART2 / RX",specs:{type:"Optical Laser Scattering Dust Sensor",range:"0 – 500 µg/m³ particulate density",responseTime:"< 1.0 sec pulse response",voltage:"5.0V DC (20 mA)",heaterPower:"≤ 100 mW",standard:"MSHA Respirable Coal Dust Standard (1.5 mg/m³)",baseline:"Zero-point dark chamber calibrated"}},{id:"battery",chip:"BMS-4S",chipType:"green",name:"Battery System",shortFormula:"BAT",category:"power",formula:"LiFePO4 4S Pack",desc:"Autonomous rover drive & sensor power",unit:"%",precision:0,color:"#22c55e",fillColor:"rgba(34, 197, 94, 0.22)",glowClass:"green-glow",cardClass:"battery-card",icon:NE,isBattery:!0,threshold:20,criticalThreshold:12,safeText:"> 20 %",pin:"SMBus I2C",specs:{type:"Smart Battery Management System (BMS)",range:"0 – 100% State of Charge (SoC)",responseTime:"Continuous 100ms telemetry",voltage:"14.8V Nominal (16.8V Full Charge)",heaterPower:"Internal cell thermal protection",standard:"UN 38.3 Lithium Battery Safety Standard",baseline:"Coulomb-counting fuel gauge IC"}}];function CN({sensors:r,history:t,onShowToast:i}){const[s,l]=se.useState("all"),[c,h]=se.useState(null),d=g=>{const v=(r==null?void 0:r[g.id])??(g.alias?r==null?void 0:r[g.alias]:void 0);if(v==null)return g.id==="mq4"?1.2:g.id==="mq7"?4:g.id==="mq135"?18:g.id==="mq136"?.3:g.id==="dht22_temp"?27.2:g.id==="dht22_humidity"?68:g.id==="o2"?20.9:g.id==="pm25"?34:g.id==="battery"?78:0;const S=typeof v=="object"?v.value:v;return Number(S)},p=(g,v)=>g.isLowerThreshold||g.isBattery?v<g.criticalThreshold?"danger":v<g.threshold?"warning":"normal":v>=g.criticalThreshold?"danger":v>=g.threshold?"warning":"normal",m=qu.filter(g=>s==="all"?!0:g.category===s),_=qu.filter(g=>{const v=d(g),S=p(g,v);return S==="danger"||S==="warning"}).length;return b.jsxs("div",{className:"sensors-suite-container",children:[b.jsxs("div",{className:"sensors-suite-header",children:[b.jsxs("div",{className:"sensors-header-title-box",children:[b.jsxs("div",{className:"sensors-header-title-row",children:[b.jsx(KE,{size:18,className:"sensors-title-icon"}),b.jsx("h3",{className:"sensors-suite-title",children:"Sensor Telemetry Array"}),b.jsxs("span",{className:"sensors-count-pill",children:[qu.length," Channels Online"]})]}),b.jsx("span",{className:"sensors-suite-subtitle",children:"MSHA & ATEX Zone 1 Compliant • MQ Series Gas Detection & DHT22 Environmental Matrix"})]}),b.jsxs("div",{className:"sensors-filter-row",children:[b.jsxs("div",{className:"sensor-category-tabs",children:[b.jsxs("button",{className:`sensor-tab-btn ${s==="all"?"active":""}`,onClick:()=>l("all"),children:["All Sensors (",qu.length,")"]}),b.jsx("button",{className:`sensor-tab-btn ${s==="gas"?"active":""}`,onClick:()=>l("gas"),children:"Gas Array (MQ-4, 7, 135, 136)"}),b.jsx("button",{className:`sensor-tab-btn ${s==="climate"?"active":""}`,onClick:()=>l("climate"),children:"Atmosphere & Climate (DHT22, O2, Dust)"}),b.jsx("button",{className:`sensor-tab-btn ${s==="power"?"active":""}`,onClick:()=>l("power"),children:"Power (BMS)"})]}),b.jsxs("div",{className:`sensors-global-status-badge ${_>0?"hazard":"nominal"}`,children:[b.jsx("span",{className:"pulse-dot"}),b.jsx("span",{children:_>0?`${_} Active Hazards`:"All Systems Nominal"})]})]})]}),b.jsx("div",{className:"sensors-row-grid",children:m.map(g=>{const v=d(g),S=p(g,v),T=v.toFixed(g.precision),L=g.icon,M=(t==null?void 0:t[g.id])??(g.alias?t==null?void 0:t[g.alias]:null)??[v,v,v,v];return b.jsxs("section",{className:`card sensor-card ${g.cardClass} ${S}`,onClick:()=>h(g),title:`Click to inspect ${g.name} (${g.chip}) calibration & specs`,children:[b.jsxs("div",{className:"sensor-card-top",children:[b.jsxs("div",{className:"sensor-header",children:[b.jsx("div",{className:`sensor-icon-wrapper ${g.glowClass}`,children:b.jsx(L,{size:20,color:g.color})}),b.jsxs("div",{className:"sensor-title-col",children:[b.jsxs("div",{className:"sensor-chip-row",children:[b.jsx("span",{className:`chip-badge ${g.chipType}`,children:g.chip}),b.jsx("span",{className:"sensor-short-code",children:g.shortFormula})]}),b.jsx("div",{className:"sensor-name",children:g.name})]})]}),b.jsx("div",{className:"sensor-status-col",children:b.jsx("span",{className:`sensor-status-badge ${S}`,children:S.toUpperCase()})})]}),b.jsxs("div",{className:"sensor-val-unit",children:[b.jsx("span",{className:"sensor-value",children:T}),b.jsx("span",{className:"sensor-unit",children:g.unit})]}),g.isBattery?b.jsx("div",{className:"battery-bar-container",children:b.jsx("div",{className:"battery-bar-track",children:b.jsx("div",{className:"battery-bar-fill",style:{width:`${Math.max(0,Math.min(100,v))}%`,background:v<20?"linear-gradient(90deg, #dc2626, #ef4444)":v<40?"linear-gradient(90deg, #ea580c, #f97316)":"linear-gradient(90deg, #10b981, #22c55e)"}})})}):b.jsx("div",{className:"sparkline-container",children:b.jsx(AN,{data:M,strokeColor:g.color,fillColor:g.fillColor})}),b.jsxs("div",{className:"sensor-card-footer",children:[b.jsxs("div",{className:"sensor-footer-meta",children:[b.jsx("span",{className:"sensor-limit-tag",title:"Safety Threshold",children:g.safeText}),b.jsx("span",{className:"sensor-pin-tag",title:"Hardware Interface",children:g.pin})]}),b.jsx("button",{className:"sensor-inspect-btn",onClick:y=>{y.stopPropagation(),h(g)},title:"View Sensor Diagnostics",children:b.jsx(VE,{size:13})})]})]},g.id)})}),c&&b.jsx(RN,{sensor:c,currentVal:d(c),status:p(c,d(c)),onClose:()=>h(null),onShowToast:i})]})}function RN({sensor:r,currentVal:t,status:i,onClose:s,onShowToast:l}){const c=r.icon,h=t.toFixed(r.precision),d=()=>{l==null||l(`Calibrated zero-drift baseline for ${r.chip} (${r.name})`)},p=()=>{l==null||l(`Self-test passed: ${r.chip} response time < 10ms. Signal nominal.`)};return b.jsx("div",{className:"modal-backdrop",onClick:s,children:b.jsxs("div",{className:"sensor-diag-modal",onClick:m=>m.stopPropagation(),children:[b.jsxs("div",{className:"modal-header",children:[b.jsxs("div",{className:"modal-title-box",children:[b.jsx("div",{className:`sensor-icon-wrapper ${r.glowClass}`,style:{width:44,height:44},children:b.jsx(c,{size:24,color:r.color})}),b.jsxs("div",{children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[b.jsx("span",{className:`chip-badge ${r.chipType}`,children:r.chip}),b.jsxs("h3",{style:{margin:0},children:[r.name," Diagnostics"]})]}),b.jsxs("p",{style:{margin:0,fontSize:12,color:"var(--text-secondary)"},children:["Target Gas / Parameter: ",r.formula," • Hardware Pin: ",r.pin]})]})]}),b.jsx("button",{className:"modal-close-btn",onClick:s,children:b.jsx(Am,{size:20})})]}),b.jsxs("div",{className:"diag-modal-body",children:[b.jsxs("div",{className:`diag-live-strip ${i}`,children:[b.jsxs("div",{className:"diag-readout",children:[b.jsx("span",{className:"diag-readout-label",children:"Live Telemetry Reading"}),b.jsxs("div",{className:"diag-readout-val",children:[b.jsx("span",{className:"val-large",children:h}),b.jsx("span",{className:"unit-small",children:r.unit})]})]}),b.jsxs("div",{className:"diag-threshold-box",children:[b.jsxs("div",{className:"diag-threshold-item",children:[b.jsx("span",{className:"dim",children:"Safe Operational Range:"}),b.jsx("strong",{children:r.safeText})]}),b.jsxs("div",{className:"diag-threshold-item",children:[b.jsx("span",{className:"dim",children:"Action Threshold:"}),b.jsxs("strong",{children:[r.threshold," ",r.unit]})]}),b.jsxs("div",{className:"diag-threshold-item",children:[b.jsx("span",{className:"dim",children:"Current Status:"}),b.jsx("span",{className:`status-pill-text ${i}`,children:i.toUpperCase()})]})]})]}),b.jsx("h4",{className:"diag-section-title",children:"Hardware & Datasheet Specifications"}),b.jsxs("div",{className:"diag-specs-grid",children:[b.jsxs("div",{className:"diag-spec-row",children:[b.jsx("span",{className:"spec-name",children:"Sensor Architecture"}),b.jsx("span",{className:"spec-data",children:r.specs.type})]}),b.jsxs("div",{className:"diag-spec-row",children:[b.jsx("span",{className:"spec-name",children:"Detection Dynamic Range"}),b.jsx("span",{className:"spec-data",children:r.specs.range})]}),b.jsxs("div",{className:"diag-spec-row",children:[b.jsx("span",{className:"spec-name",children:"Response Time (T90)"}),b.jsx("span",{className:"spec-data",children:r.specs.responseTime})]}),b.jsxs("div",{className:"diag-spec-row",children:[b.jsx("span",{className:"spec-name",children:"Operating Voltage & Pin"}),b.jsxs("span",{className:"spec-data",children:[r.specs.voltage," • ",r.pin]})]}),b.jsxs("div",{className:"diag-spec-row",children:[b.jsx("span",{className:"spec-name",children:"Heater / Power Load"}),b.jsx("span",{className:"spec-data",children:r.specs.heaterPower})]}),b.jsxs("div",{className:"diag-spec-row",children:[b.jsx("span",{className:"spec-name",children:"Safety Compliance Standard"}),b.jsx("span",{className:"spec-data",children:r.specs.standard})]}),b.jsxs("div",{className:"diag-spec-row full-width",children:[b.jsx("span",{className:"spec-name",children:"Calibration Baseline Ratio"}),b.jsx("span",{className:"spec-data",children:r.specs.baseline})]})]}),b.jsxs("div",{className:"diag-actions-bar",children:[b.jsxs("button",{className:"secondary-btn",onClick:d,children:[b.jsx(zE,{size:14,style:{marginRight:6}}),"Calibrate R0 Zero Baseline"]}),b.jsxs("button",{className:"primary-btn",onClick:p,children:[b.jsx(LE,{size:14,style:{marginRight:6}}),"Run Channel Diagnostic Test"]})]})]})]})})}function wN({health:r,subsystems:t}){const i=Math.max(0,Math.min(100,r??100)),s=314.159,l=s-i/100*s;let c="#22c55e";i<70?c="#ef4444":i<90&&(c="#f97316");const h=[{key:"sensors",label:"Sensors",state:(t==null?void 0:t.sensors)||"Active"},{key:"motors",label:"Motors",state:(t==null?void 0:t.motors)||"Active"},{key:"comm",label:"Communication",state:(t==null?void 0:t.communication)||"Stable"},{key:"nav",label:"Navigation",state:(t==null?void 0:t.navigation)||"Active"}];return b.jsxs("section",{className:"card status-card",children:[b.jsx("div",{className:"card-header",children:b.jsxs("div",{className:"card-title-group",children:[b.jsx(mS,{size:18,className:"card-header-icon"}),b.jsx("h2",{className:"card-title",children:"System Status"})]})}),b.jsxs("div",{className:"system-status-body",children:[b.jsx("div",{className:"health-gauge-container",children:b.jsxs("div",{className:"circular-progress",children:[b.jsxs("svg",{className:"progress-ring",viewBox:"0 0 120 120",children:[b.jsx("circle",{className:"progress-ring-bg",cx:"60",cy:"60",r:"50"}),b.jsx("circle",{className:"progress-ring-circle",cx:"60",cy:"60",r:"50",style:{strokeDashoffset:l,stroke:c}})]}),b.jsxs("div",{className:"health-gauge-label",children:[b.jsxs("span",{className:"health-gauge-number",children:[i,"%"]}),b.jsx("span",{className:"health-gauge-desc",children:"System Health"})]})]})}),b.jsx("div",{className:"subsystems-list",children:h.map(d=>{const p=d.state.toLowerCase()==="active"||d.state.toLowerCase()==="stable";return b.jsxs("div",{className:"subsystem-item",children:[b.jsxs("div",{className:"subsystem-name-group",children:[b.jsx("span",{className:`status-check-circle ${p?"active":"warning"}`,children:b.jsx(Tm,{size:13,strokeWidth:3})}),b.jsx("span",{className:"subsystem-title",children:d.label})]}),b.jsx("span",{className:`subsystem-state ${p?"active":"warning"}`,children:d.state})]},d.key)})})]})]})}function NN({alerts:r=[],onClearAlerts:t}){const i=r&&r.length>0;return b.jsxs("section",{className:"card alerts-card",children:[b.jsxs("div",{className:"card-header",children:[b.jsxs("div",{className:"card-title-group",children:[b.jsx(Uy,{size:18,className:"card-header-icon"}),b.jsx("h2",{className:"card-title",children:"Recent Alerts"})]}),b.jsx("div",{className:"card-header-right",children:i&&b.jsx("button",{className:"clear-alerts-btn",onClick:t,children:"Clear All"})})]}),b.jsx("div",{className:"alerts-body",children:i?b.jsx("div",{className:"alerts-list",children:r.map((s,l)=>b.jsx("div",{className:`alert-item-row ${s.level==="critical"?"critical":"warning"}`,children:b.jsxs("div",{className:"alert-item-left",children:[b.jsx("div",{className:"alert-msg",children:s.message}),b.jsxs("div",{className:"alert-meta",children:[s.time||"Just now"," • ",s.action||"Monitoring"]})]})},s.id||l))}):b.jsxs("div",{className:"alerts-empty-state",children:[b.jsx("div",{className:"green-check-badge",children:b.jsx(Tm,{size:26,strokeWidth:2.5})}),b.jsx("div",{className:"empty-alerts-text",children:"No alerts at the moment"}),b.jsx("div",{className:"empty-alerts-sub",children:"Everything looks good!"})]})})]})}function DN({onControlAction:r}){return b.jsxs("section",{className:"card controls-card",children:[b.jsx("div",{className:"card-header",children:b.jsxs("div",{className:"card-title-group",children:[b.jsx(DS,{size:18,className:"card-header-icon"}),b.jsx("h2",{className:"card-title",children:"Quick Controls"})]})}),b.jsxs("div",{className:"controls-grid",children:[b.jsxs("button",{className:"ctrl-action-btn btn-start",onClick:()=>r("start"),title:"Start Autonomous Mission",children:[b.jsx("div",{className:"ctrl-icon-box",children:b.jsx(WE,{size:22,fill:"currentColor"})}),b.jsx("span",{className:"ctrl-btn-label",children:"Start"})]}),b.jsxs("button",{className:"ctrl-action-btn btn-pause",onClick:()=>r("pause"),title:"Pause Mining Operations",children:[b.jsx("div",{className:"ctrl-icon-box",children:b.jsx(jE,{size:22,fill:"currentColor"})}),b.jsx("span",{className:"ctrl-btn-label",children:"Pause"})]}),b.jsxs("button",{className:"ctrl-action-btn btn-stop",onClick:()=>r("stop"),title:"Emergency Stop",children:[b.jsx("div",{className:"ctrl-icon-box",children:b.jsx(QE,{size:20,fill:"currentColor"})}),b.jsx("span",{className:"ctrl-btn-label",children:"Stop"})]}),b.jsxs("button",{className:"ctrl-action-btn btn-home",onClick:()=>r("home"),title:"Return to Recharge Base",children:[b.jsx("div",{className:"ctrl-icon-box",children:b.jsx(Qy,{size:22,fill:"currentColor"})}),b.jsx("span",{className:"ctrl-btn-label",children:"Home"})]})]})]})}function LN({isOpen:r,onClose:t,telemetry:i,onApplyCustomJson:s,onResetSample:l,onShowToast:c}){const[h,d]=se.useState("live"),[p,m]=se.useState(""),[_,g]=se.useState(!1);if(se.useEffect(()=>{i&&m(JSON.stringify(i,null,2))},[i]),!r)return null;const v=()=>{navigator.clipboard.writeText(JSON.stringify(i,null,2)),g(!0),c==null||c("Telemetry JSON copied to clipboard!"),setTimeout(()=>g(!1),2e3)},S=()=>{const L=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),M=URL.createObjectURL(L),y=document.createElement("a");y.href=M,y.download=`mining_telemetry_${Date.now()}.json`,y.click(),URL.revokeObjectURL(M),c==null||c("Telemetry JSON downloaded!")},T=()=>{try{const L=JSON.parse(p);s(L),c==null||c("Custom JSON applied to dashboard!"),t()}catch(L){alert("Invalid JSON format: "+L.message)}};return b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"json-drawer-backdrop",onClick:t}),b.jsxs("aside",{className:"json-drawer",children:[b.jsxs("div",{className:"drawer-header",children:[b.jsxs("div",{className:"drawer-title-group",children:[b.jsx(Hy,{size:20}),b.jsx("h3",{children:"JSON Telemetry Integration Hub"})]}),b.jsx("button",{className:"drawer-close-btn",onClick:t,children:b.jsx(Am,{size:20})})]}),b.jsxs("div",{className:"drawer-tabs",children:[b.jsx("button",{className:`drawer-tab ${h==="live"?"active":""}`,onClick:()=>d("live"),children:"Live Telemetry JSON"}),b.jsx("button",{className:`drawer-tab ${h==="edit"?"active":""}`,onClick:()=>d("edit"),children:"Inject / Paste Custom JSON"}),b.jsx("button",{className:`drawer-tab ${h==="api"?"active":""}`,onClick:()=>d("api"),children:"API & ROS Integration"})]}),b.jsxs("div",{className:"drawer-content",children:[h==="live"&&b.jsxs("div",{className:"tab-pane active",children:[b.jsxs("div",{className:"drawer-actions-bar",children:[b.jsxs("div",{className:"stream-status",children:[b.jsx("span",{className:"pulse-dot"})," Live Sync Active"]}),b.jsxs("div",{className:"action-btn-group",children:[b.jsxs("button",{className:"secondary-btn",onClick:v,children:[_?b.jsx(Tm,{size:12}):b.jsx(PE,{size:12}),b.jsx("span",{style:{marginLeft:4},children:_?"Copied":"Copy JSON"})]}),b.jsxs("button",{className:"secondary-btn",onClick:S,children:[b.jsx(IE,{size:12}),b.jsx("span",{style:{marginLeft:4},children:"Download .json"})]})]})]}),b.jsx("pre",{className:"json-code-viewer",children:b.jsx("code",{children:JSON.stringify(i,null,2)})})]}),h==="edit"&&b.jsxs("div",{className:"tab-pane active",children:[b.jsxs("p",{className:"tab-instruction",children:["Paste or edit your robot's JSON telemetry packet below and click ",b.jsx("strong",{children:"Apply Telemetry"})," to immediately update the 2D map, sensors, and status:"]}),b.jsx("textarea",{className:"custom-json-textarea",value:p,onChange:L=>m(L.target.value),spellCheck:"false"}),b.jsxs("div",{className:"tab-footer-actions",children:[b.jsx("button",{className:"secondary-btn",onClick:l,children:"Reset to Nominal"}),b.jsx("button",{className:"primary-btn",onClick:T,children:"Apply Telemetry"})]})]}),h==="api"&&b.jsx("div",{className:"tab-pane active",children:b.jsxs("div",{className:"api-guide-section",children:[b.jsx("h4",{children:"1. Direct HTTP POST Stream (Python / ROS / C++)"}),b.jsx("p",{children:"Post live telemetry directly into your dashboard server:"}),b.jsx("pre",{className:"code-snippet",children:b.jsx("code",{children:`curl -X POST http://localhost:3050/api/telemetry \\
  -H "Content-Type: application/json" \\
  -d '{
    "sensors": {
      "mq4": {"value": 1.4},
      "mq7": {"value": 5},
      "mq135": {"value": 19.2},
      "mq136": {"value": 0.35},
      "dht22_temp": {"value": 27.4},
      "dht22_humidity": {"value": 66.5},
      "o2": {"value": 20.9},
      "pm25": {"value": 32},
      "battery": {"value": 78}
    }
  }'`})}),b.jsx("h4",{children:"2. Python Live Telemetry Loop (MQ & DHT22 Suite)"}),b.jsx("pre",{className:"code-snippet",children:b.jsx("code",{children:`import requests, time, random

while True:
    payload = {
        "sensors": {
            "mq4": {"value": round(random.uniform(1.0, 1.8), 2)},
            "mq7": {"value": random.randint(3, 8)},
            "mq135": {"value": round(random.uniform(15.0, 22.0), 1)},
            "mq136": {"value": round(random.uniform(0.2, 0.5), 2)},
            "dht22_temp": {"value": round(random.uniform(25.0, 29.0), 1)},
            "dht22_humidity": {"value": round(random.uniform(60.0, 75.0), 1)},
            "o2": {"value": round(random.uniform(20.7, 21.0), 1)},
            "pm25": {"value": random.randint(25, 45)},
            "battery": {"value": 78}
        },
        "position": {"x": 52.4, "y": 38.6, "heading": 84}
    }
    requests.post("http://localhost:3050/api/telemetry", json=payload)
    time.sleep(1)`})}),b.jsx("h4",{children:"3. Telemetry JSON Normalization"}),b.jsxs("p",{children:["Any JSON payload containing ",b.jsx("code",{children:"sensors"}),", ",b.jsx("code",{children:"position"}),", ",b.jsx("code",{children:"map"}),", or ",b.jsx("code",{children:"alerts"})," keys is automatically normalized and rendered on this dashboard."]})]})})]})]})]})}function UN({isOpen:r,onClose:t,robotInfo:i}){return r?b.jsx("div",{className:"modal-backdrop",onClick:t,children:b.jsxs("div",{className:"robot-details-modal",onClick:s=>s.stopPropagation(),children:[b.jsxs("div",{className:"modal-header",children:[b.jsxs("div",{className:"modal-title-box",children:[b.jsx("img",{src:"/assets/robot_avatar.jpg",alt:"Robot Icon",className:"modal-avatar"}),b.jsxs("div",{children:[b.jsx("h3",{children:"Mining Bot Telemetry Unit"}),b.jsxs("p",{children:["Model: ",i.robotId||"AM-08"," Deep Shaft Rover"]})]})]}),b.jsx("button",{className:"modal-close-btn",onClick:t,children:b.jsx(Am,{size:20})})]}),b.jsx("div",{className:"modal-body",children:b.jsxs("div",{className:"specs-grid",children:[b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Firmware"}),b.jsxs("span",{className:"spec-val",children:[i.version||"v1.0.0","-PROD"]})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Chassis"}),b.jsx("span",{className:"spec-val",children:"Titanium Heavy Tread"})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Operating Depth"}),b.jsx("span",{className:"spec-val",children:"-480 meters"})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"LiDAR Range"}),b.jsx("span",{className:"spec-val",children:"60m Solid State"})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Gas Detection Array"}),b.jsx("span",{className:"spec-val",children:"MQ-4 (CH4), MQ-7 (CO), MQ-135 (NH3), MQ-136 (H2S)"})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Atmospheric & Climate"}),b.jsx("span",{className:"spec-val",children:"DHT22 (Temp & RH), ME2-O2, Laser PM2.5 Dust"})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Sensor Signal Bus"}),b.jsx("span",{className:"spec-val",children:"ADS1115 16-Bit ADC + 1-Wire GPIO + I2C/SMBus"})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Safety Certification"}),b.jsx("span",{className:"spec-val",children:"MSHA Class 1 Div 1 / ATEX Zone 1 Intrinsically Safe"})]}),b.jsxs("div",{className:"spec-item",children:[b.jsx("span",{className:"spec-label",children:"Comms Link"}),b.jsx("span",{className:"spec-val",children:"Subterranean Mesh 5.8GHz"})]})]})})]})}):null}function ON({isVisible:r}){return r?b.jsx("div",{className:"drop-overlay",children:b.jsxs("div",{className:"drop-modal",children:[b.jsx(UE,{size:56,className:"drop-icon"}),b.jsx("h3",{children:"Drop JSON Telemetry File Here"}),b.jsx("p",{children:"Instant live update for sensors, 2D map, and robot status"})]})}):null}const RM={timestamp:new Date().toISOString(),robotId:"AM-08",name:"Mining Bot",version:"v1.0.0",status:"online",systemHealth:100,subsystems:{sensors:"Active",motors:"Active",communication:"Stable",navigation:"Active"},sensors:{mq4:{name:"Methane (CH4)",chip:"MQ-4",type:"Combustible Gas",value:1.2,unit:"ppm",status:"normal",threshold:2.5,criticalThreshold:4,pin:"ADC0 (A0)",safeRange:"< 2.5 ppm",category:"gas"},mq7:{name:"Carbon Monoxide (CO)",chip:"MQ-7",type:"Toxic Gas",value:4,unit:"ppm",status:"normal",threshold:25,criticalThreshold:40,pin:"ADC1 (A1)",safeRange:"< 25 ppm",category:"gas"},mq135:{name:"Air Quality / NH3",chip:"MQ-135",type:"Multi-Hazard Fumes",value:18,unit:"ppm",status:"normal",threshold:50,criticalThreshold:80,pin:"ADC2 (A2)",safeRange:"< 50 ppm",category:"gas"},mq136:{name:"Hydrogen Sulfide (H2S)",chip:"MQ-136",type:"Deadly Sour Gas",value:.3,unit:"ppm",status:"normal",threshold:5,criticalThreshold:10,pin:"ADC3 (A3)",safeRange:"< 5.0 ppm",category:"gas"},dht22_temp:{name:"Ambient Temperature",chip:"DHT22",type:"Climate",value:27.2,unit:"°C",status:"normal",threshold:45,criticalThreshold:55,pin:"GPIO 4 (1-Wire)",safeRange:"15 - 35 °C",category:"climate"},dht22_humidity:{name:"Relative Humidity",chip:"DHT22",type:"Climate",value:68,unit:"% RH",status:"normal",threshold:85,criticalThreshold:95,pin:"GPIO 4 (1-Wire)",safeRange:"40 - 80 %",category:"climate"},o2:{name:"Atmospheric Oxygen (O2)",chip:"ME2-O2",type:"Life Support",value:20.9,unit:"% Vol",status:"normal",minThreshold:19.5,criticalMinThreshold:16,pin:"I2C 0x48",safeRange:"19.5 - 23.5 %",category:"climate"},pm25:{name:"Particulate Dust (PM2.5)",chip:"GP2Y1010",type:"Optical Dust",value:34,unit:"µg/m³",status:"normal",threshold:100,criticalThreshold:150,pin:"UART2 / RX",safeRange:"< 50 µg/m³",category:"climate"},battery:{name:"Battery Pack (BMS)",chip:"BMS-4S",type:"Power Supply",value:78,unit:"%",status:"normal",charging:!1,estRuntime:"4h 30m",pin:"SMBus",safeRange:"> 20 %",category:"power"},depth:{value:-480,unit:"m"},ch4:{value:1.2,unit:"ppm",status:"normal",threshold:2.5},co:{value:4,unit:"ppm",status:"normal",threshold:25},temperature:{value:27.2,unit:"°C",status:"normal",threshold:45},humidity:{value:68,unit:"%"}},position:{x:52.4,y:38.6,heading:84,zone:"Sector 4 - Deep Shaft B",speed:1.2},map:{robot:{x:52,y:38},path:[{x:18,y:25},{x:24,y:33},{x:35,y:29},{x:42,y:22},{x:47,y:28},{x:52,y:38},{x:62,y:42},{x:75,y:38}],obstacles:[{x:30,y:16,width:6,height:18,label:"Rockfall Alpha"},{x:65,y:25,width:6,height:16,label:"Pillar Bravo"},{x:67,y:56,width:6,height:18,label:"Debris Delta"}]},camera:{feedAvailable:!0,currentCam:"front",nightVision:!1,flashlight:!0},alerts:[]},Cy={normal:{...RM,status:"online",systemHealth:100,alerts:[]},gas:{timestamp:new Date().toISOString(),robotId:"AM-08",name:"Mining Bot",version:"v1.0.0",status:"warning",systemHealth:64,subsystems:{sensors:"Warning",motors:"Active",communication:"Stable",navigation:"Active"},sensors:{mq4:{name:"Methane (CH4)",chip:"MQ-4",type:"Combustible Gas",value:4.8,unit:"ppm",status:"danger",threshold:2.5,criticalThreshold:4,pin:"ADC0 (A0)",safeRange:"< 2.5 ppm",category:"gas"},mq7:{name:"Carbon Monoxide (CO)",chip:"MQ-7",type:"Toxic Gas",value:38,unit:"ppm",status:"warning",threshold:25,criticalThreshold:40,pin:"ADC1 (A1)",safeRange:"< 25 ppm",category:"gas"},mq135:{name:"Air Quality / NH3",chip:"MQ-135",type:"Multi-Hazard Fumes",value:118,unit:"ppm",status:"warning",threshold:50,criticalThreshold:80,pin:"ADC2 (A2)",safeRange:"< 50 ppm",category:"gas"},mq136:{name:"Hydrogen Sulfide (H2S)",chip:"MQ-136",type:"Deadly Sour Gas",value:6.8,unit:"ppm",status:"danger",threshold:5,criticalThreshold:10,pin:"ADC3 (A3)",safeRange:"< 5.0 ppm",category:"gas"},dht22_temp:{name:"Ambient Temperature",chip:"DHT22",type:"Climate",value:36.8,unit:"°C",status:"warning",threshold:45,criticalThreshold:55,pin:"GPIO 4 (1-Wire)",safeRange:"15 - 35 °C",category:"climate"},dht22_humidity:{name:"Relative Humidity",chip:"DHT22",type:"Climate",value:84,unit:"% RH",status:"warning",threshold:85,criticalThreshold:95,pin:"GPIO 4 (1-Wire)",safeRange:"40 - 80 %",category:"climate"},o2:{name:"Atmospheric Oxygen (O2)",chip:"ME2-O2",type:"Life Support",value:17.4,unit:"% Vol",status:"danger",minThreshold:19.5,criticalMinThreshold:16,pin:"I2C 0x48",safeRange:"19.5 - 23.5 %",category:"climate"},pm25:{name:"Particulate Dust (PM2.5)",chip:"GP2Y1010",type:"Optical Dust",value:92,unit:"µg/m³",status:"warning",threshold:100,criticalThreshold:150,pin:"UART2 / RX",safeRange:"< 50 µg/m³",category:"climate"},battery:{name:"Battery Pack (BMS)",chip:"BMS-4S",type:"Power Supply",value:65,unit:"%",status:"normal",charging:!1,estRuntime:"3h 40m",pin:"SMBus",safeRange:"> 20 %",category:"power"},depth:{value:-520,unit:"m"},ch4:{value:4.8,unit:"ppm",status:"danger",threshold:2.5},co:{value:38,unit:"ppm",status:"warning",threshold:25},temperature:{value:36.8,unit:"°C",status:"warning",threshold:45},humidity:{value:84,unit:"%"}},position:{x:62,y:42,heading:110,zone:"Sector 4 - Gas Pocket C",speed:.5},map:{robot:{x:62,y:42},path:[{x:18,y:25},{x:35,y:29},{x:52,y:38},{x:62,y:42}],obstacles:[{x:30,y:16,width:6,height:18,label:"Rockfall Alpha"},{x:65,y:25,width:6,height:16,label:"Pillar Bravo"},{x:67,y:56,width:6,height:18,label:"Debris Delta"}]},camera:{feedAvailable:!0,currentCam:"front",nightVision:!0,flashlight:!0},alerts:[{id:"ALT-101",time:"11:04:12",level:"critical",message:"MQ-4 Methane spike detected: 4.8 ppm (Safe limit < 2.5 ppm)",action:"Exhaust ventilation initiated, robot engine throttle reduced"},{id:"ALT-102",time:"11:04:45",level:"warning",message:"MQ-7 Carbon Monoxide elevated: 38 ppm (OSHA limit 25 ppm)",action:"Auxiliary catalytic air scrubbers activated"},{id:"ALT-103",time:"11:05:08",level:"critical",message:"MQ-136 Hydrogen Sulfide (H2S) lethal hazard: 6.8 ppm (> 5.0 ppm threshold)",action:"Sector 4 sour gas warning broadcast, human personnel evacuated"},{id:"ALT-104",time:"11:05:32",level:"warning",message:"ME2-O2 Atmospheric Oxygen depleted to 17.4% (Safe min 19.5% Vol)",action:"Autonomous breathing emergency alert triggered"}]},obstacle:{timestamp:new Date().toISOString(),robotId:"AM-08",name:"Mining Bot",version:"v1.0.0",status:"warning",systemHealth:88,subsystems:{sensors:"Active",motors:"Active",communication:"Stable",navigation:"Rerouting"},sensors:{mq4:{name:"Methane (CH4)",chip:"MQ-4",type:"Combustible Gas",value:1.4,unit:"ppm",status:"normal",threshold:2.5,criticalThreshold:4,pin:"ADC0 (A0)",safeRange:"< 2.5 ppm",category:"gas"},mq7:{name:"Carbon Monoxide (CO)",chip:"MQ-7",type:"Toxic Gas",value:6,unit:"ppm",status:"normal",threshold:25,criticalThreshold:40,pin:"ADC1 (A1)",safeRange:"< 25 ppm",category:"gas"},mq135:{name:"Air Quality / NH3",chip:"MQ-135",type:"Multi-Hazard Fumes",value:22,unit:"ppm",status:"normal",threshold:50,criticalThreshold:80,pin:"ADC2 (A2)",safeRange:"< 50 ppm",category:"gas"},mq136:{name:"Hydrogen Sulfide (H2S)",chip:"MQ-136",type:"Deadly Sour Gas",value:.4,unit:"ppm",status:"normal",threshold:5,criticalThreshold:10,pin:"ADC3 (A3)",safeRange:"< 5.0 ppm",category:"gas"},dht22_temp:{name:"Ambient Temperature",chip:"DHT22",type:"Climate",value:28.1,unit:"°C",status:"normal",threshold:45,criticalThreshold:55,pin:"GPIO 4 (1-Wire)",safeRange:"15 - 35 °C",category:"climate"},dht22_humidity:{name:"Relative Humidity",chip:"DHT22",type:"Climate",value:65,unit:"% RH",status:"normal",threshold:85,criticalThreshold:95,pin:"GPIO 4 (1-Wire)",safeRange:"40 - 80 %",category:"climate"},o2:{name:"Atmospheric Oxygen (O2)",chip:"ME2-O2",type:"Life Support",value:20.8,unit:"% Vol",status:"normal",minThreshold:19.5,criticalMinThreshold:16,pin:"I2C 0x48",safeRange:"19.5 - 23.5 %",category:"climate"},pm25:{name:"Particulate Dust (PM2.5)",chip:"GP2Y1010",type:"Optical Dust",value:42,unit:"µg/m³",status:"normal",threshold:100,criticalThreshold:150,pin:"UART2 / RX",safeRange:"< 50 µg/m³",category:"climate"},battery:{name:"Battery Pack (BMS)",chip:"BMS-4S",type:"Power Supply",value:72,unit:"%",status:"normal",charging:!1,estRuntime:"4h 10m",pin:"SMBus",safeRange:"> 20 %",category:"power"},depth:{value:-482,unit:"m"},ch4:{value:1.4,unit:"ppm",status:"normal",threshold:2.5},co:{value:6,unit:"ppm",status:"normal",threshold:25},temperature:{value:28.1,unit:"°C",status:"normal",threshold:45},humidity:{value:65,unit:"%"}},position:{x:60.5,y:27.2,heading:45,zone:"Sector 4 - Pillar B Proximity",speed:.2},map:{robot:{x:60.5,y:27.2},path:[{x:18,y:25},{x:35,y:29},{x:52,y:38},{x:60.5,y:27.2}],obstacles:[{x:30,y:16,width:6,height:18,label:"Rockfall Alpha"},{x:65,y:25,width:6,height:16,label:"Pillar Bravo (CLOSE)"},{x:67,y:56,width:6,height:18,label:"Debris Delta"}]},camera:{feedAvailable:!0,currentCam:"front",nightVision:!1,flashlight:!0},alerts:[{id:"ALT-201",time:"11:09:50",level:"warning",message:"Obstacle proximity warning: LiDAR detected object at 1.4m",action:"Autonomous speed reduced, calculating alternative path"}]},battery:{timestamp:new Date().toISOString(),robotId:"AM-08",name:"Mining Bot",version:"v1.0.0",status:"warning",systemHealth:65,subsystems:{sensors:"Active",motors:"Active",communication:"Stable",navigation:"Returning"},sensors:{mq4:{name:"Methane (CH4)",chip:"MQ-4",type:"Combustible Gas",value:1.1,unit:"ppm",status:"normal",threshold:2.5,criticalThreshold:4,pin:"ADC0 (A0)",safeRange:"< 2.5 ppm",category:"gas"},mq7:{name:"Carbon Monoxide (CO)",chip:"MQ-7",type:"Toxic Gas",value:3,unit:"ppm",status:"normal",threshold:25,criticalThreshold:40,pin:"ADC1 (A1)",safeRange:"< 25 ppm",category:"gas"},mq135:{name:"Air Quality / NH3",chip:"MQ-135",type:"Multi-Hazard Fumes",value:16,unit:"ppm",status:"normal",threshold:50,criticalThreshold:80,pin:"ADC2 (A2)",safeRange:"< 50 ppm",category:"gas"},mq136:{name:"Hydrogen Sulfide (H2S)",chip:"MQ-136",type:"Deadly Sour Gas",value:.2,unit:"ppm",status:"normal",threshold:5,criticalThreshold:10,pin:"ADC3 (A3)",safeRange:"< 5.0 ppm",category:"gas"},dht22_temp:{name:"Ambient Temperature",chip:"DHT22",type:"Climate",value:29,unit:"°C",status:"normal",threshold:45,criticalThreshold:55,pin:"GPIO 4 (1-Wire)",safeRange:"15 - 35 °C",category:"climate"},dht22_humidity:{name:"Relative Humidity",chip:"DHT22",type:"Climate",value:62,unit:"% RH",status:"normal",threshold:85,criticalThreshold:95,pin:"GPIO 4 (1-Wire)",safeRange:"40 - 80 %",category:"climate"},o2:{name:"Atmospheric Oxygen (O2)",chip:"ME2-O2",type:"Life Support",value:20.9,unit:"% Vol",status:"normal",minThreshold:19.5,criticalMinThreshold:16,pin:"I2C 0x48",safeRange:"19.5 - 23.5 %",category:"climate"},pm25:{name:"Particulate Dust (PM2.5)",chip:"GP2Y1010",type:"Optical Dust",value:28,unit:"µg/m³",status:"normal",threshold:100,criticalThreshold:150,pin:"UART2 / RX",safeRange:"< 50 µg/m³",category:"climate"},battery:{name:"Battery Pack (BMS)",chip:"BMS-4S",type:"Power Supply",value:14,unit:"%",status:"danger",charging:!1,estRuntime:"0h 25m",pin:"SMBus",safeRange:"> 20 %",category:"power"},depth:{value:-475,unit:"m"},ch4:{value:1.1,unit:"ppm",status:"normal",threshold:2.5},co:{value:3,unit:"ppm",status:"normal",threshold:25},temperature:{value:29,unit:"°C",status:"normal",threshold:45},humidity:{value:62,unit:"%"}},position:{x:35,y:28,heading:210,zone:"Sector 2 - Return Path",speed:1.8},map:{robot:{x:35,y:28},path:[{x:62,y:42},{x:52,y:38},{x:35,y:28}],obstacles:[{x:30,y:16,width:6,height:18,label:"Rockfall Alpha"},{x:65,y:25,width:6,height:16,label:"Pillar Bravo"},{x:67,y:56,width:6,height:18,label:"Debris Delta"}]},camera:{feedAvailable:!0,currentCam:"front",nightVision:!1,flashlight:!0},alerts:[{id:"ALT-301",time:"11:14:20",level:"warning",message:"Battery critically low: 14% remaining",action:"Autonomous mission halted, returning to recharge dock at base"}]}};function PN(){var J,$,j,k;const[r,t]=se.useState(RM),[i,s]=se.useState({mq4:[1.1,1.2,1.2,1.3,1.1,1.2,1.4,1.3,1.2,1.2],mq7:[3.8,4,4.1,4.2,3.9,4,4.3,4.1,4,4],mq135:[17.5,18,18.2,17.8,18.1,18.4,18,17.9,18.2,18],mq136:[.28,.3,.31,.29,.32,.3,.33,.31,.3,.3],dht22_temp:[26.8,27,27.2,27.1,27.3,27.2,27.4,27.3,27.2,27.2],dht22_humidity:[67,68,68,69,68,67,69,68,68,68],o2:[20.9,20.9,20.8,20.9,20.9,20.8,20.9,20.9,20.9,20.9],pm25:[32,34,35,33,34,36,34,33,35,34],battery:[78,78,78,78,78,78,78,78,78,78],ch4:[1.1,1.2,1.2,1.3,1.1,1.2,1.4,1.3,1.2,1.2],co:[3.8,4,4.1,4.2,3.9,4,4.3,4.1,4,4],temp:[26.8,27,27.2,27.1,27.3,27.2,27.4,27.3,27.2,27.2]}),[l,c]=se.useState(()=>{try{return localStorage.getItem("mining_dashboard_theme")||"dark"}catch{return"dark"}}),[h,d]=se.useState("dashboard"),[p,m]=se.useState("triple"),[_,g]=se.useState(!0),[v,S]=se.useState(!1),[T,L]=se.useState(!1),[M,y]=se.useState(!1),[O,D]=se.useState(null),C=se.useRef(null),z=se.useRef(null);se.useEffect(()=>{document.documentElement.setAttribute("data-theme",l);try{localStorage.setItem("mining_dashboard_theme",l)}catch{}},[l]);const N=()=>{c(X=>{const Q=X==="dark"?"light":"dark";return U(Q==="light"?"☀️ Switched to White / Light Theme":"🌙 Switched to Cyber Dark Theme"),Q})},U=se.useCallback(X=>{C.current&&clearTimeout(C.current),D(X),C.current=setTimeout(()=>{D(null)},3500)},[]),E=se.useCallback((X,Q="JSON Update")=>{!X||typeof X!="object"||(t(Y=>{const ct={...Y,...X,timestamp:X.timestamp||new Date().toISOString(),sensors:{...Y.sensors,...X.sensors||{}},position:{...Y.position,...X.position||{}},map:{...Y.map,...X.map||{}},subsystems:{...Y.subsystems,...X.subsystems||{}},camera:{...Y.camera,...X.camera||{}},alerts:Array.isArray(X.alerts)?X.alerts:Y.alerts};return X.position&&(ct.map.robot={x:X.position.x,y:X.position.y}),ct}),X.sensors&&s(Y=>{const ct=(Nt,de)=>{const xt=X.sensors[Nt]!==void 0?X.sensors[Nt]:de?X.sensors[de]:void 0;return xt==null?null:Number(typeof xt=="object"?xt.value:xt)},Lt=(Nt=[],de)=>{if(de===null||isNaN(de))return Nt;const xt=[...Nt,de];return xt.length>20&&xt.shift(),xt},Gt=ct("mq4","ch4"),G=ct("mq7","co"),vt=ct("mq135","aqi"),Ot=ct("mq136","h2s"),tt=ct("dht22_temp","temperature"),ot=ct("dht22_humidity","humidity"),Mt=ct("o2","oxygen"),Pt=ct("pm25","dust"),_t=ct("battery",null);return{mq4:Lt(Y.mq4,Gt),mq7:Lt(Y.mq7,G),mq135:Lt(Y.mq135,vt),mq136:Lt(Y.mq136,Ot),dht22_temp:Lt(Y.dht22_temp,tt),dht22_humidity:Lt(Y.dht22_humidity,ot),o2:Lt(Y.o2,Mt),pm25:Lt(Y.pm25,Pt),battery:Lt(Y.battery,_t),ch4:Lt(Y.ch4,Gt),co:Lt(Y.co,G),temp:Lt(Y.temp,tt)}}),Q!=="sim"&&U(`Telemetry updated via ${Q}`))},[U]);se.useEffect(()=>{if(!_)return;const X=setInterval(()=>{const Q=(Math.random()-.49)*.06,Y=(Math.random()-.49)*.25,ct=(Math.random()-.5)*.5,Lt=(Math.random()-.49)*.02,Gt=(Math.random()-.5)*.1,G=(Math.random()-.5)*.25,vt=(Math.random()-.5)*.03,Ot=(Math.random()-.5)*.7;t(tt=>{const ot=tt.sensors||{},Mt=(V,Se)=>{const ge=ot[V];return ge==null?Se:Number(typeof ge=="object"?ge.value:ge)||Se},Pt=Math.max(.8,Number((Mt("mq4",Mt("ch4",1.2))+Q).toFixed(2))),_t=Math.max(2,Math.round(Mt("mq7",Mt("co",4))+Y)),Nt=Math.max(10,Number((Mt("mq135",18)+ct).toFixed(1))),de=Math.max(.1,Number((Mt("mq136",.3)+Lt).toFixed(2))),xt=Number((Mt("dht22_temp",Mt("temperature",27.2))+Gt).toFixed(1)),St=Math.min(100,Math.max(20,Number((Mt("dht22_humidity",Mt("humidity",68))+G).toFixed(1)))),Dt=Math.min(23.5,Math.max(15,Number((Mt("o2",20.9)+vt).toFixed(1)))),Rt=Math.max(5,Math.round(Mt("pm25",34)+Ot));let{x:Ct,y:ne,heading:$t}=tt.position;const le=.2;Ct+=Math.cos($t*Math.PI/180)*le,ne+=Math.sin($t*Math.PI/180)*le*.4,Ct>80&&($t=220),Ct<20&&($t=40);const fe={...tt.position,x:Number(Ct.toFixed(1)),y:Number(ne.toFixed(1)),heading:$t};return s(V=>({mq4:[...(V.mq4||[]).slice(-19),Pt],mq7:[...(V.mq7||[]).slice(-19),_t],mq135:[...(V.mq135||[]).slice(-19),Nt],mq136:[...(V.mq136||[]).slice(-19),de],dht22_temp:[...(V.dht22_temp||[]).slice(-19),xt],dht22_humidity:[...(V.dht22_humidity||[]).slice(-19),St],o2:[...(V.o2||[]).slice(-19),Dt],pm25:[...(V.pm25||[]).slice(-19),Rt],battery:V.battery||[78],ch4:[...(V.ch4||[]).slice(-19),Pt],co:[...(V.co||[]).slice(-19),_t],temp:[...(V.temp||[]).slice(-19),xt]})),{...tt,sensors:{...tt.sensors,mq4:{...ot.mq4||{},value:Pt},mq7:{...ot.mq7||{},value:_t},mq135:{...ot.mq135||{},value:Nt},mq136:{...ot.mq136||{},value:de},dht22_temp:{...ot.dht22_temp||{},value:xt},dht22_humidity:{...ot.dht22_humidity||{},value:St},o2:{...ot.o2||{},value:Dt},pm25:{...ot.pm25||{},value:Rt},ch4:{...ot.ch4||{},value:Pt},co:{...ot.co||{},value:_t},temperature:{...ot.temperature||{},value:xt},humidity:{...ot.humidity||{},value:St}},position:fe,map:{...tt.map,robot:{x:fe.x,y:fe.y}}}})},1500);return()=>clearInterval(X)},[_]);const P=async X=>{if(z.current&&(clearInterval(z.current),z.current=null),X==="replay"){try{const ct=await(await fetch("/sample-data/mission_replay.json")).json();B(ct)}catch(Y){U("Error loading mission replay: "+Y.message)}return}const Q=Cy[X]||Cy.normal;E(Q,`Preset: ${X.toUpperCase()}`)},B=X=>{if(!Array.isArray(X)||X.length===0)return;let Q=0;U(`Replaying mission log (${X.length} frames)...`),z.current=setInterval(()=>{if(Q>=X.length){clearInterval(z.current),z.current=null,U("Mission log replay completed");return}const Y=X[Q];E({timestamp:Y.timestamp,status:Y.status,systemHealth:Y.health,sensors:{mq4:{value:Y.mq4??Y.ch4??1.2},mq7:{value:Y.mq7??Y.co??4},mq135:{value:Y.mq135??18},mq136:{value:Y.mq136??.3},dht22_temp:{value:Y.dht22_temp??Y.temperature??27.2},dht22_humidity:{value:Y.dht22_humidity??Y.humidity??68},o2:{value:Y.o2??20.9},pm25:{value:Y.pm25??34},battery:{value:Y.battery??78},ch4:Y.ch4,co:Y.co,temperature:Y.temperature},position:{x:Y.x,y:Y.y,heading:Y.heading,zone:Y.zone,speed:Y.speed}},`Replay Frame ${Q+1}/${X.length}`),Q++},1200)},F=X=>{if(!X.name.endsWith(".json")){alert("Please upload a valid .json telemetry file.");return}const Q=new FileReader;Q.onload=Y=>{try{const ct=JSON.parse(Y.target.result);Array.isArray(ct)?B(ct):E(ct,`File: ${X.name}`)}catch(ct){alert("Error parsing JSON file: "+ct.message)}},Q.readAsText(X)};se.useEffect(()=>{const X=ct=>{ct.preventDefault(),y(!0)},Q=ct=>{ct.preventDefault(),y(!1)},Y=ct=>{var Lt;ct.preventDefault(),y(!1),((Lt=ct.dataTransfer.files)==null?void 0:Lt.length)>0&&F(ct.dataTransfer.files[0])};return window.addEventListener("dragover",X),window.addEventListener("dragleave",Q),window.addEventListener("drop",Y),()=>{window.removeEventListener("dragover",X),window.removeEventListener("dragleave",Q),window.removeEventListener("drop",Y)}},[]);const W=X=>{if(X==="start")g(!0),E({subsystems:{motors:"Active",navigation:"Active"},position:{speed:1.2}},"Controls"),U("▶ Autonomous Mission Started: Patrolling Sector 4");else if(X==="pause")g(!1),E({subsystems:{motors:"Standby"},position:{speed:0}},"Controls"),U("⏸ Operation Paused: Robot halted in position");else if(X==="stop"){g(!1);const Q={id:"EMERGENCY-STOP",time:new Date().toTimeString().split(" ")[0],level:"critical",message:"Emergency Stop triggered from Operator Dashboard",action:"All actuators locked"};E({subsystems:{motors:"Halted"},position:{speed:0},alerts:[Q,...r.alerts||[]]},"Controls"),U("🛑 EMERGENCY STOP: Robot completely halted")}else X==="home"&&(g(!0),E({subsystems:{navigation:"Returning"},position:{x:18,y:25,zone:"Sector 1 - Base Docking",speed:1.5}},"Controls"),U("⌂ Returning Home: Navigating to base charging dock"))},it=()=>{E({alerts:[],systemHealth:100,status:"online"},"Clear Alerts"),U("All alerts cleared. System nominal.")};return b.jsxs("div",{className:"app-layout",children:[b.jsx(ON,{isVisible:M}),b.jsx(iT,{activeView:h,setActiveView:d,alertCount:((J=r.alerts)==null?void 0:J.length)||0,onOpenRobotModal:()=>L(!0),robotInfo:{name:r.name,version:r.version},theme:l,onToggleTheme:N}),b.jsxs("main",{className:"main-viewport",children:[b.jsx(aT,{status:r.status,liveSim:_,onToggleSim:()=>g(!_),onSelectPreset:P,onFileUpload:F,onOpenJsonDrawer:()=>S(!0),theme:l,onToggleTheme:N}),O&&b.jsxs("div",{className:"toast-banner",children:[b.jsx("span",{className:"toast-icon",children:"⚡"}),b.jsx("span",{className:"toast-message",children:O})]}),b.jsxs("div",{className:"section-toolbar",children:[b.jsxs("div",{className:"section-toolbar-left",children:[b.jsx("span",{className:"section-toolbar-title",children:"Tactical Vision & Spatial Navigation"}),b.jsx("span",{className:"section-toolbar-subtitle",children:"Dual-Engine 2D Tactical Grid & 3D WebGL Digital Twin"})]}),b.jsxs("div",{className:"layout-toggle-pills",children:[b.jsx("button",{className:`layout-pill-btn ${p==="triple"?"active":""}`,onClick:()=>{m("triple"),U("Switched to Triple View: 2D + 3D + Camera")},title:"Show 2D Map, 3D Digital Twin, and Live Camera side-by-side",children:b.jsx("span",{children:"⚡ Triple View (2D + 3D + Cam)"})}),b.jsx("button",{className:`layout-pill-btn ${p==="dual_map"?"active":""}`,onClick:()=>{m("dual_map"),U("Switched to Dual Maps View: 2D & 3D side-by-side")},title:"Show 2D Map and 3D Map side-by-side",children:b.jsx("span",{children:"🧭 Dual Maps (2D & 3D)"})}),b.jsx("button",{className:`layout-pill-btn ${p==="map3d_cam"?"active":""}`,onClick:()=>{m("map3d_cam"),U("Switched to 3D Map + Camera View")},title:"Show 3D Map and Live Camera",children:b.jsx("span",{children:"🧊 3D Map + Camera"})}),b.jsx("button",{className:`layout-pill-btn ${p==="map2d_cam"?"active":""}`,onClick:()=>{m("map2d_cam"),U("Switched to 2D Map + Camera View")},title:"Show 2D Map and Live Camera",children:b.jsx("span",{children:"🗺️ 2D Map + Camera"})})]})]}),b.jsxs("div",{className:"dashboard-grid",children:[b.jsxs("div",{className:`top-row-grid layout-${p}`,children:[(p==="triple"||p==="dual_map"||p==="map2d_cam")&&b.jsx(sT,{mapData:r.map,position:r.position,theme:l,onShowToast:U}),(p==="triple"||p==="dual_map"||p==="map3d_cam")&&b.jsx(EN,{mapData:r.map,position:r.position,theme:l,onShowToast:U}),(p==="triple"||p==="map3d_cam"||p==="map2d_cam")&&b.jsx(TN,{cameraData:r.camera,depth:(j=($=r.sensors)==null?void 0:$.depth)==null?void 0:j.value,speed:(k=r.position)==null?void 0:k.speed,onShowToast:U})]}),b.jsx(CN,{sensors:r.sensors,history:i,onShowToast:U}),b.jsxs("div",{className:"bottom-row-grid",children:[b.jsx(wN,{health:r.systemHealth,subsystems:r.subsystems}),b.jsx(NN,{alerts:r.alerts,onClearAlerts:it}),b.jsx(DN,{onControlAction:W})]})]})]}),b.jsx(LN,{isOpen:v,onClose:()=>S(!1),telemetry:r,onApplyCustomJson:X=>E(X,"Custom JSON Injection"),onResetSample:()=>P("normal"),onShowToast:U}),b.jsx(UN,{isOpen:T,onClose:()=>L(!1),robotInfo:{robotId:r.robotId,version:r.version}})]})}xE.createRoot(document.getElementById("root")).render(b.jsx(fE.StrictMode,{children:b.jsx(PN,{})}));
