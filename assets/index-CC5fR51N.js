(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Iv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uc={exports:{}},Vo={},Nc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Uv(){if(Gp)return pt;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(U,ne,Te){this.props=U,this.context=ne,this.refs=E,this.updater=Te||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function I(U,ne,Te){this.props=U,this.context=ne,this.refs=E,this.updater=Te||S}var L=I.prototype=new v;L.constructor=I,M(L,y.prototype),L.isPureReactComponent=!0;var b=Array.isArray,W=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(U,ne,Te){var j,re={},me=null,_e=null;if(ne!=null)for(j in ne.ref!==void 0&&(_e=ne.ref),ne.key!==void 0&&(me=""+ne.key),ne)W.call(ne,j)&&!F.hasOwnProperty(j)&&(re[j]=ne[j]);var Ae=arguments.length-2;if(Ae===1)re.children=Te;else if(1<Ae){for(var De=Array(Ae),Ke=0;Ke<Ae;Ke++)De[Ke]=arguments[Ke+2];re.children=De}if(U&&U.defaultProps)for(j in Ae=U.defaultProps,Ae)re[j]===void 0&&(re[j]=Ae[j]);return{$$typeof:s,type:U,key:me,ref:_e,props:re,_owner:N.current}}function R(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Te){return ne[Te]})}var ae=/\/+/g;function K(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ne.toString(36)}function ue(U,ne,Te,j,re){var me=typeof U;(me==="undefined"||me==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(me){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case s:case e:_e=!0}}if(_e)return _e=U,re=re(_e),U=j===""?"."+K(_e,0):j,b(re)?(Te="",U!=null&&(Te=U.replace(ae,"$&/")+"/"),ue(re,ne,Te,"",function(Ke){return Ke})):re!=null&&(C(re)&&(re=R(re,Te+(!re.key||_e&&_e.key===re.key?"":(""+re.key).replace(ae,"$&/")+"/")+U)),ne.push(re)),1;if(_e=0,j=j===""?".":j+":",b(U))for(var Ae=0;Ae<U.length;Ae++){me=U[Ae];var De=j+K(me,Ae);_e+=ue(me,ne,Te,De,re)}else if(De=x(U),typeof De=="function")for(U=De.call(U),Ae=0;!(me=U.next()).done;)me=me.value,De=j+K(me,Ae++),_e+=ue(me,ne,Te,De,re);else if(me==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return _e}function de(U,ne,Te){if(U==null)return U;var j=[],re=0;return ue(U,j,"","",function(me){return ne.call(Te,me,re++)}),j}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Te){(U._status===0||U._status===-1)&&(U._status=1,U._result=Te)},function(Te){(U._status===0||U._status===-1)&&(U._status=2,U._result=Te)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},O={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:O,ReactCurrentOwner:N};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:de,forEach:function(U,ne,Te){de(U,function(){ne.apply(this,arguments)},Te)},count:function(U){var ne=0;return de(U,function(){ne++}),ne},toArray:function(U){return de(U,function(ne){return ne})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=y,pt.Fragment=t,pt.Profiler=a,pt.PureComponent=I,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,pt.act=se,pt.cloneElement=function(U,ne,Te){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var j=M({},U.props),re=U.key,me=U.ref,_e=U._owner;if(ne!=null){if(ne.ref!==void 0&&(me=ne.ref,_e=N.current),ne.key!==void 0&&(re=""+ne.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(De in ne)W.call(ne,De)&&!F.hasOwnProperty(De)&&(j[De]=ne[De]===void 0&&Ae!==void 0?Ae[De]:ne[De])}var De=arguments.length-2;if(De===1)j.children=Te;else if(1<De){Ae=Array(De);for(var Ke=0;Ke<De;Ke++)Ae[Ke]=arguments[Ke+2];j.children=Ae}return{$$typeof:s,type:U.type,key:re,ref:me,props:j,_owner:_e}},pt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},pt.createElement=G,pt.createFactory=function(U){var ne=G.bind(null,U);return ne.type=U,ne},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:f,render:U}},pt.isValidElement=C,pt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:oe}},pt.memo=function(U,ne){return{$$typeof:p,type:U,compare:ne===void 0?null:ne}},pt.startTransition=function(U){var ne=O.transition;O.transition={};try{U()}finally{O.transition=ne}},pt.unstable_act=se,pt.useCallback=function(U,ne){return ce.current.useCallback(U,ne)},pt.useContext=function(U){return ce.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},pt.useEffect=function(U,ne){return ce.current.useEffect(U,ne)},pt.useId=function(){return ce.current.useId()},pt.useImperativeHandle=function(U,ne,Te){return ce.current.useImperativeHandle(U,ne,Te)},pt.useInsertionEffect=function(U,ne){return ce.current.useInsertionEffect(U,ne)},pt.useLayoutEffect=function(U,ne){return ce.current.useLayoutEffect(U,ne)},pt.useMemo=function(U,ne){return ce.current.useMemo(U,ne)},pt.useReducer=function(U,ne,Te){return ce.current.useReducer(U,ne,Te)},pt.useRef=function(U){return ce.current.useRef(U)},pt.useState=function(U){return ce.current.useState(U)},pt.useSyncExternalStore=function(U,ne,Te){return ce.current.useSyncExternalStore(U,ne,Te)},pt.useTransition=function(){return ce.current.useTransition()},pt.version="18.3.1",pt}var Wp;function ad(){return Wp||(Wp=1,Nc.exports=Uv()),Nc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Nv(){if(Xp)return Vo;Xp=1;var s=ad(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,_={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:a.current}}return Vo.Fragment=t,Vo.jsx=c,Vo.jsxs=c,Vo}var jp;function Fv(){return jp||(jp=1,Uc.exports=Nv()),Uc.exports}var we=Fv(),jt=ad();const Jr=Iv(jt);var hl={},Fc={exports:{}},On={},Oc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Ov(){return Yp||(Yp=1,function(s){function e(O,le){var se=O.length;O.push(le);e:for(;0<se;){var U=se-1>>>1,ne=O[U];if(0<a(ne,le))O[U]=le,O[se]=ne,se=U;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var le=O[0],se=O.pop();if(se!==le){O[0]=se;e:for(var U=0,ne=O.length,Te=ne>>>1;U<Te;){var j=2*(U+1)-1,re=O[j],me=j+1,_e=O[me];if(0>a(re,se))me<ne&&0>a(_e,re)?(O[U]=_e,O[me]=se,U=me):(O[U]=re,O[j]=se,U=j);else if(me<ne&&0>a(_e,se))O[U]=_e,O[me]=se,U=me;else break e}}return le}function a(O,le){var se=O.sortIndex-le.sortIndex;return se!==0?se:O.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,_=null,x=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(O){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=O)r(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function b(O){if(E=!1,L(O),!M)if(t(h)!==null)M=!0,oe(W);else{var le=t(p);le!==null&&ce(b,le.startTime-O)}}function W(O,le){M=!1,E&&(E=!1,v(G),G=-1),S=!0;var se=x;try{for(L(le),_=t(h);_!==null&&(!(_.expirationTime>le)||O&&!B());){var U=_.callback;if(typeof U=="function"){_.callback=null,x=_.priorityLevel;var ne=U(_.expirationTime<=le);le=s.unstable_now(),typeof ne=="function"?_.callback=ne:_===t(h)&&r(h),L(le)}else r(h);_=t(h)}if(_!==null)var Te=!0;else{var j=t(p);j!==null&&ce(b,j.startTime-le),Te=!1}return Te}finally{_=null,x=se,S=!1}}var N=!1,F=null,G=-1,R=5,C=-1;function B(){return!(s.unstable_now()-C<R)}function ae(){if(F!==null){var O=s.unstable_now();C=O;var le=!0;try{le=F(!0,O)}finally{le?K():(N=!1,F=null)}}else N=!1}var K;if(typeof I=="function")K=function(){I(ae)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=ae,K=function(){de.postMessage(null)}}else K=function(){y(ae,0)};function oe(O){F=O,N||(N=!0,K())}function ce(O,le){G=y(function(){O(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,oe(W))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return O()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,le){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var se=x;x=O;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(O,le,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,O={id:g++,callback:le,priorityLevel:O,startTime:se,expirationTime:ne,sortIndex:-1},se>U?(O.sortIndex=se,e(p,O),t(h)===null&&O===t(p)&&(E?(v(G),G=-1):E=!0,ce(b,se-U))):(O.sortIndex=ne,e(h,O),M||S||(M=!0,oe(W))),O},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(O){var le=x;return function(){var se=x;x=le;try{return O.apply(this,arguments)}finally{x=se}}}}(kc)),kc}var qp;function kv(){return qp||(qp=1,Oc.exports=Ov()),Oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function zv(){if(Kp)return On;Kp=1;var s=ad(),e=kv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return h.call(_,n)?!0:h.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,u,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,I);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,I);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,I);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),O=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Te=!1;function j(n,i){if(!n||Te)return"";Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),m=u.stack.split(`
`),T=d.length-1,D=m.length-1;1<=T&&0<=D&&d[T]!==m[D];)D--;for(;1<=T&&0<=D;T--,D--)if(d[T]!==m[D]){if(T!==1||D!==1)do if(T--,D--,0>D||d[T]!==m[D]){var k=`
`+d[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=D);break}}}finally{Te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function re(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=j(n.type,!1),n;case 11:return n=j(n.type.render,!1),n;case 1:return n=j(n.type,!0),n;default:return""}}function me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case R:return"Profiler";case G:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:me(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return me(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=De(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Tt(n){n._valueTracker||(n._valueTracker=Ke(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Mn(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function dt(n,i){gt(n,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(n,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Ct(n,i,o){(i!=="number"||Dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var We=Array.isArray;function P(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(We(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function pe(n,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function $e(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=$e(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ie=null,he=null;function Ie(n){if(n=Ao(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),Re(n.stateNode,n.type,i))}}function Le(n){ie?he?he.push(n):he=[n]:ie=n}function rt(){if(ie){var n=ie,i=he;if(he=ie=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function It(n,i){return n(i)}function Kt(){}var St=!1;function Dn(n,i,o){if(St)return n(i,o);St=!0;try{return It(n,i,o)}finally{St=!1,(ie!==null||he!==null)&&(Kt(),rt())}}function En(n,i){var o=n.stateNode;if(o===null)return null;var u=Ra(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var rs=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){rs=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{rs=!1}function Ti(n,i,o,u,d,m,T,D,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(xe){this.onError(xe)}}var wi=!1,Rr=null,br=!1,Zi=null,oa={onError:function(n){wi=!0,Rr=n}};function ss(n,i,o,u,d,m,T,D,k){wi=!1,Rr=null,Ti.apply(oa,arguments)}function aa(n,i,o,u,d,m,T,D,k){if(ss.apply(this,arguments),wi){if(wi){var te=Rr;wi=!1,Rr=null}else throw Error(t(198));br||(br=!0,Zi=te)}}function pi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function la(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ua(n){if(pi(n)!==n)throw Error(t(188))}function iu(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return ua(d),n;if(m===u)return ua(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var T=!1,D=d.child;D;){if(D===o){T=!0,o=d,u=m;break}if(D===u){T=!0,u=d,o=m;break}D=D.sibling}if(!T){for(D=m.child;D;){if(D===o){T=!0,o=m,u=d;break}if(D===u){T=!0,u=m,o=d;break}D=D.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ca(n){return n=iu(n),n!==null?fa(n):null}function fa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fa(n);if(i!==null)return i;n=n.sibling}return null}var da=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,ee=e.unstable_requestPaint,Z=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,He=null;function vt(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:yt,Vt=Math.log,Ot=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(Vt(n)/Ot|0)|0}var qe=64,Ht=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var D=T&~d;D!==0?u=_t(D):(m&=T,m!==0&&(u=_t(m)))}else T=o&~d,T!==0?u=_t(T):m!==0&&(u=_t(m));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ot(i),d=1<<o,u|=n[o],i&=~d;return u}function Qi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-ot(m),D=1<<T,k=d[T];k===-1?(!(D&o)||D&u)&&(d[T]=Qi(D,i)):k<=i&&(n.expiredLanes|=D),m&=~D}}function Ai(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pt(){var n=qe;return qe<<=1,!(qe&4194240)&&(qe=64),n}function mn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function tn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ot(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function nn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ot(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Mt=0;function mi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Md,ru,Ed,Td,wd,su=!1,ha=[],Ji=null,er=null,tr=null,uo=new Map,co=new Map,nr=[],n_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(n,i){switch(n){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(i.pointerId)}}function fo(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ao(i),i!==null&&ru(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function i_(n,i,o,u,d){switch(i){case"focusin":return Ji=fo(Ji,n,i,o,u,d),!0;case"dragenter":return er=fo(er,n,i,o,u,d),!0;case"mouseover":return tr=fo(tr,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return uo.set(m,fo(uo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,co.set(m,fo(co.get(m)||null,n,i,o,u,d)),!0}return!1}function Cd(n){var i=Pr(n.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=la(o),i!==null){n.blockedOn=i,wd(n.priority,function(){Ed(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=au(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);At=u,o.target.dispatchEvent(u),At=null}else return i=Ao(o),i!==null&&ru(i),n.blockedOn=o,!1;i.shift()}return!0}function Rd(n,i,o){pa(n)&&o.delete(i)}function r_(){su=!1,Ji!==null&&pa(Ji)&&(Ji=null),er!==null&&pa(er)&&(er=null),tr!==null&&pa(tr)&&(tr=null),uo.forEach(Rd),co.forEach(Rd)}function ho(n,i){n.blockedOn===i&&(n.blockedOn=null,su||(su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,r_)))}function po(n){function i(d){return ho(d,n)}if(0<ha.length){ho(ha[0],n);for(var o=1;o<ha.length;o++){var u=ha[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ji!==null&&ho(Ji,n),er!==null&&ho(er,n),tr!==null&&ho(tr,n),uo.forEach(i),co.forEach(i),o=0;o<nr.length;o++)u=nr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<nr.length&&(o=nr[0],o.blockedOn===null);)Cd(o),o.blockedOn===null&&nr.shift()}var os=b.ReactCurrentBatchConfig,ma=!0;function s_(n,i,o,u){var d=Mt,m=os.transition;os.transition=null;try{Mt=1,ou(n,i,o,u)}finally{Mt=d,os.transition=m}}function o_(n,i,o,u){var d=Mt,m=os.transition;os.transition=null;try{Mt=4,ou(n,i,o,u)}finally{Mt=d,os.transition=m}}function ou(n,i,o,u){if(ma){var d=au(n,i,o,u);if(d===null)Tu(n,i,u,ga,o),Ad(n,u);else if(i_(d,n,i,o,u))u.stopPropagation();else if(Ad(n,u),i&4&&-1<n_.indexOf(n)){for(;d!==null;){var m=Ao(d);if(m!==null&&Md(m),m=au(n,i,o,u),m===null&&Tu(n,i,u,ga,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Tu(n,i,u,null,o)}}var ga=null;function au(n,i,o,u){if(ga=null,n=H(u),n=Pr(n),n!==null)if(i=pi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=la(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ga=n,null}function bd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Se:return 1;case be:return 4;case Ue:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var ir=null,lu=null,_a=null;function Pd(){if(_a)return _a;var n,i=lu,o=i.length,u,d="value"in ir?ir.value:ir.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(u=1;u<=T&&i[o-u]===d[m-u];u++);return _a=d.slice(n,1<u?1-u:void 0)}function va(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xa(){return!0}function Dd(){return!1}function Bn(n){function i(o,u,d,m,T){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xa:Dd,this.isPropagationStopped=Dd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=Bn(as),mo=se({},as,{view:0,detail:0}),a_=Bn(mo),cu,fu,go,ya=se({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==go&&(go&&n.type==="mousemove"?(cu=n.screenX-go.screenX,fu=n.screenY-go.screenY):fu=cu=0,go=n),cu)},movementY:function(n){return"movementY"in n?n.movementY:fu}}),Ld=Bn(ya),l_=se({},ya,{dataTransfer:0}),u_=Bn(l_),c_=se({},mo,{relatedTarget:0}),du=Bn(c_),f_=se({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),d_=Bn(f_),h_=se({},as,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),p_=Bn(h_),m_=se({},as,{data:0}),Id=Bn(m_),g_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},__={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=v_[n])?!!i[n]:!1}function hu(){return x_}var y_=se({},mo,{key:function(n){if(n.key){var i=g_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=va(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?__[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(n){return n.type==="keypress"?va(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?va(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),S_=Bn(y_),M_=se({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=Bn(M_),E_=se({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),T_=Bn(E_),w_=se({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=Bn(w_),C_=se({},ya,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=Bn(C_),b_=[9,13,27,32],pu=f&&"CompositionEvent"in window,_o=null;f&&"documentMode"in document&&(_o=document.documentMode);var P_=f&&"TextEvent"in window&&!_o,Nd=f&&(!pu||_o&&8<_o&&11>=_o),Fd=" ",Od=!1;function kd(n,i){switch(n){case"keyup":return b_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function D_(n,i){switch(n){case"compositionend":return zd(i);case"keypress":return i.which!==32?null:(Od=!0,Fd);case"textInput":return n=i.data,n===Fd&&Od?null:n;default:return null}}function L_(n,i){if(ls)return n==="compositionend"||!pu&&kd(n,i)?(n=Pd(),_a=lu=ir=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nd&&i.locale!=="ko"?null:i.data;default:return null}}var I_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!I_[n.type]:i==="textarea"}function Vd(n,i,o,u){Le(u),i=wa(i,"onChange"),0<i.length&&(o=new uu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var vo=null,xo=null;function U_(n){sh(n,0)}function Sa(n){var i=hs(n);if(lt(i))return n}function N_(n,i){if(n==="change")return i}var Hd=!1;if(f){var mu;if(f){var gu="oninput"in document;if(!gu){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),gu=typeof Gd.oninput=="function"}mu=gu}else mu=!1;Hd=mu&&(!document.documentMode||9<document.documentMode)}function Wd(){vo&&(vo.detachEvent("onpropertychange",Xd),xo=vo=null)}function Xd(n){if(n.propertyName==="value"&&Sa(xo)){var i=[];Vd(i,xo,n,H(n)),Dn(U_,i)}}function F_(n,i,o){n==="focusin"?(Wd(),vo=i,xo=o,vo.attachEvent("onpropertychange",Xd)):n==="focusout"&&Wd()}function O_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sa(xo)}function k_(n,i){if(n==="click")return Sa(i)}function z_(n,i){if(n==="input"||n==="change")return Sa(i)}function B_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:B_;function yo(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ti(n[d],i[d]))return!1}return!0}function jd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yd(n,i){var o=jd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jd(o)}}function qd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?qd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Kd(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Dt(n.document)}return i}function _u(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function V_(n){var i=Kd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&qd(o.ownerDocument.documentElement,o)){if(u!==null&&_u(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Yd(o,m);var T=Yd(o,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var H_=f&&"documentMode"in document&&11>=document.documentMode,us=null,vu=null,So=null,xu=!1;function $d(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xu||us==null||us!==Dt(u)||(u=us,"selectionStart"in u&&_u(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),So&&yo(So,u)||(So=u,u=wa(vu,"onSelect"),0<u.length&&(i=new uu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=us)))}function Ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var cs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},yu={},Zd={};f&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Ea(n){if(yu[n])return yu[n];if(!cs[n])return n;var i=cs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Zd)return yu[n]=i[o];return n}var Qd=Ea("animationend"),Jd=Ea("animationiteration"),eh=Ea("animationstart"),th=Ea("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,i){nh.set(n,i),l(i,[n])}for(var Su=0;Su<ih.length;Su++){var Mu=ih[Su],G_=Mu.toLowerCase(),W_=Mu[0].toUpperCase()+Mu.slice(1);rr(G_,"on"+W_)}rr(Qd,"onAnimationEnd"),rr(Jd,"onAnimationIteration"),rr(eh,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function rh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,aa(u,i,void 0,n),n.currentTarget=null}function sh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var D=u[T],k=D.instance,te=D.currentTarget;if(D=D.listener,k!==m&&d.isPropagationStopped())break e;rh(d,D,te),m=k}else for(T=0;T<u.length;T++){if(D=u[T],k=D.instance,te=D.currentTarget,D=D.listener,k!==m&&d.isPropagationStopped())break e;rh(d,D,te),m=k}}}if(br)throw n=Zi,br=!1,Zi=null,n}function Ut(n,i){var o=i[Pu];o===void 0&&(o=i[Pu]=new Set);var u=n+"__bubble";o.has(u)||(oh(i,n,2,!1),o.add(u))}function Eu(n,i,o){var u=0;i&&(u|=4),oh(o,n,u,i)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Eo(n){if(!n[Ta]){n[Ta]=!0,r.forEach(function(o){o!=="selectionchange"&&(X_.has(o)||Eu(o,!1,n),Eu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ta]||(i[Ta]=!0,Eu("selectionchange",!1,i))}}function oh(n,i,o,u){switch(bd(i)){case 1:var d=s_;break;case 4:d=o_;break;default:d=ou}o=d.bind(null,i,o,n),d=void 0,!rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Tu(n,i,o,u,d){var m=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;T=T.return}for(;D!==null;){if(T=Pr(D),T===null)return;if(k=T.tag,k===5||k===6){u=m=T;continue e}D=D.parentNode}}u=u.return}Dn(function(){var te=m,xe=H(o),ye=[];e:{var ge=nh.get(n);if(ge!==void 0){var Ne=uu,Ve=n;switch(n){case"keypress":if(va(o)===0)break e;case"keydown":case"keyup":Ne=S_;break;case"focusin":Ve="focus",Ne=du;break;case"focusout":Ve="blur",Ne=du;break;case"beforeblur":case"afterblur":Ne=du;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=u_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=T_;break;case Qd:case Jd:case eh:Ne=d_;break;case th:Ne=A_;break;case"scroll":Ne=a_;break;case"wheel":Ne=R_;break;case"copy":case"cut":case"paste":Ne=p_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Ud}var Ge=(i&4)!==0,Xt=!Ge&&n==="scroll",$=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var V=te,Q;V!==null;){Q=V;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,$!==null&&(Ee=En(V,$),Ee!=null&&Ge.push(To(V,Ee,Q)))),Xt)break;V=V.return}0<Ge.length&&(ge=new Ne(ge,Ve,null,o,xe),ye.push({event:ge,listeners:Ge}))}}if(!(i&7)){e:{if(ge=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ge&&o!==At&&(Ve=o.relatedTarget||o.fromElement)&&(Pr(Ve)||Ve[Ci]))break e;if((Ne||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(Ve=o.relatedTarget||o.toElement,Ne=te,Ve=Ve?Pr(Ve):null,Ve!==null&&(Xt=pi(Ve),Ve!==Xt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ne=null,Ve=te),Ne!==Ve)){if(Ge=Ld,Ee="onMouseLeave",$="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Ud,Ee="onPointerLeave",$="onPointerEnter",V="pointer"),Xt=Ne==null?ge:hs(Ne),Q=Ve==null?ge:hs(Ve),ge=new Ge(Ee,V+"leave",Ne,o,xe),ge.target=Xt,ge.relatedTarget=Q,Ee=null,Pr(xe)===te&&(Ge=new Ge($,V+"enter",Ve,o,xe),Ge.target=Q,Ge.relatedTarget=Xt,Ee=Ge),Xt=Ee,Ne&&Ve)t:{for(Ge=Ne,$=Ve,V=0,Q=Ge;Q;Q=fs(Q))V++;for(Q=0,Ee=$;Ee;Ee=fs(Ee))Q++;for(;0<V-Q;)Ge=fs(Ge),V--;for(;0<Q-V;)$=fs($),Q--;for(;V--;){if(Ge===$||$!==null&&Ge===$.alternate)break t;Ge=fs(Ge),$=fs($)}Ge=null}else Ge=null;Ne!==null&&ah(ye,ge,Ne,Ge,!1),Ve!==null&&Xt!==null&&ah(ye,Xt,Ve,Ge,!0)}}e:{if(ge=te?hs(te):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var je=N_;else if(Bd(ge))if(Hd)je=z_;else{je=O_;var Ze=F_}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=k_);if(je&&(je=je(n,te))){Vd(ye,je,o,xe);break e}Ze&&Ze(n,ge,te),n==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch(Ze=te?hs(te):window,n){case"focusin":(Bd(Ze)||Ze.contentEditable==="true")&&(us=Ze,vu=te,So=null);break;case"focusout":So=vu=us=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,$d(ye,o,xe);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":$d(ye,o,xe)}var Qe;if(pu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ls?kd(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Nd&&o.locale!=="ko"&&(ls||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ls&&(Qe=Pd()):(ir=xe,lu="value"in ir?ir.value:ir.textContent,ls=!0)),Ze=wa(te,nt),0<Ze.length&&(nt=new Id(nt,n,null,o,xe),ye.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=zd(o),Qe!==null&&(nt.data=Qe)))),(Qe=P_?D_(n,o):L_(n,o))&&(te=wa(te,"onBeforeInput"),0<te.length&&(xe=new Id("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:te}),xe.data=Qe))}sh(ye,i)})}function To(n,i,o){return{instance:n,listener:i,currentTarget:o}}function wa(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=En(n,o),m!=null&&u.unshift(To(n,m,d)),m=En(n,i),m!=null&&u.push(To(n,m,d))),n=n.return}return u}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ah(n,i,o,u,d){for(var m=i._reactName,T=[];o!==null&&o!==u;){var D=o,k=D.alternate,te=D.stateNode;if(k!==null&&k===u)break;D.tag===5&&te!==null&&(D=te,d?(k=En(o,m),k!=null&&T.unshift(To(o,k,D))):d||(k=En(o,m),k!=null&&T.push(To(o,k,D)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var j_=/\r\n?/g,Y_=/\u0000|\uFFFD/g;function lh(n){return(typeof n=="string"?n:""+n).replace(j_,`
`).replace(Y_,"")}function Aa(n,i,o){if(i=lh(i),lh(n)!==i&&o)throw Error(t(425))}function Ca(){}var wu=null,Au=null;function Cu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,K_=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(n){return uh.resolve(null).then(n).catch($_)}:Ru;function $_(n){setTimeout(function(){throw n})}function bu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),po(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);po(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ch(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),gi="__reactFiber$"+ds,wo="__reactProps$"+ds,Ci="__reactContainer$"+ds,Pu="__reactEvents$"+ds,Z_="__reactListeners$"+ds,Q_="__reactHandles$"+ds;function Pr(n){var i=n[gi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ci]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=ch(n);n!==null;){if(o=n[gi])return o;n=ch(n)}return i}n=o,o=n.parentNode}return null}function Ao(n){return n=n[gi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[wo]||null}var Du=[],ps=-1;function or(n){return{current:n}}function Nt(n){0>ps||(n.current=Du[ps],Du[ps]=null,ps--)}function Lt(n,i){ps++,Du[ps]=n.current,n.current=i}var ar={},gn=or(ar),Ln=or(!1),Dr=ar;function ms(n,i){var o=n.type.contextTypes;if(!o)return ar;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function In(n){return n=n.childContextTypes,n!=null}function ba(){Nt(Ln),Nt(gn)}function fh(n,i,o){if(gn.current!==ar)throw Error(t(168));Lt(gn,i),Lt(Ln,o)}function dh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return se({},o,u)}function Pa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Dr=gn.current,Lt(gn,n),Lt(Ln,Ln.current),!0}function hh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=dh(n,i,Dr),u.__reactInternalMemoizedMergedChildContext=n,Nt(Ln),Nt(gn),Lt(gn,n)):Nt(Ln),Lt(Ln,o)}var Ri=null,Da=!1,Lu=!1;function ph(n){Ri===null?Ri=[n]:Ri.push(n)}function J_(n){Da=!0,ph(n)}function lr(){if(!Lu&&Ri!==null){Lu=!0;var n=0,i=Mt;try{var o=Ri;for(Mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ri=null,Da=!1}catch(d){throw Ri!==null&&(Ri=Ri.slice(n+1)),da(Se,lr),d}finally{Mt=i,Lu=!1}}return null}var gs=[],_s=0,La=null,Ia=0,jn=[],Yn=0,Lr=null,bi=1,Pi="";function Ir(n,i){gs[_s++]=Ia,gs[_s++]=La,La=n,Ia=i}function mh(n,i,o){jn[Yn++]=bi,jn[Yn++]=Pi,jn[Yn++]=Lr,Lr=n;var u=bi;n=Pi;var d=32-ot(u)-1;u&=~(1<<d),o+=1;var m=32-ot(i)+d;if(30<m){var T=d-d%5;m=(u&(1<<T)-1).toString(32),u>>=T,d-=T,bi=1<<32-ot(i)+d|o<<d|u,Pi=m+n}else bi=1<<m|o<<d|u,Pi=n}function Iu(n){n.return!==null&&(Ir(n,1),mh(n,1,0))}function Uu(n){for(;n===La;)La=gs[--_s],gs[_s]=null,Ia=gs[--_s],gs[_s]=null;for(;n===Lr;)Lr=jn[--Yn],jn[Yn]=null,Pi=jn[--Yn],jn[Yn]=null,bi=jn[--Yn],jn[Yn]=null}var Vn=null,Hn=null,kt=!1,ni=null;function gh(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function _h(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Lr!==null?{id:bi,overflow:Pi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Vn=n,Hn=null,!0):!1;default:return!1}}function Nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fu(n){if(kt){var i=Hn;if(i){var o=i;if(!_h(n,i)){if(Nu(n))throw Error(t(418));i=sr(o.nextSibling);var u=Vn;i&&_h(n,i)?gh(u,o):(n.flags=n.flags&-4097|2,kt=!1,Vn=n)}}else{if(Nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Vn=n}}}function vh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Ua(n){if(n!==Vn)return!1;if(!kt)return vh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Cu(n.type,n.memoizedProps)),i&&(i=Hn)){if(Nu(n))throw xh(),Error(t(418));for(;i;)gh(n,i),i=sr(i.nextSibling)}if(vh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Hn=sr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=Vn?sr(n.stateNode.nextSibling):null;return!0}function xh(){for(var n=Hn;n;)n=sr(n.nextSibling)}function vs(){Hn=Vn=null,kt=!1}function Ou(n){ni===null?ni=[n]:ni.push(n)}var ev=b.ReactCurrentBatchConfig;function Co(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var D=d.refs;T===null?delete D[m]:D[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Na(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function yh(n){var i=n._init;return i(n._payload)}function Sh(n){function i($,V){if(n){var Q=$.deletions;Q===null?($.deletions=[V],$.flags|=16):Q.push(V)}}function o($,V){if(!n)return null;for(;V!==null;)i($,V),V=V.sibling;return null}function u($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function d($,V){return $=gr($,V),$.index=0,$.sibling=null,$}function m($,V,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<V?($.flags|=2,V):Q):($.flags|=2,V)):($.flags|=1048576,V)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function D($,V,Q,Ee){return V===null||V.tag!==6?(V=Rc(Q,$.mode,Ee),V.return=$,V):(V=d(V,Q),V.return=$,V)}function k($,V,Q,Ee){var je=Q.type;return je===F?xe($,V,Q.props.children,Ee,Q.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&yh(je)===V.type)?(Ee=d(V,Q.props),Ee.ref=Co($,V,Q),Ee.return=$,Ee):(Ee=sl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=Co($,V,Q),Ee.return=$,Ee)}function te($,V,Q,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=bc(Q,$.mode,Ee),V.return=$,V):(V=d(V,Q.children||[]),V.return=$,V)}function xe($,V,Q,Ee,je){return V===null||V.tag!==7?(V=Vr(Q,$.mode,Ee,je),V.return=$,V):(V=d(V,Q),V.return=$,V)}function ye($,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Rc(""+V,$.mode,Q),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return Q=sl(V.type,V.key,V.props,null,$.mode,Q),Q.ref=Co($,null,V),Q.return=$,Q;case N:return V=bc(V,$.mode,Q),V.return=$,V;case oe:var Ee=V._init;return ye($,Ee(V._payload),Q)}if(We(V)||le(V))return V=Vr(V,$.mode,Q,null),V.return=$,V;Na($,V)}return null}function ge($,V,Q,Ee){var je=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return je!==null?null:D($,V,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case W:return Q.key===je?k($,V,Q,Ee):null;case N:return Q.key===je?te($,V,Q,Ee):null;case oe:return je=Q._init,ge($,V,je(Q._payload),Ee)}if(We(Q)||le(Q))return je!==null?null:xe($,V,Q,Ee,null);Na($,Q)}return null}function Ne($,V,Q,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(Q)||null,D(V,$,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case W:return $=$.get(Ee.key===null?Q:Ee.key)||null,k(V,$,Ee,je);case N:return $=$.get(Ee.key===null?Q:Ee.key)||null,te(V,$,Ee,je);case oe:var Ze=Ee._init;return Ne($,V,Q,Ze(Ee._payload),je)}if(We(Ee)||le(Ee))return $=$.get(Q)||null,xe(V,$,Ee,je,null);Na(V,Ee)}return null}function Ve($,V,Q,Ee){for(var je=null,Ze=null,Qe=V,nt=V=0,on=null;Qe!==null&&nt<Q.length;nt++){Qe.index>nt?(on=Qe,Qe=null):on=Qe.sibling;var wt=ge($,Qe,Q[nt],Ee);if(wt===null){Qe===null&&(Qe=on);break}n&&Qe&&wt.alternate===null&&i($,Qe),V=m(wt,V,nt),Ze===null?je=wt:Ze.sibling=wt,Ze=wt,Qe=on}if(nt===Q.length)return o($,Qe),kt&&Ir($,nt),je;if(Qe===null){for(;nt<Q.length;nt++)Qe=ye($,Q[nt],Ee),Qe!==null&&(V=m(Qe,V,nt),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return kt&&Ir($,nt),je}for(Qe=u($,Qe);nt<Q.length;nt++)on=Ne(Qe,$,nt,Q[nt],Ee),on!==null&&(n&&on.alternate!==null&&Qe.delete(on.key===null?nt:on.key),V=m(on,V,nt),Ze===null?je=on:Ze.sibling=on,Ze=on);return n&&Qe.forEach(function(_r){return i($,_r)}),kt&&Ir($,nt),je}function Ge($,V,Q,Ee){var je=le(Q);if(typeof je!="function")throw Error(t(150));if(Q=je.call(Q),Q==null)throw Error(t(151));for(var Ze=je=null,Qe=V,nt=V=0,on=null,wt=Q.next();Qe!==null&&!wt.done;nt++,wt=Q.next()){Qe.index>nt?(on=Qe,Qe=null):on=Qe.sibling;var _r=ge($,Qe,wt.value,Ee);if(_r===null){Qe===null&&(Qe=on);break}n&&Qe&&_r.alternate===null&&i($,Qe),V=m(_r,V,nt),Ze===null?je=_r:Ze.sibling=_r,Ze=_r,Qe=on}if(wt.done)return o($,Qe),kt&&Ir($,nt),je;if(Qe===null){for(;!wt.done;nt++,wt=Q.next())wt=ye($,wt.value,Ee),wt!==null&&(V=m(wt,V,nt),Ze===null?je=wt:Ze.sibling=wt,Ze=wt);return kt&&Ir($,nt),je}for(Qe=u($,Qe);!wt.done;nt++,wt=Q.next())wt=Ne(Qe,$,nt,wt.value,Ee),wt!==null&&(n&&wt.alternate!==null&&Qe.delete(wt.key===null?nt:wt.key),V=m(wt,V,nt),Ze===null?je=wt:Ze.sibling=wt,Ze=wt);return n&&Qe.forEach(function(Lv){return i($,Lv)}),kt&&Ir($,nt),je}function Xt($,V,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===F&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case W:e:{for(var je=Q.key,Ze=V;Ze!==null;){if(Ze.key===je){if(je=Q.type,je===F){if(Ze.tag===7){o($,Ze.sibling),V=d(Ze,Q.props.children),V.return=$,$=V;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&yh(je)===Ze.type){o($,Ze.sibling),V=d(Ze,Q.props),V.ref=Co($,Ze,Q),V.return=$,$=V;break e}o($,Ze);break}else i($,Ze);Ze=Ze.sibling}Q.type===F?(V=Vr(Q.props.children,$.mode,Ee,Q.key),V.return=$,$=V):(Ee=sl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=Co($,V,Q),Ee.return=$,$=Ee)}return T($);case N:e:{for(Ze=Q.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){o($,V.sibling),V=d(V,Q.children||[]),V.return=$,$=V;break e}else{o($,V);break}else i($,V);V=V.sibling}V=bc(Q,$.mode,Ee),V.return=$,$=V}return T($);case oe:return Ze=Q._init,Xt($,V,Ze(Q._payload),Ee)}if(We(Q))return Ve($,V,Q,Ee);if(le(Q))return Ge($,V,Q,Ee);Na($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,V!==null&&V.tag===6?(o($,V.sibling),V=d(V,Q),V.return=$,$=V):(o($,V),V=Rc(Q,$.mode,Ee),V.return=$,$=V),T($)):o($,V)}return Xt}var xs=Sh(!0),Mh=Sh(!1),Fa=or(null),Oa=null,ys=null,ku=null;function zu(){ku=ys=Oa=null}function Bu(n){var i=Fa.current;Nt(Fa),n._currentValue=i}function Vu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ss(n,i){Oa=n,ku=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Un=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(ku!==n)if(n={context:n,memoizedValue:i,next:null},ys===null){if(Oa===null)throw Error(t(308));ys=n,Oa.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return i}var Ur=null;function Hu(n){Ur===null?Ur=[n]:Ur.push(n)}function Eh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Hu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Di(n,u)}function Di(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ur=!1;function Gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Et&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Di(n,o)}return d=u.interleaved,d===null?(i.next=i,Hu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Di(n,o)}function ka(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}function wh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function za(n,i,o,u){var d=n.updateQueue;ur=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,te=k.next;k.next=null,T===null?m=te:T.next=te,T=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==T&&(D===null?xe.firstBaseUpdate=te:D.next=te,xe.lastBaseUpdate=k))}if(m!==null){var ye=d.baseState;T=0,xe=te=k=null,D=m;do{var ge=D.lane,Ne=D.eventTime;if((u&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=n,Ge=D;switch(ge=i,Ne=o,Ge.tag){case 1:if(Ve=Ge.payload,typeof Ve=="function"){ye=Ve.call(Ne,ye,ge);break e}ye=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ge.payload,ge=typeof Ve=="function"?Ve.call(Ne,ye,ge):Ve,ge==null)break e;ye=se({},ye,ge);break e;case 2:ur=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[D]:ge.push(D))}else Ne={eventTime:Ne,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(te=xe=Ne,k=ye):xe=xe.next=Ne,T|=ge;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(xe===null&&(k=ye),d.baseState=k,d.firstBaseUpdate=te,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Or|=T,n.lanes=T,n.memoizedState=ye}}function Ah(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ro={},_i=or(Ro),bo=or(Ro),Po=or(Ro);function Nr(n){if(n===Ro)throw Error(t(174));return n}function Wu(n,i){switch(Lt(Po,i),Lt(bo,n),Lt(_i,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Nt(_i),Lt(_i,i)}function Ms(){Nt(_i),Nt(bo),Nt(Po)}function Ch(n){Nr(Po.current);var i=Nr(_i.current),o=Xe(i,n.type);i!==o&&(Lt(bo,n),Lt(_i,o))}function Xu(n){bo.current===n&&(Nt(_i),Nt(bo))}var zt=or(0);function Ba(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ju=[];function Yu(){for(var n=0;n<ju.length;n++)ju[n]._workInProgressVersionPrimary=null;ju.length=0}var Va=b.ReactCurrentDispatcher,qu=b.ReactCurrentBatchConfig,Fr=0,Bt=null,$t=null,rn=null,Ha=!1,Do=!1,Lo=0,tv=0;function _n(){throw Error(t(321))}function Ku(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ti(n[o],i[o]))return!1;return!0}function $u(n,i,o,u,d,m){if(Fr=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Va.current=n===null||n.memoizedState===null?sv:ov,n=o(u,d),Do){m=0;do{if(Do=!1,Lo=0,25<=m)throw Error(t(301));m+=1,rn=$t=null,i.updateQueue=null,Va.current=av,n=o(u,d)}while(Do)}if(Va.current=Xa,i=$t!==null&&$t.next!==null,Fr=0,rn=$t=Bt=null,Ha=!1,i)throw Error(t(300));return n}function Zu(){var n=Lo!==0;return Lo=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Bt.memoizedState=rn=n:rn=rn.next=n,rn}function Kn(){if($t===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=rn===null?Bt.memoizedState:rn.next;if(i!==null)rn=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},rn===null?Bt.memoizedState=rn=n:rn=rn.next=n}return rn}function Io(n,i){return typeof i=="function"?i(n):i}function Qu(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=$t,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var D=T=null,k=null,te=m;do{var xe=te.lane;if((Fr&xe)===xe)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var ye={lane:xe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(D=k=ye,T=u):k=k.next=ye,Bt.lanes|=xe,Or|=xe}te=te.next}while(te!==null&&te!==m);k===null?T=u:k.next=D,ti(u,i.memoizedState)||(Un=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Bt.lanes|=m,Or|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ju(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);ti(m,i.memoizedState)||(Un=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Rh(){}function bh(n,i){var o=Bt,u=Kn(),d=i(),m=!ti(u.memoizedState,d);if(m&&(u.memoizedState=d,Un=!0),u=u.queue,ec(Lh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Uo(9,Dh.bind(null,o,u,d,i),void 0,null),sn===null)throw Error(t(349));Fr&30||Ph(o,i,d)}return d}function Ph(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Dh(n,i,o,u){i.value=o,i.getSnapshot=u,Ih(i)&&Uh(n)}function Lh(n,i,o){return o(function(){Ih(i)&&Uh(n)})}function Ih(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ti(n,o)}catch{return!0}}function Uh(n){var i=Di(n,1);i!==null&&oi(i,n,1,-1)}function Nh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},i.queue=n,n=n.dispatch=rv.bind(null,Bt,n),[i.memoizedState,n]}function Uo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Fh(){return Kn().memoizedState}function Ga(n,i,o,u){var d=vi();Bt.flags|=n,d.memoizedState=Uo(1|i,o,void 0,u===void 0?null:u)}function Wa(n,i,o,u){var d=Kn();u=u===void 0?null:u;var m=void 0;if($t!==null){var T=$t.memoizedState;if(m=T.destroy,u!==null&&Ku(u,T.deps)){d.memoizedState=Uo(i,o,m,u);return}}Bt.flags|=n,d.memoizedState=Uo(1|i,o,m,u)}function Oh(n,i){return Ga(8390656,8,n,i)}function ec(n,i){return Wa(2048,8,n,i)}function kh(n,i){return Wa(4,2,n,i)}function zh(n,i){return Wa(4,4,n,i)}function Bh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Vh(n,i,o){return o=o!=null?o.concat([n]):null,Wa(4,4,Bh.bind(null,i,n),o)}function tc(){}function Hh(n,i){var o=Kn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Gh(n,i){var o=Kn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Wh(n,i,o){return Fr&21?(ti(o,i)||(o=Pt(),Bt.lanes|=o,Or|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=o)}function nv(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var u=qu.transition;qu.transition={};try{n(!1),i()}finally{Mt=o,qu.transition=u}}function Xh(){return Kn().memoizedState}function iv(n,i,o){var u=pr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},jh(n))Yh(i,o);else if(o=Eh(n,i,o,u),o!==null){var d=An();oi(o,n,u,d),qh(o,i,u)}}function rv(n,i,o){var u=pr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(jh(n))Yh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,D=m(T,o);if(d.hasEagerState=!0,d.eagerState=D,ti(D,T)){var k=i.interleaved;k===null?(d.next=d,Hu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=Eh(n,i,d,u),o!==null&&(d=An(),oi(o,n,u,d),qh(o,i,u))}}function jh(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function Yh(n,i){Do=Ha=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function qh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}var Xa={readContext:qn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},sv={readContext:qn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:Oh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ga(4194308,4,Bh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ga(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ga(4,2,n,i)},useMemo:function(n,i){var o=vi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=vi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=iv.bind(null,Bt,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Nh,useDebugValue:tc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Nh(!1),i=n[0];return n=nv.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Bt,d=vi();if(kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),sn===null)throw Error(t(349));Fr&30||Ph(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Oh(Lh.bind(null,u,m,n),[n]),u.flags|=2048,Uo(9,Dh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=vi(),i=sn.identifierPrefix;if(kt){var o=Pi,u=bi;o=(u&~(1<<32-ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Lo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=tv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ov={readContext:qn,useCallback:Hh,useContext:qn,useEffect:ec,useImperativeHandle:Vh,useInsertionEffect:kh,useLayoutEffect:zh,useMemo:Gh,useReducer:Qu,useRef:Fh,useState:function(){return Qu(Io)},useDebugValue:tc,useDeferredValue:function(n){var i=Kn();return Wh(i,$t.memoizedState,n)},useTransition:function(){var n=Qu(Io)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Rh,useSyncExternalStore:bh,useId:Xh,unstable_isNewReconciler:!1},av={readContext:qn,useCallback:Hh,useContext:qn,useEffect:ec,useImperativeHandle:Vh,useInsertionEffect:kh,useLayoutEffect:zh,useMemo:Gh,useReducer:Ju,useRef:Fh,useState:function(){return Ju(Io)},useDebugValue:tc,useDeferredValue:function(n){var i=Kn();return $t===null?i.memoizedState=n:Wh(i,$t.memoizedState,n)},useTransition:function(){var n=Ju(Io)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Rh,useSyncExternalStore:bh,useId:Xh,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function nc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ja={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=An(),d=pr(n),m=Li(u,d);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),ka(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=An(),d=pr(n),m=Li(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),ka(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=An(),u=pr(n),d=Li(o,u);d.tag=2,i!=null&&(d.callback=i),i=cr(n,d,u),i!==null&&(oi(i,n,u,o),ka(i,n,u))}};function Kh(n,i,o,u,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!yo(o,u)||!yo(d,m):!0}function $h(n,i,o){var u=!1,d=ar,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(d=In(i)?Dr:gn.current,u=i.contextTypes,m=(u=u!=null)?ms(n,d):ar),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Zh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ja.enqueueReplaceState(i,i.state,null)}function ic(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Gu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=qn(m):(m=In(i)?Dr:gn.current,d.context=ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(nc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),za(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var o="",u=i;do o+=re(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function rc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function sc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var lv=typeof WeakMap=="function"?WeakMap:Map;function Qh(n,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ja||(Ja=!0,yc=u),sc(n,i)},o}function Jh(n,i,o){o=Li(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){sc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){sc(n,i),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function ep(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new lv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=Mv.bind(null,n,i,o),i.then(n,n))}function tp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function np(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n)}var uv=b.ReactCurrentOwner,Un=!1;function wn(n,i,o,u){i.child=n===null?Mh(i,null,o,u):xs(i,n.child,o,u)}function ip(n,i,o,u,d){o=o.render;var m=i.ref;return Ss(i,d),u=$u(n,i,o,u,m,d),o=Zu(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ii(n,i,d)):(kt&&o&&Iu(i),i.flags|=1,wn(n,i,u,d),i.child)}function rp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Cc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,sp(n,i,m,u,d)):(n=sl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:yo,o(T,u)&&n.ref===i.ref)return Ii(n,i,d)}return i.flags|=1,n=gr(m,u),n.ref=i.ref,n.return=i,i.child=n}function sp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(yo(m,u)&&n.ref===i.ref)if(Un=!1,i.pendingProps=u=m,(n.lanes&d)!==0)n.flags&131072&&(Un=!0);else return i.lanes=n.lanes,Ii(n,i,d)}return oc(n,i,o,u,d)}function op(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(ws,Gn),Gn|=o;else{if(!(o&1073741824))return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(ws,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Lt(ws,Gn),Gn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Lt(ws,Gn),Gn|=u;return wn(n,i,d,o),i.child}function ap(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function oc(n,i,o,u,d){var m=In(o)?Dr:gn.current;return m=ms(i,m),Ss(i,d),o=$u(n,i,o,u,m,d),u=Zu(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ii(n,i,d)):(kt&&u&&Iu(i),i.flags|=1,wn(n,i,o,d),i.child)}function lp(n,i,o,u,d){if(In(o)){var m=!0;Pa(i)}else m=!1;if(Ss(i,d),i.stateNode===null)qa(n,i),$h(i,o,u),ic(i,o,u,d),u=!0;else if(n===null){var T=i.stateNode,D=i.memoizedProps;T.props=D;var k=T.context,te=o.contextType;typeof te=="object"&&te!==null?te=qn(te):(te=In(o)?Dr:gn.current,te=ms(i,te));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==u||k!==te)&&Zh(i,T,u,te),ur=!1;var ge=i.memoizedState;T.state=ge,za(i,u,T,d),k=i.memoizedState,D!==u||ge!==k||Ln.current||ur?(typeof xe=="function"&&(nc(i,o,xe,u),k=i.memoizedState),(D=ur||Kh(i,o,D,u,ge,k,te))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),T.props=u,T.state=k,T.context=te,u=D):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,Th(n,i),D=i.memoizedProps,te=i.type===i.elementType?D:ii(i.type,D),T.props=te,ye=i.pendingProps,ge=T.context,k=o.contextType,typeof k=="object"&&k!==null?k=qn(k):(k=In(o)?Dr:gn.current,k=ms(i,k));var Ne=o.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==ye||ge!==k)&&Zh(i,T,u,k),ur=!1,ge=i.memoizedState,T.state=ge,za(i,u,T,d);var Ve=i.memoizedState;D!==ye||ge!==Ve||Ln.current||ur?(typeof Ne=="function"&&(nc(i,o,Ne,u),Ve=i.memoizedState),(te=ur||Kh(i,o,te,u,ge,Ve,k)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Ve,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Ve,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),T.props=u,T.state=Ve,T.context=k,u=te):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return ac(n,i,o,u,m,d)}function ac(n,i,o,u,d,m){ap(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&hh(i,o,!1),Ii(n,i,m);u=i.stateNode,uv.current=i;var D=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=xs(i,n.child,null,m),i.child=xs(i,null,D,m)):wn(n,i,D,m),i.memoizedState=u.state,d&&hh(i,o,!0),i.child}function up(n){var i=n.stateNode;i.pendingContext?fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&fh(n,i.context,!1),Wu(n,i.containerInfo)}function cp(n,i,o,u,d){return vs(),Ou(d),i.flags|=256,wn(n,i,o,u),i.child}var lc={dehydrated:null,treeContext:null,retryLane:0};function uc(n){return{baseLanes:n,cachePool:null,transitions:null}}function fp(n,i,o){var u=i.pendingProps,d=zt.current,m=!1,T=(i.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Lt(zt,d&1),n===null)return Fu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(T=u.children,n=u.fallback,m?(u=i.mode,m=i.child,T={mode:"hidden",children:T},!(u&1)&&m!==null?(m.childLanes=0,m.pendingProps=T):m=ol(T,u,0,null),n=Vr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=uc(o),i.memoizedState=lc,n):cc(i,T));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return cv(n,i,T,u,D,d,o);if(m){m=u.fallback,T=i.mode,d=n.child,D=d.sibling;var k={mode:"hidden",children:u.children};return!(T&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=gr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?m=gr(D,m):(m=Vr(m,T,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,T=n.child.memoizedState,T=T===null?uc(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=lc,u}return m=n.child,n=m.sibling,u=gr(m,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function cc(n,i){return i=ol({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ya(n,i,o,u){return u!==null&&Ou(u),xs(i,n.child,null,o),n=cc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function cv(n,i,o,u,d,m,T){if(o)return i.flags&256?(i.flags&=-257,u=rc(Error(t(422))),Ya(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ol({mode:"visible",children:u.children},d,0,null),m=Vr(m,d,T,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,i.mode&1&&xs(i,n.child,null,T),i.child.memoizedState=uc(T),i.memoizedState=lc,m);if(!(i.mode&1))return Ya(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,m=Error(t(419)),u=rc(m,u,void 0),Ya(n,i,T,u)}if(D=(T&n.childLanes)!==0,Un||D){if(u=sn,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|T)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Di(n,d),oi(u,n,d,-1))}return Ac(),u=rc(Error(t(421))),Ya(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Ev.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Hn=sr(d.nextSibling),Vn=i,kt=!0,ni=null,n!==null&&(jn[Yn++]=bi,jn[Yn++]=Pi,jn[Yn++]=Lr,bi=n.id,Pi=n.overflow,Lr=i),i=cc(i,u.children),i.flags|=4096,i)}function dp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Vu(n.return,i,o)}function fc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function hp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(wn(n,i,u.children,o),u=zt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dp(n,o,i);else if(n.tag===19)dp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Lt(zt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ba(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),fc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ba(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}fc(i,!0,o,null,m);break;case"together":fc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qa(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=gr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=gr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function fv(n,i,o){switch(i.tag){case 3:up(i),vs();break;case 5:Ch(i);break;case 1:In(i.type)&&Pa(i);break;case 4:Wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Lt(Fa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Lt(zt,zt.current&1),i.flags|=128,null):o&i.child.childLanes?fp(n,i,o):(Lt(zt,zt.current&1),n=Ii(n,i,o),n!==null?n.sibling:null);Lt(zt,zt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return hp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,op(n,i,o)}return Ii(n,i,o)}var pp,dc,mp,gp;pp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},dc=function(){},mp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(_i.current);var m=null;switch(o){case"input":d=z(n,d),u=z(n,u),m=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),m=[];break;case"textarea":d=w(n,d),u=w(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ca)}ht(o,u);var T;o=null;for(te in d)if(!u.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var D=d[te];for(T in D)D.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?m||(m=[]):(m=m||[]).push(te,null));for(te in u){var k=u[te];if(D=d!=null?d[te]:void 0,u.hasOwnProperty(te)&&k!==D&&(k!=null||D!=null))if(te==="style")if(D){for(T in D)!D.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in k)k.hasOwnProperty(T)&&D[T]!==k[T]&&(o||(o={}),o[T]=k[T])}else o||(m||(m=[]),m.push(te,o)),o=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(m=m||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Ut("scroll",n),m||D===k||(m=[])):(m=m||[]).push(te,k))}o&&(m=m||[]).push("style",o);var te=m;(i.updateQueue=te)&&(i.flags|=4)}},gp=function(n,i,o,u){o!==u&&(i.flags|=4)};function No(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function dv(n,i,o){var u=i.pendingProps;switch(Uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return In(i.type)&&ba(),vn(i),null;case 3:return u=i.stateNode,Ms(),Nt(Ln),Nt(gn),Yu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ua(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ni!==null&&(Ec(ni),ni=null))),dc(n,i),vn(i),null;case 5:Xu(i);var d=Nr(Po.current);if(o=i.type,n!==null&&i.stateNode!=null)mp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Nr(_i.current),Ua(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[gi]=i,u[wo]=m,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(d=0;d<Mo.length;d++)Ut(Mo[d],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":Mn(u,m),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",u);break;case"textarea":J(u,m),Ut("invalid",u)}ht(o,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var D=m[T];T==="children"?typeof D=="string"?u.textContent!==D&&(m.suppressHydrationWarning!==!0&&Aa(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&Aa(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&Ut("scroll",u)}switch(o){case"input":Tt(u),Ye(u,m,!0);break;case"textarea":Tt(u),ve(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ca)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(o,{is:u.is}):(n=T.createElement(o),o==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,o),n[gi]=i,n[wo]=u,pp(n,i,!1,!1),i.stateNode=n;e:{switch(T=it(o,u),o){case"dialog":Ut("cancel",n),Ut("close",n),d=u;break;case"iframe":case"object":case"embed":Ut("load",n),d=u;break;case"video":case"audio":for(d=0;d<Mo.length;d++)Ut(Mo[d],n);d=u;break;case"source":Ut("error",n),d=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),d=u;break;case"details":Ut("toggle",n),d=u;break;case"input":Mn(n,u),d=z(n,u),Ut("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":J(n,u),d=w(n,u),Ut("invalid",n);break;default:d=u}ht(o,d),D=d;for(m in D)if(D.hasOwnProperty(m)){var k=D[m];m==="style"?et(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fe(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ft(n,k):typeof k=="number"&&ft(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ut("scroll",n):k!=null&&L(n,m,k,T))}switch(o){case"input":Tt(n),Ye(n,u,!1);break;case"textarea":Tt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?P(n,!!u.multiple,m,!1):u.defaultValue!=null&&P(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ca)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)gp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Nr(Po.current),Nr(_i.current),Ua(i)){if(u=i.stateNode,o=i.memoizedProps,u[gi]=i,(m=u.nodeValue!==o)&&(n=Vn,n!==null))switch(n.tag){case 3:Aa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Aa(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return vn(i),null;case 13:if(Nt(zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Hn!==null&&i.mode&1&&!(i.flags&128))xh(),vs(),i.flags|=98560,m=!1;else if(m=Ua(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[gi]=i}else vs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else ni!==null&&(Ec(ni),ni=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||zt.current&1?Zt===0&&(Zt=3):Ac())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Ms(),dc(n,i),n===null&&Eo(i.stateNode.containerInfo),vn(i),null;case 10:return Bu(i.type._context),vn(i),null;case 17:return In(i.type)&&ba(),vn(i),null;case 19:if(Nt(zt),m=i.memoizedState,m===null)return vn(i),null;if(u=(i.flags&128)!==0,T=m.rendering,T===null)if(u)No(m,!1);else{if(Zt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(T=Ba(n),T!==null){for(i.flags|=128,No(m,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(zt,zt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Z()>As&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304)}else{if(!u)if(n=Ba(T),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),No(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!kt)return vn(i),null}else 2*Z()-m.renderingStartTime>As&&o!==1073741824&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Z(),i.sibling=null,o=zt.current,Lt(zt,u?o&1|2:o&1),i):(vn(i),null);case 22:case 23:return wc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Gn&1073741824&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function hv(n,i){switch(Uu(i),i.tag){case 1:return In(i.type)&&ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ms(),Nt(Ln),Nt(gn),Yu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Xu(i),null;case 13:if(Nt(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(zt),null;case 4:return Ms(),null;case 10:return Bu(i.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Ka=!1,xn=!1,pv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function hc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var _p=!1;function mv(n,i){if(wu=ma,n=Kd(),_u(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,D=-1,k=-1,te=0,xe=0,ye=n,ge=null;t:for(;;){for(var Ne;ye!==o||d!==0&&ye.nodeType!==3||(D=T+d),ye!==m||u!==0&&ye.nodeType!==3||(k=T+u),ye.nodeType===3&&(T+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===n)break t;if(ge===o&&++te===d&&(D=T),ge===m&&++xe===u&&(k=T),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Au={focusedElem:n,selectionRange:o},ma=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Ve=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ge=Ve.memoizedProps,Xt=Ve.memoizedState,$=i.stateNode,V=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ii(i.type,Ge),Xt);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Gt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Ve=_p,_p=!1,Ve}function Fo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&hc(i,o,m)}d=d.next}while(d!==u)}}function $a(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function pc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function vp(n){var i=n.alternate;i!==null&&(n.alternate=null,vp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[wo],delete i[Pu],delete i[Z_],delete i[Q_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xp(n){return n.tag===5||n.tag===3||n.tag===4}function yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ca));else if(u!==4&&(n=n.child,n!==null))for(mc(n,i,o),n=n.sibling;n!==null;)mc(n,i,o),n=n.sibling}function gc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(gc(n,i,o),n=n.sibling;n!==null;)gc(n,i,o),n=n.sibling}var cn=null,ri=!1;function fr(n,i,o){for(o=o.child;o!==null;)Sp(n,i,o),o=o.sibling}function Sp(n,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:xn||Ts(o,i);case 6:var u=cn,d=ri;cn=null,fr(n,i,o),cn=u,ri=d,cn!==null&&(ri?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ri?(n=cn,o=o.stateNode,n.nodeType===8?bu(n.parentNode,o):n.nodeType===1&&bu(n,o),po(n)):bu(cn,o.stateNode));break;case 4:u=cn,d=ri,cn=o.stateNode.containerInfo,ri=!0,fr(n,i,o),cn=u,ri=d;break;case 0:case 11:case 14:case 15:if(!xn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&(m&2||m&4)&&hc(o,i,T),d=d.next}while(d!==u)}fr(n,i,o);break;case 1:if(!xn&&(Ts(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Gt(o,i,D)}fr(n,i,o);break;case 21:fr(n,i,o);break;case 22:o.mode&1?(xn=(u=xn)||o.memoizedState!==null,fr(n,i,o),xn=u):fr(n,i,o);break;default:fr(n,i,o)}}function Mp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new pv),i.forEach(function(u){var d=Tv.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function si(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,T=i,D=T;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ri=!1;break e;case 3:cn=D.stateNode.containerInfo,ri=!0;break e;case 4:cn=D.stateNode.containerInfo,ri=!0;break e}D=D.return}if(cn===null)throw Error(t(160));Sp(m,T,d),cn=null,ri=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(te){Gt(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,n),i=i.sibling}function Ep(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),xi(n),u&4){try{Fo(3,n,n.return),$a(3,n)}catch(Ge){Gt(n,n.return,Ge)}try{Fo(5,n,n.return)}catch(Ge){Gt(n,n.return,Ge)}}break;case 1:si(i,n),xi(n),u&512&&o!==null&&Ts(o,o.return);break;case 5:if(si(i,n),xi(n),u&512&&o!==null&&Ts(o,o.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(Ge){Gt(n,n.return,Ge)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,D=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&gt(d,m),it(D,T);var te=it(D,m);for(T=0;T<k.length;T+=2){var xe=k[T],ye=k[T+1];xe==="style"?et(d,ye):xe==="dangerouslySetInnerHTML"?Fe(d,ye):xe==="children"?ft(d,ye):L(d,xe,ye,te)}switch(D){case"input":dt(d,m);break;case"textarea":pe(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?P(d,!!m.multiple,Ne,!1):ge!==!!m.multiple&&(m.defaultValue!=null?P(d,!!m.multiple,m.defaultValue,!0):P(d,!!m.multiple,m.multiple?[]:"",!1))}d[wo]=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 6:if(si(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 3:if(si(i,n),xi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{po(i.containerInfo)}catch(Ge){Gt(n,n.return,Ge)}break;case 4:si(i,n),xi(n);break;case 13:si(i,n),xi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(xc=Z())),u&4&&Mp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(xn=(te=xn)||xe,si(i,n),xn=te):si(i,n),xi(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!xe&&n.mode&1)for(Oe=n,xe=n.child;xe!==null;){for(ye=Oe=xe;Oe!==null;){switch(ge=Oe,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:Fo(4,ge,ge.return);break;case 1:Ts(ge,ge.return);var Ve=ge.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ge){Gt(u,o,Ge)}}break;case 5:Ts(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Ap(ye);continue}}Ne!==null?(Ne.return=ge,Oe=Ne):Ap(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,te?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=ye.stateNode,k=ye.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=$e("display",T))}catch(Ge){Gt(n,n.return,Ge)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ge){Gt(n,n.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:si(i,n),xi(n),u&4&&Mp(n);break;case 21:break;default:si(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(xp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var m=yp(n);gc(n,m,d);break;case 3:case 4:var T=u.stateNode.containerInfo,D=yp(n);mc(n,D,T);break;default:throw Error(t(161))}}catch(k){Gt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function gv(n,i,o){Oe=n,Tp(n)}function Tp(n,i,o){for(var u=(n.mode&1)!==0;Oe!==null;){var d=Oe,m=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Ka;if(!T){var D=d.alternate,k=D!==null&&D.memoizedState!==null||xn;D=Ka;var te=xn;if(Ka=T,(xn=k)&&!te)for(Oe=d;Oe!==null;)T=Oe,k=T.child,T.tag===22&&T.memoizedState!==null?Cp(d):k!==null?(k.return=T,Oe=k):Cp(d);for(;m!==null;)Oe=m,Tp(m),m=m.sibling;Oe=d,Ka=D,xn=te}wp(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,Oe=m):wp(n)}}function wp(n){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:xn||$a(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!xn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ah(i,m,u);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ah(i,T,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var xe=te.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&po(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&pc(i)}catch(ge){Gt(i,i.return,ge)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Ap(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Cp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{$a(4,i)}catch(k){Gt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Gt(i,d,k)}}var m=i.return;try{pc(i)}catch(k){Gt(i,m,k)}break;case 5:var T=i.return;try{pc(i)}catch(k){Gt(i,T,k)}}}catch(k){Gt(i,i.return,k)}if(i===n){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var _v=Math.ceil,Za=b.ReactCurrentDispatcher,_c=b.ReactCurrentOwner,$n=b.ReactCurrentBatchConfig,Et=0,sn=null,Yt=null,fn=0,Gn=0,ws=or(0),Zt=0,Oo=null,Or=0,Qa=0,vc=0,ko=null,Nn=null,xc=0,As=1/0,Ui=null,Ja=!1,yc=null,dr=null,el=!1,hr=null,tl=0,zo=0,Sc=null,nl=-1,il=0;function An(){return Et&6?Z():nl!==-1?nl:nl=Z()}function pr(n){return n.mode&1?Et&2&&fn!==0?fn&-fn:ev.transition!==null?(il===0&&(il=Pt()),il):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:bd(n.type)),n):1}function oi(n,i,o,u){if(50<zo)throw zo=0,Sc=null,Error(t(185));tn(n,o,u),(!(Et&2)||n!==sn)&&(n===sn&&(!(Et&2)&&(Qa|=o),Zt===4&&mr(n,fn)),Fn(n,u),o===1&&Et===0&&!(i.mode&1)&&(As=Z()+500,Da&&lr()))}function Fn(n,i){var o=n.callbackNode;Tn(n,i);var u=pn(n,n===sn?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?J_(bp.bind(null,n)):ph(bp.bind(null,n)),K_(function(){!(Et&6)&&lr()}),o=null;else{switch(mi(u)){case 1:o=Se;break;case 4:o=be;break;case 16:o=Ue;break;case 536870912:o=tt;break;default:o=Ue}o=Op(o,Rp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Rp(n,i){if(nl=-1,il=0,Et&6)throw Error(t(327));var o=n.callbackNode;if(Cs()&&n.callbackNode!==o)return null;var u=pn(n,n===sn?fn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=rl(n,u);else{i=u;var d=Et;Et|=2;var m=Dp();(sn!==n||fn!==i)&&(Ui=null,As=Z()+500,zr(n,i));do try{yv();break}catch(D){Pp(n,D)}while(!0);zu(),Za.current=m,Et=d,Yt!==null?i=0:(sn=null,fn=0,i=Zt)}if(i!==0){if(i===2&&(d=Ai(n),d!==0&&(u=d,i=Mc(n,d))),i===1)throw o=Oo,zr(n,0),mr(n,u),Fn(n,Z()),o;if(i===6)mr(n,u);else{if(d=n.current.alternate,!(u&30)&&!vv(d)&&(i=rl(n,u),i===2&&(m=Ai(n),m!==0&&(u=m,i=Mc(n,m))),i===1))throw o=Oo,zr(n,0),mr(n,u),Fn(n,Z()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Nn,Ui);break;case 3:if(mr(n,u),(u&130023424)===u&&(i=xc+500-Z(),10<i)){if(pn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){An(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ru(Br.bind(null,n,Nn,Ui),i);break}Br(n,Nn,Ui);break;case 4:if(mr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-ot(u);m=1<<T,T=i[T],T>d&&(d=T),u&=~m}if(u=d,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*_v(u/1960))-u,10<u){n.timeoutHandle=Ru(Br.bind(null,n,Nn,Ui),u);break}Br(n,Nn,Ui);break;case 5:Br(n,Nn,Ui);break;default:throw Error(t(329))}}}return Fn(n,Z()),n.callbackNode===o?Rp.bind(null,n):null}function Mc(n,i){var o=ko;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Nn,Nn=o,i!==null&&Ec(i)),n}function Ec(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function vv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ti(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~vc,i&=~Qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),u=1<<o;n[o]=-1,i&=~u}}function bp(n){if(Et&6)throw Error(t(327));Cs();var i=pn(n,0);if(!(i&1))return Fn(n,Z()),null;var o=rl(n,i);if(n.tag!==0&&o===2){var u=Ai(n);u!==0&&(i=u,o=Mc(n,u))}if(o===1)throw o=Oo,zr(n,0),mr(n,i),Fn(n,Z()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Nn,Ui),Fn(n,Z()),null}function Tc(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(As=Z()+500,Da&&lr())}}function kr(n){hr!==null&&hr.tag===0&&!(Et&6)&&Cs();var i=Et;Et|=1;var o=$n.transition,u=Mt;try{if($n.transition=null,Mt=1,n)return n()}finally{Mt=u,$n.transition=o,Et=i,!(Et&6)&&lr()}}function wc(){Gn=ws.current,Nt(ws)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,q_(o)),Yt!==null)for(o=Yt.return;o!==null;){var u=o;switch(Uu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ba();break;case 3:Ms(),Nt(Ln),Nt(gn),Yu();break;case 5:Xu(u);break;case 4:Ms();break;case 13:Nt(zt);break;case 19:Nt(zt);break;case 10:Bu(u.type._context);break;case 22:case 23:wc()}o=o.return}if(sn=n,Yt=n=gr(n.current,null),fn=Gn=i,Zt=0,Oo=null,vc=Qa=Or=0,Nn=ko=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var T=m.next;m.next=d,u.next=T}o.pending=u}Ur=null}return n}function Pp(n,i){do{var o=Yt;try{if(zu(),Va.current=Xa,Ha){for(var u=Bt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ha=!1}if(Fr=0,rn=$t=Bt=null,Do=!1,Lo=0,_c.current=null,o===null||o.return===null){Zt=1,Oo=i,Yt=null;break}e:{var m=n,T=o.return,D=o,k=i;if(i=fn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,xe=D,ye=xe.tag;if(!(xe.mode&1)&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=tp(T);if(Ne!==null){Ne.flags&=-257,np(Ne,T,D,m,i),Ne.mode&1&&ep(m,te,i),i=Ne,k=te;var Ve=i.updateQueue;if(Ve===null){var Ge=new Set;Ge.add(k),i.updateQueue=Ge}else Ve.add(k);break e}else{if(!(i&1)){ep(m,te,i),Ac();break e}k=Error(t(426))}}else if(kt&&D.mode&1){var Xt=tp(T);if(Xt!==null){!(Xt.flags&65536)&&(Xt.flags|=256),np(Xt,T,D,m,i),Ou(Es(k,D));break e}}m=k=Es(k,D),Zt!==4&&(Zt=2),ko===null?ko=[m]:ko.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=Qh(m,k,i);wh(m,$);break e;case 1:D=k;var V=m.type,Q=m.stateNode;if(!(m.flags&128)&&(typeof V.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(dr===null||!dr.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=Jh(m,D,i);wh(m,Ee);break e}}m=m.return}while(m!==null)}Ip(o)}catch(je){i=je,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function Dp(){var n=Za.current;return Za.current=Xa,n===null?Xa:n}function Ac(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||!(Or&268435455)&&!(Qa&268435455)||mr(sn,fn)}function rl(n,i){var o=Et;Et|=2;var u=Dp();(sn!==n||fn!==i)&&(Ui=null,zr(n,i));do try{xv();break}catch(d){Pp(n,d)}while(!0);if(zu(),Et=o,Za.current=u,Yt!==null)throw Error(t(261));return sn=null,fn=0,Zt}function xv(){for(;Yt!==null;)Lp(Yt)}function yv(){for(;Yt!==null&&!X();)Lp(Yt)}function Lp(n){var i=Fp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Ip(n):Yt=i,_c.current=null}function Ip(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=hv(o,i),o!==null){o.flags&=32767,Yt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,Yt=null;return}}else if(o=dv(o,i,Gn),o!==null){Yt=o;return}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Br(n,i,o){var u=Mt,d=$n.transition;try{$n.transition=null,Mt=1,Sv(n,i,o,u)}finally{$n.transition=d,Mt=u}return null}function Sv(n,i,o,u){do Cs();while(hr!==null);if(Et&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(un(n,m),n===sn&&(Yt=sn=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||el||(el=!0,Op(Ue,function(){return Cs(),null})),m=(o.flags&15990)!==0,o.subtreeFlags&15990||m){m=$n.transition,$n.transition=null;var T=Mt;Mt=1;var D=Et;Et|=4,_c.current=null,mv(n,o),Ep(o,n),V_(Au),ma=!!wu,Au=wu=null,n.current=o,gv(o),ee(),Et=D,Mt=T,$n.transition=m}else n.current=o;if(el&&(el=!1,hr=n,tl=d),m=n.pendingLanes,m===0&&(dr=null),vt(o.stateNode),Fn(n,Z()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ja)throw Ja=!1,n=yc,yc=null,n;return tl&1&&n.tag!==0&&Cs(),m=n.pendingLanes,m&1?n===Sc?zo++:(zo=0,Sc=n):zo=0,lr(),null}function Cs(){if(hr!==null){var n=mi(tl),i=$n.transition,o=Mt;try{if($n.transition=null,Mt=16>n?16:n,hr===null)var u=!1;else{if(n=hr,hr=null,tl=0,Et&6)throw Error(t(331));var d=Et;for(Et|=4,Oe=n.current;Oe!==null;){var m=Oe,T=m.child;if(Oe.flags&16){var D=m.deletions;if(D!==null){for(var k=0;k<D.length;k++){var te=D[k];for(Oe=te;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:Fo(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,Oe=ye;else for(;Oe!==null;){xe=Oe;var ge=xe.sibling,Ne=xe.return;if(vp(xe),xe===te){Oe=null;break}if(ge!==null){ge.return=Ne,Oe=ge;break}Oe=Ne}}}var Ve=m.alternate;if(Ve!==null){var Ge=Ve.child;if(Ge!==null){Ve.child=null;do{var Xt=Ge.sibling;Ge.sibling=null,Ge=Xt}while(Ge!==null)}}Oe=m}}if(m.subtreeFlags&2064&&T!==null)T.return=m,Oe=T;else e:for(;Oe!==null;){if(m=Oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Fo(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Oe=$;break e}Oe=m.return}}var V=n.current;for(Oe=V;Oe!==null;){T=Oe;var Q=T.child;if(T.subtreeFlags&2064&&Q!==null)Q.return=T,Oe=Q;else e:for(T=V;Oe!==null;){if(D=Oe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:$a(9,D)}}catch(je){Gt(D,D.return,je)}if(D===T){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(Et=d,lr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Je,n)}catch{}u=!0}return u}finally{Mt=o,$n.transition=i}}return!1}function Up(n,i,o){i=Es(o,i),i=Qh(n,i,1),n=cr(n,i,1),i=An(),n!==null&&(tn(n,1,i),Fn(n,i))}function Gt(n,i,o){if(n.tag===3)Up(n,n,o);else for(;i!==null;){if(i.tag===3){Up(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(dr===null||!dr.has(u))){n=Es(o,n),n=Jh(i,n,1),i=cr(i,n,1),n=An(),i!==null&&(tn(i,1,n),Fn(i,n));break}}i=i.return}}function Mv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&o,sn===n&&(fn&o)===o&&(Zt===4||Zt===3&&(fn&130023424)===fn&&500>Z()-xc?zr(n,0):vc|=o),Fn(n,i)}function Np(n,i){i===0&&(n.mode&1?(i=Ht,Ht<<=1,!(Ht&130023424)&&(Ht=4194304)):i=1);var o=An();n=Di(n,i),n!==null&&(tn(n,i,o),Fn(n,o))}function Ev(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Np(n,o)}function Tv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Np(n,o)}var Fp;Fp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Un=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Un=!1,fv(n,i,o);Un=!!(n.flags&131072)}else Un=!1,kt&&i.flags&1048576&&mh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;qa(n,i),n=i.pendingProps;var d=ms(i,gn.current);Ss(i,o),d=$u(null,i,u,n,d,o);var m=Zu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(u)?(m=!0,Pa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gu(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,ic(i,u,n,o),i=ac(null,i,u,!0,m,o)):(i.tag=0,kt&&m&&Iu(i),wn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(qa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Av(u),n=ii(u,n),d){case 0:i=oc(null,i,u,n,o);break e;case 1:i=lp(null,i,u,n,o);break e;case 11:i=ip(null,i,u,n,o);break e;case 14:i=rp(null,i,u,ii(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),oc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),lp(n,i,u,d,o);case 3:e:{if(up(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Th(n,i),za(i,u,null,o);var T=i.memoizedState;if(u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Es(Error(t(423)),i),i=cp(n,i,u,o,d);break e}else if(u!==d){d=Es(Error(t(424)),i),i=cp(n,i,u,o,d);break e}else for(Hn=sr(i.stateNode.containerInfo.firstChild),Vn=i,kt=!0,ni=null,o=Mh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(vs(),u===d){i=Ii(n,i,o);break e}wn(n,i,u,o)}i=i.child}return i;case 5:return Ch(i),n===null&&Fu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Cu(u,d)?T=null:m!==null&&Cu(u,m)&&(i.flags|=32),ap(n,i),wn(n,i,T,o),i.child;case 6:return n===null&&Fu(i),null;case 13:return fp(n,i,o);case 4:return Wu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=xs(i,null,u,o):wn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),ip(n,i,u,d,o);case 7:return wn(n,i,i.pendingProps,o),i.child;case 8:return wn(n,i,i.pendingProps.children,o),i.child;case 12:return wn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Lt(Fa,u._currentValue),u._currentValue=T,m!==null)if(ti(m.value,T)){if(m.children===d.children&&!Ln.current){i=Ii(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var D=m.dependencies;if(D!==null){T=m.child;for(var k=D.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=Li(-1,o&-o),k.tag=2;var te=m.updateQueue;if(te!==null){te=te.shared;var xe=te.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),te.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),Vu(m.return,o,i),D.lanes|=o;break}k=k.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,D=T.alternate,D!==null&&(D.lanes|=o),Vu(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}wn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ss(i,o),d=qn(d),u=u(d),i.flags|=1,wn(n,i,u,o),i.child;case 14:return u=i.type,d=ii(u,i.pendingProps),d=ii(u.type,d),rp(n,i,u,d,o);case 15:return sp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),qa(n,i),i.tag=1,In(u)?(n=!0,Pa(i)):n=!1,Ss(i,o),$h(i,u,d),ic(i,u,d,o),ac(null,i,u,!0,n,o);case 19:return hp(n,i,o);case 22:return op(n,i,o)}throw Error(t(156,i.tag))};function Op(n,i){return da(n,i)}function wv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,u){return new wv(n,i,o,u)}function Cc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Av(n){if(typeof n=="function")return Cc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===de)return 14}return 2}function gr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function sl(n,i,o,u,d,m){var T=2;if(u=n,typeof n=="function")Cc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return Vr(o.children,d,m,i);case G:T=8,d|=8;break;case R:return n=Zn(12,o,i,d|2),n.elementType=R,n.lanes=m,n;case K:return n=Zn(13,o,i,d),n.elementType=K,n.lanes=m,n;case ue:return n=Zn(19,o,i,d),n.elementType=ue,n.lanes=m,n;case ce:return ol(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:T=10;break e;case B:T=9;break e;case ae:T=11;break e;case de:T=14;break e;case oe:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(T,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Vr(n,i,o,u){return n=Zn(7,n,u,i),n.lanes=o,n}function ol(n,i,o,u){return n=Zn(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Rc(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function bc(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Cv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Pc(n,i,o,u,d,m,T,D,k){return n=new Cv(n,i,o,D,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Zn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(m),n}function Rv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function kp(n){if(!n)return ar;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(In(o))return dh(n,o,i)}return i}function zp(n,i,o,u,d,m,T,D,k){return n=Pc(o,u,!0,n,d,m,T,D,k),n.context=kp(null),o=n.current,u=An(),d=pr(o),m=Li(u,d),m.callback=i??null,cr(o,m,d),n.current.lanes=d,tn(n,d,u),Fn(n,u),n}function al(n,i,o,u){var d=i.current,m=An(),T=pr(d);return o=kp(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(m,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=cr(d,i,T),n!==null&&(oi(n,d,T,m),ka(n,d,T)),T}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Dc(n,i){Bp(n,i),(n=n.alternate)&&Bp(n,i)}var Vp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lc(n){this._internalRoot=n}ul.prototype.render=Lc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));al(n,i,null,null)},ul.prototype.unmount=Lc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){al(null,n,null,null)}),i[Ci]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Td();n={blockedOn:null,target:n,priority:i};for(var o=0;o<nr.length&&i!==0&&i<nr[o].priority;o++);nr.splice(o,0,n),o===0&&Cd(n)}};function Ic(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function bv(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var te=ll(T);m.call(te)}}var T=zp(i,u,n,0,null,!1,!1,"",Hp);return n._reactRootContainer=T,n[Ci]=T.current,Eo(n.nodeType===8?n.parentNode:n),kr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var te=ll(k);D.call(te)}}var k=Pc(n,0,!1,null,null,!1,!1,"",Hp);return n._reactRootContainer=k,n[Ci]=k.current,Eo(n.nodeType===8?n.parentNode:n),kr(function(){al(i,k,o,u)}),k}function fl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var D=d;d=function(){var k=ll(T);D.call(k)}}al(i,T,n,d)}else T=bv(o,i,n,d,u);return ll(T)}Md=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=_t(i.pendingLanes);o!==0&&(nn(i,o|1),Fn(i,Z()),!(Et&6)&&(As=Z()+500,lr()))}break;case 13:kr(function(){var u=Di(n,1);if(u!==null){var d=An();oi(u,n,1,d)}}),Dc(n,1)}},ru=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var o=An();oi(i,n,134217728,o)}Dc(n,134217728)}},Ed=function(n){if(n.tag===13){var i=pr(n),o=Di(n,i);if(o!==null){var u=An();oi(o,n,i,u)}Dc(n,i)}},Td=function(){return Mt},wd=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},Re=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ra(u);if(!d)throw Error(t(90));lt(u),dt(u,d)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&P(n,!!o.multiple,i,!1)}},It=Tc,Kt=kr;var Pv={usingClientEntryPoint:!1,Events:[Ao,hs,Ra,Le,rt,Tc]},Bo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dv={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ca(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Je=dl.inject(Dv),He=dl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv,On.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ic(i))throw Error(t(200));return Rv(n,i,null,o)},On.createRoot=function(n,i){if(!Ic(n))throw Error(t(299));var o=!1,u="",d=Vp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Pc(n,1,!1,null,null,o,!1,u,d),n[Ci]=i.current,Eo(n.nodeType===8?n.parentNode:n),new Lc(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ca(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return kr(n)},On.hydrate=function(n,i,o){if(!cl(i))throw Error(t(200));return fl(null,n,i,!0,o)},On.hydrateRoot=function(n,i,o){if(!Ic(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",T=Vp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=zp(i,null,n,1,o??null,d,!1,m,T),n[Ci]=i.current,Eo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ul(i)},On.render=function(n,i,o){if(!cl(i))throw Error(t(200));return fl(null,n,i,!1,o)},On.unmountComponentAtNode=function(n){if(!cl(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},On.unstable_batchedUpdates=Tc,On.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,o,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var $p;function Bv(){if($p)return Fc.exports;$p=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fc.exports=zv(),Fc.exports}var Zp;function Vv(){if(Zp)return hl;Zp=1;var s=Bv();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var Hv=Vv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="172",Ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gv=0,Qp=1,Wv=2,gg=1,_g=2,Vi=3,ji=0,zn=1,Hi=2,Ar=0,qs=1,Jp=2,em=3,tm=4,Xv=5,Kr=100,jv=101,Yv=102,qv=103,Kv=104,$v=200,Zv=201,Qv=202,Jv=203,yf=204,Sf=205,e0=206,t0=207,n0=208,i0=209,r0=210,s0=211,o0=212,a0=213,l0=214,Mf=0,Ef=1,Tf=2,Zs=3,wf=4,Af=5,Cf=6,Rf=7,ud=0,u0=1,c0=2,Cr=0,f0=1,d0=2,h0=3,p0=4,m0=5,g0=6,_0=7,vg=300,Qs=301,Js=302,bf=303,Pf=304,tu=306,eo=1e3,Zr=1001,Df=1002,di=1003,v0=1004,pl=1005,Si=1006,zc=1007,Qr=1008,Yi=1009,xg=1010,yg=1011,Qo=1012,cd=1013,es=1014,Gi=1015,ta=1016,fd=1017,dd=1018,to=1020,Sg=35902,Mg=1021,Eg=1022,fi=1023,Tg=1024,wg=1025,Ks=1026,no=1027,Ag=1028,hd=1029,Cg=1030,pd=1031,md=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,Lf=35840,If=35841,Uf=35842,Nf=35843,Ff=36196,Of=37492,kf=37496,zf=37808,Bf=37809,Vf=37810,Hf=37811,Gf=37812,Wf=37813,Xf=37814,jf=37815,Yf=37816,qf=37817,Kf=37818,$f=37819,Zf=37820,Qf=37821,Xl=36492,Jf=36494,ed=36495,Rg=36283,td=36284,nd=36285,id=36286,x0=3200,y0=3201,bg=0,S0=1,wr="",dn="srgb",io="srgb-linear",ql="linear",Rt="srgb",Rs=7680,nm=519,M0=512,E0=513,T0=514,Pg=515,w0=516,A0=517,C0=518,R0=519,im=35044,rm="300 es",Wi=2e3,Kl=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sm=1234567;const $o=Math.PI/180,Jo=180/Math.PI;function so(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function gd(s,e){return(s%e+e)%e}function b0(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function P0(s,e,t){return s!==e?(t-s)/(e-s):0}function Zo(s,e,t){return(1-t)*s+t*e}function D0(s,e,t,r){return Zo(s,e,1-Math.exp(-t*r))}function L0(s,e=1){return e-Math.abs(gd(s,e*2)-e)}function I0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function U0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function N0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function F0(s,e){return s+Math.random()*(e-s)}function O0(s){return s*(.5-Math.random())}function k0(s){s!==void 0&&(sm=s);let e=sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function z0(s){return s*$o}function B0(s){return s*Jo}function V0(s){return(s&s-1)===0&&s!==0}function H0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function G0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function W0(s,e,t,r,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),g=c((e+r)/2),_=l((e-r)/2),x=c((e-r)/2),S=l((r-e)/2),M=c((r-e)/2);switch(a){case"XYX":s.set(f*g,h*_,h*x,f*p);break;case"YZY":s.set(h*x,f*g,h*_,f*p);break;case"ZXZ":s.set(h*_,h*x,f*g,f*p);break;case"XZX":s.set(f*g,h*M,h*S,f*p);break;case"YXY":s.set(h*S,f*g,h*M,f*p);break;case"ZYZ":s.set(h*M,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Hs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const X0={DEG2RAD:$o,RAD2DEG:Jo,generateUUID:so,clamp:mt,euclideanModulo:gd,mapLinear:b0,inverseLerp:P0,lerp:Zo,damp:D0,pingpong:L0,smoothstep:I0,smootherstep:U0,randInt:N0,randFloat:F0,randFloatSpread:O0,seededRandom:k0,degToRad:z0,radToDeg:B0,isPowerOfTwo:V0,ceilPowerOfTwo:H0,floorPowerOfTwo:G0,setQuaternionFromProperEuler:W0,normalize:Cn,denormalize:Hs};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,r,a,l,c,f,h,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],_=r[7],x=r[2],S=r[5],M=r[8],E=a[0],y=a[3],v=a[6],I=a[1],L=a[4],b=a[7],W=a[2],N=a[5],F=a[8];return l[0]=c*E+f*I+h*W,l[3]=c*y+f*L+h*N,l[6]=c*v+f*b+h*F,l[1]=p*E+g*I+_*W,l[4]=p*y+g*L+_*N,l[7]=p*v+g*b+_*F,l[2]=x*E+S*I+M*W,l[5]=x*y+S*L+M*N,l[8]=x*v+S*b+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=g*c-f*p,x=f*h-g*l,S=p*l-c*h,M=t*_+r*x+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(a*p-g*r)*E,e[2]=(f*r-a*c)*E,e[3]=x*E,e[4]=(g*t-a*h)*E,e[5]=(a*l-f*t)*E,e[6]=S*E,e[7]=(r*h-p*t)*E,e[8]=(c*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new at;function Dg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function j0(){const s=ea("canvas");return s.style.display="block",s}const om={};function Gs(s){s in om||(om[s]=!0,console.warn(s))}function Y0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function q0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function K0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const am=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){const s={enabled:!0,workingColorSpace:io,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Rt&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Rt&&(a.r=$s(a.r),a.g=$s(a.g),a.b=$s(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wr?ql:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[io]:{primaries:e,whitePoint:r,transfer:ql,toXYZ:am,fromXYZ:lm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}const xt=$0();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class Z0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=ea("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Xi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q0=0;class Lg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Vc(a[c].image)):l.push(Vc(a[c]))}else l=Vc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Z0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J0=0;class Pn extends is{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,r=Zr,a=Zr,l=Si,c=Qr,f=fi,h=Yi,p=Pn.DEFAULT_ANISOTROPY,g=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=so(),this.name="",this.source=new Lg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=vg;Pn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],g=h[4],_=h[8],x=h[1],S=h[5],M=h[9],E=h[2],y=h[6],v=h[10];if(Math.abs(g-x)<.01&&Math.abs(_-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+E)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,b=(S+1)/2,W=(v+1)/2,N=(g+x)/4,F=(_+E)/4,G=(M+y)/4;return L>b&&L>W?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=N/r,l=F/r):b>W?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=N/a,l=G/a):W<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),r=F/l,a=G/l),this.set(r,a,l,t),this}let I=Math.sqrt((y-M)*(y-M)+(_-E)*(_-E)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(y-M)/I,this.y=(_-E)/I,this.z=(x-g)/I,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ex extends is{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Lg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends ex{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ig extends Pn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tx extends Pn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];const x=l[c+0],S=l[c+1],M=l[c+2],E=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(_!==E||h!==x||p!==S||g!==M){let y=1-f;const v=h*x+p*S+g*M+_*E,I=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const W=Math.sqrt(L),N=Math.atan2(W,v*I);y=Math.sin(y*N)/W,f=Math.sin(f*N)/W}const b=f*I;if(h=h*y+x*b,p=p*y+S*b,g=g*y+M*b,_=_*y+E*b,y===1-f){const W=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=W,p*=W,g*=W,_*=W}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],g=r[a+3],_=l[c],x=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*_+h*S-p*x,e[t+1]=h*M+g*x+p*_-f*S,e[t+2]=p*M+g*S+f*x-h*_,e[t+3]=g*M-f*_-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(a/2),_=f(l/2),x=h(r/2),S=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"YXZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"ZXY":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"ZYX":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"YZX":this._x=x*g*_+p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_-x*S*M;break;case"XZY":this._x=x*g*_-p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],_=t[10],x=r+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-a*f,this._w=c*g-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),_=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),g=2*(f*t-l*a),_=2*(l*r-c*t);return this.x=t+h*p+c*_-f*g,this.y=r+h*g+f*p-l*_,this.z=a+h*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new q,um=new ns;class oo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(l,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),gl.subVectors(this.max,Ho),Ps.subVectors(e.a,Ho),Ds.subVectors(e.b,Ho),Ls.subVectors(e.c,Ho),vr.subVectors(Ds,Ps),xr.subVectors(Ls,Ds),Hr.subVectors(Ps,Ls);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Hr.z,Hr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Hr.z,0,-Hr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Hr.y,Hr.x,0];return!Gc(t,Ps,Ds,Ls,gl)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,Ps,Ds,Ls,gl))?!1:(_l.crossVectors(vr,xr),t=[_l.x,_l.y,_l.z],Gc(t,Ps,Ds,Ls,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new q,new q,new q,new q,new q,new q,new q,new q],ai=new q,ml=new oo,Ps=new q,Ds=new q,Ls=new q,vr=new q,xr=new q,Hr=new q,Ho=new q,gl=new q,_l=new q,Gr=new q;function Gc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Gr.fromArray(s,l);const f=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),h=e.dot(Gr),p=t.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const nx=new oo,Go=new q,Wc=new q;class na{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):nx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Go,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Wc)),this.expandByPoint(Go.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new q,Xc=new q,vl=new q,yr=new q,jc=new q,xl=new q,Yc=new q;class ia{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Xc.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Xc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(vl),f=yr.dot(this.direction),h=-yr.dot(vl),p=yr.lengthSq(),g=Math.abs(1-c*c);let _,x,S,M;if(g>0)if(_=c*h-f,x=c*f-h,M=l*g,_>=0)if(x>=-M)if(x<=M){const E=1/g;_*=E,x*=E,S=_*(_+c*x+2*f)+x*(c*_+x+2*h)+p}else x=l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;else x=-l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;else x<=-M?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p):x<=M?(_=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Xc).addScaledVector(vl,x),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),a=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,a,l){jc.subVectors(t,e),xl.subVectors(r,e),Yc.crossVectors(jc,xl);let c=this.direction.dot(Yc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;yr.subVectors(this.origin,e);const h=f*this.direction.dot(xl.crossVectors(yr,xl));if(h<0)return null;const p=f*this.direction.dot(jc.cross(yr));if(p<0||h+p>c)return null;const g=-f*yr.dot(Yc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,r,a,l,c,f,h,p,g,_,x,S,M,E,y){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,g,_,x,S,M,E,y)}set(e,t,r,a,l,c,f,h,p,g,_,x,S,M,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),c=1/Is.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*_,M=f*g,E=f*_;t[0]=h*g,t[4]=-h*_,t[8]=p,t[1]=S+M*p,t[5]=x-E*p,t[9]=-f*h,t[2]=E-x*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*_,M=p*g,E=p*_;t[0]=x+E*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=E+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*_,M=p*g,E=p*_;t[0]=x-E*f,t[4]=-c*_,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=E-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*_,M=f*g,E=f*_;t[0]=h*g,t[4]=M*p-S,t[8]=x*p+E,t[1]=h*_,t[5]=E*p+x,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,M=f*h,E=f*p;t[0]=h*g,t[4]=E-x*_,t[8]=M*_+S,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*_+M,t[10]=x-E*_}else if(e.order==="XZY"){const x=c*h,S=c*p,M=f*h,E=f*p;t[0]=h*g,t[4]=-_,t[8]=p*g,t[1]=x*_+E,t[5]=c*g,t[9]=S*_-M,t[2]=M*_-S,t[6]=f*g,t[10]=E*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,rx)}lookAt(e,t,r){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Sr.crossVectors(r,Wn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Sr.crossVectors(r,Wn)),Sr.normalize(),yl.crossVectors(Wn,Sr),a[0]=Sr.x,a[4]=yl.x,a[8]=Wn.x,a[1]=Sr.y,a[5]=yl.y,a[9]=Wn.y,a[2]=Sr.z,a[6]=yl.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],_=r[5],x=r[9],S=r[13],M=r[2],E=r[6],y=r[10],v=r[14],I=r[3],L=r[7],b=r[11],W=r[15],N=a[0],F=a[4],G=a[8],R=a[12],C=a[1],B=a[5],ae=a[9],K=a[13],ue=a[2],de=a[6],oe=a[10],ce=a[14],O=a[3],le=a[7],se=a[11],U=a[15];return l[0]=c*N+f*C+h*ue+p*O,l[4]=c*F+f*B+h*de+p*le,l[8]=c*G+f*ae+h*oe+p*se,l[12]=c*R+f*K+h*ce+p*U,l[1]=g*N+_*C+x*ue+S*O,l[5]=g*F+_*B+x*de+S*le,l[9]=g*G+_*ae+x*oe+S*se,l[13]=g*R+_*K+x*ce+S*U,l[2]=M*N+E*C+y*ue+v*O,l[6]=M*F+E*B+y*de+v*le,l[10]=M*G+E*ae+y*oe+v*se,l[14]=M*R+E*K+y*ce+v*U,l[3]=I*N+L*C+b*ue+W*O,l[7]=I*F+L*B+b*de+W*le,l[11]=I*G+L*ae+b*oe+W*se,l[15]=I*R+L*K+b*ce+W*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],_=e[6],x=e[10],S=e[14],M=e[3],E=e[7],y=e[11],v=e[15];return M*(+l*h*_-a*p*_-l*f*x+r*p*x+a*f*S-r*h*S)+E*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*g-l*h*g)+y*(+t*p*_-t*f*S-l*c*_+r*c*S+l*f*g-r*p*g)+v*(-a*f*g-t*h*_+t*f*x+a*c*_-r*c*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=e[9],x=e[10],S=e[11],M=e[12],E=e[13],y=e[14],v=e[15],I=_*y*p-E*x*p+E*h*S-f*y*S-_*h*v+f*x*v,L=M*x*p-g*y*p-M*h*S+c*y*S+g*h*v-c*x*v,b=g*E*p-M*_*p+M*f*S-c*E*S-g*f*v+c*_*v,W=M*_*h-g*E*h-M*f*x+c*E*x+g*f*y-c*_*y,N=t*I+r*L+a*b+l*W;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=I*F,e[1]=(E*x*l-_*y*l-E*a*S+r*y*S+_*a*v-r*x*v)*F,e[2]=(f*y*l-E*h*l+E*a*p-r*y*p-f*a*v+r*h*v)*F,e[3]=(_*h*l-f*x*l-_*a*p+r*x*p+f*a*S-r*h*S)*F,e[4]=L*F,e[5]=(g*y*l-M*x*l+M*a*S-t*y*S-g*a*v+t*x*v)*F,e[6]=(M*h*l-c*y*l-M*a*p+t*y*p+c*a*v-t*h*v)*F,e[7]=(c*x*l-g*h*l+g*a*p-t*x*p-c*a*S+t*h*S)*F,e[8]=b*F,e[9]=(M*_*l-g*E*l-M*r*S+t*E*S+g*r*v-t*_*v)*F,e[10]=(c*E*l-M*f*l+M*r*p-t*E*p-c*r*v+t*f*v)*F,e[11]=(g*f*l-c*_*l-g*r*p+t*_*p+c*r*S-t*f*S)*F,e[12]=W*F,e[13]=(g*E*a-M*_*a+M*r*x-t*E*x-g*r*y+t*_*y)*F,e[14]=(M*f*a-c*E*a-M*r*h+t*E*h+c*r*y-t*f*y)*F,e[15]=(c*_*a-g*f*a+g*r*h-t*_*h-c*r*x+t*f*x)*F,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+r,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,_=f+f,x=l*p,S=l*g,M=l*_,E=c*g,y=c*_,v=f*_,I=h*p,L=h*g,b=h*_,W=r.x,N=r.y,F=r.z;return a[0]=(1-(E+v))*W,a[1]=(S+b)*W,a[2]=(M-L)*W,a[3]=0,a[4]=(S-b)*N,a[5]=(1-(x+v))*N,a[6]=(y+I)*N,a[7]=0,a[8]=(M+L)*F,a[9]=(y-I)*F,a[10]=(1-(x+E))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Is.set(a[0],a[1],a[2]).length();const c=Is.set(a[4],a[5],a[6]).length(),f=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const p=1/l,g=1/c,_=1/f;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,t.setFromRotationMatrix(li),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=Wi){const h=this.elements,p=2*l/(t-e),g=2*l/(r-a),_=(t+e)/(t-e),x=(r+a)/(r-a);let S,M;if(f===Wi)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Kl)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=Wi){const h=this.elements,p=1/(t-e),g=1/(r-a),_=1/(c-l),x=(t+e)*p,S=(r+a)*g;let M,E;if(f===Wi)M=(c+l)*_,E=-2*_;else if(f===Kl)M=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Is=new q,li=new Ft,ix=new q(0,0,0),rx=new q(1,1,1),Sr=new q,yl=new q,Wn=new q,cm=new Ft,fm=new ns;class Ei{constructor(e=0,t=0,r=0,a=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],_=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class _d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sx=0;const dm=new q,Us=new ns,Oi=new Ft,Sl=new q,Wo=new q,ox=new q,ax=new ns,hm=new q(1,0,0),pm=new q(0,1,0),mm=new q(0,0,1),gm={type:"added"},lx={type:"removed"},Ns={type:"childadded",child:null},qc={type:"childremoved",child:null};class ln extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new q,t=new Ei,r=new ns,a=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ft},normalMatrix:{value:new at}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Wo,Sl,this.up):Oi.lookAt(Sl,Wo,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(Oi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lx),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,ox),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=a,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new q(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new q,ki=new q,Kc=new q,zi=new q,Fs=new q,Os=new q,_m=new q,$c=new q,Zc=new q,Qc=new q,Jc=new Wt,ef=new Wt,tf=new Wt;class ci{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ui.subVectors(e,t),a.cross(ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ui.subVectors(a,t),ki.subVectors(r,t),Kc.subVectors(e,t);const c=ui.dot(ui),f=ui.dot(ki),h=ui.dot(Kc),p=ki.dot(ki),g=ki.dot(Kc),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(p*h-f*g)*x,M=(c*g-f*h)*x;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,zi.x),h.addScaledVector(c,zi.y),h.addScaledVector(f,zi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return Jc.setScalar(0),ef.setScalar(0),tf.setScalar(0),Jc.fromBufferAttribute(e,t),ef.fromBufferAttribute(e,r),tf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Jc,l.x),c.addScaledVector(ef,l.y),c.addScaledVector(tf,l.z),c}static isFrontFacing(e,t,r,a){return ui.subVectors(r,t),ki.subVectors(e,t),ui.cross(ki).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ui.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return ci.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Fs.subVectors(a,r),Os.subVectors(l,r),$c.subVectors(e,r);const h=Fs.dot($c),p=Os.dot($c);if(h<=0&&p<=0)return t.copy(r);Zc.subVectors(e,a);const g=Fs.dot(Zc),_=Os.dot(Zc);if(g>=0&&_<=g)return t.copy(a);const x=h*_-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Fs,c);Qc.subVectors(e,l);const S=Fs.dot(Qc),M=Os.dot(Qc);if(M>=0&&S<=M)return t.copy(l);const E=S*p-h*M;if(E<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Os,f);const y=g*M-S*_;if(y<=0&&_-g>=0&&S-M>=0)return _m.subVectors(l,a),f=(_-g)/(_-g+(S-M)),t.copy(a).addScaledVector(_m,f);const v=1/(y+E+x);return c=E*v,f=x*v,t.copy(r).addScaledVector(Fs,c).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function nf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=xt.workingColorSpace){return this.r=e,this.g=t,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=xt.workingColorSpace){if(e=gd(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=nf(c,l,e+1/3),this.g=nf(c,l,e),this.b=nf(c,l,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,t=dn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const r=Ug[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return xt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(mt(Sn.r*255,0,255))*65536+Math.round(mt(Sn.g*255,0,255))*256+Math.round(mt(Sn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,a=Sn.g,l=Sn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=g<=.5?_/(c+f):_/(2-c-f),c){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=dn){xt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,a=Sn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Ml);const r=Zo(Mr.h,Ml.h,t),a=Zo(Mr.s,Ml.s,t),l=Zo(Mr.l,Ml.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new ct;ct.NAMES=Ug;let ux=0;class qi extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=so(),this.name="",this.type="Material",this.blending=qs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==ji&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yf&&(r.blendSrc=this.blendSrc),this.blendDst!==Sf&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ng extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new q,El=new st;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=im,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Hs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array),a=Cn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array),a=Cn(a,this.array),l=Cn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}}class Fg extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Og extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class bn extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let cx=0;const Qn=new Ft,rf=new ln,ks=new q,Xn=new oo,Xo=new oo,an=new q;class hi extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dg(e)?Og:Fg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new at().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new bn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Xo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Xn.min,Xo.min),Xn.expandByPoint(an),an.addVectors(Xn.max,Xo.max),Xn.expandByPoint(an)):(Xn.expandByPoint(Xo.min),Xn.expandByPoint(Xo.max))}Xn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)an.fromBufferAttribute(f,p),h&&(ks.fromBufferAttribute(e,p),an.add(ks)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<r.count;G++)f[G]=new q,h[G]=new q;const p=new q,g=new q,_=new q,x=new st,S=new st,M=new st,E=new q,y=new q;function v(G,R,C){p.fromBufferAttribute(r,G),g.fromBufferAttribute(r,R),_.fromBufferAttribute(r,C),x.fromBufferAttribute(l,G),S.fromBufferAttribute(l,R),M.fromBufferAttribute(l,C),g.sub(p),_.sub(p),S.sub(x),M.sub(x);const B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(B),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(B),f[G].add(E),f[R].add(E),f[C].add(E),h[G].add(y),h[R].add(y),h[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,R=I.length;G<R;++G){const C=I[G],B=C.start,ae=C.count;for(let K=B,ue=B+ae;K<ue;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new q,b=new q,W=new q,N=new q;function F(G){W.fromBufferAttribute(a,G),N.copy(W);const R=f[G];L.copy(R),L.sub(W.multiplyScalar(W.dot(R))).normalize(),b.crossVectors(N,R);const B=b.dot(h[G])<0?-1:1;c.setXYZW(G,L.x,L.y,L.z,B)}for(let G=0,R=I.length;G<R;++G){const C=I[G],B=C.start,ae=C.count;for(let K=B,ue=B+ae;K<ue;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new q,l=new q,c=new q,f=new q,h=new q,p=new q,g=new q,_=new q;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),E=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),f.add(g),h.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,_=f.normalized,x=new p.constructor(h.length*g);let S=0,M=0;for(let E=0,y=h.length;E<y;E++){f.isInterleavedBufferAttribute?S=h[E]*f.data.stride+f.offset:S=h[E]*g;for(let v=0;v<g;v++)x[M++]=p[S++]}return new Mi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=e(x,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Ft,Wr=new ia,Tl=new na,xm=new q,wl=new q,Al=new q,Cl=new q,sf=new q,Rl=new q,ym=new q,bl=new q;class hn extends ln{constructor(e=new hi,t=new Ng){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Rl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],_=l[h];g!==0&&(sf.fromBufferAttribute(_,e),c?Rl.addScaledVector(sf,g):Rl.addScaledVector(sf.sub(t),g))}t.add(Rl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Tl,xm)===null||Wr.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(vm.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=c[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,W=L;b<W;b+=3){const N=f.getX(b),F=f.getX(b+1),G=f.getX(b+2);a=Pl(this,v,e,r,p,g,_,N,F,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const I=f.getX(y),L=f.getX(y+1),b=f.getX(y+2);a=Pl(this,c,e,r,p,g,_,I,L,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=c[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,W=L;b<W;b+=3){const N=b,F=b+1,G=b+2;a=Pl(this,v,e,r,p,g,_,N,F,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const I=y,L=y+1,b=y+2;a=Pl(this,c,e,r,p,g,_,I,L,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function fx(s,e,t,r,a,l,c,f){let h;if(e.side===zn?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===ji,f),h===null)return null;bl.copy(f),bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(bl);return p<t.near||p>t.far?null:{distance:p,point:bl.clone(),object:s}}function Pl(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,wl),s.getVertexPosition(h,Al),s.getVertexPosition(p,Cl);const g=fx(s,e,t,r,wl,Al,Cl,ym);if(g){const _=new q;ci.getBarycoord(ym,wl,Al,Cl,_),a&&(g.uv=ci.getInterpolatedAttribute(a,f,h,p,_,new st)),l&&(g.uv1=ci.getInterpolatedAttribute(l,f,h,p,_,new st)),c&&(g.normal=ci.getInterpolatedAttribute(c,f,h,p,_,new q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new q,materialIndex:0};ci.getNormal(wl,Al,Cl,x.normal),g.face=x,g.barycoord=_}return g}class ra extends hi{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],_=[];let x=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,a,c,2),M("x","z","y",1,-1,e,r,-t,a,c,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new bn(p,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(_,2));function M(E,y,v,I,L,b,W,N,F,G,R){const C=b/F,B=W/G,ae=b/2,K=W/2,ue=N/2,de=F+1,oe=G+1;let ce=0,O=0;const le=new q;for(let se=0;se<oe;se++){const U=se*B-K;for(let ne=0;ne<de;ne++){const Te=ne*C-ae;le[E]=Te*I,le[y]=U*L,le[v]=ue,p.push(le.x,le.y,le.z),le[E]=0,le[y]=0,le[v]=N>0?1:-1,g.push(le.x,le.y,le.z),_.push(ne/F),_.push(1-se/G),ce+=1}}for(let se=0;se<G;se++)for(let U=0;U<F;U++){const ne=x+U+de*se,Te=x+U+de*(se+1),j=x+(U+1)+de*(se+1),re=x+(U+1)+de*se;h.push(ne,Te,re),h.push(Te,j,re),O+=6}f.addGroup(S,O,R),S+=O,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Rn(s){const e={};for(let t=0;t<s.length;t++){const r=ro(s[t]);for(const a in r)e[a]=r[a]}return e}function dx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const hx={clone:ro,merge:Rn};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class zg extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new q,Sm=new st,Mm=new st;class ei extends zg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Sm,Mm),t.subVectors(Mm,Sm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Bs=1;class gx extends ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(zs,Bs,e,t);a.layers=this.layers,this.add(a);const l=new ei(zs,Bs,e,t);l.layers=this.layers,this.add(l);const c=new ei(zs,Bs,e,t);c.layers=this.layers,this.add(c);const f=new ei(zs,Bs,e,t);f.layers=this.layers,this.add(f);const h=new ei(zs,Bs,e,t);h.layers=this.layers,this.add(h);const p=new ei(zs,Bs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(_,x,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Bg extends Pn{constructor(e,t,r,a,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,r,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _x extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Bg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ra(5,5,5),l=new Ki({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ar});l.uniforms.tEquirect.value=t;const c=new hn(a,l),f=t.minFilter;return t.minFilter===Qr&&(t.minFilter=Si),new gx(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}class Em extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const of=new q,vx=new q,xx=new at;class Tr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=of.subVectors(r,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(of),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||xx.getNormalMatrix(e),a=this.coplanarPoint(of).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new na,Dl=new q;class vd{constructor(e=new Tr,t=new Tr,r=new Tr,a=new Tr,l=new Tr,c=new Tr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],_=a[6],x=a[7],S=a[8],M=a[9],E=a[10],y=a[11],v=a[12],I=a[13],L=a[14],b=a[15];if(r[0].setComponents(h-l,x-p,y-S,b-v).normalize(),r[1].setComponents(h+l,x+p,y+S,b+v).normalize(),r[2].setComponents(h+c,x+g,y+M,b+I).normalize(),r[3].setComponents(h-c,x-g,y-M,b-I).normalize(),r[4].setComponents(h-f,x-_,y-E,b-L).normalize(),t===Wi)r[5].setComponents(h+f,x+_,y+E,b+L).normalize();else if(t===Kl)r[5].setComponents(f,_,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Dl.x=a.normal.x>0?e.max.x:e.min.x,Dl.y=a.normal.y>0?e.max.y:e.min.y,Dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $l=new q,Zl=new q,Tm=new Ft,jo=new ia,Ll=new na,af=new q,wm=new q;class yx extends ln{constructor(e=new hi,t=new jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)$l.fromBufferAttribute(t,a-1),Zl.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=$l.distanceTo(Zl);e.setAttribute("lineDistance",new bn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(a),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;Tm.copy(a).invert(),jo.copy(e.ray).applyMatrix4(Tm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=p){const v=g.getX(E),I=g.getX(E+1),L=Il(this,e,jo,h,v,I);L&&t.push(L)}if(this.isLineLoop){const E=g.getX(M-1),y=g.getX(S),v=Il(this,e,jo,h,E,y);v&&t.push(v)}}else{const S=Math.max(0,c.start),M=Math.min(x.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=p){const v=Il(this,e,jo,h,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=Il(this,e,jo,h,M-1,S);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Il(s,e,t,r,a,l){const c=s.geometry.attributes.position;if($l.fromBufferAttribute(c,a),Zl.fromBufferAttribute(c,l),t.distanceSqToSegment($l,Zl,af,wm)>r)return;af.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(af);if(!(h<e.near||h>e.far))return{distance:h,point:wm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Am=new q,Cm=new q;class Rm extends yx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Am.fromBufferAttribute(t,a),Cm.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Am.distanceTo(Cm);e.setAttribute("lineDistance",new bn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qo extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bm=new Ft,rd=new ia,Ul=new na,Nl=new q;class lf extends ln{constructor(e=new hi,t=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(a),Ul.radius+=l,e.ray.intersectsSphere(Ul)===!1)return;bm.copy(a).invert(),rd.copy(e.ray).applyMatrix4(bm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,_=r.attributes.position;if(p!==null){const x=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let M=x,E=S;M<E;M++){const y=p.getX(M);Nl.fromBufferAttribute(_,y),Pm(Nl,y,h,a,e,t,this)}}else{const x=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let M=x,E=S;M<E;M++)Nl.fromBufferAttribute(_,M),Pm(Nl,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Pm(s,e,t,r,a,l,c){const f=rd.distanceSqToPoint(s);if(f<t){const h=new q;rd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Xs extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Vg extends Pn{constructor(e,t,r,a,l,c,f,h,p,g=Ks){if(g!==Ks&&g!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ks&&(r=es),r===void 0&&g===no&&(r=to),super(null,a,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sa extends hi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,g=h+1,_=e/f,x=t/h,S=[],M=[],E=[],y=[];for(let v=0;v<g;v++){const I=v*x-c;for(let L=0;L<p;L++){const b=L*_-l;M.push(b,-I,0),E.push(0,0,1),y.push(L/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let I=0;I<f;I++){const L=I+p*v,b=I+p*(v+1),W=I+1+p*(v+1),N=I+1+p*v;S.push(L,b,N),S.push(b,W,N)}this.setIndex(S),this.setAttribute("position",new bn(M,3)),this.setAttribute("normal",new bn(E,3)),this.setAttribute("uv",new bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hg extends qi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bg,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sx extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mx extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ql={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ex{constructor(e,t,r){const a=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(g){f++,l===!1&&a.onStart!==void 0&&a.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,a.onProgress!==void 0&&a.onProgress(g,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const S=p[_],M=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const Gg=new Ex;class ao{constructor(e){this.manager=e!==void 0?e:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class Tx extends Error{constructor(e,t){super(e),this.response=t}}class Wg extends ao{constructor(e){super(e)}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Ql.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:r,onError:a});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:r,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,h=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=Bi[e],_=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=x?parseInt(x):0,M=S!==0;let E=0;const y=new ReadableStream({start(v){I();function I(){_.read().then(({done:L,value:b})=>{if(L)v.close();else{E+=b.byteLength;const W=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:S});for(let N=0,F=g.length;N<F;N++){const G=g[N];G.onProgress&&G.onProgress(W)}v.enqueue(b),I()}},L=>{v.error(L)})}}});return new Response(y)}else throw new Tx(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return p.json();default:if(f===void 0)return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),x=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(x);return p.arrayBuffer().then(M=>S.decode(M))}}}).then(p=>{Ql.add(e,p);const g=Bi[e];delete Bi[e];for(let _=0,x=g.length;_<x;_++){const S=g[_];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=Bi[e];if(g===void 0)throw this.manager.itemError(e),p;delete Bi[e];for(let _=0,x=g.length;_<x;_++){const S=g[_];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wx extends ao{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Ql.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=ea("img");function h(){g(),Ql.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(_){g(),a&&a(_),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class Xg extends ao{constructor(e){super(e)}load(e,t,r,a){const l=new Pn,c=new wx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class jg extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const uf=new Ft,Dm=new q,Lm=new q;class Ax{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lm),t.updateMatrixWorld(),uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xd extends zg{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cx extends Ax{constructor(){super(new xd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends jg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Cx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rx extends jg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bx{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let r=0,a=e.length;r<a;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Px extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Um=new Ft;class Dx{constructor(e,t,r=0,a=1/0){this.ray=new ia(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new _d,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,t=!0,r=[]){return sd(e,this,r,t),r.sort(Nm),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)sd(e[a],this,r,t);return r.sort(Nm),r}}function Nm(s,e){return s.distance-e.distance}function sd(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,f=l.length;c<f;c++)sd(l[c],e,t,!0)}}class Fm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lx extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Om(s,e,t,r){const a=Ix(r);switch(t){case Mg:return s*e;case Tg:return s*e;case wg:return s*e*2;case Ag:return s*e/a.components*a.byteLength;case hd:return s*e/a.components*a.byteLength;case Cg:return s*e*2/a.components*a.byteLength;case pd:return s*e*2/a.components*a.byteLength;case Eg:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case md:return s*e*4/a.components*a.byteLength;case Vl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:case Nf:return Math.max(s,16)*Math.max(e,8)/4;case Lf:case Uf:return Math.max(s,8)*Math.max(e,8)/2;case Ff:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xl:case Jf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rg:case td:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(s){switch(s){case Yi:case xg:return{byteLength:1,components:1};case Qo:case yg:case ta:return{byteLength:2,components:1};case fd:case dd:return{byteLength:2,components:4};case es:case cd:case Gi:return{byteLength:4,components:1};case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yg(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ux(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const g=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<_.length;S++){const M=_[x],E=_[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++x,_[x]=E)}_.length=x+1;for(let S=0,M=_.length;S<M;S++){const E=_[S];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fx=`#ifdef USE_ALPHAHASH
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
#endif`,Ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vx=`#ifdef USE_AOMAP
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
#endif`,Hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qx=`#ifdef USE_IRIDESCENCE
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
#endif`,Kx=`#ifdef USE_BUMPMAP
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ry=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oy=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,My=`#ifdef USE_GRADIENTMAP
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
}`,Ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Cy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ly=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Iy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ky=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wy=`#if defined( USE_POINTS_UV )
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
#endif`,Xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
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
#endif`,rS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,xS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ES=`#ifdef USE_SKINNING
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
#endif`,TS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RS=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`#include <common>
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
}`,VS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HS=`#define DISTANCE
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
}`,GS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`uniform float scale;
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
}`,YS=`uniform vec3 diffuse;
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
}`,qS=`#include <common>
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
}`,KS=`uniform vec3 diffuse;
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
}`,$S=`#define LAMBERT
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
}`,ZS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,QS=`#define MATCAP
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
}`,JS=`#define MATCAP
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
}`,eM=`#define NORMAL
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
}`,tM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nM=`#define PHONG
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
}`,iM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,oM=`#define TOON
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
}`,aM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lM=`uniform float size;
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
}`,uM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,fM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Nx,alphahash_pars_fragment:Fx,alphamap_fragment:Ox,alphamap_pars_fragment:kx,alphatest_fragment:zx,alphatest_pars_fragment:Bx,aomap_fragment:Vx,aomap_pars_fragment:Hx,batching_pars_vertex:Gx,batching_vertex:Wx,begin_vertex:Xx,beginnormal_vertex:jx,bsdfs:Yx,iridescence_fragment:qx,bumpmap_pars_fragment:Kx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:Zx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:Jx,color_fragment:ey,color_pars_fragment:ty,color_pars_vertex:ny,color_vertex:iy,common:ry,cube_uv_reflection_fragment:sy,defaultnormal_vertex:oy,displacementmap_pars_vertex:ay,displacementmap_vertex:ly,emissivemap_fragment:uy,emissivemap_pars_fragment:cy,colorspace_fragment:fy,colorspace_pars_fragment:dy,envmap_fragment:hy,envmap_common_pars_fragment:py,envmap_pars_fragment:my,envmap_pars_vertex:gy,envmap_physical_pars_fragment:Cy,envmap_vertex:_y,fog_vertex:vy,fog_pars_vertex:xy,fog_fragment:yy,fog_pars_fragment:Sy,gradientmap_pars_fragment:My,lightmap_pars_fragment:Ey,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:wy,lights_pars_begin:Ay,lights_toon_fragment:Ry,lights_toon_pars_fragment:by,lights_phong_fragment:Py,lights_phong_pars_fragment:Dy,lights_physical_fragment:Ly,lights_physical_pars_fragment:Iy,lights_fragment_begin:Uy,lights_fragment_maps:Ny,lights_fragment_end:Fy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:ky,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:By,map_fragment:Vy,map_pars_fragment:Hy,map_particle_fragment:Gy,map_particle_pars_fragment:Wy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:jy,morphinstance_vertex:Yy,morphcolor_vertex:qy,morphnormal_vertex:Ky,morphtarget_pars_vertex:$y,morphtarget_vertex:Zy,normal_fragment_begin:Qy,normal_fragment_maps:Jy,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:rS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:oS,iridescence_pars_fragment:aS,opaque_fragment:lS,packing:uS,premultiplied_alpha_fragment:cS,project_vertex:fS,dithering_fragment:dS,dithering_pars_fragment:hS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:_S,shadowmap_vertex:vS,shadowmask_pars_fragment:xS,skinbase_vertex:yS,skinning_pars_vertex:SS,skinning_vertex:MS,skinnormal_vertex:ES,specularmap_fragment:TS,specularmap_pars_fragment:wS,tonemapping_fragment:AS,tonemapping_pars_fragment:CS,transmission_fragment:RS,transmission_pars_fragment:bS,uv_pars_fragment:PS,uv_pars_vertex:DS,uv_vertex:LS,worldpos_vertex:IS,background_vert:US,background_frag:NS,backgroundCube_vert:FS,backgroundCube_frag:OS,cube_vert:kS,cube_frag:zS,depth_vert:BS,depth_frag:VS,distanceRGBA_vert:HS,distanceRGBA_frag:GS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:jS,linedashed_frag:YS,meshbasic_vert:qS,meshbasic_frag:KS,meshlambert_vert:$S,meshlambert_frag:ZS,meshmatcap_vert:QS,meshmatcap_frag:JS,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:rM,meshphysical_frag:sM,meshtoon_vert:oM,meshtoon_frag:aM,points_vert:lM,points_frag:uM,shadow_vert:cM,shadow_frag:fM,sprite_vert:dM,sprite_frag:hM},Pe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},yi={basic:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Rn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Rn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Rn([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Rn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Rn([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Rn([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Rn([Pe.common,Pe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Rn([Pe.lights,Pe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};yi.physical={uniforms:Rn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Fl={r:0,b:0,g:0},jr=new Ei,pM=new Ft;function mM(s,e,t,r,a,l,c){const f=new ct(0);let h=l===!0?0:1,p,g,_=null,x=0,S=null;function M(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function E(L){let b=!1;const W=M(L);W===null?v(f,h):W&&W.isColor&&(v(W,1),b=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,b){const W=M(b);W&&(W.isCubeTexture||W.mapping===tu)?(g===void 0&&(g=new hn(new ra(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ro(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),jr.copy(b.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(jr)),g.material.toneMapped=xt.getTransfer(W.colorSpace)!==Rt,(_!==W||x!==W.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=W,x=W.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(p===void 0&&(p=new hn(new sa(2,2),new Ki({name:"BackgroundMaterial",uniforms:ro(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=W,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=xt.getTransfer(W.colorSpace)!==Rt,W.matrixAutoUpdate===!0&&W.updateMatrix(),p.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||x!==W.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=W,x=W.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,b){L.getRGB(Fl,kg(s)),r.buffers.color.setClear(Fl.r,Fl.g,Fl.b,b,c)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,b=1){f.set(L),h=b,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(f,h)},render:E,addToRenderList:y,dispose:I}}function gM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(C,B,ae,K,ue){let de=!1;const oe=_(K,ae,B);l!==oe&&(l=oe,p(l.object)),de=S(C,K,ae,ue),de&&M(C,K,ae,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,b(C,B,ae,K),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,B,ae){const K=ae.wireframe===!0;let ue=r[C.id];ue===void 0&&(ue={},r[C.id]=ue);let de=ue[B.id];de===void 0&&(de={},ue[B.id]=de);let oe=de[K];return oe===void 0&&(oe=x(h()),de[K]=oe),oe}function x(C){const B=[],ae=[],K=[];for(let ue=0;ue<t;ue++)B[ue]=0,ae[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:K,object:C,attributes:{},index:null}}function S(C,B,ae,K){const ue=l.attributes,de=B.attributes;let oe=0;const ce=ae.getAttributes();for(const O in ce)if(ce[O].location>=0){const se=ue[O];let U=de[O];if(U===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return l.attributesNum!==oe||l.index!==K}function M(C,B,ae,K){const ue={},de=B.attributes;let oe=0;const ce=ae.getAttributes();for(const O in ce)if(ce[O].location>=0){let se=de[O];se===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),ue[O]=U,oe++}l.attributes=ue,l.attributesNum=oe,l.index=K}function E(){const C=l.newAttributes;for(let B=0,ae=C.length;B<ae;B++)C[B]=0}function y(C){v(C,0)}function v(C,B){const ae=l.newAttributes,K=l.enabledAttributes,ue=l.attributeDivisors;ae[C]=1,K[C]===0&&(s.enableVertexAttribArray(C),K[C]=1),ue[C]!==B&&(s.vertexAttribDivisor(C,B),ue[C]=B)}function I(){const C=l.newAttributes,B=l.enabledAttributes;for(let ae=0,K=B.length;ae<K;ae++)B[ae]!==C[ae]&&(s.disableVertexAttribArray(ae),B[ae]=0)}function L(C,B,ae,K,ue,de,oe){oe===!0?s.vertexAttribIPointer(C,B,ae,ue,de):s.vertexAttribPointer(C,B,ae,K,ue,de)}function b(C,B,ae,K){E();const ue=K.attributes,de=ae.getAttributes(),oe=B.defaultAttributeValues;for(const ce in de){const O=de[ce];if(O.location>=0){let le=ue[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,U=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Te=ne.buffer,j=ne.type,re=ne.bytesPerElement,me=j===s.INT||j===s.UNSIGNED_INT||le.gpuType===cd;if(le.isInterleavedBufferAttribute){const _e=le.data,Ae=_e.stride,De=le.offset;if(_e.isInstancedInterleavedBuffer){for(let Ke=0;Ke<O.locationSize;Ke++)v(O.location+Ke,_e.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ke=0;Ke<O.locationSize;Ke++)y(O.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ke=0;Ke<O.locationSize;Ke++)L(O.location+Ke,U/O.locationSize,j,se,Ae*re,(De+U/O.locationSize*Ke)*re,me)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<O.locationSize;_e++)v(O.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<O.locationSize;_e++)y(O.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let _e=0;_e<O.locationSize;_e++)L(O.location+_e,U/O.locationSize,j,se,U*re,U/O.locationSize*_e*re,me)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(O.location,se);break;case 3:s.vertexAttrib3fv(O.location,se);break;case 4:s.vertexAttrib4fv(O.location,se);break;default:s.vertexAttrib1fv(O.location,se)}}}}I()}function W(){G();for(const C in r){const B=r[C];for(const ae in B){const K=B[ae];for(const ue in K)g(K[ue].object),delete K[ue];delete B[ae]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ae in B){const K=B[ae];for(const ue in K)g(K[ue].object),delete K[ue];delete B[ae]}delete r[C.id]}function F(C){for(const B in r){const ae=r[B];if(ae[C.id]===void 0)continue;const K=ae[C.id];for(const ue in K)g(K[ue].object),delete K[ue];delete ae[C.id]}}function G(){R(),c=!0,l!==a&&(l=a,p(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:R,dispose:W,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:y,disableUnusedAttributes:I}}function _M(s,e,t){let r;function a(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),t.update(g,r,_))}function f(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];t.update(S,r,1)}function h(p,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E]*x[E];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function vM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==fi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const G=F===ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Yi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Gi&&!G)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=M>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:W,maxSamples:N}}function xM(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Tr,f=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,S){const M=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!a||M===null||M.length===0||l&&!y)l?g(null):p();else{const I=l?0:r,L=I*4;let b=v.clippingState||null;h.value=b,b=g(M,x,L,S);for(let W=0;W!==L;++W)b[W]=t[W];v.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,S,M){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=h.value,M!==!0||y===null){const v=S+E*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,b=S;L!==E;++L,b+=4)c.copy(_[L]).applyMatrix4(I,f),c.normal.toArray(y,b),y[b+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function yM(s){let e=new WeakMap;function t(c,f){return f===bf?c.mapping=Qs:f===Pf&&(c.mapping=Js),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===bf||f===Pf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new _x(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const js=4,km=[.125,.215,.35,.446,.526,.582],$r=20,cf=new xd,zm=new ct;let ff=null,df=0,hf=0,pf=!1;const qr=(1+Math.sqrt(5))/2,Vs=1/qr,Bm=[new q(-qr,Vs,0),new q(qr,Vs,0),new q(-Vs,0,qr),new q(Vs,0,qr),new q(0,qr,-Vs),new q(0,qr,Vs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,hf),this._renderer.xr.enabled=pf,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:ta,format:fi,colorSpace:io,depthBuffer:!1},a=Hm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SM(l)),this._blurMaterial=MM(l,e,t)}return a}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,cf)}_sceneToCubeUV(e,t,r,a){const f=new ei(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(zm),g.toneMapping=Cr,g.autoClear=!1;const S=new Ng({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),M=new hn(new ra,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(zm),E=!0);for(let v=0;v<6;v++){const I=v%3;I===0?(f.up.set(0,h[v],0),f.lookAt(p[v],0,0)):I===1?(f.up.set(0,0,h[v]),f.lookAt(0,p[v],0)):(f.up.set(0,h[v],0),f.lookAt(0,0,p[v]));const L=this._cubeSize;Ol(a,I*L,v>2?L:0,L,L),g.setRenderTarget(a),E&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Qs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new hn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ol(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,cf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Bm[(a-l-1)%Bm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new hn(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),E=l/M,y=isFinite(l)?1+Math.floor(g*E):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const v=[];let I=0;for(let F=0;F<$r;++F){const G=F/E,R=Math.exp(-G*G/2);v.push(R),F===0?I+=R:F<y&&(I+=2*R)}for(let F=0;F<v.length;F++)v[F]=v[F]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-r;const b=this._sizeLods[a],W=3*b*(a>L-js?a-L+js:0),N=4*(this._cubeSize-b);Ol(t,W,N,3*b,2*b),h.setRenderTarget(t),h.render(_,cf)}}function SM(s){const e=[],t=[],r=[];let a=s;const l=s-js+1+km.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-js?h=km[c-s+js-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,E=3,y=2,v=1,I=new Float32Array(E*M*S),L=new Float32Array(y*M*S),b=new Float32Array(v*M*S);for(let N=0;N<S;N++){const F=N%3*2/3-1,G=N>2?0:-1,R=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];I.set(R,E*M*N),L.set(x,y*M*N);const C=[N,N,N,N,N,N];b.set(C,v*M*N)}const W=new hi;W.setAttribute("position",new Mi(I,E)),W.setAttribute("uv",new Mi(L,y)),W.setAttribute("faceIndex",new Mi(b,v)),e.push(W),a>js&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Hm(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ol(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function MM(s,e,t){const r=new Float32Array($r),a=new q(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Gm(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Wm(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===bf||h===Pf,g=h===Qs||h===Js;if(p||g){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Vm(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new Vm(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function TM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Gs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function wM(s,e,t,r){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,M=_.attributes.position;let E=0;if(S!==null){const I=S.array;E=S.version;for(let L=0,b=I.length;L<b;L+=3){const W=I[L+0],N=I[L+1],F=I[L+2];x.push(W,N,N,F,F,W)}}else if(M!==void 0){const I=M.array;E=M.version;for(let L=0,b=I.length/3-1;L<b;L+=3){const W=L+0,N=L+1,F=L+2;x.push(W,N,N,F,F,W)}}else return;const y=new(Dg(x)?Og:Fg)(x,1);y.version=E;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function g(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function AM(s,e,t){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function p(x,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,x*c,M),t.update(S,r,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,M);let y=0;for(let v=0;v<M;v++)y+=S[v];t.update(y,r,1)}function _(x,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,E,0,M);let v=0;for(let I=0;I<M;I++)v+=S[I]*E[I];t.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function CM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function RM(s,e,t){const r=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let C=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;M===!0&&(b=1),E===!0&&(b=2),y===!0&&(b=3);let W=f.attributes.position.count*b,N=1;W>e.maxTextureSize&&(N=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const F=new Float32Array(W*N*4*_),G=new Ig(F,W,N,_);G.type=Gi,G.needsUpdate=!0;const R=b*4;for(let B=0;B<_;B++){const ae=v[B],K=I[B],ue=L[B],de=W*N*4*B;for(let oe=0;oe<ae.count;oe++){const ce=oe*R;M===!0&&(a.fromBufferAttribute(ae,oe),F[de+ce+0]=a.x,F[de+ce+1]=a.y,F[de+ce+2]=a.z,F[de+ce+3]=0),E===!0&&(a.fromBufferAttribute(K,oe),F[de+ce+4]=a.x,F[de+ce+5]=a.y,F[de+ce+6]=a.z,F[de+ce+7]=0),y===!0&&(a.fromBufferAttribute(ue,oe),F[de+ce+8]=a.x,F[de+ce+9]=a.y,F[de+ce+10]=a.z,F[de+ce+11]=ue.itemSize===4?a.w:1)}}x={count:_,texture:G,size:new st(W,N)},r.set(f,x),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const E=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function bM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return _}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const qg=new Pn,Xm=new Vg(1,1),Kg=new Ig,$g=new tx,Zg=new Bg,jm=[],Ym=[],qm=new Float32Array(16),Km=new Float32Array(9),$m=new Float32Array(4);function lo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=jm[a];if(l===void 0&&(l=new Float32Array(a),jm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function nu(s,e){let t=Ym[e];t===void 0&&(t=new Int32Array(e),Ym[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function PM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function UM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;$m.set(r),s.uniformMatrix2fv(this.addr,!1,$m),en(t,r)}}function NM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Km.set(r),s.uniformMatrix3fv(this.addr,!1,Km),en(t,r)}}function FM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;qm.set(r),s.uniformMatrix4fv(this.addr,!1,qm),en(t,r)}}function OM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function VM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function XM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Xm.compareFunction=Pg,l=Xm):l=qg,t.setTexture2D(e||l,a)}function jM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||$g,a)}function YM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Zg,a)}function qM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Kg,a)}function KM(s){switch(s){case 5126:return PM;case 35664:return DM;case 35665:return LM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return kM;case 35668:case 35672:return zM;case 35669:case 35673:return BM;case 5125:return VM;case 36294:return HM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}function $M(s,e){s.uniform1fv(this.addr,e)}function ZM(s,e){const t=lo(e,this.size,2);s.uniform2fv(this.addr,t)}function QM(s,e){const t=lo(e,this.size,3);s.uniform3fv(this.addr,t)}function JM(s,e){const t=lo(e,this.size,4);s.uniform4fv(this.addr,t)}function eE(s,e){const t=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tE(s,e){const t=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nE(s,e){const t=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function iE(s,e){s.uniform1iv(this.addr,e)}function rE(s,e){s.uniform2iv(this.addr,e)}function sE(s,e){s.uniform3iv(this.addr,e)}function oE(s,e){s.uniform4iv(this.addr,e)}function aE(s,e){s.uniform1uiv(this.addr,e)}function lE(s,e){s.uniform2uiv(this.addr,e)}function uE(s,e){s.uniform3uiv(this.addr,e)}function cE(s,e){s.uniform4uiv(this.addr,e)}function fE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||qg,l[c])}function dE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||$g,l[c])}function hE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Zg,l[c])}function pE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Kg,l[c])}function mE(s){switch(s){case 5126:return $M;case 35664:return ZM;case 35665:return QM;case 35666:return JM;case 35674:return eE;case 35675:return tE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return rE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return lE;case 36295:return uE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return pE}}class gE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}}class _E{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mE(t.type)}}class vE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const mf=/(\w+)(\])?(\[|\.)?/g;function Zm(s,e){s.seq.push(e),s.map[e.id]=e}function xE(s,e,t){const r=s.name,a=r.length;for(mf.lastIndex=0;;){const l=mf.exec(r),c=mf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Zm(t,p===void 0?new gE(f,s,e):new _E(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new vE(f),Zm(t,_)),t=_}}}class Yl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);xE(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Qm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const yE=37297;let SE=0;function ME(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Jm=new at;function EE(s){xt._getMatrix(Jm,xt.workingColorSpace,s);const e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(s)){case ql:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function eg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+ME(s.getShaderSource(e),c)}else return a}function TE(s,e){const t=EE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wE(s,e){let t;switch(e){case f0:t="Linear";break;case d0:t="Reinhard";break;case h0:t="Cineon";break;case p0:t="ACESFilmic";break;case g0:t="AgX";break;case _0:t="Neutral";break;case m0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new q;function AE(){xt.getLuminanceCoefficients(kl);const s=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function RE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function bE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Ko(s){return s!==""}function tg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(s){return s.replace(PE,LE)}const DE=new Map;function LE(s,e){let t=ut[e];if(t===void 0){const r=DE.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return od(t)}const IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(s){return s.replace(IE,UE)}function UE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function rg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function FE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function kE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case u0:e="ENVMAP_BLENDING_MIX";break;case c0:e="ENVMAP_BLENDING_ADD";break}return e}function zE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function BE(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=NE(t),p=FE(t),g=OE(t),_=kE(t),x=zE(t),S=CE(t),M=RE(l),E=a.createProgram();let y,v,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ko).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ko).join(`
`),v.length>0&&(v+=`
`)):(y=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),v=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Cr?wE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,TE("linearToOutputTexel",t.outputColorSpace),AE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),c=od(c),c=tg(c,t),c=ng(c,t),f=od(f),f=tg(f,t),f=ng(f,t),c=ig(c),f=ig(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=I+y+c,b=I+v+f,W=Qm(a,a.VERTEX_SHADER,L),N=Qm(a,a.FRAGMENT_SHADER,b);a.attachShader(E,W),a.attachShader(E,N),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function F(B){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(E).trim(),K=a.getShaderInfoLog(W).trim(),ue=a.getShaderInfoLog(N).trim();let de=!0,oe=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,W,N);else{const ce=eg(a,W,"vertex"),O=eg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+ce+`
`+O)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(K===""||ue==="")&&(oe=!1);oe&&(B.diagnostics={runnable:de,programLog:ae,vertexShader:{log:K,prefix:y},fragmentShader:{log:ue,prefix:v}})}a.deleteShader(W),a.deleteShader(N),G=new Yl(a,E),R=bE(a,E)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(E,yE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=W,this.fragmentShader=N,this}let VE=0;class HE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new GE(e),t.set(e,r)),r}}class GE{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}}function WE(s,e,t,r,a,l,c){const f=new _d,h=new HE,p=new Set,g=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,C,B,ae,K){const ue=ae.fog,de=K.geometry,oe=R.isMeshStandardMaterial?ae.environment:null,ce=(R.isMeshStandardMaterial?t:e).get(R.envMap||oe),O=ce&&ce.mapping===tu?ce.image.height:null,le=M[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const se=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=se!==void 0?se.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let Te,j,re,me;if(le){const St=yi[le];Te=St.vertexShader,j=St.fragmentShader}else Te=R.vertexShader,j=R.fragmentShader,h.update(R),re=h.getVertexShaderID(R),me=h.getFragmentShaderID(R);const _e=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),De=K.isInstancedMesh===!0,Ke=K.isBatchedMesh===!0,Tt=!!R.map,lt=!!R.matcap,Dt=!!ce,z=!!R.aoMap,Mn=!!R.lightMap,gt=!!R.bumpMap,dt=!!R.normalMap,Ye=!!R.displacementMap,Ct=!!R.emissiveMap,We=!!R.metalnessMap,P=!!R.roughnessMap,w=R.anisotropy>0,J=R.clearcoat>0,pe=R.dispersion>0,ve=R.iridescence>0,fe=R.sheen>0,Xe=R.transmission>0,Ce=w&&!!R.anisotropyMap,Fe=J&&!!R.clearcoatMap,ft=J&&!!R.clearcoatNormalMap,Me=J&&!!R.clearcoatRoughnessMap,ke=ve&&!!R.iridescenceMap,$e=ve&&!!R.iridescenceThicknessMap,et=fe&&!!R.sheenColorMap,ze=fe&&!!R.sheenRoughnessMap,ht=!!R.specularMap,it=!!R.specularColorMap,At=!!R.specularIntensityMap,H=Xe&&!!R.transmissionMap,Re=Xe&&!!R.thicknessMap,ie=!!R.gradientMap,he=!!R.alphaMap,Ie=R.alphaTest>0,Le=!!R.alphaHash,rt=!!R.extensions;let It=Cr;R.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(It=s.toneMapping);const Kt={shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:Te,fragmentShader:j,defines:R.defines,customVertexShaderID:re,customFragmentShaderID:me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&K._colorsTexture!==null,instancing:De,instancingColor:De&&K.instanceColor!==null,instancingMorph:De&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:io,alphaToCoverage:!!R.alphaToCoverage,map:Tt,matcap:lt,envMap:Dt,envMapMode:Dt&&ce.mapping,envMapCubeUVHeight:O,aoMap:z,lightMap:Mn,bumpMap:gt,normalMap:dt,displacementMap:x&&Ye,emissiveMap:Ct,normalMapObjectSpace:dt&&R.normalMapType===S0,normalMapTangentSpace:dt&&R.normalMapType===bg,metalnessMap:We,roughnessMap:P,anisotropy:w,anisotropyMap:Ce,clearcoat:J,clearcoatMap:Fe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ve,iridescenceMap:ke,iridescenceThicknessMap:$e,sheen:fe,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ht,specularColorMap:it,specularIntensityMap:At,transmission:Xe,transmissionMap:H,thicknessMap:Re,gradientMap:ie,opaque:R.transparent===!1&&R.blending===qs&&R.alphaToCoverage===!1,alphaMap:he,alphaTest:Ie,alphaHash:Le,combine:R.combine,mapUv:Tt&&E(R.map.channel),aoMapUv:z&&E(R.aoMap.channel),lightMapUv:Mn&&E(R.lightMap.channel),bumpMapUv:gt&&E(R.bumpMap.channel),normalMapUv:dt&&E(R.normalMap.channel),displacementMapUv:Ye&&E(R.displacementMap.channel),emissiveMapUv:Ct&&E(R.emissiveMap.channel),metalnessMapUv:We&&E(R.metalnessMap.channel),roughnessMapUv:P&&E(R.roughnessMap.channel),anisotropyMapUv:Ce&&E(R.anisotropyMap.channel),clearcoatMapUv:Fe&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:ft&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(R.sheenRoughnessMap.channel),specularMapUv:ht&&E(R.specularMap.channel),specularColorMapUv:it&&E(R.specularColorMap.channel),specularIntensityMapUv:At&&E(R.specularIntensityMap.channel),transmissionMapUv:H&&E(R.transmissionMap.channel),thicknessMapUv:Re&&E(R.thicknessMap.channel),alphaMapUv:he&&E(R.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(dt||w),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!de.attributes.uv&&(Tt||he),fog:!!ue,useFog:R.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ae,skinning:K.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Tt&&R.map.isVideoTexture===!0&&xt.getTransfer(R.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ct&&R.emissiveMap.isVideoTexture===!0&&xt.getTransfer(R.emissiveMap.colorSpace)===Rt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Hi,flipSided:R.side===zn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:rt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&R.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function v(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)C.push(B),C.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(I(C,R),L(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function I(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function L(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function b(R){const C=M[R.type];let B;if(C){const ae=yi[C];B=hx.clone(ae.uniforms)}else B=R.uniforms;return B}function W(R,C){let B;for(let ae=0,K=g.length;ae<K;ae++){const ue=g[ae];if(ue.cacheKey===C){B=ue,++B.usedTimes;break}}return B===void 0&&(B=new BE(s,C,R,l),g.push(B)),B}function N(R){if(--R.usedTimes===0){const C=g.indexOf(R);g[C]=g[g.length-1],g.pop(),R.destroy()}}function F(R){h.remove(R)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:W,releaseProgram:N,releaseShaderCache:F,programs:g,dispose:G}}function XE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function jE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function og(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_,x,S,M,E,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:M,renderOrder:_.renderOrder,z:E,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=E,v.group=y),e++,v}function f(_,x,S,M,E,y){const v=c(_,x,S,M,E,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(_,x,S,M,E,y){const v=c(_,x,S,M,E,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||jE),r.length>1&&r.sort(x||sg),a.length>1&&a.sort(x||sg)}function g(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function YE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new og,s.set(r,[c])):a>=l.length?(c=new og,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ct};break;case"SpotLight":t={position:new q,direction:new q,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function KE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let $E=0;function ZE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QE(s){const e=new qE,t=KE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const a=new q,l=new Ft,c=new Ft;function f(p){let g=0,_=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,M=0,E=0,y=0,v=0,I=0,L=0,b=0,W=0,N=0,F=0;p.sort(ZE);for(let R=0,C=p.length;R<C;R++){const B=p[R],ae=B.color,K=B.intensity,ue=B.distance,de=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ae.r*K,_+=ae.g*K,x+=ae.b*K;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(B.sh.coefficients[oe],K);F++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,O=t.get(B);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=B.shadow.matrix,I++}r.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(ae).multiplyScalar(K),oe.distance=ue,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,r.spot[E]=oe;const ce=B.shadow;if(B.map&&(r.spotLightMap[W]=B.map,W++,ce.updateMatrices(B),B.castShadow&&N++),r.spotLightMatrix[E]=ce.matrix,B.castShadow){const O=t.get(B);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.spotShadow[E]=O,r.spotShadowMap[E]=de,b++}E++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(ae).multiplyScalar(K),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=oe,y++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ce=B.shadow,O=t.get(B);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,O.shadowCameraNear=ce.camera.near,O.shadowCameraFar=ce.camera.far,r.pointShadow[M]=O,r.pointShadowMap[M]=de,r.pointShadowMatrix[M]=B.shadow.matrix,L++}r.point[M]=oe,M++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(K),oe.groundColor.copy(B.groundColor).multiplyScalar(K),r.hemi[v]=oe,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==M||G.spotLength!==E||G.rectAreaLength!==y||G.hemiLength!==v||G.numDirectionalShadows!==I||G.numPointShadows!==L||G.numSpotShadows!==b||G.numSpotMaps!==W||G.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=y,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+W-N,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,G.directionalLength=S,G.pointLength=M,G.spotLength=E,G.rectAreaLength=y,G.hemiLength=v,G.numDirectionalShadows=I,G.numPointShadows=L,G.numSpotShadows=b,G.numSpotMaps=W,G.numLightProbes=F,r.version=$E++)}function h(p,g){let _=0,x=0,S=0,M=0,E=0;const y=g.matrixWorldInverse;for(let v=0,I=p.length;v<I;v++){const L=p[v];if(L.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),_++}else if(L.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const b=r.rectArea[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const b=r.hemi[E];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(y),E++}}}return{setup:f,setupView:h,state:r}}function ag(s){const e=new QE(s),t=[],r=[];function a(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function JE(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new ag(s),e.set(a,[f])):l>=c.length?(f=new ag(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nT(s,e,t){let r=new vd;const a=new st,l=new st,c=new Wt,f=new Sx({depthPacking:y0}),h=new Mx,p={},g=t.maxTextureSize,_={[ji]:zn,[zn]:ji,[Hi]:Hi},x=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:eT,fragmentShader:tT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new hi;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new hn(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let v=this.type;this.render=function(N,F,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Ar),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const K=v!==Vi&&this.type===Vi,ue=v===Vi&&this.type!==Vi;for(let de=0,oe=N.length;de<oe;de++){const ce=N[de],O=ce.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const le=O.getFrameExtents();if(a.multiply(le),l.copy(O.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/le.x),a.x=l.x*le.x,O.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/le.y),a.y=l.y*le.y,O.mapSize.y=l.y)),O.map===null||K===!0||ue===!0){const U=this.type!==Vi?{minFilter:di,magFilter:di}:{};O.map!==null&&O.map.dispose(),O.map=new ts(a.x,a.y,U),O.map.texture.name=ce.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const se=O.getViewportCount();for(let U=0;U<se;U++){const ne=O.getViewport(U);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),ae.viewport(c),O.updateMatrices(ce,U),r=O.getFrustum(),b(F,G,O.camera,ce,this.type)}O.isPointLightShadow!==!0&&this.type===Vi&&I(O,G),O.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(R,C,B)};function I(N,F){const G=e.update(E);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ts(a.x,a.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,G,x,E,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,G,S,E,null)}function L(N,F,G,R){let C=null;const B=G.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)C=B;else if(C=G.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ae=C.uuid,K=F.uuid;let ue=p[ae];ue===void 0&&(ue={},p[ae]=ue);let de=ue[K];de===void 0&&(de=C.clone(),ue[K]=de,F.addEventListener("dispose",W)),C=de}if(C.visible=F.visible,C.wireframe=F.wireframe,R===Vi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=s.properties.get(C);ae.light=G}return C}function b(N,F,G,R,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Vi)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,N.matrixWorld);const K=e.update(N),ue=N.material;if(Array.isArray(ue)){const de=K.groups;for(let oe=0,ce=de.length;oe<ce;oe++){const O=de[oe],le=ue[O.materialIndex];if(le&&le.visible){const se=L(N,le,R,C);N.onBeforeShadow(s,N,F,G,K,se,O),s.renderBufferDirect(G,null,K,se,N,O),N.onAfterShadow(s,N,F,G,K,se,O)}}}else if(ue.visible){const de=L(N,ue,R,C);N.onBeforeShadow(s,N,F,G,K,de,null),s.renderBufferDirect(G,null,K,de,N,null),N.onAfterShadow(s,N,F,G,K,de,null)}}const ae=N.children;for(let K=0,ue=ae.length;K<ue;K++)b(ae[K],F,G,R,C)}function W(N){N.target.removeEventListener("dispose",W);for(const G in p){const R=p[G],C=N.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const iT={[Mf]:Ef,[Tf]:Cf,[wf]:Rf,[Zs]:Af,[Ef]:Mf,[Cf]:Tf,[Rf]:wf,[Af]:Zs};function rT(s,e){function t(){let H=!1;const Re=new Wt;let ie=null;const he=new Wt(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!H&&(s.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,Le,rt,It,Kt){Kt===!0&&(Ie*=It,Le*=It,rt*=It),Re.set(Ie,Le,rt,It),he.equals(Re)===!1&&(s.clearColor(Ie,Le,rt,It),he.copy(Re))},reset:function(){H=!1,ie=null,he.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,ie=null,he=null,Ie=null;return{setReversed:function(Le){if(Re!==Le){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const It=Ie;Ie=null,this.setClear(It)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?_e(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Le){ie!==Le&&!H&&(s.depthMask(Le),ie=Le)},setFunc:function(Le){if(Re&&(Le=iT[Le]),he!==Le){switch(Le){case Mf:s.depthFunc(s.NEVER);break;case Ef:s.depthFunc(s.ALWAYS);break;case Tf:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case wf:s.depthFunc(s.EQUAL);break;case Af:s.depthFunc(s.GEQUAL);break;case Cf:s.depthFunc(s.GREATER);break;case Rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Le}},setLocked:function(Le){H=Le},setClear:function(Le){Ie!==Le&&(Re&&(Le=1-Le),s.clearDepth(Le),Ie=Le)},reset:function(){H=!1,ie=null,he=null,Ie=null,Re=!1}}}function a(){let H=!1,Re=null,ie=null,he=null,Ie=null,Le=null,rt=null,It=null,Kt=null;return{setTest:function(St){H||(St?_e(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(St){Re!==St&&!H&&(s.stencilMask(St),Re=St)},setFunc:function(St,Dn,En){(ie!==St||he!==Dn||Ie!==En)&&(s.stencilFunc(St,Dn,En),ie=St,he=Dn,Ie=En)},setOp:function(St,Dn,En){(Le!==St||rt!==Dn||It!==En)&&(s.stencilOp(St,Dn,En),Le=St,rt=Dn,It=En)},setLocked:function(St){H=St},setClear:function(St){Kt!==St&&(s.clearStencil(St),Kt=St)},reset:function(){H=!1,Re=null,ie=null,he=null,Ie=null,Le=null,rt=null,It=null,Kt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,I=null,L=null,b=null,W=null,N=null,F=new ct(0,0,0),G=0,R=!1,C=null,B=null,ae=null,K=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(O)[1]),oe=ce>=1):O.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),oe=ce>=2);let le=null,se={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Te=new Wt().fromArray(U),j=new Wt().fromArray(ne);function re(H,Re,ie,he){const Ie=new Uint8Array(4),Le=s.createTexture();s.bindTexture(H,Le),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ie;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Le}const me={};me[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),c.setFunc(Zs),gt(!1),dt(Qp),_e(s.CULL_FACE),z(Ar);function _e(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function Ae(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function De(H,Re){return _[H]!==Re?(s.bindFramebuffer(H,Re),_[H]=Re,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(H,Re){let ie=S,he=!1;if(H){ie=x.get(Re),ie===void 0&&(ie=[],x.set(Re,ie));const Ie=H.textures;if(ie.length!==Ie.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,rt=Ie.length;Le<rt;Le++)ie[Le]=s.COLOR_ATTACHMENT0+Le;ie.length=Ie.length,he=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,he=!0);he&&s.drawBuffers(ie)}function Tt(H){return M!==H?(s.useProgram(H),M=H,!0):!1}const lt={[Kr]:s.FUNC_ADD,[jv]:s.FUNC_SUBTRACT,[Yv]:s.FUNC_REVERSE_SUBTRACT};lt[qv]=s.MIN,lt[Kv]=s.MAX;const Dt={[$v]:s.ZERO,[Zv]:s.ONE,[Qv]:s.SRC_COLOR,[yf]:s.SRC_ALPHA,[r0]:s.SRC_ALPHA_SATURATE,[n0]:s.DST_COLOR,[e0]:s.DST_ALPHA,[Jv]:s.ONE_MINUS_SRC_COLOR,[Sf]:s.ONE_MINUS_SRC_ALPHA,[i0]:s.ONE_MINUS_DST_COLOR,[t0]:s.ONE_MINUS_DST_ALPHA,[s0]:s.CONSTANT_COLOR,[o0]:s.ONE_MINUS_CONSTANT_COLOR,[a0]:s.CONSTANT_ALPHA,[l0]:s.ONE_MINUS_CONSTANT_ALPHA};function z(H,Re,ie,he,Ie,Le,rt,It,Kt,St){if(H===Ar){E===!0&&(Ae(s.BLEND),E=!1);return}if(E===!1&&(_e(s.BLEND),E=!0),H!==Xv){if(H!==y||St!==R){if((v!==Kr||b!==Kr)&&(s.blendEquation(s.FUNC_ADD),v=Kr,b=Kr),St)switch(H){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.ONE,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,L=null,W=null,N=null,F.set(0,0,0),G=0,y=H,R=St}return}Ie=Ie||Re,Le=Le||ie,rt=rt||he,(Re!==v||Ie!==b)&&(s.blendEquationSeparate(lt[Re],lt[Ie]),v=Re,b=Ie),(ie!==I||he!==L||Le!==W||rt!==N)&&(s.blendFuncSeparate(Dt[ie],Dt[he],Dt[Le],Dt[rt]),I=ie,L=he,W=Le,N=rt),(It.equals(F)===!1||Kt!==G)&&(s.blendColor(It.r,It.g,It.b,Kt),F.copy(It),G=Kt),y=H,R=!1}function Mn(H,Re){H.side===Hi?Ae(s.CULL_FACE):_e(s.CULL_FACE);let ie=H.side===zn;Re&&(ie=!ie),gt(ie),H.blending===qs&&H.transparent===!1?z(Ar):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const he=H.stencilWrite;f.setTest(he),he&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ct(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function dt(H){H!==Gv?(_e(s.CULL_FACE),H!==B&&(H===Qp?s.cullFace(s.BACK):H===Wv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),B=H}function Ye(H){H!==ae&&(oe&&s.lineWidth(H),ae=H)}function Ct(H,Re,ie){H?(_e(s.POLYGON_OFFSET_FILL),(K!==Re||ue!==ie)&&(s.polygonOffset(Re,ie),K=Re,ue=ie)):Ae(s.POLYGON_OFFSET_FILL)}function We(H){H?_e(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function P(H){H===void 0&&(H=s.TEXTURE0+de-1),le!==H&&(s.activeTexture(H),le=H)}function w(H,Re,ie){ie===void 0&&(le===null?ie=s.TEXTURE0+de-1:ie=le);let he=se[ie];he===void 0&&(he={type:void 0,texture:void 0},se[ie]=he),(he.type!==H||he.texture!==Re)&&(le!==ie&&(s.activeTexture(ie),le=ie),s.bindTexture(H,Re||me[H]),he.type=H,he.texture=Re)}function J(){const H=se[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(H){Te.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function ze(H){j.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function ht(H,Re){let ie=p.get(Re);ie===void 0&&(ie=new WeakMap,p.set(Re,ie));let he=ie.get(H);he===void 0&&(he=s.getUniformBlockIndex(Re,H.name),ie.set(H,he))}function it(H,Re){const he=p.get(Re).get(H);h.get(Re)!==he&&(s.uniformBlockBinding(Re,he,H.__bindingPointIndex),h.set(Re,he))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},le=null,se={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,I=null,L=null,b=null,W=null,N=null,F=new ct(0,0,0),G=0,R=!1,C=null,B=null,ae=null,K=null,ue=null,Te.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_e,disable:Ae,bindFramebuffer:De,drawBuffers:Ke,useProgram:Tt,setBlending:z,setMaterial:Mn,setFlipSided:gt,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:Ct,setScissorTest:We,activeTexture:P,bindTexture:w,unbindTexture:J,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:ke,texImage3D:$e,updateUBOMapping:ht,uniformBlockBinding:it,texStorage2D:ft,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:et,viewport:ze,reset:At}}function sT(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new st,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,w){return S?new OffscreenCanvas(P,w):ea("canvas")}function E(P,w,J){let pe=1;const ve=We(P);if((ve.width>J||ve.height>J)&&(pe=J/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(pe*ve.width),Xe=Math.floor(pe*ve.height);_===void 0&&(_=M(fe,Xe));const Ce=w?M(fe,Xe):_;return Ce.width=fe,Ce.height=Xe,Ce.getContext("2d").drawImage(P,0,0,fe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Xe+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,w,J,pe,ve=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=w;if(w===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),w===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),w===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),w===s.RGBA){const Xe=ve?ql:xt.getTransfer(pe);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=Xe===Rt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(P,w){let J;return P?w===null||w===es||w===to?J=s.DEPTH24_STENCIL8:w===Gi?J=s.DEPTH32F_STENCIL8:w===Qo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===to?J=s.DEPTH_COMPONENT24:w===Gi?J=s.DEPTH_COMPONENT32F:w===Qo&&(J=s.DEPTH_COMPONENT16),J}function W(P,w){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==di&&P.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function N(P){const w=P.target;w.removeEventListener("dispose",N),G(w),w.isVideoTexture&&g.delete(w)}function F(P){const w=P.target;w.removeEventListener("dispose",F),C(w)}function G(P){const w=r.get(P);if(w.__webglInit===void 0)return;const J=P.source,pe=x.get(J);if(pe){const ve=pe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(P),Object.keys(pe).length===0&&x.delete(J)}r.remove(P)}function R(P){const w=r.get(P);s.deleteTexture(w.__webglTexture);const J=P.source,pe=x.get(J);delete pe[w.__cacheKey],c.memory.textures--}function C(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ve=0;ve<w.__webglFramebuffer[pe].length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[pe][ve]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=P.textures;for(let pe=0,ve=J.length;pe<ve;pe++){const fe=r.get(J[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(J[pe])}r.remove(P)}let B=0;function ae(){B=0}function K(){const P=B;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),B+=1,P}function ue(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function de(P,w){const J=r.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(J,P,w);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function oe(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){j(J,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function ce(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){j(J,P,w);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function O(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){re(J,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const le={[eo]:s.REPEAT,[Zr]:s.CLAMP_TO_EDGE,[Df]:s.MIRRORED_REPEAT},se={[di]:s.NEAREST,[v0]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[zc]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},U={[M0]:s.NEVER,[R0]:s.ALWAYS,[E0]:s.LESS,[Pg]:s.LEQUAL,[T0]:s.EQUAL,[C0]:s.GEQUAL,[w0]:s.GREATER,[A0]:s.NOTEQUAL};function ne(P,w){if(w.type===Gi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===zc||w.magFilter===pl||w.magFilter===Qr||w.minFilter===Si||w.minFilter===zc||w.minFilter===pl||w.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,le[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,le[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,le[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===di||w.minFilter!==pl&&w.minFilter!==Qr||w.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Te(P,w){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",N));const pe=w.source;let ve=x.get(pe);ve===void 0&&(ve={},x.set(pe,ve));const fe=ue(w);if(fe!==P.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ve[fe].usedTimes++;const Xe=ve[P.__cacheKey];Xe!==void 0&&(ve[P.__cacheKey].usedTimes--,Xe.usedTimes===0&&R(w)),P.__cacheKey=fe,P.__webglTexture=ve[fe].texture}return J}function j(P,w,J){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const ve=Te(P,w),fe=w.source;t.bindTexture(pe,P.__webglTexture,s.TEXTURE0+J);const Xe=r.get(fe);if(fe.version!==Xe.__version||ve===!0){t.activeTexture(s.TEXTURE0+J);const Ce=xt.getPrimaries(xt.workingColorSpace),Fe=w.colorSpace===wr?null:xt.getPrimaries(w.colorSpace),ft=w.colorSpace===wr||Ce===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=E(w.image,!1,a.maxTextureSize);Me=Ct(w,Me);const ke=l.convert(w.format,w.colorSpace),$e=l.convert(w.type);let et=L(w.internalFormat,ke,$e,w.colorSpace,w.isVideoTexture);ne(pe,w);let ze;const ht=w.mipmaps,it=w.isVideoTexture!==!0,At=Xe.__version===void 0||ve===!0,H=fe.dataReady,Re=W(w,Me);if(w.isDepthTexture)et=b(w.format===no,w.type),At&&(it?t.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,$e,null));else if(w.isDataTexture)if(ht.length>0){it&&At&&t.texStorage2D(s.TEXTURE_2D,Re,et,ht[0].width,ht[0].height);for(let ie=0,he=ht.length;ie<he;ie++)ze=ht[ie],it?H&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,$e,ze.data):t.texImage2D(s.TEXTURE_2D,ie,et,ze.width,ze.height,0,ke,$e,ze.data);w.generateMipmaps=!1}else it?(At&&t.texStorage2D(s.TEXTURE_2D,Re,et,Me.width,Me.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,$e,Me.data)):t.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,$e,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,ht[0].width,ht[0].height,Me.depth);for(let ie=0,he=ht.length;ie<he;ie++)if(ze=ht[ie],w.format!==fi)if(ke!==null)if(it){if(H)if(w.layerUpdates.size>0){const Ie=Om(ze.width,ze.height,w.format,w.type);for(const Le of w.layerUpdates){const rt=ze.data.subarray(Le*Ie/ze.data.BYTES_PER_ELEMENT,(Le+1)*Ie/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Le,ze.width,ze.height,1,ke,rt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Me.depth,ke,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,et,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Me.depth,ke,$e,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,et,ze.width,ze.height,Me.depth,0,ke,$e,ze.data)}else{it&&At&&t.texStorage2D(s.TEXTURE_2D,Re,et,ht[0].width,ht[0].height);for(let ie=0,he=ht.length;ie<he;ie++)ze=ht[ie],w.format!==fi?ke!==null?it?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,$e,ze.data):t.texImage2D(s.TEXTURE_2D,ie,et,ze.width,ze.height,0,ke,$e,ze.data)}else if(w.isDataArrayTexture)if(it){if(At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,Me.width,Me.height,Me.depth),H)if(w.layerUpdates.size>0){const ie=Om(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const Ie=Me.data.subarray(he*ie/Me.data.BYTES_PER_ELEMENT,(he+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,ke,$e,Ie)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,$e,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,ke,$e,Me.data);else if(w.isData3DTexture)it?(At&&t.texStorage3D(s.TEXTURE_3D,Re,et,Me.width,Me.height,Me.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,$e,Me.data)):t.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,ke,$e,Me.data);else if(w.isFramebufferTexture){if(At)if(it)t.texStorage2D(s.TEXTURE_2D,Re,et,Me.width,Me.height);else{let ie=Me.width,he=Me.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,et,ie,he,0,ke,$e,null),ie>>=1,he>>=1}}else if(ht.length>0){if(it&&At){const ie=We(ht[0]);t.texStorage2D(s.TEXTURE_2D,Re,et,ie.width,ie.height)}for(let ie=0,he=ht.length;ie<he;ie++)ze=ht[ie],it?H&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke,$e,ze):t.texImage2D(s.TEXTURE_2D,ie,et,ke,$e,ze);w.generateMipmaps=!1}else if(it){if(At){const ie=We(Me);t.texStorage2D(s.TEXTURE_2D,Re,et,ie.width,ie.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,$e,Me)}else t.texImage2D(s.TEXTURE_2D,0,et,ke,$e,Me);y(w)&&v(pe),Xe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function re(P,w,J){if(w.image.length!==6)return;const pe=Te(P,w),ve=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const fe=r.get(ve);if(ve.version!==fe.__version||pe===!0){t.activeTexture(s.TEXTURE0+J);const Xe=xt.getPrimaries(xt.workingColorSpace),Ce=w.colorSpace===wr?null:xt.getPrimaries(w.colorSpace),Fe=w.colorSpace===wr||Xe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!ft&&!Me?ke[he]=E(w.image[he],!0,a.maxCubemapSize):ke[he]=Me?w.image[he].image:w.image[he],ke[he]=Ct(w,ke[he]);const $e=ke[0],et=l.convert(w.format,w.colorSpace),ze=l.convert(w.type),ht=L(w.internalFormat,et,ze,w.colorSpace),it=w.isVideoTexture!==!0,At=fe.__version===void 0||pe===!0,H=ve.dataReady;let Re=W(w,$e);ne(s.TEXTURE_CUBE_MAP,w);let ie;if(ft){it&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,$e.width,$e.height);for(let he=0;he<6;he++){ie=ke[he].mipmaps;for(let Ie=0;Ie<ie.length;Ie++){const Le=ie[Ie];w.format!==fi?et!==null?it?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,Le.width,Le.height,et,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,ht,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,Le.width,Le.height,et,ze,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,ht,Le.width,Le.height,0,et,ze,Le.data)}}}else{if(ie=w.mipmaps,it&&At){ie.length>0&&Re++;const he=We(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Me){it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,et,ze,ke[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,ke[he].width,ke[he].height,0,et,ze,ke[he].data);for(let Ie=0;Ie<ie.length;Ie++){const rt=ie[Ie].image[he].image;it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,rt.width,rt.height,et,ze,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,ht,rt.width,rt.height,0,et,ze,rt.data)}}else{it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,ze,ke[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,et,ze,ke[he]);for(let Ie=0;Ie<ie.length;Ie++){const Le=ie[Ie];it?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,et,ze,Le.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,ht,et,ze,Le.image[he])}}}y(w)&&v(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function me(P,w,J,pe,ve,fe){const Xe=l.convert(J.format,J.colorSpace),Ce=l.convert(J.type),Fe=L(J.internalFormat,Xe,Ce,J.colorSpace),ft=r.get(w),Me=r.get(J);if(Me.__renderTarget=w,!ft.__hasExternalTextures){const ke=Math.max(1,w.width>>fe),$e=Math.max(1,w.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,Fe,ke,$e,w.depth,0,Xe,Ce,null):t.texImage2D(ve,fe,Fe,ke,$e,0,Xe,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ve,Me.__webglTexture,0,gt(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ve,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(P,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const pe=w.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,fe=b(w.stencilBuffer,ve),Xe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=gt(w);dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,fe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,P)}else{const pe=w.textures;for(let ve=0;ve<pe.length;ve++){const fe=pe[ve],Xe=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),Fe=L(fe.internalFormat,Xe,Ce,fe.colorSpace),ft=gt(w);J&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Fe,w.width,w.height):dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de(w.depthTexture,0);const ve=pe.__webglTexture,fe=gt(w);if(w.depthTexture.format===Ks)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(w.depthTexture.format===no)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function De(P){const w=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=pe}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,P)}else if(J){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[pe],P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(P,w,J){const pe=r.get(P);w!==void 0&&me(pe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&De(P)}function Tt(P){const w=P.texture,J=r.get(P),pe=r.get(w);P.addEventListener("dispose",F);const ve=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Xe=ve.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,c.memory.textures++),fe){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)J.__webglFramebuffer[Ce][Fe]=s.createFramebuffer()}else J.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ft=r.get(ve[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&dt(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Fe=ve[Ce];J.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const ft=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),ke=L(Fe.internalFormat,ft,Me,Fe.colorSpace,P.isXRRenderTarget===!0),$e=gt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ke,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)me(J.__webglFramebuffer[Ce][Fe],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else me(J.__webglFramebuffer[Ce],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ft=ve[Ce],Me=r.get(ft);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ne(s.TEXTURE_2D,ft),me(J.__webglFramebuffer,P,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ft)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),ne(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)me(J.__webglFramebuffer[Fe],P,w,s.COLOR_ATTACHMENT0,Ce,Fe);else me(J.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Ce,0);y(w)&&v(Ce),t.unbindTexture()}P.depthBuffer&&De(P)}function lt(P){const w=P.textures;for(let J=0,pe=w.length;J<pe;J++){const ve=w[J];if(y(ve)){const fe=I(P),Xe=r.get(ve).__webglTexture;t.bindTexture(fe,Xe),v(fe),t.unbindTexture()}}}const Dt=[],z=[];function Mn(P){if(P.samples>0){if(dt(P)===!1){const w=P.textures,J=P.width,pe=P.height;let ve=s.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(P),Ce=w.length>1;if(Ce)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ft=r.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,J,pe,0,0,J,pe,ve,s.NEAREST),h===!0&&(Dt.length=0,z.length=0,Dt.push(s.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Dt.push(fe),z.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ft=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function gt(P){return Math.min(a.maxSamples,P.samples)}function dt(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(P){const w=c.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function Ct(P,w){const J=P.colorSpace,pe=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==io&&J!==wr&&(xt.getTransfer(J)===Rt?(pe!==fi||ve!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=ae,this.setTexture2D=de,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=O,this.rebindTextures=Ke,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=me,this.useMultisampledRTT=dt}function oT(s,e){function t(r,a=wr){let l;const c=xt.getTransfer(a);if(r===Yi)return s.UNSIGNED_BYTE;if(r===fd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return s.BYTE;if(r===yg)return s.SHORT;if(r===Qo)return s.UNSIGNED_SHORT;if(r===cd)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ta)return s.HALF_FLOAT;if(r===Mg)return s.ALPHA;if(r===Eg)return s.RGB;if(r===fi)return s.RGBA;if(r===Tg)return s.LUMINANCE;if(r===wg)return s.LUMINANCE_ALPHA;if(r===Ks)return s.DEPTH_COMPONENT;if(r===no)return s.DEPTH_STENCIL;if(r===Ag)return s.RED;if(r===hd)return s.RED_INTEGER;if(r===Cg)return s.RG;if(r===pd)return s.RG_INTEGER;if(r===md)return s.RGBA_INTEGER;if(r===Vl||r===Hl||r===Gl||r===Wl)if(c===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lf||r===If||r===Uf||r===Nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===If)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ff||r===Of||r===kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ff||r===Of)return c===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===kf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zf||r===Bf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===jf||r===Yf||r===qf||r===Kf||r===$f||r===Zf||r===Qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===zf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$f)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xl||r===Jf||r===ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xl)return c===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rg||r===td||r===nd||r===id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===td)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===to?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const aT={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,r),v=this._getHandJoint(p,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(aT)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
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

}`;class cT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Pn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ki({vertexShader:lT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new sa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fT extends is{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,_=null,x=null,S=null,M=null;const E=new cT,y=t.getContextAttributes();let v=null,I=null;const L=[],b=[],W=new st;let N=null;const F=new ei;F.viewport=new Wt;const G=new ei;G.viewport=new Wt;const R=[F,G],C=new Px;let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=L[j];return re===void 0&&(re=new gf,L[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=L[j];return re===void 0&&(re=new gf,L[j]=re),re.getGripSpace()},this.getHand=function(j){let re=L[j];return re===void 0&&(re=new gf,L[j]=re),re.getHandSpace()};function K(j){const re=b.indexOf(j.inputSource);if(re===-1)return;const me=L[re];me!==void 0&&(me.update(j.inputSource,j.frame,p||c),me.dispatchEvent({type:j.type,data:j.inputSource}))}function ue(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",de);for(let j=0;j<L.length;j++){const re=b[j];re!==null&&(b[j]=null,L[j].disconnect(re))}B=null,ae=null,E.reset(),e.setRenderTarget(v),S=null,x=null,_=null,a=null,I=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(W),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let me=null,_e=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?no:Ks,_e=y.stencil?to:es);const De={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};_=new XRWebGLBinding(a,t),x=_.createProjectionLayer(De),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new ts(x.textureWidth,x.textureHeight,{format:fi,type:Yi,depthTexture:new Vg(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new ts(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}I.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Te.setContext(a),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function de(j){for(let re=0;re<j.removed.length;re++){const me=j.removed[re],_e=b.indexOf(me);_e>=0&&(b[_e]=null,L[_e].disconnect(me))}for(let re=0;re<j.added.length;re++){const me=j.added[re];let _e=b.indexOf(me);if(_e===-1){for(let De=0;De<L.length;De++)if(De>=b.length){b.push(me),_e=De;break}else if(b[De]===null){b[De]=me,_e=De;break}if(_e===-1)break}const Ae=L[_e];Ae&&Ae.connect(me)}}const oe=new q,ce=new q;function O(j,re,me){oe.setFromMatrixPosition(re.matrixWorld),ce.setFromMatrixPosition(me.matrixWorld);const _e=oe.distanceTo(ce),Ae=re.projectionMatrix.elements,De=me.projectionMatrix.elements,Ke=Ae[14]/(Ae[10]-1),Tt=Ae[14]/(Ae[10]+1),lt=(Ae[9]+1)/Ae[5],Dt=(Ae[9]-1)/Ae[5],z=(Ae[8]-1)/Ae[0],Mn=(De[8]+1)/De[0],gt=Ke*z,dt=Ke*Mn,Ye=_e/(-z+Mn),Ct=Ye*-z;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ct),j.translateZ(Ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const We=Ke+Ye,P=Tt+Ye,w=gt-Ct,J=dt+(_e-Ct),pe=lt*Tt/P*We,ve=Dt*Tt/P*We;j.projectionMatrix.makePerspective(w,J,pe,ve,We,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let re=j.near,me=j.far;E.texture!==null&&(E.depthNear>0&&(re=E.depthNear),E.depthFar>0&&(me=E.depthFar)),C.near=G.near=F.near=re,C.far=G.far=F.far=me,(B!==C.near||ae!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ae=C.far),F.layers.mask=j.layers.mask|2,G.layers.mask=j.layers.mask|4,C.layers.mask=F.layers.mask|G.layers.mask;const _e=j.parent,Ae=C.cameras;le(C,_e);for(let De=0;De<Ae.length;De++)le(Ae[De],_e);Ae.length===2?O(C,F,G):C.projectionMatrix.copy(F.projectionMatrix),se(j,C,_e)};function se(j,re,me){me===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Jo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(j){h=j,x!==null&&(x.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let U=null;function ne(j,re){if(g=re.getViewerPose(p||c),M=re,g!==null){const me=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let _e=!1;me.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let De=0;De<me.length;De++){const Ke=me[De];let Tt=null;if(S!==null)Tt=S.getViewport(Ke);else{const Dt=_.getViewSubImage(x,Ke);Tt=Dt.viewport,De===0&&(e.setRenderTargetTextures(I,Dt.colorTexture,x.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(I))}let lt=R[De];lt===void 0&&(lt=new ei,lt.layers.enable(De),lt.viewport=new Wt,R[De]=lt),lt.matrix.fromArray(Ke.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Ke.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),De===0&&(C.matrix.copy(lt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(lt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const De=_.getDepthInformation(me[0]);De&&De.isValid&&De.texture&&E.init(e,De,a.renderState)}}for(let me=0;me<L.length;me++){const _e=b[me],Ae=L[me];_e!==null&&Ae!==void 0&&Ae.update(_e,re,p||c)}U&&U(j,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),M=null}const Te=new Yg;Te.setAnimationLoop(ne),this.setAnimationLoop=function(j){U=j},this.dispose=function(){}}}const Yr=new Ei,dT=new Ft;function hT(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,kg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,I,L,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,b)):v.isMeshMatcapMaterial?(l(y,v),M(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),E(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,I,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const I=e.get(v),L=I.envMap,b=I.envMapRotation;L&&(y.envMap.value=L,Yr.copy(b),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(dT.makeRotationFromEuler(Yr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,I,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*I,y.scale.value=L*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,I){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const I=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function pT(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const b=L.program;r.uniformBlockBinding(I,b)}function p(I,L){let b=a[I.id];b===void 0&&(M(I),b=g(I),a[I.id]=b,I.addEventListener("dispose",y));const W=L.program;r.updateUBOMapping(I,W);const N=e.render.frame;l[I.id]!==N&&(x(I),l[I.id]=N)}function g(I){const L=_();I.__bindingPointIndex=L;const b=s.createBuffer(),W=I.__size,N=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,W,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function _(){for(let I=0;I<f;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=a[I.id],b=I.uniforms,W=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let N=0,F=b.length;N<F;N++){const G=Array.isArray(b[N])?b[N]:[b[N]];for(let R=0,C=G.length;R<C;R++){const B=G[R];if(S(B,N,R,W)===!0){const ae=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let de=0;de<K.length;de++){const oe=K[de],ce=E(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+ue,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,ue),ue+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,L,b,W){const N=I.value,F=L+"_"+b;if(W[F]===void 0)return typeof N=="number"||typeof N=="boolean"?W[F]=N:W[F]=N.clone(),!0;{const G=W[F];if(typeof N=="number"||typeof N=="boolean"){if(G!==N)return W[F]=N,!0}else if(G.equals(N)===!1)return G.copy(N),!0}return!1}function M(I){const L=I.uniforms;let b=0;const W=16;for(let F=0,G=L.length;F<G;F++){const R=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,B=R.length;C<B;C++){const ae=R[C],K=Array.isArray(ae.value)?ae.value:[ae.value];for(let ue=0,de=K.length;ue<de;ue++){const oe=K[ue],ce=E(oe),O=b%W,le=O%ce.boundary,se=O+le;b+=le,se!==0&&W-se<ce.storage&&(b+=W-se),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=b,b+=ce.storage}}}const N=b%W;return N>0&&(b+=W-N),I.__size=b,I.__cache={},this}function E(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const I in a)s.deleteBuffer(a[I]);c=[],a={},l={}}return{bind:h,update:p,dispose:v}}class mT{constructor(e={}){const{canvas:t=j0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Cr,this.toneMappingExposure=1;const b=this;let W=!1,N=0,F=0,G=null,R=-1,C=null;const B=new Wt,ae=new Wt;let K=null;const ue=new ct(0);let de=0,oe=t.width,ce=t.height,O=1,le=null,se=null;const U=new Wt(0,0,oe,ce),ne=new Wt(0,0,oe,ce);let Te=!1;const j=new vd;let re=!1,me=!1;this.transmissionResolutionScale=1;const _e=new Ft,Ae=new Ft,De=new q,Ke=new Wt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Dt(){return G===null?O:1}let z=r;function Mn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ld}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),z===null){const X="webgl2";if(z=Mn(X,A),z===null)throw Mn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,dt,Ye,Ct,We,P,w,J,pe,ve,fe,Xe,Ce,Fe,ft,Me,ke,$e,et,ze,ht,it,At,H;function Re(){gt=new TM(z),gt.init(),it=new oT(z,gt),dt=new vM(z,gt,e,it),Ye=new rT(z,gt),dt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Ct=new CM(z),We=new XE,P=new sT(z,gt,Ye,We,dt,it,Ct),w=new yM(b),J=new EM(b),pe=new Ux(z),At=new gM(z,pe),ve=new wM(z,pe,Ct,At),fe=new bM(z,ve,pe,Ct),et=new RM(z,dt,P),Me=new xM(We),Xe=new WE(b,w,J,gt,dt,At,Me),Ce=new hT(b,We),Fe=new YE,ft=new JE(gt),$e=new mM(b,w,J,Ye,fe,S,h),ke=new nT(b,fe,dt),H=new pT(z,Ct,dt,Ye),ze=new _M(z,gt,Ct),ht=new AM(z,gt,Ct),Ct.programs=Xe.programs,b.capabilities=dt,b.extensions=gt,b.properties=We,b.renderLists=Fe,b.shadowMap=ke,b.state=Ye,b.info=Ct}Re();const ie=new fT(b,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(oe,ce,!1))},this.getSize=function(A){return A.set(oe,ce)},this.setSize=function(A,X,ee=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ce=X,t.width=Math.floor(A*O),t.height=Math.floor(X*O),ee===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(oe*O,ce*O).floor()},this.setDrawingBufferSize=function(A,X,ee){oe=A,ce=X,O=ee,t.width=Math.floor(A*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,X,ee,Z){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,ee,Z),Ye.viewport(B.copy(U).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,X,ee,Z){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,X,ee,Z),Ye.scissor(ae.copy(ne).multiplyScalar(O).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){Ye.setScissorTest(Te=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(A=!0,X=!0,ee=!0){let Z=0;if(A){let Y=!1;if(G!==null){const Se=G.texture.format;Y=Se===md||Se===pd||Se===hd}if(Y){const Se=G.texture.type,be=Se===Yi||Se===es||Se===Qo||Se===to||Se===fd||Se===dd,Ue=$e.getClearColor(),Be=$e.getClearAlpha(),tt=Ue.r,Je=Ue.g,He=Ue.b;be?(M[0]=tt,M[1]=Je,M[2]=He,M[3]=Be,z.clearBufferuiv(z.COLOR,0,M)):(E[0]=tt,E[1]=Je,E[2]=He,E[3]=Be,z.clearBufferiv(z.COLOR,0,E))}else Z|=z.COLOR_BUFFER_BIT}X&&(Z|=z.DEPTH_BUFFER_BIT),ee&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),$e.dispose(),Fe.dispose(),ft.dispose(),We.dispose(),w.dispose(),J.dispose(),fe.dispose(),At.dispose(),H.dispose(),Xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",rs),ie.removeEventListener("sessionend",$i),Ti.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const A=Ct.autoReset,X=ke.enabled,ee=ke.autoUpdate,Z=ke.needsUpdate,Y=ke.type;Re(),Ct.autoReset=A,ke.enabled=X,ke.autoUpdate=ee,ke.needsUpdate=Z,ke.type=Y}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const X=A.target;X.removeEventListener("dispose",rt),It(X)}function It(A){Kt(A),We.remove(A)}function Kt(A){const X=We.get(A).programs;X!==void 0&&(X.forEach(function(ee){Xe.releaseProgram(ee)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ee,Z,Y,Se){X===null&&(X=Tt);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=la(A,X,ee,Z,Y);Ye.setMaterial(Z,be);let Be=ee.index,tt=1;if(Z.wireframe===!0){if(Be=ve.getWireframeAttribute(ee),Be===void 0)return;tt=2}const Je=ee.drawRange,He=ee.attributes.position;let vt=Je.start*tt,ot=(Je.start+Je.count)*tt;Se!==null&&(vt=Math.max(vt,Se.start*tt),ot=Math.min(ot,(Se.start+Se.count)*tt)),Be!==null?(vt=Math.max(vt,0),ot=Math.min(ot,Be.count)):He!=null&&(vt=Math.max(vt,0),ot=Math.min(ot,He.count));const Vt=ot-vt;if(Vt<0||Vt===1/0)return;At.setup(Y,Z,Ue,ee,Be);let Ot,yt=ze;if(Be!==null&&(Ot=pe.get(Be),yt=ht,yt.setIndex(Ot)),Y.isMesh)Z.wireframe===!0?(Ye.setLineWidth(Z.wireframeLinewidth*Dt()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(Y.isLine){let qe=Z.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Dt()),Y.isLineSegments?yt.setMode(z.LINES):Y.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else Y.isPoints?yt.setMode(z.POINTS):Y.isSprite&&yt.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)yt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,Ht=Y._multiDrawCounts,_t=Y._multiDrawCount,pn=Be?pe.get(Be).bytesPerElement:1,Qi=We.get(Z).currentProgram.getUniforms();for(let Tn=0;Tn<_t;Tn++)Qi.setValue(z,"_gl_DrawID",Tn),yt.render(qe[Tn]/pn,Ht[Tn])}else if(Y.isInstancedMesh)yt.renderInstances(vt,Vt,Y.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ht=Math.min(ee.instanceCount,qe);yt.renderInstances(vt,Vt,Ht)}else yt.render(vt,Vt)};function St(A,X,ee){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,ss(A,X,ee),A.side=ji,A.needsUpdate=!0,ss(A,X,ee),A.side=Hi):ss(A,X,ee)}this.compile=function(A,X,ee=null){ee===null&&(ee=A),v=ft.get(ee),v.init(X),L.push(v),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==ee&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const Z=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){const Ue=Se[be];St(Ue,ee,Y),Z.add(Ue)}else St(Se,ee,Y),Z.add(Se)}),L.pop(),v=null,Z},this.compileAsync=function(A,X,ee=null){const Z=this.compile(A,X,ee);return new Promise(Y=>{function Se(){if(Z.forEach(function(be){We.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){Y(A);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Dn=null;function En(A){Dn&&Dn(A)}function rs(){Ti.stop()}function $i(){Ti.start()}const Ti=new Yg;Ti.setAnimationLoop(En),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Dn=A,ie.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},ie.addEventListener("sessionstart",rs),ie.addEventListener("sessionend",$i),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,X,G),v=ft.get(A,L.length),v.init(X),L.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(Ae),me=this.localClippingEnabled,re=Me.init(this.clippingPlanes,me),y=Fe.get(A,I.length),y.init(),I.push(y),ie.enabled===!0&&ie.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&wi(Se,X,-1/0,b.sortObjects)}wi(A,X,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(le,se),lt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,lt&&$e.addToRenderList(y,A),this.info.render.frame++,re===!0&&Me.beginShadows();const ee=v.state.shadowsArray;ke.render(ee,A,X),re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,Y=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Se=X.cameras;if(Y.length>0)for(let be=0,Ue=Se.length;be<Ue;be++){const Be=Se[be];br(Z,Y,A,Be)}lt&&$e.render(A);for(let be=0,Ue=Se.length;be<Ue;be++){const Be=Se[be];Rr(y,A,Be,Be.viewport)}}else Y.length>0&&br(Z,Y,A,X),lt&&$e.render(A),Rr(y,A,X);G!==null&&F===0&&(P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(b,A,X),At.resetDefaultState(),R=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],re===!0&&Me.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function wi(A,X,ee,Z){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Z&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const be=fe.update(A),Ue=A.material;Ue.visible&&y.push(A,be,Ue,ee,Ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const be=fe.update(A),Ue=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ke.copy(be.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ue)){const Be=be.groups;for(let tt=0,Je=Be.length;tt<Je;tt++){const He=Be[tt],vt=Ue[He.materialIndex];vt&&vt.visible&&y.push(A,be,vt,ee,Ke.z,He)}}else Ue.visible&&y.push(A,be,Ue,ee,Ke.z,null)}}const Se=A.children;for(let be=0,Ue=Se.length;be<Ue;be++)wi(Se[be],X,ee,Z)}function Rr(A,X,ee,Z){const Y=A.opaque,Se=A.transmissive,be=A.transparent;v.setupLightsView(ee),re===!0&&Me.setGlobalState(b.clippingPlanes,ee),Z&&Ye.viewport(B.copy(Z)),Y.length>0&&Zi(Y,X,ee),Se.length>0&&Zi(Se,X,ee),be.length>0&&Zi(be,X,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function br(A,X,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Z.id]===void 0&&(v.state.transmissionRenderTarget[Z.id]=new ts(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?ta:Yi,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const Se=v.state.transmissionRenderTarget[Z.id],be=Z.viewport||B;Se.setSize(be.z*b.transmissionResolutionScale,be.w*b.transmissionResolutionScale);const Ue=b.getRenderTarget();b.setRenderTarget(Se),b.getClearColor(ue),de=b.getClearAlpha(),de<1&&b.setClearColor(16777215,.5),b.clear(),lt&&$e.render(ee);const Be=b.toneMapping;b.toneMapping=Cr;const tt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),v.setupLightsView(Z),re===!0&&Me.setGlobalState(b.clippingPlanes,Z),Zi(A,ee,Z),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,vt=X.length;He<vt;He++){const ot=X[He],Vt=ot.object,Ot=ot.geometry,yt=ot.material,qe=ot.group;if(yt.side===Hi&&Vt.layers.test(Z.layers)){const Ht=yt.side;yt.side=zn,yt.needsUpdate=!0,oa(Vt,ee,Z,Ot,yt,qe),yt.side=Ht,yt.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}b.setRenderTarget(Ue),b.setClearColor(ue,de),tt!==void 0&&(Z.viewport=tt),b.toneMapping=Be}function Zi(A,X,ee){const Z=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Se=A.length;Y<Se;Y++){const be=A[Y],Ue=be.object,Be=be.geometry,tt=Z===null?be.material:Z,Je=be.group;Ue.layers.test(ee.layers)&&oa(Ue,X,ee,Be,tt,Je)}}function oa(A,X,ee,Z,Y,Se){A.onBeforeRender(b,X,ee,Z,Y,Se),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(b,X,ee,Z,A,Se),Y.transparent===!0&&Y.side===Hi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,b.renderBufferDirect(ee,X,Z,Y,A,Se),Y.side=ji,Y.needsUpdate=!0,b.renderBufferDirect(ee,X,Z,Y,A,Se),Y.side=Hi):b.renderBufferDirect(ee,X,Z,Y,A,Se),A.onAfterRender(b,X,ee,Z,Y,Se)}function ss(A,X,ee){X.isScene!==!0&&(X=Tt);const Z=We.get(A),Y=v.state.lights,Se=v.state.shadowsArray,be=Y.state.version,Ue=Xe.getParameters(A,Y.state,Se,X,ee),Be=Xe.getProgramCacheKey(Ue);let tt=Z.programs;Z.environment=A.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(A.isMeshStandardMaterial?J:w).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",rt),tt=new Map,Z.programs=tt);let Je=tt.get(Be);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===be)return pi(A,Ue),Je}else Ue.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Ue,b),Je=Xe.acquireProgram(Ue,Be),tt.set(Be,Je),Z.uniforms=Ue.uniforms;const He=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),pi(A,Ue),Z.needsLights=iu(A),Z.lightsStateVersion=be,Z.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function aa(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Yl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function pi(A,X){const ee=We.get(A);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function la(A,X,ee,Z,Y){X.isScene!==!0&&(X=Tt),P.resetTextureUnits();const Se=X.fog,be=Z.isMeshStandardMaterial?X.environment:null,Ue=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:io,Be=(Z.isMeshStandardMaterial?J:w).get(Z.envMap||be),tt=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,ot=!!ee.morphAttributes.color;let Vt=Cr;Z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const Ot=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,yt=Ot!==void 0?Ot.length:0,qe=We.get(Z),Ht=v.state.lights;if(re===!0&&(me===!0||A!==C)){const un=A===C&&Z.id===R;Me.setState(Z,A,un)}let _t=!1;Z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==Ue||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Be||Z.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==Je||qe.morphTargets!==He||qe.morphNormals!==vt||qe.morphColors!==ot||qe.toneMapping!==Vt||qe.morphTargetsCount!==yt)&&(_t=!0):(_t=!0,qe.__version=Z.version);let pn=qe.currentProgram;_t===!0&&(pn=ss(Z,X,Y));let Qi=!1,Tn=!1,Ai=!1;const Pt=pn.getUniforms(),mn=qe.uniforms;if(Ye.useProgram(pn.program)&&(Qi=!0,Tn=!0,Ai=!0),Z.id!==R&&(R=Z.id,Tn=!0),Qi||C!==A){Ye.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),q0(_e),K0(_e),Pt.setValue(z,"projectionMatrix",_e)):Pt.setValue(z,"projectionMatrix",A.projectionMatrix),Pt.setValue(z,"viewMatrix",A.matrixWorldInverse);const nn=Pt.map.cameraPosition;nn!==void 0&&nn.setValue(z,De.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Pt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Tn=!0,Ai=!0)}if(Y.isSkinnedMesh){Pt.setOptional(z,Y,"bindMatrix"),Pt.setOptional(z,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Pt.setValue(z,"boneTexture",un.boneTexture,P))}Y.isBatchedMesh&&(Pt.setOptional(z,Y,"batchingTexture"),Pt.setValue(z,"batchingTexture",Y._matricesTexture,P),Pt.setOptional(z,Y,"batchingIdTexture"),Pt.setValue(z,"batchingIdTexture",Y._indirectTexture,P),Pt.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pt.setValue(z,"batchingColorTexture",Y._colorsTexture,P));const tn=ee.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&et.update(Y,ee,pn),(Tn||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Pt.setValue(z,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mn.envMap.value=Be,mn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&X.environment!==null&&(mn.envMapIntensity.value=X.environmentIntensity),Tn&&(Pt.setValue(z,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&ua(mn,Ai),Se&&Z.fog===!0&&Ce.refreshFogUniforms(mn,Se),Ce.refreshMaterialUniforms(mn,Z,O,ce,v.state.transmissionRenderTarget[A.id]),Yl.upload(z,aa(qe),mn,P)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Yl.upload(z,aa(qe),mn,P),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(z,"center",Y.center),Pt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(z,"normalMatrix",Y.normalMatrix),Pt.setValue(z,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const un=Z.uniformsGroups;for(let nn=0,Mt=un.length;nn<Mt;nn++){const mi=un[nn];H.update(mi,pn),H.bind(mi,pn)}}return pn}function ua(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function iu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,X,ee){We.get(A.texture).__webglTexture=X,We.get(A.depthTexture).__webglTexture=ee;const Z=We.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=ee===void 0,Z.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ee=We.get(A);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const ca=z.createFramebuffer();this.setRenderTarget=function(A,X=0,ee=0){G=A,N=X,F=ee;let Z=!0,Y=null,Se=!1,be=!1;if(A){const Be=We.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(z.FRAMEBUFFER,null),Z=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Be.__hasExternalTextures)P.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&We.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(be=!0);const Je=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][ee]:Y=Je[X],Se=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Y=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,B.copy(A.viewport),ae.copy(A.scissor),K=A.scissorTest}else B.copy(U).multiplyScalar(O).floor(),ae.copy(ne).multiplyScalar(O).floor(),K=Te;if(ee!==0&&(Y=ca),Ye.bindFramebuffer(z.FRAMEBUFFER,Y)&&Z&&Ye.drawBuffers(A,Y),Ye.viewport(B),Ye.scissor(ae),Ye.setScissorTest(K),Se){const Be=We.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ee)}else if(be){const Be=We.get(A.texture),tt=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,ee,tt)}else if(A!==null&&ee!==0){const Be=We.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,ee)}R=-1},this.readRenderTargetPixels=function(A,X,ee,Z,Y,Se,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){Ye.bindFramebuffer(z.FRAMEBUFFER,Ue);try{const Be=A.texture,tt=Be.format,Je=Be.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Z&&ee>=0&&ee<=A.height-Y&&z.readPixels(X,ee,Z,Y,it.convert(tt),it.convert(Je),Se)}finally{const Be=G!==null?We.get(G).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,X,ee,Z,Y,Se,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){const Be=A.texture,tt=Be.format,Je=Be.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-Z&&ee>=0&&ee<=A.height-Y){Ye.bindFramebuffer(z.FRAMEBUFFER,Ue);const He=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,He),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(X,ee,Z,Y,it.convert(tt),it.convert(Je),0);const vt=G!==null?We.get(G).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,vt);const ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Y0(z,ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,He),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.deleteBuffer(He),z.deleteSync(ot),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ee=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-ee),Y=Math.floor(A.image.width*Z),Se=Math.floor(A.image.height*Z),be=X!==null?X.x:0,Ue=X!==null?X.y:0;P.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,be,Ue,Y,Se),Ye.unbindTexture()};const fa=z.createFramebuffer(),da=z.createFramebuffer();this.copyTextureToTexture=function(A,X,ee=null,Z=null,Y=0,Se=null){A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],X=arguments[2],Se=arguments[3]||0,ee=null),Se===null&&(Y!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Y,Y=0):Se=0);let be,Ue,Be,tt,Je,He,vt,ot,Vt;const Ot=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ee!==null)be=ee.max.x-ee.min.x,Ue=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Je=ee.min.y,He=ee.isBox3?ee.min.z:0;else{const tn=Math.pow(2,-Y);be=Math.floor(Ot.width*tn),Ue=Math.floor(Ot.height*tn),A.isDataArrayTexture?Be=Ot.depth:A.isData3DTexture?Be=Math.floor(Ot.depth*tn):Be=1,tt=0,Je=0,He=0}Z!==null?(vt=Z.x,ot=Z.y,Vt=Z.z):(vt=0,ot=0,Vt=0);const yt=it.convert(X.format),qe=it.convert(X.type);let Ht;X.isData3DTexture?(P.setTexture3D(X,0),Ht=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Ht=z.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Ht=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const _t=z.getParameter(z.UNPACK_ROW_LENGTH),pn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qi=z.getParameter(z.UNPACK_SKIP_PIXELS),Tn=z.getParameter(z.UNPACK_SKIP_ROWS),Ai=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,He);const Pt=A.isDataArrayTexture||A.isData3DTexture,mn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const tn=We.get(A),un=We.get(X),nn=We.get(tn.__renderTarget),Mt=We.get(un.__renderTarget);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let mi=0;mi<Be;mi++)Pt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(A).__webglTexture,Y,He+mi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Se,Vt+mi)),z.blitFramebuffer(tt,Je,be,Ue,vt,ot,be,Ue,z.DEPTH_BUFFER_BIT,z.NEAREST);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||We.has(A)){const tn=We.get(A),un=We.get(X);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,fa),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,da);for(let nn=0;nn<Be;nn++)Pt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,Y,He+nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,Y),mn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,Se,Vt+nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,Se),Y!==0?z.blitFramebuffer(tt,Je,be,Ue,vt,ot,be,Ue,z.COLOR_BUFFER_BIT,z.NEAREST):mn?z.copyTexSubImage3D(Ht,Se,vt,ot,Vt+nn,tt,Je,be,Ue):z.copyTexSubImage2D(Ht,Se,vt,ot,tt,Je,be,Ue);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else mn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ht,Se,vt,ot,Vt,be,Ue,Be,yt,qe,Ot.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Ht,Se,vt,ot,Vt,be,Ue,Be,yt,Ot.data):z.texSubImage3D(Ht,Se,vt,ot,Vt,be,Ue,Be,yt,qe,Ot):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,vt,ot,be,Ue,yt,qe,Ot.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,vt,ot,Ot.width,Ot.height,yt,Ot.data):z.texSubImage2D(z.TEXTURE_2D,Se,vt,ot,be,Ue,yt,qe,Ot);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Tn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ai),Se===0&&X.generateMipmaps&&z.generateMipmap(Ht),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ee=null,Z=null,Y=0){return A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ee,Z,Y)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){N=0,F=0,G=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const lg={type:"change"},Sd={type:"start"},Qg={type:"end"},zl=new ia,ug=new Tr,gT=Math.cos(70*X0.DEG2RAD),Qt=new q,kn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_f=1e-6;class _T extends Lx{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new ns,this._lastTargetPosition=new q,this._quat=new ns().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fm,this._sphericalDelta=new Fm,this._scale=1,this._panOffset=new q,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new q,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xT.bind(this),this._onPointerDown=vT.bind(this),this._onPointerUp=yT.bind(this),this._onContextMenu=CT.bind(this),this._onMouseWheel=ET.bind(this),this._onKeyDown=TT.bind(this),this._onTouchStart=wT.bind(this),this._onTouchMove=AT.bind(this),this._onMouseDown=ST.bind(this),this._onMouseMove=MT.bind(this),this._interceptControlDown=RT.bind(this),this._interceptControlUp=bT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lg),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=kn:r>Math.PI&&(r-=kn),a<-Math.PI?a+=kn:a>Math.PI&&(a-=kn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=Qt.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new q(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),c=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(zl.origin.copy(this.object.position),zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zl.direction))<gT?this.object.lookAt(this.target):(ug.setFromNormalAndCoplanarPoint(this.object.up,this.target),zl.intersectPlane(ug,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>_f||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_f||this._lastTargetPosition.distanceToSquared(this.target)>_f?(this.dispatchEvent(lg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Qt.copy(a).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,c=r.width,f=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new st,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function vT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function xT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function yT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qg),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ST(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case Ys.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case Ys.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Sd)}function MT(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ET(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(Sd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Qg))}function TT(s){this.enabled!==!1&&this._handleKeyDown(s)}function wT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Sd)}function AT(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function CT(s){this.enabled!==!1&&s.preventDefault()}function RT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const PT=/^[og]\s*(.+)?/,DT=/^mtllib /,LT=/^usemtl /,IT=/^usemap /,cg=/\s+/,fg=new q,vf=new q,dg=new q,hg=new q,Jn=new q,Bl=new ct;function UT(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(a,l){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const f={index:this.materials.length,name:a||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const p={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(a){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),a&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return a&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},r&&r.name&&typeof r.clone=="function"){const a=r.clone(0);a.inherited=!0,this.object.materials.push(a)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseNormalIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseUVIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/2)*2},addVertex:function(e,t,r){const a=this.vertices,l=this.object.geometry.vertices;l.push(a[e+0],a[e+1],a[e+2]),l.push(a[t+0],a[t+1],a[t+2]),l.push(a[r+0],a[r+1],a[r+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){const a=this.normals,l=this.object.geometry.normals;l.push(a[e+0],a[e+1],a[e+2]),l.push(a[t+0],a[t+1],a[t+2]),l.push(a[r+0],a[r+1],a[r+2])},addFaceNormal:function(e,t,r){const a=this.vertices,l=this.object.geometry.normals;fg.fromArray(a,e),vf.fromArray(a,t),dg.fromArray(a,r),Jn.subVectors(dg,vf),hg.subVectors(fg,vf),Jn.cross(hg),Jn.normalize(),l.push(Jn.x,Jn.y,Jn.z),l.push(Jn.x,Jn.y,Jn.z),l.push(Jn.x,Jn.y,Jn.z)},addColor:function(e,t,r){const a=this.colors,l=this.object.geometry.colors;a[e]!==void 0&&l.push(a[e+0],a[e+1],a[e+2]),a[t]!==void 0&&l.push(a[t+0],a[t+1],a[t+2]),a[r]!==void 0&&l.push(a[r+0],a[r+1],a[r+2])},addUV:function(e,t,r){const a=this.uvs,l=this.object.geometry.uvs;l.push(a[e+0],a[e+1]),l.push(a[t+0],a[t+1]),l.push(a[r+0],a[r+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,a,l,c,f,h,p){const g=this.vertices.length;let _=this.parseVertexIndex(e,g),x=this.parseVertexIndex(t,g),S=this.parseVertexIndex(r,g);if(this.addVertex(_,x,S),this.addColor(_,x,S),f!==void 0&&f!==""){const M=this.normals.length;_=this.parseNormalIndex(f,M),x=this.parseNormalIndex(h,M),S=this.parseNormalIndex(p,M),this.addNormal(_,x,S)}else this.addFaceNormal(_,x,S);if(a!==void 0&&a!==""){const M=this.uvs.length;_=this.parseUVIndex(a,M),x=this.parseUVIndex(l,M),S=this.parseUVIndex(c,M),this.addUV(_,x,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let r=0,a=e.length;r<a;r++){const l=this.parseVertexIndex(e[r],t);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const r=this.vertices.length,a=this.uvs.length;for(let l=0,c=e.length;l<c;l++)this.addVertexLine(this.parseVertexIndex(e[l],r));for(let l=0,c=t.length;l<c;l++)this.addUVLine(this.parseUVIndex(t[l],a))}};return s.startObject("",!1),s}class NT extends ao{constructor(e){super(e),this.materials=null}load(e,t,r,a){const l=this,c=new Wg(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{t(l.parse(f))}catch(h){a?a(h):console.error(h),l.manager.itemError(e)}},r,a)}setMaterials(e){return this.materials=e,this}parse(e){const t=new UT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const r=e.split(`
`);let a=[];for(let f=0,h=r.length;f<h;f++){const p=r[f].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const _=p.split(cg);switch(_[0]){case"v":t.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(Bl.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),dn),t.colors.push(Bl.r,Bl.g,Bl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":t.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const x=p.slice(1).trim().split(cg),S=[];for(let E=0,y=x.length;E<y;E++){const v=x[E];if(v.length>0){const I=v.split("/");S.push(I)}}const M=S[0];for(let E=1,y=S.length-1;E<y;E++){const v=S[E],I=S[E+1];t.addFace(M[0],v[0],I[0],M[1],v[1],I[1],M[2],v[2],I[2])}}else if(g==="l"){const _=p.substring(1).trim().split(" ");let x=[];const S=[];if(p.indexOf("/")===-1)x=_;else for(let M=0,E=_.length;M<E;M++){const y=_[M].split("/");y[0]!==""&&x.push(y[0]),y[1]!==""&&S.push(y[1])}t.addLineGeometry(x,S)}else if(g==="p"){const x=p.slice(1).trim().split(" ");t.addPointGeometry(x)}else if((a=PT.exec(p))!==null){const _=(" "+a[0].slice(1).trim()).slice(1);t.startObject(_)}else if(LT.test(p))t.object.startMaterial(p.substring(7).trim(),t.materialLibraries);else if(DT.test(p))t.materialLibraries.push(p.substring(7).trim());else if(IT.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(a=p.split(" "),a.length>1){const x=a[1].trim().toLowerCase();t.object.smooth=x!=="0"&&x!=="off"}else t.object.smooth=!0;const _=t.object.currentMaterial();_&&(_.smooth=t.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}t.finalize();const l=new Xs;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const p=t.objects[f],g=p.geometry,_=p.materials,x=g.type==="Line",S=g.type==="Points";let M=!1;if(g.vertices.length===0)continue;const E=new hi;E.setAttribute("position",new bn(g.vertices,3)),g.normals.length>0&&E.setAttribute("normal",new bn(g.normals,3)),g.colors.length>0&&(M=!0,E.setAttribute("color",new bn(g.colors,3))),g.hasUVIndices===!0&&E.setAttribute("uv",new bn(g.uvs,2));const y=[];for(let I=0,L=_.length;I<L;I++){const b=_[I],W=b.name+"_"+b.smooth+"_"+M;let N=t.materials[W];if(this.materials!==null){if(N=this.materials.create(b.name),x&&N&&!(N instanceof jl)){const F=new jl;qi.prototype.copy.call(F,N),F.color.copy(N.color),N=F}else if(S&&N&&!(N instanceof qo)){const F=new qo({size:10,sizeAttenuation:!1});qi.prototype.copy.call(F,N),F.color.copy(N.color),F.map=N.map,N=F}}N===void 0&&(x?N=new jl:S?N=new qo({size:1,sizeAttenuation:!1}):N=new Hg,N.name=b.name,N.flatShading=!b.smooth,N.vertexColors=M,t.materials[W]=N),y.push(N)}let v;if(y.length>1){for(let I=0,L=_.length;I<L;I++){const b=_[I];E.addGroup(b.groupStart,b.groupCount,I)}x?v=new Rm(E,y):S?v=new lf(E,y):v=new hn(E,y)}else x?v=new Rm(E,y[0]):S?v=new lf(E,y[0]):v=new hn(E,y[0]);v.name=p.name,l.add(v)}else if(t.vertices.length>0){const f=new qo({size:1,sizeAttenuation:!1}),h=new hi;h.setAttribute("position",new bn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new bn(t.colors,3)),f.vertexColors=!0);const p=new lf(h,f);l.add(p)}return l}}class FT extends ao{constructor(e){super(e)}load(e,t,r,a){const l=this,c=this.path===""?bx.extractUrlBase(e):this.path,f=new Wg(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{t(l.parse(h,c))}catch(p){a?a(p):console.error(p),l.manager.itemError(e)}},r,a)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const r=e.split(`
`);let a={};const l=/\s+/,c={};for(let h=0;h<r.length;h++){let p=r[h];if(p=p.trim(),p.length===0||p.charAt(0)==="#")continue;const g=p.indexOf(" ");let _=g>=0?p.substring(0,g):p;_=_.toLowerCase();let x=g>=0?p.substring(g+1):"";if(x=x.trim(),_==="newmtl")a={name:x},c[x]=a;else if(_==="ka"||_==="kd"||_==="ks"||_==="ke"){const S=x.split(l,3);a[_]=[parseFloat(S[0]),parseFloat(S[1]),parseFloat(S[2])]}else a[_]=x}const f=new OT(this.resourcePath||t,this.materialOptions);return f.setCrossOrigin(this.crossOrigin),f.setManager(this.manager),f.setMaterials(c),f}}class OT{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:ji,this.wrap=this.options.wrap!==void 0?this.options.wrap:eo}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const r in e){const a=e[r],l={};t[r]=l;for(const c in a){let f=!0,h=a[c];const p=c.toLowerCase();switch(p){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(h=[h[0]/255,h[1]/255,h[2]/255]),this.options&&this.options.ignoreZeroRGBs&&h[0]===0&&h[1]===0&&h[2]===0&&(f=!1);break}f&&(l[p]=h)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,r=this.materialsInfo[e],a={name:e,side:this.side};function l(f,h){return typeof h!="string"||h===""?"":/^https?:\/\//i.test(h)?h:f+h}function c(f,h){if(a[f])return;const p=t.getTextureParams(h,a),g=t.loadTexture(l(t.baseUrl,p.url));g.repeat.copy(p.scale),g.offset.copy(p.offset),g.wrapS=t.wrap,g.wrapT=t.wrap,(f==="map"||f==="emissiveMap")&&(g.colorSpace=dn),a[f]=g}for(const f in r){const h=r[f];let p;if(h!=="")switch(f.toLowerCase()){case"kd":a.color=xt.toWorkingColorSpace(new ct().fromArray(h),dn);break;case"ks":a.specular=xt.toWorkingColorSpace(new ct().fromArray(h),dn);break;case"ke":a.emissive=xt.toWorkingColorSpace(new ct().fromArray(h),dn);break;case"map_kd":c("map",h);break;case"map_ks":c("specularMap",h);break;case"map_ke":c("emissiveMap",h);break;case"norm":c("normalMap",h);break;case"map_bump":case"bump":c("bumpMap",h);break;case"map_d":c("alphaMap",h),a.transparent=!0;break;case"ns":a.shininess=parseFloat(h);break;case"d":p=parseFloat(h),p<1&&(a.opacity=p,a.transparent=!0);break;case"tr":p=parseFloat(h),this.options&&this.options.invertTrProperty&&(p=1-p),p>0&&(a.opacity=1-p,a.transparent=!0);break}}return this.materials[e]=new Hg(a),this.materials[e]}getTextureParams(e,t){const r={scale:new st(1,1),offset:new st(0,0)},a=e.split(/\s+/);let l;return l=a.indexOf("-bm"),l>=0&&(t.bumpScale=parseFloat(a[l+1]),a.splice(l,2)),l=a.indexOf("-s"),l>=0&&(r.scale.set(parseFloat(a[l+1]),parseFloat(a[l+2])),a.splice(l,4)),l=a.indexOf("-o"),l>=0&&(r.offset.set(parseFloat(a[l+1]),parseFloat(a[l+2])),a.splice(l,4)),r.url=a.join(" ").trim(),r}loadTexture(e,t,r,a,l){const c=this.manager!==void 0?this.manager:Gg;let f=c.getHandler(e);f===null&&(f=new Xg(c)),f.setCrossOrigin&&f.setCrossOrigin(this.crossOrigin);const h=f.load(e,r,a,l);return t!==void 0&&(h.mapping=t),h}}var Jg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pg=Jr.createContext&&Jr.createContext(Jg),kT=["attr","size","title"];function zT(s,e){if(s==null)return{};var t=BT(s,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(t[r]=s[r])}return t}function BT(s,e){if(s==null)return{};var t={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;t[r]=s[r]}return t}function Jl(){return Jl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Jl.apply(this,arguments)}function mg(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),t.push.apply(t,r)}return t}function eu(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mg(Object(t),!0).forEach(function(r){VT(s,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):mg(Object(t)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(t,r))})}return s}function VT(s,e,t){return e=HT(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function HT(s){var e=GT(s,"string");return typeof e=="symbol"?e:e+""}function GT(s,e){if(typeof s!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var r=t.call(s,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function e_(s){return s&&s.map((e,t)=>Jr.createElement(e.tag,eu({key:t},e.attr),e_(e.child)))}function t_(s){return e=>Jr.createElement(WT,Jl({attr:eu({},s.attr)},e),e_(s.child))}function WT(s){var e=t=>{var{attr:r,size:a,title:l}=s,c=zT(s,kT),f=a||t.size||"1em",h;return t.className&&(h=t.className),s.className&&(h=(h?h+" ":"")+s.className),Jr.createElement("svg",Jl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:h,style:eu(eu({color:s.color||t.color},t.style),s.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Jr.createElement("title",null,l),s.children)};return pg!==void 0?Jr.createElement(pg.Consumer,null,t=>e(t)):e(Jg)}function XT(s){return t_({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"},child:[]},{tag:"path",attr:{d:"M7 11l5 5l5 -5"},child:[]},{tag:"path",attr:{d:"M12 4l0 12"},child:[]}]})(s)}function jT(s){return t_({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 16h4v4"},child:[]},{tag:"path",attr:{d:"M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515"},child:[]}]})(s)}const YT="_spinnerOverlay_u1tts_1",qT="_spinner_u1tts_1",KT="_dot1_u1tts_22",$T="_dot2_u1tts_22",ZT="_bounce_u1tts_1",QT="_loadingText_u1tts_38",Yo={spinnerOverlay:YT,spinner:qT,dot1:KT,dot2:$T,bounce:ZT,loadingText:QT},JT=()=>we.jsxs("div",{className:Yo.spinnerOverlay,children:[we.jsxs("div",{className:Yo.spinner,children:[we.jsx("div",{className:Yo.dot1}),we.jsx("div",{className:Yo.dot2})]}),we.jsx("div",{className:Yo.loadingText,children:"Loading 3D Model..."})]}),ew="_sceneContainer_1g4p7_1",tw="_grabbing_1g4p7_19",nw="_resetViewButton_1g4p7_29",iw="_downloadButton_1g4p7_49",xf={sceneContainer:ew,grabbing:tw,"canvas-container":"_canvas-container_1g4p7_23",resetViewButton:nw,downloadButton:iw},rw="data:model/mtl;base64,IyAzZHMgTWF4IFdhdmVmcm9udCBPQkogRXhwb3J0ZXIgdjAuOTdiIC0gKGMpMjAwNyBndXJ1d2FyZQ0KIyBGaWxlIENyZWF0ZWQ6IDE3LjA2LjIwMjAgMTA6NDY6MjcNCg0KbmV3bXRsIHdpcmVfMTc2MDI3MDg4DQoJTnMgMzINCglkIDENCglUciAwDQoJVGYgMSAxIDENCglpbGx1bSAyDQoJS2EgMC42OTAyIDAuMTA1OSAwLjM0NTENCglLZCAwLjY5MDIgMC4xMDU5IDAuMzQ1MQ0KCUtzIDAuMzUwMCAwLjM1MDAgMC4zNTAwDQoNCm5ld210bCB3aXJlXzEzODAwODExMA0KCU5zIDMyDQoJZCAxDQoJVHIgMA0KCVRmIDEgMSAxDQoJaWxsdW0gMg0KCUthIDAuNTQxMiAwLjAzMTQgMC40MzE0DQoJS2QgMC41NDEyIDAuMDMxNCAwLjQzMTQNCglLcyAwLjM1MDAgMC4zNTAwIDAuMzUwMA0KDQpuZXdtdGwgd2lyZV8wODQwMjcxNzYNCglOcyAzMg0KCWQgMQ0KCVRyIDANCglUZiAxIDEgMQ0KCWlsbHVtIDINCglLYSAwLjMyOTQgMC4xMDU5IDAuNjkwMg0KCUtkIDAuMzI5NCAwLjEwNTkgMC42OTAyDQoJS3MgMC4zNTAwIDAuMzUwMCAwLjM1MDANCg0KbmV3bXRsIHdpcmVfMTc2MDI3MTQ4DQoJTnMgMzINCglkIDENCglUciAwDQoJVGYgMSAxIDENCglpbGx1bSAyDQoJS2EgMC42OTAyIDAuMTA1OSAwLjU4MDQNCglLZCAwLjY5MDIgMC4xMDU5IDAuNTgwNA0KCUtzIDAuMzUwMCAwLjM1MDAgMC4zNTAwDQoNCm5ld210bCB3aXJlXzE4NDIyNzE1Mw0KCU5zIDMyDQoJZCAxDQoJVHIgMA0KCVRmIDEgMSAxDQoJaWxsdW0gMg0KCUthIDAuNzIxNiAwLjg5MDIgMC42MDAwDQoJS2QgMC43MjE2IDAuODkwMiAwLjYwMDANCglLcyAwLjM1MDAgMC4zNTAwIDAuMzUwMA0KDQpuZXdtdGwgd2lyZV8yMjcxNTMxNTMNCglOcyAzMg0KCWQgMQ0KCVRyIDANCglUZiAxIDEgMQ0KCWlsbHVtIDINCglLYSAwLjg5MDIgMC42MDAwIDAuNjAwMA0KCUtkIDAuODkwMiAwLjYwMDAgMC42MDAwDQoJS3MgMC4zNTAwIDAuMzUwMCAwLjM1MDANCg0KbmV3bXRsIHdpcmVfMDI3MDI3MTc2DQoJTnMgMzINCglkIDENCglUciAwDQoJVGYgMSAxIDENCglpbGx1bSAyDQoJS2EgMC4xMDU5IDAuMTA1OSAwLjY5MDINCglLZCAwLjEwNTkgMC4xMDU5IDAuNjkwMg0KCUtzIDAuMzUwMCAwLjM1MDAgMC4zNTAwDQoNCm5ld210bCB3aXJlXzA4NzIyNTA4Nw0KCU5zIDMyDQoJZCAxDQoJVHIgMA0KCVRmIDEgMSAxDQoJaWxsdW0gMg0KCUthIDAuMzQxMiAwLjg4MjQgMC4zNDEyDQoJS2QgMC4zNDEyIDAuODgyNCAwLjM0MTINCglLcyAwLjM1MDAgMC4zNTAwIDAuMzUwMA0K",sw="/Virtual-Product/assets/chair-obj-SYJoJT6G.obj",ow=({modelScale:s,onSceneReady:e})=>{const[t,r]=jt.useState(!0),a=jt.useRef(null),l=jt.useRef(null),c=jt.useRef(null),f=jt.useRef(null),h=jt.useRef(null),p=jt.useRef(null),g=jt.useRef(null),_=jt.useRef(null),x=jt.useRef(null),S=()=>{if(c.current&&h.current&&g.current){const{position:E,target:y}=g.current,v=c.current.position.clone(),I=h.current.target.clone(),L=1e3,b=Date.now(),W=()=>{const N=Date.now()-b,F=Math.min(N/L,1),G=1-Math.pow(1-F,3);c.current.position.lerpVectors(v,E,G),h.current.target.lerpVectors(I,y,G),h.current.update(),F<1&&requestAnimationFrame(W)};W()}},M=()=>{if(f.current){f.current.render(l.current,c.current),f.current.render(_.current,x.current),f.current.render(l.current,c.current);const E=document.createElement("a");E.download="virtual-product.jpg",E.href=f.current.domElement.toDataURL("image/jpeg",.9),document.body.appendChild(E),E.click(),document.body.removeChild(E)}};return jt.useEffect(()=>{if(!a.current)return;const E=new Em;l.current=E;const y=new Em;_.current=y;const v=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,I=`
      varying vec2 vUv;
      uniform vec3 colorA;
      uniform vec3 colorB;
      void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.y), 1.0);
      }
    `,L={colorA:{value:new ct(14743551)},colorB:{value:new ct(16777215)}},b=new sa(2,2),W=new Ki({vertexShader:v,fragmentShader:I,uniforms:L,depthWrite:!1}),N=new hn(b,W);y.add(N);const F=new xd(-1,1,1,-1,-1,0);x.current=F;const G=new ei(45,window.innerWidth/2/window.innerHeight,.1,1e3);c.current=G,G.position.set(0,0,5);const R=new mT({antialias:!0,preserveDrawingBuffer:!0,alpha:!1});R.setSize(a.current.clientWidth,a.current.clientHeight),R.setPixelRatio(window.devicePixelRatio),R.shadowMap.enabled=!0,R.shadowMap.type=_g,R.autoClear=!1,a.current.appendChild(R.domElement),f.current=R;const C=new Dx,B=new st,ae=Te=>{const j=R.domElement.getBoundingClientRect();if(B.x=(Te.clientX-j.left)/j.width*2-1,B.y=-((Te.clientY-j.top)/j.height)*2+1,C.setFromCamera(B,G),p.current){const re=C.intersectObjects(p.current.children,!0);if(re.length>0){const me=re[0].object;console.log("Clicked part name:",me.name)}}};R.domElement.addEventListener("click",ae);const K=new _T(G,R.domElement);h.current=K,K.enableDamping=!0,K.dampingFactor=.08,K.rotateSpeed=1,K.minDistance=2,K.maxDistance=10,K.enablePan=!1,K.enableZoom=!0,K.minPolarAngle=0,K.maxPolarAngle=Math.PI,K.minAzimuthAngle=-1/0,K.maxAzimuthAngle=1/0,K.target.set(0,0,0),K.update();const ue=R.domElement,de=()=>{ue.classList.add("grabbing")},oe=()=>{ue.classList.remove("grabbing")};K.addEventListener("dragstart",de),K.addEventListener("dragend",oe),ue.addEventListener("mousedown",()=>{ue.classList.add("grabbing")}),ue.addEventListener("mouseup",()=>{ue.classList.remove("grabbing")}),ue.addEventListener("mouseleave",()=>{ue.classList.remove("grabbing")});const ce=new Rx(16777215,.5);E.add(ce);const O=new Im(16777215,.8);O.position.set(5,5,5),O.castShadow=!0,O.shadow.mapSize.width=2048,O.shadow.mapSize.height=2048,O.shadow.camera.near=.5,O.shadow.camera.far=500,O.shadow.camera.left=-10,O.shadow.camera.right=10,O.shadow.camera.top=10,O.shadow.camera.bottom=-10,O.shadow.bias=-1e-4,E.add(O);const le=new Im(16777215,.3);le.position.set(-5,3,-5),E.add(le),new FT().load(rw,Te=>{Te.preload();const j=new NT;j.setMaterials(Te),j.load(sw,re=>{console.log("OBJ loaded successfully",re);const me=new Xs,_e=new oo().setFromObject(re),Ae=_e.getCenter(new q),De=_e.getSize(new q),Ke=Math.max(De.x,De.y,De.z),Tt=2/Ke;me.userData.maxDim=Ke,me.userData.baseScale=Tt,re.position.sub(Ae),me.add(re),me.scale.setScalar(Tt),p.current=me,E.add(me);const lt=Ke*Tt*2;g.current={position:new q(lt,lt/2,lt),target:new q(0,0,0)},G.position.copy(g.current.position),G.lookAt(g.current.target),K.update(),r(!1),e&&e({scene:E,model:me}),R.render(E,G)},re=>{const me=re.loaded/re.total*100;console.log(`OBJ ${me.toFixed(2)}% loaded`)},re=>{console.error("Error loading OBJ:",re)})},Te=>{const j=Te.loaded/Te.total*100;console.log(`MTL ${j.toFixed(2)}% loaded`)},Te=>{console.error("Error loading MTL:",Te)});const U=()=>{requestAnimationFrame(U),R.clear(),R.render(_.current,x.current),R.render(E,G),K.update()};U();const ne=()=>{if(!a.current||!c.current||!f.current)return;const Te=a.current,j=Te.clientWidth,re=Te.clientHeight;c.current.aspect=j/re,c.current.updateProjectionMatrix(),f.current.setSize(j,re,!1)};return window.addEventListener("resize",ne),ne(),()=>{var Te;R.domElement.removeEventListener("click",ae),K.removeEventListener("dragstart",de),K.removeEventListener("dragend",oe),(Te=a.current)!=null&&Te.contains(R.domElement)&&a.current.removeChild(R.domElement),E.traverse(j=>{j instanceof hn&&(j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material.forEach(re=>re.dispose()):j.material.dispose()))}),R.dispose(),p.current&&p.current.traverse(j=>{j instanceof hn&&(j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material.forEach(re=>re.dispose()):j.material.dispose()))})}},[]),jt.useEffect(()=>{if(p.current){const E=p.current.userData.baseScale;p.current.scale.setScalar(E*s)}},[s]),we.jsxs("div",{ref:a,className:xf.sceneContainer,children:[t&&we.jsx(JT,{}),!t&&we.jsxs(we.Fragment,{children:[we.jsx("button",{className:xf.resetViewButton,onClick:S,title:"Reset View",children:we.jsx(jT,{})}),we.jsx("button",{className:xf.downloadButton,onClick:M,title:"Download Image",children:we.jsx(XT,{})})]})]})},aw="/Virtual-Product/assets/texture-1-C2GPS2os.jpg",lw="/Virtual-Product/assets/texture-2-DpuEP8o8.jpg",uw="/Virtual-Product/assets/texture-3-B7IN1Qs4.jpg",cw="/Virtual-Product/assets/texture-4-8csqSTIW.jpg",fw="/Virtual-Product/assets/texture-5-eX-FfF8a.jpg",dw="/Virtual-Product/assets/texture-6-BfqTV2tC.webp";function hw(){const[s,e]=jt.useState("customize"),[t,r]=jt.useState(1),[a,l]=jt.useState(null),c=jt.useCallback(M=>{l(M)},[]),f=[{image:aw,label:"Velvet Red"},{image:lw,label:"Linen White"},{image:uw,label:"Cotton Blue"},{image:cw,label:"Leather Brown"},{image:fw,label:"Suede Gray"},{image:dw,label:"Wool Beige"}],h=[{color:"#FF5733",label:"Coral Red"},{color:"#33FF57",label:"Mint Green"},{color:"#3357FF",label:"Royal Blue"},{color:"#F3FF33",label:"Sunny Yellow"},{color:"#FF33F3",label:"Bright Pink"},{color:"#33FFF3",label:"Aqua Blue"}],p=[{color:"#8B4513",label:"Walnut"},{color:"#D2691E",label:"Oak"},{color:"#A0522D",label:"Mahogany"},{color:"#DEB887",label:"Pine"},{color:"#CD853F",label:"Cedar"},{color:"#B8860B",label:"Teak"}],g=[{color:"#2C3E50",label:"Navy Blue"},{color:"#E74C3C",label:"Ruby Red"},{color:"#27AE60",label:"Forest Green"},{color:"#F1C40F",label:"Golden"},{color:"#8E44AD",label:"Royal Purple"},{color:"#D35400",label:"Burnt Orange"}],_=jt.useCallback(M=>{if(a!=null&&a.model){const E=new Xg;a.model.traverse(y=>{if(y instanceof hn&&y.name.includes("Box015")&&(console.log("child information cushion",y.name,y.material,y.geometry),y.material))if(M.type==="texture"){const v=E.load(M.image);v.wrapS=eo,v.wrapT=eo,v.repeat.set(1,1),Array.isArray(y.material)?y.material.forEach(I=>{I.map=v,I.color.setStyle("#FFFFFF"),I.needsUpdate=!0}):(y.material.map=v,y.material.color.setStyle("#FFFFFF"),y.material.needsUpdate=!0)}else{const v=M.color==="#000000"?"#151515":M.color;Array.isArray(y.material)?y.material.forEach(I=>{I.color.setStyle(v),I.needsUpdate=!0}):(y.material.color.setStyle(v),y.material.needsUpdate=!0)}})}},[a]),x=jt.useCallback(M=>{a!=null&&a.model&&a.model.traverse(E=>{E instanceof hn&&E.name.includes("Cylinder")&&(console.log("child information frame",E.name,E.material,E.geometry),E.material&&(Array.isArray(E.material)?E.material.forEach(y=>y.color.setStyle(M.color)):E.material.color.setStyle(M.color)))})},[a]),S=jt.useCallback(M=>{a!=null&&a.model&&a.model.traverse(E=>{E instanceof hn&&E.material&&(Array.isArray(E.material)?E.material.forEach(y=>y.color.setStyle(M.color)):E.material.color.setStyle(M.color))})},[a]);return we.jsxs("div",{className:"app-container",children:[we.jsxs("div",{className:"viewer-section",children:[we.jsx("div",{className:"view-wrap",children:we.jsx("span",{className:"tag-360",children:"# view 360"})}),we.jsx(ow,{modelScale:t,onSceneReady:c})]}),we.jsxs("div",{className:"controls-section",children:[we.jsxs("div",{className:"product-header",children:[we.jsx("h1",{children:"Office Chair"}),we.jsx("p",{className:"product-subtitle",children:"Premium Ergonomic Design"})]}),we.jsxs("div",{className:"tabs",children:[we.jsx("button",{className:`tab ${s==="customize"?"active":""}`,onClick:()=>e("customize"),children:"Customize"}),we.jsx("button",{className:`tab ${s==="details"?"active":""}`,onClick:()=>e("details"),children:"Product Details"})]}),we.jsx("div",{className:"tab-content",children:s==="customize"?we.jsxs("div",{className:"customize-panel",children:[we.jsxs("div",{className:"control-group",children:[we.jsx("label",{children:"Model Scale"}),we.jsxs("div",{className:"scale-control",children:[we.jsx("input",{type:"range",className:"scale-slider",min:"0.5",max:"2",step:"0.1",value:t,onChange:M=>r(parseFloat(M.target.value))}),we.jsxs("div",{className:"scale-marks",children:[we.jsx("span",{children:"50%"}),we.jsx("span",{children:"100%"}),we.jsx("span",{children:"200%"})]}),we.jsxs("div",{className:"scale-value",children:[(t*100).toFixed(0),"%"]})]})]}),we.jsxs("div",{className:"texture-section",children:[we.jsx("h3",{children:"Base Fabric"}),we.jsx("div",{className:"texture-grid",children:f.map((M,E)=>we.jsxs("div",{className:"texture-box-container",children:[we.jsxs("div",{className:"tooltip",children:[M.label," - Click to apply texture"]}),we.jsx("div",{className:"texture-box",style:{backgroundImage:`url(${M.image})`,backgroundSize:"cover",width:"50px",height:"50px",cursor:"pointer",border:"2px solid #ccc",borderRadius:"4px",margin:"4px"},onClick:()=>_({type:"texture",image:M.image})}),we.jsx("span",{className:"texture-label",children:M.label})]},`texture-${E}`))})]}),we.jsxs("div",{className:"texture-section",children:[we.jsx("h3",{children:"Cushion Colors"}),we.jsx("div",{className:"texture-grid",children:h.map((M,E)=>we.jsxs("div",{className:"color-box-container",children:[we.jsxs("div",{className:"tooltip",children:[M.label," - Click to apply color"]}),we.jsx("div",{className:"color-box",style:{backgroundColor:M.color,width:"50px",height:"50px",cursor:"pointer",border:"2px solid #ccc",borderRadius:"4px",margin:"4px"},onClick:()=>_({type:"color",color:M.color})}),we.jsx("span",{className:"color-label",children:M.label})]},`color-${E}`))})]}),we.jsxs("div",{className:"texture-section",children:[we.jsx("h3",{children:"Frame Colors"}),we.jsx("div",{className:"texture-grid",children:p.map((M,E)=>we.jsxs("div",{className:"color-box-container",children:[we.jsxs("div",{className:"tooltip",children:[M.label," - Click to apply frame color"]}),we.jsx("div",{className:"color-box",style:{backgroundColor:M.color,width:"50px",height:"50px",cursor:"pointer",border:"2px solid #ccc",borderRadius:"4px",margin:"4px"},onClick:()=>x({type:"color",color:M.color})}),we.jsx("span",{className:"color-label",children:M.label})]},`frame-${E}`))})]}),we.jsxs("div",{className:"texture-section",children:[we.jsx("h3",{children:"Full Model Colors"}),we.jsx("div",{className:"texture-grid",children:g.map((M,E)=>we.jsxs("div",{className:"color-box-container",children:[we.jsxs("div",{className:"tooltip",children:[M.label," - Click to apply to entire model"]}),we.jsx("div",{className:"color-box",style:{backgroundColor:M.color,width:"50px",height:"50px",cursor:"pointer",border:"2px solid #ccc",borderRadius:"4px",margin:"4px"},onClick:()=>S({type:"color",color:M.color})}),we.jsx("span",{className:"color-label",children:M.label})]},`model-${E}`))})]})]}):we.jsxs("div",{className:"product-details",children:[we.jsxs("div",{className:"detail-item",children:[we.jsx("h3",{children:"Description"}),we.jsx("p",{children:"Premium ergonomic office chair designed for maximum comfort during long work hours. Features adjustable height, tilt mechanism, and premium materials."})]}),we.jsxs("div",{className:"detail-item",children:[we.jsx("h3",{children:"Specifications"}),we.jsxs("ul",{children:[we.jsx("li",{children:'Dimensions: 26"W x 26"D x 38-42"H'}),we.jsx("li",{children:"Weight Capacity: 300 lbs"}),we.jsx("li",{children:"Material: High-grade mesh and aluminum"}),we.jsx("li",{children:"Adjustable Height: 17-21 inches"})]})]}),we.jsxs("div",{className:"detail-item",children:[we.jsx("h3",{children:"Features"}),we.jsxs("ul",{children:[we.jsx("li",{children:"360° Swivel"}),we.jsx("li",{children:"Adjustable Lumbar Support"}),we.jsx("li",{children:"Breathable Mesh Back"}),we.jsx("li",{children:"Multi-tilt Mechanism"})]})]})]})})]})]})}Hv.createRoot(document.getElementById("root")).render(we.jsx(jt.StrictMode,{children:we.jsx(hw,{})}));
