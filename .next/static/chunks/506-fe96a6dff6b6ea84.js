"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{8030:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2265);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:u="",children:c,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:r,strokeWidth:s?24*Number(l)/Number(o):l,className:a("lucide",u),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:s,...u}=r;return(0,n.createElement)(l,{ref:i,iconNode:t,className:a("lucide-".concat(o(e)),s),...u})});return r.displayName="".concat(e),r}},3274:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},6463:function(e,t,r){var n=r(1169);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},35:function(e,t,r){var n=r(9109).lW;let o=void 0!==n,a=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,i=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;function l(e,t,r){null==r&&null!==t&&"object"==typeof t&&(r=t,t=void 0),o&&n.isBuffer(e)&&(e=e.toString()),e&&65279===e.charCodeAt(0)&&(e=e.slice(1));let l=JSON.parse(e,t);if(null===l||"object"!=typeof l)return l;let u=r&&r.protoAction||"error",c=r&&r.constructorAction||"error";if("ignore"===u&&"ignore"===c)return l;if("ignore"!==u&&"ignore"!==c){if(!1===a.test(e)&&!1===i.test(e))return l}else if("ignore"!==u&&"ignore"===c){if(!1===a.test(e))return l}else if(!1===i.test(e))return l;return s(l,{protoAction:u,constructorAction:c,safe:r&&r.safe})}function s(e,{protoAction:t="error",constructorAction:r="error",safe:n}={}){let o=[e];for(;o.length;){let e=o;for(let a of(o=[],e)){if("ignore"!==t&&Object.prototype.hasOwnProperty.call(a,"__proto__")){if(!0===n)return null;if("error"===t)throw SyntaxError("Object contains forbidden prototype property");delete a.__proto__}if("ignore"!==r&&Object.prototype.hasOwnProperty.call(a,"constructor")&&Object.prototype.hasOwnProperty.call(a.constructor,"prototype")){if(!0===n)return null;if("error"===r)throw SyntaxError("Object contains forbidden prototype property");delete a.constructor}for(let e in a){let t=a[e];t&&"object"==typeof t&&o.push(t)}}}return e}function u(e,t,r){let n=Error.stackTraceLimit;Error.stackTraceLimit=0;try{return l(e,t,r)}finally{Error.stackTraceLimit=n}}e.exports=u,e.exports.default=u,e.exports.parse=u,e.exports.safeParse=function(e,t){let r=Error.stackTraceLimit;Error.stackTraceLimit=0;try{return l(e,t,{safe:!0})}catch(e){return null}finally{Error.stackTraceLimit=r}},e.exports.scan=s},4492:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,i=n.useEffect,l=n.useLayoutEffect,s=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),o=n[0].inst,c=n[1];return l(function(){o.value=r,o.getSnapshot=t,u(o)&&c({inst:o})},[e,r,t]),i(function(){return u(o)&&c({inst:o}),e(function(){u(o)&&c({inst:o})})},[e]),s(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},554:function(e,t,r){e.exports=r(4492)},8364:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(2265),o=r(5171),a=r(7437),i=n.forwardRef((e,t)=>(0,a.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=i},8484:function(e,t,r){r.d(t,{f:function(){return u}});var n=r(2265),o=r(5171),a=r(7437),i="horizontal",l=["horizontal","vertical"],s=n.forwardRef((e,t)=>{let{decorative:r,orientation:n=i,...s}=e,u=l.includes(n)?n:i;return(0,a.jsx)(o.WV.div,{"data-orientation":u,...r?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},...s,ref:t})});s.displayName="Separator";var u=s},3028:function(e,t,r){let n;r.d(t,{GO:function(){return eE}});var o=r(2265),a=r(554);let i=()=>{},l=i(),s=Object,u=e=>e===l,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),p=new WeakMap,y=0,g=e=>{let t,r;let n=typeof e,o=e&&e.constructor,a=o==Date;if(s(e)!==e||a||o==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=p.get(e))return t;if(t=++y+"~",p.set(e,t),o==Array){for(r=0,t="@";r<e.length;r++)t+=g(e[r])+",";p.set(e,t)}if(o==s){t="#";let n=s.keys(e).sort();for(;!u(r=n.pop());)u(e[r])||(t+=r+":"+g(e[r])+",");p.set(e,t)}}return t},m=new WeakMap,h={},w={},_="undefined",b=typeof window!=_,E=typeof document!=_,v=()=>b&&typeof window.requestAnimationFrame!=_,x=(e,t)=>{let r=m.get(e);return[()=>!u(t)&&e.get(t)||h,n=>{if(!u(t)){let o=e.get(t);t in w||(w[t]=o),r[5](t,d(o,n),o||h)}},r[6],()=>!u(t)&&t in w?w[t]:!u(t)&&e.get(t)||h]},T=!0,[k,R]=b&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],C={initFocus:e=>(E&&document.addEventListener("visibilitychange",e),k("focus",e),()=>{E&&document.removeEventListener("visibilitychange",e),R("focus",e)}),initReconnect:e=>{let t=()=>{T=!0,e()},r=()=>{T=!1};return k("online",t),k("offline",r),()=>{R("online",t),R("offline",r)}}},O=!o.useId,j=!b||"Deno"in window,S=e=>v()?window.requestAnimationFrame(e):setTimeout(e,1),N=j?o.useEffect:o.useLayoutEffect,I="undefined"!=typeof navigator&&navigator.connection,L=!j&&I&&(["slow-2g","2g"].includes(I.effectiveType)||I.saveData),A=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t]},V=0,D=()=>++V;var F={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function P(...e){let[t,r,n,o]=e,a=d({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{}),i=a.populateCache,s=a.rollbackOnError,p=a.optimisticData,y=e=>"function"==typeof s?s(e):!1!==s,g=a.throwOnError;if(c(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(h))}return h(r);async function h(r){let o;let[s]=A(r);if(!s)return;let[d,h]=x(t,s),[w,_,b,E]=m.get(t),v=()=>{let e=w[s];return(c(a.revalidate)?a.revalidate(d().data,r):!1!==a.revalidate)&&(delete b[s],delete E[s],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return v();let T=n,k=D();_[s]=[k,0];let R=!u(p),C=d(),O=C.data,j=C._c,S=u(j)?O:j;if(R&&h({data:p=c(p)?p(S,O):p,_c:S}),c(T))try{T=T(S)}catch(e){o=e}if(T&&f(T)){if(T=await T.catch(e=>{o=e}),k!==_[s][0]){if(o)throw o;return T}o&&R&&y(o)&&(i=!0,h({data:S,_c:l}))}if(i&&!o&&(c(i)?h({data:i(T,S),error:l,_c:l}):h({data:T,error:l,_c:l})),_[s][1]=D(),Promise.resolve(v()).then(()=>{h({_c:l})}),o){if(g)throw o;return}return T}}let M=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},W=(e,t)=>{if(!m.has(e)){let r=d(C,t),n={},o=P.bind(l,e),a=i,s={},u=(e,t)=>{let r=s[e]||[];return s[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let o=s[t];if(o)for(let e of o)e(r,n)},f=()=>{if(!m.has(e)&&(m.set(e,[n,{},{},{},o,c,u]),!j)){let t=r.initFocus(setTimeout.bind(l,M.bind(l,n,0))),o=r.initReconnect(setTimeout.bind(l,M.bind(l,n,1)));a=()=>{t&&t(),o&&o(),m.delete(e)}}};return f(),[e,o,f,a]}return[e,m.get(e)[4]]},[U,$]=W(new Map),J=d({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,r,n,o)=>{let a=r.errorRetryCount,i=o.retryCount,l=~~((Math.random()+.5)*(1<<(i<8?i:8)))*r.errorRetryInterval;(u(a)||!(i>a))&&setTimeout(n,l,o)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:L?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:L?5e3:3e3,compare:(e,t)=>g(e)==g(t),isPaused:()=>!1,cache:U,mutate:$,fallback:{}},{isOnline:()=>T,isVisible:()=>{let e=E&&document.visibilityState;return u(e)||"hidden"!==e}}),z=(e,t)=>{let r=d(e,t);if(t){let{use:n,fallback:o}=e,{use:a,fallback:i}=t;n&&a&&(r.use=n.concat(a)),o&&i&&(r.fallback=d(o,i))}return r},Z=(0,o.createContext)({}),q=b&&window.__SWR_DEVTOOLS_USE__,B=q?window.__SWR_DEVTOOLS_USE__:[],G=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>d(J,(0,o.useContext)(Z)),K=B.concat(e=>(t,r,n)=>{let o=r&&((...e)=>{let[n]=A(t),[,,,o]=m.get(U);if(n.startsWith("$inf$"))return r(...e);let a=o[n];return u(a)?r(...e):(delete o[n],a)});return e(t,o,n)}),Q=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};q&&(window.__SWR_DEVTOOLS_REACT__=o);let X=o.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};s.defineProperty(e=>{let{value:t}=e,r=(0,o.useContext)(Z),n=c(t),a=(0,o.useMemo)(()=>n?t(r):t,[n,r,t]),i=(0,o.useMemo)(()=>n?a:z(r,a),[n,r,a]),s=a&&a.provider,u=(0,o.useRef)(l);s&&!u.current&&(u.current=W(s(i.cache||U),a));let f=u.current;return f&&(i.cache=f[0],i.mutate=f[1]),N(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,o.createElement)(Z.Provider,d(e,{value:i}))},"defaultValue",{value:J});let ee=(n=(e,t,r)=>{let{cache:n,compare:i,suspense:s,fallbackData:f,revalidateOnMount:p,revalidateIfStale:y,refreshInterval:g,refreshWhenHidden:h,refreshWhenOffline:w,keepPreviousData:_}=r,[b,E,v,T]=m.get(n),[k,R]=A(e),C=(0,o.useRef)(!1),I=(0,o.useRef)(!1),L=(0,o.useRef)(k),V=(0,o.useRef)(t),M=(0,o.useRef)(r),W=()=>M.current,U=()=>W().isVisible()&&W().isOnline(),[$,J,z,Z]=x(n,k),q=(0,o.useRef)({}).current,B=u(f)?r.fallback[k]:f,G=(e,t)=>{for(let r in q)if("data"===r){if(!i(e[r],t[r])&&(!u(e[r])||!i(ei,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},H=(0,o.useMemo)(()=>{let e=!!k&&!!t&&(u(p)?!W().isPaused()&&!s&&(!!u(y)||y):p),r=t=>{let r=d(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=$(),o=Z(),a=r(n),i=n===o?a:r(o),l=a;return[()=>{let e=r($());return G(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>i]},[n,k]),K=(0,a.useSyncExternalStore)((0,o.useCallback)(e=>z(k,(t,r)=>{G(r,t)||e()}),[n,k]),H[0],H[1]),ee=!C.current,et=b[k]&&b[k].length>0,er=K.data,en=u(er)?B:er,eo=K.error,ea=(0,o.useRef)(en),ei=_?u(er)?ea.current:er:en,el=(!et||!!u(eo))&&(ee&&!u(p)?p:!W().isPaused()&&(s?!u(en)&&y:u(en)||y)),es=!!(k&&t&&ee&&el),eu=u(K.isValidating)?es:K.isValidating,ec=u(K.isLoading)?es:K.isLoading,ed=(0,o.useCallback)(async e=>{let t,n;let o=V.current;if(!k||!o||I.current||W().isPaused())return!1;let a=!0,s=e||{},d=!v[k]||!s.dedupe,f=()=>O?!I.current&&k===L.current&&C.current:k===L.current,p={isValidating:!1,isLoading:!1},y=()=>{J(p)},g=()=>{let e=v[k];e&&e[1]===n&&delete v[k]},m={isValidating:!0};u($().data)&&(m.isLoading=!0);try{if(d&&(J(m),r.loadingTimeout&&u($().data)&&setTimeout(()=>{a&&f()&&W().onLoadingSlow(k,r)},r.loadingTimeout),v[k]=[o(R),D()]),[t,n]=v[k],t=await t,d&&setTimeout(g,r.dedupingInterval),!v[k]||v[k][1]!==n)return d&&f()&&W().onDiscarded(k),!1;p.error=l;let e=E[k];if(!u(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return y(),d&&f()&&W().onDiscarded(k),!1;let s=$().data;p.data=i(s,t)?s:t,d&&f()&&W().onSuccess(t,k,r)}catch(r){g();let e=W(),{shouldRetryOnError:t}=e;!e.isPaused()&&(p.error=r,d&&f()&&(e.onError(r,k,e),(!0===t||c(t)&&t(r))&&(!W().revalidateOnFocus||!W().revalidateOnReconnect||U())&&e.onErrorRetry(r,k,e,e=>{let t=b[k];t&&t[0]&&t[0](F.ERROR_REVALIDATE_EVENT,e)},{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return a=!1,y(),!0},[k,n]),ef=(0,o.useCallback)((...e)=>P(n,L.current,...e),[]);if(N(()=>{V.current=t,M.current=r,u(er)||(ea.current=er)}),N(()=>{if(!k)return;let e=ed.bind(l,Y),t=0,r=Q(k,b,(r,n={})=>{if(r==F.FOCUS_EVENT){let r=Date.now();W().revalidateOnFocus&&r>t&&U()&&(t=r+W().focusThrottleInterval,e())}else if(r==F.RECONNECT_EVENT)W().revalidateOnReconnect&&U()&&e();else if(r==F.MUTATE_EVENT)return ed();else if(r==F.ERROR_REVALIDATE_EVENT)return ed(n)});return I.current=!1,L.current=k,C.current=!0,J({_k:R}),el&&(u(en)||j?e():S(e)),()=>{I.current=!0,r()}},[k]),N(()=>{let e;function t(){let t=c(g)?g($().data):g;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!$().error&&(h||W().isVisible())&&(w||W().isOnline())?ed(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[g,h,w,k]),(0,o.useDebugValue)(ei),s&&u(en)&&k){if(!O&&j)throw Error("Fallback data is required when using suspense in SSR.");V.current=t,M.current=r,I.current=!1;let e=T[k];if(u(e)||X(ef(e)),u(eo)){let e=ed(Y);u(ei)||(e.status="fulfilled",e.value=!0),X(e)}else throw eo}return{mutate:ef,get data(){return q.data=!0,ei},get error(){return q.error=!0,eo},get isValidating(){return q.isValidating=!0,eu},get isLoading(){return q.isLoading=!0,ec}}},function(...e){let t=H(),[r,o,a]=G(e),i=z(t,a),l=n,{use:s}=i,u=(s||[]).concat(K);for(let e=u.length;e--;)l=u[e](l);return l(r,o||i.fetcher||null,i)});r(35);var et={code:"0",name:"text",parse:e=>{if("string"!=typeof e)throw Error('"text" parts expect a string value.');return{type:"text",value:e}}},er={code:"1",name:"function_call",parse:e=>{if(null==e||"object"!=typeof e||!("function_call"in e)||"object"!=typeof e.function_call||null==e.function_call||!("name"in e.function_call)||!("arguments"in e.function_call)||"string"!=typeof e.function_call.name||"string"!=typeof e.function_call.arguments)throw Error('"function_call" parts expect an object with a "function_call" property.');return{type:"function_call",value:e}}},en={code:"2",name:"data",parse:e=>{if(!Array.isArray(e))throw Error('"data" parts expect an array value.');return{type:"data",value:e}}},eo={code:"3",name:"error",parse:e=>{if("string"!=typeof e)throw Error('"error" parts expect a string value.');return{type:"error",value:e}}},ea={code:"4",name:"assistant_message",parse:e=>{if(null==e||"object"!=typeof e||!("id"in e)||!("role"in e)||!("content"in e)||"string"!=typeof e.id||"string"!=typeof e.role||"assistant"!==e.role||!Array.isArray(e.content)||!e.content.every(e=>null!=e&&"object"==typeof e&&"type"in e&&"text"===e.type&&"text"in e&&null!=e.text&&"object"==typeof e.text&&"value"in e.text&&"string"==typeof e.text.value))throw Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');return{type:"assistant_message",value:e}}},ei={code:"5",name:"assistant_control_data",parse:e=>{if(null==e||"object"!=typeof e||!("threadId"in e)||!("messageId"in e)||"string"!=typeof e.threadId||"string"!=typeof e.messageId)throw Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');return{type:"assistant_control_data",value:{threadId:e.threadId,messageId:e.messageId}}}},el={code:"6",name:"data_message",parse:e=>{if(null==e||"object"!=typeof e||!("role"in e)||!("data"in e)||"string"!=typeof e.role||"data"!==e.role)throw Error('"data_message" parts expect an object with a "role" and "data" property.');return{type:"data_message",value:e}}},es={code:"7",name:"tool_calls",parse:e=>{if(null==e||"object"!=typeof e||!("tool_calls"in e)||"object"!=typeof e.tool_calls||null==e.tool_calls||!Array.isArray(e.tool_calls)||e.tool_calls.some(e=>null==e||"object"!=typeof e||!("id"in e)||"string"!=typeof e.id||!("type"in e)||"string"!=typeof e.type||!("function"in e)||null==e.function||"object"!=typeof e.function||!("arguments"in e.function)||"string"!=typeof e.function.name||"string"!=typeof e.function.arguments))throw Error('"tool_calls" parts expect an object with a ToolCallPayload.');return{type:"tool_calls",value:e}}},eu={code:"8",name:"message_annotations",parse:e=>{if(!Array.isArray(e))throw Error('"message_annotations" parts expect an array value.');return{type:"message_annotations",value:e}}},ec={code:"9",name:"tool_call",parse:e=>{if(null==e||"object"!=typeof e||!("toolCallId"in e)||"string"!=typeof e.toolCallId||!("toolName"in e)||"string"!=typeof e.toolName||!("args"in e)||"object"!=typeof e.args)throw Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');return{type:"tool_call",value:e}}},ed={code:"a",name:"tool_result",parse:e=>{if(null==e||"object"!=typeof e||!("toolCallId"in e)||"string"!=typeof e.toolCallId||!("toolName"in e)||"string"!=typeof e.toolName||!("args"in e)||"object"!=typeof e.args||!("result"in e))throw Error('"tool_result" parts expect an object with a "toolCallId", "toolName", "args", and "result" property.');return{type:"tool_result",value:e}}},ef={code:"b",name:"tool_call_streaming_start",parse:e=>{if(null==e||"object"!=typeof e||!("toolCallId"in e)||"string"!=typeof e.toolCallId||!("toolName"in e)||"string"!=typeof e.toolName)throw Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');return{type:"tool_call_streaming_start",value:e}}},ep={code:"c",name:"tool_call_delta",parse:e=>{if(null==e||"object"!=typeof e||!("toolCallId"in e)||"string"!=typeof e.toolCallId||!("argsTextDelta"in e)||"string"!=typeof e.argsTextDelta)throw Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');return{type:"tool_call_delta",value:e}}},ey={code:"d",name:"finish_message",parse:e=>{if(null==e||"object"!=typeof e||!("finishReason"in e)||"string"!=typeof e.finishReason||!("usage"in e)||null==e.usage||"object"!=typeof e.usage||!("promptTokens"in e.usage)||"number"!=typeof e.usage.promptTokens||!("completionTokens"in e.usage)||"number"!=typeof e.usage.completionTokens)throw Error('"finish_message" parts expect an object with a "finishReason" and "usage" property.');return{type:"finish_message",value:e}}},eg={[et.code]:et,[er.code]:er,[en.code]:en,[eo.code]:eo,[ea.code]:ea,[ei.code]:ei,[el.code]:el,[es.code]:es,[eu.code]:eu,[ec.code]:ec,[ed.code]:ed,[ef.code]:ef,[ep.code]:ep,[ey.code]:ey};et.name,et.code,er.name,er.code,en.name,en.code,eo.name,eo.code,ea.name,ea.code,ei.name,ei.code,el.name,el.code,es.name,es.code,eu.name,eu.code,ec.name,ec.code,ed.name,ed.code,ef.name,ef.code,ep.name,ep.code,ey.name,ey.code;var em=[et,er,en,eo,ea,ei,el,es,eu,ec,ed,ef,ep,ey].map(e=>e.code),eh=e=>{let t=e.indexOf(":");if(-1===t)throw Error("Failed to parse stream string. No separator found.");let r=e.slice(0,t);if(!em.includes(r))throw Error(`Failed to parse stream string. Invalid code ${r}.`);let n=JSON.parse(e.slice(t+1));return eg[r].parse(n)};async function*ew(e,{isAborted:t}={}){let r=new TextDecoder,n=[],o=0;for(;;){let{value:a}=await e.read();if(a&&(n.push(a),o+=a.length,10!==a[a.length-1]))continue;if(0===n.length)break;let i=function(e,t){let r=new Uint8Array(t),n=0;for(let t of e)r.set(t,n),n+=t.length;return e.length=0,r}(n,o);for(let e of(o=0,r.decode(i,{stream:!0}).split("\n").filter(e=>""!==e).map(eh)))yield e;if(null==t?void 0:t()){e.cancel();break}}}var e_=()=>fetch;async function eb({api:e,prompt:t,credentials:r,headers:n,body:o,streamProtocol:a="data",setCompletion:i,setLoading:l,setError:s,setAbortController:u,onResponse:c,onFinish:d,onError:f,onData:p,fetch:y=e_()}){try{l(!0),s(void 0);let f=new AbortController;u(f),i("");let g=await y(e,{method:"POST",body:JSON.stringify({prompt:t,...o}),credentials:r,headers:{"Content-Type":"application/json",...n},signal:f.signal}).catch(e=>{throw e});if(c)try{await c(g)}catch(e){throw e}if(!g.ok)throw Error(await g.text()||"Failed to fetch the chat response.");if(!g.body)throw Error("The response body is empty.");let m="",h=g.body.getReader();switch(a){case"text":{let e=function(e){let t=new TextDecoder;return function(e){return e?t.decode(e,{stream:!0}):""}}();for(;;){let{done:t,value:r}=await h.read();if(t)break;if(m+=e(r),i(m),null===f){h.cancel();break}}break}case"data":for await(let{type:e,value:t}of ew(h,{isAborted:()=>null===f}))switch(e){case"text":m+=t,i(m);break;case"data":null==p||p(t)}break;default:throw Error(`Unknown stream protocol: ${a}`)}return d&&d(t,m),u(null),m}catch(e){if("AbortError"===e.name)return u(null),null;e instanceof Error&&f&&f(e),s(e)}finally{l(!1)}}var eE=function({api:e="/api/completion",id:t,initialCompletion:r="",initialInput:n="",credentials:a,headers:i,body:l,streamMode:s,streamProtocol:u,fetch:c,onResponse:d,onFinish:f,onError:p}={}){s&&(null!=u||(u="text"===s?"text":void 0));let y=(0,o.useId)(),g=t||y,{data:m,mutate:h}=ee([e,g],null,{fallbackData:r}),{data:w=!1,mutate:_}=ee([g,"loading"],null),{data:b,mutate:E}=ee([g,"streamData"],null),[v,x]=(0,o.useState)(void 0),[T,k]=(0,o.useState)(null),R=(0,o.useRef)({credentials:a,headers:i,body:l});(0,o.useEffect)(()=>{R.current={credentials:a,headers:i,body:l}},[a,i,l]);let C=(0,o.useCallback)(async(t,r)=>eb({api:e,prompt:t,credentials:R.current.credentials,headers:{...R.current.headers,...null==r?void 0:r.headers},body:{...R.current.body,...null==r?void 0:r.body},streamProtocol:u,fetch:c,setCompletion:e=>h(e,!1),setLoading:_,setError:x,setAbortController:k,onResponse:d,onFinish:f,onError:p,onData:e=>{E([...b||[],...e||[]],!1)}}),[h,_,e,R,k,d,f,p,x,b,u,c,E]),O=(0,o.useCallback)(()=>{T&&(T.abort(),k(null))},[T]),j=(0,o.useCallback)(e=>{h(e,!1)},[h]),S=(0,o.useCallback)(async(e,t)=>C(e,t),[C]),[N,I]=(0,o.useState)(n),L=(0,o.useCallback)(e=>{var t;return null==(t=null==e?void 0:e.preventDefault)||t.call(e),N?S(N):void 0},[N,S]);return{completion:m,complete:S,error:v,setCompletion:j,stop:O,input:N,setInput:I,handleInputChange:e=>{I(e.target.value)},handleSubmit:L,isLoading:w,data:b}}}}]);