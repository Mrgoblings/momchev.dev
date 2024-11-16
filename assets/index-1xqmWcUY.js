(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function o0(c){const l=Object.create(null);for(const s of c.split(","))l[s]=1;return s=>s in l}const j={},x1=[],_2=()=>{},Ei=()=>!1,D4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),i0=c=>c.startsWith("onUpdate:"),Z=Object.assign,t0=(c,l)=>{const s=c.indexOf(l);s>-1&&c.splice(s,1)},Bi=Object.prototype.hasOwnProperty,I=(c,l)=>Bi.call(c,l),E=Array.isArray,N1=c=>O4(c)==="[object Map]",W8=c=>O4(c)==="[object Set]",R=c=>typeof c=="function",Q=c=>typeof c=="string",q2=c=>typeof c=="symbol",X=c=>c!==null&&typeof c=="object",G8=c=>(X(c)||R(c))&&R(c.then)&&R(c.catch),j8=Object.prototype.toString,O4=c=>j8.call(c),Ri=c=>O4(c).slice(8,-1),V8=c=>O4(c)==="[object Object]",f0=c=>Q(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,q1=o0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$4=c=>{const l=Object.create(null);return s=>l[s]||(l[s]=c(s))},Hi=/-(\w)/g,Q2=$4(c=>c.replace(Hi,(l,s)=>s?s.toUpperCase():"")),Di=/\B([A-Z])/g,C1=$4(c=>c.replace(Di,"-$1").toLowerCase()),K8=$4(c=>c.charAt(0).toUpperCase()+c.slice(1)),u3=$4(c=>c?`on${K8(c)}`:""),Y2=(c,l)=>!Object.is(c,l),C3=(c,...l)=>{for(let s=0;s<c.length;s++)c[s](...l)},X8=(c,l,s,e=!1)=>{Object.defineProperty(c,l,{configurable:!0,enumerable:!1,writable:e,value:s})},Oi=c=>{const l=parseFloat(c);return isNaN(l)?c:l};let U6;const I4=()=>U6||(U6=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function r0(c){if(E(c)){const l={};for(let s=0;s<c.length;s++){const e=c[s],a=Q(e)?Ui(e):r0(e);if(a)for(const n in a)l[n]=a[n]}return l}else if(Q(c)||X(c))return c}const $i=/;(?![^(]*\))/g,Ii=/:([^]+)/,qi=/\/\*[^]*?\*\//g;function Ui(c){const l={};return c.replace(qi,"").split($i).forEach(s=>{if(s){const e=s.split(Ii);e.length>1&&(l[e[0].trim()]=e[1].trim())}}),l}function z0(c){let l="";if(Q(c))l=c;else if(E(c))for(let s=0;s<c.length;s++){const e=z0(c[s]);e&&(l+=e+" ")}else if(X(c))for(const s in c)c[s]&&(l+=s+" ");return l.trim()}const Wi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gi=o0(Wi);function Y8(c){return!!c||c===""}const Q8=c=>!!(c&&c.__v_isRef===!0),J8=c=>Q(c)?c:c==null?"":E(c)||X(c)&&(c.toString===j8||!R(c.toString))?Q8(c)?J8(c.value):JSON.stringify(c,Z8,2):String(c),Z8=(c,l)=>Q8(l)?Z8(c,l.value):N1(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((s,[e,a],n)=>(s[d3(e,n)+" =>"]=a,s),{})}:W8(l)?{[`Set(${l.size})`]:[...l.values()].map(s=>d3(s))}:q2(l)?d3(l):X(l)&&!E(l)&&!V8(l)?String(l):l,d3=(c,l="")=>{var s;return q2(c)?`Symbol(${(s=c.description)!=null?s:l})`:c};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let u2;class ji{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=u2,!l&&u2&&(this.index=(u2.scopes||(u2.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let l,s;if(this.scopes)for(l=0,s=this.scopes.length;l<s;l++)this.scopes[l].pause();for(l=0,s=this.effects.length;l<s;l++)this.effects[l].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let l,s;if(this.scopes)for(l=0,s=this.scopes.length;l<s;l++)this.scopes[l].resume();for(l=0,s=this.effects.length;l<s;l++)this.effects[l].resume()}}run(l){if(this._active){const s=u2;try{return u2=this,l()}finally{u2=s}}}on(){u2=this}off(){u2=this.parent}stop(l){if(this._active){this._active=!1;let s,e;for(s=0,e=this.effects.length;s<e;s++)this.effects[s].stop();for(this.effects.length=0,s=0,e=this.cleanups.length;s<e;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,e=this.scopes.length;s<e;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!l){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Vi(){return u2}let G;const h3=new WeakSet;class c5{constructor(l){this.fn=l,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,u2&&u2.active&&u2.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,h3.has(this)&&(h3.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||s5(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,W6(this),e5(this);const l=G,s=S2;G=this,S2=!0;try{return this.fn()}finally{a5(this),G=l,S2=s,this.flags&=-3}}stop(){if(this.flags&1){for(let l=this.deps;l;l=l.nextDep)M0(l);this.deps=this.depsTail=void 0,W6(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?h3.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){E3(this)&&this.run()}get dirty(){return E3(this)}}let l5=0,U1,W1;function s5(c,l=!1){if(c.flags|=8,l){c.next=W1,W1=c;return}c.next=U1,U1=c}function m0(){l5++}function L0(){if(--l5>0)return;if(W1){let l=W1;for(W1=void 0;l;){const s=l.next;l.next=void 0,l.flags&=-9,l=s}}let c;for(;U1;){let l=U1;for(U1=void 0;l;){const s=l.next;if(l.next=void 0,l.flags&=-9,l.flags&1)try{l.trigger()}catch(e){c||(c=e)}l=s}}if(c)throw c}function e5(c){for(let l=c.deps;l;l=l.nextDep)l.version=-1,l.prevActiveLink=l.dep.activeLink,l.dep.activeLink=l}function a5(c){let l,s=c.depsTail,e=s;for(;e;){const a=e.prevDep;e.version===-1?(e===s&&(s=a),M0(e),Ki(e)):l=e,e.dep.activeLink=e.prevActiveLink,e.prevActiveLink=void 0,e=a}c.deps=l,c.depsTail=s}function E3(c){for(let l=c.deps;l;l=l.nextDep)if(l.dep.version!==l.version||l.dep.computed&&(n5(l.dep.computed)||l.dep.version!==l.version))return!0;return!!c._dirty}function n5(c){if(c.flags&4&&!(c.flags&16)||(c.flags&=-17,c.globalVersion===X1))return;c.globalVersion=X1;const l=c.dep;if(c.flags|=2,l.version>0&&!c.isSSR&&c.deps&&!E3(c)){c.flags&=-3;return}const s=G,e=S2;G=c,S2=!0;try{e5(c);const a=c.fn(c._value);(l.version===0||Y2(a,c._value))&&(c._value=a,l.version++)}catch(a){throw l.version++,a}finally{G=s,S2=e,a5(c),c.flags&=-3}}function M0(c,l=!1){const{dep:s,prevSub:e,nextSub:a}=c;if(e&&(e.nextSub=a,c.prevSub=void 0),a&&(a.prevSub=e,c.nextSub=void 0),s.subs===c&&(s.subs=e,!e&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)M0(n,!0)}!l&&!--s.sc&&s.map&&s.map.delete(s.key)}function Ki(c){const{prevDep:l,nextDep:s}=c;l&&(l.nextDep=s,c.prevDep=void 0),s&&(s.prevDep=l,c.nextDep=void 0)}let S2=!0;const o5=[];function l1(){o5.push(S2),S2=!1}function s1(){const c=o5.pop();S2=c===void 0?!0:c}function W6(c){const{cleanup:l}=c;if(c.cleanup=void 0,l){const s=G;G=void 0;try{l()}finally{G=s}}}let X1=0;class Xi{constructor(l,s){this.sub=l,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class p0{constructor(l){this.computed=l,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(l){if(!G||!S2||G===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==G)s=this.activeLink=new Xi(G,this),G.deps?(s.prevDep=G.depsTail,G.depsTail.nextDep=s,G.depsTail=s):G.deps=G.depsTail=s,i5(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const e=s.nextDep;e.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=e),s.prevDep=G.depsTail,s.nextDep=void 0,G.depsTail.nextDep=s,G.depsTail=s,G.deps===s&&(G.deps=e)}return s}trigger(l){this.version++,X1++,this.notify(l)}notify(l){m0();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{L0()}}}function i5(c){if(c.dep.sc++,c.sub.flags&4){const l=c.dep.computed;if(l&&!c.dep.subs){l.flags|=20;for(let e=l.deps;e;e=e.nextDep)i5(e)}const s=c.dep.subs;s!==c&&(c.prevSub=s,s&&(s.nextSub=c)),c.dep.subs=c}}const B3=new WeakMap,z1=Symbol(""),R3=Symbol(""),Y1=Symbol("");function l2(c,l,s){if(S2&&G){let e=B3.get(c);e||B3.set(c,e=new Map);let a=e.get(s);a||(e.set(s,a=new p0),a.map=e,a.key=s),a.track()}}function D2(c,l,s,e,a,n){const o=B3.get(c);if(!o){X1++;return}const i=t=>{t&&t.trigger()};if(m0(),l==="clear")o.forEach(i);else{const t=E(c),z=t&&f0(s);if(t&&s==="length"){const r=Number(e);o.forEach((L,u)=>{(u==="length"||u===Y1||!q2(u)&&u>=r)&&i(L)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),z&&i(o.get(Y1)),l){case"add":t?z&&i(o.get("length")):(i(o.get(z1)),N1(c)&&i(o.get(R3)));break;case"delete":t||(i(o.get(z1)),N1(c)&&i(o.get(R3)));break;case"set":N1(c)&&i(o.get(z1));break}}L0()}function d1(c){const l=$(c);return l===c?l:(l2(l,"iterate",Y1),N2(c)?l:l.map(s2))}function q4(c){return l2(c=$(c),"iterate",Y1),c}const Yi={__proto__:null,[Symbol.iterator](){return g3(this,Symbol.iterator,s2)},concat(...c){return d1(this).concat(...c.map(l=>E(l)?d1(l):l))},entries(){return g3(this,"entries",c=>(c[1]=s2(c[1]),c))},every(c,l){return R2(this,"every",c,l,void 0,arguments)},filter(c,l){return R2(this,"filter",c,l,s=>s.map(s2),arguments)},find(c,l){return R2(this,"find",c,l,s2,arguments)},findIndex(c,l){return R2(this,"findIndex",c,l,void 0,arguments)},findLast(c,l){return R2(this,"findLast",c,l,s2,arguments)},findLastIndex(c,l){return R2(this,"findLastIndex",c,l,void 0,arguments)},forEach(c,l){return R2(this,"forEach",c,l,void 0,arguments)},includes(...c){return x3(this,"includes",c)},indexOf(...c){return x3(this,"indexOf",c)},join(c){return d1(this).join(c)},lastIndexOf(...c){return x3(this,"lastIndexOf",c)},map(c,l){return R2(this,"map",c,l,void 0,arguments)},pop(){return H1(this,"pop")},push(...c){return H1(this,"push",c)},reduce(c,...l){return G6(this,"reduce",c,l)},reduceRight(c,...l){return G6(this,"reduceRight",c,l)},shift(){return H1(this,"shift")},some(c,l){return R2(this,"some",c,l,void 0,arguments)},splice(...c){return H1(this,"splice",c)},toReversed(){return d1(this).toReversed()},toSorted(c){return d1(this).toSorted(c)},toSpliced(...c){return d1(this).toSpliced(...c)},unshift(...c){return H1(this,"unshift",c)},values(){return g3(this,"values",s2)}};function g3(c,l,s){const e=q4(c),a=e[l]();return e!==c&&!N2(c)&&(a._next=a.next,a.next=()=>{const n=a._next();return n.value&&(n.value=s(n.value)),n}),a}const Qi=Array.prototype;function R2(c,l,s,e,a,n){const o=q4(c),i=o!==c&&!N2(c),t=o[l];if(t!==Qi[l]){const L=t.apply(c,n);return i?s2(L):L}let z=s;o!==c&&(i?z=function(L,u){return s.call(this,s2(L),u,c)}:s.length>2&&(z=function(L,u){return s.call(this,L,u,c)}));const r=t.call(o,z,e);return i&&a?a(r):r}function G6(c,l,s,e){const a=q4(c);let n=s;return a!==c&&(N2(c)?s.length>3&&(n=function(o,i,t){return s.call(this,o,i,t,c)}):n=function(o,i,t){return s.call(this,o,s2(i),t,c)}),a[l](n,...e)}function x3(c,l,s){const e=$(c);l2(e,"iterate",Y1);const a=e[l](...s);return(a===-1||a===!1)&&h0(s[0])?(s[0]=$(s[0]),e[l](...s)):a}function H1(c,l,s=[]){l1(),m0();const e=$(c)[l].apply(c,s);return L0(),s1(),e}const Ji=o0("__proto__,__v_isRef,__isVue"),t5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(q2));function Zi(c){q2(c)||(c=String(c));const l=$(this);return l2(l,"has",c),l.hasOwnProperty(c)}class f5{constructor(l=!1,s=!1){this._isReadonly=l,this._isShallow=s}get(l,s,e){if(s==="__v_skip")return l.__v_skip;const a=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return n;if(s==="__v_raw")return e===(a?n?ft:L5:n?m5:z5).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(e)?l:void 0;const o=E(l);if(!a){let t;if(o&&(t=Yi[s]))return t;if(s==="hasOwnProperty")return Zi}const i=Reflect.get(l,s,e2(l)?l:e);return(q2(s)?t5.has(s):Ji(s))||(a||l2(l,"get",s),n)?i:e2(i)?o&&f0(s)?i:i.value:X(i)?a?M5(i):C0(i):i}}class r5 extends f5{constructor(l=!1){super(!1,l)}set(l,s,e,a){let n=l[s];if(!this._isShallow){const t=M1(n);if(!N2(e)&&!M1(e)&&(n=$(n),e=$(e)),!E(l)&&e2(n)&&!e2(e))return t?!1:(n.value=e,!0)}const o=E(l)&&f0(s)?Number(s)<l.length:I(l,s),i=Reflect.set(l,s,e,e2(l)?l:a);return l===$(a)&&(o?Y2(e,n)&&D2(l,"set",s,e):D2(l,"add",s,e)),i}deleteProperty(l,s){const e=I(l,s);l[s];const a=Reflect.deleteProperty(l,s);return a&&e&&D2(l,"delete",s,void 0),a}has(l,s){const e=Reflect.has(l,s);return(!q2(s)||!t5.has(s))&&l2(l,"has",s),e}ownKeys(l){return l2(l,"iterate",E(l)?"length":z1),Reflect.ownKeys(l)}}class ct extends f5{constructor(l=!1){super(!0,l)}set(l,s){return!0}deleteProperty(l,s){return!0}}const lt=new r5,st=new ct,et=new r5(!0);const H3=c=>c,C4=c=>Reflect.getPrototypeOf(c);function at(c,l,s){return function(...e){const a=this.__v_raw,n=$(a),o=N1(n),i=c==="entries"||c===Symbol.iterator&&o,t=c==="keys"&&o,z=a[c](...e),r=s?H3:l?D3:s2;return!l&&l2(n,"iterate",t?R3:z1),{next(){const{value:L,done:u}=z.next();return u?{value:L,done:u}:{value:i?[r(L[0]),r(L[1])]:r(L),done:u}},[Symbol.iterator](){return this}}}}function d4(c){return function(...l){return c==="delete"?!1:c==="clear"?void 0:this}}function nt(c,l){const s={get(a){const n=this.__v_raw,o=$(n),i=$(a);c||(Y2(a,i)&&l2(o,"get",a),l2(o,"get",i));const{has:t}=C4(o),z=l?H3:c?D3:s2;if(t.call(o,a))return z(n.get(a));if(t.call(o,i))return z(n.get(i));n!==o&&n.get(a)},get size(){const a=this.__v_raw;return!c&&l2($(a),"iterate",z1),Reflect.get(a,"size",a)},has(a){const n=this.__v_raw,o=$(n),i=$(a);return c||(Y2(a,i)&&l2(o,"has",a),l2(o,"has",i)),a===i?n.has(a):n.has(a)||n.has(i)},forEach(a,n){const o=this,i=o.__v_raw,t=$(i),z=l?H3:c?D3:s2;return!c&&l2(t,"iterate",z1),i.forEach((r,L)=>a.call(n,z(r),z(L),o))}};return Z(s,c?{add:d4("add"),set:d4("set"),delete:d4("delete"),clear:d4("clear")}:{add(a){!l&&!N2(a)&&!M1(a)&&(a=$(a));const n=$(this);return C4(n).has.call(n,a)||(n.add(a),D2(n,"add",a,a)),this},set(a,n){!l&&!N2(n)&&!M1(n)&&(n=$(n));const o=$(this),{has:i,get:t}=C4(o);let z=i.call(o,a);z||(a=$(a),z=i.call(o,a));const r=t.call(o,a);return o.set(a,n),z?Y2(n,r)&&D2(o,"set",a,n):D2(o,"add",a,n),this},delete(a){const n=$(this),{has:o,get:i}=C4(n);let t=o.call(n,a);t||(a=$(a),t=o.call(n,a)),i&&i.call(n,a);const z=n.delete(a);return t&&D2(n,"delete",a,void 0),z},clear(){const a=$(this),n=a.size!==0,o=a.clear();return n&&D2(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=at(a,c,l)}),s}function u0(c,l){const s=nt(c,l);return(e,a,n)=>a==="__v_isReactive"?!c:a==="__v_isReadonly"?c:a==="__v_raw"?e:Reflect.get(I(s,a)&&a in e?s:e,a,n)}const ot={get:u0(!1,!1)},it={get:u0(!1,!0)},tt={get:u0(!0,!1)};const z5=new WeakMap,m5=new WeakMap,L5=new WeakMap,ft=new WeakMap;function rt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zt(c){return c.__v_skip||!Object.isExtensible(c)?0:rt(Ri(c))}function C0(c){return M1(c)?c:d0(c,!1,lt,ot,z5)}function mt(c){return d0(c,!1,et,it,m5)}function M5(c){return d0(c,!0,st,tt,L5)}function d0(c,l,s,e,a){if(!X(c)||c.__v_raw&&!(l&&c.__v_isReactive))return c;const n=a.get(c);if(n)return n;const o=zt(c);if(o===0)return c;const i=new Proxy(c,o===2?e:s);return a.set(c,i),i}function b1(c){return M1(c)?b1(c.__v_raw):!!(c&&c.__v_isReactive)}function M1(c){return!!(c&&c.__v_isReadonly)}function N2(c){return!!(c&&c.__v_isShallow)}function h0(c){return c?!!c.__v_raw:!1}function $(c){const l=c&&c.__v_raw;return l?$(l):c}function Lt(c){return!I(c,"__v_skip")&&Object.isExtensible(c)&&X8(c,"__v_skip",!0),c}const s2=c=>X(c)?C0(c):c,D3=c=>X(c)?M5(c):c;function e2(c){return c?c.__v_isRef===!0:!1}function j6(c){return Mt(c,!1)}function Mt(c,l){return e2(c)?c:new pt(c,l)}class pt{constructor(l,s){this.dep=new p0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?l:$(l),this._value=s?l:s2(l),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(l){const s=this._rawValue,e=this.__v_isShallow||N2(l)||M1(l);l=e?l:$(l),Y2(l,s)&&(this._rawValue=l,this._value=e?l:s2(l),this.dep.trigger())}}function ut(c){return e2(c)?c.value:c}const Ct={get:(c,l,s)=>l==="__v_raw"?c:ut(Reflect.get(c,l,s)),set:(c,l,s,e)=>{const a=c[l];return e2(a)&&!e2(s)?(a.value=s,!0):Reflect.set(c,l,s,e)}};function p5(c){return b1(c)?c:new Proxy(c,Ct)}class dt{constructor(l,s,e){this.fn=l,this.setter=s,this._value=void 0,this.dep=new p0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=X1-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=e}notify(){if(this.flags|=16,!(this.flags&8)&&G!==this)return s5(this,!0),!0}get value(){const l=this.dep.track();return n5(this),l&&(l.version=this.dep.version),this._value}set value(l){this.setter&&this.setter(l)}}function ht(c,l,s=!1){let e,a;return R(c)?e=c:(e=c.get,a=c.set),new dt(e,a,s)}const h4={},A4=new WeakMap;let t1;function gt(c,l=!1,s=t1){if(s){let e=A4.get(s);e||A4.set(s,e=[]),e.push(c)}}function xt(c,l,s=j){const{immediate:e,deep:a,once:n,scheduler:o,augmentJob:i,call:t}=s,z=A=>a?A:N2(A)||a===!1||a===0?K2(A,1):K2(A);let r,L,u,b,B=!1,F=!1;if(e2(c)?(L=()=>c.value,B=N2(c)):b1(c)?(L=()=>z(c),B=!0):E(c)?(F=!0,B=c.some(A=>b1(A)||N2(A)),L=()=>c.map(A=>{if(e2(A))return A.value;if(b1(A))return z(A);if(R(A))return t?t(A,2):A()})):R(c)?l?L=t?()=>t(c,2):c:L=()=>{if(u){l1();try{u()}finally{s1()}}const A=t1;t1=r;try{return t?t(c,3,[b]):c(b)}finally{t1=A}}:L=_2,l&&a){const A=L,D=a===!0?1/0:a;L=()=>K2(A(),D)}const O=Vi(),g=()=>{r.stop(),O&&O.active&&t0(O.effects,r)};if(n&&l){const A=l;l=(...D)=>{A(...D),g()}}let w=F?new Array(c.length).fill(h4):h4;const P=A=>{if(!(!(r.flags&1)||!r.dirty&&!A))if(l){const D=r.run();if(a||B||(F?D.some((z2,J)=>Y2(z2,w[J])):Y2(D,w))){u&&u();const z2=t1;t1=r;try{const J=[D,w===h4?void 0:F&&w[0]===h4?[]:w,b];t?t(l,3,J):l(...J),w=D}finally{t1=z2}}}else r.run()};return i&&i(P),r=new c5(L),r.scheduler=o?()=>o(P,!1):P,b=A=>gt(A,!1,r),u=r.onStop=()=>{const A=A4.get(r);if(A){if(t)t(A,4);else for(const D of A)D();A4.delete(r)}},l?e?P(!0):w=r.run():o?o(P.bind(null,!0),!0):r.run(),g.pause=r.pause.bind(r),g.resume=r.resume.bind(r),g.stop=g,g}function K2(c,l=1/0,s){if(l<=0||!X(c)||c.__v_skip||(s=s||new Set,s.has(c)))return c;if(s.add(c),l--,e2(c))K2(c.value,l,s);else if(E(c))for(let e=0;e<c.length;e++)K2(c[e],l,s);else if(W8(c)||N1(c))c.forEach(e=>{K2(e,l,s)});else if(V8(c)){for(const e in c)K2(c[e],l,s);for(const e of Object.getOwnPropertySymbols(c))Object.prototype.propertyIsEnumerable.call(c,e)&&K2(c[e],l,s)}return c}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function e4(c,l,s,e){try{return e?c(...e):c()}catch(a){U4(a,l,s)}}function E2(c,l,s,e){if(R(c)){const a=e4(c,l,s,e);return a&&G8(a)&&a.catch(n=>{U4(n,l,s)}),a}if(E(c)){const a=[];for(let n=0;n<c.length;n++)a.push(E2(c[n],l,s,e));return a}}function U4(c,l,s,e=!0){const a=l?l.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=l&&l.appContext.config||j;if(l){let i=l.parent;const t=l.proxy,z=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const r=i.ec;if(r){for(let L=0;L<r.length;L++)if(r[L](c,t,z)===!1)return}i=i.parent}if(n){l1(),e4(n,null,10,[c,t,z]),s1();return}}Nt(c,s,a,e,o)}function Nt(c,l,s,e=!0,a=!1){if(a)throw c;console.error(c)}const o2=[];let v2=-1;const S1=[];let j2=null,h1=0;const u5=Promise.resolve();let k4=null;function C5(c){const l=k4||u5;return c?l.then(this?c.bind(this):c):l}function bt(c){let l=v2+1,s=o2.length;for(;l<s;){const e=l+s>>>1,a=o2[e],n=Q1(a);n<c||n===c&&a.flags&2?l=e+1:s=e}return l}function g0(c){if(!(c.flags&1)){const l=Q1(c),s=o2[o2.length-1];!s||!(c.flags&2)&&l>=Q1(s)?o2.push(c):o2.splice(bt(l),0,c),c.flags|=1,d5()}}function d5(){k4||(k4=u5.then(g5))}function St(c){E(c)?S1.push(...c):j2&&c.id===-1?j2.splice(h1+1,0,c):c.flags&1||(S1.push(c),c.flags|=1),d5()}function V6(c,l,s=v2+1){for(;s<o2.length;s++){const e=o2[s];if(e&&e.flags&2){if(c&&e.id!==c.uid)continue;o2.splice(s,1),s--,e.flags&4&&(e.flags&=-2),e(),e.flags&4||(e.flags&=-2)}}}function h5(c){if(S1.length){const l=[...new Set(S1)].sort((s,e)=>Q1(s)-Q1(e));if(S1.length=0,j2){j2.push(...l);return}for(j2=l,h1=0;h1<j2.length;h1++){const s=j2[h1];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}j2=null,h1=0}}const Q1=c=>c.id==null?c.flags&2?-1:1/0:c.id;function g5(c){try{for(v2=0;v2<o2.length;v2++){const l=o2[v2];l&&!(l.flags&8)&&(l.flags&4&&(l.flags&=-2),e4(l,l.i,l.i?15:14),l.flags&4||(l.flags&=-2))}}finally{for(;v2<o2.length;v2++){const l=o2[v2];l&&(l.flags&=-2)}v2=-1,o2.length=0,h5(),k4=null,(o2.length||S1.length)&&g5()}}let f2=null,x5=null;function v4(c){const l=f2;return f2=c,x5=c&&c.type.__scopeId||null,l}function N5(c,l=f2,s){if(!l||c._n)return c;const e=(...a)=>{e._d&&l8(-1);const n=v4(l);let o;try{o=c(...a)}finally{v4(n),e._d&&l8(1)}return o};return e._n=!0,e._c=!0,e._d=!0,e}function o1(c,l,s,e){const a=c.dirs,n=l&&l.dirs;for(let o=0;o<a.length;o++){const i=a[o];n&&(i.oldValue=n[o].value);let t=i.dir[e];t&&(l1(),E2(t,s,8,[c.el,i,c,l]),s1())}}const wt=Symbol("_vte"),yt=c=>c.__isTeleport;function x0(c,l){c.shapeFlag&6&&c.component?(c.transition=l,x0(c.component.subTree,l)):c.shapeFlag&128?(c.ssContent.transition=l.clone(c.ssContent),c.ssFallback.transition=l.clone(c.ssFallback)):c.transition=l}/*! #__NO_SIDE_EFFECTS__ */function N0(c,l){return R(c)?Z({name:c.name},l,{setup:c}):c}function b5(c){c.ids=[c.ids[0]+c.ids[2]+++"-",0,0]}function T4(c,l,s,e,a=!1){if(E(c)){c.forEach((B,F)=>T4(B,l&&(E(l)?l[F]:l),s,e,a));return}if(w1(e)&&!a){e.shapeFlag&512&&e.type.__asyncResolved&&e.component.subTree.component&&T4(c,l,s,e.component.subTree);return}const n=e.shapeFlag&4?A0(e.component):e.el,o=a?null:n,{i,r:t}=c,z=l&&l.r,r=i.refs===j?i.refs={}:i.refs,L=i.setupState,u=$(L),b=L===j?()=>!1:B=>I(u,B);if(z!=null&&z!==t&&(Q(z)?(r[z]=null,b(z)&&(L[z]=null)):e2(z)&&(z.value=null)),R(t))e4(t,i,12,[o,r]);else{const B=Q(t),F=e2(t);if(B||F){const O=()=>{if(c.f){const g=B?b(t)?L[t]:r[t]:t.value;a?E(g)&&t0(g,n):E(g)?g.includes(n)||g.push(n):B?(r[t]=[n],b(t)&&(L[t]=r[t])):(t.value=[n],c.k&&(r[c.k]=t.value))}else B?(r[t]=o,b(t)&&(L[t]=o)):F&&(t.value=o,c.k&&(r[c.k]=o))};o?(O.id=-1,p2(O,s)):O()}}}I4().requestIdleCallback;I4().cancelIdleCallback;const w1=c=>!!c.type.__asyncLoader,S5=c=>c.type.__isKeepAlive;function At(c,l){w5(c,"a",l)}function kt(c,l){w5(c,"da",l)}function w5(c,l,s=i2){const e=c.__wdc||(c.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return c()});if(W4(l,e,s),s){let a=s.parent;for(;a&&a.parent;)S5(a.parent.vnode)&&vt(e,l,s,a),a=a.parent}}function vt(c,l,s,e){const a=W4(l,c,e,!0);b0(()=>{t0(e[l],a)},s)}function W4(c,l,s=i2,e=!1){if(s){const a=s[c]||(s[c]=[]),n=l.__weh||(l.__weh=(...o)=>{l1();const i=a4(s),t=E2(l,s,c,o);return i(),s1(),t});return e?a.unshift(n):a.push(n),n}}const U2=c=>(l,s=i2)=>{(!c4||c==="sp")&&W4(c,(...e)=>l(...e),s)},Tt=U2("bm"),y5=U2("m"),Pt=U2("bu"),Ft=U2("u"),_t=U2("bum"),b0=U2("um"),Et=U2("sp"),Bt=U2("rtg"),Rt=U2("rtc");function Ht(c,l=i2){W4("ec",c,l)}const Dt=Symbol.for("v-ndc");function Ot(c,l,s,e){let a;const n=s,o=E(c);if(o||Q(c)){const i=o&&b1(c);let t=!1;i&&(t=!N2(c),c=q4(c)),a=new Array(c.length);for(let z=0,r=c.length;z<r;z++)a[z]=l(t?s2(c[z]):c[z],z,void 0,n)}else if(typeof c=="number"){a=new Array(c);for(let i=0;i<c;i++)a[i]=l(i+1,i,void 0,n)}else if(X(c))if(c[Symbol.iterator])a=Array.from(c,(i,t)=>l(i,t,void 0,n));else{const i=Object.keys(c);a=new Array(i.length);for(let t=0,z=i.length;t<z;t++){const r=i[t];a[t]=l(c[r],r,t,n)}}else a=[];return a}function $t(c,l,s={},e,a){if(f2.ce||f2.parent&&w1(f2.parent)&&f2.parent.ce)return F4(),s8(C2,null,[r2("slot",s,e)],64);let n=c[l];n&&n._c&&(n._d=!1),F4();const o=n&&A5(n(s)),i=s.key||o&&o.key,t=s8(C2,{key:(i&&!q2(i)?i:`_${l}`)+(!o&&e?"_fb":"")},o||[],o&&c._===1?64:-2);return t.scopeId&&(t.slotScopeIds=[t.scopeId+"-s"]),n&&n._c&&(n._d=!0),t}function A5(c){return c.some(l=>Z1(l)?!(l.type===k1||l.type===C2&&!A5(l.children)):!0)?c:null}const O3=c=>c?K5(c)?A0(c):O3(c.parent):null,G1=Z(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>O3(c.parent),$root:c=>O3(c.root),$host:c=>c.ce,$emit:c=>c.emit,$options:c=>S0(c),$forceUpdate:c=>c.f||(c.f=()=>{g0(c.update)}),$nextTick:c=>c.n||(c.n=C5.bind(c.proxy)),$watch:c=>ff.bind(c)}),N3=(c,l)=>c!==j&&!c.__isScriptSetup&&I(c,l),It={get({_:c},l){if(l==="__v_skip")return!0;const{ctx:s,setupState:e,data:a,props:n,accessCache:o,type:i,appContext:t}=c;let z;if(l[0]!=="$"){const b=o[l];if(b!==void 0)switch(b){case 1:return e[l];case 2:return a[l];case 4:return s[l];case 3:return n[l]}else{if(N3(e,l))return o[l]=1,e[l];if(a!==j&&I(a,l))return o[l]=2,a[l];if((z=c.propsOptions[0])&&I(z,l))return o[l]=3,n[l];if(s!==j&&I(s,l))return o[l]=4,s[l];$3&&(o[l]=0)}}const r=G1[l];let L,u;if(r)return l==="$attrs"&&l2(c.attrs,"get",""),r(c);if((L=i.__cssModules)&&(L=L[l]))return L;if(s!==j&&I(s,l))return o[l]=4,s[l];if(u=t.config.globalProperties,I(u,l))return u[l]},set({_:c},l,s){const{data:e,setupState:a,ctx:n}=c;return N3(a,l)?(a[l]=s,!0):e!==j&&I(e,l)?(e[l]=s,!0):I(c.props,l)||l[0]==="$"&&l.slice(1)in c?!1:(n[l]=s,!0)},has({_:{data:c,setupState:l,accessCache:s,ctx:e,appContext:a,propsOptions:n}},o){let i;return!!s[o]||c!==j&&I(c,o)||N3(l,o)||(i=n[0])&&I(i,o)||I(e,o)||I(G1,o)||I(a.config.globalProperties,o)},defineProperty(c,l,s){return s.get!=null?c._.accessCache[l]=0:I(s,"value")&&this.set(c,l,s.value,null),Reflect.defineProperty(c,l,s)}};function K6(c){return E(c)?c.reduce((l,s)=>(l[s]=null,l),{}):c}let $3=!0;function qt(c){const l=S0(c),s=c.proxy,e=c.ctx;$3=!1,l.beforeCreate&&X6(l.beforeCreate,c,"bc");const{data:a,computed:n,methods:o,watch:i,provide:t,inject:z,created:r,beforeMount:L,mounted:u,beforeUpdate:b,updated:B,activated:F,deactivated:O,beforeDestroy:g,beforeUnmount:w,destroyed:P,unmounted:A,render:D,renderTracked:z2,renderTriggered:J,errorCaptured:w2,serverPrefetch:m4,expose:e1,inheritAttrs:_1,components:L4,directives:M4,filters:M3}=l;if(z&&Ut(z,e,null),o)for(const Y in o){const U=o[Y];R(U)&&(e[Y]=U.bind(s))}if(a){const Y=a.call(s,s);X(Y)&&(c.data=C0(Y))}if($3=!0,n)for(const Y in n){const U=n[Y],a1=R(U)?U.bind(s,s):R(U.get)?U.get.bind(s,s):_2,p4=!R(U)&&R(U.set)?U.set.bind(s):_2,n1=f1({get:a1,set:p4});Object.defineProperty(e,Y,{enumerable:!0,configurable:!0,get:()=>n1.value,set:y2=>n1.value=y2})}if(i)for(const Y in i)k5(i[Y],e,s,Y);if(t){const Y=R(t)?t.call(s):t;Reflect.ownKeys(Y).forEach(U=>{Xt(U,Y[U])})}r&&X6(r,c,"c");function a2(Y,U){E(U)?U.forEach(a1=>Y(a1.bind(s))):U&&Y(U.bind(s))}if(a2(Tt,L),a2(y5,u),a2(Pt,b),a2(Ft,B),a2(At,F),a2(kt,O),a2(Ht,w2),a2(Rt,z2),a2(Bt,J),a2(_t,w),a2(b0,A),a2(Et,m4),E(e1))if(e1.length){const Y=c.exposed||(c.exposed={});e1.forEach(U=>{Object.defineProperty(Y,U,{get:()=>s[U],set:a1=>s[U]=a1})})}else c.exposed||(c.exposed={});D&&c.render===_2&&(c.render=D),_1!=null&&(c.inheritAttrs=_1),L4&&(c.components=L4),M4&&(c.directives=M4),m4&&b5(c)}function Ut(c,l,s=_2){E(c)&&(c=I3(c));for(const e in c){const a=c[e];let n;X(a)?"default"in a?n=x4(a.from||e,a.default,!0):n=x4(a.from||e):n=x4(a),e2(n)?Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):l[e]=n}}function X6(c,l,s){E2(E(c)?c.map(e=>e.bind(l.proxy)):c.bind(l.proxy),l,s)}function k5(c,l,s,e){let a=e.includes(".")?q5(s,e):()=>s[e];if(Q(c)){const n=l[c];R(n)&&N4(a,n)}else if(R(c))N4(a,c.bind(s));else if(X(c))if(E(c))c.forEach(n=>k5(n,l,s,e));else{const n=R(c.handler)?c.handler.bind(s):l[c.handler];R(n)&&N4(a,n,c)}}function S0(c){const l=c.type,{mixins:s,extends:e}=l,{mixins:a,optionsCache:n,config:{optionMergeStrategies:o}}=c.appContext,i=n.get(l);let t;return i?t=i:!a.length&&!s&&!e?t=l:(t={},a.length&&a.forEach(z=>P4(t,z,o,!0)),P4(t,l,o)),X(l)&&n.set(l,t),t}function P4(c,l,s,e=!1){const{mixins:a,extends:n}=l;n&&P4(c,n,s,!0),a&&a.forEach(o=>P4(c,o,s,!0));for(const o in l)if(!(e&&o==="expose")){const i=Wt[o]||s&&s[o];c[o]=i?i(c[o],l[o]):l[o]}return c}const Wt={data:Y6,props:Q6,emits:Q6,methods:O1,computed:O1,beforeCreate:n2,created:n2,beforeMount:n2,mounted:n2,beforeUpdate:n2,updated:n2,beforeDestroy:n2,beforeUnmount:n2,destroyed:n2,unmounted:n2,activated:n2,deactivated:n2,errorCaptured:n2,serverPrefetch:n2,components:O1,directives:O1,watch:jt,provide:Y6,inject:Gt};function Y6(c,l){return l?c?function(){return Z(R(c)?c.call(this,this):c,R(l)?l.call(this,this):l)}:l:c}function Gt(c,l){return O1(I3(c),I3(l))}function I3(c){if(E(c)){const l={};for(let s=0;s<c.length;s++)l[c[s]]=c[s];return l}return c}function n2(c,l){return c?[...new Set([].concat(c,l))]:l}function O1(c,l){return c?Z(Object.create(null),c,l):l}function Q6(c,l){return c?E(c)&&E(l)?[...new Set([...c,...l])]:Z(Object.create(null),K6(c),K6(l??{})):l}function jt(c,l){if(!c)return l;if(!l)return c;const s=Z(Object.create(null),c);for(const e in l)s[e]=n2(c[e],l[e]);return s}function v5(){return{app:null,config:{isNativeTag:Ei,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vt=0;function Kt(c,l){return function(e,a=null){R(e)||(e=Z({},e)),a!=null&&!X(a)&&(a=null);const n=v5(),o=new WeakSet,i=[];let t=!1;const z=n.app={_uid:Vt++,_component:e,_props:a,_container:null,_context:n,_instance:null,version:Pf,get config(){return n.config},set config(r){},use(r,...L){return o.has(r)||(r&&R(r.install)?(o.add(r),r.install(z,...L)):R(r)&&(o.add(r),r(z,...L))),z},mixin(r){return n.mixins.includes(r)||n.mixins.push(r),z},component(r,L){return L?(n.components[r]=L,z):n.components[r]},directive(r,L){return L?(n.directives[r]=L,z):n.directives[r]},mount(r,L,u){if(!t){const b=z._ceVNode||r2(e,a);return b.appContext=n,u===!0?u="svg":u===!1&&(u=void 0),L&&l?l(b,r):c(b,r,u),t=!0,z._container=r,r.__vue_app__=z,A0(b.component)}},onUnmount(r){i.push(r)},unmount(){t&&(E2(i,z._instance,16),c(null,z._container),delete z._container.__vue_app__)},provide(r,L){return n.provides[r]=L,z},runWithContext(r){const L=y1;y1=z;try{return r()}finally{y1=L}}};return z}}let y1=null;function Xt(c,l){if(i2){let s=i2.provides;const e=i2.parent&&i2.parent.provides;e===s&&(s=i2.provides=Object.create(e)),s[c]=l}}function x4(c,l,s=!1){const e=i2||f2;if(e||y1){const a=y1?y1._context.provides:e?e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:void 0;if(a&&c in a)return a[c];if(arguments.length>1)return s&&R(l)?l.call(e&&e.proxy):l}}const T5={},P5=()=>Object.create(T5),F5=c=>Object.getPrototypeOf(c)===T5;function Yt(c,l,s,e=!1){const a={},n=P5();c.propsDefaults=Object.create(null),_5(c,l,a,n);for(const o in c.propsOptions[0])o in a||(a[o]=void 0);s?c.props=e?a:mt(a):c.type.props?c.props=a:c.props=n,c.attrs=n}function Qt(c,l,s,e){const{props:a,attrs:n,vnode:{patchFlag:o}}=c,i=$(a),[t]=c.propsOptions;let z=!1;if((e||o>0)&&!(o&16)){if(o&8){const r=c.vnode.dynamicProps;for(let L=0;L<r.length;L++){let u=r[L];if(G4(c.emitsOptions,u))continue;const b=l[u];if(t)if(I(n,u))b!==n[u]&&(n[u]=b,z=!0);else{const B=Q2(u);a[B]=q3(t,i,B,b,c,!1)}else b!==n[u]&&(n[u]=b,z=!0)}}}else{_5(c,l,a,n)&&(z=!0);let r;for(const L in i)(!l||!I(l,L)&&((r=C1(L))===L||!I(l,r)))&&(t?s&&(s[L]!==void 0||s[r]!==void 0)&&(a[L]=q3(t,i,L,void 0,c,!0)):delete a[L]);if(n!==i)for(const L in n)(!l||!I(l,L))&&(delete n[L],z=!0)}z&&D2(c.attrs,"set","")}function _5(c,l,s,e){const[a,n]=c.propsOptions;let o=!1,i;if(l)for(let t in l){if(q1(t))continue;const z=l[t];let r;a&&I(a,r=Q2(t))?!n||!n.includes(r)?s[r]=z:(i||(i={}))[r]=z:G4(c.emitsOptions,t)||(!(t in e)||z!==e[t])&&(e[t]=z,o=!0)}if(n){const t=$(s),z=i||j;for(let r=0;r<n.length;r++){const L=n[r];s[L]=q3(a,t,L,z[L],c,!I(z,L))}}return o}function q3(c,l,s,e,a,n){const o=c[s];if(o!=null){const i=I(o,"default");if(i&&e===void 0){const t=o.default;if(o.type!==Function&&!o.skipFactory&&R(t)){const{propsDefaults:z}=a;if(s in z)e=z[s];else{const r=a4(a);e=z[s]=t.call(null,l),r()}}else e=t;a.ce&&a.ce._setProp(s,e)}o[0]&&(n&&!i?e=!1:o[1]&&(e===""||e===C1(s))&&(e=!0))}return e}const Jt=new WeakMap;function E5(c,l,s=!1){const e=s?Jt:l.propsCache,a=e.get(c);if(a)return a;const n=c.props,o={},i=[];let t=!1;if(!R(c)){const r=L=>{t=!0;const[u,b]=E5(L,l,!0);Z(o,u),b&&i.push(...b)};!s&&l.mixins.length&&l.mixins.forEach(r),c.extends&&r(c.extends),c.mixins&&c.mixins.forEach(r)}if(!n&&!t)return X(c)&&e.set(c,x1),x1;if(E(n))for(let r=0;r<n.length;r++){const L=Q2(n[r]);J6(L)&&(o[L]=j)}else if(n)for(const r in n){const L=Q2(r);if(J6(L)){const u=n[r],b=o[L]=E(u)||R(u)?{type:u}:Z({},u),B=b.type;let F=!1,O=!0;if(E(B))for(let g=0;g<B.length;++g){const w=B[g],P=R(w)&&w.name;if(P==="Boolean"){F=!0;break}else P==="String"&&(O=!1)}else F=R(B)&&B.name==="Boolean";b[0]=F,b[1]=O,(F||I(b,"default"))&&i.push(L)}}const z=[o,i];return X(c)&&e.set(c,z),z}function J6(c){return c[0]!=="$"&&!q1(c)}const B5=c=>c[0]==="_"||c==="$stable",w0=c=>E(c)?c.map(T2):[T2(c)],Zt=(c,l,s)=>{if(l._n)return l;const e=N5((...a)=>w0(l(...a)),s);return e._c=!1,e},R5=(c,l,s)=>{const e=c._ctx;for(const a in c){if(B5(a))continue;const n=c[a];if(R(n))l[a]=Zt(a,n,e);else if(n!=null){const o=w0(n);l[a]=()=>o}}},H5=(c,l)=>{const s=w0(l);c.slots.default=()=>s},D5=(c,l,s)=>{for(const e in l)(s||e!=="_")&&(c[e]=l[e])},cf=(c,l,s)=>{const e=c.slots=P5();if(c.vnode.shapeFlag&32){const a=l._;a?(D5(e,l,s),s&&X8(e,"_",a,!0)):R5(l,e)}else l&&H5(c,l)},lf=(c,l,s)=>{const{vnode:e,slots:a}=c;let n=!0,o=j;if(e.shapeFlag&32){const i=l._;i?s&&i===1?n=!1:D5(a,l,s):(n=!l.$stable,R5(l,a)),o=l}else l&&(H5(c,l),o={default:1});if(n)for(const i in a)!B5(i)&&o[i]==null&&delete a[i]},p2=uf;function sf(c){return ef(c)}function ef(c,l){const s=I4();s.__VUE__=!0;const{insert:e,remove:a,patchProp:n,createElement:o,createText:i,createComment:t,setText:z,setElementText:r,parentNode:L,nextSibling:u,setScopeId:b=_2,insertStaticContent:B}=c,F=(f,m,M,d=null,p=null,C=null,S=void 0,N=null,x=!!m.dynamicChildren)=>{if(f===m)return;f&&!D1(f,m)&&(d=u4(f),y2(f,p,C,!0),f=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:h,ref:T,shapeFlag:y}=m;switch(h){case j4:O(f,m,M,d);break;case k1:g(f,m,M,d);break;case w3:f==null&&w(m,M,d,S);break;case C2:L4(f,m,M,d,p,C,S,N,x);break;default:y&1?D(f,m,M,d,p,C,S,N,x):y&6?M4(f,m,M,d,p,C,S,N,x):(y&64||y&128)&&h.process(f,m,M,d,p,C,S,N,x,B1)}T!=null&&p&&T4(T,f&&f.ref,C,m||f,!m)},O=(f,m,M,d)=>{if(f==null)e(m.el=i(m.children),M,d);else{const p=m.el=f.el;m.children!==f.children&&z(p,m.children)}},g=(f,m,M,d)=>{f==null?e(m.el=t(m.children||""),M,d):m.el=f.el},w=(f,m,M,d)=>{[f.el,f.anchor]=B(f.children,m,M,d,f.el,f.anchor)},P=({el:f,anchor:m},M,d)=>{let p;for(;f&&f!==m;)p=u(f),e(f,M,d),f=p;e(m,M,d)},A=({el:f,anchor:m})=>{let M;for(;f&&f!==m;)M=u(f),a(f),f=M;a(m)},D=(f,m,M,d,p,C,S,N,x)=>{m.type==="svg"?S="svg":m.type==="math"&&(S="mathml"),f==null?z2(m,M,d,p,C,S,N,x):m4(f,m,p,C,S,N,x)},z2=(f,m,M,d,p,C,S,N)=>{let x,h;const{props:T,shapeFlag:y,transition:v,dirs:_}=f;if(x=f.el=o(f.type,C,T&&T.is,T),y&8?r(x,f.children):y&16&&w2(f.children,x,null,d,p,b3(f,C),S,N),_&&o1(f,null,d,"created"),J(x,f,f.scopeId,S,d),T){for(const W in T)W!=="value"&&!q1(W)&&n(x,W,null,T[W],C,d);"value"in T&&n(x,"value",null,T.value,C),(h=T.onVnodeBeforeMount)&&k2(h,d,f)}_&&o1(f,null,d,"beforeMount");const H=af(p,v);H&&v.beforeEnter(x),e(x,m,M),((h=T&&T.onVnodeMounted)||H||_)&&p2(()=>{h&&k2(h,d,f),H&&v.enter(x),_&&o1(f,null,d,"mounted")},p)},J=(f,m,M,d,p)=>{if(M&&b(f,M),d)for(let C=0;C<d.length;C++)b(f,d[C]);if(p){let C=p.subTree;if(m===C||W5(C.type)&&(C.ssContent===m||C.ssFallback===m)){const S=p.vnode;J(f,S,S.scopeId,S.slotScopeIds,p.parent)}}},w2=(f,m,M,d,p,C,S,N,x=0)=>{for(let h=x;h<f.length;h++){const T=f[h]=N?V2(f[h]):T2(f[h]);F(null,T,m,M,d,p,C,S,N)}},m4=(f,m,M,d,p,C,S)=>{const N=m.el=f.el;let{patchFlag:x,dynamicChildren:h,dirs:T}=m;x|=f.patchFlag&16;const y=f.props||j,v=m.props||j;let _;if(M&&i1(M,!1),(_=v.onVnodeBeforeUpdate)&&k2(_,M,m,f),T&&o1(m,f,M,"beforeUpdate"),M&&i1(M,!0),(y.innerHTML&&v.innerHTML==null||y.textContent&&v.textContent==null)&&r(N,""),h?e1(f.dynamicChildren,h,N,M,d,b3(m,p),C):S||U(f,m,N,null,M,d,b3(m,p),C,!1),x>0){if(x&16)_1(N,y,v,M,p);else if(x&2&&y.class!==v.class&&n(N,"class",null,v.class,p),x&4&&n(N,"style",y.style,v.style,p),x&8){const H=m.dynamicProps;for(let W=0;W<H.length;W++){const q=H[W],m2=y[q],c2=v[q];(c2!==m2||q==="value")&&n(N,q,m2,c2,p,M)}}x&1&&f.children!==m.children&&r(N,m.children)}else!S&&h==null&&_1(N,y,v,M,p);((_=v.onVnodeUpdated)||T)&&p2(()=>{_&&k2(_,M,m,f),T&&o1(m,f,M,"updated")},d)},e1=(f,m,M,d,p,C,S)=>{for(let N=0;N<m.length;N++){const x=f[N],h=m[N],T=x.el&&(x.type===C2||!D1(x,h)||x.shapeFlag&70)?L(x.el):M;F(x,h,T,null,d,p,C,S,!0)}},_1=(f,m,M,d,p)=>{if(m!==M){if(m!==j)for(const C in m)!q1(C)&&!(C in M)&&n(f,C,m[C],null,p,d);for(const C in M){if(q1(C))continue;const S=M[C],N=m[C];S!==N&&C!=="value"&&n(f,C,N,S,p,d)}"value"in M&&n(f,"value",m.value,M.value,p)}},L4=(f,m,M,d,p,C,S,N,x)=>{const h=m.el=f?f.el:i(""),T=m.anchor=f?f.anchor:i("");let{patchFlag:y,dynamicChildren:v,slotScopeIds:_}=m;_&&(N=N?N.concat(_):_),f==null?(e(h,M,d),e(T,M,d),w2(m.children||[],M,T,p,C,S,N,x)):y>0&&y&64&&v&&f.dynamicChildren?(e1(f.dynamicChildren,v,M,p,C,S,N),(m.key!=null||p&&m===p.subTree)&&O5(f,m,!0)):U(f,m,M,T,p,C,S,N,x)},M4=(f,m,M,d,p,C,S,N,x)=>{m.slotScopeIds=N,f==null?m.shapeFlag&512?p.ctx.activate(m,M,d,S,x):M3(m,M,d,p,C,S,x):R6(f,m,x)},M3=(f,m,M,d,p,C,S)=>{const N=f.component=Sf(f,d,p);if(S5(f)&&(N.ctx.renderer=B1),wf(N,!1,S),N.asyncDep){if(p&&p.registerDep(N,a2,S),!f.el){const x=N.subTree=r2(k1);g(null,x,m,M)}}else a2(N,f,m,M,p,C,S)},R6=(f,m,M)=>{const d=m.component=f.component;if(Mf(f,m,M))if(d.asyncDep&&!d.asyncResolved){Y(d,m,M);return}else d.next=m,d.update();else m.el=f.el,d.vnode=m},a2=(f,m,M,d,p,C,S)=>{const N=()=>{if(f.isMounted){let{next:y,bu:v,u:_,parent:H,vnode:W}=f;{const L2=$5(f);if(L2){y&&(y.el=W.el,Y(f,y,S)),L2.asyncDep.then(()=>{f.isUnmounted||N()});return}}let q=y,m2;i1(f,!1),y?(y.el=W.el,Y(f,y,S)):y=W,v&&C3(v),(m2=y.props&&y.props.onVnodeBeforeUpdate)&&k2(m2,H,y,W),i1(f,!0);const c2=S3(f),b2=f.subTree;f.subTree=c2,F(b2,c2,L(b2.el),u4(b2),f,p,C),y.el=c2.el,q===null&&pf(f,c2.el),_&&p2(_,p),(m2=y.props&&y.props.onVnodeUpdated)&&p2(()=>k2(m2,H,y,W),p)}else{let y;const{el:v,props:_}=m,{bm:H,m:W,parent:q,root:m2,type:c2}=f,b2=w1(m);if(i1(f,!1),H&&C3(H),!b2&&(y=_&&_.onVnodeBeforeMount)&&k2(y,q,m),i1(f,!0),v&&$6){const L2=()=>{f.subTree=S3(f),$6(v,f.subTree,f,p,null)};b2&&c2.__asyncHydrate?c2.__asyncHydrate(v,f,L2):L2()}else{m2.ce&&m2.ce._injectChildStyle(c2);const L2=f.subTree=S3(f);F(null,L2,M,d,f,p,C),m.el=L2.el}if(W&&p2(W,p),!b2&&(y=_&&_.onVnodeMounted)){const L2=m;p2(()=>k2(y,q,L2),p)}(m.shapeFlag&256||q&&w1(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&p2(f.a,p),f.isMounted=!0,m=M=d=null}};f.scope.on();const x=f.effect=new c5(N);f.scope.off();const h=f.update=x.run.bind(x),T=f.job=x.runIfDirty.bind(x);T.i=f,T.id=f.uid,x.scheduler=()=>g0(T),i1(f,!0),h()},Y=(f,m,M)=>{m.component=f;const d=f.vnode.props;f.vnode=m,f.next=null,Qt(f,m.props,d,M),lf(f,m.children,M),l1(),V6(f),s1()},U=(f,m,M,d,p,C,S,N,x=!1)=>{const h=f&&f.children,T=f?f.shapeFlag:0,y=m.children,{patchFlag:v,shapeFlag:_}=m;if(v>0){if(v&128){p4(h,y,M,d,p,C,S,N,x);return}else if(v&256){a1(h,y,M,d,p,C,S,N,x);return}}_&8?(T&16&&E1(h,p,C),y!==h&&r(M,y)):T&16?_&16?p4(h,y,M,d,p,C,S,N,x):E1(h,p,C,!0):(T&8&&r(M,""),_&16&&w2(y,M,d,p,C,S,N,x))},a1=(f,m,M,d,p,C,S,N,x)=>{f=f||x1,m=m||x1;const h=f.length,T=m.length,y=Math.min(h,T);let v;for(v=0;v<y;v++){const _=m[v]=x?V2(m[v]):T2(m[v]);F(f[v],_,M,null,p,C,S,N,x)}h>T?E1(f,p,C,!0,!1,y):w2(m,M,d,p,C,S,N,x,y)},p4=(f,m,M,d,p,C,S,N,x)=>{let h=0;const T=m.length;let y=f.length-1,v=T-1;for(;h<=y&&h<=v;){const _=f[h],H=m[h]=x?V2(m[h]):T2(m[h]);if(D1(_,H))F(_,H,M,null,p,C,S,N,x);else break;h++}for(;h<=y&&h<=v;){const _=f[y],H=m[v]=x?V2(m[v]):T2(m[v]);if(D1(_,H))F(_,H,M,null,p,C,S,N,x);else break;y--,v--}if(h>y){if(h<=v){const _=v+1,H=_<T?m[_].el:d;for(;h<=v;)F(null,m[h]=x?V2(m[h]):T2(m[h]),M,H,p,C,S,N,x),h++}}else if(h>v)for(;h<=y;)y2(f[h],p,C,!0),h++;else{const _=h,H=h,W=new Map;for(h=H;h<=v;h++){const M2=m[h]=x?V2(m[h]):T2(m[h]);M2.key!=null&&W.set(M2.key,h)}let q,m2=0;const c2=v-H+1;let b2=!1,L2=0;const R1=new Array(c2);for(h=0;h<c2;h++)R1[h]=0;for(h=_;h<=y;h++){const M2=f[h];if(m2>=c2){y2(M2,p,C,!0);continue}let A2;if(M2.key!=null)A2=W.get(M2.key);else for(q=H;q<=v;q++)if(R1[q-H]===0&&D1(M2,m[q])){A2=q;break}A2===void 0?y2(M2,p,C,!0):(R1[A2-H]=h+1,A2>=L2?L2=A2:b2=!0,F(M2,m[A2],M,null,p,C,S,N,x),m2++)}const I6=b2?nf(R1):x1;for(q=I6.length-1,h=c2-1;h>=0;h--){const M2=H+h,A2=m[M2],q6=M2+1<T?m[M2+1].el:d;R1[h]===0?F(null,A2,M,q6,p,C,S,N,x):b2&&(q<0||h!==I6[q]?n1(A2,M,q6,2):q--)}}},n1=(f,m,M,d,p=null)=>{const{el:C,type:S,transition:N,children:x,shapeFlag:h}=f;if(h&6){n1(f.component.subTree,m,M,d);return}if(h&128){f.suspense.move(m,M,d);return}if(h&64){S.move(f,m,M,B1);return}if(S===C2){e(C,m,M);for(let y=0;y<x.length;y++)n1(x[y],m,M,d);e(f.anchor,m,M);return}if(S===w3){P(f,m,M);return}if(d!==2&&h&1&&N)if(d===0)N.beforeEnter(C),e(C,m,M),p2(()=>N.enter(C),p);else{const{leave:y,delayLeave:v,afterLeave:_}=N,H=()=>e(C,m,M),W=()=>{y(C,()=>{H(),_&&_()})};v?v(C,H,W):W()}else e(C,m,M)},y2=(f,m,M,d=!1,p=!1)=>{const{type:C,props:S,ref:N,children:x,dynamicChildren:h,shapeFlag:T,patchFlag:y,dirs:v,cacheIndex:_}=f;if(y===-2&&(p=!1),N!=null&&T4(N,null,M,f,!0),_!=null&&(m.renderCache[_]=void 0),T&256){m.ctx.deactivate(f);return}const H=T&1&&v,W=!w1(f);let q;if(W&&(q=S&&S.onVnodeBeforeUnmount)&&k2(q,m,f),T&6)_i(f.component,M,d);else{if(T&128){f.suspense.unmount(M,d);return}H&&o1(f,null,m,"beforeUnmount"),T&64?f.type.remove(f,m,M,B1,d):h&&!h.hasOnce&&(C!==C2||y>0&&y&64)?E1(h,m,M,!1,!0):(C===C2&&y&384||!p&&T&16)&&E1(x,m,M),d&&H6(f)}(W&&(q=S&&S.onVnodeUnmounted)||H)&&p2(()=>{q&&k2(q,m,f),H&&o1(f,null,m,"unmounted")},M)},H6=f=>{const{type:m,el:M,anchor:d,transition:p}=f;if(m===C2){Fi(M,d);return}if(m===w3){A(f);return}const C=()=>{a(M),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:S,delayLeave:N}=p,x=()=>S(M,C);N?N(f.el,C,x):x()}else C()},Fi=(f,m)=>{let M;for(;f!==m;)M=u(f),a(f),f=M;a(m)},_i=(f,m,M)=>{const{bum:d,scope:p,job:C,subTree:S,um:N,m:x,a:h}=f;Z6(x),Z6(h),d&&C3(d),p.stop(),C&&(C.flags|=8,y2(S,f,m,M)),N&&p2(N,m),p2(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},E1=(f,m,M,d=!1,p=!1,C=0)=>{for(let S=C;S<f.length;S++)y2(f[S],m,M,d,p)},u4=f=>{if(f.shapeFlag&6)return u4(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=u(f.anchor||f.el),M=m&&m[wt];return M?u(M):m};let p3=!1;const D6=(f,m,M)=>{f==null?m._vnode&&y2(m._vnode,null,null,!0):F(m._vnode||null,f,m,null,null,null,M),m._vnode=f,p3||(p3=!0,V6(),h5(),p3=!1)},B1={p:F,um:y2,m:n1,r:H6,mt:M3,mc:w2,pc:U,pbc:e1,n:u4,o:c};let O6,$6;return{render:D6,hydrate:O6,createApp:Kt(D6,O6)}}function b3({type:c,props:l},s){return s==="svg"&&c==="foreignObject"||s==="mathml"&&c==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:s}function i1({effect:c,job:l},s){s?(c.flags|=32,l.flags|=4):(c.flags&=-33,l.flags&=-5)}function af(c,l){return(!c||c&&!c.pendingBranch)&&l&&!l.persisted}function O5(c,l,s=!1){const e=c.children,a=l.children;if(E(e)&&E(a))for(let n=0;n<e.length;n++){const o=e[n];let i=a[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[n]=V2(a[n]),i.el=o.el),!s&&i.patchFlag!==-2&&O5(o,i)),i.type===j4&&(i.el=o.el)}}function nf(c){const l=c.slice(),s=[0];let e,a,n,o,i;const t=c.length;for(e=0;e<t;e++){const z=c[e];if(z!==0){if(a=s[s.length-1],c[a]<z){l[e]=a,s.push(e);continue}for(n=0,o=s.length-1;n<o;)i=n+o>>1,c[s[i]]<z?n=i+1:o=i;z<c[s[n]]&&(n>0&&(l[e]=s[n-1]),s[n]=e)}}for(n=s.length,o=s[n-1];n-- >0;)s[n]=o,o=l[o];return s}function $5(c){const l=c.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:$5(l)}function Z6(c){if(c)for(let l=0;l<c.length;l++)c[l].flags|=8}const of=Symbol.for("v-scx"),tf=()=>x4(of);function N4(c,l,s){return I5(c,l,s)}function I5(c,l,s=j){const{immediate:e,deep:a,flush:n,once:o}=s,i=Z({},s),t=l&&e||!l&&n!=="post";let z;if(c4){if(n==="sync"){const b=tf();z=b.__watcherHandles||(b.__watcherHandles=[])}else if(!t){const b=()=>{};return b.stop=_2,b.resume=_2,b.pause=_2,b}}const r=i2;i.call=(b,B,F)=>E2(b,r,B,F);let L=!1;n==="post"?i.scheduler=b=>{p2(b,r&&r.suspense)}:n!=="sync"&&(L=!0,i.scheduler=(b,B)=>{B?b():g0(b)}),i.augmentJob=b=>{l&&(b.flags|=4),L&&(b.flags|=2,r&&(b.id=r.uid,b.i=r))};const u=xt(c,l,i);return c4&&(z?z.push(u):t&&u()),u}function ff(c,l,s){const e=this.proxy,a=Q(c)?c.includes(".")?q5(e,c):()=>e[c]:c.bind(e,e);let n;R(l)?n=l:(n=l.handler,s=l);const o=a4(this),i=I5(a,n.bind(e),s);return o(),i}function q5(c,l){const s=l.split(".");return()=>{let e=c;for(let a=0;a<s.length&&e;a++)e=e[s[a]];return e}}const rf=(c,l)=>l==="modelValue"||l==="model-value"?c.modelModifiers:c[`${l}Modifiers`]||c[`${Q2(l)}Modifiers`]||c[`${C1(l)}Modifiers`];function zf(c,l,...s){if(c.isUnmounted)return;const e=c.vnode.props||j;let a=s;const n=l.startsWith("update:"),o=n&&rf(e,l.slice(7));o&&(o.trim&&(a=s.map(r=>Q(r)?r.trim():r)),o.number&&(a=s.map(Oi)));let i,t=e[i=u3(l)]||e[i=u3(Q2(l))];!t&&n&&(t=e[i=u3(C1(l))]),t&&E2(t,c,6,a);const z=e[i+"Once"];if(z){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,E2(z,c,6,a)}}function U5(c,l,s=!1){const e=l.emitsCache,a=e.get(c);if(a!==void 0)return a;const n=c.emits;let o={},i=!1;if(!R(c)){const t=z=>{const r=U5(z,l,!0);r&&(i=!0,Z(o,r))};!s&&l.mixins.length&&l.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!n&&!i?(X(c)&&e.set(c,null),null):(E(n)?n.forEach(t=>o[t]=null):Z(o,n),X(c)&&e.set(c,o),o)}function G4(c,l){return!c||!D4(l)?!1:(l=l.slice(2).replace(/Once$/,""),I(c,l[0].toLowerCase()+l.slice(1))||I(c,C1(l))||I(c,l))}function S3(c){const{type:l,vnode:s,proxy:e,withProxy:a,propsOptions:[n],slots:o,attrs:i,emit:t,render:z,renderCache:r,props:L,data:u,setupState:b,ctx:B,inheritAttrs:F}=c,O=v4(c);let g,w;try{if(s.shapeFlag&4){const A=a||e,D=A;g=T2(z.call(D,A,r,L,b,u,B)),w=i}else{const A=l;g=T2(A.length>1?A(L,{attrs:i,slots:o,emit:t}):A(L,null)),w=l.props?i:mf(i)}}catch(A){j1.length=0,U4(A,c,1),g=r2(k1)}let P=g;if(w&&F!==!1){const A=Object.keys(w),{shapeFlag:D}=P;A.length&&D&7&&(n&&A.some(i0)&&(w=Lf(w,n)),P=v1(P,w,!1,!0))}return s.dirs&&(P=v1(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(s.dirs):s.dirs),s.transition&&x0(P,s.transition),g=P,v4(O),g}const mf=c=>{let l;for(const s in c)(s==="class"||s==="style"||D4(s))&&((l||(l={}))[s]=c[s]);return l},Lf=(c,l)=>{const s={};for(const e in c)(!i0(e)||!(e.slice(9)in l))&&(s[e]=c[e]);return s};function Mf(c,l,s){const{props:e,children:a,component:n}=c,{props:o,children:i,patchFlag:t}=l,z=n.emitsOptions;if(l.dirs||l.transition)return!0;if(s&&t>=0){if(t&1024)return!0;if(t&16)return e?c8(e,o,z):!!o;if(t&8){const r=l.dynamicProps;for(let L=0;L<r.length;L++){const u=r[L];if(o[u]!==e[u]&&!G4(z,u))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:e===o?!1:e?o?c8(e,o,z):!0:!!o;return!1}function c8(c,l,s){const e=Object.keys(l);if(e.length!==Object.keys(c).length)return!0;for(let a=0;a<e.length;a++){const n=e[a];if(l[n]!==c[n]&&!G4(s,n))return!0}return!1}function pf({vnode:c,parent:l},s){for(;l;){const e=l.subTree;if(e.suspense&&e.suspense.activeBranch===c&&(e.el=c.el),e===c)(c=l.vnode).el=s,l=l.parent;else break}}const W5=c=>c.__isSuspense;function uf(c,l){l&&l.pendingBranch?E(c)?l.effects.push(...c):l.effects.push(c):St(c)}const C2=Symbol.for("v-fgt"),j4=Symbol.for("v-txt"),k1=Symbol.for("v-cmt"),w3=Symbol.for("v-stc"),j1=[];let d2=null;function F4(c=!1){j1.push(d2=c?null:[])}function Cf(){j1.pop(),d2=j1[j1.length-1]||null}let J1=1;function l8(c,l=!1){J1+=c,c<0&&d2&&l&&(d2.hasOnce=!0)}function G5(c){return c.dynamicChildren=J1>0?d2||x1:null,Cf(),J1>0&&d2&&d2.push(c),c}function j5(c,l,s,e,a,n){return G5(_4(c,l,s,e,a,n,!0))}function s8(c,l,s,e,a){return G5(r2(c,l,s,e,a,!0))}function Z1(c){return c?c.__v_isVNode===!0:!1}function D1(c,l){return c.type===l.type&&c.key===l.key}const V5=({key:c})=>c??null,b4=({ref:c,ref_key:l,ref_for:s})=>(typeof c=="number"&&(c=""+c),c!=null?Q(c)||e2(c)||R(c)?{i:f2,r:c,k:l,f:!!s}:c:null);function _4(c,l=null,s=null,e=0,a=null,n=c===C2?0:1,o=!1,i=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:l,key:l&&V5(l),ref:l&&b4(l),scopeId:x5,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:e,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:f2};return i?(y0(t,s),n&128&&c.normalize(t)):s&&(t.shapeFlag|=Q(s)?8:16),J1>0&&!o&&d2&&(t.patchFlag>0||n&6)&&t.patchFlag!==32&&d2.push(t),t}const r2=df;function df(c,l=null,s=null,e=0,a=null,n=!1){if((!c||c===Dt)&&(c=k1),Z1(c)){const i=v1(c,l,!0);return s&&y0(i,s),J1>0&&!n&&d2&&(i.shapeFlag&6?d2[d2.indexOf(c)]=i:d2.push(i)),i.patchFlag=-2,i}if(vf(c)&&(c=c.__vccOpts),l){l=hf(l);let{class:i,style:t}=l;i&&!Q(i)&&(l.class=z0(i)),X(t)&&(h0(t)&&!E(t)&&(t=Z({},t)),l.style=r0(t))}const o=Q(c)?1:W5(c)?128:yt(c)?64:X(c)?4:R(c)?2:0;return _4(c,l,s,e,a,o,n,!0)}function hf(c){return c?h0(c)||F5(c)?Z({},c):c:null}function v1(c,l,s=!1,e=!1){const{props:a,ref:n,patchFlag:o,children:i,transition:t}=c,z=l?xf(a||{},l):a,r={__v_isVNode:!0,__v_skip:!0,type:c.type,props:z,key:z&&V5(z),ref:l&&l.ref?s&&n?E(n)?n.concat(b4(l)):[n,b4(l)]:b4(l):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetStart:c.targetStart,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:l&&c.type!==C2?o===-1?16:o|16:o,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:t,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&v1(c.ssContent),ssFallback:c.ssFallback&&v1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return t&&e&&x0(r,t.clone(r)),r}function gf(c=" ",l=0){return r2(j4,null,c,l)}function T2(c){return c==null||typeof c=="boolean"?r2(k1):E(c)?r2(C2,null,c.slice()):Z1(c)?V2(c):r2(j4,null,String(c))}function V2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:v1(c)}function y0(c,l){let s=0;const{shapeFlag:e}=c;if(l==null)l=null;else if(E(l))s=16;else if(typeof l=="object")if(e&65){const a=l.default;a&&(a._c&&(a._d=!1),y0(c,a()),a._c&&(a._d=!0));return}else{s=32;const a=l._;!a&&!F5(l)?l._ctx=f2:a===3&&f2&&(f2.slots._===1?l._=1:(l._=2,c.patchFlag|=1024))}else R(l)?(l={default:l,_ctx:f2},s=32):(l=String(l),e&64?(s=16,l=[gf(l)]):s=8);c.children=l,c.shapeFlag|=s}function xf(...c){const l={};for(let s=0;s<c.length;s++){const e=c[s];for(const a in e)if(a==="class")l.class!==e.class&&(l.class=z0([l.class,e.class]));else if(a==="style")l.style=r0([l.style,e.style]);else if(D4(a)){const n=l[a],o=e[a];o&&n!==o&&!(E(n)&&n.includes(o))&&(l[a]=n?[].concat(n,o):o)}else a!==""&&(l[a]=e[a])}return l}function k2(c,l,s,e=null){E2(c,l,7,[s,e])}const Nf=v5();let bf=0;function Sf(c,l,s){const e=c.type,a=(l?l.appContext:c.appContext)||Nf,n={uid:bf++,vnode:c,type:e,parent:l,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ji(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(a.provides),ids:l?l.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:E5(e,a),emitsOptions:U5(e,a),emit:null,emitted:null,propsDefaults:j,inheritAttrs:e.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=l?l.root:n,n.emit=zf.bind(null,n),c.ce&&c.ce(n),n}let i2=null,E4,U3;{const c=I4(),l=(s,e)=>{let a;return(a=c[s])||(a=c[s]=[]),a.push(e),n=>{a.length>1?a.forEach(o=>o(n)):a[0](n)}};E4=l("__VUE_INSTANCE_SETTERS__",s=>i2=s),U3=l("__VUE_SSR_SETTERS__",s=>c4=s)}const a4=c=>{const l=i2;return E4(c),c.scope.on(),()=>{c.scope.off(),E4(l)}},e8=()=>{i2&&i2.scope.off(),E4(null)};function K5(c){return c.vnode.shapeFlag&4}let c4=!1;function wf(c,l=!1,s=!1){l&&U3(l);const{props:e,children:a}=c.vnode,n=K5(c);Yt(c,e,n,l),cf(c,a,s);const o=n?yf(c,l):void 0;return l&&U3(!1),o}function yf(c,l){const s=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,It);const{setup:e}=s;if(e){l1();const a=c.setupContext=e.length>1?kf(c):null,n=a4(c),o=e4(e,c,0,[c.props,a]),i=G8(o);if(s1(),n(),(i||c.sp)&&!w1(c)&&b5(c),i){if(o.then(e8,e8),l)return o.then(t=>{a8(c,t,l)}).catch(t=>{U4(t,c,0)});c.asyncDep=o}else a8(c,o,l)}else X5(c,l)}function a8(c,l,s){R(l)?c.type.__ssrInlineRender?c.ssrRender=l:c.render=l:X(l)&&(c.setupState=p5(l)),X5(c,s)}let n8;function X5(c,l,s){const e=c.type;if(!c.render){if(!l&&n8&&!e.render){const a=e.template||S0(c).template;if(a){const{isCustomElement:n,compilerOptions:o}=c.appContext.config,{delimiters:i,compilerOptions:t}=e,z=Z(Z({isCustomElement:n,delimiters:i},o),t);e.render=n8(a,z)}}c.render=e.render||_2}{const a=a4(c);l1();try{qt(c)}finally{s1(),a()}}}const Af={get(c,l){return l2(c,"get",""),c[l]}};function kf(c){const l=s=>{c.exposed=s||{}};return{attrs:new Proxy(c.attrs,Af),slots:c.slots,emit:c.emit,expose:l}}function A0(c){return c.exposed?c.exposeProxy||(c.exposeProxy=new Proxy(p5(Lt(c.exposed)),{get(l,s){if(s in l)return l[s];if(s in G1)return G1[s](c)},has(l,s){return s in l||s in G1}})):c.proxy}function vf(c){return R(c)&&"__vccOpts"in c}const f1=(c,l)=>ht(c,l,c4);function Tf(c,l,s){const e=arguments.length;return e===2?X(l)&&!E(l)?Z1(l)?r2(c,null,[l]):r2(c,l):r2(c,null,l):(e>3?s=Array.prototype.slice.call(arguments,2):e===3&&Z1(s)&&(s=[s]),r2(c,l,s))}const Pf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let W3;const o8=typeof window<"u"&&window.trustedTypes;if(o8)try{W3=o8.createPolicy("vue",{createHTML:c=>c})}catch{}const Y5=W3?c=>W3.createHTML(c):c=>c,Ff="http://www.w3.org/2000/svg",_f="http://www.w3.org/1998/Math/MathML",H2=typeof document<"u"?document:null,i8=H2&&H2.createElement("template"),Ef={insert:(c,l,s)=>{l.insertBefore(c,s||null)},remove:c=>{const l=c.parentNode;l&&l.removeChild(c)},createElement:(c,l,s,e)=>{const a=l==="svg"?H2.createElementNS(Ff,c):l==="mathml"?H2.createElementNS(_f,c):s?H2.createElement(c,{is:s}):H2.createElement(c);return c==="select"&&e&&e.multiple!=null&&a.setAttribute("multiple",e.multiple),a},createText:c=>H2.createTextNode(c),createComment:c=>H2.createComment(c),setText:(c,l)=>{c.nodeValue=l},setElementText:(c,l)=>{c.textContent=l},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>H2.querySelector(c),setScopeId(c,l){c.setAttribute(l,"")},insertStaticContent(c,l,s,e,a,n){const o=s?s.previousSibling:l.lastChild;if(a&&(a===n||a.nextSibling))for(;l.insertBefore(a.cloneNode(!0),s),!(a===n||!(a=a.nextSibling)););else{i8.innerHTML=Y5(e==="svg"?`<svg>${c}</svg>`:e==="mathml"?`<math>${c}</math>`:c);const i=i8.content;if(e==="svg"||e==="mathml"){const t=i.firstChild;for(;t.firstChild;)i.appendChild(t.firstChild);i.removeChild(t)}l.insertBefore(i,s)}return[o?o.nextSibling:l.firstChild,s?s.previousSibling:l.lastChild]}},Bf=Symbol("_vtc");function Rf(c,l,s){const e=c[Bf];e&&(l=(l?[l,...e]:[...e]).join(" ")),l==null?c.removeAttribute("class"):s?c.setAttribute("class",l):c.className=l}const t8=Symbol("_vod"),Hf=Symbol("_vsh"),Df=Symbol(""),Of=/(^|;)\s*display\s*:/;function $f(c,l,s){const e=c.style,a=Q(s);let n=!1;if(s&&!a){if(l)if(Q(l))for(const o of l.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&S4(e,i,"")}else for(const o in l)s[o]==null&&S4(e,o,"");for(const o in s)o==="display"&&(n=!0),S4(e,o,s[o])}else if(a){if(l!==s){const o=e[Df];o&&(s+=";"+o),e.cssText=s,n=Of.test(s)}}else l&&c.removeAttribute("style");t8 in c&&(c[t8]=n?e.display:"",c[Hf]&&(e.display="none"))}const f8=/\s*!important$/;function S4(c,l,s){if(E(s))s.forEach(e=>S4(c,l,e));else if(s==null&&(s=""),l.startsWith("--"))c.setProperty(l,s);else{const e=If(c,l);f8.test(s)?c.setProperty(C1(e),s.replace(f8,""),"important"):c[e]=s}}const r8=["Webkit","Moz","ms"],y3={};function If(c,l){const s=y3[l];if(s)return s;let e=Q2(l);if(e!=="filter"&&e in c)return y3[l]=e;e=K8(e);for(let a=0;a<r8.length;a++){const n=r8[a]+e;if(n in c)return y3[l]=n}return l}const z8="http://www.w3.org/1999/xlink";function m8(c,l,s,e,a,n=Gi(l)){e&&l.startsWith("xlink:")?s==null?c.removeAttributeNS(z8,l.slice(6,l.length)):c.setAttributeNS(z8,l,s):s==null||n&&!Y8(s)?c.removeAttribute(l):c.setAttribute(l,n?"":q2(s)?String(s):s)}function L8(c,l,s,e,a){if(l==="innerHTML"||l==="textContent"){s!=null&&(c[l]=l==="innerHTML"?Y5(s):s);return}const n=c.tagName;if(l==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?c.getAttribute("value")||"":c.value,t=s==null?c.type==="checkbox"?"on":"":String(s);(i!==t||!("_value"in c))&&(c.value=t),s==null&&c.removeAttribute(l),c._value=s;return}let o=!1;if(s===""||s==null){const i=typeof c[l];i==="boolean"?s=Y8(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{c[l]=s}catch{}o&&c.removeAttribute(a||l)}function qf(c,l,s,e){c.addEventListener(l,s,e)}function Uf(c,l,s,e){c.removeEventListener(l,s,e)}const M8=Symbol("_vei");function Wf(c,l,s,e,a=null){const n=c[M8]||(c[M8]={}),o=n[l];if(e&&o)o.value=e;else{const[i,t]=Gf(l);if(e){const z=n[l]=Kf(e,a);qf(c,i,z,t)}else o&&(Uf(c,i,o,t),n[l]=void 0)}}const p8=/(?:Once|Passive|Capture)$/;function Gf(c){let l;if(p8.test(c)){l={};let e;for(;e=c.match(p8);)c=c.slice(0,c.length-e[0].length),l[e[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):C1(c.slice(2)),l]}let A3=0;const jf=Promise.resolve(),Vf=()=>A3||(jf.then(()=>A3=0),A3=Date.now());function Kf(c,l){const s=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=s.attached)return;E2(Xf(e,s.value),l,5,[e])};return s.value=c,s.attached=Vf(),s}function Xf(c,l){if(E(l)){const s=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{s.call(c),c._stopped=!0},l.map(e=>a=>!a._stopped&&e&&e(a))}else return l}const u8=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Yf=(c,l,s,e,a,n)=>{const o=a==="svg";l==="class"?Rf(c,e,o):l==="style"?$f(c,s,e):D4(l)?i0(l)||Wf(c,l,s,e,n):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Qf(c,l,e,o))?(L8(c,l,e),!c.tagName.includes("-")&&(l==="value"||l==="checked"||l==="selected")&&m8(c,l,e,o,n,l!=="value")):c._isVueCE&&(/[A-Z]/.test(l)||!Q(e))?L8(c,Q2(l),e,n,l):(l==="true-value"?c._trueValue=e:l==="false-value"&&(c._falseValue=e),m8(c,l,e,o))};function Qf(c,l,s,e){if(e)return!!(l==="innerHTML"||l==="textContent"||l in c&&u8(l)&&R(s));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&c.tagName==="INPUT"||l==="type"&&c.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const a=c.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return u8(l)&&Q(s)?!1:l in c}const Jf=Z({patchProp:Yf},Ef);let C8;function Zf(){return C8||(C8=sf(Jf))}const cr=(...c)=>{const l=Zf().createApp(...c),{mount:s}=l;return l.mount=e=>{const a=sr(e);if(!a)return;const n=l._component;!R(n)&&!n.render&&!n.template&&(n.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,lr(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},l};function lr(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function sr(c){return Q(c)?document.querySelector(c):c}const er=["id"],ar=N0({__name:"Page",props:{id:{}},setup(c){return(l,s)=>(F4(),j5("div",{id:l.id,class:"min-w-full min-h-screen"},[$t(l.$slots,"default")],8,er))}}),nr={class:"border-l-4 w-full h-full flex justify-center items-center"},or={class:"font-bold text-6xl"},ir=N0({__name:"App",setup(c){const l=j6([]),s=n=>{const o=l.value[n];o&&o.$el instanceof HTMLElement&&o.$el.scrollIntoView({behavior:"smooth",inline:"center"})},e=j6(2),a=n=>{n.code==="Space"||n.code==="ArrowRight"||n.code==="ArrowUp"?(e.value=(e.value+1)%l.value.length,s(e.value)):(n.code==="ArrowLeft"||n.code==="ArrowDown")&&(e.value=(e.value-1+l.value.length)%l.value.length,s(e.value))};return y5(async()=>{await C5(),s(e.value),window.addEventListener("keydown",a)}),b0(()=>{window.removeEventListener("keydown",a)}),(n,o)=>(F4(),j5(C2,null,Ot(15,i=>r2(ar,{key:i,id:"page-"+i,ref_for:!0,ref_key:"pages",ref:l},{default:N5(()=>[_4("div",nr,[_4("h1",or,"Page "+J8(i),1)])]),_:2},1032,["id"])),64))}}),d8=()=>{};let k0={},Q5={},J5=null,Z5={mark:d8,measure:d8};try{typeof window<"u"&&(k0=window),typeof document<"u"&&(Q5=document),typeof MutationObserver<"u"&&(J5=MutationObserver),typeof performance<"u"&&(Z5=performance)}catch{}const{userAgent:h8=""}=k0.navigator||{},J2=k0,V=Q5,g8=J5,g4=Z5;J2.document;const W2=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",c7=~h8.indexOf("MSIE")||~h8.indexOf("Trident/");var K="classic",l7="duotone",h2="sharp",g2="sharp-duotone",tr=[K,l7,h2,g2],fr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},x8={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},rr=["kit"],zr=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,mr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Lr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Mr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},pr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ur={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Cr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},dr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},s7={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},hr=["solid","regular","light","thin","duotone","brands"],e7=[1,2,3,4,5,6,7,8,9,10],gr=e7.concat([11,12,13,14,15,16,17,18,19,20]),$1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xr=[...Object.keys(ur),...hr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$1.GROUP,$1.SWAP_OPACITY,$1.PRIMARY,$1.SECONDARY].concat(e7.map(c=>"".concat(c,"x"))).concat(gr.map(c=>"w-".concat(c))),Nr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},br={kit:{"fa-kit":"fak"}},Sr={kit:{fak:"fa-kit"}},N8={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const $2="___FONT_AWESOME___",G3=16,a7="fa",n7="svg-inline--fa",p1="data-fa-i2svg",j3="data-fa-pseudo-element",wr="data-fa-pseudo-element-pending",v0="data-prefix",T0="data-icon",b8="fontawesome-i2svg",yr="async",Ar=["HTML","HEAD","STYLE","SCRIPT"],o7=(()=>{try{return!0}catch{return!1}})(),i7=[K,h2,g2];function n4(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[K]}})}const t7={...s7};t7[K]={...s7[K],...x8.kit,...x8["kit-duotone"]};const m1=n4(t7),V3={...dr};V3[K]={...V3[K],...N8.kit,...N8["kit-duotone"]};const l4=n4(V3),K3={...Cr};K3[K]={...K3[K],...Sr.kit};const L1=n4(K3),X3={...pr};X3[K]={...X3[K],...br.kit};const kr=n4(X3),vr=zr,f7="fa-layers-text",Tr=mr,Pr={...fr};n4(Pr);const Fr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],k3=$1,T1=new Set;Object.keys(l4[K]).map(T1.add.bind(T1));Object.keys(l4[h2]).map(T1.add.bind(T1));Object.keys(l4[g2]).map(T1.add.bind(T1));const _r=[...rr,...xr],V1=J2.FontAwesomeConfig||{};function Er(c){var l=V.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Br(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l;const a=Br(Er(s));a!=null&&(V1[e]=a)});const r7={styleDefault:"solid",familyDefault:"classic",cssPrefix:a7,replacementClass:n7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V1.familyPrefix&&(V1.cssPrefix=V1.familyPrefix);const P1={...r7,...V1};P1.autoReplaceSvg||(P1.observeMutations=!1);const k={};Object.keys(r7).forEach(c=>{Object.defineProperty(k,c,{enumerable:!0,set:function(l){P1[c]=l,K1.forEach(s=>s(k))},get:function(){return P1[c]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(c){P1.cssPrefix=c,K1.forEach(l=>l(k))},get:function(){return P1.cssPrefix}});J2.FontAwesomeConfig=k;const K1=[];function Rr(c){return K1.push(c),()=>{K1.splice(K1.indexOf(c),1)}}const G2=G3,P2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hr(c){if(!c||!W2)return;const l=V.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const s=V.head.childNodes;let e=null;for(let a=s.length-1;a>-1;a--){const n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return V.head.insertBefore(l,e),c}const Dr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s4(){let c=12,l="";for(;c-- >0;)l+=Dr[Math.random()*62|0];return l}function F1(c){const l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function P0(c){return c.classList?F1(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function z7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Or(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(z7(c[s]),'" '),"").trim()}function V4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function F0(c){return c.size!==P2.size||c.x!==P2.x||c.y!==P2.y||c.rotate!==P2.rotate||c.flipX||c.flipY}function $r(c){let{transform:l,containerWidth:s,iconWidth:e}=c;const a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),t={transform:"".concat(n," ").concat(o," ").concat(i)},z={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:t,path:z}}function Ir(c){let{transform:l,width:s=G3,height:e=G3,startCentered:a=!1}=c,n="";return a&&c7?n+="translate(".concat(l.x/G2-s/2,"em, ").concat(l.y/G2-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/G2,"em), calc(-50% + ").concat(l.y/G2,"em)) "):n+="translate(".concat(l.x/G2,"em, ").concat(l.y/G2,"em) "),n+="scale(".concat(l.size/G2*(l.flipX?-1:1),", ").concat(l.size/G2*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var qr=`:root, :host {
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
}`;function m7(){const c=a7,l=n7,s=k.cssPrefix,e=k.replacementClass;let a=qr;if(s!==c||e!==l){const n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(i,".".concat(e))}return a}let S8=!1;function v3(){k.autoAddCss&&!S8&&(Hr(m7()),S8=!0)}var Ur={mixout(){return{dom:{css:m7,insertCss:v3}}},hooks(){return{beforeDOMElementCreation(){v3()},beforeI2svg(){v3()}}}};const I2=J2||{};I2[$2]||(I2[$2]={});I2[$2].styles||(I2[$2].styles={});I2[$2].hooks||(I2[$2].hooks={});I2[$2].shims||(I2[$2].shims=[]);var F2=I2[$2];const L7=[],M7=function(){V.removeEventListener("DOMContentLoaded",M7),B4=1,L7.map(c=>c())};let B4=!1;W2&&(B4=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),B4||V.addEventListener("DOMContentLoaded",M7));function Wr(c){W2&&(B4?setTimeout(c,0):L7.push(c))}function o4(c){const{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?z7(c):"<".concat(l," ").concat(Or(s),">").concat(e.map(o4).join(""),"</").concat(l,">")}function w8(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var T3=function(l,s,e,a){var n=Object.keys(l),o=n.length,i=s,t,z,r;for(e===void 0?(t=1,r=l[n[0]]):(t=0,r=e);t<o;t++)z=n[t],r=i(r,l[z],z,l);return r};function Gr(c){const l=[];let s=0;const e=c.length;for(;s<e;){const a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){const n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function Y3(c){const l=Gr(c);return l.length===1?l[0].toString(16):null}function jr(c,l){const s=c.length;let e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function y8(c){return Object.keys(c).reduce((l,s)=>{const e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function Q3(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:e=!1}=s,a=y8(l);typeof F2.hooks.addPack=="function"&&!e?F2.hooks.addPack(c,y8(l)):F2.styles[c]={...F2.styles[c]||{},...a},c==="fas"&&Q3("fa",l)}const{styles:r1,shims:Vr}=F2,Kr={[K]:Object.values(L1[K]),[h2]:Object.values(L1[h2]),[g2]:Object.values(L1[g2])};let _0=null,p7={},u7={},C7={},d7={},h7={};const Xr={[K]:Object.keys(m1[K]),[h2]:Object.keys(m1[h2]),[g2]:Object.keys(m1[g2])};function Yr(c){return~_r.indexOf(c)}function Qr(c,l){const s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!Yr(a)?a:null}const g7=()=>{const c=e=>T3(r1,(a,n,o)=>(a[o]=T3(n,e,{}),a),{});p7=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{e[i.toString(16)]=n}),e)),u7=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{e[i]=n}),e)),h7=c((e,a,n)=>{const o=a[2];return e[n]=n,o.forEach(i=>{e[i]=n}),e});const l="far"in r1||k.autoFetchSvg,s=T3(Vr,(e,a)=>{const n=a[0];let o=a[1];const i=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});C7=s.names,d7=s.unicodes,_0=K4(k.styleDefault,{family:k.familyDefault})};Rr(c=>{_0=K4(c.styleDefault,{family:k.familyDefault})});g7();function E0(c,l){return(p7[c]||{})[l]}function Jr(c,l){return(u7[c]||{})[l]}function X2(c,l){return(h7[c]||{})[l]}function x7(c){return C7[c]||{prefix:null,iconName:null}}function Zr(c){const l=d7[c],s=E0("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function Z2(){return _0}const B0=()=>({prefix:null,iconName:null,rest:[]});function K4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:s=K}=l,e=m1[s][c],a=l4[s][c]||l4[s][e],n=c in F2.styles?c:null;return a||n||null}const cz={[K]:Object.keys(L1[K]),[h2]:Object.keys(L1[h2]),[g2]:Object.keys(L1[g2])};function X4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:s=!1}=l,e={[K]:"".concat(k.cssPrefix,"-").concat(K),[h2]:"".concat(k.cssPrefix,"-").concat(h2),[g2]:"".concat(k.cssPrefix,"-").concat(g2)};let a=null,n=K;const o=tr.filter(t=>t!==l7);o.forEach(t=>{(c.includes(e[t])||c.some(z=>cz[t].includes(z)))&&(n=t)});const i=c.reduce((t,z)=>{const r=Qr(k.cssPrefix,z);if(r1[z]?(z=Kr[n].includes(z)?kr[n][z]:z,a=z,t.prefix=z):Xr[n].indexOf(z)>-1?(a=z,t.prefix=K4(z,{family:n})):r?t.iconName=r:z!==k.replacementClass&&!o.some(L=>z===e[L])&&t.rest.push(z),!s&&t.prefix&&t.iconName){const L=a==="fa"?x7(t.iconName):{},u=X2(t.prefix,t.iconName);L.prefix&&(a=null),t.iconName=L.iconName||u||t.iconName,t.prefix=L.prefix||t.prefix,t.prefix==="far"&&!r1.far&&r1.fas&&!k.autoFetchSvg&&(t.prefix="fas")}return t},B0());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===h2&&(r1.fass||k.autoFetchSvg)&&(i.prefix="fass",i.iconName=X2(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===g2&&(r1.fasds||k.autoFetchSvg)&&(i.prefix="fasds",i.iconName=X2(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||a==="fa")&&(i.prefix=Z2()||"fas"),i}class lz{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];const a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},Q3(n,a[n]);const o=L1[K][n];o&&Q3(o,a[n]),g7()})}reset(){this.definitions={}}_pullDefinitions(l,s){const e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{const{prefix:n,iconName:o,icon:i}=e[a],t=i[2];l[n]||(l[n]={}),t.length>0&&t.forEach(z=>{typeof z=="string"&&(l[n][z]=i)}),l[n][o]=i}),l}}let A8=[],g1={};const A1={},sz=Object.keys(A1);function ez(c,l){let{mixoutsTo:s}=l;return A8=c,g1={},Object.keys(A1).forEach(e=>{sz.indexOf(e)===-1&&delete A1[e]}),A8.forEach(e=>{const a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){const n=e.hooks();Object.keys(n).forEach(o=>{g1[o]||(g1[o]=[]),g1[o].push(n[o])})}e.provides&&e.provides(A1)}),s}function J3(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(g1[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function u1(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(g1[c]||[]).forEach(n=>{n.apply(null,s)})}function c1(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return A1[c]?A1[c].apply(null,l):void 0}function Z3(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const s=c.prefix||Z2();if(l)return l=X2(s,l)||l,w8(N7.definitions,s,l)||w8(F2.styles,s,l)}const N7=new lz,az=()=>{k.autoReplaceSvg=!1,k.observeMutations=!1,u1("noAuto")},nz={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W2?(u1("beforeI2svg",c),c1("pseudoElements2svg",c),c1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Wr(()=>{iz({autoReplaceSvgRoot:l}),u1("watch",c)})}},oz={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:X2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=K4(c[0]);return{prefix:s,iconName:X2(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(k.cssPrefix,"-"))>-1||c.match(vr))){const l=X4(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||Z2(),iconName:X2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=Z2();return{prefix:l,iconName:X2(l,c)||c}}}},x2={noAuto:az,config:k,dom:nz,parse:oz,library:N7,findIconDefinition:Z3,toHtml:o4},iz=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=V}=c;(Object.keys(F2.styles).length>0||k.autoFetchSvg)&&W2&&k.autoReplaceSvg&&x2.dom.i2svg({node:l})};function Y4(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>o4(s))}}),Object.defineProperty(c,"node",{get:function(){if(!W2)return;const s=V.createElement("div");return s.innerHTML=c.html,s.children}}),c}function tz(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(F0(o)&&s.found&&!e.found){const{width:i,height:t}=s,z={x:i/t/2,y:.5};a.style=V4({...n,"transform-origin":"".concat(z.x+o.x/16,"em ").concat(z.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:l}]}function fz(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c;const o=n===!0?"".concat(l,"-").concat(k.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:e}]}]}function R0(c){const{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:i,maskId:t,titleId:z,extra:r,watchable:L=!1}=c,{width:u,height:b}=s.found?s:l,B=e==="fak",F=[k.replacementClass,a?"".concat(k.cssPrefix,"-").concat(a):""].filter(D=>r.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(r.classes).join(" ");let O={children:[],attributes:{...r.attributes,"data-prefix":e,"data-icon":a,class:F,role:r.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(b)}};const g=B&&!~r.classes.indexOf("fa-fw")?{width:"".concat(u/b*16*.0625,"em")}:{};L&&(O.attributes[p1]=""),i&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(z||s4())},children:[i]}),delete O.attributes.title);const w={...O,prefix:e,iconName:a,main:l,mask:s,maskId:t,transform:n,symbol:o,styles:{...g,...r.styles}},{children:P,attributes:A}=s.found&&l.found?c1("generateAbstractMask",w)||{children:[],attributes:{}}:c1("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=P,w.attributes=A,o?fz(w):tz(w)}function k8(c){const{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:i=!1}=c,t={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")};i&&(t[p1]="");const z={...o.styles};F0(a)&&(z.transform=Ir({transform:a,startCentered:!0,width:s,height:e}),z["-webkit-transform"]=z.transform);const r=V4(z);r.length>0&&(t.style=r);const L=[];return L.push({tag:"span",attributes:t,children:[l]}),n&&L.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),L}function rz(c){const{content:l,title:s,extra:e}=c,a={...e.attributes,...s?{title:s}:{},class:e.classes.join(" ")},n=V4(e.styles);n.length>0&&(a.style=n);const o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}const{styles:P3}=F2;function c0(c){const l=c[0],s=c[1],[e]=c.slice(4);let a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(k3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(k3.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(k3.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}const zz={found:!1,width:512,height:512};function mz(c,l){!o7&&!k.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function l0(c,l){let s=l;return l==="fa"&&k.styleDefault!==null&&(l=Z2()),new Promise((e,a)=>{if(s==="fa"){const n=x7(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&P3[l]&&P3[l][c]){const n=P3[l][c];return e(c0(n))}mz(c,l),e({...zz,icon:k.showMissingIcons&&c?c1("missingIconAbstract")||{}:{}})})}const v8=()=>{},s0=k.measurePerformance&&g4&&g4.mark&&g4.measure?g4:{mark:v8,measure:v8},I1='FA "6.6.0"',Lz=c=>(s0.mark("".concat(I1," ").concat(c," begins")),()=>b7(c)),b7=c=>{s0.mark("".concat(I1," ").concat(c," ends")),s0.measure("".concat(I1," ").concat(c),"".concat(I1," ").concat(c," begins"),"".concat(I1," ").concat(c," ends"))};var H0={begin:Lz,end:b7};const w4=()=>{};function T8(c){return typeof(c.getAttribute?c.getAttribute(p1):null)=="string"}function Mz(c){const l=c.getAttribute?c.getAttribute(v0):null,s=c.getAttribute?c.getAttribute(T0):null;return l&&s}function pz(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(k.replacementClass)}function uz(){return k.autoReplaceSvg===!0?y4.replace:y4[k.autoReplaceSvg]||y4.replace}function Cz(c){return V.createElementNS("http://www.w3.org/2000/svg",c)}function dz(c){return V.createElement(c)}function S7(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:s=c.tag==="svg"?Cz:dz}=l;if(typeof c=="string")return V.createTextNode(c);const e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(S7(n,{ceFn:s}))}),e}function hz(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}const y4={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(S7(s),l)}),l.getAttribute(p1)===null&&k.keepOriginalSource){let s=V.createComment(hz(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){const l=c[0],s=c[1];if(~P0(l).indexOf(k.replacementClass))return y4.replace(c);const e=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){const n=s[0].attributes.class.split(" ").reduce((o,i)=>(i===k.replacementClass||i.match(e)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}const a=s.map(n=>o4(n)).join(`
`);l.setAttribute(p1,""),l.innerHTML=a}};function P8(c){c()}function w7(c,l){const s=typeof l=="function"?l:w4;if(c.length===0)s();else{let e=P8;k.mutateApproach===yr&&(e=J2.requestAnimationFrame||P8),e(()=>{const a=uz(),n=H0.begin("mutate");c.map(a),n(),s()})}}let D0=!1;function y7(){D0=!0}function e0(){D0=!1}let R4=null;function F8(c){if(!g8||!k.observeMutations)return;const{treeCallback:l=w4,nodeCallback:s=w4,pseudoElementsCallback:e=w4,observeMutationsRoot:a=V}=c;R4=new g8(n=>{if(D0)return;const o=Z2();F1(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!T8(i.addedNodes[0])&&(k.searchPseudoElements&&e(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&k.searchPseudoElements&&e(i.target.parentNode),i.type==="attributes"&&T8(i.target)&&~Fr.indexOf(i.attributeName))if(i.attributeName==="class"&&Mz(i.target)){const{prefix:t,iconName:z}=X4(P0(i.target));i.target.setAttribute(v0,t||o),z&&i.target.setAttribute(T0,z)}else pz(i.target)&&s(i.target)})}),W2&&R4.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function gz(){R4&&R4.disconnect()}function xz(c){const l=c.getAttribute("style");let s=[];return l&&(s=l.split(";").reduce((e,a)=>{const n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(e[o]=i.join(":").trim()),e},{})),s}function Nz(c){const l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"";let a=X4(P0(c));return a.prefix||(a.prefix=Z2()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=Jr(a.prefix,c.innerText)||E0(a.prefix,Y3(c.innerText))),!a.iconName&&k.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function bz(c){const l=F1(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return k.autoA11y&&(s?l["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(e||s4()):(l["aria-hidden"]="true",l.focusable="false")),l}function Sz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:s,prefix:e,rest:a}=Nz(c),n=bz(c),o=J3("parseNodeAttributes",{},c);let i=l.styleParser?xz(c):[];return{iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:P2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:n},...o}}const{styles:wz}=F2;function A7(c){const l=k.autoReplaceSvg==="nest"?_8(c,{styleParser:!1}):_8(c);return~l.extra.classes.indexOf(f7)?c1("generateLayersText",c,l):c1("generateSvgReplacementMutation",c,l)}let B2=new Set;i7.map(c=>{B2.add("fa-".concat(c))});Object.keys(m1[K]).map(B2.add.bind(B2));Object.keys(m1[h2]).map(B2.add.bind(B2));Object.keys(m1[g2]).map(B2.add.bind(B2));B2=[...B2];function E8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W2)return Promise.resolve();const s=V.documentElement.classList,e=r=>s.add("".concat(b8,"-").concat(r)),a=r=>s.remove("".concat(b8,"-").concat(r)),n=k.autoFetchSvg?B2:i7.map(r=>"fa-".concat(r)).concat(Object.keys(wz));n.includes("fa")||n.push("fa");const o=[".".concat(f7,":not([").concat(p1,"])")].concat(n.map(r=>".".concat(r,":not([").concat(p1,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=F1(c.querySelectorAll(o))}catch{}if(i.length>0)e("pending"),a("complete");else return Promise.resolve();const t=H0.begin("onTree"),z=i.reduce((r,L)=>{try{const u=A7(L);u&&r.push(u)}catch(u){o7||u.name==="MissingIcon"&&console.error(u)}return r},[]);return new Promise((r,L)=>{Promise.all(z).then(u=>{w7(u,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),t(),r()})}).catch(u=>{t(),L(u)})})}function yz(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A7(c).then(s=>{s&&w7([s],l)})}function Az(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const e=(l||{}).icon?l:Z3(l||{});let{mask:a}=s;return a&&(a=(a||{}).icon?a:Z3(a||{})),c(e,{...s,mask:a})}}const kz=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=P2,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:i=null,classes:t=[],attributes:z={},styles:r={}}=l;if(!c)return;const{prefix:L,iconName:u,icon:b}=c;return Y4({type:"icon",...c},()=>(u1("beforeDOMElementCreation",{iconDefinition:c,params:l}),k.autoA11y&&(o?z["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(i||s4()):(z["aria-hidden"]="true",z.focusable="false")),R0({icons:{main:c0(b),mask:a?c0(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:u,transform:{...P2,...s},symbol:e,title:o,maskId:n,titleId:i,extra:{attributes:z,styles:r,classes:t}})))};var vz={mixout(){return{icon:Az(kz)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=E8,c.nodeCallback=yz,c}}},provides(c){c.i2svg=function(l){const{node:s=V,callback:e=()=>{}}=l;return E8(s,e)},c.generateSvgReplacementMutation=function(l,s){const{iconName:e,title:a,titleId:n,prefix:o,transform:i,symbol:t,mask:z,maskId:r,extra:L}=s;return new Promise((u,b)=>{Promise.all([l0(e,o),z.iconName?l0(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(B=>{let[F,O]=B;u([l,R0({icons:{main:F,mask:O},prefix:o,iconName:e,transform:i,symbol:t,maskId:r,title:a,titleId:n,extra:L,watchable:!0})])}).catch(b)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l;const i=V4(o);i.length>0&&(e.style=i);let t;return F0(n)&&(t=c1("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(t||a.icon),{children:s,attributes:e}}}},Tz={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:s=[]}=l;return Y4({type:"layer"},()=>{u1("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},Pz={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return Y4({type:"counter",content:c},()=>(u1("beforeDOMElementCreation",{content:c,params:l}),rz({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(k.cssPrefix,"-layers-counter"),...e]}})))}}}},Fz={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=P2,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return Y4({type:"text",content:c},()=>(u1("beforeDOMElementCreation",{content:c,params:l}),k8({content:c,transform:{...P2,...s},title:e,extra:{attributes:n,styles:o,classes:["".concat(k.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){const{title:e,transform:a,extra:n}=s;let o=null,i=null;if(c7){const t=parseInt(getComputedStyle(l).fontSize,10),z=l.getBoundingClientRect();o=z.width/t,i=z.height/t}return k.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,k8({content:l.innerHTML,width:o,height:i,transform:a,title:e,extra:n,watchable:!0})])}}};const _z=new RegExp('"',"ug"),B8=[1105920,1112319],R8={FontAwesome:{normal:"fas",400:"fas"},...Mr,...Lr,...Nr},a0=Object.keys(R8).reduce((c,l)=>(c[l.toLowerCase()]=R8[l],c),{}),Ez=Object.keys(a0).reduce((c,l)=>{const s=a0[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function Bz(c){const l=c.replace(_z,""),s=jr(l,0),e=s>=B8[0]&&s<=B8[1],a=l.length===2?l[0]===l[1]:!1;return{value:Y3(a?l[0]:l),isSecondary:e||a}}function Rz(c,l){const s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(a0[s]||{})[a]||Ez[s]}function H8(c,l){const s="".concat(wr).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();const o=F1(c.children).filter(u=>u.getAttribute(j3)===l)[0],i=J2.getComputedStyle(c,l),t=i.getPropertyValue("font-family"),z=t.match(Tr),r=i.getPropertyValue("font-weight"),L=i.getPropertyValue("content");if(o&&!z)return c.removeChild(o),e();if(z&&L!=="none"&&L!==""){const u=i.getPropertyValue("content");let b=Rz(t,r);const{value:B,isSecondary:F}=Bz(u),O=z[0].startsWith("FontAwesome");let g=E0(b,B),w=g;if(O){const P=Zr(B);P.iconName&&P.prefix&&(g=P.iconName,b=P.prefix)}if(g&&!F&&(!o||o.getAttribute(v0)!==b||o.getAttribute(T0)!==w)){c.setAttribute(s,w),o&&c.removeChild(o);const P=Sz(),{extra:A}=P;A.attributes[j3]=l,l0(g,b).then(D=>{const z2=R0({...P,icons:{main:D,mask:B0()},prefix:b,iconName:w,extra:A,watchable:!0}),J=V.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(J,c.firstChild):c.appendChild(J),J.outerHTML=z2.map(w2=>o4(w2)).join(`