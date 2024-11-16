(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function f0(c){const l=Object.create(null);for(const s of c.split(","))l[s]=1;return s=>s in l}const j={},x1=[],E2=()=>{},Bi=()=>!1,D4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),r0=c=>c.startsWith("onUpdate:"),Z=Object.assign,z0=(c,l)=>{const s=c.indexOf(l);s>-1&&c.splice(s,1)},Ri=Object.prototype.hasOwnProperty,I=(c,l)=>Ri.call(c,l),E=Array.isArray,N1=c=>O4(c)==="[object Map]",V8=c=>O4(c)==="[object Set]",R=c=>typeof c=="function",Q=c=>typeof c=="string",U2=c=>typeof c=="symbol",X=c=>c!==null&&typeof c=="object",K8=c=>(X(c)||R(c))&&R(c.then)&&R(c.catch),X8=Object.prototype.toString,O4=c=>X8.call(c),Hi=c=>O4(c).slice(8,-1),Y8=c=>O4(c)==="[object Object]",m0=c=>Q(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,q1=f0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$4=c=>{const l=Object.create(null);return s=>l[s]||(l[s]=c(s))},Di=/-(\w)/g,b2=$4(c=>c.replace(Di,(l,s)=>s?s.toUpperCase():"")),Oi=/\B([A-Z])/g,C1=$4(c=>c.replace(Oi,"-$1").toLowerCase()),I4=$4(c=>c.charAt(0).toUpperCase()+c.slice(1)),C3=$4(c=>c?`on${I4(c)}`:""),Q2=(c,l)=>!Object.is(c,l),d3=(c,...l)=>{for(let s=0;s<c.length;s++)c[s](...l)},Q8=(c,l,s,e=!1)=>{Object.defineProperty(c,l,{configurable:!0,enumerable:!1,writable:e,value:s})},$i=c=>{const l=parseFloat(c);return isNaN(l)?c:l};let j6;const q4=()=>j6||(j6=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function L0(c){if(E(c)){const l={};for(let s=0;s<c.length;s++){const e=c[s],a=Q(e)?Wi(e):L0(e);if(a)for(const n in a)l[n]=a[n]}return l}else if(Q(c)||X(c))return c}const Ii=/;(?![^(]*\))/g,qi=/:([^]+)/,Ui=/\/\*[^]*?\*\//g;function Wi(c){const l={};return c.replace(Ui,"").split(Ii).forEach(s=>{if(s){const e=s.split(qi);e.length>1&&(l[e[0].trim()]=e[1].trim())}}),l}function M0(c){let l="";if(Q(c))l=c;else if(E(c))for(let s=0;s<c.length;s++){const e=M0(c[s]);e&&(l+=e+" ")}else if(X(c))for(const s in c)c[s]&&(l+=s+" ");return l.trim()}const Gi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ji=f0(Gi);function J8(c){return!!c||c===""}const Z8=c=>!!(c&&c.__v_isRef===!0),c5=c=>Q(c)?c:c==null?"":E(c)||X(c)&&(c.toString===X8||!R(c.toString))?Z8(c)?c5(c.value):JSON.stringify(c,l5,2):String(c),l5=(c,l)=>Z8(l)?l5(c,l.value):N1(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((s,[e,a],n)=>(s[h3(e,n)+" =>"]=a,s),{})}:V8(l)?{[`Set(${l.size})`]:[...l.values()].map(s=>h3(s))}:U2(l)?h3(l):X(l)&&!E(l)&&!Y8(l)?String(l):l,h3=(c,l="")=>{var s;return U2(c)?`Symbol(${(s=c.description)!=null?s:l})`:c};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let u2;class Vi{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=u2,!l&&u2&&(this.index=(u2.scopes||(u2.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let l,s;if(this.scopes)for(l=0,s=this.scopes.length;l<s;l++)this.scopes[l].pause();for(l=0,s=this.effects.length;l<s;l++)this.effects[l].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let l,s;if(this.scopes)for(l=0,s=this.scopes.length;l<s;l++)this.scopes[l].resume();for(l=0,s=this.effects.length;l<s;l++)this.effects[l].resume()}}run(l){if(this._active){const s=u2;try{return u2=this,l()}finally{u2=s}}}on(){u2=this}off(){u2=this.parent}stop(l){if(this._active){this._active=!1;let s,e;for(s=0,e=this.effects.length;s<e;s++)this.effects[s].stop();for(this.effects.length=0,s=0,e=this.cleanups.length;s<e;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,e=this.scopes.length;s<e;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!l){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Ki(){return u2}let G;const g3=new WeakSet;class s5{constructor(l){this.fn=l,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,u2&&u2.active&&u2.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,g3.has(this)&&(g3.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||a5(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,V6(this),n5(this);const l=G,s=w2;G=this,w2=!0;try{return this.fn()}finally{o5(this),G=l,w2=s,this.flags&=-3}}stop(){if(this.flags&1){for(let l=this.deps;l;l=l.nextDep)C0(l);this.deps=this.depsTail=void 0,V6(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?g3.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){B3(this)&&this.run()}get dirty(){return B3(this)}}let e5=0,U1,W1;function a5(c,l=!1){if(c.flags|=8,l){c.next=W1,W1=c;return}c.next=U1,U1=c}function p0(){e5++}function u0(){if(--e5>0)return;if(W1){let l=W1;for(W1=void 0;l;){const s=l.next;l.next=void 0,l.flags&=-9,l=s}}let c;for(;U1;){let l=U1;for(U1=void 0;l;){const s=l.next;if(l.next=void 0,l.flags&=-9,l.flags&1)try{l.trigger()}catch(e){c||(c=e)}l=s}}if(c)throw c}function n5(c){for(let l=c.deps;l;l=l.nextDep)l.version=-1,l.prevActiveLink=l.dep.activeLink,l.dep.activeLink=l}function o5(c){let l,s=c.depsTail,e=s;for(;e;){const a=e.prevDep;e.version===-1?(e===s&&(s=a),C0(e),Xi(e)):l=e,e.dep.activeLink=e.prevActiveLink,e.prevActiveLink=void 0,e=a}c.deps=l,c.depsTail=s}function B3(c){for(let l=c.deps;l;l=l.nextDep)if(l.dep.version!==l.version||l.dep.computed&&(i5(l.dep.computed)||l.dep.version!==l.version))return!0;return!!c._dirty}function i5(c){if(c.flags&4&&!(c.flags&16)||(c.flags&=-17,c.globalVersion===X1))return;c.globalVersion=X1;const l=c.dep;if(c.flags|=2,l.version>0&&!c.isSSR&&c.deps&&!B3(c)){c.flags&=-3;return}const s=G,e=w2;G=c,w2=!0;try{n5(c);const a=c.fn(c._value);(l.version===0||Q2(a,c._value))&&(c._value=a,l.version++)}catch(a){throw l.version++,a}finally{G=s,w2=e,o5(c),c.flags&=-3}}function C0(c,l=!1){const{dep:s,prevSub:e,nextSub:a}=c;if(e&&(e.nextSub=a,c.prevSub=void 0),a&&(a.prevSub=e,c.nextSub=void 0),s.subs===c&&(s.subs=e,!e&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)C0(n,!0)}!l&&!--s.sc&&s.map&&s.map.delete(s.key)}function Xi(c){const{prevDep:l,nextDep:s}=c;l&&(l.nextDep=s,c.prevDep=void 0),s&&(s.prevDep=l,c.nextDep=void 0)}let w2=!0;const t5=[];function l1(){t5.push(w2),w2=!1}function s1(){const c=t5.pop();w2=c===void 0?!0:c}function V6(c){const{cleanup:l}=c;if(c.cleanup=void 0,l){const s=G;G=void 0;try{l()}finally{G=s}}}let X1=0;class Yi{constructor(l,s){this.sub=l,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class d0{constructor(l){this.computed=l,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(l){if(!G||!w2||G===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==G)s=this.activeLink=new Yi(G,this),G.deps?(s.prevDep=G.depsTail,G.depsTail.nextDep=s,G.depsTail=s):G.deps=G.depsTail=s,f5(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const e=s.nextDep;e.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=e),s.prevDep=G.depsTail,s.nextDep=void 0,G.depsTail.nextDep=s,G.depsTail=s,G.deps===s&&(G.deps=e)}return s}trigger(l){this.version++,X1++,this.notify(l)}notify(l){p0();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{u0()}}}function f5(c){if(c.dep.sc++,c.sub.flags&4){const l=c.dep.computed;if(l&&!c.dep.subs){l.flags|=20;for(let e=l.deps;e;e=e.nextDep)f5(e)}const s=c.dep.subs;s!==c&&(c.prevSub=s,s&&(s.nextSub=c)),c.dep.subs=c}}const R3=new WeakMap,z1=Symbol(""),H3=Symbol(""),Y1=Symbol("");function l2(c,l,s){if(w2&&G){let e=R3.get(c);e||R3.set(c,e=new Map);let a=e.get(s);a||(e.set(s,a=new d0),a.map=e,a.key=s),a.track()}}function O2(c,l,s,e,a,n){const o=R3.get(c);if(!o){X1++;return}const i=t=>{t&&t.trigger()};if(p0(),l==="clear")o.forEach(i);else{const t=E(c),z=t&&m0(s);if(t&&s==="length"){const r=Number(e);o.forEach((L,u)=>{(u==="length"||u===Y1||!U2(u)&&u>=r)&&i(L)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),z&&i(o.get(Y1)),l){case"add":t?z&&i(o.get("length")):(i(o.get(z1)),N1(c)&&i(o.get(H3)));break;case"delete":t||(i(o.get(z1)),N1(c)&&i(o.get(H3)));break;case"set":N1(c)&&i(o.get(z1));break}}u0()}function d1(c){const l=$(c);return l===c?l:(l2(l,"iterate",Y1),N2(c)?l:l.map(s2))}function U4(c){return l2(c=$(c),"iterate",Y1),c}const Qi={__proto__:null,[Symbol.iterator](){return x3(this,Symbol.iterator,s2)},concat(...c){return d1(this).concat(...c.map(l=>E(l)?d1(l):l))},entries(){return x3(this,"entries",c=>(c[1]=s2(c[1]),c))},every(c,l){return H2(this,"every",c,l,void 0,arguments)},filter(c,l){return H2(this,"filter",c,l,s=>s.map(s2),arguments)},find(c,l){return H2(this,"find",c,l,s2,arguments)},findIndex(c,l){return H2(this,"findIndex",c,l,void 0,arguments)},findLast(c,l){return H2(this,"findLast",c,l,s2,arguments)},findLastIndex(c,l){return H2(this,"findLastIndex",c,l,void 0,arguments)},forEach(c,l){return H2(this,"forEach",c,l,void 0,arguments)},includes(...c){return N3(this,"includes",c)},indexOf(...c){return N3(this,"indexOf",c)},join(c){return d1(this).join(c)},lastIndexOf(...c){return N3(this,"lastIndexOf",c)},map(c,l){return H2(this,"map",c,l,void 0,arguments)},pop(){return H1(this,"pop")},push(...c){return H1(this,"push",c)},reduce(c,...l){return K6(this,"reduce",c,l)},reduceRight(c,...l){return K6(this,"reduceRight",c,l)},shift(){return H1(this,"shift")},some(c,l){return H2(this,"some",c,l,void 0,arguments)},splice(...c){return H1(this,"splice",c)},toReversed(){return d1(this).toReversed()},toSorted(c){return d1(this).toSorted(c)},toSpliced(...c){return d1(this).toSpliced(...c)},unshift(...c){return H1(this,"unshift",c)},values(){return x3(this,"values",s2)}};function x3(c,l,s){const e=U4(c),a=e[l]();return e!==c&&!N2(c)&&(a._next=a.next,a.next=()=>{const n=a._next();return n.value&&(n.value=s(n.value)),n}),a}const Ji=Array.prototype;function H2(c,l,s,e,a,n){const o=U4(c),i=o!==c&&!N2(c),t=o[l];if(t!==Ji[l]){const L=t.apply(c,n);return i?s2(L):L}let z=s;o!==c&&(i?z=function(L,u){return s.call(this,s2(L),u,c)}:s.length>2&&(z=function(L,u){return s.call(this,L,u,c)}));const r=t.call(o,z,e);return i&&a?a(r):r}function K6(c,l,s,e){const a=U4(c);let n=s;return a!==c&&(N2(c)?s.length>3&&(n=function(o,i,t){return s.call(this,o,i,t,c)}):n=function(o,i,t){return s.call(this,o,s2(i),t,c)}),a[l](n,...e)}function N3(c,l,s){const e=$(c);l2(e,"iterate",Y1);const a=e[l](...s);return(a===-1||a===!1)&&N0(s[0])?(s[0]=$(s[0]),e[l](...s)):a}function H1(c,l,s=[]){l1(),p0();const e=$(c)[l].apply(c,s);return u0(),s1(),e}const Zi=f0("__proto__,__v_isRef,__isVue"),r5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(U2));function ct(c){U2(c)||(c=String(c));const l=$(this);return l2(l,"has",c),l.hasOwnProperty(c)}class z5{constructor(l=!1,s=!1){this._isReadonly=l,this._isShallow=s}get(l,s,e){if(s==="__v_skip")return l.__v_skip;const a=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return n;if(s==="__v_raw")return e===(a?n?rt:p5:n?M5:L5).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(e)?l:void 0;const o=E(l);if(!a){let t;if(o&&(t=Qi[s]))return t;if(s==="hasOwnProperty")return ct}const i=Reflect.get(l,s,a2(l)?l:e);return(U2(s)?r5.has(s):Zi(s))||(a||l2(l,"get",s),n)?i:a2(i)?o&&m0(s)?i:i.value:X(i)?a?u5(i):g0(i):i}}class m5 extends z5{constructor(l=!1){super(!1,l)}set(l,s,e,a){let n=l[s];if(!this._isShallow){const t=M1(n);if(!N2(e)&&!M1(e)&&(n=$(n),e=$(e)),!E(l)&&a2(n)&&!a2(e))return t?!1:(n.value=e,!0)}const o=E(l)&&m0(s)?Number(s)<l.length:I(l,s),i=Reflect.set(l,s,e,a2(l)?l:a);return l===$(a)&&(o?Q2(e,n)&&O2(l,"set",s,e):O2(l,"add",s,e)),i}deleteProperty(l,s){const e=I(l,s);l[s];const a=Reflect.deleteProperty(l,s);return a&&e&&O2(l,"delete",s,void 0),a}has(l,s){const e=Reflect.has(l,s);return(!U2(s)||!r5.has(s))&&l2(l,"has",s),e}ownKeys(l){return l2(l,"iterate",E(l)?"length":z1),Reflect.ownKeys(l)}}class lt extends z5{constructor(l=!1){super(!0,l)}set(l,s){return!0}deleteProperty(l,s){return!0}}const st=new m5,et=new lt,at=new m5(!0);const D3=c=>c,d4=c=>Reflect.getPrototypeOf(c);function nt(c,l,s){return function(...e){const a=this.__v_raw,n=$(a),o=N1(n),i=c==="entries"||c===Symbol.iterator&&o,t=c==="keys"&&o,z=a[c](...e),r=s?D3:l?O3:s2;return!l&&l2(n,"iterate",t?H3:z1),{next(){const{value:L,done:u}=z.next();return u?{value:L,done:u}:{value:i?[r(L[0]),r(L[1])]:r(L),done:u}},[Symbol.iterator](){return this}}}}function h4(c){return function(...l){return c==="delete"?!1:c==="clear"?void 0:this}}function ot(c,l){const s={get(a){const n=this.__v_raw,o=$(n),i=$(a);c||(Q2(a,i)&&l2(o,"get",a),l2(o,"get",i));const{has:t}=d4(o),z=l?D3:c?O3:s2;if(t.call(o,a))return z(n.get(a));if(t.call(o,i))return z(n.get(i));n!==o&&n.get(a)},get size(){const a=this.__v_raw;return!c&&l2($(a),"iterate",z1),Reflect.get(a,"size",a)},has(a){const n=this.__v_raw,o=$(n),i=$(a);return c||(Q2(a,i)&&l2(o,"has",a),l2(o,"has",i)),a===i?n.has(a):n.has(a)||n.has(i)},forEach(a,n){const o=this,i=o.__v_raw,t=$(i),z=l?D3:c?O3:s2;return!c&&l2(t,"iterate",z1),i.forEach((r,L)=>a.call(n,z(r),z(L),o))}};return Z(s,c?{add:h4("add"),set:h4("set"),delete:h4("delete"),clear:h4("clear")}:{add(a){!l&&!N2(a)&&!M1(a)&&(a=$(a));const n=$(this);return d4(n).has.call(n,a)||(n.add(a),O2(n,"add",a,a)),this},set(a,n){!l&&!N2(n)&&!M1(n)&&(n=$(n));const o=$(this),{has:i,get:t}=d4(o);let z=i.call(o,a);z||(a=$(a),z=i.call(o,a));const r=t.call(o,a);return o.set(a,n),z?Q2(n,r)&&O2(o,"set",a,n):O2(o,"add",a,n),this},delete(a){const n=$(this),{has:o,get:i}=d4(n);let t=o.call(n,a);t||(a=$(a),t=o.call(n,a)),i&&i.call(n,a);const z=n.delete(a);return t&&O2(n,"delete",a,void 0),z},clear(){const a=$(this),n=a.size!==0,o=a.clear();return n&&O2(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=nt(a,c,l)}),s}function h0(c,l){const s=ot(c,l);return(e,a,n)=>a==="__v_isReactive"?!c:a==="__v_isReadonly"?c:a==="__v_raw"?e:Reflect.get(I(s,a)&&a in e?s:e,a,n)}const it={get:h0(!1,!1)},tt={get:h0(!1,!0)},ft={get:h0(!0,!1)};const L5=new WeakMap,M5=new WeakMap,p5=new WeakMap,rt=new WeakMap;function zt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(c){return c.__v_skip||!Object.isExtensible(c)?0:zt(Hi(c))}function g0(c){return M1(c)?c:x0(c,!1,st,it,L5)}function Lt(c){return x0(c,!1,at,tt,M5)}function u5(c){return x0(c,!0,et,ft,p5)}function x0(c,l,s,e,a){if(!X(c)||c.__v_raw&&!(l&&c.__v_isReactive))return c;const n=a.get(c);if(n)return n;const o=mt(c);if(o===0)return c;const i=new Proxy(c,o===2?e:s);return a.set(c,i),i}function b1(c){return M1(c)?b1(c.__v_raw):!!(c&&c.__v_isReactive)}function M1(c){return!!(c&&c.__v_isReadonly)}function N2(c){return!!(c&&c.__v_isShallow)}function N0(c){return c?!!c.__v_raw:!1}function $(c){const l=c&&c.__v_raw;return l?$(l):c}function Mt(c){return!I(c,"__v_skip")&&Object.isExtensible(c)&&Q8(c,"__v_skip",!0),c}const s2=c=>X(c)?g0(c):c,O3=c=>X(c)?u5(c):c;function a2(c){return c?c.__v_isRef===!0:!1}function X6(c){return pt(c,!1)}function pt(c,l){return a2(c)?c:new ut(c,l)}class ut{constructor(l,s){this.dep=new d0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?l:$(l),this._value=s?l:s2(l),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(l){const s=this._rawValue,e=this.__v_isShallow||N2(l)||M1(l);l=e?l:$(l),Q2(l,s)&&(this._rawValue=l,this._value=e?l:s2(l),this.dep.trigger())}}function Ct(c){return a2(c)?c.value:c}const dt={get:(c,l,s)=>l==="__v_raw"?c:Ct(Reflect.get(c,l,s)),set:(c,l,s,e)=>{const a=c[l];return a2(a)&&!a2(s)?(a.value=s,!0):Reflect.set(c,l,s,e)}};function C5(c){return b1(c)?c:new Proxy(c,dt)}class ht{constructor(l,s,e){this.fn=l,this.setter=s,this._value=void 0,this.dep=new d0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=X1-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=e}notify(){if(this.flags|=16,!(this.flags&8)&&G!==this)return a5(this,!0),!0}get value(){const l=this.dep.track();return i5(this),l&&(l.version=this.dep.version),this._value}set value(l){this.setter&&this.setter(l)}}function gt(c,l,s=!1){let e,a;return R(c)?e=c:(e=c.get,a=c.set),new ht(e,a,s)}const g4={},k4=new WeakMap;let t1;function xt(c,l=!1,s=t1){if(s){let e=k4.get(s);e||k4.set(s,e=[]),e.push(c)}}function Nt(c,l,s=j){const{immediate:e,deep:a,once:n,scheduler:o,augmentJob:i,call:t}=s,z=A=>a?A:N2(A)||a===!1||a===0?X2(A,1):X2(A);let r,L,u,b,B=!1,F=!1;if(a2(c)?(L=()=>c.value,B=N2(c)):b1(c)?(L=()=>z(c),B=!0):E(c)?(F=!0,B=c.some(A=>b1(A)||N2(A)),L=()=>c.map(A=>{if(a2(A))return A.value;if(b1(A))return z(A);if(R(A))return t?t(A,2):A()})):R(c)?l?L=t?()=>t(c,2):c:L=()=>{if(u){l1();try{u()}finally{s1()}}const A=t1;t1=r;try{return t?t(c,3,[b]):c(b)}finally{t1=A}}:L=E2,l&&a){const A=L,D=a===!0?1/0:a;L=()=>X2(A(),D)}const O=Ki(),g=()=>{r.stop(),O&&O.active&&z0(O.effects,r)};if(n&&l){const A=l;l=(...D)=>{A(...D),g()}}let w=F?new Array(c.length).fill(g4):g4;const P=A=>{if(!(!(r.flags&1)||!r.dirty&&!A))if(l){const D=r.run();if(a||B||(F?D.some((z2,J)=>Q2(z2,w[J])):Q2(D,w))){u&&u();const z2=t1;t1=r;try{const J=[D,w===g4?void 0:F&&w[0]===g4?[]:w,b];t?t(l,3,J):l(...J),w=D}finally{t1=z2}}}else r.run()};return i&&i(P),r=new s5(L),r.scheduler=o?()=>o(P,!1):P,b=A=>xt(A,!1,r),u=r.onStop=()=>{const A=k4.get(r);if(A){if(t)t(A,4);else for(const D of A)D();k4.delete(r)}},l?e?P(!0):w=r.run():o?o(P.bind(null,!0),!0):r.run(),g.pause=r.pause.bind(r),g.resume=r.resume.bind(r),g.stop=g,g}function X2(c,l=1/0,s){if(l<=0||!X(c)||c.__v_skip||(s=s||new Set,s.has(c)))return c;if(s.add(c),l--,a2(c))X2(c.value,l,s);else if(E(c))for(let e=0;e<c.length;e++)X2(c[e],l,s);else if(V8(c)||N1(c))c.forEach(e=>{X2(e,l,s)});else if(Y8(c)){for(const e in c)X2(c[e],l,s);for(const e of Object.getOwnPropertySymbols(c))Object.prototype.propertyIsEnumerable.call(c,e)&&X2(c[e],l,s)}return c}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function a4(c,l,s,e){try{return e?c(...e):c()}catch(a){W4(a,l,s)}}function B2(c,l,s,e){if(R(c)){const a=a4(c,l,s,e);return a&&K8(a)&&a.catch(n=>{W4(n,l,s)}),a}if(E(c)){const a=[];for(let n=0;n<c.length;n++)a.push(B2(c[n],l,s,e));return a}}function W4(c,l,s,e=!0){const a=l?l.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=l&&l.appContext.config||j;if(l){let i=l.parent;const t=l.proxy,z=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const r=i.ec;if(r){for(let L=0;L<r.length;L++)if(r[L](c,t,z)===!1)return}i=i.parent}if(n){l1(),a4(n,null,10,[c,t,z]),s1();return}}bt(c,s,a,e,o)}function bt(c,l,s,e=!0,a=!1){if(a)throw c;console.error(c)}const i2=[];let T2=-1;const S1=[];let V2=null,h1=0;const d5=Promise.resolve();let v4=null;function h5(c){const l=v4||d5;return c?l.then(this?c.bind(this):c):l}function St(c){let l=T2+1,s=i2.length;for(;l<s;){const e=l+s>>>1,a=i2[e],n=Q1(a);n<c||n===c&&a.flags&2?l=e+1:s=e}return l}function b0(c){if(!(c.flags&1)){const l=Q1(c),s=i2[i2.length-1];!s||!(c.flags&2)&&l>=Q1(s)?i2.push(c):i2.splice(St(l),0,c),c.flags|=1,g5()}}function g5(){v4||(v4=d5.then(N5))}function wt(c){E(c)?S1.push(...c):V2&&c.id===-1?V2.splice(h1+1,0,c):c.flags&1||(S1.push(c),c.flags|=1),g5()}function Y6(c,l,s=T2+1){for(;s<i2.length;s++){const e=i2[s];if(e&&e.flags&2){if(c&&e.id!==c.uid)continue;i2.splice(s,1),s--,e.flags&4&&(e.flags&=-2),e(),e.flags&4||(e.flags&=-2)}}}function x5(c){if(S1.length){const l=[...new Set(S1)].sort((s,e)=>Q1(s)-Q1(e));if(S1.length=0,V2){V2.push(...l);return}for(V2=l,h1=0;h1<V2.length;h1++){const s=V2[h1];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}V2=null,h1=0}}const Q1=c=>c.id==null?c.flags&2?-1:1/0:c.id;function N5(c){try{for(T2=0;T2<i2.length;T2++){const l=i2[T2];l&&!(l.flags&8)&&(l.flags&4&&(l.flags&=-2),a4(l,l.i,l.i?15:14),l.flags&4||(l.flags&=-2))}}finally{for(;T2<i2.length;T2++){const l=i2[T2];l&&(l.flags&=-2)}T2=-1,i2.length=0,x5(),v4=null,(i2.length||S1.length)&&N5()}}let t2=null,b5=null;function T4(c){const l=t2;return t2=c,b5=c&&c.type.__scopeId||null,l}function $3(c,l=t2,s){if(!l||c._n)return c;const e=(...a)=>{e._d&&n8(-1);const n=T4(l);let o;try{o=c(...a)}finally{T4(n),e._d&&n8(1)}return o};return e._n=!0,e._c=!0,e._d=!0,e}function o1(c,l,s,e){const a=c.dirs,n=l&&l.dirs;for(let o=0;o<a.length;o++){const i=a[o];n&&(i.oldValue=n[o].value);let t=i.dir[e];t&&(l1(),B2(t,s,8,[c.el,i,c,l]),s1())}}const yt=Symbol("_vte"),At=c=>c.__isTeleport;function S0(c,l){c.shapeFlag&6&&c.component?(c.transition=l,S0(c.component.subTree,l)):c.shapeFlag&128?(c.ssContent.transition=l.clone(c.ssContent),c.ssFallback.transition=l.clone(c.ssFallback)):c.transition=l}/*! #__NO_SIDE_EFFECTS__ */function w0(c,l){return R(c)?Z({name:c.name},l,{setup:c}):c}function S5(c){c.ids=[c.ids[0]+c.ids[2]+++"-",0,0]}function P4(c,l,s,e,a=!1){if(E(c)){c.forEach((B,F)=>P4(B,l&&(E(l)?l[F]:l),s,e,a));return}if(w1(e)&&!a){e.shapeFlag&512&&e.type.__asyncResolved&&e.component.subTree.component&&P4(c,l,s,e.component.subTree);return}const n=e.shapeFlag&4?T0(e.component):e.el,o=a?null:n,{i,r:t}=c,z=l&&l.r,r=i.refs===j?i.refs={}:i.refs,L=i.setupState,u=$(L),b=L===j?()=>!1:B=>I(u,B);if(z!=null&&z!==t&&(Q(z)?(r[z]=null,b(z)&&(L[z]=null)):a2(z)&&(z.value=null)),R(t))a4(t,i,12,[o,r]);else{const B=Q(t),F=a2(t);if(B||F){const O=()=>{if(c.f){const g=B?b(t)?L[t]:r[t]:t.value;a?E(g)&&z0(g,n):E(g)?g.includes(n)||g.push(n):B?(r[t]=[n],b(t)&&(L[t]=r[t])):(t.value=[n],c.k&&(r[c.k]=t.value))}else B?(r[t]=o,b(t)&&(L[t]=o)):F&&(t.value=o,c.k&&(r[c.k]=o))};o?(O.id=-1,p2(O,s)):O()}}}q4().requestIdleCallback;q4().cancelIdleCallback;const w1=c=>!!c.type.__asyncLoader,w5=c=>c.type.__isKeepAlive;function kt(c,l){y5(c,"a",l)}function vt(c,l){y5(c,"da",l)}function y5(c,l,s=e2){const e=c.__wdc||(c.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return c()});if(G4(l,e,s),s){let a=s.parent;for(;a&&a.parent;)w5(a.parent.vnode)&&Tt(e,l,s,a),a=a.parent}}function Tt(c,l,s,e){const a=G4(l,c,e,!0);y0(()=>{z0(e[l],a)},s)}function G4(c,l,s=e2,e=!1){if(s){const a=s[c]||(s[c]=[]),n=l.__weh||(l.__weh=(...o)=>{l1();const i=n4(s),t=B2(l,s,c,o);return i(),s1(),t});return e?a.unshift(n):a.push(n),n}}const W2=c=>(l,s=e2)=>{(!l4||c==="sp")&&G4(c,(...e)=>l(...e),s)},Pt=W2("bm"),A5=W2("m"),Ft=W2("bu"),_t=W2("u"),Et=W2("bum"),y0=W2("um"),Bt=W2("sp"),Rt=W2("rtg"),Ht=W2("rtc");function Dt(c,l=e2){G4("ec",c,l)}const Ot="components";function $t(c,l){return qt(Ot,c,!0,l)||c}const It=Symbol.for("v-ndc");function qt(c,l,s=!0,e=!1){const a=t2||e2;if(a){const n=a.type;{const i=_f(n,!1);if(i&&(i===l||i===b2(l)||i===I4(b2(l))))return n}const o=Q6(a[c]||n[c],l)||Q6(a.appContext[c],l);return!o&&e?n:o}}function Q6(c,l){return c&&(c[l]||c[b2(l)]||c[I4(b2(l))])}function Ut(c,l,s,e){let a;const n=s,o=E(c);if(o||Q(c)){const i=o&&b1(c);let t=!1;i&&(t=!N2(c),c=U4(c)),a=new Array(c.length);for(let z=0,r=c.length;z<r;z++)a[z]=l(t?s2(c[z]):c[z],z,void 0,n)}else if(typeof c=="number"){a=new Array(c);for(let i=0;i<c;i++)a[i]=l(i+1,i,void 0,n)}else if(X(c))if(c[Symbol.iterator])a=Array.from(c,(i,t)=>l(i,t,void 0,n));else{const i=Object.keys(c);a=new Array(i.length);for(let t=0,z=i.length;t<z;t++){const r=i[t];a[t]=l(c[r],r,t,n)}}else a=[];return a}function Wt(c,l,s={},e,a){if(t2.ce||t2.parent&&w1(t2.parent)&&t2.parent.ce)return J1(),G3(C2,null,[r2("slot",s,e)],64);let n=c[l];n&&n._c&&(n._d=!1),J1();const o=n&&k5(n(s)),i=s.key||o&&o.key,t=G3(C2,{key:(i&&!U2(i)?i:`_${l}`)+(!o&&e?"_fb":"")},o||[],o&&c._===1?64:-2);return t.scopeId&&(t.slotScopeIds=[t.scopeId+"-s"]),n&&n._c&&(n._d=!0),t}function k5(c){return c.some(l=>c4(l)?!(l.type===k1||l.type===C2&&!k5(l.children)):!0)?c:null}const I3=c=>c?X5(c)?T0(c):I3(c.parent):null,G1=Z(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>I3(c.parent),$root:c=>I3(c.root),$host:c=>c.ce,$emit:c=>c.emit,$options:c=>A0(c),$forceUpdate:c=>c.f||(c.f=()=>{b0(c.update)}),$nextTick:c=>c.n||(c.n=h5.bind(c.proxy)),$watch:c=>Lf.bind(c)}),b3=(c,l)=>c!==j&&!c.__isScriptSetup&&I(c,l),Gt={get({_:c},l){if(l==="__v_skip")return!0;const{ctx:s,setupState:e,data:a,props:n,accessCache:o,type:i,appContext:t}=c;let z;if(l[0]!=="$"){const b=o[l];if(b!==void 0)switch(b){case 1:return e[l];case 2:return a[l];case 4:return s[l];case 3:return n[l]}else{if(b3(e,l))return o[l]=1,e[l];if(a!==j&&I(a,l))return o[l]=2,a[l];if((z=c.propsOptions[0])&&I(z,l))return o[l]=3,n[l];if(s!==j&&I(s,l))return o[l]=4,s[l];q3&&(o[l]=0)}}const r=G1[l];let L,u;if(r)return l==="$attrs"&&l2(c.attrs,"get",""),r(c);if((L=i.__cssModules)&&(L=L[l]))return L;if(s!==j&&I(s,l))return o[l]=4,s[l];if(u=t.config.globalProperties,I(u,l))return u[l]},set({_:c},l,s){const{data:e,setupState:a,ctx:n}=c;return b3(a,l)?(a[l]=s,!0):e!==j&&I(e,l)?(e[l]=s,!0):I(c.props,l)||l[0]==="$"&&l.slice(1)in c?!1:(n[l]=s,!0)},has({_:{data:c,setupState:l,accessCache:s,ctx:e,appContext:a,propsOptions:n}},o){let i;return!!s[o]||c!==j&&I(c,o)||b3(l,o)||(i=n[0])&&I(i,o)||I(e,o)||I(G1,o)||I(a.config.globalProperties,o)},defineProperty(c,l,s){return s.get!=null?c._.accessCache[l]=0:I(s,"value")&&this.set(c,l,s.value,null),Reflect.defineProperty(c,l,s)}};function J6(c){return E(c)?c.reduce((l,s)=>(l[s]=null,l),{}):c}let q3=!0;function jt(c){const l=A0(c),s=c.proxy,e=c.ctx;q3=!1,l.beforeCreate&&Z6(l.beforeCreate,c,"bc");const{data:a,computed:n,methods:o,watch:i,provide:t,inject:z,created:r,beforeMount:L,mounted:u,beforeUpdate:b,updated:B,activated:F,deactivated:O,beforeDestroy:g,beforeUnmount:w,destroyed:P,unmounted:A,render:D,renderTracked:z2,renderTriggered:J,errorCaptured:y2,serverPrefetch:L4,expose:e1,inheritAttrs:_1,components:M4,directives:p4,filters:p3}=l;if(z&&Vt(z,e,null),o)for(const Y in o){const U=o[Y];R(U)&&(e[Y]=U.bind(s))}if(a){const Y=a.call(s,s);X(Y)&&(c.data=g0(Y))}if(q3=!0,n)for(const Y in n){const U=n[Y],a1=R(U)?U.bind(s,s):R(U.get)?U.get.bind(s,s):E2,u4=!R(U)&&R(U.set)?U.set.bind(s):E2,n1=f1({get:a1,set:u4});Object.defineProperty(e,Y,{enumerable:!0,configurable:!0,get:()=>n1.value,set:A2=>n1.value=A2})}if(i)for(const Y in i)v5(i[Y],e,s,Y);if(t){const Y=R(t)?t.call(s):t;Reflect.ownKeys(Y).forEach(U=>{Zt(U,Y[U])})}r&&Z6(r,c,"c");function n2(Y,U){E(U)?U.forEach(a1=>Y(a1.bind(s))):U&&Y(U.bind(s))}if(n2(Pt,L),n2(A5,u),n2(Ft,b),n2(_t,B),n2(kt,F),n2(vt,O),n2(Dt,y2),n2(Ht,z2),n2(Rt,J),n2(Et,w),n2(y0,A),n2(Bt,L4),E(e1))if(e1.length){const Y=c.exposed||(c.exposed={});e1.forEach(U=>{Object.defineProperty(Y,U,{get:()=>s[U],set:a1=>s[U]=a1})})}else c.exposed||(c.exposed={});D&&c.render===E2&&(c.render=D),_1!=null&&(c.inheritAttrs=_1),M4&&(c.components=M4),p4&&(c.directives=p4),L4&&S5(c)}function Vt(c,l,s=E2){E(c)&&(c=U3(c));for(const e in c){const a=c[e];let n;X(a)?"default"in a?n=N4(a.from||e,a.default,!0):n=N4(a.from||e):n=N4(a),a2(n)?Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):l[e]=n}}function Z6(c,l,s){B2(E(c)?c.map(e=>e.bind(l.proxy)):c.bind(l.proxy),l,s)}function v5(c,l,s,e){let a=e.includes(".")?U5(s,e):()=>s[e];if(Q(c)){const n=l[c];R(n)&&b4(a,n)}else if(R(c))b4(a,c.bind(s));else if(X(c))if(E(c))c.forEach(n=>v5(n,l,s,e));else{const n=R(c.handler)?c.handler.bind(s):l[c.handler];R(n)&&b4(a,n,c)}}function A0(c){const l=c.type,{mixins:s,extends:e}=l,{mixins:a,optionsCache:n,config:{optionMergeStrategies:o}}=c.appContext,i=n.get(l);let t;return i?t=i:!a.length&&!s&&!e?t=l:(t={},a.length&&a.forEach(z=>F4(t,z,o,!0)),F4(t,l,o)),X(l)&&n.set(l,t),t}function F4(c,l,s,e=!1){const{mixins:a,extends:n}=l;n&&F4(c,n,s,!0),a&&a.forEach(o=>F4(c,o,s,!0));for(const o in l)if(!(e&&o==="expose")){const i=Kt[o]||s&&s[o];c[o]=i?i(c[o],l[o]):l[o]}return c}const Kt={data:c8,props:l8,emits:l8,methods:O1,computed:O1,beforeCreate:o2,created:o2,beforeMount:o2,mounted:o2,beforeUpdate:o2,updated:o2,beforeDestroy:o2,beforeUnmount:o2,destroyed:o2,unmounted:o2,activated:o2,deactivated:o2,errorCaptured:o2,serverPrefetch:o2,components:O1,directives:O1,watch:Yt,provide:c8,inject:Xt};function c8(c,l){return l?c?function(){return Z(R(c)?c.call(this,this):c,R(l)?l.call(this,this):l)}:l:c}function Xt(c,l){return O1(U3(c),U3(l))}function U3(c){if(E(c)){const l={};for(let s=0;s<c.length;s++)l[c[s]]=c[s];return l}return c}function o2(c,l){return c?[...new Set([].concat(c,l))]:l}function O1(c,l){return c?Z(Object.create(null),c,l):l}function l8(c,l){return c?E(c)&&E(l)?[...new Set([...c,...l])]:Z(Object.create(null),J6(c),J6(l??{})):l}function Yt(c,l){if(!c)return l;if(!l)return c;const s=Z(Object.create(null),c);for(const e in l)s[e]=o2(c[e],l[e]);return s}function T5(){return{app:null,config:{isNativeTag:Bi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qt=0;function Jt(c,l){return function(e,a=null){R(e)||(e=Z({},e)),a!=null&&!X(a)&&(a=null);const n=T5(),o=new WeakSet,i=[];let t=!1;const z=n.app={_uid:Qt++,_component:e,_props:a,_container:null,_context:n,_instance:null,version:Rf,get config(){return n.config},set config(r){},use(r,...L){return o.has(r)||(r&&R(r.install)?(o.add(r),r.install(z,...L)):R(r)&&(o.add(r),r(z,...L))),z},mixin(r){return n.mixins.includes(r)||n.mixins.push(r),z},component(r,L){return L?(n.components[r]=L,z):n.components[r]},directive(r,L){return L?(n.directives[r]=L,z):n.directives[r]},mount(r,L,u){if(!t){const b=z._ceVNode||r2(e,a);return b.appContext=n,u===!0?u="svg":u===!1&&(u=void 0),L&&l?l(b,r):c(b,r,u),t=!0,z._container=r,r.__vue_app__=z,T0(b.component)}},onUnmount(r){i.push(r)},unmount(){t&&(B2(i,z._instance,16),c(null,z._container),delete z._container.__vue_app__)},provide(r,L){return n.provides[r]=L,z},runWithContext(r){const L=y1;y1=z;try{return r()}finally{y1=L}}};return z}}let y1=null;function Zt(c,l){if(e2){let s=e2.provides;const e=e2.parent&&e2.parent.provides;e===s&&(s=e2.provides=Object.create(e)),s[c]=l}}function N4(c,l,s=!1){const e=e2||t2;if(e||y1){const a=y1?y1._context.provides:e?e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:void 0;if(a&&c in a)return a[c];if(arguments.length>1)return s&&R(l)?l.call(e&&e.proxy):l}}const P5={},F5=()=>Object.create(P5),_5=c=>Object.getPrototypeOf(c)===P5;function cf(c,l,s,e=!1){const a={},n=F5();c.propsDefaults=Object.create(null),E5(c,l,a,n);for(const o in c.propsOptions[0])o in a||(a[o]=void 0);s?c.props=e?a:Lt(a):c.type.props?c.props=a:c.props=n,c.attrs=n}function lf(c,l,s,e){const{props:a,attrs:n,vnode:{patchFlag:o}}=c,i=$(a),[t]=c.propsOptions;let z=!1;if((e||o>0)&&!(o&16)){if(o&8){const r=c.vnode.dynamicProps;for(let L=0;L<r.length;L++){let u=r[L];if(j4(c.emitsOptions,u))continue;const b=l[u];if(t)if(I(n,u))b!==n[u]&&(n[u]=b,z=!0);else{const B=b2(u);a[B]=W3(t,i,B,b,c,!1)}else b!==n[u]&&(n[u]=b,z=!0)}}}else{E5(c,l,a,n)&&(z=!0);let r;for(const L in i)(!l||!I(l,L)&&((r=C1(L))===L||!I(l,r)))&&(t?s&&(s[L]!==void 0||s[r]!==void 0)&&(a[L]=W3(t,i,L,void 0,c,!0)):delete a[L]);if(n!==i)for(const L in n)(!l||!I(l,L))&&(delete n[L],z=!0)}z&&O2(c.attrs,"set","")}function E5(c,l,s,e){const[a,n]=c.propsOptions;let o=!1,i;if(l)for(let t in l){if(q1(t))continue;const z=l[t];let r;a&&I(a,r=b2(t))?!n||!n.includes(r)?s[r]=z:(i||(i={}))[r]=z:j4(c.emitsOptions,t)||(!(t in e)||z!==e[t])&&(e[t]=z,o=!0)}if(n){const t=$(s),z=i||j;for(let r=0;r<n.length;r++){const L=n[r];s[L]=W3(a,t,L,z[L],c,!I(z,L))}}return o}function W3(c,l,s,e,a,n){const o=c[s];if(o!=null){const i=I(o,"default");if(i&&e===void 0){const t=o.default;if(o.type!==Function&&!o.skipFactory&&R(t)){const{propsDefaults:z}=a;if(s in z)e=z[s];else{const r=n4(a);e=z[s]=t.call(null,l),r()}}else e=t;a.ce&&a.ce._setProp(s,e)}o[0]&&(n&&!i?e=!1:o[1]&&(e===""||e===C1(s))&&(e=!0))}return e}const sf=new WeakMap;function B5(c,l,s=!1){const e=s?sf:l.propsCache,a=e.get(c);if(a)return a;const n=c.props,o={},i=[];let t=!1;if(!R(c)){const r=L=>{t=!0;const[u,b]=B5(L,l,!0);Z(o,u),b&&i.push(...b)};!s&&l.mixins.length&&l.mixins.forEach(r),c.extends&&r(c.extends),c.mixins&&c.mixins.forEach(r)}if(!n&&!t)return X(c)&&e.set(c,x1),x1;if(E(n))for(let r=0;r<n.length;r++){const L=b2(n[r]);s8(L)&&(o[L]=j)}else if(n)for(const r in n){const L=b2(r);if(s8(L)){const u=n[r],b=o[L]=E(u)||R(u)?{type:u}:Z({},u),B=b.type;let F=!1,O=!0;if(E(B))for(let g=0;g<B.length;++g){const w=B[g],P=R(w)&&w.name;if(P==="Boolean"){F=!0;break}else P==="String"&&(O=!1)}else F=R(B)&&B.name==="Boolean";b[0]=F,b[1]=O,(F||I(b,"default"))&&i.push(L)}}const z=[o,i];return X(c)&&e.set(c,z),z}function s8(c){return c[0]!=="$"&&!q1(c)}const R5=c=>c[0]==="_"||c==="$stable",k0=c=>E(c)?c.map(P2):[P2(c)],ef=(c,l,s)=>{if(l._n)return l;const e=$3((...a)=>k0(l(...a)),s);return e._c=!1,e},H5=(c,l,s)=>{const e=c._ctx;for(const a in c){if(R5(a))continue;const n=c[a];if(R(n))l[a]=ef(a,n,e);else if(n!=null){const o=k0(n);l[a]=()=>o}}},D5=(c,l)=>{const s=k0(l);c.slots.default=()=>s},O5=(c,l,s)=>{for(const e in l)(s||e!=="_")&&(c[e]=l[e])},af=(c,l,s)=>{const e=c.slots=F5();if(c.vnode.shapeFlag&32){const a=l._;a?(O5(e,l,s),s&&Q8(e,"_",a,!0)):H5(l,e)}else l&&D5(c,l)},nf=(c,l,s)=>{const{vnode:e,slots:a}=c;let n=!0,o=j;if(e.shapeFlag&32){const i=l._;i?s&&i===1?n=!1:O5(a,l,s):(n=!l.$stable,H5(l,a)),o=l}else l&&(D5(c,l),o={default:1});if(n)for(const i in a)!R5(i)&&o[i]==null&&delete a[i]},p2=gf;function of(c){return tf(c)}function tf(c,l){const s=q4();s.__VUE__=!0;const{insert:e,remove:a,patchProp:n,createElement:o,createText:i,createComment:t,setText:z,setElementText:r,parentNode:L,nextSibling:u,setScopeId:b=E2,insertStaticContent:B}=c,F=(f,m,M,d=null,p=null,C=null,S=void 0,N=null,x=!!m.dynamicChildren)=>{if(f===m)return;f&&!D1(f,m)&&(d=C4(f),A2(f,p,C,!0),f=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:h,ref:T,shapeFlag:y}=m;switch(h){case V4:O(f,m,M,d);break;case k1:g(f,m,M,d);break;case y3:f==null&&w(m,M,d,S);break;case C2:M4(f,m,M,d,p,C,S,N,x);break;default:y&1?D(f,m,M,d,p,C,S,N,x):y&6?p4(f,m,M,d,p,C,S,N,x):(y&64||y&128)&&h.process(f,m,M,d,p,C,S,N,x,B1)}T!=null&&p&&P4(T,f&&f.ref,C,m||f,!m)},O=(f,m,M,d)=>{if(f==null)e(m.el=i(m.children),M,d);else{const p=m.el=f.el;m.children!==f.children&&z(p,m.children)}},g=(f,m,M,d)=>{f==null?e(m.el=t(m.children||""),M,d):m.el=f.el},w=(f,m,M,d)=>{[f.el,f.anchor]=B(f.children,m,M,d,f.el,f.anchor)},P=({el:f,anchor:m},M,d)=>{let p;for(;f&&f!==m;)p=u(f),e(f,M,d),f=p;e(m,M,d)},A=({el:f,anchor:m})=>{let M;for(;f&&f!==m;)M=u(f),a(f),f=M;a(m)},D=(f,m,M,d,p,C,S,N,x)=>{m.type==="svg"?S="svg":m.type==="math"&&(S="mathml"),f==null?z2(m,M,d,p,C,S,N,x):L4(f,m,p,C,S,N,x)},z2=(f,m,M,d,p,C,S,N)=>{let x,h;const{props:T,shapeFlag:y,transition:v,dirs:_}=f;if(x=f.el=o(f.type,C,T&&T.is,T),y&8?r(x,f.children):y&16&&y2(f.children,x,null,d,p,S3(f,C),S,N),_&&o1(f,null,d,"created"),J(x,f,f.scopeId,S,d),T){for(const W in T)W!=="value"&&!q1(W)&&n(x,W,null,T[W],C,d);"value"in T&&n(x,"value",null,T.value,C),(h=T.onVnodeBeforeMount)&&v2(h,d,f)}_&&o1(f,null,d,"beforeMount");const H=ff(p,v);H&&v.beforeEnter(x),e(x,m,M),((h=T&&T.onVnodeMounted)||H||_)&&p2(()=>{h&&v2(h,d,f),H&&v.enter(x),_&&o1(f,null,d,"mounted")},p)},J=(f,m,M,d,p)=>{if(M&&b(f,M),d)for(let C=0;C<d.length;C++)b(f,d[C]);if(p){let C=p.subTree;if(m===C||G5(C.type)&&(C.ssContent===m||C.ssFallback===m)){const S=p.vnode;J(f,S,S.scopeId,S.slotScopeIds,p.parent)}}},y2=(f,m,M,d,p,C,S,N,x=0)=>{for(let h=x;h<f.length;h++){const T=f[h]=N?K2(f[h]):P2(f[h]);F(null,T,m,M,d,p,C,S,N)}},L4=(f,m,M,d,p,C,S)=>{const N=m.el=f.el;let{patchFlag:x,dynamicChildren:h,dirs:T}=m;x|=f.patchFlag&16;const y=f.props||j,v=m.props||j;let _;if(M&&i1(M,!1),(_=v.onVnodeBeforeUpdate)&&v2(_,M,m,f),T&&o1(m,f,M,"beforeUpdate"),M&&i1(M,!0),(y.innerHTML&&v.innerHTML==null||y.textContent&&v.textContent==null)&&r(N,""),h?e1(f.dynamicChildren,h,N,M,d,S3(m,p),C):S||U(f,m,N,null,M,d,S3(m,p),C,!1),x>0){if(x&16)_1(N,y,v,M,p);else if(x&2&&y.class!==v.class&&n(N,"class",null,v.class,p),x&4&&n(N,"style",y.style,v.style,p),x&8){const H=m.dynamicProps;for(let W=0;W<H.length;W++){const q=H[W],m2=y[q],c2=v[q];(c2!==m2||q==="value")&&n(N,q,m2,c2,p,M)}}x&1&&f.children!==m.children&&r(N,m.children)}else!S&&h==null&&_1(N,y,v,M,p);((_=v.onVnodeUpdated)||T)&&p2(()=>{_&&v2(_,M,m,f),T&&o1(m,f,M,"updated")},d)},e1=(f,m,M,d,p,C,S)=>{for(let N=0;N<m.length;N++){const x=f[N],h=m[N],T=x.el&&(x.type===C2||!D1(x,h)||x.shapeFlag&70)?L(x.el):M;F(x,h,T,null,d,p,C,S,!0)}},_1=(f,m,M,d,p)=>{if(m!==M){if(m!==j)for(const C in m)!q1(C)&&!(C in M)&&n(f,C,m[C],null,p,d);for(const C in M){if(q1(C))continue;const S=M[C],N=m[C];S!==N&&C!=="value"&&n(f,C,N,S,p,d)}"value"in M&&n(f,"value",m.value,M.value,p)}},M4=(f,m,M,d,p,C,S,N,x)=>{const h=m.el=f?f.el:i(""),T=m.anchor=f?f.anchor:i("");let{patchFlag:y,dynamicChildren:v,slotScopeIds:_}=m;_&&(N=N?N.concat(_):_),f==null?(e(h,M,d),e(T,M,d),y2(m.children||[],M,T,p,C,S,N,x)):y>0&&y&64&&v&&f.dynamicChildren?(e1(f.dynamicChildren,v,M,p,C,S,N),(m.key!=null||p&&m===p.subTree)&&$5(f,m,!0)):U(f,m,M,T,p,C,S,N,x)},p4=(f,m,M,d,p,C,S,N,x)=>{m.slotScopeIds=N,f==null?m.shapeFlag&512?p.ctx.activate(m,M,d,S,x):p3(m,M,d,p,C,S,x):O6(f,m,x)},p3=(f,m,M,d,p,C,S)=>{const N=f.component=kf(f,d,p);if(w5(f)&&(N.ctx.renderer=B1),vf(N,!1,S),N.asyncDep){if(p&&p.registerDep(N,n2,S),!f.el){const x=N.subTree=r2(k1);g(null,x,m,M)}}else n2(N,f,m,M,p,C,S)},O6=(f,m,M)=>{const d=m.component=f.component;if(df(f,m,M))if(d.asyncDep&&!d.asyncResolved){Y(d,m,M);return}else d.next=m,d.update();else m.el=f.el,d.vnode=m},n2=(f,m,M,d,p,C,S)=>{const N=()=>{if(f.isMounted){let{next:y,bu:v,u:_,parent:H,vnode:W}=f;{const L2=I5(f);if(L2){y&&(y.el=W.el,Y(f,y,S)),L2.asyncDep.then(()=>{f.isUnmounted||N()});return}}let q=y,m2;i1(f,!1),y?(y.el=W.el,Y(f,y,S)):y=W,v&&d3(v),(m2=y.props&&y.props.onVnodeBeforeUpdate)&&v2(m2,H,y,W),i1(f,!0);const c2=w3(f),S2=f.subTree;f.subTree=c2,F(S2,c2,L(S2.el),C4(S2),f,p,C),y.el=c2.el,q===null&&hf(f,c2.el),_&&p2(_,p),(m2=y.props&&y.props.onVnodeUpdated)&&p2(()=>v2(m2,H,y,W),p)}else{let y;const{el:v,props:_}=m,{bm:H,m:W,parent:q,root:m2,type:c2}=f,S2=w1(m);if(i1(f,!1),H&&d3(H),!S2&&(y=_&&_.onVnodeBeforeMount)&&v2(y,q,m),i1(f,!0),v&&U6){const L2=()=>{f.subTree=w3(f),U6(v,f.subTree,f,p,null)};S2&&c2.__asyncHydrate?c2.__asyncHydrate(v,f,L2):L2()}else{m2.ce&&m2.ce._injectChildStyle(c2);const L2=f.subTree=w3(f);F(null,L2,M,d,f,p,C),m.el=L2.el}if(W&&p2(W,p),!S2&&(y=_&&_.onVnodeMounted)){const L2=m;p2(()=>v2(y,q,L2),p)}(m.shapeFlag&256||q&&w1(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&p2(f.a,p),f.isMounted=!0,m=M=d=null}};f.scope.on();const x=f.effect=new s5(N);f.scope.off();const h=f.update=x.run.bind(x),T=f.job=x.runIfDirty.bind(x);T.i=f,T.id=f.uid,x.scheduler=()=>b0(T),i1(f,!0),h()},Y=(f,m,M)=>{m.component=f;const d=f.vnode.props;f.vnode=m,f.next=null,lf(f,m.props,d,M),nf(f,m.children,M),l1(),Y6(f),s1()},U=(f,m,M,d,p,C,S,N,x=!1)=>{const h=f&&f.children,T=f?f.shapeFlag:0,y=m.children,{patchFlag:v,shapeFlag:_}=m;if(v>0){if(v&128){u4(h,y,M,d,p,C,S,N,x);return}else if(v&256){a1(h,y,M,d,p,C,S,N,x);return}}_&8?(T&16&&E1(h,p,C),y!==h&&r(M,y)):T&16?_&16?u4(h,y,M,d,p,C,S,N,x):E1(h,p,C,!0):(T&8&&r(M,""),_&16&&y2(y,M,d,p,C,S,N,x))},a1=(f,m,M,d,p,C,S,N,x)=>{f=f||x1,m=m||x1;const h=f.length,T=m.length,y=Math.min(h,T);let v;for(v=0;v<y;v++){const _=m[v]=x?K2(m[v]):P2(m[v]);F(f[v],_,M,null,p,C,S,N,x)}h>T?E1(f,p,C,!0,!1,y):y2(m,M,d,p,C,S,N,x,y)},u4=(f,m,M,d,p,C,S,N,x)=>{let h=0;const T=m.length;let y=f.length-1,v=T-1;for(;h<=y&&h<=v;){const _=f[h],H=m[h]=x?K2(m[h]):P2(m[h]);if(D1(_,H))F(_,H,M,null,p,C,S,N,x);else break;h++}for(;h<=y&&h<=v;){const _=f[y],H=m[v]=x?K2(m[v]):P2(m[v]);if(D1(_,H))F(_,H,M,null,p,C,S,N,x);else break;y--,v--}if(h>y){if(h<=v){const _=v+1,H=_<T?m[_].el:d;for(;h<=v;)F(null,m[h]=x?K2(m[h]):P2(m[h]),M,H,p,C,S,N,x),h++}}else if(h>v)for(;h<=y;)A2(f[h],p,C,!0),h++;else{const _=h,H=h,W=new Map;for(h=H;h<=v;h++){const M2=m[h]=x?K2(m[h]):P2(m[h]);M2.key!=null&&W.set(M2.key,h)}let q,m2=0;const c2=v-H+1;let S2=!1,L2=0;const R1=new Array(c2);for(h=0;h<c2;h++)R1[h]=0;for(h=_;h<=y;h++){const M2=f[h];if(m2>=c2){A2(M2,p,C,!0);continue}let k2;if(M2.key!=null)k2=W.get(M2.key);else for(q=H;q<=v;q++)if(R1[q-H]===0&&D1(M2,m[q])){k2=q;break}k2===void 0?A2(M2,p,C,!0):(R1[k2-H]=h+1,k2>=L2?L2=k2:S2=!0,F(M2,m[k2],M,null,p,C,S,N,x),m2++)}const W6=S2?rf(R1):x1;for(q=W6.length-1,h=c2-1;h>=0;h--){const M2=H+h,k2=m[M2],G6=M2+1<T?m[M2+1].el:d;R1[h]===0?F(null,k2,M,G6,p,C,S,N,x):S2&&(q<0||h!==W6[q]?n1(k2,M,G6,2):q--)}}},n1=(f,m,M,d,p=null)=>{const{el:C,type:S,transition:N,children:x,shapeFlag:h}=f;if(h&6){n1(f.component.subTree,m,M,d);return}if(h&128){f.suspense.move(m,M,d);return}if(h&64){S.move(f,m,M,B1);return}if(S===C2){e(C,m,M);for(let y=0;y<x.length;y++)n1(x[y],m,M,d);e(f.anchor,m,M);return}if(S===y3){P(f,m,M);return}if(d!==2&&h&1&&N)if(d===0)N.beforeEnter(C),e(C,m,M),p2(()=>N.enter(C),p);else{const{leave:y,delayLeave:v,afterLeave:_}=N,H=()=>e(C,m,M),W=()=>{y(C,()=>{H(),_&&_()})};v?v(C,H,W):W()}else e(C,m,M)},A2=(f,m,M,d=!1,p=!1)=>{const{type:C,props:S,ref:N,children:x,dynamicChildren:h,shapeFlag:T,patchFlag:y,dirs:v,cacheIndex:_}=f;if(y===-2&&(p=!1),N!=null&&P4(N,null,M,f,!0),_!=null&&(m.renderCache[_]=void 0),T&256){m.ctx.deactivate(f);return}const H=T&1&&v,W=!w1(f);let q;if(W&&(q=S&&S.onVnodeBeforeUnmount)&&v2(q,m,f),T&6)Ei(f.component,M,d);else{if(T&128){f.suspense.unmount(M,d);return}H&&o1(f,null,m,"beforeUnmount"),T&64?f.type.remove(f,m,M,B1,d):h&&!h.hasOnce&&(C!==C2||y>0&&y&64)?E1(h,m,M,!1,!0):(C===C2&&y&384||!p&&T&16)&&E1(x,m,M),d&&$6(f)}(W&&(q=S&&S.onVnodeUnmounted)||H)&&p2(()=>{q&&v2(q,m,f),H&&o1(f,null,m,"unmounted")},M)},$6=f=>{const{type:m,el:M,anchor:d,transition:p}=f;if(m===C2){_i(M,d);return}if(m===y3){A(f);return}const C=()=>{a(M),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:S,delayLeave:N}=p,x=()=>S(M,C);N?N(f.el,C,x):x()}else C()},_i=(f,m)=>{let M;for(;f!==m;)M=u(f),a(f),f=M;a(m)},Ei=(f,m,M)=>{const{bum:d,scope:p,job:C,subTree:S,um:N,m:x,a:h}=f;e8(x),e8(h),d&&d3(d),p.stop(),C&&(C.flags|=8,A2(S,f,m,M)),N&&p2(N,m),p2(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},E1=(f,m,M,d=!1,p=!1,C=0)=>{for(let S=C;S<f.length;S++)A2(f[S],m,M,d,p)},C4=f=>{if(f.shapeFlag&6)return C4(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=u(f.anchor||f.el),M=m&&m[yt];return M?u(M):m};let u3=!1;const I6=(f,m,M)=>{f==null?m._vnode&&A2(m._vnode,null,null,!0):F(m._vnode||null,f,m,null,null,null,M),m._vnode=f,u3||(u3=!0,Y6(),x5(),u3=!1)},B1={p:F,um:A2,m:n1,r:$6,mt:p3,mc:y2,pc:U,pbc:e1,n:C4,o:c};let q6,U6;return{render:I6,hydrate:q6,createApp:Jt(I6,q6)}}function S3({type:c,props:l},s){return s==="svg"&&c==="foreignObject"||s==="mathml"&&c==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:s}function i1({effect:c,job:l},s){s?(c.flags|=32,l.flags|=4):(c.flags&=-33,l.flags&=-5)}function ff(c,l){return(!c||c&&!c.pendingBranch)&&l&&!l.persisted}function $5(c,l,s=!1){const e=c.children,a=l.children;if(E(e)&&E(a))for(let n=0;n<e.length;n++){const o=e[n];let i=a[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[n]=K2(a[n]),i.el=o.el),!s&&i.patchFlag!==-2&&$5(o,i)),i.type===V4&&(i.el=o.el)}}function rf(c){const l=c.slice(),s=[0];let e,a,n,o,i;const t=c.length;for(e=0;e<t;e++){const z=c[e];if(z!==0){if(a=s[s.length-1],c[a]<z){l[e]=a,s.push(e);continue}for(n=0,o=s.length-1;n<o;)i=n+o>>1,c[s[i]]<z?n=i+1:o=i;z<c[s[n]]&&(n>0&&(l[e]=s[n-1]),s[n]=e)}}for(n=s.length,o=s[n-1];n-- >0;)s[n]=o,o=l[o];return s}function I5(c){const l=c.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:I5(l)}function e8(c){if(c)for(let l=0;l<c.length;l++)c[l].flags|=8}const zf=Symbol.for("v-scx"),mf=()=>N4(zf);function b4(c,l,s){return q5(c,l,s)}function q5(c,l,s=j){const{immediate:e,deep:a,flush:n,once:o}=s,i=Z({},s),t=l&&e||!l&&n!=="post";let z;if(l4){if(n==="sync"){const b=mf();z=b.__watcherHandles||(b.__watcherHandles=[])}else if(!t){const b=()=>{};return b.stop=E2,b.resume=E2,b.pause=E2,b}}const r=e2;i.call=(b,B,F)=>B2(b,r,B,F);let L=!1;n==="post"?i.scheduler=b=>{p2(b,r&&r.suspense)}:n!=="sync"&&(L=!0,i.scheduler=(b,B)=>{B?b():b0(b)}),i.augmentJob=b=>{l&&(b.flags|=4),L&&(b.flags|=2,r&&(b.id=r.uid,b.i=r))};const u=Nt(c,l,i);return l4&&(z?z.push(u):t&&u()),u}function Lf(c,l,s){const e=this.proxy,a=Q(c)?c.includes(".")?U5(e,c):()=>e[c]:c.bind(e,e);let n;R(l)?n=l:(n=l.handler,s=l);const o=n4(this),i=q5(a,n.bind(e),s);return o(),i}function U5(c,l){const s=l.split(".");return()=>{let e=c;for(let a=0;a<s.length&&e;a++)e=e[s[a]];return e}}const Mf=(c,l)=>l==="modelValue"||l==="model-value"?c.modelModifiers:c[`${l}Modifiers`]||c[`${b2(l)}Modifiers`]||c[`${C1(l)}Modifiers`];function pf(c,l,...s){if(c.isUnmounted)return;const e=c.vnode.props||j;let a=s;const n=l.startsWith("update:"),o=n&&Mf(e,l.slice(7));o&&(o.trim&&(a=s.map(r=>Q(r)?r.trim():r)),o.number&&(a=s.map($i)));let i,t=e[i=C3(l)]||e[i=C3(b2(l))];!t&&n&&(t=e[i=C3(C1(l))]),t&&B2(t,c,6,a);const z=e[i+"Once"];if(z){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,B2(z,c,6,a)}}function W5(c,l,s=!1){const e=l.emitsCache,a=e.get(c);if(a!==void 0)return a;const n=c.emits;let o={},i=!1;if(!R(c)){const t=z=>{const r=W5(z,l,!0);r&&(i=!0,Z(o,r))};!s&&l.mixins.length&&l.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!n&&!i?(X(c)&&e.set(c,null),null):(E(n)?n.forEach(t=>o[t]=null):Z(o,n),X(c)&&e.set(c,o),o)}function j4(c,l){return!c||!D4(l)?!1:(l=l.slice(2).replace(/Once$/,""),I(c,l[0].toLowerCase()+l.slice(1))||I(c,C1(l))||I(c,l))}function w3(c){const{type:l,vnode:s,proxy:e,withProxy:a,propsOptions:[n],slots:o,attrs:i,emit:t,render:z,renderCache:r,props:L,data:u,setupState:b,ctx:B,inheritAttrs:F}=c,O=T4(c);let g,w;try{if(s.shapeFlag&4){const A=a||e,D=A;g=P2(z.call(D,A,r,L,b,u,B)),w=i}else{const A=l;g=P2(A.length>1?A(L,{attrs:i,slots:o,emit:t}):A(L,null)),w=l.props?i:uf(i)}}catch(A){j1.length=0,W4(A,c,1),g=r2(k1)}let P=g;if(w&&F!==!1){const A=Object.keys(w),{shapeFlag:D}=P;A.length&&D&7&&(n&&A.some(r0)&&(w=Cf(w,n)),P=v1(P,w,!1,!0))}return s.dirs&&(P=v1(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(s.dirs):s.dirs),s.transition&&S0(P,s.transition),g=P,T4(O),g}const uf=c=>{let l;for(const s in c)(s==="class"||s==="style"||D4(s))&&((l||(l={}))[s]=c[s]);return l},Cf=(c,l)=>{const s={};for(const e in c)(!r0(e)||!(e.slice(9)in l))&&(s[e]=c[e]);return s};function df(c,l,s){const{props:e,children:a,component:n}=c,{props:o,children:i,patchFlag:t}=l,z=n.emitsOptions;if(l.dirs||l.transition)return!0;if(s&&t>=0){if(t&1024)return!0;if(t&16)return e?a8(e,o,z):!!o;if(t&8){const r=l.dynamicProps;for(let L=0;L<r.length;L++){const u=r[L];if(o[u]!==e[u]&&!j4(z,u))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:e===o?!1:e?o?a8(e,o,z):!0:!!o;return!1}function a8(c,l,s){const e=Object.keys(l);if(e.length!==Object.keys(c).length)return!0;for(let a=0;a<e.length;a++){const n=e[a];if(l[n]!==c[n]&&!j4(s,n))return!0}return!1}function hf({vnode:c,parent:l},s){for(;l;){const e=l.subTree;if(e.suspense&&e.suspense.activeBranch===c&&(e.el=c.el),e===c)(c=l.vnode).el=s,l=l.parent;else break}}const G5=c=>c.__isSuspense;function gf(c,l){l&&l.pendingBranch?E(c)?l.effects.push(...c):l.effects.push(c):wt(c)}const C2=Symbol.for("v-fgt"),V4=Symbol.for("v-txt"),k1=Symbol.for("v-cmt"),y3=Symbol.for("v-stc"),j1=[];let d2=null;function J1(c=!1){j1.push(d2=c?null:[])}function xf(){j1.pop(),d2=j1[j1.length-1]||null}let Z1=1;function n8(c,l=!1){Z1+=c,c<0&&d2&&l&&(d2.hasOnce=!0)}function j5(c){return c.dynamicChildren=Z1>0?d2||x1:null,xf(),Z1>0&&d2&&d2.push(c),c}function V5(c,l,s,e,a,n){return j5(_4(c,l,s,e,a,n,!0))}function G3(c,l,s,e,a){return j5(r2(c,l,s,e,a,!0))}function c4(c){return c?c.__v_isVNode===!0:!1}function D1(c,l){return c.type===l.type&&c.key===l.key}const K5=({key:c})=>c??null,S4=({ref:c,ref_key:l,ref_for:s})=>(typeof c=="number"&&(c=""+c),c!=null?Q(c)||a2(c)||R(c)?{i:t2,r:c,k:l,f:!!s}:c:null);function _4(c,l=null,s=null,e=0,a=null,n=c===C2?0:1,o=!1,i=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:l,key:l&&K5(l),ref:l&&S4(l),scopeId:b5,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:e,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:t2};return i?(v0(t,s),n&128&&c.normalize(t)):s&&(t.shapeFlag|=Q(s)?8:16),Z1>0&&!o&&d2&&(t.patchFlag>0||n&6)&&t.patchFlag!==32&&d2.push(t),t}const r2=Nf;function Nf(c,l=null,s=null,e=0,a=null,n=!1){if((!c||c===It)&&(c=k1),c4(c)){const i=v1(c,l,!0);return s&&v0(i,s),Z1>0&&!n&&d2&&(i.shapeFlag&6?d2[d2.indexOf(c)]=i:d2.push(i)),i.patchFlag=-2,i}if(Ef(c)&&(c=c.__vccOpts),l){l=bf(l);let{class:i,style:t}=l;i&&!Q(i)&&(l.class=M0(i)),X(t)&&(N0(t)&&!E(t)&&(t=Z({},t)),l.style=L0(t))}const o=Q(c)?1:G5(c)?128:At(c)?64:X(c)?4:R(c)?2:0;return _4(c,l,s,e,a,o,n,!0)}function bf(c){return c?N0(c)||_5(c)?Z({},c):c:null}function v1(c,l,s=!1,e=!1){const{props:a,ref:n,patchFlag:o,children:i,transition:t}=c,z=l?wf(a||{},l):a,r={__v_isVNode:!0,__v_skip:!0,type:c.type,props:z,key:z&&K5(z),ref:l&&l.ref?s&&n?E(n)?n.concat(S4(l)):[n,S4(l)]:S4(l):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetStart:c.targetStart,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:l&&c.type!==C2?o===-1?16:o|16:o,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:t,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&v1(c.ssContent),ssFallback:c.ssFallback&&v1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return t&&e&&S0(r,t.clone(r)),r}function Sf(c=" ",l=0){return r2(V4,null,c,l)}function P2(c){return c==null||typeof c=="boolean"?r2(k1):E(c)?r2(C2,null,c.slice()):c4(c)?K2(c):r2(V4,null,String(c))}function K2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:v1(c)}function v0(c,l){let s=0;const{shapeFlag:e}=c;if(l==null)l=null;else if(E(l))s=16;else if(typeof l=="object")if(e&65){const a=l.default;a&&(a._c&&(a._d=!1),v0(c,a()),a._c&&(a._d=!0));return}else{s=32;const a=l._;!a&&!_5(l)?l._ctx=t2:a===3&&t2&&(t2.slots._===1?l._=1:(l._=2,c.patchFlag|=1024))}else R(l)?(l={default:l,_ctx:t2},s=32):(l=String(l),e&64?(s=16,l=[Sf(l)]):s=8);c.children=l,c.shapeFlag|=s}function wf(...c){const l={};for(let s=0;s<c.length;s++){const e=c[s];for(const a in e)if(a==="class")l.class!==e.class&&(l.class=M0([l.class,e.class]));else if(a==="style")l.style=L0([l.style,e.style]);else if(D4(a)){const n=l[a],o=e[a];o&&n!==o&&!(E(n)&&n.includes(o))&&(l[a]=n?[].concat(n,o):o)}else a!==""&&(l[a]=e[a])}return l}function v2(c,l,s,e=null){B2(c,l,7,[s,e])}const yf=T5();let Af=0;function kf(c,l,s){const e=c.type,a=(l?l.appContext:c.appContext)||yf,n={uid:Af++,vnode:c,type:e,parent:l,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(a.provides),ids:l?l.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B5(e,a),emitsOptions:W5(e,a),emit:null,emitted:null,propsDefaults:j,inheritAttrs:e.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=l?l.root:n,n.emit=pf.bind(null,n),c.ce&&c.ce(n),n}let e2=null,E4,j3;{const c=q4(),l=(s,e)=>{let a;return(a=c[s])||(a=c[s]=[]),a.push(e),n=>{a.length>1?a.forEach(o=>o(n)):a[0](n)}};E4=l("__VUE_INSTANCE_SETTERS__",s=>e2=s),j3=l("__VUE_SSR_SETTERS__",s=>l4=s)}const n4=c=>{const l=e2;return E4(c),c.scope.on(),()=>{c.scope.off(),E4(l)}},o8=()=>{e2&&e2.scope.off(),E4(null)};function X5(c){return c.vnode.shapeFlag&4}let l4=!1;function vf(c,l=!1,s=!1){l&&j3(l);const{props:e,children:a}=c.vnode,n=X5(c);cf(c,e,n,l),af(c,a,s);const o=n?Tf(c,l):void 0;return l&&j3(!1),o}function Tf(c,l){const s=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,Gt);const{setup:e}=s;if(e){l1();const a=c.setupContext=e.length>1?Ff(c):null,n=n4(c),o=a4(e,c,0,[c.props,a]),i=K8(o);if(s1(),n(),(i||c.sp)&&!w1(c)&&S5(c),i){if(o.then(o8,o8),l)return o.then(t=>{i8(c,t,l)}).catch(t=>{W4(t,c,0)});c.asyncDep=o}else i8(c,o,l)}else Y5(c,l)}function i8(c,l,s){R(l)?c.type.__ssrInlineRender?c.ssrRender=l:c.render=l:X(l)&&(c.setupState=C5(l)),Y5(c,s)}let t8;function Y5(c,l,s){const e=c.type;if(!c.render){if(!l&&t8&&!e.render){const a=e.template||A0(c).template;if(a){const{isCustomElement:n,compilerOptions:o}=c.appContext.config,{delimiters:i,compilerOptions:t}=e,z=Z(Z({isCustomElement:n,delimiters:i},o),t);e.render=t8(a,z)}}c.render=e.render||E2}{const a=n4(c);l1();try{jt(c)}finally{s1(),a()}}}const Pf={get(c,l){return l2(c,"get",""),c[l]}};function Ff(c){const l=s=>{c.exposed=s||{}};return{attrs:new Proxy(c.attrs,Pf),slots:c.slots,emit:c.emit,expose:l}}function T0(c){return c.exposed?c.exposeProxy||(c.exposeProxy=new Proxy(C5(Mt(c.exposed)),{get(l,s){if(s in l)return l[s];if(s in G1)return G1[s](c)},has(l,s){return s in l||s in G1}})):c.proxy}function _f(c,l=!0){return R(c)?c.displayName||c.name:c.name||l&&c.__name}function Ef(c){return R(c)&&"__vccOpts"in c}const f1=(c,l)=>gt(c,l,l4);function Bf(c,l,s){const e=arguments.length;return e===2?X(l)&&!E(l)?c4(l)?r2(c,null,[l]):r2(c,l):r2(c,null,l):(e>3?s=Array.prototype.slice.call(arguments,2):e===3&&c4(s)&&(s=[s]),r2(c,l,s))}const Rf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let V3;const f8=typeof window<"u"&&window.trustedTypes;if(f8)try{V3=f8.createPolicy("vue",{createHTML:c=>c})}catch{}const Q5=V3?c=>V3.createHTML(c):c=>c,Hf="http://www.w3.org/2000/svg",Df="http://www.w3.org/1998/Math/MathML",D2=typeof document<"u"?document:null,r8=D2&&D2.createElement("template"),Of={insert:(c,l,s)=>{l.insertBefore(c,s||null)},remove:c=>{const l=c.parentNode;l&&l.removeChild(c)},createElement:(c,l,s,e)=>{const a=l==="svg"?D2.createElementNS(Hf,c):l==="mathml"?D2.createElementNS(Df,c):s?D2.createElement(c,{is:s}):D2.createElement(c);return c==="select"&&e&&e.multiple!=null&&a.setAttribute("multiple",e.multiple),a},createText:c=>D2.createTextNode(c),createComment:c=>D2.createComment(c),setText:(c,l)=>{c.nodeValue=l},setElementText:(c,l)=>{c.textContent=l},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>D2.querySelector(c),setScopeId(c,l){c.setAttribute(l,"")},insertStaticContent(c,l,s,e,a,n){const o=s?s.previousSibling:l.lastChild;if(a&&(a===n||a.nextSibling))for(;l.insertBefore(a.cloneNode(!0),s),!(a===n||!(a=a.nextSibling)););else{r8.innerHTML=Q5(e==="svg"?`<svg>${c}</svg>`:e==="mathml"?`<math>${c}</math>`:c);const i=r8.content;if(e==="svg"||e==="mathml"){const t=i.firstChild;for(;t.firstChild;)i.appendChild(t.firstChild);i.removeChild(t)}l.insertBefore(i,s)}return[o?o.nextSibling:l.firstChild,s?s.previousSibling:l.lastChild]}},$f=Symbol("_vtc");function If(c,l,s){const e=c[$f];e&&(l=(l?[l,...e]:[...e]).join(" ")),l==null?c.removeAttribute("class"):s?c.setAttribute("class",l):c.className=l}const z8=Symbol("_vod"),qf=Symbol("_vsh"),Uf=Symbol(""),Wf=/(^|;)\s*display\s*:/;function Gf(c,l,s){const e=c.style,a=Q(s);let n=!1;if(s&&!a){if(l)if(Q(l))for(const o of l.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&w4(e,i,"")}else for(const o in l)s[o]==null&&w4(e,o,"");for(const o in s)o==="display"&&(n=!0),w4(e,o,s[o])}else if(a){if(l!==s){const o=e[Uf];o&&(s+=";"+o),e.cssText=s,n=Wf.test(s)}}else l&&c.removeAttribute("style");z8 in c&&(c[z8]=n?e.display:"",c[qf]&&(e.display="none"))}const m8=/\s*!important$/;function w4(c,l,s){if(E(s))s.forEach(e=>w4(c,l,e));else if(s==null&&(s=""),l.startsWith("--"))c.setProperty(l,s);else{const e=jf(c,l);m8.test(s)?c.setProperty(C1(e),s.replace(m8,""),"important"):c[e]=s}}const L8=["Webkit","Moz","ms"],A3={};function jf(c,l){const s=A3[l];if(s)return s;let e=b2(l);if(e!=="filter"&&e in c)return A3[l]=e;e=I4(e);for(let a=0;a<L8.length;a++){const n=L8[a]+e;if(n in c)return A3[l]=n}return l}const M8="http://www.w3.org/1999/xlink";function p8(c,l,s,e,a,n=ji(l)){e&&l.startsWith("xlink:")?s==null?c.removeAttributeNS(M8,l.slice(6,l.length)):c.setAttributeNS(M8,l,s):s==null||n&&!J8(s)?c.removeAttribute(l):c.setAttribute(l,n?"":U2(s)?String(s):s)}function u8(c,l,s,e,a){if(l==="innerHTML"||l==="textContent"){s!=null&&(c[l]=l==="innerHTML"?Q5(s):s);return}const n=c.tagName;if(l==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?c.getAttribute("value")||"":c.value,t=s==null?c.type==="checkbox"?"on":"":String(s);(i!==t||!("_value"in c))&&(c.value=t),s==null&&c.removeAttribute(l),c._value=s;return}let o=!1;if(s===""||s==null){const i=typeof c[l];i==="boolean"?s=J8(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{c[l]=s}catch{}o&&c.removeAttribute(a||l)}function Vf(c,l,s,e){c.addEventListener(l,s,e)}function Kf(c,l,s,e){c.removeEventListener(l,s,e)}const C8=Symbol("_vei");function Xf(c,l,s,e,a=null){const n=c[C8]||(c[C8]={}),o=n[l];if(e&&o)o.value=e;else{const[i,t]=Yf(l);if(e){const z=n[l]=Zf(e,a);Vf(c,i,z,t)}else o&&(Kf(c,i,o,t),n[l]=void 0)}}const d8=/(?:Once|Passive|Capture)$/;function Yf(c){let l;if(d8.test(c)){l={};let e;for(;e=c.match(d8);)c=c.slice(0,c.length-e[0].length),l[e[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):C1(c.slice(2)),l]}let k3=0;const Qf=Promise.resolve(),Jf=()=>k3||(Qf.then(()=>k3=0),k3=Date.now());function Zf(c,l){const s=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=s.attached)return;B2(cr(e,s.value),l,5,[e])};return s.value=c,s.attached=Jf(),s}function cr(c,l){if(E(l)){const s=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{s.call(c),c._stopped=!0},l.map(e=>a=>!a._stopped&&e&&e(a))}else return l}const h8=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,lr=(c,l,s,e,a,n)=>{const o=a==="svg";l==="class"?If(c,e,o):l==="style"?Gf(c,s,e):D4(l)?r0(l)||Xf(c,l,s,e,n):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):sr(c,l,e,o))?(u8(c,l,e),!c.tagName.includes("-")&&(l==="value"||l==="checked"||l==="selected")&&p8(c,l,e,o,n,l!=="value")):c._isVueCE&&(/[A-Z]/.test(l)||!Q(e))?u8(c,b2(l),e,n,l):(l==="true-value"?c._trueValue=e:l==="false-value"&&(c._falseValue=e),p8(c,l,e,o))};function sr(c,l,s,e){if(e)return!!(l==="innerHTML"||l==="textContent"||l in c&&h8(l)&&R(s));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&c.tagName==="INPUT"||l==="type"&&c.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const a=c.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return h8(l)&&Q(s)?!1:l in c}const er=Z({patchProp:lr},Of);let g8;function ar(){return g8||(g8=of(er))}const nr=(...c)=>{const l=ar().createApp(...c),{mount:s}=l;return l.mount=e=>{const a=ir(e);if(!a)return;const n=l._component;!R(n)&&!n.render&&!n.template&&(n.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,or(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},l};function or(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function ir(c){return Q(c)?document.querySelector(c):c}const tr=["id"],fr=w0({__name:"Page",props:{id:{}},setup(c){return(l,s)=>(J1(),V5("div",{id:l.id,class:"min-w-full min-h-screen"},[Wt(l.$slots,"default")],8,tr))}}),rr={class:"border-l-4 w-full h-full flex justify-center items-center"},zr={class:"font-bold text-6xl"},mr=w0({__name:"App",setup(c){const l=X6([]),s=n=>{const o=l.value[n];o&&o.$el instanceof HTMLElement&&o.$el.scrollIntoView({behavior:"smooth",inline:"center"})},e=X6(2),a=n=>{n.code==="Space"||n.code==="ArrowRight"||n.code==="ArrowUp"?(e.value=(e.value+1)%l.value.length,s(e.value)):(n.code==="ArrowLeft"||n.code==="ArrowDown")&&(e.value=(e.value-1+l.value.length)%l.value.length,s(e.value))};return A5(async()=>{await h5(),s(e.value),window.addEventListener("keydown",a)}),y0(()=>{window.removeEventListener("keydown",a)}),(n,o)=>{const i=$t("vue-horizontal");return J1(),G3(i,null,{default:$3(()=>[(J1(),V5(C2,null,Ut(15,t=>r2(fr,{key:t,id:"page-"+t,ref_for:!0,ref_key:"pages",ref:l},{default:$3(()=>[_4("div",rr,[_4("h1",zr,"Page "+c5(t),1)])]),_:2},1032,["id"])),64))]),_:1})}}}),x8=()=>{};let P0={},J5={},Z5=null,c7={mark:x8,measure:x8};try{typeof window<"u"&&(P0=window),typeof document<"u"&&(J5=document),typeof MutationObserver<"u"&&(Z5=MutationObserver),typeof performance<"u"&&(c7=performance)}catch{}const{userAgent:N8=""}=P0.navigator||{},J2=P0,V=J5,b8=Z5,x4=c7;J2.document;const G2=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",l7=~N8.indexOf("MSIE")||~N8.indexOf("Trident/");var K="classic",s7="duotone",h2="sharp",g2="sharp-duotone",Lr=[K,s7,h2,g2],Mr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},S8={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pr=["kit"],ur=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Cr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,dr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},hr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},gr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},xr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Nr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},br={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},e7={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Sr=["solid","regular","light","thin","duotone","brands"],a7=[1,2,3,4,5,6,7,8,9,10],wr=a7.concat([11,12,13,14,15,16,17,18,19,20]),$1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yr=[...Object.keys(xr),...Sr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$1.GROUP,$1.SWAP_OPACITY,$1.PRIMARY,$1.SECONDARY].concat(a7.map(c=>"".concat(c,"x"))).concat(wr.map(c=>"w-".concat(c))),Ar={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},kr={kit:{"fa-kit":"fak"}},vr={kit:{fak:"fa-kit"}},w8={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const I2="___FONT_AWESOME___",K3=16,n7="fa",o7="svg-inline--fa",p1="data-fa-i2svg",X3="data-fa-pseudo-element",Tr="data-fa-pseudo-element-pending",F0="data-prefix",_0="data-icon",y8="fontawesome-i2svg",Pr="async",Fr=["HTML","HEAD","STYLE","SCRIPT"],i7=(()=>{try{return!0}catch{return!1}})(),t7=[K,h2,g2];function o4(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[K]}})}const f7={...e7};f7[K]={...e7[K],...S8.kit,...S8["kit-duotone"]};const m1=o4(f7),Y3={...br};Y3[K]={...Y3[K],...w8.kit,...w8["kit-duotone"]};const s4=o4(Y3),Q3={...Nr};Q3[K]={...Q3[K],...vr.kit};const L1=o4(Q3),J3={...gr};J3[K]={...J3[K],...kr.kit};const _r=o4(J3),Er=ur,r7="fa-layers-text",Br=Cr,Rr={...Mr};o4(Rr);const Hr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],v3=$1,T1=new Set;Object.keys(s4[K]).map(T1.add.bind(T1));Object.keys(s4[h2]).map(T1.add.bind(T1));Object.keys(s4[g2]).map(T1.add.bind(T1));const Dr=[...pr,...yr],V1=J2.FontAwesomeConfig||{};function Or(c){var l=V.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function $r(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l;const a=$r(Or(s));a!=null&&(V1[e]=a)});const z7={styleDefault:"solid",familyDefault:"classic",cssPrefix:n7,replacementClass:o7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V1.familyPrefix&&(V1.cssPrefix=V1.familyPrefix);const P1={...z7,...V1};P1.autoReplaceSvg||(P1.observeMutations=!1);const k={};Object.keys(z7).forEach(c=>{Object.defineProperty(k,c,{enumerable:!0,set:function(l){P1[c]=l,K1.forEach(s=>s(k))},get:function(){return P1[c]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(c){P1.cssPrefix=c,K1.forEach(l=>l(k))},get:function(){return P1.cssPrefix}});J2.FontAwesomeConfig=k;const K1=[];function Ir(c){return K1.push(c),()=>{K1.splice(K1.indexOf(c),1)}}const j2=K3,F2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qr(c){if(!c||!G2)return;const l=V.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const s=V.head.childNodes;let e=null;for(let a=s.length-1;a>-1;a--){const n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return V.head.insertBefore(l,e),c}const Ur="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function e4(){let c=12,l="";for(;c-- >0;)l+=Ur[Math.random()*62|0];return l}function F1(c){const l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function E0(c){return c.classList?F1(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function m7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wr(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(m7(c[s]),'" '),"").trim()}function K4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function B0(c){return c.size!==F2.size||c.x!==F2.x||c.y!==F2.y||c.rotate!==F2.rotate||c.flipX||c.flipY}function Gr(c){let{transform:l,containerWidth:s,iconWidth:e}=c;const a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),t={transform:"".concat(n," ").concat(o," ").concat(i)},z={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:t,path:z}}function jr(c){let{transform:l,width:s=K3,height:e=K3,startCentered:a=!1}=c,n="";return a&&l7?n+="translate(".concat(l.x/j2-s/2,"em, ").concat(l.y/j2-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/j2,"em), calc(-50% + ").concat(l.y/j2,"em)) "):n+="translate(".concat(l.x/j2,"em, ").concat(l.y/j2,"em) "),n+="scale(".concat(l.size/j2*(l.flipX?-1:1),", ").concat(l.size/j2*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var Vr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function L7(){const c=n7,l=o7,s=k.cssPrefix,e=k.replacementClass;let a=Vr;if(s!==c||e!==l){const n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(i,".".concat(e))}return a}let A8=!1;function T3(){k.autoAddCss&&!A8&&(qr(L7()),A8=!0)}var Kr={mixout(){return{dom:{css:L7,insertCss:T3}}},hooks(){return{beforeDOMElementCreation(){T3()},beforeI2svg(){T3()}}}};const q2=J2||{};q2[I2]||(q2[I2]={});q2[I2].styles||(q2[I2].styles={});q2[I2].hooks||(q2[I2].hooks={});q2[I2].shims||(q2[I2].shims=[]);var _2=q2[I2];const M7=[],p7=function(){V.removeEventListener("DOMContentLoaded",p7),B4=1,M7.map(c=>c())};let B4=!1;G2&&(B4=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),B4||V.addEventListener("DOMContentLoaded",p7));function Xr(c){G2&&(B4?setTimeout(c,0):M7.push(c))}function i4(c){const{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?m7(c):"<".concat(l," ").concat(Wr(s),">").concat(e.map(i4).join(""),"</").concat(l,">")}function k8(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var P3=function(l,s,e,a){var n=Object.keys(l),o=n.length,i=s,t,z,r;for(e===void 0?(t=1,r=l[n[0]]):(t=0,r=e);t<o;t++)z=n[t],r=i(r,l[z],z,l);return r};function Yr(c){const l=[];let s=0;const e=c.length;for(;s<e;){const a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){const n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function Z3(c){const l=Yr(c);return l.length===1?l[0].toString(16):null}function Qr(c,l){const s=c.length;let e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function v8(c){return Object.keys(c).reduce((l,s)=>{const e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function c0(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:e=!1}=s,a=v8(l);typeof _2.hooks.addPack=="function"&&!e?_2.hooks.addPack(c,v8(l)):_2.styles[c]={..._2.styles[c]||{},...a},c==="fas"&&c0("fa",l)}const{styles:r1,shims:Jr}=_2,Zr={[K]:Object.values(L1[K]),[h2]:Object.values(L1[h2]),[g2]:Object.values(L1[g2])};let R0=null,u7={},C7={},d7={},h7={},g7={};const cz={[K]:Object.keys(m1[K]),[h2]:Object.keys(m1[h2]),[g2]:Object.keys(m1[g2])};function lz(c){return~Dr.indexOf(c)}function sz(c,l){const s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!lz(a)?a:null}const x7=()=>{const c=e=>P3(r1,(a,n,o)=>(a[o]=P3(n,e,{}),a),{});u7=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{e[i.toString(16)]=n}),e)),C7=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{e[i]=n}),e)),g7=c((e,a,n)=>{const o=a[2];return e[n]=n,o.forEach(i=>{e[i]=n}),e});const l="far"in r1||k.autoFetchSvg,s=P3(Jr,(e,a)=>{const n=a[0];let o=a[1];const i=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});d7=s.names,h7=s.unicodes,R0=X4(k.styleDefault,{family:k.familyDefault})};Ir(c=>{R0=X4(c.styleDefault,{family:k.familyDefault})});x7();function H0(c,l){return(u7[c]||{})[l]}function ez(c,l){return(C7[c]||{})[l]}function Y2(c,l){return(g7[c]||{})[l]}function N7(c){return d7[c]||{prefix:null,iconName:null}}function az(c){const l=h7[c],s=H0("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function Z2(){return R0}const D0=()=>({prefix:null,iconName:null,rest:[]});function X4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:s=K}=l,e=m1[s][c],a=s4[s][c]||s4[s][e],n=c in _2.styles?c:null;return a||n||null}const nz={[K]:Object.keys(L1[K]),[h2]:Object.keys(L1[h2]),[g2]:Object.keys(L1[g2])};function Y4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:s=!1}=l,e={[K]:"".concat(k.cssPrefix,"-").concat(K),[h2]:"".concat(k.cssPrefix,"-").concat(h2),[g2]:"".concat(k.cssPrefix,"-").concat(g2)};let a=null,n=K;const o=Lr.filter(t=>t!==s7);o.forEach(t=>{(c.includes(e[t])||c.some(z=>nz[t].includes(z)))&&(n=t)});const i=c.reduce((t,z)=>{const r=sz(k.cssPrefix,z);if(r1[z]?(z=Zr[n].includes(z)?_r[n][z]:z,a=z,t.prefix=z):cz[n].indexOf(z)>-1?(a=z,t.prefix=X4(z,{family:n})):r?t.iconName=r:z!==k.replacementClass&&!o.some(L=>z===e[L])&&t.rest.push(z),!s&&t.prefix&&t.iconName){const L=a==="fa"?N7(t.iconName):{},u=Y2(t.prefix,t.iconName);L.prefix&&(a=null),t.iconName=L.iconName||u||t.iconName,t.prefix=L.prefix||t.prefix,t.prefix==="far"&&!r1.far&&r1.fas&&!k.autoFetchSvg&&(t.prefix="fas")}return t},D0());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===h2&&(r1.fass||k.autoFetchSvg)&&(i.prefix="fass",i.iconName=Y2(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===g2&&(r1.fasds||k.autoFetchSvg)&&(i.prefix="fasds",i.iconName=Y2(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||a==="fa")&&(i.prefix=Z2()||"fas"),i}class oz{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];const a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},c0(n,a[n]);const o=L1[K][n];o&&c0(o,a[n]),x7()})}reset(){this.definitions={}}_pullDefinitions(l,s){const e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{const{prefix:n,iconName:o,icon:i}=e[a],t=i[2];l[n]||(l[n]={}),t.length>0&&t.forEach(z=>{typeof z=="string"&&(l[n][z]=i)}),l[n][o]=i}),l}}let T8=[],g1={};const A1={},iz=Object.keys(A1);function tz(c,l){let{mixoutsTo:s}=l;return T8=c,g1={},Object.keys(A1).forEach(e=>{iz.indexOf(e)===-1&&delete A1[e]}),T8.forEach(e=>{const a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){const n=e.hooks();Object.keys(n).forEach(o=>{g1[o]||(g1[o]=[]),g1[o].push(n[o])})}e.provides&&e.provides(A1)}),s}function l0(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(g1[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function u1(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(g1[c]||[]).forEach(n=>{n.apply(null,s)})}function c1(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return A1[c]?A1[c].apply(null,l):void 0}function s0(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const s=c.prefix||Z2();if(l)return l=Y2(s,l)||l,k8(b7.definitions,s,l)||k8(_2.styles,s,l)}const b7=new oz,fz=()=>{k.autoReplaceSvg=!1,k.observeMutations=!1,u1("noAuto")},rz={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G2?(u1("beforeI2svg",c),c1("pseudoElements2svg",c),c1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Xr(()=>{mz({autoReplaceSvgRoot:l}),u1("watch",c)})}},zz={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Y2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=X4(c[0]);return{prefix:s,iconName:Y2(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(k.cssPrefix,"-"))>-1||c.match(Er))){const l=Y4(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||Z2(),iconName:Y2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=Z2();return{prefix:l,iconName:Y2(l,c)||c}}}},x2={noAuto:fz,config:k,dom:rz,parse:zz,library:b7,findIconDefinition:s0,toHtml:i4},mz=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=V}=c;(Object.keys(_2.styles).length>0||k.autoFetchSvg)&&G2&&k.autoReplaceSvg&&x2.dom.i2svg({node:l})};function Q4(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>i4(s))}}),Object.defineProperty(c,"node",{get:function(){if(!G2)return;const s=V.createElement("div");return s.innerHTML=c.html,s.children}}),c}function Lz(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(B0(o)&&s.found&&!e.found){const{width:i,height:t}=s,z={x:i/t/2,y:.5};a.style=K4({...n,"transform-origin":"".concat(z.x+o.x/16,"em ").concat(z.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:l}]}function Mz(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c;const o=n===!0?"".concat(l,"-").concat(k.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:e}]}]}function O0(c){const{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:i,maskId:t,titleId:z,extra:r,watchable:L=!1}=c,{width:u,height:b}=s.found?s:l,B=e==="fak",F=[k.replacementClass,a?"".concat(k.cssPrefix,"-").concat(a):""].filter(D=>r.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(r.classes).join(" ");let O={children:[],attributes:{...r.attributes,"data-prefix":e,"data-icon":a,class:F,role:r.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(b)}};const g=B&&!~r.classes.indexOf("fa-fw")?{width:"".concat(u/b*16*.0625,"em")}:{};L&&(O.attributes[p1]=""),i&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(z||e4())},children:[i]}),delete O.attributes.title);const w={...O,prefix:e,iconName:a,main:l,mask:s,maskId:t,transform:n,symbol:o,styles:{...g,...r.styles}},{children:P,attributes:A}=s.found&&l.found?c1("generateAbstractMask",w)||{children:[],attributes:{}}:c1("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=P,w.attributes=A,o?Mz(w):Lz(w)}function P8(c){const{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:i=!1}=c,t={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")};i&&(t[p1]="");const z={...o.styles};B0(a)&&(z.transform=jr({transform:a,startCentered:!0,width:s,height:e}),z["-webkit-transform"]=z.transform);const r=K4(z);r.length>0&&(t.style=r);const L=[];return L.push({tag:"span",attributes:t,children:[l]}),n&&L.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),L}function pz(c){const{content:l,title:s,extra:e}=c,a={...e.attributes,...s?{title:s}:{},class:e.classes.join(" ")},n=K4(e.styles);n.length>0&&(a.style=n);const o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}const{styles:F3}=_2;function e0(c){const l=c[0],s=c[1],[e]=c.slice(4);let a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(v3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(v3.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(v3.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}const uz={found:!1,width:512,height:512};function Cz(c,l){!i7&&!k.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function a0(c,l){let s=l;return l==="fa"&&k.styleDefault!==null&&(l=Z2()),new Promise((e,a)=>{if(s==="fa"){const n=N7(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&F3[l]&&F3[l][c]){const n=F3[l][c];return e(e0(n))}Cz(c,l),e({...uz,icon:k.showMissingIcons&&c?c1("missingIconAbstract")||{}:{}})})}const F8=()=>{},n0=k.measurePerformance&&x4&&x4.mark&&x4.measure?x4:{mark:F8,measure:F8},I1='FA "6.6.0"',dz=c=>(n0.mark("".concat(I1," ").concat(c," begins")),()=>S7(c)),S7=c=>{n0.mark("".concat(I1," ").concat(c," ends")),n0.measure("".concat(I1," ").concat(c),"".concat(I1," ").concat(c," begins"),"".concat(I1," ").concat(c," ends"))};var $0={begin:dz,end:S7};const y4=()=>{};function _8(c){return typeof(c.getAttribute?c.getAttribute(p1):null)=="string"}function hz(c){const l=c.getAttribute?c.getAttribute(F0):null,s=c.getAttribute?c.getAttribute(_0):null;return l&&s}function gz(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(k.replacementClass)}function xz(){return k.autoReplaceSvg===!0?A4.replace:A4[k.autoReplaceSvg]||A4.replace}function Nz(c){return V.createElementNS("http://www.w3.org/2000/svg",c)}function bz(c){return V.createElement(c)}function w7(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:s=c.tag==="svg"?Nz:bz}=l;if(typeof c=="string")return V.createTextNode(c);const e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(w7(n,{ceFn:s}))}),e}function Sz(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}const A4={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(w7(s),l)}),l.getAttribute(p1)===null&&k.keepOriginalSource){let s=V.createComment(Sz(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){const l=c[0],s=c[1];if(~E0(l).indexOf(k.replacementClass))return A4.replace(c);const e=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){const n=s[0].attributes.class.split(" ").reduce((o,i)=>(i===k.replacementClass||i.match(e)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}const a=s.map(n=>i4(n)).join(`
`);l.setAttribute(p1,""),l.innerHTML=a}};function E8(c){c()}function y7(c,l){const s=typeof l=="function"?l:y4;if(c.length===0)s();else{let e=E8;k.mutateApproach===Pr&&(e=J2.requestAnimationFrame||E8),e(()=>{const a=xz(),n=$0.begin("mutate");c.map(a),n(),s()})}}let I0=!1;function A7(){I0=!0}function o0(){I0=!1}let R4=null;function B8(c){if(!b8||!k.observeMutations)return;const{treeCallback:l=y4,nodeCallback:s=y4,pseudoElementsCallback:e=y4,observeMutationsRoot:a=V}=c;R4=new b8(n=>{if(I0)return;const o=Z2();F1(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!_8(i.addedNodes[0])&&(k.searchPseudoElements&&e(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&k.searchPseudoElements&&e(i.target.parentNode),i.type==="attributes"&&_8(i.target)&&~Hr.indexOf(i.attributeName))if(i.attributeName==="class"&&hz(i.target)){const{prefix:t,iconName:z}=Y4(E0(i.target));i.target.setAttribute(F0,t||o),z&&i.target.setAttribute(_0,z)}else gz(i.target)&&s(i.target)})}),G2&&R4.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function wz(){R4&&R4.disconnect()}function yz(c){const l=c.getAttribute("style");let s=[];return l&&(s=l.split(";").reduce((e,a)=>{const n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(e[o]=i.join(":").trim()),e},{})),s}function Az(c){const l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"";let a=Y4(E0(c));return a.prefix||(a.prefix=Z2()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=ez(a.prefix,c.innerText)||H0(a.prefix,Z3(c.innerText))),!a.iconName&&k.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function kz(c){const l=F1(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return k.autoA11y&&(s?l["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(e||e4()):(l["aria-hidden"]="true",l.focusable="false")),l}function vz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function R8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:s,prefix:e,rest:a}=Az(c),n=kz(c),o=l0("parseNodeAttributes",{},c);let i=l.styleParser?yz(c):[];return{iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:F2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:n},...o}}const{styles:Tz}=_2;function k7(c){const l=k.autoReplaceSvg==="nest"?R8(c,{styleParser:!1}):R8(c);return~l.extra.classes.indexOf(r7)?c1("generateLayersText",c,l):c1("generateSvgReplacementMutation",c,l)}let R2=new Set;t7.map(c=>{R2.add("fa-".concat(c))});Object.keys(m1[K]).map(R2.add.bind(R2));Object.keys(m1[h2]).map(R2.add.bind(R2));Object.keys(m1[g2]).map(R2.add.bind(R2));R2=[...R2];function H8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G2)return Promise.resolve();const s=V.documentElement.classList,e=r=>s.add("".concat(y8,"-").concat(r)),a=r=>s.remove("".concat(y8,"-").concat(r)),n=k.autoFetchSvg?R2:t7.map(r=>"fa-".concat(r)).concat(Object.keys(Tz));n.includes("fa")||n.push("fa");const o=[".".concat(r7,":not([").concat(p1,"])")].concat(n.map(r=>".".concat(r,":not([").concat(p1,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=F1(c.querySelectorAll(o))}catch{}if(i.length>0)e("pending"),a("complete");else return Promise.resolve();const t=$0.begin("onTree"),z=i.reduce((r,L)=>{try{const u=k7(L);u&&r.push(u)}catch(u){i7||u.name==="MissingIcon"&&console.error(u)}return r},[]);return new Promise((r,L)=>{Promise.all(z).then(u=>{y7(u,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),t(),r()})}).catch(u=>{t(),L(u)})})}function Pz(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k7(c).then(s=>{s&&y7([s],l)})}function Fz(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const e=(l||{}).icon?l:s0(l||{});let{mask:a}=s;return a&&(a=(a||{}).icon?a:s0(a||{})),c(e,{...s,mask:a})}}const _z=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=F2,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:i=null,classes:t=[],attributes:z={},styles:r={}}=l;if(!c)return;const{prefix:L,iconName:u,icon:b}=c;return Q4({type:"icon",...c},()=>(u1("beforeDOMElementCreation",{iconDefinition:c,params:l}),k.autoA11y&&(o?z["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(i||e4()):(z["aria-hidden"]="true",z.focusable="false")),O0({icons:{main:e0(b),mask:a?e0(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:u,transform:{...F2,...s},symbol:e,title:o,maskId:n,titleId:i,extra:{attributes:z,styles:r,classes:t}})))};var Ez={mixout(){return{icon:Fz(_z)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=H8,c.nodeCallback=Pz,c}}},provides(c){c.i2svg=function(l){const{node:s=V,callback:e=()=>{}}=l;return H8(s,e)},c.generateSvgReplacementMutation=function(l,s){const{iconName:e,title:a,titleId:n,prefix:o,transform:i,symbol:t,mask:z,maskId:r,extra:L}=s;return new Promise((u,b)=>{Promise.all([a0(e,o),z.iconName?a0(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(B=>{let[F,O]=B;u([l,O0({icons:{main:F,mask:O},prefix:o,iconName:e,transform:i,symbol:t,maskId:r,title:a,titleId:n,extra:L,watchable:!0})])}).catch(b)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l;const i=K4(o);i.length>0&&(e.style=i);let t;return B0(n)&&(t=c1("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(t||a.icon),{children:s,attributes:e}}}},Bz={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:s=[]}=l;return Q4({type:"layer"},()=>{u1("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},Rz={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return Q4({type:"counter",content:c},()=>(u1("beforeDOMElementCreation",{content:c,params:l}),pz({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(k.cssPrefix,"-layers-counter"),...e]}})))}}}},Hz={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=F2,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return Q4({type:"text",content:c},()=>(u1("beforeDOMElementCreation",{content:c,params:l}),P8({content:c,transform:{...F2,...s},title:e,extra:{attributes:n,styles:o,classes:["".concat(k.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){const{title:e,transform:a,extra:n}=s;let o=null,i=null;if(l7){const t=parseInt(getComputedStyle(l).fontSize,10),z=l.getBoundingClientRect();o=z.width/t,i=z.height/t}return k.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,P8({content:l.innerHTML,width:o,height:i,transform:a,title:e,extra:n,watchable:!0})])}}};const Dz=new RegExp('"',"ug"),D8=[1105920,1112319],O8={FontAwesome:{normal:"fas",400:"fas"},...hr,...dr,...Ar},i0=Object.keys(O8).reduce((c,l)=>(c[l.toLowerCase()]=O8[l],c),{}),Oz=Object.keys(i0).reduce((c,l)=>{const s=i0[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function $z(c){const l=c.replace(Dz,""),s=Qr(l,0),e=s>=D8[0]&&s<=D8[1],a=l.length===2?l[0]===l[1]:!1;return{value:Z3(a?l[0]:l),isSecondary:e||a}}function Iz(c,l){const s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(i0[s]||{})[a]||Oz[s]}function $8(c,l){const s="".concat(Tr).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();const o=F1(c.children).filter(u=>u.getAttribute(X3)===l)[0],i=J2.getComputedStyle(c,l),t=i.getPropertyValue("font-family"),z=t.match(Br),r=i.getPropertyValue("font-weight"),L=i.getPropertyValue("content");if(o&&!z)return c.removeChild(o),e();if(z&&L!=="none"&&L!==""){const u=i.getPropertyValue("content");let b=Iz(t,r);const{value:B,isSecondary:F}=$z(u),O=z[0].startsWith("FontAwesome");let g=H0(b,B),w=g;if(O){const P=az(B);P.iconName&&P.prefix&&(g=P.iconName,b=P.prefix)}if(g&&!F&&(!o||o.getAttribute(F0)!==b||o.getAttribute(_0)!==w)){c.setAttribute(s,w),o&&c.removeChild(o);const P=vz(),{extra:A}=P;A.attributes[X3]=l,a0(g,b).then(D=>{const z2=O0({...P,icons:{main:D,mask:D0()},prefix:b,iconName:w,extra:A,watchable:!0}),J=V.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(J,c.firstChild):c.appendChild(J),J.outerHTML=z2.map(y2=>i4(y2)).join(`