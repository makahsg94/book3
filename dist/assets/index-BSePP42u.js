(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))h(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function h(c){if(c.ep)return;c.ep=!0;const m=u(c);fetch(c.href,m)}})();var ju={exports:{}},Zi={};var Gp;function sv(){if(Gp)return Zi;Gp=1;var r=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(h,c,m){var p=null;if(m!==void 0&&(p=""+m),c.key!==void 0&&(p=""+c.key),"key"in c){m={};for(var b in c)b!=="key"&&(m[b]=c[b])}else m=c;return c=m.ref,{$$typeof:r,type:h,key:p,ref:c!==void 0?c:null,props:m}}return Zi.Fragment=l,Zi.jsx=u,Zi.jsxs=u,Zi}var Pp;function rv(){return Pp||(Pp=1,ju.exports=sv()),ju.exports}var s=rv(),Cu={exports:{}},te={};var Vp;function lv(){if(Vp)return te;Vp=1;var r=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),N=Symbol.for("react.view_transition"),L=Symbol.iterator;function q(A){return A===null||typeof A!="object"?null:(A=L&&A[L]||A["@@iterator"],typeof A=="function"?A:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,K={};function F(A,O,V){this.props=A,this.context=O,this.refs=K,this.updater=V||M}F.prototype.isReactComponent={},F.prototype.setState=function(A,O){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,O,"setState")},F.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function ne(){}ne.prototype=F.prototype;function Se(A,O,V){this.props=A,this.context=O,this.refs=K,this.updater=V||M}var be=Se.prototype=new ne;be.constructor=Se,W(be,F.prototype),be.isPureReactComponent=!0;var We=Array.isArray;function Z(){}var ie={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function st(A,O,V){var J=V.ref;return{$$typeof:r,type:A,key:O,ref:J!==void 0?J:null,props:V}}function yt(A,O){return st(A.type,O,A.props)}function ht(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function Zt(A){var O={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(V){return O[V]})}var dn=/\/+/g;function Te(A,O){return typeof A=="object"&&A!==null&&A.key!=null?Zt(""+A.key):O.toString(36)}function H(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Z,Z):(A.status="pending",A.then(function(O){A.status==="pending"&&(A.status="fulfilled",A.value=O)},function(O){A.status==="pending"&&(A.status="rejected",A.reason=O)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Q(A,O,V,J,ce){var me=typeof A;(me==="undefined"||me==="boolean")&&(A=null);var ge=!1;if(A===null)ge=!0;else switch(me){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(A.$$typeof){case r:case l:ge=!0;break;case k:return ge=A._init,Q(ge(A._payload),O,V,J,ce)}}if(ge)return ce=ce(A),ge=J===""?"."+Te(A,0):J,We(ce)?(V="",ge!=null&&(V=ge.replace(dn,"$&/")+"/"),Q(ce,O,V,"",function(Nn){return Nn})):ce!=null&&(ht(ce)&&(ce=yt(ce,V+(ce.key==null||A&&A.key===ce.key?"":(""+ce.key).replace(dn,"$&/")+"/")+ge)),O.push(ce)),1;ge=0;var Y=J===""?".":J+":";if(We(A))for(var ee=0;ee<A.length;ee++)J=A[ee],me=Y+Te(J,ee),ge+=Q(J,O,V,me,ce);else if(ee=q(A),typeof ee=="function")for(A=ee.call(A),ee=0;!(J=A.next()).done;)J=J.value,me=Y+Te(J,ee++),ge+=Q(J,O,V,me,ce);else if(me==="object"){if(typeof A.then=="function")return Q(H(A),O,V,J,ce);throw O=String(A),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ge}function $(A,O,V){if(A==null)return A;var J=[],ce=0;return Q(A,J,"","",function(me){return O.call(V,me,ce++)}),J}function Ne(A){if(A._status===-1){var O=A._result,V=O();V.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J,V.status===void 0&&(V.status="fulfilled",V.value=J))},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J,V.status===void 0&&(V.status="rejected",V.reason=J))}),A._status===-1&&(A._status=0,A._result=V)}if(A._status===1)return A._result.default;throw A._result}var ve=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Qt(A){var O=ie.T,V={};V.types=O!==null?O.types:null,ie.T=V;try{var J=A(),ce=ie.S;ce!==null&&ce(V,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Z,ve)}catch(me){ve(me)}finally{O!==null&&V.types!==null&&(O.types=V.types),ie.T=O}}function Tn(A){var O=ie.T;if(O!==null){var V=O.types;V===null?O.types=[A]:V.indexOf(A)===-1&&V.push(A)}else Qt(Tn.bind(null,A))}var Ta={map:$,forEach:function(A,O,V){$(A,function(){O.apply(this,arguments)},V)},count:function(A){var O=0;return $(A,function(){O++}),O},toArray:function(A){return $(A,function(O){return O})||[]},only:function(A){if(!ht(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return te.Activity=y,te.Children=Ta,te.Component=F,te.Fragment=u,te.Profiler=c,te.PureComponent=Se,te.StrictMode=h,te.Suspense=w,te.ViewTransition=N,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,te.__COMPILER_RUNTIME={__proto__:null,c:function(A){return ie.H.useMemoCache(A)}},te.addTransitionType=Tn,te.cache=function(A){return function(){return A.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(A,O,V){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var J=W({},A.props),ce=A.key;if(O!=null)for(me in O.key!==void 0&&(ce=""+O.key),O)!Ve.call(O,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&O.ref===void 0||(J[me]=O[me]);var me=arguments.length-2;if(me===1)J.children=V;else if(1<me){for(var ge=Array(me),Y=0;Y<me;Y++)ge[Y]=arguments[Y+2];J.children=ge}return st(A.type,ce,J)},te.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:m,_context:A},A},te.createElement=function(A,O,V){var J,ce={},me=null;if(O!=null)for(J in O.key!==void 0&&(me=""+O.key),O)Ve.call(O,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ce[J]=O[J]);var ge=arguments.length-2;if(ge===1)ce.children=V;else if(1<ge){for(var Y=Array(ge),ee=0;ee<ge;ee++)Y[ee]=arguments[ee+2];ce.children=Y}if(A&&A.defaultProps)for(J in ge=A.defaultProps,ge)ce[J]===void 0&&(ce[J]=ge[J]);return st(A,me,ce)},te.createRef=function(){return{current:null}},te.forwardRef=function(A){return{$$typeof:b,render:A}},te.isValidElement=ht,te.lazy=function(A){return{$$typeof:k,_payload:{_status:-1,_result:A},_init:Ne}},te.memo=function(A,O){return{$$typeof:v,type:A,compare:O===void 0?null:O}},te.startTransition=Qt,te.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},te.use=function(A){return ie.H.use(A)},te.useActionState=function(A,O,V){return ie.H.useActionState(A,O,V)},te.useCallback=function(A,O){return ie.H.useCallback(A,O)},te.useContext=function(A){return ie.H.useContext(A)},te.useDebugValue=function(){},te.useDeferredValue=function(A,O){return ie.H.useDeferredValue(A,O)},te.useEffect=function(A,O){return ie.H.useEffect(A,O)},te.useEffectEvent=function(A){return ie.H.useEffectEvent(A)},te.useId=function(){return ie.H.useId()},te.useImperativeHandle=function(A,O,V){return ie.H.useImperativeHandle(A,O,V)},te.useInsertionEffect=function(A,O){return ie.H.useInsertionEffect(A,O)},te.useLayoutEffect=function(A,O){return ie.H.useLayoutEffect(A,O)},te.useMemo=function(A,O){return ie.H.useMemo(A,O)},te.useOptimistic=function(A,O){return ie.H.useOptimistic(A,O)},te.useReducer=function(A,O,V){return ie.H.useReducer(A,O,V)},te.useRef=function(A){return ie.H.useRef(A)},te.useState=function(A){return ie.H.useState(A)},te.useSyncExternalStore=function(A,O,V){return ie.H.useSyncExternalStore(A,O,V)},te.useTransition=function(){return ie.H.useTransition()},te.version="19.3.1",te}var Jp;function $u(){return Jp||(Jp=1,Cu.exports=lv()),Cu.exports}var T=$u(),Wu={exports:{}},Qi={},Ou={exports:{}},Lu={};var Kp;function hv(){return Kp||(Kp=1,(function(r){function l(H,Q){var $=H.length;H.push(Q);e:for(;0<$;){var Ne=$-1>>>1,ve=H[Ne];if(0<c(ve,Q))H[Ne]=Q,H[$]=ve,$=Ne;else break e}}function u(H){return H.length===0?null:H[0]}function h(H){if(H.length===0)return null;var Q=H[0],$=H.pop();if($!==Q){H[0]=$;e:for(var Ne=0,ve=H.length,Qt=ve>>>1;Ne<Qt;){var Tn=2*(Ne+1)-1,Ta=H[Tn],A=Tn+1,O=H[A];if(0>c(Ta,$))A<ve&&0>c(O,Ta)?(H[Ne]=O,H[A]=$,Ne=A):(H[Ne]=Ta,H[Tn]=$,Ne=Tn);else if(A<ve&&0>c(O,$))H[Ne]=O,H[A]=$,Ne=A;else break e}}return Q}function c(H,Q){var $=H.sortIndex-Q.sortIndex;return $!==0?$:H.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var p=Date,b=p.now();r.unstable_now=function(){return p.now()-b}}var w=[],v=[],k=1,y=null,N=3,L=!1,q=!1,M=!1,W=!1,K=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function Se(H){for(var Q=u(v);Q!==null;){if(Q.callback===null)h(v);else if(Q.startTime<=H)h(v),Q.sortIndex=Q.expirationTime,l(w,Q);else break;Q=u(v)}}function be(H){if(M=!1,Se(H),!q)if(u(w)!==null)q=!0,We||(We=!0,ht());else{var Q=u(v);Q!==null&&Te(be,Q.startTime-H)}}var We=!1,Z=-1,ie=5,Ve=-1;function st(){return W?!0:!(r.unstable_now()-Ve<ie)}function yt(){if(W=!1,We){var H=r.unstable_now();Ve=H;var Q=!0;try{e:{q=!1,M&&(M=!1,F(Z),Z=-1),L=!0;var $=N;try{t:{for(Se(H),y=u(w);y!==null&&!(y.expirationTime>H&&st());){var Ne=y.callback;if(typeof Ne=="function"){y.callback=null,N=y.priorityLevel;var ve=Ne(y.expirationTime<=H);if(H=r.unstable_now(),typeof ve=="function"){y.callback=ve,Se(H),Q=!0;break t}y===u(w)&&h(w),Se(H)}else h(w);y=u(w)}if(y!==null)Q=!0;else{var Qt=u(v);Qt!==null&&Te(be,Qt.startTime-H),Q=!1}}break e}finally{y=null,N=$,L=!1}Q=void 0}}finally{Q?ht():We=!1}}}var ht;if(typeof ne=="function")ht=function(){ne(yt)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,dn=Zt.port2;Zt.port1.onmessage=yt,ht=function(){dn.postMessage(null)}}else ht=function(){K(yt,0)};function Te(H,Q){Z=K(function(){H(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_next=function(H){switch(N){case 1:case 2:case 3:var Q=3;break;default:Q=N}var $=N;N=Q;try{return H()}finally{N=$}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=N;N=H;try{return Q()}finally{N=$}},r.unstable_scheduleCallback=function(H,Q,$){var Ne=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Ne+$:Ne):$=Ne,H){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=$+ve,H={id:k++,callback:Q,priorityLevel:H,startTime:$,expirationTime:ve,sortIndex:-1},$>Ne?(H.sortIndex=$,l(v,H),u(w)===null&&H===u(v)&&(M?(F(Z),Z=-1):M=!0,Te(be,$-Ne))):(H.sortIndex=ve,l(w,H),q||L||(q=!0,We||(We=!0,ht()))),H},r.unstable_shouldYield=st,r.unstable_wrapCallback=function(H){var Q=N;return function(){var $=N;N=Q;try{return H.apply(this,arguments)}finally{N=$}}}})(Lu)),Lu}var Fp;function uv(){return Fp||(Fp=1,Ou.exports=hv()),Ou.exports}var Du={exports:{}},ot={};var Xp;function dv(){if(Xp)return ot;Xp=1;var r=$u();function l(k){var y="https://react.dev/errors/"+k;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)y+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+k+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var h={d:{f:u,r:function(){throw Error(l(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal"),m=Symbol.for("react.recoverable"),p=Symbol.for("react.optimistic_key");function b(k,y,N){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:L==null?null:L===p?p:""+L,children:k,containerInfo:y,implementation:N}}var w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(k,y){if(k==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,ot.browser=function(k){return{$$typeof:m,_reason:k}},ot.createPortal=function(k,y){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(l(299));return b(k,y,null,N)},ot.flushSync=function(k){var y=w.T,N=h.p;try{if(w.T=null,h.p=2,k)return k()}finally{w.T=y,h.p=N,h.d.f()}},ot.preconnect=function(k,y){typeof k=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,h.d.C(k,y))},ot.prefetchDNS=function(k){typeof k=="string"&&h.d.D(k)},ot.preinit=function(k,y){if(typeof k=="string"&&y&&typeof y.as=="string"){var N=y.as,L=v(N,y.crossOrigin),q=typeof y.integrity=="string"?y.integrity:void 0,M=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;N==="style"?h.d.S(k,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:L,integrity:q,fetchPriority:M}):N==="script"&&h.d.X(k,{crossOrigin:L,integrity:q,fetchPriority:M,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ot.preinitModule=function(k,y){if(typeof k=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var N=v(y.as,y.crossOrigin);h.d.M(k,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}}else y==null&&h.d.M(k)},ot.preload=function(k,y){if(typeof k=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var N=y.as,L=v(N,y.crossOrigin);h.d.L(k,N,{crossOrigin:L,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ot.preloadModule=function(k,y){if(typeof k=="string")if(y){var N=v(y.as,y.crossOrigin);h.d.m(k,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}else h.d.m(k)},ot.requestFormReset=function(k){h.d.r(k)},ot.unstable_batchedUpdates=function(k,y){return k(y)},ot.useFormState=function(k,y,N){return w.H.useFormState(k,y,N)},ot.useFormStatus=function(){return w.H.useHostTransitionStatus()},ot.version="19.3.1",ot}var Zp;function yg(){if(Zp)return Du.exports;Zp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Du.exports=dv(),Du.exports}var Qp;function cv(){if(Qp)return Qi;Qp=1;var r=uv(),l=$u(),u=yg();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(m(e)!==e)throw Error(h(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return w(o),e;if(i===a)return w(o),t;i=i.sibling}throw Error(h(188))}if(n.return!==a.return)n=o,a=i;else{for(var d=!1,f=o.child;f;){if(f===n){d=!0,n=o,a=i;break}if(f===a){d=!0,a=o,n=i;break}f=f.sibling}if(!d){for(f=i.child;f;){if(f===n){d=!0,n=i,a=o;break}if(f===a){d=!0,a=i,n=o;break}f=f.sibling}if(!d)throw Error(h(189))}}if(n.alternate!==a)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}function y(e,t,n,a,o,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,o,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&y(e.child,t,n,a,o,i))return!0;e=e.sibling}return!1}function N(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function L(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function q(e){var t=[null,null],n=N(e);return n===null||M(t,e,n.child,{foundSelf:!1}),t}function M(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&M(e,t,n.child,a))return!0;n=n.sibling}return!1}function W(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(h(559))}}var K=null,F=null;function ne(e,t,n){return e===n?!0:e===t?(K=e,!0):!1}function Se(e,t,n){return e===n?(F=e,!1):e===t?(F!==null&&(K=e),!0):!1}function be(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function We(e,t,n){for(var a=0,o=e;o;o=n(o))a++;o=0;for(var i=t;i;i=n(i))o++;for(;0<a-o;)e=n(e),a--;for(;0<o-a;)t=n(t),o--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Z=Object.assign,ie=Symbol.for("react.element"),Ve=Symbol.for("react.transitional.element"),st=Symbol.for("react.portal"),yt=Symbol.for("react.fragment"),ht=Symbol.for("react.strict_mode"),Zt=Symbol.for("react.profiler"),dn=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),Qt=Symbol.for("react.activity"),Tn=Symbol.for("react.legacy_hidden"),Ta=Symbol.for("react.memo_cache_sentinel"),A=Symbol.for("react.view_transition"),O=Symbol.for("react.recoverable"),V=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yt:return"Fragment";case Zt:return"Profiler";case ht:return"StrictMode";case Q:return"Suspense";case $:return"SuspenseList";case Qt:return"Activity";case A:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case st:return"Portal";case Te:return e.displayName||"Context";case dn:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var ge=Array.isArray,Y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Nn={pending:!1,data:null,method:null,action:null},Zr=[],no=-1;function cn(e){return{current:e}}function Ze(e){0>no||(e.current=Zr[no],Zr[no]=null,no--)}function Be(e,t){no++,Zr[no]=e.current,e.current=t}var mn=cn(null),ai=cn(null),Fn=cn(null),rs=cn(null);function ls(e,t){switch(Be(Fn,t),Be(ai,e),Be(mn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$f(t),e=ep(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ze(mn),Be(mn,e)}function ao(){Ze(mn),Ze(ai),Ze(Fn)}function Qr(e){var t=e.memoizedState;t!==null&&(Po._currentValue=t.memoizedState,Be(rs,e)),t=mn.current;var n=ep(t,e.type);t!==n&&(Be(ai,e),Be(mn,n))}function hs(e){ai.current===e&&(Ze(mn),Ze(ai)),rs.current===e&&(Ze(rs),Po._currentValue=Nn)}var $r,bd;function Xn(e){if($r===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$r=t&&t[1]||"",bd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$r+e+bd}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(D){var I=D}Reflect.construct(e,[],C)}else{try{C.call()}catch(D){I=D}C=!1;try{var B=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),C=!0,new e}finally{C&&(B!==void 0?Object.defineProperty(e.prototype,"props",B):delete e.prototype.props)}}}else{try{throw Error()}catch(D){I=D}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(D){if(D&&I&&typeof D.stack=="string")return[D.stack,I.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),d=i[0],f=i[1];if(d&&f){var g=d.split(`
`),E=f.split(`
`);for(o=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;o<E.length&&!E[o].includes("DetermineComponentFrameRoot");)o++;if(a===g.length||o===E.length)for(a=g.length-1,o=E.length-1;1<=a&&0<=o&&g[a]!==E[o];)o--;for(;1<=a&&0<=o;a--,o--)if(g[a]!==E[o]){if(a!==1||o!==1)do if(a--,o--,0>o||g[a]!==E[o]){var _=`
`+g[a].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=a&&0<=o);break}}}finally{el=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Xn(n):""}function uy(e,t){switch(e.tag){case 26:case 27:case 5:return Xn(e.type);case 16:return Xn("Lazy");case 13:return e.child!==t&&t!==null?Xn("Suspense Fallback"):Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 15:return tl(e.type,!1);case 11:return tl(e.type.render,!1);case 1:return tl(e.type,!0);case 31:return Xn("Activity");case 30:return Xn("ViewTransition");default:return""}}function vd(e){try{var t="",n=null;do t+=uy(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var nl=Object.prototype.hasOwnProperty,al=r.unstable_scheduleCallback,ol=r.unstable_cancelCallback,dy=r.unstable_shouldYield,cy=r.unstable_requestPaint,St=r.unstable_now,my=r.unstable_getCurrentPriorityLevel,kd=r.unstable_ImmediatePriority,xd=r.unstable_UserBlockingPriority,us=r.unstable_NormalPriority,fy=r.unstable_LowPriority,Ad=r.unstable_IdlePriority,py=r.log,gy=r.unstable_setDisableYieldValue,oi=null,Et=null;function Zn(e){if(typeof py=="function"&&gy(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(oi,e)}catch{}}var Tt=Math.clz32?Math.clz32:by,yy=Math.log,wy=Math.LN2;function by(e){return e>>>=0,e===0?32:31-(yy(e)/wy|0)|0}var ds=256,cs=262144,ms=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fs(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?o=Na(a):(d&=f,d!==0?o=Na(d):n||(n=f&~e,n!==0&&(o=Na(n))))):(f=a&~i,f!==0?o=Na(f):d!==0?o=Na(d):n||(n=a&~e,n!==0&&(o=Na(n)))),o===0?0:t!==0&&t!==o&&(t&i)===0&&(i=o&-o,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:o}function ii(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Id(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-Tt(n),o=1<<a;t|=e[a],n&=~o}return t}function vy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sd(){var e=ms;return ms<<=1,(ms&62914560)===0&&(ms=4194304),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ky(e,t,n,a,o,i){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,E=e.hiddenUpdates;for(n=d&~n;0<n;){var _=31-Tt(n),C=1<<_;f[_]=0,g[_]=-1;var I=E[_];if(I!==null)for(E[_]=null,_=0;_<I.length;_++){var B=I[_];B!==null&&(B.lane&=-536870913)}n&=~C}a!==0&&Ed(e,a,0),i!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Ed(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Tt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Td(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Tt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Nd(e,t){var n=t&-t;return n=(n&42)!==0?1:sl(n),(n&(e.suspendedLanes|t))!==0?0:n}function sl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rd(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:Dp(e.type))}function Bd(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var Rn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Rn,wt="__reactProps$"+Rn,oo="__reactContainer$"+Rn,_d="__reactEvents$"+Rn,xy="__reactListeners$"+Rn,Ay="__reactHandles$"+Rn,jd="__reactResources$"+Rn,ri="__reactMarker$"+Rn,ps="__reactLoad$"+Rn;function gs(e){delete e[Qe],delete e[wt],delete e[xy],delete e[Ay]}function Ra(e){var t;if(t=e[Qe])return t;for(var n=e.parentNode;n;){if(t=n[oo]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yp(e);e!==null;){if(n=e[Qe])return n;e=yp(e)}return t}e=n,n=e.parentNode}return null}function io(e){if(e=e[Qe]||e[oo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function so(e){var t=e[jd];return t||(t=e[jd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[ri]=!0}function Cd(e){e[ps]=void 0}var Wd=new Set,Od={};function Ba(e,t){ro(e,t),ro(e+"Capture",t)}function ro(e,t){for(Od[e]=t,e=0;e<t.length;e++)Wd.add(t[e])}var Iy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ld={},Dd={};function Sy(e){return nl.call(Dd,e)?!0:nl.call(Ld,e)?!1:Iy.test(e)?Dd[e]=!0:(Ld[e]=!0,!1)}var fe=!1;function Md(){var e=fe;return fe=!1,e}function ys(e,t,n){if(Sy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function ws(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Bn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ey(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ll(e){if(!e._valueTracker){var t=Hd(e)?"checked":"value";e._valueTracker=Ey(e,t,""+e[t])}}function Ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Hd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var Ty=/[\n"\\]/g;function Dt(e){return e.replace(Ty,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hl(e,t,n,a,o,i,d,f){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?d==="number"&&e.value==t?ul(e,Nt(e.value)):ul(e,Nt(t)):n!=null?ul(e,Nt(n)):a!=null&&e.removeAttribute("value"),o==null&&i!=null&&(e.defaultChecked=!!i),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Nt(f):e.removeAttribute("name")}function qd(e,t,n,a,o,i,d,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ll(e);return}n=n!=null?""+Nt(n):"",t=t!=null?""+Nt(t):n,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),ll(e)}function ul(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function lo(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function zd(e,t,n){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Nt(n):""}function Yd(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(h(92));if(ge(a)){if(1<a.length)throw Error(h(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Nt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ll(e)}function ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ny=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gd(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Ny.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Pd(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",fe=!0);for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&(Gd(e,o,a),fe=!0)}else for(var i in t)t.hasOwnProperty(i)&&Gd(e,i,t[i])}function dl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ry=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),By=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return By.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fn(){}var cl=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,co=null;function Vd(e){var t=io(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(hl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[wt]||null;if(!o)throw Error(h(90));hl(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ud(a)}break e;case"textarea":zd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&lo(e,!!n.multiple,t,!1)}}}var fl=!1;function Jd(e,t,n){if(fl)return e(t,n);fl=!0;try{var a=e(t);return a}finally{if(fl=!1,(uo!==null||co!==null)&&(br(),uo&&(t=uo,e=co,co=uo=null,Vd(t),e)))for(t=0;t<e.length;t++)Vd(e[t])}}function hi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[wt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=!1;if(_n)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){pl=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{pl=!1}var Qn=null,gl=null,vs=null;function Kd(){if(vs)return vs;var e,t=gl,n=t.length,a,o="value"in Qn?Qn.value:Qn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===o[i-a];a++);return vs=o.slice(e,1<a?1-a:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xs(){return!0}function Fd(){return!1}function ut(e){function t(n,a,o,i,d){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xs:Fd,this.isPropagationStopped=Fd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=ut($n),di=Z({},$n,{view:0,detail:0}),_y=ut(di),yl,wl,ci,Is=Z({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(yl=e.screenX-ci.screenX,wl=e.screenY-ci.screenY):wl=yl=0,ci=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),Xd=ut(Is),jy=Z({},Is,{dataTransfer:0}),Cy=ut(jy),Wy=Z({},di,{relatedTarget:0}),bl=ut(Wy),Oy=Z({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=ut(Oy),Dy=Z({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),My=ut(Dy),Hy=Z({},$n,{data:0}),Zd=ut(Hy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zy[e])?!!t[e]:!1}function vl(){return Yy}var Gy=Z({},di,{key:function(e){if(e.key){var t=Uy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Py=ut(Gy),Vy=Z({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=ut(Vy),Jy=Z({},$n,{submitter:0}),Ky=ut(Jy),Fy=Z({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),Xy=ut(Fy),Zy=Z({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=ut(Zy),$y=Z({},Is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ew=ut($y),tw=Z({},$n,{newState:0,oldState:0,source:0}),nw=ut(tw),aw=[9,13,27,32],kl=_n&&"CompositionEvent"in window,mi=null;_n&&"documentMode"in document&&(mi=document.documentMode);var ow=_n&&"TextEvent"in window&&!mi,$d=_n&&(!kl||mi&&8<mi&&11>=mi),ec=" ",tc=!1;function nc(e,t){switch(e){case"keyup":return aw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mo=!1;function iw(e,t){switch(e){case"compositionend":return ac(t);case"keypress":return t.which!==32?null:(tc=!0,ec);case"textInput":return e=t.data,e===ec&&tc?null:e;default:return null}}function sw(e,t){if(mo)return e==="compositionend"||!kl&&nc(e,t)?(e=Kd(),vs=gl=Qn=null,mo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $d&&t.locale!=="ko"?null:t.data;default:return null}}var rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rw[e.type]:t==="textarea"}function ic(e,t,n,a){uo?co?co.push(a):co=[a]:uo=a,t=Sr(t,"onChange"),0<t.length&&(n=new As("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var fi=null,pi=null;function lw(e){Jf(e,0)}function Ss(e){var t=li(e);if(Ud(t))return e}function sc(e,t){if(e==="change")return t}var rc=!1;if(_n){var xl;if(_n){var Al="oninput"in document;if(!Al){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),Al=typeof lc.oninput=="function"}xl=Al}else xl=!1;rc=xl&&(!document.documentMode||9<document.documentMode)}function hc(){fi&&(fi.detachEvent("onpropertychange",uc),pi=fi=null)}function uc(e){if(e.propertyName==="value"&&Ss(pi)){var t=[];ic(t,pi,e,ml(e)),Jd(lw,t)}}function hw(e,t,n){e==="focusin"?(hc(),fi=t,pi=n,fi.attachEvent("onpropertychange",uc)):e==="focusout"&&hc()}function uw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(pi)}function dw(e,t){if(e==="click")return Ss(t)}function cw(e,t){if(e==="input"||e==="change")return Ss(t)}function mw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:mw;function gi(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!nl.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,t){var n=dc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dc(n)}}function mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Il(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Il(e.document)}return t}function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fw=_n&&"documentMode"in document&&11>=document.documentMode,fo=null,El=null,yi=null,Tl=!1;function pc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||fo==null||fo!==Il(a)||(a=fo,"selectionStart"in a&&Sl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),yi&&gi(yi,a)||(yi=a,a=Sr(El,"onSelect"),0<a.length&&(t=new As("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=fo)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var po={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Nl={},gc={};_n&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function ja(e){if(Nl[e])return Nl[e];if(!po[e])return e;var t=po[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gc)return Nl[e]=t[n];return e}var yc=ja("animationend"),wc=ja("animationiteration"),bc=ja("animationstart"),pw=ja("transitionrun"),gw=ja("transitionstart"),yw=ja("transitioncancel"),vc=ja("transitionend"),kc=new Map,Rl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rl.push("scrollEnd");function $t(e,t){kc.set(e,t),Ba(t,[e])}var ww=0;function jn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=an.identifierPrefix;var n=ww++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function xc(e){if(e==null||typeof e=="string")return e;var t=null,n=Oo;if(n!==null)for(var a=0;a<n.length;a++){var o=e[n[a]];if(o!=null){if(o==="none")return"none";t=t==null?o:t+(" "+o)}}return t??e.default}function Cn(e,t){return e=xc(e),t=xc(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mt=[],go=0,Bl=0;function Ts(){for(var e=go,t=Bl=go=0;t<e;){var n=Mt[t];Mt[t++]=null;var a=Mt[t];Mt[t++]=null;var o=Mt[t];Mt[t++]=null;var i=Mt[t];if(Mt[t++]=null,a!==null&&o!==null){var d=a.pending;d===null?o.next=o:(o.next=d.next,d.next=o),a.pending=o}i!==0&&Ac(n,o,i)}}function Ns(e,t,n,a){Mt[go++]=e,Mt[go++]=t,Mt[go++]=n,Mt[go++]=a,Bl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function _l(e,t,n,a){return Ns(e,t,n,a),Rs(e)}function Ca(e,t){return Ns(e,null,null,t),Rs(e)}function Ac(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(o=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,o&&t!==null&&(o=31-Tt(n),e=i.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),i):null}function Rs(e){if(50<Hi)throw Hi=0,wr=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yo={};function bw(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,a){return new bw(e,t,n,a)}function jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ic(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bs(e,t,n,a,o,i){var d=0;if(a=e,typeof a=="function")jl(a)&&(d=1);else if(typeof a=="string")d=Jb(e,n,mn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case Qt:return e=bt(31,n,t,o),e.elementType=Qt,e.lanes=i,e;case yt:return Wa(n.children,o,i,t);case ht:d=8,o|=24;break;case Zt:return e=bt(12,n,t,o|2),e.elementType=Zt,e.lanes=i,e;case Q:return e=bt(13,n,t,o),e.elementType=Q,e.lanes=i,e;case $:return e=bt(19,n,t,o),e.elementType=$,e.lanes=i,e;case Tn:case A:return e=o|32,e=bt(30,n,t,e),e.elementType=A,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Te:d=10;break e;case dn:d=9;break e;case H:d=11;break e;case Ne:d=14;break e;case ve:d=16,a=null;break e}d=29,n=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=bt(d,n,t,o),t.elementType=e,t.type=a,t.lanes=i,t}function Wa(e,t,n,a){return e=bt(7,e,a,t),e.lanes=n,e}function Cl(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Sc(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function Wl(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ec=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=Ec.get(e);return n!==void 0?n:(t={value:e,source:t,stack:vd(t)},Ec.set(e,t),t)}return{value:e,source:t,stack:vd(t)}}var wo=[],bo=0,_s=null,wi=0,Ut=[],qt=0,ea=null,pn=1,gn="";function On(e,t){wo[bo++]=wi,wo[bo++]=_s,_s=e,wi=t}function Tc(e,t,n){Ut[qt++]=pn,Ut[qt++]=gn,Ut[qt++]=ea,ea=e;var a=pn;e=gn;var o=32-Tt(a)-1;a&=~(1<<o),n+=1;var i=32-Tt(t)+o;if(30<i){var d=o-o%5;i=(a&(1<<d)-1).toString(32),a>>=d,o-=d,pn=1<<32-Tt(t)+o|n<<o|a,gn=i+e}else pn=1<<i|n<<o|a,gn=e}function js(e){e.return!==null&&(On(e,1),Tc(e,1,0))}function Ol(e){for(;e===_s;)_s=wo[--bo],wo[bo]=null,wi=wo[--bo],wo[bo]=null;for(;e===ea;)ea=Ut[--qt],Ut[qt]=null,gn=Ut[--qt],Ut[qt]=null,pn=Ut[--qt],Ut[qt]=null}function Nc(e,t){Ut[qt++]=pn,Ut[qt++]=gn,Ut[qt++]=ea,pn=t.id,gn=t.overflow,ea=e}var Ke=null,_e=null,se=!1,ta=null,zt=!1,Ll=Error(h(519));function na(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bi(Ht(t,e)),Ll}function Rc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Qe]=e,t[wt]=a,n){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(n=0;n<qi.length;n++)le(qi[n],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),qd(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),Yd(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Zf(t.textContent,n)?(a.popover!=null&&(le("beforetoggle",t),le("toggle",t)),a.onScroll!=null&&le("scroll",t),a.onScrollEnd!=null&&le("scrollend",t),a.onClick!=null&&(t.onclick=fn),t=!0):t=!1,t||na(e,!0)}function Cs(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:Ke=Ke.return}}function vo(e){if(e!==Ke)return!1;if(!se)return Cs(e),se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cu(e.type,e.memoizedProps)),n=!n),n&&_e&&na(e),Cs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));_e=gp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));_e=gp(e)}else t===27?(t=_e,wa(e.type)?(e=ku,ku=null,_e=e):_e=t):_e=Ke?Gt(e.stateNode.nextSibling):null;return!0}function Oa(){_e=Ke=null,se=!1}function Dl(){var e=ta;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),ta=null),e}function bi(e){ta===null?ta=[e]:ta.push(e)}var Ml=cn(null),La=null,Ln=null;function aa(e,t,n){Be(Ml,t._currentValue),t._currentValue=n}function Dn(e){e._currentValue=Ml.current,Ze(Ml)}function Ws(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Hl(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var i=o.dependencies;if(i!==null){var d=o.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=o;for(var g=0;g<t.length;g++)if(f.context===t[g]){i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),Ws(i.return,n,e),a||(d=null);break e}i=f.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(h(341));d.lanes|=n,i=d.alternate,i!==null&&(i.lanes|=n),Ws(d,n,e),d=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Ws(o.return,n,e),d=o.child,d=d!==null?d.sibling:null):d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Da(e,t,n,a){e=null;for(var o=t,i=!1;o!==null;){if(!i){if((o.flags&524288)!==0)i=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(h(387));if(d=d.memoizedProps,d!==null){var f=o.type;Rt(o.pendingProps.value,d.value)||(e!==null?e.push(f):e=[f])}}else if(o===rs.current){if(d=o.alternate,d===null)throw Error(h(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}o=o.return}return e!==null&&Hl(t,e,n,a),t.flags|=262144,e!==null}function Os(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){La=e,Ln=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Bc(La,e)}function Ls(e,t){return La===null&&Ma(e),Bc(e,t)}function Bc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ln===null){if(e===null)throw Error(h(308));Ln=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ln=Ln.next=t;return n}var vw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},kw=r.unstable_scheduleCallback,xw=r.unstable_NormalPriority,qe={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ul(){return{controller:new vw,data:new Map,refCount:0}}function vi(e){e.refCount--,e.refCount===0&&kw(xw,function(){e.controller.abort()})}function _c(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var ki=null;function Aw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var xi=null,ql=0,Ha=0,ko=null;function Iw(e,t){if(xi===null){var n=xi=[];ql=0,Ha=au(),ko={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ql++,t.then(jc,jc),t}function jc(){if(--ql===0&&(ki=null,xi!==null)){ko!==null&&(ko.status="fulfilled");var e=xi;xi=null,Ha=0,ko=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sw(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Cc=Y.S;Y.S=function(e,t){if(Ef=St(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Iw(e,t),ki!==null)for(var n=Ho;n!==null;)_c(n,ki),n=n.next;if(n=e.types,n!==null){for(var a=Ho;a!==null;)_c(a,n),a=a.next;if(Ha!==0){a=ki,a===null&&(a=ki=[]);for(var o=0;o<n.length;o++){var i=n[o];a.indexOf(i)===-1&&a.push(i)}}}Cc!==null&&Cc(e,t)};var Ua=cn(null);function zl(){var e=Ua.current;return e!==null?e:Re.pooledCache}function Ds(e,t){t===null?Be(Ua,Ua.current):Be(Ua,t.pool)}function Wc(){var e=zl();return e===null?null:{parent:qe._currentValue,pool:e}}var xo=Error(h(460)),Yl=Error(h(474)),Ms=Error(h(542)),Hs={then:function(){}};function Oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(fn,fn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mc(e),e===void 0&&!("reason"in t)?Error(h(600)):e;default:if(typeof t.status=="string")t.then(fn,fn);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Mc(e),e}throw za=t,xo}}function qa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,xo):n}}var za=null;function Dc(){if(za===null)throw Error(h(459));var e=za;return za=null,e}function Mc(e){if(e===xo||e===Ms)throw Error(h(483))}var Ao=null,Ai=0;function Us(e){var t=Ai;return Ai+=1,Ao===null&&(Ao=[]),Lc(Ao,e,t)}function oa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qs(e,t){throw t.$$typeof===ie?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hc(e){function t(S,x){if(e){var R=S.deletions;R===null?(S.deletions=[x],S.flags|=16):R.push(x)}}function n(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function a(S){for(var x=new Map;S!==null;)S.key===null?x.set(S.index,S):x.set(S.key,S),S=S.sibling;return x}function o(S,x){return S=Wn(S,x),S.index=0,S.sibling=null,S}function i(S,x,R){return S.index=R,e?(R=S.alternate,R!==null?(R=R.index,R<x?(S.flags|=2,x):R):(S.flags|=134217730,x)):(S.flags|=1048576,x)}function d(S){return e&&S.alternate===null&&(S.flags|=134217730),S}function f(S,x,R,j){return x===null||x.tag!==6?(x=Cl(R,S.mode,j),x.return=S,x):(x=o(x,R),x.return=S,x)}function g(S,x,R,j){var U=R.type;return U===yt?(S=_(S,x,R.props.children,j,R.key),oa(S,R),S):x!==null&&(x.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ve&&qa(U)===x.type)?(x=o(x,R.props),oa(x,R),x.return=S,x):(x=Bs(R.type,R.key,R.props,null,S.mode,j),oa(x,R),x.return=S,x)}function E(S,x,R,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==R.containerInfo||x.stateNode.implementation!==R.implementation?(x=Wl(R,S.mode,j),x.return=S,x):(x=o(x,R.children||[]),x.return=S,x)}function _(S,x,R,j,U){return x===null||x.tag!==7?(x=Wa(R,S.mode,j,U),x.return=S,x):(x=o(x,R),x.return=S,x)}function C(S,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Cl(""+x,S.mode,R),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ve:return R=Bs(x.type,x.key,x.props,null,S.mode,R),oa(R,x),R.return=S,R;case st:return x=Wl(x,S.mode,R),x.return=S,x;case ve:return x=qa(x),C(S,x,R)}if(ge(x)||J(x))return x=Wa(x,S.mode,R,null),x.return=S,x;if(typeof x.then=="function")return C(S,Us(x),R);if(x.$$typeof===Te)return C(S,Ls(S,x),R);qs(S,x)}return null}function I(S,x,R,j){var U=x!==null?x.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return U!==null?null:f(S,x,""+R,j);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ve:return R.key===U?g(S,x,R,j):null;case st:return R.key===U?E(S,x,R,j):null;case ve:return R=qa(R),I(S,x,R,j)}if(ge(R)||J(R))return U!==null?null:_(S,x,R,j,null);if(typeof R.then=="function")return I(S,x,Us(R),j);if(R.$$typeof===Te)return I(S,x,Ls(S,R),j);qs(S,R)}return null}function B(S,x,R,j,U){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return S=S.get(R)||null,f(x,S,""+j,U);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ve:return S=S.get(j.key===null?R:j.key)||null,g(x,S,j,U);case st:return S=S.get(j.key===null?R:j.key)||null,E(x,S,j,U);case ve:return j=qa(j),B(S,x,R,j,U)}if(ge(j)||J(j))return S=S.get(R)||null,_(x,S,j,U,null);if(typeof j.then=="function")return B(S,x,R,Us(j),U);if(j.$$typeof===Te)return B(S,x,R,Ls(x,j),U);qs(x,j)}return null}function D(S,x,R,j){for(var U=null,ue=null,P=x,X=x=0,Ge=null;P!==null&&X<R.length;X++){P.index>X?(Ge=P,P=null):Ge=P.sibling;var de=I(S,P,R[X],j);if(de===null){P===null&&(P=Ge);break}e&&P&&de.alternate===null&&t(S,P),x=i(de,x,X),ue===null?U=de:ue.sibling=de,ue=de,P=Ge}if(X===R.length)return n(S,P),se&&On(S,X),U;if(P===null){for(;X<R.length;X++)P=C(S,R[X],j),P!==null&&(x=i(P,x,X),ue===null?U=P:ue.sibling=P,ue=P);return se&&On(S,X),U}for(P=a(P);X<R.length;X++)Ge=B(P,S,X,R[X],j),Ge!==null&&(e&&(de=Ge.alternate,de!==null&&P.delete(de.key===null?X:de.key)),x=i(Ge,x,X),ue===null?U=Ge:ue.sibling=Ge,ue=Ge);return e&&P.forEach(function(Aa){return t(S,Aa)}),se&&On(S,X),U}function z(S,x,R,j){if(R==null)throw Error(h(151));for(var U=null,ue=null,P=x,X=x=0,Ge=null,de=R.next();P!==null&&!de.done;X++,de=R.next()){P.index>X?(Ge=P,P=null):Ge=P.sibling;var Aa=I(S,P,de.value,j);if(Aa===null){P===null&&(P=Ge);break}e&&P&&Aa.alternate===null&&t(S,P),x=i(Aa,x,X),ue===null?U=Aa:ue.sibling=Aa,ue=Aa,P=Ge}if(de.done)return n(S,P),se&&On(S,X),U;if(P===null){for(;!de.done;X++,de=R.next())de=C(S,de.value,j),de!==null&&(x=i(de,x,X),ue===null?U=de:ue.sibling=de,ue=de);return se&&On(S,X),U}for(P=a(P);!de.done;X++,de=R.next())de=B(P,S,X,de.value,j),de!==null&&(e&&(Ge=de.alternate,Ge!==null&&P.delete(Ge.key===null?X:Ge.key)),x=i(de,x,X),ue===null?U=de:ue.sibling=de,ue=de);return e&&P.forEach(function(iv){return t(S,iv)}),se&&On(S,X),U}function oe(S,x,R,j){if(typeof R=="object"&&R!==null&&R.type===yt&&R.key===null&&R.props.ref===void 0&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ve:e:{for(var U=R.key;x!==null;){if(x.key===U){if(U=R.type,U===yt){if(x.tag===7){n(S,x.sibling),j=o(x,R.props.children),oa(j,R),j.return=S,S=j;break e}}else if(x.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ve&&qa(U)===x.type){n(S,x.sibling),j=o(x,R.props),oa(j,R),j.return=S,S=j;break e}n(S,x);break}else t(S,x);x=x.sibling}R.type===yt?(j=Wa(R.props.children,S.mode,j,R.key),oa(j,R),j.return=S,S=j):(j=Bs(R.type,R.key,R.props,null,S.mode,j),oa(j,R),j.return=S,S=j)}return d(S);case st:e:{for(U=R.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===R.containerInfo&&x.stateNode.implementation===R.implementation){n(S,x.sibling),j=o(x,R.children||[]),j.return=S,S=j;break e}else{n(S,x);break}else t(S,x);x=x.sibling}j=Wl(R,S.mode,j),j.return=S,S=j}return d(S);case ve:return R=qa(R),oe(S,x,R,j)}if(ge(R))return D(S,x,R,j);if(J(R)){if(U=J(R),typeof U!="function")throw Error(h(150));return R=U.call(R),z(S,x,R,j)}if(typeof R.then=="function")return oe(S,x,Us(R),j);if(R.$$typeof===Te)return oe(S,x,Ls(S,R),j);qs(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,x!==null&&x.tag===6?(n(S,x.sibling),j=o(x,R),j.return=S,S=j):(n(S,x),j=Cl(R,S.mode,j),j.return=S,S=j),d(S)):n(S,x)}return function(S,x,R,j){try{Ai=0;var U=oe(S,x,R,j);return Ao=null,U}catch(P){if(P===xo||P===Ms)throw P;var ue=bt(29,P,null,S.mode);return ue.lanes=j,ue.return=S,ue}}}var Ya=Hc(!0),Uc=Hc(!1),ia=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Rs(e),Ac(e,null,n),t}return Ns(e,a,t,n),Rs(e)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Td(e,n)}}function Vl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?o=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jl=!1;function Si(){if(Jl){var e=ko;if(e!==null)throw e}}function Ei(e,t,n,a){Jl=!1;var o=e.updateQueue;ia=!1;var i=o.firstBaseUpdate,d=o.lastBaseUpdate,f=o.shared.pending;if(f!==null){o.shared.pending=null;var g=f,E=g.next;g.next=null,d===null?i=E:d.next=E,d=g;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==d&&(f===null?_.firstBaseUpdate=E:f.next=E,_.lastBaseUpdate=g))}if(i!==null){var C=o.baseState;d=0,_=E=g=null,f=i;do{var I=f.lane&-536870913,B=I!==f.lane;if(B?(he&I)===I:(a&I)===I){I!==0&&I===Ha&&(Jl=!0),_!==null&&(_=_.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var D=e,z=f;I=t;var oe=n;switch(z.tag){case 1:if(D=z.payload,typeof D=="function"){C=D.call(oe,C,I);break e}C=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=z.payload,I=typeof D=="function"?D.call(oe,C,I):D,I==null)break e;C=Z({},C,I);break e;case 2:ia=!0}}I=f.callback,I!==null&&(e.flags|=64,B&&(e.flags|=8192),B=o.callbacks,B===null?o.callbacks=[I]:B.push(I))}else B={lane:I,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(E=_=B,g=C):_=_.next=B,d|=I;if(f=f.next,f===null){if(f=o.shared.pending,f===null)break;B=f,f=B.next,B.next=null,o.lastBaseUpdate=B,o.shared.pending=null}}while(!0);_===null&&(g=C),o.baseState=g,o.firstBaseUpdate=E,o.lastBaseUpdate=_,i===null&&(o.shared.lanes=0),fa|=d,e.lanes=d,e.memoizedState=C}}function qc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function zc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qc(n[e],t)}var la=cn(null),zs=cn(0);function Yc(e,t){e=zn,Be(zs,e),Be(la,t),zn=e|t.baseLanes}function Kl(){Be(zs,zn),Be(la,la.current)}function Fl(){zn=zs.current,Ze(la),Ze(zs)}var et=cn(null),rt=null;function ha(e){var t=e.alternate;Be(tt,tt.current&1),Be(et,e),rt===null&&(t===null||la.current!==null||t.memoizedState!==null)&&(rt=e)}function Xl(e){Be(tt,tt.current),Be(et,e),rt===null&&(rt=e)}function Gc(e){e.tag===22?(Be(tt,tt.current),Be(et,e),rt===null&&(rt=e)):ua()}function ua(){Be(tt,tt.current),Be(et,et.current)}function Bt(e){Ze(et),rt===e&&(rt=null),Ze(tt)}var tt=cn(0);function Ti(e,t){Be(et,et.current),Be(tt,t)}function Zl(e){Ze(tt),Ze(et),rt===e&&(rt=null)}function Ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||bu(n)||vu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mn=0,ae=null,Ee=null,ze=null,Gs=!1,Io=!1,Ga=!1,Ps=0,Ni=0,So=null,Ew=0;function Me(){throw Error(h(321))}function Ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function $l(e,t,n,a,o,i){return Mn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Tm:Nm,Ga=!1,i=n(a,o),Ga=!1,Io&&(i=Vc(t,n,a,o)),Pc(e),i}function Pc(e){Y.H=Qs;var t=Ee!==null&&Ee.next!==null;if(Mn=0,ze=Ee=ae=null,Gs=!1,Ni=0,So=null,t)throw Error(h(300));e===null||Ye||(e=e.dependencies,e!==null&&Os(e)&&(Ye=!0))}function Vc(e,t,n,a){ae=e;var o=0;do{if(Io&&(So=null),Ni=0,Io=!1,25<=o)throw Error(h(301));if(o+=1,ze=Ee=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}Y.H=Ww,i=t(n,a)}while(Io);return i}function Tw(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?Ri(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ae.flags|=1024),t}function eh(){var e=Ps!==0;return Ps=0,e}function th(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function nh(e){if(Gs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gs=!1}Mn=0,ze=Ee=ae=null,Io=!1,Ni=Ps=0,So=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ae.memoizedState=ze=e:ze=ze.next=e,ze}function Ue(){if(Ee===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=ze===null?ae.memoizedState:ze.next;if(t!==null)ze=t,Ee=e;else{if(e===null)throw ae.alternate===null?Error(h(467)):Error(h(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ze===null?ae.memoizedState=ze=e:ze=ze.next=e}return ze}function Vs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ri(e){var t=Ni;return Ni+=1,So===null&&(So=[]),e=Lc(So,e,t),t=ae,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Tm:Nm),e}function Js(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ri(e);if(e.$$typeof===O)return;if(e.$$typeof===Te)return $e(e)}throw Error(h(438,String(e)))}function ah(e){var t=null,n=ae.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ae.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Vs(),ae.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ta;return t.index++,n}function Hn(e,t){return typeof t=="function"?t(e):t}function Ks(e){var t=Ue();return oh(t,Ee,e)}function oh(e,t,n){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=n;var o=e.baseQueue,i=a.pending;if(i!==null){if(o!==null){var d=o.next;o.next=i.next,i.next=d}t.baseQueue=o=i,a.pending=null}if(i=e.baseState,o===null)e.memoizedState=i;else{t=o.next;var f=d=null,g=null,E=t,_=!1;do{var C=E.lane&-536870913;if(C!==E.lane?(he&C)===C:(Mn&C)===C){var I=E.revertLane;if(I===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),C===Ha&&(_=!0);else if((Mn&I)===I){E=E.next,I===Ha&&(_=!0);continue}else C={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(f=g=C,d=i):g=g.next=C,ae.lanes|=I,fa|=I;C=E.action,Ga&&n(i,C),i=E.hasEagerState?E.eagerState:n(i,C)}else I={lane:C,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(f=g=I,d=i):g=g.next=I,ae.lanes|=C,fa|=C;E=E.next}while(E!==null&&E!==t);if(g===null?d=i:g.next=f,!Rt(i,e.memoizedState)&&(Ye=!0,_&&(n=ko,n!==null)))throw n;e.memoizedState=i,e.baseState=d,e.baseQueue=g,a.lastRenderedState=i}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ih(e){var t=Ue(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do i=e(i,d.action),d=d.next;while(d!==o);Rt(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Jc(e,t,n){var a=ae,o=Ue(),i=se;if(i){if(n===void 0)throw Error(h(407));n=n()}else n=t();var d=!Rt((Ee||o).memoizedState,n);if(d&&(o.memoizedState=n,Ye=!0),o=o.queue,lh(Xc.bind(null,a,o,e),[e]),e=o.getSnapshot!==t||d||ze!==null&&(ze.memoizedState.tag&1)!==0,Eo(e?9:8,{destroy:void 0},Fc.bind(null,a,o,n,t),null),e){if(a.flags|=2048,Re===null)throw Error(h(349));i||(Mn&127)!==0||Kc(a,t,n)}return n}function Kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t=Vs(),ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,a){t.value=n,t.getSnapshot=a,Zc(t)&&Qc(e)}function Xc(e,t,n){return n(function(){Zc(t)&&Qc(e)})}function Zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Qc(e){var t=Ca(e,2);t!==null&&At(t,e,2)}function sh(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),Ga){Zn(!0);try{n()}finally{Zn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t}function $c(e,t,n,a){return e.baseState=n,oh(e,Ee,typeof a=="function"?a:Hn)}function Nw(e,t,n,a,o){if(Zs(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};Y.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,em(t,i)):(i.next=n.next,t.pending=n.next=i)}}function em(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var i=Y.T,d={};d.types=i!==null?i.types:null,Y.T=d;try{var f=n(o,a),g=Y.S;g!==null&&g(d,f),tm(e,t,f)}catch(E){rh(e,t,E)}finally{i!==null&&d.types!==null&&(i.types=d.types),Y.T=i}}else try{i=n(o,a),tm(e,t,i)}catch(E){rh(e,t,E)}}function tm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){nm(e,t,a)},function(a){return rh(e,t,a)}):nm(e,t,n)}function nm(e,t,n){t.status="fulfilled",t.value=n,am(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,em(e,n)))}function rh(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,am(t),t=t.next;while(t!==a)}e.action=null}function am(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function om(e,t){return t}function im(e,t){if(se){var n=Re.formState;if(n!==null){e:{var a=ae;if(se){if(_e){t:{for(var o=_e,i=zt;o.nodeType!==8;){if(!i){o=null;break t}if(o=Gt(o.nextSibling),o===null){o=null;break t}}i=o.data,o=i==="F!"||i==="F"?o:null}if(o){_e=Gt(o.nextSibling),a=o.data==="F!";break e}}na(a)}a=!1}a&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:t},n.queue=a,n=Im.bind(null,ae,a),a.dispatch=n,a=sh(!1),i=mh.bind(null,ae,!1,a.queue),a=dt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Nw.bind(null,ae,o,i,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function sm(e){var t=Ue();return rm(t,Ee,e)}function rm(e,t,n){if(t=oh(e,t,om)[0],e=Ks(Hn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ri(t)}catch(d){throw d===xo?Ms:d}else a=t;t=Ue();var o=t.queue,i=o.dispatch;return n!==t.memoizedState&&(ae.flags|=2048,Eo(9,{destroy:void 0},Rw.bind(null,o,n),null)),[a,i,e]}function Rw(e,t){e.action=t}function lm(e){var t=Ue(),n=Ee;if(n!==null)return rm(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Eo(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Vs(),ae.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function hm(){return Ue().memoizedState}function Fs(e,t,n,a){var o=dt();ae.flags|=e,o.memoizedState=Eo(1|t,{destroy:void 0},n,a===void 0?null:a)}function Xs(e,t,n,a){var o=Ue();a=a===void 0?null:a;var i=o.memoizedState.inst;Ee!==null&&a!==null&&Ql(a,Ee.memoizedState.deps)?o.memoizedState=Eo(t,i,n,a):(ae.flags|=e,o.memoizedState=Eo(1|t,i,n,a))}function um(e,t){Fs(8390656,8,e,t)}function lh(e,t){Xs(2048,8,e,t)}function Bw(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Vs(),ae.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function dm(e){var t=Ue().memoizedState;return Bw({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function cm(e,t){return Xs(4,2,e,t)}function mm(e,t){return Xs(4,4,e,t)}function fm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pm(e,t,n){n=n!=null?n.concat([e]):null,Xs(4,4,fm.bind(null,t,e),n)}function hh(){}function gm(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ql(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ym(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ql(t,a[1]))return a[0];if(a=e(),Ga){Zn(!0);try{e()}finally{Zn(!1)}}return n.memoizedState=[a,t],a}function uh(e,t,n){return n===void 0||(Mn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Nf(),ae.lanes|=e,fa|=e,n)}function wm(e,t,n,a){return Rt(n,t)?n:la.current!==null?(e=uh(e,n,a),Rt(e,t)||(Ye=!0),e):(Mn&106)===0||(Mn&1073741824)!==0&&(he&261930)===0?(Ye=!0,e.memoizedState=n):(e=Nf(),ae.lanes|=e,fa|=e,t)}function bm(e,t,n,a,o){var i=ee.p;ee.p=i!==0&&8>i?i:8;var d=Y.T,f={};f.types=d!==null?d.types:null,Y.T=f,mh(e,!1,t,n);try{var g=o(),E=Y.S;if(E!==null&&E(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var _=Sw(g,a);Bi(e,t,_,Wt(e))}else Bi(e,t,a,Wt(e))}catch(C){Bi(e,t,{then:function(){},status:"rejected",reason:C},Wt())}finally{ee.p=i,d!==null&&f.types!==null&&(d.types=f.types),Y.T=d}}function _w(){}function dh(e,t,n,a){if(e.tag!==5)throw Error(h(476));var o=vm(e).queue;bm(e,o,t,Nn,n===null?_w:function(){return km(e),n(a)})}function vm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Nn,baseState:Nn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:Nn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function km(e){var t=vm(e);t.next===null&&(t=e.alternate.memoizedState),Bi(e,t.next.queue,{},Wt())}function ch(){return $e(Po)}function xm(){return Ue().memoizedState}function Am(){return Ue().memoizedState}function jw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Wt();e=sa(n);var a=ra(t,e,n);a!==null&&(At(a,t,n),Ii(a,t,n)),t={cache:Ul()},e.payload=t;return}t=t.return}}function Cw(e,t,n){var a=Wt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zs(e)?Sm(t,n):(n=_l(e,t,n,a),n!==null&&(At(n,e,a),Em(n,t,a)))}function Im(e,t,n){var a=Wt();Bi(e,t,n,a)}function Bi(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zs(e))Sm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,f=i(d,n);if(o.hasEagerState=!0,o.eagerState=f,Rt(f,d))return Ns(e,t,o,0),Re===null&&Ts(),!1}catch{}if(n=_l(e,t,o,a),n!==null)return At(n,e,a),Em(n,t,a),!0}return!1}function mh(e,t,n,a){if(a={lane:2,revertLane:au(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zs(e)){if(t)throw Error(h(479))}else t=_l(e,n,a,2),t!==null&&At(t,e,2)}function Zs(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Sm(e,t){Io=Gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Em(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Td(e,n)}}var Qs={readContext:$e,use:Js,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me,useEffectEvent:Me},Tm={readContext:$e,use:Js,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:um,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Fs(4194308,4,fm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){Fs(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var a=e();if(Ga){Zn(!0);try{e()}finally{Zn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=dt();if(n!==void 0){var o=n(t);if(Ga){Zn(!0);try{n(t)}finally{Zn(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Cw.bind(null,ae,e),[a.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=sh(e);var t=e.queue,n=Im.bind(null,ae,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hh,useDeferredValue:function(e,t){var n=dt();return uh(n,e,t)},useTransition:function(){var e=sh(!1);return e=bm.bind(null,ae,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ae,o=dt();if(se){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),Re===null)throw Error(h(349));(he&127)!==0||Kc(a,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,um(Xc.bind(null,a,i,e),[e]),a.flags|=2048,Eo(9,{destroy:void 0},Fc.bind(null,a,i,n,t),null),n},useId:function(){var e=dt(),t=Re.identifierPrefix;if(se){var n=gn,a=pn;n=(a&~(1<<32-Tt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ps++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ew++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ch,useFormState:im,useActionState:im,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mh.bind(null,ae,!0,n),n.dispatch=t,[e,t]},useMemoCache:ah,useCacheRefresh:function(){return dt().memoizedState=jw.bind(null,ae)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((ye&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},Nm={readContext:$e,use:Js,useCallback:gm,useContext:$e,useEffect:lh,useImperativeHandle:pm,useInsertionEffect:cm,useLayoutEffect:mm,useMemo:ym,useReducer:Ks,useRef:hm,useState:function(){return Ks(Hn)},useDebugValue:hh,useDeferredValue:function(e,t){var n=Ue();return wm(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Ks(Hn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ri(e),t]},useSyncExternalStore:Jc,useId:xm,useHostTransitionStatus:ch,useFormState:sm,useActionState:sm,useOptimistic:function(e,t){var n=Ue();return $c(n,Ee,e,t)},useMemoCache:ah,useCacheRefresh:Am,useEffectEvent:dm},Ww={readContext:$e,use:Js,useCallback:gm,useContext:$e,useEffect:lh,useImperativeHandle:pm,useInsertionEffect:cm,useLayoutEffect:mm,useMemo:ym,useReducer:ih,useRef:hm,useState:function(){return ih(Hn)},useDebugValue:hh,useDeferredValue:function(e,t){var n=Ue();return Ee===null?uh(n,e,t):wm(n,Ee.memoizedState,e,t)},useTransition:function(){var e=ih(Hn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ri(e),t]},useSyncExternalStore:Jc,useId:xm,useHostTransitionStatus:ch,useFormState:lm,useActionState:lm,useOptimistic:function(e,t){var n=Ue();return Ee!==null?$c(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ah,useCacheRefresh:Am,useEffectEvent:dm};function fh(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ph={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Wt(),o=sa(a);o.payload=t,n!=null&&(o.callback=n),t=ra(e,o,a),t!==null&&(At(t,e,a),Ii(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Wt(),o=sa(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ra(e,o,a),t!==null&&(At(t,e,a),Ii(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wt(),a=sa(n);a.tag=2,t!=null&&(a.callback=t),t=ra(e,a,n),t!==null&&(At(t,e,n),Ii(t,e,n))}};function Rm(e,t,n,a,o,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,d):t.prototype&&t.prototype.isPureReactComponent?!gi(n,a)||!gi(o,i):!0}function Bm(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ph.enqueueReplaceState(t,t.state,null)}function Pa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=Z({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function _m(e){Es(e)}function jm(e){console.error(e)}function Cm(e){Es(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Wm(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function gh(e,t,n){return n=sa(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function Om(e){return e=sa(e),e.tag=3,e}function Lm(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var i=a.value;e.payload=function(){return o(i)},e.callback=function(){Wm(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Wm(t,n,a),typeof o!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Ow(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Da(t,n,o,!0),n=et.current,n!==null){switch(n.tag){case 31:case 13:case 19:return rt===null?vr():n.alternate===null&&He===0&&(He=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===Hs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),eu(e,a,o)),!1;case 22:return n.flags|=65536,a===Hs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),eu(e,a,o)),!1}throw Error(h(435,n.tag))}return eu(e,a,o),vr(),!1}if(se)return t=et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Ll&&(e=Error(h(422),{cause:a}),bi(Ht(e,n)))):(a!==Ll&&(t=Error(h(423),{cause:a}),bi(Ht(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Ht(a,n),o=gh(e.stateNode,a,o),Vl(e,o),He!==4&&(He=2)),!1;var i=Error(h(520),{cause:a});if(i=Ht(i,n),Mi===null?Mi=[i]:Mi.push(i),He!==4&&(He=2),t===null)return!0;a=Ht(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=gh(n.stateNode,a,e),Vl(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Om(o),Lm(o,e,n,a),Vl(n,o),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var yh=Error(h(461)),Ye=!1;function Pe(e,t,n,a){t.child=e===null?Uc(t,null,n,a):Ya(t,e.child,n,a)}function Dm(e,t,n,a,o){n=n.render;var i=t.ref;if("ref"in a){var d={};for(var f in a)f!=="ref"&&(d[f]=a[f])}else d=a;return Ma(t),a=$l(e,t,n,d,i,o),f=eh(),e!==null&&!Ye?(th(e,t,o),Un(e,t,o)):(se&&f&&js(t),t.flags|=1,Pe(e,t,a,o),t.child)}function Mm(e,t,n,a,o){if(e===null){var i=n.type;return typeof i=="function"&&!jl(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Hm(e,t,i,a,o)):(e=Bs(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Sh(e,o)){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(d,a)&&e.ref===t.ref)return Un(e,t,o)}return t.flags|=1,e=Wn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Hm(e,t,n,a,o){if(e!==null){var i=e.memoizedProps;if(gi(i,a)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=a=i,Sh(e,o))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Un(e,t,o)}return wh(e,t,n,a,o)}function Um(e,t,n,a){var o=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~i}else a=0,t.child=null;return qm(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ds(t,i!==null?i.cachePool:null),i!==null?Yc(t,i):Kl(),Gc(t);else return a=t.lanes=536870912,qm(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Ds(t,i.cachePool),Yc(t,i),ua(),t.memoizedState=null):(e!==null&&Ds(t,null),Kl(),ua());return Pe(e,t,o,n),t.child}function _i(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qm(e,t,n,a,o){var i=zl();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ds(t,null),Kl(),Gc(t),e!==null&&Da(e,t,a,!0),t.childLanes=o,null}function er(e,t){return t=tr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zm(e,t,n){return Ya(t,e.child,null,n),e=er(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Lw(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(a.mode==="hidden")return e=er(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},_i(null,e);if(Xl(t),(e=_e)?(e=pp(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:pn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},n=Sc(e),n.return=t,t.child=n,Ke=t,_e=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return er(t,a)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Xl(t),o)if(t.flags&256)t.flags&=-257,t=zm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Ye||Da(e,t,n,!1),o=(n&e.childLanes)!==0,Ye||o){if(la.current===null){if(a=Re,a!==null&&(d=Nd(a,n),d!==0&&d!==i.retryLane))throw i.retryLane=d,Ca(e,d),At(a,e,d),yh;vr()}t=zm(e,t,n)}else e=i.treeContext,_e=Gt(d.nextSibling),Ke=t,se=!0,ta=null,zt=!1,e!==null&&Nc(t,e),t=er(t,a),t.flags|=134221824;return t}return e=Wn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function To(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function wh(e,t,n,a,o){return Ma(t),n=$l(e,t,n,a,void 0,o),a=eh(),e!==null&&!Ye?(th(e,t,o),Un(e,t,o)):(se&&a&&js(t),t.flags|=1,Pe(e,t,n,o),t.child)}function Ym(e,t,n,a,o,i){return Ma(t),t.updateQueue=null,n=Vc(t,a,n,o),Pc(e),a=eh(),e!==null&&!Ye?(th(e,t,i),Un(e,t,i)):(se&&a&&js(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Gm(e,t,n,a,o){if(Ma(t),t.stateNode===null){var i=yo,d=n.contextType;typeof d=="object"&&d!==null&&(i=$e(d)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ph,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Gl(t),d=n.contextType,i.context=typeof d=="object"&&d!==null?$e(d):yo,i.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(fh(t,n,d,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&ph.enqueueReplaceState(i,i.state,null),Ei(t,a,i,o),Si(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,g=Pa(n,f);i.props=g;var E=i.context,_=n.contextType;d=yo,typeof _=="object"&&_!==null&&(d=$e(_));var C=n.getDerivedStateFromProps;_=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||E!==d)&&Bm(t,i,a,d),ia=!1;var I=t.memoizedState;i.state=I,Ei(t,a,i,o),Si(),E=t.memoizedState,f||I!==E||ia?(typeof C=="function"&&(fh(t,n,C,a),E=t.memoizedState),(g=ia||Rm(t,n,g,a,I,E,d))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),i.props=a,i.state=E,i.context=d,a=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Pl(e,t),d=t.memoizedProps,_=Pa(n,d),i.props=_,C=t.pendingProps,I=i.context,E=n.contextType,g=yo,typeof E=="object"&&E!==null&&(g=$e(E)),f=n.getDerivedStateFromProps,(E=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==C||I!==g)&&Bm(t,i,a,g),ia=!1,I=t.memoizedState,i.state=I,Ei(t,a,i,o),Si();var B=t.memoizedState;d!==C||I!==B||ia||e!==null&&e.dependencies!==null&&Os(e.dependencies)?(typeof f=="function"&&(fh(t,n,f,a),B=t.memoizedState),(_=ia||Rm(t,n,_,a,I,B,g)||e!==null&&e.dependencies!==null&&Os(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,B,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,B,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=B),i.props=a,i.state=B,i.context=g,a=_):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,To(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ya(t,e.child,null,o),t.child=Ya(t,null,n,o)):Pe(e,t,n,o),t.memoizedState=i.state,e=t.child):e=Un(e,t,o),e}function Pm(e,t,n,a){return Oa(),t.flags|=256,Pe(e,t,n,a),t.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vh(e){return{baseLanes:e,cachePool:Wc()}}function kh(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ct),e}function Vm(e,t,n){var a=t.pendingProps,o=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),d&&(o=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(o?ha(t):ua(),(e=_e)?(e=pp(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:pn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},n=Sc(e),n.return=t,t.child=n,Ke=t,_e=null)):e=null,e===null)throw na(t);return vu(e)?t.lanes=32:t.lanes=536870912,null}return i=a.children,a=a.fallback,o?(ua(),o=t.mode,i=tr({mode:"hidden",children:i},o),a=Wa(a,o,n,null),i.return=t,a.return=t,i.sibling=a,t.child=i,a=t.child,a.memoizedState=vh(n),a.childLanes=kh(e,d,n),t.memoizedState=bh,_i(null,a)):(ha(t),xh(t,i))}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(g!==null)return Dw(e,t,i,d,a,g,f,n)}return o?(ua(),o=a.fallback,i=t.mode,f=e.child,g=f.sibling,a=Wn(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&1206910976,g!==null?o=Wn(g,o):(o=Wa(o,i,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,_i(null,a),a=t.child,o=e.child.memoizedState,o===null?o=vh(n):(i=o.cachePool,i!==null?(f=qe._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=Wc(),o={baseLanes:o.baseLanes|n,cachePool:i}),a.memoizedState=o,a.childLanes=kh(e,d,n),t.memoizedState=bh,_i(e.child,a)):(ha(t),n=e.child,e=n.sibling,n=Wn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function xh(e,t){return t=tr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function tr(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function nr(e,t,n){return Ya(t,e.child,null,n),e=xh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dw(e,t,n,a,o,i,d,f){if(n)return t.flags&256?(ha(t),t.flags&=-257,nr(e,t,f)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,null):(ua(),i=o.fallback,d=t.mode,o=tr({mode:"visible",children:o.children},d),i=Wa(i,d,f,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Ya(t,e.child,null,f),o=t.child,o.memoizedState=vh(f),o.childLanes=kh(e,a,f),t.memoizedState=bh,_i(null,o));if(ha(t),vu(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var g=a.dgst;return a=g,a!==""&&(o=Error(h(419)),o.stack="",o.digest=a,bi({value:o,source:null,stack:null})),nr(e,t,f)}if(Ye||Da(e,t,f,!1),a=(f&e.childLanes)!==0,Ye||a){if(la.current!==null)return nr(e,t,f);if(a=Re,a!==null&&(o=Nd(a,f),o!==0&&o!==d.retryLane))throw d.retryLane=o,Ca(e,o),At(a,e,o),yh;return bu(i)||vr(),nr(e,t,f)}return bu(i)?(t.flags|=192,t.child=e.child,null):(e=d.treeContext,_e=Gt(i.nextSibling),Ke=t,se=!0,ta=null,zt=!1,e!==null&&Nc(t,e),t=xh(t,o.children),t.flags|=134221824,t)}function Jm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ws(e.return,t,n)}function Km(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ys(n)===null&&(t=e),e=e.sibling}return t}function ar(e,t,n,a,o,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=o,d.treeForkCount=i)}function Ah(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ih(e,t,n){var a=t.pendingProps,o=a.revealOrder,i=a.tail;a=a.children;var d=tt.current;if(t.flags&128)return Ti(t,d),null;var f=(d&2)!==0;if(f?(d=d&1|2,t.flags|=128):d&=1,Ti(t,d),o==="backwards"&&e!==null?(Ah(e),Pe(e,t,a,n),Ah(e)):Pe(e,t,a,n),a=se?wi:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jm(e,n,t);else if(e.tag===19)Jm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":n=Km(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null,Ah(t)),ar(t,!0,o,null,i,a);break;case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ys(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ar(t,!0,n,null,i,a);break;case"together":ar(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=Km(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ar(t,!1,o,n,i,a)}return t.child}function Fm(e,t,n){var a=t.pendingProps;return aa(t,t.type,a.value),Pe(e,t,a.children,n),t.child}function Un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Da(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sh(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Os(e)))}function Mw(e,t,n){switch(t.tag){case 3:ls(t,t.stateNode.containerInfo),aa(t,qe,e.memoizedState.cache),Oa();break;case 27:case 5:Qr(t);break;case 4:ls(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xl(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return ha(t),t.flags|=128,null;a=Da(e,t,n,!1);var o=t.child.childLanes;return a||(n&o)!==0?Vm(e,t,n):(ha(t),e=Un(e,t,n),e!==null?e.sibling:null)}ha(t);break;case 19:if(t.flags&128)return Ih(e,t,n);if(o=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(Da(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Ih(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ti(t,tt.current),a)break;return null;case 22:return t.lanes=0,Um(e,t,n,t.pendingProps);case 24:aa(t,qe,e.memoizedState.cache)}return Un(e,t,n)}function Xm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Sh(e,n)&&(t.flags&128)===0)return Ye=!1,Mw(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,se&&(t.flags&1048576)!==0&&Tc(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")jl(e)?(a=Pa(e,a),t.tag=1,t=Gm(null,t,e,a,n)):(t.tag=0,t=wh(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===H){t.tag=11,t=Dm(null,t,e,a,n);break e}else if(o===Ne){t.tag=14,t=Mm(null,t,e,a,n);break e}else if(o===Te){t.tag=10,t.type=e,t=Fm(null,t,n);break e}}throw t=me(e)||e,Error(h(306,t,""))}}return t;case 0:return wh(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=Pa(a,t.pendingProps),Gm(e,t,a,o,n);case 3:e:{if(ls(t,t.stateNode.containerInfo),e===null)throw Error(h(387));a=t.pendingProps;var i=t.memoizedState;o=i.element,Pl(e,t),Ei(t,a,null,n);var d=t.memoizedState;if(a=d.cache,aa(t,qe,a),a!==i.cache&&Hl(t,[qe],n,!0),Si(),a=d.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Pm(e,t,a,n);break e}else if(a!==o){o=Ht(Error(h(424)),t),bi(o),t=Pm(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=Gt(e.firstChild),Ke=t,se=!0,ta=null,zt=!0,n=Uc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Oa(),a===o){t=Un(e,t,n);break e}Pe(e,t,a,n)}t=t.child}return t;case 26:return To(e,t),e===null?(n=xp(t.type,null,t.pendingProps,null))?t.memoizedState=n:se||(t.stateNode=tp(t.type,t.pendingProps,Fn.current,t)):t.memoizedState=xp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qr(t),e===null&&se&&(a=t.stateNode=wp(t.type,t.pendingProps,Fn.current),Ke=t,zt=!0,o=_e,wa(t.type)?(ku=o,_e=Gt(a.firstChild)):_e=o),Pe(e,t,t.pendingProps.children,n),To(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((o=a=_e)&&(a=jb(a,t.type,t.pendingProps,zt),a!==null?(t.stateNode=a,Ke=t,_e=Gt(a.firstChild),zt=!1,o=!0):o=!1),o||na(t)),Qr(t),o=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,a=i.children,cu(o,i)?a=null:d!==null&&cu(o,d)&&(t.flags|=32),t.memoizedState!==null&&(o=$l(e,t,Tw,null,null,n),Po._currentValue=o),To(e,t),Pe(e,t,a,n),t.child;case 6:return e===null&&se&&((e=n=_e)&&(n=Cb(n,t.pendingProps,zt),n!==null?(t.stateNode=n,Ke=t,_e=null,e=!0):e=!1),e||na(t)),null;case 13:return Vm(e,t,n);case 4:return ls(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ya(t,null,a,n):Pe(e,t,a,n),t.child;case 11:return Dm(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,To(e,t),Pe(e,t,a,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:return Fm(e,t,n);case 9:return o=t.type._context,a=t.pendingProps.children,Ma(t),o=$e(o),a=a(o),t.flags|=1,Pe(e,t,a,n),t.child;case 14:return Mm(e,t,t.type,t.pendingProps,n);case 15:return Hm(e,t,t.type,t.pendingProps,n);case 19:return Ih(e,t,n);case 31:return Lw(e,t,n);case 22:return Um(e,t,n,t.pendingProps);case 24:return Ma(t),a=$e(qe),e===null?(o=zl(),o===null&&(o=Re,i=Ul(),o.pooledCache=i,i.refCount++,i!==null&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:a,cache:o},Gl(t),aa(t,qe,o)):((e.lanes&n)!==0&&(Pl(e,t),Ei(t,null,null,n),Si()),o=e.memoizedState,i=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),aa(t,qe,a)):(a=i.cache,aa(t,qe,a),a!==o.cache&&Hl(t,[qe],n,!0))),Pe(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:se&&js(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:To(e,t),Pe(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function qn(e){e.flags|=4}function Eh(e,t,n,a,o){var i;if((i=(e.mode&32)!==0)&&(i=n===null?Ep(t,a):Ep(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(jf())e.flags|=8192;else throw za=Hs,Yl}else e.flags&=-16777217}function Zm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tp(t))if(jf())e.flags|=8192;else throw za=Hs,Yl}function or(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sd():536870912,e.lanes|=t,jo|=t)}function ji(e,t){if(!se)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&1206910976,a|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Hw(e,t,n){var a=t.pendingProps;switch(Ol(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dn(qe),ao(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(vo(t)?qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dl())),je(t),null;case 26:var o=t.type,i=t.memoizedState;return e===null?(qn(t),i!==null?(je(t),Zm(t,i)):(je(t),Eh(t,o,null,a,n))):i?i!==e.memoizedState?(qn(t),je(t),Zm(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&qn(t),je(t),Eh(t,o,e,a,n)),null;case 27:if(hs(t),n=Fn.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&qn(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return je(t),t.subtreeFlags&=-33554433,null}e=mn.current,vo(t)?Rc(t):(e=wp(o,a,n),t.stateNode=e,qn(t))}return je(t),t.subtreeFlags&=-33554433,null;case 5:if(hs(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&qn(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return je(t),t.subtreeFlags&=-33554433,null}if(i=mn.current,vo(t))Rc(t);else{var d=Yi(Fn.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?d.createElement(o,{is:a.is}):d.createElement(o)}}i[Qe]=t,i[wt]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(at(i,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&qn(t)}}return je(t),t.subtreeFlags&=-33554433,Eh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&qn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=Fn.current,vo(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=Ke,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Zf(e.nodeValue,n)),e||na(t,!0)}else e=Yi(e).createTextNode(a),e[Qe]=t,t.stateNode=e}return je(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=vo(t),n!==null){if(e===null){if(!a)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Qe]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else n=Dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(h(558))}return je(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=vo(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[Qe]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else o=Dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),or(t,t.updateQueue),je(t),null);case 4:return ao(),e===null&&ru(t.stateNode.containerInfo),t.flags|=67108864,je(t),null;case 10:return Dn(t.type),je(t),null;case 19:if(Zl(t),a=t.memoizedState,a===null)return je(t),null;if(o=(t.flags&128)!==0,i=a.rendering,i===null)if(o)ji(a,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ys(e),i!==null){for(t.flags|=128,ji(a,!1),e=i.updateQueue,t.updateQueue=e,or(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ic(n,e),n=n.sibling;return Ti(t,tt.current&1|2),se&&On(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&St()>gr&&(t.flags|=128,o=!0,ji(a,!1),t.lanes=4194304)}else{if(!o)if(e=Ys(i),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,or(t,e),ji(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!se)return je(t),null}else 2*St()-a.renderingStartTime>gr&&n!==536870912&&(t.flags|=128,o=!0,ji(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=St(),e.sibling=null,i=tt.current,i=o?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||se?Ti(t,i):(n=i,Be(et,t),Be(tt,n),rt===null&&(rt=t)),se&&On(t,a.treeForkCount),e}return je(t),null;case 22:case 23:return Bt(t),Fl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),n=t.updateQueue,n!==null&&or(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Ze(Ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Dn(qe),je(t),null;case 25:return null;case 30:return t.flags|=33554432,je(t),null}throw Error(h(156,t.tag))}function Uw(e,t){switch(Ol(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(qe),ao(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hs(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(h(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Zl(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ao(),null;case 10:return Dn(t.type),null;case 22:case 23:return Bt(t),Fl(),e!==null&&Ze(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dn(qe),null;case 25:return null;default:return null}}function Qm(e,t){switch(Ol(t),t.tag){case 3:Dn(qe),ao();break;case 26:case 27:case 5:hs(t);break;case 4:ao();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:Zl(t);break;case 10:Dn(t.type);break;case 22:case 23:Bt(t),Fl(),e!==null&&Ze(Ua);break;case 24:Dn(qe)}}function Ci(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var i=n.create,d=n.inst;a=i(),d.destroy=a}n=n.next}while(n!==o)}}catch(f){Ae(t,t.return,f)}}function da(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var i=o.next;a=i;do{if((a.tag&e)===e){var d=a.inst,f=d.destroy;if(f!==void 0){d.destroy=void 0,o=t;var g=n,E=f;try{E()}catch(_){Ae(o,g,_)}}}a=a.next}while(a!==i)}}catch(_){Ae(t,t.return,_)}}function $m(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{zc(t,n)}catch(a){Ae(e,e.return,a)}}}function ef(e,t,n){n.props=Pa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ae(e,t,a)}}function yn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var o=e.stateNode,i=jn(e.memoizedProps,o);(o.ref===null||o.ref.name!==i)&&(o.ref=lp(i)),a=o.ref;break;case 7:if(e.stateNode===null){var d=new Ot(e);y(e.child,!1,Bb,d,void 0,void 0),e.stateNode=d}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(f){Ae(e,t,f)}}function nt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Ae(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ae(e,t,o)}else n.current=null}function ir(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)fp(e.stateNode,t[n])}function tf(e){for(var t=e.return;t!==null&&(Nh(t)&&fp(e.stateNode,t.stateNode),!Th(t));)t=t.return}function Wi(e){for(var t=e.return;t!==null&&(Nh(t)&&_b(e.stateNode,t.stateNode),!Th(t));)t=t.return}function Th(e){return e.tag===5||e.tag===3||e.tag===27}function Nh(e){return e&&e.tag===7&&e.stateNode!==null}function Rh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Ae(e,e.return,o)}}function Bh(e,t,n){try{var a=e.stateNode;cb(a,e.type,n,t),a[wt]=t}catch(o){Ae(e,e.return,o)}}function nf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function _h(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jh(e,t,n,a){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(o,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(o),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fn)),ir(e,a),fe=!0;else if(o!==4&&(o===27&&(ir(e,a),a=null,wa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(jh(e,t,n,a),e=e.sibling;e!==null;)jh(e,t,n,a),e=e.sibling}function sr(e,t,n,a){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?n.insertBefore(o,t):n.appendChild(o),ir(e,a),fe=!0;else if(o!==4&&(o===27&&(ir(e,a),a=null,wa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(sr(e,t,n,a),e=e.sibling;e!==null;)sr(e,t,n,a),e=e.sibling}function af(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);at(t,a,n),t[Qe]=e,t[wt]=n}catch(i){Ae(e,e.return,i)}}var rr=!1,_t=null;function of(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(rr=!0)}var wn=null;function sf(){var e=wn;return wn=null,e}var vt=0;function No(e,t,n,a,o){return vt=0,rf(e.child,t,n,a,o)}function rf(e,t,n,a,o){for(var i=!1;e!==null;){if(e.tag===5){var d=e.stateNode;if(a!==null){var f=pu(d);a.push(f),f.view&&(i=!0)}else i||pu(d).view&&(i=!0);rr=!0,sp(d,vt===0?t:t+"_"+vt,n),vt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||rf(e.child,t,n,a,o)&&(i=!0));e=e.sibling}return i}function bn(e,t){for(;e!==null;)e.tag===5?rp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||bn(e.child,t)),e=e.sibling}function lr(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(lr(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(h(544));var n=t.name;t=Cn(t.default,t.share),t!=="none"&&(No(e,n,t,null,!1)||bn(e.child,!1))}e=e.sibling}}function Ch(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,o=jn(a,n),i=Cn(a.default,n.paired?a.share:a.enter);i!=="none"?No(e,o,i,null,!1)?(lr(e),n.paired||t||Lo(e,a.onEnter)):bn(e.child,!1):lr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ch(e,t),e=e.sibling;else lr(e)}function Wh(e){if(_t!==null&&_t.size!==0){var t=_t;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var o=t.get(a);if(o!==void 0){var i=Cn(n.default,n.share);if(i!=="none"&&(No(e,a,i,null,!1)?(i=e.stateNode,o.paired=i,i.paired=o,Lo(e,n.onShare)):bn(e.child,!1)),t.delete(a),t.size===0)break}}}Wh(e)}e=e.sibling}}}function Oh(e){if(e.tag===30){var t=e.memoizedProps,n=jn(t,e.stateNode),a=_t!==null?_t.get(n):void 0,o=Cn(t.default,a!==void 0?t.share:t.exit);o!=="none"&&(No(e,n,o,null,!1)?a!==void 0?(o=e.stateNode,a.paired=o,o.paired=a,_t.delete(n),Lo(e,t.onShare)):Lo(e,t.onExit):bn(e.child,!1)),_t!==null&&Wh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Oh(e),e=e.sibling;else _t!==null&&Wh(e)}function lf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=jn(t,e.stateNode);t=Cn(t.default,t.update),e.flags&=-5,t!=="none"&&No(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&lf(e);e=e.sibling}}function Lh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,bn(e.child,!1))}Lh(e)}e=e.sibling}}function hr(e){if(e.tag===30)e.stateNode.paired=null,bn(e.child,!1),Lh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)hr(e),e=e.sibling;else Lh(e)}function hf(e){for(e=e.child;e!==null;)e.tag===30?bn(e.child,!1):(e.subtreeFlags&33554432)!==0&&hf(e),e=e.sibling}function Dh(e,t,n,a,o,i,d){for(var f=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(i!==null&&vt<i.length){var E=i[vt],_=pu(g);(E.view||_.view)&&(f=!0);var C;if(C=(e.flags&4)===0)if(_.clip)C=!0;else{C=E.rect;var I=_.rect;C=C.y!==I.y||C.x!==I.x||C.height!==I.height||C.width!==I.width}C&&(e.flags|=4),_.abs?_=!E.abs:(E=E.rect,_=_.rect,_=E.height!==_.height||E.width!==_.width),_&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&sp(g,vt===0?n:n+"_"+vt,o),f&&(e.flags&4)!==0||(wn===null&&(wn=[]),wn.push(g,vt===0?a:a+"_"+vt,t.memoizedProps)),vt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&d?e.flags|=t.flags&32:Dh(e,t.child,n,a,o,i,d)&&(f=!0));t=t.sibling}return f}function uf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,o=jn(n,a),i=Cn(n.default,n.update),d;d=e.memoizedState,e.memoizedState=null,a=e;var f=e.child;vt=0,o=Dh(a,f,o,o,i,d,!1),(e.flags&4)!==0&&o&&Lo(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&uf(e);e=e.sibling}}var Fe=!1,ke=!1,vn=!1,Mh=!1,df=typeof WeakSet=="function"?WeakSet:Set,Xe=null,kn=!1,Oi=!1,ur=!1,Hh=!1;function qw(e,t,n){if(e=e.containerInfo,uu=Vo,e=fc(e),Sl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var i=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var f=0,g=-1,E=-1,_=0,C=0,I=e,B=null;t:for(;;){for(var D;I!==a||i!==0&&I.nodeType!==3||(g=f+i),I!==d||o!==0&&I.nodeType!==3||(E=f+o),I.nodeType===3&&(f+=I.nodeValue.length),(D=I.firstChild)!==null;)B=I,I=D;for(;;){if(I===e)break t;if(B===a&&++_===i&&(g=f),B===d&&++C===o&&(E=f),(D=I.nextSibling)!==null)break;I=B,B=I.parentNode}I=D}a=g===-1||E===-1?null:{start:g,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(du={focusedElem:e,selectionRange:a},Vo=!1,n=(n&335544064)===n,Xe=t,t=n?9270:1024;Xe!==null;){if(e=Xe,n&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)n&&Oh(a[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&of(e),dr(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&Oh(a),dr(n);continue}else if(a!==null&&a.memoizedState!==null){n&&of(e),dr(n);continue}}a=e.child,(e.subtreeFlags&t)!==0&&a!==null?(a.return=e,Xe=a):(n&&lf(e),dr(n))}}_t=null}function dr(e){for(;Xe!==null;){var t=Xe,n=e,a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&a!==null){n=void 0,o=a.memoizedProps,a=a.memoizedState;var i=t.stateNode;try{var d=Pa(t.type,o);n=i.getSnapshotBeforeUpdate(d,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(f){Ae(t,t.return,f)}}break;case 3:if((o&1024)!==0){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)wu(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":wu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=jn(a.memoizedProps,a.stateNode),o=t.memoizedProps,o=Cn(o.default,o.update),o!=="none"&&No(a,n,o,a.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(h(163))}if(a=t.sibling,a!==null){a.return=t.return,Xe=a;break}Xe=t.return}}function cf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:xn(e,n),a&4&&Ci(5,n);break;case 1:if(xn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ae(n,n.return,d)}else{var o=Pa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ae(n,n.return,d)}}a&64&&$m(n),a&512&&yn(n,n.return);break;case 3:if(xn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{zc(e,t)}catch(d){Ae(n,n.return,d)}}break;case 27:t===null&&a&4&&af(n);case 26:case 5:xn(e,n),t===null&&a&4&&Rh(n),a&512&&yn(n,n.return);break;case 12:xn(e,n);break;case 31:xn(e,n),a&4&&gf(e,n);break;case 13:xn(e,n),a&4&&yf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$w.bind(null,n),Wb(e,n))));break;case 22:if(a=n.memoizedState!==null||Fe,!a){var i=t!==null&&t.memoizedState!==null||ke;t=Fe,o=ke,Fe=a,(ke=i)&&!o?(a=2,(n.subtreeFlags&8772)!==0&&(a|=1),nn(e,n,a)):xn(e,n),Fe=t,ke=o}break;case 30:xn(e,n),a&512&&yn(n,n.return);break;case 7:a&512&&yn(n,n.return);default:xn(e,n)}}function Uh(e,t){for(e=e.child;e!==null;)mf(e,t),e=e.sibling}function mf(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var o=e.stateNode,i=e.memoizedProps.style,d=i!=null&&i.hasOwnProperty("display")?i.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(g){Ae(e,e.return,g)}qh(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,fe=!0}catch(g){Ae(e,e.return,g)}break;case 18:try{var f=e.stateNode;t?ip(f,!0):ip(e.stateNode,!1)}catch(g){Ae(e,e.return,g)}break;case 22:case 23:e.memoizedState===null&&Uh(e,t);break;default:Uh(e,t)}}function qh(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:mf(n,a);break e;case 22:n.memoizedState===null&&qh(n,a);break e;default:qh(n,a)}}e=e.sibling}}function ff(e){var t=e.alternate;t!==null&&(e.alternate=null,ff(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,kt=!1;function en(e,t,n){for(n=n.child;n!==null;)pf(e,t,n),n=n.sibling}function pf(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 26:ke||nt(n,t),en(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ke&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ke||nt(n,t),Wi(n);var a=Oe,o=kt;wa(n.type)&&(Oe=n.stateNode,kt=!1),en(e,t,n),bp(n.stateNode,n.type,n.memoizedProps),Oe=a,kt=o;break;case 5:ke||nt(n,t),Wi(n);case 6:if(n.tag===6&&Wi(n),a=Oe,o=kt,Oe=null,en(e,t,n),Oe=a,kt=o,Oe!==null)if(kt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode),fe=!0}catch(i){Ae(n,t,i)}else try{Oe.removeChild(n.stateNode),fe=!0}catch(i){Ae(n,t,i)}break;case 18:Oe!==null&&(kt?(e=Oe,op(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jo(e)):op(Oe,n.stateNode));break;case 4:a=Oe,o=kt,Oe=n.stateNode.containerInfo,kt=!0,en(e,t,n),Oe=a,kt=o;break;case 0:case 11:case 14:case 15:da(2,n,t),ke||da(4,n,t),en(e,t,n);break;case 1:ke||(nt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ef(n,t,a)),en(e,t,n);break;case 21:en(e,t,n);break;case 22:ke=(a=ke)||n.memoizedState!==null,en(e,t,n),ke=a;break;case 30:nt(n,t),en(e,t,n);break;case 7:ke||nt(n,t),en(e,t,n);break;default:en(e,t,n)}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jo(e)}catch(n){Ae(t,t.return,n)}}}function yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jo(e)}catch(n){Ae(t,t.return,n)}}function zw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new df),t;default:throw Error(h(435,e.tag))}}function cr(e,t){var n=zw(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=eb.bind(null,e,a);a.then(o,o)}})}function ct(e,t,n){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var i=a[o],d=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(wa(g.type)){Oe=g.stateNode,kt=!1;break e}break;case 5:Oe=g.stateNode,kt=!1;break e;case 3:case 4:Oe=g.stateNode.containerInfo,kt=!0;break e}g=g.return}if(Oe===null)throw Error(h(160));pf(d,f,i),Oe=null,kt=!1,d=i.alternate,d!==null&&(d.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wf(t,e,n),t=t.sibling}var tn=null;function wf(e,t,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var d=a[i];d.ref.impl=d.nextImpl}ct(t,e,n),mt(e),o&4&&(da(3,e,e.return),Ci(3,e),da(5,e,e.return));break;case 1:ct(t,e,n),mt(e),o&512&&(ke||a===null||nt(a,a.return)),o&64&&Fe&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=tn,ct(t,e,n),mt(e),o&512&&(ke||a===null||nt(a,a.return)),o&4)if(o=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(Fe)e.stateNode=tp(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,o=i.ownerDocument||i;t:switch(t){case"title":a=o.getElementsByTagName("title")[0],(!a||a[ri]||a[Qe]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=o.createElement(t),o.head.insertBefore(a,o.querySelector("head > title"))),at(a,t,n),a[Qe]=e,Je(a),t=a;break e;case"link":if(i=Sp("link","href",o).get(t+(n.href||""))){for(d=0;d<i.length;d++)if(a=i[d],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(d,1);break t}}a=o.createElement(t),at(a,t,n),o.head.appendChild(a);break;case"meta":if(i=Sp("meta","content",o).get(t+(n.content||""))){for(d=0;d<i.length;d++)if(a=i[d],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(d,1);break t}}a=o.createElement(t),at(a,t,n),o.head.appendChild(a);break;default:throw Error(h(468,t))}a[Qe]=e,Je(a),t=a}e.stateNode=t}else Fe||Su(i,e.type,e.stateNode);else e.stateNode=Ip(i,n,e.memoizedProps);else o!==n?(o===null?(t=a.stateNode,t===null||ke||t.parentNode.removeChild(t)):o.count--,n===null?Fe||Su(i,e.type,e.stateNode):Ip(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Bh(e,e.memoizedProps,a.memoizedProps);break;case 27:ct(t,e,n),mt(e),o&512&&(ke||a===null||nt(a,a.return)),a!==null&&o&4&&Bh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=vn,vn=!1,ct(t,e,n),vn=i,mt(e),o&512&&(ke||a===null||nt(a,a.return)),e.flags&32){t=e.stateNode;try{ho(t,""),fe=!0}catch(_){Ae(e,e.return,_)}}o&4&&e.stateNode!=null&&(t=e.memoizedProps,Bh(e,t,a!==null?a.memoizedProps:t)),o&1024&&(Mh=!0);break;case 6:if(ct(t,e,n),mt(e),o&4){if(e.stateNode===null)throw Error(h(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,fe=!0}catch(_){Ae(e,e.return,_)}}break;case 3:if(fe=!1,Tr=null,i=tn,tn=Gi(t.containerInfo),ct(t,e,n),tn=i,mt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Jo(t.containerInfo)}catch(_){Ae(e,e.return,_)}Mh&&(Mh=!1,bf(e)),fe=!1;break;case 4:o=vn,vn=Fe,a=Md(),i=tn,tn=Gi(e.stateNode.containerInfo),ct(t,e,n),mt(e),tn=i,fe&&Oi&&(ur=!0),fe=a,vn=o;break;case 12:ct(t,e,n),mt(e);break;case 31:ct(t,e,n),mt(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,cr(e,t)));break;case 13:ct(t,e,n),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pr=St()),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,cr(e,t)));break;case 22:i=e.memoizedState!==null,d=a!==null&&a.memoizedState!==null;var f=Fe,g=ke,E=vn;Fe=f||i,vn=E||i,ke=g||d,ct(t,e,n),ke=g,vn=E,Fe=f,mt(e),o&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||a===null||d||Fe||ke||(t=d||ke,n=Fe,a=ke,Fe=i||Fe,ke=t,ca(e,2),Fe=n,ke=a),!i&&vn||Uh(e,i)),o&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,cr(e,n))));break;case 19:ct(t,e,n),mt(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,cr(e,t)));break;case 30:o&512&&(ke||a===null||nt(a,a.return)),o=Md(),i=Oi,d=(n&335544064)===n,f=e.memoizedProps,Oi=d&&Cn(f.default,f.update)!=="none",ct(t,e,n),mt(e),d&&a!==null&&fe&&(e.flags|=4),Oi=i,fe=o;break;case 21:break;case 7:o&512&&(ke||a===null||nt(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:ct(t,e,n),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(nf(a)){n=a;break}a=a.return}a=null;for(var o=e.return;o!==null;){if(Nh(o)){var i=o.stateNode;a===null?a=[i]:a.push(i)}if(Th(o))break;o=o.return}var d=a;if(n==null)throw Error(h(160));switch(n.tag){case 27:var f=n.stateNode,g=_h(e);sr(e,g,f,d);break;case 5:var E=n.stateNode;n.flags&32&&(ho(E,""),n.flags&=-33);var _=_h(e);sr(e,_,E,d);break;case 3:case 4:var C=n.stateNode.containerInfo,I=_h(e);jh(e,I,C,d);break;default:throw Error(h(161))}}catch(B){Ae(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Vo=!0,t.reset(),Vo=!1),e=e.sibling}}function Ro(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)vf(t,e),t=t.sibling;else uf(t)}function vf(e,t){var n=e.alternate;if(n===null)Ch(e,!1);else switch(e.tag){case 3:if(Hh=kn=!1,sf(),Ro(t,e),!kn&&!ur){if(e=wn,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var o=e[a+1];rp(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hh=!0}wn=null;break;case 5:Ro(t,e);break;case 4:a=kn,kn=!1,Ro(t,e),kn&&(ur=!0),kn=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Ch(e,!1):Ro(t,e));break;case 30:a=kn,o=sf(),kn=!1,Ro(t,e),kn&&(e.flags|=4);var i=e.memoizedProps,d=e.stateNode;t=jn(i,d),d=jn(n.memoizedProps,d);var f=Cn(i.default,i.update);f==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,vt=0,t=Dh(e,n,t,d,f,i,!0),vt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Lo(e,e.memoizedProps.onUpdate),wn=o):o!==null&&(o.push.apply(o,wn),wn=o),kn=(e.flags&32)!==0?!0:a;break;default:Ro(t,e)}}function xn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cf(e,t.alternate,t),t=t.sibling}function ca(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:da(4,n,n.return),ca(n,a);break;case 1:nt(n,n.return);var o=n.stateNode;typeof o.componentWillUnmount=="function"&&ef(n,n.return,o),ca(n,a);break;case 27:(a&2)!==0&&bp(n.stateNode,n.type,n.memoizedProps);case 5:nt(n,n.return),n.tag!==5&&n.tag!==27||Wi(n),ca(n,a);break;case 6:Wi(n);break;case 26:nt(n,n.return),o=n.stateNode,n.memoizedState!==null||o===null||ke||o.parentNode.removeChild(o),ca(n,a);break;case 22:n.memoizedState===null&&ca(n,a);break;case 30:nt(n,n.return),ca(n,a);break;case 7:nt(n,n.return);default:ca(n,a)}e=e.sibling}}function nn(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var a=t.alternate,o=e,i=t,d=i.flags,f=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:nn(o,i,n),Ci(4,i);break;case 1:if(nn(o,i,n),a=i,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(_){Ae(a,a.return,_)}if(a=i,o=a.updateQueue,o!==null){var g=a.stateNode;try{var E=o.shared.hiddenCallbacks;if(E!==null)for(o.shared.hiddenCallbacks=null,o=0;o<E.length;o++)qc(E[o],g)}catch(_){Ae(a,a.return,_)}}f&&d&64&&$m(i),yn(i,i.return);break;case 27:(n&2)!==0&&af(i);case 5:i.tag!==5&&i.tag!==27||tf(i),nn(o,i,n),f&&a===null&&d&4&&Rh(i),yn(i,i.return);break;case 6:tf(i);break;case 26:g=i.stateNode,i.memoizedState!==null||g===null||Fe||Su(Gi(g.ownerDocument),i.type,g),nn(o,i,n),f&&a===null&&d&4&&Rh(i),yn(i,i.return);break;case 12:nn(o,i,n);break;case 31:nn(o,i,n),f&&d&4&&gf(o,i);break;case 13:nn(o,i,n),f&&d&4&&yf(o,i);break;case 22:i.memoizedState===null&&nn(o,i,n),yn(i,i.return);break;case 30:nn(o,i,n),yn(i,i.return);break;case 7:yn(i,i.return);default:nn(o,i,n)}t=t.sibling}}function zh(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&vi(n))}function Yh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vi(e))}function Yt(e,t,n,a){var o=(n&335544064)===n;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;t!==null;)kf(e,t,n,a),t=t.sibling;else o&&hf(t)}function kf(e,t,n,a){var o=(n&335544064)===n;o&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&hr(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,n,a),i&2048&&Ci(9,t);break;case 1:Yt(e,t,n,a);break;case 3:Yt(e,t,n,a),o&&Hh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&vi(i)));break;case 12:if(i&2048){Yt(e,t,n,a),i=t.stateNode;try{var d=t.memoizedProps,f=d.id,g=d.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(E){Ae(t,t.return,E)}}else Yt(e,t,n,a);break;case 31:Yt(e,t,n,a);break;case 13:Yt(e,t,n,a);break;case 23:break;case 22:d=t.stateNode,f=t.alternate,t.memoizedState!==null?(o&&f!==null&&f.memoizedState===null&&hr(f),d._visibility&2?Yt(e,t,n,a):Li(e,t)):(o&&f!==null&&f.memoizedState!==null&&hr(t),d._visibility&2?Yt(e,t,n,a):(d._visibility|=2,Bo(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),i&2048&&zh(f,t);break;case 24:Yt(e,t,n,a),i&2048&&Yh(t.alternate,t);break;case 30:o&&(i=t.alternate,i!==null&&(bn(i.child,!0),bn(t.child,!0))),Yt(e,t,n,a);break;default:Yt(e,t,n,a)}}function Bo(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,f=n,g=a,E=d.flags;switch(d.tag){case 0:case 11:case 15:Bo(i,d,f,g,o),Ci(8,d);break;case 23:break;case 22:var _=d.stateNode;d.memoizedState!==null?_._visibility&2?Bo(i,d,f,g,o):Li(i,d):(_._visibility|=2,Bo(i,d,f,g,o)),o&&E&2048&&zh(d.alternate,d);break;case 24:Bo(i,d,f,g,o),o&&E&2048&&Yh(d.alternate,d);break;default:Bo(i,d,f,g,o)}t=t.sibling}}function Li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:Li(n,a),o&2048&&zh(a.alternate,a);break;case 24:Li(n,a),o&2048&&Yh(a.alternate,a);break;default:Li(n,a)}t=t.sibling}}var Va=8192;function Ja(e,t,n){if(e.subtreeFlags&Va)for(e=e.child;e!==null;)xf(e,t,n),e=e.sibling}function xf(e,t,n){switch(e.tag){case 26:Ja(e,t,n),e.flags&Va&&(e.memoizedState!==null?Kb(n,tn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Rp(n,e)));break;case 5:Ja(e,t,n),e.flags&Va&&(e=e.stateNode,(t&335544128)===t&&Rp(n,e));break;case 3:case 4:var a=tn;tn=Gi(e.stateNode.containerInfo),Ja(e,t,n),tn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Va,Va=16777216,Ja(e,t,n),Va=a):Ja(e,t,n));break;case 30:if((e.flags&Va)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var o=e.stateNode;o.paired=null,_t===null&&(_t=new Map),_t.set(a,o)}Ja(e,t,n);break;default:Ja(e,t,n)}}function Af(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Xe=a,Sf(a,e)}Af(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)If(e),e=e.sibling}function If(e){switch(e.tag){case 0:case 11:case 15:Di(e),e.flags&2048&&da(9,e,e.return);break;case 3:Di(e);break;case 12:Di(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mr(e)):Di(e);break;default:Di(e)}}function mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Xe=a,Sf(a,e)}Af(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),mr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,mr(t));break;default:mr(t)}e=e.sibling}}function Sf(e,t){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:vi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Xe=a;else e:for(n=e;Xe!==null;){a=Xe;var o=a.sibling,i=a.return;if(ff(a),a===n){Xe=null;break e}if(o!==null){o.return=i,Xe=o;break e}Xe=i}}}var Yw={getCacheForType:function(e){var t=$e(qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(qe).controller.signal}},Gw=typeof WeakMap=="function"?WeakMap:Map,ye=0,Re=null,re=null,he=0,xe=0,jt=null,ma=!1,_o=!1,Gh=!1,zn=0,He=0,fa=0,Ka=0,fr=0,Ct=0,jo=0,Mi=null,xt=null,Ph=!1,pr=0,Ef=0,gr=1/0,yr=null,pa=null,De=0,an=null,Fa=null,An=0,Vh=0,Jh=null,Tf=null,Co=null,Wo=null,Oo=null,Hi=0,wr=null;function Wt(){return(ye&2)!==0&&he!==0?he&-he:Y.T!==null?au():Rd()}function Nf(){if(Ct===0)if((he&536870912)===0||se){var e=cs;cs<<=1,(cs&3932160)===0&&(cs=262144),Ct=e}else Ct=536870912;return e=et.current,e!==null&&(e.flags|=32),Ct}function Lo(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=lp(jn(e.memoizedProps,n))),Wo===null&&(Wo=[]),Wo.push(t.bind(null,a))}}function At(e,t,n){(e===Re&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Do(e,0),ga(e,he,Ct,!1)),si(e,n),((ye&2)===0||e!==Re)&&(e===Re&&((ye&2)===0&&(Ka|=n),He===4&&ga(e,he,Ct,!1)),In(e))}function Rf(e,t,n){if((ye&6)!==0)throw Error(h(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ii(e,t),o=a?Jw(e,t):Fh(e,t,!0),i=a;do{if(o===0){_o&&!a&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Pw(n)){o=Fh(e,t,!1),i=!1;continue}if(o===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var f=e;o=Mi;var g=f.current.memoizedState.isDehydrated;if(g&&(Do(f,d).flags|=256),d=Fh(f,d,!1),d!==2&&d!==6){if(Gh&&!g){f.errorRecoveryDisabledLanes|=i,Ka|=i,o=4;break e}i=xt,xt=o,i!==null&&(xt===null?xt=i:xt.push.apply(xt,i))}o=d}if(i=!1,o!==2)continue}}if(o===1){Do(e,0),ga(e,t,0,!0);break}e:{switch(a=e,i=o,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ga(a,t,Ct,!ma);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(o=pr+300-St(),10<o)){if(ga(a,t,Ct,!ma),fs(a,0,!0)!==0)break e;An=t,a.timeoutHandle=fu(Bf.bind(null,a,n,xt,yr,Ph,t,Ct,Ka,jo,ma,i,"Throttled",-0,0),o);break e}Bf(a,n,xt,yr,Ph,t,Ct,Ka,jo,ma,i,null,-0,0)}}break}while(!0);In(e)}function Bf(e,t,n,a,o,i,d,f,g,E,_,C,I,B){e.timeoutHandle=-1;var D=t.subtreeFlags,z=(i&335544064)===i;if(C=null,(z||D&8192||(D&16785408)===16785408)&&(C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fn},_t=null,xf(t,i,C),z&&(D=C,z=e.containerInfo,z=(z.nodeType===9?z:z.ownerDocument).__reactViewTransition,z!=null&&(D.count++,D.waitingForViewTransition=!0,D=Ji.bind(D),z.finished.then(D,D))),D=(i&62914560)===i?pr-St():(i&4194048)===i?Ef-St():0,D=Fb(C,D),D!==null)){An=i,e.cancelPendingCommit=D(Mf.bind(null,e,t,i,n,a,o,d,f,g,E,_,C,null,I,B)),ga(e,i,d,!E);return}Mf(e,t,i,n,a,o,d,f,g,E,_,C)}function Pw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],i=o.getSnapshot;o=o.value;try{if(!Rt(i(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,a){t=Id(e,t),t&=~fr,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var i=31-Tt(o),d=1<<i;a[i]=-1,o&=~d}n!==0&&Ed(e,n,t)}function br(){return(ye&6)===0?(Ui(0),!1):!0}function Kh(){if(re!==null){if(xe===0)var e=re.return;else e=re,Ln=La=null,nh(e),Ao=null,Ai=0,e=re;for(;e!==null;)Qm(e.alternate,e),e=e.return;re=null}}function Do(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,pb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),An=0,Kh(),Re=e,re=n=Wn(e.current,null),he=t,xe=0,jt=null,ma=!1,_o=ii(e,t),Gh=!1,jo=Ct=fr=Ka=fa=He=0,xt=Mi=null,Ph=!1,zn=Id(e,t),Ts(),n}function _f(e,t){ae=null,Y.H=Qs,t===xo||t===Ms?(t=Dc(),xe=3):t===Yl?(t=Dc(),xe=4):xe=t===yh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,re===null&&(He=1,$s(e,Ht(t,e.current)))}function jf(){var e=et.current;return e===null?!0:(he&4194048)===he?rt===null:(he&62914560)===he||(he&536870912)!==0?e===rt:!1}function Cf(){var e=Y.H;return Y.H=Qs,e===null?Qs:e}function Wf(){var e=Y.A;return Y.A=Yw,e}function vr(){He=4,ma||(he&4194048)!==he&&et.current!==null||(_o=!0),(fa&134217727)===0&&(Ka&134217727)===0||Re===null||ga(Re,he,Ct,!1)}function Fh(e,t,n){var a=ye;ye|=2;var o=Cf(),i=Wf();(Re!==e||he!==t)&&(yr=null,Do(e,t)),t=!1;var d=He;e:do try{if(xe!==0&&re!==null){var f=re,g=jt;switch(xe){case 8:Kh(),d=6;break e;case 3:case 2:case 9:case 6:et.current===null&&(t=!0);var E=xe;if(xe=0,jt=null,Mo(e,f,g,E),n&&_o){d=0;break e}break;default:E=xe,xe=0,jt=null,Mo(e,f,g,E)}}Vw(),d=He;break}catch(_){_f(e,_)}while(!0);return t&&e.shellSuspendCounter++,Ln=La=null,ye=a,Y.H=o,Y.A=i,re===null&&(Re=null,he=0,Ts()),d}function Vw(){for(;re!==null;)Of(re)}function Jw(e,t){var n=ye;ye|=2;var a=Cf(),o=Wf();Re!==e||he!==t?(yr=null,gr=St()+500,Do(e,t)):_o=ii(e,t);e:do try{if(xe!==0&&re!==null){t=re;var i=jt;t:switch(xe){case 1:xe=0,jt=null,Mo(e,t,i,1);break;case 2:case 9:if(Oc(i)){xe=0,jt=null,Lf(t);break}t=function(){xe!==2&&xe!==9||Re!==e||(xe=7),In(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Oc(i)?(xe=0,jt=null,Lf(t)):(xe=0,jt=null,Mo(e,t,i,7));break;case 5:var d=null;switch(re.tag){case 26:d=re.memoizedState;case 5:case 27:var f=re;if(d?Tp(d):f.stateNode.complete){xe=0,jt=null;var g=f.sibling;if(g!==null)re=g;else{var E=f.return;E!==null?(re=E,kr(E)):re=null}break t}}xe=0,jt=null,Mo(e,t,i,5);break;case 6:xe=0,jt=null,Mo(e,t,i,6);break;case 8:Kh(),He=6;break e;default:throw Error(h(462))}}Kw();break}catch(_){_f(e,_)}while(!0);return Ln=La=null,Y.H=a,Y.A=o,ye=n,re!==null?0:(Re=null,he=0,Ts(),He)}function Kw(){for(;re!==null&&!dy();)Of(re)}function Of(e){var t=Xm(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?kr(e):re=t}function Lf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ym(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Ym(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:nh(t);var a=t;a===Ke&&(se?(Cs(a),a.tag===5&&a.stateNode!=null&&(_e=a.stateNode)):(Cs(a),se=!0));default:Qm(n,t),t=re=Ic(t,zn),t=Xm(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?kr(e):re=t}function Mo(e,t,n,a){Ln=La=null,nh(t),Ao=null,Ai=0;var o=t.return;try{if(Ow(e,o,t,n,he)){He=1,$s(e,Ht(n,e.current)),re=null;return}}catch(i){if(o!==null)throw re=o,i;He=1,$s(e,Ht(n,e.current)),re=null;return}t.flags&32768?(se||a===1?e=!0:_o||(he&536870912)!==0?e=!1:(ma=e=!0,(a===2||a===9||a===3||a===6)&&(a=et.current,a!==null&&a.tag===13&&(a.flags|=16384))),Df(t,e)):kr(t)}function kr(e){var t=e;do{if((t.flags&32768)!==0){Df(t,ma);return}e=t.return;var n=Hw(t.alternate,t,zn);if(n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);He===0&&(He=5)}function Df(e,t){do{var n=Uw(e.alternate,e);if(n!==null){n.flags&=32767,re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=n}while(e!==null);He=6,re=null}function Mf(e,t,n,a,o,i,d,f,g,E,_,C){e.cancelPendingCommit=null;do xr();while(De!==0);if((ye&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));e===Re&&(re=Re=null,he=0),Fa=t,an=e,An=n,Jh=o,Tf=a,Fw(e,t,n,d,f,g,C)}}function Fw(e,t,n,a,o,i,d){var f=t.lanes|t.childLanes;if(Vh=f,f|=Bl,ky(e,n,f,a,o,i),Wo=null,(n&335544064)===n?(Oo=Aw(e),a=10262):(Oo=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,tb(us,function(){return $h(),null})):(e.callbackNode=null,e.callbackPriority=0),rr=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null,o=ee.p,ee.p=2,i=ye,ye|=4;try{qw(e,t,n)}finally{ye=i,ee.p=o,Y.T=a}}De=1,rr?Co=kb(d,e.containerInfo,Oo,Xh,Zh,Zw,Qh,$h,Xw):(Xh(),Zh(),Qh())}function Xw(e){if(De!==0){var t=an.onRecoverableError;t(e,{componentStack:null})}}function Zw(){De===3&&(De=0,vf(Fa,an),De=4)}function Xh(){if(De===1){De=0;var e=an,t=Fa,n=An,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var o=ee.p;ee.p=2;var i=ye;ye|=4;try{Oi=ur=!1,wf(t,e,n),n=du;var d=fc(e.containerInfo),f=n.focusedElem,g=n.selectionRange;if(d!==f&&f&&f.ownerDocument&&mc(f.ownerDocument.documentElement,f)){if(g!==null&&Sl(f)){var E=g.start,_=g.end;if(_===void 0&&(_=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(_,f.value.length);else{var C=f.ownerDocument||document,I=C&&C.defaultView||window;if(I.getSelection){var B=I.getSelection(),D=f.textContent.length,z=Math.min(g.start,D),oe=g.end===void 0?z:Math.min(g.end,D);!B.extend&&z>oe&&(d=oe,oe=z,z=d);var S=cc(f,z),x=cc(f,oe);if(S&&x&&(B.rangeCount!==1||B.anchorNode!==S.node||B.anchorOffset!==S.offset||B.focusNode!==x.node||B.focusOffset!==x.offset)){var R=C.createRange();R.setStart(S.node,S.offset),B.removeAllRanges(),z>oe?(B.addRange(R),B.extend(x.node,x.offset)):(R.setEnd(x.node,x.offset),B.addRange(R))}}}}for(C=[],B=f;B=B.parentNode;)B.nodeType===1&&C.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<C.length;f++){var j=C[f];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Vo=!!uu,du=uu=null}finally{ye=i,ee.p=o,Y.T=a}}e.current=t,De=2}}function Zh(){if(De===2){De=0;var e=an,t=Fa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Y.T,Y.T=null;var a=ee.p;ee.p=2;var o=ye;ye|=4;try{cf(e,t.alternate,t)}finally{ye=o,ee.p=a,Y.T=n}}De=3}}function Qh(){if(De===4||De===3){De=0;var e=Co;Co=null,cy();var t=an,n=Fa,a=An,o=Tf,i=(a&335544064)===a?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?De=5:(De=0,Fa=an=null,Hf(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(pa=null),rl(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(oi,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=Y.T,i=ee.p,ee.p=2,Y.T=null;try{for(var d=t.onRecoverableError,f=0;f<o.length;f++){var g=o[f];d(g.value,{componentStack:g.stack})}}finally{Y.T=n,ee.p=i}}if(o=Wo,d=Oo,Oo=null,o!==null&&(Wo=null,d===null&&(d=[]),e!==null))for(g=0;g<o.length;g++)n=(0,o[g])(d),n!==void 0&&e.finished.finally(n);(An&3)!==0&&xr(),In(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===wr?Hi++:(Hi=0,wr=t):(Hi=0,wr=null),Ui(0)}}function Hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vi(t)))}function xr(){return Co!==null&&(Co.skipTransition(),Co=null),Xh(),Zh(),Qh(),$h()}function $h(){if(De!==5)return!1;var e=an,t=Vh;Vh=0;var n=rl(An),a=Y.T,o=ee.p;try{ee.p=32>n?32:n,Y.T=null,n=Jh,Jh=null;var i=an,d=An;if(De=0,Fa=an=null,An=0,(ye&6)!==0)throw Error(h(331));var f=ye;if(ye|=4,If(i.current),kf(i,i.current,d,n),ye=f,Ui(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(oi,i)}catch{}return!0}finally{ee.p=o,Y.T=a,Hf(e,t)}}function Uf(e,t,n){t=Ht(n,t),t=gh(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(si(e,2),In(e))}function Ae(e,t,n){if(e.tag===3)Uf(e,e,n);else for(;t!==null;){if(t.tag===3){Uf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pa===null||!pa.has(a))){e=Ht(n,e),n=Om(2),a=ra(t,n,2),a!==null&&(Lm(n,a,t,e),si(a,2),In(a));break}}t=t.return}}function eu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Gw;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Gh=!0,o.add(n),e=Qw.bind(null,e,t,n),t.then(e,e))}function Qw(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(he&n)===n&&((He===4||He===3&&(he&62914560)===he&&300>St()-pr)&&(ye&2)===0?Do(e,0):fr|=n,jo===he&&(jo=0)),In(e)}function qf(e,t){t===0&&(t=Sd()),e=Ca(e,t),e!==null&&(si(e,t),In(e))}function $w(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function eb(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),qf(e,n)}function tb(e,t){return al(e,t)}var Ho=null,Uo=null,tu=!1,Ar=!1,nu=!1,ya=0;function In(e){e!==Uo&&e.next===null&&(Uo===null?Ho=Uo=e:Uo=Uo.next=e),Ar=!0,tu||(tu=!0,ab())}function Ui(e,t){if(!nu&&Ar){nu=!0;do for(var n=!1,a=Ho;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var i=0;else{var d=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-Tt(42|e)+1)-1,i&=o&~(d&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Pf(a,i))}else i=he,i=fs(a,a===Re?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||ii(a,i)||(n=!0,Pf(a,i));a=a.next}while(n);nu=!1}}function nb(){zf()}function zf(){Ar=tu=!1;var e=0;ya!==0&&fb()&&(e=ya);for(var t=St(),n=null,a=Ho;a!==null;){var o=a.next,i=Yf(a,t);i===0?(a.next=null,n===null?Ho=o:n.next=o,o===null&&(Uo=n)):(n=a,(e!==0||(i&3)!==0)&&(Ar=!0)),a=o}De!==0&&De!==5||Ui(e),ya!==0&&(ya=0)}function Yf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-Tt(i),f=1<<d,g=o[d];g===-1?((f&n)===0||(f&a)!==0)&&(o[d]=vy(f,t)):g<=t&&(e.expiredLanes|=f),i&=~f}if(t=Re,n=he,n=fs(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ol(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ii(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ol(a),rl(n)){case 2:case 8:n=xd;break;case 32:n=us;break;case 268435456:n=Ad;break;default:n=us}return a=Gf.bind(null,e),n=al(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ol(a),e.callbackPriority=2,e.callbackNode=null,2}function Gf(e,t){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var a=he;return a=fs(e,e===Re?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Rf(e,a,t),Yf(e,St()),e.callbackNode!=null&&e.callbackNode===n?Gf.bind(null,e):null)}function Pf(e,t){if(xr())return null;Rf(e,t,!0)}function ab(){gb(function(){(ye&6)!==0?al(kd,nb):zf()})}function au(){if(ya===0){var e=Ha;e===0&&(e=ds,ds<<=1,(ds&261888)===0&&(ds=256)),ya=e}return ya}function Vf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(e)}function ob(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var i=Vf((o[wt]||null).action),d=a.submitter;d&&(t=(t=d[wt]||null)?Vf(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var f=new As("action","action",null,a,o);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ya!==0){var g=new FormData(o,d);dh(n,{pending:!0,data:g,method:o.method,action:i},null,g)}}else typeof i=="function"&&(f.preventDefault(),g=new FormData(o,d),dh(n,{pending:!0,data:g,method:o.method,action:i},i,g))},currentTarget:o}]})}}for(var ou=0;ou<Rl.length;ou++){var iu=Rl[ou],ib=iu.toLowerCase(),sb=iu[0].toUpperCase()+iu.slice(1);$t(ib,"on"+sb)}$t(yc,"onAnimationEnd"),$t(wc,"onAnimationIteration"),$t(bc,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(pw,"onTransitionRun"),$t(gw,"onTransitionStart"),$t(yw,"onTransitionCancel"),$t(vc,"onTransitionEnd"),ro("onMouseEnter",["mouseout","mouseover"]),ro("onMouseLeave",["mouseout","mouseover"]),ro("onPointerEnter",["pointerout","pointerover"]),ro("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi));function Jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var d=a.length-1;0<=d;d--){var f=a[d],g=f.instance,E=f.currentTarget;if(f=f.listener,g!==i&&o.isPropagationStopped())break e;i=f,o.currentTarget=E;try{i(o)}catch(_){Es(_)}o.currentTarget=null,i=g}else for(d=0;d<a.length;d++){if(f=a[d],g=f.instance,E=f.currentTarget,f=f.listener,g!==i&&o.isPropagationStopped())break e;i=f,o.currentTarget=E;try{i(o)}catch(_){Es(_)}o.currentTarget=null,i=g}}}}function le(e,t){var n=t[_d];n===void 0&&(n=t[_d]=new Set);var a=e+"__bubble";n.has(a)||(Kf(t,e,2,!1),n.add(a))}function su(e,t,n){var a=0;t&&(a|=4),Kf(n,e,a,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function ru(e){if(!e[Ir]){e[Ir]=!0,Wd.forEach(function(n){n!=="selectionchange"&&(rb.has(n)||su(n,!1,e),su(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,su("selectionchange",!1,t))}}function Kf(e,t,n,a){switch(Dp(t)){case 2:var o=$b;break;case 8:o=ev;break;default:o=Tu}n=o.bind(null,t,n,e),o=void 0,!pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function lu(e,t,n,a,o){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var f=a.stateNode.containerInfo;if(f===o)break;if(d===4)for(d=a.return;d!==null;){var g=d.tag;if((g===3||g===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;f!==null;){if(d=Ra(f),d===null)return;if(g=d.tag,g===5||g===6||g===26||g===27){a=i=d;continue e}f=f.parentNode}}a=a.return}Jd(function(){var E=i,_=ml(n),C=[];e:{var I=kc.get(e);if(I!==void 0){var B=As,D=e;switch(e){case"keypress":if(ks(n)===0)break e;case"keydown":case"keyup":B=Py;break;case"focusin":D="focus",B=bl;break;case"focusout":D="blur",B=bl;break;case"beforeblur":case"afterblur":B=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Xy;break;case yc:case wc:case bc:B=Ly;break;case vc:B=Qy;break;case"scroll":case"scrollend":B=_y;break;case"wheel":B=ew;break;case"copy":case"cut":case"paste":B=My;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Qd;break;case"submit":B=Ky;break;case"toggle":case"beforetoggle":B=nw}var z=(t&4)!==0,oe=!z&&(e==="scroll"||e==="scrollend"),S=z?I!==null?I+"Capture":null:I;z=[];for(var x=E,R;x!==null;){var j=x;if(R=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||R===null||S===null||(j=hi(x,S),j!=null&&z.push(zi(x,j,R))),oe)break;x=x.return}0<z.length&&(I=new B(I,D,null,n,_),C.push({event:I,listeners:z}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",B&&n!==cl&&(D=n.relatedTarget||n.fromElement)&&(Ra(D)||D[oo]))break e;(I||B)&&(D=_.window===_?_:(B=_.ownerDocument)?B.defaultView||B.parentWindow:window,I?(B=n.relatedTarget||n.toElement,I=E,B=B?Ra(B):null,B!==null&&(oe=m(B),z=B.tag,B!==oe||z!==5&&z!==27&&z!==6)&&(B=null)):(I=null,B=E),I!==B&&(z=Xd,j="onMouseLeave",S="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(z=Qd,j="onPointerLeave",S="onPointerEnter",x="pointer"),oe=I==null?D:li(I),R=B==null?D:li(B),D=new z(j,x+"leave",I,n,_),D.target=oe,D.relatedTarget=R,j=null,Ra(_)===E&&(z=new z(S,x+"enter",B,n,_),z.target=R,z.relatedTarget=oe,j=z),oe=j,z=I&&B?We(I,B,lb):null,I!==null&&Ff(C,D,I,z,!1),B!==null&&oe!==null&&Ff(C,oe,B,z,!0)))}e:{if(I=E?li(E):window,B=I.nodeName&&I.nodeName.toLowerCase(),B==="select"||B==="input"&&I.type==="file")var U=sc;else if(oc(I))if(rc)U=cw;else{U=uw;var ue=hw}else B=I.nodeName,!B||B.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?E&&dl(E.elementType)&&(U=sc):U=dw;if(U&&(U=U(e,E))){ic(C,U,n,_);break e}ue&&ue(e,I,E)}switch(ue=E?li(E):window,e){case"focusin":(oc(ue)||ue.contentEditable==="true")&&(fo=ue,El=E,yi=null);break;case"focusout":yi=El=fo=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,pc(C,n,_);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":pc(C,n,_)}var P;if(kl)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else mo?nc(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&($d&&n.locale!=="ko"&&(mo||X!=="onCompositionStart"?X==="onCompositionEnd"&&mo&&(P=Kd()):(Qn=_,gl="value"in Qn?Qn.value:Qn.textContent,mo=!0)),ue=Sr(E,X),0<ue.length&&(X=new Zd(X,e,null,n,_),C.push({event:X,listeners:ue}),P?X.data=P:(P=ac(n),P!==null&&(X.data=P)))),(P=ow?iw(e,n):sw(e,n))&&(X=Sr(E,"onBeforeInput"),0<X.length&&(ue=new Zd("onBeforeInput","beforeinput",null,n,_),C.push({event:ue,listeners:X}),ue.data=P)),ob(C,e,E,n,_)}Jf(C,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sr(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,i=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||i===null||(o=hi(e,n),o!=null&&a.unshift(zi(e,o,i)),o=hi(e,t),o!=null&&a.push(zi(e,o,i))),e.tag===3)return a;e=e.return}return[]}function lb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ff(e,t,n,a,o){for(var i=t._reactName,d=[];n!==null&&n!==a;){var f=n,g=f.alternate,E=f.stateNode;if(f=f.tag,g!==null&&g===a)break;f!==5&&f!==26&&f!==27||E===null||(g=E,o?(E=hi(n,i),E!=null&&d.unshift(zi(n,E,g))):o||(E=hi(n,i),E!=null&&d.push(zi(n,E,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var hb=/\r\n?/g,ub=/\u0000|\uFFFD/g;function Xf(e){return(typeof e=="string"?e:""+e).replace(hb,`
`).replace(ub,"")}function Zf(e,t){return t=Xf(t),Xf(e)===t}function Ie(e,t,n,a,o,i){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||ho(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&ho(e,""+a);else return;break;case"className":ws(e,"class",a);break;case"tabIndex":ws(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ws(e,n,a);break;case"style":Pd(e,a,i);return;case"data":if(t!=="object"){ws(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=bs(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ie(e,t,"name",o.name,o,null),Ie(e,t,"formEncType",o.formEncType,o,null),Ie(e,t,"formMethod",o.formMethod,o,null),Ie(e,t,"formTarget",o.formTarget,o,null)):(Ie(e,t,"encType",o.encType,o,null),Ie(e,t,"method",o.method,o,null),Ie(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=bs(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=fn);return;case"onScroll":a!=null&&le("scroll",e);return;case"onScrollEnd":a!=null&&le("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(h(60));i?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=bs(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":le("beforetoggle",e),le("toggle",e),ys(e,"popover",a);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ys(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Ry.get(n)||n,ys(e,n,a);else return}fe=!0}function hu(e,t,n,a,o,i){switch(n){case"style":Pd(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(h(60));i?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")ho(e,a);else if(typeof a=="number"||typeof a=="bigint")ho(e,""+a);else return;break;case"onScroll":a!=null&&le("scroll",e);return;case"onScrollEnd":a!=null&&le("scrollend",e);return;case"onClick":a!=null&&(e.onclick=fn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Od.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),i=n.slice(2,o?n.length-7:void 0),t=e[wt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,o),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,a,o);break e}fe=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):ys(e,n,a)}return}fe=!0}function at(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,o=!1,i;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Ie(e,t,i,d,n,null)}}o&&Ie(e,t,"srcSet",n.srcSet,n,null),a&&Ie(e,t,"src",n.src,n,null);return;case"input":le("invalid",e);var f=i=d=o=null,g=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var _=n[a];if(_!=null)switch(a){case"name":o=_;break;case"type":d=_;break;case"checked":g=_;break;case"defaultChecked":E=_;break;case"value":i=_;break;case"defaultValue":f=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(h(137,t));break;default:Ie(e,t,a,_,n,null)}}qd(e,i,f,g,E,d,o,!1);return;case"select":le("invalid",e),a=d=i=null;for(o in n)if(n.hasOwnProperty(o)&&(f=n[o],f!=null))switch(o){case"value":i=f;break;case"defaultValue":d=f;break;case"multiple":a=f;default:Ie(e,t,o,f,n,null)}t=i,n=d,e.multiple=!!a,t!=null?lo(e,!!a,t,!1):n!=null&&lo(e,!!a,n,!0);return;case"textarea":le("invalid",e),i=o=a=null;for(d in n)if(n.hasOwnProperty(d)&&(f=n[d],f!=null))switch(d){case"value":a=f;break;case"defaultValue":o=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(h(91));break;default:Ie(e,t,d,f,n,null)}Yd(e,a,o,i);return;case"option":for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null)&&(g==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ie(e,t,g,a,n,null));return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<qi.length;a++)le(qi[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Ie(e,t,E,a,n,null)}return;default:if(dl(t)){for(_ in n)n.hasOwnProperty(_)&&(a=n[_],a!==void 0&&hu(e,t,_,a,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!=null&&Ie(e,t,f,a,n,null))}var db={};function cb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,d=null,f=null,g=null,E=null,_=null;for(B in n){var C=n[B];if(n.hasOwnProperty(B)&&C!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":g=C;default:a.hasOwnProperty(B)||Ie(e,t,B,null,a,C)}}for(var I in a){var B=a[I];if(C=n[I],a.hasOwnProperty(I)&&(B!=null||C!=null))switch(I){case"type":B!==C&&(fe=!0),i=B;break;case"name":B!==C&&(fe=!0),o=B;break;case"checked":B!==C&&(fe=!0),E=B;break;case"defaultChecked":B!==C&&(fe=!0),_=B;break;case"value":B!==C&&(fe=!0),d=B;break;case"defaultValue":B!==C&&(fe=!0),f=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(h(137,t));break;default:B!==C&&Ie(e,t,I,B,a,C)}}hl(e,d,f,g,E,_,i,o);return;case"select":B=d=f=I=null;for(i in n)if(g=n[i],n.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":B=g;default:a.hasOwnProperty(i)||Ie(e,t,i,null,a,g)}for(o in a)if(i=a[o],g=n[o],a.hasOwnProperty(o)&&(i!=null||g!=null))switch(o){case"value":i!==g&&(fe=!0),I=i;break;case"defaultValue":i!==g&&(fe=!0),f=i;break;case"multiple":i!==g&&(fe=!0),d=i;default:i!==g&&Ie(e,t,o,i,a,g)}t=f,n=d,a=B,I!=null?lo(e,!!n,I,!1):!!a!=!!n&&(t!=null?lo(e,!!n,t,!0):lo(e,!!n,n?[]:"",!1));return;case"textarea":B=I=null;for(f in n)if(o=n[f],n.hasOwnProperty(f)&&o!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ie(e,t,f,null,a,o)}for(d in a)if(o=a[d],i=n[d],a.hasOwnProperty(d)&&(o!=null||i!=null))switch(d){case"value":o!==i&&(fe=!0),I=o;break;case"defaultValue":o!==i&&(fe=!0),B=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(h(91));break;default:o!==i&&Ie(e,t,d,o,a,i)}zd(e,I,B);return;case"option":for(var D in n)I=n[D],n.hasOwnProperty(D)&&I!=null&&!a.hasOwnProperty(D)&&(D==="selected"?e.selected=!1:Ie(e,t,D,null,a,I));for(g in a)I=a[g],B=n[g],a.hasOwnProperty(g)&&I!==B&&(I!=null||B!=null)&&(g==="selected"?(I!==B&&(fe=!0),e.selected=I&&typeof I!="function"&&typeof I!="symbol"):Ie(e,t,g,I,a,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in n)I=n[z],n.hasOwnProperty(z)&&I!=null&&!a.hasOwnProperty(z)&&Ie(e,t,z,null,a,I);for(E in a)if(I=a[E],B=n[E],a.hasOwnProperty(E)&&I!==B&&(I!=null||B!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(h(137,t));break;default:Ie(e,t,E,I,a,B)}return;default:if(dl(t)){for(var oe in n)I=n[oe],n.hasOwnProperty(oe)&&I!==void 0&&!a.hasOwnProperty(oe)&&hu(e,t,oe,void 0,a,I);for(_ in a)I=a[_],B=n[_],!a.hasOwnProperty(_)||I===B||I===void 0&&B===void 0||hu(e,t,_,I,a,B);return}}for(var S in n)I=n[S],n.hasOwnProperty(S)&&I!=null&&!a.hasOwnProperty(S)&&Ie(e,t,S,null,a,I);for(C in a)I=a[C],B=n[C],!a.hasOwnProperty(C)||I===B||I==null&&B==null||Ie(e,t,C,I,a,B)}function Qf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],i=o.transferSize,d=o.initiatorType,f=o.duration;if(i&&f&&Qf(d)){for(d=0,f=o.responseEnd,a+=1;a<n.length;a++){var g=n[a],E=g.startTime;if(E>f)break;var _=g.transferSize,C=g.initiatorType;_&&Qf(C)&&(g=g.responseEnd,d+=_*(g<f?1:(f-E)/(g-E)))}if(--a,t+=8*(i+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uu=null,du=null;function Yi(e){return e.nodeType===9?e:e.ownerDocument}function $f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ep(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tp(e,t,n,a){return n=Yi(n).createElement(e),n[Qe]=a,n[wt]=t,at(n,e,t),Je(n),n}function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=null;function fb(){var e=window.event;return e&&e.type==="popstate"?e===mu?!1:(mu=e,!0):(mu=null,!1)}var fu=typeof setTimeout=="function"?setTimeout:void 0,pb=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,ap=typeof requestAnimationFrame=="function"?requestAnimationFrame:fu,gb=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(e){return np.resolve(null).then(e).catch(yb)}:fu;function yb(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function op(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),Jo(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")xu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,xu(n);for(var i=n.firstChild;i;){var d=i.nextSibling,f=i.nodeName;i[ri]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=d}}else n==="body"&&xu(e.ownerDocument.body);n=o}while(n);Jo(t)}function ip(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function sp(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var o=a=0;o<t.length;o++){var i=t[o];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function rp(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function wb(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function pu(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return wb(t,n,e)}function bb(e){return e.documentElement.clientHeight}function vb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function kb(e,t,n,a,o,i,d,f,g){var E=t.nodeType===9?t:t.ownerDocument;try{var _=E.startViewTransition({update:function(){var I=E.defaultView,B=I.navigation&&I.navigation.transition,D=E.fonts.status;a();var z=[];if(D==="loaded"&&(bb(E),E.fonts.status==="loading"&&z.push(E.fonts.ready)),D=z.length,e!==null)for(var oe=e.suspenseyImages,S=0,x=0;x<oe.length;x++){var R=oe[x];if(!R.complete){var j=R.getBoundingClientRect();if(0<j.bottom&&0<j.right&&j.top<I.innerHeight&&j.left<I.innerWidth){if(S+=Np(R),S>Nr){z.length=D;break}R=new Promise(vb.bind(R)),z.push(R)}}}if(0<z.length)return I=Promise.race([Promise.all(z),new Promise(function(U){return setTimeout(U,500)})]).then(o,o),(B?Promise.allSettled([B.finished,I]):I).then(i,i);if(o(),B)return B.finished.then(i,i);i()},types:n});E.__reactViewTransition=_;var C=[];return _.ready.then(function(){for(var I=E.documentElement.getAnimations({subtree:!0}),B=0;B<I.length;B++){var D=I[B],z=D.effect,oe=z.pseudoElement;if(oe!=null&&oe.startsWith("::view-transition")){C.push(D),D=z.getKeyframes();for(var S=oe=void 0,x=!0,R=0;R<D.length;R++){var j=D[R],U=j.width;if(oe===void 0)oe=U;else if(oe!==U){x=!1;break}if(U=j.height,S===void 0)S=U;else if(S!==U){x=!1;break}delete j.width,delete j.height,j.transform==="none"&&delete j.transform}x&&oe!==void 0&&S!==void 0&&(z.setKeyframes(D),x=getComputedStyle(z.target,z.pseudoElement),x.width!==oe||x.height!==S)&&(x=D[0],x.width=oe,x.height=S,x=D[D.length-1],x.width=oe,x.height=S,z.setKeyframes(D))}}d()},function(I){E.__reactViewTransition===_&&(E.__reactViewTransition=null);try{typeof I=="object"&&I!==null&&I.name==="InvalidStateError"&&(I.message==="View transition was skipped because document visibility state is hidden."||I.message==="Skipping view transition because document visibility state has become hidden."||I.message==="Skipping view transition because viewport size changed."||I.message==="Transition was aborted because of invalid state")&&(I=null),I!==null&&g(I)}finally{a(),o(),d()}}),_.finished.finally(function(){for(var I=0;I<C.length;I++)C[I].cancel();E.__reactViewTransition===_&&(E.__reactViewTransition=null),f()}),_}catch{return a(),o(),d(),null}}function Xa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Xa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Z({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Xa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],o=0;o<n.length;o++){var i=n[o].effect;i!==null&&i.target===e&&i.pseudoElement===t&&a.push(n[o])}return a},Xa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function lp(e){return{name:e,group:new Xa("group",e),imagePair:new Xa("image-pair",e),old:new Xa("old",e),new:new Xa("new",e)}}function Ot(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ot.prototype.addEventListener=function(e,t,n){var a=null,o=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(up(i,e,t,n)===-1){var d=this,f=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(f=function(g){d.removeEventListener(e,t,n),typeof t=="function"?t.call(this,g):t.handleEvent(g)}),a!==null&&(o=d.removeEventListener.bind(d,e,t,n),a.addEventListener("abort",o,{once:!0}),o=a.removeEventListener.bind(a,"abort",o)),a=qo(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:f,cleanup:o}),y(this._fragmentFiber.child,!1,xb,e,f,a)}this._eventListeners=i}};function xb(e,t,n,a){return W(e).addEventListener(t,n,a),!1}Ot.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=up(a,e,t,n),t!==-1)){var o=a[t];n=o.attachedListener;var i=o.cleanup;o=qo(o.optionsOrUseCapture),y(this._fragmentFiber.child,!1,Ab,e,n,o),a.splice(t,1),i!==null&&i()}};function Ab(e,t,n,a){return W(e).removeEventListener(t,n,a),!1}function qo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function hp(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function up(e,t,n,a){if(e.length===0)return-1;a=hp(a);for(var o=0;o<e.length;o++){var i=e[o];if(i.type===t&&i.listener===n&&hp(i.optionsOrUseCapture)===a)return o}return-1}Ot.prototype.dispatchEvent=function(e){var t=N(this._fragmentFiber);if(t===null)return!0;t=W(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var o=0;o<n.length;o++){var i=n[o];a.addEventListener(i.type,i.attachedListener,qo(i.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(o=0;o<n.length;o++)i=n[o],a.removeEventListener(i.type,i.attachedListener,qo(i.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)},Ot.prototype.focus=function(e){y(this._fragmentFiber.child,!0,dp,e,void 0,void 0)};function dp(e,t){return e.tag===6?!1:(e=W(e),Ob(e,t))}Ot.prototype.focusLast=function(e){var t=[];y(this._fragmentFiber.child,!0,gu,t,void 0,void 0);for(var n=t.length-1;0<=n&&!dp(t[n],e);n--);};function gu(e,t){return t.push(e),!1}Ot.prototype.blur=function(){var e=N(this._fragmentFiber);e!==null&&(e=W(e),e=Yi(e).activeElement,e!==null&&y(this._fragmentFiber.child,!1,Ib,e,void 0,void 0))};function Ib(e,t){return e.tag===6?!1:(e=W(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ot.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),y(this._fragmentFiber.child,!1,Sb,e,void 0,void 0)};function Sb(e,t){return e.tag===6||(e=W(e),t.observe(e)),!1}Ot.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),y(this._fragmentFiber.child,!1,Eb,e,void 0,void 0);for(var n=t=0;n<on.length;n++){var a=on[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):on[t++]=a}on.length=t}};function Eb(e,t){return e.tag===6||(e=W(e),t.unobserve(e)),!1}var on=[],yu=!1;function Tb(e,t,n){on.push({fragmentInstance:e,observer:t,instance:n}),yu||(yu=!0,Lb(function(){yu=!1;var a=on;on=[];for(var o=0;o<a.length;o++){var i=a[o];i.observer.unobserve(i.instance)}}))}Ot.prototype.getClientRects=function(){var e=[];return y(this._fragmentFiber.child,!1,Nb,e,void 0,void 0),e};function Nb(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=W(e),t.push.apply(t,e.getClientRects());return!1}Ot.prototype.getRootNode=function(e){var t=N(this._fragmentFiber);return t===null?this:W(t).getRootNode(e)},Ot.prototype.compareDocumentPosition=function(e){var t=N(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];y(this._fragmentFiber.child,!1,gu,n,void 0,void 0);var a=W(t);if(n.length===0){if(n=a,L(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var o=a=n.compareDocumentPosition(e);return n===e?o=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=q(t)[1],n===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=W(n).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=W(n[0]),o=W(n[n.length-1]);var i=L(this._fragmentFiber)?t.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var d=t.compareDocumentPosition(e),f=o.compareDocumentPosition(e),g=d&Node.DOCUMENT_POSITION_CONTAINED_BY||f&Node.DOCUMENT_POSITION_CONTAINED_BY;return f=a&&i&&d&Node.DOCUMENT_POSITION_FOLLOWING&&f&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||i&&o===e||g||f?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!i&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:d,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Rb(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Rb(e,t,n,a,o){var i=Ra(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=o.ownerDocument,o===i||o===i.documentElement||o===i.body;e:{for(i=t,t=N(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=We(n,i,be),t===null?t=!1:(y(t,!0,ne,i,n),i=K,K=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===a)&&(t=We(a,i,be),t===null?t=!1:(y(t,!0,Se,i,a),i=K,F=K=null,t=i!==null)),t):!1}function cp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ot.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(h(566));var t=[];y(this._fragmentFiber.child,!1,gu,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=q(this._fragmentFiber);if(a=n?a[1]||a[0]||N(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=W(a),cp(e,n);return}if(a=W(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var o=t[a];o.tag===6?(o=W(o),cp(o,n)):W(o).scrollIntoView(e),a+=n?-1:1}};function Bb(e,t){return e=W(e),mp(e,t),!1}function mp(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function fp(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];e.addEventListener(o.type,o.attachedListener,qo(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var d=0,f=0;f<on.length;f++){var g=on[f];(g.fragmentInstance!==t||g.observer!==i||g.instance!==e)&&(on[d++]=g)}on.length=d,i.observe(e)}),mp(e,t))}function _b(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];e.removeEventListener(o.type,o.attachedListener,qo(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?Tb(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function wu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wu(n),gs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function jb(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ri])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function Cb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function pp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function bu(e){return e.data==="$?"||e.data==="$~"}function vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ku=null;function gp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Gt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function yp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ob(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function Lb(e){ap(function(){ap(function(t){return e(t)})})}function wp(e,t,n){switch(t=Yi(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function bp(e,t,n){for(var a in n){var o=n[a];n.hasOwnProperty(a)&&o!=null&&Ie(e,t,a,null,db,o)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===fn&&(e.onclick=null),gs(e)}function xu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gs(e)}var Pt=new Map,vp=new Set;function Gi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Yn=ee.d;ee.d={f:Db,r:Mb,D:Hb,C:Ub,L:qb,m:zb,X:Gb,S:Yb,M:Pb};function Db(){var e=Yn.f(),t=br();return e||t}function Mb(e){var t=io(e);t!==null&&t.tag===5&&t.type==="form"?km(t):Yn.r(e)}var zo=typeof document>"u"?null:document;function kp(e,t,n){var a=zo;if(a&&typeof t=="string"&&t){var o=Dt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),vp.has(o)||(vp.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),at(t,"link",e),Je(t),a.head.appendChild(t)))}}function Hb(e){Yn.D(e),kp("dns-prefetch",e,null)}function Ub(e,t){Yn.C(e,t),kp("preconnect",e,t)}function qb(e,t,n){Yn.L(e,t,n);var a=zo;if(a&&e&&t){var o='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Dt(n.imageSizes)+'"]')):o+='[href="'+Dt(e)+'"]';var i=o;switch(t){case"style":i=Yo(e);break;case"script":i=Go(e)}if(!(Pt.has(i)||(e=Z({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(i,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(Pi(i))||t==="script"&&a.querySelector(Vi(i))))){var d=a.createElement("link");at(d,"link",e),t==="style"&&(d[ps]=!0,d.onload=d.onerror=function(){Cd(d)}),Je(d),a.head.appendChild(d)}}}function zb(e,t){Yn.m(e,t);var n=zo;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Dt(a)+'"][href="'+Dt(e)+'"]',i=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Go(e)}if(!Pt.has(i)&&(e=Z({rel:"modulepreload",href:e},t),Pt.set(i,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Vi(i)))return}a=n.createElement("link"),at(a,"link",e),Je(a),n.head.appendChild(a)}}}function Yb(e,t,n){Yn.S(e,t,n);var a=zo;if(a&&e){var o=so(a).hoistableStyles,i=Yo(e);t=t||"default";var d=o.get(i);if(!d){var f={loading:0,preload:null};if(d=a.querySelector(Pi(i)))f.loading=5;else{e=Z({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(i))&&Au(e,n);var g=d=a.createElement("link");Je(g),at(g,"link",e),g._p=new Promise(function(E,_){g.onload=E,g.onerror=_}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Er(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:f},o.set(i,d)}}}function Gb(e,t){Yn.X(e,t);var n=zo;if(n&&e){var a=so(n).hoistableScripts,o=Go(e),i=a.get(o);i||(i=n.querySelector(Vi(o)),i||(e=Z({src:e,async:!0},t),(t=Pt.get(o))&&Iu(e,t),i=n.createElement("script"),Je(i),at(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(o,i))}}function Pb(e,t){Yn.M(e,t);var n=zo;if(n&&e){var a=so(n).hoistableScripts,o=Go(e),i=a.get(o);i||(i=n.querySelector(Vi(o)),i||(e=Z({src:e,async:!0,type:"module"},t),(t=Pt.get(o))&&Iu(e,t),i=n.createElement("script"),Je(i),at(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(o,i))}}function xp(e,t,n,a){var o=(o=Fn.current)?Gi(o):null;if(!o)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Yo(n.href),t=so(o).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Yo(n.href);var i=so(o).hoistableStyles,d=i.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=o.querySelector(Pi(e)))?i._p||(d.instance=i,d.state.loading=5):(i=Pt.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,i)),Vb(o,e,i,d.state))),t&&a===null)throw Error(h(528,""));return d}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Go(n),t=so(o).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Yo(e){return'href="'+Dt(e)+'"'}function Pi(e){return'link[rel="stylesheet"]['+e+"]"}function Ap(e){return Z({},e,{"data-precedence":e.precedence,precedence:null})}function Vb(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[ps]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[ps]=!0,t.onload=t.onerror=Cd.bind(null,t),at(t,"link",n),Je(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function Go(e){return'[src="'+Dt(e)+'"]'}function Vi(e){return"script[async]"+e}function Ip(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Dt(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var o=Z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),at(a,"style",o),Er(a,n.precedence,e),t.instance=a;case"stylesheet":o=Yo(n.href);var i=e.querySelector(Pi(o));if(i)return t.state.loading|=4,t.instance=i,Je(i),i;a=Ap(n),(o=Pt.get(o))&&Au(a,o),i=(e.ownerDocument||e).createElement("link"),Je(i);var d=i;return d._p=new Promise(function(f,g){d.onload=f,d.onerror=g}),at(i,"link",a),t.state.loading|=4,Er(i,n.precedence,e),t.instance=i;case"script":return i=Go(n.src),(o=e.querySelector(Vi(i)))?(t.instance=o,Je(o),o):(a=n,(o=Pt.get(i))&&(a=Z({},n),Iu(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),Je(o),at(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Er(a,n.precedence,e));return t.instance}function Er(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,i=o,d=0;d<a.length;d++){var f=a[d];if(f.dataset.precedence===t)i=f;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Tr=null;function Sp(e,t,n){if(Tr===null){var a=new Map,o=Tr=new Map;o.set(n,a)}else o=Tr,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var i=n[o];if(!(i[ri]||i[Qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var f=a.get(d);f?f.push(i):a.set(d,[i])}}return a}function Su(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Jb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ep(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Tp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Np(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Rp(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Np(t),e.suspenseyImages.push(t)),e=Xb.bind(e),t.decode().then(e,e))}function Kb(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Yo(a.href),i=t.querySelector(Pi(o));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ji.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Je(i);return}i=t.ownerDocument||t,a=Ap(a),(o=Pt.get(o))&&Au(a,o),i=i.createElement("link"),Je(i);var d=i;d._p=new Promise(function(f,g){d.onload=f,d.onerror=g}),at(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ji.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Nr=0;function Fb(e,t){return e.stylesheets&&e.count===0&&Br(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Br(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Nr===0&&(Nr=62500*mb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Br(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Nr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Bp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Br(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ji(){this.count--,Bp(this)}function Xb(){this.imgCount--,Bp(this)}var Rr=null;function Br(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rr=new Map,t.forEach(Zb,e),Rr=null,Ji.call(e))}function Zb(e,t){if(!(t.state.loading&4)){var n=Rr.get(e);if(n)var a=n.get(null);else{n=new Map,Rr.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var d=o[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}o=t.instance,d=o.getAttribute("data-precedence"),i=n.get(d)||a,i===a&&n.set(null,o),n.set(d,o),this.count++,a=Ji.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),i?i.parentNode.insertBefore(o,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Po={$$typeof:Te,Provider:null,Consumer:null,_currentValue:Nn,_currentValue2:Nn,_threadCount:0};function Qb(e,t,n,a,o,i,d,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=il(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.hiddenUpdates=il(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.transitionTypes=null,this.incompleteTransitions=new Map}function _p(e,t,n,a,o,i,d,f,g,E,_,C){return e=new Qb(e,t,n,d,g,E,_,C,f),t=1,i===!0&&(t|=24),i=bt(3,null,null,t),e.current=i,i.stateNode=e,t=Ul(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Gl(i),e}function jp(e){return e?(e=yo,e):yo}function Cp(e,t,n,a,o,i){o=jp(o),a.context===null?a.context=o:a.pendingContext=o,a=sa(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=ra(e,a,t),n!==null&&(At(n,e,t),Ii(n,e,t))}function Wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){Wp(e,t),(e=e.alternate)&&Wp(e,t)}function Op(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&At(t,e,67108864),Eu(e,67108864)}}function Lp(e){if(e.tag===13||e.tag===31){var t=Wt();t=sl(t);var n=Ca(e,t);n!==null&&At(n,e,t),Eu(e,t)}}var Vo=!0;function $b(e,t,n,a){var o=Y.T;Y.T=null;var i=ee.p;try{ee.p=2,Tu(e,t,n,a)}finally{ee.p=i,Y.T=o}}function ev(e,t,n,a){var o=Y.T;Y.T=null;var i=ee.p;try{ee.p=8,Tu(e,t,n,a)}finally{ee.p=i,Y.T=o}}function Tu(e,t,n,a){if(Vo){var o=Nu(a);if(o===null)lu(e,t,a,_r,n),Mp(e,a);else if(nv(o,e,t,n,a))a.stopPropagation();else if(Mp(e,a),t&4&&-1<tv.indexOf(e)){for(;o!==null;){var i=io(o);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Na(i.pendingLanes);if(d!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;d;){var g=1<<31-Tt(d);f.entanglements[1]|=g,d&=~g}In(i),(ye&6)===0&&(gr=St()+500,Ui(0))}}break;case 31:case 13:f=Ca(i,2),f!==null&&At(f,i,2),br(),Eu(i,2)}if(i=Nu(a),i===null&&lu(e,t,a,_r,n),i===o)break;o=i}o!==null&&a.stopPropagation()}else lu(e,t,a,null,n)}}function Nu(e){return e=ml(e),Ru(e)}var _r=null;function Ru(e){if(_r=null,e=Ra(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _r=e,null}function Dp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(my()){case kd:return 2;case xd:return 8;case us:case fy:return 32;case Ad:return 268435456;default:return 32}default:return 32}}var Bu=!1,ba=null,va=null,ka=null,Ki=new Map,Fi=new Map,xa=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mp(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function Xi(e,t,n,a,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[o]},t!==null&&(t=io(t),t!==null&&Op(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nv(e,t,n,a,o){switch(t){case"focusin":return ba=Xi(ba,e,t,n,a,o),!0;case"dragenter":return va=Xi(va,e,t,n,a,o),!0;case"mouseover":return ka=Xi(ka,e,t,n,a,o),!0;case"pointerover":var i=o.pointerId;return Ki.set(i,Xi(Ki.get(i)||null,e,t,n,a,o)),!0;case"gotpointercapture":return i=o.pointerId,Fi.set(i,Xi(Fi.get(i)||null,e,t,n,a,o)),!0}return!1}function Hp(e){var t=Ra(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Bd(e.priority,function(){Lp(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,Bd(e.priority,function(){Lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);cl=a,n.target.dispatchEvent(a),cl=null}else return t=io(n),t!==null&&Op(t),e.blockedOn=n,!1;t.shift()}return!0}function Up(e,t,n){jr(e)&&n.delete(t)}function av(){Bu=!1,ba!==null&&jr(ba)&&(ba=null),va!==null&&jr(va)&&(va=null),ka!==null&&jr(ka)&&(ka=null),Ki.forEach(Up),Fi.forEach(Up)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bu||(Bu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,av)))}var Wr=null;function qp(e){Wr!==e&&(Wr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wr===e&&(Wr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Ru(a||n)===null)continue;break}var i=io(n);i!==null&&(e.splice(t,3),t-=3,dh(i,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function Jo(e){function t(g){return Cr(g,e)}ba!==null&&Cr(ba,e),va!==null&&Cr(va,e),ka!==null&&Cr(ka,e),Ki.forEach(t),Fi.forEach(t);for(var n=0;n<xa.length;n++){var a=xa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<xa.length&&(n=xa[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&xa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],i=n[a+1],d=o[wt]||null;if(typeof i=="function")d||qp(n);else if(d){var f=null;if(i&&i.hasAttribute("formAction")){if(o=i,d=i[wt]||null)f=d.formAction;else if(Ru(o)!==null)continue}else f=d.action;typeof f=="function"?n[a+1]=f:(n.splice(a,3),a-=3),qp(n)}}}function zp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function _u(e){this._internalRoot=e}Or.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,a=Wt();Cp(n,a,e,t,null,null)},Or.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cp(e.current,2,null,e,null,null),br(),t[oo]=null}};function Or(e){this._internalRoot=e}Or.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xa.length&&t!==0&&t<xa[n].priority;n++);xa.splice(n,0,e),n===0&&Hp(e)}};var Yp=l.version;if(Yp!=="19.3.1")throw Error(h(527,Yp,"19.3.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=v(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var ov={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{oi=Lr.inject(ov),Et=Lr}catch{}}return Qi.createRoot=function(e,t){if(!c(e))throw Error(h(299));var n=!1,a="",o=_m,i=jm,d=Cm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=_p(e,1,!1,null,null,n,a,null,o,i,d,zp),e[oo]=t.current,ru(e),new _u(t)},Qi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(h(299));var a=!1,o="",i=_m,d=jm,f=Cm,g=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.formState!==void 0&&(g=n.formState)),t=_p(e,1,!0,t,n??null,a,o,g,i,d,f,zp),t.context=jp(null),n=t.current,a=Wt(),a=sl(a),o=sa(a),o.callback=null,ra(n,o,a),n=a,t.current.lanes=n,si(t,n),In(t),e[oo]=t.current,ru(e),new Or(t)},Qi.version="19.3.1",Qi}var $p;function mv(){if($p)return Wu.exports;$p=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Wu.exports=cv(),Wu.exports}var fv=mv();var ed=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,wg=/^[\\/]{2}/;function pv(r,l){return l+r.replace(/\\/g,"/")}var eg="popstate";function tg(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function gv(r={}){function l(c,m){let{pathname:p="/",search:b="",hash:w=""}=eo(c.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),Gu("",{pathname:p,search:b,hash:w},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function u(c,m){let p=c.document.querySelector("base"),b="";if(p&&p.getAttribute("href")){let w=c.location.href,v=w.indexOf("#");b=v===-1?w:w.slice(0,v)}return b+"#"+(typeof m=="string"?m:Xo(m))}function h(c,m){Ft(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return wv(l,u,h,r)}function Le(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function Ft(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function yv(){return Math.random().toString(36).substring(2,10)}function ng(r,l){return{usr:r.state,key:r.key,idx:l,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Gu(r,l,u=null,h,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof l=="string"?eo(l):l,state:u,key:l&&l.key||h||yv(),mask:c}}function Xo({pathname:r="/",search:l="",hash:u=""}){return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function eo(r){let l={};if(r){let u=r.indexOf("#");u>=0&&(l.hash=r.substring(u),r=r.substring(0,u));let h=r.indexOf("?");h>=0&&(l.search=r.substring(h),r=r.substring(0,h)),r&&(l.pathname=r)}return l}function wv(r,l,u,h={}){let{window:c=document.defaultView,v5Compat:m=!1}=h,p=c.history,b="POP",w=null,v=k();v==null&&(v=0,p.replaceState({...p.state,idx:v},""));function k(){return(p.state||{idx:null}).idx}function y(){b="POP";let W=k(),K=W==null?null:W-v;v=W,w&&w({action:b,location:M.location,delta:K})}function N(W,K){b="PUSH";let F=tg(W)?W:Gu(M.location,W,K);u&&u(F,W),v=k()+1;let ne=ng(F,v),Se=M.createHref(F.mask||F);try{p.pushState(ne,"",Se)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;c.location.assign(Se)}m&&w&&w({action:b,location:M.location,delta:1})}function L(W,K){b="REPLACE";let F=tg(W)?W:Gu(M.location,W,K);u&&u(F,W),v=k();let ne=ng(F,v),Se=M.createHref(F.mask||F);p.replaceState(ne,"",Se),m&&w&&w({action:b,location:M.location,delta:0})}function q(W){return bv(c,W)}let M={get action(){return b},get location(){return r(c,p)},listen(W){if(w)throw new Error("A history only accepts one active listener");return c.addEventListener(eg,y),w=W,()=>{c.removeEventListener(eg,y),w=null}},createHref(W){return l(c,W)},createURL:q,encodeLocation(W){let K=q(W);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:N,replace:L,go(W){return p.go(W)}};return M}function bv(r,l,u=!1){let h="http://localhost";r&&(h=r.location.origin!=="null"?r.location.origin:r.location.href),Le(h,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Xo(l);return c=c.replace(/ $/,"%20"),!u&&wg.test(c)&&(c=h+c),new URL(c,h)}function bg(r,l,u="/"){return vv(r,l,u,!1)}function vv(r,l,u,h,c){let m=typeof l=="string"?eo(l):l,p=Vn(m.pathname||"/",u);if(p==null)return null;let b=kv(r),w=null,v=Ig(p);for(let k=0;w==null&&k<b.length;++k)w=_v(b[k],v,h);return w}function kv(r){let l=vg(r);return xv(l),l}function vg(r,l=[],u=[],h="",c=!1){let m=(p,b,w=c,v)=>{let k={relativePath:v===void 0?p.path||"":v,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(h)&&w)return;Le(k.relativePath.startsWith(h),`Absolute route path "${k.relativePath}" nested under path "${h}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(h.length)}let y=rn([h,k.relativePath]),N=u.concat(k);p.children&&p.children.length>0&&(Le(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),vg(p.children,l,N,y,w)),!(p.path==null&&!p.index)&&l.push({path:y,score:Rv(y,p.index),routesMeta:N.map((L,q)=>{let[M,W]=Ag(L.relativePath,L.caseSensitive,q===N.length-1);return{...L,matcher:M,compiledParams:W}})})};return r.forEach((p,b)=>{if(p.path===""||!p.path?.includes("?"))m(p,b);else for(let w of kg(p.path))m(p,b,!0,w)}),l}function kg(r){let l=r.split("/");if(l.length===0)return[];let[u,...h]=l,c=u.endsWith("?"),m=u.replace(/\?$/,"");if(h.length===0)return c?[m,""]:[m];let p=kg(h.join("/")),b=[];return b.push(...p.map(w=>w===""?m:[m,w].join("/"))),c&&b.push(...p),b.map(w=>r.startsWith("/")&&w===""?"/":w)}function xv(r){r.sort((l,u)=>l.score!==u.score?u.score-l.score:Bv(l.routesMeta.map(h=>h.childrenIndex),u.routesMeta.map(h=>h.childrenIndex)))}var Av=/^:[\w-]+$/,Iv=3,Sv=2,Ev=1,Tv=10,Nv=-2,ag=r=>r==="*";function Rv(r,l){let u=r.split("/"),h=u.length;return u.some(ag)&&(h+=Nv),l&&(h+=Sv),u.filter(c=>!ag(c)).reduce((c,m)=>c+(Av.test(m)?Iv:m===""?Ev:Tv),h)}function Bv(r,l){return r.length===l.length&&r.slice(0,-1).every((h,c)=>h===l[c])?r[r.length-1]-l[l.length-1]:0}function _v(r,l,u=!1){let{routesMeta:h}=r,c={},m="/",p=[];for(let b=0;b<h.length;++b){let w=h[b],v=b===h.length-1,k=m==="/"?l:l.slice(m.length)||"/",y={path:w.relativePath,caseSensitive:w.caseSensitive,end:v},N=w.matcher&&w.compiledParams?xg(y,k,w.matcher,w.compiledParams):ns(y,k),L=w.route;if(!N&&v&&u&&!h[h.length-1].route.index&&(N=ns({path:w.relativePath,caseSensitive:w.caseSensitive,end:!1},k)),!N)return null;Object.assign(c,N.params),p.push({params:c,pathname:rn([m,N.pathname]),pathnameBase:Wv(rn([m,N.pathnameBase])),route:L}),N.pathnameBase!=="/"&&(m=rn([m,N.pathnameBase]))}return p}function ns(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,h]=Ag(r.path,r.caseSensitive,r.end);return xg(r,l,u,h)}function xg(r,l,u,h){let c=l.match(u);if(!c)return null;let m=c[0],p=Zo(m,1),b=c.slice(1);return{params:h.reduce((v,{paramName:k,isOptional:y},N)=>{if(k==="*"){let q=b[N]||"";p=Zo(m.slice(0,m.length-q.length),1)}const L=b[N];return y&&!L?v[k]=void 0:v[k]=(L||"").replace(/%2F/g,"/"),v},{}),pathname:m,pathnameBase:p,pattern:r}}function Ag(r,l=!1,u=!0){Ft(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let h=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,b,w,v,k)=>{if(h.push({paramName:b,isOptional:w!=null}),w){let y=k.charAt(v+p.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(h.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),h]}function Ig(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Ft(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),r}}function Vn(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let u=l.endsWith("/")?l.length-1:l.length,h=r.charAt(u);return h&&h!=="/"?null:r.slice(u)||"/"}function jv(r,l="/"){let{pathname:u,search:h="",hash:c=""}=typeof r=="string"?eo(r):r,m;return u?(u=Eg(u),u.startsWith("/")||u.startsWith("\\")?m=og(u.substring(1),"/"):m=og(u,l)):m=l,{pathname:m,search:Ov(h),hash:Lv(c)}}function og(r,l){let u=Zo(l).split("/");return r.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function Mu(r,l,u,h){return`Cannot include a '${r}' character in a manually specified \`to.${l}\` field [${JSON.stringify(h)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cv(r){return r.filter((l,u)=>u===0||l.route.path&&l.route.path.length>0)}function Sg(r){let l=Cv(r);return l.map((u,h)=>h===l.length-1?u.pathname:u.pathnameBase)}function td(r,l,u,h=!1){let c;typeof r=="string"?c=eo(r):(c={...r},Le(!c.pathname||!c.pathname.includes("?"),Mu("?","pathname","search",c)),Le(!c.pathname||!c.pathname.includes("#"),Mu("#","pathname","hash",c)),Le(!c.search||!c.search.includes("#"),Mu("#","search","hash",c)));let m=r===""||c.pathname==="",p=m?"/":c.pathname,b;if(p==null)b=u;else{let y=l.length-1;if(!h&&p.startsWith("..")){let N=p.split("/");for(;N[0]==="..";)N.shift(),y-=1;c.pathname=N.join("/")}b=y>=0?l[y]:"/"}let w=jv(c,b),v=p&&p!=="/"&&p.endsWith("/"),k=(m||p===".")&&u.endsWith("/");return!w.pathname.endsWith("/")&&(v||k)&&(w.pathname+="/"),w}var Eg=r=>r.replace(/[\\/]{2,}/g,"/"),rn=r=>Eg(r.join("/"));function Zo(r,l=0){let u=r.length;for(;u>l&&r.charCodeAt(u-1)===47;)u--;return u===r.length?r:r.slice(0,u)}var Wv=r=>Zo(r).replace(/^\/*/,"/"),Ov=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Lv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Dv=class{constructor(r,l,u,h=!1){this.status=r,this.statusText=l||"",this.internal=h,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Mv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Hv(r){let l=r.map(u=>u.route.path).filter(Boolean);return rn(l)||"/"}var Tg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ng(r,l){let u=r;if(typeof u!="string"||!ed.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let h=u,c=!1;if(Tg)try{let m=new URL(window.location.href),p=wg.test(u)?new URL(pv(u,m.protocol)):new URL(u),b=Vn(p.pathname,l);p.origin===m.origin&&b!=null?u=b+p.search+p.hash:c=!0}catch{Ft(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:h,isExternal:c,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ig=new URL("http://localhost");function Rg(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),ig)}catch{return ig}}function Hu(r,l){return r.origin===l.origin&&(r.origin!=="null"||r.protocol===l.protocol&&r.host===l.host)}function Uv(r,l){if(r.startsWith("//"))return!0;let u=l.protocol.toLowerCase();return r.toLowerCase().startsWith(u)?l.host===""||r.slice(u.length).startsWith("//"):!1}function Bg(r,l,u,h){let c=null;try{c=r==null?null:new URL(r,u)}catch{}let m=new URL(l,u),p=c!=null&&!Hu(c,u),b=!Hu(m,u);if(h==="reject"){if(p||b)throw new Error("External navigation is not allowed")}else if(b&&(c==null||!Uv(r,c)||!Hu(c,m)))throw new Error("External navigation is not allowed")}var _g=["POST","PUT","PATCH","DELETE"];new Set(_g);var qv=["GET",..._g];new Set(qv);var zv=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Yv(r){try{return zv.includes(new URL(r).protocol)}catch{return!1}}var ei=T.createContext(null);ei.displayName="DataRouter";var Vr=T.createContext(null);Vr.displayName="DataRouterState";var jg=T.createContext(!1);function Gv(){return T.useContext(jg)}var Cg=T.createContext({isTransitioning:!1});Cg.displayName="ViewTransition";var Pv=T.createContext(new Map);Pv.displayName="Fetchers";var Vv=T.createContext(null);Vv.displayName="Await";var Xt=T.createContext(null);Xt.displayName="Navigation";var ti=T.createContext(null);ti.displayName="Location";var un=T.createContext({outlet:null,matches:[],isDataRoute:!1});un.displayName="Route";var nd=T.createContext(null);nd.displayName="RouteError";var Wg="REACT_ROUTER_ERROR",Jv="REDIRECT",Kv="ROUTE_ERROR_RESPONSE";function Fv(r){if(r.startsWith(`${Wg}:${Jv}:{`))try{let l=JSON.parse(r.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function Xv(r){if(r.startsWith(`${Wg}:${Kv}:{`))try{let l=JSON.parse(r.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new Dv(l.status,l.statusText,l.data)}catch{}}function Zv(r,{relative:l}={}){Le(ni(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:h}=T.useContext(Xt),{hash:c,pathname:m,search:p}=os(r,{relative:l}),b=m;return u!=="/"&&(b=m==="/"?u:rn([u,m])),h.createHref({pathname:b,search:p,hash:c})}function ni(){return T.useContext(ti)!=null}function Lt(){return Le(ni(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(ti).location}function Qv(){return T.useContext(ti).navigationType}function $v(r){Le(ni(),"useMatch() may be used only in the context of a <Router> component.");let{pathname:l}=Lt();return T.useMemo(()=>ns(r,Ig(l)),[l,r])}var Og="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lg(r){T.useContext(Xt).static||T.useLayoutEffect(r)}function Jr(){let{isDataRoute:r}=T.useContext(un);return r?fk():ek()}function ek(){Le(ni(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(ei),{basename:l,navigator:u}=T.useContext(Xt),{matches:h}=T.useContext(un),{pathname:c}=Lt(),m=JSON.stringify(Sg(h)),p=T.useRef(!1);return Lg(()=>{p.current=!0}),T.useCallback((w,v={})=>{if(Ft(p.current,Og),!p.current)return;if(typeof w=="number"){u.go(w);return}let k=td(w,JSON.parse(m),c,v.relative==="path");r==null&&l!=="/"&&(k.pathname=k.pathname==="/"?l:rn([l,k.pathname])),Bg(typeof w=="string"?w:Xo(w),u.createHref(k),Rg(u),"reject"),(v.replace?u.replace:u.push)(k,v.state,v)},[l,u,m,c,r])}var tk=T.createContext(null);function nk(r){let l=T.useContext(un).outlet;return T.useMemo(()=>l&&T.createElement(tk.Provider,{value:r},l),[l,r])}function ad(){let{matches:r}=T.useContext(un);return r[r.length-1]?.params??{}}function os(r,{relative:l}={}){let{matches:u}=T.useContext(un),{pathname:h}=Lt(),c=JSON.stringify(Sg(u));return T.useMemo(()=>td(r,JSON.parse(c),h,l==="path"),[r,c,h,l])}function ak(r,l){return Dg(r,l)}function Dg(r,l,u){Le(ni(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=T.useContext(Xt),{matches:c}=T.useContext(un),m=c[c.length-1],p=m?m.params:{},b=m?m.pathname:"/",w=m?m.pathnameBase:"/",v=m&&m.route;{let W=v&&v.path||"";Hg(b,!v||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let k=Lt(),y;if(l){let W=typeof l=="string"?eo(l):l;Le(w==="/"||W.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${W.pathname}" was given in the \`location\` prop.`),y=W}else y=k;let N=y.pathname||"/",L=N;if(w!=="/"){let W=w.replace(/^\//,"").split("/");L="/"+N.replace(/^\//,"").split("/").slice(W.length).join("/")}let q=u&&u.state.matches.length?u.state.matches.map(W=>Object.assign(W,{route:u.manifest[W.route.id]||W.route})):bg(r,{pathname:L});Ft(v||q!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ft(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=lk(q&&q.map(W=>Object.assign({},W,{params:Object.assign({},p,W.params),pathname:rn([w,h.encodeLocation?h.encodeLocation(W.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?w:rn([w,h.encodeLocation?h.encodeLocation(W.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathnameBase])})),c,u);return l&&M?T.createElement(ti.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...y},navigationType:"POP"}},M):M}function ok(){let r=mk(),l=Mv(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,h="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:h},m={padding:"2px 4px",backgroundColor:h},p=null;return console.error("Error handled by React Router default ErrorBoundary:",r),p=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},l),u?T.createElement("pre",{style:c},u):null,p)}var ik=T.createElement(ok,null),Mg=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){this.props.onError?this.props.onError(r,l):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const u=Xv(r.digest);u&&(r=u)}let l=r!==void 0?T.createElement(un.Provider,{value:this.props.routeContext},T.createElement(nd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?T.createElement(sk,{error:r},l):l}};Mg.contextType=jg;var Uu=new WeakMap;function sk({children:r,error:l}){let{basename:u,navigator:h}=T.useContext(Xt);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let c=Fv(l.digest);if(c){let m=Uu.get(l);if(m)throw m;let p=Ng(c.location,u),b=p.absoluteURL||p.to;if(Bg(c.location,b,Rg(h),"allow-explicit"),Yv(b))throw new Error("Invalid redirect location");if(Tg&&!Uu.get(l))if(p.isExternal||c.reloadDocument)window.location.href=b;else{const w=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Uu.set(l,w),w}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b}`})}}return r}function rk({routeContext:r,match:l,children:u}){let h=T.useContext(ei);return h&&h.static&&h.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=l.route.id),T.createElement(un.Provider,{value:r},u)}function lk(r,l=[],u){let h=u?.state;if(r==null){if(!h)return null;if(h.errors)r=h.matches;else if(l.length===0&&!h.initialized&&h.matches.length>0)r=h.matches;else return null}let c=r,m=h?.errors;if(m!=null){let k=c.findIndex(y=>y.route.id&&m?.[y.route.id]!==void 0);Le(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),c=c.slice(0,Math.min(c.length,k+1))}let p=!1,b=-1;if(u&&h){p=h.renderFallback;for(let k=0;k<c.length;k++){let y=c[k];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(b=k),y.route.id){let{loaderData:N,errors:L}=h,q=y.route.loader&&!N.hasOwnProperty(y.route.id)&&(!L||L[y.route.id]===void 0);if(y.route.lazy||q){u.isStatic&&(p=!0),b>=0?c=c.slice(0,b+1):c=[c[0]];break}}}}let w=u?.onError,v=h&&w?(k,y)=>{w(k,{location:h.location,params:h.matches?.[0]?.params??{},pattern:Hv(h.matches),errorInfo:y})}:void 0;return c.reduceRight((k,y,N)=>{let L,q=!1,M=null,W=null;h&&(L=m&&y.route.id?m[y.route.id]:void 0,M=y.route.errorElement||ik,p&&(b<0&&N===0?(Hg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,W=null):b===N&&(q=!0,W=y.route.hydrateFallbackElement||null)));let K=l.concat(c.slice(0,N+1)),F=()=>{let ne;return L?ne=M:q?ne=W:y.route.Component?ne=T.createElement(y.route.Component,null):y.route.element?ne=y.route.element:ne=k,T.createElement(rk,{match:y,routeContext:{outlet:k,matches:K,isDataRoute:h!=null},children:ne})};return h&&(y.route.ErrorBoundary||y.route.errorElement||N===0)?T.createElement(Mg,{location:h.location,revalidation:h.revalidation,component:M,error:L,children:F(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:v}):F()},null)}function od(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hk(r){let l=T.useContext(ei);return Le(l,od(r)),l}function uk(r){let l=T.useContext(Vr);return Le(l,od(r)),l}function dk(r){let l=T.useContext(un);return Le(l,od(r)),l}function id(r){let l=dk(r),u=l.matches[l.matches.length-1];return Le(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function ck(){return id("useRouteId")}function mk(){let r=T.useContext(nd),l=uk("useRouteError"),u=id("useRouteError");return r!==void 0?r:l.errors?.[u]}function fk(){let{router:r}=hk("useNavigate"),l=id("useNavigate"),u=T.useRef(!1);return Lg(()=>{u.current=!0}),T.useCallback(async(c,m={})=>{Ft(u.current,Og),u.current&&(typeof c=="number"?await r.navigate(c):await r.navigate(c,{fromRouteId:l,...m}))},[r,l])}var sg={};function Hg(r,l,u){!l&&!sg[r]&&(sg[r]=!0,Ft(!1,u))}T.memo(pk);function pk({routes:r,manifest:l,future:u,state:h,isStatic:c,onError:m}){return Dg(r,void 0,{manifest:l,state:h,isStatic:c,onError:m})}function gk(r){return nk(r.context)}function It(r){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yk({basename:r="/",children:l=null,location:u,navigationType:h="POP",navigator:c,static:m=!1,useTransitions:p}){Le(!ni(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=r.replace(/^\/*/,"/"),w=T.useMemo(()=>({basename:b,navigator:c,static:m,useTransitions:p,future:{}}),[b,c,m,p]);typeof u=="string"&&(u=eo(u));let{pathname:v="/",search:k="",hash:y="",state:N=null,key:L="default",mask:q}=u,M=T.useMemo(()=>{let W=Vn(v,b);return W==null?null:{location:{pathname:W,search:k,hash:y,state:N,key:L,mask:q},navigationType:h}},[b,v,k,y,N,L,h,q]);return Ft(M!=null,`<Router basename="${b}"> is not able to match the URL "${v}${k}${y}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:T.createElement(Xt.Provider,{value:w},T.createElement(ti.Provider,{children:l,value:M}))}function wk({children:r,location:l}){return ak(Pu(r),l)}function Pu(r,l=[]){let u=[];return T.Children.forEach(r,(h,c)=>{if(!T.isValidElement(h))return;let m=[...l,c];if(h.type===T.Fragment){u.push.apply(u,Pu(h.props.children,m));return}Le(h.type===It,`[${typeof h.type=="string"?h.type:h.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!h.props.index||!h.props.children,"An index route cannot have child routes.");let p={id:h.props.id||m.join("-"),caseSensitive:h.props.caseSensitive,element:h.props.element,Component:h.props.Component,index:h.props.index,path:h.props.path,middleware:h.props.middleware,loader:h.props.loader,action:h.props.action,hydrateFallbackElement:h.props.hydrateFallbackElement,HydrateFallback:h.props.HydrateFallback,errorElement:h.props.errorElement,ErrorBoundary:h.props.ErrorBoundary,hasErrorBoundary:h.props.hasErrorBoundary===!0||h.props.ErrorBoundary!=null||h.props.errorElement!=null,shouldRevalidate:h.props.shouldRevalidate,handle:h.props.handle,lazy:h.props.lazy};h.props.children&&(p.children=Pu(h.props.children,m)),u.push(p)}),u}var Mr="get",Hr="application/x-www-form-urlencoded";function Kr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function bk(r){return Kr(r)&&r.tagName.toLowerCase()==="button"}function vk(r){return Kr(r)&&r.tagName.toLowerCase()==="form"}function kk(r){return Kr(r)&&r.tagName.toLowerCase()==="input"}function xk(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ak(r,l){return r.button===0&&(!l||l==="_self")&&!xk(r)}function Vu(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((l,u)=>{let h=r[u];return l.concat(Array.isArray(h)?h.map(c=>[u,c]):[[u,h]])},[]))}function Ik(r,l){let u=Vu(r);return l&&l.forEach((h,c)=>{u.has(c)||l.getAll(c).forEach(m=>{u.append(c,m)})}),u}var Dr=null;function Sk(){if(Dr===null)try{new FormData(document.createElement("form"),0),Dr=!1}catch{Dr=!0}return Dr}var Ek=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qu(r){return r!=null&&!Ek.has(r)?(Ft(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hr}"`),null):r}function Tk(r,l){let u,h,c,m,p;if(vk(r)){let b=r.getAttribute("action");h=b?Vn(b,l):null,u=r.getAttribute("method")||Mr,c=qu(r.getAttribute("enctype"))||Hr,m=new FormData(r)}else if(bk(r)||kk(r)&&(r.type==="submit"||r.type==="image")){let b=r.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let w=r.getAttribute("formaction")||b.getAttribute("action");if(h=w?Vn(w,l):null,u=r.getAttribute("formmethod")||b.getAttribute("method")||Mr,c=qu(r.getAttribute("formenctype"))||qu(b.getAttribute("enctype"))||Hr,m=new FormData(b,r),!Sk()){let{name:v,type:k,value:y}=r;if(k==="image"){let N=v?`${v}.`:"";m.append(`${N}x`,"0"),m.append(`${N}y`,"0")}else v&&m.append(v,y)}}else{if(Kr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Mr,h=null,c=Hr,p=r}return m&&c==="text/plain"&&(p=m,m=void 0),{action:h,method:u.toLowerCase(),encType:c,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sd(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function Ug(r,l,u,h){let c=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${h}`:c.pathname=`${c.pathname}.${h}`:c.pathname==="/"?c.pathname=`_root.${h}`:l&&Vn(c.pathname,l)==="/"?c.pathname=`${Zo(l)}/_root.${h}`:c.pathname=`${Zo(c.pathname)}.${h}`,c}async function Nk(r,l){if(r.id in l)return l[r.id];try{let u=await import(r.module);return l[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Rk(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Bk(r,l,u){let h=await Promise.all(r.map(async c=>{let m=l.routes[c.route.id];if(m){let p=await Nk(m,u);return p.links?p.links():[]}return[]}));return Wk(h.flat(1).filter(Rk).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function rg(r,l,u,h,c,m){let p=(w,v)=>u[v]?w.route.id!==u[v].route.id:!0,b=(w,v)=>u[v].pathname!==w.pathname||u[v].route.path?.endsWith("*")&&u[v].params["*"]!==w.params["*"];return m==="assets"?l.filter((w,v)=>p(w,v)||b(w,v)):m==="data"?l.filter((w,v)=>{let k=h.routes[w.route.id];if(!k||!k.hasLoader)return!1;if(p(w,v)||b(w,v))return!0;if(w.route.shouldRevalidate){let y=w.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:w.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function _k(r,l,{includeHydrateFallback:u}={}){return jk(r.map(h=>{let c=l.routes[h.route.id];if(!c)return[];let m=[c.module];return c.clientActionModule&&(m=m.concat(c.clientActionModule)),c.clientLoaderModule&&(m=m.concat(c.clientLoaderModule)),u&&c.hydrateFallbackModule&&(m=m.concat(c.hydrateFallbackModule)),c.imports&&(m=m.concat(c.imports)),m}).flat(1))}function jk(r){return[...new Set(r)]}function Ck(r){let l={},u=Object.keys(r).sort();for(let h of u)l[h]=r[h];return l}function Wk(r,l){let u=new Set;return new Set(l),r.reduce((h,c)=>{let m=JSON.stringify(Ck(c));return u.has(m)||(u.add(m),h.push({key:m,link:c})),h},[])}function rd(){let r=T.useContext(ei);return sd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ok(){let r=T.useContext(Vr);return sd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ld=T.createContext(void 0);ld.displayName="FrameworkContext";function Fr(){let r=T.useContext(ld);return sd(r,"You must render this element inside a <HydratedRouter> element"),r}function Lk(r,l){let u=T.useContext(ld),[h,c]=T.useState(!1),[m,p]=T.useState(!1),{onFocus:b,onBlur:w,onMouseEnter:v,onMouseLeave:k,onTouchStart:y}=l,N=T.useRef(null);T.useEffect(()=>{if(r==="render"&&p(!0),r==="viewport"){let M=K=>{K.forEach(F=>{p(F.isIntersecting)})},W=new IntersectionObserver(M,{threshold:.5});return N.current&&W.observe(N.current),()=>{W.disconnect()}}},[r]),T.useEffect(()=>{if(h){let M=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(M)}}},[h]);let L=()=>{c(!0)},q=()=>{c(!1),p(!1)};return u?r!=="intent"?[m,N,{}]:[m,N,{onFocus:$i(b,L),onBlur:$i(w,q),onMouseEnter:$i(v,L),onMouseLeave:$i(k,q),onTouchStart:$i(y,L)}]:[!1,N,{}]}function $i(r,l){return u=>{r&&r(u),u.defaultPrevented||l(u)}}function Dk({page:r,...l}){let u=Gv(),{nonce:h}=Fr(),{router:c}=rd(),m=T.useMemo(()=>bg(c.routes,r,c.basename),[c.routes,r,c.basename]);return m?(l.nonce==null&&h&&(l={...l,nonce:h}),u?T.createElement(Hk,{page:r,matches:m,...l}):T.createElement(Uk,{page:r,matches:m,...l})):null}function Mk(r){let{manifest:l,routeModules:u}=Fr(),[h,c]=T.useState([]);return T.useEffect(()=>{let m=!1;return Bk(r,l,u).then(p=>{m||c(p)}),()=>{m=!0}},[r,l,u]),h}function Hk({page:r,matches:l,...u}){let h=Lt(),{future:c}=Fr(),{basename:m}=rd(),p=T.useMemo(()=>{if(r===h.pathname+h.search+h.hash)return[];let b=Ug(r,m,c.v8_trailingSlashAwareDataRequests,"rsc"),w=!1,v=[];for(let k of l)typeof k.route.shouldRevalidate=="function"?w=!0:v.push(k.route.id);return w&&v.length>0&&b.searchParams.set("_routes",v.join(",")),[b.pathname+b.search]},[m,c.v8_trailingSlashAwareDataRequests,r,h,l]);return T.createElement(T.Fragment,null,p.map(b=>T.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...u})))}function Uk({page:r,matches:l,...u}){let h=Lt(),{future:c,manifest:m,routeModules:p}=Fr(),{basename:b}=rd(),{loaderData:w,matches:v}=Ok(),k=T.useMemo(()=>rg(r,l,v,m,h,"data"),[r,l,v,m,h]),y=T.useMemo(()=>rg(r,l,v,m,h,"assets"),[r,l,v,m,h]),N=T.useMemo(()=>{if(r===h.pathname+h.search+h.hash)return[];let M=new Set,W=!1;if(l.forEach(F=>{let ne=m.routes[F.route.id];!ne||!ne.hasLoader||(!k.some(Se=>Se.route.id===F.route.id)&&F.route.id in w&&p[F.route.id]?.shouldRevalidate||ne.hasClientLoader?W=!0:M.add(F.route.id))}),M.size===0)return[];let K=Ug(r,b,c.v8_trailingSlashAwareDataRequests,"data");return W&&M.size>0&&K.searchParams.set("_routes",l.filter(F=>M.has(F.route.id)).map(F=>F.route.id).join(",")),[K.pathname+K.search]},[b,c.v8_trailingSlashAwareDataRequests,w,h,m,k,l,r,p]),L=T.useMemo(()=>_k(y,m),[y,m]),q=Mk(y);return T.createElement(T.Fragment,null,N.map(M=>T.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...u})),L.map(M=>T.createElement("link",{key:M,rel:"modulepreload",href:M,...u})),q.map(({key:M,link:W})=>T.createElement("link",{key:M,nonce:u.nonce,...W,crossOrigin:W.crossOrigin??u.crossOrigin})))}function qk(...r){return l=>{r.forEach(u=>{typeof u=="function"?u(l):u!=null&&(u.current=l)})}}var zk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zk&&(window.__reactRouterVersion="7.18.5")}catch{}function Yk({basename:r,children:l,useTransitions:u,window:h}){let c=T.useRef();c.current==null&&(c.current=gv({window:h,v5Compat:!0}));let m=c.current,[p,b]=T.useState({action:m.action,location:m.location}),w=T.useCallback(v=>{u===!1?b(v):T.startTransition(()=>b(v))},[u]);return T.useLayoutEffect(()=>m.listen(w),[m,w]),T.createElement(yk,{basename:r,children:l,location:p.location,navigationType:p.action,navigator:m,useTransitions:u})}var G=T.forwardRef(function({onClick:l,discover:u="render",prefetch:h="none",relative:c,reloadDocument:m,replace:p,mask:b,state:w,target:v,to:k,preventScrollReset:y,viewTransition:N,defaultShouldRevalidate:L,...q},M){let{basename:W,navigator:K,useTransitions:F}=T.useContext(Xt),ne=typeof k=="string"&&ed.test(k),Se=Ng(k,W);k=Se.to;let be=Zv(k,{relative:c}),We=Lt(),Z=null;if(b){let Te=td(b,[],We.mask?We.mask.pathname:"/",!0);W!=="/"&&(Te.pathname=Te.pathname==="/"?W:rn([W,Te.pathname])),Z=K.createHref(Te)}let[ie,Ve,st]=Lk(h,q),yt=Vk(k,{replace:p,mask:b,state:w,target:v,preventScrollReset:y,relative:c,viewTransition:N,defaultShouldRevalidate:L,useTransitions:F});function ht(Te){l&&l(Te),Te.defaultPrevented||yt(Te)}let Zt=!(Se.isExternal||m),dn=T.createElement("a",{...q,...st,href:(Zt?Z:void 0)||Se.absoluteURL||be,onClick:Zt?ht:l,ref:qk(M,Ve),target:v,"data-discover":!ne&&u==="render"?"true":void 0});return ie&&!ne?T.createElement(T.Fragment,null,dn,T.createElement(Dk,{page:be})):dn});G.displayName="Link";var Pn=T.forwardRef(function({"aria-current":l="page",caseSensitive:u=!1,className:h="",end:c=!1,style:m,to:p,viewTransition:b,children:w,...v},k){let y=os(p,{relative:v.relative}),N=Lt(),L=T.useContext(Vr),{navigator:q,basename:M}=T.useContext(Xt),W=L!=null&&Zk(y)&&b===!0,K=q.encodeLocation?q.encodeLocation(y).pathname:y.pathname,F=N.pathname,ne=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;u||(F=F.toLowerCase(),ne=ne?ne.toLowerCase():null,K=K.toLowerCase()),ne&&M&&(ne=Vn(ne,M)||ne);const Se=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let be=F===K||!c&&F.startsWith(K)&&F.charAt(Se)==="/",We=ne!=null&&(ne===K||!c&&ne.startsWith(K)&&ne.charAt(K.length)==="/"),Z={isActive:be,isPending:We,isTransitioning:W},ie=be?l:void 0,Ve;typeof h=="function"?Ve=h(Z):Ve=[h,be?"active":null,We?"pending":null,W?"transitioning":null].filter(Boolean).join(" ");let st=typeof m=="function"?m(Z):m;return T.createElement(G,{...v,"aria-current":ie,className:Ve,ref:k,style:st,to:p,viewTransition:b},typeof w=="function"?w(Z):w)});Pn.displayName="NavLink";var Gk=T.forwardRef(({discover:r="render",fetcherKey:l,navigate:u,reloadDocument:h,replace:c,state:m,method:p=Mr,action:b,onSubmit:w,relative:v,preventScrollReset:k,viewTransition:y,defaultShouldRevalidate:N,...L},q)=>{let{useTransitions:M}=T.useContext(Xt),W=Fk(),K=Xk(b,{relative:v}),F=p.toLowerCase()==="get"?"get":"post",ne=typeof b=="string"&&ed.test(b),Se=be=>{if(w&&w(be),be.defaultPrevented)return;be.preventDefault();let We=be.nativeEvent.submitter,Z=We?.getAttribute("formmethod")||p,ie=()=>W(We||be.currentTarget,{fetcherKey:l,method:Z,navigate:u,replace:c,state:m,relative:v,preventScrollReset:k,viewTransition:y,defaultShouldRevalidate:N});M&&u!==!1?T.startTransition(()=>ie()):ie()};return T.createElement("form",{ref:q,method:F,action:K,onSubmit:h?w:Se,...L,"data-discover":!ne&&r==="render"?"true":void 0})});Gk.displayName="Form";function Pk(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qg(r){let l=T.useContext(ei);return Le(l,Pk(r)),l}function Vk(r,{target:l,replace:u,mask:h,state:c,preventScrollReset:m,relative:p,viewTransition:b,defaultShouldRevalidate:w,useTransitions:v}={}){let k=Jr(),y=Lt(),N=os(r,{relative:p});return T.useCallback(L=>{if(Ak(L,l)){L.preventDefault();let q=u!==void 0?u:Xo(y)===Xo(N),M=()=>k(r,{replace:q,mask:h,state:c,preventScrollReset:m,relative:p,viewTransition:b,defaultShouldRevalidate:w});v?T.startTransition(()=>M()):M()}},[y,k,N,u,h,c,l,r,m,p,b,w,v])}function zg(r){Ft(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let l=T.useRef(Vu(r)),u=T.useRef(!1),h=Lt(),c=T.useMemo(()=>Ik(h.search,u.current?null:l.current),[h.search]),m=Jr(),p=T.useCallback((b,w)=>{const v=Vu(typeof b=="function"?b(new URLSearchParams(c)):b);u.current=!0,m("?"+v,w)},[m,c]);return[c,p]}var Jk=0,Kk=()=>`__${String(++Jk)}__`;function Fk(){let{router:r}=qg("useSubmit"),{basename:l}=T.useContext(Xt),u=ck(),h=r.fetch,c=r.navigate;return T.useCallback(async(m,p={})=>{let{action:b,method:w,encType:v,formData:k,body:y}=Tk(m,l);if(p.navigate===!1){let N=p.fetcherKey||Kk();await h(N,u,p.action||b,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:k,body:y,formMethod:p.method||w,formEncType:p.encType||v,flushSync:p.flushSync})}else await c(p.action||b,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:k,body:y,formMethod:p.method||w,formEncType:p.encType||v,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[h,c,l,u])}function Xk(r,{relative:l}={}){let{basename:u}=T.useContext(Xt),h=T.useContext(un);Le(h,"useFormAction must be used inside a RouteContext");let[c]=h.matches.slice(-1),m={...os(r||".",{relative:l})},p=Lt();if(r==null){m.search=p.search;let b=new URLSearchParams(m.search),w=b.getAll("index");if(w.some(k=>k==="")){b.delete("index"),w.filter(y=>y).forEach(y=>b.append("index",y));let k=b.toString();m.search=k?`?${k}`:""}}return(!r||r===".")&&c.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:rn([u,m.pathname])),Xo(m)}function Zk(r,{relative:l}={}){let u=T.useContext(Cg);Le(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:h}=qg("useViewTransitionState"),c=os(r,{relative:l});if(!u.isTransitioning)return!1;let m=Vn(u.currentLocation.pathname,h)||u.currentLocation.pathname,p=Vn(u.nextLocation.pathname,h)||u.nextLocation.pathname;return ns(c.pathname,p)!=null||ns(c.pathname,m)!=null}var Qk=yg();const hd="speakout-b1plus.theme",qr=new Set;function $k(){if(typeof window>"u")return"light";const r=window.localStorage.getItem(hd);return r==="dark"||r==="reading"||r==="light"?r:window.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light"}let Qo=$k();function ud(r){if(typeof document>"u")return;const l=document.documentElement;l.classList.toggle("dark",r==="dark"),l.classList.toggle("reading",r==="reading"),l.style.colorScheme=r==="dark"?"dark":"light"}ud(Qo);typeof window<"u"&&window.addEventListener("storage",r=>{r.key===hd&&(r.newValue==="light"||r.newValue==="dark"||r.newValue==="reading")&&(Qo=r.newValue,ud(Qo),qr.forEach(l=>l()))});function Ju(r){Qo=r;try{localStorage.setItem(hd,r)}catch{}ud(r),qr.forEach(l=>l())}function ex(){const r=["light","dark","reading"];Ju(r[(r.indexOf(Qo)+1)%r.length])}function tx(){const r=T.useSyncExternalStore(l=>(qr.add(l),()=>qr.delete(l)),()=>Qo,()=>"light");return{theme:r,setTheme:Ju,cycleTheme:ex,toggleDark:()=>Ju(r==="dark"?"light":"dark")}}const Yg="speakout-b1plus.sound.on";let dd=nx(),es=null;function nx(){try{return localStorage.getItem(Yg)!=="off"}catch{return!0}}function ax(){return dd}function ox(r){dd=r;try{localStorage.setItem(Yg,r?"on":"off")}catch{}}function ix(){try{const r=window.AudioContext??window.webkitAudioContext;return r?(es||(es=new r),es.state==="suspended"&&es.resume(),es):null}catch{return null}}function sx(r,l,u,h,c={}){const m=r.createOscillator(),p=r.createGain(),b=c.gain??.06,w=r.currentTime+u;m.type=c.type??"sine",m.frequency.setValueAtTime(l,w),c.slide&&m.frequency.exponentialRampToValueAtTime(Math.max(30,c.slide),w+h),p.gain.setValueAtTime(1e-4,w),p.gain.exponentialRampToValueAtTime(b,w+.02),p.gain.exponentialRampToValueAtTime(1e-4,w+h),m.connect(p),p.connect(r.destination),m.start(w),m.stop(w+h+.02)}function Gn(r,l){const u=ix();if(!u)return;const h=l?.step??.11,c=l?.hold??.16;r.forEach((m,p)=>sx(u,m,p*h,c,l))}function Kt(r){if(dd)switch(r){case"tap":Gn([360],{type:"sine",gain:.03,hold:.06});break;case"correct":Gn([523.25,783.99],{type:"sine",gain:.05,step:.09,hold:.14});break;case"wrong":Gn([176],{type:"square",gain:.028,hold:.22});break;case"xp":Gn([659.25,880],{type:"sine",gain:.05,step:.08,hold:.12});break;case"achievement":Gn([523.25,659.25,783.99,1046.5],{type:"triangle",gain:.05,step:.11,hold:.2});break;case"levelup":Gn([659.25,783.99,987.77,1318.5,1567.98],{type:"triangle",gain:.05,step:.11,hold:.24});break;case"write":Gn([587.33,880],{type:"sine",gain:.045,step:.12,hold:.18});break;case"star":Gn([1046.5,1318.5,1567.98,2093],{type:"triangle",gain:.05,step:.1,hold:.18});break;case"echo":Gn([784,1046.5],{type:"sine",gain:.045,step:.07,hold:.12});break}}function pe({size:r=20,...l}){return{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,...l}}const Gg=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),s.jsx("path",{d:"M5 9.5V21h14V9.5"}),s.jsx("path",{d:"M9.5 21v-6h5v6"})]}),pt=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),s.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"})]}),Sa=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("path",{d:"m21 21-4.3-4.3"})]}),rx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("circle",{cx:"12",cy:"12",r:"4"}),s.jsx("path",{d:"M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]}),lx=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"})}),hx=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})}),Pg=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M18 6 6 18M6 6l12 12"})}),is=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M7 4.5v15l13-7.5-13-7.5Z",fill:"currentColor",stroke:"none"})}),Vg=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M8 5v14M16 5v14"})}),hn=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("rect",{x:"2.5",y:"5",width:"19",height:"14",rx:"2.5"}),s.jsx("path",{d:"m10 9 5 3-5 3V9Z",fill:"currentColor",stroke:"none"})]}),ln=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M20 6 9 17l-5-5"})}),ux=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M18 6 6 18M6 6l12 12"})}),zr=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"m15 18-6-6 6-6"})}),Jn=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"m9 18 6-6-6-6"})}),cd=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"m6 9 6 6 6-6"})}),Qa=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M7 17 17 7M8 7h9v9"})}),md=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M12 3v4m0 10v4m9-9h-4M7 12H3m13.5-5.5-2.8 2.8m-3.4 3.4-2.8 2.8m8.6-8.6 2.8-2.8M7.3 16.7 4.5 19.5"})}),lg=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"m12 2 9 5-9 5-9-5 9-5Z"}),s.jsx("path",{d:"m3 12 9 5 9-5"}),s.jsx("path",{d:"m3 17 9 5 9-5"})]}),ft=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("circle",{cx:"12",cy:"12",r:"9"}),s.jsx("circle",{cx:"12",cy:"12",r:"5"}),s.jsx("circle",{cx:"12",cy:"12",r:"1.2",fill:"currentColor"})]}),Jg=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M4 9v6h4l5 4V5L8 9H4Z",fill:"currentColor",stroke:"none"}),s.jsx("path",{d:"M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"})]}),dx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),s.jsx("circle",{cx:"8.5",cy:"9",r:"1.6"}),s.jsx("path",{d:"m3 17 5-5 4 4 3-3 6 6"})]}),cx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("path",{d:"m21 21-4.3-4.3"}),s.jsx("path",{d:"M11 8v6M8 11h6"})]}),mx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("path",{d:"m21 21-4.3-4.3"}),s.jsx("path",{d:"M8 11h6"})]}),fx=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"})}),px=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7L3 8"}),s.jsx("path",{d:"M3 3v5h5"})]}),Kg=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M11 17l-5-5 5-5M20 17l-5-5 5-5"})}),Fg=r=>s.jsx("svg",{...pe(r),children:s.jsx("path",{d:"M13 17l5-5-5-5M4 17l5-5-5-5"})}),gx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),yx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"}),s.jsx("path",{d:"m4 4 16 16"})]}),wx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("circle",{cx:"12",cy:"9",r:"5"}),s.jsx("path",{d:"m8.5 13.5-1.5 7 5-2.8 5 2.8-1.5-7"})]}),bx=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M4 9v6h4l5 4V5L8 9H4Z",fill:"currentColor",stroke:"none"}),s.jsx("path",{d:"m16.5 9.5 5 5M21.5 9.5l-5 5"})]}),Kn=r=>s.jsxs("svg",{...pe(r),children:[s.jsx("path",{d:"M6.5 8.5v4a5.5 5.5 0 0 0 11 0v-1.2a2.8 2.8 0 0 0-2.8-2.8h-1.7a3.5 3.5 0 0 0-3.5 3.5v1.5"}),s.jsx("path",{d:"M6.5 8.5a4 4 0 0 1 4-3.9c2.2 0 4 .5 4 2.6"})]});function fd({initial:r="",autoFocus:l=!1,compact:u=!1,placeholder:h="Search lessons, grammar, vocabulary…",onNavigate:c}){const[m,p]=T.useState(r),b=Jr(),w=T.useRef(null);return T.useEffect(()=>{p(r)},[r]),T.useEffect(()=>{l&&w.current?.focus()},[l]),s.jsxs("form",{role:"search",onSubmit:v=>{v.preventDefault();const k=m.trim();b(k?`/search?q=${encodeURIComponent(k)}`:"/search"),c?.()},className:`relative flex items-center ${u?"":"w-full"}`,children:[s.jsx(Sa,{size:u?16:18,className:"pointer-events-none absolute left-3 text-[var(--ink-faint)]"}),s.jsx("input",{ref:w,value:m,onChange:v=>p(v.target.value),placeholder:h,"aria-label":"Search the book",className:`w-full rounded-full border border-[var(--line)] bg-[var(--surface)] pl-9 pr-16 text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${u?"h-9 text-xs":"h-12 text-sm"}`}),s.jsx("button",{type:"submit",className:`absolute right-1.5 rounded-full bg-brand-600 font-semibold text-white transition hover:bg-brand-700 ${u?"px-2.5 py-1 text-[10px]":"px-3.5 py-1.5 text-xs"}`,children:"Search"})]})}const vx=[{to:"/book",label:"Book"},{to:"/bank/grammar",label:"Grammar"},{to:"/bank/vocabulary",label:"Vocabulary"},{to:"/media",label:"Media"}];function kx({onContents:r}){const{theme:l,cycleTheme:u}=tx(),[h,c]=T.useState(()=>ax()),m=Lt(),p=Jr(),b=!m.pathname.startsWith("/search"),w=l==="dark"?"Dark":l==="reading"?"Reading":"Light",v=l==="dark"?lx:l==="reading"?pt:rx;return s.jsxs("header",{className:"sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--bg)]/92 backdrop-blur-md",children:[s.jsxs("div",{className:"mx-auto flex max-w-4xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-6",children:[s.jsx("button",{type:"button",onClick:r,className:"grid h-9 w-9 shrink-0 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]","aria-label":"Open book contents",children:s.jsx(hx,{size:20})}),s.jsxs(G,{to:"/",className:"group flex min-w-0 items-center gap-2.5","aria-label":"Speakout B1+ home",children:[s.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-sm transition-transform group-hover:-rotate-3",children:s.jsx(pt,{size:19})}),s.jsxs("span",{className:"min-w-0 leading-none",children:[s.jsx("span",{className:"block truncate font-display text-[20px] tracking-tight text-[var(--ink)] sm:text-[22px]",children:"Speakout"}),s.jsxs("span",{className:"mt-0.5 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300",children:["B1+ ",s.jsx("span",{className:"h-0.5 w-0.5 rounded-full bg-current"})," 3rd edition"]})]})]}),s.jsx("nav",{className:"ml-3 hidden items-center gap-0.5 md:flex","aria-label":"Sections",children:vx.map(k=>s.jsx(Pn,{to:k.to,className:({isActive:y})=>`rounded-full px-2.5 py-1.5 text-xs font-semibold transition ${y||k.to==="/bank/grammar"&&m.pathname.startsWith("/bank/grammar")||k.to==="/bank/vocabulary"&&m.pathname.startsWith("/bank/vocabulary")?"bg-brand-600 text-white":"text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-[var(--ink)]"}`,children:k.label},k.to))}),s.jsxs("div",{className:"ml-auto flex shrink-0 items-center gap-0.5",children:[s.jsx("button",{type:"button",onClick:()=>p("/search"),className:"grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)] md:hidden","aria-label":"Search",children:s.jsx(Sa,{size:18})}),s.jsx("button",{type:"button",onClick:()=>{Kt("tap"),u()},className:"grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]","aria-label":`Theme: ${w}. Change theme`,title:`Theme: ${w}`,children:s.jsx(v,{size:18})}),s.jsx("button",{type:"button",onClick:()=>{const k=!h;ox(k),c(k),k&&Kt("tap")},className:"grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--ink)]","aria-label":h?"Turn interface sounds off":"Turn interface sounds on",title:h?"Sounds on":"Sounds off",children:h?s.jsx(Jg,{size:18}):s.jsx(bx,{size:18})})]})]}),b&&s.jsx("div",{className:"mx-auto hidden max-w-4xl px-6 pb-2.5 sm:block",children:s.jsx(fd,{compact:!0,placeholder:"Search the B1+ book — lesson, grammar point, word…"})})]})}const xx=JSON.parse('[{"original":"SO3_B1+_SB_1A_Audio_1_01.mp3","file":"/audio/1A_1_01.mp3","code":"1A","track":"1_01"},{"original":"SO3_B1+_SB_1A_Audio_1_02.mp3","file":"/audio/1A_1_02.mp3","code":"1A","track":"1_02"},{"original":"SO3_B1+_SB_1A_Audio_VB1_01.mp3","file":"/audio/1A_VB1_01.mp3","code":"1A","track":"VB1_01"},{"original":"SO3_B1+_SB_1B_Audio_1_03.mp3","file":"/audio/1B_1_03.mp3","code":"1B","track":"1_03"},{"original":"SO3_B1+_SB_1C_Audio_1_04.mp3","file":"/audio/1C_1_04.mp3","code":"1C","track":"1_04"},{"original":"SO3_B1+_SB_1C_Audio_1_05.mp3","file":"/audio/1C_1_05.mp3","code":"1C","track":"1_05"},{"original":"SO3_B1+_SB_1C_Audio_1_06.mp3","file":"/audio/1C_1_06.mp3","code":"1C","track":"1_06"},{"original":"SO3_B1+_SB_1C_Audio_1_07.mp3","file":"/audio/1C_1_07.mp3","code":"1C","track":"1_07"},{"original":"SO3_B1+_SB_1C_Audio_MB1_01.mp3","file":"/audio/1C_MB1_01.mp3","code":"1C","track":"MB1_01"},{"original":"SO3_B1+_SB_1C_Audio_MB1_02.mp3","file":"/audio/1C_MB1_02.mp3","code":"1C","track":"MB1_02"},{"original":"SO3_B1+_SB_1R_Audio_R1_01.mp3","file":"/audio/1R_R1_01.mp3","code":"1R","track":"R1_01"},{"original":"SO3_B1+_SB_2A_Audio_2_01.mp3","file":"/audio/2A_2_01.mp3","code":"2A","track":"2_01"},{"original":"SO3_B1+_SB_2A_Audio_2_02.mp3","file":"/audio/2A_2_02.mp3","code":"2A","track":"2_02"},{"original":"SO3_B1+_SB_2B_Audio_2_03.mp3","file":"/audio/2B_2_03.mp3","code":"2B","track":"2_03"},{"original":"SO3_B1+_SB_2B_Audio_2_04.mp3","file":"/audio/2B_2_04.mp3","code":"2B","track":"2_04"},{"original":"SO3_B1+_SB_2B_Audio_2_05.mp3","file":"/audio/2B_2_05.mp3","code":"2B","track":"2_05"},{"original":"SO3_B1+_SB_2B_Audio_2_06.mp3","file":"/audio/2B_2_06.mp3","code":"2B","track":"2_06"},{"original":"SO3_B1+_SB_2C_Audio_2_07.mp3","file":"/audio/2C_2_07.mp3","code":"2C","track":"2_07"},{"original":"SO3_B1+_SB_2C_Audio_2_08.mp3","file":"/audio/2C_2_08.mp3","code":"2C","track":"2_08"},{"original":"SO3_B1+_SB_2C_Audio_2_09.mp3","file":"/audio/2C_2_09.mp3","code":"2C","track":"2_09"},{"original":"SO3_B1+_SB_2D_Audio_2_10.mp3","file":"/audio/2D_2_10.mp3","code":"2D","track":"2_10"},{"original":"SO3_B1+_SB_2R_Audio_R2_01.mp3","file":"/audio/2R_R2_01.mp3","code":"2R","track":"R2_01"},{"original":"SO3_B1+_SB_3A_Audio_3_01.mp3","file":"/audio/3A_3_01.mp3","code":"3A","track":"3_01"},{"original":"SO3_B1+_SB_3A_Audio_3_02.mp3","file":"/audio/3A_3_02.mp3","code":"3A","track":"3_02"},{"original":"SO3_B1+_SB_3B_Audio_3_03.mp3","file":"/audio/3B_3_03.mp3","code":"3B","track":"3_03"},{"original":"SO3_B1+_SB_3B_Audio_3_04.mp3","file":"/audio/3B_3_04.mp3","code":"3B","track":"3_04"},{"original":"SO3_B1+_SB_3B_Audio_3_05.mp3","file":"/audio/3B_3_05.mp3","code":"3B","track":"3_05"},{"original":"SO3_B1+_SB_3C_Audio_3_06.mp3","file":"/audio/3C_3_06.mp3","code":"3C","track":"3_06"},{"original":"SO3_B1+_SB_3C_Audio_3_07.mp3","file":"/audio/3C_3_07.mp3","code":"3C","track":"3_07"},{"original":"SO3_B1+_SB_3C_Audio_3_08.mp3","file":"/audio/3C_3_08.mp3","code":"3C","track":"3_08"},{"original":"SO3_B1+_SB_3C_Audio_MB3_01.mp3","file":"/audio/3C_MB3_01.mp3","code":"3C","track":"MB3_01"},{"original":"SO3_B1+_SB_3C_Audio_VB3_01.mp3","file":"/audio/3C_VB3_01.mp3","code":"3C","track":"VB3_01"},{"original":"SO3_B1+_SB_3R_Audio_R3_01.mp3","file":"/audio/3R_R3_01.mp3","code":"3R","track":"R3_01"},{"original":"SO3_B1+_SB_4A_Audio_4_01.mp3","file":"/audio/4A_4_01.mp3","code":"4A","track":"4_01"},{"original":"SO3_B1+_SB_4B_Audio_4_02.mp3","file":"/audio/4B_4_02.mp3","code":"4B","track":"4_02"},{"original":"SO3_B1+_SB_4B_Audio_4_03.mp3","file":"/audio/4B_4_03.mp3","code":"4B","track":"4_03"},{"original":"SO3_B1+_SB_4C_Audio_4_04.mp3","file":"/audio/4C_4_04.mp3","code":"4C","track":"4_04"},{"original":"SO3_B1+_SB_4C_Audio_4_05.mp3","file":"/audio/4C_4_05.mp3","code":"4C","track":"4_05"},{"original":"SO3_B1+_SB_4D_Audio_4_06.mp3","file":"/audio/4D_4_06.mp3","code":"4D","track":"4_06"},{"original":"SO3_B1+_SB_4R_Audio_R4_01.mp3","file":"/audio/4R_R4_01.mp3","code":"4R","track":"R4_01"},{"original":"SO3_B1+_SB_5A_Audio_5_01.mp3","file":"/audio/5A_5_01.mp3","code":"5A","track":"5_01"},{"original":"SO3_B1+_SB_5A_Audio_5_02.mp3","file":"/audio/5A_5_02.mp3","code":"5A","track":"5_02"},{"original":"SO3_B1+_SB_5A_Audio_5_03.mp3","file":"/audio/5A_5_03.mp3","code":"5A","track":"5_03"},{"original":"SO3_B1+_SB_5B_Audio_5_04.mp3","file":"/audio/5B_5_04.mp3","code":"5B","track":"5_04"},{"original":"SO3_B1+_SB_5B_Audio_VB5_01.mp3","file":"/audio/5B_VB5_01.mp3","code":"5B","track":"VB5_01"},{"original":"SO3_B1+_SB_5C_Audio_5_05.mp3","file":"/audio/5C_5_05.mp3","code":"5C","track":"5_05"},{"original":"SO3_B1+_SB_5C_Audio_5_06.mp3","file":"/audio/5C_5_06.mp3","code":"5C","track":"5_06"},{"original":"SO3_B1+_SB_5C_Audio_5_07.mp3","file":"/audio/5C_5_07.mp3","code":"5C","track":"5_07"},{"original":"SO3_B1+_SB_5C_Audio_MB5_01.mp3","file":"/audio/5C_MB5_01.mp3","code":"5C","track":"MB5_01"},{"original":"SO3_B1+_SB_5R_Audio_R5_01.mp3","file":"/audio/5R_R5_01.mp3","code":"5R","track":"R5_01"},{"original":"SO3_B1+_SB_6A_Audio_6_01.mp3","file":"/audio/6A_6_01.mp3","code":"6A","track":"6_01"},{"original":"SO3_B1+_SB_6A_Audio_6_02.mp3","file":"/audio/6A_6_02.mp3","code":"6A","track":"6_02"},{"original":"SO3_B1+_SB_6B_Audio_6_03.mp3","file":"/audio/6B_6_03.mp3","code":"6B","track":"6_03"},{"original":"SO3_B1+_SB_6C_Audio_6_04.mp3","file":"/audio/6C_6_04.mp3","code":"6C","track":"6_04"},{"original":"SO3_B1+_SB_6C_Audio_6_05.mp3","file":"/audio/6C_6_05.mp3","code":"6C","track":"6_05"},{"original":"SO3_B1+_SB_6C_Audio_6_06.mp3","file":"/audio/6C_6_06.mp3","code":"6C","track":"6_06"},{"original":"SO3_B1+_SB_6C_Audio_MB6_01.mp3","file":"/audio/6C_MB6_01.mp3","code":"6C","track":"MB6_01"},{"original":"SO3_B1+_SB_6D_Audio_6_07.mp3","file":"/audio/6D_6_07.mp3","code":"6D","track":"6_07"},{"original":"SO3_B1+_SB_6R_Audio_R6_01.mp3","file":"/audio/6R_R6_01.mp3","code":"6R","track":"R6_01"},{"original":"SO3_B1+_SB_7A_Audio_7_01.mp3","file":"/audio/7A_7_01.mp3","code":"7A","track":"7_01"},{"original":"SO3_B1+_SB_7A_Audio_7_02.mp3","file":"/audio/7A_7_02.mp3","code":"7A","track":"7_02"},{"original":"SO3_B1+_SB_7A_Audio_7_03.mp3","file":"/audio/7A_7_03.mp3","code":"7A","track":"7_03"},{"original":"SO3_B1+_SB_7A_Audio_7_04.mp3","file":"/audio/7A_7_04.mp3","code":"7A","track":"7_04"},{"original":"SO3_B1+_SB_7B_Audio_7_05.mp3","file":"/audio/7B_7_05.mp3","code":"7B","track":"7_05"},{"original":"SO3_B1+_SB_7B_Audio_VB7_01.mp3","file":"/audio/7B_VB7_01.mp3","code":"7B","track":"VB7_01"},{"original":"SO3_B1+_SB_7C_Audio_7_06.mp3","file":"/audio/7C_7_06.mp3","code":"7C","track":"7_06"},{"original":"SO3_B1+_SB_7C_Audio_7_07.mp3","file":"/audio/7C_7_07.mp3","code":"7C","track":"7_07"},{"original":"SO3_B1+_SB_7C_Audio_7_08.mp3","file":"/audio/7C_7_08.mp3","code":"7C","track":"7_08"},{"original":"SO3_B1+_SB_7C_Audio_7_09.mp3","file":"/audio/7C_7_09.mp3","code":"7C","track":"7_09"},{"original":"SO3_B1+_SB_7C_Audio_7_10.mp3","file":"/audio/7C_7_10.mp3","code":"7C","track":"7_10"},{"original":"SO3_B1+_SB_7R_Audio_R7_01.mp3","file":"/audio/7R_R7_01.mp3","code":"7R","track":"R7_01"},{"original":"SO3_B1+_SB_8A_Audio_8_01.mp3","file":"/audio/8A_8_01.mp3","code":"8A","track":"8_01"},{"original":"SO3_B1+_SB_8B_Audio_8_02.mp3","file":"/audio/8B_8_02.mp3","code":"8B","track":"8_02"},{"original":"SO3_B1+_SB_8B_Audio_8_03.mp3","file":"/audio/8B_8_03.mp3","code":"8B","track":"8_03"},{"original":"SO3_B1+_SB_8B_Audio_8_04.mp3","file":"/audio/8B_8_04.mp3","code":"8B","track":"8_04"},{"original":"SO3_B1+_SB_8B_Audio_VB8_01.mp3","file":"/audio/8B_VB8_01.mp3","code":"8B","track":"VB8_01"},{"original":"SO3_B1+_SB_8C_Audio_8_05.mp3","file":"/audio/8C_8_05.mp3","code":"8C","track":"8_05"},{"original":"SO3_B1+_SB_8C_Audio_8_06.mp3","file":"/audio/8C_8_06.mp3","code":"8C","track":"8_06"},{"original":"SO3_B1+_SB_8C_Audio_8_07.mp3","file":"/audio/8C_8_07.mp3","code":"8C","track":"8_07"},{"original":"SO3_B1+_SB_8C_Audio_MB8_01.mp3","file":"/audio/8C_MB8_01.mp3","code":"8C","track":"MB8_01"},{"original":"SO3_B1+_SB_8R_Audio_R8_01.mp3","file":"/audio/8R_R8_01.mp3","code":"8R","track":"R8_01"}]'),Ax=[{original:"SO3 B1+ U1 BBC StreetInt.mp4",file:"/video/u1-streetint.mp4",unit:1,kind:"streetint"},{original:"SO3 B1+ U1 BBC Vlogs.mp4",file:"/video/u1-vlogs.mp4",unit:1,kind:"vlogs"},{original:"SO3 B1+ U2 BBC Programmes.mp4",file:"/video/u2-programmes.mp4",unit:2,kind:"programmes"},{original:"SO3 B1+ U2 BBC Vlogs.mp4",file:"/video/u2-vlogs.mp4",unit:2,kind:"vlogs"},{original:"SO3 B1+ U3 BBC StreetInt.mp4",file:"/video/u3-streetint.mp4",unit:3,kind:"streetint"},{original:"SO3 B1+ U3 BBC Vlogs.mp4",file:"/video/u3-vlogs.mp4",unit:3,kind:"vlogs"},{original:"SO3 B1+ U4 BBC Programmes.mp4",file:"/video/u4-programmes.mp4",unit:4,kind:"programmes"},{original:"SO3 B1+ U4 BBC Vlogs.mp4",file:"/video/u4-vlogs.mp4",unit:4,kind:"vlogs"},{original:"SO3_B1+_U5_BBC_Street_Interviews_Video.mp4",file:"/video/u5-streetint.mp4",unit:5,kind:"streetint"},{original:"SO3 B1+ U5 BBC Vlogs.mp4",file:"/video/u5-vlogs.mp4",unit:5,kind:"vlogs"},{original:"SO3 B1+ U6 BBC Programmes.mp4",file:"/video/u6-programmes.mp4",unit:6,kind:"programmes"},{original:"SO3 B1+ U6 BBC Vlogs.mp4",file:"/video/u6-vlogs.mp4",unit:6,kind:"vlogs"},{original:"SO3 B1+ U7 BBC StreetInt.mp4",file:"/video/u7-streetint.mp4",unit:7,kind:"streetint"},{original:"SO3 B1+ U7 BBC Vlogs.mp4",file:"/video/u7-vlogs.mp4",unit:7,kind:"vlogs"},{original:"SO3 B1+ U8 BBC Programmes.mp4",file:"/video/u8-programmes.mp4",unit:8,kind:"programmes"},{original:"SO3 B1+ U8 BBC Vlogs.mp4",file:"/video/u8-vlogs.mp4",unit:8,kind:"vlogs"}],Ix=JSON.parse('{"1.01":"M = Marta T = Tim\\n\\nM: I’ve worn silver rings all my life. I got this ring in a street market when I was living in Italy for a few months. I bought it to replace a similar one that I’d lost. This one belonged to my mother and I inherited it when she died. It’s not worth a lot, but it’s very special to me. I borrowed this leather jacket from a friend when I was studying at university and I never gave it back. It’s a genuine 1980s leather jacket. When I was wearing it, I always thought it looked really cool. It’s a bit damaged now, but I still love it. I have a beautiful lemon tree that a friend gave me as a birthday present. I’d told her that I’d always wanted to live in a house with a lemon tree, so to make my dream come true, she bought me one. I was having a party to celebrate my thirtieth birthday, and in the middle of the party my friend arrived and gave me the lemon tree in a pot. So, now I grow my own lemons!\\n\\nT: I bought my Spanish guitar in a famous guitar shop in Madrid. Even when I open the case today, I can still smell the wood of the shop. I remember trying it out in a corner. I was quietly playing my favourite piece of music as I didn’t want to draw too much attention to myself. However, to my horror, the shopkeeper had listened to me playing and he asked me, ‘Are you a professional?’ Naturally, I bought the guitar quite soon after he’d asked that question! Six months later I returned to the shop to buy some new strings and there was someone else trying out a guitar. He was playing a piece of music I knew, but he wasn’t playing very well. The same shopkeeper was there and said to the man, ‘Wow, you must be a professional!’ Suddenly, I understood. I enjoy doing long-distance walks, preferably with friends. I bought these boots while I was travelling around New Zealand. I was about to head off for the Milford Track, quite a challenging four-day walk, and my old boots fell to pieces. I had one day to find a new pair. Years later, I still have those boots. They’re not in very good condition and they’re heavy, old, leather boots, but they’re still comfortable and they’re like old friends. I’ve had such great times with friends and family walking, talking and exploring. And this? It’s an Italian moka coffee pot. A friend gave it to me at university because he had watched me making instant coffee without much care or thought. He said, ‘The small ritual of a good coffee is too important to give up.’ We used to laugh at him for being so serious about things we thought were unimportant, but now every time I use the pot I realise that he was right. If you can’t enjoy little things, then you will never be happy.","1.02":"1 I was travelling around Australia.\\n\\n2 We were living in China.\\n\\n3 He was studying at university.\\n\\n4 I bought a new leather jacket to replace the one I had lost.\\n\\n5 My mother had given the ring to me\\n\\n6 He had seen me making coffee.","1.03":"1 I believe in living a simple life.\\n\\n2 He succeeded in finding his dream job.\\n\\n3 You should think about tidying your stuff.\\n\\n4 Concentrate on appreciating the simple things.","1.04":"1\\n\\nA: You’ve reached Café Roma. I’m afraid we’re busy at the moment. Please leave a message and we’ll get back to you.\\n\\nB: Hello. This is Marcelo Fagundes. I’m calling about my jacket. I was having dinner in your restaurant an hour ago and I left my jacket. Do you think you could have a look for it for me? It’s the leather jacket hanging on the hook by the stairs. Can you call me back? You can reach me on this number – 0779542867.\\n\\n2\\n\\nA: You’ve reached Sam’s mobile. Please leave a message.\\n\\nB: Hi Sam. It’s Mum. Could you check that the garage door is locked? I think I might have left it open. The key’s in the kitchen. You’ll find it on the table next to the window. Also, before you leave, will you take out the rubbish please, and make sure you turn the heating off ? Thanks. See you later.\\n\\n3\\n\\nA: I’m sorry I can’t take your call at the moment. Please leave a message\\n\\nB: Hi Riccardo. It’s Gemma. I’ve got a guest coming to stay in the apartment later. Would you explain the alarm system to her? You’ll need to unlock the box and show her how it works. That would be really helpful. Thanks.\\n\\n4\\n\\nA: Hi, you’re through to Jacob. I can’t take your call right now, but if you leave a message with your name and number, I’ll get back to you as soon as I can.\\n\\nB: Hi Jacob, it’s Patricia here. I wonder if you could bring my folder to the meeting? You’ll find it on my desk in the office. The meeting starts at 4 p.m., so we’ll need to be there at least fifteen minutes earlier. Could you please let me know that you’ve got this message? Thanks.\\n\\n5\\n\\nA: Noelie, it’s Pete. Listen, I was going to cook, but there’s no food in the house. Do you think you’ll be able to pick up some pizzas on the way home? There’s a great place just on the corner by the station. You choose the toppings. That would be great. Bye.\\n\\n6\\n\\nA: Thank you for calling Smiths and Co. Our office hours are 8 a.m. to 6 p.m. If it’s urgent, please leave a message with your name and number and we’ll contact you as soon as possible.\\n\\nB: Hello. This is Natalie Ivanov. I’m calling because we have a broken pipe in our house and the water is going everywhere! I need someone to come and fix it, please. Will you please call me back as soon as possible? It’s urgent. You can reach me on this number.\\n\\n7\\n\\nA: Hi, you’re through to Teresa. Please leave me a message and I’ll call you right back.\\n\\nB: Hi Teresa, it’s Yumi. I’m calling to ask a favour. I’m going away in a couple of weeks. I wonder if you’d mind watering the plants for me, like you did last time. I can leave the key with my neighbour. That would be so kind. Let me know. Bye.","1.05":"1 You’ve reached Café Roma.\\n\\n2 Please leave a message and we’ll get back to you.\\n\\n3 Thank you for calling Smiths and Co. Our office hours are 8 a.m. to 6 p.m.\\n\\n4 I can’t take your call right now, but if you leave a message with your name and number, I’ll get back to you as soon as I can.\\n\\n5 This is Marcelo Fagundes calling about ...\\n\\n6 It’s Patricia here ...\\n\\n7 You’ll need to unlock the ...\\n\\n8 You’ll find it on the table next to the ...\\n\\n9 Can you call me back?\\n\\n10 You can reach me on this number.","1.06":"1 Would you explain the alarm system to her?\\n\\n2 I wonder if you could bring my folder to the meeting?\\n\\n3 Could you please let me know that you’ve got this message?\\n\\n4 Do you think you’ll be able to pick up some pizzas on the way home?\\n\\n5 I wonder if you’d mind watering the plants for me.","1.07":"1 I wonder if you could bring my folder, please?\\n\\n2 Would you walk the dog, please?\\n\\n3 Do you think you’ll be able to come today?\\n\\n4 Will you pick up some food on the way home?","VB 1.01":"A They’re made of glass. B It’s made of wood. C It’s made of a diamond. D It’s made of plastic. E They’re made of cotton. F It’s made of silver. G It’s made of denim. H It’s made of rubber. I It’s made of steel. J They’re made of iron. K It’s made of gold. L It’s made of stone.","R 1.01":"The House that Jock Built When Elizabeth finally saw the house, it had been part of her family legend for 200 years. It had been built by Jock Phillip, her distant ancestor who had left Scotland for America aged sixteen, with nothing but the clothes on his back. Five years after arriving, he discovered a hidden treasure in\\n\\nCalifornia: a seam of gold, which he later mined. He had succeeded in changing his fortunes, and with his earnings he built his dream home. It was the ideal house, large and beautiful, a house to pass down from generation to generation. It belonged to his children, then his grandchildren, and so on. When Elizabeth was young, she remembered hearing stories about it. For this reason she had always dreamed about visiting the house. Finally, her chance came. While she was driving there, she suddenly felt a sense of sadness. She arrived and saw immediately that the house was badly damaged. The walls, made of stone, were falling down, and the windows were long gone. Birds had made their homes in the roof.","MB 1.01":"You’ve got through to Well Gym. Press 1 to book a personal trainer. Press 2 to book the pool. Press 3 to speak to someone. We’re really busy right now. Continue to wait or maybe call back later. While you’re waiting, why don’t you leave us a five-star review online? We’re really busy right now. Continue to wait or maybe call back later. While you’re waiting, why don’t you leave us a five-star review online?","MB 1.02":"J = Janel R = Rich L = Lesley\\n\\nJ: So, everyone hates our automated message. Can we share one idea each about how we can change this?\\n\\nR: I think it’s the music. It’s so stupid. It’s just the same thing again and again and again ...\\n\\nJ: OK, Lesley, what are your thoughts on it? Does the music need changing?\\n\\nL: Yes, Rich is right, it’s so annoying and it doesn’t help people relax while they’re waiting.\\n\\nJ: Agreed. Also, I think the guy’s voice is a bit boring. What does everyone else think?\\n\\nR: I like his voice.\\n\\nL: I agree with Janel, and he speaks reeeally slooowly, too.\\n\\nJ: OK, so that’s the music and the guy’s voice, now let’s talk about the actual messages. How does everyone feel about …","2.01":"1 How long have you been studying English?\\n\\n2 I’ve been studying since I was ten.\\n\\n3 Have you been living in the same place for a long time?\\n\\n4 I’ve been living there for five years.","2.02":"1 How long have you been studying English?\\n\\n2 I’ve been studying since I was ten.\\n\\n3 Have you been living in the same place for a long time?\\n\\n4 I’ve been living there for five years.","2.03":"1\\n\\nA: Help you with your work? Well, I’m a bit busy but … sure, I can help.\\n\\nB: He’s …\\n\\n2\\n\\nA: Can I say something? Erm, well, your hair looks great, but the jacket is horrible.\\n\\nB: She’s …\\n\\n3\\n\\nA: My phone … Where is it … ? I can’t find it! Oh no, what am I going to do without my phone?\\n\\nB: He’s …\\n\\n4\\n\\nA: I’m having a bad day. Go away! Leave me alone!\\n\\nB: She’s …\\n\\n5\\n\\nA: Oh, I really want to go dancing. Come on, let’s go dancing!\\n\\nB: He …\\n\\n6\\n\\nA: I’m so sorry. It’s my mistake. I feel so bad that I’ve hurt you.\\n\\nB: She’s …\\n\\n7\\n\\nA: No, no, no, I agree with you, really! Really, no need to discuss it, you’re right!\\n\\nB: He’s…\\n\\n8\\n\\nA: It’s so easy to talk to you. I’m totally relaxed whenever we have a conversation.\\n\\nB: She …","2.04":"G = Greta C = Colin A = Anna\\n\\nG: Am I a people pleaser? Well, when someone asks me to do them a favour, I almost always say yes. For instance, last week when my manager asked me to stay and work late, I just said yes without thinking. And I do that all the time. I’m always the person who stays late or does extra work. I think the problem is that I care too much about what other people think of me. Like when I buy a new dress and wear it for the first time. I know it’s crazy, but I don’t really feel comfortable until someone says something nice about it. And it’s even better if I don’t know the person saying it. And if someone makes a negative comment, I get really upset and I might never wear that dress again.\\n\\nC: I’ll do anything to avoid an argument. I just listen to other people’s opinions or what they want and agree with them. It’s just easier that way. Like when my friend says, ‘Let’s go and get a pizza’ and I feel like having sushi. I just do what he wants. We always have pizza. One of my friends recently said I don’t seem to have my own opinions. He isn’t the first person to tell me that. It’s true, when I’m in a group of classmates at college and we’re discussing something, I don’t say very much. I listen, and then I basically agree with the majority. For example, last weekend I was out with some friends. We were talking about a film we’d just seen and my friends really liked it. I thought it was boring, but I didn’t say so. I don’t know why. It makes life easier, I suppose.\\n\\nA: It’s important to me that people like me. But I think people who care too much about other people’s opinions are wasting their time. For example, on social media I don’t pay attention to comments that are negative. I don’t get upset. It’s not my problem. Maybe the person is just in a bad mood. Yeah, basically, I’m a very positive person, but I don’t go with the crowd. Like at work in a meeting. If someone has an idea and I think it’s terrible, I’m the first person to say, ‘I really don’t think that will work’, even if everyone else thinks it’s a good idea.","2.05":"1 &\\n\\n2 I try to avoid people who lie.","2.06":"1 I’m someone who feels comfortable talking to big groups.\\n\\n2 The person I always ask to help me with problems is my brother.\\n\\n3 One situation I really hate is when I forget someone’s name.\\n\\n4 I’m usually the first person to give my opinion.\\n\\n5 The thing I love most about my country is the weather.\\n\\n6 I think people living in foreign countries should learn the language.","2.07":"A: Sorry I’m late. I had a really bad journey.\\n\\nB: Why? Were there a lot of people on the train?\\n\\nA: No, not many, but it’s just the way some people behave. I can’t stand it.\\n\\nB: Why, what happened?\\n\\nA: Everything. First I had to queue to buy a ticket because the ticket machines were broken.\\n\\nB: I hate it when that happens.\\n\\nA: And of course people were jumping the queue, saying they were in a hurry and could they please go in front of me.\\n\\nB: Maybe they were in a hurry.\\n\\nA: Right. Like I wasn’t?\\n\\nB: All right.\\n\\nA: Then I got on the train, sat down – there were lots of empty seats – and this guy sat down next to me, took out a burger and started to eat it.\\n\\nB: Yuk! People are always doing that on trains! I expect it smelled bad.\\n\\nA: Yeah, the smell was terrible! It really got on my nerves. I kept looking at him, you know like this, but he didn’t react. So annoying.\\n\\nB: Sometimes it’s better if you don’t react.\\n\\nA: You mean do nothing? Maybe. Anyway, after two stops he got off … but then three teenagers got on and they were watching a football match. Really loud.\\n\\nB: You really did have a bad time.\\n\\nA: And then one of them opened some windows and it was like a tornado. It blew my hair all over the place.\\n\\nB: I know what you mean, without asking anyone?\\n\\nA: Yeah, it really annoys me when they do that.\\n\\nB: You’re always getting so upset about things. And you’re here now.\\n\\nA: But that sort of behaviour really bugs me. And I’m not finished.\\n\\nB: There’s more?\\n\\nA: I was so annoyed that I didn’t pay attention to where we were, and I missed my stop.\\n\\nB: It really doesn’t matter. Look, let’s get something to eat.\\n\\nA: OK, sorry …","2.08":"1\\n\\nB: Were there a lot of people on the train?\\n\\nA: No, not many, but it’s just the way some people behave. I can’t stand it.\\n\\n2\\n\\nA: First I had to queue to buy a ticket because the ticket machines were broken.\\n\\nB: I hate it when that happens.\\n\\n3\\n\\nB: People are always doing that on trains. I expect it smelled bad.\\n\\nA: Yeah, the smell was terrible! It really got on my nerves.\\n\\n4\\n\\nB: I know what you mean, without asking anyone?\\n\\nA: Yeah, it really annoys me when they do that.\\n\\n5\\n\\nB: You’re always getting so upset about things. And you’re here now.\\n\\nA: But that sort of behaviour really bugs me.","2.09":"1 I can’t stand it when people take a long time to pay.\\n\\n2 It annoys me when they try to sell me something I don’t want.\\n\\n3 It drives me crazy when people eat food while shopping.\\n\\n4 I hate it when I can’t reach something on the top shelf.\\n\\n5 I can’t bear it when food is packaged in too much plastic.\\n\\n6 People are always jumping the queue.","2.10":"A: These are really interesting questions.\\n\\nB: Yes, I thought so, too.\\n\\nA: But in some of these situations you could just run away.\\n\\nB: So, in which situations would you run away?\\n\\nA: If I saw a snake in my bedroom. I would … I’d freeze actually.\\n\\nB: And then what?\\n\\nA: Then I’d move very slowly to get to the door and then run away, as fast as I could. You?\\n\\nB: It depends how big the snake is.\\n\\nA: Here’s another question. You’re alone at a friend’s house and it’s winter. Someone knocks on the door. It’s ten o’clock at night.\\n\\nB: Well, do I have a choice of answering or not?\\n\\nA: How do you mean?\\n\\nB: I could just ignore it.\\n\\nA: Is that what you’d do?\\n\\nB: Yes, I suppose so. How about this one? You’re on a train and the person opposite you drops their empty drink can on the floor.\\n\\nA: That’s a tricky one. I’m the kind of person who … well, I’d like to say that I’d immediately say something, but … You know ...\\n\\nB: I don’t quite get what you mean.\\n\\nA: I mean that I could say that I’d ask them to pick up their rubbish, but I think that in real life I’d hesitate.\\n\\nB: Why’s that?\\n\\nA: Maybe the person would get angry. And it depends on whether they’re with their friends or if they’re bigger than me.\\n\\nB: Do you mean that it might be better not to say anything?\\n\\nA: That’s what I mean I guess. I’d probably get up and walk away. I might give them a hard look! Like this. What would you do?\\n\\nB: Oh, no question in my mind. I would definitely …","R 2.01":"Taking the pain out of the wait Waiting in a queue drives most people crazy, and that’s bad for business. So businesses make a lot of effort to solve this. When high-rise buildings became common, waiting for the lift was frustrating for anyone who was in a hurry and there were lots of complaints. So mirrors were put next to the lift s, and complaints dropped because it gave people something to look at while waiting. An airport was constantly getting complaints about the long wait for baggage. When they moved the arrival gates further away, complaints stopped, and no one got upset about the longer walk. When a new electronic product comes out, there can be long queues, and people camping outside a shop can be a real problem. Danish researchers found a solution: serve the last people to arrive first. That way there’s no reason to show up early. As far as we know, no other countries are planning to try out the Danish solution – we can guess how people might react to it. Most people would probably stick to their belief that first-come, first-served is fair, and anyone jumping the queue is just behaving rudely.","3.01":"1\\n\\nA: How was your day?\\n\\nB: Great, I got a lot done. I finished my essay, had lunch with a friend, went to an online seminar and then played tennis.\\n\\n2\\n\\nA: This homework is really difficult. I’ll do it later.\\n\\nB: No, do it now. You should get it out of the way.\\n\\n3\\n\\nA: What time will lunch be? I need to tell the people in the café.\\n\\nB: Sorry, we’re a bit late. We’ve fallen behind schedule by about fifteen minutes. So I think it’ll be at quarter past one.\\n\\n4\\n\\nA: Is your new job hard?\\n\\nB: Yes, but I enjoy dealing with a challenge.\\n\\n5\\n\\nA: You look good. Where have you been?\\n\\nB: For a swim. I always keep to a routine: 6 o’clock get up, 6.30 go for a swim.\\n\\n6\\n\\nA: Is it OK if I turn the TV on?\\n\\nB: Well, not really. I’m trying to avoid distractions. The sound of the TV would bother me. 159 AUDIOSCRIPTS\\n\\n7\\n\\nA: What’s wrong?\\n\\nB: It’s that music from next door. It’s making me lose concentration. I can’t think!\\n\\n8 A We’ve only got two days to finish the report!\\n\\nB: Yes, do you think we’ll meet the deadline?","3.02":"1 got a lot done. 2 get it out of the way. 3 fallen behind schedule. 4 dealing with a challenge. 5 keep to a routine. 6 to avoid distractions. 7 lose concentration. 8 meet the deadline.","3.03":"A = Andrea P = Paul C = Cybil\\n\\nA: … and that’s one of the dangers. It’s not true of all gig work, but with some jobs, where you’re working for a big company, you still have a boss, and there’s a possibility that they will exploit you – get you to work extra hours and for low pay. Gig workers aren’t very well protected, and many of us involved in the industry feel that something needs to be done about the rights of gig workers. And now we’re going to hear from two of our special guests, Paul and Cybil, both of whom have been doing gig work for some years now, but with very different stories. Paul, give us a quick summary of how you ended up doing gig work, and what it is that you actually do.\\n\\nP: So, two years ago I lost my job at a marketing company, couldn’t find another one, so I started delivering online orders for a supermarket. I was surprised, it was actually fun at first. I enjoyed driving, and I learnt to deal with a lot of different people and handle different problems! The money wasn’t great – I couldn’t rent a flat so I had to move back in with my parents for a while.\\n\\nA: So the money side isn’t so good?\\n\\nP: Not for me, no. I’ve picked up a few more gigs – I drive for a ride-hailing company, and I deliver furniture for a big store. I like it because you’re allowed to choose when you work, but you have to work long hours to earn enough money. And you feel pressure to do all the work they offer you. I feel as if I’ve got to say yes to every offer that comes along … so I do.\\n\\nA: So if you were offered a permanent job, would you take it now?\\n\\nP: I really don’t know. It would depend, probably on the money!\\n\\nA: Thanks Paul. A lot of people end up doing gig work because it’s the only option they have. Other people choose gig work as a sort of lifestyle choice. You’re one of those people, aren’t you Cybil?\\n\\nC: Yes, I’ve always had three or four jobs, so gig work is normal for me. I don’t even call it gig work, it’s just work. When people ask me what I do, I’m not sure where to start, so I say ‘This and that’. Then they always want to know more, so I give the list – I’m a dog walker, a babysitter … I love working with kids so I do children’s parties, you know face painting, organising games … Sometimes I teach art in schools, but as a one-off, not a steady thing. A friend of mine has a catering business, and she hires me for day jobs now and then. I don’t love all of the work, but I do enjoy some of it.\\n\\nA: So it’s necessary to find a balance, to do enough work that you actually like doing.\\n\\nC: Yes, you’ve got to make sure that at least some of the jobs really suit you. And still leave yourself time for what you really love doing outside of work.\\n\\nA: Let me guess. Is that art?\\n\\nC: Yes! My real passion is painting, so I do that when I get time.\\n\\nA: And what’s a typical day or week like for you?\\n\\nC: My days are completely unpredictable. I have weeks when I work seven days, and very long days, then weeks with nothing. That’s when I paint! The regular work, the dog walking and babysitting, doesn’t bring enough money to pay for all the basic things, and that can be a problem. After a few weeks I get stressed if other work isn’t coming through. I can’t get sick – no work, no pay – and I don’t get paid holidays. It’s essential to have savings for times like this, for going on holiday or if I get ill. I try and organise things so that I always have some savings.\\n\\nA: Where do you see yourself in, say, five years?\\n\\nC: You know, some of my friends ask me that question and my parents ask it a lot. People act like you’re supposed to have a big goal in life, a work-related goal, to earn so much money and climb to the top of the ladder. That’s not for me, I’m OK with what I do. I just need enough to live on and to give me time for my painting.\\n\\nA: I completely agree with you Cybil, thank you for making that point. So now we’ll open the webinar to questions. Please type your questions – for me, Paul or Cybil, in the comments box, and we’ll answer them as best we can.","3.04":"1 Something needs to be done about the rights of gig workers.\\n\\n2 I like it because you’re allowed to choose when you work.\\n\\n3 I feel as if I’ve got to say yes to every offer that comes along.\\n\\n4 It’s necessary to find a balance, to do enough work that you actually like doing.\\n\\n5 It’s essential to have savings for times like this for going on holiday or if I get ill.\\n\\n6 People act like you’re supposed to have a big goal in life.","3.05":"2 I like it because you’re allowed to choose when you work.\\n\\n3 I feel as if I’ve got to say yes to every offer that comes along.\\n\\n6 People act like you’re supposed to have a big goal in life.","3.06":"1 confident 2 enthusiastic 3 flexible 4 independent 5 professional 6 responsible 7 sensitive 8 willing","3.07":"A: Hi, how are you today?\\n\\nB: Very well, thank you.\\n\\nA: Have a seat.\\n\\nB: Thank you.\\n\\nA: So, tell me a bit about yourself.\\n\\nB: Oh, erm, where should I start?\\n\\nA: Let’s keep it work-related.\\n\\nB: All right. I’ve always loved working with computers, and doing coding. I get an idea for a new app, and I sit and create it. I’d love to show you some of my work.\\n\\nA: So you like to work alone.\\n\\nB: Not really, and this is what I wanted to say, that I think I’m not a typical IT person in that I like being with people, working as part of a team. It’s important to me to have personal contact, even if the work itself is sort of … solo work.\\n\\nA: So why are you here today?\\n\\nB: How do you mean?\\n\\nA: Why do you want this job?\\n\\nB: I’ve done some research about the company and I think it’s doing the best work in app development. I want to be part of that, and I think I have a lot to offer.\\n\\nA: OK, so what will you bring to the company?\\n\\nB: I think one of my main strengths is that I have a problem- solving mind, and I bring in a lot of creativity in solving problems. And I’m a fast learner. I’ve learnt most of what I know just by doing. And as I said, I like working in a team.\\n\\nA: Tell me about a time you had a problem with a co-worker. How did you handle that?\\n\\nB: Hmmm … Can I use an example from university?\\n\\nA: Sure.\\n\\nB: At the end of my last year, we were doing a team project that was basically my thesis. There were four of us. Developing a prototype scheduling app. And the other three people kind of let me do all the work. That made me angry.\\n\\nA: And how did you deal with that? 160 AUDIOSCRIPTS\\n\\nB: I don’t think I dealt with it very well. I didn’t confront them. I just did the work, and they took part of the credit.\\n\\nA: How do you think those three classmates would describe you?\\n\\nB: Oh, good question.\\n\\nA: So … ?\\n\\nB: You know, in the end I think they respected me. I think they would say I’m professional and responsible, that I get the job done and do it well. They would definitely call me independent. That can be a good thing, I think.\\n\\nA: Is that all they would say?\\n\\nB: Are you asking what criticisms they might have?\\n\\nA: You could put it that way.\\n\\nB: I suppose they would say I’m not very flexible. In that situation, I had a clear idea of how the work should go. I wanted everyone to follow that.\\n\\nA: And is it true?\\n\\nB: Is it true that I’m not very flexible?\\n\\nA: Yes, that’s what I’m asking.\\n\\nB: Well, I think I’ve grown up a lot since then. I think people would say that I’ve become more open to others’ ideas.\\n\\nA: OK. I have more questions, but let’s turn things around for a bit. What questions do you have for me?\\n\\nB: About the job?\\n\\nA: About the position, the company, anything.\\n\\nB: Well, first of all I’d like to ask …","3.08":"1\\n\\nA: So, tell me a bit about yourself.\\n\\nB: Oh, erm, where should I start?\\n\\nA: Let’s keep it work-related.\\n\\nB: All right.\\n\\n2\\n\\nA: So why are you here today?\\n\\nB: How do you mean?\\n\\nA: Why do you want this job?\\n\\nB: I’ve done some research about the company and I think it’s …\\n\\n3\\n\\nB: I want to be part of that, and I think I have a lot to offer.\\n\\nA: OK, so what will you bring to the company?\\n\\nB: I think one of my main strengths is that I have a problem- solving mind …\\n\\n4\\n\\nA: I have more questions, but let’s turn things around for a bit. What questions do you have for me?\\n\\nB: About the job?\\n\\nA: About the position, the company, anything.","VB 3.01":"1 inappropriate 2 uncertain 3 unclear 4 unconfident 5 independent 6 unemployed 7 unenthusiastic 8 inexpensive 9 unfair 10 inflexible 11 informal 12 unhealthy 13 unlucky 14 unnecessary 15 unpopular 16 unprofessional 17 irregular 18 irresponsible 19 insensitive 20 unwilling","R 3.01":"Remote working on the rise Working from home is no longer only for the self-employed. Based on the experience of recent years, companies have discovered that some employees are happier when working remotely. The employee works from home, a favourite café, wherever they want, but it’s essential that they’re connected all the time, in case a colleague wants to reach them. They take responsibility for keeping to a routine so that they meet their deadlines and don’t fall behind schedule in their work. The company saves on the costs of renting office space, and the employee saves the cost of commuting. There are downsides too, of course. Remote workers can feel isolated, unless they have regular contact with someone. And they have to find ways to avoid distractions. A person who isn’t independent might prefer working in an office, but if a person is flexible and willing to deal with the challenge of turning their home into their workplace, it’s ideal.","MB 3.01":"1\\n\\nA: OK, so you chose Laura, right?\\n\\nB: That’s right.\\n\\nA: And what were your reasons for choosing Laura?\\n\\nB: She just seems like a nice person.\\n\\nA: Bella has more experience. Why not Bella?\\n\\nB: Because she wants to get paid and none of the other volunteers do.\\n\\n2\\n\\nA: So, who did you prefer?\\n\\nC: OK, so I think Bella is the best person for the role.\\n\\nA: Ah, I see. Why exactly do you think that?\\n\\nC: It’s obvious, she has the most experience.\\n\\nA: But she wants to be paid. Laura and Trent don’t want that.\\n\\nC: Yes, I know, but I think she’s worth it.\\n\\n3\\n\\nA: Any thoughts?\\n\\nD: Well, I would choose Trent.\\n\\nA: OK, he’s an interesting choice. Can you explain why you picked him?\\n\\nD: I thought he was a very positive person, that’s important.\\n\\nA: What about Laura?\\n\\nD: Hmm, not for me.\\n\\nA: Can you explain your thinking?\\n\\nD: She seemed a little nervous. Maybe it would be hard for her to talk to strangers.","4.01":"1 scheme 2 doubt 3 sign 4 answer 5 would 6 listen","4.02":"1 Can I ask what you think of this documentary?\\n\\n2 Could you tell me when the film starts?\\n\\n3 Do you know where I can see it?\\n\\n4 Isn’t that the documentary you were telling me about?\\n\\n5 Didn’t you watch it?","4.03":"P = Presenter A = Amy D = Dave\\n\\nP: Hello and welcome to the Documentary Podcast, where today we’re looking at the power of a documentary to change the way we think about the world. We have two guests with us in the studio and they’re going to tell us about some of their favourite documentaries. Let’s start with you, Amy.\\n\\nA: Hello.\\n\\nP: First of all, Amy could you tell us what your documentary is called?\\n\\nA: Yes, I’m going to talk about My Octopus Teacher .\\n\\nP: OK, so what’s it about?\\n\\nA: It’s the extraordinary story of a diver who makes friends with a wild octopus over the period of a year.\\n\\nP: That sounds unusual. And can you explain what you found so interesting about it? What did you learn?\\n\\nA: Well, the film-maker, Craig Foster, was basically suffering from stress at work, so he decided to spend some time freediving to get close to nature. And he spotted this wild octopus and then decided to go back to the same spot and film every day for a year. The underwater filming is very dramatic. I’d never seen anything so beautiful on screen. But it also gives us these amazing insights into the life of an octopus. I learnt a lot about how these creatures live. 161 AUDIOSCRIPTS\\n\\nP: Aren’t octopuses supposed to be really intelligent?\\n\\nA: Yes, they are. And that’s the point. As we watch, we see how Foster gets to know this one octopus really well. And the octopus starts to recognise him, to get to know him. When he arrives, the octopus comes out to play. As the year progresses, Foster starts to learn about himself from his relationship with the octopus. He starts to think about his relationships with people and how he could improve them.\\n\\nP: Hence the name My Octopus Teacher .\\n\\nA: Exactly. He starts to look at the world differently because of the time he spends underwater. It’s a very intelligent film in that it makes you realise just how important our oceans are and how we need to protect them. And the whole film is really enjoyable. My family loved it.\\n\\nP: That sounds great. Definitely one to watch.\\n\\nD: I don’t know if I should say this, but I saw My Octopus Teacher , and I found it a bit disappointing.\\n\\nA: Oh no!\\n\\nP: Really? Didn’t you like it? Why not?\\n\\nD: It was really slow. A lot of the film just shows footage of the octopus. I found it a bit boring.\\n\\nA: Didn’t you think that was amazing to watch? I thought it was beautiful …\\n\\nD: No, I just didn’t find it very exciting. Maybe it’s not my kind of thing.\\n\\nP: Right, isn’t it interesting how we can have different reactions to the same documentary, Dave? So, can you tell us about one you did enjoy? Isn’t your documentary also about nature?\\n\\nD: Yes, I’m going to talk about The Salt of the Earth .\\n\\nA: Oh, wasn’t that the one about the photographer? Um … Salgado?\\n\\nD: That’s right, yes.\\n\\nP: Excellent. Could you tell us about it?\\n\\nD: Well, it’s a really powerful documentary about the life and work of photographer Sebastião Salgado. Salgado travelled the world taking photographs and documenting the different natural environments and also the people who live in them.\\n\\nP: So wouldn’t you say it’s more about people than about nature?\\n\\nD: Well, I think it’s both. With his beautiful photography he encourages us to think about some of the biggest problems facing humanity. He tells the story of the shocking conditions that many people around the world often have to live in. So, it forces us to examine human nature and try and learn from our mistakes instead of repeating them again and again.\\n\\nP: That sounds fascinating. And it’s obviously such an important topic.\\n\\nD: Yes, absolutely. I thought it was a wonderful documentary that really makes you think about the world.\\n\\nA: That’s exactly what I thought about My Octopus Teacher . I loved The Salt of the Earth too, though. I thought it was stunning, very powerful. You can’t watch something like that and not come away with a different viewpoint. The way it …","4.04":"Conversation\\n\\n1\\n\\nA: Have you seen that story about the kid in the zoo?\\n\\nB: No, what happened?\\n\\nA: Haven’t you seen it? It went viral. Look, I’ll show you. Oh, my battery’s dead. So there was this little kid in the zoo with his parents, right?\\n\\nB: Yeah.\\n\\nA: So, basically, what happened was that he was feeding the giraffe and the mother was filming him. So he holds up a big leaf to feed the giraffe. And the giraffe takes the leaf and pulls his head upwards, really high, and the kid is still holding onto the branch with the leaf, so the giraffe lifts the boy up into the air, really high. It’s hilarious!\\n\\nB: Oh no! That sounds scary.\\n\\nA: No, the kid was fine – the dad pulls him down. It’s just really funny … Conversation\\n\\n2 A Have you heard about the fire?\\n\\nB: What fire?\\n\\nA: In town. Didn’t you see the smoke?\\n\\nB: No, what happened?\\n\\nA: The supermarket caught fire. It’s all over the news.\\n\\nB: Really?! I had no idea. How did that happen?\\n\\nA: I don’t know. It seems there might have been an electrical fault or something.\\n\\nB: Was anyone hurt?\\n\\nB: No, everyone’s fine. Luckily, the supermarket was closed, so it was empty at the time.\\n\\nA: Oh, that’s a relief!\\n\\nB: But the whole building pretty much burned down. Conversation\\n\\n3\\n\\nA: Did you hear the news about Sean Davies?\\n\\nB: No. What happened?\\n\\nA: He’s quit his job as manager.\\n\\nB: Really? I had no idea!\\n\\nA: Yes. I saw it on the news. He was less than two months into his contract. I can’t remember the details, but basically, it seems like he’s going to manage a different team.\\n\\nB: Wow, that’s quite a scandal, after all that money he was paid! Conversation\\n\\n4\\n\\nA: Have you seen what’s happening at the airports?\\n\\nB: No, what do you mean?\\n\\nA: Loads of flights have been cancelled because of the weather. Apparently, thousands of people are stuck at the airport. It’s on all the news channels.\\n\\nB: That reminds me of that time we got stuck in Athens. Do you remember?\\n\\nA: Yes, we had to wait all night in the airport. It was awful … Conversation\\n\\n5\\n\\nA: Are you following the news about the protests?\\n\\nB: Yes, it’s received a lot of coverage. It’s terrible. Apparently, the protesters have taken over the university buildings and they’re refusing to leave.\\n\\nA: I know. It all happened so quickly. I can hardly believe it.\\n\\nB: Yes, there was an announcement that if they didn’t leave, they would all be arrested.\\n\\nA: That’s unbelievable!","4.05":"1 So, basically, what happened was …\\n\\n2 Apparently, thousands of people are stuck at the airport.\\n\\n3 Basically, it seems like he’s going to manage a different team.\\n\\n4 Apparently, now the protesters have taken over the university buildings.","4.06":"N = Nikolas J = Jade\\n\\nN: Hi, Jade – is that you?\\n\\nJ: Wow, Nikolas! How amazing to see you!\\n\\nN: This is crazy … How long is it since we’ve seen each other?\\n\\nJ: Oh, I don’t know … about … um …\\n\\nN: Maybe five years or so.\\n\\nJ: Yeah, probably. I thought you were living in New Zealand.\\n\\nN: That’s right, but I moved back a while ago.\\n\\nJ: OK. Are you still working for that film company?\\n\\nN: Ah … no, actually, I’m freelance now. I’m still a director, but I work for myself.\\n\\nJ: Wow, that’s amazing.\\n\\nN: Yeah, I can’t complain. How about you?\\n\\nJ: I’m still in the bakery.\\n\\nN: Really?!\\n\\nJ: Yes, I love it there. It’s such a nice team of people to work with.\\n\\nN: So do you still see Rob at all?\\n\\nJ: Yes, he lives around here. I see him all the time. You know he’s married now.\\n\\nN: No! Is he really? Wow.\\n\\nJ: Yeah, he’s got two small kids. 162 AUDIOSCRIPTS\\n\\nN: Really?! I can’t believe it!\\n\\nJ: I know! How about you? Are you married, in a relationship?\\n\\nN: Uh, no. No, I’m … you know … it’s just me.\\n\\nJ: And do you still ski?\\n\\nN: Yes, whenever I can. You know I passed my exams to be a ski instructor?\\n\\nJ: Really?! That’s great. You always said you wanted to do that.\\n\\nN: Well remembered. Yes, I did. I took the course last year, so now I can teach during the ski season.\\n\\nJ: That’s brilliant. I’m so pleased to hear that. It’s amazing bumping into you. We should maybe get together sometime, and catch up properly.\\n\\nN: Yes, I’d really like that. Perhaps we can get Rob to come, too.\\n\\nJ: Great idea. I’ll send him a message telling him I saw you. Have you still got the same number?\\n\\nN: Yeah, I have … you should have it.\\n\\nJ: Ah yes, here it is. I’ll send you mine. It’s really great to see you again.\\n\\nN: Yes, you too.\\n\\nJ: Stay in touch.\\n\\nN: I will. See you soon.","R 4.01":"Facts and fiction: when Hollywood gets it wrong The film industry exists to tell us stories and sell us dreams. But are films supposed to tell the truth? Aren’t they a mixture of fact and fiction? Read these examples of Hollywood getting the details wrong and judge for yourself. A scene from Apollo 13 is set in April, 1970. Astronaut Jim Lovell’s daughter holds The Beatles’ album Let It Be . It’s a good scene, but can anyone explain how she had this album, which didn’t come out until May, a month later? In Raiders of the Lost Ark , set in 1936, a map appears on screen, showing Indiana Jones’s journey. We read the name Thailand. You might ask, ‘Is this a problem? Wasn’t this possible?’ The journey certainly was, but Thailand wasn’t named ‘Thailand’ until 1939. It was Siam before that. Occasionally, the director makes deliberate mistakes. Sofia Coppola’s Marie Antoinette is all about the queen of the same name, who was born in 1755. In one scene, there’s a pair of Converse trainers. (The shoe company was founded in 1908.) Coppola thought this would be a way to show how young Marie Antoinette was.","5.01":"1 calm, shy 2 patient, pleasant 3 direct 4 confident, sensible 5 aggressive","5.02":"Conversation\\n\\n1\\n\\nA: Good morning. How can I help you?\\n\\nB: Good morning. I’m here to make a complaint about a chair I bought from you.\\n\\nA: OK. I’ll need some details. Can I have your name?\\n\\nB: Yes, it’s Elinor McDonnell. That’s M-c-D-o-n-n-e-l-l. Capital D.\\n\\nA: Ms or Mrs?\\n\\nB: Mrs.\\n\\nA: So Mrs McDonnell, can you explain exactly what happened?\\n\\nB: Yes, I bought one of your office chairs for my son’s work desk, and yesterday he was sitting in the chair … He leant back and it broke. The metal piece holding the seat just snapped, and the whole seat fell off. He almost broke his arm!\\n\\nA: I’m sorry to hear that. When exactly did you buy it?\\n\\nB: It was about three years ago.\\n\\nA: Three years. Could you give me the exact date?\\n\\nB: I don’t know the exact date. But that’s not the point. The design’s obviously faulty. It’s not normal for a chair to break.\\n\\nA: We will need the receipt so as to check the date when you bought the chair. If it’s over three years ago, we won’t be able to help.\\n\\nB: But that’s outrageous! My son could have been seriously hurt. This shouldn’t happen even if the chair’s not brand new.\\n\\nA: I’m sorry, but there’s nothing I can do about it. The warranty is for three years.\\n\\nB: This isn’t good enough. I want to speak to your manager.\\n\\nA: My line manager isn’t here at the moment. He should be back in an hour. If you give me your number, he can give you a ca–\\n\\nB: What do I have to do in order to get someone to help me? Listen, get me your supervisor right here, right now or I’m going public with this. On social media.\\n\\nA: Just a moment. I’ll give him a call. Conversation\\n\\n2\\n\\nC: Good morning. Customer Service. Francisca speaking.\\n\\nD: Hi Francisca. My name’s Filip. Look, I’m really not happy with the situation with my luggage. I was wondering if you could help.\\n\\nC: Can you give me your full name ?\\n\\nD: Of course. My name’s Matas, that’s M-A-T-A-S, Filip Matas.\\n\\nC: And the nature of your complaint?\\n\\nD: Well, my luggage got lost two days ago. I flew in from Lima and had a stopover in Madrid, but my suitcase never arrived here. I spoke to one of your colleagues yesterday and he assured me it would be here today, but it hasn’t arrived.\\n\\nC: I’ll need to take the flight number so that I can check what has happened.\\n\\nD: Of course. It was ESE1472.\\n\\nC: Let me check the record on this … Oh yes. It says the suitcase was delivered to your address this morning.\\n\\nD: Well, then we have a huge problem here, because it wasn’t delivered. I’ve been here all day. Look, I know it’s not your fault, but this really isn’t good enough. Do you think you could find out exactly what’s happening?\\n\\nC: Yes, it does sound wrong. I’ll phone the delivery company this morning.\\n\\nD: Is it possible to do it now? I can hold on so as not to waste time. I really need to know what’s happening.\\n\\nC: Just a minute, I’ll put you on hold.\\n\\nD: Thank you so much. I really appreciate your help.","5.03":"1 snapped – He leant back and it broke. The metal piece holding the seat just snapped, and the whole seat fell off. 2 faulty – The design’s obviously faulty. It’s not normal for a chair to break. 3 outrageous – But that’s outrageous! My son could have been seriously hurt. 4 brand new – This shouldn’t happen even if the chair’s not brand new. 5 warranty – I’m sorry, but there’s nothing I can do about it. The warranty is for three years. 6 assured – I spoke to one of your colleagues yesterday and he assured me the suitcase would be here today.","5.04":"1 The best ever advert I’ve seen was one for jeans.\\n\\n2 TV ads are becoming more and more like mini films.\\n\\n3 Phones are getting cheaper and cheaper.\\n\\n4 The more I buy the better I feel.","5.05":"A: So have you made up your mind?\\n\\nB: Well, yes and no. I messaged Sam and he had some good advice. And I’ve read a lot about e-bikes, you know, reviews and websites, everything.\\n\\nA: So, what did Sam say?\\n\\nB: Well he was really helpful. From what he says, it depends on what you want to use it for. I just want a bike to get to work and do the shopping, so I thought a commuter bike would be perfect. 163 AUDIOSCRIPTS\\n\\nA: But?\\n\\nB: But Sam made a good point, that if I ever want to use the bike outside the city, go into the forest or something, I’d be better off with a commuter bike that’s also good off-road.\\n\\nA: What about a mountain bike then?\\n\\nB: The only thing is that a mountain bike is no good for carrying things like shopping, and according to Sam, it’s quite heavy. So anyway, he recommended two models that would be good for both things and I’m trying to decide which one.\\n\\nA: Let me see. They both look nice. Wow, they’re not cheap. Which one’s better, do you think?\\n\\nB: Not sure. There are a few things I need to think about. Like how much power the bike has, how much range …\\n\\nA: How much range?\\n\\nB: Yeah, how far it goes before it runs out of electricity. I hadn’t thought of that before I started looking. Anyway, the Dorith has a better range, and it also has more power going uphill. Long story short, it’s a better bike.\\n\\nA: So it’s a matter of whether you want to pay more for more range and a better uphill ride?\\n\\nB: Yes, in the end, it’s a question of how much I want to pay.\\n\\nA: Have you read any reviews?\\n\\nB: Yes, tons. All in all, reviewers of both models were happy with their bikes, though one said the Wells Rider didn’t have the range he expected.\\n\\nA: So they didn’t help.\\n\\nB: They did, I guess. They made me think about things like range and power, but I don’t really need those to be amazing. It all comes down to the price, really, if I’m deciding between these two models. I don’t mind spending more, but is it worth it?\\n\\nA: Well, just because something’s less expensive, it doesn’t mean it’s not good.\\n\\nB: Yes, taking everything into account, I think the Wells Rider is good enough for me.\\n\\nA: Well, let’s go get it then!","5.06":"1 From what he says, it depends on what you want to use it for.\\n\\n2 The only thing is that a mountain bike is no good for carrying things like shopping.\\n\\n3 According to Sam, it’s quite heavy.\\n\\n4 Long story short, it’s a better bike.\\n\\n5 So it’s a matter of whether you want to pay more for more range and a better uphill ride?\\n\\n6 Yes, in the end it’s a question of how much I want to pay.\\n\\n7 All in all, reviewers of both models were happy with their bikes.\\n\\n8 It all comes down to the price.\\n\\n9 Well, just because something’s less expensive, it doesn’t mean it’s not good.\\n\\n10 Yes, taking everything into account I think the Wells Rider is good enough for me.","5.07":"1 From what he says, it depends on what you want to use it for.\\n\\n2 According to Sam, it’s quite heavy.\\n\\n3 Long story short, it’s a better bike.\\n\\n4 In the end, it’s a question of how much I want to pay.\\n\\n5 All in all, reviewers of both models were happy with their bikes.\\n\\n6 Taking everything into account, I think the Wells Rider is good enough for me.","VB 5.01":"1 charge, fare, fee, loss 2 bargain, discount, refund, profit 3 receipt 4 donation","R 5.01":"Shoppers beware! Every consumer knows about pricing tricks like putting 99 at the end of the price, but what about other things a shop does to get you to make a purchase? One example is the location of products. Even if you don’t have a particular brand loyalty, you’re more likely to buy things because shops put them at eye-level so that you see them first. In supermarkets, the essential things (milk, bread, etc.) are at the back of the shop so as to make you pass everything else on the way. And shops also pay attention to your senses to influence you. Take music, for example. The slower the music, the calmer you feel and the more time you spend shopping. And in the end, shops know that price is king and everyone’s a bargain hunter at heart, so you’ll find products on offer in almost every part of a shop. After all, who can say no to a good deal?","MB 5.01":"So, it’s frustrating when you don’t know what you can recycle, isn’t it? It feels like a lottery – maybe this can go in the recycling bin, maybe not … You put things in, then you take them out again, you do this for hours. Well, you can stop this situation from happening with our new product which tells you if the things you put in the bin can be recycled or not. The bin is a bit like those checkout machines in the supermarket that can recognise products – it has a camera which can ‘see’ the products and decide if they’re OK. It’s also similar to the supermarket machine because it speaks. It will say something like ‘I’m sorry, you can’t recycle this’. Your life will never be the same again when you have this product in your home – you’ll help the planet and feel good about yourself.","6.01":"L = Logan C = Cecilia A = Amy\\n\\nL: There are so many diverse neighbourhoods in Toronto. However, I’ll go with the one that’s just nearby my house because I go there so often. It’s Rosedale. It’s a very wealthy neighbourhood just to the northeast of the city centre (it’s about a ten-minute walk). It has these huge tree-lined avenues, with these historic century-old houses, each one different to the next, so the architecture is really interesting and unique. The streets wind around, with different street lamps and sidewalk styles. And the tall trees offer shade, so it’s a lovely spot for walking. One thing I love about this area is that there are no restaurants or stores or high-rise buildings; there are plenty of them back in the centre. The east side is entirely surrounded by a deep valley, where Torontonians jog, walk their dogs, or just stroll by the river. There’s a really relaxed atmosphere. It’s so peaceful that you hardly realise you’re still in the city.\\n\\nC: The Barranco district is one neighbourhood I always try to visit when I travel to Lima. It was an area where wealthy residents used to enjoy the beach. So it has these historic old summer houses, but the area became very run-down, and then lots of artists moved in, so now the whole district is covered with these amazing colourful murals and street art. It’s so beautiful to walk around. The houses are painted in different colours and there are lots of little bars and coffee shops to enjoy. There’s a busy market where local artists sell their work, and you can buy jewellery or hand-made Peruvian arts and crafts. The area has become so popular that it’s quite a tourist spot now, but it is still a great place to wander around. It has such a friendly, welcoming atmosphere and there are lots of things you can do, like maybe visit an art gallery, or enjoy a delicious meal with a fantastic view of the ocean. Or you can visit in the evening because it has such lively nightlife, too. 164 AUDIOSCRIPTS\\n\\nA: One of my favourite neighbourhoods has to be Yarraville, in Melbourne, Australia. In fact, it was named as one of the coolest neighbourhoods in the world. It’s a wonderful place to live because it has such a great sense of community. There’s so much to do in Yarraville. There’s an amazing Art Deco cinema and there are lots of lively music venues and fun places to shop. There’s an amazing bookshop called the Sun Bookshop, and there are organic food shops, bakeries, things for your house, plant shops. It has a busy farmer’s market where you can find lots of local produce or get a great coffee in one of the coffee shops. Yarraville is also a fantastic place to eat and drink. You can get Mexican burritos or Japanese noodles. You can enjoy restaurants with delicious food from all over the world. Or you can listen to live music or enjoy a bit of culture. Basically, Yarraville has everything you need – you don’t need to go anywhere else. I love it.","6.02":"1 It was so interesting to learn about the history of the place.\\n\\n2 It was such a lovely place to visit.\\n\\n3 The food was so delicious that we decided to go back the next day.\\n\\n4 The neighbourhood had such a welcoming atmosphere that we didn’t want to leave.","6.03":"1 I’m used to travelling alone.\\n\\n2 We’re used to the ocean.\\n\\n3 I got used to the cold.\\n\\n4 We’re getting used to living on a boat.","6.04":"B = Boris T = Tonya\\n\\nB: OK, so Tonya, could you tell us the best way to see the London sights using public transport? What do you think is our best option?\\n\\nT: Yes, absolutely. As I was telling you earlier, I’d recommend you take the Thames Clipper river boats. I mean, there are lots of different river boats, but the cruises designed for tourists are much more expensive. The Thames Clipper is really good because basically it’s public transport.\\n\\nB: So what you’re saying is the Thames Clipper is cheaper, right?\\n\\nT: Cheaper than a cruise, yes, that’s right. And the great thing about it is that you don’t need to buy a special ticket as it’s part of London’s public transport system. You don’t need to book in advance, you can just use your travel card to tap in and tap out. And it’s easy to get on a boat. You just go to the nearest tube station.\\n\\nB: Sorry I didn’t catch what you said about ‘tap in and tap out’.\\n\\nT: Oh, yes of course. You can use your travel card or your bank card and just tap the ticket machine and it automatically takes the fare for your journey. You also have to tap out at the end of the journey.\\n\\nB: I see. So we don’t have to book in advance or buy a special ticket that is valid just for the boat?\\n\\nT: That’s right.\\n\\nB: OK, that’s great. And where would you suggest we get the boat?\\n\\nT: Well, there are two different routes – one which goes up the river and one which goes down. You can hop on and hop off at any point, just like you do with the bus or a train. But a very popular option with visitors is to get the boat from Westminster Pier. You take the tube to Westminster and it’s signposted from there.\\n\\nB: Sorry, can you just say that last bit again? Where do we take the tube?\\n\\nT: To Westminster. You can walk to Westminster Pier from there.\\n\\nB: OK.\\n\\nT: And you take the boat right along the river all the way to Greenwich.\\n\\nB: So let me just check I’ve got this right. So, we can take the boat from Westminster Pier to Greenwich.\\n\\nT: Yes. And on the way, the boat passes many of London’s famous landmarks – you see the Houses of Parliament, London Bridge, Tower Bridge, you go past the Globe Theatre and the South Bank.\\n\\nB: Oh, in other words, we see nearly everything. That sounds great. And what’s the boat like?\\n\\nT: The boat itself is quite big, and you can sit inside. You can sit outside, too, but it gets a bit crowded and it can be windy. So if you go inside, there’s a café and toilets. It’s very comfortable. And there’s no tour guide explaining everything, you can just get hold of a tourist map with information about all the landmarks and learn about them as you go along.\\n\\nB: So, have I got this right? There isn’t a guided tour.\\n\\nT: That’s right, but you can find out all the information and have it on your phone.\\n\\nB: Yes, I think we prefer that.\\n\\nT: It’s a really fantastic day out. I’d thoroughly recommend it if the weather is good.","6.05":"1 So what you’re saying is the Thames Clipper is cheaper.\\n\\n2 I didn’t catch what you said about …\\n\\n3 Sorry, can you just say that last bit again?\\n\\n4 So let me just check I’ve got this right.\\n\\n5 In other words, we see nearly everything.\\n\\n6 Have I got this right? There isn’t a guided tour.","6.06":"1 Could you just go over those options again, please?\\n\\n2 So let me just check, …\\n\\n3 Can you just say that last bit again, please?","6.07":"I’m going to talk about my adopted city of Oviedo in the north of Spain. It has wonderful cultural traditions – its music, language and food – and these traditions have stayed the same for many generations. An example of the culture is Oviedo’s architecture and public art. The old town is famous for its medieval buildings and structures such as the archaeology museum and La Foncalada Fountain. There are also many sculptures in public places – in the parks and streets. One of the best-known is a sculpture of a mother and child by the Colombian artist Fernando Botero. But really, as I said, anywhere you go in the centre you’ll find sculptures and statues. Oviedo is also famous for its traditional food. So, for example, let’s take fabada. Fabada is a dish made of beans and meat, like a type of stew. It’s absolutely delicious. Another speciality of the region is rice. There are some amazing rice dishes, such as rice with octopus or with shrimps. So I’d say fabada and the rice dishes are the best specialities to try in Oviedo. The city also has its own culture and language. Many people in Oviedo still speak Asturian, which is similar to Spanish. And when it comes to music, the region even has its own musical instruments. There’s one that is similar to a Scottish bagpipe. You can hear it at the many festivals that celebrate the regional culture and history.","R 6.01":"Astronaut They drive the crew to the launchpad. You stand and look up at this spaceship seventeen storeys high, with its huge rocket boosters on each side. You feel fear and excitement. Before, you were so busy training that you didn’t have time to feel scared. You didn’t think you were risking your life. Now it becomes real. You take a lift to the launch platform thirty metres in the sky. You go into a white room and put on your equipment. Next, you look into a camera and say goodbye to your family. The other astronauts become your new family. You’re used to them and their habits; you’ve been training together for months. You enter the shuttle. Inside it’s tiny. It’s one of many things you have to get used to. You are strapped in and you check your equipment one last time. Space is silent, but the rocket isn’t. The engines make such a loud noise you can’t hear yourself think. Soon you’re travelling at 17,500 miles per hour. After eight and a half minutes, you’ve left the Earth’s atmosphere. Suddenly, the noise stops. You remove your helmet, let it go, and watch it float. You trained for these conditions. Everything is familiar. Yet nothing will ever be the same after you’ve been in space.","MB 6.01":"A = Art M = Melinda G = Georgina\\n\\nA: Well, obviously it needs to be the smart roads idea, really. There are so many traffic accidents at the moment, and anything we can do to reduce that number is good.\\n\\nM: Yes, good point, and smart roads would definitely help with the problem, especially with the heavy snow in winter, but another way to fix the problem is to have fewer people in cars in our city. Does everyone agree with that?\\n\\nA: It’s a nice idea Melinda, but I feel it’s going to be very difficult to make people leave their cars at home.\\n\\nM: OK, let’s bring in a new voice to this discussion. Georgina.\\n\\nG: Hey there, Melinda\\n\\nM: Georgina, what do you think? Do you see it the same way as I do? Fewer cars? Maybe we should charge people for driving into the city centre?\\n\\nG: Well, yes, Melinda, we need fewer cars on the road, but I’m not sure about charging people. Another possibility is to make it cheaper to travel on public transport. The self-driving buses would help us with that.\\n\\nA: But maybe people just prefer their cars. They feel more comfortable in their own space, not sitting on a crowded bus …\\n\\nM: But it’s not a question of if they are comfortable, Art. People need to be taught to use a new system, and we shouldn’t worry if they get a little upset about changing how they behave. That’s normal. Don’t you think that people need to grow up and stop doing things which hurt our city, hurt the planet?\\n\\nA: I understand how you feel, but I think you don’t understand how people’s minds work. They’re not going to change their behaviour just because you get angry with them, they need to choose to do the right thing.\\n\\nM: OK, let’s bring in Roger, now. Roger, what …","7.01":"H = Host L = Luisa R = Rich J = Josh E = Ela\\n\\nH: What’s in a word? Well, it depends on who says it, and what they mean. Many of us believe that most conflicts in relationships are the result of miscommunication, and so often this comes down to language. Sometimes just one word. Take the word ‘invite’ for instance.\\n\\nL: A few days before my friend’s birthday, she sent me a message saying that she wanted to invite me to her birthday party. It was in a private room at an expensive restaurant. I knew the place, but only from the outside. But I messaged her back and replied that I’d be there. I bought her a present, and when the day came, I went. At the end of the meal, when the bill came, it was clear all of the guests were expected to pay our part of the bill. I was really upset. She should have been clearer. It cost me a whole week’s salary. It was such an expensive place.\\n\\nH: Well that can’t have been good for your friendship. And what about other types of relationship? Maybe workplace ones? Rich has a story from his workplace.\\n\\nR: I was in my first month on the job and my manager said she wanted to talk to me and could I come to her office. I felt really nervous. She had a very serious style, kind of scary. I walked into her office, and sat down. She was actually really nice. She wanted to know if I liked the job. Then she asked whether I’d had any problems with colleagues or anything. I answered her and we had a good conversation. Then she started checking her computer and she said, ‘OK, could you close the door?’ I got up, closed the door – on the inside – and stood there. My manager kept looking at something on her computer, and there was dead silence. Finally, she looked up and said, ‘Oh, are you still here?’ I was so embarrassed.\\n\\nH: That is embarrassing! At least next time you’ll know what to do. If there is a next time. And speaking of next time, when is next weekend? Sometimes it’s not so clear, like in Josh’s story.\\n\\nJ: Not long ago my friend Endre called me on a Wednesday night and asked me if I was doing anything the following Saturday – he said, ‘Are you doing anything next Saturday?’ and I said no. He said he was giving a surprise party for his wife, Moni, and asked me if I could come. I said yes. Endre told me that I’d be in trouble if I told her! I promised that I’d keep it a secret. Anyway, it was at their house, and the plan was for me to go there at 7 p.m. on Saturday and set things up, then the other guests would arrive at 8 p.m., and Endre and Moni would come back from a restaurant at nine. So three days later, on Saturday at 7 p.m., I drove over to their house and knocked on the door. Moni answered the door, and said ‘Josh, what are you doing here?’ I just said, ‘What happened to the party?’ Endre walked up behind her and looked at me with an angry expression and said, ‘I told you, it’s next Saturday.’ I basically ruined the whole thing.\\n\\nH: Very awkward. I would have been pretty angry with you, too. Meanwhile, we have time for one more, and this one’s a reminder to all of you learning a foreign language to pay close attention to your grammar. Here’s Ela.\\n\\nE: So, I was having a coffee with a Scottish woman who I met at the college, and at the time my English wasn’t as good as it is now. We were sitting chatting, getting to know each other, and at one point the conversation went a bit quiet. So I said, ‘I’m sorry, I’ve been talking too much. Are you boring? Shall we leave?’ A very simple mistake, I know, but as I said at the time my English wasn’t great, and I didn’t even realise my mistake. She said OK, asked the waiter for the bill, and when we said goodbye I noticed she looked a bit uncomfortable. After that we didn’t meet again. I didn’t realise what I had said until much later, during an English lesson about adjective endings. I still feel really bad when I remember that.\\n\\nH: Well, maybe she was boring. We’ll never find out! We’d love to hear more of your experiences though, so write in the comments or send me an audio message with your story of how a misunderstanding affected one of your relationships. Thanks for listening and we’ll be back with more next time!","7.02":"1 I messaged her back and replied that I’d be there.\\n\\n2 She wanted to know if I liked the job.\\n\\n3 She asked whether I’d had any problems with colleagues.\\n\\n4 My friend Endre asked me if I was doing anything the following Saturday.\\n\\n5 He said he was giving a surprise party for his wife Moni.\\n\\n6 He asked me if I could come.\\n\\n7 He said I’d be in trouble if I told her\\n\\n8 I promised that I’d keep it a secret.","7.03":"1 Are you going out tonight?\\n\\n2 I can’t do it.\\n\\n3 You’ll all get wet.\\n\\n4 I’m leaving tomorrow.\\n\\n5 Did you stay at home yesterday?\\n\\n6 Do we have to speak English?","7.04":"1 answer, argue, mention, promise, wonder 2 agree, complain, confirm, convince, enquire, explain, reply","7.05":"1 I’ve just been tagged in a photo.\\n\\n2 I haven’t been messaged yet.\\n\\n3 I was given my phone case by a friend.\\n\\n4 My phone got damaged recently.\\n\\n5 I’m being sent a lot of spam at the moment.","7.06":"P = Paul D = Denise\\n\\nP: Hi. Nice party.\\n\\nD: Yes, yes, very nice.\\n\\nP: I’m Paul.\\n\\nD: I’m Denise.\\n\\nP: So, do you know Celia?\\n\\nD: Yes, I do. We went to college together.\\n\\nP: Sorry, I just saw someone I know. So, from college? 166 AUDIOSCRIPTS\\n\\nD: Yes, that’s right.\\n\\nP: Oh … erm, this is a nice party.\\n\\nD: Yes, I think so, too. It’s my first time…\\n\\nP: Hey Sharon! Hi Jez! Sorry. So, nice weather, isn’t it?\\n\\nD: Yes, very.\\n\\nP: Very. Erm …\\n\\nD: Oh, I’ve just seen someone I know. Nice to meet you.","7.07":"P: Hi. Nice party.\\n\\nD: Yes, yes, very nice.\\n\\nP: I’m Paul.\\n\\nD: I’m Denise. Nice to meet you.\\n\\nP: And you. How do you know Celia?\\n\\nD: We went to college together.\\n\\nP: Oh yes, were you on the same course as her?\\n\\nD: Yes, we both did food technology.\\n\\nP: How did you get into that?\\n\\nD: My mother was a chef, so I suppose I just thought it was a good idea.\\n\\nP: You know, I’ve always wondered, what exactly is ‘food technology’?\\n\\nD: Well, obviously you learn a lot about cooking, but it covers all sorts of other things.\\n\\nP: Such as?\\n\\nD: Well, how food is produced, erm, researching new flavours.\\n\\nP: That sounds interesting. What do you mean by ‘researching new flavours’?\\n\\nD: Well, different ice cream flavours or crisp flavours.\\n\\nP: Crisp flavours! That’s unusual. So, for instance?\\n\\nD: Well, I once developed a banana-flavoured crisp.\\n\\nP: Sounds terrible. What was it like?\\n\\nD: My tutor said it was the most disgusting thing she’d ever tasted.\\n\\nP: I’m not surprised! It sounds awful.\\n\\nD: It was! What about you? How do you know Celia?\\n\\nP: I used to work with her, at the café. I was a waiter there, but I left .\\n\\nD: Really? Why’s that?\\n\\nP: I liked the people I was working with, but I didn’t like some of the customers.\\n\\nD: How come?\\n\\nP: Well some of them were quite rude to the waiters. They got very impatient if we didn’t serve them immediately. They were always complaining.\\n\\nD: How did that make you feel?\\n\\nP: Pretty angry, actually. But you can’t lose your temper with customers.\\n\\nD: Yeah, I can imagine. But you like food?\\n\\nP: Yeah. I love food. This food’s extremely good.\\n\\nD: Yes, isn’t it? This salad’s particularly nice. How about you? Are you at all interested in cooking?\\n\\nP: I love cooking, but I’m a terrible cook! I’m more of a restaurant person.\\n\\nD: Oh, so am I, but I’m fairly new to this area. Can you recommend any good restaurants near here?\\n\\nP: What sort of food do you like?\\n\\nD: Indian, Mexican, and I quite like …","7.08":"D = Denise P = Paul\\n\\nD: I’m Denise. Nice to meet you.\\n\\nP: And you. How do you know Celia?\\n\\nD: We went to college together.\\n\\nD: Yes, we both did food technology.\\n\\nP: Oh. How did you get into that?\\n\\nD: Well, obviously you learn a lot about cooking, but it covers all sorts of other things,\\n\\nP: Such as?\\n\\nP: That sounds interesting! What do you mean by ‘researching new flavours?’\\n\\nD: Well, I once developed a banana-flavoured crisp.\\n\\nP: Sounds terrible! What was it like?\\n\\nP: I was a waiter there, but I left .\\n\\nD: Really? Why’s that?\\n\\nP: I liked the people I was working with, but I didn’t like some of the customers.\\n\\nD: How come?\\n\\nP: They were always complaining.\\n\\nD: How did that make you feel?","7.09":"P = Paul D = Denise\\n\\n1\\n\\nP: It covers all sorts of other things.\\n\\nD: Such as?\\n\\n2\\n\\nP: I used to work with her, at the café. I was a waiter there, but I left .\\n\\nD: Really? Why’s that?","7.10":"1 Because?\\n\\n2 What’s it like?\\n\\n3 How come?\\n\\n4 For instance?","VB 7.01":"A scroll down, scroll up B tap C swipe D download E folder F refresh G network H icon I upload J inbox","R 7.01":"Imperfect inventions They say that necessity is the mother of invention – if there’s a need, then the solution will be found. But there seem to be some needs for which the perfect solution hasn’t been developed yet. Here are some of your ideas. Earplugs that work More and more people live in noisy environments, and many said they had been waiting for years for the perfect ear plug. ‘I’m often woken up by the neighbours, and nothing I’ve tried has worked.’ No-jam printer Many of you asked if it was possible to invent a printer that never jammed. ‘It’s particularly annoying when I’m in a hurry and I get a pop-up with a jammed icon.’ Scratch-proof sunglasses What can make you angrier than when you drop your expensive sunglasses and they get damaged? ‘When I spend a lot of money on sunglasses, I expect no scratches – zero.’ Self-labelling computer filing system ‘It shouldn’t be too hard – the program could scan the documents in a folder and choose a label that fits.’","8.01":"1 I should’ve been nicer.\\n\\n2 You shouldn’t’ve paid any attention to him.\\n\\n3 If I’d known, I’d’ve done things differently.\\n\\n4 If we’d known, we wouldn’t’ve been so worried.","8.02":"When my father came home from work in the evening, he always smelled of coffee. He worked in a roasting shed at Lindvalls Kaffe in Uppsala. That’s how I came to love the scent of coffee long before I began to drink it. I watched out for him cycling along the street and I’d ask the same question every time: ‘Did you find anything today?’ When the sacks of green coffee beans arrived for roasting, they were tipped onto a conveyor belt and screened by a powerful magnet. The idea was to remove any metal objects that might have ended up in the sack during the drying and packing. Pappa would bring these things home and tell me a story about every one of them. Sometimes he brought a coin. ‘Look, this is from Brazil,’ he’d say. ‘Brazil produces more coffee than anywhere else.’ He’d let me sit on his lap, open up the world atlas in front of us and tell the story: ‘It’s a large country and very hot. This coin turned up inside a sack from Santos,’ he’d explain, pointing at the Brazilian port city. He’d describe the working men and women, links in the chain that ended with people in Sweden sipping their coffee. Early on, I realised the coffee pickers got the poorest pay. My powerful longing to understand the world began with Pappa telling me about the coins in the coffee sacks and showing me all those countries in the atlas. This longing grew into a lifelong passion.","8.03":"1 I watched out for him cycling along the street and I’d ask the same question every time: ‘Did you find anything today?’\\n\\n2 Pappa would bring these things home and tell me a story about every one of them.\\n\\n3 He’d let me sit on his lap, open up the world atlas in front of us and tell the story: ‘It’s a large country and very hot.’ 4 ‘This coin turned up inside a sack from Santos,’ he’d explain, pointing at the Brazilian port city.\\n\\n5 He’d describe the working men and women …","8.04":"1 I’d wait for him every evening.\\n\\n2 He’d always answer my questions.\\n\\n3 He’d explain where Santos was on the map.\\n\\n4 He’d point to the Brazilian city.","8.05":"P = Presenter AM = Audience Member\\n\\nP: Today I’m going to talk about five things that you need to know about people if you want to give a good presentation. When a speaker gives a presentation, they need to understand their audience. The more the presenter knows about how people think and listen, the easier it is for them to give a presentation which informs, inspires and motivates the audience. So, to begin with, can I just get a show of hands for all the people here who have had to listen to a long presentation with lots of facts and figures and they’ve found it difficult to stay focused? Right. Lots of you. This brings me to my first point. People learn best in twenty-minute chunks. After that time, it becomes difficult to keep your concentration. So, if you’re giving a presentation, it’s best to keep it short. Think about TED Talks. Most of them are twenty minutes long. If your talk is longer, maybe an hour, then divide the talk into three sections, each of twenty minutes. In between the sections try to have a short break or activity. Next, my second point. People can listen and watch at the same time, but only if the visual information is easy to read and helps us to understand what is being said. If the visual information is too complicated, people will start trying to read and they’ll stop listening to the speaker. So it’s important not to put too much text on your slides. Only use a visual where it clearly illustrates your idea and helps the listener to understand. Moving on to the next point, it’s important to remember that what you say is only part of your message. The audience will be looking at your delivery. How are you standing? Do you look confident? Do you look like you know what you’re talking about? We get a lot of information from just looking and listening to how the speaker talks, before we listen to the actual words they say. Turning now to what you want people to do when they listen to your presentation. Do you want them to buy a product, or sign up to your website? If you want people to do something, it’s important that you tell people exactly what to do at the end of the presentation. This is called a ‘call to action’. As a final point, think about your emotions. People will copy your emotions and your feelings, so be enthusiastic about your subject, be passionate about what you’re saying and then your audience will feel the same. So, just to recap.\\n\\n1 Keep your presentation short – less than twenty minutes.\\n\\n2 Keep the visuals very clear.\\n\\n3 Think about your delivery.\\n\\n4 Include a call to action. And finally, number 5, be enthusiastic. I think that’s it. Does anyone have any comments or questions? Yes, thank you.\\n\\nAM: What do you do if the technology doesn’t work and you can’t show your presentation? Do you have any advice?\\n\\nP: That’s a very good question. I’m not sure I can answer that now. Obviously, it depends on the presentation, but one thing I suggest is that …","8.06":"1 To begin with, …\\n\\n2 The first point …\\n\\n3 Moving on to …\\n\\n4 As a final point, …\\n\\n5 To sum up…\\n\\n6 Just to recap ..","8.07":"D = Dan M = Melissa J = Jack\\n\\nD: Hello. My name is Dan Barnet.\\n\\nM: And I’m Melissa Barnet.\\n\\nD: We are entrepreneurs and together we run a business called Live Your Life Adventure Holidays.\\n\\nM: Years ago we realised we didn’t like spending our holidays just lying on a beach doing nothing. We’re both very active and like to be out of our comfort zone, so we started organising adventure holidays for ourselves.\\n\\nD: And then our friends asked us to do the same for them. Pretty soon we were arranging ten to fifteen holidays a year, so we realised it was a business opportunity.\\n\\nM: We organise holidays in various locations around the world. Our holidays are a mixture of physical activity, stunning natural environment and cultural experiences. For example, you can stay on a farm in Romania, climb mountains in Turkey, or walk along the Italian coastline and then learn to make fresh pasta with an Italian chef. We also offer riskier activities where you need some training. Examples include caving, rock climbing and trekking.\\n\\nD: What’s special about Live Your Life is that we work very closely with our clients to arrange the perfect holiday for them, and also we’ve personally tried out every trip that we offer.\\n\\nM: Adventure tourism is a very large tourism sector. The market for global adventure tourism is worth nearly $500 million and it’s forecast to grow steadily over the coming years, so this is a huge market. Our turnover figures for the last three years have been €70,000, €100,000 and €150,000.\\n\\nD: We’d like to expand our business to cover more countries in Asia and South America and to reach new clients in these parts of the world. We’re hoping that an investor will have business experience in these areas and useful contacts that can open doors for us. 168 AUDIOSCRIPTS\\n\\nM: And we’re asking for €100,000 for a ten percent share of the business.\\n\\nJ: The idea’s great, but I have a couple of questions. Who is the target market for these adventure holidays? Is it mostly families, couples, individuals?\\n\\nM: All of the above. We tailor the holiday to the client’s needs.\\n\\nJ: OK. So can you tell me about your social media strategy?\\n\\nM: Yes, of course. We have several social media channels so we try to make sure that there’s a constant stream of photos and videos of people enjoying their adventures on social media and then …","VB 8.01":"1 When you understand something or solve a problem, you figure out how to do it.\\n\\n2 When you test a new idea, you try it out.\\n\\n3 When you use your imagination to invent a new idea, you dream it up.\\n\\n4 If you meet together with other people as a group, you get together.\\n\\n5 When you note something on a piece of paper you write it down.\\n\\n6 If you take a big idea and split it into smaller sections, you break it down.\\n\\n7 When you consider the facts about something in a carefully organised way, you think it through.\\n\\n8 When you investigate something further to find out more information, you follow it up.","R 8.01":"Inventing a Better World Ann Makosinski grew up in Canada, but she didn’t have a lot of toys as a child. Her first toy was a box of electronic parts. Later her parents bought her a hot glue gun. Should her parents have bought her more toys? She doesn’t think so. Having these ‘toys’ encouraged her to collect things around the house and piece them together to make new ‘inventions’. These inventions rarely worked, but she was never afraid to do something new. She had discovered her love for dreaming up new ideas and inventing things, and this became her lifelong passion. Motivated by the story of a friend in the Philippines who had failed her school exams because she had no electricity, Ann took time to work on inventing a light source that didn’t need batteries. At fifteen, she won the Google Science Fair with a torch powered using only the heat in your hand. Two years later, she invented her eDrink coffee mug, which uses the heat from a drink to charge your phone. Ann pays attention to the world around her, so is always inspired and never runs out of ideas. It’s possible that if she’d had more toys as a child, she wouldn’t have been so creative in her free time, and she might never have become an inventor. She also didn’t own a mobile phone when she was a teenager, but she doesn’t think her parents should have let her have one. She enjoyed being different to the other kids and it gave her a chance to deepen her interest in her inventions.","MB 8.01":"I was studying medicine, in my second year at university, and everyone was so happy, so proud of me, our son is going to be a doctor type of thing. Except, I had a different feeling. I didn’t share the excitement about being a doctor, in fact I couldn’t imagine myself as a doctor. Not a good one anyway. I tried to ignore the feeling, but it just didn’t work. In the end, I left the course, and obviously everyone was disappointed, and I was the most disappointed person of all – I was going to be the one in the family that everyone was proud of, and I’d let everyone down. For a few months I thought about what I really wanted to do with my life and decided on a new direction, and here I am ten years later and I’m a very successful accountant. And a happy one, too. Some people are born doctors, and I’m a born accountant."}'),Sx=JSON.parse('{"1:vlogs":"1 The best present I’ve ever received was a laptop because after I received my laptop I was able to start working online and that changed my life.\\n\\n2 The best present I’ve ever received was my engagement ring.\\n\\n3 The best present I ever received was a puppy. I was three years old. This meant we grew up together and were always the best of friends.\\n\\n4 My favourite present was my saxophone. My parents gave it to me when I was ten for my birthday. I’d wanted one for ages and when I opened the present I was so excited.\\n\\n5 The best birthday present I’ve ever had was my son who was born on my birthday.\\n\\n6 The best present I ever received was a new set of golf clubs, er, because golf is my passion and these clubs made me a better golfer.\\n\\n7 The best present I’ve ever received is a music studio, built into my own house.\\n\\n8 I think the best present I ever received was a holiday to South Africa to go on safari, and it’s something I had wanted to do, um, since I was a child.\\n\\n9 The best present I have ever received was a car that my husband bought me because he really wanted me to learn to drive. It was an old car and it was really beautiful.\\n\\n10 The best present I’ve ever received I think must be a camera that I got for my tenth birthday. It was quite a basic camera, but it led me to a great interest in photography and I still love taking photographs today.","1:streetint":"Rory: I think I could live without all my gadgets apart from my phone, because it’s so important to me, because I use it for my emails, for university, for school work, and to keep up with news and my friends.\\n\\nConnor: I’m a musician and I play guitar so my favourite kinds of gadgets are guitar pedals ’cause I can change the way my guitar sounds.\\n\\nCatherine: I could live without the iPad. Umm … I could live without a … um … a home computer, but I do like a laptop, and I absolutely – I hate to say it – I love my phone.\\n\\nMarc: I would say my laptop is a pretty important thing, er, for work, in general, and I just can’t live without it. In terms of gadgets that I could live without, I’d say my smartwatch.\\n\\nJoshua: Er, I love my phone. I use it all the time. Um … I even use it in bed. I’m just pretty much never off it.\\n\\nShannon: Um … I love my laptop. I couldn’t really live without it ’cause I attend university and everything is now online, so we all rely on our textbooks online and all our lectures and our teachers teach us from our laptops.\\n\\nJosh: So I love a range of gadgets from my Xbox and my laptop, but I could live without all of them except for my phone, and that’s because I use it for everything: my work and in my free time. Ex 2C\\n\\nRory: I think they do, but I think in this day and age it’s needed to look at screens, and I think that a lot of people couldn’t do without the screens so I think that’s why a lot of people do it. But I do think some people do it too much.\\n\\nConnor: I do think people spend too much time looking at screens. I think when you spend so much time looking at a screen, you lose the face-to-face contact and that emotion that you get from that interaction.\\n\\nCatherine: I do think people spend too much time on the screens. I think people are addicted to screen time, er, needing information or entertainment more immediately at their hands. Um … I think people, younger generation, might have more difficulty just being with themselves, on their own.\\n\\nMarc: I would agree with that. People certainly look at their phones too much. It might even be the first thing in the morning. Um … I wake up, check my emails and might as well be the last thing in the evening, where I do the same thing, or check the news, or things like that.\\n\\nJoshua: Um … I do, especially like nowadays everything is online, everything’s on technology, whether it’s phones or computers.\\n\\nShannon: Um … I think people probably spend too much time on their phone. But I only really use my laptop to study, and I use my phone just to contact my friends.\\n\\nJosh: I think so, because it prevents you from being able to talk to people in person, and I think that the recent use of phones, even more so than in the past, has aided that problem.","2:vlogs":"1 I think one of my best habits is eating healthily. When I was a child, my mum would make sure that my sister and I didn’t eat sweets or soft drinks or cakes and biscuits unless it was a special occasion and I’ve tried really hard as an adult to keep up with this habit.\\n\\n2 I try to meditate almost every evening. I think it’s a very healthy habit. It helps me relax and it clears my head after a busy day.\\n\\n3 My best habit is definitely being punctual. Whether it be to meet a friend or starting work, I always like to arrive on time.\\n\\n4 I think one of the good habits I have is try to have a great breakfast every morning, and also drink plenty of water and finally take a walk every day.\\n\\n5 So I think I’ve got two really good habits, erm. The first one is cycling, so I try and cycle every day for 15 minutes, either to the shops or, or to the office. And the second one is, is reading before bed, erm, I always read before bed and it, it helps me relax and, and have a good night’s sleep.\\n\\n6 What I really like is playing chess. It helps me to concentrate and make a good decision in real life.\\n\\n7 A good habit that I have is that I try to go swimming every week, um, outside. So, I go swimming in a lake and, depending on the time of year, it can be really cold, but I’ve heard that cold-water swimming is really good for you.","2:programmes":"If you are small, finding the right tree can mean a home for life. He’s a Draco lizard. He’s only the size of a pencil and he eats ants. This one tree could provide him with all he will ever need, a conveyor belt of food. It’s a perfect place to settle down. Well, it would be, but there’s already someone here. This larger male is the tree’s owner and Dracos don’t share. The owner’s flag is a warning – trespassers won’t be tolerated. The owner’s not only intimidating, he’s prepared to battle. A dead end. Safety is a long way away. Now he must choose – fight or flee. Only in the jungle do you find lizards that can soar like dragons. He can travel over 30 metres in a single leap. It’s a very fast and efficient way to move through the jungle. Maybe this new tree will have food and no resident owner.","3:vlogs":"1 I’m a PhD student at Bilkent University. I work best in the library at the university because it’s nice and quiet, and when I need books for my assignments I can find them easily.\\n\\n2 I’m a university student. I don’t like working in libraries. I prefer working in cafés because I like the background noise, and I can buy coffee and cake.\\n\\n3 I prefer to work from home. I spend a lot of my time on video calls with my colleagues in overseas offices, and sometimes, actually a lot of the time, these calls happen at very short notice, and in the office it’s really difficult to find a quiet space to make calls at short notice, so it’s, it’s much better for me just to be at home. 170 VIDEOSCRIPTS\\n\\n4 I way prefer working in the office than at home. I really enjoy having my friends from work and my colleagues around me – whether that’s just to have a chat with a coffee or to talk about some important work, erm, it’s a lot easier, and I find it a lot more of an interesting environment to be in.\\n\\n5 I really prefer to work from home. I have everything here that I need, including a nice cup of my favourite coffee in the morning.\\n\\n6 These days, I’m, I’m working from home. My favourite spot is the living room. I like it because it’s spacious, erm, and it’s good because I like to stretch out a bit and have short breaks in between tasks, and it has a nice view as well.\\n\\n7 So, I prefer working from home. Um, I’m a writer, so I like waking up when I want to, switching my computer on when I prefer, and also getting the food and drink from the fridge when I want to, and it’s a much more comfortable environment for me.","3:streetint":"Dara: When I was growing up, I wanted to be a PE teacher.\\n\\nMonica: I wanted to be a lot of things. I think I wanted to be a doctor at some point, a lawyer as well, and … an astronomer.\\n\\nDes: So I wanted to be a footballer who played for Chelsea.\\n\\nTian: Erm, I think I wanted to be an actress.\\n\\nEva: I wanted to be a fashion designer.\\n\\nDaniel: When I was four, I wanted to be an astronaut. Erm, then I wanted to be a doctor when I was about twelve.\\n\\nSky: I wanted to be a movie star, so bad. I wanted to be on TV, and television, just red carpet, all of it. I wanted to be a movie star.\\n\\nRohan: I always wanted to be an electrician, but more I wanted to be a musician. A reggae singer.\\n\\nAnais: I wanted to be a photographer because my dad got me into photography growing up, so it kind of just came from that, and I just really liked it. Exs 3A and 3B\\n\\nDara: Out of a teacher and a chef, I would rather be a teacher because I like children and I’m quite used to working with children, so I think that job would fit me quite well.\\n\\nMonica: An actor or a journalist. I’d rather be a journalist because I’m very interested, at, with what’s happening with the world, um, and I love to learn what’s happening in society and other countries, so I think that’s what I would rather be the most.\\n\\nDes: I’d rather be an author, and I’d rather be an author than an engineer because, erm, I think I could reach more people by writing books and I could work from home.\\n\\nTian: Farmer or a politician.\\n\\nEva: I think I’d rather be a politician, no, wait, no, a farmer because I don’t like arguing with people.\\n\\nTian: I’d rather be a politician because I like arguing with people.\\n\\nDaniel: If I was to choose between being a teacher and a chef, I think I would prefer to be a chef, erm, probably because I do my own cooking and I really enjoy it. It’s one of my hobbies. So I’d like to work in a kitchen sometime.\\n\\nSky: I’d prefer to be a farmer ’cause I like being outside in nature, and I don’t think I would be a very good politician.\\n\\nRohan: Um, an author or an engineer. I’d definitely go for an author because I love stories and I would love to share a good story as well.\\n\\nAnais: I think I’d prefer to be a chef over a teacher. Erm, I think it would just be pretty cool to make some cool dishes. I don’t think I’d really like to teach.","4:vlogs":"1 True stories are really interesting, but I prefer fiction. I like the challenge of having to read between the lines, and really trying to understand what the author’s trying to say.\\n\\n2 Erm, I read both I think. I read, er, non-fiction for work, which is most of my time, er, but when I go on holiday I love to read, erm, detective stories.\\n\\n3 I prefer true stories over fiction. I prefer watching documentaries over films. My favourite subject at school was history.\\n\\n4 I prefer reading fiction, er, particularly poetry, but I like watching documentaries.\\n\\n5 I prefer reading non-fiction books, especially letters or memoirs. You can really learn a lot about the daily lives of famous people from these.\\n\\n6 I like to read the news online, er, every evening, because I like to see what’s going on in the world, and, er, I also like to read biographies; particularly about musicians and sportspeople, because I find them inspiring, and I like to find out more about their lives.\\n\\n7 I think I probably prefer fiction. I just love being taken away to new worlds and, you know, growing with the characters and finding out what happens to them. Um, but I do read lots of non-fiction, and I do really enjoy documentaries as well.\\n\\n8 When I was younger, I definitely preferred fiction – I used to love getting lost in stories – but, as I get older, I definitely prefer more true stories, especially historical stories or biographies of interesting or famous people.","4:programmes":"Holly: Adam!\\n\\nAdam: Holly?\\n\\nHolly: Wow, that’s …\\n\\nAdam: Whoa, this is … crazy!\\n\\nHolly: I know!\\n\\nAdam: Er, how long’s it … ?\\n\\nHolly: Oh, years. Seven years. Um, I thought you were living New Forest way?\\n\\nAdam: Yeah, I moved back a few months ago. Er, long story. You look good.\\n\\nHolly: So do you.\\n\\nAdam: Wow. God, I never thought I’d, er … This is madness!\\n\\nHolly: Well, give me a hug!\\n\\nAdam: Oh, er. Ha ha! So, do you live round here, or … ?\\n\\nHolly: Er, not far. I have an apartment.\\n\\nAdam: Right.\\n\\nHolly: You?\\n\\nAdam: Yeah. Er, bought a place. Nothing special. Cathedral Road?\\n\\nHolly: Nice. Where are you working?\\n\\nAdam: Porter Collins? For my sins.\\n\\nHolly: Still making a living out of others’ misfortune?\\n\\nAdam: Hey, ever since I was a little boy, I said, ‘When I grow up, I want to be an insurance loss adjuster’.\\n\\nHolly: Ha ha ha! Mm …\\n\\nAdam: You?\\n\\nHolly: I’m a manager. This online sports place.\\n\\nAdam: Wow!\\n\\nHolly: Yeah, 150 staff.\\n\\nAdam: Amazing!\\n\\nHolly: I, er, can’t complain. I mean, it’s long hours, lot of responsibility, but, you know, I like it, I like managing people, you know, making sure I get the best out of my team.\\n\\nAdam: Um … It’s amazing bumping into you. We should … catch up, or …\\n\\nHolly: That would be great. … If it’s not weird for your wife? I mean, you know, ex-girlfriend alert.\\n\\nAdam: I’m sure she’ll be fine, especially as we’re separated and she lives with a guy called Zane.\\n\\nHolly: Shall we swap numbers?\\n\\nAdam: Great, yeah. Er, punch yours in here. I’ll call you.\\n\\nHolly: I’ll just … um, make sure I’ve got yours. It … minute … There we go.\\n\\nAdam: Er, it’s good to see you again.\\n\\nHolly: You too.","5:vlogs":"1 A few weeks ago, my dishwasher broke down, erm, and I realised it once the dishwasher was full, and it just would not work. So, I had to take everything out and wash everything by hand. It was very, very annoying.\\n\\n2 Last week, we had a problem with our broadband connection. It kept dropping out, which was really frustrating when we were trying to watch television or when my son was gaming.\\n\\n3 Before I left on vacation, I went to a car rental agency and I reserved a car. But when I got here, they told me there weren’t any cars available. They had all been rented. Ugh!\\n\\n4 Yes, I, I recently had a problem with the person who delivers, er, milk to my house, because sometimes he just doesn’t deliver the milk, erm, and sometimes he leaves it in the wrong place. Erm, so yeah, I’m not going to use him anymore. I’m going to buy it from the shops.\\n\\n5 The last time I had a problem with a product or a service was actually with these glasses. I had an eye test back in January, um, and they made up some new glasses for me, but for some reason they weren’t right. So, I went back, had another eye test; again, they made some new glasses, they still weren’t right, and this continued for months and months and months. It was really annoying.\\n\\n6 I like to order food delivery online. It’s so convenient! I usually don’t have any problems, but last week I had a problem – my food didn’t arrive. I can track where my food is on the app. I asked them to leave it by my doorway, it even showed me a picture of when it arrived. But, when I opened the door, my food wasn’t there.","5:streetint":"Dean: I always do the washing up myself because, er, I used to work in a café, in a restaurant, and, er, I, I know how to do it the best. And it annoys me when I see people do it wrong so I always make sure that I do it so that it’s perfect every time.\\n\\nImogen: Yeah, I mean I always do the dishes, er, and like the general kind of cleaning, we don’t have a cleaner. Erm, I actually always cut my own hair. Yeah, find that a lot, er, cheaper.\\n\\nRory: Er, I always try and sort of fix things that I’ve broken myself. So for example, when I was living at uni I broke the cupboards to my, in my kitchen, and I really didn’t want to call a handyman to get it done, so I really tried to fix that myself.\\n\\nEden: Oh, interesting. I always clean my own room, I make dinner on a Tuesday … Uh, what else do I do? Think that’s about it. Yeah.\\n\\nJane: I always walk the dog ’cause no one else in the house will do it.\\n\\nElpida: I do the housework myself. I don’t pay a cleaner to do it.\\n\\nSagar: Erm, I always try and do the DIY in the house, so I try and fix broken shelves and cupboards, erm, and I always try and fix my own car myself.\\n\\nAisha: I do my grocery shopping by myself rather than getting it delivered. Exs 3B and 3C\\n\\nDean: Um … so we have a gardener, so we always get our grass cut for us. Um … I’m too lazy to do it and he does the best job, so it’s worth the money.\\n\\nImogen: Erm, yeah I always have my car cleaned. Erm, … I think that’s probably it, yeah.\\n\\nRory: Yeah, I, I always get my hair cut professionally, because I would not trust myself or anyone else to do it for me ’cause I want to look good.\\n\\nEden: So, I get my food delivered, I get my hair coloured and I get my nails painted.\\n\\nJane: We get our windows cleaned every month by a professional window cleaner.\\n\\nElpida: Um … I get a mechanic to check my car every year, to see if it’s working properly, and pass the MOT test.\\n\\nSagar: I would always have my hair cut by a professional. Um … Yeah, that was it, yeah.\\n\\nAisha: I’d get someone to colour my hair rather than do it myself.","6:vlogs":"1 My favourite city is Katowice in Poland. I really love that city. The architecture is just beautiful, and it’s not too big, it’s not very small. It’s a very friendly city.\\n\\n2 I would choose Rio de Janeiro in Brazil as my favourite city from the ones that, erm, that I know. It has magnificent energy, er, people are very friendly. You have the sea, you have the, the mountains, you have forests. Actually, you have the biggest forest in a city in the world – it’s there. Er, it has football, it has music – it has samba. Erm, it’s really the place to go and visit.\\n\\n3 My favourite city is Valencia in Spain because I absolutely love Spanish culture, and I love the traditional and modern architecture.\\n\\n4 My favourite city is Lisbon. It has wonderful architecture and amazing food, and it’s so easy to get around.\\n\\n5 My favourite city might be Istanbul. I love it because it is very beautiful, full of history, and it really is a point where East meets West.\\n\\n6 My favourite city has got to be York, which is in the north of England. It’s so old and has a very rich history. And it’s beautiful in any season – spring, summer, autumn, winter – it doesn’t matter. There’s beauty everywhere.\\n\\n7 My favourite city is Paris. I lived there for two years after I left university. And it is so beautiful, it’s so human, it’s so full of life, and it’s definitely my second home now.","6:programmes":"Reggie: Shenzhen, China’s ‘Miracle City’. This entire region used to be farmland and fishing villages, home to just 30,000 people. But in just four decades, it’s become a teeming metropolis of over 12 million and the epicentre of China’s tech revolution. They say if you want to see the future of the human race, you want to come here. But what draws people to this extraordinary city?\\n\\nReggie: Hello.\\n\\nReggie: Among Shenzhen’s population are a growing number of expats – tech entrepreneurs who could work anywhere in the world, and they’re choosing this city.\\n\\nReggie: Hello. Hi, er, Reggie.\\n\\nDuncan: Hey, how’s it going? Welcome to HAX.\\n\\nReggie: Duncan? Nice to meet you.\\n\\nReggie: Duncan is a Brit who essentially runs his own Dragons’ Den.\\n\\nReggie: What is it about China specifically over somewhere like the UK?\\n\\nDuncan: Right.\\n\\nReggie: What’s keeping you here?\\n\\nDuncan: It’s just, like, the speed of change here. It’s … It’s actually addictive, like, you realise, ’cause I go back to the UK fairly often, how things really haven’t changed that much. Whereas here, you blink and everything’s completely different.\\n\\nReggie: Innovators from all over come here with their ideas. This team have created glasses that can talk to your ears. Tap ’em and they start telling you things – from what’s in your diary to the weather. This company is making robots for car parks. And these two are seriously into their ping pong. The pace of change here is undeniable. So much so, it even has its own name: ‘Shenzhen Speed’.\\n\\nReggie: This monument … You’ve got these years, er, on this monument which reference different years of importance clearly to the area, and ’78, ’79 is around about the time when things really started to change here in Shenzhen, and, erm, ’82 is the year before I was born. So, you know, this is pretty much my lifetime. When you compare the changes in the area that I was raised in versus here … I mean, in my lifetime, we’ve had some nice new roads laid, er, there’s a shopping centre that’s gone up. It’s unbelievable.","7:vlogs":"1 I love words that sound a bit like what they mean, erm, like, er, ‘lazy’. That’s a good one, because it’s got a ‘zzz’ in the middle, which is a kind of sleeping sound. So, ‘lazy’, mm, yeah, that’s one of my favourites.\\n\\n2 My favourite word is a Scottish word and it is ‘wheesht’, and it means ‘be quiet’. And there’s a variation of that, which is ‘hold your wheesht’, which means pretty much the same thing: ‘hold your tongue’, ‘hold your silence’.\\n\\n3 My favourite word in the English language might be ‘petrichor’, er, which is the smell of earth after it rains. I just think it’s very nice.\\n\\n4 I really like the word ‘giggle’, er, because it makes me smile and, erm, sometimes it makes me giggle, and it’s good to laugh.\\n\\n5 My favourite word is to ‘groke’. It means to stare at people who are eating in the hope that they will give your some of their food.\\n\\n6 One of my favourite words is a Japanese word, ‘yosh’, and it means ‘OK’ or ‘all right’. And, let me give you an example: In English if I’m going to pick up something really heavy, I say ‘OK, all right, I’ve got this’. But in Japanese, all you have to say is ‘yosh!’ It sounds great!\\n\\n7 My favourite word is ‘mangelwurzel’ because it sounds funny. A mangelwurzel is a vegetable that grows underground like a potato. Erm, in the fields near my house there are a lot of mangelwurzels.","7:streetint":"Zoe: I hope so. I think I’m quite friendly, so I feel like I can talk to people quite easily.\\n\\nJoshua: Yeah I think I’m good at communicating but there’s, there’s certain situations where I struggle a bit.\\n\\nJanine: Yes, I think so. With my line of business and work, I have to work with lots of people across lots of platforms and yes, that’s definitely a key requirement.\\n\\nMonica: I think I am a good communicator. I may ha ... , make some mistakes with grammar since I’m from Spain, but I would like to think that people can understand what I’m saying.\\n\\nPear: I would say I am a good communicator, if I’m having a good day, but if I’m having a bad day, I think my communication is lacking.\\n\\nLily: I’d say I’m a good communicator but only through speaking. I’m not great at communication through writing. Does that make sense?\\n\\nMichael: Um, I could be a better communicator, is what I would say.\\n\\nHannah: I think I’m quite a good communicator. I’m quite honest, so I feel like someone knows if they’ve done something wrong or if I like them.\\n\\nYiannis: I believe that I am a good communicator. Um … I do a lot of public speaking and debating, and I enjoy talking to people, so yes, I think I am a good communicator.\\n\\nRaihan: I do not think I’m a good communicator. I get shy when I speak to a large audience. Exs 3A and 3B\\n\\nZoe: When there’s conflict I try to stay out of it, definitely.\\n\\nJoshua: Yeah, er, so do I, and, erm, in large groups I find that quite difficult as well.\\n\\nJanine: I think online, generally, um, it’s easier to work face to face with people. Um, I think it’s more, um, creative.\\n\\nMonica: I think probably when I’m public speaking, I get a bit nervous, so I, I want to practise a lot before I do it, erm. But yeah, practice makes perfect.\\n\\nPear: I think it can be difficult to communicate when I am feeling sad, because … or angry, because I am busy thinking about myself, so I’m not thinking about how I’m coming across to other people.\\n\\nMichael: Um, communication I would say under pressure, that’s, that’s definitely um, when you’re under pressure, choosing the right words can, can be difficult.\\n\\nHannah: Um, I think if I’m angry I’ll find it quite difficult to communicate. I can’t find the words to explain why I’m angry.\\n\\nYiannis: I have difficulty communicating with girls, ’cause it’s very hard to talk to them sometimes.\\n\\nRaihan: So do I. Especially when I like them, it makes me all nervous.","8:vlogs":"1 It’s actually a piece of advice that my husband was given by his boss. It’s very simple and yet very important: er, good enough is good enough.\\n\\n2 Don’t go supermarket shopping when you’re hungry because you will buy lots of food that you don’t need, and you will probably buy snacks like chocolate and crisps.\\n\\n3 The best advice I was given is to work hard, erm, always look after your health, er, try to join a gym, because health is wealth.\\n\\n4 The best piece of advice I ever got was from my coach, who told me that you learn more from your mistakes than you do from your successes.\\n\\n5 I think the best advice that I ever got was to get a dog. Erm, er, my dog is my best friend, and he has been for the last eleven years. Erm, I absolutely love him.\\n\\n6 The best piece of advice that I’ve ever been given came from my mother. She told me to go and eat a banana when I can’t sleep at night. It’s brilliant! Works like magic!\\n\\n7 The best piece of advice I’ve ever been given, er, was by a colleague of mine a few years ago when I was thinking about the next steps in my career. And at the time I was overthinking it and overanalysing it. And what my colleague told me at the time is to, to just follow my heart and see what feels good for me, what feels right for me. Er, and that’s what I did. And it proved to be the right thing.","8:programmes":"Narrator: Next to face the Dragons is entrepreneur, Jacob Thundil, with his food and drink business. But will any of the Dragons want to invest?\\n\\nJacob: Hello, Dragons. I’m Jacob Thundil, chief nut at Cocofina – the coconut experts. We produce coconut products to eat, drink and cook with. I was born in a place called Kerala, and Kerala means in Sanskrit, ‘land of coconuts’. Cocofina was my destiny. As a young boy, I was fascinated with the amount of uses out of coconut and today I use coconut products every day. The market for coconut oil and coconut water alone in the US is worth around £750 million and, in the UK, £50 million pounds, and doubling annually. Our turnover figures over the last three years has been £1 million, £600,000 and £300,000. I’m offering 5% for £75,000. I would welcome you to try our products.\\n\\nNarrator: It’s a confident pitch from Jacob Thundil, who’s asking for £75,000 for a 5% share of his business. With a wide range of coconut products, from water and milk, to snack bars and oils, Jacob has a lot to offer. But will any of the Dragons be interested?\\n\\nDragons: Thank you.\\n\\nNarrator: First up its Touker Suleyman who wants to know more about the business structure.\\n\\nTouker: Describe your organisation to me.\\n\\nJacob: So, there’s me and then there’s a lady that started with me. Er, she’s a 50% shareholder of the business.\\n\\nPeter: What’s her name?\\n\\nJacob: Er, Manisha.\\n\\nNick: Can we meet her?\\n\\nJacob: Yeah, sure. She’s, er, she’s downstairs.\\n\\nNarrator: Jacob’s business partner, Manisha Solanki, is a little camera shy. But as she owns 50% of the business, the Dragons are keen to meet her.\\n\\nDragons: Hello.\\n\\nJacob: This is Manisha.\\n\\nManisha: Hi Dragons.\\n\\nNick: Manisha I apologise for dragging you out at, er, with no notice, but er, it’s obvious that you’re a very important part of this business. What I’d like to understand is how you divide the roles.\\n\\nJacob: I’m sales, marketing, purchasing. Manisha is all operations, so logistics, all the deliveries, everything like that.\\n\\nTim: Great.\\n\\nManisha: So, basically, once he has made the sales, I take care of everything. 173 VIDEOSCRIPTS\\n\\nNarrator: The Dragons now have a clear understanding of the business. But will anyone make an offer?\\n\\nDeborah: So, I’m going to make you an offer. And I’m going to offer you all of the money. I want 20% of the business. And I want 20% of the business because there is, a – obviously the contacts that I can bring, but I think the development side … there’s a little bit of work that needs to be done on that. But I think we are the team that can do it, so that’s my offer to you.\\n\\nNarrator: Deborah’s sudden offer is a good start for Jacob and Manisha. But she wants 20% of their business – a lot more than they want to give away. Can online expert Nick Jenkins do any better??\\n\\nNick: Well, I think I might pitch in with an offer as well. I love the passion you have for the product. So, I’m going to match the offer. All of the money for 20%.\\n\\nNarrator: Sarah Willingham, who owns several successful restaurants, is also interested.\\n\\nSarah: So, I’m going to match the offer. All of the money for 20% of the business.\\n\\nNarrator: Jacob and Manisha now have the same offer from three of the Dragons. But Jacob has a question of his own.\\n\\nJacob: If we were to buy the shares back from you for double the money in three years’ time, would you give up 10% back to us?\\n\\nNarrator: Jacob wants the option to buy back 10% of the business when it starts making money. But will any of the Dragons accept?\\n\\nNick: I don’t have a problem with that.\\n\\nNarrator: Nick is happy to sell 10% of the business back to Jacob after one year. And Sarah is still interested, too.\\n\\nSarah: I would just want to add one thing, that I would very much be prepared to split it with another Dragon.\\n\\nNick: Sarah, would you be prepared to split it on the terms that I suggested?\\n\\nSarah: Yes, I would. I would be prepared to split it with Nick.\\n\\nNick: I think between the two of us, you get two for the price of one!\\n\\nJacob: I don’t think we need to discuss further.\\n\\nNick: Right, OK.\\n\\nSarah: Brilliant.\\n\\nNick: Brilliant. Great.\\n\\nJacob: Thank you very much, sorry.\\n\\nSarah: Hug! Oh, brilliant.\\n\\nNarrator: Jacob and Manisha have done it. They’ve given up 20% of their company but will be mentored by two Dragons. 174 VIDEOSC R IPTS"}'),Xg={audio:Ix,video:Sx},Ex=JSON.parse('[{"code":"1A","title":"narrative tenses","refPage":9,"pdf":103,"paragraphs":["1A narrative tenses When we tell a story, we often use a variety of tenses. These are called ‘narrative tenses’ and they include the past simple, the past continuous and the past perfect. It is important to use the correct tense as this gives us information about the sequence of events and the most important details of the story.","It was a cold, wet day and the wind was blowing Josh was walking down the road when suddenly, he heard a terrible crash. He turned around and saw that a woman had crashed her moped.","Luckily, the woman was fine, but the moped been badly damaged.","## Past simple","We use the past simple to talk about the main events of a story and other completed actions.","Suddenly, he heard a terrible crash.","She woke up early and decided to go out for a walk.","she decided she woke to go out up early for a walk","## Past continuous","We use the past continuous:","• to give background information to a story.","• to refer to temporary or changing past states","and situations.","The sun was shining. The wind was blowing (background information) He was living in Brazil. (at the time of the story, temporary) We were travelling around Australia. (temporary) we were travelling around Australia","## Past perfect","We use the past perfect to talk about an action which happened before the main events.","When I got to the top floor office I realised I left my phone in the car.","When we arrived at the station, the train had already left.","the train leftwe arrived at the station The past perfect links a past point ( we arrived at the station ) to a point further back in time ( the train had left )."]},{"code":"1B","title":"verb patterns","refPage":12,"pdf":104,"paragraphs":["1B verb patterns Sometimes we put two verbs together.","They hope to learn Spanish.","I like playing ball games.","When thefirst verb takes a preposition (except to ), the second verb is usually in the - ing form.","You should think about doing that course.","Ifinally succeeded infinding a job.","We believe in telling the truth.","You should concentrate on passing your exams.","I dream about playing for that team.","She apologised for getting angry.","He struggles with working at night.","I care about saving the environment.","When a phrasal verb is followed by a verb, the second verb is usually in the - ing form.","We carried on driving for another hour.","I look forward to reading your new book!","She gave up studying at night.","We put offmaking that decision.","Some phrasal verbs can be followed by an infinitive or an -ing form, but with a change in meaning.","Compare the two sentences.","She went on dancing even after her accident.","She went on to be a great dancer.","Go on + - ing means ‘continue’.","Go on + to infinitive means ‘end up’.","He grew up watching his father play football.","He grew up to be a great footballer.","Grow up + - ing means ‘do something while changing from being a child to an adult’.","Grow up + to infinitive describes what a person becomes as an adult.","Some verbs (without prepositions) can be followed by a to infinitive or an -ing form, but with a change in meaning.","I stopped to talk to Felipe.","I stopped listening to rock music years ago.","Stop + to infinitive means ‘paused an action in order to do a different action’.","Stop + - ing means ‘change a habit orfinish a repeated/extended action’.","I must remember to set the alarm.","I remember playing with those toys when I wasfive or six.","Remember + to infinitive means you have a responsibility which you must not forget.","Remember + - ing means you have a memory of something that happened in the past."]},{"code":"1C","title":"How to … leave phone messages","refPage":15,"pdf":105,"paragraphs":["1C How to … leave phone messages","## Direct requests","We can make a direct request by using Can you/Could you or Will you/Would you …, please?","Can/Could you call me back?","Will/Would you (look for it/pick some up),","## Indirect requests","We can soften a request to make it sound less direct by using phrases like: Do you think you could/you’ll be able to …?","I wonder if you could/would …","I wonder if you’d mind … + - ing Do you think you could have a look for it for me?","I wonder if you’d help me set the alarm.","I wonder if you’d mind helping me lock up.","Notice with indirect requests, the word order is the same as for affirmative statements.","Do you think you could NOT Do you think could you","## Leaving a phone message","We use particular phrases when speaking on the phone or leaving a phone message. For example, we say: It’s Max speaking./It’s Max here./This is Max speaking/ calling about … NOT I’m Max.","things you’ll hear on a recorded message You’ve reached (Riccardo’s) mobile.","Please leave a message and we’ll get back to you Thank you for calling (Dr Singh’s office). Our (o hours are (8 a.m. to 6 p.m.).","I can’t take your call right now, but if you leave a message with your name and number, I’ll get back to you as soon as I can.","starting a message It’s (John) here.","This is (Marcelo Fagundes). I’m calling about …","I’m calling to (ask for/request) …","I was ringing to (see if/ find out if) …","making a polite request Can you/Could you (call me back/check) …?","Will you/Would you (look for it/explain …), please?","Do you think you could (have a look at it for me)?","I wonder if you would mind (having a look/helping me) …?","giving detailed information You’ll need to (open the … /speak to …).","It’s the (one) that’s (sitting on the desk).","You’llfind it (on the table next to the …).","The event starts at …, (so you have to be there at …).","asking for further phone actions Can you call me back?","You can reach me on (this number/0775867435)."]},{"code":"1D","title":"except for , apart from , (not) even","refPage":16,"pdf":106,"paragraphs":["1D except for, apart from, (not) even except for We use except for + noun to say that something is not included.","The school teaches most ball sports except for golf.","We use except for to introduce the one person/thing that means a statement isn’t 100 percent true.","All the children are here except for Leila.","(Leila is the only child who isn’t here.) I like vegetables, except for onions.","(Onions are the only vegetables I don’t like.) When except for follows a noun, we can omit for with no change in meaning.","She loves ball games except (for) golf.","They speak all the Latin-based languages except (for) Romanian.","When we use except as a conjunction that joins two clauses, it cannot be followed by for. The meaning is the same as except for.","My dogs are similar except for the oldest one is bigger.","The books look good except for the covers are slightly damaged.","apart from Apart from + noun means the same as except for.","We’re open every day apart from Sunday.","Apart from Kenzo, the whole family came to the wedding.","I like all types offilms apart from documentaries.","Apart from the sound of the clocks, the house was silent.","even We use even to emphasise that something is surprising or unusual.","John doesn’t usually watch TV, but even he liked that programme!","I’ll help you with the project. I’ll even stay with you after work tofinish it.","not even We use not even to emphasise a surprising negative point.","Not even Jo, whose English is very good, could understand what he was saying.","She’d changed so much I did n’t even recognise her!"]},{"code":"2A","title":"present perfect continuous","refPage":22,"pdf":107,"paragraphs":["2A present perfect continuous We use the present perfect continuous to talk about actions and situations which started in the past, but are notfinished. They continue until now.","I’ve been studying Mandarin since last year.","studying Mandarin.) He’s been living in the UK for ten years. (He still lives in the UK.) We use the past simple when the action or situation is finished.","I studied Mandarin last year. (I’m not studying it now.) He lived in the UK for ten years. (He’s not living there now.) We form the present perfect continuous with been + -ing form.","## I’ve","+ been reading","## She’s","## They haven’t","- been listening","## He hasn’t","## Have you","working? been long time?","## Has she","We use the present perfect continuous with to talk about the length or duration of an activity, or when it started.","We use since to refer to a point in time.","They’ve been living in New Zealand since 2020.","She’s been waiting for you since 2 p.m.","We use for to talk about a period of time.","We’ve been working together for over twenty years.","We use How long …? to ask about the length of time.","A: How long have you been playing the drums?","B: I’ve been playing since I was six years old.","We use the present perfect continuous with to talk about actions and situations that are relevant now.","I haven’t been sleeping very well recently.","She’s been working very hard lately. (She deserves a promotion.) We often use the present perfect simple or the present perfect continuous (with little change in meaning) especially for verbs such as live, work, teach, I’ve lived here for years.","I’ve been living here for years.","We do NOT use the present perfect continuous with state verbs (e.g. love, hate, like, have, enjoy, know, understand believe, etc.). With these verbs we use the present perfect simple.","I’ve known him for ages. NOT I’ve been knowing him for ages.","I’ve had this car for three years. NOT I’ve been having this car for three years."]},{"code":"2B","title":"relative clauses","refPage":24,"pdf":108,"paragraphs":["2B relative clauses We use defining relative clauses to give essential information about a person, a thing, a place, a time or a possessive.","We use relative pronouns who, which, where, when whose to introduce the relative clause.","A specialist is someone who knows a lot about a subject.","Do you remember the time when we went on holiday together?","Once there was a girl whose name was Lilibet In defining relative clauses we can use that to replace who, which or when.","Swimming is something that always makes me feel better.","We can leave out who, which and that when the relative clause already has a subject.","Rob Jenkins was a teacher ( who ) I knew at college.","I is the subject of the verb knew. Who is the object of the verb, so can be leftout.","Rob Jenkins was a teacher who taught me maths.","Who is the subject of the verb taught, so we must keep who.","We can replace a defining relative clause with verb + -ing.","The winner is the person ending up with the most points. = The winner is the person who ends up with the most points.","We can replace a defining relative clause with infinitive. We often use to + infinitive with thefithe last, the only and superlative adjectives.","Who was the last person to see John? = Who was the last person who saw John?"]},{"code":"2C","title":"How to … talk about things that annoy you","refPage":27,"pdf":109,"paragraphs":["2C How to … talk about things that annoy you We use these phrases to talk about things that annoy us.","I can’t stand it.","I can’t bear it.","It really annoys me.","It gets on my nerves.","It bugs me.","It drives me crazy/nuts/mad.","Don’t get me started on (people who never say thank you).","Notice It bugs me and It drives me nuts are informal.","With all the phrases above we can continue with when and a clause.","I can’t bear it when that happens.","It gets on my nerves when people drop litter.","It drives me nuts when people don’t answer my messages.","We can also use a relative clause or -ing.","Children that misbehave in restaurants really bug me.","I can’t stand people shortening my name.","We can use other short phrases to agree or disagree.","Yes, so annoying.","I don’t mind that.","That doesn’t bother me.","## Verbs in the continuous form","We can use the present and past continuous with always, constantly, continually, forever to describe a habit which wefind annoying.","You’re always losing your phone!","My dad’s forever complaining about noise.","Our car was continually breaking down.","We also sometimes use this structure to show a positive emotion.","Children at this age are so cute. They’re constantly laughing!"]},{"code":"3A","title":"conditional structures: unless","refPage":34,"pdf":110,"paragraphs":["3A conditional structures: unless unless We use unless to mean if not.","Unless you hurry up, we’re going to leave without you.","(If you don’t hurry up, we’re going to leave without you.) Please don’t park here unless you’re a member of sta (Please don’t park here if you’re not a member of sta When the unless clause isfirst in a sentence, we use a comma at the end of the clause.","Unless she speaks slowly, I can’t understand Liz.","When the unless clause is second, we don’t usually use a comma before it.","I can’t understand Liz unless she speaks slowly even if We use even if for emphasis, to say that something will not change a situation.","Even if the company pays me twice as much, I’m going to leave.","I’ll never speak to her again even if she says sorry.","When the main clause and the even if clauses are long, we use a comma to divide them.","in case We use in case to talk about being prepared for the possibility that something might happen.","Take your umbrella in case it rains.","We often use it with just.","I’ll make some sandwiches just in case we get hungry later.","The in case clause is usually second in a sentence.","We don’t use commas before or after the clause.","in case of We use in case of + noun in formal situations to mean ‘if something happens’. It is often about a bad or dangerous situation.","In case offire, break the glass.","In case of bad weather, the ceremony will be held indoors.","We often use it in formal written information.","The in case of clause usually comesfirst in a sentence.","We use unless, even if and in case + present tenses to speak about the present or the future.","I can’t help you unless you tell me the problem.","unless you’ll tell me the problem.","We can also use unless, even if and in case + past tenses when we are speaking more hypothetically.","Even if I won a million euros, I wouldn’t change my job."]},{"code":"3B","title":"necessity, obligation and permission","refPage":36,"pdf":111,"paragraphs":["3B necessity, obligation and permission","## Necessity and obligation","Many phrases can express both necessity and obligation, depending on the context.","I need to take some time o ff. (It’s important that I take time o ff. It’s a necessity.) I need tofinish this report by tomorrow.","(Someone, for example my manager, expects me tofinish the report. It’s an obligation.) We use be necessary to, be essential to and needs to be done when the focus is on the action.","We use be necessary to + infinitive to say that you must do or be something.","It’s necessary to have a driving licence. ([You] must have a driving licence.) We use be essential to + infinitive to say that something is necessary and important.","It’s essential to take her to hospital immediately.","([We] must take her to hospital immediately. It’s very important.) We can also use need to + be + past participle to say something is an obligation or a necessity.","This job needs to be done by tomorrow morning.","We use have got to and be supposed to when the focus is on the person.","We use have got to + infinitive for obligation and necessity. It means must or have to.","It is a little more informal than must or have to.","I’ve got to get home by ten.","In informal spoken English this is often pronounced gotta.","She’s gotta think about it.","We use be supposed to + infinitive for something which is an obligation, but which we don’t always do.","I’m supposed to wear a hat when I deliver food, but I don’t.","Robbie’s not supposed to call customers by their first names, but he often does.","## Permission","We use be (not) allowed to + infinitive to say that something is OK, you can do it, or it’s not OK, you can’t do it.","Our children are allowed to play computer games for two hours at the weekends.","I’m not allowed to go to bed after midnight.","We can also use be (not) permitted to to mean the same thing. It is more formal than be allowed Office workers here are permitted to wear casual clothes on Fridays.","Drivers are not permitted to drive more than eight hours without a break."]},{"code":"3C","title":"How to … take part in an interview","refPage":39,"pdf":112,"paragraphs":["3C How to … take part in an interview typical interviewer questions Tell me a bit/something about yourself/ your current job/your last job.","Why do you want/Why are you interested in this job/position?","What will/would you bring to the company?","What questions do you have for me about the job/position?","How long have you been working/did you work at …?","Why have you decided/did you decide to leave your current/last job?","phrases to check We use these phrases to check we understand the question and how we need to answer: Where should I start?","How do you mean?","Can I use an example from university?","Are you asking what criticisms they might have?","What do you mean by ‘researching newflavours’?","interviewee’s answers I’ve done some research about the company.","One of my main strengths is that I …","I think I have a lot to offer.","I think people/my colleagues would say (that) I …","## I’ve always loved/worked …","It’s important for me to …"]},{"code":"3D","title":"expressing preferences","refPage":40,"pdf":113,"paragraphs":["3D expressing preferences would rather We use would rather + infinitive + than to talk about:","• our general preferences.","Zayan would rather cook with electricity with gas.","• specific situations.","I’d rather pay by phone if that’s all right.","• hypothetical situations.","I’d rather be happy than (be) rich.","Would you rather spend a night in an aquarium or a library?","To make the negative, we use would/’d rather not + infinitive.","I’d rather not answer that question.","We use would much / far rather to show a strong preference.","We’ d much rather go skiing than surfing.","I’d far rather cycle to work than go by underground.","prefer, would prefer We use prefer + noun/- ing form + to to talk about:","• our general preferences.","I prefer cats to dogs.","In general he prefers working alone to working with other people.","We use would prefer + to + infinitive to talk about:","• specific situations.","I’d prefer to get a takeaway tonight.","• hypothetical situations.","Would you prefer to live in the Arctic or the Sahara Desert?","To make the negative, we use would/’d prefer not to + infinitive.","I’d prefer not to meet today. Tomorrow is better.","We use much prefer and definitely prefer to show a strong preference.","I much prefer playing tennis to watching it on TV.","I definitely prefer cats to dogs.","I’d much/definitely prefer to go by train.","We can also use would go for to mean would choose/prefer.","Which would you rather be, a teacher or a doctor?","I’d go for a teacher."]},{"code":"4A","title":"past plans and intentions","refPage":45,"pdf":114,"paragraphs":["4A past plans and intentions We use was/were going to to talk about a planned action in the past that didn’t happen.","I was going to call you, but I was too busy.","They were going to visit the museum, but it was closed.","The negative is wasn’t/weren’t going to.","We can also use planned to and hoped to as alternatives. These have a similar meaning to going to. We can use these in the past simple or past continuous.","I planned to visit last week, but I couldn’t in the end.","I was planning to take you to the new café, but we didn’t have time.","I hoped tofinish my project yesterday, but something went wrong.","I was hoping to meet your father, but he wasn’t there.","The negative of planned to is wasn’t planning to I wasn’t planning to go anywhere this summer.","(But maybe this changed.) We can use other verbs in the past continuous to describe past intentions: I was expecting to go to Turkey that year.","They were waiting tofinish university before they got married.","We can also use meant to to talk about a planned action in the past that didn’t happen. We use it more in the simple than the continuous.","I meant to introduce you to Xavier, but he left We meant to invite you, but we couldn’tfind your phone number.","The negative is didn’t mean to. We usually use this to describe when someone does something by accident.","Sorry – I crashed the car! I didn’t mean to!","She didn’t mean to cause trouble. She was trying to help.","We use intend to to show a planned action in the past. This sounds more formal than meant to, to, etc. We use it more in the simple than the continuous.","The doctor intended to see me last week, but he had to cancel.","We often use intend to focus on the reasons for an action.","He bought the ring because he intended to ask her to marry him.","The negative is didn’t intend.","She didn’t intend to do it. It was an accident.","We use thought it would be to talk about the reason for a planned action in the past.","I brought you because I thought it would be nice if you met my parents."]},{"code":"4B","title":"indirect and negative questions","refPage":47,"pdf":115,"paragraphs":["4B indirect and negative questions","## Direct questions","To make direct questions we usually use the word order: (question word) + auxiliary verb + subject + main verb (infinitive).","question auxiliary subject main verb word verb (infinitive) + phrase What do you know about the situation in …?","Where does he work?","Where should we put these bags?","## Indirect questions","We use indirect questions to sound more polite (and less direct). After the opening phrase ( Could you tell me …? Can I ask you …? Do you know …?","we use the affirmative form.","Direct: Where do I have to go?","Indirect: Could you tell me where I have to go NOT Could you tell me where do I have to go?","## Negative questions","We can also use negative questions to sound polite.","For negative questions we use the negative form instead of the affirmative form.","Wouldn’t you like a drink/something to eat?","Don’t you want to take your coat o ff?","Instead of: Would you like a drink/something to eat?","Do you want to take your coat o ff?","We use negative questions when we want to check or confirm information (we think we know the answer). We can also use negative questions to show surprise.","Didn’t she win an award? (I think she won an award, so I’m checking the information/confirming my belief.) Isn’t it time to go? (I think it’s time to go, and I’m surprised that you are not ready yet.) Did you see that documentary? (genuine question – I don’t know the answer.) Didn’t you see that documentary? (I expected the answer to be yes, and by using a negative question I show my surprise that I now think you didn’t.) We can use negative questions to try to persuade people that our idea is the best.","Don’t you think that we should take a taxi?","we should take a taxi.) Wouldn’t you say that this film is more interesting? (I think this film is more interesting.) Negative questions can be confusing to answer. To help with this, we can answer a negative question with a short sentence instead of yes/no.","A: Wouldn’t you like a drink?","B: Thank you, that would be lovely."]},{"code":"4C","title":"How to … talk about the news","refPage":51,"pdf":116,"paragraphs":["4C How to … talk about the news We can use the following phrases to help us talk about a news story.","initiating a discussion about a news story Have you heard about/seen …?","Did you hear the news about …?","## Are you following the news/story","about …?","describing/summarising the news story So, basically, what happened was …","I can’t remember the details, but, basically, …","## It seems/appears …","Apparently, …","commenting on the story It’s all over the news.","I saw it on the news/on TV.","It’s on all the news channels.","It’s received a lot of coverage.","responding to a news story Really? I had no idea.","I can hardly believe it.","Oh no! That’s (terrible/awful/ unbelievable/really funny/sad, etc.).","That’s a relief.","That sounds scary."]},{"code":"5A","title":"clauses of purpose: to , so as to","refPage":57,"pdf":117,"paragraphs":["5A clauses of purpose: to, so as to Clauses of purpose with to infinitive We use clauses of purpose to talk about our reason for doing something.","(I’m organising a party) (to celebrate my birthday.) the action the purpose We use to + infinitive and in order to + infinitive to introduce purpose clauses.","I’m going downstairs to lock up.","I often turn offmy phone in order to avoid We can also use so as to + infinitive. We often use this for more formal situations.","The police put up barriers so as to stop people entering the building.","Notice The subject of the main clause and the clause of purpose is always the same.","( She is studying English) ( in order to get a better job).","She is studying and she wants to get a better job.","## Clauses of purpose with that","We can use so that + subject + verb or in order that + verb to talk about purpose.","We use these when the subject of the two clauses is the same or different.","I’d like to move closer to the stage so that I can hear The school is changing the exam date in order that have more time to prepare.","Remember: when the subject of the two clauses is di we use so that or in order that but NOT in order to I’m going to send you all the information so that you make a decision. NOT … in order to make a decision Clauses of purpose in the negative We put not before to in negative clauses of purpose: not to, so as not to.","He set his alarm for 7 a.m. in order not to oversleep I check my ‘to do’ list every day so as not to forget We can use not to, but it is not common except as a contrast.","I eat a lot of vegetables, not to lose weight my health.","We use a normal negative after so that and in order that Let’s check this very carefully so that we don’t make a mistake.","The company gave us our money back in order that we wouldn’t post a negative review.","## Clause order","The clauses of purpose usually come after the main clause, but they can comefirst.","When they comefirst, they are followed by a comma.","In order to buy a car, I had to save up for a year.","So that the team could take a break, all matches in August were cancelled."]},{"code":"5B","title":"comparative and superlative structures","refPage":61,"pdf":118,"paragraphs":["5B comparative and superlative structures","## Comparatives","We use comparative adjectives to compare nouns, and comparative adverbs to compare most verbs.","My new company is busier than my old one.","Could you speak more quietly, please?","We use a comparative adjective with verbs of the senses and feelings (e.g. look, taste, smell, feel, sound, seem ).","It seems quieter here than I remember.","We often use (not) as + adjective/adverb + as My chair is n’t as comfortable as yours.","I do n’t speak Spanish as well as you do.","We use quantifiers ( a bit, a little, slightly, much, adverbs to talk about how much difference there is.","This desk is slightly more expensive than that one, but it’s Dimitris is writing a lot more confidently now than he used to.","## Superlatives","We use superlative adjectives and adverbs to compare something with the rest of the group.","This is the least expensive way to send the package.","Mateo and Luciana have travelled the furthest We use quantifiers ( much, by far ) with superlative adjectives and adverbs to talk about how much difference there is.","Hyun Woo is by far the most talented young actor I’ve ever seen.","She talked much more clearly than I’d expected.","## Emphasising","We can repeat a comparative adjective or adverb to emphasise change.","The situation is more and more dangerous every day.","As we leftthe city, Bianca drove faster and faster We use than ever with comparative adjectives and adverbs for emphasis.","The new series is better than ever.","Hillary is working harder than ever.","It means the same as than before, but gives more emphasis. We can also use ever or ever before.","We’ve had more forestfires this year than before/ever/ever before We also use ever with superlative adjectives. We don’t use superlatives.","We’ve built a lot of hotels, but this is the tallest ever Other structures with comparatives and superlatives We use parallel phrases with the + comparative adjective/adverb, + comparative adjective/adverb.","The bigger the car, the more expensive it is, usually.","The more you practise, the better you’ll become.","Notice The comparative begins each clause.","NOT you practise the more, you’ll get the better.","We often use one of, some of, among with superlative adjectives.","This model is among our most expensive cars."]},{"code":"5C","title":"How to … summarise information from di","refPage":63,"pdf":119,"paragraphs":["5C How to … summarise information from di We use these phrases to summarise information from information that we read or hear.","saying where we got an idea from From what X say(s), …","From what everyone says, it’s a very reliable company.","According to X, …","According to the reviews, the film is the best ever in the series.","Notice that we use a comma after these phrases.","summing up ideas Long story short, …","Long story short, no-one seems to agree which is better value for money.","It’s a matter/question of (whether / how much / when, etc.) …","So, it’s a matter of whether I want to wait a long time.","All in all, …","All in all, there seem to be a lot of problems with that model.","Taking everything into account / If we take everything into account, …","Taking everything into account, I’ve decided to stick with my current broadband supplier.","In the end, …","In the end, I decided not to buy a new phone.","Notice We use a comma after these phrases.","focusing on a specific point Just because something is (+ adjective), it doesn’t mean (that) it is (+ adjective).","Well, just because something’s expensive, it doesn’t mean it’s better.","It all comes down to (the price / the colour / whether / how much, etc. …) It all comes down to the colour.","Notice After question words we use normal sentence order, not a question form.","It all comes down to when it would arrive.","comes down to when would it arrive.","It’s a question of how much it costs. NOT of how much does it cost.","focusing on a specific problem The (only) thing is (that) …","The thing is the watch isn’t waterproof.","The only thing is that Piotr advised me not to choose a hybrid."]},{"code":"5D","title":"causative have and get ; re","refPage":64,"pdf":120,"paragraphs":["5D causative have and get; re","## Causative have","We form the causative have with have + object + past participle.","I have my hair cut every six weeks.","Use the causative have:","• to say when you arrange for someone else to do","something for you. You usually pay them for the service.","We’re having our apartment painted at the moment (Someone else is painting our apartment, not us.) When did you have your bike repaired? (Someone else repaired the bike, not you.) Be careful with the word order. The causative different from:","• the present perfect.","I have cut my hair. Do you like it? (I have done it (recently) myself.) I have my hair cut every month. (Someone else does it every month.)","• the past perfect.","He had repaired his bike so it was safe to ride.","it himself.) He had his bike repaired yesterday. (Someone else repaired it.)","## Causative get","We use get + object + past participle:","• often in speaking more informally.","You need to get your eyesight checked.","• to emphasise that it is difficult to have something done.","I got my computerfixed, but it took a week to someone.","We can also use get + somebody + to infinitive:","• when we ask somebody to do something and they do it.","I got a friend to take me to the airport.","I got my hairdresser to cut it shorter than usual.","• we use this both for unpaid or paid work.","We need to get someone tofix this gate.","## Reflexive pronouns","We can use reflexive pronouns to emphasise that we have done something alone with no help.","Do you like this necklace? I made it myself.","Did you organise the wedding yourselves?","The reflexive pronouns are: subject pronoun reflexive pronoun I, you myself, yourself he, she, it himself, herself, itself we, you, they ourselves, yourselves, themselves"]},{"code":"6A","title":"so and such","refPage":69,"pdf":121,"paragraphs":["6A so and such So and such have similar meanings. We can use adjective/adverb to show emphasis or strong feelings about something. Without so the sentence would still be complete.","That part of the city is beautiful. ➞ That part of the city is so beautiful!","She played the guitar brilliantly. ➞ She played the guitar so brilliantly!","We can also use so + adjective / adverb + that describe something that leads to a result. In this use, without so, the sentence would not be complete.","It was so cold that we needed coats. NOT It was cold that we needed coats.","The restaurant was so busy that we couldn’t get a table.","NOT The restaurant was busy that we couldn’t get a table.","We can use such + a/an (+ adjective) + singular noun to show emphasis or strong feelings about something. An adjective often comes before the noun. Without sentence would still be complete.","We had such a nice day walking around the city.","The hotel was such a long way from the station.","It’s such a wealthy area.","The house was such a mess!","We can use such + uncountable or plural nouns.","It’s such bad weather.","The café serves such good coffee.","They’re such friendly people.","We had such fun.","We can also use such + (a/an) + adjective + noun clause to describe something that leads to a result. In this use, without such, the sentence would not be complete.","They had such a good time that they went back the next day. NOT They had a good time that they went back the next day.","It was such a boring job that she decided to change companies. NOT It was a boring job that she decided to change companies.","I had such heavy bags that I couldn’t walk very far.","NOT I had heavy bags that I couldn’t walk very far.","He gave us such good advice that we had no problems at all. NOT He gave us good advice that we had no problems at all.","In spoken and informal language we sometimes omit from so/such sentences with a clause.","I was so tired ( that ) I fell asleep.","It was such a boringfilm ( that ) we leftbefore the end."]},{"code":"6B","title":"be/get used to","refPage":72,"pdf":122,"paragraphs":["6B be/get used to We use be used to + noun/- ing to talk about something you are accustomed to doing. It is usual for you to do this.","I’m a pilot, so I’m used toflying.","The weather is hot, but we live in southern Spain, so we The negative is be not used to.","I’m not used to working at weekends.","We use get used to + noun/- ing to talk about something you become accustomed to. It is no longer unusual or strange.","Atfirst I didn’t like the food, but I soon got used to it I don’t think I’ll ever get used to their accent. It’s di understand.","The negative is not get used to.","We never got used to the pollution in the city.","Notice be/get used to are different from used to We use used to + infinitive to talk about a habit or state in the past, which is usually something you don’t do now or is no longer the case.","We used to live on a boat. Now we live in a house.","I didn’t use to like climbing. Now I love it.","1 Choose the correct words to complete the conversations.","1 A: You lived on a boat for years, didn’t you?","B: Yes, it was hard to get / be used to staying in a house.","2 A: I don’t think the climbers are ready to go up the mountain.","B: I agree with you. They’re still used / the altitude.","3 A: You said that now you’re back in England, you never go to cities.","B: That’s right. After spending so much time in the desert, I get /’m used to silence.","4 A: How was the experience of living in Siberia?","B: It was tough. We weren’t / don’t get such a cold climate.","5 A: Do the childrenfind anything difficult about living in a new country?","B: The food here is very different, but they’ll to it.","6 A: Will it be challenging for you to do this trip alone?","B: I’m not worried about spending months on my own.","I used /’m used to being alone.","7 A: What was the toughest thing for her when she moved to the UK from the US?","B: She had to be / get used to driving on the le 8 A: I like going on long walks.","B: Me too! When I was younger I was used every day.","9 A: Was it difficult for Jimmy in Switzerland?","B: Living in a mountain village was challenging, but eventually he wasn’t / got used to it.","10 A: Working under a manager is hard for her.","B: I know. She isn’t / doesn’t get used to being told what to do."]},{"code":"6C","title":"How to … ask for and con","refPage":75,"pdf":123,"paragraphs":["6C How to … ask for and con confirming understanding or asking for clari","## So you’re saying …","So what you mean is …","In other words, …","If I’ve got this right, …","So have I got this right, …?","So let me (just) check …","I don’t get what you’re saying.","If I’ve understood correctly, what you’re saying is …","asking someone to repeat a specific point Can you (just) say that last bit again?","Could you (just) go through those options again please?","I didn’t catch/understand what you said about …","Can you (just) repeat the bit about …?","In a request, we often use the word just to sound more polite, or less direct. It is not essential and it doesn’t change the meaning of the sentence.","Can I just ask you …?","Could you just tell me …?","Can you just say that last bit again, please?","1 Complete the conversations with the words in the box.","catch check correctly get options repeat right words 1 A: There are four different types of tickets you can get: a 24-hour pass, a family ticket, a hop-on, hop-o ticket or a seasonal ticket.","B: Sorry, could you just go through those please?","2 A: It costs £20 and it’s a four-hour non-stop tour.","B: I didn’t what you said about the cost.","3 A: The guide is downloadable and comes in eleven different languages.","B: Can you just the bit about how many languages?","4 A: The tour starts at 20.00.","B: So, have I got this? It leaves at 8 p.m.","5 A: You can’t buy food or drink on the boat.","B: So in other, we have to bring our own food.","6 A: You can buy a ticket or just use your bank card, although you might be charged an extra fee for that.","B: I don’t what you’re saying about the extra fee.","7 A: The boat leaves promptly at 7 a.m., but you need to be here thirty minutes before.","B: So, if I’ve understood, we have to be here by 6.30 a.m.","8 A: There are no stops on the way.","B: So let me just, the tour is non-stop. Is that right?"]},{"code":"7A","title":"reported speech","refPage":81,"pdf":124,"paragraphs":["7A reported speech When we report what someone said earlier, we use a past reporting verb.","We also often make changes to the original sentence.","‘I’m in a hurry.’ Feisal said that he was in a hurry.","Reporting verbs include agreed, answered, complained explained, promised, realised, replied, said, told.","Tense and pronoun changes: revision After a reporting verb, the original verb often moves one tense back into the past.","We change the personal pronouns and adjectives (e.g.","his, she, her, etc.) direct speech reported speech present simple past simple ‘I speak Spanish.’ Heidi told me that Spanish.","present continuous past continuous ‘I’m working from Bianca explained that home.’ working from home.","past simple and past perfect present perfect ‘We went to the same Alan said that they had gone school.’ to the same school.","‘My new phone has Hakim complained that his just broken!’ new phone had just broken past continuous past perfect continuous ‘We were planning to They said that they’d been go to Japan.’ planning to go to Japan.","will/would would ‘I’ll call you back later.’ You said you would call back later.","can/could could ‘I can’t help you.’ Bao replied that he help me.","We can use that after the reporting verb or we can leave it out.","We agreed that the dinner had been terrible.","agreed the dinner had been terrible.","We don’t need to change the verb form into the past when we are reporting something that is still true now, or was said recently. In this situation, we usually use the present form of a reporting verb.","‘There are over 7,000 languages in the world.’ Our lecturer tells us that there are over 7,000 languages in the world.","‘I’m on my way to meet you.’ Han says he’s on his way to meet us."]},{"code":"7B","title":"passives","refPage":85,"pdf":125,"paragraphs":["7B passives We use the passive to focus on the person or thing which is affected by an action rather than the person or thing doing the action.","The app has been downloaded over a million times.","(The main focus is on the app. We are not interested in who downloaded it.) We use the passive when the person or thing that does the action:","• is obvious.","Jude was arrested at the festival last week.","• is unknown.","The museum was built in the 1980s.","• isn’t important.","The winner will be announced tomorrow.","In a passive sentence, we are usually not interested in who or what did the action. When it is important, we use The play was written by Shakespeare in 1609.","We often use the passive in more formal situations, for example, in academic or scientific writing or in public information. It is also often used in news reports.","The liquid was kept at room temperature overnight.","Her name has been linked to the newfilm.","We make the passive with be + past participle.","tense passive present simple English is spoken in most cities.","present continuous I’m being helped by two assistants.","past simple It was made over a thousand years ago.","future: going to We’re going to be met station.","future: will The school will be completed year.","present perfect The Taj Mahal has been called most beautiful building ever.","We often use just, yet, still and already with the present perfect passive.","Notice The position of these adverbs.","My train has just been cancelled.","The report has already been signed, but it hasn’t been sent yet.","I still haven’t been paid for last month’s work.","We can also use get + past participle informally when something is dramatic or unexpected. We o negative situations.","I got stopped by the police last night! One of my lights wasn’t working."]},{"code":"7C","title":"How to … keep a conversation going","refPage":87,"pdf":126,"paragraphs":["7C How to … keep a conversation going starting conversations and topics We use these phrases for starting conversations or to introduce new topics in a conversation: How do you know (name)?","Are you at all interested in (cooking)?","a/any (good café/","## Can you recommend","good restaurants) Do you know near here?","That’s such a great (T-shirt)!","Nice (ring)!","follow-up questions We can use these follow-up questions to keep the conversation going: How did you get into that?","What do you mean by (‘researching newflavours’)?","How does/did that make you feel?","Where did you get it?","Can you recommend a/any (good café/ good restaurants) near here?","What’s it like?","What was she like?","short (two or three-word) follow-up questions We use these short questions to ask for examples: Such as?","For instance/example?","Like what/who?","We use these short questions to ask about reason or purpose: Why’s that?","Why not?","How come/so?","Because?","We use these short questions to ask what happened next: And then?","And after that?","commenting and showing interest We use these words and phrases to comment on what the other person is saying and to show interest.","Oh (yes).","Really?","Are you? Do you? Did you? Have you?","## That sounds/Sounds (amazing/fantastic/","interesting/lovely/terrible/awful/wonderful)!"]},{"code":"7D","title":"avoiding repetition: so ,","refPage":88,"pdf":127,"paragraphs":["7D avoiding repetition: so, When we want to avoid repetition, we can use a di word to take the place of other words or we can leave out words.","## Auxiliary verbs","We use do, does or did to take the place of a verb in the present simple or past simple.","Q: I think you know John? A: Yes, I do. (Yes, I know John.) Susan thinks Ben doesn’t like jazz, but he does likes jazz) I didn’t see John, but Mary did. (but Mary saw him) so and not We use think so, hope so and tell ( someone ) so repetition. We use these phrases to give a positive answer.","A: Are you going to the party?","B: I think so. (I think that I’m going to the party.) A: And is Elena going?","B: I hope so. (I hope that she’s going.) A: It’s important for her to get out more.","B: Yes, I told her so. (I told her that it’s important for her to get out more.) We can also use suppose so and guess so when we give a positive answer but we don’t really want to agree.","A: Can I borrow your phone?","B: I suppose so, but I’ll need it back in half an hour that you can borrow my phone, but I’m not happy about it.) For negatives we use hope not, suppose not and A: Has Angus gone home?","B: I hope not. (I hope that he hasn’t gone home.) A: We’re not going to catch the plane.","B: I guess not. (I guess we’re not going to catch it.) With think, we prefer to use don’t / doesn’t think so A: Did Elenafinish the video?","B: I don’t think so. (I don’t think shefinished it.)","## Verbs with to","We often use want to, would like to and try to repetition, particularly of a verb.","A: Would you like to go out for a meal tonight?","B: Yes, I’d love to. (I’d love to go out for a meal tonight.) My parents expected me to go to college, but I want to. ( I didn’t want to go to college.) A: You need to register online.","B: I’ve tried to, but the website keeps crashing.","to register.) be With be, we use want to be, would like to be and A: Do you want to be a professional actor?","B: I’ d like to be, but it’s not easy. (I’d like to be a professional actor.)"]},{"code":"8A","title":"third conditional and should have","refPage":94,"pdf":128,"paragraphs":["8A third conditional and should have","## Third conditional","We use the third conditional to talk about imaginary or hypothetical events in the past.","These are unreal or impossible situations. We often use the third conditional to talk about regrets (things we’d like to be different about the past).","conditional clause result clause If + past perfect, would + have + past participle If I had woken up on time, I wouldn’t have missed the bus. (It’s impossible to change this because the situation has already happened.) We would have leftearly if we’d known about the terrible traffic. (We didn’t know about the traffic, so we didn’t leave early.) We can use could have + past participle or might have + past participle instead of would have to talk about alternative actions in the past. We use could have and might have when we are less certain of the result of something.","Maybe we could have won if we’d played better.","If I’d known she was at the party, I might have come.","should/shouldn’t have We use should/shouldn’t have to talk about regrets (things we’d like to be different about the past).","I should have bought my ticket yesterday.","Now there are none left.","I shouldn’t have eaten so much. Now I feel ill."]},{"code":"8B","title":"would","refPage":96,"pdf":129,"paragraphs":["8B would would We can use would to talk about past habits.","We can also use the past simple.","My father would read to me every night. (habit) My father read to me every night.","We don’t use would to talk about past states.","As a child, I was very curious. NOT As a child, I would be very curious.","used to We can use used to when talking about past habits or states, which have often changed or are not true now. We can also use the past simple.","As a child, I used to love reading. (habit) As a child, I loved reading.","When we lived in New Zealand, I used to feel so isolated from my family. (state) When we lived in New Zealand, I felt so isolated from my family.","When we use an adverb of frequency ( often, always, sometimes, etc.) with used to or would the word order is different.","When we use would it goes before the adverb of frequency.","We would always see them in the afternoon.","We would often visit my grandparents during the holidays.","When we use used to it goes after the adverb of frequency.","We always used to see them in the afternoon.","We often used to visit my grandparents during the holidays."]},{"code":"8C","title":"How to … give a presentation","refPage":99,"pdf":130,"paragraphs":["8C How to … give a presentation When we give a presentation, we can use these phrases to help organise our talk. These phrases help the listener(s) to follow the structure of the talk.","starting the presentation","## Thanks for coming/joining me …","Today I’m going to/I plan to talk about/ speak about …","I’m going to/intend to/plan to begin with (a short story/a few facts) …","To begin with, (I’ll describe …) Can I just get a show of hands for all the people here who …?","going through the main points Thefirst point I intend to/I plan to/I’m going to talk about is …","This brings me to my/thefirst point.","Moving on to my/the next point, …","## Turning now to …","As a final point, …","I’d just like to add …","fi nishing I’d like to end with …","To sum up, …","Just to recap, …","Does anyone have any comments or questions?","dealing with difficult questions I’m not sure I can answer that now, but...","I’ll get back to you on that. / Let me get back to you on that.","## That’s (an interesting question/a good","question/a tricky question) …","What does everyone else think?","1 Correct the mistakes in the sentences.","1 Thanks for join me at today’s presentation.","2 Can I just get a show of hand?","3 Moving in to the next point, I want to discuss the results.","4 Turning now on the main problems, let’s look at the causes.","5 To sum over, this project has been a success for three reasons.","6 I’d like for to end with a summary of the main points.","7 Let me to get back to you on that.","8 That’s a question tricky."]}]'),hg={"1A":"narrative tenses","1B":"verb patterns","1C":"How to … leave phone messages","1D":"except for, apart from, (not) even","2A":"present perfect continuous","2B":"relative clauses","2C":"How to … talk about things that annoy you","3A":"conditional structures: unless, even if, in case (of)","3B":"necessity, obligation and permission","3C":"How to … take part in an interview","3D":"expressing preferences","4A":"past plans and intentions","4B":"indirect and negative questions","4C":"How to … talk about the news","5A":"clauses of purpose: to, so as to, in order to/that, so that","5B":"comparative and superlative structures","5C":"How to … summarise information from different sources","5D":"causative have and get; reflexive pronouns","6A":"so and such","6B":"be/get used to","6C":"How to … ask for and confirm information","7A":"reported speech","7B":"passives","7C":"How to … keep a conversation going","7D":"avoiding repetition: so, to, not, be","8A":"third conditional and should have","8B":"would","8C":"How to … give a presentation"},Tx=[["the wind was blowing Josh was walking down the road","the wind was blowing. Josh was walking down the road"],["the moped been badly damaged","the moped had been badly damaged"],["she decided she woke to go out up early for a walk",""],["The sun was shining. The wind was blowing (background information) He was living in Brazil. (at the time of the story, temporary) We were travelling around Australia. (temporary) we were travelling around Australia",`The sun was shining. The wind was blowing. (background information)
He was living in Brazil. (at the time of the story, temporary)
We were travelling around Australia. (temporary)`],["the train leftwe arrived at the station The past perfect links a past point ( we arrived at the station ) to a point further back in time ( the train had left ).","The past perfect links a past point (we arrived at the station) to a point further back in time (the train had left)."],["conditional structures: unless unless We use unless to mean if not.","We use unless to mean if not."],["(If you don’t hurry up, we’re going to leave without you.) Please don’t park here unless you’re a member of sta (Please don’t park here if you’re not a member of sta When the unless clause isfirst in a sentence, we use a comma at the end of the clause.",`(If you don’t hurry up, we’re going to leave without you.)
Please don’t park here unless you’re a member of staff. (Please don’t park here if you’re not a member of staff.)
When the unless clause is first in a sentence, we use a comma at the end of the clause.`],["I can’t understand Liz unless she speaks slowly even if We use even if for emphasis, to say that something will not change a situation.",`I can’t understand Liz unless she speaks slowly.
## even if
We use even if for emphasis, to say that something will not change a situation.`],["in case We use in case to talk about being prepared for the possibility that something might happen.",`## in case
We use in case to talk about being prepared for the possibility that something might happen.`],["in case of We use in case of + noun in formal situations",`## in case of
We use in case of + noun in formal situations`],["unless you’ll tell me the problem.","NOT I can’t help you unless you’ll tell me the problem."],["be allowed Office workers here are permitted","be allowed. Office workers here are permitted"],["would rather We use would rather + infinitive + than to talk about:",`## would rather
We use would rather + infinitive + than to talk about:`],["Zayan would rather cook with electricity with gas.","Zayan would rather cook with electricity than gas."],["prefer, would prefer We use prefer",`## prefer, would prefer
We use prefer`],["but he left We meant to invite you","but he left. We meant to invite you"],["The negative of planned to is wasn’t planning to I wasn’t planning to go anywhere","The negative of planned to is wasn’t planning to. I wasn’t planning to go anywhere"],["more formal than meant to, to, etc.","more formal than meant to, planned to, etc."],["After the opening phrase ( Could you tell me …? Can I ask you …? Do you know …? we use the affirmative form.","After the opening phrase (Could you tell me …? Can I ask you …? Do you know …?), we use the affirmative form."],["we should take a taxi.) Wouldn’t you say","(I think that we should take a taxi.) Wouldn’t you say"],["I often turn offmy phone in order to avoid We can also use so as to + infinitive.","I often turn off my phone in order to avoid distractions. We can also use so as to + infinitive."],["I’d like to move closer to the stage so that I can hear The school is changing the exam date in order that have more time to prepare.","I’d like to move closer to the stage so that I can hear. The school is changing the exam date in order that we have more time to prepare."],["the subject of the two clauses is di we use","the subject of the two clauses is different, we use"],["I eat a lot of vegetables, not to lose weight my health.","I eat a lot of vegetables, not to lose weight but for my health."],["I’m going to send you all the information so that you make a decision.","I’m going to send you all the information so that you can make a decision."],["He set his alarm for 7 a.m. in order not to oversleep I check my ‘to do’ list every day so as not to forget We can use not to, but it is not common except as a contrast.","He set his alarm for 7 a.m. in order not to oversleep. I check my ‘to do’ list every day so as not to forget. We can use not to, but it is not common except as a contrast."],["We use quantifiers ( a bit, a little, slightly, much, adverbs to talk about how much difference there is.","We use quantifiers (a bit, a little, slightly, much, a lot) with comparative adjectives and adverbs to talk about how much difference there is."],["but it’s Dimitris is writing a lot more confidently now than he used to.","but it’s better value. Dimitris is writing a lot more confidently now than he used to."],["Mateo and Luciana have travelled the furthest We use quantifiers","Mateo and Luciana have travelled the furthest. We use quantifiers"],["Bianca drove faster and faster We use than ever","Bianca drove faster and faster. We use than ever"],["than before/ever/ever before We also use ever with superlative adjectives. We don’t use superlatives.","than before/ever/ever before. We also use ever with superlative adjectives."],["but this is the tallest ever Other structures","but this is the tallest ever. Other structures"],["summarise information from di We use these phrases",`summarise information from different sources.
We use these phrases`],["information from information that we read or hear.","information that we read or hear."],["causative have and get; re","causative have and get; reflexive pronouns"],["Be careful with the word order. The causative different from:","Be careful with the word order. The causative is different from:"],["I got my computerfixed, but it took a week to someone.","I got my computer fixed, but it took a week to get someone to do it."],["it himself.) He had his bike repaired yesterday.","(He didn’t repair it himself.) He had his bike repaired yesterday."],["We can use adjective/adverb to show emphasis","We can use so + adjective/adverb to show emphasis"],["We can also use so + adjective / adverb + that describe something that leads to a result.","We can also use so + adjective/adverb + that to describe something that leads to a result."],["Without so the sentence would still be complete.","Without so, the sentence would still be complete."],["Without sentence would still be complete.","Without such, the sentence would still be complete."],["such + (a/an) + adjective + noun clause","such + (a/an) + adjective + noun + clause"],["we sometimes omit from so/such sentences with a clause.","we sometimes omit that from so/such sentences with a clause."],["so we The negative is be not used to.","so we are used to it. The negative is be not used to."],["but I soon got used to it I don’t think I’ll ever get used to their accent. It’s di understand.","but I soon got used to it. I don’t think I’ll ever get used to their accent. It’s difficult to understand."],["How to … ask for and con confirming understanding or asking for clari",`How to … ask for and confirm information
## Confirming understanding or asking for clarification`],["hop-on, hop-o ticket","hop-on, hop-off ticket"],["Heidi told me that Spanish.","Heidi told me that she spoke Spanish."],["present continuous past continuous ‘I’m working from Bianca explained that home.’ working from home.","present continuous → past continuous: ‘I’m working from home.’ Bianca explained that she was working from home."],["past simple and past perfect present perfect ‘We went to the same Alan said that they had gone school.’ to the same school.","past simple and present perfect → past perfect: ‘We went to the same school.’ Alan said that they had gone to the same school."],["‘My new phone has Hakim complained that his just broken!’ new phone had just broken past continuous past perfect continuous ‘We were planning to They said that they’d been go to Japan.’ planning to go to Japan.",`‘My new phone has just broken!’ Hakim complained that his new phone had just broken.
past continuous → past perfect continuous: ‘We were planning to go to Japan.’ They said that they’d been planning to go to Japan.`],["will/would would ‘I’ll call you back later.’ You said you would call back later.","will → would: ‘I’ll call you back later.’ You said you would call back later."],["can/could could ‘I can’t help you.’ Bao replied that he help me.","can → could: ‘I can’t help you.’ Bao replied that he couldn’t help me."],["agreed the dinner had been terrible.","We agreed the dinner had been terrible."],["agreed, answered, complained explained","agreed, answered, complained, explained"],["his, she, her, etc.) direct speech reported speech present simple past simple ‘I speak Spanish.’",`his, she, her, etc.)
direct speech → reported speech: present simple → past simple. ‘I speak Spanish.’`],["When it is important, we use The play was written by Shakespeare in 1609.","When it is important, we use by + agent: The play was written by Shakespeare in 1609."],["We’re going to be met station.","We’re going to be met at the station."],["The school will be completed year.","The school will be completed next year."],["The Taj Mahal has been called most beautiful building ever.","The Taj Mahal has been called the most beautiful building ever."],["We o negative situations.","We often use it for negative situations."],["avoiding repetition: so, When we want",`avoiding repetition: so, to, not, be
When we want`],["Q: I think you know John? A: Yes, I do. (Yes, I know John.) Susan thinks Ben doesn’t like jazz, but he does likes jazz) I didn’t see John, but Mary did. (but Mary saw him) so and not We use think so, hope so and tell ( someone ) so repetition.",`Q: I think you know John?
A: Yes, I do. (Yes, I know John.)
Susan thinks Ben doesn’t like jazz, but he does. (but he does like jazz)
I didn’t see John, but Mary did. (but Mary saw him)
## so and not
We use think so, hope so and tell (someone) so to avoid repetition.`],["B: I suppose so, but I’ll need it back in half an hour that you can borrow my phone, but I’m not happy about it.) For negatives we use hope not, suppose not and A: Has Angus gone home?",`B: I suppose so, but I’ll need it back in half an hour. (I agree that you can borrow my phone, but I’m not happy about it.)
For negatives we use hope not, suppose not and guess not.
A: Has Angus gone home?`],["B: I guess not. (I guess we’re not going to catch it.) With think, we prefer to use don’t / doesn’t think so A: Did Elena finish the video?",`B: I guess not. (I guess we’re not going to catch it.)
With think, we prefer to use don’t/doesn’t think so.
A: Did Elena finish the video?`],["We often use want to, would like to and try to repetition, particularly of a verb.","We often use want to, would like to and try to to avoid repetition, particularly of a verb."],["but I want to. ( I didn’t want to go to college.)","but I didn’t want to. (I didn’t want to go to college.)"],["to register.) be With be, we use want to be, would like to be and A: Do you want to be a professional actor?",`to register.)
## be
With be, we use want to be, would like to be and be.
A: Do you want to be a professional actor?`],["fi nishing I’d like to end with",`## finishing
I’d like to end with`],["used to We can use used to when talking about past habits",`## used to
We can use used to when talking about past habits`],["would We can use would to talk about past habits.","We can use would to talk about past habits."],["studying Mandarin.) He’s been living","(I’m still studying Mandarin.) He’s been living"],["We use the present perfect continuous with to talk about the length or duration of an activity","We use the present perfect continuous with for and since to talk about the length or duration of an activity"],["We use the present perfect continuous with to talk about actions and situations that are relevant now.","We use the present perfect continuous with recently, lately, etc. to talk about actions and situations that are relevant now."],["(She deserves a promotion.) We often use the present perfect simple",`(She deserves a promotion.)
We often use the present perfect simple`],["Once there was a girl whose name was Lilibet In defining relative clauses","Once there was a girl whose name was Lilibet. In defining relative clauses"],["We use relative pronouns who, which, where, when whose","We use relative pronouns who, which, where, when and whose"],["Do you think you could NOT Do you think could you","Do you think you could …? NOT Do you think could you …?"],["Our (o hours are (8 a.m. to 6 p.m.).","Our office hours are (8 a.m. to 6 p.m.)."],["back to you Thank you for calling","back to you. Thank you for calling"],["o ff","off"],["tofinish","to finish"],["thefirst","the first"],["Thefirst","The first"],["newflavours","new flavours"],["comefirst","come first"],["Ifinally","I finally"],["infinding","in finding"],["offmaking","off making"],["orfinish","or finish"],["wasfive","was five"],["You’llfind","You’ll find"],["offilms","of films"],["notfinished","not finished"],["leftout","left out"],["thefithe last","the first, the last"],["wefind","we find"],["isfirst","is first"],["offire","of fire"],["comesfirst","comes first"],["couldn’tfind","couldn’t find"],["offmy","off my"],["leftthe","left the"],["forestfires","forest fires"],["computerfixed","computer fixed"],["tofix","to fix"],["boringfilm","boring film"],["leftbefore","left before"],["toflying","to flying"],["Atfirst","At first"],["childrenfind","children find"],["Elenafinish","Elena finish"],["shefinished","she finished"],["leftearly","left early"],["newfilm","new film"],["We’ d","We’d"],["I’ d","I’d"],[" n’t","n’t"]],Nx=new Set(["## I’ve","+ been reading","## She’s","## They haven’t","- been listening","## He hasn’t","## Have you","working? been long time?","## Has she"]),Rx=/^\d{1,2}\s+(Choose|Complete|Correct|Match|Rewrite|Underline|Put|Write|Find|Work|Look|Read|Circle|Cross|Tick|Make|Add|Answer|Respond|Plan|Prepare|Discuss|Tell|Think|Use|Change|Join|Label|Describe|Explain)\b/i;function Bx(r){let l=r;for(const[u,h]of Tx)l.includes(u)&&(l=l.split(u).join(h));return l}function _x(r,l,u){const h=[];for(let c=0;c<u.length;c++){let m=u[c].trim();if(m){if(c===0){m=m.replace(new RegExp(`^${r}\\s+`),"");const p=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");m=m.replace(new RegExp(`^${p}\\s+`,"i"),"")}if(m=Bx(m).trim(),c===0){const p=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");m=m.replace(new RegExp(`^${p}[.:]?\\s+`,"i"),"")}if(m){if(Rx.test(m))break;for(const p of m.split(`
`)){const b=p.trim();!b||Nx.has(b)||h.push(b)}}}}return h}const Ea=Ex.map(r=>({code:r.code,title:hg[r.code]??r.title,refPage:r.refPage,pdf:r.pdf,paragraphs:_x(r.code,hg[r.code]??r.title,r.paragraphs)})).sort((r,l)=>r.code.localeCompare(l.code)),jx=Object.fromEntries(Ea.map(r=>[r.code,r])),Sn=[{id:"materials",title:"Materials",lessonCode:"1A",page:132,intro:"It's / They're made of …",items:[{word:"stone",meaning:"a hard material from rock, used for buildings and walls"},{word:"rubber",meaning:"an elastic material used for tyres and boots"},{word:"a diamond",meaning:"a very hard, valuable precious stone"},{word:"iron",meaning:"a strong metal used for pans, gates and tools"},{word:"cotton",meaning:"a soft plant fibre used for clothes and sheets"},{word:"silver",meaning:"a shiny grey precious metal used for jewellery"},{word:"denim",meaning:"a strong cotton cloth used for jeans"},{word:"wood",meaning:"the hard material that trees are made of"},{word:"steel",meaning:"a strong metal made from iron and carbon"},{word:"plastic",meaning:"a light artificial material"},{word:"gold",meaning:"a valuable yellow precious metal"},{word:"glass",meaning:"a hard, transparent material used for windows and bottles"}]},{id:"negative-prefixes",title:"Negative prefixes",lessonCode:"3C",page:133,intro:"Add in-, ir- or un- to make the adjective negative.",items:[{word:"appropriate → inappropriate",meaning:"not suitable for the situation"},{word:"certain → uncertain",meaning:"not sure"},{word:"clear → unclear",meaning:"not easy to understand"},{word:"confident → unconfident",meaning:"not confident"},{word:"dependent → independent",meaning:"not needing help from others"},{word:"employed → unemployed",meaning:"without a job"},{word:"enthusiastic → unenthusiastic",meaning:"not excited or interested"},{word:"expensive → inexpensive",meaning:"not expensive; cheap"},{word:"fair → unfair",meaning:"not fair"},{word:"flexible → inflexible",meaning:"not able or willing to change"},{word:"formal → informal",meaning:"not formal; relaxed"},{word:"healthy → unhealthy",meaning:"not good for your health"},{word:"lucky → unlucky",meaning:"having bad luck"},{word:"necessary → unnecessary",meaning:"not needed"},{word:"popular → unpopular",meaning:"not liked by many people"},{word:"professional → unprofessional",meaning:"not showing the usual standards of a job"},{word:"regular → irregular",meaning:"not following the usual pattern"},{word:"responsible → irresponsible",meaning:"not thinking about the results of your actions"},{word:"sensitive → insensitive",meaning:"not understanding other people’s feelings"},{word:"willing → unwilling",meaning:"not wanting to do something"}]},{id:"films",title:"Films and film-making",lessonCode:"4B",page:133,intro:"The film-making process, step by step.",items:[{word:"shoot",meaning:"to use a camera to record a story or event so it can be shown on a screen"},{word:"budget",meaning:"the money available to make a film, and the plan for how it will be spent"},{word:"film-maker",meaning:"someone who makes films"},{word:"footage",meaning:"recorded film of an event"},{word:"script",meaning:"the words that people will say in a film"},{word:"star",meaning:"to appear as a main character in a film"},{word:"directing",meaning:"telling the actors or people in a film what they should do"},{word:"location",meaning:"the place where a film is shot"},{word:"soundtrack",meaning:"the music and sounds that go with a film"},{word:"film industry",meaning:"all the people involved in the business of making and selling films"}]},{id:"news",title:"The news",lessonCode:"4C",page:134,intro:"Talking about news stories and how they spread.",items:[{word:"breaking news",meaning:"new information about an event that is happening right now"},{word:"trending",meaning:"currently popular or discussed a lot online, e.g. on social media"},{word:"biased",meaning:"supporting one person or group in an unfair way"},{word:"announcement",meaning:"an important official statement about something that has happened or will happen"},{word:"go viral",meaning:"when an image, video or story spreads extremely fast on the internet, e.g. through social media"},{word:"updates",meaning:"the most recent information about a news story"},{word:"live feed",meaning:"a news story you watch online that is happening at the moment and not recorded"},{word:"subscribe",meaning:"to arrange (and maybe pay) to receive something regularly, e.g. a magazine or access to a website"}]},{id:"money",title:"Money",lessonCode:"5B",page:134,intro:"Words for paying, saving and losing money.",items:[{word:"fare",meaning:"money you pay to travel by train, bus, plane, etc."},{word:"bargain",meaning:"something you buy cheaply or for less than its usual price"},{word:"profit",meaning:"money you make when you sell something for more than you paid for it"},{word:"loss",meaning:"money you lose because you sell something for less than you paid for it"},{word:"discount",meaning:"a reduction to the usual price of something"},{word:"refund",meaning:"money you get back because you are not satisfied with a product or service"},{word:"receipt",meaning:"a piece of paper or electronic message that shows you have paid something"},{word:"fee",meaning:"money you pay for professional services, or to do something such as a course"},{word:"charge",meaning:"the amount of money you have to pay for something"},{word:"donation",meaning:"money you give to help an organisation or a person"}]},{id:"idioms",title:"Travel idioms",lessonCode:"6B",page:135,intro:"Idioms in bold in the Vocabulary Bank article.",items:[{word:"travel light",meaning:"take only a few things when you travel somewhere"},{word:"break the journey",meaning:"stop somewhere for a short time during a long journey"},{word:"live out of a suitcase",meaning:"stay for a short time in many places, while having only a few possessions with you"},{word:"think on your feet",meaning:"react to events quickly, without time to plan"},{word:"get into hot water",meaning:"be in big trouble"},{word:"weather the storm",meaning:"deal with a difficult situation without being hurt or damaged"}]},{id:"ways-of-speaking",title:"Ways of speaking",lessonCode:"7A",page:136,intro:"Verbs and phrases for how we use our voice.",items:[{word:"whisper",meaning:"say something very quietly, using your breath, not your voice"},{word:"shout at",meaning:"say something to someone or something very loudly and angrily"},{word:"yell at",meaning:"say something to someone or something very loudly and angrily"},{word:"read aloud",meaning:"say the words you are reading"},{word:"speak up",meaning:"say publicly what you think about something"},{word:"scream",meaning:"make a loud, high sound with your voice because you are frightened, angry or excited"},{word:"talk to yourself",meaning:"say your thoughts aloud, not speaking to another person"},{word:"talk something over",meaning:"discuss a problem, often in order to decide what to do"}]},{id:"internet-words",title:"Internet words",lessonCode:"7B",page:137,intro:"The language of computers, phones and the internet.",items:[{word:"folder",meaning:"a location in a computer where you keep related documents together"},{word:"network",meaning:"a set of computers that are connected to each other"},{word:"icon",meaning:"a small picture on a computer screen that is used to open a programme"},{word:"tap",meaning:"hit your finger lightly on a computer screen"},{word:"refresh",meaning:"make the screen show any new information that has arrived since you first began looking at it"},{word:"download",meaning:"move information from a computer network or storage location to a smaller computer"},{word:"upload",meaning:"move information from your computer to a storage location"},{word:"scroll down/up",meaning:"move information on a computer screen up or down so that you can read it all"},{word:"swipe",meaning:"slide your finger on a computer screen to the left or right to move an object or change screens"},{word:"inbox",meaning:"the place in an email program where new messages arrive"}]},{id:"phrasal-verbs",title:"Phrasal verbs",lessonCode:"8B",page:137,intro:"Phrasal verbs in bold in “How to realise your goals”.",items:[{word:"figure out",meaning:"understand something or solve a problem"},{word:"try out",meaning:"test a new idea"},{word:"dream up",meaning:"use your imagination to invent a new idea"},{word:"get together",meaning:"meet together with other people as a group"},{word:"write down",meaning:"write something on a piece of paper"},{word:"break down",meaning:"take a big idea and split it into smaller sections"},{word:"think through",meaning:"consider the facts about something in a carefully organised way"},{word:"follow up",meaning:"investigate something further to find out more information"}]}],Cx=Object.fromEntries(Sn.map(r=>[r.lessonCode,r])),Wx={1:[{question:"By the time we arrived at the cinema, the film ___ .",options:["started","had started","was starting"],answer:1,explanation:"The film started before we arrived, so we use the past perfect: had started."},{question:"She ___ along the beach when she found the ring.",options:["jogged","had jogged","was jogging"],answer:2,explanation:"The past continuous was jogging gives the background action to the main event found."},{question:"I don’t mind ___ early at the weekend.",options:["get up","to get up","getting up"],answer:2,explanation:"Mind is followed by the -ing form: mind getting up."},{question:"He suggested ___ a taxi to the airport.",options:["take","to take","taking"],answer:2,explanation:"Suggest is followed by the -ing form: suggested taking."},{question:"___ the noisy neighbours, the flat is perfect.",options:["Except for","Even","Apart"],answer:0,explanation:"Except for introduces the one thing that is not included."}],2:[{question:"I ___ for my exam for two hours and I’m still not finished.",options:["study","have been studying","studied"],answer:1,explanation:"The present perfect continuous describes an action that started in the past and is still continuing."},{question:"The woman ___ helped me was very kind.",options:["which","whose","who"],answer:2,explanation:"Who refers to a person in a defining relative clause."},{question:"This is the book ___ I told you about.",options:["who","that","whose"],answer:1,explanation:"That can refer to a thing in a defining relative clause."},{question:"It ___ me when people talk loudly on the phone.",options:["annoys","is annoyed","annoying"],answer:0,explanation:"We use it + verb to talk about a thing that annoys us: It annoys me."},{question:"I can’t stand ___ in long queues.",options:["to wait","waiting","wait"],answer:1,explanation:"Can’t stand is followed by the -ing form."}],3:[{question:"Unless you hurry, you ___ late for the meeting.",options:["will be","would be","are being"],answer:0,explanation:"Unless means if not. The first conditional uses if/will: Unless you hurry, you will be late."},{question:"You ___ wear a helmet on this building site. It’s the law.",options:["might","must","could"],answer:1,explanation:"Must expresses a strong obligation."},{question:"I ___ work tomorrow, so I can relax tonight.",options:["mustn’t","don’t have to","can’t"],answer:1,explanation:"Don’t have to means it is not necessary. Mustn’t means it is forbidden."},{question:"I’d rather ___ at home tonight.",options:["to stay","staying","stay"],answer:2,explanation:"Would rather is followed by the infinitive without to: would rather stay."},{question:"She prefers tea ___ coffee.",options:["than","to","from"],answer:1,explanation:"Prefer X to Y: She prefers tea to coffee."}],4:[{question:"We ___ go to Italy last summer, but we changed our plans.",options:["were going to","had gone to","went to"],answer:0,explanation:"Was/were going to describes a past plan that did not happen."},{question:"Could you tell me where ___ ?",options:["is the station","the station is","the station was"],answer:1,explanation:"In an indirect question, the subject comes before the verb: where the station is."},{question:"Why ___ you tell me about the meeting?",options:["didn’t","you didn’t","not"],answer:0,explanation:"A negative question uses the auxiliary + n’t + subject: Why didn’t you tell me?"},{question:"He asked me whether I ___ the news.",options:["see","saw","had seen"],answer:2,explanation:"After a past reporting verb, the present perfect usually changes to the past perfect."},{question:"I was going to call you, but I ___ .",options:["forget","forgot","was forgetting"],answer:1,explanation:"The past simple reports the completed action that interrupted the plan."}],5:[{question:"I went to the shop ___ some milk.",options:["for buy","to buy","buying"],answer:1,explanation:"We use the to-infinitive to express purpose: to buy some milk."},{question:"She spoke quietly ___ wake the baby.",options:["so as not to","to not","for not"],answer:0,explanation:"The negative purpose clause is so as not to + infinitive."},{question:"This is ___ film I’ve ever seen.",options:["the better","best","the best"],answer:2,explanation:"The superlative of good is the best, with the definite article."},{question:"He’s ___ than his brother.",options:["more tall","taller","tallest"],answer:1,explanation:"Short adjectives form the comparative with -er: taller than."},{question:"I ___ my hair cut yesterday.",options:["had","have","did"],answer:0,explanation:"The causative is have + object + past participle: had my hair cut."}],6:[{question:"It was ___ a hot day that we stayed inside.",options:["so","such","too"],answer:1,explanation:"Such is used before a/an + adjective + noun: such a hot day."},{question:"The film was ___ boring that I fell asleep.",options:["so","such","too"],answer:0,explanation:"So is used before an adjective: so boring that …"},{question:"I’m used to ___ up early.",options:["get","getting","got"],answer:1,explanation:"Be used to is followed by the -ing form: used to getting up."},{question:"She’ll get used to ___ in London.",options:["live","living","lived"],answer:1,explanation:"Get used to is followed by the -ing form: get used to living."},{question:"___ the weather, the trip was perfect.",options:["Apart from","Even","Except"],answer:0,explanation:"Apart from introduces the one exception: Apart from the weather …"}],7:[{question:"She said she ___ tired.",options:["is","was","has been"],answer:1,explanation:"In reported speech, the present simple usually becomes the past simple."},{question:"He told me he ___ the film.",options:["saw","has seen","had seen"],answer:2,explanation:"The past simple usually becomes the past perfect in reported speech."},{question:"The building ___ in 1990.",options:["built","was built","is building"],answer:1,explanation:"The passive is be + past participle: was built."},{question:"English ___ all over the world.",options:["speaks","is spoken","is speaking"],answer:1,explanation:"The passive focuses on the language, not on who speaks it: English is spoken."},{question:"I don’t like coffee, but my sister ___ .",options:["does","is","likes"],answer:0,explanation:"We can avoid repetition with an auxiliary verb: my sister does."}],8:[{question:"If I ___ known, I would have helped.",options:["have","had","would have"],answer:1,explanation:"The third conditional uses if + past perfect + would have + past participle."},{question:"You ___ told me! I would have understood.",options:["should have","should","must"],answer:0,explanation:"Should have + past participle criticises a past action that did not happen."},{question:"When I was a child, we ___ go camping every summer.",options:["will","would","are used to"],answer:1,explanation:"Would describes a repeated past habit."},{question:"I ___ live in Paris when I was young.",options:["would","use to","used to"],answer:2,explanation:"Used to describes a past state. Would is not used for past states."},{question:"I ___ have called you, but I lost my phone.",options:["should","would","must"],answer:0,explanation:"Should have + past participle expresses regret about a past action."}]},Ox={"1A":[{question:"Marta inherited a valuable ring from her mother.",options:["True","False"],answer:1,explanation:'She inherited the ring, but she says it is "not worth a lot" — it is special for emotional reasons, not because it is valuable.'},{question:"Marta borrowed a leather jacket from a friend and never gave it back.",options:["True","False"],answer:0,explanation:'She says she borrowed it at university "and I never gave it back".'},{question:"If something is real and not a copy, it is ___.",options:["genuine","damaged","inherited"],answer:0,explanation:`Genuine means real or authentic: "It's a genuine 1980s leather jacket."`},{question:"I bought these boots while I ___ around New Zealand.",options:["travelled","was travelling","had travelled"],answer:1,explanation:"The past continuous gives the background action around a past event: while I was travelling."},{question:"I bought it to replace a similar one that I ___.",options:["lost","was losing","had lost"],answer:2,explanation:"The losing happened before the buying, so we use the past perfect: had lost."},{question:"In weak forms, auxiliary verbs are usually ___.",options:["stressed","unstressed","dropped"],answer:1,explanation:"Auxiliary verbs are usually unstressed in connected speech, which is why they are called weak forms."}],"1B":[{question:"Minimalism refers to ___ things in a simple, elegant way.",options:["design","designing","designed"],answer:1,explanation:"After a preposition (to) we use the -ing form: refers to designing."},{question:"They succeeded in ___ people to stop collecting useless stuff.",options:["persuade","persuading","to persuade"],answer:1,explanation:"Succeed in + -ing: succeeded in persuading."},{question:"I look forward to ___ more street markets.",options:["visit","visiting","to visit"],answer:1,explanation:'Look forward to + -ing: look forward to visiting. The "to" is a preposition here.'},{question:"It turned out ___ the most important trip of my life.",options:["be","being","to be"],answer:2,explanation:"Turn out + to infinitive: it turned out to be."},{question:'Which word means "perfect for me"?',options:["ideal","genuine","damaged"],answer:0,explanation:"Ideal means perfect or most suitable."},{question:`Which phrase means "I don't like ..."?`,options:["I'm not a big fan of ...","I appreciate ...","I can't do without ..."],answer:0,explanation:"Not a big fan of something is a polite way of saying you do not like it."},{question:'Which word means "the kind of things you like"?',options:["tastes","pleasures","hopes"],answer:0,explanation:'Taste refers to your preferences: "people have different tastes".'},{question:"In prepositional phrases, the preposition is usually ___.",options:["stressed","not stressed","the loudest word"],answer:1,explanation:"The verb carries the stress; the preposition is usually weak and unstressed."}],"1C":[{question:"You've ___ Café Roma. Please leave a message.",options:["reached","arrived","got"],answer:0,explanation:`A recorded message says "You've reached ...".`},{question:"Please leave a message and we'll get ___ to you.",options:["back","up","on"],answer:0,explanation:"Get back to someone means reply to them later."},{question:"I can't take your call right now, but if you leave a message with your name and number, I'll get back to you as soon as I ___.",options:["can","could","will"],answer:0,explanation:'The fixed phrase is "as soon as I can".'},{question:"This is Marcelo Fagundes ___ about my jacket.",options:["calling","call","called"],answer:0,explanation:'The standard phrase is "This is [name] calling about ...".'},{question:"___ you explain the alarm system to her?",options:["Would","Do","Are"],answer:0,explanation:"Would you + verb is a polite request: Would you explain the alarm system to her?"},{question:"Are the requests in Exercise 4A direct or indirect?",options:["Direct","Indirect"],answer:1,explanation:"They use polite indirect forms such as I wonder if you could and Do you think you'll be able to."},{question:"___ the rubbish means put it outside or in the bin.",options:["Take out","Tidy up","Hang up"],answer:0,explanation:"Take out the rubbish = remove it and put it outside."},{question:"___ your clothes means put them on a hook.",options:["Hang up","Throw out","Pick up"],answer:0,explanation:"Hang up clothes = put them on a hook or hanger."}],"1D":[{question:"You lose the ___ contact and that emotion that you get from that interaction.",options:["face-to-face","eye","physical"],answer:0,explanation:'The speaker says "you lose the face-to-face contact".'},{question:"I think people are ___ to screen time, needing information or entertainment more immediately.",options:["addicted","attached","afraid"],answer:0,explanation:'The speaker says people are "addicted to screen time".'},{question:"I think people probably spend ___ on their phone.",options:["too much time","a lot","more time"],answer:0,explanation:'The speaker says "people probably spend too much time on their phone".'},{question:"It prevents you from being able to talk to people in ___.",options:["person","public","life"],answer:0,explanation:"Talk to people in person means talk to them face to face."},{question:"I could live without all my gadgets ___ my phone.",options:["except for","even","apart"],answer:0,explanation:'Except for (or apart from) introduces the one thing that is not included. "Apart" alone is not correct here.'},{question:"People certainly look at their phones too much. It might ___ be the first thing in the morning.",options:["even","except","apart"],answer:0,explanation:"Even emphasises something surprising: it might even be the first thing in the morning."}],"2A":[{question:"I ___ for my exam for two hours and I'm still not finished.",options:["have been studying","studied","study"],answer:0,explanation:"The action started in the past and is still continuing, so we use the present perfect continuous: have been studying."},{question:"He ___ in the UK for ten years. He still lives there.",options:["has been living","lived","is living"],answer:0,explanation:"The situation is unfinished, so the present perfect continuous is correct: has been living."},{question:"We use ___ to refer to a point in time.",options:["since","for","during"],answer:0,explanation:"Since introduces a starting point (since 2020, since 2 p.m.). For introduces a period of time."},{question:"How long ___ the drums?",options:["have you been playing","do you play","are you playing"],answer:0,explanation:"How long asks about the length of an activity that continues now: How long have you been playing?"},{question:"I ___ him for ages. He is an old friend.",options:["have known","have been knowing","am knowing"],answer:0,explanation:"Know is a state verb, so we use the present perfect simple, not the continuous: I have known him."},{question:"She ___ very hard lately. She deserves a promotion.",options:["has been working","worked","works"],answer:0,explanation:"Lately connects a recent continuing activity to now, so we use the present perfect continuous."}],"2B":[{question:"A specialist is someone ___ knows a lot about a subject.",options:["who","which","whose"],answer:0,explanation:"Who introduces a defining relative clause about a person."},{question:"This is the book ___ I told you about.",options:["that","who","whose"],answer:0,explanation:"That can replace which for a thing in a defining relative clause."},{question:"Do you remember the time ___ we went on holiday together?",options:["when","where","which"],answer:0,explanation:"When introduces a relative clause about a time."},{question:"Once there was a girl ___ name was Lilibet.",options:["whose","who","who's"],answer:0,explanation:"Whose shows possession: the girl's name was Lilibet."},{question:"The winner is the person ___ up with the most points.",options:["ending","ended","to end"],answer:0,explanation:"A defining relative clause can be replaced with verb + -ing: the person ending up with the most points."},{question:"Who was the last person ___ John?",options:["to see","seeing","saw"],answer:0,explanation:"After the last we often use to + infinitive: the last person to see John."}],"2C":[{question:"It really ___ me when people drop litter.",options:["annoys","annoy","annoying"],answer:0,explanation:"The subject it is singular, so the verb is annoys: It really annoys me."},{question:"My dad is ___ complaining about noise.",options:["forever","never","sometimes"],answer:0,explanation:"The continuous with forever describes an annoying habit: is forever complaining."},{question:"I can't ___ people shortening my name.",options:["stand","hold","support"],answer:0,explanation:"I can't stand it is a phrase for something that annoys you."},{question:"It drives me ___ when people don't answer my messages.",options:["nuts","angry","nerve"],answer:0,explanation:"The fixed phrase is it drives me nuts (or crazy/mad)."},{question:"You're always ___ your phone!",options:["losing","lose","lost"],answer:0,explanation:"Always + the continuous describes an annoying habit: You're always losing your phone!"},{question:"Which reply agrees that something is annoying?",options:["Yes, so annoying.","I don't mind that.","That doesn't bother me."],answer:0,explanation:"Yes, so annoying agrees. The other two say the thing does not annoy the speaker."}],"2D":[{question:"The Planet Earth II clip is about a Draco lizard in the jungles of ___.",options:["Malaysia","Brazil","Australia"],answer:0,explanation:"The programme information says the episode takes us to the jungles of Malaysia."},{question:"The Draco lizard must choose between fighting and ___.",options:["escaping","sleeping","swimming"],answer:0,explanation:"The lizard has to choose between fighting to make his home in a tree or finding a way to escape."},{question:"Key phrase: Could you say ___ about that?",options:["more","much","most"],answer:0,explanation:"Could you say more about that? asks someone to give more detail."},{question:"I don't quite ___ what you mean.",options:["get","take","make"],answer:0,explanation:"I don't quite get what you mean is a key phrase for checking understanding."},{question:"Fight, flight or freeze are responses to ___.",options:["danger","boredom","hunger"],answer:0,explanation:"These are the three common responses people have when they face danger."},{question:"In the story, the argument on the train was actually a ___.",options:["trick","joke","game"],answer:0,explanation:"The argument was fake: it was a trick so that people would not notice the theft."}],"3A":[{question:"___ you hurry up, we're going to leave without you.",options:["Unless","If","Even if"],answer:0,explanation:"Unless means if not: if you do not hurry up, we will leave without you."},{question:"I can't understand Liz ___ she speaks slowly.",options:["unless","in case","even if"],answer:0,explanation:"Unless means if not: I can't understand her if she does not speak slowly."},{question:"Take your umbrella ___ it rains.",options:["in case","unless","even if"],answer:0,explanation:"In case means you are prepared for a possible future situation."},{question:"___ fire, break the glass.",options:["In case of","In case","Unless"],answer:0,explanation:"In case of + noun is used in formal situations: In case of fire, break the glass."},{question:"___ the company pays me twice as much, I'm going to leave.",options:["Even if","Unless","In case"],answer:0,explanation:"Even if emphasises that something will not change the situation."},{question:"I can't help you ___ you tell me the problem.",options:["unless","if","in case"],answer:0,explanation:"After unless we use a present tense, not will: unless you tell me the problem."}],"3B":[{question:"It's necessary ___ a driving licence.",options:["to have","have","having"],answer:0,explanation:"Be necessary to + infinitive: It's necessary to have a driving licence."},{question:"This job needs ___ by tomorrow morning.",options:["to be done","doing","be done"],answer:0,explanation:"Need to + be + past participle: needs to be done."},{question:"I'm ___ to wear a hat when I deliver food, but I don't.",options:["supposed","allowed","permitted"],answer:0,explanation:"Be supposed to describes an obligation that we do not always follow."},{question:"Our children are allowed ___ computer games for two hours at the weekend.",options:["to play","play","playing"],answer:0,explanation:"Be allowed to + infinitive: are allowed to play."},{question:"Drivers are not ___ to drive more than eight hours without a break.",options:["permitted","supposed","necessary"],answer:0,explanation:"Be permitted to is the formal way to talk about permission: are not permitted to drive."},{question:"I've got to get home by ten. This means:",options:["I must get home by ten.","I might get home by ten.","I got home at ten."],answer:0,explanation:"Have got to + infinitive means must or have to."}],"3C":[{question:"Interviewer: Tell me a bit about ___.",options:["yourself","you","your"],answer:0,explanation:"Tell me about yourself is the standard interview opening."},{question:"Why are you interested ___ this job?",options:["in","on","about"],answer:0,explanation:"The collocation is be interested in something."},{question:"What do you mean ___ researching new flavours?",options:["by","with","for"],answer:0,explanation:"The phrase for asking for clarification is What do you mean by ...?"},{question:"Add the correct negative prefix: appropriate → ___",options:["inappropriate","unappropriate","imappropriate"],answer:0,explanation:"The negative of appropriate is inappropriate."},{question:"Add the correct negative prefix: regular → ___",options:["irregular","inregular","unregular"],answer:0,explanation:"Words beginning with r usually take ir-: regular → irregular."},{question:"Add the correct negative prefix: responsible → ___",options:["irresponsible","unresponsible","inresponsible"],answer:0,explanation:"The negative of responsible is irresponsible."}],"3D":[{question:"I'd rather ___ by phone if that's all right.",options:["pay","to pay","paying"],answer:0,explanation:"Would rather + infinitive without to: I'd rather pay."},{question:"I'd rather not ___ that question.",options:["answer","to answer","answering"],answer:0,explanation:"The negative is would rather not + infinitive: I'd rather not answer."},{question:"I prefer cats ___ dogs.",options:["to","than","from"],answer:0,explanation:"Prefer + noun + to + noun: I prefer cats to dogs."},{question:"I'd prefer ___ a takeaway tonight.",options:["to get","get","getting"],answer:0,explanation:"Would prefer + to + infinitive: I'd prefer to get a takeaway."},{question:"We'd ___ rather go skiing than surfing.",options:["much","more","very"],answer:0,explanation:"Would much rather shows a strong preference."},{question:"I'd go for a teacher. This means:",options:["I'd choose a teacher.","I'd become a teacher.","I'd vote for a teacher."],answer:0,explanation:"Would go for means would choose or prefer."}],"4A":[{question:"I was ___ to call you, but I was too busy.",options:["going","doing","about"],answer:0,explanation:"Was going to describes a past plan that did not happen."},{question:"They ___ to visit the museum, but it was closed.",options:["were going","was going","gone"],answer:0,explanation:"The subject they takes were: They were going to visit."},{question:"I ___ to visit last week, but I couldn't in the end.",options:["planned","planning","plans"],answer:0,explanation:"Planned to is another way to describe a past plan that did not happen."},{question:"Sorry — I crashed the car! I didn't ___ to!",options:["mean","think","plan"],answer:0,explanation:"Didn't mean to describes something done by accident."},{question:"The doctor ___ to see me last week, but he had to cancel.",options:["intended","intends","intending"],answer:0,explanation:"Intended to is a formal way to describe a past plan."},{question:"I brought you because I ___ it would be nice if you met my parents.",options:["thought","think","was thinking"],answer:0,explanation:"Thought it would be explains the reason for a past plan."}],"4B":[{question:"Could you tell me where ___?",options:["I have to go","do I have to go","I have to go?"],answer:0,explanation:"After an indirect question opening we use affirmative word order: where I have to go."},{question:"Do you know where ___?",options:["he works","does he work","he work"],answer:0,explanation:"Indirect questions use statement order: where he works."},{question:"___ you like a drink?",options:["Wouldn't","Don't","Aren't"],answer:0,explanation:"A negative question sounds polite: Wouldn't you like a drink?"},{question:"Didn't she win an award? This question is used to ___ information.",options:["check","give","hide"],answer:0,explanation:"We use negative questions to check or confirm something we think we know."},{question:"Wouldn't you say this film is more interesting? This tries to ___ the other person.",options:["persuade","apologise to","interrupt"],answer:0,explanation:"Negative questions can be used to persuade someone that our idea is best."},{question:"Which indirect question is correct?",options:["Can I ask you what time the train leaves?","Can I ask you what time does the train leave?","Can I ask you what time is the train leaving?"],answer:0,explanation:"The indirect question uses statement order: what time the train leaves."}],"4C":[{question:"Have you heard ___ the news?",options:["about","for","on"],answer:0,explanation:"The phrase is hear about the news."},{question:"___ the reviews, the film is the best ever in the series.",options:["According to","According","According with"],answer:0,explanation:"According to + source introduces information from another source."},{question:"It's all ___ the news.",options:["over","on","in"],answer:0,explanation:"The phrase is it's all over the news, meaning everyone is reporting it."},{question:"Good news: the flight is not cancelled. What a ___!",options:["relief","scary","shame"],answer:0,explanation:"That's a relief is used when good news removes a worry."},{question:"If a news report is biased, it ___.",options:["supports one side unfairly","is completely true","is very recent"],answer:0,explanation:"Biased means supporting one person or group in an unfair way."},{question:"Breaking news is ___.",options:["new information about an event happening now","an old newspaper story","a weather forecast"],answer:0,explanation:"Breaking news is new information about an event that is happening right now."}],"4D":[{question:"Holly looks up an old friend, Adam, on ___ media.",options:["social","public","local"],answer:0,explanation:"Holly uses social media to find Adam."},{question:"Holly pretends that she just ___ into Adam at a supermarket.",options:["bumped","walked","ran"],answer:0,explanation:"The phrase is bump into someone, meaning meet them by chance."},{question:"How amazing to see you! is used when ___ someone.",options:["greeting","leaving","thanking"],answer:0,explanation:"It is a key phrase for greeting someone you have not seen for a long time."},{question:"We should catch ___.",options:["up","on","out"],answer:0,explanation:"Catch up means talk about what has happened in your lives."},{question:"It's amazing how quickly time has ___.",options:["gone","been","come"],answer:0,explanation:"The key phrase is It's amazing how quickly time has gone."},{question:"In Jade's email, Nikolas is now working for himself as a ___.",options:["freelancer","teacher","baker"],answer:0,explanation:"Jade writes that he is working for himself as a freelancer."}],"5A":[{question:"I'm going downstairs ___ lock up.",options:["to","for","so"],answer:0,explanation:"To + infinitive introduces a clause of purpose."},{question:"I often turn off my phone ___ avoid distractions.",options:["in order to","for to","so to"],answer:0,explanation:"In order to + infinitive introduces a purpose clause."},{question:"The police put up barriers ___ stop people entering the building.",options:["so as to","so that","in order"],answer:0,explanation:"So as to + infinitive is a more formal way to express purpose."},{question:"I'd like to move closer to the stage ___ I can hear.",options:["so that","to","for"],answer:0,explanation:"So that + subject + verb is used when the subjects are the same or different."},{question:"He set his alarm for 7 a.m. ___ oversleep.",options:["in order not to","for not to","so as to not"],answer:0,explanation:"The negative purpose form is in order not to + infinitive."},{question:"Let's check this very carefully ___ we don't make a mistake.",options:["so that","to not","for"],answer:0,explanation:"After so that we use a normal negative clause: so that we don't make a mistake."}],"5B":[{question:"My new company is ___ than my old one.",options:["busier","busy","more busy"],answer:0,explanation:"The comparative of busy is busier."},{question:"Could you speak ___ quietly, please?",options:["more","most","much"],answer:0,explanation:"We use more with most adverbs to form the comparative: more quietly."},{question:"My chair isn't ___ comfortable as yours.",options:["as","than","like"],answer:0,explanation:"The structure is not as + adjective + as: not as comfortable as yours."},{question:"Hyun Woo is ___ the most talented actor I've ever seen.",options:["by far","far by","much far"],answer:0,explanation:"By far emphasises a superlative: by far the most talented."},{question:"A ___ is money you pay to travel by train, bus or plane.",options:["fare","fee","profit"],answer:0,explanation:"A fare is the money you pay to travel."},{question:"A ___ is something you buy for less than its usual price.",options:["bargain","refund","receipt"],answer:0,explanation:"A bargain is something bought cheaply or for less than the usual price."}],"5C":[{question:"___ the reviews, the film is the best ever in the series.",options:["According to","According","According with"],answer:0,explanation:"According to introduces the source of the information."},{question:"___ story short, no one seems to agree which is better value.",options:["Long","Short","Brief"],answer:0,explanation:"The fixed phrase is long story short."},{question:"___ , there seem to be a lot of problems with that model.",options:["All in all","All in","All of all"],answer:0,explanation:"All in all introduces a general summary."},{question:"___ , I decided not to buy a new phone.",options:["In the end","At the end","On the end"],answer:0,explanation:"In the end means finally, after considering everything."},{question:"It all ___ to the colour.",options:["comes down","gets down","goes down"],answer:0,explanation:"The phrase is it all comes down to ..., meaning this is the most important point."},{question:"Just because something is expensive, it doesn't ___ it is better.",options:["mean","say","tell"],answer:0,explanation:"The structure is just because ..., it doesn't mean (that) ..."}],"5D":[{question:"I have my hair ___ every six weeks.",options:["cut","cutting","to cut"],answer:0,explanation:"The causative is have + object + past participle: have my hair cut."},{question:"We're having our apartment ___ at the moment.",options:["painted","painting","paint"],answer:0,explanation:"Someone else is painting the apartment, so we use the causative: having it painted."},{question:"You need to get your eyesight ___.",options:["checked","checking","check"],answer:0,explanation:"Get + object + past participle: get your eyesight checked."},{question:"I got a friend ___ me to the airport.",options:["to take","take","taking"],answer:0,explanation:"Get + somebody + to infinitive: I got a friend to take me."},{question:"Do you like this necklace? I made it ___.",options:["myself","me","my"],answer:0,explanation:"Myself emphasises that I did it alone, with no help."},{question:"Did you organise the wedding ___?",options:["yourselves","yourself","your"],answer:0,explanation:"The subject is you (plural), so the reflexive pronoun is yourselves."}],"6A":[{question:"That part of the city is ___ beautiful!",options:["so","such","very"],answer:0,explanation:"So + adjective shows emphasis: so beautiful!"},{question:"It was ___ cold that we needed coats.",options:["so","such","very"],answer:0,explanation:"So + adjective + that describes a result: so cold that we needed coats."},{question:"We had ___ a nice day walking around the city.",options:["such","so","very"],answer:0,explanation:"Such + a + adjective + singular noun: such a nice day."},{question:"It's ___ bad weather.",options:["such","so","very"],answer:0,explanation:"Such is used with an uncountable noun: such bad weather."},{question:"They had ___ a good time that they went back the next day.",options:["such","so","very"],answer:0,explanation:"Such + a + adjective + noun + that describes a result."},{question:"I was ___ tired I fell asleep.",options:["so","such","very"],answer:0,explanation:"So + adjective + (that) clause: I was so tired (that) I fell asleep."}],"6B":[{question:"I'm a pilot, so I'm used ___ flying.",options:["to","for","with"],answer:0,explanation:"Be used to + noun/-ing: I'm used to flying."},{question:"I'm not used to ___ at weekends.",options:["working","work","worked"],answer:0,explanation:"After be used to we use the -ing form: used to working."},{question:"At first I didn't like the food, but I soon got used ___ it.",options:["to","with","for"],answer:0,explanation:"Get used to + noun/-ing means become accustomed to it."},{question:"We used to ___ on a boat. Now we live in a house.",options:["live","living","lived"],answer:0,explanation:"Used to + infinitive describes a past habit or state."},{question:"If you travel light, you ___.",options:["take only a few things","travel by plane","travel cheaply"],answer:0,explanation:"Travel light means take only a few things when you travel."},{question:"If you break the journey, you ___.",options:["stop somewhere for a short time","cancel the journey","start the journey"],answer:0,explanation:"Break the journey means stop somewhere for a short time during a long journey."}],"6C":[{question:"___ you're saying that the bus is cheaper.",options:["So","Such","As"],answer:0,explanation:"So you're saying ... is used to confirm understanding."},{question:"So what you ___ is that the train is faster.",options:["mean","say","tell"],answer:0,explanation:"So what you mean is ... restates the other person's point."},{question:"If I've got this ___ , you want to leave early.",options:["right","true","sure"],answer:0,explanation:"The phrase is if I've got this right, meaning if I have understood correctly."},{question:"I didn't ___ what you said about the timetable.",options:["catch","listen","hear"],answer:0,explanation:"I didn't catch what you said means I didn't understand or hear it clearly."},{question:"Can you just ___ that last bit again, please?",options:["say","speak","tell"],answer:0,explanation:"The phrase is Can you just say that last bit again?"},{question:"In other words is used to ___.",options:["rephrase or clarify","change the subject","end the conversation"],answer:0,explanation:"In other words introduces a clearer way of saying the same thing."}],"6D":[{question:"Shenzhen now has about ___ million people.",options:["12","30","50"],answer:0,explanation:"The programme says Shenzhen is home to 12 million people."},{question:"Until the late 1970s, Shenzhen was farmland and ___ villages.",options:["fishing","mining","factory"],answer:0,explanation:"Before it became a city, Shenzhen consisted of farmland and fishing villages."},{question:"It's become a teeming ___ of over 12 million.",options:["metropolis","village","market"],answer:0,explanation:"A teeming metropolis is a very large, busy city."},{question:"___ from all over come here with their ideas.",options:["Innovators","Farmers","Tourists"],answer:0,explanation:"The video describes innovators from all over the world coming to Shenzhen."},{question:"The ___ of change here is undeniable.",options:["pace","time","size"],answer:0,explanation:"The pace of change means the speed at which things are changing."},{question:"Oviedo is famous ___ its food.",options:["for","of","about"],answer:0,explanation:"The phrase is be famous for something."}],"7A":[{question:"Feisal said he ___ in a hurry.",options:["was","is","were"],answer:0,explanation:"The present simple am moves back to the past simple was in reported speech."},{question:"Heidi told me that she ___ Spanish.",options:["spoke","speaks","spoken"],answer:0,explanation:"The present simple speaks moves back to the past simple spoke."},{question:"You said you ___ call back later.",options:["would","will","can"],answer:0,explanation:"Will changes to would in reported speech."},{question:"They said they ___ planning to go to Japan.",options:["had been","were","have been"],answer:0,explanation:"The past continuous moves back to the past perfect continuous: had been planning."},{question:"Bao replied that he ___ help me.",options:["couldn't","can't","doesn't"],answer:0,explanation:"Can't changes to couldn't in reported speech."},{question:"If you whisper, you ___.",options:["speak very quietly","speak very loudly","shout angrily"],answer:0,explanation:"Whisper means say something very quietly, using your breath rather than your voice."}],"7B":[{question:"The app ___ downloaded over a million times.",options:["has been","have been","was being"],answer:0,explanation:"The present perfect passive is has/have been + past participle: has been downloaded."},{question:"The museum ___ built in the 1980s.",options:["was","has","is"],answer:0,explanation:"The past simple passive is was/were + past participle: was built."},{question:"The winner ___ announced tomorrow.",options:["will be","is being","has been"],answer:0,explanation:"The future passive is will be + past participle: will be announced."},{question:"My train has just ___ cancelled.",options:["been","be","being"],answer:0,explanation:"The present perfect passive uses has been + past participle: has just been cancelled."},{question:"I got ___ by the police last night!",options:["stopped","stop","stopping"],answer:0,explanation:"Get + past participle is an informal passive: got stopped."},{question:"The play was written ___ Shakespeare in 1609.",options:["by","from","with"],answer:0,explanation:"By + agent names the person who did the action."}],"7C":[{question:"How do you ___ (name)?",options:["know","meet","find"],answer:0,explanation:"How do you know ...? is used to start a conversation about a shared contact."},{question:"How did you get ___ that?",options:["into","in","on"],answer:0,explanation:"Get into something means become interested or involved in it."},{question:"What's it ___?",options:["like","look","as"],answer:0,explanation:"What's it like? asks for a description."},{question:"Such as? asks for an ___.",options:["example","opinion","answer"],answer:0,explanation:"Such as? and For example? ask the speaker to give examples."},{question:"How come? asks for a ___.",options:["reason","time","place"],answer:0,explanation:"How come? means Why? and asks for a reason."},{question:"That sounds ___! shows interest.",options:["amazing","angry","silent"],answer:0,explanation:"That sounds amazing! is a phrase for commenting and showing interest."}],"7D":[{question:"I think you know John? Yes, I ___.",options:["do","am","know"],answer:0,explanation:"Do replaces the main verb know: Yes, I do."},{question:"Are you going to the party? I think ___.",options:["so","it","that"],answer:0,explanation:"I think so avoids repeating the whole idea."},{question:"Has Angus gone home? I hope ___.",options:["not","no","don't"],answer:0,explanation:"For a negative answer we use hope not."},{question:"Did Elena finish the video? I don't ___.",options:["think so","think","hope so"],answer:0,explanation:"With think we prefer the negative I don't think so."},{question:"Would you like to go out for a meal? Yes, I'd love ___.",options:["to","so","it"],answer:0,explanation:"We use to after would love to avoid repeating the verb phrase."},{question:"Do you want to be an actor? I'd like to ___, but it's not easy.",options:["be","do","so"],answer:0,explanation:"With be we use be at the end: I'd like to be."}],"8A":[{question:"If I ___ woken up on time, I wouldn't have missed the bus.",options:["had","have","would have"],answer:0,explanation:"The third conditional uses if + past perfect: If I had woken up."},{question:"We would have left early if we ___ about the traffic.",options:["had known","knew","know"],answer:0,explanation:"The third conditional uses the past perfect in the if-clause: if we had known."},{question:"If I'd known she was at the party, I ___ have come.",options:["might","must","will"],answer:0,explanation:"Might have + past participle shows a less certain past result."},{question:"I should ___ bought my ticket yesterday. Now there are none left.",options:["have","has","had"],answer:0,explanation:"Should have + past participle expresses a past regret."},{question:"I shouldn't ___ eaten so much. Now I feel ill.",options:["have","has","had"],answer:0,explanation:"Shouldn't have + past participle expresses regret about a past action."},{question:"Maybe we could ___ won if we'd played better.",options:["have","has","had"],answer:0,explanation:"Could have + past participle talks about an alternative past possibility."}],"8B":[{question:"My father ___ read to me every night.",options:["would","used","was"],answer:0,explanation:"Would + infinitive describes a repeated past habit."},{question:"Which sentence is correct?",options:["I would be very curious as a child.","I was very curious as a child.","I would be being curious as a child."],answer:1,explanation:"We do not use would for past states, so we say I was very curious."},{question:"When we lived in New Zealand, I ___ feel isolated from my family.",options:["used to","would","was used to"],answer:0,explanation:"Feel is a state here, so we use used to, not would."},{question:"We would ___ see them in the afternoon.",options:["always","used","often always"],answer:0,explanation:"With would, the adverb of frequency comes after would: would always see."},{question:"We always ___ to visit my grandparents during the holidays.",options:["used","would","use"],answer:0,explanation:"With used to, the adverb comes before used to: always used to visit."},{question:"If you figure something out, you ___.",options:["understand or solve it","write it down","give it up"],answer:0,explanation:"Figure out means understand something or solve a problem."}],"8C":[{question:"Today I'm going to ___ about ...",options:["talk","tell","say"],answer:0,explanation:"Talk about introduces the topic of a presentation."},{question:"___ on to the next point, ...",options:["Moving","Going","Turning"],answer:0,explanation:"Moving on to the next point is used to move through the presentation."},{question:"___ now to the next question, ...",options:["Turning","Moving","Going"],answer:0,explanation:"Turning now to ... is used to introduce a new point."},{question:"To ___ up, ...",options:["sum","add","end"],answer:0,explanation:"To sum up introduces a summary at the end of a presentation."},{question:"Just to ___ , ...",options:["recap","repeat","return"],answer:0,explanation:"Just to recap repeats the main points."},{question:"I'll get back to you ___ that.",options:["on","in","for"],answer:0,explanation:"The phrase is get back to someone on something."}],"8D":[{question:"On Dragons' Den, entrepreneurs have three ___ to describe their idea.",options:["minutes","hours","days"],answer:0,explanation:"The programme information says they have three minutes."},{question:"In return for investing, the investor gets ___ of the business.",options:["shares","salaries","loans"],answer:0,explanation:"Shares are the equal parts that a company's value is divided into."},{question:"People who put their own money into a business are ___.",options:["investors","employees","customers"],answer:0,explanation:"Investors put money into a business and hope to receive more money in return."},{question:"We run a business ___ ...",options:["called","name","calling"],answer:0,explanation:"We run a business called ... is a key phrase for starting a pitch."},{question:"The market for coconut oil ___ worth around $50 million.",options:["is","are","be"],answer:0,explanation:"The market is singular, so the verb is is: The market is worth ..."},{question:"In the email: I'm pleased to ___ that the investor made an offer.",options:["announce","say","tell"],answer:0,explanation:"The formal phrase is I'm pleased to announce that ..."}]},Lx={"1A":[{type:"callout",title:"A story of me",titleAr:"قصة عني",tone:"brand",text:"The objects we keep often reflect who we were, who we have become and who we want to be. In this lesson you listen to two people talk about three objects they would never throw away, then tell your own story in three objects using narrative tenses.",textAr:"الأشياء التي نحتفظ بها تعكس غالباً من كنا، ومن أصبحنا، ومن نريد أن نكون. في هذا الدرس تستمع إلى شخصين يتحدثان عن ثلاثة أشياء لن يتخلوا عنها أبداً، ثم تروي قصتك الخاصة في ثلاثة أشياء باستخدام أزمنة السرد."},{type:"vocab",title:"Describing possessions",titleAr:"وصف الممتلكات",items:[{word:"belong to",meaning:"to be owned by someone",example:"This ring belongs to my mother."},{word:"inherit",meaning:"to receive something from someone who has died",example:"Marta inherited a valuable ring from her mother."},{word:"borrow",meaning:"to take and use something that belongs to someone else",example:"She borrowed a leather jacket from a friend."},{word:"genuine",meaning:"real, not a copy",example:"It is a genuine Spanish guitar."},{word:"damaged",meaning:"harmed or broken",example:"The moped had been badly damaged."},{word:"special to me",meaning:"having a personal meaning",example:"These boots are special to me."},{word:"worth a lot",meaning:"having great value",example:"The silver rings are worth a lot."}]},{type:"vocab",title:"Materials",titleAr:"المواد",source:"Vocabulary Bank p.132",items:[{word:"stone",meaning:"a hard material from rock"},{word:"rubber",meaning:"an elastic material used for tyres and boots"},{word:"a diamond",meaning:"a very hard, valuable precious stone"},{word:"iron",meaning:"a strong metal used for pans, gates and tools"},{word:"cotton",meaning:"a soft plant fibre used for clothes and sheets"},{word:"silver",meaning:"a shiny grey precious metal used for jewellery"},{word:"denim",meaning:"a strong cotton cloth used for jeans"},{word:"wood",meaning:"the hard material that trees are made of"},{word:"steel",meaning:"a strong metal made from iron and carbon"},{word:"plastic",meaning:"a light artificial material"},{word:"gold",meaning:"a valuable yellow precious metal"},{word:"glass",meaning:"a hard, transparent material used for windows and bottles"}]},{type:"grammar",title:"Narrative tenses",titleAr:"أزمنة السرد",bankPage:9,explanation:"When we tell a story, we often use a variety of tenses. These are called narrative tenses and they include the past simple, the past continuous and the past perfect. It is important to use the correct tense as this gives us information about the sequence of events and the most important details of the story.",rule:"Past simple = main events; Past continuous = background; Past perfect = earlier action.",table:[{tense:"Past simple",use:"main events of a story",example:"Suddenly, he heard a terrible crash."},{tense:"Past continuous",use:"background / temporary states",example:"The wind was blowing."},{tense:"Past perfect",use:"action before the main events",example:"The train had already left."}],examples:["It was a cold, wet day and the wind was blowing.","Josh was walking down the road when suddenly, he heard a terrible crash.","He turned around and saw that a woman had crashed her moped."]},{type:"text",title:"Speaking: a story of me in three objects",titleAr:"تحدث: قصتي في ثلاثة أشياء",paragraphs:["Think of three people you know and three objects connected with each person. The objects that we choose to have around us reflect our personalities in different ways. Our possessions contain our memories; they remind us of people and places in our lives.","Do you ever think about why you choose to keep some objects and not others? The objects we keep often reflect who we were, who we have become and who we want to be."]},{type:"text",title:"Writing: an advert to sell an item online",titleAr:"كتابة: إعلان لبيع شيء عبر الإنترنت",paragraphs:["Write an advert to sell an item online. Use the vocabulary and grammar from this lesson to describe the object, the material it is made of and its story."]}],"1B":[{type:"callout",title:"Less is more?",titleAr:"الأقل أفضل؟",tone:"accent",text:"Some people believe that having fewer possessions makes life simpler and happier. Others love collecting things. In this lesson you read about minimalism vs. maximalism and talk about your own preferences.",textAr:"يعتقد بعض الناس أن امتلاك أشياء أقل يجعل الحياة أبسط وأكثر سعادة. بينما يحب آخرون جمع الأشياء. في هذا الدرس تقرأ عن الحد الأدنى مقابل الحد الأقصى وتتحدث عن تفضيلاتك."},{type:"text",title:"Reading: minimalism vs. maximalism",titleAr:"قراءة: الحد الأدنى مقابل الحد الأقصى",paragraphs:["Minimalism is about keeping only what you need and what brings you joy. Maximalism, on the other hand, celebrates abundance and personal expression through objects.","Both approaches have their fans. The question is not which is right, but which suits your lifestyle and values."]},{type:"vocab",title:"Personal preferences",titleAr:"التفضيلات الشخصية",items:[{word:"prefer",meaning:"to like one thing more than another",example:"I prefer a tidy room."},{word:"would rather",meaning:"to prefer one option",example:"I would rather have fewer things."},{word:"rather than",meaning:"instead of",example:"Quality rather than quantity."},{word:"appeal to",meaning:"to attract or interest",example:"Minimalism appeals to me."}]},{type:"grammar",title:"Verb patterns",titleAr:"أنماط الأفعال",bankPage:10,explanation:"Some verbs are followed by a to-infinitive, others by an -ing form. Learning these patterns helps you express preferences correctly.",rule:"prefer + -ing; would rather + base verb; enjoy + -ing.",examples:["I prefer living with less.","I would rather keep it simple.","I enjoy collecting things."]},{type:"text",title:"Pronunciation: stress in prepositional phrases",titleAr:"نطق: التأكيد في العبارات حرف الجر",paragraphs:["In prepositional phrases, stress often falls on the content word. Listen and repeat the examples, then practise with your own preferences."]}],"1C":[{type:"callout",title:"How to … leave phone messages",titleAr:"كيف … تترك رسالة هاتفية",tone:"warm",text:"Leaving a clear phone message is an important skill. In this lesson you learn phrasal verbs about housework and practise intonation in polite requests.",textAr:"ترك رسالة هاتفية واضحة مهارة مهمة. في هذا الدرس تتعلم أفعالاً مركبة عن أعمال المنزل وتتدرب على نبرة الصوت في الطلبات المهذبة."},{type:"vocab",title:"Phrasal verbs: housework",titleAr:"أفعال مركبة: أعمال المنزل",items:[{word:"tidy up",meaning:"to make a place neat",example:"Can you tidy up your room?"},{word:"clean up",meaning:"to remove dirt or mess",example:"Please clean up the kitchen."},{word:"put away",meaning:"to place something in its proper place",example:"Put away your toys."},{word:"throw away",meaning:"to discard",example:"Throw away the old magazines."},{word:"take out",meaning:"to remove (rubbish)",example:"Take out the rubbish."}]},{type:"grammar",title:"Intonation in polite requests",titleAr:"النبرة في الطلبات المهذبة",bankPage:11,explanation:"Polite requests often use rising intonation. The voice goes up at the end of the sentence to sound friendly and non-demanding.",examples:["Could you call me back?","Would you mind leaving a message?","Can you tidy up, please?"]},{type:"text",title:"How to leave a phone message",titleAr:"كيف تترك رسالة هاتفية",paragraphs:["A good phone message includes your name, the time, a brief reason for calling and a request to call back. Keep it short and polite."]}],"1D":[{type:"callout",title:"BBC Street Interviews — gadgets and screen time",titleAr:"مقابلات BBC في الشارع — الأجهزة ووقت الشاشة",tone:"brand",text:"People talk about their gadgets and how much time they spend on screens. You learn expressions like except for, apart from and (not) even, and write an online forum comment.",textAr:"يتحدث الناس عن أجهزتهم ومقدار الوقت الذي يقضونه أمام الشاشات. تتعلم تعبيرات مثل except for و apart from و (not) even، وتكتب تعليقاً في منتدى عبر الإنترنت."},{type:"vocab",title:"Gadgets and screen time",titleAr:"الأجهزة ووقت الشاشة",items:[{word:"gadget",meaning:"a small electronic device",example:"My favourite gadget is my phone."},{word:"screen time",meaning:"time spent using a screen",example:"I try to reduce screen time."},{word:"addicted",meaning:"unable to stop using something",example:"Teenagers are addicted to their phones."}]},{type:"grammar",title:"except for, apart from, (not) even",titleAr:"except for, apart from, (not) even",bankPage:12,explanation:'These expressions are used to add exceptions or emphasis. "Except for" and "apart from" introduce an exception; "not even" emphasises a negative.',examples:["I use my phone for everything except for reading.","Apart from my laptop, I rarely use other gadgets.","I do not even check my phone at night."]},{type:"text",title:"Writing: an online forum comment",titleAr:"كتابة: تعليق في منتدى",paragraphs:["Write a short comment for an online forum about gadgets and screen time. Use the vocabulary and grammar from this lesson."]}],"1R":[{type:"callout",title:"Unit 1 review",titleAr:"مراجعة الوحدة 1",tone:"neutral",text:"Review the language from Unit 1: narrative tenses, materials, verb patterns, housework phrasal verbs and gadget vocabulary.",textAr:"راجع لغة الوحدة 1: أزمنة السرد، المواد، أنماط الأفعال، أفعال housework المركبة، ومفردات الأجهزة."},{type:"text",title:"Check your progress",titleAr:"تحقق من تقدمك",paragraphs:["Go back through lessons 1A–1D and check you can use the key language confidently. Try the unit test when ready."]}]},Dx={"2A":[{type:"callout",title:"Change of habit",titleAr:"تغيير العادة",tone:"brand",text:"Have you ever tried to stop a bad habit or build a new positive habit? In this lesson you read about changing habits, learn the present perfect continuous and vocabulary for making changes.",textAr:"هل سبق أن حاولت إيقاف عادة سيئة أو بناء عادة إيجابية؟ في هذا الدرس تقرأ عن تغيير العادات، وتتعلم المضارع التام المستمر ومفردات تغيير العادات."},{type:"vocab",title:"Making changes",titleAr:"إجراء تغييرات",items:[{word:"habit",meaning:"something you do regularly"},{word:"break a habit",meaning:"to stop doing something you usually do"},{word:"build a habit",meaning:"to start doing something regularly"},{word:"lifestyle",meaning:"the way a person lives"}]},{type:"grammar",title:"Present perfect continuous",titleAr:"المضارع التام المستمر",bankPage:20,explanation:"We use the present perfect continuous to talk about actions that started in the past and are still continuing, or have recently stopped with a result in the present.",examples:["I have been helping people to change their habits for seven years.","We have been practising the violin."]},{type:"text",title:"A life coach",titleAr:"مدرب حياة",paragraphs:["I have been a life coach for the past seven years, and before this I worked as a psychologist for over ten years. I have been helping people to change their habits."]}],"2B":[{type:"callout",title:"People pleaser",titleAr:"إرضاء الناس",tone:"accent",text:"Are you a people pleaser? In this lesson you listen to a podcast, learn relative clauses and collocations for feelings and behaviour, and practise chunking.",textAr:"هل أنت من مرضي الناس؟ في هذا الدرس تستمع إلى بودكاست، وتتعلم جملاً نسبية وتلازمات للشعور والسلوك، وتتدرب على التجزئة."},{type:"vocab",title:"Collocations: feelings and behaviour",titleAr:"تلازمات: المشاعر والسلوك",items:[{word:"people pleaser",meaning:"someone who tries too hard to make others happy"},{word:"avoid people who lie",meaning:"to stay away from dishonest people"},{word:"say no",meaning:"to refuse a request"}]},{type:"grammar",title:"Relative clauses",titleAr:"الجمل النسبية",bankPage:23,explanation:"Relative clauses give more information about a noun. We use who, which, that, where, when.",examples:["I try to avoid people who lie.","The email which you sent was helpful."]}],"2C":[{type:"callout",title:"That's annoying!",titleAr:"هذا مزعج!",tone:"warm",text:"Talk about things that annoy you. Learn vocabulary for pet hates and practise stress and intonation to show annoyance.",textAr:'تحدث عن الأشياء التي تزعجك. تعلم مفردات "الكراهيات" (pet hates) وتدرّب على التأكيد والنبرة لإظهار الإزعاج.'},{type:"vocab",title:"Pet hates",titleAr:"الكراهيات",items:[{word:"pet hate",meaning:"something you really dislike"},{word:"can't stand",meaning:"to dislike very much"},{word:"annoy",meaning:"to make someone slightly angry"},{word:"drives me crazy",meaning:"makes me very annoyed"}]},{type:"grammar",title:"Stress and intonation to show annoyance",titleAr:"التأكيد والنبرة لإظهار الإزعاج",bankPage:26,explanation:"To show annoyance, we stress key words and use a falling, emphatic intonation.",examples:["I can't stand it when people take a long time to pay.","It annoys me when they try to sell me something I don't want."]}],"2D":[{type:"callout",title:"Discuss difficult situations",titleAr:"مناقشة المواقف الصعبة",tone:"brand",text:"Discuss difficult situations and read a personal experience. Learn to write about a personal experience.",textAr:"ناقش المواقف الصعبة واقرأ تجربة شخصية. تعلم كتابة تجربة شخصية."},{type:"text",title:"Not what it seemed to be",titleAr:"ليس كما بدا",paragraphs:["A few years ago, I was living in New York City and I took the subway to work every day."]},{type:"vocab",title:"Difficult situations",titleAr:"المواقف الصعبة",items:[{word:"situation",meaning:"a set of circumstances"},{word:"experience",meaning:"something that happens to you"}]}],"2R":[{type:"callout",title:"Unit 2 review",titleAr:"مراجعة الوحدة 2",tone:"neutral",text:"Review the language from Unit 2: present perfect continuous, relative clauses, pet hates vocabulary.",textAr:"راجع لغة الوحدة 2: المضارع التام المستمر، الجمل النسبية، مفردات الكراهيات."}]},Mx={"3A":[{type:"callout",title:"Working from home",titleAr:"Working from home",tone:"brand",text:"Read about famous authors working from home. Use unless, even if and in case (of) to talk about conditions. Use common work phrases. Stress phrases naturally when speaking.",textAr:"Read about famous authors working from home. Use unless, even if and in case (of) to talk about conditions. Use common work phrases. Stress phrases naturally when speaking."},{type:"vocab",title:"work phrases",titleAr:"work phrases",items:[{word:"work phrases",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"conditional structures: unless, even if, in case (of)",titleAr:"conditional structures: unless, even if, in case (of)",bankPage:32,explanation:"Grammar focus: conditional structures: unless, even if, in case (of).",examples:["Read about famous authors working from home.","Use unless, even if and in case (of) to talk about conditions.","Use common work phrases."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Read about famous authors working from home.","Use unless, even if and in case (of) to talk about conditions.","Use common work phrases.","Stress phrases naturally when speaking."]}],"3B":[{type:"callout",title:"Gig work",titleAr:"Gig work",tone:"brand",text:"Understand people talking about gig work. Talk about necessity, obligation and permission. Notice and produce the elision of /t/.",textAr:"Understand people talking about gig work. Talk about necessity, obligation and permission. Notice and produce the elision of /t/."},{type:"vocab",title:"work",titleAr:"work",items:[{word:"work",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"necessity, obligation and permission",titleAr:"necessity, obligation and permission",bankPage:35,explanation:"Grammar focus: necessity, obligation and permission.",examples:["Understand people talking about gig work.","Talk about necessity, obligation and permission.","Notice and produce the elision of /t/."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand people talking about gig work.","Talk about necessity, obligation and permission.","Notice and produce the elision of /t/."]}],"3C":[{type:"callout",title:"Good question",titleAr:"Good question",tone:"brand",text:"Take part in a job interview. Describe personality and form negative adjectives. Use the correct word stress in personality adjectives.",textAr:"Take part in a job interview. Describe personality and form negative adjectives. Use the correct word stress in personality adjectives."},{type:"vocab",title:"personality adjectives (1); negative prefixes",titleAr:"personality adjectives (1); negative prefixes",items:[{word:"personality adjectives (1); negative prefixes",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"How to … take part in an interview",titleAr:"How to … take part in an interview",bankPage:38,explanation:"Grammar focus: How to … take part in an interview.",examples:["Take part in a job interview.","Describe personality and form negative adjectives.","Use the correct word stress in personality adjectives."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Take part in a job interview.","Describe personality and form negative adjectives.","Use the correct word stress in personality adjectives."]}],"3D":[{type:"callout",title:"This or that?",titleAr:"This or that?",tone:"brand",text:"Understand people talking about their preferred jobs. Express preferences with a range of structures. Write a discussion board post.",textAr:"Understand people talking about their preferred jobs. Express preferences with a range of structures. Write a discussion board post."},{type:"grammar",title:"expressing preferences",titleAr:"expressing preferences",bankPage:40,explanation:"Grammar focus: expressing preferences.",examples:["Understand people talking about their preferred jobs.","Express preferences with a range of structures.","Write a discussion board post."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand people talking about their preferred jobs.","Express preferences with a range of structures.","Write a discussion board post."]}],"3R":[{type:"callout",title:"Review 3",titleAr:"Review 3",tone:"brand",text:"Review the grammar and vocabulary from Unit 3. Check your progress with a short unit quiz.",textAr:"Review the grammar and vocabulary from Unit 3. Check your progress with a short unit quiz."},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Review the grammar and vocabulary from Unit 3.","Check your progress with a short unit quiz."]}]},Hx={"4A":[{type:"callout",title:"Hoax!",titleAr:"Hoax!",tone:"brand",text:"Read about a famous hoax. Talk about past plans and intentions. Use vocabulary for truth and lies. Notice and pronounce silent consonants.",textAr:"Read about a famous hoax. Talk about past plans and intentions. Use vocabulary for truth and lies. Notice and pronounce silent consonants."},{type:"vocab",title:"truth and lies",titleAr:"truth and lies",items:[{word:"truth and lies",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"past plans and intentions",titleAr:"past plans and intentions",bankPage:44,explanation:"Grammar focus: past plans and intentions.",examples:["Read about a famous hoax.","Talk about past plans and intentions.","Use vocabulary for truth and lies."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Read about a famous hoax.","Talk about past plans and intentions.","Use vocabulary for truth and lies.","Notice and pronounce silent consonants."]}],"4B":[{type:"callout",title:"Documentary making",titleAr:"Documentary making",tone:"brand",text:"Understand people talking about favourite documentaries. Ask indirect and negative questions. Describe films and the film-making process. Use intonation in indirect and negative questions.",textAr:"Understand people talking about favourite documentaries. Ask indirect and negative questions. Describe films and the film-making process. Use intonation in indirect and negative questions."},{type:"vocab",title:"adjectives to describe films; films and film-making",titleAr:"adjectives to describe films; films and film-making",items:[{word:"adjectives to describe films; films and film-making",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"indirect and negative questions",titleAr:"indirect and negative questions",bankPage:47,explanation:"Grammar focus: indirect and negative questions.",examples:["Understand people talking about favourite documentaries.","Ask indirect and negative questions.","Describe films and the film-making process."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand people talking about favourite documentaries.","Ask indirect and negative questions.","Describe films and the film-making process.","Use intonation in indirect and negative questions."]}],"4C":[{type:"callout",title:"News",titleAr:"News",tone:"brand",text:"Talk about the news and how stories spread. Understand news headlines and news vocabulary. Stress adverbs for summarising correctly.",textAr:"Talk about the news and how stories spread. Understand news headlines and news vocabulary. Stress adverbs for summarising correctly."},{type:"vocab",title:"news headlines; the news",titleAr:"news headlines; the news",items:[{word:"news headlines; the news",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"How to … talk about the news",titleAr:"How to … talk about the news",bankPage:50,explanation:"Grammar focus: How to … talk about the news.",examples:["Talk about the news and how stories spread.","Understand news headlines and news vocabulary.","Stress adverbs for summarising correctly."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Talk about the news and how stories spread.","Understand news headlines and news vocabulary.","Stress adverbs for summarising correctly."]}],"4D":[{type:"callout",title:"Fake friends",titleAr:"Fake friends",tone:"brand",text:"Understand a TV programme about keeping secrets. Have a conversation with an old friend. Write a personal email or letter.",textAr:"Understand a TV programme about keeping secrets. Have a conversation with an old friend. Write a personal email or letter."},{type:"vocab",title:"keeping secrets",titleAr:"keeping secrets",items:[{word:"keeping secrets",meaning:"Key vocabulary for this lesson"}]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand a TV programme about keeping secrets.","Have a conversation with an old friend.","Write a personal email or letter."]}],"4R":[{type:"callout",title:"Review 4",titleAr:"Review 4",tone:"brand",text:"Review the grammar and vocabulary from Unit 4. Check your progress with a short unit quiz.",textAr:"Review the grammar and vocabulary from Unit 4. Check your progress with a short unit quiz."},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Review the grammar and vocabulary from Unit 4.","Check your progress with a short unit quiz."]}]},Ux={"5A":[{type:"callout",title:"The customer is always right?",titleAr:"The customer is always right?",tone:"brand",text:"Understand people complaining about products and services. Give reasons and purposes with clauses of purpose. Use personality adjectives to describe behaviour. Roleplay a complaint and write a complaint email.",textAr:"Understand people complaining about products and services. Give reasons and purposes with clauses of purpose. Use personality adjectives to describe behaviour. Roleplay a complaint and write a complaint email."},{type:"vocab",title:"personality adjectives (2)",titleAr:"personality adjectives (2)",items:[{word:"personality adjectives (2)",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"clauses of purpose: to, so as to, in order to/that, so that",titleAr:"clauses of purpose: to, so as to, in order to/that, so that",bankPage:56,explanation:"Grammar focus: clauses of purpose: to, so as to, in order to/that, so that.",examples:["Understand people complaining about products and services.","Give reasons and purposes with clauses of purpose.","Use personality adjectives to describe behaviour."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand people complaining about products and services.","Give reasons and purposes with clauses of purpose.","Use personality adjectives to describe behaviour.","Roleplay a complaint and write a complaint email."]}],"5B":[{type:"callout",title:"Too good to be true",titleAr:"Too good to be true",tone:"brand",text:"Read marketing tips and spot persuasive language. Compare products with comparative and superlative structures. Use advertising and money vocabulary. Link words naturally with linking r.",textAr:"Read marketing tips and spot persuasive language. Compare products with comparative and superlative structures. Use advertising and money vocabulary. Link words naturally with linking r."},{type:"vocab",title:"advertising; money",titleAr:"advertising; money",items:[{word:"advertising; money",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"comparative and superlative structures",titleAr:"comparative and superlative structures",bankPage:59,explanation:"Grammar focus: comparative and superlative structures.",examples:["Read marketing tips and spot persuasive language.","Compare products with comparative and superlative structures.","Use advertising and money vocabulary."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Read marketing tips and spot persuasive language.","Compare products with comparative and superlative structures.","Use advertising and money vocabulary.","Link words naturally with linking r."]}],"5C":[{type:"callout",title:"Which should I buy?",titleAr:"Which should I buy?",tone:"brand",text:"Summarise information from different sources. Describe products clearly. Use intonation in summarising phrases.",textAr:"Summarise information from different sources. Describe products clearly. Use intonation in summarising phrases."},{type:"vocab",title:"describing products",titleAr:"describing products",items:[{word:"describing products",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"How to … summarise information from different sources",titleAr:"How to … summarise information from different sources",bankPage:62,explanation:"Grammar focus: How to … summarise information from different sources.",examples:["Summarise information from different sources.","Describe products clearly.","Use intonation in summarising phrases."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Summarise information from different sources.","Describe products clearly.","Use intonation in summarising phrases."]}],"5D":[{type:"callout",title:"I do it myself",titleAr:"I do it myself",tone:"brand",text:"Understand people talking about DIY. Use the causative have/get and reflexive pronouns. Write a meeting summary.",textAr:"Understand people talking about DIY. Use the causative have/get and reflexive pronouns. Write a meeting summary."},{type:"grammar",title:"causative have and get; reflexive pronouns",titleAr:"causative have and get; reflexive pronouns",bankPage:64,explanation:"Grammar focus: causative have and get; reflexive pronouns.",examples:["Understand people talking about DIY.","Use the causative have/get and reflexive pronouns.","Write a meeting summary."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand people talking about DIY.","Use the causative have/get and reflexive pronouns.","Write a meeting summary."]}],"5R":[{type:"callout",title:"Review 5",titleAr:"Review 5",tone:"brand",text:"Review the grammar and vocabulary from Unit 5. Check your progress with a short unit quiz.",textAr:"Review the grammar and vocabulary from Unit 5. Check your progress with a short unit quiz."},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Review the grammar and vocabulary from Unit 5.","Check your progress with a short unit quiz."]}]},qx={"6A":[{type:"callout",title:"In the city",titleAr:"In the city",tone:"brand",text:"Understand people talking about great neighbourhoods. Use so and such for emphasis. Describe areas of a city. Write instructions for getting to a place.",textAr:"Understand people talking about great neighbourhoods. Use so and such for emphasis. Describe areas of a city. Write instructions for getting to a place."},{type:"vocab",title:"areas of a city",titleAr:"areas of a city",items:[{word:"areas of a city",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"so and such",titleAr:"so and such",bankPage:68,explanation:"Grammar focus: so and such.",examples:["Understand people talking about great neighbourhoods.","Use so and such for emphasis.","Describe areas of a city."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand people talking about great neighbourhoods.","Use so and such for emphasis.","Describe areas of a city.","Write instructions for getting to a place."]}],"6B":[{type:"callout",title:"Great journeys",titleAr:"Great journeys",tone:"brand",text:"Read about epic journeys. Talk about challenges with be/get used to. Use travel idioms. Pronounce be/get used to naturally.",textAr:"Read about epic journeys. Talk about challenges with be/get used to. Use travel idioms. Pronounce be/get used to naturally."},{type:"vocab",title:"challenges; idioms",titleAr:"challenges; idioms",items:[{word:"challenges; idioms",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"be/get used to",titleAr:"be/get used to",bankPage:71,explanation:"Grammar focus: be/get used to.",examples:["Read about epic journeys.","Talk about challenges with be/get used to.","Use travel idioms."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Read about epic journeys.","Talk about challenges with be/get used to.","Use travel idioms.","Pronounce be/get used to naturally."]}],"6C":[{type:"callout",title:"City transport",titleAr:"City transport",tone:"brand",text:"Ask for and confirm information. Use city transport vocabulary. Understand fast speech with just.",textAr:"Ask for and confirm information. Use city transport vocabulary. Understand fast speech with just."},{type:"vocab",title:"city transport",titleAr:"city transport",items:[{word:"city transport",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"How to … ask for and confirm information",titleAr:"How to … ask for and confirm information",bankPage:74,explanation:"Grammar focus: How to … ask for and confirm information.",examples:["Ask for and confirm information.","Use city transport vocabulary.","Understand fast speech with just."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Ask for and confirm information.","Use city transport vocabulary.","Understand fast speech with just."]}],"6D":[{type:"callout",title:"A city of tomorrow",titleAr:"A city of tomorrow",tone:"brand",text:"Understand a TV programme about how China has changed. Talk about what a place is famous for. Write a business idea.",textAr:"Understand a TV programme about how China has changed. Talk about what a place is famous for. Write a business idea."},{type:"vocab",title:"China",titleAr:"China",items:[{word:"China",meaning:"Key vocabulary for this lesson"}]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand a TV programme about how China has changed.","Talk about what a place is famous for.","Write a business idea."]}],"6R":[{type:"callout",title:"Review 6",titleAr:"Review 6",tone:"brand",text:"Review the grammar and vocabulary from Unit 6. Check your progress with a short unit quiz.",textAr:"Review the grammar and vocabulary from Unit 6. Check your progress with a short unit quiz."},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Review the grammar and vocabulary from Unit 6.","Check your progress with a short unit quiz."]}]},zx={"7A":[{type:"callout",title:"Mix-up",titleAr:"Mix-up",tone:"brand",text:"Understand a podcast about misunderstandings. Report what other people said. Use reporting verbs and ways of speaking. Stress reporting verbs correctly.",textAr:"Understand a podcast about misunderstandings. Report what other people said. Use reporting verbs and ways of speaking. Stress reporting verbs correctly."},{type:"vocab",title:"reporting verbs; ways of speaking",titleAr:"reporting verbs; ways of speaking",items:[{word:"reporting verbs; ways of speaking",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"reported speech",titleAr:"reported speech",bankPage:80,explanation:"Grammar focus: reported speech.",examples:["Understand a podcast about misunderstandings.","Report what other people said.","Use reporting verbs and ways of speaking."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand a podcast about misunderstandings.","Report what other people said.","Use reporting verbs and ways of speaking.","Stress reporting verbs correctly."]}],"7B":[{type:"callout",title:"Oversharing",titleAr:"Oversharing",tone:"brand",text:"Read about oversharing online. Use passives to focus on actions and information. Use computer and internet vocabulary. Notice stress and weak forms in passives.",textAr:"Read about oversharing online. Use passives to focus on actions and information. Use computer and internet vocabulary. Notice stress and weak forms in passives."},{type:"vocab",title:"computer use; internet words",titleAr:"computer use; internet words",items:[{word:"computer use; internet words",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"passives",titleAr:"passives",bankPage:83,explanation:"Grammar focus: passives.",examples:["Read about oversharing online.","Use passives to focus on actions and information.","Use computer and internet vocabulary."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Read about oversharing online.","Use passives to focus on actions and information.","Use computer and internet vocabulary.","Notice stress and weak forms in passives."]}],"7C":[{type:"callout",title:"Conversation savers",titleAr:"Conversation savers",tone:"brand",text:"Keep a conversation going. Use adverbs to make questions and answers more natural. Use intonation in short questions.",textAr:"Keep a conversation going. Use adverbs to make questions and answers more natural. Use intonation in short questions."},{type:"vocab",title:"adverbs",titleAr:"adverbs",items:[{word:"adverbs",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"How to … keep a conversation going",titleAr:"How to … keep a conversation going",bankPage:86,explanation:"Grammar focus: How to … keep a conversation going.",examples:["Keep a conversation going.","Use adverbs to make questions and answers more natural.","Use intonation in short questions."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Keep a conversation going.","Use adverbs to make questions and answers more natural.","Use intonation in short questions."]}],"7D":[{type:"callout",title:"A good communicator",titleAr:"A good communicator",tone:"brand",text:"Understand people talking about good and bad communication. Avoid repetition with so, to, not and be. Write an advice email.",textAr:"Understand people talking about good and bad communication. Avoid repetition with so, to, not and be. Write an advice email."},{type:"grammar",title:"avoiding repetition: so, to, not, be",titleAr:"avoiding repetition: so, to, not, be",bankPage:88,explanation:"Grammar focus: avoiding repetition: so, to, not, be.",examples:["Understand people talking about good and bad communication.","Avoid repetition with so, to, not and be.","Write an advice email."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand people talking about good and bad communication.","Avoid repetition with so, to, not and be.","Write an advice email."]}],"7R":[{type:"callout",title:"Review 7",titleAr:"Review 7",tone:"brand",text:"Review the grammar and vocabulary from Unit 7. Check your progress with a short unit quiz.",textAr:"Review the grammar and vocabulary from Unit 7. Check your progress with a short unit quiz."},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Review the grammar and vocabulary from Unit 7.","Check your progress with a short unit quiz."]}]},Yx={"8A":[{type:"callout",title:"Wise words",titleAr:"Wise words",tone:"brand",text:"Read advice from people of different ages. Talk about unreal past situations with the third conditional and should have. Use phrases of advice. Use contractions in complex sentences.",textAr:"Read advice from people of different ages. Talk about unreal past situations with the third conditional and should have. Use phrases of advice. Use contractions in complex sentences."},{type:"vocab",title:"phrases of advice",titleAr:"phrases of advice",items:[{word:"phrases of advice",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"third conditional and should have",titleAr:"third conditional and should have",bankPage:92,explanation:"Grammar focus: third conditional and should have.",examples:["Read advice from people of different ages.","Talk about unreal past situations with the third conditional and should have.","Use phrases of advice."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Read advice from people of different ages.","Talk about unreal past situations with the third conditional and should have.","Use phrases of advice.","Use contractions in complex sentences."]}],"8B":[{type:"callout",title:"Life lessons",titleAr:"Life lessons",tone:"brand",text:"Understand the origins of one man’s curiosity. Use would to talk about past habits. Use phrasal verbs for learning. Pronounce contracted would naturally.",textAr:"Understand the origins of one man’s curiosity. Use would to talk about past habits. Use phrasal verbs for learning. Pronounce contracted would naturally."},{type:"vocab",title:"learning; phrasal verbs",titleAr:"learning; phrasal verbs",items:[{word:"learning; phrasal verbs",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"would",titleAr:"would",bankPage:95,explanation:"Grammar focus: would.",examples:["Understand the origins of one man’s curiosity.","Use would to talk about past habits.","Use phrasal verbs for learning."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand the origins of one man’s curiosity.","Use would to talk about past habits.","Use phrasal verbs for learning.","Pronounce contracted would naturally."]}],"8C":[{type:"callout",title:"One thing I know …",titleAr:"One thing I know …",tone:"brand",text:"Give a presentation. Use signposting phrases to structure a talk. Stress key words in presentation phrases.",textAr:"Give a presentation. Use signposting phrases to structure a talk. Stress key words in presentation phrases."},{type:"vocab",title:"presenting",titleAr:"presenting",items:[{word:"presenting",meaning:"Key vocabulary for this lesson"}]},{type:"grammar",title:"How to … give a presentation",titleAr:"How to … give a presentation",bankPage:98,explanation:"Grammar focus: How to … give a presentation.",examples:["Give a presentation.","Use signposting phrases to structure a talk.","Stress key words in presentation phrases."]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Give a presentation.","Use signposting phrases to structure a talk.","Stress key words in presentation phrases."]}],"8D":[{type:"callout",title:"Dragons' Den",titleAr:"Dragons' Den",tone:"brand",text:"Understand entrepreneurs pitching ideas. Talk about pitching a business idea. Write a work-related email.",textAr:"Understand entrepreneurs pitching ideas. Talk about pitching a business idea. Write a work-related email."},{type:"vocab",title:"entrepreneurs",titleAr:"entrepreneurs",items:[{word:"entrepreneurs",meaning:"Key vocabulary for this lesson"}]},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Understand entrepreneurs pitching ideas.","Talk about pitching a business idea.","Write a work-related email."]}],"8R":[{type:"callout",title:"Review 8",titleAr:"Review 8",tone:"brand",text:"Review the grammar and vocabulary from Unit 8. Check your progress with a short unit quiz.",textAr:"Review the grammar and vocabulary from Unit 8. Check your progress with a short unit quiz."},{type:"text",title:"In this lesson",titleAr:"في هذا الدرس",paragraphs:["Review the grammar and vocabulary from Unit 8.","Check your progress with a short unit quiz."]}]};function Gx(r){return r.startsWith("VB")?`VB ${r.slice(2).replace("_",".")}`:r.startsWith("MB")?`MB ${r.slice(2).replace("_",".")}`:r.startsWith("R")?`Review ${r.slice(1).replace("_",".")}`:r.replace("_",".")}const Px=Xg.audio,Vx=Xg.video;function Jx(r){const l=r.match(/^(VB|MB|R)?(\d+)_(\d+)$/);if(!l)return r;const[,u,h,c]=l;return`${u?`${u} `:""}${h}.${c}`}const Zg={};for(const r of xx)(Zg[r.code]??=[]).push({label:Gx(r.track),file:r.file,note:r.track,transcript:Px[Jx(r.track)]});const pd={},Kx={streetint:"BBC Street Interviews",vlogs:"Unit vlog",programmes:"BBC Programme"};for(const r of Ax)(pd[r.unit]??=[]).push({title:Kx[r.kind],file:r.file,kind:r.kind,transcript:Vx[`${r.unit}:${r.kind}`]});const Fx=[{number:1,title:"me & mine",phrase:"The story of me",question:"What's the best present you've ever received?",intro:"Talk about the possessions that tell your story, the materials they are made of, and the choices behind the things we keep.",pages:[6,18],objectives:["1A Listening — understand people talking about their possessions; describe possessions and materials; tell a story with narrative tenses; weak forms of auxiliary verbs.","1B Reading — read an article about minimalism vs. maximalism; verb patterns; stress in prepositional phrases.","1C How to … — leave phone messages; phrasal verbs about housework; intonation in polite requests.","1D BBC Street Interviews — understand people talking about gadgets and screen time; except for, apart from, (not) even; write an online forum comment."],lessons:[{code:"1A",title:"The story of me",pages:[8,10],labels:{grammar:"narrative tenses",vocabulary:"describing possessions; materials",pronunciation:"auxiliary verbs: weak forms",skills:"listening"},objectives:["Understand people talking about their possessions.","Describe possessions and the materials they are made of.","Tell the story of three objects with narrative tenses.","Hear and use weak forms of auxiliary verbs.","Write an advert to sell an item online."]},{code:"1B",title:"Less is more?",pages:[11,13],labels:{grammar:"verb patterns",vocabulary:"personal preferences",pronunciation:"stress in prepositional phrases",skills:"reading"},objectives:["Read an article about minimalism vs. maximalism.","Use verb patterns to talk about what you like and prefer.","Stress prepositions in phrases correctly.","Answer a questionnaire about personal preferences."]},{code:"1C",title:"Don't forget to …",pages:[14,15],labels:{grammar:"How to … leave phone messages",vocabulary:"phrasal verbs: housework",pronunciation:"intonation in polite requests",skills:"how to"},objectives:["Leave a clear phone message.","Use phrasal verbs to talk about housework.","Sound polite with the right intonation in requests.","Understand recorded messages and respond to them."]},{code:"1D",title:"Your gadgets",pages:[16,17],labels:{grammar:"except for, apart from, (not) even",vocabulary:"gadgets and screen time",skills:"BBC street interviews"},objectives:["Understand people talking about gadgets and screen time.","Talk about exceptions with except for, apart from and (not) even.","Answer a questionnaire about gadgets.","Write an online forum comment."]},{code:"1R",title:"Review 1",pages:[18,18],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 1.","Check your progress with a short unit quiz."],isReview:!0}]},{number:2,title:"behaviour",phrase:"Habits and people",question:"What good habits do you have?",intro:"Explore habits and behaviour, from the science of changing routines to the small things other people do that drive us mad.",pages:[19,30],objectives:["2A Reading — read an article about how to change habits; making changes; present perfect continuous; weak form of been.","2B Listening — understand people talking about being a people pleaser; relative clauses; collocations for feelings and behaviour; chunking in relative clauses.","2C How to … — talk about things that annoy you; pet hates; stress and intonation to show annoyance.","2D BBC Programme — understand a wildlife programme about an exciting escape; discuss difficult situations; write a story."],lessons:[{code:"2A",title:"Change of habit",pages:[20,22],labels:{grammar:"present perfect continuous",vocabulary:"making changes",pronunciation:"weak form of been",skills:"reading"},objectives:["Read an article about how to change habits.","Talk about actions that started in the past and continue now.","Use the weak form of been naturally.","Discuss ways of changing habits."]},{code:"2B",title:"People pleaser",pages:[23,25],labels:{grammar:"relative clauses",vocabulary:"collocations: feelings and behaviour",pronunciation:"chunking in relative clauses",skills:"listening"},objectives:["Understand people talking about being a people pleaser.","Define and add information with relative clauses.","Use collocations for feelings and behaviour.","Chunk relative clauses into meaningful groups."]},{code:"2C",title:"That's annoying!",pages:[26,27],labels:{grammar:"How to … talk about things that annoy you",vocabulary:"pet hates",pronunciation:"stress and intonation to show annoyance",skills:"how to"},objectives:["Talk about things that annoy you.","Use a range of phrases for pet hates.","Show annoyance with stress and intonation."]},{code:"2D",title:"Planet Earth II: Jungles",pages:[28,29],labels:{vocabulary:"wildlife",skills:"BBC programme"},objectives:["Understand a wildlife programme about an exciting escape.","Discuss difficult situations and how people react.","Write a story about a dramatic event."]},{code:"2R",title:"Review 2",pages:[30,30],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 2.","Check your progress with a short unit quiz."],isReview:!0}]},{number:3,title:"working life",phrase:"Work and study",question:"Where do you prefer to work or study?",intro:"Look at working life, from working from home to the gig economy, and find the language to talk about your own approach to work.",pages:[31,42],objectives:["3A Reading — read about famous authors working from home; conditional structures: unless, even if, in case (of); work phrases; stress in phrases.","3B Listening — understand people talking about gig work; necessity, obligation and permission; work vocabulary; elision of /t/.","3C How to … — take part in an interview; personality adjectives (1); negative prefixes; word stress in personality adjectives.","3D BBC Street Interviews — understand people talking about their preferred jobs; expressing preferences; write a discussion board post."],lessons:[{code:"3A",title:"Working from home",pages:[32,34],labels:{grammar:"conditional structures: unless, even if, in case (of)",vocabulary:"work phrases",pronunciation:"stress in phrases",skills:"reading"},objectives:["Read about famous authors working from home.","Use unless, even if and in case (of) to talk about conditions.","Use common work phrases.","Stress phrases naturally when speaking."]},{code:"3B",title:"Gig work",pages:[35,37],labels:{grammar:"necessity, obligation and permission",vocabulary:"work",pronunciation:"elision of /t/",skills:"listening"},objectives:["Understand people talking about gig work.","Talk about necessity, obligation and permission.","Notice and produce the elision of /t/."]},{code:"3C",title:"Good question",pages:[38,39],labels:{grammar:"How to … take part in an interview",vocabulary:"personality adjectives (1); negative prefixes",pronunciation:"word stress in personality adjectives",skills:"how to"},objectives:["Take part in a job interview.","Describe personality and form negative adjectives.","Use the correct word stress in personality adjectives."]},{code:"3D",title:"This or that?",pages:[40,41],labels:{grammar:"expressing preferences",skills:"BBC street interviews"},objectives:["Understand people talking about their preferred jobs.","Express preferences with a range of structures.","Write a discussion board post."]},{code:"3R",title:"Review 3",pages:[42,42],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 3.","Check your progress with a short unit quiz."],isReview:!0}]},{number:4,title:"fact or fiction?",phrase:"Stories and truth",question:"Do you prefer true stories or fiction?",intro:"Investigate hoaxes, documentaries and the news — and decide what you believe, how it is told and why it spreads.",pages:[43,54],objectives:["4A Reading — read about a hoax; truth and lies; past plans and intentions; silent consonants.","4B Listening — understand people talking about favourite documentaries; adjectives to describe films; indirect and negative questions; intonation.","4C How to … — talk about the news; news headlines; word stress in adverbs for summarising.","4D BBC Programme — understand a TV programme about keeping secrets; have a conversation with an old friend; write a personal email or letter."],lessons:[{code:"4A",title:"Hoax!",pages:[44,46],labels:{grammar:"past plans and intentions",vocabulary:"truth and lies",pronunciation:"silent consonants",skills:"reading"},objectives:["Read about a famous hoax.","Talk about past plans and intentions.","Use vocabulary for truth and lies.","Notice and pronounce silent consonants."]},{code:"4B",title:"Documentary making",pages:[47,49],labels:{grammar:"indirect and negative questions",vocabulary:"adjectives to describe films; films and film-making",pronunciation:"intonation in indirect and negative questions",skills:"listening"},objectives:["Understand people talking about favourite documentaries.","Ask indirect and negative questions.","Describe films and the film-making process.","Use intonation in indirect and negative questions."]},{code:"4C",title:"News",pages:[50,51],labels:{grammar:"How to … talk about the news",vocabulary:"news headlines; the news",pronunciation:"word stress in adverbs for summarising",skills:"how to"},objectives:["Talk about the news and how stories spread.","Understand news headlines and news vocabulary.","Stress adverbs for summarising correctly."]},{code:"4D",title:"Fake friends",pages:[52,53],labels:{vocabulary:"keeping secrets",skills:"BBC programme"},objectives:["Understand a TV programme about keeping secrets.","Have a conversation with an old friend.","Write a personal email or letter."]},{code:"4R",title:"Review 4",pages:[54,54],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 4.","Check your progress with a short unit quiz."],isReview:!0}]},{number:5,title:"consumer",phrase:"Shopping and money",question:"When was the last time you had a problem with a product or service?",intro:"Talk about shopping, complaints, advertising and money — and learn how to get things done when something goes wrong.",pages:[55,66],objectives:["5A Listening — understand people complaining; personality adjectives (2); clauses of purpose; roleplay a complaint; write a complaint email.","5B Reading — read marketing tips; advertising and money; comparative and superlative structures; linking r in phrases.","5C How to … — summarise information from different sources; describing products; intonation in summarising phrases.","5D BBC Street Interviews — understand people talking about DIY; causative have/get; reflexive pronouns; write a meeting summary."],lessons:[{code:"5A",title:"The customer is always right?",pages:[56,58],labels:{grammar:"clauses of purpose: to, so as to, in order to/that, so that",vocabulary:"personality adjectives (2)",pronunciation:"word stress in adjectives",skills:"listening"},objectives:["Understand people complaining about products and services.","Give reasons and purposes with clauses of purpose.","Use personality adjectives to describe behaviour.","Roleplay a complaint and write a complaint email."]},{code:"5B",title:"Too good to be true",pages:[59,61],labels:{grammar:"comparative and superlative structures",vocabulary:"advertising; money",pronunciation:"linking r in phrases",skills:"reading"},objectives:["Read marketing tips and spot persuasive language.","Compare products with comparative and superlative structures.","Use advertising and money vocabulary.","Link words naturally with linking r."]},{code:"5C",title:"Which should I buy?",pages:[62,63],labels:{grammar:"How to … summarise information from different sources",vocabulary:"describing products",pronunciation:"intonation in summarising phrases",skills:"how to"},objectives:["Summarise information from different sources.","Describe products clearly.","Use intonation in summarising phrases."]},{code:"5D",title:"I do it myself",pages:[64,65],labels:{grammar:"causative have and get; reflexive pronouns",skills:"BBC street interviews"},objectives:["Understand people talking about DIY.","Use the causative have/get and reflexive pronouns.","Write a meeting summary."]},{code:"5R",title:"Review 5",pages:[66,66],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 5.","Check your progress with a short unit quiz."],isReview:!0}]},{number:6,title:"places",phrase:"Cities and journeys",question:"What's your favourite city?",intro:"Explore cities, epic journeys and city transport, and imagine what the city of tomorrow could look like.",pages:[67,78],objectives:["6A Listening — understand people talking about great neighbourhoods; areas of a city; so and such; intonation for emphasis.","6B Reading — read about epic journeys; challenges; idioms; be/get used to.","6C How to … — ask for and confirm information; city transport; fast speech: just.","6D BBC Programme — understand a TV programme about how China has changed; talk about what a place is famous for; write a business idea."],lessons:[{code:"6A",title:"In the city",pages:[68,70],labels:{grammar:"so and such",vocabulary:"areas of a city",pronunciation:"intonation for emphasis with so and such",skills:"listening"},objectives:["Understand people talking about great neighbourhoods.","Use so and such for emphasis.","Describe areas of a city.","Write instructions for getting to a place."]},{code:"6B",title:"Great journeys",pages:[71,73],labels:{grammar:"be/get used to",vocabulary:"challenges; idioms",pronunciation:"be/get used to",skills:"reading"},objectives:["Read about epic journeys.","Talk about challenges with be/get used to.","Use travel idioms.","Pronounce be/get used to naturally."]},{code:"6C",title:"City transport",pages:[74,75],labels:{grammar:"How to … ask for and confirm information",vocabulary:"city transport",pronunciation:"fast speech: just",skills:"how to"},objectives:["Ask for and confirm information.","Use city transport vocabulary.","Understand fast speech with just."]},{code:"6D",title:"A city of tomorrow",pages:[76,77],labels:{vocabulary:"China",skills:"BBC programme"},objectives:["Understand a TV programme about how China has changed.","Talk about what a place is famous for.","Write a business idea."]},{code:"6R",title:"Review 6",pages:[78,78],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 6.","Check your progress with a short unit quiz."],isReview:!0}]},{number:7,title:"connect",phrase:"Communication",question:"What's your favourite word?",intro:"Connect with people: report conversations, talk about life online, and learn how to keep talking when a conversation stalls.",pages:[79,90],objectives:["7A Listening — understand a podcast about misunderstandings; reporting verbs; ways of speaking; reported speech; stress in reporting verbs.","7B Reading — read about oversharing online; computer use; internet words; passives; stress and weak forms in passives.","7C How to … — keep a conversation going; adverbs; intonation in short questions.","7D BBC Street Interviews — understand people talking about good and bad communication; avoiding repetition: so, to, not, be; write an advice email."],lessons:[{code:"7A",title:"Mix-up",pages:[80,82],labels:{grammar:"reported speech",vocabulary:"reporting verbs; ways of speaking",pronunciation:"stress in reporting verbs",skills:"listening"},objectives:["Understand a podcast about misunderstandings.","Report what other people said.","Use reporting verbs and ways of speaking.","Stress reporting verbs correctly."]},{code:"7B",title:"Oversharing",pages:[83,85],labels:{grammar:"passives",vocabulary:"computer use; internet words",pronunciation:"stress and weak forms in passives",skills:"reading"},objectives:["Read about oversharing online.","Use passives to focus on actions and information.","Use computer and internet vocabulary.","Notice stress and weak forms in passives."]},{code:"7C",title:"Conversation savers",pages:[86,87],labels:{grammar:"How to … keep a conversation going",vocabulary:"adverbs",pronunciation:"intonation in short questions",skills:"how to"},objectives:["Keep a conversation going.","Use adverbs to make questions and answers more natural.","Use intonation in short questions."]},{code:"7D",title:"A good communicator",pages:[88,89],labels:{grammar:"avoiding repetition: so, to, not, be",skills:"BBC street interviews"},objectives:["Understand people talking about good and bad communication.","Avoid repetition with so, to, not and be.","Write an advice email."]},{code:"7R",title:"Review 7",pages:[90,90],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 7.","Check your progress with a short unit quiz."],isReview:!0}]},{number:8,title:"wisdom",phrase:"Advice and ideas",question:"What's the best piece of advice you've ever been given?",intro:"Share wisdom, give advice and present your ideas with confidence — from life lessons to a pitch in the Dragons’ Den.",pages:[91,102],objectives:["8A Reading — read advice from people of different ages; phrases of advice; third conditional and should have; contractions in complex sentences.","8B Listening — understand the origins of one man’s curiosity; learning; phrasal verbs; would; contracted would.","8C How to … — give a presentation; presenting; stressing words in key phrases.","8D BBC Programme — understand entrepreneurs pitching ideas; talk about pitching a business idea; write a work-related email."],lessons:[{code:"8A",title:"Wise words",pages:[92,94],labels:{grammar:"third conditional and should have",vocabulary:"phrases of advice",pronunciation:"contractions in complex sentences",skills:"reading"},objectives:["Read advice from people of different ages.","Talk about unreal past situations with the third conditional and should have.","Use phrases of advice.","Use contractions in complex sentences."]},{code:"8B",title:"Life lessons",pages:[95,97],labels:{grammar:"would",vocabulary:"learning; phrasal verbs",pronunciation:"contracted would",skills:"listening"},objectives:["Understand the origins of one man’s curiosity.","Use would to talk about past habits.","Use phrasal verbs for learning.","Pronounce contracted would naturally."]},{code:"8C",title:"One thing I know …",pages:[98,99],labels:{grammar:"How to … give a presentation",vocabulary:"presenting",pronunciation:"stressing words in key phrases",skills:"how to"},objectives:["Give a presentation.","Use signposting phrases to structure a talk.","Stress key words in presentation phrases."]},{code:"8D",title:"Dragons' Den",pages:[100,101],labels:{vocabulary:"entrepreneurs",skills:"BBC programme"},objectives:["Understand entrepreneurs pitching ideas.","Talk about pitching a business idea.","Write a work-related email."]},{code:"8R",title:"Review 8",pages:[102,102],labels:{skills:"review"},objectives:["Review the grammar and vocabulary from Unit 8.","Check your progress with a short unit quiz."],isReview:!0}]}];function ug(r){const l=[];for(let u=r[0];u<=r[1];u++)l.push(u-1);return l}function Xx(r,l){if(!l.code.endsWith("D"))return[];const u=r.number%2===1?"streetint":"programmes";return(pd[r.number]??[]).filter(h=>h.kind===u)}const $a={level:"B1+",edition:"3rd Edition",subtitle:"Student's Book"},lt=Fx.map(r=>{const l=pd[r.number]??[],u=r.lessons.map(h=>{const c=h.code,m=h.isReview?Wx[r.number]:void 0;return{id:h.code.toLowerCase(),code:h.code,title:h.title,pages:h.pages,pdfPages:ug(h.pages),labels:h.labels,objectives:h.objectives,audio:Zg[c]??[],videos:Xx(r,h),grammar:jx[h.code],vocab:Cx[h.code],practice:Ox[h.code],blocks:{1:Lx,2:Dx,3:Mx,4:Hx,5:Ux,6:qx,7:zx,8:Yx}[r.number]?.[h.code],quiz:m?{id:`unit-${r.number}`,title:`Unit ${r.number} progress check`,questions:m}:void 0}});return{id:String(r.number),number:r.number,title:r.title,phrase:r.phrase,question:r.question,intro:r.intro,pages:r.pages,pdfPages:ug(r.pages),overviewPdf:r.pages[0]-1,objectives:r.objectives,videos:l,lessons:u}});function gd(r){return lt.find(l=>String(l.number)===String(r))}function Zx(r,l){return gd(r)?.lessons.find(h=>h.id===l.toLowerCase())}function Xr(){return lt.flatMap(r=>r.lessons.map(l=>({unit:r,lesson:l})))}function Qx(r,l){const u=Xr(),h=u.findIndex(c=>String(c.unit.number)===r&&c.lesson.id===l);if(!(h<0))return u[h+1]}function $x(r,l){const u=Xr(),h=u.findIndex(c=>String(c.unit.number)===r&&c.lesson.id===l);if(!(h<=0))return u[h-1]}const Qg="speakout-b1plus.progress.v1",Ku=new Set;function Ur(){return{completed:{},quizzes:{},visits:{},startedAt:Date.now()}}function e0(){if(typeof window>"u")return Ur();try{const r=localStorage.getItem(Qg);if(!r)return Ur();const l=JSON.parse(r);return{completed:l.completed??{},quizzes:l.quizzes??{},visits:l.visits??{},last:l.last,startedAt:l.startedAt??Date.now()}}catch{return Ur()}}let it=e0();function $o(r){it=r;try{localStorage.setItem(Qg,JSON.stringify(r))}catch{}Ku.forEach(l=>l())}function ss(r,l){return`${r}/${l}`}function t0(r,l){return!!it.completed[ss(r,l)]}function n0(r,l){const u=ss(r,l);$o({...it,visits:{...it.visits,[u]:(it.visits[u]??0)+1},last:{unit:String(r),lesson:l}})}function $g(r,l){const u=ss(r,l);it.completed[u]||$o({...it,completed:{...it.completed,[u]:Date.now()},last:{unit:String(r),lesson:l}})}function a0(r,l){const u=ss(r,l),h={...it.completed};delete h[u],$o({...it,completed:h})}function o0(r,l){t0(r,l)?a0(r,l):$g(r,l)}function ey(r,l,u){const h=it.quizzes[r];if(h&&h.correct>=l){$o({...it,quizzes:{...it.quizzes,[r]:{...h,total:u}}});return}$o({...it,quizzes:{...it.quizzes,[r]:{correct:l,total:u,at:Date.now()}}})}function i0(){$o(Ur())}function to(){const r=T.useSyncExternalStore(l=>(Ku.add(l),()=>Ku.delete(l)),()=>it,()=>it);return{progress:r,get isComplete(){return(l,u)=>!!r.completed[ss(l,u)]},toggle:o0,complete:$g,visit:n0,recordQuiz:ey,reset:i0,completedCount:Object.keys(r.completed).length}}function Ko({value:r,className:l="",label:u,tone:h="brand"}){const c=Math.max(0,Math.min(100,r)),m={brand:"bg-brand-600 dark:bg-brand-400",accent:"bg-accent-600 dark:bg-accent-400",warm:"bg-warm-600 dark:bg-warm-500"};return s.jsx("div",{className:`h-2 overflow-hidden rounded-full bg-[var(--line)] ${l}`,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(c),"aria-label":u,children:s.jsx("div",{className:`h-full rounded-full transition-[width] duration-700 ease-out ${m[h]}`,style:{width:`${c}%`}})})}function s0({open:r,onClose:l}){const u=to(),h=$v("/review")!==null;return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${r?"opacity-100":"pointer-events-none opacity-0"}`,onClick:l,"aria-hidden":"true"}),s.jsxs("aside",{className:`fixed inset-y-0 left-0 z-50 flex w-[min(88vw,380px)] flex-col border-r border-[var(--line)] bg-[var(--bg)] shadow-2xl transition-transform duration-300 ease-out ${r?"translate-x-0":"-translate-x-full"}`,"aria-label":"Book contents","aria-hidden":!r,children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3",children:[s.jsxs(Pn,{to:"/",onClick:l,className:"flex items-center gap-2.5",children:[s.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-sm",children:s.jsx(pt,{size:19})}),s.jsxs("span",{children:[s.jsx("span",{className:"block font-display text-lg leading-none text-[var(--ink)]",children:"Speakout"}),s.jsxs("span",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300",children:["B1+ · ",$a.edition]})]})]}),s.jsx("button",{type:"button",onClick:l,className:"grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition hover:bg-[var(--surface)]","aria-label":"Close contents",children:s.jsx(Sa,{size:19})})]}),s.jsxs("div",{className:"flex-1 overflow-y-auto overscroll-contain px-3 py-4",children:[s.jsx("div",{className:"mb-4 px-1",children:s.jsx(fd,{onNavigate:l})}),s.jsxs("nav",{className:"px-2",children:[s.jsx("p",{className:"mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ink-faint)]",children:"Contents of the book"}),s.jsx("div",{className:"mb-5",children:s.jsxs(Pn,{to:"/review",onClick:l,className:`tactile flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors ${h?"border-brand-500 bg-brand-600 text-white":"border-warm-200 bg-gradient-to-r from-warm-50 to-brand-50 text-brand-800 hover:shadow-sm dark:border-warm-900 dark:from-warm-950/50 dark:to-brand-950/50 dark:text-brand-200"}`,children:[s.jsx("span",{className:"grid size-9 shrink-0 place-items-center rounded-lg bg-brand-600 text-white",children:s.jsx(ft,{size:16})}),s.jsxs("span",{className:"min-w-0 flex-1",children:[s.jsx("span",{className:"block text-sm font-bold leading-tight",children:"Comprehensive review"}),s.jsx("span",{className:"block text-[11px] leading-tight text-[var(--ink-faint)]",dir:"rtl",lang:"ar",children:"المراجعة الشاملة"})]})]})}),s.jsx("div",{className:"space-y-5",children:lt.map(c=>s.jsxs("div",{children:[s.jsxs(Pn,{to:`/unit/${c.number}`,onClick:l,className:({isActive:m})=>`group flex items-baseline gap-2 transition-colors ${m?"text-brand-700 dark:text-brand-300":"hover:text-brand-700 dark:hover:text-brand-300"}`,children:[s.jsx("span",{className:"font-display text-lg font-bold leading-none tracking-tight",children:c.number}),s.jsx("span",{className:"min-w-0 truncate text-[13px] font-semibold",children:c.title}),s.jsx("span",{className:"toc-dots","aria-hidden":!0}),s.jsx("span",{className:"toc-page",children:c.lessons[0]?.pages?.[0]??""})]}),s.jsx("div",{className:"mt-1.5 space-y-0.5 border-l border-[var(--line)] pl-3",children:c.lessons.map(m=>{const p=u.isComplete(c.number,m.id)?"done":u.progress.visits[`${c.number}/${m.id}`]?"started":"todo";return s.jsxs(Pn,{to:`/unit/${c.number}/lesson/${m.id}`,onClick:l,className:({isActive:b})=>`toc-row group truncate rounded px-1.5 py-0.5 text-[13px] transition-colors ${b?"bg-[var(--line)] text-[var(--ink)]":p==="todo"?"text-[var(--ink-soft)] hover:text-[var(--ink)]":"text-[var(--ink)]"}`,children:[s.jsx("span",{className:"w-3 shrink-0 text-center text-[10px] leading-none",children:p==="done"?s.jsx(ln,{size:10,className:"text-brand-600"}):p==="started"?s.jsx("span",{className:"text-accent-600",children:"●"}):s.jsx("span",{className:"text-[var(--ink-faint)]",children:"○"})}),s.jsxs("span",{className:"min-w-0 truncate",children:[m.code!=="Review"?`${m.code} `:"",m.title]}),s.jsx("span",{className:"toc-dots","aria-hidden":!0}),s.jsx("span",{className:"toc-page shrink-0",children:m.pages[0]})]},m.id)})})]},c.id))}),s.jsxs("div",{className:"mt-6",children:[s.jsxs(Pn,{to:"/book",onClick:l,className:({isActive:c})=>`flex items-baseline gap-2 transition-colors ${c?"text-brand-700 dark:text-brand-300":"hover:text-brand-700 dark:hover:text-brand-300"}`,children:[s.jsx("span",{className:"font-display text-lg font-bold leading-none tracking-tight",children:"A"}),s.jsx("span",{className:"truncate text-[13px] font-semibold",children:"Reference banks"}),s.jsx("span",{className:"toc-dots","aria-hidden":!0}),s.jsx("span",{className:"toc-page",children:"back"})]}),s.jsxs("div",{className:"mt-1.5 space-y-0.5 border-l border-[var(--line)] pl-3",children:[s.jsxs(Pn,{to:"/bank/grammar",onClick:l,className:"toc-row group truncate rounded px-1.5 py-0.5 text-[13px] transition-colors text-[var(--ink-soft)] hover:text-[var(--ink)]",children:[s.jsx("span",{className:"w-3 shrink-0 text-[10px] leading-none text-[var(--ink-faint)]",children:"▲"}),s.jsx("span",{className:"min-w-0 truncate",children:"Grammar Bank"}),s.jsx("span",{className:"toc-dots","aria-hidden":!0}),s.jsx("span",{className:"toc-page shrink-0",children:"28"})]}),s.jsxs(Pn,{to:"/bank/vocabulary",onClick:l,className:"toc-row group truncate rounded px-1.5 py-0.5 text-[13px] transition-colors text-[var(--ink-soft)] hover:text-[var(--ink)]",children:[s.jsx("span",{className:"w-3 shrink-0 text-[10px] leading-none text-[var(--ink-faint)]",children:"▲"}),s.jsx("span",{className:"min-w-0 truncate",children:"Vocabulary Bank"}),s.jsx("span",{className:"toc-dots","aria-hidden":!0}),s.jsx("span",{className:"toc-page shrink-0",children:"132"})]})]})]})]})]}),s.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3",children:[s.jsxs("div",{className:"mb-1.5 flex items-center justify-between text-[10px] text-[var(--ink-faint)]",children:[s.jsx("span",{children:"Your progress"}),s.jsxs("span",{children:[Math.round(u.completedCount/40*100),"%"]})]}),s.jsx(Ko,{value:u.completedCount/40*100,label:"Course progress"})]})]})]})}const r0="./";function Fo(r){const l=r.replace(/^\/+/,"");return`${r0}${l}`}function Fu(r){return Fo(`book/p${String(r).padStart(3,"0")}.jpg`)}const zu=[.5,.75,1,1.25,1.5,2];let we=null;if(typeof Audio<"u")try{we=new Audio}catch{we=null}let Yr=1,Ce=null,l0=0;const Xu=new Set,h0=new Set;function sn(){for(const r of Xu)r()}we&&(we.addEventListener("timeupdate",()=>{Ce&&(Ce.position=we.currentTime??0,sn())}),we.addEventListener("loadedmetadata",()=>{Ce&&(Ce.duration=Number.isFinite(we.duration)?we.duration:0,sn())}),we.addEventListener("play",()=>{Ce&&(Ce.playing=!0,sn())}),we.addEventListener("pause",()=>{Ce&&(Ce.playing=!1,sn())}),we.addEventListener("ended",()=>{Ce&&(Ce.playing=!1,Ce.position=0);for(const r of h0)r();sn()}),we.addEventListener("error",()=>{Ce&&(Ce.playing=!1,sn())}));function u0(){return++l0}function ty(){return Ce}function d0(){return Yr}function c0(r){Yr=Math.min(3,Math.max(.25,r)),we&&(we.playbackRate=Yr),sn()}function m0(r){return Xu.add(r),()=>{Xu.delete(r)}}function ny(r,l,u){if(we){if(Ce&&Ce.instance===u&&Ce.file===r){we.paused?we.play().catch(()=>{}):we.pause();return}we.src=r,we.load(),we.playbackRate=Yr,Ce={instance:u,file:r,label:l,playing:!1,position:0,duration:0},we.play().catch(()=>{}),sn()}}function ay(r){if(!we||!Ce)return;const l=Ce.duration||r,u=Math.max(0,Math.min(r,l));we.currentTime=u,Ce.position=u,sn()}function Gr(r){if(!we||!Ce)return;const l=we.currentTime??Ce.position,u=Ce.duration||l+r,h=Math.max(0,Math.min(l+r,u));we.currentTime=h,Ce.position=h,sn()}function f0(){we&&(we.pause(),we.removeAttribute("src"),we.load()),Ce=null,sn()}function Pr(r){if(!Number.isFinite(r)||r<0)return"0:00";const l=Math.floor(r),u=Math.floor(l/60),h=l%60;return`${u}:${h.toString().padStart(2,"0")}`}function oy(){const[,r]=T.useReducer(l=>l+1,0);return T.useEffect(()=>m0(()=>r()),[]),r}function iy({compact:r=!1}){const l=d0();return s.jsxs("button",{type:"button",onClick:()=>{const u=zu.indexOf(l);c0(zu[(u+1)%zu.length])},className:`rounded-full border border-[var(--line)] font-semibold text-[var(--ink-soft)] transition hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-300 ${r?"px-2 py-0.5 text-[10px]":"px-2.5 py-1 text-xs"}`,"aria-label":`Playback speed ${l}x`,title:"Change playback speed",children:[Number.isInteger(l)?l:l.toFixed(2).replace(/0+$/,""),"×"]})}function p0({track:r}){oy();const l=T.useRef(u0()),[u,h]=T.useState(!1),c=Fo(r.file),m=ty(),p=m?.file===c,b=!!(p&&m?.playing),w=p?m?.position??0:0,v=p?m?.duration??0:0,k=v?w/v*100:0;return s.jsxs("div",{className:`group rounded-xl border p-3 transition-colors ${p?"border-brand-300 bg-brand-50/70 dark:border-brand-700 dark:bg-brand-950/40":"border-[var(--line)] bg-[var(--surface)] hover:border-brand-200 dark:hover:border-brand-800"}`,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{type:"button",onClick:()=>ny(c,r.label,l.current),className:`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow-sm transition-transform active:scale-95 ${b?"bg-accent-600 hover:bg-accent-700":"bg-brand-600 hover:bg-brand-700"}`,"aria-label":b?`Pause track ${r.label}`:`Play track ${r.label}`,children:b?s.jsx(Vg,{size:19}):s.jsx(is,{size:19})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-[var(--bg)] px-2 py-0.5 text-[11px] font-bold tracking-wide text-brand-700 ring-1 ring-[var(--line)] dark:text-brand-300",children:[s.jsx(Jg,{size:12}),r.label]}),r.note&&s.jsxs("span",{className:"hidden text-[11px] text-[var(--ink-faint)] sm:inline",children:["Audio ",r.note.replaceAll("_",".")]}),b&&s.jsxs("span",{className:"ml-auto flex h-3 items-end gap-0.5","aria-hidden":"true",children:[s.jsx("i",{className:"eq-bar h-2 w-0.5 animate-pulse rounded-full bg-brand-600"}),s.jsx("i",{className:"eq-bar h-3 w-0.5 animate-pulse rounded-full bg-brand-600 [animation-delay:120ms]"}),s.jsx("i",{className:"eq-bar h-1.5 w-0.5 animate-pulse rounded-full bg-brand-600 [animation-delay:240ms]"})]})]}),s.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[s.jsx("span",{className:"w-9 text-right text-[10px] tabular-nums text-[var(--ink-faint)]",children:Pr(w)}),s.jsx("input",{type:"range",min:0,max:v||0,step:.1,value:Math.min(w,v||0),onChange:y=>ay(Number(y.target.value)),className:"h-1.5 min-w-0 flex-1 cursor-pointer accent-brand-600","aria-label":`Seek track ${r.label}`,disabled:!p,style:{backgroundSize:`${k}% 100%`}}),s.jsx("span",{className:"w-9 text-[10px] tabular-nums text-[var(--ink-faint)]",children:p?Pr(v):"--:--"})]})]}),s.jsxs("div",{className:"hidden shrink-0 flex-col items-end gap-1.5 sm:flex",children:[s.jsx(iy,{compact:!0}),s.jsxs("div",{className:"flex items-center gap-0.5",children:[s.jsx("button",{type:"button",onClick:()=>Gr(-10),className:"grid h-7 w-7 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600","aria-label":"Rewind 10 seconds",children:s.jsx(Kg,{size:15})}),s.jsx("button",{type:"button",onClick:()=>Gr(10),className:"grid h-7 w-7 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600","aria-label":"Forward 10 seconds",children:s.jsx(Fg,{size:15})})]})]})]}),r.transcript&&s.jsxs("div",{className:"mt-2 border-t border-[var(--line)] pt-2",children:[s.jsx("button",{type:"button",onClick:()=>h(y=>!y),className:"rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] font-semibold text-[var(--ink-soft)] transition hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-300","aria-expanded":u,children:u?"Hide script":"Show script"}),u&&s.jsx("div",{className:"mt-2 max-h-72 overflow-auto whitespace-pre-line rounded-lg bg-[var(--bg)] p-3 text-[13px] leading-relaxed text-[var(--ink-soft)]",children:r.transcript})]})]})}function yd({tracks:r,emptyLabel:l="No audio for this lesson."}){return r.length?s.jsx("div",{className:"space-y-2.5",children:r.map(u=>s.jsx(p0,{track:u},`${u.file}-${u.label}`))}):s.jsx("p",{className:"rounded-xl border border-dashed border-[var(--line-strong)] px-4 py-5 text-sm text-[var(--ink-faint)]",children:l})}function g0(){oy();const r=ty();if(!r)return null;const l=r.duration?r.position/r.duration*100:0;return s.jsx("div",{className:"fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--surface)]/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_rgb(0_0_0/0.08)] backdrop-blur",children:s.jsx("div",{className:"mx-auto max-w-4xl px-3 py-2.5 sm:px-6",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{type:"button",onClick:()=>ny(r.file,r.label,r.instance),className:"grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-sm transition hover:bg-brand-700 active:scale-95","aria-label":r.playing?"Pause audio":"Play audio",children:r.playing?s.jsx(Vg,{size:17}):s.jsx(is,{size:17})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"flex items-baseline gap-2",children:[s.jsxs("p",{className:"truncate text-xs font-semibold text-[var(--ink)]",children:["Audio ",r.label]}),s.jsxs("span",{className:"ml-auto text-[10px] tabular-nums text-[var(--ink-faint)]",children:[Pr(r.position)," / ",Pr(r.duration)]})]}),s.jsx("input",{type:"range",min:0,max:r.duration||0,step:.1,value:Math.min(r.position,r.duration||0),onChange:u=>ay(Number(u.target.value)),className:"mt-1 h-1.5 w-full cursor-pointer accent-brand-600","aria-label":"Seek audio",style:{backgroundSize:`${l}% 100%`}})]}),s.jsxs("div",{className:"hidden items-center gap-1 sm:flex",children:[s.jsx("button",{type:"button",onClick:()=>Gr(-10),className:"grid h-8 w-8 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600","aria-label":"Rewind 10 seconds",children:s.jsx(Kg,{size:16})}),s.jsx("button",{type:"button",onClick:()=>Gr(10),className:"grid h-8 w-8 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-[var(--bg)] hover:text-brand-600","aria-label":"Forward 10 seconds",children:s.jsx(Fg,{size:16})}),s.jsx(iy,{compact:!0})]}),s.jsx("button",{type:"button",onClick:f0,className:"grid h-8 w-8 place-items-center rounded-full text-[var(--ink-faint)] transition hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/30","aria-label":"Close audio player",children:s.jsx(Pg,{size:16})})]})})})}const y0="speakout-b1plus.scroll:";function sy(r){return`${y0}${r}`}function w0(r){try{const l=Number(sessionStorage.getItem(sy(r)));return Number.isFinite(l)&&l>0?l:0}catch{return 0}}function dg(r,l){try{sessionStorage.setItem(sy(r),String(l))}catch{}}function b0(){const{pathname:r}=Lt(),l=Qv();return T.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")},[]),T.useEffect(()=>{let u=0,h=0;const c=()=>{h=0,u=performance.now(),dg(r,window.scrollY)},m=()=>{const w=120-(performance.now()-u);w<=0?c():h||(h=window.setTimeout(c,w))},p=()=>{h&&(window.clearTimeout(h),h=0),dg(r,window.scrollY)},b=()=>{document.visibilityState==="hidden"&&p()};return window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("pagehide",p),document.addEventListener("visibilitychange",b),()=>{h&&window.clearTimeout(h),window.removeEventListener("scroll",m),window.removeEventListener("pagehide",p),document.removeEventListener("visibilitychange",b)}},[r]),T.useEffect(()=>{const u=l==="POP"?w0(r):0;if(u<=0){window.scrollTo({top:0,behavior:"instant"});return}let h=0,c=0,m=!1;const p=()=>{m=!0},b=()=>{m||(window.scrollTo({top:u,behavior:"instant"}),c<30&&Math.abs(window.scrollY-u)>2&&(c+=1,h=requestAnimationFrame(b)))};b();const w=[window.setTimeout(b,200),window.setTimeout(b,700)],v=()=>b();return window.addEventListener("load",v,{once:!0}),window.addEventListener("wheel",p,{once:!0,passive:!0}),window.addEventListener("touchstart",p,{once:!0,passive:!0}),window.addEventListener("keydown",p,{once:!0}),()=>{m=!0,h&&cancelAnimationFrame(h),w.forEach(k=>window.clearTimeout(k)),window.removeEventListener("load",v),window.removeEventListener("wheel",p),window.removeEventListener("touchstart",p),window.removeEventListener("keydown",p)}},[r,l]),null}function v0(){const[r,l]=T.useState(0);return T.useEffect(()=>{const u=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;l(h>0?window.scrollY/h*100:0)};return u(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[]),s.jsx("div",{className:"fixed inset-x-0 top-0 z-[35] h-0.5 bg-transparent","aria-hidden":"true",children:s.jsx("div",{className:"h-full bg-brand-500 transition-[width] duration-150",style:{width:`${r}%`}})})}function k0(){const[r,l]=T.useState(!1);return s.jsxs("div",{className:"flex min-h-screen flex-col",children:[s.jsx(b0,{}),s.jsx(v0,{}),s.jsx(kx,{onContents:()=>l(!0)}),s.jsx(s0,{open:r,onClose:()=>l(!1)}),s.jsx("main",{className:"mx-auto w-full max-w-4xl flex-1 px-4 pb-28 pt-6 sm:px-6 sm:pt-8",children:s.jsx(gk,{})}),s.jsx("footer",{className:"mt-auto border-t border-[var(--line)] pb-24",children:s.jsxs("div",{className:"mx-auto grid max-w-4xl gap-6 px-4 py-8 sm:grid-cols-[1fr_auto] sm:px-6",children:[s.jsxs("div",{children:[s.jsxs(G,{to:"/",className:"inline-flex items-center gap-2",children:[s.jsx("span",{className:"grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white",children:s.jsx(pt,{size:16})}),s.jsxs("span",{className:"font-display text-lg text-[var(--ink)]",children:["Speakout ",$a.level]})]}),s.jsxs("p",{className:"mt-2 max-w-md text-xs leading-relaxed text-[var(--ink-faint)]",children:[$a.edition," ",$a.subtitle,". All lesson pages, audio, video, grammar notes and vocabulary are taken from the B1+ Student’s Book. The page image is authoritative wherever a transcription is shown."]})]}),s.jsxs("nav",{className:"flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[var(--ink-soft)]","aria-label":"Footer",children:[s.jsx(G,{className:"hover:text-brand-600",to:"/book",children:"Contents"}),s.jsxs(G,{className:"inline-flex items-center gap-1 hover:text-brand-600",to:"/bank/grammar",children:[s.jsx(ft,{size:13})," Grammar"]}),s.jsxs(G,{className:"inline-flex items-center gap-1 hover:text-brand-600",to:"/bank/vocabulary",children:[s.jsx(pt,{size:13})," Vocabulary"]}),s.jsxs(G,{className:"inline-flex items-center gap-1 hover:text-brand-600",to:"/media",children:[s.jsx(hn,{size:13})," Media"]})]})]})}),s.jsx(g0,{})]})}function cg({children:r,className:l="",delay:u=0,as:h="div"}){const c=T.useRef(null);return T.useEffect(()=>{const m=c.current;if(!m)return;if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches){m.classList.add("is-visible");return}const p=new IntersectionObserver(b=>{for(const w of b)w.isIntersecting&&(m.classList.add("is-visible"),p.disconnect())},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.observe(m),()=>p.disconnect()},[]),s.jsx(h,{ref:c,className:`reveal ${l}`,style:u?{transitionDelay:`${u}ms`}:void 0,children:r})}function x0(){const{progress:r,isComplete:l,completedCount:u}=to(),h=Xr(),c=Math.round(u/h.length*100),m=r.last,p=m?h.find(v=>String(v.unit.number)===m.unit&&v.lesson.id===m.lesson):void 0,b=p?`/unit/${p.unit.number}/lesson/${p.lesson.id}`:"/unit/1/lesson/1a",w=p?`Continue ${p.lesson.code}`:"Start with 1A";return s.jsxs("div",{className:"space-y-10 sm:space-y-14",children:[s.jsxs("section",{className:"relative grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]",children:[s.jsxs("div",{className:"relative z-10",children:[s.jsxs("p",{className:"inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.17em] text-brand-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300",children:[s.jsx(md,{size:13}),$a.edition," · English course"]}),s.jsxs("h1",{className:"mt-4 font-display text-5xl leading-[0.95] text-[var(--ink)] sm:text-6xl",children:["Speakout",s.jsx("span",{className:"ml-2 inline-block rounded-2xl bg-accent-600 px-3 py-1 align-middle text-2xl font-sans font-black tracking-tight text-white shadow-lg shadow-accent-600/25 sm:text-3xl",children:"B1+"})]}),s.jsxs("p",{className:"mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ink-soft)]",children:["The complete ",$a.subtitle,", page by page. Every lesson, audio track and BBC video from the book, with the full Grammar and Vocabulary Banks in one calm place to study."]}),s.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3",children:[s.jsxs(G,{to:b,className:"inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700",children:[s.jsx(is,{size:16}),w]}),s.jsxs(G,{to:"/book",className:"inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-brand-400 hover:text-brand-700",children:["Browse contents",s.jsx(Jn,{size:15})]})]}),s.jsx("dl",{className:"mt-7 grid max-w-lg grid-cols-4 gap-2 border-t border-[var(--line)] pt-4",children:[["8","units"],["40","lessons"],["81","audio"],["16","videos"]].map(([v,k])=>s.jsxs("div",{children:[s.jsx("dt",{className:"font-display text-2xl text-brand-700 dark:text-brand-300",children:v}),s.jsx("dd",{className:"text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-faint)]",children:k})]},k))})]}),s.jsxs("div",{className:"relative mx-auto w-full max-w-[280px] md:max-w-none",children:[s.jsx("div",{className:"absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-brand-200/60 via-accent-100/50 to-warm-100/60 blur-3xl dark:from-brand-800/30 dark:via-accent-900/20 dark:to-warm-900/20"}),s.jsx(G,{to:"/book",className:"book-cover book-cover-sheen block rotate-2 overflow-hidden rounded-lg border border-[var(--line)] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.55)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]","aria-label":"Open the book contents",children:s.jsx("img",{src:Fu(1),alt:"Speakout B1+ Student's Book cover",className:"aspect-[1/1.414] w-full object-cover"})}),s.jsxs("div",{className:"absolute -left-5 bottom-16 hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]/95 px-3 py-2 shadow-xl backdrop-blur sm:block",children:[s.jsxs("p",{className:"flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300",children:[s.jsx(Kn,{size:12})," Listen & watch"]}),s.jsx("p",{className:"mt-0.5 text-xs font-semibold text-[var(--ink)]",children:"All book media included"})]}),s.jsxs("div",{className:"absolute -right-4 top-10 hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]/95 px-3 py-2 shadow-xl backdrop-blur sm:block",children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-warm-600",children:"Your progress"}),s.jsxs("div",{className:"mt-1 flex items-center gap-2",children:[s.jsx(Ko,{value:c,className:"w-16",tone:"warm"}),s.jsxs("span",{className:"text-xs font-bold tabular-nums text-[var(--ink)]",children:[c,"%"]})]})]})]})]}),s.jsxs(cg,{as:"section",className:"rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-sm sm:p-5",children:[s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300",children:s.jsx(ft,{size:20})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-bold text-[var(--ink)]",children:u===0?"Your course starts here":`${u} of ${h.length} lessons complete`}),s.jsx("p",{className:"text-xs text-[var(--ink-faint)]",children:u===0?"Mark a lesson complete at the bottom of its page.":c===100?"You have completed the whole book. Excellent work!":"Keep going — every lesson builds on the last."})]})]}),s.jsxs(G,{to:b,className:"inline-flex items-center gap-1.5 rounded-full bg-[var(--bg)] px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-[var(--line)] transition hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-950/40",children:[w," ",s.jsx(Qa,{size:13})]})]}),s.jsx(Ko,{value:c,className:"mt-4 h-2.5",label:"Course progress"})]}),s.jsxs("section",{children:[s.jsxs("div",{className:"mb-4 flex flex-wrap items-end justify-between gap-2",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300",children:"The course"}),s.jsx("h2",{className:"mt-1 font-display text-2xl text-[var(--ink)] sm:text-3xl",children:"Eight units, one journey"})]}),s.jsx(G,{to:"/book",className:"text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300",children:"See full contents →"})]}),s.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:lt.map((v,k)=>{const y=v.lessons.filter(L=>l(v.number,L.id)).length,N=Math.round(y/v.lessons.length*100);return s.jsx(cg,{delay:k*35,children:s.jsxs(G,{to:`/unit/${v.number}`,className:"group flex h-full gap-3.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg dark:hover:border-brand-800",children:[s.jsx("span",{className:"grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-xl text-white shadow-sm transition-transform group-hover:-rotate-3",children:v.number}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsx("h3",{className:"font-display text-lg leading-tight text-[var(--ink)]",children:v.title}),s.jsx(Jn,{size:16,className:"mt-1 shrink-0 text-[var(--ink-faint)] transition group-hover:translate-x-0.5 group-hover:text-brand-600"})]}),s.jsxs("p",{className:"mt-0.5 line-clamp-1 text-[11px] italic text-[var(--ink-faint)]",children:["“",v.question,"”"]}),s.jsxs("div",{className:"mt-2.5 flex items-center gap-2",children:[s.jsx(Ko,{value:N,className:"h-1.5"}),s.jsxs("span",{className:"shrink-0 text-[10px] tabular-nums text-[var(--ink-faint)]",children:[y,"/",v.lessons.length]})]})]})]})},v.id)})})]}),s.jsx("section",{className:"grid gap-3 sm:grid-cols-3",children:[{to:"/bank/grammar",icon:s.jsx(ft,{size:19}),title:"Grammar Bank",text:`${Ea.length} reference lessons with examples and page images.`,tone:"bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300"},{to:"/bank/vocabulary",icon:s.jsx(pt,{size:19}),title:"Vocabulary Bank",text:`${Sn.length} word groups — materials, films, money, idioms and more.`,tone:"bg-accent-100 text-accent-700 dark:bg-accent-950 dark:text-accent-300"},{to:"/media",icon:s.jsx(hn,{size:19}),title:"Audio & video",text:"81 tracks and 16 BBC videos, organised by unit and lesson.",tone:"bg-warm-100 text-warm-700 dark:bg-warm-950/60 dark:text-warm-300"}].map(v=>s.jsxs(G,{to:v.to,className:"group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:hover:border-brand-800",children:[s.jsx("span",{className:`grid h-9 w-9 place-items-center rounded-lg ${v.tone}`,children:v.icon}),s.jsxs("h3",{className:"mt-2.5 flex items-center gap-1 text-sm font-bold text-[var(--ink)]",children:[v.title,s.jsx(Qa,{size:13,className:"opacity-0 transition group-hover:opacity-100"})]}),s.jsx("p",{className:"mt-1 text-xs leading-relaxed text-[var(--ink-faint)]",children:v.text})]},v.to))}),s.jsx("section",{className:"rounded-2xl border border-[var(--line)] bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white shadow-lg sm:p-7",children:s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[s.jsxs("div",{className:"max-w-lg",children:[s.jsxs("p",{className:"flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-200",children:[s.jsx(ln,{size:13})," Everything in one place"]}),s.jsx("h2",{className:"mt-1.5 font-display text-2xl sm:text-3xl",children:"Read the page. Play the audio. Do the practice."}),s.jsx("p",{className:"mt-1.5 text-sm text-brand-100/90",children:"Every lesson follows the same rhythm so you always know what to do next."})]}),s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(G,{to:"/review",className:"rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-800 transition hover:bg-brand-50",children:"Review & practice"}),s.jsx(G,{to:"/scripts",className:"rounded-full border border-white/40 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10",children:"Audio scripts"})]})]})})]})}function En({eyebrow:r,title:l,description:u,backTo:h,backLabel:c="Back",children:m}){return s.jsxs("header",{className:"mb-6 sm:mb-8",children:[h&&s.jsxs(G,{to:h,className:"mb-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink-soft)] transition hover:text-brand-600",children:[s.jsx(zr,{size:14}),c]}),r&&s.jsx("p",{className:"mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300",children:r}),s.jsx("h1",{className:"font-display text-3xl leading-[1.1] text-[var(--ink)] sm:text-4xl",children:l}),u&&s.jsx("p",{className:"mt-2.5 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]",children:u}),m&&s.jsx("div",{className:"mt-4",children:m})]})}function Jt({icon:r,title:l,hint:u,action:h}){return s.jsxs("div",{className:"mb-3 flex flex-wrap items-end justify-between gap-2",children:[s.jsxs("div",{children:[s.jsxs("h2",{className:"flex items-center gap-2 text-base font-bold text-[var(--ink)]",children:[r,l]}),u&&s.jsx("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:u})]}),h]})}function gt({children:r,tone:l="neutral"}){const u={neutral:"bg-[var(--bg)] text-[var(--ink-soft)] ring-[var(--line)]",brand:"bg-brand-100 text-brand-800 ring-brand-200 dark:bg-brand-950 dark:text-brand-200 dark:ring-brand-800",accent:"bg-accent-100 text-accent-800 ring-accent-200 dark:bg-accent-950 dark:text-accent-200 dark:ring-accent-800",warm:"bg-warm-100 text-warm-900 ring-warm-200 dark:bg-warm-950/60 dark:text-warm-200 dark:ring-warm-800"};return s.jsx("span",{className:`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${u[l]}`,children:r})}function A0(){const{isComplete:r,completedCount:l}=to();return s.jsxs("div",{children:[s.jsx(En,{eyebrow:"Speakout B1+ · Student's Book",title:"Contents",description:`The complete book, ${$a.edition}. Printed page numbers are shown for every lesson; each lesson page opens the original book pages, audio and practice.`,children:s.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[s.jsxs("span",{className:"rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800 dark:bg-brand-950 dark:text-brand-200",children:[lt.length," units"]}),s.jsx("span",{className:"rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]",children:"40 lessons"}),s.jsxs("span",{className:"rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]",children:[l," complete"]})]})}),s.jsx("div",{className:"book-page overflow-hidden p-1 sm:p-2",children:s.jsxs("div",{className:"rounded-[3px] border border-[var(--line)] bg-[var(--surface)]",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3 sm:px-6",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300",children:"Book map"}),s.jsx("p",{className:"text-xs text-[var(--ink-faint)]",children:"Unit opener · lessons · review"})]}),s.jsx("span",{className:"text-xs tabular-nums text-[var(--ink-faint)]",children:"pp. 6–102"})]}),s.jsx("div",{className:"divide-y divide-[var(--line)]",children:lt.map(u=>s.jsxs("section",{className:"px-3 py-4 sm:px-5 sm:py-5",children:[s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx(G,{to:`/unit/${u.number}`,className:"grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-xl text-white shadow-sm transition hover:-rotate-3 hover:bg-brand-700","aria-label":`Open Unit ${u.number}`,children:u.number}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-2",children:[s.jsx(G,{to:`/unit/${u.number}`,className:"font-display text-xl text-[var(--ink)] hover:text-brand-700",children:u.title}),s.jsxs("span",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]",children:["Unit ",u.number," · p. ",u.pages[0]]})]}),s.jsxs("p",{className:"mt-0.5 text-xs italic text-[var(--ink-soft)]",children:["“",u.question,"”"]})]})]}),s.jsx("div",{className:"mt-3 divide-y divide-[var(--line)] rounded-lg border border-[var(--line)] bg-[var(--bg)]/35",children:u.lessons.map(h=>{const c=r(u.number,h.id);return s.jsxs(G,{to:`/unit/${u.number}/lesson/${h.id}`,className:"toc-row group px-3 py-2.5 transition hover:bg-brand-50/60 dark:hover:bg-brand-950/30",children:[s.jsx("span",{className:"w-12 shrink-0 text-[11px] font-black text-brand-600 dark:text-brand-300",children:h.code}),s.jsxs("span",{className:"min-w-0 shrink-0",children:[s.jsx("span",{className:`block text-xs font-semibold ${c?"text-brand-700 dark:text-brand-300":"text-[var(--ink)]"}`,children:h.title}),s.jsx("span",{className:"hidden text-[10px] text-[var(--ink-faint)] sm:block",children:h.labels.grammar??h.labels.vocabulary??h.labels.skills})]}),s.jsx("span",{className:"toc-dots"}),c&&s.jsx("span",{className:"text-[10px] font-semibold text-brand-600",children:"done"}),s.jsx("span",{className:"toc-page tabular-nums",children:h.pages[0]}),s.jsx(Jn,{size:13,className:"shrink-0 text-[var(--ink-faint)] transition group-hover:translate-x-0.5 group-hover:text-brand-600"})]},h.id)})})]},u.id))})]})}),s.jsxs("section",{className:"mt-8",children:[s.jsx(Jt,{icon:s.jsx(fx,{size:18}),title:"Reference banks",hint:"Extra pages at the back of the book."}),s.jsxs("div",{className:"grid gap-3 sm:grid-cols-3",children:[s.jsxs(G,{to:"/bank/grammar",className:"group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-brand-300 hover:shadow-md",children:[s.jsx(ft,{size:19,className:"text-brand-600"}),s.jsx("h3",{className:"mt-2 text-sm font-bold",children:"Grammar Bank"}),s.jsxs("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:[Ea.length," lessons · pp. 104–131"]})]}),s.jsxs(G,{to:"/bank/vocabulary",className:"group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-accent-300 hover:shadow-md",children:[s.jsx(pt,{size:19,className:"text-accent-600"}),s.jsx("h3",{className:"mt-2 text-sm font-bold",children:"Vocabulary Bank"}),s.jsxs("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:[Sn.length," groups · pp. 132–137"]})]}),s.jsxs(G,{to:"/media",className:"group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:border-warm-300 hover:shadow-md",children:[s.jsx(hn,{size:19,className:"text-warm-600"}),s.jsx("h3",{className:"mt-2 text-sm font-bold",children:"Audio & video"}),s.jsx("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:"81 tracks · 16 BBC videos"})]})]})]})]})}function as({pages:r,printedPages:l,title:u,compact:h=!1}){const[c,m]=T.useState(null),[p,b]=T.useState(!1),w=c!==null,v=N=>l?.[N]??r[N],k=T.useCallback(()=>{m(null),b(!1)},[]),y=T.useCallback(N=>{m(L=>L===null?L:(L+N+r.length)%r.length),b(!1)},[r.length]);return T.useEffect(()=>{if(!w)return;const N=document.body.style.overflow;document.body.style.overflow="hidden";const L=q=>{q.key==="Escape"&&k(),q.key==="ArrowLeft"&&y(-1),q.key==="ArrowRight"&&y(1)};return window.addEventListener("keydown",L),()=>{document.body.style.overflow=N,window.removeEventListener("keydown",L)}},[w,k,y]),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`grid gap-4 ${r.length>1?"sm:grid-cols-2":""} ${h?"gap-3":""}`,children:r.map((N,L)=>s.jsxs("figure",{className:"group min-w-0",children:[s.jsx("button",{type:"button",onClick:()=>m(L),className:"book-cover page-sweep block w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600","aria-label":`Open page ${v(L)} of ${u}`,children:s.jsx("img",{src:Fu(N),alt:`${u} — page ${v(L)}`,loading:"lazy",decoding:"async",className:"aspect-[1/1.414] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"})}),s.jsxs("figcaption",{className:"mt-2 flex items-center justify-between gap-2 px-0.5 text-xs text-[var(--ink-faint)]",children:[s.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[s.jsx(dx,{size:13}),"Page ",v(L)]}),s.jsx("span",{className:"opacity-0 transition-opacity group-hover:opacity-100",children:"Click to zoom"})]})]},N))}),w&&Qk.createPortal(s.jsxs("div",{className:"fixed inset-0 z-[90] flex flex-col bg-[#0b1113]/95 text-white backdrop-blur-sm",role:"dialog","aria-modal":"true","aria-label":`${u}, page ${v(c)}`,children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6",children:[s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"truncate text-sm font-semibold",children:u}),s.jsxs("p",{className:"text-xs text-white/60",children:[c+1," / ",r.length," · Page ",v(c)]})]}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("button",{type:"button",onClick:()=>b(N=>!N),className:"grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20","aria-label":p?"Zoom out":"Zoom in",title:p?"Zoom out":"Zoom in",children:p?s.jsx(mx,{size:18}):s.jsx(cx,{size:18})}),s.jsx("button",{type:"button",onClick:k,className:"grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20","aria-label":"Close viewer",children:s.jsx(Pg,{size:18})})]})]}),s.jsx("div",{className:`relative flex-1 ${p?"overflow-auto":"overflow-hidden"}`,onClick:N=>{N.target===N.currentTarget&&k()},children:s.jsx("div",{className:`flex min-h-full items-center justify-center p-3 sm:p-6 ${p?"w-max min-w-full":""}`,children:s.jsx("img",{src:Fu(r[c]),alt:`${u} — page ${v(c)}`,className:`rounded-md bg-white shadow-2xl transition-[width] duration-300 ${p?"w-[1600px] max-w-none":"max-h-[calc(100vh-9rem)] max-w-full object-contain"}`})})}),r.length>1&&s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",onClick:()=>y(-1),className:"absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:left-5","aria-label":"Previous page",children:s.jsx(zr,{size:24})}),s.jsx("button",{type:"button",onClick:()=>y(1),className:"absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:right-5","aria-label":"Next page",children:s.jsx(Jn,{size:24})})]})]}),document.body)]})}const I0={6:{text:`LISTENING/VIDEO SPEAKING WRITING
Listen to people making Roleplay making complaints Write a complaint email
complaints
Discuss a marketing campaign
FUTURE SKILLS Communication
MEDIATION SKILLS Explain something clearly to sell
an idea to other people
BBA street Interviews Talk about planning an event Write a meeting summary
about what people do
themselves/have done
Listen to people talking about | Describe your favourite neighbourhood Write instructions for how to
their favourite neighbourhoods | pyTURE SKILLS Collaboration get somewhere
] Describe a challenging experience
Roleplay asking for and confirming information
MEDIATION SKILLS Discuss a proposal
aa Programme Talk about what a place is famous for Write a description of a
Reggie in China business idea
Listen to a podcast about Talk about recent conversations Write a story about an event
misunderstandings
oo Discuss issues connected to online privacy
Two-minute conversations MEDIATION SKILLS Explain a
chatbot flowchart
BEE Street Interviews A discussion about communication Write an an email giving advice
about communication about a problem
oo Describe a situation, then give advice
BAMA radio Discuss the most important qualities of a mentor Write a short biography
Listen to an account of the FUTURE SKILLS Collaboration
origins of one man’s curiosity
Give a five-minute presentation
FUTURE SKILLS Communication
MEDIATION SKILLS Ask follow-up questions
BBM Programme Pitch a business idea Write an email giving work-
Dragons’ Den related news
AUDIOSCRIPTS p157 VIDEOSCRIPTS p170 IRREGULAR VERBS p175`,confidence:91},7:{text:`| SEU o £y ied 4 fat : \\ | ; ~~
\\ | ¢ Il Nii i | om 4
TAN A \\ kes A y \\ ya
Snes a R A dom 1 | Al Aa? B'. w § | [ 3 4
Re ic Fol yf
: ; | he ~~» = 1 E ’ L
Pa ’ N | : ON IN. ) 5 yl | 2 4 f
GN UAE EY = 1 A - in SS Aan 3
ANN A N $1 y | Ny! i (NAC " % = aN a I
+ \\ he ) l - i Ine % A fl E. Ire.” J 7 ae i
' “4 74 =~ [4] = 3 A & le. re } = | E | pv Ee ¥ i
Tf \\ ¥\\ | yiive ME -f x 2: } at Ee .
ARE Clie N, ¢ il J J XJ p Fol Vo Ai
\\ EW TSRMAT Ll OBR a ag
\\ \\ ) \\ | el 74 “ 3 Ps 1 Sa
y \\ / Al N 4 t == y/ = .
av | d 1 i) = T—— I "3
\\ by iN | ! — yo
[1S la [ j J =
SL ’, } at ¢ 1 1 ¢ ? — 5 L b 4
| io = = } | bo dl : ‘w |
a “1 : = .
= ¥ A A gs rr
y= os iy he } | = = i
{ \\ d ll] 5 |
( RITE k g" | | 3 : NS =
R y a ps <=
7 A <3 |
Miki” 7)
% 8 0d ha 2% * > HIE Lo i = Tr 3 - Global _-—————————5
BP Sr Aa & pier ail Scale of
Bd Ss English LEARNING OBJECTIVES
Vasc IF 3 \\ dat 1A LISTENING | Understand people talking about their
Fo mw: - ATARI BSTC possessions: describing possessions; materials
vt i! A > Fides Ris Tell ‘a story of me in three objects’: narrative tenses
TRU SO CT { Ril je CL. oe
Lg Br 74 a GT L Pronunciation: auxiliary verbs: weak forms
py" A Write an advert to sell an item online
|B} 1B READING | Read an article about minimalism vs. maximalism;
\\ ¥: verb patterns
VLOGS Answer a questionnaire about preferences: personal preferences
Pronunciation: stress in prepositional phrases
> ’
Qs ab sthe best rat 1C HOW TO... | leave phone messages: phrasal verbs:
you've ever received? housework
1 [J Watch the video. Which do you Pronunciation: intonation in polite requests
ink is the b t?
thinkisthe best presen 1D BBC STREET INTERVIEWS | Understand people talking about
2 What's the best present you've ever gadgets and screen time: except for, apart from, (not) even
received? Answer a questionnaire about gadgets
Write an online forum comment
7)`,confidence:50},8:{text:`ND ————
Unit 1 | Lesson A N. :
N nN
1A The story )
of me 7 A 1
| 4
- X Ag We) .
a v f
GRAMMAR | narrative tenses VAN |
VOCABULARY | describing possessions; materials \\ Ss y
PRONUNCIATION | auxiliary verbs: weak forms No
Ch " 8 RY I
: Oa
— sa J NEES
LISTENING A storyof me
® ©
1 A Think of three people you know and two in three obj ects
or three objects connected with each
person. Make notes. The objects that we choose to have around us reflect our
. . personalities in different ways. Our possessions contain our
B Work in pairs and tell each other about memories; they remind us of people and places in our lives.
the people and the pe Hi i url Do you ever think about why you choose to keep some objects
ehjectsiconnected te theltpersonalities: and not others? The objects we keep often reflect who we
2 A Read about A story of me in three objects were, who we have become and who we want to be. In this
and look at the photos. Why might these podcast we ask people to choose three objects from their life
objects be important to the speakers? that they would never throw away, and tell us about them.
B LJ 1.01 Listen to the podcast and z
number the objects in the order you Merde —
hear them. Malta Po oN 5 i wn
coffee pot leather jacket | pr 2 og LE J
lemon tree silver rings y “0 Sl
Spanish guitar walking boots 4 iq La \\
- i ~ mW \\ \\ i i
jl [| \\ \\ ) p
C Work in pairs. What information can you It \\ . ~ ’ NN | q TT] let
remember about each object? - "i \\ J 4 \\ ;
3A [J 1.01] Listen again. Are the { LY 4 } p i
statements True (T) or False (F)? A )! WW | b) A SL 7 >
RLS A p Y
1 Marta inherited a valuable ring from k. od (
her mother. i i i
2 Marta borrowed a jacket from a friend. ; | » |
3 One of Marta’s friends helped her i \\ |
dream to come true.
4 The owner of the guitar shop asked Tim a p
Tim if he was a professional. hone {50 i -
5 Tim enjoys walking with friends. #25 23 A
6 Tim always made good coffee when he » Reel) a a . iv
was at university. _ - fri
B Work in groups. Discuss the questions. = bi -
1 Do you have anything in common with b, a -
either Marta or Tim? What? ad ih
2 ‘If you can’t enjoy little things, then iY
you will never be happy.” What do you = i — wy
think this means? What are some ‘little N wl
things’ that make you happy? = \\
o pe`,confidence:76},9:{text:`1A
VOCABULARY PRONUNCIATION
oe. . 6A 1.02 | auxiliary verbs: weak forms |
describing possessions Listen and complete the sentences.
4 A Read the extracts (a-b) from the podcast. Match the words and 11 arpund Australia,
phrases in bold with the meanings (1-8). 2 We in China.
a I've worn silver rings all my life. ... This one belonged to my 4 He ak university.
mother and | inherited it when she died. It’s not worth a lot, but 4 | bought a new leather jacket to
it's very special to me. replace the one | _ .
b | borrowed this leather jacket from a friend when | was studying 5 My mother the ring to me.
at university ... It's a genuine 1980s leather jacket ... When | 6 He “me making coffee.
was wearing it, | always thought it looked really cool. It’s a bit
damaged now, but I still love it. B [1.02 | What do you notice about the
1 If something was owned by someone else, we can say it auxiliary verbs? Are they stressed? Listen
them. again and repeat the sentences.
2 JF Femehing is nat valiable: at's ’ C Work in pairs. Make sentences about one
3 Ifit's made of animal Skin, it's : or two of the options to tell your partner.
4 If you received a possession (or money) from someone after Theor ative whan
the person died, you it.
5 If something is real, an original and not a copy, it’s . 1 fe i to ep ace meth you had
6 Something which is broken in some way is . Si What als ’ }
7 If something has emotional importance for you, it’s . ® pad ge Sei
8 If we think something looks good in a fashionable way, we 3 d thi J.
can say it’s someone made something and gave
i it to you. What was it? Did you like it?
?
B Work in pairs. Ask and answer the questions. Why wing Ton 5%
. 2 . 4 you were living or studying in a
1 Do you have any possessions which previously belonged to your different place to now. Why were you
parents, grandparents or friends? What are they? Who did they there?
belong to?
2 Do you have a possession which is not worth a lot, but is special
to you?
3 Do you own a lot of things made from the same material, e.g. SPEAKING
silver, denim, leather?
7A Prepare to talk about three important
C Learn and practise. Go to the Vocabulary Bank. objects that say something about you
(¥ page 132 VOCABULARY BANK materials and your life. Make some notes to answer
the questions.
1 What are the objects? How would you
describe them?
GRAMMAR 2 Tell a story about each of the objects.
Where did you get them? Why are they
narrative tenses important to you?
5 " This old leather biker's jacket belonged
A Match the sentences from the podcast (a—d) with the rules (1-2). to my dad. He wore it a lot when he
Choose the correct words to complete the rules. was living and working in London. He'd
a | bought these boots while | was travelling around New Zealand. finished university and was working as
b | got this ring in a street market when | was living in Italy for a a motorcycle courier. It's a bit damaged
few months. now, but it’s very special to me, even if |
c | bought it to replace a similar one that I'd lost. Sle aso Welk Ib SIC any Rha
d The Sheps had = to me playing and he asked me, B Work in groups. Tell each other your
Aeeysuaprelsssional ‘story of me in three objects’. Ask and
1 We use the past continuous to refer to temporary / fixed or answer any questions about the stories.
changing states and situations. - .
2 We use the past perfect to describe an action which happened ¢ Take = photwof the thiee objects
before / after another action in the past. you discussed, or make a photo collage.
Bring the photo and show it to the class.
B Learn and practise. Go to the Grammar Bank. Look at your partner’s photos. Can you
remember what the objects are and why
13 page 104 GRAMMAR BANK iy SFE TpENTT
9`,confidence:86},10:{text:`Unit 1 | Lesson A
WRITING : men’s jacket - medium
5 fi wl 1980s vintage denim jacket.
an advert to sell an item le VV In perfect . .
online gl
| Price: £75
8A workin pairs and discuss. Do you f f oo 3
ever buy or sell items online? What 1 SRE :
kinds of thing? Which platform do 4 i \\ bi OR [A |
you use? A Ea El
B Complete the descriptions of items
words in the box. bicycle
condition good includes Brand new men's bike. Bought
Italian leather new used <0 earlier this year but never 2 _
Nem Ail 3 front and back lights, bike
9 A Look at the sentences from the | \\ / 7 we N\\ lock and keys. |
adverts. Which types of word are \\[/ ZANE A [aN N price: £350 |
missing: nouns, articles, pronouns { +4 | —_—
or other grammatical words? \\ N 4 Location: Manchester, UK
1 The price of the bike includes Te Condition: As4
front and back lights, a bike Sl MS
lock and keys. = Price includes a Os [2
front and back lights, bike lock —
2 They are new and they are in
perfect condition. = New and PB moka coffee pot
in perfect condition. Cool 5... moka coffee pot.
- » 2 Serves 4.
B How are the sentences (1-5) oe
reduced in the adverts? #espresso #coffee
1 This bike was bought earlier this ls Price: £18
year but it was never used. 1
2 Itis in the same condition as it BUY NOW
was when it was new. ; i
3 The coffee pot serves four people. 03 Hw
4 The back of the guitar is slightly
5 They come in the original box. § wo Spanish guitar
C Reduce the sentences (1-4) to - : Eon Spanish classical guitar. Ins
note form. LL condition, back slightly damaged.
1 [Ehaxbadn Slightly dempaned, : ; Comes complete with spare set
2 The price includes a spare set = 1 fim ot pe of strings
of strings. AREAS ’
= d ERC. :
3 This has never been used. er a] Price: £120
Saas act i 3 4 pa i: p= i =
4 Itis in very good condition. CB a i od on Qs
: So 2d a
D Choose three possessions that you — = gas
could sell on a trading website or eee
app. Write short descriptions of the ea
different items for sale, with prices, for sale
Ssting picstechoseen. Ladies’ walking boots, size 40
3 % boots. New and in perfect
5 9 condition. In original box.
[ v Price: £40
Os Nw
10`,confidence:74},11:{text:`1B
i ?
1B Less IS more?
GRAMMAR | verb patterns =
VOCABULARY | personal preferences [0
PRONUNCIATION | stress in prepositional phrases ¥ IR
eT — — 4
IR LHC 1 w Ce / CR
Eh Ee i Sop [ra j <{/
bei jini or [ py SSE i ii
ae AE deri > ES me RAR
s BE Lt
—— a
EES, CLT le, Le, ET Be
1 A Look at the photo and discuss the questions. Maxi m a lism
1 What kind of person do you think lives in a place like
SER According to the Los Angeles Times, th
2 What would/wouldn’t you like about living in this GRUIGING 10 . oar oe €
place? Why? average American home contains 300,000
items. It’s a crazy number, even if it includes
B Read the introduction to a magazine article about everything from pencils to beds. A British
maximalism and minimalism. Are you surprised by any of newspaper, The Daily Telegraph, reported
the facts in the first paragraph? Why/Why not? that the average British 10-year-old owns
C Work in pairs. Turn to page 139. Student A: Read what 238 toys but plays with only twelve daily.
Zuleya says about minimalism. Student B: Read what The Story of Stuff, a documentary, tells he
Richard says about maximalism. Tell each other an We toiane double the number of things
interesting fact from your part of the article. that we did half a century ago and there are
more phones in the world than people.
D Swap texts with your partner and read the rest of the article. ny ee
Who do you think makes the stronger argument: Zuleya or All of this might explain why minimalism - the
Richard? Discuss in pairs. idea of living more simply — has become a trend.
rr Minimalism began as an artistic movement in
2A Work in pairs. Can you oil what the full-length the 1950s. Artists like Donald Judd and Agnes
article says about these things? Check your answers. Martin produced paintings and sculptures
1 a crazy number reduced to bare, pure lines. Now it’s not art but
2 twelve toys the environmental impact of our lifestyles that
3 the world’s number of phones has seen minimalism return.
4 asimpler world mali fois Hla Sth 1d
5 who Joshua Fields Millburn and Ryan Nicodemus are —T Foi = = Si : . WOES;
6 appreciating the things that really matter Sze 1 SERRE hos
d BE eighteenth century and a 1920s movement
7 objects that give visitors pleasure { )
called Art Deco. It involves bright colours and
B Are the ideas in Ex 2A facts or opinions? Think about where interesting patterns like zebra stripes and leaf
the information comes from. Read the examples to help you. prints. Fans of maximalism say it's not only for
1 The idea that it’s ‘crazy’ is the writer's opinion, not a eighteenth century French kings, but for anyone
fact. There is no source except the writer's thoughts. who enjoys having lots of beautiful objects in
2 The number twelve is from research quoted in the the house.
newspaper The Daily Telegraph. It is a fact, not an opinion. . .
So, space and simplicity or colour and craziness?
C Work in pairs and discuss. Which opinions in the article do Here, two designers share their views on the
you agree with?. issue: minimalism or maximalism.
1`,confidence:83},12:{text:`Unit 1 | Lesson B
GRAMMAR VOCABULARY
verb patterns personal preferences
3 A Choose the correct words to complete the sentences. 5 A Workin pairs. Look at the words in bold in the two
1 Minimalism refers to design / designing things in sections of the article about Minimalism vs. Maximalism
a simple, elegant way. on page 139. Answer the questions.
2 They succeeded in persuade / persuading people 1 Which two adjectives mean ‘perfect for me’?
to stop collecting useless stuff. 2 Which two phrases mean ‘I don't like ...”?
3 It turned out to be / being the most important trip 3 Which phrase means ‘don’t need’?
of fbf. . 4 Which word means ‘enjoy or be thankful for
4 | went on to become / becoming a designer. something’?
5 | believe in create / creating joyful designs. 5 Which phrase means ‘make someone happy’?
6 | look forward to visit / visiting more street markets. 6 Which word means ‘the kind of things you like’?
B Check your answers in the article on page 139. B Choose the correct words to complete the summaries.
C Work in pairs. Look again at the sentences in Ex 3A Zuleya says that, for creative people, the homes she
and answer the questions. designs are "pleasure / ideal. She thinks minimalism
— . allows us to 2stand / appreciate the important things in
1 What usually follows verb + preposition: the -ing life. She believes we can *do without / give pleasure so
form or the infinitive? many things
2 | mes iE Arudn nat tallow Richard is doing his “dream / first job. Minimalism isn’t
P : 5for him / the taste because he ®dreams of / is not a
4 A Match the words in bold in sentences 1-2 with the big fan nn nlc specs] ls via his i give
definitions a—b taste / pleasure to his visitors. He also says people
: have different hopes / tastes and you can live a simple
1 They persuaded people to stop collecting life and still enjoy colours and patterns in your home.
useless stuff.
2 If we stop to think about what's really important ... C Complete the sentences with your own ideas. Read your
a Stop + to infinitive means pause an action so that sentences to other students and compare ideas.
you can do a different action. 1 One sound or smell that gives me pleasure is ...
b Stop + -ing means change a habit. 2 My dream job would be ... , and the ideal place for
it would be ...
B Learn and practise. Go to the Grammar Bank. 3 | have very different tastes from ... . For example, ...
| 4 page 105 GRAMMAR BANK 4 | always appreciate ... . In fact, | can’t do without ...
5 ... isn't for me because I'm not a big fan of ... |
- |
. ; PRONUNCIATION
j be 6A 1.03 | stress in prepositional phrases | Read the
if sentences (1-4). Which words in bold are not stressed:
the verbs or the prepositions? Listen and check.
i hey i ~2 1 I believe in living a simple life.
y = © < ji 2 He succeeded in finding his dream job.
: ey LAA fA 3 You should think about tidying your stuff.
"addy & 1 = 4 Concentrate on appreciating the simple things.
- Ln 4 \\
wilh ¥ ¥ - Nl B 1.03 | Listen again and repeat the sentences.
= 7) . >
: = a J iy IX \\ | 2 i 3 .
» = R4 AY A 3 . C Change the phrases in bold by adding your own ideas.
- al PANY mdf The first word you write should be an -ing form.
- R = a, ul | JE 1 ldon’t care about being famous.
P——— = ” \\ SER, I don’t care about owning lots of things.
| 3 — o>. oA 2 | sometimes dream about escaping to another country.
— Cy EY]
Be N = E : Rt 3 I never think about going to nightclubs.
9 @ ii “iF = oS 4 | believe in helping others.
2 ’ Re / 5 I never apologise for being myself.
3 - TI
4 eR
= \\ D Read your sentences to a partner. Make sure you stress
ry ASS ; the verbs. Are the sentences true for both of you?
'Y £s i \\ f £]
gs TH nyr
Will! f Rak Fd
12 A {il {il A
- p — SW \\\\ \\`,confidence:79},13:{text:`1B
SPEAKING. FUTURE SKILLS
7 A Read the questionnaire and think about your answers. Communication
What explanations and examples can you think of? To show a strong attitude towards a topic, we
often use emphatic language, e.g. ‘| definitely ...,
B Read the Future Skills box and do the task. | definitely don’t .... Can you think of any other
i 2?
C Work in groups. Ask and answer the questions in the emphatic phrases]
questionnaire. Give examples and use emphatic language. Before you do the activity in Ex 7C, look at the
. . questions and think about which emphatic phrases
D Work with another group. Guess what their answers were. you can use in your answers to show your attitude.
Are there any surprises?
SE > =. )
3 IN \\ & 5)
| * § & Es
4 ” 0) re
Le
ne ps
- ~— ~ 5
Ry, = a SS
dg de ao
\\ Caeab ~ WHO ARE YCU?
ies $ ER
social butterfly or ‘stay-at-home’ future dreamer or happy with ‘now’
Is your ideal evening spent alone or do you look forward to Do you dream about achieving amazing things (like getting a
spending time with other people? dream job) or do you appreciate the things you have now and
> 1 like ... feel content?
> l enjoy... > | dream about ...
> l care about ...
messy or tid oe .
= y follower of tradition or independent
Does it give you pleasure to keep rooms, desks, tables, etc. oo
tidy or are you happy to live or work in an environment with Do you care about following your family’s traditions in
lots of stuff everywhere? habits, beliefs, clothes, education, etc., or do you have
, - different tastes?
> I'm (not) a big fan of ...
> | prefer ... > | believe in ...
> | (don’t) care about...
social media fan or non-user L i
For how long could you give up checking your phone messages Panne Cr fon-Psanner
and social media? One hour? One day? Are you the type of person who thinks about planning their
s | can/can't do without holidays at the last minute or do you prefer to plan everything
© - months before?
multitasker or ‘one-thing-at-a-time’ > I (don't) put off .
Do you prefer to concentrate on doing one thing at a time 2 Hike...
or do you do lots of different tasks at the same time?
> | prefer...
13`,confidence:83},14:{text:`——_—
Unit 1 | Lesson C 5
i |
: i ue
#4
Don’t v
Nas é
~ <<
forget to... E |
B HOWTO... | leave phone messages ~~ v
VOCABULARY | phrasal verbs: housework
PRONUNCIATION | intonation in polite requests
'
a
VOCABULARY B Look at the lists in Ex 2A and find phrasal verbs to
match with meanings (1-8).
phrasal verbs: housework 1 put something outside
1 A Work in pairs. N household task SNE
ii on a eh tho wen dn 3 something you do with doors and windows to stop
can in one minute. Then compare with other students. people getting in
washing the dishes ... 4 put something in the rubbish because you don’t
want it
B Work in groups. Discuss the questions. 5 get/buy something (can be collecting something

1 Which of the tasks in Ex 1A do you do? you arranged to buy earlier)

2 Which do you dislike the most? 6 put things on a hook or other object

3 Are there any that you like? 7 explain instructions to make sure someone

understands
2 A Match the ‘to do’ lists (1-3) with the situations (ac). 8 make somewhere neater by putting things in the
a someone moving house right place
b isi t
=EmEohe ESET SPE = C Match the questions (1-8) with the answers (a-h).
¢ someone going away for the winter
What do you do when:

1 h — he frid 1 your clothes are lying all over a lockitup
throw out foo ram the fridge the floor? R—
take out the rubbish 2 youregoinghomeandyou ¢ tidy it up
pack suitcases remember you need to buy milk? d hang them up
set house alarm 3 your desk papers, books and ;

cups are all over the room? i using

2 4 you need to explain complicated f go re them
pick up cake from bakery instructions to your flatmate? g takeitout
tidy up living room 5 food goes bad? h turnitup
buy snack food 6 the temperature changes and
clean bathrooms the Na 5 - fore

; : 7 you're leaving the house to go
hang up Elaithes lying around in bedroom on holiday?
TE ehEing 8 the bin is full of rubbish?
& finish packing boxes D Work in pairs. Student A: Close the book. Student B:
P & . . Test Student A. Then swap roles.
phone new owners - go over instructions .
for alarm system B: What do you do when your clothes are lying all
over the floor?
sweep floor po ;
complete ‘new address’ form for post office SERS TORR:
B: Correct!
lock up the house
14`,confidence:83},15:{text:`1C
How to ... PRONUNCIATION
5a)1.07 | intonation in polite requests | Listen to the
leave phone SI requests (1-4). Does the speaker start with a high or
low pitch to sound polite?
3A workin pairs and discuss the questions. 1 I wonder if you could bring my folder, please?
1 Do you ever have to leave or listen to phone 2 Would you walk the dog, please?
: fe ; :
5 Be Frei Lt? Why/Why not? 3 Do you think you'll be able to come today?
o sacs nb 4 Will you pick up some food on the way home?
B 1.04 | Listen to the phone messages. Number the B 1.07] iistenagainand say the sentences with
items in the box in the order you hear them. .
the recording.
alarm Cw broken pipe folder garage door C Complete the requests using your own ideas. Read them
leather jacket pizzas plants to a partner using a high intonation to sound polite.
1 wonder if you could ...
C Complete the phrases (1-10) with the words in the box. 2 Would you tell me
back call calling find here message 3 De you think...
number reached this you'll 4 Willyou ...
Things you'll hear on a recorded message:
2 Please leave a message and we'll get to you.
3 hrc, eric 28 Smiths and Co. Our office 6A Workin pairs. You are going to practise leaving some
SHIRES Ean)1e Raf . phone messages. Read the Future Skills box and plan
4 | can’t take your call right now, but if you leave a your messages for the situations in Ex 6B
with your name and number, I'll get back to ’
you as soon as | can.
Starting a message: FUTURE SKILLS
5 is Marcelo Fagundes calling about ... Communication
6 It’s Patricia w Before leaving a phone message in English, it helps
Giving detailed information: to plan and write down the main points. Think about
7 need to unlock the ... how to:
8 You'll. it on the table next to the ... + start the message,
Asking for further phone actions: i why pu re calling, ;
+ explain details clearly (if necessary),
9 Canyou me back? + end the message.
10 You can reach me on this p
D L1.05| Listen and check. B Work in pairs. Prepare voicemail messages. Student A:
4 A Complete the requests with the words and phrases Ll LMS a ai
in the box. C Take turns to leave your messages by saying them in
EX ST ——— your pales. Student B: Start with a recorded message.
| wonder ifyou wonder would B: You've reached [name]. Please leave a message.
Adu
1 you explain the alarm system to her?
2 could bring my folder to the meeting? MEDIATION SKILLS AON
3 let me know that you've got this message? SR as R Q
4 ; ; inviting contributions
you'll be able to pick up some pizzas on the
way home? agree on the best way to fix a work problem
51 if you'd mind watering the plants for me.
» page 145 MEDIATION BANK
B 1.06 | Listen and check.
C Are the polite requests in Ex 4A direct or indirect
requests? How do you know?
D Learn and practise. Go to the Grammar Bank.
Ld page 106 GRAMMAR BANK
Speak Go to the interactive speaking practice 15`,confidence:85},16:{text:`Unit 1 | Lesson D
[
; yr Ki
IIE Ciprant Intarviawne d <
L » - .
|
Fy |
B S
Phy | 4 1 i
Pad —-
GRAMMAR | except for, apart from, (not) even Joshua NN
SPEAKING | a questionnaire about gadgets
WRITING | an online forum comment
VIEW
p— pr j vo 2 A [J watch the interviews and answer the questions.
% iv.’
LE 1 Which of the items below do the speakers mention?
py ~ i ) 7 » coffee maker * home computer « smart speaker
: FIT y Ld | 1 » gaming console « iPad « smartwatch
hm = - Aly » guitar pedals « phone « VR headset
I gains iis 2 How many of the speakers think that people spend too much
g 1 A [ —— time looking at screens?
2 '" UL 8 d ) =
BER rib 4 B [J Watch the first part of the interviews again. Write the name
We E of the speaker who:
=t he | 1 uses their phone in bed.
2 could live without their smartwatch.
PREVIEW 3 could live without all their gadgets except for their phone.
G [» | Watch the second part of the interviews again. Complete the
1 A Are you a technophile or technophobe? things the speakers say.
Which statement is closest to the truth 1 You lose the contact and that emotion that you get from
for you? that interaction.
1 I love technology and try to be as 2 | think people are to screen time, needing information or
up-to-date as possible. entertainment more immediately.
2 | use technology, but | don’t need to 3 | think people probably spend on their phone.
have all the latest gadgets. 4 It prevents you from being able to talk to people in .
3 I'm not very interested in new
technology and think it's a waste D Do you agree with the statements (1-4) in Ex 2C? Discuss in pairs.
of money.
B Work in pairs and compare your answers.
Say what gadgets you use the most and GRAMMAR
how you use them.
except for, apart from, (not) even
. o ! yy | 3 A Look at the sentences from the video (a-d) and complete the rules
| ] ) PB 7 & . (1-3) with except for, apart from or even.
«4d y ] 1 | 1 a | think | could live without all my gadgets apart from my phone,
— | | | % | nl 2 a because it's so important to me. —
i Ca b | love a range of gadgets from my Xbox and my laptop, but |
i } M could live without all of them except for my phone.
A % - c | love my phone. | use it all the time. | even use it in bed.
Ss : d People certainly look at their phones too much. It might even
y BB] CH be the first thing in the morning.
1 We use to show something is surprising or unusual, and
) we want to emphasise the point.
at: Which gadgets do you love, it 2 We use and to say that something is not included.
which could you live without? 3 We usually follow and with a noun.
Q2: Do you think people spend too B Learn and practise. Go to the Grammar Bank.
much time looking at screens?
| 4 page 107 GRAMMAR BANK
16`,confidence:80},17:{text:`1D
/ A\\ - i
\\ ' J 4 3
lhe ; ed
I~ . a - o Ce " v“
-~ | Eat I " ] . .
i LO | -- ] -
4 “= ( A) i & . FSS ER - ITs
4 T3\\¥ » | \\
Shan! non - Fa) 4 R 1 i A f Marc 4 : Er. 1
a | |,
1 amy
— Fa Li}
a questionnaire about gadgets 5 | {3 = A
Nt’ i a
4 A Write down all the gadgets you use on an average ] yr )
day in the order you use them. Compare with other E> ky | \\ p
students. Are your lists similar or different? AN 5 ¢ \\
My phone first, for my alarm and checking social h x : Cc oe sr b 4
media, then my coffee maker, ... get A i anor
B Read the questionnaire and make a note of your
i" WRITING
an online forum comment
You and your gadgets
1 How old were you when you got your first 5 A Read the online forum discussion. Do you think the
i ? ?
phone? What do you remember about supgestionsiare.good or bad? Why
getting it?
2 Apart from your phone, what gadgets do 1h
you love, and which could you live without? What gadget would you like to have that hasn't been
Why? invented yet?
3 Are there any gadgets that you would like 4 Comments | 5 Share | 11 Likes
to have?
4 What gadget would you like to have that Beatrice86 52 mins | One thing I would love to have that
hasn't been invented yet? hasn't been invented yet is a pet translator. It could tell you what
) . your pet is saying, and could even translate what you say to the pet.
: Think of three gadgets that Bs invented I would love to know what my cat is thinking.
during your lifetime. Which is the best Comment |Ehave ks
and why?
6 Do you think you spend too much time [hx] Marcx991 47 mins | Really? Are you sure? You look at all
looking at screens? Why/Why not? the problems in the world that could be solved with technology
and you want to invent a pet translator? | don't believe it!
Comment | Share | Like
C Work in groups. Ask and answer the questions in the
questionnaire. Use your notes and the Key phrases (su) Smithsy42 36 mins | | would say that apart from flying cars,
to help you. Respond to your partners’ opinions. one of the best gadgets would be something that can change the
size and shape of your vehicle at the push of a button. You would |
KEY PHRASES never have to sit in traffic again! |
Apart from my phone/laptop, I'd say that ... Soman ore | Lie
sovideaally ve without. ) (oo) DarrenDarren 31 mins | Absolutely! This is a great idea.
One thing I'd love to have/| could do without is ... E
C Comment | Share | Like
In my honest opinion, ...
I ld say | definitely ...
pr — M = - = B Work in pairs. Think of a gadget you would like to have
IRIE E100 that hasn’t been invented yet. Write a post describing the
Really? Are you sure... ? gadget and the problem it would solve.
Do you really/honestly think that ... ?
| don't believe it! C Read other people’s suggestions. What do you think of the
ideas? Write comments on each one giving your opinion
and explaining it.
1`,confidence:79},18:{text:`tl REVIEW
GRAMMAR VOCABULARY
narrative tenses 4 A Choose the correct words to complete the sentences.
1 A Choose the correct words to complete the text. What 1 Esabepdtinl atd casten. sitver Ting which
. we . belonged to / owned my grandmother.
do you think the idiom in the final sentence means? . ; .
2 They're my favourite pair of denim / diamond jeans.
They're quite leather / damaged, but | would never
The Story of Me ... on Wheels! throw them away.
The first mode of transport that I remember was # Isalovely stone / rubber Vase that afriend gave
5 : me as a birthday present. It’s cool / not worth a lot
my tricycle. My parents gave it to me the year after but it’s very special / gold.
: ‘was learning / had learnt to walk, and I loved 4 It's a steel / genuine Italian suitcase, made of
it. Then came my famous red bike. My dad *was leather / stone. It belonged to my father.
teaching / taught me how to ride it. I was ten years
old and I *was riding / rode down the main road B Work in pairs. Do you have any objects which you
when something ‘had happened / happened that would never throw away? Describe them to your
I'll never forget. It had rained / was raining heavily partner and say why they are special to you.
so I could barely see, and 1 skidded in a puddle 5 A Choose the correct option (A-C) to complete the
and lost control. Luckily, the road was empty and Re
I 5wasn’t getting / didn’t get hurt. Later, I bought ¥-
a motorbike. I "was wanting / had wanted one for .
years, but I shadn’t been / wasn’t being able to The House that Jock Built
afford it until my twenties. I rode it everywhere. In When Elizabeth finally saw the house, it *
my thirties, I got married and started a family, so I part of her family legend for 200 years. It had been
was having / had to sell my motorbike and buy a built by Jock Phillip, her distant ancestor who
car. Yesterday I ‘*watched / had watched my three- 2 Scotland for America aged sixteen with
year-old learning to ride his tricycle. You could say nothing but the clothes on his back. Five years
the wheel has come full circle! after arriving, he discovered a hidden treasure in
California: a seam of gold, which he later mined.
LE : :
B Work in pairs and discuss. Do you have stories to tell He ii SHCCerded a pcan his dptiies and sv
his earnings he built his 4 home.
about yourself on wheels?
It was the ® house, large and beautiful, a
verb patterns house to pass down from generation to generation.
It belonged to his children, then his grandchildren,
2 A Make sentences about yourself using the words and so on. When Elizabeth was young, she
and phrases in box A and the verbs in box B. Use the remembered © stories about it. For this
correct form of the verbs in box B: -ing or to infinitive. reason she had always dreamed about? the
A| caresbout dreamabout giveup house. Finally, her chance came.
look forwardto planon remember stop While she 8 there, she suddenly felt a sense
-_ of sadness. She arrived and saw immediately that
B be do eat go help the house was badly ° . The walls, made of
relax travel watch work 1 were falling down, and the windows were
_ long gone. Birds had made their homes in the roof.
| dream about travelling to West Africa.
i k p 1 A was being B had been C had
B Wor in groups. Tal e tums to read your sentences. 2 A had been leaving B was leaving C had left
Did you have any similar ideas?
3 A changing B to change C change
3 A Add the words in the box to complete the sentences. 4 A taste B dream C treasure
One word isn’t used. 5 A ideal B big C great
rr RE 6 A hearing B to hear C hear
pa pales al ) 7 A visit B to visit C visiting
1 I'm the quietest person in my family, apart my father. 8 A was driving B had driven C drove
2 Everyone in my family dances, my grandparents, 9 A damaging B damaged C damage
who love it. 10 A glass B silver C stone
3 No one in my family knows how to cook from
my mother. B R1.01 | Listen and check your answers.
4 Everyone | know plays video games, for me.
B Are any of the sentences true for you? Tell a partner.
18`,confidence:89},19:{text:`-_- ee a
r v
2 2 2%
. |
) i -
¥ .
D ; a WV
y * e J |
| t §., f bs
E 1 : \\ Al . J N h
: | 4 3 - KS
i 7 E + J \\ 3 uf i
4 's y 4 ) 7s 4 —— K
A ! -— - -
Ci. —
y < | § =
ns - ~
Gobgd| ——MmM8M8¥ 7 — MM
Scale of
English LEARNING OBJECTIVES
¢ 2A READING | Understand an article about how to change
habits: making changes
Talk about ways of changing habits: present perfect continuous
Pronunciation: weak form of been
a 2B LISTENING | Understand people talking about being a
[3 B| B | ‘people pleaser’: collocations: feeling and behaviour
Talk about ways of saying ‘no’: relative clauses
Pronunciation: chunking in relative clauses
Vi - Write emails to decline invitations
d habits do you have: 2C HOW TO... | talk about things that annoy you: pet hates
1 wat Zane bite de Pronunciation: stress and intonation to show annoyance
EE ck 2D BBC PROGRAMME | Understand a TV wildlife programme
1ood hal i Tee TA) about an exciting escape
abot > or two © e Discuss difficult situations
Write a story about a personal experience
19`,confidence:66},20:{text:`Unit 2 | Lesson A 4 1 rr = 2
I
2A Change BR
g 9° A
[J pr
of habit =f ~
E% — Py fx bia
TA WEE
- EE SE Em E— ¢ dry = prc 2
GRAMMAR | present perfect continuous Li “wr a 7 -
; % L/ RY
VOCABULARY | making changes mm \\ h ’ = \\
PRONUNCIATION | weak form of been \\ Jw 0) ky nN 2
\\ x 4 \\
[ \\
{)
4 \\
d\\. SA
ca” i ACH] i
ae | i NW
VOCABULARY B Complete the sentences (1-10) with the
p
correct form of the phrases in bold in Ex 2A.
making changes 1 | decided what Ilwanttodo—1 set
a__goal .
1 A workin pairs. Which bad habits (1-6) are in the photos (A-C)? 2 She's talking and talking and talking — she
1 ‘I spend over three hours on social media every day.’ just talking.
2 ‘I leave the tap running when | clean my teeth.’ 3 lcan’tsaynotoit, | it.
3 ‘I sometimes binge-watch TV series for hours at a time.’ 41 wanted to stop doing it, so | tried to
4 ‘| often leave the lights on when | go out of a room. it 3
5 “I throw away quite a lot of food.” 5 I've started something new — badminton.
) ’ | it last month.
6 ‘I never stop work for lunch’ . .
6 | practise the guitar every day. If | don’t
B Work in pairs and discuss. Do you do any of the things in Ex 1A? it, fll never get better at it.
7 He tried to finish it on time, but it was too
2 A Work in pairs and look at the statements (1-6). Which are true difficult so he didn’t to doit.
for you? 8 don’t want to do it now, but | should. I'll do
1 | make an effort to walk away from my screen every hour, but it later. 'm it :
I don’t always succeed. 9 I've done many things in my life, but I still
2 | often put off important jobs if they're difficult and do easy haven't my of becoming a
tasks instead or just check my messages. Lawyer,
3 I've tried to stop biting my nails, but | keep on doing it. 10 I'm trying, I'm trying —I'm todoit.
4 | can’t resist coffee. I drink about eight cups a day. | want to C Work in pairs. Look at Ex 2A and 2B and
give up drinking coffee, but | can’t. .
. Co answer the questions.
5 Every time | take up a sport, for example swimming, or .
something like that, | only manage to do it for a few weeks. 1 Which phrases are followed by to +
; ; : y : infinitive?
6 I'm good at setting goals for changing my habits, but I'm not . om
very good at sticking to them, so | rarely achieve my goals. 2 Which phrases are followed by verb + -ing:
3 Which phrases are phrasal verbs?
oo RE = c
a \\ ))
| - i
3 \\ ~ »
fn r= ~ | © » a
~J 18 iE a hi"
— 4 4 : A A \\ ’ J =
= & - - p-/ E
| ~ 2 { wy ~ y 4 :
i p / & ’ fl
> 4 a fd ~~" >
ZV A
297 7 A \\ /
“ 1 ———-
20 \\ A [5
J OC EB) aS`,confidence:76},21:{text:`2A
3 A Work in pairs. Discuss the questions. the habits we’d like to change
1 Have you ever tried to stop a bad habit or build
a new positive habit? What happened?
2 Why is it difficult to break bad habits, do I've been a life coach for the past seven years, and
you think? ' before this I worked as a psychologist for over ten
years. I've been helping people to change their habits
B Read the article and choose the best since the start of my career, and yes, I've been trying
summary (1-3). to change my own habits recently, so I know how
1 If you understand how habits work, you'll be hard it is. Time and time again, people have asked me
better able to change them. questions like ‘I want to stop looking at my phone
2 Changing bad habits and forming good habits all the time. Why is it so difficult?’ and I've been
are more or less the same thing. working seven days a week since I was twenty-two.
3 Everyday mistakes are the reason why people Can I really change that?’
often fail to break a habit. : ;
To answer these questions, let’s look at an example.
C Read the article again and answer the questions. Suppose you want to give up coffee and you currently
§ Wk the nai does tha war alent drink eight cups a day. All that coffee makes you feel
being qualified to write on this rk nervous and you know it's bad for you. So, you decide
2 Whatare the four main tips? to drink water instead of coffee. Everything's fine for
5 Wikis sit ie Fees oF - the first four days and you manage to follow your plan.
. oe g mi . But then on the fifth day you come home late and tired
4 Which words best describe the style of this hat tired . f os 5 d aad
article: factual, formal, helpful, humorous, Sac nina a ld tele
informal, scientific? straight for the coffee. You tell yourself, *Just this one
time. I'm definitely going to stick to my plan after
4 A Read the Future Skills box and do the task. this.’ But that one cup turns into two and then before
you know it, you're back to eight cups a day.
FUTURE SKILLS So, what's happening here? Well, you've given yourself an
Critical thinkin g impossible task. You can't go from eight cups to zero
] } overnight. You've probably been drinking coffee for a long
Writers use many different techniquesto time and you didn’t go from zero cups to eight overnight
— with isc influence their a ns either! So, tip number one: give yourself mini-goals that
useful and np ortant whils you are reading you can achieve on a daily basis. Going from eight cups to
to notice these techniques and reflect on the : : ; :
re Bre Ra The Oe BEG seven, then six and so on brings you the satisfaction of
sana “ tems 9 : a achieving a new goal almost every day.
’ Lo Another mistake you've made is that you haven't
Complete Exercise 4B to find out the writer's prepared for the triggers — the things that make you
purpose in using these quotes. want to ‘do’ the bad habit, which can be a feeling (e.g.
tiredness) or something external (e.g. the smell of
B Look at the article. What is the writer’s purpose coffee). When changing 4 habit, Jou need to be ready
for using the quotes (1-5) in bold? Choose at least for these moments, which brings us to tip number two:
two purposes (a—e) for each quote. when a trigger makes your brain scream for coffee
& HeraateycennEctswit the reir ihe (or whatever), just stop and focus on that feeling. Tell
reader can imagine saying or thinking this yourself “Yes, I knew there would be moments like
b to make the passage more interesting, the way this.’ Then pour yourself a glass of water.
dialogue does in a story And that leads to the next point: just do it! Your brain
c to give the reader an idea of what to do in the says coffee and you have a water. Skip the argument
situation (with yourself), just do it, just pour yourself that glass
d to give an example of the suggestion that was of water. Do you keep putting off a difficult task that is
just made, to make it BEE actually important, and take the easy way instead? Tell
e to help show how the tip might work in practice yourself, *I have one task, one goal. Just do it.’ Do you
} i i i ook at your phone too much at night? Well, turn it off,
Bork wr = 5 look at your ph h ght? Well ff
MERA PANT SRS IS det, put it in another room and go to bed. Just do it.
1 Which of the tips in the article do you think are : - : St :
the most and least useful? Why? Finally, from time to time it's important to remind
2 What other advice would you give someone yourself of why you're doing this. Remember, all that
who is trying to break a bad habit? coffee makes you feel nervous and you know it’s bad
for you; your goal is to be a healthier person. Say it
to yourself, out loud. You'll be surprised how much
motivation you'll feel.
21`,confidence:87},22:{text:`Unit2 | Lesson A
GRAMMAR SPEAKING
present perfect continuous 8 A Make alist of three to five lifestyle habits you want to
6A Fi 5 change, and how long you've had each habit. Include
A Find the time phrases at the end of the sentences (1-5). bad habits that you want to stop and good habits that
1 Before this | worked as a psychologist for over you want to start. Use the pictures for ideas.
ten years.
2 I've been helping people to change their habits 9
since the start of my career. PD nN
3 I've been trying to change my own habits recently.
4 I've been working seven days a week since | was
twenty-two.
5 You've probably been drinking coffee for a long time.
B Work in pairs. Choose the correct words to complete
the rules. Use the sentences in Ex 6A to help. |
1 We use the past simple for actions or situations that Nd.
are finished / unfinished. SN - S igh
2 We use the present perfect continuous for actions x |
or situations that are finished / unfinished. —_—
3 We form the present perfect continuous with have
+ been + -ing form / past participle.
4 We use since to talk about a period of / point in time.
5 We use for to talk about a period of / point in time.
C Learn and practise. Go to the Grammar Bank.
J page 108 GRAMMAR BANK
B Next to each item on your list, make notes about the
steps you can take to change or start the habit.
PRONUNCIATION
7 Kf b . h C Work in pairs. Talk about each habit, what you've
ARJ2.01| oe orm al een | Litem $0 he BEENCES been doing to change it and what you're going to do
(1-4). Underline the main stresses in each sentence. to change or start it. Give each other advice on steps
How do we pronounce been? foddie
1 How long have you been studying English?
2 I've been studying since | was ten. )
3 Have you been living in the same place for a long Pvebeen... for years. Now I'd like to ....
time?
4 I've been living there for five years.
I've been trying to stop/start
B LJ 2.02 | Listen and repeat. ...and now it’s time to...
F - I haven't been making an effort to ...
b | I'd like to take up ...
-)
vv <¢ I've set myself a goal of ... and I'm going
— to try to stick at it for...
3 “Ab
D Talk to other students. Find goals that you have in
~—— common. Tell each other your ideas for those goals.
i -
£ - a “NY 9 At home, choose one habit from your list in Ex 8A.
yp v Do research about how to change that habit, or how
y to startitif it's a good habit. Make notes of the new
- ideas you find and prepare to tell other students in the
¥ 4 y next lesson.
22 l <a ry
> y`,confidence:86},23:{text:`yy." 2B
rp Ba Pog ]
lee oa
Loe = = $3
People i» 7/0
| 4 ya JZ, ih ¥
Te fF PY
pLeaser 4 cadlle
GRAMMAR | relative clauses — ) Ld
VOCABULARY | collocations: feelings and behaviour | |
PRONUNCIATION | chunking in relative clauses 1 .
7
VOCABULARY izzzzzzzzzz
collocations: feelings and behaviour Are you a
1 A Work in pairs. What do you think a ‘people pleaser’ is? How 1 1
much of a ‘people pleaser’ are you? Give examples. peop e Pp easer?
B Do the quiz and read the key. Discuss your results. A
Read each sentence. Put two ticks (vv)
2 A Choose the correct option (a or b). Use the quiz to help. if it’s completely true for you, one tick (v)
1 When you make a comment about something, if it’s partially true and a cross (X) if it’s
a you say something negative about it. not true.
b - say something Be or gn about it. 4 Whenl get dressed. I think about the
# When you get upsetiaboub something; comments that people will make about
: you pecome unhapmy, ner ana. my clothes.
oy REIS ry Warmed AISLES, 2 When I post something on social media
3 When you avoid an argument, . 3 FN
- and it doesn’t get many ‘likes’, I get upset.
a you try not to disagree with people. ) :
b ee . . 3 [avoid arguments. When I'm with a group
you don’t join in any discussions. : ) ;
and I disagree with everyone, I keep quiet.
4 When you do a favour for someone, ] ]
a you do something that they ask you to do. 4 hardly ever say no if a colleague or friend
; asks me to do them a favour, for example,
b you ask them to do something for you. : )
ed to give them a lift somewhere or lend them
5 When you're in a bad mood,
money for lunch.
a you feel unhappy or angry all the time.
- : 5 If someone is in a bad mood, for example,
b you feel unhappy or angry, usually for a limited period. : : :
: : angry or sad, I feel guilty about it even if
6 When you feel guilty about something, os
) it's not my fault!
a you are understanding about someone’s problem. iE
b you feel bad because you think you have done 6 Forme, it’s better to be a host than a guest.
something wrong. I feel more comfortable.
7 When something is your fault, 7 A positive comment from a stranger feels
a you are the person who is responsible for the problem. better than one from a close friend.
b you feel there is something wrong with you. 8 If don’t feel like doing something but my
8 When you feel comfortable being or doing something, friend really wants to, I'm happy to do it.
a you strongly want to be or do it.
b you feel calm and relaxed about it. i
B wien you Tad UH dieing SamEthife; Count the ticks, and find out if you're a people pleaser.
a you enjoy doing it.
b . 12 or more ticks: You're a true people pleaser.
you want to do it. M ks
. aybe you need to think more about yourself and less
10 When you're happy to do something, about other people.
a you don’t mind doing it. 8-11 ticks: Sometimes it's a bit too important what
b it makes you feel very positive and good. people think about you, but you seem to take care of
yourself.
B 2.03 | Work in pairs and listen. Say what's happening in 7 or fewer ticks: You're not a people pleaser.
each situation. Use the correct form of the phrases in bold You don't let other people's expectations and feelings
in Ex 2A. direct your actions.
1 He’s happy to help.
23`,confidence:83},24:{text:`Unit2 | Lesson B
LISTENING PRONUNCIATION
6A | chunking in relative clauses | Work in pairs and look at the
3A)z2.0a | Listen to the podcast. Are all sentence below. Find a relative clause and the noun it refers to.
three speakers, Greta, Colin and Anna, I try to avoid people who lie.
‘people pleasers’?
. i B LJ 2.05| Listen to two different ways of pronouncing the sentence.
B Work in pairs and look at the examples Which one is correct?
the speakers give in the podcast. How is ’
each one connected to the idea of ‘people 7 A £2.06 Listen and write the sentences.
pleasing’?
1 working late B Work in pairs. Find the relative clauses and the nouns they go with.
2 anew dress C RJ 2.06 | Listen and say the sentences at the same time as the
3 pizza or sushi speaker. Pay attention to chunking the noun and relative clause.
4 afilm .
5 a negative comment on social media 8 A Change the sentences in Ex 7A so they are true for you.
6 aterrible idea at a meeting B Work in pairs and tell each other your ideas. Ask one question for
each sentence. Remember to say the nouns and relative clauses
Cc 2.04 Listen again and check your without pausing between them.
ideas in Ex 3B.
A: | try to avoid people who have very strong opinions.
4 A Look at audioscript 2.04 on page 158. B: Why do you do that?
What phrases do the speakers use to
introduce the examples in Ex 3B?
3
B Work in pairs and discuss. How would you | SPEAKING | / NO,
behave in the situations in the podcast? Ye 5.
Give examples of any similar situations 9 A Look at the list of ways to say no. ie [2/3 course!
you have experienced. Tick the ones that you think are & 7
good ideas. oK -—
_ pees
I —— Xe L- i Sure!
GRAMMAR —
People pleaser no more! 1 —
relative clauses Tips for saying NO!
BA Chobe ties correctaltamatives foreach The party you want to avold a The overtime work you don’t
Ir a— want to do ... The lunch invitation from an old friend you
Co don’t want to see ... You can say no!
1 I think people which / who / that
care too much about other people’s 1 Prepare in advance. Practise what you're going to say.
eRe ks weisting VIET Tine. 2 Say something nice first. A positive comment first makes it
2 | don't pay attention to comments easier to hear and accept the no.
which / who / that are negative. ] )
3 We were talking about a film which / 3 Don't delay. Don't be the one to say yes because you took too
who / that we'd just seen. long to say no.
4 And it’s even better if | don’t know the 4 Give a reason, but don't explain in detail.
pefson who says / says [ saying it. 5 Suggest an alternative, e.g. think of another time to meet.
A el il et oe Who baz dald / 6 Understand the tricks people use to turn your no into a yes.
7 Be gentle but firm. A message making it clear how you feel
B Work in pairs and answer the questions is easier to understand.
abeuEthe sentences in Exon. 8 If the person doesn’t take no for an answer, don’t say yes.
1 In each sentence what do the words Say nothing.
and phrases in bold refer to? -- LB
2 In which sentence can you leave out
the eae pronoun: who, which or B Work in pairs and discuss the questions (1-3).
aden. 1 Which of the things in Ex 9A do you normally do?
3 In sentences 4 and 5, what can we use 2 Which dari do?
instead of a relative pronoun + verb? ICRONES dantyoldos
3 Which ideas would or wouldn't work for you? Why/Why not?
C Learn and practise. Go to the A: | think preparing in advance would work because it would give
Grammar Bank. you time to think about what to say.
[J page 109 GRAMMAR BANK B: I don’t think it would work for me. I'd forget what I'd planned
to say!
24`,confidence:86},25:{text:`2B
WRITING 1 1 A Look at the sentences from emails (1-8). Are they
saying no (N), giving areason (R) or giving an
emails to decline invitations alternative suggestion (A)?
10 . . . 1 I'm out of the office all day. R
A en in oe Look at the events in the box and answer 2 I'm afraid that Thursday isn’t convenient for me.
e questions. : : ; :
q 3 Afraid | can’t. Will get back to you with another time.
concert conference mealout meeting 4 I'm sorry, | can't make Wednesday evening.
party sportsevent wedding worktrip other 5 I'min classes all afternoon.
——— 6 Sorry, I'm doing something else then.
1 Do you often get invitations id these events? 7 | wonder if we could arrange it for Monday instead?
2 Do you usually accept or decline them? 8 | have something else on.
B Read the email and answer the questions. B Work in pairs and look at the sentences in Ex 11A.
1 What event is the invitation for? Find two which are very formal and two which are
2 What will happen there? very informal.
To: Sandy King ° 12 A Read the invitations. Write an email to decline each
oo: oh lid ni : : one. Follow the order in Ex 10D and use the sentences
Suthers: aiedinaliche sl in Ex 11A for ideas. Think about whether each reply
Sandy, we need to meet to discuss arrangements for should be formal or informal.
our guest speaker programme this year. We're planning
to choose the speakers and to suggest topics for the =
lectures. We also want to decide on the dates. I'm Subject: Invitation to post-talk session
attaching the provisional agenda. Could we meet on
Thursday morning? Let me know if that works for you. Dear Student,
Regards, We are pleased to announce that our guest speaker
Pat on Friday evening will be Professor Hendricks. His
topic is prehistoric cave paintings. We would like to
invite you to a post-talk coffee and question session.
C Read two answers from Sandy. Which one is more Please reply by Monday 7th.
suitable for a work situation? How do you know? Regards,
1 Cathy Shepherd, PA
To: Pat Summers 2
cc: .
Subject: Re: Guest speaker planning meeting os lisa
Subject: Marketing campaign
Dear Pat, a 5 -
Thursday is no good for me. I'm very busy! #2) Do we Hi llsa,
really need to meet? If we do, let's meet next week some Are you free any time tomorrow? I'd like to have
time. a quick chat with you about the new marketing
Sandy campaign. I'm sorry it's such short notice, but we need
to talk. Can you get back to me as soon as possible?
2 BW
To: Pat Summers ° Mikael
cc: Greg Kaminski
Subject: Re: Guest speaker planning meeting < ” p
B Work in pairs. Read each other’s emails and answer
Pat, I'm sorry, but | can't make Thursday. There's another the questions.
meeting which | have to go to. Would you mind if we put 1 Do they follow the order in Ex 10D?
the meeting off until the following week? I'm free most 2 Decide if each email is formal or informal enough.
hh Sila 3 Which is the most polite?
ESE 4 Which is the least polite?
Sandy J
f= 4
D Number the items (a—d) in the correct order. Use the nin fe
second email in Ex 10C to help you. = Yi }
a Sign off politely. 1
b Make a suggestion for an alternative. —— /
c Give areason. <1
d Use a subject line that is the same as the invitation. — i | -
—`,confidence:88},26:{text:`/ : Fa ARE ic, - .-
Unit 2 | Lesson C ) P i Gri Lr ws po o J
us p j ; . | - i ig proc sgl . cof
WW : ; [ HR LTTE J i o
: ; NE —
2C That's ; Er
jr i if i AE
i= g
® i [le |
annoying! = 5
Er ly i
We 4 = V/ daa ~ }
7 HOW TO ... | talk about things that annoy you & gr )
® VOCABULARY | pet hates / £7 :
/ | PRONUNCIATION | stress and intonation to show annoyance A Sa
J 4 E <>
I's 7 a % Ee / k 7 — ;
J f y & Zo 4 ~~ : ye: > s. « ed
£ @, 5 Eo a Toni? es ; g 7 3
CW TN ar - a v \\
\\ y x! 4 A El , Me ; 4 md Fada 9’ 4 E
g Fa if (a pi Ee
VOCABULARY B Look at the word webs and find the collocation that
does NOT belong. Use the article in Ex 1A to help.
pet hates
1 A Read the article. Work in pairs and discuss the
questions. -
(problem )
1 How do you feel about each of the pet hates in the i
icle?
i get out of 2 the way
2 What are your pet hates?
- ive
about behaviour ui
in nublic? announcements
Everybody has one or more things that
really annoy them in public. Here are
some classics:
# when I'm in a hurry and the people in front -
J =
of me walk slowly and get in the way badly
# when public announcements in stations
[J 3 pe
are impossible to hear
J when I'm in a shop and the customer
LJ a . .
ahead of me is on their phone and ignores
the sales assistant
# when I'm waiting for a bus and people 7 toa
fit ass
jump the queue situation
when people throw litter out of car =
windows someone
# when children behave really badly in a
[J »
public place and the parents don't react or
do anything
J when I'm next to someone and they argue C Work in pairs. Tell your partner about something that
® loudly with someone on their phone annoys you on the street. Use the collocations in Ex 1B.
A: 1 hate it when | can see someone who needs help
So, those are our pet hates. and no one else reacts to the situation.
What are yours? B: Yes, | hate that, too. They just ignore the person
and pretend they don't see or they’re too busy.
26`,confidence:70},27:{text:`«Nv dr 2C
. »
an
- ¥.
——— PRONUNCIATION
oe oH 4 A | stress and intonation to show annoyance | Work in
\\ 4 a" \\ \\ S - pairs and read the sentences (1-6). What place are the
ry « i people talking about?
wt 45 1 I can't stand it when people take a long time to pay.
A Ps = \\ _— 2 It annoys me when they try to sell me something |
OES \\ 1° a don’t want.
i | a I 1h 3 It drives me crazy when people eat food while
~ EL | / shopping.
4 | hate it when | can’t reach something on the top
, shelf.
4 5 | can’t bear it when food is packaged in too much
; “- plastic.
/ » > 6 People are always jumping the queue.
# - |}
\\ | B LJ 2.09] Listen to the sentences in Ex 4A and
4 3 Ll A y underline the word with the most stress in each
7 sentence. Is the speaker’s voice higher or lower on the
key stressed word?
2 =» C Work in pairs. Student A: Say one of the sentences in
Ex 4A. Pay attention to stress. Student B: Say how you
— y y y
feel using one of the responses below.
Yes, that annoys me, too. Yes, | hate that, too.
Yes, that gets on my nerves, too.
I don’t mind that.
H ow to LL That doesn’t bother me. ont mindtha
talk about things that annoy you
2 A Work in pairs and discuss. What things annoy you about
people’s behaviour on public transport? Make a list.
B [2.07] Listen to the conversation. What things do 5 A Work in pairs. Choose three of the situations. Think of
they talk about that are on your list? three or more things that annoy you in each situation.
3A Workin pairs and complete the sentences with two or i bse
three words. + on social media
1 B: Were there a lot of people on the train? * hs SRE
A:No, not many, but it’s just the way some people * with neighbours
behave. | it. « with a flatmate or roommate
2 A:First | had to queue to buy a ticket because the + onan online video call
ticket machines were broken. « onaplane
B: | hate happens. « inarestaurant
3 B: People doing that on trains! | expect it
smelled bad. B Work with other students. Choose one of the
A: Yeah, the smell was terrible! It really situations. Tell each other what annoys you and why.
nerves. Listen to other students and say how you feel.
4 B:| know what you mean, without asking anyone? . 3 A
. y gany C Tell the whole class which situations came up the most
A: Yeah, it me when they do that. 5 < 7
i in your discussions.
5 B: You're so upset about things. And you're
here now.
A:But that sort of behaviour me. MEDIATION SKILLS $2
summarising skills
B £2.08] Listen and check. p :
summarise an article
C Learn and practise. Go to the Grammar Bank.
» page 146 MEDIATION BANK
Ld page 110 GRAMMAR BANK
Speak Go to the interactive speaking practice 27`,confidence:82},28:{text:`Unit 2 | Lesson D
a -
: SPEAKING | discuss difficult situations 2
WRITING | a personal experience pms = = a : :
EEE BE Te i pre i
: ' . Go ARIE ie. . 1 > red Wt, Eh
Ek v 1 k 5% - ’ Ee whe he \\3 fir FS GOT. ~ | &
a os 3 ; Po y . ai go x : +2 >.
. - - + A LH ter ve ik CEE EE ATE" a 5
i oA He ne r— a
PREVIEW Ee” rE
: BRE a.
oy ; : Bs ns ERR LW -
1 A workin pairs and answer the questions. SL ay : Eo LEBER CRD win
1 What wildlife programmes are popular in your So ! FR ’
country? : pA b Lo #5 ¥
2 Why do you think people enjoy these kinds of rks - Wh :
programmes? % EEE.
. 3 In what ways do they affect our attitudes to the ed : WL SL
natural world? a Fy
> B Read the programme information and answer Fan eo "2
y the questions. : ar EY
1 What is the animal in the photo on page 29? ’ Ee »
2 What does it want to do?
3 How do you think it can escape?
4 What ‘extraordinary ability’ do you think it has? VIEW
: 2 A [J watch the BBC video clip. Check your ideas in Ex 1B.
5 Ne F A B [p> | Work in pairs. What does the speaker say? Choose 3 :
i |! the correct words. Then watch again and check. Rh Ac
—5 BAN 1 He's only the size of a pen / pencil and he eats ants.
7) 3 2 This one tree could provide him with all he will ever
~~ » ) \\ need / eat, a conveyor belt of food. ; !
v SU ah 4 3 The owner's not only intimidating, he’s prepared to
9 ) fight / battle. gk
wl B | B | 4 Now he must choose — fight or flee / run away. Sab
5 Only in the jungle do you find lizards that can soar /
fly like dragons.
Planet Earth II: Jungles 6 Maybe this new tree will have food and no present /
resident owner.
David Attenborough celebrates the amazing variety of mo Lan
the natural world in this epic documentary series, filmed C Work in pairs and discuss the questions.
over four years across sixty-four different countries. This I ———
episode takes us to the jungles of Malaysia, inhabited by P get:
creatures with extraordinary abilities, such as the Draco A — ]
lizard. Watch as a Draco lizard faces danger and has to .
skunk spider wasp
choose between fighting to make his home in a tree or J
finding a way to escape. Will he survive? 2 What do you think the ‘fight, flight or freeze
responses’ to danger mean?
28`,confidence:70},29:{text:`=r 2D
p. .
#
% 2
£ B | 8 : oy
3 7% -
’ : A Wd
At » hg
fo. » TWEE
TL fr
Loe we
ao BEE WRITING
~ Nenad = WA a
2 oe . a 3
RRR, a a personal experience
Net > 8 oa b230 i rama i . oe
Li GL ee = BE 5 A Read the story. What would you do in the same situation?
i v Ro es
Sea Al Pa 8
call TD Not what it seemed to be
| SPEAKING | A few years ago, I was living in New York City
SPEAKING and I took the subway to work every day. One
Re m— £ E morning I was on a crowded train, * sitting
difficult situations and reading when I heard some shouting near
3 A Work in pairs and discuss. What response would you me. Two women were having ail argument. They
have in these situations: fight, flight or freeze? stood up and started really yelling at each other.
- i A couple of people near the two women moved
1 You see a snake in your bedroom. 2 ;
i ) ) away? .All the other people were looking at
: 2 You're alone at a friend’s house and it’s winter. tis
Someone knocks on the door. It’s ten o'clock at night. :
3 You're walking along a street and a big dog is At that point I noticed a third woman trying to
coming towards you. It's growling. You can see the take a wallet out of a man’s pocket without him
owner in the distances knowing and I realised that the argument was
4 You're ona train and the person opposite you drops fake. Everyone was listening and not paying
their empty drink can on the floor. attention to their own belongings, so they were
B 2.10| Listen to the conversation and answer any targets for the Tickpociek I shouted loudly,
the questions. bobo ore ot s a trick, feng ew on
1 Which situations in Ex 3A do they talk about? Wales re Hie two Women 8 es
5 ibid h \\d doinih and the third woman walked over to me
(hatunes the:woman say sie would de inne and kicked me in the knee. She got off at the next
situations? -
stop, along with the two other women. # The
c [2.10] Listen again and tick the phrases you hear. next station was my stop, too, but I decided to
wait a few more stops before I got off!
KEY PHRASES
And then what? B Look at the words and phrases (a-d) about people’s
How do you mean? feelings. Find the place in the story (1-4) where each
That's a tricky one. one fits.
I'd like to say that I'd ... a nervously c angrily
| don't quite get what you mean. b We all felt relieved. d feeling quite relaxed,
Could you say more about that? 6 . .
ERIE RAE TR AEAL [Fad hegtata A Choose one of the situations on page 140 and make
Why's that? notes for a story about what happened - either a true
y . story or one you make up. Use these questions to help.
Do you mean that... ? Wh — 5
Oh, no question in my mind. | would definitely ... ere al = ) Le TIRPRe
» What was the situation? i
. « What were the main events?
D Which of the Key phrases ask someone to give more + How did people feel at different points in the story?
detail about what they have just said? » Howdiditend?
4 workin pairs. Look at the situations on page 140. B Write your story. Use your notes from Ex 6A to help.
Use the Key phrases to say what you would do in each . . .
situation or to ask your partner to give more detail. C Work in pairs. Read each other's stories. Would you do
the same as your partner in the situation they describe?
29`,confidence:79},30:{text:`rr REVIEW
GRAMMAR VOCABULARY
present perfect continuous 3 A Add vowels to complete the phrases (1-12).
1a Complete the sentences with the present perfect 1 ch X= goals 7 _gnr SRHERE
continuous form of the verbs in brackets. 2 _rg__with someone 8 k__p on doing
3 ; 3 _v__darguments 9 make ac_mm_nt
11 (try) some new ideas for recipes. age na, 5 =
2 We (practise) the violin. We have a concert SSRMISONCS) m_n_g_todo
Rext weak: 5 dosomeoneafv__r 11 setg__ls
3 She (research) a story about how the 6 feelg__lty 12 t_k_up something new
government lost the election. She has a deadline Lo .
tomorrow. B Work in pairs. Choose one of the topics (1-3) and talk
4 They. (talk) with some new clients. They're about it. Use at least three of the phrases in Ex 3A.
interested in buying our products. 1 a change you've made in your life that was difficult
51 (mark) exam papers, which | need to give to make
back to my students this week. 2 things that bother you when you're trying to sleep
. . . . 3 atime that someone was angry with you, or you
B Think of a job to go with each sentence in Ex 1A. were angry with them
Write two or three sentences that this person could
say at the end of a busy day. Use the present perfect 4 A Choose the correct options (A-C) to complete the text.
continuous.
I've been interviewing politicians. I've been reading Taking the pain out of the wait
through reports.
Waiting ina queue! most people crazy,
C Work in pairs. Take turns to say your sentences. Can and that’s bad for business. So businesses
your partner guess the job? 2 alot of effort to solve this. When high-rise
buildings became common, waiting for the lift was
relative clauses frustrating for anyone whowasina? ___ ,and
there were lots of complaints. So mirrors were put
2A Complete the phrases with the words in the box. Put next to the lifts and complaints dropped because
—ifit's possible to leave the gap blank. More than one it gave people something to look at while waiting.
answer might be possible. An airport was“ getting complaints about
- :
Te th ohn Wiens mito: who Whoa the long wait for baggage. When they moved
the arrival gates further away, complaints about
1 the last book you read waiting stopped, and noone got® about
2 atime of day you feel the most relaxed the longer walk. When a new electronic product
3 SERRA you'd like to meet comes out, there can be long queues, and people
6 outside a shop can be a real problem.
4 the best places eat lunch near you : y
ME — ——— Danish researchers found a solution: serve the last
) Re people? first. That way there's no reason
6 afilm. almost made you cry
) ) to show up early. As far as we know, no other
7 the phi PERSON ; teach you English countries are ® to try out the Danish solution
8 an ability i you wish you had —we can guess how people might® toit.
9 anearby café they make great coffee Most people would probably stick to their belief
10 a person makes you laugh that first-come, first-served is fair, and anyone
i 10 the queue is just behaving rudely.
B Work with other students and take turns. Choose one
of the topics in Ex 2A and ask the other students to ]
talk about it for one minute. 1 A causes B gets C drives
2 A make B do C have
3 A way B hurry C speed
4 A constantly B ever C continual
B 5 A far B tired C upset
re . )
° ne 6 A camping B camp C who
» - . » 7 A arrived B who C to arrive
La 3 wi, 8 A thinking B intends C planning
- ry . 9A a B pa Cc Argue
\\ 10 A jump B jumping C jumps
a : V =
— -— \\ B R2.01 | Listen and check your answers.
a . > ah
TT
30 — | = er
pe a ; 2`,confidence:82},31:{text:`p ” h 3 ~ yr — 4
ie 5 1
| 1 1 AS
- | |
i | [
[ v i ip | rr.
J Ps We
I fp a | / bo J I - ry \\ vy |
- | ¥ 2 y p
| J lL |: > p TS ,
=a 1 J mes. WS
4 1 y NY 3A
\\ Fe . 1 ) pS ey ; f Wi |
a / \\
r Mes § oo \\
_-" ; se — y —— AE
033 | i { [1 — L_4
- / A £ Find cian i |
- d “ " 3 & =
- { aa i
.
A - = | \\ \\
= |
CT — x EE rm p |
Golf| ——Mm — — — — 00
Scale of
bsg Engish LEARNING OBJECTIVES
-
I Eo 3A READING | Understand an article about famous authors
y 9 working from home: work phrases
py \\ Pronunciation: stress in phrases
N Talk about your approach to work or study: conditional
structures: unless, even if, in case (of)
3B LISTENING | Understand people talking about the gig
economy: work
Talk about what’s important in a job: necessity, obligation
B B| and permission
Pronunciation: elision of /t/
VLOGS Write a cover email for a job application
Q: Where do vou prefer to work 3C HOWTO... | take part in an interview: personality
* tudv? Joup adjectives (1); negative prefixes
CRE He Pronunciation: word stress in personality adjectives
3 watch the video. Which pl
1 EEE 3D BBC STREET INTERVIEWS | Understand people talking
ESR : about their preferred jobs
2 Where do you like working and why? ‘This or That?’ questions: expressing preferences
Write a discussion board post
31`,confidence:63},32:{text:`d | f
Workin ag 7
9 ‘af NE Sa
) )
from home ‘a B
he YS = & his vy ™ —
GRAMMAR | conditional structures: unless, 5 4 5% { ER ¢ 0 ‘ 2 = 23 i
even if, in case (of) — | 5 AR 1 g fe 3 = 2 4
VOCABULARY | work phrases $F . l J = J
PRONUNCIATION | stress in phrases \\ 3 {; ~~
TT Ne A i —
; d ad 4
‘ p,- v. o. *
|. a [ A a
[READING |
1 A Work in pairs and discuss the questions.
1 Do you work or study at home? How the great
2 What's good about it? ° °
3 What are the main challenges? writers do it
B Read the article quickly and match the Many of those who started working from home in the past
headings (a-d) with the sections (1-4). few years have discovered that it can be incredibly difficult
a Another way (or ways) to work efficiently. Unless you're very focused, you'll find
b Classe aitRore oitines too many distractions and excuses NOT to work.
c Writers’ tips 1
d Then came the internet . . .
If there's one group of people with extensive experience
2 A Look at the tips in the first section. Which working from home, it’s writers. Writers have long had to
tips does each author follow? deal with the challenge of working from home, having to
Start early — Hemingway, Le Guin, meet a deadline to finish a book and to avoid distractions
Miirakarni that can make them fall behind schedule. And writers have
been generous with their advice.
B According to the article, are the statements . Start early. If you get difficult tasks out of the way, you'll
True (T), False (F) or Not Mentioned (NM)? feel more relaxed later on.
1 Writers have more experience working « Keep to a routine and do the same things at the same
from home than many other people. time every day.
2 Hemingway started early because he + Set daily goals. For a writer it can be a number of words,
wanted to finish early. for you it might just be hours of work.
3 Le Guin started writing at exactly 7.15. « Remove anything that takes your attention away from
4 Fleming tried to write at least 500 your work.
words a day. « Exercise regularly. Even if you live in a tiny apartment
5 Murakami doesn’t use the internet. in the middle of the city, you need to do some physical
6 Smith doesn’t want to answer messages activity every day.
when she’s writing.
7 Evaristo likes to find out what people :
think about the news. These tips could have been taken directly from the lives of
8 Angelou lived in a hotel. great writers. Ernest Hemingway began writing at 6 am,
because, he said, there was no one around to disturb him.
C Workin pairs and discuss. Ursula K. Le Guin used to wake up at 5.30. She spent
1 Which ideas in the article are the most the first 45 minutes of the day lying in bed, thinking,
useful for you? and started writing by 7.15, finishing her day’s work by
2 Which authors’ routines and habits are lunchtime. James Bond author, Ian Fleming, started his day
the most balanced? with a swim in the sea. Then he wrote from 9 till noon, had
3 Which writer's routine is most like yours? lunch and a nap and worked more from 5 p.m. He had a
goal of 500 words per day.
32`,confidence:85},33:{text:`3A
VOCABULARY
B Complete the conversations with the correct
work phrases form of phrases from Ex 3A.
1 A: This homework is really difficult. I'll do it later.
3 A Match the phrases in bold in the article with the B:No, doit now. Youshould it
meanings (1-8). 2 A:How was your day?
1 keep away from things which take your attention B:Great, | _.lfinished my essay, had
2 follow a plan or timetable, without changing it lunch with a friend, went to an online
3 do atask by a particular time oy and ten played tennis.
4 finish a large amount of work 3 A:What time will lunch be? | need to tell the
5 stop giving attention to somethin eT
Pg . 9 . 9 B: Sorry, we're a bit late, we've by about
6 be late in doing work or a task fifteen minutes. So | think it'll be at quarter
7 manage a difficult situation successfully past one.
8 finish something so you're free to do something else 4 A:ls your new job hard?
B:Yes,butlenjoy witha
5 A:You look good. Where have you been?
B:Foraswim.lalways ___ :6 o'clock getup,
6.30 go for a swim.
6 A:lsit OK if | turn the TV on?
B: Well, not really. I'm trying to The
sound of the TV would bother me.
7 A:What’s wrong?
B: It’s that music from next door. It’s making
me ______.lcan't think!
8 A:We've only got two days to finish the report!
B: Yes, do you thinkwe’ll 7?
Cc 3.01] Listen and check your answers.
PRONUNCIATION
8s 4A )3.02 | stress in phrases | Listen to the phrases
In the internet era, authors’ routines aren't necessarily from Ex 3B and underline the stressed words.
that different from previous times. Japanese novelist got a lot done
Haruki Murakami says he doesn't use social media at . . .
all, and describes his work day as going from 4 a.m. 8 oor Lien again. Which wi in each
till about 10, followed by a run or a swim; after that ee
he reads and listens to music, and goes to bed at 9 p.m. gota lot done
However, the digital world is a big factor for many c Planz | Liss — .
authors. Novelist Zadie Smith doesn’t have a smartphone wa La
and uses internet-blocking software on her laptop D Work in pairs. Student A: look at Ex 3B. Read out
in case she feels like reacting to news or messages. part A in each conversation. Student B: Answer
Australian writer Benjamin Law recommends an app using one of the phrases.
which turns off your social media and internet for A: This homework is really difficult. I'll do it later.
certain lengths of time so you don't lose concentration. . :
B: No, you should get it done now.
4
5 workin pairs and discuss the questions. When
Not every author hides from the internet. Bernardine you answer, give extra information.
Evaristo starts her day with two cups of coffee, then . .

. . 1 Do you usually get a lot done in the morning?
goes online to catch up on the news and opinions 2 FE vou TEELsaR yaa Fall Bair sched ala
about what's happening. She starts work after that and om he ons y ———— ’
keeps at it till 9 p.m., but not without taking breaks to Oy ED, dEreasIEias ks BLO Ene Wey

) . before you start difficult tasks?
exercise and take a siesta. : : ’
4 Do you easily lose concentration when you're
And not every writer writes at home. Poet and novelist working or studying?
Maya Angelou couldn't. She used to check into a hotel 5 What steps do you take to avoid distractions
room and put a ‘Do not disturb’ sign on the door before when you're working or studying?
she started writing. But wherever you work, if you follow 6 Is it important to keep to a routine?
the advice of these writers and use your time wisely, you 7 Are you good at meeting deadlines?
can get alot done, or at least you can finish your work 8 Do you usually deal well with unexpected
day faster and get away from your desk sooner! problems?
33`,confidence:85},34:{text:`Unit 3 | Lesson A
GRAMMAR SPEAKING
conditional structures: unless, 8A Whatis your approach to working or studying from home? Complete or
even if, in case (of) change the sentences with your own ideas.
6A Choose the correct words to " f : aed 4a > & “i

complete the sentences. Pon THE WORK/STUDY DAY %

1 If / In case you get difficult tasks EY three things I doare ... 4 ~
out of the way, you'll feel more Bn & 8 a
relaxed later on. wo : A

2 Unless / If you are very focused, I FF = [=
you'll find too many distractions i Ll )) p TT.
and excuses NOT to work. : _— &] .

3 Evenif / In case you live in a tiny ELE nm —_ a
apartment in the middle of the ’ DAILY SCHEDULE Te a
city, you need to find a way to do " lkeeptoa rc \\e and work/stu SN
some sort of movement every day. ar a = le = 4

4 She uses internet-blocking software EC . ;
on her laptop in case of / in case . : : :
she feels like reacting to news or EQUIPMENT (COMPUTER, PAPER, PEN, PHONE)
messages. The most important things

| have around me are ... f———
B Find words or phrases in Ex 6A : 5 | i

which mean: by He SRE

1 despite the fact that \\ I ei a 7 =

2 if not OAS

3 because (you/he/she) might a,

a INTERNET AND PHONE ACCESS
C Learn and practise. Go to the Sn lp | (would) only cut off the internet if ...
Grammar Bank. | never switch off my phone in case ...
| d page 111 GRAMMAR BANK - 8 KING BREAKS + He) Sp Bom eh) = I
| think you shou Id take reg ular breaks even if Pe RPELS N 5 Te =
7A Complete the sentences with unless, ; LIK YO! Hh dias [egal a Fa id FEAL a ML ATT Er
5 ; . I take a __-minute break every hours. Sen AE YA

even if, in case (of) or if. ea Wa hahaa th, el : : % i 7

1 | can’t work 1 have people pha iy) ys de te py &
around me. | like being able to | & Hea i FETs Sars 5 - U8 hes \\ VB ay
share ideas with others and | get 4 ER 3 ; > 4 f 4 IN
lonely when I'm working by myself. 4 414 AD | E— A /, \\ a

2 I turn off my phone, | still mr ¢ 0 ea EERIE a
find a way to check my messages. ~~. nmeme

3 | always keep food at my desk ae ~
| get hungry. / == = =

4 | have music on in the : or =
background when I'm working, SOCIALISING
| lose concentration. | don't like If | don't talk to someone every | E {3 ]
working in silence. SEINE

5 | could choose, I'd like to Pp | ?
have a mixture of studying online pe (
and face to face. ; Nn

B Change the sentences so that they . i E a

are true for you. a Wee \\\\ l = =

| always keep a bar of chocolate in =~ w= A

my bag in case | get hungry. ts - wr be ENDING THE DAY

NE ; | stop working (when?) even if... -
C Work in pairs and take turns reading == go peo mE =
out your sentences. Do you do the

same things as your partner? B Work in pairs and take turns. Student A: Talk about your ideas for two

minutes. Student B: Listen and ask questions. Which ideas would you like
to ‘borrow’ from each other?
C Work with a new partner. Compare the different ideas you have each
discussed. Choose the three ideas you like best.
34`,confidence:71},35:{text:`3B
i k
| 3B Gig wor Ww
- \\ }
GRAMMAR | necessity, obligation and permission 4
VOCABULARY | work | |
PRONUNCIATION | elision of /t/
VOCABULARY
B Read the text again. Which three questions
work in the text would you be most interested in
hearing answers to?
1 A workin pairs and look at five people’s statements about work. . . .
Which do you agree with? Which don’t you agree with? c Replace the wordsin bold in the QUESHONS (1-8)
Why/Why not? with the correct form of words in bold in the
1 I'd like to be my own boss. text ini
; 1 Did you have any chances to visit a workplace
2 | want to work at one company all my life. :
a when you were younger? Where was it?
3 It'simportant to me to choose when | work and when | don’t. ;
) : : : 2 How much background do you have in
4 For me it’s good to have a steady job. | like knowing what to working in a team? What is the most
expect day to day. challenging thing about it?
5 | don’t want someone telling me what to do all the time. 3 Have you ever planned and arranged an
event like a party or a conference? How did
B Work in pairs and read the definition of ‘gig work’. Which people it go?
in Ex 1A would prefer this way of working? 4 Would you be OK being in charge of
. . — . organising a friend’s wedding?
gig work = a job that usually lasts a short time; a gig 5 Are you good at dealing with the conflicts
worker is paid for doing that job only and is otherwise not in a work or school situation? Can you give
employed by the company an example?
6 What sort of short-term jobs are available
i tryin th ?
2 A Read the text about a webinar on gig work and choose the best pied RRL of THLE: SUBDIR
summary (1-3) 7 Would you like to make a long-term move
to Co } to another country? Where to?
1 There are positive and negative sides to gig work. 8 Do you think a company is treating workers
2 Find out if gig work suits you first before you choose it as a unfairly if it makes them work overtime?
way of working.
3 Gig work is a better way for young people to enter the D Work in pairs and answer the questions (1-8)
working world. in Ex2C.
Webinar: Introduction to Gig Work
Whether you're looking for your first job or looking for a new one, you'll find that
many opportunities are actually gig work rather than permanent contracts.
- More and more people are working as temporary workers, choosing what they do
: and when they do it, often doing multiple gig jobs at the same time.
A The idea of choosing when you work and when you don't can be exciting, but you
/ a - may well wonder: Is gig work for me? How do I get started, and how do I organise
of y my life? What do I have to be careful of, and will I earn enough to survive? Can I
». take responsibility for finding myself work from week to week? Can I handle the
\\ » ups and downs of gig work? How do I avoid being exploited by an employer?
oh Join our webinar this Saturday at 3 p.m. EST to find out answers to these and
\\ j many other questions. Our guest host is Andrea Butcher, an employment advisor,
\\ and two special guests who will share their years of experience as gig workers.
Click here to sign up.`,confidence:89},36:{text:`Unit3 | Lesson B
LISTENING PRONUNCIATION
6A | elision of /t/ | Work in pairs. Which phrases for
3 A Work in pairs and list the advantages and necessity, obligation and permission in Ex 5A have
disadvantages of gig work. afinal ‘t’ or ‘d’ followed by an initial ‘t'?
B RJ 3.03 | Listen to part of the webinar on gig work allowed to
from Ex 2A. How many of your ideas do the 8 [3.05 Listen and check your answers.
speakers mention?
c [3.05 | Work in pairs and list in. What h
c [13.03 | Work in pairs. Write Paul (P), Cybil (C) | Voss al wR EM Rr ar WH Ap ene
! i to the final ‘t’ or ‘d’ in the first word?
or both (B) next to the phrases. Then listen again
and check. D Work in pairs. Tell your partner:
1 does gig work by choice » two things you're not allowed to do at work or school,
2 does gig work by necessity college or university.
3 isn’t happy with the money » two things you've got to do today.
4 finds it difficult to say no to a job « two things you're supposed to do this week.
5 sometimes enjoys the work
6 works long hours sometimes
7 would say ‘There’s more to life than work’. SPEAKING
8 would say ‘I don’t have time for anything but work’.
Lo . 7 A Read the statements about work and put v/ if you
4 Workin pairs and discuss. strongly agree, v if you agree and X if you disagree.
1 Is gig work common where you live? What sort?
2 If you chose to become a gig worker, what sort of When you're young, it's
gig work would you choose? ‘not necessary to have : People should
job security, but later ~~ NER CJ be permitted to
‘in life it’s essential. = choose how much
X holiday they take
GRAMMAR each year.
gl
« . . a People should be allowed + NW
necessity, obligation and permission to work flexibly (choosing (&
their own hours, location, \\
5 A Work in pairs. Complete the sentences using the etc.) when possible. = ’
prompts in brackets. . <3 L/
1 Something needs to be done about the rights Be or } B ;
Foi Fors (need fd } = Everyone
ho og warkers. {need idol better if they c) ~ 7 needstobe
2 | like it because you when you work. are paid more. LN © tf ‘paid the same:
allow. chase] 4 5 “no matter what
3 Ifeelasifl _ yes to every offer that comes “work they do.
along. (have got / say) . ——
4 It a balance, to do enough work that you It’s good that computers and machines
actually enjoy doing. (necessary / find) “are replacing workers because people
5 It savings for times like this, for going on will have more free time.
holiday or if | get ill. (essential / have)
6 People act like you a big goal in life. B Work in pairs. Choose two statements to discuss in
(suppose / have) detail. Say what you think and why. Tell your partner
what you think of their opinion.
B RJ 3.04 | Listen and check your answers.
I'm not sure about that.
C Work in pairs. Answer the questions (1-4) about the | agree up to a point, but don’t you think that ...
sentences in Ex 5A. I'm completely with you there.
1 Which phrases are about necessity, about
something that is very important to do? needs to, C Choose one statement. Ask at least three other students
2 Which phrases are about obligation, about their opinions and make notes.
something you are expected to do? . .
3 Which phrase is about something you should do, D Work in groups. Take turns telling the group about other
but maybe you don’t? students’ opinions on your statement. Use the phrases
4 Which phrase is about permission? below to help.
Everyone agreed that ...
D Learn and practise. Go to the Grammar Bank. | found it very interesting/surprising that ...
| 4 page 112 GRAMMAR BANK Two people said they think that ...
There were mixed opinions about ...
36`,confidence:84},37:{text:`WRITING 9 A Read the cover email for an application to one of the jobs
in Ex 8. Which job is the person applying for?
a cover email for a job application
N Gi Dear Ms Patel, ©
8 Read the job adverts. Which job would be better ; ; ;
for you? | am applying for the job as a ... with your company.
| am very interested in this job. Your company looks like a good
place to work and it has excellent feedback on your website. | am a
: student at college and am looking for a part-time job to fit in with
Elaine Events Ltd. my studies.
3 | beleive | am a good candidate because,
Edinburgh + | have recent experience of working in a hotel reception where |
had to deal with many diferent guests.
5] o + | am reliable and friendly.
! tbat + My English is level B1.
+ | know the city very well. | live here for three years now.
Events Assistant " Ihewasmariuhops.
+ | could start immediately.
We organise events including weddings, corporate | have three questions. Is it necessary to have my own bike or will
functions and all kinds of parties, and we are you provide that? Am | supposed to work every evening or am |
looking fora friendly, reliable, flexible person to allowed to choose the days | work? Do | need to wear a uniform?
work on individual events in a variety of roles. I look forward to discuss my application and | will phone on
Monday to check?
You will transport and set up equipment and Best wishes,
= ii food and i ln clients, Xavier DuPont
take part in the clean-up and help wherever it
is needed.
B Number the sections (a—e) in the correct order. Then look
No two days are the same! A
at the email and check.
Previous experience of working on similar a Ask questions (if you have any).
events preferred. b Close the letter, saying when you'll contact them.
Intermediate (or higher) level of English ¢ State the reason for writing. 1
preferred. d Say why you think you're qualified.
Apply e Say why you're interested in the job.
C Look at the email again. Find and correct:
1 two mistakes in the grammar.
- = 2 two mistakes in the punctuation.
® Kwi kClickFood 3 two mistakes in the spelling.
Dublin 710A write a cover email for the other job or for a job you
0 2 would like to apply for. Pay attention to the organisation
of the email.
LEN J
. . B Check your email carefully for mistakes. Then swap with
Delivery Rider another student and check each other’s emails.
E-bike riders urgently wanted for fast delivery C Read the emails of other students in the class. Then work
across Dublin. in pairs and tell your partner about an email you read.
KwikClickFood takes restaurant food to —
a
customers around central Dublin. p ==
We are recruiting part-time staff right now for A A,
evening work. al h ws 1 : i
a 4 &
Are you organised, reliable and independent? ! . py, 4 g
Are you good at dealing with people? .
LY BN i
Do you have a smartphone? — y f — §
Training provided. :
- “1 -
Apply \\ Ce
3 =: 4
ER /
2 | 5A
\\| /`,confidence:87},38:{text:`”:
Unit 3 | Lesson C 5
Good gs | hy
y v Fe :
ti Ed - {S
HOW TO ... | take part in an interview | ] 3 oy
VOCABULARY | personality adjectives (1); negative prefixes Ne or
PRONUNCIATION | word stress in personality adjectives jg ot A /
| a [ : )
1 | aa
VOCABULARY 2 A Which four words in the box does the
interviewee use?
ersonality adjectives (1 —————————————
P ty ad) ( ) confident enthusiastic flexible
1 A Work in pairs and discuss the questions. independent professional
1 Have you ever had an interview for a college or university course, responsible sensitive willing
or a job? Were there any questions that surprised you?
2 How would you answer the interview questions (a—c)? B Find the phrases in the text that give the
a Which magic power would you most like to have? meaning of those four words in Ex 2A.
b How do you fit an elephant into a fridge? C Complete the sentences (1-4) with the
c If you could rob a bank without being caught, would you do it? Giherfolif words IRER2AL
3 Why do you think interviewers might ask questions like this? 1 Ifyouare you are sure you can
B Read about an interview and look at the questions the interviewee dezspmering very well, .
answered badly. How would you answer them differently? 2 If you are »you dovery high-
quality work.
3 Ifyou are to do something, you
will do it if someone else asks you.
M t : bl : t - 4 Ifyou are , people can trust you.
y erriole interview You behave in a sensible way.
| had prepared answers to tricky questions that would show how
creative and practical | am, but instead my interview was very PRONUNCIATION
straightforward. It went something like this. 3A | word stress in personality adjectives |
; Work in pairs and look at the words in
lierviewer: Wity do yod want Gus job? Ex 2A. "ime many syllables are there in
Me: Well, mainly because | need the money. each word? Which syllable is stressed?
Interviewer: What three words would your closest friend use to .
describe you? B RJ 3.06 | Listen and check your answers.
Me: Erm, | don't really know. I'll need to think about that. c [113.06] Listen again and repeat.
Interviewer: How much of a team player are you? Co .
; / : ; : D Work in pairs and discuss.
Me: I'd say I'm very independent, | like to do things on my own. So | ) ) )
don't need to ask for help. 1 Which words in Ex 2A describe you
best? Give examples for each.
Interviewer: Why are you the best person for this job? 2 Which qualities would you like to
Me: Well, | don't know the other applicants, but it seems pretty easy, so | develop most? Why?
think | might be as good as anyone. 3 Think of a person you admire. Which of
Interviewer: What's your biggest weakness? these qualities do they have?
Me: Maybe I'm too sensitive, | get very emotional when people give : : :
me negative feedback. And I'm not all that flexible. | like to do things 4a which word n Exh has ms 3 ve
my way. | don't like change, but | am enthusiastic. | get very excited and pres What prefies ca theother: BN
interested in new ideas. adjectives take to make them negative?
Interviewer: How do you fit an elephant into a fridge? B Check your ideas in the Vocabulary Bank.
Me: I'm so glad you asked that ... ™ page 133 VOCABULARY BANK
Of course | didn't get the job, but | learned a few important lessons. Begabve frefies
Prepare for the basics. Remember why you're there. And be honest, but
not too honest.
38`,confidence:85},39:{text:`3C
H ow to eee 7 A Read the Future Skills box and do the task.
take part in an interview
FUTURE SKILLS
5 A Look at the job advert. Work in pairs and answer Job interviewing
the questions.
In a job interview, as in any conversation, it’s
important to make completely sure you understand
Programmer needed Rn» a question before you answer it. You can do this by
asking for clarification, repeating the question in your
We're looking for a programmer to join our team. own words or asking another question.
This person will work on-site and remotely, }
and will be responsible for developing company Look at audioscript 3.07 on page 160 and find three
software. Knowledge of JavaScript and two more examples of the interviewee doing this.
years’ coding experience are required. Good
communication skills and a high level of creativity B Learn and practise. Go to the Grammar Bank.
are also essential.
| 4d page 113 GRAMMAR BANK
Salary will depend on the level and type of
experience. Full-time is preferred, but part-time 8 Workin pairs and take turns. Student A: Ask Student B
may be considered. one of the questions below. Student B: Use a checking
phrase to clarify the question before you answer.
1 What sort of person would answer this job advert?
2 Would this job interest you? How would a colleague or classmate
3 What questions might the interviewer ask? describe you?
B LJ 3.07| Listen to the interview. Which of the
questions in the text in Ex 1B does the interviewer What are your main strengths?
ask?
6A Workin pairs and complete the sentences by adding .
TWO words to each gap Tell me about a time that you
) learnt from a mistake.
1 A:So, tell me about yourself.
B: Oh, erm, 2where should ?
A:Let’s keep it work-related. What motivates you, and what makes
B: All right. you feel unmotivated?
2 A:So why are you here today?
B:*How do ?
A:*Why do you want > ies di you deal with stressful
B:S1 some research about the company and | )
think it’s ...
3 B:lwant to be part of that, and I think | have a lot What ase your lonig-teem goals?
A: OK, so "what will you the company?
B: 8 think one of my is that | have a
problem-solving mind ...
4 A:l have more questions, but let's turn things | SPEAKING |
around for a bit. “What questions do you have
? 9 workin pairs. You are going to roleplay two job
B: °About ? interview situations. Student A: Go to page 138.
A: About the position, the company, anything. Student B: Go to page 140.
B LJ3.08| Listen and check your ideas. SON
MEDIATION SKILLS
C Match the phrases (1-10) in Ex 6A with the correct asking people to explain 4 e
t 5 .
SERIO their reasons
AS FR choose a candidate for a position
Phrases to check
Interviewee’s answers » page 148 MEDIATION BANK
Speak Go to the interactive speaking practice 39`,confidence:89},40:{text:`Unit 3 | Lesson D
AFI EA Cipvant Intaruiannre P
3D Ek
=
® A h ! —
EE . b ] o_
fe : - 1 i
i i ~ %
< y 4
F 4
| [|
“. bg ~ wr -
i) p— XU |
ww __vumeeay BE "Rl
GRAMMAR | expressing preferences 5S J \\ : R
SPEAKING | ‘This or That?’ questions - Ay ijk
WRITING | a discussion board post
VIEW
2 [> Watch the first part of the video. How many speakers talk about
more than one job? Who wanted to work in something connected to
sports or entertainment?
3 A [J watch the second part of the video. Which job does each
PREVIEW speaker prefer?
1 Dara a teacher 6 Daniel
1 Work in pairs and answer the questions. 2 Monica 7 Sky
1 What did you want to be when you 3 Des 8 Rohan
were growing up? #4 EH 9 AGE
2 Look at the jobs in the box. Which 5 Tigh
ones would suit you most now? Which
i ? ?
NRA eT | Cin Ge B [J Work in pairs. Complete the things that the speakers say.
Then watch the second part of the video again and check.
actor astronaut astronomer
doctor electrician fashion designer 1 Dara: |like and I'm quite used to working with .
footballer lawyer musician 2 Monica: I'm very interested with what’s happening with
photographer the =
L = 3 Des: | think | could reach more by writing books and
| could work from .
i TT, 4 Eva: | don’t like with people.
eng FN 5 Tian: like with people.
&° p 6 Daniel: | do my own and | really enjoy it.
i = - | 7 Sky: |like being outside in :
- 8 Rohan: [love and | would love to share a good
4 F pod § me as well.
3 L 9 Anais: | think it would just be pretty cool to make some
PF 4 cool .
/ xf »
I ! GRAMMAR —
A B |B fC |
0 59 = "expressing preferences
Q1: What did you want to be when 4 A Choose the correct words to complete the sentences.
you were growing up? 1 I'd prefer / rather be a journalist.
Q2: Which would you prefer to be... ? 2 | would / had rather be a teacher.
. ateacher or a chef? 3 I'd prefer / rather to be a farmer.
« an actor or a journalist? 4 I'd definitely be for / go for an author.
. i ?
an author onan engimest: B Learn and practise. Go to the Grammar Bank.
- afarmer or a politician?
Ld page 114 GRAMMAR BANK
40`,confidence:75},41:{text:`ol - - AS
\\ i \\ 3D
|} > { - < ,
» E RQ
” E \\ fowd® JN b 2 LN)
Sigh mm | BlBjC
[ — El ie — )
Al [ke -~,
Bl — ACM 1 a
ves L LA CAE £9 -
| . | atl ~ ; 3 os . | w.. \\ pe ey ¥
UT i par 4
| * | 4 ~ y ; Ll EER . = -
ks " Pe wv = _- ri ne, 1 A [
\\ is mm / -~
Sky Daniel 2.7 —~ * -
- ai — ,
. “
0 : Do hie
@ WHE
) y Ea - .
v Go. ¢
p | Ww 18% ~f a discussion board post
1 Se b= 7 A Read the comments on a website. Which replies do you
v t \\ agree with the most?
» E . 5)
F & Driver or passenger:
Fv— ( & Which do you prefer?
| CR oT
Tian X= | Eva \\ I'd much rather drive than be a passenger. | get bored when
I'm a passenger, and to be honest | don’t like the way most
| SPEAKING | people drive. | suppose | like to be in control.
_— ; A Passenger. | much prefer looking out of the window at the
This or That?’ questions scenery to staring at the road ahead of me. How much
5 Ki . docket fhathi oi ; nicer to relax and watch the world going by. Driving actually
- on ~ pairs an ORR EO a gai. makes me nervous, because | don't feel free to look around.
Write a question for each one.
Dentist or vet? Which would you rather be, a dentist | drive for a living — 'm a taxi driver — so | feel pretty
oravet? strongly about being the one in control. Driving is a big
City or country? responsibility, and people see it as a game, like they don’t
Cats or dogs? have to concentrate. 'm extremely uncomfortable in a car
Mountain or beach? with a driver like that. So I'd always choose to be the driver.
Chocolate or vanilla?
That's easy, because | don’t have a choice. | want to learn
B Look at the Key phrases. Ask each other the ‘This or how to drive, but it's too expensive, so I'm always the
That’ questions in Ex 5A. Use some of the Key phrases passenger. If | had the choice, I'd go for being the driver, but
in your answers. only because it would be a nice change for me.
KEY PHRASES B Work on your own. On a piece of paper, write a ‘This or
— I'd much rather/prefer to ... | That’ question using the ideas in the box or your own : !
I'd prefer to ... ideas. Then write an answer below it and give reasons.
I'd gofor ... entertainment food and drink travel |
| can’t really explain why. \\
hs Se WANE C Now work in groups. Pass your piece of paper to other
[EjGst slisTe are: students to write their answers to your question.
I wish | had that choice.
If I had to choose, | would say ... D Take back your piece of paper and read out the
answers to the question you wrote. Can you guess who
wrote each one?
6 Workin pairs. Ask and answer ‘This or That’ questions.
Student A: Go to page 144. Student B: Go to page 139.
41`,confidence:75},42:{text:`3 pay
GRAMMAR VOCABULARY
conditional structures 4A Complete the words.
1A Complete the sentences with unless, even if, in case (of). 1 She believesin herself She's c : :
. ’ 2 He's always positive about new ideas. He's
Next time | take a long trip: i
1 I'll travel alone 3 We work weekends in order to keep our jobs.
a | feel lonelier that way. The company is e us.
b I can find the perfect travel companion. 4 It’s only lunchtime and I've done so many
2 I'm going to take a first aid kit. things. I got al d this morning!
a our guide is carrying one; then | won't. 5 Let's do this first. It’s not fun, but | just want
b SEEIHERES. togetitoutof t : w A
, . 3 6 | quit my job. Too much responsibility. |
|
3 I'll definitely study the ARR first cele m—
a no one speaks English or my mother tongue.
b. it’s very difficult and | don’t have time. B Work in pairs and list four more personality
4 I'll certainly bring warm clothes adjectives and eight more work words and
a cold weather. phrases from the unit.
B No a amar plaveant] [ES sUmMeRETNe, Yoo 5a Choose the correct options (A-C) to complete
the text.
B Work in pairs. Which sentences do you agree with? Say why
or why not. Remote working NN
— - on the rise Ss
necessity, obligation and permission
2 Working from home is no longer
A Choose the correct words to complete the sentences. only for the self-employed. Based A
1 You are not permitted / necessary to use a smartphone, onthe! of recent years,
though you are allowed / 've got to use a dictionary. companies have discovered that
2 It's permitted / necessary to register if you want to some employees are happier when working
borrow a book. remotely. The employee works from home,
3 All liquids need to be remove / removed from your carry- a favourite café, wherever they want, but it’s
on luggage. 2 that they're connected all the time,
4 You're supposed / essential to stay to the right except El a colleague wants to reach them.
when passing. They* responsibility for keeping to a
5 You've got / re permitted to show your passport or a routine so that they 8 their deadlines
national identity card. and don't fall © schedule in their work.
6 It's essential / supposed to use a seatbelt at all times. The company saves on the costs of renting
Lo . Lo office space and the employee saves the
B Work in pairs. What is the situation or context for each cost of commuting. There are downsides
sentence in Ex 2A? too, of course. Remote workers can feel
. isolated 7 they have regular contact
expressing preferences with someone. And they have to find ways
8 i i isn’
3 A Work in pairs. Read the sentences. Where is the speaker? anal hae Aipeteas we hat
) independent might ® working in an
1 Would you prefer twin beds or a double bed? office, but if a person is flexible and willing
2 I'd rather skip the starters and just have a main course. to with the challenge of turning
3 | prefer cycling outside to an exercise bike in here. their home into their workplace, it’s ideal.
4 I'd rather not wait now. Is there a doctor available tomorrow?
TA tunity B i Cc ti
B Work in pairs. Think of a place. Make sentences using the oppor an y expenence routine
{ : 2 A essential B allowed C rather
phrases in bold in Ex 3A. Say your sentences. Can your . .
partner guess the place? 3 A unless B incaseof C incase
4 A take B make C get
Fa = - ; 5 A stick B meet C do
— ENN » Ta . 6 A late B between C behind
— P- &. — i i 7AIf B unless C in case
i \\ £2. 8 A avoid B deal C make
> =, : 9 A prefer B rather C prefer to
WM | Te \\ \\ 10 A handle B be C deal
™ \\ CC - L - Na
\\ . Wr ) ~ AN — B R3.01 | Listen and check your answers.
2 CAR
42 -—. > {
— 3 -`,confidence:83},43:{text:`k —-—
7H 4. ’ |
c./3 :
N , —
\\ EE =Y
| $ i ]
Pp. Sd ‘
is '
oli \\, | i
1 VN
| i \\
Jit \\ B ; 3 — R
| 3 RE 8 |
; uli iy \\ " -| =
N 1S . Dy Pr— a : .
\\ fi A i. - Ee ———
F&F i A . * E - el = k
a i fii i J =
——— —- > Gopal —m——— —
= Scale of
? q English LEARNING OBJECTIVES
= 4 wl) ; 4A READING | Read about a hoax: truth and lies
Bs - 4 Pronunciation: silent consonants
8 / =~ { Retell the story of a hoax: past plans and intentions
3 R 4B LISTENING | Understand people talking about favourite
zm Sen documentaries: adjectives to describe films; films and
0 = \\) B B A 2 | film-making
iii JT CEB TE Present a pitch for a documentary: indirect and negative
questions
VLOGS Pronunciation: intonation in indirect and negative questions
Q: Do you prefer true stories Write a review
or fiction? 4C HOWTO... | talk about the news: news headlines; the news
1 J Watch the video. Do more Pronunciation: word stress in adverbs for summarising
f tori fiction?
SPEC SIceRiRIE Sasol Bene 4D BBC PROGRAMME | Understand a TV programme about
2 Work in pairs. What about you? keeping secrets
Tell a partner. Have a conversation with an old friend
Write a personal email/letter
43`,confidence:63},44:{text:`5 3 |
Unit4 | Lesson A - i : | 5 |
. Hoax! 4 \\
°® ) k Re os i |
- - ry. LS Sie
iid : or 1 Bh Lv, |
ie GRAMMAR | past plans and intentions Eg, of, ry BJ Re TEE |
| VOCABULARY | truth and lies ay. : Rae : |
PRONUNCIATION | silent consonants J ¥ ER.
2 + Ta NE
’ 2 i aa VL
~ k ; ne
ww ve. ro TAS
| a en i
[FEET] The great Hip Hop hoax
A Read the definition of a hoax. D
1 Ta eisai PY Gavin Bain and Billy Boyd met at college in Dundee, Scotland.
know of any hoaxes? Why do you think 0
They shared a love of rap music and planned to become
people create hoaxes? ) i )
professional rappers, but things didn't work out as they'd
hoax (n): an unreal story, event or intended. When they went to London to meet some record
situation that is presented as true in company executives, they were laughed out of the room. The
order to trick people into believing it executives listened to their music for about ten seconds, then
told the duo that ‘real’ rappers don’t have Scottish accents.
B Work in pairs. Read the text and answer The pair decided to pretend to be ‘Silibil’ (Boyd) and ‘Brains’ (Bain),
the questions. a pair of small-town Californians who'd met at a rap competition in
1 What was the lie that the two men San Francisco. They thought they'd have a better chance of being
from Scotland told? successful rappers if they were American, although Bain had never
2 What happened when they told even been to America.
this lie? Their new identities suddenly attracted interest from a record
3 How did the story end? company, but in order to become successful they would need to
. live a lie. And that’s exactly what they did. Now living in London,
C Number the sentences (a-h) in the they managed to deceive everyone — fans, fellow musicians and
correct order to complete a summary the record industry. They made up all kinds of stories about
of the story. themselves, spoke and sang with American accents and started
a They decided to pretend they were behaving like real Californian rappers. They weren't expecting to
US rappers from California. become global superstars, but soon a well-known music manager
b They had a lot of success (a record signed them up. After that, they got a record deal with Sony,
deal, appearing on television, a appeared on MTV in the USA, partied with Madonna and played
UK tour). on a UK tour with rapper Eminem.
¢ The hoax was turned into a film. Boyd's girlfriend, who still lived in Dundee, was one of the few
d After three years, the two men people who found out about their scheme. She noticed that when
derined 0 tell tae truth. they answered a phone call from the ‘office’ back in Scotland, they
L ri) Bain and Billy Boyd dreamed would start speaking with an American accent. She said that after a
of becoming siiccessfil ERPS ! while, the boys were finding it hard to keep up the lie. Every day for
f Record companies became interested. over three years, they had pretended to be American. Bain even had
g They went to London to meet a girlfriend from Texas. Amazingly, she never doubted
executives of a record company. that Bain was who he said he was. The boys a
h The executives laughed at their hadn't intended to lie for so long, but -
Scottish accents and told them that things had got out of control once they
rappers don’t come from Scotland. PCa uaa & 2
D Work in pairs and discuss the questions. Eventually, under all the stress of living
1 What do you think of the way Gavin 2 he fuepair ceviid [o gome dean >)
and Billy behaved? Did they do They broke up the band, told the mm /
something bad or just funny? truth about who they were \\ | — 9
2 What talents did Gavin and Billy and went back to Scotland, 1 ; y =
have? Were they just lucky? The Great Hip Hop Hoax p—
was over, but the story
got a second life when it
was made into a film. [ A
a it CY
44 =`,confidence:84},45:{text:`p 4A
- fe
-
1 »! . :
= I= A am a
% » (N i 4 b a
n i 1 \\ | r aN
J
BE Fd LN ! . vr -
¢ a eal > Ww.
. Wa =
< ’ . - = < -
| :
BES SS -
VOCABULARY GRAMMAR
truth and lies past plans and intentions
2A Work in pairs. Look at the words in bold in the text. What do you 4a Read the sentences (a—-d) and answer the
think they mean? Use the context to help you. questions (1-2).
B Complete the sentences (1-8) with the words in bold in the text. A. Hhiey ry to beceis a".
Change the verb forms where necessary. b They hadn k intended to lie for so
i long, but things got out of control.
1 If er someone, you make them believe something that ¢ They thought they’d have a better
In: Tnue, chance of success if they were
2 When we , we behave as if something is true when we American.
know it’s not. . ]
. ) ) ) d They weren’t expecting to become
3A : is a plan that’s intended to achieve something that may global superstars.
be lllegal or wrong. ) Co 1 Which two sentences are about
4 Ifyou something, you think it might not be true. personal plans made in the past?
5 When we something, we invent it, e.g. a story. 2 Which two sentence are predictions
6 To means the opposite of to tell a lie. made in the past (things that someone
7 When we , we decide to be honest about something we thought might happen)?
were hiding. § 5% i i hoi fh
. . . nswer the questions about the
8 Ifyou , you hide the truth about the way you live your life. SEINE EA.
C Think of an example of at least four of the following. Then tell Which use:
a partner. 1 the past continuous?
« atime when people have to tell the truth 2 verb + the past form of will?
« something or someone that young children pretend to be 3 verb + to infinitive?
« astory that you doubt is true
C Learn and practise. Go to the Grammar
« ascheme you read or heard about recently Baile
« someone who makes up good stories :
« someone who deceived a lot of people 4d P2ge 115 GRAMMAR BANK
PRONUNCIATION 5a Complete the sentences with your own
ideas. Make some true and some false.
3al)a.01 | silent consonants | Read the words from the text in Ex 1B. y
. . 1 When | was a child, | planned to ...
Which letters are silent? Listen to check. Buk,
1 scheme 2 Years ago | thought I would ... but of
2 doubt course ...
3 sign 3 When | first started learning English,
4 answer | wasn’t expecting ...
5 would 4 One thing | intended to do last year
- was ... but unfortunately ...
6 listen
B £44.01] Listen again and repeat the words. 8 FEE TEN NEE Eo ni
your partner’s sentences true or false?
45`,confidence:80},46:{text:`| SPEAKING | 7 A Work in pairs. Student A: Read text A. Student B: Read text B.
Answer the questions (1-5). Take turns to tell your story and
6 You are going to retell the story of a hoax. add your own comments.
First, read the Future Skills box and answer 1 What did they pretend?
the question. 2 What was their plan?
3 Who did they deceive?
FUTURE SKILLS 4 Did anything go wrong?
Communication 5 Did they decide to come clean and tell the truth in the end?
When we tell a story, we sometimes add our B Work in pairs and discuss the questions.
own comments. We often use short phrases 1 Which story did you find more interesting?
with adjectives: The interesting/funny thing 2 Do the two stories have anything in common or are they
was ..." or ‘This was the strange/amazing completely different?
part..." What other adjectives can be used to 3 Do you know of other stories like these?
create interest in a story?
Yes, | heard a story about ... What about you?
3 = S A i: B
ie / Mk nn ceeccla®
Bi The greatest ‘The multi-
; i { § - nil 13 a. ~
\\& restaurant millionaire
| a " - e-
For a while, The Shed at Dulwich was London's For years Anna Sorokin pretended to be from an
number one restaurant on Tripadvisor. It received amazingly rich family worth about $60 million.
outstanding reviews and was flooded with requests She lived in expensive New York hotels, where
for a table. But it was impossible to get in because she handed out $100 tips, wore designer clothes,
the restaurant was always fully booked months and went to fashionable restaurants. She even
in advance. persuaded a bank to lend her $100,000.
However, The Shed was a hoax. The ‘restaurant’ was Sorokin succeeded in deceiving bankers, hotel
actually journalist Oobah Butler's garden shed. So owners, and new ‘friends’, who also lent her money
how did it become number one? The Tripadvisor that she never paid back. In truth, she wasn't rich at
reviews were written by his family and friends. all and her adventures ended in a prison sentence.
(There was a one-star review, which, he assumed, } oo ) }
was written by a rival restaurant.) The restaurant had Sorokin was originally from Russia but grew up in
its own phone and a website with photos of modern Germany. As a teenager, she went to live in Paris
cuisine, although Butler had made up the recipes, to do a fashion degree. But things didn't go as
and the ‘food’ in the photos consisted of household planned - she found it hard to make friends, and
products like shaving cream and paint. The website she never graduated. Next, she moved to New York
noted that the restaurant was ‘appointment-only’. and worked for a while at a fashion and culture
The Shed at Dulwich only opened for one night, in magazine called Purple. She gave herself a new
which ten guests were blindfolded (so they couldn't name — Anna Delvey —and began to live a lie.
see where they were going). They were led to the How did she manage to deceive everyone? Sorokin
space outside Butler's shed, where he served them used fake bank documents. It also appears she
ready-made food. At least one customer enjoyed the was an excellent actress. Certainly, she deceived
experience and said he'd return. dozens of New York's rich, who welcomed her into
Butler clearly wasn’t expecting The Shed to become their social circle and believed her story that she
so successful, and in the end, after deceiving the was planning to start a $40 million private club.
public, he came clean: he wrote an article for Vice She later said she wasn’t sorry for her actions,
magazine, explaining that he'd planned to expose and claimed that she had intended to pay all the
how ratings websites can’t be trusted. money back.`,confidence:90},47:{text:`v -
a |
C=
-—
4B Documentary :
»
-
pr———— ' |
GRAMMAR | indirect and negative questions )
VOCABULARY | adjectives to describe films; films and film-making > . 4
PRONUNCIATION | intonation in indirect and negative questions -li® ®
T — | a
Lia <a -
'o 4
GRAMMAR = H =
3-minute interview:
indirect and negative questions
1 workin groups. Discuss the questions. What's your favourite documentary?
1 What are the differences between documentaries and A film called Undefeated.
other types of film?
2 Do you like watching documentaries? If so, which types? If Could you tell us what * 3 about?
not, which subjects for a documentary would interest you? Sure. It's about a struggling inner-city high
school American football team which can barely
2 A Read the ‘3-minute interview’ with a film blogger. What does win a game. Then a new coach arrives and turns
she say about documentaries compared to social media? them into a team of winners on and off the field.
B Work in pairs. Do you agree with the blogger’s opinions on I remember it. Wasn't it an Oscar winner?
documentaries compared to social media? In what ways do Yes, it won Best Documentary Feature. It’s one
you think they are different? of many brilliant documentaries of the last few
: . "= i : years. It has that ‘fly-on-the-wall’ approach that
C Look at the interviewer's questions in the interview. Answer : : . :
. you get a lot with social media and video taken
the questions (1-3). :
on mobile phones.
1 Which question is a direct question with the verb to be? ) .
2 Which are ‘negative questions” questions that start with Absolutely. is £ Jan. think the popularity of
a negative verb form and are used to check or confirm documentaries right now is partly because of
information? the rise of social media? Real events get filmed
3 Which are indirect questions: questions that use an and watched all the time.
opening phrase to sound polite (Could I ask you, Can you Yes, but there are differences. Social media
explain, etc)? is all about the quick exchange of ideas or
. information, but documentaries ask us to stay
§ Leamand practise: Goto the Grammar Genk. for a while. They take the time to go deeper into
Ld page 116 GRAMMAR BANK a story, to tell a story in ways that social media
can't.
PRONUNCIATION Do you know where we can find this film?
3a Ba.02 | intonation in indirect and negative questions | 0 pe" tl
Listen to the questions. Does the speaker’s voice start high ’
or low?
[’ - T° —
1 Can | ask what you think of this documentary? — » ~
2 Could you tell me when the film starts? wi |
3 Do you know where | can see it?
4 Isn’t that the documentary you were telling me about?
5 Didn't you watch it? L \\
- N° Yi
B Work in pairs. Use the prompts to make indirect or negative . i ~
questions to ask your partner. Use the correct intonation. vy A
« Canyoutellme...? e Couldlaskyou...? ,
+ Doyou know... 7? e Didn't...?
|
- i
47`,confidence:83},48:{text:`Unit4 | Lesson B
LISTENING VOCABULARY
4 [)4.03| You are going to adjectives to describe films
listen to people discussing their a . "
Favourite dociimantarics. Loskiat 5 A Match the adjectives in bold with the best option (a or b).
the photos below. What do you 1 It’s the extraordinary story of a diver who makes friends with a wild octopus.
think the documentaries will be a very unusual b very difficult
about? Listen and check. 2 The underwater filming is very dramatic. I'd never seen anything so
_ beautiful on screen.
8 K4.03| Workin — Answer a surprising b exciting
oe en lsten aga 3 It’s a very intelligent film in that it makes you realise just how important
SlCEnees our oceans are.
My Octopus Teacher a makes you think b difficult to understand
1 Why did Craig Foster decide to 4 The whole film is really enjoyable. My family loved it.
spend time freediving?
Fisk: eich bis Vary Fron BLA Th b fun
£ Vint ddie learn from nilming 5 | found it a bit disappointing.
the octopus?
3 What does the documentary a similar to what you expected b worse than what you expected
teach us about the oceans? 6 It was really slow. A lot of the film just shows footage of the octopus.
4 Did Dave enjoy My Octopus a without interest or excitement b long
Teacher? Why/Why not? 7 It’s a really powerful documentary about the life and work of
The Salt of the Earth photographer Sebastido Salgado.
5 WhHGSE life does tha a it made a strong impression b it has a lot of information
documentary focus on? 8 He tells the story of the shocking conditions that many people around
6 Why does the documentary the we often have to live in. Co
show people living in terrible a different b surprising in a bad way
conditions?
7 What does the documentary B Choose the best words to complete the sentences.
try to teach us about 1 There was so much action at the end of the film — it was very intelligent /
humanity? dramatic / slow.
8 Did Amy enjoy The Salt of the 2 If you watch this documentary, it'll change how you think about food
Earth? Why/Why not? forever. It has a very powerful / disappointing / enjoyable message
about vegetarianism.
C Work in pairs and discuss the 3 The idea is amazing, but | didn’t like how it was filmed. It was a bit slow /
questions. enjoyable / intelligent.
1 What do you think are the 4 It’s a very extraordinary / intelligent / shocking documentary. The ideas
biggest threats to the natural are really clever.
world?
2 Do you think documentaries C Work in pairs. Tell your partner about a film, documentary or TV programme
are an effective way to learn you have watched recently using the adjectives in Ex 5A.
about issues like this? Why/
Why not? D Learn and practise. Go to the Vocabulary Bank.
| d page 133 VOCABULARY BANK films and film-making
A i py 9 \\ > 3
Craig Fostergmse— - Co LS " < ; hy bi L
- Co i Sr k \\ B
RESP os oi : FY ) = re J vw U
> = i [ " a va a
No d 2
gi CC ea
7 7, 2 i 5 \\ AN n | Lh [2 : - ii
’ ow \\ i v 3 . \\
’ - \\ Cea . 3 -
Ze & , b. LT SRST - y
#~ ’ . - - — a WA 1
4 WN \\ 4 Je ad : ] \\ el
.“ a . p , ) Ls Iq ' "& hee =
. OR EN No > v A wo >
ha M NT For dn
\\ § 4 2 Ea} & EE 3
g 8 . _—y A ¥ WN ee 2 >,
Octopus [IN DEER Jaa. OY - © :
» WN Yy Pe ~ a ~ La
5 Teacher SESS NA Ca Be :
Directors: Philippa Ehrlich, James Reed ——— — : “a 7 4 Sa Rix — - > :
-~ ES Sa Te JE a >`,confidence:72},49:{text:`4B
SPEAKING WRITING
6a Imagine you have an idea for a areview

documentary and you need to pitch your " . 5 be 353

idea to the class to get funding. You are 7a Read the film review. What four things does the writer like about

going to plan the documentary and make the film?

a prereLal to the class. Think about B Which of these are included in the review of Parasite?

these questions. ; : p : : :

. 1 an introduction with background information (e.g., setting,
+ Whatis the documentary about (a actors, director, true story behind the film)
person, a place, an issue, etc.)? P Fiat
« What is the title? RP Ae
oo N 3 the writer's opinions of the film (e.g, plot, acting, set, dialogue,
« Where will it be filmed? themes, music)
+ Who will you interview and who else 4 opinions from other people saying what is good/bad
will be involved? ; - ™ ;
A 5 a conclusion saying if the film is worth watching
+ What will you try to teach people
about the topic? How? 8a Read the sentences (1 and 2) and underline the adverbs.
+ How will you describe the documentary : . :
when you pitch it to the class? (Can you 1 We first see the Kims as they desperately try to get an internet
: : connection.
compare it to other films?) . .
2 We watch the Kims cleverly deceive the Parks.
B Work in groups. Agree on an idea and L .

plan the details using the questions in B Work in pairs and answer the questions.

Ex 6A. 1 Why do we use adverbs?

Wouldn't it be good to film a a to describe how someone does something

documentary about... ? b to describe a person

Isn’t there a ... that’s more ... ? 2 What two letters do many adverbs end in?

Don’t you think it might be better to ... ? 3 What actions could you describe using these adverbs:

dramatically, intelligently, powerfully, slowly, wonderfully?
C Present your documentary idea to the . . .

class. During other presentations, think C Complete the sentences with the adverbs in the box. Sometimes

of questions for the presenters. Ask them more than one adverb may be possible.

t the end. ( 3 5 :
attheen | dramatically intelligently powerfully slowly wonderfully
Why do you think the subject is -
important? 1 The documentary has been very thought out.

Don’t you think this has been done before? 2 As we watch, we _ realise the answer to the problem.

Isn’t there a way you could... ? 3 The films starts very with a man jumping out of an

aeroplane.
D Work in groups. Which documentary 4 The footage of the mountains is shot. It's spectacular.
would you fund? Why?
9 Write areview of a film, documentary or TV programme. Use the
list in Ex 7B to help.

Pa rasite 0.0.90.0.9.¢ Posted on 27 May | Release date 21 May @12 (J13
Parasite is a 2019 South Korean film directed by There is a lot to like about this intelligent film. The plot
Bong Joon-ho. A dark comedy, it became the first is very original. We watch the Kims cleverly deceive
foreign-language production to win an Academy the Parks, and this is the source of a lot of humour,
Award for Best Film. although it eventually leads to an ending that is both
The story follows two families, one rich (the Parks) shocking and dramatic.
and one poor (the Kims). We first see the Kims as they The acting is brilliant, with Song Kang-ho particularly
desperately try to get an internet connection from the good as the father of the Kim family who ends up as
horrible basement they call home. Then the teenage Mr Park's driver. Also, the set is wonderful, especially
son gets lucky. A friend gives him the chance to teach the Parks’s extraordinary hi-tech house with its secret
English to the son of the Park family. Soon, the whole spaces and huge windows.
od Si © sipioyed Byte Bards in atiotn (oles Overall, Parasite is extremely enjoyable. While it has
driver, art tutor, and housekeeper. They pretend to be : : i
hi oe lots to say about modern society, with the rich and the

ighly qualified and never reveal to the Parks that they i g : os
: poor living side by side, above all it’s a lot of fun.

are all from the same family.

49`,confidence:87},50:{text:`Unit 4 | Lesson C wr \\ p
a hf = "esd oo L h |
| = “ . |
2 4C News | Fe
a LB.
— — > Fa ) .
HOW TO ... | talk about the news — [
VOCABULARY | news headlines; the news i , FY al E
PRONUNCIATION | word stress in adverbs for summarising SSS ba a i Wo | g
4 fs RATE y . ; A
Me dV | |
— E ET i \\ \\
-_— E = y = 3 || R
: re er ——— ~
VOCABULARY 2 A Choose the correct word to complete the
paragraph about news stories.
news headlines
1 A Work in pairs and discuss the questions. Making (( ))
1 Do you regularly share stories or videos on social media? h N \\ of
Who with? What type of stories/videos? t e ews i d
2 Are there any types of story/video you really don’t like? A million cars on the road isn’t a news story,
B Read the headlines (1-5). Discuss which stories you might read lls re hs deli aoe
and which you definitely wouldn't. Explain why. ‘quit / i Borate ofa settike 4 helmed
1 >
Students march dressed as bears in i Si dae hate
In protest against restaurant not a news story, but if they get “escaped /
Man arrested after dog attacks politician sppested. hi Dew usnally means bad
news’. Bad news travels fast, but so does
3 cute news. Animals are particularly popular,
Le a aa especially if they get escaped / rescued:
GoPro’s Fireman Saves Kitten video
4 . . 5 5 illi i i
Celeb rity in financial scandal attracted 1.5 million views on YouTube in
hid €500.000 under bed its first week. And famously, a few years
’ ago, a story about a cow went viral. The cow
gl Cat escapes flat, gets rescued from tree _ bier ea he
Cat escapes flat, gets rescued from tree street before being caught by the police.
. . Co While it's usually events that make the
C Match the headlines (1-5) in Ex 1B with the opening lines of the En
stories (ae). In 2015, when a group of environmental
a A movie production paused after actors refused to film activists weren't allowed to “escape / march
on a farm because of the smell. The film-maker, Kitty through the streets in France, they simply
Mendelssohn, walked away from the project saying, ‘Actors Toftheir shoes = 10000 GE mi "
these days just want an easy life. It drives me crazy’. strike / protest ’
b Plans to open a Big Bear restaurant on the campus of a Pp :
university have been paused after angry students walked
the streets yesterday. They say the restaurant chain has B Workin pairs. Say which of the words in bold in
poor working conditions. Re
¢ Musician Fantaye DeBruin told a court yesterday that she Ex2afbave been inthe news —
kept suitcases full of money in her home. march: There was a march in the capital
d A pregnant Siamese cat named Zoe climbed out of a third- last week.
floor window and onto a tree, but got stuck. Firefighters quit: There was a story about a famous
came and brought Zoe down several hours later. football manager who quit recently.
e Police are holding a man whose dog turned violent in public. .
Bill Cheney, 33, lost control of his dog in a local park. C Learn and practise. Go to the Vocabulary Bank.
D Which of these stories might go viral? Why? jd Page BAUNCARINARY BANIC the ots
50`,confidence:79},51:{text:`4C
How to ... PRONUNCIATION
talk about the news 5 4.05 | word stress in adverbs for summarising | Listen
to how the speakers summarise. How many syllables do
3A Workin groups and discuss. Do you watch the words basically and apparently have? Which syllable has
or listen to the news regularly? What are the main stress?
the latest news stories in your country or 1 So, basically, what happened was ...
city/town? 2 Apparently, thousands of people are stuck at the airport.
5 [J a.04 | Listen to people discussing some 3 re it seems like he’s going to manage a different
news stories and complete the headlines. ’ . .
. . . 4 Apparently, the protesters have taken over the university
1 lifts boy into the air buildings.
2 Huge destroys supermarket
3 Sean Davies quits job as 6 A Work in pairs. Discuss two news stories. Student B: Go to
pi cancelled due to bad weather page 144 and follow the instructions. Student A: Read the story
5 take over university buildings below and prepare to tell it to Student B. Use these phrases.
C Work in pairs. What happened in each story? Have you heard .... ? . Apparently, ...
It seems that ... Basically, ...
4A Q)a.0a | Complete the extracts from the ee
discussions. Then listen again and check.
1 A: Have' that story about the kid in Dog under umbrella
the zoo?
A: So,? , what happened was that he A security guard was photographed standing outside a
was feeding the giraffe and ... supermarket holding his umbrella over a dog. The dog
B: Oh no! That 2 scary. was waiting for its owner outside a supermarket and it
2 A: Haveyou* about the fire? was raining. The security guard felt sorry for the dog and
B: What fire? used an umbrella to keep it dry. Someone took a photo
A: In town. Didn't you see the smoke? and posted in on social media and the story went viral.
B: No, 3 ?
A: The supermarket caught fire. It’s © B Tell your story to Student B. Then listen to Student B's story
the news. and respond. Use these phrases.
Alt? there might have been an
electrical fault or something. What happened? | can hardly believe it.
3 A: Did you hear the news about Sean Oh no, that’s terrible/really funny! That sounds ...
Davies? -—
B: No. What happened?
A: He's quit his job as manager.
B: Really? | had no idea!
A: Yes. saw it? the news. ... I°
the details, but basically, ... 7 A Think of a current news story (sports news, celebrity gossip,
4 A: 0 , thousands of people are stuck local news, world news, news about a discovery, etc.). Plan to
at the airport. It’s all the news talk about it. Answer the questions. Use the phrases in Ex 4A.
channels. 1 What is the story about?
5 A: Areyou *? the news about the 5 Whe Was iRvslvad?
protests? EPR—— =
B: Yes, it’s received a lot of coverage. It’s Ell 2 ; : appen:
terrible. Apparently, ... 4 Why is it interesting?
A: know. It all happened so quickly. | can 5 How did you hear about it?
hardly believe it.
B Work in groups. Discuss your news stories. Initiate the
B Which of the phrases in bold in Ex 4A are discussion, then describe and comment on the story using the
good for: phrases in Ex 4A.
1 initiating a discussion about a news story?
2 describing/summarising the news story? MEDIATION SKILLS AN
3 commenting on where you saw the story? writing in note form A A
4 responding to a news story? report a news story
C Learn and practise. Go to the Grammar Bank. » page 150 MEDIATION BANK
| d page 117 GRAMMAR BANK
Speak Go to the interactive speaking practice 51`,confidence:89},52:{text:`Unit4 | Lesson D
4D B artai VIEW
2A [J watch the BBC video clip and number the events
(a—g) in the order that they happen.
a Holly follows Adam to a supermarket and
pretends that she just bumped into him.
® b Holly is looking at old photos and feeling sad. 1
¢ Holly and Adam catch up and she gets his phone
number.
d Holly looks up an old friend, Adam, on social media.
e Holly updates her social media profile with some
SPEAKING | a conversation with an old friend stolen photos and a new job title.
WRITING | a personal email/letter f Holly goes to the office where Adam works and
she waits.
g Holly gets dressed up and puts on some make-up.
Ls]
PREVIEW B [J Howdo they respond? Choose the correct
sentences to complete the conversations. Then
i plete th ions. Th
1 A Work in pairs. Are you good or bad at keeping secrets for watch again to check.
family, friends and colleagues? Think of examples. 1 Adam: Whoa, this is ... crazy!
| 8 Regdih inf Fr fr Holly: know. / Yes, isn’t it?
| rs ae rei —" ow i aa 2 Holly: I thought you were living New Forest way?
Holly might try to create a ‘secret life’? Co i
Adam: That's right, but I moved back a while ago. /
— Yeah, | moved back a few months ago.
i % A 3 Adam: You look good.
mE \\ \\ Aad Holly: So do you. / Thank you very much.
: = 3 | as 4 Adam: So, do you live round here, or ... ?
p ~ Boo od 5 Holly: Not really. I live about half an hour away.
ry 1 bd i / Er, not far. | have an apartment. |
al p [FN .
|] E- -, \\ ) i 4 5 Adam: Um ... It’s amazing bumping into you. We I
CRY pA should ... catch up.
OF x tt Holly: That would be great. / How about
wy. *— ® Wednesday?
W “4 \\ I
; , £5 C Work in groups and discuss the questions.
[\\_— L] ad \\ E]B C . . .
] ¢ . 1 What do you think will happen next? Do you think
Adam will find out the truth about Holly? How?
= : 2 Do you think what Holly did was a good or bad =
gam Ordinary Lies idea? Why?
Be Ordinary Lies is a BBC drama series that follows the lives 3 Do you think it’s ever acceptable for people to
: of an ordinary group of colleagues and friends and the post information which is untrue on social media? 5
5 extraordinary secrets they keep. In each episode, we Why/Why not? :
: see how quickly small lies can become big secrets, and |
Sse how there can be shocking consequences when they are | : : :
: revealed. In this episode, Holly feels her life is too boring, ! :
“2% so she creates a ‘secret life’ for herself which she thinks 23
#2: looks more interesting. | 0 25
ai | i &
52`,confidence:81},53:{text:`(SPEAKING WRITING slslc
a conversation with an old friend a personal email/letter
3A 4.06 | Listen to two friends having a conversation. 5 A Read the email. Is all of the information correct
Are the statements True (T) or False (F)? according to the conversation in Ex 3A?
1 Jade and Nikolas haven't seen each other for about
five years. Hi Rob, DO)
2 Nikolas lives in New Zealand. How are things? Guess who | bumped into the other
3 Nikolas works for a film company. day? Nikolas! | was just going for lunch in the café
4 Jade works in a bakery. and he saw me walking across the street. It was such wi
sea 5 Their friend Robert is married and has three children. d surprise. Anyway, we got chatting and caught up i
AEE | 6 Nikolas h EE ————— lificati on all our news. Did you know he came back from
Sa ikl Has gaMeq is SKINS HECOr gua Tea HON. New Zealand and now he's working for himself as a
Ra B of 061 ii RT TY h freelancer? He's still directing films. He's also planning
a -06 | Listen again and tick the phrases you hear. to do his ski instructor exams. He wants to be able
to teach during the ski season. It was so nice to talk
KEY PHRASES to him and to catch up. He asked after you and I told
How amazing to see youl him you were married now with two kids. He couldn't
, . believe it! It's amazing how quickly time has gone since
SE It s really great to see you again. we were all working together. We were thinking it
Se 4 This is crazy ... . How long is it since we've seen would be really nice to try and get together. Perhaps
sd each other? we could arrange a meal sometime? Let me know
a I thought you were living in New Zealand/ what you think. It would be great to see you.
a Barcelona/Italy. Best wich
So g 5 ) . est wishes,
| Are you still working for that film company/living
= ini? Jade
3 Did you ever finish your degree/start your own
Ree company?
(Did) you know he’s married now! passed my exams? B Writean email to afriend telling them about the
Wow, that's amazing/brilliant! a — you had in Ex 4B. Tell your friend about the
, Lo conversation in detail and make some plans to meet.
Really?! | can’t believe it!
C Work with your partner from Ex 4B. Read your
4a Imagine you bump into a friend you haven't seen for a partner’s email. Is all the information about your
. i i 2?
few years. Prepare to talk to them about your life and conversation in Ex 4B correct?
what has changed. Think about these things and make RR
some notes. SR JE :
Pas |
poco os |
3 experiences friendships/family hobbies | |
new skills/qualifications where you live work
sr a Wee
S225 B Work in pairs. Have a conversation with your friend CE essnsy WEmemme
Em and find out about their life. What has changed? Try SRR aa er CR
SERRE to use the Key phrases. Sans ne RE
Ba SERRE EER RRR
AEE C Work with another partner. Tell them about the Sa 2 Gos oe 5 ompR
ER conversation you just had. ns Er Semmes. |
SER rs BERBER Re
boots A ODOR0s00sR00000s —n BRR Bae Bae |
SEER Besse . a Sm]
EELS a RR Sa EEE SEE
$500 0 RRR fe SES EET ES
Sires il PERLE a Bee Renae EE
SESE TRE tn gee Re BAR pose CREE
CERRY REA fe BR RRR Bora cs
ERS RE EE psc : RRs Re BRS
SEE Rosen Ee RR LEE 3 SHE
a me FE EE SE os E
ge 0 - E ag E
o_o CE ET E a ia
Bn ee FE 3 E ER ese
a osname SE Es PEE passes Ee CEE
Cc a Be pes EEE
a a Ea Rn ns EEE
BR Ee TE GE Re SE ET
Sn an SR RR a ge Pees : ose)
53`,confidence:69},54:{text:`3 REVIEW
GRAMMAR VOCABULARY
past plans and intentions 3a Complete the conversation with the words in the box.
1 A Choose the correct words to complete the sentences clean deceiving doubted enjoyable ]
about some famous people. extraordinary intelligent lived pretended
A: Did you hear about that guy who’ tobea
Before they were famous doctor, a lawyer and an airline pilot, all while he
1 Angela Merkel was going / intended to be an was al g Teenagers He? alie for Years:
academic, and got a PhD in chemistry before B: How is it possible that no one 2 his story?
getting the job that made her famous. A: He was just really good at 4 people. He was
obviously very 3 , too. The FBI spent years
2 Hugh Jackman thought it will / would be a trying to catch him.
good idea to get a steady job before following B: What an © story! I've never heard of anything
his dreams, so he worked as a physical like that before. Did he eventually come” 2
education teacher. A: Yes, he was caught eventually. His story was made
3 Nicole Kidman always intended to doing / do into a really ® film called Catch Me If You Can.
the job that made her famous, but did a course B Work in pairs and discuss. Have you heard of this story
in massage therapy first, in order to learn how :
: or watched the film?
to massage her mother, who was sick.
4 Mario Vargas Llosa was hoping to become / 4 A Choose the correct options (A-C) to complete the text.
become president of his country but lost in the
election. A famous author, he won the Nobel Facts & fiction: when
Prize in Literature twenty years later. .
Se Hollywood gets it wrong
5 While Harri Ford lannin lanned
coimdiings w y— P g/P The! exists to tell us stories and sell us
to become an actor, he trained as a carpenter. )
He : y dreams. But are films supposed to 2 the
In fact, he was working in film director Francis , ; OE
: : truth? Aren't they a mixture of fact and fiction?
Ford Coppola's office when George Lucas gave .
: . Read these examples of Hollywood getting the
him the role that made him famous.
details wrong and judge for yourself.
6 While B é Knowles al meant
Ea / : A scene from Apollo 13 is set in April, 1970.
meaning to use her musical talent, for a while :
: on Astronaut Jim Lovell’s daughter holds The
she swept floors in her mother’s hair salon. . ;
Beatles’ album Let It Be. It’s a good scene, but can
anyone explain ® had this album, which
B Work in pairs. Which of the people in Ex 1A have you didn’t come out until August, five months later?
heard of? What else do you know about them? In Raiders of the Lost Ark, set in 1936, a map
Go EE = . appears onscreen, showing Indiana Jones's
indirect and negative questions journey. We read the name Thailand. You might
« : 24 5 ; bl
2 A Read the interview questions with a film director. = ee a = gE =e
Barseciilie viliiskesilenuniions journey certainly was, but Thailand wasn’t named
] ‘Thailand’ until 1939. It was Siam before that.
1 Could | to ask you how you became a film director?
2 Arent you think it’s easier these days to make films Occasionally, the ® makes deliberate
than it was in the past? mistakes. Sofia Coppola's Marie Antoinette is all
3 How you are able to cope with so many things like about the queen of the same name, who was born
actors, finance, equipment and schedule? in 1755. In one scene, there's a pair of Converse
4 Can you explain me how you find locations for trainers. (The shoe company was founded in
your films? 1908.) Coppola thought this a way to show
5 Isn't it but extremely difficult to get your film into how young Marie Antoinette was.
cinemas?
6 Do you know where can | start if want to be a 1 A filmtrade B film industry C industry film
film-maker?
2 A make B talk C tell
B Work in pairs. Roleplay an interview. Student A: You 3 A how she B she C that she
are a journalist. Student B: You are a famous film 4 A Didn't B Howwasn't C Wasn't
director. Ask and answer the questions in Ex 2A. Then 5 A star B shoot C director
swap roles. 6 A cando B would be C will be
B R4.01 | Listen and check your answers.
54`,confidence:87},55:{text:`t
4 oN \\
pre oN
SS — 4 BA
NW RE CRE 1 MN = A \\ \\ JB pa - A r yr ;
ERC A, EY ~ET Fy BB
= __- =_& L a - wi , Xs 2 ! Rd a .
— wt — = ¥ * Pe — . 2 El = \\ 3 63 nN 17 2 ® i Ro : Fe x
< = Tuma US CNRS =: Nn NL Vrs i ere 1] LD A
: po, PAN he dfs, Te =e cy
= . i ag i < « iy Lin: Rim : Cd
- > a | \\ C=
= >» — - 4 2 £ wn &
: > : - _— 3 #5 a I |
ro { d Ba . i ir — R vg [35° NA fh
” | > ee SEY YS RNG
SN ' RL OTHER YO i
IYERS ¥» > g %\\ B\\ Va 5 pr J 8 f Sa E em
: J 7. Au AOR HE 4 “ N ) Nie € © \\
; 5 + Sy 2] 1 ra y
~ { : y 1 "a NE @ Pas” |
; “Bn => > 73 = 7 Y. 5 # $7 » | 19% IN 7 & ; i \\
ie] TH int yr < 4! 3 3 EN & . "5 \\
oP Yas) A , o BA oN -
nN | x '” all MEW UA 7
£\\ Bh) ie ARO Cll ATS NER
N ‘ © / oo I \\AY SRN 3 |
: ; Yh Tv |
: 4 y / "4 y/ 7 y
4 PZ y > 4
pt ial yey. » ha y
ay { " Global —F—— —
f 1 Scale of
1 | English LEARNING OBJECTIVES
: 5A LISTENING | Understand people making complaints:
personality adjectives (2)
| Pronunciation: word stress in adjectives
( al J | Roleplay making complaints: clauses of purpose: to, so as to,
| in order to/that, so that
Write a complaint email
B | B | 5B READING | Understand an article about marketing tips:
advertising; money
Discuss a marketing campaign: comparative and superlative
VLOGS structures
Pronunciation: linking rin phrases
Q: When was the last time you
had a problem with a product 5C HOWTO... | summarise information from different sources:
= describing products
or service? fan C
Pronunciation: intonation in summarising phrases
1 IJ watch the video. What
problems do people talk about? 5D BBC STREET INTERVIEWS | Understand people talking
about what they do themselves and what they have done
2 What problems can you remember Talk about planning an event: causative have and get;
having? reflexive pronouns
Write a meeting summary
55`,confidence:53},56:{text:`Unit5 | Lesson A
T 1 A 7 -- :
The customer {
® PY n— ar :
is always right? -
@ f 0d 5
gs Fa
- E 3 ES —_— / 1 - 4 { £2
GRAMMAR | clauses of purpose: to, so as to, in order to/that, so that 1 : pes \\ / - a
VOCABULARY | personality adjectives (2) [i / 1 \\ ¢ 4 a =
PRONUNCIATION | word stress in adjectives \\ a > f — =
i —-— — N a ’ —— N
. \\ 4 9
. 7 bs
V =
VOCABULARY .
What kind of
personality adjectives (2) complainer are you?
1 A workin pairs. Look at the photo and discuss the questions. Answer the questions to find out
1 Do you ever complain about products or services?
2 Are you usually successful when you complain? Why/Why 1 How do you behave when you complain?
not, do you think? a [tend to lose my temper and argue.
— . : b I usually start by saying, Tm sorry, but.
B Work in pairs. Do the quiz and discuss your answers. Do you Freya] lit 4 orefiay Tot
agree with your results in the key? & Bai ian = a : ess
C Discuss the questions. my cool.
1 Isit common to complain about products and services in 2 When you complain, which of these is true
your country? for you?
2 Can it be useful to show anger when complaining? a don’t waste time and I always speak
ind.
D Complete the sentences with the words in the box. b a tand that I might have to wait
[ aggressive calm confident direct 1 a while for a solution. i
patient pleasant sensible shy < ey me a to achieve
1 | get nervous speaking to strangers. I'm rather . 3 Do you try and build a relationship with
2 | tend to lose my temper and argue. I'm quite . the person?
3 | don’t mind waiting a long time. | think I'm | . a No. They represent the company.
4 | never lose my temper or get angry. | always stay : b I'd like to, but I get a bit nervous speaking
5 | always speak my mind. I'm very : to strangers.
6 I'm always polite and smile a lot. | try to be . c Itreat them with respect. The problem
7 | don’t think | can do it well. ’'m not very p may not be their fault.
8 I'd never complain about something which can’t be 4 Do you ever make threats against the
changed. People say I'm really = company?
a Yes, always tell them I'm going to give
PRONUNCIATION them negative feedback on social media.
2 A | word stress in adjectives | Work in pairs. Match the b No, I don't think that's effective and it's
adjectives in Ex 1D with the syllable patterns. unfair.
0 alts: 560 Bob 4 Bes E obo ¢ I usually say something like, ‘I was going to
recommend you, but I've changed my mind’.
B [5.01] Listen and check. 5 How often do you complain?
C Work in pairs. Take turns to ask questions based on the a Alot. Whenever I have a sort of problem.
sentences in Ex 1D. Answer using the correct adjective. b Not very often. I don't think I can do
: El it well.
A: Do you tend to lose your temper and argue? & nevereomplain shout Sings whieh
B: Well, | can be quite aggressive sometimes. For example ... can’t be changed.
56`,confidence:81},57:{text:`5A
LISTENING GRAMMAR
3a B5.02| Listen to two customers complaining about clauses of purpose: to, so as to, in order to/
a service or product and answer the questions. that, so that
1 Whatd h lain about?
@ oe PIL A aa 5A workin pairs. Find the clauses of purpose in the
2 What might happen next?
sentences (1-5).
B Work in pairs. What does the word in bold refer to in 1 I'm here to make a complaint.
each sentence? 2 We will need the receipt so as to check the date
Cotiversatici when you bought a
T HE lEEh EEE R TEER: 3 pm have to do in order to get someone to
a Ba Se a 4 I'll need to take the flight number so that | can
3 If it’s over three years ago, we won't be able to help. check what has happened.
4 I'm sorry, but there's nothing | can do about it. 5 |cari hold oniso as not to waste time.
5 He should be back in an hour.
Eoniversation? B Look at the sentences in Ex 5A and answer the
6 He assured me it would be here today. SPREE. ) So
7 It says the suitcase was delivered to your address 1 eg ey clauses of purpose include an infinitive
this morning. ASL ) )
8 Is it possible to do it now? 2 What structure is used when to is NOT used?
c 5.02 | Listen again and check your ideas. C Notice the position of not in Ex 5A sentence 5. Make
the clauses of purpose in the sentences (1-4) negative.
D Work in pairs and discuss. 1 | treat the person with respect so as to upset them.
1 In which conversation do you think the complainer 2 | usually write an email to avoid talking to someone,
was more effective, 1 or 27 but because | want a record of the communication.
2 What would you do differently from them in either 3 | keep receipts in a file in order to lose them.
situation? 4 | breathe deeply so that I'll lose my temper.
4A )5.03 | Listen and write the word you hear first. D Learn and practise. Go to the Grammar Bank.
Then listen again and use each extract to work out the
meaning of the words you hear first. 4d Page 118 GRAMMAR BANK
B Work in pairs and discuss. What helped you guess the 6 A Work in pairs and read the sentences (1-6). What do
meaning? Tick the strategies you used. you think is happening?
1 It must be a verb/noun/adjective because of its 1 Forder switched itor and off biti.
PasIEDTINTe SSHEnCey . . . A: Maybe someone is checking if a light is working?
2 It must be a verb/noun/adjective because of its ending.
3 | understood th ing from the situati rr
understood the meaning from the situation. A 3 g z
5, me GE 9 . 2 At first | didn’t take it out of the box in order not
4 The meaning is given in the surrounding sentences. THER IFoticad that.
5 It’s made from a word or words | recognise. 3 The strings were broken, and we took it back to the
. . shop so that . At the shop, the manager ...
C Go to page 141 and check the meanings. Which ones alt :
- 5 was the worst one I'd ever eaten, but | was
did you guess correctly? pleasant with the waiter so as not Iwas
surprised then that he ...
5 The reason | asked to speak to the manager was
to , but the sales assistant didn’t want ...
6 We took a taxi in order ,butinfact...
Mostly a) It's good to be firm, but your style could
make the other person feel as if they're being attacked B Complete the sentences in Ex 6A with your own ideas.
and a5 d result they could get upset, which is likely tobe In order to check if the light was working, | switched
ineffective. Work on staying calm in these situations. it on and off, but nothing happened.
Mostly b) You're sensitive to other people, but i C Work in pairs and take turns reading out your
perhaps you need to believe in yourself more. Don’t give sentences. Which ones remind you of real-life
up so easily. Practise complaining firmly but politely. experiences you have had?
Mostly c) You're likely to be an effective
complainer. You only complain when it’s necessary and
you treat people with respect whilst at the same time
being firm and knowing what you want.
5`,confidence:87},58:{text:`Unit5 | Lesson A
SPEAKING C Read the email again and find phrases
that mean:

7 A Work in pairs. You are going to phone to complain about a product. 1 I'm writing because I'm unhappy about...
Complete the phrases (2-3) with adjectives from Ex 1D. Then I'am writing to complain about ...
complete the sentences with your own ideas. 2 It made me angry that ...

1 To complain effectively, you need to treat people with respect in 3 Iwas very surprised and upset that
orderto... 4 After this happened, | wished | hadn't ...
2 Remember to be and so that... 5 That wasn’t the last thing that went
3 It’s important not to be too or soasnotto... wrong.
6 I'm sorry to have to say this but ...
B Which of these phrases do you think would be effective in the 7 It's wrong for this experience to happen.
conversation? 8 | was polite with all of your employees.
1 I'm phoning to make a complaint about ... 9 What happened to me was absolutely
2 Look, | know it’s not your fault, but this really isn't good enough. terrible. |
3 | demand to speak to your manager, right now. 10 I'm sure we can find a solution. |
4 Fea zeally nat happyssithinesiiuation. 9 Choose the correct words to complete the
5 Do you have any thoughts on what we should do next? Sctractioneon how towrteamailsand
C Work in pairs. You are going to practise making and dealing with pr Shin Use thecomplaint
customer complaints. Student A: Go to page 141. Student B: Go to emai inex 0 netp-
page 143. Length
The email should have "a lot of detail /
only as much detail as is necessary.
WRITING Structure

IE The email should have three sections.

P » Say “why you're writing / your name

8A workin pairs and discuss the questions. _— job. 5

5 : : » Describe *your feelings / the problem.
1 Have you ever written an email or letter of complaint? Shabewiiat ackion Ayperwant youice
2 What do you think is important in a complaint email or letter? going to take. y
3 What sort of problems might happen when you stay in a hotel?

List five or more. Style
The style of the email should be formal /
B Read the complaint email, then discuss with another student. informal. You:
1 Does the writer do any of the things you discussed in Ex 7A? +» should fuse / avoid using contractions
2 Does the writer mention any of the problems you listed in Ex 8A? in positive sentences,
« ’can often / usually can’t use
To the Manager: 2 contractions with verbs in the negative,
| am writing to complain about my recent stay in your hotel. + should fuse / avoid using the passive,
| was a guest for two nights last weekend. When | arrived, the talkin may
receptionist was polite, but | found it extremely annoying that it took —— . .
over twenty minutes to check in. When | went to our room, | was 10A Workin pairs and discuss the questions.
shocked to discover that the beds weren't made and there was a 1 Have you ever had a bad meal or
used towel on the floor of the bathroom. | was given another room, experience in a restaurant? Give details.
but by this point | was beginning to regret choosing your hotel. 2 What things can go wrong when you
Unfortunately, the problems didn't end there. At night, as | was — ameal at a restaurant? List four
falling asleep, the people in the next room started playing music. are.
| phoned reception to ask them to ask my ‘neighbours’ to quieten 3 What do you do if you have bad service
down, but nothing happened. So | went and knocked on their door, or a bad meal in a restaurant?
and | am afraid to say that their behaviour was aggressive, almost . . .
frightening. A hotel guest should never be put in this situation, and B Write a complaint email to the manager of
it was the fault of your staff that something wasn't done. a RESCH where you had 2 bad meal or
| was reasonable and patient with your staff as well as other tl serie. Missa Eo you need
guests, but my experience was completely unacceptable. However, to. Use yourideasin Ex 10A.
| am confident that we can reach a sensible resolution. | feel that C Swap emails with another student. Read
a refund of one of my two nights at the hotel would be a fair the other student’s email and use Fo
compensation for my unpleasant experience. A ————————
| look forward to hearing your reply. ’
Regards,
J. Oldman
58`,confidence:88},59:{text:`5B
GRAMMAR | comparative and superlative structures
VOCABULARY | advertising; money
PRONUNCIATION | linking rin phrases
) . g . » = En
y se ee
ee — -— - E - "
-— a A Cr 4 - - -—
% —
Re — X re me — 2 3 we - of —
— oa =i i et Ce
: ry NR naib Sy
: i hin a Sr
VOCABULARY C Work in pairs. Look at the words and phrases in bold
in Ex 1B. Which do you already know? Which can you
advertising understand from the context?
1 A Work in pairs and discuss the questions (1-3). D Match the words and phrases in bold in Ex 1B with the
1 What was the last thing you bought? definitions le B).
2 What kind of things do you enjoy buying? 1 buy something oo
3 What kind of things don’t you enjoy buying? 2 how good or bad something is
3 change a person's behaviour
B Match the sentences (1-5) with the responses (a-e). 4 having a lower price for a limited time period
1 I'm a bargain hunter. I'm always looking for 5 good or useful to do
agood deal. 6 someone who buys things
2 TV advertisements don’t influence me. | buy the 7 when someone buys things from a company because
same brands no matter what. of the name, they have this
3 It's not worth buying inexpensive products. 8 someone who looks for low prices
You spend less but then the product doesn’t last 9 Hin t
as long. agoo price or agreemen N
4 Look, it says ‘limited availability" 10 only being sold for a short time or in small quantities
5 Forasmart consumer it's important to find out 2 A How would you describe yourself as a consumer? Make
about a product before they make a purchase. notes using the words and phrases in bold in Ex 1B.
a Ah, so for you brand loyalty is stronger than i i .
marketing. B Work in pairs. Describe yourself as a consumer. Use at
3 least five of the words and phrases from Ex 1B.
b | agree, good quality usually costs more, and you
gt pay Ror ) 3 A Work in pairs. List any nouns you know to talk about
¢ Really? Then I'm not one of them. | buy things money and price in different situations.
without finding out anything about them. ] i
d So you love it when something is on offer and the pice; Baral
Fry B Learn and practise. Go to the Vocabulary Bank
e Well you should buy it now; there might be none a : * ’
left by tomorrow. | J page 134 VOCABULARY BANK money
59`,confidence:82},60:{text:`Tricks of the trade
| READING | Whenever you're shopping, someone out there is trying to
convince you to buy something. You walk into a coffee shop
4 A Work in pairs. Look at the image in the for a takeaway coffee, and you're given a choice between
article and discuss the questions. three sizes. The medium costs a lot more than the small, but
1 What do you know about the marketing the large is only slightly more expensive than the medium.
technique that’s shown in the image? You really only wanted a medium, but for a few more
2 How easily do you think you are affected pennies, why not get the big one?
by advertising and marketing? Everybody loves a bargain! \\ \\ / Vi
B Read the article. Which of the three Si
techniques do you think is the most unfair? = | a
Which is the cleverest? — ; a Se
C Work in pairs and look at the phrases — | — @)
(a—h). Match each one with the marketing i £2.50 C1 Z £3-00 [| 7 Zr, 7) a
technique (1-3) it is connected to. = sof] ——\\ 7, = BE Ne
1 The decoy effect =x CC = _-_ > . \\ ul
2 Hidden fees = i . / |
3 Scarcity marketing
E— The decoy effect 5,4 that's just it. Nearly
. . everybody goes for the large, and all those pennies add up
b miss their chance ee .
. for the seller. You've just experienced the decoy effect, one of
g sped a BEEF Hine ) many marketing techniques that influence people to spend
d the price of the middle product is closer more than they had intended. The price does not reflect
Bele IPL af the mest expenslye the size of the coffee; instead, it's carefully designed so you
e there aren't many more feel you're getting a good price by choosing the big one. The
f three products medium is the decoy. And even if you know that, you can’t
g avery low price resist. It still feels like a good deal.
h X number of people are currently looking
D Read the article again and check your ideas. The hidden fee Among the most annoying
marketing techniques is the ‘hidden fee’, a technique which is
5 A Complete the summaries with the phrases often used for online purchases of items like concert tickets.
(a-h) in Ex 4C. There's a concert you desperately want to see. You find a
The decoy effect: There are usually ' f website with tickets on offer at a much lower price than
offered, and 2. This influences consumers elsewhere. So you click and start choosing ... the date, where
to buy the most expensive one. to sit, ete. You enter your details and go to the payment page
Hidden fees: There's an online and ... What's this? A service fee of €4. OK, they have to
advertisement for a productat? , one make a profit, but then there’s an ordering fee of €3. As you
that is much lower than the competition. go deeper and deeper into the process, there are more extra
People entering information, and then charges. But you can’t turn back now, so you pay, spending
they find out that there area number of fifty percent more than you intended. Marketing companies
“00d tie Nal pice i much inher than know this: the more time you spend, the less likely you are to
the one advertised. : y i p 3 : yy
. . . stop. But, you think, at least I've got my tickets!
Scarcity marketing: The advertisement
tells the shopper that © at the same o =
product at the same time as them or that Scarcity marketing And finally, there's
7 examples of this product available. The ‘scarcity marketing’, which exploits the fact that people
shopper feels that if they don’t buy now, value things more when they are available in smaller
they may ® numbers. If you've ever booked a hotel room online, you'll
BiG fla ellis: Ela TlReh Alp Hew the phrases Only two more rooms at this price’ and
5 : 14 people are viewing this listing right now!" You need to
you think you are influenced by the three , : ;
SncEmtums in Himaptite®Giensamples book now or you'll miss your chance! It's not altogether
certain that those numbers — the two more rooms, the 14
6 Find a real-life example of one of people viewing — have any connection with the truth. Still,
the marketing techniques from the text. you'd better make that booking just in case they do.
Prepare to tell the class about it and if
possible, bring a photo. Consumers are more aware than ever of the different tricks that
marketing people use to get them to spend, and spend more.
Ironically, that awareness doesn’t seem to change our behaviour.
Perhaps knowing the tricks makes us feel we are not being
fooled — just accepting that it’s part of the consumer world!
60`,confidence:86},61:{text:`5B
GRAMMAR SPEAKING
comparative and superlative 104A workin pairs and discuss. How could you use the three techniques
structures in the article in Ex 4B to market these products?
» a premium gym membershi
7 A Look at the sentences from the article “ bil vee dint . K
and find the full comparative or 2 Te BE. RRANS ATRL INIEHIE. Racks
superlative structure. * gmigrowave
1 The large is only slightly more B Work in pairs. Look at the notes from a marketing discussion and
expensive than the medium answer the questions
2 pir fo mest annoying marketing 1 Which — use one athe techniques in the rice n Ex 487
3 As you go deeper and deeper into the 2 Which two (aeRs do your think are the most effective? Why?
process, there are more extra charges. 3 Which tag line* do you like best?
4 The more time you spend, the less *tag line = a memorable phrase or sentence used in marketing,
likely you are to stop. often at the end of an advert
5 Consumers are more aware than ever
of the different tricks that marketers
acy < Notes ces
B Look at the sentences (1-5) in Ex 7A Target: sell more premium gym memberships
and find: + Free T-shirt and water bottle for new members
1 two comparatives that use repetition. » Offer first month free if you apply by midnight tonight,
2 a comparative that refers to a time and no charge for cancelling after one month
period. + Market three levels, e.g. basic, ‘be fit, premium; price
3 aword used in a comparative which ‘be fit’ close to premium
an only wn —r . « Bring-a-friend special — 50% discount for 2nd person
4 a phrase used in a superlative that ;
means ‘oheok the » Offer 50% off the personal trainer fees
* Promise a refund if not 100% satisfied
C Learn and practise. Go to the Grammar
Bank. Tag line
Ld page 119 GRAMMAR BANK » The healthier, the happier
« Best ever offer: first month free
PRONUNCIATION + One of the fastest-growing health clubs in the country
8a | linking rin phrases | Work in pairs
and look at the words in bold. Where is C Work in pairs. Write three ideas and a tag line for the other two
r pronounced at the end of aword and products in Ex 10A.
where is it silent? Why?
i Thabosteveradvertive seenmas ons 1a You are going to have a discussion to share ideas. Read the Future
for jeans. Skills Box and answer the question.
2 TV ads are becoming more and more
like mini films. FUTURE SKILLS
3 Phones are getting cheaper and s :
dispar Communication
4 The more | buy, the better | feel. When people are coming up with ideas, it's important to encourage
them in order to help a discussion become more productive. What
B E5.04 | Listen and check. words could you use in these comments? Can they all be made
positive?
Cc 5.04 | Listen again and say the ]
sentences with the speakers. Focus on | think that’s a really idea! That's a very point.
the pronunciation of the r. What a/an idea! Maybe it needs to be a bit more...
9a Change one or more words in each
sentence in Ex 8A to make it true for you. B Work in groups. Choose one product in Ex 10A and discuss a
TR SEE RL I TRTORRTIRC, marketing campaign. List as many ideas as you can think of.
fora phone. C Which idea and tag line do you think is the most effective? Does the
: ; ; _—
B Workin pairs. Read olit your changed idea use any particular marketing technique?
sentences and give an example of what D Tell the class about your most effective idea, and explain why you
you mean. think it is effective.
61`,confidence:85},62:{text:`i - AM . way 7 T= 2 ae TRAD A Vi A 1 ~ -
Il 7 = 9 Pil Te ~ ha HAN HES NV
Unit5 | Lesson C I Ph - > Uadiress o SER A 7
TA BR = ZAR a be SD 93 ;
wo E i { om <3 ’ | » — isang = yA — — ~ 33 = ; \\
nr 7A — | dl ne J Wy Jos FRG
3 MARY Po Re Ln /
- | Wd at \\ : i ay : 7 oi Fa Se
Tar ( \\ BR
Is 7 I Ne is RY XX: NEN “=
0 RY { no» \\ AR 1 % \\ a
J ll TERN AAT LT) NING
/§ should | bu 4 Be GEER) SY
[| ® fr Af iP J 8 LY
V .
| A AY AW 1) TUE AEE L TY SE hb r Rk» p+ gr. 1 a ES
3 HOW TO ... | summarise information from different sources : _-—
Sea *
VOCABULARY | fesciting produces gn i ES 4 ™ :
PRONUNCIATION | intonation in summarising phrases 2x5 "= <= “9% “oy % on vr » pr
p — - P< (1) =2i Y ¥ 2 ¥ - bf ~ Nl =
= - — = WEE Wr) Ale
= SFY Spry EY Aa
= ‘ : Z AN 2 (7 aig S70 URRY
3 fi cy = = ka / a 1 ll a AD | : {i 1. NH 3 [ a
VOCABULARY 2 Read the reviews of two e-bikes. How might these
help Lynn with her decision?
describing products
Review of the Dorith 4 month
1 A Work in pairs and discuss the questions. . : ; adadain wy oi
= . ; My overall experience with the Dorith was positive. It
1 When you are thinking about buying something, was comfortable to ride, though the ride was nothing
where do you get information about it? special. The motor is quiet and the battery range of
2 Look quickly at the texts in Exs 1B and 2. Where does 80 km is impressive. The bike is solid and feels very
the different information come from? stable. At 26 kg it’s a bit heavy, but | didn’t mind this.
3 Have you ever ridden an e-bike? What do you know If you're in the market for a decent electric bike for
about them? commuting and maybe the occasional weekend ride in
the hills, but not serious climbing, then the Dorith is
B Read the message exchange. What useful information areally excellent choice. It’s a good all-rounder, very
does Sam tell Lynn? practical, and for £1,899 it’s superb value.
sob ce
y Excellent value, good enough for me!
Hi Sam, I'm shopping for an e-bike and you're a bit I purchased the Wells Rider two weeks ago and I've
of an expert. What type should | get? | don’t mind been mostly happy with it. Itis especially suitable for
paying for something good if it’s really worth it. 13.40 getting around the city. The small motor means it isn’t
too heavy, about 22 kg. The only thing I'm disappointed
Hi Lynn. Big question. There are mountain with is the range — the manufacturer promised 60 km
bikes, cruiser bikes, commuter bikes ... What on a single charge, and I've lost power after 40 km,
do you want to use it for? iz: which is acceptable for me but not what | expected.
I've been off-road with the bike and it was a pleasant
Basically for getting to and from work, and for doing surprise, it moved really well. For the reasonable price
shopping. Maybe a bit of exercise, but nothing major. 13s of £1,400, | think it’s not a bad buy at all!
OK, so a commuter bike would probably be
best for you. 1:01 3 A Match the adjectives in bold in the reviews with the
meanings (1-6).
One question. What if | want to ride in the forest?
You know how hilly it is here. Maybe | should get 1 ‘good enough forthe puepase (2 wands) dese
a mountain bike, but | don’t want anything too 2 very good (2 words)
heavy. «0s 3 having the right qualities for a particular person
or situation
You can’t put a rack or a basket on most mountain 4 fair, not too high (or low) when we talk about price
bikes. They're not good for shopping or carrying a Ed EO ——
laptop to work and they're often quite heavy. 1:0: SLEONg. NOL Uke Lorca €asly
6 not falling down easily
OK. But can | ride a commuter bike in the forest? 141s
B Look at the phrases (a-d) from the reviews.
Depends. Some models can, like the Dorith and the Number them in order from most to least positive.
Wells Rider. I'd recommend one of those, actually. 1:= a not a bad buy c apleasant surprise
What's the difference between those two? 1s:22 bx apthing special d.anexeellentehaie 1
oT TE Ce er re BS C Work in pairs. Talk about things you bought recently.
Ce ero oi Use words and phrases from Exs 3A and 3B.
62`,confidence:73},63:{text:`5C
How to PRONUNCIATION
eee
. . - A | int tion i isi h i irs.
summarise information from 6 | intona tion in summarising phrases | Work in pairs. Look at the
= phrases in Ex 4B and find the ones that are followed by commas.
different sources
B RU 5.07 | Listen to the phrases with commas from Exercise 4B.
4A 5.05 | Listen to Lynn and her friend Does the intonation go up or down at the end of the phrase?
Coa oe Site oy one does Lynn Cc 5.07 | Listen again and say the phrase at the same time as the
ME a speaker. Pay attention to intonation.
i» in pales, amples each sentence 7 A Think of something that you've recently bought or have read or
with one:wors, heard about. Prepare to talk about it using at least four of the

1 From he says, it depends on phrases in Ex 5A.
what you want to use it for.

2 The only is that a mountain B Work with a different partner from Ex 3C and tell them about the
bike is no good for carrying things like item. Pay attention to the intonation of the summarising phrases.
shopping.

3 According. Sam, it’s quite

4 Long short, it’s a better bike.

5 Soit’'sa of whether you want to : : eis
pay more for more range and a better 8A workin dre What are the features and qualities of a good
uphill ride? backpack? Look at the images and discuss.

6 Yes, in the , it’s a question of
how much | want to pay.

7 All all, reviewers of both
models were happy with their bikes.

8 It all comes to the price.

9 Well, just something’s less
expensive, it doesn’t mean it’s not
good.

10 Yes, taking into account, | think
the Wells Rider is good enough for me.
Cc 5.06 | Listen and check your ideas.
5A workin pairs. Put the phrases in bold in y A
Ex 4B into the correct group.
saying where | From what he says, ... ,
you got the
information
B Work in pairs. You are going to choose the best backpack for two
people. Read the information (a and b) about them. Then go to page
142. Use more detailed information about the backpacks to decide
summing up | Long story short, ... on the best bag for each person.
ideas a a college student who carries a laptop and some books to and
from college every day, and also sometimes takes weekend trips
to see friends
b a businessperson who carries a laptop and documents to and
from the office, and also takes short overnight business trips
from time to time
focusingona | The only thing is that...
specific point
MEDIATION SKILLS 5
selling an idea n A
explain something clearly to sell an idea to other people
A » page 152 MEDIATION BANK
B Learn and practise. Go to the
Grammar Bank.
Ld page 120 GRAMMAR BANK
Speak Go to the interactive speaking practice 63`,confidence:88},64:{text:`Unit5 | Lesson D -
TE Tae y
Ji! (Hi *
I . atid 1 5
EL D rielc ik ne il Hand ner san ny as ) Co
> D LICE L | LA =i A’; [4 "WAN Il | tow
Ld la] — or 7 == = = == L115 mie 91
{ i = |
HE ed i TR
| i> a
. J: A C8 el| i ig
(0) I myse an | He
Ea Pn
Dean ) 1 J
GRAMMAR | causative have and get;
reflexive pronouns
SPEAKING | planning an event VIEW
WRITING | a meeting summary
2 A [J Watch the first part of the video. Which speakers are the most
similar to you?
“ n Po B [J Watch the first part again. Match the speakers with the reasons
° ig that they give for doing things themselves.
; 7 1 | can save money. a Dean
AA > \\ 2 I'm the only one who wants to do it. b Imogen
| 3% Td
ll 3 | want to solve my own problems. c Rory
wri = 4 4 I'm very good at it. d Jane
1 111 it - J LR
I | [| i 1 3 3 A Think of a job you can ask other people to do for each item (1-6).
\\ <1 \\ ’ 2 19 fra 1 garden 2 car 3 hair 4 food 5 windows 6 nails
p : LD ; -" B O Watch the second part of the video. What do the speakers ask
: y/ r= other people to do for the items in Ex 3A?
Cc [>| Work in pairs and complete the sentences. Then watch again
PREVIEW and check your ideas.
1 He does the best job, so it’s the money.
1 Workin pairs. Look at the things in the 2 So, | get my food delivered, | get my hair and | get my
box and answer the questions. nails :
- - ) 3 We get our windows every month.
cook dinner . cuthair cut the fess 4 | get a mechanic to my car every year.
do the cleaning dotieshapping 5 I'd get someone to my hair rather than do it myself.
fix things walk the dog
1 Which things do you do? How often do
you do them? GRAMMAR
2 Which things does someone else do . i
for you? causative have and get; reflexive pronouns
Z — 4a Look at the sentences (a-d) from the video and answer the
v NR , questions (1-3).
i ) i a | actually always cut my own hair.
R » b | always get my hair cut professionally.
oh c | always have my car cleaned.
- ) :
{ 5 : d | get a mechanic to check my car.
. 4 ? 1 Who does the things in sentences a—d: the speaker or someone
v oY 8 else?
2 1 A 2 In sentences b and c what grammatical form is cut and cleaned?
BE v B] Bc] 3 In sentence d what verb form is used after get?
) Yr : ae fr" ed
TG LACM AMS A B Complete the reflexive pronouns. Look at the example below and
: . the last sentence in Ex 3C to help.
Q1: What kind of things do you | |
always do yourself? [you [he [she |it |we |you | they
: | himself
Q2: What things do you pay .
5 C Learn and practise. Go to the Grammar Bank.
someone to do for you?
[1] page 121 GRAMMAR BANK
64`,confidence:74},65:{text:`I 5D
i 4 o- 3 od - i ~~ pe : nS L
! : " a)
So pos i » - t '
2 a be BW s
TH 110 Ta Bi —Y p ol
3 = I di fl <4 o o— y fe 1
— Rite a - :
© Trai >a { ’ 1 & | -
Yr. bd | [rg y ,
{77 f——— gl Te 3 LE
Ff | PRET 5% 5 Gc.
ES J ve 4 Sa | { po he
pre "4 pi s y d )
$< f i A 4 =
planning an event Ky. TE EB 2 ts E,
dl TE 3 = # ( -
I . J Ti I» ~~
5A workin groups and choose one of the projects below. | | || = \\ 5 ll | i y
Make a list of at least eight tasks that need to be done. J!’ h p= ll * . \\
« organise a surprise birthday party for a friend | EIS \\ 3 pe i Ea &
| I} Wy N
+ renovate and decorate a house | WAY Sa f ho
i 4 WAT LA
» something else = FORT DOM be
Fe - AL LZ LR
Sagar Ede ind ) A )
B Work alone. For each task on your list, put S (self) : AOANES I en Bd ARN
if you want to do it, and P (pay) if you want to get p= Ta
someone else to do it. ’ ce ,
C Look at the Key phrases. Which can you use when you i i 1d i
discuss your ideas in the group? ——— . ib. ~
—
LT J PE
| 7,
KEY PHRASES 1 4 fied
We should do it ourselves. & E |
It’s better if we get someone to do it. : v
Does anyone want to suggest anything? 4 y - -
It’s more professional/expensive/personal if ... i 4 —
Does anyone have any other ideas? | j=
I'm good at ... , so I'd be happy to do it. Aisha Ee | |
I've done something like this before so | could ... =
What do you think?
WRITING
D Work in your group. Have a meeting and discuss the a meeting summary
agenda below. Make notes on your decisions.
7 A Turnto page 140 and read the summary of a meeting.
B Look at the headings from the meeting summary below.
Agenda Look at the headings from th ing y bel
1 The purpose of the meeting Use these and your notes to answer the questions.
2 Action points: Who will do each task? When? Overview
3 Overall decisions Action points
4 Questions still to be discussed To be discussed
i 5 Date and place of the next meeting Next meeting —
A: 1 think we should have the room decorated for the 1 What information can you put in your ‘Overview’?
party. It’s more professional. 2 How many points can you put in the ‘Action points’?
B: | think we should decorate it ourselves. It’s too 3 What ideas can you put in the ‘To be discussed’
expensive if we get someone to do it. section?
6A Look at the Key phrases again and find three phrases C Write a summary of your discussion in Ex 5D. Use the
for asking people their opinion. headings in Ex 7B and the model on page 140.
B Work with other students. Tell them about your plan, D Read other students’ summaries. Whose plans do you
and ask for their opinion and suggestions. Use the think are the most expensive?
Key phrases.
65`,confidence:73},66:{text:`5 pay
GRAMMAR VOCABULARY
clauses of purpose: to, so as to, in order 4 A Add vowels to complete the phrases.
to/that, so that 1 400 eurosisar__s_n_bl_ price for agood mobile
1 . . phone.
& Canpiste the fis WI EN wags i earh ugh 2 | can getad_c_nt lunch for 8 euros in a restaurant
. . in my hometown.
Packing light = al 3 | don’t think it’s w_rth paying more than 60 euros
ur = for a hotel room.
before yo flight 4 50 euros for a good pair of sunglasses isn_tab_d
It’s important to follow a system when packing for b_y.
atrip! so that you don’t leave anything behind 5 Sometimes very c_nf_d_nt people can seem a bit
OR carry too much with you. _ggriss.v_.
« Pack the day before leaving ? that there’s & Whensgivese sh, TORI | el
no panic on departure da ry
p . P Y: 7 Theolder| get, thelessp_t__ntlam.
« Getafriendtohelp® youdont make bad 2
ol 8 Amazingly few people are truly s_ns_bl_.
decisions.
+ Make a written list soas“ overpack. B Work in pairs and discuss the sentences in Ex 4A. Do
« Put all the things you think you need out on your you agree or disagree with them?
bed in® see how big a suitcase you need. :
A ; 5 A Choose the correct options (A-C) to complete the text.
+ Notice the unnecessary things and remove them
s0°® to carry more than you need. 7
+ If possible, choose a suitcase with wheels in
z it's easier to move. Shoppers beware!
« Pack your suitcase, and weigh it® sure you . SE a .
don’t have to pay extra. Every knows about pricing tricks like putting 99
fh ed ; g i at the end of the price, but what about other things a
If the i tis OK, you're ready to go! Have a shop does 2 get you to? a purchase? One
great trip! example is the location of products. Even if you don’t
have a particular brand * , you're more likely to
B Work in pairs and discuss. Which tips are: buy things because shops put them at eye-level ®
« obvious and unnecessary to say? you see them first. In supermarkets, the essential things
« useful or not useful to you? (milk, bread, etc.) are at the back of the shop so ®
make you pass everything else on the way.
comparative and superlative structures And shops also pay attention to your senses to’
you. Take music, for example. ® the music, °
2 Complete the sentences with comparative or you feel and the more time you spend shopping.
superlative structures using the correct form of the And in the end, shops know that price is king so you'll
words in brackets. find products in almost every part of a shop.
1 My favourite types of food are among the After all, who can say no to" 2
unhealthiest ones that there are. (unhealthy)
2 When things get difficult, | just try todo my Next Nv
best. (hard)
3 The | get, | become. (old, happy)
4 One of days of my life was this past year. 1 A hunter B consumer C buyer
(enjoyable) 2 A inorder B so that C to
5 | think it’s great that people nowadays are living 3 A make B do C buy
than - (long) 4 A tradition ~~ B quality C loyalty
6 Winters in my country are now than : 5 A inorder B so that C to
(cold) 6 A asto B as not to C that not
7 A get B influence C interfere
causative have and get 8 A Theslower B Slower is C Toslow
3 . . . Lo 9 A calmerdo B more solid C the calmer
Worn pre Whi of youdoss moreci the ngsin 10 p onchemp Bonofer C toot
) a ’ 11 A agooddeal B a big deal C the good deal
8 —y
buy food cl h t hai
MESES a SH. EUSFRENTE B LJ R5.01| Listen and check your answers.
do the laundry fix your computer wash your car
= )
66`,confidence:82},67:{text:`A ~2{ lL - 5 , =H Hf Tk : Bl Pop i A , oe dt Sy le TT i fag fis en A EF =! of = es | Inez
Rac fees wy ME AE See AF We li | EER CE TE
fd =p L i a i 5 5 = fy ts 1) 5 4 3a BG et = JE Ue BE mi re — = : = “= "
Ee Seay EE TL Smee : Ree ERM © man | Re:
£2 ro = Ed” Sal 0 = TE) IRS - per Se iEE] ] L177 rp aT AE semi i Sel |e Te ed
oy eo SERRE EE A ANE Lay =. Bi i
Ata hogy AY : ap 1 ed = =| ai re A | | =a Es ayy Ra : Sah = |
> fim To eg aw EA alle 2 a pe Ta Aa pa 8: -
’ oH iE BL Hii" aE wo bf a 2 - : ey ¥ a Te
= reget nt ANCES sai Sa Sede SS BEN
NPY. a Op FL PEEEE a EGE
A AE for il 2 E ia B g i : \\ LT ug A wl, 2 (FEFY SN no ; rE
- = —; il ig /7 ’ » [ i. \\ ! -y PR & a un > | FR Re : $
“EEN 4 =i (gh | h® SNE :
L AY PN oa LONE | NER ER
Xa 4 \\ PRR rv 5
pil ev ih \\ . Hh LP |
Af, { Pd \\ ’ HRS § &G XN |
| RR ae \\ ? S SRE NY
| €%a \\ SEE ANE
: 3 / [ \\ ri I] L ANN i
| EEE < w x LT ¢ \\\\ . © ==mma TNE
] y | id i # : ome — ——— 5 \\ & > — > . ». I =
re 7 vf v gy pe— TT \\ k 3 a AL ¢ Hee,
Ag bts, : =< ~ & Bo A ui + v N \\ o |
bh / Sf A fn Sp 3 TAN y
/ \\ N Hrsg. \\ vr
45 § : 7 | fhe “ St |
% 4 PA Va = si ¥ 4 X f | Si t » » \\ ¥ |
~ AE i ils 'E £5 \\ \\ 4 \\ |
& 3 9 | i | a 2 Ng) Gai |
NEE FRI 2 31 7, 0% Global —M———
; WR = a ori NS Scale of
AT Ne LE oa English LEARNING OBJECTIVES
FoR BR ES A
xe x 2B SR EON oe
ER atallO a NE 57 aR 6A LISTENING | Understand people talking about great
pod he i Ta i Aare neighbourhoods: areas of a city
pe eb, oF Jo 0 ATA 8 . .
BB NL “ a 5 > 7 d Describe your favourite neighbourhood: so and such
© srg | a LR i AE : Pa
Tea i ENN 8G pT Pronunciation: intonation for emphasis with so and such
[3 JFL oe RE Write instructions for how to get somewhere
Et 6B READING | Understand an article about epic journeys:
challenges; idioms
VLOGS Describe a challenging experience: be/get used to
BSE ns or cs eee ee Pronunciation: be/get used to
’ 3 AS a SG 6C HOWTO... | ask for and confirm information: city transport
pr EPR SR Pronunciation: fast speech: just
Shadi 6D BBC PROGRAMME | Understand a TV programme about
Nork in pairs and answer the how China has changed
question. Give your reasons. Talk about what a place is famous for
Write a description of a business idea
67`,confidence:41},68:{text:`se bo LR Rv : Jarrett | (1 ? ALT
Unit6 | Lesson A T= SHSM Sere § 1%] BE ES Ie
ol . SY Gall | | FRE 0
L6AInthecity | TS
. ; Bn - p— - i EL-F
7 Bale Gt I a — B\\n Ga
x | — RR [| |
i | GRAMMAR | so oni svcr PON | a} 1 bo
©,» VOCABULARY | areas of acity § 8 Lisson RAR Sf | Wj [|e : Ea
I PRONUNCIATION | intonation for emphasis with so and such fi ) on = = | 3 hin |
A Se | 5° oe gy . A JHA (ONE RN
© Y ; y DN EPEC rm, By A Ra
vy bh - Sd | “a Fa k 4 Tadse. Too TH al TY = FL # |
: BPE LC rant VEER ne ES Sl i)
\\ 17 \\ RN i fo NE og A ER Lr —
VERRAN ees RL
: CE == Vell ous Ne Tm
| tl in THI §/ 1 7381 % 4 | a &
[11 a. Jen 1 { 15 N ; I N38 CENT PR
x. i NE Ii I aga AR go A CE | TTI me
TE pati ca | SSC VANSNEESES RIL on WC Cla RE
iif it = ihe il [i 5 2 - 57a 7 {1 4 READS 2 4 ih 1° pe: a 5% Sa LN 7 a
ay 4 Ee wil ( @ in oy A : ¢ eye Bh he dl his: at —
me TR LATTE ich A sp SRE LL
oy Barranco district, Lima A TONE | Re or he = ee
VOCABULARY 2 A Match the phrases in bold in the article with
i these meanings.
areas of a city 1 wide streets with trees planted along
1 A Work in pairs. Look at the ph d h i He gies
ork in pairs. Look at the photos and answer the questions. 2 eriold snd BOREAL BUIAINGS
1 Do you think these look like interesting places to visit? 3 GorewherEthata Iter
people from
Why/Why not? outside the city like to visit
2 When you visit a city, what kinds of things do you like to do? 4 very tall buildings
B Read the article. Does it include any of your ideas in Ex 1A? 5 a place which is very good for something
6 an area in the city which is not in good
condition
. _o 7 places where there are a lot of rich people
What makes a great place to visit? P beep
8 when a lot of people go out to meet each
What are the things that make a neighbourhood great other in the evening or at night
and make us want to go back there? Is it the historic 9 an outdoor market where there are a lot
buildings and impressive architecture? Or, away from the Bf PEple So
wealthy areas, you might want to enjoy attractions such a feelifig that you belong ifvthis place ard
: with these people
as colourful murals and bright street art. Perhaps you i. i bi
want to get away from the high-rise buildings and walk LL Ege pats LL fight Salis Bn Lal
through tree-lined avenues or sit in an old square with a 12 afeeling that the areas peaceful and calm
relaxed atmosphere and watch the local people come and B Work in pairs. Think about the place where
go. Or find a spot to enjoy a coffee in a more run-down you live or an area near to where you live.
part of the city. There may be washing hanging from the Ask and answer the questions.
windows and paint peeling from the doors, but that makes i : ;
: : 1 What is your favourite part of this area?
you feel closer to the lives of the people who live here. A Why do you like it?
great neighbourhood might have a busy street market. It rm ——
could be an ideal spot for some shopping, with interesting, Haas sons. Why? ¥
independent shops. Or maybe it’s the social scene that 3 Where would you recommend for a
you're looking for; somewhere with a sense of community tourist to go first? Why?
and friendly cafés or restaurants, where you can meet up 4 If you could choose where to live in this
with people, listen to some music or look at art. Or perhaps area, where would it be? Why?
you're looking for lively nightlife. Whatever it is you 5 Which is your favourite spot for
enjoy, sometimes a great neighbourhood has these things, shopping? Why?
and then everyone finds out about it. Soon it turns into a 6 Which area is best for going out with
popular tourist spot, which can mean it loses its appeal. friends? Why?
But that’s OK, great neighbourhoods change all the time,
so it won't be long before you find a new place to visit.
68`,confidence:70},69:{text:`6A
LISTENING GRAMMAR
3a Be.01 | Listen to three people talking so and such
about the places in the photos. For each .
speaker, tick the things they mention 4A Workin pairs. Look at the sentences (a-h) from the recording
i ’ and answer the questions (1-2).
ogan
9 a It’s so beautiful to walk around.
tree-lined avenues b It’s so peaceful that you hardly realise you're still in the city.
lovely spot for walking ¢ The area has become so popular that it’s quite a tourist spot now.
wealthy neighbourhood d There’s so much to do in Yarraville.
ET a Hl e There are so many diverse neighbourhoods in Toronto.
MEYERS f It has such a friendly, welcoming atmosphere.
Cecilia g It has such lively nightlife, too.
—————————————————— h It has such a great sense of community.
fantastic views of the ocean 1 Complete the rules using so or such.
colourful murals lively nightlife is :
; We use before an adjective (without a noun).
popular tourist spot run-down area i
bookships We use before the quantifiers much and many.
) We use before a noun (with or without an adjective).
Amy 2 Tick the options that are possible.
—_—————————————y We can use so/such (a) + adjective/noun + that:
colourful murals busy market . to emphasise a point
food from all over the world ’ .
bakeries coffee shops « to talk about the results or consequences of something.
live music sense of community «+ to explain the reason for something.
B Learn and practise. Go to the Grammar Bank.
B EJ 6.01 | Listen again. What examples
do the speakers give to illustrate the jad Page 122 GRAMMAR BANK
statements?
Rosedale PRONUNCIATION
W Ee REA IEE HERR : 5a | intonation for emphasis with so and such | Complete the
huge tree-lined avenues, historic s . <
century-old houses sentences with so or such. Which words carry the main stress?
2 It has a lot of green spaces 1 ltwas interesting to learn about the history of the place.
2 Itwas _a lovely place to visit.
Barranco - :
, CL 3 The food was delicious that we decided to go back the
3 It's an artistic neighbourhood. next day.
4 It'sa popular area. 4 The neighbourhood had . a welcoming atmosphere that we
Yarraville didn’t want to leave.
5 It's a great place to eat and drink.
9 P . B Bes.02] Listen and check.
6 It has a lot of things to do.
Lo . . C Work in pairs. Practise conversations about visiting cities.
C Workin pairs. Say which neighbourhood Student A: Go to page 139. Student B: go to page 141.
you would like to visit. Explain why.

5 rravitie district, Melbourne a BAA rosedate aistricg, ioronto Wy 4 5 : LE eg Pe
BERRI lls of © A 5 BAS Pll oon N eg N : Th FORRES W ote 1
INE, LRA Ol Es, Noe 5. ates ommend Eo HM oi er FH =
BOS CoN foe D2 in daa Pad Cae Ee pi FY LA » » BIEERS. Ne x =

SM Tg ee Gc iY, Sea ira Gy ( + plas ram gl ek Re
i = TONER TERS TORR FE TO ae SHR = cs REED wrt So

(AN me | F&) TE. Rk, NE Ff XN ZH 3 GEE ENE er eat rT
fe A I ‘ > I | I K RG rey SN (ls emma : 2 2 5 9 Ed E 5 =a f gis i
Ect wh PHBH ' i | Fi : s | 7 PL 10 hy Bi bE Fg fad a. L

117 4 A gn oad dE ds: « i= A 3 En EN EE ¢

y hi? Blan 80 oa AFT) Pace fri | 55) ne: = ERE af Bs yr pe BE C7
duis Js IRE by. 2 WY - - Ep —— = 5 ofl Seas ERT EES mag. TE
if = pn “By I) gy 1 E- __ _ Sy ; hed “31 d 5] I i | Bord H
CE \\ Ad *) A Toh Rl: = I= L Hl a il PA 1) { 3

2 | 1 , | iS ; 3 b> wo Tes ro = yi ; = = | pe ms - r a a

erat I ul Ts EE 1- BN

3 PETC — See SoBe HE UF BB Eel eS
- a a —_—— : > Ma - - = EN 964 4 = a oF i = ak: HEE Ey iis -
rh = % -_ 3 v ao fees. fo ye g “5 o> SRE
A Se - gl Le os S | RE Se, 60 TF
a a = = 5 : was” vy,`,confidence:61},70:{text:`Unit 6 | Lesson A
SPEAKING 8A Look at the phrases for giving directions.
Find similar examples in the email and
6 A Plan to talk about a favourite neighbourhood either in your add them to the correct section.
city/town or one you have visited. Make notes on these points. Suggesting a route
« where itis in the city/town « things to see and do The fastest / best / cheapest /
« how to describe the area « what the atmosphere is like way to get to X from Yis to ...
« what it’s known for « the best time to visit It's about a 10-minute drive / 2 :
The journey takes about 20 minutes.
B Read the Future Skills box and do the task. Detailed instructions
Takethebus/ataxi/3 _._ /* _—
FUTURE SKILLS Geton/° at.
Collaboration Walk down...
To find out more, we can ask speakers to give more details about TTT AE n
what they said. Before you do the activity in Ex 6C, prepare to ask Describing the exact location
for more details about some of the following: how to get to the Xs just opposite /6 YY.
area, the best day and time to go there, how much money to bring, Sie Sons town Siena rom
what to eat there, and your own ideas.
It’s on the corner of X and Y.
C Work in groups. Talk about your favourite neighbourhood. Ask for B Complete the sentences with the words
more details about the neighbourhood each speaker describes. and phrases in the box.
20-minute bestway get off
on the corner opposite
WRITING take the bus walk down
instructions for how to get somewhere 1 The to get to the city centre is
to from the airport.
7 A workin pairs and discuss. How do you plan for a trip to a new area? 2 Itsa journey and it costs €12.
What do you like/dislike about travelling somewhere new? 3 at Plaga de Catalunya.
B Read the email and answer the questions. 4 fret han de Gracia and take the
1 Why do you think Sara is travelling to Barcelona? 5 Thecaféis of Carrer de Casp
2 Where does Max suggest meeting? and Carrer de Bruc.
3 Why does he think Sara will like the area? 6 It’s just “the taxi rank.
4 How does he suggest Sara travels to the restaurant?
C Think of good place to meet (for a meal,
Hi Sara S live music, etc.) inthe neighbourhood you
described in Ex 6C. Write an email toa
I hope everything is OK for your visit to Barcelona this weekend. friend or colleague telling them where to
We're very excited to have you at the conference. We're planning meet. Explain why you chose this place
to go out to eat on Friday night in the El Born district and we and give detailed directions to get there.
hope you'll join us. It's a really lively area quite near your hotel,
with lots of tapas bars and restaurants to choose from. It's
such a lovely place to walk around in the evening and enjoy
the atmosphere of Barcelona. I'm sure you'll like it. | know your I \\
flight arrives quite late, so I'll book a place and you can meet us tl == gi usb oe
there, if that's OK. The restaurant is called El Xampanyet and the Pl & Aw | ised Si TY
address is Carrer de Montcada, 22. am f | i Tim ; NN §
i | Hl ArT SSN
The easiest way to get to there from the airport is to take the / | ny 5% Tid R
4 S i Z d | B:1 8 bi
airport train. Get off at Passeig de Gracia. Then, from the same bi {EPI Ru
platform, take a train to Estacio de Franca. Trains come about i ES
every 5 minutes, so you won't have to wait long. The station is just i | L fet BELL | Fir LJ
across the road from the El Born area. The restaurant is about a | {1483p comm. 120 AM | 3 od
5-minute walk, 500 m down the road from the Picasso museum. th BREN o Luud = aE Ly ba Fl EI a
We'll be there from 9 p.m. Looking forward to seeing you there. | em al] == =_=4
I'll give you my number in case there are any problems. It's = :
+34 7578547623.
Best — mm UREN USS USER. SEER SSSR! ENE
. jo id | vel 3a Hovaudl. Lo
Max = = k- ed a 0 ESE ro
70`,confidence:81},71:{text:`— TSS 6B
E— —— : a =
——n
& AR ° < — .
= 6B Great journeys an
Lob
i a -
of EEA. a en. ; = = " ain anithe I
AR i ”
0 GRAMMAR | be/get used to &
¢ VOCABULARY | challenges; idioms
PRONUNCIATION | be/get used to |
> .
~ - o 1 id . 3 3 = ad Dr - &
h ‘ x RR STE orn tect ae Tae NR
: : ! A Es Re
~~ . o Pr BRE Se EEE Sa
TaN PEs 5
Ee Pia eee ts OREN \\
: Je Fe > SEOT NRC EES SSL Son J
F 48 = *% = Sane oe Ee =
: f ARNT 5 a al Soa SD NL [Eoin pe ae Ro bm Ty
=” ‘ = BR - ATTA TIIYVAY &
“5s \\ <5 ve Fel VA "A wi AIEEE —- BE - LY
5 Nib - -" ENE ES 3 A A BR A I 1 A A __' Bn I J § — v
Pub = =o CNR - BE pV We |
VOCABULARY —
Why do people go on long, difficult journeys?
challenges Why climb mountains or cross deserts?
1 A Work in groups. Discuss the questions. These journeys are tough — full of sleepless nights and
1 Who in your group has travelled the most poor food. Why do people face the difficulties and
and the furthest? the discomfort? And why risk injury or worse? When
2 Has anyone in your group made a long or conditions are challenging — the rain won't stop and
difficult journey? there's no bed to sleep in — surely it’s easier to stay
3 What is the best thing about travelling? at home among familiar objects and people. Long
What is the worst? journeys are also unpredictable: you don't know what
B Read the blog post and comments. Which will happen next. Is this why people do it: to escape
comment do you agree with more? Why? the safety and boredom of life at home? Some say the
journey is more important than the destination, that
C Work in pairs. Answer the questions about the when we face unfamiliar things — languages, people,
words in bold in the blog post. customs — we learn about ourselves.
1 Which two adjectives do we use to describe
something difficult?
2 Which two words are verbs? Which means
‘get free’?
3 Which two words use prefixes to make Travelling has changed my life. Even if it's
them negative? What is the meaning of not easy at times, it's always so rewarding.
the positive form? Getting to know new cultures allows you to
4 Which three words are nouns? Which is Sy222 |ook at the world differently.
the opposite of ‘danger’?
2 A Look at the photo above and the photos on page | don't understand people who put
73. What do you think are the most challenging 2 themselves in those situations. I'd much
things about travelling in these places? Write rather stay at home! There's a lot to see
sentences about each photo using the words in TomCyp and experience where | live. You don't have
the blog post. to travel hundreds of miles to have an
Climbing a mountain covered in snow is tough. adventure.
B Share your ideas with your partner.
71`,confidence:74},72:{text:`Unit 6 | Lesson B
READING GRAMMAR
3 A workin pairs. Student A: Read Text A on page be/ get used to
73. Student B: Read Text B. As you read, make St
notes about the following. 5a Read the sentences (1-4). Complete the definitions (a and b)
. with be used to or get used to.
1 the achievement i 4 Iki Bit d
2 difficulties and challenges oe «a mM per cay.
is 2 For those who are used to all the comforts of home ...
3 the positives 3 £6 d to living in ati d p ith
, ... getting used to living in a tiny space and managing wi
4 things learnt just four hours sleep a night are huge challenges.
B Tell your partner about your text. Use your 4 After sixteen months ... he was used to relying on strangers.
notes to help you. a try(ing) to start feeling comfortable in a new situation (a
oI & - process): }
EUR oi = a b feel comfortable and familiar with a situation because you
1 Which of the journeys sounds the most have done it for a long time (a state): }
challenging? In what ways?
2 Which of the journeys would you prefer to B Which type of word CANNOT follow be/get used to?
do? Why? 1 noun 2 -ing form 3 infinitive
3 Is there a long or special journey you would
like to go on? Tell your partner about it. C Learn and practise. Go to the Grammar Bank.
4 A Look at the idiom in bold in sentences 1 and 2 4d Page 123 GRAMMAR BANK
from the reading texts. What do you think
it means?
: PRONUNCIATION
1 Local people warned him about how tough
it would be, but he had set his mind on 6A 6.03 | be/get used to | Listen to the sentences (1-4). How is
making his trip and nothing would stop him. the sin used to pronounced?
2 Despite all these difficulties, Lyn Man 1 I'm used to travelling alone.
and her husband had set their minds 5 WEEE CAT ts tha GEaa
on finishing their journey, and so they
continued. 3 | got used to the cold.
4 We're getting used to living on a boat.
B Find the idiom out of your comfort zone in your
text. Work with other students to guess what B (J 6.03] Listen again and repeat.
it means. Look at the information that comes : .
- C Complete the sentences with your own ideas and read them to
before and after the idioms to help you. . Co
a partner. Pay attention to your pronunciation of used to.
C Learn and practise. Go to the Vocabulary 1 When ...,l had to getused to...
Bank. 2 After awhile, I got used to...
1] page 135 VOCABULARY BANK idioms 3 I'm now completely used to ...
SPEAKING
fT Ji J o = | |
ie iT NE = i | : ; ’
roo E et ON Sf ——> 0g - yo 7 A Think of a challenging experience that you had and prepare to
td B~ SE by ii ye = i tell other students. Use the ideas in the box or your own ideas.
- [ 4) I F I [ = Think about the questions.
ml ® |
5 3 . = changing school ajourney along hike a mountain climb
h, 3 . © Bi 55 i moving to a new town/city anew job anew project
tl : ee. playing a new sport starting university a trip abroad |
er pg > Ks - . « What was the background (where, when, who was involved)? |
a : Sn « What unpredictable things happened and why was it |
y a challenging?
=\\ + How did you feel?
: « How did you deal with the situation in the end?
; /\\ « Did you get used to it? |
- || Gai « What things or people helped you? |
= 29 ¥ B Work in groups. Take turns to describe your experiences. |
3
72 |
|`,confidence:81},73:{text:`6B
- - ogee
A: Walking across a continent B: Sailing across an ocean
Motivated by his love of Asia, Rory Stewart walked Sailing across an ocean is extremely challenging.
across huge areas of the continent in the early 2000s. Waves, wind and wild weather make the journey
Asked why he was doing it, he replied that there was tough and sailors need to be able to operate out of
something magical about leaving a line of footprints their comfort zone. For those who are used to all the
behind him across a continent. comforts of home, getting used to living in a tiny
He'd always tried to find experiences that were out inc a Wass los lioie lean
of his comfort zone, which had prepared him for the BERL ALE Misc CRRIEREES.
hardships of this journey. He got used to walking up Heather Lyn Mann, whose ocean voyage with her
to 40 km per day. Local people warned him about how husband lasted six years and inspired her book
tough it would be, but he had set his mind on making Ocean of Insight, describes all the unpredictable
his trip and nothing would stop him. He passed things that made life difficult. She experienced
mountains covered in deep snow, slept on villagers’ injuries, damage to the boat, engines that broke
floors and shared their food. Walking through a jungle, down and the psychological challenge of missing her
he noted the tracks of leopards. In Iran, he wrote children. There were also moments of fear, when she
about truck stops and chicken farms and in Nepal, believed she might die. Her boat engine overheated
the farmers looking after their white oxen. Along the dangerously five times. Twice she had to be rescued
Indian-Nepali border, he followed a line of stones and by bigger boats. On dark nights, when the water
looked out for signs of ancient history in the land. is invisible, it felt as if she was travelling blindly
He had to get used to the food and eating habits of his dada Denieat a iin Tan
oe ) and her husband had set their minds on finishing
hosts. The Kurdish areas of Iran had no vegetables, Fein dq h nd
meat or fruit in winter. He ate bread three times a Disirjolrney Ana sc aay continmed.
day, sometimes with goat's cheese if he was lucky. There were positives. Lyn Mann talks about the
In Pakistan and India he ate bread and lentil curry. beauty of the natural world. She describes how sailing
In Nepal, meals were at 10 or 11 a.m. and then again on the ocean gave her a chance to learn directly from
in the evening. He got hungry during the day, so he nature, from the waves, the sun and the moon, and to
carried snacks with him. discover a new way to live. She learnt to see changes
While staying in the homes of villagers, he spent thee oR MES ie ink claus a abe as
3 i ) : Se, the ocean becomes warmer. She saw all kinds of sea
two hours every evening writing in notebooks. He ; : y :
; animals, including turtles and whales racing her boat,
photocopied these pages and posted them to Scotland dota adie + .
when he could. In his book about the journey, The SES ERR ERs are R EE Mh
Places in Between, he describes how people with At some point in her journey she realised that,
much less than him welcomed him into their houses. in order to sail successfully, she had to forget her
After sixteen months crossing borders between Iran, human schedule. Everything needed to be based on
Pakistan, India and Nepal on foot, he was used to the weather conditions and the conditions dictated
relying on strangers. He learnt that, wherever you go, by the ocean. For her, the message was clear: nature
there are good, kind people. is in charge; she was just passing through.
: % Sr. 50 aD ae
Z Sil Np Ld oh I
«7. = Ce - ~ KR. *
= 3 bw» Ea
R _ /
»
» Jd i]
CR es a b= —
ee de ee - ="
Ses 5 yy ails Ho : -
a se ay Rien = —
SETHE, as SRI CHO oe ou ST e :
LT RE Lae ERG AUT 2 ;
fre annie of ~~. A Qi foe Seni Mac :
Res as a FE
IR BEAT RTO WEY ! Y eto RAC Hina AR oe ROE Ea =¥g`,confidence:80},74:{text:`(7 Y
i ee IEE 1
Unit 6 | Lesson C a” | a —
p— Tg ol
~ - - i I
| | i] i
— ith of 1) i ; i |
6 1 ransporc |||
It, a {
| I] | i |
“4 a ad EER al | - oe .
vs HOW TO ... | ask for and confirm information NY | I {8
“201 VOCABULARY | city transport N wr
" ,.- PRONUNCIATION | fast speech: just 5 = 7 i . \\ |
ot | 2 BN ow ] -
| Saale” Best ways to get around the city
’ \\ 1 The best tourist cities have excellent public transport systems: |
hl - trains, subways, buses, boats and trams that can get you quickly
| ) : i | and cheaply to where you want to go. As technology improves,
Ji ony Y p— Bo there's an ever-growing menu of options. With the introduction
; — of car-sharing and bike-hire schemes, ideas about what is public
A i Zt 4 : 5
and what is private transport are changing. Here are some of our
favourites:
VOCABULARY :
* db E-scooters
city transport L7 . Cheaper than taxis, less effort than
a bike and more convenient than
1 A workin pairs. Look at the photos and / buses, electric scooters have become
discuss the questions. / popular in many cities. They can be
1 Have you ever used these types of - great in cities which are flat and have
transport to travel around a city? TAN ‘ = good cycle lanes, like Amsterdam and
Which ones? - —_ ~~ Copenhagen. They are not popular
2 What do you think is the best way - with everyone, though, and there
to travel around a city? Why? have been increasing numbers of accidents, especially where
B Read the article. What problems are riders don't respect the 20 km/hour speed limits.
mentioned with the different types = = == -
of transport? Bike-share 11 LC £ ! a 3
. Public bike-sharing systems BHALGUA RT : B i&
2A Complete the sentences (1-6) with the Ei ; joer. SS !
- . : have been great for cities trying wr] x ¢
words and phrases in bold in the article. . F=3 pa...
to reduce the amount of traffic 7 \\ 7 3) RL
1 Itry to avoid travelling around the on their streets. They've been el 7A 8 »
city during when there is so PAY NE i We TY)
{ really successful in cities like NEN \\ J
much traffic. ; o P74 ) 3°
Ni 5 : London, Dublin and Barcelona. 0 47 +H
2 | don’t like cycling in the city unless Vou dont Ato book SS rd AY 4 [4 0%. A
there are plenty of to use. Zit doninecc to DOOK 7 — y /° \\ NEY
| find it much safer. advance and often a small : er :
3 Espasa Thadrsibiekat fee will give you unlimited travel for a set period of time. But
can be sent to your home address. it's important to return within that time or you have to pay an
4 It’s important to keep the additional charge. In China, the schemes were so popular that
low in the city to avoid accidents. at one point, Chinese cities had far too many public bicycles. The
5 | have a travel pass which gives me bike-share companies failed and hundreds of thousands of bikes
around the city, so | can go were abandoned.
wherever | want.
6 | don't often get a taxi as they are val Tu 1lz¢
quite expensive, but when I do, | — ;
always : Taam lS BL | Originally from Thailand, tuk-tuks
4 | [ J are now popular in cities around
B Work in groups. Are any of the sentences = ed | i. 5 the world, from Cambodia to
in Ex 2A true for you? Give examples. Ob Iz ( Eo 7s “® Bangladesh, Guatemala, India and
= a ! 8 - — Peru. These small vehicles can be
Ei . Bo great way to see a city. Lisbon,
> EE Portugal has become the e-tuk
capital of the world as their tuk-
tuks are electric and pollution-free. One tip for taking a tuk-tuk —
try to avoid rush hour; otherwise you might find yourself sitting
in a traffic jam with car fumes in your face!
74`,confidence:75},75:{text:`6C
How to ... SPEAKING
ask for and confirm information
6A Usethe prompts to complete the conversation between
3a Ee6.04 | Listen to the conversation. What does a tourist (A) and someone working in a cruise office (B).
Tonya recommend? =
a a night trip on the Thames Clipper from _—
Westminster to the South Bank “can / give / information / iB
b a Thames River cruise from London Bridge . hot fer tous? oe
to Westminster - three types of tour / short
c aday trip on the Thames Clipper from tour (30 minutes) / long tour
Hrecinincron to Greenwich = (2 hours) / night tour (leaves
A —— at8 p.m.
‘go / through / options / Ll
B [6.04 | Listen again. Are the statements about “again? )
the trip Tonya recommends True (T) or False (F)? E—— three types of tour / short
1 Itis more expensive than some other tours. tour (30 minutes) / long tour
2 You don’t need to buy a special ticket. (2 hours) / night tour (leaves
ph ; ) EER TAT at8 p.m.)
3 There is just one main route and it goes from Great. how / get/
Westminster to Greenwich. tickets?
4 You can see many famous landmarks from ticket office or online /
the boat. online cheaper / can reserve
5 You can buy food and drink on the boat. Sorin / must buy tickets /
6 A guided tour is included with your ticket. let / check / have / got / tas fn
“right. Online cheaper /
4 A How do the speakers ask for and confirm ‘can reserve seats / must
information? Complete the sentences. buy tickets / advance
1 So what is the Thames Clipper is g that / right
cheaper. know / where leaves
2 didn't what you said about ... from?
3 Sorry, can you just say that last again? different places / get on /
4 So let me just I've got this right. easiest place / Trumpton
: x ——— Bridge
5 In other We see nearly everything. ~ can/say/lastbit/
6 Have | got this ? There isn't a guided ain didnit cath?
tour. Ee © name?
| i different places / geton /
B [16.05] Listen and check. easiest place / Trumpton
Bridge
C Look at the phrases in Ex 4A. Which ask for 6 ‘thank you / very hel lpful
repetition? Which are used to check information?
D Learn and practise. Go to the Grammar Bank. B Work in pairs and take turns. Roleplay the conversation.
Use the flowchart in Ex 6A to help.
| d page 124 GRAMMAR BANK
7 Workin pairs. Ask for and give information about
different types of transport. Student A: Go to page 144.
PRONUNCIATION Student B: Go to page 143.
5a Ks.06 - res rs i ia 8 Look up some interesting ways to travel around a city
ewordjuselomnesen ira } you would like to visit. Can you find information about a
1 Could you go over those options again, please? specific tour you would recommend? In the next lesson
2 So let me check, ... work with a partner and tell them about the trip/tour you
3 Can you say that last bit again, please? chose and why.
B How is just pronounced in fast speech? Why do we JON
sometimes add it to sentences? MEDIATION SKILLS 0 O
collaborating on a task nn
C Work in pairs. Add just to the sentences (1-4) and :
" discuss a proposal
practise saying them fast.
1 Could | check something with you? » page 153 MEDIATION BANK
2 Let me ask you a question ...
3 Can you say the last bit again please?
4 Can you go over those options?
Speak Go to the interactive speaking practice 75`,confidence:82},76:{text:`Unit 6 | Lesson D
i
~— = oo a :
~~ BBE Documentary [ll VIEW
[ i pes
® 2A O Watch the BBC video clip and answer the questions.
1 Why do you think this episode is called ‘City of
the Future’?
2 Why did the person Reggie meets go to live in China?
3 What are some of the inventions that Reggie sees?
B [J Complete the sentences with the words in the box.
Work with a partner and look up any words you don’t
know. Watch again and check.
SPEAKING | a discussion about what a place is famous for addictive expats innovators metropolis pace
description of a busi id : i.
WRITING | & d=scliption ot a Business ides 1 It’s become a teeming of over 12 million.
2 Among Shenzhen’s population are a growing
number of .
PREVIEW 3 It’s just the speed of change here. It's actually
1 id ra Fehrs Fi 4 from all over come here with their ideas.
A Wor in groups. Loo att e photo of Shenzhen, China, 5 The of change here is undeniable.
and discuss the questions.
1 What can you guess about the city? Think about C Work in groups and discuss the questions.
popalatiab, technology; Arghitesiiine and ERT, 1 What might be interesting about Shenzhen as a
2 What might it be like to live there? How might it be city, and what might you like/dislike about it?
different from where you live now? < PE
2 Reggie says not much has changed in his lifetime
. . in the place where he grew up, compared to
B Read the programme information. How has Shenzhen Shenzhen. What about where you grew up? Have
changed and what do you think Reggie might do there? there been many changes in your lifetime?
4 a» Ed R |
E La] wat L | i 8 : nN
] p - \\ >. = J
rl : — B ==:
3 f= a = | |
~ i > |= hei
x Bls[c B=
fe - ] 1
Cp RX [—— 1.
——: | [EE
1 =e (il
—=8 Reggie in China ale
- Reggie in China is a BBC travel programme. Reggie, a EEE
= 8 British presenter, visits different parts of China and sees BiY-w eT |
TH how the country is transforming both itself and the ITER) ou OY BE fm
= world. In this episode, Reggie goes to Shenzhen. Until the [SEES — Lb p— | |
: late 1970s, Shenzhen consisted of farmland and fishing li E : i Ea | mal
- villages and had just 30,000 inhabitants. Now it's a centre [! fn [ pe |.
rgaf of new technology and home to 12 million people. HE a TY iL me § 4)
HE nv oc Ea Eo gh B SEESHUSEEN, N
: . we oll | le | = erqiaat Ba... 200 IR NF
P= 3) i Ea Ese = mae aa TE, mre HEE iy
| Hl © = ES ==C:3]::3 — ds Th Tm fie TT HE AE FE mg LS . Eom | |
ge hb iz CER ISS HEE 0 NEES CCC FE HEE GI EEleEY ERI ——w [
te IVISEEEES HE Vly Ni == SL SEE i 2c [Tea DR | EEE i=
— — BEE aga EEE pape ee ee a
fim, , | d.=ZEsasci ng TL HEY Fe ; Ries ai = LE ===
FR SE =sas = FEAR HER IREIREE ; B= siz: = s Ilzm=x-4
a = EAE - ees 0 fo = CC |;
TT (Eb CoE Ee Een Peel |
: tied = MISSSSSSETRUE 1 0 SShI Hl H fA it SI —. | I - HE Fad |
iad 3 ME Adel onl me FEY i (S cE = Sa pesto
Tot rr a ge Rename aT TE 8 = {ocr 8
— AR lw cecomer hil, Finca WANE IF erry BE. CC” aes” |W
76 ui i § Ee iE a El) <7 LE A Tee Te 4 BEN
Loreen Bl a i IE i , TOIT gs i — Pre
— ih = ai (|| PE 7 Sed iE EEE FL. aaa Be cana BEAR (Rh`,confidence:59},77:{text:`SPEAKING WRITING BlB]C
a discussion about what a place a description of a business idea
is famous for . . CL
5 You are going to think of a business idea or a new company based
3A 6.07] Listen to Lupita talking about in a particular place. Read the example, then complete the table
Oviedo in Spain. Make notes about the by adding short notes (1-3).
following. TFT
1 architecture 2 food 3 language FLD Global is a company based in India that is led by Bishan
Pataudi. It invites start-up businesses to develop their new
B [116.07 Listen again and tick the Key environmental technology in its Bengaluru office. The young
phrases you hear. innovators who go there include a lot of expats. For example, there
are people from Denmark, the US, Ghana and Australia. All the
KEY PHRASES inventions they are working on are connected to the environment.
| Co | One example is a type of plastic that is made from plants. Another
These traditions have stayed the same... is a jacket with sensors that give you information about pollution
An example of the cultures ... levels in the air. One of the main reasons FLD Global is based in
One of the best-known ... is ... Bengaluru is that the city has a strong focus on technology. For
... is world-famous instance, India’s two biggest IT companies are based there, and it
...is famous forits ... is known as The Silicon Valley of India. FLD Global has a motto:
So, for example, let's take ... ‘Build today to create tomorrow’.
Another speciality of the region is ... -— ——
It's seein forits... ) Name of company FLD Global
leg a aa ml Who runs the business | Bishan Pataudi
Who works there Innovators; a lot of *
What field Environmental technology
4A Think ofa city or town that is famous for z
. Where Bengaluru, India
something. Prepare to tell other students =
about it. Use your ideas or the ideas in Ex 3A. Why there Focus on
Make notes using some of the Key phrases. Company motto 5
B Work in groups. Tell other students about 6A Read sentences 1 and 2. Which is the main point? What is the
the place you chose. purpose of the other sentence?
1 The young innovators who go there include a lot of expats.
2 For example, there are people from Denmark, the US, Ghana |
and Australia.
B Find other main points and examples in the text. Which words
are used to introduce the examples? |
2 C Discuss the questions in pairs.
privat | -- RE 1 Why do you think it is important to give examples in texts? I=
g = : re i 2 How do examples help the reader?
= [iE 8h | 7 A Think ofa place and imagine a business or project you could run
— i 1 Linh there. Use the questions below to help you.
= At S E
e TTT = {| r | i » What does the company do?
I = { ; -
al | i == oils Lop « Where is it based?
hi HH = caid- ge « Whatisit called? JE
Wi = [ d Bo PE [| i + What type of people work there? |
7 i C= Te EE BE EET | » Why is the company based in this particular place? What F |
= : [EE I= = TATE ke y 1 Loler NT advantages does this place have? =
le = fi —_—— "fy Jie { EZ ¥ « What is the company motto?
a = idl = 1
i —= | ~ 2 : — B Write a description of your ideas, including main points and
= apy === ' 83 § LH —R
TTI === pe =| HEY =r 1 = = examples. Use the text in Ex 5 to help you. !
| p= === 559 § 00 -
3 8 c= ——==RK ) og Sl, = ; 5 5 . .
=f = === = et A fx : ¥1 - C Work in pairs. Read your partner’s description. Do you think their i
vw Eo i= == me 4 == i= ; i : business or project will be successful? 'R
SCTE HEE = nee geile Uk LST ee
“Joh Lis=SEslEc 3 3 il += i SRF HE EYEEE 0
hl Ee == == [EEE BE S| EE i ie EE i STE SSS (ee
Salil VEE Chol te |™ — 's HE BE 3 EEE Bt THRE`,confidence:74},78:{text:`3 REVIEW
GRAMMAR VOCABULARY
so and such 3 A Complete the words by adding the missing letters.
1 A Complete the sentences with so, such or My city has incredible architecture. It’s full of *h_ __ _ric
sucha. buildings from the seventeenth century. Some are probably
1 Wehad good time in Turkey that 2f liar to you. It's illegal to build new *h__ _-rise buildings
we're planning to go back next year. there, so the city has good views, too.
2 The food in the new restaurant is
good that we've been pro Shea a Where I live is very 4r__-down with a lot of broken windows and
week. rubbish on the street. It's 5t_ _gh to find work there and many
3 The feason | love Mexico'is that the people have no job. Also, ®s__ _ty can be a problem at night as it’s
people are welcoming. quite dangerous.
4 rl ge nos oti Eyeling My townis’ch__ __ ging to get to because it's high in the
Y- 9 . mountains. But it’s an ideal 8s_ _t if you want to %_ _ _pe from
5 Our Chinese hosts treated us big oi
well that we became friends. EE
6 Thetrainis great way to travel.
It’s so easy and relaxing. B Work in pairs. Name as many of the following as you can.
7 In Brazil, everyone was friendly. « a historic building near where you live
8 Our Italian friends have style. « an ideal spot to escape from your normal routine
They dress really well. « a place with a lively atmosphere
B Make sentences about places, people or 4 A Choose the correct options (A-C) to complete the text.
travel using so and such. Compare with
other students.
Astronaut
be/get used to They drive the crew to the launch pad. You stand and look up
YL — at this spaceship seventeen storeys high, with its huge rocket
5 boosters on each side. You feel fear and excitement. Before,
correct words to complete the advice. ; Bo ie § |
) RR you were _.. busy training that you didn’t have time to
Paul, from Florida, USA, is thinking of feel scared. You didn’t think you were2 your life. Now it
moving to the UK. Minty is giving advice. Bessa Fadl
M: You eed to 'be / get used to driving You take a lift to the launch platform thirty metres in the sky.
BEI . You go into a white room and put on your equipment. Next, you
P: Lc. a tbe ’ problem. are as : look into a camera and say goodbye to your family. The other
_— = alls halls lias astronauts become your new family. 2 used to them and
KE THR hares the BITE Sent 1% their habits; you've been training together for months. -
probably not too hard to *be / get You enter the shuttle. Inside it’s tiny. It's one of many things k
used to. youhaveto? . .You are strapped in and you check your
P: “I’m / get used to it already! Have you equipment one last time.
forgotten my wife is British? Space is silent, but the rocket isn’t. The engines makes
M: Do you think you'll be able to *get / be a loud noise you can’t hear yourself think. Soon you're
used to the weather? travelling at 17,500 miles per hour. After eight and a half
P: Oh, “I'll get /'m used to that easily. | minutes, you've left Earth’s atmosphere. Suddenly, the noise 3
love the rain. stops. You remove your helmet, let it go and watch it float. 4
; You trained for these ° LE hing is’ ;
"Uy B Work in pairs. Think of advice and REE ae ee nE - fa ‘8
: : Yet nothing will ever be the same after you've been : |
questions for two of the following faspace 7 i
situations. Use be/get used to. Hate a i
+ someone from another country (you & 1
choose which) is coming to live in your 1A so B too C such F
country 2 A atrisk B challenging C risking 1. .
« afriend is getting a pet (you choose the 3 A You B You're C Getting Suid =
animal) 4 A usedto B be familiar ~~ C getused to T- Ee
» your colleague is starting a hobby that 5 A such B really C so
oa [ERE pi io {eng one 6 A difficulties B conditions C risks
i 7 A unpredictable B familiar C used to
Are you used to hot weather? You'll need
to get used to our climate. B LJ R6.01 | Listen and check your answers.
Fla ria Co —
4 w Pr -`,confidence:81},79:{text:`a i
ir = \\
GF — N
0 Car - = |
Na 4 = 7 |
] ” |
( |
|
\\ §
/ A . |
7 J i
id .
i} ef
| A 9 # y
3 VE ES y - 3
— ‘” ny. i) 3% \\
Ee -— . / > V 1 / py da 7 ~
Ne — | 4 /
: 3 iy aN nt -
’ gr , - A 1 4 y
= Gob —mn+ —Y—7i 700
' Scale of
| RA Engish LEARNING OBJECTIVES
i Asad ,
moe | 2 7A LISTENING | Understand a podcast about
2 ) misunderstandings: reporting verbs; ways of speaking
2's 4) Talk about conversations you had recently: reported speech
i Pronunciation: stress in reporting verbs
B| B | Write a story about an event
7B READING | Understand an article about oversharing online:
computer use; internet words
Discuss issues connected to internet privacy: passives
2 : - Pronunciation: stress and weak forms in passives
| dW Rie: me x 5 7C HOWTO... | keep a conversation going: adverbs
, = : Pronunciation: intonation in short questions
| = 'PoNo a 7D BBC STREET INTERVIEWS | Understand people talking
E about good and bad communication
C < Talk about communication: avoiding repetition: so, to, not, be
Write an email giving advice about a problem
742]`,confidence:64},80:{text:`. f-— _— ne a | Add % }
Unit 7 | Lesson A » be oy i ls sa RS | :
la FS - PR Le 2 SJ
3 RB L Saf 3
— = ) 2 A = o” i i
@ — " i & a ; { ¥ i
7JAMix-up i! - £°°" A . Hl
X r ! RY 9, / A |
BB a A!
GRAMMAR | reported speech i di 4 |
VOCABULARY | reporting verbs; ways of speaking : B | mm <p |
' PRONUNCIATION | stress in reporting verbs 8 3 I )
> _-— " — J IA 5 |
wh J / : ;
~ { == J { / NX
§ i RT SR
A obs Es pu AL TEN i Ded
7 I ery i sh a BALE i Le 0%
CR) | | Goa
/ Sn a ~e I\\' fp
YS PRI Gil, . V4 pid
ih eo at BRR 5 | y.
/ Sr WR RY | |
4 —1 \\ v wR W * -
ae PE TEE Spa ees ae * » pr RSEs cs aia daiel oon i - Sa J
LISTENING
1 A workin pairs and discuss. What possible misunderstanding 6 Endre:
could come from these sentences? a was in trouble but wanted to keep it a secret.
1 ‘I'd like to invite you to the Hilltop Restaurant.’ b asked Josh to come early.
2 ‘Could you close the door?” c¢ wanted Josh to meet him at a restaurant.
3 ‘Are you doing anything next Saturday?’ 7 Moni:
4 ‘Are you boring?’ a was surprised to see Josh.
. . . b asked what happened to her birthday party.
B Ka7.01 | Listen © the pascast and oe our in in Ex 1A. 6 Washthoma.
at was the misunderstanding for each sentence? 8 Th Scottish wemars
2 A Work in pairs. How much do you remember? Choose the best a was good friends with Ela.
option (a—c) to complete each sentence.. b thought Ela was very rude.
1 The podcast host believes that miscommunication: c asked to meet Ela again.
a is the main cause of problems between people. 9 Ela:
b is rarely related to language. a realised immediately what she had said.
¢ is never caused by just one word. b thought the Scottish woman's reaction
2 Luisa’s friend: Was is
a sent Luisa a happy birthday message. c continues to feel sorry about what happened.
b doesn’t like expensive restaurants. 10 The Rodeast hast: )
¢ invited Luisa to a party. a thinks the Scottish woman was boring.
Hoe b asks Ela to talk about a different experience.
3 Luisa p
a hadn’t been to the restaurant before. c wants to hear more stories.
b thinks the problem wasn’t her friend’s fault. B 7.01] Listen again and check your ideas.
c was annoyed with the other guests.
4 Rich’s manager: C Work in pairs and discuss the questions.
a made him feel nervous during the conversation. 1 Which situation do you think was the most
b was interested in how he was getting on in the job. embarrassing? Why?
¢ was angry with him. 2 Has anything like these situations ever
5 Rich: happened to you or someone you know?
: ] What happened?
a helped his manager check her computer. 3 Are there any words in your language which
b got up and locked the door. you make mistakes with? How about in English?
c thought he had followed his manager's instruction.
80`,confidence:72},81:{text:`7A
GRAMMAR VOCABULARY
reported speech reporting verbs
3a Complete the reported speech sentences 5a Replace the words in bold with the verbs in the box. Make any other
with ONE word. changes needed in the rest of the sentence.
1 ‘I'll be there!’ = ad a r
| messaged her back and replied that a Tt
| batho: enquire mention warn wender
2 "Do you like the job?’ 1 She wanted to know if | was enjoying the work.
4 ia to know | liked She wondered if | was enjoying the work.
J00. ] 2 | replied that | was sure I'd go.
3 ‘Have you had any problems with : .
colleagues?’ 3 He told me that I'd be in trouble.
Ehesasked whetheri had any 4 And she said after that that she didn’t want to see me again.
problems with colleagues. 5 | should have asked for information about whether we had
4 ‘Are you doing anything next to pay for our own meal.
Saturday?’ 6 | wanted to give the reason that it was an ordinary mix-up,
My friend Endre asked me if | was but he was too angry.
doing anything the Saturday. 7 | said (without giving any details) that I'd had problems with
5 ‘I'm giving a surprise party for my my computer, but that my colleagues had been great.
wife Moni. 8 My mistake made me feel sure that | needed to study English more.
He said he _giving a surprise
party for his wife Moni. B Complete the sentences using your own ideas.
6 ‘Can you come?’ 1 If I had one minute to introduce myself, I'd mention that ...
He asked me if | come. 2 If a stranger asked me for money, I'd wonder if ...
7 “You'll be in trouble if you tell her’ 3 I'm fine speaking English on the phone in some situations,
Endre tdldmei] ticlinirouble for example if | have to enquire whether ...
if | told her. 4 When | send out invitations to my party, | expect people to
8 ‘I'll keep it a secret.’ confirm that ...
| promised that 'd keep it 5 If someone said cars should be banned, I'd argue that ...
a secret. 6 When | was young, | was convinced that ...
] 7 If you said that English was a beautiful language, I'd add that ...
8 £17.02] Listen and check. 8 If | saw someone crossing the road without looking around,
A I'd warn them that ...
C Work in pairs. Choose the correct words
to complete the rules. In one case both C Work in pairs and take turns. Student A: Read out one of your
options are correct. sentences. Student B: Ask a question about what Student A says.
When we change direct speech to A: If | had one minute to introduce myself, I'd mention that | love
reported speech we: being outdoors.
1 often Jor ag "° tenses further B: What do you like doing outdoors?
2 make changes to personal pronouns /
time phrases. PRONUNCIATION
3 must / sometimes use that after the 6A | stress in reporting verbs | Work in pairs. Put the reporting verbs
reporting verb to report a statement. in the box into two groups according to their stress.
4 must / sometimes add if or whether to
report a yes/no question. agree answer argue complain confirm convince
5 use question / statement word order enquire explain mention promise reply wonder
to report a question.
1 Oo 2 00
4a E)7.03 | Work in pairs and listen to the
sentences. Take turns to report what the B [07.04] Listen and check.
person said. Use said or asked. . . i
] ) C Work in pairs. Student A: Point to a word in Ex 6A. Student B: Say it
1 He asked me if | was going out with the correct word stress.
that night.
ork in pairs. What words do you know for speaking loudly or quietly?
7 A Work in pairs. Wh ds d know f king loudly ietly?
B Learn and practise. Go to the Grammar
Bank. B Check your ideas in the Vocabulary Bank.
Ld page 125 GRAMMAR BANK Ld page 136 VOCABULARY BANK ways of speaking
81`,confidence:88},82:{text:`Unit 7 | Lesson A
SPEAKING ae
8A Youare going to tell someone about two conversations a story about an event
you had recently. Student A: Read the conversations on 9 . —
this page. Student B: Read the conversations on page A Read the story. What was the misunderstanding?
138. Where do they take place? What is the problem in =
each one? Wedding guest
Conversation 1
) A few years ago, [ was driving to a wedding
Fernanda: Are you OK Lisa? somewhere in the countryside in England. I saw a
Lisa: What's the matter with this door? | can’t man walking along the road, a well-dressed older
open it. It's completely stuck. man, obviously a wedding guest. I stopped and
Fernanda: Let me try. Look. Open. No problem. asked him if he was going to the wedding and he
Lisa: But you pulled it open. said yes and got in. [ tried to make conversation,
Fernanda: Yes? And? but he didn’t reply. We arrived at the wedding and
Lisa: It says ‘push’. got out of the car, at which point the guy walked
Fernanda: No, it says ‘puxe’. In Portuguese ‘puxe’ quickly back down the driveway to the road.
means ‘pull’. Things got more bizarre when the police arrived
{isa How confusing. a few minutes later with the man and enquired
Fernanda: Don’t worry. All my friends from the UK whe her he was a guest. It turned a that he |
FkE tHE Sa rie TSEaKE. wasn't, and that the whole misunderstanding
sho came from the fact that he was Swedish and spoke
onversation almost no English. Apparently, he was visiting
walk and got lost. Funny thing is, the son hadn't
I've got something to tell you. Are you noticed that his father was missing.
sitting down? |
B Read the story again and answer the questions.
h ) i 1 How could you divide the story into three paragraphs?
Your brother's going to prison! 2 What would be the function of each paragraph?
3 How many different reporting verbs are used?
4 Which words and phrases in bold can be replaced
What? Are you joking? with the phrases (a—€)?
| thought you’d want to know. a and this was when
b we discovered that
Why are you telling me this in a text? fil UES
| - Phone me? d this was strange enough, but then
e it seems that
Oh, this stupid phone! | wrote ‘Princeton’ . . .
and the phone changed it. He’s going to 10A choose one of the following situations and write a
Princeton. The university! story. This can be from your life or can be imaginary.
« people failing to meet because of a
misunderstanding
B You are Fernandain conversation 1 and Vinny in « people meeting through a misunderstanding and
conversation 3. You're going to tell Student B about becoming friends
the conversations. Write six words and phrases for each « a stroke of good fortune because of a
conversation to help you remember what happened. misunderstanding
Conversation 1: door, stuck, | pulled, says ‘push’, + an invitation for a party or a meal which you
‘puxe’ = pull in Portuguese, confusing completely misunderstood
« a mix-up over times/places or face-to-face/online
C Work with Student B. Take turns to tell each other meetings
what happened in your conversations. Only use said « your own idea
once. Try to use at least three verbs other than said.
Something funny happened a few days ago. | was ... B Reread your story and try to use some of the phrases
3 in bold in the story in Ex 9A.
| had a very funny conversation yesterday.
I was with ... C Read other students’ stories. Which one surprised
And then he told me ... you most?
82`,confidence:89},83:{text:`77 ©
wx > 4 SN 7B
“in |
5a b# “> ’ - ’ j/
8 f~ —
© J
Oversharing ™¥=
an /
oi N= ; -
-. _ - — \\ - () J
PS GRAMMAR | passives ) ON 1)
” VOCABULARY | computer use; internet words 1 Be. x a.
PRONUNCIATION | stress and weak forms in passives "a 8 Ki
J . Wh 4 . ! / CET
: bh < a
-r 4 v a > oY
. - \\, g i » , ar
~ LENE SW
TH \\ A v ee —
OF wo 4B pw Shot aRs ci
6 WERE SESE Re
[£5 = Se. me IN 0 Lai
| “a " ; - SE has
- - > p= { Bil 2h bial », 3 wr
— BR ie Th
-— - ~ Cp EER
+ y ——— as od Piety
- PRED RAR Lah 2H
me » 4 TAREE SFR ee
| — = ed
= Poe: i roy
Ee | 2 So, = >
Fa} am \\ LN To Eo
VOCABULARY 2A Complete the sentences (1-8) with the correct form
of the words in Ex 1C.
computer use 1 think it’s fine to a photo of someone on
social media without their permission. | do it all
1A workin pairs. Think of three actions that you do on your the time.
phone or computer. Do you know the English words for 21 _my files regularly to a hard drive. | don’t
the actions? like keeping them in the cloud.
. CL 3 When | see something on the internet that | really
B Work in pairs and look at the definitions (1-8). What like | it to all my friends.
: :
A R.A 4 | never check my folder. It's full of emails
1 unwanted emails and messages, often advertisements, with advertisements and other rubbish.
sent to large numbers of people (noun) 5 | rarely use my real name as my .| prefer
2 make a copy of information on your computer, usually to use a fake name.
so that it's safe (verb) 6 | never lie when putting personal information in
3 a small window with an advertisement that suddenly a user form on a website.
appears on a computer screen when you are looking 7 I don't normally read a It's most likely
at a website (noun) an advertisement, so | just close it.
4 put a message, photo or document on the internet 8 It annoys me when someone visa
for others to see (verb) photo on social media, and doesn’t even ask my
5 send something you've received to someone else (verb) permission.
6 the name you use to log on to a computer or program
(noun) B Which of the sentences in Ex 2A are true for you?
7 greate on in mention wr else vert) C Work in pairs and compare your ideas. Do you think
8 ashartdesciption arsetotinformationaboul people of different ages respond differently to these
someone (noun) :
issues? In what way?
C Match the definitions in Ex 1B with the words in the box. D Learn and practise. Go to the Vocabulary Bank.
backup forward pop-up post | J page 137 VOCABULARY BANK internet words
profile spam tag username
83`,confidence:72},84:{text:`Unit 7 | Lesson B y \\ (f ‘ RR
ores { E
D J oll Kw EN a. |
3 A workin pairs and discuss. What are th /d \\ = 3
the dangers of posting photos of W1 = \\ fe
yourself and other people online? { = oo\\ i 3 —
B Read the article and choose the best care
summary (1-3) of the writer’s opinion.
1 Children should learn about the risks of Isabella is five years old. If she’s a typical UK child, by now her
posting photos online from an early age. photo has already been posted 5,000 times online. Tom is eighteen
2 Think twice before you post ) and is applying for his first job. At this very moment, his social
yh ANTI dGuBE, doit media profile is being analysed in detail by his future employer.
3 If someone suffers the consequences These days children are given plenty of information about the
of an internet post, it’s their own fault. dangers of oversharing, and young people often have strong
opinions about what their parents share. ‘I feel really embarrassed
C Read the article again. Are the when my mum posts pictures of me, says eleven-year-old Rob. ‘She
statements True (T) or False (F)? thinks it's cute when I have chocolate on my face. I don’t want my
1 Rob and Makayla are worried about friends to see me in that way.’ Makayla (15) agrees that there's a
the same effect of oversharing by problem: ‘I'm worried that it could have a bad effect when I want to
parents. get a job. That's why I feel really upset whenever my parents post
2 The writer agrees that parents photos of me.’ In France children can take their parents to court for
should stop sharing photos if their oversharing. No one in the UK has been taken to court yet, but one
children don’t want them to. would hope that that’s going to change. Parents need to understand
3 Employers almost always use social how their kids feel, and why.
media to investigate applicants
for jobs. Makayla raises a very important point. Many first-time job-seekers
4 All employers strongly dislike seeing do not have a CV to prove they are suitable for a position. So it
employees and job applicants in seems natural that employers search people’s social media profiles
political photos. as part of the application and interview process — and over ninety
5 The bank intern posted a selfie of percent of them do, according to Workopolis.com. A photo of a
himself in costume. child accompanying their parents at a political demonstration
6 The writer feels sorry for the bank posted years ago, for example, may affect that child's life,
intern. depending on how a future employer views the post.
vie hegith CRAILER Worker HpaI 5 And once you've got the job, you need to be ultra-careful what you
was fine to go to a theme park with a : ; :
shoulder injury. post publicly, as a — intern in New to found out when he
8 The woman from Pennsylvania took two days off for a ‘family emergency’ and ended up getting
hadn’t given her permission for her fired. In the evening he went to a Halloween party dressed up
photo to be used. as a fairy. Someone took a photo of him in costume, clearly not
dealing with a family emergency, posted it on social media and his
D Read the Future Skills box and do manager saw it. That was the end of that internship! Even if he
the task. didn’t post the photo, it's hard not to blame him.
You can't control how your employer, or anyone, interprets your
FUTURE SKILLS posting. A health centre worker in Florida in the USA was on
Critical thinking leave because of a shoulder injury. One day he went to a theme
: : park and posted photos of himself having a good time there. His
Newspaper and magazine articles . ; LL
PR yr. actions were considered bad for staff morale and he lost his job.
© = Pe 9 p The employee didn’t feel there was anything wrong with what he
war teautherspoinkef view. Ue had done. Maybe the key mistake wasn't going to the theme park,
important to notice how the author i Gd 7 going p
: a ; : ut posting the photo.
gives their own point of view, so
that you can develop your own. Even the most innocent postings can be exploited. A woman
Writers often put their opinion at the from Pennsylvania, USA, posted a family photo on her blog — EE
beginning or end of a paragraph, and — as countless people do every day. When it appeared in [
sometimes signal an opinion with a political campaign advertisement in Pennsylvania, she \\
words like ‘perhaps’ or ‘maybe’. Look in began to look for the photo on the internet and eventually 5
the article and find at least five places found that it had appeared on over thirty websites i
where the author gives their point of around the world, including advertisements for apps, Samy
view. Do you agree with the author? sunscreen, pet tracking devices, holiday cards, cameras
and vacations. In the end, there wasn’t much she could do
about it. Perhaps the only solution is not to post at all. \\ A
o bg 22
=
: N=] \\`,confidence:89},85:{text:`7B
GRAMMAR SPEAKING
passives 7 A workin pairs. Read this extract from an article about online privacy
5 a and discuss the questions.
4A Workin pairs and choose the correct
words to complete the sentences. ... in many countries consent is required to both take and share
1 By now her photo has already posted a photo of someone in a public place, although this rule is being
/ has already been posted 5,000 broken all the time. By 2021, France already had even stricter
pe a ) ) ) rules on sharing photos taken in a private place. If you shared
2 At this Very moment, his social media a person’s words or image without their consent, you could be
EIS INCI pny dane fined 45,000 euros and jailed for a year. For minors, parents could
in detail by his future employer. & ’ 0 fit iy Tot : ¢ LALARLE
3 These days children give / are given EVE SEREET, BULH REE AEDS DOL BALen.
plenty of information about the
dangers of oversharing. 1 Do you think the rules are reasonable or too strict?
4 No one in the UK has been taken / 2 Do you think any of them should be adopted by other countries?
was taken to court yet. 3 What other laws do you think should be made to protect people
5 He took two days off for a ‘family in connection with online sharing?
emergency’ and ended up get fired /
getting fired. B Work in pairs. Match the phrases (1-6) with their uses (a—c). Add any
ry fol ed other phrases you use.
BCR par a 1 That's a good point, but ... a strengthening or adding to
C Work in pairs. Look at the sentences in 2 Another thingis ... FEF ipa
Ex 4A and answer the questions. 3 Actually, ... b disagreeing with the other
: 2 erson
1 How do we form the passive? Find 4 Don’tyou think that ... ? c a thoniher parson io
two ways. 5 And the key thing is ... 9 9 P
2 agree with you
2 Is the main focus on the person who 6 Isn’tittruethat...?
does the action or the person/thing
affected by the action? 8a Work in pairs. Read the statements (a-d) about internet use and
3 In how many sentences is the ‘doer’ privacy and answer the questions. Use the phrases in Ex 7B.
ious?
ATSEOT She 1 What problems are there in each area?
D Learn and practise. Go to the 2 How might you solve those problems?
Grammar Bank.
Y page 126 GRAMMAR BANK Privacy policy
a A child has no way of giving or refusing permission to post and
PRONUNCIATION share photos of themself. Many children have said they want
5 to stop these postings.
x .
Ak ad Ey -— and yank sta b Many websites ask users to confirm their age so that they don't
passives | Listen and write the sentences. 7 :
open adult websites. Is it enough?
B Work in pairs. Find the stressed part of c False user profiles are being created all the time. As a result, we
the verb phrases. How do you pronounce don’t know who actually wrote a lot of the content that we read.
oe 2
Theaseiany verbebeanankl ws) d Photos from social media are often downloaded and used on
c [7.05] Listen again and say the stock photo websites. There's no clear system for stopping
sentences at the same time as the speaker. people from using your photos without permission.
6 A Make the sentences in Ex 5A true for you.
B Work in groups. Discuss the statements in Ex 8A. For each one,
B Work in pairs and discuss your sentences. identify any problems and agree on one possible solution.
po oy Emme C Compare your ideas with another group. -
Q a el Q] :
TRIED. A Tg NE $ x
| v1 i ed se. . O “2
5 2) I i OL. ) oo h kL i @ 3 [IS
Ly &&F Td ra |
SUE) KR J : ets ; 3 oh \\ W N
By AE re A \\ NAY
- - Beets a) \\
¥ 2 slo Bok BYOB
Fl Na 3 — ll
Cd [CD QT CEH
| 0] Ol I) 73 RD SSS ,
of We! ] 0 Cr DE GF
fi =`,confidence:80},86:{text:`4 om ’ Ja T- ‘ nN
Unit7 | LessonC § ’ Ro A,
a: /
«* a “a f - ) ky
~ Wi b /
[J A S |
| 7C Conversation fi , =~ & /
Eo AN /
“yg )
+, "a By’ ‘Jil
i savers = EN
b H EB y
%
- -— pa | vw |
| HOWTO ...| keep a conversation going . y WF £1 h ‘ /
. » VOCABULARY | adverbs mmm -~ | © A
PRONUNCIATION | intonation in short questions ¢ (
. Wm Ee |
Fa
a - 4 \\ }Y
. 4 pron |
’ - a3 i AR
Ld
VOCABULARY The art of conversation
adverbs You're at a party and someone you don’t know comes
up to you and starts chatting. Things are going fairly
1 A Work in pairs and discuss the questions. well and then ... the conversation just dies. You panic
1 Do you enjoy parties and gatherings where you as you try to think of something to say, but by then...
don’t know many people? Why/Why not? the person has walked away.
2 dd Se ov od L nd cs talk about Does that sound familiar? It should, because it’s a perfectly
WIGHT papel GaTrtidiGn: - normal experience, shared by most of us. The good news is
3 What do you do to keep the conversation going? that there are some tricks and techniques that can help you
B Work in pairs. Look at the headings in the article. aril hd anc desbwlih Bagkmcomioriable silence
What do you think each one is suggesting? or
C Read the article. Which ideas do you think are ~~~ don’t stick with small talk.
useful? Which don’t you agree with? It's normal and comfortable for a conversation to start with
a basic get-to-know-you exchange, but be careful in case you
2 A Find six adverbs ending in -ly in the text and get stuck on small talk. Small talk ISN'T conversation. If you
match them with the meanings (1-5). One of the notice you're stuck, then it’s time to ...
meanings matches two adverbs.
g ions!
1 completely perfectly, ... ask, don't tell (and no yes/no questions!).
2 very very Ask questions, and not just any questions. Avoid yes/no
3 Fare thE EEL questions and questions you don’t care about the answer
FTCA Sc T— to. Listen out for a detail that’s particularly interesting or
. g : y ; something you don’t understand; that's the ‘hook’. Now it’s
5 alittle/a bit (often before negative ideas) ;
time to...
B Work in pairs. In each sentence find one adverb ... ask a POWER question.
that does NOT fit with the adjective that follows. : .
N oes wi ) N = ve thattotiows These are short, simple but extremely powerful questions.
1m extremely / fairly / slightly good at Once you've found a ‘hook’, use a POWER question to
handling a conversation with a stranger. : : ,
} . energise the conversation. What do you mean by that? Why's
2 It's totally / particularly / perfectly normal to that? They show that you really ARE interested. And all the
feel awkward sometimes. ;
. time, remember to ...
3 | think most people are fairly / totally /
extremely interesting. ... listen with your whole body.
4 Good use of body language can be slightly / Face the other person, don’t turn to the side as if you're
particularly / extremely powerful. . ; .
Co watching for someone more interesting. Make eye contact,
5 I find it perfectly / particular ly / slightly 4 but not too much (that would be slightly strange!). Don’t let
strange when people don’t ask me questions. ;
) pig your eyes move around the room — the person you're talking
4 i a Iga peran. question, that's fairly / to will think that you've lost interest. And if the other person
rip y ’ is doing this, you should ...
C Work in pairs and discuss. Which sentences in Ex know when to give up
2B are true for you? — .
Not everyone wants to be your friend, or even have a
conversation with you. That's totally fine. If the energy
really isn’t there, move on — before the other person does.
86`,confidence:79},87:{text:`7C
How to... PRONUNCIATION
keep a conversation going 5a}7.00 | intonation in short questions | Listen to the
questions. Does the intonation go up or down?
3A [7.06] Listen to the conversation and look 1 Suchas? 2 Why's that?
at the headings in the article in Ex 1C. What
does the man do wrong? B Work in pairs and look at the questions (1-4). For each one,
decide if the intonation goes up or down.
B [17.07 | Listen to the next conversation.
Whites Pail Devilsecdcesiah di 1 Because? 3 How come?
ee GOTH SCCORCng 2 What's it like? 4 For instance?
to the article?
C Work in pairs. Complete the phrases with one C hill710] Listen and check.
or two words. D Work in pairs and have a conversation. Use the sentence
Denise: I'm Denise. Nice to meet you. beginnings below and ask follow-up questions from Exs 5A
Paul: ~~ And you.’ you know Celia? and 5B. Then continue the conversation.
Denise: We went to college together. 1 This weekend | want to ...
2 I've just bought ...
Denise: Yes, we both did food technology. 3 Id like to change a few things about ...
Paul: ~~ Oh. ?How did you _into that? 4 | refuse to lend anyone ...
5 Irecently met...
Denise: Well, obviously you learn a lot about B Incedintbowotaictah
cooking, but it covers all sorts of or
other things.
Paul: “That sounds .3What do
by ‘researching new flavours’? 6 A Look at the list of conversation topics and choose six that you
Denise: Well, | once developed a banana- would be happy to have a two-minute conversation about.
flavoured crisp. « job/work + food
Paul: © terrible. What was it 7 ? « travel/holidays « books
) « social media « shopping
Paul: |was a waiter there, but | left. . pets I
cies g
Denise: Really? “Why's ? + free time activities «music
Paul: liked the people | was working a a end
with, but | didn’t like some of the ns -
customers. B Work in pairs and decide on:
t. B 5
Sua SETHE 1 four topics you would both be happy to talk about.
Paik THEW Els SOBEG, 2 an opening qUESaY or gammant for each of the topics.
. . 3 an unusual question for each topic.
Denise: How did that *° you feel? CL .
4 an adverb and adjective pair you could use to talk about
each topic.
— Ed7.08 | Listen and check. I'm particularly interested in ...
4A workin pairs. Match the phrases (1-10) in I'm slightly bored/tired of ...
Ex 3C with their uses (a—d). That's extremely surprising, because ...
tarti topi
i ali... fer i - n C Work with a new partner. Find a topic that both of you chose,
commenting to s ow interes and have a conversation about it. You have two minutes. Use
¢ short follow-up questions (two or three words) the phrases in Ex 3C to help keep the conversation going.
d other follow-up questions
D Work with a new partner. Find a different topic that both of
B Look at audioscript 7.07 on page 167. Find you chose. Talk about it for two minutes.
more examples of the uses (1-4) in Ex 4A.
C Learn and practise. Go to the Grammar Bank. MEDIATION SKILLS $2
(3 page 127 GRAMMAR BANK describing diagrams
explain a chatbot flowchart
» page 154 MEDIATION BANK
Speak Go to the interactive speaking practice 87`,confidence:83},88:{text:`Unit 7 | Lesson D ~e . '
x ol :
~ inl — K a ant v h on pat P-ST17- 4 # AU : f
7D >) | E a = LI - fl - = LJ Ta i
Il 5
" - |
goo Wy
® \\ aN
° NT y if
Wi We i
| 3 ANY = 1 mn El
G / ach
= 2 ag L Josht :
GRAMMAR | avoiding repetition: so, to, not, be
SPEAKING | a discussion about communication VIEW
WRITING | an email giving advice about
= Reoblent 2 A [J Watch the first part of the video. How many speakers say they
: - ~ are good communicators, but not in all situations?
4 WE, ry
! : =X Sale a
r Be y B [>| Watch again and choose one or both people.
= | - = \\ 1 Zoe / Joshua says it depends on what's happening.
5 | A E 2 Janine / Monica says there can be problems with the language.
| ) (4 ili x _— 3 Pear / Lily says it depends on the method of communication.
&] } u 4 4 | i 4 Yiannis / Raihan talks about speaking in front of a lot of people.
Y w ge Cr.
) p= IXTON AS = Hy '
> Q y \\ \\ 3 A [J watch the second part of the video. Tick the topics (1-5) each
5 i ne § a ] A § time a speaker mentions them.
- = a 1 arguments 4 their mood or feelings
2 speaking to a lot of people 5 talking to particular people
PREVIEW 3 speaking via the internet
1 Workin pairs and discuss the questions. sd a a ai SEHNCES Co
1 Howeasysriificaltde you ind its 1 kd to work to face with people. | think it's more
communicate in these situations? ’ )
) 2 But yeah, practice makes ;
face to face making a complaint 3 I'm not thinking about how I'm coming to other people.
speaking to an audience 4 When you're under , choosing the right words can be
video meetings difficult.
— 5 | can’t find the to explain why I'm angry.
2 How do the following affect your
communication? C Work in pairs. Which of the statements in Ex 3B do you agree with?
» speaking in another language
« how you feel (stressed/happy, etc.)
« talking to people you don’t know GRAMMAR
im mg, Sara avoiding repetition: so, to, not, be
i SL a
q : ir / 9 \\ “> n i 4 A workin pairs and complete the sentences with the words in the box.
gy A - = X* » ’ :
Lee e— ~~ hope like so
“mn w C = ( J
- oy \\ 18 | -~
— ABS 1 A:Are you a good communicator?
V i 4 i. n B: 1 hope ./ Yes, | think so.
AN f n 2 A:Do you want to be a better communicator?
§ BIRIC @ rid
i \\ x Sh FP B: I'd to be.
A = 3 A:Do you think it’s impossible to improve?
Q1: Are you a good communicator? B:l not.
Q2: In what situations do you have B Learn and practise. Go to the Grammar Bank.
difficulty communicating? [q page 128 GRAMMAR BANK
88`,confidence:70},89:{text:`¥ Ci ek . 7D
K R 1 1 ! % - z
i fs Ya 4
RA N | 3 ¥ = —— — 3
AFR cy EEA TC NU BlBjC!
11 H © \\ " a h > 4 -
: . { —
E, h3 Py > ATA
) - m §- FF <a.” o
Pe Ey | Sr
~ Monica LX ; Yiannis | b Raihan
A " : 7 No 4 x
— 2 ) NT
| - 4 —-— 4 = = vg a - Ls ¢ i ki TE
py © - pr - = 4 9 mp) —, ll o
- i n 3
” : Bu . yr on pas \\® § ut
rr & al 4 i ®t
4 / Mts | it A
(SPEAKING. WRITING
a discussion about communication an email giving advice about a problem
5 A Look at the situations (a—€) and number them in 6 A Read the email giving advice. Which of Anya’s ideas would work
order from 1 (most difficult for you) to 5 (easiest best for you? Do you have any other ideas that could help?
for you). _—
a giving a speech to a large group Hi Alessandro, °
b giving your opinion in a class or a meeting Nice to hear from you. | don't think it's at all unusual that
¢ sending a voicemail message in English you're worried about giving a speech at Leonardo's wedding.
d talking on the phone in English I've thought a bit about how | became more confident in
e telling a friend that they have upset you public speaking and perhaps one or two of these ideas could
help you.
B Work in pairs and discuss your answers to Ex 5A. When you're writing the speech, make it personal, for
C Work in pairs. Look at the Key phrases. Which example by including lots of stories. People love stories and
; : they can make people laugh, and that will help you relax.
of the short answers could you use with which : b
questions? Then, in order to sound confident and natural, practise,
practise, practise. And make sure you practise out loud, then
D Work with a new partner. Discuss the situations you'll be able to sound more natural on the day.
you each find difficult in Ex 5A, and how to Before your speech, you could do some relaxation exercises,
improve them. Use the Key phrases to help. such as slow breathing and simple stretching. This always
helps to calm me down and to control my voice.
KEY PHRASES Also, if you're generally feeling nervous about standing in front
Questions of people, then to build your confidence you could take a class,
Which situation do you find the most difficult? like a singing or dancing class. | had some singing lessons once
Do you think you're good at communicating to help me project my voice better and it really worked.
in giving a speech/sending a message, So anyway, | hope these ideas help. Remember everyone
——- there wants you to succeed and I'm sure you'll be brilliant.
Do you think you're a friendly/ |
communicative/positive person? Anya Xxx
Would you like to get better at talking on
the phone in English? a : : _ ; :
5 TRF CY ——" B Work in pairs. Choose a situation in Ex 5A that is challenging
oyouavo gto peop ’ for each of you. List ideas for making both situations less
difficult. Use your ideas from Ex 5D.
Short answers
I (don't) think so. I’m going to try (to). C Write an email to your partner giving them advice on their
I hope so. | guess so. situation. Use your ideas from Ex 6B.
I'd like to. | /
i : ve PLAY 0 D Work in pairs. Read your partner’s email. Did they include all
HARES CA of the ideas you listed in Ex 6B?
89`,confidence:79},90:{text:`7 BAY
GRAMMAR VOCABULARY
re ported speech 4a Complete the words to make sentences.
1 A Read the reported conversation. Rewrite sentences 1-10 1 It's P. normal to talk toy , but maybe
A N . Lo 8 it’s bettertow if other people are around.
using direct speech to give the original conversation.
’ ] 2 It'ss uncomfortable for me when
The strangest conversation | ever had? It was back in college, someone y at their partner in public.
and my roommate was talking in his sleep —at 4 a.m. ) :
"He asked me if I'd got up early that morning. 2| told him = Cr pr i pg : pan go
| hadn't, and that it wasn’t really morning yet. *He asked 4 It's totally i ble t ) Fini
if | was planning to do anything that evening. ¢l told him STEOLEINpORSIDIe HOC pIIETOICHANGE
. : so fs my mind about most things.
that | hadn’t planned anything special. *He asked me os ) : ]
whether we could meet for dinner the next day. ¢l told him 5 It’s fairly annoying to discover an important email
that | was happy to, and | added that we had dinner Inyours folderinstead of thei.
together every day anyway. "He asked me if I'd ever tried . . .
Thai food. said I hadn't, but I'd like to. Then *he said that B Wark in pairs and discuss the sentences in Ex 4A.
he'd contact me the next day. °l said he should go back Which do you agree with?
to sleep. So strange — | wonder who he thought | was. x
5 A Choose the correct options (A-C) to complete
1 A: Did you get up early this morning? the text.
2 B:No,l...
B Work in pairs. Ask each other the direct questions in Ex 1A. Im pe rfe Yel t ir \\' enti ons
Make notes of your partner’s answers. he PE Viet mh
They say that necessity is the mother
C Work with a new partner. Tell them about your conversation II eS f the O'S a nee d, the n the
in Ex 1B. Pay attention to the time references. solution But there seem to be some
needs for which the perfect solution ?
| asked him if he had got up early today and he said ... bata iy ol f 5h sd i Pras HON ne
passives
Earplugs that work
2 A Put the words in the correct order to make questions. More and more people live in noisy environments,
1 you / lost /a/ get / ever / you / when / Did / child / were ? and many said they waiting for years for
2 that /a/ been / hated / ever / you / really / Have / the perfect sal plug Tm often \\........ Up By the
given / you / present ? neighbours, and nothing I've tried has worked.
3 get /do/ what /do/in/ you / traffic, / stuck / you / No-jam printer
When ? ) Many of you asked ifs possible to inventa
4 ever /a/been/you/ give /to/ speech / Have / asked ? printer that never jammed. ‘Itsé annoying
5 Whose / influenced / are / you / by / opinion / most ? when I'm in a hurryandlgeta’ saying
6 asked / question / today / the / yet / you / a / teacher / the printer's jammed.
Have / been / by ?
/ (3 Scratch-proof sunglasses
B Work in pairs and discuss the questions. What can make you angrier than when you
drop your expensive sunglasses and they 8
idi N— b damaged? ‘When | spend a lot of money on
avoiding repetition: so, to, not, be sunglasses, | expect no scratches - zero!
3a Complete the conversations. Write one word in each gap. Self-labelling computer filing system
1 A: Do you think you've passed the exam? ‘It shouldn't be too hard - the program could
B: | hope : scan the documentsina® and choose
2 A: Can you help me with this puzzle? a labs! that fits!
B: I'll try :
3 A: Do we have homework? 1 A will be found B will find C is found
B: I don’t think : 2 A has been B hasn’tbeen C isn’t
4 A: This isn’t the best time to chat. 3 A are B were C had been
B: | suppose : 4 A awake B woke C woken
B Mik . — —— ir Bel TH EEA 5 A itwas B was it C was
ake sentences starting wi e phrases in bold in Ex 3A. § A perfectiy B paFGEERY | Baifig
A: Do you think you'll go to the party tonight? 7 A tag B post C pop-up
C Work in pairs. Student A: Say one of your sentences. 8 A have B get C got }
Student B: Use a short answer to reply. 9 A folder B username C profile
B R7.01| Listen and check your answers.
90`,confidence:82},91:{text:`SEU WERE ere BNL GEC A TR EA eR ile ie OTR TNS SR EERE RES CVGREES A Mi a IBY + SPA
RRR RA Na Sse Sl Sl rf lg CA ek
\\ = TSAR EER Se cl] Ax py Fh SY (ot
RAS ERR PRU Re Fa A ee 1, FRE ? ITN EIS Oo A RT eh
ke Uh Ge ive Ce a TE A Ta Wn? Ny A
oN Sr SER RC a eg A xo ee s EE Vad
& “Xk CENA, bug ei RETUE os Nl PT 0 jo rl Prsares ACE BE fg
A a s UREN GMI SNARE penny” OL UCL RR EN
> Ya PhS SRO bhi TD A Satan tv OY ABCC Sa NG HT [a
oo Sen STE RL Ze TORR TL ae RR CT LB Gee a
= <f aio, NE NES res CEE Ae LS a TRIES RY cam, PREPRINT
: en se GE far AT ING, Ee ONG Se Sn Elie id. ART Cl GH aR Te ap, Ni
2a aR Seo Bh S30 SRN TRS i GUNER NDT Senin) aig Go ST
Moss TT Sages Ta PRI, © AR CON SHES a YR AN STE, a AP Se
aS TAT VR NARS JB rage Se Nae dr PNG | AEP 2 ra) EA Bo en
wis FSA me a os RIES ae VICAGRSID A | oN SRR Rev | : Fhe) ARE ore SAE ST (pg
Eas TR ERR eT Sat Sa, NE | 5% IP a 4 Crs N° ARV A
A REN oo WARREN a ha SUN oo esr GN] IT a EEE
Se G5 Ee a EC A J i al 5 dr Br RAR od A
HE SE Co NASER rR PAA mba ER ER fl NY oh Ele pa 5E fan rane NEE ae
AEE a NINE Go 5 Basile yt BEAN 4 rags. EOS sa 5 Erk SSR (LR
me WE CR en Wil tie IE NE A NG RES SE SEAN
SONU LT na A SSE Ee SE of ER 5
= wy) TR me SEAR MO SU SOE ERR 8 FICE ol LRAT Bs (NR
es Gl TI PT RENN REA SRR ts fA am BT RN RE PEs AE EE ER St SCE wom A Rab Ne
= ey A ther Yee BY op SE GEST Ai BR Adc CRS Ng vs Bear oe Em, | Rs A
NT any Foe) Yor lel tm NT OB NORBERG. 4007 Jin (oR me ass
Re TA Se 3 WBN EW PRE Tl "40 he pe 2 RA Slr Re
© & i or) fot RO eC I QR Ye Ll Ne he Liens © SE as £5 Ant) os aR | RSET
Ce. Sia SE, oa CARER a SS, ERE DEN EEE CV i CP Rea.
ENB Ul Oy WEES % en AE We Gn? EET ar SEG on
a 5 bi Nhe LT ka] BOSRY Joe ge RPE 0 eA “a
Fn - 3 A PR ERE Rg | 8, I lp Ri EW. aE af =e 3 pen Raat En
77 CREE seal NC NSE a ee
oe Sa ST FAL ah aly CIERRA Rm, © a Sy rs Cc SER io gf To BSR NSN ko
FR ey tia ely rs A Se op Ry gags TERRGS NTH ENR oT TS Ear
EET Raa Oa | au ve 1 pe ORG ee Ey) vd FOF 65 NG str Ts Ra Ra
Rt SR Nd Wey JRO eK oar A CC ST a Pheri Ey CREATE a CER EWA Se.
Prod ok a, mae SS) ag ROE Wes a INGE ST 5 ee SRR I WORE EA Te
2 A Les “Ph od a gar, “vs = 3 DR Ni A REE 2 a F ww <E & 7 AR od ATX Ya oy. ba <i Pa. ¥ ET ; AY =
al EW rapes SI CNG (WR IR en a ct Pe TR RARE
SE FL Ma oN ae 2 co. bo X "NR EPR ey UU eee SER pe 1S QF MUN
i sev, : Ce a, pr SOL Me 0 EP ARTS RT br SE eT
£1 mae [yen THT Jae voi. NR ee ET RTE eS ee
a dv LL RE ee \\ PR xc | ARRAY SARE Ren SL RES
$l hl HgRRE a {i El Rs rar A AE TYR 23 Tas) ¥ ds RONAN RIEU 3 ES a a NS
Di o£ be 7, SS SERENE Re he fi? Lh Tah SNR aR leh SRT
rly [ey re TR ae Ue a SRR lo RE ERE AR Re Re i JR
ar / Jona i su FTL ate Rag coal | MERE (0 Baan Be Be SSR oS :
F es EEL aa LEE te ators ro Sail aie
i: BE nN EE RT sa Ea
mn BR a rs rad 1 S Sees E Fons ~
OIE om RE A A RT a ee ei IE or MS 1] SR Tn X
i REL ek Ce EE SL Be RR Pe | ies
sale ee eT Coal
er; NETH 7 Gog —mm — — — — ————————————
’ F | 2 Ad Scale of
1 Cds Ti ~ ATC English LEARNING OBJECTIVES
{ 7K =< SMa RY 7d =
i 4, E= y- = . .
" 4 Mi, ed ar) va 8A READING | Read advice from people of different ages:
3 - Js x = phrases of advice
i FE 4 / 1h = Describe a situation and give advice: third conditional and
|W A TS |] 7
| I 7 aE | should have
nil | - a rr . .
Ii 4 Rg Pronunciation: contractions in complex sentences
a \\m
| & 4 |B | BECP 8B LISTENING | Understand an account of the origins of one
{I FF man’s curiosity: learning; phrasal verbs
1} — - — . ar
Discuss the qualities of a mentor: would
‘VLOGS Pronunciation: contracted would
A ATE ars J Write a short biograph
‘Q: What's the best piece of advice Jee
ERT STII SOLE n : .
you've ever been given? 8C HOW TO... | give a presentation: presenting
1 J watch the video. Do you agree . Pronunciation: stressing words in key phrases
ey RSE 5 -
with any of the advice?
: pS e ere 8D BBC PROGRAMME | Understand a TV programme about
2 Work in pairs. What's the best piece entrepreneurs pitching ideas
Ale il ee le oe a ne = =f ; :
of advice you've ever been given? Talk about pitching a business idea
Le ___ Write an email giving work-related news
91`,confidence:31},92:{text:`Unit 8 | Lesson A 1

| a — 2 y
—— <Q

yy A y N -
Wise “ y

| y
be ’

‘words / )

Aah 4 \\ % OB
GRAMMAR | third conditional and should have 9 Loi \\ "J
VOCABULARY | phrases of advice » a» a 4
PRONUNCIATION | contractions in complex sentences

Za | .
-— -
y VP
J pl _ ; .
Ty
)
VOCABULARY
phrases of advice
1 A Work in pairs. Read the definition of a motto. Can you think of any mottos C Look at the phrases in bold in Ex 1B.
in your language? Which is/are:
5 1 warnings saying what you shouldn’t
motto (noun): a short sentence or phrase that expresses do? (four phrases)
someone’s beliefs or ideas, e.g. about life, e.g. Hope for the best 2 about not responding too quickly?
and prepare for the worst. 8 ‘abolt foclisiAg?
4 about being prepared to do
B Read the mottos (1-8) and match them with the ideas (a-h). something?
1 Learn something about everything and everything about something. 5 about gl an opportunity as much
2 Take risks. If you win, you'll be happy; if you lose, you'll be wise. SRL
3 Listen a hundred times, ponder a thousand times, speak once. 2 A Work in pairs and discuss the questions.
4 The journey is more important than the destination. 1 ‘Which of tha msties in Er 18 ave
5 If you want something you've never had, you have to do something you heard before in English or in
you've never done. your own language?
6 Live each day as if it were your last. 2 Where do you see these kinds of
7 The best time to plant a tree was twenty years ago. The second best mottos? How do you feel about
time is now. them?
8 Laughter is the best medicine. 3 Are there any you disagree with?
a Be careful not to always take the safest option. B Choose five of the phrases in bold
b Stop worrying about where you'll be in the future and enjoy the present. from Ex 1B. Complete them with
c Take time to think before you give your opinions. your own ideas. Then compare with
d Make the most of your time on Earth. a partner.
e Don’t be afraid to do something new. Don’t be afraid to meet new people;
f Don’t take life too seriously. you might make a friend for life.
g Be ready to act even if it seems too late. Stop worrying about things you
h Pay attention to the world around you and try to understand it. can’t control.
92`,confidence:85},93:{text:`8A
| READING | Advice across the ages
BA Discuss peli. ihoseadvice doyeg What is the best way to live our lives? What can we learn
listen to? TR What Situations? from other generations? 123 Magazine spoke to people
ranging in age from 19 to 100 and asked for life advice.
B Read the text. Which advice do you Here are some of their answers.
like the best?
C Read the Future Skills box and answer = NS :
the questions. f VN Make the most of your schooldays. They're a lot easier
if '\\, than working. You're with your friends all day and the
rr... .. = 4 = worst thing you have to do is a few exams every year.
| FUTURE SKILLS @ . If I'd realised this, | would have had more fun at school
see me = 4 oy \\+ instead of complaining all the time. Also, | should
| Critical thinking im A ; have studied more. The exams weren't that difficult,
| When we read, we sometimes have to 4 FS", but when you aren't prepared, everything is difficult.
‘read between the lines’. This means ! So, overall, my advice to anyone who's still at school is
we try to guess things that might A779 toenjoy yourself. Those days will be gone before you
not be said, e.g. the writer's personal 19 know it.
history, ideas, character and attitudes. John
This is part of critical thinking. Ya : ->
Read what John says about his If I had to give one piece of advice, it would be to 1 y “~~
: : spend less time worrying about stuff. When | was S
schooldays again. Do you think John > : 1 \\
: A > What younger, | worried about everything - my appearance, | SRR, |)
ai well n Lo hil ans wl what people thought of me and whether all my
information in the text gives you plans would work out. | shouldn't have paid so much / —
the answer? attention to those things. Now I think I'm more — \\
_— relaxed, especially when tasks aren't urgent. At least {) "
that's what my colleagues tell me. My best friend y 3
D Work in pairs. Choose the correct always says, ‘Everything will be OK in the end and if =
option (a-c). Which words in the text it's not OK, it's not the end.’ So that’s my advice: stop age -
give you the answers? worrying so much. .
1 What do you think Indira does? 28 Indira
a She studies fashion at a local
university. 2 Don't take yourself too seriously. No one else will.
b She works in an organisation. d Y And you don’t have to win every argument. If I'd
¢ She looks after a young child i known that when | was younger, I'd have lost more
FH homa. r p ( ls is kept more his Joy our .
; : » yy Believe me, when you're young is the best time to
< wher a las sink 9 make mistakes. You still have time to recover. And
a j 3 listen to your parents. You may sometimes do the
a She was similar to her parents. (PARE opposite of what they say, but at least be polite
b She was friendly and her friends enough to listen.
thought she was funny. Alexandra 40
c She had strong opinions.
3 What type of person do you think Take time to enjoy the little things. Imagine you're a pe
Lisbeth is? child again, when going to the supermarket was an _-—
a Sheis probably creative. adventure and trees were for climbing. Be grateful and ~
b She might be shy and quite don't compare your life to other people's because you - A "
serious. don't know what they're going through. Make things. by
¢ Shes probably careful and not Any things. Make meals, make a mess, make art. Just
very friendly. bring things into the world and see what happens. Be 1}
4 What is Lee's attitude to the past? good to others. If you're not sure what to do or how to ~~ eZ NEE
a Eethinkehamisiakes cost hin treat someone, always take the more generous option. AEFFER ’ ) N
alot of money. You'll never regret it. 6 5 Lisbeth
b He believes it’s important to
spend time thinking about the Pov Ng
past and decisions you made os Forgive yourself and everyone else. We all get things
when you were younger. — \\ wrong. | spent twenty years in the wrong job in the
¢ He doesn’t worry about the i - a wrong industry in the wrong town. Now | just laugh
mistakes he made. \\ about it. | moved on and life got better. Don’t waste
your energy with what-ifs: ‘| should have done this
4 Workin pairs and discuss. Do you Aad and | shouldn't have done that.’ Forget it. It's too late.
think our views on our past opinions - Pay attention to the here and now. Finally, spend all
and actions change as we get older? your money - or your kids will do it for you!
In what ways? Lee 100
93`,confidence:83},94:{text:`Unit 8 | Lesson A
GRAMMAR SPEAKING
third conditional and should have 7 A You are going to describe a situation, then give advice.
. Read the example. Do you agree with the advice?
5 A Read the sentences (1-4) and find the verb forms.
1 If I'd realised this, | would have had more fun
at school. Situation
2 If I'd known that when | was younger, | would have
lost more arguments and kept more friends. When I was seventeen, [ had a chance to go
3 | should have studied more. to Australia to do an English course with
4 | shouldn't have done that. my school. The course was in Melbourne, a
wonderful city with a lot of interesting things
B Work in pairs and answer the questions (ae) about to see and do. I would have been away for one
Ex 5A. month of intensive study. I thought about it for
a Are the sentences about the past or present? a little bit, but I decided to stay at home and
b Are the speakers happy with what happened in get a summer job. At the time, I really wanted
the past or do they wish things had been different? to make some money. That July, several of
¢ Which verb tense comes after if in sentences my friends went to Melbourne. When they
Tand 2? got back, they told me they'd had a great time.
d Which verb form comes after would have in They'd loved the city and they'd made lots
setbenEes 1 ade? of new friends. It was then that I realised I'd
e Which verb form comes after should(n’t) have made the wrong decision. I should have gone to
i ishes?
for lang about pastregrets/ishes: Australia. I've never had the opportunity again.
C Learn and practise. Go to the Grammar Bank. If I'd thought more carefully, I would have gone
because I would have improved my English and
| d page 129 GRAMMAR BANK seen a new country.
. A]
PRONUNCIATION ET
6A [s.01 | contractions in complex sentences | a
Read the sentences (1-4). How do we pronounce So, my advice to anyone in that situation would
the parts in bold in fluent speech? Listen and check. be to make the most of your opportunities.
1 I should have been nicer. Take time to think about decisions. | made
2 You shouldn't have paid any attention to him. "my decision too quickly because | wanted to
3 If I'd known, | would have done things differently. work that summer. Be reagy todo something
4 If we'd known, we wouldn’t have been so worried. different, maybe something that wasn't in your
original plan.
B LJ] 8.01 | Listen again and repeat the sentences. i
C Complete the sentences (1-4) in any way you choose.
Then read them to a partner. B Prepare to describe a situation and give advice.
1 Last night, I should have ... 1 pou a yh Joyo ie ra
4 ave been useful to know? Should you have done
#Wihen was FRI SOU HER anything differently? Use the ideas in the box or
3 If I'd woken up earlier, | would have ... think of your own.
4 If I'd known then what | know now, | wouldn't have ...
dealing with a problem planning a trip
" your first job your time at school or university
: - -
- 2 Make notes on the situation and the advice you
« R »- ) ue, would give someone in a similar situation.
\\ » ud >, 2
"3 3 >) | e -_, C Work in groups. Describe the situation and give your
- \\ Dye J) oo 5 advice. Then listen to other students and think of how
NX p™ A Nh \\ "y ~ you can respond. Do you agree with their advice? Why/
#0) WN 0) a ; Why not? What alternatives can you think of?
\\ 5 oe : a ) ; | agree! If you'd done that, it would have been better.
= ys ) » 74 & i Maybe. But if you'd moved, you wouldn’t have
<< , ; J met Sophie.
| ot | NY b I’m not sure you should have done that. It’s difficult
> gl 2 to say.
ki% a BN -
= V _—— {
94 (= IE A " BS < A N
ss = By (oR
= 1 / di`,confidence:83},95:{text:`LS
he x Se, Otel
> ric A$ oid 8B
Lif gh
ITE a 9 es
lessons 0 ur
v £ cf a = A rom 4
8 a - dE
GRAMMAR | would 4 op. i
VOCABULARY | learning; phrasal verbs = J a
PRONUNCIATION | contracted would a eS
— \\ » = y 2
— i Pi » : =

[Vou CARY How it all started
learning
1 A workin pairs. Ask and answer the questions. on Cl ARerEIE leamt about

1 Do you have any particular interests which you I i :

have had since you were a child? Despite living in a city, David Attenborough spent
B Eat Sii ii lbGiE ChT? his childhood collecting fossils, stones and natural
3 HEEVELT TEs chained _ chs aare? specimens. His lifelong passion for the natural
Fak - os epnblacy 9 y : world developed early and by the age of seven,
yong Pie he had a large collection of bird eggs and fossils.
B Read the article about how three people became He was encouraged by the yee archaediogist
interested in their subject. According to the Jacquetta Hawkes, who admired his ‘museum’ He
article, who: later attended a lecture by famous naturalist Grey
1 aij IEarTiTiG SEGUE Hew teehinalogi? Owl in 1936 which deepened his interest in Natural
> SETHE aR tS AHR hE —— _ Sciences, which he studied at Cambridge University.
ideas with younger people?

3 had a mentor who influenced them? How Gitanjali Rao became a world-famous scientist

2 A Complete the sentences (1-8) with the words and fd Aeron when she were Young child

phrases in bold in the article. Gitanjali Rao is a scientist and inventor who was

W Tard Terri Tamme Ak Bik) bi named Time magazine's first ‘kid of the year’ Gitanjali
then | found it ch i rg ’ ’ was just four years old when she first discovered her

5 HilinnAfenino bas b } ji love of science. She worked hard to master the skills
Ane Hana ro oy eee es LE and techniques needed to develop her ideas and at

3 When | have no ideas, | look at other people’s ee fhe ne of Adie - Ae
workio rie: scientist’ for her invention of a water-testing kit. She

& Mygrandimotherafvays me to stud is fascinated by new technologies, and as well as the
hard at school. She i ‘Education is wealtn. water-testing kit, she has developed an app which can

8 Teadnnlsdiolusenusncl ties foodie: foo a detect cyberbullying. Now she hopes to inspire others
at vs per he rad ying to dream up ideas to ‘solve the world’s problems’.

6 A holiday in Athens in archaeology, and

5 " a Th i RAE lak wae-w= Why Priscilla Sitienei says it's never too late to learn
- hb 4 hears A dos g lots i: nh wh a da Priscilla Sitienei was a midwife in rural Kenya. She

8 Abschooli usually worked hard and gaps grew up without free primary school education and
grades had never learnt to read or write. As she got older she

’ had a powerful longing to write down her experiences

B Work in pairs. Change two or three of the and knowledge in order to pass them down to the
sentences in Ex 2A so that they are true for you or next generation. Motivated by this desire, she started
people you know. Tell your partner. attending lessons at the local school, together with

her six great-great grandchildren. She was ninety

C Look at the phrasal verbs highlighted in the text. at the time. Known as ‘Gogo’ to her teachers and
Do you know what they mean? Learn and practise. classmates, Priscilla made good progress in school
Go to the Vocabulary Bank. and enjoyed telling stories to inspire and motivate the

[1] page 137 VOCABULARY BANK phrasal verbs younger children.

95`,confidence:77},96:{text:`Unit 8 | Lesson B
LISTENING GRAMMAR
3 A Read the information about the BBC Radio would
programme. Who was Hans Rosling?
4A s.03 | Listen and complete the sentences.
How I Learned to Understand B | [B | 1 | watched out for him cycling along the street
the World and the same question every time: ‘Did you
find anything today?’
How I Learned to Understand the World is Hans 2 Pappa these things home and tell me a story
Rosling’s own story of how he grew from a young about every one of them.
scientist into a famous doctor, academic and public 3 He _me sit on his lap, open up the world atlas
speaker. He was passionate about how poverty in front of us and tell the story: ‘It’s a large country
affects health in countries around the world and and VERY Hak Co ,
how science can help us to improve global health. 4 "This coin turned up inside a sack from Santos’, he
} pointing at the Brazilian port city.
5 He the working men and women ...
B J) 8.02] Listen to the programme and answer L
the questions. B Work in pairs. Choose the correct words and answer
th tion.
1 What did Hans learn from his father? FopECIsR . ;
5 Howdidihis hsgiahin 1 In the sentences in Ex 4A the contraction 'd is short
P . for had / would.
c [8.02 | Work in pairs. Choose the best option (a or 2 We can use would to talk about a past habit or
b) to complete the statements (1-7). Then listen again routine / something we plan to do in the future.
sfid check. 3 What other structure can we use to talk about a
past habit or routine?
1 Hans Rosling’s father worked in:
a acafé. C Learn and practise. Go to the Grammar Bank.
Bae [Y page 130 GRAMMAR BANK
2 When he came home in the evening, he:
a smelt of coffee.
b drank a lot of coffee. PRONUNCIATION
3 Hans would wait for his father to return from work 5A s.04 | contracted would | Listen and choose the
and ask him: ) ) words you hear.
ETaEEe SRE Every evening. 1 1/1Pd wait for him every evening.
b lots of questions about the coffee beans. \\ 4 :
) } } 2 He’d / He'll always answer my questions.
4 His father would bring home coins: " .
- 3 He explained / He'd explain where Santos was on
a when he travelled to Brazil. the map.
b he found inside the coffee sacks. 4 He'd / He'll point to the Brazilian city.
5 His father would show Hans an atlas and:
a tell him a story about where the object came B Work in pairs. Think about three things that you
from. and your family or friends would do when you were
b test his knowledge of geography. younger that are happy memories. Tell your partner.
6 Hans began to understand about the differences Remember to use contractions.
between: When we were younger, my sister and | would always
a how Swedish and Brazilian people enjoyed play games together. We'd spend a lot of time in our
drinking coffee. bedroom inventing new games. We'd play for hours
b the lives of coffee pickers in Brazil and the people and hours.
who enjoyed drinking coffee in Sweden. .
7 Hans thinks that his ‘powerful longing to 6 A Think of some people who you learnt from in your
understand the world’ began with his father: early life (parents, grandparents, teachers, mentors,
a teaching him the details of the coffee process. friends, etc.). Prepare to talk about what you learnt
: : 5 d what th L ld do to teach you.
b telling him stories related to different countries andwhat these peopie would dototeach you
in the atlas. Something my taekwondo teacher taught me was
that even when something seems impossible, you
D Work in pairs and discuss the questions. can usually achieve it if you break it down into small
1 Why do you think Hans’s father told Hans these steps. She would always encourage us to work hard to
storie? master each new skill before moving onto the next.
2 hol pay oung B Work in groups. Take turns to tell your stories.
96`,confidence:88},97:{text:`8B
SPEAKING WRITING
7 A Work alone. What qualities do you think are a short biography
important in a mentor? Add to the ideas below. p .
; 9A Read ashort biography about a childhood hero. Why does
* desire to help others the writer admire this person?
« understanding everyone is different
. B A short biography might include some or all of the following
B Read the Future Skills box and do the task. details. What do we learn about these details in the text
about Olga Mumford?
FUTURE SKILLS 1 date and place of birth 4 achievements
: SND (and death) 5 important moments
Collaboration 2 other important places in in their life
When discussing ideas in a group, it's important their life 6 family/relationships
to respond to other people’s suggestions, as 3 education and jobs 5", Baracter
well as put forward your own ideas. You can use
phrases like: ‘That's a good point’ and ‘I'm not 10A Put the linkers in bold in the text under the correct heading.
sure about that idea.’ . .
Showing results Showing reasons
Can you think of any other useful phrases for Consequently ... ; So ... For this reason ...
responding to ideas and suggestions? 1 3
2 4.
S Work in groups and discuss. What do you think B Choose the correct words to complete the sentences.
is the most important quality in a mentor? ;
. . 1 My father was a successful businessman and because /
Give examples from your own experience to :
SE : as of this | have always been very ambitious.
justify your ideas and respond to other people’s
suggestions 2 Both my parents were teachers and as a consequently /
: result of this | decided to work in education.
D Compare your ideas with other groups. What 3 He was an incredible musician and so / as | was inspired
do you think of their ideas? Do you have similar to be like him.
suggestions? 4 She loved writing and consequently / because she
decided to become a writer.
8 Look up a video of Hans Rosling talking about
statistics. Try The Joy of Stats or How not to be C Choose a person you have admired for a long time. Make
ignorant about the world. Did you enjoy the video? notes using the categories in Ex 9B.
Why/Why not? Did L hing? Tell
Why noi I) wi any Sas, BIO D Use your notes to write a short biography and explain why
class about any surprising information you learnt. ; ; 2
you admire this person and how they have influenced you.
LJ
My childhood hero
Olga Mumford was an artist and school teacher. She was born in Hungary in 1947 and lived pa
there until she was thirty years old. She was working as an artist and a teacher when she pe SN
met my grandfather, who had travelled to Hungary from Canada on business. They fell in bot :
love and married soon afterwards, and as a result of this, Olga left Hungary and moved -e Je
to Canada. She stayed there and worked as a successful artist, exhibiting regularly in art - : St -
galleries in and around Vancouver, until she died in 2016. “ \\ A 1 \\\\
Olga was my grandmother and my childhood hero. When we visited her she would - ’ $
always take us into her studio and tell us stories about her paintings. I remember being sei J A
fascinated by the beautiful pictures and the stories behind them. She would give us big ~~ | A : N
sheets of paper and huge paint brushes and encourage us to make a big colourful mess. Li } pre 7. 7 3 7 fi
‘We would have such fun splashing paint everywhere and as a consequence my mother Los 4 .
would always get angry, because we would end up with our faces, hands and clothes bo ly
all covered in paint. But those times were special. & a ws
I admired my grandmother because she was always laughing and enjoying herself. She ; i oh Ea r
loved spending time with all her grandchildren and always had chocolates hidden in afi HE Th 2 7 :
her pockets. She was a very independent woman who always enjoyed life, so she was o Th =
always smiling. She also loved her work and enjoyed teaching other artists. She is my 7 4
childhood hero as she always inspired me. It is because of her that I decided to a . Vd
study design at art school. 3 FF
£- : |`,confidence:85},98:{text:`Unit 8 | Lesson C
C One thing | know
8 e t i g (XX aN
( D
HOW TO ... | give a presentation \\
VOCABULARY | presenting PR
PRONUNCIATION | stressing words in key phrases “ )/ 3 \\ }
oN W \\
\\
5 < )
| — OE
4 bh -
Car T= ’
2 - .
- -» . E LT ——
1 a a
VOCABULARY C Choose the correct words to complete the sentences.
. 1 Agood talk / field / delivery always has a clear message.
presenting 2 It’simportant to present lots of fields / outlines /
. . ] . facts and figures to show the audience that you are
1 Workin pairs. Discuss the questions. an expert in your point / field / outline.
1 Do you have to give presentations for work or your 3 If the talk / subject matter / delivery of a presentation
studies? If so, on what subjects? is bad, e.g. the presenter doesn’t speak clearly or engage
2 Describe a time when you had to speak in public the audience, sometimes the key points are lost.
(a project in school, a presentation at work, a 4 It’s not essential to use slides / subject matter /
wedding, teaching a class, etc.). presenters to illustrate your points, but it helps
3 What do you think makes a good or bad audiences who like to see information written down or
presentation? Can you think of any examples that shown in images or diagrams.
you have seen? 5 You should always write a good outline / delivery /
key point so that you have a clear beginning, middle
2 A Read the text and answer the questions. and end.
1 According to the author, what was unusual about this 6 You should give examples to engage / illustrate /
presentation? argument your key points.
2 Why was it so popular? 7 Jokes can help to illustrate / talk / engage an
3 Have you seen it? Would you like to? audience, but make sure they're funny or they'll have
the opposite effect!
= Work in pars, Discuss the meanings oF the words In D Work in pairs. Which of the statements in Ex 2C do you
bold in the text. Use a dictionary if necessary. :
agree with? Why?
a Es Seth
LE SRE WA Bibs siege A Sr cf
TTY re SEA Imes LR —
This presentation broke lots of ‘rules’ It didn’t use any slides. TT Fer [ines Te
There was no clear outline, although the presenter did name his Pd
key points in the first few minutes. He knew his subject matter :
well and was clearly an expert in his field, but he didn’t provide J (
lots of facts and figures. E $
It was his delivery that was unforgettable. The speaker, Ken Robinson, x e
told jokes to engage his audience and stories to illustrate his points.
And what were those points? His main argument was that schools
need to help students to discover and develop their creativity. :
Robinson's talk, Do Schools Kill Creativity?, has been watched online FEE :
over 85 million times and translated into over sixty languages. It = X
inspires educators and others all over the world. < = J i
98`,confidence:83},99:{text:`8C
How to... (SPEAKING.
give a presentation
6a Prepare to give a five-minute presentation to other
3A [)8.05] Listen to the presentation and complete students. Choose a topic that interests you. Use
the notes. the ideas in the box or your own ideas.
Fi things you need to know to give a hobby favourite art, book or music
ive a great presentation aplace asport work/studies
@ People learn bestin _ -minute chunks. Keep your B Answer the following questions. Use the bullet
presentation short. points for ideas.
©) Makesure information is easy to read and 1 How will YoU SgRge your audience at the
helps people whatis being said. beginning?
— oe — « by telling a joke or story
3] THINK ABOUE ......... 10 GENET YOUR g [Esemation + by including some facts and figures
© Includeacallto Tell people what you want 2 What are your key points? In what order will you
them to do. talk about them?
(5) Be aboutyour subject — people will copy your 3 How will you prepare your outline?
‘emotions. « in note form
+ inalist
B Work in pairs. Do you think this was a good presentation? « inadiagram
Why/Why not? 4 How will you deliver and illustrate your message?
+ bytelli t
Cc Es.o5 | What does the presenter say? Choose the Ts _, as i ;
. . + by making a slideshow presentation
words the speaker uses (both options are possible). A i
Then listen again and check. he § showing piEhuees .
1 Today I'm going to talk / speak about ... o Ld oo ys. cancludeyaur tal
2 So, to begin with, can | just get an idea of how many = hs REY .
...?/ashowofhands...? + with a call to action
3 This brings me to my first / last point. » by inviting the audience to ask questions
4 Beck; If satant Ade / HolnE « C Practise your presentation, then deliver it to other
5 ——— on to talk about / to the next point, ... students:
: hp ii / —- iN or » Try to use the advice you heard in Ex 3A.
S ETInaty fastpont, « When you listen to the other presentations, think
8 Just to recap / summarise. of at least one question and ask it at the end.
9 Does anyone have any comments or questions /
suggestions? D Read the Future Skills box and do the tasks.
10 That’s avery good / interesting question. I'm not sure
| can answer that now.
FUTURE SKILLS
4A Workin pairs. Look at the phrases in Ex 3C. Which Communication
A SRST ) When giving feedback, start by saying something
1 starting the presentation? positive. Never give only negative feedback
2 going through the main points? because this can cause bad feelings. Instead, talk
3 finishing? about things you liked and things the speaker
4 dealing with difficult questions? can improve.
B Learn and practise. Go to the Grammar Bank. ong —— presentation, sr ——— thing you
liked and one thing the presenter could improve.
Ld page 131 GRAMMAR BANK Give your feedback.
PRONUNCIATION on
: 2 : MEDIATION SKILLS
5A [8.06 | stressing words in key phrases | Listen to the . 8 g
phrases. Which word(s) are stressed? asking someone to elaborate
1 To begin with, ... 4 Asa final point, ... on what they said
2 The first point... 5 Tosumup, ... ask follow-up questions after a presentation
3 Movingonto... 6 Just to recap, ... » page 156 MEDIATION BANK
B [8.06] Listen again and repeat the phrases.
Speak Go to the interactive speaking practice 99`,confidence:82},100:{text:`Unit 8 | Lesson D
8 D VIEW
2A IO watch the BBC video clip and answer the questions.
9 1 What kind of products does Jacob Thundil’s
business produce?
2 Is Jacob's pitch successful? What happens in the end?
B Are the following statements True (T) or False (F)?
1 Jacob grew up in Kerala, which in Sanskrit means
‘land of coconuts’. T
2 The market for coconut oil and coconut water in the
US is worth around $50 million.
SPEAKING | pitch a business idea 3 Jacob's business had a turnover of £1 million for
WRITING | an email giving work-related news three years.
4 Jacob would like to offer an investor 5% of his
business in return for £75,000.
5 Jacob is responsible for sales, marketing and
purchasing, and Manisha deals with operations
PREVI EW (logistics, deliveries, etc.).
6 Deborah offers the team all of the money for 30%
. . of the business.
1 A Read the programme information. Match the words in
bold with the meanings (1-5). ¢ [3 watch again and check.
1 the equal parts that a company’s value is divided . . .
into. People can buy and sell these parts. D Work in groups. Discuss the questions.
2 people who put their own money into a business or 1 Do you think Jacob made the right decision?
product and hope to receive more money in return Why/Why not?
3 people who organise and run their own business 2 Have you ever had to give a presentation or a pitch J
4 a description of a business idea, aimed to get like this? If so, what was it for? How did it go? If not,
people interested in buying or supporting it how would you feel about it?
p : 3 What advice would you give to someone who has to
5 say that u t t YORGIERg San
BS SES EL es Cs make this kind of pitch for their business?
B Read the programme information again and answer .
the questions. EER, S|
1 What might be difficult about pitching a business — — _— il T § =
idea to wealthy investors on Dragon’s Den? : = so A |
2 Do you have a programme like this in your country? oy |
If so, is it popular? - — A |
TTR 55)
aim Seng Je gm EL m
| 2 bY 4 4 -1 ho, |
‘ann i = 1000
o |mEEEL. (HENNE.
EEE {| 5 umm
FAY |; < HEED "
. A= a UM 4 Ld L
SARL CELE my C]
= = gae >
- a - = | ; -
Dragons’ Den EE Ae es
Dragons’ Den is a BBC business programme. In each ea = yp :
episode, entrepreneurs have three minutes to describe Re. X -
their business idea to five wealthy investors. After the ee J
entrepreneur’s pitch, the investors ask questions. If an : .
investor likes the idea, they make an offer to invest their [ i
money. In return, the investor will get shares of
the business. Sl ia 5%
( 1 br i - a)
- ones - 3 as vai - A a r= oy — A pa
= ===" = ===
100 i — : . :`,confidence:79},101:{text:`(SPEAKING. WRITING sls]c
pitch a business idea an email giving work-related news
3A E)s.0o7 | Listen to a couple pitching their business 5A Read the email. What news does it describe?

and answer the questions.

1 What type of service do they offer? Subject: Two new cafés DO,

: From: brennanmg@cafebotas.com
2 How much money are they asking for, and for what 2 | I
: To: all
percentage share of the business?

3 What questions does the investor ask? Dear All,

B [s.07 | Listen again and tick the phrases you hear. We are delighted to provide an update on some exciting
news. As you know, we recently talked to a number of
investors about opening two new cafés. I'm pleased

KEY PHRASES to announce that the food investor VJ Picaldi made an
We run a business called ... offer which we have accepted. This allows us to start
Examples include ... searching for two new locations and hiring more staff.
What's special about [our business] is that we .... We will organise a meeting next week to present the
We offer ... plans for the new cafés, and discuss all the tasks that
Our [holidays/products] offer ... will need to be done. We'll also take a close look at the
The market for ... is worth ... schedules and try to get an opening date for both cafés
We'd like to expand our business to cover ... in the diary. We look forward to seeing you all there.
Our long-term planis to ... Please let me know if you have any questions or
We're asking for [X] euros for a(n) [X] per cent concerns at this stage.
share of the business. Marilyn Brennan
CEO, Café Botas
4 A Work in pairs. You are going to pitch a business idea.
Choose a product or service from the box or think of
your own. B Which pieces of advice (1-5) does the email follow?
_— 1 have a clear and accurate heading
a food product a clothes range oo 2 use a positive tone
a tienes that organises Create acabies 3 explain a new development or situation
an mnvention a newgadge /app) 4 describe any follow-up actions, e.g. meetings
a home delivery service an educational tool .
) 5 include an opportunity for a response
B Plan your pitch. Go to page 144. C Plan an email to colleagues describing the outcome
: of the pitch you made in Ex 4B. Explain what happened
| er and describe any follow-up actions, e.g. meetings.
_—— ee Use the advice in Ex 5B to help you.
- D Now write your email. When you are finished,
a compare your email with your partner in Ex 4B.
-- PA a Which information did they include from Ex 5B?
\\ \\a ity (3
. | k -
J .
TIN = a | ey
ed
po — —
| \\ |
- \\
-— min r— i
a Ad - A — — p— —— = L
. = : =) ——h— — -—— = |
= a: : : 101`,confidence:84},102:{text:`3 REVIEW
GRAMMAR ¥ \\ ¢
a ) - [d
third conditional and should have j | a a
1 A Use the prompts to make sentences. i. i A 7 | ————— Br a
1 If / know / the job / be / this difficult /1 y > E ~ en == :
/ not offer / help | IE | nw oh { [ie A fim | i id
i i ~ a { | per
2 | failed my exams. | should / study SERRE ™ shee dil AE er
= 49 2 CECE, £4 ppm Jp) ye gd es
harder Te pid Wad alii R His :
i d ET Well LT 1 Him ul

3 If study / harder / at school, / 1 / might / il iia VT LG 1 ei ER i
go / university T= NN a = . =

4 If / have / more confidence, / 1 / 5 io 4 A SN, Tae
change jobs / earlier \\ 3 EN a © —— =

5 | / not oversleep / this morning / if / 1 /
go / to / bed earlier / last night

6 | / should not / drink / so much coffee / would

§ = fight | Frey re 3a Replace the past simple verb in bold with would where possible.

ere was a lot of traffic so we were ws .
8 a ag Where it is not possible, use used to.
arrive / on time. 1 My best friend lived in Vienna when she was younger.

8 | sent the application form in but it 2 | spent most weekends with my grandparents when | was a child.
was too late. 1/ should / send itin/ 3 | didn’t think money was important, but | changed my mind
sooner. when | wanted to buy an apartment.

9 He would / be / on time / for the 4 Every summer holiday | worked in a café to earn some money.
dai /if/he/ left / the house / at 5 After class | played football in the park with my friends.

Co 6M ts al d ial cake f birthday.

fT T——— y parents always made a special cake a my bir oF

might / become / a teacher. 7 Stefan was a bank manager, but he gave it up and decided to go

; into acting instead.

11 If / they / give / us / the correct . .

directions, / we / not / get lost. 8 When we went ona long car journey, my sister and | sang all our
12 I would / go / on the course / if | / fral Te Solis.

know / rk it. 9 Iwas so untidy when | lived at home. | always left my clothes all

over the floor!
B Think of three things you have done in 10 | played the guitar, but | gave it up because | didn’t have time.

the last ten years. Discuss the questions .

with a partner. B ge four of the sentences in Ex3A ws are rue for ok

5 Plow Would EHings ave Baer different ompare your sentences wit ApUThes ind three things that you
. , would both do as children, but you don’t do now.
if you hadn't done them?

« Should you have done anything
differently?

VOCABULARY
* Why/Why not?
4a Complete the sentences with the words in the box.
2 Choose the correct words.

1 | hate living in this old house. | would afraid attention deepened encouraged
be / would have been happier if most passion seriously time worrying
we had bought / buying a modern ———
apartment. 1 You should stop so much and try not to take everything

2 If | had met / met Sandra before So) 5
I'm sure | would have recognised / 2 | watched an amazing documentary which my interest in
recognised her face. the world of plants and insects.

3 They should offering / have offered 3 I'm learning jujitsu — I'm never to try something new.
her the job — she was definitely the : z

: 4 Let's go out. We need to make the of our time here.
yy 5 My grandmother al to dance. Sh ballad

% Bled leave lofi y grandmother always me to dance. She was a ballerina

when she was younger.
passports at home, they would be / . .
were in Indonesia now. 6 You Ship ae some to think about your options before

5 | shouldn't have / should have taken , g
on so much work — I'll never be able to 7 He never seems to pay to what's going on around him.
finish everything on time! 8 Literature has been my lifelong .l can’t read enough.

6 If she should have trained / had
trained harder she would win / B Work in pairs. Change some of the sentences in Ex 4A so that they
would have won the race. are true for you. Do you have anything in common?

102`,confidence:78}},S0=I0,E0=50;function ry({pages:r,printedPages:l}){const u=r.map((h,c)=>{const m=l[c]??h+1;return{pdf:h,printed:m,entry:S0[String(m)]}}).filter(h=>h.entry?.text);return u.length?s.jsxs("details",{className:"group mt-3 rounded-xl border border-[var(--line)] bg-[var(--surface)]",children:[s.jsxs("summary",{className:"flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden",children:[s.jsx(pt,{size:16,className:"text-brand-600"}),"Page text & exercises",s.jsxs("span",{className:"ml-auto text-[10px] font-medium text-[var(--ink-faint)]",children:["Auto-transcribed · ",u.length," page",u.length===1?"":"s"]}),s.jsx(cd,{size:14,className:"text-[var(--ink-faint)] transition group-open:rotate-180"})]}),s.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-2",children:[s.jsx("p",{className:"mb-1 py-2 text-[11px] leading-relaxed text-[var(--ink-faint)]",children:"Text read from the scanned pages by OCR. Paragraph order may be imperfect on two-column pages; use the image above as the reference."}),u.map(h=>s.jsx(T0,{printed:h.printed,text:h.entry.text,confidence:h.entry.confidence},h.pdf))]})]}):null}function T0({printed:r,text:l,confidence:u}){const[h,c]=T.useState(!1),m=u<E0;return s.jsxs("div",{className:"border-t border-[var(--line)] py-1.5 first:border-0",children:[s.jsxs("button",{type:"button",onClick:()=>c(p=>!p),className:"flex w-full items-center gap-2 rounded-lg px-1 py-1.5 text-left text-xs font-semibold text-brand-700 transition hover:text-brand-600 dark:text-brand-300","aria-expanded":h,children:[s.jsx(cd,{size:12,className:`transition ${h?"rotate-180":""}`}),"Page ",r,m&&s.jsx("span",{className:"rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",children:"low quality"})]}),h&&s.jsxs("div",{className:"mt-1 pb-3 text-[13px] leading-relaxed text-[var(--ink-soft)]",children:[m&&s.jsx("p",{className:"mb-2 rounded-md bg-amber-50 px-2 py-1.5 text-[11px] leading-relaxed text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",children:"This page is image-heavy, so the transcription below may contain errors. Use the page image above as the reference."}),s.jsx("div",{className:"whitespace-pre-line",children:l})]})]})}function N0({unit:r,lesson:l}){const{isComplete:u}=to(),h=u(r.number,l.id);return s.jsxs(G,{to:`/unit/${r.number}/lesson/${l.id}`,className:`group flex gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${h?"border-brand-300 bg-brand-50/60 dark:border-brand-800 dark:bg-brand-950/30":"border-[var(--line)] bg-[var(--surface)] hover:border-brand-300 dark:hover:border-brand-800"}`,children:[s.jsx("span",{className:`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-sm font-black tracking-tight ${h?"bg-brand-600 text-white":"bg-[var(--bg)] text-brand-700 ring-1 ring-[var(--line)] dark:text-brand-300"}`,children:h?s.jsx(ln,{size:19}):l.code}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsx("h3",{className:"text-sm font-bold leading-snug text-[var(--ink)] group-hover:text-brand-700 dark:group-hover:text-brand-300",children:l.title}),s.jsxs("span",{className:"shrink-0 text-[10px] text-[var(--ink-faint)]",children:["p. ",l.pages[0]]})]}),s.jsx("p",{className:"mt-1 line-clamp-1 text-[11px] text-[var(--ink-faint)]",children:l.labels.grammar??l.labels.vocabulary??l.labels.skills}),s.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-2 text-[10px] text-[var(--ink-faint)]",children:[l.audio.length>0&&s.jsxs("span",{className:"inline-flex items-center gap-1",children:[s.jsx(Kn,{size:12})," ",l.audio.length," audio"]}),l.videos.length>0&&s.jsxs("span",{className:"inline-flex items-center gap-1",children:[s.jsx(hn,{size:12})," video"]}),l.grammar&&s.jsx("span",{className:"rounded-full bg-[var(--bg)] px-1.5 py-0.5 ring-1 ring-[var(--line)]",children:"Grammar"}),l.quiz&&s.jsx("span",{className:"rounded-full bg-accent-100 px-1.5 py-0.5 text-accent-800 dark:bg-accent-950 dark:text-accent-200",children:"Quiz"})]})]})]})}const mg={streetint:"BBC Street Interviews",vlogs:"Vlog",programmes:"BBC Programme"},R0={streetint:"from-brand-700 via-brand-600 to-brand-500",vlogs:"from-accent-800 via-accent-600 to-accent-500",programmes:"from-warm-900 via-warm-700 to-warm-600"};function ly({video:r,unitNumber:l,compact:u=!1}){const[h,c]=T.useState(!1),[m,p]=T.useState(!1),[b,w]=T.useState(!1),v=Fo(r.file);return s.jsxs("article",{className:"overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-sm",children:[h?s.jsx("div",{className:"aspect-video bg-black",children:m?s.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-white/80",children:[s.jsx(hn,{size:28}),s.jsx("p",{className:"text-sm",children:"This video could not be loaded."}),s.jsx("a",{className:"text-xs underline",href:v,target:"_blank",rel:"noreferrer",children:"Open the file directly"})]}):s.jsx("video",{src:v,controls:!0,autoPlay:!0,playsInline:!0,preload:"metadata",onError:()=>p(!0),className:"h-full w-full"})}):s.jsxs("button",{type:"button",onClick:()=>c(!0),className:`group relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br ${R0[r.kind]} text-white`,"aria-label":`Play video: ${r.title}`,children:[s.jsx("div",{className:"absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_70%,white_0,transparent_30%)]"}),s.jsx("div",{className:"absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] backdrop-blur",children:mg[r.kind]}),s.jsxs("div",{className:"absolute right-4 top-4 rounded-full bg-black/20 px-2 py-1 text-[10px] font-semibold backdrop-blur",children:["Unit ",l]}),s.jsxs("div",{className:"relative flex flex-col items-center gap-3 px-6",children:[s.jsx("span",{className:"grid h-14 w-14 place-items-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur transition group-hover:scale-110 group-hover:bg-white/30",children:s.jsx(is,{size:24})}),s.jsx("span",{className:"text-center text-sm font-semibold leading-snug",children:r.title})]})]}),!u&&s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 px-4 py-3",children:[s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"truncate text-sm font-semibold text-[var(--ink)]",children:r.title}),s.jsxs("p",{className:"text-xs text-[var(--ink-faint)]",children:[mg[r.kind]," · Unit ",l]})]}),s.jsx("span",{className:"rounded-full bg-[var(--bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]",children:h?"Video":"Click to play"})]}),r.transcript&&s.jsxs("div",{className:"border-t border-[var(--line)] px-4 py-3",children:[s.jsx("button",{type:"button",onClick:()=>w(k=>!k),className:"rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] font-semibold text-[var(--ink-soft)] transition hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-300","aria-expanded":b,children:b?"Hide script":"Show script"}),b&&s.jsx("div",{className:"mt-2 max-h-72 overflow-auto whitespace-pre-line rounded-lg bg-[var(--bg)] p-3 text-[13px] leading-relaxed text-[var(--ink-soft)]",children:r.transcript})]})]})}function wd({videos:r,unitNumber:l}){return r.length?s.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:r.map(u=>s.jsx(ly,{video:u,unitNumber:l},u.file))}):null}function B0(){const{unitId:r=""}=ad(),l=gd(r),{isComplete:u}=to();if(!l)return s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6",children:[s.jsx("h1",{className:"font-display text-2xl",children:"Unit not found"}),s.jsx(G,{to:"/book",className:"mt-3 inline-block text-sm font-semibold text-brand-600",children:"Back to contents"})]});const h=l.lessons.filter(k=>u(l.number,k.id)).length,c=Math.round(h/l.lessons.length*100),m=l.lessons.reduce((k,y)=>k+y.audio.length,0),p=l.lessons.find(k=>k.quiz),b=l.lessons[0],w=l.pdfPages.map(k=>k+1),v=b.pages[0]-l.pages[0];return s.jsxs("div",{children:[s.jsx(En,{eyebrow:`Unit ${l.number} · ${l.phrase}`,title:s.jsxs("span",{children:[s.jsxs("span",{className:"text-brand-600 dark:text-brand-300",children:["Unit ",l.number]})," · ",l.title]}),description:l.intro,backTo:"/book",backLabel:"Contents",children:s.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[s.jsxs("span",{className:"rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800 dark:bg-brand-950 dark:text-brand-200",children:["pp. ",l.pages[0],"–",l.pages[1]]}),s.jsxs("span",{className:"rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]",children:[l.lessons.length," lessons"]}),s.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]",children:[s.jsx(Kn,{size:12})," ",m," tracks"]}),l.videos.length>0&&s.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-[var(--surface)] px-3 py-1 font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]",children:[s.jsx(hn,{size:12})," ",l.videos.length," videos"]})]})}),s.jsxs("section",{className:"grid gap-5 md:grid-cols-[0.8fr_1.2fr]",children:[s.jsxs("div",{children:[s.jsx(as,{pages:[l.overviewPdf],printedPages:[l.pages[0]],title:`Unit ${l.number} opener`,compact:!0}),s.jsxs("p",{className:"mt-2 text-center text-[10px] text-[var(--ink-faint)]",children:["Unit opener · printed page ",l.pages[0]]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300",children:"Lead-in question"}),s.jsxs("p",{className:"mt-1.5 font-serif text-xl italic leading-snug text-[var(--ink)]",children:["“",l.question,"”"]}),s.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[s.jsxs(G,{to:`/unit/${l.number}/lesson/${b.id}`,className:"inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700",children:[s.jsx(is,{size:13}),"Start ",b.code]}),s.jsxs(G,{to:"/media",className:"inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700",children:[s.jsx(Kn,{size:13}),"Unit audio"]})]})]}),s.jsxs("div",{className:"mt-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:[s.jsxs("div",{className:"flex items-center justify-between gap-2",children:[s.jsxs("h2",{className:"flex items-center gap-2 text-sm font-bold",children:[s.jsx(ln,{size:16,className:"text-brand-600"}),"Learning objectives"]}),s.jsxs("span",{className:"text-[10px] font-semibold text-[var(--ink-faint)]",children:[h,"/",l.lessons.length," lessons"]})]}),s.jsx(Ko,{value:c,className:"mt-2.5",label:`Unit ${l.number} progress`}),s.jsx("ul",{className:"mt-3 space-y-2",children:l.objectives.map((k,y)=>s.jsxs("li",{className:"flex gap-2 text-xs leading-relaxed text-[var(--ink-soft)]",children:[s.jsx("span",{className:"mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-100 text-[9px] font-bold text-brand-800 dark:bg-brand-950 dark:text-brand-300",children:y+1}),k]},k))})]})]})]}),s.jsxs("section",{className:"mt-8",children:[s.jsx("div",{className:"mb-3 flex items-end justify-between gap-2",children:s.jsxs("div",{children:[s.jsxs("h2",{className:"flex items-center gap-2 text-base font-bold",children:[s.jsx(lg,{size:18,className:"text-brand-600"}),"Lessons in this unit"]}),s.jsx("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:"Tap a lesson to read the pages, listen and practise."})]})}),s.jsx("div",{className:"grid gap-2.5 sm:grid-cols-2",children:l.lessons.map(k=>s.jsx(N0,{unit:l,lesson:k},k.id))})]}),s.jsxs("section",{className:"mt-8",children:[s.jsxs("div",{className:"mb-3",children:[s.jsxs("h2",{className:"flex items-center gap-2 text-base font-bold",children:[s.jsx(lg,{size:18,className:"text-brand-600"}),"All pages in Unit ",l.number]}),s.jsxs("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:["The complete unit, including the ",v===1?"opener page":`${v} opener pages`," and every lesson page — pp. ",l.pages[0],"–",l.pages[1],"."]})]}),s.jsx(as,{pages:l.pdfPages,printedPages:w,title:`Unit ${l.number} — ${l.title}`}),s.jsx(ry,{pages:l.pdfPages,printedPages:w})]}),l.videos.length>0&&s.jsxs("section",{className:"mt-8",children:[s.jsxs("div",{className:"mb-3",children:[s.jsxs("h2",{className:"flex items-center gap-2 text-base font-bold",children:[s.jsx(hn,{size:18,className:"text-warm-600"}),"Watch"]}),s.jsx("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:"The unit vlog and the BBC video for this unit."})]}),s.jsx(wd,{videos:l.videos,unitNumber:l.number})]}),p?.quiz&&s.jsx("section",{className:"mt-8 overflow-hidden rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 to-[var(--surface)] p-5 dark:border-accent-900 dark:from-accent-950/40",children:s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-600 text-white",children:s.jsx(ft,{size:19})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-sm font-bold text-[var(--ink)]",children:"Ready to check your progress?"}),s.jsxs("p",{className:"mt-0.5 max-w-lg text-xs leading-relaxed text-[var(--ink-soft)]",children:["The Unit ",l.number," review has ",p.quiz.questions.length," questions on the grammar and vocabulary from this unit."]})]})]}),s.jsxs(G,{to:`/unit/${l.number}/lesson/${p.id}`,className:"inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent-700",children:["Open review ",s.jsx(Qa,{size:13})]})]})})]})}const fg=["#0ea5e9","#f59e0b","#10b981","#8b5cf6","#f43f5e","#14b8a6"],Zu=new Set;let Za=[],Ia=0,Vt=null,ts=1;function _0(){if(Ia)return;let r=performance.now();const l=u=>{const h=Math.min(.05,(u-r)/1e3);if(r=u,!Vt){Za=[],Ia=0;return}Vt.clearRect(0,0,window.innerWidth,window.innerHeight),Za=Za.filter(c=>u-c.born<c.ttl);for(const c of Za)c.vy+=900*h,c.x+=c.vx*h,c.y+=c.vy*h,c.rot+=c.vr*h,Vt.save(),Vt.translate(c.x,c.y),Vt.rotate(c.rot),Vt.fillStyle=c.color,Vt.globalAlpha=1-Math.max(0,(u-c.born)/c.ttl)*.6,Vt.fillRect(-c.w/2,-c.h/2,c.w,c.h),Vt.restore();Za.length>0?Ia=requestAnimationFrame(l):(Vt.clearRect(0,0,window.innerWidth,window.innerHeight),Ia=0)};Ia=requestAnimationFrame(l)}function hy(){for(const r of Zu)r()}function j0(){const r=T.useRef(null);return T.useEffect(()=>{const l=r.current;if(!l)return;ts=Math.min(2,window.devicePixelRatio||1);const u=()=>{l.width=Math.floor(window.innerWidth*ts),l.height=Math.floor(window.innerHeight*ts),Vt=l.getContext("2d"),Vt?.setTransform(ts,0,0,ts,0,0)};u(),window.addEventListener("resize",u);const h=()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const c=window.innerWidth/2,m=window.innerHeight*.28;for(let p=0;p<150;p++){const b=Math.random()*Math.PI*2,w=280+Math.random()*380;Za.push({x:c,y:m,vx:Math.cos(b)*w,vy:Math.sin(b)*w-220,w:6+Math.random()*6,h:4+Math.random()*5,rot:Math.random()*Math.PI,vr:(Math.random()-.5)*14,color:fg[Math.random()*fg.length|0],born:performance.now(),ttl:1e3+Math.random()*700})}_0()};return Zu.add(h),()=>{Zu.delete(h),window.removeEventListener("resize",u),Ia&&(cancelAnimationFrame(Ia),Ia=0),Za=[],l.width=0}},[]),s.jsx("canvas",{ref:r,className:"pointer-events-none fixed inset-0 z-[70]"})}function C0({blocks:r,unitNumber:l}){return s.jsx("div",{className:"space-y-6",children:r.map((u,h)=>{switch(u.type){case"callout":return s.jsxs("section",{className:"rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-800 dark:bg-brand-950/30",children:[u.title&&s.jsx("h3",{className:"font-display text-lg text-brand-700 dark:text-brand-300",children:u.title}),u.titleAr&&s.jsx("p",{className:"mt-0.5 text-xs italic text-[var(--ink-faint)]",dir:"rtl",children:u.titleAr}),s.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[var(--ink)]",children:u.text}),u.textAr&&s.jsx("p",{className:"mt-1 text-xs leading-relaxed text-[var(--ink-soft)]",dir:"rtl",children:u.textAr})]},h);case"text":return s.jsxs("section",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[u.title&&s.jsx("h3",{className:"font-display text-lg text-[var(--ink)]",children:u.title}),u.titleAr&&s.jsx("p",{className:"mt-0.5 text-xs italic text-[var(--ink-faint)]",dir:"rtl",children:u.titleAr}),s.jsx("div",{className:"mt-2 space-y-2 text-sm leading-relaxed text-[var(--ink-soft)]",children:u.paragraphs?.map((c,m)=>s.jsx("p",{children:c},m))})]},h);case"vocab":return s.jsxs("section",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[u.title&&s.jsx("h3",{className:"font-display text-lg text-[var(--ink)]",children:u.title}),u.titleAr&&s.jsx("p",{className:"mt-0.5 text-xs italic text-[var(--ink-faint)]",dir:"rtl",children:u.titleAr}),s.jsx("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:u.items?.map((c,m)=>s.jsxs("div",{className:"rounded-lg border border-[var(--line)] bg-[var(--bg)]/40 px-3 py-2",children:[s.jsx("p",{className:"text-xs font-bold text-[var(--ink)]",children:c.word}),c.meaning&&s.jsx("p",{className:"mt-0.5 text-[11px] leading-relaxed text-[var(--ink-faint)]",children:c.meaning}),c.example&&s.jsx("p",{className:"mt-0.5 text-[11px] italic text-[var(--ink-soft)]",children:c.example})]},m))})]},h);case"grammar":return s.jsxs("section",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[u.title&&s.jsx("h3",{className:"font-display text-lg text-[var(--ink)]",children:u.title}),u.titleAr&&s.jsx("p",{className:"mt-0.5 text-xs italic text-[var(--ink-faint)]",dir:"rtl",children:u.titleAr}),u.explanation&&s.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[var(--ink-soft)]",children:u.explanation}),u.rule&&s.jsx("p",{className:"mt-2 rounded-lg bg-[var(--bg)] px-3 py-2 text-xs font-semibold text-[var(--ink)]",children:u.rule}),u.table&&s.jsx("div",{className:"mt-3 overflow-x-auto",children:s.jsx("table",{className:"w-full text-xs",children:s.jsx("tbody",{children:u.table.map((c,m)=>s.jsx("tr",{className:"border-b border-[var(--line)]",children:Object.values(c).map((p,b)=>s.jsx("td",{className:"px-2 py-1.5 text-[var(--ink-soft)]",children:String(p)},b))},m))})})}),u.examples&&s.jsx("ul",{className:"mt-3 space-y-1 text-xs text-[var(--ink-soft)]",children:u.examples.map((c,m)=>s.jsxs("li",{children:["• ",c]},m))}),u.bankPage&&s.jsxs("p",{className:"mt-2 text-[10px] text-[var(--ink-faint)]",children:["Grammar Bank page ",u.bankPage]})]},h);case"examples":return s.jsxs("section",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[u.title&&s.jsx("h3",{className:"font-display text-lg text-[var(--ink)]",children:u.title}),s.jsx("ul",{className:"mt-2 space-y-1 text-sm text-[var(--ink-soft)]",children:u.items?.map((c,m)=>s.jsxs("li",{children:["• ",c]},m))})]},h);case"audio":return u.tracks?.length?s.jsx(yd,{tracks:u.tracks},h):null;case"video":return u.videos?.length?s.jsx(wd,{videos:u.videos,unitNumber:l??1},h):null;case"pages":return u.images?.length?s.jsx(as,{pages:u.images,printedPages:u.images.map((c,m)=>m+1),title:""},h):null;default:return null}})})}function Qu({id:r,title:l,questions:u,onPass:h}){const[c,m]=T.useState(()=>u.map(()=>null)),[p,b]=T.useState(!1),[w,v]=T.useState(1),k=T.useMemo(()=>c.reduce((M,W,K)=>M+(W===u[K].answer?1:0),0),[c,u]),y=c.every(M=>M!==null),N=k>=Math.ceil(u.length*.6);function L(){y&&(b(!0),ey(r,k,u.length),k===u.length?(Kt("levelup"),hy()):Kt(N?"correct":"wrong"),N&&h?.())}function q(){m(u.map(()=>null)),b(!1),v(M=>M+1),Kt("tap")}return s.jsxs("div",{className:"overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-sm",children:[s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] bg-gradient-to-r from-brand-50 to-transparent px-4 py-3 dark:from-brand-950/40 sm:px-5",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white",children:s.jsx(ft,{size:17})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-sm font-bold text-[var(--ink)]",children:l}),s.jsxs("p",{className:"text-[11px] text-[var(--ink-faint)]",children:[u.length," questions · attempt ",w]})]})]}),p&&s.jsxs("span",{className:`rounded-full px-3 py-1 text-xs font-bold ${N?"bg-brand-600 text-white":"bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"}`,children:[k,"/",u.length," ",k===u.length?"· perfect!":N?"· passed":"· try again"]})]}),s.jsx("div",{className:"divide-y divide-[var(--line)]",children:u.map((M,W)=>{const K=c[W];return s.jsxs("fieldset",{className:"px-4 py-4 sm:px-5",children:[s.jsxs("legend",{className:"mb-3 flex gap-2 text-sm font-semibold text-[var(--ink)]",children:[s.jsx("span",{className:"mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--bg)] text-[10px] font-bold text-brand-700 ring-1 ring-[var(--line)] dark:text-brand-300",children:W+1}),M.question]}),s.jsx("div",{className:"grid gap-2 sm:grid-cols-3",children:M.options.map((F,ne)=>{const Se=K===ne,be=p&&ne===M.answer,We=p&&Se&&ne!==M.answer;return s.jsxs("button",{type:"button",disabled:p,onClick:()=>{m(Z=>Z.map((ie,Ve)=>Ve===W?ne:ie)),Kt("tap")},className:`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition ${be?"border-brand-500 bg-brand-50 text-brand-900 dark:bg-brand-950/50 dark:text-brand-200":We?"border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200":Se?"border-accent-500 bg-accent-50 text-accent-900 dark:bg-accent-950/40 dark:text-accent-200":"border-[var(--line)] bg-[var(--bg)]/40 text-[var(--ink-soft)] hover:border-brand-300 hover:bg-brand-50/50 dark:hover:bg-brand-950/20"} ${p?"cursor-default":"cursor-pointer"}`,children:[s.jsx("span",{children:F}),be&&s.jsx(ln,{size:15,className:"shrink-0"}),We&&s.jsx(ux,{size:15,className:"shrink-0"})]},F)})}),p&&s.jsxs("p",{className:`mt-2.5 flex gap-2 rounded-lg px-3 py-2 text-xs leading-relaxed ${K===M.answer?"bg-brand-50 text-brand-800 dark:bg-brand-950/40 dark:text-brand-200":"bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"}`,children:[s.jsx(md,{size:14,className:"mt-0.5 shrink-0"}),s.jsx("span",{children:M.explanation})]})]},M.question)})}),s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] px-4 py-3.5 sm:px-5",children:[s.jsx("p",{className:"text-xs text-[var(--ink-faint)]",children:p?N?"Well done — review marked as complete.":"Read the explanations, then try again.":"Choose one answer for each question."}),p?s.jsxs("button",{type:"button",onClick:q,className:"inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-500 hover:text-brand-700",children:[s.jsx(px,{size:14}),"Try again"]}):s.jsxs("button",{type:"button",onClick:L,disabled:!y,className:"inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40",children:[s.jsx(ln,{size:14}),"Check answers"]})]})]})}function pg([r,l]){return Array.from({length:l-r+1},(u,h)=>r+h)}function W0({paragraphs:r}){return s.jsx("div",{className:"prose-book max-w-none text-sm leading-relaxed text-[var(--ink-soft)]",children:r.map((l,u)=>l.startsWith("## ")?s.jsxs("h3",{className:"mb-1.5 mt-4 flex items-center gap-2 text-sm font-bold text-brand-700 dark:text-brand-300",children:[s.jsx("span",{className:"h-3 w-0.5 rounded-full bg-brand-500"}),l.slice(3)]},u):l.startsWith("• ")?s.jsxs("p",{className:"my-1 flex gap-2 pl-1",children:[s.jsx("span",{className:"text-brand-500",children:"•"}),s.jsx("span",{children:l.slice(2)})]},u):s.jsx("p",{className:"my-2",children:l},u))})}function O0(){const{unitId:r="",lessonId:l=""}=ad(),u=gd(r),h=Zx(r,l),{isComplete:c,toggle:m,visit:p,completedCount:b}=to();if(T.useEffect(()=>(u&&h&&(p(u.number,h.id),document.title=`${h.code} ${h.title} · Speakout B1+`),()=>{document.title="Speakout B1+ · The Book"}),[u,h,p]),!u||!h)return s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6",children:[s.jsx("h1",{className:"font-display text-2xl",children:"Lesson not found"}),s.jsx(G,{to:"/book",className:"mt-3 inline-block text-sm font-semibold text-brand-600",children:"Back to contents"})]});const w=c(u.number,h.id),v=$x(String(u.number),h.id),k=Qx(String(u.number),h.id),y=[h.labels.skills&&{label:h.labels.skills,tone:"warm"},h.labels.grammar&&{label:h.labels.grammar,tone:"brand"},h.labels.vocabulary&&{label:h.labels.vocabulary,tone:"accent"},h.labels.pronunciation&&{label:h.labels.pronunciation,tone:"neutral"}].filter(Boolean);return s.jsxs("div",{children:[s.jsx(En,{eyebrow:s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsxs(G,{to:`/unit/${u.number}`,className:"hover:underline",children:["Unit ",u.number," · ",u.title]}),s.jsx("span",{className:"text-[var(--ink-faint)]",children:"/"}),s.jsx("span",{children:h.code})]}),title:h.title,description:`Student’s Book pages ${h.pages[0]}${h.pages[1]!==h.pages[0]?`–${h.pages[1]}`:""} · ${h.code}`,backTo:`/unit/${u.number}`,backLabel:`Unit ${u.number}`,children:s.jsx("div",{className:"flex flex-wrap items-center gap-1.5",children:y.map(N=>s.jsx(gt,{tone:N.tone,children:N.label},N.label))})}),s.jsxs("div",{className:"space-y-7",children:[s.jsxs("section",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[s.jsx(Jt,{icon:s.jsx(ft,{size:17,className:"text-brand-600"}),title:"In this lesson"}),s.jsx("ul",{className:"grid gap-2 sm:grid-cols-2",children:h.objectives.map(N=>s.jsxs("li",{className:"flex gap-2 text-xs leading-relaxed text-[var(--ink-soft)]",children:[s.jsx("span",{className:"mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300",children:s.jsx(ln,{size:10})}),N]},N))})]}),h.blocks&&h.blocks.length>0&&s.jsx(C0,{blocks:h.blocks,unitNumber:u.number}),s.jsxs("section",{children:[s.jsx(Jt,{icon:s.jsx(pt,{size:17,className:"text-brand-600"}),title:"The book pages",hint:"Click any page to open the full-size image.",action:s.jsxs("span",{className:"rounded-full bg-[var(--bg)] px-2 py-0.5 text-[10px] text-[var(--ink-faint)]",children:["pp. ",h.pages[0],"–",h.pages[1]]})}),s.jsx(as,{pages:h.pdfPages,printedPages:pg(h.pages),title:`${h.code} ${h.title}`}),s.jsx(ry,{pages:h.pdfPages,printedPages:pg(h.pages)})]}),h.audio.length>0&&s.jsxs("section",{children:[s.jsx(Jt,{icon:s.jsx(Kn,{size:17,className:"text-accent-600"}),title:"Listen",hint:`${h.audio.length} audio track${h.audio.length===1?"":"s"} for ${h.code}.`}),s.jsx(yd,{tracks:h.audio})]}),h.videos.length>0&&s.jsxs("section",{children:[s.jsx(Jt,{icon:s.jsx(hn,{size:17,className:"text-warm-600"}),title:"Watch",hint:"The BBC video for this lesson."}),s.jsx(wd,{videos:h.videos,unitNumber:u.number})]}),h.grammar&&s.jsxs("section",{className:"rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:[s.jsx(Jt,{icon:s.jsx(ft,{size:17,className:"text-brand-600"}),title:"Grammar reference",hint:`${h.labels.grammar} · Grammar Bank page ${h.grammar.refPage}`,action:s.jsxs(G,{to:`/bank/grammar/${h.code}`,className:"inline-flex items-center gap-1 rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700",children:["Open bank ",s.jsx(Qa,{size:11})]})}),s.jsx(W0,{paragraphs:h.grammar.paragraphs}),s.jsx("p",{className:"mt-4 rounded-lg bg-[var(--bg)] px-3 py-2 text-[10px] leading-relaxed text-[var(--ink-faint)]",children:"Transcribed from the Grammar Bank. The original page image is authoritative — open the bank to see the reference and practice together."})]}),h.vocab&&s.jsxs("section",{className:"rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:[s.jsx(Jt,{icon:s.jsx(pt,{size:17,className:"text-accent-600"}),title:"Vocabulary",hint:`${h.vocab.title} · Vocabulary Bank page ${h.vocab.page}`,action:s.jsxs(G,{to:"/bank/vocabulary",className:"inline-flex items-center gap-1 rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] transition hover:border-accent-400 hover:text-accent-700",children:["Full bank ",s.jsx(Qa,{size:11})]})}),h.vocab.intro&&s.jsx("p",{className:"mb-2 text-xs italic text-[var(--ink-faint)]",children:h.vocab.intro}),s.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:h.vocab.items.slice(0,6).map(N=>s.jsxs("div",{className:"rounded-lg border border-[var(--line)] bg-[var(--bg)]/40 px-3 py-2",children:[s.jsx("p",{className:"text-xs font-bold text-[var(--ink)]",children:N.word}),N.meaning&&s.jsx("p",{className:"mt-0.5 text-[11px] leading-relaxed text-[var(--ink-faint)]",children:N.meaning})]},N.word))}),h.vocab.items.length>6&&s.jsxs("p",{className:"mt-2 text-[10px] text-[var(--ink-faint)]",children:["+ ",h.vocab.items.length-6," more in the Vocabulary Bank"]})]}),h.practice&&h.practice.length>0&&s.jsxs("section",{children:[s.jsx(Jt,{icon:s.jsx(ft,{size:17,className:"text-brand-600"}),title:"Lesson test",hint:`${h.practice.length} questions on ${h.code} — choose an answer and check it.`}),s.jsx(Qu,{id:`practice-${h.code}`,title:`${h.code} test`,questions:h.practice,onPass:()=>{w||(m(u.number,h.id),Kt("correct"))}})]}),h.quiz&&s.jsxs("section",{children:[s.jsx(Jt,{icon:s.jsx(ft,{size:17,className:"text-accent-600"}),title:"Lesson test",hint:"Check your grammar and vocabulary from this unit."}),s.jsx(Qu,{id:h.quiz.id,title:h.quiz.title,questions:h.quiz.questions,onPass:()=>{w||(m(u.number,h.id),Kt("correct"))}})]}),!h.quiz&&!h.practice&&s.jsxs("section",{className:"rounded-xl border border-dashed border-[var(--line-strong)] bg-[var(--bg)]/35 p-4 text-center",children:[s.jsx("p",{className:"text-sm font-semibold text-[var(--ink)]",children:"Finished this lesson?"}),s.jsxs("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:["Mark it complete, then try the Unit ",u.number," review when you are ready."]}),s.jsxs(G,{to:`/unit/${u.number}/lesson/${u.lessons[u.lessons.length-1].id}`,className:"mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300",children:["Go to Unit ",u.number," review ",s.jsx(Qa,{size:12})]})]})]}),s.jsxs("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[s.jsxs("div",{className:"flex items-center justify-between gap-2",children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]",children:"Your progress"}),s.jsxs("span",{className:"text-[10px] font-semibold text-brand-600 dark:text-brand-300",children:[b,"/40"]})]}),s.jsx("p",{className:"mt-1.5 text-sm font-bold text-[var(--ink)]",children:w?"Lesson complete":"Not marked yet"}),s.jsxs("button",{type:"button",onClick:()=>{m(u.number,h.id),Kt(w?"tap":"correct"),w||hy()},className:`mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${w?"border border-brand-300 bg-brand-50 text-brand-800 hover:bg-brand-100 dark:border-brand-800 dark:bg-brand-950/40 dark:text-brand-200":"bg-brand-600 text-white hover:bg-brand-700"}`,children:[s.jsx(ln,{size:14}),w?"Completed — undo":"Mark as complete"]})]}),s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]",children:"Lesson facts"}),s.jsxs("dl",{className:"mt-2 space-y-1.5 text-xs",children:[s.jsxs("div",{className:"flex justify-between gap-2",children:[s.jsx("dt",{className:"text-[var(--ink-faint)]",children:"Code"}),s.jsx("dd",{className:"font-semibold text-[var(--ink)]",children:h.code})]}),s.jsxs("div",{className:"flex justify-between gap-2",children:[s.jsx("dt",{className:"text-[var(--ink-faint)]",children:"Book pages"}),s.jsxs("dd",{className:"font-semibold text-[var(--ink)]",children:[h.pages[0],h.pages[1]!==h.pages[0]?`–${h.pages[1]}`:""]})]}),s.jsxs("div",{className:"flex justify-between gap-2",children:[s.jsx("dt",{className:"text-[var(--ink-faint)]",children:"Audio"}),s.jsx("dd",{className:"font-semibold text-[var(--ink)]",children:h.audio.length})]}),s.jsxs("div",{className:"flex justify-between gap-2",children:[s.jsx("dt",{className:"text-[var(--ink-faint)]",children:"Videos"}),s.jsx("dd",{className:"font-semibold text-[var(--ink)]",children:h.videos.length})]})]})]}),(v||k)&&s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3",children:[s.jsxs("p",{className:"mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]",children:[s.jsx(Gg,{size:11})," Move on"]}),s.jsxs("div",{className:"space-y-1",children:[v&&s.jsxs(G,{to:`/unit/${v.unit.number}/lesson/${v.lesson.id}`,className:"flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[var(--ink-soft)] transition hover:bg-[var(--bg)] hover:text-brand-700",children:[s.jsx(zr,{size:13}),s.jsx("span",{className:"font-bold text-brand-600",children:v.lesson.code}),s.jsx("span",{className:"truncate",children:v.lesson.title})]}),k&&s.jsxs(G,{to:`/unit/${k.unit.number}/lesson/${k.lesson.id}`,className:"flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[var(--ink-soft)] transition hover:bg-[var(--bg)] hover:text-brand-700",children:[s.jsx("span",{className:"ml-auto truncate",children:k.lesson.title}),s.jsx("span",{className:"font-bold text-brand-600",children:k.lesson.code}),s.jsx(Jn,{size:13})]})]})]}),s.jsxs("div",{className:"rounded-xl border border-accent-200 bg-accent-50/60 p-4 dark:border-accent-900 dark:bg-accent-950/30",children:[s.jsxs("p",{className:"flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-700 dark:text-accent-300",children:[s.jsx(md,{size:12})," Study tip"]}),s.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-[var(--ink-soft)]",children:"Open the page image in full screen, then play the audio. Follow the exercise numbers in the book as you listen."})]})]}),s.jsxs("div",{className:"mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4",children:[s.jsxs("div",{className:"flex gap-2",children:[v&&s.jsxs(G,{to:`/unit/${v.unit.number}/lesson/${v.lesson.id}`,className:"inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3.5 py-2 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700",children:[s.jsx(zr,{size:14})," ",v.lesson.code]}),k&&s.jsxs(G,{to:`/unit/${k.unit.number}/lesson/${k.lesson.id}`,className:"inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-brand-700",children:[k.lesson.code," ",s.jsx(Jn,{size:14})]})]}),s.jsxs(G,{to:`/unit/${u.number}`,className:"text-xs font-semibold text-[var(--ink-faint)] hover:text-brand-600",children:["All Unit ",u.number," lessons"]})]})]})}function L0({refData:r}){return s.jsx("div",{className:"prose-book max-w-none text-sm leading-relaxed text-[var(--ink-soft)]",children:r.paragraphs.map((l,u)=>l.startsWith("## ")?s.jsxs("h3",{className:"mb-1.5 mt-4 flex items-center gap-2 text-sm font-bold text-brand-700 dark:text-brand-300",children:[s.jsx("span",{className:"h-3 w-0.5 rounded-full bg-brand-500"}),l.slice(3)]},u):l.startsWith("• ")?s.jsxs("p",{className:"my-1 flex gap-2 pl-1",children:[s.jsx("span",{className:"text-brand-500",children:"•"}),s.jsx("span",{children:l.slice(2)})]},u):s.jsx("p",{className:"my-2",children:l},u))})}function D0(){const[r,l]=T.useState(""),[u,h]=T.useState("all"),c=T.useMemo(()=>{const m=r.trim().toLowerCase();return Ea.filter(p=>u!=="all"&&!p.code.startsWith(u)?!1:m?p.code.toLowerCase().includes(m)||p.title.toLowerCase().includes(m)||p.paragraphs.some(b=>b.toLowerCase().includes(m)):!0)},[r,u]);return s.jsxs("div",{children:[s.jsx(En,{eyebrow:"Reference · Grammar Bank",title:"Grammar Bank",description:"Every grammar reference in the B1+ Student’s Book, with the book’s explanations and examples. Open a reference to see the original page and the practice exercises beside it.",backTo:"/book",backLabel:"Contents",children:s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs(gt,{tone:"brand",children:[Ea.length," references"]}),s.jsx(gt,{children:"pp. 104–131"}),s.jsx(gt,{tone:"warm",children:"28 lessons + 4 review pages"})]})}),s.jsxs("div",{className:"mb-5 flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:flex-row sm:items-center",children:[s.jsxs("label",{className:"relative flex-1",children:[s.jsx("span",{className:"sr-only",children:"Search grammar"}),s.jsx(Sa,{size:16,className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-faint)]"}),s.jsx("input",{value:r,onChange:m=>l(m.target.value),placeholder:"Search a grammar point, e.g. narrative tenses…",className:"h-10 w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"})]}),s.jsx("div",{className:"flex flex-wrap gap-1",children:["all","1","2","3","4","5","6","7","8"].map(m=>s.jsx("button",{type:"button",onClick:()=>h(m),className:`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${u===m?"bg-brand-600 text-white":"bg-[var(--bg)] text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700"}`,children:m==="all"?"All":`U${m}`},m))})]}),c.length===0?s.jsxs("div",{className:"rounded-xl border border-dashed border-[var(--line-strong)] p-8 text-center",children:[s.jsxs("p",{className:"text-sm font-semibold",children:["No grammar references match “",r,"”."]}),s.jsx("button",{type:"button",onClick:()=>{l(""),h("all")},className:"mt-2 text-xs font-semibold text-brand-600",children:"Clear filters"})]}):s.jsx("div",{className:"grid gap-2.5 sm:grid-cols-2",children:c.map(m=>s.jsxs(G,{to:`/bank/grammar/${m.code}`,className:"group flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:hover:border-brand-800",children:[s.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-100 text-xs font-black text-brand-800 dark:bg-brand-950 dark:text-brand-300",children:m.code}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("h2",{className:"line-clamp-2 text-sm font-bold leading-snug text-[var(--ink)] group-hover:text-brand-700 dark:group-hover:text-brand-300",children:m.title}),s.jsx("p",{className:"mt-1 line-clamp-2 text-[11px] leading-relaxed text-[var(--ink-faint)]",children:m.paragraphs.find(p=>!p.startsWith("## "))?.slice(0,130)}),s.jsxs("div",{className:"mt-2 flex items-center justify-between text-[10px] text-[var(--ink-faint)]",children:[s.jsxs("span",{children:["Reference page ",m.refPage]}),s.jsx(Jn,{size:13,className:"transition group-hover:translate-x-0.5"})]})]})]},m.code))})]})}function M0(){const{code:r=""}=ad(),l=Ea.find(c=>c.code.toLowerCase()===r.toLowerCase());if(!l)return s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6",children:[s.jsx("h1",{className:"font-display text-2xl",children:"Grammar reference not found"}),s.jsx(G,{to:"/bank/grammar",className:"mt-3 inline-block text-sm font-semibold text-brand-600",children:"Back to the Grammar Bank"})]});const u=l.code[0],h=Number(u);return s.jsxs("div",{children:[s.jsx(En,{eyebrow:`Grammar Bank · ${l.code} · Reference page ${l.refPage}`,title:l.title,description:`Unit ${h} grammar reference, read from the book. The page image below shows the reference and practice exactly as printed.`,backTo:"/bank/grammar",backLabel:"Grammar Bank",children:s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(gt,{tone:"brand",children:l.code}),s.jsxs(G,{to:`/unit/${h}`,className:"rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700",children:["Unit ",h," lessons"]}),s.jsx(G,{to:"/bank/grammar",className:"rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700",children:"All references"})]})}),s.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_0.85fr]",children:[s.jsxs("section",{className:"rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:[s.jsx(Jt,{icon:s.jsx(ft,{size:17,className:"text-brand-600"}),title:"Reference",hint:`${l.code} · ${l.title}`}),s.jsx(L0,{refData:l}),s.jsx("p",{className:"mt-4 rounded-lg bg-[var(--bg)] px-3 py-2 text-[10px] leading-relaxed text-[var(--ink-faint)]",children:"Transcribed from the Grammar Bank reference column. Small typographic artefacts may remain; the page image is the authoritative version."})]}),s.jsxs("section",{className:"lg:sticky lg:top-28 lg:self-start",children:[s.jsx(Jt,{icon:s.jsx(ft,{size:17,className:"text-accent-600"}),title:"The book page",hint:"Reference and practice are printed side by side."}),s.jsx(as,{pages:[l.pdf],title:`Grammar Bank ${l.code}`})]})]})]})}function H0(r){return`/unit/${Number(r[0])}/lesson/${r.toLowerCase()}`}function U0({item:r,hidden:l}){const[u,h]=T.useState(!l),c=l?u:!0;return s.jsxs("button",{type:"button",onClick:()=>l&&h(m=>!m),className:`flex min-h-[84px] flex-col rounded-lg border p-3 text-left transition ${l&&!u?"border-dashed border-[var(--line-strong)] bg-[var(--bg)]/50 hover:border-accent-400":"border-[var(--line)] bg-[var(--bg)]/35"}`,children:[s.jsx("span",{className:"text-xs font-bold text-[var(--ink)]",children:r.word}),c?s.jsx("span",{className:"mt-1 text-[11px] leading-relaxed text-[var(--ink-faint)]",children:r.meaning}):s.jsx("span",{className:"mt-1 text-[10px] italic text-accent-600 dark:text-accent-300",children:"Tap to reveal meaning"})]})}function q0(){const[r,l]=T.useState(""),[u,h]=T.useState(!1),c=T.useMemo(()=>{const p=r.trim().toLowerCase();return p?Sn.map(b=>({...b,items:b.items.filter(w=>w.word.toLowerCase().includes(p)||(w.meaning??"").toLowerCase().includes(p))})).filter(b=>b.items.length>0||b.title.toLowerCase().includes(p)):Sn},[r]),m=Sn.reduce((p,b)=>p+b.items.length,0);return s.jsxs("div",{children:[s.jsx(En,{eyebrow:"Reference · Vocabulary Bank",title:"Vocabulary Bank",description:"The book’s vocabulary groups, collected from the Vocabulary Bank pages. Use the search to find a word, or open a group for the full list.",backTo:"/book",backLabel:"Contents",children:s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs(gt,{tone:"accent",children:[Sn.length," groups"]}),s.jsxs(gt,{children:[m," entries"]}),s.jsx(gt,{children:"pp. 132–137"})]})}),s.jsxs("div",{className:"mb-5 flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:flex-row sm:items-center",children:[s.jsxs("label",{className:"relative flex-1",children:[s.jsx("span",{className:"sr-only",children:"Search vocabulary"}),s.jsx(Sa,{size:16,className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-faint)]"}),s.jsx("input",{value:r,onChange:p=>l(p.target.value),placeholder:"Search a word or meaning…",className:"h-10 w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] pl-9 pr-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"})]}),s.jsxs("button",{type:"button",onClick:()=>h(p=>!p),className:`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${u?"bg-accent-600 text-white hover:bg-accent-700":"bg-[var(--bg)] text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-accent-700"}`,children:[u?s.jsx(yx,{size:14}):s.jsx(gx,{size:14}),u?"Study mode on":"Hide meanings"]})]}),u&&s.jsx("p",{className:"mb-4 rounded-lg border border-accent-200 bg-accent-50 px-3 py-2 text-xs text-accent-900 dark:border-accent-900 dark:bg-accent-950/40 dark:text-accent-200",children:"Study mode: cover the meanings, try to recall each word, then tap a card to check."}),c.length===0?s.jsxs("div",{className:"rounded-xl border border-dashed border-[var(--line-strong)] p-8 text-center",children:[s.jsxs("p",{className:"text-sm font-semibold",children:["No vocabulary matches “",r,"”."]}),s.jsx("button",{type:"button",onClick:()=>l(""),className:"mt-2 text-xs font-semibold text-accent-600",children:"Clear search"})]}):s.jsx("div",{className:"space-y-4",children:c.map(p=>s.jsxs("section",{className:"rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:[s.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[s.jsxs("div",{children:[s.jsxs("h2",{className:"flex items-center gap-2 font-display text-xl text-[var(--ink)]",children:[s.jsx("span",{className:"rounded-md bg-accent-100 px-1.5 py-0.5 text-[11px] font-sans font-black text-accent-700 dark:bg-accent-950 dark:text-accent-300",children:p.lessonCode}),p.title]}),s.jsxs("p",{className:"mt-0.5 text-xs text-[var(--ink-faint)]",children:["Vocabulary Bank page ",p.page," · ",p.items.length," entries"]})]}),s.jsxs(G,{to:H0(p.lessonCode),className:"inline-flex items-center gap-1 rounded-full bg-[var(--bg)] px-2.5 py-1 text-[10px] font-semibold text-accent-700 ring-1 ring-[var(--line)] transition hover:bg-accent-50 dark:text-accent-300",children:["Open lesson ",s.jsx(cd,{size:11,className:"-rotate-90"})]})]}),p.intro&&s.jsx("p",{className:"mt-2 text-xs italic text-[var(--ink-soft)]",children:p.intro}),s.jsx("div",{className:"mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",children:p.items.map(b=>s.jsx(U0,{item:b,hidden:u},`${p.id}-${b.word}-${u}`))})]},p.id))}),s.jsxs("div",{className:"mt-6 rounded-xl border border-[var(--line)] bg-[var(--bg)]/40 p-4",children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]",children:"About these definitions"}),s.jsx("p",{className:"mt-1 text-xs leading-relaxed text-[var(--ink-soft)]",children:"Entries follow the book’s vocabulary groups and lesson order. Definitions reproduce the book’s glosses where the page provides them; where it only lists words, a plain English explanation is given. No translations have been added."}),s.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:lt.map(p=>{const b=Sn.filter(w=>Number(w.lessonCode[0])===p.number);return b.length?s.jsxs(G,{to:`/unit/${p.number}`,className:"rounded-full bg-[var(--surface)] px-2 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-accent-700",children:["Unit ",p.number," · ",b.length," group",b.length===1?"":"s"]},p.id):null})})]})]})}const z0=[{id:"audioscripts",title:"Audio scripts",file:"docs/audioscripts.pdf",size:"0.79 MB",pages:"Book reference",description:"The full scripts for the Student’s Book audio, printed at the back of the book.",icon:Kn},{id:"videoscripts",title:"Video scripts",file:"docs/videoscripts.pdf",size:"0.62 MB",pages:"Book reference",description:"The scripts for the BBC video material that accompanies the course.",icon:hn},{id:"student-book",title:"Student’s Book PDF",file:"docs/student-book-b1plus.pdf",size:"37.6 MB",pages:"136 pages",description:"The complete B1+ Student’s Book as a single PDF, including every printed page.",icon:pt}];function Y0(){const[r,l]=T.useState(null);return s.jsxs("div",{children:[s.jsx(En,{eyebrow:"Reference · Scripts & documents",title:"Audio & video scripts",description:"Read along with the recordings. The original scripts are provided as PDFs; every audio track is also available in the media library.",backTo:"/book",backLabel:"Contents",children:s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(gt,{tone:"brand",children:"3 documents"}),s.jsx(gt,{children:"PDF"}),s.jsx(G,{to:"/media",className:"rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-semibold text-white hover:bg-brand-700",children:"Open media library"})]})}),s.jsx("div",{className:"grid gap-3 sm:grid-cols-3",children:z0.map(u=>{const h=u.icon;return s.jsxs("article",{className:"flex flex-col rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-sm",children:[s.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300",children:s.jsx(h,{size:19})}),s.jsx("h2",{className:"mt-2.5 text-sm font-bold",children:u.title}),s.jsx("p",{className:"mt-1 flex-1 text-xs leading-relaxed text-[var(--ink-faint)]",children:u.description}),s.jsxs("p",{className:"mt-2 text-[10px] text-[var(--ink-faint)]",children:[u.pages," · ",u.size]}),s.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[s.jsxs("a",{href:Fo(u.file),target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-semibold text-white transition hover:bg-brand-700",children:["Open PDF ",s.jsx(Qa,{size:11})]}),s.jsx("button",{type:"button",onClick:()=>l(r===u.file?null:u.file),className:"rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700",children:r===u.file?"Close preview":"Preview"})]})]},u.id)})}),r&&s.jsxs("section",{className:"mt-5 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]",children:[s.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-[var(--line)] px-4 py-2.5",children:[s.jsx("p",{className:"text-xs font-semibold text-[var(--ink)]",children:"PDF preview"}),s.jsx("a",{href:Fo(r),target:"_blank",rel:"noreferrer",className:"text-[10px] font-semibold text-brand-600 hover:underline",children:"Open in a new tab"})]}),s.jsx("iframe",{src:`${Fo(r)}#view=FitH`,title:"PDF preview",className:"h-[70vh] w-full bg-white"})]}),s.jsxs("section",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:[s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4",children:[s.jsx("h2",{className:"text-sm font-bold",children:"How to use the scripts"}),s.jsxs("ol",{className:"mt-2 space-y-1.5 text-xs leading-relaxed text-[var(--ink-soft)]",children:[s.jsx("li",{children:"1. Open a lesson and play the audio track."}),s.jsx("li",{children:"2. Keep the script open in a second window or on another device."}),s.jsx("li",{children:"3. Read along once, then listen again without the script."}),s.jsx("li",{children:"4. Note new words in the Vocabulary Bank."})]})]}),s.jsxs("div",{className:"rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-900 dark:bg-brand-950/30",children:[s.jsx("h2",{className:"text-sm font-bold",children:"Looking for a track?"}),s.jsx("p",{className:"mt-1 text-xs leading-relaxed text-[var(--ink-soft)]",children:"Audio is grouped by lesson. Open the media library to browse all 81 tracks, or go straight to a lesson from the contents."}),s.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[s.jsx(G,{to:"/media",className:"rounded-full bg-brand-600 px-3 py-1 text-[10px] font-semibold text-white",children:"Browse audio"}),s.jsx(G,{to:"/book",className:"rounded-full border border-brand-300 px-3 py-1 text-[10px] font-semibold text-brand-800 dark:border-brand-700 dark:text-brand-200",children:"Open contents"})]})]})]})]})}function G0(){const r=[];for(const l of lt){r.push({key:`unit-${l.number}`,kind:"unit",title:`Unit ${l.number} · ${l.title}`,subtitle:l.question,body:[l.phrase,l.intro,...l.objectives].join(" "),to:`/unit/${l.number}`});for(const u of l.lessons){r.push({key:`lesson-${l.number}-${u.id}`,kind:"lesson",title:`${u.code} · ${u.title}`,subtitle:`Unit ${l.number} · pages ${u.pages[0]}–${u.pages[1]}`,body:[u.code,u.title,u.labels.grammar,u.labels.vocabulary,u.labels.pronunciation,u.labels.skills,...u.objectives].filter(Boolean).join(" "),to:`/unit/${l.number}/lesson/${u.id}`});for(const h of u.audio)r.push({key:`audio-${l.number}-${u.id}-${h.file}`,kind:"audio",title:`Audio ${h.label} · ${u.code} ${u.title}`,subtitle:`Unit ${l.number} · ${u.audio.length} track${u.audio.length===1?"":"s"} in this lesson`,body:`${h.label} ${h.note??""} ${u.code} ${u.title}`,to:`/media?tab=audio&unit=${l.number}`})}}for(const l of Ea)r.push({key:`grammar-${l.code}`,kind:"grammar",title:`${l.code} · ${l.title}`,subtitle:`Grammar Bank · page ${l.refPage}`,body:l.paragraphs.join(" "),to:`/bank/grammar/${l.code}`});for(const l of Sn)r.push({key:`vocab-${l.id}`,kind:"vocabulary",title:`Vocabulary · ${l.title}`,subtitle:`${l.lessonCode} · page ${l.page} · ${l.items.length} entries`,body:[l.intro,...l.items.map(u=>`${u.word} ${u.meaning??""}`)].join(" "),to:"/bank/vocabulary"});return r}const P0=G0(),gg={lesson:"Lesson",grammar:"Grammar",vocabulary:"Vocabulary",unit:"Unit",audio:"Audio"},V0={lesson:"bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200",grammar:"bg-accent-100 text-accent-800 dark:bg-accent-950 dark:text-accent-200",vocabulary:"bg-warm-100 text-warm-900 dark:bg-warm-950/60 dark:text-warm-200",unit:"bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200",audio:"bg-[var(--bg)] text-[var(--ink-soft)] ring-1 ring-[var(--line)]"},J0={lesson:pt,grammar:ft,vocabulary:pt,unit:pt,audio:Kn};function K0(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yu({text:r,terms:l}){if(!l.length)return s.jsx(s.Fragment,{children:r});const u=new RegExp(`(${l.map(K0).join("|")})`,"gi");return s.jsx(s.Fragment,{children:r.split(u).map((h,c)=>l.some(m=>m&&h.toLowerCase()===m.toLowerCase())?s.jsx("mark",{className:"rounded bg-warm-200/80 px-0.5 text-[var(--ink)] dark:bg-warm-700/60 dark:text-warm-100",children:h},c):s.jsx("span",{children:h},c))})}function F0(r,l,u=170){if(!r)return"";const h=r.toLowerCase(),c=l.map(p=>h.indexOf(p)).filter(p=>p>=0).sort((p,b)=>p-b)[0]??0,m=Math.max(0,c-45);return`${m>0?"…":""}${r.slice(m,m+u).trim()}${m+u<r.length?"…":""}`}const X0=["narrative tenses","relative clauses","passives","conditionals","money","hoax","Jungles","advice"];function Z0(){const[r]=zg(),l=(r.get("q")??"").trim(),u=T.useMemo(()=>l.toLowerCase().split(/\s+/).filter(Boolean),[l]),h=T.useMemo(()=>l?P0.map(m=>{const p=`${m.title} ${m.subtitle} ${m.body}`.toLowerCase();if(!u.every(w=>p.includes(w)))return null;let b=0;for(const w of u)m.title.toLowerCase().includes(w)&&(b+=5),m.subtitle.toLowerCase().includes(w)&&(b+=2),(m.kind==="grammar"||m.kind==="vocabulary")&&(b+=1);return{item:m,score:b}}).filter(m=>!!m).sort((m,p)=>p.score-m.score||m.item.title.localeCompare(p.item.title)).slice(0,50):[],[l,u]),c=T.useMemo(()=>{const m={};for(const{item:p}of h)(m[p.kind]??=[]).push(p);return m},[h]);return s.jsxs("div",{children:[s.jsx(En,{eyebrow:"Search",title:l?`Results for “${l}”`:"Search the book",description:l?`${h.length} result${h.length===1?"":"s"} across lessons, grammar, vocabulary, units and audio.`:"Find a lesson, a grammar point, a word or an audio track. The search covers the full contents, Grammar Bank and Vocabulary Bank.",backTo:"/book",backLabel:"Contents"}),s.jsx("div",{className:"mx-auto max-w-2xl",children:s.jsx(fd,{initial:l,autoFocus:!0,placeholder:"What do you want to find?"})}),!l&&s.jsxs("div",{className:"mx-auto mt-6 max-w-2xl",children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]",children:"Try searching for"}),s.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:X0.map(m=>s.jsxs(G,{to:`/search?q=${encodeURIComponent(m)}`,className:"inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-brand-400 hover:text-brand-700",children:[s.jsx(Sa,{size:12}),m]},m))}),s.jsx("div",{className:"mt-6 grid gap-2 sm:grid-cols-3",children:[["40","lessons"],[String(Ea.length),"grammar references"],[String(Sn.reduce((m,p)=>m+p.items.length,0)),"vocabulary entries"]].map(([m,p])=>s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 text-center",children:[s.jsx("p",{className:"font-display text-2xl text-brand-700 dark:text-brand-300",children:m}),s.jsx("p",{className:"text-[10px] uppercase tracking-wide text-[var(--ink-faint)]",children:p})]},p))})]}),l&&h.length===0&&s.jsxs("div",{className:"mx-auto mt-8 max-w-xl rounded-xl border border-dashed border-[var(--line-strong)] p-8 text-center",children:[s.jsx(Sa,{size:26,className:"mx-auto text-[var(--ink-faint)]"}),s.jsx("p",{className:"mt-2 text-sm font-semibold",children:"No matches found."}),s.jsx("p",{className:"mt-1 text-xs text-[var(--ink-faint)]",children:"Try a shorter phrase, or search for a lesson code such as 1A."})]}),l&&h.length>0&&s.jsx("div",{className:"mt-6 space-y-6",children:Object.keys(c).map(m=>{const p=c[m],b=J0[m];return s.jsxs("section",{children:[s.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[s.jsx(b,{size:15,className:"text-brand-600"}),s.jsxs("h2",{className:"text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-faint)]",children:[gg[m]," · ",p.length]})]}),s.jsx("div",{className:"space-y-2",children:p.map(w=>s.jsxs(G,{to:w.to,className:"group flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5 transition hover:border-brand-300 hover:shadow-sm",children:[s.jsx("span",{className:`mt-0.5 h-fit shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${V0[w.kind]}`,children:gg[w.kind]}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("h3",{className:"text-sm font-bold text-[var(--ink)] group-hover:text-brand-700 dark:group-hover:text-brand-300",children:s.jsx(Yu,{text:w.title,terms:u})}),s.jsx("p",{className:"mt-0.5 text-[11px] text-[var(--ink-faint)]",children:s.jsx(Yu,{text:w.subtitle,terms:u})}),s.jsx("p",{className:"mt-1 line-clamp-2 text-[11px] leading-relaxed text-[var(--ink-soft)]",children:s.jsx(Yu,{text:F0(w.body,u),terms:u})})]}),s.jsx(Jn,{size:15,className:"mt-1 shrink-0 text-[var(--ink-faint)] transition group-hover:translate-x-0.5"})]},w.key))})]},m)})})]})}function Q0(){const[r,l]=T.useState(1),{progress:u,isComplete:h,toggle:c,completedCount:m}=to(),p=Xr(),b=Math.round(m/p.length*100),w=lt.find(N=>N.number===r),v=w.lessons.find(N=>N.quiz),k=h(w.number,v?.id??""),y=v?.quiz?u.quizzes[v.quiz.id]:void 0;return s.jsxs("div",{children:[s.jsx(En,{eyebrow:"Practice · Review",title:"Review & practice",description:"One short progress check for each unit, drawn from the grammar and vocabulary in that unit. Take a quiz after the review lesson, or come back any time to check what has stuck.",backTo:"/book",backLabel:"Contents",children:s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs(gt,{tone:"brand",children:[m,"/",p.length," lessons complete"]}),s.jsx(gt,{tone:"accent",children:"8 unit quizzes"}),s.jsxs(gt,{children:[p.length?b:0,"% of the course"]})]})}),s.jsx("section",{className:"mb-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white",children:s.jsx(wx,{size:21})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[s.jsx("p",{className:"text-sm font-bold",children:"Course progress"}),s.jsxs("p",{className:"text-xs tabular-nums text-[var(--ink-faint)]",children:[m," / ",p.length]})]}),s.jsx(Ko,{value:b,className:"mt-2",label:"Course progress"})]})]})}),s.jsxs("div",{className:"grid gap-5 lg:grid-cols-[210px_1fr]",children:[s.jsxs("aside",{children:[s.jsx("p",{className:"mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]",children:"Choose a unit"}),s.jsx("div",{className:"grid grid-cols-4 gap-1.5 lg:grid-cols-2",children:lt.map(N=>{const L=N.lessons.filter(q=>h(N.number,q.id)).length;return s.jsxs("button",{type:"button",onClick:()=>{l(N.number),Kt("tap")},className:`rounded-lg border px-2 py-2 text-left transition ${r===N.number?"border-brand-500 bg-brand-600 text-white shadow-sm":"border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] hover:border-brand-300"}`,children:[s.jsxs("span",{className:`text-[9px] font-bold uppercase tracking-wide ${r===N.number?"text-white/70":"text-[var(--ink-faint)]"}`,children:["Unit ",N.number]}),s.jsx("span",{className:"mt-0.5 block truncate text-xs font-bold",children:N.title}),s.jsxs("span",{className:`mt-0.5 block text-[9px] ${r===N.number?"text-white/80":"text-[var(--ink-faint)]"}`,children:[L,"/",N.lessons.length," done"]})]},N.number)})}),s.jsxs("div",{className:"mt-4 rounded-xl border border-[var(--line)] bg-[var(--bg)]/40 p-3",children:[s.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--ink-faint)]",children:"Review lessons"}),s.jsx("div",{className:"mt-1.5 space-y-0.5",children:w.lessons.filter(N=>N.quiz).map(N=>s.jsxs(G,{to:`/unit/${w.number}/lesson/${N.id}`,className:"flex items-center gap-2 rounded-md px-1.5 py-1 text-xs text-[var(--ink-soft)] hover:bg-[var(--surface)] hover:text-brand-700",children:[s.jsx(ln,{size:12}),N.code," · ",N.title]},N.id))})]})]}),s.jsxs("section",{children:[s.jsxs("div",{className:"mb-3 flex flex-wrap items-end justify-between gap-2",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300",children:["Unit ",w.number," · ",w.title]}),s.jsx("h2",{className:"mt-0.5 font-display text-2xl text-[var(--ink)]",children:"Progress check"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[k&&s.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-semibold text-brand-800 dark:bg-brand-950 dark:text-brand-200",children:[s.jsx(ln,{size:11})," Review complete"]}),y&&s.jsxs("span",{className:"rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)]",children:["Best: ",y.correct,"/",y.total]})]})]}),v?.quiz?s.jsx(Qu,{id:v.quiz.id,title:v.quiz.title,questions:v.quiz.questions,onPass:()=>{k||(c(w.number,v.id),Kt("correct"))}},v.quiz.id):s.jsx("p",{className:"rounded-xl border border-dashed border-[var(--line-strong)] p-6 text-sm text-[var(--ink-faint)]",children:"This unit has no quiz yet."}),s.jsx("div",{className:"mt-4 grid gap-2 sm:grid-cols-2",children:w.lessons.map(N=>s.jsxs(G,{to:`/unit/${w.number}/lesson/${N.id}`,className:"group flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs transition hover:border-brand-300",children:[s.jsx("span",{className:"w-7 font-bold text-brand-600",children:N.code}),s.jsx("span",{className:"min-w-0 flex-1 truncate text-[var(--ink-soft)]",children:N.title}),h(w.number,N.id)?s.jsx(ln,{size:13,className:"text-brand-600"}):s.jsx(Jn,{size:13,className:"text-[var(--ink-faint)] transition group-hover:translate-x-0.5"})]},N.id))})]})]}),s.jsxs("section",{className:"mt-8",children:[s.jsx(Jt,{icon:s.jsx(ft,{size:18,className:"text-brand-600"}),title:"How the review works"}),s.jsx("div",{className:"grid gap-2 sm:grid-cols-3",children:[["1","Take the quiz","Five questions on the unit’s grammar and vocabulary."],["2","Read the feedback","Every answer has a short explanation linked to the lesson."],["3","Mark it complete","Passing the quiz completes the unit review lesson."]].map(([N,L,q])=>s.jsxs("div",{className:"rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3",children:[s.jsx("span",{className:"grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-800 dark:bg-brand-950 dark:text-brand-300",children:N}),s.jsx("p",{className:"mt-1.5 text-xs font-bold",children:L}),s.jsx("p",{className:"mt-0.5 text-[11px] leading-relaxed text-[var(--ink-faint)]",children:q})]},N))})]})]})}function $0(){const[r,l]=zg(),u=r.get("tab")==="video"?"video":"audio",h=Number(r.get("unit")??"1"),c=lt.find(v=>v.number===h)??lt[0],m=lt.reduce((v,k)=>v+k.lessons.reduce((y,N)=>y+N.audio.length,0),0),p=lt.reduce((v,k)=>v+k.videos.length,0);function b(v){const k=new URLSearchParams(r);k.set("tab",v),v==="audio"&&k.set("unit",String(c.number)),l(k)}function w(v){const k=new URLSearchParams(r);k.set("tab","audio"),k.set("unit",String(v)),l(k)}return s.jsxs("div",{children:[s.jsx(En,{eyebrow:"Library · Media",title:"Audio & video",description:"Every recording that comes with the B1+ Student’s Book: lesson audio, Vocabulary Bank and Mini Bank tracks, review audio, unit vlogs and BBC videos.",backTo:"/book",backLabel:"Contents",children:s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsxs(gt,{tone:"brand",children:[s.jsx(Kn,{size:11})," ",m," audio tracks"]}),s.jsxs(gt,{tone:"warm",children:[s.jsx(hn,{size:11})," ",p," videos"]}),s.jsx(G,{to:"/scripts",className:"rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700",children:"Open scripts"})]})}),s.jsxs("div",{className:"mb-5 flex gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1",children:[s.jsxs("button",{type:"button",onClick:()=>b("audio"),className:`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${u==="audio"?"bg-brand-600 text-white shadow-sm":"text-[var(--ink-soft)] hover:text-brand-700"}`,children:[s.jsx(Kn,{size:15})," Audio library"]}),s.jsxs("button",{type:"button",onClick:()=>b("video"),className:`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${u==="video"?"bg-warm-600 text-white shadow-sm":"text-[var(--ink-soft)] hover:text-warm-700"}`,children:[s.jsx(hn,{size:15})," Video library"]})]}),u==="audio"?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mb-4 flex gap-1.5 overflow-x-auto pb-1",children:lt.map(v=>{const k=v.lessons.reduce((y,N)=>y+N.audio.length,0);return s.jsxs("button",{type:"button",onClick:()=>w(v.number),className:`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${h===v.number?"bg-brand-600 text-white":"bg-[var(--surface)] text-[var(--ink-soft)] ring-1 ring-[var(--line)] hover:text-brand-700"}`,children:["Unit ",v.number," · ",k]},v.number)})}),s.jsxs("section",{className:"rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5",children:[s.jsxs("div",{className:"mb-4 flex flex-wrap items-end justify-between gap-2 border-b border-[var(--line)] pb-3",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300",children:["Unit ",c.number," · ",c.title]}),s.jsx("h2",{className:"mt-0.5 font-display text-xl text-[var(--ink)]",children:"Listen to this unit"})]}),s.jsx(G,{to:`/unit/${c.number}`,className:"text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300",children:"Open unit →"})]}),s.jsx("div",{className:"space-y-5",children:c.lessons.map(v=>s.jsxs("div",{children:[s.jsxs("div",{className:"mb-1.5 flex items-center justify-between gap-2",children:[s.jsxs(G,{to:`/unit/${c.number}/lesson/${v.id}`,className:"text-xs font-bold text-[var(--ink)] hover:text-brand-700",children:[s.jsx("span",{className:"mr-1.5 text-brand-600",children:v.code}),v.title]}),s.jsxs("span",{className:"text-[10px] text-[var(--ink-faint)]",children:[v.audio.length," track",v.audio.length===1?"":"s"]})]}),s.jsx(yd,{tracks:v.audio})]},v.id))})]}),s.jsx("p",{className:"mt-4 text-center text-[10px] text-[var(--ink-faint)]",children:"Audio tracks are the book’s MP3 files. Use the player’s speed control for slower listening."})]}):s.jsxs("section",{children:[s.jsxs("div",{className:"mb-3 flex items-center justify-between gap-2",children:[s.jsx("p",{className:"text-xs text-[var(--ink-faint)]",children:"Click a video card to load and play it."}),s.jsxs(G,{to:"/scripts",className:"inline-flex items-center gap-1 text-xs font-semibold text-warm-700 hover:underline dark:text-warm-300",children:[s.jsx(Sa,{size:12})," Video scripts"]})]}),s.jsx("div",{className:"space-y-6",children:lt.map(v=>s.jsxs("div",{children:[s.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[s.jsx("span",{className:"grid h-7 w-7 place-items-center rounded-md bg-warm-100 text-[10px] font-bold text-warm-800 dark:bg-warm-950/60 dark:text-warm-200",children:v.number}),s.jsxs("h2",{className:"text-sm font-bold text-[var(--ink)]",children:["Unit ",v.number," · ",v.title]}),s.jsx(G,{to:`/unit/${v.number}`,className:"ml-auto text-[10px] font-semibold text-[var(--ink-faint)] hover:text-brand-600",children:"Unit page →"})]}),s.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:v.videos.map(k=>s.jsx(ly,{video:k,unitNumber:v.number},k.file))})]},v.number))})]})]})}function e1(){return s.jsxs("div",{className:"mx-auto max-w-md py-16 text-center",children:[s.jsx("p",{className:"font-display text-6xl text-brand-600 dark:text-brand-300",children:"404"}),s.jsx("h1",{className:"mt-2 font-display text-2xl text-[var(--ink)]",children:"This page is not in the book"}),s.jsx("p",{className:"mt-2 text-sm leading-relaxed text-[var(--ink-soft)]",children:"The link may be old, or the lesson may have a different code. Use the contents to find your place."}),s.jsxs("div",{className:"mt-5 flex justify-center gap-2",children:[s.jsxs(G,{to:"/",className:"inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700",children:[s.jsx(Gg,{size:14})," Home"]}),s.jsxs(G,{to:"/book",className:"inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-4 py-2 text-xs font-semibold text-[var(--ink-soft)] hover:border-brand-400 hover:text-brand-700",children:[s.jsx(pt,{size:14})," Contents"]})]})]})}function t1(){return s.jsx(wk,{children:s.jsxs(It,{element:s.jsx(k0,{}),children:[s.jsx(It,{index:!0,element:s.jsx(x0,{})}),s.jsx(It,{path:"book",element:s.jsx(A0,{})}),s.jsx(It,{path:"unit/:unitId",element:s.jsx(B0,{})}),s.jsx(It,{path:"unit/:unitId/lesson/:lessonId",element:s.jsx(O0,{})}),s.jsx(It,{path:"bank/grammar",element:s.jsx(D0,{})}),s.jsx(It,{path:"bank/grammar/:code",element:s.jsx(M0,{})}),s.jsx(It,{path:"bank/vocabulary",element:s.jsx(q0,{})}),s.jsx(It,{path:"scripts",element:s.jsx(Y0,{})}),s.jsx(It,{path:"search",element:s.jsx(Z0,{})}),s.jsx(It,{path:"review",element:s.jsx(Q0,{})}),s.jsx(It,{path:"media",element:s.jsx($0,{})}),s.jsx(It,{path:"*",element:s.jsx(e1,{})})]})})}fv.createRoot(document.getElementById("root")).render(s.jsxs(T.StrictMode,{children:[s.jsx(Yk,{children:s.jsx(t1,{})}),s.jsx(j0,{})]}));
