var Id=Object.defineProperty;var Au=n=>{throw TypeError(n)};var Nd=(n,e,t)=>e in n?Id(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var An=(n,e,t)=>Nd(n,typeof e!="symbol"?e+"":e,t),Qo=(n,e,t)=>e.has(n)||Au("Cannot "+t);var V=(n,e,t)=>(Qo(n,e,"read from private field"),t?t.call(n):e.get(n)),it=(n,e,t)=>e.has(n)?Au("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),et=(n,e,t,i)=>(Qo(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),vt=(n,e,t)=>(Qo(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ef=!1;var Wo=Array.isArray,Fd=Array.prototype.indexOf,Lo=Array.prototype.includes,Xo=Array.from,Od=Object.defineProperty,As=Object.getOwnPropertyDescriptor,tf=Object.getOwnPropertyDescriptors,Bd=Object.prototype,zd=Array.prototype,Kc=Object.getPrototypeOf,Ru=Object.isExtensible;const kd=()=>{};function Hd(n){return n()}function Gl(n){for(var e=0;e<n.length;e++)n[e]()}function nf(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const on=2,ks=4,Fa=8,rf=1<<24,si=16,hi=32,Mr=64,Wl=128,qn=512,Wt=1024,Zt=2048,fi=4096,pn=8192,In=16384,ta=32768,Xl=1<<25,Hs=65536,Uo=1<<17,Vd=1<<18,na=1<<19,sf=1<<20,Mi=1<<25,jr=65536,Io=1<<21,Rs=1<<22,mr=1<<23,Hi=Symbol("$state"),Gd=Symbol("legacy props"),Wd=Symbol(""),Mo=Symbol("attributes"),ql=Symbol("class"),jl=Symbol("style"),ma=Symbol("text"),So=Symbol("form reset"),qo=new class extends Error{constructor(){super(...arguments);An(this,"name","StaleReactionError");An(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Zh;const Xd=!!((Zh=globalThis.document)!=null&&Zh.contentType)&&globalThis.document.contentType.includes("xml");function af(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function qd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function jd(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Yd(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function $d(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Kd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Zd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jd(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Qd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ep(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function tp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function np(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ip=1,rp=2,of=4,sp=8,ap=16,op=1,lp=2,cp=4,up=8,hp=16,lf=1,fp=2,jt=Symbol("uninitialized"),dp="http://www.w3.org/1999/xhtml";function pp(){console.warn("https://svelte.dev/e/derived_inert")}function mp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function _p(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function cf(n){return n===this.v}function vp(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function uf(n){return!vp(n,this.v)}let ia=!1,gp=!1;function xp(){ia=!0}let Dt=null;function Vs(n){Dt=n}function $i(n,e=!1,t){Dt={p:Dt,i:!1,c:null,e:null,s:n,x:null,r:ot,l:ia&&!e?{s:null,u:null,$:[]}:null}}function Ki(n){var e=Dt,t=e.e;if(t!==null){e.e=null;for(var i of t)Df(i)}return e.i=!0,Dt=e.p,{}}function Oa(){return!ia||Dt!==null&&Dt.l===null}let Ir=[];function hf(){var n=Ir;Ir=[],Gl(n)}function _r(n){if(Ir.length===0&&!ya){var e=Ir;queueMicrotask(()=>{e===Ir&&hf()})}Ir.push(n)}function Mp(){for(;Ir.length>0;)hf()}function ff(n){var e=ot;if(e===null)return ut.f|=mr,n;if((e.f&ta)===0&&(e.f&ks)===0)throw n;fr(n,e)}function fr(n,e){if(!(e!==null&&(e.f&In)!==0)){for(;e!==null;){if((e.f&Wl)!==0){if((e.f&ta)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}const Sp=-7169;function Bt(n,e){n.f=n.f&Sp|e}function Zc(n){(n.f&qn)!==0||n.deps===null?Bt(n,Wt):Bt(n,fi)}function df(n){if(n!==null)for(const e of n)(e.f&on)===0||(e.f&jr)===0||(e.f^=jr,df(e.deps))}function pf(n,e,t){(n.f&Zt)!==0?e.add(n):(n.f&fi)!==0&&t.add(n),df(n.deps),Bt(n,Wt)}let Wa=!1;function yp(n){var e=Wa;try{return Wa=!1,[n(),Wa]}finally{Wa=e}}function Ep(n){let e=0,t=$r(0),i;return()=>{nu()&&(x(t),za(()=>(e===0&&(i=It(()=>n(()=>Ea(t)))),e+=1,()=>{_r(()=>{e-=1,e===0&&(i==null||i(),i=void 0,Ea(t))})})))}}var bp=Hs|na;function Tp(n,e,t,i){new wp(n,e,t,i)}var Hn,$c,Vn,Br,gn,Gn,dn,Dn,Ii,zr,ur,Us,Da,La,Ni,Ho,zt,Ap,Rp,Cp,Yl,yo,Eo,$l,Kl;class wp{constructor(e,t,i,r){it(this,zt);An(this,"parent");An(this,"is_pending",!1);An(this,"transform_error");it(this,Hn);it(this,$c,null);it(this,Vn);it(this,Br);it(this,gn);it(this,Gn,null);it(this,dn,null);it(this,Dn,null);it(this,Ii,null);it(this,zr,0);it(this,ur,0);it(this,Us,!1);it(this,Da,new Set);it(this,La,new Set);it(this,Ni,null);it(this,Ho,Ep(()=>(et(this,Ni,$r(V(this,zr))),()=>{et(this,Ni,null)})));var s;et(this,Hn,e),et(this,Vn,t),et(this,Br,a=>{var o=ot;o.b=this,o.f|=Wl,i(a)}),this.parent=ot.b,this.transform_error=r??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),et(this,gn,ru(()=>{vt(this,zt,Yl).call(this)},bp))}defer_effect(e){pf(e,V(this,Da),V(this,La))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!V(this,Vn).pending}update_pending_count(e,t){vt(this,zt,$l).call(this,e,t),et(this,zr,V(this,zr)+e),!(!V(this,Ni)||V(this,Us))&&(et(this,Us,!0),_r(()=>{et(this,Us,!1),V(this,Ni)&&Ws(V(this,Ni),V(this,zr))}))}get_effect_pending(){return V(this,Ho).call(this),x(V(this,Ni))}error(e){if(!V(this,Vn).onerror&&!V(this,Vn).failed)throw e;We!=null&&We.is_fork?(V(this,Gn)&&We.skip_effect(V(this,Gn)),V(this,dn)&&We.skip_effect(V(this,dn)),V(this,Dn)&&We.skip_effect(V(this,Dn)),We.oncommit(()=>{vt(this,zt,Kl).call(this,e)})):vt(this,zt,Kl).call(this,e)}}Hn=new WeakMap,$c=new WeakMap,Vn=new WeakMap,Br=new WeakMap,gn=new WeakMap,Gn=new WeakMap,dn=new WeakMap,Dn=new WeakMap,Ii=new WeakMap,zr=new WeakMap,ur=new WeakMap,Us=new WeakMap,Da=new WeakMap,La=new WeakMap,Ni=new WeakMap,Ho=new WeakMap,zt=new WeakSet,Ap=function(){try{et(this,Gn,Wn(()=>V(this,Br).call(this,V(this,Hn))))}catch(e){this.error(e)}},Rp=function(e){const t=V(this,Vn).failed;t&&et(this,Dn,Wn(()=>{t(V(this,Hn),()=>e,()=>()=>{})}))},Cp=function(){const e=V(this,Vn).pending;e&&(this.is_pending=!0,et(this,dn,Wn(()=>e(V(this,Hn)))),_r(()=>{var t=et(this,Ii,document.createDocumentFragment()),i=Vi();t.append(i),et(this,Gn,vt(this,zt,Eo).call(this,()=>Wn(()=>V(this,Br).call(this,i)))),V(this,ur)===0&&(V(this,Hn).before(t),et(this,Ii,null),Wr(V(this,dn),()=>{et(this,dn,null)}),vt(this,zt,yo).call(this,We))}))},Yl=function(){try{if(this.is_pending=this.has_pending_snippet(),et(this,ur,0),et(this,zr,0),et(this,Gn,Wn(()=>{V(this,Br).call(this,V(this,Hn))})),V(this,ur)>0){var e=et(this,Ii,document.createDocumentFragment());au(V(this,Gn),e);const t=V(this,Vn).pending;et(this,dn,Wn(()=>t(V(this,Hn))))}else vt(this,zt,yo).call(this,We)}catch(t){this.error(t)}},yo=function(e){this.is_pending=!1,e.transfer_effects(V(this,Da),V(this,La))},Eo=function(e){var t=ot,i=ut,r=Dt;Yn(V(this,gn)),jn(V(this,gn)),Vs(V(this,gn).ctx);try{return Yr.ensure(),e()}catch(s){return ff(s),null}finally{Yn(t),jn(i),Vs(r)}},$l=function(e,t){var i;if(!this.has_pending_snippet()){this.parent&&vt(i=this.parent,zt,$l).call(i,e,t);return}et(this,ur,V(this,ur)+e),V(this,ur)===0&&(vt(this,zt,yo).call(this,t),V(this,dn)&&Wr(V(this,dn),()=>{et(this,dn,null)}),V(this,Ii)&&(V(this,Hn).before(V(this,Ii)),et(this,Ii,null)))},Kl=function(e){V(this,Gn)&&(En(V(this,Gn)),et(this,Gn,null)),V(this,dn)&&(En(V(this,dn)),et(this,dn,null)),V(this,Dn)&&(En(V(this,Dn)),et(this,Dn,null));var t=V(this,Vn).onerror;let i=V(this,Vn).failed;var r=!1,s=!1;const a=()=>{if(r){_p();return}r=!0,s&&np(),V(this,Dn)!==null&&Wr(V(this,Dn),()=>{et(this,Dn,null)}),vt(this,zt,Eo).call(this,()=>{vt(this,zt,Yl).call(this)})},o=l=>{try{s=!0,t==null||t(l,a),s=!1}catch(c){fr(c,V(this,gn)&&V(this,gn).parent)}i&&et(this,Dn,vt(this,zt,Eo).call(this,()=>{try{return Wn(()=>{var c=ot;c.b=this,c.f|=Wl,i(V(this,Hn),()=>l,()=>a)})}catch(c){return fr(c,V(this,gn).parent),null}}))};_r(()=>{var l;try{l=this.transform_error(e)}catch(c){fr(c,V(this,gn)&&V(this,gn).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>fr(c,V(this,gn)&&V(this,gn).parent)):o(l)})};function Pp(n,e,t,i){const r=Oa()?Gs:Jc;var s=n.filter(m=>!m.settled),a=e.map(r);if(t.length===0&&s.length===0){i(a);return}var o=ot,l=Dp(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(m=>m.promise)):null;function u(m){if((o.f&In)===0){l();try{i([...a,...m])}catch(_){fr(_,o)}No()}}var f=mf();if(t.length===0){c.then(()=>u([])).finally(f);return}function h(){Promise.all(t.map(m=>Lp(m))).then(u).catch(m=>fr(m,o)).finally(f)}c?c.then(()=>{l(),h(),No()}):h()}function Dp(){var n=ot,e=ut,t=Dt,i=We;return function(s=!0){Yn(n),jn(e),Vs(t),s&&(n.f&In)===0&&(i==null||i.activate(),i==null||i.apply())}}function No(n=!0){Yn(null),jn(null),Vs(null),n&&(We==null||We.deactivate())}function mf(){var n=ot,e=n.b,t=We,i=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(i,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(i,n)}}function Gs(n){var e=on|Zt;return ot!==null&&(ot.f|=na),{ctx:Dt,deps:null,effects:null,equals:cf,f:e,fn:n,reactions:null,rv:0,v:jt,wv:0,parent:ot,ac:null}}const _a=Symbol("obsolete");function Lp(n,e,t){let i=ot;i===null&&qd();var r=void 0,s=$r(jt),a=!ut,o=new Set;return Yp(()=>{var m,_;var l=ot,c=nf();r=c.promise;try{Promise.resolve(n()).then(c.resolve,v=>{v!==qo&&c.reject(v)}).finally(No)}catch(v){c.reject(v),No()}var u=We;if(a){if((l.f&ta)!==0)var f=mf();if((m=i.b)!=null&&m.is_rendered())(_=u.async_deriveds.get(l))==null||_.reject(_a);else for(const v of o.values())v.reject(_a);o.add(c),u.async_deriveds.set(l,c)}const h=(v,p=void 0)=>{f==null||f(),o.delete(c),p!==_a&&(u.activate(),p?(s.f|=mr,Ws(s,p)):((s.f&mr)!==0&&(s.f^=mr),Ws(s,v)),u.deactivate())};c.promise.then(h,v=>h(null,v||"unknown"))}),iu(()=>{for(const l of o)l.reject(_a)}),new Promise(l=>{function c(u){function f(){u===r?l(s):c(r)}u.then(f,f)}c(r)})}function Gt(n){const e=Gs(n);return zf(e),e}function Jc(n){const e=Gs(n);return e.equals=uf,e}function Up(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)En(e[t])}}function Qc(n){var e,t=ot,i=n.parent;if(!qi&&i!==null&&n.v!==jt&&(i.f&(In|pn))!==0)return pp(),n.v;Yn(i);try{n.f&=~jr,Up(n),e=Gf(n)}finally{Yn(t)}return e}function _f(n){var e=Qc(n);if(!n.equals(e)&&(n.wv=Hf(),(!(We!=null&&We.is_fork)||n.deps===null)&&(We!==null?(We.capture(n,e,!0),Sa==null||Sa.capture(n,e,!0)):n.v=e,n.deps===null))){Bt(n,Wt);return}qi||(sn!==null?(nu()||We!=null&&We.is_fork)&&sn.set(n,e):Zc(n))}function Ip(n){var e,t;if(n.effects!==null)for(const i of n.effects)(i.teardown||i.ac)&&((e=i.teardown)==null||e.call(i),(t=i.ac)==null||t.abort(qo),i.fn!==null&&(i.teardown=kd),i.ac=null,Aa(i,0),su(i))}function vf(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&Kr(e)}let el=null,ss=null,We=null,Sa=null,sn=null,Zl=null,ya=!1,tl=!1,ys=null,bo=null;var Cu=0;let Np=1;var Is,hr,kr,Ns,Fs,Os,Fi,Bs,xn,Ua,Oi,ti,_i,zs,Hr,At,Jl,va,Ql,gf,xf,Ms,Fp,ga;const Vo=class Vo{constructor(){it(this,At);An(this,"id",Np++);it(this,Is,!1);An(this,"linked",!0);it(this,hr,null);it(this,kr,null);An(this,"async_deriveds",new Map);An(this,"current",new Map);An(this,"previous",new Map);it(this,Ns,new Set);it(this,Fs,new Set);it(this,Os,0);it(this,Fi,new Map);it(this,Bs,null);it(this,xn,[]);it(this,Ua,[]);it(this,Oi,new Set);it(this,ti,new Set);it(this,_i,new Map);it(this,zs,new Set);An(this,"is_fork",!1);it(this,Hr,!1);ss===null?el=ss=this:(et(ss,kr,this),et(this,hr,ss)),ss=this}skip_effect(e){V(this,_i).has(e)||V(this,_i).set(e,{d:[],m:[]}),V(this,zs).delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=V(this,_i).get(e);if(i){V(this,_i).delete(e);for(var r of i.d)Bt(r,Zt),t(r);for(r of i.m)Bt(r,fi),t(r)}V(this,zs).add(e)}capture(e,t,i=!1){e.v!==jt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&mr)===0&&(this.current.set(e,[t,i]),sn==null||sn.set(e,t)),this.is_fork||(e.v=t)}activate(){We=this}deactivate(){We=null,sn=null}flush(){try{tl=!0,We=this,vt(this,At,va).call(this)}finally{Cu=0,Zl=null,ys=null,bo=null,tl=!1,We=null,sn=null,Gr.clear()}}discard(){var e;for(const t of V(this,Fs))t(this);V(this,Fs).clear();for(const t of this.async_deriveds.values())t.reject(_a);vt(this,At,ga).call(this),(e=V(this,Bs))==null||e.resolve()}register_created_effect(e){V(this,Ua).push(e)}increment(e,t){if(et(this,Os,V(this,Os)+1),e){let i=V(this,Fi).get(t)??0;V(this,Fi).set(t,i+1)}}decrement(e,t){if(et(this,Os,V(this,Os)-1),e){let i=V(this,Fi).get(t)??0;i===1?V(this,Fi).delete(t):V(this,Fi).set(t,i-1)}V(this,Hr)||(et(this,Hr,!0),_r(()=>{et(this,Hr,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const i of e)V(this,Oi).add(i);for(const i of t)V(this,ti).add(i);e.clear(),t.clear()}oncommit(e){V(this,Ns).add(e)}ondiscard(e){V(this,Fs).add(e)}settled(){return(V(this,Bs)??et(this,Bs,nf())).promise}static ensure(){if(We===null){const e=We=new Vo;!tl&&!ya&&_r(()=>{V(e,Is)||e.flush()})}return We}apply(){{sn=null;return}}schedule(e){var r;if(Zl=e,(r=e.b)!=null&&r.is_pending&&(e.f&(ks|Fa|rf))!==0&&(e.f&ta)===0){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var i=t.f;if(ys!==null&&t===ot&&(ut===null||(ut.f&on)===0))return;if((i&(Mr|hi))!==0){if((i&Wt)===0)return;t.f^=Wt}}V(this,xn).push(t)}};Is=new WeakMap,hr=new WeakMap,kr=new WeakMap,Ns=new WeakMap,Fs=new WeakMap,Os=new WeakMap,Fi=new WeakMap,Bs=new WeakMap,xn=new WeakMap,Ua=new WeakMap,Oi=new WeakMap,ti=new WeakMap,_i=new WeakMap,zs=new WeakMap,Hr=new WeakMap,At=new WeakSet,Jl=function(){if(this.is_fork)return!0;for(const i of V(this,Fi).keys()){for(var e=i,t=!1;e.parent!==null;){if(V(this,_i).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},va=function(){var l,c,u,f;et(this,Is,!0),Cu++>1e3&&(vt(this,At,ga).call(this),Bp());for(const h of V(this,Oi))V(this,ti).delete(h),Bt(h,Zt),this.schedule(h);for(const h of V(this,ti))Bt(h,fi),this.schedule(h);const e=V(this,xn);et(this,xn,[]),this.apply();var t=ys=[],i=[],r=bo=[];for(const h of e)try{vt(this,At,Ql).call(this,h,t,i)}catch(m){throw yf(h),vt(this,At,Jl).call(this)||this.discard(),m}if(We=null,r.length>0){var s=Vo.ensure();for(const h of r)s.schedule(h)}if(ys=null,bo=null,vt(this,At,Jl).call(this)){vt(this,At,Ms).call(this,i),vt(this,At,Ms).call(this,t);for(const[h,m]of V(this,_i))Sf(h,m);r.length>0&&vt(l=We,At,va).call(l);return}const a=vt(this,At,gf).call(this);if(a){vt(this,At,Ms).call(this,i),vt(this,At,Ms).call(this,t),vt(c=a,At,xf).call(c,this);return}V(this,Oi).clear(),V(this,ti).clear();for(const h of V(this,Ns))h(this);V(this,Ns).clear(),Sa=this,Pu(i),Pu(t),Sa=null,(u=V(this,Bs))==null||u.resolve();var o=We;if(V(this,Os)===0&&(V(this,xn).length===0||o!==null)&&vt(this,At,ga).call(this),V(this,xn).length>0)if(o!==null){const h=o;V(h,xn).push(...V(this,xn).filter(m=>!V(h,xn).includes(m)))}else o=this;o!==null&&vt(f=o,At,va).call(f)},Ql=function(e,t,i){e.f^=Wt;for(var r=e.first;r!==null;){var s=r.f,a=(s&(hi|Mr))!==0,o=a&&(s&Wt)!==0,l=o||(s&pn)!==0||V(this,_i).has(r);if(!l&&r.fn!==null){a?r.f^=Wt:(s&ks)!==0?t.push(r):ra(r)&&((s&si)!==0&&V(this,ti).add(r),Kr(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}},gf=function(){for(var e=V(this,hr);e!==null;){if(!e.is_fork){for(const[t,[,i]]of this.current)if(e.current.has(t)&&!i)return e}e=V(e,hr)}return null},xf=function(e){var i;for(const[r,s]of e.current)!this.previous.has(r)&&e.previous.has(r)&&this.previous.set(r,e.previous.get(r)),this.current.set(r,s);for(const[r,s]of e.async_deriveds){const a=this.async_deriveds.get(r);a&&s.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_effects(V(e,Oi),V(e,ti));const t=r=>{var s=r.reactions;if(s!==null)for(const l of s){var a=l.f;if((a&on)!==0)t(l);else{var o=l;a&(Rs|si)&&!this.async_deriveds.has(o)&&(V(this,ti).delete(o),Bt(o,Zt),this.schedule(o))}}};for(const r of this.current.keys())t(r);this.oncommit(()=>e.discard()),vt(i=e,At,ga).call(i),We=this,vt(this,At,va).call(this)},Ms=function(e){for(var t=0;t<e.length;t+=1)pf(e[t],V(this,Oi),V(this,ti))},Fp=function(){var f;for(let h=el;h!==null;h=V(h,kr)){var e=h.id<this.id,t=[];for(const[m,[_,v]]of this.current){if(h.current.has(m)){var i=h.current.get(m)[0];if(e&&_!==i)h.current.set(m,[_,v]);else continue}t.push(m)}if(e)for(const[m,_]of this.async_deriveds){const v=h.async_deriveds.get(m);v&&_.promise.then(v.resolve).catch(v.reject)}var r=[...h.current.keys()].filter(m=>!h.current.get(m)[1]);if(!(!V(h,Is)||r.length===0)){var s=r.filter(m=>!this.current.has(m));if(s.length===0)e&&h.discard();else if(t.length>0){if(e)for(const m of V(this,zs))h.unskip_effect(m,_=>{var v;(_.f&(si|Rs))!==0?h.schedule(_):vt(v=h,At,Ms).call(v,[_])});h.activate();var a=new Set,o=new Map;for(var l of t)Mf(l,s,a,o);o=new Map;var c=[...h.current].filter(([m,_])=>{const v=this.current.get(m);return v?v[0]!==_[0]||v[1]!==_[1]:!0}).map(([m])=>m);if(c.length>0)for(const m of V(this,Ua))(m.f&(In|pn|Uo))===0&&eu(m,c,o)&&((m.f&(Rs|si))!==0?(Bt(m,Zt),h.schedule(m)):V(h,Oi).add(m));if(V(h,xn).length>0&&!V(h,Hr)){h.apply();for(var u of V(h,xn))vt(f=h,At,Ql).call(f,u,[],[]);et(h,xn,[])}h.deactivate()}}}},ga=function(){if(this.linked){var e=V(this,hr),t=V(this,kr);e===null?el=t:et(e,kr,t),t===null?ss=e:et(t,hr,e),this.linked=!1}};let Yr=Vo;function Op(n){var e=ya;ya=!0;try{for(var t;;){if(Mp(),We===null)return t;We.flush()}}finally{ya=e}}function Bp(){try{Zd()}catch(n){fr(n,Zl)}}let ei=null;function Pu(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(In|pn))===0&&ra(i)&&(ei=new Set,Kr(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Ff(i),(ei==null?void 0:ei.size)>0)){Gr.clear();for(const r of ei){if((r.f&(In|pn))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)ei.has(a)&&(ei.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(In|pn))===0&&Kr(l)}}ei.clear()}}ei=null}}function Mf(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&on)!==0?Mf(r,e,t,i):(s&(Rs|si))!==0&&(s&Zt)===0&&eu(r,e,i)&&(Bt(r,Zt),tu(r))}}function eu(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Lo.call(e,r))return!0;if((r.f&on)!==0&&eu(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function tu(n){We.schedule(n)}function Sf(n,e){if(!((n.f&hi)!==0&&(n.f&Wt)!==0)){(n.f&Zt)!==0?e.d.push(n):(n.f&fi)!==0&&e.m.push(n),Bt(n,Wt);for(var t=n.first;t!==null;)Sf(t,e),t=t.next}}function yf(n){Bt(n,Wt);for(var e=n.first;e!==null;)yf(e),e=e.next}let Fo=new Set;const Gr=new Map;let Ef=!1;function $r(n,e){var t={f:0,v:n,reactions:null,equals:cf,rv:0,wv:0};return t}function ke(n,e){const t=$r(n);return zf(t),t}function rn(n,e=!1,t=!0){var r;const i=$r(n);return e||(i.equals=uf),ia&&t&&Dt!==null&&Dt.l!==null&&((r=Dt.l).s??(r.s=[])).push(i),i}function F(n,e,t=!1){ut!==null&&(!ai||(ut.f&Uo)!==0)&&Oa()&&(ut.f&(on|si|Rs|Uo))!==0&&(Si===null||!Si.has(n))&&tp();let i=t?Xt(e):e;return Ws(n,i,bo)}function Ws(n,e,t=null){if(!n.equals(e)){Gr.set(n,qi?e:n.v);var i=Yr.ensure();if(i.capture(n,e),(n.f&on)!==0){const r=n;(n.f&Zt)!==0&&Qc(r),sn===null&&Zc(r)}n.wv=Hf(),bf(n,Zt,t),Oa()&&ot!==null&&(ot.f&Wt)!==0&&(ot.f&(hi|Mr))===0&&(kn===null?Zp([n]):kn.push(n)),!i.is_fork&&Fo.size>0&&!Ef&&zp()}return e}function zp(){Ef=!1;for(const n of Fo){(n.f&Wt)!==0&&Bt(n,fi);let e;try{e=ra(n)}catch{e=!0}e&&Kr(n)}Fo.clear()}function Ea(n){F(n,n.v+1)}function bf(n,e,t){var i=n.reactions;if(i!==null)for(var r=Oa(),s=i.length,a=0;a<s;a++){var o=i[a],l=o.f;if(!(!r&&o===ot)){var c=(l&Zt)===0;if(c&&Bt(o,e),(l&Uo)!==0)Fo.add(o);else if((l&on)!==0){var u=o;sn==null||sn.delete(u),(l&jr)===0&&(l&qn&&(ot===null||(ot.f&Io)===0)&&(o.f|=jr),bf(u,fi,t))}else if(c){var f=o;(l&si)!==0&&ei!==null&&ei.add(f),t!==null?t.push(f):tu(f)}}}}function Xt(n){if(typeof n!="object"||n===null||Hi in n)return n;const e=Kc(n);if(e!==Bd&&e!==zd)return n;var t=new Map,i=Wo(n),r=ke(0),s=Xr,a=o=>{if(Xr===s)return o();var l=ut,c=Xr;jn(null),Nu(s);var u=o();return jn(l),Nu(c),u};return i&&t.set("length",ke(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Qd();var u=t.get(l);return u===void 0?a(()=>{var f=ke(c.value);return t.set(l,f),f}):F(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=a(()=>ke(jt));t.set(l,u),Ea(r)}}else F(c,jt),Ea(r);return!0},get(o,l,c){var m;if(l===Hi)return n;var u=t.get(l),f=l in o;if(u===void 0&&(!f||(m=As(o,l))!=null&&m.writable)&&(u=a(()=>{var _=Xt(f?o[l]:jt),v=ke(_);return v}),t.set(l,u)),u!==void 0){var h=x(u);return h===jt?void 0:h}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=x(u))}else if(c===void 0){var f=t.get(l),h=f==null?void 0:f.v;if(f!==void 0&&h!==jt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){var h;if(l===Hi)return!0;var c=t.get(l),u=c!==void 0&&c.v!==jt||Reflect.has(o,l);if(c!==void 0||ot!==null&&(!u||(h=As(o,l))!=null&&h.writable)){c===void 0&&(c=a(()=>{var m=u?Xt(o[l]):jt,_=ke(m);return _}),t.set(l,c));var f=x(c);if(f===jt)return!1}return u},set(o,l,c,u){var b;var f=t.get(l),h=l in o;if(i&&l==="length")for(var m=c;m<f.v;m+=1){var _=t.get(m+"");_!==void 0?F(_,jt):m in o&&(_=a(()=>ke(jt)),t.set(m+"",_))}if(f===void 0)(!h||(b=As(o,l))!=null&&b.writable)&&(f=a(()=>ke(void 0)),F(f,Xt(c)),t.set(l,f));else{h=f.v!==jt;var v=a(()=>Xt(c));F(f,v)}var p=Reflect.getOwnPropertyDescriptor(o,l);if(p!=null&&p.set&&p.set.call(u,c),!h){if(i&&typeof l=="string"){var d=t.get("length"),w=Number(l);Number.isInteger(w)&&w>=d.v&&F(d,w+1)}Ea(r)}return!0},ownKeys(o){x(r);var l=Reflect.ownKeys(o).filter(f=>{var h=t.get(f);return h===void 0||h.v!==jt});for(var[c,u]of t)u.v!==jt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){ep()}})}function Du(n){try{if(n!==null&&typeof n=="object"&&Hi in n)return n[Hi]}catch{}return n}function kp(n,e){return Object.is(Du(n),Du(e))}var Lu,Tf,wf,Af;function Hp(){if(Lu===void 0){Lu=window,Tf=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;wf=As(e,"firstChild").get,Af=As(e,"nextSibling").get,Ru(n)&&(n[ql]=void 0,n[Mo]=null,n[jl]=void 0,n.__e=void 0),Ru(t)&&(t[ma]=void 0)}}function Vi(n=""){return document.createTextNode(n)}function Bi(n){return wf.call(n)}function Ba(n){return Af.call(n)}function z(n,e){return Bi(n)}function Oo(n,e=!1){{var t=Bi(n);return t instanceof Comment&&t.data===""?Ba(t):t}}function G(n,e=1,t=!1){let i=n;for(;e--;)i=Ba(i);return i}function Vp(n){n.textContent=""}function Rf(){return!1}function Gp(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}let Uu=!1;function Wp(){Uu||(Uu=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[So])==null||e.call(t)})},{capture:!0}))}function jo(n){var e=ut,t=ot;jn(null),Yn(null);try{return n()}finally{jn(e),Yn(t)}}function Cf(n,e,t,i=t){n.addEventListener(e,()=>jo(t));const r=n[So];r?n[So]=()=>{r(),i(!0)}:n[So]=()=>i(!0),Wp()}function Pf(n){ot===null&&(ut===null&&Kd(),$d()),qi&&Yd()}function Xp(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function bi(n,e){var t=ot;t!==null&&(t.f&pn)!==0&&(n|=pn);var i={ctx:Dt,deps:null,nodes:null,f:n|Zt|qn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};We==null||We.register_created_effect(i);var r=i;if((n&ks)!==0)ys!==null?ys.push(i):Yr.ensure().schedule(i);else if(e!==null){try{Kr(i)}catch(a){throw En(i),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&na)===0&&(r=r.first,(n&si)!==0&&(n&Hs)!==0&&r!==null&&(r.f|=Hs))}if(r!==null&&(r.parent=t,t!==null&&Xp(r,t),ut!==null&&(ut.f&on)!==0&&(n&Mr)===0)){var s=ut;(s.effects??(s.effects=[])).push(r)}return i}function nu(){return ut!==null&&!ai}function iu(n){const e=bi(Fa,null);return Bt(e,Wt),e.teardown=n,e}function Xs(n){Pf();var e=ot.f,t=!ut&&(e&hi)!==0&&Dt!==null&&!Dt.i;if(t){var i=Dt;(i.e??(i.e=[])).push(n)}else return Df(n)}function Df(n){return bi(ks|sf,n)}function qp(n){return Pf(),bi(Fa|sf,n)}function jp(n){Yr.ensure();const e=bi(Mr|na,n);return(t={})=>new Promise(i=>{t.outro?Wr(e,()=>{En(e),i(void 0)}):(En(e),i(void 0))})}function Lf(n){return bi(ks,n)}function Uf(n,e){var t=Dt,i={effect:null,ran:!1,deps:n};t.l.$.push(i),i.effect=za(()=>{if(n(),!i.ran){i.ran=!0;var r=ot;try{Yn(r.parent),It(e)}finally{Yn(r)}}})}function If(){var n=Dt;za(()=>{for(var e of n.l.$){e.deps();var t=e.effect;(t.f&Wt)!==0&&t.deps!==null&&Bt(t,fi),ra(t)&&Kr(t),e.ran=!1}})}function Yp(n){return bi(Rs|na,n)}function za(n,e=0){return bi(Fa|e,n)}function tt(n,e=[],t=[],i=[]){Pp(i,e,t,r=>{bi(Fa,()=>{n(...r.map(x))})})}function ru(n,e=0){var t=bi(si|e,n);return t}function Wn(n){return bi(hi|na,n)}function Nf(n){var e=n.teardown;if(e!==null){const t=qi,i=ut;Iu(!0),jn(null);try{e.call(null)}finally{Iu(t),jn(i)}}}function su(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&jo(()=>{r.abort(qo)});var i=t.next;(t.f&Mr)!==0?t.parent=null:En(t,e),t=i}}function $p(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&hi)===0&&En(e),e=t}}function En(n,e=!0){var t=!1;(e||(n.f&Vd)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Kp(n.nodes.start,n.nodes.end),t=!0),n.f|=Xl,su(n,e&&!t),Aa(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Nf(n),n.f^=Xl,n.f|=In;var r=n.parent;r!==null&&r.first!==null&&Ff(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Kp(n,e){for(;n!==null;){var t=n===e?null:Ba(n);n.remove(),n=t}}function Ff(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Wr(n,e,t=!0){var i=[];Of(n,i,!0);var r=()=>{t&&En(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function Of(n,e,t){if((n.f&pn)===0){n.f^=pn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next;if((r.f&Mr)===0){var a=(r.f&Hs)!==0||(r.f&hi)!==0&&(n.f&si)!==0;Of(r,e,a?t:!1)}r=s}}}function Bo(n){Bf(n,!0)}function Bf(n,e){if((n.f&pn)!==0){n.f^=pn,(n.f&Wt)===0&&(Bt(n,Zt),Yr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Hs)!==0||(t.f&hi)!==0;Bf(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function au(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Ba(t);e.append(t),t=r}}let To=!1,qi=!1;function Iu(n){qi=n}let ut=null,ai=!1;function jn(n){ut=n}let ot=null;function Yn(n){ot=n}let Si=null;function zf(n){ut!==null&&(Si??(Si=new Set)).add(n)}let Mn=null,Pn=0,kn=null;function Zp(n){kn=n}let kf=1,Nr=0,Xr=Nr;function Nu(n){Xr=n}function Hf(){return++kf}function ra(n){var e=n.f;if((e&Zt)!==0)return!0;if(e&on&&(n.f&=~jr),(e&fi)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(ra(s)&&_f(s),s.wv>n.wv)return!0}(e&qn)!==0&&sn===null&&Bt(n,Wt)}return!1}function Vf(n,e,t=!0){var i=n.reactions;if(i!==null&&!(Si!==null&&Si.has(n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&on)!==0?Vf(s,e,!1):e===s&&(t?Bt(s,Zt):(s.f&Wt)!==0&&Bt(s,fi),tu(s))}}function Gf(n){var v;var e=Mn,t=Pn,i=kn,r=ut,s=Si,a=Dt,o=ai,l=Xr,c=n.f;Mn=null,Pn=0,kn=null,ut=(c&(hi|Mr))===0?n:null,Si=null,Vs(n.ctx),ai=!1,Xr=++Nr,n.ac!==null&&(jo(()=>{n.ac.abort(qo)}),n.ac=null);try{n.f|=Io;var u=n.fn,f=u();n.f|=ta;var h=n.deps,m=We==null?void 0:We.is_fork;if(Mn!==null){var _;if(m||Aa(n,Pn),h!==null&&Pn>0)for(h.length=Pn+Mn.length,_=0;_<Mn.length;_++)h[Pn+_]=Mn[_];else n.deps=h=Mn;if(nu()&&(n.f&qn)!==0)for(_=Pn;_<h.length;_++)((v=h[_]).reactions??(v.reactions=[])).push(n)}else!m&&h!==null&&Pn<h.length&&(Aa(n,Pn),h.length=Pn);if(Oa()&&kn!==null&&!ai&&h!==null&&(n.f&(on|fi|Zt))===0)for(_=0;_<kn.length;_++)Vf(kn[_],n);if(r!==null&&r!==n){if(Nr++,r.deps!==null)for(let p=0;p<t;p+=1)r.deps[p].rv=Nr;if(e!==null)for(const p of e)p.rv=Nr;kn!==null&&(i===null?i=kn:i.push(...kn))}return(n.f&mr)!==0&&(n.f^=mr),f}catch(p){return ff(p)}finally{n.f^=Io,Mn=e,Pn=t,kn=i,ut=r,Si=s,Vs(a),ai=o,Xr=l}}function Jp(n,e){let t=e.reactions;if(t!==null){var i=Fd.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&on)!==0&&(Mn===null||!Lo.call(Mn,e))){var s=e;(s.f&qn)!==0&&(s.f^=qn,s.f&=~jr),s.v!==jt&&Zc(s),Ip(s),Aa(s,0)}}function Aa(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Jp(n,t[i])}function Kr(n){var e=n.f;if((e&In)===0){Bt(n,Wt);var t=ot,i=To;ot=n,To=!0;try{(e&(si|rf))!==0?$p(n):su(n),Nf(n);var r=Gf(n);n.teardown=typeof r=="function"?r:null,n.wv=kf;var s;ef&&gp&&(n.f&Zt)!==0&&n.deps}finally{To=i,ot=t}}}async function ec(){await Promise.resolve(),Op()}function x(n){var e=n.f,t=(e&on)!==0;if(ut!==null&&!ai){var i=ot!==null&&(ot.f&In)!==0;if(!i&&(Si===null||!Si.has(n))){var r=ut.deps;if((ut.f&Io)!==0)n.rv<Nr&&(n.rv=Nr,Mn===null&&r!==null&&r[Pn]===n?Pn++:Mn===null?Mn=[n]:Mn.push(n));else{ut.deps??(ut.deps=[]),Lo.call(ut.deps,n)||ut.deps.push(n);var s=n.reactions;s===null?n.reactions=[ut]:Lo.call(s,ut)||s.push(ut)}}}if(qi&&Gr.has(n))return Gr.get(n);if(t){var a=n;if(qi){var o=a.v;return((a.f&Wt)===0&&a.reactions!==null||Xf(a))&&(o=Qc(a)),Gr.set(a,o),o}var l=(a.f&qn)===0&&!ai&&ut!==null&&(To||(ut.f&qn)!==0),c=(a.f&ta)===0;ra(a)&&(l&&(a.f|=qn),_f(a)),l&&!c&&(vf(a),Wf(a))}if(sn!=null&&sn.has(n))return sn.get(n);if((n.f&mr)!==0)throw n.v;return n.v}function Wf(n){if(n.f|=qn,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),(e.f&on)!==0&&(e.f&qn)===0&&(vf(e),Wf(e))}function Xf(n){if(n.v===jt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Gr.has(e)||(e.f&on)!==0&&Xf(e))return!0;return!1}function It(n){var e=ai;try{return ai=!0,n()}finally{ai=e}}function Es(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Hi in n)tc(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Hi in t&&tc(t)}}}function tc(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{tc(n[i],e)}catch{}const t=Kc(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=tf(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const Qp=["touchstart","touchmove"];function em(n){return Qp.includes(n)}const Fr=Symbol("events"),qf=new Set,nc=new Set;function tm(n,e,t,i={}){function r(s){if(i.capture||ic.call(e,s),!s.cancelBubble)return jo(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?_r(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Et(n,e,t,i,r){var s={capture:i,passive:r},a=tm(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&iu(()=>{e.removeEventListener(n,a,s)})}function Fu(n,e,t){(e[Fr]??(e[Fr]={}))[n]=t}function nm(n){for(var e=0;e<n.length;e++)qf.add(n[e]);for(var t of nc)t(n)}let Ou=null;function ic(n){var v,p;var e=this,t=e.ownerDocument,i=n.type,r=((v=n.composedPath)==null?void 0:v.call(n))||[],s=r[0]||n.target;Ou=n;var a=0,o=Ou===n&&n[Fr];if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n[Fr]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==e){Od(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=ut,f=ot;jn(null),Yn(null);try{for(var h,m=[];s!==null&&s!==e;){try{var _=(p=s[Fr])==null?void 0:p[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(d){h?m.push(d):h=d}if(n.cancelBubble)break;a++,s=a<r.length?r[a]:null}if(h){for(let d of m)queueMicrotask(()=>{throw d});throw h}}finally{n[Fr]=e,delete n.currentTarget,jn(u),Yn(f)}}}var Jh;const nl=((Jh=globalThis==null?void 0:globalThis.window)==null?void 0:Jh.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function im(n){return(nl==null?void 0:nl.createHTML(n))??n}function jf(n){var e=Gp("template");return e.innerHTML=im(n.replaceAll("<!>","<!---->")),e.content}function qs(n,e){var t=ot;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function Le(n,e){var t=(e&lf)!==0,i=(e&fp)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=jf(s?n:"<!>"+n),t||(r=Bi(r)));var a=i||Tf?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Bi(a),l=a.lastChild;qs(o,l)}else qs(a,a);return a}}function rm(n,e,t="svg"){var i=!n.startsWith("<!>"),r=(e&lf)!==0,s=`<${t}>${i?n:"<!>"+n}</${t}>`,a;return()=>{if(!a){var o=jf(s),l=Bi(o);if(r)for(a=document.createDocumentFragment();Bi(l);)a.appendChild(Bi(l));else a=Bi(l)}var c=a.cloneNode(!0);if(r){var u=Bi(c),f=c.lastChild;qs(u,f)}else qs(c,c);return c}}function ft(n,e){return rm(n,e,"svg")}function br(n=""){{var e=Vi(n+"");return qs(e,e),e}}function sm(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Vi();return n.append(e,t),qs(e,t),n}function ue(n,e){n!==null&&n.before(e)}function Ye(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[ma]??(n[ma]=n.nodeValue))&&(n[ma]=t,n.nodeValue=`${t}`)}function am(n,e){return om(n,e)}const Xa=new Map;function om(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0,transformError:o}){Hp();var l=void 0,c=jp(()=>{var u=t??e.appendChild(Vi());Tp(u,{pending:()=>{}},m=>{$i({});var _=Dt;s&&(_.c=s),r&&(i.$$events=r),l=n(m,i)||{},Ki()},o);var f=new Set,h=m=>{for(var _=0;_<m.length;_++){var v=m[_];if(!f.has(v)){f.add(v);var p=em(v);for(const b of[e,document]){var d=Xa.get(b);d===void 0&&(d=new Map,Xa.set(b,d));var w=d.get(v);w===void 0?(b.addEventListener(v,ic,{passive:p}),d.set(v,1)):d.set(v,w+1)}}}};return h(Xo(qf)),nc.add(h),()=>{var p;for(var m of f)for(const d of[e,document]){var _=Xa.get(d),v=_.get(m);--v==0?(d.removeEventListener(m,ic),_.delete(m),_.size===0&&Xa.delete(d)):_.set(m,v)}nc.delete(h),u!==t&&((p=u.parentNode)==null||p.removeChild(u))}});return lm.set(l,c),l}let lm=new WeakMap;var ni,vi,Ln,Vr,Ia,Na,Go;class cm{constructor(e,t=!0){An(this,"anchor");it(this,ni,new Map);it(this,vi,new Map);it(this,Ln,new Map);it(this,Vr,new Set);it(this,Ia,!0);it(this,Na,e=>{if(V(this,ni).has(e)){var t=V(this,ni).get(e),i=V(this,vi).get(t);if(i)Bo(i),V(this,Vr).delete(t);else{var r=V(this,Ln).get(t);r&&(Bo(r.effect),V(this,vi).set(t,r.effect),V(this,Ln).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of V(this,ni)){if(V(this,ni).delete(s),s===e)break;const o=V(this,Ln).get(a);o&&(En(o.effect),V(this,Ln).delete(a))}for(const[s,a]of V(this,vi)){if(s===t||V(this,Vr).has(s))continue;const o=()=>{if(Array.from(V(this,ni).values()).includes(s)){var c=document.createDocumentFragment();au(a,c),c.append(Vi()),V(this,Ln).set(s,{effect:a,fragment:c})}else En(a);V(this,Vr).delete(s),V(this,vi).delete(s)};V(this,Ia)||!i?(V(this,Vr).add(s),Wr(a,o,!1)):o()}}});it(this,Go,e=>{V(this,ni).delete(e);const t=Array.from(V(this,ni).values());for(const[i,r]of V(this,Ln))t.includes(i)||(En(r.effect),V(this,Ln).delete(i))});this.anchor=e,et(this,Ia,t)}ensure(e,t){var i=We,r=Rf();if(t&&!V(this,vi).has(e)&&!V(this,Ln).has(e))if(r){var s=document.createDocumentFragment(),a=Vi();s.append(a),V(this,Ln).set(e,{effect:Wn(()=>t(a)),fragment:s})}else V(this,vi).set(e,Wn(()=>t(this.anchor)));if(V(this,ni).set(i,e),r){for(const[o,l]of V(this,vi))o===e?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of V(this,Ln))o===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(V(this,Na)),i.ondiscard(V(this,Go))}else V(this,Na).call(this,i)}}ni=new WeakMap,vi=new WeakMap,Ln=new WeakMap,Vr=new WeakMap,Ia=new WeakMap,Na=new WeakMap,Go=new WeakMap;function Pe(n,e,t=!1){var i=new cm(n),r=t?Hs:0;function s(a,o){i.ensure(a,o)}ru(()=>{var a=!1;e((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},r)}function js(n,e){return e}function um(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let f=e[o];Wr(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var h=n.outrogroups;rc(n,Xo(s.done)),h.delete(s),h.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&t!==null;if(l){var c=t,u=c.parentNode;Vp(u),u.append(c),n.items.clear()}rc(n,e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function rc(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<e.length;r++){var s=e[r];if(i!=null&&i.has(s)){s.f|=Mi;const a=document.createDocumentFragment();au(s,a)}else En(e[r],t)}}var Bu;function Gi(n,e,t,i,r,s=null){var a=n,o=new Map,l=(e&of)!==0;if(l){var c=n;a=c.appendChild(Vi())}var u=null,f=Jc(()=>{var b=t();return Wo(b)?b:b==null?[]:Xo(b)}),h,m=new Map,_=!0;function v(b){(w.effect.f&In)===0&&(w.pending.delete(b),w.fallback=u,hm(w,h,a,e,i),u!==null&&(h.length===0?(u.f&Mi)===0?Bo(u):(u.f^=Mi,xa(u,null,a)):Wr(u,()=>{u=null})))}function p(b){w.pending.delete(b)}var d=ru(()=>{h=x(f);for(var b=h.length,y=new Set,C=We,A=Rf(),R=0;R<b;R+=1){var L=h[R],E=i(L,R),M=_?null:o.get(E);M?(M.v&&Ws(M.v,L),M.i&&Ws(M.i,R),A&&C.unskip_effect(M.e)):(M=fm(o,_?a:Bu??(Bu=Vi()),L,E,R,r,e,t),_||(M.e.f|=Mi),o.set(E,M)),y.add(E)}if(b===0&&s&&!u&&(_?u=Wn(()=>s(a)):(u=Wn(()=>s(Bu??(Bu=Vi()))),u.f|=Mi)),b>y.size&&jd(),!_)if(m.set(C,y),A){for(const[D,W]of o)y.has(D)||C.skip_effect(W.e);C.oncommit(v),C.ondiscard(p)}else v(C);x(f)}),w={effect:d,items:o,pending:m,outrogroups:null,fallback:u};_=!1}function ca(n){for(;n!==null&&(n.f&hi)===0;)n=n.next;return n}function hm(n,e,t,i,r){var M,D,W,H,te,re,Z,se,j;var s=(i&sp)!==0,a=e.length,o=n.items,l=ca(n.effect.first),c,u=null,f,h=[],m=[],_,v,p,d;if(s)for(d=0;d<a;d+=1)_=e[d],v=r(_,d),p=o.get(v).e,(p.f&Mi)===0&&((D=(M=p.nodes)==null?void 0:M.a)==null||D.measure(),(f??(f=new Set)).add(p));for(d=0;d<a;d+=1){if(_=e[d],v=r(_,d),p=o.get(v).e,n.outrogroups!==null)for(const me of n.outrogroups)me.pending.delete(p),me.done.delete(p);if((p.f&pn)!==0&&(Bo(p),s&&((H=(W=p.nodes)==null?void 0:W.a)==null||H.unfix(),(f??(f=new Set)).delete(p))),(p.f&Mi)!==0)if(p.f^=Mi,p===l)xa(p,null,t);else{var w=u?u.next:l;p===n.effect.last&&(n.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),tr(n,u,p),tr(n,p,w),xa(p,w,t),u=p,h=[],m=[],l=ca(u.next);continue}if(p!==l){if(c!==void 0&&c.has(p)){if(h.length<m.length){var b=m[0],y;u=b.prev;var C=h[0],A=h[h.length-1];for(y=0;y<h.length;y+=1)xa(h[y],b,t);for(y=0;y<m.length;y+=1)c.delete(m[y]);tr(n,C.prev,A.next),tr(n,u,C),tr(n,A,b),l=b,u=A,d-=1,h=[],m=[]}else c.delete(p),xa(p,l,t),tr(n,p.prev,p.next),tr(n,p,u===null?n.effect.first:u.next),tr(n,u,p),u=p;continue}for(h=[],m=[];l!==null&&l!==p;)(c??(c=new Set)).add(l),m.push(l),l=ca(l.next);if(l===null)continue}(p.f&Mi)===0&&h.push(p),u=p,l=ca(p.next)}if(n.outrogroups!==null){for(const me of n.outrogroups)me.pending.size===0&&(rc(n,Xo(me.done)),(te=n.outrogroups)==null||te.delete(me));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var R=[];if(c!==void 0)for(p of c)(p.f&pn)===0&&R.push(p);for(;l!==null;)(l.f&pn)===0&&l!==n.fallback&&R.push(l),l=ca(l.next);var L=R.length;if(L>0){var E=(i&of)!==0&&a===0?t:null;if(s){for(d=0;d<L;d+=1)(Z=(re=R[d].nodes)==null?void 0:re.a)==null||Z.measure();for(d=0;d<L;d+=1)(j=(se=R[d].nodes)==null?void 0:se.a)==null||j.fix()}um(n,R,E)}}s&&_r(()=>{var me,ye;if(f!==void 0)for(p of f)(ye=(me=p.nodes)==null?void 0:me.a)==null||ye.apply()})}function fm(n,e,t,i,r,s,a,o){var l=(a&ip)!==0?(a&ap)===0?rn(t,!1,!1):$r(t):null,c=(a&rp)!==0?$r(r):null;return{v:l,i:c,e:Wn(()=>(s(e,l??t,c??r,o),()=>{n.delete(i)}))}}function xa(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&Mi)===0?e.nodes.start:t;i!==null;){var a=Ba(i);if(s.before(i),i===r)return;i=a}}function tr(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function Yf(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=Yf(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function dm(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=Yf(n))&&(i&&(i+=" "),i+=e);return i}function sc(n){return typeof n=="object"?dm(n):n??""}const zu=[...` 	
\r\f \v\uFEFF`];function pm(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||zu.includes(i[a-1]))&&(o===i.length||zu.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function mm(n,e){return n==null?null:String(n)}function Un(n,e,t,i,r,s){var a=n[ql];if(a!==t||a===void 0){var o=pm(t,i,s);o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o),n[ql]=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function ou(n,e,t,i){var r=n[jl];if(r!==e){var s=mm(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n[jl]=e}return i}function Yo(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Wo(e))return mp();for(var i of n.options)i.selected=e.includes(ba(i));return}for(i of n.options){var r=ba(i);if(kp(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function lu(n){var e=new MutationObserver(()=>{Yo(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),iu(()=>{e.disconnect()})}function ac(n,e,t=e){var i=new WeakSet,r=!0;Cf(n,"change",s=>{var a=s?"[selected]":":checked",o;if(n.multiple)o=[].map.call(n.querySelectorAll(a),ba);else{var l=n.querySelector(a)??n.querySelector("option:not([disabled])");o=l&&ba(l)}t(o),n.__value=o,We!==null&&i.add(We)}),Lf(()=>{var s=e();if(n===document.activeElement){var a=We;if(i.has(a))return}if(Yo(n,s,r),r&&s===void 0){var o=n.querySelector(":checked");o!==null&&(s=ba(o),t(s))}n.__value=s,r=!1}),lu(n)}function ba(n){return"__value"in n?n.__value:n.value}const _m=Symbol("is custom element"),vm=Symbol("is html"),gm=Xd?"progress":"PROGRESS";function bs(n,e){var t=cu(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==gm)||(n.value=e??"")}function xm(n,e){var t=cu(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function nn(n,e,t,i){var r=cu(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[Wd]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Mm(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function cu(n){return n[Mo]??(n[Mo]={[_m]:n.nodeName.includes("-"),[vm]:n.namespaceURI===dp})}var ku=new Map;function Mm(n){var e=n.getAttribute("is")||n.nodeName,t=ku.get(e);if(t)return t;ku.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=tf(r);for(var a in i)i[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.push(a);r=Kc(r)}return t}function il(n,e,t=e){var i=new WeakSet;Cf(n,"input",async r=>{var s=r?n.defaultValue:n.value;if(s=rl(n)?sl(s):s,t(s),We!==null&&i.add(We),await ec(),s!==(s=e())){var a=n.selectionStart,o=n.selectionEnd,l=n.value.length;if(n.value=s??"",o!==null){var c=n.value.length;a===o&&o===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=a,n.selectionEnd=Math.min(o,c))}}}),It(e)==null&&n.value&&(t(rl(n)?sl(n.value):n.value),We!==null&&i.add(We)),za(()=>{var r=e();if(n===document.activeElement){var s=We;if(i.has(s))return}rl(n)&&r===sl(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function rl(n){var e=n.type;return e==="number"||e==="range"}function sl(n){return n===""?null:+n}function al(n,e){return n===e||(n==null?void 0:n[Hi])===e}function $f(n={},e,t,i){var r=Dt.r,s=ot;return Lf(()=>{var a,o;return za(()=>{a=o,o=[],It(()=>{al(t(...o),n)||(e(n,...o),a&&al(t(...a),n)&&e(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&Xl;)l=l.parent;const c=()=>{o&&al(t(...o),n)&&e(null,...o)},u=l.teardown;l.teardown=()=>{c(),u==null||u()}}}),n}function Sm(n){return function(...e){var t=e[0];return t.preventDefault(),n==null?void 0:n.apply(this,e)}}function uu(n=!1){const e=Dt,t=e.l.u;if(!t)return;let i=()=>Es(e.s);if(n){let r=0,s={};const a=Gs(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});i=()=>x(a)}t.b.length&&qp(()=>{Hu(e,i),Gl(t.b)}),Xs(()=>{const r=It(()=>t.m.map(Hd));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Xs(()=>{Hu(e,i),Gl(t.a)})}function Hu(n,e){if(n.l.s)for(const t of n.l.s)x(t);e()}function wt(n,e,t,i){var y;var r=!ia||(t&lp)!==0,s=(t&up)!==0,a=(t&hp)!==0,o=i,l=!0,c=void 0,u=()=>a&&r?(c??(c=Gs(i)),x(c)):(l&&(l=!1,o=a?It(i):i),o);let f;if(s){var h=Hi in n||Gd in n;f=((y=As(n,e))==null?void 0:y.set)??(h&&e in n?C=>n[e]=C:void 0)}var m,_=!1;s?[m,_]=yp(()=>n[e]):m=n[e],m===void 0&&i!==void 0&&(m=u(),f&&(r&&Jd(),f(m)));var v;if(r?v=()=>{var C=n[e];return C===void 0?u():(l=!0,C)}:v=()=>{var C=n[e];return C!==void 0&&(o=void 0),C===void 0?o:C},r&&(t&cp)===0)return v;if(f){var p=n.$$legacy;return(function(C,A){return arguments.length>0?((!r||!A||p||_)&&f(A?v():C),C):v()})}var d=!1,w=((t&op)!==0?Gs:Jc)(()=>(d=!1,v()));s&&x(w);var b=ot;return(function(C,A){if(arguments.length>0){const R=A?x(w):r&&s?Xt(C):C;return F(w,R),d=!0,o!==void 0&&(o=R),C}return qi&&d||(b.f&In)!==0?w.v:x(w)})}function sa(n){Dt===null&&af(),ia&&Dt.l!==null?Em(Dt).m.push(n):Xs(()=>{const e=It(n);if(typeof e=="function")return e})}function ym(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}function ka(){const n=Dt;return n===null&&af(),(e,t,i)=>{var s;const r=(s=n.s.$$events)==null?void 0:s[e];if(r){const a=Wo(r)?r.slice():[r],o=ym(e,t,i);for(const l of a)l.call(n.x,o);return!o.defaultPrevented}return!0}}function Em(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const bm="5";var Qh;typeof window<"u"&&((Qh=window.__svelte??(window.__svelte={})).v??(Qh.v=new Set)).add(bm);xp();var Tm=Le('<div class="loading svelte-1vgb4qo"><div class="spinner svelte-1vgb4qo"></div> <span>Projekte laden...</span></div>'),wm=Le('<div class="error svelte-1vgb4qo"><span> </span></div>'),Am=Le('<div class="empty svelte-1vgb4qo"><p>Keine Projekte vorhanden. Erstellen Sie ein neues Projekt.</p></div>'),Rm=ft('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>'),Cm=Le('<div class="project-description svelte-1vgb4qo"> </div>'),Pm=Le('<li><button type="button"><div class="project-header svelte-1vgb4qo"><div class="project-name svelte-1vgb4qo"> </div> <!></div> <!> <div class="project-meta svelte-1vgb4qo"><span class="bbox svelte-1vgb4qo"> </span> <span class="date"> </span></div></button></li>'),Dm=Le('<ul class="projects svelte-1vgb4qo"></ul>'),Lm=Le('<div class="project-list svelte-1vgb4qo"><!></div>');function Um(n,e){$i(e,!1);let t=wt(e,"apiUrl",24,()=>"http://localhost:8000"),i=wt(e,"selectedId",8,null),r=wt(e,"refreshKey",8,0);const s=ka();let a=rn([]),o=rn(!0),l=rn(null),c=rn(r());async function u(){F(o,!0),F(l,null);try{const b=await fetch(`${t()}/projects`);if(!b.ok)throw new Error(`HTTP ${b.status}`);F(a,await b.json())}catch(b){F(l,b.message)}finally{F(o,!1)}}sa(u);function f(b){s("select",b)}function h(b){return b?new Date(b).toLocaleDateString():"-"}Uf(()=>(Es(r()),x(c)),()=>{r()!==x(c)&&(F(c,r()),u())}),If(),uu();var m=Lm(),_=z(m);{var v=b=>{var y=Tm();ue(b,y)},p=b=>{var y=wm(),C=z(y),A=z(C);tt(()=>Ye(A,`Fehler: ${x(l)??""}`)),ue(b,y)},d=b=>{var y=Am();ue(b,y)},w=b=>{var y=Dm();Gi(y,5,()=>x(a),js,(C,A)=>{var R=Pm(),L=z(R),E=z(L),M=z(E),D=z(M),W=G(M,2);{var H=Ce=>{var X=Rm();ue(Ce,X)};Pe(W,Ce=>{x(A),Es(i()),It(()=>x(A).id===i())&&Ce(H)})}var te=G(E,2);{var re=Ce=>{var X=Cm(),_e=z(X);tt(()=>Ye(_e,(x(A),It(()=>x(A).description)))),ue(Ce,X)};Pe(te,Ce=>{x(A),It(()=>x(A).description)&&Ce(re)})}var Z=G(te,2),se=z(Z),j=z(se),me=G(se,2),ye=z(me);tt((Ce,X)=>{Un(L,1,`project-item ${x(A),Es(i()),It(()=>x(A).id===i()?"selected":"")??""}`,"svelte-1vgb4qo"),nn(L,"aria-pressed",(x(A),Es(i()),It(()=>x(A).id===i()))),Ye(D,(x(A),It(()=>x(A).name))),Ye(j,Ce),Ye(ye,X)},[()=>(x(A),It(()=>x(A).bbox.join(", "))),()=>(x(A),It(()=>h(x(A).created_at)))]),Et("click",L,()=>f(x(A))),ue(C,R)}),ue(b,y)};Pe(_,b=>{x(o)?b(v):x(l)?b(p,1):(x(a),It(()=>x(a).length===0)?b(d,2):b(w,-1))})}ue(n,m),Ki()}var Im=ft('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',1),Nm=ft('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>'),Fm=ft('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><path d="M21 10h-9"></path>',1),Om=ft('<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',1),Bm=ft('<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>'),zm=ft('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',1),km=ft('<polygon points="5 3 19 12 5 21 5 3"></polygon>'),Hm=ft('<path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke-dasharray="2 2"></path>'),Vm=ft('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',1),Gm=ft('<polyline points="20 6 9 17 4 12"></polyline>'),Wm=ft('<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',1),Xm=ft('<polyline points="9 18 15 12 9 6"></polyline>'),qm=ft('<polyline points="6 9 12 15 18 9"></polyline>'),jm=ft('<polyline points="18 15 12 9 6 15"></polyline>'),Ym=ft('<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',1),$m=ft('<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',1),Km=ft('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',1),Zm=ft('<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',1),Jm=ft('<path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke-dasharray="3 3"></path><circle cx="12" cy="12" r="3"></circle>',1),Qm=ft('<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',1),e_=ft('<path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',1),t_=ft('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',1),n_=ft('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'),i_=ft('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',1),r_=ft('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline>',1),s_=ft('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',1),a_=ft('<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',1),o_=ft('<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',1),l_=ft('<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 11 15 16 9"></polyline>',1),c_=ft('<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>',1),u_=ft('<line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"></line><polyline points="8 2 10 4 8 6"></polyline><polyline points="16 2 14 4 16 6"></polyline><polyline points="8 22 10 20 8 18"></polyline><polyline points="16 22 14 20 16 18"></polyline><polyline points="2 8 4 10 6 8"></polyline><polyline points="2 16 4 14 6 16"></polyline><polyline points="22 8 20 10 18 8"></polyline><polyline points="22 16 20 14 18 16"></polyline>',1),h_=ft('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'),f_=ft('<path d="M8 3l4 8 2-4 4 7H4z"></path><path d="M3 20h18"></path>',1),d_=ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></svg>');function Ot(n,e){let t=wt(e,"name",8),i=wt(e,"size",8,24),r=wt(e,"className",8,"");var s=d_(),a=z(s);{var o=N=>{var ae=Im();ue(N,ae)};Pe(a,N=>{t()==="home"&&N(o)})}var l=G(a);{var c=N=>{var ae=Nm();ue(N,ae)};Pe(l,N=>{t()==="folder"&&N(c)})}var u=G(l);{var f=N=>{var ae=Fm();ue(N,ae)};Pe(u,N=>{t()==="folder-open"&&N(f)})}var h=G(u);{var m=N=>{var ae=Om();ue(N,ae)};Pe(h,N=>{t()==="settings"&&N(m)})}var _=G(h);{var v=N=>{var ae=Bm();ue(N,ae)};Pe(_,N=>{t()==="cloud"&&N(v)})}var p=G(_);{var d=N=>{var ae=zm();ue(N,ae)};Pe(p,N=>{t()==="cloud-upload"&&N(d)})}var w=G(p);{var b=N=>{var ae=km();ue(N,ae)};Pe(w,N=>{t()==="play"&&N(b)})}var y=G(w);{var C=N=>{var ae=Hm();ue(N,ae)};Pe(y,N=>{t()==="snow"&&N(C)})}var A=G(y);{var R=N=>{var ae=Vm();ue(N,ae)};Pe(A,N=>{t()==="eye"&&N(R)})}var L=G(A);{var E=N=>{var ae=Gm();ue(N,ae)};Pe(L,N=>{t()==="check"&&N(E)})}var M=G(L);{var D=N=>{var ae=Wm();ue(N,ae)};Pe(M,N=>{t()==="alert"&&N(D)})}var W=G(M);{var H=N=>{var ae=Xm();ue(N,ae)};Pe(W,N=>{t()==="chevron-right"&&N(H)})}var te=G(W);{var re=N=>{var ae=qm();ue(N,ae)};Pe(te,N=>{t()==="chevron-down"&&N(re)})}var Z=G(te);{var se=N=>{var ae=jm();ue(N,ae)};Pe(Z,N=>{t()==="chevron-up"&&N(se)})}var j=G(Z);{var me=N=>{var ae=Ym();ue(N,ae)};Pe(j,N=>{t()==="menu"&&N(me)})}var ye=G(j);{var Ce=N=>{var ae=$m();ue(N,ae)};Pe(ye,N=>{t()==="x"&&N(Ce)})}var X=G(ye);{var _e=N=>{var ae=Km();ue(N,ae)};Pe(X,N=>{t()==="download"&&N(_e)})}var $=G(X);{var he=N=>{var ae=Zm();ue(N,ae)};Pe($,N=>{t()==="sliders"&&N(he)})}var Te=G($);{var Me=N=>{var ae=Jm();ue(N,ae)};Pe(Te,N=>{t()==="gpx"&&N(Me)})}var Ue=G(Te);{var He=N=>{var ae=Qm();ue(N,ae)};Pe(Ue,N=>{t()==="layers"&&N(He)})}var Ge=G(Ue);{var lt=N=>{var ae=e_();ue(N,ae)};Pe(Ge,N=>{t()==="refresh"&&N(lt)})}var $e=G(Ge);{var ht=N=>{var ae=t_();ue(N,ae)};Pe($e,N=>{t()==="calendar"&&N(ht)})}var P=G($e);{var Lt=N=>{var ae=n_();ue(N,ae)};Pe(P,N=>{t()==="moon"&&N(Lt)})}var Ke=G(P);{var Je=N=>{var ae=i_();ue(N,ae)};Pe(Ke,N=>{t()==="sun"&&N(Je)})}var Fe=G(Ke);{var ct=N=>{var ae=r_();ue(N,ae)};Pe(Fe,N=>{t()==="file"&&N(ct)})}var De=G(Fe);{var T=N=>{var ae=s_();ue(N,ae)};Pe(De,N=>{t()==="file-text"&&N(T)})}var g=G(De);{var B=N=>{var ae=a_();ue(N,ae)};Pe(g,N=>{t()==="box"&&N(B)})}var ne=G(g);{var ce=N=>{var ae=o_();ue(N,ae)};Pe(ne,N=>{t()==="info"&&N(ce)})}var ie=G(ne);{var Ne=N=>{var ae=l_();ue(N,ae)};Pe(ie,N=>{t()==="check-circle"&&N(Ne)})}var Se=G(ie);{var fe=N=>{var ae=c_();ue(N,ae)};Pe(Se,N=>{t()==="play-circle"&&N(fe)})}var Q=G(Se);{var K=N=>{var ae=u_();ue(N,ae)};Pe(Q,N=>{t()==="snowflake"&&N(K)})}var pe=G(Q);{var be=N=>{var ae=h_();ue(N,ae)};Pe(pe,N=>{t()==="shield"&&N(be)})}var xe=G(pe);{var ve=N=>{var ae=f_();ue(N,ae)};Pe(xe,N=>{t()==="mountain"&&N(ve)})}tt(()=>{nn(s,"width",i()),nn(s,"height",i()),Un(s,0,sc(r()))}),ue(n,s)}var p_=Le('<span class="file-name svelte-7dwmub"> </span>'),m_=Le('<p class="success svelte-7dwmub">GPX erfolgreich hochgeladen.</p>'),__=Le('<p class="error svelte-7dwmub"> </p>'),v_=Le('<p class="empty svelte-7dwmub">Tracks werden geladen…</p>'),g_=Le('<p class="empty svelte-7dwmub">Noch keine GPX-Tracks für dieses Projekt.</p>'),x_=Le('<li class="svelte-7dwmub"><div class="track-info svelte-7dwmub"><strong class="svelte-7dwmub"> </strong> <span class="track-date svelte-7dwmub"> </span></div> <button type="button" class="btn-delete svelte-7dwmub" title="Track löschen"><!></button></li>'),M_=Le('<ul class="svelte-7dwmub"></ul>'),S_=Le('<div class="gpx-panel svelte-7dwmub"><div class="panel-header svelte-7dwmub"><!> <div><h3 class="svelte-7dwmub">GPX-Tracks</h3> <p class="svelte-7dwmub">Tracks werden beim nächsten 3D-Viewer-Export auf dem Gelände angezeigt.</p></div></div> <div class="upload-row svelte-7dwmub"><input type="file" accept=".gpx" id="gpx-file-input"/> <!> <button class="btn-upload svelte-7dwmub"> </button></div> <!> <!> <div class="track-list svelte-7dwmub"><div class="list-header svelte-7dwmub"><span>Hochgeladene Tracks</span> <span class="count svelte-7dwmub"> </span></div> <!></div></div>');function y_(n,e){$i(e,!1);let t=wt(e,"projectId",8,0),i=wt(e,"apiUrl",24,()=>"http://localhost:8000"),r=rn(null),s=rn([]),a=rn(!1),o=rn(!1),l=rn(null),c=rn(null),u=rn(!1);const f=ka();async function h(){if(t()){F(o,!0),F(c,null);try{const X=await fetch(`${i()}/gpx?project_id=${t()}`);if(!X.ok)throw new Error(`HTTP ${X.status}`);F(s,await X.json())}catch(X){F(c,X.message)}finally{F(o,!1)}}}function m(X){const _e=X.target;_e.files&&_e.files.length>0&&(F(r,_e.files[0]),F(c,null),F(u,!1))}async function _(){if(x(r)){F(a,!0),F(c,null),F(u,!1);try{const X=new FormData;X.append("file",x(r)),X.append("project_id",String(t())),X.append("name",x(r).name);const _e=await fetch(`${i()}/gpx`,{method:"POST",body:X});if(!_e.ok)throw new Error(`HTTP ${_e.status}`);F(u,!0),F(r,null),f("uploaded",{status:"success"}),await h()}catch(X){F(c,X.message)}finally{F(a,!1)}}}async function v(X){if(confirm(`GPX-Track „${X.name}" wirklich löschen?`)){F(l,X.id),F(c,null);try{const _e=await fetch(`${i()}/gpx/${X.id}`,{method:"DELETE"});if(!_e.ok)throw new Error(`HTTP ${_e.status}`);F(s,x(s).filter($=>$.id!==X.id)),f("deleted",{id:X.id})}catch(_e){F(c,_e.message)}finally{F(l,null)}}}function p(X){try{return new Date(X).toLocaleString("de-CH")}catch{return X}}Uf(()=>Es(t()),()=>{t()&&h()}),If(),uu();var d=S_(),w=z(d),b=z(w);Ot(b,{name:"gpx",size:18});var y=G(w,2),C=z(y),A=G(C,2);{var R=X=>{var _e=p_(),$=z(_e);tt(he=>Ye($,`${x(r),It(()=>x(r).name)??""} (${he??""} KB)`),[()=>(x(r),It(()=>(x(r).size/1024).toFixed(1)))]),ue(X,_e)};Pe(A,X=>{x(r)&&X(R)})}var L=G(A,2),E=z(L),M=G(y,2);{var D=X=>{var _e=m_();ue(X,_e)};Pe(M,X=>{x(u)&&X(D)})}var W=G(M,2);{var H=X=>{var _e=__(),$=z(_e);tt(()=>Ye($,`Fehler: ${x(c)??""}`)),ue(X,_e)};Pe(W,X=>{x(c)&&X(H)})}var te=G(W,2),re=z(te),Z=G(z(re),2),se=z(Z),j=G(re,2);{var me=X=>{var _e=v_();ue(X,_e)},ye=X=>{var _e=g_();ue(X,_e)},Ce=X=>{var _e=M_();Gi(_e,5,()=>x(s),$=>$.id,($,he)=>{var Te=x_(),Me=z(Te),Ue=z(Me),He=z(Ue),Ge=G(Ue,2),lt=z(Ge),$e=G(Me,2),ht=z($e);Ot(ht,{name:"x",size:16}),tt(P=>{Ye(He,(x(he),It(()=>x(he).name))),Ye(lt,P),$e.disabled=(x(l),x(he),It(()=>x(l)===x(he).id))},[()=>(x(he),It(()=>p(x(he).created_at)))]),Et("click",$e,()=>v(x(he))),ue($,Te)}),ue(X,_e)};Pe(j,X=>{x(o)?X(me):(x(s),It(()=>x(s).length===0)?X(ye,1):X(Ce,-1))})}tt(()=>{C.disabled=x(a),L.disabled=!x(r)||x(a),Ye(E,x(a)?"Wird hochgeladen…":"Hochladen"),Ye(se,(x(s),It(()=>x(s).length)))}),Et("change",C,m),Et("click",L,_),ue(n,d),Ki()}var E_=Le('<div class="tp-timeline-row svelte-16b3i99"><span></span> <div class="tp-timeline-content svelte-16b3i99"><strong class="svelte-16b3i99"> </strong> <small class="svelte-16b3i99"><!></small></div></div>'),b_=Le('<div class="tp-timeline svelte-16b3i99"></div>'),T_=Le('<p class="tp-log-empty svelte-16b3i99">Noch keine Log-Meldungen...</p>'),w_=Le('<div class="tp-log-row svelte-16b3i99"><span class="tp-log-time svelte-16b3i99"> </span> <span><!></span> <code class="svelte-16b3i99"> </code></div>'),A_=Le('<div class="tp-log-list svelte-16b3i99"></div>'),R_=Le('<p class="success svelte-16b3i99">✓ Task erfolgreich abgeschlossen</p>'),C_=Le('<p class="error svelte-16b3i99"> </p>'),P_=Le('<div class="task-progress svelte-16b3i99"><div class="tp-header svelte-16b3i99"><div><h4 class="svelte-16b3i99">Task-Fortschritt</h4> <p class="tp-subtitle svelte-16b3i99"> </p></div> <div class="tp-header-actions svelte-16b3i99"><span> </span> <button type="button" class="tp-close svelte-16b3i99">Schließen</button></div></div> <div class="tp-progress-row svelte-16b3i99"><div class="tp-progress-bar svelte-16b3i99"><div class="tp-progress-fill svelte-16b3i99"></div></div> <span class="tp-percent svelte-16b3i99"> </span></div> <div class="tp-meta-grid svelte-16b3i99"><div class="svelte-16b3i99"><span class="svelte-16b3i99">Schritt</span><strong class="svelte-16b3i99"> </strong></div> <div class="svelte-16b3i99"><span class="svelte-16b3i99">Laufzeit</span><strong class="svelte-16b3i99"> </strong></div></div> <!> <div class="tp-log svelte-16b3i99"><button type="button" class="tp-log-toggle svelte-16b3i99"><strong class="svelte-16b3i99">Live Log</strong> <span class="svelte-16b3i99"> </span> <span>›</span></button> <!></div> <!></div>');function D_(n,e){$i(e,!0);let t=wt(e,"taskId",3,""),i=wt(e,"apiUrl",19,()=>"http://localhost:8000");const r=ka();let s=ke(""),a=ke(0),o=ke(""),l=ke(null),c=ke(!1),u=ke(null),f=ke(""),h=ke(null),m=ke(Xt(Date.now())),_=ke(Xt([])),v=ke(Xt([])),p=ke(!1);const d=Gt(()=>Math.max(0,Math.min(100,Math.round(x(a)*100)))),w=Gt(()=>x(h)?Math.max(0,Math.floor((x(m)-x(h))/1e3)):0),b=Gt(()=>x(w)?E(x(w)):"läuft..."),y=Gt(()=>{var Q;return Number(((Q=x(u))==null?void 0:Q.current)??0)}),C=Gt(()=>{var Q;return Number(((Q=x(u))==null?void 0:Q.total)??0)}),A=Gt(()=>x(y)>0&&x(C)>0?`${x(y)}/${x(C)}`:"-"),R=Gt(()=>M(x(s))),L=Gt(()=>{var Q;return typeof((Q=x(u))==null?void 0:Q.step)=="string"?String(x(u).step):""});function E(Q){const K=Math.floor(Q/60),pe=Q%60;return K>0?`${K}m ${pe}s`:`${pe}s`}function M(Q){return Q==="SUCCESS"?"ok":Q==="FAILURE"?"err":Q==="PROGRESS"||Q==="STARTED"?"run":"idle"}function D(Q){return Q&&typeof Q.progress=="object"?Q.progress:Q&&typeof Q=="object"?Q:null}function W(Q){if(!Q)return;const K=Q.steps;if(Array.isArray(K)){const pe=K.filter(be=>typeof be=="string"&&be.length>0);pe.length>0&&F(_,pe,!0)}}function H(Q,K){if(x(s)==="SUCCESS")return"done";if(x(s)==="FAILURE"){const be=x(y)>0?x(y)-1:x(_).findIndex(xe=>xe===x(L));return be<0?"pending":Q<be?"done":Q===be?"active":"pending"}if(x(L)==="Initialisierung")return Q===0?"active":"pending";const pe=x(y)>0?x(y)-1:x(_).findIndex(be=>be===x(L));return pe>=0?Q<pe?"done":Q===pe?"active":"pending":K===x(L)?"active":"pending"}function te(Q){return Q.startsWith("→ ")?"substep":Q.startsWith("i ")?"info":Q.startsWith("! ")?"warn":"step"}function re(Q){const K=Q.trim();if(!K)return;const pe=x(v)[x(v).length-1];pe&&pe.text===K||F(v,[...x(v),{time:new Date().toLocaleTimeString(),text:K,kind:te(K)}].slice(-20),!0)}sa(()=>{const Q=window.setInterval(()=>{F(m,Date.now(),!0)},1e3);async function K(){try{const be=await fetch(`${i()}/tasks/${t()}`);if(!be.ok)throw new Error(`HTTP ${be.status}`);const xe=await be.json();if(F(s,xe.status,!0),F(u,D(xe),!0),W(x(u)),typeof xe.progress=="number")F(a,xe.progress,!0);else if(xe.progress&&typeof xe.progress=="object"){const ve=xe.progress.message||xe.progress.step;if(typeof ve=="string"&&ve.length>0&&(F(o,ve,!0),re(ve)),typeof xe.progress.progress=="number"&&F(a,xe.progress.progress,!0),typeof xe.progress.started_at=="string"){const N=Date.parse(xe.progress.started_at);Number.isNaN(N)||F(h,N,!0)}typeof xe.progress.updated_at=="string"?F(f,new Date(xe.progress.updated_at).toLocaleTimeString(),!0):F(f,new Date().toLocaleTimeString(),!0)}else F(f,new Date().toLocaleTimeString(),!0);xe.message&&(F(l,xe.status==="FAILURE"?xe.message:null,!0),F(o,xe.message,!0),typeof xe.message=="string"&&re(xe.message)),!x(c)&&(x(s)==="SUCCESS"||x(s)==="FAILURE")&&(F(c,!0),r("complete",xe),pe&&clearInterval(pe))}catch(be){F(l,be.message,!0)}}let pe;return K(),pe=window.setInterval(K,1e3),()=>{clearInterval(Q),clearInterval(pe)}});var Z=P_(),se=z(Z),j=z(se),me=G(z(j),2),ye=z(me),Ce=G(j,2),X=z(Ce),_e=z(X),$=G(X,2),he=G(se,2),Te=z(he),Me=z(Te),Ue=G(Te,2),He=z(Ue),Ge=G(he,2),lt=z(Ge),$e=G(z(lt)),ht=z($e),P=G(lt,2),Lt=G(z(P)),Ke=z(Lt),Je=G(Ge,2);{var Fe=Q=>{var K=b_();Gi(K,21,()=>x(_),js,(pe,be,xe)=>{const ve=Gt(()=>H(xe,x(be)));var N=E_(),ae=z(N),Qe=G(ae,2),U=z(Qe),ge=z(U),J=G(U,2),oe=z(J);{var Re=ee=>{var Be=br("erledigt");ue(ee,Be)},Ae=ee=>{var Be=br("läuft");ue(ee,Be)},le=ee=>{var Be=br("ausstehend");ue(ee,Be)};Pe(oe,ee=>{x(ve)==="done"?ee(Re):x(ve)==="active"?ee(Ae,1):ee(le,-1)})}tt(()=>{Un(ae,1,`tp-dot ${x(ve)??""}`,"svelte-16b3i99"),Ye(ge,x(be))}),ue(pe,N)}),ue(Q,K)};Pe(Je,Q=>{x(_).length>0&&Q(Fe)})}var ct=G(Je,2),De=z(ct),T=G(z(De),2),g=z(T),B=G(T,2);let ne;var ce=G(De,2);{var ie=Q=>{var K=sm(),pe=Oo(K);{var be=ve=>{var N=T_();ue(ve,N)},xe=ve=>{var N=A_();Gi(N,21,()=>x(v),js,(ae,Qe)=>{var U=w_(),ge=z(U),J=z(ge),oe=G(ge,2),Re=z(oe);{var Ae=dt=>{var kt=br("WARN");ue(dt,kt)},le=dt=>{var kt=br("INFO");ue(dt,kt)},ee=dt=>{var kt=br("STEP");ue(dt,kt)},Be=dt=>{var kt=br("TASK");ue(dt,kt)};Pe(Re,dt=>{x(Qe).kind==="warn"?dt(Ae):x(Qe).kind==="info"?dt(le,1):x(Qe).kind==="substep"?dt(ee,2):dt(Be,-1)})}var ze=G(oe,2),bt=z(ze);tt(()=>{Ye(J,x(Qe).time),Un(oe,1,`tp-log-kind ${x(Qe).kind??""}`,"svelte-16b3i99"),Ye(bt,x(Qe).text)}),ue(ae,U)}),ue(ve,N)};Pe(pe,ve=>{x(v).length===0?ve(be):ve(xe,-1)})}ue(Q,K)};Pe(ce,Q=>{x(p)&&Q(ie)})}var Ne=G(ct,2);{var Se=Q=>{var K=R_();ue(Q,K)},fe=Q=>{var K=C_(),pe=z(K);tt(()=>Ye(pe,`✗ Task fehlgeschlagen: ${(x(l)||x(o))??""}`)),ue(Q,K)};Pe(Ne,Q=>{x(s)==="SUCCESS"?Q(Se):x(s)==="FAILURE"&&Q(fe,1)})}tt(()=>{Ye(ye,x(o)||"Warten auf Status-Updates..."),Un(X,1,`tp-status ${x(R)??""}`,"svelte-16b3i99"),Ye(_e,x(s)||"WARTET"),ou(Me,`width: ${x(d)??""}%`),Ye(He,`${x(d)??""}%`),Ye(ht,x(A)),Ye(Ke,x(b)),nn(De,"aria-expanded",x(p)),Ye(g,`${x(v).length??""} Einträge`),ne=Un(B,1,"tp-log-chevron svelte-16b3i99",null,ne,{open:x(p)})}),Fu("click",$,()=>r("dismiss")),Fu("click",De,()=>F(p,!x(p))),ue(n,Z),Ki()}nm(["click"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="172",Cs={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},L_=0,Vu=1,U_=2,Kf=1,I_=2,Ui=3,Sr=0,bn=1,gi=2,vr=0,Ps=1,Gu=2,Wu=3,Xu=4,N_=5,Lr=100,F_=101,O_=102,B_=103,z_=104,k_=200,H_=201,V_=202,G_=203,oc=204,lc=205,W_=206,X_=207,q_=208,j_=209,Y_=210,$_=211,K_=212,Z_=213,J_=214,cc=0,uc=1,hc=2,Ys=3,fc=4,dc=5,pc=6,mc=7,Zf=0,Q_=1,ev=2,gr=0,tv=1,nv=2,iv=3,Jf=4,rv=5,sv=6,av=7,Qf=300,$s=301,Ks=302,_c=303,vc=304,$o=306,gc=1e3,Or=1001,xc=1002,ui=1003,ov=1004,qa=1005,oi=1006,ol=1007,dr=1008,ji=1009,ed=1010,td=1011,Ra=1012,fu=1013,Zr=1014,zi=1015,Ha=1016,du=1017,pu=1018,Zs=1020,nd=35902,id=1021,rd=1022,li=1023,sd=1024,ad=1025,Ds=1026,Js=1027,od=1028,mu=1029,ld=1030,_u=1031,vu=1033,wo=33776,Ao=33777,Ro=33778,Co=33779,Mc=35840,Sc=35841,yc=35842,Ec=35843,bc=36196,Tc=37492,wc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Dc=37812,Lc=37813,Uc=37814,Ic=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,zc=37820,kc=37821,Po=36492,Hc=36494,Vc=36495,cd=36283,Gc=36284,Wc=36285,Xc=36286,lv=3200,cv=3201,ud=0,uv=1,cr="",Sn="srgb",Qs="srgb-linear",zo="linear",Rt="srgb",as=7680,qu=519,hv=512,fv=513,dv=514,hd=515,pv=516,mv=517,_v=518,vv=519,qc=35044,ju="300 es",ki=2e3,ko=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yu=1234567;const Ta=Math.PI/180,Ca=180/Math.PI;function Wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function gu(n,e){return(n%e+e)%e}function gv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xv(n,e,t){return n!==e?(t-n)/(e-n):0}function wa(n,e,t){return(1-t)*n+t*e}function Mv(n,e,t,i){return wa(n,e,1-Math.exp(-t*i))}function Sv(n,e=1){return e-Math.abs(gu(n,e*2)-e)}function yv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ev(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tv(n,e){return n+Math.random()*(e-n)}function wv(n){return n*(.5-Math.random())}function Av(n){n!==void 0&&(Yu=n);let e=Yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rv(n){return n*Ta}function Cv(n){return n*Ca}function Pv(n){return(n&n-1)===0&&n!==0}function Dv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uv(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fd={DEG2RAD:Ta,RAD2DEG:Ca,generateUUID:Wi,clamp:at,euclideanModulo:gu,mapLinear:gv,inverseLerp:xv,lerp:wa,damp:Mv,pingpong:Sv,smoothstep:yv,smootherstep:Ev,randInt:bv,randFloat:Tv,randFloatSpread:wv,seededRandom:Av,degToRad:Rv,radToDeg:Cv,isPowerOfTwo:Pv,ceilPowerOfTwo:Dv,floorPowerOfTwo:Lv,setQuaternionFromProperEuler:Uv,normalize:Tt,denormalize:ii};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,r,s,a,o,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],v=r[0],p=r[3],d=r[6],w=r[1],b=r[4],y=r[7],C=r[2],A=r[5],R=r[8];return s[0]=a*v+o*w+l*C,s[3]=a*p+o*b+l*A,s[6]=a*d+o*y+l*R,s[1]=c*v+u*w+f*C,s[4]=c*p+u*b+f*A,s[7]=c*d+u*y+f*R,s[2]=h*v+m*w+_*C,s[5]=h*p+m*b+_*A,s[8]=h*d+m*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new rt;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Iv(){const n=Pa("canvas");return n.style.display="block",n}const $u={};function Ss(n){n in $u||($u[n]=!0,console.warn(n))}function Nv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Fv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ov(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ku=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bv(){const n={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Rt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?zo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qs]:{primaries:e,whitePoint:i,transfer:zo,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const gt=Bv();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Pa("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kv=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cl(r[a].image)):s.push(cl(r[a]))}else s=cl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hv=0;class mn extends es{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=Or,r=Or,s=oi,a=dr,o=li,l=ji,c=mn.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Wi(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gc:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gc:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Qf;mn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(m+1)/2,C=(d+1)/2,A=(u+h)/4,R=(f+v)/4,L=(_+p)/4;return b>y&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=R/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=L/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-_)*(p-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(f-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vv extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Vv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class md extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gv extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==m||u!==_){let p=1-o;const d=l*h+c*m+u*_+f*v,w=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,d*w);p=Math.sin(p*A)/C,o=Math.sin(o*A)/C}const y=o*w;if(l=l*p+h*y,c=c*p+m*y,u=u*p+_*y,f=f*p+v*y,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new k,Ju=new Qr;class Zi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Ya.subVectors(this.max,ua),ls.subVectors(e.a,ua),cs.subVectors(e.b,ua),us.subVectors(e.c,ua),nr.subVectors(cs,ls),ir.subVectors(us,cs),Tr.subVectors(ls,us);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Tr.z,Tr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Tr.z,0,-Tr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Tr.y,Tr.x,0];return!hl(t,ls,cs,us,Ya)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,ls,cs,us,Ya))?!1:($a.crossVectors(nr,ir),t=[$a.x,$a.y,$a.z],hl(t,ls,cs,us,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new k,new k,new k,new k,new k,new k,new k,new k],Zn=new k,ja=new Zi,ls=new k,cs=new k,us=new k,nr=new k,ir=new k,Tr=new k,ua=new k,Ya=new k,$a=new k,wr=new k;function hl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wv=new Zi,ha=new k,fl=new k;class Va{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(fl)),this.expandByPoint(ha.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new k,dl=new k,Ka=new k,rr=new k,pl=new k,Za=new k,ml=new k;class _d{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){dl.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(dl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),o=rr.dot(this.direction),l=-rr.dot(Ka),c=rr.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(dl).addScaledVector(Ka,h),m}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){pl.subVectors(t,e),Za.subVectors(i,e),ml.crossVectors(pl,Za);let a=this.direction.dot(ml),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rr.subVectors(this.origin,e);const l=o*this.direction.dot(Za.crossVectors(rr,Za));if(l<0)return null;const c=o*this.direction.dot(pl.cross(rr));if(c<0||l+c>a)return null;const u=-o*rr.dot(ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,_,v,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,v=c*f;t[0]=h+v*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,qv)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),sr.crossVectors(i,Rn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),sr.crossVectors(i,Rn)),sr.normalize(),Ja.crossVectors(Rn,sr),r[0]=sr.x,r[4]=Ja.x,r[8]=Rn.x,r[1]=sr.y,r[5]=Ja.y,r[9]=Rn.y,r[2]=sr.z,r[6]=Ja.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],w=i[3],b=i[7],y=i[11],C=i[15],A=r[0],R=r[4],L=r[8],E=r[12],M=r[1],D=r[5],W=r[9],H=r[13],te=r[2],re=r[6],Z=r[10],se=r[14],j=r[3],me=r[7],ye=r[11],Ce=r[15];return s[0]=a*A+o*M+l*te+c*j,s[4]=a*R+o*D+l*re+c*me,s[8]=a*L+o*W+l*Z+c*ye,s[12]=a*E+o*H+l*se+c*Ce,s[1]=u*A+f*M+h*te+m*j,s[5]=u*R+f*D+h*re+m*me,s[9]=u*L+f*W+h*Z+m*ye,s[13]=u*E+f*H+h*se+m*Ce,s[2]=_*A+v*M+p*te+d*j,s[6]=_*R+v*D+p*re+d*me,s[10]=_*L+v*W+p*Z+d*ye,s[14]=_*E+v*H+p*se+d*Ce,s[3]=w*A+b*M+y*te+C*j,s[7]=w*R+b*D+y*re+C*me,s[11]=w*L+b*W+y*Z+C*ye,s[15]=w*E+b*H+y*se+C*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+v*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],w=f*p*c-v*h*c+v*l*m-o*p*m-f*l*d+o*h*d,b=_*h*c-u*p*c-_*l*m+a*p*m+u*l*d-a*h*d,y=u*v*c-_*f*c+_*o*m-a*v*m-u*o*d+a*f*d,C=_*f*l-u*v*l-_*o*h+a*v*h+u*o*p-a*f*p,A=t*w+i*b+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=w*R,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*d-i*h*d)*R,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*d+i*l*d)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*R,e[4]=b*R,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*d+t*h*d)*R,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*d-t*l*d)*R,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*R,e[8]=y*R,e[9]=(_*f*s-u*v*s-_*i*m+t*v*m+u*i*d-t*f*d)*R,e[10]=(a*v*s-_*o*s+_*i*c-t*v*c-a*i*d+t*o*d)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*R,e[12]=C*R,e[13]=(u*v*r-_*f*r+_*i*h-t*v*h-u*i*p+t*f*p)*R,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,v=a*u,p=a*f,d=o*f,w=l*c,b=l*u,y=l*f,C=i.x,A=i.y,R=i.z;return r[0]=(1-(v+d))*C,r[1]=(m+y)*C,r[2]=(_-b)*C,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(h+d))*A,r[6]=(p+w)*A,r[7]=0,r[8]=(_+b)*R,r[9]=(p-w)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=hs.set(r[0],r[1],r[2]).length();const a=hs.set(r[4],r[5],r[6]).length(),o=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,u=1/a,f=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,t.setFromRotationMatrix(Jn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ki){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(o===ki)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ko)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ki){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,m=(i+r)*u;let _,v;if(o===ki)_=(a+s)*f,v=-2*f;else if(o===ko)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new k,Jn=new Nt,Xv=new k(0,0,0),qv=new k(1,1,1),sr=new k,Ja=new k,Rn=new k,Qu=new Nt,eh=new Qr;class Ei{constructor(e=0,t=0,i=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jv=0;const th=new k,fs=new Qr,Pi=new Nt,Qa=new k,fa=new k,Yv=new k,$v=new Qr,nh=new k(1,0,0),ih=new k(0,1,0),rh=new k(0,0,1),sh={type:"added"},Kv={type:"removed"},ds={type:"childadded",child:null},_l={type:"childremoved",child:null};class an extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new k,t=new Ei,i=new Qr,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new rt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(fa,Qa,this.up):Pi.lookAt(Qa,fa,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(Pi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kv),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,Yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,$v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new k(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new k,Di=new k,vl=new k,Li=new k,ps=new k,ms=new k,ah=new k,gl=new k,xl=new k,Ml=new k,Sl=new Pt,yl=new Pt,El=new Pt;class ri{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qn.subVectors(r,t),Di.subVectors(i,t),vl.subVectors(e,t);const a=Qn.dot(Qn),o=Qn.dot(Di),l=Qn.dot(vl),c=Di.dot(Di),u=Di.dot(vl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Sl.setScalar(0),yl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),El.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sl,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(El,s.z),a}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Di.subVectors(e,t),Qn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ps.subVectors(r,i),ms.subVectors(s,i),gl.subVectors(e,i);const l=ps.dot(gl),c=ms.dot(gl);if(l<=0&&c<=0)return t.copy(i);xl.subVectors(e,r);const u=ps.dot(xl),f=ms.dot(xl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ps,a);Ml.subVectors(e,s);const m=ps.dot(Ml),_=ms.dot(Ml);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ms,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return ah.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(ah,o);const d=1/(p+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},eo={h:0,s:0,l:0};function bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=gu(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=bl(a,s,e+1/3),this.g=bl(a,s,e),this.b=bl(a,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return gt.fromWorkingColorSpace(cn.copy(this),e),Math.round(at(cn.r*255,0,255))*65536+Math.round(at(cn.g*255,0,255))*256+Math.round(at(cn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Sn){gt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(eo);const i=wa(ar.h,eo.h,t),r=wa(ar.s,eo.s,t),s=wa(ar.l,eo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new mt;mt.NAMES=gd;let Zv=0;class aa extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Ps,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oc&&(i.blendSrc=this.blendSrc),this.blendDst!==lc&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xd extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new k,to=new nt;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qc,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class Md extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xu extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yi extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jv=0;const zn=new Nt,Tl=new an,_s=new k,Cn=new Zi,da=new Zi,Kt=new k;class Ti extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?xu:Md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Cn.min,da.min),Cn.expandByPoint(Kt),Kt.addVectors(Cn.max,da.max),Cn.expandByPoint(Kt)):(Cn.expandByPoint(da.min),Cn.expandByPoint(da.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Kt.add(_s)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new k,l[L]=new k;const c=new k,u=new k,f=new k,h=new nt,m=new nt,_=new nt,v=new k,p=new k;function d(L,E,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(h),_.sub(h);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(D),o[L].add(v),o[E].add(v),o[M].add(v),l[L].add(p),l[E].add(p),l[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,E=w.length;L<E;++L){const M=w[L],D=M.start,W=M.count;for(let H=D,te=D+W;H<te;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new k,y=new k,C=new k,A=new k;function R(L){C.fromBufferAttribute(r,L),A.copy(C);const E=o[L];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(A,E);const D=y.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,D)}for(let L=0,E=w.length;L<E;++L){const M=w[L],D=M.start,W=M.count;for(let H=D,te=D+W;H<te;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new Nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new Nt,Ar=new _d,no=new Va,lh=new k,io=new k,ro=new k,so=new k,wl=new k,ao=new k,ch=new k,oo=new k;class ci extends an{constructor(e=new Ti,t=new xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(wl.fromBufferAttribute(f,e),a?ao.addScaledVector(wl,u):ao.addScaledVector(wl.sub(t),u))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(no.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(no,lh)===null||Ar.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(oh.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(oh),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,C=b;y<C;y+=3){const A=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);r=lo(this,d,e,i,c,u,f,A,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const w=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);r=lo(this,a,e,i,c,u,f,w,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],d=a[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,C=b;y<C;y+=3){const A=y,R=y+1,L=y+2;r=lo(this,d,e,i,c,u,f,A,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const w=p,b=p+1,y=p+2;r=lo(this,a,e,i,c,u,f,w,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Qv(n,e,t,i,r,s,a,o){let l;if(e.side===bn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Sr,o),l===null)return null;oo.copy(o),oo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:n}}function lo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,io),n.getVertexPosition(l,ro),n.getVertexPosition(c,so);const u=Qv(n,e,t,i,io,ro,so,ch);if(u){const f=new k;ri.getBarycoord(ch,io,ro,so,f),r&&(u.uv=ri.getInterpolatedAttribute(r,o,l,c,f,new nt)),s&&(u.uv1=ri.getInterpolatedAttribute(s,o,l,c,f,new nt)),a&&(u.normal=ri.getInterpolatedAttribute(a,o,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};ri.getNormal(io,ro,so,h.normal),u.face=h,u.barycoord=f}return u}class Ga extends Ti{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(f,2));function _(v,p,d,w,b,y,C,A,R,L,E){const M=y/R,D=C/L,W=y/2,H=C/2,te=A/2,re=R+1,Z=L+1;let se=0,j=0;const me=new k;for(let ye=0;ye<Z;ye++){const Ce=ye*D-H;for(let X=0;X<re;X++){const _e=X*M-W;me[v]=_e*w,me[p]=Ce*b,me[d]=te,c.push(me.x,me.y,me.z),me[v]=0,me[p]=0,me[d]=A>0?1:-1,u.push(me.x,me.y,me.z),f.push(X/R),f.push(1-ye/L),se+=1}}for(let ye=0;ye<L;ye++)for(let Ce=0;Ce<R;Ce++){const X=h+Ce+re*ye,_e=h+Ce+re*(ye+1),$=h+(Ce+1)+re*(ye+1),he=h+(Ce+1)+re*ye;l.push(X,_e,he),l.push(_e,$,he),j+=6}o.addGroup(m,j,E),m+=j,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=ea(n[t]);for(const r in i)e[r]=i[r]}return e}function eg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Mu={clone:ea,merge:fn};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yd extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new k,uh=new nt,hh=new nt;class Xn extends yd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,uh,hh),t.subVectors(hh,uh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,gs=1;class ig extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(vs,gs,e,t);r.layers=this.layers,this.add(r);const s=new Xn(vs,gs,e,t);s.layers=this.layers,this.add(s);const a=new Xn(vs,gs,e,t);a.layers=this.layers,this.add(a);const o=new Xn(vs,gs,e,t);o.layers=this.layers,this.add(o);const l=new Xn(vs,gs,e,t);l.layers=this.layers,this.add(l);const c=new Xn(vs,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ed extends mn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ed(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:vr});s.uniforms.tEquirect.value=t;const a=new ci(r,s),o=t.minFilter;return t.minFilter===dr&&(t.minFilter=oi),new ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class sg extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ag{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new k;class pr{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Al=new k,og=new k,lg=new rt;class lr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Al.subVectors(i,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Al),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lg.getNormalMatrix(e),r=this.coplanarPoint(Al).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Va,co=new k;class Su{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],w=r[13],b=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-d).normalize(),i[1].setComponents(l+s,h+c,p+m,y+d).normalize(),i[2].setComponents(l+a,h+u,p+_,y+w).normalize(),i[3].setComponents(l-a,h-u,p-_,y-w).normalize(),i[4].setComponents(l-o,h-f,p-v,y-b).normalize(),t===ki)i[5].setComponents(l+o,h+f,p+v,y+b).normalize();else if(t===ko)i[5].setComponents(o,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(co.x=r.normal.x>0?e.max.x:e.min.x,co.y=r.normal.y>0?e.max.y:e.min.y,co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uo extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}class bd extends mn{constructor(e,t,i,r,s,a,o,l,c,u=Ds){if(u!==Ds&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ds&&(i=Zr),i===void 0&&u===Js&&(i=Zs),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ui,this.minFilter=l!==void 0?l:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ko extends Ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const w=d*h-a;for(let b=0;b<c;b++){const y=b*f-s;_.push(y,-w,0),v.push(0,0,1),p.push(b/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const b=w+c*d,y=w+c*(d+1),C=w+1+c*(d+1),A=w+1+c*d;m.push(b,y,A),m.push(y,C,A)}this.setIndex(m),this.setAttribute("position",new yi(_,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class cg extends Ti{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new k,s=new k;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,m=f.count;for(let _=h,v=h+m;_<v;_+=3)for(let p=0;p<3;p++){const d=o.getX(_+p),w=o.getX(_+(p+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,w),fh(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,f=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),fh(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new yi(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function fh(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class ug extends aa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hg extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fg extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dg{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const pg=new dg;class yu{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yu.DEFAULT_MATERIAL_NAME="__DEFAULT";class mg extends yu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=dh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Pa("img");function l(){u(),dh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class _g extends yu{constructor(e){super(e)}load(e,t,i,r){const s=new mn,a=new mg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Eu extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vg extends Eu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rl=new Nt,ph=new k,mh=new k;class gg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Su,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Td extends yd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xg extends gg{constructor(){super(new Td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mg extends Eu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new xg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sg extends Eu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yg extends Ti{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Eg extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jc extends ag{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class _h{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const vh=new k,ho=new k;class bg{constructor(e=new k,t=new k){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vh.subVectors(e,this.start),ho.subVectors(this.end,this.start);const i=ho.dot(ho);let s=ho.dot(vh)/i;return t&&(s=at(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Tg extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function gh(n,e,t,i){const r=wg(i);switch(t){case id:return n*e;case sd:return n*e;case ad:return n*e*2;case od:return n*e/r.components*r.byteLength;case mu:return n*e/r.components*r.byteLength;case ld:return n*e*2/r.components*r.byteLength;case _u:return n*e*2/r.components*r.byteLength;case rd:return n*e*3/r.components*r.byteLength;case li:return n*e*4/r.components*r.byteLength;case vu:return n*e*4/r.components*r.byteLength;case wo:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Ec:return Math.max(n,16)*Math.max(e,8)/4;case Mc:case yc:return Math.max(n,8)*Math.max(e,8)/2;case bc:case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Po:case Hc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cd:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wg(n){switch(n){case ji:case ed:return{byteLength:1,components:1};case Ra:case td:case Ha:return{byteLength:2,components:1};case du:case pu:return{byteLength:2,components:4};case Zr:case fu:case zi:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ag(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],v=f[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const v=f[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zg=`#define PI 3.141592653589793
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
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
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
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
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
#endif`,w0=`struct PhysicalMaterial {
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
}`,A0=`
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fx=`float getShadowMask() {
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Nx=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Gx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define MATCAP
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
}`,jx=`#define NORMAL
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
}`,Yx=`#define NORMAL
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
}`,$x=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
}`,Qx=`#define TOON
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
}`,eM=`#define TOON
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
}`,tM=`uniform float size;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,rM=`uniform vec3 color;
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
}`,sM=`uniform float rotation;
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
}`,aM=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Dg,alphatest_fragment:Lg,alphatest_pars_fragment:Ug,aomap_fragment:Ig,aomap_pars_fragment:Ng,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:Bg,beginnormal_vertex:zg,bsdfs:kg,iridescence_fragment:Hg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:jg,color_pars_fragment:Yg,color_pars_vertex:$g,color_vertex:Kg,common:Zg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:r0,colorspace_pars_fragment:s0,envmap_fragment:a0,envmap_common_pars_fragment:o0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:M0,envmap_vertex:u0,fog_vertex:h0,fog_pars_vertex:f0,fog_fragment:d0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:g0,lights_pars_begin:x0,lights_toon_fragment:S0,lights_toon_pars_fragment:y0,lights_phong_fragment:E0,lights_phong_pars_fragment:b0,lights_physical_fragment:T0,lights_physical_pars_fragment:w0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:U0,map_fragment:I0,map_pars_fragment:N0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphinstance_vertex:k0,morphcolor_vertex:H0,morphnormal_vertex:V0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:j0,normal_pars_vertex:Y0,normal_vertex:$0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:rx,dithering_fragment:sx,dithering_pars_fragment:ax,roughnessmap_fragment:ox,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:fx,skinbase_vertex:dx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:_x,specularmap_fragment:vx,specularmap_pars_fragment:gx,tonemapping_fragment:xx,tonemapping_pars_fragment:Mx,transmission_fragment:Sx,transmission_pars_fragment:yx,uv_pars_fragment:Ex,uv_pars_vertex:bx,uv_vertex:Tx,worldpos_vertex:wx,background_vert:Ax,background_frag:Rx,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Dx,cube_frag:Lx,depth_vert:Ux,depth_frag:Ix,distanceRGBA_vert:Nx,distanceRGBA_frag:Fx,equirect_vert:Ox,equirect_frag:Bx,linedashed_vert:zx,linedashed_frag:kx,meshbasic_vert:Hx,meshbasic_frag:Vx,meshlambert_vert:Gx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:jx,meshnormal_frag:Yx,meshphong_vert:$x,meshphong_frag:Kx,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:Qx,meshtoon_frag:eM,points_vert:tM,points_frag:nM,shadow_vert:iM,shadow_frag:rM,sprite_vert:sM,sprite_frag:aM},we={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},yn={basic:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new mt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:fn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:fn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new mt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:fn([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:fn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:fn([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:fn([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:fn([we.common,we.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:fn([we.lights,we.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};yn.physical={uniforms:fn([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const fo={r:0,b:0,g:0},Cr=new Ei,oM=new Nt;function lM(n,e,t,i,r,s,a){const o=new mt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const C=_(b);C===null?d(o,l):C&&C.isColor&&(d(C,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,y){const C=_(y);C&&(C.isCubeTexture||C.mapping===$o)?(u===void 0&&(u=new ci(new Ga(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ea(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cr.copy(y.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oM.makeRotationFromEuler(Cr)),u.material.toneMapped=gt.getTransfer(C.colorSpace)!==Rt,(f!==C||h!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ci(new Ko(2,2),new Yi({name:"BackgroundMaterial",uniforms:ea(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=gt.getTransfer(C.colorSpace)!==Rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,y){b.getRGB(fo,Sd(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,y,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:v,addToRenderList:p,dispose:w}}function cM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,D,W,H,te){let re=!1;const Z=f(H,W,D);s!==Z&&(s=Z,c(s.object)),re=m(M,H,W,te),re&&_(M,H,W,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,y(M,D,W,H),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,W){const H=W.wireframe===!0;let te=i[M.id];te===void 0&&(te={},i[M.id]=te);let re=te[D.id];re===void 0&&(re={},te[D.id]=re);let Z=re[H];return Z===void 0&&(Z=h(l()),re[H]=Z),Z}function h(M){const D=[],W=[],H=[];for(let te=0;te<t;te++)D[te]=0,W[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,D,W,H){const te=s.attributes,re=D.attributes;let Z=0;const se=W.getAttributes();for(const j in se)if(se[j].location>=0){const ye=te[j];let Ce=re[j];if(Ce===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),ye===void 0||ye.attribute!==Ce||Ce&&ye.data!==Ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function _(M,D,W,H){const te={},re=D.attributes;let Z=0;const se=W.getAttributes();for(const j in se)if(se[j].location>=0){let ye=re[j];ye===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor));const Ce={};Ce.attribute=ye,ye&&ye.data&&(Ce.data=ye.data),te[j]=Ce,Z++}s.attributes=te,s.attributesNum=Z,s.index=H}function v(){const M=s.newAttributes;for(let D=0,W=M.length;D<W;D++)M[D]=0}function p(M){d(M,0)}function d(M,D){const W=s.newAttributes,H=s.enabledAttributes,te=s.attributeDivisors;W[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),te[M]!==D&&(n.vertexAttribDivisor(M,D),te[M]=D)}function w(){const M=s.newAttributes,D=s.enabledAttributes;for(let W=0,H=D.length;W<H;W++)D[W]!==M[W]&&(n.disableVertexAttribArray(W),D[W]=0)}function b(M,D,W,H,te,re,Z){Z===!0?n.vertexAttribIPointer(M,D,W,te,re):n.vertexAttribPointer(M,D,W,H,te,re)}function y(M,D,W,H){v();const te=H.attributes,re=W.getAttributes(),Z=D.defaultAttributeValues;for(const se in re){const j=re[se];if(j.location>=0){let me=te[se];if(me===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const ye=me.normalized,Ce=me.itemSize,X=e.get(me);if(X===void 0)continue;const _e=X.buffer,$=X.type,he=X.bytesPerElement,Te=$===n.INT||$===n.UNSIGNED_INT||me.gpuType===fu;if(me.isInterleavedBufferAttribute){const Me=me.data,Ue=Me.stride,He=me.offset;if(Me.isInstancedInterleavedBuffer){for(let Ge=0;Ge<j.locationSize;Ge++)d(j.location+Ge,Me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ge=0;Ge<j.locationSize;Ge++)p(j.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ge=0;Ge<j.locationSize;Ge++)b(j.location+Ge,Ce/j.locationSize,$,ye,Ue*he,(He+Ce/j.locationSize*Ge)*he,Te)}else{if(me.isInstancedBufferAttribute){for(let Me=0;Me<j.locationSize;Me++)d(j.location+Me,me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Me=0;Me<j.locationSize;Me++)p(j.location+Me);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Me=0;Me<j.locationSize;Me++)b(j.location+Me,Ce/j.locationSize,$,ye,Ce*he,Ce/j.locationSize*Me*he,Te)}}else if(Z!==void 0){const ye=Z[se];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(j.location,ye);break;case 3:n.vertexAttrib3fv(j.location,ye);break;case 4:n.vertexAttrib4fv(j.location,ye);break;default:n.vertexAttrib1fv(j.location,ye)}}}}w()}function C(){L();for(const M in i){const D=i[M];for(const W in D){const H=D[W];for(const te in H)u(H[te].object),delete H[te];delete D[W]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const W in D){const H=D[W];for(const te in H)u(H[te].object),delete H[te];delete D[W]}delete i[M.id]}function R(M){for(const D in i){const W=i[D];if(W[M.id]===void 0)continue;const H=W[M.id];for(const te in H)u(H[te].object),delete H[te];delete W[M.id]}}function L(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function uM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==li&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ji&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zi&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function fM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new lr,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const w=s?0:i,b=w*4;let y=d.clippingState||null;l.value=y,y=u(_,h,b,m);for(let C=0;C!==b;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,y=m;b!==v;++b,y+=4)a.copy(f[b]).applyMatrix4(w,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function dM(n){let e=new WeakMap;function t(a,o){return o===_c?a.mapping=$s:o===vc&&(a.mapping=Ks),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_c||o===vc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rg(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ws=4,xh=[.125,.215,.35,.446,.526,.582],Ur=20,Cl=new Td,Mh=new mt;let Pl=null,Dl=0,Ll=0,Ul=!1;const Dr=(1+Math.sqrt(5))/2,xs=1/Dr,Sh=[new k(-Dr,xs,0),new k(Dr,xs,0),new k(-xs,0,Dr),new k(xs,0,Dr),new k(0,Dr,-xs),new k(0,Dr,xs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Pl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Dl,Ll),this._renderer.xr.enabled=Ul,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ha,format:li,colorSpace:Qs,depthBuffer:!1},r=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(s)),this._blurMaterial=mM(s,e,t)}return r}_compileMaterial(e){const t=new ci(this._lodPlanes[0],e);this._renderer.compile(t,Cl)}_sceneToCubeUV(e,t,i,r){const o=new Xn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Mh),u.toneMapping=gr,u.autoClear=!1;const m=new xd({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new ci(new Ga,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Mh),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):w===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const b=this._cubeSize;po(r,w*b,d>2?b:0,b,b),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$s||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ci(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Cl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sh[(r-s-1)%Sh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ci(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ur-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):Ur;p>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ur}`);const d=[];let w=0;for(let R=0;R<Ur;++R){const L=R/v,E=Math.exp(-L*L/2);d.push(E),R===0?w+=E:R<p&&(w+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const y=this._sizeLods[r],C=3*y*(r>b-ws?r-b+ws:0),A=4*(this._cubeSize-y);po(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(f,Cl)}}function pM(n){const e=[],t=[],i=[];let r=n;const s=n-ws+1+xh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ws?l=xh[a-n+ws-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,v=3,p=2,d=1,w=new Float32Array(v*_*m),b=new Float32Array(p*_*m),y=new Float32Array(d*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,L=A>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];w.set(E,v*_*A),b.set(h,p*_*A);const M=[A,A,A,A,A,A];y.set(M,d*_*A)}const C=new Ti;C.setAttribute("position",new Nn(w,v)),C.setAttribute("uv",new Nn(b,p)),C.setAttribute("faceIndex",new Nn(y,d)),e.push(C),r>ws&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new Jr(n,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mM(n,e,t){const i=new Float32Array(Ur),r=new k(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function bh(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Th(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function _M(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_c||l===vc,u=l===$s||l===Ks;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new yh(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new yh(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function vM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ss("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gM(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,_=f.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let b=0,y=w.length;b<y;b+=3){const C=w[b+0],A=w[b+1],R=w[b+2];h.push(C,A,A,R,R,C)}}else if(_!==void 0){const w=_.array;v=_.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const C=b+0,A=b+1,R=b+2;h.push(C,A,A,R,R,C)}}else return;const p=new(dd(h)?xu:Md)(h,1);p.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function xM(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function c(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*a,_),t.update(m,i,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,i,1)}function f(h,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,_);let d=0;for(let w=0;w<_;w++)d+=m[w]*v[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function MM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function SM(n,e,t){const i=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let C=o.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*f),L=new md(R,C,A,f);L.type=zi,L.needsUpdate=!0;const E=y*4;for(let D=0;D<f;D++){const W=d[D],H=w[D],te=b[D],re=C*A*4*D;for(let Z=0;Z<W.count;Z++){const se=Z*E;_===!0&&(r.fromBufferAttribute(W,Z),R[re+se+0]=r.x,R[re+se+1]=r.y,R[re+se+2]=r.z,R[re+se+3]=0),v===!0&&(r.fromBufferAttribute(H,Z),R[re+se+4]=r.x,R[re+se+5]=r.y,R[re+se+6]=r.z,R[re+se+7]=0),p===!0&&(r.fromBufferAttribute(te,Z),R[re+se+8]=r.x,R[re+se+9]=r.y,R[re+se+10]=r.z,R[re+se+11]=te.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new nt(C,A)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function yM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ad=new mn,wh=new bd(1,1),Rd=new md,Cd=new Gv,Pd=new Ed,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function oa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ah[r];if(s===void 0&&(s=new Float32Array(r),Ah[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zo(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function EM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function AM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),$t(t,i)}}function RM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),$t(t,i)}}function CM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),$t(t,i)}}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function IM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function BM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wh.compareFunction=hd,s=wh):s=Ad,t.setTexture2D(e||s,r)}function zM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cd,r)}function kM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pd,r)}function HM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rd,r)}function VM(n){switch(n){case 5126:return EM;case 35664:return bM;case 35665:return TM;case 35666:return wM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return DM;case 35668:case 35672:return LM;case 35669:case 35673:return UM;case 5125:return IM;case 36294:return NM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return HM}}function GM(n,e){n.uniform1fv(this.addr,e)}function WM(n,e){const t=oa(e,this.size,2);n.uniform2fv(this.addr,t)}function XM(n,e){const t=oa(e,this.size,3);n.uniform3fv(this.addr,t)}function qM(n,e){const t=oa(e,this.size,4);n.uniform4fv(this.addr,t)}function jM(n,e){const t=oa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YM(n,e){const t=oa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $M(n,e){const t=oa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KM(n,e){n.uniform1iv(this.addr,e)}function ZM(n,e){n.uniform2iv(this.addr,e)}function JM(n,e){n.uniform3iv(this.addr,e)}function QM(n,e){n.uniform4iv(this.addr,e)}function eS(n,e){n.uniform1uiv(this.addr,e)}function tS(n,e){n.uniform2uiv(this.addr,e)}function nS(n,e){n.uniform3uiv(this.addr,e)}function iS(n,e){n.uniform4uiv(this.addr,e)}function rS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ad,s[a])}function sS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cd,s[a])}function aS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pd,s[a])}function oS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rd,s[a])}function lS(n){switch(n){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return jM;case 35675:return YM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return QM;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return oS}}class cS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VM(t.type)}}class uS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}}class hS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function Lh(n,e){n.seq.push(e),n.map[e.id]=e}function fS(n,e,t){const i=n.name,r=i.length;for(Il.lastIndex=0;;){const s=Il.exec(i),a=Il.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lh(t,c===void 0?new cS(o,n,e):new uS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new hS(o),Lh(t,f)),t=f}}}class Do{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);fS(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dS=37297;let pS=0;function mS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ih=new rt;function _S(n){gt._getMatrix(Ih,gt.workingColorSpace,n);const e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case zo:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mS(n.getShaderSource(e),a)}else return r}function vS(n,e){const t=_S(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gS(n,e){let t;switch(e){case tv:t="Linear";break;case nv:t="Reinhard";break;case iv:t="Cineon";break;case Jf:t="ACESFilmic";break;case sv:t="AgX";break;case av:t="Neutral";break;case rv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mo=new k;function xS(){gt.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function SS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ma(n){return n!==""}function Fh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(n){return n.replace(ES,TS)}const bS=new Map;function TS(n,e){let t=st[e];if(t===void 0){const i=bS.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(n){return n.replace(wS,AS)}function AS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===I_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function CS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case $o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function DS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zf:e="ENVMAP_BLENDING_MULTIPLY";break;case Q_:e="ENVMAP_BLENDING_MIX";break;case ev:e="ENVMAP_BLENDING_ADD";break}return e}function LS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function US(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=RS(t),c=CS(t),u=PS(t),f=DS(t),h=LS(t),m=MS(t),_=SS(s),v=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),d.length>0&&(d+=`
`)):(p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),d=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?st.tonemapping_pars_fragment:"",t.toneMapping!==gr?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,vS("linearToOutputTexel",t.outputColorSpace),xS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Yc(a),a=Fh(a,t),a=Oh(a,t),o=Yc(o),o=Fh(o,t),o=Oh(o,t),a=Bh(a),o=Bh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=w+p+a,y=w+d+o,C=Uh(r,r.VERTEX_SHADER,b),A=Uh(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(D){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(C).trim(),te=r.getShaderInfoLog(A).trim();let re=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,A);else{const se=Nh(r,C,"vertex"),j=Nh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+se+`
`+j)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||te==="")&&(Z=!1);Z&&(D.diagnostics={runnable:re,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:te,prefix:d}})}r.deleteShader(C),r.deleteShader(A),L=new Do(r,v),E=yS(r,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,dS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let IS=0;class NS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new FS(e),t.set(e,i)),i}}class FS{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}}function OS(n,e,t,i,r,s,a){const o=new vd,l=new NS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,D,W,H){const te=W.fog,re=H.geometry,Z=E.isMeshStandardMaterial?W.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),j=se&&se.mapping===$o?se.image.height:null,me=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ye=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ce=ye!==void 0?ye.length:0;let X=0;re.morphAttributes.position!==void 0&&(X=1),re.morphAttributes.normal!==void 0&&(X=2),re.morphAttributes.color!==void 0&&(X=3);let _e,$,he,Te;if(me){const ze=yn[me];_e=ze.vertexShader,$=ze.fragmentShader}else _e=E.vertexShader,$=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),Te=l.getFragmentShaderID(E);const Me=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),He=H.isInstancedMesh===!0,Ge=H.isBatchedMesh===!0,lt=!!E.map,$e=!!E.matcap,ht=!!se,P=!!E.aoMap,Lt=!!E.lightMap,Ke=!!E.bumpMap,Je=!!E.normalMap,Fe=!!E.displacementMap,ct=!!E.emissiveMap,De=!!E.metalnessMap,T=!!E.roughnessMap,g=E.anisotropy>0,B=E.clearcoat>0,ne=E.dispersion>0,ce=E.iridescence>0,ie=E.sheen>0,Ne=E.transmission>0,Se=g&&!!E.anisotropyMap,fe=B&&!!E.clearcoatMap,Q=B&&!!E.clearcoatNormalMap,K=B&&!!E.clearcoatRoughnessMap,pe=ce&&!!E.iridescenceMap,be=ce&&!!E.iridescenceThicknessMap,xe=ie&&!!E.sheenColorMap,ve=ie&&!!E.sheenRoughnessMap,N=!!E.specularMap,ae=!!E.specularColorMap,Qe=!!E.specularIntensityMap,U=Ne&&!!E.transmissionMap,ge=Ne&&!!E.thicknessMap,J=!!E.gradientMap,oe=!!E.alphaMap,Re=E.alphaTest>0,Ae=!!E.alphaHash,le=!!E.extensions;let ee=gr;E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ee=n.toneMapping);const Be={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:_e,fragmentShader:$,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&H._colorsTexture!==null,instancing:He,instancingColor:He&&H.instanceColor!==null,instancingMorph:He&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Qs,alphaToCoverage:!!E.alphaToCoverage,map:lt,matcap:$e,envMap:ht,envMapMode:ht&&se.mapping,envMapCubeUVHeight:j,aoMap:P,lightMap:Lt,bumpMap:Ke,normalMap:Je,displacementMap:h&&Fe,emissiveMap:ct,normalMapObjectSpace:Je&&E.normalMapType===uv,normalMapTangentSpace:Je&&E.normalMapType===ud,metalnessMap:De,roughnessMap:T,anisotropy:g,anisotropyMap:Se,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:Q,clearcoatRoughnessMap:K,dispersion:ne,iridescence:ce,iridescenceMap:pe,iridescenceThicknessMap:be,sheen:ie,sheenColorMap:xe,sheenRoughnessMap:ve,specularMap:N,specularColorMap:ae,specularIntensityMap:Qe,transmission:Ne,transmissionMap:U,thicknessMap:ge,gradientMap:J,opaque:E.transparent===!1&&E.blending===Ps&&E.alphaToCoverage===!1,alphaMap:oe,alphaTest:Re,alphaHash:Ae,combine:E.combine,mapUv:lt&&v(E.map.channel),aoMapUv:P&&v(E.aoMap.channel),lightMapUv:Lt&&v(E.lightMap.channel),bumpMapUv:Ke&&v(E.bumpMap.channel),normalMapUv:Je&&v(E.normalMap.channel),displacementMapUv:Fe&&v(E.displacementMap.channel),emissiveMapUv:ct&&v(E.emissiveMap.channel),metalnessMapUv:De&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:Se&&v(E.anisotropyMap.channel),clearcoatMapUv:fe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(E.sheenRoughnessMap.channel),specularMapUv:N&&v(E.specularMap.channel),specularColorMapUv:ae&&v(E.specularColorMap.channel),specularIntensityMapUv:Qe&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:ge&&v(E.thicknessMap.channel),alphaMapUv:oe&&v(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Je||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!re.attributes.uv&&(lt||oe),fog:!!te,useFog:E.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:H.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:X,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:lt&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===Rt,decodeVideoTextureEmissive:ct&&E.emissiveMap.isVideoTexture===!0&&gt.getTransfer(E.emissiveMap.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gi,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:le&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&E.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(w(M,E),b(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const M=_[E.type];let D;if(M){const W=yn[M];D=Mu.clone(W.uniforms)}else D=E.uniforms;return D}function C(E,M){let D;for(let W=0,H=u.length;W<H;W++){const te=u[W];if(te.cacheKey===M){D=te,++D.usedTimes;break}}return D===void 0&&(D=new US(n,M,E,s),u.push(D)),D}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:L}}function BS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function zS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,_,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function o(f,h,m,_,v,p){const d=a(f,h,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,_,v,p){const d=a(f,h,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||zS),i.length>1&&i.sort(h||kh),r.length>1&&r.sort(h||kh)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function kS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Hh,n.set(i,[a])):r>=s.length?(a=new Hh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function HS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new mt};break;case"SpotLight":t={position:new k,direction:new k,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function VS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let GS=0;function WS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XS(n){const e=new HS,t=VS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Nt,a=new Nt;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,w=0,b=0,y=0,C=0,A=0,R=0;c.sort(WS);for(let E=0,M=c.length;E<M;E++){const D=c[E],W=D.color,H=D.intensity,te=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=W.r*H,f+=W.g*H,h+=W.b*H;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],H);R++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,j=t.get(D);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=Z,m++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(W).multiplyScalar(H),Z.distance=te,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[v]=Z;const se=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,se.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=se.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=re,y++}v++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(W).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=Z,p++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const se=D.shadow,j=t.get(D);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,j.shadowCameraNear=se.camera.near,j.shadowCameraFar=se.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=D.shadow.matrix,b++}i.point[_]=Z,_++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H),Z.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[d]=Z,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,L.directionalLength=m,L.pointLength=_,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=R,i.version=GS++)}function l(c,u){let f=0,h=0,m=0,_=0,v=0;const p=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const b=c[d];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(b.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function Vh(n){const e=new XS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function qS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vh(n),e.set(r,[o])):s>=a.length?(o=new Vh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
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
}`;function $S(n,e,t){let i=new Su;const r=new nt,s=new nt,a=new Pt,o=new hg({depthPacking:cv}),l=new fg,c={},u=t.maxTextureSize,f={[Sr]:bn,[bn]:Sr,[gi]:gi},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:jS,fragmentShader:YS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ti;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ci(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kf;let d=this.type;this.render=function(A,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),W=n.state;W.setBlending(vr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=d!==Ui&&this.type===Ui,te=d===Ui&&this.type!==Ui;for(let re=0,Z=A.length;re<Z;re++){const se=A[re],j=se.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const me=j.getFrameExtents();if(r.multiply(me),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,j.mapSize.y=s.y)),j.map===null||H===!0||te===!0){const Ce=this.type!==Ui?{minFilter:ui,magFilter:ui}:{};j.map!==null&&j.map.dispose(),j.map=new Jr(r.x,r.y,Ce),j.map.texture.name=se.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const ye=j.getViewportCount();for(let Ce=0;Ce<ye;Ce++){const X=j.getViewport(Ce);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),W.viewport(a),j.updateMatrices(se,Ce),i=j.getFrustum(),y(R,L,j.camera,se,this.type)}j.isPointLightShadow!==!0&&this.type===Ui&&w(j,L),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,D)};function w(A,R){const L=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,L,h,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,L,m,v,null)}function b(A,R,L,E){let M=null;const D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,H=R.uuid;let te=c[W];te===void 0&&(te={},c[W]=te);let re=te[H];re===void 0&&(re=M.clone(),te[H]=re,R.addEventListener("dispose",C)),M=re}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Ui?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=L}return M}function y(A,R,L,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=e.update(A),te=A.material;if(Array.isArray(te)){const re=H.groups;for(let Z=0,se=re.length;Z<se;Z++){const j=re[Z],me=te[j.materialIndex];if(me&&me.visible){const ye=b(A,me,E,M);A.onBeforeShadow(n,A,R,L,H,ye,j),n.renderBufferDirect(L,null,H,ye,A,j),A.onAfterShadow(n,A,R,L,H,ye,j)}}}else if(te.visible){const re=b(A,te,E,M);A.onBeforeShadow(n,A,R,L,H,re,null),n.renderBufferDirect(L,null,H,re,A,null),A.onAfterShadow(n,A,R,L,H,re,null)}}const W=A.children;for(let H=0,te=W.length;H<te;H++)y(W[H],R,L,E,M)}function C(A){A.target.removeEventListener("dispose",C);for(const L in c){const E=c[L],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const KS={[cc]:uc,[hc]:pc,[fc]:mc,[Ys]:dc,[uc]:cc,[pc]:hc,[mc]:fc,[dc]:Ys};function ZS(n,e){function t(){let U=!1;const ge=new Pt;let J=null;const oe=new Pt(0,0,0,0);return{setMask:function(Re){J!==Re&&!U&&(n.colorMask(Re,Re,Re,Re),J=Re)},setLocked:function(Re){U=Re},setClear:function(Re,Ae,le,ee,Be){Be===!0&&(Re*=ee,Ae*=ee,le*=ee),ge.set(Re,Ae,le,ee),oe.equals(ge)===!1&&(n.clearColor(Re,Ae,le,ee),oe.copy(ge))},reset:function(){U=!1,J=null,oe.set(-1,0,0,0)}}}function i(){let U=!1,ge=!1,J=null,oe=null,Re=null;return{setReversed:function(Ae){if(ge!==Ae){const le=e.get("EXT_clip_control");ge?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const ee=Re;Re=null,this.setClear(ee)}ge=Ae},getReversed:function(){return ge},setTest:function(Ae){Ae?Me(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(Ae){J!==Ae&&!U&&(n.depthMask(Ae),J=Ae)},setFunc:function(Ae){if(ge&&(Ae=KS[Ae]),oe!==Ae){switch(Ae){case cc:n.depthFunc(n.NEVER);break;case uc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case fc:n.depthFunc(n.EQUAL);break;case dc:n.depthFunc(n.GEQUAL);break;case pc:n.depthFunc(n.GREATER);break;case mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){Re!==Ae&&(ge&&(Ae=1-Ae),n.clearDepth(Ae),Re=Ae)},reset:function(){U=!1,J=null,oe=null,Re=null,ge=!1}}}function r(){let U=!1,ge=null,J=null,oe=null,Re=null,Ae=null,le=null,ee=null,Be=null;return{setTest:function(ze){U||(ze?Me(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(ze){ge!==ze&&!U&&(n.stencilMask(ze),ge=ze)},setFunc:function(ze,bt,dt){(J!==ze||oe!==bt||Re!==dt)&&(n.stencilFunc(ze,bt,dt),J=ze,oe=bt,Re=dt)},setOp:function(ze,bt,dt){(Ae!==ze||le!==bt||ee!==dt)&&(n.stencilOp(ze,bt,dt),Ae=ze,le=bt,ee=dt)},setLocked:function(ze){U=ze},setClear:function(ze){Be!==ze&&(n.clearStencil(ze),Be=ze)},reset:function(){U=!1,ge=null,J=null,oe=null,Re=null,Ae=null,le=null,ee=null,Be=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],_=null,v=!1,p=null,d=null,w=null,b=null,y=null,C=null,A=null,R=new mt(0,0,0),L=0,E=!1,M=null,D=null,W=null,H=null,te=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,se=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=se>=1):j.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=se>=2);let me=null,ye={};const Ce=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),_e=new Pt().fromArray(Ce),$=new Pt().fromArray(X);function he(U,ge,J,oe){const Re=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(U,Ae),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let le=0;le<J;le++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ge+le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Ae}const Te={};Te[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),a.setFunc(Ys),Ke(!1),Je(Vu),Me(n.CULL_FACE),P(vr);function Me(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ue(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function He(U,ge){return f[U]!==ge?(n.bindFramebuffer(U,ge),f[U]=ge,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ge(U,ge){let J=m,oe=!1;if(U){J=h.get(ge),J===void 0&&(J=[],h.set(ge,J));const Re=U.textures;if(J.length!==Re.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,le=Re.length;Ae<le;Ae++)J[Ae]=n.COLOR_ATTACHMENT0+Ae;J.length=Re.length,oe=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,oe=!0);oe&&n.drawBuffers(J)}function lt(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const $e={[Lr]:n.FUNC_ADD,[F_]:n.FUNC_SUBTRACT,[O_]:n.FUNC_REVERSE_SUBTRACT};$e[B_]=n.MIN,$e[z_]=n.MAX;const ht={[k_]:n.ZERO,[H_]:n.ONE,[V_]:n.SRC_COLOR,[oc]:n.SRC_ALPHA,[Y_]:n.SRC_ALPHA_SATURATE,[q_]:n.DST_COLOR,[W_]:n.DST_ALPHA,[G_]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[j_]:n.ONE_MINUS_DST_COLOR,[X_]:n.ONE_MINUS_DST_ALPHA,[$_]:n.CONSTANT_COLOR,[K_]:n.ONE_MINUS_CONSTANT_COLOR,[Z_]:n.CONSTANT_ALPHA,[J_]:n.ONE_MINUS_CONSTANT_ALPHA};function P(U,ge,J,oe,Re,Ae,le,ee,Be,ze){if(U===vr){v===!0&&(Ue(n.BLEND),v=!1);return}if(v===!1&&(Me(n.BLEND),v=!0),U!==N_){if(U!==p||ze!==E){if((d!==Lr||y!==Lr)&&(n.blendEquation(n.FUNC_ADD),d=Lr,y=Lr),ze)switch(U){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.ONE,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,C=null,A=null,R.set(0,0,0),L=0,p=U,E=ze}return}Re=Re||ge,Ae=Ae||J,le=le||oe,(ge!==d||Re!==y)&&(n.blendEquationSeparate($e[ge],$e[Re]),d=ge,y=Re),(J!==w||oe!==b||Ae!==C||le!==A)&&(n.blendFuncSeparate(ht[J],ht[oe],ht[Ae],ht[le]),w=J,b=oe,C=Ae,A=le),(ee.equals(R)===!1||Be!==L)&&(n.blendColor(ee.r,ee.g,ee.b,Be),R.copy(ee),L=Be),p=U,E=!1}function Lt(U,ge){U.side===gi?Ue(n.CULL_FACE):Me(n.CULL_FACE);let J=U.side===bn;ge&&(J=!J),Ke(J),U.blending===Ps&&U.transparent===!1?P(vr):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const oe=U.stencilWrite;o.setTest(oe),oe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function Je(U){U!==L_?(Me(n.CULL_FACE),U!==D&&(U===Vu?n.cullFace(n.BACK):U===U_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),D=U}function Fe(U){U!==W&&(Z&&n.lineWidth(U),W=U)}function ct(U,ge,J){U?(Me(n.POLYGON_OFFSET_FILL),(H!==ge||te!==J)&&(n.polygonOffset(ge,J),H=ge,te=J)):Ue(n.POLYGON_OFFSET_FILL)}function De(U){U?Me(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function T(U){U===void 0&&(U=n.TEXTURE0+re-1),me!==U&&(n.activeTexture(U),me=U)}function g(U,ge,J){J===void 0&&(me===null?J=n.TEXTURE0+re-1:J=me);let oe=ye[J];oe===void 0&&(oe={type:void 0,texture:void 0},ye[J]=oe),(oe.type!==U||oe.texture!==ge)&&(me!==J&&(n.activeTexture(J),me=J),n.bindTexture(U,ge||Te[U]),oe.type=U,oe.texture=ge)}function B(){const U=ye[me];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(U){_e.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function ve(U){$.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function N(U,ge){let J=c.get(ge);J===void 0&&(J=new WeakMap,c.set(ge,J));let oe=J.get(U);oe===void 0&&(oe=n.getUniformBlockIndex(ge,U.name),J.set(U,oe))}function ae(U,ge){const oe=c.get(ge).get(U);l.get(ge)!==oe&&(n.uniformBlockBinding(ge,oe,U.__bindingPointIndex),l.set(ge,oe))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,ye={},f={},h=new WeakMap,m=[],_=null,v=!1,p=null,d=null,w=null,b=null,y=null,C=null,A=null,R=new mt(0,0,0),L=0,E=!1,M=null,D=null,W=null,H=null,te=null,_e.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Me,disable:Ue,bindFramebuffer:He,drawBuffers:Ge,useProgram:lt,setBlending:P,setMaterial:Lt,setFlipSided:Ke,setCullFace:Je,setLineWidth:Fe,setPolygonOffset:ct,setScissorTest:De,activeTexture:T,bindTexture:g,unbindTexture:B,compressedTexImage2D:ne,compressedTexImage3D:ce,texImage2D:pe,texImage3D:be,updateUBOMapping:N,uniformBlockBinding:ae,texStorage2D:Q,texStorage3D:K,texSubImage2D:ie,texSubImage3D:Ne,compressedTexSubImage2D:Se,compressedTexSubImage3D:fe,scissor:xe,viewport:ve,reset:Qe}}function JS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):Pa("canvas")}function v(T,g,B){let ne=1;const ce=De(T);if((ce.width>B||ce.height>B)&&(ne=B/Math.max(ce.width,ce.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ie=Math.floor(ne*ce.width),Ne=Math.floor(ne*ce.height);f===void 0&&(f=_(ie,Ne));const Se=g?_(ie,Ne):f;return Se.width=ie,Se.height=Ne,Se.getContext("2d").drawImage(T,0,0,ie,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ie+"x"+Ne+")."),Se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,g,B,ne,ce=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=g;if(g===n.RED&&(B===n.FLOAT&&(ie=n.R32F),B===n.HALF_FLOAT&&(ie=n.R16F),B===n.UNSIGNED_BYTE&&(ie=n.R8)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ie=n.R8UI),B===n.UNSIGNED_SHORT&&(ie=n.R16UI),B===n.UNSIGNED_INT&&(ie=n.R32UI),B===n.BYTE&&(ie=n.R8I),B===n.SHORT&&(ie=n.R16I),B===n.INT&&(ie=n.R32I)),g===n.RG&&(B===n.FLOAT&&(ie=n.RG32F),B===n.HALF_FLOAT&&(ie=n.RG16F),B===n.UNSIGNED_BYTE&&(ie=n.RG8)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(ie=n.RG8UI),B===n.UNSIGNED_SHORT&&(ie=n.RG16UI),B===n.UNSIGNED_INT&&(ie=n.RG32UI),B===n.BYTE&&(ie=n.RG8I),B===n.SHORT&&(ie=n.RG16I),B===n.INT&&(ie=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),B===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),B===n.UNSIGNED_INT&&(ie=n.RGB32UI),B===n.BYTE&&(ie=n.RGB8I),B===n.SHORT&&(ie=n.RGB16I),B===n.INT&&(ie=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),B===n.UNSIGNED_INT&&(ie=n.RGBA32UI),B===n.BYTE&&(ie=n.RGBA8I),B===n.SHORT&&(ie=n.RGBA16I),B===n.INT&&(ie=n.RGBA32I)),g===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),g===n.RGBA){const Ne=ce?zo:gt.getTransfer(ne);B===n.FLOAT&&(ie=n.RGBA32F),B===n.HALF_FLOAT&&(ie=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ie=Ne===Rt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(T,g){let B;return T?g===null||g===Zr||g===Zs?B=n.DEPTH24_STENCIL8:g===zi?B=n.DEPTH32F_STENCIL8:g===Ra&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Zr||g===Zs?B=n.DEPTH_COMPONENT24:g===zi?B=n.DEPTH_COMPONENT32F:g===Ra&&(B=n.DEPTH_COMPONENT16),B}function C(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ui&&T.minFilter!==oi?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){const g=T.target;g.removeEventListener("dispose",A),L(g),g.isVideoTexture&&u.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),M(g)}function L(T){const g=i.get(T);if(g.__webglInit===void 0)return;const B=T.source,ne=h.get(B);if(ne){const ce=ne[g.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&E(T),Object.keys(ne).length===0&&h.delete(B)}i.remove(T)}function E(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const B=T.source,ne=h.get(B);delete ne[g.__cacheKey],a.memory.textures--}function M(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(g.__webglFramebuffer[ne]))for(let ce=0;ce<g.__webglFramebuffer[ne].length;ce++)n.deleteFramebuffer(g.__webglFramebuffer[ne][ce]);else n.deleteFramebuffer(g.__webglFramebuffer[ne]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[ne])}else{if(Array.isArray(g.__webglFramebuffer))for(let ne=0;ne<g.__webglFramebuffer.length;ne++)n.deleteFramebuffer(g.__webglFramebuffer[ne]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ne=0;ne<g.__webglColorRenderbuffer.length;ne++)g.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[ne]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=T.textures;for(let ne=0,ce=B.length;ne<ce;ne++){const ie=i.get(B[ne]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(B[ne])}i.remove(T)}let D=0;function W(){D=0}function H(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function te(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function re(T,g){const B=i.get(T);if(T.isVideoTexture&&Fe(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,T,g);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function Z(T,g){const B=i.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function se(T,g){const B=i.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,g);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function j(T,g){const B=i.get(T);if(T.version>0&&B.__version!==T.version){he(B,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const me={[gc]:n.REPEAT,[Or]:n.CLAMP_TO_EDGE,[xc]:n.MIRRORED_REPEAT},ye={[ui]:n.NEAREST,[ov]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[ol]:n.LINEAR_MIPMAP_NEAREST,[dr]:n.LINEAR_MIPMAP_LINEAR},Ce={[hv]:n.NEVER,[vv]:n.ALWAYS,[fv]:n.LESS,[hd]:n.LEQUAL,[dv]:n.EQUAL,[_v]:n.GEQUAL,[pv]:n.GREATER,[mv]:n.NOTEQUAL};function X(T,g){if(g.type===zi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===oi||g.magFilter===ol||g.magFilter===qa||g.magFilter===dr||g.minFilter===oi||g.minFilter===ol||g.minFilter===qa||g.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,me[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,me[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,me[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ye[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ui||g.minFilter!==qa&&g.minFilter!==dr||g.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function _e(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));const ne=g.source;let ce=h.get(ne);ce===void 0&&(ce={},h.set(ne,ce));const ie=te(g);if(ie!==T.__cacheKey){ce[ie]===void 0&&(ce[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ce[ie].usedTimes++;const Ne=ce[T.__cacheKey];Ne!==void 0&&(ce[T.__cacheKey].usedTimes--,Ne.usedTimes===0&&E(g)),T.__cacheKey=ie,T.__webglTexture=ce[ie].texture}return B}function $(T,g,B){let ne=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ne=n.TEXTURE_3D);const ce=_e(T,g),ie=g.source;t.bindTexture(ne,T.__webglTexture,n.TEXTURE0+B);const Ne=i.get(ie);if(ie.version!==Ne.__version||ce===!0){t.activeTexture(n.TEXTURE0+B);const Se=gt.getPrimaries(gt.workingColorSpace),fe=g.colorSpace===cr?null:gt.getPrimaries(g.colorSpace),Q=g.colorSpace===cr||Se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let K=v(g.image,!1,r.maxTextureSize);K=ct(g,K);const pe=s.convert(g.format,g.colorSpace),be=s.convert(g.type);let xe=b(g.internalFormat,pe,be,g.colorSpace,g.isVideoTexture);X(ne,g);let ve;const N=g.mipmaps,ae=g.isVideoTexture!==!0,Qe=Ne.__version===void 0||ce===!0,U=ie.dataReady,ge=C(g,K);if(g.isDepthTexture)xe=y(g.format===Js,g.type),Qe&&(ae?t.texStorage2D(n.TEXTURE_2D,1,xe,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,xe,K.width,K.height,0,pe,be,null));else if(g.isDataTexture)if(N.length>0){ae&&Qe&&t.texStorage2D(n.TEXTURE_2D,ge,xe,N[0].width,N[0].height);for(let J=0,oe=N.length;J<oe;J++)ve=N[J],ae?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve.width,ve.height,pe,be,ve.data):t.texImage2D(n.TEXTURE_2D,J,xe,ve.width,ve.height,0,pe,be,ve.data);g.generateMipmaps=!1}else ae?(Qe&&t.texStorage2D(n.TEXTURE_2D,ge,xe,K.width,K.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,pe,be,K.data)):t.texImage2D(n.TEXTURE_2D,0,xe,K.width,K.height,0,pe,be,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ae&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,xe,N[0].width,N[0].height,K.depth);for(let J=0,oe=N.length;J<oe;J++)if(ve=N[J],g.format!==li)if(pe!==null)if(ae){if(U)if(g.layerUpdates.size>0){const Re=gh(ve.width,ve.height,g.format,g.type);for(const Ae of g.layerUpdates){const le=ve.data.subarray(Ae*Re/ve.data.BYTES_PER_ELEMENT,(Ae+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ae,ve.width,ve.height,1,pe,le)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,K.depth,pe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,xe,ve.width,ve.height,K.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,K.depth,pe,be,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,xe,ve.width,ve.height,K.depth,0,pe,be,ve.data)}else{ae&&Qe&&t.texStorage2D(n.TEXTURE_2D,ge,xe,N[0].width,N[0].height);for(let J=0,oe=N.length;J<oe;J++)ve=N[J],g.format!==li?pe!==null?ae?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ve.width,ve.height,pe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,J,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve.width,ve.height,pe,be,ve.data):t.texImage2D(n.TEXTURE_2D,J,xe,ve.width,ve.height,0,pe,be,ve.data)}else if(g.isDataArrayTexture)if(ae){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,xe,K.width,K.height,K.depth),U)if(g.layerUpdates.size>0){const J=gh(K.width,K.height,g.format,g.type);for(const oe of g.layerUpdates){const Re=K.data.subarray(oe*J/K.data.BYTES_PER_ELEMENT,(oe+1)*J/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,K.width,K.height,1,pe,be,Re)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,pe,be,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,pe,be,K.data);else if(g.isData3DTexture)ae?(Qe&&t.texStorage3D(n.TEXTURE_3D,ge,xe,K.width,K.height,K.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,pe,be,K.data)):t.texImage3D(n.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,pe,be,K.data);else if(g.isFramebufferTexture){if(Qe)if(ae)t.texStorage2D(n.TEXTURE_2D,ge,xe,K.width,K.height);else{let J=K.width,oe=K.height;for(let Re=0;Re<ge;Re++)t.texImage2D(n.TEXTURE_2D,Re,xe,J,oe,0,pe,be,null),J>>=1,oe>>=1}}else if(N.length>0){if(ae&&Qe){const J=De(N[0]);t.texStorage2D(n.TEXTURE_2D,ge,xe,J.width,J.height)}for(let J=0,oe=N.length;J<oe;J++)ve=N[J],ae?U&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,pe,be,ve):t.texImage2D(n.TEXTURE_2D,J,xe,pe,be,ve);g.generateMipmaps=!1}else if(ae){if(Qe){const J=De(K);t.texStorage2D(n.TEXTURE_2D,ge,xe,J.width,J.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,be,K)}else t.texImage2D(n.TEXTURE_2D,0,xe,pe,be,K);p(g)&&d(ne),Ne.__version=ie.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function he(T,g,B){if(g.image.length!==6)return;const ne=_e(T,g),ce=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const ie=i.get(ce);if(ce.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+B);const Ne=gt.getPrimaries(gt.workingColorSpace),Se=g.colorSpace===cr?null:gt.getPrimaries(g.colorSpace),fe=g.colorSpace===cr||Ne===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Q=g.isCompressedTexture||g.image[0].isCompressedTexture,K=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let oe=0;oe<6;oe++)!Q&&!K?pe[oe]=v(g.image[oe],!0,r.maxCubemapSize):pe[oe]=K?g.image[oe].image:g.image[oe],pe[oe]=ct(g,pe[oe]);const be=pe[0],xe=s.convert(g.format,g.colorSpace),ve=s.convert(g.type),N=b(g.internalFormat,xe,ve,g.colorSpace),ae=g.isVideoTexture!==!0,Qe=ie.__version===void 0||ne===!0,U=ce.dataReady;let ge=C(g,be);X(n.TEXTURE_CUBE_MAP,g);let J;if(Q){ae&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,N,be.width,be.height);for(let oe=0;oe<6;oe++){J=pe[oe].mipmaps;for(let Re=0;Re<J.length;Re++){const Ae=J[Re];g.format!==li?xe!==null?ae?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,0,0,Ae.width,Ae.height,xe,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,N,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,0,0,Ae.width,Ae.height,xe,ve,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,N,Ae.width,Ae.height,0,xe,ve,Ae.data)}}}else{if(J=g.mipmaps,ae&&Qe){J.length>0&&ge++;const oe=De(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,N,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(K){ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,pe[oe].width,pe[oe].height,xe,ve,pe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,N,pe[oe].width,pe[oe].height,0,xe,ve,pe[oe].data);for(let Re=0;Re<J.length;Re++){const le=J[Re].image[oe].image;ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,0,0,le.width,le.height,xe,ve,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,N,le.width,le.height,0,xe,ve,le.data)}}else{ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe,ve,pe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,N,xe,ve,pe[oe]);for(let Re=0;Re<J.length;Re++){const Ae=J[Re];ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,0,0,xe,ve,Ae.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,N,xe,ve,Ae.image[oe])}}}p(g)&&d(n.TEXTURE_CUBE_MAP),ie.__version=ce.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Te(T,g,B,ne,ce,ie){const Ne=s.convert(B.format,B.colorSpace),Se=s.convert(B.type),fe=b(B.internalFormat,Ne,Se,B.colorSpace),Q=i.get(g),K=i.get(B);if(K.__renderTarget=g,!Q.__hasExternalTextures){const pe=Math.max(1,g.width>>ie),be=Math.max(1,g.height>>ie);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ie,fe,pe,be,g.depth,0,Ne,Se,null):t.texImage2D(ce,ie,fe,pe,be,0,Ne,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Je(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ce,K.__webglTexture,0,Ke(g)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ce,K.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(T,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const ne=g.depthTexture,ce=ne&&ne.isDepthTexture?ne.type:null,ie=y(g.stencilBuffer,ce),Ne=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=Ke(g);Je(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ie,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ie,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ie,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,T)}else{const ne=g.textures;for(let ce=0;ce<ne.length;ce++){const ie=ne[ce],Ne=s.convert(ie.format,ie.colorSpace),Se=s.convert(ie.type),fe=b(ie.internalFormat,Ne,Se,ie.colorSpace),Q=Ke(g);B&&Je(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,fe,g.width,g.height):Je(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,fe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,fe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(g.depthTexture);ne.__renderTarget=g,(!ne.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const ce=ne.__webglTexture,ie=Ke(g);if(g.depthTexture.format===Ds)Je(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(g.depthTexture.format===Js)Je(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function He(T){const g=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const ne=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ne){const ce=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ne.removeEventListener("dispose",ce)};ne.addEventListener("dispose",ce),g.__depthDisposeCallback=ce}g.__boundDepthTexture=ne}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ue(g.__webglFramebuffer,T)}else if(B){g.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[ne]),g.__webglDepthbuffer[ne]===void 0)g.__webglDepthbuffer[ne]=n.createRenderbuffer(),Me(g.__webglDepthbuffer[ne],T,!1);else{const ce=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Me(g.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(T,g,B){const ne=i.get(T);g!==void 0&&Te(ne.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&He(T)}function lt(T){const g=T.texture,B=i.get(T),ne=i.get(g);T.addEventListener("dispose",R);const ce=T.textures,ie=T.isWebGLCubeRenderTarget===!0,Ne=ce.length>1;if(Ne||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=g.version,a.memory.textures++),ie){B.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Se]=[];for(let fe=0;fe<g.mipmaps.length;fe++)B.__webglFramebuffer[Se][fe]=n.createFramebuffer()}else B.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Se=0;Se<g.mipmaps.length;Se++)B.__webglFramebuffer[Se]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let Se=0,fe=ce.length;Se<fe;Se++){const Q=i.get(ce[Se]);Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Je(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Se=0;Se<ce.length;Se++){const fe=ce[Se];B.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Se]);const Q=s.convert(fe.format,fe.colorSpace),K=s.convert(fe.type),pe=b(fe.internalFormat,Q,K,fe.colorSpace,T.isXRRenderTarget===!0),be=Ke(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,pe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,B.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),X(n.TEXTURE_CUBE_MAP,g);for(let Se=0;Se<6;Se++)if(g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)Te(B.__webglFramebuffer[Se][fe],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,fe);else Te(B.__webglFramebuffer[Se],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);p(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Se=0,fe=ce.length;Se<fe;Se++){const Q=ce[Se],K=i.get(Q);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),X(n.TEXTURE_2D,Q),Te(B.__webglFramebuffer,T,Q,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),p(Q)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ne.__webglTexture),X(Se,g),g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)Te(B.__webglFramebuffer[fe],T,g,n.COLOR_ATTACHMENT0,Se,fe);else Te(B.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,Se,0);p(g)&&d(Se),t.unbindTexture()}T.depthBuffer&&He(T)}function $e(T){const g=T.textures;for(let B=0,ne=g.length;B<ne;B++){const ce=g[B];if(p(ce)){const ie=w(T),Ne=i.get(ce).__webglTexture;t.bindTexture(ie,Ne),d(ie),t.unbindTexture()}}}const ht=[],P=[];function Lt(T){if(T.samples>0){if(Je(T)===!1){const g=T.textures,B=T.width,ne=T.height;let ce=n.COLOR_BUFFER_BIT;const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(T),Se=g.length>1;if(Se)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[fe]);const Q=i.get(g[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,B,ne,0,0,B,ne,ce,n.NEAREST),l===!0&&(ht.length=0,P.length=0,ht.push(n.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ht.push(ie),P.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[fe]);const Q=i.get(g[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ke(T){return Math.min(r.maxSamples,T.samples)}function Je(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Fe(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function ct(T,g){const B=T.colorSpace,ne=T.format,ce=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Qs&&B!==cr&&(gt.getTransfer(B)===Rt?(ne!==li||ce!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function De(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=Ge,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Je}function QS(n,e){function t(i,r=cr){let s;const a=gt.getTransfer(r);if(i===ji)return n.UNSIGNED_BYTE;if(i===du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.BYTE;if(i===td)return n.SHORT;if(i===Ra)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===Zr)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===Ha)return n.HALF_FLOAT;if(i===id)return n.ALPHA;if(i===rd)return n.RGB;if(i===li)return n.RGBA;if(i===sd)return n.LUMINANCE;if(i===ad)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===od)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===ld)return n.RG;if(i===_u)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===wo||i===Ao||i===Ro||i===Co)if(a===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===Sc||i===yc||i===Ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===Tc||i===wc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bc||i===Tc)return a===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ac||i===Rc||i===Cc||i===Pc||i===Dc||i===Lc||i===Uc||i===Ic||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ac)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ic)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===Hc||i===Vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Po)return a===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cd||i===Gc||i===Wc||i===Xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ey={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
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

}`;class iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new mn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends es{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const v=new iy,p=t.getContextAttributes();let d=null,w=null;const b=[],y=[],C=new nt;let A=null;const R=new Xn;R.viewport=new Pt;const L=new Xn;L.viewport=new Pt;const E=[R,L],M=new Eg;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=b[$];return he===void 0&&(he=new Nl,b[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=b[$];return he===void 0&&(he=new Nl,b[$]=he),he.getGripSpace()},this.getHand=function($){let he=b[$];return he===void 0&&(he=new Nl,b[$]=he),he.getHandSpace()};function H($){const he=y.indexOf($.inputSource);if(he===-1)return;const Te=b[he];Te!==void 0&&(Te.update($.inputSource,$.frame,c||a),Te.dispatchEvent({type:$.type,data:$.inputSource}))}function te(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",re);for(let $=0;$<b.length;$++){const he=y[$];he!==null&&(y[$]=null,b[$].disconnect(he))}D=null,W=null,v.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,w=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",te),r.addEventListener("inputsourceschange",re),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Te=null,Me=null,Ue=null;p.depth&&(Ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=p.stencil?Js:Ds,Me=p.stencil?Zs:Zr);const He={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(He),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Jr(h.textureWidth,h.textureHeight,{format:li,type:ji,depthTexture:new bd(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Jr(m.framebufferWidth,m.framebufferHeight,{format:li,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re($){for(let he=0;he<$.removed.length;he++){const Te=$.removed[he],Me=y.indexOf(Te);Me>=0&&(y[Me]=null,b[Me].disconnect(Te))}for(let he=0;he<$.added.length;he++){const Te=$.added[he];let Me=y.indexOf(Te);if(Me===-1){for(let He=0;He<b.length;He++)if(He>=y.length){y.push(Te),Me=He;break}else if(y[He]===null){y[He]=Te,Me=He;break}if(Me===-1)break}const Ue=b[Me];Ue&&Ue.connect(Te)}}const Z=new k,se=new k;function j($,he,Te){Z.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(Te.matrixWorld);const Me=Z.distanceTo(se),Ue=he.projectionMatrix.elements,He=Te.projectionMatrix.elements,Ge=Ue[14]/(Ue[10]-1),lt=Ue[14]/(Ue[10]+1),$e=(Ue[9]+1)/Ue[5],ht=(Ue[9]-1)/Ue[5],P=(Ue[8]-1)/Ue[0],Lt=(He[8]+1)/He[0],Ke=Ge*P,Je=Ge*Lt,Fe=Me/(-P+Lt),ct=Fe*-P;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(Fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const De=Ge+Fe,T=lt+Fe,g=Ke-ct,B=Je+(Me-ct),ne=$e*lt/T*De,ce=ht*lt/T*De;$.projectionMatrix.makePerspective(g,B,ne,ce,De,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let he=$.near,Te=$.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),M.near=L.near=R.near=he,M.far=L.far=R.far=Te,(D!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,W=M.far),R.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const Me=$.parent,Ue=M.cameras;me(M,Me);for(let He=0;He<Ue.length;He++)me(Ue[He],Me);Ue.length===2?j(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),ye($,M,Me)};function ye($,he,Te){Te===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(Te.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ca*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ce=null;function X($,he){if(u=he.getViewerPose(c||a),_=he,u!==null){const Te=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Me=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let He=0;He<Te.length;He++){const Ge=Te[He];let lt=null;if(m!==null)lt=m.getViewport(Ge);else{const ht=f.getViewSubImage(h,Ge);lt=ht.viewport,He===0&&(e.setRenderTargetTextures(w,ht.colorTexture,h.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(w))}let $e=E[He];$e===void 0&&($e=new Xn,$e.layers.enable(He),$e.viewport=new Pt,E[He]=$e),$e.matrix.fromArray(Ge.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ge.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(lt.x,lt.y,lt.width,lt.height),He===0&&(M.matrix.copy($e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push($e)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const He=f.getDepthInformation(Te[0]);He&&He.isValid&&He.texture&&v.init(e,He,r.renderState)}}for(let Te=0;Te<b.length;Te++){const Me=y[Te],Ue=b[Te];Me!==null&&Ue!==void 0&&Ue.update(Me,he,c||a)}Ce&&Ce($,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const _e=new wd;_e.setAnimationLoop(X),this.setAnimationLoop=function($){Ce=$},this.dispose=function(){}}}const Pr=new Ei,sy=new Nt;function ay(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Sd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,b,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,w,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===bn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===bn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),b=w.envMap,y=w.envMapRotation;b&&(p.envMap.value=b,Pr.copy(y),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),p.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(Pr)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oy(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const y=b.program;i.uniformBlockBinding(w,y)}function c(w,b){let y=r[w.id];y===void 0&&(_(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",p));const C=b.program;i.updateUBOMapping(w,C);const A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function u(w){const b=f();w.__bindingPointIndex=b;const y=n.createBuffer(),C=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=r[w.id],y=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,R=y.length;A<R;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,M=L.length;E<M;E++){const D=L[E];if(m(D,A,E,C)===!0){const W=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let te=0;for(let re=0;re<H.length;re++){const Z=H[re],se=v(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,W+te,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,te),te+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,b,y,C){const A=w.value,R=b+"_"+y;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const L=C[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(w){const b=w.uniforms;let y=0;const C=16;for(let R=0,L=b.length;R<L;R++){const E=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,D=E.length;M<D;M++){const W=E[M],H=Array.isArray(W.value)?W.value:[W.value];for(let te=0,re=H.length;te<re;te++){const Z=H[te],se=v(Z),j=y%C,me=j%se.boundary,ye=j+me;y+=me,ye!==0&&C-ye<se.storage&&(y+=C-ye),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=se.storage}}}const A=y%C;return A>0&&(y+=C-A),w.__size=y,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class ly{constructor(e={}){const{canvas:t=Iv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=gr,this.toneMappingExposure=1;const y=this;let C=!1,A=0,R=0,L=null,E=-1,M=null;const D=new Pt,W=new Pt;let H=null;const te=new mt(0);let re=0,Z=t.width,se=t.height,j=1,me=null,ye=null;const Ce=new Pt(0,0,Z,se),X=new Pt(0,0,Z,se);let _e=!1;const $=new Su;let he=!1,Te=!1;this.transmissionResolutionScale=1;const Me=new Nt,Ue=new Nt,He=new k,Ge=new Pt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function ht(){return L===null?j:1}let P=i;function Lt(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hu}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),P===null){const O="webgl2";if(P=Lt(O,S),P===null)throw Lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ke,Je,Fe,ct,De,T,g,B,ne,ce,ie,Ne,Se,fe,Q,K,pe,be,xe,ve,N,ae,Qe,U;function ge(){Ke=new vM(P),Ke.init(),ae=new QS(P,Ke),Je=new hM(P,Ke,e,ae),Fe=new ZS(P,Ke),Je.reverseDepthBuffer&&h&&Fe.buffers.depth.setReversed(!0),ct=new MM(P),De=new BS,T=new JS(P,Ke,Fe,De,Je,ae,ct),g=new dM(y),B=new _M(y),ne=new Ag(P),Qe=new cM(P,ne),ce=new gM(P,ne,ct,Qe),ie=new yM(P,ce,ne,ct),xe=new SM(P,Je,T),K=new fM(De),Ne=new OS(y,g,B,Ke,Je,Qe,K),Se=new ay(y,De),fe=new kS,Q=new qS(Ke),be=new lM(y,g,B,Fe,ie,m,l),pe=new $S(y,ie,Je),U=new oy(P,ct,Je,Fe),ve=new uM(P,Ke,ct),N=new xM(P,Ke,ct),ct.programs=Ne.programs,y.capabilities=Je,y.extensions=Ke,y.properties=De,y.renderLists=fe,y.shadowMap=pe,y.state=Fe,y.info=ct}ge();const J=new ry(y,P);this.xr=J,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(Z,se,!1))},this.getSize=function(S){return S.set(Z,se)},this.setSize=function(S,O,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,se=O,t.width=Math.floor(S*j),t.height=Math.floor(O*j),q===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Z*j,se*j).floor()},this.setDrawingBufferSize=function(S,O,q){Z=S,se=O,j=q,t.width=Math.floor(S*q),t.height=Math.floor(O*q),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,O,q,Y){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,O,q,Y),Fe.viewport(D.copy(Ce).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(X)},this.setScissor=function(S,O,q,Y){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,O,q,Y),Fe.scissor(W.copy(X).multiplyScalar(j).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(S){Fe.setScissorTest(_e=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){ye=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(S=!0,O=!0,q=!0){let Y=0;if(S){let I=!1;if(L!==null){const de=L.texture.format;I=de===vu||de===_u||de===mu}if(I){const de=L.texture.type,Ee=de===ji||de===Zr||de===Ra||de===Zs||de===du||de===pu,Ie=be.getClearColor(),Oe=be.getClearAlpha(),Ve=Ie.r,Ze=Ie.g,qe=Ie.b;Ee?(_[0]=Ve,_[1]=Ze,_[2]=qe,_[3]=Oe,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=Ve,v[1]=Ze,v[2]=qe,v[3]=Oe,P.clearBufferiv(P.COLOR,0,v))}else Y|=P.COLOR_BUFFER_BIT}O&&(Y|=P.DEPTH_BUFFER_BIT),q&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),be.dispose(),fe.dispose(),Q.dispose(),De.dispose(),g.dispose(),B.dispose(),ie.dispose(),Qe.dispose(),U.dispose(),Ne.dispose(),J.dispose(),J.removeEventListener("sessionstart",kt),J.removeEventListener("sessionend",Ji),Tn.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=ct.autoReset,O=pe.enabled,q=pe.autoUpdate,Y=pe.needsUpdate,I=pe.type;ge(),ct.autoReset=S,pe.enabled=O,pe.autoUpdate=q,pe.needsUpdate=Y,pe.type=I}function Ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){const O=S.target;O.removeEventListener("dispose",le),ee(O)}function ee(S){Be(S),De.remove(S)}function Be(S){const O=De.get(S).programs;O!==void 0&&(O.forEach(function(q){Ne.releaseProgram(q)}),S.isShaderMaterial&&Ne.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,q,Y,I,de){O===null&&(O=lt);const Ee=I.isMesh&&I.matrixWorld.determinant()<0,Ie=xt(S,O,q,Y,I);Fe.setMaterial(Y,Ee);let Oe=q.index,Ve=1;if(Y.wireframe===!0){if(Oe=ce.getWireframeAttribute(q),Oe===void 0)return;Ve=2}const Ze=q.drawRange,qe=q.attributes.position;let pt=Ze.start*Ve,St=(Ze.start+Ze.count)*Ve;de!==null&&(pt=Math.max(pt,de.start*Ve),St=Math.min(St,(de.start+de.count)*Ve)),Oe!==null?(pt=Math.max(pt,0),St=Math.min(St,Oe.count)):qe!=null&&(pt=Math.max(pt,0),St=Math.min(St,qe.count));const Ht=St-pt;if(Ht<0||Ht===1/0)return;Qe.setup(I,Y,Ie,q,Oe);let Ft,_t=ve;if(Oe!==null&&(Ft=ne.get(Oe),_t=N,_t.setIndex(Ft)),I.isMesh)Y.wireframe===!0?(Fe.setLineWidth(Y.wireframeLinewidth*ht()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(I.isLine){let je=Y.linewidth;je===void 0&&(je=1),Fe.setLineWidth(je*ht()),I.isLineSegments?_t.setMode(P.LINES):I.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else I.isPoints?_t.setMode(P.POINTS):I.isSprite&&_t.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)_t.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))_t.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const je=I._multiDrawStarts,Jt=I._multiDrawCounts,yt=I._multiDrawCount,Kn=Oe?ne.get(Oe).bytesPerElement:1,rs=De.get(Y).currentProgram.getUniforms();for(let wn=0;wn<yt;wn++)rs.setValue(P,"_gl_DrawID",wn),_t.render(je[wn]/Kn,Jt[wn])}else if(I.isInstancedMesh)_t.renderInstances(pt,Ht,I.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Jt=Math.min(q.instanceCount,je);_t.renderInstances(pt,Ht,Jt)}else _t.render(pt,Ht)};function ze(S,O,q){S.transparent===!0&&S.side===gi&&S.forceSinglePass===!1?(S.side=bn,S.needsUpdate=!0,Fn(S,O,q),S.side=Sr,S.needsUpdate=!0,Fn(S,O,q),S.side=gi):Fn(S,O,q)}this.compile=function(S,O,q=null){q===null&&(q=S),d=Q.get(q),d.init(O),b.push(d),q.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),S!==q&&S.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const Y=new Set;return S.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const de=I.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ie=de[Ee];ze(Ie,q,I),Y.add(Ie)}else ze(de,q,I),Y.add(de)}),b.pop(),d=null,Y},this.compileAsync=function(S,O,q=null){const Y=this.compile(S,O,q);return new Promise(I=>{function de(){if(Y.forEach(function(Ee){De.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){I(S);return}setTimeout(de,10)}Ke.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let bt=null;function dt(S){bt&&bt(S)}function kt(){Tn.stop()}function Ji(){Tn.start()}const Tn=new wd;Tn.setAnimationLoop(dt),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(S){bt=S,J.setAnimationLoop(S),S===null?Tn.stop():Tn.start()},J.addEventListener("sessionstart",kt),J.addEventListener("sessionend",Ji),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,O,L),d=Q.get(S,b.length),d.init(O),b.push(d),Ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Ue),Te=this.localClippingEnabled,he=K.init(this.clippingPlanes,Te),p=fe.get(S,w.length),p.init(),w.push(p),J.enabled===!0&&J.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&Qi(de,O,-1/0,y.sortObjects)}Qi(S,O,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(me,ye),$e=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,$e&&be.addToRenderList(p,S),this.info.render.frame++,he===!0&&K.beginShadows();const q=d.state.shadowsArray;pe.render(q,S,O),he===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,I=p.transmissive;if(d.setupLights(),O.isArrayCamera){const de=O.cameras;if(I.length>0)for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){const Oe=de[Ee];ns(Y,I,S,Oe)}$e&&be.render(S);for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){const Oe=de[Ee];ts(p,S,Oe,Oe.viewport)}}else I.length>0&&ns(Y,I,S,O),$e&&be.render(S),ts(p,S,O);L!==null&&R===0&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,O),Qe.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],he===!0&&K.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Qi(S,O,q,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){Y&&Ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ue);const Ee=ie.update(S),Ie=S.material;Ie.visible&&p.push(S,Ee,Ie,q,Ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const Ee=ie.update(S),Ie=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ge.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ge.copy(Ee.boundingSphere.center)),Ge.applyMatrix4(S.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ie)){const Oe=Ee.groups;for(let Ve=0,Ze=Oe.length;Ve<Ze;Ve++){const qe=Oe[Ve],pt=Ie[qe.materialIndex];pt&&pt.visible&&p.push(S,Ee,pt,q,Ge.z,qe)}}else Ie.visible&&p.push(S,Ee,Ie,q,Ge.z,null)}}const de=S.children;for(let Ee=0,Ie=de.length;Ee<Ie;Ee++)Qi(de[Ee],O,q,Y)}function ts(S,O,q,Y){const I=S.opaque,de=S.transmissive,Ee=S.transparent;d.setupLightsView(q),he===!0&&K.setGlobalState(y.clippingPlanes,q),Y&&Fe.viewport(D.copy(Y)),I.length>0&&er(I,O,q),de.length>0&&er(de,O,q),Ee.length>0&&er(Ee,O,q),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ns(S,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Jr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Ha:ji,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const de=d.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||D;de.setSize(Ee.z*y.transmissionResolutionScale,Ee.w*y.transmissionResolutionScale);const Ie=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(te),re=y.getClearAlpha(),re<1&&y.setClearColor(16777215,.5),y.clear(),$e&&be.render(q);const Oe=y.toneMapping;y.toneMapping=gr;const Ve=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),he===!0&&K.setGlobalState(y.clippingPlanes,Y),er(S,q,Y),T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let qe=0,pt=O.length;qe<pt;qe++){const St=O[qe],Ht=St.object,Ft=St.geometry,_t=St.material,je=St.group;if(_t.side===gi&&Ht.layers.test(Y.layers)){const Jt=_t.side;_t.side=bn,_t.needsUpdate=!0,$n(Ht,q,Y,Ft,_t,je),_t.side=Jt,_t.needsUpdate=!0,Ze=!0}}Ze===!0&&(T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de))}y.setRenderTarget(Ie),y.setClearColor(te,re),Ve!==void 0&&(Y.viewport=Ve),y.toneMapping=Oe}function er(S,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let I=0,de=S.length;I<de;I++){const Ee=S[I],Ie=Ee.object,Oe=Ee.geometry,Ve=Y===null?Ee.material:Y,Ze=Ee.group;Ie.layers.test(q.layers)&&$n(Ie,O,q,Oe,Ve,Ze)}}function $n(S,O,q,Y,I,de){S.onBeforeRender(y,O,q,Y,I,de),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(y,O,q,Y,S,de),I.transparent===!0&&I.side===gi&&I.forceSinglePass===!1?(I.side=bn,I.needsUpdate=!0,y.renderBufferDirect(q,O,Y,I,S,de),I.side=Sr,I.needsUpdate=!0,y.renderBufferDirect(q,O,Y,I,S,de),I.side=gi):y.renderBufferDirect(q,O,Y,I,S,de),S.onAfterRender(y,O,q,Y,I,de)}function Fn(S,O,q){O.isScene!==!0&&(O=lt);const Y=De.get(S),I=d.state.lights,de=d.state.shadowsArray,Ee=I.state.version,Ie=Ne.getParameters(S,I.state,de,O,q),Oe=Ne.getProgramCacheKey(Ie);let Ve=Y.programs;Y.environment=S.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(S.isMeshStandardMaterial?B:g).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ve===void 0&&(S.addEventListener("dispose",le),Ve=new Map,Y.programs=Ve);let Ze=Ve.get(Oe);if(Ze!==void 0){if(Y.currentProgram===Ze&&Y.lightsStateVersion===Ee)return wi(S,Ie),Ze}else Ie.uniforms=Ne.getUniforms(S),S.onBeforeCompile(Ie,y),Ze=Ne.acquireProgram(Ie,Oe),Ve.set(Oe,Ze),Y.uniforms=Ie.uniforms;const qe=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(qe.clippingPlanes=K.uniform),wi(S,Ie),Y.needsLights=Mt(S),Y.lightsStateVersion=Ee,Y.needsLights&&(qe.ambientLightColor.value=I.state.ambient,qe.lightProbe.value=I.state.probe,qe.directionalLights.value=I.state.directional,qe.directionalLightShadows.value=I.state.directionalShadow,qe.spotLights.value=I.state.spot,qe.spotLightShadows.value=I.state.spotShadow,qe.rectAreaLights.value=I.state.rectArea,qe.ltc_1.value=I.state.rectAreaLTC1,qe.ltc_2.value=I.state.rectAreaLTC2,qe.pointLights.value=I.state.point,qe.pointLightShadows.value=I.state.pointShadow,qe.hemisphereLights.value=I.state.hemi,qe.directionalShadowMap.value=I.state.directionalShadowMap,qe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,qe.spotShadowMap.value=I.state.spotShadowMap,qe.spotLightMatrix.value=I.state.spotLightMatrix,qe.spotLightMap.value=I.state.spotLightMap,qe.pointShadowMap.value=I.state.pointShadowMap,qe.pointShadowMatrix.value=I.state.pointShadowMatrix),Y.currentProgram=Ze,Y.uniformsList=null,Ze}function di(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Do.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function wi(S,O){const q=De.get(S);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function xt(S,O,q,Y,I){O.isScene!==!0&&(O=lt),T.resetTextureUnits();const de=O.fog,Ee=Y.isMeshStandardMaterial?O.environment:null,Ie=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qs,Oe=(Y.isMeshStandardMaterial?B:g).get(Y.envMap||Ee),Ve=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qe=!!q.morphAttributes.position,pt=!!q.morphAttributes.normal,St=!!q.morphAttributes.color;let Ht=gr;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ht=y.toneMapping);const Ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,je=De.get(Y),Jt=d.state.lights;if(he===!0&&(Te===!0||S!==M)){const un=S===M&&Y.id===E;K.setState(Y,S,un)}let yt=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Jt.state.version||je.outputColorSpace!==Ie||I.isBatchedMesh&&je.batching===!1||!I.isBatchedMesh&&je.batching===!0||I.isBatchedMesh&&je.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&je.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&je.instancing===!1||!I.isInstancedMesh&&je.instancing===!0||I.isSkinnedMesh&&je.skinning===!1||!I.isSkinnedMesh&&je.skinning===!0||I.isInstancedMesh&&je.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&je.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&je.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&je.instancingMorph===!1&&I.morphTexture!==null||je.envMap!==Oe||Y.fog===!0&&je.fog!==de||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==K.numPlanes||je.numIntersection!==K.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==Ze||je.morphTargets!==qe||je.morphNormals!==pt||je.morphColors!==St||je.toneMapping!==Ht||je.morphTargetsCount!==_t)&&(yt=!0):(yt=!0,je.__version=Y.version);let Kn=je.currentProgram;yt===!0&&(Kn=Fn(Y,O,I));let rs=!1,wn=!1,la=!1;const Ut=Kn.getUniforms(),On=je.uniforms;if(Fe.useProgram(Kn.program)&&(rs=!0,wn=!0,la=!0),Y.id!==E&&(E=Y.id,wn=!0),rs||M!==S){Fe.buffers.depth.getReversed()?(Me.copy(S.projectionMatrix),Fv(Me),Ov(Me),Ut.setValue(P,"projectionMatrix",Me)):Ut.setValue(P,"projectionMatrix",S.projectionMatrix),Ut.setValue(P,"viewMatrix",S.matrixWorldInverse);const _n=Ut.map.cameraPosition;_n!==void 0&&_n.setValue(P,He.setFromMatrixPosition(S.matrixWorld)),Je.logarithmicDepthBuffer&&Ut.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ut.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,wn=!0,la=!0)}if(I.isSkinnedMesh){Ut.setOptional(P,I,"bindMatrix"),Ut.setOptional(P,I,"bindMatrixInverse");const un=I.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ut.setValue(P,"boneTexture",un.boneTexture,T))}I.isBatchedMesh&&(Ut.setOptional(P,I,"batchingTexture"),Ut.setValue(P,"batchingTexture",I._matricesTexture,T),Ut.setOptional(P,I,"batchingIdTexture"),Ut.setValue(P,"batchingIdTexture",I._indirectTexture,T),Ut.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&Ut.setValue(P,"batchingColorTexture",I._colorsTexture,T));const Bn=q.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&xe.update(I,q,Kn),(wn||je.receiveShadow!==I.receiveShadow)&&(je.receiveShadow=I.receiveShadow,Ut.setValue(P,"receiveShadow",I.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(On.envMap.value=Oe,On.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(On.envMapIntensity.value=O.environmentIntensity),wn&&(Ut.setValue(P,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&Xe(On,la),de&&Y.fog===!0&&Se.refreshFogUniforms(On,de),Se.refreshMaterialUniforms(On,Y,j,se,d.state.transmissionRenderTarget[S.id]),Do.upload(P,di(je),On,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Do.upload(P,di(je),On,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ut.setValue(P,"center",I.center),Ut.setValue(P,"modelViewMatrix",I.modelViewMatrix),Ut.setValue(P,"normalMatrix",I.normalMatrix),Ut.setValue(P,"modelMatrix",I.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const un=Y.uniformsGroups;for(let _n=0,Jo=un.length;_n<Jo;_n++){const Er=un[_n];U.update(Er,Kn),U.bind(Er,Kn)}}return Kn}function Xe(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Mt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,O,q){De.get(S.texture).__webglTexture=O,De.get(S.depthTexture).__webglTexture=q;const Y=De.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){const q=De.get(S);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const Ai=P.createFramebuffer();this.setRenderTarget=function(S,O=0,q=0){L=S,A=O,R=q;let Y=!0,I=null,de=!1,Ee=!1;if(S){const Oe=De.get(S);if(Oe.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(Oe.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Oe.__hasExternalTextures)T.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(Oe.__boundDepthTexture!==qe){if(qe!==null&&De.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);const Ze=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ze[O])?I=Ze[O][q]:I=Ze[O],de=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?I=De.get(S).__webglMultisampledFramebuffer:Array.isArray(Ze)?I=Ze[q]:I=Ze,D.copy(S.viewport),W.copy(S.scissor),H=S.scissorTest}else D.copy(Ce).multiplyScalar(j).floor(),W.copy(X).multiplyScalar(j).floor(),H=_e;if(q!==0&&(I=Ai),Fe.bindFramebuffer(P.FRAMEBUFFER,I)&&Y&&Fe.drawBuffers(S,I),Fe.viewport(D),Fe.scissor(W),Fe.setScissorTest(H),de){const Oe=De.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Oe.__webglTexture,q)}else if(Ee){const Oe=De.get(S.texture),Ve=O;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.__webglTexture,q,Ve)}else if(S!==null&&q!==0){const Oe=De.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oe.__webglTexture,q)}E=-1},this.readRenderTargetPixels=function(S,O,q,Y,I,de,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){Fe.bindFramebuffer(P.FRAMEBUFFER,Ie);try{const Oe=S.texture,Ve=Oe.format,Ze=Oe.type;if(!Je.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&q>=0&&q<=S.height-I&&P.readPixels(O,q,Y,I,ae.convert(Ve),ae.convert(Ze),de)}finally{const Oe=L!==null?De.get(L).__webglFramebuffer:null;Fe.bindFramebuffer(P.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,O,q,Y,I,de,Ee){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){const Oe=S.texture,Ve=Oe.format,Ze=Oe.type;if(!Je.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-Y&&q>=0&&q<=S.height-I){Fe.bindFramebuffer(P.FRAMEBUFFER,Ie);const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,de.byteLength,P.STREAM_READ),P.readPixels(O,q,Y,I,ae.convert(Ve),ae.convert(Ze),0);const pt=L!==null?De.get(L).__webglFramebuffer:null;Fe.bindFramebuffer(P.FRAMEBUFFER,pt);const St=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Nv(P,St,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,de),P.deleteBuffer(qe),P.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,q=0){S.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);const Y=Math.pow(2,-q),I=Math.floor(S.image.width*Y),de=Math.floor(S.image.height*Y),Ee=O!==null?O.x:0,Ie=O!==null?O.y:0;T.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,Ee,Ie,I,de),Fe.unbindTexture()};const yr=P.createFramebuffer(),is=P.createFramebuffer();this.copyTextureToTexture=function(S,O,q=null,Y=null,I=0,de=null){S.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],O=arguments[2],de=arguments[3]||0,q=null),de===null&&(I!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=I,I=0):de=0);let Ee,Ie,Oe,Ve,Ze,qe,pt,St,Ht;const Ft=S.isCompressedTexture?S.mipmaps[de]:S.image;if(q!==null)Ee=q.max.x-q.min.x,Ie=q.max.y-q.min.y,Oe=q.isBox3?q.max.z-q.min.z:1,Ve=q.min.x,Ze=q.min.y,qe=q.isBox3?q.min.z:0;else{const Bn=Math.pow(2,-I);Ee=Math.floor(Ft.width*Bn),Ie=Math.floor(Ft.height*Bn),S.isDataArrayTexture?Oe=Ft.depth:S.isData3DTexture?Oe=Math.floor(Ft.depth*Bn):Oe=1,Ve=0,Ze=0,qe=0}Y!==null?(pt=Y.x,St=Y.y,Ht=Y.z):(pt=0,St=0,Ht=0);const _t=ae.convert(O.format),je=ae.convert(O.type);let Jt;O.isData3DTexture?(T.setTexture3D(O,0),Jt=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Jt=P.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Jt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const yt=P.getParameter(P.UNPACK_ROW_LENGTH),Kn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rs=P.getParameter(P.UNPACK_SKIP_PIXELS),wn=P.getParameter(P.UNPACK_SKIP_ROWS),la=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qe);const Ut=S.isDataArrayTexture||S.isData3DTexture,On=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const Bn=De.get(S),un=De.get(O),_n=De.get(Bn.__renderTarget),Jo=De.get(un.__renderTarget);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,_n.__webglFramebuffer),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let Er=0;Er<Oe;Er++)Ut&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(S).__webglTexture,I,qe+Er),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(O).__webglTexture,de,Ht+Er)),P.blitFramebuffer(Ve,Ze,Ee,Ie,pt,St,Ee,Ie,P.DEPTH_BUFFER_BIT,P.NEAREST);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(I!==0||S.isRenderTargetTexture||De.has(S)){const Bn=De.get(S),un=De.get(O);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,yr),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,is);for(let _n=0;_n<Oe;_n++)Ut?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bn.__webglTexture,I,qe+_n):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bn.__webglTexture,I),On?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,un.__webglTexture,de,Ht+_n):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,un.__webglTexture,de),I!==0?P.blitFramebuffer(Ve,Ze,Ee,Ie,pt,St,Ee,Ie,P.COLOR_BUFFER_BIT,P.NEAREST):On?P.copyTexSubImage3D(Jt,de,pt,St,Ht+_n,Ve,Ze,Ee,Ie):P.copyTexSubImage2D(Jt,de,pt,St,Ve,Ze,Ee,Ie);Fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else On?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Jt,de,pt,St,Ht,Ee,Ie,Oe,_t,je,Ft.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Jt,de,pt,St,Ht,Ee,Ie,Oe,_t,Ft.data):P.texSubImage3D(Jt,de,pt,St,Ht,Ee,Ie,Oe,_t,je,Ft):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,de,pt,St,Ee,Ie,_t,je,Ft.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,de,pt,St,Ft.width,Ft.height,_t,Ft.data):P.texSubImage2D(P.TEXTURE_2D,de,pt,St,Ee,Ie,_t,je,Ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,yt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Kn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rs),P.pixelStorei(P.UNPACK_SKIP_ROWS,wn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,la),de===0&&O.generateMipmaps&&P.generateMipmap(Jt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(S,O,q=null,Y=null,I=0){return S.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],O=arguments[3],I=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,q,Y,I)},this.initRenderTarget=function(S){De.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Fe.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Fe.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const Gh={type:"change"},Tu={type:"start"},Dd={type:"end"},_o=new _d,Wh=new lr,cy=Math.cos(70*fd.DEG2RAD),qt=new k,vn=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6;class uy extends Tg{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Qr,this._lastTargetPosition=new k,this._quat=new Qr().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _h,this._sphericalDelta=new _h,this._scale=1,this._panOffset=new k,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new k,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fy.bind(this),this._onPointerDown=hy.bind(this),this._onPointerUp=dy.bind(this),this._onContextMenu=My.bind(this),this._onMouseWheel=_y.bind(this),this._onKeyDown=vy.bind(this),this._onTouchStart=gy.bind(this),this._onTouchMove=xy.bind(this),this._onMouseDown=py.bind(this),this._onMouseMove=my.bind(this),this._interceptControlDown=Sy.bind(this),this._interceptControlUp=yy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gh),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),r<-Math.PI?r+=vn:r>Math.PI&&(r-=vn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=qt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<cy?this.object.lookAt(this.target):(Wh.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(Wh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent(Gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;qt.copy(r).sub(this.target);let s=qt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function fy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dd),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function py(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ct.DOLLY;break;case Cs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}break;case Cs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tu)}function my(n){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _y(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dd))}function vy(n){this.enabled!==!1&&this._handleKeyDown(n)}function gy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ct.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ct.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tu)}function xy(n){switch(this._trackPointer(n),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ct.NONE}}function My(n){this.enabled!==!1&&n.preventDefault()}function Sy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Xh=new Zi,vo=new k;class Ld extends yg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new yi(e,3)),this.setAttribute("uv",new yi(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new jc(t,6,1);return this.setAttribute("instanceStart",new pr(i,3,0)),this.setAttribute("instanceEnd",new pr(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new jc(t,6,1);return this.setAttribute("instanceColorStart",new pr(i,3,0)),this.setAttribute("instanceColorEnd",new pr(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new cg(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Xh.setFromBufferAttribute(t),this.boundingBox.union(Xh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)vo.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vo)),vo.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(vo));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}we.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new nt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};yn.line={uniforms:Mu.merge([we.common,we.fog,we.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class wu extends Yi{constructor(e){super({type:"LineMaterial",uniforms:Mu.clone(yn.line.uniforms),vertexShader:yn.line.vertexShader,fragmentShader:yn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ol=new Pt,qh=new k,jh=new k,Qt=new Pt,en=new Pt,pi=new Pt,Bl=new k,zl=new Nt,tn=new bg,Yh=new k,go=new Zi,xo=new Va,mi=new Pt;let xi,qr;function $h(n,e,t){return mi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),mi.multiplyScalar(1/mi.w),mi.x=qr/t.width,mi.y=qr/t.height,mi.applyMatrix4(n.projectionMatrixInverse),mi.multiplyScalar(1/mi.w),Math.abs(Math.max(mi.x,mi.y))}function Ey(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,l=a;o<l;o++){tn.start.fromBufferAttribute(r,o),tn.end.fromBufferAttribute(s,o),tn.applyMatrix4(t);const c=new k,u=new k;xi.distanceSqToSegment(tn.start,tn.end,u,c),u.distanceTo(c)<qr*.5&&e.push({point:u,pointOnLine:c,distance:xi.origin.distanceTo(u),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function by(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),f=-e.near;xi.at(1,pi),pi.w=1,pi.applyMatrix4(e.matrixWorldInverse),pi.applyMatrix4(i),pi.multiplyScalar(1/pi.w),pi.x*=s.x/2,pi.y*=s.y/2,pi.z=0,Bl.copy(pi),zl.multiplyMatrices(e.matrixWorldInverse,a);for(let h=0,m=u;h<m;h++){if(Qt.fromBufferAttribute(l,h),en.fromBufferAttribute(c,h),Qt.w=1,en.w=1,Qt.applyMatrix4(zl),en.applyMatrix4(zl),Qt.z>f&&en.z>f)continue;if(Qt.z>f){const b=Qt.z-en.z,y=(Qt.z-f)/b;Qt.lerp(en,y)}else if(en.z>f){const b=en.z-Qt.z,y=(en.z-f)/b;en.lerp(Qt,y)}Qt.applyMatrix4(i),en.applyMatrix4(i),Qt.multiplyScalar(1/Qt.w),en.multiplyScalar(1/en.w),Qt.x*=s.x/2,Qt.y*=s.y/2,en.x*=s.x/2,en.y*=s.y/2,tn.start.copy(Qt),tn.start.z=0,tn.end.copy(en),tn.end.z=0;const v=tn.closestPointToPointParameter(Bl,!0);tn.at(v,Yh);const p=fd.lerp(Qt.z,en.z,v),d=p>=-1&&p<=1,w=Bl.distanceTo(Yh)<qr*.5;if(d&&w){tn.start.fromBufferAttribute(l,h),tn.end.fromBufferAttribute(c,h),tn.start.applyMatrix4(a),tn.end.applyMatrix4(a);const b=new k,y=new k;xi.distanceSqToSegment(tn.start,tn.end,y,b),t.push({point:y,pointOnLine:b,distance:xi.origin.distanceTo(y),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}class Ty extends ci{constructor(e=new Ld,t=new wu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)qh.fromBufferAttribute(t,a),jh.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+qh.distanceTo(jh);const s=new jc(r,2,1);return e.setAttribute("instanceDistanceStart",new pr(s,1,0)),e.setAttribute("instanceDistanceEnd",new pr(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;xi=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;qr=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),xo.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=qr*.5;else{const f=Math.max(r.near,xo.distanceToPoint(xi.origin));c=$h(r,f,l.resolution)}if(xo.radius+=c,xi.intersectsSphere(xo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),go.copy(o.boundingBox).applyMatrix4(a);let u;if(i)u=qr*.5;else{const f=Math.max(r.near,go.distanceToPoint(xi.origin));u=$h(r,f,l.resolution)}go.expandByScalar(u),xi.intersectsBox(go)!==!1&&(i?Ey(this,t):by(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ol),this.material.uniforms.resolution.value.set(Ol.z,Ol.w))}}class Ud extends Ld{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){const t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class wy extends Ty{constructor(e=new Ud,t=new wu({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const kl=new Map,Hl=new Map;function pa(n){let e=kl.get(n);return e||(e=fetch(n).then(t=>{if(!t.ok)throw kl.delete(n),new Error(`File not found: ${n}`);return t.arrayBuffer()}),kl.set(n,e)),e}function Kh(n,e){let t=Hl.get(n);return t||(t=new _g().loadAsync(n).then(r=>(r.colorSpace=Sn,r.flipY=!0,r.generateMipmaps=!0,r.minFilter=dr,r.magFilter=oi,r.anisotropy=e.capabilities.getMaxAnisotropy(),r)).catch(r=>{throw Hl.delete(n),r}),Hl.set(n,t)),t}class Ay{constructor(e){this.terrainMesh=null,this.trackLines=[],this.trackSources=[],this.heightModels=null,this.activeElevationModel="base",this.sceneMeta=null,this.loadedSceneUrl=null,this.winterTexture=null,this.summerTexture=null,this.currentTextureMode="winter",this.currentElevationFactor=1,this.animationId=null,this.animate=()=>{this.animationId=requestAnimationFrame(this.animate),this.controls.update(),this.render()},this.container=e;const t=document.createElement("canvas");t.style.position="relative",t.style.zIndex="0",e.appendChild(t),this.renderer=new ly({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Sn,this.renderer.toneMapping=Jf,this.renderer.toneMappingExposure=1.05,this.scene=new sg,this.scene.background=new mt(4892904),this.camera=new Xn(50,1,.5,5e4),this.controls=new uy(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2.02,this.controls.minDistance=20,this.controls.maxDistance=12e3;const i=new vg(4891624,14215413,.62);this.scene.add(i);const r=new Sg(13164021,.12);this.scene.add(r);const s=new Mg(16774888,2.6);s.position.set(2e3,3e3,1500),this.scene.add(s),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.animate(),this.controls.addEventListener("change",()=>this.render())}async loadScene(e,t={}){if(this.loadedSceneUrl===e&&this.terrainMesh)return this.updateOptions(t);this.disposeTerrain();const i=t.onProgress,r=(w,b)=>i==null?void 0:i(w,b);r("Lade Szenen-Metadaten…",.05),await this.yieldFrame();const s=e.replace(/\/scene\.json(?:\?.*)?$/,""),a=await fetch(e);if(!a.ok)throw new Error(`Scene not found: ${e}`);this.sceneMeta=await a.json(),r("Bereite Geometrie vor…",.12),await this.yieldFrame();const o=t.elevationModel??"snow_surface";this.activeElevationModel=o==="snow_surface"&&this.sceneMeta.has_snow_surface?"snow_surface":"base";const l=await pa(`${s}/${this.sceneMeta.files.positions}`);r("Lade Vertex-Positionen…",.22);const c=await pa(`${s}/${this.sceneMeta.files.uvs}`);r("Lade Texturkoordinaten…",.32);const u=await pa(`${s}/${this.sceneMeta.files.indices}`);if(r("Lade Mesh-Indizes…",.42),this.winterTexture=await Kh(`${s}/${this.sceneMeta.textures.winter}`,this.renderer),r("Lade Winter-Orthofoto…",.58),this.summerTexture=null,this.sceneMeta.textures.summer)try{this.summerTexture=await Kh(`${s}/${this.sceneMeta.textures.summer}`,this.renderer),r("Lade Sommer-Orthofoto…",.68)}catch{this.summerTexture=null}this.heightModels=await this.loadElevationModels(s,this.sceneMeta),r("Lade Höhenmodelle…",.82),await this.yieldFrame(),r("Erzeuge 3D-Mesh…",.9);const f=new Float32Array(l),h=new Float32Array(c),m=this.sceneMeta.index_dtype==="uint16"?Uint16Array:Uint32Array,_=new m(u),v=new Uint32Array(_.length);for(let w=0;w<_.length;w++)v[w]=_[w];const p=new Ti;p.setAttribute("position",new Nn(f,3)),p.setAttribute("uv",new Nn(h,2)),p.setIndex(new xu(v,1)),p.computeVertexNormals(),p.computeBoundingBox(),p.computeBoundingSphere(),this.currentTextureMode=t.textureMode??"winter",this.currentElevationFactor=t.elevationFactor??1;const d=this.createTerrainMaterial(this.currentTextureMode,this.winterTexture,this.summerTexture);return this.terrainMesh=new ci(p,d),this.terrainMesh.frustumCulled=!1,this.scene.add(this.terrainMesh),this.applyExaggeration(this.currentElevationFactor),r("Lade GPX-Tracks…",.94),await this.loadTracks(s,this.sceneMeta,this.activeElevationModel,this.currentElevationFactor),this.frameCamera(this.terrainMesh),r("Szene geladen",1),this.loadedSceneUrl=e,this.statusMessage()}updateOptions(e={}){if(!this.terrainMesh||!this.sceneMeta)throw new Error("Keine Szene geladen");const t=e.textureMode??this.currentTextureMode,i=e.elevationModel??this.activeElevationModel,r=e.elevationFactor??this.currentElevationFactor;t!==this.currentTextureMode&&this.setTextureMode(t);const s=i==="snow_surface"&&this.sceneMeta.has_snow_surface?"snow_surface":"base";return s!==this.activeElevationModel&&this.setElevationModel(s),r!==this.currentElevationFactor&&(this.currentElevationFactor=r,this.applyExaggeration(r)),this.render(),this.statusMessage()}dispose(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.resizeObserver.disconnect(),this.disposeTerrain(),this.controls.dispose(),this.renderer.dispose(),this.container.replaceChildren()}statusMessage(){if(!this.sceneMeta)return"Keine Szene geladen";const e=Math.floor(this.sceneMeta.index_count/3).toLocaleString(),t=this.sceneMeta.vertex_count.toLocaleString(),i=this.sceneMeta.track_count??this.trackLines.length,r=i>0?` · ${i} GPX-Track${i===1?"":"s"}`:"";return`${this.sceneMeta.tile_id} · ${t} vertices · ${e} triangles${r}`}setTextureMode(e){if(!this.terrainMesh||!this.winterTexture)return;const t=e==="summer"&&this.summerTexture?this.summerTexture:this.winterTexture,i=this.terrainMesh.material;i.map=t,i.needsUpdate=!0,this.currentTextureMode=e}setElevationModel(e){!this.heightModels||e===this.activeElevationModel||(this.activeElevationModel=e,this.applyExaggeration(this.currentElevationFactor))}render(){this.renderer.render(this.scene,this.camera)}resize(){const e=Math.max(this.container.clientWidth,1),t=Math.max(this.container.clientHeight,1);this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.updateTrackLineResolution(e,t),this.render()}updateTrackLineResolution(e,t){const i=new nt(e,t);for(const r of this.trackLines)r.material.resolution.copy(i)}yieldFrame(){return new Promise(e=>requestAnimationFrame(()=>e()))}createTerrainMaterial(e,t,i){const r=e==="summer"&&i?i:t;return new ug({map:r,roughness:.92,metalness:0,side:gi,toneMapped:!0})}extractHeights(e){const t=new Float32Array(e.length/3);for(let i=0;i<t.length;i++)t[i]=e[i*3+1];return t}async loadElevationModels(e,t){var a;const i={base:null,snow_surface:null},r=await pa(`${e}/${t.files.positions}`);i.base=this.extractHeights(new Float32Array(r));const s=(a=t.elevation_models)==null?void 0:a.snow_surface;if(s)try{const o=await pa(`${e}/${s}`);i.snow_surface=this.extractHeights(new Float32Array(o))}catch{i.snow_surface=null}return i}currentHeights(){return this.heightModels?this.heightModels[this.activeElevationModel]||this.heightModels.base:null}applyExaggeration(e){if(!this.terrainMesh)return;const t=this.currentHeights();if(!t)return;const i=this.terrainMesh.geometry.attributes.position.array;for(let r=0;r<t.length;r++)i[r*3+1]=t[r]*e;this.terrainMesh.geometry.attributes.position.needsUpdate=!0,this.terrainMesh.geometry.computeVertexNormals(),this.terrainMesh.geometry.computeBoundingBox(),this.terrainMesh.geometry.computeBoundingSphere(),this.updateTrackHeights(e)}trackHeightsForModel(e){return this.activeElevationModel==="snow_surface"&&e.snowHeights?e.snowHeights:e.heights}trackPointsFromSource(e,t){const i=this.trackHeightsForModel(e),r=[];for(let s=0;s<i.length;s++)r.push(e.x[s],i[s]*t,e.z[s]);return r}updateTrackHeights(e){for(let t=0;t<this.trackLines.length;t++){const i=this.trackSources[t];if(!i)continue;const r=this.trackLines[t];r.geometry.setPositions(this.trackPointsFromSource(i,e)),r.computeLineDistances()}}async loadTracks(e,t,i,r){if(this.disposeTracks(),!t.tracks_file)return;const s=await fetch(`${e}/${t.tracks_file}`);if(!s.ok)return;const o=(await s.json()).tracks||[];if(!(!Array.isArray(o)||o.length===0)){this.activeElevationModel=i;for(const l of o){const c=l.positions;if(!c||c.length<6)continue;const u=c.length/3,f={x:new Float32Array(u),heights:new Float32Array(u),z:new Float32Array(u),snowHeights:null};for(let p=0;p<u;p++)f.x[p]=c[p*3],f.heights[p]=c[p*3+1],f.z[p]=c[p*3+2];const h=l.snow_positions;if(h&&h.length>=6){const p=h.length/3;f.snowHeights=new Float32Array(p);for(let d=0;d<p;d++)f.snowHeights[d]=h[d*3+1]}this.trackSources.push(f);const m=new Ud;m.setPositions(this.trackPointsFromSource(f,r));const _=new wu({color:2263295,linewidth:4,depthTest:!0,depthWrite:!1,transparent:!0,opacity:.95,worldUnits:!1});_.resolution.set(Math.max(this.container.clientWidth,1),Math.max(this.container.clientHeight,1));const v=new wy(m,_);v.computeLineDistances(),v.frustumCulled=!1,v.renderOrder=1,this.scene.add(v),this.trackLines.push(v)}}}disposeTracks(){for(const e of this.trackLines)this.scene.remove(e),e.geometry.dispose(),e.material.dispose();this.trackLines=[],this.trackSources=[]}frameCamera(e){const t=new Zi().setFromObject(e);for(const a of this.trackLines)t.expandByObject(a);const i=new k,r=new k;t.getCenter(i),t.getSize(r),this.controls.target.copy(i);const s=Math.max(r.x,r.y,r.z);this.camera.near=Math.max(s/5e3,.5),this.camera.far=s*20,this.camera.updateProjectionMatrix(),this.camera.position.set(i.x+s*.55,i.y+s*.45,i.z+s*.65),this.controls.update(),this.render()}disposeTerrain(){if(this.disposeTracks(),!this.terrainMesh){this.heightModels=null,this.sceneMeta=null,this.loadedSceneUrl=null,this.winterTexture=null,this.summerTexture=null;return}this.scene.remove(this.terrainMesh),this.terrainMesh.geometry.dispose(),this.terrainMesh.material instanceof aa&&this.terrainMesh.material.dispose(),this.terrainMesh=null,this.heightModels=null,this.sceneMeta=null,this.loadedSceneUrl=null,this.winterTexture=null,this.summerTexture=null}}var Ry=Le('<div class="viewer-loading-overlay svelte-1mb27h9" aria-live="polite" aria-busy="true"><div class="viewer-loading-card svelte-1mb27h9"><strong class="svelte-1mb27h9"> </strong> <div class="load-progress svelte-1mb27h9" role="progressbar" aria-valuemin="0" aria-valuemax="100"><div class="load-progress-fill svelte-1mb27h9"></div></div> <small class="svelte-1mb27h9"> </small></div></div>'),Cy=Le('<span class="error svelte-1mb27h9"> </span>'),Py=Le('<div class="viewer-shell svelte-1mb27h9"><div class="viewer-stage svelte-1mb27h9"><div class="viewer-container svelte-1mb27h9"></div> <!></div> <div class="viewer-status svelte-1mb27h9"><!></div></div>');function Dy(n,e){$i(e,!0);let t=wt(e,"sceneUrl",3,""),i=wt(e,"textureMode",3,"winter"),r=wt(e,"elevationModel",3,"snow_surface"),s=wt(e,"elevationFactor",3,1),a,o=ke(null),l=ke("Keine Szene geladen"),c=ke(""),u=ke(0),f=ke(!1),h=ke("");sa(()=>(F(o,new Ay(a),!0),()=>{var C;(C=x(o))==null||C.dispose(),F(o,null),F(h,"")})),Xs(()=>{const C=x(o),A=t();if(!A){F(l,"Viewer-Daten exportieren, um das Gelände anzuzeigen"),F(f,!1),F(u,0),F(c,""),F(h,"");return}if(!C){F(l,"Viewer wird initialisiert…"),F(f,!0),F(u,0),F(c,"");return}if(A===x(h))return;let R=!1;return(async()=>{F(c,""),F(l,"Lade Szene…"),F(f,!0),F(u,.02),await ec();try{const L=await C.loadScene(A,{textureMode:i(),elevationModel:r(),elevationFactor:s(),onProgress:(E,M)=>{R||(F(l,E,!0),F(u,Math.max(.02,Math.min(1,M)),!0))}});R||(F(h,A,!0),F(l,L,!0),F(u,1),await ec(),F(f,!1))}catch(L){R||(F(c,L instanceof Error?L.message:String(L),!0),F(l,"Laden fehlgeschlagen"),F(f,!1),F(h,""))}})(),()=>{R=!0}}),Xs(()=>{const C=x(o),A=t(),R=i(),L=r(),E=s();if(!(!C||!A||A!==x(h)))try{F(l,C.updateOptions({textureMode:R,elevationModel:L,elevationFactor:E}),!0),F(c,"")}catch(M){F(c,M instanceof Error?M.message:String(M),!0)}});var m=Py(),_=z(m),v=z(_);$f(v,C=>a=C,()=>a);var p=G(v,2);{var d=C=>{var A=Ry(),R=z(A),L=z(R),E=z(L),M=G(L,2),D=z(M),W=G(M,2),H=z(W);tt((te,re,Z)=>{Ye(E,x(l)),nn(M,"aria-valuenow",te),ou(D,`width: ${re??""}%`),Ye(H,`${Z??""}%`)},[()=>Math.round(x(u)*100),()=>Math.round(x(u)*100),()=>Math.round(x(u)*100)]),ue(C,A)};Pe(p,C=>{x(f)&&C(d)})}var w=G(_,2),b=z(w);{var y=C=>{var A=Cy(),R=z(A);tt(()=>Ye(R,x(c))),ue(C,A)};Pe(b,C=>{x(c)&&C(y)})}ue(n,m),Ki()}var Ly=Le('<span class="custom-badge svelte-13t1ei0">angepasst</span>'),Uy=Le('<span class="custom-note svelte-13t1ei0">Projektspezifische Konfiguration</span>'),Iy=Le('<span class="base-note svelte-13t1ei0"> </span>'),Ny=Le("<option> </option>"),Fy=Le('<button type="button" class="btn-reset svelte-13t1ei0">Zurücksetzen</button>'),Oy=Le('<p class="status-line svelte-13t1ei0">Profil wird geladen…</p>'),By=Le('<p class="error-line svelte-13t1ei0"> </p>'),zy=Le('<p class="save-line svelte-13t1ei0"> </p>'),ky=Le('<p class="status-line svelte-13t1ei0">Speichern…</p>'),Hy=Le('<p class="section-desc svelte-13t1ei0"> </p>'),Vy=Le('<button type="button" class="doc-btn svelte-13t1ei0" title="Dokumentation anzeigen"><!></button>'),Gy=Le('<input type="checkbox" class="svelte-13t1ei0"/>'),Wy=Le('<input type="number" step="any" class="svelte-13t1ei0"/>'),Xy=Le('<input type="text" placeholder="z.B. 0.97, 1.0" class="svelte-13t1ei0"/>'),qy=Le('<input type="text" placeholder="z.B. water_mask" class="svelte-13t1ei0"/>'),jy=Le('<input type="text" class="svelte-13t1ei0"/>'),Yy=Le('<p class="svelte-13t1ei0"><strong>Typ:</strong> </p>'),$y=Le('<p class="svelte-13t1ei0"><strong>Standard:</strong> </p>'),Ky=Le('<p class="svelte-13t1ei0"><strong>Pipeline:</strong> </p>'),Zy=Le('<p class="svelte-13t1ei0"> </p>'),Jy=Le('<div class="doc-panel svelte-13t1ei0"><!> <!> <!> <!></div>'),Qy=Le('<div><div class="field-head svelte-13t1ei0"><label class="svelte-13t1ei0"> </label> <!></div> <!> <!></div>'),eE=Le('<!> <div class="field-grid svelte-13t1ei0"></div>',1),tE=Le('<section class="profile-section svelte-13t1ei0"><button type="button" class="section-header svelte-13t1ei0"><span> </span> <span class="field-count svelte-13t1ei0"> </span> <!></button> <!></section>'),nE=Le('<!> <!> <div class="sections svelte-13t1ei0"></div>',1),iE=Le('<div class="expert-panel svelte-13t1ei0"><div class="expert-toolbar svelte-13t1ei0"><div class="toolbar-meta svelte-13t1ei0"><span>Aktives Profil: <strong> </strong></span> <!></div> <div class="toolbar-actions svelte-13t1ei0"><label class="base-select svelte-13t1ei0">Vorlage <select class="svelte-13t1ei0"></select></label> <!></div></div> <!></div>'),rE=Le('<div class="expert-shell svelte-13t1ei0"><button type="button" class="expert-toggle svelte-13t1ei0"><div class="expert-toggle-text svelte-13t1ei0"><!> <span>Expertenmodus: Rendering-Profil</span> <!></div> <!></button> <!></div>');function sE(n,e){$i(e,!0);let t=wt(e,"winterProfileName",15,"default"),i=wt(e,"profileCustom",15,!1),r=wt(e,"baseProfile",15,"default"),s=ke(!1),a=ke(!1),o=ke(!1),l=ke(null),c=ke(null),u=ke(null),f=ke(Xt({})),h=ke(null),m=ke(Xt({})),_=ke(Xt(["default"])),v=null;const p={profile:"Profil",snow_surface:"Schneeoberfläche",elevation:"Höhe",aspect:"Exposition",open_land:"Offenes Land",forest:"Wald",settlement:"Siedlung",rock:"Fels",roads:"Strassen",paths:"Wege",buildings:"Gebäude",water:"Gewässer",rendering:"Rendering","rendering.map_shading":"Kartographische Schattierung","rendering.cast_shadows":"Wurfschatten","rendering.relief":"Winter-Relief","rendering.summer_structure":"Sommer-Tonwertkorrektur"};function d(X){return p[X]??X}async function w(){try{const X=await fetch(`${e.apiUrl}/rendering-profiles/templates`);if(X.ok){const _e=await X.json();F(_,_e.profiles??["default"],!0)}}catch{F(_,["default"],!0)}}async function b(){F(a,!0),F(l,null),F(c,null),F(m,{},!0);try{const X=await fetch(`${e.apiUrl}/projects/${e.projectId}/rendering-profile?base_profile=${encodeURIComponent(r())}`);if(!X.ok)throw new Error(`HTTP ${X.status}`);const _e=await X.json();F(u,_e,!0),t(_e.profile_name),i(_e.is_custom),r(_e.base_profile),Object.keys(x(f)).length===0&&_e.sections.length>0&&F(f,{[_e.sections[0].id]:!0},!0)}catch(X){F(l,X instanceof Error?X.message:"Profil konnte nicht geladen werden",!0)}finally{F(a,!1)}}function y(){v&&clearTimeout(v),v=setTimeout(()=>void C(),600)}async function C(){const X=Object.entries(x(m));if(!(!X.length||!x(u))){F(o,!0),F(l,null),F(c,null);try{const _e=await fetch(`${e.apiUrl}/projects/${e.projectId}/rendering-profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({base_profile:r(),changes:X.map(([he,Te])=>({path:he,value:Te}))})});if(!_e.ok)throw new Error(`HTTP ${_e.status}`);const $=await _e.json();F(u,$,!0),t($.profile_name),i($.is_custom),F(m,{},!0),F(c,"Projektprofil gespeichert")}catch(_e){F(l,_e instanceof Error?_e.message:"Speichern fehlgeschlagen",!0)}finally{F(o,!1)}}}function A(X,_e){x(u)&&(X.value=_e,x(m)[X.path]=_e,F(u,{...x(u)},!0),y())}function R(X,_e){const $=X.split(/[,\s]+/).filter(Boolean).map(he=>Number(he));return $.length!==_e||$.some(he=>Number.isNaN(he))?null:$}function L(X,_e){const $=_e.currentTarget.value,he=R($,Array.isArray(X.value)?X.value.length:2);he&&A(X,he)}function E(X,_e){const he=_e.currentTarget.value.split(",").map(Te=>Te.trim()).filter(Boolean);A(X,he)}function M(X){return Array.isArray(X)?X.join(", "):""}async function D(){if(confirm("Projektspezifisches Rendering-Profil zurücksetzen und Basisprofil wieder verwenden?")){F(o,!0),F(l,null);try{const X=await fetch(`${e.apiUrl}/projects/${e.projectId}/rendering-profile/reset`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base_profile:r()})});if(!X.ok)throw new Error(`HTTP ${X.status}`);F(m,{},!0),await b(),F(c,"Auf Basisprofil zurückgesetzt")}catch(X){F(l,X instanceof Error?X.message:"Zurücksetzen fehlgeschlagen",!0)}finally{F(o,!1)}}}function W(X){F(f,{...x(f),[X]:!x(f)[X]},!0)}Xs(()=>{e.projectId&&(w(),b())}),sa(()=>()=>{v&&clearTimeout(v)});var H=rE(),te=z(H),re=z(te),Z=z(re);Ot(Z,{name:"settings",size:16});var se=G(Z,4);{var j=X=>{var _e=Ly();ue(X,_e)};Pe(se,X=>{i()&&X(j)})}var me=G(re,2);{let X=Gt(()=>x(s)?"chevron-up":"chevron-down");Ot(me,{get name(){return x(X)},size:16})}var ye=G(te,2);{var Ce=X=>{var _e=iE(),$=z(_e),he=z($),Te=z(he),Me=G(z(Te)),Ue=z(Me),He=G(Te,2);{var Ge=g=>{var B=Uy();ue(g,B)},lt=g=>{var B=Iy(),ne=z(B);tt(()=>Ye(ne,`Basis: ${r()??""}`)),ue(g,B)};Pe(He,g=>{i()?g(Ge):g(lt,-1)})}var $e=G(he,2),ht=z($e),P=G(z(ht));Gi(P,21,()=>x(_),js,(g,B)=>{var ne=Ny(),ce=z(ne),ie={};tt(()=>{Ye(ce,x(B)),ie!==(ie=x(B))&&(ne.value=(ne.__value=x(B))??"")}),ue(g,ne)});var Lt;lu(P);var Ke=G(ht,2);{var Je=g=>{var B=Fy();tt(()=>B.disabled=x(o)),Et("click",B,D),ue(g,B)};Pe(Ke,g=>{i()&&g(Je)})}var Fe=G($,2);{var ct=g=>{var B=Oy();ue(g,B)},De=g=>{var B=By(),ne=z(B);tt(()=>Ye(ne,x(l))),ue(g,B)},T=g=>{var B=nE(),ne=Oo(B);{var ce=fe=>{var Q=zy(),K=z(Q);tt(()=>Ye(K,x(c))),ue(fe,Q)};Pe(ne,fe=>{x(c)&&fe(ce)})}var ie=G(ne,2);{var Ne=fe=>{var Q=ky();ue(fe,Q)};Pe(ie,fe=>{x(o)&&fe(Ne)})}var Se=G(ie,2);Gi(Se,21,()=>x(u).sections,fe=>fe.id,(fe,Q)=>{var K=tE(),pe=z(K),be=z(pe),xe=z(be),ve=G(be,2),N=z(ve),ae=G(ve,2);{let ge=Gt(()=>x(f)[x(Q).id]?"chevron-up":"chevron-down");Ot(ae,{get name(){return x(ge)},size:14})}var Qe=G(pe,2);{var U=ge=>{var J=eE(),oe=Oo(J);{var Re=le=>{var ee=Hy(),Be=z(ee);tt(()=>Ye(Be,x(Q).description)),ue(le,ee)};Pe(oe,le=>{x(Q).description&&le(Re)})}var Ae=G(oe,2);Gi(Ae,21,()=>x(Q).fields,le=>le.path,(le,ee)=>{var Be=Qy();let ze;var bt=z(Be),dt=z(bt),kt=z(dt),Ji=G(dt,2);{var Tn=xt=>{var Xe=Vy(),Mt=z(Xe);Ot(Mt,{name:"info",size:14}),tt(()=>nn(Xe,"aria-label",`Dokumentation für ${x(ee).name??""}`)),Et("click",Xe,()=>{var Ai;return F(h,((Ai=x(h))==null?void 0:Ai.path)===x(ee).path?null:x(ee),!0)}),ue(xt,Xe)};Pe(Ji,xt=>{x(ee).doc&&xt(Tn)})}var Qi=G(bt,2);{var ts=xt=>{var Xe=Gy();tt(Mt=>{nn(Xe,"id",`field-${x(ee).path}`),xm(Xe,Mt)},[()=>!!x(ee).value]),Et("change",Xe,Mt=>A(x(ee),Mt.currentTarget.checked)),ue(xt,Xe)},ns=xt=>{var Xe=Wy();tt(Mt=>{nn(Xe,"id",`field-${x(ee).path}`),bs(Xe,Mt)},[()=>Number(x(ee).value)]),Et("change",Xe,Mt=>A(x(ee),Mt.currentTarget.valueAsNumber)),ue(xt,Xe)},er=xt=>{var Xe=Xy();tt(Mt=>{nn(Xe,"id",`field-${x(ee).path}`),bs(Xe,Mt)},[()=>M(x(ee).value)]),Et("change",Xe,Mt=>L(x(ee),Mt)),ue(xt,Xe)},$n=xt=>{var Xe=qy();tt(Mt=>{nn(Xe,"id",`field-${x(ee).path}`),bs(Xe,Mt)},[()=>M(x(ee).value)]),Et("change",Xe,Mt=>E(x(ee),Mt)),ue(xt,Xe)},Fn=xt=>{var Xe=jy();tt(Mt=>{nn(Xe,"id",`field-${x(ee).path}`),bs(Xe,Mt)},[()=>String(x(ee).value??"")]),Et("change",Xe,Mt=>A(x(ee),Mt.currentTarget.value)),ue(xt,Xe)};Pe(Qi,xt=>{x(ee).value_kind==="boolean"?xt(ts):x(ee).value_kind==="number"?xt(ns,1):x(ee).value_kind==="rgb"||x(ee).value_kind==="array"?xt(er,2):x(ee).value_kind==="string_list"?xt($n,3):xt(Fn,-1)})}var di=G(Qi,2);{var wi=xt=>{var Xe=Jy(),Mt=z(Xe);{var Ai=I=>{var de=Yy(),Ee=G(z(de));tt(()=>Ye(Ee,` ${x(ee).doc.type??""}`)),ue(I,de)};Pe(Mt,I=>{x(ee).doc.type&&I(Ai)})}var yr=G(Mt,2);{var is=I=>{var de=$y(),Ee=G(z(de));tt(()=>Ye(Ee,` ${x(ee).doc.default??""}`)),ue(I,de)};Pe(yr,I=>{x(ee).doc.default&&I(is)})}var S=G(yr,2);{var O=I=>{var de=Ky(),Ee=G(z(de));tt(()=>Ye(Ee,` ${x(ee).doc.used_in??""}`)),ue(I,de)};Pe(S,I=>{x(ee).doc.used_in&&I(O)})}var q=G(S,2);{var Y=I=>{var de=Zy(),Ee=z(de);tt(()=>Ye(Ee,x(ee).doc.description)),ue(I,de)};Pe(q,I=>{x(ee).doc.description&&I(Y)})}ue(xt,Xe)};Pe(di,xt=>{var Xe;((Xe=x(h))==null?void 0:Xe.path)===x(ee).path&&x(ee).doc&&xt(wi)})}tt(()=>{ze=Un(Be,1,"field-card svelte-13t1ei0",null,ze,{"has-doc":!!x(ee).doc}),nn(dt,"for",`field-${x(ee).path}`),Ye(kt,x(ee).name)}),ue(le,Be)}),ue(ge,J)};Pe(Qe,ge=>{x(f)[x(Q).id]&&ge(U)})}tt(ge=>{nn(pe,"aria-expanded",x(f)[x(Q).id]??!1),Ye(xe,ge),Ye(N,x(Q).fields.length)},[()=>d(x(Q).id)]),Et("click",pe,()=>W(x(Q).id)),ue(fe,K)}),ue(g,B)};Pe(Fe,g=>{x(a)?g(ct):x(l)?g(De,1):x(u)&&g(T,2)})}tt(()=>{Ye(Ue,t()),Lt!==(Lt=r())&&(P.value=(P.__value=r())??"",Yo(P,r()))}),Et("change",P,async g=>{r(g.currentTarget.value),await b()}),ue(X,_e)};Pe(ye,X=>{x(s)&&X(Ce)})}tt(()=>nn(te,"aria-expanded",x(s))),Et("click",te,()=>F(s,!x(s))),ue(n,H),Ki()}const xr={default:{resolutionM:1,maxTextureDim:4096,meshStride:8},high:{resolutionM:.5,maxTextureDim:8192,meshStride:4},ultra:{resolutionM:.5,maxTextureDim:16384,meshStride:2}};function aE(n){return n in xr}function oE(n){return aE(n)?xr[n]:null}var lE=Le('<div role="listitem"><div class="stage-row svelte-1cikr1o"><span class="stage-label svelte-1cikr1o"> </span> <span class="stage-pct svelte-1cikr1o"> </span></div> <div class="stage-bar svelte-1cikr1o" aria-hidden="true"><div class="stage-bar-fill svelte-1cikr1o"></div></div></div>'),cE=Le('<button type="button"><div class="action-icon svelte-1cikr1o"><!></div> <div class="action-content svelte-1cikr1o"><strong class="svelte-1cikr1o"> </strong> <p class="svelte-1cikr1o"> </p> <span class="action-hint svelte-1cikr1o"> </span></div> <!></button>'),uE=Le('<div class="workflow-shell svelte-1cikr1o"><section class="hero-card svelte-1cikr1o"><div><div class="eyebrow svelte-1cikr1o">Projekt-Workflow</div> <h3 class="svelte-1cikr1o"> </h3> <p class="hero-copy svelte-1cikr1o">Wähl den nächsten Schritt: zuerst vorbereiten, danach komplette Pipeline oder gezielt ab Schnee-Simulation weiterrechnen, und zum Schluss in den 3D-Viewer exportieren.</p></div> <div class="hero-meta svelte-1cikr1o"><div class="meta-pill svelte-1cikr1o"><!> <span> </span></div></div></section> <section class="pipeline-section svelte-1cikr1o"><div class="section-title-row svelte-1cikr1o"><h3 class="svelte-1cikr1o">Pipeline-Schritte</h3> <span class="section-note svelte-1cikr1o"><!> <span> </span></span></div> <div class="pipeline-track svelte-1cikr1o" role="list" aria-label="Pipeline-Fortschritt"></div></section> <section class="actions-section"><div class="section-title-row svelte-1cikr1o"><h3 class="svelte-1cikr1o">Nächster Schritt</h3> <span class="section-note svelte-1cikr1o">Zwei Berechnungswege plus Viewer-Export</span></div> <div class="action-grid svelte-1cikr1o"></div></section> <section class="params-section"><div class="section-title-row svelte-1cikr1o"><h3 class="svelte-1cikr1o">Viewer-Parameter</h3> <span class="section-note svelte-1cikr1o">Gelten für 3D-Viewer-Export</span></div> <div class="params-grid svelte-1cikr1o"><div class="param-group svelte-1cikr1o"><label for="render-profile" class="svelte-1cikr1o">Viewer-Qualität</label> <select id="render-profile" class="svelte-1cikr1o"><option>Standard</option><option>Hoch</option><option>Ultra</option></select></div> <div class="param-group svelte-1cikr1o"><label for="resolution-slider" class="svelte-1cikr1o">Auflösung (m/px)</label> <div class="param-input svelte-1cikr1o"><input id="resolution-slider" type="range" min="0.1" max="2.0" step="0.05" class="svelte-1cikr1o"/> <span class="param-value svelte-1cikr1o"> </span></div></div> <div class="param-group svelte-1cikr1o"><label for="texture-size" class="svelte-1cikr1o">Max. Texturgröße</label> <select id="texture-size" class="svelte-1cikr1o"><option>4096 px</option><option>8192 px</option><option>16384 px</option></select></div> <div class="param-group svelte-1cikr1o"><label for="mesh-stride" class="svelte-1cikr1o">Mesh-Stride</label> <div class="param-input svelte-1cikr1o"><input id="mesh-stride" type="range" min="1" max="16" step="1" class="svelte-1cikr1o"/> <span class="param-value svelte-1cikr1o"> </span></div></div></div> <!></section></div>');function hE(n,e){$i(e,!0);let t=wt(e,"apiUrl",3,"http://localhost:8000"),i=wt(e,"pipelineProgress",19,()=>({prepare:0,harmonize:0,masks:0,terrain:0,snow:0,render:0,qa:0,viewer:0})),r=wt(e,"pipelineRunning",3,!1),s=wt(e,"canRunFullPipeline",3,!1),a=wt(e,"canRunSnowPipeline",3,!1),o=wt(e,"canExportViewer",3,!1),l=wt(e,"renderProfile",15,"default"),c=wt(e,"winterProfileName",15,"default"),u=wt(e,"profileCustom",15,!1),f=wt(e,"resolutionM",31,()=>Xt(xr.default.resolutionM)),h=wt(e,"maxTextureDim",31,()=>Xt(xr.default.maxTextureDim)),m=wt(e,"meshStride",31,()=>Xt(xr.default.meshStride));const _=ka(),v=[{key:"prepare",name:"Vorbereitung",icon:"check-circle"},{key:"harmonize",name:"Harmonisieren",icon:"layers"},{key:"masks",name:"Maskierung",icon:"eye"},{key:"terrain",name:"Terrain",icon:"mountain"},{key:"snow",name:"Schneemodell",icon:"snow"},{key:"render",name:"Rendering",icon:"play"},{key:"qa",name:"Qualitätskontrolle",icon:"shield"},{key:"viewer",name:"Viewer-Export",icon:"box"}];function p(fe){return Math.max(0,Math.min(100,i()[fe]??0))}function d(fe){const Q=p(fe);return Q>=100?"done":Q>0||r()&&fe==="prepare"?"active":"idle"}const w=Gt(()=>v.reduce((fe,Q)=>fe+p(Q.key),0)/v.length),b=[{id:"prepare",title:"1. Region vorbereiten",description:"Basisdaten laden und das Projekt startklar machen.",icon:"download",tone:"primary",enabled:()=>!r(),hint:"Dieser Schritt legt die Grundlage für alle weiteren Berechnungen."},{id:"full-pipeline",title:"2A. Komplette Pipeline",description:"Alle Rechenschritte von der Basis bis zum Winter-Rendering ausführen.",icon:"play-circle",tone:"violet",enabled:()=>s()&&!r(),hint:"Verfügbar nach abgeschlossener Regionsvorbereitung."},{id:"snow-pipeline",title:"2B. Nur Schnee-Simulierung",description:"Nur ab der Schnee-Simulation weiterrechnen, wenn die Basis schon vorbereitet ist.",icon:"snowflake",tone:"cyan",enabled:()=>a()&&!r(),hint:"Erfordert abgeschlossene Harmonisierung, Maskierung und Terrain-Berechnung."},{id:"export-viewer",title:"3. 3D Viewer exportieren",description:"Das Ergebnis als Web-Viewer mit Mesh und Texturen bereitstellen.",icon:"box",tone:"lavender",enabled:()=>o()&&!r(),hint:"Erfordert abgeschlossene Pipeline inklusive Qualitätskontrolle."}];function y(fe){_(fe)}function C(fe){const Q=fe.currentTarget.value;l(Q);const K=oE(Q);K&&(f(K.resolutionM),h(K.maxTextureDim),m(K.meshStride))}var A=uE(),R=z(A),L=z(R),E=G(z(L),2),M=z(E),D=G(L,2),W=z(D),H=z(W);Ot(H,{name:"box",size:14});var te=G(H,2),re=z(te),Z=G(R,2),se=z(Z),j=G(z(se),2),me=z(j);{let fe=Gt(()=>r()?"spin":"");Ot(me,{name:"refresh",size:14,get className(){return x(fe)}})}var ye=G(me,2),Ce=z(ye),X=G(se,2);Gi(X,21,()=>v,js,(fe,Q)=>{const K=Gt(()=>Math.round(p(x(Q).key)));var pe=lE(),be=z(pe),xe=z(be),ve=z(xe),N=G(xe,2),ae=z(N),Qe=G(be,2),U=z(Qe);tt(ge=>{Un(pe,1,`stage-item ${ge??""}`,"svelte-1cikr1o"),Ye(ve,x(Q).name),Ye(ae,`${x(K)??""}%`),ou(U,`width: ${x(K)??""}%`)},[()=>d(x(Q).key)]),ue(fe,pe)});var _e=G(Z,2),$=G(z(_e),2);Gi($,21,()=>b,js,(fe,Q)=>{var K=cE(),pe=z(K),be=z(pe);Ot(be,{get name(){return x(Q).icon},size:22});var xe=G(pe,2),ve=z(xe),N=z(ve),ae=G(ve,2),Qe=z(ae),U=G(ae,2),ge=z(U),J=G(xe,2);Ot(J,{name:"chevron-right",size:18,className:"action-arrow"}),tt(oe=>{Un(K,1,`action-card ${x(Q).tone??""}`,"svelte-1cikr1o"),K.disabled=oe,Ye(N,x(Q).title),Ye(Qe,x(Q).description),Ye(ge,x(Q).hint)},[()=>!x(Q).enabled()]),Et("click",K,()=>y(x(Q).id)),ue(fe,K)});var he=G(_e,2),Te=G(z(he),2),Me=z(Te),Ue=G(z(Me),2),He=z(Ue);He.value=He.__value="default";var Ge=G(He);Ge.value=Ge.__value="high";var lt=G(Ge);lt.value=lt.__value="ultra";var $e;lu(Ue);var ht=G(Me,2),P=G(z(ht),2),Lt=z(P),Ke=G(Lt,2),Je=z(Ke),Fe=G(ht,2),ct=G(z(Fe),2),De=z(ct);De.value=De.__value=4096;var T=G(De);T.value=T.__value=8192;var g=G(T);g.value=g.__value=16384;var B=G(Fe,2),ne=G(z(B),2),ce=z(ne),ie=G(ce,2),Ne=z(ie),Se=G(Te,2);sE(Se,{get projectId(){return e.project.id},get apiUrl(){return t()},get winterProfileName(){return c()},set winterProfileName(fe){c(fe)},get profileCustom(){return u()},set profileCustom(fe){u(fe)}}),tt((fe,Q,K)=>{Ye(M,e.project.name),Ye(re,fe),Ye(Ce,`${Q??""}% Gesamtfortschritt`),$e!==($e=l())&&(Ue.value=(Ue.__value=l())??"",Yo(Ue,l())),bs(Lt,f()),Ye(Je,`${K??""} m/px`),bs(ce,m()),Ye(Ne,m())},[()=>e.project.bbox.join(", "),()=>Math.round(x(w)),()=>f().toFixed(2)]),Et("change",Ue,C),Et("input",Lt,fe=>f(fe.currentTarget.valueAsNumber)),ac(ct,h),Et("input",ce,fe=>m(fe.currentTarget.valueAsNumber)),ue(n,A),Ki()}var fE=Le('<div class="field-error svelte-jtnc39"><!> <span> </span></div>'),dE=Le('<div class="modal svelte-jtnc39"><div class="modal-header svelte-jtnc39"><div><h3 class="svelte-jtnc39">Neues Projekt erstellen</h3> <p class="muted svelte-jtnc39">Region und Grunddaten definieren</p></div> <button class="close-btn svelte-jtnc39" type="button" aria-label="Schliessen">×</button></div> <form class="modal-body svelte-jtnc39"><!> <div class="form-group svelte-jtnc39"><label for="projectName" class="svelte-jtnc39">Projektname</label> <input id="projectName" type="text" placeholder="z.B. Matterhorn-West" class="svelte-jtnc39"/></div> <div class="form-group svelte-jtnc39"><label for="description" class="svelte-jtnc39">Beschreibung <span class="optional svelte-jtnc39">(optional)</span></label> <textarea id="description" placeholder="Kurze Beschreibung der Region..." class="svelte-jtnc39"></textarea></div> <div class="form-group svelte-jtnc39"><label for="bbox" class="svelte-jtnc39">BBox (EPSG:2056)</label> <input id="bbox" type="text" placeholder="minx, miny, maxx, maxy" class="svelte-jtnc39"/> <p class="field-hint svelte-jtnc39">Koordinaten in EPSG:2056 (LV95), mit <code class="svelte-jtnc39">minx &lt; maxx</code> und <code class="svelte-jtnc39">miny &lt; maxy</code>. <br/>Beispiel: <code class="svelte-jtnc39">2788000, 1181000, 2792000, 1185000</code></p></div> <div class="form-actions svelte-jtnc39"><button class="btn-ghost svelte-jtnc39" type="button">Abbrechen</button> <button class="btn-primary svelte-jtnc39" type="submit"><!> Projekt erstellen</button></div></form></div>');function pE(n,e){$i(e,!1);const t=ka();let i=rn(""),r=rn(""),s=rn(""),a=rn(null),o=rn(null);sa(()=>{var W;(W=x(o))==null||W.focus()});const l={minE:2485e3,maxE:2834e3,minN:1075e3,maxN:1296e3};function c(W){const H=W.trim().split(",").map(j=>parseFloat(j.trim()));if(H.length!==4||H.some(j=>Number.isNaN(j)))return null;const[te,re,Z,se]=H;return te>=Z||re>=se||te<l.minE||Z>l.maxE||re<l.minN||se>l.maxN?null:H}function u(){if(F(a,null),!x(i).trim()){F(a,"Bitte geben Sie einen Projektnamen ein.");return}const W=c(x(s));if(!W){F(a,"Ungültige BBox. Format: minx, miny, maxx, maxy mit gültigen EPSG:2056-Koordinaten (LV95).");return}t("submit",{name:x(i).trim(),description:x(r).trim(),bbox:W})}function f(){t("dismiss")}uu();var h=dE(),m=z(h),_=G(z(m),2),v=G(m,2),p=z(v);{var d=W=>{var H=fE(),te=z(H);Ot(te,{name:"alert",size:16});var re=G(te,2),Z=z(re);tt(()=>Ye(Z,x(a))),ue(W,H)};Pe(p,W=>{x(a)&&W(d)})}var w=G(p,2),b=G(z(w),2);$f(b,W=>F(o,W),()=>x(o));var y=G(w,2),C=G(z(y),2);nn(C,"rows",3);var A=G(y,2),R=G(z(A),2),L=G(A,2),E=z(L),M=G(E,2),D=z(M);Ot(D,{name:"cloud-upload",size:16}),Et("click",_,f),il(b,()=>x(i),W=>F(i,W)),il(C,()=>x(r),W=>F(r,W)),il(R,()=>x(s),W=>F(s,W)),Et("click",E,f),Et("submit",v,Sm(u)),ue(n,h),Ki()}const Vl={};var mE=Le('<span class="badge-running svelte-1n46o8q">●</span>'),_E=Le('<div class="project-badge svelte-1n46o8q"><span class="badge-name svelte-1n46o8q"> </span> <!></div>'),vE=Le('<button type="button" class="sidebar-backdrop svelte-1n46o8q" aria-label="Projektmenü schliessen"></button>'),gE=Le('<div class="home-state svelte-1n46o8q"><div class="home-content svelte-1n46o8q"><div class="home-icon svelte-1n46o8q"><svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="svelte-1n46o8q"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke-dasharray="2 2" class="svelte-1n46o8q"></path></svg></div> <h2 class="svelte-1n46o8q">Willkommen bei Let It Snow</h2> <p class="home-subtitle svelte-1n46o8q">Erstellen Sie ein neues Projekt oder wählen Sie ein bestehendes aus.</p> <div class="home-actions svelte-1n46o8q"><button class="btn-primary btn-lg svelte-1n46o8q"><!> Neues Projekt erstellen</button></div></div> <div class="home-steps svelte-1n46o8q"><div class="step-card svelte-1n46o8q"><div class="step-num svelte-1n46o8q">1</div> <div class="step-text svelte-1n46o8q"><strong class="svelte-1n46o8q">Projekt erstellen</strong> <p class="svelte-1n46o8q">Region mit BBox-Koordinaten in EPSG:2056 (LV95) definieren</p></div></div> <div class="step-card svelte-1n46o8q"><div class="step-num svelte-1n46o8q">2</div> <div class="step-text svelte-1n46o8q"><strong class="svelte-1n46o8q">Pipeline starten</strong> <p class="svelte-1n46o8q">Vollständig oder nur Schnee-Rendering</p></div></div> <div class="step-card svelte-1n46o8q"><div class="step-num svelte-1n46o8q">3</div> <div class="step-text svelte-1n46o8q"><strong class="svelte-1n46o8q">3D Viewer</strong> <p class="svelte-1n46o8q">Interaktives Ergebnis betrachten</p></div></div></div></div>'),xE=Le('<!> <section class="panel svelte-1n46o8q"><!></section>',1),ME=Le('<div class="viewer-empty svelte-1n46o8q"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="svelte-1n46o8q"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" class="svelte-1n46o8q"></path></svg> <p class="svelte-1n46o8q">Keine Viewer-Daten vorhanden.<br class="svelte-1n46o8q"/>Führen Sie zuerst "3D Viewer exportieren" aus.</p></div>'),SE=Le('<div class="viewer-panel svelte-1n46o8q"><div class="viewer-toolbar svelte-1n46o8q"><label class="toolbar-label svelte-1n46o8q"><!> Orthofoto: <select class="svelte-1n46o8q"><option class="svelte-1n46o8q">Winter</option><option class="svelte-1n46o8q">Sommer</option></select></label> <label class="toolbar-label svelte-1n46o8q"><!> Höhenmodell: <select class="svelte-1n46o8q"><option class="svelte-1n46o8q">Schneehöhe</option><option class="svelte-1n46o8q">Sommer</option></select></label> <button class="btn-secondary svelte-1n46o8q"><!> Laden</button></div> <div class="viewer-container svelte-1n46o8q"><!></div></div>'),yE=Le('<div class="project-panel svelte-1n46o8q"><div class="panel-header svelte-1n46o8q"><h2 class="svelte-1n46o8q"> </h2> <div class="tabs svelte-1n46o8q"><button><!> Pipeline</button> <button><!> 3D Viewer</button></div></div> <!></div>'),EE=Le('<div class="error-banner svelte-1n46o8q"><!> <span class="svelte-1n46o8q"> </span> <button class="close-btn svelte-1n46o8q">×</button></div>'),bE=Le('<div class="modal-backdrop svelte-1n46o8q" role="presentation"><div class="modal svelte-1n46o8q" role="dialog" aria-modal="true" aria-label="Neues Projekt erstellen"><!></div></div>'),TE=Le('<div class="modal-backdrop svelte-1n46o8q" role="presentation"><div class="modal modal-lg svelte-1n46o8q" role="dialog" aria-modal="true" aria-label="Task-Fortschritt"><!></div></div>'),wE=Le('<div class="app svelte-1n46o8q"><header class="app-header svelte-1n46o8q"><div class="header-left svelte-1n46o8q"><button class="sidebar-toggle svelte-1n46o8q"><!></button> <button class="logo svelte-1n46o8q" type="button" aria-label="Zur Startseite wechseln"><svg class="logo-icon svelte-1n46o8q" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke-dasharray="2 2" class="svelte-1n46o8q"></path></svg> <div class="svelte-1n46o8q"><h1 class="svelte-1n46o8q">Let It Snow</h1> <p class="svelte-1n46o8q">3D-Orthophoto Renderer</p></div></button></div> <div class="header-right svelte-1n46o8q"><!></div></header> <div class="layout svelte-1n46o8q"><!> <aside><section class="sidebar-section svelte-1n46o8q"><div class="section-header svelte-1n46o8q"><!> <h3 class="svelte-1n46o8q">Projekte</h3></div> <section class="sidebar-section svelte-1n46o8q"><button class="btn-create-project svelte-1n46o8q"><!> <span class="svelte-1n46o8q">Neues Projekt erstellen</span></button></section> <!></section></aside> <main><!> <!></main></div> <!> <!></div>');function AE(n,e){$i(e,!0);const t=(Vl==null?void 0:Vl.VITE_API_URL)||"http://localhost:8000",i=()=>({prepare:0,harmonize:0,masks:0,terrain:0,snow:0,render:0,qa:0,viewer:0});let r=ke(null),s=ke("home"),a=ke("pipeline");const o=typeof window<"u"?window.matchMedia("(max-width: 800px)"):null;let l=ke(Xt((o==null?void 0:o.matches)??!1)),c=ke(!((o==null?void 0:o.matches)??!1));sa(()=>{const le=window.matchMedia("(max-width: 800px)"),ee=ze=>{F(l,ze,!0),F(c,!ze)};ee(le.matches);const Be=ze=>ee(ze.matches);return le.addEventListener("change",Be),()=>le.removeEventListener("change",Be)});let u=ke(!1),f=ke(null),h=ke(0),m=ke(""),_=ke(""),v=ke(""),p=ke(null),d=ke(!1),w=ke(!1),b=ke(""),y=ke("winter"),C=ke("snow_surface"),A=ke(Xt(i())),R=ke("default"),L=ke("default"),E=ke(!1),M=ke(Xt(xr.default.resolutionM)),D=ke(Xt(xr.default.maxTextureDim)),W=ke(Xt(xr.default.meshStride)),H=ke(0);function te(le){return le.toLowerCase().replace(/[^a-z0-9_-]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}async function re(le){F(f,null);try{const ee=await fetch(`${t}/projects`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(le.detail)});if(!ee.ok)throw new Error(`HTTP ${ee.status}`);F(u,!1),F(h,x(h)+1);const Be=await fetch(`${t}/projects`);if(!Be.ok)throw new Error(`HTTP ${Be.status}`);const ze=await Be.json(),bt=ze[ze.length-1];bt&&(F(r,bt,!0),F(s,"project"),j(bt))}catch(ee){F(f,ee.message,!0)}}function Z(le){const ee=le??x(m);return ee?`${t}/viewer/data/${ee}/scene.json?v=${x(H)}`:""}function se(le){typeof le.tile_id=="string"&&F(m,le.tile_id,!0),typeof le.config_path=="string"&&F(_,le.config_path,!0),typeof le.scene_url=="string"&&F(v,Z(le.tile_id),!0),typeof le.rendering_profile_name=="string"&&F(L,le.rendering_profile_name,!0),typeof le.rendering_profile_custom=="boolean"&&F(E,le.rendering_profile_custom,!0),le.progress&&F(A,{...i(),...le.progress},!0)}async function j(le){x(l)&&F(c,!1),F(r,le,!0),F(m,`${te(le.name)}_001`),F(f,null),F(p,null),F(_,""),F(H,x(H)+1),F(v,""),F(a,"pipeline"),F(A,i(),!0),F(L,"default"),F(E,!1),F(s,"project");try{const ee=await fetch(`${t}/projects/${le.id}/pipeline-status`);if(!ee.ok){F(f,`Pipeline-Status konnte nicht geladen werden (HTTP ${ee.status})`);return}se(await ee.json())}catch(ee){F(f,(ee==null?void 0:ee.message)??"Pipeline-Status konnte nicht geladen werden",!0)}}async function me(le,ee){F(f,null),F(p,null),F(w,!0);try{const Be=await fetch(le,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)});if(!Be.ok)throw new Error(`HTTP ${Be.status}`);const ze=await Be.json();F(p,ze.task_id,!0),F(d,!0)}catch(Be){F(f,Be.message,!0),F(w,!1)}}async function ye(){!x(r)||x(w)||await me(`${t}/tasks/prepare`,{project_id:x(r).id,name:x(r).name,bbox:x(r).bbox})}async function Ce(){!x(r)||x(w)||await me(`${t}/tasks/run-pipeline`,{project_id:x(r).id,tile_id:x(m),config_path:x(_),profile:x(L)})}async function X(){!x(r)||x(w)||await me(`${t}/tasks/run-snow`,{project_id:x(r).id,tile_id:x(m),config_path:x(_),profile:x(L)})}async function _e(){!x(r)||x(w)||await me(`${t}/tasks/export-viewer`,{project_id:x(r).id,tile_id:x(m),config_path:x(_),params:{profile:x(R),resolution_m:x(M),max_texture_dim:Number(x(D)),stride:x(W)}})}async function $(le){const ee=le.detail.progress;if(ee){if(F(w,le.detail.status==="RUNNING"),le.detail.status==="SUCCESS"){if(typeof ee.config_path=="string"&&F(_,ee.config_path,!0),typeof ee.tile_id=="string"&&F(m,ee.tile_id,!0),typeof ee.scene_url=="string"&&(F(H,x(H)+1),F(v,Z(typeof ee.tile_id=="string"?ee.tile_id:x(m)),!0)),F(b,""),F(w,!1),x(r))try{const Be=await fetch(`${t}/projects/${x(r).id}/pipeline-status`);Be.ok&&se(await Be.json())}catch{}}else le.detail.status==="FAILURE"&&F(w,!1);for(const[Be,ze]of Object.entries(ee))typeof ze=="number"&&Be in x(A)&&F(A,{...x(A),[Be]:ze},!0)}}function he(){F(c,!x(c))}function Te(){x(m)&&(F(H,x(H)+1),F(v,Z(x(m)),!0))}function Me(){F(d,!1)}function Ue(){F(s,"home"),F(r,null),F(d,!1),F(p,null),F(v,""),F(f,null)}const He=Gt(()=>!!x(_)||x(A).prepare>=100),Ge=Gt(()=>x(A).harmonize>=100&&x(A).masks>=100&&x(A).terrain>=100),lt=Gt(()=>x(A).qa>=100),$e=Gt(()=>!!x(v)||x(A).viewer>=100);var ht=wE(),P=z(ht),Lt=z(P),Ke=z(Lt),Je=z(Ke);{let le=Gt(()=>x(c)?"x":"menu");Ot(Je,{get name(){return x(le)},size:22})}var Fe=G(Ke,2),ct=G(Lt,2),De=z(ct);{var T=le=>{var ee=_E(),Be=z(ee),ze=z(Be),bt=G(Be,2);{var dt=kt=>{var Ji=mE();ue(kt,Ji)};Pe(bt,kt=>{x(w)&&kt(dt)})}tt(()=>Ye(ze,x(r).name)),ue(le,ee)};Pe(De,le=>{x(r)&&le(T)})}var g=G(P,2),B=z(g);{var ne=le=>{var ee=vE();Et("click",ee,()=>F(c,!1)),ue(le,ee)};Pe(B,le=>{x(l)&&x(c)&&le(ne)})}var ce=G(B,2);let ie;var Ne=z(ce),Se=z(Ne),fe=z(Se);Ot(fe,{name:"folder",size:16});var Q=G(Se,2),K=z(Q),pe=z(K);Ot(pe,{name:"cloud-upload",size:16});var be=G(Q,2);{let le=Gt(()=>{var ee;return((ee=x(r))==null?void 0:ee.id)??null});Um(be,{get apiUrl(){return t},get refreshKey(){return x(h)},get selectedId(){return x(le)},$$events:{select:ee=>j(ee.detail)}})}var xe=G(ce,2);let ve;var N=z(xe);{var ae=le=>{var ee=gE(),Be=z(ee),ze=G(z(Be),6),bt=z(ze),dt=z(bt);Ot(dt,{name:"cloud-upload",size:20}),Et("click",bt,()=>F(u,!0)),ue(le,ee)},Qe=le=>{var ee=yE(),Be=z(ee),ze=z(Be),bt=z(ze),dt=G(ze,2),kt=z(dt),Ji=z(kt);Ot(Ji,{name:"layers",size:15});var Tn=G(kt,2),Qi=z(Tn);Ot(Qi,{name:"eye",size:15});var ts=G(Be,2);{var ns=$n=>{var Fn=xE(),di=Oo(Fn);hE(di,{get project(){return x(r)},get apiUrl(){return t},get pipelineProgress(){return x(A)},get pipelineRunning(){return x(w)},get canRunFullPipeline(){return x(He)},get canRunSnowPipeline(){return x(Ge)},get canExportViewer(){return x(lt)},get renderProfile(){return x(R)},set renderProfile(Xe){F(R,Xe,!0)},get winterProfileName(){return x(L)},set winterProfileName(Xe){F(L,Xe,!0)},get profileCustom(){return x(E)},set profileCustom(Xe){F(E,Xe,!0)},get resolutionM(){return x(M)},set resolutionM(Xe){F(M,Xe,!0)},get maxTextureDim(){return x(D)},set maxTextureDim(Xe){F(D,Xe,!0)},get meshStride(){return x(W)},set meshStride(Xe){F(W,Xe,!0)},$$events:{prepare:ye,"full-pipeline":Ce,"snow-pipeline":X,"export-viewer":_e}});var wi=G(di,2),xt=z(wi);y_(xt,{get projectId(){return x(r).id},get apiUrl(){return t}}),ue($n,Fn)},er=$n=>{var Fn=SE(),di=z(Fn),wi=z(di),xt=z(wi);Ot(xt,{name:"sun",size:14});var Xe=G(xt,2),Mt=z(Xe);Mt.value=Mt.__value="winter";var Ai=G(Mt);Ai.value=Ai.__value="summer";var yr=G(wi,2),is=z(yr);Ot(is,{name:"layers",size:14});var S=G(is,2),O=z(S);O.value=O.__value="snow_surface";var q=G(O);q.value=q.__value="base";var Y=G(yr,2),I=z(Y);Ot(I,{name:"refresh",size:14});var de=G(di,2),Ee=z(de);{var Ie=Ve=>{Dy(Ve,{get sceneUrl(){return x(v)},get textureMode(){return x(y)},get elevationModel(){return x(C)},elevationFactor:1})},Oe=Ve=>{var Ze=ME();ue(Ve,Ze)};Pe(Ee,Ve=>{x(v)?Ve(Ie):Ve(Oe,-1)})}tt(()=>Y.disabled=!x($e)),ac(Xe,()=>x(y),Ve=>F(y,Ve)),ac(S,()=>x(C),Ve=>F(C,Ve)),Et("click",Y,Te),ue($n,Fn)};Pe(ts,$n=>{x(a)==="pipeline"?$n(ns):$n(er,-1)})}tt(()=>{Ye(bt,x(r).name),Un(kt,1,sc(x(a)==="pipeline"?"tab active":"tab"),"svelte-1n46o8q"),Un(Tn,1,sc(x(a)==="viewer"?"tab active":"tab"),"svelte-1n46o8q")}),Et("click",kt,()=>F(a,"pipeline")),Et("click",Tn,()=>F(a,"viewer")),ue(le,ee)};Pe(N,le=>{x(s)==="home"?le(ae):le(Qe,-1)})}var U=G(N,2);{var ge=le=>{var ee=EE(),Be=z(ee);Ot(Be,{name:"alert",size:18});var ze=G(Be,2),bt=z(ze),dt=G(ze,2);tt(()=>Ye(bt,x(f))),Et("click",dt,()=>F(f,null)),ue(le,ee)};Pe(U,le=>{x(f)&&le(ge)})}var J=G(g,2);{var oe=le=>{var ee=bE(),Be=z(ee),ze=z(Be);pE(ze,{$$events:{submit:re,dismiss:()=>F(u,!1)}}),ue(le,ee)};Pe(J,le=>{x(u)&&le(oe)})}var Re=G(J,2);{var Ae=le=>{var ee=TE(),Be=z(ee),ze=z(Be);D_(ze,{get taskId(){return x(p)},get apiUrl(){return t},$$events:{complete:$,dismiss:Me}}),ue(le,ee)};Pe(Re,le=>{x(p)&&x(d)&&le(Ae)})}tt(()=>{nn(Ke,"aria-label",x(c)?"Projektmenü schliessen":"Projektmenü öffnen"),nn(Ke,"aria-expanded",x(c)),ie=Un(ce,1,"sidebar svelte-1n46o8q",null,ie,{open:x(c)}),ve=Un(xe,1,"workspace svelte-1n46o8q",null,ve,{"workspace-viewer":x(s)==="project"&&x(a)==="viewer"})}),Et("click",Ke,he),Et("click",Fe,Ue),Et("click",K,()=>F(u,!0)),ue(n,ht),Ki()}am(AE,{target:document.getElementById("app")});
