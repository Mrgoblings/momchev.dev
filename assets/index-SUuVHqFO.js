(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function i0(c){const l=Object.create(null);for(const s of c.split(","))l[s]=1;return s=>s in l}const j={},N1=[],_2=()=>{},Ei=()=>!1,D4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),t0=c=>c.startsWith("onUpdate:"),Z=Object.assign,f0=(c,l)=>{const s=c.indexOf(l);s>-1&&c.splice(s,1)},Bi=Object.prototype.hasOwnProperty,I=(c,l)=>Bi.call(c,l),E=Array.isArray,b1=c=>O4(c)==="[object Map]",G8=c=>O4(c)==="[object Set]",R=c=>typeof c=="function",Q=c=>typeof c=="string",q2=c=>typeof c=="symbol",X=c=>c!==null&&typeof c=="object",j8=c=>(X(c)||R(c))&&R(c.then)&&R(c.catch),V8=Object.prototype.toString,O4=c=>V8.call(c),Ri=c=>O4(c).slice(8,-1),K8=c=>O4(c)==="[object Object]",r0=c=>Q(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,U1=i0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$4=c=>{const l=Object.create(null);return s=>l[s]||(l[s]=c(s))},Hi=/-(\w)/g,Q2=$4(c=>c.replace(Hi,(l,s)=>s?s.toUpperCase():"")),Di=/\B([A-Z])/g,d1=$4(c=>c.replace(Di,"-$1").toLowerCase()),X8=$4(c=>c.charAt(0).toUpperCase()+c.slice(1)),u3=$4(c=>c?`on${X8(c)}`:""),Y2=(c,l)=>!Object.is(c,l),C3=(c,...l)=>{for(let s=0;s<c.length;s++)c[s](...l)},Y8=(c,l,s,e=!1)=>{Object.defineProperty(c,l,{configurable:!0,enumerable:!1,writable:e,value:s})},Oi=c=>{const l=parseFloat(c);return isNaN(l)?c:l};let W6;const I4=()=>W6||(W6=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function z0(c){if(E(c)){const l={};for(let s=0;s<c.length;s++){const e=c[s],a=Q(e)?Ui(e):z0(e);if(a)for(const n in a)l[n]=a[n]}return l}else if(Q(c)||X(c))return c}const $i=/;(?![^(]*\))/g,Ii=/:([^]+)/,qi=/\/\*[^]*?\*\//g;function Ui(c){const l={};return c.replace(qi,"").split($i).forEach(s=>{if(s){const e=s.split(Ii);e.length>1&&(l[e[0].trim()]=e[1].trim())}}),l}function m0(c){let l="";if(Q(c))l=c;else if(E(c))for(let s=0;s<c.length;s++){const e=m0(c[s]);e&&(l+=e+" ")}else if(X(c))for(const s in c)c[s]&&(l+=s+" ");return l.trim()}const Wi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gi=i0(Wi);function Q8(c){return!!c||c===""}const J8=c=>!!(c&&c.__v_isRef===!0),Z8=c=>Q(c)?c:c==null?"":E(c)||X(c)&&(c.toString===V8||!R(c.toString))?J8(c)?Z8(c.value):JSON.stringify(c,c5,2):String(c),c5=(c,l)=>J8(l)?c5(c,l.value):b1(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((s,[e,a],n)=>(s[d3(e,n)+" =>"]=a,s),{})}:G8(l)?{[`Set(${l.size})`]:[...l.values()].map(s=>d3(s))}:q2(l)?d3(l):X(l)&&!E(l)&&!K8(l)?String(l):l,d3=(c,l="")=>{var s;return q2(c)?`Symbol(${(s=c.description)!=null?s:l})`:c};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let C2;class ji{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=C2,!l&&C2&&(this.index=(C2.scopes||(C2.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let l,s;if(this.scopes)for(l=0,s=this.scopes.length;l<s;l++)this.scopes[l].pause();for(l=0,s=this.effects.length;l<s;l++)this.effects[l].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let l,s;if(this.scopes)for(l=0,s=this.scopes.length;l<s;l++)this.scopes[l].resume();for(l=0,s=this.effects.length;l<s;l++)this.effects[l].resume()}}run(l){if(this._active){const s=C2;try{return C2=this,l()}finally{C2=s}}}on(){C2=this}off(){C2=this.parent}stop(l){if(this._active){this._active=!1;let s,e;for(s=0,e=this.effects.length;s<e;s++)this.effects[s].stop();for(this.effects.length=0,s=0,e=this.cleanups.length;s<e;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,e=this.scopes.length;s<e;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!l){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Vi(){return C2}let G;const h3=new WeakSet;class l5{constructor(l){this.fn=l,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,C2&&C2.active&&C2.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,h3.has(this)&&(h3.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||e5(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,G6(this),a5(this);const l=G,s=S2;G=this,S2=!0;try{return this.fn()}finally{n5(this),G=l,S2=s,this.flags&=-3}}stop(){if(this.flags&1){for(let l=this.deps;l;l=l.nextDep)p0(l);this.deps=this.depsTail=void 0,G6(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?h3.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){E3(this)&&this.run()}get dirty(){return E3(this)}}let s5=0,W1,G1;function e5(c,l=!1){if(c.flags|=8,l){c.next=G1,G1=c;return}c.next=W1,W1=c}function L0(){s5++}function M0(){if(--s5>0)return;if(G1){let l=G1;for(G1=void 0;l;){const s=l.next;l.next=void 0,l.flags&=-9,l=s}}let c;for(;W1;){let l=W1;for(W1=void 0;l;){const s=l.next;if(l.next=void 0,l.flags&=-9,l.flags&1)try{l.trigger()}catch(e){c||(c=e)}l=s}}if(c)throw c}function a5(c){for(let l=c.deps;l;l=l.nextDep)l.version=-1,l.prevActiveLink=l.dep.activeLink,l.dep.activeLink=l}function n5(c){let l,s=c.depsTail,e=s;for(;e;){const a=e.prevDep;e.version===-1?(e===s&&(s=a),p0(e),Ki(e)):l=e,e.dep.activeLink=e.prevActiveLink,e.prevActiveLink=void 0,e=a}c.deps=l,c.depsTail=s}function E3(c){for(let l=c.deps;l;l=l.nextDep)if(l.dep.version!==l.version||l.dep.computed&&(o5(l.dep.computed)||l.dep.version!==l.version))return!0;return!!c._dirty}function o5(c){if(c.flags&4&&!(c.flags&16)||(c.flags&=-17,c.globalVersion===Y1))return;c.globalVersion=Y1;const l=c.dep;if(c.flags|=2,l.version>0&&!c.isSSR&&c.deps&&!E3(c)){c.flags&=-3;return}const s=G,e=S2;G=c,S2=!0;try{a5(c);const a=c.fn(c._value);(l.version===0||Y2(a,c._value))&&(c._value=a,l.version++)}catch(a){throw l.version++,a}finally{G=s,S2=e,n5(c),c.flags&=-3}}function p0(c,l=!1){const{dep:s,prevSub:e,nextSub:a}=c;if(e&&(e.nextSub=a,c.prevSub=void 0),a&&(a.prevSub=e,c.nextSub=void 0),s.subs===c&&(s.subs=e,!e&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)p0(n,!0)}!l&&!--s.sc&&s.map&&s.map.delete(s.key)}function Ki(c){const{prevDep:l,nextDep:s}=c;l&&(l.nextDep=s,c.prevDep=void 0),s&&(s.prevDep=l,c.nextDep=void 0)}let S2=!0;const i5=[];function l1(){i5.push(S2),S2=!1}function s1(){const c=i5.pop();S2=c===void 0?!0:c}function G6(c){const{cleanup:l}=c;if(c.cleanup=void 0,l){const s=G;G=void 0;try{l()}finally{G=s}}}let Y1=0;class Xi{constructor(l,s){this.sub=l,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class u0{constructor(l){this.computed=l,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(l){if(!G||!S2||G===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==G)s=this.activeLink=new Xi(G,this),G.deps?(s.prevDep=G.depsTail,G.depsTail.nextDep=s,G.depsTail=s):G.deps=G.depsTail=s,t5(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const e=s.nextDep;e.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=e),s.prevDep=G.depsTail,s.nextDep=void 0,G.depsTail.nextDep=s,G.depsTail=s,G.deps===s&&(G.deps=e)}return s}trigger(l){this.version++,Y1++,this.notify(l)}notify(l){L0();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{M0()}}}function t5(c){if(c.dep.sc++,c.sub.flags&4){const l=c.dep.computed;if(l&&!c.dep.subs){l.flags|=20;for(let e=l.deps;e;e=e.nextDep)t5(e)}const s=c.dep.subs;s!==c&&(c.prevSub=s,s&&(s.nextSub=c)),c.dep.subs=c}}const B3=new WeakMap,m1=Symbol(""),R3=Symbol(""),Q1=Symbol("");function l2(c,l,s){if(S2&&G){let e=B3.get(c);e||B3.set(c,e=new Map);let a=e.get(s);a||(e.set(s,a=new u0),a.map=e,a.key=s),a.track()}}function D2(c,l,s,e,a,n){const o=B3.get(c);if(!o){Y1++;return}const i=t=>{t&&t.trigger()};if(L0(),l==="clear")o.forEach(i);else{const t=E(c),z=t&&r0(s);if(t&&s==="length"){const r=Number(e);o.forEach((L,p)=>{(p==="length"||p===Q1||!q2(p)&&p>=r)&&i(L)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),z&&i(o.get(Q1)),l){case"add":t?z&&i(o.get("length")):(i(o.get(m1)),b1(c)&&i(o.get(R3)));break;case"delete":t||(i(o.get(m1)),b1(c)&&i(o.get(R3)));break;case"set":b1(c)&&i(o.get(m1));break}}M0()}function h1(c){const l=$(c);return l===c?l:(l2(l,"iterate",Q1),N2(c)?l:l.map(s2))}function q4(c){return l2(c=$(c),"iterate",Q1),c}const Yi={__proto__:null,[Symbol.iterator](){return g3(this,Symbol.iterator,s2)},concat(...c){return h1(this).concat(...c.map(l=>E(l)?h1(l):l))},entries(){return g3(this,"entries",c=>(c[1]=s2(c[1]),c))},every(c,l){return R2(this,"every",c,l,void 0,arguments)},filter(c,l){return R2(this,"filter",c,l,s=>s.map(s2),arguments)},find(c,l){return R2(this,"find",c,l,s2,arguments)},findIndex(c,l){return R2(this,"findIndex",c,l,void 0,arguments)},findLast(c,l){return R2(this,"findLast",c,l,s2,arguments)},findLastIndex(c,l){return R2(this,"findLastIndex",c,l,void 0,arguments)},forEach(c,l){return R2(this,"forEach",c,l,void 0,arguments)},includes(...c){return x3(this,"includes",c)},indexOf(...c){return x3(this,"indexOf",c)},join(c){return h1(this).join(c)},lastIndexOf(...c){return x3(this,"lastIndexOf",c)},map(c,l){return R2(this,"map",c,l,void 0,arguments)},pop(){return D1(this,"pop")},push(...c){return D1(this,"push",c)},reduce(c,...l){return j6(this,"reduce",c,l)},reduceRight(c,...l){return j6(this,"reduceRight",c,l)},shift(){return D1(this,"shift")},some(c,l){return R2(this,"some",c,l,void 0,arguments)},splice(...c){return D1(this,"splice",c)},toReversed(){return h1(this).toReversed()},toSorted(c){return h1(this).toSorted(c)},toSpliced(...c){return h1(this).toSpliced(...c)},unshift(...c){return D1(this,"unshift",c)},values(){return g3(this,"values",s2)}};function g3(c,l,s){const e=q4(c),a=e[l]();return e!==c&&!N2(c)&&(a._next=a.next,a.next=()=>{const n=a._next();return n.value&&(n.value=s(n.value)),n}),a}const Qi=Array.prototype;function R2(c,l,s,e,a,n){const o=q4(c),i=o!==c&&!N2(c),t=o[l];if(t!==Qi[l]){const L=t.apply(c,n);return i?s2(L):L}let z=s;o!==c&&(i?z=function(L,p){return s.call(this,s2(L),p,c)}:s.length>2&&(z=function(L,p){return s.call(this,L,p,c)}));const r=t.call(o,z,e);return i&&a?a(r):r}function j6(c,l,s,e){const a=q4(c);let n=s;return a!==c&&(N2(c)?s.length>3&&(n=function(o,i,t){return s.call(this,o,i,t,c)}):n=function(o,i,t){return s.call(this,o,s2(i),t,c)}),a[l](n,...e)}function x3(c,l,s){const e=$(c);l2(e,"iterate",Q1);const a=e[l](...s);return(a===-1||a===!1)&&g0(s[0])?(s[0]=$(s[0]),e[l](...s)):a}function D1(c,l,s=[]){l1(),L0();const e=$(c)[l].apply(c,s);return M0(),s1(),e}const Ji=i0("__proto__,__v_isRef,__isVue"),f5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(q2));function Zi(c){q2(c)||(c=String(c));const l=$(this);return l2(l,"has",c),l.hasOwnProperty(c)}class r5{constructor(l=!1,s=!1){this._isReadonly=l,this._isShallow=s}get(l,s,e){if(s==="__v_skip")return l.__v_skip;const a=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return n;if(s==="__v_raw")return e===(a?n?ft:M5:n?L5:m5).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(e)?l:void 0;const o=E(l);if(!a){let t;if(o&&(t=Yi[s]))return t;if(s==="hasOwnProperty")return Zi}const i=Reflect.get(l,s,e2(l)?l:e);return(q2(s)?f5.has(s):Ji(s))||(a||l2(l,"get",s),n)?i:e2(i)?o&&r0(s)?i:i.value:X(i)?a?p5(i):d0(i):i}}class z5 extends r5{constructor(l=!1){super(!1,l)}set(l,s,e,a){let n=l[s];if(!this._isShallow){const t=p1(n);if(!N2(e)&&!p1(e)&&(n=$(n),e=$(e)),!E(l)&&e2(n)&&!e2(e))return t?!1:(n.value=e,!0)}const o=E(l)&&r0(s)?Number(s)<l.length:I(l,s),i=Reflect.set(l,s,e,e2(l)?l:a);return l===$(a)&&(o?Y2(e,n)&&D2(l,"set",s,e):D2(l,"add",s,e)),i}deleteProperty(l,s){const e=I(l,s);l[s];const a=Reflect.deleteProperty(l,s);return a&&e&&D2(l,"delete",s,void 0),a}has(l,s){const e=Reflect.has(l,s);return(!q2(s)||!f5.has(s))&&l2(l,"has",s),e}ownKeys(l){return l2(l,"iterate",E(l)?"length":m1),Reflect.ownKeys(l)}}class ct extends r5{constructor(l=!1){super(!0,l)}set(l,s){return!0}deleteProperty(l,s){return!0}}const lt=new z5,st=new ct,et=new z5(!0);const H3=c=>c,h4=c=>Reflect.getPrototypeOf(c);function at(c,l,s){return function(...e){const a=this.__v_raw,n=$(a),o=b1(n),i=c==="entries"||c===Symbol.iterator&&o,t=c==="keys"&&o,z=a[c](...e),r=s?H3:l?D3:s2;return!l&&l2(n,"iterate",t?R3:m1),{next(){const{value:L,done:p}=z.next();return p?{value:L,done:p}:{value:i?[r(L[0]),r(L[1])]:r(L),done:p}},[Symbol.iterator](){return this}}}}function g4(c){return function(...l){return c==="delete"?!1:c==="clear"?void 0:this}}function nt(c,l){const s={get(a){const n=this.__v_raw,o=$(n),i=$(a);c||(Y2(a,i)&&l2(o,"get",a),l2(o,"get",i));const{has:t}=h4(o),z=l?H3:c?D3:s2;if(t.call(o,a))return z(n.get(a));if(t.call(o,i))return z(n.get(i));n!==o&&n.get(a)},get size(){const a=this.__v_raw;return!c&&l2($(a),"iterate",m1),Reflect.get(a,"size",a)},has(a){const n=this.__v_raw,o=$(n),i=$(a);return c||(Y2(a,i)&&l2(o,"has",a),l2(o,"has",i)),a===i?n.has(a):n.has(a)||n.has(i)},forEach(a,n){const o=this,i=o.__v_raw,t=$(i),z=l?H3:c?D3:s2;return!c&&l2(t,"iterate",m1),i.forEach((r,L)=>a.call(n,z(r),z(L),o))}};return Z(s,c?{add:g4("add"),set:g4("set"),delete:g4("delete"),clear:g4("clear")}:{add(a){!l&&!N2(a)&&!p1(a)&&(a=$(a));const n=$(this);return h4(n).has.call(n,a)||(n.add(a),D2(n,"add",a,a)),this},set(a,n){!l&&!N2(n)&&!p1(n)&&(n=$(n));const o=$(this),{has:i,get:t}=h4(o);let z=i.call(o,a);z||(a=$(a),z=i.call(o,a));const r=t.call(o,a);return o.set(a,n),z?Y2(n,r)&&D2(o,"set",a,n):D2(o,"add",a,n),this},delete(a){const n=$(this),{has:o,get:i}=h4(n);let t=o.call(n,a);t||(a=$(a),t=o.call(n,a)),i&&i.call(n,a);const z=n.delete(a);return t&&D2(n,"delete",a,void 0),z},clear(){const a=$(this),n=a.size!==0,o=a.clear();return n&&D2(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=at(a,c,l)}),s}function C0(c,l){const s=nt(c,l);return(e,a,n)=>a==="__v_isReactive"?!c:a==="__v_isReadonly"?c:a==="__v_raw"?e:Reflect.get(I(s,a)&&a in e?s:e,a,n)}const ot={get:C0(!1,!1)},it={get:C0(!1,!0)},tt={get:C0(!0,!1)};const m5=new WeakMap,L5=new WeakMap,M5=new WeakMap,ft=new WeakMap;function rt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zt(c){return c.__v_skip||!Object.isExtensible(c)?0:rt(Ri(c))}function d0(c){return p1(c)?c:h0(c,!1,lt,ot,m5)}function mt(c){return h0(c,!1,et,it,L5)}function p5(c){return h0(c,!0,st,tt,M5)}function h0(c,l,s,e,a){if(!X(c)||c.__v_raw&&!(l&&c.__v_isReactive))return c;const n=a.get(c);if(n)return n;const o=zt(c);if(o===0)return c;const i=new Proxy(c,o===2?e:s);return a.set(c,i),i}function S1(c){return p1(c)?S1(c.__v_raw):!!(c&&c.__v_isReactive)}function p1(c){return!!(c&&c.__v_isReadonly)}function N2(c){return!!(c&&c.__v_isShallow)}function g0(c){return c?!!c.__v_raw:!1}function $(c){const l=c&&c.__v_raw;return l?$(l):c}function Lt(c){return!I(c,"__v_skip")&&Object.isExtensible(c)&&Y8(c,"__v_skip",!0),c}const s2=c=>X(c)?d0(c):c,D3=c=>X(c)?p5(c):c;function e2(c){return c?c.__v_isRef===!0:!1}function V6(c){return Mt(c,!1)}function Mt(c,l){return e2(c)?c:new pt(c,l)}class pt{constructor(l,s){this.dep=new u0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?l:$(l),this._value=s?l:s2(l),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(l){const s=this._rawValue,e=this.__v_isShallow||N2(l)||p1(l);l=e?l:$(l),Y2(l,s)&&(this._rawValue=l,this._value=e?l:s2(l),this.dep.trigger())}}function ut(c){return e2(c)?c.value:c}const Ct={get:(c,l,s)=>l==="__v_raw"?c:ut(Reflect.get(c,l,s)),set:(c,l,s,e)=>{const a=c[l];return e2(a)&&!e2(s)?(a.value=s,!0):Reflect.set(c,l,s,e)}};function u5(c){return S1(c)?c:new Proxy(c,Ct)}class dt{constructor(l,s,e){this.fn=l,this.setter=s,this._value=void 0,this.dep=new u0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Y1-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=e}notify(){if(this.flags|=16,!(this.flags&8)&&G!==this)return e5(this,!0),!0}get value(){const l=this.dep.track();return o5(this),l&&(l.version=this.dep.version),this._value}set value(l){this.setter&&this.setter(l)}}function ht(c,l,s=!1){let e,a;return R(c)?e=c:(e=c.get,a=c.set),new dt(e,a,s)}const x4={},v4=new WeakMap;let t1;function gt(c,l=!1,s=t1){if(s){let e=v4.get(s);e||v4.set(s,e=[]),e.push(c)}}function xt(c,l,s=j){const{immediate:e,deep:a,once:n,scheduler:o,augmentJob:i,call:t}=s,z=A=>a?A:N2(A)||a===!1||a===0?K2(A,1):K2(A);let r,L,p,g,B=!1,F=!1;if(e2(c)?(L=()=>c.value,B=N2(c)):S1(c)?(L=()=>z(c),B=!0):E(c)?(F=!0,B=c.some(A=>S1(A)||N2(A)),L=()=>c.map(A=>{if(e2(A))return A.value;if(S1(A))return z(A);if(R(A))return t?t(A,2):A()})):R(c)?l?L=t?()=>t(c,2):c:L=()=>{if(p){l1();try{p()}finally{s1()}}const A=t1;t1=r;try{return t?t(c,3,[g]):c(g)}finally{t1=A}}:L=_2,l&&a){const A=L,D=a===!0?1/0:a;L=()=>K2(A(),D)}const O=Vi(),x=()=>{r.stop(),O&&O.active&&f0(O.effects,r)};if(n&&l){const A=l;l=(...D)=>{A(...D),x()}}let w=F?new Array(c.length).fill(x4):x4;const P=A=>{if(!(!(r.flags&1)||!r.dirty&&!A))if(l){const D=r.run();if(a||B||(F?D.some((m2,J)=>Y2(m2,w[J])):Y2(D,w))){p&&p();const m2=t1;t1=r;try{const J=[D,w===x4?void 0:F&&w[0]===x4?[]:w,g];t?t(l,3,J):l(...J),w=D}finally{t1=m2}}}else r.run()};return i&&i(P),r=new l5(L),r.scheduler=o?()=>o(P,!1):P,g=A=>gt(A,!1,r),p=r.onStop=()=>{const A=v4.get(r);if(A){if(t)t(A,4);else for(const D of A)D();v4.delete(r)}},l?e?P(!0):w=r.run():o?o(P.bind(null,!0),!0):r.run(),x.pause=r.pause.bind(r),x.resume=r.resume.bind(r),x.stop=x,x}function K2(c,l=1/0,s){if(l<=0||!X(c)||c.__v_skip||(s=s||new Set,s.has(c)))return c;if(s.add(c),l--,e2(c))K2(c.value,l,s);else if(E(c))for(let e=0;e<c.length;e++)K2(c[e],l,s);else if(G8(c)||b1(c))c.forEach(e=>{K2(e,l,s)});else if(K8(c)){for(const e in c)K2(c[e],l,s);for(const e of Object.getOwnPropertySymbols(c))Object.prototype.propertyIsEnumerable.call(c,e)&&K2(c[e],l,s)}return c}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function n4(c,l,s,e){try{return e?c(...e):c()}catch(a){U4(a,l,s)}}function E2(c,l,s,e){if(R(c)){const a=n4(c,l,s,e);return a&&j8(a)&&a.catch(n=>{U4(n,l,s)}),a}if(E(c)){const a=[];for(let n=0;n<c.length;n++)a.push(E2(c[n],l,s,e));return a}}function U4(c,l,s,e=!0){const a=l?l.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=l&&l.appContext.config||j;if(l){let i=l.parent;const t=l.proxy,z=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const r=i.ec;if(r){for(let L=0;L<r.length;L++)if(r[L](c,t,z)===!1)return}i=i.parent}if(n){l1(),n4(n,null,10,[c,t,z]),s1();return}}Nt(c,s,a,e,o)}function Nt(c,l,s,e=!0,a=!1){if(a)throw c;console.error(c)}const o2=[];let v2=-1;const w1=[];let j2=null,g1=0;const C5=Promise.resolve();let T4=null;function d5(c){const l=T4||C5;return c?l.then(this?c.bind(this):c):l}function bt(c){let l=v2+1,s=o2.length;for(;l<s;){const e=l+s>>>1,a=o2[e],n=J1(a);n<c||n===c&&a.flags&2?l=e+1:s=e}return l}function x0(c){if(!(c.flags&1)){const l=J1(c),s=o2[o2.length-1];!s||!(c.flags&2)&&l>=J1(s)?o2.push(c):o2.splice(bt(l),0,c),c.flags|=1,h5()}}function h5(){T4||(T4=C5.then(x5))}function St(c){E(c)?w1.push(...c):j2&&c.id===-1?j2.splice(g1+1,0,c):c.flags&1||(w1.push(c),c.flags|=1),h5()}function K6(c,l,s=v2+1){for(;s<o2.length;s++){const e=o2[s];if(e&&e.flags&2){if(c&&e.id!==c.uid)continue;o2.splice(s,1),s--,e.flags&4&&(e.flags&=-2),e(),e.flags&4||(e.flags&=-2)}}}function g5(c){if(w1.length){const l=[...new Set(w1)].sort((s,e)=>J1(s)-J1(e));if(w1.length=0,j2){j2.push(...l);return}for(j2=l,g1=0;g1<j2.length;g1++){const s=j2[g1];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}j2=null,g1=0}}const J1=c=>c.id==null?c.flags&2?-1:1/0:c.id;function x5(c){try{for(v2=0;v2<o2.length;v2++){const l=o2[v2];l&&!(l.flags&8)&&(l.flags&4&&(l.flags&=-2),n4(l,l.i,l.i?15:14),l.flags&4||(l.flags&=-2))}}finally{for(;v2<o2.length;v2++){const l=o2[v2];l&&(l.flags&=-2)}v2=-1,o2.length=0,g5(),T4=null,(o2.length||w1.length)&&x5()}}let r2=null,N5=null;function P4(c){const l=r2;return r2=c,N5=c&&c.type.__scopeId||null,l}function b5(c,l=r2,s){if(!l||c._n)return c;const e=(...a)=>{e._d&&s8(-1);const n=P4(l);let o;try{o=c(...a)}finally{P4(n),e._d&&s8(1)}return o};return e._n=!0,e._c=!0,e._d=!0,e}function o1(c,l,s,e){const a=c.dirs,n=l&&l.dirs;for(let o=0;o<a.length;o++){const i=a[o];n&&(i.oldValue=n[o].value);let t=i.dir[e];t&&(l1(),E2(t,s,8,[c.el,i,c,l]),s1())}}const wt=Symbol("_vte"),yt=c=>c.__isTeleport;function N0(c,l){c.shapeFlag&6&&c.component?(c.transition=l,N0(c.component.subTree,l)):c.shapeFlag&128?(c.ssContent.transition=l.clone(c.ssContent),c.ssFallback.transition=l.clone(c.ssFallback)):c.transition=l}/*! #__NO_SIDE_EFFECTS__ */function b0(c,l){return R(c)?Z({name:c.name},l,{setup:c}):c}function S5(c){c.ids=[c.ids[0]+c.ids[2]+++"-",0,0]}function F4(c,l,s,e,a=!1){if(E(c)){c.forEach((B,F)=>F4(B,l&&(E(l)?l[F]:l),s,e,a));return}if(y1(e)&&!a){e.shapeFlag&512&&e.type.__asyncResolved&&e.component.subTree.component&&F4(c,l,s,e.component.subTree);return}const n=e.shapeFlag&4?k0(e.component):e.el,o=a?null:n,{i,r:t}=c,z=l&&l.r,r=i.refs===j?i.refs={}:i.refs,L=i.setupState,p=$(L),g=L===j?()=>!1:B=>I(p,B);if(z!=null&&z!==t&&(Q(z)?(r[z]=null,g(z)&&(L[z]=null)):e2(z)&&(z.value=null)),R(t))n4(t,i,12,[o,r]);else{const B=Q(t),F=e2(t);if(B||F){const O=()=>{if(c.f){const x=B?g(t)?L[t]:r[t]:t.value;a?E(x)&&f0(x,n):E(x)?x.includes(n)||x.push(n):B?(r[t]=[n],g(t)&&(L[t]=r[t])):(t.value=[n],c.k&&(r[c.k]=t.value))}else B?(r[t]=o,g(t)&&(L[t]=o)):F&&(t.value=o,c.k&&(r[c.k]=o))};o?(O.id=-1,u2(O,s)):O()}}}I4().requestIdleCallback;I4().cancelIdleCallback;const y1=c=>!!c.type.__asyncLoader,w5=c=>c.type.__isKeepAlive;function At(c,l){y5(c,"a",l)}function kt(c,l){y5(c,"da",l)}function y5(c,l,s=i2){const e=c.__wdc||(c.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return c()});if(W4(l,e,s),s){let a=s.parent;for(;a&&a.parent;)w5(a.parent.vnode)&&vt(e,l,s,a),a=a.parent}}function vt(c,l,s,e){const a=W4(l,c,e,!0);S0(()=>{f0(e[l],a)},s)}function W4(c,l,s=i2,e=!1){if(s){const a=s[c]||(s[c]=[]),n=l.__weh||(l.__weh=(...o)=>{l1();const i=o4(s),t=E2(l,s,c,o);return i(),s1(),t});return e?a.unshift(n):a.push(n),n}}const U2=c=>(l,s=i2)=>{(!s4||c==="sp")&&W4(c,(...e)=>l(...e),s)},Tt=U2("bm"),A5=U2("m"),Pt=U2("bu"),Ft=U2("u"),_t=U2("bum"),S0=U2("um"),Et=U2("sp"),Bt=U2("rtg"),Rt=U2("rtc");function Ht(c,l=i2){W4("ec",c,l)}const Dt=Symbol.for("v-ndc");function Ot(c,l,s,e){let a;const n=s,o=E(c);if(o||Q(c)){const i=o&&S1(c);let t=!1;i&&(t=!N2(c),c=q4(c)),a=new Array(c.length);for(let z=0,r=c.length;z<r;z++)a[z]=l(t?s2(c[z]):c[z],z,void 0,n)}else if(typeof c=="number"){a=new Array(c);for(let i=0;i<c;i++)a[i]=l(i+1,i,void 0,n)}else if(X(c))if(c[Symbol.iterator])a=Array.from(c,(i,t)=>l(i,t,void 0,n));else{const i=Object.keys(c);a=new Array(i.length);for(let t=0,z=i.length;t<z;t++){const r=i[t];a[t]=l(c[r],r,t,n)}}else a=[];return a}function $t(c,l,s={},e,a){if(r2.ce||r2.parent&&y1(r2.parent)&&r2.parent.ce)return Z1(),e8(f2,null,[z2("slot",s,e)],64);let n=c[l];n&&n._c&&(n._d=!1),Z1();const o=n&&k5(n(s)),i=s.key||o&&o.key,t=e8(f2,{key:(i&&!q2(i)?i:`_${l}`)+(!o&&e?"_fb":"")},o||[],o&&c._===1?64:-2);return t.scopeId&&(t.slotScopeIds=[t.scopeId+"-s"]),n&&n._c&&(n._d=!0),t}function k5(c){return c.some(l=>l4(l)?!(l.type===v1||l.type===f2&&!k5(l.children)):!0)?c:null}const O3=c=>c?K5(c)?k0(c):O3(c.parent):null,j1=Z(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>O3(c.parent),$root:c=>O3(c.root),$host:c=>c.ce,$emit:c=>c.emit,$options:c=>w0(c),$forceUpdate:c=>c.f||(c.f=()=>{x0(c.update)}),$nextTick:c=>c.n||(c.n=d5.bind(c.proxy)),$watch:c=>ff.bind(c)}),N3=(c,l)=>c!==j&&!c.__isScriptSetup&&I(c,l),It={get({_:c},l){if(l==="__v_skip")return!0;const{ctx:s,setupState:e,data:a,props:n,accessCache:o,type:i,appContext:t}=c;let z;if(l[0]!=="$"){const g=o[l];if(g!==void 0)switch(g){case 1:return e[l];case 2:return a[l];case 4:return s[l];case 3:return n[l]}else{if(N3(e,l))return o[l]=1,e[l];if(a!==j&&I(a,l))return o[l]=2,a[l];if((z=c.propsOptions[0])&&I(z,l))return o[l]=3,n[l];if(s!==j&&I(s,l))return o[l]=4,s[l];$3&&(o[l]=0)}}const r=j1[l];let L,p;if(r)return l==="$attrs"&&l2(c.attrs,"get",""),r(c);if((L=i.__cssModules)&&(L=L[l]))return L;if(s!==j&&I(s,l))return o[l]=4,s[l];if(p=t.config.globalProperties,I(p,l))return p[l]},set({_:c},l,s){const{data:e,setupState:a,ctx:n}=c;return N3(a,l)?(a[l]=s,!0):e!==j&&I(e,l)?(e[l]=s,!0):I(c.props,l)||l[0]==="$"&&l.slice(1)in c?!1:(n[l]=s,!0)},has({_:{data:c,setupState:l,accessCache:s,ctx:e,appContext:a,propsOptions:n}},o){let i;return!!s[o]||c!==j&&I(c,o)||N3(l,o)||(i=n[0])&&I(i,o)||I(e,o)||I(j1,o)||I(a.config.globalProperties,o)},defineProperty(c,l,s){return s.get!=null?c._.accessCache[l]=0:I(s,"value")&&this.set(c,l,s.value,null),Reflect.defineProperty(c,l,s)}};function X6(c){return E(c)?c.reduce((l,s)=>(l[s]=null,l),{}):c}let $3=!0;function qt(c){const l=w0(c),s=c.proxy,e=c.ctx;$3=!1,l.beforeCreate&&Y6(l.beforeCreate,c,"bc");const{data:a,computed:n,methods:o,watch:i,provide:t,inject:z,created:r,beforeMount:L,mounted:p,beforeUpdate:g,updated:B,activated:F,deactivated:O,beforeDestroy:x,beforeUnmount:w,destroyed:P,unmounted:A,render:D,renderTracked:m2,renderTriggered:J,errorCaptured:w2,serverPrefetch:M4,expose:e1,inheritAttrs:E1,components:p4,directives:u4,filters:M3}=l;if(z&&Ut(z,e,null),o)for(const Y in o){const U=o[Y];R(U)&&(e[Y]=U.bind(s))}if(a){const Y=a.call(s,s);X(Y)&&(c.data=d0(Y))}if($3=!0,n)for(const Y in n){const U=n[Y],a1=R(U)?U.bind(s,s):R(U.get)?U.get.bind(s,s):_2,C4=!R(U)&&R(U.set)?U.set.bind(s):_2,n1=f1({get:a1,set:C4});Object.defineProperty(e,Y,{enumerable:!0,configurable:!0,get:()=>n1.value,set:y2=>n1.value=y2})}if(i)for(const Y in i)v5(i[Y],e,s,Y);if(t){const Y=R(t)?t.call(s):t;Reflect.ownKeys(Y).forEach(U=>{Xt(U,Y[U])})}r&&Y6(r,c,"c");function a2(Y,U){E(U)?U.forEach(a1=>Y(a1.bind(s))):U&&Y(U.bind(s))}if(a2(Tt,L),a2(A5,p),a2(Pt,g),a2(Ft,B),a2(At,F),a2(kt,O),a2(Ht,w2),a2(Rt,m2),a2(Bt,J),a2(_t,w),a2(S0,A),a2(Et,M4),E(e1))if(e1.length){const Y=c.exposed||(c.exposed={});e1.forEach(U=>{Object.defineProperty(Y,U,{get:()=>s[U],set:a1=>s[U]=a1})})}else c.exposed||(c.exposed={});D&&c.render===_2&&(c.render=D),E1!=null&&(c.inheritAttrs=E1),p4&&(c.components=p4),u4&&(c.directives=u4),M4&&S5(c)}function Ut(c,l,s=_2){E(c)&&(c=I3(c));for(const e in c){const a=c[e];let n;X(a)?"default"in a?n=b4(a.from||e,a.default,!0):n=b4(a.from||e):n=b4(a),e2(n)?Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):l[e]=n}}function Y6(c,l,s){E2(E(c)?c.map(e=>e.bind(l.proxy)):c.bind(l.proxy),l,s)}function v5(c,l,s,e){let a=e.includes(".")?U5(s,e):()=>s[e];if(Q(c)){const n=l[c];R(n)&&S4(a,n)}else if(R(c))S4(a,c.bind(s));else if(X(c))if(E(c))c.forEach(n=>v5(n,l,s,e));else{const n=R(c.handler)?c.handler.bind(s):l[c.handler];R(n)&&S4(a,n,c)}}function w0(c){const l=c.type,{mixins:s,extends:e}=l,{mixins:a,optionsCache:n,config:{optionMergeStrategies:o}}=c.appContext,i=n.get(l);let t;return i?t=i:!a.length&&!s&&!e?t=l:(t={},a.length&&a.forEach(z=>_4(t,z,o,!0)),_4(t,l,o)),X(l)&&n.set(l,t),t}function _4(c,l,s,e=!1){const{mixins:a,extends:n}=l;n&&_4(c,n,s,!0),a&&a.forEach(o=>_4(c,o,s,!0));for(const o in l)if(!(e&&o==="expose")){const i=Wt[o]||s&&s[o];c[o]=i?i(c[o],l[o]):l[o]}return c}const Wt={data:Q6,props:J6,emits:J6,methods:$1,computed:$1,beforeCreate:n2,created:n2,beforeMount:n2,mounted:n2,beforeUpdate:n2,updated:n2,beforeDestroy:n2,beforeUnmount:n2,destroyed:n2,unmounted:n2,activated:n2,deactivated:n2,errorCaptured:n2,serverPrefetch:n2,components:$1,directives:$1,watch:jt,provide:Q6,inject:Gt};function Q6(c,l){return l?c?function(){return Z(R(c)?c.call(this,this):c,R(l)?l.call(this,this):l)}:l:c}function Gt(c,l){return $1(I3(c),I3(l))}function I3(c){if(E(c)){const l={};for(let s=0;s<c.length;s++)l[c[s]]=c[s];return l}return c}function n2(c,l){return c?[...new Set([].concat(c,l))]:l}function $1(c,l){return c?Z(Object.create(null),c,l):l}function J6(c,l){return c?E(c)&&E(l)?[...new Set([...c,...l])]:Z(Object.create(null),X6(c),X6(l??{})):l}function jt(c,l){if(!c)return l;if(!l)return c;const s=Z(Object.create(null),c);for(const e in l)s[e]=n2(c[e],l[e]);return s}function T5(){return{app:null,config:{isNativeTag:Ei,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vt=0;function Kt(c,l){return function(e,a=null){R(e)||(e=Z({},e)),a!=null&&!X(a)&&(a=null);const n=T5(),o=new WeakSet,i=[];let t=!1;const z=n.app={_uid:Vt++,_component:e,_props:a,_container:null,_context:n,_instance:null,version:Pf,get config(){return n.config},set config(r){},use(r,...L){return o.has(r)||(r&&R(r.install)?(o.add(r),r.install(z,...L)):R(r)&&(o.add(r),r(z,...L))),z},mixin(r){return n.mixins.includes(r)||n.mixins.push(r),z},component(r,L){return L?(n.components[r]=L,z):n.components[r]},directive(r,L){return L?(n.directives[r]=L,z):n.directives[r]},mount(r,L,p){if(!t){const g=z._ceVNode||z2(e,a);return g.appContext=n,p===!0?p="svg":p===!1&&(p=void 0),L&&l?l(g,r):c(g,r,p),t=!0,z._container=r,r.__vue_app__=z,k0(g.component)}},onUnmount(r){i.push(r)},unmount(){t&&(E2(i,z._instance,16),c(null,z._container),delete z._container.__vue_app__)},provide(r,L){return n.provides[r]=L,z},runWithContext(r){const L=A1;A1=z;try{return r()}finally{A1=L}}};return z}}let A1=null;function Xt(c,l){if(i2){let s=i2.provides;const e=i2.parent&&i2.parent.provides;e===s&&(s=i2.provides=Object.create(e)),s[c]=l}}function b4(c,l,s=!1){const e=i2||r2;if(e||A1){const a=A1?A1._context.provides:e?e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:void 0;if(a&&c in a)return a[c];if(arguments.length>1)return s&&R(l)?l.call(e&&e.proxy):l}}const P5={},F5=()=>Object.create(P5),_5=c=>Object.getPrototypeOf(c)===P5;function Yt(c,l,s,e=!1){const a={},n=F5();c.propsDefaults=Object.create(null),E5(c,l,a,n);for(const o in c.propsOptions[0])o in a||(a[o]=void 0);s?c.props=e?a:mt(a):c.type.props?c.props=a:c.props=n,c.attrs=n}function Qt(c,l,s,e){const{props:a,attrs:n,vnode:{patchFlag:o}}=c,i=$(a),[t]=c.propsOptions;let z=!1;if((e||o>0)&&!(o&16)){if(o&8){const r=c.vnode.dynamicProps;for(let L=0;L<r.length;L++){let p=r[L];if(G4(c.emitsOptions,p))continue;const g=l[p];if(t)if(I(n,p))g!==n[p]&&(n[p]=g,z=!0);else{const B=Q2(p);a[B]=q3(t,i,B,g,c,!1)}else g!==n[p]&&(n[p]=g,z=!0)}}}else{E5(c,l,a,n)&&(z=!0);let r;for(const L in i)(!l||!I(l,L)&&((r=d1(L))===L||!I(l,r)))&&(t?s&&(s[L]!==void 0||s[r]!==void 0)&&(a[L]=q3(t,i,L,void 0,c,!0)):delete a[L]);if(n!==i)for(const L in n)(!l||!I(l,L))&&(delete n[L],z=!0)}z&&D2(c.attrs,"set","")}function E5(c,l,s,e){const[a,n]=c.propsOptions;let o=!1,i;if(l)for(let t in l){if(U1(t))continue;const z=l[t];let r;a&&I(a,r=Q2(t))?!n||!n.includes(r)?s[r]=z:(i||(i={}))[r]=z:G4(c.emitsOptions,t)||(!(t in e)||z!==e[t])&&(e[t]=z,o=!0)}if(n){const t=$(s),z=i||j;for(let r=0;r<n.length;r++){const L=n[r];s[L]=q3(a,t,L,z[L],c,!I(z,L))}}return o}function q3(c,l,s,e,a,n){const o=c[s];if(o!=null){const i=I(o,"default");if(i&&e===void 0){const t=o.default;if(o.type!==Function&&!o.skipFactory&&R(t)){const{propsDefaults:z}=a;if(s in z)e=z[s];else{const r=o4(a);e=z[s]=t.call(null,l),r()}}else e=t;a.ce&&a.ce._setProp(s,e)}o[0]&&(n&&!i?e=!1:o[1]&&(e===""||e===d1(s))&&(e=!0))}return e}const Jt=new WeakMap;function B5(c,l,s=!1){const e=s?Jt:l.propsCache,a=e.get(c);if(a)return a;const n=c.props,o={},i=[];let t=!1;if(!R(c)){const r=L=>{t=!0;const[p,g]=B5(L,l,!0);Z(o,p),g&&i.push(...g)};!s&&l.mixins.length&&l.mixins.forEach(r),c.extends&&r(c.extends),c.mixins&&c.mixins.forEach(r)}if(!n&&!t)return X(c)&&e.set(c,N1),N1;if(E(n))for(let r=0;r<n.length;r++){const L=Q2(n[r]);Z6(L)&&(o[L]=j)}else if(n)for(const r in n){const L=Q2(r);if(Z6(L)){const p=n[r],g=o[L]=E(p)||R(p)?{type:p}:Z({},p),B=g.type;let F=!1,O=!0;if(E(B))for(let x=0;x<B.length;++x){const w=B[x],P=R(w)&&w.name;if(P==="Boolean"){F=!0;break}else P==="String"&&(O=!1)}else F=R(B)&&B.name==="Boolean";g[0]=F,g[1]=O,(F||I(g,"default"))&&i.push(L)}}const z=[o,i];return X(c)&&e.set(c,z),z}function Z6(c){return c[0]!=="$"&&!U1(c)}const R5=c=>c[0]==="_"||c==="$stable",y0=c=>E(c)?c.map(T2):[T2(c)],Zt=(c,l,s)=>{if(l._n)return l;const e=b5((...a)=>y0(l(...a)),s);return e._c=!1,e},H5=(c,l,s)=>{const e=c._ctx;for(const a in c){if(R5(a))continue;const n=c[a];if(R(n))l[a]=Zt(a,n,e);else if(n!=null){const o=y0(n);l[a]=()=>o}}},D5=(c,l)=>{const s=y0(l);c.slots.default=()=>s},O5=(c,l,s)=>{for(const e in l)(s||e!=="_")&&(c[e]=l[e])},cf=(c,l,s)=>{const e=c.slots=F5();if(c.vnode.shapeFlag&32){const a=l._;a?(O5(e,l,s),s&&Y8(e,"_",a,!0)):H5(l,e)}else l&&D5(c,l)},lf=(c,l,s)=>{const{vnode:e,slots:a}=c;let n=!0,o=j;if(e.shapeFlag&32){const i=l._;i?s&&i===1?n=!1:O5(a,l,s):(n=!l.$stable,H5(l,a)),o=l}else l&&(D5(c,l),o={default:1});if(n)for(const i in a)!R5(i)&&o[i]==null&&delete a[i]},u2=uf;function sf(c){return ef(c)}function ef(c,l){const s=I4();s.__VUE__=!0;const{insert:e,remove:a,patchProp:n,createElement:o,createText:i,createComment:t,setText:z,setElementText:r,parentNode:L,nextSibling:p,setScopeId:g=_2,insertStaticContent:B}=c,F=(f,m,M,d=null,u=null,C=null,S=void 0,b=null,N=!!m.dynamicChildren)=>{if(f===m)return;f&&!O1(f,m)&&(d=d4(f),y2(f,u,C,!0),f=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:h,ref:T,shapeFlag:y}=m;switch(h){case j4:O(f,m,M,d);break;case v1:x(f,m,M,d);break;case w3:f==null&&w(m,M,d,S);break;case f2:p4(f,m,M,d,u,C,S,b,N);break;default:y&1?D(f,m,M,d,u,C,S,b,N):y&6?u4(f,m,M,d,u,C,S,b,N):(y&64||y&128)&&h.process(f,m,M,d,u,C,S,b,N,R1)}T!=null&&u&&F4(T,f&&f.ref,C,m||f,!m)},O=(f,m,M,d)=>{if(f==null)e(m.el=i(m.children),M,d);else{const u=m.el=f.el;m.children!==f.children&&z(u,m.children)}},x=(f,m,M,d)=>{f==null?e(m.el=t(m.children||""),M,d):m.el=f.el},w=(f,m,M,d)=>{[f.el,f.anchor]=B(f.children,m,M,d,f.el,f.anchor)},P=({el:f,anchor:m},M,d)=>{let u;for(;f&&f!==m;)u=p(f),e(f,M,d),f=u;e(m,M,d)},A=({el:f,anchor:m})=>{let M;for(;f&&f!==m;)M=p(f),a(f),f=M;a(m)},D=(f,m,M,d,u,C,S,b,N)=>{m.type==="svg"?S="svg":m.type==="math"&&(S="mathml"),f==null?m2(m,M,d,u,C,S,b,N):M4(f,m,u,C,S,b,N)},m2=(f,m,M,d,u,C,S,b)=>{let N,h;const{props:T,shapeFlag:y,transition:v,dirs:_}=f;if(N=f.el=o(f.type,C,T&&T.is,T),y&8?r(N,f.children):y&16&&w2(f.children,N,null,d,u,b3(f,C),S,b),_&&o1(f,null,d,"created"),J(N,f,f.scopeId,S,d),T){for(const W in T)W!=="value"&&!U1(W)&&n(N,W,null,T[W],C,d);"value"in T&&n(N,"value",null,T.value,C),(h=T.onVnodeBeforeMount)&&k2(h,d,f)}_&&o1(f,null,d,"beforeMount");const H=af(u,v);H&&v.beforeEnter(N),e(N,m,M),((h=T&&T.onVnodeMounted)||H||_)&&u2(()=>{h&&k2(h,d,f),H&&v.enter(N),_&&o1(f,null,d,"mounted")},u)},J=(f,m,M,d,u)=>{if(M&&g(f,M),d)for(let C=0;C<d.length;C++)g(f,d[C]);if(u){let C=u.subTree;if(m===C||G5(C.type)&&(C.ssContent===m||C.ssFallback===m)){const S=u.vnode;J(f,S,S.scopeId,S.slotScopeIds,u.parent)}}},w2=(f,m,M,d,u,C,S,b,N=0)=>{for(let h=N;h<f.length;h++){const T=f[h]=b?V2(f[h]):T2(f[h]);F(null,T,m,M,d,u,C,S,b)}},M4=(f,m,M,d,u,C,S)=>{const b=m.el=f.el;let{patchFlag:N,dynamicChildren:h,dirs:T}=m;N|=f.patchFlag&16;const y=f.props||j,v=m.props||j;let _;if(M&&i1(M,!1),(_=v.onVnodeBeforeUpdate)&&k2(_,M,m,f),T&&o1(m,f,M,"beforeUpdate"),M&&i1(M,!0),(y.innerHTML&&v.innerHTML==null||y.textContent&&v.textContent==null)&&r(b,""),h?e1(f.dynamicChildren,h,b,M,d,b3(m,u),C):S||U(f,m,b,null,M,d,b3(m,u),C,!1),N>0){if(N&16)E1(b,y,v,M,u);else if(N&2&&y.class!==v.class&&n(b,"class",null,v.class,u),N&4&&n(b,"style",y.style,v.style,u),N&8){const H=m.dynamicProps;for(let W=0;W<H.length;W++){const q=H[W],L2=y[q],c2=v[q];(c2!==L2||q==="value")&&n(b,q,L2,c2,u,M)}}N&1&&f.children!==m.children&&r(b,m.children)}else!S&&h==null&&E1(b,y,v,M,u);((_=v.onVnodeUpdated)||T)&&u2(()=>{_&&k2(_,M,m,f),T&&o1(m,f,M,"updated")},d)},e1=(f,m,M,d,u,C,S)=>{for(let b=0;b<m.length;b++){const N=f[b],h=m[b],T=N.el&&(N.type===f2||!O1(N,h)||N.shapeFlag&70)?L(N.el):M;F(N,h,T,null,d,u,C,S,!0)}},E1=(f,m,M,d,u)=>{if(m!==M){if(m!==j)for(const C in m)!U1(C)&&!(C in M)&&n(f,C,m[C],null,u,d);for(const C in M){if(U1(C))continue;const S=M[C],b=m[C];S!==b&&C!=="value"&&n(f,C,b,S,u,d)}"value"in M&&n(f,"value",m.value,M.value,u)}},p4=(f,m,M,d,u,C,S,b,N)=>{const h=m.el=f?f.el:i(""),T=m.anchor=f?f.anchor:i("");let{patchFlag:y,dynamicChildren:v,slotScopeIds:_}=m;_&&(b=b?b.concat(_):_),f==null?(e(h,M,d),e(T,M,d),w2(m.children||[],M,T,u,C,S,b,N)):y>0&&y&64&&v&&f.dynamicChildren?(e1(f.dynamicChildren,v,M,u,C,S,b),(m.key!=null||u&&m===u.subTree)&&$5(f,m,!0)):U(f,m,M,T,u,C,S,b,N)},u4=(f,m,M,d,u,C,S,b,N)=>{m.slotScopeIds=b,f==null?m.shapeFlag&512?u.ctx.activate(m,M,d,S,N):M3(m,M,d,u,C,S,N):H6(f,m,N)},M3=(f,m,M,d,u,C,S)=>{const b=f.component=Sf(f,d,u);if(w5(f)&&(b.ctx.renderer=R1),wf(b,!1,S),b.asyncDep){if(u&&u.registerDep(b,a2,S),!f.el){const N=b.subTree=z2(v1);x(null,N,m,M)}}else a2(b,f,m,M,u,C,S)},H6=(f,m,M)=>{const d=m.component=f.component;if(Mf(f,m,M))if(d.asyncDep&&!d.asyncResolved){Y(d,m,M);return}else d.next=m,d.update();else m.el=f.el,d.vnode=m},a2=(f,m,M,d,u,C,S)=>{const b=()=>{if(f.isMounted){let{next:y,bu:v,u:_,parent:H,vnode:W}=f;{const M2=I5(f);if(M2){y&&(y.el=W.el,Y(f,y,S)),M2.asyncDep.then(()=>{f.isUnmounted||b()});return}}let q=y,L2;i1(f,!1),y?(y.el=W.el,Y(f,y,S)):y=W,v&&C3(v),(L2=y.props&&y.props.onVnodeBeforeUpdate)&&k2(L2,H,y,W),i1(f,!0);const c2=S3(f),b2=f.subTree;f.subTree=c2,F(b2,c2,L(b2.el),d4(b2),f,u,C),y.el=c2.el,q===null&&pf(f,c2.el),_&&u2(_,u),(L2=y.props&&y.props.onVnodeUpdated)&&u2(()=>k2(L2,H,y,W),u)}else{let y;const{el:v,props:_}=m,{bm:H,m:W,parent:q,root:L2,type:c2}=f,b2=y1(m);if(i1(f,!1),H&&C3(H),!b2&&(y=_&&_.onVnodeBeforeMount)&&k2(y,q,m),i1(f,!0),v&&I6){const M2=()=>{f.subTree=S3(f),I6(v,f.subTree,f,u,null)};b2&&c2.__asyncHydrate?c2.__asyncHydrate(v,f,M2):M2()}else{L2.ce&&L2.ce._injectChildStyle(c2);const M2=f.subTree=S3(f);F(null,M2,M,d,f,u,C),m.el=M2.el}if(W&&u2(W,u),!b2&&(y=_&&_.onVnodeMounted)){const M2=m;u2(()=>k2(y,q,M2),u)}(m.shapeFlag&256||q&&y1(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&u2(f.a,u),f.isMounted=!0,m=M=d=null}};f.scope.on();const N=f.effect=new l5(b);f.scope.off();const h=f.update=N.run.bind(N),T=f.job=N.runIfDirty.bind(N);T.i=f,T.id=f.uid,N.scheduler=()=>x0(T),i1(f,!0),h()},Y=(f,m,M)=>{m.component=f;const d=f.vnode.props;f.vnode=m,f.next=null,Qt(f,m.props,d,M),lf(f,m.children,M),l1(),K6(f),s1()},U=(f,m,M,d,u,C,S,b,N=!1)=>{const h=f&&f.children,T=f?f.shapeFlag:0,y=m.children,{patchFlag:v,shapeFlag:_}=m;if(v>0){if(v&128){C4(h,y,M,d,u,C,S,b,N);return}else if(v&256){a1(h,y,M,d,u,C,S,b,N);return}}_&8?(T&16&&B1(h,u,C),y!==h&&r(M,y)):T&16?_&16?C4(h,y,M,d,u,C,S,b,N):B1(h,u,C,!0):(T&8&&r(M,""),_&16&&w2(y,M,d,u,C,S,b,N))},a1=(f,m,M,d,u,C,S,b,N)=>{f=f||N1,m=m||N1;const h=f.length,T=m.length,y=Math.min(h,T);let v;for(v=0;v<y;v++){const _=m[v]=N?V2(m[v]):T2(m[v]);F(f[v],_,M,null,u,C,S,b,N)}h>T?B1(f,u,C,!0,!1,y):w2(m,M,d,u,C,S,b,N,y)},C4=(f,m,M,d,u,C,S,b,N)=>{let h=0;const T=m.length;let y=f.length-1,v=T-1;for(;h<=y&&h<=v;){const _=f[h],H=m[h]=N?V2(m[h]):T2(m[h]);if(O1(_,H))F(_,H,M,null,u,C,S,b,N);else break;h++}for(;h<=y&&h<=v;){const _=f[y],H=m[v]=N?V2(m[v]):T2(m[v]);if(O1(_,H))F(_,H,M,null,u,C,S,b,N);else break;y--,v--}if(h>y){if(h<=v){const _=v+1,H=_<T?m[_].el:d;for(;h<=v;)F(null,m[h]=N?V2(m[h]):T2(m[h]),M,H,u,C,S,b,N),h++}}else if(h>v)for(;h<=y;)y2(f[h],u,C,!0),h++;else{const _=h,H=h,W=new Map;for(h=H;h<=v;h++){const p2=m[h]=N?V2(m[h]):T2(m[h]);p2.key!=null&&W.set(p2.key,h)}let q,L2=0;const c2=v-H+1;let b2=!1,M2=0;const H1=new Array(c2);for(h=0;h<c2;h++)H1[h]=0;for(h=_;h<=y;h++){const p2=f[h];if(L2>=c2){y2(p2,u,C,!0);continue}let A2;if(p2.key!=null)A2=W.get(p2.key);else for(q=H;q<=v;q++)if(H1[q-H]===0&&O1(p2,m[q])){A2=q;break}A2===void 0?y2(p2,u,C,!0):(H1[A2-H]=h+1,A2>=M2?M2=A2:b2=!0,F(p2,m[A2],M,null,u,C,S,b,N),L2++)}const q6=b2?nf(H1):N1;for(q=q6.length-1,h=c2-1;h>=0;h--){const p2=H+h,A2=m[p2],U6=p2+1<T?m[p2+1].el:d;H1[h]===0?F(null,A2,M,U6,u,C,S,b,N):b2&&(q<0||h!==q6[q]?n1(A2,M,U6,2):q--)}}},n1=(f,m,M,d,u=null)=>{const{el:C,type:S,transition:b,children:N,shapeFlag:h}=f;if(h&6){n1(f.component.subTree,m,M,d);return}if(h&128){f.suspense.move(m,M,d);return}if(h&64){S.move(f,m,M,R1);return}if(S===f2){e(C,m,M);for(let y=0;y<N.length;y++)n1(N[y],m,M,d);e(f.anchor,m,M);return}if(S===w3){P(f,m,M);return}if(d!==2&&h&1&&b)if(d===0)b.beforeEnter(C),e(C,m,M),u2(()=>b.enter(C),u);else{const{leave:y,delayLeave:v,afterLeave:_}=b,H=()=>e(C,m,M),W=()=>{y(C,()=>{H(),_&&_()})};v?v(C,H,W):W()}else e(C,m,M)},y2=(f,m,M,d=!1,u=!1)=>{const{type:C,props:S,ref:b,children:N,dynamicChildren:h,shapeFlag:T,patchFlag:y,dirs:v,cacheIndex:_}=f;if(y===-2&&(u=!1),b!=null&&F4(b,null,M,f,!0),_!=null&&(m.renderCache[_]=void 0),T&256){m.ctx.deactivate(f);return}const H=T&1&&v,W=!y1(f);let q;if(W&&(q=S&&S.onVnodeBeforeUnmount)&&k2(q,m,f),T&6)_i(f.component,M,d);else{if(T&128){f.suspense.unmount(M,d);return}H&&o1(f,null,m,"beforeUnmount"),T&64?f.type.remove(f,m,M,R1,d):h&&!h.hasOnce&&(C!==f2||y>0&&y&64)?B1(h,m,M,!1,!0):(C===f2&&y&384||!u&&T&16)&&B1(N,m,M),d&&D6(f)}(W&&(q=S&&S.onVnodeUnmounted)||H)&&u2(()=>{q&&k2(q,m,f),H&&o1(f,null,m,"unmounted")},M)},D6=f=>{const{type:m,el:M,anchor:d,transition:u}=f;if(m===f2){Fi(M,d);return}if(m===w3){A(f);return}const C=()=>{a(M),u&&!u.persisted&&u.afterLeave&&u.afterLeave()};if(f.shapeFlag&1&&u&&!u.persisted){const{leave:S,delayLeave:b}=u,N=()=>S(M,C);b?b(f.el,C,N):N()}else C()},Fi=(f,m)=>{let M;for(;f!==m;)M=p(f),a(f),f=M;a(m)},_i=(f,m,M)=>{const{bum:d,scope:u,job:C,subTree:S,um:b,m:N,a:h}=f;c8(N),c8(h),d&&C3(d),u.stop(),C&&(C.flags|=8,y2(S,f,m,M)),b&&u2(b,m),u2(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},B1=(f,m,M,d=!1,u=!1,C=0)=>{for(let S=C;S<f.length;S++)y2(f[S],m,M,d,u)},d4=f=>{if(f.shapeFlag&6)return d4(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=p(f.anchor||f.el),M=m&&m[wt];return M?p(M):m};let p3=!1;const O6=(f,m,M)=>{f==null?m._vnode&&y2(m._vnode,null,null,!0):F(m._vnode||null,f,m,null,null,null,M),m._vnode=f,p3||(p3=!0,K6(),g5(),p3=!1)},R1={p:F,um:y2,m:n1,r:D6,mt:M3,mc:w2,pc:U,pbc:e1,n:d4,o:c};let $6,I6;return{render:O6,hydrate:$6,createApp:Kt(O6,$6)}}function b3({type:c,props:l},s){return s==="svg"&&c==="foreignObject"||s==="mathml"&&c==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:s}function i1({effect:c,job:l},s){s?(c.flags|=32,l.flags|=4):(c.flags&=-33,l.flags&=-5)}function af(c,l){return(!c||c&&!c.pendingBranch)&&l&&!l.persisted}function $5(c,l,s=!1){const e=c.children,a=l.children;if(E(e)&&E(a))for(let n=0;n<e.length;n++){const o=e[n];let i=a[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[n]=V2(a[n]),i.el=o.el),!s&&i.patchFlag!==-2&&$5(o,i)),i.type===j4&&(i.el=o.el)}}function nf(c){const l=c.slice(),s=[0];let e,a,n,o,i;const t=c.length;for(e=0;e<t;e++){const z=c[e];if(z!==0){if(a=s[s.length-1],c[a]<z){l[e]=a,s.push(e);continue}for(n=0,o=s.length-1;n<o;)i=n+o>>1,c[s[i]]<z?n=i+1:o=i;z<c[s[n]]&&(n>0&&(l[e]=s[n-1]),s[n]=e)}}for(n=s.length,o=s[n-1];n-- >0;)s[n]=o,o=l[o];return s}function I5(c){const l=c.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:I5(l)}function c8(c){if(c)for(let l=0;l<c.length;l++)c[l].flags|=8}const of=Symbol.for("v-scx"),tf=()=>b4(of);function S4(c,l,s){return q5(c,l,s)}function q5(c,l,s=j){const{immediate:e,deep:a,flush:n,once:o}=s,i=Z({},s),t=l&&e||!l&&n!=="post";let z;if(s4){if(n==="sync"){const g=tf();z=g.__watcherHandles||(g.__watcherHandles=[])}else if(!t){const g=()=>{};return g.stop=_2,g.resume=_2,g.pause=_2,g}}const r=i2;i.call=(g,B,F)=>E2(g,r,B,F);let L=!1;n==="post"?i.scheduler=g=>{u2(g,r&&r.suspense)}:n!=="sync"&&(L=!0,i.scheduler=(g,B)=>{B?g():x0(g)}),i.augmentJob=g=>{l&&(g.flags|=4),L&&(g.flags|=2,r&&(g.id=r.uid,g.i=r))};const p=xt(c,l,i);return s4&&(z?z.push(p):t&&p()),p}function ff(c,l,s){const e=this.proxy,a=Q(c)?c.includes(".")?U5(e,c):()=>e[c]:c.bind(e,e);let n;R(l)?n=l:(n=l.handler,s=l);const o=o4(this),i=q5(a,n.bind(e),s);return o(),i}function U5(c,l){const s=l.split(".");return()=>{let e=c;for(let a=0;a<s.length&&e;a++)e=e[s[a]];return e}}const rf=(c,l)=>l==="modelValue"||l==="model-value"?c.modelModifiers:c[`${l}Modifiers`]||c[`${Q2(l)}Modifiers`]||c[`${d1(l)}Modifiers`];function zf(c,l,...s){if(c.isUnmounted)return;const e=c.vnode.props||j;let a=s;const n=l.startsWith("update:"),o=n&&rf(e,l.slice(7));o&&(o.trim&&(a=s.map(r=>Q(r)?r.trim():r)),o.number&&(a=s.map(Oi)));let i,t=e[i=u3(l)]||e[i=u3(Q2(l))];!t&&n&&(t=e[i=u3(d1(l))]),t&&E2(t,c,6,a);const z=e[i+"Once"];if(z){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,E2(z,c,6,a)}}function W5(c,l,s=!1){const e=l.emitsCache,a=e.get(c);if(a!==void 0)return a;const n=c.emits;let o={},i=!1;if(!R(c)){const t=z=>{const r=W5(z,l,!0);r&&(i=!0,Z(o,r))};!s&&l.mixins.length&&l.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!n&&!i?(X(c)&&e.set(c,null),null):(E(n)?n.forEach(t=>o[t]=null):Z(o,n),X(c)&&e.set(c,o),o)}function G4(c,l){return!c||!D4(l)?!1:(l=l.slice(2).replace(/Once$/,""),I(c,l[0].toLowerCase()+l.slice(1))||I(c,d1(l))||I(c,l))}function S3(c){const{type:l,vnode:s,proxy:e,withProxy:a,propsOptions:[n],slots:o,attrs:i,emit:t,render:z,renderCache:r,props:L,data:p,setupState:g,ctx:B,inheritAttrs:F}=c,O=P4(c);let x,w;try{if(s.shapeFlag&4){const A=a||e,D=A;x=T2(z.call(D,A,r,L,g,p,B)),w=i}else{const A=l;x=T2(A.length>1?A(L,{attrs:i,slots:o,emit:t}):A(L,null)),w=l.props?i:mf(i)}}catch(A){V1.length=0,U4(A,c,1),x=z2(v1)}let P=x;if(w&&F!==!1){const A=Object.keys(w),{shapeFlag:D}=P;A.length&&D&7&&(n&&A.some(t0)&&(w=Lf(w,n)),P=T1(P,w,!1,!0))}return s.dirs&&(P=T1(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(s.dirs):s.dirs),s.transition&&N0(P,s.transition),x=P,P4(O),x}const mf=c=>{let l;for(const s in c)(s==="class"||s==="style"||D4(s))&&((l||(l={}))[s]=c[s]);return l},Lf=(c,l)=>{const s={};for(const e in c)(!t0(e)||!(e.slice(9)in l))&&(s[e]=c[e]);return s};function Mf(c,l,s){const{props:e,children:a,component:n}=c,{props:o,children:i,patchFlag:t}=l,z=n.emitsOptions;if(l.dirs||l.transition)return!0;if(s&&t>=0){if(t&1024)return!0;if(t&16)return e?l8(e,o,z):!!o;if(t&8){const r=l.dynamicProps;for(let L=0;L<r.length;L++){const p=r[L];if(o[p]!==e[p]&&!G4(z,p))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:e===o?!1:e?o?l8(e,o,z):!0:!!o;return!1}function l8(c,l,s){const e=Object.keys(l);if(e.length!==Object.keys(c).length)return!0;for(let a=0;a<e.length;a++){const n=e[a];if(l[n]!==c[n]&&!G4(s,n))return!0}return!1}function pf({vnode:c,parent:l},s){for(;l;){const e=l.subTree;if(e.suspense&&e.suspense.activeBranch===c&&(e.el=c.el),e===c)(c=l.vnode).el=s,l=l.parent;else break}}const G5=c=>c.__isSuspense;function uf(c,l){l&&l.pendingBranch?E(c)?l.effects.push(...c):l.effects.push(c):St(c)}const f2=Symbol.for("v-fgt"),j4=Symbol.for("v-txt"),v1=Symbol.for("v-cmt"),w3=Symbol.for("v-stc"),V1=[];let d2=null;function Z1(c=!1){V1.push(d2=c?null:[])}function Cf(){V1.pop(),d2=V1[V1.length-1]||null}let c4=1;function s8(c,l=!1){c4+=c,c<0&&d2&&l&&(d2.hasOnce=!0)}function j5(c){return c.dynamicChildren=c4>0?d2||N1:null,Cf(),c4>0&&d2&&d2.push(c),c}function U3(c,l,s,e,a,n){return j5(r1(c,l,s,e,a,n,!0))}function e8(c,l,s,e,a){return j5(z2(c,l,s,e,a,!0))}function l4(c){return c?c.__v_isVNode===!0:!1}function O1(c,l){return c.type===l.type&&c.key===l.key}const V5=({key:c})=>c??null,w4=({ref:c,ref_key:l,ref_for:s})=>(typeof c=="number"&&(c=""+c),c!=null?Q(c)||e2(c)||R(c)?{i:r2,r:c,k:l,f:!!s}:c:null);function r1(c,l=null,s=null,e=0,a=null,n=c===f2?0:1,o=!1,i=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:l,key:l&&V5(l),ref:l&&w4(l),scopeId:N5,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:e,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:r2};return i?(A0(t,s),n&128&&c.normalize(t)):s&&(t.shapeFlag|=Q(s)?8:16),c4>0&&!o&&d2&&(t.patchFlag>0||n&6)&&t.patchFlag!==32&&d2.push(t),t}const z2=df;function df(c,l=null,s=null,e=0,a=null,n=!1){if((!c||c===Dt)&&(c=v1),l4(c)){const i=T1(c,l,!0);return s&&A0(i,s),c4>0&&!n&&d2&&(i.shapeFlag&6?d2[d2.indexOf(c)]=i:d2.push(i)),i.patchFlag=-2,i}if(vf(c)&&(c=c.__vccOpts),l){l=hf(l);let{class:i,style:t}=l;i&&!Q(i)&&(l.class=m0(i)),X(t)&&(g0(t)&&!E(t)&&(t=Z({},t)),l.style=z0(t))}const o=Q(c)?1:G5(c)?128:yt(c)?64:X(c)?4:R(c)?2:0;return r1(c,l,s,e,a,o,n,!0)}function hf(c){return c?g0(c)||_5(c)?Z({},c):c:null}function T1(c,l,s=!1,e=!1){const{props:a,ref:n,patchFlag:o,children:i,transition:t}=c,z=l?xf(a||{},l):a,r={__v_isVNode:!0,__v_skip:!0,type:c.type,props:z,key:z&&V5(z),ref:l&&l.ref?s&&n?E(n)?n.concat(w4(l)):[n,w4(l)]:w4(l):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetStart:c.targetStart,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:l&&c.type!==f2?o===-1?16:o|16:o,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:t,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&T1(c.ssContent),ssFallback:c.ssFallback&&T1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return t&&e&&N0(r,t.clone(r)),r}function gf(c=" ",l=0){return z2(j4,null,c,l)}function T2(c){return c==null||typeof c=="boolean"?z2(v1):E(c)?z2(f2,null,c.slice()):l4(c)?V2(c):z2(j4,null,String(c))}function V2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:T1(c)}function A0(c,l){let s=0;const{shapeFlag:e}=c;if(l==null)l=null;else if(E(l))s=16;else if(typeof l=="object")if(e&65){const a=l.default;a&&(a._c&&(a._d=!1),A0(c,a()),a._c&&(a._d=!0));return}else{s=32;const a=l._;!a&&!_5(l)?l._ctx=r2:a===3&&r2&&(r2.slots._===1?l._=1:(l._=2,c.patchFlag|=1024))}else R(l)?(l={default:l,_ctx:r2},s=32):(l=String(l),e&64?(s=16,l=[gf(l)]):s=8);c.children=l,c.shapeFlag|=s}function xf(...c){const l={};for(let s=0;s<c.length;s++){const e=c[s];for(const a in e)if(a==="class")l.class!==e.class&&(l.class=m0([l.class,e.class]));else if(a==="style")l.style=z0([l.style,e.style]);else if(D4(a)){const n=l[a],o=e[a];o&&n!==o&&!(E(n)&&n.includes(o))&&(l[a]=n?[].concat(n,o):o)}else a!==""&&(l[a]=e[a])}return l}function k2(c,l,s,e=null){E2(c,l,7,[s,e])}const Nf=T5();let bf=0;function Sf(c,l,s){const e=c.type,a=(l?l.appContext:c.appContext)||Nf,n={uid:bf++,vnode:c,type:e,parent:l,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ji(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(a.provides),ids:l?l.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B5(e,a),emitsOptions:W5(e,a),emit:null,emitted:null,propsDefaults:j,inheritAttrs:e.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=l?l.root:n,n.emit=zf.bind(null,n),c.ce&&c.ce(n),n}let i2=null,E4,W3;{const c=I4(),l=(s,e)=>{let a;return(a=c[s])||(a=c[s]=[]),a.push(e),n=>{a.length>1?a.forEach(o=>o(n)):a[0](n)}};E4=l("__VUE_INSTANCE_SETTERS__",s=>i2=s),W3=l("__VUE_SSR_SETTERS__",s=>s4=s)}const o4=c=>{const l=i2;return E4(c),c.scope.on(),()=>{c.scope.off(),E4(l)}},a8=()=>{i2&&i2.scope.off(),E4(null)};function K5(c){return c.vnode.shapeFlag&4}let s4=!1;function wf(c,l=!1,s=!1){l&&W3(l);const{props:e,children:a}=c.vnode,n=K5(c);Yt(c,e,n,l),cf(c,a,s);const o=n?yf(c,l):void 0;return l&&W3(!1),o}function yf(c,l){const s=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,It);const{setup:e}=s;if(e){l1();const a=c.setupContext=e.length>1?kf(c):null,n=o4(c),o=n4(e,c,0,[c.props,a]),i=j8(o);if(s1(),n(),(i||c.sp)&&!y1(c)&&S5(c),i){if(o.then(a8,a8),l)return o.then(t=>{n8(c,t,l)}).catch(t=>{U4(t,c,0)});c.asyncDep=o}else n8(c,o,l)}else X5(c,l)}function n8(c,l,s){R(l)?c.type.__ssrInlineRender?c.ssrRender=l:c.render=l:X(l)&&(c.setupState=u5(l)),X5(c,s)}let o8;function X5(c,l,s){const e=c.type;if(!c.render){if(!l&&o8&&!e.render){const a=e.template||w0(c).template;if(a){const{isCustomElement:n,compilerOptions:o}=c.appContext.config,{delimiters:i,compilerOptions:t}=e,z=Z(Z({isCustomElement:n,delimiters:i},o),t);e.render=o8(a,z)}}c.render=e.render||_2}{const a=o4(c);l1();try{qt(c)}finally{s1(),a()}}}const Af={get(c,l){return l2(c,"get",""),c[l]}};function kf(c){const l=s=>{c.exposed=s||{}};return{attrs:new Proxy(c.attrs,Af),slots:c.slots,emit:c.emit,expose:l}}function k0(c){return c.exposed?c.exposeProxy||(c.exposeProxy=new Proxy(u5(Lt(c.exposed)),{get(l,s){if(s in l)return l[s];if(s in j1)return j1[s](c)},has(l,s){return s in l||s in j1}})):c.proxy}function vf(c){return R(c)&&"__vccOpts"in c}const f1=(c,l)=>ht(c,l,s4);function Tf(c,l,s){const e=arguments.length;return e===2?X(l)&&!E(l)?l4(l)?z2(c,null,[l]):z2(c,l):z2(c,null,l):(e>3?s=Array.prototype.slice.call(arguments,2):e===3&&l4(s)&&(s=[s]),z2(c,l,s))}const Pf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let G3;const i8=typeof window<"u"&&window.trustedTypes;if(i8)try{G3=i8.createPolicy("vue",{createHTML:c=>c})}catch{}const Y5=G3?c=>G3.createHTML(c):c=>c,Ff="http://www.w3.org/2000/svg",_f="http://www.w3.org/1998/Math/MathML",H2=typeof document<"u"?document:null,t8=H2&&H2.createElement("template"),Ef={insert:(c,l,s)=>{l.insertBefore(c,s||null)},remove:c=>{const l=c.parentNode;l&&l.removeChild(c)},createElement:(c,l,s,e)=>{const a=l==="svg"?H2.createElementNS(Ff,c):l==="mathml"?H2.createElementNS(_f,c):s?H2.createElement(c,{is:s}):H2.createElement(c);return c==="select"&&e&&e.multiple!=null&&a.setAttribute("multiple",e.multiple),a},createText:c=>H2.createTextNode(c),createComment:c=>H2.createComment(c),setText:(c,l)=>{c.nodeValue=l},setElementText:(c,l)=>{c.textContent=l},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>H2.querySelector(c),setScopeId(c,l){c.setAttribute(l,"")},insertStaticContent(c,l,s,e,a,n){const o=s?s.previousSibling:l.lastChild;if(a&&(a===n||a.nextSibling))for(;l.insertBefore(a.cloneNode(!0),s),!(a===n||!(a=a.nextSibling)););else{t8.innerHTML=Y5(e==="svg"?`<svg>${c}</svg>`:e==="mathml"?`<math>${c}</math>`:c);const i=t8.content;if(e==="svg"||e==="mathml"){const t=i.firstChild;for(;t.firstChild;)i.appendChild(t.firstChild);i.removeChild(t)}l.insertBefore(i,s)}return[o?o.nextSibling:l.firstChild,s?s.previousSibling:l.lastChild]}},Bf=Symbol("_vtc");function Rf(c,l,s){const e=c[Bf];e&&(l=(l?[l,...e]:[...e]).join(" ")),l==null?c.removeAttribute("class"):s?c.setAttribute("class",l):c.className=l}const f8=Symbol("_vod"),Hf=Symbol("_vsh"),Df=Symbol(""),Of=/(^|;)\s*display\s*:/;function $f(c,l,s){const e=c.style,a=Q(s);let n=!1;if(s&&!a){if(l)if(Q(l))for(const o of l.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&y4(e,i,"")}else for(const o in l)s[o]==null&&y4(e,o,"");for(const o in s)o==="display"&&(n=!0),y4(e,o,s[o])}else if(a){if(l!==s){const o=e[Df];o&&(s+=";"+o),e.cssText=s,n=Of.test(s)}}else l&&c.removeAttribute("style");f8 in c&&(c[f8]=n?e.display:"",c[Hf]&&(e.display="none"))}const r8=/\s*!important$/;function y4(c,l,s){if(E(s))s.forEach(e=>y4(c,l,e));else if(s==null&&(s=""),l.startsWith("--"))c.setProperty(l,s);else{const e=If(c,l);r8.test(s)?c.setProperty(d1(e),s.replace(r8,""),"important"):c[e]=s}}const z8=["Webkit","Moz","ms"],y3={};function If(c,l){const s=y3[l];if(s)return s;let e=Q2(l);if(e!=="filter"&&e in c)return y3[l]=e;e=X8(e);for(let a=0;a<z8.length;a++){const n=z8[a]+e;if(n in c)return y3[l]=n}return l}const m8="http://www.w3.org/1999/xlink";function L8(c,l,s,e,a,n=Gi(l)){e&&l.startsWith("xlink:")?s==null?c.removeAttributeNS(m8,l.slice(6,l.length)):c.setAttributeNS(m8,l,s):s==null||n&&!Q8(s)?c.removeAttribute(l):c.setAttribute(l,n?"":q2(s)?String(s):s)}function M8(c,l,s,e,a){if(l==="innerHTML"||l==="textContent"){s!=null&&(c[l]=l==="innerHTML"?Y5(s):s);return}const n=c.tagName;if(l==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?c.getAttribute("value")||"":c.value,t=s==null?c.type==="checkbox"?"on":"":String(s);(i!==t||!("_value"in c))&&(c.value=t),s==null&&c.removeAttribute(l),c._value=s;return}let o=!1;if(s===""||s==null){const i=typeof c[l];i==="boolean"?s=Q8(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{c[l]=s}catch{}o&&c.removeAttribute(a||l)}function qf(c,l,s,e){c.addEventListener(l,s,e)}function Uf(c,l,s,e){c.removeEventListener(l,s,e)}const p8=Symbol("_vei");function Wf(c,l,s,e,a=null){const n=c[p8]||(c[p8]={}),o=n[l];if(e&&o)o.value=e;else{const[i,t]=Gf(l);if(e){const z=n[l]=Kf(e,a);qf(c,i,z,t)}else o&&(Uf(c,i,o,t),n[l]=void 0)}}const u8=/(?:Once|Passive|Capture)$/;function Gf(c){let l;if(u8.test(c)){l={};let e;for(;e=c.match(u8);)c=c.slice(0,c.length-e[0].length),l[e[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):d1(c.slice(2)),l]}let A3=0;const jf=Promise.resolve(),Vf=()=>A3||(jf.then(()=>A3=0),A3=Date.now());function Kf(c,l){const s=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=s.attached)return;E2(Xf(e,s.value),l,5,[e])};return s.value=c,s.attached=Vf(),s}function Xf(c,l){if(E(l)){const s=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{s.call(c),c._stopped=!0},l.map(e=>a=>!a._stopped&&e&&e(a))}else return l}const C8=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Yf=(c,l,s,e,a,n)=>{const o=a==="svg";l==="class"?Rf(c,e,o):l==="style"?$f(c,s,e):D4(l)?t0(l)||Wf(c,l,s,e,n):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Qf(c,l,e,o))?(M8(c,l,e),!c.tagName.includes("-")&&(l==="value"||l==="checked"||l==="selected")&&L8(c,l,e,o,n,l!=="value")):c._isVueCE&&(/[A-Z]/.test(l)||!Q(e))?M8(c,Q2(l),e,n,l):(l==="true-value"?c._trueValue=e:l==="false-value"&&(c._falseValue=e),L8(c,l,e,o))};function Qf(c,l,s,e){if(e)return!!(l==="innerHTML"||l==="textContent"||l in c&&C8(l)&&R(s));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&c.tagName==="INPUT"||l==="type"&&c.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const a=c.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return C8(l)&&Q(s)?!1:l in c}const Jf=Z({patchProp:Yf},Ef);let d8;function Zf(){return d8||(d8=sf(Jf))}const cr=(...c)=>{const l=Zf().createApp(...c),{mount:s}=l;return l.mount=e=>{const a=sr(e);if(!a)return;const n=l._component;!R(n)&&!n.render&&!n.template&&(n.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,lr(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},l};function lr(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function sr(c){return Q(c)?document.querySelector(c):c}const er=["id"],ar=b0({__name:"Page",props:{id:{}},setup(c){return(l,s)=>(Z1(),U3("div",{id:l.id,class:"min-w-full min-h-screen"},[$t(l.$slots,"default")],8,er))}}),nr={id:"pages-container",class:"h-screen relative"},or={class:"border-l-4 w-full h-full flex justify-center items-center"},ir={class:"font-bold text-6xl"},tr=1e3,fr=b0({__name:"App",setup(c){const l=V6([]),s=V6(2);let e=!1;const a=L=>{const p=l.value[L];p&&p.$el instanceof HTMLElement&&p.$el.scrollIntoView({behavior:"smooth",inline:"center"})},n=(L=!1)=>{e||(e=!0,s.value=(s.value+1)%l.value.length,a(s.value),L?r():z())},o=(L=!1)=>{e||(e=!0,s.value=(s.value-1+l.value.length)%l.value.length,a(s.value),L?r():z())},i=L=>{["Space","ArrowRight","ArrowUp"].includes(L.code)?n():["ArrowLeft","ArrowDown"].includes(L.code)&&o()},t=L=>{e||(L.deltaY>0||L.deltaX>0?n(!0):(L.deltaY<0||L.deltaX<0)&&o(!0))},z=()=>{e=!1},r=()=>{setTimeout(z,tr)};return A5(async()=>{await d5(),a(s.value),window.addEventListener("keydown",i),window.addEventListener("wheel",t,{passive:!0})}),S0(()=>{window.removeEventListener("keydown",i),window.removeEventListener("wheel",t)}),(L,p)=>(Z1(),U3(f2,null,[r1("div",nr,[(Z1(),U3(f2,null,Ot(15,g=>z2(ar,{key:g,id:"page-"+g,ref_for:!0,ref_key:"pages",ref:l},{default:b5(()=>[r1("div",or,[r1("h1",ir,"Page "+Z8(g),1)])]),_:2},1032,["id"])),64))]),r1("button",{onClick:p[0]||(p[0]=g=>o()),class:"xl:hidden fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg"}," ← "),r1("button",{onClick:p[1]||(p[1]=g=>n()),class:"xl:hidden fixed right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg"}," → ")],64))}}),rr=(c,l)=>{const s=c.__vccOpts||c;for(const[e,a]of l)s[e]=a;return s},zr=rr(fr,[["__scopeId","data-v-418b9ddb"]]),h8=()=>{};let v0={},Q5={},J5=null,Z5={mark:h8,measure:h8};try{typeof window<"u"&&(v0=window),typeof document<"u"&&(Q5=document),typeof MutationObserver<"u"&&(J5=MutationObserver),typeof performance<"u"&&(Z5=performance)}catch{}const{userAgent:g8=""}=v0.navigator||{},J2=v0,V=Q5,x8=J5,N4=Z5;J2.document;const W2=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",c7=~g8.indexOf("MSIE")||~g8.indexOf("Trident/");var K="classic",l7="duotone",h2="sharp",g2="sharp-duotone",mr=[K,l7,h2,g2],Lr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},N8={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mr=["kit"],pr=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,ur=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Cr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},dr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},hr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},gr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},xr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Nr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},s7={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},br=["solid","regular","light","thin","duotone","brands"],e7=[1,2,3,4,5,6,7,8,9,10],Sr=e7.concat([11,12,13,14,15,16,17,18,19,20]),I1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wr=[...Object.keys(gr),...br,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",I1.GROUP,I1.SWAP_OPACITY,I1.PRIMARY,I1.SECONDARY].concat(e7.map(c=>"".concat(c,"x"))).concat(Sr.map(c=>"w-".concat(c))),yr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ar={kit:{"fa-kit":"fak"}},kr={kit:{fak:"fa-kit"}},b8={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const $2="___FONT_AWESOME___",j3=16,a7="fa",n7="svg-inline--fa",u1="data-fa-i2svg",V3="data-fa-pseudo-element",vr="data-fa-pseudo-element-pending",T0="data-prefix",P0="data-icon",S8="fontawesome-i2svg",Tr="async",Pr=["HTML","HEAD","STYLE","SCRIPT"],o7=(()=>{try{return!0}catch{return!1}})(),i7=[K,h2,g2];function i4(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[K]}})}const t7={...s7};t7[K]={...s7[K],...N8.kit,...N8["kit-duotone"]};const L1=i4(t7),K3={...Nr};K3[K]={...K3[K],...b8.kit,...b8["kit-duotone"]};const e4=i4(K3),X3={...xr};X3[K]={...X3[K],...kr.kit};const M1=i4(X3),Y3={...hr};Y3[K]={...Y3[K],...Ar.kit};const Fr=i4(Y3),_r=pr,f7="fa-layers-text",Er=ur,Br={...Lr};i4(Br);const Rr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],k3=I1,P1=new Set;Object.keys(e4[K]).map(P1.add.bind(P1));Object.keys(e4[h2]).map(P1.add.bind(P1));Object.keys(e4[g2]).map(P1.add.bind(P1));const Hr=[...Mr,...wr],K1=J2.FontAwesomeConfig||{};function Dr(c){var l=V.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Or(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l;const a=Or(Dr(s));a!=null&&(K1[e]=a)});const r7={styleDefault:"solid",familyDefault:"classic",cssPrefix:a7,replacementClass:n7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K1.familyPrefix&&(K1.cssPrefix=K1.familyPrefix);const F1={...r7,...K1};F1.autoReplaceSvg||(F1.observeMutations=!1);const k={};Object.keys(r7).forEach(c=>{Object.defineProperty(k,c,{enumerable:!0,set:function(l){F1[c]=l,X1.forEach(s=>s(k))},get:function(){return F1[c]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(c){F1.cssPrefix=c,X1.forEach(l=>l(k))},get:function(){return F1.cssPrefix}});J2.FontAwesomeConfig=k;const X1=[];function $r(c){return X1.push(c),()=>{X1.splice(X1.indexOf(c),1)}}const G2=j3,P2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ir(c){if(!c||!W2)return;const l=V.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const s=V.head.childNodes;let e=null;for(let a=s.length-1;a>-1;a--){const n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return V.head.insertBefore(l,e),c}const qr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function a4(){let c=12,l="";for(;c-- >0;)l+=qr[Math.random()*62|0];return l}function _1(c){const l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function F0(c){return c.classList?_1(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function z7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ur(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(z7(c[s]),'" '),"").trim()}function V4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function _0(c){return c.size!==P2.size||c.x!==P2.x||c.y!==P2.y||c.rotate!==P2.rotate||c.flipX||c.flipY}function Wr(c){let{transform:l,containerWidth:s,iconWidth:e}=c;const a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),t={transform:"".concat(n," ").concat(o," ").concat(i)},z={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:t,path:z}}function Gr(c){let{transform:l,width:s=j3,height:e=j3,startCentered:a=!1}=c,n="";return a&&c7?n+="translate(".concat(l.x/G2-s/2,"em, ").concat(l.y/G2-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/G2,"em), calc(-50% + ").concat(l.y/G2,"em)) "):n+="translate(".concat(l.x/G2,"em, ").concat(l.y/G2,"em) "),n+="scale(".concat(l.size/G2*(l.flipX?-1:1),", ").concat(l.size/G2*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var jr=`:root, :host {
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
}`;function m7(){const c=a7,l=n7,s=k.cssPrefix,e=k.replacementClass;let a=jr;if(s!==c||e!==l){const n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(i,".".concat(e))}return a}let w8=!1;function v3(){k.autoAddCss&&!w8&&(Ir(m7()),w8=!0)}var Vr={mixout(){return{dom:{css:m7,insertCss:v3}}},hooks(){return{beforeDOMElementCreation(){v3()},beforeI2svg(){v3()}}}};const I2=J2||{};I2[$2]||(I2[$2]={});I2[$2].styles||(I2[$2].styles={});I2[$2].hooks||(I2[$2].hooks={});I2[$2].shims||(I2[$2].shims=[]);var F2=I2[$2];const L7=[],M7=function(){V.removeEventListener("DOMContentLoaded",M7),B4=1,L7.map(c=>c())};let B4=!1;W2&&(B4=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),B4||V.addEventListener("DOMContentLoaded",M7));function Kr(c){W2&&(B4?setTimeout(c,0):L7.push(c))}function t4(c){const{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?z7(c):"<".concat(l," ").concat(Ur(s),">").concat(e.map(t4).join(""),"</").concat(l,">")}function y8(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var T3=function(l,s,e,a){var n=Object.keys(l),o=n.length,i=s,t,z,r;for(e===void 0?(t=1,r=l[n[0]]):(t=0,r=e);t<o;t++)z=n[t],r=i(r,l[z],z,l);return r};function Xr(c){const l=[];let s=0;const e=c.length;for(;s<e;){const a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){const n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function Q3(c){const l=Xr(c);return l.length===1?l[0].toString(16):null}function Yr(c,l){const s=c.length;let e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function A8(c){return Object.keys(c).reduce((l,s)=>{const e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function J3(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:e=!1}=s,a=A8(l);typeof F2.hooks.addPack=="function"&&!e?F2.hooks.addPack(c,A8(l)):F2.styles[c]={...F2.styles[c]||{},...a},c==="fas"&&J3("fa",l)}const{styles:z1,shims:Qr}=F2,Jr={[K]:Object.values(M1[K]),[h2]:Object.values(M1[h2]),[g2]:Object.values(M1[g2])};let E0=null,p7={},u7={},C7={},d7={},h7={};const Zr={[K]:Object.keys(L1[K]),[h2]:Object.keys(L1[h2]),[g2]:Object.keys(L1[g2])};function cz(c){return~Hr.indexOf(c)}function lz(c,l){const s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!cz(a)?a:null}const g7=()=>{const c=e=>T3(z1,(a,n,o)=>(a[o]=T3(n,e,{}),a),{});p7=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{e[i.toString(16)]=n}),e)),u7=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{e[i]=n}),e)),h7=c((e,a,n)=>{const o=a[2];return e[n]=n,o.forEach(i=>{e[i]=n}),e});const l="far"in z1||k.autoFetchSvg,s=T3(Qr,(e,a)=>{const n=a[0];let o=a[1];const i=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});C7=s.names,d7=s.unicodes,E0=K4(k.styleDefault,{family:k.familyDefault})};$r(c=>{E0=K4(c.styleDefault,{family:k.familyDefault})});g7();function B0(c,l){return(p7[c]||{})[l]}function sz(c,l){return(u7[c]||{})[l]}function X2(c,l){return(h7[c]||{})[l]}function x7(c){return C7[c]||{prefix:null,iconName:null}}function ez(c){const l=d7[c],s=B0("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function Z2(){return E0}const R0=()=>({prefix:null,iconName:null,rest:[]});function K4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:s=K}=l,e=L1[s][c],a=e4[s][c]||e4[s][e],n=c in F2.styles?c:null;return a||n||null}const az={[K]:Object.keys(M1[K]),[h2]:Object.keys(M1[h2]),[g2]:Object.keys(M1[g2])};function X4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:s=!1}=l,e={[K]:"".concat(k.cssPrefix,"-").concat(K),[h2]:"".concat(k.cssPrefix,"-").concat(h2),[g2]:"".concat(k.cssPrefix,"-").concat(g2)};let a=null,n=K;const o=mr.filter(t=>t!==l7);o.forEach(t=>{(c.includes(e[t])||c.some(z=>az[t].includes(z)))&&(n=t)});const i=c.reduce((t,z)=>{const r=lz(k.cssPrefix,z);if(z1[z]?(z=Jr[n].includes(z)?Fr[n][z]:z,a=z,t.prefix=z):Zr[n].indexOf(z)>-1?(a=z,t.prefix=K4(z,{family:n})):r?t.iconName=r:z!==k.replacementClass&&!o.some(L=>z===e[L])&&t.rest.push(z),!s&&t.prefix&&t.iconName){const L=a==="fa"?x7(t.iconName):{},p=X2(t.prefix,t.iconName);L.prefix&&(a=null),t.iconName=L.iconName||p||t.iconName,t.prefix=L.prefix||t.prefix,t.prefix==="far"&&!z1.far&&z1.fas&&!k.autoFetchSvg&&(t.prefix="fas")}return t},R0());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===h2&&(z1.fass||k.autoFetchSvg)&&(i.prefix="fass",i.iconName=X2(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===g2&&(z1.fasds||k.autoFetchSvg)&&(i.prefix="fasds",i.iconName=X2(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||a==="fa")&&(i.prefix=Z2()||"fas"),i}class nz{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];const a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},J3(n,a[n]);const o=M1[K][n];o&&J3(o,a[n]),g7()})}reset(){this.definitions={}}_pullDefinitions(l,s){const e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{const{prefix:n,iconName:o,icon:i}=e[a],t=i[2];l[n]||(l[n]={}),t.length>0&&t.forEach(z=>{typeof z=="string"&&(l[n][z]=i)}),l[n][o]=i}),l}}let k8=[],x1={};const k1={},oz=Object.keys(k1);function iz(c,l){let{mixoutsTo:s}=l;return k8=c,x1={},Object.keys(k1).forEach(e=>{oz.indexOf(e)===-1&&delete k1[e]}),k8.forEach(e=>{const a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){const n=e.hooks();Object.keys(n).forEach(o=>{x1[o]||(x1[o]=[]),x1[o].push(n[o])})}e.provides&&e.provides(k1)}),s}function Z3(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(x1[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function C1(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(x1[c]||[]).forEach(n=>{n.apply(null,s)})}function c1(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return k1[c]?k1[c].apply(null,l):void 0}function c0(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const s=c.prefix||Z2();if(l)return l=X2(s,l)||l,y8(N7.definitions,s,l)||y8(F2.styles,s,l)}const N7=new nz,tz=()=>{k.autoReplaceSvg=!1,k.observeMutations=!1,C1("noAuto")},fz={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W2?(C1("beforeI2svg",c),c1("pseudoElements2svg",c),c1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Kr(()=>{zz({autoReplaceSvgRoot:l}),C1("watch",c)})}},rz={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:X2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=K4(c[0]);return{prefix:s,iconName:X2(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(k.cssPrefix,"-"))>-1||c.match(_r))){const l=X4(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||Z2(),iconName:X2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=Z2();return{prefix:l,iconName:X2(l,c)||c}}}},x2={noAuto:tz,config:k,dom:fz,parse:rz,library:N7,findIconDefinition:c0,toHtml:t4},zz=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=V}=c;(Object.keys(F2.styles).length>0||k.autoFetchSvg)&&W2&&k.autoReplaceSvg&&x2.dom.i2svg({node:l})};function Y4(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>t4(s))}}),Object.defineProperty(c,"node",{get:function(){if(!W2)return;const s=V.createElement("div");return s.innerHTML=c.html,s.children}}),c}function mz(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(_0(o)&&s.found&&!e.found){const{width:i,height:t}=s,z={x:i/t/2,y:.5};a.style=V4({...n,"transform-origin":"".concat(z.x+o.x/16,"em ").concat(z.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:l}]}function Lz(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c;const o=n===!0?"".concat(l,"-").concat(k.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:e}]}]}function H0(c){const{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:i,maskId:t,titleId:z,extra:r,watchable:L=!1}=c,{width:p,height:g}=s.found?s:l,B=e==="fak",F=[k.replacementClass,a?"".concat(k.cssPrefix,"-").concat(a):""].filter(D=>r.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(r.classes).join(" ");let O={children:[],attributes:{...r.attributes,"data-prefix":e,"data-icon":a,class:F,role:r.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const x=B&&!~r.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};L&&(O.attributes[u1]=""),i&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(z||a4())},children:[i]}),delete O.attributes.title);const w={...O,prefix:e,iconName:a,main:l,mask:s,maskId:t,transform:n,symbol:o,styles:{...x,...r.styles}},{children:P,attributes:A}=s.found&&l.found?c1("generateAbstractMask",w)||{children:[],attributes:{}}:c1("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=P,w.attributes=A,o?Lz(w):mz(w)}function v8(c){const{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:i=!1}=c,t={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")};i&&(t[u1]="");const z={...o.styles};_0(a)&&(z.transform=Gr({transform:a,startCentered:!0,width:s,height:e}),z["-webkit-transform"]=z.transform);const r=V4(z);r.length>0&&(t.style=r);const L=[];return L.push({tag:"span",attributes:t,children:[l]}),n&&L.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),L}function Mz(c){const{content:l,title:s,extra:e}=c,a={...e.attributes,...s?{title:s}:{},class:e.classes.join(" ")},n=V4(e.styles);n.length>0&&(a.style=n);const o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}const{styles:P3}=F2;function l0(c){const l=c[0],s=c[1],[e]=c.slice(4);let a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(k3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(k3.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(k3.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}const pz={found:!1,width:512,height:512};function uz(c,l){!o7&&!k.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function s0(c,l){let s=l;return l==="fa"&&k.styleDefault!==null&&(l=Z2()),new Promise((e,a)=>{if(s==="fa"){const n=x7(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&P3[l]&&P3[l][c]){const n=P3[l][c];return e(l0(n))}uz(c,l),e({...pz,icon:k.showMissingIcons&&c?c1("missingIconAbstract")||{}:{}})})}const T8=()=>{},e0=k.measurePerformance&&N4&&N4.mark&&N4.measure?N4:{mark:T8,measure:T8},q1='FA "6.6.0"',Cz=c=>(e0.mark("".concat(q1," ").concat(c," begins")),()=>b7(c)),b7=c=>{e0.mark("".concat(q1," ").concat(c," ends")),e0.measure("".concat(q1," ").concat(c),"".concat(q1," ").concat(c," begins"),"".concat(q1," ").concat(c," ends"))};var D0={begin:Cz,end:b7};const A4=()=>{};function P8(c){return typeof(c.getAttribute?c.getAttribute(u1):null)=="string"}function dz(c){const l=c.getAttribute?c.getAttribute(T0):null,s=c.getAttribute?c.getAttribute(P0):null;return l&&s}function hz(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(k.replacementClass)}function gz(){return k.autoReplaceSvg===!0?k4.replace:k4[k.autoReplaceSvg]||k4.replace}function xz(c){return V.createElementNS("http://www.w3.org/2000/svg",c)}function Nz(c){return V.createElement(c)}function S7(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:s=c.tag==="svg"?xz:Nz}=l;if(typeof c=="string")return V.createTextNode(c);const e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(S7(n,{ceFn:s}))}),e}function bz(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}const k4={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(S7(s),l)}),l.getAttribute(u1)===null&&k.keepOriginalSource){let s=V.createComment(bz(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){const l=c[0],s=c[1];if(~F0(l).indexOf(k.replacementClass))return k4.replace(c);const e=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){const n=s[0].attributes.class.split(" ").reduce((o,i)=>(i===k.replacementClass||i.match(e)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}const a=s.map(n=>t4(n)).join(`
`);l.setAttribute(u1,""),l.innerHTML=a}};function F8(c){c()}function w7(c,l){const s=typeof l=="function"?l:A4;if(c.length===0)s();else{let e=F8;k.mutateApproach===Tr&&(e=J2.requestAnimationFrame||F8),e(()=>{const a=gz(),n=D0.begin("mutate");c.map(a),n(),s()})}}let O0=!1;function y7(){O0=!0}function a0(){O0=!1}let R4=null;function _8(c){if(!x8||!k.observeMutations)return;const{treeCallback:l=A4,nodeCallback:s=A4,pseudoElementsCallback:e=A4,observeMutationsRoot:a=V}=c;R4=new x8(n=>{if(O0)return;const o=Z2();_1(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!P8(i.addedNodes[0])&&(k.searchPseudoElements&&e(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&k.searchPseudoElements&&e(i.target.parentNode),i.type==="attributes"&&P8(i.target)&&~Rr.indexOf(i.attributeName))if(i.attributeName==="class"&&dz(i.target)){const{prefix:t,iconName:z}=X4(F0(i.target));i.target.setAttribute(T0,t||o),z&&i.target.setAttribute(P0,z)}else hz(i.target)&&s(i.target)})}),W2&&R4.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Sz(){R4&&R4.disconnect()}function wz(c){const l=c.getAttribute("style");let s=[];return l&&(s=l.split(";").reduce((e,a)=>{const n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(e[o]=i.join(":").trim()),e},{})),s}function yz(c){const l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"";let a=X4(F0(c));return a.prefix||(a.prefix=Z2()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=sz(a.prefix,c.innerText)||B0(a.prefix,Q3(c.innerText))),!a.iconName&&k.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function Az(c){const l=_1(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return k.autoA11y&&(s?l["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(e||a4()):(l["aria-hidden"]="true",l.focusable="false")),l}function kz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:s,prefix:e,rest:a}=yz(c),n=Az(c),o=Z3("parseNodeAttributes",{},c);let i=l.styleParser?wz(c):[];return{iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:P2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:n},...o}}const{styles:vz}=F2;function A7(c){const l=k.autoReplaceSvg==="nest"?E8(c,{styleParser:!1}):E8(c);return~l.extra.classes.indexOf(f7)?c1("generateLayersText",c,l):c1("generateSvgReplacementMutation",c,l)}let B2=new Set;i7.map(c=>{B2.add("fa-".concat(c))});Object.keys(L1[K]).map(B2.add.bind(B2));Object.keys(L1[h2]).map(B2.add.bind(B2));Object.keys(L1[g2]).map(B2.add.bind(B2));B2=[...B2];function B8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W2)return Promise.resolve();const s=V.documentElement.classList,e=r=>s.add("".concat(S8,"-").concat(r)),a=r=>s.remove("".concat(S8,"-").concat(r)),n=k.autoFetchSvg?B2:i7.map(r=>"fa-".concat(r)).concat(Object.keys(vz));n.includes("fa")||n.push("fa");const o=[".".concat(f7,":not([").concat(u1,"])")].concat(n.map(r=>".".concat(r,":not([").concat(u1,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=_1(c.querySelectorAll(o))}catch{}if(i.length>0)e("pending"),a("complete");else return Promise.resolve();const t=D0.begin("onTree"),z=i.reduce((r,L)=>{try{const p=A7(L);p&&r.push(p)}catch(p){o7||p.name==="MissingIcon"&&console.error(p)}return r},[]);return new Promise((r,L)=>{Promise.all(z).then(p=>{w7(p,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),t(),r()})}).catch(p=>{t(),L(p)})})}function Tz(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A7(c).then(s=>{s&&w7([s],l)})}function Pz(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const e=(l||{}).icon?l:c0(l||{});let{mask:a}=s;return a&&(a=(a||{}).icon?a:c0(a||{})),c(e,{...s,mask:a})}}const Fz=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=P2,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:i=null,classes:t=[],attributes:z={},styles:r={}}=l;if(!c)return;const{prefix:L,iconName:p,icon:g}=c;return Y4({type:"icon",...c},()=>(C1("beforeDOMElementCreation",{iconDefinition:c,params:l}),k.autoA11y&&(o?z["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(i||a4()):(z["aria-hidden"]="true",z.focusable="false")),H0({icons:{main:l0(g),mask:a?l0(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:p,transform:{...P2,...s},symbol:e,title:o,maskId:n,titleId:i,extra:{attributes:z,styles:r,classes:t}})))};var _z={mixout(){return{icon:Pz(Fz)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=B8,c.nodeCallback=Tz,c}}},provides(c){c.i2svg=function(l){const{node:s=V,callback:e=()=>{}}=l;return B8(s,e)},c.generateSvgReplacementMutation=function(l,s){const{iconName:e,title:a,titleId:n,prefix:o,transform:i,symbol:t,mask:z,maskId:r,extra:L}=s;return new Promise((p,g)=>{Promise.all([s0(e,o),z.iconName?s0(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(B=>{let[F,O]=B;p([l,H0({icons:{main:F,mask:O},prefix:o,iconName:e,transform:i,symbol:t,maskId:r,title:a,titleId:n,extra:L,watchable:!0})])}).catch(g)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l;const i=V4(o);i.length>0&&(e.style=i);let t;return _0(n)&&(t=c1("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(t||a.icon),{children:s,attributes:e}}}},Ez={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:s=[]}=l;return Y4({type:"layer"},()=>{C1("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},Bz={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return Y4({type:"counter",content:c},()=>(C1("beforeDOMElementCreation",{content:c,params:l}),Mz({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(k.cssPrefix,"-layers-counter"),...e]}})))}}}},Rz={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=P2,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return Y4({type:"text",content:c},()=>(C1("beforeDOMElementCreation",{content:c,params:l}),v8({content:c,transform:{...P2,...s},title:e,extra:{attributes:n,styles:o,classes:["".concat(k.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){const{title:e,transform:a,extra:n}=s;let o=null,i=null;if(c7){const t=parseInt(getComputedStyle(l).fontSize,10),z=l.getBoundingClientRect();o=z.width/t,i=z.height/t}return k.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,v8({content:l.innerHTML,width:o,height:i,transform:a,title:e,extra:n,watchable:!0})])}}};const Hz=new RegExp('"',"ug"),R8=[1105920,1112319],H8={FontAwesome:{normal:"fas",400:"fas"},...dr,...Cr,...yr},n0=Object.keys(H8).reduce((c,l)=>(c[l.toLowerCase()]=H8[l],c),{}),Dz=Object.keys(n0).reduce((c,l)=>{const s=n0[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function Oz(c){const l=c.replace(Hz,""),s=Yr(l,0),e=s>=R8[0]&&s<=R8[1],a=l.length===2?l[0]===l[1]:!1;return{value:Q3(a?l[0]:l),isSecondary:e||a}}function $z(c,l){const s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(n0[s]||{})[a]||Dz[s]}function D8(c,l){const s="".concat(vr).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();const o=_1(c.children).filter(p=>p.getAttribute(V3)===l)[0],i=J2.getComputedStyle(c,l),t=i.getPropertyValue("font-family"),z=t.match(Er),r=i.getPropertyValue("font-weight"),L=i.getPropertyValue("content");if(o&&!z)return c.removeChild(o),e();if(z&&L!=="none"&&L!==""){const p=i.getPropertyValue("content");let g=$z(t,r);const{value:B,isSecondary:F}=Oz(p),O=z[0].startsWith("FontAwesome");let x=B0(g,B),w=x;if(O){const P=ez(B);P.iconName&&P.prefix&&(x=P.iconName,g=P.prefix)}if(x&&!F&&(!o||o.getAttribute(T0)!==g||o.getAttribute(P0)!==w)){c.setAttribute(s,w),o&&c.removeChild(o);const P=kz(),{extra:A}=P;A.attributes[V3]=l,s0(x,g).then(D=>{const m2=H0({...P,icons:{main:D,mask:R0()},prefix:g,iconName:w,extra:A,watchable:!0}),J=V.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(J,c.firstChild):c.appendChild(J),J.outerHTML=m2.map(w2=>t4(w2)).join(`